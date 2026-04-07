const processPolyfill = {
  env: {
    NODE_ENV: 'development',
  },
  cwd: () => '/',
  on: () => {},
  exit: () => {},
  memoryUsage: () => ({
    heapUsed: 0,
    heapTotal: 1,
    rss: 0,
  }),
};

globalThis.process = globalThis.process || processPolyfill;
const processEnv = Object.assign(
  globalThis.process.env || {},
  processPolyfill.env,
);
globalThis.process.env = processEnv;
globalThis.__HYTOPIA_SINGLEPLAYER_CONFIG = globalThis.__HYTOPIA_SINGLEPLAYER_CONFIG || {};

let bootPromise;
let bootedGameId;
let ConnectionClass;
let connection;
let botClients = [];

const clearBotClients = () => {
  for (const botClient of botClients) {
    try {
      botClient.worker.postMessage({ type: 'shutdown' });
    } catch {
      // Ignore worker shutdown races.
    }

    botClient.worker.terminate();
    botClient.connection.disconnect();
  }

  botClients = [];
};

const createBotClients = async connectionSearch => {
  const { resolveBotWorkerConfigs } = await import('./BotWorkerConfig.js');
  const botConfigs = resolveBotWorkerConfigs(connectionSearch);
  if (botConfigs.length === 0) {
    return;
  }

  botClients = botConfigs.map((botConfig, index) => {
    const worker = new Worker(new URL('./BotPlayerWorker.js', import.meta.url), { type: 'module' });
    const botConnectionParams = new URLSearchParams(connectionSearch || '');
    botConnectionParams.delete('botCount');
    botConnectionParams.delete('botMode');
    botConnectionParams.delete('botModes');
    botConnectionParams.delete('botThinkIntervalMs');
    botConnectionParams.delete('botAttackRange');
    botConnectionParams.set('bot', '1');
    botConnectionParams.set('botId', botConfig.id);
    botConnectionParams.set('botName', botConfig.name);

    const botConnection = new ConnectionClass(botConnectionParams, payload => {
      const transferable = payload.buffer.slice(payload.byteOffset, payload.byteOffset + payload.byteLength);
      worker.postMessage({
        type: 'server-packet',
        payload: transferable,
      }, [transferable]);
    });

    worker.onmessage = event => {
      const message = event.data;
      if (!message || typeof message !== 'object') {
        return;
      }

      if (message.type === 'client-packet' && message.payload) {
        const payload = message.payload instanceof Uint8Array
          ? message.payload
          : new Uint8Array(message.payload);
        botConnection.receiveSerializedPacket(payload);
      }
    };

    worker.postMessage({
      type: 'init',
      attackRange: botConfig.attackRange,
      role: botConfig.role,
      selfName: botConfig.name,
      thinkIntervalMs: botConfig.thinkIntervalMs,
    });

    return {
      connection: botConnection,
      id: botConfig.id,
      role: botConfig.role,
      worker,
      workerIndex: index,
    };
  });
};

const ensureBooted = async requestedGameId => {
  if (bootPromise) {
    if (requestedGameId && bootedGameId && requestedGameId !== bootedGameId) {
      console.warn(
        `Singleplayer worker already booted with game \"${bootedGameId}\". ` +
        `Ignoring subsequent request for \"${requestedGameId}\".`,
      );
    }

    return bootPromise;
  }

  bootPromise = (async () => {
    const [gameServerModule, gamesModule, connectionModule, eventRouterModule] = await Promise.all([
      import('@/GameServer'),
      import('@/games'),
      import('@/networking/Connection'),
      import('@/events/EventRouter'),
    ]);

    ConnectionClass = connectionModule.default;
    const EventRouter = eventRouterModule.default;
    const resolvedGame = gamesModule.resolveGameSetup(requestedGameId);
    bootedGameId = resolvedGame.id;

    if (requestedGameId && requestedGameId !== resolvedGame.id) {
      console.warn(
        `Unknown game id \"${requestedGameId}\". Falling back to \"${resolvedGame.id}\".`,
      );
    }

    const serverReadyPromise = new Promise(resolve => {
      EventRouter.globalInstance.on(gameServerModule.GameServerEvent.START, () => {
        resolve();
      });
    });

    gameServerModule.startServer(resolvedGame.setup);
    await serverReadyPromise;
  })();

  return bootPromise;
};

