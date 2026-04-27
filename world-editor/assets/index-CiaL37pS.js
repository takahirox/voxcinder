var Am=Object.defineProperty;var wm=(r,t,e)=>t in r?Am(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var T=(r,t,e)=>wm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="183",Cm=0,bu=1,Rm=2,ia=1,Im=2,Lr=3,rn=0,We=1,Ge=2,ii=0,Us=1,Eu=2,Tu=3,Au=4,Lm=5,Zi=100,Pm=101,Dm=102,Bm=103,Um=104,Nm=200,Fm=201,km=202,Om=203,$l=204,Yl=205,zm=206,Vm=207,Hm=208,Gm=209,Wm=210,Xm=211,qm=212,$m=213,Ym=214,Kl=0,Zl=1,jl=2,Hs=3,Jl=4,Ql=5,tc=6,ec=7,lp=0,Km=1,Zm=2,Fn=0,cp=1,hp=2,up=3,dp=4,fp=5,pp=6,mp=7,wu="attached",jm="detached",gp=300,es=301,Gs=302,Va=303,Ha=304,Ra=306,Ws=1e3,Bn=1001,ma=1002,Te=1003,_p=1004,Pr=1005,Ce=1006,sa=1007,ti=1008,sn=1009,xp=1010,yp=1011,$r=1012,wh=1013,zn=1014,un=1015,ri=1016,Ch=1017,Rh=1018,Yr=1020,vp=35902,Mp=35899,Sp=1021,bp=1022,dn=1023,oi=1026,Qi=1027,Ih=1028,Lh=1029,Xs=1030,Ph=1031,Dh=1033,ra=33776,oa=33777,aa=33778,la=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37488,hc=37489,uc=37490,dc=37491,fc=37808,pc=37809,mc=37810,gc=37811,_c=37812,xc=37813,yc=37814,vc=37815,Mc=37816,Sc=37817,bc=37818,Ec=37819,Tc=37820,Ac=37821,wc=36492,Cc=36494,Rc=36495,Ic=36283,Lc=36284,Pc=36285,Dc=36286,Kr=2300,Zr=2301,Ga=2302,Cu=2303,Ru=2400,Iu=2401,Lu=2402,Jm=2500,Qm=0,Ep=1,Bc=2,tg=3200,Tp=0,eg=1,Si="",Ee="srgb",Ye="srgb-linear",ga="linear",re="srgb",os=7680,Pu=519,ng=512,ig=513,sg=514,Bh=515,rg=516,og=517,Uh=518,ag=519,Uc=35044,cn=35048,Ei="300 es",Un=2e3,jr=2001;function lg(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Jr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hg(){const r=Jr("canvas");return r.style.display="block",r}const Du={};function _a(...r){const t="THREE."+r.shift();console.log(t,...r)}function Ap(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function xt(...r){r=Ap(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Ut(...r){r=Ap(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function xa(...r){const t=r.join(" ");t in Du||(Du[t]=!0,xt(...r))}function ug(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const dg={[Kl]:Zl,[jl]:tc,[Jl]:ec,[Hs]:Ql,[Zl]:Kl,[tc]:jl,[ec]:Jl,[Ql]:Hs};class js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bu=1234567;const Ns=Math.PI/180,qs=180/Math.PI;function En(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[r&255]+Ve[r>>8&255]+Ve[r>>16&255]+Ve[r>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Kt(r,t,e){return Math.max(t,Math.min(e,r))}function Nh(r,t){return(r%t+t)%t}function fg(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function pg(r,t,e){return r!==t?(e-r)/(t-r):0}function Nr(r,t,e){return(1-e)*r+e*t}function mg(r,t,e,n){return Nr(r,t,1-Math.exp(-e*n))}function gg(r,t=1){return t-Math.abs(Nh(r,t*2)-t)}function _g(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function xg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function yg(r,t){return r+Math.floor(Math.random()*(t-r+1))}function vg(r,t){return r+Math.random()*(t-r)}function Mg(r){return r*(.5-Math.random())}function Sg(r){r!==void 0&&(Bu=r);let t=Bu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bg(r){return r*Ns}function Eg(r){return r*qs}function Tg(r){return(r&r-1)===0&&r!==0}function Ag(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cg(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rg={DEG2RAD:Ns,RAD2DEG:qs,generateUUID:En,clamp:Kt,euclideanModulo:Nh,mapLinear:fg,inverseLerp:pg,lerp:Nr,damp:mg,pingpong:gg,smoothstep:_g,smootherstep:xg,randInt:yg,randFloat:vg,randFloatSpread:Mg,seededRandom:Sg,degToRad:bg,radToDeg:Eg,isPowerOfTwo:Tg,ceilPowerOfTwo:Ag,floorPowerOfTwo:wg,setQuaternionFromProperEuler:Cg,normalize:oe,denormalize:bn};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(u!==_||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const y=Math.acos(p),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new L,Uu=new Tn;class zt{constructor(t,e,n,i,s,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],S=i[4],M=i[7],A=i[2],C=i[5],w=i[8];return s[0]=o*_+a*y+l*A,s[3]=o*p+a*S+l*C,s[6]=o*g+a*M+l*w,s[1]=c*_+h*y+u*A,s[4]=c*p+h*S+u*C,s[7]=c*g+h*M+u*w,s[2]=d*_+f*y+m*A,s[5]=d*p+f*S+m*C,s[8]=d*g+f*M+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new zt,Nu=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ig(){const r={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===re&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(i.r=Fs(i.r),i.g=Fs(i.g),i.b=Fs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?ga:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return xa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return xa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ye]:{primaries:t,whitePoint:n,transfer:ga,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),r}const jt=Ig();function si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class Lg{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=Jr("canvas")),as.width=t.width,as.height=t.height;const i=as.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pg=0;class Fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qa(i[o].image)):s.push(qa(i[o]))}else s=qa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let Dg=0;const $a=new L;class Re extends js{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Bn,i=Bn,s=Ce,o=ti,a=dn,l=sn,c=Re.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=En(),this.name="",this.source=new Fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=gp;Re.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(f+1)/2,A=(g+1)/2,C=(h+d)/4,w=(u+_)/4,x=(m+p)/4;return S>M&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=w/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=x/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=x/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bg extends js{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new Re(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Fh(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Bg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wp extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ug extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bt{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,m,_,p){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,_,p)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),s=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ng,t,Fg)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),hi.crossVectors(n,Je),hi.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),hi.crossVectors(n,Je)),hi.normalize(),so.crossVectors(Je,hi),i[0]=hi.x,i[4]=so.x,i[8]=Je.x,i[1]=hi.y,i[5]=so.y,i[9]=Je.y,i[2]=hi.z,i[6]=so.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],S=n[7],M=n[11],A=n[15],C=i[0],w=i[4],x=i[8],b=i[12],V=i[1],I=i[5],k=i[9],O=i[13],N=i[2],F=i[6],H=i[10],z=i[14],tt=i[3],J=i[7],st=i[11],ct=i[15];return s[0]=o*C+a*V+l*N+c*tt,s[4]=o*w+a*I+l*F+c*J,s[8]=o*x+a*k+l*H+c*st,s[12]=o*b+a*O+l*z+c*ct,s[1]=h*C+u*V+d*N+f*tt,s[5]=h*w+u*I+d*F+f*J,s[9]=h*x+u*k+d*H+f*st,s[13]=h*b+u*O+d*z+f*ct,s[2]=m*C+_*V+p*N+g*tt,s[6]=m*w+_*I+p*F+g*J,s[10]=m*x+_*k+p*H+g*st,s[14]=m*b+_*O+p*z+g*ct,s[3]=y*C+S*V+M*N+A*tt,s[7]=y*w+S*I+M*F+A*J,s[11]=y*x+S*k+M*H+A*st,s[15]=y*b+S*O+M*z+A*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],y=l*f-c*d,S=a*f-c*u,M=a*d-l*u,A=o*f-c*h,C=o*d-l*h,w=o*u-a*h;return e*(_*y-p*S+g*M)-n*(m*y-p*A+g*C)+i*(m*S-_*A+g*w)-s*(m*M-_*C+p*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],y=e*a-n*o,S=e*l-i*o,M=e*c-s*o,A=n*l-i*a,C=n*c-s*a,w=i*c-s*l,x=h*_-u*m,b=h*p-d*m,V=h*g-f*m,I=u*p-d*_,k=u*g-f*_,O=d*g-f*p,N=y*O-S*k+M*I+A*V-C*b+w*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return t[0]=(a*O-l*k+c*I)*F,t[1]=(i*k-n*O-s*I)*F,t[2]=(_*w-p*C+g*A)*F,t[3]=(d*C-u*w-f*A)*F,t[4]=(l*V-o*O-c*b)*F,t[5]=(e*O-i*V+s*b)*F,t[6]=(p*M-m*w-g*S)*F,t[7]=(h*w-d*M+f*S)*F,t[8]=(o*k-a*V+c*x)*F,t[9]=(n*V-e*k-s*x)*F,t[10]=(m*C-_*M+g*y)*F,t[11]=(u*M-h*C-f*y)*F,t[12]=(a*b-o*I-l*x)*F,t[13]=(e*I-n*b+i*x)*F,t[14]=(_*S-m*A-p*y)*F,t[15]=(h*A-u*S+d*y)*F,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,_=o*h,p=o*u,g=a*u,y=l*c,S=l*h,M=l*u,A=n.x,C=n.y,w=n.z;return i[0]=(1-(_+g))*A,i[1]=(f+M)*A,i[2]=(m-S)*A,i[3]=0,i[4]=(f-M)*C,i[5]=(1-(d+g))*C,i[6]=(p+y)*C,i[7]=0,i[8]=(m+S)*w,i[9]=(p-y)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let o=ls.set(i[0],i[1],i[2]).length();const a=ls.set(i[4],i[5],i[6]).length(),l=ls.set(i[8],i[9],i[10]).length();s<0&&(o=-o),_n.copy(this);const c=1/o,h=1/a,u=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Un,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Un)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===jr)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Un,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Un)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===jr)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new L,_n=new Bt,Ng=new L(0,0,0),Fg=new L(1,1,1),hi=new L,so=new L,Je=new L,ku=new Bt,Ou=new Tn;class pn{constructor(t=0,e=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Cp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kg=0;const zu=new L,cs=new Tn,qn=new Bt,ro=new L,sr=new L,Og=new L,zg=new Tn,Vu=new L(1,0,0),Hu=new L(0,1,0),Gu=new L(0,0,1),Wu={type:"added"},Vg={type:"removed"},hs={type:"childadded",child:null},Ya={type:"childremoved",child:null};class _e extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new L,e=new pn,n=new Tn,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new zt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(Hu,t)}rotateZ(t){return this.rotateOnAxis(Gu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(Hu,t)}translateZ(t){return this.translateOnAxis(Gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ro.copy(t):ro.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(sr,ro,this.up):qn.lookAt(ro,sr,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(qn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),hs.child=t,this.dispatchEvent(hs),hs.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vg),Ya.child=t,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,Og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,zg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new L(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ze extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hg={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Za(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Nh(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Za(o,s,t+1/3),this.g=Za(o,s,t),this.b=Za(o,s,t-1/3)}return jt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ee){function n(s){s!==void 0&&parseFloat(s)<1&&xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=Rp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return jt.workingToColorSpace(He.copy(this),t),Math.round(Kt(He.r*255,0,255))*65536+Math.round(Kt(He.g*255,0,255))*256+Math.round(Kt(He.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(He.copy(this),e);const n=He.r,i=He.g,s=He.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ee){jt.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(oo);const n=Nr(ui.h,oo.h,e),i=Nr(ui.s,oo.s,e),s=Nr(ui.l,oo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new ut;ut.NAMES=Rp;class Gg extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xn=new L,$n=new L,ja=new L,Yn=new L,us=new L,ds=new L,Xu=new L,Ja=new L,Qa=new L,tl=new L,el=new ge,nl=new ge,il=new ge;class hn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){xn.subVectors(i,e),$n.subVectors(n,e),ja.subVectors(t,e);const o=xn.dot(xn),a=xn.dot($n),l=xn.dot(ja),c=$n.dot($n),h=$n.dot(ja),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return el.setScalar(0),nl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,e),nl.fromBufferAttribute(t,n),il.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(el,s.x),o.addScaledVector(nl,s.y),o.addScaledVector(il,s.z),o}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),$n.subVectors(t,e),xn.cross($n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),xn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;us.subVectors(i,n),ds.subVectors(s,n),Ja.subVectors(t,n);const l=us.dot(Ja),c=ds.dot(Ja);if(l<=0&&c<=0)return e.copy(n);Qa.subVectors(t,i);const h=us.dot(Qa),u=ds.dot(Qa);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(us,o);tl.subVectors(t,s);const f=us.dot(tl),m=ds.dot(tl);if(m>=0&&f<=m)return e.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ds,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Xu.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Xu,a);const g=1/(p+_+d);return o=_*g,a=d*g,e.copy(n).addScaledVector(us,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ke{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),lo.subVectors(this.max,rr),fs.subVectors(t.a,rr),ps.subVectors(t.b,rr),ms.subVectors(t.c,rr),di.subVectors(ps,fs),fi.subVectors(ms,ps),Ri.subVectors(fs,ms);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ri.z,Ri.y,di.z,0,-di.x,fi.z,0,-fi.x,Ri.z,0,-Ri.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ri.y,Ri.x,0];return!sl(e,fs,ps,ms,lo)||(e=[1,0,0,0,1,0,0,0,1],!sl(e,fs,ps,ms,lo))?!1:(co.crossVectors(di,fi),e=[co.x,co.y,co.z],sl(e,fs,ps,ms,lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Kn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,ao=new ke,fs=new L,ps=new L,ms=new L,di=new L,fi=new L,Ri=new L,rr=new L,lo=new L,co=new L,Ii=new L;function sl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ii.fromArray(r,s);const a=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const we=new L,ho=new Gt;let Wg=0;class Jt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uc&&(t.usage=this.usage),t}}class Ip extends Jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lp extends Jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fn extends Jt{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Xg=new ke,or=new L,rl=new L;class Be{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(rl)),this.expandByPoint(or.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let qg=0;const on=new Bt,ol=new _e,gs=new L,Qe=new ke,ar=new ke,De=new L;class Ue extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lg(t)?Lp:Ip)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fn(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Be);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(Qe.min,ar.min),Qe.expandByPoint(De),De.addVectors(Qe.max,ar.max),Qe.expandByPoint(De)):(Qe.expandByPoint(ar.min),Qe.expandByPoint(ar.max))}Qe.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)De.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(De));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(t,c),De.add(gs)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new L,l[x]=new L;const c=new L,h=new L,u=new L,d=new Gt,f=new Gt,m=new Gt,_=new L,p=new L;function g(x,b,V){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,V),d.fromBufferAttribute(s,x),f.fromBufferAttribute(s,b),m.fromBufferAttribute(s,V),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[x].add(_),a[b].add(_),a[V].add(_),l[x].add(p),l[b].add(p),l[V].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,b=y.length;x<b;++x){const V=y[x],I=V.start,k=V.count;for(let O=I,N=I+k;O<N;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new L,M=new L,A=new L,C=new L;function w(x){A.fromBufferAttribute(i,x),C.copy(A);const b=a[x];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(C,b);const I=M.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,I)}for(let x=0,b=y.length;x<b;++x){const V=y[x],I=V.start,k=V.count;for(let O=I,N=I+k;O<N;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Jt(d,h,u)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $g{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uc,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new L;class kh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new kh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Yg=0;class On extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=En(),this.name="",this.type="Material",this.blending=Us,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Yl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){xt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$l&&(n.blendSrc=this.blendSrc),this.blendDst!==Yl&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Zn=new L,al=new L,uo=new L,pi=new L,ll=new L,fo=new L,cl=new L;class Ia{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){al.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(al);const s=t.distanceTo(e)*.5,o=-this.direction.dot(uo),a=pi.dot(this.direction),l=-pi.dot(uo),c=pi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(al).addScaledVector(uo,d),f}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,i,s){ll.subVectors(e,t),fo.subVectors(n,t),cl.crossVectors(ll,fo);let o=this.direction.dot(cl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const l=a*this.direction.dot(fo.crossVectors(pi,fo));if(l<0)return null;const c=a*this.direction.dot(ll.cross(pi));if(c<0||l+c>o)return null;const h=-a*pi.dot(cl);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nn extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qu=new Bt,Li=new Ia,po=new Be,$u=new L,mo=new L,go=new L,_o=new L,hl=new L,xo=new L,Yu=new L,yo=new L;class ve extends _e{constructor(t=new Ue,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){xo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(hl.fromBufferAttribute(u,t),o?xo.addScaledVector(hl,h):xo.addScaledVector(hl.sub(e),h))}e.add(xo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),Li.copy(t.ray).recast(t.near),!(po.containsPoint(Li.origin)===!1&&(Li.intersectSphere(po,$u)===null||Li.origin.distanceToSquared($u)>(t.far-t.near)**2))&&(qu.copy(s).invert(),Li.copy(t.ray).applyMatrix4(qu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,A=S;M<A;M+=3){const C=a.getX(M),w=a.getX(M+1),x=a.getX(M+2);i=vo(this,g,t,n,c,h,u,C,w,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const y=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);i=vo(this,o,t,n,c,h,u,y,S,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,A=S;M<A;M+=3){const C=M,w=M+1,x=M+2;i=vo(this,g,t,n,c,h,u,C,w,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const y=p,S=p+1,M=p+2;i=vo(this,o,t,n,c,h,u,y,S,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Kg(r,t,e,n,i,s,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===rn,a),l===null)return null;yo.copy(a),yo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(yo);return c<e.near||c>e.far?null:{distance:c,point:yo.clone(),object:r}}function vo(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,mo),r.getVertexPosition(l,go),r.getVertexPosition(c,_o);const h=Kg(r,t,e,n,mo,go,_o,Yu);if(h){const u=new L;hn.getBarycoord(Yu,mo,go,_o,u),i&&(h.uv=hn.getInterpolatedAttribute(i,a,l,c,u,new Gt)),s&&(h.uv1=hn.getInterpolatedAttribute(s,a,l,c,u,new Gt)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};hn.getNormal(mo,go,_o,d.normal),h.face=d,h.barycoord=u}return h}const Ku=new L,Zu=new ge,ju=new ge,Zg=new L,Ju=new Bt,Mo=new L,ul=new Be,Qu=new Bt,dl=new Ia;class jg extends ve{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wu,this.bindMatrix=new Bt,this.bindMatrixInverse=new Bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ke),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Mo),this.boundingBox.expandByPoint(Mo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Be),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Mo),this.boundingSphere.expandByPoint(Mo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(i),t.ray.intersectsSphere(ul)!==!1&&(Qu.copy(i).invert(),dl.copy(t.ray).applyMatrix4(Qu),!(this.boundingBox!==null&&dl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,dl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ge,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jm?this.bindMatrixInverse.copy(this.bindMatrix).invert():xt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Zu.fromBufferAttribute(i.attributes.skinIndex,t),ju.fromBufferAttribute(i.attributes.skinWeight,t),Ku.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=ju.getComponent(s);if(o!==0){const a=Zu.getComponent(s);Ju.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Zg.copy(Ku).applyMatrix4(Ju),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Pp extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Oh extends Re{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Te,h=Te,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const td=new Bt,Jg=new Bt;class zh{constructor(t=[],e=[]){this.uuid=En(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){xt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Bt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Bt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:Jg;td.multiplyMatrices(a,e[s]),td.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Oh(e,t,t,dn,un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(xt("Skeleton: No bone found with UUID:",s),o=new Pp),this.bones.push(o),this.boneInverses.push(new Bt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class en extends Jt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _s=new Bt,ed=new Bt,So=[],nd=new ke,Qg=new Bt,lr=new ve,cr=new Be;class Vh extends ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new en(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),nd.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(nd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Be),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),cr.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_s),ed.multiplyMatrices(n,_s),lr.matrixWorld=ed,lr.raycast(t,So);for(let o=0,a=So.length;o<a;o++){const l=So[o];l.instanceId=s,l.object=this,e.push(l)}So.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new en(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oh(new Float32Array(i*this.count),i,this.count,Ih,un));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fl=new L,t_=new L,e_=new zt;class $i{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fl.subVectors(n,e).cross(t_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||e_.getNormalMatrix(t),i=this.coplanarPoint(fl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Be,n_=new Gt(.5,.5),bo=new L;class La{constructor(t=new $i,e=new $i,n=new $i,i=new $i,s=new $i,o=new $i){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],y=s[12],S=s[13],M=s[14],A=s[15];if(i[0].setComponents(c-o,f-h,g-m,A-y).normalize(),i[1].setComponents(c+o,f+h,g+m,A+y).normalize(),i[2].setComponents(c+a,f+u,g+_,A+S).normalize(),i[3].setComponents(c-a,f-u,g-_,A-S).normalize(),n)i[4].setComponents(l,d,p,M).normalize(),i[5].setComponents(c-l,f-d,g-p,A-M).normalize();else if(i[4].setComponents(c-l,f-d,g-p,A-M).normalize(),e===Un)i[5].setComponents(c+l,f+d,g+p,A+M).normalize();else if(e===jr)i[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=n_.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(bo.x=i.normal.x>0?t.max.x:t.min.x,bo.y=i.normal.y>0?t.max.y:t.min.y,bo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ya extends On{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const va=new L,Ma=new L,id=new Bt,hr=new Ia,Eo=new Be,pl=new L,sd=new L;class Hh extends _e{constructor(t=new Ue,e=new ya){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)va.fromBufferAttribute(e,i-1),Ma.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=va.distanceTo(Ma);t.setAttribute("lineDistance",new fn(n,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=s,t.ray.intersectsSphere(Eo)===!1)return;id.copy(i).invert(),hr.copy(t.ray).applyMatrix4(id);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=h.getX(_),y=h.getX(_+1),S=To(this,t,hr,l,g,y,_);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(m-1),p=h.getX(f),g=To(this,t,hr,l,_,p,m-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=To(this,t,hr,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=To(this,t,hr,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function To(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(va.fromBufferAttribute(a,i),Ma.fromBufferAttribute(a,s),e.distanceSqToSegment(va,Ma,pl,sd)>n)return;pl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(pl);if(!(c<t.near||c>t.far))return{distance:c,point:sd.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const rd=new L,od=new L;class Nc extends Hh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)rd.fromBufferAttribute(e,i),od.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rd.distanceTo(od);t.setAttribute("lineDistance",new fn(n,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class i_ extends Hh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Dp extends On{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ad=new Bt,Fc=new Ia,Ao=new Be,wo=new L;class s_ extends _e{constructor(t=new Ue,e=new Dp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=s,t.ray.intersectsSphere(Ao)===!1)return;ad.copy(i).invert(),Fc.copy(t.ray).applyMatrix4(ad);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const p=c.getX(m);wo.fromBufferAttribute(u,p),ld(wo,p,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)wo.fromBufferAttribute(u,m),ld(wo,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ld(r,t,e,n,i,s,o){const a=Fc.distanceSqToPoint(r);if(a<e){const l=new L;Fc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Gh extends Re{constructor(t=[],e=es,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class r_ extends Re{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qr extends Re{constructor(t,e,n=zn,i,s,o,a=Te,l=Te,c,h=oi,u=1){if(h!==oi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class o_ extends Qr{constructor(t,e=zn,n=es,i,s,o=Te,a=Te,l,c=oi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Bp extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ei extends Ue{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(u,2));function m(_,p,g,y,S,M,A,C,w,x,b){const V=M/w,I=A/x,k=M/2,O=A/2,N=C/2,F=w+1,H=x+1;let z=0,tt=0;const J=new L;for(let st=0;st<H;st++){const ct=st*I-O;for(let dt=0;dt<F;dt++){const Rt=dt*V-k;J[_]=Rt*y,J[p]=ct*S,J[g]=N,c.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[g]=C>0?1:-1,h.push(J.x,J.y,J.z),u.push(dt/w),u.push(1-st/x),z+=1}}for(let st=0;st<x;st++)for(let ct=0;ct<w;ct++){const dt=d+ct+F*st,Rt=d+ct+F*(st+1),ee=d+(ct+1)+F*(st+1),Ft=d+(ct+1)+F*st;l.push(dt,Rt,Ft),l.push(Rt,ee,Ft),tt+=6}a.addGroup(f,tt,b),f+=tt,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Co=new L,Ro=new L,ml=new L,Io=new hn;class cd extends Ue{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Ns*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:p,c:g}=Io;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Io.getNormal(ml),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const S=(y+1)%3,M=u[y],A=u[S],C=Io[h[y]],w=Io[h[S]],x=`${M}_${A}`,b=`${A}_${M}`;b in d&&d[b]?(ml.dot(d[b].normal)<=s&&(f.push(C.x,C.y,C.z),f.push(w.x,w.y,w.z)),d[b]=null):x in d||(d[x]={index0:c[y],index1:c[S],normal:ml.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:p}=d[m];Co.fromBufferAttribute(a,_),Ro.fromBufferAttribute(a,p),f.push(Co.x,Co.y,Co.z),f.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new fn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Js extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const y=g*d-o;for(let S=0;S<c;S++){const M=S*u-s;m.push(M,-y,0),_.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const S=y+c*g,M=y+c*(g+1),A=y+1+c*(g+1),C=y+1+c*g;f.push(S,M,C),f.push(M,A,C)}this.setIndex(f),this.setAttribute("position",new fn(m,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.width,t.height,t.widthSegments,t.heightSegments)}}function $s(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(r){const t={};for(let e=0;e<r.length;e++){const n=$s(r[e]);for(const i in n)t[i]=n[i]}return t}function a_(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Up(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Vn={clone:$s,merge:qe};var l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oe extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=c_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=a_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class h_ extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wh extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hn extends Wh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class u_ extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class d_ extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Lo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function f_(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function hd(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function Np(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class Qs{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class p_ extends Qs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ru,endingEnd:Ru}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Iu:s=t,a=2*e-n;break;case Lu:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Iu:o=t,l=2*n-e;break;case Lu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,y=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,S=(-1-f)*p+(1.5+f)*_+.5*m,M=f*p-f*_;for(let A=0;A!==a;++A)s[A]=g*o[h+A]+y*o[c+A]+S*o[l+A]+M*o[u+A];return s}}class m_ extends Qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class g_ extends Qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class __ extends Qs{interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const _=(n-e)/(i-e),p=1-_;for(let g=0;g!==a;++g)s[g]=o[c+g]*p+o[l+g]*_;return s}const f=a*2,m=t-1;for(let _=0;_!==a;++_){const p=o[c+_],g=o[l+_],y=m*f+_*2,S=d[y],M=d[y+1],A=t*f+_*2,C=u[A],w=u[A+1];let x=(n-e)/(i-e),b,V,I,k,O;for(let N=0;N<8;N++){b=x*x,V=b*x,I=1-x,k=I*I,O=k*I;const H=O*e+3*k*x*S+3*I*b*C+V*i-n;if(Math.abs(H)<1e-10)break;const z=3*k*(S-e)+6*I*x*(C-S)+3*b*(i-C);if(Math.abs(z)<1e-10)break;x=x-H/z,x=Math.max(0,Math.min(1,x))}s[_]=O*p+3*k*x*M+3*I*b*w+V*g}return s}}class An{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lo(e,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Lo(t.times,Array),values:Lo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new g_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new m_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new p_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new __(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case Zr:e=this.InterpolantFactoryMethodLinear;break;case Ga:e=this.InterpolantFactoryMethodSmooth;break;case Cu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return Cu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ut("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&cg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ga,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Zr;class tr extends An{constructor(t,e,n){super(t,e,n)}}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Kr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fp extends An{constructor(t,e,n,i){super(t,e,n,i)}}Fp.prototype.ValueTypeName="color";class Ys extends An{constructor(t,e,n,i){super(t,e,n,i)}}Ys.prototype.ValueTypeName="number";class x_ extends Qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Tn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ks extends An{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new x_(this.times,this.values,this.getValueSize(),t)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends An{constructor(t,e,n){super(t,e,n)}}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Kr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends An{constructor(t,e,n,i){super(t,e,n,i)}}Zs.prototype.ValueTypeName="vector";class y_{constructor(t="",e=-1,n=[],i=Jm){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=En(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(M_(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=n.length;s!==o;++s)e.push(An.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=f_(l);l=hd(l,1,h),c=hd(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ys(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(xt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Ut("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const p=[],g=[];Np(f,p,g,m),p.length!==0&&_.push(new u(d,p,g))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const p=[],g=[];for(let y=0;y!==d[m].morphTargets.length;++y){const S=d[m];p.push(S.time),g.push(S.morphTarget===_?1:0)}i.push(new Ys(".morphTargetInfluence["+_+"]",p,g))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(Zs,f+".position",d,"pos",i),n(Ks,f+".quaternion",d,"rot",i),n(Zs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function v_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return Zs;case"color":return Fp;case"quaternion":return Ks;case"bool":case"boolean":return tr;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function M_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=v_(r.type);if(r.times===void 0){const e=[],n=[];Np(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const ni={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(ud(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!ud(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function ud(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class S_{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const b_=new S_;class Ai{constructor(t){this.manager=t!==void 0?t:b_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class E_ extends Error{constructor(t,e){super(t),this.response=e}}class Xh extends Ai{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ni.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(jn[t]!==void 0){jn[t].push({onLoad:e,onProgress:n,onError:i});return}jn[t]=[],jn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&xt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=jn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const p=new ReadableStream({start(g){y();function y(){u.read().then(({done:S,value:M})=>{if(S)g.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let C=0,w=h.length;C<w;C++){const x=h[C];x.onProgress&&x.onProgress(A)}g.enqueue(M),y()}},S=>{g.error(S)})}}});return new Response(p)}else throw new E_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ni.add(`file:${t}`,c);const h=jn[t];delete jn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=jn[t];if(h===void 0)throw this.manager.itemError(t),c;delete jn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const xs=new WeakMap;class kp extends Ai{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ni.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=xs.get(o);u===void 0&&(u=[],xs.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=Jr("img");function l(){h(),e&&e(this);const u=xs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}xs.delete(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),ni.remove(`image:${t}`);const d=xs.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}xs.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ni.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class T_ extends Ai{constructor(t){super(t)}load(t,e,n,i){const s=new Gh;s.colorSpace=Ee;const o=new kp(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class Op extends Ai{constructor(t){super(t)}load(t,e,n,i){const s=new Re,o=new kp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Pa extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const gl=new Bt,dd=new L,fd=new L;class qh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dd.setFromMatrixPosition(t.matrixWorld),e.position.copy(dd),fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fd),e.updateMatrixWorld(),gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===jr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Po=new L,Do=new Tn,Cn=new L;class zp extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Do,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Do,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Po,Do,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Do,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mi=new L,pd=new Gt,md=new Gt;class $e extends zp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,pd,md),e.subVectors(md,pd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class A_ extends qh{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=qs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class w_ extends Pa{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new A_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class C_ extends qh{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}}class R_ extends Pa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new C_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Da extends zp{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class I_ extends qh{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L_ extends Pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new I_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class P_ extends Pa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fr{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const _l=new WeakMap;class D_ extends Ai{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&xt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&xt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ni.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{if(_l.has(o)===!0)i&&i(_l.get(o)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(c),s.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),_l.set(l,c),ni.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});ni.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Bo;class Vp{static getContext(){return Bo===void 0&&(Bo=new(window.AudioContext||window.webkitAudioContext)),Bo}static setContext(t){Bo=t}}class B_ extends Ai{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Xh(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0);Vp.getContext().decodeAudioData(c,function(u){e(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):Ut(l),s.manager.itemError(t)}}}const ys=-90,vs=1;class U_ extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(ys,vs,t,e);i.layers=this.layers,this.add(i);const s=new $e(ys,vs,t,e);s.layers=this.layers,this.add(s);const o=new $e(ys,vs,t,e);o.layers=this.layers,this.add(o);const a=new $e(ys,vs,t,e);a.layers=this.layers,this.add(a);const l=new $e(ys,vs,t,e);l.layers=this.layers,this.add(l);const c=new $e(ys,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class N_ extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class F_{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=k_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function k_(){this._document.hidden===!1&&this.reset()}const Di=new L,xl=new Tn,O_=new L,Bi=new L,Ui=new L;class z_ extends _e{constructor(){super(),this.type="AudioListener",this.context=Vp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new F_}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Di,xl,O_),Bi.set(0,0,-1).applyQuaternion(xl),Ui.set(0,1,0).applyQuaternion(xl),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Di.x,n),e.positionY.linearRampToValueAtTime(Di.y,n),e.positionZ.linearRampToValueAtTime(Di.z,n),e.forwardX.linearRampToValueAtTime(Bi.x,n),e.forwardY.linearRampToValueAtTime(Bi.y,n),e.forwardZ.linearRampToValueAtTime(Bi.z,n),e.upX.linearRampToValueAtTime(Ui.x,n),e.upY.linearRampToValueAtTime(Ui.y,n),e.upZ.linearRampToValueAtTime(Ui.z,n)}else e.setPosition(Di.x,Di.y,Di.z),e.setOrientation(Bi.x,Bi.y,Bi.z,Ui.x,Ui.y,Ui.z)}}class V_ extends _e{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){xt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(xt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(xt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const $h="\\[\\]\\.:\\/",H_=new RegExp("["+$h+"]","g"),Yh="[^"+$h+"]",G_="[^"+$h.replace("\\.","")+"]",W_=/((?:WC+[\/:])*)/.source.replace("WC",Yh),X_=/(WCOD+)?/.source.replace("WCOD",G_),q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),$_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),Y_=new RegExp("^"+W_+X_+q_+$_+"$"),K_=["material","materials","bones","map"];class Z_{constructor(t,e,n){const i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,n):new ae(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(H_,"")}static parseTrackName(t){const e=Y_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);K_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=Z_;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jn{constructor(t,e,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}function gd(r,t,e,n){const i=j_(n);switch(e){case Sp:return r*t;case Ih:return r*t/i.components*i.byteLength;case Lh:return r*t/i.components*i.byteLength;case Xs:return r*t*2/i.components*i.byteLength;case Ph:return r*t*2/i.components*i.byteLength;case bp:return r*t*3/i.components*i.byteLength;case dn:return r*t*4/i.components*i.byteLength;case Dh:return r*t*4/i.components*i.byteLength;case ra:case oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case aa:case la:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(r,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(r,8)*Math.max(t,8)/2;case oc:case ac:case cc:case hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lc:case uc:case dc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case mc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _c:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case xc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case yc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case wc:case Cc:case Rc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ic:case Lc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Pc:case Dc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j_(r){switch(r){case sn:case xp:return{byteLength:1,components:1};case $r:case yp:case ri:return{byteLength:2,components:1};case Ch:case Rh:return{byteLength:2,components:4};case zn:case wh:case un:return{byteLength:4,components:1};case vp:case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hp(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function J_(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
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
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
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
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d0=`#ifdef USE_IRIDESCENCE
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
#endif`,f0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,S0=`#define PI 3.141592653589793
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
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E0=`vec3 transformedNormal = objectNormal;
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
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
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
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
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
#endif`,j0=`uniform sampler2D dfgLUT;
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
}`,J0=`
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lx=`#if defined( USE_POINTS_UV )
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
#endif`,cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`#ifdef USE_MORPHTARGETS
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
#endif`,mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_x=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fx=`float getShadowMask() {
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
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qx=`uniform sampler2D t2D;
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`#include <common>
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
}`,ry=`#if DEPTH_PACKING == 3200
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
}`,oy=`#define DISTANCE
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
}`,ay=`#define DISTANCE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`uniform float scale;
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
}`,uy=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,fy=`uniform vec3 diffuse;
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
}`,py=`#define LAMBERT
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
}`,my=`#define LAMBERT
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
}`,gy=`#define MATCAP
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
}`,_y=`#define MATCAP
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
}`,xy=`#define NORMAL
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
}`,yy=`#define NORMAL
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
}`,vy=`#define PHONG
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
}`,My=`#define PHONG
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
}`,Sy=`#define STANDARD
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
}`,by=`#define STANDARD
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
}`,Ey=`#define TOON
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
}`,Ty=`#define TOON
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
}`,Ay=`uniform float size;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Ry=`uniform vec3 color;
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
}`,Iy=`uniform float rotation;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Q_,alphahash_pars_fragment:t0,alphamap_fragment:e0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:d0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:_0,color_fragment:x0,color_pars_fragment:y0,color_pars_vertex:v0,color_vertex:M0,common:S0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:E0,displacementmap_pars_vertex:T0,displacementmap_vertex:A0,emissivemap_fragment:w0,emissivemap_pars_fragment:C0,colorspace_fragment:R0,colorspace_pars_fragment:I0,envmap_fragment:L0,envmap_common_pars_fragment:P0,envmap_pars_fragment:D0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:X0,envmap_vertex:U0,fog_vertex:N0,fog_pars_vertex:F0,fog_fragment:k0,fog_pars_fragment:O0,gradientmap_pars_fragment:z0,lightmap_pars_fragment:V0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:q0,lights_toon_pars_fragment:$0,lights_phong_fragment:Y0,lights_phong_pars_fragment:K0,lights_physical_fragment:Z0,lights_physical_pars_fragment:j0,lights_fragment_begin:J0,lights_fragment_maps:Q0,lights_fragment_end:tx,logdepthbuf_fragment:ex,logdepthbuf_pars_fragment:nx,logdepthbuf_pars_vertex:ix,logdepthbuf_vertex:sx,map_fragment:rx,map_pars_fragment:ox,map_particle_fragment:ax,map_particle_pars_fragment:lx,metalnessmap_fragment:cx,metalnessmap_pars_fragment:hx,morphinstance_vertex:ux,morphcolor_vertex:dx,morphnormal_vertex:fx,morphtarget_pars_vertex:px,morphtarget_vertex:mx,normal_fragment_begin:gx,normal_fragment_maps:_x,normal_pars_fragment:xx,normal_pars_vertex:yx,normal_vertex:vx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Tx,opaque_fragment:Ax,packing:wx,premultiplied_alpha_fragment:Cx,project_vertex:Rx,dithering_fragment:Ix,dithering_pars_fragment:Lx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Bx,shadowmap_pars_vertex:Ux,shadowmap_vertex:Nx,shadowmask_pars_fragment:Fx,skinbase_vertex:kx,skinning_pars_vertex:Ox,skinning_vertex:zx,skinnormal_vertex:Vx,specularmap_fragment:Hx,specularmap_pars_fragment:Gx,tonemapping_fragment:Wx,tonemapping_pars_fragment:Xx,transmission_fragment:qx,transmission_pars_fragment:$x,uv_pars_fragment:Yx,uv_pars_vertex:Kx,uv_vertex:Zx,worldpos_vertex:jx,background_vert:Jx,background_frag:Qx,backgroundCube_vert:ty,backgroundCube_frag:ey,cube_vert:ny,cube_frag:iy,depth_vert:sy,depth_frag:ry,distance_vert:oy,distance_frag:ay,equirect_vert:ly,equirect_frag:cy,linedashed_vert:hy,linedashed_frag:uy,meshbasic_vert:dy,meshbasic_frag:fy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:gy,meshmatcap_frag:_y,meshnormal_vert:xy,meshnormal_frag:yy,meshphong_vert:vy,meshphong_frag:My,meshphysical_vert:Sy,meshphysical_frag:by,meshtoon_vert:Ey,meshtoon_frag:Ty,points_vert:Ay,points_frag:wy,shadow_vert:Cy,shadow_frag:Ry,sprite_vert:Iy,sprite_frag:Ly},ht={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},pe={basic:{uniforms:qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:qe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:qe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:qe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new ut(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:qe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:qe([ht.points,ht.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:qe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:qe([ht.common,ht.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:qe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:qe([ht.sprite,ht.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:qe([ht.common,ht.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:qe([ht.lights,ht.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};pe.physical={uniforms:qe([pe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Uo={r:0,b:0,g:0},Ni=new pn,Py=new Bt;function Dy(r,t,e,n,i,s){const o=new ut(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const M=y.backgroundBlurriness>0;S=t.get(S,M)}return S}function m(y){let S=!1;const M=f(y);M===null?p(o,a):M&&M.isColor&&(p(M,1),S=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,S){const M=f(S);M&&(M.isCubeTexture||M.mapping===Ra)?(c===void 0&&(c=new ve(new ei(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:$s(pe.backgroundCube.uniforms),vertexShader:pe.backgroundCube.vertexShader,fragmentShader:pe.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ni.copy(S.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Py.makeRotationFromEuler(Ni)),c.material.toneMapped=jt.getTransfer(M.colorSpace)!==re,(h!==M||u!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ve(new Js(2,2),new Oe({name:"BackgroundMaterial",uniforms:$s(pe.background.uniforms),vertexShader:pe.background.vertexShader,fragmentShader:pe.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=jt.getTransfer(M.colorSpace)!==re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(Uo,Up(r)),e.buffers.color.setClear(Uo.r,Uo.g,Uo.b,S,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:g}}function By(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(I,k,O,N,F){let H=!1;const z=u(I,N,O,k);s!==z&&(s=z,c(s.object)),H=f(I,N,O,F),H&&m(I,N,O,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(I,k,O,N),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function u(I,k,O,N){const F=N.wireframe===!0;let H=n[k.id];H===void 0&&(H={},n[k.id]=H);const z=I.isInstancedMesh===!0?I.id:0;let tt=H[z];tt===void 0&&(tt={},H[z]=tt);let J=tt[O.id];J===void 0&&(J={},tt[O.id]=J);let st=J[F];return st===void 0&&(st=d(l()),J[F]=st),st}function d(I){const k=[],O=[],N=[];for(let F=0;F<e;F++)k[F]=0,O[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:O,attributeDivisors:N,object:I,attributes:{},index:null}}function f(I,k,O,N){const F=s.attributes,H=k.attributes;let z=0;const tt=O.getAttributes();for(const J in tt)if(tt[J].location>=0){const ct=F[J];let dt=H[J];if(dt===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor)),ct===void 0||ct.attribute!==dt||dt&&ct.data!==dt.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function m(I,k,O,N){const F={},H=k.attributes;let z=0;const tt=O.getAttributes();for(const J in tt)if(tt[J].location>=0){let ct=H[J];ct===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ct=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ct=I.instanceColor));const dt={};dt.attribute=ct,ct&&ct.data&&(dt.data=ct.data),F[J]=dt,z++}s.attributes=F,s.attributesNum=z,s.index=N}function _(){const I=s.newAttributes;for(let k=0,O=I.length;k<O;k++)I[k]=0}function p(I){g(I,0)}function g(I,k){const O=s.newAttributes,N=s.enabledAttributes,F=s.attributeDivisors;O[I]=1,N[I]===0&&(r.enableVertexAttribArray(I),N[I]=1),F[I]!==k&&(r.vertexAttribDivisor(I,k),F[I]=k)}function y(){const I=s.newAttributes,k=s.enabledAttributes;for(let O=0,N=k.length;O<N;O++)k[O]!==I[O]&&(r.disableVertexAttribArray(O),k[O]=0)}function S(I,k,O,N,F,H,z){z===!0?r.vertexAttribIPointer(I,k,O,F,H):r.vertexAttribPointer(I,k,O,N,F,H)}function M(I,k,O,N){_();const F=N.attributes,H=O.getAttributes(),z=k.defaultAttributeValues;for(const tt in H){const J=H[tt];if(J.location>=0){let st=F[tt];if(st===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),st!==void 0){const ct=st.normalized,dt=st.itemSize,Rt=t.get(st);if(Rt===void 0)continue;const ee=Rt.buffer,Ft=Rt.type,q=Rt.bytesPerElement,j=Ft===r.INT||Ft===r.UNSIGNED_INT||st.gpuType===wh;if(st.isInterleavedBufferAttribute){const it=st.data,Pt=it.stride,At=st.offset;if(it.isInstancedInterleavedBuffer){for(let Dt=0;Dt<J.locationSize;Dt++)g(J.location+Dt,it.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Dt=0;Dt<J.locationSize;Dt++)p(J.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let Dt=0;Dt<J.locationSize;Dt++)S(J.location+Dt,dt/J.locationSize,Ft,ct,Pt*q,(At+dt/J.locationSize*Dt)*q,j)}else{if(st.isInstancedBufferAttribute){for(let it=0;it<J.locationSize;it++)g(J.location+it,st.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<J.locationSize;it++)p(J.location+it);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let it=0;it<J.locationSize;it++)S(J.location+it,dt/J.locationSize,Ft,ct,dt*q,dt/J.locationSize*it*q,j)}}else if(z!==void 0){const ct=z[tt];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(J.location,ct);break;case 3:r.vertexAttrib3fv(J.location,ct);break;case 4:r.vertexAttrib4fv(J.location,ct);break;default:r.vertexAttrib1fv(J.location,ct)}}}}y()}function A(){b();for(const I in n){const k=n[I];for(const O in k){const N=k[O];for(const F in N){const H=N[F];for(const z in H)h(H[z].object),delete H[z];delete N[F]}}delete n[I]}}function C(I){if(n[I.id]===void 0)return;const k=n[I.id];for(const O in k){const N=k[O];for(const F in N){const H=N[F];for(const z in H)h(H[z].object),delete H[z];delete N[F]}}delete n[I.id]}function w(I){for(const k in n){const O=n[k];for(const N in O){const F=O[N];if(F[I.id]===void 0)continue;const H=F[I.id];for(const z in H)h(H[z].object),delete H[z];delete F[I.id]}}}function x(I){for(const k in n){const O=n[k],N=I.isInstancedMesh===!0?I.id:0,F=O[N];if(F!==void 0){for(const H in F){const z=F[H];for(const tt in z)h(z[tt].object),delete z[tt];delete F[H]}delete O[N],Object.keys(O).length===0&&delete n[k]}}}function b(){V(),o=!0,s!==i&&(s=i,c(s.object))}function V(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function Uy(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ny(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==dn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const x=w===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==sn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==un&&!x)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:A,samples:C}}function Fy(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new $i,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,S=y*4;let M=g.clippingState||null;l.value=M,M=h(m,d,S,f);for(let A=0;A!==S;++A)M[A]=e[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,M=f;S!==_;++S,M+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}const bi=4,_d=[.125,.215,.35,.446,.526,.582],ji=20,ky=256,ur=new Da,xd=new ut;let yl=null,vl=0,Ml=0,Sl=!1;const Oy=new L;class yd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=Oy}=s;yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,vl,Ml),this._renderer.xr.enabled=Sl,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:ri,format:dn,colorSpace:Ye,depthBuffer:!1},i=vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zy(s)),this._blurMaterial=Hy(s,t,e),this._ggxMaterial=Vy(s,t,e)}return i}_compileMaterial(t){const e=new ve(new Ue,t);this._renderer.compile(e,ur)}_sceneToCubeUV(t,e,n,i,s){const l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xd),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new ei,new Nn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,g=!0):(p.color.copy(xd),g=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const A=this._cubeSize;Ms(i,M*A,S>2?A:0,A,A),u.setRenderTarget(i),g&&u.render(_,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===es||t.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ms(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-bi?n-m+bi:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Ms(s,p,g,3*_,2*_),i.setRenderTarget(s),i.render(a,ur),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Ms(t,p,g,3*_,2*_),i.setRenderTarget(t),i.render(a,ur)}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ji-1),_=s/m,p=isFinite(s)?1+Math.floor(h*_):ji;p>ji&&xt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);const g=[];let y=0;for(let w=0;w<ji;++w){const x=w/_,b=Math.exp(-x*x/2);g.push(b),w===0?y+=b:w<p&&(y+=2*b)}for(let w=0;w<g.length;w++)g[w]=g[w]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;const M=this._sizeLods[i],A=3*M*(i>S-bi?i-S+bi:0),C=4*(this._cubeSize-M);Ms(e,A,C,3*M,2*M),l.setRenderTarget(e),l.render(u,ur)}}function zy(r){const t=[],e=[],n=[];let i=r;const s=r-bi+1+_d.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-bi?l=_d[o-r+bi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,p=2,g=1,y=new Float32Array(_*m*f),S=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let C=0;C<f;C++){const w=C%3*2/3-1,x=C>2?0:-1,b=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];y.set(b,_*m*C),S.set(d,p*m*C);const V=[C,C,C,C,C,C];M.set(V,g*m*C)}const A=new Ue;A.setAttribute("position",new Jt(y,_)),A.setAttribute("uv",new Jt(S,p)),A.setAttribute("faceIndex",new Jt(M,g)),n.push(new ve(A,null)),i>bi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function vd(r,t,e){const n=new kn(r,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Vy(r,t,e){return new Oe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Hy(r,t,e){const n=new Float32Array(ji),i=new L(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Md(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Sd(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}class Gp extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Gh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ei(5,5,5),s=new Oe({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:ii});s.uniforms.tEquirect.value=e;const o=new ve(i,s),a=e.minFilter;return e.minFilter===ti&&(e.minFilter=Ce),new U_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}function Gy(r){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Va||f===Ha)if(t.has(d)){const m=t.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new Gp(m.height);return _.fromEquirectangularTexture(r,d),t.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,m=f===Va||f===Ha,_=f===es||f===Gs;if(m||_){let p=e.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new yd(r)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new yd(r)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Va?d.mapping=es:f===Ha&&(d.mapping=Gs),d}function l(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Wy(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&xa("WebGLRenderer: "+n+" extension not supported."),i}}}function Xy(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let S=0,M=y.length;S<M;S+=3){const A=y[S+0],C=y[S+1],w=y[S+2];d.push(A,C,C,w,w,A)}}else{const y=m.array;_=m.version;for(let S=0,M=y.length/3-1;S<M;S+=3){const A=S+0,C=S+1,w=S+2;d.push(A,C,C,w,w,A)}}const p=new(m.count>=65535?Lp:Ip)(d,1);p.version=_;const g=s.get(u);g&&t.remove(g),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qy(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,n,1)}function u(d,f,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,m);let g=0;for(let y=0;y<m;y++)g+=f[y]*_[y];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $y(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Yy(r,t,e){const n=new WeakMap,i=new ge;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let M=a.attributes.position.count*S,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const C=new Float32Array(M*A*4*u),w=new wp(C,M,A,u);w.type=un,w.needsUpdate=!0;const x=S*4;for(let V=0;V<u;V++){const I=p[V],k=g[V],O=y[V],N=M*A*4*V;for(let F=0;F<I.count;F++){const H=F*x;f===!0&&(i.fromBufferAttribute(I,F),C[N+H+0]=i.x,C[N+H+1]=i.y,C[N+H+2]=i.z,C[N+H+3]=0),m===!0&&(i.fromBufferAttribute(k,F),C[N+H+4]=i.x,C[N+H+5]=i.y,C[N+H+6]=i.z,C[N+H+7]=0),_===!0&&(i.fromBufferAttribute(O,F),C[N+H+8]=i.x,C[N+H+9]=i.y,C[N+H+10]=i.z,C[N+H+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Gt(M,A)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Ky(r,t,e,n,i){let s=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Zy={[cp]:"LINEAR_TONE_MAPPING",[hp]:"REINHARD_TONE_MAPPING",[up]:"CINEON_TONE_MAPPING",[dp]:"ACES_FILMIC_TONE_MAPPING",[pp]:"AGX_TONE_MAPPING",[mp]:"NEUTRAL_TONE_MAPPING",[fp]:"CUSTOM_TONE_MAPPING"};function jy(r,t,e,n,i){const s=new kn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),o=new kn(t,e,{type:ri,depthBuffer:!1,stencilBuffer:!1}),a=new Ue;a.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new fn([0,2,0,0,2,0],2));const l=new h_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ve(a,l),h=new Da(-1,1,1,-1,0,1);let u=null,d=null,f=!1,m,_=null,p=[],g=!1;this.setSize=function(y,S){s.setSize(y,S),o.setSize(y,S);for(let M=0;M<p.length;M++){const A=p[M];A.setSize&&A.setSize(y,S)}},this.setEffects=function(y){p=y,g=p.length>0&&p[0].isRenderPass===!0;const S=s.width,M=s.height;for(let A=0;A<p.length;A++){const C=p[A];C.setSize&&C.setSize(S,M)}},this.begin=function(y,S){if(f||y.toneMapping===Fn&&p.length===0)return!1;if(_=S,S!==null){const M=S.width,A=S.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return g===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=Fn,!0},this.hasRenderPass=function(){return g},this.end=function(y,S){y.toneMapping=m,f=!0;let M=s,A=o;for(let C=0;C<p.length;C++){const w=p[C];if(w.enabled!==!1&&(w.render(y,A,M,S),w.needsSwap!==!1)){const x=M;M=A,A=x}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},jt.getTransfer(u)===re&&(l.defines.SRGB_TRANSFER="");const C=Zy[d];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(_),y.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Wp=new Re,kc=new Qr(1,1),Xp=new wp,qp=new Ug,$p=new Gh,bd=[],Ed=[],Td=new Float32Array(16),Ad=new Float32Array(9),wd=new Float32Array(4);function nr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=bd[i];if(s===void 0&&(s=new Float32Array(i),bd[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ie(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Le(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ua(r,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Jy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Qy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2fv(this.addr,t),Le(e,t)}}function tv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;r.uniform3fv(this.addr,t),Le(e,t)}}function ev(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4fv(this.addr,t),Le(e,t)}}function nv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;wd.set(n),r.uniformMatrix2fv(this.addr,!1,wd),Le(e,n)}}function iv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;Ad.set(n),r.uniformMatrix3fv(this.addr,!1,Ad),Le(e,n)}}function sv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;Td.set(n),r.uniformMatrix4fv(this.addr,!1,Td),Le(e,n)}}function rv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ov(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2iv(this.addr,t),Le(e,t)}}function av(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3iv(this.addr,t),Le(e,t)}}function lv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4iv(this.addr,t),Le(e,t)}}function cv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function hv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2uiv(this.addr,t),Le(e,t)}}function uv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3uiv(this.addr,t),Le(e,t)}}function dv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4uiv(this.addr,t),Le(e,t)}}function fv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(kc.compareFunction=e.isReversedDepthBuffer()?Uh:Bh,s=kc):s=Wp,e.setTexture2D(t||s,i)}function pv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||qp,i)}function mv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$p,i)}function gv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xp,i)}function _v(r){switch(r){case 5126:return Jy;case 35664:return Qy;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function xv(r,t){r.uniform1fv(this.addr,t)}function yv(r,t){const e=nr(t,this.size,2);r.uniform2fv(this.addr,e)}function vv(r,t){const e=nr(t,this.size,3);r.uniform3fv(this.addr,e)}function Mv(r,t){const e=nr(t,this.size,4);r.uniform4fv(this.addr,e)}function Sv(r,t){const e=nr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function bv(r,t){const e=nr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Ev(r,t){const e=nr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Tv(r,t){r.uniform1iv(this.addr,t)}function Av(r,t){r.uniform2iv(this.addr,t)}function wv(r,t){r.uniform3iv(this.addr,t)}function Cv(r,t){r.uniform4iv(this.addr,t)}function Rv(r,t){r.uniform1uiv(this.addr,t)}function Iv(r,t){r.uniform2uiv(this.addr,t)}function Lv(r,t){r.uniform3uiv(this.addr,t)}function Pv(r,t){r.uniform4uiv(this.addr,t)}function Dv(r,t,e){const n=this.cache,i=t.length,s=Ua(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=kc:o=Wp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Bv(r,t,e){const n=this.cache,i=t.length,s=Ua(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||qp,s[o])}function Uv(r,t,e){const n=this.cache,i=t.length,s=Ua(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||$p,s[o])}function Nv(r,t,e){const n=this.cache,i=t.length,s=Ua(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Xp,s[o])}function Fv(r){switch(r){case 5126:return xv;case 35664:return yv;case 35665:return vv;case 35666:return Mv;case 35674:return Sv;case 35675:return bv;case 35676:return Ev;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return wv;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Iv;case 36295:return Lv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Nv}}class kv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_v(e.type)}}class Ov{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fv(e.type)}}class zv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function Cd(r,t){r.seq.push(t),r.map[t.id]=t}function Vv(r,t,e){const n=r.name,i=n.length;for(bl.lastIndex=0;;){const s=bl.exec(n),o=bl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Cd(e,c===void 0?new kv(a,r,t):new Ov(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new zv(a),Cd(e,u)),e=u}}}class ca{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Vv(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Rd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Hv=37297;let Gv=0;function Wv(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Id=new zt;function Xv(r){jt._getMatrix(Id,jt.workingColorSpace,r);const t=`mat3( ${Id.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(r)){case ga:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ld(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Wv(r.getShaderSource(t),a)}else return s}function qv(r,t){const e=Xv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const $v={[cp]:"Linear",[hp]:"Reinhard",[up]:"Cineon",[dp]:"ACESFilmic",[pp]:"AgX",[mp]:"Neutral",[fp]:"Custom"};function Yv(r,t){const e=$v[t];return e===void 0?(xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const No=new L;function Kv(){jt.getLuminanceCoefficients(No);const r=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function jv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Dr(r){return r!==""}function Pd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(r){return r.replace(Qv,eM)}const tM=new Map;function eM(r,t){let e=Xt[t];if(e===void 0){const n=tM.get(t);if(n!==void 0)e=Xt[n],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oc(e)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(r){return r.replace(nM,iM)}function iM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ud(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const sM={[ia]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function rM(r){return sM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oM={[es]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE_UV"};function aM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":oM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const lM={[Gs]:"ENVMAP_MODE_REFRACTION"};function cM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":lM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hM={[lp]:"ENVMAP_BLENDING_MULTIPLY",[Km]:"ENVMAP_BLENDING_MIX",[Zm]:"ENVMAP_BLENDING_ADD"};function uM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":hM[r.combine]||"ENVMAP_BLENDING_NONE"}function dM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fM(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=rM(e),c=aM(e),h=cM(e),u=uM(e),d=dM(e),f=Zv(e),m=jv(s),_=i.createProgram();let p,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Dr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Dr).join(`
`),g.length>0&&(g+=`
`)):(p=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),g=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Yv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,qv("linearToOutputTexel",e.outputColorSpace),Kv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Oc(o),o=Pd(o,e),o=Dd(o,e),a=Oc(a),a=Pd(a,e),a=Dd(a,e),o=Bd(o),a=Bd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Ei?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ei?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=y+p+o,M=y+g+a,A=Rd(i,i.VERTEX_SHADER,S),C=Rd(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(I){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(A)||"",N=i.getShaderInfoLog(C)||"",F=k.trim(),H=O.trim(),z=N.trim();let tt=!0,J=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,C);else{const st=Ld(i,A,"vertex"),ct=Ld(i,C,"fragment");Ut("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+st+`
`+ct)}else F!==""?xt("WebGLProgram: Program Info Log:",F):(H===""||z==="")&&(J=!1);J&&(I.diagnostics={runnable:tt,programLog:F,vertexShader:{log:H,prefix:p},fragmentShader:{log:z,prefix:g}})}i.deleteShader(A),i.deleteShader(C),x=new ca(i,_),b=Jv(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=i.getProgramParameter(_,Hv)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gM(t),e.set(t,n)),n}}class gM{constructor(t){this.id=pM++,this.code=t,this.usedTimes=0}}function _M(r,t,e,n,i,s){const o=new Cp,a=new mM,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,V,I,k){const O=I.fog,N=k.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||F,H),tt=z&&z.mapping===Ra?z.image.height:null,J=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&xt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const st=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ct=st!==void 0?st.length:0;let dt=0;N.morphAttributes.position!==void 0&&(dt=1),N.morphAttributes.normal!==void 0&&(dt=2),N.morphAttributes.color!==void 0&&(dt=3);let Rt,ee,Ft,q;if(J){const se=pe[J];Rt=se.vertexShader,ee=se.fragmentShader}else Rt=x.vertexShader,ee=x.fragmentShader,a.update(x),Ft=a.getVertexShaderID(x),q=a.getFragmentShaderID(x);const j=r.getRenderTarget(),it=r.state.buffers.depth.getReversed(),Pt=k.isInstancedMesh===!0,At=k.isBatchedMesh===!0,Dt=!!x.map,xe=!!x.matcap,kt=!!z,ne=!!x.aoMap,ie=!!x.lightMap,Wt=!!x.bumpMap,me=!!x.normalMap,P=!!x.displacementMap,Me=!!x.emissiveMap,Qt=!!x.metalnessMap,ce=!!x.roughnessMap,yt=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,D=x.iridescence>0,K=x.sheen>0,Q=x.transmission>0,Y=yt&&!!x.anisotropyMap,vt=R&&!!x.clearcoatMap,at=R&&!!x.clearcoatNormalMap,Lt=R&&!!x.clearcoatRoughnessMap,Nt=D&&!!x.iridescenceMap,et=D&&!!x.iridescenceThicknessMap,rt=K&&!!x.sheenColorMap,Mt=K&&!!x.sheenRoughnessMap,bt=!!x.specularMap,mt=!!x.specularColorMap,qt=!!x.specularIntensityMap,B=Q&&!!x.transmissionMap,lt=Q&&!!x.thicknessMap,ot=!!x.gradientMap,_t=!!x.alphaMap,nt=x.alphaTest>0,$=!!x.alphaHash,St=!!x.extensions;let Ot=Fn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ot=r.toneMapping);const fe={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Rt,fragmentShader:ee,defines:x.defines,customVertexShaderID:Ft,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:At,batchingColor:At&&k._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&k.instanceColor!==null,instancingMorph:Pt&&k.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ye,alphaToCoverage:!!x.alphaToCoverage,map:Dt,matcap:xe,envMap:kt,envMapMode:kt&&z.mapping,envMapCubeUVHeight:tt,aoMap:ne,lightMap:ie,bumpMap:Wt,normalMap:me,displacementMap:P,emissiveMap:Me,normalMapObjectSpace:me&&x.normalMapType===eg,normalMapTangentSpace:me&&x.normalMapType===Tp,metalnessMap:Qt,roughnessMap:ce,anisotropy:yt,anisotropyMap:Y,clearcoat:R,clearcoatMap:vt,clearcoatNormalMap:at,clearcoatRoughnessMap:Lt,dispersion:v,iridescence:D,iridescenceMap:Nt,iridescenceThicknessMap:et,sheen:K,sheenColorMap:rt,sheenRoughnessMap:Mt,specularMap:bt,specularColorMap:mt,specularIntensityMap:qt,transmission:Q,transmissionMap:B,thicknessMap:lt,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:_t,alphaTest:nt,alphaHash:$,combine:x.combine,mapUv:Dt&&m(x.map.channel),aoMapUv:ne&&m(x.aoMap.channel),lightMapUv:ie&&m(x.lightMap.channel),bumpMapUv:Wt&&m(x.bumpMap.channel),normalMapUv:me&&m(x.normalMap.channel),displacementMapUv:P&&m(x.displacementMap.channel),emissiveMapUv:Me&&m(x.emissiveMap.channel),metalnessMapUv:Qt&&m(x.metalnessMap.channel),roughnessMapUv:ce&&m(x.roughnessMap.channel),anisotropyMapUv:Y&&m(x.anisotropyMap.channel),clearcoatMapUv:vt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:et&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&m(x.sheenRoughnessMap.channel),specularMapUv:bt&&m(x.specularMap.channel),specularColorMapUv:mt&&m(x.specularColorMap.channel),specularIntensityMapUv:qt&&m(x.specularIntensityMap.channel),transmissionMapUv:B&&m(x.transmissionMap.channel),thicknessMapUv:lt&&m(x.thicknessMap.channel),alphaMapUv:_t&&m(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(me||yt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(Dt||_t),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:it,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:dt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Dt&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&jt.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ge,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)b.push(V),b.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(g(b,x),y(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){const b=f[x.type];let V;if(b){const I=pe[b];V=Vn.clone(I.uniforms)}else V=x.uniforms;return V}function M(x,b){let V=h.get(b);return V!==void 0?++V.usedTimes:(V=new fM(r,b,x,i),c.push(V),h.set(b,V)),V}function A(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:w}}function xM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function yM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Nd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Fd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,_,p,g){let y=r[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},r[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=o(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=p,y.group=g),t++,y}function l(d,f,m,_,p,g){const y=a(d,f,m,_,p,g);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):e.push(y)}function c(d,f,m,_,p,g){const y=a(d,f,m,_,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||yM),n.length>1&&n.sort(f||Nd),i.length>1&&i.sort(f||Nd)}function u(){for(let d=t,f=r.length;d<f;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:h}}function vM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Fd,r.set(n,[o])):i>=s.length?(o=new Fd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function MM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ut};break;case"SpotLight":e={position:new L,direction:new L,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function SM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let bM=0;function EM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function TM(r){const t=new MM,e=SM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new Bt,o=new Bt;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,y=0,S=0,M=0,A=0,C=0,w=0;c.sort(EM);for(let b=0,V=c.length;b<V;b++){const I=c[b],k=I.color,O=I.intensity,N=I.distance;let F=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Xs?F=I.shadow.map.texture:F=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*O,u+=k.g*O,d+=k.b*O;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],O);w++}else if(I.isDirectionalLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,tt=e.get(I);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,n.directionalShadow[f]=tt,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=H,f++}else if(I.isSpotLight){const H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(k).multiplyScalar(O),H.distance=N,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[_]=H;const z=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,z.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[_]=z.matrix,I.castShadow){const tt=e.get(I);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,n.spotShadow[_]=tt,n.spotShadowMap[_]=F,M++}_++}else if(I.isRectAreaLight){const H=t.get(I);H.color.copy(k).multiplyScalar(O),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=H,p++}else if(I.isPointLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const z=I.shadow,tt=e.get(I);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,tt.shadowCameraNear=z.camera.near,tt.shadowCameraFar=z.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=F,n.pointShadowMatrix[m]=I.shadow.matrix,S++}n.point[m]=H,m++}else if(I.isHemisphereLight){const H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(O),H.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[g]=H,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==y||x.numPointShadows!==S||x.numSpotShadows!==M||x.numSpotMaps!==A||x.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=y,x.numPointShadows=S,x.numSpotShadows=M,x.numSpotMaps=A,x.numLightProbes=w,n.version=bM++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const S=c[g];if(S.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(S.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function kd(r){const t=new TM(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AM(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new kd(r),t.set(i,[a])):s>=o.length?(a=new kd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const wM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
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
}`,RM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],IM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Od=new Bt,dr=new L,El=new L;function LM(r,t,e){let n=new La;const i=new Gt,s=new Gt,o=new ge,a=new u_,l=new d_,c={},h=e.maxTextureSize,u={[rn]:We,[We]:rn,[Ge]:Ge},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:wM,fragmentShader:CM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ue;m.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ve(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let g=this.type;this.render=function(C,w,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;this.type===Im&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ia);const b=r.getRenderTarget(),V=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),k=r.state;k.setBlending(ii),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=g!==this.type;O&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,F=C.length;N<F;N++){const H=C[N],z=H.shadow;if(z===void 0){xt("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const tt=z.getFrameExtents();i.multiply(tt),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/tt.x),i.x=s.x*tt.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/tt.y),i.y=s.y*tt.y,z.mapSize.y=s.y));const J=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=J,z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Lr){if(H.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new kn(i.x,i.y,{format:Xs,type:ri,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new Qr(i.x,i.y,un),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=oi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Te,z.map.depthTexture.magFilter=Te}else H.isPointLight?(z.map=new Gp(i.x),z.map.depthTexture=new o_(i.x,zn)):(z.map=new kn(i.x,i.y),z.map.depthTexture=new Qr(i.x,i.y,zn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=oi,this.type===ia?(z.map.depthTexture.compareFunction=J?Uh:Bh,z.map.depthTexture.minFilter=Ce,z.map.depthTexture.magFilter=Ce):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Te,z.map.depthTexture.magFilter=Te);z.camera.updateProjectionMatrix()}const st=z.map.isWebGLCubeRenderTarget?6:1;for(let ct=0;ct<st;ct++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,ct),r.clear();else{ct===0&&(r.setRenderTarget(z.map),r.clear());const dt=z.getViewport(ct);o.set(s.x*dt.x,s.y*dt.y,s.x*dt.z,s.y*dt.w),k.viewport(o)}if(H.isPointLight){const dt=z.camera,Rt=z.matrix,ee=H.distance||dt.far;ee!==dt.far&&(dt.far=ee,dt.updateProjectionMatrix()),dr.setFromMatrixPosition(H.matrixWorld),dt.position.copy(dr),El.copy(dt.position),El.add(RM[ct]),dt.up.copy(IM[ct]),dt.lookAt(El),dt.updateMatrixWorld(),Rt.makeTranslation(-dr.x,-dr.y,-dr.z),Od.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Od,dt.coordinateSystem,dt.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),M(w,x,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Lr&&y(z,x),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(b,V,I)};function y(C,w){const x=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new kn(i.x,i.y,{format:Xs,type:ri})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(w,null,x,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(w,null,x,f,_,null)}function S(C,w,x,b){let V=null;const I=x.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)V=I;else if(V=x.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=V.uuid,O=w.uuid;let N=c[k];N===void 0&&(N={},c[k]=N);let F=N[O];F===void 0&&(F=V.clone(),N[O]=F,w.addEventListener("dispose",A)),V=F}if(V.visible=w.visible,V.wireframe=w.wireframe,b===Lr?V.side=w.shadowSide!==null?w.shadowSide:w.side:V.side=w.shadowSide!==null?w.shadowSide:u[w.side],V.alphaMap=w.alphaMap,V.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,V.map=w.map,V.clipShadows=w.clipShadows,V.clippingPlanes=w.clippingPlanes,V.clipIntersection=w.clipIntersection,V.displacementMap=w.displacementMap,V.displacementScale=w.displacementScale,V.displacementBias=w.displacementBias,V.wireframeLinewidth=w.wireframeLinewidth,V.linewidth=w.linewidth,x.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const k=r.properties.get(V);k.light=x}return V}function M(C,w,x,b,V){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&V===Lr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,C.matrixWorld);const O=t.update(C),N=C.material;if(Array.isArray(N)){const F=O.groups;for(let H=0,z=F.length;H<z;H++){const tt=F[H],J=N[tt.materialIndex];if(J&&J.visible){const st=S(C,J,b,V);C.onBeforeShadow(r,C,w,x,O,st,tt),r.renderBufferDirect(x,null,O,st,C,tt),C.onAfterShadow(r,C,w,x,O,st,tt)}}}else if(N.visible){const F=S(C,N,b,V);C.onBeforeShadow(r,C,w,x,O,F,null),r.renderBufferDirect(x,null,O,F,C,null),C.onAfterShadow(r,C,w,x,O,F,null)}}const k=C.children;for(let O=0,N=k.length;O<N;O++)M(k[O],w,x,b,V)}function A(C){C.target.removeEventListener("dispose",A);for(const x in c){const b=c[x],V=C.target.uuid;V in b&&(b[V].dispose(),delete b[V])}}}function PM(r,t){function e(){let B=!1;const lt=new ge;let ot=null;const _t=new ge(0,0,0,0);return{setMask:function(nt){ot!==nt&&!B&&(r.colorMask(nt,nt,nt,nt),ot=nt)},setLocked:function(nt){B=nt},setClear:function(nt,$,St,Ot,fe){fe===!0&&(nt*=Ot,$*=Ot,St*=Ot),lt.set(nt,$,St,Ot),_t.equals(lt)===!1&&(r.clearColor(nt,$,St,Ot),_t.copy(lt))},reset:function(){B=!1,ot=null,_t.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,ot=null,_t=null,nt=null;return{setReversed:function($){if(lt!==$){const St=t.get("EXT_clip_control");$?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),lt=$;const Ot=nt;nt=null,this.setClear(Ot)}},getReversed:function(){return lt},setTest:function($){$?j(r.DEPTH_TEST):it(r.DEPTH_TEST)},setMask:function($){ot!==$&&!B&&(r.depthMask($),ot=$)},setFunc:function($){if(lt&&($=dg[$]),_t!==$){switch($){case Kl:r.depthFunc(r.NEVER);break;case Zl:r.depthFunc(r.ALWAYS);break;case jl:r.depthFunc(r.LESS);break;case Hs:r.depthFunc(r.LEQUAL);break;case Jl:r.depthFunc(r.EQUAL);break;case Ql:r.depthFunc(r.GEQUAL);break;case tc:r.depthFunc(r.GREATER);break;case ec:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=$}},setLocked:function($){B=$},setClear:function($){nt!==$&&(nt=$,lt&&($=1-$),r.clearDepth($))},reset:function(){B=!1,ot=null,_t=null,nt=null,lt=!1}}}function i(){let B=!1,lt=null,ot=null,_t=null,nt=null,$=null,St=null,Ot=null,fe=null;return{setTest:function(se){B||(se?j(r.STENCIL_TEST):it(r.STENCIL_TEST))},setMask:function(se){lt!==se&&!B&&(r.stencilMask(se),lt=se)},setFunc:function(se,Wn,Xn){(ot!==se||_t!==Wn||nt!==Xn)&&(r.stencilFunc(se,Wn,Xn),ot=se,_t=Wn,nt=Xn)},setOp:function(se,Wn,Xn){($!==se||St!==Wn||Ot!==Xn)&&(r.stencilOp(se,Wn,Xn),$=se,St=Wn,Ot=Xn)},setLocked:function(se){B=se},setClear:function(se){fe!==se&&(r.clearStencil(se),fe=se)},reset:function(){B=!1,lt=null,ot=null,_t=null,nt=null,$=null,St=null,Ot=null,fe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,y=null,S=null,M=null,A=null,C=null,w=new ut(0,0,0),x=0,b=!1,V=null,I=null,k=null,O=null,N=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const tt=r.getParameter(r.VERSION);tt.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(tt)[1]),H=z>=1):tt.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),H=z>=2);let J=null,st={};const ct=r.getParameter(r.SCISSOR_BOX),dt=r.getParameter(r.VIEWPORT),Rt=new ge().fromArray(ct),ee=new ge().fromArray(dt);function Ft(B,lt,ot,_t){const nt=new Uint8Array(4),$=r.createTexture();r.bindTexture(B,$),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let St=0;St<ot;St++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(lt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(lt+St,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return $}const q={};q[r.TEXTURE_2D]=Ft(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=Ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=Ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=Ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(Hs),Wt(!1),me(bu),j(r.CULL_FACE),ne(ii);function j(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function it(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function Pt(B,lt){return u[B]!==lt?(r.bindFramebuffer(B,lt),u[B]=lt,B===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=lt),B===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=lt),!0):!1}function At(B,lt){let ot=f,_t=!1;if(B){ot=d.get(lt),ot===void 0&&(ot=[],d.set(lt,ot));const nt=B.textures;if(ot.length!==nt.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let $=0,St=nt.length;$<St;$++)ot[$]=r.COLOR_ATTACHMENT0+$;ot.length=nt.length,_t=!0}}else ot[0]!==r.BACK&&(ot[0]=r.BACK,_t=!0);_t&&r.drawBuffers(ot)}function Dt(B){return m!==B?(r.useProgram(B),m=B,!0):!1}const xe={[Zi]:r.FUNC_ADD,[Pm]:r.FUNC_SUBTRACT,[Dm]:r.FUNC_REVERSE_SUBTRACT};xe[Bm]=r.MIN,xe[Um]=r.MAX;const kt={[Nm]:r.ZERO,[Fm]:r.ONE,[km]:r.SRC_COLOR,[$l]:r.SRC_ALPHA,[Wm]:r.SRC_ALPHA_SATURATE,[Hm]:r.DST_COLOR,[zm]:r.DST_ALPHA,[Om]:r.ONE_MINUS_SRC_COLOR,[Yl]:r.ONE_MINUS_SRC_ALPHA,[Gm]:r.ONE_MINUS_DST_COLOR,[Vm]:r.ONE_MINUS_DST_ALPHA,[Xm]:r.CONSTANT_COLOR,[qm]:r.ONE_MINUS_CONSTANT_COLOR,[$m]:r.CONSTANT_ALPHA,[Ym]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(B,lt,ot,_t,nt,$,St,Ot,fe,se){if(B===ii){_===!0&&(it(r.BLEND),_=!1);return}if(_===!1&&(j(r.BLEND),_=!0),B!==Lm){if(B!==p||se!==b){if((g!==Zi||M!==Zi)&&(r.blendEquation(r.FUNC_ADD),g=Zi,M=Zi),se)switch(B){case Us:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Eu:r.blendFunc(r.ONE,r.ONE);break;case Tu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Au:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ut("WebGLState: Invalid blending: ",B);break}else switch(B){case Us:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Eu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Tu:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",B);break}y=null,S=null,A=null,C=null,w.set(0,0,0),x=0,p=B,b=se}return}nt=nt||lt,$=$||ot,St=St||_t,(lt!==g||nt!==M)&&(r.blendEquationSeparate(xe[lt],xe[nt]),g=lt,M=nt),(ot!==y||_t!==S||$!==A||St!==C)&&(r.blendFuncSeparate(kt[ot],kt[_t],kt[$],kt[St]),y=ot,S=_t,A=$,C=St),(Ot.equals(w)===!1||fe!==x)&&(r.blendColor(Ot.r,Ot.g,Ot.b,fe),w.copy(Ot),x=fe),p=B,b=!1}function ie(B,lt){B.side===Ge?it(r.CULL_FACE):j(r.CULL_FACE);let ot=B.side===We;lt&&(ot=!ot),Wt(ot),B.blending===Us&&B.transparent===!1?ne(ii):ne(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const _t=B.stencilWrite;a.setTest(_t),_t&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Me(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):it(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(B){V!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),V=B)}function me(B){B!==Cm?(j(r.CULL_FACE),B!==I&&(B===bu?r.cullFace(r.BACK):B===Rm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):it(r.CULL_FACE),I=B}function P(B){B!==k&&(H&&r.lineWidth(B),k=B)}function Me(B,lt,ot){B?(j(r.POLYGON_OFFSET_FILL),(O!==lt||N!==ot)&&(O=lt,N=ot,o.getReversed()&&(lt=-lt),r.polygonOffset(lt,ot))):it(r.POLYGON_OFFSET_FILL)}function Qt(B){B?j(r.SCISSOR_TEST):it(r.SCISSOR_TEST)}function ce(B){B===void 0&&(B=r.TEXTURE0+F-1),J!==B&&(r.activeTexture(B),J=B)}function yt(B,lt,ot){ot===void 0&&(J===null?ot=r.TEXTURE0+F-1:ot=J);let _t=st[ot];_t===void 0&&(_t={type:void 0,texture:void 0},st[ot]=_t),(_t.type!==B||_t.texture!==lt)&&(J!==ot&&(r.activeTexture(ot),J=ot),r.bindTexture(B,lt||q[B]),_t.type=B,_t.texture=lt)}function R(){const B=st[J];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function K(){try{r.texSubImage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function Q(){try{r.texSubImage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function vt(){try{r.compressedTexSubImage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function at(){try{r.texStorage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function Lt(){try{r.texStorage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function Nt(){try{r.texImage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function et(){try{r.texImage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function rt(B){Rt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Rt.copy(B))}function Mt(B){ee.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),ee.copy(B))}function bt(B,lt){let ot=c.get(lt);ot===void 0&&(ot=new WeakMap,c.set(lt,ot));let _t=ot.get(B);_t===void 0&&(_t=r.getUniformBlockIndex(lt,B.name),ot.set(B,_t))}function mt(B,lt){const _t=c.get(lt).get(B);l.get(lt)!==_t&&(r.uniformBlockBinding(lt,_t,B.__bindingPointIndex),l.set(lt,_t))}function qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,st={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,y=null,S=null,M=null,A=null,C=null,w=new ut(0,0,0),x=0,b=!1,V=null,I=null,k=null,O=null,N=null,Rt.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:it,bindFramebuffer:Pt,drawBuffers:At,useProgram:Dt,setBlending:ne,setMaterial:ie,setFlipSided:Wt,setCullFace:me,setLineWidth:P,setPolygonOffset:Me,setScissorTest:Qt,activeTexture:ce,bindTexture:yt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Nt,texImage3D:et,updateUBOMapping:bt,uniformBlockBinding:mt,texStorage2D:at,texStorage3D:Lt,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:vt,scissor:rt,viewport:Mt,reset:qt}}function DM(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,v){return f?new OffscreenCanvas(R,v):Jr("canvas")}function _(R,v,D){let K=1;const Q=yt(R);if((Q.width>D||Q.height>D)&&(K=D/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(K*Q.width),vt=Math.floor(K*Q.height);u===void 0&&(u=m(Y,vt));const at=v?m(Y,vt):u;return at.width=Y,at.height=vt,at.getContext("2d").drawImage(R,0,0,Y,vt),xt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+vt+")."),at}else return"data"in R&&xt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,v,D,K,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=v;if(v===r.RED&&(D===r.FLOAT&&(Y=r.R32F),D===r.HALF_FLOAT&&(Y=r.R16F),D===r.UNSIGNED_BYTE&&(Y=r.R8)),v===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(Y=r.R8UI),D===r.UNSIGNED_SHORT&&(Y=r.R16UI),D===r.UNSIGNED_INT&&(Y=r.R32UI),D===r.BYTE&&(Y=r.R8I),D===r.SHORT&&(Y=r.R16I),D===r.INT&&(Y=r.R32I)),v===r.RG&&(D===r.FLOAT&&(Y=r.RG32F),D===r.HALF_FLOAT&&(Y=r.RG16F),D===r.UNSIGNED_BYTE&&(Y=r.RG8)),v===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(Y=r.RG8UI),D===r.UNSIGNED_SHORT&&(Y=r.RG16UI),D===r.UNSIGNED_INT&&(Y=r.RG32UI),D===r.BYTE&&(Y=r.RG8I),D===r.SHORT&&(Y=r.RG16I),D===r.INT&&(Y=r.RG32I)),v===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),D===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),D===r.UNSIGNED_INT&&(Y=r.RGB32UI),D===r.BYTE&&(Y=r.RGB8I),D===r.SHORT&&(Y=r.RGB16I),D===r.INT&&(Y=r.RGB32I)),v===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),D===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),D===r.UNSIGNED_INT&&(Y=r.RGBA32UI),D===r.BYTE&&(Y=r.RGBA8I),D===r.SHORT&&(Y=r.RGBA16I),D===r.INT&&(Y=r.RGBA32I)),v===r.RGB&&(D===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),D===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),v===r.RGBA){const vt=Q?ga:jt.getTransfer(K);D===r.FLOAT&&(Y=r.RGBA32F),D===r.HALF_FLOAT&&(Y=r.RGBA16F),D===r.UNSIGNED_BYTE&&(Y=vt===re?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(R,v){let D;return R?v===null||v===zn||v===Yr?D=r.DEPTH24_STENCIL8:v===un?D=r.DEPTH32F_STENCIL8:v===$r&&(D=r.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zn||v===Yr?D=r.DEPTH_COMPONENT24:v===un?D=r.DEPTH_COMPONENT32F:v===$r&&(D=r.DEPTH_COMPONENT16),D}function A(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Te&&R.minFilter!==Ce?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){const v=R.target;v.removeEventListener("dispose",C),x(v),v.isVideoTexture&&h.delete(v)}function w(R){const v=R.target;v.removeEventListener("dispose",w),V(v)}function x(R){const v=n.get(R);if(v.__webglInit===void 0)return;const D=R.source,K=d.get(D);if(K){const Q=K[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(R),Object.keys(K).length===0&&d.delete(D)}n.remove(R)}function b(R){const v=n.get(R);r.deleteTexture(v.__webglTexture);const D=R.source,K=d.get(D);delete K[v.__cacheKey],o.memory.textures--}function V(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let Q=0;Q<v.__webglFramebuffer[K].length;Q++)r.deleteFramebuffer(v.__webglFramebuffer[K][Q]);else r.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)r.deleteFramebuffer(v.__webglFramebuffer[K]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=R.textures;for(let K=0,Q=D.length;K<Q;K++){const Y=n.get(D[K]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(D[K])}n.remove(R)}let I=0;function k(){I=0}function O(){const R=I;return R>=i.maxTextures&&xt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function N(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function F(R,v){const D=n.get(R);if(R.isVideoTexture&&Qt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&D.__version!==R.version){const K=R.image;if(K===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(D,R,v);return}}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+v)}function H(R,v){const D=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){q(D,R,v);return}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+v)}function z(R,v){const D=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){q(D,R,v);return}e.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+v)}function tt(R,v){const D=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&D.__version!==R.version){j(D,R,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+v)}const J={[Ws]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[ma]:r.MIRRORED_REPEAT},st={[Te]:r.NEAREST,[_p]:r.NEAREST_MIPMAP_NEAREST,[Pr]:r.NEAREST_MIPMAP_LINEAR,[Ce]:r.LINEAR,[sa]:r.LINEAR_MIPMAP_NEAREST,[ti]:r.LINEAR_MIPMAP_LINEAR},ct={[ng]:r.NEVER,[ag]:r.ALWAYS,[ig]:r.LESS,[Bh]:r.LEQUAL,[sg]:r.EQUAL,[Uh]:r.GEQUAL,[rg]:r.GREATER,[og]:r.NOTEQUAL};function dt(R,v){if(v.type===un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ce||v.magFilter===sa||v.magFilter===Pr||v.magFilter===ti||v.minFilter===Ce||v.minFilter===sa||v.minFilter===Pr||v.minFilter===ti)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,J[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,J[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,J[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,st[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,st[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Te||v.minFilter!==Pr&&v.minFilter!==ti||v.type===un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Rt(R,v){let D=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));const K=v.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const Y=N(v);if(Y!==R.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Q[Y].usedTimes++;const vt=Q[R.__cacheKey];vt!==void 0&&(Q[R.__cacheKey].usedTimes--,vt.usedTimes===0&&b(v)),R.__cacheKey=Y,R.__webglTexture=Q[Y].texture}return D}function ee(R,v,D){return Math.floor(Math.floor(R/D)/v)}function Ft(R,v,D,K){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,D,K,v.data);else{Y.sort((et,rt)=>et.start-rt.start);let vt=0;for(let et=1;et<Y.length;et++){const rt=Y[vt],Mt=Y[et],bt=rt.start+rt.count,mt=ee(Mt.start,v.width,4),qt=ee(rt.start,v.width,4);Mt.start<=bt+1&&mt===qt&&ee(Mt.start+Mt.count-1,v.width,4)===mt?rt.count=Math.max(rt.count,Mt.start+Mt.count-rt.start):(++vt,Y[vt]=Mt)}Y.length=vt+1;const at=r.getParameter(r.UNPACK_ROW_LENGTH),Lt=r.getParameter(r.UNPACK_SKIP_PIXELS),Nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let et=0,rt=Y.length;et<rt;et++){const Mt=Y[et],bt=Math.floor(Mt.start/4),mt=Math.ceil(Mt.count/4),qt=bt%v.width,B=Math.floor(bt/v.width),lt=mt,ot=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),e.texSubImage2D(r.TEXTURE_2D,0,qt,B,lt,ot,D,K,v.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,at),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Lt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Nt)}}function q(R,v,D){let K=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=r.TEXTURE_3D);const Q=Rt(R,v),Y=v.source;e.bindTexture(K,R.__webglTexture,r.TEXTURE0+D);const vt=n.get(Y);if(Y.version!==vt.__version||Q===!0){e.activeTexture(r.TEXTURE0+D);const at=jt.getPrimaries(jt.workingColorSpace),Lt=v.colorSpace===Si?null:jt.getPrimaries(v.colorSpace),Nt=v.colorSpace===Si||at===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let et=_(v.image,!1,i.maxTextureSize);et=ce(v,et);const rt=s.convert(v.format,v.colorSpace),Mt=s.convert(v.type);let bt=S(v.internalFormat,rt,Mt,v.colorSpace,v.isVideoTexture);dt(K,v);let mt;const qt=v.mipmaps,B=v.isVideoTexture!==!0,lt=vt.__version===void 0||Q===!0,ot=Y.dataReady,_t=A(v,et);if(v.isDepthTexture)bt=M(v.format===Qi,v.type),lt&&(B?e.texStorage2D(r.TEXTURE_2D,1,bt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,bt,et.width,et.height,0,rt,Mt,null));else if(v.isDataTexture)if(qt.length>0){B&&lt&&e.texStorage2D(r.TEXTURE_2D,_t,bt,qt[0].width,qt[0].height);for(let nt=0,$=qt.length;nt<$;nt++)mt=qt[nt],B?ot&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,mt.width,mt.height,rt,Mt,mt.data):e.texImage2D(r.TEXTURE_2D,nt,bt,mt.width,mt.height,0,rt,Mt,mt.data);v.generateMipmaps=!1}else B?(lt&&e.texStorage2D(r.TEXTURE_2D,_t,bt,et.width,et.height),ot&&Ft(v,et,rt,Mt)):e.texImage2D(r.TEXTURE_2D,0,bt,et.width,et.height,0,rt,Mt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,bt,qt[0].width,qt[0].height,et.depth);for(let nt=0,$=qt.length;nt<$;nt++)if(mt=qt[nt],v.format!==dn)if(rt!==null)if(B){if(ot)if(v.layerUpdates.size>0){const St=gd(mt.width,mt.height,v.format,v.type);for(const Ot of v.layerUpdates){const fe=mt.data.subarray(Ot*St/mt.data.BYTES_PER_ELEMENT,(Ot+1)*St/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,Ot,mt.width,mt.height,1,rt,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,et.depth,rt,mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,bt,mt.width,mt.height,et.depth,0,mt.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ot&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,et.depth,rt,Mt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,bt,mt.width,mt.height,et.depth,0,rt,Mt,mt.data)}else{B&&lt&&e.texStorage2D(r.TEXTURE_2D,_t,bt,qt[0].width,qt[0].height);for(let nt=0,$=qt.length;nt<$;nt++)mt=qt[nt],v.format!==dn?rt!==null?B?ot&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,mt.width,mt.height,rt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,bt,mt.width,mt.height,0,mt.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ot&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,mt.width,mt.height,rt,Mt,mt.data):e.texImage2D(r.TEXTURE_2D,nt,bt,mt.width,mt.height,0,rt,Mt,mt.data)}else if(v.isDataArrayTexture)if(B){if(lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,bt,et.width,et.height,et.depth),ot)if(v.layerUpdates.size>0){const nt=gd(et.width,et.height,v.format,v.type);for(const $ of v.layerUpdates){const St=et.data.subarray($*nt/et.data.BYTES_PER_ELEMENT,($+1)*nt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,et.width,et.height,1,rt,Mt,St)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,rt,Mt,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,et.width,et.height,et.depth,0,rt,Mt,et.data);else if(v.isData3DTexture)B?(lt&&e.texStorage3D(r.TEXTURE_3D,_t,bt,et.width,et.height,et.depth),ot&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,rt,Mt,et.data)):e.texImage3D(r.TEXTURE_3D,0,bt,et.width,et.height,et.depth,0,rt,Mt,et.data);else if(v.isFramebufferTexture){if(lt)if(B)e.texStorage2D(r.TEXTURE_2D,_t,bt,et.width,et.height);else{let nt=et.width,$=et.height;for(let St=0;St<_t;St++)e.texImage2D(r.TEXTURE_2D,St,bt,nt,$,0,rt,Mt,null),nt>>=1,$>>=1}}else if(qt.length>0){if(B&&lt){const nt=yt(qt[0]);e.texStorage2D(r.TEXTURE_2D,_t,bt,nt.width,nt.height)}for(let nt=0,$=qt.length;nt<$;nt++)mt=qt[nt],B?ot&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,rt,Mt,mt):e.texImage2D(r.TEXTURE_2D,nt,bt,rt,Mt,mt);v.generateMipmaps=!1}else if(B){if(lt){const nt=yt(et);e.texStorage2D(r.TEXTURE_2D,_t,bt,nt.width,nt.height)}ot&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,Mt,et)}else e.texImage2D(r.TEXTURE_2D,0,bt,rt,Mt,et);p(v)&&g(K),vt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function j(R,v,D){if(v.image.length!==6)return;const K=Rt(R,v),Q=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+D);const Y=n.get(Q);if(Q.version!==Y.__version||K===!0){e.activeTexture(r.TEXTURE0+D);const vt=jt.getPrimaries(jt.workingColorSpace),at=v.colorSpace===Si?null:jt.getPrimaries(v.colorSpace),Lt=v.colorSpace===Si||vt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Nt=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,rt=[];for(let $=0;$<6;$++)!Nt&&!et?rt[$]=_(v.image[$],!0,i.maxCubemapSize):rt[$]=et?v.image[$].image:v.image[$],rt[$]=ce(v,rt[$]);const Mt=rt[0],bt=s.convert(v.format,v.colorSpace),mt=s.convert(v.type),qt=S(v.internalFormat,bt,mt,v.colorSpace),B=v.isVideoTexture!==!0,lt=Y.__version===void 0||K===!0,ot=Q.dataReady;let _t=A(v,Mt);dt(r.TEXTURE_CUBE_MAP,v);let nt;if(Nt){B&&lt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,qt,Mt.width,Mt.height);for(let $=0;$<6;$++){nt=rt[$].mipmaps;for(let St=0;St<nt.length;St++){const Ot=nt[St];v.format!==dn?bt!==null?B?ot&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,St,0,0,Ot.width,Ot.height,bt,Ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,St,qt,Ot.width,Ot.height,0,Ot.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,St,0,0,Ot.width,Ot.height,bt,mt,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,St,qt,Ot.width,Ot.height,0,bt,mt,Ot.data)}}}else{if(nt=v.mipmaps,B&&lt){nt.length>0&&_t++;const $=yt(rt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,qt,$.width,$.height)}for(let $=0;$<6;$++)if(et){B?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,rt[$].width,rt[$].height,bt,mt,rt[$].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,rt[$].width,rt[$].height,0,bt,mt,rt[$].data);for(let St=0;St<nt.length;St++){const fe=nt[St].image[$].image;B?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,St+1,0,0,fe.width,fe.height,bt,mt,fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,St+1,qt,fe.width,fe.height,0,bt,mt,fe.data)}}else{B?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,bt,mt,rt[$]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,bt,mt,rt[$]);for(let St=0;St<nt.length;St++){const Ot=nt[St];B?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,St+1,0,0,bt,mt,Ot.image[$]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,St+1,qt,bt,mt,Ot.image[$])}}}p(v)&&g(r.TEXTURE_CUBE_MAP),Y.__version=Q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function it(R,v,D,K,Q,Y){const vt=s.convert(D.format,D.colorSpace),at=s.convert(D.type),Lt=S(D.internalFormat,vt,at,D.colorSpace),Nt=n.get(v),et=n.get(D);if(et.__renderTarget=v,!Nt.__hasExternalTextures){const rt=Math.max(1,v.width>>Y),Mt=Math.max(1,v.height>>Y);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,Lt,rt,Mt,v.depth,0,vt,at,null):e.texImage2D(Q,Y,Lt,rt,Mt,0,vt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Me(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Q,et.__webglTexture,0,P(v)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Q,et.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(R,v,D){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){const K=v.depthTexture,Q=K&&K.isDepthTexture?K.type:null,Y=M(v.stencilBuffer,Q),vt=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Me(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(v),Y,v.width,v.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(v),Y,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Y,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,R)}else{const K=v.textures;for(let Q=0;Q<K.length;Q++){const Y=K[Q],vt=s.convert(Y.format,Y.colorSpace),at=s.convert(Y.type),Lt=S(Y.internalFormat,vt,at,Y.colorSpace);Me(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P(v),Lt,v.width,v.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,P(v),Lt,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Lt,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(R,v,D){const K=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),dt(r.TEXTURE_CUBE_MAP,v.depthTexture);const Nt=s.convert(v.depthTexture.format),et=s.convert(v.depthTexture.type);let rt;v.depthTexture.format===oi?rt=r.DEPTH_COMPONENT24:v.depthTexture.format===Qi&&(rt=r.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,rt,v.width,v.height,0,Nt,et,null)}}else F(v.depthTexture,0);const Y=Q.__webglTexture,vt=P(v),at=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+D:r.TEXTURE_2D,Lt=v.depthTexture.format===Qi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===oi)Me(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Lt,at,Y,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,Lt,at,Y,0);else if(v.depthTexture.format===Qi)Me(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Lt,at,Y,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,Lt,at,Y,0);else throw new Error("Unknown depthTexture format")}function Dt(R){const v=n.get(R),D=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=K}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let K=0;K<6;K++)At(v.__webglFramebuffer[K],R,K);else{const K=R.texture.mipmaps;K&&K.length>0?At(v.__webglFramebuffer[0],R,0):At(v.__webglFramebuffer,R,0)}else if(D){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=r.createRenderbuffer(),Pt(v.__webglDepthbuffer[K],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Y)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Pt(v.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Y)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(R,v,D){const K=n.get(R);v!==void 0&&it(K.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&Dt(R)}function kt(R){const v=R.texture,D=n.get(R),K=n.get(v);R.addEventListener("dispose",w);const Q=R.textures,Y=R.isWebGLCubeRenderTarget===!0,vt=Q.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=v.version,o.memory.textures++),Y){D.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[at]=[];for(let Lt=0;Lt<v.mipmaps.length;Lt++)D.__webglFramebuffer[at][Lt]=r.createFramebuffer()}else D.__webglFramebuffer[at]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)D.__webglFramebuffer[at]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(vt)for(let at=0,Lt=Q.length;at<Lt;at++){const Nt=n.get(Q[at]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Me(R)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){const Lt=Q[at];D.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[at]);const Nt=s.convert(Lt.format,Lt.colorSpace),et=s.convert(Lt.type),rt=S(Lt.internalFormat,Nt,et,Lt.colorSpace,R.isXRRenderTarget===!0),Mt=P(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,rt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,D.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(D.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),dt(r.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let Lt=0;Lt<v.mipmaps.length;Lt++)it(D.__webglFramebuffer[at][Lt],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt);else it(D.__webglFramebuffer[at],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(v)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,Lt=Q.length;at<Lt;at++){const Nt=Q[at],et=n.get(Nt);let rt=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,et.__webglTexture),dt(rt,Nt),it(D.__webglFramebuffer,R,Nt,r.COLOR_ATTACHMENT0+at,rt,0),p(Nt)&&g(rt)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),dt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let Lt=0;Lt<v.mipmaps.length;Lt++)it(D.__webglFramebuffer[Lt],R,v,r.COLOR_ATTACHMENT0,at,Lt);else it(D.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,at,0);p(v)&&g(at),e.unbindTexture()}R.depthBuffer&&Dt(R)}function ne(R){const v=R.textures;for(let D=0,K=v.length;D<K;D++){const Q=v[D];if(p(Q)){const Y=y(R),vt=n.get(Q).__webglTexture;e.bindTexture(Y,vt),g(Y),e.unbindTexture()}}}const ie=[],Wt=[];function me(R){if(R.samples>0){if(Me(R)===!1){const v=R.textures,D=R.width,K=R.height;let Q=r.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(R),at=v.length>1;if(at)for(let Nt=0;Nt<v.length;Nt++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const Lt=R.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Nt=0;Nt<v.length;Nt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Nt]);const et=n.get(v[Nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,D,K,0,0,D,K,Q,r.NEAREST),l===!0&&(ie.length=0,Wt.length=0,ie.push(r.COLOR_ATTACHMENT0+Nt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ie.push(Y),Wt.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let Nt=0;Nt<v.length;Nt++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Nt]);const et=n.get(v[Nt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,et,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function P(R){return Math.min(i.maxSamples,R.samples)}function Me(R){const v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qt(R){const v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function ce(R,v){const D=R.colorSpace,K=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||D!==Ye&&D!==Si&&(jt.getTransfer(D)===re?(K!==dn||Q!==sn)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",D)),v}function yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=tt,this.rebindTextures=xe,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function BM(r,t){function e(n,i=Si){let s;const o=jt.getTransfer(i);if(n===sn)return r.UNSIGNED_BYTE;if(n===Ch)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Rh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Mp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===xp)return r.BYTE;if(n===yp)return r.SHORT;if(n===$r)return r.UNSIGNED_SHORT;if(n===wh)return r.INT;if(n===zn)return r.UNSIGNED_INT;if(n===un)return r.FLOAT;if(n===ri)return r.HALF_FLOAT;if(n===Sp)return r.ALPHA;if(n===bp)return r.RGB;if(n===dn)return r.RGBA;if(n===oi)return r.DEPTH_COMPONENT;if(n===Qi)return r.DEPTH_STENCIL;if(n===Ih)return r.RED;if(n===Lh)return r.RED_INTEGER;if(n===Xs)return r.RG;if(n===Ph)return r.RG_INTEGER;if(n===Dh)return r.RGBA_INTEGER;if(n===ra||n===oa||n===aa||n===la)if(o===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oc||n===ac)return o===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return s.COMPRESSED_R11_EAC;if(n===hc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===uc)return s.COMPRESSED_RG11_EAC;if(n===dc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Ec||n===Tc||n===Ac)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_c)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Cc||n===Rc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===wc)return o===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===Lc||n===Pc||n===Dc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ic)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const UM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NM=`
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

}`;class FM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Oe({vertexShader:UM,fragmentShader:NM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new Js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kM extends js{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new FM,g={},y=e.getContextAttributes();let S=null,M=null;const A=[],C=[],w=new Gt;let x=null;const b=new $e;b.viewport=new ge;const V=new $e;V.viewport=new ge;const I=[b,V],k=new N_;let O=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=A[q];return j===void 0&&(j=new Ka,A[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=A[q];return j===void 0&&(j=new Ka,A[q]=j),j.getGripSpace()},this.getHand=function(q){let j=A[q];return j===void 0&&(j=new Ka,A[q]=j),j.getHandSpace()};function F(q){const j=C.indexOf(q.inputSource);if(j===-1)return;const it=A[j];it!==void 0&&(it.update(q.inputSource,q.frame,c||o),it.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",z);for(let q=0;q<A.length;q++){const j=C[q];j!==null&&(C[q]=null,A[q].disconnect(j))}O=null,N=null,p.reset();for(const q in g)delete g[q];t.setRenderTarget(S),f=null,d=null,u=null,i=null,M=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Pt=null,At=null;y.depth&&(At=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=y.stencil?Qi:oi,Pt=y.stencil?Yr:zn);const Dt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Dt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new kn(d.textureWidth,d.textureHeight,{format:dn,type:sn,depthTexture:new Qr(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const it={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new kn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(q){for(let j=0;j<q.removed.length;j++){const it=q.removed[j],Pt=C.indexOf(it);Pt>=0&&(C[Pt]=null,A[Pt].disconnect(it))}for(let j=0;j<q.added.length;j++){const it=q.added[j];let Pt=C.indexOf(it);if(Pt===-1){for(let Dt=0;Dt<A.length;Dt++)if(Dt>=C.length){C.push(it),Pt=Dt;break}else if(C[Dt]===null){C[Dt]=it,Pt=Dt;break}if(Pt===-1)break}const At=A[Pt];At&&At.connect(it)}}const tt=new L,J=new L;function st(q,j,it){tt.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(it.matrixWorld);const Pt=tt.distanceTo(J),At=j.projectionMatrix.elements,Dt=it.projectionMatrix.elements,xe=At[14]/(At[10]-1),kt=At[14]/(At[10]+1),ne=(At[9]+1)/At[5],ie=(At[9]-1)/At[5],Wt=(At[8]-1)/At[0],me=(Dt[8]+1)/Dt[0],P=xe*Wt,Me=xe*me,Qt=Pt/(-Wt+me),ce=Qt*-Wt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ce),q.translateZ(Qt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const yt=xe+Qt,R=kt+Qt,v=P-ce,D=Me+(Pt-ce),K=ne*kt/R*yt,Q=ie*kt/R*yt;q.projectionMatrix.makePerspective(v,D,K,Q,yt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ct(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let j=q.near,it=q.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(it=p.depthFar)),k.near=V.near=b.near=j,k.far=V.far=b.far=it,(O!==k.near||N!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,N=k.far),k.layers.mask=q.layers.mask|6,b.layers.mask=k.layers.mask&-5,V.layers.mask=k.layers.mask&-3;const Pt=q.parent,At=k.cameras;ct(k,Pt);for(let Dt=0;Dt<At.length;Dt++)ct(At[Dt],Pt);At.length===2?st(k,b,V):k.projectionMatrix.copy(b.projectionMatrix),dt(q,k,Pt)};function dt(q,j,it){it===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(it.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(q){return g[q]};let Rt=null;function ee(q,j){if(h=j.getViewerPose(c||o),m=j,h!==null){const it=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Pt=!1;it.length!==k.cameras.length&&(k.cameras.length=0,Pt=!0);for(let kt=0;kt<it.length;kt++){const ne=it[kt];let ie=null;if(f!==null)ie=f.getViewport(ne);else{const me=u.getViewSubImage(d,ne);ie=me.viewport,kt===0&&(t.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(M))}let Wt=I[kt];Wt===void 0&&(Wt=new $e,Wt.layers.enable(kt),Wt.viewport=new ge,I[kt]=Wt),Wt.matrix.fromArray(ne.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(ne.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ie.x,ie.y,ie.width,ie.height),kt===0&&(k.matrix.copy(Wt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pt===!0&&k.cameras.push(Wt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const kt=u.getDepthInformation(it[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,i.renderState)}if(At&&At.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let kt=0;kt<it.length;kt++){const ne=it[kt].camera;if(ne){let ie=g[ne];ie||(ie=new Bp,g[ne]=ie);const Wt=u.getCameraImage(ne);ie.sourceTexture=Wt}}}}for(let it=0;it<A.length;it++){const Pt=C[it],At=A[it];Pt!==null&&At!==void 0&&At.update(Pt,j,c||o)}Rt&&Rt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}const Ft=new Hp;Ft.setAnimationLoop(ee),this.setAnimationLoop=function(q){Rt=q},this.dispose=function(){}}}const Fi=new pn,OM=new Bt;function zM(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Up(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,S,M){g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===We&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===We&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=t.get(g),S=y.envMap,M=y.envMapRotation;S&&(p.envMap.value=S,Fi.copy(M),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.envMapRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Fi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=S*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===We&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function VM(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=i[y.id];M===void 0&&(m(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(y,A);const C=t.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function h(y){const S=u();y.__bindingPointIndex=S;const M=r.createBuffer(),A=y.__size,C=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=i[y.id],M=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let C=0,w=M.length;C<w;C++){const x=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,V=x.length;b<V;b++){const I=x[b];if(f(I,C,b,A)===!0){const k=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let N=0;for(let F=0;F<O.length;F++){const H=O[F],z=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,k+N,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,M,A){const C=y.value,w=S+"_"+M;if(A[w]===void 0)return typeof C=="number"||typeof C=="boolean"?A[w]=C:A[w]=C.clone(),!0;{const x=A[w];if(typeof C=="number"||typeof C=="boolean"){if(x!==C)return A[w]=C,!0}else if(x.equals(C)===!1)return x.copy(C),!0}return!1}function m(y){const S=y.uniforms;let M=0;const A=16;for(let w=0,x=S.length;w<x;w++){const b=Array.isArray(S[w])?S[w]:[S[w]];for(let V=0,I=b.length;V<I;V++){const k=b[V],O=Array.isArray(k.value)?k.value:[k.value];for(let N=0,F=O.length;N<F;N++){const H=O[N],z=_(H),tt=M%A,J=tt%z.boundary,st=tt+J;M+=J,st!==0&&A-st<z.storage&&(M+=A-st),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=z.storage}}}const C=M%A;return C>0&&(M+=A-C),y.__size=M,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xt("WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function g(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}const HM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function GM(){return Rn===null&&(Rn=new Oh(HM,16,16,Xs,ri),Rn.name="DFG_LUT",Rn.minFilter=Ce,Rn.magFilter=Ce,Rn.wrapS=Bn,Rn.wrapT=Bn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class WM{constructor(t={}){const{canvas:e=hg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=sn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,p=new Set([Dh,Ph,Lh]),g=new Set([sn,zn,$r,Yr,Ch,Rh]),y=new Uint32Array(4),S=new Int32Array(4);let M=null,A=null;const C=[],w=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let V=!1;this._outputColorSpace=Ee;let I=0,k=0,O=null,N=-1,F=null;const H=new ge,z=new ge;let tt=null;const J=new ut(0);let st=0,ct=e.width,dt=e.height,Rt=1,ee=null,Ft=null;const q=new ge(0,0,ct,dt),j=new ge(0,0,ct,dt);let it=!1;const Pt=new La;let At=!1,Dt=!1;const xe=new Bt,kt=new L,ne=new ge,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function me(){return O===null?Rt:1}let P=n;function Me(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ah}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",fe,!1),P===null){const U="webgl2";if(P=Me(U,E),P===null)throw Me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ut("WebGLRenderer: "+E.message),E}let Qt,ce,yt,R,v,D,K,Q,Y,vt,at,Lt,Nt,et,rt,Mt,bt,mt,qt,B,lt,ot,_t;function nt(){Qt=new Wy(P),Qt.init(),lt=new BM(P,Qt),ce=new Ny(P,Qt,t,lt),yt=new PM(P,Qt),ce.reversedDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),R=new $y(P),v=new xM,D=new DM(P,Qt,yt,v,ce,lt,R),K=new Gy(b),Q=new J_(P),ot=new By(P,Q),Y=new Xy(P,Q,R,ot),vt=new Ky(P,Y,Q,ot,R),mt=new Yy(P,ce,D),rt=new Fy(v),at=new _M(b,K,Qt,ce,ot,rt),Lt=new zM(b,v),Nt=new vM,et=new AM(Qt),bt=new Dy(b,K,yt,vt,m,l),Mt=new LM(b,vt,ce),_t=new VM(P,R,ce,yt),qt=new Uy(P,Qt,R),B=new qy(P,Qt,R),R.programs=at.programs,b.capabilities=ce,b.extensions=Qt,b.properties=v,b.renderLists=Nt,b.shadowMap=Mt,b.state=yt,b.info=R}nt(),_!==sn&&(x=new jy(_,e.width,e.height,i,s));const $=new kM(b,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Rt},this.setPixelRatio=function(E){E!==void 0&&(Rt=E,this.setSize(ct,dt,!1))},this.getSize=function(E){return E.set(ct,dt)},this.setSize=function(E,U,X=!0){if($.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=E,dt=U,e.width=Math.floor(E*Rt),e.height=Math.floor(U*Rt),X===!0&&(e.style.width=E+"px",e.style.height=U+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ct*Rt,dt*Rt).floor()},this.setDrawingBufferSize=function(E,U,X){ct=E,dt=U,Rt=X,e.width=Math.floor(E*X),e.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(_===sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,U,X,W){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,U,X,W),yt.viewport(H.copy(q).multiplyScalar(Rt).round())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,U,X,W){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,U,X,W),yt.scissor(z.copy(j).multiplyScalar(Rt).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){yt.setScissorTest(it=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){Ft=E},this.getClearColor=function(E){return E.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let W=0;if(E){let G=!1;if(O!==null){const ft=O.texture.format;G=p.has(ft)}if(G){const ft=O.texture.type,gt=g.has(ft),pt=bt.getClearColor(),Et=bt.getClearAlpha(),wt=pt.r,Vt=pt.g,$t=pt.b;gt?(y[0]=wt,y[1]=Vt,y[2]=$t,y[3]=Et,P.clearBufferuiv(P.COLOR,0,y)):(S[0]=wt,S[1]=Vt,S[2]=$t,S[3]=Et,P.clearBufferiv(P.COLOR,0,S))}else W|=P.COLOR_BUFFER_BIT}U&&(W|=P.DEPTH_BUFFER_BIT),X&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),bt.dispose(),Nt.dispose(),et.dispose(),v.dispose(),K.dispose(),vt.dispose(),ot.dispose(),_t.dispose(),at.dispose(),$.dispose(),$.removeEventListener("sessionstart",mu),$.removeEventListener("sessionend",gu),wi.stop()};function St(E){E.preventDefault(),_a("WebGLRenderer: Context Lost."),V=!0}function Ot(){_a("WebGLRenderer: Context Restored."),V=!1;const E=R.autoReset,U=Mt.enabled,X=Mt.autoUpdate,W=Mt.needsUpdate,G=Mt.type;nt(),R.autoReset=E,Mt.enabled=U,Mt.autoUpdate=X,Mt.needsUpdate=W,Mt.type=G}function fe(E){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const U=E.target;U.removeEventListener("dispose",se),Wn(U)}function Wn(E){Xn(E),v.remove(E)}function Xn(E){const U=v.get(E).programs;U!==void 0&&(U.forEach(function(X){at.releaseProgram(X)}),E.isShaderMaterial&&at.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,W,G,ft){U===null&&(U=ie);const gt=G.isMesh&&G.matrixWorld.determinant()<0,pt=vm(E,U,X,W,G);yt.setMaterial(W,gt);let Et=X.index,wt=1;if(W.wireframe===!0){if(Et=Y.getWireframeAttribute(X),Et===void 0)return;wt=2}const Vt=X.drawRange,$t=X.attributes.position;let Ct=Vt.start*wt,he=(Vt.start+Vt.count)*wt;ft!==null&&(Ct=Math.max(Ct,ft.start*wt),he=Math.min(he,(ft.start+ft.count)*wt)),Et!==null?(Ct=Math.max(Ct,0),he=Math.min(he,Et.count)):$t!=null&&(Ct=Math.max(Ct,0),he=Math.min(he,$t.count));const be=he-Ct;if(be<0||be===1/0)return;ot.setup(G,W,pt,X,Et);let Se,ue=qt;if(Et!==null&&(Se=Q.get(Et),ue=B,ue.setIndex(Se)),G.isMesh)W.wireframe===!0?(yt.setLineWidth(W.wireframeLinewidth*me()),ue.setMode(P.LINES)):ue.setMode(P.TRIANGLES);else if(G.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),yt.setLineWidth(ze*me()),G.isLineSegments?ue.setMode(P.LINES):G.isLineLoop?ue.setMode(P.LINE_LOOP):ue.setMode(P.LINE_STRIP)}else G.isPoints?ue.setMode(P.POINTS):G.isSprite&&ue.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)xa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ue.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ze=G._multiDrawStarts,Tt=G._multiDrawCounts,je=G._multiDrawCount,te=Et?Q.get(Et).bytesPerElement:1,gn=v.get(W).currentProgram.getUniforms();for(let wn=0;wn<je;wn++)gn.setValue(P,"_gl_DrawID",wn),ue.render(ze[wn]/te,Tt[wn])}else if(G.isInstancedMesh)ue.renderInstances(Ct,be,G.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,ze);ue.renderInstances(Ct,be,Tt)}else ue.render(Ct,be)};function pu(E,U,X){E.transparent===!0&&E.side===Ge&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,io(E,U,X),E.side=rn,E.needsUpdate=!0,io(E,U,X),E.side=Ge):io(E,U,X)}this.compile=function(E,U,X=null){X===null&&(X=E),A=et.get(X),A.init(U),w.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const W=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ft=G.material;if(ft)if(Array.isArray(ft))for(let gt=0;gt<ft.length;gt++){const pt=ft[gt];pu(pt,X,G),W.add(pt)}else pu(ft,X,G),W.add(ft)}),A=w.pop(),W},this.compileAsync=function(E,U,X=null){const W=this.compile(E,U,X);return new Promise(G=>{function ft(){if(W.forEach(function(gt){v.get(gt).currentProgram.isReady()&&W.delete(gt)}),W.size===0){G(E);return}setTimeout(ft,10)}Qt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Oa=null;function ym(E){Oa&&Oa(E)}function mu(){wi.stop()}function gu(){wi.start()}const wi=new Hp;wi.setAnimationLoop(ym),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(E){Oa=E,$.setAnimationLoop(E),E===null?wi.stop():wi.start()},$.addEventListener("sessionstart",mu),$.addEventListener("sessionend",gu),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const X=$.enabled===!0&&$.isPresenting===!0,W=x!==null&&(O===null||X)&&x.begin(b,O);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,U,O),A=et.get(E,w.length),A.init(U),w.push(A),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pt.setFromProjectionMatrix(xe,Un,U.reversedDepth),Dt=this.localClippingEnabled,At=rt.init(this.clippingPlanes,Dt),M=Nt.get(E,C.length),M.init(),C.push(M),$.enabled===!0&&$.isPresenting===!0){const gt=b.xr.getDepthSensingMesh();gt!==null&&za(gt,U,-1/0,b.sortObjects)}za(E,U,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(ee,Ft),Wt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Wt&&bt.addToRenderList(M,E),this.info.render.frame++,At===!0&&rt.beginShadows();const G=A.state.shadowsArray;if(Mt.render(G,E,U),At===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&x.hasRenderPass())===!1){const gt=M.opaque,pt=M.transmissive;if(A.setupLights(),U.isArrayCamera){const Et=U.cameras;if(pt.length>0)for(let wt=0,Vt=Et.length;wt<Vt;wt++){const $t=Et[wt];xu(gt,pt,E,$t)}Wt&&bt.render(E);for(let wt=0,Vt=Et.length;wt<Vt;wt++){const $t=Et[wt];_u(M,E,$t,$t.viewport)}}else pt.length>0&&xu(gt,pt,E,U),Wt&&bt.render(E),_u(M,E,U)}O!==null&&k===0&&(D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O)),W&&x.end(b),E.isScene===!0&&E.onAfterRender(b,E,U),ot.resetDefaultState(),N=-1,F=null,w.pop(),w.length>0?(A=w[w.length-1],At===!0&&rt.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?M=C[C.length-1]:M=null};function za(E,U,X,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pt.intersectsSprite(E)){W&&ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xe);const gt=vt.update(E),pt=E.material;pt.visible&&M.push(E,gt,pt,X,ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pt.intersectsObject(E))){const gt=vt.update(E),pt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ne.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ne.copy(gt.boundingSphere.center)),ne.applyMatrix4(E.matrixWorld).applyMatrix4(xe)),Array.isArray(pt)){const Et=gt.groups;for(let wt=0,Vt=Et.length;wt<Vt;wt++){const $t=Et[wt],Ct=pt[$t.materialIndex];Ct&&Ct.visible&&M.push(E,gt,Ct,X,ne.z,$t)}}else pt.visible&&M.push(E,gt,pt,X,ne.z,null)}}const ft=E.children;for(let gt=0,pt=ft.length;gt<pt;gt++)za(ft[gt],U,X,W)}function _u(E,U,X,W){const{opaque:G,transmissive:ft,transparent:gt}=E;A.setupLightsView(X),At===!0&&rt.setGlobalState(b.clippingPlanes,X),W&&yt.viewport(H.copy(W)),G.length>0&&no(G,U,X),ft.length>0&&no(ft,U,X),gt.length>0&&no(gt,U,X),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function xu(E,U,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const Ct=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new kn(1,1,{generateMipmaps:!0,type:Ct?ri:sn,minFilter:ti,samples:Math.max(4,ce.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const ft=A.state.transmissionRenderTarget[W.id],gt=W.viewport||H;ft.setSize(gt.z*b.transmissionResolutionScale,gt.w*b.transmissionResolutionScale);const pt=b.getRenderTarget(),Et=b.getActiveCubeFace(),wt=b.getActiveMipmapLevel();b.setRenderTarget(ft),b.getClearColor(J),st=b.getClearAlpha(),st<1&&b.setClearColor(16777215,.5),b.clear(),Wt&&bt.render(X);const Vt=b.toneMapping;b.toneMapping=Fn;const $t=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),At===!0&&rt.setGlobalState(b.clippingPlanes,W),no(E,X,W),D.updateMultisampleRenderTarget(ft),D.updateRenderTargetMipmap(ft),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let he=0,be=U.length;he<be;he++){const Se=U[he],{object:ue,geometry:ze,material:Tt,group:je}=Se;if(Tt.side===Ge&&ue.layers.test(W.layers)){const te=Tt.side;Tt.side=We,Tt.needsUpdate=!0,yu(ue,X,W,ze,Tt,je),Tt.side=te,Tt.needsUpdate=!0,Ct=!0}}Ct===!0&&(D.updateMultisampleRenderTarget(ft),D.updateRenderTargetMipmap(ft))}b.setRenderTarget(pt,Et,wt),b.setClearColor(J,st),$t!==void 0&&(W.viewport=$t),b.toneMapping=Vt}function no(E,U,X){const W=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ft=E.length;G<ft;G++){const gt=E[G],{object:pt,geometry:Et,group:wt}=gt;let Vt=gt.material;Vt.allowOverride===!0&&W!==null&&(Vt=W),pt.layers.test(X.layers)&&yu(pt,U,X,Et,Vt,wt)}}function yu(E,U,X,W,G,ft){E.onBeforeRender(b,U,X,W,G,ft),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(b,U,X,W,E,ft),G.transparent===!0&&G.side===Ge&&G.forceSinglePass===!1?(G.side=We,G.needsUpdate=!0,b.renderBufferDirect(X,U,W,G,E,ft),G.side=rn,G.needsUpdate=!0,b.renderBufferDirect(X,U,W,G,E,ft),G.side=Ge):b.renderBufferDirect(X,U,W,G,E,ft),E.onAfterRender(b,U,X,W,G,ft)}function io(E,U,X){U.isScene!==!0&&(U=ie);const W=v.get(E),G=A.state.lights,ft=A.state.shadowsArray,gt=G.state.version,pt=at.getParameters(E,G.state,ft,U,X),Et=at.getProgramCacheKey(pt);let wt=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Vt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=K.get(E.envMap||W.environment,Vt),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,wt===void 0&&(E.addEventListener("dispose",se),wt=new Map,W.programs=wt);let $t=wt.get(Et);if($t!==void 0){if(W.currentProgram===$t&&W.lightsStateVersion===gt)return Mu(E,pt),$t}else pt.uniforms=at.getUniforms(E),E.onBeforeCompile(pt,b),$t=at.acquireProgram(pt,Et),wt.set(Et,$t),W.uniforms=pt.uniforms;const Ct=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),Mu(E,pt),W.needsLights=Sm(E),W.lightsStateVersion=gt,W.needsLights&&(Ct.ambientLightColor.value=G.state.ambient,Ct.lightProbe.value=G.state.probe,Ct.directionalLights.value=G.state.directional,Ct.directionalLightShadows.value=G.state.directionalShadow,Ct.spotLights.value=G.state.spot,Ct.spotLightShadows.value=G.state.spotShadow,Ct.rectAreaLights.value=G.state.rectArea,Ct.ltc_1.value=G.state.rectAreaLTC1,Ct.ltc_2.value=G.state.rectAreaLTC2,Ct.pointLights.value=G.state.point,Ct.pointLightShadows.value=G.state.pointShadow,Ct.hemisphereLights.value=G.state.hemi,Ct.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ct.spotLightMatrix.value=G.state.spotLightMatrix,Ct.spotLightMap.value=G.state.spotLightMap,Ct.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=$t,W.uniformsList=null,$t}function vu(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=ca.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Mu(E,U){const X=v.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function vm(E,U,X,W,G){U.isScene!==!0&&(U=ie),D.resetTextureUnits();const ft=U.fog,gt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,pt=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ye,Et=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,wt=K.get(W.envMap||gt,Et),Vt=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$t=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!X.morphAttributes.position,he=!!X.morphAttributes.normal,be=!!X.morphAttributes.color;let Se=Fn;W.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Se=b.toneMapping);const ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ze=ue!==void 0?ue.length:0,Tt=v.get(W),je=A.state.lights;if(At===!0&&(Dt===!0||E!==F)){const Pe=E===F&&W.id===N;rt.setState(W,E,Pe)}let te=!1;W.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==je.state.version||Tt.outputColorSpace!==pt||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==wt||W.fog===!0&&Tt.fog!==ft||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==rt.numPlanes||Tt.numIntersection!==rt.numIntersection)||Tt.vertexAlphas!==Vt||Tt.vertexTangents!==$t||Tt.morphTargets!==Ct||Tt.morphNormals!==he||Tt.morphColors!==be||Tt.toneMapping!==Se||Tt.morphTargetsCount!==ze)&&(te=!0):(te=!0,Tt.__version=W.version);let gn=Tt.currentProgram;te===!0&&(gn=io(W,U,G));let wn=!1,Ci=!1,ss=!1;const de=gn.getUniforms(),Ne=Tt.uniforms;if(yt.useProgram(gn.program)&&(wn=!0,Ci=!0,ss=!0),W.id!==N&&(N=W.id,Ci=!0),wn||F!==E){yt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),de.setValue(P,"projectionMatrix",E.projectionMatrix),de.setValue(P,"viewMatrix",E.matrixWorldInverse);const ci=de.map.cameraPosition;ci!==void 0&&ci.setValue(P,kt.setFromMatrixPosition(E.matrixWorld)),ce.logarithmicDepthBuffer&&de.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&de.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,Ci=!0,ss=!0)}if(Tt.needsLights&&(je.state.directionalShadowMap.length>0&&de.setValue(P,"directionalShadowMap",je.state.directionalShadowMap,D),je.state.spotShadowMap.length>0&&de.setValue(P,"spotShadowMap",je.state.spotShadowMap,D),je.state.pointShadowMap.length>0&&de.setValue(P,"pointShadowMap",je.state.pointShadowMap,D)),G.isSkinnedMesh){de.setOptional(P,G,"bindMatrix"),de.setOptional(P,G,"bindMatrixInverse");const Pe=G.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),de.setValue(P,"boneTexture",Pe.boneTexture,D))}G.isBatchedMesh&&(de.setOptional(P,G,"batchingTexture"),de.setValue(P,"batchingTexture",G._matricesTexture,D),de.setOptional(P,G,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",G._indirectTexture,D),de.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&de.setValue(P,"batchingColorTexture",G._colorsTexture,D));const li=X.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&mt.update(G,X,gn),(Ci||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,de.setValue(P,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Ne.envMapIntensity.value=U.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=GM()),Ci&&(de.setValue(P,"toneMappingExposure",b.toneMappingExposure),Tt.needsLights&&Mm(Ne,ss),ft&&W.fog===!0&&Lt.refreshFogUniforms(Ne,ft),Lt.refreshMaterialUniforms(Ne,W,Rt,dt,A.state.transmissionRenderTarget[E.id]),ca.upload(P,vu(Tt),Ne,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ca.upload(P,vu(Tt),Ne,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&de.setValue(P,"center",G.center),de.setValue(P,"modelViewMatrix",G.modelViewMatrix),de.setValue(P,"normalMatrix",G.normalMatrix),de.setValue(P,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pe=W.uniformsGroups;for(let ci=0,rs=Pe.length;ci<rs;ci++){const Su=Pe[ci];_t.update(Su,gn),_t.bind(Su,gn)}}return gn}function Mm(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Sm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,U,X){const W=v.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=U,v.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const X=v.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};const bm=P.createFramebuffer();this.setRenderTarget=function(E,U=0,X=0){O=E,I=U,k=X;let W=null,G=!1,ft=!1;if(E){const pt=v.get(E);if(pt.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(P.FRAMEBUFFER,pt.__webglFramebuffer),H.copy(E.viewport),z.copy(E.scissor),tt=E.scissorTest,yt.viewport(H),yt.scissor(z),yt.setScissorTest(tt),N=-1;return}else if(pt.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(pt.__hasExternalTextures)D.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Vt=E.depthTexture;if(pt.__boundDepthTexture!==Vt){if(Vt!==null&&v.has(Vt)&&(E.width!==Vt.image.width||E.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ft=!0);const wt=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[U])?W=wt[U][X]:W=wt[U],G=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?W=v.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?W=wt[X]:W=wt,H.copy(E.viewport),z.copy(E.scissor),tt=E.scissorTest}else H.copy(q).multiplyScalar(Rt).floor(),z.copy(j).multiplyScalar(Rt).floor(),tt=it;if(X!==0&&(W=bm),yt.bindFramebuffer(P.FRAMEBUFFER,W)&&yt.drawBuffers(E,W),yt.viewport(H),yt.scissor(z),yt.setScissorTest(tt),G){const pt=v.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,X)}else if(ft){const pt=U;for(let Et=0;Et<E.textures.length;Et++){const wt=v.get(E.textures[Et]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Et,wt.__webglTexture,X,pt)}}else if(E!==null&&X!==0){const pt=v.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pt.__webglTexture,X)}N=-1},this.readRenderTargetPixels=function(E,U,X,W,G,ft,gt,pt=0){if(!(E&&E.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){yt.bindFramebuffer(P.FRAMEBUFFER,Et);try{const wt=E.textures[pt],Vt=wt.format,$t=wt.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pt),!ce.textureFormatReadable(Vt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable($t)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&X>=0&&X<=E.height-G&&P.readPixels(U,X,W,G,lt.convert(Vt),lt.convert($t),ft)}finally{const wt=O!==null?v.get(O).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,W,G,ft,gt,pt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et)if(U>=0&&U<=E.width-W&&X>=0&&X<=E.height-G){yt.bindFramebuffer(P.FRAMEBUFFER,Et);const wt=E.textures[pt],Vt=wt.format,$t=wt.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pt),!ce.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.bufferData(P.PIXEL_PACK_BUFFER,ft.byteLength,P.STREAM_READ),P.readPixels(U,X,W,G,lt.convert(Vt),lt.convert($t),0);const he=O!==null?v.get(O).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,he);const be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ug(P,be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ft),P.deleteBuffer(Ct),P.deleteSync(be),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){const W=Math.pow(2,-X),G=Math.floor(E.image.width*W),ft=Math.floor(E.image.height*W),gt=U!==null?U.x:0,pt=U!==null?U.y:0;D.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,gt,pt,G,ft),yt.unbindTexture()};const Em=P.createFramebuffer(),Tm=P.createFramebuffer();this.copyTextureToTexture=function(E,U,X=null,W=null,G=0,ft=0){let gt,pt,Et,wt,Vt,$t,Ct,he,be;const Se=E.isCompressedTexture?E.mipmaps[ft]:E.image;if(X!==null)gt=X.max.x-X.min.x,pt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,Vt=X.min.y,$t=X.isBox3?X.min.z:0;else{const Ne=Math.pow(2,-G);gt=Math.floor(Se.width*Ne),pt=Math.floor(Se.height*Ne),E.isDataArrayTexture?Et=Se.depth:E.isData3DTexture?Et=Math.floor(Se.depth*Ne):Et=1,wt=0,Vt=0,$t=0}W!==null?(Ct=W.x,he=W.y,be=W.z):(Ct=0,he=0,be=0);const ue=lt.convert(U.format),ze=lt.convert(U.type);let Tt;U.isData3DTexture?(D.setTexture3D(U,0),Tt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(D.setTexture2DArray(U,0),Tt=P.TEXTURE_2D_ARRAY):(D.setTexture2D(U,0),Tt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const je=P.getParameter(P.UNPACK_ROW_LENGTH),te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gn=P.getParameter(P.UNPACK_SKIP_PIXELS),wn=P.getParameter(P.UNPACK_SKIP_ROWS),Ci=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Se.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Se.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$t);const ss=E.isDataArrayTexture||E.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Ne=v.get(E),li=v.get(U),Pe=v.get(Ne.__renderTarget),ci=v.get(li.__renderTarget);yt.bindFramebuffer(P.READ_FRAMEBUFFER,Pe.__webglFramebuffer),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let rs=0;rs<Et;rs++)ss&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(E).__webglTexture,G,$t+rs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ft,be+rs)),P.blitFramebuffer(wt,Vt,gt,pt,Ct,he,gt,pt,P.DEPTH_BUFFER_BIT,P.NEAREST);yt.bindFramebuffer(P.READ_FRAMEBUFFER,null),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||v.has(E)){const Ne=v.get(E),li=v.get(U);yt.bindFramebuffer(P.READ_FRAMEBUFFER,Em),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tm);for(let Pe=0;Pe<Et;Pe++)ss?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ne.__webglTexture,G,$t+Pe):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ne.__webglTexture,G),de?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,li.__webglTexture,ft,be+Pe):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,li.__webglTexture,ft),G!==0?P.blitFramebuffer(wt,Vt,gt,pt,Ct,he,gt,pt,P.COLOR_BUFFER_BIT,P.NEAREST):de?P.copyTexSubImage3D(Tt,ft,Ct,he,be+Pe,wt,Vt,gt,pt):P.copyTexSubImage2D(Tt,ft,Ct,he,wt,Vt,gt,pt);yt.bindFramebuffer(P.READ_FRAMEBUFFER,null),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else de?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Tt,ft,Ct,he,be,gt,pt,Et,ue,ze,Se.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Tt,ft,Ct,he,be,gt,pt,Et,ue,Se.data):P.texSubImage3D(Tt,ft,Ct,he,be,gt,pt,Et,ue,ze,Se):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ft,Ct,he,gt,pt,ue,ze,Se.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ft,Ct,he,Se.width,Se.height,ue,Se.data):P.texSubImage2D(P.TEXTURE_2D,ft,Ct,he,gt,pt,ue,ze,Se);P.pixelStorei(P.UNPACK_ROW_LENGTH,je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gn),P.pixelStorei(P.UNPACK_SKIP_ROWS,wn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ci),ft===0&&U.generateMipmaps&&P.generateMipmap(Tt),yt.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){I=0,k=0,O=null,yt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}function zd(r,t){if(t===Qm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Bc||t===Ep){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===Bc)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}function XM(r){const t=new Map,e=new Map,n=r.clone();return Yp(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Yp(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)Yp(r.children[n],t.children[n],e)}class qM extends Ai{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new jM(e)}),this.register(function(e){return new JM(e)}),this.register(function(e){return new aS(e)}),this.register(function(e){return new lS(e)}),this.register(function(e){return new cS(e)}),this.register(function(e){return new tS(e)}),this.register(function(e){return new eS(e)}),this.register(function(e){return new nS(e)}),this.register(function(e){return new iS(e)}),this.register(function(e){return new ZM(e)}),this.register(function(e){return new sS(e)}),this.register(function(e){return new QM(e)}),this.register(function(e){return new oS(e)}),this.register(function(e){return new rS(e)}),this.register(function(e){return new YM(e)}),this.register(function(e){return new Vd(e,Yt.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Vd(e,Yt.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new hS(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Fr.extractUrlBase(t);o=Fr.resolveURL(c,this.path)}else o=Fr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Xh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Kp){try{o[Yt.KHR_BINARY_GLTF]=new uS(t)}catch(u){i&&i(u);return}s=JSON.parse(o[Yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ES(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Yt.KHR_MATERIALS_UNLIT:o[u]=new KM;break;case Yt.KHR_DRACO_MESH_COMPRESSION:o[u]=new dS(s,this.dracoLoader);break;case Yt.KHR_TEXTURE_TRANSFORM:o[u]=new fS;break;case Yt.KHR_MESH_QUANTIZATION:o[u]=new pS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function $M(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}function Ae(r,t,e){const n=r.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const Yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class YM{constructor(t){this.parser=t,this.name=Yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const h=new ut(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ye);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new L_(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new R_(h),c.distance=u;break;case"spot":c=new w_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),In(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class KM{constructor(){this.name=Yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Nn}extendParams(t,e,n){const i=[];t.color=new ut(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ye),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Ee))}return Promise.all(i)}}class ZM{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class jM{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Gt(s,s)}return Promise.all(i)}}class JM{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class QM{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class tS{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(e.sheenColor=new ut(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;e.sheenColor.setRGB(s[0],s[1],s[2],Ye)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Ee)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class eS{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class nS{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return e.attenuationColor=new ut().setRGB(s[0],s[1],s[2],Ye),Promise.all(i)}}class iS{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IOR}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class sS{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return e.specularColor=new ut().setRGB(s[0],s[1],s[2],Ye),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Ee)),Promise.all(i)}}class rS{constructor(t){this.parser=t,this.name=Yt.EXT_MATERIALS_BUMP}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}}class oS{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ae(this.parser,t,this.name)!==null?Hn:null}extendMaterialParams(t,e){const n=Ae(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class aS{constructor(t){this.parser=t,this.name=Yt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class lS{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class cS{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class Vd{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class hS{constructor(t){this.name=Yt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==an.TRIANGLES&&c.mode!==an.TRIANGLE_STRIP&&c.mode!==an.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const _=new Bt,p=new L,g=new Tn,y=new L(1,1,1),S=new Vh(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,_.compose(p,g,y));for(const M in l)if(M==="_COLOR_0"){const A=l[M];S.instanceColor=new en(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);_e.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Kp="glTF",fr=12,Hd={JSON:1313821514,BIN:5130562};class uS{constructor(t){this.name=Yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,fr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-fr,s=new DataView(t,fr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Hd.JSON){const c=new Uint8Array(t,fr+o,a);this.content=n.decode(c)}else if(l===Hd.BIN){const c=fr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dS{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Yt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=zc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=zc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=ks[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}u(f)},a,c,Ye,d)})})}}class fS{constructor(){this.name=Yt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class pS{constructor(){this.name=Yt.KHR_MESH_QUANTIZATION}}class Zp extends Qs{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*c,_=m-c,p=-2*f+3*d,g=f-d,y=1-p,S=g-d+u;for(let M=0;M!==a;M++){const A=o[_+M+a],C=o[_+M+l]*h,w=o[m+M+a],x=o[m+M]*h;s[M]=y*A+S*C+p*w+g*x}return s}}const mS=new Tn;class gS extends Zp{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return mS.fromArray(s).normalize().toArray(s),s}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gd={9728:Te,9729:Ce,9984:_p,9985:sa,9986:Pr,9987:ti},Wd={33071:Bn,33648:ma,10497:Ws},Tl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_S={CUBICSPLINE:void 0,LINEAR:Zr,STEP:Kr},Al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Wh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:rn})),r.DefaultMaterial}function ki(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function In(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function yS(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function vS(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MS(r){let t;const e=r.extensions&&r.extensions[Yt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+wl(e.attributes):t=r.indices+":"+wl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+wl(r.targets[n]);return t}function wl(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Vc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const bS=new Bt;class ES{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new $M,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Op(this.options.manager):this.textureLoader=new D_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ki(s,a,i),In(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Yt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Fr.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Tl[i.type],a=ks[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Jt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Tl[i.type],c=ks[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,p;if(f&&f!==u){const g=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let S=e.cache.get(y);S||(_=new c(a,g*f,i.count*f/h),S=new $g(_,f/h),e.cache.add(y,S)),p=new kh(S,l,d%f/h,m)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),p=new Jt(_,l,m);if(i.sparse!==void 0){const g=Tl.SCALAR,y=ks[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new y(o[1],S,i.sparse.count*g),C=new c(o[2],M,i.sparse.count*l);a!==null&&(p=new Jt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,x=A.length;w<x;w++){const b=A[w];if(p.setX(b,C[w*l]),l>=2&&p.setY(b,C[w*l+1]),l>=3&&p.setZ(b,C[w*l+2]),l>=4&&p.setW(b,C[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Gd[d.magFilter]||Ce,h.minFilter=Gd[d.minFilter]||ti,h.wrapS=Wd[d.wrapS]||Ws,h.wrapT=Wd[d.wrapT]||Ws,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Te&&h.minFilter!==Ce,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(_){const p=new Re(_);p.needsUpdate=!0,d(p)}),e.load(Fr.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),In(u,o),u.userData.mimeType=o.mimeType||SS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Yt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Yt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Dp,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ya,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Wh}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[Yt.KHR_MATERIALS_UNLIT]){const u=i[Yt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new ut(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ye),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Ee)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Ge);const h=s.alphaMode||Al.OPAQUE;if(h===Al.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Al.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Nn&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Gt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Nn&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Nn){const u=s.emissiveFactor;a.emissive=new ut().setRGB(u[0],u[1],u[2],Ye)}return s.emissiveTexture!==void 0&&o!==Nn&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ee)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),In(u,s),e.associations.set(u,{materials:t}),s.extensions&&ki(i,u,s),u})}createUniqueName(t){const e=ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Xd(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=MS(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Yt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Xd(new Ue,c,e),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?xS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],p=o[f];let g;const y=c[f];if(p.mode===an.TRIANGLES||p.mode===an.TRIANGLE_STRIP||p.mode===an.TRIANGLE_FAN||p.mode===void 0)g=s.isSkinnedMesh===!0?new jg(_,y):new ve(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===an.TRIANGLE_STRIP?g.geometry=zd(g.geometry,Ep):p.mode===an.TRIANGLE_FAN&&(g.geometry=zd(g.geometry,Bc));else if(p.mode===an.LINES)g=new Nc(_,y);else if(p.mode===an.LINE_STRIP)g=new Hh(_,y);else if(p.mode===an.LINE_LOOP)g=new i_(_,y);else if(p.mode===an.POINTS)g=new s_(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&vS(g,s),g.name=e.createUniqueName(s.name||"mesh_"+t),In(g,s),p.extensions&&ki(i,g,p),e.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&ki(i,u[0],s),u[0];const d=new Ze;s.extensions&&ki(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new $e(Rg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Da(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),In(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Bt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new zh(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],_=f.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],p=u[4],g=[];for(let S=0,M=d.length;S<M;S++){const A=d[S],C=f[S],w=m[S],x=_[S],b=p[S];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const V=n._createAnimationTracks(A,C,w,x,b);if(V)for(let I=0;I<V.length;I++)g.push(V[I])}const y=new y_(s,void 0,g);return In(y,i),y})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bS)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,m=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Pp:c.length>1?h=new Ze:c.length===1?h=c[0]:h=new _e,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),In(h,s),s.extensions&&ki(n,h,s),s.matrix!==void 0){const u=new Bt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new Ze;n.name&&(s.name=i.createUniqueName(n.name)),In(s,n),n.extensions&&ki(e,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?s.add(XM(d)):s.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof On||d instanceof Re)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,l=[];gi[s.path]===gi.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(gi[s.path]){case gi.weights:c=Ys;break;case gi.rotation:c=Ks;break;case gi.translation:case gi.scale:c=Zs;break;default:switch(n.itemSize){case 1:c=Ys;break;case 2:case 3:default:c=Zs;break}break}const h=i.interpolation!==void 0?_S[i.interpolation]:Zr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+gi[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Vc(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Ks?gS:Zp;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function TS(r,t,e){const n=t.attributes,i=new ke;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=Vc(ks[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Vc(ks[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Be;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Xd(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=zc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return jt.workingColorSpace!==Ye&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${jt.workingColorSpace}" not supported.`),In(r,t),TS(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?yS(r,t.targets,e):r})}const ha=3e38,AS=1e6;function qd(r){const t=(r==null?void 0:r.fps)===void 0||Number.isFinite(r.fps)&&r.fps>0;return r!==void 0&&r.columns>0&&r.rows>0&&t}function $d(r){return{columns:r.columns,rows:r.rows,frameCount:r.columns*r.rows,fps:r.fps??30,loop:r.loop??!0}}function jp(r,t){if(!t||t.loop)return r;const e=t.frameCount/t.fps;return Math.min(r,e)}function wS(r,t,e){if(r===0)return ha;const n=r+(Math.random()-.5)*2*t;return Math.max(.001,jp(n,e))}function CS(r,t,e){if(r===0)return AS;const n=r+t;return jp(n,e)}const kr="initialPosition",Os="initialVelocity",zs="sizeVar",Ln="timeVar",Or="opacityVar",zr="colorStartVar",Vr="colorEndVar",Fo="map",Cl="time",pr="gravity",Oi="viewDistance",ko="viewDistanceCameraPosition",zi="alphaTest",mr="orientationMatrix",Ss="flipbookColumns",Oo="flipbookRows",gr="flipbookFrameCount",zo="flipbookFps",Vo="flipbookLoop",Ho="USE_ALPHATEST",Ds="ORIENTATION_BILLBOARD",Hc="ORIENTATION_BILLBOARD_Y",Gc="ORIENTATION_FIXED",Wc="ORIENTATION_VELOCITY",Yd="LOCK_TO_EMITTER",bs="USE_FLIPBOOK",RS=2,IS=256,vn=[],_r=new L,Kd=new pn,Zd=new zt,LS=new Bt,Rl=Math.PI/180;function PS(r){switch(r){case"billboard":return Ds;case"billboardY":return Hc;case"fixed":return Gc;case"velocity":return Wc;default:return Ds}}function DS(r){return Kd.set(r.x*Rl,r.y*Rl,r.z*Rl,"XYZ"),Zd.setFromMatrix4(LS.makeRotationFromEuler(Kd)),Zd}class BS extends Oe{constructor(t=!1){super({uniforms:{[Fo]:{value:null},[Cl]:{value:0},[pr]:{value:new L},[Oi]:{value:0},[ko]:{value:new L},[mr]:{value:new zt},[Ss]:{value:1},[Oo]:{value:1},[gr]:{value:1},[zo]:{value:30},[Vo]:{value:1}},defines:t?{[Yd]:"",[Ds]:!0}:{[Ds]:!0},vertexShader:`
        uniform float ${Cl};
        uniform vec3 ${pr};
        uniform float ${Oi};
        uniform vec3 ${ko};
        uniform mat3 ${mr};

        #ifdef ${bs}
          uniform float ${Ss};
          uniform float ${Oo};
          uniform float ${gr};
          uniform float ${zo};
          uniform float ${Vo};
        #endif

        attribute vec3 ${kr};
        attribute vec3 ${Os};
        attribute vec2 ${zs};
        attribute vec2 ${Ln};
        attribute vec2 ${Or};
        attribute vec3 ${zr};
        attribute vec3 ${Vr};

        varying vec2 vUv;
        varying float vLife;
        varying vec2 vOpacityVar;
        varying vec3 vColorStart;
        varying vec3 vColorEnd;

        void main() {
          float age = ${Cl} - ${Ln}.x;
          vLife = clamp(1.0 - age / ${Ln}.y, 0.0, 1.0);

          // Pass variations to fragment shader
          vOpacityVar = ${Or};
          vColorStart = ${zr};
          vColorEnd = ${Vr};

          if (vLife <= 0.0) {
            gl_Position = vec4(9999.0, 9999.0, 9999.0, 1.0);
            return;
          }

          // Calculate flipbook UV
          #ifdef ${bs}
            float rawFrame = floor(age * ${zo});
            float frameIndex;
            if (${Vo} > 0.5) {
              frameIndex = mod(rawFrame, ${gr});
            } else {
              frameIndex = min(rawFrame, ${gr} - 1.0);
            }
            float col = mod(frameIndex, ${Ss});
            float row = floor(frameIndex / ${Ss});
            vec2 frameSize = vec2(1.0 / ${Ss}, 1.0 / ${Oo});
            vec2 frameOffset = vec2(col, row) * frameSize;
            vUv = frameOffset + uv * frameSize;
          #else
            vUv = uv;
          #endif

          // Physics calculation (same for both modes)
          vec3 physics = ${kr} + ${Os} * age + 0.5 * ${pr} * age * age;

          // Calculate world position based on lock mode
          // - LOCK_TO_EMITTER: initialPosition is local, add current emitter world position
          // - Otherwise: initialPosition is already world position
          #ifdef ${Yd}
            vec3 worldPos = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz + physics;
          #else
            vec3 worldPos = physics;
          #endif

          // Per-particle view-distance culling on XZ plane.
          if (${Oi} > 0.0) {
            vec2 toCameraXZ = worldPos.xz - ${ko}.xz;
            if (dot(toCameraXZ, toCameraXZ) > ${Oi} * ${Oi}) {
              gl_Position = vec4(9999.0, 9999.0, 9999.0, 1.0);
              return;
            }
          }

          // Calculate right and up vectors based on orientation mode
          vec3 particleRight;
          vec3 particleUp;

          #ifdef ${Ds}
            // Billboard: particles always face camera (use camera's right/up directly)
            particleRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
            particleUp = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          #elif defined(${Hc})
            // BillboardY: rotate around Y-axis to face camera view direction
            vec3 cameraForward = -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
            vec3 forwardXZ = vec3(cameraForward.x, 0.0, cameraForward.z);
            if (length(forwardXZ) < 1e-4) {
              // Fallback when camera is looking nearly straight up or down
              forwardXZ = vec3(0.0, 0.0, 1.0);
            }
            particleRight = normalize(cross(forwardXZ, vec3(0.0, 1.0, 0.0)));
            particleUp = vec3(0.0, 1.0, 0.0);
          #elif defined(${Gc})
            // Fixed: use orientation matrix
            particleRight = ${mr}[0];
            particleUp = ${mr}[1];
          #elif defined(${Wc})
            // Velocity-aligned: particle Y-axis aligns to velocity direction,
            // billboards around that axis to face the camera.
            // v(t) = v0 + g * t
            vec3 currentVelocity = ${Os} + ${pr} * age;
            float velLength = length(currentVelocity);
            // When velocity is near zero, orientation is undefined. Skip rendering.
            if (velLength < 1e-7) {
              gl_Position = vec4(9999.0, 9999.0, 9999.0, 1.0);
              return;
            }
            particleUp = currentVelocity / velLength;
            vec3 cameraForward = -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
            vec3 right = cross(cameraForward, particleUp);
            float rightLen = length(right);
            if (rightLen < 1e-4) {
              // Fallback when camera forward is nearly parallel to velocity direction.
              // Choose an arbitrary vector not parallel to particleUp to construct a basis.
              vec3 arbitrary = abs(particleUp.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
              right = cross(arbitrary, particleUp);
            }
            particleRight = normalize(right);
          #endif

          // Interpolate size based on life
          float interpolatedSize = mix(${zs}.y, ${zs}.x, vLife);

          // Use the vertex position from the plane geometry to create quad
          vec3 quadOffset = (position.x * particleRight + position.y * particleUp) * interpolatedSize;
          vec3 finalPos = worldPos + quadOffset;

          gl_Position = projectionMatrix * viewMatrix * vec4(finalPos, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D ${Fo};

        #ifdef ${Ho}
          uniform float ${zi};
        #endif

        varying vec2 vUv;
        varying float vLife;
        varying vec2 vOpacityVar;
        varying vec3 vColorStart;
        varying vec3 vColorEnd;

        void main() {
          vec4 texColor = texture2D(${Fo}, vUv);

          vec3 color = mix(vColorEnd, vColorStart, vLife);
          float alphaGradient = mix(vOpacityVar.y, vOpacityVar.x, vLife);
          float finalAlpha = texColor.a * alphaGradient;

          #ifdef ${Ho}
            if (finalAlpha < ${zi}) discard;
          #endif

          gl_FragColor = vec4(texColor.rgb * color, finalAlpha);
        }
      `,side:rn})}setGravity(t){return this.uniforms[pr].value.copy(t),this}setViewDistanceCulling(t,e){return this.uniforms[Oi].value=Math.max(0,e),this.uniforms[ko].value.set(t.x,t.y,t.z),this}disableViewDistanceCulling(){return this.uniforms[Oi].value=0,this}setAlphaTest(t){return t>0?zi in this.uniforms?this.uniforms[zi].value=t:(this.uniforms[zi]={value:t},this.defines[Ho]="",this.needsUpdate=!0):t===0&&zi in this.uniforms&&(delete this.uniforms[zi],delete this.defines[Ho],this.needsUpdate=!0),this}setOrientation(t){return delete this.defines[Ds],delete this.defines[Hc],delete this.defines[Gc],delete this.defines[Wc],this.defines[PS(t)]=!0,this.side=t==="fixed"?Ge:rn,this.needsUpdate=!0,this}setOrientationFixedRotation(t){return this.uniforms[mr].value.copy(DS(t)),this}setTexture(t){return this.uniforms[Fo].value=t,this.visible=!!t,this}setTransparent(t){return this.transparent!==t&&(this.needsUpdate=!0),this.transparent=t,this.depthWrite=!this.transparent,this}updateTime(t){this.uniforms.time.value=t}setFlipbook(t,e,n,i){return t>1||e>1?(bs in this.defines||(this.defines[bs]="",this.needsUpdate=!0),this.uniforms[Ss].value=t,this.uniforms[Oo].value=e,this.uniforms[gr].value=t*e,this.uniforms[zo].value=n,this.uniforms[Vo].value=i?1:0):bs in this.defines&&(delete this.defines[bs],this.needsUpdate=!0),this}}const US={alphaTest:0,colorEnd:new ut(1,1,1),colorEndVariance:new ut(0,0,0),colorStart:new ut(1,1,1),colorStartVariance:new ut(0,0,0),colorIntensityStart:1,colorIntensityEnd:1,colorIntensityStartVariance:0,colorIntensityEndVariance:0,flipbook:void 0,lifetime:1,lifetimeVariance:0,lockToEmitter:!1,maxParticles:0,gravity:new L(0,0,0),opacityEnd:0,opacityEndVariance:0,opacityStart:1,opacityStartVariance:0,orientation:"billboard",orientationFixedRotation:new L(0,0,0),position:new L(0,0,0),positionVariance:new L(0,0,0),rate:10,rateVariance:0,sizeEnd:1,sizeEndVariance:0,sizeStart:1,sizeStartVariance:0,texture:null,transparent:!1,velocity:new L(0,0,0),velocityVariance:new L(0,0,0)};class jd{constructor(t){T(this,"_options");T(this,"_poolIndex");T(this,"_currentTime");T(this,"_emissionAccumulator");T(this,"_isMaxParticlesAutoCalculated",!1);T(this,"_mesh");T(this,"_paused",!1);T(this,"_flipbook",null);T(this,"_pendingEmissions",new Map);T(this,"_pendingEmissionOverrideIds",new WeakMap);T(this,"_nextPendingEmissionOverrideId",1);T(this,"_latestRenderableUntil",0);T(this,"_hasImmortalParticles",!1);T(this,"_renderableStateDirty",!1);T(this,"_particleAttachmentSlots",null);T(this,"_attachmentMatrices",new Map);T(this,"_activeAttachmentSlotsScratch",[]);T(this,"_particleIndicesByAttachmentSlot",new Map);T(this,"_dirtyAttachmentSlots",new Set);T(this,"_cleanupAttachmentSlots",new Set);this._options={...US};for(const i in t)t[i]!==void 0&&(this._options[i]=t[i]);this._options.maxParticles||(this._options.maxParticles=this._calculateMaxParticles(),this._isMaxParticlesAutoCalculated=!0);for(const i in this._options){const s=this._options[i];(s instanceof L||s instanceof ut)&&(this._options[i]=s.clone())}qd(this._options.flipbook)&&(this._flipbook=$d(this._options.flipbook));const e=this._createGeometry(this._options.maxParticles),n=new BS(this._options.lockToEmitter).setTexture(this._options.texture).setGravity(this._options.gravity).setTransparent(this._options.transparent).setAlphaTest(this._options.alphaTest).setOrientation(this._options.orientation).setOrientationFixedRotation(this._options.orientationFixedRotation);if(this._flipbook&&n.setFlipbook(this._flipbook.columns,this._flipbook.rows,this._flipbook.fps,this._flipbook.loop),this._mesh=new Vh(e,n,this._options.maxParticles),this._mesh.position.copy(this._options.position),this._options.lockToEmitter){this._mesh.instanceMatrix.setUsage(cn),this._particleAttachmentSlots=new Uint32Array(this._options.maxParticles);const i=new Bt;for(let s=0;s<this._options.maxParticles;s++)this._mesh.setMatrixAt(s,i);this._mesh.instanceMatrix.needsUpdate=!0}this._updateBoundingBox(),this._poolIndex=0,this._currentTime=0,this._emissionAccumulator=0}get mesh(){return this._mesh}get paused(){return this._paused}get flipbook(){return this._flipbook}hasRenderableParticles(){return this._pendingEmissions.size>0?!0:(this._renderableStateDirty&&this._recomputeRenderableState(),this._hasImmortalParticles||this._currentTime<this._latestRenderableUntil)}burst(t,e=0,n){if(t<=0)return;if(!this.mesh.material.visible){this._enqueuePendingEmission(t,e,n);return}this.mesh.matrixWorldAutoUpdate&&this.mesh.updateMatrixWorld(),this._flushPendingEmissions();const s=this._attachmentMatrices.get(e)??this.mesh.matrixWorld;this._emit(t,s,e,n)}pause(){this._paused=!0,this._emissionAccumulator=0}restart(){this._paused=!1}setViewDistanceCulling(t,e){this.mesh.material.setViewDistanceCulling(t,e)}disableViewDistanceCulling(){this.mesh.material.disableViewDistanceCulling()}_calculateMaxParticles(){const t=this._options.lifetime+this._options.lifetimeVariance,e=Math.ceil(this._options.rate*t),i=Math.ceil(e*1.2);return Math.max(10,i)}_calculateBoundingBox(){const t=CS(this._options.lifetime,this._options.lifetimeVariance,this._flipbook),e=this._options.sizeStart+this._options.sizeStartVariance,n=this._options.sizeEnd+this._options.sizeEndVariance,i=Math.max(e,n),s=this._options.positionVariance,o=Math.abs(this._options.velocity.x)+this._options.velocityVariance.x,a=Math.abs(this._options.velocity.y)+this._options.velocityVariance.y,l=Math.abs(this._options.velocity.z)+this._options.velocityVariance.z,c=new L(.5*Math.abs(this._options.gravity.x)*t*t,.5*Math.abs(this._options.gravity.y)*t*t,.5*Math.abs(this._options.gravity.z)*t*t),h=new L(o*t,a*t,l*t),u=new L(s.x+h.x+c.x+i,s.y+h.y+c.y+i,s.z+h.z+c.z+i),d=new L(-u.x,-u.y,-u.z),f=new L(u.x,u.y,u.z);return(this._options.velocity.x>0?f:d).x+=this._options.velocity.x*t,(this._options.velocity.y>0?f:d).y+=this._options.velocity.y*t,(this._options.velocity.z>0?f:d).z+=this._options.velocity.z*t,new ke(d,f)}_updateBoundingBox(){const t=this._calculateBoundingBox();this.mesh.geometry.boundingBox=t;const e=new L;t.getCenter(e);const n=t.getSize(new L).length()*.5;this.mesh.geometry.boundingSphere=new Be(e,n)}_emit(t,e,n=0,i){const s=this.mesh.geometry,o=s.getAttribute(kr),a=s.getAttribute(Os),l=s.getAttribute(zs),c=s.getAttribute(Ln),h=s.getAttribute(Or),u=s.getAttribute(zr),d=s.getAttribute(Vr),f=this._poolIndex;let m=0,_=!1;const p=(i==null?void 0:i.colorEnd)??this._options.colorEnd,g=(i==null?void 0:i.colorEndVariance)??this._options.colorEndVariance,y=(i==null?void 0:i.colorStart)??this._options.colorStart,S=(i==null?void 0:i.colorStartVariance)??this._options.colorStartVariance,M=(i==null?void 0:i.colorIntensityEnd)??this._options.colorIntensityEnd,A=(i==null?void 0:i.colorIntensityEndVariance)??this._options.colorIntensityEndVariance,C=(i==null?void 0:i.colorIntensityStart)??this._options.colorIntensityStart,w=(i==null?void 0:i.colorIntensityStartVariance)??this._options.colorIntensityStartVariance,x=(i==null?void 0:i.lifetime)??this._options.lifetime,b=(i==null?void 0:i.lifetimeVariance)??this._options.lifetimeVariance,V=(i==null?void 0:i.opacityEnd)??this._options.opacityEnd,I=(i==null?void 0:i.opacityEndVariance)??this._options.opacityEndVariance,k=(i==null?void 0:i.opacityStart)??this._options.opacityStart,O=(i==null?void 0:i.opacityStartVariance)??this._options.opacityStartVariance,N=(i==null?void 0:i.positionVariance)??this._options.positionVariance,F=(i==null?void 0:i.sizeEnd)??this._options.sizeEnd,H=(i==null?void 0:i.sizeEndVariance)??this._options.sizeEndVariance,z=(i==null?void 0:i.sizeStart)??this._options.sizeStart,tt=(i==null?void 0:i.sizeStartVariance)??this._options.sizeStartVariance,J=(i==null?void 0:i.velocity)??this._options.velocity,st=(i==null?void 0:i.velocityVariance)??this._options.velocityVariance;let ct=this._latestRenderableUntil,dt=this._hasImmortalParticles;for(let Rt=0;Rt<t;Rt++){const ee=c.getX(this._poolIndex),Ft=c.getY(this._poolIndex);if(Ft>0){const D=ee+Ft;(Ft>=ha||D>=this._latestRenderableUntil)&&(this._renderableStateDirty=!0)}const q=(Math.random()-.5)*2*N.x,j=(Math.random()-.5)*2*N.y,it=(Math.random()-.5)*2*N.z;_r.set(q,j,it),this._options.lockToEmitter||_r.applyMatrix4(e);const Pt=J.x+(Math.random()-.5)*2*st.x,At=J.y+(Math.random()-.5)*2*st.y,Dt=J.z+(Math.random()-.5)*2*st.z,xe=wS(x,b,this._flipbook);xe>=ha?dt=!0:ct=Math.max(ct,this._currentTime+xe);const kt=Math.max(0,z+(Math.random()-.5)*2*tt),ne=Math.max(0,F+(Math.random()-.5)*2*H),ie=Math.max(0,Math.min(1,k+(Math.random()-.5)*2*O)),Wt=Math.max(0,Math.min(1,V+(Math.random()-.5)*2*I)),me=Math.max(0,C+(Math.random()-.5)*2*w),P=Math.max(0,M+(Math.random()-.5)*2*A),Me=Math.max(0,y.r+(Math.random()-.5)*2*S.r)*me,Qt=Math.max(0,y.g+(Math.random()-.5)*2*S.g)*me,ce=Math.max(0,y.b+(Math.random()-.5)*2*S.b)*me,yt=Math.max(0,p.r+(Math.random()-.5)*2*g.r)*P,R=Math.max(0,p.g+(Math.random()-.5)*2*g.g)*P,v=Math.max(0,p.b+(Math.random()-.5)*2*g.b)*P;if(o.setXYZ(this._poolIndex,_r.x,_r.y,_r.z),a.setXYZ(this._poolIndex,Pt,At,Dt),l.setXY(this._poolIndex,kt,ne),c.setXY(this._poolIndex,this._currentTime,xe),h.setXY(this._poolIndex,ie,Wt),u.setXYZ(this._poolIndex,Me,Qt,ce),d.setXYZ(this._poolIndex,yt,R,v),this._particleAttachmentSlots&&this._options.lockToEmitter){const D=this._particleAttachmentSlots[this._poolIndex],K=this._particleIndicesByAttachmentSlot.get(D);K&&(K.delete(this._poolIndex),K.size===0&&(this._particleIndicesByAttachmentSlot.delete(D),this._cleanupAttachmentSlots.delete(D),D!==n&&(this._dirtyAttachmentSlots.delete(D),this._attachmentMatrices.delete(D)))),this._particleAttachmentSlots[this._poolIndex]=n,this._particleIndicesByAttachmentSlot.has(n)||this._particleIndicesByAttachmentSlot.set(n,new Set),this._particleIndicesByAttachmentSlot.get(n).add(this._poolIndex),this._cleanupAttachmentSlots.add(n);const Q=this._attachmentMatrices.get(n)??e;this._mesh.setMatrixAt(this._poolIndex,Q),_=!0}this._poolIndex=(this._poolIndex+1)%this._options.maxParticles,m++}if(this._latestRenderableUntil=ct,this._hasImmortalParticles=dt,vn.push(o),vn.push(a),vn.push(l),vn.push(c),vn.push(h),vn.push(u),vn.push(d),m>0){if(f+m<=this._options.maxParticles)vn.forEach(Rt=>Rt.addUpdateRange(f*Rt.itemSize,m*Rt.itemSize));else{const Rt=this._options.maxParticles-f,ee=m-Rt;vn.forEach(Ft=>{Ft.addUpdateRange(f*Ft.itemSize,Rt*Ft.itemSize),Ft.addUpdateRange(0,ee*Ft.itemSize)})}vn.forEach(Rt=>Rt.needsUpdate=!0)}_&&(this._mesh.instanceMatrix.needsUpdate=!0),vn.length=0}_getCurrentRate(){if(this._options.rateVariance===0)return this._options.rate;const t=(Math.random()-.5)*2*this._options.rateVariance;return Math.max(0,this._options.rate+t)}update(t){const e=Math.min(t,.1),n=this.mesh.material;if(this._currentTime+=t,n.updateTime(this._currentTime),!n.visible||(this.mesh.matrixWorldAutoUpdate&&this.mesh.updateMatrixWorld(),this._flushPendingEmissions(),this._paused))return;const i=this._getCurrentRate();this._emissionAccumulator+=i*e;const s=Math.floor(this._emissionAccumulator);s>0&&(this.mesh.matrixWorldAutoUpdate&&this.mesh.updateMatrixWorld(),this._emit(s,this.mesh.matrixWorld),this._emissionAccumulator-=s)}updateParameters(t){const e=this.mesh.material;let n=!1,i=!1;t.alphaTest!==void 0&&(this._options.alphaTest=t.alphaTest,e.setAlphaTest(this._options.alphaTest)),t.colorEnd!==void 0&&this._options.colorEnd.copy(t.colorEnd),t.colorEndVariance!==void 0&&this._options.colorEndVariance.copy(t.colorEndVariance),t.colorStart!==void 0&&this._options.colorStart.copy(t.colorStart),t.colorStartVariance!==void 0&&this._options.colorStartVariance.copy(t.colorStartVariance),t.colorIntensityStart!==void 0&&(this._options.colorIntensityStart=t.colorIntensityStart),t.colorIntensityEnd!==void 0&&(this._options.colorIntensityEnd=t.colorIntensityEnd),t.colorIntensityStartVariance!==void 0&&(this._options.colorIntensityStartVariance=t.colorIntensityStartVariance),t.colorIntensityEndVariance!==void 0&&(this._options.colorIntensityEndVariance=t.colorIntensityEndVariance),t.flipbook!==void 0&&(this._options.flipbook=t.flipbook,qd(t.flipbook)?(this._flipbook=$d(t.flipbook),e.setFlipbook(this._flipbook.columns,this._flipbook.rows,this._flipbook.fps,this._flipbook.loop)):(this._flipbook=null,e.setFlipbook(1,1,30,!0)),n=!0),t.gravity!==void 0&&(this._options.gravity.copy(t.gravity),e.setGravity(this._options.gravity),n=!0),t.lifetime!==void 0&&this._options.lifetime!==t.lifetime&&(this._options.lifetime=t.lifetime,n=!0,i=!0),t.lifetimeVariance!==void 0&&this._options.lifetimeVariance!==t.lifetimeVariance&&(this._options.lifetimeVariance=t.lifetimeVariance,n=!0,i=!0),t.opacityEnd!==void 0&&(this._options.opacityEnd=t.opacityEnd),t.opacityEndVariance!==void 0&&(this._options.opacityEndVariance=t.opacityEndVariance),t.opacityStart!==void 0&&(this._options.opacityStart=t.opacityStart),t.opacityStartVariance!==void 0&&(this._options.opacityStartVariance=t.opacityStartVariance),t.position!==void 0&&(this._options.position.copy(t.position),this.mesh.position.copy(this._options.position)),t.positionVariance!==void 0&&!this._options.positionVariance.equals(t.positionVariance)&&(this._options.positionVariance.copy(t.positionVariance),n=!0),t.rate!==void 0&&(this._options.rate!==t.rate&&(i=!0),this._options.rate=t.rate),t.rateVariance!==void 0&&(this._options.rateVariance=t.rateVariance),t.sizeEnd!==void 0&&this._options.sizeEnd!==t.sizeEnd&&(this._options.sizeEnd=t.sizeEnd,n=!0),t.sizeEndVariance!==void 0&&this._options.sizeEndVariance!==t.sizeEndVariance&&(this._options.sizeEndVariance=t.sizeEndVariance,n=!0),t.sizeStart!==void 0&&this._options.sizeStart!==t.sizeStart&&(this._options.sizeStart=t.sizeStart,n=!0),t.sizeStartVariance!==void 0&&this._options.sizeStartVariance!==t.sizeStartVariance&&(this._options.sizeStartVariance=t.sizeStartVariance,n=!0),t.orientation!==void 0&&(this._options.orientation=t.orientation,e.setOrientation(this._options.orientation)),t.orientationFixedRotation!==void 0&&(this._options.orientationFixedRotation=t.orientationFixedRotation,e.setOrientationFixedRotation(this._options.orientationFixedRotation)),t.texture!==void 0&&(this._options.texture=t.texture,e.setTexture(this._options.texture)),t.transparent!==void 0&&(this._options.transparent=t.transparent,e.setTransparent(this._options.transparent)),t.velocity!==void 0&&!this._options.velocity.equals(t.velocity)&&(this._options.velocity.copy(t.velocity),n=!0),t.velocityVariance!==void 0&&!this._options.velocityVariance.equals(t.velocityVariance)&&(this._options.velocityVariance.copy(t.velocityVariance),n=!0);const s=this._options.maxParticles;t.maxParticles!==void 0&&t.maxParticles>0?(this._options.maxParticles=t.maxParticles,this._isMaxParticlesAutoCalculated=!1):(t.maxParticles===0||this._isMaxParticlesAutoCalculated&&i)&&(this._options.maxParticles=this._calculateMaxParticles(),this._isMaxParticlesAutoCalculated=!0),this._options.maxParticles!==s&&this._resize(),n&&this._updateBoundingBox()}_resize(){const t=this.mesh.geometry,e=this.mesh.instanceMatrix,n=this._createGeometry(this._options.maxParticles),i=t.getAttribute(Ln).count,s=Math.min(i,this._options.maxParticles);s>0&&this._copyParticleData(t,n,s),n.boundingBox=t.boundingBox,n.boundingSphere=t.boundingSphere,this.mesh.geometry=n,this.mesh.count=this._options.maxParticles;const o=new en(new Float32Array(this._options.maxParticles*16),16);o.setUsage(e.usage);const a=e.array,l=o.array,c=Math.min(a.length,l.length);l.set(a.subarray(0,c),0);const h=e.count;if(this._options.maxParticles>h){const u=new Bt().elements;for(let d=h;d<this._options.maxParticles;d++)l.set(u,d*16)}if(this.mesh.dispose(),this.mesh.instanceMatrix=o,this.mesh.instanceMatrix.needsUpdate=!0,t.dispose(),this._poolIndex>=this._options.maxParticles&&(this._poolIndex=0),this._options.lockToEmitter){const u=this._particleAttachmentSlots;if(this._particleAttachmentSlots=new Uint32Array(this._options.maxParticles),u){const d=Math.min(u.length,this._particleAttachmentSlots.length);this._particleAttachmentSlots.set(u.subarray(0,d),0)}for(const[d,f]of this._particleIndicesByAttachmentSlot.entries()){for(const m of f)m>=this._options.maxParticles&&f.delete(m);f.size===0&&(this._particleIndicesByAttachmentSlot.delete(d),this._dirtyAttachmentSlots.delete(d),this._cleanupAttachmentSlots.delete(d),this._attachmentMatrices.delete(d))}}}_createGeometry(t){return new Js(1,1).setAttribute(kr,new en(new Float32Array(t*3),3).setUsage(cn)).setAttribute(Os,new en(new Float32Array(t*3),3).setUsage(cn)).setAttribute(zs,new en(new Float32Array(t*2),2).setUsage(cn)).setAttribute(Ln,new en(new Float32Array(t*2),2).setUsage(cn)).setAttribute(Or,new en(new Float32Array(t*2),2).setUsage(cn)).setAttribute(zr,new en(new Float32Array(t*3),3).setUsage(cn)).setAttribute(Vr,new en(new Float32Array(t*3),3).setUsage(cn)).deleteAttribute("normal")}_copyParticleData(t,e,n){this._copyAttribute(t,e,kr,n),this._copyAttribute(t,e,Os,n),this._copyAttribute(t,e,zs,n),this._copyAttribute(t,e,Ln,n),this._copyAttribute(t,e,Or,n),this._copyAttribute(t,e,zr,n),this._copyAttribute(t,e,Vr,n)}_copyAttribute(t,e,n,i){const s=t.getAttribute(n),o=e.getAttribute(n),a=i*s.itemSize,l=s.array,c=o.array;for(let h=0;h<a;h++)c[h]=l[h];o.needsUpdate=!0}killAttachmentSlot(t){if(this._clearPendingEmissionsForAttachmentSlot(t),!this._particleAttachmentSlots||!this._options.lockToEmitter)return;const e=this._particleIndicesByAttachmentSlot.get(t);if(!e||e.size===0)return;const i=this.mesh.geometry.getAttribute(Ln);this._renderableStateDirty=!0;for(const s of e)i.setY(s,0);i.needsUpdate=!0,e.clear(),this._dirtyAttachmentSlots.delete(t),this._cleanupAttachmentSlots.delete(t),this._attachmentMatrices.delete(t),this._particleIndicesByAttachmentSlot.delete(t)}_clearPendingEmissionsForAttachmentSlot(t){if(this._pendingEmissions.size!==0)for(const[e,n]of this._pendingEmissions.entries())n.attachmentSlot===t&&this._pendingEmissions.delete(e)}_recomputeRenderableState(){const t=this.mesh.geometry.getAttribute(Ln);if(!t){this._latestRenderableUntil=0,this._hasImmortalParticles=!1,this._renderableStateDirty=!1;return}let e=0,n=!1;for(let i=0;i<t.count;i++){const s=t.getX(i),o=t.getY(i);if(!(o<=0)){if(o>=ha){n=!0;continue}e=Math.max(e,s+o)}}this._latestRenderableUntil=e,this._hasImmortalParticles=n,this._renderableStateDirty=!1}setAttachmentMatrix(t,e){const n=this._particleIndicesByAttachmentSlot.get(t);if(this._options.lockToEmitter&&t===0&&(!n||n.size===0)){this._dirtyAttachmentSlots.delete(t),this._cleanupAttachmentSlots.delete(t),this._attachmentMatrices.delete(t);return}if(!this._attachmentMatrices.has(t)){this._attachmentMatrices.set(t,new Bt().copy(e)),this._dirtyAttachmentSlots.add(t);return}const i=this._attachmentMatrices.get(t),s=i.elements,o=e.elements;let a=!1;for(let l=0;l<16;l++)if(s[l]!==o[l]){a=!0;break}a&&(i.copy(e),this._dirtyAttachmentSlots.add(t))}getActiveAttachmentSlots(){const t=this._activeAttachmentSlotsScratch;t.length=0;for(const e of this._attachmentMatrices.keys())t.push(e);return t}syncLockedParticleInstanceMatrices(){if(!this._particleAttachmentSlots||!this._options.lockToEmitter||this._dirtyAttachmentSlots.size===0&&this._cleanupAttachmentSlots.size===0)return;const e=this.mesh.geometry.getAttribute(Ln);let n=!1;for(const o of this._dirtyAttachmentSlots)this._syncAttachmentSlot(o,e,!0)&&(n=!0);let i=0;const s=this._cleanupAttachmentSlots.values();for(;i<RS;){const o=s.next();if(o.done)break;const a=o.value;this._dirtyAttachmentSlots.has(a)||(this._cleanupAttachmentSlots.delete(a),this._syncAttachmentSlot(a,e,!1),this._particleIndicesByAttachmentSlot.has(a)&&this._cleanupAttachmentSlots.add(a),i++)}this._dirtyAttachmentSlots.clear(),n&&(this._mesh.instanceMatrix.needsUpdate=!0)}_syncAttachmentSlot(t,e,n){const i=this._particleIndicesByAttachmentSlot.get(t);if(!i||i.size===0)return this._particleIndicesByAttachmentSlot.delete(t),this._dirtyAttachmentSlots.delete(t),this._cleanupAttachmentSlots.delete(t),this._hasPendingEmissionForSlot(t)||this._attachmentMatrices.delete(t),!1;const s=n?this._attachmentMatrices.get(t):void 0;let o=!1;for(const a of i){const l=e.getX(a),c=e.getY(a);if(this._currentTime-l>c){i.delete(a);continue}s&&(this._mesh.setMatrixAt(a,s),o=!0)}return i.size===0&&(this._particleIndicesByAttachmentSlot.delete(t),this._dirtyAttachmentSlots.delete(t),this._cleanupAttachmentSlots.delete(t),this._hasPendingEmissionForSlot(t)||this._attachmentMatrices.delete(t)),o}_hasPendingEmissionForSlot(t){for(const e of this._pendingEmissions.values())if(e.attachmentSlot===t)return!0;return!1}_createPendingEmissionKey(t,e){if(!e)return`${t}:0`;let n=this._pendingEmissionOverrideIds.get(e);return n||(n=this._nextPendingEmissionOverrideId++,this._pendingEmissionOverrideIds.set(e,n)),`${t}:${n}`}_enqueuePendingEmission(t,e,n){const i=Math.min(t,this._options.maxParticles);if(i<=0)return;const s=this._createPendingEmissionKey(e,n),o=this._pendingEmissions.get(s);if(o){o.count=Math.min(this._options.maxParticles,o.count+i);return}this._pendingEmissions.size>=IS||this._pendingEmissions.set(s,{count:i,attachmentSlot:e,emissionOverrides:n})}_flushPendingEmissions(){if(this._pendingEmissions.size!==0){for(const t of this._pendingEmissions.values()){const e=Math.min(t.count,this._options.maxParticles);if(e<=0)continue;const n=this._attachmentMatrices.get(t.attachmentSlot)??this.mesh.matrixWorld;this._emit(e,n,t.attachmentSlot,t.emissionOverrides)}this._pendingEmissions.clear()}}dispose(){this.mesh.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this._dirtyAttachmentSlots.clear(),this._cleanupAttachmentSlots.clear(),this._attachmentMatrices.clear(),this._particleIndicesByAttachmentSlot.clear(),this._pendingEmissions.clear()}}const Vi=[{id:1,name:"andesite",textureUri:"blocks/andesite.png",isMultiTexture:!1},{id:2,name:"birch-leaves",textureUri:"blocks/birch-leaves.png",isMultiTexture:!1},{id:3,name:"bricks",textureUri:"blocks/bricks.png",isMultiTexture:!1},{id:4,name:"coal-ore",textureUri:"blocks/coal-ore.png",isMultiTexture:!1},{id:5,name:"cobblestone",textureUri:"blocks/cobblestone.png",isMultiTexture:!1},{id:6,name:"grass-block-pine",textureUri:"blocks/grass-block-pine",isMultiTexture:!0},{id:7,name:"grass-block",textureUri:"blocks/grass-block",isMultiTexture:!0},{id:8,name:"grass-flower-block-pine",textureUri:"blocks/grass-flower-block-pine",isMultiTexture:!0},{id:9,name:"grass-flower-block",textureUri:"blocks/grass-flower-block",isMultiTexture:!0},{id:10,name:"oak-leaves",textureUri:"blocks/oak-leaves.png",isMultiTexture:!1},{id:11,name:"oak-log",textureUri:"blocks/oak-log",isMultiTexture:!0},{id:12,name:"sand",textureUri:"blocks/sand.png",isMultiTexture:!1},{id:13,name:"spruce-leaves",textureUri:"blocks/spruce-leaves.png",isMultiTexture:!1},{id:14,name:"spruce-log",textureUri:"blocks/spruce-log",isMultiTexture:!0},{id:15,name:"stone",textureUri:"blocks/stone.png",isMultiTexture:!1},{id:16,name:"water",textureUri:"blocks/water.png",isMultiTexture:!1,isLiquid:!0}],Jd=16,Qd=.3;Array.from({length:Jd+1},(r,t)=>t===0?0:Qd+(1-Qd)*(t-1)/(Jd-1));const NS=-.1,tf=.05,FS=1 .toFixed(1),xr="rawAmbientLightColor",Go="ambientLightIntensity",Sa="uChunkVisibleBits",ba="uChunkVisibilityMode",Hi="time",yr="textureAtlas",vr="ambientLightColor",Xc="hytopiaFogColor",qc="hytopiaFogEnabled",$c="hytopiaFogFar",Yc="hytopiaFogNear",Il="foamLevel",Ll="foamLevelDiag",ai="chunkIndex",kS="HAS_LIGHT_LEVEL",Jp=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`,Mn=0,_i=1;function OS(r){return Math.max(Math.ceil(r/32),1)}function Sn(r){return Math.max(Math.ceil(OS(r)/4),1)}function Qp(r){return{[Sa]:{value:new Uint32Array(Sn(r)*4)},[ba]:{value:Mn}}}function tm(r){return{[Xc]:{get value(){return r.renderer.fogColor}},[qc]:{get value(){return r.renderer.fogEnabled}},[$c]:{get value(){return r.renderer.fogFar}},[Yc]:{get value(){return r.renderer.fogNear}}}}function em(){return`
    uniform vec3 ${Xc};
    uniform bool ${qc};
    uniform float ${$c};
    uniform float ${Yc};

    vec3 applyHytopiaFog(vec3 color, vec3 worldPos) {
      if (!${qc}) {
        return color;
      }

      float fogFactor = smoothstep(${Yc}, ${$c}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${Xc}, fogFactor);
    }
  `}function nm(r){return`
    uniform uint ${ba};
    uniform uvec4 ${Sa}[${r}];
    attribute float ${ai};

    bool isChunkVisible(uint chunkIndexValue) {
      if (${ba} == uint(${Mn})) {
        return true;
      }

      uint wordIndex = chunkIndexValue >> 5u;
      uvec4 packedWords = ${Sa}[int(wordIndex >> 2u)];
      uint packedWord = packedWords[int(wordIndex & 3u)];
      uint bitIndex = chunkIndexValue & 31u;
      return ((packedWord >> bitIndex) & 1u) != 0u;
    }
  `}let im=class extends Oe{constructor(){super(...arguments);T(this,"_boundChunkVisibilityBatchKey","");T(this,"_boundChunkVisibilityMode",-1);T(this,"_boundChunkVisibilityRevision",-1);T(this,"_boundChunkVisibilityBits",null)}bindChunkVisibility(e,n,i,s){return this._boundChunkVisibilityBatchKey===e&&this._boundChunkVisibilityBits===n&&this._boundChunkVisibilityMode===i&&this._boundChunkVisibilityRevision===s?!1:(this.uniforms[Sa].value=n,this.uniforms[ba].value=i,this._boundChunkVisibilityBatchKey=e,this._boundChunkVisibilityBits=n,this._boundChunkVisibilityMode=i,this._boundChunkVisibilityRevision=s,!0)}resetBoundChunkVisibilityState(){this._boundChunkVisibilityBatchKey="",this._boundChunkVisibilityBits=null,this._boundChunkVisibilityMode=-1,this._boundChunkVisibilityRevision=-1}};class Br extends im{constructor(e,n,i,s){const o=Vn.clone(pe.basic.uniforms),a=Sn(s);Object.assign(o,Qp(s),{[xr]:{value:e.renderer.ambientLight.color},[Go]:{get value(){return e.renderer.ambientLight.intensity}}},tm(e));const l=nm(a),c=pe.basic.vertexShader.replace("void main() {",`
        ${l}
        ${i?"attribute float lightLevel; varying float vLightLevel;":""}
        varying vec3 vWorldPos;

        void main() {
          uint chunkIndexValue = uint(${ai} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          ${i?"vLightLevel = lightLevel;":""}
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),h=i?`
          vec3 ambientLight = ${xr} * ${Go};
          vec3 blockLight = ${xr} * vLightLevel * float(${FS});
          outgoingLight *= max(ambientLight, blockLight);
        `:`outgoingLight *= ${xr} * ${Go};`,u=pe.basic.fragmentShader.replace("void main() {",`
          ${Jp}
          uniform vec3 ${xr};
          uniform float ${Go};
          ${i?"varying float vLightLevel;":""}
          varying vec3 vWorldPos;
          ${em()}

          void main() {
        `).replace("#include <opaque_fragment>",`
          ${h}
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:o,vertexShader:c,fragmentShader:u,side:rn,transparent:n,alphaTest:tf,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0,glslVersion:Ei});T(this,"_alphaTest",tf);T(this,"_batchChunkCount");T(this,"_color",new ut(16777215));T(this,"_customEmissive",new ut(0));T(this,"_customEmissiveIntensity",1);T(this,"_game");T(this,"_map",null);T(this,"_hasLightLevel");T(this,"_uvScrollSpeed",null);this._game=e,this._batchChunkCount=s,this._hasLightLevel=i,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_ALPHATEST:"",[kS]:i?1:0},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],[ai]:[0],lightLevel:[0]},this._bindUniforms()}get map(){return this._map}set map(e){var n;this._map=e,e?this.defines={...this.defines||{},USE_MAP:""}:((n=this.defines)==null?void 0:n.USE_MAP)!==void 0&&delete this.defines.USE_MAP}get color(){return this._color}get customAlphaTest(){return this._alphaTest}set customAlphaTest(e){this._alphaTest=e}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest=e}get customEmissive(){return this._customEmissive}get customEmissiveIntensity(){return this._customEmissiveIntensity}set customEmissiveIntensity(e){this._customEmissiveIntensity=e}get uvScrollSpeed(){return this._uvScrollSpeed}set uvScrollSpeed(e){this._uvScrollSpeed=e?e.clone():null}clone(){return new this.constructor(this._game,this.transparent,this._hasLightLevel,this._batchChunkCount).copy(this)}copy(e){return super.copy(e),this._alphaTest=e._alphaTest,this._batchChunkCount=e._batchChunkCount,this._color.copy(e._color),this._customEmissive.copy(e._customEmissive),this._customEmissiveIntensity=e._customEmissiveIntensity,this._game=e._game,this._hasLightLevel=e._hasLightLevel,this._map=e._map,this.uvScrollSpeed=e._uvScrollSpeed,this._bindUniforms(),this.resetBoundChunkVisibilityState(),this}_bindUniforms(){const e=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return e.opacity}},this.uniforms.map={get value(){return e._map}},this.uniforms.alphaTest={get value(){return e._alphaTest}}}}class sm extends im{constructor(t,e){const n=Sn(e);super({uniforms:Vn.merge([Qp(e),tm(t),{[Hi]:{value:0},[yr]:{value:null},[vr]:{value:new ut}}]),vertexShader:`
        uniform float ${Hi};
        ${nm(n)}

        attribute vec4 ${Il};
        attribute vec4 ${Ll};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;

        void main() {
          uint chunkIndexValue = uint(${ai} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          vFoamLevel = ${Il};
          vFoamLevelDiag = ${Ll};
          vNormal = normalize(normal);
          vUv = uv;

          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vViewVector = normalize(cameraPosition - worldPos.xyz);

          vec3 pos = position;
          float slowTime = ${Hi} * 0.5;
          float yOffset = ${NS};
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

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        ${Jp}
        uniform float ${Hi};
        uniform sampler2D ${yr};
        uniform vec3 ${vr};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${em()}

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
          vec4 texColor = texture(${yr}, vUv);
          if (texColor.a < 0.2) {
            discard;
          }

          vec3 color = texColor.rgb * ${vr};

          if (vNormal.y > 0.5) {
            float fresnel = pow(1.0 - dot(vNormal, vViewVector), 4.0);
            float waveLighting = sin(dot(vWorldPos.xz, vec2(2.0)) + ${Hi} * 0.5) * 0.1;

            color = color * 0.85 +
                    vec3(0.08, 0.12, 0.15) * fresnel +
                    vec3(0.03, 0.05, 0.08) * waveLighting;

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
              float foamTime = ${Hi} * 0.3;
              vec2 foamUV = vWorldPos.xz * 6.0;

              float foamNoise = noise(foamUV + vec2(foamTime, 0.0)) * 0.5 +
                                noise(foamUV * 2.0 + vec2(0.0, foamTime * 0.5)) * 0.3 +
                                noise(foamUV * 4.0 + vec2(foamTime * 0.3, foamTime * 0.2)) * 0.2;
              float foamPattern = smoothstep(0.3, 0.5, foamNoise);
              float finalFoam = mix(foamIntensity, foamPattern * foamIntensity, smoothstep(0.0, 0.05, minDist));

              vec3 foamColor = vec3(1.0) * ${vr};
              color = mix(color, foamColor, finalFoam * 0.95);
            }
          }

          gl_FragColor = vec4(color, 0.8);
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vWorldPos);
        }
      `,uniformsNeedUpdate:!1,forceSinglePass:!0,side:Ge,transparent:!0,fog:!1,lights:!1,toneMapped:!0,glslVersion:Ei}),this.defaultAttributeValues={...this.defaultAttributeValues,uv:[0,0],[ai]:[0],[Il]:[0,0,0,0],[Ll]:[0,0,0,0]}}get textureAtlas(){return this.uniforms[yr].value}set textureAtlas(t){this.uniforms[yr].value=t}update(t,e){this.uniforms[Hi].value+=.0075,this.uniforms[vr].value.copy(t).multiplyScalar(e)}}class zS{constructor(t){T(this,"_game");T(this,"_opaqueMaterial");T(this,"_transparentMaterial");T(this,"_opaqueNonLitMaterial");T(this,"_transparentNonLitMaterial");T(this,"_liquidMaterial");T(this,"_materialsToUpdate",[]);this._game=t,this._opaqueMaterial=new Br(t,!1,!0,8*4*8),this._transparentMaterial=new Br(t,!0,!0,2*2*2),this._opaqueNonLitMaterial=new Br(t,!1,!1,8*4*8),this._transparentNonLitMaterial=new Br(t,!0,!1,2*2*2),this._liquidMaterial=new sm(t,2*2*2);const e=this._game.textureAtlas;this._opaqueMaterial.map=e,this._transparentMaterial.map=e,this._opaqueNonLitMaterial.map=e,this._transparentNonLitMaterial.map=e,this._liquidMaterial.textureAtlas=e,this._opaqueMaterial.needsUpdate=!0,this._transparentMaterial.needsUpdate=!0,this._opaqueNonLitMaterial.needsUpdate=!0,this._transparentNonLitMaterial.needsUpdate=!0,this._liquidMaterial.needsUpdate=!0}get opaqueMaterial(){return this._opaqueMaterial}get transparentMaterial(){return this._transparentMaterial}get opaqueNonLitMaterial(){return this._opaqueNonLitMaterial}get transparentNonLitMaterial(){return this._transparentNonLitMaterial}get liquidMaterial(){return this._liquidMaterial}update(){const t=this._game.renderer.ambientLight;this._liquidMaterial.update(t.color,t.intensity)}cloneTransparentNonLitMaterial(){const t=this._transparentNonLitMaterial.clone();return t.map===null&&this._materialsToUpdate.push(t),t}}class VS{constructor(t,e){T(this,"manager");this.manager=new zS({renderer:t.renderer,textureAtlas:e})}get liquidMaterial(){return this.manager.liquidMaterial}get opaqueMaterial(){return this.manager.opaqueMaterial}get transparentMaterial(){return this.manager.transparentMaterial}update(){this.manager.update()}}const It=16,ln=It-1,ef=It*It*It,nf={x:0,y:0,z:0};function HS(r,t){const e=r.indexOf(","),n=r.indexOf(",",e+1);return t.x=Number(r.slice(0,e)),t.y=Number(r.slice(e+1,n)),t.z=Number(r.slice(n+1)),t}class Zt{constructor(t,e,n){T(this,"originCoordinate");T(this,"_chunkId");T(this,"_blocks");T(this,"_rotations");this.originCoordinate={...t},this._chunkId=Zt.originCoordinateToChunkId(t),this._blocks=e??new Uint16Array(ef),this._rotations=n??new Uint8Array(ef)}get chunkId(){return this._chunkId}static originCoordinateToChunkId(t){return`${t.x},${t.y},${t.z}`}static chunkIdToOriginCoordinate(t){return HS(t,nf),{...nf}}static globalCoordinateToOriginCoordinate(t){return{x:t.x&~ln,y:t.y&~ln,z:t.z&~ln}}static globalCoordinateToChunkId(t){return Zt.originCoordinateToChunkId(Zt.globalCoordinateToOriginCoordinate(t))}static globalCoordinateToLocalCoordinate(t){return{x:t.x&ln,y:t.y&ln,z:t.z&ln}}static blockIndexToLocalCoordinate(t){return{x:t&ln,y:t>>4&ln,z:t>>8&ln}}getBlockType(t){return this._blocks[this._getIndex(t)]}getBlockTypeAt(t,e,n){return this._blocks[t+It*(e+It*n)]}setBlock(t,e){this._blocks[this._getIndex(t)]=e}getBlockRotation(t){return this._rotations[this._getIndex(t)]??0}getBlockRotationAt(t,e,n){return this._rotations[t+It*(e+It*n)]??0}setBlockRotation(t,e){this._rotations[this._getIndex(t)]=e&255}isEmpty(){for(let t=0;t<this._blocks.length;t++)if(this._blocks[t]!==0)return!1;return!0}cloneBlocks(){return this._blocks.slice()}cloneRotations(){return this._rotations.slice()}forEachBlock(t){for(let e=0;e<this._blocks.length;e++){const n=this._blocks[e];n!==0&&t(Zt.blockIndexToLocalCoordinate(e),n,this._rotations[e]??0)}}_getIndex(t){return t.x+It*(t.y+It*t.z)}}class rm{}T(rm,"chunkIdToOriginCoordinate",Zt.chunkIdToOriginCoordinate);const tn=3,Gi=3,Pl=2,Es=4,Wo=1,xi=4,Dl="TransparentSortData",Bl=new ke;function nn(r){if(!(Dl in r.userData)){const n={center:new L,frame:-1,halfSize:new L,key:-1};r.userData[Dl]=n}r.geometry.boundingBox===null&&r.geometry.computeBoundingBox();const{center:t,halfSize:e}=r.userData[Dl];Bl.copy(r.geometry.boundingBox).applyMatrix4(r.matrixWorld),Bl.getCenter(t),Bl.getSize(e).multiplyScalar(.5)}const GS={x:2,y:2,z:2},WS={x:2,y:2,z:2},Ke={x:8,y:4,z:8},XS=2,Xo=2,qo=new Gt,yi=new L,Mr=new L,Kc="hytopiaFogColor",Zc="hytopiaFogEnabled",jc="hytopiaFogFar",Jc="hytopiaFogNear",ua="uChunkVisibleBits",da="uChunkVisibilityMode",qS=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`;function sf(r){return r.min.x<=r.max.x&&r.min.y<=r.max.y&&r.min.z<=r.max.z}function $S(r){return{[ua]:{value:new Uint32Array(Sn(r)*4)},[da]:{value:Mn}}}function YS(r){return{[Kc]:{get value(){return r.renderer.fogColor}},[Zc]:{get value(){return r.renderer.fogEnabled}},[jc]:{get value(){return r.renderer.fogFar}},[Jc]:{get value(){return r.renderer.fogNear}}}}class rf extends Oe{constructor(e,n){const i=Vn.clone(pe.basic.uniforms),s=Sn(n);Object.assign(i,$S(n),YS(e));const o=pe.basic.vertexShader.replace("void main() {",`
        uniform uint ${da};
        uniform uvec4 ${ua}[${s}];
        attribute float ${ai};
        varying vec3 vHytopiaWorldPos;

        bool isChunkVisible(uint chunkIndexValue) {
          if (${da} == uint(${Mn})) {
            return true;
          }

          uint wordIndex = chunkIndexValue >> 5u;
          uvec4 packedWords = ${ua}[int(wordIndex >> 2u)];
          uint packedWord = packedWords[int(wordIndex & 3u)];
          uint bitIndex = chunkIndexValue & 31u;
          return ((packedWord >> bitIndex) & 1u) != 0u;
        }

        void main() {
          uint chunkIndexValue = uint(${ai} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
      `).replace("#include <project_vertex>",`
        vec4 hytopiaWorldPosition = vec4(transformed, 1.0);
        #ifdef USE_BATCHING
          hytopiaWorldPosition = batchingMatrix * hytopiaWorldPosition;
        #endif
        #ifdef USE_INSTANCING
          hytopiaWorldPosition = instanceMatrix * hytopiaWorldPosition;
        #endif
        hytopiaWorldPosition = modelMatrix * hytopiaWorldPosition;
        vHytopiaWorldPos = hytopiaWorldPosition.xyz;
        #include <project_vertex>
      `),a=pe.basic.fragmentShader.replace("void main() {",`
          ${qS}
          varying vec3 vHytopiaWorldPos;
          uniform vec3 ${Kc};
          uniform bool ${Zc};
          uniform float ${jc};
          uniform float ${Jc};

          vec3 applyHytopiaFog(vec3 color, vec3 worldPos) {
            if (!${Zc}) {
              return color;
            }

            float fogFactor = smoothstep(${Jc}, ${jc}, length(worldPos.xz - cameraPosition.xz));
            return mix(color, ${Kc}, fogFactor);
          }

          void main() {
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vHytopiaWorldPos);
        `);super({uniforms:i,vertexShader:o,fragmentShader:a,side:Ge,vertexColors:!0,fog:!1,lights:!1,toneMapped:!0,glslVersion:Ei});T(this,"_boundBatchKey","");T(this,"_boundChunkVisibilityBits",null);T(this,"_boundChunkVisibilityMode",-1);T(this,"_boundChunkVisibilityRevision",-1);this.defines={...this.defines||{},USE_COLOR:""}}bindChunkVisibility(e,n,i,s){return this._boundBatchKey===e&&this._boundChunkVisibilityBits===n&&this._boundChunkVisibilityMode===i&&this._boundChunkVisibilityRevision===s?!1:(this.uniforms[ua].value=n,this.uniforms[da].value=i,this._boundBatchKey=e,this._boundChunkVisibilityBits=n,this._boundChunkVisibilityMode=i,this._boundChunkVisibilityRevision=s,!0)}}class KS{constructor(t){T(this,"_game");T(this,"_gl");T(this,"_chunkLiquidGeometry",new Map);T(this,"_chunkLodGeometry",new Map);T(this,"_chunkOpaqueGeometry",new Map);T(this,"_chunkTransparentGeometry",new Map);T(this,"_chunkLiquidBounds",new Map);T(this,"_chunkLodBounds",new Map);T(this,"_chunkOpaqueBounds",new Map);T(this,"_chunkTransparentBounds",new Map);T(this,"_liquidBatches",new Map);T(this,"_opaqueBatches",new Map);T(this,"_transparentBatches",new Map);T(this,"_opaqueCollisionMeshes",new Map);T(this,"_parentBatches",new Map);T(this,"_transparentCollisionMeshes",new Map);T(this,"_batchKeyCache",new Map);T(this,"_opaqueSolidBatchMeshes",[]);T(this,"_opaqueSolidBatchMeshesDirty",!0);T(this,"_transparentSolidBatchMeshes",[]);T(this,"_transparentSolidBatchMeshesDirty",!0);T(this,"_solidMeshesInScene",[]);T(this,"_solidMeshesInSceneDirty",!0);T(this,"_collisionMaterial",new Nn);T(this,"_lodMaterial");this._game=t,this._gl=t.renderer.webGLRenderer.getContext(),this._lodMaterial=new rf(t,Ke.x*Ke.y*Ke.z)}updateChunkGeometry(t,e,n,i,s,o,a,l,c){this._updateChunkGeometryForKind("liquid",t,e,n),this._updateChunkLodGeometry(t,i,s),this._updateChunkGeometryForKind("opaque",t,o,a),this._updateChunkGeometryForKind("transparent",t,l,c)}removeChunkGeometry(t){this._updateChunkGeometryForKind("liquid",t,void 0),this._updateChunkLodGeometry(t,void 0),this._updateChunkGeometryForKind("opaque",t,void 0),this._updateChunkGeometryForKind("transparent",t,void 0)}clear(){for(const t of[...this._opaqueBatches.values()])this._disposeBatch(this._opaqueBatches,t);for(const t of[...this._transparentBatches.values()])this._disposeBatch(this._transparentBatches,t);for(const t of[...this._liquidBatches.values()])this._disposeBatch(this._liquidBatches,t);for(const t of this._parentBatches.values())this._disposeLodBatch(t);this._chunkLiquidGeometry.clear(),this._chunkLodGeometry.clear(),this._chunkOpaqueGeometry.clear(),this._chunkTransparentGeometry.clear(),this._chunkLiquidBounds.clear(),this._chunkLodBounds.clear(),this._chunkOpaqueBounds.clear(),this._chunkTransparentBounds.clear(),this._opaqueCollisionMeshes.clear(),this._transparentCollisionMeshes.clear(),this._opaqueBatches.clear(),this._transparentBatches.clear(),this._liquidBatches.clear(),this._parentBatches.clear(),this._batchKeyCache.clear(),this._opaqueSolidBatchMeshes.length=0,this._transparentSolidBatchMeshes.length=0,this._solidMeshesInScene.length=0,this._opaqueSolidBatchMeshesDirty=!0,this._transparentSolidBatchMeshesDirty=!0,this._solidMeshesInSceneDirty=!0}get batchMeshCount(){let t=0;for(const e of this._parentBatches.values())e.lodBatch&&t++;return this._opaqueBatches.size+this._transparentBatches.size+this._liquidBatches.size+t}applyBatchVisibility(t,e,n,i,s,o){this._flushPendingUploads();for(const a of this._parentBatches.values())this._applyParentBatchVisibility(a,t,e,n,i,s,o)}collectPreOcclusionChunkModes(t,e,n,i,s){s.clear();for(const o of this._parentBatches.values()){const a=this._classifyViewDistance(o.bounds,t,n),l=sf(o.bounds)?this._classifyFrustum(o.bounds,i):-1;if(!(a===-1||l===-1))for(const c of this._getParentBatchChunkIds(o)){const h=this._getChunkVisibilityBounds(c);if(!h||this._classifyChunkBoundsViewDistance(h,t,n)===-1||this._classifyChunkBoundsFrustum(h,i)===-1)continue;const u=this._distanceToChunkBoundsXZSquared(h,t);s.set(c,u>e&&o.lodChunkIds.has(c)?"lod":"normal")}}return s}getChunkVisibilityBounds(t){return this._getChunkVisibilityBounds(t)}getChunkOpaqueBounds(t){return this._chunkOpaqueBounds.get(t)}getChunkTransparentBounds(t){return this._chunkTransparentBounds.get(t)}getChunkLiquidBounds(t){return this._chunkLiquidBounds.get(t)}getChunkLodBounds(t){return this._chunkLodBounds.get(t)}get solidMeshesInScene(){return this._solidMeshesInSceneDirty?(this._solidMeshesInScene.length=0,this._collectCollisionMeshes(this._opaqueBatches,this._opaqueCollisionMeshes),this._collectCollisionMeshes(this._transparentBatches,this._transparentCollisionMeshes),this._solidMeshesInSceneDirty=!1,this._solidMeshesInScene):this._solidMeshesInScene}get opaqueSolidMeshes(){if(this._opaqueSolidBatchMeshesDirty){this._opaqueSolidBatchMeshes.length=0;for(const t of this._opaqueBatches.values())this._opaqueSolidBatchMeshes.push(t.mesh);this._opaqueSolidBatchMeshesDirty=!1}return this._opaqueSolidBatchMeshes.values()}get transparentSolidMeshes(){if(this._transparentSolidBatchMeshesDirty){this._transparentSolidBatchMeshes.length=0;for(const t of this._transparentBatches.values())this._transparentSolidBatchMeshes.push(t.mesh);this._transparentSolidBatchMeshesDirty=!1}return this._transparentSolidBatchMeshes.values()}_collectCollisionMeshes(t,e){for(const n of t.values())if(n.visible)for(let i=0;i<n.chunkIds.length;i++){if(!this._isChunkVisible(n.chunkVisibilityBits,n.chunkVisibilityMode,i))continue;const s=n.chunkIds[i],o=e.get(s);o&&this._solidMeshesInScene.push(o)}}_updateChunkGeometryForKind(t,e,n,i){var _;const s=this._getChunkGeometryMap(t),o=this._getChunkBoundsMap(t),a=this._getBatchMap(t),l=this._getCollisionMeshMap(t),c=this._getBatchKeyForChunk(e,this._getBatchDimensions(t)),h=this._getParentBatchKeyForBatchKey(c);if(!n){s.delete(e),o.delete(e),(_=l==null?void 0:l.get(e))==null||_.geometry.dispose(),l==null||l.delete(e),this._markParentBatchChunkIdsDirty(h);const p=a.get(c);p&&this._removeChunkFromBatch(a,p,e),this._solidMeshesInSceneDirty=!0;return}s.set(e,n),i&&o.set(e,i),l&&t!=="liquid"&&this._updateCollisionMesh(l,e,n);let u=a.get(c);u||(u=this._createBatch(t,c),a.set(c,u),this._registerNormalBatch(c,t));const d=u.allocations.get(e);if(!d){this._markParentBatchChunkIdsDirty(h),this._appendChunkToBatch(a,u,e,n);return}const f=n.positions.length/tn,m=n.indices.length;if(f<=d.vertexCapacity&&m<=d.indexCapacity){this._uploadChunkIntoAllocation(u,e,d,n),this._updateBatchBounds(u);return}this._rebuildBatch(a,u,e)}_updateChunkLodGeometry(t,e,n){const i=this._getParentBatchKeyForChunk(t);if(!e||!n){this._chunkLodGeometry.delete(t),this._chunkLodBounds.delete(t),this._unregisterLodChunk(i,t),this._rebuildLodBatch(i);return}this._chunkLodGeometry.set(t,e),this._chunkLodBounds.set(t,n),this._registerLodChunk(i,t),this._rebuildLodBatch(i)}_appendChunkToBatch(t,e,n,i){const s=i.positions.length/tn,o=i.indices.length,a=this._roundCapacity(s),l=this._roundIndexCapacity(o);if(e.totalVertexCount+a>e.vertexCapacity||e.totalIndexCount+l>e.indexCapacity){this._rebuildBatch(t,e,n);return}const c={vertexOffset:e.totalVertexCount,vertexCapacity:a,vertexCount:s,indexOffset:e.totalIndexCount,indexCapacity:l,indexCount:o};e.allocations.set(n,c),e.chunkIds.push(n),e.totalVertexCount+=a,e.totalIndexCount+=l,this._uploadChunkIntoAllocation(e,n,c,i),this._updateBatchBounds(e)}_removeChunkFromBatch(t,e,n){const i=e.allocations.get(n);if(!i)return;const s=e.chunkIds[e.chunkIds.length-1];if(s&&s!==n){const o=e.allocations.get(s),a=this._getChunkGeometryMap(e.kind).get(s);if(o.vertexCapacity>i.vertexCapacity||o.indexCapacity>i.indexCapacity){e.allocations.delete(n);const c=e.chunkIds.indexOf(n);c>=0&&e.chunkIds.splice(c,1),this._rebuildBatch(t,e);return}const l={vertexOffset:i.vertexOffset,vertexCapacity:i.vertexCapacity,vertexCount:o.vertexCount,indexOffset:i.indexOffset,indexCapacity:i.indexCapacity,indexCount:o.indexCount};e.allocations.set(s,l),this._uploadChunkIntoAllocation(e,s,l,a)}if(e.allocations.delete(n),e.chunkIds.pop(),s&&s!==n){const o=e.chunkIds.indexOf(n);o>=0&&(e.chunkIds[o]=s)}else{const o=e.chunkIds.indexOf(n);o>=0&&e.chunkIds.splice(o,1)}e.totalVertexCount=0,e.totalIndexCount=0;for(const o of e.chunkIds){const a=e.allocations.get(o);e.totalVertexCount=Math.max(e.totalVertexCount,a.vertexOffset+a.vertexCapacity),e.totalIndexCount=Math.max(e.totalIndexCount,a.indexOffset+a.indexCapacity)}this._updateBatchDrawRange(e),e.chunkIds.length===0?this._disposeBatch(t,e):this._updateBatchBounds(e)}_rebuildBatch(t,e,n){const i=this._getChunkGeometryMap(e.kind),s=n&&!e.allocations.has(n)?[...e.chunkIds,n]:[...e.chunkIds];let o=0,a=0;for(const h of s){const u=i.get(h);u&&(o+=this._roundCapacity(u.positions.length/tn),a+=this._roundIndexCapacity(u.indices.length))}const l=Math.max(this._roundCapacity(o),1),c=Math.max(this._roundCapacity(a),1);this._resizeBatchBuffers(e,l,c),e.allocations.clear(),e.chunkIds=[],e.totalVertexCount=0,e.totalIndexCount=0;for(const h of s){const u=i.get(h);u&&this._appendChunkToBatch(t,e,h,u)}this._updateBatchBounds(e)}_uploadChunkIntoAllocation(t,e,n,i){const s=i.positions.length/tn,o=i.indices.length,a=t.chunkIds.indexOf(e);n.vertexCount=s,n.indexCount=o,this._queueUpload(t,t.positionBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*tn*4,i.positions),this._queueUpload(t,t.normalBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Gi*4,i.normals),this._queueUpload(t,t.uvBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Pl*4,i.uvs),this._queueUpload(t,t.colorBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Es*4,i.colors),this._queueUpload(t,t.chunkIndexBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Xo,new Uint16Array(n.vertexCapacity).fill(a));const l=i.lightLevels??new Float32Array(s*Wo);if(this._queueUpload(t,t.lightLevelBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Wo*4,l),t.kind==="liquid"&&t.foamBuffer&&t.foamDiagBuffer){const u=i.foamLevels??new Float32Array(s*xi),d=i.foamLevelsDiag??new Float32Array(s*xi);this._queueUpload(t,t.foamBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*xi*4,u),this._queueUpload(t,t.foamDiagBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*xi*4,d)}const c=new t.indexArrayCtor(n.indexCapacity);for(let u=0;u<o;u++)c[u]=i.indices[u]+n.vertexOffset;const h=n.vertexOffset;for(let u=o;u<n.indexCapacity;u++)c[u]=h;this._queueUpload(t,t.indexBuffer,this._gl.ELEMENT_ARRAY_BUFFER,n.indexOffset*t.indexBytesPerElement,c),this._updateBatchDrawRange(t)}_queueUpload(t,e,n,i,s){t.pendingUploads.push({buffer:e,target:n,offset:i,data:s,arrayCtor:s.constructor,bytesPerElement:s.BYTES_PER_ELEMENT})}_uploadArray(t,e,n,i){const s=this._gl instanceof WebGL2RenderingContext?this._gl:null;e===this._gl.ELEMENT_ARRAY_BUFFER&&s&&s.bindVertexArray(null),this._gl.bindBuffer(e,t),this._gl.bufferSubData(e,n,i)}_flushPendingUploads(){for(const t of this._opaqueBatches.values())this._flushBatchPendingUploads(t);for(const t of this._transparentBatches.values())this._flushBatchPendingUploads(t);for(const t of this._liquidBatches.values())this._flushBatchPendingUploads(t)}_flushBatchPendingUploads(t){if(t.pendingUploads.length===0)return;const e=new Map;for(const n of t.pendingUploads){const i=e.get(n.buffer);i?i.push(n):e.set(n.buffer,[n])}for(const n of e.values())this._flushMergedUploads(n);t.pendingUploads.length=0}_flushMergedUploads(t){t.sort((i,s)=>i.offset-s.offset);let e=0,n=t[0].offset+t[0].data.byteLength;for(let i=1;i<=t.length;i++){const s=t[i];if(s&&s.offset<=n+s.bytesPerElement&&s.arrayCtor===t[e].arrayCtor&&s.bytesPerElement===t[e].bytesPerElement){n=Math.max(n,s.offset+s.data.byteLength);continue}this._flushUploadCluster(t,e,i),e=i,s&&(n=s.offset+s.data.byteLength)}}_flushUploadCluster(t,e,n){if(n<=e)return;const i=t[e];if(n===e+1){this._uploadArray(i.buffer,i.target,i.offset,i.data);return}let s=i.offset+i.data.byteLength;for(let l=e+1;l<n;l++)s=Math.max(s,t[l].offset+t[l].data.byteLength);const o=(s-i.offset)/i.bytesPerElement,a=new i.arrayCtor(o);for(let l=e;l<n;l++){const c=t[l],h=(c.offset-i.offset)/c.bytesPerElement;a.set(c.data,h)}this._uploadArray(i.buffer,i.target,i.offset,a)}_createBatch(t,e){const n=this._getBatchDimensions(t),i=this._getBatchOriginFromKey(e),s={x:n.x*It,y:n.y*It,z:n.z*It},o=new Ue;o.boundingBox=new ke(yi.set(0,0,0).clone(),yi.set(s.x,s.y,s.z).clone()),o.boundingSphere=new Be(yi.set(s.x*.5,s.y*.5,s.z*.5).clone(),Math.sqrt(s.x*s.x+s.y*s.y+s.z*s.z)*.5);const a=this._getRenderMaterial(t),l=new ve(o,a);l.name=`${t}_batch_${e}`,l.matrixAutoUpdate=!1,l.matrixWorldAutoUpdate=!1,l.frustumCulled=!1,nn(l);const c={allocations:new Map,bounds:o.boundingBox.clone(),chunkIndexBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,Xo),chunkIds:[],chunkVisibilityBits:new Uint32Array(Sn(n.x*n.y*n.z)*4),chunkVisibilityScratchBits:new Uint32Array(Sn(n.x*n.y*n.z)*4),chunkVisibilityMode:Mn,chunkVisibilityRevision:0,geometry:o,indexBuffer:this._createGLBuffer(this._gl.ELEMENT_ARRAY_BUFFER,2),indexType:this._gl.UNSIGNED_SHORT,indexArrayCtor:Uint16Array,indexBytesPerElement:2,indexCapacity:1,key:e,kind:t,lightLevelBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),lightLevelCapacity:1,material:a,mesh:l,normalBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),origin:i,pendingUploads:[],positionBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),uvBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),colorBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),totalIndexCount:0,totalVertexCount:0,vertexCapacity:1,visible:!1,worldSize:s};return l.onBeforeRender=(h,u,d,f,m)=>{(m instanceof Br||m instanceof sm)&&m.bindChunkVisibility(e,c.chunkVisibilityBits,c.chunkVisibilityMode,c.chunkVisibilityRevision)&&(m.uniformsNeedUpdate=!0)},t==="liquid"&&(c.foamBuffer=this._createGLBuffer(this._gl.ARRAY_BUFFER,4),c.foamDiagBuffer=this._createGLBuffer(this._gl.ARRAY_BUFFER,4)),this._attachGLAttributes(c),this._updateBatchBounds(c),t==="opaque"?this._opaqueSolidBatchMeshesDirty=!0:t==="transparent"&&(this._transparentSolidBatchMeshesDirty=!0),c}_attachGLAttributes(t){const e=new Jn(t.indexBuffer,t.indexType,1,t.indexBytesPerElement,t.indexCapacity),n=new Jn(t.positionBuffer,this._gl.FLOAT,tn,4,t.vertexCapacity),i=new Jn(t.normalBuffer,this._gl.FLOAT,Gi,4,t.vertexCapacity),s=new Jn(t.uvBuffer,this._gl.FLOAT,Pl,4,t.vertexCapacity),o=new Jn(t.colorBuffer,this._gl.FLOAT,Es,4,t.vertexCapacity),a=new Jn(t.chunkIndexBuffer,this._gl.UNSIGNED_SHORT,1,Xo,t.vertexCapacity),l=new Jn(t.lightLevelBuffer,this._gl.FLOAT,Wo,4,t.vertexCapacity);if(t.geometry.setIndex(e),t.geometry.setAttribute("position",n),t.geometry.setAttribute("normal",i),t.geometry.setAttribute("uv",s),t.geometry.setAttribute("color",o),t.geometry.setAttribute(ai,a),t.geometry.setAttribute("lightLevel",l),t.kind==="liquid"&&t.foamBuffer&&t.foamDiagBuffer){const c=new Jn(t.foamBuffer,this._gl.FLOAT,xi,4,t.vertexCapacity),h=new Jn(t.foamDiagBuffer,this._gl.FLOAT,xi,4,t.vertexCapacity);t.geometry.setAttribute("foamLevel",c),t.geometry.setAttribute("foamLevelDiag",h)}t.geometry.setDrawRange(0,0)}_resizeBatchBuffers(t,e,n){t.pendingUploads.length=0;const i=e>65535?this._gl.UNSIGNED_INT:this._gl.UNSIGNED_SHORT,s=i===this._gl.UNSIGNED_INT?Uint32Array:Uint16Array,o=i===this._gl.UNSIGNED_INT?4:2;t.vertexCapacity=e,t.indexCapacity=n,t.indexType=i,t.indexArrayCtor=s,t.indexBytesPerElement=o,this._allocateBuffer(t.positionBuffer,this._gl.ARRAY_BUFFER,e*tn*4),this._allocateBuffer(t.normalBuffer,this._gl.ARRAY_BUFFER,e*Gi*4),this._allocateBuffer(t.uvBuffer,this._gl.ARRAY_BUFFER,e*Pl*4),this._allocateBuffer(t.colorBuffer,this._gl.ARRAY_BUFFER,e*Es*4),this._allocateBuffer(t.chunkIndexBuffer,this._gl.ARRAY_BUFFER,e*Xo),this._allocateBuffer(t.lightLevelBuffer,this._gl.ARRAY_BUFFER,e*Wo*4),t.foamBuffer&&t.foamDiagBuffer&&(this._allocateBuffer(t.foamBuffer,this._gl.ARRAY_BUFFER,e*xi*4),this._allocateBuffer(t.foamDiagBuffer,this._gl.ARRAY_BUFFER,e*xi*4)),this._allocateBuffer(t.indexBuffer,this._gl.ELEMENT_ARRAY_BUFFER,n*o),this._attachGLAttributes(t)}_allocateBuffer(t,e,n){const i=this._gl instanceof WebGL2RenderingContext?this._gl:null;e===this._gl.ELEMENT_ARRAY_BUFFER&&i&&i.bindVertexArray(null),this._gl.bindBuffer(e,t),this._gl.bufferData(e,n,this._gl.DYNAMIC_DRAW)}_updateBatchDrawRange(t){let e=0;for(const n of t.allocations.values())e=Math.max(e,n.indexOffset+n.indexCount);t.geometry.setDrawRange(0,e)}_updateBatchBounds(t){const e=this._getChunkBoundsMap(t.kind);if(t.chunkIds.length===0){t.bounds.makeEmpty(),t.geometry.boundingBox=t.bounds.clone(),t.geometry.boundingSphere=new Be(yi.set(0,0,0).clone(),0),nn(t.mesh);return}let n=!1;for(const s of t.chunkIds){const o=e.get(s);if(o){if(!n){t.bounds.min.set(o.min[0],o.min[1],o.min[2]),t.bounds.max.set(o.max[0],o.max[1],o.max[2]),n=!0;continue}t.bounds.min.x=Math.min(t.bounds.min.x,o.min[0]),t.bounds.min.y=Math.min(t.bounds.min.y,o.min[1]),t.bounds.min.z=Math.min(t.bounds.min.z,o.min[2]),t.bounds.max.x=Math.max(t.bounds.max.x,o.max[0]),t.bounds.max.y=Math.max(t.bounds.max.y,o.max[1]),t.bounds.max.z=Math.max(t.bounds.max.z,o.max[2])}}t.geometry.boundingBox=t.bounds.clone();const i=t.geometry.boundingSphere??new Be;t.bounds.getCenter(Mr),i.center.copy(Mr),i.radius=Mr.distanceTo(t.bounds.max),t.geometry.boundingSphere=i,nn(t.mesh)}_createGLBuffer(t,e){const n=this._gl.createBuffer();if(!n)throw new Error("ChunkMeshManager: Failed to create WebGLBuffer.");return this._allocateBuffer(n,t,e),n}_disposeBatch(t,e){e.pendingUploads.length=0,this._gl.deleteBuffer(e.positionBuffer),this._gl.deleteBuffer(e.normalBuffer),this._gl.deleteBuffer(e.uvBuffer),this._gl.deleteBuffer(e.colorBuffer),this._gl.deleteBuffer(e.chunkIndexBuffer),this._gl.deleteBuffer(e.lightLevelBuffer),e.foamBuffer&&this._gl.deleteBuffer(e.foamBuffer),e.foamDiagBuffer&&this._gl.deleteBuffer(e.foamDiagBuffer),this._gl.deleteBuffer(e.indexBuffer),this._game.renderer.removeFromScene(e.mesh),t.delete(e.key),this._unregisterNormalBatch(e.key,e.kind),e.kind==="opaque"?this._opaqueSolidBatchMeshesDirty=!0:e.kind==="transparent"&&(this._transparentSolidBatchMeshesDirty=!0),this._solidMeshesInSceneDirty=!0}_applyParentBatchVisibility(t,e,n,i,s,o,a){const l=this._classifyViewDistance(t.bounds,e,i),c=sf(t.bounds)?this._classifyFrustum(t.bounds,s):-1;if(l===-1||c===-1){this._syncParentBatchVisibility(t,"hidden");return}const h=this._classifyParentChunkVisibility(t,e,n,i,s,o,a);let u=!1;for(const m of t.opaqueBatchKeys){const _=this._opaqueBatches.get(m),p=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,p),u||(u=p)}for(const m of t.transparentBatchKeys){const _=this._transparentBatches.get(m),p=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,p),u||(u=p)}for(const m of t.liquidBatchKeys){const _=this._liquidBatches.get(m),p=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,p),u||(u=p)}const d=this._applyLodBatchChunkVisibility(t,h,a);this._setLodBatchScenePresence(t.lodBatch,d);let f="hidden";u&&d?f="mixed":u?f="normal":d&&(f="lod"),this._syncParentBatchVisibility(t,f)}_classifyParentChunkVisibility(t,e,n,i,s,o,a){const l=t.chunkModes;l.clear();const c=this._getParentBatchChunkIds(t);for(const h of c){const u=o==null?void 0:o.get(h);if(u){if(a&&!a.has(h)){l.set(h,"hidden");continue}l.set(h,u);continue}const d=this._getChunkVisibilityBounds(h);if(!d){l.set(h,"hidden");continue}if(this._classifyChunkBoundsViewDistance(d,e,i)===-1){l.set(h,"hidden");continue}if(this._classifyChunkBoundsFrustum(d,s)===-1){l.set(h,"hidden");continue}this._distanceToChunkBoundsXZSquared(d,e)>n&&t.lodChunkIds.has(h)?l.set(h,"lod"):l.set(h,"normal")}return l}_getParentBatchChunkIds(t){if(!t.allChunkIdsDirty)return t.allChunkIds;const e=new Set(t.lodChunkIds);this._collectParentBatchChunkIds(this._opaqueBatches,t.opaqueBatchKeys,e),this._collectParentBatchChunkIds(this._transparentBatches,t.transparentBatchKeys,e),this._collectParentBatchChunkIds(this._liquidBatches,t.liquidBatchKeys,e),t.allChunkIds.length=0;for(const n of e)t.allChunkIds.push(n);return t.allChunkIdsDirty=!1,t.allChunkIds}_collectParentBatchChunkIds(t,e,n){for(const i of e){const s=t.get(i);if(s)for(const o of s.chunkIds)n.add(o)}}_markParentBatchChunkIdsDirty(t){const e=this._parentBatches.get(t);e&&(e.allChunkIdsDirty=!0)}_getChunkVisibilityBounds(t){return this._chunkOpaqueBounds.get(t)??this._chunkTransparentBounds.get(t)??this._chunkLiquidBounds.get(t)??this._chunkLodBounds.get(t)}_applyLodBatchChunkVisibility(t,e,n){const i=t.lodBatch;if(!i)return!1;const s=i.chunkVisibilityScratchBits;s.fill(0);let o=0;for(let c=0;c<i.chunkIds.length;c++){if(e.get(i.chunkIds[c])!=="lod"||n&&!n.has(i.chunkIds[c]))continue;const h=c>>5;s[h]|=1<<(c&31),o++}const a=!this._areChunkVisibilityBitsEqual(i.chunkVisibilityBits,s);if(a&&i.chunkVisibilityBits.set(s),o===0){const c=i.chunkVisibilityMode!==_i;return this._setLodBatchChunkVisibilityMode(i,_i),(c||a)&&i.chunkVisibilityRevision++,!1}if(o===i.chunkIds.length)return i.chunkVisibilityMode!==Mn&&i.chunkVisibilityRevision++,this._setLodBatchChunkVisibilityMode(i,Mn),!0;const l=i.chunkVisibilityMode!==_i;return this._setLodBatchChunkVisibilityMode(i,_i),(l||a)&&i.chunkVisibilityRevision++,!0}_applyNormalBatchChunkVisibility(t,e,n){const i=t.chunkVisibilityScratchBits;i.fill(0);let s=0;for(let l=0;l<t.chunkIds.length;l++){if(e.get(t.chunkIds[l])!=="normal"||n&&!n.has(t.chunkIds[l]))continue;const c=l>>5;i[c]|=1<<(l&31),s++}const o=!this._areChunkVisibilityBitsEqual(t.chunkVisibilityBits,i);if(o&&t.chunkVisibilityBits.set(i),s===0){const l=t.chunkVisibilityMode!==_i;return this._setBatchChunkVisibilityMode(t,_i),(l||o)&&t.chunkVisibilityRevision++,!1}if(s===t.chunkIds.length)return this._setBatchChunkVisibilityMode(t,Mn),!0;const a=t.chunkVisibilityMode!==_i;return this._setBatchChunkVisibilityMode(t,_i),(a||o)&&t.chunkVisibilityRevision++,this._solidMeshesInSceneDirty=!0,!0}_syncParentBatchVisibility(t,e){if(e==="hidden"){for(const n of t.opaqueBatchKeys)this._setNormalBatchScenePresence(this._opaqueBatches.get(n),!1);for(const n of t.transparentBatchKeys)this._setNormalBatchScenePresence(this._transparentBatches.get(n),!1);for(const n of t.liquidBatchKeys)this._setNormalBatchScenePresence(this._liquidBatches.get(n),!1);this._setLodBatchScenePresence(t.lodBatch,!1)}t.visibilityState=e}_setNormalBatchScenePresence(t,e){if(!t)return;const n=t.mesh.parent!==null;e&&!n?(this._game.renderer.addToScene(t.mesh),this._solidMeshesInSceneDirty=!0):!e&&n&&(this._game.renderer.removeFromScene(t.mesh),this._solidMeshesInSceneDirty=!0),t.visible=e}_setLodBatchScenePresence(t,e){if(!t)return;const n=t.mesh.parent!==null;e&&!n?this._game.renderer.addToScene(t.mesh):!e&&n&&this._game.renderer.removeFromScene(t.mesh),t.visible=e}_classifyViewDistance(t,e,n){if(this._distanceToBoundsXZSquared(t,e)>n)return-1;const i=Math.abs(e.x-t.min.x)>Math.abs(e.x-t.max.x)?t.min.x:t.max.x,s=Math.abs(e.y-t.min.z)>Math.abs(e.y-t.max.z)?t.min.z:t.max.z;return e.distanceToSquared(qo.set(i,s))<=n?1:0}_distanceToBoundsXZSquared(t,e){const n=Math.max(t.min.x,Math.min(e.x,t.max.x)),i=Math.max(t.min.z,Math.min(e.y,t.max.z));return e.distanceToSquared(qo.set(n,i))}_classifyChunkBoundsViewDistance(t,e,n){if(this._distanceToChunkBoundsXZSquared(t,e)>n)return-1;const i=Math.abs(e.x-t.min[0])>Math.abs(e.x-t.max[0])?t.min[0]:t.max[0],s=Math.abs(e.y-t.min[2])>Math.abs(e.y-t.max[2])?t.min[2]:t.max[2];return e.distanceToSquared(qo.set(i,s))<=n?1:0}_distanceToChunkBoundsXZSquared(t,e){const n=Math.max(t.min[0],Math.min(e.x,t.max[0])),i=Math.max(t.min[2],Math.min(e.y,t.max[2]));return e.distanceToSquared(qo.set(n,i))}_classifyFrustum(t,e){let n=!0;for(const i of e.planes){const s=yi.set(i.normal.x>=0?t.max.x:t.min.x,i.normal.y>=0?t.max.y:t.min.y,i.normal.z>=0?t.max.z:t.min.z);if(i.distanceToPoint(s)<0)return-1;const o=Mr.set(i.normal.x>=0?t.min.x:t.max.x,i.normal.y>=0?t.min.y:t.max.y,i.normal.z>=0?t.min.z:t.max.z);i.distanceToPoint(o)<0&&(n=!1)}return n?1:0}_classifyChunkBoundsFrustum(t,e){let n=!0;for(const i of e.planes){const s=yi.set(i.normal.x>=0?t.max[0]:t.min[0],i.normal.y>=0?t.max[1]:t.min[1],i.normal.z>=0?t.max[2]:t.min[2]);if(i.distanceToPoint(s)<0)return-1;const o=Mr.set(i.normal.x>=0?t.min[0]:t.max[0],i.normal.y>=0?t.min[1]:t.max[1],i.normal.z>=0?t.min[2]:t.max[2]);i.distanceToPoint(o)<0&&(n=!1)}return n?1:0}_areChunkVisibilityBitsEqual(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}_isChunkVisible(t,e,n){if(e===Mn)return!0;const i=n>>5;return(t[i]>>>(n&31)&1)!==0}_setBatchChunkVisibilityMode(t,e){t.chunkVisibilityMode!==e&&(t.chunkVisibilityMode=e,t.chunkVisibilityRevision++,this._solidMeshesInSceneDirty=!0)}_setLodBatchChunkVisibilityMode(t,e){t.chunkVisibilityMode!==e&&(t.chunkVisibilityMode=e)}_updateCollisionMesh(t,e,n){const i=new Ue;i.setAttribute("position",new Jt(n.positions,tn)),i.setAttribute("normal",new Jt(n.normals,Gi)),i.setIndex(new Jt(n.indices,1)),i.computeBoundingBox(),i.computeBoundingSphere();const s=t.get(e),o=this._collisionMaterial;if(s){s.geometry.dispose(),s.geometry=i,nn(s);return}const a=new ve(i,o);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,nn(a),t.set(e,a)}_getChunkGeometryMap(t){switch(t){case"liquid":return this._chunkLiquidGeometry;case"opaque":return this._chunkOpaqueGeometry;case"transparent":return this._chunkTransparentGeometry}}_getChunkBoundsMap(t){switch(t){case"liquid":return this._chunkLiquidBounds;case"opaque":return this._chunkOpaqueBounds;case"transparent":return this._chunkTransparentBounds}}_getBatchMap(t){switch(t){case"liquid":return this._liquidBatches;case"opaque":return this._opaqueBatches;case"transparent":return this._transparentBatches}}_getCollisionMeshMap(t){switch(t){case"opaque":return this._opaqueCollisionMeshes;case"transparent":return this._transparentCollisionMeshes;default:return}}_getBatchDimensions(t){switch(t){case"liquid":return GS;case"opaque":return Ke;case"transparent":return WS}}_getRenderMaterial(t){switch(t){case"liquid":return this._game.blockMaterialManager.liquidMaterial;case"opaque":return this._game.blockMaterialManager.opaqueMaterial;case"transparent":return this._game.blockMaterialManager.transparentMaterial}}_registerNormalBatch(t,e){const n=this._ensureParentBatch(this._getParentBatchKeyForBatchKey(t));switch(n.allChunkIdsDirty=!0,e){case"opaque":n.opaqueBatchKeys.add(t);break;case"transparent":n.transparentBatchKeys.add(t);break;case"liquid":n.liquidBatchKeys.add(t);break}}_unregisterNormalBatch(t,e){const n=this._getParentBatchKeyForBatchKey(t),i=this._parentBatches.get(n);if(i){switch(i.allChunkIdsDirty=!0,e){case"opaque":i.opaqueBatchKeys.delete(t);break;case"transparent":i.transparentBatchKeys.delete(t);break;case"liquid":i.liquidBatchKeys.delete(t);break}this._cleanupParentBatch(n,i)}}_registerLodChunk(t,e){const n=this._ensureParentBatch(t);n.lodChunkIds.add(e),n.allChunkIdsDirty=!0}_unregisterLodChunk(t,e){const n=this._parentBatches.get(t);n&&(n.lodChunkIds.delete(e),n.allChunkIdsDirty=!0)}_ensureParentBatch(t){let e=this._parentBatches.get(t);if(e)return e;const n=this._getBatchOriginFromKey(t),i={x:Ke.x*It,y:Ke.y*It,z:Ke.z*It};return e={allChunkIds:[],allChunkIdsDirty:!0,bounds:new ke(yi.set(n.x,n.y,n.z).clone(),yi.set(n.x+i.x,n.y+i.y,n.z+i.z).clone()),chunkModes:new Map,key:t,liquidBatchKeys:new Set,lodBuildChunkIds:[],lodChunkIds:new Set,opaqueBatchKeys:new Set,transparentBatchKeys:new Set,visibilityState:"hidden"},this._parentBatches.set(t,e),e}_cleanupParentBatch(t,e){const n=e.opaqueBatchKeys.size>0||e.transparentBatchKeys.size>0||e.liquidBatchKeys.size>0,i=e.lodChunkIds.size>0,s=e.lodBatch!==void 0;n||i||s||this._parentBatches.delete(t)}_rebuildLodBatch(t){const e=this._parentBatches.get(t);if(!e)return;const n=e.lodBuildChunkIds;n.length=0;for(const _ of e.lodChunkIds)this._chunkLodGeometry.has(_)&&this._chunkLodBounds.has(_)&&n.push(_);if(n.sort(),n.length===0){this._disposeLodBatch(e),this._cleanupParentBatch(t,e);return}let i=0,s=0;for(const _ of n){const p=this._chunkLodGeometry.get(_);i+=p.positions.length/tn,s+=p.indices.length}const o=new Float32Array(i*tn),a=new Float32Array(i*Gi),l=new Float32Array(i*Es),c=new Float32Array(i),h=i>65535?new Uint32Array(s):new Uint16Array(s);let u=0,d=0;for(let _=0;_<n.length;_++){const p=n[_],g=this._chunkLodGeometry.get(p),y=g.positions.length/tn;o.set(g.positions,u*tn),a.set(g.normals,u*Gi),l.set(g.colors,u*Es),c.fill(_,u,u+y);for(let S=0;S<g.indices.length;S++)h[d+S]=g.indices[S]+u;u+=y,d+=g.indices.length}const f=new Ue;if(f.setAttribute("position",new Jt(o,tn)),f.setAttribute("normal",new Jt(a,Gi)),f.setAttribute("color",new Jt(l,Es)),f.setAttribute(ai,new Jt(c,1)),f.setIndex(new Jt(h,1)),f.computeBoundingBox(),f.computeBoundingSphere(),e.lodBatch){e.lodBatch.geometry.dispose(),e.lodBatch.geometry=f,e.lodBatch.mesh.geometry=f,e.lodBatch.chunkIds=n,e.lodBatch.chunkVisibilityBits=new Uint32Array(Sn(n.length)*4),e.lodBatch.chunkVisibilityScratchBits=new Uint32Array(Sn(n.length)*4),e.lodBatch.chunkVisibilityMode=Mn,e.lodBatch.chunkVisibilityRevision++,nn(e.lodBatch.mesh);return}const m=new ve(f,this._lodMaterial);m.name=`lod_batch_${t}`,m.matrixAutoUpdate=!1,m.matrixWorldAutoUpdate=!1,m.frustumCulled=!1,m.onBeforeRender=(_,p,g,y,S)=>{if(S instanceof rf){const M=e.lodBatch;if(!M)return;S.bindChunkVisibility(M.key,M.chunkVisibilityBits,M.chunkVisibilityMode,M.chunkVisibilityRevision)&&(S.uniformsNeedUpdate=!0)}},nn(m),e.lodBatch={chunkIds:n,chunkVisibilityBits:new Uint32Array(Sn(n.length)*4),chunkVisibilityScratchBits:new Uint32Array(Sn(n.length)*4),chunkVisibilityMode:Mn,chunkVisibilityRevision:0,geometry:f,key:t,mesh:m,visible:!1}}_disposeLodBatch(t){const e=t.lodBatch;e&&(e.mesh.parent&&this._game.renderer.removeFromScene(e.mesh),e.geometry.dispose(),t.lodBatch=void 0)}_getBatchKeyForChunk(t,e){const n=rm.chunkIdToOriginCoordinate(t);return this._getCachedBatchKey(Math.floor(n.x/(e.x*It))*e.x*It,Math.floor(n.y/(e.y*It))*e.y*It,Math.floor(n.z/(e.z*It))*e.z*It)}_getParentBatchKeyForChunk(t){return this._getBatchKeyForChunk(t,Ke)}_getParentBatchKeyForBatchKey(t){const e=this._getBatchOriginFromKey(t);return this._getCachedBatchKey(Math.floor(e.x/(Ke.x*It))*Ke.x*It,Math.floor(e.y/(Ke.y*It))*Ke.y*It,Math.floor(e.z/(Ke.z*It))*Ke.z*It)}_getCachedBatchKey(t,e,n){let i=this._batchKeyCache.get(t);i||(i=new Map,this._batchKeyCache.set(t,i));let s=i.get(e);s||(s=new Map,i.set(e,s));let o=s.get(n);return o||(o=`${t},${e},${n}`,s.set(n,o)),o}_getBatchOriginFromKey(t){const e=t.indexOf(","),n=t.indexOf(",",e+1);return{x:Number(t.slice(0,e)),y:Number(t.slice(e+1,n)),z:Number(t.slice(n+1))}}_roundCapacity(t){let e=1;for(;e<t;)e*=XS;return e}_roundIndexCapacity(t){const e=this._roundCapacity(t),n=e%3;return n===0?e:e+(3-n)}}function $o(r){return r||null}function ZS(r,t){return{chunkId:r,liquidBounds:t==null?void 0:t.liquidBounds,liquidGeometry:$o((t==null?void 0:t.liquidGeometry)??null),lodBounds:t==null?void 0:t.lodBounds,lodGeometry:$o((t==null?void 0:t.lodGeometry)??null),opaqueBounds:t==null?void 0:t.opaqueBounds,opaqueGeometry:$o((t==null?void 0:t.opaqueGeometry)??null),transparentBounds:t==null?void 0:t.transparentBounds,transparentGeometry:$o((t==null?void 0:t.transparentGeometry)??null)}}class jS{constructor(t){T(this,"host");T(this,"manager");this.host=t,this.manager=new KS(t)}get rendererHost(){return this.host.renderer}get batchMeshCount(){return this.manager.batchMeshCount}setChunkGeometry(t,e){const n=ZS(t,e);if(!e){this.manager.removeChunkGeometry(t);return}this.manager.updateChunkGeometry(n.chunkId,n.liquidGeometry??void 0,n.liquidBounds,n.lodGeometry??void 0,n.lodBounds,n.opaqueGeometry??void 0,n.opaqueBounds,n.transparentGeometry??void 0,n.transparentBounds)}clear(){this.manager.clear()}flush(){}collectPreOcclusionChunkModes(t,e,n,i,s){return this.manager.collectPreOcclusionChunkModes(t,e,n,i,s)}applyBatchVisibility(t,e,n,i,s){this.manager.applyBatchVisibility(t,e,n,i,s)}}const JS=16,QS=2,Yi="worldEditorInstanceLightLevel",Ki="worldEditorInstanceSkyLight",om=new ut(1,1,1),Sr=new Bt,Ul=new ke,of=new Gt,Nl=new Be,br=new WeakMap;class tb extends Vh{constructor(t,e,n){super(t,e,n),this._setup()}_setup(){this.matrixAutoUpdate=!1,this.matrixWorldAutoUpdate=!1,this.frustumCulled=!0,nn(this),this.instanceMatrix.setUsage(cn);const t=new en(new Float32Array(this.count),1);t.setUsage(cn),this.geometry.setAttribute(Yi,t);const e=new en(new Float32Array(this.count),1);e.setUsage(cn),this.geometry.setAttribute(Ki,e),this.setColorAt(0,om),this.instanceColor.setUsage(cn)}dispose(){return this.geometry.dispose(),this}}class eb{constructor(t){T(this,"host");T(this,"keyToModelUri",new Map);T(this,"keyToTintColor",new Map);T(this,"uriToEntry",new Map);this.host=t}async replaceAll(t){this.clear();const e=new Set;for(const n of t)await this.upsertEntity(n)||e.add(n.key);return e}async upsertEntity(t){this.removeEntity(t.key);let e=this.uriToEntry.get(t.modelUri);if(e||(e=this.createEntry(t.modelUri),this.uriToEntry.set(t.modelUri,e)),e.gltfRoot===null&&(e.gltfRoot=await e.gltfRootPromise),!e.gltfRoot)return e.entities.size===0&&this.uriToEntry.delete(e.modelUri),!1;const n=e.entities.size;return e.entities.add(t.key),e.entityToInstanceIndex.set(t.key,n),e.instanceIndexToEntityKey.set(n,t.key),e.entityToChunkId.set(t.key,t.chunkId),e.entityToLightLevel.set(t.key,t.lightLevel),e.entityToSkyLight.set(t.key,t.skyLight),this.keyToModelUri.set(t.key,t.modelUri),this.keyToTintColor.set(t.key,t.tintColor?t.tintColor.clone():null),e.gltfRoot.traverse(i=>{if(!(i instanceof ve))return;let s=e.sourceToInstancedMesh.get(i);if(!s||n>=s.instanceMatrix.count){const h=s?s.instanceMatrix.count*QS:JS,u=s?s.material:this.host.createRenderMaterial(i.material),d=new tb(i.geometry.clone(),u,h);if(d.castShadow=i.castShadow,d.receiveShadow=i.receiveShadow,s){d.instanceMatrix.array.set(s.instanceMatrix.array);const f=s.geometry.getAttribute(Yi),m=d.geometry.getAttribute(Yi);for(let y=0;y<f.count;y++)m.setX(y,f.getX(y));const _=s.geometry.getAttribute(Ki),p=d.geometry.getAttribute(Ki);for(let y=0;y<_.count;y++)p.setX(y,_.getX(y));if(s.instanceColor&&d.instanceColor)for(let y=0;y<s.instanceColor.count;y++)d.instanceColor.setXYZ(y,s.instanceColor.getX(y),s.instanceColor.getY(y),s.instanceColor.getZ(y));s.boundingSphere&&(d.boundingSphere=s.boundingSphere.clone());const g=br.get(s);g&&br.set(d,g.clone()),this.host.removeFromScene(s),s.dispose(),e.sourceToInstancedMesh.delete(i)}this.host.addToScene(d),e.sourceToInstancedMesh.set(i,d),s=d}s.setMatrixAt(n,Sr.copy(t.worldMatrix).multiply(i.matrixWorld)),s.instanceMatrix.needsUpdate=!0;const o=t.tintColor??om;s.setColorAt(n,o),s.instanceColor&&(s.instanceColor.needsUpdate=!0);const a=s.geometry.getAttribute(Yi);a.setX(n,t.lightLevel),a.needsUpdate=!0;const l=s.geometry.getAttribute(Ki);l.setX(n,t.skyLight),l.needsUpdate=!0,s.count=n+1,s.geometry.boundingSphere===null&&s.geometry.computeBoundingSphere(),s.geometry.boundingBox===null&&s.geometry.computeBoundingBox(),Nl.copy(s.geometry.boundingSphere).applyMatrix4(Sr.copy(t.worldMatrix).multiply(i.matrixWorld)),Ul.copy(s.geometry.boundingBox).applyMatrix4(Sr.copy(t.worldMatrix).multiply(i.matrixWorld)),s.boundingSphere===null?s.boundingSphere=Nl.clone():s.boundingSphere.union(Nl);const c=br.get(s);c?c.union(Ul):br.set(s,Ul.clone())}),!0}removeEntity(t){const e=this.keyToModelUri.get(t);if(!e)return;const n=this.uriToEntry.get(e);if(!n||!n.entities.has(t)){this.keyToModelUri.delete(t),this.keyToTintColor.delete(t);return}const i=n.entityToInstanceIndex.get(t);if(i===void 0)return;const s=n.entities.size-1,o=n.instanceIndexToEntityKey.get(s);if(o&&o!==t){n.entityToInstanceIndex.set(o,i),n.instanceIndexToEntityKey.set(i,o),n.entityToChunkId.set(o,n.entityToChunkId.get(o)),n.entityToLightLevel.set(o,n.entityToLightLevel.get(o)),n.entityToSkyLight.set(o,n.entityToSkyLight.get(o));for(const l of n.sourceToInstancedMesh.values()){l.getMatrixAt(s,Sr),l.setMatrixAt(i,Sr);const c=l.geometry.getAttribute(Yi);c.setX(i,c.getX(s)),c.needsUpdate=!0;const h=l.geometry.getAttribute(Ki);h.setX(i,h.getX(s)),h.needsUpdate=!0,l.instanceColor&&(l.instanceColor.setXYZ(i,l.instanceColor.getX(s),l.instanceColor.getY(s),l.instanceColor.getZ(s)),l.instanceColor.needsUpdate=!0),l.instanceMatrix.needsUpdate=!0}const a=this.keyToTintColor.get(o);this.keyToTintColor.set(o,a?a.clone():null)}for(const a of n.sourceToInstancedMesh.values())a.count=s;if(n.entities.delete(t),n.entityToInstanceIndex.delete(t),n.entityToChunkId.delete(t),n.entityToLightLevel.delete(t),n.entityToSkyLight.delete(t),n.instanceIndexToEntityKey.delete(s),this.keyToModelUri.delete(t),this.keyToTintColor.delete(t),n.entities.size===0){for(const a of n.sourceToInstancedMesh.values())this.host.removeFromScene(a),a.dispose();this.uriToEntry.delete(n.modelUri)}}updateLighting(t,e){for(const n of this.uriToEntry.values()){for(const i of n.entities){if(e){const a=n.entityToChunkId.get(i);if(a!==void 0&&!e.has(a))continue}const s=t(i);if(!s)continue;n.entityToChunkId.set(i,s.chunkId),n.entityToLightLevel.set(i,s.lightLevel),n.entityToSkyLight.set(i,s.skyLight);const o=n.entityToInstanceIndex.get(i);if(o!==void 0)for(const a of n.sourceToInstancedMesh.values())a.geometry.getAttribute(Yi).setX(o,s.lightLevel),a.geometry.getAttribute(Ki).setX(o,s.skyLight)}for(const i of n.sourceToInstancedMesh.values())i.geometry.getAttribute(Yi).needsUpdate=!0,i.geometry.getAttribute(Ki).needsUpdate=!0}}updateScenePresence(t,e,n){for(const i of this.uriToEntry.values())for(const s of i.sourceToInstancedMesh.values()){const o=br.get(s),a=!o||this.distanceToBoundsXZSquared(o,t)<=e,l=!!s.boundingSphere&&n.intersectsSphere(s.boundingSphere),c=a&&l,h=s.parent!==null;c&&!h?this.host.addToScene(s):!c&&h&&this.host.removeFromScene(s)}}clear(){for(const t of this.uriToEntry.values())for(const e of t.sourceToInstancedMesh.values())this.host.removeFromScene(e),e.dispose();this.uriToEntry.clear(),this.keyToModelUri.clear(),this.keyToTintColor.clear()}createEntry(t){return{entities:new Set,instanceIndexToEntityKey:new Map,entityToChunkId:new Map,entityToInstanceIndex:new Map,entityToLightLevel:new Map,entityToSkyLight:new Map,gltfRoot:null,gltfRootPromise:this.host.loadEntityModelTemplate(t),modelUri:t,sourceToInstancedMesh:new Map}}distanceToBoundsXZSquared(t,e){return of.set(Math.max(t.min.x,Math.min(e.x,t.max.x)),Math.max(t.min.z,Math.min(e.y,t.max.z))),e.distanceToSquared(of)}}const Qc=256,Ji=0,af=1,th=.05,nb=-.1,ib=1,Wi="worldEditorTime",Yo="worldEditorTextureAtlas",eh="worldEditorFogColor",nh="worldEditorFogEnabled",ih="worldEditorFogFar",sh="worldEditorFogNear",Pn="worldEditorAmbientLightColor",Fl="worldEditorAmbientLightIntensity",Ea="uChunkVisibleBits",Ta="uChunkVisibilityMode",ns="chunkIndex",Kh=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`,sb={color:()=>new ut(16777215),enabled:()=>!1,far:()=>0,near:()=>0};function Mi(r){return Math.max(Math.ceil(r/128),1)}function Zh(r){return{[Ea]:{value:new Uint32Array(Mi(r)*4)},[Ta]:{value:Ji}}}function jh(r){const t=Mi(r);return`
    uniform uint ${Ta};
    uniform uvec4 ${Ea}[${t}];
    attribute float ${ns};

    bool isChunkVisible(uint chunkIndexValue) {
      if (${Ta} == uint(${Ji})) {
        return true;
      }

      uint wordIndex = chunkIndexValue >> 5u;
      uvec4 packedWords = ${Ea}[int(wordIndex >> 2u)];
      uint packedWord = packedWords[int(wordIndex & 3u)];
      uint bitIndex = chunkIndexValue & 31u;
      return ((packedWord >> bitIndex) & 1u) != 0u;
    }
  `}function Jh(r){return{[eh]:{get value(){return r.color()}},[nh]:{get value(){return r.enabled()}},[ih]:{get value(){return r.far()}},[sh]:{get value(){return r.near()}}}}function Qh(){return`
    uniform vec3 ${eh};
    uniform bool ${nh};
    uniform float ${ih};
    uniform float ${sh};

    vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
      if (!${nh}) {
        return color;
      }

      float fogFactor = smoothstep(${sh}, ${ih}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${eh}, fogFactor);
    }
  `}class tu extends Oe{constructor(){super(...arguments);T(this,"boundChunkVisibilityBits",null);T(this,"boundChunkVisibilityMode",-1);T(this,"boundChunkVisibilityRevision",-1)}bindChunkVisibility(e,n,i,s){const o=typeof e=="string"?n:e,a=typeof e=="string"?i:n,l=typeof e=="string"?s:i;return this.boundChunkVisibilityBits===o&&this.boundChunkVisibilityMode===a&&this.boundChunkVisibilityRevision===l?!1:(this.uniforms[Ea].value=o,this.uniforms[Ta].value=a,this.boundChunkVisibilityBits=o,this.boundChunkVisibilityMode=a,this.boundChunkVisibilityRevision=l,this.uniformsNeedUpdate=!0,!0)}}class lf extends tu{constructor(e,n,i){const s=Vn.clone(pe.basic.uniforms);Object.assign(s,Jh(n),Zh(i));const o=pe.basic.vertexShader.replace("void main() {",`
        ${jh(i)}
        attribute float lightLevel;
        varying float vLightLevel;
        varying vec3 vWorldPos;
        void main() {
          uint chunkIndexValue = uint(${ns} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          vLightLevel = lightLevel;
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),a=pe.basic.fragmentShader.replace("void main() {",`
          ${Kh}
          uniform vec3 ${Pn};
          uniform float ${Fl};
          varying float vLightLevel;
          varying vec3 vWorldPos;
          ${Qh()}
          void main() {
        `).replace("#include <opaque_fragment>",`
          vec3 ambientLight = ${Pn} * ${Fl};
          vec3 blockLight = ${Pn} * vLightLevel * float(${ib});
          outgoingLight *= max(ambientLight, blockLight);
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:s,vertexShader:o,fragmentShader:a,side:rn,transparent:e,alphaTest:e?th:0,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0,glslVersion:Ei});T(this,"colorValue",new ut(16777215));T(this,"ambientColor",new ut(16777215));T(this,"transparentMode");T(this,"atlasTexture",null);T(this,"alphaTestValue",0);T(this,"ambientIntensity",1);this.transparentMode=e,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_MAP:"",MAP_UV:"uv",...e?{USE_ALPHATEST:""}:{}},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],[ns]:[0],lightLevel:[0]},this.bindUniforms()}set textureAtlas(e){this.atlasTexture=e}setAmbientIntensity(e){this.ambientIntensity=e}setAmbientColor(e){this.ambientColor.copy(e)}copy(e){return super.copy(e),this.colorValue.copy(e.colorValue),this.ambientColor.copy(e.ambientColor),this.atlasTexture=e.atlasTexture,this.alphaTestValue=e.alphaTestValue,this.bindUniforms(),this}bindUniforms(){const e=this;this.uniforms.diffuse={value:this.colorValue},this.uniforms.opacity={get value(){return e.opacity}},this.uniforms.map={get value(){return e.atlasTexture}},this.uniforms.alphaTest={get value(){return e.transparentMode?th:e.alphaTestValue}},this.uniforms[Pn]={value:this.ambientColor},this.uniforms[Fl]={get value(){return e.ambientIntensity}}}}class rb extends tu{constructor(e,n){super({uniforms:Vn.merge([Jh(e),Zh(n),{[Wi]:{value:0},[Yo]:{value:null},[Pn]:{value:new ut(1,1,1)}}]),vertexShader:`
        uniform float ${Wi};
        ${jh(n)}

        attribute vec4 foamLevel;
        attribute vec4 foamLevelDiag;
        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;

        void main() {
          uint chunkIndexValue = uint(${ns} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          vNormal = normalize(normal);
          vUv = uv;
          vFoamLevel = foamLevel;
          vFoamLevelDiag = foamLevelDiag;

          vec3 pos = position;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vViewVector = normalize(cameraPosition - worldPos.xyz);

          float slowTime = ${Wi} * 0.5;
          float yOffset = ${nb};
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
        ${Kh}
        uniform float ${Wi};
        uniform sampler2D ${Yo};
        uniform vec3 ${Pn};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${Qh()}

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
          vec4 texColor = texture(${Yo}, vUv);
          if (texColor.a < ${th.toFixed(1)}) {
            discard;
          }

          float fresnel = pow(1.0 - dot(vNormal, vViewVector), 4.0);
          float waveLighting = sin(dot(vWorldPos.xz, vec2(2.0)) + ${Wi} * 0.5) * 0.1;
          vec3 finalColor = texColor.rgb * ${Pn};

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
              float foamTime = ${Wi} * 0.3;
              vec2 foamUV = vWorldPos.xz * 6.0;

              float foamNoise = noise(foamUV + vec2(foamTime, 0.0)) * 0.5 +
                                noise(foamUV * 2.0 + vec2(0.0, foamTime * 0.5)) * 0.3 +
                                noise(foamUV * 4.0 + vec2(foamTime * 0.3, foamTime * 0.2)) * 0.2;
              float foamPattern = smoothstep(0.3, 0.5, foamNoise);
              float finalFoam = mix(foamIntensity, foamPattern * foamIntensity, smoothstep(0.0, 0.05, minDist));

              vec3 foamColor = vec3(1.0) * ${Pn};
              finalColor = mix(finalColor, foamColor, finalFoam * 0.95);
            }
          }

          gl_FragColor = vec4(finalColor, 0.8);
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        }
      `,forceSinglePass:!0,side:Ge,transparent:!0,fog:!1,lights:!1,toneMapped:!0,vertexColors:!0,glslVersion:Ei});T(this,"ambientColor",new ut(16777215));T(this,"ambientIntensity",1);this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],[ns]:[0],foamLevel:[0,0,0,0],foamLevelDiag:[0,0,0,0],uv:[0,0]}}set textureAtlas(e){this.uniforms[Yo].value=e}setAmbientIntensity(e){this.ambientIntensity=e,this.uniforms[Pn].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}setAmbientColor(e){this.ambientColor.copy(e),this.uniforms[Pn].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}update(e){this.uniforms[Wi].value+=.0075}}class ob extends tu{constructor(t,e){super({uniforms:Vn.merge([Vn.clone(pe.basic.uniforms),Jh(t),Zh(e)]),vertexShader:pe.basic.vertexShader.replace("void main() {",`
          ${jh(e)}
          varying vec3 vWorldPos;
          void main() {
            uint chunkIndexValue = uint(${ns} + 0.5);
            if (!isChunkVisible(chunkIndexValue)) {
              gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
              return;
            }
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        `),fragmentShader:pe.basic.fragmentShader.replace("void main() {",`
            ${Kh}
            varying vec3 vWorldPos;
            ${Qh()}
            void main() {
          `).replace("#include <fog_fragment>",`
            gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
          `),side:Ge,vertexColors:!0,fog:!1,lights:!1,toneMapped:!0,clipping:!0,glslVersion:Ei}),this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],[ns]:[0]}}setAmbientIntensity(t){}setAmbientColor(t){}}function cf(r,t,e=sb,n=Qc){switch(r){case"lod":return new ob(e,n);case"opaque":{const i=new lf(!1,e,n);return i.textureAtlas=t,i}case"transparent":{const i=new lf(!0,e,n);return i.depthWrite=!0,i.textureAtlas=t,i}case"liquid":{const i=new rb(e,n);return i.depthWrite=!0,i.textureAtlas=t,i}}}const ab={x:2,y:2,z:2},lb={x:2,y:2,z:2},Fe={x:8,y:4,z:8},cb=2,Hr=new L,am=new L,hf=new Float32Array(0);class hb{constructor(t){T(this,"parent");T(this,"atlas",null);T(this,"ambientIntensity",1);T(this,"ambientColor",new ut(16777215));T(this,"fogProvider",null);T(this,"chunkLiquidBounds",new Map);T(this,"chunkLodBounds",new Map);T(this,"chunkOpaqueBounds",new Map);T(this,"chunkTransparentBounds",new Map);T(this,"parentBatches",new Map);T(this,"scratchChunkIds",new Set);T(this,"scratchChunkModes",new Map);T(this,"states",{liquid:Ko(),lod:Ko(),opaque:Ko(),transparent:Ko()});this.parent=t}get batchMeshCount(){let t=0;for(const e of this.parentBatches.values())e.lodBatch&&t++;return this.states.liquid.batches.size+t+this.states.opaque.batches.size+this.states.transparent.batches.size}setAtlas(t){if(this.atlas!==t){if(this.atlas=t,!t){this.disposeBatchMeshes();return}for(const e of[this.states.opaque,this.states.transparent,this.states.liquid,this.states.lod])for(const n of e.batchChunkIds.keys())e.dirtyBatchIds.add(n);for(const e of this.parentBatches.values())e.lodChunkIds.size>0&&this.states.lod.dirtyBatchIds.add(e.key)}}clear(){this.disposeBatchMeshes();for(const t of[this.states.opaque,this.states.transparent,this.states.liquid,this.states.lod])t.batchChunkIds.clear(),t.chunkGeometries.clear(),t.dirtyBatchIds.clear(),t.dirtyChunkIdsByBatch.clear();this.chunkLiquidBounds.clear(),this.chunkLodBounds.clear(),this.chunkOpaqueBounds.clear(),this.chunkTransparentBounds.clear(),this.parentBatches.clear(),this.scratchChunkIds.clear(),this.scratchChunkModes.clear()}setChunkGeometry(t,e){this.updateLodGeometry(t,(e==null?void 0:e.lodGeometry)??null,e==null?void 0:e.lodBounds),this.updateKindGeometry("opaque",t,(e==null?void 0:e.opaqueGeometry)??null,e==null?void 0:e.opaqueBounds),this.updateKindGeometry("transparent",t,(e==null?void 0:e.transparentGeometry)??null,e==null?void 0:e.transparentBounds),this.updateKindGeometry("liquid",t,(e==null?void 0:e.liquidGeometry)??null,e==null?void 0:e.liquidBounds)}flush(){this.atlas&&(this.flushKind("opaque"),this.flushKind("transparent"),this.flushKind("liquid"),this.flushLodBatches())}update(t){for(const e of this.states.liquid.batches.values())"update"in e.material&&e.material.update(t)}setAmbientIntensity(t){this.ambientIntensity=t;for(const e of Object.values(this.states))for(const n of e.batches.values())n.material.setAmbientIntensity(t)}setAmbientColor(t){this.ambientColor.copy(t);for(const e of Object.values(this.states))for(const n of e.batches.values())n.material.setAmbientColor(this.ambientColor)}setFogProvider(t){if(this.fogProvider=t,this.atlas){const e=this.atlas;this.atlas=null,this.setAtlas(e)}}applyViewDistanceVisibility(t,e,n,i,s){for(const o of this.parentBatches.values())this.applyParentBatchVisibility(o,t,e,n,i,s)}collectPreOcclusionChunkModes(t,e,n,i,s){s.clear();for(const o of this.parentBatches.values())if(df(o.bounds,t,n)!==-1&&pf(o.bounds,i)!==-1)for(const a of this.getParentBatchChunkIds(o)){const l=this.getChunkVisibilityBounds(a);if(!l||ff(l,t,n)===-1||mf(l,i)===-1)continue;const c=oh(l,t);s.set(a,c>e&&o.lodChunkIds.has(a)?"lod":"normal")}return s}dispose(){this.clear(),this.atlas=null}updateKindGeometry(t,e,n,i){const s=this.states[t],o=this.getBatchId(t,e),a=s.batchChunkIds.get(o)??new Set,l=this.getParentBatchIdForChunk(e),c=s.batchChunkIds.has(o),h=s.chunkGeometries.has(e);n?(s.chunkGeometries.set(e,n),a.add(e),s.batchChunkIds.set(o,a),i?this.getChunkBoundsMap(t).set(e,i):this.getChunkBoundsMap(t).delete(e)):(s.chunkGeometries.delete(e),this.getChunkBoundsMap(t).delete(e),a.delete(e)&&a.size===0&&s.batchChunkIds.delete(o));const u=s.batchChunkIds.has(o);if(t==="lod"?n&&i?this.registerLodChunk(l,e):h&&this.unregisterLodChunk(l,e):!c&&u?this.registerNormalBatch(o,t):c&&!u?this.unregisterNormalBatch(o,t):u&&this.markParentBatchChunkIdsDirty(l),h!==!!n){s.dirtyBatchIds.add(o),s.dirtyChunkIdsByBatch.delete(o);return}const f=s.dirtyChunkIdsByBatch.get(o)??new Set;f.add(e),s.dirtyChunkIdsByBatch.set(o,f),s.dirtyBatchIds.add(o)}updateLodGeometry(t,e,n){const i=this.states.lod,s=this.getParentBatchIdForChunk(t),o=i.chunkGeometries.has(t);e&&n?(i.chunkGeometries.set(t,e),this.chunkLodBounds.set(t,n),this.registerLodChunk(s,t)):(i.chunkGeometries.delete(t),this.chunkLodBounds.delete(t),o&&this.unregisterLodChunk(s,t)),this.states.lod.dirtyBatchIds.add(s)}flushKind(t){const e=this.states[t],n=[...e.dirtyBatchIds];e.dirtyBatchIds.clear();for(const i of n){const s=e.dirtyChunkIdsByBatch.get(i);(!s||s.size===0||!this.updateBatchChunks(t,i,s))&&this.rebuildBatch(t,i),e.dirtyChunkIdsByBatch.delete(i)}}flushLodBatches(){const t=[...this.states.lod.dirtyBatchIds];this.states.lod.dirtyBatchIds.clear();for(const e of t)this.rebuildLodBatch(e)}updateBatchChunks(t,e,n){const i=this.states[t],s=i.batches.get(e),o=i.batchMetadata.get(e);if(!s||!o)return!1;for(const a of n){const l=i.chunkGeometries.get(a),c=o.allocations.get(a);if(!l||!c)return!1;const h=l.positions.length/3,u=l.indices.length;if(h>c.vertexCapacity||u>c.indexCapacity)return!1;this.writeChunkGeometryIntoMergedGeometry(t,s.geometry,c,l),c.vertexCount=h,c.indexCount=u}return mb(s.geometry,o.allocations),Ol(s.geometry,t,o.chunkIds,this.getChunkBoundsMap(t),e),nn(s),!0}rebuildBatch(t,e){var Rt,ee;const n=this.states[t],i=n.batches.get(e)??null,s=n.batchMetadata.get(e)??null,o=n.batchChunkIds.get(e);if(!o||o.size===0||!this.atlas){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(e)),n.batchMetadata.delete(e);return}const a=[...o].sort(uf);let l=0,c=0,h=0,u=0,d=0,f=0,m=0,_=0,p=0,g=0;for(const Ft of a){const q=n.chunkGeometries.get(Ft);if(!q)continue;const j=s==null?void 0:s.allocations.get(Ft),it=q.positions.length/3,Pt=fa(it,(j==null?void 0:j.vertexCapacity)??0),At=kl(q.indices.length,(j==null?void 0:j.indexCapacity)??0);l+=q.positions.length,c+=q.normals.length,h+=q.uvs.length,u+=q.colors.length,d+=Pt,f+=q.lightLevels.length,m+=((Rt=q.foamLevels)==null?void 0:Rt.length)??0,_+=((ee=q.foamLevelsDiag)==null?void 0:ee.length)??0,p+=Pt,g+=At}if(g===0){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(e)),n.batchMetadata.delete(e);return}const y=Math.max(fa(p,(s==null?void 0:s.vertexCapacity)??0),1),S=Math.max(kl(g,(s==null?void 0:s.indexCapacity)??0),1),M=new Map,A=new Float32Array(y*3),C=new Float32Array(y*3),w=new Float32Array(y*2),x=new Float32Array(y*3),b=new Float32Array(y),V=new Float32Array(y),I=t==="liquid"?new Float32Array(y*4):null,k=t==="liquid"?new Float32Array(y*4):null,O=new Uint32Array(S);let N=0,F=0;for(let Ft=0;Ft<a.length;Ft++){const q=a[Ft],j=n.chunkGeometries.get(q);if(!j)continue;const it=j.positions.length/3,Pt=s==null?void 0:s.allocations.get(q),At=fa(it,(Pt==null?void 0:Pt.vertexCapacity)??0),Dt=kl(j.indices.length,(Pt==null?void 0:Pt.indexCapacity)??0),xe={chunkIndex:Ft,indexCapacity:Dt,indexCount:j.indices.length,indexOffset:N,vertexCapacity:At,vertexCount:it,vertexOffset:F};M.set(q,xe),A.set(j.positions,F*3),C.set(j.normals,F*3),w.set(j.uvs,F*2),x.set(j.colors,F*3),b.fill(Ft,F,F+At),V.set(j.lightLevels,F),I&&j.foamLevels&&I.set(j.foamLevels,F*4),k&&j.foamLevelsDiag&&k.set(j.foamLevelsDiag,F*4);for(let kt=0;kt<j.indices.length;kt++)O[N+kt]=j.indices[kt]+F;for(let kt=j.indices.length;kt<Dt;kt++)O[N+kt]=F;N+=Dt,F+=At}const H=i??this.createBatchMesh(t),z=H.geometry;this.applyMergedGeometry(z,{positions:A,normals:C,uvs:w,colors:x,chunkIndices:b,lightLevels:V,foamLevels:I,foamLevelsDiag:k,indices:O},{positionCount:l,normalCount:c,uvCount:h,colorCount:u,chunkIndexCount:d,lightLevelCount:f,foamLevelCount:m,foamLevelDiagCount:_,indexCount:ah(M)}),z.setDrawRange(0,ah(M)),Ol(z,t,a,this.getChunkBoundsMap(t),e),nn(H);const tt=(s==null?void 0:s.chunkVisibilityBits)??new Uint32Array(Mi(Qc)*4),J=(s==null?void 0:s.chunkVisibilityScratchBits)??new Uint32Array(Mi(Qc)*4),st=(s==null?void 0:s.chunkVisibilityMode)??Ji;let ct=(s==null?void 0:s.chunkVisibilityRevision)??0,dt=!s||s.chunkIds.length!==a.length;dt&&(tt.fill(0),J.fill(0),ct++),H.material.setAmbientColor(this.ambientColor),H.material.setAmbientIntensity(this.ambientIntensity),n.batches.set(e,H),n.batchMetadata.set(e,{allocations:M,chunkIds:a,chunkVisibilityBits:tt,chunkVisibilityMode:st,chunkVisibilityRevision:ct,chunkVisibilityScratchBits:J,visibilityDirty:dt,indexCapacity:S,vertexCapacity:y}),H.material.bindChunkVisibility(tt,st,ct,a.length),i||this.parent.add(H)}createBatchMesh(t){const e=new Ue,n=cf(t,this.atlas.texture,this.fogProvider??void 0);n.setAmbientColor(this.ambientColor),n.setAmbientIntensity(this.ambientIntensity);const i=new ve(e,n);return i.frustumCulled=!1,i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.renderOrder=t==="lod"?-1:t==="opaque"?0:t==="transparent"?1:2,i.updateMatrix(),nn(i),i}rebuildLodBatch(t){const e=this.parentBatches.get(t);if(!e||!this.atlas)return;const n=e.lodBuildChunkIds;n.length=0;for(const g of e.lodChunkIds)this.states.lod.chunkGeometries.has(g)&&this.chunkLodBounds.has(g)&&n.push(g);if(n.sort(uf),n.length===0){this.disposeLodBatch(e),this.cleanupParentBatch(t,e);return}let i=0,s=0;for(const g of n){const y=this.states.lod.chunkGeometries.get(g);i+=y.positions.length/3,s+=y.indices.length}const o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i*3),c=new Float32Array(i),h=new Uint32Array(s);let u=0,d=0;for(let g=0;g<n.length;g++){const y=n[g],S=this.states.lod.chunkGeometries.get(y),M=S.positions.length/3;o.set(S.positions,u*3),a.set(S.normals,u*3),l.set(S.colors,u*3),c.fill(g,u,u+M);for(let A=0;A<S.indices.length;A++)h[d+A]=S.indices[A]+u;u+=M,d+=S.indices.length}const f=new Ue;f.setAttribute("position",new Jt(o,3)),f.setAttribute("normal",new Jt(a,3)),f.setAttribute("color",new Jt(l,3)),f.setAttribute("chunkIndex",new Jt(c,1)),f.setIndex(new Jt(h,1)),Ol(f,"lod",n,this.chunkLodBounds,t);const m=e.lodBatch;if(m){m.geometry.dispose(),m.geometry=f,m.mesh.geometry=f,m.chunkIds=[...n],m.chunkVisibilityBits=new Uint32Array(Mi(n.length)*4),m.chunkVisibilityScratchBits=new Uint32Array(Mi(n.length)*4),m.chunkVisibilityMode=Ji,m.chunkVisibilityRevision++,m.visibilityDirty=!0,m.mesh.material.setAmbientColor(this.ambientColor),m.mesh.material.setAmbientIntensity(this.ambientIntensity),nn(m.mesh);return}const _=cf("lod",this.atlas.texture,this.fogProvider??void 0);_.setAmbientColor(this.ambientColor),_.setAmbientIntensity(this.ambientIntensity);const p=new ve(f,_);p.frustumCulled=!1,p.matrixAutoUpdate=!1,p.matrixWorldAutoUpdate=!1,p.renderOrder=-1,p.updateMatrix(),nn(p),this.parent.add(p),e.lodBatch={chunkIds:[...n],geometry:f,mesh:p,chunkVisibilityBits:new Uint32Array(Mi(n.length)*4),chunkVisibilityMode:Ji,chunkVisibilityRevision:0,chunkVisibilityScratchBits:new Uint32Array(Mi(n.length)*4),visibilityDirty:!0}}disposeLodBatch(t){const e=t.lodBatch;e&&(this.parent.remove(e.mesh),e.geometry.dispose(),e.mesh.material.dispose(),t.lodBatch=void 0)}applyMergedGeometry(t,e,n){vi(t,"position",e.positions,3,n.positionCount/3),vi(t,"normal",e.normals,3,n.normalCount/3),vi(t,"uv",e.uvs,2,n.uvCount/2),vi(t,"color",e.colors,3,n.colorCount/3),vi(t,"chunkIndex",e.chunkIndices,1,n.chunkIndexCount),vi(t,"lightLevel",e.lightLevels,1,n.lightLevelCount),e.foamLevels?vi(t,"foamLevel",e.foamLevels,4,n.foamLevelCount/4):t.deleteAttribute("foamLevel"),e.foamLevelsDiag?vi(t,"foamLevelDiag",e.foamLevelsDiag,4,n.foamLevelDiagCount/4):t.deleteAttribute("foamLevelDiag"),db(t,e.indices,n.indexCount)}writeChunkGeometryIntoMergedGeometry(t,e,n,i){Xi(e,"position",i.positions,n.vertexOffset*3,n.vertexCapacity*3),Xi(e,"normal",i.normals,n.vertexOffset*3,n.vertexCapacity*3),Xi(e,"uv",i.uvs,n.vertexOffset*2,n.vertexCapacity*2),Xi(e,"color",i.colors,n.vertexOffset*3,n.vertexCapacity*3),fb(e,"chunkIndex",n.chunkIndex,n.vertexOffset,n.vertexCapacity),Xi(e,"lightLevel",i.lightLevels,n.vertexOffset,n.vertexCapacity),t==="liquid"&&(Xi(e,"foamLevel",i.foamLevels??hf,n.vertexOffset*4,n.vertexCapacity*4),Xi(e,"foamLevelDiag",i.foamLevelsDiag??hf,n.vertexOffset*4,n.vertexCapacity*4)),pb(e,i.indices,n.indexOffset,n.indexCapacity,n.vertexOffset)}getBatchId(t,e){const n=Zt.chunkIdToOriginCoordinate(e),i=rh(t),s={x:i.x*It,y:i.y*It,z:i.z*It};return[Math.floor(n.x/s.x)*s.x,Math.floor(n.y/s.y)*s.y,Math.floor(n.z/s.z)*s.z].join(",")}getParentBatchIdForChunk(t){const e=Zt.chunkIdToOriginCoordinate(t);return[Math.floor(e.x/(Fe.x*It))*Fe.x*It,Math.floor(e.y/(Fe.y*It))*Fe.y*It,Math.floor(e.z/(Fe.z*It))*Fe.z*It].join(",")}getChunkBoundsMap(t){switch(t){case"liquid":return this.chunkLiquidBounds;case"lod":return this.chunkLodBounds;case"opaque":return this.chunkOpaqueBounds;case"transparent":return this.chunkTransparentBounds}}getChunkVisibilityBounds(t){return this.chunkOpaqueBounds.get(t)??this.chunkTransparentBounds.get(t)??this.chunkLiquidBounds.get(t)??this.chunkLodBounds.get(t)}markParentBatchChunkIdsDirty(t){const e=this.parentBatches.get(t);e&&(e.allChunkIdsDirty=!0)}registerNormalBatch(t,e){const n=this.ensureParentBatch(this.getParentBatchIdForBatch(t));switch(n.allChunkIdsDirty=!0,e){case"opaque":n.opaqueBatchIds.add(t);break;case"transparent":n.transparentBatchIds.add(t);break;case"liquid":n.liquidBatchIds.add(t);break}}unregisterNormalBatch(t,e){const n=this.getParentBatchIdForBatch(t),i=this.parentBatches.get(n);if(i){switch(i.allChunkIdsDirty=!0,e){case"opaque":i.opaqueBatchIds.delete(t);break;case"transparent":i.transparentBatchIds.delete(t);break;case"liquid":i.liquidBatchIds.delete(t);break}this.cleanupParentBatch(n,i)}}registerLodChunk(t,e){const n=this.ensureParentBatch(t);n.lodChunkIds.add(e),n.allChunkIdsDirty=!0}unregisterLodChunk(t,e){const n=this.parentBatches.get(t);n&&(n.lodChunkIds.delete(e),n.allChunkIdsDirty=!0,this.cleanupParentBatch(t,n))}getParentBatchIdForBatch(t){const[e,n,i]=t.split(",").map(Number);return[Math.floor(e/(Fe.x*It))*Fe.x*It,Math.floor(n/(Fe.y*It))*Fe.y*It,Math.floor(i/(Fe.z*It))*Fe.z*It].join(",")}ensureParentBatch(t){const e=this.parentBatches.get(t);if(e)return e;const[n,i,s]=t.split(",").map(Number),o={allChunkIds:[],allChunkIdsDirty:!0,bounds:new ke(new L(n,i,s),new L(n+Fe.x*It,i+Fe.y*It,s+Fe.z*It)),chunkModes:new Map,key:t,liquidBatchIds:new Set,lodBuildChunkIds:[],lodChunkIds:new Set,opaqueBatchIds:new Set,transparentBatchIds:new Set,visibilityState:"hidden"};return this.parentBatches.set(t,o),o}cleanupParentBatch(t,e){const n=e.opaqueBatchIds.size>0||e.transparentBatchIds.size>0||e.liquidBatchIds.size>0,i=e.lodChunkIds.size>0,s=e.lodBatch!==void 0;n||i||s||this.parentBatches.delete(t)}applyParentBatchVisibility(t,e,n,i,s,o){var h;if(df(t.bounds,e,i)===-1){this.syncParentBatchVisibility(t,"hidden");return}if(pf(t.bounds,s)===-1){this.syncParentBatchVisibility(t,"hidden");return}const a=this.classifyParentChunkVisibility(t,e,n,i,s,o);this.applyBatchSetVisibility(this.states.opaque,t.opaqueBatchIds,a,"normal"),this.applyBatchSetVisibility(this.states.transparent,t.transparentBatchIds,a,"normal"),this.applyBatchSetVisibility(this.states.liquid,t.liquidBatchIds,a,"normal"),this.applyLodBatchVisibility(t,a);const l=this.hasVisibleBatchSet(this.states.opaque,t.opaqueBatchIds)||this.hasVisibleBatchSet(this.states.transparent,t.transparentBatchIds)||this.hasVisibleBatchSet(this.states.liquid,t.liquidBatchIds),c=!!((h=t.lodBatch)!=null&&h.mesh.visible);l&&c?this.syncParentBatchVisibility(t,"mixed"):l?this.syncParentBatchVisibility(t,"normal"):c?this.syncParentBatchVisibility(t,"lod"):this.syncParentBatchVisibility(t,"hidden")}classifyParentChunkVisibility(t,e,n,i,s,o){const a=t.chunkModes;a.clear();for(const l of this.getParentBatchChunkIds(t)){const c=o==null?void 0:o.get(l);if(c){a.set(l,c);continue}const h=this.getChunkVisibilityBounds(l);if(!h){a.set(l,"hidden");continue}if(ff(h,e,i)===-1){a.set(l,"hidden");continue}if(mf(h,s)===-1){a.set(l,"hidden");continue}oh(h,e)>n&&t.lodChunkIds.has(l)?a.set(l,"lod"):a.set(l,"normal")}return a}getParentBatchChunkIds(t){if(!t.allChunkIdsDirty)return t.allChunkIds;const e=this.scratchChunkIds;e.clear();for(const n of t.lodChunkIds)e.add(n);this.collectParentBatchChunkIds(this.states.opaque,t.opaqueBatchIds,e),this.collectParentBatchChunkIds(this.states.transparent,t.transparentBatchIds,e),this.collectParentBatchChunkIds(this.states.liquid,t.liquidBatchIds,e),t.allChunkIds.length=0;for(const n of e)t.allChunkIds.push(n);return t.allChunkIdsDirty=!1,t.allChunkIds}collectParentBatchChunkIds(t,e,n){for(const i of e){const s=t.batchMetadata.get(i);if(s)for(const o of s.chunkIds)n.add(o)}}applyBatchSetVisibility(t,e,n,i){for(const s of e){const o=t.batches.get(s),a=t.batchMetadata.get(s);if(!o||!a)continue;const l=this.applyBatchChunkVisibility(a,o,n,i);this.setMeshScenePresence(o,l)}}applyBatchChunkVisibility(t,e,n,i){t.chunkVisibilityScratchBits.fill(0);let s=0;for(let c=0;c<t.chunkIds.length;c++){const h=t.chunkIds[c];if(n.get(h)===i){const d=c>>5;t.chunkVisibilityScratchBits[d]|=1<<(c&31),s++}}const o=!gf(t.chunkVisibilityBits,t.chunkVisibilityScratchBits);o&&t.chunkVisibilityBits.set(t.chunkVisibilityScratchBits);const a=s===t.chunkIds.length?Ji:af,l=t.chunkVisibilityMode!==a;return l&&(t.chunkVisibilityMode=a),(t.visibilityDirty||o||l)&&(t.chunkVisibilityRevision++,e.material.bindChunkVisibility(t.chunkVisibilityBits,t.chunkVisibilityMode,t.chunkVisibilityRevision,t.chunkIds.length),t.visibilityDirty=!1),s>0}applyLodBatchVisibility(t,e){const n=t.lodBatch;if(!n)return;n.chunkVisibilityScratchBits.fill(0);let i=0;for(let l=0;l<n.chunkIds.length;l++){const c=n.chunkIds[l];if(e.get(c)!=="lod")continue;const h=l>>5;n.chunkVisibilityScratchBits[h]|=1<<(l&31),i++}const s=!gf(n.chunkVisibilityBits,n.chunkVisibilityScratchBits);s&&n.chunkVisibilityBits.set(n.chunkVisibilityScratchBits);const o=i===n.chunkIds.length?Ji:af,a=n.chunkVisibilityMode!==o;a&&(n.chunkVisibilityMode=o),(n.visibilityDirty||s||a)&&(n.chunkVisibilityRevision++,n.mesh.material.bindChunkVisibility(n.chunkVisibilityBits,n.chunkVisibilityMode,n.chunkVisibilityRevision,n.chunkIds.length),n.visibilityDirty=!1),this.setMeshScenePresence(n.mesh,i>0)}syncParentBatchVisibility(t,e){if(e==="hidden"){for(const n of t.opaqueBatchIds){const i=this.states.opaque.batches.get(n);i&&this.setMeshScenePresence(i,!1)}for(const n of t.transparentBatchIds){const i=this.states.transparent.batches.get(n);i&&this.setMeshScenePresence(i,!1)}for(const n of t.liquidBatchIds){const i=this.states.liquid.batches.get(n);i&&this.setMeshScenePresence(i,!1)}t.lodBatch&&this.setMeshScenePresence(t.lodBatch.mesh,!1)}t.visibilityState=e}setMeshScenePresence(t,e){const n=t.parent!==null;e&&!n?this.parent.add(t):!e&&n&&this.parent.remove(t),t.visible=e}hasVisibleBatchSet(t,e){for(const n of e){const i=t.batches.get(n);if(i!=null&&i.visible)return!0}return!1}disposeBatchMeshes(){for(const t of[this.states.opaque,this.states.transparent,this.states.liquid]){for(const e of t.batches.values())this.parent.remove(e),e.geometry.dispose(),e.material.dispose();t.batches.clear(),t.batchMetadata.clear(),t.dirtyChunkIdsByBatch.clear()}for(const t of this.parentBatches.values())this.disposeLodBatch(t);this.states.lod.batchMetadata.clear(),this.states.lod.batchChunkIds.clear(),this.states.lod.dirtyChunkIdsByBatch.clear()}}function Ko(){return{batchChunkIds:new Map,batches:new Map,batchMetadata:new Map,chunkGeometries:new Map,dirtyBatchIds:new Set,dirtyChunkIdsByBatch:new Map}}function rh(r){switch(r){case"liquid":return ab;case"lod":return Fe;case"opaque":return Fe;case"transparent":return lb}}function uf(r,t){const e=Zt.chunkIdToOriginCoordinate(r),n=Zt.chunkIdToOriginCoordinate(t);return e.y!==n.y?e.y-n.y:e.z!==n.z?e.z-n.z:e.x-n.x}function ub(r,t){const e=Math.max(r.min.x,Math.min(t.x,r.max.x)),n=Math.max(r.min.z,Math.min(t.y,r.max.z)),i=t.x-e,s=t.y-n;return i*i+s*s}function oh(r,t){const e=Math.max(r.min[0],Math.min(t.x,r.max[0])),n=Math.max(r.min[2],Math.min(t.y,r.max[2])),i=t.x-e,s=t.y-n;return i*i+s*s}function df(r,t,e){if(ub(r,t)>e)return-1;const n=Math.abs(t.x-r.min.x)>Math.abs(t.x-r.max.x)?r.min.x:r.max.x,i=Math.abs(t.y-r.min.z)>Math.abs(t.y-r.max.z)?r.min.z:r.max.z,s=t.x-n,o=t.y-i;return s*s+o*o<=e?1:0}function ff(r,t,e){if(oh(r,t)>e)return-1;const n=Math.abs(t.x-r.min[0])>Math.abs(t.x-r.max[0])?r.min[0]:r.max[0],i=Math.abs(t.y-r.min[2])>Math.abs(t.y-r.max[2])?r.min[2]:r.max[2],s=t.x-n,o=t.y-i;return s*s+o*o<=e?1:0}function pf(r,t){let e=!0;for(const n of t.planes){const i=Hr.set(n.normal.x>=0?r.max.x:r.min.x,n.normal.y>=0?r.max.y:r.min.y,n.normal.z>=0?r.max.z:r.min.z);if(n.distanceToPoint(i)<0)return-1;const s=am.set(n.normal.x>=0?r.min.x:r.max.x,n.normal.y>=0?r.min.y:r.max.y,n.normal.z>=0?r.min.z:r.max.z);n.distanceToPoint(s)<0&&(e=!1)}return e?1:0}function mf(r,t){let e=!0;for(const n of t.planes){const i=Hr.set(n.normal.x>=0?r.max[0]:r.min[0],n.normal.y>=0?r.max[1]:r.min[1],n.normal.z>=0?r.max[2]:r.min[2]);if(n.distanceToPoint(i)<0)return-1;const s=am.set(n.normal.x>=0?r.min[0]:r.max[0],n.normal.y>=0?r.min[1]:r.max[1],n.normal.z>=0?r.min[2]:r.max[2]);n.distanceToPoint(s)<0&&(e=!1)}return e?1:0}function fa(r,t){if(r<=t)return t;let e=Math.max(1,t);for(;e<r;)e*=cb;return e}function kl(r,t){const e=fa(r,t),n=e%3;return n===0?e:e+(3-n)}function ah(r){let t=0;for(const e of r.values())t=Math.max(t,e.indexOffset+e.indexCount);return t}function vi(r,t,e,n,i){const s=r.getAttribute(t);if(!(s instanceof Jt)||s.array.length!==e.length||s.itemSize!==n){r.setAttribute(t,new Jt(e,n));return}s.array.set(e),s.needsUpdate=!0}function db(r,t,e){const n=r.getIndex();if(!(n instanceof Jt)||n.array.length!==t.length){r.setIndex(new Jt(t,1)),r.setDrawRange(0,e);return}n.array.set(t),n.needsUpdate=!0,r.setDrawRange(0,e)}function gf(r,t){if(r.length!==t.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Xi(r,t,e,n,i){const s=r.getAttribute(t);if(!(s instanceof Jt)||!(s.array instanceof Float32Array))return;const o=s.array;o.fill(0,n,n+i),o.set(e,n),s.needsUpdate=!0}function fb(r,t,e,n,i){const s=r.getAttribute(t);!(s instanceof Jt)||!(s.array instanceof Float32Array)||(s.array.fill(e,n,n+i),s.needsUpdate=!0)}function pb(r,t,e,n,i){const s=r.getIndex();if(!(s instanceof Jt))return;const o=s.array;o.fill(i,e,e+n);for(let a=0;a<t.length;a++)o[e+a]=t[a]+i;s.needsUpdate=!0}function mb(r,t){r.setDrawRange(0,ah(t))}function Ol(r,t,e,n,i){if(e.length===0){const[l,c,h]=i.split(",").map(Number),u=rh(t);r.boundingBox=new ke(new L(l,c,h),new L(l+u.x*It,c+u.y*It,h+u.z*It)),r.boundingSphere=r.boundingBox.getBoundingSphere(r.boundingSphere??new Be);return}let s=!1;const o=r.boundingBox??new ke;for(const l of e){const c=n.get(l);if(c){if(!s){o.min.set(c.min[0],c.min[1],c.min[2]),o.max.set(c.max[0],c.max[1],c.max[2]),s=!0;continue}o.min.x=Math.min(o.min.x,c.min[0]),o.min.y=Math.min(o.min.y,c.min[1]),o.min.z=Math.min(o.min.z,c.min[2]),o.max.x=Math.max(o.max.x,c.max[0]),o.max.y=Math.max(o.max.y,c.max[1]),o.max.z=Math.max(o.max.z,c.max[2])}}if(!s){const[l,c,h]=i.split(",").map(Number),u=rh(t);o.min.set(l,c,h),o.max.set(l+u.x*It,c+u.y*It,h+u.z*It)}r.boundingBox=o;const a=r.boundingSphere??new Be;o.getCenter(Hr),a.center.copy(Hr),a.radius=Hr.distanceTo(o.max),r.boundingSphere=a}function Na({x:r,y:t,z:e}){return`${r},${t},${e}`}function gb(r){const t=r.indexOf(","),e=r.indexOf(",",t+1);return{x:Number(r.slice(0,t)),y:Number(r.slice(t+1,e)),z:Number(r.slice(e+1))}}function _b(r){return typeof r=="number"?r:r.i}function xb(r){return typeof r=="number"?0:r.r??0}const _f=["left","right","top","bottom","front","back"],yb=1,vb=2,Mb=4,xf=[[1,0,0,0,1,0,0,0,1],[0,0,-1,0,1,0,1,0,0],[-1,0,0,0,1,0,0,0,-1],[0,0,1,0,1,0,-1,0,0],[-1,0,0,0,-1,0,0,0,1],[0,0,-1,0,-1,0,-1,0,0],[1,0,0,0,-1,0,0,0,-1],[0,0,1,0,-1,0,1,0,0],[0,-1,0,1,0,0,0,0,1],[0,0,-1,1,0,0,0,-1,0],[0,1,0,1,0,0,0,0,-1],[0,0,1,1,0,0,0,1,0],[0,1,0,-1,0,0,0,0,1],[0,0,-1,-1,0,0,0,1,0],[0,-1,0,-1,0,0,0,0,-1],[0,0,1,-1,0,0,0,-1,0],[1,0,0,0,0,1,0,-1,0],[0,1,0,0,0,1,1,0,0],[-1,0,0,0,0,1,0,1,0],[0,-1,0,0,0,1,-1,0,0],[1,0,0,0,0,-1,0,1,0],[0,-1,0,0,0,-1,1,0,0],[-1,0,0,0,0,-1,0,-1,0],[0,1,0,0,0,-1,-1,0,0]],Bs=16,yf=.3,Sb=Array.from({length:Bs+1},(r,t)=>t===0?0:yf+(1-yf)*(t-1)/(Bs-1)),bb=[0,.5,.7,.9],Eb=[1,1,1,1];function Tb(r){var a;const t=r.name.toLowerCase(),e=wb(r.trimeshVertices,r.trimeshIndices,r.customColliderOptions),n=e.vertices,i=e.indices,s=Ab(r.textureUri),o=r.isMultiTexture?{left:`${s}/-x.png`,right:`${s}/+x.png`,top:`${s}/+y.png`,bottom:`${s}/-y.png`,front:`${s}/+z.png`,back:`${s}/-z.png`}:{left:s,right:s,top:s,bottom:s,front:s,back:s};return{...r,aoIntensity:bb,axisPassMask:((a=e.profile)==null?void 0:a.axisPassMask)??0,color:Eb,isTranslucent:!!r.isLiquid||t.includes("glass")||t.includes("leaves")||t.includes("water")||t.includes("ice"),transparencyRatio:0,trimeshIndices:i,trimeshOcclusionProfile:e.profile,trimeshTriangleData:Ib(n,i),trimeshVertices:n,textureUris:o}}function Ab(r){return r.startsWith("http://")||r.startsWith("https://")?r:`/voxcinder/world-editor/${r.startsWith("/")?r.slice(1):r}`}function wb(r,t,e){const n=vf(r),i=Mf(t);if(n&&i)return{vertices:n,indices:i,profile:Sf(n,i)};if(!e||e.shape!=="trimesh")return{};const s=vf(Cb(e,"vertices")),o=Mf(Rb(e,"indices"));return{vertices:s,indices:o,profile:s&&o?Sf(s,o):void 0}}function vf(r){if(r)return r instanceof Float32Array?r.slice():new Float32Array(r)}function Mf(r){if(r)return r instanceof Uint32Array?r.slice():new Uint32Array(r)}function Cb(r,t){const e=r[t];if(e instanceof Float32Array||Array.isArray(e))return e}function Rb(r,t){const e=r[t];if(e instanceof Uint32Array||Array.isArray(e))return e}function Ib(r,t){if(!r||!t)return;const e=t.length/3,n=new Array(e);for(let i=0;i<e;i++){const s=t[i*3]*3,o=t[i*3+1]*3,a=t[i*3+2]*3,l=r[s],c=r[s+1],h=r[s+2],u=r[o],d=r[o+1],f=r[o+2],m=r[a],_=r[a+1],p=r[a+2],g=u-l,y=d-c,S=f-h,M=m-l,A=_-c,C=p-h,w=y*C-S*A,x=S*M-g*C,b=g*A-y*M,V=Math.sqrt(w*w+x*x+b*b)||1,I=Math.abs(w),k=Math.abs(x),O=Math.abs(b),N=k>=I&&k>=O,F=!N&&I>=O;n[i]={normalX:w/V,normalY:x/V,normalZ:b/V,v0x:l,v0y:c,v0z:h,v1x:u,v1y:d,v1z:f,v2x:m,v2y:_,v2z:p,v0u:N?l:F?h:l,v0v:N?h:c,v1u:N?u:F?f:u,v1v:N?f:d,v2u:N?m:F?p:m,v2v:N?p:_}}return n}function Sf(r,t){if(t.length===0)return{aoOpacity:1,axisPassMask:0,skyOpacityUp:1,skyOpacityX:1,skyOpacityZ:1};const e=4,n=new Uint8Array(e*e*e);for(let c=0;c<t.length;c+=3){const h=t[c]*3,u=t[c+1]*3,d=t[c+2]*3,f=Math.max(0,Math.min(1,Math.min(r[h],r[u],r[d]))),m=Math.max(0,Math.min(1,Math.min(r[h+1],r[u+1],r[d+1]))),_=Math.max(0,Math.min(1,Math.min(r[h+2],r[u+2],r[d+2]))),p=Math.max(0,Math.min(1,Math.max(r[h],r[u],r[d]))),g=Math.max(0,Math.min(1,Math.max(r[h+1],r[u+1],r[d+1]))),y=Math.max(0,Math.min(1,Math.max(r[h+2],r[u+2],r[d+2]))),S=Math.max(0,Math.min(e-1,Math.floor(f*e))),M=Math.max(0,Math.min(e-1,Math.floor(m*e))),A=Math.max(0,Math.min(e-1,Math.floor(_*e))),C=Math.max(S,Math.max(0,Math.min(e-1,Math.ceil(p*e)-1))),w=Math.max(M,Math.max(0,Math.min(e-1,Math.ceil(g*e)-1))),x=Math.max(A,Math.max(0,Math.min(e-1,Math.ceil(y*e)-1)));for(let b=A;b<=x;b++)for(let V=M;V<=w;V++)for(let I=S;I<=C;I++)n[I+e*(V+e*b)]=1}let i=0;for(let c=0;c<n.length;c++)i+=n[c];let s=0;for(let c=0;c<e;c++)for(let h=0;h<e;h++)for(let u=0;u<e;u++)if(n[h+e*(u+e*c)]!==0){s++;break}let o=0;for(let c=0;c<e;c++)for(let h=0;h<e;h++)for(let u=0;u<e;u++)if(n[u+e*(h+e*c)]!==0){o++;break}let a=0;for(let c=0;c<e;c++)for(let h=0;h<e;h++)for(let u=0;u<e;u++)if(n[h+e*(c+e*u)]!==0){a++;break}let l=0;return o<e*e&&(l|=yb),s<e*e&&(l|=vb),a<e*e&&(l|=Mb),{aoOpacity:i/(e*e*e),axisPassMask:l,skyOpacityUp:s/(e*e),skyOpacityX:o/(e*e),skyOpacityZ:a/(e*e)}}const Lb=15,Ts=Math.ceil((Lb+1)/It);class bf{constructor(){T(this,"_chunks",new Map);T(this,"_blockTypes",new Map);T(this,"_blockTypeList",[]);T(this,"_entities");T(this,"_lightSourcesCache",null)}load(t,e){var n;this._chunks.clear(),this._entities=t.entities?{...t.entities}:void 0,this._setBlockTypes((n=t.blockTypes)!=null&&n.length?t.blockTypes:e);for(const[i,s]of Object.entries(t.blocks??{})){const o=_b(s);o!==0&&this.setBlock(gb(i),o,xb(s))}}toJson(){const t={};for(const e of this._chunks.values())e.forEachBlock((n,i,s)=>{const o={x:e.originCoordinate.x+n.x,y:e.originCoordinate.y+n.y,z:e.originCoordinate.z+n.z};t[Na(o)]=s===0?i:{i,r:s}});return{blockTypes:this._blockTypeList.map(e=>({id:e.id,name:e.name,textureUri:e.textureUri,isLiquid:e.isLiquid,lightLevel:e.lightLevel,...e.trimeshIndices?{trimeshIndices:Array.from(e.trimeshIndices)}:{},...e.trimeshVertices?{trimeshVertices:Array.from(e.trimeshVertices)}:{},durability:e.durability,customColliderOptions:e.customColliderOptions,isCustom:e.isCustom,isMultiTexture:e.isMultiTexture})),blocks:t,...this._entities?{entities:this._entities}:{}}}get blockTypes(){return this._blockTypeList}get chunkIds(){return[...this._chunks.keys()]}get entities(){return this._entities?{...this._entities}:{}}toSnapshot(){return{blockTypes:this._blockTypeList.map(Ef),chunks:this.chunkIds.map(t=>{const e=this._chunks.get(t);return{chunkId:t,originCoordinate:{...e.originCoordinate},blocks:e.cloneBlocks(),rotations:e.cloneRotations()}}),...this._entities?{entities:{...this._entities}}:{}}}loadSnapshot(t){this._chunks.clear(),this._blockTypes.clear(),this._blockTypeList=t.blockTypes.map(Ef);for(const e of this._blockTypeList)this._blockTypes.set(e.id,e);for(const e of t.chunks)this._chunks.set(e.chunkId,new Zt(e.originCoordinate,e.blocks,e.rotations));this._entities=t.entities?{...t.entities}:void 0,this._lightSourcesCache=null}getChunkSnapshot(t){const e=this._chunks.get(t);return e?{chunkId:t,originCoordinate:{...e.originCoordinate},blocks:e.cloneBlocks(),rotations:e.cloneRotations()}:null}applyChunkSnapshot(t,e){if(!e){this._chunks.delete(t),this._lightSourcesCache=null;return}this._chunks.set(t,new Zt({...e.originCoordinate},new Uint16Array(e.blocks),new Uint8Array(e.rotations))),this._lightSourcesCache=null}setEntities(t){this._entities=t?{...t}:void 0}setEntity(t,e){this._entities||(this._entities={}),this._entities[t]=e}deleteEntity(t){this._entities&&(delete this._entities[t],Object.keys(this._entities).length===0&&(this._entities=void 0))}getChunk(t){return this._chunks.get(t)}getBlockTypeById(t){return t===0?void 0:this._blockTypes.get(t)}getBlockType(t){const e=this.getBlockTypeId(t);return e===0?void 0:this._blockTypes.get(e)}getBlockTypeId(t){const e=this._chunks.get(Zt.globalCoordinateToChunkId(t));return e?e.getBlockType(Zt.globalCoordinateToLocalCoordinate(t)):0}getBlockRotation(t){const e=this._chunks.get(Zt.globalCoordinateToChunkId(t));return e?e.getBlockRotation(Zt.globalCoordinateToLocalCoordinate(t)):0}hasBlock(t){return this.getBlockTypeId(t)!==0}setBlock(t,e,n=0){const i=Zt.globalCoordinateToChunkId(t),s=Zt.globalCoordinateToLocalCoordinate(t);let o=this._chunks.get(i);o||(o=new Zt(Zt.globalCoordinateToOriginCoordinate(t)),this._chunks.set(i,o)),o.setBlock(s,e),o.setBlockRotation(s,e===0?0:n),o.isEmpty()&&this._chunks.delete(i),this._lightSourcesCache=null}deleteBlock(t){this.setBlock(t,0)}getChunksNear(t,e){const n=Zt.globalCoordinateToOriginCoordinate(t),i=[];for(let s=-e;s<=e;s++)for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){const l=this._chunks.get(Zt.originCoordinateToChunkId({x:n.x+a*16,y:n.y+s*16,z:n.z+o*16}));l&&i.push(l)}return i}getAllLightSources(){if(this._lightSourcesCache)return this._lightSourcesCache;const t=[];for(const e of this._chunks.values())e.forEachBlock((n,i)=>{const s=this._blockTypes.get(i);s!=null&&s.lightLevel&&t.push({position:{x:e.originCoordinate.x+n.x,y:e.originCoordinate.y+n.y,z:e.originCoordinate.z+n.z},level:s.lightLevel})});return this._lightSourcesCache=t,t}getLightSourcesNear(t,e){const n=Zt.globalCoordinateToOriginCoordinate(t),i=[];for(let s=-e;s<=e;s++)for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){const l=this._chunks.get(Zt.originCoordinateToChunkId({x:n.x+a*16,y:n.y+s*16,z:n.z+o*16}));l&&l.forEachBlock((c,h)=>{const u=this._blockTypes.get(h);u!=null&&u.lightLevel&&i.push({position:{x:l.originCoordinate.x+c.x,y:l.originCoordinate.y+c.y,z:l.originCoordinate.z+c.z},level:u.lightLevel})})}return i}getAffectedChunkIds(t,e,n){const i=new Set,s=Zt.globalCoordinateToChunkId(t),o=Zt.globalCoordinateToLocalCoordinate(t),a=e===0?void 0:this._blockTypes.get(e),l=n===0?void 0:this._blockTypes.get(n);if(i.add(s),(a==null?void 0:a.lightLevel)!==(l==null?void 0:l.lightLevel)){const d=Math.max((a==null?void 0:a.lightLevel)??0,(l==null?void 0:l.lightLevel)??0),f=Math.min(d,It);for(let m=-Ts;m<=Ts;m++)for(let _=-Ts;_<=Ts;_++)for(let p=-Ts;p<=Ts;p++){const g=Zt.globalCoordinateToChunkId({x:t.x+m*f,y:t.y+_*f,z:t.z+p*f});this._chunks.has(g)&&i.add(g)}}const c=[0],h=[0],u=[0];o.x===0?c.push(-1):o.x===ln&&c.push(1),o.y===0?h.push(-1):o.y===ln&&h.push(1),o.z===0?u.push(-1):o.z===ln&&u.push(1);for(const d of c)for(const f of h)for(const m of u){if(d===0&&f===0&&m===0)continue;const _=Zt.globalCoordinateToChunkId({x:t.x+d,y:t.y+f,z:t.z+m});this._chunks.has(_)&&i.add(_)}return[...i]}_setBlockTypes(t){this._blockTypes.clear(),this._blockTypeList=t.map(Tb);for(const e of this._blockTypeList)this._blockTypes.set(e.id,e)}}function Ef(r){const t=r.trimeshIndices?new Uint32Array(r.trimeshIndices):void 0,e=r.trimeshVertices?new Float32Array(r.trimeshVertices):void 0;return{id:r.id,name:r.name,textureUri:r.textureUri,isLiquid:r.isLiquid,lightLevel:r.lightLevel,durability:r.durability,customColliderOptions:r.customColliderOptions,isCustom:r.isCustom,isMultiTexture:r.isMultiTexture,textureUris:{...r.textureUris},aoIntensity:[...r.aoIntensity],axisPassMask:r.axisPassMask,color:[...r.color],isTranslucent:r.isTranslucent,transparencyRatio:r.transparencyRatio,...r.trimeshOcclusionProfile?{trimeshOcclusionProfile:{...r.trimeshOcclusionProfile}}:{},...t?{trimeshIndices:t}:{},...r.trimeshTriangleData?{trimeshTriangleData:r.trimeshTriangleData.map(n=>({...n}))}:{},...e?{trimeshVertices:e}:{}}}const lh="worldEditorColorMap",ch="worldEditorUseColorMap",hh="worldEditorAlphaMap",uh="worldEditorUseAlphaMap",pa="worldEditorAlphaTest",dh="worldEditorEmissive",fh="worldEditorEmissiveIntensity",ph="worldEditorEmissiveMap",mh="worldEditorUseEmissiveMap",gh="worldEditorFogColor",_h="worldEditorFogEnabled",xh="worldEditorFogNear",yh="worldEditorFogFar",Gr="vWorldEditorColorMapUv",Aa="vWorldEditorEmissiveMapUv",wa="vWorldEditorWorldPos",eu=pe.basic,Pb=new Gt,Db=eu.vertexShader.replace("#include <uv_pars_vertex>",`
      #include <uv_pars_vertex>
      varying vec2 ${Gr};
      varying vec2 ${Aa};
      varying vec3 ${wa};
    `).replace("#include <uv_vertex>",`
      #include <uv_vertex>
      ${Gr} = uv;
      ${Aa} = uv;
    `).replace("#include <project_vertex>",`
      vec4 worldEditorWorldPosition = vec4(transformed, 1.0);
      #ifdef USE_BATCHING
        worldEditorWorldPosition = batchingMatrix * worldEditorWorldPosition;
      #endif
      #ifdef USE_INSTANCING
        worldEditorWorldPosition = instanceMatrix * worldEditorWorldPosition;
      #endif
      worldEditorWorldPosition = modelMatrix * worldEditorWorldPosition;
      ${wa} = worldEditorWorldPosition.xyz;
      #include <project_vertex>
    `),Bb=eu.fragmentShader.replace("#include <map_pars_fragment>",`
      uniform sampler2D ${lh};
      uniform bool ${ch};
      uniform sampler2D ${hh};
      uniform bool ${uh};
      uniform float ${pa};
      uniform vec3 ${dh};
      uniform float ${fh};
      uniform sampler2D ${ph};
      uniform bool ${mh};
      varying vec2 ${Gr};
      varying vec2 ${Aa};
      varying vec3 ${wa};
      uniform vec3 ${gh};
      uniform bool ${_h};
      uniform float ${xh};
      uniform float ${yh};

      vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
        if (!${_h}) {
          return color;
        }

        float fogFactor = smoothstep(${xh}, ${yh}, length(worldPos.xz - cameraPosition.xz));
        return mix(color, ${gh}, fogFactor);
      }
    `).replace("#include <alphamap_pars_fragment>","").replace("#include <alphatest_pars_fragment>","").replace("#include <map_fragment>",`
      if (${ch}) {
        vec4 sampledDiffuseColor = texture2D(${lh}, ${Gr});
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
      if (${uh}) {
        diffuseColor.a *= texture2D(${hh}, ${Gr}).g;
      }
    `).replace("#include <alphatest_fragment>",`
      if (${pa} > 0.0 && diffuseColor.a < ${pa}) {
        discard;
      }
    `).replace("#include <opaque_fragment>",`
      vec3 emissiveColor = ${dh} * ${fh};
      if (${mh}) {
        emissiveColor *= texture2D(${ph}, ${Aa}).rgb;
      }
      outgoingLight += emissiveColor;
      #include <opaque_fragment>
    `).replace("#include <fog_fragment>",`
      gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, ${wa});
    `);class Ub extends Oe{constructor(e){const{alphaMap:n,alphaTest:i,color:s,emissive:o,emissiveIntensity:a,emissiveMap:l,fogUniformProvider:c,map:h,...u}=e||{};super({...u,uniforms:Vn.clone(eu.uniforms),vertexShader:Db,fragmentShader:Bb,fog:!1,lights:!1,clipping:!0,toneMapped:!0});T(this,"_color");T(this,"_emissive");T(this,"_uvScrollSpeed",Pb);T(this,"_colorMap");T(this,"_alphaMap");T(this,"_alphaTestValue");T(this,"_emissiveMap");T(this,"_emissiveIntensityValue");T(this,"_fogUniformProvider");T(this,"_shaderProcessors",[]);this.defines={...this.defines||{},USE_UV:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0]},this._color=new ut(s??16777215),this._colorMap=h??null,this._alphaMap=n??null,this._alphaTestValue=i??0,this._emissive=new ut(o??0),this._emissiveMap=l??null,this._emissiveIntensityValue=a??1,this._fogUniformProvider=c??null,this.bindUniforms()}get color(){return this._color}get customEmissive(){return this._emissive}get customEmissiveIntensity(){return this._emissiveIntensityValue}addShaderProcessor(e,n=!1){n?this._shaderProcessors.push(e):this._shaderProcessors.unshift(e),this.needsUpdate=!0}onBeforeCompile(e,n){for(const i of this._shaderProcessors)i(e,n)}customProgramCacheKey(){return`${super.customProgramCacheKey()}|processors=${this._shaderProcessors.map(e=>e.toString()).join("|")}`}bindUniforms(){const e=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return e.opacity}},this.uniforms[lh]={get value(){return e._colorMap}},this.uniforms[ch]={get value(){return e._colorMap!==null}},this.uniforms[hh]={get value(){return e._alphaMap}},this.uniforms[uh]={get value(){return e._alphaMap!==null}},this.uniforms[pa]={get value(){return e._alphaTestValue}},this.uniforms[dh]={value:this._emissive},this.uniforms[fh]={get value(){return e._emissiveIntensityValue}},this.uniforms[ph]={get value(){return e._emissiveMap}},this.uniforms[mh]={get value(){return e._emissiveMap!==null}},this.uniforms[gh]={get value(){var n;return((n=e._fogUniformProvider)==null?void 0:n.color())??e.color}},this.uniforms[_h]={get value(){var n;return((n=e._fogUniformProvider)==null?void 0:n.enabled())??!1}},this.uniforms[xh]={get value(){var n;return((n=e._fogUniformProvider)==null?void 0:n.near())??0}},this.uniforms[yh]={get value(){var n;return((n=e._fogUniformProvider)==null?void 0:n.far())??0}},this.uniforms.uvScroll={value:this._uvScrollSpeed}}}function le(r,t,e){const n=e*2+1;return(t+e)*n+(r+e)}function ts(r){return Math.max(0,Math.min(1,r))}function nu(r,t,e,n){const i=r[le(t,e,n)];let s=0;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)o===0&&a===0||Math.abs(t+o)>n||Math.abs(e+a)>n||(s=Math.max(s,Math.abs(i-r[le(t+o,e+a,n)])));return s}function Ca(r,t,e,n,i=0){let s={x:0,z:0},o=-1/0;for(let a=-r+t;a<=r-t;a++)for(let l=-r+t;l<=r-t;l++){if(n&&Math.hypot(a-n.x,l-n.z)<i)continue;const c=e(a,l);c>o&&(o=c,s={x:a,z:l})}return s}function vh(r,t,e,n){let i=0,s=0;for(let o=t.x-e;o<=t.x+e;o++)for(let a=t.z-e;a<=t.z+e;a++)Math.abs(o)>n||Math.abs(a)>n||(i+=r[le(o,a,n)],s+=1);return s>0?i/s:0}function lm(r,t,e,n,i){const s=r*2+1,o=new Int16Array(s*s),a=new Float32Array(s*s);for(let c=-r;c<=r;c++)for(let h=-r;h<=r;h++){const u=Math.hypot(c,h)/Math.max(1,r),d=Math.abs(i(t+101,Math.floor(c*.4),Math.floor(h*.4))-.5)*3.2,f=i(t+211,c,h)*1.8,m=Math.round(e+d+f-Math.max(0,u-.72)*5.5);o[le(c,h,r)]=m}for(let c=-r;c<=r;c++)for(let h=-r;h<=r;h++){const u=le(c,h,r),d=nu(o,c,h,r);a[u]=o[u]*.18+Math.max(0,1-d/5)*2.6-Nb(c,h,r)*1.4}const l=Ca(r,Math.max(4,Math.floor(r*.28)),(c,h)=>a[le(c,h,r)]);return{height:o,suitability:a,center:l}}function Nb(r,t,e){return Math.max(0,Math.hypot(r,t)/Math.max(1,e)-.35)}function Tf(r,t,e){const n=[];t&&n.push(0);const i=-r+3,s=r-3,o=Math.max(4,Math.round(r/6));let a=i;for(;a<=s;){const l=Math.min(s,a+8);let c=a,h=1/0;for(let u=a;u<=l;u++){if(n.some(m=>Math.abs(m-u)<6))continue;const d=t?Math.abs(u)*.03:Math.abs(u)*.02,f=e(u)+d;f<h&&(h=f,c=u)}n.push(c),a=c+Math.max(6,Math.round((s-i)/o))}return n.push(i),n.push(s),[...new Set(n)].sort((l,c)=>l-c)}function Af(r,t,e,n){let i=0;for(let s=-t;s<=t;s++)i+=r[le(n?e:s,n?s:e,t)];return i}function Fb(r,t,e,n){const i=`${r.x},${r.z}`,s=`${t.x},${t.z}`,o=[r],a=new Map,l=new Map([[i,0]]);for(;o.length>0;){o.sort((f,m)=>{const _=`${f.x},${f.z}`,p=`${m.x},${m.z}`,g=(l.get(_)??1/0)+Math.abs(f.x-t.x)+Math.abs(f.z-t.z),y=(l.get(p)??1/0)+Math.abs(m.x-t.x)+Math.abs(m.z-t.z);return g-y});const u=o.shift();if(!u)break;const d=`${u.x},${u.z}`;if(d===s)break;for(const[f,m]of[[1,0],[-1,0],[0,1],[0,-1]]){const _={x:u.x+f,z:u.z+m};if(Math.abs(_.x)>e||Math.abs(_.z)>e)continue;const p=`${_.x},${_.z}`,g=n[le(_.x,_.z,e)],y=(l.get(d)??1/0)+g;y>=(l.get(p)??1/0)||(l.set(p,y),a.set(p,d),o.some(S=>S.x===_.x&&S.z===_.z)||o.push(_))}}const c=[];let h=s;for(;h;){const[u,d]=h.split(",").map(Number);if(c.push({x:u,z:d}),h===i)break;h=a.get(h)}return c.reverse()}function Ur(r,t,e,n,i=0){const s=r.maxX-r.minX+1,o=r.maxZ-r.minZ+1;if(s<t*2||o<e*2)return[r];if(s>o?!0:o>s?!1:n(i)>.5){const u=r.minX+t-1,d=r.maxX-t;if(u>=d)return[r];const f=u+Math.floor(n(i+1)*Math.max(1,d-u+1));return[...Ur({minX:r.minX,maxX:f,minZ:r.minZ,maxZ:r.maxZ},t,e,n,i+11),...Ur({minX:f+1,maxX:r.maxX,minZ:r.minZ,maxZ:r.maxZ},t,e,n,i+19)]}const l=r.minZ+e-1,c=r.maxZ-e;if(l>=c)return[r];const h=l+Math.floor(n(i+2)*Math.max(1,c-l+1));return[...Ur({minX:r.minX,maxX:r.maxX,minZ:r.minZ,maxZ:h},t,e,n,i+23),...Ur({minX:r.minX,maxX:r.maxX,minZ:h+1,maxZ:r.maxZ},t,e,n,i+31)]}function Mh(r){return{x:Math.floor((r.minX+r.maxX)/2),z:Math.floor((r.minZ+r.maxZ)/2)}}const zl=[{id:"overworld",label:"Overworld",description:"Minecraft-like overworld with biomes, caves, rivers, trees, and a small village.",defaultSize:48,defaultHeight:12},{id:"arena",label:"Arena",description:"Circular combat bowl with walls, pillars, and a marked center.",defaultSize:18,defaultHeight:4},{id:"floating-island",label:"Floating Island",description:"Suspended landmass with a pond and a small tree.",defaultSize:16,defaultHeight:12},{id:"fortress",label:"Fortress",description:"Square stronghold with towers, gate, and a raised keep.",defaultSize:18,defaultHeight:6},{id:"downtown",label:"Downtown",description:"Dense city blocks with crossroads, towers, and a central plaza.",defaultSize:20,defaultHeight:9},{id:"castle",label:"Castle",description:"Layered castle walls with gatehouse, courtyard, and central keep.",defaultSize:22,defaultHeight:8},{id:"archipelago",label:"Archipelago",description:"Scattered islands, shallow water, and uneven shorelines.",defaultSize:22,defaultHeight:5},{id:"canyon",label:"Canyon",description:"Layered mesas cut by a winding canyon river.",defaultSize:24,defaultHeight:10},{id:"pine-valley",label:"Pine Valley",description:"Rolling hills, pine patches, and a shallow stream bed.",defaultSize:24,defaultHeight:8},{id:"kingdom",label:"Kingdom",description:"Large mixed world with macro terrain, regions, roads, downtown, castle, and forests.",defaultSize:56,defaultHeight:12}];function kb(r,t){switch(r.theme){case"overworld":return Ob(r,t);case"arena":return zb(r,t);case"floating-island":return Vb(r,t);case"fortress":return Hb(r,t);case"downtown":return cm(r,t);case"castle":return hm(r,t);case"archipelago":return Gb(r,t);case"canyon":return Wb(r,t);case"pine-valley":return Xb(r,t);case"kingdom":return qb(r,t)}}function Ob(r,t){const e={},n=ye(r.size,24,96),i=ye(r.height,7,24),s=n*2+1,o=Math.max(3,Math.round(i*.35)),a=-12,l=Gn(r.seed),c=new Int16Array(s*s),h=new Float32Array(s*s),u=new Float32Array(s*s),d=new Float32Array(s*s),f=new Float32Array(s*s),m=new Float32Array(s*s),_=new Float32Array(s*s),p=new Uint8Array(s*s),g=l()*Math.PI*2,y=l()*Math.PI*2;for(let M=-n;M<=n;M++){const A=Math.sin(M*.041+g)*n*.22+Math.sin(M*.097+y)*n*.08;for(let C=-n;C<=n;C++){const w=le(M,C,n),x=Math.hypot(M,C)/Math.max(1,n),b=Pf(Ht(r.seed+17,Math.floor(M*.065),Math.floor(C*.065))*2-1)-Math.max(0,x-.82)*.65,V=ts(Ht(r.seed+101,Math.floor(M*.085),Math.floor(C*.085))*.75+Ht(r.seed+181,Math.floor(M*.19),Math.floor(C*.19))*.25),I=Pf((Ht(r.seed+293,Math.floor(M*.11),Math.floor(C*.11))-.5)*2),k=ts(.18+Ht(r.seed+401,Math.floor(M*.08),Math.floor(C*.08))*.55+Math.max(0,1-Math.abs(C-A)/18)*.24),O=ts(.62+Ht(r.seed+503,Math.floor(M*.07),Math.floor(C*.07))*.36-Math.max(0,x-.4)*.12),N=Math.abs(C-A),F=Math.pow(Math.max(0,1-Math.abs(I)),1.35),H=Math.max(0,I)*8.5+F*4.5,z=V*8,tt=b<-.22?o-6+b*6:i+b*14,J=Math.max(0,5.5-N)*(.45+(1-V)*.5),st=Math.round(tt+H-z-J);c[w]=st,h[w]=k,u[w]=O,d[w]=b,f[w]=V,m[w]=I,_[w]=N,p[w]=$b(st,o,b,V,k,O,N)}}for(let M=-n;M<=n;M++)for(let A=-n;A<=n;A++){const C=le(M,A,n),w=c[C],x=p[C];Yb(e,M,A,w,o,a,x,t)}Kb(e,n,a,c,o,r.seed);for(let M=-n;M<=n;M++)for(let A=-n;A<=n;A++){const C=le(M,A,n),w=p[C],x=cu(e,M,A);if(!(x<=o||w===su||w===iu)){if(w===Xr||w===qr||w===Wr){const b=w===Xr?.042:w===qr?.036:.012,V=Ht(r.seed+701,M,A);V<b&&Jb(e,M,A,x+1,2)?w===qr?Fa(e,{x:M,y:x+1,z:A},4+Math.floor(Ht(r.seed+733,M,A)*4),t.wood,t.leaves):Zb(e,{x:M,y:x+1,z:A},4+Math.floor(Ht(r.seed+727,M,A)*3),t.wood,t.leaves):w===Wr&&V>.93&&Z(e,{x:M,y:x+1,z:A},t.leaves)}w===lu&&Ht(r.seed+809,M,A)>.958&&jb(e,{x:M,y:x+1,z:A},1+Math.floor(Ht(r.seed+877,M,A)*2),t.stone,t.accent),(w===ru||w===ou)&&Ht(r.seed+919,M,A)>.972&&Z(e,{x:M,y:x+1,z:A},t.wood)}}const S=Ca(n,Math.max(10,Math.floor(n*.22)),(M,A)=>{const C=le(M,A,n),w=p[C];return w!==Wr&&w!==Xr?-1/0:2.8-nu(c,M,A,n)*1.2+Math.max(0,1-_[C]/18)*.7+f[C]*.5+d[C]*.2});return Qb(e,S,Math.max(o+1,Math.round(vh(c,S,3,n))),t,r.seed),{blocks:e,bounds:{min:{x:-n,y:a,z:-n},max:{x:n,y:i+28,z:n}}}}function zb(r,t){const e={},n=ye(r.size,8,40),i=ye(r.height,3,10),s=Gn(r.seed),o=Math.max(2,Math.floor(n*.18)),a=Math.floor(s()*4);for(let c=-n-3;c<=n+3;c++)for(let h=-n-3;h<=n+3;h++){const u=Math.hypot(c,h),d=(Ht(r.seed,c,h)-.5)*1.8,f=-Math.max(0,Math.round((1-Math.min(1,u/(n*.74)))*o));if(u<=n+d){for(let _=-2;_<f;_++)Z(e,{x:c,y:_,z:h},t.stone);Z(e,{x:c,y:f-1,z:h},t.stone),Z(e,{x:c,y:f,z:h},u<n*.68?t.sand:t.stone)}else u<=n+3+d*.5&&s()>.42&&Z(e,{x:c,y:-1,z:h},t.grass);const m=a===0&&h>=n-1&&Math.abs(c)<=2||a===1&&c>=n-1&&Math.abs(h)<=2||a===2&&h<=-n+1&&Math.abs(c)<=2||a===3&&c<=-n+1&&Math.abs(h)<=2;if(u>=n-1.4&&u<=n+.8+d*.25&&!m)for(let _=1;_<=i;_++){const p=_===i?t.accent:t.wall;Z(e,{x:c,y:_,z:h},p)}(Math.abs(c)<=1||Math.abs(h)<=1)&&u<n-2&&Z(e,{x:c,y:f,z:h},t.accent),u<n*.2&&Z(e,{x:c,y:1,z:h},t.accent)}const l=Math.floor(n*.55);for(const[c,h]of[[-l,-l],[-l,l],[l,-l],[l,l]])Ti(e,{x:c,y:1,z:h},i+2,t.wall,t.accent);return{blocks:e,bounds:{min:{x:-n-3,y:-2,z:-n-3},max:{x:n+3,y:i+2,z:n+3}}}}function Vb(r,t){const e={},n=ye(r.size,10,36),i=ye(r.height,6,24),s=Math.max(5,Math.floor(n*.45)),o=Gn(r.seed),a=new Map;for(let f=-n;f<=n;f++)for(let m=-n;m<=n;m++){const _=Math.hypot(f/n,m/n);if(_>1.02)continue;const p=(Ht(r.seed+41,f,m)-.5)*1.8+(Ht(r.seed+83,f*2,m*2)-.5)*.8,g=Math.round(i+s-1-_*2.8+p),y=Math.max(4,Math.round((1.08-_)*s*1.75+Ht(r.seed+149,f,m)*3)),S=g-y;a.set(`${f},${m}`,g);for(let M=S;M<=g;M++){const A=g-M,C=A===0?t.grass:A<=2?t.wall:t.stone;Z(e,{x:f,y:M,z:m},C)}}const l=Math.max(2,Math.floor(n*.16));for(let f=-l;f<=l;f++)for(let m=-l;m<=l;m++){if(f*f+m*m>l*l)continue;const _=a.get(`${f},${m}`)??i+s-1;Z(e,{x:f,y:_,z:m},t.water)}const c=Math.max(4,Math.floor(n*.28)),h={x:-Math.floor(n*.28),y:(a.get(`${-Math.floor(n*.28)},${Math.floor(n*.12)}`)??i+s-1)+1,z:Math.floor(n*.12)};for(let f=0;f<c;f++)Z(e,{x:h.x,y:h.y+f,z:h.z},t.wood);const u={x:h.x,y:h.y+c,z:h.z};for(let f=-3;f<=3;f++)for(let m=-2;m<=2;m++)for(let _=-3;_<=3;_++)f*f+m*m*1.4+_*_>9||Z(e,{x:u.x+f,y:u.y+m,z:u.z+_},t.leaves);const d=2+Math.floor(o()*3);for(let f=0;f<d;f++){const m=Math.round((o()*2-1)*n*.68),_=Math.round((o()*2-1)*n*.68),p=(a.get(`${m},${_}`)??i)-Math.max(5,Math.floor(s*.8)),g=3+Math.floor(o()*4);for(let y=0;y<g;y++)Z(e,{x:m,y:p-y,z:_},y===g-1?t.accent:t.wall)}return{blocks:e,bounds:{min:{x:-n,y:i-s,z:-n},max:{x:n,y:i+s+c+2,z:n}}}}function Hb(r,t){const e={},n=ye(r.size,10,40),i=ye(r.height,4,12),s=Gn(r.seed),o=Math.max(4,Math.floor(n*.35)),a=2,l=n-4,c=Math.floor(s()*4),h=lm(n+2,r.seed,0,!0,Ht),u={x:ye(h.center.x,-2,2),z:ye(h.center.z,-2,2)};for(let d=-n-2;d<=n+2;d++)for(let f=-n-2;f<=n+2;f++){const m=d+u.x,_=f+u.z,p=le(m,_,n+2),g=Math.max(0,h.height[p]),y=Math.abs(d)<=n&&Math.abs(f)<=n;for(let A=-1;A<g;A++)Z(e,{x:m,y:A,z:_},t.stone);y?Z(e,{x:m,y:g,z:_},Math.abs(d)<=l&&Math.abs(f)<=l?Math.max(Math.abs(d),Math.abs(f))<l*.4?t.sand:t.grass:t.wall):Math.abs(d)<=n+2&&Math.abs(f)<=n+2&&Z(e,{x:m,y:g,z:_},t.stone);const S=Math.abs(d)===n||Math.abs(f)===n,M=Sh(c,n,d,f,2);if(S&&!M)for(let A=1;A<=i;A++)Z(e,{x:m,y:g+A,z:_},A===i?t.accent:t.wall)}for(const[d,f]of[[-n,-n],[-n,n],[n,-n],[n,n]])for(let m=-a;m<=a;m++)for(let _=-a;_<=a;_++)m*m+_*_>(a+.4)*(a+.4)||Ti(e,{x:u.x+d+m,y:1+Math.max(0,h.height[le(u.x+d+m,u.z+f+_,n+2)]),z:u.z+f+_},i+3,t.wall,t.accent);for(let d=-o;d<=o;d++)for(let f=-o;f<=o;f++){const m=u.x+d,_=u.z+f,p=1+Math.max(0,h.height[le(m,_,n+2)]);if(Z(e,{x:m,y:p,z:_},t.stone),Math.abs(d)===o||Math.abs(f)===o)for(let y=2;y<=i+1;y++)Z(e,{x:m,y:p+y-1,z:_},y===i+1?t.accent:t.wall)}return bh(e,u,c,n,2,3),oE(e,u,l,c,t),lE(e,u,c,n,t),{blocks:e,bounds:{min:{x:-n-2,y:-1,z:-n-2},max:{x:n+2,y:i+3,z:n+2}}}}function cm(r,t){const e={},n=ye(r.size,12,42),i=ye(r.height,5,18),s=Gn(r.seed),o=1+Math.floor(s()*2),a=o+1,l=n*2+1,c=new Float32Array(l*l);for(let _=-n;_<=n;_++)for(let p=-n;p<=n;p++){const g=Math.hypot(_,p)/n,y=Math.abs(_)*.02+Math.abs(p)*.02,S=Math.abs(Ht(r.seed+201,Math.floor(_*.28),Math.floor(p*.28))-.5)*1.2,M=Ht(r.seed+71,_,p)*.8;c[le(_,p,n)]=1+y+S+M+Math.max(0,g-.75)*3.2}const h=Tf(n,!0,_=>Af(c,n,_,!0)),u=Tf(n,!1,_=>Af(c,n,_,!1)),d=h[Math.floor(h.length/2)]??0,f=u[Math.floor(u.length/2)]??0;for(let _=-n;_<=n;_++)for(let p=-n;p<=n;p++)Z(e,{x:_,y:-1,z:p},t.stone),Z(e,{x:_,y:0,z:p},t.sand);for(const _ of h)to(e,{x:_,z:-n},{x:_,z:n},_===d?a:o,_===d?t.accent:t.wall,t.stone);for(const _ of u)to(e,{x:-n,z:_},{x:n,z:_},_===f?a:o,_===f?t.accent:t.wall,t.stone);const m=mE(d,f,h,u,s);for(const[_,p]of m){const g=Fb(_,p,n,c);gE(e,g,o,t.wall,t.stone)}for(const _ of h)for(const p of u){const g=(_===d||p===f)&&s()>.45?2+Math.floor(s()*2):1;for(let y=-g;y<=g;y++)for(let S=-g;S<=g;S++)Math.abs(y)+Math.abs(S)>g+1||Z(e,{x:_+y,y:0,z:p+S},t.accent)}for(let _=0;_<h.length-1;_++)for(let p=0;p<u.length-1;p++){const g=h[_]===d?a:o,y=h[_+1]===d?a:o,S=u[p]===f?a:o,M=u[p+1]===f?a:o,A=h[_]+g+2,C=h[_+1]-y-2,w=u[p]+S+2,x=u[p+1]-M-2;if(C-A<4||x-w<4)continue;const b={minX:A,maxX:C,minZ:w,maxZ:x},V=Mh(b),I=dE(V,d,f,r.seed,m),k=I==="civic"?8:I==="market"?5:4,O=Ur(b,k,k,N=>Ht(r.seed+1403+N,V.x,V.z));for(const N of O){if(fE(e,N,I,t),I==="green"&&N.maxX-N.minX>4&&N.maxZ-N.minZ>4){const F=Mh(N);Fa(e,{x:F.x,y:1,z:F.z},4+Math.floor(s()*3),t.wood,t.leaves);continue}pE(e,N,I,i,t,s,h,u)}}return{blocks:e,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+2,z:n}}}}function hm(r,t){const e={},n=ye(r.size,14,44),i=ye(r.height,5,16),s=Gn(r.seed),o=Math.max(6,n-(4+Math.floor(s()*4))),a=Math.max(4,Math.floor(n*(.22+s()*.14))),l=n+2+Math.floor(s()*3),c=Math.floor(s()*4),h=Math.max(o+2,n-3),u=lm(l,r.seed+57,0,!0,Ht),d={x:ye(u.center.x,-2,2),z:ye(u.center.z,-2,2)};for(let f=-l;f<=l;f++)for(let m=-l;m<=l;m++){const _=f+d.x,p=m+d.z,g=Math.max(0,u.height[le(_,p,l)]);if(Z(e,{x:_,y:-2,z:p},t.stone),Math.abs(f)<=l&&Math.abs(m)<=l&&Z(e,{x:_,y:-1,z:p},Math.abs(f)===l||Math.abs(m)===l?t.water:t.stone),Math.abs(f)<=n&&Math.abs(m)<=n){const y=Math.abs(f)<=o&&Math.abs(m)<=o,S=Math.abs(f)<=h&&Math.abs(m)<=h;for(let M=0;M<g;M++)Z(e,{x:_,y:M,z:p},t.stone);Z(e,{x:_,y:g,z:p},y?t.grass:S?t.sand:t.wall)}}for(let f=-n;f<=n;f++)for(let m=-n;m<=n;m++){const _=Math.abs(f)===n||Math.abs(m)===n,p=Math.abs(f)===o||Math.abs(m)===o,g=Sh(c,n,f,m,2),y=f+d.x,S=m+d.z,M=Math.max(0,u.height[le(y,S,l)]);if(_&&!g)for(let A=1;A<=i;A++)Z(e,{x:y,y:M+A,z:S},A===i?t.accent:t.wall);if(p&&!Sh(c,o,f,m,1))for(let A=1;A<=i-1;A++)Z(e,{x:y,y:M+A,z:S},A===i-1?t.accent:t.wall)}for(const[f,m]of[[-n,-n],[-n,n],[n,-n],[n,n],[-o,-o],[-o,o],[o,-o],[o,o]])for(let _=-1;_<=1;_++)for(let p=-1;p<=1;p++){const g=d.x+f+_,y=d.z+m+p,S=1+Math.max(0,u.height[le(g,y,l)]);Ti(e,{x:g,y:S,z:y},i+3,t.wall,t.accent)}for(let f=-a;f<=a;f++)for(let m=-a;m<=a;m++){const _=d.x+f,p=d.z+m,g=1+Math.max(0,u.height[le(_,p,l)]);Z(e,{x:_,y:g,z:p},t.stone);for(let y=2;y<=i+3;y++)!(Math.abs(f)===a||Math.abs(m)===a)&&y!==i+3||Z(e,{x:_,y:g+y-1,z:p},y===i+3?t.accent:t.wall)}return uE(e,d,c,o,l,t),bh(e,d,c,n,2,3),bh(e,d,c,o,1,3),hE(e,d,o,a,c,t),{blocks:e,bounds:{min:{x:-l,y:-2,z:-l},max:{x:l,y:i+3,z:l}}}}function Gb(r,t){const e={},n=ye(r.size,14,44),i=ye(r.height,3,10),s=Gn(r.seed),o=4+Math.floor(s()*4),a=Array.from({length:o},()=>({x:Math.round((s()*2-1)*n*.72),z:Math.round((s()*2-1)*n*.72),radius:4+Math.floor(s()*Math.max(4,n*.18)),height:i+Math.floor(s()*3)}));for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){Z(e,{x:l,y:-2,z:c},t.stone),Z(e,{x:l,y:-1,z:c},t.water);let h=0,u=0,d=0;for(const _ of a){const g=1-Math.hypot(l-_.x,c-_.z)/_.radius;d+=Math.max(0,g),!(g<=h)&&(h=g,u=_.height)}if(h<=0)continue;const f=Ht(r.seed+211,Math.floor(l*.5),Math.floor(c*.5)),m=Math.max(1,Math.round(h*u+Math.max(0,d-1.2)+f*1.4));for(let _=0;_<m;_++){const p=_===m-1?h>.74?t.grass:t.sand:_>=m-2?t.wall:t.stone;Z(e,{x:l,y:_,z:c},p)}h<.38&&d>.7&&Z(e,{x:l,y:0,z:c},t.sand),h>.72&&Ht(r.seed*3+17,l,c)>.78&&nE(e,{x:l,y:m,z:c},3+Math.floor(s()*2),t.wood,t.leaves)}return{blocks:e,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+5,z:n}}}}function Wb(r,t){const e={},n=ye(r.size,16,48),i=ye(r.height,6,18),s=r.seed*.0013;for(let o=-n;o<=n;o++){const a=Math.sin(o*.18+s)*n*.28+Math.sin(o*.07-s*1.7)*n*.14;for(let l=-n;l<=n;l++){const c=Math.abs(l-a),h=Ht(r.seed+91,o,l)*2.2+Ht(r.seed+313,o*2,l*2)*1.2,u=Math.abs(Ht(r.seed+517,Math.floor(o*.33),Math.floor(l*.33))-.5)*3.4,d=Math.max(2,Math.round(i+h+u)),f=Math.max(0,Math.round((8-c)*.9)),m=d-f;for(let _=-2;_<=m;_++){let p=t.stone;_===m&&c<2.5?p=t.water:_===m?p=m>i+1?t.sand:t.accent:_>=m-1?p=t.wall:(m-_)%4===0&&c>4&&(p=t.accent),Z(e,{x:o,y:_,z:l},p)}c>8&&m>i+4&&Ht(r.seed+887,o,l)>.91&&Ti(e,{x:o,y:m+1,z:l},2+Math.round(Ht(r.seed+991,o,l)*3),t.wall,t.accent)}}return{blocks:e,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+4,z:n}}}}function Xb(r,t){const e={},n=ye(r.size,16,48),i=ye(r.height,5,16),s=Gn(r.seed);for(let o=-n;o<=n;o++){const a=Math.sin(o*.15+r.seed*.0021)*n*.18,l=Math.sin(o*.09-r.seed*.0014)*n*.08+n*.22;for(let c=-n;c<=n;c++){const h=Ht(r.seed+19,o,c)*2.8+Ht(r.seed+211,o*2,c*2)*1.3,u=Math.round(i*.55+h),d=Math.max(0,Math.round(4-Math.abs(c-a)))+Math.max(0,Math.round(2-Math.abs(c-l))),f=Math.max(1,u-d),m=Ht(r.seed+433,Math.floor(o*.4),Math.floor(c*.4));for(let _=-1;_<=f;_++){const g=_===f?Math.abs(c-a)<1.6||Math.abs(c-l)<1.1?t.water:m>.78?t.sand:t.grass:_>=f-2?t.wall:t.stone;Z(e,{x:o,y:_,z:c},g)}if(f>=2&&Math.abs(c-a)>3){const _=.02+Ht(r.seed+701,o,c)*.06+Math.max(0,m-.7)*.04;s()<_&&Fa(e,{x:o,y:f+1,z:c},4+Math.floor(s()*4),t.wood,t.leaves)}}}return{blocks:e,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+8,z:n}}}}function qb(r,t){const e={},n=ye(r.size,28,96),i=ye(r.height,8,24),s=Gn(r.seed),o=Math.max(18,Math.round(n*.38)),a=Math.max(20,Math.round(n*.34)),l=n*2+1,c=new Int16Array(l*l),h=new Float32Array(l*l),u=new Float32Array(l*l),d=new Float32Array(l*l),f=new Float32Array(l*l),m=s()*Math.PI*2,_=s()*Math.PI*2;for(let w=-n;w<=n;w++){const x=Math.sin(w*.045+m)*n*.24+Math.sin(w*.11+_)*n*.07;for(let b=-n;b<=n;b++){const V=Math.hypot(w,b)/n,I=(Ht(r.seed+13,Math.floor(w*.18),Math.floor(b*.18))-.5)*10.5,k=Ht(r.seed+73,w,b)*3.1+Ht(r.seed+193,w*2,b*2)*1.9,O=Math.pow(Math.abs(Ht(r.seed+311,w,b)-.5)*2,1.35)*8.4,N=Math.max(0,V-.74)*12,F=Math.abs(b-x),H=Math.max(0,8.4-F)*1.05,z=Math.max(-2,Math.round(i+I+k+O-N-H)),tt=ts(.26+Ht(r.seed+401,Math.floor(w*.33),Math.floor(b*.33))*.28+Math.max(0,1-F/14)*.48-Math.max(0,V-.68)*.25),J=ts(.58-z/Math.max(10,i+12)*.28+Ht(r.seed+557,Math.floor(w*.26),Math.floor(b*.26))*.24);c[le(w,b,n)]=z,h[le(w,b,n)]=tt,u[le(w,b,n)]=J;for(let st=-2;st<=z;st++){let ct=t.stone;st===z&&z<=0?ct=t.water:st===z?ct=tt>.58?t.grass:J>.66?t.sand:t.grass:st>=z-2&&(ct=tt>.58?t.wall:t.stone),Z(e,{x:w,y:st,z:b},ct)}}}for(let w=-n;w<=n;w++)for(let x=-n;x<=n;x++){const b=le(w,x,n),V=nu(c,w,x,n);d[b]=V;const I=Rf(w,x,n,m,_);f[b]=ts(.62-Math.min(1,V/6)*.46-Math.max(0,(c[b]-i-3)/18)*.24+(1-Math.min(1,I/28))*.2+(1-Math.min(1,Math.hypot(w,x)/n))*.12)}const p=Ca(n,Math.max(10,Math.floor(o*.42)),(w,x)=>{const b=le(w,x,n);return f[b]+h[b]*.08}),g=Ca(n,Math.max(10,Math.floor(a*.38)),(w,x)=>{const b=le(w,x,n),V=Math.hypot(w-p.x,x-p.z),I=Math.abs(V-n*.34);return ts(.18+Math.min(1,(c[b]-i+4)/16)*.42+Math.max(0,1-d[b]/5.2)*.26+Math.max(0,1-I/(n*.22))*.18-Math.max(0,h[b]-.72)*.18)},p,Math.max(18,Math.floor(n*.28))),y=Math.max(1,Math.round(vh(c,p,5,n))),S=Math.max(y+3,Math.round(vh(c,g,5,n))+2);If(e,p,o+6,y,t.stone,t.sand),If(e,g,a+8,S,t.stone,t.grass);const M=cm({seed:r.seed*17+5,size:o,height:Math.max(8,Math.round(i*.8))},t);is(e,M.blocks,{x:p.x,y,z:p.z});const A=hm({seed:r.seed*29+7,size:a,height:Math.max(7,Math.round(i*.75))},t);is(e,A.blocks,{x:g.x,y:S,z:g.z});const C=_E(p,g,n,d,h,c);to(e,p,C,1,t.accent,t.stone),to(e,C,g,1,t.accent,t.stone);for(let w=-n;w<=n;w++)for(let x=-n;x<=n;x++){const b=Math.hypot(w-p.x,x-p.z)<o*.72,V=Math.hypot(w-g.x,x-g.z)<a*.75,I=Math.min(Eh({x:w,z:x},p,C),Eh({x:w,z:x},C,g))<3.2;if(b||V||I)continue;const k=le(w,x,n),O=c[k];if(O<1)continue;const N=h[k],F=u[k],H=d[k],z=Rf(w,x,n,m,_);if(N>.43&&N<.72&&F>.42&&H<2.4&&z<18&&Math.hypot(w-p.x,x-p.z)<o*1.45){xE(e,{x:w,y:O,z:x},t,r.seed);continue}const J=.014+Math.max(0,N-.42)*.08+Ht(r.seed+809,w,x)*.03;N>.5&&H<4.8&&s()<J?Fa(e,{x:w,y:O+1,z:x},4+Math.floor(s()*4),t.wood,t.leaves):O>i+8&&H<3.8&&Ht(r.seed+991,w,x)>.84&&Ti(e,{x:w,y:O+1,z:x},2+Math.floor(s()*3),t.wall,t.accent)}return{blocks:e,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+24,z:n}}}}const iu=0,su=1,ru=2,ou=3,Wr=4,Xr=5,qr=6,au=7,lu=8;function $b(r,t,e,n,i,s,o){return r<=t-4||e<-.42?iu:r<=t||e<-.16?su:o<2.2&&r<=t+4?ou:r<=t+2?ru:r>=t+14&&n<.4?lu:s>.74&&i<.38?au:s<.4&&i>.46?qr:i>.52?Xr:Wr}function Yb(r,t,e,n,i,s,o,a){const l=Math.max(n,i);for(let c=s;c<=l;c++){const h=n-c;let u=a.stone;c>n?u=a.water:h===0?u=wf(o,n,i,!0,a):h<=3?u=wf(o,n,i,!1,a):o===au&&h<=6&&(u=a.sand),Z(r,{x:t,y:c,z:e},u)}}function wf(r,t,e,n,i){switch(r){case iu:case su:return n?i.sand:i.stone;case ru:case ou:return n?i.sand:i.wall;case au:return i.sand;case qr:return n?i.accent:i.wall;case lu:return n&&t>e+18?i.accent:i.stone;case Xr:case Wr:default:return n?i.grass:i.wall}}function Kb(r,t,e,n,i,s){for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=n[le(o,a,t)],c=Math.min(l-3,i+18);for(let h=e+2;h<=c;h++){const u=Vl(s+3001,o*.18,h*.22,a*.18)+Vl(s+3119,o*.09,h*.11,a*.09)*.7,d=Math.abs(Vl(s+3251,o*.07,h*.1,a*.07)-.5),f=h<i-6?.96:1.08;(u>f||d<.04)&&Z(r,{x:o,y:h,z:a},0)}}}function Zb(r,t,e,n,i){for(let o=0;o<e;o++)Z(r,{x:t.x,y:t.y+o,z:t.z},n);const s=t.y+e;for(let o=-2;o<=2;o++)for(let a=-2;a<=1;a++)for(let l=-2;l<=2;l++)o*o+l*l+a*a*1.5>7.5||Z(r,{x:t.x+o,y:s+a,z:t.z+l},i)}function jb(r,t,e,n,i){for(let s=-e;s<=e;s++)for(let o=0;o<=e;o++)for(let a=-e;a<=e;a++)s*s+o*o*1.3+a*a>(e+.2)*(e+.2)||Z(r,{x:t.x+s,y:t.y+o,z:t.z+a},o===e?i:n)}function Jb(r,t,e,n,i){for(let s=-i;s<=i;s++)for(let o=-i;o<=i;o++)for(let a=0;a<=6;a++)if(r[Na({x:t+s,y:n+a,z:e+o})])return!1;return!0}function Qb(r,t,e,n,i){const s=Gn(i+4109),o=[{x:t.x-8,z:t.z},{x:t.x+8,z:t.z},{x:t.x,z:t.z-8},{x:t.x,z:t.z+8},t];for(const l of o)to(r,t,l,1,n.sand,n.wall);const a=[{x:-6,z:-4},{x:6,z:-4},{x:-6,z:4},{x:6,z:4}];for(const l of a)tE(r,{x:t.x+l.x,y:e,z:t.z+l.z},3+Math.floor(s()*2),n);eE(r,{x:t.x,y:e,z:t.z},n)}function tE(r,t,e,n){const i=t.x-e,s=t.x+e,o=t.z-e,a=t.z+e;for(let l=i;l<=s;l++)for(let c=o;c<=a;c++){Z(r,{x:l,y:t.y,z:c},n.wall);for(let h=1;h<=3;h++)(l===i||l===s||c===o||c===a)&&Z(r,{x:l,y:t.y+h,z:c},n.wood);Z(r,{x:l,y:t.y+4,z:c},n.accent)}for(let l=t.y+1;l<=t.y+2;l++)Z(r,{x:t.x,y:l,z:o},0)}function eE(r,t,e){for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)Z(r,{x:t.x+n,y:t.y,z:t.z+i},e.wall),Z(r,{x:t.x+n,y:t.y-1,z:t.z+i},n===0&&i===0?e.water:e.stone);for(const[n,i]of[[-2,-2],[2,-2],[-2,2],[2,2]])Ti(r,{x:t.x+n,y:t.y+1,z:t.z+i},3,e.wood,e.wood);for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)(Math.abs(n)===2||Math.abs(i)===2)&&Z(r,{x:t.x+n,y:t.y+4,z:t.z+i},e.accent)}function Ti(r,t,e,n,i){for(let s=0;s<e;s++)Z(r,{x:t.x,y:t.y+s,z:t.z},s===e-1?i:n)}function nE(r,t,e,n,i){for(let o=0;o<e;o++)Z(r,{x:t.x,y:t.y+o,z:t.z},n);const s=t.y+e;for(const[o,a]of[[2,0],[-2,0],[0,2],[0,-2],[1,1],[-1,1],[1,-1],[-1,-1]])Z(r,{x:t.x+o,y:s,z:t.z+a},i);Z(r,{x:t.x,y:s+1,z:t.z},i)}function Fa(r,t,e,n,i){for(let o=0;o<e;o++)Z(r,{x:t.x,y:t.y+o,z:t.z},n);const s=t.y+e-1;for(let o=0;o<4;o++){const a=o<2?2:1;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++)Math.abs(l)+Math.abs(c)>a+1||Z(r,{x:t.x+l,y:s-o,z:t.z+c},i)}Z(r,{x:t.x,y:s+1,z:t.z},i)}function Sh(r,t,e,n,i){switch(r){case 0:return n===t&&Math.abs(e)<=i;case 1:return e===t&&Math.abs(n)<=i;case 2:return n===-t&&Math.abs(e)<=i;case 3:return e===-t&&Math.abs(n)<=i;default:return!1}}function iE(r,t,e,n,i){for(let s=e+1;s<=n;s++)for(let o=-1;o<=1;o++)switch(t){case 0:Z(r,{x:o,y:-1,z:s},i.stone),Z(r,{x:o,y:0,z:s},i.accent);break;case 1:Z(r,{x:s,y:-1,z:o},i.stone),Z(r,{x:s,y:0,z:o},i.accent);break;case 2:Z(r,{x:o,y:-1,z:-s},i.stone),Z(r,{x:o,y:0,z:-s},i.accent);break;case 3:Z(r,{x:-s,y:-1,z:o},i.stone),Z(r,{x:-s,y:0,z:o},i.accent);break}}function sE(r,t,e,n,i){for(let s=1;s<=i;s++)for(let o=-n;o<=n;o++)switch(t){case 0:Z(r,{x:o,y:s,z:e},0);break;case 1:Z(r,{x:e,y:s,z:o},0);break;case 2:Z(r,{x:o,y:s,z:-e},0);break;case 3:Z(r,{x:-e,y:s,z:o},0);break}}function rE(r,t,e,n){for(let s=-t;s<=t;s++)Z(r,{x:0,y:0,z:s},n.accent),Z(r,{x:s,y:0,z:0},n.accent);const i=t+4;for(let s=0;s<=i;s++)switch(e){case 0:Z(r,{x:0,y:0,z:s},n.accent);break;case 1:Z(r,{x:s,y:0,z:0},n.accent);break;case 2:Z(r,{x:0,y:0,z:-s},n.accent);break;case 3:Z(r,{x:-s,y:0,z:0},n.accent);break}}function oE(r,t,e,n,i){const s={};rE(s,e,n,i),is(r,s,{x:t.x,y:0,z:t.z})}function aE(r,t,e,n){for(let i=e;i<=e+5;i++)for(let s=-2;s<=2;s++)switch(t){case 0:Z(r,{x:s,y:-1,z:i},n.stone),Z(r,{x:s,y:0,z:i},n.accent);break;case 1:Z(r,{x:i,y:-1,z:s},n.stone),Z(r,{x:i,y:0,z:s},n.accent);break;case 2:Z(r,{x:s,y:-1,z:-i},n.stone),Z(r,{x:s,y:0,z:-i},n.accent);break;case 3:Z(r,{x:-i,y:-1,z:s},n.stone),Z(r,{x:-i,y:0,z:s},n.accent);break}}function lE(r,t,e,n,i){const s={};aE(s,e,n,i),is(r,s,{x:t.x,y:0,z:t.z})}function cE(r,t,e,n,i){for(let s=-t+1;s<=t-1;s++)Z(r,{x:0,y:0,z:s},i.accent),Z(r,{x:s,y:0,z:0},i.accent);for(let s=-e-1;s<=e+1;s++)Z(r,{x:s,y:0,z:-e-1},i.accent),Z(r,{x:s,y:0,z:e+1},i.accent);for(let s=-e-1;s<=e+1;s++)Z(r,{x:-e-1,y:0,z:s},i.accent),Z(r,{x:e+1,y:0,z:s},i.accent);for(let s=e+1;s<=t;s++)switch(n){case 0:Z(r,{x:0,y:0,z:s},i.accent);break;case 1:Z(r,{x:s,y:0,z:0},i.accent);break;case 2:Z(r,{x:0,y:0,z:-s},i.accent);break;case 3:Z(r,{x:-s,y:0,z:0},i.accent);break}}function hE(r,t,e,n,i,s){const o={};cE(o,e,n,i,s),is(r,o,{x:t.x,y:0,z:t.z})}function bh(r,t,e,n,i,s){const o={};sE(o,e,n,i,s),is(r,o,{x:t.x,y:0,z:t.z})}function uE(r,t,e,n,i,s){const o={};iE(o,e,n,i,s),is(r,o,{x:t.x,y:0,z:t.z})}function dE(r,t,e,n,i){const s=Math.abs(r.x-t)+Math.abs(r.z-e),o=Math.min(...i.map(([l,c])=>Eh(r,l,c))),a=Ht(n+1701,r.x,r.z);return s<6||o<3.2?"civic":a>.84&&o>5?"green":o<7||a>.46?"market":"residential"}function fE(r,t,e,n){for(let i=t.minX;i<=t.maxX;i++)for(let s=t.minZ;s<=t.maxZ;s++)Z(r,{x:i,y:0,z:s},e==="green"?n.grass:e==="market"?n.sand:n.stone)}function pE(r,t,e,n,i,s,o,a){const l=Mh(t),c=t.maxX-t.minX+1,h=t.maxZ-t.minZ+1,u=e==="civic"?1:0,d=t.minX+u,f=t.maxX-u,m=t.minZ+u,_=t.maxZ-u;if(f-d<3||_-m<3)return;const p=e==="civic"?n+1:e==="market"?Math.max(4,n-2):Math.max(4,n-3),g=Math.max(4,p+Math.floor(s()*4)-1),y=Math.max(3,g),S=e==="civic"?i.accent:e==="market"?i.stone:i.wall;for(let x=d;x<=f;x++)for(let b=m;b<=_;b++)for(let V=1;V<=y;V++)!(x===d||x===f||b===m||b===_)&&V!==y||Z(r,{x,y:V,z:b},V===y?S:i.wall);const M=Math.abs(l.x-Cf(l.x,o)),A=Math.abs(l.z-Cf(l.z,a));let C=l.x,w=l.z;A<=M?w=m:C=l.x<0?f:d;for(let x=1;x<=2;x++)Z(r,{x:C,y:x,z:w},0);(e==="civic"||s()>.58)&&(Ti(r,{x:d,y:y+1,z:m},2,i.accent,i.accent),Ti(r,{x:f,y:y+1,z:_},2,i.accent,i.accent)),e==="market"&&c>4&&h>4&&(Z(r,{x:l.x,y:1,z:l.z},i.wood),Z(r,{x:l.x,y:2,z:l.z},i.leaves))}function Cf(r,t){let e=t[0]??0,n=Math.abs(e-r);for(const i of t){const s=Math.abs(i-r);s<n&&(n=s,e=i)}return e}function mE(r,t,e,n,i){const s=[],o=e[Math.max(0,Math.floor(e.length*.25))]??r,a=e[Math.min(e.length-1,Math.floor(e.length*.75))]??r,l=n[Math.max(0,Math.floor(n.length*.25))]??t,c=n[Math.min(n.length-1,Math.floor(n.length*.75))]??t;return s.push([{x:o,z:t},{x:r,z:l}]),s.push([{x:r,z:c},{x:a,z:t}]),i()>.45&&s.push([{x:o,z:l},{x:a,z:c}]),i()>.55&&s.push([{x:o,z:c},{x:a,z:l}]),s}function gE(r,t,e,n,i){for(const s of t){const o=Math.max(0,cu(r,s.x,s.z));for(let a=-e;a<=e;a++)for(let l=-e;l<=e;l++){const c=s.x+a,h=s.z+l;for(let u=-2;u<o;u++)Z(r,{x:c,y:u,z:h},i);Z(r,{x:c,y:o,z:h},n),hu(r,c,h,o+1,o+8)}}}function Rf(r,t,e,n,i){const s=Math.sin(r*.045+n)*e*.24+Math.sin(r*.11+i)*e*.07;return Math.abs(t-s)}function _E(r,t,e,n,i,s){const o={x:Math.round((r.x+t.x)*.5),z:Math.round((r.z+t.z)*.5)};let a=o,l=1/0;for(let c=o.x-12;c<=o.x+12;c++)for(let h=o.z-12;h<=o.z+12;h++){if(Math.abs(c)>e||Math.abs(h)>e)continue;const u=le(c,h,e),d=n[u]*1.8+Math.max(0,i[u]-.78)*6+Math.max(0,-s[u])*2.4+Math.abs(c-o.x)*.06+Math.abs(h-o.z)*.06;d<l&&(l=d,a={x:c,z:h})}return a}function xE(r,t,e,n){const i=Ht(n+1221,t.x,t.z),s=i>.58?e.sand:e.grass;Z(r,t,s),i>.8?Z(r,{x:t.x,y:t.y+1,z:t.z},e.wood):i<.16&&Z(r,{x:t.x,y:t.y+1,z:t.z},e.leaves)}function If(r,t,e,n,i,s){for(let o=t.x-e;o<=t.x+e;o++)for(let a=t.z-e;a<=t.z+e;a++)if(!(Math.hypot(o-t.x,a-t.z)>e)){for(let l=-2;l<n;l++)Z(r,{x:o,y:l,z:a},i);Z(r,{x:o,y:n,z:a},s),hu(r,o,a,n+1,n+30)}}function to(r,t,e,n,i,s){const o=Math.max(Math.abs(e.x-t.x),Math.abs(e.z-t.z));for(let a=0;a<=o;a++){const l=o===0?0:a/o,c=Math.round(Lf(t.x,e.x,l)),h=Math.round(Lf(t.z,e.z,l)),u=Math.max(0,cu(r,c,h));for(let d=-n;d<=n;d++)for(let f=-n;f<=n;f++){const m=c+d,_=h+f;for(let p=-2;p<u;p++)Z(r,{x:m,y:p,z:_},s);Z(r,{x:m,y:u,z:_},i),hu(r,m,_,u+1,u+8)}}}function is(r,t,e){for(const[n,i]of Object.entries(t)){const s=yE(n);Z(r,{x:s.x+e.x,y:s.y+e.y,z:s.z+e.z},i)}}function cu(r,t,e){for(let n=96;n>=-2;n--)if(r[Na({x:t,y:n,z:e})])return n;return-2}function hu(r,t,e,n,i){for(let s=n;s<=i;s++)Z(r,{x:t,y:s,z:e},0)}function Eh(r,t,e){const n=e.x-t.x,i=e.z-t.z,s=n*n+i*i;if(s===0)return Math.hypot(r.x-t.x,r.z-t.z);const o=Math.max(0,Math.min(1,((r.x-t.x)*n+(r.z-t.z)*i)/s)),a=t.x+n*o,l=t.z+i*o;return Math.hypot(r.x-a,r.z-l)}function Lf(r,t,e){return r+(t-r)*e}function yE(r){const t=r.indexOf(","),e=r.indexOf(",",t+1);return{x:Number(r.slice(0,t)),y:Number(r.slice(t+1,e)),z:Number(r.slice(e+1))}}function Z(r,t,e){const n=Na(t);if(e===0){delete r[n];return}r[n]=e}function ye(r,t,e){return Math.max(t,Math.min(e,Math.round(r)))}function Pf(r){return Math.max(-1,Math.min(1,r))}function Gn(r){let t=r>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ht(r,t,e){const n=Math.sin(t*127.1+e*311.7+r*1e-4)*43758.5453123;return n-Math.floor(n)}function Vl(r,t,e,n){const i=Math.sin(t*127.1+e*269.5+n*311.7+r*1e-4)*43758.5453123;return i-Math.floor(i)}class uu{constructor(t,e){T(this,"_texture");T(this,"_uvByUri",new Map);this._texture=t,this._uvByUri=e}get texture(){return this._texture}toSnapshot(){return Object.fromEntries(this._uvByUri.entries())}getFaceUvs(t,e){const n=this._uvByUri.get(t.textureUris[e]);if(!n)throw new Error(`TextureAtlas: Missing atlas entry for ${t.textureUris[e]}`);return n}static async create(t){const e=new Set;for(const u of t)Object.values(u.textureUris).forEach(d=>e.add(d));const n=await Promise.all([...e].map(async u=>[u,await vE(u)])),i=16,s=Math.max(1,Math.ceil(Math.sqrt(n.length))),o=Math.max(1,Math.ceil(n.length/s)),a=document.createElement("canvas");a.width=s*i,a.height=o*i;const l=a.getContext("2d");if(!l)throw new Error("TextureAtlas: Failed to create 2d context.");l.imageSmoothingEnabled=!1;const c=new Map;n.forEach(([u,d],f)=>{const m=f%s,_=Math.floor(f/s),p=m*i,g=_*i;l.drawImage(d,p,g,i,i);const y=ME(d,i);c.set(u,{averageRGB:y.averageRGB,isTransparent:y.isTransparent,needsAlphaTest:y.needsAlphaTest,transparencyRatio:y.transparencyRatio,u0:p/a.width,v0:1-(g+i)/a.height,u1:(p+i)/a.width,v1:1-g/a.height})});const h=new r_(a);return h.colorSpace=Ee,h.magFilter=Te,h.minFilter=Te,h.generateMipmaps=!1,h.needsUpdate=!0,new uu(h,c)}}async function vE(r){return new Promise((t,e)=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>e(new Error(`Failed to load image ${r}`)),n.src=r})}function ME(r,t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");if(!n)return{averageRGB:[1,1,1],isTransparent:!1,needsAlphaTest:!1,transparencyRatio:0};n.imageSmoothingEnabled=!1,n.clearRect(0,0,t,t),n.drawImage(r,0,0,t,t);const i=n.getImageData(0,0,t,t).data;let s=0,o=!1,a=0,l=0,c=0,h=0;for(let u=0;u<i.length;u+=4){const d=i[u],f=i[u+1],m=i[u+2],_=i[u+3],p=_/255;l+=d*p,c+=f*p,h+=m*p,a+=p,_<255&&s++,_>0&&_<255&&(o=!0)}return{averageRGB:a>0?[l/(255*a),c/(255*a),h/(255*a)]:[1,1,1],isTransparent:s>0,needsAlphaTest:o,transparencyRatio:s/(t*t)}}const um=document.querySelector("#app");if(!um)throw new Error("App root not found.");const Zo=new Gt,As=new L,Df=new L,Bf=new ut,SE=new ut,bE=new L(0,1,0),Er=new L,jo=new L,Uf=new Bt,Tr=new Tn,ws=new L(1,1,1),Cs=new Gt,Nf=new Bt,Rs=new La,Jo=new Be,Dn=document.createElement("input");Dn.type="file";Dn.accept=".json,application/json";Dn.style.display="none";document.body.append(Dn);const EE=256,TE=15,AE=2,Ff=.0025,kf=Math.PI/2-.1,Qn="color",Of="tCube",Hl="horizonColor",wE="/voxcinder/world-editor/skyboxes/partly-cloudy",CE="/voxcinder/world-editor/maps/boilerplate.json",RE="/voxcinder/",zf=[new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href],IE="exploreMapSource",LE="mode",PE="soloMode",Ar=new pn(0,0,0,"YXZ"),Is=new L,Qo=new L,DE=50,Vf=1.02,qi=.045,Gl="world-editor-sidebar-sections",BE="world-editor-autosave",Hf=500,UE="world-editor-db",mn="autosaves",dm="view-state",fm="slots:index",pm="slots:current",Gf="default",Wf="Default Slot",NE=800,FE=500,kE=8,OE=1,zE=1,ta=2,VE=.4,Wl=56,HE=.05,GE=220,WE=12,Xf=1,qf=.8,$f=.5,Yf="worldEditorInstanceLightLevel",Kf="worldEditorInstanceSkyLight",wr="vWorldEditorInstanceLightLevel",Cr="vWorldEditorInstanceSkyLight",mm=15,XE=Math.ceil((mm+1)/It),Zf="worldEditorStaticEntityMaterialSetup",qE=36,$E=144,jf=.8,YE=new ut(Vs(180/255),Vs(180/255),Vs(180/255)),Jf=52,KE="/voxcinder/world-editor/particles/smoke.png",ZE=192,Qf=4,jE="/voxcinder/world-editor/audio/sfx/damage/hit-wood.mp3",JE=.035,QE=1,tT=1e3,eT="/voxcinder/world-editor/audio/sfx/ui/inventory-place-item.mp3",nT=.08,iT=1,sT=1e3,tp={ULTRA:{multiplier:2},HIGH:{devicePixelRatioCap:3,multiplier:1},MEDIUM:{devicePixelRatioCap:2,multiplier:1},LOW:{devicePixelRatioCap:1,multiplier:.85},POWER_SAVING:{devicePixelRatioCap:1,multiplier:.5}},Ls={ULTRA:{distance:600,fog:{enabled:!0,far:550,near:320}},HIGH:{distance:300,fog:{enabled:!0,far:300,near:160}},MEDIUM:{distance:150,fog:{enabled:!0,far:150,near:80}},LOW:{distance:75,fog:{enabled:!0,far:75,near:36}},POWER_SAVING:{distance:50,fog:{enabled:!0,far:50,near:16}}};class ep extends Oe{constructor(t){const e=Vn.clone(pe.cube.uniforms);e[Of].value=t,e[Qn]={value:new ut},super({vertexShader:pe.cube.vertexShader,fragmentShader:pe.cube.fragmentShader.replace("void main() {",`
            uniform vec3 ${Qn};
            void main() {
          `).replace("gl_FragColor = texColor;",`
            gl_FragColor = texColor;
            gl_FragColor.rgb *= ${Qn};
          `),uniforms:e,side:We,depthWrite:!1,fog:!1})}get color(){return this.uniforms[Qn].value}get map(){return this.uniforms[Of].value}}class np extends Oe{constructor(){super({vertexShader:`
        varying vec3 vDirection;

        void main() {
          vDirection = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 ${Qn};
        uniform vec3 ${Hl};
        varying vec3 vDirection;

        void main() {
          float horizonMix = smoothstep(-0.25, 0.45, vDirection.y);
          float zenithBoost = smoothstep(0.1, 1.0, vDirection.y);
          vec3 baseColor = mix(${Hl}, ${Qn}, horizonMix);
          vec3 finalColor = baseColor * 0.78 + ${Qn} * zenithBoost * 0.1;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,uniforms:{[Qn]:{value:new ut},[Hl]:{value:new ut(.42,.5,.6)}},side:We,depthWrite:!1,fog:!1})}get color(){return this.uniforms[Qn].value}}var ap;class rT{constructor(t){T(this,"container");T(this,"viewport");T(this,"renderer");T(this,"camera");T(this,"scene");T(this,"chunkLayer",new Ze);T(this,"entityLayer",new Ze);T(this,"entityAmbientLight");T(this,"buildPlane");T(this,"hoverBox");T(this,"hoverIndicatorRoot",new Ze);T(this,"crosshair");T(this,"startupLoadingOverlay");T(this,"startupLoadingSubtitle");T(this,"mobileMoveStick");T(this,"mobileMoveStickThumb");T(this,"sidebar");T(this,"sidebarToggleButton");T(this,"historyControls");T(this,"undoButton");T(this,"redoButton");T(this,"toolbelt");T(this,"toolToggleButton");T(this,"paletteContainer");T(this,"paletteFilterInput");T(this,"entityListContainer");T(this,"entityOptionsInput");T(this,"entityAddButton");T(this,"entitySaveButton");T(this,"entityDeleteButton");T(this,"exportButton");T(this,"autosaveSlotSelect");T(this,"autosaveSlotNewButton");T(this,"autosaveSlotDuplicateButton");T(this,"autosaveSlotRenameButton");T(this,"autosaveSlotDeleteButton");T(this,"autosaveSlotClearButton");T(this,"lightingAmbientInput");T(this,"fogColorInput");T(this,"skyboxIntensityInput");T(this,"resolutionPresetInput");T(this,"viewDistancePresetInput");T(this,"viewDistanceCustomInput");T(this,"templateThemeSelect");T(this,"templateSeedInput");T(this,"templateSizeInput");T(this,"templateHeightInput");T(this,"templateApplyButton");T(this,"debugPanel");T(this,"debugSummaryLine");T(this,"debugMemoryLine");T(this,"debugRenderLine");T(this,"debugSceneLine");T(this,"chunkMesherWorker");T(this,"cubeTextureLoader",new T_);T(this,"particleTextureLoader",new Op);T(this,"audioLoader",new B_);T(this,"audioListener",new z_);T(this,"gltfLoader",new qM);T(this,"chunkBatchRenderer",new hb(this.chunkLayer));T(this,"chunkMeshManager",null);T(this,"chunkBlockMaterialManager",null);T(this,"chunkRendererHost",null);T(this,"entityMeshManager");T(this,"preOcclusionChunkModes",new Map);T(this,"nextPreOcclusionChunkModes",new Map);T(this,"entityModelCache",new Map);T(this,"entityFallbackObjects",new Map);T(this,"entityRenderObjects",new Set);T(this,"deferredEntityDisposals",[]);T(this,"blockBreakEmitters",new Map);T(this,"exclusiveAudioStates",new Map);T(this,"audioBufferCache",new Map);T(this,"blockHitDustEmitter",null);T(this,"selectedEntityMarker",null);T(this,"world",new bf);T(this,"atlas",null);T(this,"atlasSnapshotCache",null);T(this,"selectedBlockTypeId",((ap=Vi[0])==null?void 0:ap.id)??1);T(this,"paletteFilter","");T(this,"hoveredPlacement",null);T(this,"hoveredBlock",null);T(this,"hoveredBlockHitPoint",null);T(this,"lastPointerEvent",null);T(this,"pointerDownEvent",null);T(this,"pointerLocked",!1);T(this,"mobileControlsEnabled",window.matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0);T(this,"mobileMoveTouchId",null);T(this,"mobileLookTouchId",null);T(this,"mobilePinchTouchIdA",null);T(this,"mobilePinchTouchIdB",null);T(this,"mobilePinchLastDistance",0);T(this,"mobileMoveStart",new Gt);T(this,"mobileMoveCurrent",new Gt);T(this,"mobileLookLast",new Gt);T(this,"mobileMoveInputX",0);T(this,"mobileMoveInputY",0);T(this,"mobileTapCandidates",new Map);T(this,"sidebarSwipeTouchId",null);T(this,"sidebarSwipeStartedOpen",!1);T(this,"sidebarSwipeStartX",0);T(this,"sidebarSwipeStartY",0);T(this,"sidebarSwipeLastX",0);T(this,"sidebarSwipeLastY",0);T(this,"mobileSidebarOpen",!1);T(this,"mobileSidebarContentVisible",!1);T(this,"debugVisible",!1);T(this,"lastDebugTouchToggleAt",0);T(this,"suppressTouchToolActions",!1);T(this,"fileName","untitled-world-map.json");T(this,"currentAutosaveSlotId",Gf);T(this,"autosaveSlots",[]);T(this,"frameCounter",0);T(this,"fps",0);T(this,"lastFpsSampleAt",performance.now());T(this,"nextWorkerRequestId",1);T(this,"nextChunkBuildGeneration",1);T(this,"activeChunkBuildGeneration",0);T(this,"pendingChunkBuildPriorities",new Map);T(this,"pendingWorkerBlockUpdates",new Map);T(this,"chunkBuildWaiters",[]);T(this,"inFlightChunkBuildIds",new Set);T(this,"inFlightChunkBuildPriorities",new Map);T(this,"deferredInteractiveChunkBuildResults",[]);T(this,"deferredBackgroundChunkBuildResults",[]);T(this,"chunkBuildRequestGenerations",new Map);T(this,"lastInteractiveChunkBuildRequestAt",-1/0);T(this,"workerSyncedChunkIds",new Set);T(this,"chunkBuildDispatchInProgress",!1);T(this,"fogColor",new ut(1,1,1));T(this,"skyboxIntensity",1);T(this,"skyboxMesh",null);T(this,"pendingSkyboxTexture",null);T(this,"spectatorPitch",.95);T(this,"spectatorYaw",.75);T(this,"pressedKeys",new Set);T(this,"lightingAmbient",1);T(this,"fogColorHex","#ffffff");T(this,"skyboxUiIntensity",1);T(this,"resolutionPreset","MEDIUM");T(this,"viewDistancePreset","MEDIUM");T(this,"viewDistanceCustomDistance",Ls.MEDIUM.distance);T(this,"currentTool","build");T(this,"undoStack",[]);T(this,"redoStack",[]);T(this,"autosaveDirtyChunkIds",new Set);T(this,"autosaveEntitiesDirty",!1);T(this,"autosaveFullWorldDirty",!0);T(this,"selectedEntityKey",null);T(this,"autosaveTimeoutId",null);T(this,"viewStateAutosaveTimeoutId",null);T(this,"handleResize",()=>{const t=this.viewport.clientWidth,e=this.viewport.clientHeight;this.camera.aspect=t/Math.max(e,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)});T(this,"handleSidebarTransitionEnd",t=>{t.target!==this.sidebar||t.propertyName!=="transform"||this.mobileSidebarOpen||this.setMobileSidebarContentVisible(!1)});T(this,"handlePointerMove",t=>{if(t.pointerType!=="touch"){if(this.pointerLocked){this.updateSpectatorRotation(t.movementX,t.movementY),this.updateHoverFromScreenCenter();return}this.lastPointerEvent=t,this.mobileControlsEnabled?this.updateHoverFromPointer(t):this.clearHover()}});T(this,"handlePointerDown",t=>{var e,n;if(t.pointerType!=="touch"){if(this.resumeAudioContext(),!this.pointerLocked&&!this.mobileControlsEnabled){(n=(e=this.renderer.domElement).requestPointerLock)==null||n.call(e),this.pointerDownEvent=null;return}this.lastPointerEvent=t,this.updateHoverFromScreenCenter(),this.pointerDownEvent=t}});T(this,"handlePointerUp",t=>{if(t.pointerType==="touch"||(this.pointerLocked?this.updateHoverFromScreenCenter():(this.lastPointerEvent=t,this.mobileControlsEnabled?this.updateHoverFromPointer(t):this.clearHover()),!this.pointerDownEvent))return;const e=Math.hypot(t.clientX-this.pointerDownEvent.clientX,t.clientY-this.pointerDownEvent.clientY),n=this.pointerDownEvent.button;this.pointerDownEvent=null,!(e>4)&&this.applyCurrentTool(n)});T(this,"handleKeyDown",t=>{const e=rp(t.code);if(this.pressedKeys.add(e),t.ctrlKey||t.metaKey){if(t.key.toLowerCase()==="z"&&!t.shiftKey){t.preventDefault(),this.undo();return}if(t.key.toLowerCase()==="y"||t.key.toLowerCase()==="z"&&t.shiftKey){t.preventDefault(),this.redo();return}}if(t.key.toLowerCase()==="g"){this.toggleDebugPanel();return}if(t.code==="Space"){t.preventDefault(),t.repeat||this.setMobileSidebarOpen(!this.mobileSidebarOpen);return}if(t.code==="KeyM"){t.preventDefault(),t.repeat||this.toggleToolMode();return}if(t.code==="Digit1"){this.setToolMode("build");return}if(t.code==="Digit2"){this.setToolMode("erase");return}});T(this,"handleKeyUp",t=>{this.pressedKeys.delete(rp(t.code))});T(this,"handleTouchStart",t=>{if(this.resumeAudioContext(),t.touches.length!==5){if(!this.mobileControlsEnabled)return;t.preventDefault();const n=this.viewport.clientWidth;for(const i of Array.from(t.changedTouches)){const s=i.clientX<n*VE?"move":"look";this.mobileTapCandidates.set(i.identifier,{zone:s,startX:i.clientX,startY:i.clientY,lastX:i.clientX,lastY:i.clientY,moved:!1,time:performance.now()}),s==="move"&&this.mobileMoveTouchId===null?(this.mobileMoveTouchId=i.identifier,this.mobileMoveStart.set(i.clientX,i.clientY),this.mobileMoveCurrent.copy(this.mobileMoveStart),this.updateMobileMoveStick()):s==="look"&&this.mobileLookTouchId===null&&(this.mobileLookTouchId=i.identifier,this.mobileLookLast.set(i.clientX,i.clientY),this.updateHoverFromClientPosition(i.clientX,i.clientY))}this.updateMobilePinchState(t.touches);return}const e=performance.now();e-this.lastDebugTouchToggleAt<NE||(this.lastDebugTouchToggleAt=e,this.cancelActiveTouchInteractions(),this.suppressTouchToolActions=!0,t.preventDefault(),t.stopPropagation(),this.toggleDebugPanel())});T(this,"handleTouchMove",t=>{if(this.mobileControlsEnabled){t.preventDefault(),this.updateMobilePinchState(t.touches);for(const e of Array.from(t.changedTouches)){const n=this.mobileTapCandidates.get(e.identifier);if(n&&(n.lastX=e.clientX,n.lastY=e.clientY,Math.hypot(e.clientX-n.startX,e.clientY-n.startY)>WE&&(n.moved=!0)),e.identifier===this.mobileMoveTouchId)this.mobileMoveCurrent.set(e.clientX,e.clientY),this.updateMobileMoveStick();else if(e.identifier===this.mobileLookTouchId){if(this.mobilePinchTouchIdA===e.identifier||this.mobilePinchTouchIdB===e.identifier){this.mobileLookLast.set(e.clientX,e.clientY);continue}this.updateSpectatorRotation(e.clientX-this.mobileLookLast.x,e.clientY-this.mobileLookLast.y),this.mobileLookLast.set(e.clientX,e.clientY),this.updateHoverFromClientPosition(e.clientX,e.clientY)}}}});T(this,"handleTouchEnd",t=>{if(this.mobileControlsEnabled){if(t.preventDefault(),this.suppressTouchToolActions){t.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(t.changedTouches);return}this.finishTouchSequence(t.changedTouches)}});T(this,"handleTouchCancel",t=>{if(this.mobileControlsEnabled){if(t.preventDefault(),this.suppressTouchToolActions){t.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(t.changedTouches);return}this.finishTouchSequence(t.changedTouches,!0)}});T(this,"handlePointerLockChange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,this.pointerLocked&&this.updateHoverFromScreenCenter()});T(this,"handleSidebarTouchStart",t=>{if(t.touches.length!==1){this.resetSidebarSwipeState();return}const e=t.touches[0];if(!this.mobileSidebarOpen){const n=this.sidebarToggleButton.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom){this.resetSidebarSwipeState();return}}this.sidebarSwipeTouchId=e.identifier,this.sidebarSwipeStartedOpen=this.mobileSidebarOpen,this.sidebarSwipeStartX=e.clientX,this.sidebarSwipeStartY=e.clientY,this.sidebarSwipeLastX=e.clientX,this.sidebarSwipeLastY=e.clientY});T(this,"handleSidebarPointerDown",t=>{if(this.mobileSidebarOpen)return;const e=this.sidebarToggleButton.getBoundingClientRect();t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom||this.setMobileSidebarOpen(!0)});T(this,"handleSidebarTouchMove",t=>{if(this.sidebarSwipeTouchId===null)return;const e=Array.from(t.changedTouches).find(s=>s.identifier===this.sidebarSwipeTouchId);if(!e)return;this.sidebarSwipeLastX=e.clientX,this.sidebarSwipeLastY=e.clientY;const n=this.sidebarSwipeLastX-this.sidebarSwipeStartX,i=this.sidebarSwipeLastY-this.sidebarSwipeStartY;Math.abs(n)>16&&Math.abs(n)>Math.abs(i)&&t.preventDefault()});T(this,"handleSidebarTouchEnd",t=>{if(this.sidebarSwipeTouchId===null)return;const e=Array.from(t.changedTouches).find(o=>o.identifier===this.sidebarSwipeTouchId);if(!e)return;const n=e.clientX-this.sidebarSwipeStartX,i=e.clientY-this.sidebarSwipeStartY,s=this.sidebarSwipeStartedOpen;if(this.resetSidebarSwipeState(),s&&n<-72&&Math.abs(n)>Math.abs(i)*1.2){this.setMobileSidebarOpen(!1);return}!s&&n>40&&Math.abs(n)>Math.abs(i)*1.2&&this.setMobileSidebarOpen(!0)});T(this,"handleSidebarTouchCancel",()=>{this.resetSidebarSwipeState()});T(this,"handleBeforeUnload",()=>{this.flushAutosave(),this.flushViewStateAutosave()});T(this,"handleChunkMesherWorkerMessage",t=>{const e=t.data;if(e.type!=="built_chunk")return;const n=this.chunkBuildRequestGenerations.get(e.requestId);if(this.chunkBuildRequestGenerations.delete(e.requestId),n!==this.activeChunkBuildGeneration){this.inFlightChunkBuildIds.delete(e.chunkId),this.inFlightChunkBuildPriorities.delete(e.chunkId),this.resolveChunkBuildWaiters();return}const i={requestId:e.requestId,chunkId:e.chunkId,geometry:e.geometry};(this.inFlightChunkBuildPriorities.get(e.chunkId)??0)>=ta?this.deferredInteractiveChunkBuildResults.push(i):this.deferredBackgroundChunkBuildResults.push(i)});T(this,"renderLoop",()=>{var n;requestAnimationFrame(this.renderLoop),this.flushQueuedWorkerBlockUpdates(),this.processChunkBuildQueueFrame(this.activeChunkBuildGeneration),this.flushDeferredChunkBuildResults();const t=this.updateSpectatorCamera(1/60);this.pointerLocked&&t&&this.updateHoverFromScreenCenter(),this.updateSkybox(),this.chunkMeshManager||this.chunkBatchRenderer.update(1/60),this.updateBlockBreakEffects(1/60),(n=this.chunkBlockMaterialManager)==null||n.update(),this.updateViewDistanceVisibility(),this.renderer.render(this.scene,this.camera),this.flushDeferredEntityDisposals(),this.frameCounter++;const e=performance.now();e-this.lastFpsSampleAt>=1e3&&(this.fps=Math.round(this.frameCounter*1e3/(e-this.lastFpsSampleAt)),this.frameCounter=0,this.lastFpsSampleAt=e,this.updateDebugPanel())});this.container=document.createElement("div"),this.container.className="app-shell",this.viewport=document.createElement("div"),this.viewport.className="viewport",this.container.append(this.viewport);const e=document.createElement("div");e.className="overlay",this.container.append(e),this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",e.append(this.crosshair),this.startupLoadingOverlay=document.createElement("div"),this.startupLoadingOverlay.className="world-editor-loading-overlay",this.startupLoadingOverlay.innerHTML=`
      <div class="world-editor-loading-panel">
        <div class="world-editor-loading-title">Loading</div>
        <div class="world-editor-loading-subtitle">
          <span class="world-editor-loading-spinner" aria-hidden="true"></span>
        </div>
      </div>
    `,this.startupLoadingSubtitle=document.createElement("span"),this.startupLoadingSubtitle.textContent="Preparing editor...",this.startupLoadingOverlay.querySelector(".world-editor-loading-subtitle").append(this.startupLoadingSubtitle),e.append(this.startupLoadingOverlay),this.mobileMoveStick=document.createElement("div"),this.mobileMoveStick.className="mobile-move-stick",this.mobileMoveStick.hidden=!0,this.mobileMoveStickThumb=document.createElement("div"),this.mobileMoveStickThumb.className="mobile-move-stick-thumb",this.mobileMoveStick.append(this.mobileMoveStickThumb),e.append(this.mobileMoveStick),this.scene=new Gg,this.scene.add(this.chunkLayer),this.scene.add(this.entityLayer),this.entityAmbientLight=new P_(new ut(16777215),1),this.scene.add(this.entityAmbientLight),this.camera=new $e(55,1,.1,1e3),this.camera.position.set(18,20,18),this.camera.rotation.order="YXZ",this.camera.add(this.audioListener),this.applySpectatorCameraOrientation(),this.renderer=new WM({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ee,this.viewport.append(this.renderer.domElement),this.chunkBatchRenderer.setFogProvider(this.createFogUniformProvider()),this.entityMeshManager=new eb({addToScene:s=>this.entityLayer.add(s),createRenderMaterial:s=>this.createEntityRenderMaterial(s),getViewDistance:()=>this.getCurrentViewDistance(),loadEntityModelTemplate:s=>this.loadEntityModelTemplate(s),removeFromScene:s=>this.entityLayer.remove(s)}),this.buildPlane=new ve(new Js(512,512),new Nn({visible:!1,side:Ge})),this.buildPlane.rotation.x=-Math.PI/2,this.buildPlane.position.y=-.5,this.scene.add(this.buildPlane),this.hoverBox=new Nc(new cd(new ei(1.01,1.01,1.01)),new ya({color:"#f5b942",transparent:!0,opacity:.95})),this.hoverBox.renderOrder=1e3,this.hoverBox.visible=!1,this.scene.add(this.hoverBox),this.hoverIndicatorRoot.add(this.createHoverFrameIndicator()),this.hoverIndicatorRoot.renderOrder=1e3,this.hoverIndicatorRoot.visible=!1,this.scene.add(this.hoverIndicatorRoot);const n=document.createElement("div");n.className="topbar",n.innerHTML=`
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
        <button class="button" data-action="explore">Explore</button>
      </div>
    `;const i=document.createElement("aside");i.className="sidebar",i.innerHTML=`
      <div class="sidebar-scroll">
      <details class="sidebar-section" data-section="world">
        <summary class="sidebar-summary">
          <span>Slot</span>
        </summary>
        <div class="sidebar-content">
          <label class="generator-field">
            <select class="generator-select" data-slot="select" aria-label="Save Slot"></select>
          </label>
          <div class="generator-grid">
            <button class="button" data-slot="new" type="button">New</button>
            <button class="button" data-slot="duplicate" type="button">Duplicate</button>
            <button class="button" data-slot="rename" type="button">Rename</button>
            <button class="button" data-slot="delete" type="button">Delete</button>
            <button class="button" data-slot="clear" type="button">Clear</button>
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
          <input class="generator-input" data-pattern="filter" type="text" name="block_filter" placeholder="Filter blocks" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" data-form-type="other" data-lpignore="true" data-1p-ignore="true" />
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
                autocomplete="off"
                inputmode="numeric"
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
              <input class="generator-input" data-generator="seed" type="number" value="1337" step="1" autocomplete="off" inputmode="numeric" />
            </label>
            <label class="generator-field">
              <span>Size</span>
              <input class="generator-input" data-generator="size" type="number" value="18" min="8" max="96" step="1" autocomplete="off" inputmode="numeric" />
            </label>
            <label class="generator-field">
              <span>Height</span>
              <input class="generator-input" data-generator="height" type="number" value="6" min="3" max="32" step="1" autocomplete="off" inputmode="numeric" />
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
            <textarea class="generator-input entity-json" data-entity="options" name="entity_json_options" rows="8" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" data-form-type="other" data-lpignore="true" data-1p-ignore="true"></textarea>
          </label>
          <button class="button primary generator-apply" data-entity="save" type="button">Save Entity</button>
        </div>
      </details>
      </div>
    `,this.sidebar=i,this.sidebarToggleButton=document.createElement("button"),this.sidebarToggleButton.type="button",this.sidebarToggleButton.className="sidebar-toggle",this.sidebarToggleButton.dataset.action="menu",this.sidebarToggleButton.setAttribute("aria-label","Toggle Menu"),this.sidebarToggleButton.title="Menu",this.sidebarToggleButton.innerHTML=`
      <span class="sidebar-toggle-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 6l6 6-6 6"></path>
        </svg>
      </span>
    `,this.sidebar.append(this.sidebarToggleButton),this.sidebar.addEventListener("transitionend",this.handleSidebarTransitionEnd),this.paletteContainer=i.querySelector('[data-pattern="palette"]'),this.paletteFilterInput=i.querySelector('[data-pattern="filter"]'),this.entityListContainer=i.querySelector('[data-entity="list"]'),this.entityOptionsInput=i.querySelector('[data-entity="options"]'),this.entityAddButton=i.querySelector('[data-entity="add"]'),this.entitySaveButton=i.querySelector('[data-entity="save"]'),this.entityDeleteButton=i.querySelector('[data-entity="delete"]'),this.exportButton=i.querySelector('[data-action="export"]'),this.autosaveSlotSelect=i.querySelector('[data-slot="select"]'),this.autosaveSlotNewButton=i.querySelector('[data-slot="new"]'),this.autosaveSlotDuplicateButton=i.querySelector('[data-slot="duplicate"]'),this.autosaveSlotRenameButton=i.querySelector('[data-slot="rename"]'),this.autosaveSlotDeleteButton=i.querySelector('[data-slot="delete"]'),this.autosaveSlotClearButton=i.querySelector('[data-slot="clear"]'),this.resolutionPresetInput=i.querySelector('[data-resolution="preset"]'),this.viewDistancePresetInput=i.querySelector('[data-view-distance="preset"]'),this.viewDistanceCustomInput=i.querySelector('[data-view-distance="custom"]'),this.lightingAmbientInput=i.querySelector('[data-lighting="ambient"]'),this.fogColorInput=i.querySelector('[data-lighting="fog-color"]'),this.skyboxIntensityInput=i.querySelector('[data-lighting="skybox-intensity"]'),this.templateThemeSelect=i.querySelector('[data-generator="theme"]'),this.templateSeedInput=i.querySelector('[data-generator="seed"]'),this.templateSizeInput=i.querySelector('[data-generator="size"]'),this.templateHeightInput=i.querySelector('[data-generator="height"]'),this.templateApplyButton=i.querySelector('[data-generator="apply"]'),this.paletteFilterInput.addEventListener("input",()=>{this.paletteFilter=this.paletteFilterInput.value.trim().toLowerCase(),this.rebuildPalette()}),this.restoreSidebarSectionState(i),this.bindSidebarSectionState(i),i.addEventListener("pointerdown",this.handleSidebarPointerDown),i.addEventListener("touchstart",this.handleSidebarTouchStart,{passive:!0}),i.addEventListener("touchmove",this.handleSidebarTouchMove,{passive:!1}),i.addEventListener("touchend",this.handleSidebarTouchEnd,{passive:!0}),i.addEventListener("touchcancel",this.handleSidebarTouchCancel,{passive:!0}),this.debugPanel=document.createElement("aside"),this.debugPanel.className="debug-panel",this.debugPanel.hidden=!0,this.debugPanel.innerHTML="<h2>Debug</h2>",this.debugSummaryLine=document.createElement("p"),this.debugMemoryLine=document.createElement("p"),this.debugRenderLine=document.createElement("p"),this.debugSceneLine=document.createElement("p"),this.debugPanel.append(this.debugSummaryLine,this.debugMemoryLine,this.debugRenderLine,this.debugSceneLine),this.historyControls=document.createElement("div"),this.historyControls.className="history-controls",this.historyControls.innerHTML=`
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
    `,this.toolToggleButton=this.toolbelt.querySelector("[data-tool-toggle]"),this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(this.currentTool)),this.toolToggleButton.title=this.getToolLabel(this.currentTool),e.append(n,i,this.debugPanel,this.historyControls,this.toolbelt),t.append(this.container),this.chunkMesherWorker=new Worker(new URL("/voxcinder/world-editor/assets/chunkMesherWorker-DTBiahQx.js",import.meta.url),{type:"module"}),this.chunkMesherWorker.addEventListener("message",this.handleChunkMesherWorkerMessage),n.addEventListener("click",s=>{this.handleUiAction(s.target,Dn)}),i.addEventListener("click",s=>{this.handleUiAction(s.target,Dn)}),this.historyControls.addEventListener("click",s=>{this.handleUiAction(s.target,Dn)}),Dn.addEventListener("change",()=>{var o;const s=(o=Dn.files)==null?void 0:o[0];s&&this.importMap(s),Dn.value=""}),this.toolbelt.addEventListener("click",s=>{s.target.closest("[data-tool-toggle]")&&this.toggleToolMode()}),this.templateThemeSelect.addEventListener("change",()=>this.syncTemplateInputsToTheme()),this.templateApplyButton.addEventListener("click",()=>{this.applyThemeTemplate()}),this.autosaveSlotSelect.addEventListener("change",()=>{this.handleAutosaveSlotSelectionChange()}),this.autosaveSlotNewButton.addEventListener("click",()=>{this.createAutosaveSlotFromDefaultWorld()}),this.autosaveSlotDuplicateButton.addEventListener("click",()=>{this.duplicateCurrentAutosaveSlot()}),this.autosaveSlotRenameButton.addEventListener("click",()=>{this.renameCurrentAutosaveSlot()}),this.autosaveSlotDeleteButton.addEventListener("click",()=>{this.deleteCurrentAutosaveSlot()}),this.autosaveSlotClearButton.addEventListener("click",()=>{this.clearCurrentAutosaveSlot()}),this.entityAddButton.addEventListener("click",()=>{this.addEntityAtHover()}),this.entitySaveButton.addEventListener("click",()=>{this.saveSelectedEntity()}),this.entityDeleteButton.addEventListener("click",()=>{this.deleteSelectedEntity()}),this.resolutionPresetInput.addEventListener("change",()=>this.handleResolutionChange()),this.viewDistancePresetInput.addEventListener("change",()=>this.handleViewDistanceChange()),this.viewDistanceCustomInput.addEventListener("input",()=>this.handleViewDistanceChange()),this.lightingAmbientInput.addEventListener("input",()=>this.handleLightingChange()),this.fogColorInput.addEventListener("input",()=>this.handleLightingChange()),this.skyboxIntensityInput.addEventListener("input",()=>this.handleLightingChange()),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),this.renderer.domElement.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),this.renderer.domElement.addEventListener("touchend",this.handleTouchEnd,{passive:!1}),this.renderer.domElement.addEventListener("touchcancel",this.handleTouchCancel,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",s=>s.preventDefault()),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("beforeunload",this.handleBeforeUnload),document.addEventListener("pointerlockchange",this.handlePointerLockChange),this.handleResize(),this.loadSkybox(wE),this.populateTemplateThemeOptions(),this.syncResolutionInputs(),this.syncViewDistanceInputs(),this.applyResolutionSettings(),this.applyViewDistanceSettings(),this.applyLightingSettings(),this.initializeWorld(),this.updateDebugPanel(),this.renderLoop()}async initializeWorld(){this.setStartupLoadingState("Restoring view...");try{await this.restoreAutosavedViewState(),this.setStartupLoadingState("Checking save slots..."),await this.initializeAutosaveSlots(),this.setStartupLoadingState("Checking autosave...");const t=await this.getRestorableAutosavePayload(this.currentAutosaveSlotId);if(t)this.hideStartupLoadingOverlay(),await this.applyAutosavedWorldPayload(t,!1);else{this.setStartupLoadingState("Downloading world...");const e=await this.loadDefaultWorldMapPayload();this.hideStartupLoadingOverlay(),await this.applyDefaultWorldMapPayload(e,!1)}}finally{this.startupLoadingOverlay.hidden||this.hideStartupLoadingOverlay()}}setStartupLoadingState(t){this.startupLoadingSubtitle.textContent=t,this.startupLoadingOverlay.hidden=!1}hideStartupLoadingOverlay(){this.startupLoadingOverlay.hidden=!0}async initializeAutosaveSlots(){const t=await hT();if(t.length===0){const i=ip(Gf,Wf);this.autosaveSlots=[i],await Rr(this.autosaveSlots),await Ir(i.id),this.currentAutosaveSlotId=i.id,this.syncAutosaveSlotControls();return}this.autosaveSlots=t;const e=await uT(),n=this.autosaveSlots.find(i=>i.id===e)??this.autosaveSlots[0];this.currentAutosaveSlotId=n.id,await Ir(n.id),this.syncAutosaveSlotControls()}syncAutosaveSlotControls(){this.autosaveSlotSelect.replaceChildren();for(const e of this.autosaveSlots){const n=document.createElement("option");n.value=e.id,n.textContent=e.name,n.selected=e.id===this.currentAutosaveSlotId,this.autosaveSlotSelect.append(n)}const t=this.autosaveSlots.length>1;this.autosaveSlotDeleteButton.disabled=!t,this.autosaveSlotDeleteButton.title=t?"Delete current slot":"At least one slot is required"}async handleAutosaveSlotSelectionChange(){const t=this.autosaveSlotSelect.value;if(!t||t===this.currentAutosaveSlotId){this.syncAutosaveSlotControls();return}await this.flushAutosave(),this.currentAutosaveSlotId=t,await Ir(this.currentAutosaveSlotId),this.syncAutosaveSlotControls();const e=await this.getRestorableAutosavePayload(this.currentAutosaveSlotId);if(e){await this.applyAutosavedWorldPayload(e,!1),this.updateStatus(`Loaded save slot "${this.getCurrentAutosaveSlotName()}".`);return}await this.loadDefaultWorldMap(!1),this.updateStatus(`Created default world in slot "${this.getCurrentAutosaveSlotName()}".`)}async createAutosaveSlot(t){const e=ip(lT(),t);return this.autosaveSlots=[...this.autosaveSlots,e],this.currentAutosaveSlotId=e.id,await Rr(this.autosaveSlots),await Ir(this.currentAutosaveSlotId),this.syncAutosaveSlotControls(),e}async createAutosaveSlotFromDefaultWorld(){const t=`Slot ${this.autosaveSlots.length+1}`,e=window.prompt("New save slot name",t);if(e===null)return;const n=e.trim()||t;await this.flushAutosave();const i=await this.createAutosaveSlot(n);await this.loadDefaultWorldMap(!1),this.updateStatus(`Created save slot "${i.name}" with the default world.`)}async duplicateCurrentAutosaveSlot(){const t=this.getNextDuplicatedAutosaveSlotName();await this.flushAutosave();const e=await this.createAutosaveSlot(t);this.markFullWorldAutosaveDirty(),await this.flushAutosave(),this.updateStatus(`Duplicated save slot into "${e.name}".`)}getNextDuplicatedAutosaveSlotName(){const t=`${this.getCurrentAutosaveSlotName()} Copy`,e=new Set(this.autosaveSlots.map(i=>i.name));if(!e.has(t))return t;let n=2;for(;e.has(`${t} ${n}`);)n+=1;return`${t} ${n}`}async renameCurrentAutosaveSlot(){const t=this.autosaveSlots.find(i=>i.id===this.currentAutosaveSlotId);if(!t)return;const e=window.prompt("Rename save slot",t.name);if(e===null)return;const n=e.trim()||t.name;if(n===t.name){this.syncAutosaveSlotControls();return}this.autosaveSlots=this.autosaveSlots.map(i=>i.id===t.id?{...i,name:n}:i),await Rr(this.autosaveSlots),this.syncAutosaveSlotControls(),this.updateStatus(`Renamed save slot to "${n}".`)}async deleteCurrentAutosaveSlot(){const t=this.autosaveSlots.find(o=>o.id===this.currentAutosaveSlotId);if(!t)return;if(this.autosaveSlots.length<=1){this.updateStatus("At least one save slot is required."),this.syncAutosaveSlotControls();return}if(!window.confirm(`Delete save slot "${t.name}"?`)){this.syncAutosaveSlotControls();return}const n=this.autosaveSlots.findIndex(o=>o.id===t.id),i=this.autosaveSlots[n+1]??this.autosaveSlots[n-1];this.autosaveSlots=this.autosaveSlots.filter(o=>o.id!==t.id),await Th(t.id),this.currentAutosaveSlotId=i.id,await Rr(this.autosaveSlots),await Ir(this.currentAutosaveSlotId),this.syncAutosaveSlotControls();const s=await this.getRestorableAutosavePayload(this.currentAutosaveSlotId);s?await this.applyAutosavedWorldPayload(s,!1):await this.loadDefaultWorldMap(!1),this.updateStatus(`Deleted save slot "${t.name}".`)}async clearCurrentAutosaveSlot(){const t=this.getCurrentAutosaveSlotName();window.confirm(`Clear save slot "${t}" and replace it with an empty map?`)&&(await this.resetToEmptyMap(!1),this.updateStatus(`Cleared save slot "${t}".`))}getCurrentAutosaveSlotName(){var t;return((t=this.autosaveSlots.find(e=>e.id===this.currentAutosaveSlotId))==null?void 0:t.name)??Wf}setMobileSidebarOpen(t,e=!0){this.mobileSidebarOpen!==t&&(t&&this.setMobileSidebarContentVisible(!0),this.mobileSidebarOpen=t,this.container.classList.toggle("mobile-sidebar-open",this.mobileSidebarOpen),this.sidebarToggleButton.setAttribute("aria-expanded",String(this.mobileSidebarOpen)),this.resetSidebarSwipeState(),e&&this.scheduleViewStateAutosave())}setMobileSidebarContentVisible(t){this.mobileSidebarContentVisible!==t&&(this.mobileSidebarContentVisible=t,this.container.classList.toggle("mobile-sidebar-content-visible",this.mobileSidebarContentVisible))}handleUiAction(t,e){var i;const n=(i=t.closest("[data-action]"))==null?void 0:i.dataset.action;if(n){if(n==="menu"){this.setMobileSidebarOpen(!this.mobileSidebarOpen);return}n==="undo"?this.undo():n==="redo"?this.redo():n==="import"?e.click():n==="export"?this.exportMap():n==="explore"&&this.openExploreMode()}}async finishTouchSequence(t,e=!1){for(const n of Array.from(t)){const i=this.mobileTapCandidates.get(n.identifier);if(this.mobileTapCandidates.delete(n.identifier),n.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),n.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null),(n.identifier===this.mobilePinchTouchIdA||n.identifier===this.mobilePinchTouchIdB)&&(this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0),!i||e)continue;const s=performance.now()-i.time;i.moved||s>GE||(this.updateHoverFromClientPosition(i.lastX,i.lastY),await this.applyCurrentTool(0))}}cancelActiveTouchInteractions(){this.mobileTapCandidates.clear(),this.mobileLookTouchId=null,this.mobileMoveTouchId=null,this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0}cancelEndedTouchControls(t){for(const e of Array.from(t))this.mobileTapCandidates.delete(e.identifier),e.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),e.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null),(e.identifier===this.mobilePinchTouchIdA||e.identifier===this.mobilePinchTouchIdB)&&(this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0)}updateMobilePinchState(t){const e=Array.from(t);if(e.length!==2){this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0;return}const n=this.mobileTapCandidates.get(e[0].identifier),i=this.mobileTapCandidates.get(e[1].identifier);if((n==null?void 0:n.zone)!=="look"||(i==null?void 0:i.zone)!=="look"){this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0;return}const s=e[0].clientX-e[1].clientX,o=e[0].clientY-e[1].clientY,a=Math.hypot(s,o);if(this.mobilePinchTouchIdA!==e[0].identifier||this.mobilePinchTouchIdB!==e[1].identifier){this.mobilePinchTouchIdA=e[0].identifier,this.mobilePinchTouchIdB=e[1].identifier,this.mobilePinchLastDistance=a;return}const l=a-this.mobilePinchLastDistance;this.mobilePinchLastDistance=a,!(Math.abs(l)<.5)&&(Ar.copy(this.camera.rotation),Is.set(0,0,-1).applyEuler(Ar),this.camera.position.addScaledVector(Is,l*HE),this.scheduleViewStateAutosave(),this.updateHoverFromScreenCenter())}updateMobileMoveStick(){if(this.mobileMoveTouchId===null){this.mobileMoveStick.hidden=!0,this.mobileMoveInputX=0,this.mobileMoveInputY=0;return}const t=this.mobileMoveCurrent.x-this.mobileMoveStart.x,e=this.mobileMoveCurrent.y-this.mobileMoveStart.y,n=Math.hypot(t,e),i=Math.min(n,Wl),s=n>0?t/n:0,o=n>0?e/n:0,a=s*i,l=o*i;this.mobileMoveInputX=s*(i/Wl),this.mobileMoveInputY=o*(i/Wl),this.mobileMoveStick.hidden=!1,this.mobileMoveStick.style.left=`${this.mobileMoveStart.x}px`,this.mobileMoveStick.style.top=`${this.mobileMoveStart.y}px`,this.mobileMoveStickThumb.style.transform=`translate(${a}px, ${l}px)`}resetSidebarSwipeState(){this.sidebarSwipeTouchId=null,this.sidebarSwipeStartedOpen=!1,this.sidebarSwipeStartX=0,this.sidebarSwipeStartY=0,this.sidebarSwipeLastX=0,this.sidebarSwipeLastY=0}toggleDebugPanel(){this.debugVisible=!this.debugVisible,this.debugPanel.hidden=!this.debugVisible,this.updateStatus(this.debugVisible?"Debug mode enabled.":"Debug mode disabled."),this.updateDebugPanel()}async resetToEmptyMap(t=!0){var e;this.world.load({},Vi),this.selectedBlockTypeId=((e=this.world.blockTypes[0])==null?void 0:e.id)??1,this.fileName="untitled-world-map.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),t?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus("Started a new empty world map.")}async loadDefaultWorldMap(t=!0){try{const e=await this.loadDefaultWorldMapPayload();await this.applyDefaultWorldMapPayload(e,t)}catch(e){console.error(e),await this.resetToEmptyMap(t),this.updateStatus(`Default world map load failed: ${e.message}`)}}async loadDefaultWorldMapPayload(){const t=await fetch(CE,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load default map: ${t.status} ${t.statusText}`);return await t.json()}async applyDefaultWorldMapPayload(t,e){var n;this.world.load(t,Vi),this.selectedBlockTypeId=((n=this.world.blockTypes[0])==null?void 0:n.id)??this.selectedBlockTypeId,this.fileName="boilerplate.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),e?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),e?await this.flushAutosave():this.flushAutosave(),this.updateStatus("Loaded default world map.")}populateTemplateThemeOptions(){this.templateThemeSelect.replaceChildren();for(const t of zl){const e=document.createElement("option");e.value=t.id,e.textContent=t.label,this.templateThemeSelect.append(e)}this.syncTemplateInputsToTheme()}syncTemplateInputsToTheme(){const t=zl.find(e=>e.id===this.templateThemeSelect.value);t&&(this.templateSizeInput.value=String(t.defaultSize),this.templateHeightInput.value=String(t.defaultHeight))}async importMap(t){var e;try{const n=JSON.parse(await t.text());this.world.load(n,Vi),this.selectedBlockTypeId=((e=this.world.blockTypes[0])==null?void 0:e.id)??this.selectedBlockTypeId,this.fileName=t.name,this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Imported ${t.name}.`)}catch(n){console.error(n),this.updateStatus(`Import failed: ${n.message}`)}}async exportMap(){this.setExportButtonBusy(!0);try{await new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})});const t=this.world.toJson(),e=new Blob([`${JSON.stringify(t,null,2)}
`],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=this.fileName.endsWith(".json")?this.fileName:`${this.fileName}.json`,n.click(),URL.revokeObjectURL(n.href),this.updateStatus(`Exported ${n.download}.`)}finally{this.setExportButtonBusy(!1)}}setExportButtonBusy(t){this.exportButton.disabled=t,this.exportButton.classList.toggle("button-busy",t),this.exportButton.setAttribute("aria-busy",String(t)),this.exportButton.innerHTML=t?'Export <span class="button-busy-spinner" aria-hidden="true"></span>':"Export"}async applyThemeTemplate(){const t=this.templateThemeSelect.value||"arena",e=zl.find(l=>l.id===t);if(!e){this.updateStatus(`Unknown template theme "${t}".`);return}const n=this.getCurrentBlockTypeDefinitions(),i=this.resolveTemplateBlockIds(n),s=kb({theme:t,seed:Number(this.templateSeedInput.value)||0,size:Number(this.templateSizeInput.value)||e.defaultSize,height:Number(this.templateHeightInput.value)||e.defaultHeight},i),o=this.world.toSnapshot();this.world.load({blockTypes:n,blocks:s.blocks},n);const a=this.world.toSnapshot();this.pushSnapshotUndoState(`Generate ${e.label}`,o,a),this.markFullWorldAutosaveDirty(),this.fileName=`generated-${t}.json`,this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Generated ${e.label.toLowerCase()} template with seed ${this.templateSeedInput.value||"0"}.`)}rebuildPalette(){var n;const t=this.sidebar.scrollTop,e=this.paletteContainer.scrollTop;this.paletteContainer.replaceChildren(),this.paletteFilterInput.value=this.paletteFilter;for(const i of this.world.blockTypes){if(this.paletteFilter&&!i.name.toLowerCase().includes(this.paletteFilter))continue;const s=document.createElement("button");s.type="button",s.className="palette-button",i.id===this.selectedBlockTypeId&&s.classList.add("active"),s.innerHTML=`
        <span class="texture-fallback">IMG</span>
        <span class="palette-meta">
          <strong>${i.name}</strong>
          <span>ID ${i.id}</span>
        </span>
      `;const o=document.createElement("img");o.src=i.textureUris.top,o.alt=i.name,(n=s.querySelector(".texture-fallback"))==null||n.replaceWith(o),s.addEventListener("click",()=>{this.selectedBlockTypeId=i.id,this.syncPaletteSelection(),this.updateStatus(`Pattern set to "${i.name}".`)}),this.paletteContainer.append(s)}this.sidebar.scrollTop=t,this.paletteContainer.scrollTop=e}syncPaletteSelection(){var e,n;const t=(e=this.world.blockTypes.find(i=>i.id===this.selectedBlockTypeId))==null?void 0:e.name;for(const i of Array.from(this.paletteContainer.children)){if(!(i instanceof HTMLButtonElement))continue;const s=(n=i.querySelector(".palette-meta strong"))==null?void 0:n.textContent;i.classList.toggle("active",s===t)}}rebuildEntitiesUi(){this.entityListContainer.replaceChildren();const t=this.world.entities,e=Object.keys(t).sort();for(const n of e){const i=document.createElement("button");i.type="button",i.className="palette-button",n===this.selectedEntityKey&&i.classList.add("active"),i.innerHTML=`
        <span class="texture-fallback">ENT</span>
        <span class="palette-meta">
          <strong>${this.getEntityLabel(t[n])}</strong>
          <span>${n}</span>
        </span>
      `,i.addEventListener("click",()=>{this.selectedEntityKey=n,this.entityOptionsInput.value=JSON.stringify(t[n],null,2),this.rebuildEntitiesUi(),this.refreshSelectedEntityMarker()}),this.entityListContainer.append(i)}(!this.selectedEntityKey||!(this.selectedEntityKey in t))&&(this.selectedEntityKey=e[0]??null),this.entityOptionsInput.value=this.selectedEntityKey?JSON.stringify(t[this.selectedEntityKey],null,2):"{}",this.refreshSelectedEntityMarker()}async rebuildAllChunkMeshes(){const t=++this.nextChunkBuildGeneration;this.activeChunkBuildGeneration=t,this.pendingChunkBuildPriorities.clear(),this.chunkBuildWaiters=[],this.inFlightChunkBuildIds.clear(),this.inFlightChunkBuildPriorities.clear(),this.chunkBuildRequestGenerations.clear(),this.workerSyncedChunkIds.clear(),this.chunkBuildDispatchInProgress=!1,this.disposeAllChunkMeshes(),this.atlas=await uu.create(this.world.blockTypes),this.atlasSnapshotCache=this.atlas.toSnapshot(),this.chunkBatchRenderer.setAtlas(null),this.chunkRendererHost={addToScene:e=>this.chunkLayer.add(e),ambientLight:this.entityAmbientLight,removeFromScene:e=>this.chunkLayer.remove(e),fogColor:this.fogColor,fogEnabled:this.getViewDistanceConfig().fog.enabled,fogFar:this.getViewDistanceConfig().fog.far,fogNear:this.getViewDistanceConfig().fog.near,webGLRenderer:this.renderer},this.chunkBlockMaterialManager=new VS({renderer:this.chunkRendererHost},this.atlas.texture),this.chunkMeshManager=new jS({blockMaterialManager:this.chunkBlockMaterialManager,renderer:this.chunkRendererHost}),await this.initializeChunkMesherWorkerWorld(),this.rebuildEntityMarkers(),this.queueChunkBuilds(this.getChunkIdsSortedByDistanceToCamera(this.world.chunkIds),zE,t),this.lastPointerEvent?this.updateHoverFromPointer(this.lastPointerEvent):this.pointerLocked&&this.updateHoverFromScreenCenter()}createHoverFrameIndicator(){const t=new Ze,e=new Nn({color:"#f5b942",transparent:!0,opacity:.95,depthWrite:!1}),i=Vf/2-qi/2,s=Vf,o=(a,l,c,h,u,d)=>{const f=new ve(new ei(a,l,c),e.clone());f.renderOrder=1e3,f.position.set(h,u,d),f.matrixAutoUpdate=!1,f.updateMatrix(),t.add(f)};for(const a of[-i,i])for(const l of[-i,i])o(s,qi,qi,0,a,l);for(const a of[-i,i])for(const l of[-i,i])o(qi,s,qi,a,0,l);for(const a of[-i,i])for(const l of[-i,i])o(qi,qi,s,a,l,0);return t}disposeAllChunkMeshes(){var t;(t=this.chunkMeshManager)==null||t.clear(),this.chunkMeshManager=null,this.chunkBlockMaterialManager=null,this.chunkRendererHost=null,this.chunkBatchRenderer.clear(),this.chunkBatchRenderer.setAtlas(null)}async rebuildEntityMarkers(){this.disposeSelectedEntityMarker();for(const i of[...this.entityRenderObjects])this.disposeEntityRenderObject(i);this.entityFallbackObjects.clear(),this.entityRenderObjects.clear(),this.entityMeshManager.clear();const t=Object.entries(this.world.entities),e=[];for(const[i,s]of t){const o=Ps(i);if(!o)continue;const a=this.buildStaticEntityDescriptor(i,s);if(a){e.push(a);continue}this.addFallbackEntityObject({key:i,position:o,options:s})}const n=await this.entityMeshManager.replaceAll(e);for(const i of e){if(!n.has(i.key))continue;const s=Ps(i.key),o=this.world.entities[i.key];s&&o&&this.addFallbackEntityObject({key:i.key,position:s,options:o})}this.refreshSelectedEntityMarker()}addFallbackEntityObject(t){const e=new Ze;e.position.set(t.position.x,t.position.y,t.position.z),e.userData.entityKey=t.key,e.userData.entityOptions=t.options,e.userData.visibilityRadius=1,e.add(this.createEntityMarker("#8b5cf6")),this.entityFallbackObjects.set(t.key,e),this.entityRenderObjects.add(e),this.entityLayer.add(e)}disposeEntityRenderObject(t){this.entityRenderObjects.delete(t),t.parent&&t.parent.remove(t),this.queueEntityRenderObjectDisposal(t)}async syncEntityMarkersForKeys(t,e){for(const n of t){const i=this.world.entities[n];this.entityMeshManager.removeEntity(n);const s=this.entityFallbackObjects.get(n);if(s&&(this.disposeEntityRenderObject(s),this.entityFallbackObjects.delete(n)),!i)continue;const o=this.buildStaticEntityDescriptor(n,i);if(o){if(!await this.entityMeshManager.upsertEntity(o)){const c=Ps(n);c&&this.addFallbackEntityObject({key:n,position:c,options:i})}continue}const a=Ps(n);a&&this.addFallbackEntityObject({key:n,position:a,options:i})}this.refreshSelectedEntityMarker()}buildStaticEntityDescriptor(t,e){const n=this.getEntityModelUri(e),i=Ps(t);if(!n||!i)return null;const s=this.getEntityGlobalCoordinate(i);return Uf.compose(new L(i.x,i.y,i.z),vT(e),yT(e)),{chunkId:Zt.globalCoordinateToChunkId(s),key:t,lightLevel:this.getEntityLightLevel(i),modelUri:this.resolveEntityModelUri(n),skyLight:this.getEntitySkyLight(i),tintColor:xT(e),worldMatrix:Uf.clone()}}buildStaticEntityLightingDescriptor(t){const e=this.world.entities[t],n=e?this.buildStaticEntityDescriptor(t,e):null;return n?{chunkId:n.chunkId,lightLevel:n.lightLevel,skyLight:n.skyLight}:null}refreshSelectedEntityMarker(){if(this.disposeSelectedEntityMarker(),!this.selectedEntityKey)return;const t=Ps(this.selectedEntityKey);if(!t)return;const e=this.createEntityMarker("#ff8a65");e.position.set(t.x,t.y,t.z),e.renderOrder=1001,e.userData.visibilityRadius=1,this.selectedEntityMarker=e,this.entityRenderObjects.add(e),this.entityLayer.add(e)}disposeSelectedEntityMarker(){this.selectedEntityMarker&&(this.entityRenderObjects.delete(this.selectedEntityMarker),this.entityLayer.remove(this.selectedEntityMarker),this.queueEntityRenderObjectDisposal(this.selectedEntityMarker),this.selectedEntityMarker=null)}queueEntityRenderObjectDisposal(t){t.traverse(e=>{const n=e.geometry,i=e.material;if(n&&this.deferredEntityDisposals.push(()=>{n.dispose()}),Array.isArray(i))for(const s of i)this.deferredEntityDisposals.push(()=>{s.dispose()});else i&&this.deferredEntityDisposals.push(()=>{i.dispose()})})}flushDeferredEntityDisposals(){if(this.deferredEntityDisposals.length!==0){for(const t of this.deferredEntityDisposals)t();this.deferredEntityDisposals.length=0}}createEntityMarker(t){const e=new cd(new ei(.6,1.2,.6)),n=new ya({color:t,transparent:!0,opacity:.95}),i=new Nc(e,n);return i.renderOrder=1e3,i}handleLightingChange(){this.lightingAmbient=Number(this.lightingAmbientInput.value),this.fogColorHex=this.fogColorInput.value||"#ffffff",this.skyboxUiIntensity=Number(this.skyboxIntensityInput.value),this.applyLightingSettings(),this.scheduleViewStateAutosave()}handleResolutionChange(){const t=this.resolutionPresetInput.value;this.resolutionPreset=t in tp?t:"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.scheduleViewStateAutosave()}handleViewDistanceChange(){const t=this.viewDistancePresetInput.value;this.viewDistancePreset=t in Ls||t==="CUSTOM"?t:"HIGH",this.viewDistanceCustomDistance=Math.max(1,Math.round(Number(this.viewDistanceCustomInput.value)||Ls.HIGH.distance)),this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.scheduleViewStateAutosave()}syncLightingInputs(){this.lightingAmbientInput.value=String(this.lightingAmbient),this.fogColorInput.value=this.fogColorHex,this.skyboxIntensityInput.value=String(this.skyboxUiIntensity)}syncResolutionInputs(){this.resolutionPresetInput.value=this.resolutionPreset}getEffectivePixelRatio(t,e){return(e===void 0?window.devicePixelRatio:Math.min(window.devicePixelRatio,e))*t}applyResolutionSettings(){const t=tp[this.resolutionPreset];this.renderer.setPixelRatio(this.getEffectivePixelRatio(t.multiplier,t.devicePixelRatioCap)),this.handleResize()}syncViewDistanceInputs(){if(this.viewDistancePresetInput.value=this.viewDistancePreset,this.viewDistancePreset==="CUSTOM"){this.viewDistanceCustomInput.value=String(this.viewDistanceCustomDistance),this.viewDistanceCustomInput.disabled=!1;return}this.viewDistanceCustomInput.value=String(Ls[this.viewDistancePreset].distance),this.viewDistanceCustomInput.disabled=!0}getViewDistanceConfig(){if(this.viewDistancePreset!=="CUSTOM")return Ls[this.viewDistancePreset];const t=Math.max(1,this.viewDistanceCustomDistance),e=Math.min(t,Math.max(16,Math.round(t*(160/300))));return{distance:t,fog:{enabled:!0,far:t,near:e}}}getCurrentViewDistance(){const t=this.getViewDistanceConfig();return t.fog.enabled?t.fog.far:t.distance}getCurrentLodTransitionDistance(){const t=this.getViewDistanceConfig();return t.fog.enabled?Math.min(t.fog.far,t.fog.near+(t.fog.far-t.fog.near)*.5):t.distance}createFogUniformProvider(){return{color:()=>this.fogColor,enabled:()=>this.getViewDistanceConfig().fog.enabled,far:()=>this.getViewDistanceConfig().fog.far,near:()=>this.getViewDistanceConfig().fog.near}}applyViewDistanceSettings(){this.chunkRendererHost&&(this.chunkRendererHost.fogEnabled=this.getViewDistanceConfig().fog.enabled,this.chunkRendererHost.fogFar=this.getViewDistanceConfig().fog.far,this.chunkRendererHost.fogNear=this.getViewDistanceConfig().fog.near),this.updateViewDistanceVisibility()}applyLightingSettings(){this.chunkBlockMaterialManager||(this.chunkBatchRenderer.setAmbientColor(this.entityAmbientLight.color),this.chunkBatchRenderer.setAmbientIntensity(this.lightingAmbient)),this.entityAmbientLight.intensity=this.lightingAmbient,this.fogColor.set(this.fogColorHex).convertSRGBToLinear(),this.skyboxIntensity=this.skyboxUiIntensity,this.skyboxMesh&&this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor())}getEntityGlobalCoordinate(t){return{x:Math.floor(t.x),y:Math.floor(t.y),z:Math.floor(t.z)}}getEntityLightLevel(t){const e=this.getEntityGlobalCoordinate(t),n=this.world.getLightSourcesNear(e,XE);let i=0;for(const s of n){const o=e.x-s.position.x+.5,a=e.y-s.position.y+.5,l=e.z-s.position.z+.5;if(o>s.level||o<-s.level||a>s.level||a<-s.level||l>s.level||l<-s.level)continue;const c=o*o+a*a+l*l,h=s.level*s.level;if(c>=h)continue;const u=s.level-Math.sqrt(c);u>i&&(i=u)}return Math.max(0,Math.min(1,i/mm))}getEntitySkyLight(t){const e=this.getEntityGlobalCoordinate(t);let n=Bs;for(let s=Bs;s>=0;s--){const o=this.getEntitySkyOpacityUp({x:e.x,y:e.y+s,z:e.z});o!==void 0?n=o+n*(1-o):n=Math.min(Bs,n+1)}const i=Math.max(1,Math.min(Bs,Math.round(n)));return Sb[i]}getEntitySkyOpacityUp(t){if(!this.atlas)return;const e=this.world.getBlockType(t);if(!e||e.isLiquid)return;const n=this.getEntityBlockOpacity(e);return e.trimeshOcclusionProfile?this.getEntityTrimeshSkyOpacity(e,this.world.getBlockRotation(t))*n:n}getEntityBlockOpacity(t){let e=0;for(const i of _f)e+=this.atlas.getFaceUvs(t,i).transparencyRatio;const n=e/_f.length;return Math.max(0,Math.min(1,1-n))}getEntityTrimeshSkyOpacity(t,e){const n=t.trimeshOcclusionProfile;if(!n)return 1;const i=xf[e]??xf[0],s=i[3],o=i[5];return Math.abs(s)>.5?n.skyOpacityX:Math.abs(o)>.5?n.skyOpacityZ:n.skyOpacityUp}updateEntityLighting(t){this.entityMeshManager.updateLighting(e=>this.buildStaticEntityLightingDescriptor(e),t?new Set(t):void 0)}getCurrentSkyboxDisplayColor(){const t=this.getViewDistanceConfig();if(!t.fog.enabled)return Bf.copy(this.fogColor).multiplyScalar(this.skyboxIntensity);const n=Math.max(0,Math.min(1,1-t.fog.near/100)),i=t.fog.far-t.fog.near,o=Math.max(1,100/Math.max(i,1)),a=Math.min(1,n*o);return Bf.copy(SE.setRGB(1,1,1).lerp(this.fogColor,a)).multiplyScalar(this.skyboxIntensity)}restoreSidebarSectionState(t){let e={};try{e=JSON.parse(localStorage.getItem(Gl)??"{}")}catch{e={}}for(const n of t.querySelectorAll(".sidebar-section[data-section]")){const i=n.dataset.section;i&&(n.open=e[i]===!0)}}bindSidebarSectionState(t){for(const e of t.querySelectorAll(".sidebar-section[data-section]"))e.addEventListener("toggle",()=>{const n=e.dataset.section;if(!n)return;let i={};try{i=JSON.parse(localStorage.getItem(Gl)??"{}")}catch{i={}}i[n]=e.open,localStorage.setItem(Gl,JSON.stringify(i))})}createEntityRenderMaterial(t){const e=Array.isArray(t)?t[0]:t,n=e,i=new Ub({color:n.color??new ut(16777215),map:n.map??null,alphaMap:n.alphaMap??null,alphaTest:n.alphaTest??0,transparent:e.transparent,opacity:e.opacity,side:e.side,depthWrite:e.depthWrite,depthTest:e.depthTest,emissive:n.emissive??new ut(0),emissiveIntensity:n.emissiveIntensity??1,emissiveMap:n.emissiveMap??null,fogUniformProvider:this.createFogUniformProvider()});return i.name=`${e.name||"entity"}-editor`,this.ensureEntityMaterialSetup(i),i}ensureEntityMaterialSetup(t){if(t.userData[Zf])return;const e=this;t.addShaderProcessor(n=>{n.uniforms.worldEditorAmbientLightColor={value:this.entityAmbientLight.color},n.uniforms.worldEditorAmbientLightIntensity={get value(){return e.entityAmbientLight.intensity}},n.vertexShader=n.vertexShader.replace("void main() {",`
            #ifdef USE_INSTANCING
              attribute float ${Yf};
              attribute float ${Kf};
            #endif
            varying float ${wr};
            varying float ${Cr};
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
              ${wr} = 0.0;
              ${Cr} = 1.0;
          `).replace("#include <uv_vertex>",`
            #include <uv_vertex>
            #ifdef USE_INSTANCING
              ${wr} = ${Yf};
              ${Cr} = ${Kf};
            #endif
            mat4 worldEditorInstanceWorldMatrix = modelMatrix;
            #ifdef USE_INSTANCING
              worldEditorInstanceWorldMatrix = modelMatrix * instanceMatrix;
            #endif
            worldEditorWorldNormalY = worldEditorGetWorldNormalY(normal, worldEditorInstanceWorldMatrix);
          `),n.fragmentShader=n.fragmentShader.replace("void main() {",`
            varying float ${wr};
            varying float ${Cr};
            varying float worldEditorWorldNormalY;
            uniform vec3 worldEditorAmbientLightColor;
            uniform float worldEditorAmbientLightIntensity;

            void main() {
          `).replace("#include <opaque_fragment>",`
            vec3 ambientLight = worldEditorAmbientLightColor * worldEditorAmbientLightIntensity;
            vec3 blockLight = worldEditorAmbientLightColor * ${wr};
            float normalY = gl_FrontFacing ? worldEditorWorldNormalY : -worldEditorWorldNormalY;
            float faceShade = ${qf.toFixed(2)}
              + (${Xf.toFixed(2)} - ${$f.toFixed(2)}) * 0.5 * normalY
              + ((${Xf.toFixed(2)} + ${$f.toFixed(2)}) * 0.5 - ${qf.toFixed(2)}) * normalY * normalY;
            outgoingLight *= max(ambientLight, blockLight);
            outgoingLight *= ${Cr} * faceShade;

            #include <opaque_fragment>
          `)}),t.userData[Zf]=!0}async loadEntityModelTemplate(t){this.entityModelCache.has(t)||this.entityModelCache.set(t,this.gltfLoader.loadAsync(t).then(n=>{const i=new Ze;return i.add(n.scene.clone(!0)),i.updateMatrixWorld(!0),i}).catch(n=>(console.error(n),new Ze)));const e=await this.entityModelCache.get(t);return e.children.length===0?null:e}resolveEntityModelUri(t){return t.startsWith("http://")||t.startsWith("https://")||t.startsWith("/")?t:`/voxcinder/world-editor/${t}`}getEntityModelUri(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.modelUri=="string"&&e.modelUri.length>0?e.modelUri:null}updateHoverFromPointer(t){this.updateHoverFromClientPosition(t.clientX,t.clientY)}updateHoverFromScreenCenter(){const t=this.renderer.domElement.getBoundingClientRect();this.updateHoverFromClientPosition(t.left+t.width/2,t.top+t.height/2)}updateHoverFromClientPosition(t,e){const n=this.renderer.domElement.getBoundingClientRect();Zo.x=(t-n.left)/n.width*2-1,Zo.y=-((e-n.top)/n.height)*2+1,this.camera.updateMatrixWorld(),Er.setFromMatrixPosition(this.camera.matrixWorld),As.set(Zo.x,Zo.y,.5).unproject(this.camera),jo.copy(As).sub(Er).normalize();const i=this.raycastBlocks(Er,jo,EE);if(i){this.hoveredBlock=i.coordinate,this.hoveredBlockHitPoint=i.hitPoint;const l=this.getPlacementCoordinateFromBlock(i.coordinate,i.normal);this.hoveredPlacement=l,this.currentTool==="build"?this.setHoverBox(l,"#f5b942"):this.currentTool==="erase"&&this.setHoverBox(i.coordinate,"#f05d6c");return}this.hoveredBlock=null,this.hoveredBlockHitPoint=null;const s=-.5,o=jo.dot(bE);if(Math.abs(o)<1e-6){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}const a=(s-Er.y)/o;if(a<0){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}As.copy(Er).addScaledVector(jo,a),this.hoveredPlacement={x:Math.floor(As.x),y:0,z:Math.floor(As.z)},this.setHoverIndicatorVisible(!1),this.hoveredPlacement&&this.currentTool==="build"&&this.setHoverBox(this.hoveredPlacement,"#f5b942"),this.hoveredBlock&&this.currentTool==="erase"&&this.setHoverBox(this.hoveredBlock,"#f05d6c")}clearHover(){this.hoveredPlacement=null,this.hoveredBlock=null,this.hoveredBlockHitPoint=null,this.setHoverIndicatorVisible(!1)}getPlacementCoordinateFromBlock(t,e){return{x:t.x+Math.round(e.x),y:t.y+Math.round(e.y),z:t.z+Math.round(e.z)}}setHoverBox(t,e){Df.set(t.x+.5,t.y+.5,t.z+.5),this.hoverIndicatorRoot.position.copy(Df),this.hoverIndicatorRoot.traverse(n=>{const i=n;if(!i.material)return;const s=Array.isArray(i.material)?i.material:[i.material];for(const o of s){const a=o;a.color&&a.color.set(e)}}),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setHoverIndicatorVisible(t){this.hoverIndicatorRoot.visible=t,this.hoverBox.visible=!1}async applyCurrentTool(t){if(this.currentTool==="build"){t===0&&await this.placeSingleBlock();return}this.currentTool==="erase"&&(t===0||t===2)&&await this.deleteSingleBlock()}async rebuildAffectedChunks(t){await this.syncChunkMesherWorkerChunks(t),await this.enqueueChunkBuilds(t,ta,this.activeChunkBuildGeneration),this.updateEntityLighting(t),this.updateDebugPanel()}requestAffectedChunksRebuild(t,e=!0){this.lastInteractiveChunkBuildRequestAt=performance.now(),e&&this.flushQueuedWorkerBlockUpdates(),this.queueChunkBuilds(t,ta,this.activeChunkBuildGeneration),this.updateEntityLighting(t),this.updateDebugPanel()}queueChunkBuilds(t,e,n){if(!this.atlas||t.length===0||n!==this.activeChunkBuildGeneration)return[];const i=[...new Set(t)];for(const s of i){const o=this.inFlightChunkBuildPriorities.get(s)??0;if(this.inFlightChunkBuildIds.has(s)&&e>o){this.inFlightChunkBuildPriorities.set(s,e),this.chunkMesherWorker.postMessage({type:"prioritize_chunk_build",focusChunkId:s,priority:e,chunkId:s});continue}const a=this.pendingChunkBuildPriorities.get(s)??0;e>=a&&this.pendingChunkBuildPriorities.set(s,e)}return i}async enqueueChunkBuilds(t,e,n){const i=this.queueChunkBuilds(t,e,n);i.length!==0&&await new Promise(s=>{this.chunkBuildWaiters.push({chunkIds:new Set(i),resolve:s}),this.resolveChunkBuildWaiters()})}processChunkBuildQueueFrame(t){if(t!==this.activeChunkBuildGeneration||this.chunkBuildDispatchInProgress)return;const e=this.takeNextChunkBuildBatch();e.length!==0&&(this.chunkBuildDispatchInProgress=!0,this.dispatchChunkBuildBatch(e,t))}takeNextChunkBuildBatch(){const t=[...this.pendingChunkBuildPriorities.keys()].filter(n=>!this.inFlightChunkBuildIds.has(n)),e=t.filter(n=>(this.pendingChunkBuildPriorities.get(n)??0)>=ta);return e.length>0?e.sort((n,i)=>this.getChunkDistanceToCameraSquared(n)-this.getChunkDistanceToCameraSquared(i)).slice(0,kE):performance.now()-this.lastInteractiveChunkBuildRequestAt<FE?[]:t.sort((n,i)=>this.getChunkDistanceToCameraSquared(n)-this.getChunkDistanceToCameraSquared(i)).slice(0,OE)}getChunkDistanceToCameraSquared(t){const e=Zt.chunkIdToOriginCoordinate(t),n=e.x+8,i=e.y+8,s=e.z+8;return(n-this.camera.position.x)*(n-this.camera.position.x)+(i-this.camera.position.y)*(i-this.camera.position.y)+(s-this.camera.position.z)*(s-this.camera.position.z)}getChunkIdsSortedByDistanceToCamera(t){return[...new Set(t)].sort((e,n)=>this.getChunkDistanceToCameraSquared(e)-this.getChunkDistanceToCameraSquared(n))}async dispatchChunkBuildBatch(t,e){try{if(e!==this.activeChunkBuildGeneration)return;const n=t.filter(i=>!this.workerSyncedChunkIds.has(i));if(n.length>0&&await this.syncChunkMesherWorkerChunks(n),e!==this.activeChunkBuildGeneration)return;this.flushQueuedWorkerBlockUpdates();for(const i of t){const s=this.pendingChunkBuildPriorities.get(i);s!==void 0&&(this.pendingChunkBuildPriorities.delete(i),this.inFlightChunkBuildIds.add(i),this.inFlightChunkBuildPriorities.set(i,s),this.postBuildChunkRequest(i,s,e))}}finally{this.chunkBuildDispatchInProgress=!1}}resolveChunkBuildWaiters(){for(let t=this.chunkBuildWaiters.length-1;t>=0;t--){const e=this.chunkBuildWaiters[t];let n=!0;for(const i of e.chunkIds)if(this.pendingChunkBuildPriorities.has(i)||this.inFlightChunkBuildIds.has(i)){n=!1;break}n&&(this.chunkBuildWaiters.splice(t,1),e.resolve())}}postBuildChunkRequest(t,e,n){const i=this.nextWorkerRequestId++;this.chunkBuildRequestGenerations.set(i,n),this.chunkMesherWorker.postMessage({type:"build_chunk",focusChunkId:t,priority:e,requestId:i,chunkId:t})}flushDeferredChunkBuildResults(){const t=this.deferredInteractiveChunkBuildResults.length>0?this.deferredInteractiveChunkBuildResults.splice(0,this.deferredInteractiveChunkBuildResults.length):this.deferredBackgroundChunkBuildResults.splice(0,this.deferredBackgroundChunkBuildResults.length);if(t.length!==0){t.sort((e,n)=>{const i=(this.inFlightChunkBuildPriorities.get(n.chunkId)??0)-(this.inFlightChunkBuildPriorities.get(e.chunkId)??0);return i!==0?i:this.getChunkDistanceToCameraSquared(e.chunkId)-this.getChunkDistanceToCameraSquared(n.chunkId)});for(const e of t)this.chunkMeshManager?this.chunkMeshManager.setChunkGeometry(e.chunkId,e.geometry):this.chunkBatchRenderer.setChunkGeometry(e.chunkId,e.geometry),this.inFlightChunkBuildIds.delete(e.chunkId),this.inFlightChunkBuildPriorities.delete(e.chunkId);this.chunkMeshManager?this.chunkMeshManager.flush():this.chunkBatchRenderer.flush(),this.resolveChunkBuildWaiters()}}async initializeChunkMesherWorkerWorld(){if(!this.atlas)return;this.flushQueuedWorkerBlockUpdates();const t=this.nextWorkerRequestId++,e=this.atlasSnapshotCache??this.atlas.toSnapshot();await this.postChunkMesherWorkerRequest(t,{type:"sync_world",requestId:t,world:{blockTypes:this.world.toSnapshot().blockTypes,chunks:[]},atlas:e})}async syncChunkMesherWorkerChunks(t){if(!this.atlas||t.length===0)return;this.flushQueuedWorkerBlockUpdates();const e=[...new Set(t)],n=this.nextWorkerRequestId++;await this.postChunkMesherWorkerRequest(n,{type:"update_world_chunks",requestId:n,chunks:e.map(i=>({chunkId:i,snapshot:this.world.getChunkSnapshot(i)}))});for(const i of e)this.workerSyncedChunkIds.add(i)}queueChunkMesherWorkerBlockUpdate(t,e,n=0){const i=`${t.x},${t.y},${t.z}`;this.pendingWorkerBlockUpdates.set(i,{blockTypeId:e,coordinate:{...t},rotation:n})}canMergeQueuedBlockUpdates(t){for(const e of t)if(this.inFlightChunkBuildIds.has(e))return!1;return!0}flushQueuedWorkerBlockUpdates(){if(!this.atlas||this.pendingWorkerBlockUpdates.size===0)return;const t=[...this.pendingWorkerBlockUpdates.values()];this.chunkMesherWorker.postMessage({type:"update_world_blocks",updates:t}),this.pendingWorkerBlockUpdates.clear()}async postChunkMesherWorkerRequest(t,e){await new Promise(n=>{const i=s=>{const o=s.data;o.type!=="worker_ack"||o.requestId!==t||(this.chunkMesherWorker.removeEventListener("message",i),n())};this.chunkMesherWorker.addEventListener("message",i),this.chunkMesherWorker.postMessage(e)})}loadSkyboxTexture(t){return new Promise((e,n)=>{const i=this.cubeTextureLoader.load([...t],()=>e(i),void 0,s=>n(s));i.colorSpace=Ee})}createSkyboxMesh(t){const e=new ve(new ei(1,1,1),t);return e.renderOrder=-1e3,e.frustumCulled=!1,e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1,e}disposeSkyboxMesh(){if(!this.skyboxMesh)return;this.scene.remove(this.skyboxMesh),this.skyboxMesh.geometry.dispose();const t=this.skyboxMesh.material;t instanceof ep&&t.map.dispose(),t.dispose(),this.skyboxMesh=null}ensurePlaceholderSkybox(){this.skyboxMesh instanceof ve&&this.skyboxMesh.material instanceof np||(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new np),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh))}async loadSkybox(t){const e=t===zf,n=Array.isArray(t)?[...t]:[`${t}/+x.png`,`${t}/-x.png`,`${t}/+y.png`,`${t}/-y.png`,`${t}/+z.png`,`${t}/-z.png`],i=this.loadSkyboxTexture(n);this.pendingSkyboxTexture=i,this.ensurePlaceholderSkybox();let s=null;try{s=await i}catch(o){if(console.error(o),!e)try{s=await this.loadSkyboxTexture(zf)}catch(a){console.error(a)}}this.pendingSkyboxTexture===i&&(this.pendingSkyboxTexture=null,s&&(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new ep(s)),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh)))}updateSkybox(){this.skyboxMesh&&(this.camera.updateMatrixWorld(),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.skyboxMesh.position.copy(this.camera.position),this.skyboxMesh.updateMatrix(),this.skyboxMesh.matrixWorld.copy(this.skyboxMesh.matrix))}raycastBlocks(t,e,n){let i=Math.floor(t.x),s=Math.floor(t.y),o=Math.floor(t.z);const a=Math.sign(e.x),l=Math.sign(e.y),c=Math.sign(e.z),h=a===0?Number.POSITIVE_INFINITY:Math.abs(1/e.x),u=l===0?Number.POSITIVE_INFINITY:Math.abs(1/e.y),d=c===0?Number.POSITIVE_INFINITY:Math.abs(1/e.z);let f=Xl(t.x,e.x,i,a),m=Xl(t.y,e.y,s,l),_=Xl(t.z,e.z,o,c);if(this.world.hasBlock({x:i,y:s,z:o}))return{coordinate:{x:i,y:s,z:o},hitPoint:{x:t.x,y:t.y,z:t.z},normal:{x:0,y:1,z:0}};let p=0,g={x:0,y:0,z:0};for(;p<=n;)if(f<m&&f<_?(i+=a,p=f,f+=h,g={x:-a,y:0,z:0}):m<_?(s+=l,p=m,m+=u,g={x:0,y:-l,z:0}):(o+=c,p=_,_+=d,g={x:0,y:0,z:-c}),this.world.hasBlock({x:i,y:s,z:o}))return{coordinate:{x:i,y:s,z:o},hitPoint:{x:t.x+e.x*p,y:t.y+e.y*p,z:t.z+e.z*p},normal:g};return null}setToolMode(t){this.currentTool=t,this.toolToggleButton.classList.toggle("active",!0),this.toolToggleButton.innerHTML=`<span class="tool-slot-icon" aria-hidden="true">${this.getToolIconSvg(t)}</span>`,this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(t)),this.toolToggleButton.title=this.getToolLabel(t),this.updateStatus(`Tool changed to ${this.getToolLabel(t)}.`),this.pointerLocked&&this.updateHoverFromScreenCenter()}toggleToolMode(){this.setToolMode(this.currentTool==="build"?"erase":"build")}getToolLabel(t){switch(t){case"build":return"Build";case"erase":return"Erase"}}getToolIconSvg(t){switch(t){case"build":return`
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
        `}}async placeSingleBlock(){const t=this.hoveredPlacement;if(!t)return;const e=this.world.blockTypes.find(l=>l.id===this.selectedBlockTypeId);if(!e){this.updateStatus("No block pattern selected.");return}if(this.world.getBlockTypeId(t)===e.id)return;const n=this.world.getBlockTypeId(t),i=new Set([Zt.globalCoordinateToChunkId(t)]),s=this.captureChunkStates(i);this.world.setBlock(t,e.id);const o=[...this.world.getAffectedChunkIds(t,n,e.id)],a=this.canMergeQueuedBlockUpdates(o);a?this.queueChunkMesherWorkerBlockUpdate(t,e.id):await this.syncChunkMesherWorkerChunks(o),this.spawnBlockPlaceDustEffect(t,e),this.playBlockPlaceAudio(),this.pushPatchUndoState(`Place ${e.name}`,s),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild(o,!a),this.scheduleAutosave(),this.updateStatus(`Placed ${e.name} at ${ql(t)}.`)}async deleteSingleBlock(){const t=this.hoveredBlock;if(!t||!this.world.hasBlock(t))return;const e=this.world.getBlockTypeId(t),n=this.world.getBlockTypeById(e),i=new Set([Zt.globalCoordinateToChunkId(t)]),s=this.captureChunkStates(i);n&&(this.spawnBlockHitDustEffect(this.hoveredBlockHitPoint??_T(t),t,n),this.spawnBlockBreakEffect(t,n),this.playBlockBreakAudio()),this.world.deleteBlock(t);const o=[...this.world.getAffectedChunkIds(t,e,0)],a=this.canMergeQueuedBlockUpdates(o);a?this.queueChunkMesherWorkerBlockUpdate(t,0):await this.syncChunkMesherWorkerChunks(o),this.pushPatchUndoState(`Delete ${ql(t)}`,s),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild(o,!a),this.scheduleAutosave(),this.updateStatus(`Deleted block at ${ql(t)}.`)}spawnBlockBreakEffect(t,e){const n=this.getBlockBreakParticleEmitter(e),i=new Bt().setPosition(t.x+.5,t.y+.75,t.z+.5),s=this.resolveBlockBreakParticleColorTint(e),o={colorStart:s,colorEnd:s,colorIntensityStart:1.25,colorIntensityEnd:1.15,lifetime:.22,lifetimeVariance:.07,positionVariance:new L(.42,.42,.42),velocity:new L(0,3.1,0),velocityVariance:new L(3.4,2,3.4),sizeStart:.17,sizeStartVariance:.06,sizeEnd:.07,sizeEndVariance:.03,opacityStart:1,opacityEnd:.9};n.core.setAttachmentMatrix(0,i),n.core.burst(qE,0,o),this.syncParticleEmitterScenePresence(n)}spawnBlockHitDustEffect(t,e,n){const i=this.getBlockHitDustEmitter(),s=op(this.resolveBlockBreakParticleColorTint(n),1.35),o=e.x+.5,a=e.y+.5,l=e.z+.5;let c=t.x-o,h=t.y-a,u=t.z-l;const d=Math.hypot(c,h,u);d<1e-4?(c=0,h=1,u=0):(c/=d,h/=d,u/=d);const f=new Bt().setPosition(t.x+c*.2,t.y+h*.2,t.z+u*.2),m={colorStart:s,colorEnd:s,colorIntensityStart:1.7,colorIntensityEnd:1.1,lifetime:.58,lifetimeVariance:.2,positionVariance:new L(.26,.2,.26),velocity:new L(c*1.25,Math.max(.6,h*.9+.6),u*1.25),velocityVariance:new L(.95,.7,.95),sizeStart:.3,sizeStartVariance:.1,sizeEnd:.55,sizeEndVariance:.18,opacityStart:.95,opacityEnd:.1};i.core.setAttachmentMatrix(0,f),i.core.burst(Jf,0,m),this.syncParticleEmitterScenePresence(i)}spawnBlockPlaceDustEffect(t,e){const n=this.getBlockHitDustEmitter(),i=op(this.resolveBlockBreakParticleColorTint(e),1.2),s=new Bt().setPosition(t.x+.5,t.y+.55,t.z+.5),o={colorStart:i,colorEnd:i,colorIntensityStart:1.6,colorIntensityEnd:1.1,lifetime:.56,lifetimeVariance:.18,positionVariance:new L(.28,.2,.28),velocity:new L(0,.85,0),velocityVariance:new L(.8,.45,.8),sizeStart:.3,sizeStartVariance:.1,sizeEnd:.56,sizeEndVariance:.16,opacityStart:.95,opacityEnd:.03};n.core.setAttachmentMatrix(0,s),n.core.burst(Jf,0,o),this.syncParticleEmitterScenePresence(n)}getBlockBreakParticleEmitter(t){const e=t.textureUris.top,n=this.blockBreakEmitters.get(e);if(n)return n;const i=this.loadParticleTexture(e),s=new jd({alphaTest:.5,maxParticles:$E,rate:0,texture:i,transparent:!1});s.mesh.matrixAutoUpdate=!1,s.mesh.matrixWorldAutoUpdate=!1,s.mesh.frustumCulled=!1;const o={core:s,texture:i};return this.blockBreakEmitters.set(e,o),o}getBlockHitDustEmitter(){if(this.blockHitDustEmitter)return this.blockHitDustEmitter;const t=this.loadParticleTexture(KE),e=new jd({alphaTest:.005,maxParticles:ZE,orientation:"billboard",rate:0,texture:t,transparent:!0});return e.mesh.matrixAutoUpdate=!1,e.mesh.matrixWorldAutoUpdate=!1,e.mesh.frustumCulled=!1,this.blockHitDustEmitter={core:e,texture:t},this.blockHitDustEmitter}loadParticleTexture(t){return this.particleTextureLoader.load(t)}resolveBlockBreakParticleColorTint(t){if(!this.atlas)return YE;const e=this.atlas.getFaceUvs(t,"top").averageRGB;return new ut(Vs(e[0]),Vs(e[1]),Vs(e[2]))}syncParticleEmitterScenePresence(t){t.core.hasRenderableParticles()?t.core.mesh.parent===null&&this.scene.add(t.core.mesh):t.core.mesh.parent!==null&&this.scene.remove(t.core.mesh)}updateBlockBreakEffects(t){const e=this.getCurrentViewDistance();for(const n of this.blockBreakEmitters.values())n.core.setViewDistanceCulling(this.camera.position,e),n.core.update(t),this.syncParticleEmitterScenePresence(n);this.blockHitDustEmitter&&(this.blockHitDustEmitter.core.setViewDistanceCulling(this.camera.position,e),this.blockHitDustEmitter.core.update(t),this.syncParticleEmitterScenePresence(this.blockHitDustEmitter))}playBlockBreakAudio(){this.playExclusiveActionAudio({playbackRate:QE,uri:jE,volume:JE},tT)}playBlockPlaceAudio(){this.playExclusiveActionAudio({playbackRate:iT,uri:eT,volume:nT},sT)}playExclusiveActionAudio(t,e){this.resumeAudioContext();const n=this.getOrCreateExclusiveAudioState(t.uri);let i=n.slots.findIndex(l=>!l.isActive);i===-1&&(i=n.nextSlotIndex);const s=n.slots[i];s.cleanupTimer!==null&&(window.clearTimeout(s.cleanupTimer),s.cleanupTimer=null),this.applyAudioOptions(s.audio,t),s.isActive=!0,s.playGeneration+=1;const o=s.playGeneration;this.loadAudioBuffer(t.uri).then(l=>{s.playGeneration===o&&(s.audio.isPlaying&&s.audio.stop(),s.audio.setBuffer(l),s.audio.play(),s.cleanupTimer=window.setTimeout(()=>{s.playGeneration===o&&(s.audio.isPlaying&&s.audio.stop(),s.cleanupTimer=null,s.isActive=!1)},e))}).catch(l=>{console.warn(`WorldEditor: Failed to load audio "${t.uri}".`,l)}),n.nextSlotIndex=(i+1)%Qf}getOrCreateExclusiveAudioState(t){const e=this.exclusiveAudioStates.get(t);if(e)return e;const n={nextSlotIndex:0,slots:Array.from({length:Qf},()=>{const i=new V_(this.audioListener);return i.setLoop(!1),{audio:i,cleanupTimer:null,isActive:!1,playGeneration:0}})};return this.exclusiveAudioStates.set(t,n),n}applyAudioOptions(t,e){t.setVolume(e.volume),t.setPlaybackRate(e.playbackRate),t.setDetune(0)}loadAudioBuffer(t){const e=this.audioBufferCache.get(t);if(e)return e;const n=this.audioLoader.loadAsync(t);return this.audioBufferCache.set(t,n),n}async resumeAudioContext(){this.audioListener.context.state==="suspended"&&await this.audioListener.context.resume()}pushHistoryEntry(t){this.undoStack.push(t),this.undoStack.length>DE&&this.undoStack.shift(),this.redoStack=[],this.updateHistoryButtons()}pushSnapshotUndoState(t,e,n){this.pushHistoryEntry({kind:"snapshot",label:t,before:e,after:n})}pushPatchUndoState(t,e,n=[]){const i=[];for(const[o,a]of e){const l=this.world.getChunkSnapshot(o);this.chunkSnapshotsEqual(a,l)||i.push({chunkId:o,before:a,after:l})}const s=n.filter(o=>this.entityDiffChanged(o));return i.length===0&&s.length===0?!1:(this.pushHistoryEntry({kind:"patch",label:t,chunks:i,...s.length>0?{entities:s}:{}}),!0)}serializeHistoryEntry(t){return t.kind==="snapshot"?{kind:"snapshot",label:t.label,beforeWorld:this.snapshotToWorldMap(t.before),afterWorld:this.snapshotToWorldMap(t.after)}:{kind:"patch",label:t.label,chunks:t.chunks.map(e=>({chunkId:e.chunkId,before:this.serializeChunkSnapshot(e.before),after:this.serializeChunkSnapshot(e.after)})),...t.entities?{entities:t.entities.map(e=>this.serializeEntityHistoryDiff(e))}:{}}}deserializeHistoryEntry(t){return t.kind==="snapshot"?{kind:"snapshot",label:t.label,before:this.worldMapToSnapshot(t.beforeWorld),after:this.worldMapToSnapshot(t.afterWorld)}:{kind:"patch",label:t.label,chunks:t.chunks.map(e=>({chunkId:e.chunkId,before:this.deserializeChunkSnapshot(e.before),after:this.deserializeChunkSnapshot(e.after)})),...t.entities?{entities:t.entities.map(e=>this.deserializeEntityHistoryDiff(e))}:{}}}captureChunkStates(t){const e=new Map;for(const n of new Set(t))e.set(n,this.world.getChunkSnapshot(n));return e}serializeChunkSnapshot(t){return t?{chunkId:t.chunkId,originCoordinate:{...t.originCoordinate},blocks:Array.from(t.blocks),rotations:Array.from(t.rotations)}:null}deserializeChunkSnapshot(t){return t?{chunkId:t.chunkId,originCoordinate:{...t.originCoordinate},blocks:new Uint16Array(t.blocks),rotations:new Uint8Array(t.rotations)}:null}serializeEntityHistoryDiff(t){return{...t,before:this.cloneEntityValue(t.before),after:this.cloneEntityValue(t.after)}}deserializeEntityHistoryDiff(t){return{...t,before:this.cloneEntityValue(t.before),after:this.cloneEntityValue(t.after)}}chunkSnapshotsEqual(t,e){return!t||!e?t===e:t.chunkId===e.chunkId&&t.originCoordinate.x===e.originCoordinate.x&&t.originCoordinate.y===e.originCoordinate.y&&t.originCoordinate.z===e.originCoordinate.z&&na(t.blocks,e.blocks)&&na(t.rotations,e.rotations)}entityDiffChanged(t){return t.hasBefore!==t.hasAfter?!0:!t.hasBefore&&!t.hasAfter?!1:JSON.stringify(t.before)!==JSON.stringify(t.after)}cloneEntityValue(t){return t==null?t:typeof structuredClone=="function"?structuredClone(t):JSON.parse(JSON.stringify(t))}snapshotToWorldMap(t){const e={};for(const n of t.chunks)for(let i=0;i<n.blocks.length;i++){const s=n.blocks[i];if(s===0)continue;const o=Zt.blockIndexToLocalCoordinate(i),a=`${n.originCoordinate.x+o.x},${n.originCoordinate.y+o.y},${n.originCoordinate.z+o.z}`,l=n.rotations[i]??0;e[a]=l===0?s:{i:s,r:l}}return{blockTypes:t.blockTypes.map(n=>({id:n.id,name:n.name,textureUri:n.textureUri,isLiquid:n.isLiquid,lightLevel:n.lightLevel,...n.trimeshIndices?{trimeshIndices:Array.from(n.trimeshIndices)}:{},...n.trimeshVertices?{trimeshVertices:Array.from(n.trimeshVertices)}:{},durability:n.durability,customColliderOptions:n.customColliderOptions,isCustom:n.isCustom,isMultiTexture:n.isMultiTexture})),blocks:e,...t.entities?{entities:{...t.entities}}:{}}}worldMapToSnapshot(t){const e=new bf;return e.load(t,Vi),e.toSnapshot()}async undo(){const t=this.undoStack.pop();if(!t){this.updateHistoryButtons(),this.updateStatus("Nothing to undo.");return}this.redoStack.push(t),this.updateHistoryButtons(),await this.applyHistoryEntry(t,"before"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Undid: ${t.label}.`)}async redo(){const t=this.redoStack.pop();if(!t){this.updateHistoryButtons(),this.updateStatus("Nothing to redo.");return}this.undoStack.push(t),this.updateHistoryButtons(),await this.applyHistoryEntry(t,"after"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Redid: ${t.label}.`)}async applyHistoryEntry(t,e){if(t.kind==="snapshot"){const s=e==="before"?t.before:t.after,o=e==="before"?t.after:t.before;this.markFullWorldAutosaveDirty(),await this.restoreSnapshot(s,o);return}const n=e==="before"?"before":"after",i=t.chunks.map(s=>s.chunkId);for(const s of t.chunks)this.world.applyChunkSnapshot(s.chunkId,s[n]);if(this.markChunkIdsAutosaveDirty(i),t.entities){const s={},o=this.world.entities;for(const a of t.entities){a.key in o&&(s[a.key]=this.cloneEntityValue(o[a.key]));const l=e==="before"?a.hasBefore:a.hasAfter,c=e==="before"?a.before:a.after;l?o[a.key]=this.cloneEntityValue(c):delete o[a.key]}this.world.setEntities(Object.keys(o).length>0?o:void 0),this.markEntitiesAutosaveDirty(),await this.syncEntityMarkersForKeys(t.entities.map(a=>a.key),s)}await this.rebuildAffectedChunks(this.expandChunkIdsForLighting(i))}markChunkIdsAutosaveDirty(t){if(!this.autosaveFullWorldDirty)for(const e of t)this.autosaveDirtyChunkIds.add(e)}markEntitiesAutosaveDirty(){this.autosaveEntitiesDirty=!0}markFullWorldAutosaveDirty(){this.autosaveFullWorldDirty=!0,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!0}resetAutosaveDirtyState(){this.autosaveFullWorldDirty=!1,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!1}async restoreSnapshot(t,e){const n=!this.areSnapshotsBlockTypeCompatible(e,t),i=n?[]:this.expandChunkIdsForLighting(this.getChangedChunkIds(e,t));if(this.world.loadSnapshot(t),n){await this.rebuildAllChunkMeshes();return}await this.rebuildAffectedChunks(i)}areSnapshotsBlockTypeCompatible(t,e){if(t.blockTypes.length!==e.blockTypes.length)return!1;for(let n=0;n<t.blockTypes.length;n++){const i=t.blockTypes[n],s=e.blockTypes[n];if(i.id!==s.id||i.name!==s.name||i.textureUri!==s.textureUri||i.isLiquid!==s.isLiquid||i.isMultiTexture!==s.isMultiTexture)return!1}return!0}getChangedChunkIds(t,e){const n=new Set,i=new Map(t.chunks.map(o=>[o.chunkId,o])),s=new Map(e.chunks.map(o=>[o.chunkId,o]));for(const o of new Set([...i.keys(),...s.keys()])){const a=i.get(o),l=s.get(o);if(!a||!l){n.add(o);continue}(!na(a.blocks,l.blocks)||!na(a.rotations,l.rotations))&&n.add(o)}return[...n]}expandChunkIdsForLighting(t){const e=new Set;for(const n of t){const i=Zt.chunkIdToOriginCoordinate(n);for(let s=-1;s<=1;s++)for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)e.add(Zt.originCoordinateToChunkId({x:i.x+a*16,y:i.y+s*16,z:i.z+o*16}))}return[...e]}updateStatus(t){}updateDebugPanel(){var n;const t=this.renderer.info,e=performance.memory;this.debugSummaryLine.innerHTML=`<strong>FPS:</strong> ${this.fps} <strong>Chunks:</strong> ${this.world.chunkIds.length} <strong>Chunk Batches:</strong> ${((n=this.chunkMeshManager)==null?void 0:n.batchMeshCount)??this.chunkBatchRenderer.batchMeshCount}`,this.debugRenderLine.innerHTML=`<strong>Draw Calls:</strong> ${t.render.calls} <strong>Triangles:</strong> ${t.render.triangles}`,this.debugSceneLine.innerHTML=`<strong>Geometries:</strong> ${t.memory.geometries} <strong>Textures:</strong> ${t.memory.textures}`,e?this.debugMemoryLine.innerHTML=`<strong>Heap:</strong> ${sp(e.usedJSHeapSize)} / ${sp(e.totalJSHeapSize)}`:this.debugMemoryLine.innerHTML="<strong>Heap:</strong> unavailable in this browser"}updateViewDistanceVisibility(){const t=this.getCurrentViewDistance(),e=this.getCurrentLodTransitionDistance(),n=t*t,i=e*e;this.camera.updateMatrixWorld(),Cs.set(this.camera.position.x,this.camera.position.z),Nf.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),Rs.setFromProjectionMatrix(Nf);const o=(this.chunkMeshManager??this.chunkBatchRenderer).collectPreOcclusionChunkModes(Cs,i,n,Rs,this.nextPreOcclusionChunkModes);this.preOcclusionChunkModes.clear();for(const[a,l]of o)this.preOcclusionChunkModes.set(a,l);this.chunkMeshManager?this.chunkMeshManager.applyBatchVisibility(Cs,i,n,Rs,this.preOcclusionChunkModes):this.chunkBatchRenderer.applyViewDistanceVisibility(Cs,i,n,Rs,this.preOcclusionChunkModes),this.entityMeshManager.updateScenePresence(Cs,n,Rs);for(const a of this.entityRenderObjects){const l=Number(a.userData.visibilityRadius??1);Jo.center.copy(a.getWorldPosition(As)),Jo.radius=l;const c=gT(Jo.center,Cs)<=n,h=Rs.intersectsSphere(Jo),u=c&&h,d=a.parent!==null;u&&!d?this.entityLayer.add(a):!u&&d&&this.entityLayer.remove(a)}}updateSpectatorRotation(t,e){this.spectatorPitch=Math.max(-kf,Math.min(kf,this.spectatorPitch+e*Ff)),this.spectatorYaw-=t*Ff,this.applySpectatorCameraOrientation(),this.scheduleViewStateAutosave()}applySpectatorCameraOrientation(){this.camera.rotation.set(-this.spectatorPitch,this.spectatorYaw,0,"YXZ")}updateSpectatorCamera(t){if(!this.pointerLocked&&!this.mobileControlsEnabled)return!1;const e=TE*(this.pressedKeys.has("shift")?AE:1)*t;Ar.copy(this.camera.rotation),Is.set(0,0,-1).applyEuler(Ar),Qo.set(1,0,0).applyEuler(Ar);let n=!1;return this.pressedKeys.has("key_w")&&(this.camera.position.addScaledVector(Is,e),n=!0),this.pressedKeys.has("key_s")&&(this.camera.position.addScaledVector(Is,-e),n=!0),this.pressedKeys.has("key_a")&&(this.camera.position.addScaledVector(Qo,-e),n=!0),this.pressedKeys.has("key_d")&&(this.camera.position.addScaledVector(Qo,e),n=!0),this.mobileControlsEnabled&&(Math.abs(this.mobileMoveInputY)>.01&&(this.camera.position.addScaledVector(Is,-this.mobileMoveInputY*e),n=!0),Math.abs(this.mobileMoveInputX)>.01&&(this.camera.position.addScaledVector(Qo,this.mobileMoveInputX*e),n=!0)),n&&this.scheduleViewStateAutosave(),n}getCurrentBlockTypeDefinitions(){return this.world.toJson().blockTypes??Vi}resolveTemplateBlockIds(t){var i;const e=(...s)=>{var a;const o=s.map(l=>l.toLowerCase());return(a=t.find(l=>o.includes(l.name.toLowerCase())))==null?void 0:a.id},n=((i=t[0])==null?void 0:i.id)??1;return{accent:e("bricks","andesite")??n,grass:e("grass-block","grass-block-pine","grass-flower-block","grass-flower-block-pine")??n,leaves:e("oak-leaves","birch-leaves","spruce-leaves")??n,sand:e("sand")??n,stone:e("stone","andesite","cobblestone")??n,wall:e("cobblestone","andesite","stone")??n,water:e("water")??n,wood:e("oak-log","spruce-log")??n}}getEntityLabel(t){if(t&&typeof t=="object"){const e=t,n=e.name??e.modelUri??e.modelLoopedAnimations??e.type;if(typeof n=="string"&&n.length>0)return n}return"entity"}async addEntityAtHover(){const t=this.hoveredPlacement??this.hoveredBlock;if(!t){this.updateStatus("No hover target for entity placement.");return}const e=`${t.x+.5},${t.y+.5},${t.z+.5}`,n=this.cloneEntityValue(void 0);this.world.setEntity(e,{name:"entity"}),this.pushPatchUndoState("Add entity",new Map,[{key:e,before:n,after:this.cloneEntityValue(this.world.entities[e]),hasBefore:!1,hasAfter:!0}]),this.selectedEntityKey=e,this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([e]),this.scheduleAutosave(),this.updateStatus(`Added entity at ${e}.`)}async saveSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}try{const t=JSON.parse(this.entityOptionsInput.value||"{}"),e=this.world.entities,n=this.cloneEntityValue(e[this.selectedEntityKey]);this.world.setEntity(this.selectedEntityKey,t),this.pushPatchUndoState("Edit entity",new Map,[{key:this.selectedEntityKey,before:n,after:this.cloneEntityValue(t),hasBefore:!0,hasAfter:!0}]),this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([this.selectedEntityKey],{[this.selectedEntityKey]:n}),this.scheduleAutosave(),this.updateStatus(`Saved entity at ${this.selectedEntityKey}.`)}catch(t){this.updateStatus(`Invalid entity JSON: ${t.message}`)}}async deleteSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}const t=this.selectedEntityKey,e=this.world.entities,n=this.cloneEntityValue(e[t]);this.world.deleteEntity(t),this.pushPatchUndoState("Delete entity",new Map,[{key:t,before:n,after:this.cloneEntityValue(void 0),hasBefore:!0,hasAfter:!1}]),this.markEntitiesAutosaveDirty(),this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([t],{[t]:n}),this.scheduleAutosave(),this.updateStatus(`Deleted entity at ${t}.`)}scheduleAutosave(){this.autosaveTimeoutId!==null&&window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=window.setTimeout(()=>{this.autosaveTimeoutId=null,this.flushAutosave()},Hf)}scheduleViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=window.setTimeout(()=>{this.viewStateAutosaveTimeoutId=null,this.flushViewStateAutosave()},Hf)}async flushAutosave(){this.autosaveTimeoutId!==null&&(window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=null);const t={fileName:this.fileName,blockTypes:this.world.blockTypes.map(s=>({id:s.id,name:s.name,textureUri:s.textureUri,isLiquid:s.isLiquid,lightLevel:s.lightLevel,...s.trimeshIndices?{trimeshIndices:Array.from(s.trimeshIndices)}:{},...s.trimeshVertices?{trimeshVertices:Array.from(s.trimeshVertices)}:{},durability:s.durability,customColliderOptions:s.customColliderOptions,isCustom:s.isCustom,isMultiTexture:s.isMultiTexture})),redoStack:this.redoStack.map(s=>this.serializeHistoryEntry(s)),undoStack:this.undoStack.map(s=>this.serializeHistoryEntry(s))},e=this.autosaveFullWorldDirty?this.world.chunkIds.map(s=>this.world.getChunkSnapshot(s)).filter(s=>s!==null).map(s=>({chunkId:s.chunkId,originCoordinate:s.originCoordinate,blocks:s.blocks,rotations:s.rotations})):[],n=this.autosaveFullWorldDirty?[]:[...this.autosaveDirtyChunkIds].map(s=>{const o=this.world.getChunkSnapshot(s);return{chunkId:s,snapshot:o?{chunkId:o.chunkId,originCoordinate:o.originCoordinate,blocks:o.blocks,rotations:o.rotations}:null}}),i=this.autosaveEntitiesDirty||this.autosaveFullWorldDirty?Object.entries(this.world.entities).map(([s,o])=>({key:s,options:o})):[];try{this.autosaveFullWorldDirty?await fT(this.currentAutosaveSlotId,t,e,i):await pT(this.currentAutosaveSlotId,t,n,this.autosaveEntitiesDirty?i:null),localStorage.removeItem(ea(this.currentAutosaveSlotId)),this.autosaveSlots=cT(this.autosaveSlots,this.currentAutosaveSlotId),await Rr(this.autosaveSlots),this.resetAutosaveDirtyState()}catch(s){console.error(s);try{const o={fileName:this.fileName,redoStack:t.redoStack,undoStack:t.undoStack,world:this.world.toJson()};localStorage.setItem(ea(this.currentAutosaveSlotId),JSON.stringify(o))}catch(o){console.error(o)}}}async flushViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&(window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=null);const t={camera:{pitch:this.spectatorPitch,position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},yaw:this.spectatorYaw},lighting:{ambient:this.lightingAmbient,fogColorHex:this.fogColorHex,skyboxIntensity:this.skyboxUiIntensity},menuOpen:this.mobileSidebarOpen,paletteFilter:this.paletteFilter,resolutionPreset:this.resolutionPreset,viewDistance:{customDistance:this.viewDistanceCustomDistance,preset:this.viewDistancePreset}};try{await oT(t)}catch(e){console.error(e)}}buildExploreUrl(){const t=new URL(RE,window.location.origin);return t.searchParams.set(LE,"solo"),t.searchParams.set(PE,"peaceful"),t.searchParams.set(IE,"editor"),t}async openExploreMode(){const t=window.open("about:blank","_blank");if(!t){this.updateStatus("Failed to open Explore tab. Allow pop-ups and try again.");return}t.document.title="Preparing Explore...",this.updateStatus("Saving map for Explore...");try{await this.flushAutosave(),await this.flushViewStateAutosave(),t.location.href=this.buildExploreUrl().toString(),this.updateStatus("Opened Explore in a new tab.")}catch(e){t.close(),this.updateStatus(`Failed to open Explore: ${e.message}`)}}async getRestorableAutosavePayload(t){let e=null,n=null;try{n=await mT(t),n||(e=JSON.parse(localStorage.getItem(ea(t))??"null"))}catch{e=null,n=null}const i=(n==null?void 0:n.world)??(e==null?void 0:e.world);return i?{legacyPayload:e,metaPayload:(n==null?void 0:n.meta)??null,worldPayload:i}:null}async applyAutosavedWorldPayload(t,e){var n,i,s,o,a,l,c;try{this.world.load(t.worldPayload,Vi),this.selectedBlockTypeId=((n=this.world.blockTypes[0])==null?void 0:n.id)??this.selectedBlockTypeId,this.fileName=((i=t.metaPayload)==null?void 0:i.fileName)||((s=t.legacyPayload)==null?void 0:s.fileName)||"untitled-world-map.json",this.undoStack=(((o=t.metaPayload)==null?void 0:o.undoStack)??((a=t.legacyPayload)==null?void 0:a.undoStack)??[]).map(h=>this.deserializeHistoryEntry(h)),this.redoStack=(((l=t.metaPayload)==null?void 0:l.redoStack)??((c=t.legacyPayload)==null?void 0:c.redoStack)??[]).map(h=>this.deserializeHistoryEntry(h)),this.updateHistoryButtons(),this.resetAutosaveDirtyState(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),e?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),this.updateStatus(`Restored autosave for ${this.fileName}.`)}catch(h){throw console.error(h),localStorage.removeItem(ea(this.currentAutosaveSlotId)),Th(this.currentAutosaveSlotId),h}}updateHistoryButtons(){this.undoButton.disabled=this.undoStack.length===0,this.redoButton.disabled=this.redoStack.length===0}async restoreAutosavedViewState(){var e,n;let t=null;try{t=await aT()}catch{t=null}t&&(this.spectatorPitch=t.camera.pitch,this.spectatorYaw=t.camera.yaw,this.camera.position.set(t.camera.position.x,t.camera.position.y,t.camera.position.z),this.applySpectatorCameraOrientation(),this.setMobileSidebarOpen(t.menuOpen??!1,!1),this.paletteFilter=t.paletteFilter??"",this.paletteFilterInput.value=this.paletteFilter,this.resolutionPreset=t.resolutionPreset??"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.viewDistancePreset=((e=t.viewDistance)==null?void 0:e.preset)??"MEDIUM",this.viewDistanceCustomDistance=((n=t.viewDistance)==null?void 0:n.customDistance)??Ls.MEDIUM.distance,this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.lightingAmbient=t.lighting.ambient,this.fogColorHex=t.lighting.fogColorHex||"#ffffff",this.skyboxUiIntensity=t.lighting.skyboxIntensity,this.syncLightingInputs(),this.applyLightingSettings())}}function eo(){return new Promise((r,t)=>{const e=indexedDB.open(UE,1);e.onerror=()=>t(e.error),e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains(mn)||n.createObjectStore(mn)},e.onsuccess=()=>r(e.result)})}async function gm(r,t){const e=await eo();try{return await new Promise((n,i)=>{const s=e.transaction(mn,r),o=s.objectStore(mn),a=t(o);a.onerror=()=>i(a.error),a.onsuccess=()=>n(a.result),s.onerror=()=>i(s.error)})}finally{e.close()}}function du(r,t){return gm("readwrite",e=>e.put(t,r)).then(()=>{})}async function ka(r){return await gm("readonly",e=>e.get(r))??null}function oT(r){return du(dm,r)}function aT(){return ka(dm)}function ea(r){return`${BE}:${r}`}function lT(){return`slot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function ip(r,t){const e=Date.now();return{id:r,name:t,createdAt:e,updatedAt:e}}function cT(r,t){const e=Date.now();return r.map(n=>n.id===t?{...n,updatedAt:e}:n)}async function hT(){const r=await ka(fm);return Array.isArray(r)?r.filter(t=>!!(t&&typeof t.id=="string"&&typeof t.name=="string")).sort((t,e)=>t.createdAt-e.createdAt):[]}function Rr(r){return du(fm,r)}function uT(){return ka(pm)}function Ir(r){return du(pm,r)}function ir(r){return`slot:${r}:`}function fu(r){return`${ir(r)}meta`}function _m(r,t){return`${ir(r)}chunk:${t}`}function xm(r,t){return`${ir(r)}entity:${t}`}async function dT(r,t){const e=await eo();try{await new Promise((n,i)=>{const s=e.transaction(mn,r),o=s.objectStore(mn),a=o.openCursor();a.onerror=()=>i(a.error),a.onsuccess=()=>{const l=a.result;if(!l){n();return}Promise.resolve(t(l.key,l.value,o)).then(()=>l.continue()).catch(i)},s.onerror=()=>i(s.error)})}finally{e.close()}}async function fT(r,t,e,n){await Th(r);const i=await eo();try{await new Promise((s,o)=>{const a=i.transaction(mn,"readwrite"),l=a.objectStore(mn);l.put(t,fu(r));for(const c of e)l.put(c,_m(r,c.chunkId));for(const c of n)l.put(c,xm(r,c.key));a.oncomplete=()=>s(),a.onerror=()=>o(a.error)})}finally{i.close()}}async function pT(r,t,e,n){const i=await eo();try{await new Promise((s,o)=>{const a=i.transaction(mn,"readwrite"),l=a.objectStore(mn);l.put(t,fu(r));for(const c of e){const h=_m(r,c.chunkId);c.snapshot?l.put(c.snapshot,h):l.delete(h)}if(n){const c=l.openCursor();c.onerror=()=>o(c.error),c.onsuccess=()=>{const h=c.result;if(!h){for(const u of n)l.put(u,xm(r,u.key));return}typeof h.key=="string"&&h.key.startsWith(`${ir(r)}entity:`)&&h.delete(),h.continue()}}a.oncomplete=()=>s(),a.onerror=()=>o(a.error)})}finally{i.close()}}async function mT(r){const t=await ka(fu(r));if(!t)return null;const e={},n={},i=ir(r);return await dT("readonly",(s,o)=>{if(typeof s=="string"){if(s.startsWith(`${i}chunk:`)){const a=o;for(let l=0;l<a.blocks.length;l++){const c=a.blocks[l];if(c===0)continue;const h=Zt.blockIndexToLocalCoordinate(l),u=`${a.originCoordinate.x+h.x},${a.originCoordinate.y+h.y},${a.originCoordinate.z+h.z}`,d=a.rotations[l]??0;e[u]=d===0?c:{i:c,r:d}}return}if(s.startsWith(`${i}entity:`)){const a=o;n[a.key]=a.options}}}),{meta:t,world:{blockTypes:t.blockTypes,blocks:e,...Object.keys(n).length>0?{entities:n}:{}}}}async function Th(r){const t=await eo();try{await new Promise((e,n)=>{const i=t.transaction(mn,"readwrite"),s=i.objectStore(mn),o=ir(r),a=s.openCursor();a.onerror=()=>n(a.error),a.onsuccess=()=>{const l=a.result;if(!l){e();return}typeof l.key=="string"&&l.key.startsWith(o)&&l.delete(),l.continue()},i.onerror=()=>n(i.error)})}finally{t.close()}}function Xl(r,t,e,n){if(n===0||t===0)return Number.POSITIVE_INFINITY;const i=n>0?e+1:e;return Math.abs((i-r)/t)}function sp(r){return`${(r/(1024*1024)).toFixed(1)} MB`}function ql(r){return`${r.x},${r.y},${r.z}`}function na(r,t){if(r.length!==t.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function rp(r){switch(r){case"KeyW":return"key_w";case"KeyA":return"key_a";case"KeyS":return"key_s";case"KeyD":return"key_d";case"Space":return"space";case"ShiftLeft":case"ShiftRight":return"shift";default:return r.toLowerCase()}}function Ps(r){const t=r.split(",");if(t.length!==3)return null;const e=Number(t[0]),n=Number(t[1]),i=Number(t[2]);return!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(i)?null:{x:e,y:n,z:i}}function gT(r,t){const e=r.x-t.x,n=r.z-t.y;return e*e+n*n}function Vs(r){return Math.max(0,Math.min(1,1-jf+r*jf))}function op(r,t){return new ut(Math.min(1,r.r*t),Math.min(1,r.g*t),Math.min(1,r.b*t))}function _T(r){return{x:r.x+.5,y:r.y+.5,z:r.z+.5}}function xT(r){if(!r||typeof r!="object")return null;const t=r.tintColor;if(typeof t=="string"&&t.length>0)try{return new ut(t)}catch{return null}if(Array.isArray(t)&&t.length>=3){const e=Number(t[0]),n=Number(t[1]),i=Number(t[2]);if(Number.isFinite(e)&&Number.isFinite(n)&&Number.isFinite(i))return new ut(e,n,i)}if(t&&typeof t=="object"){const e=t,n=Number(e.r??e.x),i=Number(e.g??e.y),s=Number(e.b??e.z);if(Number.isFinite(n)&&Number.isFinite(i)&&Number.isFinite(s))return new ut(n,i,s)}return null}function yT(r){if(ws.set(1,1,1),!r||typeof r!="object")return ws;const t=r,e=t.modelScale??t.scale;if(typeof e=="number")return ws.setScalar(e),ws;if(e&&typeof e=="object"){const n=e;ws.set(Number(n.x??1)||1,Number(n.y??1)||1,Number(n.z??1)||1)}return ws}function vT(r){if(Tr.identity(),!r||typeof r!="object")return Tr;const e=r.rotation;if(!e||typeof e!="object")return Tr;const n=e;return typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"&&typeof n.w=="number"&&Tr.set(n.x,n.y,n.z,n.w),Tr}new rT(um);
