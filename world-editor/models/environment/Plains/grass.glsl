vec3 hytopiaRotateAroundAxis(vec3 v, vec3 axis, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return v * c + cross(axis, v) * s + axis * dot(axis, v) * (1.0 - c);
}

vec3 hytopiaApplyStaticEntityShaderAnimation(
  vec3 localPosition,
  vec3 worldPosition,
  vec3 normal,
  vec2 uv,
  float time,
  vec3 windDirection,
  float windStrength,
  float interactionState,
  float interactionTime,
  mat4 instanceWorldMatrix,
  vec3 pivotWorldPosition
) {
  vec2 windXZ = windDirection.xz;
  float windLength = length(windXZ);
  vec2 windDir = windLength > 0.0001 ? windXZ / windLength : vec2(1.0, 0.0);
  vec3 worldWindDirection = vec3(windDir.x, 0.0, windDir.y);
  vec3 worldUp = vec3(0.0, 1.0, 0.0);

  vec3 centerOffset = worldPosition - pivotWorldPosition;
  float gust = sin(time * 1.35 + worldPosition.x * 1.1 + worldPosition.z * 0.9);
  float sway = gust * 0.7 * windStrength;

  if (interactionTime >= 0.0) {
    float elapsed = max(time - interactionTime, 0.0);
    float enterState = step(0.5, interactionState);
    float direction = mix(-1.25, 1.0, enterState);
    float amplitude = mix(1.05, 0.78, enterState);
    sway += sin(elapsed * 17.0) * exp(-elapsed * 2.0) * amplitude * direction;
  }

  vec3 bendAxis = normalize(cross(worldUp, worldWindDirection));
  float bendAngle = sway;
  vec3 centeredAnimated = pivotWorldPosition + hytopiaRotateAroundAxis(centerOffset, bendAxis, bendAngle * 0.25);

  vec3 contactPivotWorldPosition = vec3(worldPosition.x, pivotWorldPosition.y, worldPosition.z);
  vec3 contactOffset = worldPosition - contactPivotWorldPosition;
  vec3 contactAnimated = contactPivotWorldPosition + hytopiaRotateAroundAxis(contactOffset, bendAxis, bendAngle * 0.25);

  return mix(centeredAnimated, contactAnimated, 0.35);
}