const postServerPacket = payload => {
  const bytes = payload.byteOffset === 0 && payload.byteLength === payload.buffer.byteLength
    ? payload
    : payload.slice();

  self.postMessage({
    type: 'server-packet',
    payload: bytes.buffer,
  }, [bytes.buffer]);
};

const onConnect = async message => {
  const connectionParams = new URLSearchParams(message.search || '');
  const requestedGameId = connectionParams.get('game') || undefined;

  const disableEnemiesOverride = connectionParams.get('disableEnemies');
  const soloMode = connectionParams.get('soloMode');
  if (disableEnemiesOverride === '1') {
    processEnv.HYTOPIA_PLAYGROUND_DISABLE_ENEMIES = '1';
    globalThis.__HYTOPIA_SINGLEPLAYER_CONFIG.disableEnemies = true;
  } else if (disableEnemiesOverride === '0') {
    processEnv.HYTOPIA_PLAYGROUND_DISABLE_ENEMIES = '0';
    globalThis.__HYTOPIA_SINGLEPLAYER_CONFIG.disableEnemies = false;
  } else if (soloMode === 'peaceful') {
    processEnv.HYTOPIA_PLAYGROUND_DISABLE_ENEMIES = '1';
    globalThis.__HYTOPIA_SINGLEPLAYER_CONFIG.disableEnemies = true;
  } else if (soloMode === 'enemy' || soloMode === 'boss') {
    processEnv.HYTOPIA_PLAYGROUND_DISABLE_ENEMIES = '0';
    globalThis.__HYTOPIA_SINGLEPLAYER_CONFIG.disableEnemies = false;
  } else {
    delete processEnv.HYTOPIA_PLAYGROUND_DISABLE_ENEMIES;
    delete globalThis.__HYTOPIA_SINGLEPLAYER_CONFIG.disableEnemies;
  }

  const enemyMoveMode = connectionParams.get('enemyMoveMode');
  if (enemyMoveMode === 'velocity' || enemyMoveMode === 'position') {
    processEnv.HYTOPIA_PLAYGROUND_ENEMY_MOVE_MODE = enemyMoveMode;
  } else {
    delete processEnv.HYTOPIA_PLAYGROUND_ENEMY_MOVE_MODE;
  }

  const disableBlockColliders = connectionParams.get('disableBlockColliders');
  if (disableBlockColliders === '0' || disableBlockColliders === '1') {
    processEnv.HYTOPIA_DISABLE_BLOCK_COLLIDERS = disableBlockColliders;
  } else {
    processEnv.HYTOPIA_DISABLE_BLOCK_COLLIDERS = '0';
  }

  const blockColliderAggregation = connectionParams.get('blockColliderAggregation');
  if (blockColliderAggregation === 'chunk' || blockColliderAggregation === 'global' || blockColliderAggregation === 'chunk-voxel-merged') {
    processEnv.HYTOPIA_BLOCK_COLLIDER_AGGREGATION = blockColliderAggregation;
  } else {
    processEnv.HYTOPIA_BLOCK_COLLIDER_AGGREGATION = 'chunk-voxel-merged';
  }

  await ensureBooted(requestedGameId);

  clearBotClients();

  if (connection) {
    connection.disconnect();
  }

  connection = new ConnectionClass(connectionParams, postServerPacket);
  await createBotClients(message.search || '');

  self.postMessage({ type: 'connected' });
};

self.onmessage = async event => {
  const message = event.data;

  try {
    if (!message || typeof message !== 'object') {
      return;
    }

    switch (message.type) {
      case 'connect':
        await onConnect(message);
        break;
      case 'client-packet': {
        if (!connection || !message.payload) {
          return;
        }

        const payload = message.payload instanceof Uint8Array
          ? message.payload
          : new Uint8Array(message.payload);

        connection.receiveSerializedPacket(payload);
        break;
      }
      case 'disconnect':
        clearBotClients();
        connection?.disconnect();
        connection = undefined;
        break;
      default:
        break;
    }
  } catch (error) {
    self.postMessage({
      type: 'error',
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
