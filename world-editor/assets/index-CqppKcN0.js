var Wd=Object.defineProperty;var Xd=(s,e,t)=>e in s?Wd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var z=(s,e,t)=>Xd(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nl="183",qd=0,Sc=1,Yd=2,Wr=1,$d=2,Ps=3,An=0,Bt=1,Qt=2,Xn=0,Ji=1,bc=2,Ec=3,Tc=4,Kd=5,bi=100,jd=101,Zd=102,Jd=103,Qd=104,ef=200,tf=201,nf=202,sf=203,_a=204,xa=205,rf=206,of=207,af=208,lf=209,cf=210,hf=211,uf=212,df=213,ff=214,va=0,Ma=1,ya=2,ns=3,Sa=4,ba=5,Ea=6,Ta=7,Uu=0,pf=1,mf=2,En=0,Fu=1,Ou=2,Bu=3,ku=4,zu=5,Vu=6,Hu=7,wc="attached",gf="detached",Gu=300,Ai=301,is=302,So=303,bo=304,ho=306,ss=1e3,Sn=1001,Qr=1002,Mt=1003,Wu=1004,Ds=1005,Tt=1006,Xr=1007,Vn=1008,Kt=1009,Xu=1010,qu=1011,Hs=1012,Ul=1013,Cn=1014,tn=1015,Yn=1016,Fl=1017,Ol=1018,Gs=1020,Yu=35902,$u=35899,Ku=1021,ju=1022,nn=1023,$n=1026,Ti=1027,Bl=1028,kl=1029,rs=1030,zl=1031,Vl=1033,qr=33776,Yr=33777,$r=33778,Kr=33779,wa=35840,Aa=35841,Ca=35842,Ra=35843,Ia=36196,La=37492,Pa=37496,Da=37488,Na=37489,Ua=37490,Fa=37491,Oa=37808,Ba=37809,ka=37810,za=37811,Va=37812,Ha=37813,Ga=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,$a=37819,Ka=37820,ja=37821,Za=36492,Ja=36494,Qa=36495,el=36283,tl=36284,nl=36285,il=36286,Ws=2300,Xs=2301,Eo=2302,Ac=2303,Cc=2400,Rc=2401,Ic=2402,_f=2500,xf=0,Zu=1,sl=2,vf=3200,Ju=0,Mf=1,ri="",vt="srgb",Gt="srgb-linear",eo="linear",tt="srgb",Pi=7680,Lc=519,yf=512,Sf=513,bf=514,Hl=515,Ef=516,Tf=517,Gl=518,wf=519,rl=35044,Pc="300 es",bn=2e3,qs=2001;function Af(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Cf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rf(){const s=Ys("canvas");return s.style.display="block",s}const Dc={};function to(...s){const e="THREE."+s.shift();console.log(e,...s)}function Qu(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Re(...s){s=Qu(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Pe(...s){s=Qu(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function no(...s){const e=s.join(" ");e in Dc||(Dc[e]=!0,Re(...s))}function If(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Lf={[va]:Ma,[ya]:Ea,[Sa]:Ta,[ns]:ba,[Ma]:va,[Ea]:ya,[Ta]:Sa,[ba]:ns};class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nc=1234567;const Qi=Math.PI/180,os=180/Math.PI;function dn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[s&255]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function Wl(s,e){return(s%e+e)%e}function Pf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Df(s,e,t){return s!==e?(t-s)/(e-s):0}function Fs(s,e,t){return(1-t)*s+t*e}function Nf(s,e,t,n){return Fs(s,e,1-Math.exp(-t*n))}function Uf(s,e=1){return e-Math.abs(Wl(s,e*2)-e)}function Ff(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Of(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Bf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kf(s,e){return s+Math.random()*(e-s)}function zf(s){return s*(.5-Math.random())}function Vf(s){s!==void 0&&(Nc=s);let e=Nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hf(s){return s*Qi}function Gf(s){return s*os}function Wf(s){return(s&s-1)===0&&s!==0}function Xf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $f={DEG2RAD:Qi,RAD2DEG:os,generateUUID:dn,clamp:$e,euclideanModulo:Wl,mapLinear:Pf,inverseLerp:Df,lerp:Fs,damp:Nf,pingpong:Uf,smoothstep:Ff,smootherstep:Of,randInt:Bf,randFloat:kf,randFloatSpread:zf,seededRandom:Vf,degToRad:Hf,radToDeg:Gf,isPowerOfTwo:Wf,ceilPowerOfTwo:Xf,floorPowerOfTwo:qf,setQuaternionFromProperEuler:Yf,normalize:nt,denormalize:un};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const M=Math.acos(p),E=Math.sin(M);g=Math.sin(g*M)/E,a=Math.sin(a*M)/E,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new D,Uc=new Rn;class ze{constructor(e,t,n,i,r,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],M=i[1],E=i[4],y=i[7],w=i[2],A=i[5],T=i[8];return r[0]=o*_+a*M+l*w,r[3]=o*p+a*E+l*A,r[6]=o*g+a*y+l*T,r[1]=c*_+h*M+u*w,r[4]=c*p+h*E+u*A,r[7]=c*g+h*y+u*T,r[2]=d*_+f*M+m*w,r[5]=d*p+f*E+m*A,r[8]=d*g+f*y+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new ze,Fc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){const s={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?eo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return no("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return no("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Gt]:{primaries:e,whitePoint:n,transfer:eo,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),s}const je=Kf();function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Di;class jf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=Ys("canvas")),Di.width=e.width,Di.height=e.height;const i=Di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zf=0;class Xl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ao(i[o].image)):r.push(Ao(i[o]))}else r=Ao(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Jf=0;const Co=new D;class wt extends us{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Sn,i=Sn,r=Tt,o=Vn,a=nn,l=Kt,c=wt.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=dn(),this.name="",this.source=new Xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Gu;wt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(f+1)/2,w=(g+1)/2,A=(h+d)/4,T=(u+_)/4,x=(m+p)/4;return E>y&&E>w?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=T/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=x/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qf extends us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new wt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Qf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ed extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ep extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fe{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,m,_,p){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,_,p)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),o=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tp,e,np)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Zn.crossVectors(n,Yt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Zn.crossVectors(n,Yt)),Zn.normalize(),nr.crossVectors(Yt,Zn),i[0]=Zn.x,i[4]=nr.x,i[8]=Yt.x,i[1]=Zn.y,i[5]=nr.y,i[9]=Yt.y,i[2]=Zn.z,i[6]=nr.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],M=n[3],E=n[7],y=n[11],w=n[15],A=i[0],T=i[4],x=i[8],S=i[12],F=i[1],R=i[5],O=i[9],B=i[13],U=i[2],H=i[6],V=i[10],k=i[14],Q=i[3],J=i[7],oe=i[11],fe=i[15];return r[0]=o*A+a*F+l*U+c*Q,r[4]=o*T+a*R+l*H+c*J,r[8]=o*x+a*O+l*V+c*oe,r[12]=o*S+a*B+l*k+c*fe,r[1]=h*A+u*F+d*U+f*Q,r[5]=h*T+u*R+d*H+f*J,r[9]=h*x+u*O+d*V+f*oe,r[13]=h*S+u*B+d*k+f*fe,r[2]=m*A+_*F+p*U+g*Q,r[6]=m*T+_*R+p*H+g*J,r[10]=m*x+_*O+p*V+g*oe,r[14]=m*S+_*B+p*k+g*fe,r[3]=M*A+E*F+y*U+w*Q,r[7]=M*T+E*R+y*H+w*J,r[11]=M*x+E*O+y*V+w*oe,r[15]=M*S+E*B+y*k+w*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],M=l*f-c*d,E=a*f-c*u,y=a*d-l*u,w=o*f-c*h,A=o*d-l*h,T=o*u-a*h;return t*(_*M-p*E+g*y)-n*(m*M-p*w+g*A)+i*(m*E-_*w+g*T)-r*(m*y-_*A+p*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],M=t*a-n*o,E=t*l-i*o,y=t*c-r*o,w=n*l-i*a,A=n*c-r*a,T=i*c-r*l,x=h*_-u*m,S=h*p-d*m,F=h*g-f*m,R=u*p-d*_,O=u*g-f*_,B=d*g-f*p,U=M*B-E*O+y*R+w*F-A*S+T*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/U;return e[0]=(a*B-l*O+c*R)*H,e[1]=(i*O-n*B-r*R)*H,e[2]=(_*T-p*A+g*w)*H,e[3]=(d*A-u*T-f*w)*H,e[4]=(l*F-o*B-c*S)*H,e[5]=(t*B-i*F+r*S)*H,e[6]=(p*y-m*T-g*E)*H,e[7]=(h*T-d*y+f*E)*H,e[8]=(o*O-a*F+c*x)*H,e[9]=(n*F-t*O-r*x)*H,e[10]=(m*A-_*y+g*M)*H,e[11]=(u*y-h*A-f*M)*H,e[12]=(a*S-o*R-l*x)*H,e[13]=(t*R-n*S+i*x)*H,e[14]=(_*E-m*w-p*M)*H,e[15]=(h*w-u*E+d*M)*H,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,_=o*h,p=o*u,g=a*u,M=l*c,E=l*h,y=l*u,w=n.x,A=n.y,T=n.z;return i[0]=(1-(_+g))*w,i[1]=(f+y)*w,i[2]=(m-E)*w,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+g))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(m+E)*T,i[9]=(p-M)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ni.set(i[0],i[1],i[2]).length();const a=Ni.set(i[4],i[5],i[6]).length(),l=Ni.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ln.copy(this);const c=1/o,h=1/a,u=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=bn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===bn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===qs)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=bn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===bn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===qs)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new D,ln=new Fe,tp=new D(0,0,0),np=new D(1,1,1),Zn=new D,nr=new D,Yt=new D,Bc=new Fe,kc=new Rn;class fn{constructor(e=0,t=0,n=0,i=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kc.setFromEuler(this),this.setFromQuaternion(kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class td{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ip=0;const zc=new D,Ui=new Rn,Nn=new Fe,ir=new D,gs=new D,sp=new D,rp=new Rn,Vc=new D(1,0,0),Hc=new D(0,1,0),Gc=new D(0,0,1),Wc={type:"added"},op={type:"removed"},Fi={type:"childadded",child:null},Ro={type:"childremoved",child:null};class mt extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new D,t=new fn,n=new Rn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ze}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return zc.copy(e).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(gs,ir,this.up):Nn.lookAt(ir,gs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(op),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new D(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ap={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Lo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Wl(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lo(o,r,e+1/3),this.g=Lo(o,r,e),this.b=Lo(o,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return je.workingToColorSpace(Ot.copy(this),e),Math.round($e(Ot.r*255,0,255))*65536+Math.round($e(Ot.g*255,0,255))*256+Math.round($e(Ot.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,r=Ot.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=vt){je.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(sr);const n=Fs(Jn.h,sr.h,t),i=Fs(Jn.s,sr.s,t),r=Fs(Jn.l,sr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Se;Se.NAMES=nd;class lp extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new D,Un=new D,Po=new D,Fn=new D,Oi=new D,Bi=new D,Xc=new D,Do=new D,No=new D,Uo=new D,Fo=new ft,Oo=new ft,Bo=new ft;class en{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){cn.subVectors(i,t),Un.subVectors(n,t),Po.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Un),l=cn.dot(Po),c=Un.dot(Un),h=Un.dot(Po),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,n),Bo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Fo,r.x),o.addScaledVector(Oo,r.y),o.addScaledVector(Bo,r.z),o}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Un.subVectors(e,t),cn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),cn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Oi.subVectors(i,n),Bi.subVectors(r,n),Do.subVectors(e,n);const l=Oi.dot(Do),c=Bi.dot(Do);if(l<=0&&c<=0)return t.copy(n);No.subVectors(e,i);const h=Oi.dot(No),u=Bi.dot(No);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Oi,o);Uo.subVectors(e,r);const f=Oi.dot(Uo),m=Bi.dot(Uo);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Bi,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Xc.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Xc,a);const g=1/(p+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(Oi,o).addScaledVector(Bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),or.subVectors(this.max,_s),ki.subVectors(e.a,_s),zi.subVectors(e.b,_s),Vi.subVectors(e.c,_s),Qn.subVectors(zi,ki),ei.subVectors(Vi,zi),ui.subVectors(ki,Vi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-ui.z,ui.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,ui.z,0,-ui.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-ui.y,ui.x,0];return!ko(t,ki,zi,Vi,or)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,ki,zi,Vi,or))?!1:(ar.crossVectors(Qn,ei),t=[ar.x,ar.y,ar.z],ko(t,ki,zi,Vi,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,rr=new pn,ki=new D,zi=new D,Vi=new D,Qn=new D,ei=new D,ui=new D,_s=new D,or=new D,ar=new D,di=new D;function ko(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){di.fromArray(s,r);const a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bt=new D,lr=new He;let cp=0;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rl&&(e.usage=this.usage),e}}class id extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sd extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}const hp=new pn,xs=new D,zo=new D;class on{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(zo)),this.expandByPoint(xs.copy(e.center).sub(zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let up=0;const jt=new Fe,Vo=new mt,Hi=new D,$t=new pn,vs=new pn,Lt=new D;class Xt extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Af(e)?sd:id)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors($t.min,vs.min),$t.expandByPoint(Lt),Lt.addVectors($t.max,vs.max),$t.expandByPoint(Lt)):($t.expandByPoint(vs.min),$t.expandByPoint(vs.max))}$t.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),Lt.add(Hi)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new D,l[x]=new D;const c=new D,h=new D,u=new D,d=new He,f=new He,m=new He,_=new D,p=new D;function g(x,S,F){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,F),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,F),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(R),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(R),a[x].add(_),a[S].add(_),a[F].add(_),l[x].add(p),l[S].add(p),l[F].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,S=M.length;x<S;++x){const F=M[x],R=F.start,O=F.count;for(let B=R,U=R+O;B<U;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new D,y=new D,w=new D,A=new D;function T(x){w.fromBufferAttribute(i,x),A.copy(w);const S=a[x];E.copy(S),E.sub(w.multiplyScalar(w.dot(S))).normalize(),y.crossVectors(A,S);const R=y.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,R)}for(let x=0,S=M.length;x<S;++x){const F=M[x],R=F.start,O=F.count;for(let B=R,U=R+O;B<U;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new At(d,h,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new D;class ql{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){to("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){to("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let fp=0;class wn extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Ji,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=xa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bn=new D,Ho=new D,cr=new D,ti=new D,Go=new D,hr=new D,Wo=new D;class uo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ho.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Ho);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=ti.dot(this.direction),l=-ti.dot(cr),c=ti.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ho).addScaledVector(cr,d),f}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,r){Go.subVectors(t,e),hr.subVectors(n,e),Wo.crossVectors(Go,hr);let o=this.direction.dot(Wo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=a*this.direction.dot(hr.crossVectors(ti,hr));if(l<0)return null;const c=a*this.direction.dot(Go.cross(ti));if(c<0||l+c>o)return null;const h=-a*ti.dot(Wo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hn extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qc=new Fe,fi=new uo,ur=new on,Yc=new D,dr=new D,fr=new D,pr=new D,Xo=new D,mr=new D,$c=new D,gr=new D;class Et extends mt{constructor(e=new Xt,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Xo.fromBufferAttribute(u,e),o?mr.addScaledVector(Xo,h):mr.addScaledVector(Xo.sub(t),h))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(ur.containsPoint(fi.origin)===!1&&(fi.intersectSphere(ur,Yc)===null||fi.origin.distanceToSquared(Yc)>(e.far-e.near)**2))&&(qc.copy(r).invert(),fi.copy(e.ray).applyMatrix4(qc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,w=E;y<w;y+=3){const A=a.getX(y),T=a.getX(y+1),x=a.getX(y+2);i=_r(this,g,e,n,c,h,u,A,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const M=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);i=_r(this,o,e,n,c,h,u,M,E,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,w=E;y<w;y+=3){const A=y,T=y+1,x=y+2;i=_r(this,g,e,n,c,h,u,A,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const M=p,E=p+1,y=p+2;i=_r(this,o,e,n,c,h,u,M,E,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function pp(s,e,t,n,i,r,o,a){let l;if(e.side===Bt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===An,a),l===null)return null;gr.copy(a),gr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(gr);return c<t.near||c>t.far?null:{distance:c,point:gr.clone(),object:s}}function _r(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,dr),s.getVertexPosition(l,fr),s.getVertexPosition(c,pr);const h=pp(s,e,t,n,dr,fr,pr,$c);if(h){const u=new D;en.getBarycoord($c,dr,fr,pr,u),i&&(h.uv=en.getInterpolatedAttribute(i,a,l,c,u,new He)),r&&(h.uv1=en.getInterpolatedAttribute(r,a,l,c,u,new He)),o&&(h.normal=en.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};en.getNormal(dr,fr,pr,d.normal),h.face=d,h.barycoord=u}return h}const Kc=new D,jc=new ft,Zc=new ft,mp=new D,Jc=new Fe,xr=new D,qo=new on,Qc=new Fe,Yo=new uo;class gp extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingBox.expandByPoint(xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xr),this.boundingSphere.expandByPoint(xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(i),e.ray.intersectsSphere(qo)!==!1&&(Qc.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(Qc),!(this.boundingBox!==null&&Yo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;jc.fromBufferAttribute(i.attributes.skinIndex,e),Zc.fromBufferAttribute(i.attributes.skinWeight,e),Kc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Zc.getComponent(r);if(o!==0){const a=jc.getComponent(r);Jc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(mp.copy(Kc).applyMatrix4(Jc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rd extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yl extends wt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Mt,h=Mt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new Fe,_p=new Fe;class $l{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:_p;eh.multiplyMatrices(a,t[r]),eh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $l(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yl(t,e,e,nn,tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Re("Skeleton: No bone found with UUID:",r),o=new rd),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class $s extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gi=new Fe,th=new Fe,vr=[],nh=new pn,xp=new Fe,Ms=new Et,ys=new on;class jr extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),nh.copy(e.boundingBox).applyMatrix4(Gi),this.boundingBox.union(nh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),ys.copy(e.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),e.ray.intersectsSphere(ys)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gi),th.multiplyMatrices(n,Gi),Ms.matrixWorld=th,Ms.raycast(e,vr);for(let o=0,a=vr.length;o<a;o++){const l=vr[o];l.instanceId=r,l.object=this,t.push(l)}vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yl(new Float32Array(i*this.count),i,this.count,Bl,tn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $o=new D,vp=new D,Mp=new ze;class Si{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$o.subVectors(n,t).cross(vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mp.getNormalMatrix(e),i=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new on,yp=new He(.5,.5),Mr=new D;class fo{constructor(e=new Si,t=new Si,n=new Si,i=new Si,r=new Si,o=new Si){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],M=r[12],E=r[13],y=r[14],w=r[15];if(i[0].setComponents(c-o,f-h,g-m,w-M).normalize(),i[1].setComponents(c+o,f+h,g+m,w+M).normalize(),i[2].setComponents(c+a,f+u,g+_,w+E).normalize(),i[3].setComponents(c-a,f-u,g-_,w-E).normalize(),n)i[4].setComponents(l,d,p,y).normalize(),i[5].setComponents(c-l,f-d,g-p,w-y).normalize();else if(i[4].setComponents(c-l,f-d,g-p,w-y).normalize(),t===bn)i[5].setComponents(c+l,f+d,g+p,w+y).normalize();else if(t===qs)i[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=yp.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mr.x=i.normal.x>0?e.max.x:e.min.x,Mr.y=i.normal.y>0?e.max.y:e.min.y,Mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class io extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const so=new D,ro=new D,ih=new Fe,Ss=new uo,yr=new on,Ko=new D,sh=new D;class Kl extends mt{constructor(e=new Xt,t=new io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)so.fromBufferAttribute(t,i-1),ro.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=so.distanceTo(ro);e.setAttribute("lineDistance",new sn(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(i),yr.radius+=r,e.ray.intersectsSphere(yr)===!1)return;ih.copy(i).invert(),Ss.copy(e.ray).applyMatrix4(ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=h.getX(_),M=h.getX(_+1),E=Sr(this,e,Ss,l,g,M,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(m-1),p=h.getX(f),g=Sr(this,e,Ss,l,_,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=Sr(this,e,Ss,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Sr(this,e,Ss,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(so.fromBufferAttribute(a,i),ro.fromBufferAttribute(a,r),t.distanceSqToSegment(so,ro,Ko,sh)>n)return;Ko.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ko);if(!(c<e.near||c>e.far))return{distance:c,point:sh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const rh=new D,oh=new D;class ol extends Kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)rh.fromBufferAttribute(t,i),oh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(oh);e.setAttribute("lineDistance",new sn(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sp extends Kl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class od extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ah=new Fe,al=new uo,br=new on,Er=new D;class bp extends mt{constructor(e=new Xt,t=new od){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;ah.copy(i).invert(),al.copy(e.ray).applyMatrix4(ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const p=c.getX(m);Er.fromBufferAttribute(u,p),lh(Er,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Er.fromBufferAttribute(u,m),lh(Er,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lh(s,e,t,n,i,r,o){const a=al.distanceSqToPoint(s);if(a<t){const l=new D;al.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class jl extends wt{constructor(e=[],t=Ai,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends wt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ks extends wt{constructor(e,t,n=Cn,i,r,o,a=Mt,l=Mt,c,h=$n,u=1){if(h!==$n&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tp extends Ks{constructor(e,t=Cn,n=Ai,i,r,o=Mt,a=Mt,l,c=$n){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ad extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gn extends Xt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2));function m(_,p,g,M,E,y,w,A,T,x,S){const F=y/T,R=w/x,O=y/2,B=w/2,U=A/2,H=T+1,V=x+1;let k=0,Q=0;const J=new D;for(let oe=0;oe<V;oe++){const fe=oe*R-B;for(let he=0;he<H;he++){const De=he*F-O;J[_]=De*M,J[p]=fe*E,J[g]=U,c.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[g]=A>0?1:-1,h.push(J.x,J.y,J.z),u.push(he/T),u.push(1-oe/x),k+=1}}for(let oe=0;oe<x;oe++)for(let fe=0;fe<T;fe++){const he=d+fe+H*oe,De=d+fe+H*(oe+1),rt=d+(fe+1)+H*(oe+1),ot=d+(fe+1)+H*oe;l.push(he,De,ot),l.push(De,rt,ot),Q+=6}a.addGroup(f,Q,S),f+=Q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Tr=new D,wr=new D,jo=new D,Ar=new en;class ch extends Xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Qi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:p,c:g}=Ar;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Ar.getNormal(jo),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const E=(M+1)%3,y=u[M],w=u[E],A=Ar[h[M]],T=Ar[h[E]],x=`${y}_${w}`,S=`${w}_${y}`;S in d&&d[S]?(jo.dot(d[S].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(T.x,T.y,T.z)),d[S]=null):x in d||(d[x]={index0:c[M],index1:c[E],normal:jo.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:p}=d[m];Tr.fromBufferAttribute(a,_),wr.fromBufferAttribute(a,p),f.push(Tr.x,Tr.y,Tr.z),f.push(wr.x,wr.y,wr.z)}this.setAttribute("position",new sn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Zs extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const M=g*d-o;for(let E=0;E<c;E++){const y=E*u-r;m.push(y,-M,0),_.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const E=M+c*g,y=M+c*(g+1),w=M+1+c*(g+1),A=M+1+c*g;f.push(E,y,A),f.push(y,w,A)}this.setIndex(f),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}function as(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=as(s[t]);for(const i in n)e[i]=n[i]}return e}function wp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ld(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Js={clone:as,merge:zt};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rp extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zl extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends Zl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ip extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lp extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Cr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Pp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function cd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ds{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dp extends ds{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rc:r=e,a=2*t-n;break;case Ic:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:o=e,l=2*n-t;break;case Ic:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,E=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+M*o[c+w]+E*o[l+w]+y*o[u+w];return r}}class Np extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Up extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fp extends ds{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const _=(n-t)/(i-t),p=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*p+o[l+g]*_;return r}const f=a*2,m=e-1;for(let _=0;_!==a;++_){const p=o[c+_],g=o[l+_],M=m*f+_*2,E=d[M],y=d[M+1],w=e*f+_*2,A=u[w],T=u[w+1];let x=(n-t)/(i-t),S,F,R,O,B;for(let U=0;U<8;U++){S=x*x,F=S*x,R=1-x,O=R*R,B=O*R;const V=B*t+3*O*x*E+3*R*S*A+F*i-n;if(Math.abs(V)<1e-10)break;const k=3*O*(E-t)+6*R*x*(A-E)+3*S*(i-A);if(Math.abs(k)<1e-10)break;x=x-V/k,x=Math.max(0,Math.min(1,x))}r[_]=B*p+3*O*x*y+3*R*S*T+F*g}return r}}class mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Up(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Fp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case Eo:t=this.InterpolantFactoryMethodSmooth;break;case Ac:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return Eo;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Pe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Cf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Eo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Xs;class fs extends mn{constructor(e,t,n){super(e,t,n)}}fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ws;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class hd extends mn{constructor(e,t,n,i){super(e,t,n,i)}}hd.prototype.ValueTypeName="color";class ls extends mn{constructor(e,t,n,i){super(e,t,n,i)}}ls.prototype.ValueTypeName="number";class Op extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Rn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class cs extends mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Op(this.times,this.values,this.getValueSize(),e)}}cs.prototype.ValueTypeName="quaternion";cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends mn{constructor(e,t,n){super(e,t,n)}}ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ws;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends mn{constructor(e,t,n,i){super(e,t,n,i)}}hs.prototype.ValueTypeName="vector";class Bp{constructor(e="",t=-1,n=[],i=_f){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(zp(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Pp(l);l=hh(l,1,h),c=hh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ls(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Re("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const p=[],g=[];cd(f,p,g,m),p.length!==0&&_.push(new u(d,p,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const p=[],g=[];for(let M=0;M!==d[m].morphTargets.length;++M){const E=d[m];p.push(E.time),g.push(E.morphTarget===_?1:0)}i.push(new ls(".morphTargetInfluence["+_+"]",p,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(hs,f+".position",d,"pos",i),n(cs,f+".quaternion",d,"rot",i),n(hs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function kp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ls;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return hd;case"quaternion":return cs;case"bool":case"boolean":return fs;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function zp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kp(s.type);if(s.times===void 0){const t=[],n=[];cd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Wn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(uh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!uh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function uh(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Vp{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Hp=new Vp;class Ri{constructor(e){this.manager=e!==void 0?e:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class Gp extends Error{constructor(e,t){super(e),this.response=t}}class ud extends Ri{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:i});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=kn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const p=new ReadableStream({start(g){M();function M(){u.read().then(({done:E,value:y})=>{if(E)g.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let A=0,T=h.length;A<T;A++){const x=h[A];x.onProgress&&x.onProgress(w)}g.enqueue(y),M()}},E=>{g.error(E)})}}});return new Response(p)}else throw new Gp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Wn.add(`file:${e}`,c);const h=kn[e];delete kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Wi=new WeakMap;class dd extends Ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Wi.get(o);u===void 0&&(u=[],Wi.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Ys("img");function l(){h(),t&&t(this);const u=Wi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Wi.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Wn.remove(`image:${e}`);const d=Wi.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Wi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Wp extends Ri{constructor(e){super(e)}load(e,t,n,i){const r=new jl;r.colorSpace=vt;const o=new dd(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Xp extends Ri{constructor(e){super(e)}load(e,t,n,i){const r=new wt,o=new dd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class po extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Zo=new Fe,dh=new D,fh=new D;class Jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(dh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rr=new D,Ir=new Rn,_n=new D;class fd extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rr,Ir,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Ir,_n.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Rr,Ir,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Ir,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new D,ph=new He,mh=new He;class Ht extends fd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,ph,mh),t.subVectors(mh,ph)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qp extends Jl{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yp extends po{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class $p extends Jl{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}}class Kp extends po{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $p}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class mo extends fd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jp extends Jl{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zp extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new jp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Jp extends po{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Os{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Jo=new WeakMap;class Qp extends Ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Jo.has(o)===!0)i&&i(Jo.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Jo.set(l,c),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Xi=-90,qi=1;class em extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(Xi,qi,e,t);i.layers=this.layers,this.add(i);const r=new Ht(Xi,qi,e,t);r.layers=this.layers,this.add(r);const o=new Ht(Xi,qi,e,t);o.layers=this.layers,this.add(o);const a=new Ht(Xi,qi,e,t);a.layers=this.layers,this.add(a);const l=new Ht(Xi,qi,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class tm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ql="\\[\\]\\.:\\/",nm=new RegExp("["+Ql+"]","g"),ec="[^"+Ql+"]",im="[^"+Ql.replace("\\.","")+"]",sm=/((?:WC+[\/:])*)/.source.replace("WC",ec),rm=/(WCOD+)?/.source.replace("WCOD",im),om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),lm=new RegExp("^"+sm+rm+om+am+"$"),cm=["material","materials","bones","map"];class hm{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nm,"")}static parseTrackName(e){const t=lm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);cm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=hm;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function gh(s,e,t,n){const i=um(n);switch(t){case Ku:return s*e;case Bl:return s*e/i.components*i.byteLength;case kl:return s*e/i.components*i.byteLength;case rs:return s*e*2/i.components*i.byteLength;case zl:return s*e*2/i.components*i.byteLength;case ju:return s*e*3/i.components*i.byteLength;case nn:return s*e*4/i.components*i.byteLength;case Vl:return s*e*4/i.components*i.byteLength;case qr:case Yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $r:case Kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Aa:case Ra:return Math.max(s,16)*Math.max(e,8)/4;case wa:case Ca:return Math.max(s,8)*Math.max(e,8)/2;case Ia:case La:case Da:case Na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Ua:case Fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Za:case Ja:case Qa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nl:case il:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function um(s){switch(s){case Kt:case Xu:return{byteLength:1,components:1};case Hs:case qu:case Yn:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case Cn:case Ul:case tn:return{byteLength:4,components:1};case Yu:case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dm(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Am=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ug=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:fm,alphahash_pars_fragment:pm,alphamap_fragment:mm,alphamap_pars_fragment:gm,alphatest_fragment:_m,alphatest_pars_fragment:xm,aomap_fragment:vm,aomap_pars_fragment:Mm,batching_pars_vertex:ym,batching_vertex:Sm,begin_vertex:bm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:wm,bumpmap_pars_fragment:Am,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Lm,color_fragment:Pm,color_pars_fragment:Dm,color_pars_vertex:Nm,color_vertex:Um,common:Fm,cube_uv_reflection_fragment:Om,defaultnormal_vertex:Bm,displacementmap_pars_vertex:km,displacementmap_vertex:zm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Hm,colorspace_fragment:Gm,colorspace_pars_fragment:Wm,envmap_fragment:Xm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Ym,envmap_pars_vertex:$m,envmap_physical_pars_fragment:rg,envmap_vertex:Km,fog_vertex:jm,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:Qm,gradientmap_pars_fragment:eg,lightmap_pars_fragment:tg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:og,lights_toon_pars_fragment:ag,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:xg,map_fragment:vg,map_pars_fragment:Mg,map_particle_fragment:yg,map_particle_pars_fragment:Sg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Tg,morphcolor_vertex:wg,morphnormal_vertex:Ag,morphtarget_pars_vertex:Cg,morphtarget_vertex:Rg,normal_fragment_begin:Ig,normal_fragment_maps:Lg,normal_pars_fragment:Pg,normal_pars_vertex:Dg,normal_vertex:Ng,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:kg,opaque_fragment:zg,packing:Vg,premultiplied_alpha_fragment:Hg,project_vertex:Gg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:qg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:Kg,shadowmap_vertex:jg,shadowmask_pars_fragment:Zg,skinbase_vertex:Jg,skinning_pars_vertex:Qg,skinning_vertex:e_,skinnormal_vertex:t_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:o_,transmission_pars_fragment:a_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:h_,worldpos_vertex:u_,background_vert:d_,background_frag:f_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:__,depth_vert:x_,depth_frag:v_,distance_vert:M_,distance_frag:y_,equirect_vert:S_,equirect_frag:b_,linedashed_vert:E_,linedashed_frag:T_,meshbasic_vert:w_,meshbasic_frag:A_,meshlambert_vert:C_,meshlambert_frag:R_,meshmatcap_vert:I_,meshmatcap_frag:L_,meshnormal_vert:P_,meshnormal_frag:D_,meshphong_vert:N_,meshphong_frag:U_,meshphysical_vert:F_,meshphysical_frag:O_,meshtoon_vert:B_,meshtoon_frag:k_,points_vert:z_,points_frag:V_,shadow_vert:H_,shadow_frag:G_,sprite_vert:W_,sprite_frag:X_},ce={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Nt={basic:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:zt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:zt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:zt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:zt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:zt([ce.lights,ce.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Nt.physical={uniforms:zt([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Lr={r:0,b:0,g:0},mi=new fn,q_=new Fe;function Y_(s,e,t,n,i,r){const o=new Se(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const y=M.backgroundBlurriness>0;E=e.get(E,y)}return E}function m(M){let E=!1;const y=f(M);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,E){const y=f(E);y&&(y.isCubeTexture||y.mapping===ho)?(c===void 0&&(c=new Et(new Gn(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:as(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),mi.copy(E.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(q_.makeRotationFromEuler(mi)),c.material.toneMapped=je.getTransfer(y.colorSpace)!==tt,(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Et(new Zs(2,2),new Wt({name:"BackgroundMaterial",uniforms:as(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,E){M.getRGB(Lr,ld(s)),t.buffers.color.setClear(Lr.r,Lr.g,Lr.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:_,dispose:g}}function $_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(R,O,B,U,H){let V=!1;const k=u(R,U,B,O);r!==k&&(r=k,c(r.object)),V=f(R,U,B,H),V&&m(R,U,B,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(R,O,B,U),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,O,B,U){const H=U.wireframe===!0;let V=n[O.id];V===void 0&&(V={},n[O.id]=V);const k=R.isInstancedMesh===!0?R.id:0;let Q=V[k];Q===void 0&&(Q={},V[k]=Q);let J=Q[B.id];J===void 0&&(J={},Q[B.id]=J);let oe=J[H];return oe===void 0&&(oe=d(l()),J[H]=oe),oe}function d(R){const O=[],B=[],U=[];for(let H=0;H<t;H++)O[H]=0,B[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:U,object:R,attributes:{},index:null}}function f(R,O,B,U){const H=r.attributes,V=O.attributes;let k=0;const Q=B.getAttributes();for(const J in Q)if(Q[J].location>=0){const fe=H[J];let he=V[J];if(he===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),fe===void 0||fe.attribute!==he||he&&fe.data!==he.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function m(R,O,B,U){const H={},V=O.attributes;let k=0;const Q=B.getAttributes();for(const J in Q)if(Q[J].location>=0){let fe=V[J];fe===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor));const he={};he.attribute=fe,fe&&fe.data&&(he.data=fe.data),H[J]=he,k++}r.attributes=H,r.attributesNum=k,r.index=U}function _(){const R=r.newAttributes;for(let O=0,B=R.length;O<B;O++)R[O]=0}function p(R){g(R,0)}function g(R,O){const B=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;B[R]=1,U[R]===0&&(s.enableVertexAttribArray(R),U[R]=1),H[R]!==O&&(s.vertexAttribDivisor(R,O),H[R]=O)}function M(){const R=r.newAttributes,O=r.enabledAttributes;for(let B=0,U=O.length;B<U;B++)O[B]!==R[B]&&(s.disableVertexAttribArray(B),O[B]=0)}function E(R,O,B,U,H,V,k){k===!0?s.vertexAttribIPointer(R,O,B,H,V):s.vertexAttribPointer(R,O,B,U,H,V)}function y(R,O,B,U){_();const H=U.attributes,V=B.getAttributes(),k=O.defaultAttributeValues;for(const Q in V){const J=V[Q];if(J.location>=0){let oe=H[Q];if(oe===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const fe=oe.normalized,he=oe.itemSize,De=e.get(oe);if(De===void 0)continue;const rt=De.buffer,ot=De.type,K=De.bytesPerElement,ne=ot===s.INT||ot===s.UNSIGNED_INT||oe.gpuType===Ul;if(oe.isInterleavedBufferAttribute){const re=oe.data,Ne=re.stride,Ae=oe.offset;if(re.isInstancedInterleavedBuffer){for(let Te=0;Te<J.locationSize;Te++)g(J.location+Te,re.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Te=0;Te<J.locationSize;Te++)p(J.location+Te);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Te=0;Te<J.locationSize;Te++)E(J.location+Te,he/J.locationSize,ot,fe,Ne*K,(Ae+he/J.locationSize*Te)*K,ne)}else{if(oe.isInstancedBufferAttribute){for(let re=0;re<J.locationSize;re++)g(J.location+re,oe.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let re=0;re<J.locationSize;re++)p(J.location+re);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let re=0;re<J.locationSize;re++)E(J.location+re,he/J.locationSize,ot,fe,he*K,he/J.locationSize*re*K,ne)}}else if(k!==void 0){const fe=k[Q];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(J.location,fe);break;case 3:s.vertexAttrib3fv(J.location,fe);break;case 4:s.vertexAttrib4fv(J.location,fe);break;default:s.vertexAttrib1fv(J.location,fe)}}}}M()}function w(){S();for(const R in n){const O=n[R];for(const B in O){const U=O[B];for(const H in U){const V=U[H];for(const k in V)h(V[k].object),delete V[k];delete U[H]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;const O=n[R.id];for(const B in O){const U=O[B];for(const H in U){const V=U[H];for(const k in V)h(V[k].object),delete V[k];delete U[H]}}delete n[R.id]}function T(R){for(const O in n){const B=n[O];for(const U in B){const H=B[U];if(H[R.id]===void 0)continue;const V=H[R.id];for(const k in V)h(V[k].object),delete V[k];delete H[R.id]}}}function x(R){for(const O in n){const B=n[O],U=R.isInstancedMesh===!0?R.id:0,H=B[U];if(H!==void 0){for(const V in H){const k=H[V];for(const Q in k)h(k[Q].object),delete k[Q];delete H[V]}delete B[U],Object.keys(B).length===0&&delete n[O]}}}function S(){F(),o=!0,r!==i&&(r=i,c(r.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function K_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function j_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==nn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const x=T===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Kt&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==tn&&!x)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:A}}function Z_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Si,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,E=M*4;let y=g.clippingState||null;l.value=y,y=h(m,d,E,f);for(let w=0;w!==E;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(u[E]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const oi=4,_h=[.125,.215,.35,.446,.526,.582],Ei=20,J_=256,bs=new mo,xh=new Se;let Qo=null,ea=0,ta=0,na=!1;const Q_=new D;class vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Q_}=r;Qo=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,ea,ta),this._renderer.xr.enabled=na,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Yn,format:nn,colorSpace:Gt,depthBuffer:!1},i=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e0(r)),this._blurMaterial=n0(r,e,t),this._ggxMaterial=t0(r,e,t)}return i}_compileMaterial(e){const t=new Et(new Xt,e);this._renderer.compile(t,bs)}_sceneToCubeUV(e,t,n,i,r){const l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xh),u.toneMapping=En,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new Gn,new Hn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,g=!0):(p.color.copy(xh),g=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const w=this._cubeSize;Yi(i,y*w,E>2?w:0,w,w),u.setRenderTarget(i),g&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ai||e.mapping===is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Yi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,bs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-oi?n-m+oi:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Yi(r,p,g,3*_,2*_),i.setRenderTarget(r),i.render(a,bs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Yi(e,p,g,3*_,2*_),i.setRenderTarget(e),i.render(a,bs)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),_=r/m,p=isFinite(r)?1+Math.floor(h*_):Ei;p>Ei&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const g=[];let M=0;for(let T=0;T<Ei;++T){const x=T/_,S=Math.exp(-x*x/2);g.push(S),T===0?M+=S:T<p&&(M+=2*S)}for(let T=0;T<g.length;T++)g[T]=g[T]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-n;const y=this._sizeLods[i],w=3*y*(i>E-oi?i-E+oi:0),A=4*(this._cubeSize-y);Yi(t,w,A,3*y,2*y),l.setRenderTarget(t),l.render(u,bs)}}function e0(s){const e=[],t=[],n=[];let i=s;const r=s-oi+1+_h.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-oi?l=_h[o-s+oi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,p=2,g=1,M=new Float32Array(_*m*f),E=new Float32Array(p*m*f),y=new Float32Array(g*m*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,x=A>2?0:-1,S=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];M.set(S,_*m*A),E.set(d,p*m*A);const F=[A,A,A,A,A,A];y.set(F,g*m*A)}const w=new Xt;w.setAttribute("position",new At(M,_)),w.setAttribute("uv",new At(E,p)),w.setAttribute("faceIndex",new At(y,g)),n.push(new Et(w,null)),i>oi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Mh(s,e,t){const n=new Tn(s,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function t0(s,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function n0(s,e,t){const n=new Float32Array(Ei),i=new D(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function yh(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Sh(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class md extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gn(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Xn});r.uniforms.tEquirect.value=t;const o=new Et(i,r),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Tt),new em(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function i0(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===So||f===bo)if(e.has(d)){const m=e.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new md(m.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,m=f===So||f===bo,_=f===Ai||f===is;if(m||_){let p=t.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new vh(s)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new vh(s)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===So?d.mapping=Ai:f===bo&&(d.mapping=is),d}function l(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function s0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&no("WebGLRenderer: "+n+" extension not supported."),i}}}function r0(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let E=0,y=M.length;E<y;E+=3){const w=M[E+0],A=M[E+1],T=M[E+2];d.push(w,A,A,T,T,w)}}else{const M=m.array;_=m.version;for(let E=0,y=M.length/3-1;E<y;E+=3){const w=E+0,A=E+1,T=E+2;d.push(w,A,A,T,T,w)}}const p=new(m.count>=65535?sd:id)(d,1);p.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function o0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function u(d,f,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let g=0;for(let M=0;M<m;M++)g+=f[M]*_[M];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function a0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Pe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function l0(s,e,t){const n=new WeakMap,i=new ft;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*w*4*u),T=new ed(A,y,w,u);T.type=tn,T.needsUpdate=!0;const x=E*4;for(let F=0;F<u;F++){const R=p[F],O=g[F],B=M[F],U=y*w*4*F;for(let H=0;H<R.count;H++){const V=H*x;f===!0&&(i.fromBufferAttribute(R,H),A[U+V+0]=i.x,A[U+V+1]=i.y,A[U+V+2]=i.z,A[U+V+3]=0),m===!0&&(i.fromBufferAttribute(O,H),A[U+V+4]=i.x,A[U+V+5]=i.y,A[U+V+6]=i.z,A[U+V+7]=0),_===!0&&(i.fromBufferAttribute(B,H),A[U+V+8]=i.x,A[U+V+9]=i.y,A[U+V+10]=i.z,A[U+V+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new He(y,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function c0(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const h0={[Fu]:"LINEAR_TONE_MAPPING",[Ou]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[ku]:"ACES_FILMIC_TONE_MAPPING",[Vu]:"AGX_TONE_MAPPING",[Hu]:"NEUTRAL_TONE_MAPPING",[zu]:"CUSTOM_TONE_MAPPING"};function u0(s,e,t,n,i){const r=new Tn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new Tn(e,t,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),a=new Xt;a.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new sn([0,2,0,0,2,0],2));const l=new Rp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Et(a,l),h=new mo(-1,1,1,-1,0,1);let u=null,d=null,f=!1,m,_=null,p=[],g=!1;this.setSize=function(M,E){r.setSize(M,E),o.setSize(M,E);for(let y=0;y<p.length;y++){const w=p[y];w.setSize&&w.setSize(M,E)}},this.setEffects=function(M){p=M,g=p.length>0&&p[0].isRenderPass===!0;const E=r.width,y=r.height;for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(E,y)}},this.begin=function(M,E){if(f||M.toneMapping===En&&p.length===0)return!1;if(_=E,E!==null){const y=E.width,w=E.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return g===!1&&M.setRenderTarget(r),m=M.toneMapping,M.toneMapping=En,!0},this.hasRenderPass=function(){return g},this.end=function(M,E){M.toneMapping=m,f=!0;let y=r,w=o;for(let A=0;A<p.length;A++){const T=p[A];if(T.enabled!==!1&&(T.render(M,w,y,E),T.needsSwap!==!1)){const x=y;y=w,w=x}}if(u!==M.outputColorSpace||d!==M.toneMapping){u=M.outputColorSpace,d=M.toneMapping,l.defines={},je.getTransfer(u)===tt&&(l.defines.SRGB_TRANSFER="");const A=h0[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(_),M.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const gd=new wt,ll=new Ks(1,1),_d=new ed,xd=new ep,vd=new jl,bh=[],Eh=[],Th=new Float32Array(16),wh=new Float32Array(9),Ah=new Float32Array(4);function ms(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=bh[i];if(r===void 0&&(r=new Float32Array(i),bh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function _o(s,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function d0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function f0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function p0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function m0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function g0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Ah.set(n),s.uniformMatrix2fv(this.addr,!1,Ah),Rt(t,n)}}function _0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;wh.set(n),s.uniformMatrix3fv(this.addr,!1,wh),Rt(t,n)}}function x0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Th.set(n),s.uniformMatrix4fv(this.addr,!1,Th),Rt(t,n)}}function v0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function M0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function S0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function b0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function E0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function T0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function w0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function A0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ll.compareFunction=t.isReversedDepthBuffer()?Gl:Hl,r=ll):r=gd,t.setTexture2D(e||r,i)}function C0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xd,i)}function R0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vd,i)}function I0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_d,i)}function L0(s){switch(s){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return x0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return y0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return E0;case 36295:return T0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return I0}}function P0(s,e){s.uniform1fv(this.addr,e)}function D0(s,e){const t=ms(e,this.size,2);s.uniform2fv(this.addr,t)}function N0(s,e){const t=ms(e,this.size,3);s.uniform3fv(this.addr,t)}function U0(s,e){const t=ms(e,this.size,4);s.uniform4fv(this.addr,t)}function F0(s,e){const t=ms(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function O0(s,e){const t=ms(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function B0(s,e){const t=ms(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function k0(s,e){s.uniform1iv(this.addr,e)}function z0(s,e){s.uniform2iv(this.addr,e)}function V0(s,e){s.uniform3iv(this.addr,e)}function H0(s,e){s.uniform4iv(this.addr,e)}function G0(s,e){s.uniform1uiv(this.addr,e)}function W0(s,e){s.uniform2uiv(this.addr,e)}function X0(s,e){s.uniform3uiv(this.addr,e)}function q0(s,e){s.uniform4uiv(this.addr,e)}function Y0(s,e,t){const n=this.cache,i=e.length,r=_o(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=ll:o=gd;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function $0(s,e,t){const n=this.cache,i=e.length,r=_o(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||xd,r[o])}function K0(s,e,t){const n=this.cache,i=e.length,r=_o(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||vd,r[o])}function j0(s,e,t){const n=this.cache,i=e.length,r=_o(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_d,r[o])}function Z0(s){switch(s){case 5126:return P0;case 35664:return D0;case 35665:return N0;case 35666:return U0;case 35674:return F0;case 35675:return O0;case 35676:return B0;case 5124:case 35670:return k0;case 35667:case 35671:return z0;case 35668:case 35672:return V0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return j0}}class J0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=L0(t.type)}}class Q0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z0(t.type)}}class ex{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Ch(s,e){s.seq.push(e),s.map[e.id]=e}function tx(s,e,t){const n=s.name,i=n.length;for(ia.lastIndex=0;;){const r=ia.exec(n),o=ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ch(t,c===void 0?new J0(a,s,e):new Q0(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new ex(a),Ch(t,u)),t=u}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);tx(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Rh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const nx=37297;let ix=0;function sx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ih=new ze;function rx(s){je._getMatrix(Ih,je.workingColorSpace,s);const e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case eo:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Lh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sx(s.getShaderSource(e),a)}else return r}function ox(s,e){const t=rx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ax={[Fu]:"Linear",[Ou]:"Reinhard",[Bu]:"Cineon",[ku]:"ACESFilmic",[Vu]:"AgX",[Hu]:"Neutral",[zu]:"Custom"};function lx(s,e){const t=ax[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new D;function cx(){je.getLuminanceCoefficients(Pr);const s=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function ux(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ns(s){return s!==""}function Ph(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(s){return s.replace(fx,mx)}const px=new Map;function mx(s,e){let t=Ve[e];if(t===void 0){const n=px.get(e);if(n!==void 0)t=Ve[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(s){return s.replace(gx,_x)}function _x(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Uh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xx={[Wr]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function vx(s){return xx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Mx={[Ai]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE_UV"};function yx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Mx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Sx={[is]:"ENVMAP_MODE_REFRACTION"};function bx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Sx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ex={[Uu]:"ENVMAP_BLENDING_MULTIPLY",[pf]:"ENVMAP_BLENDING_MIX",[mf]:"ENVMAP_BLENDING_ADD"};function Tx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ex[s.combine]||"ENVMAP_BLENDING_NONE"}function wx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ax(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vx(t),c=yx(t),h=bx(t),u=Tx(t),d=wx(t),f=hx(t),m=ux(r),_=i.createProgram();let p,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ns).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ns).join(`
`),g.length>0&&(g+=`
`)):(p=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),g=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ve.tonemapping_pars_fragment:"",t.toneMapping!==En?lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,ox("linearToOutputTexel",t.outputColorSpace),cx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=cl(o),o=Ph(o,t),o=Dh(o,t),a=cl(a),a=Ph(a,t),a=Dh(a,t),o=Nh(o),a=Nh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=M+p+o,y=M+g+a,w=Rh(i,i.VERTEX_SHADER,E),A=Rh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,w),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(w)||"",U=i.getShaderInfoLog(A)||"",H=O.trim(),V=B.trim(),k=U.trim();let Q=!0,J=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,A);else{const oe=Lh(i,w,"vertex"),fe=Lh(i,A,"fragment");Pe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+oe+`
`+fe)}else H!==""?Re("WebGLProgram: Program Info Log:",H):(V===""||k==="")&&(J=!1);J&&(R.diagnostics={runnable:Q,programLog:H,vertexShader:{log:V,prefix:p},fragmentShader:{log:k,prefix:g}})}i.deleteShader(w),i.deleteShader(A),x=new Zr(i,_),S=dx(i,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(_,nx)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ix++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let Cx=0;class Rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ix(e),t.set(e,n)),n}}class Ix{constructor(e){this.id=Cx++,this.code=e,this.usedTimes=0}}function Lx(s,e,t,n,i,r){const o=new td,a=new Rx,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,F,R,O){const B=R.fog,U=O.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||H,V),Q=k&&k.mapping===ho?k.image.height:null,J=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const oe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,fe=oe!==void 0?oe.length:0;let he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let De,rt,ot,K;if(J){const et=Nt[J];De=et.vertexShader,rt=et.fragmentShader}else De=x.vertexShader,rt=x.fragmentShader,a.update(x),ot=a.getVertexShaderID(x),K=a.getFragmentShaderID(x);const ne=s.getRenderTarget(),re=s.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,Ae=O.isBatchedMesh===!0,Te=!!x.map,Oe=!!x.matcap,qe=!!k,Qe=!!x.aoMap,ct=!!x.lightMap,Ge=!!x.bumpMap,_t=!!x.normalMap,I=!!x.displacementMap,St=!!x.emissiveMap,Je=!!x.metalnessMap,ut=!!x.roughnessMap,be=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,P=x.iridescence>0,$=x.sheen>0,Z=x.transmission>0,Y=be&&!!x.anisotropyMap,_e=C&&!!x.clearcoatMap,ae=C&&!!x.clearcoatNormalMap,Ie=C&&!!x.clearcoatRoughnessMap,Le=P&&!!x.iridescenceMap,ee=P&&!!x.iridescenceThicknessMap,ie=$&&!!x.sheenColorMap,xe=$&&!!x.sheenRoughnessMap,Me=!!x.specularMap,pe=!!x.specularColorMap,We=!!x.specularIntensityMap,L=Z&&!!x.transmissionMap,le=Z&&!!x.thicknessMap,se=!!x.gradientMap,ge=!!x.alphaMap,te=x.alphaTest>0,q=!!x.alphaHash,ve=!!x.extensions;let Ue=En;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const dt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:rt,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Gt,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:Oe,envMap:qe,envMapMode:qe&&k.mapping,envMapCubeUVHeight:Q,aoMap:Qe,lightMap:ct,bumpMap:Ge,normalMap:_t,displacementMap:I,emissiveMap:St,normalMapObjectSpace:_t&&x.normalMapType===Mf,normalMapTangentSpace:_t&&x.normalMapType===Ju,metalnessMap:Je,roughnessMap:ut,anisotropy:be,anisotropyMap:Y,clearcoat:C,clearcoatMap:_e,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ie,dispersion:v,iridescence:P,iridescenceMap:Le,iridescenceThicknessMap:ee,sheen:$,sheenColorMap:ie,sheenRoughnessMap:xe,specularMap:Me,specularColorMap:pe,specularIntensityMap:We,transmission:Z,transmissionMap:L,thicknessMap:le,gradientMap:se,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:q,combine:x.combine,mapUv:Te&&m(x.map.channel),aoMapUv:Qe&&m(x.aoMap.channel),lightMapUv:ct&&m(x.lightMap.channel),bumpMapUv:Ge&&m(x.bumpMap.channel),normalMapUv:_t&&m(x.normalMap.channel),displacementMapUv:I&&m(x.displacementMap.channel),emissiveMapUv:St&&m(x.emissiveMap.channel),metalnessMapUv:Je&&m(x.metalnessMap.channel),roughnessMapUv:ut&&m(x.roughnessMap.channel),anisotropyMapUv:Y&&m(x.anisotropyMap.channel),clearcoatMapUv:_e&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(x.sheenRoughnessMap.channel),specularMapUv:Me&&m(x.specularMap.channel),specularColorMapUv:pe&&m(x.specularColorMap.channel),specularIntensityMapUv:We&&m(x.specularIntensityMap.channel),transmissionMapUv:L&&m(x.transmissionMap.channel),thicknessMapUv:le&&m(x.thicknessMap.channel),alphaMapUv:ge&&m(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_t||be),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(Te||ge),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:re,skinning:O.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:he,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:St&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===Bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)S.push(F),S.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(g(S,x),M(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const S=f[x.type];let F;if(S){const R=Nt[S];F=Js.clone(R.uniforms)}else F=x.uniforms;return F}function y(x,S){let F=h.get(S);return F!==void 0?++F.usedTimes:(F=new Ax(s,S,x,i),c.push(F),h.set(S,F)),F}function w(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:T}}function Px(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Dx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Fh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Oh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,_,p,g){let M=s[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},s[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=p,M.group=g),e++,M}function l(d,f,m,_,p,g){const M=a(d,f,m,_,p,g);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):t.push(M)}function c(d,f,m,_,p,g){const M=a(d,f,m,_,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||Dx),n.length>1&&n.sort(f||Fh),i.length>1&&i.sort(f||Fh)}function u(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Nx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Oh,s.set(n,[o])):i>=r.length?(o=new Oh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ux(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Se};break;case"SpotLight":t={position:new D,direction:new D,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Fx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ox=0;function Bx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kx(s){const e=new Ux,t=Fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new Fe,o=new Fe;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,M=0,E=0,y=0,w=0,A=0,T=0;c.sort(Bx);for(let S=0,F=c.length;S<F;S++){const R=c[S],O=R.color,B=R.intensity,U=R.distance;let H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===rs?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],B);T++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=R.shadow.matrix,M++}n.directional[f]=V,f++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(O).multiplyScalar(B),V.distance=U,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[_]=V;const k=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,k.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=k.matrix,R.castShadow){const Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=H,y++}_++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(O).multiplyScalar(B),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=V,p++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const k=R.shadow,Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=R.shadow.matrix,E++}n.point[m]=V,m++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(B),V.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[g]=V,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==M||x.numPointShadows!==E||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=M,x.numPointShadows=E,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=T,n.version=Ox++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const E=c[g];if(E.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(E.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Bh(s){const e=new kx(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Bh(s),e.set(i,[a])):r>=o.length?(a=new Bh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Wx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],kh=new Fe,Es=new D,sa=new D;function Xx(s,e,t){let n=new fo;const i=new He,r=new He,o=new ft,a=new Ip,l=new Lp,c={},h=t.maxTextureSize,u={[An]:Bt,[Bt]:An,[Qt]:Qt},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Vx,fragmentShader:Hx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Xt;m.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let g=this.type;this.render=function(A,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===$d&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wr);const S=s.getRenderTarget(),F=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Xn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=g!==this.type;B&&T.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(H=>H.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,H=A.length;U<H;U++){const V=A[U],k=V.shadow;if(k===void 0){Re("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Q=k.getFrameExtents();i.multiply(Q),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,k.mapSize.y=r.y));const J=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=J,k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ps){if(V.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Tn(i.x,i.y,{format:rs,type:Yn,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new Ks(i.x,i.y,tn),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=$n,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Mt,k.map.depthTexture.magFilter=Mt}else V.isPointLight?(k.map=new md(i.x),k.map.depthTexture=new Tp(i.x,Cn)):(k.map=new Tn(i.x,i.y),k.map.depthTexture=new Ks(i.x,i.y,Cn)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=$n,this.type===Wr?(k.map.depthTexture.compareFunction=J?Gl:Hl,k.map.depthTexture.minFilter=Tt,k.map.depthTexture.magFilter=Tt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Mt,k.map.depthTexture.magFilter=Mt);k.camera.updateProjectionMatrix()}const oe=k.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<oe;fe++){if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,fe),s.clear();else{fe===0&&(s.setRenderTarget(k.map),s.clear());const he=k.getViewport(fe);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),O.viewport(o)}if(V.isPointLight){const he=k.camera,De=k.matrix,rt=V.distance||he.far;rt!==he.far&&(he.far=rt,he.updateProjectionMatrix()),Es.setFromMatrixPosition(V.matrixWorld),he.position.copy(Es),sa.copy(he.position),sa.add(Gx[fe]),he.up.copy(Wx[fe]),he.lookAt(sa),he.updateMatrixWorld(),De.makeTranslation(-Es.x,-Es.y,-Es.z),kh.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),k._frustum.setFromProjectionMatrix(kh,he.coordinateSystem,he.reversedDepth)}else k.updateMatrices(V);n=k.getFrustum(),y(T,x,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Ps&&M(k,x),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(S,F,R)};function M(A,T){const x=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Tn(i.x,i.y,{format:rs,type:Yn})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,x,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,x,f,_,null)}function E(A,T,x,S){let F=null;const R=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)F=R;else if(F=x.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=F.uuid,B=T.uuid;let U=c[O];U===void 0&&(U={},c[O]=U);let H=U[B];H===void 0&&(H=F.clone(),U[B]=H,T.addEventListener("dispose",w)),F=H}if(F.visible=T.visible,F.wireframe=T.wireframe,S===Ps?F.side=T.shadowSide!==null?T.shadowSide:T.side:F.side=T.shadowSide!==null?T.shadowSide:u[T.side],F.alphaMap=T.alphaMap,F.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,F.map=T.map,F.clipShadows=T.clipShadows,F.clippingPlanes=T.clippingPlanes,F.clipIntersection=T.clipIntersection,F.displacementMap=T.displacementMap,F.displacementScale=T.displacementScale,F.displacementBias=T.displacementBias,F.wireframeLinewidth=T.wireframeLinewidth,F.linewidth=T.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const O=s.properties.get(F);O.light=x}return F}function y(A,T,x,S,F){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===Ps)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const B=e.update(A),U=A.material;if(Array.isArray(U)){const H=B.groups;for(let V=0,k=H.length;V<k;V++){const Q=H[V],J=U[Q.materialIndex];if(J&&J.visible){const oe=E(A,J,S,F);A.onBeforeShadow(s,A,T,x,B,oe,Q),s.renderBufferDirect(x,null,B,oe,A,Q),A.onAfterShadow(s,A,T,x,B,oe,Q)}}}else if(U.visible){const H=E(A,U,S,F);A.onBeforeShadow(s,A,T,x,B,H,null),s.renderBufferDirect(x,null,B,H,A,null),A.onAfterShadow(s,A,T,x,B,H,null)}}const O=A.children;for(let B=0,U=O.length;B<U;B++)y(O[B],T,x,S,F)}function w(A){A.target.removeEventListener("dispose",w);for(const x in c){const S=c[x],F=A.target.uuid;F in S&&(S[F].dispose(),delete S[F])}}}function qx(s,e){function t(){let L=!1;const le=new ft;let se=null;const ge=new ft(0,0,0,0);return{setMask:function(te){se!==te&&!L&&(s.colorMask(te,te,te,te),se=te)},setLocked:function(te){L=te},setClear:function(te,q,ve,Ue,dt){dt===!0&&(te*=Ue,q*=Ue,ve*=Ue),le.set(te,q,ve,Ue),ge.equals(le)===!1&&(s.clearColor(te,q,ve,Ue),ge.copy(le))},reset:function(){L=!1,se=null,ge.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,se=null,ge=null,te=null;return{setReversed:function(q){if(le!==q){const ve=e.get("EXT_clip_control");q?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),le=q;const Ue=te;te=null,this.setClear(Ue)}},getReversed:function(){return le},setTest:function(q){q?ne(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(q){se!==q&&!L&&(s.depthMask(q),se=q)},setFunc:function(q){if(le&&(q=Lf[q]),ge!==q){switch(q){case va:s.depthFunc(s.NEVER);break;case Ma:s.depthFunc(s.ALWAYS);break;case ya:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case Sa:s.depthFunc(s.EQUAL);break;case ba:s.depthFunc(s.GEQUAL);break;case Ea:s.depthFunc(s.GREATER);break;case Ta:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=q}},setLocked:function(q){L=q},setClear:function(q){te!==q&&(te=q,le&&(q=1-q),s.clearDepth(q))},reset:function(){L=!1,se=null,ge=null,te=null,le=!1}}}function i(){let L=!1,le=null,se=null,ge=null,te=null,q=null,ve=null,Ue=null,dt=null;return{setTest:function(et){L||(et?ne(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(et){le!==et&&!L&&(s.stencilMask(et),le=et)},setFunc:function(et,Pn,Dn){(se!==et||ge!==Pn||te!==Dn)&&(s.stencilFunc(et,Pn,Dn),se=et,ge=Pn,te=Dn)},setOp:function(et,Pn,Dn){(q!==et||ve!==Pn||Ue!==Dn)&&(s.stencilOp(et,Pn,Dn),q=et,ve=Pn,Ue=Dn)},setLocked:function(et){L=et},setClear:function(et){dt!==et&&(s.clearStencil(et),dt=et)},reset:function(){L=!1,le=null,se=null,ge=null,te=null,q=null,ve=null,Ue=null,dt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,M=null,E=null,y=null,w=null,A=null,T=new Se(0,0,0),x=0,S=!1,F=null,R=null,O=null,B=null,U=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,k=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=k>=2);let J=null,oe={};const fe=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),De=new ft().fromArray(fe),rt=new ft().fromArray(he);function ot(L,le,se,ge){const te=new Uint8Array(4),q=s.createTexture();s.bindTexture(L,q),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<se;ve++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(le+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return q}const K={};K[s.TEXTURE_2D]=ot(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=ot(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=ot(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=ot(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(s.DEPTH_TEST),o.setFunc(ns),Ge(!1),_t(Sc),ne(s.CULL_FACE),Qe(Xn);function ne(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function re(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ne(L,le){return u[L]!==le?(s.bindFramebuffer(L,le),u[L]=le,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=le),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=le),!0):!1}function Ae(L,le){let se=f,ge=!1;if(L){se=d.get(le),se===void 0&&(se=[],d.set(le,se));const te=L.textures;if(se.length!==te.length||se[0]!==s.COLOR_ATTACHMENT0){for(let q=0,ve=te.length;q<ve;q++)se[q]=s.COLOR_ATTACHMENT0+q;se.length=te.length,ge=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,ge=!0);ge&&s.drawBuffers(se)}function Te(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const Oe={[bi]:s.FUNC_ADD,[jd]:s.FUNC_SUBTRACT,[Zd]:s.FUNC_REVERSE_SUBTRACT};Oe[Jd]=s.MIN,Oe[Qd]=s.MAX;const qe={[ef]:s.ZERO,[tf]:s.ONE,[nf]:s.SRC_COLOR,[_a]:s.SRC_ALPHA,[cf]:s.SRC_ALPHA_SATURATE,[af]:s.DST_COLOR,[rf]:s.DST_ALPHA,[sf]:s.ONE_MINUS_SRC_COLOR,[xa]:s.ONE_MINUS_SRC_ALPHA,[lf]:s.ONE_MINUS_DST_COLOR,[of]:s.ONE_MINUS_DST_ALPHA,[hf]:s.CONSTANT_COLOR,[uf]:s.ONE_MINUS_CONSTANT_COLOR,[df]:s.CONSTANT_ALPHA,[ff]:s.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,le,se,ge,te,q,ve,Ue,dt,et){if(L===Xn){_===!0&&(re(s.BLEND),_=!1);return}if(_===!1&&(ne(s.BLEND),_=!0),L!==Kd){if(L!==p||et!==S){if((g!==bi||y!==bi)&&(s.blendEquation(s.FUNC_ADD),g=bi,y=bi),et)switch(L){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bc:s.blendFunc(s.ONE,s.ONE);break;case Ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pe("WebGLState: Invalid blending: ",L);break}else switch(L){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ec:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",L);break}M=null,E=null,w=null,A=null,T.set(0,0,0),x=0,p=L,S=et}return}te=te||le,q=q||se,ve=ve||ge,(le!==g||te!==y)&&(s.blendEquationSeparate(Oe[le],Oe[te]),g=le,y=te),(se!==M||ge!==E||q!==w||ve!==A)&&(s.blendFuncSeparate(qe[se],qe[ge],qe[q],qe[ve]),M=se,E=ge,w=q,A=ve),(Ue.equals(T)===!1||dt!==x)&&(s.blendColor(Ue.r,Ue.g,Ue.b,dt),T.copy(Ue),x=dt),p=L,S=!1}function ct(L,le){L.side===Qt?re(s.CULL_FACE):ne(s.CULL_FACE);let se=L.side===Bt;le&&(se=!se),Ge(se),L.blending===Ji&&L.transparent===!1?Qe(Xn):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const ge=L.stencilWrite;a.setTest(ge),ge&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),St(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){F!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),F=L)}function _t(L){L!==qd?(ne(s.CULL_FACE),L!==R&&(L===Sc?s.cullFace(s.BACK):L===Yd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),R=L}function I(L){L!==O&&(V&&s.lineWidth(L),O=L)}function St(L,le,se){L?(ne(s.POLYGON_OFFSET_FILL),(B!==le||U!==se)&&(B=le,U=se,o.getReversed()&&(le=-le),s.polygonOffset(le,se))):re(s.POLYGON_OFFSET_FILL)}function Je(L){L?ne(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function ut(L){L===void 0&&(L=s.TEXTURE0+H-1),J!==L&&(s.activeTexture(L),J=L)}function be(L,le,se){se===void 0&&(J===null?se=s.TEXTURE0+H-1:se=J);let ge=oe[se];ge===void 0&&(ge={type:void 0,texture:void 0},oe[se]=ge),(ge.type!==L||ge.texture!==le)&&(J!==se&&(s.activeTexture(se),J=se),s.bindTexture(L,le||K[L]),ge.type=L,ge.texture=le)}function C(){const L=oe[J];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function $(){try{s.texSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Z(){try{s.texSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ae(){try{s.texStorage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Ie(){try{s.texStorage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Le(){try{s.texImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ee(){try{s.texImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ie(L){De.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function xe(L){rt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function Me(L,le){let se=c.get(le);se===void 0&&(se=new WeakMap,c.set(le,se));let ge=se.get(L);ge===void 0&&(ge=s.getUniformBlockIndex(le,L.name),se.set(L,ge))}function pe(L,le){const ge=c.get(le).get(L);l.get(le)!==ge&&(s.uniformBlockBinding(le,ge,L.__bindingPointIndex),l.set(le,ge))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,oe={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,M=null,E=null,y=null,w=null,A=null,T=new Se(0,0,0),x=0,S=!1,F=null,R=null,O=null,B=null,U=null,De.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:re,bindFramebuffer:Ne,drawBuffers:Ae,useProgram:Te,setBlending:Qe,setMaterial:ct,setFlipSided:Ge,setCullFace:_t,setLineWidth:I,setPolygonOffset:St,setScissorTest:Je,activeTexture:ut,bindTexture:be,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:P,texImage2D:Le,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:pe,texStorage2D:ae,texStorage3D:Ie,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:ie,viewport:xe,reset:We}}function Yx(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,v){return f?new OffscreenCanvas(C,v):Ys("canvas")}function _(C,v,P){let $=1;const Z=be(C);if((Z.width>P||Z.height>P)&&($=P/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor($*Z.width),_e=Math.floor($*Z.height);u===void 0&&(u=m(Y,_e));const ae=v?m(Y,_e):u;return ae.width=Y,ae.height=_e,ae.getContext("2d").drawImage(C,0,0,Y,_e),Re("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_e+")."),ae}else return"data"in C&&Re("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function g(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,v,P,$,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=v;if(v===s.RED&&(P===s.FLOAT&&(Y=s.R32F),P===s.HALF_FLOAT&&(Y=s.R16F),P===s.UNSIGNED_BYTE&&(Y=s.R8)),v===s.RED_INTEGER&&(P===s.UNSIGNED_BYTE&&(Y=s.R8UI),P===s.UNSIGNED_SHORT&&(Y=s.R16UI),P===s.UNSIGNED_INT&&(Y=s.R32UI),P===s.BYTE&&(Y=s.R8I),P===s.SHORT&&(Y=s.R16I),P===s.INT&&(Y=s.R32I)),v===s.RG&&(P===s.FLOAT&&(Y=s.RG32F),P===s.HALF_FLOAT&&(Y=s.RG16F),P===s.UNSIGNED_BYTE&&(Y=s.RG8)),v===s.RG_INTEGER&&(P===s.UNSIGNED_BYTE&&(Y=s.RG8UI),P===s.UNSIGNED_SHORT&&(Y=s.RG16UI),P===s.UNSIGNED_INT&&(Y=s.RG32UI),P===s.BYTE&&(Y=s.RG8I),P===s.SHORT&&(Y=s.RG16I),P===s.INT&&(Y=s.RG32I)),v===s.RGB_INTEGER&&(P===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),P===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),P===s.UNSIGNED_INT&&(Y=s.RGB32UI),P===s.BYTE&&(Y=s.RGB8I),P===s.SHORT&&(Y=s.RGB16I),P===s.INT&&(Y=s.RGB32I)),v===s.RGBA_INTEGER&&(P===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),P===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),P===s.UNSIGNED_INT&&(Y=s.RGBA32UI),P===s.BYTE&&(Y=s.RGBA8I),P===s.SHORT&&(Y=s.RGBA16I),P===s.INT&&(Y=s.RGBA32I)),v===s.RGB&&(P===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),P===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),v===s.RGBA){const _e=Z?eo:je.getTransfer($);P===s.FLOAT&&(Y=s.RGBA32F),P===s.HALF_FLOAT&&(Y=s.RGBA16F),P===s.UNSIGNED_BYTE&&(Y=_e===tt?s.SRGB8_ALPHA8:s.RGBA8),P===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),P===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(C,v){let P;return C?v===null||v===Cn||v===Gs?P=s.DEPTH24_STENCIL8:v===tn?P=s.DEPTH32F_STENCIL8:v===Hs&&(P=s.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Cn||v===Gs?P=s.DEPTH_COMPONENT24:v===tn?P=s.DEPTH_COMPONENT32F:v===Hs&&(P=s.DEPTH_COMPONENT16),P}function w(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mt&&C.minFilter!==Tt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){const v=C.target;v.removeEventListener("dispose",A),x(v),v.isVideoTexture&&h.delete(v)}function T(C){const v=C.target;v.removeEventListener("dispose",T),F(v)}function x(C){const v=n.get(C);if(v.__webglInit===void 0)return;const P=C.source,$=d.get(P);if($){const Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(C),Object.keys($).length===0&&d.delete(P)}n.remove(C)}function S(C){const v=n.get(C);s.deleteTexture(v.__webglTexture);const P=C.source,$=d.get(P);delete $[v.__cacheKey],o.memory.textures--}function F(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)s.deleteFramebuffer(v.__webglFramebuffer[$]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=C.textures;for(let $=0,Z=P.length;$<Z;$++){const Y=n.get(P[$]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(P[$])}n.remove(C)}let R=0;function O(){R=0}function B(){const C=R;return C>=i.maxTextures&&Re("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function U(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function H(C,v){const P=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){const $=C.image;if($===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{K(P,C,v);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,P.__webglTexture,s.TEXTURE0+v)}function V(C,v){const P=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){K(P,C,v);return}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,P.__webglTexture,s.TEXTURE0+v)}function k(C,v){const P=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){K(P,C,v);return}t.bindTexture(s.TEXTURE_3D,P.__webglTexture,s.TEXTURE0+v)}function Q(C,v){const P=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&P.__version!==C.version){ne(P,C,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+v)}const J={[ss]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[Qr]:s.MIRRORED_REPEAT},oe={[Mt]:s.NEAREST,[Wu]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[Tt]:s.LINEAR,[Xr]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},fe={[yf]:s.NEVER,[wf]:s.ALWAYS,[Sf]:s.LESS,[Hl]:s.LEQUAL,[bf]:s.EQUAL,[Gl]:s.GEQUAL,[Ef]:s.GREATER,[Tf]:s.NOTEQUAL};function he(C,v){if(v.type===tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tt||v.magFilter===Xr||v.magFilter===Ds||v.magFilter===Vn||v.minFilter===Tt||v.minFilter===Xr||v.minFilter===Ds||v.minFilter===Vn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,J[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,oe[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mt||v.minFilter!==Ds&&v.minFilter!==Vn||v.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function De(C,v){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));const $=v.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const Y=U(v);if(Y!==C.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Z[Y].usedTimes++;const _e=Z[C.__cacheKey];_e!==void 0&&(Z[C.__cacheKey].usedTimes--,_e.usedTimes===0&&S(v)),C.__cacheKey=Y,C.__webglTexture=Z[Y].texture}return P}function rt(C,v,P){return Math.floor(Math.floor(C/P)/v)}function ot(C,v,P,$){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,P,$,v.data);else{Y.sort((ee,ie)=>ee.start-ie.start);let _e=0;for(let ee=1;ee<Y.length;ee++){const ie=Y[_e],xe=Y[ee],Me=ie.start+ie.count,pe=rt(xe.start,v.width,4),We=rt(ie.start,v.width,4);xe.start<=Me+1&&pe===We&&rt(xe.start+xe.count-1,v.width,4)===pe?ie.count=Math.max(ie.count,xe.start+xe.count-ie.start):(++_e,Y[_e]=xe)}Y.length=_e+1;const ae=s.getParameter(s.UNPACK_ROW_LENGTH),Ie=s.getParameter(s.UNPACK_SKIP_PIXELS),Le=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let ee=0,ie=Y.length;ee<ie;ee++){const xe=Y[ee],Me=Math.floor(xe.start/4),pe=Math.ceil(xe.count/4),We=Me%v.width,L=Math.floor(Me/v.width),le=pe,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,We,L,le,se,P,$,v.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function K(C,v,P){let $=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=s.TEXTURE_3D);const Z=De(C,v),Y=v.source;t.bindTexture($,C.__webglTexture,s.TEXTURE0+P);const _e=n.get(Y);if(Y.version!==_e.__version||Z===!0){t.activeTexture(s.TEXTURE0+P);const ae=je.getPrimaries(je.workingColorSpace),Ie=v.colorSpace===ri?null:je.getPrimaries(v.colorSpace),Le=v.colorSpace===ri||ae===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ee=_(v.image,!1,i.maxTextureSize);ee=ut(v,ee);const ie=r.convert(v.format,v.colorSpace),xe=r.convert(v.type);let Me=E(v.internalFormat,ie,xe,v.colorSpace,v.isVideoTexture);he($,v);let pe;const We=v.mipmaps,L=v.isVideoTexture!==!0,le=_e.__version===void 0||Z===!0,se=Y.dataReady,ge=w(v,ee);if(v.isDepthTexture)Me=y(v.format===Ti,v.type),le&&(L?t.texStorage2D(s.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Me,ee.width,ee.height,0,ie,xe,null));else if(v.isDataTexture)if(We.length>0){L&&le&&t.texStorage2D(s.TEXTURE_2D,ge,Me,We[0].width,We[0].height);for(let te=0,q=We.length;te<q;te++)pe=We[te],L?se&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,xe,pe.data):t.texImage2D(s.TEXTURE_2D,te,Me,pe.width,pe.height,0,ie,xe,pe.data);v.generateMipmaps=!1}else L?(le&&t.texStorage2D(s.TEXTURE_2D,ge,Me,ee.width,ee.height),se&&ot(v,ee,ie,xe)):t.texImage2D(s.TEXTURE_2D,0,Me,ee.width,ee.height,0,ie,xe,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Me,We[0].width,We[0].height,ee.depth);for(let te=0,q=We.length;te<q;te++)if(pe=We[te],v.format!==nn)if(ie!==null)if(L){if(se)if(v.layerUpdates.size>0){const ve=gh(pe.width,pe.height,v.format,v.type);for(const Ue of v.layerUpdates){const dt=pe.data.subarray(Ue*ve/pe.data.BYTES_PER_ELEMENT,(Ue+1)*ve/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Ue,pe.width,pe.height,1,ie,dt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ee.depth,ie,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Me,pe.width,pe.height,ee.depth,0,pe.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ee.depth,ie,xe,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Me,pe.width,pe.height,ee.depth,0,ie,xe,pe.data)}else{L&&le&&t.texStorage2D(s.TEXTURE_2D,ge,Me,We[0].width,We[0].height);for(let te=0,q=We.length;te<q;te++)pe=We[te],v.format!==nn?ie!==null?L?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Me,pe.width,pe.height,0,pe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,xe,pe.data):t.texImage2D(s.TEXTURE_2D,te,Me,pe.width,pe.height,0,ie,xe,pe.data)}else if(v.isDataArrayTexture)if(L){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Me,ee.width,ee.height,ee.depth),se)if(v.layerUpdates.size>0){const te=gh(ee.width,ee.height,v.format,v.type);for(const q of v.layerUpdates){const ve=ee.data.subarray(q*te/ee.data.BYTES_PER_ELEMENT,(q+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,ie,xe,ve)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,xe,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ie,xe,ee.data);else if(v.isData3DTexture)L?(le&&t.texStorage3D(s.TEXTURE_3D,ge,Me,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,xe,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ie,xe,ee.data);else if(v.isFramebufferTexture){if(le)if(L)t.texStorage2D(s.TEXTURE_2D,ge,Me,ee.width,ee.height);else{let te=ee.width,q=ee.height;for(let ve=0;ve<ge;ve++)t.texImage2D(s.TEXTURE_2D,ve,Me,te,q,0,ie,xe,null),te>>=1,q>>=1}}else if(We.length>0){if(L&&le){const te=be(We[0]);t.texStorage2D(s.TEXTURE_2D,ge,Me,te.width,te.height)}for(let te=0,q=We.length;te<q;te++)pe=We[te],L?se&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ie,xe,pe):t.texImage2D(s.TEXTURE_2D,te,Me,ie,xe,pe);v.generateMipmaps=!1}else if(L){if(le){const te=be(ee);t.texStorage2D(s.TEXTURE_2D,ge,Me,te.width,te.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,xe,ee)}else t.texImage2D(s.TEXTURE_2D,0,Me,ie,xe,ee);p(v)&&g($),_e.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ne(C,v,P){if(v.image.length!==6)return;const $=De(C,v),Z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+P);const Y=n.get(Z);if(Z.version!==Y.__version||$===!0){t.activeTexture(s.TEXTURE0+P);const _e=je.getPrimaries(je.workingColorSpace),ae=v.colorSpace===ri?null:je.getPrimaries(v.colorSpace),Ie=v.colorSpace===ri||_e===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Le=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ie=[];for(let q=0;q<6;q++)!Le&&!ee?ie[q]=_(v.image[q],!0,i.maxCubemapSize):ie[q]=ee?v.image[q].image:v.image[q],ie[q]=ut(v,ie[q]);const xe=ie[0],Me=r.convert(v.format,v.colorSpace),pe=r.convert(v.type),We=E(v.internalFormat,Me,pe,v.colorSpace),L=v.isVideoTexture!==!0,le=Y.__version===void 0||$===!0,se=Z.dataReady;let ge=w(v,xe);he(s.TEXTURE_CUBE_MAP,v);let te;if(Le){L&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,We,xe.width,xe.height);for(let q=0;q<6;q++){te=ie[q].mipmaps;for(let ve=0;ve<te.length;ve++){const Ue=te[ve];v.format!==nn?Me!==null?L?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,We,Ue.width,Ue.height,0,Ue.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,Ue.width,Ue.height,Me,pe,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,We,Ue.width,Ue.height,0,Me,pe,Ue.data)}}}else{if(te=v.mipmaps,L&&le){te.length>0&&ge++;const q=be(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,We,q.width,q.height)}for(let q=0;q<6;q++)if(ee){L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ie[q].width,ie[q].height,Me,pe,ie[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,We,ie[q].width,ie[q].height,0,Me,pe,ie[q].data);for(let ve=0;ve<te.length;ve++){const dt=te[ve].image[q].image;L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,dt.width,dt.height,Me,pe,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,We,dt.width,dt.height,0,Me,pe,dt.data)}}else{L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me,pe,ie[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,We,Me,pe,ie[q]);for(let ve=0;ve<te.length;ve++){const Ue=te[ve];L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,Me,pe,Ue.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,We,Me,pe,Ue.image[q])}}}p(v)&&g(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function re(C,v,P,$,Z,Y){const _e=r.convert(P.format,P.colorSpace),ae=r.convert(P.type),Ie=E(P.internalFormat,_e,ae,P.colorSpace),Le=n.get(v),ee=n.get(P);if(ee.__renderTarget=v,!Le.__hasExternalTextures){const ie=Math.max(1,v.width>>Y),xe=Math.max(1,v.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Ie,ie,xe,v.depth,0,_e,ae,null):t.texImage2D(Z,Y,Ie,ie,xe,0,_e,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),St(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,ee.__webglTexture,0,I(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,ee.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(C,v,P){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){const $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=y(v.stencilBuffer,Z),_e=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;St(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),Y,v.width,v.height):P?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),Y,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Y,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,C)}else{const $=v.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],_e=r.convert(Y.format,Y.colorSpace),ae=r.convert(Y.type),Ie=E(Y.internalFormat,_e,ae,Y.colorSpace);St(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),Ie,v.width,v.height):P?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),Ie,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(C,v,P){const $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),he(s.TEXTURE_CUBE_MAP,v.depthTexture);const Le=r.convert(v.depthTexture.format),ee=r.convert(v.depthTexture.type);let ie;v.depthTexture.format===$n?ie=s.DEPTH_COMPONENT24:v.depthTexture.format===Ti&&(ie=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ie,v.width,v.height,0,Le,ee,null)}}else H(v.depthTexture,0);const Y=Z.__webglTexture,_e=I(v),ae=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+P:s.TEXTURE_2D,Ie=v.depthTexture.format===Ti?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===$n)St(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,ae,Y,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,ae,Y,0);else if(v.depthTexture.format===Ti)St(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,ae,Y,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,ae,Y,0);else throw new Error("Unknown depthTexture format")}function Te(C){const v=n.get(C),P=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(P)for(let $=0;$<6;$++)Ae(v.__webglFramebuffer[$],C,$);else{const $=C.texture.mipmaps;$&&$.length>0?Ae(v.__webglFramebuffer[0],C,0):Ae(v.__webglFramebuffer,C,0)}else if(P){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=s.createRenderbuffer(),Ne(v.__webglDepthbuffer[$],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Ne(v.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(C,v,P){const $=n.get(C);v!==void 0&&re($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),P!==void 0&&Te(C)}function qe(C){const v=C.texture,P=n.get(C),$=n.get(v);C.addEventListener("dispose",T);const Z=C.textures,Y=C.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=v.version,o.memory.textures++),Y){P.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[ae]=[];for(let Ie=0;Ie<v.mipmaps.length;Ie++)P.__webglFramebuffer[ae][Ie]=s.createFramebuffer()}else P.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)P.__webglFramebuffer[ae]=s.createFramebuffer()}else P.__webglFramebuffer=s.createFramebuffer();if(_e)for(let ae=0,Ie=Z.length;ae<Ie;ae++){const Le=n.get(Z[ae]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&St(C)===!1){P.__webglMultisampledFramebuffer=s.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const Ie=Z[ae];P.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,P.__webglColorRenderbuffer[ae]);const Le=r.convert(Ie.format,Ie.colorSpace),ee=r.convert(Ie.type),ie=E(Ie.internalFormat,Le,ee,Ie.colorSpace,C.isXRRenderTarget===!0),xe=I(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ie,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,P.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(P.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),he(s.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)re(P.__webglFramebuffer[ae][Ie],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie);else re(P.__webglFramebuffer[ae],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(v)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,Ie=Z.length;ae<Ie;ae++){const Le=Z[ae],ee=n.get(Le);let ie=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),he(ie,Le),re(P.__webglFramebuffer,C,Le,s.COLOR_ATTACHMENT0+ae,ie,0),p(Le)&&g(ie)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),he(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)re(P.__webglFramebuffer[Ie],C,v,s.COLOR_ATTACHMENT0,ae,Ie);else re(P.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,ae,0);p(v)&&g(ae),t.unbindTexture()}C.depthBuffer&&Te(C)}function Qe(C){const v=C.textures;for(let P=0,$=v.length;P<$;P++){const Z=v[P];if(p(Z)){const Y=M(C),_e=n.get(Z).__webglTexture;t.bindTexture(Y,_e),g(Y),t.unbindTexture()}}}const ct=[],Ge=[];function _t(C){if(C.samples>0){if(St(C)===!1){const v=C.textures,P=C.width,$=C.height;let Z=s.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(C),ae=v.length>1;if(ae)for(let Le=0;Le<v.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ie=C.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Le=0;Le<v.length;Le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Le]);const ee=n.get(v[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,P,$,0,0,P,$,Z,s.NEAREST),l===!0&&(ct.length=0,Ge.length=0,ct.push(s.COLOR_ATTACHMENT0+Le),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(Y),Ge.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let Le=0;Le<v.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Le]);const ee=n.get(v[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function St(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Je(C){const v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ut(C,v){const P=C.colorSpace,$=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==Gt&&P!==ri&&(je.getTransfer(P)===tt?($!==nn||Z!==Kt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",P)),v}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Oe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=re,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $x(s,e){function t(n,i=ri){let r;const o=je.getTransfer(i);if(n===Kt)return s.UNSIGNED_BYTE;if(n===Fl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xu)return s.BYTE;if(n===qu)return s.SHORT;if(n===Hs)return s.UNSIGNED_SHORT;if(n===Ul)return s.INT;if(n===Cn)return s.UNSIGNED_INT;if(n===tn)return s.FLOAT;if(n===Yn)return s.HALF_FLOAT;if(n===Ku)return s.ALPHA;if(n===ju)return s.RGB;if(n===nn)return s.RGBA;if(n===$n)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===Bl)return s.RED;if(n===kl)return s.RED_INTEGER;if(n===rs)return s.RG;if(n===zl)return s.RG_INTEGER;if(n===Vl)return s.RGBA_INTEGER;if(n===qr||n===Yr||n===$r||n===Kr)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Aa||n===Ca||n===Ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===La||n===Pa||n===Da||n===Na||n===Ua||n===Fa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===La)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return r.COMPRESSED_R11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Ka||n===ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===Ja||n===Qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Za)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===el)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:Kx,fragmentShader:jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jx extends us{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new Zx,g={},M=t.getContextAttributes();let E=null,y=null;const w=[],A=[],T=new He;let x=null;const S=new Ht;S.viewport=new ft;const F=new Ht;F.viewport=new ft;const R=[S,F],O=new tm;let B=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=w[K];return ne===void 0&&(ne=new Io,w[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=w[K];return ne===void 0&&(ne=new Io,w[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=w[K];return ne===void 0&&(ne=new Io,w[K]=ne),ne.getHandSpace()};function H(K){const ne=A.indexOf(K.inputSource);if(ne===-1)return;const re=w[ne];re!==void 0&&(re.update(K.inputSource,K.frame,c||o),re.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",k);for(let K=0;K<w.length;K++){const ne=A[K];ne!==null&&(A[K]=null,w[K].disconnect(ne))}B=null,U=null,p.reset();for(const K in g)delete g[K];e.setRenderTarget(E),f=null,d=null,u=null,i=null,y=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ne=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?Ti:$n,Ne=M.stencil?Gs:Cn);const Te={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Tn(d.textureWidth,d.textureHeight,{format:nn,type:Kt,depthTexture:new Ks(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Tn(f.framebufferWidth,f.framebufferHeight,{format:nn,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(K){for(let ne=0;ne<K.removed.length;ne++){const re=K.removed[ne],Ne=A.indexOf(re);Ne>=0&&(A[Ne]=null,w[Ne].disconnect(re))}for(let ne=0;ne<K.added.length;ne++){const re=K.added[ne];let Ne=A.indexOf(re);if(Ne===-1){for(let Te=0;Te<w.length;Te++)if(Te>=A.length){A.push(re),Ne=Te;break}else if(A[Te]===null){A[Te]=re,Ne=Te;break}if(Ne===-1)break}const Ae=w[Ne];Ae&&Ae.connect(re)}}const Q=new D,J=new D;function oe(K,ne,re){Q.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const Ne=Q.distanceTo(J),Ae=ne.projectionMatrix.elements,Te=re.projectionMatrix.elements,Oe=Ae[14]/(Ae[10]-1),qe=Ae[14]/(Ae[10]+1),Qe=(Ae[9]+1)/Ae[5],ct=(Ae[9]-1)/Ae[5],Ge=(Ae[8]-1)/Ae[0],_t=(Te[8]+1)/Te[0],I=Oe*Ge,St=Oe*_t,Je=Ne/(-Ge+_t),ut=Je*-Ge;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ut),K.translateZ(Je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const be=Oe+Je,C=qe+Je,v=I-ut,P=St+(Ne-ut),$=Qe*qe/C*be,Z=ct*qe/C*be;K.projectionMatrix.makePerspective(v,P,$,Z,be,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ne=K.near,re=K.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(re=p.depthFar)),O.near=F.near=S.near=ne,O.far=F.far=S.far=re,(B!==O.near||U!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,U=O.far),O.layers.mask=K.layers.mask|6,S.layers.mask=O.layers.mask&-5,F.layers.mask=O.layers.mask&-3;const Ne=K.parent,Ae=O.cameras;fe(O,Ne);for(let Te=0;Te<Ae.length;Te++)fe(Ae[Te],Ne);Ae.length===2?oe(O,S,F):O.projectionMatrix.copy(S.projectionMatrix),he(K,O,Ne)};function he(K,ne,re){re===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(re.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=os*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(K){return g[K]};let De=null;function rt(K,ne){if(h=ne.getViewerPose(c||o),m=ne,h!==null){const re=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ne=!1;re.length!==O.cameras.length&&(O.cameras.length=0,Ne=!0);for(let qe=0;qe<re.length;qe++){const Qe=re[qe];let ct=null;if(f!==null)ct=f.getViewport(Qe);else{const _t=u.getViewSubImage(d,Qe);ct=_t.viewport,qe===0&&(e.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(y))}let Ge=R[qe];Ge===void 0&&(Ge=new Ht,Ge.layers.enable(qe),Ge.viewport=new ft,R[qe]=Ge),Ge.matrix.fromArray(Qe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Qe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ct.x,ct.y,ct.width,ct.height),qe===0&&(O.matrix.copy(Ge.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ne===!0&&O.cameras.push(Ge)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const qe=u.getDepthInformation(re[0]);qe&&qe.isValid&&qe.texture&&p.init(qe,i.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<re.length;qe++){const Qe=re[qe].camera;if(Qe){let ct=g[Qe];ct||(ct=new ad,g[Qe]=ct);const Ge=u.getCameraImage(Qe);ct.sourceTexture=Ge}}}}for(let re=0;re<w.length;re++){const Ne=A[re],Ae=w[re];Ne!==null&&Ae!==void 0&&Ae.update(Ne,ne,c||o)}De&&De(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const ot=new pd;ot.setAnimationLoop(rt),this.setAnimationLoop=function(K){De=K},this.dispose=function(){}}}const gi=new fn,Qx=new Fe;function ev(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ld(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,M,E,y){g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Bt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Bt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=e.get(g),E=M.envMap,y=M.envMapRotation;E&&(p.envMap.value=E,gi.copy(y),gi.x*=-1,gi.y*=-1,gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(gi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=E*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const M=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const y=E.program;n.uniformBlockBinding(M,y)}function c(M,E){let y=i[M.id];y===void 0&&(m(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",p));const w=E.program;n.updateUBOMapping(M,w);const A=e.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const E=u();M.__bindingPointIndex=E;const y=s.createBuffer(),w=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=i[M.id],y=M.uniforms,w=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,T=y.length;A<T;A++){const x=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,F=x.length;S<F;S++){const R=x[S];if(f(R,A,S,w)===!0){const O=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let H=0;H<B.length;H++){const V=B[H],k=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,O+U,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,E,y,w){const A=M.value,T=E+"_"+y;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const x=w[T];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return w[T]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function m(M){const E=M.uniforms;let y=0;const w=16;for(let T=0,x=E.length;T<x;T++){const S=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,R=S.length;F<R;F++){const O=S[F],B=Array.isArray(O.value)?O.value:[O.value];for(let U=0,H=B.length;U<H;U++){const V=B[U],k=_(V),Q=y%w,J=Q%k.boundary,oe=Q+J;y+=J,oe!==0&&w-oe<k.storage&&(y+=w-oe),O.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=k.storage}}}const A=y%w;return A>0&&(y+=w-A),M.__size=y,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",M),E}function p(M){const E=M.target;E.removeEventListener("dispose",p);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}const nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function iv(){return xn===null&&(xn=new Yl(nv,16,16,rs,Yn),xn.name="DFG_LUT",xn.minFilter=Tt,xn.magFilter=Tt,xn.wrapS=Sn,xn.wrapT=Sn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class sv{constructor(e={}){const{canvas:t=Rf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Kt}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,p=new Set([Vl,zl,kl]),g=new Set([Kt,Cn,Hs,Gs,Fl,Ol]),M=new Uint32Array(4),E=new Int32Array(4);let y=null,w=null;const A=[],T=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let F=!1;this._outputColorSpace=vt;let R=0,O=0,B=null,U=-1,H=null;const V=new ft,k=new ft;let Q=null;const J=new Se(0);let oe=0,fe=t.width,he=t.height,De=1,rt=null,ot=null;const K=new ft(0,0,fe,he),ne=new ft(0,0,fe,he);let re=!1;const Ne=new fo;let Ae=!1,Te=!1;const Oe=new Fe,qe=new D,Qe=new ft,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function _t(){return B===null?De:1}let I=n;function St(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",dt,!1),I===null){const N="webgl2";if(I=St(N,b),I===null)throw St(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Pe("WebGLRenderer: "+b.message),b}let Je,ut,be,C,v,P,$,Z,Y,_e,ae,Ie,Le,ee,ie,xe,Me,pe,We,L,le,se,ge;function te(){Je=new s0(I),Je.init(),le=new $x(I,Je),ut=new j_(I,Je,e,le),be=new qx(I,Je),ut.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),C=new a0(I),v=new Px,P=new Yx(I,Je,be,v,ut,le,C),$=new i0(S),Z=new dm(I),se=new $_(I,Z),Y=new r0(I,Z,C,se),_e=new c0(I,Y,Z,se,C),pe=new l0(I,ut,P),ie=new Z_(v),ae=new Lx(S,$,Je,ut,se,ie),Ie=new ev(S,v),Le=new Nx,ee=new zx(Je),Me=new Y_(S,$,be,_e,m,l),xe=new Xx(S,_e,ut),ge=new tv(I,C,ut,be),We=new K_(I,Je,C),L=new o0(I,Je,C),C.programs=ae.programs,S.capabilities=ut,S.extensions=Je,S.properties=v,S.renderLists=Le,S.shadowMap=xe,S.state=be,S.info=C}te(),_!==Kt&&(x=new u0(_,t.width,t.height,i,r));const q=new Jx(S,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(b){b!==void 0&&(De=b,this.setSize(fe,he,!1))},this.getSize=function(b){return b.set(fe,he)},this.setSize=function(b,N,X=!0){if(q.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=b,he=N,t.width=Math.floor(b*De),t.height=Math.floor(N*De),X===!0&&(t.style.width=b+"px",t.style.height=N+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(fe*De,he*De).floor()},this.setDrawingBufferSize=function(b,N,X){fe=b,he=N,De=X,t.width=Math.floor(b*X),t.height=Math.floor(N*X),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(_===Kt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,N,X,W){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,N,X,W),be.viewport(V.copy(K).multiplyScalar(De).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,N,X,W){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,N,X,W),be.scissor(k.copy(ne).multiplyScalar(De).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(b){be.setScissorTest(re=b)},this.setOpaqueSort=function(b){rt=b},this.setTransparentSort=function(b){ot=b},this.getClearColor=function(b){return b.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,X=!0){let W=0;if(b){let G=!1;if(B!==null){const ue=B.texture.format;G=p.has(ue)}if(G){const ue=B.texture.type,me=g.has(ue),de=Me.getClearColor(),ye=Me.getClearAlpha(),we=de.r,Be=de.g,Xe=de.b;me?(M[0]=we,M[1]=Be,M[2]=Xe,M[3]=ye,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=we,E[1]=Be,E[2]=Xe,E[3]=ye,I.clearBufferiv(I.COLOR,0,E))}else W|=I.COLOR_BUFFER_BIT}N&&(W|=I.DEPTH_BUFFER_BIT),X&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Me.dispose(),Le.dispose(),ee.dispose(),v.dispose(),$.dispose(),_e.dispose(),se.dispose(),ge.dispose(),ae.dispose(),q.dispose(),q.removeEventListener("sessionstart",pc),q.removeEventListener("sessionend",mc),ci.stop()};function ve(b){b.preventDefault(),to("WebGLRenderer: Context Lost."),F=!0}function Ue(){to("WebGLRenderer: Context Restored."),F=!1;const b=C.autoReset,N=xe.enabled,X=xe.autoUpdate,W=xe.needsUpdate,G=xe.type;te(),C.autoReset=b,xe.enabled=N,xe.autoUpdate=X,xe.needsUpdate=W,xe.type=G}function dt(b){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function et(b){const N=b.target;N.removeEventListener("dispose",et),Pn(N)}function Pn(b){Dn(b),v.remove(b)}function Dn(b){const N=v.get(b).programs;N!==void 0&&(N.forEach(function(X){ae.releaseProgram(X)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,X,W,G,ue){N===null&&(N=ct);const me=G.isMesh&&G.matrixWorld.determinant()<0,de=Bd(b,N,X,W,G);be.setMaterial(W,me);let ye=X.index,we=1;if(W.wireframe===!0){if(ye=Y.getWireframeAttribute(X),ye===void 0)return;we=2}const Be=X.drawRange,Xe=X.attributes.position;let Ce=Be.start*we,at=(Be.start+Be.count)*we;ue!==null&&(Ce=Math.max(Ce,ue.start*we),at=Math.min(at,(ue.start+ue.count)*we)),ye!==null?(Ce=Math.max(Ce,0),at=Math.min(at,ye.count)):Xe!=null&&(Ce=Math.max(Ce,0),at=Math.min(at,Xe.count));const xt=at-Ce;if(xt<0||xt===1/0)return;se.setup(G,W,de,X,ye);let gt,lt=We;if(ye!==null&&(gt=Z.get(ye),lt=L,lt.setIndex(gt)),G.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*_t()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(G.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),be.setLineWidth(Ut*_t()),G.isLineSegments?lt.setMode(I.LINES):G.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else G.isPoints?lt.setMode(I.POINTS):G.isSprite&&lt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)no("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ut=G._multiDrawStarts,Ee=G._multiDrawCounts,qt=G._multiDrawCount,Ze=ye?Z.get(ye).bytesPerElement:1,an=v.get(W).currentProgram.getUniforms();for(let gn=0;gn<qt;gn++)an.setValue(I,"_gl_DrawID",gn),lt.render(Ut[gn]/Ze,Ee[gn])}else if(G.isInstancedMesh)lt.renderInstances(Ce,xt,G.count);else if(X.isInstancedBufferGeometry){const Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Ut);lt.renderInstances(Ce,xt,Ee)}else lt.render(Ce,xt)};function fc(b,N,X){b.transparent===!0&&b.side===Qt&&b.forceSinglePass===!1?(b.side=Bt,b.needsUpdate=!0,tr(b,N,X),b.side=An,b.needsUpdate=!0,tr(b,N,X),b.side=Qt):tr(b,N,X)}this.compile=function(b,N,X=null){X===null&&(X=b),w=ee.get(X),w.init(N),T.push(w),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const W=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const de=ue[me];fc(de,X,G),W.add(de)}else fc(ue,X,G),W.add(ue)}),w=T.pop(),W},this.compileAsync=function(b,N,X=null){const W=this.compile(b,N,X);return new Promise(G=>{function ue(){if(W.forEach(function(me){v.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){G(b);return}setTimeout(ue,10)}Je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Mo=null;function Od(b){Mo&&Mo(b)}function pc(){ci.stop()}function mc(){ci.start()}const ci=new pd;ci.setAnimationLoop(Od),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(b){Mo=b,q.setAnimationLoop(b),b===null?ci.stop():ci.start()},q.addEventListener("sessionstart",pc),q.addEventListener("sessionend",mc),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const X=q.enabled===!0&&q.isPresenting===!0,W=x!==null&&(B===null||X)&&x.begin(S,B);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,N,B),w=ee.get(b,T.length),w.init(N),T.push(w),Oe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ne.setFromProjectionMatrix(Oe,bn,N.reversedDepth),Te=this.localClippingEnabled,Ae=ie.init(this.clippingPlanes,Te),y=Le.get(b,A.length),y.init(),A.push(y),q.enabled===!0&&q.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&yo(me,N,-1/0,S.sortObjects)}yo(b,N,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(rt,ot),Ge=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ge&&Me.addToRenderList(y,b),this.info.render.frame++,Ae===!0&&ie.beginShadows();const G=w.state.shadowsArray;if(xe.render(G,b,N),Ae===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&x.hasRenderPass())===!1){const me=y.opaque,de=y.transmissive;if(w.setupLights(),N.isArrayCamera){const ye=N.cameras;if(de.length>0)for(let we=0,Be=ye.length;we<Be;we++){const Xe=ye[we];_c(me,de,b,Xe)}Ge&&Me.render(b);for(let we=0,Be=ye.length;we<Be;we++){const Xe=ye[we];gc(y,b,Xe,Xe.viewport)}}else de.length>0&&_c(me,de,b,N),Ge&&Me.render(b),gc(y,b,N)}B!==null&&O===0&&(P.updateMultisampleRenderTarget(B),P.updateRenderTargetMipmap(B)),W&&x.end(S),b.isScene===!0&&b.onAfterRender(S,b,N),se.resetDefaultState(),U=-1,H=null,T.pop(),T.length>0?(w=T[T.length-1],Ae===!0&&ie.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function yo(b,N,X,W){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ne.intersectsSprite(b)){W&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Oe);const me=_e.update(b),de=b.material;de.visible&&y.push(b,me,de,X,Qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ne.intersectsObject(b))){const me=_e.update(b),de=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Qe.copy(me.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(Oe)),Array.isArray(de)){const ye=me.groups;for(let we=0,Be=ye.length;we<Be;we++){const Xe=ye[we],Ce=de[Xe.materialIndex];Ce&&Ce.visible&&y.push(b,me,Ce,X,Qe.z,Xe)}}else de.visible&&y.push(b,me,de,X,Qe.z,null)}}const ue=b.children;for(let me=0,de=ue.length;me<de;me++)yo(ue[me],N,X,W)}function gc(b,N,X,W){const{opaque:G,transmissive:ue,transparent:me}=b;w.setupLightsView(X),Ae===!0&&ie.setGlobalState(S.clippingPlanes,X),W&&be.viewport(V.copy(W)),G.length>0&&er(G,N,X),ue.length>0&&er(ue,N,X),me.length>0&&er(me,N,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function _c(b,N,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Ce=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Tn(1,1,{generateMipmaps:!0,type:Ce?Yn:Kt,minFilter:Vn,samples:Math.max(4,ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ue=w.state.transmissionRenderTarget[W.id],me=W.viewport||V;ue.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const de=S.getRenderTarget(),ye=S.getActiveCubeFace(),we=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(J),oe=S.getClearAlpha(),oe<1&&S.setClearColor(16777215,.5),S.clear(),Ge&&Me.render(X);const Be=S.toneMapping;S.toneMapping=En;const Xe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),Ae===!0&&ie.setGlobalState(S.clippingPlanes,W),er(b,X,W),P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let at=0,xt=N.length;at<xt;at++){const gt=N[at],{object:lt,geometry:Ut,material:Ee,group:qt}=gt;if(Ee.side===Qt&&lt.layers.test(W.layers)){const Ze=Ee.side;Ee.side=Bt,Ee.needsUpdate=!0,xc(lt,X,W,Ut,Ee,qt),Ee.side=Ze,Ee.needsUpdate=!0,Ce=!0}}Ce===!0&&(P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue))}S.setRenderTarget(de,ye,we),S.setClearColor(J,oe),Xe!==void 0&&(W.viewport=Xe),S.toneMapping=Be}function er(b,N,X){const W=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ue=b.length;G<ue;G++){const me=b[G],{object:de,geometry:ye,group:we}=me;let Be=me.material;Be.allowOverride===!0&&W!==null&&(Be=W),de.layers.test(X.layers)&&xc(de,N,X,ye,Be,we)}}function xc(b,N,X,W,G,ue){b.onBeforeRender(S,N,X,W,G,ue),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(S,N,X,W,b,ue),G.transparent===!0&&G.side===Qt&&G.forceSinglePass===!1?(G.side=Bt,G.needsUpdate=!0,S.renderBufferDirect(X,N,W,G,b,ue),G.side=An,G.needsUpdate=!0,S.renderBufferDirect(X,N,W,G,b,ue),G.side=Qt):S.renderBufferDirect(X,N,W,G,b,ue),b.onAfterRender(S,N,X,W,G,ue)}function tr(b,N,X){N.isScene!==!0&&(N=ct);const W=v.get(b),G=w.state.lights,ue=w.state.shadowsArray,me=G.state.version,de=ae.getParameters(b,G.state,ue,N,X),ye=ae.getProgramCacheKey(de);let we=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,W.fog=N.fog;const Be=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=$.get(b.envMap||W.environment,Be),W.envMapRotation=W.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,we===void 0&&(b.addEventListener("dispose",et),we=new Map,W.programs=we);let Xe=we.get(ye);if(Xe!==void 0){if(W.currentProgram===Xe&&W.lightsStateVersion===me)return Mc(b,de),Xe}else de.uniforms=ae.getUniforms(b),b.onBeforeCompile(de,S),Xe=ae.acquireProgram(de,ye),we.set(ye,Xe),W.uniforms=de.uniforms;const Ce=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=ie.uniform),Mc(b,de),W.needsLights=zd(b),W.lightsStateVersion=me,W.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Xe,W.uniformsList=null,Xe}function vc(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Zr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Mc(b,N){const X=v.get(b);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Bd(b,N,X,W,G){N.isScene!==!0&&(N=ct),P.resetTextureUnits();const ue=N.fog,me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?N.environment:null,de=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Gt,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,we=$.get(W.envMap||me,ye),Be=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color;let gt=En;W.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(gt=S.toneMapping);const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ut=lt!==void 0?lt.length:0,Ee=v.get(W),qt=w.state.lights;if(Ae===!0&&(Te===!0||b!==H)){const It=b===H&&W.id===U;ie.setState(W,b,It)}let Ze=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==qt.state.version||Ee.outputColorSpace!==de||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==we||W.fog===!0&&Ee.fog!==ue||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Be||Ee.vertexTangents!==Xe||Ee.morphTargets!==Ce||Ee.morphNormals!==at||Ee.morphColors!==xt||Ee.toneMapping!==gt||Ee.morphTargetsCount!==Ut)&&(Ze=!0):(Ze=!0,Ee.__version=W.version);let an=Ee.currentProgram;Ze===!0&&(an=tr(W,N,G));let gn=!1,hi=!1,Ii=!1;const ht=an.getUniforms(),Dt=Ee.uniforms;if(be.useProgram(an.program)&&(gn=!0,hi=!0,Ii=!0),W.id!==U&&(U=W.id,hi=!0),gn||H!==b){be.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(I,"projectionMatrix",b.projectionMatrix),ht.setValue(I,"viewMatrix",b.matrixWorldInverse);const jn=ht.map.cameraPosition;jn!==void 0&&jn.setValue(I,qe.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&ht.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ht.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,hi=!0,Ii=!0)}if(Ee.needsLights&&(qt.state.directionalShadowMap.length>0&&ht.setValue(I,"directionalShadowMap",qt.state.directionalShadowMap,P),qt.state.spotShadowMap.length>0&&ht.setValue(I,"spotShadowMap",qt.state.spotShadowMap,P),qt.state.pointShadowMap.length>0&&ht.setValue(I,"pointShadowMap",qt.state.pointShadowMap,P)),G.isSkinnedMesh){ht.setOptional(I,G,"bindMatrix"),ht.setOptional(I,G,"bindMatrixInverse");const It=G.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ht.setValue(I,"boneTexture",It.boneTexture,P))}G.isBatchedMesh&&(ht.setOptional(I,G,"batchingTexture"),ht.setValue(I,"batchingTexture",G._matricesTexture,P),ht.setOptional(I,G,"batchingIdTexture"),ht.setValue(I,"batchingIdTexture",G._indirectTexture,P),ht.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ht.setValue(I,"batchingColorTexture",G._colorsTexture,P));const Kn=X.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&pe.update(G,X,an),(hi||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,ht.setValue(I,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&N.environment!==null&&(Dt.envMapIntensity.value=N.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=iv()),hi&&(ht.setValue(I,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&kd(Dt,Ii),ue&&W.fog===!0&&Ie.refreshFogUniforms(Dt,ue),Ie.refreshMaterialUniforms(Dt,W,De,he,w.state.transmissionRenderTarget[b.id]),Zr.upload(I,vc(Ee),Dt,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zr.upload(I,vc(Ee),Dt,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ht.setValue(I,"center",G.center),ht.setValue(I,"modelViewMatrix",G.modelViewMatrix),ht.setValue(I,"normalMatrix",G.normalMatrix),ht.setValue(I,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const It=W.uniformsGroups;for(let jn=0,Li=It.length;jn<Li;jn++){const yc=It[jn];ge.update(yc,an),ge.bind(yc,an)}}return an}function kd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function zd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,N,X){const W=v.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=N,v.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const X=v.get(b);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Vd=I.createFramebuffer();this.setRenderTarget=function(b,N=0,X=0){B=b,R=N,O=X;let W=null,G=!1,ue=!1;if(b){const de=v.get(b);if(de.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(I.FRAMEBUFFER,de.__webglFramebuffer),V.copy(b.viewport),k.copy(b.scissor),Q=b.scissorTest,be.viewport(V),be.scissor(k),be.setScissorTest(Q),U=-1;return}else if(de.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(de.__hasExternalTextures)P.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(de.__boundDepthTexture!==Be){if(Be!==null&&v.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const ye=b.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ue=!0);const we=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(we[N])?W=we[N][X]:W=we[N],G=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?W=v.get(b).__webglMultisampledFramebuffer:Array.isArray(we)?W=we[X]:W=we,V.copy(b.viewport),k.copy(b.scissor),Q=b.scissorTest}else V.copy(K).multiplyScalar(De).floor(),k.copy(ne).multiplyScalar(De).floor(),Q=re;if(X!==0&&(W=Vd),be.bindFramebuffer(I.FRAMEBUFFER,W)&&be.drawBuffers(b,W),be.viewport(V),be.scissor(k),be.setScissorTest(Q),G){const de=v.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,X)}else if(ue){const de=N;for(let ye=0;ye<b.textures.length;ye++){const we=v.get(b.textures[ye]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ye,we.__webglTexture,X,de)}}else if(b!==null&&X!==0){const de=v.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,de.__webglTexture,X)}U=-1},this.readRenderTargetPixels=function(b,N,X,W,G,ue,me,de=0){if(!(b&&b.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){be.bindFramebuffer(I.FRAMEBUFFER,ye);try{const we=b.textures[de],Be=we.format,Xe=we.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de),!ut.textureFormatReadable(Be)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Xe)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-W&&X>=0&&X<=b.height-G&&I.readPixels(N,X,W,G,le.convert(Be),le.convert(Xe),ue)}finally{const we=B!==null?v.get(B).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(b,N,X,W,G,ue,me,de=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye)if(N>=0&&N<=b.width-W&&X>=0&&X<=b.height-G){be.bindFramebuffer(I.FRAMEBUFFER,ye);const we=b.textures[de],Be=we.format,Xe=we.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+de),!ut.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(N,X,W,G,le.convert(Be),le.convert(Xe),0);const at=B!==null?v.get(B).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,at);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await If(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(Ce),I.deleteSync(xt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,X=0){const W=Math.pow(2,-X),G=Math.floor(b.image.width*W),ue=Math.floor(b.image.height*W),me=N!==null?N.x:0,de=N!==null?N.y:0;P.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,me,de,G,ue),be.unbindTexture()};const Hd=I.createFramebuffer(),Gd=I.createFramebuffer();this.copyTextureToTexture=function(b,N,X=null,W=null,G=0,ue=0){let me,de,ye,we,Be,Xe,Ce,at,xt;const gt=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(X!==null)me=X.max.x-X.min.x,de=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Be=X.min.y,Xe=X.isBox3?X.min.z:0;else{const Dt=Math.pow(2,-G);me=Math.floor(gt.width*Dt),de=Math.floor(gt.height*Dt),b.isDataArrayTexture?ye=gt.depth:b.isData3DTexture?ye=Math.floor(gt.depth*Dt):ye=1,we=0,Be=0,Xe=0}W!==null?(Ce=W.x,at=W.y,xt=W.z):(Ce=0,at=0,xt=0);const lt=le.convert(N.format),Ut=le.convert(N.type);let Ee;N.isData3DTexture?(P.setTexture3D(N,0),Ee=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(P.setTexture2DArray(N,0),Ee=I.TEXTURE_2D_ARRAY):(P.setTexture2D(N,0),Ee=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const qt=I.getParameter(I.UNPACK_ROW_LENGTH),Ze=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),hi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xe);const Ii=b.isDataArrayTexture||b.isData3DTexture,ht=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Dt=v.get(b),Kn=v.get(N),It=v.get(Dt.__renderTarget),jn=v.get(Kn.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,It.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Li=0;Li<ye;Li++)Ii&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(b).__webglTexture,G,Xe+Li),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(N).__webglTexture,ue,xt+Li)),I.blitFramebuffer(we,Be,me,de,Ce,at,me,de,I.DEPTH_BUFFER_BIT,I.NEAREST);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||v.has(b)){const Dt=v.get(b),Kn=v.get(N);be.bindFramebuffer(I.READ_FRAMEBUFFER,Hd),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,Gd);for(let It=0;It<ye;It++)Ii?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,G,Xe+It):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,G),ht?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Kn.__webglTexture,ue,xt+It):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Kn.__webglTexture,ue),G!==0?I.blitFramebuffer(we,Be,me,de,Ce,at,me,de,I.COLOR_BUFFER_BIT,I.NEAREST):ht?I.copyTexSubImage3D(Ee,ue,Ce,at,xt+It,we,Be,me,de):I.copyTexSubImage2D(Ee,ue,Ce,at,we,Be,me,de);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ht?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Ee,ue,Ce,at,xt,me,de,ye,lt,Ut,gt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,ue,Ce,at,xt,me,de,ye,lt,gt.data):I.texSubImage3D(Ee,ue,Ce,at,xt,me,de,ye,lt,Ut,gt):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,Ce,at,me,de,lt,Ut,gt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,Ce,at,gt.width,gt.height,lt,gt.data):I.texSubImage2D(I.TEXTURE_2D,ue,Ce,at,me,de,lt,Ut,gt);I.pixelStorei(I.UNPACK_ROW_LENGTH,qt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hi),ue===0&&N.generateMipmaps&&I.generateMipmap(Ee),be.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){R=0,O=0,B=null,be.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function zh(s,e){if(e===xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===sl||e===Zu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===sl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function rv(s){const e=new Map,t=new Map,n=s.clone();return Md(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Md(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Md(s.children[n],e.children[n],t)}class ov extends Ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new Vh(t,Ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Vh(t,Ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ev(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Os.extractUrlBase(e);o=Os.resolveURL(c,this.path)}else o=Os.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ud(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yd){try{o[Ye.KHR_BINARY_GLTF]=new Tv(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Bv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new cv;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new wv(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new Av;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new Cv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function av(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function yt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lv{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Gt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zp(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Kp(h),c.distance=u;break;case"spot":c=new Yp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class cv{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}}class hv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class uv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(r,r)}return Promise.all(i)}}class dv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class fv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class pv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Gt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class mv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class gv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(r[0],r[1],r[2],Gt),Promise.all(i)}}class _v{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class xv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(r[0],r[1],r[2],Gt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(i)}}class vv{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Mv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return yt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class yv{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Sv{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class bv{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Vh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Ev{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Zt.TRIANGLES&&c.mode!==Zt.TRIANGLE_STRIP&&c.mode!==Zt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const _=new Fe,p=new D,g=new Rn,M=new D(1,1,1),E=new jr(m.geometry,m.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),E.setMatrixAt(y,_.compose(p,g,M));for(const y in l)if(y==="_COLOR_0"){const w=l[y];E.instanceColor=new $s(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);mt.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const yd="glTF",Ts=12,Hh={JSON:1313821514,BIN:5130562};class Tv{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ts),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ts,r=new DataView(e,Ts);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Hh.JSON){const c=new Uint8Array(e,Ts+o,a);this.content=n.decode(c)}else if(l===Hh.BIN){const c=Ts+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=hl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=hl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ts[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}u(f)},a,c,Gt,d)})})}}class Av{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Cv{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Sd extends ds{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,_=m-c,p=-2*f+3*d,g=f-d,M=1-p,E=g-d+u;for(let y=0;y!==a;y++){const w=o[_+y+a],A=o[_+y+l]*h,T=o[m+y+a],x=o[m+y]*h;r[y]=M*w+E*A+p*T+g*x}return r}}const Rv=new Rn;class Iv extends Sd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Rv.fromArray(r).normalize().toArray(r),r}}const Zt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gh={9728:Mt,9729:Tt,9984:Wu,9985:Xr,9986:Ds,9987:Vn},Wh={33071:Sn,33648:Qr,10497:ss},ra={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lv={CUBICSPLINE:void 0,LINEAR:Xs,STEP:Ws},oa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Pv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Zl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),s.DefaultMaterial}function _i(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Nv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uv(s){let e;const t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+aa(t.attributes):e=s.indices+":"+aa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+aa(s.targets[n]);return e}function aa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ul(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ov=new Fe;class Bv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new av,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Xp(this.options.manager):this.textureLoader=new Qp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ud(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return _i(r,a,i),vn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Os.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ra[i.type],a=ts[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new At(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ra[i.type],c=ts[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,p;if(f&&f!==u){const g=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let E=t.cache.get(M);E||(_=new c(a,g*f,i.count*f/h),E=new dp(_,f/h),t.cache.add(M,E)),p=new ql(E,l,d%f/h,m)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),p=new At(_,l,m);if(i.sparse!==void 0){const g=ra.SCALAR,M=ts[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new M(o[1],E,i.sparse.count*g),A=new c(o[2],y,i.sparse.count*l);a!==null&&(p=new At(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,x=w.length;T<x;T++){const S=w[T];if(p.setX(S,A[T*l]),l>=2&&p.setY(S,A[T*l+1]),l>=3&&p.setZ(S,A[T*l+2]),l>=4&&p.setW(S,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Gh[d.magFilter]||Tt,h.minFilter=Gh[d.minFilter]||Vn,h.wrapS=Wh[d.wrapS]||ss,h.wrapT=Wh[d.wrapT]||ss,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Mt&&h.minFilter!==Tt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const p=new wt(_);p.needsUpdate=!0,d(p)}),t.load(Os.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),vn(u,o),u.userData.mimeType=o.mimeType||Fv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new od,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new io,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Zl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const u=i[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Gt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qt);const h=r.alphaMode||oa.OPAQUE;if(h===oa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===oa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Hn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Hn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Hn){const u=r.emissiveFactor;a.emissive=new Se().setRGB(u[0],u[1],u[2],Gt)}return r.emissiveTexture!==void 0&&o!==Hn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),vn(u,r),t.associations.set(u,{materials:e}),r.extensions&&_i(i,u,r),u})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Xh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Uv(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Xh(new Xt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Pv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],p=o[f];let g;const M=c[f];if(p.mode===Zt.TRIANGLES||p.mode===Zt.TRIANGLE_STRIP||p.mode===Zt.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new gp(_,M):new Et(_,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Zt.TRIANGLE_STRIP?g.geometry=zh(g.geometry,Zu):p.mode===Zt.TRIANGLE_FAN&&(g.geometry=zh(g.geometry,sl));else if(p.mode===Zt.LINES)g=new ol(_,M);else if(p.mode===Zt.LINE_STRIP)g=new Kl(_,M);else if(p.mode===Zt.LINE_LOOP)g=new Sp(_,M);else if(p.mode===Zt.POINTS)g=new bp(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Nv(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),vn(g,r),p.extensions&&_i(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&_i(i,u[0],r),u[0];const d=new Vt;r.extensions&&_i(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht($f.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new mo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $l(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],_=f.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],p=u[4],g=[];for(let E=0,y=d.length;E<y;E++){const w=d[E],A=f[E],T=m[E],x=_[E],S=p[E];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const F=n._createAnimationTracks(w,A,T,x,S);if(F)for(let R=0;R<F.length;R++)g.push(F[R])}const M=new Bp(r,void 0,g);return vn(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ov)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,m=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new rd:c.length>1?h=new Vt:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),vn(h,r),r.extensions&&_i(n,h,r),r.matrix!==void 0){const u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Vt;n.name&&(r.name=i.createUniqueName(n.name)),vn(r,n),n.extensions&&_i(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(rv(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof wn||d instanceof wt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ii[r.path]===ii.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ii[r.path]){case ii.weights:c=ls;break;case ii.rotation:c=cs;break;case ii.translation:case ii.scale:c=hs;break;default:switch(n.itemSize){case 1:c=ls;break;case 2:case 3:default:c=hs;break}break}const h=i.interpolation!==void 0?Lv[i.interpolation]:Xs,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+ii[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ul(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof cs?Iv:Sd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kv(s,e,t){const n=e.attributes,i=new pn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const h=ul(ts[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=ul(ts[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new on;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Xh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=hl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return je.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),vn(s,e),kv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Dv(s,e.targets,t):s})}const xi=[{id:1,name:"andesite",textureUri:"blocks/andesite.png",isMultiTexture:!1},{id:2,name:"birch-leaves",textureUri:"blocks/birch-leaves.png",isMultiTexture:!1},{id:3,name:"bricks",textureUri:"blocks/bricks.png",isMultiTexture:!1},{id:4,name:"coal-ore",textureUri:"blocks/coal-ore.png",isMultiTexture:!1},{id:5,name:"cobblestone",textureUri:"blocks/cobblestone.png",isMultiTexture:!1},{id:6,name:"grass-block-pine",textureUri:"blocks/grass-block-pine",isMultiTexture:!0},{id:7,name:"grass-block",textureUri:"blocks/grass-block",isMultiTexture:!0},{id:8,name:"grass-flower-block-pine",textureUri:"blocks/grass-flower-block-pine",isMultiTexture:!0},{id:9,name:"grass-flower-block",textureUri:"blocks/grass-flower-block",isMultiTexture:!0},{id:10,name:"oak-leaves",textureUri:"blocks/oak-leaves.png",isMultiTexture:!1},{id:11,name:"oak-log",textureUri:"blocks/oak-log",isMultiTexture:!0},{id:12,name:"sand",textureUri:"blocks/sand.png",isMultiTexture:!1},{id:13,name:"spruce-leaves",textureUri:"blocks/spruce-leaves.png",isMultiTexture:!1},{id:14,name:"spruce-log",textureUri:"blocks/spruce-log",isMultiTexture:!0},{id:15,name:"stone",textureUri:"blocks/stone.png",isMultiTexture:!1},{id:16,name:"water",textureUri:"blocks/water.png",isMultiTexture:!1,isLiquid:!0}],Pt=16,Jt=Pt-1,qh=Pt*Pt*Pt,Yh={x:0,y:0,z:0};function zv(s,e){const t=s.indexOf(","),n=s.indexOf(",",t+1);return e.x=Number(s.slice(0,t)),e.y=Number(s.slice(t+1,n)),e.z=Number(s.slice(n+1)),e}class Ke{constructor(e,t,n){z(this,"originCoordinate");z(this,"_chunkId");z(this,"_blocks");z(this,"_rotations");this.originCoordinate={...e},this._chunkId=Ke.originCoordinateToChunkId(e),this._blocks=t??new Uint16Array(qh),this._rotations=n??new Uint8Array(qh)}get chunkId(){return this._chunkId}static originCoordinateToChunkId(e){return`${e.x},${e.y},${e.z}`}static chunkIdToOriginCoordinate(e){return zv(e,Yh),{...Yh}}static globalCoordinateToOriginCoordinate(e){return{x:e.x&~Jt,y:e.y&~Jt,z:e.z&~Jt}}static globalCoordinateToChunkId(e){return Ke.originCoordinateToChunkId(Ke.globalCoordinateToOriginCoordinate(e))}static globalCoordinateToLocalCoordinate(e){return{x:e.x&Jt,y:e.y&Jt,z:e.z&Jt}}static blockIndexToLocalCoordinate(e){return{x:e&Jt,y:e>>4&Jt,z:e>>8&Jt}}getBlockType(e){return this._blocks[this._getIndex(e)]}setBlock(e,t){this._blocks[this._getIndex(e)]=t}getBlockRotation(e){return this._rotations[this._getIndex(e)]??0}setBlockRotation(e,t){this._rotations[this._getIndex(e)]=t&255}isEmpty(){for(let e=0;e<this._blocks.length;e++)if(this._blocks[e]!==0)return!1;return!0}cloneBlocks(){return this._blocks.slice()}cloneRotations(){return this._rotations.slice()}forEachBlock(e){for(let t=0;t<this._blocks.length;t++){const n=this._blocks[t];n!==0&&e(Ke.blockIndexToLocalCoordinate(t),n,this._rotations[t]??0)}}_getIndex(e){return e.x+Pt*(e.y+Pt*e.z)}}const oo=256,dl=.2,Vv=-.1,vi="worldEditorTime",Dr="worldEditorTextureAtlas",fl="worldEditorFogColor",pl="worldEditorFogEnabled",ml="worldEditorFogFar",gl="worldEditorFogNear",Mn="worldEditorAmbientLightColor",la="worldEditorAmbientLightIntensity",ai="worldEditorChunkVisibility",Hv={color:()=>new Se(16777215),enabled:()=>!1,far:()=>0,near:()=>0};function bd(s){return{[fl]:{get value(){return s.color()}},[pl]:{get value(){return s.enabled()}},[ml]:{get value(){return s.far()}},[gl]:{get value(){return s.near()}}}}function Ed(){return`
    uniform vec3 ${fl};
    uniform bool ${pl};
    uniform float ${ml};
    uniform float ${gl};

    vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
      if (!${pl}) {
        return color;
      }

      float fogFactor = smoothstep(${gl}, ${ml}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${fl}, fogFactor);
    }
  `}class $h extends Wt{constructor(t,n){const i=Js.clone(Nt.basic.uniforms);Object.assign(i,bd(n));const r=Nt.basic.vertexShader.replace("void main() {",`
        attribute float chunkIndex;
        attribute float lightLevel;
        varying float vChunkVisible;
        varying float vLightLevel;
        varying vec3 vWorldPos;
        uniform float ${ai}[${oo}];
        void main() {
          vChunkVisible = ${ai}[int(chunkIndex + 0.5)];
          vLightLevel = lightLevel;
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),o=Nt.basic.fragmentShader.replace("void main() {",`
          uniform vec3 ${Mn};
          uniform float ${la};
          varying float vChunkVisible;
          varying float vLightLevel;
          varying vec3 vWorldPos;
          ${Ed()}
          void main() {
        `).replace("#include <clipping_planes_fragment>",`
          #include <clipping_planes_fragment>
          if (vChunkVisible < 0.5) {
            discard;
          }
        `).replace("#include <opaque_fragment>",`
          vec3 ambientLight = ${Mn} * ${la};
          vec3 blockLight = ${Mn} * vLightLevel;
          outgoingLight *= max(ambientLight, blockLight);
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:i,vertexShader:r,fragmentShader:o,side:An,transparent:t,alphaTest:t?dl:0,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0});z(this,"colorValue",new Se(16777215));z(this,"ambientColor",new Se(16777215));z(this,"transparentMode");z(this,"atlasTexture",null);z(this,"alphaTestValue",0);z(this,"ambientIntensity",1);this.transparentMode=t,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_MAP:"",MAP_UV:"uv",...t?{USE_ALPHATEST:""}:{}},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],chunkIndex:[0],lightLevel:[0]},this.bindUniforms()}set textureAtlas(t){this.atlasTexture=t}setAmbientIntensity(t){this.ambientIntensity=t}setAmbientColor(t){this.ambientColor.copy(t)}setChunkVisibility(t){this.uniforms[ai].value=t,this.uniformsNeedUpdate=!0}copy(t){return super.copy(t),this.colorValue.copy(t.colorValue),this.ambientColor.copy(t.ambientColor),this.atlasTexture=t.atlasTexture,this.alphaTestValue=t.alphaTestValue,this.bindUniforms(),this}bindUniforms(){const t=this;this.uniforms.diffuse={value:this.colorValue},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms.map={get value(){return t.atlasTexture}},this.uniforms.alphaTest={get value(){return t.transparentMode?dl:t.alphaTestValue}},this.uniforms[Mn]={value:this.ambientColor},this.uniforms[la]={get value(){return t.ambientIntensity}},this.uniforms[ai]={value:new Float32Array(oo).fill(1)}}}class Gv extends Wt{constructor(t){super({uniforms:Js.merge([bd(t),{[vi]:{value:0},[Dr]:{value:null},[Mn]:{value:new Se(1,1,1)},[ai]:{value:new Float32Array(oo).fill(1)}}]),vertexShader:`
        uniform float ${vi};
        uniform float ${ai}[${oo}];

        attribute float chunkIndex;
        attribute vec4 foamLevel;
        attribute vec4 foamLevelDiag;
        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying float vChunkVisible;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;

        void main() {
          vChunkVisible = ${ai}[int(chunkIndex + 0.5)];
          vNormal = normalize(normal);
          vUv = uv;
          vFoamLevel = foamLevel;
          vFoamLevelDiag = foamLevelDiag;

          vec3 pos = position;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vViewVector = normalize(cameraPosition - worldPos.xyz);

          float slowTime = ${vi} * 0.5;
          float yOffset = ${Vv};
          float normalY = normal.y;
          float absNormalX = abs(normal.x);
          float absNormalZ = abs(normal.z);

          if (normalY > 0.5 || absNormalX > 0.5 || absNormalZ > 0.5) {
            pos.y += yOffset;
          }

          if (absNormalX > 0.5) pos.x += sign(normal.x) * 0.001;
          if (absNormalZ > 0.5) pos.z += sign(normal.z) * 0.001;

          vec2 corner = floor(worldPos.xz + 0.5);
          float wave = sin(dot(corner, vec2(0.5)) + slowTime) * cos(dot(corner, vec2(0.5)) + slowTime) * 0.04 +
                       sin(dot(corner, vec2(0.8)) + slowTime * 1.2) * cos(dot(corner, vec2(0.8)) + slowTime * 0.8) * 0.02;

          wave = min(0.0, wave);
          pos.y += wave;

          float depression = abs(wave) * 0.05;
          if (absNormalX > 0.5) pos.x -= sign(normal.x) * depression;
          if (absNormalZ > 0.5) pos.z -= sign(normal.z) * depression;

          worldPos = modelMatrix * vec4(pos, 1.0);
          vWorldPos = worldPos.xyz;
          vViewVector = normalize(cameraPosition - worldPos.xyz);

          vec4 mvPosition = viewMatrix * worldPos;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float ${vi};
        uniform sampler2D ${Dr};
        uniform vec3 ${Mn};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying float vChunkVisible;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${Ed()}

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = smoothstep(vec2(0.0), vec2(1.0), f);

          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));

          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        void main() {
          if (vChunkVisible < 0.5) {
            discard;
          }
          vec4 texColor = texture(${Dr}, vUv);
          if (texColor.a < ${dl.toFixed(1)}) {
            discard;
          }

          float fresnel = pow(1.0 - dot(vNormal, vViewVector), 4.0);
          float waveLighting = sin(dot(vWorldPos.xz, vec2(2.0)) + ${vi} * 0.5) * 0.1;
          vec3 finalColor = texColor.rgb * ${Mn};

          if (vNormal.y > 0.5) {
            finalColor = finalColor * 0.85 +
                         vec3(0.08, 0.12, 0.15) * fresnel +
                         vec3(0.03, 0.05, 0.08) * waveLighting;
          }

          if (vNormal.y > 0.5) {
            vec2 blockPos = fract(vWorldPos.xz);
            float foamWidth = 0.10;
            float maxFoamDist = foamWidth * 4.6;
            float minDist = 1000.0;

            float distFromPosX = 1.0 - blockPos.x;
            float distFromNegX = blockPos.x;
            float distFromPosZ = 1.0 - blockPos.y;
            float distFromNegZ = blockPos.y;

            if (vFoamLevel.x > 0.5) minDist = min(minDist, distFromPosX);
            if (vFoamLevel.y > 0.5) minDist = min(minDist, distFromNegX);
            if (vFoamLevel.z > 0.5) minDist = min(minDist, distFromPosZ);
            if (vFoamLevel.w > 0.5) minDist = min(minDist, distFromNegZ);

            if (vFoamLevelDiag.x > 0.5) minDist = min(minDist, length(vec2(distFromPosX, distFromPosZ)));
            if (vFoamLevelDiag.y > 0.5) minDist = min(minDist, length(vec2(distFromPosX, distFromNegZ)));
            if (vFoamLevelDiag.z > 0.5) minDist = min(minDist, length(vec2(distFromNegX, distFromPosZ)));
            if (vFoamLevelDiag.w > 0.5) minDist = min(minDist, length(vec2(distFromNegX, distFromNegZ)));

            if (minDist < maxFoamDist) {
              float foamIntensity = exp(-minDist / foamWidth);
              float foamTime = ${vi} * 0.3;
              vec2 foamUV = vWorldPos.xz * 6.0;

              float foamNoise = noise(foamUV + vec2(foamTime, 0.0)) * 0.5 +
                                noise(foamUV * 2.0 + vec2(0.0, foamTime * 0.5)) * 0.3 +
                                noise(foamUV * 4.0 + vec2(foamTime * 0.3, foamTime * 0.2)) * 0.2;
              float foamPattern = smoothstep(0.3, 0.5, foamNoise);
              float finalFoam = mix(foamIntensity, foamPattern * foamIntensity, smoothstep(0.0, 0.05, minDist));

              vec3 foamColor = vec3(1.0) * ${Mn};
              finalColor = mix(finalColor, foamColor, finalFoam * 0.95);
            }
          }

          gl_FragColor = vec4(finalColor, 0.8);
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        }
      `,forceSinglePass:!0,side:Qt,transparent:!0,fog:!1,lights:!1,toneMapped:!0,vertexColors:!0});z(this,"ambientColor",new Se(16777215));z(this,"ambientIntensity",1);this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],chunkIndex:[0],foamLevel:[0,0,0,0],foamLevelDiag:[0,0,0,0],uv:[0,0]}}set textureAtlas(t){this.uniforms[Dr].value=t}setAmbientIntensity(t){this.ambientIntensity=t,this.uniforms[Mn].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}setAmbientColor(t){this.ambientColor.copy(t),this.uniforms[Mn].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}setChunkVisibility(t){this.uniforms[ai].value=t,this.uniformsNeedUpdate=!0}update(t){this.uniforms[vi].value+=.0075}}function Wv(s,e,t=Hv){switch(s){case"lod":case"opaque":{const n=new $h(!1,t);return n.textureAtlas=e,n}case"transparent":{const n=new $h(!0,t);return n.depthWrite=!0,n.textureAtlas=e,n}case"liquid":{const n=new Gv(t);return n.depthWrite=!0,n.textureAtlas=e,n}}}const Xv={x:2,y:2,z:2},qv={x:8,y:4,z:8},Yv={x:2,y:2,z:2},$v={x:8,y:4,z:8};class Kv{constructor(e){z(this,"parent");z(this,"atlas",null);z(this,"ambientIntensity",1);z(this,"ambientColor",new Se(16777215));z(this,"fogProvider",null);z(this,"chunkBoundsCache",new Map);z(this,"scratchChunkIds",new Set);z(this,"scratchChunkModes",new Map);z(this,"states",{liquid:Nr(),lod:Nr(),opaque:Nr(),transparent:Nr()});this.parent=e}get batchMeshCount(){return this.states.liquid.batches.size+this.states.lod.batches.size+this.states.opaque.batches.size+this.states.transparent.batches.size}setAtlas(e){if(this.atlas!==e){if(this.atlas=e,!e){this.disposeBatchMeshes();return}for(const t of Object.values(this.states))for(const n of t.batchChunkIds.keys())t.dirtyBatchIds.add(n)}}clear(){this.disposeBatchMeshes();for(const e of Object.values(this.states))e.batchChunkIds.clear(),e.chunkGeometries.clear(),e.dirtyBatchIds.clear();this.chunkBoundsCache.clear(),this.scratchChunkIds.clear(),this.scratchChunkModes.clear()}setChunkGeometry(e,t){this.updateKindGeometry("lod",e,(t==null?void 0:t.lodGeometry)??null),this.updateKindGeometry("opaque",e,(t==null?void 0:t.opaqueGeometry)??null),this.updateKindGeometry("transparent",e,(t==null?void 0:t.transparentGeometry)??null),this.updateKindGeometry("liquid",e,(t==null?void 0:t.liquidGeometry)??null)}flush(){this.atlas&&(this.flushKind("opaque"),this.flushKind("transparent"),this.flushKind("liquid"),this.flushKind("lod"))}update(e){for(const t of this.states.liquid.batches.values())"update"in t.material&&t.material.update(e)}setAmbientIntensity(e){this.ambientIntensity=e;for(const t of Object.values(this.states))for(const n of t.batches.values())n.material.setAmbientIntensity(e)}setAmbientColor(e){this.ambientColor.copy(e);for(const t of Object.values(this.states))for(const n of t.batches.values())n.material.setAmbientColor(this.ambientColor)}setFogProvider(e){if(this.fogProvider=e,this.atlas){const t=this.atlas;this.atlas=null,this.setAtlas(t)}}applyViewDistanceVisibility(e,t,n,i){const r=this.scratchChunkIds,o=this.scratchChunkModes;r.clear(),o.clear();for(const a of Object.values(this.states))for(const l of a.chunkGeometries.keys())r.add(l);for(const a of r){const l=this.getChunkBounds(a);if(!i.intersectsBox(l)){o.set(a,"hidden");continue}if(Zv(l,e,n)===-1){o.set(a,"hidden");continue}wd(l,e)>t&&this.states.lod.chunkGeometries.has(a)?o.set(a,"lod"):o.set(a,"normal")}for(const a of Object.values(this.states))for(const[l,c]of a.batches.entries()){const h=a.batchMetadata.get(l);if(!h){c.visible=!1;continue}let u=!1,d=h.visibilityDirty;for(let f=0;f<h.chunkIds.length;f++){const m=h.chunkIds[f],_=o.get(m)??"hidden",p=a===this.states.lod&&_==="lod"||a!==this.states.lod&&a!==this.states.transparent&&a!==this.states.liquid&&_==="normal"||(a===this.states.transparent||a===this.states.liquid)&&_==="normal",g=p?1:0;h.visibility[f]!==g&&(h.visibility[f]=g,d=!0),p&&(u=!0)}d&&(c.material.setChunkVisibility(h.visibility),h.visibilityDirty=!1),c.visible=u}}dispose(){this.clear(),this.atlas=null}updateKindGeometry(e,t,n){const i=this.states[e],r=this.getBatchId(e,t),o=i.batchChunkIds.get(r)??new Set;n?(i.chunkGeometries.set(t,n),o.add(t),i.batchChunkIds.set(r,o)):(i.chunkGeometries.delete(t),o.delete(t)&&o.size===0&&i.batchChunkIds.delete(r)),i.dirtyBatchIds.add(r)}flushKind(e){const t=this.states[e],n=[...t.dirtyBatchIds];t.dirtyBatchIds.clear();for(const i of n)this.rebuildBatch(e,i)}rebuildBatch(e,t){var K,ne,re,Ne;const n=this.states[e],i=n.batches.get(t)??null,r=n.batchMetadata.get(t)??null,o=n.batchChunkIds.get(t);if(!o||o.size===0||!this.atlas){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(t)),n.batchMetadata.delete(t);return}const a=[...o].sort(jv);let l=0,c=0,h=0,u=0,d=0,f=0,m=0,_=0,p=0;for(const Ae of a){const Te=n.chunkGeometries.get(Ae);Te&&(l+=Te.positions.length,c+=Te.normals.length,h+=Te.uvs.length,u+=Te.colors.length,d+=Te.positions.length/3,f+=Te.lightLevels.length,m+=((K=Te.foamLevels)==null?void 0:K.length)??0,_+=((ne=Te.foamLevelsDiag)==null?void 0:ne.length)??0,p+=Te.indices.length)}if(p===0){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(t)),n.batchMetadata.delete(t);return}const g=Kh(l,(r==null?void 0:r.vertexCapacity)??0),M=Kh(p,(r==null?void 0:r.indexCapacity)??0),E=new Float32Array(g),y=new Float32Array(Math.ceil(g/3)*3),w=new Float32Array(Math.ceil(g/3)*2),A=new Float32Array(Math.ceil(g/3)*3),T=new Float32Array(Math.ceil(g/3)),x=new Float32Array(Math.ceil(g/3)),S=e==="liquid"?new Float32Array(Math.ceil(g/3)*4):null,F=e==="liquid"?new Float32Array(Math.ceil(g/3)*4):null,R=new Uint32Array(M);let O=0,B=0,U=0,H=0,V=0,k=0,Q=0,J=0,oe=0,fe=0;for(let Ae=0;Ae<a.length;Ae++){const Te=a[Ae],Oe=n.chunkGeometries.get(Te);if(Oe){E.set(Oe.positions,O),y.set(Oe.normals,B),w.set(Oe.uvs,U),A.set(Oe.colors,H),T.fill(Ae,V,V+Oe.positions.length/3),x.set(Oe.lightLevels,k),S&&Oe.foamLevels&&S.set(Oe.foamLevels,Q),F&&Oe.foamLevelsDiag&&F.set(Oe.foamLevelsDiag,J);for(let qe=0;qe<Oe.indices.length;qe++)R[oe+qe]=Oe.indices[qe]+fe;O+=Oe.positions.length,B+=Oe.normals.length,U+=Oe.uvs.length,H+=Oe.colors.length,V+=Oe.positions.length/3,k+=Oe.lightLevels.length,Q+=((re=Oe.foamLevels)==null?void 0:re.length)??0,J+=((Ne=Oe.foamLevelsDiag)==null?void 0:Ne.length)??0,oe+=Oe.indices.length,fe+=Oe.positions.length/3}}const he=i??this.createBatchMesh(e),De=he.geometry;this.applyMergedGeometry(De,{positions:E,normals:y,uvs:w,colors:A,chunkIndices:T,lightLevels:x,foamLevels:S,foamLevelsDiag:F,indices:R},{positionCount:l,normalCount:c,uvCount:h,colorCount:u,chunkIndexCount:d,lightLevelCount:f,foamLevelCount:m,foamLevelDiagCount:_,indexCount:p}),De.setDrawRange(0,p),eM(De,e,t);const rt=(r==null?void 0:r.visibility)??new Float32Array(256);let ot=!r||r.chunkIds.length!==a.length;ot&&rt.fill(0),he.material.setAmbientColor(this.ambientColor),he.material.setAmbientIntensity(this.ambientIntensity),n.batches.set(t,he),n.batchMetadata.set(t,{chunkIds:a,visibility:rt,visibilityDirty:ot,indexCapacity:M,vertexCapacity:g}),i||(he.material.setChunkVisibility(rt),this.parent.add(he))}createBatchMesh(e){const t=new Xt,n=Wv(e,this.atlas.texture,this.fogProvider??void 0);n.setAmbientColor(this.ambientColor),n.setAmbientIntensity(this.ambientIntensity);const i=new Et(t,n);return i.frustumCulled=!0,i.matrixAutoUpdate=!1,i.renderOrder=e==="lod"?-1:e==="opaque"?0:e==="transparent"?1:2,i.updateMatrix(),i}applyMergedGeometry(e,t,n){si(e,"position",t.positions,3,n.positionCount/3),si(e,"normal",t.normals,3,n.normalCount/3),si(e,"uv",t.uvs,2,n.uvCount/2),si(e,"color",t.colors,3,n.colorCount/3),si(e,"chunkIndex",t.chunkIndices,1,n.chunkIndexCount),si(e,"lightLevel",t.lightLevels,1,n.lightLevelCount),t.foamLevels?si(e,"foamLevel",t.foamLevels,4,n.foamLevelCount/4):e.deleteAttribute("foamLevel"),t.foamLevelsDiag?si(e,"foamLevelDiag",t.foamLevelsDiag,4,n.foamLevelDiagCount/4):e.deleteAttribute("foamLevelDiag"),Qv(e,t.indices,n.indexCount)}getChunkBounds(e){const t=this.chunkBoundsCache.get(e);if(t)return t;const n=Jv(e);return this.chunkBoundsCache.set(e,n),n}getBatchId(e,t){const n=Ke.chunkIdToOriginCoordinate(t),i=Td(e),r={x:i.x*Pt,y:i.y*Pt,z:i.z*Pt};return[Math.floor(n.x/r.x)*r.x,Math.floor(n.y/r.y)*r.y,Math.floor(n.z/r.z)*r.z].join(",")}disposeBatchMeshes(){for(const e of Object.values(this.states)){for(const t of e.batches.values())this.parent.remove(t),t.geometry.dispose(),t.material.dispose();e.batches.clear(),e.batchMetadata.clear()}}}function Nr(){return{batchChunkIds:new Map,batches:new Map,batchMetadata:new Map,chunkGeometries:new Map,dirtyBatchIds:new Set}}function Td(s){switch(s){case"liquid":return Xv;case"lod":return qv;case"opaque":return $v;case"transparent":return Yv}}function jv(s,e){const t=Ke.chunkIdToOriginCoordinate(s),n=Ke.chunkIdToOriginCoordinate(e);return t.y!==n.y?t.y-n.y:t.z!==n.z?t.z-n.z:t.x-n.x}function wd(s,e){const t=Math.max(s.min.x,Math.min(e.x,s.max.x)),n=Math.max(s.min.z,Math.min(e.y,s.max.z)),i=e.x-t,r=e.y-n;return i*i+r*r}function Zv(s,e,t){if(wd(s,e)>t)return-1;const n=Math.abs(e.x-s.min.x)>Math.abs(e.x-s.max.x)?s.min.x:s.max.x,i=Math.abs(e.y-s.min.z)>Math.abs(e.y-s.max.z)?s.min.z:s.max.z,r=e.x-n,o=e.y-i;return r*r+o*o<=t?1:0}function Jv(s){const e=Ke.chunkIdToOriginCoordinate(s);return new pn(new D(e.x,e.y,e.z),new D(e.x+Pt,e.y+Pt,e.z+Pt))}function Kh(s,e){if(s<=e)return e;let t=Math.max(1,e);for(;t<s;)t*=2;return t}function si(s,e,t,n,i){const r=s.getAttribute(e);if(!(r instanceof At)||r.array.length!==t.length||r.itemSize!==n){s.setAttribute(e,new At(t,n));return}r.array.set(t),r.needsUpdate=!0}function Qv(s,e,t){const n=s.getIndex();if(!(n instanceof At)||n.array.length!==e.length){s.setIndex(new At(e,1)),s.setDrawRange(0,t);return}n.array.set(e),n.needsUpdate=!0,s.setDrawRange(0,t)}function eM(s,e,t){const[n,i,r]=t.split(",").map(Number),o=Td(e),a=new D(n+o.x*Pt,i+o.y*Pt,r+o.z*Pt);s.boundingBox=new pn(new D(n,i,r),a),s.boundingSphere=s.boundingBox.getBoundingSphere(s.boundingSphere??new on)}function xo({x:s,y:e,z:t}){return`${s},${e},${t}`}function tM(s){const e=s.indexOf(","),t=s.indexOf(",",e+1);return{x:Number(s.slice(0,e)),y:Number(s.slice(e+1,t)),z:Number(s.slice(t+1))}}function nM(s){return typeof s=="number"?s:s.i}function iM(s){return typeof s=="number"?0:s.r??0}const jh=["left","right","top","bottom","front","back"],sM=1,rM=2,oM=4,Zh=[[1,0,0,0,1,0,0,0,1],[0,0,-1,0,1,0,1,0,0],[-1,0,0,0,1,0,0,0,-1],[0,0,1,0,1,0,-1,0,0],[-1,0,0,0,-1,0,0,0,1],[0,0,-1,0,-1,0,-1,0,0],[1,0,0,0,-1,0,0,0,-1],[0,0,1,0,-1,0,1,0,0],[0,-1,0,1,0,0,0,0,1],[0,0,-1,1,0,0,0,-1,0],[0,1,0,1,0,0,0,0,-1],[0,0,1,1,0,0,0,1,0],[0,1,0,-1,0,0,0,0,1],[0,0,-1,-1,0,0,0,1,0],[0,-1,0,-1,0,0,0,0,-1],[0,0,1,-1,0,0,0,-1,0],[1,0,0,0,0,1,0,-1,0],[0,1,0,0,0,1,1,0,0],[-1,0,0,0,0,1,0,1,0],[0,-1,0,0,0,1,-1,0,0],[1,0,0,0,0,-1,0,1,0],[0,-1,0,0,0,-1,1,0,0],[-1,0,0,0,0,-1,0,-1,0],[0,1,0,0,0,-1,-1,0,0]],Zi=16,Jh=.3,aM=Array.from({length:Zi+1},(s,e)=>e===0?0:Jh+(1-Jh)*(e-1)/(Zi-1)),lM=[0,.5,.7,.9],cM=[1,1,1,1];function hM(s){var a;const e=s.name.toLowerCase(),t=dM(s.trimeshVertices,s.trimeshIndices,s.customColliderOptions),n=t.vertices,i=t.indices,r=uM(s.textureUri),o=s.isMultiTexture?{left:`${r}/-x.png`,right:`${r}/+x.png`,top:`${r}/+y.png`,bottom:`${r}/-y.png`,front:`${r}/+z.png`,back:`${r}/-z.png`}:{left:r,right:r,top:r,bottom:r,front:r,back:r};return{...s,aoIntensity:lM,axisPassMask:((a=t.profile)==null?void 0:a.axisPassMask)??0,color:cM,isTranslucent:!!s.isLiquid||e.includes("glass")||e.includes("leaves")||e.includes("water")||e.includes("ice"),transparencyRatio:0,trimeshIndices:i,trimeshOcclusionProfile:t.profile,trimeshTriangleData:mM(n,i),trimeshVertices:n,textureUris:o}}function uM(s){return s.startsWith("http://")||s.startsWith("https://")?s:`/voxcinder/world-editor/${s.startsWith("/")?s.slice(1):s}`}function dM(s,e,t){const n=Qh(s),i=eu(e);if(n&&i)return{vertices:n,indices:i,profile:tu(n,i)};if(!t||t.shape!=="trimesh")return{};const r=Qh(fM(t,"vertices")),o=eu(pM(t,"indices"));return{vertices:r,indices:o,profile:r&&o?tu(r,o):void 0}}function Qh(s){if(s)return s instanceof Float32Array?s.slice():new Float32Array(s)}function eu(s){if(s)return s instanceof Uint32Array?s.slice():new Uint32Array(s)}function fM(s,e){const t=s[e];if(t instanceof Float32Array||Array.isArray(t))return t}function pM(s,e){const t=s[e];if(t instanceof Uint32Array||Array.isArray(t))return t}function mM(s,e){if(!s||!e)return;const t=e.length/3,n=new Array(t);for(let i=0;i<t;i++){const r=e[i*3]*3,o=e[i*3+1]*3,a=e[i*3+2]*3,l=s[r],c=s[r+1],h=s[r+2],u=s[o],d=s[o+1],f=s[o+2],m=s[a],_=s[a+1],p=s[a+2],g=u-l,M=d-c,E=f-h,y=m-l,w=_-c,A=p-h,T=M*A-E*w,x=E*y-g*A,S=g*w-M*y,F=Math.sqrt(T*T+x*x+S*S)||1,R=Math.abs(T),O=Math.abs(x),B=Math.abs(S),U=O>=R&&O>=B,H=!U&&R>=B;n[i]={normalX:T/F,normalY:x/F,normalZ:S/F,v0x:l,v0y:c,v0z:h,v1x:u,v1y:d,v1z:f,v2x:m,v2y:_,v2z:p,v0u:U?l:H?h:l,v0v:U?h:c,v1u:U?u:H?f:u,v1v:U?f:d,v2u:U?m:H?p:m,v2v:U?p:_}}return n}function tu(s,e){if(e.length===0)return{aoOpacity:1,axisPassMask:0,skyOpacityUp:1,skyOpacityX:1,skyOpacityZ:1};const t=4,n=new Uint8Array(t*t*t);for(let c=0;c<e.length;c+=3){const h=e[c]*3,u=e[c+1]*3,d=e[c+2]*3,f=Math.max(0,Math.min(1,Math.min(s[h],s[u],s[d]))),m=Math.max(0,Math.min(1,Math.min(s[h+1],s[u+1],s[d+1]))),_=Math.max(0,Math.min(1,Math.min(s[h+2],s[u+2],s[d+2]))),p=Math.max(0,Math.min(1,Math.max(s[h],s[u],s[d]))),g=Math.max(0,Math.min(1,Math.max(s[h+1],s[u+1],s[d+1]))),M=Math.max(0,Math.min(1,Math.max(s[h+2],s[u+2],s[d+2]))),E=Math.max(0,Math.min(t-1,Math.floor(f*t))),y=Math.max(0,Math.min(t-1,Math.floor(m*t))),w=Math.max(0,Math.min(t-1,Math.floor(_*t))),A=Math.max(E,Math.max(0,Math.min(t-1,Math.ceil(p*t)-1))),T=Math.max(y,Math.max(0,Math.min(t-1,Math.ceil(g*t)-1))),x=Math.max(w,Math.max(0,Math.min(t-1,Math.ceil(M*t)-1)));for(let S=w;S<=x;S++)for(let F=y;F<=T;F++)for(let R=E;R<=A;R++)n[R+t*(F+t*S)]=1}let i=0;for(let c=0;c<n.length;c++)i+=n[c];let r=0;for(let c=0;c<t;c++)for(let h=0;h<t;h++)for(let u=0;u<t;u++)if(n[h+t*(u+t*c)]!==0){r++;break}let o=0;for(let c=0;c<t;c++)for(let h=0;h<t;h++)for(let u=0;u<t;u++)if(n[u+t*(h+t*c)]!==0){o++;break}let a=0;for(let c=0;c<t;c++)for(let h=0;h<t;h++)for(let u=0;u<t;u++)if(n[h+t*(c+t*u)]!==0){a++;break}let l=0;return o<t*t&&(l|=sM),r<t*t&&(l|=rM),a<t*t&&(l|=oM),{aoOpacity:i/(t*t*t),axisPassMask:l,skyOpacityUp:r/(t*t),skyOpacityX:o/(t*t),skyOpacityZ:a/(t*t)}}const gM=15,$i=Math.ceil((gM+1)/Pt);class nu{constructor(){z(this,"_chunks",new Map);z(this,"_blockTypes",new Map);z(this,"_blockTypeList",[]);z(this,"_entities");z(this,"_lightSourcesCache",null)}load(e,t){var n;this._chunks.clear(),this._entities=e.entities?{...e.entities}:void 0,this._setBlockTypes((n=e.blockTypes)!=null&&n.length?e.blockTypes:t);for(const[i,r]of Object.entries(e.blocks??{})){const o=nM(r);o!==0&&this.setBlock(tM(i),o,iM(r))}}toJson(){const e={};for(const t of this._chunks.values())t.forEachBlock((n,i,r)=>{const o={x:t.originCoordinate.x+n.x,y:t.originCoordinate.y+n.y,z:t.originCoordinate.z+n.z};e[xo(o)]=r===0?i:{i,r}});return{blockTypes:this._blockTypeList.map(t=>({id:t.id,name:t.name,textureUri:t.textureUri,isLiquid:t.isLiquid,lightLevel:t.lightLevel,...t.trimeshIndices?{trimeshIndices:Array.from(t.trimeshIndices)}:{},...t.trimeshVertices?{trimeshVertices:Array.from(t.trimeshVertices)}:{},durability:t.durability,customColliderOptions:t.customColliderOptions,isCustom:t.isCustom,isMultiTexture:t.isMultiTexture})),blocks:e,...this._entities?{entities:this._entities}:{}}}get blockTypes(){return this._blockTypeList}get chunkIds(){return[...this._chunks.keys()]}get entities(){return this._entities?{...this._entities}:{}}toSnapshot(){return{blockTypes:this._blockTypeList.map(iu),chunks:this.chunkIds.map(e=>{const t=this._chunks.get(e);return{chunkId:e,originCoordinate:{...t.originCoordinate},blocks:t.cloneBlocks(),rotations:t.cloneRotations()}}),...this._entities?{entities:{...this._entities}}:{}}}loadSnapshot(e){this._chunks.clear(),this._blockTypes.clear(),this._blockTypeList=e.blockTypes.map(iu);for(const t of this._blockTypeList)this._blockTypes.set(t.id,t);for(const t of e.chunks)this._chunks.set(t.chunkId,new Ke(t.originCoordinate,t.blocks,t.rotations));this._entities=e.entities?{...e.entities}:void 0,this._lightSourcesCache=null}getChunkSnapshot(e){const t=this._chunks.get(e);return t?{chunkId:e,originCoordinate:{...t.originCoordinate},blocks:t.cloneBlocks(),rotations:t.cloneRotations()}:null}applyChunkSnapshot(e,t){if(!t){this._chunks.delete(e),this._lightSourcesCache=null;return}this._chunks.set(e,new Ke({...t.originCoordinate},new Uint16Array(t.blocks),new Uint8Array(t.rotations))),this._lightSourcesCache=null}setEntities(e){this._entities=e?{...e}:void 0}setEntity(e,t){this._entities||(this._entities={}),this._entities[e]=t}deleteEntity(e){this._entities&&(delete this._entities[e],Object.keys(this._entities).length===0&&(this._entities=void 0))}getChunk(e){return this._chunks.get(e)}getBlockType(e){const t=this.getBlockTypeId(e);return t===0?void 0:this._blockTypes.get(t)}getBlockTypeId(e){const t=this._chunks.get(Ke.globalCoordinateToChunkId(e));return t?t.getBlockType(Ke.globalCoordinateToLocalCoordinate(e)):0}getBlockRotation(e){const t=this._chunks.get(Ke.globalCoordinateToChunkId(e));return t?t.getBlockRotation(Ke.globalCoordinateToLocalCoordinate(e)):0}hasBlock(e){return this.getBlockTypeId(e)!==0}setBlock(e,t,n=0){const i=Ke.globalCoordinateToChunkId(e),r=Ke.globalCoordinateToLocalCoordinate(e);let o=this._chunks.get(i);o||(o=new Ke(Ke.globalCoordinateToOriginCoordinate(e)),this._chunks.set(i,o)),o.setBlock(r,t),o.setBlockRotation(r,t===0?0:n),o.isEmpty()&&this._chunks.delete(i),this._lightSourcesCache=null}deleteBlock(e){this.setBlock(e,0)}getChunksNear(e,t){const n=Ke.globalCoordinateToOriginCoordinate(e),i=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=this._chunks.get(Ke.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&i.push(l)}return i}getAllLightSources(){if(this._lightSourcesCache)return this._lightSourcesCache;const e=[];for(const t of this._chunks.values())t.forEachBlock((n,i)=>{const r=this._blockTypes.get(i);r!=null&&r.lightLevel&&e.push({position:{x:t.originCoordinate.x+n.x,y:t.originCoordinate.y+n.y,z:t.originCoordinate.z+n.z},level:r.lightLevel})});return this._lightSourcesCache=e,e}getLightSourcesNear(e,t){const n=Ke.globalCoordinateToOriginCoordinate(e),i=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=this._chunks.get(Ke.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&l.forEachBlock((c,h)=>{const u=this._blockTypes.get(h);u!=null&&u.lightLevel&&i.push({position:{x:l.originCoordinate.x+c.x,y:l.originCoordinate.y+c.y,z:l.originCoordinate.z+c.z},level:u.lightLevel})})}return i}getAffectedChunkIds(e,t,n){const i=new Set,r=Ke.globalCoordinateToChunkId(e),o=Ke.globalCoordinateToLocalCoordinate(e),a=t===0?void 0:this._blockTypes.get(t),l=n===0?void 0:this._blockTypes.get(n);if(i.add(r),(a==null?void 0:a.lightLevel)!==(l==null?void 0:l.lightLevel)){const d=Math.max((a==null?void 0:a.lightLevel)??0,(l==null?void 0:l.lightLevel)??0),f=Math.min(d,Pt);for(let m=-$i;m<=$i;m++)for(let _=-$i;_<=$i;_++)for(let p=-$i;p<=$i;p++){const g=Ke.globalCoordinateToChunkId({x:e.x+m*f,y:e.y+_*f,z:e.z+p*f});this._chunks.has(g)&&i.add(g)}}const c=[0],h=[0],u=[0];o.x===0?c.push(-1):o.x===Jt&&c.push(1),o.y===0?h.push(-1):o.y===Jt&&h.push(1),o.z===0?u.push(-1):o.z===Jt&&u.push(1);for(const d of c)for(const f of h)for(const m of u){if(d===0&&f===0&&m===0)continue;const _=Ke.globalCoordinateToChunkId({x:e.x+d,y:e.y+f,z:e.z+m});this._chunks.has(_)&&i.add(_)}return[...i]}_setBlockTypes(e){this._blockTypes.clear(),this._blockTypeList=e.map(hM);for(const t of this._blockTypeList)this._blockTypes.set(t.id,t)}}function iu(s){const e=s.trimeshIndices?new Uint32Array(s.trimeshIndices):void 0,t=s.trimeshVertices?new Float32Array(s.trimeshVertices):void 0;return{id:s.id,name:s.name,textureUri:s.textureUri,isLiquid:s.isLiquid,lightLevel:s.lightLevel,durability:s.durability,customColliderOptions:s.customColliderOptions,isCustom:s.isCustom,isMultiTexture:s.isMultiTexture,textureUris:{...s.textureUris},aoIntensity:[...s.aoIntensity],axisPassMask:s.axisPassMask,color:[...s.color],isTranslucent:s.isTranslucent,transparencyRatio:s.transparencyRatio,...s.trimeshOcclusionProfile?{trimeshOcclusionProfile:{...s.trimeshOcclusionProfile}}:{},...e?{trimeshIndices:e}:{},...s.trimeshTriangleData?{trimeshTriangleData:s.trimeshTriangleData.map(n=>({...n}))}:{},...t?{trimeshVertices:t}:{}}}const _l="worldEditorColorMap",xl="worldEditorUseColorMap",vl="worldEditorAlphaMap",Ml="worldEditorUseAlphaMap",Jr="worldEditorAlphaTest",yl="worldEditorEmissive",Sl="worldEditorEmissiveIntensity",bl="worldEditorEmissiveMap",El="worldEditorUseEmissiveMap",Tl="worldEditorFogColor",wl="worldEditorFogEnabled",Al="worldEditorFogNear",Cl="worldEditorFogFar",Bs="vWorldEditorColorMapUv",ao="vWorldEditorEmissiveMapUv",lo="vWorldEditorWorldPos",tc=Nt.basic,_M=new He,xM=tc.vertexShader.replace("#include <uv_pars_vertex>",`
      #include <uv_pars_vertex>
      varying vec2 ${Bs};
      varying vec2 ${ao};
      varying vec3 ${lo};
    `).replace("#include <uv_vertex>",`
      #include <uv_vertex>
      ${Bs} = uv;
      ${ao} = uv;
    `).replace("#include <project_vertex>",`
      vec4 worldEditorWorldPosition = vec4(transformed, 1.0);
      #ifdef USE_BATCHING
        worldEditorWorldPosition = batchingMatrix * worldEditorWorldPosition;
      #endif
      #ifdef USE_INSTANCING
        worldEditorWorldPosition = instanceMatrix * worldEditorWorldPosition;
      #endif
      worldEditorWorldPosition = modelMatrix * worldEditorWorldPosition;
      ${lo} = worldEditorWorldPosition.xyz;
      #include <project_vertex>
    `),vM=tc.fragmentShader.replace("#include <map_pars_fragment>",`
      uniform sampler2D ${_l};
      uniform bool ${xl};
      uniform sampler2D ${vl};
      uniform bool ${Ml};
      uniform float ${Jr};
      uniform vec3 ${yl};
      uniform float ${Sl};
      uniform sampler2D ${bl};
      uniform bool ${El};
      varying vec2 ${Bs};
      varying vec2 ${ao};
      varying vec3 ${lo};
      uniform vec3 ${Tl};
      uniform bool ${wl};
      uniform float ${Al};
      uniform float ${Cl};

      vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
        if (!${wl}) {
          return color;
        }

        float fogFactor = smoothstep(${Al}, ${Cl}, length(worldPos.xz - cameraPosition.xz));
        return mix(color, ${Tl}, fogFactor);
      }
    `).replace("#include <alphamap_pars_fragment>","").replace("#include <alphatest_pars_fragment>","").replace("#include <map_fragment>",`
      if (${xl}) {
        vec4 sampledDiffuseColor = texture2D(${_l}, ${Bs});
        #ifdef DECODE_VIDEO_TEXTURE
          sampledDiffuseColor = vec4(
            mix(
              pow(sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)),
              sampledDiffuseColor.rgb * 0.0773993808,
              vec3(lessThanEqual(sampledDiffuseColor.rgb, vec3(0.04045)))
            ),
            sampledDiffuseColor.a
          );
        #endif
        diffuseColor *= sampledDiffuseColor;
      }
    `).replace("#include <alphamap_fragment>",`
      if (${Ml}) {
        diffuseColor.a *= texture2D(${vl}, ${Bs}).g;
      }
    `).replace("#include <alphatest_fragment>",`
      if (${Jr} > 0.0 && diffuseColor.a < ${Jr}) {
        discard;
      }
    `).replace("#include <opaque_fragment>",`
      vec3 emissiveColor = ${yl} * ${Sl};
      if (${El}) {
        emissiveColor *= texture2D(${bl}, ${ao}).rgb;
      }
      outgoingLight += emissiveColor;
      #include <opaque_fragment>
    `).replace("#include <fog_fragment>",`
      gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, ${lo});
    `);class MM extends Wt{constructor(t){const{alphaMap:n,alphaTest:i,color:r,emissive:o,emissiveIntensity:a,emissiveMap:l,fogUniformProvider:c,map:h,...u}=t||{};super({...u,uniforms:Js.clone(tc.uniforms),vertexShader:xM,fragmentShader:vM,fog:!1,lights:!1,clipping:!0,toneMapped:!0});z(this,"_color");z(this,"_emissive");z(this,"_uvScrollSpeed",_M);z(this,"_colorMap");z(this,"_alphaMap");z(this,"_alphaTestValue");z(this,"_emissiveMap");z(this,"_emissiveIntensityValue");z(this,"_fogUniformProvider");z(this,"_shaderProcessors",[]);this.defines={...this.defines||{},USE_UV:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0]},this._color=new Se(r??16777215),this._colorMap=h??null,this._alphaMap=n??null,this._alphaTestValue=i??0,this._emissive=new Se(o??0),this._emissiveMap=l??null,this._emissiveIntensityValue=a??1,this._fogUniformProvider=c??null,this.bindUniforms()}get color(){return this._color}get customEmissive(){return this._emissive}get customEmissiveIntensity(){return this._emissiveIntensityValue}addShaderProcessor(t,n=!1){n?this._shaderProcessors.push(t):this._shaderProcessors.unshift(t),this.needsUpdate=!0}onBeforeCompile(t,n){for(const i of this._shaderProcessors)i(t,n)}customProgramCacheKey(){return`${super.customProgramCacheKey()}|processors=${this._shaderProcessors.map(t=>t.toString()).join("|")}`}bindUniforms(){const t=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms[_l]={get value(){return t._colorMap}},this.uniforms[xl]={get value(){return t._colorMap!==null}},this.uniforms[vl]={get value(){return t._alphaMap}},this.uniforms[Ml]={get value(){return t._alphaMap!==null}},this.uniforms[Jr]={get value(){return t._alphaTestValue}},this.uniforms[yl]={value:this._emissive},this.uniforms[Sl]={get value(){return t._emissiveIntensityValue}},this.uniforms[bl]={get value(){return t._emissiveMap}},this.uniforms[El]={get value(){return t._emissiveMap!==null}},this.uniforms[Tl]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.color())??t.color}},this.uniforms[wl]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.enabled())??!1}},this.uniforms[Al]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.near())??0}},this.uniforms[Cl]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.far())??0}},this.uniforms.uvScroll={value:this._uvScrollSpeed}}}function st(s,e,t){const n=t*2+1;return(e+t)*n+(s+t)}function wi(s){return Math.max(0,Math.min(1,s))}function nc(s,e,t,n){const i=s[st(e,t,n)];let r=0;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)o===0&&a===0||Math.abs(e+o)>n||Math.abs(t+a)>n||(r=Math.max(r,Math.abs(i-s[st(e+o,t+a,n)])));return r}function co(s,e,t,n,i=0){let r={x:0,z:0},o=-1/0;for(let a=-s+e;a<=s-e;a++)for(let l=-s+e;l<=s-e;l++){if(n&&Math.hypot(a-n.x,l-n.z)<i)continue;const c=t(a,l);c>o&&(o=c,r={x:a,z:l})}return r}function Rl(s,e,t,n){let i=0,r=0;for(let o=e.x-t;o<=e.x+t;o++)for(let a=e.z-t;a<=e.z+t;a++)Math.abs(o)>n||Math.abs(a)>n||(i+=s[st(o,a,n)],r+=1);return r>0?i/r:0}function Ad(s,e,t,n,i){const r=s*2+1,o=new Int16Array(r*r),a=new Float32Array(r*r);for(let c=-s;c<=s;c++)for(let h=-s;h<=s;h++){const u=Math.hypot(c,h)/Math.max(1,s),d=Math.abs(i(e+101,Math.floor(c*.4),Math.floor(h*.4))-.5)*3.2,f=i(e+211,c,h)*1.8,m=Math.round(t+d+f-Math.max(0,u-.72)*5.5);o[st(c,h,s)]=m}for(let c=-s;c<=s;c++)for(let h=-s;h<=s;h++){const u=st(c,h,s),d=nc(o,c,h,s);a[u]=o[u]*.18+Math.max(0,1-d/5)*2.6-yM(c,h,s)*1.4}const l=co(s,Math.max(4,Math.floor(s*.28)),(c,h)=>a[st(c,h,s)]);return{height:o,suitability:a,center:l}}function yM(s,e,t){return Math.max(0,Math.hypot(s,e)/Math.max(1,t)-.35)}function su(s,e,t){const n=[];e&&n.push(0);const i=-s+3,r=s-3,o=Math.max(4,Math.round(s/6));let a=i;for(;a<=r;){const l=Math.min(r,a+8);let c=a,h=1/0;for(let u=a;u<=l;u++){if(n.some(m=>Math.abs(m-u)<6))continue;const d=e?Math.abs(u)*.03:Math.abs(u)*.02,f=t(u)+d;f<h&&(h=f,c=u)}n.push(c),a=c+Math.max(6,Math.round((r-i)/o))}return n.push(i),n.push(r),[...new Set(n)].sort((l,c)=>l-c)}function ru(s,e,t,n){let i=0;for(let r=-e;r<=e;r++)i+=s[st(n?t:r,n?r:t,e)];return i}function SM(s,e,t,n){const i=`${s.x},${s.z}`,r=`${e.x},${e.z}`,o=[s],a=new Map,l=new Map([[i,0]]);for(;o.length>0;){o.sort((f,m)=>{const _=`${f.x},${f.z}`,p=`${m.x},${m.z}`,g=(l.get(_)??1/0)+Math.abs(f.x-e.x)+Math.abs(f.z-e.z),M=(l.get(p)??1/0)+Math.abs(m.x-e.x)+Math.abs(m.z-e.z);return g-M});const u=o.shift();if(!u)break;const d=`${u.x},${u.z}`;if(d===r)break;for(const[f,m]of[[1,0],[-1,0],[0,1],[0,-1]]){const _={x:u.x+f,z:u.z+m};if(Math.abs(_.x)>t||Math.abs(_.z)>t)continue;const p=`${_.x},${_.z}`,g=n[st(_.x,_.z,t)],M=(l.get(d)??1/0)+g;M>=(l.get(p)??1/0)||(l.set(p,M),a.set(p,d),o.some(E=>E.x===_.x&&E.z===_.z)||o.push(_))}}const c=[];let h=r;for(;h;){const[u,d]=h.split(",").map(Number);if(c.push({x:u,z:d}),h===i)break;h=a.get(h)}return c.reverse()}function Us(s,e,t,n,i=0){const r=s.maxX-s.minX+1,o=s.maxZ-s.minZ+1;if(r<e*2||o<t*2)return[s];if(r>o?!0:o>r?!1:n(i)>.5){const u=s.minX+e-1,d=s.maxX-e;if(u>=d)return[s];const f=u+Math.floor(n(i+1)*Math.max(1,d-u+1));return[...Us({minX:s.minX,maxX:f,minZ:s.minZ,maxZ:s.maxZ},e,t,n,i+11),...Us({minX:f+1,maxX:s.maxX,minZ:s.minZ,maxZ:s.maxZ},e,t,n,i+19)]}const l=s.minZ+t-1,c=s.maxZ-t;if(l>=c)return[s];const h=l+Math.floor(n(i+2)*Math.max(1,c-l+1));return[...Us({minX:s.minX,maxX:s.maxX,minZ:s.minZ,maxZ:h},e,t,n,i+23),...Us({minX:s.minX,maxX:s.maxX,minZ:h+1,maxZ:s.maxZ},e,t,n,i+31)]}function Il(s){return{x:Math.floor((s.minX+s.maxX)/2),z:Math.floor((s.minZ+s.maxZ)/2)}}const ca=[{id:"overworld",label:"Overworld",description:"Minecraft-like overworld with biomes, caves, rivers, trees, and a small village.",defaultSize:48,defaultHeight:12},{id:"arena",label:"Arena",description:"Circular combat bowl with walls, pillars, and a marked center.",defaultSize:18,defaultHeight:4},{id:"floating-island",label:"Floating Island",description:"Suspended landmass with a pond and a small tree.",defaultSize:16,defaultHeight:12},{id:"fortress",label:"Fortress",description:"Square stronghold with towers, gate, and a raised keep.",defaultSize:18,defaultHeight:6},{id:"downtown",label:"Downtown",description:"Dense city blocks with crossroads, towers, and a central plaza.",defaultSize:20,defaultHeight:9},{id:"castle",label:"Castle",description:"Layered castle walls with gatehouse, courtyard, and central keep.",defaultSize:22,defaultHeight:8},{id:"archipelago",label:"Archipelago",description:"Scattered islands, shallow water, and uneven shorelines.",defaultSize:22,defaultHeight:5},{id:"canyon",label:"Canyon",description:"Layered mesas cut by a winding canyon river.",defaultSize:24,defaultHeight:10},{id:"pine-valley",label:"Pine Valley",description:"Rolling hills, pine patches, and a shallow stream bed.",defaultSize:24,defaultHeight:8},{id:"kingdom",label:"Kingdom",description:"Large mixed world with macro terrain, regions, roads, downtown, castle, and forests.",defaultSize:56,defaultHeight:12}];function bM(s,e){switch(s.theme){case"overworld":return EM(s,e);case"arena":return TM(s,e);case"floating-island":return wM(s,e);case"fortress":return AM(s,e);case"downtown":return Cd(s,e);case"castle":return Rd(s,e);case"archipelago":return CM(s,e);case"canyon":return RM(s,e);case"pine-valley":return IM(s,e);case"kingdom":return LM(s,e)}}function EM(s,e){const t={},n=pt(s.size,24,96),i=pt(s.height,7,24),r=n*2+1,o=Math.max(3,Math.round(i*.35)),a=-12,l=Ln(s.seed),c=new Int16Array(r*r),h=new Float32Array(r*r),u=new Float32Array(r*r),d=new Float32Array(r*r),f=new Float32Array(r*r),m=new Float32Array(r*r),_=new Float32Array(r*r),p=new Uint8Array(r*r),g=l()*Math.PI*2,M=l()*Math.PI*2;for(let y=-n;y<=n;y++){const w=Math.sin(y*.041+g)*n*.22+Math.sin(y*.097+M)*n*.08;for(let A=-n;A<=n;A++){const T=st(y,A,n),x=Math.hypot(y,A)/Math.max(1,n),S=uu(ke(s.seed+17,Math.floor(y*.065),Math.floor(A*.065))*2-1)-Math.max(0,x-.82)*.65,F=wi(ke(s.seed+101,Math.floor(y*.085),Math.floor(A*.085))*.75+ke(s.seed+181,Math.floor(y*.19),Math.floor(A*.19))*.25),R=uu((ke(s.seed+293,Math.floor(y*.11),Math.floor(A*.11))-.5)*2),O=wi(.18+ke(s.seed+401,Math.floor(y*.08),Math.floor(A*.08))*.55+Math.max(0,1-Math.abs(A-w)/18)*.24),B=wi(.62+ke(s.seed+503,Math.floor(y*.07),Math.floor(A*.07))*.36-Math.max(0,x-.4)*.12),U=Math.abs(A-w),H=Math.pow(Math.max(0,1-Math.abs(R)),1.35),V=Math.max(0,R)*8.5+H*4.5,k=F*8,Q=S<-.22?o-6+S*6:i+S*14,J=Math.max(0,5.5-U)*(.45+(1-F)*.5),oe=Math.round(Q+V-k-J);c[T]=oe,h[T]=O,u[T]=B,d[T]=S,f[T]=F,m[T]=R,_[T]=U,p[T]=PM(oe,o,S,F,O,B,U)}}for(let y=-n;y<=n;y++)for(let w=-n;w<=n;w++){const A=st(y,w,n),T=c[A],x=p[A];DM(t,y,w,T,o,a,x,e)}NM(t,n,a,c,o,s.seed);for(let y=-n;y<=n;y++)for(let w=-n;w<=n;w++){const A=st(y,w,n),T=p[A],x=cc(t,y,w);if(!(x<=o||T===sc||T===ic)){if(T===zs||T===Vs||T===ks){const S=T===zs?.042:T===Vs?.036:.012,F=ke(s.seed+701,y,w);F<S&&OM(t,y,w,x+1,2)?T===Vs?vo(t,{x:y,y:x+1,z:w},4+Math.floor(ke(s.seed+733,y,w)*4),e.wood,e.leaves):UM(t,{x:y,y:x+1,z:w},4+Math.floor(ke(s.seed+727,y,w)*3),e.wood,e.leaves):T===ks&&F>.93&&j(t,{x:y,y:x+1,z:w},e.leaves)}T===lc&&ke(s.seed+809,y,w)>.958&&FM(t,{x:y,y:x+1,z:w},1+Math.floor(ke(s.seed+877,y,w)*2),e.stone,e.accent),(T===rc||T===oc)&&ke(s.seed+919,y,w)>.972&&j(t,{x:y,y:x+1,z:w},e.wood)}}const E=co(n,Math.max(10,Math.floor(n*.22)),(y,w)=>{const A=st(y,w,n),T=p[A];return T!==ks&&T!==zs?-1/0:2.8-nc(c,y,w,n)*1.2+Math.max(0,1-_[A]/18)*.7+f[A]*.5+d[A]*.2});return BM(t,E,Math.max(o+1,Math.round(Rl(c,E,3,n))),e,s.seed),{blocks:t,bounds:{min:{x:-n,y:a,z:-n},max:{x:n,y:i+28,z:n}}}}function TM(s,e){const t={},n=pt(s.size,8,40),i=pt(s.height,3,10),r=Ln(s.seed),o=Math.max(2,Math.floor(n*.18)),a=Math.floor(r()*4);for(let c=-n-3;c<=n+3;c++)for(let h=-n-3;h<=n+3;h++){const u=Math.hypot(c,h),d=(ke(s.seed,c,h)-.5)*1.8,f=-Math.max(0,Math.round((1-Math.min(1,u/(n*.74)))*o));if(u<=n+d){for(let _=-2;_<f;_++)j(t,{x:c,y:_,z:h},e.stone);j(t,{x:c,y:f-1,z:h},e.stone),j(t,{x:c,y:f,z:h},u<n*.68?e.sand:e.stone)}else u<=n+3+d*.5&&r()>.42&&j(t,{x:c,y:-1,z:h},e.grass);const m=a===0&&h>=n-1&&Math.abs(c)<=2||a===1&&c>=n-1&&Math.abs(h)<=2||a===2&&h<=-n+1&&Math.abs(c)<=2||a===3&&c<=-n+1&&Math.abs(h)<=2;if(u>=n-1.4&&u<=n+.8+d*.25&&!m)for(let _=1;_<=i;_++){const p=_===i?e.accent:e.wall;j(t,{x:c,y:_,z:h},p)}(Math.abs(c)<=1||Math.abs(h)<=1)&&u<n-2&&j(t,{x:c,y:f,z:h},e.accent),u<n*.2&&j(t,{x:c,y:1,z:h},e.accent)}const l=Math.floor(n*.55);for(const[c,h]of[[-l,-l],[-l,l],[l,-l],[l,l]])li(t,{x:c,y:1,z:h},i+2,e.wall,e.accent);return{blocks:t,bounds:{min:{x:-n-3,y:-2,z:-n-3},max:{x:n+3,y:i+2,z:n+3}}}}function wM(s,e){const t={},n=pt(s.size,10,36),i=pt(s.height,6,24),r=Math.max(5,Math.floor(n*.45)),o=Ln(s.seed),a=new Map;for(let f=-n;f<=n;f++)for(let m=-n;m<=n;m++){const _=Math.hypot(f/n,m/n);if(_>1.02)continue;const p=(ke(s.seed+41,f,m)-.5)*1.8+(ke(s.seed+83,f*2,m*2)-.5)*.8,g=Math.round(i+r-1-_*2.8+p),M=Math.max(4,Math.round((1.08-_)*r*1.75+ke(s.seed+149,f,m)*3)),E=g-M;a.set(`${f},${m}`,g);for(let y=E;y<=g;y++){const w=g-y,A=w===0?e.grass:w<=2?e.wall:e.stone;j(t,{x:f,y,z:m},A)}}const l=Math.max(2,Math.floor(n*.16));for(let f=-l;f<=l;f++)for(let m=-l;m<=l;m++){if(f*f+m*m>l*l)continue;const _=a.get(`${f},${m}`)??i+r-1;j(t,{x:f,y:_,z:m},e.water)}const c=Math.max(4,Math.floor(n*.28)),h={x:-Math.floor(n*.28),y:(a.get(`${-Math.floor(n*.28)},${Math.floor(n*.12)}`)??i+r-1)+1,z:Math.floor(n*.12)};for(let f=0;f<c;f++)j(t,{x:h.x,y:h.y+f,z:h.z},e.wood);const u={x:h.x,y:h.y+c,z:h.z};for(let f=-3;f<=3;f++)for(let m=-2;m<=2;m++)for(let _=-3;_<=3;_++)f*f+m*m*1.4+_*_>9||j(t,{x:u.x+f,y:u.y+m,z:u.z+_},e.leaves);const d=2+Math.floor(o()*3);for(let f=0;f<d;f++){const m=Math.round((o()*2-1)*n*.68),_=Math.round((o()*2-1)*n*.68),p=(a.get(`${m},${_}`)??i)-Math.max(5,Math.floor(r*.8)),g=3+Math.floor(o()*4);for(let M=0;M<g;M++)j(t,{x:m,y:p-M,z:_},M===g-1?e.accent:e.wall)}return{blocks:t,bounds:{min:{x:-n,y:i-r,z:-n},max:{x:n,y:i+r+c+2,z:n}}}}function AM(s,e){const t={},n=pt(s.size,10,40),i=pt(s.height,4,12),r=Ln(s.seed),o=Math.max(4,Math.floor(n*.35)),a=2,l=n-4,c=Math.floor(r()*4),h=Ad(n+2,s.seed,0,!0,ke),u={x:pt(h.center.x,-2,2),z:pt(h.center.z,-2,2)};for(let d=-n-2;d<=n+2;d++)for(let f=-n-2;f<=n+2;f++){const m=d+u.x,_=f+u.z,p=st(m,_,n+2),g=Math.max(0,h.height[p]),M=Math.abs(d)<=n&&Math.abs(f)<=n;for(let w=-1;w<g;w++)j(t,{x:m,y:w,z:_},e.stone);M?j(t,{x:m,y:g,z:_},Math.abs(d)<=l&&Math.abs(f)<=l?Math.max(Math.abs(d),Math.abs(f))<l*.4?e.sand:e.grass:e.wall):Math.abs(d)<=n+2&&Math.abs(f)<=n+2&&j(t,{x:m,y:g,z:_},e.stone);const E=Math.abs(d)===n||Math.abs(f)===n,y=Ll(c,n,d,f,2);if(E&&!y)for(let w=1;w<=i;w++)j(t,{x:m,y:g+w,z:_},w===i?e.accent:e.wall)}for(const[d,f]of[[-n,-n],[-n,n],[n,-n],[n,n]])for(let m=-a;m<=a;m++)for(let _=-a;_<=a;_++)m*m+_*_>(a+.4)*(a+.4)||li(t,{x:u.x+d+m,y:1+Math.max(0,h.height[st(u.x+d+m,u.z+f+_,n+2)]),z:u.z+f+_},i+3,e.wall,e.accent);for(let d=-o;d<=o;d++)for(let f=-o;f<=o;f++){const m=u.x+d,_=u.z+f,p=1+Math.max(0,h.height[st(m,_,n+2)]);if(j(t,{x:m,y:p,z:_},e.stone),Math.abs(d)===o||Math.abs(f)===o)for(let M=2;M<=i+1;M++)j(t,{x:m,y:p+M-1,z:_},M===i+1?e.accent:e.wall)}return Pl(t,u,c,n,2,3),XM(t,u,l,c,e),YM(t,u,c,n,e),{blocks:t,bounds:{min:{x:-n-2,y:-1,z:-n-2},max:{x:n+2,y:i+3,z:n+2}}}}function Cd(s,e){const t={},n=pt(s.size,12,42),i=pt(s.height,5,18),r=Ln(s.seed),o=1+Math.floor(r()*2),a=o+1,l=n*2+1,c=new Float32Array(l*l);for(let _=-n;_<=n;_++)for(let p=-n;p<=n;p++){const g=Math.hypot(_,p)/n,M=Math.abs(_)*.02+Math.abs(p)*.02,E=Math.abs(ke(s.seed+201,Math.floor(_*.28),Math.floor(p*.28))-.5)*1.2,y=ke(s.seed+71,_,p)*.8;c[st(_,p,n)]=1+M+E+y+Math.max(0,g-.75)*3.2}const h=su(n,!0,_=>ru(c,n,_,!0)),u=su(n,!1,_=>ru(c,n,_,!1)),d=h[Math.floor(h.length/2)]??0,f=u[Math.floor(u.length/2)]??0;for(let _=-n;_<=n;_++)for(let p=-n;p<=n;p++)j(t,{x:_,y:-1,z:p},e.stone),j(t,{x:_,y:0,z:p},e.sand);for(const _ of h)js(t,{x:_,z:-n},{x:_,z:n},_===d?a:o,_===d?e.accent:e.wall,e.stone);for(const _ of u)js(t,{x:-n,z:_},{x:n,z:_},_===f?a:o,_===f?e.accent:e.wall,e.stone);const m=ey(d,f,h,u,r);for(const[_,p]of m){const g=SM(_,p,n,c);ty(t,g,o,e.wall,e.stone)}for(const _ of h)for(const p of u){const g=(_===d||p===f)&&r()>.45?2+Math.floor(r()*2):1;for(let M=-g;M<=g;M++)for(let E=-g;E<=g;E++)Math.abs(M)+Math.abs(E)>g+1||j(t,{x:_+M,y:0,z:p+E},e.accent)}for(let _=0;_<h.length-1;_++)for(let p=0;p<u.length-1;p++){const g=h[_]===d?a:o,M=h[_+1]===d?a:o,E=u[p]===f?a:o,y=u[p+1]===f?a:o,w=h[_]+g+2,A=h[_+1]-M-2,T=u[p]+E+2,x=u[p+1]-y-2;if(A-w<4||x-T<4)continue;const S={minX:w,maxX:A,minZ:T,maxZ:x},F=Il(S),R=ZM(F,d,f,s.seed,m),O=R==="civic"?8:R==="market"?5:4,B=Us(S,O,O,U=>ke(s.seed+1403+U,F.x,F.z));for(const U of B){if(JM(t,U,R,e),R==="green"&&U.maxX-U.minX>4&&U.maxZ-U.minZ>4){const H=Il(U);vo(t,{x:H.x,y:1,z:H.z},4+Math.floor(r()*3),e.wood,e.leaves);continue}QM(t,U,R,i,e,r,h,u)}}return{blocks:t,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+2,z:n}}}}function Rd(s,e){const t={},n=pt(s.size,14,44),i=pt(s.height,5,16),r=Ln(s.seed),o=Math.max(6,n-(4+Math.floor(r()*4))),a=Math.max(4,Math.floor(n*(.22+r()*.14))),l=n+2+Math.floor(r()*3),c=Math.floor(r()*4),h=Math.max(o+2,n-3),u=Ad(l,s.seed+57,0,!0,ke),d={x:pt(u.center.x,-2,2),z:pt(u.center.z,-2,2)};for(let f=-l;f<=l;f++)for(let m=-l;m<=l;m++){const _=f+d.x,p=m+d.z,g=Math.max(0,u.height[st(_,p,l)]);if(j(t,{x:_,y:-2,z:p},e.stone),Math.abs(f)<=l&&Math.abs(m)<=l&&j(t,{x:_,y:-1,z:p},Math.abs(f)===l||Math.abs(m)===l?e.water:e.stone),Math.abs(f)<=n&&Math.abs(m)<=n){const M=Math.abs(f)<=o&&Math.abs(m)<=o,E=Math.abs(f)<=h&&Math.abs(m)<=h;for(let y=0;y<g;y++)j(t,{x:_,y,z:p},e.stone);j(t,{x:_,y:g,z:p},M?e.grass:E?e.sand:e.wall)}}for(let f=-n;f<=n;f++)for(let m=-n;m<=n;m++){const _=Math.abs(f)===n||Math.abs(m)===n,p=Math.abs(f)===o||Math.abs(m)===o,g=Ll(c,n,f,m,2),M=f+d.x,E=m+d.z,y=Math.max(0,u.height[st(M,E,l)]);if(_&&!g)for(let w=1;w<=i;w++)j(t,{x:M,y:y+w,z:E},w===i?e.accent:e.wall);if(p&&!Ll(c,o,f,m,1))for(let w=1;w<=i-1;w++)j(t,{x:M,y:y+w,z:E},w===i-1?e.accent:e.wall)}for(const[f,m]of[[-n,-n],[-n,n],[n,-n],[n,n],[-o,-o],[-o,o],[o,-o],[o,o]])for(let _=-1;_<=1;_++)for(let p=-1;p<=1;p++){const g=d.x+f+_,M=d.z+m+p,E=1+Math.max(0,u.height[st(g,M,l)]);li(t,{x:g,y:E,z:M},i+3,e.wall,e.accent)}for(let f=-a;f<=a;f++)for(let m=-a;m<=a;m++){const _=d.x+f,p=d.z+m,g=1+Math.max(0,u.height[st(_,p,l)]);j(t,{x:_,y:g,z:p},e.stone);for(let M=2;M<=i+3;M++)!(Math.abs(f)===a||Math.abs(m)===a)&&M!==i+3||j(t,{x:_,y:g+M-1,z:p},M===i+3?e.accent:e.wall)}return jM(t,d,c,o,l,e),Pl(t,d,c,n,2,3),Pl(t,d,c,o,1,3),KM(t,d,o,a,c,e),{blocks:t,bounds:{min:{x:-l,y:-2,z:-l},max:{x:l,y:i+3,z:l}}}}function CM(s,e){const t={},n=pt(s.size,14,44),i=pt(s.height,3,10),r=Ln(s.seed),o=4+Math.floor(r()*4),a=Array.from({length:o},()=>({x:Math.round((r()*2-1)*n*.72),z:Math.round((r()*2-1)*n*.72),radius:4+Math.floor(r()*Math.max(4,n*.18)),height:i+Math.floor(r()*3)}));for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){j(t,{x:l,y:-2,z:c},e.stone),j(t,{x:l,y:-1,z:c},e.water);let h=0,u=0,d=0;for(const _ of a){const g=1-Math.hypot(l-_.x,c-_.z)/_.radius;d+=Math.max(0,g),!(g<=h)&&(h=g,u=_.height)}if(h<=0)continue;const f=ke(s.seed+211,Math.floor(l*.5),Math.floor(c*.5)),m=Math.max(1,Math.round(h*u+Math.max(0,d-1.2)+f*1.4));for(let _=0;_<m;_++){const p=_===m-1?h>.74?e.grass:e.sand:_>=m-2?e.wall:e.stone;j(t,{x:l,y:_,z:c},p)}h<.38&&d>.7&&j(t,{x:l,y:0,z:c},e.sand),h>.72&&ke(s.seed*3+17,l,c)>.78&&VM(t,{x:l,y:m,z:c},3+Math.floor(r()*2),e.wood,e.leaves)}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+5,z:n}}}}function RM(s,e){const t={},n=pt(s.size,16,48),i=pt(s.height,6,18),r=s.seed*.0013;for(let o=-n;o<=n;o++){const a=Math.sin(o*.18+r)*n*.28+Math.sin(o*.07-r*1.7)*n*.14;for(let l=-n;l<=n;l++){const c=Math.abs(l-a),h=ke(s.seed+91,o,l)*2.2+ke(s.seed+313,o*2,l*2)*1.2,u=Math.abs(ke(s.seed+517,Math.floor(o*.33),Math.floor(l*.33))-.5)*3.4,d=Math.max(2,Math.round(i+h+u)),f=Math.max(0,Math.round((8-c)*.9)),m=d-f;for(let _=-2;_<=m;_++){let p=e.stone;_===m&&c<2.5?p=e.water:_===m?p=m>i+1?e.sand:e.accent:_>=m-1?p=e.wall:(m-_)%4===0&&c>4&&(p=e.accent),j(t,{x:o,y:_,z:l},p)}c>8&&m>i+4&&ke(s.seed+887,o,l)>.91&&li(t,{x:o,y:m+1,z:l},2+Math.round(ke(s.seed+991,o,l)*3),e.wall,e.accent)}}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+4,z:n}}}}function IM(s,e){const t={},n=pt(s.size,16,48),i=pt(s.height,5,16),r=Ln(s.seed);for(let o=-n;o<=n;o++){const a=Math.sin(o*.15+s.seed*.0021)*n*.18,l=Math.sin(o*.09-s.seed*.0014)*n*.08+n*.22;for(let c=-n;c<=n;c++){const h=ke(s.seed+19,o,c)*2.8+ke(s.seed+211,o*2,c*2)*1.3,u=Math.round(i*.55+h),d=Math.max(0,Math.round(4-Math.abs(c-a)))+Math.max(0,Math.round(2-Math.abs(c-l))),f=Math.max(1,u-d),m=ke(s.seed+433,Math.floor(o*.4),Math.floor(c*.4));for(let _=-1;_<=f;_++){const g=_===f?Math.abs(c-a)<1.6||Math.abs(c-l)<1.1?e.water:m>.78?e.sand:e.grass:_>=f-2?e.wall:e.stone;j(t,{x:o,y:_,z:c},g)}if(f>=2&&Math.abs(c-a)>3){const _=.02+ke(s.seed+701,o,c)*.06+Math.max(0,m-.7)*.04;r()<_&&vo(t,{x:o,y:f+1,z:c},4+Math.floor(r()*4),e.wood,e.leaves)}}}return{blocks:t,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+8,z:n}}}}function LM(s,e){const t={},n=pt(s.size,28,96),i=pt(s.height,8,24),r=Ln(s.seed),o=Math.max(18,Math.round(n*.38)),a=Math.max(20,Math.round(n*.34)),l=n*2+1,c=new Int16Array(l*l),h=new Float32Array(l*l),u=new Float32Array(l*l),d=new Float32Array(l*l),f=new Float32Array(l*l),m=r()*Math.PI*2,_=r()*Math.PI*2;for(let T=-n;T<=n;T++){const x=Math.sin(T*.045+m)*n*.24+Math.sin(T*.11+_)*n*.07;for(let S=-n;S<=n;S++){const F=Math.hypot(T,S)/n,R=(ke(s.seed+13,Math.floor(T*.18),Math.floor(S*.18))-.5)*10.5,O=ke(s.seed+73,T,S)*3.1+ke(s.seed+193,T*2,S*2)*1.9,B=Math.pow(Math.abs(ke(s.seed+311,T,S)-.5)*2,1.35)*8.4,U=Math.max(0,F-.74)*12,H=Math.abs(S-x),V=Math.max(0,8.4-H)*1.05,k=Math.max(-2,Math.round(i+R+O+B-U-V)),Q=wi(.26+ke(s.seed+401,Math.floor(T*.33),Math.floor(S*.33))*.28+Math.max(0,1-H/14)*.48-Math.max(0,F-.68)*.25),J=wi(.58-k/Math.max(10,i+12)*.28+ke(s.seed+557,Math.floor(T*.26),Math.floor(S*.26))*.24);c[st(T,S,n)]=k,h[st(T,S,n)]=Q,u[st(T,S,n)]=J;for(let oe=-2;oe<=k;oe++){let fe=e.stone;oe===k&&k<=0?fe=e.water:oe===k?fe=Q>.58?e.grass:J>.66?e.sand:e.grass:oe>=k-2&&(fe=Q>.58?e.wall:e.stone),j(t,{x:T,y:oe,z:S},fe)}}}for(let T=-n;T<=n;T++)for(let x=-n;x<=n;x++){const S=st(T,x,n),F=nc(c,T,x,n);d[S]=F;const R=lu(T,x,n,m,_);f[S]=wi(.62-Math.min(1,F/6)*.46-Math.max(0,(c[S]-i-3)/18)*.24+(1-Math.min(1,R/28))*.2+(1-Math.min(1,Math.hypot(T,x)/n))*.12)}const p=co(n,Math.max(10,Math.floor(o*.42)),(T,x)=>{const S=st(T,x,n);return f[S]+h[S]*.08}),g=co(n,Math.max(10,Math.floor(a*.38)),(T,x)=>{const S=st(T,x,n),F=Math.hypot(T-p.x,x-p.z),R=Math.abs(F-n*.34);return wi(.18+Math.min(1,(c[S]-i+4)/16)*.42+Math.max(0,1-d[S]/5.2)*.26+Math.max(0,1-R/(n*.22))*.18-Math.max(0,h[S]-.72)*.18)},p,Math.max(18,Math.floor(n*.28))),M=Math.max(1,Math.round(Rl(c,p,5,n))),E=Math.max(M+3,Math.round(Rl(c,g,5,n))+2);cu(t,p,o+6,M,e.stone,e.sand),cu(t,g,a+8,E,e.stone,e.grass);const y=Cd({seed:s.seed*17+5,size:o,height:Math.max(8,Math.round(i*.8))},e);Ci(t,y.blocks,{x:p.x,y:M,z:p.z});const w=Rd({seed:s.seed*29+7,size:a,height:Math.max(7,Math.round(i*.75))},e);Ci(t,w.blocks,{x:g.x,y:E,z:g.z});const A=ny(p,g,n,d,h,c);js(t,p,A,1,e.accent,e.stone),js(t,A,g,1,e.accent,e.stone);for(let T=-n;T<=n;T++)for(let x=-n;x<=n;x++){const S=Math.hypot(T-p.x,x-p.z)<o*.72,F=Math.hypot(T-g.x,x-g.z)<a*.75,R=Math.min(Dl({x:T,z:x},p,A),Dl({x:T,z:x},A,g))<3.2;if(S||F||R)continue;const O=st(T,x,n),B=c[O];if(B<1)continue;const U=h[O],H=u[O],V=d[O],k=lu(T,x,n,m,_);if(U>.43&&U<.72&&H>.42&&V<2.4&&k<18&&Math.hypot(T-p.x,x-p.z)<o*1.45){iy(t,{x:T,y:B,z:x},e,s.seed);continue}const J=.014+Math.max(0,U-.42)*.08+ke(s.seed+809,T,x)*.03;U>.5&&V<4.8&&r()<J?vo(t,{x:T,y:B+1,z:x},4+Math.floor(r()*4),e.wood,e.leaves):B>i+8&&V<3.8&&ke(s.seed+991,T,x)>.84&&li(t,{x:T,y:B+1,z:x},2+Math.floor(r()*3),e.wall,e.accent)}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+24,z:n}}}}const ic=0,sc=1,rc=2,oc=3,ks=4,zs=5,Vs=6,ac=7,lc=8;function PM(s,e,t,n,i,r,o){return s<=e-4||t<-.42?ic:s<=e||t<-.16?sc:o<2.2&&s<=e+4?oc:s<=e+2?rc:s>=e+14&&n<.4?lc:r>.74&&i<.38?ac:r<.4&&i>.46?Vs:i>.52?zs:ks}function DM(s,e,t,n,i,r,o,a){const l=Math.max(n,i);for(let c=r;c<=l;c++){const h=n-c;let u=a.stone;c>n?u=a.water:h===0?u=ou(o,n,i,!0,a):h<=3?u=ou(o,n,i,!1,a):o===ac&&h<=6&&(u=a.sand),j(s,{x:e,y:c,z:t},u)}}function ou(s,e,t,n,i){switch(s){case ic:case sc:return n?i.sand:i.stone;case rc:case oc:return n?i.sand:i.wall;case ac:return i.sand;case Vs:return n?i.accent:i.wall;case lc:return n&&e>t+18?i.accent:i.stone;case zs:case ks:default:return n?i.grass:i.wall}}function NM(s,e,t,n,i,r){for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){const l=n[st(o,a,e)],c=Math.min(l-3,i+18);for(let h=t+2;h<=c;h++){const u=ha(r+3001,o*.18,h*.22,a*.18)+ha(r+3119,o*.09,h*.11,a*.09)*.7,d=Math.abs(ha(r+3251,o*.07,h*.1,a*.07)-.5),f=h<i-6?.96:1.08;(u>f||d<.04)&&j(s,{x:o,y:h,z:a},0)}}}function UM(s,e,t,n,i){for(let o=0;o<t;o++)j(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t;for(let o=-2;o<=2;o++)for(let a=-2;a<=1;a++)for(let l=-2;l<=2;l++)o*o+l*l+a*a*1.5>7.5||j(s,{x:e.x+o,y:r+a,z:e.z+l},i)}function FM(s,e,t,n,i){for(let r=-t;r<=t;r++)for(let o=0;o<=t;o++)for(let a=-t;a<=t;a++)r*r+o*o*1.3+a*a>(t+.2)*(t+.2)||j(s,{x:e.x+r,y:e.y+o,z:e.z+a},o===t?i:n)}function OM(s,e,t,n,i){for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)for(let a=0;a<=6;a++)if(s[xo({x:e+r,y:n+a,z:t+o})])return!1;return!0}function BM(s,e,t,n,i){const r=Ln(i+4109),o=[{x:e.x-8,z:e.z},{x:e.x+8,z:e.z},{x:e.x,z:e.z-8},{x:e.x,z:e.z+8},e];for(const l of o)js(s,e,l,1,n.sand,n.wall);const a=[{x:-6,z:-4},{x:6,z:-4},{x:-6,z:4},{x:6,z:4}];for(const l of a)kM(s,{x:e.x+l.x,y:t,z:e.z+l.z},3+Math.floor(r()*2),n);zM(s,{x:e.x,y:t,z:e.z},n)}function kM(s,e,t,n){const i=e.x-t,r=e.x+t,o=e.z-t,a=e.z+t;for(let l=i;l<=r;l++)for(let c=o;c<=a;c++){j(s,{x:l,y:e.y,z:c},n.wall);for(let h=1;h<=3;h++)(l===i||l===r||c===o||c===a)&&j(s,{x:l,y:e.y+h,z:c},n.wood);j(s,{x:l,y:e.y+4,z:c},n.accent)}for(let l=e.y+1;l<=e.y+2;l++)j(s,{x:e.x,y:l,z:o},0)}function zM(s,e,t){for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)j(s,{x:e.x+n,y:e.y,z:e.z+i},t.wall),j(s,{x:e.x+n,y:e.y-1,z:e.z+i},n===0&&i===0?t.water:t.stone);for(const[n,i]of[[-2,-2],[2,-2],[-2,2],[2,2]])li(s,{x:e.x+n,y:e.y+1,z:e.z+i},3,t.wood,t.wood);for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)(Math.abs(n)===2||Math.abs(i)===2)&&j(s,{x:e.x+n,y:e.y+4,z:e.z+i},t.accent)}function li(s,e,t,n,i){for(let r=0;r<t;r++)j(s,{x:e.x,y:e.y+r,z:e.z},r===t-1?i:n)}function VM(s,e,t,n,i){for(let o=0;o<t;o++)j(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t;for(const[o,a]of[[2,0],[-2,0],[0,2],[0,-2],[1,1],[-1,1],[1,-1],[-1,-1]])j(s,{x:e.x+o,y:r,z:e.z+a},i);j(s,{x:e.x,y:r+1,z:e.z},i)}function vo(s,e,t,n,i){for(let o=0;o<t;o++)j(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t-1;for(let o=0;o<4;o++){const a=o<2?2:1;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++)Math.abs(l)+Math.abs(c)>a+1||j(s,{x:e.x+l,y:r-o,z:e.z+c},i)}j(s,{x:e.x,y:r+1,z:e.z},i)}function Ll(s,e,t,n,i){switch(s){case 0:return n===e&&Math.abs(t)<=i;case 1:return t===e&&Math.abs(n)<=i;case 2:return n===-e&&Math.abs(t)<=i;case 3:return t===-e&&Math.abs(n)<=i;default:return!1}}function HM(s,e,t,n,i){for(let r=t+1;r<=n;r++)for(let o=-1;o<=1;o++)switch(e){case 0:j(s,{x:o,y:-1,z:r},i.stone),j(s,{x:o,y:0,z:r},i.accent);break;case 1:j(s,{x:r,y:-1,z:o},i.stone),j(s,{x:r,y:0,z:o},i.accent);break;case 2:j(s,{x:o,y:-1,z:-r},i.stone),j(s,{x:o,y:0,z:-r},i.accent);break;case 3:j(s,{x:-r,y:-1,z:o},i.stone),j(s,{x:-r,y:0,z:o},i.accent);break}}function GM(s,e,t,n,i){for(let r=1;r<=i;r++)for(let o=-n;o<=n;o++)switch(e){case 0:j(s,{x:o,y:r,z:t},0);break;case 1:j(s,{x:t,y:r,z:o},0);break;case 2:j(s,{x:o,y:r,z:-t},0);break;case 3:j(s,{x:-t,y:r,z:o},0);break}}function WM(s,e,t,n){for(let r=-e;r<=e;r++)j(s,{x:0,y:0,z:r},n.accent),j(s,{x:r,y:0,z:0},n.accent);const i=e+4;for(let r=0;r<=i;r++)switch(t){case 0:j(s,{x:0,y:0,z:r},n.accent);break;case 1:j(s,{x:r,y:0,z:0},n.accent);break;case 2:j(s,{x:0,y:0,z:-r},n.accent);break;case 3:j(s,{x:-r,y:0,z:0},n.accent);break}}function XM(s,e,t,n,i){const r={};WM(r,t,n,i),Ci(s,r,{x:e.x,y:0,z:e.z})}function qM(s,e,t,n){for(let i=t;i<=t+5;i++)for(let r=-2;r<=2;r++)switch(e){case 0:j(s,{x:r,y:-1,z:i},n.stone),j(s,{x:r,y:0,z:i},n.accent);break;case 1:j(s,{x:i,y:-1,z:r},n.stone),j(s,{x:i,y:0,z:r},n.accent);break;case 2:j(s,{x:r,y:-1,z:-i},n.stone),j(s,{x:r,y:0,z:-i},n.accent);break;case 3:j(s,{x:-i,y:-1,z:r},n.stone),j(s,{x:-i,y:0,z:r},n.accent);break}}function YM(s,e,t,n,i){const r={};qM(r,t,n,i),Ci(s,r,{x:e.x,y:0,z:e.z})}function $M(s,e,t,n,i){for(let r=-e+1;r<=e-1;r++)j(s,{x:0,y:0,z:r},i.accent),j(s,{x:r,y:0,z:0},i.accent);for(let r=-t-1;r<=t+1;r++)j(s,{x:r,y:0,z:-t-1},i.accent),j(s,{x:r,y:0,z:t+1},i.accent);for(let r=-t-1;r<=t+1;r++)j(s,{x:-t-1,y:0,z:r},i.accent),j(s,{x:t+1,y:0,z:r},i.accent);for(let r=t+1;r<=e;r++)switch(n){case 0:j(s,{x:0,y:0,z:r},i.accent);break;case 1:j(s,{x:r,y:0,z:0},i.accent);break;case 2:j(s,{x:0,y:0,z:-r},i.accent);break;case 3:j(s,{x:-r,y:0,z:0},i.accent);break}}function KM(s,e,t,n,i,r){const o={};$M(o,t,n,i,r),Ci(s,o,{x:e.x,y:0,z:e.z})}function Pl(s,e,t,n,i,r){const o={};GM(o,t,n,i,r),Ci(s,o,{x:e.x,y:0,z:e.z})}function jM(s,e,t,n,i,r){const o={};HM(o,t,n,i,r),Ci(s,o,{x:e.x,y:0,z:e.z})}function ZM(s,e,t,n,i){const r=Math.abs(s.x-e)+Math.abs(s.z-t),o=Math.min(...i.map(([l,c])=>Dl(s,l,c))),a=ke(n+1701,s.x,s.z);return r<6||o<3.2?"civic":a>.84&&o>5?"green":o<7||a>.46?"market":"residential"}function JM(s,e,t,n){for(let i=e.minX;i<=e.maxX;i++)for(let r=e.minZ;r<=e.maxZ;r++)j(s,{x:i,y:0,z:r},t==="green"?n.grass:t==="market"?n.sand:n.stone)}function QM(s,e,t,n,i,r,o,a){const l=Il(e),c=e.maxX-e.minX+1,h=e.maxZ-e.minZ+1,u=t==="civic"?1:0,d=e.minX+u,f=e.maxX-u,m=e.minZ+u,_=e.maxZ-u;if(f-d<3||_-m<3)return;const p=t==="civic"?n+1:t==="market"?Math.max(4,n-2):Math.max(4,n-3),g=Math.max(4,p+Math.floor(r()*4)-1),M=Math.max(3,g),E=t==="civic"?i.accent:t==="market"?i.stone:i.wall;for(let x=d;x<=f;x++)for(let S=m;S<=_;S++)for(let F=1;F<=M;F++)!(x===d||x===f||S===m||S===_)&&F!==M||j(s,{x,y:F,z:S},F===M?E:i.wall);const y=Math.abs(l.x-au(l.x,o)),w=Math.abs(l.z-au(l.z,a));let A=l.x,T=l.z;w<=y?T=m:A=l.x<0?f:d;for(let x=1;x<=2;x++)j(s,{x:A,y:x,z:T},0);(t==="civic"||r()>.58)&&(li(s,{x:d,y:M+1,z:m},2,i.accent,i.accent),li(s,{x:f,y:M+1,z:_},2,i.accent,i.accent)),t==="market"&&c>4&&h>4&&(j(s,{x:l.x,y:1,z:l.z},i.wood),j(s,{x:l.x,y:2,z:l.z},i.leaves))}function au(s,e){let t=e[0]??0,n=Math.abs(t-s);for(const i of e){const r=Math.abs(i-s);r<n&&(n=r,t=i)}return t}function ey(s,e,t,n,i){const r=[],o=t[Math.max(0,Math.floor(t.length*.25))]??s,a=t[Math.min(t.length-1,Math.floor(t.length*.75))]??s,l=n[Math.max(0,Math.floor(n.length*.25))]??e,c=n[Math.min(n.length-1,Math.floor(n.length*.75))]??e;return r.push([{x:o,z:e},{x:s,z:l}]),r.push([{x:s,z:c},{x:a,z:e}]),i()>.45&&r.push([{x:o,z:l},{x:a,z:c}]),i()>.55&&r.push([{x:o,z:c},{x:a,z:l}]),r}function ty(s,e,t,n,i){for(const r of e){const o=Math.max(0,cc(s,r.x,r.z));for(let a=-t;a<=t;a++)for(let l=-t;l<=t;l++){const c=r.x+a,h=r.z+l;for(let u=-2;u<o;u++)j(s,{x:c,y:u,z:h},i);j(s,{x:c,y:o,z:h},n),hc(s,c,h,o+1,o+8)}}}function lu(s,e,t,n,i){const r=Math.sin(s*.045+n)*t*.24+Math.sin(s*.11+i)*t*.07;return Math.abs(e-r)}function ny(s,e,t,n,i,r){const o={x:Math.round((s.x+e.x)*.5),z:Math.round((s.z+e.z)*.5)};let a=o,l=1/0;for(let c=o.x-12;c<=o.x+12;c++)for(let h=o.z-12;h<=o.z+12;h++){if(Math.abs(c)>t||Math.abs(h)>t)continue;const u=st(c,h,t),d=n[u]*1.8+Math.max(0,i[u]-.78)*6+Math.max(0,-r[u])*2.4+Math.abs(c-o.x)*.06+Math.abs(h-o.z)*.06;d<l&&(l=d,a={x:c,z:h})}return a}function iy(s,e,t,n){const i=ke(n+1221,e.x,e.z),r=i>.58?t.sand:t.grass;j(s,e,r),i>.8?j(s,{x:e.x,y:e.y+1,z:e.z},t.wood):i<.16&&j(s,{x:e.x,y:e.y+1,z:e.z},t.leaves)}function cu(s,e,t,n,i,r){for(let o=e.x-t;o<=e.x+t;o++)for(let a=e.z-t;a<=e.z+t;a++)if(!(Math.hypot(o-e.x,a-e.z)>t)){for(let l=-2;l<n;l++)j(s,{x:o,y:l,z:a},i);j(s,{x:o,y:n,z:a},r),hc(s,o,a,n+1,n+30)}}function js(s,e,t,n,i,r){const o=Math.max(Math.abs(t.x-e.x),Math.abs(t.z-e.z));for(let a=0;a<=o;a++){const l=o===0?0:a/o,c=Math.round(hu(e.x,t.x,l)),h=Math.round(hu(e.z,t.z,l)),u=Math.max(0,cc(s,c,h));for(let d=-n;d<=n;d++)for(let f=-n;f<=n;f++){const m=c+d,_=h+f;for(let p=-2;p<u;p++)j(s,{x:m,y:p,z:_},r);j(s,{x:m,y:u,z:_},i),hc(s,m,_,u+1,u+8)}}}function Ci(s,e,t){for(const[n,i]of Object.entries(e)){const r=sy(n);j(s,{x:r.x+t.x,y:r.y+t.y,z:r.z+t.z},i)}}function cc(s,e,t){for(let n=96;n>=-2;n--)if(s[xo({x:e,y:n,z:t})])return n;return-2}function hc(s,e,t,n,i){for(let r=n;r<=i;r++)j(s,{x:e,y:r,z:t},0)}function Dl(s,e,t){const n=t.x-e.x,i=t.z-e.z,r=n*n+i*i;if(r===0)return Math.hypot(s.x-e.x,s.z-e.z);const o=Math.max(0,Math.min(1,((s.x-e.x)*n+(s.z-e.z)*i)/r)),a=e.x+n*o,l=e.z+i*o;return Math.hypot(s.x-a,s.z-l)}function hu(s,e,t){return s+(e-s)*t}function sy(s){const e=s.indexOf(","),t=s.indexOf(",",e+1);return{x:Number(s.slice(0,e)),y:Number(s.slice(e+1,t)),z:Number(s.slice(t+1))}}function j(s,e,t){const n=xo(e);if(t===0){delete s[n];return}s[n]=t}function pt(s,e,t){return Math.max(e,Math.min(t,Math.round(s)))}function uu(s){return Math.max(-1,Math.min(1,s))}function Ln(s){let e=s>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ke(s,e,t){const n=Math.sin(e*127.1+t*311.7+s*1e-4)*43758.5453123;return n-Math.floor(n)}function ha(s,e,t,n){const i=Math.sin(e*127.1+t*269.5+n*311.7+s*1e-4)*43758.5453123;return i-Math.floor(i)}class uc{constructor(e,t){z(this,"_texture");z(this,"_uvByUri",new Map);this._texture=e,this._uvByUri=t}get texture(){return this._texture}toSnapshot(){return Object.fromEntries(this._uvByUri.entries())}getFaceUvs(e,t){const n=this._uvByUri.get(e.textureUris[t]);if(!n)throw new Error(`TextureAtlas: Missing atlas entry for ${e.textureUris[t]}`);return n}static async create(e){const t=new Set;for(const u of e)Object.values(u.textureUris).forEach(d=>t.add(d));const n=await Promise.all([...t].map(async u=>[u,await ry(u)])),i=16,r=Math.max(1,Math.ceil(Math.sqrt(n.length))),o=Math.max(1,Math.ceil(n.length/r)),a=document.createElement("canvas");a.width=r*i,a.height=o*i;const l=a.getContext("2d");if(!l)throw new Error("TextureAtlas: Failed to create 2d context.");l.imageSmoothingEnabled=!1;const c=new Map;n.forEach(([u,d],f)=>{const m=f%r,_=Math.floor(f/r),p=m*i,g=_*i;l.drawImage(d,p,g,i,i);const M=oy(d,i);c.set(u,{isTransparent:M.isTransparent,needsAlphaTest:M.needsAlphaTest,transparencyRatio:M.transparencyRatio,u0:p/a.width,v0:1-(g+i)/a.height,u1:(p+i)/a.width,v1:1-g/a.height})});const h=new Ep(a);return h.colorSpace=vt,h.magFilter=Mt,h.minFilter=Mt,h.generateMipmaps=!1,h.needsUpdate=!0,new uc(h,c)}}async function ry(s){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`Failed to load image ${s}`)),n.src=s})}function oy(s,e){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)return{isTransparent:!1,needsAlphaTest:!1,transparencyRatio:0};n.imageSmoothingEnabled=!1,n.clearRect(0,0,e,e),n.drawImage(s,0,0,e,e);const i=n.getImageData(0,0,e,e).data;let r=0,o=!1;for(let a=3;a<i.length;a+=4){const l=i[a];l<255&&r++,l>0&&l<255&&(o=!0)}return{isTransparent:r>0,needsAlphaTest:o,transparencyRatio:r/(e*e)}}const Id=document.querySelector("#app");if(!Id)throw new Error("App root not found.");const Ur=new He,Ki=new D,du=new D,fu=new Se,ay=new Se,ly=new D(0,1,0),ws=new D,Fr=new D,pu=new Fe,mu=new Fe,As=new Rn,ji=new D(1,1,1),Or=new He,gu=new Fe,Br=new fo,Cs=new on,yn=document.createElement("input");yn.type="file";yn.accept=".json,application/json";yn.style.display="none";document.body.append(yn);const cy=256,hy=15,_u=.0025,xu=Math.PI/2-.1,zn="color",vu="tCube",ua="horizonColor",uy="/voxcinder/world-editor/skyboxes/partly-cloudy",dy="/voxcinder/world-editor/maps/boilerplate.json",fy="/voxcinder/",Mu=[new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href],py="exploreMapSource",my="mode",gy="soloMode",da=new fn(0,0,0,"YXZ"),kr=new D,zr=new D,_y=50,yu=1.02,Mi=.045,fa="world-editor-sidebar-sections",Rs="world-editor-autosave",Su=500,xy="world-editor-db",rn="autosaves",dc="world-meta",Ld="view-state",vy=800,My=8,yy=8,Sy=1,by=2,Ey=.4,pa=56,Ty=220,wy=12,bu=1,Eu=.8,Tu=.5,Vr="worldEditorInstanceLightLevel",Hr="worldEditorInstanceSkyLight",Is="vWorldEditorInstanceLightLevel",Ls="vWorldEditorInstanceSkyLight",Pd=15,Ay=Math.ceil((Pd+1)/Pt),wu="worldEditorStaticEntityMaterialSetup",Au={ULTRA:{multiplier:2},HIGH:{devicePixelRatioCap:3,multiplier:1},MEDIUM:{devicePixelRatioCap:2,multiplier:1},LOW:{devicePixelRatioCap:1,multiplier:.85},POWER_SAVING:{devicePixelRatioCap:1,multiplier:.5}},yi={ULTRA:{distance:600,fog:{enabled:!0,far:550,near:320}},HIGH:{distance:300,fog:{enabled:!0,far:300,near:160}},MEDIUM:{distance:150,fog:{enabled:!0,far:150,near:80}},LOW:{distance:75,fog:{enabled:!0,far:75,near:36}},POWER_SAVING:{distance:50,fog:{enabled:!0,far:50,near:16}}};class Cu extends Wt{constructor(e){const t=Js.clone(Nt.cube.uniforms);t[vu].value=e,t[zn]={value:new Se},super({vertexShader:Nt.cube.vertexShader,fragmentShader:Nt.cube.fragmentShader.replace("void main() {",`
            uniform vec3 ${zn};
            void main() {
          `).replace("gl_FragColor = texColor;",`
            gl_FragColor = texColor;
            gl_FragColor.rgb *= ${zn};
          `),uniforms:t,side:Bt,depthWrite:!1,fog:!1})}get color(){return this.uniforms[zn].value}get map(){return this.uniforms[vu].value}}class Ru extends Wt{constructor(){super({vertexShader:`
        varying vec3 vDirection;

        void main() {
          vDirection = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 ${zn};
        uniform vec3 ${ua};
        varying vec3 vDirection;

        void main() {
          float horizonMix = smoothstep(-0.25, 0.45, vDirection.y);
          float zenithBoost = smoothstep(0.1, 1.0, vDirection.y);
          vec3 baseColor = mix(${ua}, ${zn}, horizonMix);
          vec3 finalColor = baseColor * 0.78 + ${zn} * zenithBoost * 0.1;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,uniforms:{[zn]:{value:new Se},[ua]:{value:new Se(.42,.5,.6)}},side:Bt,depthWrite:!1,fog:!1})}get color(){return this.uniforms[zn].value}}var Nu;class Cy{constructor(e){z(this,"container");z(this,"viewport");z(this,"renderer");z(this,"camera");z(this,"scene");z(this,"chunkLayer",new Vt);z(this,"entityLayer",new Vt);z(this,"entityAmbientLight");z(this,"buildPlane");z(this,"hoverBox");z(this,"hoverIndicatorRoot",new Vt);z(this,"crosshair");z(this,"mobileMoveStick");z(this,"mobileMoveStickThumb");z(this,"sidebar");z(this,"mobileMenuButton");z(this,"historyControls");z(this,"undoButton");z(this,"redoButton");z(this,"toolbelt");z(this,"toolToggleButton");z(this,"paletteContainer");z(this,"paletteFilterInput");z(this,"entityListContainer");z(this,"entityOptionsInput");z(this,"entityAddButton");z(this,"entitySaveButton");z(this,"entityDeleteButton");z(this,"lightingAmbientInput");z(this,"fogColorInput");z(this,"skyboxIntensityInput");z(this,"resolutionPresetInput");z(this,"viewDistancePresetInput");z(this,"viewDistanceCustomInput");z(this,"templateThemeSelect");z(this,"templateSeedInput");z(this,"templateSizeInput");z(this,"templateHeightInput");z(this,"templateApplyButton");z(this,"debugPanel");z(this,"debugSummaryLine");z(this,"debugMemoryLine");z(this,"debugRenderLine");z(this,"debugSceneLine");z(this,"chunkMesherWorker");z(this,"cubeTextureLoader",new Wp);z(this,"gltfLoader",new ov);z(this,"chunkBatchRenderer",new Kv(this.chunkLayer));z(this,"entityModelCache",new Map);z(this,"entityRenderObjects",new Set);z(this,"selectedEntityMarker",null);z(this,"world",new nu);z(this,"atlas",null);z(this,"atlasSnapshotCache",null);z(this,"selectedBlockTypeId",((Nu=xi[0])==null?void 0:Nu.id)??1);z(this,"paletteFilter","");z(this,"hoveredPlacement",null);z(this,"hoveredBlock",null);z(this,"lastPointerEvent",null);z(this,"pointerDownEvent",null);z(this,"pointerLocked",!1);z(this,"mobileControlsEnabled",window.matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0);z(this,"mobileMoveTouchId",null);z(this,"mobileLookTouchId",null);z(this,"mobileMoveStart",new He);z(this,"mobileMoveCurrent",new He);z(this,"mobileLookLast",new He);z(this,"mobileMoveInputX",0);z(this,"mobileMoveInputY",0);z(this,"mobileTapCandidates",new Map);z(this,"mobileSidebarOpen",!1);z(this,"debugVisible",!1);z(this,"lastDebugTouchToggleAt",0);z(this,"suppressTouchToolActions",!1);z(this,"fileName","untitled-world-map.json");z(this,"frameCounter",0);z(this,"fps",0);z(this,"lastFpsSampleAt",performance.now());z(this,"nextWorkerRequestId",1);z(this,"nextChunkBuildGeneration",1);z(this,"activeChunkBuildGeneration",0);z(this,"pendingChunkBuildPriorities",new Map);z(this,"chunkBuildWaiters",[]);z(this,"chunkBuildProcessing",!1);z(this,"consecutiveChunkBuildBatchCount",0);z(this,"inFlightChunkBuildIds",new Set);z(this,"fogColor",new Se(1,1,1));z(this,"skyboxIntensity",1);z(this,"skyboxMesh",null);z(this,"pendingSkyboxTexture",null);z(this,"spectatorPitch",.95);z(this,"spectatorYaw",.75);z(this,"pressedKeys",new Set);z(this,"lightingAmbient",1);z(this,"fogColorHex","#ffffff");z(this,"skyboxUiIntensity",1);z(this,"resolutionPreset","MEDIUM");z(this,"viewDistancePreset","MEDIUM");z(this,"viewDistanceCustomDistance",yi.MEDIUM.distance);z(this,"currentTool","build");z(this,"undoStack",[]);z(this,"redoStack",[]);z(this,"autosaveDirtyChunkIds",new Set);z(this,"autosaveEntitiesDirty",!1);z(this,"autosaveFullWorldDirty",!0);z(this,"selectedEntityKey",null);z(this,"autosaveTimeoutId",null);z(this,"viewStateAutosaveTimeoutId",null);z(this,"handleResize",()=>{const e=this.viewport.clientWidth,t=this.viewport.clientHeight;this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)});z(this,"handlePointerMove",e=>{if(e.pointerType!=="touch"){if(this.pointerLocked){this.updateSpectatorRotation(e.movementX,e.movementY),this.updateHoverFromScreenCenter();return}this.lastPointerEvent=e,this.mobileControlsEnabled?this.updateHoverFromPointer(e):this.clearHover()}});z(this,"handlePointerDown",e=>{var t,n;if(e.pointerType!=="touch"){if(this.mobileSidebarOpen){const i=e.target;i&&!this.sidebar.contains(i)&&i!==this.mobileMenuButton&&this.setMobileSidebarOpen(!1)}if(!this.pointerLocked&&!this.mobileControlsEnabled){(n=(t=this.renderer.domElement).requestPointerLock)==null||n.call(t),this.pointerDownEvent=null;return}this.lastPointerEvent=e,this.updateHoverFromScreenCenter(),this.pointerDownEvent=e}});z(this,"handlePointerUp",e=>{if(e.pointerType==="touch"||(this.pointerLocked?this.updateHoverFromScreenCenter():(this.lastPointerEvent=e,this.mobileControlsEnabled?this.updateHoverFromPointer(e):this.clearHover()),!this.pointerDownEvent))return;const t=Math.hypot(e.clientX-this.pointerDownEvent.clientX,e.clientY-this.pointerDownEvent.clientY),n=this.pointerDownEvent.button;this.pointerDownEvent=null,!(t>4)&&this.applyCurrentTool(n)});z(this,"handleKeyDown",e=>{const t=Pu(e.code);if(this.pressedKeys.add(t),e.ctrlKey||e.metaKey){if(e.key.toLowerCase()==="z"&&!e.shiftKey){e.preventDefault(),this.undo();return}if(e.key.toLowerCase()==="y"||e.key.toLowerCase()==="z"&&e.shiftKey){e.preventDefault(),this.redo();return}}if(e.key.toLowerCase()==="g"){this.toggleDebugPanel();return}if(e.code==="Digit1"){this.setToolMode("build");return}if(e.code==="Digit2"){this.setToolMode("erase");return}});z(this,"handleKeyUp",e=>{this.pressedKeys.delete(Pu(e.code))});z(this,"handleTouchStart",e=>{if(this.mobileSidebarOpen&&this.setMobileSidebarOpen(!1),e.touches.length!==5){if(!this.mobileControlsEnabled)return;e.preventDefault();const n=this.viewport.clientWidth;for(const i of Array.from(e.changedTouches)){const r=i.clientX<n*Ey?"move":"look";this.mobileTapCandidates.set(i.identifier,{zone:r,startX:i.clientX,startY:i.clientY,lastX:i.clientX,lastY:i.clientY,moved:!1,time:performance.now()}),r==="move"&&this.mobileMoveTouchId===null?(this.mobileMoveTouchId=i.identifier,this.mobileMoveStart.set(i.clientX,i.clientY),this.mobileMoveCurrent.copy(this.mobileMoveStart),this.updateMobileMoveStick()):r==="look"&&this.mobileLookTouchId===null&&(this.mobileLookTouchId=i.identifier,this.mobileLookLast.set(i.clientX,i.clientY),this.updateHoverFromClientPosition(i.clientX,i.clientY))}return}const t=performance.now();t-this.lastDebugTouchToggleAt<vy||(this.lastDebugTouchToggleAt=t,this.cancelActiveTouchInteractions(),this.suppressTouchToolActions=!0,e.preventDefault(),e.stopPropagation(),this.toggleDebugPanel())});z(this,"handleTouchMove",e=>{if(this.mobileControlsEnabled){e.preventDefault();for(const t of Array.from(e.changedTouches)){const n=this.mobileTapCandidates.get(t.identifier);n&&(n.lastX=t.clientX,n.lastY=t.clientY,Math.hypot(t.clientX-n.startX,t.clientY-n.startY)>wy&&(n.moved=!0)),t.identifier===this.mobileMoveTouchId?(this.mobileMoveCurrent.set(t.clientX,t.clientY),this.updateMobileMoveStick()):t.identifier===this.mobileLookTouchId&&(this.updateSpectatorRotation(t.clientX-this.mobileLookLast.x,t.clientY-this.mobileLookLast.y),this.mobileLookLast.set(t.clientX,t.clientY),this.updateHoverFromClientPosition(t.clientX,t.clientY))}}});z(this,"handleTouchEnd",e=>{if(this.mobileControlsEnabled){if(e.preventDefault(),this.suppressTouchToolActions){e.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(e.changedTouches);return}this.finishTouchSequence(e.changedTouches)}});z(this,"handleTouchCancel",e=>{if(this.mobileControlsEnabled){if(e.preventDefault(),this.suppressTouchToolActions){e.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(e.changedTouches);return}this.finishTouchSequence(e.changedTouches,!0)}});z(this,"handlePointerLockChange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,this.pointerLocked&&this.updateHoverFromScreenCenter()});z(this,"handleBeforeUnload",()=>{this.flushAutosave(),this.flushViewStateAutosave()});z(this,"handleChunkMesherWorkerMessage",()=>{});z(this,"renderLoop",()=>{requestAnimationFrame(this.renderLoop);const e=this.updateSpectatorCamera(1/60);this.pointerLocked&&e&&this.updateHoverFromScreenCenter(),this.updateSkybox(),this.chunkBatchRenderer.update(1/60),this.updateViewDistanceVisibility(),this.renderer.render(this.scene,this.camera),this.frameCounter++;const t=performance.now();t-this.lastFpsSampleAt>=1e3&&(this.fps=Math.round(this.frameCounter*1e3/(t-this.lastFpsSampleAt)),this.frameCounter=0,this.lastFpsSampleAt=t,this.updateDebugPanel())});this.container=document.createElement("div"),this.container.className="app-shell",this.viewport=document.createElement("div"),this.viewport.className="viewport",this.container.append(this.viewport);const t=document.createElement("div");t.className="overlay",this.container.append(t),this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",t.append(this.crosshair),this.mobileMoveStick=document.createElement("div"),this.mobileMoveStick.className="mobile-move-stick",this.mobileMoveStick.hidden=!0,this.mobileMoveStickThumb=document.createElement("div"),this.mobileMoveStickThumb.className="mobile-move-stick-thumb",this.mobileMoveStick.append(this.mobileMoveStickThumb),t.append(this.mobileMoveStick),this.scene=new lp,this.scene.add(this.chunkLayer),this.scene.add(this.entityLayer),this.entityAmbientLight=new Jp(new Se(16777215),1),this.scene.add(this.entityAmbientLight),this.camera=new Ht(55,1,.1,1e3),this.camera.position.set(18,20,18),this.camera.rotation.order="YXZ",this.applySpectatorCameraOrientation(),this.renderer=new sv({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=vt,this.viewport.append(this.renderer.domElement),this.chunkBatchRenderer.setFogProvider(this.createFogUniformProvider()),this.buildPlane=new Et(new Zs(512,512),new Hn({visible:!1,side:Qt})),this.buildPlane.rotation.x=-Math.PI/2,this.buildPlane.position.y=-.5,this.scene.add(this.buildPlane),this.hoverBox=new ol(new ch(new Gn(1.01,1.01,1.01)),new io({color:"#f5b942",transparent:!0,opacity:.95})),this.hoverBox.renderOrder=1e3,this.hoverBox.visible=!1,this.scene.add(this.hoverBox),this.hoverIndicatorRoot.add(this.createHoverFrameIndicator()),this.hoverIndicatorRoot.renderOrder=1e3,this.hoverIndicatorRoot.visible=!1,this.scene.add(this.hoverIndicatorRoot);const n=document.createElement("div");n.className="topbar",n.innerHTML=`
      <a class="button home-link" href="https://takahirox.github.io/voxcinder/" target="_blank" rel="noreferrer">
        <span class="home-link-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 11.5 12 4l9 7.5"></path>
            <path d="M6 10v10h12V10"></path>
            <path d="M10 20v-5h4v5"></path>
          </svg>
        </span>
        <span>Voxcinder</span>
      </a>
      <div class="actions">
        <button class="button" data-action="menu">Menu</button>
        <button class="button" data-action="explore">Explore</button>
      </div>
    `,this.mobileMenuButton=n.querySelector('[data-action="menu"]');const i=document.createElement("aside");i.className="sidebar",i.innerHTML=`
      <details class="sidebar-section" data-section="world">
        <summary class="sidebar-summary">
          <span>World</span>
        </summary>
        <div class="sidebar-content">
          <div class="generator-grid">
            <button class="button" data-action="new" type="button">New</button>
            <button class="button" data-action="reset" type="button">Reset</button>
            <button class="button" data-action="import" type="button">Import</button>
            <button class="button" data-action="export" type="button">Export</button>
          </div>
        </div>
      </details>
      <details class="sidebar-section" data-section="pattern">
        <summary class="sidebar-summary">
          <span>Blocks</span>
        </summary>
        <div class="sidebar-content">
          <input class="generator-input" data-pattern="filter" type="text" placeholder="Filter blocks" />
          <div class="palette" data-pattern="palette"></div>
        </div>
      </details>
      <details class="sidebar-section" data-section="lighting">
        <summary class="sidebar-summary">
          <span>Lighting</span>
        </summary>
        <div class="sidebar-content generator-panel">
          <label class="generator-field">
            <span>Ambient</span>
            <input class="generator-input" data-lighting="ambient" type="range" min="0" max="2.2" step="0.01" value="1" />
          </label>
          <label class="generator-field">
            <span>Fog Color</span>
            <input class="generator-input color-input" data-lighting="fog-color" type="color" value="#ffffff" />
          </label>
          <label class="generator-field">
            <span>Skybox Intensity</span>
            <input class="generator-input" data-lighting="skybox-intensity" type="range" min="0" max="2.2" step="0.01" value="1" />
          </label>
        </div>
      </details>
      <details class="sidebar-section" data-section="rendering">
        <summary class="sidebar-summary">
          <span>Rendering</span>
        </summary>
        <div class="sidebar-content generator-panel">
          <div class="generator-grid">
            <label class="generator-field">
              <span>Resolution</span>
              <select class="generator-select" data-resolution="preset">
                <option value="ULTRA">Ultra</option>
                <option value="HIGH">High</option>
                <option value="MEDIUM" selected>Medium</option>
                <option value="LOW">Low</option>
                <option value="POWER_SAVING">Power Saving</option>
              </select>
            </label>
          </div>
          <div class="generator-grid">
            <label class="generator-field">
              <span>View Distance</span>
              <select class="generator-select" data-view-distance="preset">
                <option value="ULTRA">Ultra</option>
                <option value="HIGH">High</option>
                <option value="MEDIUM" selected>Medium</option>
                <option value="LOW">Low</option>
                <option value="POWER_SAVING">Power Saving</option>
                <option value="CUSTOM">Custom</option>
              </select>
            </label>
            <label class="generator-field">
              <span>Custom Distance</span>
              <input
                class="generator-input"
                data-view-distance="custom"
                type="number"
                min="1"
                max="2000"
                step="1"
                value="300"
                placeholder="Distance"
              />
            </label>
          </div>
        </div>
      </details>
      <details class="sidebar-section" data-section="generator">
        <summary class="sidebar-summary">
          <span>Template Generator</span>
        </summary>
        <div class="sidebar-content generator-panel">
          <label class="generator-field">
            <span>Theme</span>
            <select class="generator-select" data-generator="theme"></select>
          </label>
          <div class="generator-grid">
            <label class="generator-field">
              <span>Seed</span>
              <input class="generator-input" data-generator="seed" type="number" value="1337" step="1" />
            </label>
            <label class="generator-field">
              <span>Size</span>
              <input class="generator-input" data-generator="size" type="number" value="18" min="8" max="96" step="1" />
            </label>
            <label class="generator-field">
              <span>Height</span>
              <input class="generator-input" data-generator="height" type="number" value="6" min="3" max="32" step="1" />
            </label>
          </div>
          <button class="button primary generator-apply" data-generator="apply" type="button">Create</button>
        </div>
      </details>
      <details class="sidebar-section" data-section="entities">
        <summary class="sidebar-summary">
          <span>Entities</span>
        </summary>
        <div class="sidebar-content generator-panel">
          <div class="generator-grid">
            <button class="button" data-entity="add" type="button">Add At Hover</button>
            <button class="button" data-entity="delete" type="button">Delete Selected</button>
          </div>
          <div class="palette entity-list" data-entity="list"></div>
          <label class="generator-field">
            <span>Entity JSON</span>
            <textarea class="generator-input entity-json" data-entity="options" rows="8" spellcheck="false"></textarea>
          </label>
          <button class="button primary generator-apply" data-entity="save" type="button">Save Entity</button>
        </div>
      </details>
    `,this.sidebar=i,this.paletteContainer=i.querySelector('[data-pattern="palette"]'),this.paletteFilterInput=i.querySelector('[data-pattern="filter"]'),this.entityListContainer=i.querySelector('[data-entity="list"]'),this.entityOptionsInput=i.querySelector('[data-entity="options"]'),this.entityAddButton=i.querySelector('[data-entity="add"]'),this.entitySaveButton=i.querySelector('[data-entity="save"]'),this.entityDeleteButton=i.querySelector('[data-entity="delete"]'),this.resolutionPresetInput=i.querySelector('[data-resolution="preset"]'),this.viewDistancePresetInput=i.querySelector('[data-view-distance="preset"]'),this.viewDistanceCustomInput=i.querySelector('[data-view-distance="custom"]'),this.lightingAmbientInput=i.querySelector('[data-lighting="ambient"]'),this.fogColorInput=i.querySelector('[data-lighting="fog-color"]'),this.skyboxIntensityInput=i.querySelector('[data-lighting="skybox-intensity"]'),this.templateThemeSelect=i.querySelector('[data-generator="theme"]'),this.templateSeedInput=i.querySelector('[data-generator="seed"]'),this.templateSizeInput=i.querySelector('[data-generator="size"]'),this.templateHeightInput=i.querySelector('[data-generator="height"]'),this.templateApplyButton=i.querySelector('[data-generator="apply"]'),this.paletteFilterInput.addEventListener("input",()=>{this.paletteFilter=this.paletteFilterInput.value.trim().toLowerCase(),this.rebuildPalette()}),this.restoreSidebarSectionState(i),this.bindSidebarSectionState(i),this.debugPanel=document.createElement("aside"),this.debugPanel.className="debug-panel",this.debugPanel.hidden=!0,this.debugPanel.innerHTML="<h2>Debug</h2>",this.debugSummaryLine=document.createElement("p"),this.debugMemoryLine=document.createElement("p"),this.debugRenderLine=document.createElement("p"),this.debugSceneLine=document.createElement("p"),this.debugPanel.append(this.debugSummaryLine,this.debugMemoryLine,this.debugRenderLine,this.debugSceneLine),this.historyControls=document.createElement("div"),this.historyControls.className="history-controls",this.historyControls.innerHTML=`
      <button class="history-button" data-action="undo" type="button" aria-label="Undo" title="Undo">
        <span class="history-button-icon" aria-hidden="true">
          <svg viewBox="0 -960 960 960" fill="currentColor">
            <path d="M280-200v-80h194q63 0 106.5-43.5T624-430q0-63-43.5-106.5T474-580H290l84 84-56 56-180-180 180-180 56 56-84 84h184q97 0 168.5 71.5T714-430q0 97-71.5 168.5T474-190H280Z"/>
          </svg>
        </span>
      </button>
      <button class="history-button" data-action="redo" type="button" aria-label="Redo" title="Redo">
        <span class="history-button-icon" aria-hidden="true">
          <svg viewBox="0 -960 960 960" fill="currentColor">
            <path d="M680-200H486q-97 0-168.5-71.5T246-430q0-97 71.5-168.5T486-670h184l-84-84 56-56 180 180-180 180-56-56 84-84H486q-63 0-106.5 43.5T336-430q0 63 43.5 106.5T486-280h194v80Z"/>
          </svg>
        </span>
      </button>
    `,this.undoButton=this.historyControls.querySelector('[data-action="undo"]'),this.redoButton=this.historyControls.querySelector('[data-action="redo"]'),this.updateHistoryButtons(),this.toolbelt=document.createElement("div"),this.toolbelt.className="toolbelt",this.toolbelt.innerHTML=`
      <button class="tool-slot active" data-tool-toggle type="button">
        <span class="tool-slot-icon" aria-hidden="true">${this.getToolIconSvg(this.currentTool)}</span>
      </button>
    `,this.toolToggleButton=this.toolbelt.querySelector("[data-tool-toggle]"),this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(this.currentTool)),this.toolToggleButton.title=this.getToolLabel(this.currentTool),t.append(n,i,this.debugPanel,this.historyControls,this.toolbelt),e.append(this.container),this.chunkMesherWorker=new Worker(new URL("/voxcinder/world-editor/assets/chunkMesherWorker-6-u0j_tU.js",import.meta.url),{type:"module"}),this.chunkMesherWorker.addEventListener("message",this.handleChunkMesherWorkerMessage),n.addEventListener("click",r=>{this.handleUiAction(r.target,yn)}),i.addEventListener("click",r=>{this.handleUiAction(r.target,yn)}),this.historyControls.addEventListener("click",r=>{this.handleUiAction(r.target,yn)}),yn.addEventListener("change",()=>{var o;const r=(o=yn.files)==null?void 0:o[0];r&&this.importMap(r),yn.value=""}),this.toolbelt.addEventListener("click",r=>{r.target.closest("[data-tool-toggle]")&&this.toggleToolMode()}),this.templateThemeSelect.addEventListener("change",()=>this.syncTemplateInputsToTheme()),this.templateApplyButton.addEventListener("click",()=>{this.applyThemeTemplate()}),this.entityAddButton.addEventListener("click",()=>{this.addEntityAtHover()}),this.entitySaveButton.addEventListener("click",()=>{this.saveSelectedEntity()}),this.entityDeleteButton.addEventListener("click",()=>{this.deleteSelectedEntity()}),this.resolutionPresetInput.addEventListener("change",()=>this.handleResolutionChange()),this.viewDistancePresetInput.addEventListener("change",()=>this.handleViewDistanceChange()),this.viewDistanceCustomInput.addEventListener("input",()=>this.handleViewDistanceChange()),this.lightingAmbientInput.addEventListener("input",()=>this.handleLightingChange()),this.fogColorInput.addEventListener("input",()=>this.handleLightingChange()),this.skyboxIntensityInput.addEventListener("input",()=>this.handleLightingChange()),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),this.renderer.domElement.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),this.renderer.domElement.addEventListener("touchend",this.handleTouchEnd,{passive:!1}),this.renderer.domElement.addEventListener("touchcancel",this.handleTouchCancel,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("beforeunload",this.handleBeforeUnload),document.addEventListener("pointerlockchange",this.handlePointerLockChange),this.handleResize(),this.loadSkybox(uy),this.populateTemplateThemeOptions(),this.syncResolutionInputs(),this.syncViewDistanceInputs(),this.applyResolutionSettings(),this.applyViewDistanceSettings(),this.applyLightingSettings(),this.initializeWorld(),this.updateDebugPanel(),this.renderLoop()}async initializeWorld(){await this.restoreAutosavedViewState(),await this.restoreAutosavedWorld()||await this.loadDefaultWorldMap()}setMobileSidebarOpen(e,t=!0){this.mobileSidebarOpen!==e&&(this.mobileSidebarOpen=e,this.container.classList.toggle("mobile-sidebar-open",this.mobileSidebarOpen),this.mobileMenuButton.classList.toggle("active",this.mobileSidebarOpen),t&&this.scheduleViewStateAutosave())}handleUiAction(e,t){var i;const n=(i=e.closest("[data-action]"))==null?void 0:i.dataset.action;if(n){if(n==="menu"){this.setMobileSidebarOpen(!this.mobileSidebarOpen);return}n==="new"?this.resetToEmptyMap():n==="reset"?this.resetSavedData():n==="undo"?this.undo():n==="redo"?this.redo():n==="import"?t.click():n==="export"?this.exportMap():n==="explore"&&this.openExploreMode()}}async finishTouchSequence(e,t=!1){for(const n of Array.from(e)){const i=this.mobileTapCandidates.get(n.identifier);if(this.mobileTapCandidates.delete(n.identifier),n.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),n.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null),!i||t)continue;const r=performance.now()-i.time;i.moved||r>Ty||(this.updateHoverFromClientPosition(i.lastX,i.lastY),await this.applyCurrentTool(0))}}cancelActiveTouchInteractions(){this.mobileTapCandidates.clear(),this.mobileLookTouchId=null,this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0}cancelEndedTouchControls(e){for(const t of Array.from(e))this.mobileTapCandidates.delete(t.identifier),t.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),t.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null)}updateMobileMoveStick(){if(this.mobileMoveTouchId===null){this.mobileMoveStick.hidden=!0,this.mobileMoveInputX=0,this.mobileMoveInputY=0;return}const e=this.mobileMoveCurrent.x-this.mobileMoveStart.x,t=this.mobileMoveCurrent.y-this.mobileMoveStart.y,n=Math.hypot(e,t),i=Math.min(n,pa),r=n>0?e/n:0,o=n>0?t/n:0,a=r*i,l=o*i;this.mobileMoveInputX=r*(i/pa),this.mobileMoveInputY=o*(i/pa),this.mobileMoveStick.hidden=!1,this.mobileMoveStick.style.left=`${this.mobileMoveStart.x}px`,this.mobileMoveStick.style.top=`${this.mobileMoveStart.y}px`,this.mobileMoveStickThumb.style.transform=`translate(${a}px, ${l}px)`}toggleDebugPanel(){this.debugVisible=!this.debugVisible,this.debugPanel.hidden=!this.debugVisible,this.updateStatus(this.debugVisible?"Debug mode enabled.":"Debug mode disabled."),this.updateDebugPanel()}async resetToEmptyMap(){var e;this.world.load({},xi),this.selectedBlockTypeId=((e=this.world.blockTypes[0])==null?void 0:e.id)??1,this.fileName="untitled-world-map.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus("Started a new empty world map.")}resetViewStateToDefaults(){this.spectatorPitch=.95,this.spectatorYaw=.75,this.camera.position.set(18,20,18),this.applySpectatorCameraOrientation(),this.setMobileSidebarOpen(!1,!1),this.paletteFilter="",this.paletteFilterInput.value="",this.resolutionPreset="MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.viewDistancePreset="MEDIUM",this.viewDistanceCustomDistance=yi.MEDIUM.distance,this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.lightingAmbient=1,this.fogColorHex="#ffffff",this.skyboxUiIntensity=1,this.syncLightingInputs(),this.applyLightingSettings(),this.setToolMode("build")}async resetSavedData(){window.confirm("Delete saved World Editor data and reset to the default world?")&&(this.autosaveTimeoutId!==null&&(window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=null),this.viewStateAutosaveTimeoutId!==null&&(window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=null),localStorage.removeItem(Rs),await Iu(),this.resetViewStateToDefaults(),await this.loadDefaultWorldMap(),this.updateStatus("Reset saved data and restored the default world."))}async loadDefaultWorldMap(){var e;try{const t=await fetch(dy,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load default map: ${t.status} ${t.statusText}`);const n=await t.json();this.world.load(n,xi),this.selectedBlockTypeId=((e=this.world.blockTypes[0])==null?void 0:e.id)??this.selectedBlockTypeId,this.fileName="boilerplate.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),await this.flushAutosave(),this.updateStatus("Loaded default world map.")}catch(t){console.error(t),await this.resetToEmptyMap(),this.updateStatus(`Default world map load failed: ${t.message}`)}}populateTemplateThemeOptions(){this.templateThemeSelect.replaceChildren();for(const e of ca){const t=document.createElement("option");t.value=e.id,t.textContent=e.label,this.templateThemeSelect.append(t)}this.syncTemplateInputsToTheme()}syncTemplateInputsToTheme(){const e=ca.find(t=>t.id===this.templateThemeSelect.value);e&&(this.templateSizeInput.value=String(e.defaultSize),this.templateHeightInput.value=String(e.defaultHeight))}async importMap(e){var t;try{const n=JSON.parse(await e.text());this.world.load(n,xi),this.selectedBlockTypeId=((t=this.world.blockTypes[0])==null?void 0:t.id)??this.selectedBlockTypeId,this.fileName=e.name,this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Imported ${e.name}.`)}catch(n){console.error(n),this.updateStatus(`Import failed: ${n.message}`)}}exportMap(){const e=this.world.toJson(),t=new Blob([`${JSON.stringify(e,null,2)}
`],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=this.fileName.endsWith(".json")?this.fileName:`${this.fileName}.json`,n.click(),URL.revokeObjectURL(n.href),this.updateStatus(`Exported ${n.download}.`)}async applyThemeTemplate(){const e=this.templateThemeSelect.value||"arena",t=ca.find(l=>l.id===e);if(!t){this.updateStatus(`Unknown template theme "${e}".`);return}const n=this.getCurrentBlockTypeDefinitions(),i=this.resolveTemplateBlockIds(n),r=bM({theme:e,seed:Number(this.templateSeedInput.value)||0,size:Number(this.templateSizeInput.value)||t.defaultSize,height:Number(this.templateHeightInput.value)||t.defaultHeight},i),o=this.world.toSnapshot();this.world.load({blockTypes:n,blocks:r.blocks},n);const a=this.world.toSnapshot();this.pushSnapshotUndoState(`Generate ${t.label}`,o,a),this.markFullWorldAutosaveDirty(),this.fileName=`generated-${e}.json`,this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Generated ${t.label.toLowerCase()} template with seed ${this.templateSeedInput.value||"0"}.`)}rebuildPalette(){var n;const e=this.sidebar.scrollTop,t=this.paletteContainer.scrollTop;this.paletteContainer.replaceChildren(),this.paletteFilterInput.value=this.paletteFilter;for(const i of this.world.blockTypes){if(this.paletteFilter&&!i.name.toLowerCase().includes(this.paletteFilter))continue;const r=document.createElement("button");r.type="button",r.className="palette-button",i.id===this.selectedBlockTypeId&&r.classList.add("active"),r.innerHTML=`
        <span class="texture-fallback">IMG</span>
        <span class="palette-meta">
          <strong>${i.name}</strong>
          <span>ID ${i.id}</span>
        </span>
      `;const o=document.createElement("img");o.src=i.textureUris.top,o.alt=i.name,(n=r.querySelector(".texture-fallback"))==null||n.replaceWith(o),r.addEventListener("click",()=>{this.selectedBlockTypeId=i.id,this.rebuildPalette(),this.updateStatus(`Pattern set to "${i.name}".`)}),this.paletteContainer.append(r)}this.sidebar.scrollTop=e,this.paletteContainer.scrollTop=t}rebuildEntitiesUi(){this.entityListContainer.replaceChildren();const e=this.world.entities,t=Object.keys(e).sort();for(const n of t){const i=document.createElement("button");i.type="button",i.className="palette-button",n===this.selectedEntityKey&&i.classList.add("active"),i.innerHTML=`
        <span class="texture-fallback">ENT</span>
        <span class="palette-meta">
          <strong>${this.getEntityLabel(e[n])}</strong>
          <span>${n}</span>
        </span>
      `,i.addEventListener("click",()=>{this.selectedEntityKey=n,this.entityOptionsInput.value=JSON.stringify(e[n],null,2),this.rebuildEntitiesUi(),this.refreshSelectedEntityMarker()}),this.entityListContainer.append(i)}(!this.selectedEntityKey||!(this.selectedEntityKey in e))&&(this.selectedEntityKey=t[0]??null),this.entityOptionsInput.value=this.selectedEntityKey?JSON.stringify(e[this.selectedEntityKey],null,2):"{}",this.refreshSelectedEntityMarker()}async rebuildAllChunkMeshes(){const e=++this.nextChunkBuildGeneration;this.activeChunkBuildGeneration=e,this.pendingChunkBuildPriorities.clear(),this.chunkBuildWaiters=[],this.inFlightChunkBuildIds.clear(),this.disposeAllChunkMeshes(),this.atlas=await uc.create(this.world.blockTypes),this.atlasSnapshotCache=this.atlas.toSnapshot(),this.chunkBatchRenderer.setAtlas(this.atlas),await this.syncChunkMesherWorkerWorld(),this.rebuildEntityMarkers(),await this.enqueueChunkBuilds(this.world.chunkIds,Sy,e),this.lastPointerEvent?this.updateHoverFromPointer(this.lastPointerEvent):this.pointerLocked&&this.updateHoverFromScreenCenter()}waitForNextFrame(){return new Promise(e=>requestAnimationFrame(()=>e()))}createHoverFrameIndicator(){const e=new Vt,t=new Hn({color:"#f5b942",transparent:!0,opacity:.95,depthWrite:!1}),i=yu/2-Mi/2,r=yu,o=(a,l,c,h,u,d)=>{const f=new Et(new Gn(a,l,c),t.clone());f.renderOrder=1e3,f.position.set(h,u,d),f.matrixAutoUpdate=!1,f.updateMatrix(),e.add(f)};for(const a of[-i,i])for(const l of[-i,i])o(r,Mi,Mi,0,a,l);for(const a of[-i,i])for(const l of[-i,i])o(Mi,r,Mi,a,0,l);for(const a of[-i,i])for(const l of[-i,i])o(Mi,Mi,r,a,l,0);return e}disposeAllChunkMeshes(){this.chunkBatchRenderer.clear()}async rebuildEntityMarkers(){this.disposeSelectedEntityMarker(),this.entityRenderObjects.clear(),this.entityLayer.clear();const e=Object.entries(this.world.entities),t=new Map;for(const[n,i]of e){const r=Du(n);if(!r)continue;const o=this.getEntityModelUri(i);if(o){const l=this.resolveEntityModelUri(o),c=t.get(l)??[];c.push({key:n,position:r,options:i}),t.set(l,c);continue}const a=new Vt;a.position.set(r.x,r.y,r.z),a.userData.entityKey=n,a.userData.entityOptions=i,a.userData.visibilityRadius=1,a.add(this.createEntityMarker("#8b5cf6")),this.entityRenderObjects.add(a),this.entityLayer.add(a)}for(const[n,i]of t){const r=await this.loadEntityModelTemplate(n);if(!r){for(const o of i){const a=new Vt;a.position.set(o.position.x,o.position.y,o.position.z),a.userData.entityKey=o.key,a.userData.entityOptions=o.options,a.userData.visibilityRadius=1,a.add(this.createEntityMarker("#8b5cf6")),this.entityRenderObjects.add(a),this.entityLayer.add(a)}continue}r.updateMatrixWorld(!0),r.traverse(o=>{if(!(o instanceof Et))return;const a=o.geometry.clone(),l=new Float32Array(i.length),c=new Float32Array(i.length),h=[],u=new jr(a,this.createEntityRenderMaterial(o.material),i.length);u.userData.entityKeys=i.map(d=>d.key),u.userData.entityOptions=i.map(d=>d.options),u.userData.entityPositions=i.map(d=>({...d.position})),u.userData.modelUri=n,u.castShadow=o.castShadow,u.receiveShadow=o.receiveShadow;for(let d=0;d<i.length;d++){const f=i[d],m=this.getEntityGlobalCoordinate(f.position);pu.compose(new D(f.position.x,f.position.y,f.position.z),ky(f.options),By(f.options)),mu.copy(pu).multiply(o.matrixWorld),u.setMatrixAt(d,mu),l[d]=this.getEntityLightLevel(f.position),c[d]=this.getEntitySkyLight(f.position),h.push(Ke.globalCoordinateToChunkId(m))}a.setAttribute(Vr,new $s(l,1)),a.setAttribute(Hr,new $s(c,1)),u.instanceMatrix.needsUpdate=!0,u.userData.entityChunkIds=h,u.computeBoundingBox(),u.computeBoundingSphere(),this.entityRenderObjects.add(u),this.entityLayer.add(u)})}this.refreshSelectedEntityMarker()}refreshSelectedEntityMarker(){if(this.disposeSelectedEntityMarker(),!this.selectedEntityKey)return;const e=Du(this.selectedEntityKey);if(!e)return;const t=this.createEntityMarker("#ff8a65");t.position.set(e.x,e.y,e.z),t.renderOrder=1001,t.userData.visibilityRadius=1,this.selectedEntityMarker=t,this.entityRenderObjects.add(t),this.entityLayer.add(t)}disposeSelectedEntityMarker(){if(this.selectedEntityMarker){if(this.entityRenderObjects.delete(this.selectedEntityMarker),this.entityLayer.remove(this.selectedEntityMarker),this.selectedEntityMarker.geometry.dispose(),Array.isArray(this.selectedEntityMarker.material))for(const e of this.selectedEntityMarker.material)e.dispose();else this.selectedEntityMarker.material.dispose();this.selectedEntityMarker=null}}createEntityMarker(e){const t=new ch(new Gn(.6,1.2,.6)),n=new io({color:e,transparent:!0,opacity:.95}),i=new ol(t,n);return i.renderOrder=1e3,i}handleLightingChange(){this.lightingAmbient=Number(this.lightingAmbientInput.value),this.fogColorHex=this.fogColorInput.value||"#ffffff",this.skyboxUiIntensity=Number(this.skyboxIntensityInput.value),this.applyLightingSettings(),this.scheduleViewStateAutosave()}handleResolutionChange(){const e=this.resolutionPresetInput.value;this.resolutionPreset=e in Au?e:"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.scheduleViewStateAutosave()}handleViewDistanceChange(){const e=this.viewDistancePresetInput.value;this.viewDistancePreset=e in yi||e==="CUSTOM"?e:"HIGH",this.viewDistanceCustomDistance=Math.max(1,Math.round(Number(this.viewDistanceCustomInput.value)||yi.HIGH.distance)),this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.scheduleViewStateAutosave()}syncLightingInputs(){this.lightingAmbientInput.value=String(this.lightingAmbient),this.fogColorInput.value=this.fogColorHex,this.skyboxIntensityInput.value=String(this.skyboxUiIntensity)}syncResolutionInputs(){this.resolutionPresetInput.value=this.resolutionPreset}getEffectivePixelRatio(e,t){return(t===void 0?window.devicePixelRatio:Math.min(window.devicePixelRatio,t))*e}applyResolutionSettings(){const e=Au[this.resolutionPreset];this.renderer.setPixelRatio(this.getEffectivePixelRatio(e.multiplier,e.devicePixelRatioCap)),this.handleResize()}syncViewDistanceInputs(){if(this.viewDistancePresetInput.value=this.viewDistancePreset,this.viewDistancePreset==="CUSTOM"){this.viewDistanceCustomInput.value=String(this.viewDistanceCustomDistance),this.viewDistanceCustomInput.disabled=!1;return}this.viewDistanceCustomInput.value=String(yi[this.viewDistancePreset].distance),this.viewDistanceCustomInput.disabled=!0}getViewDistanceConfig(){if(this.viewDistancePreset!=="CUSTOM")return yi[this.viewDistancePreset];const e=Math.max(1,this.viewDistanceCustomDistance),t=Math.min(e,Math.max(16,Math.round(e*(160/300))));return{distance:e,fog:{enabled:!0,far:e,near:t}}}getCurrentViewDistance(){const e=this.getViewDistanceConfig();return e.fog.enabled?e.fog.far:e.distance}getCurrentLodTransitionDistance(){const e=this.getViewDistanceConfig();return e.fog.enabled?Math.min(e.fog.far,e.fog.near+(e.fog.far-e.fog.near)*.5):e.distance}createFogUniformProvider(){return{color:()=>this.fogColor,enabled:()=>this.getViewDistanceConfig().fog.enabled,far:()=>this.getViewDistanceConfig().fog.far,near:()=>this.getViewDistanceConfig().fog.near}}applyViewDistanceSettings(){this.updateViewDistanceVisibility()}applyLightingSettings(){this.chunkBatchRenderer.setAmbientColor(this.entityAmbientLight.color),this.chunkBatchRenderer.setAmbientIntensity(this.lightingAmbient),this.entityAmbientLight.intensity=this.lightingAmbient,this.fogColor.set(this.fogColorHex).convertSRGBToLinear(),this.skyboxIntensity=this.skyboxUiIntensity,this.skyboxMesh&&this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor())}getEntityGlobalCoordinate(e){return{x:Math.floor(e.x),y:Math.floor(e.y),z:Math.floor(e.z)}}getEntityLightLevel(e){const t=this.getEntityGlobalCoordinate(e),n=this.world.getLightSourcesNear(t,Ay);let i=0;for(const r of n){const o=t.x-r.position.x+.5,a=t.y-r.position.y+.5,l=t.z-r.position.z+.5;if(o>r.level||o<-r.level||a>r.level||a<-r.level||l>r.level||l<-r.level)continue;const c=o*o+a*a+l*l,h=r.level*r.level;if(c>=h)continue;const u=r.level-Math.sqrt(c);u>i&&(i=u)}return Math.max(0,Math.min(1,i/Pd))}getEntitySkyLight(e){const t=this.getEntityGlobalCoordinate(e);let n=Zi;for(let r=Zi;r>=0;r--){const o=this.getEntitySkyOpacityUp({x:t.x,y:t.y+r,z:t.z});o!==void 0?n=o+n*(1-o):n=Math.min(Zi,n+1)}const i=Math.max(1,Math.min(Zi,Math.round(n)));return aM[i]}getEntitySkyOpacityUp(e){if(!this.atlas)return;const t=this.world.getBlockType(e);if(!t||t.isLiquid)return;const n=this.getEntityBlockOpacity(t);return t.trimeshOcclusionProfile?this.getEntityTrimeshSkyOpacity(t,this.world.getBlockRotation(e))*n:n}getEntityBlockOpacity(e){let t=0;for(const i of jh)t+=this.atlas.getFaceUvs(e,i).transparencyRatio;const n=t/jh.length;return Math.max(0,Math.min(1,1-n))}getEntityTrimeshSkyOpacity(e,t){const n=e.trimeshOcclusionProfile;if(!n)return 1;const i=Zh[t]??Zh[0],r=i[3],o=i[5];return Math.abs(r)>.5?n.skyOpacityX:Math.abs(o)>.5?n.skyOpacityZ:n.skyOpacityUp}updateEntityLighting(e){const t=e?new Set(e):null;for(const n of this.entityRenderObjects){if(!(n instanceof jr))continue;const i=n.geometry.getAttribute(Vr),r=n.geometry.getAttribute(Hr),o=n.userData.entityPositions,a=n.userData.entityChunkIds;if(!i||!r||!o)continue;let l=!1;for(let c=0;c<o.length;c++)t&&a&&!t.has(a[c])||(i.setX(c,this.getEntityLightLevel(o[c])),r.setX(c,this.getEntitySkyLight(o[c])),l=!0);l&&(i.needsUpdate=!0,r.needsUpdate=!0)}}getCurrentSkyboxDisplayColor(){const e=this.getViewDistanceConfig();if(!e.fog.enabled)return fu.copy(this.fogColor).multiplyScalar(this.skyboxIntensity);const n=Math.max(0,Math.min(1,1-e.fog.near/100)),i=e.fog.far-e.fog.near,o=Math.max(1,100/Math.max(i,1)),a=Math.min(1,n*o);return fu.copy(ay.setRGB(1,1,1).lerp(this.fogColor,a)).multiplyScalar(this.skyboxIntensity)}restoreSidebarSectionState(e){let t={};try{t=JSON.parse(localStorage.getItem(fa)??"{}")}catch{t={}}for(const n of e.querySelectorAll(".sidebar-section[data-section]")){const i=n.dataset.section;i&&(n.open=t[i]===!0)}}bindSidebarSectionState(e){for(const t of e.querySelectorAll(".sidebar-section[data-section]"))t.addEventListener("toggle",()=>{const n=t.dataset.section;if(!n)return;let i={};try{i=JSON.parse(localStorage.getItem(fa)??"{}")}catch{i={}}i[n]=t.open,localStorage.setItem(fa,JSON.stringify(i))})}createEntityRenderMaterial(e){const t=Array.isArray(e)?e[0]:e,n=t,i=new MM({color:n.color??new Se(16777215),map:n.map??null,alphaMap:n.alphaMap??null,alphaTest:n.alphaTest??0,transparent:t.transparent,opacity:t.opacity,side:t.side,depthWrite:t.depthWrite,depthTest:t.depthTest,emissive:n.emissive??new Se(0),emissiveIntensity:n.emissiveIntensity??1,emissiveMap:n.emissiveMap??null,fogUniformProvider:this.createFogUniformProvider()});return i.name=`${t.name||"entity"}-editor`,this.ensureEntityMaterialSetup(i),i}ensureEntityMaterialSetup(e){if(e.userData[wu])return;const t=this;e.addShaderProcessor(n=>{n.uniforms.worldEditorAmbientLightColor={value:this.entityAmbientLight.color},n.uniforms.worldEditorAmbientLightIntensity={get value(){return t.entityAmbientLight.intensity}},n.vertexShader=n.vertexShader.replace("void main() {",`
            #ifdef USE_INSTANCING
              attribute float ${Vr};
              attribute float ${Hr};
            #endif
            varying float ${Is};
            varying float ${Ls};
            varying float worldEditorWorldNormalY;

            float worldEditorGetWorldNormalY(vec3 localNormal, mat4 worldMatrix) {
              mat3 basis = mat3(worldMatrix);
              vec3 scale = vec3(dot(basis[0], basis[0]), dot(basis[1], basis[1]), dot(basis[2], basis[2]));
              vec3 scaledNormal = localNormal / max(scale, vec3(1e-10));
              vec3 worldNormal = basis * scaledNormal;
              float lengthSquared = dot(worldNormal, worldNormal);
              return worldNormal.y * inversesqrt(max(lengthSquared, 1e-10));
            }

            void main() {
              ${Is} = 0.0;
              ${Ls} = 1.0;
          `).replace("#include <uv_vertex>",`
            #include <uv_vertex>
            #ifdef USE_INSTANCING
              ${Is} = ${Vr};
              ${Ls} = ${Hr};
            #endif
            mat4 worldEditorInstanceWorldMatrix = modelMatrix;
            #ifdef USE_INSTANCING
              worldEditorInstanceWorldMatrix = modelMatrix * instanceMatrix;
            #endif
            worldEditorWorldNormalY = worldEditorGetWorldNormalY(normal, worldEditorInstanceWorldMatrix);
          `),n.fragmentShader=n.fragmentShader.replace("void main() {",`
            varying float ${Is};
            varying float ${Ls};
            varying float worldEditorWorldNormalY;
            uniform vec3 worldEditorAmbientLightColor;
            uniform float worldEditorAmbientLightIntensity;

            void main() {
          `).replace("#include <opaque_fragment>",`
            vec3 ambientLight = worldEditorAmbientLightColor * worldEditorAmbientLightIntensity;
            vec3 blockLight = worldEditorAmbientLightColor * ${Is};
            float normalY = gl_FrontFacing ? worldEditorWorldNormalY : -worldEditorWorldNormalY;
            float faceShade = ${Eu.toFixed(2)}
              + (${bu.toFixed(2)} - ${Tu.toFixed(2)}) * 0.5 * normalY
              + ((${bu.toFixed(2)} + ${Tu.toFixed(2)}) * 0.5 - ${Eu.toFixed(2)}) * normalY * normalY;
            outgoingLight *= max(ambientLight, blockLight);
            outgoingLight *= ${Ls} * faceShade;

            #include <opaque_fragment>
          `)}),e.userData[wu]=!0}async loadEntityModelTemplate(e){this.entityModelCache.has(e)||this.entityModelCache.set(e,this.gltfLoader.loadAsync(e).then(n=>{const i=new Vt;return i.add(n.scene.clone(!0)),i.updateMatrixWorld(!0),i}).catch(n=>(console.error(n),new Vt)));const t=await this.entityModelCache.get(e);return t.children.length===0?null:t}resolveEntityModelUri(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/voxcinder/world-editor/${e}`}getEntityModelUri(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.modelUri=="string"&&t.modelUri.length>0?t.modelUri:null}updateHoverFromPointer(e){this.updateHoverFromClientPosition(e.clientX,e.clientY)}updateHoverFromScreenCenter(){const e=this.renderer.domElement.getBoundingClientRect();this.updateHoverFromClientPosition(e.left+e.width/2,e.top+e.height/2)}updateHoverFromClientPosition(e,t){const n=this.renderer.domElement.getBoundingClientRect();Ur.x=(e-n.left)/n.width*2-1,Ur.y=-((t-n.top)/n.height)*2+1,this.camera.updateMatrixWorld(),ws.setFromMatrixPosition(this.camera.matrixWorld),Ki.set(Ur.x,Ur.y,.5).unproject(this.camera),Fr.copy(Ki).sub(ws).normalize();const i=this.raycastBlocks(ws,Fr,cy);if(i){this.hoveredBlock=i.coordinate;const l=this.getPlacementCoordinateFromBlock(i.coordinate,i.normal);this.hoveredPlacement=l,this.currentTool==="build"?this.setHoverBox(l,"#f5b942"):this.currentTool==="erase"&&this.setHoverBox(i.coordinate,"#f05d6c");return}this.hoveredBlock=null;const r=-.5,o=Fr.dot(ly);if(Math.abs(o)<1e-6){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}const a=(r-ws.y)/o;if(a<0){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}Ki.copy(ws).addScaledVector(Fr,a),this.hoveredPlacement={x:Math.floor(Ki.x),y:0,z:Math.floor(Ki.z)},this.setHoverIndicatorVisible(!1),this.hoveredPlacement&&this.currentTool==="build"&&this.setHoverBox(this.hoveredPlacement,"#f5b942"),this.hoveredBlock&&this.currentTool==="erase"&&this.setHoverBox(this.hoveredBlock,"#f05d6c")}clearHover(){this.hoveredPlacement=null,this.hoveredBlock=null,this.setHoverIndicatorVisible(!1)}getPlacementCoordinateFromBlock(e,t){return{x:e.x+Math.round(t.x),y:e.y+Math.round(t.y),z:e.z+Math.round(t.z)}}setHoverBox(e,t){du.set(e.x+.5,e.y+.5,e.z+.5),this.hoverIndicatorRoot.position.copy(du),this.hoverIndicatorRoot.traverse(n=>{const i=n;if(!i.material)return;const r=Array.isArray(i.material)?i.material:[i.material];for(const o of r){const a=o;a.color&&a.color.set(t)}}),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setHoverIndicatorVisible(e){this.hoverIndicatorRoot.visible=e,this.hoverBox.visible=!1}async applyCurrentTool(e){if(this.currentTool==="build"){e===0&&await this.placeSingleBlock();return}this.currentTool==="erase"&&(e===0||e===2)&&await this.deleteSingleBlock()}async rebuildAffectedChunks(e){await this.syncChunkMesherWorkerChunks(e),await this.enqueueChunkBuilds(e,by,this.activeChunkBuildGeneration),this.updateEntityLighting(e),this.updateDebugPanel()}async enqueueChunkBuilds(e,t,n){if(!this.atlas||e.length===0||n!==this.activeChunkBuildGeneration)return;const i=[...new Set(e)];for(const r of i){const o=this.pendingChunkBuildPriorities.get(r)??0;t>=o&&this.pendingChunkBuildPriorities.set(r,t)}this.ensureChunkBuildQueueProcessing(n),await new Promise(r=>{this.chunkBuildWaiters.push({chunkIds:new Set(i),resolve:r}),this.resolveChunkBuildWaiters()})}ensureChunkBuildQueueProcessing(e){this.chunkBuildProcessing||e!==this.activeChunkBuildGeneration||(this.chunkBuildProcessing=!0,this.processChunkBuildQueue(e))}async processChunkBuildQueue(e){try{for(;e===this.activeChunkBuildGeneration;){const t=this.takeNextChunkBuildBatch();if(t.length===0)return;for(const i of t)this.pendingChunkBuildPriorities.delete(i),this.inFlightChunkBuildIds.add(i);const n=await this.buildChunkMeshesBatch(t);if(e!==this.activeChunkBuildGeneration)return;for(const i of n)this.chunkBatchRenderer.setChunkGeometry(i.chunkId,i.geometry),this.inFlightChunkBuildIds.delete(i.chunkId);this.chunkBatchRenderer.flush(),this.resolveChunkBuildWaiters(),this.consecutiveChunkBuildBatchCount++,this.consecutiveChunkBuildBatchCount>=yy&&(this.consecutiveChunkBuildBatchCount=0,await this.waitForNextFrame())}}finally{this.consecutiveChunkBuildBatchCount=0,this.chunkBuildProcessing=!1,e===this.activeChunkBuildGeneration&&this.pendingChunkBuildPriorities.size>0&&this.ensureChunkBuildQueueProcessing(e)}}takeNextChunkBuildBatch(){return[...this.pendingChunkBuildPriorities.keys()].sort((t,n)=>{const i=(this.pendingChunkBuildPriorities.get(n)??0)-(this.pendingChunkBuildPriorities.get(t)??0);return i!==0?i:this.getChunkDistanceToCameraSquared(t)-this.getChunkDistanceToCameraSquared(n)}).slice(0,My)}getChunkDistanceToCameraSquared(e){const t=Ke.chunkIdToOriginCoordinate(e),n=t.x+8,i=t.y+8,r=t.z+8;return(n-this.camera.position.x)*(n-this.camera.position.x)+(i-this.camera.position.y)*(i-this.camera.position.y)+(r-this.camera.position.z)*(r-this.camera.position.z)}resolveChunkBuildWaiters(){for(let e=this.chunkBuildWaiters.length-1;e>=0;e--){const t=this.chunkBuildWaiters[e];let n=!0;for(const i of t.chunkIds)if(this.pendingChunkBuildPriorities.has(i)||this.inFlightChunkBuildIds.has(i)){n=!1;break}n&&(this.chunkBuildWaiters.splice(e,1),t.resolve())}}async buildChunkMeshesBatch(e){const t=this.nextWorkerRequestId++;return new Promise(n=>{const i=r=>{const o=r.data;o.type!=="built_chunks"||o.requestId!==t||(this.chunkMesherWorker.removeEventListener("message",i),n(o.results))};this.chunkMesherWorker.addEventListener("message",i),this.chunkMesherWorker.postMessage({type:"build_chunks",requestId:t,chunkIds:e})})}async syncChunkMesherWorkerWorld(){if(!this.atlas)return;const e=this.nextWorkerRequestId++,t=this.atlasSnapshotCache??this.atlas.toSnapshot();await this.postChunkMesherWorkerRequest(e,{type:"sync_world",requestId:e,world:this.world.toSnapshot(),atlas:t})}async syncChunkMesherWorkerChunks(e){if(!this.atlas||e.length===0)return;const t=[...new Set(e)],n=this.nextWorkerRequestId++;await this.postChunkMesherWorkerRequest(n,{type:"update_world_chunks",requestId:n,chunks:t.map(i=>({chunkId:i,snapshot:this.world.getChunkSnapshot(i)}))})}async postChunkMesherWorkerRequest(e,t){await new Promise(n=>{const i=r=>{const o=r.data;o.type!=="worker_ack"||o.requestId!==e||(this.chunkMesherWorker.removeEventListener("message",i),n())};this.chunkMesherWorker.addEventListener("message",i),this.chunkMesherWorker.postMessage(t)})}loadSkyboxTexture(e){return new Promise((t,n)=>{const i=this.cubeTextureLoader.load([...e],()=>t(i),void 0,r=>n(r));i.colorSpace=vt})}createSkyboxMesh(e){const t=new Et(new Gn(1,1,1),e);return t.renderOrder=-1e3,t.frustumCulled=!1,t.matrixAutoUpdate=!1,t.matrixWorldAutoUpdate=!1,t}disposeSkyboxMesh(){if(!this.skyboxMesh)return;this.scene.remove(this.skyboxMesh),this.skyboxMesh.geometry.dispose();const e=this.skyboxMesh.material;e instanceof Cu&&e.map.dispose(),e.dispose(),this.skyboxMesh=null}ensurePlaceholderSkybox(){this.skyboxMesh instanceof Et&&this.skyboxMesh.material instanceof Ru||(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new Ru),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh))}async loadSkybox(e){const t=e===Mu,n=Array.isArray(e)?[...e]:[`${e}/+x.png`,`${e}/-x.png`,`${e}/+y.png`,`${e}/-y.png`,`${e}/+z.png`,`${e}/-z.png`],i=this.loadSkyboxTexture(n);this.pendingSkyboxTexture=i,this.ensurePlaceholderSkybox();let r=null;try{r=await i}catch(o){if(console.error(o),!t)try{r=await this.loadSkyboxTexture(Mu)}catch(a){console.error(a)}}this.pendingSkyboxTexture===i&&(this.pendingSkyboxTexture=null,r&&(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new Cu(r)),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh)))}updateSkybox(){this.skyboxMesh&&(this.camera.updateMatrixWorld(),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.skyboxMesh.position.copy(this.camera.position),this.skyboxMesh.updateMatrix(),this.skyboxMesh.matrixWorld.copy(this.skyboxMesh.matrix))}raycastBlocks(e,t,n){let i=Math.floor(e.x),r=Math.floor(e.y),o=Math.floor(e.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=a===0?Number.POSITIVE_INFINITY:Math.abs(1/t.x),u=l===0?Number.POSITIVE_INFINITY:Math.abs(1/t.y),d=c===0?Number.POSITIVE_INFINITY:Math.abs(1/t.z);let f=ma(e.x,t.x,i,a),m=ma(e.y,t.y,r,l),_=ma(e.z,t.z,o,c);if(this.world.hasBlock({x:i,y:r,z:o}))return{coordinate:{x:i,y:r,z:o},normal:{x:0,y:1,z:0}};let p=0,g={x:0,y:0,z:0};for(;p<=n;)if(f<m&&f<_?(i+=a,p=f,f+=h,g={x:-a,y:0,z:0}):m<_?(r+=l,p=m,m+=u,g={x:0,y:-l,z:0}):(o+=c,p=_,_+=d,g={x:0,y:0,z:-c}),this.world.hasBlock({x:i,y:r,z:o}))return{coordinate:{x:i,y:r,z:o},normal:g};return null}setToolMode(e){this.currentTool=e,this.toolToggleButton.classList.toggle("active",!0),this.toolToggleButton.innerHTML=`<span class="tool-slot-icon" aria-hidden="true">${this.getToolIconSvg(e)}</span>`,this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(e)),this.toolToggleButton.title=this.getToolLabel(e),e==="build"&&this.revealBlocksMenu(),this.updateStatus(`Tool changed to ${this.getToolLabel(e)}.`),this.pointerLocked&&this.updateHoverFromScreenCenter()}toggleToolMode(){this.setToolMode(this.currentTool==="build"?"erase":"build")}revealBlocksMenu(){this.setMobileSidebarOpen(!0);const e=this.sidebar.querySelector('[data-section="pattern"]');e&&!e.open&&(e.open=!0)}getToolLabel(e){switch(e){case"build":return"Build";case"erase":return"Erase"}}getToolIconSvg(e){switch(e){case"build":return`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>
        `;case"erase":return`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 7h12"></path>
            <path d="M9 7V5h6v2"></path>
            <path d="M8 10v7"></path>
            <path d="M12 10v7"></path>
            <path d="M16 10v7"></path>
            <path d="M7 7l1 12h8l1-12"></path>
          </svg>
        `}}async placeSingleBlock(){const e=this.hoveredPlacement;if(!e)return;const t=this.world.blockTypes.find(o=>o.id===this.selectedBlockTypeId);if(!t){this.updateStatus("No block pattern selected.");return}if(this.world.getBlockTypeId(e)===t.id)return;const n=this.world.getBlockTypeId(e),i=new Set([Ke.globalCoordinateToChunkId(e)]),r=this.captureChunkStates(i);this.world.setBlock(e,t.id),this.pushPatchUndoState(`Place ${t.name}`,r),this.markChunkIdsAutosaveDirty(i),await this.rebuildAffectedChunks([...this.world.getAffectedChunkIds(e,n,t.id)]),this.scheduleAutosave(),this.updateStatus(`Placed ${t.name} at ${ga(e)}.`)}async deleteSingleBlock(){const e=this.hoveredBlock;if(!e||!this.world.hasBlock(e))return;const t=this.world.getBlockTypeId(e),n=new Set([Ke.globalCoordinateToChunkId(e)]),i=this.captureChunkStates(n);this.world.deleteBlock(e),this.pushPatchUndoState(`Delete ${ga(e)}`,i),this.markChunkIdsAutosaveDirty(n),await this.rebuildAffectedChunks([...this.world.getAffectedChunkIds(e,t,0)]),this.scheduleAutosave(),this.updateStatus(`Deleted block at ${ga(e)}.`)}pushHistoryEntry(e){this.undoStack.push(e),this.undoStack.length>_y&&this.undoStack.shift(),this.redoStack=[],this.updateHistoryButtons()}pushSnapshotUndoState(e,t,n){this.pushHistoryEntry({kind:"snapshot",label:e,before:t,after:n})}pushPatchUndoState(e,t,n=[]){const i=[];for(const[o,a]of t){const l=this.world.getChunkSnapshot(o);this.chunkSnapshotsEqual(a,l)||i.push({chunkId:o,before:a,after:l})}const r=n.filter(o=>this.entityDiffChanged(o));return i.length===0&&r.length===0?!1:(this.pushHistoryEntry({kind:"patch",label:e,chunks:i,...r.length>0?{entities:r}:{}}),!0)}serializeHistoryEntry(e){return e.kind==="snapshot"?{kind:"snapshot",label:e.label,beforeWorld:this.snapshotToWorldMap(e.before),afterWorld:this.snapshotToWorldMap(e.after)}:{kind:"patch",label:e.label,chunks:e.chunks.map(t=>({chunkId:t.chunkId,before:this.serializeChunkSnapshot(t.before),after:this.serializeChunkSnapshot(t.after)})),...e.entities?{entities:e.entities.map(t=>this.serializeEntityHistoryDiff(t))}:{}}}deserializeHistoryEntry(e){return e.kind==="snapshot"?{kind:"snapshot",label:e.label,before:this.worldMapToSnapshot(e.beforeWorld),after:this.worldMapToSnapshot(e.afterWorld)}:{kind:"patch",label:e.label,chunks:e.chunks.map(t=>({chunkId:t.chunkId,before:this.deserializeChunkSnapshot(t.before),after:this.deserializeChunkSnapshot(t.after)})),...e.entities?{entities:e.entities.map(t=>this.deserializeEntityHistoryDiff(t))}:{}}}captureChunkStates(e){const t=new Map;for(const n of new Set(e))t.set(n,this.world.getChunkSnapshot(n));return t}serializeChunkSnapshot(e){return e?{chunkId:e.chunkId,originCoordinate:{...e.originCoordinate},blocks:Array.from(e.blocks),rotations:Array.from(e.rotations)}:null}deserializeChunkSnapshot(e){return e?{chunkId:e.chunkId,originCoordinate:{...e.originCoordinate},blocks:new Uint16Array(e.blocks),rotations:new Uint8Array(e.rotations)}:null}serializeEntityHistoryDiff(e){return{...e,before:this.cloneEntityValue(e.before),after:this.cloneEntityValue(e.after)}}deserializeEntityHistoryDiff(e){return{...e,before:this.cloneEntityValue(e.before),after:this.cloneEntityValue(e.after)}}chunkSnapshotsEqual(e,t){return!e||!t?e===t:e.chunkId===t.chunkId&&e.originCoordinate.x===t.originCoordinate.x&&e.originCoordinate.y===t.originCoordinate.y&&e.originCoordinate.z===t.originCoordinate.z&&Gr(e.blocks,t.blocks)&&Gr(e.rotations,t.rotations)}entityDiffChanged(e){return e.hasBefore!==e.hasAfter?!0:!e.hasBefore&&!e.hasAfter?!1:JSON.stringify(e.before)!==JSON.stringify(e.after)}cloneEntityValue(e){return e==null?e:typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}snapshotToWorldMap(e){const t={};for(const n of e.chunks)for(let i=0;i<n.blocks.length;i++){const r=n.blocks[i];if(r===0)continue;const o=Ke.blockIndexToLocalCoordinate(i),a=`${n.originCoordinate.x+o.x},${n.originCoordinate.y+o.y},${n.originCoordinate.z+o.z}`,l=n.rotations[i]??0;t[a]=l===0?r:{i:r,r:l}}return{blockTypes:e.blockTypes.map(n=>({id:n.id,name:n.name,textureUri:n.textureUri,isLiquid:n.isLiquid,lightLevel:n.lightLevel,...n.trimeshIndices?{trimeshIndices:Array.from(n.trimeshIndices)}:{},...n.trimeshVertices?{trimeshVertices:Array.from(n.trimeshVertices)}:{},durability:n.durability,customColliderOptions:n.customColliderOptions,isCustom:n.isCustom,isMultiTexture:n.isMultiTexture})),blocks:t,...e.entities?{entities:{...e.entities}}:{}}}worldMapToSnapshot(e){const t=new nu;return t.load(e,xi),t.toSnapshot()}async undo(){var t;const e=this.undoStack.pop();if(!e){this.updateHistoryButtons(),this.updateStatus("Nothing to undo.");return}this.redoStack.push(e),this.updateHistoryButtons(),await this.applyHistoryEntry(e,"before"),this.scheduleAutosave(),this.rebuildEntitiesUi(),e.kind==="patch"&&((t=e.entities)!=null&&t.length)&&this.rebuildEntityMarkers(),this.updateStatus(`Undid: ${e.label}.`)}async redo(){var t;const e=this.redoStack.pop();if(!e){this.updateHistoryButtons(),this.updateStatus("Nothing to redo.");return}this.undoStack.push(e),this.updateHistoryButtons(),await this.applyHistoryEntry(e,"after"),this.scheduleAutosave(),this.rebuildEntitiesUi(),e.kind==="patch"&&((t=e.entities)!=null&&t.length)&&this.rebuildEntityMarkers(),this.updateStatus(`Redid: ${e.label}.`)}async applyHistoryEntry(e,t){if(e.kind==="snapshot"){const r=t==="before"?e.before:e.after,o=t==="before"?e.after:e.before;this.markFullWorldAutosaveDirty(),await this.restoreSnapshot(r,o);return}const n=t==="before"?"before":"after",i=e.chunks.map(r=>r.chunkId);for(const r of e.chunks)this.world.applyChunkSnapshot(r.chunkId,r[n]);if(this.markChunkIdsAutosaveDirty(i),e.entities){const r=this.world.entities;for(const o of e.entities){const a=t==="before"?o.hasBefore:o.hasAfter,l=t==="before"?o.before:o.after;a?r[o.key]=this.cloneEntityValue(l):delete r[o.key]}this.world.setEntities(Object.keys(r).length>0?r:void 0),this.markEntitiesAutosaveDirty()}await this.rebuildAffectedChunks(this.expandChunkIdsForLighting(i))}markChunkIdsAutosaveDirty(e){if(!this.autosaveFullWorldDirty)for(const t of e)this.autosaveDirtyChunkIds.add(t)}markEntitiesAutosaveDirty(){this.autosaveEntitiesDirty=!0}markFullWorldAutosaveDirty(){this.autosaveFullWorldDirty=!0,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!0}resetAutosaveDirtyState(){this.autosaveFullWorldDirty=!1,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!1}async restoreSnapshot(e,t){const n=!this.areSnapshotsBlockTypeCompatible(t,e),i=n?[]:this.expandChunkIdsForLighting(this.getChangedChunkIds(t,e));if(this.world.loadSnapshot(e),n){await this.rebuildAllChunkMeshes();return}await this.rebuildAffectedChunks(i)}areSnapshotsBlockTypeCompatible(e,t){if(e.blockTypes.length!==t.blockTypes.length)return!1;for(let n=0;n<e.blockTypes.length;n++){const i=e.blockTypes[n],r=t.blockTypes[n];if(i.id!==r.id||i.name!==r.name||i.textureUri!==r.textureUri||i.isLiquid!==r.isLiquid||i.isMultiTexture!==r.isMultiTexture)return!1}return!0}getChangedChunkIds(e,t){const n=new Set,i=new Map(e.chunks.map(o=>[o.chunkId,o])),r=new Map(t.chunks.map(o=>[o.chunkId,o]));for(const o of new Set([...i.keys(),...r.keys()])){const a=i.get(o),l=r.get(o);if(!a||!l){n.add(o);continue}(!Gr(a.blocks,l.blocks)||!Gr(a.rotations,l.rotations))&&n.add(o)}return[...n]}expandChunkIdsForLighting(e){const t=new Set;for(const n of e){const i=Ke.chunkIdToOriginCoordinate(n);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)t.add(Ke.originCoordinateToChunkId({x:i.x+a*16,y:i.y+r*16,z:i.z+o*16}))}return[...t]}updateStatus(e){}updateDebugPanel(){const e=this.renderer.info,t=performance.memory;this.debugSummaryLine.innerHTML=`<strong>FPS:</strong> ${this.fps} <strong>Chunks:</strong> ${this.world.chunkIds.length} <strong>Chunk Batches:</strong> ${this.chunkBatchRenderer.batchMeshCount}`,this.debugRenderLine.innerHTML=`<strong>Draw Calls:</strong> ${e.render.calls} <strong>Triangles:</strong> ${e.render.triangles}`,this.debugSceneLine.innerHTML=`<strong>Geometries:</strong> ${e.memory.geometries} <strong>Textures:</strong> ${e.memory.textures}`,t?this.debugMemoryLine.innerHTML=`<strong>Heap:</strong> ${Lu(t.usedJSHeapSize)} / ${Lu(t.totalJSHeapSize)}`:this.debugMemoryLine.innerHTML="<strong>Heap:</strong> unavailable in this browser"}updateViewDistanceVisibility(){const e=this.getCurrentViewDistance(),t=this.getCurrentLodTransitionDistance(),n=e*e,i=t*t;Or.set(this.camera.position.x,this.camera.position.z),gu.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),Br.setFromProjectionMatrix(gu),this.chunkBatchRenderer.applyViewDistanceVisibility(Or,i,n,Br);for(const r of this.entityRenderObjects){if(r instanceof jr){const u=r.boundingBox,d=!u||Fy(u,Or)<=n,f=!r.boundingSphere||Br.intersectsSphere(Cs.copy(r.boundingSphere).applyMatrix4(r.matrixWorld)),m=d&&f,_=r.parent!==null;m&&!_?this.entityLayer.add(r):!m&&_&&this.entityLayer.remove(r);continue}const o=Number(r.userData.visibilityRadius??1);Cs.center.copy(r.getWorldPosition(Ki)),Cs.radius=o;const a=Oy(Cs.center,Or)<=n,l=Br.intersectsSphere(Cs),c=a&&l,h=r.parent!==null;c&&!h?this.entityLayer.add(r):!c&&h&&this.entityLayer.remove(r)}}updateSpectatorRotation(e,t){this.spectatorPitch=Math.max(-xu,Math.min(xu,this.spectatorPitch+t*_u)),this.spectatorYaw-=e*_u,this.applySpectatorCameraOrientation(),this.scheduleViewStateAutosave()}applySpectatorCameraOrientation(){this.camera.rotation.set(-this.spectatorPitch,this.spectatorYaw,0,"YXZ")}updateSpectatorCamera(e){if(!this.pointerLocked&&!this.mobileControlsEnabled)return!1;const t=hy*e;da.copy(this.camera.rotation),kr.set(0,0,-1).applyEuler(da),zr.set(1,0,0).applyEuler(da);let n=!1;return this.pressedKeys.has("key_w")&&(this.camera.position.addScaledVector(kr,t),n=!0),this.pressedKeys.has("key_s")&&(this.camera.position.addScaledVector(kr,-t),n=!0),this.pressedKeys.has("key_a")&&(this.camera.position.addScaledVector(zr,-t),n=!0),this.pressedKeys.has("key_d")&&(this.camera.position.addScaledVector(zr,t),n=!0),this.pressedKeys.has("space")&&(this.camera.position.y+=t,n=!0),this.pressedKeys.has("shift")&&(this.camera.position.y-=t,n=!0),this.mobileControlsEnabled&&(Math.abs(this.mobileMoveInputY)>.01&&(this.camera.position.addScaledVector(kr,-this.mobileMoveInputY*t),n=!0),Math.abs(this.mobileMoveInputX)>.01&&(this.camera.position.addScaledVector(zr,this.mobileMoveInputX*t),n=!0)),n&&this.scheduleViewStateAutosave(),n}getCurrentBlockTypeDefinitions(){return this.world.toJson().blockTypes??xi}resolveTemplateBlockIds(e){var i;const t=(...r)=>{var a;const o=r.map(l=>l.toLowerCase());return(a=e.find(l=>o.includes(l.name.toLowerCase())))==null?void 0:a.id},n=((i=e[0])==null?void 0:i.id)??1;return{accent:t("bricks","andesite")??n,grass:t("grass-block","grass-block-pine","grass-flower-block","grass-flower-block-pine")??n,leaves:t("oak-leaves","birch-leaves","spruce-leaves")??n,sand:t("sand")??n,stone:t("stone","andesite","cobblestone")??n,wall:t("cobblestone","andesite","stone")??n,water:t("water")??n,wood:t("oak-log","spruce-log")??n}}getEntityLabel(e){if(e&&typeof e=="object"){const t=e,n=t.name??t.modelUri??t.modelLoopedAnimations??t.type;if(typeof n=="string"&&n.length>0)return n}return"entity"}async addEntityAtHover(){const e=this.hoveredPlacement??this.hoveredBlock;if(!e){this.updateStatus("No hover target for entity placement.");return}const t=`${e.x+.5},${e.y+.5},${e.z+.5}`,n=this.cloneEntityValue(void 0);this.world.setEntity(t,{name:"entity"}),this.pushPatchUndoState("Add entity",new Map,[{key:t,before:n,after:this.cloneEntityValue(this.world.entities[t]),hasBefore:!1,hasAfter:!0}]),this.selectedEntityKey=t,this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),this.rebuildEntityMarkers(),this.scheduleAutosave(),this.updateStatus(`Added entity at ${t}.`)}async saveSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}try{const e=JSON.parse(this.entityOptionsInput.value||"{}"),t=this.world.entities,n=this.cloneEntityValue(t[this.selectedEntityKey]);this.world.setEntity(this.selectedEntityKey,e),this.pushPatchUndoState("Edit entity",new Map,[{key:this.selectedEntityKey,before:n,after:this.cloneEntityValue(e),hasBefore:!0,hasAfter:!0}]),this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),this.rebuildEntityMarkers(),this.scheduleAutosave(),this.updateStatus(`Saved entity at ${this.selectedEntityKey}.`)}catch(e){this.updateStatus(`Invalid entity JSON: ${e.message}`)}}async deleteSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}const e=this.selectedEntityKey,t=this.world.entities,n=this.cloneEntityValue(t[e]);this.world.deleteEntity(e),this.pushPatchUndoState("Delete entity",new Map,[{key:e,before:n,after:this.cloneEntityValue(void 0),hasBefore:!0,hasAfter:!1}]),this.markEntitiesAutosaveDirty(),this.selectedEntityKey=null,this.rebuildEntitiesUi(),this.rebuildEntityMarkers(),this.scheduleAutosave(),this.updateStatus(`Deleted entity at ${e}.`)}scheduleAutosave(){this.autosaveTimeoutId!==null&&window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=window.setTimeout(()=>{this.autosaveTimeoutId=null,this.flushAutosave()},Su)}scheduleViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=window.setTimeout(()=>{this.viewStateAutosaveTimeoutId=null,this.flushViewStateAutosave()},Su)}async flushAutosave(){this.autosaveTimeoutId!==null&&(window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=null);const e={fileName:this.fileName,blockTypes:this.world.blockTypes.map(r=>({id:r.id,name:r.name,textureUri:r.textureUri,isLiquid:r.isLiquid,lightLevel:r.lightLevel,...r.trimeshIndices?{trimeshIndices:Array.from(r.trimeshIndices)}:{},...r.trimeshVertices?{trimeshVertices:Array.from(r.trimeshVertices)}:{},durability:r.durability,customColliderOptions:r.customColliderOptions,isCustom:r.isCustom,isMultiTexture:r.isMultiTexture})),redoStack:this.redoStack.map(r=>this.serializeHistoryEntry(r)),undoStack:this.undoStack.map(r=>this.serializeHistoryEntry(r))},t=this.autosaveFullWorldDirty?this.world.chunkIds.map(r=>this.world.getChunkSnapshot(r)).filter(r=>r!==null).map(r=>({chunkId:r.chunkId,originCoordinate:r.originCoordinate,blocks:r.blocks,rotations:r.rotations})):[],n=this.autosaveFullWorldDirty?[]:[...this.autosaveDirtyChunkIds].map(r=>{const o=this.world.getChunkSnapshot(r);return{chunkId:r,snapshot:o?{chunkId:o.chunkId,originCoordinate:o.originCoordinate,blocks:o.blocks,rotations:o.rotations}:null}}),i=this.autosaveEntitiesDirty||this.autosaveFullWorldDirty?Object.entries(this.world.entities).map(([r,o])=>({key:r,options:o})):[];try{this.autosaveFullWorldDirty?await Dy(e,t,i):await Ny(e,n,this.autosaveEntitiesDirty?i:null),localStorage.removeItem(Rs),this.resetAutosaveDirtyState()}catch(r){console.error(r);try{const o={fileName:this.fileName,redoStack:e.redoStack,undoStack:e.undoStack,world:this.world.toJson()};localStorage.setItem(Rs,JSON.stringify(o))}catch(o){console.error(o)}}}async flushViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&(window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=null);const e={camera:{pitch:this.spectatorPitch,position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},yaw:this.spectatorYaw},lighting:{ambient:this.lightingAmbient,fogColorHex:this.fogColorHex,skyboxIntensity:this.skyboxUiIntensity},menuOpen:this.mobileSidebarOpen,paletteFilter:this.paletteFilter,resolutionPreset:this.resolutionPreset,viewDistance:{customDistance:this.viewDistanceCustomDistance,preset:this.viewDistancePreset}};try{await Iy(e)}catch(t){console.error(t)}}buildExploreUrl(){const e=new URL(fy,window.location.origin);return e.searchParams.set(my,"solo"),e.searchParams.set(gy,"peaceful"),e.searchParams.set(py,"editor"),e}async openExploreMode(){const e=window.open("about:blank","_blank");if(!e){this.updateStatus("Failed to open Explore tab. Allow pop-ups and try again.");return}e.document.title="Preparing Explore...",this.updateStatus("Saving map for Explore...");try{await this.flushAutosave(),await this.flushViewStateAutosave(),e.location.href=this.buildExploreUrl().toString(),this.updateStatus("Opened Explore in a new tab.")}catch(t){e.close(),this.updateStatus(`Failed to open Explore: ${t.message}`)}}async restoreAutosavedWorld(){var r;let e=null,t=null;try{t=await Uy(),t||(e=JSON.parse(localStorage.getItem(Rs)??"null"))}catch{e=null,t=null}const n=(t==null?void 0:t.world)??(e==null?void 0:e.world),i=t==null?void 0:t.meta;if(!n)return!1;try{return this.world.load(n,xi),this.selectedBlockTypeId=((r=this.world.blockTypes[0])==null?void 0:r.id)??this.selectedBlockTypeId,this.fileName=(i==null?void 0:i.fileName)||(e==null?void 0:e.fileName)||"untitled-world-map.json",this.undoStack=((i==null?void 0:i.undoStack)??(e==null?void 0:e.undoStack)??[]).map(o=>this.deserializeHistoryEntry(o)),this.redoStack=((i==null?void 0:i.redoStack)??(e==null?void 0:e.redoStack)??[]).map(o=>this.deserializeHistoryEntry(o)),this.updateHistoryButtons(),this.resetAutosaveDirtyState(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.updateStatus(`Restored autosave for ${this.fileName}.`),!0}catch(o){return console.error(o),localStorage.removeItem(Rs),Iu(),!1}}updateHistoryButtons(){this.undoButton.disabled=this.undoStack.length===0,this.redoButton.disabled=this.redoStack.length===0}async restoreAutosavedViewState(){var t,n;let e=null;try{e=await Ly()}catch{e=null}e&&(this.spectatorPitch=e.camera.pitch,this.spectatorYaw=e.camera.yaw,this.camera.position.set(e.camera.position.x,e.camera.position.y,e.camera.position.z),this.applySpectatorCameraOrientation(),this.setMobileSidebarOpen(e.menuOpen??!1,!1),this.paletteFilter=e.paletteFilter??"",this.paletteFilterInput.value=this.paletteFilter,this.resolutionPreset=e.resolutionPreset??"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.viewDistancePreset=((t=e.viewDistance)==null?void 0:t.preset)??"MEDIUM",this.viewDistanceCustomDistance=((n=e.viewDistance)==null?void 0:n.customDistance)??yi.MEDIUM.distance,this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.lightingAmbient=e.lighting.ambient,this.fogColorHex=e.lighting.fogColorHex||"#ffffff",this.skyboxUiIntensity=e.lighting.skyboxIntensity,this.syncLightingInputs(),this.applyLightingSettings())}}function Qs(){return new Promise((s,e)=>{const t=indexedDB.open(xy,1);t.onerror=()=>e(t.error),t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains(rn)||n.createObjectStore(rn)},t.onsuccess=()=>s(t.result)})}async function Dd(s,e){const t=await Qs();try{return await new Promise((n,i)=>{const r=t.transaction(rn,s),o=r.objectStore(rn),a=e(o);a.onerror=()=>i(a.error),a.onsuccess=()=>n(a.result),r.onerror=()=>i(r.error)})}finally{t.close()}}function Ry(s,e){return Dd("readwrite",t=>t.put(e,s)).then(()=>{})}async function Nd(s){return await Dd("readonly",t=>t.get(s))??null}function Iy(s){return Ry(Ld,s)}function Ly(){return Nd(Ld)}function Ud(s){return`chunk:${s}`}function Fd(s){return`entity:${s}`}async function Py(s,e){const t=await Qs();try{await new Promise((n,i)=>{const r=t.transaction(rn,s),o=r.objectStore(rn),a=o.openCursor();a.onerror=()=>i(a.error),a.onsuccess=()=>{const l=a.result;if(!l){n();return}Promise.resolve(e(l.key,l.value,o)).then(()=>l.continue()).catch(i)},r.onerror=()=>i(r.error)})}finally{t.close()}}async function Dy(s,e,t){const n=await Qs();try{await new Promise((i,r)=>{const o=n.transaction(rn,"readwrite"),a=o.objectStore(rn),l=a.clear();l.onerror=()=>r(l.error),l.onsuccess=()=>{a.put(s,dc);for(const c of e)a.put(c,Ud(c.chunkId));for(const c of t)a.put(c,Fd(c.key));o.oncomplete=()=>i()},o.onerror=()=>r(o.error)})}finally{n.close()}}async function Ny(s,e,t){const n=await Qs();try{await new Promise((i,r)=>{const o=n.transaction(rn,"readwrite"),a=o.objectStore(rn);a.put(s,dc);for(const l of e){const c=Ud(l.chunkId);l.snapshot?a.put(l.snapshot,c):a.delete(c)}if(t){const l=a.openCursor();l.onerror=()=>r(l.error),l.onsuccess=()=>{const c=l.result;if(!c){for(const h of t)a.put(h,Fd(h.key));return}typeof c.key=="string"&&c.key.startsWith("entity:")&&c.delete(),c.continue()}}o.oncomplete=()=>i(),o.onerror=()=>r(o.error)})}finally{n.close()}}async function Uy(){const s=await Nd(dc);if(!s)return null;const e={},t={};return await Py("readonly",(n,i)=>{if(typeof n=="string"){if(n.startsWith("chunk:")){const r=i;for(let o=0;o<r.blocks.length;o++){const a=r.blocks[o];if(a===0)continue;const l=Ke.blockIndexToLocalCoordinate(o),c=`${r.originCoordinate.x+l.x},${r.originCoordinate.y+l.y},${r.originCoordinate.z+l.z}`,h=r.rotations[o]??0;e[c]=h===0?a:{i:a,r:h}}return}if(n.startsWith("entity:")){const r=i;t[r.key]=r.options}}}),{meta:s,world:{blockTypes:s.blockTypes,blocks:e,...Object.keys(t).length>0?{entities:t}:{}}}}async function Iu(){const s=await Qs();try{await new Promise((e,t)=>{const n=s.transaction(rn,"readwrite"),r=n.objectStore(rn).clear();r.onerror=()=>t(r.error),r.onsuccess=()=>e(),n.onerror=()=>t(n.error)})}finally{s.close()}}function ma(s,e,t,n){if(n===0||e===0)return Number.POSITIVE_INFINITY;const i=n>0?t+1:t;return Math.abs((i-s)/e)}function Lu(s){return`${(s/(1024*1024)).toFixed(1)} MB`}function ga(s){return`${s.x},${s.y},${s.z}`}function Gr(s,e){if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0}function Pu(s){switch(s){case"KeyW":return"key_w";case"KeyA":return"key_a";case"KeyS":return"key_s";case"KeyD":return"key_d";case"Space":return"space";case"ShiftLeft":case"ShiftRight":return"shift";default:return s.toLowerCase()}}function Du(s){const e=s.split(",");if(e.length!==3)return null;const t=Number(e[0]),n=Number(e[1]),i=Number(e[2]);return!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(i)?null:{x:t,y:n,z:i}}function Fy(s,e){const t=Math.max(s.min.x,Math.min(e.x,s.max.x)),n=Math.max(s.min.z,Math.min(e.y,s.max.z)),i=e.x-t,r=e.y-n;return i*i+r*r}function Oy(s,e){const t=s.x-e.x,n=s.z-e.y;return t*t+n*n}function By(s){if(ji.set(1,1,1),!s||typeof s!="object")return ji;const e=s,t=e.modelScale??e.scale;if(typeof t=="number")return ji.setScalar(t),ji;if(t&&typeof t=="object"){const n=t;ji.set(Number(n.x??1)||1,Number(n.y??1)||1,Number(n.z??1)||1)}return ji}function ky(s){if(As.identity(),!s||typeof s!="object")return As;const t=s.rotation;if(!t||typeof t!="object")return As;const n=t;return typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"&&typeof n.w=="number"&&As.set(n.x,n.y,n.z,n.w),As}new Cy(Id);
