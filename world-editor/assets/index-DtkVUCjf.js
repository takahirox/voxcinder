var bp=Object.defineProperty;var Ep=(s,e,t)=>e in s?bp(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var R=(s,e,t)=>Ep(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="183",Tp=0,Bh=1,Cp=2,To=1,Ap=2,ar=3,yn=0,Vt=1,$t=2,Qn=0,Ss=1,Uh=2,Nh=3,Fh=4,wp=5,Vi=100,Rp=101,Ip=102,Lp=103,Pp=104,Dp=200,Bp=201,Up=202,Np=203,ul=204,dl=205,Fp=206,kp=207,Op=208,zp=209,Vp=210,Hp=211,Gp=212,Wp=213,Xp=214,fl=0,pl=1,ml=2,Cs=3,gl=4,_l=5,xl=6,vl=7,af=0,qp=1,$p=2,Pn=0,lf=1,cf=2,hf=3,uf=4,df=5,ff=6,pf=7,kh="attached",Yp="detached",mf=300,qi=301,As=302,aa=303,la=304,jo=306,ws=1e3,Rn=1001,No=1002,bt=1003,gf=1004,lr=1005,wt=1006,Co=1007,jn=1008,nn=1009,_f=1010,xf=1011,vr=1012,Vc=1013,Un=1014,ln=1015,ti=1016,Hc=1017,Gc=1018,yr=1020,vf=35902,yf=35899,Mf=1021,Sf=1022,cn=1023,ni=1026,Wi=1027,Wc=1028,Xc=1029,Rs=1030,qc=1031,$c=1033,Ao=33776,wo=33777,Ro=33778,Io=33779,yl=35840,Ml=35841,Sl=35842,bl=35843,El=36196,Tl=37492,Cl=37496,Al=37488,wl=37489,Rl=37490,Il=37491,Ll=37808,Pl=37809,Dl=37810,Bl=37811,Ul=37812,Nl=37813,Fl=37814,kl=37815,Ol=37816,zl=37817,Vl=37818,Hl=37819,Gl=37820,Wl=37821,Xl=36492,ql=36494,$l=36495,Yl=36283,Kl=36284,jl=36285,Zl=36286,Mr=2300,Sr=2301,ca=2302,Oh=2303,zh=2400,Vh=2401,Hh=2402,Kp=2500,jp=0,bf=1,Jl=2,Zp=3200,Ef=0,Jp=1,xi="",St="srgb",Yt="srgb-linear",Fo="linear",it="srgb",Ji=7680,Gh=519,Qp=512,em=513,tm=514,Yc=515,nm=516,im=517,Kc=518,sm=519,Ql=35044,Pr=35048,yi="300 es",In=2e3,br=2001;function rm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function om(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function am(){const s=Er("canvas");return s.style.display="block",s}const Wh={};function ko(...s){const e="THREE."+s.shift();console.log(e,...s)}function Tf(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=Tf(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Be(...s){s=Tf(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Oo(...s){const e=s.join(" ");e in Wh||(Wh[e]=!0,Ae(...s))}function lm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const cm={[fl]:pl,[ml]:xl,[gl]:vl,[Cs]:_l,[pl]:fl,[xl]:ml,[vl]:gl,[_l]:Cs};class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xh=1234567;const bs=Math.PI/180,Is=180/Math.PI;function vn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function jc(s,e){return(s%e+e)%e}function hm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function um(s,e,t){return s!==e?(t-s)/(e-s):0}function dr(s,e,t){return(1-t)*s+t*e}function dm(s,e,t,n){return dr(s,e,1-Math.exp(-t*n))}function fm(s,e=1){return e-Math.abs(jc(s,e*2)-e)}function pm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _m(s,e){return s+Math.random()*(e-s)}function xm(s){return s*(.5-Math.random())}function vm(s){s!==void 0&&(Xh=s);let e=Xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ym(s){return s*bs}function Mm(s){return s*Is}function Sm(s){return(s&s-1)===0&&s!==0}function bm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Em(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Cm={DEG2RAD:bs,RAD2DEG:Is,generateUUID:vn,clamp:Ye,euclideanModulo:jc,mapLinear:hm,inverseLerp:um,lerp:dr,damp:dm,pingpong:fm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:_m,randFloatSpread:xm,seededRandom:vm,degToRad:ym,radToDeg:Mm,isPowerOfTwo:Sm,ceilPowerOfTwo:bm,floorPowerOfTwo:Em,setQuaternionFromProperEuler:Tm,normalize:st,denormalize:xn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const v=Math.acos(p),b=Math.sin(v);g=Math.sin(g*v)/b,a=Math.sin(a*v)/b,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new D,qh=new Fn;class He{constructor(e,t,n,i,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],v=i[1],b=i[4],M=i[7],T=i[2],A=i[5],C=i[8];return r[0]=o*_+a*v+l*T,r[3]=o*p+a*b+l*A,r[6]=o*g+a*M+l*C,r[1]=c*_+h*v+u*T,r[4]=c*p+h*b+u*A,r[7]=c*g+h*M+u*C,r[2]=d*_+f*v+m*T,r[5]=d*p+f*b+m*A,r[8]=d*g+f*M+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new He,$h=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Am(){const s={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?Fo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Yt]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:$h,fromXYZ:Yh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:it,toXYZ:$h,fromXYZ:Yh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),s}const je=Am();function ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qi;class wm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qi===void 0&&(Qi=Er("canvas")),Qi.width=e.width,Qi.height=e.height;const i=Qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rm=0;class Zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(da(i[o].image)):r.push(da(i[o]))}else r=da(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let Im=0;const fa=new D;class Rt extends Us{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Rn,i=Rn,r=wt,o=jn,a=cn,l=nn,c=Rt.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=vn(),this.name="",this.source=new Zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=mf;Rt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(f+1)/2,T=(g+1)/2,A=(h+d)/4,C=(u+_)/4,x=(m+p)/4;return b>M&&b>T?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=C/n):M>T?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=x/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=x/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lm extends Us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Rt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Lm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cf extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fe{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,m,_,p){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,_,p)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Bm)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),oi.crossVectors(n,Jt),oi.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),oi.crossVectors(n,Jt)),oi.normalize(),Dr.crossVectors(Jt,oi),i[0]=oi.x,i[4]=Dr.x,i[8]=Jt.x,i[1]=oi.y,i[5]=Dr.y,i[9]=Jt.y,i[2]=oi.z,i[6]=Dr.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],b=n[7],M=n[11],T=n[15],A=i[0],C=i[4],x=i[8],S=i[12],V=i[1],I=i[5],k=i[9],O=i[13],N=i[2],F=i[6],H=i[10],z=i[14],ee=i[3],Q=i[7],oe=i[11],de=i[15];return r[0]=o*A+a*V+l*N+c*ee,r[4]=o*C+a*I+l*F+c*Q,r[8]=o*x+a*k+l*H+c*oe,r[12]=o*S+a*O+l*z+c*de,r[1]=h*A+u*V+d*N+f*ee,r[5]=h*C+u*I+d*F+f*Q,r[9]=h*x+u*k+d*H+f*oe,r[13]=h*S+u*O+d*z+f*de,r[2]=m*A+_*V+p*N+g*ee,r[6]=m*C+_*I+p*F+g*Q,r[10]=m*x+_*k+p*H+g*oe,r[14]=m*S+_*O+p*z+g*de,r[3]=v*A+b*V+M*N+T*ee,r[7]=v*C+b*I+M*F+T*Q,r[11]=v*x+b*k+M*H+T*oe,r[15]=v*S+b*O+M*z+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],v=l*f-c*d,b=a*f-c*u,M=a*d-l*u,T=o*f-c*h,A=o*d-l*h,C=o*u-a*h;return t*(_*v-p*b+g*M)-n*(m*v-p*T+g*A)+i*(m*b-_*T+g*C)-r*(m*M-_*A+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=t*a-n*o,b=t*l-i*o,M=t*c-r*o,T=n*l-i*a,A=n*c-r*a,C=i*c-r*l,x=h*_-u*m,S=h*p-d*m,V=h*g-f*m,I=u*p-d*_,k=u*g-f*_,O=d*g-f*p,N=v*O-b*k+M*I+T*V-A*S+C*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=(a*O-l*k+c*I)*F,e[1]=(i*k-n*O-r*I)*F,e[2]=(_*C-p*A+g*T)*F,e[3]=(d*A-u*C-f*T)*F,e[4]=(l*V-o*O-c*S)*F,e[5]=(t*O-i*V+r*S)*F,e[6]=(p*M-m*C-g*b)*F,e[7]=(h*C-d*M+f*b)*F,e[8]=(o*k-a*V+c*x)*F,e[9]=(n*V-t*k-r*x)*F,e[10]=(m*A-_*M+g*v)*F,e[11]=(u*M-h*A-f*v)*F,e[12]=(a*S-o*I-l*x)*F,e[13]=(t*I-n*S+i*x)*F,e[14]=(_*b-m*T-p*v)*F,e[15]=(h*T-u*b+d*v)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,_=o*h,p=o*u,g=a*u,v=l*c,b=l*h,M=l*u,T=n.x,A=n.y,C=n.z;return i[0]=(1-(_+g))*T,i[1]=(f+M)*T,i[2]=(m-b)*T,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(d+g))*A,i[6]=(p+v)*A,i[7]=0,i[8]=(m+b)*C,i[9]=(p-v)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=es.set(i[0],i[1],i[2]).length();const a=es.set(i[4],i[5],i[6]).length(),l=es.set(i[8],i[9],i[10]).length();r<0&&(o=-o),fn.copy(this);const c=1/o,h=1/a,u=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=In,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===In)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===br)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=In,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===In)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===br)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new D,fn=new Fe,Dm=new D(0,0,0),Bm=new D(1,1,1),oi=new D,Dr=new D,Jt=new D,Kh=new Fe,jh=new Fn;class Mn{constructor(e=0,t=0,n=0,i=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jh.setFromEuler(this),this.setFromQuaternion(jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Um=0;const Zh=new D,ts=new Fn,Hn=new Fe,Br=new D,zs=new D,Nm=new D,Fm=new Fn,Jh=new D(1,0,0),Qh=new D(0,1,0),eu=new D(0,0,1),tu={type:"added"},km={type:"removed"},ns={type:"childadded",child:null},pa={type:"childremoved",child:null};class xt extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new D,t=new Mn,n=new Fn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new He}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(zs,Br,this.up):Hn.lookAt(Br,zs,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Hn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),ns.child=e,this.dispatchEvent(ns),ns.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new D(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jt extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Om={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Om)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ga(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=jc(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ga(o,r,e+1/3),this.g=ga(o,r,e),this.b=ga(o,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return je.workingToColorSpace(zt.copy(this),e),Math.round(Ye(zt.r*255,0,255))*65536+Math.round(Ye(zt.g*255,0,255))*256+Math.round(Ye(zt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=St){je.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ur);const n=dr(ai.h,Ur.h,t),i=dr(ai.s,Ur.s,t),r=dr(ai.l,Ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new me;me.NAMES=wf;class zm extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new D,Gn=new D,_a=new D,Wn=new D,is=new D,ss=new D,nu=new D,xa=new D,va=new D,ya=new D,Ma=new mt,Sa=new mt,ba=new mt;class an{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){pn.subVectors(i,t),Gn.subVectors(n,t),_a.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(Gn),l=pn.dot(_a),c=Gn.dot(Gn),h=Gn.dot(_a),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ma.setScalar(0),Sa.setScalar(0),ba.setScalar(0),Ma.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ma,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(ba,r.z),o}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Gn.subVectors(e,t),pn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),pn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;is.subVectors(i,n),ss.subVectors(r,n),xa.subVectors(e,n);const l=is.dot(xa),c=ss.dot(xa);if(l<=0&&c<=0)return t.copy(n);va.subVectors(e,i);const h=is.dot(va),u=ss.dot(va);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(is,o);ya.subVectors(e,r);const f=is.dot(ya),m=ss.dot(ya);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ss,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return nu.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(nu,a);const g=1/(p+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ht{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Fr.subVectors(this.max,Vs),rs.subVectors(e.a,Vs),os.subVectors(e.b,Vs),as.subVectors(e.c,Vs),li.subVectors(os,rs),ci.subVectors(as,os),Ei.subVectors(rs,as);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ei.z,Ei.y,li.z,0,-li.x,ci.z,0,-ci.x,Ei.z,0,-Ei.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ei.y,Ei.x,0];return!Ea(t,rs,os,as,Fr)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,rs,os,as,Fr))?!1:(kr.crossVectors(li,ci),t=[kr.x,kr.y,kr.z],Ea(t,rs,os,as,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new D,new D,new D,new D,new D,new D,new D,new D],mn=new D,Nr=new Ht,rs=new D,os=new D,as=new D,li=new D,ci=new D,Ei=new D,Vs=new D,Fr=new D,kr=new D,Ti=new D;function Ea(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const At=new D,Or=new Ve;let Vm=0;class Ze{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ql,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}}class Rf extends Ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class If extends Ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hn extends Ze{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hm=new Ht,Hs=new D,Ta=new D;class Ft{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Ta)),this.expandByPoint(Hs.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gm=0;const sn=new Fe,Ca=new xt,ls=new D,Qt=new Ht,Gs=new Ht,Dt=new D;class Bt extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rm(e)?If:Rf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Qt.min,Gs.min),Qt.expandByPoint(Dt),Dt.addVectors(Qt.max,Gs.max),Qt.expandByPoint(Dt)):(Qt.expandByPoint(Gs.min),Qt.expandByPoint(Gs.max))}Qt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Dt.add(ls)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new D,l[x]=new D;const c=new D,h=new D,u=new D,d=new Ve,f=new Ve,m=new Ve,_=new D,p=new D;function g(x,S,V){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,V),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,V),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[x].add(_),a[S].add(_),a[V].add(_),l[x].add(p),l[S].add(p),l[V].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,S=v.length;x<S;++x){const V=v[x],I=V.start,k=V.count;for(let O=I,N=I+k;O<N;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new D,M=new D,T=new D,A=new D;function C(x){T.fromBufferAttribute(i,x),A.copy(T);const S=a[x];b.copy(S),b.sub(T.multiplyScalar(T.dot(S))).normalize(),M.crossVectors(A,S);const I=M.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,I)}for(let x=0,S=v.length;x<S;++x){const V=v[x],I=V.start,k=V.count;for(let O=I,N=I+k;O<N;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Ze(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ql,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new D;class Jc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Xm=0;class Bn extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=Ss,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ul&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qn=new D,Aa=new D,zr=new D,hi=new D,wa=new D,Vr=new D,Ra=new D;class Zo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Aa.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Aa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zr),a=hi.dot(this.direction),l=-hi.dot(zr),c=hi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Aa).addScaledVector(zr,d),f}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),i=qn.dot(qn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,i,r){wa.subVectors(t,e),Vr.subVectors(n,e),Ra.crossVectors(wa,Vr);let o=this.direction.dot(Ra),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(Vr.crossVectors(hi,Vr));if(l<0)return null;const c=a*this.direction.dot(wa.cross(hi));if(c<0||l+c>o)return null;const h=-a*hi.dot(Ra);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ln extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const iu=new Fe,Ci=new Zo,Hr=new Ft,su=new D,Gr=new D,Wr=new D,Xr=new D,Ia=new D,qr=new D,ru=new D,$r=new D;class _t extends xt{constructor(e=new Bt,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ia.fromBufferAttribute(u,e),o?qr.addScaledVector(Ia,h):qr.addScaledVector(Ia.sub(t),h))}t.add(qr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Hr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Hr,su)===null||Ci.origin.distanceToSquared(su)>(e.far-e.near)**2))&&(iu.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(iu),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,T=b;M<T;M+=3){const A=a.getX(M),C=a.getX(M+1),x=a.getX(M+2);i=Yr(this,g,e,n,c,h,u,A,C,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=a.getX(p),b=a.getX(p+1),M=a.getX(p+2);i=Yr(this,o,e,n,c,h,u,v,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,T=b;M<T;M+=3){const A=M,C=M+1,x=M+2;i=Yr(this,g,e,n,c,h,u,A,C,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const v=p,b=p+1,M=p+2;i=Yr(this,o,e,n,c,h,u,v,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function qm(s,e,t,n,i,r,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===yn,a),l===null)return null;$r.copy(a),$r.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:s}}function Yr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Gr),s.getVertexPosition(l,Wr),s.getVertexPosition(c,Xr);const h=qm(s,e,t,n,Gr,Wr,Xr,ru);if(h){const u=new D;an.getBarycoord(ru,Gr,Wr,Xr,u),i&&(h.uv=an.getInterpolatedAttribute(i,a,l,c,u,new Ve)),r&&(h.uv1=an.getInterpolatedAttribute(r,a,l,c,u,new Ve)),o&&(h.normal=an.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};an.getNormal(Gr,Wr,Xr,d.normal),h.face=d,h.barycoord=u}return h}const ou=new D,au=new mt,lu=new mt,$m=new D,cu=new Fe,Kr=new D,La=new Ft,hu=new Fe,Pa=new Zo;class Ym extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kh,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ht),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingBox.expandByPoint(Kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ft),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingSphere.expandByPoint(Kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(i),e.ray.intersectsSphere(La)!==!1&&(hu.copy(i).invert(),Pa.copy(e.ray).applyMatrix4(hu),!(this.boundingBox!==null&&Pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;au.fromBufferAttribute(i.attributes.skinIndex,e),lu.fromBufferAttribute(i.attributes.skinWeight,e),ou.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=lu.getComponent(r);if(o!==0){const a=au.getComponent(r);cu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector($m.copy(ou).applyMatrix4(cu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Lf extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qc extends Rt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=bt,h=bt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=new Fe,Km=new Fe;class eh{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Km;uu.multiplyMatrices(a,t[r]),uu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new eh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qc(t,e,e,cn,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Ae("Skeleton: No bone found with UUID:",r),o=new Lf),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Tr extends Ze{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new Fe,du=new Fe,jr=[],fu=new Ht,jm=new Fe,Ws=new _t,Xs=new Ft;class Pf extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ht),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),fu.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ft),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Xs.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),e.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cs),du.multiplyMatrices(n,cs),Ws.matrixWorld=du,Ws.raycast(e,jr);for(let o=0,a=jr.length;o<a;o++){const l=jr[o];l.instanceId=r,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qc(new Float32Array(i*this.count),i,this.count,Wc,ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Da=new D,Zm=new D,Jm=new He;class ki{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Da.subVectors(n,t).cross(Zm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jm.getNormalMatrix(e),i=this.coplanarPoint(Da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ft,Qm=new Ve(.5,.5),Zr=new D;class Jo{constructor(e=new ki,t=new ki,n=new ki,i=new ki,r=new ki,o=new ki){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],b=r[13],M=r[14],T=r[15];if(i[0].setComponents(c-o,f-h,g-m,T-v).normalize(),i[1].setComponents(c+o,f+h,g+m,T+v).normalize(),i[2].setComponents(c+a,f+u,g+_,T+b).normalize(),i[3].setComponents(c-a,f-u,g-_,T-b).normalize(),n)i[4].setComponents(l,d,p,M).normalize(),i[5].setComponents(c-l,f-d,g-p,T-M).normalize();else if(i[4].setComponents(c-l,f-d,g-p,T-M).normalize(),t===In)i[5].setComponents(c+l,f+d,g+p,T+M).normalize();else if(t===br)i[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=Qm.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zr.x=i.normal.x>0?e.max.x:e.min.x,Zr.y=i.normal.y>0?e.max.y:e.min.y,Zr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zo extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vo=new D,Ho=new D,pu=new Fe,qs=new Zo,Jr=new Ft,Ba=new D,mu=new D;class th extends xt{constructor(e=new Bt,t=new zo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Vo.fromBufferAttribute(t,i-1),Ho.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vo.distanceTo(Ho);e.setAttribute("lineDistance",new hn(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;pu.copy(i).invert(),qs.copy(e.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=h.getX(_),v=h.getX(_+1),b=Qr(this,e,qs,l,g,v,_);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(m-1),p=h.getX(f),g=Qr(this,e,qs,l,_,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=Qr(this,e,qs,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Qr(this,e,qs,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Vo.fromBufferAttribute(a,i),Ho.fromBufferAttribute(a,r),t.distanceSqToSegment(Vo,Ho,Ba,mu)>n)return;Ba.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ba);if(!(c<e.near||c>e.far))return{distance:c,point:mu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const gu=new D,_u=new D;class ec extends th{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gu.fromBufferAttribute(t,i),_u.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gu.distanceTo(_u);e.setAttribute("lineDistance",new hn(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eg extends th{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Df extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xu=new Fe,tc=new Zo,eo=new Ft,to=new D;class tg extends xt{constructor(e=new Bt,t=new Df){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;xu.copy(i).invert(),tc.copy(e.ray).applyMatrix4(xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const p=c.getX(m);to.fromBufferAttribute(u,p),vu(to,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)to.fromBufferAttribute(u,m),vu(to,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vu(s,e,t,n,i,r,o){const a=tc.distanceSqToPoint(s);if(a<t){const l=new D;tc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class nh extends Rt{constructor(e=[],t=qi,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ng extends Rt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cr extends Rt{constructor(e,t,n=Un,i,r,o,a=bt,l=bt,c,h=ni,u=1){if(h!==ni&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ig extends Cr{constructor(e,t=Un,n=qi,i,r,o=bt,a=bt,l,c=ni){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bf extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zn extends Bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(h,3)),this.setAttribute("uv",new hn(u,2));function m(_,p,g,v,b,M,T,A,C,x,S){const V=M/C,I=T/x,k=M/2,O=T/2,N=A/2,F=C+1,H=x+1;let z=0,ee=0;const Q=new D;for(let oe=0;oe<H;oe++){const de=oe*I-O;for(let fe=0;fe<F;fe++){const Ne=fe*V-k;Q[_]=Ne*v,Q[p]=de*b,Q[g]=N,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[g]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(fe/C),u.push(1-oe/x),z+=1}}for(let oe=0;oe<x;oe++)for(let de=0;de<C;de++){const fe=d+de+F*oe,Ne=d+de+F*(oe+1),ct=d+(de+1)+F*(oe+1),Je=d+(de+1)+F*oe;l.push(fe,Ne,Je),l.push(Ne,ct,Je),ee+=6}a.addGroup(f,ee,S),f+=ee,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const no=new D,io=new D,Ua=new D,so=new an;class yu extends Bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(bs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:p,c:g}=so;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),so.getNormal(Ua),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const b=(v+1)%3,M=u[v],T=u[b],A=so[h[v]],C=so[h[b]],x=`${M}_${T}`,S=`${T}_${M}`;S in d&&d[S]?(Ua.dot(d[S].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(C.x,C.y,C.z)),d[S]=null):x in d||(d[x]={index0:c[v],index1:c[b],normal:Ua.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:p}=d[m];no.fromBufferAttribute(a,_),io.fromBufferAttribute(a,p),f.push(no.x,no.y,no.z),f.push(io.x,io.y,io.z)}this.setAttribute("position",new hn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wr extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const v=g*d-o;for(let b=0;b<c;b++){const M=b*u-r;m.push(M,-v,0),_.push(0,0,1),p.push(b/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const b=v+c*g,M=v+c*(g+1),T=v+1+c*(g+1),A=v+1+c*g;f.push(b,M,A),f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ls(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(s){const e={};for(let t=0;t<s.length;t++){const n=Ls(s[t]);for(const i in n)e[i]=n[i]}return e}function sg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Uf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Nn={clone:Ls,merge:Xt};var rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ag extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ih extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ef,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends ih{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class lg extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cg extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ro(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function hg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Mu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Nf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ns{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ug extends Ns{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:r=e,a=2*t-n;break;case Hh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:o=e,l=2*n-t;break;case Hh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,b=(-1-f)*p+(1.5+f)*_+.5*m,M=f*p-f*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+b*o[l+T]+M*o[u+T];return r}}class dg extends Ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class fg extends Ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pg extends Ns{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const _=(n-t)/(i-t),p=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*p+o[l+g]*_;return r}const f=a*2,m=e-1;for(let _=0;_!==a;++_){const p=o[c+_],g=o[l+_],v=m*f+_*2,b=d[v],M=d[v+1],T=e*f+_*2,A=u[T],C=u[T+1];let x=(n-t)/(i-t),S,V,I,k,O;for(let N=0;N<8;N++){S=x*x,V=S*x,I=1-x,k=I*I,O=k*I;const H=O*t+3*k*x*b+3*I*S*A+V*i-n;if(Math.abs(H)<1e-10)break;const z=3*k*(b-t)+6*I*x*(A-b)+3*S*(i-A);if(Math.abs(z)<1e-10)break;x=x-H/z,x=Math.max(0,Math.min(1,x))}r[_]=O*p+3*k*x*M+3*I*S*C+V*g}return r}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ug(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new pg(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case ca:t=this.InterpolantFactoryMethodSmooth;break;case Oh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return ca;case this.InterpolantFactoryMethodBezier:return Oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Be("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&om(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ca,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Sr;class Fs extends Sn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Mr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ff extends Sn{constructor(e,t,n,i){super(e,t,n,i)}}Ff.prototype.ValueTypeName="color";class Ps extends Sn{constructor(e,t,n,i){super(e,t,n,i)}}Ps.prototype.ValueTypeName="number";class mg extends Ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ds extends Sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new mg(this.times,this.values,this.getValueSize(),e)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Sn{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Mr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Sn{constructor(e,t,n,i){super(e,t,n,i)}}Bs.prototype.ValueTypeName="vector";class gg{constructor(e="",t=-1,n=[],i=Kp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=hg(l);l=Mu(l,1,h),c=Mu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Ae("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Be("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const p=[],g=[];Nf(f,p,g,m),p.length!==0&&_.push(new u(d,p,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const p=[],g=[];for(let v=0;v!==d[m].morphTargets.length;++v){const b=d[m];p.push(b.time),g.push(b.morphTarget===_?1:0)}i.push(new Ps(".morphTargetInfluence["+_+"]",p,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Bs,f+".position",d,"pos",i),n(Ds,f+".quaternion",d,"rot",i),n(Bs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function _g(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Bs;case"color":return Ff;case"quaternion":return Ds;case"bool":case"boolean":return Fs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_g(s.type);if(s.times===void 0){const t=[],n=[];Nf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Jn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Su(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Su(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Su(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class vg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yg=new vg;class Ki{constructor(e){this.manager=e!==void 0?e:yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class Mg extends Error{constructor(e,t){super(e),this.response=t}}class kf extends Ki{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Jn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=$n[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const p=new ReadableStream({start(g){v();function v(){u.read().then(({done:b,value:M})=>{if(b)g.close();else{_+=M.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let A=0,C=h.length;A<C;A++){const x=h[A];x.onProgress&&x.onProgress(T)}g.enqueue(M),v()}},b=>{g.error(b)})}}});return new Response(p)}else throw new Mg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Jn.add(`file:${e}`,c);const h=$n[e];delete $n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=$n[e];if(h===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hs=new WeakMap;class Of extends Ki{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Jn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=hs.get(o);u===void 0&&(u=[],hs.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Er("img");function l(){h(),t&&t(this);const u=hs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Jn.remove(`image:${e}`);const d=hs.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Jn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Sg extends Ki{constructor(e){super(e)}load(e,t,n,i){const r=new nh;r.colorSpace=St;const o=new Of(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class bg extends Ki{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,o=new Of(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Qo extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Na=new Fe,bu=new D,Eu=new D;class sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===br||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oo=new D,ao=new Fn,En=new D;class zf extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,ao,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,En.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(oo,ao,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new D,Tu=new Ve,Cu=new Ve;class qt extends zf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Tu,Cu),t.subVectors(Cu,Tu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Eg extends sh{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tg extends Qo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Eg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Cg extends sh{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ag extends Qo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ea extends zf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wg extends sh{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rg extends Qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new wg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ig extends Qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Fa=new WeakMap;class Lg extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Jn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Fa.has(o)===!0)i&&i(Fa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Fa.set(l,c),Jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Jn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const us=-90,ds=1;class Pg extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(us,ds,e,t);i.layers=this.layers,this.add(i);const r=new qt(us,ds,e,t);r.layers=this.layers,this.add(r);const o=new qt(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new qt(us,ds,e,t);a.layers=this.layers,this.add(a);const l=new qt(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new qt(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Dg extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rh="\\[\\]\\.:\\/",Bg=new RegExp("["+rh+"]","g"),oh="[^"+rh+"]",Ug="[^"+rh.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",oh),Fg=/(WCOD+)?/.source.replace("WCOD",Ug),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),zg=new RegExp("^"+Ng+Fg+kg+Og+"$"),Vg=["material","materials","bones","map"];class Hg{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bg,"")}static parseTrackName(e){const t=zg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Vg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=Hg;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yn{constructor(e,t,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}function Au(s,e,t,n){const i=Gg(n);switch(t){case Mf:return s*e;case Wc:return s*e/i.components*i.byteLength;case Xc:return s*e/i.components*i.byteLength;case Rs:return s*e*2/i.components*i.byteLength;case qc:return s*e*2/i.components*i.byteLength;case Sf:return s*e*3/i.components*i.byteLength;case cn:return s*e*4/i.components*i.byteLength;case $c:return s*e*4/i.components*i.byteLength;case Ao:case wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ml:case bl:return Math.max(s,16)*Math.max(e,8)/4;case yl:case Sl:return Math.max(s,8)*Math.max(e,8)/2;case El:case Tl:case Al:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xl:case ql:case $l:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yl:case Kl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jl:case Zl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gg(s){switch(s){case nn:case _f:return{byteLength:1,components:1};case vr:case xf:case ti:return{byteLength:2,components:1};case Hc:case Gc:return{byteLength:2,components:4};case Un:case Vc:case ln:return{byteLength:4,components:1};case vf:case yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wg(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qg=`#ifdef USE_ALPHAHASH
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
#endif`,$g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
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
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg=`#ifdef USE_BATCHING
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
#endif`,e_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s_=`#ifdef USE_IRIDESCENCE
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
#endif`,r_=`#ifdef USE_BUMPMAP
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
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,p_=`#define PI 3.141592653589793
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
} // validated`,m_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g_=`vec3 transformedNormal = objectNormal;
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
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M_="gl_FragColor = linearToOutputTexel( gl_FragColor );",S_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
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
}`,D_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
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
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,k_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
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
#endif`,G_=`uniform sampler2D dfgLUT;
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
}`,W_=`
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
#endif`,X_=`#if defined( RE_IndirectDiffuse )
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
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R0=`float getShadowMask() {
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
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 diffuse;
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
}`,ox=`#define LAMBERT
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
}`,ax=`#define LAMBERT
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
}`,lx=`#define MATCAP
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
}`,cx=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,ux=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,px=`#define STANDARD
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
}`,mx=`#define STANDARD
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
}`,gx=`#define TOON
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
}`,_x=`#define TOON
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
}`,xx=`uniform float size;
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
}`,vx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,Mx=`uniform vec3 color;
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
}`,Sx=`uniform float rotation;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Xg,alphahash_pars_fragment:qg,alphamap_fragment:$g,alphamap_pars_fragment:Yg,alphatest_fragment:Kg,alphatest_pars_fragment:jg,aomap_fragment:Zg,aomap_pars_fragment:Jg,batching_pars_vertex:Qg,batching_vertex:e_,begin_vertex:t_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:s_,bumpmap_pars_fragment:r_,clipping_planes_fragment:o_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:c_,color_fragment:h_,color_pars_fragment:u_,color_pars_vertex:d_,color_vertex:f_,common:p_,cube_uv_reflection_fragment:m_,defaultnormal_vertex:g_,displacementmap_pars_vertex:__,displacementmap_vertex:x_,emissivemap_fragment:v_,emissivemap_pars_fragment:y_,colorspace_fragment:M_,colorspace_pars_fragment:S_,envmap_fragment:b_,envmap_common_pars_fragment:E_,envmap_pars_fragment:T_,envmap_pars_vertex:C_,envmap_physical_pars_fragment:F_,envmap_vertex:A_,fog_vertex:w_,fog_pars_vertex:R_,fog_fragment:I_,fog_pars_fragment:L_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:D_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:U_,lights_pars_begin:N_,lights_toon_fragment:k_,lights_toon_pars_fragment:O_,lights_phong_fragment:z_,lights_phong_pars_fragment:V_,lights_physical_fragment:H_,lights_physical_pars_fragment:G_,lights_fragment_begin:W_,lights_fragment_maps:X_,lights_fragment_end:q_,logdepthbuf_fragment:$_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:j_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:Q_,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,opaque_fragment:x0,packing:v0,premultiplied_alpha_fragment:y0,project_vertex:M0,dithering_fragment:S0,dithering_pars_fragment:b0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:C0,shadowmap_pars_vertex:A0,shadowmap_vertex:w0,shadowmask_pars_fragment:R0,skinbase_vertex:I0,skinning_pars_vertex:L0,skinning_vertex:P0,skinnormal_vertex:D0,specularmap_fragment:B0,specularmap_pars_fragment:U0,tonemapping_fragment:N0,tonemapping_pars_fragment:F0,transmission_fragment:k0,transmission_pars_fragment:O0,uv_pars_fragment:z0,uv_pars_vertex:V0,uv_vertex:H0,worldpos_vertex:G0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:$0,cube_vert:Y0,cube_frag:K0,depth_vert:j0,depth_frag:Z0,distance_vert:J0,distance_frag:Q0,equirect_vert:ex,equirect_frag:tx,linedashed_vert:nx,linedashed_frag:ix,meshbasic_vert:sx,meshbasic_frag:rx,meshlambert_vert:ox,meshlambert_frag:ax,meshmatcap_vert:lx,meshmatcap_frag:cx,meshnormal_vert:hx,meshnormal_frag:ux,meshphong_vert:dx,meshphong_frag:fx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:_x,points_vert:xx,points_frag:vx,shadow_vert:yx,shadow_frag:Mx,sprite_vert:Sx,sprite_frag:bx},ce={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},pt={basic:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Xt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Xt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new me(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Xt([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Xt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Xt([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Xt([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Xt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Xt([ce.lights,ce.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};pt.physical={uniforms:Xt([pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const lo={r:0,b:0,g:0},wi=new Mn,Ex=new Fe;function Tx(s,e,t,n,i,r){const o=new me(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const M=v.backgroundBlurriness>0;b=e.get(b,M)}return b}function m(v){let b=!1;const M=f(v);M===null?p(o,a):M&&M.isColor&&(p(M,1),b=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,b){const M=f(b);M&&(M.isCubeTexture||M.mapping===jo)?(c===void 0&&(c=new _t(new Zn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Ls(pt.backgroundCube.uniforms),vertexShader:pt.backgroundCube.vertexShader,fragmentShader:pt.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),wi.copy(b.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(wi)),c.material.toneMapped=je.getTransfer(M.colorSpace)!==it,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new _t(new wr(2,2),new Gt({name:"BackgroundMaterial",uniforms:Ls(pt.background.uniforms),vertexShader:pt.background.vertexShader,fragmentShader:pt.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=je.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,b){v.getRGB(lo,Uf(s)),t.buffers.color.setClear(lo.r,lo.g,lo.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function Cx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(I,k,O,N,F){let H=!1;const z=u(I,N,O,k);r!==z&&(r=z,c(r.object)),H=f(I,N,O,F),H&&m(I,N,O,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(I,k,O,N),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,k,O,N){const F=N.wireframe===!0;let H=n[k.id];H===void 0&&(H={},n[k.id]=H);const z=I.isInstancedMesh===!0?I.id:0;let ee=H[z];ee===void 0&&(ee={},H[z]=ee);let Q=ee[O.id];Q===void 0&&(Q={},ee[O.id]=Q);let oe=Q[F];return oe===void 0&&(oe=d(l()),Q[F]=oe),oe}function d(I){const k=[],O=[],N=[];for(let F=0;F<t;F++)k[F]=0,O[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:O,attributeDivisors:N,object:I,attributes:{},index:null}}function f(I,k,O,N){const F=r.attributes,H=k.attributes;let z=0;const ee=O.getAttributes();for(const Q in ee)if(ee[Q].location>=0){const de=F[Q];let fe=H[Q];if(fe===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),de===void 0||de.attribute!==fe||fe&&de.data!==fe.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function m(I,k,O,N){const F={},H=k.attributes;let z=0;const ee=O.getAttributes();for(const Q in ee)if(ee[Q].location>=0){let de=H[Q];de===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const fe={};fe.attribute=de,de&&de.data&&(fe.data=de.data),F[Q]=fe,z++}r.attributes=F,r.attributesNum=z,r.index=N}function _(){const I=r.newAttributes;for(let k=0,O=I.length;k<O;k++)I[k]=0}function p(I){g(I,0)}function g(I,k){const O=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;O[I]=1,N[I]===0&&(s.enableVertexAttribArray(I),N[I]=1),F[I]!==k&&(s.vertexAttribDivisor(I,k),F[I]=k)}function v(){const I=r.newAttributes,k=r.enabledAttributes;for(let O=0,N=k.length;O<N;O++)k[O]!==I[O]&&(s.disableVertexAttribArray(O),k[O]=0)}function b(I,k,O,N,F,H,z){z===!0?s.vertexAttribIPointer(I,k,O,F,H):s.vertexAttribPointer(I,k,O,N,F,H)}function M(I,k,O,N){_();const F=N.attributes,H=O.getAttributes(),z=k.defaultAttributeValues;for(const ee in H){const Q=H[ee];if(Q.location>=0){let oe=F[ee];if(oe===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),oe!==void 0){const de=oe.normalized,fe=oe.itemSize,Ne=e.get(oe);if(Ne===void 0)continue;const ct=Ne.buffer,Je=Ne.type,q=Ne.bytesPerElement,Z=Je===s.INT||Je===s.UNSIGNED_INT||oe.gpuType===Vc;if(oe.isInterleavedBufferAttribute){const ie=oe.data,Le=ie.stride,we=oe.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Q.locationSize;Pe++)g(Q.location+Pe,ie.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<Q.locationSize;Pe++)p(Q.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let Pe=0;Pe<Q.locationSize;Pe++)b(Q.location+Pe,fe/Q.locationSize,Je,de,Le*q,(we+fe/Q.locationSize*Pe)*q,Z)}else{if(oe.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)g(Q.location+ie,oe.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ie=0;ie<Q.locationSize;ie++)p(Q.location+ie);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let ie=0;ie<Q.locationSize;ie++)b(Q.location+ie,fe/Q.locationSize,Je,de,fe*q,fe/Q.locationSize*ie*q,Z)}}else if(z!==void 0){const de=z[ee];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(Q.location,de);break;case 3:s.vertexAttrib3fv(Q.location,de);break;case 4:s.vertexAttrib4fv(Q.location,de);break;default:s.vertexAttrib1fv(Q.location,de)}}}}v()}function T(){S();for(const I in n){const k=n[I];for(const O in k){const N=k[O];for(const F in N){const H=N[F];for(const z in H)h(H[z].object),delete H[z];delete N[F]}}delete n[I]}}function A(I){if(n[I.id]===void 0)return;const k=n[I.id];for(const O in k){const N=k[O];for(const F in N){const H=N[F];for(const z in H)h(H[z].object),delete H[z];delete N[F]}}delete n[I.id]}function C(I){for(const k in n){const O=n[k];for(const N in O){const F=O[N];if(F[I.id]===void 0)continue;const H=F[I.id];for(const z in H)h(H[z].object),delete H[z];delete F[I.id]}}}function x(I){for(const k in n){const O=n[k],N=I.isInstancedMesh===!0?I.id:0,F=O[N];if(F!==void 0){for(const H in F){const z=F[H];for(const ee in z)h(z[ee].object),delete z[ee];delete F[H]}delete O[N],Object.keys(O).length===0&&delete n[k]}}}function S(){V(),o=!0,r!==i&&(r=i,c(r.object))}function V(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:V,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Ax(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==cn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==nn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ln&&!x)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:A}}function Rx(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ki,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,b=v*4;let M=g.clippingState||null;l.value=M,M=h(m,d,b,f);for(let T=0;T!==b;++T)M[T]=t[T];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,M=f;b!==_;++b,M+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const vi=4,wu=[.125,.215,.35,.446,.526,.582],Hi=20,Ix=256,$s=new ea,Ru=new me;let ka=null,Oa=0,za=0,Va=!1;const Lx=new D;class Iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Lx}=r;ka=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Oa,za),this._renderer.xr.enabled=Va,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:ti,format:cn,colorSpace:Yt,depthBuffer:!1},i=Lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Px(r)),this._blurMaterial=Bx(r,e,t),this._ggxMaterial=Dx(r,e,t)}return i}_compileMaterial(e){const t=new _t(new Bt,e);this._renderer.compile(t,$s)}_sceneToCubeUV(e,t,n,i,r){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ru),u.toneMapping=Pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Zn,new Ln({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,g=!0):(p.color.copy(Ru),g=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const T=this._cubeSize;fs(i,M*T,b>2?T:0,T,T),u.setRenderTarget(i),g&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qi||e.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$s)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-vi?n-m+vi:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,fs(r,p,g,3*_,2*_),i.setRenderTarget(r),i.render(a,$s),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,fs(e,p,g,3*_,2*_),i.setRenderTarget(e),i.render(a,$s)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=r/m,p=isFinite(r)?1+Math.floor(h*_):Hi;p>Hi&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const g=[];let v=0;for(let C=0;C<Hi;++C){const x=C/_,S=Math.exp(-x*x/2);g.push(S),C===0?v+=S:C<p&&(v+=2*S)}for(let C=0;C<g.length;C++)g[C]=g[C]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const M=this._sizeLods[i],T=3*M*(i>b-vi?i-b+vi:0),A=4*(this._cubeSize-M);fs(t,T,A,3*M,2*M),l.setRenderTarget(t),l.render(u,$s)}}function Px(s){const e=[],t=[],n=[];let i=s;const r=s-vi+1+wu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-vi?l=wu[o-s+vi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,p=2,g=1,v=new Float32Array(_*m*f),b=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,x=A>2?0:-1,S=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(S,_*m*A),b.set(d,p*m*A);const V=[A,A,A,A,A,A];M.set(V,g*m*A)}const T=new Bt;T.setAttribute("position",new Ze(v,_)),T.setAttribute("uv",new Ze(b,p)),T.setAttribute("faceIndex",new Ze(M,g)),n.push(new _t(T,null)),i>vi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Lu(s,e,t){const n=new Dn(s,e,t);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Dx(s,e,t){return new Gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Bx(s,e,t){const n=new Float32Array(Hi),i=new D(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Pu(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Du(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ta(){return`

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
	`}class Hf extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zn(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Qn});r.uniforms.tEquirect.value=t;const o=new _t(i,r),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=wt),new Pg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function Ux(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===aa||f===la)if(e.has(d)){const m=e.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new Hf(m.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,m=f===aa||f===la,_=f===qi||f===As;if(m||_){let p=t.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Iu(s)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const v=d.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Iu(s)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===aa?d.mapping=qi:f===la&&(d.mapping=As),d}function l(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Nx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Oo("WebGLRenderer: "+n+" extension not supported."),i}}}function Fx(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let b=0,M=v.length;b<M;b+=3){const T=v[b+0],A=v[b+1],C=v[b+2];d.push(T,A,A,C,C,T)}}else{const v=m.array;_=m.version;for(let b=0,M=v.length/3-1;b<M;b+=3){const T=b+0,A=b+1,C=b+2;d.push(T,A,A,C,C,T)}}const p=new(m.count>=65535?If:Rf)(d,1);p.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function kx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function u(d,f,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let g=0;for(let v=0;v<m;v++)g+=f[v]*_[v];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ox(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Be("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zx(s,e,t){const n=new WeakMap,i=new mt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let M=a.attributes.position.count*b,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*T*4*u),C=new Cf(A,M,T,u);C.type=ln,C.needsUpdate=!0;const x=b*4;for(let V=0;V<u;V++){const I=p[V],k=g[V],O=v[V],N=M*T*4*V;for(let F=0;F<I.count;F++){const H=F*x;f===!0&&(i.fromBufferAttribute(I,F),A[N+H+0]=i.x,A[N+H+1]=i.y,A[N+H+2]=i.z,A[N+H+3]=0),m===!0&&(i.fromBufferAttribute(k,F),A[N+H+4]=i.x,A[N+H+5]=i.y,A[N+H+6]=i.z,A[N+H+7]=0),_===!0&&(i.fromBufferAttribute(O,F),A[N+H+8]=i.x,A[N+H+9]=i.y,A[N+H+10]=i.z,A[N+H+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Ve(M,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Vx(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const Hx={[lf]:"LINEAR_TONE_MAPPING",[cf]:"REINHARD_TONE_MAPPING",[hf]:"CINEON_TONE_MAPPING",[uf]:"ACES_FILMIC_TONE_MAPPING",[ff]:"AGX_TONE_MAPPING",[pf]:"NEUTRAL_TONE_MAPPING",[df]:"CUSTOM_TONE_MAPPING"};function Gx(s,e,t,n,i){const r=new Dn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new Dn(e,t,{type:ti,depthBuffer:!1,stencilBuffer:!1}),a=new Bt;a.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new hn([0,2,0,0,2,0],2));const l=new ag({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new _t(a,l),h=new ea(-1,1,1,-1,0,1);let u=null,d=null,f=!1,m,_=null,p=[],g=!1;this.setSize=function(v,b){r.setSize(v,b),o.setSize(v,b);for(let M=0;M<p.length;M++){const T=p[M];T.setSize&&T.setSize(v,b)}},this.setEffects=function(v){p=v,g=p.length>0&&p[0].isRenderPass===!0;const b=r.width,M=r.height;for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(b,M)}},this.begin=function(v,b){if(f||v.toneMapping===Pn&&p.length===0)return!1;if(_=b,b!==null){const M=b.width,T=b.height;(r.width!==M||r.height!==T)&&this.setSize(M,T)}return g===!1&&v.setRenderTarget(r),m=v.toneMapping,v.toneMapping=Pn,!0},this.hasRenderPass=function(){return g},this.end=function(v,b){v.toneMapping=m,f=!0;let M=r,T=o;for(let A=0;A<p.length;A++){const C=p[A];if(C.enabled!==!1&&(C.render(v,T,M,b),C.needsSwap!==!1)){const x=M;M=T,T=x}}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,l.defines={},je.getTransfer(u)===it&&(l.defines.SRGB_TRANSFER="");const A=Hx[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(_),v.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Gf=new Rt,nc=new Cr(1,1),Wf=new Cf,Xf=new Pm,qf=new nh,Bu=[],Uu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),ku=new Float32Array(4);function Os(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Bu[i];if(r===void 0&&(r=new Float32Array(i),Bu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function na(s,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function $x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function Yx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;ku.set(n),s.uniformMatrix2fv(this.addr,!1,ku),Lt(t,n)}}function Kx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Fu.set(n),s.uniformMatrix3fv(this.addr,!1,Fu),Lt(t,n)}}function jx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Nu.set(n),s.uniformMatrix4fv(this.addr,!1,Nu),Lt(t,n)}}function Zx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function Qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function ev(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function tv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function iv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function sv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function rv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(nc.compareFunction=t.isReversedDepthBuffer()?Kc:Yc,r=nc):r=Gf,t.setTexture2D(e||r,i)}function ov(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xf,i)}function av(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qf,i)}function lv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wf,i)}function cv(s){switch(s){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return $x;case 35674:return Yx;case 35675:return Kx;case 35676:return jx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(s,e){s.uniform1fv(this.addr,e)}function uv(s,e){const t=Os(e,this.size,2);s.uniform2fv(this.addr,t)}function dv(s,e){const t=Os(e,this.size,3);s.uniform3fv(this.addr,t)}function fv(s,e){const t=Os(e,this.size,4);s.uniform4fv(this.addr,t)}function pv(s,e){const t=Os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mv(s,e){const t=Os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gv(s,e){const t=Os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _v(s,e){s.uniform1iv(this.addr,e)}function xv(s,e){s.uniform2iv(this.addr,e)}function vv(s,e){s.uniform3iv(this.addr,e)}function yv(s,e){s.uniform4iv(this.addr,e)}function Mv(s,e){s.uniform1uiv(this.addr,e)}function Sv(s,e){s.uniform2uiv(this.addr,e)}function bv(s,e){s.uniform3uiv(this.addr,e)}function Ev(s,e){s.uniform4uiv(this.addr,e)}function Tv(s,e,t){const n=this.cache,i=e.length,r=na(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=nc:o=Gf;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Cv(s,e,t){const n=this.cache,i=e.length,r=na(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xf,r[o])}function Av(s,e,t){const n=this.cache,i=e.length,r=na(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qf,r[o])}function wv(s,e,t){const n=this.cache,i=e.length,r=na(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wf,r[o])}function Rv(s){switch(s){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return bv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return wv}}class Iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}}class Lv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rv(t.type)}}class Pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Ou(s,e){s.seq.push(e),s.map[e.id]=e}function Dv(s,e,t){const n=s.name,i=n.length;for(Ha.lastIndex=0;;){const r=Ha.exec(n),o=Ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ou(t,c===void 0?new Iv(a,s,e):new Lv(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Pv(a),Ou(t,u)),t=u}}}class Lo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Dv(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function zu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Bv=37297;let Uv=0;function Nv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Vu=new He;function Fv(s){je._getMatrix(Vu,je.workingColorSpace,s);const e=`mat3( ${Vu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Fo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Nv(s.getShaderSource(e),a)}else return r}function kv(s,e){const t=Fv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ov={[lf]:"Linear",[cf]:"Reinhard",[hf]:"Cineon",[uf]:"ACESFilmic",[ff]:"AgX",[pf]:"Neutral",[df]:"Custom"};function zv(s,e){const t=Ov[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new D;function Vv(){je.getLuminanceCoefficients(co);const s=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function Gv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function cr(s){return s!==""}function Gu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(s){return s.replace(Xv,$v)}const qv=new Map;function $v(s,e){let t=Ge[e];if(t===void 0){const n=qv.get(e);if(n!==void 0)t=Ge[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}const Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(s){return s.replace(Yv,Kv)}function Kv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const jv={[To]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function Zv(s){return jv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jv={[qi]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE_UV"};function Qv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Jv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ey={[As]:"ENVMAP_MODE_REFRACTION"};function ty(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ey[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ny={[af]:"ENVMAP_BLENDING_MULTIPLY",[qp]:"ENVMAP_BLENDING_MIX",[$p]:"ENVMAP_BLENDING_ADD"};function iy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ny[s.combine]||"ENVMAP_BLENDING_NONE"}function sy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ry(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zv(t),c=Qv(t),h=ty(t),u=iy(t),d=sy(t),f=Hv(t),m=Gv(r),_=i.createProgram();let p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(cr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(cr).join(`
`),g.length>0&&(g+=`
`)):(p=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),g=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Pn?zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),o=ic(o),o=Gu(o,t),o=Wu(o,t),a=ic(a),a=Gu(a,t),a=Wu(a,t),o=Xu(o),a=Xu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===yi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=v+p+o,M=v+g+a,T=zu(i,i.VERTEX_SHADER,b),A=zu(i,i.FRAGMENT_SHADER,M);i.attachShader(_,T),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(I){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(T)||"",N=i.getShaderInfoLog(A)||"",F=k.trim(),H=O.trim(),z=N.trim();let ee=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,A);else{const oe=Hu(i,T,"vertex"),de=Hu(i,A,"fragment");Be("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+oe+`
`+de)}else F!==""?Ae("WebGLProgram: Program Info Log:",F):(H===""||z==="")&&(Q=!1);Q&&(I.diagnostics={runnable:ee,programLog:F,vertexShader:{log:H,prefix:p},fragmentShader:{log:z,prefix:g}})}i.deleteShader(T),i.deleteShader(A),x=new Lo(i,_),S=Wv(i,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=i.getProgramParameter(_,Bv)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let oy=0;class ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ly(e),t.set(e,n)),n}}class ly{constructor(e){this.id=oy++,this.code=e,this.usedTimes=0}}function cy(s,e,t,n,i,r){const o=new Af,a=new ay,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,V,I,k){const O=I.fog,N=k.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||F,H),ee=z&&z.mapping===jo?z.image.height:null,Q=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=oe!==void 0?oe.length:0;let fe=0;N.morphAttributes.position!==void 0&&(fe=1),N.morphAttributes.normal!==void 0&&(fe=2),N.morphAttributes.color!==void 0&&(fe=3);let Ne,ct,Je,q;if(Q){const nt=pt[Q];Ne=nt.vertexShader,ct=nt.fragmentShader}else Ne=x.vertexShader,ct=x.fragmentShader,a.update(x),Je=a.getVertexShaderID(x),q=a.getFragmentShaderID(x);const Z=s.getRenderTarget(),ie=s.state.buffers.depth.getReversed(),Le=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,Pe=!!x.map,Tt=!!x.matcap,ke=!!z,tt=!!x.aoMap,ht=!!x.lightMap,We=!!x.bumpMap,yt=!!x.normalMap,L=!!x.displacementMap,Ct=!!x.emissiveMap,et=!!x.metalnessMap,dt=!!x.roughnessMap,be=x.anisotropy>0,w=x.clearcoat>0,y=x.dispersion>0,B=x.iridescence>0,K=x.sheen>0,J=x.transmission>0,Y=be&&!!x.anisotropyMap,xe=w&&!!x.clearcoatMap,ae=w&&!!x.clearcoatNormalMap,Ie=w&&!!x.clearcoatRoughnessMap,De=B&&!!x.iridescenceMap,te=B&&!!x.iridescenceThicknessMap,se=K&&!!x.sheenColorMap,ve=K&&!!x.sheenRoughnessMap,Me=!!x.specularMap,pe=!!x.specularColorMap,Xe=!!x.specularIntensityMap,P=J&&!!x.transmissionMap,le=J&&!!x.thicknessMap,re=!!x.gradientMap,_e=!!x.alphaMap,ne=x.alphaTest>0,$=!!x.alphaHash,ye=!!x.extensions;let Ue=Pn;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const ft={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:ct,defines:x.defines,customVertexShaderID:Je,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:Le,instancingColor:Le&&k.instanceColor!==null,instancingMorph:Le&&k.morphTexture!==null,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Yt,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:Tt,envMap:ke,envMapMode:ke&&z.mapping,envMapCubeUVHeight:ee,aoMap:tt,lightMap:ht,bumpMap:We,normalMap:yt,displacementMap:L,emissiveMap:Ct,normalMapObjectSpace:yt&&x.normalMapType===Jp,normalMapTangentSpace:yt&&x.normalMapType===Ef,metalnessMap:et,roughnessMap:dt,anisotropy:be,anisotropyMap:Y,clearcoat:w,clearcoatMap:xe,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ie,dispersion:y,iridescence:B,iridescenceMap:De,iridescenceThicknessMap:te,sheen:K,sheenColorMap:se,sheenRoughnessMap:ve,specularMap:Me,specularColorMap:pe,specularIntensityMap:Xe,transmission:J,transmissionMap:P,thicknessMap:le,gradientMap:re,opaque:x.transparent===!1&&x.blending===Ss&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:$,combine:x.combine,mapUv:Pe&&m(x.map.channel),aoMapUv:tt&&m(x.aoMap.channel),lightMapUv:ht&&m(x.lightMap.channel),bumpMapUv:We&&m(x.bumpMap.channel),normalMapUv:yt&&m(x.normalMap.channel),displacementMapUv:L&&m(x.displacementMap.channel),emissiveMapUv:Ct&&m(x.emissiveMap.channel),metalnessMapUv:et&&m(x.metalnessMap.channel),roughnessMapUv:dt&&m(x.roughnessMap.channel),anisotropyMapUv:Y&&m(x.anisotropyMap.channel),clearcoatMapUv:xe&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(x.sheenRoughnessMap.channel),specularMapUv:Me&&m(x.specularMap.channel),specularColorMapUv:pe&&m(x.specularColorMap.channel),specularIntensityMapUv:Xe&&m(x.specularIntensityMap.channel),transmissionMapUv:P&&m(x.transmissionMap.channel),thicknessMapUv:le&&m(x.thicknessMap.channel),alphaMapUv:_e&&m(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(yt||be),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(Pe||_e),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:Ct&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===$t,flipSided:x.side===Vt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)S.push(V),S.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(g(S,x),v(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function b(x){const S=f[x.type];let V;if(S){const I=pt[S];V=Nn.clone(I.uniforms)}else V=x.uniforms;return V}function M(x,S){let V=h.get(S);return V!==void 0?++V.usedTimes:(V=new ry(s,S,x,i),c.push(V),h.set(S,V)),V}function T(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:M,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function hy(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function uy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function $u(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,_,p,g){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=p,v.group=g),e++,v}function l(d,f,m,_,p,g){const v=a(d,f,m,_,p,g);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function c(d,f,m,_,p,g){const v=a(d,f,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||uy),n.length>1&&n.sort(f||$u),i.length>1&&i.sort(f||$u)}function u(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function dy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Yu,s.set(n,[o])):i>=r.length?(o=new Yu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function fy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new me};break;case"SpotLight":t={position:new D,direction:new D,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function py(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let my=0;function gy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _y(s){const e=new fy,t=py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new Fe,o=new Fe;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,b=0,M=0,T=0,A=0,C=0;c.sort(gy);for(let S=0,V=c.length;S<V;S++){const I=c[S],k=I.color,O=I.intensity,N=I.distance;let F=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Rs?F=I.shadow.map.texture:F=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*O,u+=k.g*O,d+=k.b*O;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],O);C++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,ee=t.get(I);ee.shadowIntensity=z.intensity,ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=H,f++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(k).multiplyScalar(O),H.distance=N,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[_]=H;const z=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,z.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=z.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=z.intensity,ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,n.spotShadow[_]=ee,n.spotShadowMap[_]=F,M++}_++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(k).multiplyScalar(O),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=H,p++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const z=I.shadow,ee=t.get(I);ee.shadowIntensity=z.intensity,ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,ee.shadowCameraNear=z.camera.near,ee.shadowCameraFar=z.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=F,n.pointShadowMatrix[m]=I.shadow.matrix,b++}n.point[m]=H,m++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(O),H.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[g]=H,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=C,n.version=my++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0;const p=h.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const b=c[g];if(b.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(b.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Ku(s){const e=new _y(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xy(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Ku(s),e.set(i,[a])):r>=o.length?(a=new Ku(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
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
}`,My=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Sy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ju=new Fe,Ys=new D,Ga=new D;function by(s,e,t){let n=new Jo;const i=new Ve,r=new Ve,o=new mt,a=new lg,l=new cg,c={},h=t.maxTextureSize,u={[yn]:Vt,[Vt]:yn,[$t]:$t},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:vy,fragmentShader:yy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Bt;m.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let g=this.type;this.render=function(A,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Ap&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=To);const S=s.getRenderTarget(),V=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Qn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=g!==this.type;O&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,F=A.length;N<F;N++){const H=A[N],z=H.shadow;if(z===void 0){Ae("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ee=z.getFrameExtents();i.multiply(ee),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,z.mapSize.y=r.y));const Q=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Q,z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ar){if(H.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Dn(i.x,i.y,{format:Rs,type:ti,minFilter:wt,magFilter:wt,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new Cr(i.x,i.y,ln),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=ni,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=bt,z.map.depthTexture.magFilter=bt}else H.isPointLight?(z.map=new Hf(i.x),z.map.depthTexture=new ig(i.x,Un)):(z.map=new Dn(i.x,i.y),z.map.depthTexture=new Cr(i.x,i.y,Un)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=ni,this.type===To?(z.map.depthTexture.compareFunction=Q?Kc:Yc,z.map.depthTexture.minFilter=wt,z.map.depthTexture.magFilter=wt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=bt,z.map.depthTexture.magFilter=bt);z.camera.updateProjectionMatrix()}const oe=z.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<oe;de++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,de),s.clear();else{de===0&&(s.setRenderTarget(z.map),s.clear());const fe=z.getViewport(de);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),k.viewport(o)}if(H.isPointLight){const fe=z.camera,Ne=z.matrix,ct=H.distance||fe.far;ct!==fe.far&&(fe.far=ct,fe.updateProjectionMatrix()),Ys.setFromMatrixPosition(H.matrixWorld),fe.position.copy(Ys),Ga.copy(fe.position),Ga.add(My[de]),fe.up.copy(Sy[de]),fe.lookAt(Ga),fe.updateMatrixWorld(),Ne.makeTranslation(-Ys.x,-Ys.y,-Ys.z),ju.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ju,fe.coordinateSystem,fe.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),M(C,x,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===ar&&v(z,x),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(S,V,I)};function v(A,C){const x=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dn(i.x,i.y,{format:Rs,type:ti})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,x,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,x,f,_,null)}function b(A,C,x,S){let V=null;const I=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)V=I;else if(V=x.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=V.uuid,O=C.uuid;let N=c[k];N===void 0&&(N={},c[k]=N);let F=N[O];F===void 0&&(F=V.clone(),N[O]=F,C.addEventListener("dispose",T)),V=F}if(V.visible=C.visible,V.wireframe=C.wireframe,S===ar?V.side=C.shadowSide!==null?C.shadowSide:C.side:V.side=C.shadowSide!==null?C.shadowSide:u[C.side],V.alphaMap=C.alphaMap,V.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,V.map=C.map,V.clipShadows=C.clipShadows,V.clippingPlanes=C.clippingPlanes,V.clipIntersection=C.clipIntersection,V.displacementMap=C.displacementMap,V.displacementScale=C.displacementScale,V.displacementBias=C.displacementBias,V.wireframeLinewidth=C.wireframeLinewidth,V.linewidth=C.linewidth,x.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const k=s.properties.get(V);k.light=x}return V}function M(A,C,x,S,V){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&V===ar)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const O=e.update(A),N=A.material;if(Array.isArray(N)){const F=O.groups;for(let H=0,z=F.length;H<z;H++){const ee=F[H],Q=N[ee.materialIndex];if(Q&&Q.visible){const oe=b(A,Q,S,V);A.onBeforeShadow(s,A,C,x,O,oe,ee),s.renderBufferDirect(x,null,O,oe,A,ee),A.onAfterShadow(s,A,C,x,O,oe,ee)}}}else if(N.visible){const F=b(A,N,S,V);A.onBeforeShadow(s,A,C,x,O,F,null),s.renderBufferDirect(x,null,O,F,A,null),A.onAfterShadow(s,A,C,x,O,F,null)}}const k=A.children;for(let O=0,N=k.length;O<N;O++)M(k[O],C,x,S,V)}function T(A){A.target.removeEventListener("dispose",T);for(const x in c){const S=c[x],V=A.target.uuid;V in S&&(S[V].dispose(),delete S[V])}}}function Ey(s,e){function t(){let P=!1;const le=new mt;let re=null;const _e=new mt(0,0,0,0);return{setMask:function(ne){re!==ne&&!P&&(s.colorMask(ne,ne,ne,ne),re=ne)},setLocked:function(ne){P=ne},setClear:function(ne,$,ye,Ue,ft){ft===!0&&(ne*=Ue,$*=Ue,ye*=Ue),le.set(ne,$,ye,Ue),_e.equals(le)===!1&&(s.clearColor(ne,$,ye,Ue),_e.copy(le))},reset:function(){P=!1,re=null,_e.set(-1,0,0,0)}}}function n(){let P=!1,le=!1,re=null,_e=null,ne=null;return{setReversed:function($){if(le!==$){const ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),le=$;const Ue=ne;ne=null,this.setClear(Ue)}},getReversed:function(){return le},setTest:function($){$?Z(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function($){re!==$&&!P&&(s.depthMask($),re=$)},setFunc:function($){if(le&&($=cm[$]),_e!==$){switch($){case fl:s.depthFunc(s.NEVER);break;case pl:s.depthFunc(s.ALWAYS);break;case ml:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case gl:s.depthFunc(s.EQUAL);break;case _l:s.depthFunc(s.GEQUAL);break;case xl:s.depthFunc(s.GREATER);break;case vl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=$}},setLocked:function($){P=$},setClear:function($){ne!==$&&(ne=$,le&&($=1-$),s.clearDepth($))},reset:function(){P=!1,re=null,_e=null,ne=null,le=!1}}}function i(){let P=!1,le=null,re=null,_e=null,ne=null,$=null,ye=null,Ue=null,ft=null;return{setTest:function(nt){P||(nt?Z(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(nt){le!==nt&&!P&&(s.stencilMask(nt),le=nt)},setFunc:function(nt,zn,Vn){(re!==nt||_e!==zn||ne!==Vn)&&(s.stencilFunc(nt,zn,Vn),re=nt,_e=zn,ne=Vn)},setOp:function(nt,zn,Vn){($!==nt||ye!==zn||Ue!==Vn)&&(s.stencilOp(nt,zn,Vn),$=nt,ye=zn,Ue=Vn)},setLocked:function(nt){P=nt},setClear:function(nt){ft!==nt&&(s.clearStencil(nt),ft=nt)},reset:function(){P=!1,le=null,re=null,_e=null,ne=null,$=null,ye=null,Ue=null,ft=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,v=null,b=null,M=null,T=null,A=null,C=new me(0,0,0),x=0,S=!1,V=null,I=null,k=null,O=null,N=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ee)[1]),H=z>=1):ee.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),H=z>=2);let Q=null,oe={};const de=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),Ne=new mt().fromArray(de),ct=new mt().fromArray(fe);function Je(P,le,re,_e){const ne=new Uint8Array(4),$=s.createTexture();s.bindTexture(P,$),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ye=0;ye<re;ye++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(le+ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return $}const q={};q[s.TEXTURE_2D]=Je(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),o.setFunc(Cs),We(!1),yt(Bh),Z(s.CULL_FACE),tt(Qn);function Z(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function ie(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function Le(P,le){return u[P]!==le?(s.bindFramebuffer(P,le),u[P]=le,P===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=le),P===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=le),!0):!1}function we(P,le){let re=f,_e=!1;if(P){re=d.get(le),re===void 0&&(re=[],d.set(le,re));const ne=P.textures;if(re.length!==ne.length||re[0]!==s.COLOR_ATTACHMENT0){for(let $=0,ye=ne.length;$<ye;$++)re[$]=s.COLOR_ATTACHMENT0+$;re.length=ne.length,_e=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,_e=!0);_e&&s.drawBuffers(re)}function Pe(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const Tt={[Vi]:s.FUNC_ADD,[Rp]:s.FUNC_SUBTRACT,[Ip]:s.FUNC_REVERSE_SUBTRACT};Tt[Lp]=s.MIN,Tt[Pp]=s.MAX;const ke={[Dp]:s.ZERO,[Bp]:s.ONE,[Up]:s.SRC_COLOR,[ul]:s.SRC_ALPHA,[Vp]:s.SRC_ALPHA_SATURATE,[Op]:s.DST_COLOR,[Fp]:s.DST_ALPHA,[Np]:s.ONE_MINUS_SRC_COLOR,[dl]:s.ONE_MINUS_SRC_ALPHA,[zp]:s.ONE_MINUS_DST_COLOR,[kp]:s.ONE_MINUS_DST_ALPHA,[Hp]:s.CONSTANT_COLOR,[Gp]:s.ONE_MINUS_CONSTANT_COLOR,[Wp]:s.CONSTANT_ALPHA,[Xp]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(P,le,re,_e,ne,$,ye,Ue,ft,nt){if(P===Qn){_===!0&&(ie(s.BLEND),_=!1);return}if(_===!1&&(Z(s.BLEND),_=!0),P!==wp){if(P!==p||nt!==S){if((g!==Vi||M!==Vi)&&(s.blendEquation(s.FUNC_ADD),g=Vi,M=Vi),nt)switch(P){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uh:s.blendFunc(s.ONE,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Be("WebGLState: Invalid blending: ",P);break}else switch(P){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Nh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",P);break}v=null,b=null,T=null,A=null,C.set(0,0,0),x=0,p=P,S=nt}return}ne=ne||le,$=$||re,ye=ye||_e,(le!==g||ne!==M)&&(s.blendEquationSeparate(Tt[le],Tt[ne]),g=le,M=ne),(re!==v||_e!==b||$!==T||ye!==A)&&(s.blendFuncSeparate(ke[re],ke[_e],ke[$],ke[ye]),v=re,b=_e,T=$,A=ye),(Ue.equals(C)===!1||ft!==x)&&(s.blendColor(Ue.r,Ue.g,Ue.b,ft),C.copy(Ue),x=ft),p=P,S=!1}function ht(P,le){P.side===$t?ie(s.CULL_FACE):Z(s.CULL_FACE);let re=P.side===Vt;le&&(re=!re),We(re),P.blending===Ss&&P.transparent===!1?tt(Qn):tt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const _e=P.stencilWrite;a.setTest(_e),_e&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ct(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(P){V!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),V=P)}function yt(P){P!==Tp?(Z(s.CULL_FACE),P!==I&&(P===Bh?s.cullFace(s.BACK):P===Cp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),I=P}function L(P){P!==k&&(H&&s.lineWidth(P),k=P)}function Ct(P,le,re){P?(Z(s.POLYGON_OFFSET_FILL),(O!==le||N!==re)&&(O=le,N=re,o.getReversed()&&(le=-le),s.polygonOffset(le,re))):ie(s.POLYGON_OFFSET_FILL)}function et(P){P?Z(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function dt(P){P===void 0&&(P=s.TEXTURE0+F-1),Q!==P&&(s.activeTexture(P),Q=P)}function be(P,le,re){re===void 0&&(Q===null?re=s.TEXTURE0+F-1:re=Q);let _e=oe[re];_e===void 0&&(_e={type:void 0,texture:void 0},oe[re]=_e),(_e.type!==P||_e.texture!==le)&&(Q!==re&&(s.activeTexture(re),Q=re),s.bindTexture(P,le||q[P]),_e.type=P,_e.texture=le)}function w(){const P=oe[Q];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(P){Be("WebGLState:",P)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(P){Be("WebGLState:",P)}}function K(){try{s.texSubImage2D(...arguments)}catch(P){Be("WebGLState:",P)}}function J(){try{s.texSubImage3D(...arguments)}catch(P){Be("WebGLState:",P)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(P){Be("WebGLState:",P)}}function xe(){try{s.compressedTexSubImage3D(...arguments)}catch(P){Be("WebGLState:",P)}}function ae(){try{s.texStorage2D(...arguments)}catch(P){Be("WebGLState:",P)}}function Ie(){try{s.texStorage3D(...arguments)}catch(P){Be("WebGLState:",P)}}function De(){try{s.texImage2D(...arguments)}catch(P){Be("WebGLState:",P)}}function te(){try{s.texImage3D(...arguments)}catch(P){Be("WebGLState:",P)}}function se(P){Ne.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Ne.copy(P))}function ve(P){ct.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),ct.copy(P))}function Me(P,le){let re=c.get(le);re===void 0&&(re=new WeakMap,c.set(le,re));let _e=re.get(P);_e===void 0&&(_e=s.getUniformBlockIndex(le,P.name),re.set(P,_e))}function pe(P,le){const _e=c.get(le).get(P);l.get(le)!==_e&&(s.uniformBlockBinding(le,_e,P.__bindingPointIndex),l.set(le,_e))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,oe={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,v=null,b=null,M=null,T=null,A=null,C=new me(0,0,0),x=0,S=!1,V=null,I=null,k=null,O=null,N=null,Ne.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ie,bindFramebuffer:Le,drawBuffers:we,useProgram:Pe,setBlending:tt,setMaterial:ht,setFlipSided:We,setCullFace:yt,setLineWidth:L,setPolygonOffset:Ct,setScissorTest:et,activeTexture:dt,bindTexture:be,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:De,texImage3D:te,updateUBOMapping:Me,uniformBlockBinding:pe,texStorage2D:ae,texStorage3D:Ie,texSubImage2D:K,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:xe,scissor:se,viewport:ve,reset:Xe}}function Ty(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,y){return f?new OffscreenCanvas(w,y):Er("canvas")}function _(w,y,B){let K=1;const J=be(w);if((J.width>B||J.height>B)&&(K=B/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(K*J.width),xe=Math.floor(K*J.height);u===void 0&&(u=m(Y,xe));const ae=y?m(Y,xe):u;return ae.width=Y,ae.height=xe,ae.getContext("2d").drawImage(w,0,0,Y,xe),Ae("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+xe+")."),ae}else return"data"in w&&Ae("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function p(w){return w.generateMipmaps}function g(w){s.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,y,B,K,J=!1){if(w!==null){if(s[w]!==void 0)return s[w];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=y;if(y===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),y===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),y===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),y===s.RGBA){const xe=J?Fo:je.getTransfer(K);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=xe===it?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(w,y){let B;return w?y===null||y===Un||y===yr?B=s.DEPTH24_STENCIL8:y===ln?B=s.DEPTH32F_STENCIL8:y===vr&&(B=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Un||y===yr?B=s.DEPTH_COMPONENT24:y===ln?B=s.DEPTH_COMPONENT32F:y===vr&&(B=s.DEPTH_COMPONENT16),B}function T(w,y){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==bt&&w.minFilter!==wt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){const y=w.target;y.removeEventListener("dispose",A),x(y),y.isVideoTexture&&h.delete(y)}function C(w){const y=w.target;y.removeEventListener("dispose",C),V(y)}function x(w){const y=n.get(w);if(y.__webglInit===void 0)return;const B=w.source,K=d.get(B);if(K){const J=K[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(w),Object.keys(K).length===0&&d.delete(B)}n.remove(w)}function S(w){const y=n.get(w);s.deleteTexture(y.__webglTexture);const B=w.source,K=d.get(B);delete K[y.__cacheKey],o.memory.textures--}function V(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let J=0;J<y.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[K][J]);else s.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)s.deleteFramebuffer(y.__webglFramebuffer[K]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=w.textures;for(let K=0,J=B.length;K<J;K++){const Y=n.get(B[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(w)}let I=0;function k(){I=0}function O(){const w=I;return w>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),I+=1,w}function N(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function F(w,y){const B=n.get(w);if(w.isVideoTexture&&et(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const K=w.image;if(K===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,w,y);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function H(w,y){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){q(B,w,y);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function z(w,y){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){q(B,w,y);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function ee(w,y){const B=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&B.__version!==w.version){Z(B,w,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const Q={[ws]:s.REPEAT,[Rn]:s.CLAMP_TO_EDGE,[No]:s.MIRRORED_REPEAT},oe={[bt]:s.NEAREST,[gf]:s.NEAREST_MIPMAP_NEAREST,[lr]:s.NEAREST_MIPMAP_LINEAR,[wt]:s.LINEAR,[Co]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},de={[Qp]:s.NEVER,[sm]:s.ALWAYS,[em]:s.LESS,[Yc]:s.LEQUAL,[tm]:s.EQUAL,[Kc]:s.GEQUAL,[nm]:s.GREATER,[im]:s.NOTEQUAL};function fe(w,y){if(y.type===ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===wt||y.magFilter===Co||y.magFilter===lr||y.magFilter===jn||y.minFilter===wt||y.minFilter===Co||y.minFilter===lr||y.minFilter===jn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,Q[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Q[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Q[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,oe[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,de[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bt||y.minFilter!==lr&&y.minFilter!==jn||y.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ne(w,y){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",A));const K=y.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const Y=N(y);if(Y!==w.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[Y].usedTimes++;const xe=J[w.__cacheKey];xe!==void 0&&(J[w.__cacheKey].usedTimes--,xe.usedTimes===0&&S(y)),w.__cacheKey=Y,w.__webglTexture=J[Y].texture}return B}function ct(w,y,B){return Math.floor(Math.floor(w/B)/y)}function Je(w,y,B,K){const Y=w.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,B,K,y.data);else{Y.sort((te,se)=>te.start-se.start);let xe=0;for(let te=1;te<Y.length;te++){const se=Y[xe],ve=Y[te],Me=se.start+se.count,pe=ct(ve.start,y.width,4),Xe=ct(se.start,y.width,4);ve.start<=Me+1&&pe===Xe&&ct(ve.start+ve.count-1,y.width,4)===pe?se.count=Math.max(se.count,ve.start+ve.count-se.start):(++xe,Y[xe]=ve)}Y.length=xe+1;const ae=s.getParameter(s.UNPACK_ROW_LENGTH),Ie=s.getParameter(s.UNPACK_SKIP_PIXELS),De=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let te=0,se=Y.length;te<se;te++){const ve=Y[te],Me=Math.floor(ve.start/4),pe=Math.ceil(ve.count/4),Xe=Me%y.width,P=Math.floor(Me/y.width),le=pe,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,P),t.texSubImage2D(s.TEXTURE_2D,0,Xe,P,le,re,B,K,y.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function q(w,y,B){let K=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=s.TEXTURE_3D);const J=Ne(w,y),Y=y.source;t.bindTexture(K,w.__webglTexture,s.TEXTURE0+B);const xe=n.get(Y);if(Y.version!==xe.__version||J===!0){t.activeTexture(s.TEXTURE0+B);const ae=je.getPrimaries(je.workingColorSpace),Ie=y.colorSpace===xi?null:je.getPrimaries(y.colorSpace),De=y.colorSpace===xi||ae===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let te=_(y.image,!1,i.maxTextureSize);te=dt(y,te);const se=r.convert(y.format,y.colorSpace),ve=r.convert(y.type);let Me=b(y.internalFormat,se,ve,y.colorSpace,y.isVideoTexture);fe(K,y);let pe;const Xe=y.mipmaps,P=y.isVideoTexture!==!0,le=xe.__version===void 0||J===!0,re=Y.dataReady,_e=T(y,te);if(y.isDepthTexture)Me=M(y.format===Wi,y.type),le&&(P?t.texStorage2D(s.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Me,te.width,te.height,0,se,ve,null));else if(y.isDataTexture)if(Xe.length>0){P&&le&&t.texStorage2D(s.TEXTURE_2D,_e,Me,Xe[0].width,Xe[0].height);for(let ne=0,$=Xe.length;ne<$;ne++)pe=Xe[ne],P?re&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,ve,pe.data):t.texImage2D(s.TEXTURE_2D,ne,Me,pe.width,pe.height,0,se,ve,pe.data);y.generateMipmaps=!1}else P?(le&&t.texStorage2D(s.TEXTURE_2D,_e,Me,te.width,te.height),re&&Je(y,te,se,ve)):t.texImage2D(s.TEXTURE_2D,0,Me,te.width,te.height,0,se,ve,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){P&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Me,Xe[0].width,Xe[0].height,te.depth);for(let ne=0,$=Xe.length;ne<$;ne++)if(pe=Xe[ne],y.format!==cn)if(se!==null)if(P){if(re)if(y.layerUpdates.size>0){const ye=Au(pe.width,pe.height,y.format,y.type);for(const Ue of y.layerUpdates){const ft=pe.data.subarray(Ue*ye/pe.data.BYTES_PER_ELEMENT,(Ue+1)*ye/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Ue,pe.width,pe.height,1,se,ft)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Me,pe.width,pe.height,te.depth,0,pe.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,ve,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Me,pe.width,pe.height,te.depth,0,se,ve,pe.data)}else{P&&le&&t.texStorage2D(s.TEXTURE_2D,_e,Me,Xe[0].width,Xe[0].height);for(let ne=0,$=Xe.length;ne<$;ne++)pe=Xe[ne],y.format!==cn?se!==null?P?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Me,pe.width,pe.height,0,pe.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?re&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,ve,pe.data):t.texImage2D(s.TEXTURE_2D,ne,Me,pe.width,pe.height,0,se,ve,pe.data)}else if(y.isDataArrayTexture)if(P){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Me,te.width,te.height,te.depth),re)if(y.layerUpdates.size>0){const ne=Au(te.width,te.height,y.format,y.type);for(const $ of y.layerUpdates){const ye=te.data.subarray($*ne/te.data.BYTES_PER_ELEMENT,($+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,se,ve,ye)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,ve,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,se,ve,te.data);else if(y.isData3DTexture)P?(le&&t.texStorage3D(s.TEXTURE_3D,_e,Me,te.width,te.height,te.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,ve,te.data)):t.texImage3D(s.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,se,ve,te.data);else if(y.isFramebufferTexture){if(le)if(P)t.texStorage2D(s.TEXTURE_2D,_e,Me,te.width,te.height);else{let ne=te.width,$=te.height;for(let ye=0;ye<_e;ye++)t.texImage2D(s.TEXTURE_2D,ye,Me,ne,$,0,se,ve,null),ne>>=1,$>>=1}}else if(Xe.length>0){if(P&&le){const ne=be(Xe[0]);t.texStorage2D(s.TEXTURE_2D,_e,Me,ne.width,ne.height)}for(let ne=0,$=Xe.length;ne<$;ne++)pe=Xe[ne],P?re&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,se,ve,pe):t.texImage2D(s.TEXTURE_2D,ne,Me,se,ve,pe);y.generateMipmaps=!1}else if(P){if(le){const ne=be(te);t.texStorage2D(s.TEXTURE_2D,_e,Me,ne.width,ne.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se,ve,te)}else t.texImage2D(s.TEXTURE_2D,0,Me,se,ve,te);p(y)&&g(K),xe.__version=Y.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Z(w,y,B){if(y.image.length!==6)return;const K=Ne(w,y),J=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);const Y=n.get(J);if(J.version!==Y.__version||K===!0){t.activeTexture(s.TEXTURE0+B);const xe=je.getPrimaries(je.workingColorSpace),ae=y.colorSpace===xi?null:je.getPrimaries(y.colorSpace),Ie=y.colorSpace===xi||xe===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const De=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,se=[];for(let $=0;$<6;$++)!De&&!te?se[$]=_(y.image[$],!0,i.maxCubemapSize):se[$]=te?y.image[$].image:y.image[$],se[$]=dt(y,se[$]);const ve=se[0],Me=r.convert(y.format,y.colorSpace),pe=r.convert(y.type),Xe=b(y.internalFormat,Me,pe,y.colorSpace),P=y.isVideoTexture!==!0,le=Y.__version===void 0||K===!0,re=J.dataReady;let _e=T(y,ve);fe(s.TEXTURE_CUBE_MAP,y);let ne;if(De){P&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Xe,ve.width,ve.height);for(let $=0;$<6;$++){ne=se[$].mipmaps;for(let ye=0;ye<ne.length;ye++){const Ue=ne[ye];y.format!==cn?Me!==null?P?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Xe,Ue.width,Ue.height,0,Ue.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Ue.width,Ue.height,Me,pe,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Xe,Ue.width,Ue.height,0,Me,pe,Ue.data)}}}else{if(ne=y.mipmaps,P&&le){ne.length>0&&_e++;const $=be(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Xe,$.width,$.height)}for(let $=0;$<6;$++)if(te){P?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,se[$].width,se[$].height,Me,pe,se[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,se[$].width,se[$].height,0,Me,pe,se[$].data);for(let ye=0;ye<ne.length;ye++){const ft=ne[ye].image[$].image;P?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,ft.width,ft.height,Me,pe,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Xe,ft.width,ft.height,0,Me,pe,ft.data)}}else{P?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,pe,se[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,Me,pe,se[$]);for(let ye=0;ye<ne.length;ye++){const Ue=ne[ye];P?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Me,pe,Ue.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Xe,Me,pe,Ue.image[$])}}}p(y)&&g(s.TEXTURE_CUBE_MAP),Y.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ie(w,y,B,K,J,Y){const xe=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),Ie=b(B.internalFormat,xe,ae,B.colorSpace),De=n.get(y),te=n.get(B);if(te.__renderTarget=y,!De.__hasExternalTextures){const se=Math.max(1,y.width>>Y),ve=Math.max(1,y.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,Ie,se,ve,y.depth,0,xe,ae,null):t.texImage2D(J,Y,Ie,se,ve,0,xe,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),Ct(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,te.__webglTexture,0,L(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,te.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(w,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer){const K=y.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=M(y.stencilBuffer,J),xe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ct(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(y),Y,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(y),Y,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Y,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,w)}else{const K=y.textures;for(let J=0;J<K.length;J++){const Y=K[J],xe=r.convert(Y.format,Y.colorSpace),ae=r.convert(Y.type),Ie=b(Y.internalFormat,xe,ae,Y.colorSpace);Ct(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(y),Ie,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(y),Ie,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(w,y,B){const K=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),fe(s.TEXTURE_CUBE_MAP,y.depthTexture);const De=r.convert(y.depthTexture.format),te=r.convert(y.depthTexture.type);let se;y.depthTexture.format===ni?se=s.DEPTH_COMPONENT24:y.depthTexture.format===Wi&&(se=s.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,se,y.width,y.height,0,De,te,null)}}else F(y.depthTexture,0);const Y=J.__webglTexture,xe=L(y),ae=K?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,Ie=y.depthTexture.format===Wi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ni)Ct(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,ae,Y,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,ae,Y,0);else if(y.depthTexture.format===Wi)Ct(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,ae,Y,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,ae,Y,0);else throw new Error("Unknown depthTexture format")}function Pe(w){const y=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=K}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)we(y.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?we(y.__webglFramebuffer[0],w,0):we(y.__webglFramebuffer,w,0)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=s.createRenderbuffer(),Le(y.__webglDepthbuffer[K],w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Le(y.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(w,y,B){const K=n.get(w);y!==void 0&&ie(K.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Pe(w)}function ke(w){const y=w.texture,B=n.get(w),K=n.get(y);w.addEventListener("dispose",C);const J=w.textures,Y=w.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=y.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let Ie=0;Ie<y.mipmaps.length;Ie++)B.__webglFramebuffer[ae][Ie]=s.createFramebuffer()}else B.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)B.__webglFramebuffer[ae]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(xe)for(let ae=0,Ie=J.length;ae<Ie;ae++){const De=n.get(J[ae]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&Ct(w)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const Ie=J[ae];B.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const De=r.convert(Ie.format,Ie.colorSpace),te=r.convert(Ie.type),se=b(Ie.internalFormat,De,te,Ie.colorSpace,w.isXRRenderTarget===!0),ve=L(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,se,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),fe(s.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)ie(B.__webglFramebuffer[ae][Ie],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ie);else ie(B.__webglFramebuffer[ae],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(y)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ae=0,Ie=J.length;ae<Ie;ae++){const De=J[ae],te=n.get(De);let se=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),fe(se,De),ie(B.__webglFramebuffer,w,De,s.COLOR_ATTACHMENT0+ae,se,0),p(De)&&g(se)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),fe(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)ie(B.__webglFramebuffer[Ie],w,y,s.COLOR_ATTACHMENT0,ae,Ie);else ie(B.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,ae,0);p(y)&&g(ae),t.unbindTexture()}w.depthBuffer&&Pe(w)}function tt(w){const y=w.textures;for(let B=0,K=y.length;B<K;B++){const J=y[B];if(p(J)){const Y=v(w),xe=n.get(J).__webglTexture;t.bindTexture(Y,xe),g(Y),t.unbindTexture()}}}const ht=[],We=[];function yt(w){if(w.samples>0){if(Ct(w)===!1){const y=w.textures,B=w.width,K=w.height;let J=s.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(w),ae=y.length>1;if(ae)for(let De=0;De<y.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ie=w.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<y.length;De++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const te=n.get(y[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,J,s.NEAREST),l===!0&&(ht.length=0,We.length=0,ht.push(s.COLOR_ATTACHMENT0+De),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ht.push(Y),We.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,We)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let De=0;De<y.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const te=n.get(y[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function L(w){return Math.min(i.maxSamples,w.samples)}function Ct(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function et(w){const y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function dt(w,y){const B=w.colorSpace,K=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Yt&&B!==xi&&(je.getTransfer(B)===it?(K!==cn||J!==nn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",B)),y}function be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=ee,this.rebindTextures=Tt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cy(s,e){function t(n,i=xi){let r;const o=je.getTransfer(i);if(n===nn)return s.UNSIGNED_BYTE;if(n===Hc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===_f)return s.BYTE;if(n===xf)return s.SHORT;if(n===vr)return s.UNSIGNED_SHORT;if(n===Vc)return s.INT;if(n===Un)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===ti)return s.HALF_FLOAT;if(n===Mf)return s.ALPHA;if(n===Sf)return s.RGB;if(n===cn)return s.RGBA;if(n===ni)return s.DEPTH_COMPONENT;if(n===Wi)return s.DEPTH_STENCIL;if(n===Wc)return s.RED;if(n===Xc)return s.RED_INTEGER;if(n===Rs)return s.RG;if(n===qc)return s.RG_INTEGER;if(n===$c)return s.RGBA_INTEGER;if(n===Ao||n===wo||n===Ro||n===Io)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Ml||n===Sl||n===bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Tl||n===Cl||n===Al||n===wl||n===Rl||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===Tl)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return r.COMPRESSED_R11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rl)return r.COMPRESSED_RG11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ll||n===Pl||n===Dl||n===Bl||n===Ul||n===Nl||n===Fl||n===kl||n===Ol||n===zl||n===Vl||n===Hl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===ql||n===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Kl||n===jl||n===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
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

}`;class Ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gt({vertexShader:Ay,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iy extends Us{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new Ry,g={},v=t.getContextAttributes();let b=null,M=null;const T=[],A=[],C=new Ve;let x=null;const S=new qt;S.viewport=new mt;const V=new qt;V.viewport=new mt;const I=[S,V],k=new Dg;let O=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=T[q];return Z===void 0&&(Z=new ma,T[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=T[q];return Z===void 0&&(Z=new ma,T[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=T[q];return Z===void 0&&(Z=new ma,T[q]=Z),Z.getHandSpace()};function F(q){const Z=A.indexOf(q.inputSource);if(Z===-1)return;const ie=T[Z];ie!==void 0&&(ie.update(q.inputSource,q.frame,c||o),ie.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",z);for(let q=0;q<T.length;q++){const Z=A[q];Z!==null&&(A[q]=null,T[q].disconnect(Z))}O=null,N=null,p.reset();for(const q in g)delete g[q];e.setRenderTarget(b),f=null,d=null,u=null,i=null,M=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Le=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?Wi:ni,Le=v.stencil?yr:Un);const Pe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Dn(d.textureWidth,d.textureHeight,{format:cn,type:nn,depthTexture:new Cr(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Dn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(q){for(let Z=0;Z<q.removed.length;Z++){const ie=q.removed[Z],Le=A.indexOf(ie);Le>=0&&(A[Le]=null,T[Le].disconnect(ie))}for(let Z=0;Z<q.added.length;Z++){const ie=q.added[Z];let Le=A.indexOf(ie);if(Le===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=A.length){A.push(ie),Le=Pe;break}else if(A[Pe]===null){A[Pe]=ie,Le=Pe;break}if(Le===-1)break}const we=T[Le];we&&we.connect(ie)}}const ee=new D,Q=new D;function oe(q,Z,ie){ee.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const Le=ee.distanceTo(Q),we=Z.projectionMatrix.elements,Pe=ie.projectionMatrix.elements,Tt=we[14]/(we[10]-1),ke=we[14]/(we[10]+1),tt=(we[9]+1)/we[5],ht=(we[9]-1)/we[5],We=(we[8]-1)/we[0],yt=(Pe[8]+1)/Pe[0],L=Tt*We,Ct=Tt*yt,et=Le/(-We+yt),dt=et*-We;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(dt),q.translateZ(et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const be=Tt+et,w=ke+et,y=L-dt,B=Ct+(Le-dt),K=tt*ke/w*be,J=ht*ke/w*be;q.projectionMatrix.makePerspective(y,B,K,J,be,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function de(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Z=q.near,ie=q.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),k.near=V.near=S.near=Z,k.far=V.far=S.far=ie,(O!==k.near||N!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,N=k.far),k.layers.mask=q.layers.mask|6,S.layers.mask=k.layers.mask&-5,V.layers.mask=k.layers.mask&-3;const Le=q.parent,we=k.cameras;de(k,Le);for(let Pe=0;Pe<we.length;Pe++)de(we[Pe],Le);we.length===2?oe(k,S,V):k.projectionMatrix.copy(S.projectionMatrix),fe(q,k,Le)};function fe(q,Z,ie){ie===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Is*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(q){return g[q]};let Ne=null;function ct(q,Z){if(h=Z.getViewerPose(c||o),m=Z,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Le=!1;ie.length!==k.cameras.length&&(k.cameras.length=0,Le=!0);for(let ke=0;ke<ie.length;ke++){const tt=ie[ke];let ht=null;if(f!==null)ht=f.getViewport(tt);else{const yt=u.getViewSubImage(d,tt);ht=yt.viewport,ke===0&&(e.setRenderTargetTextures(M,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(M))}let We=I[ke];We===void 0&&(We=new qt,We.layers.enable(ke),We.viewport=new mt,I[ke]=We),We.matrix.fromArray(tt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(tt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ht.x,ht.y,ht.width,ht.height),ke===0&&(k.matrix.copy(We.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Le===!0&&k.cameras.push(We)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const ke=u.getDepthInformation(ie[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,i.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let ke=0;ke<ie.length;ke++){const tt=ie[ke].camera;if(tt){let ht=g[tt];ht||(ht=new Bf,g[tt]=ht);const We=u.getCameraImage(tt);ht.sourceTexture=We}}}}for(let ie=0;ie<T.length;ie++){const Le=A[ie],we=T[ie];Le!==null&&we!==void 0&&we.update(Le,Z,c||o)}Ne&&Ne(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}const Je=new Vf;Je.setAnimationLoop(ct),this.setAnimationLoop=function(q){Ne=q},this.dispose=function(){}}}const Ri=new Mn,Ly=new Fe;function Py(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Uf(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,b,M){g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Vt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Vt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const v=e.get(g),b=v.envMap,M=v.envMapRotation;b&&(p.envMap.value=b,Ri.copy(M),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(Ri)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dy(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const M=b.program;n.uniformBlockBinding(v,M)}function c(v,b){let M=i[v.id];M===void 0&&(m(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(v,T);const A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){const b=u();v.__bindingPointIndex=b;const M=s.createBuffer(),T=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const b=i[v.id],M=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,C=M.length;A<C;A++){const x=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,V=x.length;S<V;S++){const I=x[S];if(f(I,A,S,T)===!0){const k=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let N=0;for(let F=0;F<O.length;F++){const H=O[F],z=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+N,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,M,T){const A=v.value,C=b+"_"+M;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const x=T[C];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return T[C]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function m(v){const b=v.uniforms;let M=0;const T=16;for(let C=0,x=b.length;C<x;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let V=0,I=S.length;V<I;V++){const k=S[V],O=Array.isArray(k.value)?k.value:[k.value];for(let N=0,F=O.length;N<F;N++){const H=O[N],z=_(H),ee=M%T,Q=ee%z.boundary,oe=ee+Q;M+=Q,oe!==0&&T-oe<z.storage&&(M+=T-oe),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=z.storage}}}const A=M%T;return A>0&&(M+=T-A),v.__size=M,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){const b=v.target;b.removeEventListener("dispose",p);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function g(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}const By=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function Uy(){return Tn===null&&(Tn=new Qc(By,16,16,Rs,ti),Tn.name="DFG_LUT",Tn.minFilter=wt,Tn.magFilter=wt,Tn.wrapS=Rn,Tn.wrapT=Rn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class Ny{constructor(e={}){const{canvas:t=am(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,p=new Set([$c,qc,Xc]),g=new Set([nn,Un,vr,yr,Hc,Gc]),v=new Uint32Array(4),b=new Int32Array(4);let M=null,T=null;const A=[],C=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let V=!1;this._outputColorSpace=St;let I=0,k=0,O=null,N=-1,F=null;const H=new mt,z=new mt;let ee=null;const Q=new me(0);let oe=0,de=t.width,fe=t.height,Ne=1,ct=null,Je=null;const q=new mt(0,0,de,fe),Z=new mt(0,0,de,fe);let ie=!1;const Le=new Jo;let we=!1,Pe=!1;const Tt=new Fe,ke=new D,tt=new mt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function yt(){return O===null?Ne:1}let L=n;function Ct(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ft,!1),L===null){const U="webgl2";if(L=Ct(U,E),L===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Be("WebGLRenderer: "+E.message),E}let et,dt,be,w,y,B,K,J,Y,xe,ae,Ie,De,te,se,ve,Me,pe,Xe,P,le,re,_e;function ne(){et=new Nx(L),et.init(),le=new Cy(L,et),dt=new wx(L,et,e,le),be=new Ey(L,et),dt.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),w=new Ox(L),y=new hy,B=new Ty(L,et,be,y,dt,le,w),K=new Ux(S),J=new Wg(L),re=new Cx(L,J),Y=new Fx(L,J,w,re),xe=new Vx(L,Y,J,re,w),pe=new zx(L,dt,B),se=new Rx(y),ae=new cy(S,K,et,dt,re,se),Ie=new Py(S,y),De=new dy,te=new xy(et),Me=new Tx(S,K,be,xe,m,l),ve=new by(S,xe,dt),_e=new Dy(L,w,dt,be),Xe=new Ax(L,et,w),P=new kx(L,et,w),w.programs=ae.programs,S.capabilities=dt,S.extensions=et,S.properties=y,S.renderLists=De,S.shadowMap=ve,S.state=be,S.info=w}ne(),_!==nn&&(x=new Gx(_,t.width,t.height,i,r));const $=new Iy(S,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(E){E!==void 0&&(Ne=E,this.setSize(de,fe,!1))},this.getSize=function(E){return E.set(de,fe)},this.setSize=function(E,U,X=!0){if($.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}de=E,fe=U,t.width=Math.floor(E*Ne),t.height=Math.floor(U*Ne),X===!0&&(t.style.width=E+"px",t.style.height=U+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(de*Ne,fe*Ne).floor()},this.setDrawingBufferSize=function(E,U,X){de=E,fe=U,Ne=X,t.width=Math.floor(E*X),t.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(_===nn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,U,X,W){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,U,X,W),be.viewport(H.copy(q).multiplyScalar(Ne).round())},this.getScissor=function(E){return E.copy(Z)},this.setScissor=function(E,U,X,W){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,X,W),be.scissor(z.copy(Z).multiplyScalar(Ne).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){be.setScissorTest(ie=E)},this.setOpaqueSort=function(E){ct=E},this.setTransparentSort=function(E){Je=E},this.getClearColor=function(E){return E.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let W=0;if(E){let G=!1;if(O!==null){const he=O.texture.format;G=p.has(he)}if(G){const he=O.texture.type,ge=g.has(he),ue=Me.getClearColor(),Se=Me.getClearAlpha(),Te=ue.r,Oe=ue.g,qe=ue.b;ge?(v[0]=Te,v[1]=Oe,v[2]=qe,v[3]=Se,L.clearBufferuiv(L.COLOR,0,v)):(b[0]=Te,b[1]=Oe,b[2]=qe,b[3]=Se,L.clearBufferiv(L.COLOR,0,b))}else W|=L.COLOR_BUFFER_BIT}U&&(W|=L.DEPTH_BUFFER_BIT),X&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),Me.dispose(),De.dispose(),te.dispose(),y.dispose(),K.dispose(),xe.dispose(),re.dispose(),_e.dispose(),ae.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ch),$.removeEventListener("sessionend",Ah),Si.stop()};function ye(E){E.preventDefault(),ko("WebGLRenderer: Context Lost."),V=!0}function Ue(){ko("WebGLRenderer: Context Restored."),V=!1;const E=w.autoReset,U=ve.enabled,X=ve.autoUpdate,W=ve.needsUpdate,G=ve.type;ne(),w.autoReset=E,ve.enabled=U,ve.autoUpdate=X,ve.needsUpdate=W,ve.type=G}function ft(E){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){const U=E.target;U.removeEventListener("dispose",nt),zn(U)}function zn(E){Vn(E),y.remove(E)}function Vn(E){const U=y.get(E).programs;U!==void 0&&(U.forEach(function(X){ae.releaseProgram(X)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,W,G,he){U===null&&(U=ht);const ge=G.isMesh&&G.matrixWorld.determinant()<0,ue=_p(E,U,X,W,G);be.setMaterial(W,ge);let Se=X.index,Te=1;if(W.wireframe===!0){if(Se=Y.getWireframeAttribute(X),Se===void 0)return;Te=2}const Oe=X.drawRange,qe=X.attributes.position;let Ce=Oe.start*Te,at=(Oe.start+Oe.count)*Te;he!==null&&(Ce=Math.max(Ce,he.start*Te),at=Math.min(at,(he.start+he.count)*Te)),Se!==null?(Ce=Math.max(Ce,0),at=Math.min(at,Se.count)):qe!=null&&(Ce=Math.max(Ce,0),at=Math.min(at,qe.count));const Mt=at-Ce;if(Mt<0||Mt===1/0)return;re.setup(G,W,ue,X,Se);let vt,lt=Xe;if(Se!==null&&(vt=J.get(Se),lt=P,lt.setIndex(vt)),G.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*yt()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(G.isLine){let kt=W.linewidth;kt===void 0&&(kt=1),be.setLineWidth(kt*yt()),G.isLineSegments?lt.setMode(L.LINES):G.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else G.isPoints?lt.setMode(L.POINTS):G.isSprite&&lt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const kt=G._multiDrawStarts,Ee=G._multiDrawCounts,Zt=G._multiDrawCount,Qe=Se?J.get(Se).bytesPerElement:1,dn=y.get(W).currentProgram.getUniforms();for(let bn=0;bn<Zt;bn++)dn.setValue(L,"_gl_DrawID",bn),lt.render(kt[bn]/Qe,Ee[bn])}else if(G.isInstancedMesh)lt.renderInstances(Ce,Mt,G.count);else if(X.isInstancedBufferGeometry){const kt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,kt);lt.renderInstances(Ce,Mt,Ee)}else lt.render(Ce,Mt)};function Th(E,U,X){E.transparent===!0&&E.side===$t&&E.forceSinglePass===!1?(E.side=Vt,E.needsUpdate=!0,Lr(E,U,X),E.side=yn,E.needsUpdate=!0,Lr(E,U,X),E.side=$t):Lr(E,U,X)}this.compile=function(E,U,X=null){X===null&&(X=E),T=te.get(X),T.init(U),C.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const W=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const he=G.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const ue=he[ge];Th(ue,X,G),W.add(ue)}else Th(he,X,G),W.add(he)}),T=C.pop(),W},this.compileAsync=function(E,U,X=null){const W=this.compile(E,U,X);return new Promise(G=>{function he(){if(W.forEach(function(ge){y.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){G(E);return}setTimeout(he,10)}et.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ra=null;function gp(E){ra&&ra(E)}function Ch(){Si.stop()}function Ah(){Si.start()}const Si=new Vf;Si.setAnimationLoop(gp),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(E){ra=E,$.setAnimationLoop(E),E===null?Si.stop():Si.start()},$.addEventListener("sessionstart",Ch),$.addEventListener("sessionend",Ah),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const X=$.enabled===!0&&$.isPresenting===!0,W=x!==null&&(O===null||X)&&x.begin(S,O);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,U,O),T=te.get(E,C.length),T.init(U),C.push(T),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Le.setFromProjectionMatrix(Tt,In,U.reversedDepth),Pe=this.localClippingEnabled,we=se.init(this.clippingPlanes,Pe),M=De.get(E,A.length),M.init(),A.push(M),$.enabled===!0&&$.isPresenting===!0){const ge=S.xr.getDepthSensingMesh();ge!==null&&oa(ge,U,-1/0,S.sortObjects)}oa(E,U,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(ct,Je),We=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,We&&Me.addToRenderList(M,E),this.info.render.frame++,we===!0&&se.beginShadows();const G=T.state.shadowsArray;if(ve.render(G,E,U),we===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&x.hasRenderPass())===!1){const ge=M.opaque,ue=M.transmissive;if(T.setupLights(),U.isArrayCamera){const Se=U.cameras;if(ue.length>0)for(let Te=0,Oe=Se.length;Te<Oe;Te++){const qe=Se[Te];Rh(ge,ue,E,qe)}We&&Me.render(E);for(let Te=0,Oe=Se.length;Te<Oe;Te++){const qe=Se[Te];wh(M,E,qe,qe.viewport)}}else ue.length>0&&Rh(ge,ue,E,U),We&&Me.render(E),wh(M,E,U)}O!==null&&k===0&&(B.updateMultisampleRenderTarget(O),B.updateRenderTargetMipmap(O)),W&&x.end(S),E.isScene===!0&&E.onAfterRender(S,E,U),re.resetDefaultState(),N=-1,F=null,C.pop(),C.length>0?(T=C[C.length-1],we===!0&&se.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function oa(E,U,X,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Le.intersectsSprite(E)){W&&tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);const ge=xe.update(E),ue=E.material;ue.visible&&M.push(E,ge,ue,X,tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Le.intersectsObject(E))){const ge=xe.update(E),ue=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),tt.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),tt.copy(ge.boundingSphere.center)),tt.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(ue)){const Se=ge.groups;for(let Te=0,Oe=Se.length;Te<Oe;Te++){const qe=Se[Te],Ce=ue[qe.materialIndex];Ce&&Ce.visible&&M.push(E,ge,Ce,X,tt.z,qe)}}else ue.visible&&M.push(E,ge,ue,X,tt.z,null)}}const he=E.children;for(let ge=0,ue=he.length;ge<ue;ge++)oa(he[ge],U,X,W)}function wh(E,U,X,W){const{opaque:G,transmissive:he,transparent:ge}=E;T.setupLightsView(X),we===!0&&se.setGlobalState(S.clippingPlanes,X),W&&be.viewport(H.copy(W)),G.length>0&&Ir(G,U,X),he.length>0&&Ir(he,U,X),ge.length>0&&Ir(ge,U,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Rh(E,U,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const Ce=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new Dn(1,1,{generateMipmaps:!0,type:Ce?ti:nn,minFilter:jn,samples:Math.max(4,dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const he=T.state.transmissionRenderTarget[W.id],ge=W.viewport||H;he.setSize(ge.z*S.transmissionResolutionScale,ge.w*S.transmissionResolutionScale);const ue=S.getRenderTarget(),Se=S.getActiveCubeFace(),Te=S.getActiveMipmapLevel();S.setRenderTarget(he),S.getClearColor(Q),oe=S.getClearAlpha(),oe<1&&S.setClearColor(16777215,.5),S.clear(),We&&Me.render(X);const Oe=S.toneMapping;S.toneMapping=Pn;const qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),we===!0&&se.setGlobalState(S.clippingPlanes,W),Ir(E,X,W),B.updateMultisampleRenderTarget(he),B.updateRenderTargetMipmap(he),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let at=0,Mt=U.length;at<Mt;at++){const vt=U[at],{object:lt,geometry:kt,material:Ee,group:Zt}=vt;if(Ee.side===$t&&lt.layers.test(W.layers)){const Qe=Ee.side;Ee.side=Vt,Ee.needsUpdate=!0,Ih(lt,X,W,kt,Ee,Zt),Ee.side=Qe,Ee.needsUpdate=!0,Ce=!0}}Ce===!0&&(B.updateMultisampleRenderTarget(he),B.updateRenderTargetMipmap(he))}S.setRenderTarget(ue,Se,Te),S.setClearColor(Q,oe),qe!==void 0&&(W.viewport=qe),S.toneMapping=Oe}function Ir(E,U,X){const W=U.isScene===!0?U.overrideMaterial:null;for(let G=0,he=E.length;G<he;G++){const ge=E[G],{object:ue,geometry:Se,group:Te}=ge;let Oe=ge.material;Oe.allowOverride===!0&&W!==null&&(Oe=W),ue.layers.test(X.layers)&&Ih(ue,U,X,Se,Oe,Te)}}function Ih(E,U,X,W,G,he){E.onBeforeRender(S,U,X,W,G,he),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(S,U,X,W,E,he),G.transparent===!0&&G.side===$t&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,S.renderBufferDirect(X,U,W,G,E,he),G.side=yn,G.needsUpdate=!0,S.renderBufferDirect(X,U,W,G,E,he),G.side=$t):S.renderBufferDirect(X,U,W,G,E,he),E.onAfterRender(S,U,X,W,G,he)}function Lr(E,U,X){U.isScene!==!0&&(U=ht);const W=y.get(E),G=T.state.lights,he=T.state.shadowsArray,ge=G.state.version,ue=ae.getParameters(E,G.state,he,U,X),Se=ae.getProgramCacheKey(ue);let Te=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=K.get(E.envMap||W.environment,Oe),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",nt),Te=new Map,W.programs=Te);let qe=Te.get(Se);if(qe!==void 0){if(W.currentProgram===qe&&W.lightsStateVersion===ge)return Ph(E,ue),qe}else ue.uniforms=ae.getUniforms(E),E.onBeforeCompile(ue,S),qe=ae.acquireProgram(ue,Se),Te.set(Se,qe),W.uniforms=ue.uniforms;const Ce=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=se.uniform),Ph(E,ue),W.needsLights=vp(E),W.lightsStateVersion=ge,W.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=qe,W.uniformsList=null,qe}function Lh(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Lo.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ph(E,U){const X=y.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function _p(E,U,X,W,G){U.isScene!==!0&&(U=ht),B.resetTextureUnits();const he=U.fog,ge=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,ue=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Yt,Se=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Te=K.get(W.envMap||ge,Se),Oe=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let vt=Pn;W.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(vt=S.toneMapping);const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,kt=lt!==void 0?lt.length:0,Ee=y.get(W),Zt=T.state.lights;if(we===!0&&(Pe===!0||E!==F)){const Pt=E===F&&W.id===N;se.setState(W,E,Pt)}let Qe=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Zt.state.version||Ee.outputColorSpace!==ue||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==Te||W.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==se.numPlanes||Ee.numIntersection!==se.numIntersection)||Ee.vertexAlphas!==Oe||Ee.vertexTangents!==qe||Ee.morphTargets!==Ce||Ee.morphNormals!==at||Ee.morphColors!==Mt||Ee.toneMapping!==vt||Ee.morphTargetsCount!==kt)&&(Qe=!0):(Qe=!0,Ee.__version=W.version);let dn=Ee.currentProgram;Qe===!0&&(dn=Lr(W,U,G));let bn=!1,bi=!1,ji=!1;const ut=dn.getUniforms(),Ut=Ee.uniforms;if(be.useProgram(dn.program)&&(bn=!0,bi=!0,ji=!0),W.id!==N&&(N=W.id,bi=!0),bn||F!==E){be.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(L,"projectionMatrix",E.projectionMatrix),ut.setValue(L,"viewMatrix",E.matrixWorldInverse);const ri=ut.map.cameraPosition;ri!==void 0&&ri.setValue(L,ke.setFromMatrixPosition(E.matrixWorld)),dt.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,bi=!0,ji=!0)}if(Ee.needsLights&&(Zt.state.directionalShadowMap.length>0&&ut.setValue(L,"directionalShadowMap",Zt.state.directionalShadowMap,B),Zt.state.spotShadowMap.length>0&&ut.setValue(L,"spotShadowMap",Zt.state.spotShadowMap,B),Zt.state.pointShadowMap.length>0&&ut.setValue(L,"pointShadowMap",Zt.state.pointShadowMap,B)),G.isSkinnedMesh){ut.setOptional(L,G,"bindMatrix"),ut.setOptional(L,G,"bindMatrixInverse");const Pt=G.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(L,"boneTexture",Pt.boneTexture,B))}G.isBatchedMesh&&(ut.setOptional(L,G,"batchingTexture"),ut.setValue(L,"batchingTexture",G._matricesTexture,B),ut.setOptional(L,G,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",G._indirectTexture,B),ut.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",G._colorsTexture,B));const si=X.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&pe.update(G,X,dn),(bi||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,ut.setValue(L,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Ut.envMapIntensity.value=U.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Uy()),bi&&(ut.setValue(L,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&xp(Ut,ji),he&&W.fog===!0&&Ie.refreshFogUniforms(Ut,he),Ie.refreshMaterialUniforms(Ut,W,Ne,fe,T.state.transmissionRenderTarget[E.id]),Lo.upload(L,Lh(Ee),Ut,B)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Lo.upload(L,Lh(Ee),Ut,B),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(L,"center",G.center),ut.setValue(L,"modelViewMatrix",G.modelViewMatrix),ut.setValue(L,"normalMatrix",G.normalMatrix),ut.setValue(L,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pt=W.uniformsGroups;for(let ri=0,Zi=Pt.length;ri<Zi;ri++){const Dh=Pt[ri];_e.update(Dh,dn),_e.bind(Dh,dn)}}return dn}function xp(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function vp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,U,X){const W=y.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=U,y.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const X=y.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};const yp=L.createFramebuffer();this.setRenderTarget=function(E,U=0,X=0){O=E,I=U,k=X;let W=null,G=!1,he=!1;if(E){const ue=y.get(E);if(ue.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),H.copy(E.viewport),z.copy(E.scissor),ee=E.scissorTest,be.viewport(H),be.scissor(z),be.setScissorTest(ee),N=-1;return}else if(ue.__webglFramebuffer===void 0)B.setupRenderTarget(E);else if(ue.__hasExternalTextures)B.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&y.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(E)}}const Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(he=!0);const Te=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?W=Te[U][X]:W=Te[U],G=!0):E.samples>0&&B.useMultisampledRTT(E)===!1?W=y.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?W=Te[X]:W=Te,H.copy(E.viewport),z.copy(E.scissor),ee=E.scissorTest}else H.copy(q).multiplyScalar(Ne).floor(),z.copy(Z).multiplyScalar(Ne).floor(),ee=ie;if(X!==0&&(W=yp),be.bindFramebuffer(L.FRAMEBUFFER,W)&&be.drawBuffers(E,W),be.viewport(H),be.scissor(z),be.setScissorTest(ee),G){const ue=y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,X)}else if(he){const ue=U;for(let Se=0;Se<E.textures.length;Se++){const Te=y.get(E.textures[Se]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Se,Te.__webglTexture,X,ue)}}else if(E!==null&&X!==0){const ue=y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,X)}N=-1},this.readRenderTargetPixels=function(E,U,X,W,G,he,ge,ue=0){if(!(E&&E.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){be.bindFramebuffer(L.FRAMEBUFFER,Se);try{const Te=E.textures[ue],Oe=Te.format,qe=Te.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!dt.textureFormatReadable(Oe)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(qe)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&X>=0&&X<=E.height-G&&L.readPixels(U,X,W,G,le.convert(Oe),le.convert(qe),he)}finally{const Te=O!==null?y.get(O).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,W,G,he,ge,ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se)if(U>=0&&U<=E.width-W&&X>=0&&X<=E.height-G){be.bindFramebuffer(L.FRAMEBUFFER,Se);const Te=E.textures[ue],Oe=Te.format,qe=Te.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!dt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(U,X,W,G,le.convert(Oe),le.convert(qe),0);const at=O!==null?y.get(O).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,at);const Mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lm(L,Mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(Ce),L.deleteSync(Mt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){const W=Math.pow(2,-X),G=Math.floor(E.image.width*W),he=Math.floor(E.image.height*W),ge=U!==null?U.x:0,ue=U!==null?U.y:0;B.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,ge,ue,G,he),be.unbindTexture()};const Mp=L.createFramebuffer(),Sp=L.createFramebuffer();this.copyTextureToTexture=function(E,U,X=null,W=null,G=0,he=0){let ge,ue,Se,Te,Oe,qe,Ce,at,Mt;const vt=E.isCompressedTexture?E.mipmaps[he]:E.image;if(X!==null)ge=X.max.x-X.min.x,ue=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,Oe=X.min.y,qe=X.isBox3?X.min.z:0;else{const Ut=Math.pow(2,-G);ge=Math.floor(vt.width*Ut),ue=Math.floor(vt.height*Ut),E.isDataArrayTexture?Se=vt.depth:E.isData3DTexture?Se=Math.floor(vt.depth*Ut):Se=1,Te=0,Oe=0,qe=0}W!==null?(Ce=W.x,at=W.y,Mt=W.z):(Ce=0,at=0,Mt=0);const lt=le.convert(U.format),kt=le.convert(U.type);let Ee;U.isData3DTexture?(B.setTexture3D(U,0),Ee=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(B.setTexture2DArray(U,0),Ee=L.TEXTURE_2D_ARRAY):(B.setTexture2D(U,0),Ee=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=L.getParameter(L.UNPACK_SKIP_PIXELS),bn=L.getParameter(L.UNPACK_SKIP_ROWS),bi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe);const ji=E.isDataArrayTexture||E.isData3DTexture,ut=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Ut=y.get(E),si=y.get(U),Pt=y.get(Ut.__renderTarget),ri=y.get(si.__renderTarget);be.bindFramebuffer(L.READ_FRAMEBUFFER,Pt.__webglFramebuffer),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Zi=0;Zi<Se;Zi++)ji&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(E).__webglTexture,G,qe+Zi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(U).__webglTexture,he,Mt+Zi)),L.blitFramebuffer(Te,Oe,ge,ue,Ce,at,ge,ue,L.DEPTH_BUFFER_BIT,L.NEAREST);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||y.has(E)){const Ut=y.get(E),si=y.get(U);be.bindFramebuffer(L.READ_FRAMEBUFFER,Mp),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,Sp);for(let Pt=0;Pt<Se;Pt++)ji?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.__webglTexture,G,qe+Pt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ut.__webglTexture,G),ut?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,si.__webglTexture,he,Mt+Pt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,si.__webglTexture,he),G!==0?L.blitFramebuffer(Te,Oe,ge,ue,Ce,at,ge,ue,L.COLOR_BUFFER_BIT,L.NEAREST):ut?L.copyTexSubImage3D(Ee,he,Ce,at,Mt+Pt,Te,Oe,ge,ue):L.copyTexSubImage2D(Ee,he,Ce,at,Te,Oe,ge,ue);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ut?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ee,he,Ce,at,Mt,ge,ue,Se,lt,kt,vt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,he,Ce,at,Mt,ge,ue,Se,lt,vt.data):L.texSubImage3D(Ee,he,Ce,at,Mt,ge,ue,Se,lt,kt,vt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,Ce,at,ge,ue,lt,kt,vt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,Ce,at,vt.width,vt.height,lt,vt.data):L.texSubImage2D(L.TEXTURE_2D,he,Ce,at,ge,ue,lt,kt,vt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Zt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,bn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bi),he===0&&U.generateMipmaps&&L.generateMipmap(Ee),be.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&B.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?B.setTextureCube(E,0):E.isData3DTexture?B.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?B.setTexture2DArray(E,0):B.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){I=0,k=0,O=null,be.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function Zu(s,e){if(e===jp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Jl||e===bf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Jl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Fy(s){const e=new Map,t=new Map,n=s.clone();return $f(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function $f(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)$f(s.children[n],e.children[n],t)}class ky extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Ju(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ju(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new nM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=fr.extractUrlBase(e);o=fr.resolveURL(c,this.path)}else o=fr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new kf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Yf){try{o[$e.KHR_BINARY_GLTF]=new iM(e)}catch(u){i&&i(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new gM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new Vy;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new sM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new rM;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new oM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Oy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Et(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zy{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new me(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Rg(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ag(h),c.distance=u;break;case"spot":c=new Tg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Cn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Vy{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,n){const i=[];e.color=new me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}}class Hy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Gy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(r,r)}return Promise.all(i)}}class Wy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Xy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class qy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Yt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,St)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class $y{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Yy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(r[0],r[1],r[2],Yt),Promise.all(i)}}class Ky{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class jy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(r[0],r[1],r[2],Yt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,St)),Promise.all(i)}}class Zy{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Jy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Qy{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class eM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class tM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Ju{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class nM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==rn.TRIANGLES&&c.mode!==rn.TRIANGLE_STRIP&&c.mode!==rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const _=new Fe,p=new D,g=new Fn,v=new D(1,1,1),b=new Pf(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,_.compose(p,g,v));for(const M in l)if(M==="_COLOR_0"){const T=l[M];b.instanceColor=new Tr(T.array,T.itemSize,T.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);xt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Yf="glTF",Ks=12,Qu={JSON:1313821514,BIN:5130562};class iM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ks,r=new DataView(e,Ks);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Qu.JSON){const c=new Uint8Array(e,Ks+o,a);this.content=n.decode(c)}else if(l===Qu.BIN){const c=Ks+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=sc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=sc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ts[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}u(f)},a,c,Yt,d)})})}}class rM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class oM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Kf extends Ns{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,_=m-c,p=-2*f+3*d,g=f-d,v=1-p,b=g-d+u;for(let M=0;M!==a;M++){const T=o[_+M+a],A=o[_+M+l]*h,C=o[m+M+a],x=o[m+M]*h;r[M]=v*T+b*A+p*C+g*x}return r}}const aM=new Fn;class lM extends Kf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return aM.fromArray(r).normalize().toArray(r),r}}const rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ed={9728:bt,9729:wt,9984:gf,9985:Co,9986:lr,9987:jn},td={33071:Rn,33648:No,10497:ws},Wa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cM={CUBICSPLINE:void 0,LINEAR:Sr,STEP:Mr},Xa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ih({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yn})),s.DefaultMaterial}function Ii(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Cn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function dM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fM(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qa(t.attributes):e=s.indices+":"+qa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qa(s.targets[n]);return e}function qa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function rc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mM=new Fe;class gM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Oy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new bg(this.options.manager):this.textureLoader=new Lg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ii(r,a,i),Cn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(fr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Wa[i.type],a=Ts[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ze(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Wa[i.type],c=Ts[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,p;if(f&&f!==u){const g=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let b=t.cache.get(v);b||(_=new c(a,g*f,i.count*f/h),b=new Wm(_,f/h),t.cache.add(v,b)),p=new Jc(b,l,d%f/h,m)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),p=new Ze(_,l,m);if(i.sparse!==void 0){const g=Wa.SCALAR,v=Ts[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,T=new v(o[1],b,i.sparse.count*g),A=new c(o[2],M,i.sparse.count*l);a!==null&&(p=new Ze(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let C=0,x=T.length;C<x;C++){const S=T[C];if(p.setX(S,A[C*l]),l>=2&&p.setY(S,A[C*l+1]),l>=3&&p.setZ(S,A[C*l+2]),l>=4&&p.setW(S,A[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=ed[d.magFilter]||wt,h.minFilter=ed[d.minFilter]||jn,h.wrapS=td[d.wrapS]||ws,h.wrapT=td[d.wrapT]||ws,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==bt&&h.minFilter!==wt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const p=new Rt(_);p.needsUpdate=!0,d(p)}),t.load(fr.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Cn(u,o),u.userData.mimeType=o.mimeType||pM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Df,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zo,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ih}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new me(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=$t);const h=r.alphaMode||Xa.OPAQUE;if(h===Xa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Xa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ln&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ln&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ln){const u=r.emissiveFactor;a.emissive=new me().setRGB(u[0],u[1],u[2],Yt)}return r.emissiveTexture!==void 0&&o!==Ln&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Cn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ii(i,u,r),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return nd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=fM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=nd(new Bt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?hM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],p=o[f];let g;const v=c[f];if(p.mode===rn.TRIANGLES||p.mode===rn.TRIANGLE_STRIP||p.mode===rn.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new Ym(_,v):new _t(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===rn.TRIANGLE_STRIP?g.geometry=Zu(g.geometry,bf):p.mode===rn.TRIANGLE_FAN&&(g.geometry=Zu(g.geometry,Jl));else if(p.mode===rn.LINES)g=new ec(_,v);else if(p.mode===rn.LINE_STRIP)g=new th(_,v);else if(p.mode===rn.LINE_LOOP)g=new eg(_,v);else if(p.mode===rn.POINTS)g=new tg(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&dM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Cn(g,r),p.extensions&&Ii(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ii(i,u[0],r),u[0];const d=new jt;r.extensions&&Ii(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Cm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ea(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Cn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new eh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],_=f.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],p=u[4],g=[];for(let b=0,M=d.length;b<M;b++){const T=d[b],A=f[b],C=m[b],x=_[b],S=p[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const V=n._createAnimationTracks(T,A,C,x,S);if(V)for(let I=0;I<V.length;I++)g.push(V[I])}const v=new gg(r,void 0,g);return Cn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,mM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,m=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Lf:c.length>1?h=new jt:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Cn(h,r),r.extensions&&Ii(n,h,r),r.matrix!==void 0){const u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new jt;n.name&&(r.name=i.createUniqueName(n.name)),Cn(r,n),n.extensions&&Ii(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(Fy(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Bn||d instanceof Rt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];di[r.path]===di.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(di[r.path]){case di.weights:c=Ps;break;case di.rotation:c=Ds;break;case di.translation:case di.scale:c=Bs;break;default:switch(n.itemSize){case 1:c=Ps;break;case 2:case 3:default:c=Bs;break}break}const h=i.interpolation!==void 0?cM[i.interpolation]:Sr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+di[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=rc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ds?lM:Kf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _M(s,e,t){const n=e.attributes,i=new Ht;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const h=rc(Ts[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=rc(Ts[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ft;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function nd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=sc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return je.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Cn(s,e),_M(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?uM(s,e.targets,t):s})}const Li=[{id:1,name:"andesite",textureUri:"blocks/andesite.png",isMultiTexture:!1},{id:2,name:"birch-leaves",textureUri:"blocks/birch-leaves.png",isMultiTexture:!1},{id:3,name:"bricks",textureUri:"blocks/bricks.png",isMultiTexture:!1},{id:4,name:"coal-ore",textureUri:"blocks/coal-ore.png",isMultiTexture:!1},{id:5,name:"cobblestone",textureUri:"blocks/cobblestone.png",isMultiTexture:!1},{id:6,name:"grass-block-pine",textureUri:"blocks/grass-block-pine",isMultiTexture:!0},{id:7,name:"grass-block",textureUri:"blocks/grass-block",isMultiTexture:!0},{id:8,name:"grass-flower-block-pine",textureUri:"blocks/grass-flower-block-pine",isMultiTexture:!0},{id:9,name:"grass-flower-block",textureUri:"blocks/grass-flower-block",isMultiTexture:!0},{id:10,name:"oak-leaves",textureUri:"blocks/oak-leaves.png",isMultiTexture:!1},{id:11,name:"oak-log",textureUri:"blocks/oak-log",isMultiTexture:!0},{id:12,name:"sand",textureUri:"blocks/sand.png",isMultiTexture:!1},{id:13,name:"spruce-leaves",textureUri:"blocks/spruce-leaves.png",isMultiTexture:!1},{id:14,name:"spruce-log",textureUri:"blocks/spruce-log",isMultiTexture:!0},{id:15,name:"stone",textureUri:"blocks/stone.png",isMultiTexture:!1},{id:16,name:"water",textureUri:"blocks/water.png",isMultiTexture:!1,isLiquid:!0}],id=16,sd=.3;Array.from({length:id+1},(s,e)=>e===0?0:sd+(1-sd)*(e-1)/(id-1));const xM=-.1,rd=.05,vM=1 .toFixed(1),js="rawAmbientLightColor",ho="ambientLightIntensity",Go="uChunkVisibleBits",Wo="uChunkVisibilityMode",Pi="time",Zs="textureAtlas",Js="ambientLightColor",oc="hytopiaFogColor",ac="hytopiaFogEnabled",lc="hytopiaFogFar",cc="hytopiaFogNear",$a="foamLevel",Ya="foamLevelDiag",ii="chunkIndex",yM="HAS_LIGHT_LEVEL",jf=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`,gn=0,fi=1;function MM(s){return Math.max(Math.ceil(s/32),1)}function _n(s){return Math.max(Math.ceil(MM(s)/4),1)}function Zf(s){return{[Go]:{value:new Uint32Array(_n(s)*4)},[Wo]:{value:gn}}}function Jf(s){return{[oc]:{get value(){return s.renderer.fogColor}},[ac]:{get value(){return s.renderer.fogEnabled}},[lc]:{get value(){return s.renderer.fogFar}},[cc]:{get value(){return s.renderer.fogNear}}}}function Qf(){return`
    uniform vec3 ${oc};
    uniform bool ${ac};
    uniform float ${lc};
    uniform float ${cc};

    vec3 applyHytopiaFog(vec3 color, vec3 worldPos) {
      if (!${ac}) {
        return color;
      }

      float fogFactor = smoothstep(${cc}, ${lc}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${oc}, fogFactor);
    }
  `}function ep(s){return`
    uniform uint ${Wo};
    uniform uvec4 ${Go}[${s}];
    attribute float ${ii};

    bool isChunkVisible(uint chunkIndexValue) {
      if (${Wo} == uint(${gn})) {
        return true;
      }

      uint wordIndex = chunkIndexValue >> 5u;
      uvec4 packedWords = ${Go}[int(wordIndex >> 2u)];
      uint packedWord = packedWords[int(wordIndex & 3u)];
      uint bitIndex = chunkIndexValue & 31u;
      return ((packedWord >> bitIndex) & 1u) != 0u;
    }
  `}let tp=class extends Gt{constructor(){super(...arguments);R(this,"_boundChunkVisibilityBatchKey","");R(this,"_boundChunkVisibilityMode",-1);R(this,"_boundChunkVisibilityRevision",-1);R(this,"_boundChunkVisibilityBits",null)}bindChunkVisibility(t,n,i,r){return this._boundChunkVisibilityBatchKey===t&&this._boundChunkVisibilityBits===n&&this._boundChunkVisibilityMode===i&&this._boundChunkVisibilityRevision===r?!1:(this.uniforms[Go].value=n,this.uniforms[Wo].value=i,this._boundChunkVisibilityBatchKey=t,this._boundChunkVisibilityBits=n,this._boundChunkVisibilityMode=i,this._boundChunkVisibilityRevision=r,!0)}resetBoundChunkVisibilityState(){this._boundChunkVisibilityBatchKey="",this._boundChunkVisibilityBits=null,this._boundChunkVisibilityMode=-1,this._boundChunkVisibilityRevision=-1}};class hr extends tp{constructor(t,n,i,r){const o=Nn.clone(pt.basic.uniforms),a=_n(r);Object.assign(o,Zf(r),{[js]:{value:t.renderer.ambientLight.color},[ho]:{get value(){return t.renderer.ambientLight.intensity}}},Jf(t));const l=ep(a),c=pt.basic.vertexShader.replace("void main() {",`
        ${l}
        ${i?"attribute float lightLevel; varying float vLightLevel;":""}
        varying vec3 vWorldPos;

        void main() {
          uint chunkIndexValue = uint(${ii} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          ${i?"vLightLevel = lightLevel;":""}
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),h=i?`
          vec3 ambientLight = ${js} * ${ho};
          vec3 blockLight = ${js} * vLightLevel * float(${vM});
          outgoingLight *= max(ambientLight, blockLight);
        `:`outgoingLight *= ${js} * ${ho};`,u=pt.basic.fragmentShader.replace("void main() {",`
          ${jf}
          uniform vec3 ${js};
          uniform float ${ho};
          ${i?"varying float vLightLevel;":""}
          varying vec3 vWorldPos;
          ${Qf()}

          void main() {
        `).replace("#include <opaque_fragment>",`
          ${h}
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:o,vertexShader:c,fragmentShader:u,side:yn,transparent:n,alphaTest:rd,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0,glslVersion:yi});R(this,"_alphaTest",rd);R(this,"_batchChunkCount");R(this,"_color",new me(16777215));R(this,"_customEmissive",new me(0));R(this,"_customEmissiveIntensity",1);R(this,"_game");R(this,"_map",null);R(this,"_hasLightLevel");R(this,"_uvScrollSpeed",null);this._game=t,this._batchChunkCount=r,this._hasLightLevel=i,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_ALPHATEST:"",[yM]:i?1:0},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],[ii]:[0],lightLevel:[0]},this._bindUniforms()}get map(){return this._map}set map(t){var n;this._map=t,t?this.defines={...this.defines||{},USE_MAP:""}:((n=this.defines)==null?void 0:n.USE_MAP)!==void 0&&delete this.defines.USE_MAP}get color(){return this._color}get customAlphaTest(){return this._alphaTest}set customAlphaTest(t){this._alphaTest=t}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest=t}get customEmissive(){return this._customEmissive}get customEmissiveIntensity(){return this._customEmissiveIntensity}set customEmissiveIntensity(t){this._customEmissiveIntensity=t}get uvScrollSpeed(){return this._uvScrollSpeed}set uvScrollSpeed(t){this._uvScrollSpeed=t?t.clone():null}clone(){return new this.constructor(this._game,this.transparent,this._hasLightLevel,this._batchChunkCount).copy(this)}copy(t){return super.copy(t),this._alphaTest=t._alphaTest,this._batchChunkCount=t._batchChunkCount,this._color.copy(t._color),this._customEmissive.copy(t._customEmissive),this._customEmissiveIntensity=t._customEmissiveIntensity,this._game=t._game,this._hasLightLevel=t._hasLightLevel,this._map=t._map,this.uvScrollSpeed=t._uvScrollSpeed,this._bindUniforms(),this.resetBoundChunkVisibilityState(),this}_bindUniforms(){const t=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms.map={get value(){return t._map}},this.uniforms.alphaTest={get value(){return t._alphaTest}}}}class np extends tp{constructor(e,t){const n=_n(t);super({uniforms:Nn.merge([Zf(t),Jf(e),{[Pi]:{value:0},[Zs]:{value:null},[Js]:{value:new me}}]),vertexShader:`
        uniform float ${Pi};
        ${ep(n)}

        attribute vec4 ${$a};
        attribute vec4 ${Ya};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;

        void main() {
          uint chunkIndexValue = uint(${ii} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          vFoamLevel = ${$a};
          vFoamLevelDiag = ${Ya};
          vNormal = normalize(normal);
          vUv = uv;

          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vViewVector = normalize(cameraPosition - worldPos.xyz);

          vec3 pos = position;
          float slowTime = ${Pi} * 0.5;
          float yOffset = ${xM};
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
        ${jf}
        uniform float ${Pi};
        uniform sampler2D ${Zs};
        uniform vec3 ${Js};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${Qf()}

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
          vec4 texColor = texture(${Zs}, vUv);
          if (texColor.a < 0.2) {
            discard;
          }

          vec3 color = texColor.rgb * ${Js};

          if (vNormal.y > 0.5) {
            float fresnel = pow(1.0 - dot(vNormal, vViewVector), 4.0);
            float waveLighting = sin(dot(vWorldPos.xz, vec2(2.0)) + ${Pi} * 0.5) * 0.1;

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
              float foamTime = ${Pi} * 0.3;
              vec2 foamUV = vWorldPos.xz * 6.0;

              float foamNoise = noise(foamUV + vec2(foamTime, 0.0)) * 0.5 +
                                noise(foamUV * 2.0 + vec2(0.0, foamTime * 0.5)) * 0.3 +
                                noise(foamUV * 4.0 + vec2(foamTime * 0.3, foamTime * 0.2)) * 0.2;
              float foamPattern = smoothstep(0.3, 0.5, foamNoise);
              float finalFoam = mix(foamIntensity, foamPattern * foamIntensity, smoothstep(0.0, 0.05, minDist));

              vec3 foamColor = vec3(1.0) * ${Js};
              color = mix(color, foamColor, finalFoam * 0.95);
            }
          }

          gl_FragColor = vec4(color, 0.8);
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vWorldPos);
        }
      `,uniformsNeedUpdate:!1,forceSinglePass:!0,side:$t,transparent:!0,fog:!1,lights:!1,toneMapped:!0,glslVersion:yi}),this.defaultAttributeValues={...this.defaultAttributeValues,uv:[0,0],[ii]:[0],[$a]:[0,0,0,0],[Ya]:[0,0,0,0]}}get textureAtlas(){return this.uniforms[Zs].value}set textureAtlas(e){this.uniforms[Zs].value=e}update(e,t){this.uniforms[Pi].value+=.0075,this.uniforms[Js].value.copy(e).multiplyScalar(t)}}class SM{constructor(e){R(this,"_game");R(this,"_opaqueMaterial");R(this,"_transparentMaterial");R(this,"_opaqueNonLitMaterial");R(this,"_transparentNonLitMaterial");R(this,"_liquidMaterial");R(this,"_materialsToUpdate",[]);this._game=e,this._opaqueMaterial=new hr(e,!1,!0,8*4*8),this._transparentMaterial=new hr(e,!0,!0,2*2*2),this._opaqueNonLitMaterial=new hr(e,!1,!1,8*4*8),this._transparentNonLitMaterial=new hr(e,!0,!1,2*2*2),this._liquidMaterial=new np(e,2*2*2);const t=this._game.textureAtlas;this._opaqueMaterial.map=t,this._transparentMaterial.map=t,this._opaqueNonLitMaterial.map=t,this._transparentNonLitMaterial.map=t,this._liquidMaterial.textureAtlas=t,this._opaqueMaterial.needsUpdate=!0,this._transparentMaterial.needsUpdate=!0,this._opaqueNonLitMaterial.needsUpdate=!0,this._transparentNonLitMaterial.needsUpdate=!0,this._liquidMaterial.needsUpdate=!0}get opaqueMaterial(){return this._opaqueMaterial}get transparentMaterial(){return this._transparentMaterial}get opaqueNonLitMaterial(){return this._opaqueNonLitMaterial}get transparentNonLitMaterial(){return this._transparentNonLitMaterial}get liquidMaterial(){return this._liquidMaterial}update(){const e=this._game.renderer.ambientLight;this._liquidMaterial.update(e.color,e.intensity)}cloneTransparentNonLitMaterial(){const e=this._transparentNonLitMaterial.clone();return e.map===null&&this._materialsToUpdate.push(e),e}}class bM{constructor(e,t){R(this,"manager");this.manager=new SM({renderer:e.renderer,textureAtlas:t})}get liquidMaterial(){return this.manager.liquidMaterial}get opaqueMaterial(){return this.manager.opaqueMaterial}get transparentMaterial(){return this.manager.transparentMaterial}update(){this.manager.update()}}const Re=16,on=Re-1,od=Re*Re*Re,ad={x:0,y:0,z:0};function EM(s,e){const t=s.indexOf(","),n=s.indexOf(",",t+1);return e.x=Number(s.slice(0,t)),e.y=Number(s.slice(t+1,n)),e.z=Number(s.slice(n+1)),e}class Ke{constructor(e,t,n){R(this,"originCoordinate");R(this,"_chunkId");R(this,"_blocks");R(this,"_rotations");this.originCoordinate={...e},this._chunkId=Ke.originCoordinateToChunkId(e),this._blocks=t??new Uint16Array(od),this._rotations=n??new Uint8Array(od)}get chunkId(){return this._chunkId}static originCoordinateToChunkId(e){return`${e.x},${e.y},${e.z}`}static chunkIdToOriginCoordinate(e){return EM(e,ad),{...ad}}static globalCoordinateToOriginCoordinate(e){return{x:e.x&~on,y:e.y&~on,z:e.z&~on}}static globalCoordinateToChunkId(e){return Ke.originCoordinateToChunkId(Ke.globalCoordinateToOriginCoordinate(e))}static globalCoordinateToLocalCoordinate(e){return{x:e.x&on,y:e.y&on,z:e.z&on}}static blockIndexToLocalCoordinate(e){return{x:e&on,y:e>>4&on,z:e>>8&on}}getBlockType(e){return this._blocks[this._getIndex(e)]}getBlockTypeAt(e,t,n){return this._blocks[e+Re*(t+Re*n)]}setBlock(e,t){this._blocks[this._getIndex(e)]=t}getBlockRotation(e){return this._rotations[this._getIndex(e)]??0}getBlockRotationAt(e,t,n){return this._rotations[e+Re*(t+Re*n)]??0}setBlockRotation(e,t){this._rotations[this._getIndex(e)]=t&255}isEmpty(){for(let e=0;e<this._blocks.length;e++)if(this._blocks[e]!==0)return!1;return!0}cloneBlocks(){return this._blocks.slice()}cloneRotations(){return this._rotations.slice()}forEachBlock(e){for(let t=0;t<this._blocks.length;t++){const n=this._blocks[t];n!==0&&e(Ke.blockIndexToLocalCoordinate(t),n,this._rotations[t]??0)}}_getIndex(e){return e.x+Re*(e.y+Re*e.z)}}class ip{}R(ip,"chunkIdToOriginCoordinate",Ke.chunkIdToOriginCoordinate);const en=3,Di=3,Ka=2,ps=4,uo=1,pi=4,ja="TransparentSortData",Za=new Ht;function tn(s){if(!(ja in s.userData)){const n={center:new D,frame:-1,halfSize:new D,key:-1};s.userData[ja]=n}s.geometry.boundingBox===null&&s.geometry.computeBoundingBox();const{center:e,halfSize:t}=s.userData[ja];Za.copy(s.geometry.boundingBox).applyMatrix4(s.matrixWorld),Za.getCenter(e),Za.getSize(t).multiplyScalar(.5)}const TM={x:2,y:2,z:2},CM={x:2,y:2,z:2},Kt={x:8,y:4,z:8},AM=2,fo=2,po=new Ve,mi=new D,Qs=new D,hc="hytopiaFogColor",uc="hytopiaFogEnabled",dc="hytopiaFogFar",fc="hytopiaFogNear",Po="uChunkVisibleBits",Do="uChunkVisibilityMode",wM=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`;function ld(s){return s.min.x<=s.max.x&&s.min.y<=s.max.y&&s.min.z<=s.max.z}function RM(s){return{[Po]:{value:new Uint32Array(_n(s)*4)},[Do]:{value:gn}}}function IM(s){return{[hc]:{get value(){return s.renderer.fogColor}},[uc]:{get value(){return s.renderer.fogEnabled}},[dc]:{get value(){return s.renderer.fogFar}},[fc]:{get value(){return s.renderer.fogNear}}}}class cd extends Gt{constructor(t,n){const i=Nn.clone(pt.basic.uniforms),r=_n(n);Object.assign(i,RM(n),IM(t));const o=pt.basic.vertexShader.replace("void main() {",`
        uniform uint ${Do};
        uniform uvec4 ${Po}[${r}];
        attribute float ${ii};
        varying vec3 vHytopiaWorldPos;

        bool isChunkVisible(uint chunkIndexValue) {
          if (${Do} == uint(${gn})) {
            return true;
          }

          uint wordIndex = chunkIndexValue >> 5u;
          uvec4 packedWords = ${Po}[int(wordIndex >> 2u)];
          uint packedWord = packedWords[int(wordIndex & 3u)];
          uint bitIndex = chunkIndexValue & 31u;
          return ((packedWord >> bitIndex) & 1u) != 0u;
        }

        void main() {
          uint chunkIndexValue = uint(${ii} + 0.5);
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
      `),a=pt.basic.fragmentShader.replace("void main() {",`
          ${wM}
          varying vec3 vHytopiaWorldPos;
          uniform vec3 ${hc};
          uniform bool ${uc};
          uniform float ${dc};
          uniform float ${fc};

          vec3 applyHytopiaFog(vec3 color, vec3 worldPos) {
            if (!${uc}) {
              return color;
            }

            float fogFactor = smoothstep(${fc}, ${dc}, length(worldPos.xz - cameraPosition.xz));
            return mix(color, ${hc}, fogFactor);
          }

          void main() {
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vHytopiaWorldPos);
        `);super({uniforms:i,vertexShader:o,fragmentShader:a,side:$t,vertexColors:!0,fog:!1,lights:!1,toneMapped:!0,glslVersion:yi});R(this,"_boundBatchKey","");R(this,"_boundChunkVisibilityBits",null);R(this,"_boundChunkVisibilityMode",-1);R(this,"_boundChunkVisibilityRevision",-1);this.defines={...this.defines||{},USE_COLOR:""}}bindChunkVisibility(t,n,i,r){return this._boundBatchKey===t&&this._boundChunkVisibilityBits===n&&this._boundChunkVisibilityMode===i&&this._boundChunkVisibilityRevision===r?!1:(this.uniforms[Po].value=n,this.uniforms[Do].value=i,this._boundBatchKey=t,this._boundChunkVisibilityBits=n,this._boundChunkVisibilityMode=i,this._boundChunkVisibilityRevision=r,!0)}}class LM{constructor(e){R(this,"_game");R(this,"_gl");R(this,"_chunkLiquidGeometry",new Map);R(this,"_chunkLodGeometry",new Map);R(this,"_chunkOpaqueGeometry",new Map);R(this,"_chunkTransparentGeometry",new Map);R(this,"_chunkLiquidBounds",new Map);R(this,"_chunkLodBounds",new Map);R(this,"_chunkOpaqueBounds",new Map);R(this,"_chunkTransparentBounds",new Map);R(this,"_liquidBatches",new Map);R(this,"_opaqueBatches",new Map);R(this,"_transparentBatches",new Map);R(this,"_opaqueCollisionMeshes",new Map);R(this,"_parentBatches",new Map);R(this,"_transparentCollisionMeshes",new Map);R(this,"_batchKeyCache",new Map);R(this,"_opaqueSolidBatchMeshes",[]);R(this,"_opaqueSolidBatchMeshesDirty",!0);R(this,"_transparentSolidBatchMeshes",[]);R(this,"_transparentSolidBatchMeshesDirty",!0);R(this,"_solidMeshesInScene",[]);R(this,"_solidMeshesInSceneDirty",!0);R(this,"_collisionMaterial",new Ln);R(this,"_lodMaterial");this._game=e,this._gl=e.renderer.webGLRenderer.getContext(),this._lodMaterial=new cd(e,Kt.x*Kt.y*Kt.z)}updateChunkGeometry(e,t,n,i,r,o,a,l,c){this._updateChunkGeometryForKind("liquid",e,t,n),this._updateChunkLodGeometry(e,i,r),this._updateChunkGeometryForKind("opaque",e,o,a),this._updateChunkGeometryForKind("transparent",e,l,c)}removeChunkGeometry(e){this._updateChunkGeometryForKind("liquid",e,void 0),this._updateChunkLodGeometry(e,void 0),this._updateChunkGeometryForKind("opaque",e,void 0),this._updateChunkGeometryForKind("transparent",e,void 0)}clear(){for(const e of[...this._opaqueBatches.values()])this._disposeBatch(this._opaqueBatches,e);for(const e of[...this._transparentBatches.values()])this._disposeBatch(this._transparentBatches,e);for(const e of[...this._liquidBatches.values()])this._disposeBatch(this._liquidBatches,e);for(const e of this._parentBatches.values())this._disposeLodBatch(e);this._chunkLiquidGeometry.clear(),this._chunkLodGeometry.clear(),this._chunkOpaqueGeometry.clear(),this._chunkTransparentGeometry.clear(),this._chunkLiquidBounds.clear(),this._chunkLodBounds.clear(),this._chunkOpaqueBounds.clear(),this._chunkTransparentBounds.clear(),this._opaqueCollisionMeshes.clear(),this._transparentCollisionMeshes.clear(),this._opaqueBatches.clear(),this._transparentBatches.clear(),this._liquidBatches.clear(),this._parentBatches.clear(),this._batchKeyCache.clear(),this._opaqueSolidBatchMeshes.length=0,this._transparentSolidBatchMeshes.length=0,this._solidMeshesInScene.length=0,this._opaqueSolidBatchMeshesDirty=!0,this._transparentSolidBatchMeshesDirty=!0,this._solidMeshesInSceneDirty=!0}get batchMeshCount(){let e=0;for(const t of this._parentBatches.values())t.lodBatch&&e++;return this._opaqueBatches.size+this._transparentBatches.size+this._liquidBatches.size+e}applyBatchVisibility(e,t,n,i,r,o){this._flushPendingUploads();for(const a of this._parentBatches.values())this._applyParentBatchVisibility(a,e,t,n,i,r,o)}collectPreOcclusionChunkModes(e,t,n,i,r){r.clear();for(const o of this._parentBatches.values()){const a=this._classifyViewDistance(o.bounds,e,n),l=ld(o.bounds)?this._classifyFrustum(o.bounds,i):-1;if(!(a===-1||l===-1))for(const c of this._getParentBatchChunkIds(o)){const h=this._getChunkVisibilityBounds(c);if(!h||this._classifyChunkBoundsViewDistance(h,e,n)===-1||this._classifyChunkBoundsFrustum(h,i)===-1)continue;const u=this._distanceToChunkBoundsXZSquared(h,e);r.set(c,u>t&&o.lodChunkIds.has(c)?"lod":"normal")}}return r}getChunkVisibilityBounds(e){return this._getChunkVisibilityBounds(e)}getChunkOpaqueBounds(e){return this._chunkOpaqueBounds.get(e)}getChunkTransparentBounds(e){return this._chunkTransparentBounds.get(e)}getChunkLiquidBounds(e){return this._chunkLiquidBounds.get(e)}getChunkLodBounds(e){return this._chunkLodBounds.get(e)}get solidMeshesInScene(){return this._solidMeshesInSceneDirty?(this._solidMeshesInScene.length=0,this._collectCollisionMeshes(this._opaqueBatches,this._opaqueCollisionMeshes),this._collectCollisionMeshes(this._transparentBatches,this._transparentCollisionMeshes),this._solidMeshesInSceneDirty=!1,this._solidMeshesInScene):this._solidMeshesInScene}get opaqueSolidMeshes(){if(this._opaqueSolidBatchMeshesDirty){this._opaqueSolidBatchMeshes.length=0;for(const e of this._opaqueBatches.values())this._opaqueSolidBatchMeshes.push(e.mesh);this._opaqueSolidBatchMeshesDirty=!1}return this._opaqueSolidBatchMeshes.values()}get transparentSolidMeshes(){if(this._transparentSolidBatchMeshesDirty){this._transparentSolidBatchMeshes.length=0;for(const e of this._transparentBatches.values())this._transparentSolidBatchMeshes.push(e.mesh);this._transparentSolidBatchMeshesDirty=!1}return this._transparentSolidBatchMeshes.values()}_collectCollisionMeshes(e,t){for(const n of e.values())if(n.visible)for(let i=0;i<n.chunkIds.length;i++){if(!this._isChunkVisible(n.chunkVisibilityBits,n.chunkVisibilityMode,i))continue;const r=n.chunkIds[i],o=t.get(r);o&&this._solidMeshesInScene.push(o)}}_updateChunkGeometryForKind(e,t,n,i){var _;const r=this._getChunkGeometryMap(e),o=this._getChunkBoundsMap(e),a=this._getBatchMap(e),l=this._getCollisionMeshMap(e),c=this._getBatchKeyForChunk(t,this._getBatchDimensions(e)),h=this._getParentBatchKeyForBatchKey(c);if(!n){r.delete(t),o.delete(t),(_=l==null?void 0:l.get(t))==null||_.geometry.dispose(),l==null||l.delete(t),this._markParentBatchChunkIdsDirty(h);const p=a.get(c);p&&this._removeChunkFromBatch(a,p,t),this._solidMeshesInSceneDirty=!0;return}r.set(t,n),i&&o.set(t,i),l&&e!=="liquid"&&this._updateCollisionMesh(l,t,n);let u=a.get(c);u||(u=this._createBatch(e,c),a.set(c,u),this._registerNormalBatch(c,e));const d=u.allocations.get(t);if(!d){this._markParentBatchChunkIdsDirty(h),this._appendChunkToBatch(a,u,t,n);return}const f=n.positions.length/en,m=n.indices.length;if(f<=d.vertexCapacity&&m<=d.indexCapacity){this._uploadChunkIntoAllocation(u,t,d,n),this._updateBatchBounds(u);return}this._rebuildBatch(a,u,t)}_updateChunkLodGeometry(e,t,n){const i=this._getParentBatchKeyForChunk(e);if(!t||!n){this._chunkLodGeometry.delete(e),this._chunkLodBounds.delete(e),this._unregisterLodChunk(i,e),this._rebuildLodBatch(i);return}this._chunkLodGeometry.set(e,t),this._chunkLodBounds.set(e,n),this._registerLodChunk(i,e),this._rebuildLodBatch(i)}_appendChunkToBatch(e,t,n,i){const r=i.positions.length/en,o=i.indices.length,a=this._roundCapacity(r),l=this._roundIndexCapacity(o);if(t.totalVertexCount+a>t.vertexCapacity||t.totalIndexCount+l>t.indexCapacity){this._rebuildBatch(e,t,n);return}const c={vertexOffset:t.totalVertexCount,vertexCapacity:a,vertexCount:r,indexOffset:t.totalIndexCount,indexCapacity:l,indexCount:o};t.allocations.set(n,c),t.chunkIds.push(n),t.totalVertexCount+=a,t.totalIndexCount+=l,this._uploadChunkIntoAllocation(t,n,c,i),this._updateBatchBounds(t)}_removeChunkFromBatch(e,t,n){const i=t.allocations.get(n);if(!i)return;const r=t.chunkIds[t.chunkIds.length-1];if(r&&r!==n){const o=t.allocations.get(r),a=this._getChunkGeometryMap(t.kind).get(r);if(o.vertexCapacity>i.vertexCapacity||o.indexCapacity>i.indexCapacity){t.allocations.delete(n);const c=t.chunkIds.indexOf(n);c>=0&&t.chunkIds.splice(c,1),this._rebuildBatch(e,t);return}const l={vertexOffset:i.vertexOffset,vertexCapacity:i.vertexCapacity,vertexCount:o.vertexCount,indexOffset:i.indexOffset,indexCapacity:i.indexCapacity,indexCount:o.indexCount};t.allocations.set(r,l),this._uploadChunkIntoAllocation(t,r,l,a)}if(t.allocations.delete(n),t.chunkIds.pop(),r&&r!==n){const o=t.chunkIds.indexOf(n);o>=0&&(t.chunkIds[o]=r)}else{const o=t.chunkIds.indexOf(n);o>=0&&t.chunkIds.splice(o,1)}t.totalVertexCount=0,t.totalIndexCount=0;for(const o of t.chunkIds){const a=t.allocations.get(o);t.totalVertexCount=Math.max(t.totalVertexCount,a.vertexOffset+a.vertexCapacity),t.totalIndexCount=Math.max(t.totalIndexCount,a.indexOffset+a.indexCapacity)}this._updateBatchDrawRange(t),t.chunkIds.length===0?this._disposeBatch(e,t):this._updateBatchBounds(t)}_rebuildBatch(e,t,n){const i=this._getChunkGeometryMap(t.kind),r=n&&!t.allocations.has(n)?[...t.chunkIds,n]:[...t.chunkIds];let o=0,a=0;for(const h of r){const u=i.get(h);u&&(o+=this._roundCapacity(u.positions.length/en),a+=this._roundIndexCapacity(u.indices.length))}const l=Math.max(this._roundCapacity(o),1),c=Math.max(this._roundCapacity(a),1);this._resizeBatchBuffers(t,l,c),t.allocations.clear(),t.chunkIds=[],t.totalVertexCount=0,t.totalIndexCount=0;for(const h of r){const u=i.get(h);u&&this._appendChunkToBatch(e,t,h,u)}this._updateBatchBounds(t)}_uploadChunkIntoAllocation(e,t,n,i){const r=i.positions.length/en,o=i.indices.length,a=e.chunkIds.indexOf(t);n.vertexCount=r,n.indexCount=o,this._queueUpload(e,e.positionBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*en*4,i.positions),this._queueUpload(e,e.normalBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Di*4,i.normals),this._queueUpload(e,e.uvBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Ka*4,i.uvs),this._queueUpload(e,e.colorBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*ps*4,i.colors),this._queueUpload(e,e.chunkIndexBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*fo,new Uint16Array(n.vertexCapacity).fill(a));const l=i.lightLevels??new Float32Array(r*uo);if(this._queueUpload(e,e.lightLevelBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*uo*4,l),e.kind==="liquid"&&e.foamBuffer&&e.foamDiagBuffer){const u=i.foamLevels??new Float32Array(r*pi),d=i.foamLevelsDiag??new Float32Array(r*pi);this._queueUpload(e,e.foamBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*pi*4,u),this._queueUpload(e,e.foamDiagBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*pi*4,d)}const c=new e.indexArrayCtor(n.indexCapacity);for(let u=0;u<o;u++)c[u]=i.indices[u]+n.vertexOffset;const h=n.vertexOffset;for(let u=o;u<n.indexCapacity;u++)c[u]=h;this._queueUpload(e,e.indexBuffer,this._gl.ELEMENT_ARRAY_BUFFER,n.indexOffset*e.indexBytesPerElement,c),this._updateBatchDrawRange(e)}_queueUpload(e,t,n,i,r){e.pendingUploads.push({buffer:t,target:n,offset:i,data:r,arrayCtor:r.constructor,bytesPerElement:r.BYTES_PER_ELEMENT})}_uploadArray(e,t,n,i){const r=this._gl instanceof WebGL2RenderingContext?this._gl:null;t===this._gl.ELEMENT_ARRAY_BUFFER&&r&&r.bindVertexArray(null),this._gl.bindBuffer(t,e),this._gl.bufferSubData(t,n,i)}_flushPendingUploads(){for(const e of this._opaqueBatches.values())this._flushBatchPendingUploads(e);for(const e of this._transparentBatches.values())this._flushBatchPendingUploads(e);for(const e of this._liquidBatches.values())this._flushBatchPendingUploads(e)}_flushBatchPendingUploads(e){if(e.pendingUploads.length===0)return;const t=new Map;for(const n of e.pendingUploads){const i=t.get(n.buffer);i?i.push(n):t.set(n.buffer,[n])}for(const n of t.values())this._flushMergedUploads(n);e.pendingUploads.length=0}_flushMergedUploads(e){e.sort((i,r)=>i.offset-r.offset);let t=0,n=e[0].offset+e[0].data.byteLength;for(let i=1;i<=e.length;i++){const r=e[i];if(r&&r.offset<=n+r.bytesPerElement&&r.arrayCtor===e[t].arrayCtor&&r.bytesPerElement===e[t].bytesPerElement){n=Math.max(n,r.offset+r.data.byteLength);continue}this._flushUploadCluster(e,t,i),t=i,r&&(n=r.offset+r.data.byteLength)}}_flushUploadCluster(e,t,n){if(n<=t)return;const i=e[t];if(n===t+1){this._uploadArray(i.buffer,i.target,i.offset,i.data);return}let r=i.offset+i.data.byteLength;for(let l=t+1;l<n;l++)r=Math.max(r,e[l].offset+e[l].data.byteLength);const o=(r-i.offset)/i.bytesPerElement,a=new i.arrayCtor(o);for(let l=t;l<n;l++){const c=e[l],h=(c.offset-i.offset)/c.bytesPerElement;a.set(c.data,h)}this._uploadArray(i.buffer,i.target,i.offset,a)}_createBatch(e,t){const n=this._getBatchDimensions(e),i=this._getBatchOriginFromKey(t),r={x:n.x*Re,y:n.y*Re,z:n.z*Re},o=new Bt;o.boundingBox=new Ht(mi.set(0,0,0).clone(),mi.set(r.x,r.y,r.z).clone()),o.boundingSphere=new Ft(mi.set(r.x*.5,r.y*.5,r.z*.5).clone(),Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z)*.5);const a=this._getRenderMaterial(e),l=new _t(o,a);l.name=`${e}_batch_${t}`,l.matrixAutoUpdate=!1,l.matrixWorldAutoUpdate=!1,l.frustumCulled=!1,tn(l);const c={allocations:new Map,bounds:o.boundingBox.clone(),chunkIndexBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,fo),chunkIds:[],chunkVisibilityBits:new Uint32Array(_n(n.x*n.y*n.z)*4),chunkVisibilityScratchBits:new Uint32Array(_n(n.x*n.y*n.z)*4),chunkVisibilityMode:gn,chunkVisibilityRevision:0,geometry:o,indexBuffer:this._createGLBuffer(this._gl.ELEMENT_ARRAY_BUFFER,2),indexType:this._gl.UNSIGNED_SHORT,indexArrayCtor:Uint16Array,indexBytesPerElement:2,indexCapacity:1,key:t,kind:e,lightLevelBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),lightLevelCapacity:1,material:a,mesh:l,normalBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),origin:i,pendingUploads:[],positionBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),uvBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),colorBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),totalIndexCount:0,totalVertexCount:0,vertexCapacity:1,visible:!1,worldSize:r};return l.onBeforeRender=(h,u,d,f,m)=>{(m instanceof hr||m instanceof np)&&m.bindChunkVisibility(t,c.chunkVisibilityBits,c.chunkVisibilityMode,c.chunkVisibilityRevision)&&(m.uniformsNeedUpdate=!0)},e==="liquid"&&(c.foamBuffer=this._createGLBuffer(this._gl.ARRAY_BUFFER,4),c.foamDiagBuffer=this._createGLBuffer(this._gl.ARRAY_BUFFER,4)),this._attachGLAttributes(c),this._updateBatchBounds(c),e==="opaque"?this._opaqueSolidBatchMeshesDirty=!0:e==="transparent"&&(this._transparentSolidBatchMeshesDirty=!0),c}_attachGLAttributes(e){const t=new Yn(e.indexBuffer,e.indexType,1,e.indexBytesPerElement,e.indexCapacity),n=new Yn(e.positionBuffer,this._gl.FLOAT,en,4,e.vertexCapacity),i=new Yn(e.normalBuffer,this._gl.FLOAT,Di,4,e.vertexCapacity),r=new Yn(e.uvBuffer,this._gl.FLOAT,Ka,4,e.vertexCapacity),o=new Yn(e.colorBuffer,this._gl.FLOAT,ps,4,e.vertexCapacity),a=new Yn(e.chunkIndexBuffer,this._gl.UNSIGNED_SHORT,1,fo,e.vertexCapacity),l=new Yn(e.lightLevelBuffer,this._gl.FLOAT,uo,4,e.vertexCapacity);if(e.geometry.setIndex(t),e.geometry.setAttribute("position",n),e.geometry.setAttribute("normal",i),e.geometry.setAttribute("uv",r),e.geometry.setAttribute("color",o),e.geometry.setAttribute(ii,a),e.geometry.setAttribute("lightLevel",l),e.kind==="liquid"&&e.foamBuffer&&e.foamDiagBuffer){const c=new Yn(e.foamBuffer,this._gl.FLOAT,pi,4,e.vertexCapacity),h=new Yn(e.foamDiagBuffer,this._gl.FLOAT,pi,4,e.vertexCapacity);e.geometry.setAttribute("foamLevel",c),e.geometry.setAttribute("foamLevelDiag",h)}e.geometry.setDrawRange(0,0)}_resizeBatchBuffers(e,t,n){e.pendingUploads.length=0;const i=t>65535?this._gl.UNSIGNED_INT:this._gl.UNSIGNED_SHORT,r=i===this._gl.UNSIGNED_INT?Uint32Array:Uint16Array,o=i===this._gl.UNSIGNED_INT?4:2;e.vertexCapacity=t,e.indexCapacity=n,e.indexType=i,e.indexArrayCtor=r,e.indexBytesPerElement=o,this._allocateBuffer(e.positionBuffer,this._gl.ARRAY_BUFFER,t*en*4),this._allocateBuffer(e.normalBuffer,this._gl.ARRAY_BUFFER,t*Di*4),this._allocateBuffer(e.uvBuffer,this._gl.ARRAY_BUFFER,t*Ka*4),this._allocateBuffer(e.colorBuffer,this._gl.ARRAY_BUFFER,t*ps*4),this._allocateBuffer(e.chunkIndexBuffer,this._gl.ARRAY_BUFFER,t*fo),this._allocateBuffer(e.lightLevelBuffer,this._gl.ARRAY_BUFFER,t*uo*4),e.foamBuffer&&e.foamDiagBuffer&&(this._allocateBuffer(e.foamBuffer,this._gl.ARRAY_BUFFER,t*pi*4),this._allocateBuffer(e.foamDiagBuffer,this._gl.ARRAY_BUFFER,t*pi*4)),this._allocateBuffer(e.indexBuffer,this._gl.ELEMENT_ARRAY_BUFFER,n*o),this._attachGLAttributes(e)}_allocateBuffer(e,t,n){const i=this._gl instanceof WebGL2RenderingContext?this._gl:null;t===this._gl.ELEMENT_ARRAY_BUFFER&&i&&i.bindVertexArray(null),this._gl.bindBuffer(t,e),this._gl.bufferData(t,n,this._gl.DYNAMIC_DRAW)}_updateBatchDrawRange(e){let t=0;for(const n of e.allocations.values())t=Math.max(t,n.indexOffset+n.indexCount);e.geometry.setDrawRange(0,t)}_updateBatchBounds(e){const t=this._getChunkBoundsMap(e.kind);if(e.chunkIds.length===0){e.bounds.makeEmpty(),e.geometry.boundingBox=e.bounds.clone(),e.geometry.boundingSphere=new Ft(mi.set(0,0,0).clone(),0),tn(e.mesh);return}let n=!1;for(const r of e.chunkIds){const o=t.get(r);if(o){if(!n){e.bounds.min.set(o.min[0],o.min[1],o.min[2]),e.bounds.max.set(o.max[0],o.max[1],o.max[2]),n=!0;continue}e.bounds.min.x=Math.min(e.bounds.min.x,o.min[0]),e.bounds.min.y=Math.min(e.bounds.min.y,o.min[1]),e.bounds.min.z=Math.min(e.bounds.min.z,o.min[2]),e.bounds.max.x=Math.max(e.bounds.max.x,o.max[0]),e.bounds.max.y=Math.max(e.bounds.max.y,o.max[1]),e.bounds.max.z=Math.max(e.bounds.max.z,o.max[2])}}e.geometry.boundingBox=e.bounds.clone();const i=e.geometry.boundingSphere??new Ft;e.bounds.getCenter(Qs),i.center.copy(Qs),i.radius=Qs.distanceTo(e.bounds.max),e.geometry.boundingSphere=i,tn(e.mesh)}_createGLBuffer(e,t){const n=this._gl.createBuffer();if(!n)throw new Error("ChunkMeshManager: Failed to create WebGLBuffer.");return this._allocateBuffer(n,e,t),n}_disposeBatch(e,t){t.pendingUploads.length=0,this._gl.deleteBuffer(t.positionBuffer),this._gl.deleteBuffer(t.normalBuffer),this._gl.deleteBuffer(t.uvBuffer),this._gl.deleteBuffer(t.colorBuffer),this._gl.deleteBuffer(t.chunkIndexBuffer),this._gl.deleteBuffer(t.lightLevelBuffer),t.foamBuffer&&this._gl.deleteBuffer(t.foamBuffer),t.foamDiagBuffer&&this._gl.deleteBuffer(t.foamDiagBuffer),this._gl.deleteBuffer(t.indexBuffer),this._game.renderer.removeFromScene(t.mesh),e.delete(t.key),this._unregisterNormalBatch(t.key,t.kind),t.kind==="opaque"?this._opaqueSolidBatchMeshesDirty=!0:t.kind==="transparent"&&(this._transparentSolidBatchMeshesDirty=!0),this._solidMeshesInSceneDirty=!0}_applyParentBatchVisibility(e,t,n,i,r,o,a){const l=this._classifyViewDistance(e.bounds,t,i),c=ld(e.bounds)?this._classifyFrustum(e.bounds,r):-1;if(l===-1||c===-1){this._syncParentBatchVisibility(e,"hidden");return}const h=this._classifyParentChunkVisibility(e,t,n,i,r,o,a);let u=!1;for(const m of e.opaqueBatchKeys){const _=this._opaqueBatches.get(m),p=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,p),u||(u=p)}for(const m of e.transparentBatchKeys){const _=this._transparentBatches.get(m),p=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,p),u||(u=p)}for(const m of e.liquidBatchKeys){const _=this._liquidBatches.get(m),p=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,p),u||(u=p)}const d=this._applyLodBatchChunkVisibility(e,h,a);this._setLodBatchScenePresence(e.lodBatch,d);let f="hidden";u&&d?f="mixed":u?f="normal":d&&(f="lod"),this._syncParentBatchVisibility(e,f)}_classifyParentChunkVisibility(e,t,n,i,r,o,a){const l=e.chunkModes;l.clear();const c=this._getParentBatchChunkIds(e);for(const h of c){const u=o==null?void 0:o.get(h);if(u){if(a&&!a.has(h)){l.set(h,"hidden");continue}l.set(h,u);continue}const d=this._getChunkVisibilityBounds(h);if(!d){l.set(h,"hidden");continue}if(this._classifyChunkBoundsViewDistance(d,t,i)===-1){l.set(h,"hidden");continue}if(this._classifyChunkBoundsFrustum(d,r)===-1){l.set(h,"hidden");continue}this._distanceToChunkBoundsXZSquared(d,t)>n&&e.lodChunkIds.has(h)?l.set(h,"lod"):l.set(h,"normal")}return l}_getParentBatchChunkIds(e){if(!e.allChunkIdsDirty)return e.allChunkIds;const t=new Set(e.lodChunkIds);this._collectParentBatchChunkIds(this._opaqueBatches,e.opaqueBatchKeys,t),this._collectParentBatchChunkIds(this._transparentBatches,e.transparentBatchKeys,t),this._collectParentBatchChunkIds(this._liquidBatches,e.liquidBatchKeys,t),e.allChunkIds.length=0;for(const n of t)e.allChunkIds.push(n);return e.allChunkIdsDirty=!1,e.allChunkIds}_collectParentBatchChunkIds(e,t,n){for(const i of t){const r=e.get(i);if(r)for(const o of r.chunkIds)n.add(o)}}_markParentBatchChunkIdsDirty(e){const t=this._parentBatches.get(e);t&&(t.allChunkIdsDirty=!0)}_getChunkVisibilityBounds(e){return this._chunkOpaqueBounds.get(e)??this._chunkTransparentBounds.get(e)??this._chunkLiquidBounds.get(e)??this._chunkLodBounds.get(e)}_applyLodBatchChunkVisibility(e,t,n){const i=e.lodBatch;if(!i)return!1;const r=i.chunkVisibilityScratchBits;r.fill(0);let o=0;for(let c=0;c<i.chunkIds.length;c++){if(t.get(i.chunkIds[c])!=="lod"||n&&!n.has(i.chunkIds[c]))continue;const h=c>>5;r[h]|=1<<(c&31),o++}const a=!this._areChunkVisibilityBitsEqual(i.chunkVisibilityBits,r);if(a&&i.chunkVisibilityBits.set(r),o===0){const c=i.chunkVisibilityMode!==fi;return this._setLodBatchChunkVisibilityMode(i,fi),(c||a)&&i.chunkVisibilityRevision++,!1}if(o===i.chunkIds.length)return i.chunkVisibilityMode!==gn&&i.chunkVisibilityRevision++,this._setLodBatchChunkVisibilityMode(i,gn),!0;const l=i.chunkVisibilityMode!==fi;return this._setLodBatchChunkVisibilityMode(i,fi),(l||a)&&i.chunkVisibilityRevision++,!0}_applyNormalBatchChunkVisibility(e,t,n){const i=e.chunkVisibilityScratchBits;i.fill(0);let r=0;for(let l=0;l<e.chunkIds.length;l++){if(t.get(e.chunkIds[l])!=="normal"||n&&!n.has(e.chunkIds[l]))continue;const c=l>>5;i[c]|=1<<(l&31),r++}const o=!this._areChunkVisibilityBitsEqual(e.chunkVisibilityBits,i);if(o&&e.chunkVisibilityBits.set(i),r===0){const l=e.chunkVisibilityMode!==fi;return this._setBatchChunkVisibilityMode(e,fi),(l||o)&&e.chunkVisibilityRevision++,!1}if(r===e.chunkIds.length)return this._setBatchChunkVisibilityMode(e,gn),!0;const a=e.chunkVisibilityMode!==fi;return this._setBatchChunkVisibilityMode(e,fi),(a||o)&&e.chunkVisibilityRevision++,this._solidMeshesInSceneDirty=!0,!0}_syncParentBatchVisibility(e,t){if(t==="hidden"){for(const n of e.opaqueBatchKeys)this._setNormalBatchScenePresence(this._opaqueBatches.get(n),!1);for(const n of e.transparentBatchKeys)this._setNormalBatchScenePresence(this._transparentBatches.get(n),!1);for(const n of e.liquidBatchKeys)this._setNormalBatchScenePresence(this._liquidBatches.get(n),!1);this._setLodBatchScenePresence(e.lodBatch,!1)}e.visibilityState=t}_setNormalBatchScenePresence(e,t){if(!e)return;const n=e.mesh.parent!==null;t&&!n?(this._game.renderer.addToScene(e.mesh),this._solidMeshesInSceneDirty=!0):!t&&n&&(this._game.renderer.removeFromScene(e.mesh),this._solidMeshesInSceneDirty=!0),e.visible=t}_setLodBatchScenePresence(e,t){if(!e)return;const n=e.mesh.parent!==null;t&&!n?this._game.renderer.addToScene(e.mesh):!t&&n&&this._game.renderer.removeFromScene(e.mesh),e.visible=t}_classifyViewDistance(e,t,n){if(this._distanceToBoundsXZSquared(e,t)>n)return-1;const i=Math.abs(t.x-e.min.x)>Math.abs(t.x-e.max.x)?e.min.x:e.max.x,r=Math.abs(t.y-e.min.z)>Math.abs(t.y-e.max.z)?e.min.z:e.max.z;return t.distanceToSquared(po.set(i,r))<=n?1:0}_distanceToBoundsXZSquared(e,t){const n=Math.max(e.min.x,Math.min(t.x,e.max.x)),i=Math.max(e.min.z,Math.min(t.y,e.max.z));return t.distanceToSquared(po.set(n,i))}_classifyChunkBoundsViewDistance(e,t,n){if(this._distanceToChunkBoundsXZSquared(e,t)>n)return-1;const i=Math.abs(t.x-e.min[0])>Math.abs(t.x-e.max[0])?e.min[0]:e.max[0],r=Math.abs(t.y-e.min[2])>Math.abs(t.y-e.max[2])?e.min[2]:e.max[2];return t.distanceToSquared(po.set(i,r))<=n?1:0}_distanceToChunkBoundsXZSquared(e,t){const n=Math.max(e.min[0],Math.min(t.x,e.max[0])),i=Math.max(e.min[2],Math.min(t.y,e.max[2]));return t.distanceToSquared(po.set(n,i))}_classifyFrustum(e,t){let n=!0;for(const i of t.planes){const r=mi.set(i.normal.x>=0?e.max.x:e.min.x,i.normal.y>=0?e.max.y:e.min.y,i.normal.z>=0?e.max.z:e.min.z);if(i.distanceToPoint(r)<0)return-1;const o=Qs.set(i.normal.x>=0?e.min.x:e.max.x,i.normal.y>=0?e.min.y:e.max.y,i.normal.z>=0?e.min.z:e.max.z);i.distanceToPoint(o)<0&&(n=!1)}return n?1:0}_classifyChunkBoundsFrustum(e,t){let n=!0;for(const i of t.planes){const r=mi.set(i.normal.x>=0?e.max[0]:e.min[0],i.normal.y>=0?e.max[1]:e.min[1],i.normal.z>=0?e.max[2]:e.min[2]);if(i.distanceToPoint(r)<0)return-1;const o=Qs.set(i.normal.x>=0?e.min[0]:e.max[0],i.normal.y>=0?e.min[1]:e.max[1],i.normal.z>=0?e.min[2]:e.max[2]);i.distanceToPoint(o)<0&&(n=!1)}return n?1:0}_areChunkVisibilityBitsEqual(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}_isChunkVisible(e,t,n){if(t===gn)return!0;const i=n>>5;return(e[i]>>>(n&31)&1)!==0}_setBatchChunkVisibilityMode(e,t){e.chunkVisibilityMode!==t&&(e.chunkVisibilityMode=t,e.chunkVisibilityRevision++,this._solidMeshesInSceneDirty=!0)}_setLodBatchChunkVisibilityMode(e,t){e.chunkVisibilityMode!==t&&(e.chunkVisibilityMode=t)}_updateCollisionMesh(e,t,n){const i=new Bt;i.setAttribute("position",new Ze(n.positions,en)),i.setAttribute("normal",new Ze(n.normals,Di)),i.setIndex(new Ze(n.indices,1)),i.computeBoundingBox(),i.computeBoundingSphere();const r=e.get(t),o=this._collisionMaterial;if(r){r.geometry.dispose(),r.geometry=i,tn(r);return}const a=new _t(i,o);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,tn(a),e.set(t,a)}_getChunkGeometryMap(e){switch(e){case"liquid":return this._chunkLiquidGeometry;case"opaque":return this._chunkOpaqueGeometry;case"transparent":return this._chunkTransparentGeometry}}_getChunkBoundsMap(e){switch(e){case"liquid":return this._chunkLiquidBounds;case"opaque":return this._chunkOpaqueBounds;case"transparent":return this._chunkTransparentBounds}}_getBatchMap(e){switch(e){case"liquid":return this._liquidBatches;case"opaque":return this._opaqueBatches;case"transparent":return this._transparentBatches}}_getCollisionMeshMap(e){switch(e){case"opaque":return this._opaqueCollisionMeshes;case"transparent":return this._transparentCollisionMeshes;default:return}}_getBatchDimensions(e){switch(e){case"liquid":return TM;case"opaque":return Kt;case"transparent":return CM}}_getRenderMaterial(e){switch(e){case"liquid":return this._game.blockMaterialManager.liquidMaterial;case"opaque":return this._game.blockMaterialManager.opaqueMaterial;case"transparent":return this._game.blockMaterialManager.transparentMaterial}}_registerNormalBatch(e,t){const n=this._ensureParentBatch(this._getParentBatchKeyForBatchKey(e));switch(n.allChunkIdsDirty=!0,t){case"opaque":n.opaqueBatchKeys.add(e);break;case"transparent":n.transparentBatchKeys.add(e);break;case"liquid":n.liquidBatchKeys.add(e);break}}_unregisterNormalBatch(e,t){const n=this._getParentBatchKeyForBatchKey(e),i=this._parentBatches.get(n);if(i){switch(i.allChunkIdsDirty=!0,t){case"opaque":i.opaqueBatchKeys.delete(e);break;case"transparent":i.transparentBatchKeys.delete(e);break;case"liquid":i.liquidBatchKeys.delete(e);break}this._cleanupParentBatch(n,i)}}_registerLodChunk(e,t){const n=this._ensureParentBatch(e);n.lodChunkIds.add(t),n.allChunkIdsDirty=!0}_unregisterLodChunk(e,t){const n=this._parentBatches.get(e);n&&(n.lodChunkIds.delete(t),n.allChunkIdsDirty=!0)}_ensureParentBatch(e){let t=this._parentBatches.get(e);if(t)return t;const n=this._getBatchOriginFromKey(e),i={x:Kt.x*Re,y:Kt.y*Re,z:Kt.z*Re};return t={allChunkIds:[],allChunkIdsDirty:!0,bounds:new Ht(mi.set(n.x,n.y,n.z).clone(),mi.set(n.x+i.x,n.y+i.y,n.z+i.z).clone()),chunkModes:new Map,key:e,liquidBatchKeys:new Set,lodBuildChunkIds:[],lodChunkIds:new Set,opaqueBatchKeys:new Set,transparentBatchKeys:new Set,visibilityState:"hidden"},this._parentBatches.set(e,t),t}_cleanupParentBatch(e,t){const n=t.opaqueBatchKeys.size>0||t.transparentBatchKeys.size>0||t.liquidBatchKeys.size>0,i=t.lodChunkIds.size>0,r=t.lodBatch!==void 0;n||i||r||this._parentBatches.delete(e)}_rebuildLodBatch(e){const t=this._parentBatches.get(e);if(!t)return;const n=t.lodBuildChunkIds;n.length=0;for(const _ of t.lodChunkIds)this._chunkLodGeometry.has(_)&&this._chunkLodBounds.has(_)&&n.push(_);if(n.sort(),n.length===0){this._disposeLodBatch(t),this._cleanupParentBatch(e,t);return}let i=0,r=0;for(const _ of n){const p=this._chunkLodGeometry.get(_);i+=p.positions.length/en,r+=p.indices.length}const o=new Float32Array(i*en),a=new Float32Array(i*Di),l=new Float32Array(i*ps),c=new Float32Array(i),h=i>65535?new Uint32Array(r):new Uint16Array(r);let u=0,d=0;for(let _=0;_<n.length;_++){const p=n[_],g=this._chunkLodGeometry.get(p),v=g.positions.length/en;o.set(g.positions,u*en),a.set(g.normals,u*Di),l.set(g.colors,u*ps),c.fill(_,u,u+v);for(let b=0;b<g.indices.length;b++)h[d+b]=g.indices[b]+u;u+=v,d+=g.indices.length}const f=new Bt;if(f.setAttribute("position",new Ze(o,en)),f.setAttribute("normal",new Ze(a,Di)),f.setAttribute("color",new Ze(l,ps)),f.setAttribute(ii,new Ze(c,1)),f.setIndex(new Ze(h,1)),f.computeBoundingBox(),f.computeBoundingSphere(),t.lodBatch){t.lodBatch.geometry.dispose(),t.lodBatch.geometry=f,t.lodBatch.mesh.geometry=f,t.lodBatch.chunkIds=n,t.lodBatch.chunkVisibilityBits=new Uint32Array(_n(n.length)*4),t.lodBatch.chunkVisibilityScratchBits=new Uint32Array(_n(n.length)*4),t.lodBatch.chunkVisibilityMode=gn,t.lodBatch.chunkVisibilityRevision++,tn(t.lodBatch.mesh);return}const m=new _t(f,this._lodMaterial);m.name=`lod_batch_${e}`,m.matrixAutoUpdate=!1,m.matrixWorldAutoUpdate=!1,m.frustumCulled=!1,m.onBeforeRender=(_,p,g,v,b)=>{if(b instanceof cd){const M=t.lodBatch;if(!M)return;b.bindChunkVisibility(M.key,M.chunkVisibilityBits,M.chunkVisibilityMode,M.chunkVisibilityRevision)&&(b.uniformsNeedUpdate=!0)}},tn(m),t.lodBatch={chunkIds:n,chunkVisibilityBits:new Uint32Array(_n(n.length)*4),chunkVisibilityScratchBits:new Uint32Array(_n(n.length)*4),chunkVisibilityMode:gn,chunkVisibilityRevision:0,geometry:f,key:e,mesh:m,visible:!1}}_disposeLodBatch(e){const t=e.lodBatch;t&&(t.mesh.parent&&this._game.renderer.removeFromScene(t.mesh),t.geometry.dispose(),e.lodBatch=void 0)}_getBatchKeyForChunk(e,t){const n=ip.chunkIdToOriginCoordinate(e);return this._getCachedBatchKey(Math.floor(n.x/(t.x*Re))*t.x*Re,Math.floor(n.y/(t.y*Re))*t.y*Re,Math.floor(n.z/(t.z*Re))*t.z*Re)}_getParentBatchKeyForChunk(e){return this._getBatchKeyForChunk(e,Kt)}_getParentBatchKeyForBatchKey(e){const t=this._getBatchOriginFromKey(e);return this._getCachedBatchKey(Math.floor(t.x/(Kt.x*Re))*Kt.x*Re,Math.floor(t.y/(Kt.y*Re))*Kt.y*Re,Math.floor(t.z/(Kt.z*Re))*Kt.z*Re)}_getCachedBatchKey(e,t,n){let i=this._batchKeyCache.get(e);i||(i=new Map,this._batchKeyCache.set(e,i));let r=i.get(t);r||(r=new Map,i.set(t,r));let o=r.get(n);return o||(o=`${e},${t},${n}`,r.set(n,o)),o}_getBatchOriginFromKey(e){const t=e.indexOf(","),n=e.indexOf(",",t+1);return{x:Number(e.slice(0,t)),y:Number(e.slice(t+1,n)),z:Number(e.slice(n+1))}}_roundCapacity(e){let t=1;for(;t<e;)t*=AM;return t}_roundIndexCapacity(e){const t=this._roundCapacity(e),n=t%3;return n===0?t:t+(3-n)}}function mo(s){return s||null}function PM(s,e){return{chunkId:s,liquidBounds:e==null?void 0:e.liquidBounds,liquidGeometry:mo((e==null?void 0:e.liquidGeometry)??null),lodBounds:e==null?void 0:e.lodBounds,lodGeometry:mo((e==null?void 0:e.lodGeometry)??null),opaqueBounds:e==null?void 0:e.opaqueBounds,opaqueGeometry:mo((e==null?void 0:e.opaqueGeometry)??null),transparentBounds:e==null?void 0:e.transparentBounds,transparentGeometry:mo((e==null?void 0:e.transparentGeometry)??null)}}class DM{constructor(e){R(this,"host");R(this,"manager");this.host=e,this.manager=new LM(e)}get rendererHost(){return this.host.renderer}get batchMeshCount(){return this.manager.batchMeshCount}setChunkGeometry(e,t){const n=PM(e,t);if(!t){this.manager.removeChunkGeometry(e);return}this.manager.updateChunkGeometry(n.chunkId,n.liquidGeometry??void 0,n.liquidBounds,n.lodGeometry??void 0,n.lodBounds,n.opaqueGeometry??void 0,n.opaqueBounds,n.transparentGeometry??void 0,n.transparentBounds)}clear(){this.manager.clear()}flush(){}collectPreOcclusionChunkModes(e,t,n,i,r){return this.manager.collectPreOcclusionChunkModes(e,t,n,i,r)}applyBatchVisibility(e,t,n,i,r){this.manager.applyBatchVisibility(e,t,n,i,r)}}const BM=16,UM=2,Oi="worldEditorInstanceLightLevel",zi="worldEditorInstanceSkyLight",sp=new me(1,1,1),er=new Fe,Ja=new Ht,hd=new Ve,Qa=new Ft,tr=new WeakMap;class NM extends Pf{constructor(e,t,n){super(e,t,n),this._setup()}_setup(){this.matrixAutoUpdate=!1,this.matrixWorldAutoUpdate=!1,this.frustumCulled=!0,tn(this),this.instanceMatrix.setUsage(Pr);const e=new Tr(new Float32Array(this.count),1);e.setUsage(Pr),this.geometry.setAttribute(Oi,e);const t=new Tr(new Float32Array(this.count),1);t.setUsage(Pr),this.geometry.setAttribute(zi,t),this.setColorAt(0,sp),this.instanceColor.setUsage(Pr)}dispose(){return this.geometry.dispose(),this}}class FM{constructor(e){R(this,"host");R(this,"keyToModelUri",new Map);R(this,"keyToTintColor",new Map);R(this,"uriToEntry",new Map);this.host=e}async replaceAll(e){this.clear();const t=new Set;for(const n of e)await this.upsertEntity(n)||t.add(n.key);return t}async upsertEntity(e){this.removeEntity(e.key);let t=this.uriToEntry.get(e.modelUri);if(t||(t=this.createEntry(e.modelUri),this.uriToEntry.set(e.modelUri,t)),t.gltfRoot===null&&(t.gltfRoot=await t.gltfRootPromise),!t.gltfRoot)return t.entities.size===0&&this.uriToEntry.delete(t.modelUri),!1;const n=t.entities.size;return t.entities.add(e.key),t.entityToInstanceIndex.set(e.key,n),t.instanceIndexToEntityKey.set(n,e.key),t.entityToChunkId.set(e.key,e.chunkId),t.entityToLightLevel.set(e.key,e.lightLevel),t.entityToSkyLight.set(e.key,e.skyLight),this.keyToModelUri.set(e.key,e.modelUri),this.keyToTintColor.set(e.key,e.tintColor?e.tintColor.clone():null),t.gltfRoot.traverse(i=>{if(!(i instanceof _t))return;let r=t.sourceToInstancedMesh.get(i);if(!r||n>=r.instanceMatrix.count){const h=r?r.instanceMatrix.count*UM:BM,u=r?r.material:this.host.createRenderMaterial(i.material),d=new NM(i.geometry.clone(),u,h);if(d.castShadow=i.castShadow,d.receiveShadow=i.receiveShadow,r){d.instanceMatrix.array.set(r.instanceMatrix.array);const f=r.geometry.getAttribute(Oi),m=d.geometry.getAttribute(Oi);for(let v=0;v<f.count;v++)m.setX(v,f.getX(v));const _=r.geometry.getAttribute(zi),p=d.geometry.getAttribute(zi);for(let v=0;v<_.count;v++)p.setX(v,_.getX(v));if(r.instanceColor&&d.instanceColor)for(let v=0;v<r.instanceColor.count;v++)d.instanceColor.setXYZ(v,r.instanceColor.getX(v),r.instanceColor.getY(v),r.instanceColor.getZ(v));r.boundingSphere&&(d.boundingSphere=r.boundingSphere.clone());const g=tr.get(r);g&&tr.set(d,g.clone()),this.host.removeFromScene(r),r.dispose(),t.sourceToInstancedMesh.delete(i)}this.host.addToScene(d),t.sourceToInstancedMesh.set(i,d),r=d}r.setMatrixAt(n,er.copy(e.worldMatrix).multiply(i.matrixWorld)),r.instanceMatrix.needsUpdate=!0;const o=e.tintColor??sp;r.setColorAt(n,o),r.instanceColor&&(r.instanceColor.needsUpdate=!0);const a=r.geometry.getAttribute(Oi);a.setX(n,e.lightLevel),a.needsUpdate=!0;const l=r.geometry.getAttribute(zi);l.setX(n,e.skyLight),l.needsUpdate=!0,r.count=n+1,r.geometry.boundingSphere===null&&r.geometry.computeBoundingSphere(),r.geometry.boundingBox===null&&r.geometry.computeBoundingBox(),Qa.copy(r.geometry.boundingSphere).applyMatrix4(er.copy(e.worldMatrix).multiply(i.matrixWorld)),Ja.copy(r.geometry.boundingBox).applyMatrix4(er.copy(e.worldMatrix).multiply(i.matrixWorld)),r.boundingSphere===null?r.boundingSphere=Qa.clone():r.boundingSphere.union(Qa);const c=tr.get(r);c?c.union(Ja):tr.set(r,Ja.clone())}),!0}removeEntity(e){const t=this.keyToModelUri.get(e);if(!t)return;const n=this.uriToEntry.get(t);if(!n||!n.entities.has(e)){this.keyToModelUri.delete(e),this.keyToTintColor.delete(e);return}const i=n.entityToInstanceIndex.get(e);if(i===void 0)return;const r=n.entities.size-1,o=n.instanceIndexToEntityKey.get(r);if(o&&o!==e){n.entityToInstanceIndex.set(o,i),n.instanceIndexToEntityKey.set(i,o),n.entityToChunkId.set(o,n.entityToChunkId.get(o)),n.entityToLightLevel.set(o,n.entityToLightLevel.get(o)),n.entityToSkyLight.set(o,n.entityToSkyLight.get(o));for(const l of n.sourceToInstancedMesh.values()){l.getMatrixAt(r,er),l.setMatrixAt(i,er);const c=l.geometry.getAttribute(Oi);c.setX(i,c.getX(r)),c.needsUpdate=!0;const h=l.geometry.getAttribute(zi);h.setX(i,h.getX(r)),h.needsUpdate=!0,l.instanceColor&&(l.instanceColor.setXYZ(i,l.instanceColor.getX(r),l.instanceColor.getY(r),l.instanceColor.getZ(r)),l.instanceColor.needsUpdate=!0),l.instanceMatrix.needsUpdate=!0}const a=this.keyToTintColor.get(o);this.keyToTintColor.set(o,a?a.clone():null)}for(const a of n.sourceToInstancedMesh.values())a.count=r;if(n.entities.delete(e),n.entityToInstanceIndex.delete(e),n.entityToChunkId.delete(e),n.entityToLightLevel.delete(e),n.entityToSkyLight.delete(e),n.instanceIndexToEntityKey.delete(r),this.keyToModelUri.delete(e),this.keyToTintColor.delete(e),n.entities.size===0){for(const a of n.sourceToInstancedMesh.values())this.host.removeFromScene(a),a.dispose();this.uriToEntry.delete(n.modelUri)}}updateLighting(e,t){for(const n of this.uriToEntry.values()){for(const i of n.entities){if(t){const a=n.entityToChunkId.get(i);if(a!==void 0&&!t.has(a))continue}const r=e(i);if(!r)continue;n.entityToChunkId.set(i,r.chunkId),n.entityToLightLevel.set(i,r.lightLevel),n.entityToSkyLight.set(i,r.skyLight);const o=n.entityToInstanceIndex.get(i);if(o!==void 0)for(const a of n.sourceToInstancedMesh.values())a.geometry.getAttribute(Oi).setX(o,r.lightLevel),a.geometry.getAttribute(zi).setX(o,r.skyLight)}for(const i of n.sourceToInstancedMesh.values())i.geometry.getAttribute(Oi).needsUpdate=!0,i.geometry.getAttribute(zi).needsUpdate=!0}}updateScenePresence(e,t,n){for(const i of this.uriToEntry.values())for(const r of i.sourceToInstancedMesh.values()){const o=tr.get(r),a=!o||this.distanceToBoundsXZSquared(o,e)<=t,l=!!r.boundingSphere&&n.intersectsSphere(r.boundingSphere),c=a&&l,h=r.parent!==null;c&&!h?this.host.addToScene(r):!c&&h&&this.host.removeFromScene(r)}}clear(){for(const e of this.uriToEntry.values())for(const t of e.sourceToInstancedMesh.values())this.host.removeFromScene(t),t.dispose();this.uriToEntry.clear(),this.keyToModelUri.clear(),this.keyToTintColor.clear()}createEntry(e){return{entities:new Set,instanceIndexToEntityKey:new Map,entityToChunkId:new Map,entityToInstanceIndex:new Map,entityToLightLevel:new Map,entityToSkyLight:new Map,gltfRoot:null,gltfRootPromise:this.host.loadEntityModelTemplate(e),modelUri:e,sourceToInstancedMesh:new Map}}distanceToBoundsXZSquared(e,t){return hd.set(Math.max(e.min.x,Math.min(t.x,e.max.x)),Math.max(e.min.z,Math.min(t.y,e.max.z))),t.distanceToSquared(hd)}}const pc=256,Gi=0,ud=1,mc=.05,kM=-.1,OM=1,Bi="worldEditorTime",go="worldEditorTextureAtlas",gc="worldEditorFogColor",_c="worldEditorFogEnabled",xc="worldEditorFogFar",vc="worldEditorFogNear",An="worldEditorAmbientLightColor",el="worldEditorAmbientLightIntensity",Xo="uChunkVisibleBits",qo="uChunkVisibilityMode",$i="chunkIndex",ah=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`,zM={color:()=>new me(16777215),enabled:()=>!1,far:()=>0,near:()=>0};function _i(s){return Math.max(Math.ceil(s/128),1)}function lh(s){return{[Xo]:{value:new Uint32Array(_i(s)*4)},[qo]:{value:Gi}}}function ch(s){const e=_i(s);return`
    uniform uint ${qo};
    uniform uvec4 ${Xo}[${e}];
    attribute float ${$i};

    bool isChunkVisible(uint chunkIndexValue) {
      if (${qo} == uint(${Gi})) {
        return true;
      }

      uint wordIndex = chunkIndexValue >> 5u;
      uvec4 packedWords = ${Xo}[int(wordIndex >> 2u)];
      uint packedWord = packedWords[int(wordIndex & 3u)];
      uint bitIndex = chunkIndexValue & 31u;
      return ((packedWord >> bitIndex) & 1u) != 0u;
    }
  `}function hh(s){return{[gc]:{get value(){return s.color()}},[_c]:{get value(){return s.enabled()}},[xc]:{get value(){return s.far()}},[vc]:{get value(){return s.near()}}}}function uh(){return`
    uniform vec3 ${gc};
    uniform bool ${_c};
    uniform float ${xc};
    uniform float ${vc};

    vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
      if (!${_c}) {
        return color;
      }

      float fogFactor = smoothstep(${vc}, ${xc}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${gc}, fogFactor);
    }
  `}class dh extends Gt{constructor(){super(...arguments);R(this,"boundChunkVisibilityBits",null);R(this,"boundChunkVisibilityMode",-1);R(this,"boundChunkVisibilityRevision",-1)}bindChunkVisibility(t,n,i,r){const o=typeof t=="string"?n:t,a=typeof t=="string"?i:n,l=typeof t=="string"?r:i;return this.boundChunkVisibilityBits===o&&this.boundChunkVisibilityMode===a&&this.boundChunkVisibilityRevision===l?!1:(this.uniforms[Xo].value=o,this.uniforms[qo].value=a,this.boundChunkVisibilityBits=o,this.boundChunkVisibilityMode=a,this.boundChunkVisibilityRevision=l,this.uniformsNeedUpdate=!0,!0)}}class dd extends dh{constructor(t,n,i){const r=Nn.clone(pt.basic.uniforms);Object.assign(r,hh(n),lh(i));const o=pt.basic.vertexShader.replace("void main() {",`
        ${ch(i)}
        attribute float lightLevel;
        varying float vLightLevel;
        varying vec3 vWorldPos;
        void main() {
          uint chunkIndexValue = uint(${$i} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          vLightLevel = lightLevel;
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),a=pt.basic.fragmentShader.replace("void main() {",`
          ${ah}
          uniform vec3 ${An};
          uniform float ${el};
          varying float vLightLevel;
          varying vec3 vWorldPos;
          ${uh()}
          void main() {
        `).replace("#include <opaque_fragment>",`
          vec3 ambientLight = ${An} * ${el};
          vec3 blockLight = ${An} * vLightLevel * float(${OM});
          outgoingLight *= max(ambientLight, blockLight);
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:r,vertexShader:o,fragmentShader:a,side:yn,transparent:t,alphaTest:t?mc:0,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0,glslVersion:yi});R(this,"colorValue",new me(16777215));R(this,"ambientColor",new me(16777215));R(this,"transparentMode");R(this,"atlasTexture",null);R(this,"alphaTestValue",0);R(this,"ambientIntensity",1);this.transparentMode=t,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_MAP:"",MAP_UV:"uv",...t?{USE_ALPHATEST:""}:{}},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],[$i]:[0],lightLevel:[0]},this.bindUniforms()}set textureAtlas(t){this.atlasTexture=t}setAmbientIntensity(t){this.ambientIntensity=t}setAmbientColor(t){this.ambientColor.copy(t)}copy(t){return super.copy(t),this.colorValue.copy(t.colorValue),this.ambientColor.copy(t.ambientColor),this.atlasTexture=t.atlasTexture,this.alphaTestValue=t.alphaTestValue,this.bindUniforms(),this}bindUniforms(){const t=this;this.uniforms.diffuse={value:this.colorValue},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms.map={get value(){return t.atlasTexture}},this.uniforms.alphaTest={get value(){return t.transparentMode?mc:t.alphaTestValue}},this.uniforms[An]={value:this.ambientColor},this.uniforms[el]={get value(){return t.ambientIntensity}}}}class VM extends dh{constructor(t,n){super({uniforms:Nn.merge([hh(t),lh(n),{[Bi]:{value:0},[go]:{value:null},[An]:{value:new me(1,1,1)}}]),vertexShader:`
        uniform float ${Bi};
        ${ch(n)}

        attribute vec4 foamLevel;
        attribute vec4 foamLevelDiag;
        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;

        void main() {
          uint chunkIndexValue = uint(${$i} + 0.5);
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

          float slowTime = ${Bi} * 0.5;
          float yOffset = ${kM};
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
        ${ah}
        uniform float ${Bi};
        uniform sampler2D ${go};
        uniform vec3 ${An};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${uh()}

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
          vec4 texColor = texture(${go}, vUv);
          if (texColor.a < ${mc.toFixed(1)}) {
            discard;
          }

          float fresnel = pow(1.0 - dot(vNormal, vViewVector), 4.0);
          float waveLighting = sin(dot(vWorldPos.xz, vec2(2.0)) + ${Bi} * 0.5) * 0.1;
          vec3 finalColor = texColor.rgb * ${An};

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
              float foamTime = ${Bi} * 0.3;
              vec2 foamUV = vWorldPos.xz * 6.0;

              float foamNoise = noise(foamUV + vec2(foamTime, 0.0)) * 0.5 +
                                noise(foamUV * 2.0 + vec2(0.0, foamTime * 0.5)) * 0.3 +
                                noise(foamUV * 4.0 + vec2(foamTime * 0.3, foamTime * 0.2)) * 0.2;
              float foamPattern = smoothstep(0.3, 0.5, foamNoise);
              float finalFoam = mix(foamIntensity, foamPattern * foamIntensity, smoothstep(0.0, 0.05, minDist));

              vec3 foamColor = vec3(1.0) * ${An};
              finalColor = mix(finalColor, foamColor, finalFoam * 0.95);
            }
          }

          gl_FragColor = vec4(finalColor, 0.8);
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        }
      `,forceSinglePass:!0,side:$t,transparent:!0,fog:!1,lights:!1,toneMapped:!0,vertexColors:!0,glslVersion:yi});R(this,"ambientColor",new me(16777215));R(this,"ambientIntensity",1);this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],[$i]:[0],foamLevel:[0,0,0,0],foamLevelDiag:[0,0,0,0],uv:[0,0]}}set textureAtlas(t){this.uniforms[go].value=t}setAmbientIntensity(t){this.ambientIntensity=t,this.uniforms[An].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}setAmbientColor(t){this.ambientColor.copy(t),this.uniforms[An].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}update(t){this.uniforms[Bi].value+=.0075}}class HM extends dh{constructor(e,t){super({uniforms:Nn.merge([Nn.clone(pt.basic.uniforms),hh(e),lh(t)]),vertexShader:pt.basic.vertexShader.replace("void main() {",`
          ${ch(t)}
          varying vec3 vWorldPos;
          void main() {
            uint chunkIndexValue = uint(${$i} + 0.5);
            if (!isChunkVisible(chunkIndexValue)) {
              gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
              return;
            }
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        `),fragmentShader:pt.basic.fragmentShader.replace("void main() {",`
            ${ah}
            varying vec3 vWorldPos;
            ${uh()}
            void main() {
          `).replace("#include <fog_fragment>",`
            gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
          `),side:$t,vertexColors:!0,fog:!1,lights:!1,toneMapped:!0,clipping:!0,glslVersion:yi}),this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],[$i]:[0]}}setAmbientIntensity(e){}setAmbientColor(e){}}function fd(s,e,t=zM,n=pc){switch(s){case"lod":return new HM(t,n);case"opaque":{const i=new dd(!1,t,n);return i.textureAtlas=e,i}case"transparent":{const i=new dd(!0,t,n);return i.depthWrite=!0,i.textureAtlas=e,i}case"liquid":{const i=new VM(t,n);return i.depthWrite=!0,i.textureAtlas=e,i}}}const GM={x:2,y:2,z:2},WM={x:2,y:2,z:2},Nt={x:8,y:4,z:8},XM=2,pr=new D,rp=new D,pd=new Float32Array(0);class qM{constructor(e){R(this,"parent");R(this,"atlas",null);R(this,"ambientIntensity",1);R(this,"ambientColor",new me(16777215));R(this,"fogProvider",null);R(this,"chunkLiquidBounds",new Map);R(this,"chunkLodBounds",new Map);R(this,"chunkOpaqueBounds",new Map);R(this,"chunkTransparentBounds",new Map);R(this,"parentBatches",new Map);R(this,"scratchChunkIds",new Set);R(this,"scratchChunkModes",new Map);R(this,"states",{liquid:_o(),lod:_o(),opaque:_o(),transparent:_o()});this.parent=e}get batchMeshCount(){let e=0;for(const t of this.parentBatches.values())t.lodBatch&&e++;return this.states.liquid.batches.size+e+this.states.opaque.batches.size+this.states.transparent.batches.size}setAtlas(e){if(this.atlas!==e){if(this.atlas=e,!e){this.disposeBatchMeshes();return}for(const t of[this.states.opaque,this.states.transparent,this.states.liquid,this.states.lod])for(const n of t.batchChunkIds.keys())t.dirtyBatchIds.add(n);for(const t of this.parentBatches.values())t.lodChunkIds.size>0&&this.states.lod.dirtyBatchIds.add(t.key)}}clear(){this.disposeBatchMeshes();for(const e of[this.states.opaque,this.states.transparent,this.states.liquid,this.states.lod])e.batchChunkIds.clear(),e.chunkGeometries.clear(),e.dirtyBatchIds.clear(),e.dirtyChunkIdsByBatch.clear();this.chunkLiquidBounds.clear(),this.chunkLodBounds.clear(),this.chunkOpaqueBounds.clear(),this.chunkTransparentBounds.clear(),this.parentBatches.clear(),this.scratchChunkIds.clear(),this.scratchChunkModes.clear()}setChunkGeometry(e,t){this.updateLodGeometry(e,(t==null?void 0:t.lodGeometry)??null,t==null?void 0:t.lodBounds),this.updateKindGeometry("opaque",e,(t==null?void 0:t.opaqueGeometry)??null,t==null?void 0:t.opaqueBounds),this.updateKindGeometry("transparent",e,(t==null?void 0:t.transparentGeometry)??null,t==null?void 0:t.transparentBounds),this.updateKindGeometry("liquid",e,(t==null?void 0:t.liquidGeometry)??null,t==null?void 0:t.liquidBounds)}flush(){this.atlas&&(this.flushKind("opaque"),this.flushKind("transparent"),this.flushKind("liquid"),this.flushLodBatches())}update(e){for(const t of this.states.liquid.batches.values())"update"in t.material&&t.material.update(e)}setAmbientIntensity(e){this.ambientIntensity=e;for(const t of Object.values(this.states))for(const n of t.batches.values())n.material.setAmbientIntensity(e)}setAmbientColor(e){this.ambientColor.copy(e);for(const t of Object.values(this.states))for(const n of t.batches.values())n.material.setAmbientColor(this.ambientColor)}setFogProvider(e){if(this.fogProvider=e,this.atlas){const t=this.atlas;this.atlas=null,this.setAtlas(t)}}applyViewDistanceVisibility(e,t,n,i,r){for(const o of this.parentBatches.values())this.applyParentBatchVisibility(o,e,t,n,i,r)}collectPreOcclusionChunkModes(e,t,n,i,r){r.clear();for(const o of this.parentBatches.values())if(gd(o.bounds,e,n)!==-1&&xd(o.bounds,i)!==-1)for(const a of this.getParentBatchChunkIds(o)){const l=this.getChunkVisibilityBounds(a);if(!l||_d(l,e,n)===-1||vd(l,i)===-1)continue;const c=Mc(l,e);r.set(a,c>t&&o.lodChunkIds.has(a)?"lod":"normal")}return r}dispose(){this.clear(),this.atlas=null}updateKindGeometry(e,t,n,i){const r=this.states[e],o=this.getBatchId(e,t),a=r.batchChunkIds.get(o)??new Set,l=this.getParentBatchIdForChunk(t),c=r.batchChunkIds.has(o),h=r.chunkGeometries.has(t);n?(r.chunkGeometries.set(t,n),a.add(t),r.batchChunkIds.set(o,a),i?this.getChunkBoundsMap(e).set(t,i):this.getChunkBoundsMap(e).delete(t)):(r.chunkGeometries.delete(t),this.getChunkBoundsMap(e).delete(t),a.delete(t)&&a.size===0&&r.batchChunkIds.delete(o));const u=r.batchChunkIds.has(o);if(e==="lod"?n&&i?this.registerLodChunk(l,t):h&&this.unregisterLodChunk(l,t):!c&&u?this.registerNormalBatch(o,e):c&&!u?this.unregisterNormalBatch(o,e):u&&this.markParentBatchChunkIdsDirty(l),h!==!!n){r.dirtyBatchIds.add(o),r.dirtyChunkIdsByBatch.delete(o);return}const f=r.dirtyChunkIdsByBatch.get(o)??new Set;f.add(t),r.dirtyChunkIdsByBatch.set(o,f),r.dirtyBatchIds.add(o)}updateLodGeometry(e,t,n){const i=this.states.lod,r=this.getParentBatchIdForChunk(e),o=i.chunkGeometries.has(e);t&&n?(i.chunkGeometries.set(e,t),this.chunkLodBounds.set(e,n),this.registerLodChunk(r,e)):(i.chunkGeometries.delete(e),this.chunkLodBounds.delete(e),o&&this.unregisterLodChunk(r,e)),this.states.lod.dirtyBatchIds.add(r)}flushKind(e){const t=this.states[e],n=[...t.dirtyBatchIds];t.dirtyBatchIds.clear();for(const i of n){const r=t.dirtyChunkIdsByBatch.get(i);(!r||r.size===0||!this.updateBatchChunks(e,i,r))&&this.rebuildBatch(e,i),t.dirtyChunkIdsByBatch.delete(i)}}flushLodBatches(){const e=[...this.states.lod.dirtyBatchIds];this.states.lod.dirtyBatchIds.clear();for(const t of e)this.rebuildLodBatch(t)}updateBatchChunks(e,t,n){const i=this.states[e],r=i.batches.get(t),o=i.batchMetadata.get(t);if(!r||!o)return!1;for(const a of n){const l=i.chunkGeometries.get(a),c=o.allocations.get(a);if(!l||!c)return!1;const h=l.positions.length/3,u=l.indices.length;if(h>c.vertexCapacity||u>c.indexCapacity)return!1;this.writeChunkGeometryIntoMergedGeometry(e,r.geometry,c,l),c.vertexCount=h,c.indexCount=u}return ZM(r.geometry,o.allocations),nl(r.geometry,e,o.chunkIds,this.getChunkBoundsMap(e),t),tn(r),!0}rebuildBatch(e,t){var Ne,ct;const n=this.states[e],i=n.batches.get(t)??null,r=n.batchMetadata.get(t)??null,o=n.batchChunkIds.get(t);if(!o||o.size===0||!this.atlas){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(t)),n.batchMetadata.delete(t);return}const a=[...o].sort(md);let l=0,c=0,h=0,u=0,d=0,f=0,m=0,_=0,p=0,g=0;for(const Je of a){const q=n.chunkGeometries.get(Je);if(!q)continue;const Z=r==null?void 0:r.allocations.get(Je),ie=q.positions.length/3,Le=Bo(ie,(Z==null?void 0:Z.vertexCapacity)??0),we=tl(q.indices.length,(Z==null?void 0:Z.indexCapacity)??0);l+=q.positions.length,c+=q.normals.length,h+=q.uvs.length,u+=q.colors.length,d+=Le,f+=q.lightLevels.length,m+=((Ne=q.foamLevels)==null?void 0:Ne.length)??0,_+=((ct=q.foamLevelsDiag)==null?void 0:ct.length)??0,p+=Le,g+=we}if(g===0){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(t)),n.batchMetadata.delete(t);return}const v=Math.max(Bo(p,(r==null?void 0:r.vertexCapacity)??0),1),b=Math.max(tl(g,(r==null?void 0:r.indexCapacity)??0),1),M=new Map,T=new Float32Array(v*3),A=new Float32Array(v*3),C=new Float32Array(v*2),x=new Float32Array(v*3),S=new Float32Array(v),V=new Float32Array(v),I=e==="liquid"?new Float32Array(v*4):null,k=e==="liquid"?new Float32Array(v*4):null,O=new Uint32Array(b);let N=0,F=0;for(let Je=0;Je<a.length;Je++){const q=a[Je],Z=n.chunkGeometries.get(q);if(!Z)continue;const ie=Z.positions.length/3,Le=r==null?void 0:r.allocations.get(q),we=Bo(ie,(Le==null?void 0:Le.vertexCapacity)??0),Pe=tl(Z.indices.length,(Le==null?void 0:Le.indexCapacity)??0),Tt={chunkIndex:Je,indexCapacity:Pe,indexCount:Z.indices.length,indexOffset:N,vertexCapacity:we,vertexCount:ie,vertexOffset:F};M.set(q,Tt),T.set(Z.positions,F*3),A.set(Z.normals,F*3),C.set(Z.uvs,F*2),x.set(Z.colors,F*3),S.fill(Je,F,F+we),V.set(Z.lightLevels,F),I&&Z.foamLevels&&I.set(Z.foamLevels,F*4),k&&Z.foamLevelsDiag&&k.set(Z.foamLevelsDiag,F*4);for(let ke=0;ke<Z.indices.length;ke++)O[N+ke]=Z.indices[ke]+F;for(let ke=Z.indices.length;ke<Pe;ke++)O[N+ke]=F;N+=Pe,F+=we}const H=i??this.createBatchMesh(e),z=H.geometry;this.applyMergedGeometry(z,{positions:T,normals:A,uvs:C,colors:x,chunkIndices:S,lightLevels:V,foamLevels:I,foamLevelsDiag:k,indices:O},{positionCount:l,normalCount:c,uvCount:h,colorCount:u,chunkIndexCount:d,lightLevelCount:f,foamLevelCount:m,foamLevelDiagCount:_,indexCount:Sc(M)}),z.setDrawRange(0,Sc(M)),nl(z,e,a,this.getChunkBoundsMap(e),t),tn(H);const ee=(r==null?void 0:r.chunkVisibilityBits)??new Uint32Array(_i(pc)*4),Q=(r==null?void 0:r.chunkVisibilityScratchBits)??new Uint32Array(_i(pc)*4),oe=(r==null?void 0:r.chunkVisibilityMode)??Gi;let de=(r==null?void 0:r.chunkVisibilityRevision)??0,fe=!r||r.chunkIds.length!==a.length;fe&&(ee.fill(0),Q.fill(0),de++),H.material.setAmbientColor(this.ambientColor),H.material.setAmbientIntensity(this.ambientIntensity),n.batches.set(t,H),n.batchMetadata.set(t,{allocations:M,chunkIds:a,chunkVisibilityBits:ee,chunkVisibilityMode:oe,chunkVisibilityRevision:de,chunkVisibilityScratchBits:Q,visibilityDirty:fe,indexCapacity:b,vertexCapacity:v}),H.material.bindChunkVisibility(ee,oe,de,a.length),i||this.parent.add(H)}createBatchMesh(e){const t=new Bt,n=fd(e,this.atlas.texture,this.fogProvider??void 0);n.setAmbientColor(this.ambientColor),n.setAmbientIntensity(this.ambientIntensity);const i=new _t(t,n);return i.frustumCulled=!1,i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.renderOrder=e==="lod"?-1:e==="opaque"?0:e==="transparent"?1:2,i.updateMatrix(),tn(i),i}rebuildLodBatch(e){const t=this.parentBatches.get(e);if(!t||!this.atlas)return;const n=t.lodBuildChunkIds;n.length=0;for(const g of t.lodChunkIds)this.states.lod.chunkGeometries.has(g)&&this.chunkLodBounds.has(g)&&n.push(g);if(n.sort(md),n.length===0){this.disposeLodBatch(t),this.cleanupParentBatch(e,t);return}let i=0,r=0;for(const g of n){const v=this.states.lod.chunkGeometries.get(g);i+=v.positions.length/3,r+=v.indices.length}const o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i*3),c=new Float32Array(i),h=new Uint32Array(r);let u=0,d=0;for(let g=0;g<n.length;g++){const v=n[g],b=this.states.lod.chunkGeometries.get(v),M=b.positions.length/3;o.set(b.positions,u*3),a.set(b.normals,u*3),l.set(b.colors,u*3),c.fill(g,u,u+M);for(let T=0;T<b.indices.length;T++)h[d+T]=b.indices[T]+u;u+=M,d+=b.indices.length}const f=new Bt;f.setAttribute("position",new Ze(o,3)),f.setAttribute("normal",new Ze(a,3)),f.setAttribute("color",new Ze(l,3)),f.setAttribute("chunkIndex",new Ze(c,1)),f.setIndex(new Ze(h,1)),nl(f,"lod",n,this.chunkLodBounds,e);const m=t.lodBatch;if(m){m.geometry.dispose(),m.geometry=f,m.mesh.geometry=f,m.chunkIds=[...n],m.chunkVisibilityBits=new Uint32Array(_i(n.length)*4),m.chunkVisibilityScratchBits=new Uint32Array(_i(n.length)*4),m.chunkVisibilityMode=Gi,m.chunkVisibilityRevision++,m.visibilityDirty=!0,m.mesh.material.setAmbientColor(this.ambientColor),m.mesh.material.setAmbientIntensity(this.ambientIntensity),tn(m.mesh);return}const _=fd("lod",this.atlas.texture,this.fogProvider??void 0);_.setAmbientColor(this.ambientColor),_.setAmbientIntensity(this.ambientIntensity);const p=new _t(f,_);p.frustumCulled=!1,p.matrixAutoUpdate=!1,p.matrixWorldAutoUpdate=!1,p.renderOrder=-1,p.updateMatrix(),tn(p),this.parent.add(p),t.lodBatch={chunkIds:[...n],geometry:f,mesh:p,chunkVisibilityBits:new Uint32Array(_i(n.length)*4),chunkVisibilityMode:Gi,chunkVisibilityRevision:0,chunkVisibilityScratchBits:new Uint32Array(_i(n.length)*4),visibilityDirty:!0}}disposeLodBatch(e){const t=e.lodBatch;t&&(this.parent.remove(t.mesh),t.geometry.dispose(),t.mesh.material.dispose(),e.lodBatch=void 0)}applyMergedGeometry(e,t,n){gi(e,"position",t.positions,3,n.positionCount/3),gi(e,"normal",t.normals,3,n.normalCount/3),gi(e,"uv",t.uvs,2,n.uvCount/2),gi(e,"color",t.colors,3,n.colorCount/3),gi(e,"chunkIndex",t.chunkIndices,1,n.chunkIndexCount),gi(e,"lightLevel",t.lightLevels,1,n.lightLevelCount),t.foamLevels?gi(e,"foamLevel",t.foamLevels,4,n.foamLevelCount/4):e.deleteAttribute("foamLevel"),t.foamLevelsDiag?gi(e,"foamLevelDiag",t.foamLevelsDiag,4,n.foamLevelDiagCount/4):e.deleteAttribute("foamLevelDiag"),YM(e,t.indices,n.indexCount)}writeChunkGeometryIntoMergedGeometry(e,t,n,i){Ui(t,"position",i.positions,n.vertexOffset*3,n.vertexCapacity*3),Ui(t,"normal",i.normals,n.vertexOffset*3,n.vertexCapacity*3),Ui(t,"uv",i.uvs,n.vertexOffset*2,n.vertexCapacity*2),Ui(t,"color",i.colors,n.vertexOffset*3,n.vertexCapacity*3),KM(t,"chunkIndex",n.chunkIndex,n.vertexOffset,n.vertexCapacity),Ui(t,"lightLevel",i.lightLevels,n.vertexOffset,n.vertexCapacity),e==="liquid"&&(Ui(t,"foamLevel",i.foamLevels??pd,n.vertexOffset*4,n.vertexCapacity*4),Ui(t,"foamLevelDiag",i.foamLevelsDiag??pd,n.vertexOffset*4,n.vertexCapacity*4)),jM(t,i.indices,n.indexOffset,n.indexCapacity,n.vertexOffset)}getBatchId(e,t){const n=Ke.chunkIdToOriginCoordinate(t),i=yc(e),r={x:i.x*Re,y:i.y*Re,z:i.z*Re};return[Math.floor(n.x/r.x)*r.x,Math.floor(n.y/r.y)*r.y,Math.floor(n.z/r.z)*r.z].join(",")}getParentBatchIdForChunk(e){const t=Ke.chunkIdToOriginCoordinate(e);return[Math.floor(t.x/(Nt.x*Re))*Nt.x*Re,Math.floor(t.y/(Nt.y*Re))*Nt.y*Re,Math.floor(t.z/(Nt.z*Re))*Nt.z*Re].join(",")}getChunkBoundsMap(e){switch(e){case"liquid":return this.chunkLiquidBounds;case"lod":return this.chunkLodBounds;case"opaque":return this.chunkOpaqueBounds;case"transparent":return this.chunkTransparentBounds}}getChunkVisibilityBounds(e){return this.chunkOpaqueBounds.get(e)??this.chunkTransparentBounds.get(e)??this.chunkLiquidBounds.get(e)??this.chunkLodBounds.get(e)}markParentBatchChunkIdsDirty(e){const t=this.parentBatches.get(e);t&&(t.allChunkIdsDirty=!0)}registerNormalBatch(e,t){const n=this.ensureParentBatch(this.getParentBatchIdForBatch(e));switch(n.allChunkIdsDirty=!0,t){case"opaque":n.opaqueBatchIds.add(e);break;case"transparent":n.transparentBatchIds.add(e);break;case"liquid":n.liquidBatchIds.add(e);break}}unregisterNormalBatch(e,t){const n=this.getParentBatchIdForBatch(e),i=this.parentBatches.get(n);if(i){switch(i.allChunkIdsDirty=!0,t){case"opaque":i.opaqueBatchIds.delete(e);break;case"transparent":i.transparentBatchIds.delete(e);break;case"liquid":i.liquidBatchIds.delete(e);break}this.cleanupParentBatch(n,i)}}registerLodChunk(e,t){const n=this.ensureParentBatch(e);n.lodChunkIds.add(t),n.allChunkIdsDirty=!0}unregisterLodChunk(e,t){const n=this.parentBatches.get(e);n&&(n.lodChunkIds.delete(t),n.allChunkIdsDirty=!0,this.cleanupParentBatch(e,n))}getParentBatchIdForBatch(e){const[t,n,i]=e.split(",").map(Number);return[Math.floor(t/(Nt.x*Re))*Nt.x*Re,Math.floor(n/(Nt.y*Re))*Nt.y*Re,Math.floor(i/(Nt.z*Re))*Nt.z*Re].join(",")}ensureParentBatch(e){const t=this.parentBatches.get(e);if(t)return t;const[n,i,r]=e.split(",").map(Number),o={allChunkIds:[],allChunkIdsDirty:!0,bounds:new Ht(new D(n,i,r),new D(n+Nt.x*Re,i+Nt.y*Re,r+Nt.z*Re)),chunkModes:new Map,key:e,liquidBatchIds:new Set,lodBuildChunkIds:[],lodChunkIds:new Set,opaqueBatchIds:new Set,transparentBatchIds:new Set,visibilityState:"hidden"};return this.parentBatches.set(e,o),o}cleanupParentBatch(e,t){const n=t.opaqueBatchIds.size>0||t.transparentBatchIds.size>0||t.liquidBatchIds.size>0,i=t.lodChunkIds.size>0,r=t.lodBatch!==void 0;n||i||r||this.parentBatches.delete(e)}applyParentBatchVisibility(e,t,n,i,r,o){var h;if(gd(e.bounds,t,i)===-1){this.syncParentBatchVisibility(e,"hidden");return}if(xd(e.bounds,r)===-1){this.syncParentBatchVisibility(e,"hidden");return}const a=this.classifyParentChunkVisibility(e,t,n,i,r,o);this.applyBatchSetVisibility(this.states.opaque,e.opaqueBatchIds,a,"normal"),this.applyBatchSetVisibility(this.states.transparent,e.transparentBatchIds,a,"normal"),this.applyBatchSetVisibility(this.states.liquid,e.liquidBatchIds,a,"normal"),this.applyLodBatchVisibility(e,a);const l=this.hasVisibleBatchSet(this.states.opaque,e.opaqueBatchIds)||this.hasVisibleBatchSet(this.states.transparent,e.transparentBatchIds)||this.hasVisibleBatchSet(this.states.liquid,e.liquidBatchIds),c=!!((h=e.lodBatch)!=null&&h.mesh.visible);l&&c?this.syncParentBatchVisibility(e,"mixed"):l?this.syncParentBatchVisibility(e,"normal"):c?this.syncParentBatchVisibility(e,"lod"):this.syncParentBatchVisibility(e,"hidden")}classifyParentChunkVisibility(e,t,n,i,r,o){const a=e.chunkModes;a.clear();for(const l of this.getParentBatchChunkIds(e)){const c=o==null?void 0:o.get(l);if(c){a.set(l,c);continue}const h=this.getChunkVisibilityBounds(l);if(!h){a.set(l,"hidden");continue}if(_d(h,t,i)===-1){a.set(l,"hidden");continue}if(vd(h,r)===-1){a.set(l,"hidden");continue}Mc(h,t)>n&&e.lodChunkIds.has(l)?a.set(l,"lod"):a.set(l,"normal")}return a}getParentBatchChunkIds(e){if(!e.allChunkIdsDirty)return e.allChunkIds;const t=this.scratchChunkIds;t.clear();for(const n of e.lodChunkIds)t.add(n);this.collectParentBatchChunkIds(this.states.opaque,e.opaqueBatchIds,t),this.collectParentBatchChunkIds(this.states.transparent,e.transparentBatchIds,t),this.collectParentBatchChunkIds(this.states.liquid,e.liquidBatchIds,t),e.allChunkIds.length=0;for(const n of t)e.allChunkIds.push(n);return e.allChunkIdsDirty=!1,e.allChunkIds}collectParentBatchChunkIds(e,t,n){for(const i of t){const r=e.batchMetadata.get(i);if(r)for(const o of r.chunkIds)n.add(o)}}applyBatchSetVisibility(e,t,n,i){for(const r of t){const o=e.batches.get(r),a=e.batchMetadata.get(r);if(!o||!a)continue;const l=this.applyBatchChunkVisibility(a,o,n,i);this.setMeshScenePresence(o,l)}}applyBatchChunkVisibility(e,t,n,i){e.chunkVisibilityScratchBits.fill(0);let r=0;for(let c=0;c<e.chunkIds.length;c++){const h=e.chunkIds[c];if(n.get(h)===i){const d=c>>5;e.chunkVisibilityScratchBits[d]|=1<<(c&31),r++}}const o=!yd(e.chunkVisibilityBits,e.chunkVisibilityScratchBits);o&&e.chunkVisibilityBits.set(e.chunkVisibilityScratchBits);const a=r===e.chunkIds.length?Gi:ud,l=e.chunkVisibilityMode!==a;return l&&(e.chunkVisibilityMode=a),(e.visibilityDirty||o||l)&&(e.chunkVisibilityRevision++,t.material.bindChunkVisibility(e.chunkVisibilityBits,e.chunkVisibilityMode,e.chunkVisibilityRevision,e.chunkIds.length),e.visibilityDirty=!1),r>0}applyLodBatchVisibility(e,t){const n=e.lodBatch;if(!n)return;n.chunkVisibilityScratchBits.fill(0);let i=0;for(let l=0;l<n.chunkIds.length;l++){const c=n.chunkIds[l];if(t.get(c)!=="lod")continue;const h=l>>5;n.chunkVisibilityScratchBits[h]|=1<<(l&31),i++}const r=!yd(n.chunkVisibilityBits,n.chunkVisibilityScratchBits);r&&n.chunkVisibilityBits.set(n.chunkVisibilityScratchBits);const o=i===n.chunkIds.length?Gi:ud,a=n.chunkVisibilityMode!==o;a&&(n.chunkVisibilityMode=o),(n.visibilityDirty||r||a)&&(n.chunkVisibilityRevision++,n.mesh.material.bindChunkVisibility(n.chunkVisibilityBits,n.chunkVisibilityMode,n.chunkVisibilityRevision,n.chunkIds.length),n.visibilityDirty=!1),this.setMeshScenePresence(n.mesh,i>0)}syncParentBatchVisibility(e,t){if(t==="hidden"){for(const n of e.opaqueBatchIds){const i=this.states.opaque.batches.get(n);i&&this.setMeshScenePresence(i,!1)}for(const n of e.transparentBatchIds){const i=this.states.transparent.batches.get(n);i&&this.setMeshScenePresence(i,!1)}for(const n of e.liquidBatchIds){const i=this.states.liquid.batches.get(n);i&&this.setMeshScenePresence(i,!1)}e.lodBatch&&this.setMeshScenePresence(e.lodBatch.mesh,!1)}e.visibilityState=t}setMeshScenePresence(e,t){const n=e.parent!==null;t&&!n?this.parent.add(e):!t&&n&&this.parent.remove(e),e.visible=t}hasVisibleBatchSet(e,t){for(const n of t){const i=e.batches.get(n);if(i!=null&&i.visible)return!0}return!1}disposeBatchMeshes(){for(const e of[this.states.opaque,this.states.transparent,this.states.liquid]){for(const t of e.batches.values())this.parent.remove(t),t.geometry.dispose(),t.material.dispose();e.batches.clear(),e.batchMetadata.clear(),e.dirtyChunkIdsByBatch.clear()}for(const e of this.parentBatches.values())this.disposeLodBatch(e);this.states.lod.batchMetadata.clear(),this.states.lod.batchChunkIds.clear(),this.states.lod.dirtyChunkIdsByBatch.clear()}}function _o(){return{batchChunkIds:new Map,batches:new Map,batchMetadata:new Map,chunkGeometries:new Map,dirtyBatchIds:new Set,dirtyChunkIdsByBatch:new Map}}function yc(s){switch(s){case"liquid":return GM;case"lod":return Nt;case"opaque":return Nt;case"transparent":return WM}}function md(s,e){const t=Ke.chunkIdToOriginCoordinate(s),n=Ke.chunkIdToOriginCoordinate(e);return t.y!==n.y?t.y-n.y:t.z!==n.z?t.z-n.z:t.x-n.x}function $M(s,e){const t=Math.max(s.min.x,Math.min(e.x,s.max.x)),n=Math.max(s.min.z,Math.min(e.y,s.max.z)),i=e.x-t,r=e.y-n;return i*i+r*r}function Mc(s,e){const t=Math.max(s.min[0],Math.min(e.x,s.max[0])),n=Math.max(s.min[2],Math.min(e.y,s.max[2])),i=e.x-t,r=e.y-n;return i*i+r*r}function gd(s,e,t){if($M(s,e)>t)return-1;const n=Math.abs(e.x-s.min.x)>Math.abs(e.x-s.max.x)?s.min.x:s.max.x,i=Math.abs(e.y-s.min.z)>Math.abs(e.y-s.max.z)?s.min.z:s.max.z,r=e.x-n,o=e.y-i;return r*r+o*o<=t?1:0}function _d(s,e,t){if(Mc(s,e)>t)return-1;const n=Math.abs(e.x-s.min[0])>Math.abs(e.x-s.max[0])?s.min[0]:s.max[0],i=Math.abs(e.y-s.min[2])>Math.abs(e.y-s.max[2])?s.min[2]:s.max[2],r=e.x-n,o=e.y-i;return r*r+o*o<=t?1:0}function xd(s,e){let t=!0;for(const n of e.planes){const i=pr.set(n.normal.x>=0?s.max.x:s.min.x,n.normal.y>=0?s.max.y:s.min.y,n.normal.z>=0?s.max.z:s.min.z);if(n.distanceToPoint(i)<0)return-1;const r=rp.set(n.normal.x>=0?s.min.x:s.max.x,n.normal.y>=0?s.min.y:s.max.y,n.normal.z>=0?s.min.z:s.max.z);n.distanceToPoint(r)<0&&(t=!1)}return t?1:0}function vd(s,e){let t=!0;for(const n of e.planes){const i=pr.set(n.normal.x>=0?s.max[0]:s.min[0],n.normal.y>=0?s.max[1]:s.min[1],n.normal.z>=0?s.max[2]:s.min[2]);if(n.distanceToPoint(i)<0)return-1;const r=rp.set(n.normal.x>=0?s.min[0]:s.max[0],n.normal.y>=0?s.min[1]:s.max[1],n.normal.z>=0?s.min[2]:s.max[2]);n.distanceToPoint(r)<0&&(t=!1)}return t?1:0}function Bo(s,e){if(s<=e)return e;let t=Math.max(1,e);for(;t<s;)t*=XM;return t}function tl(s,e){const t=Bo(s,e),n=t%3;return n===0?t:t+(3-n)}function Sc(s){let e=0;for(const t of s.values())e=Math.max(e,t.indexOffset+t.indexCount);return e}function gi(s,e,t,n,i){const r=s.getAttribute(e);if(!(r instanceof Ze)||r.array.length!==t.length||r.itemSize!==n){s.setAttribute(e,new Ze(t,n));return}r.array.set(t),r.needsUpdate=!0}function YM(s,e,t){const n=s.getIndex();if(!(n instanceof Ze)||n.array.length!==e.length){s.setIndex(new Ze(e,1)),s.setDrawRange(0,t);return}n.array.set(e),n.needsUpdate=!0,s.setDrawRange(0,t)}function yd(s,e){if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0}function Ui(s,e,t,n,i){const r=s.getAttribute(e);if(!(r instanceof Ze)||!(r.array instanceof Float32Array))return;const o=r.array;o.fill(0,n,n+i),o.set(t,n),r.needsUpdate=!0}function KM(s,e,t,n,i){const r=s.getAttribute(e);!(r instanceof Ze)||!(r.array instanceof Float32Array)||(r.array.fill(t,n,n+i),r.needsUpdate=!0)}function jM(s,e,t,n,i){const r=s.getIndex();if(!(r instanceof Ze))return;const o=r.array;o.fill(i,t,t+n);for(let a=0;a<e.length;a++)o[t+a]=e[a]+i;r.needsUpdate=!0}function ZM(s,e){s.setDrawRange(0,Sc(e))}function nl(s,e,t,n,i){if(t.length===0){const[l,c,h]=i.split(",").map(Number),u=yc(e);s.boundingBox=new Ht(new D(l,c,h),new D(l+u.x*Re,c+u.y*Re,h+u.z*Re)),s.boundingSphere=s.boundingBox.getBoundingSphere(s.boundingSphere??new Ft);return}let r=!1;const o=s.boundingBox??new Ht;for(const l of t){const c=n.get(l);if(c){if(!r){o.min.set(c.min[0],c.min[1],c.min[2]),o.max.set(c.max[0],c.max[1],c.max[2]),r=!0;continue}o.min.x=Math.min(o.min.x,c.min[0]),o.min.y=Math.min(o.min.y,c.min[1]),o.min.z=Math.min(o.min.z,c.min[2]),o.max.x=Math.max(o.max.x,c.max[0]),o.max.y=Math.max(o.max.y,c.max[1]),o.max.z=Math.max(o.max.z,c.max[2])}}if(!r){const[l,c,h]=i.split(",").map(Number),u=yc(e);o.min.set(l,c,h),o.max.set(l+u.x*Re,c+u.y*Re,h+u.z*Re)}s.boundingBox=o;const a=s.boundingSphere??new Ft;o.getCenter(pr),a.center.copy(pr),a.radius=pr.distanceTo(o.max),s.boundingSphere=a}function ia({x:s,y:e,z:t}){return`${s},${e},${t}`}function JM(s){const e=s.indexOf(","),t=s.indexOf(",",e+1);return{x:Number(s.slice(0,e)),y:Number(s.slice(e+1,t)),z:Number(s.slice(t+1))}}function QM(s){return typeof s=="number"?s:s.i}function eS(s){return typeof s=="number"?0:s.r??0}const Md=["left","right","top","bottom","front","back"],tS=1,nS=2,iS=4,Sd=[[1,0,0,0,1,0,0,0,1],[0,0,-1,0,1,0,1,0,0],[-1,0,0,0,1,0,0,0,-1],[0,0,1,0,1,0,-1,0,0],[-1,0,0,0,-1,0,0,0,1],[0,0,-1,0,-1,0,-1,0,0],[1,0,0,0,-1,0,0,0,-1],[0,0,1,0,-1,0,1,0,0],[0,-1,0,1,0,0,0,0,1],[0,0,-1,1,0,0,0,-1,0],[0,1,0,1,0,0,0,0,-1],[0,0,1,1,0,0,0,1,0],[0,1,0,-1,0,0,0,0,1],[0,0,-1,-1,0,0,0,1,0],[0,-1,0,-1,0,0,0,0,-1],[0,0,1,-1,0,0,0,-1,0],[1,0,0,0,0,1,0,-1,0],[0,1,0,0,0,1,1,0,0],[-1,0,0,0,0,1,0,1,0],[0,-1,0,0,0,1,-1,0,0],[1,0,0,0,0,-1,0,1,0],[0,-1,0,0,0,-1,1,0,0],[-1,0,0,0,0,-1,0,-1,0],[0,1,0,0,0,-1,-1,0,0]],Ms=16,bd=.3,sS=Array.from({length:Ms+1},(s,e)=>e===0?0:bd+(1-bd)*(e-1)/(Ms-1)),rS=[0,.5,.7,.9],oS=[1,1,1,1];function aS(s){var a;const e=s.name.toLowerCase(),t=cS(s.trimeshVertices,s.trimeshIndices,s.customColliderOptions),n=t.vertices,i=t.indices,r=lS(s.textureUri),o=s.isMultiTexture?{left:`${r}/-x.png`,right:`${r}/+x.png`,top:`${r}/+y.png`,bottom:`${r}/-y.png`,front:`${r}/+z.png`,back:`${r}/-z.png`}:{left:r,right:r,top:r,bottom:r,front:r,back:r};return{...s,aoIntensity:rS,axisPassMask:((a=t.profile)==null?void 0:a.axisPassMask)??0,color:oS,isTranslucent:!!s.isLiquid||e.includes("glass")||e.includes("leaves")||e.includes("water")||e.includes("ice"),transparencyRatio:0,trimeshIndices:i,trimeshOcclusionProfile:t.profile,trimeshTriangleData:dS(n,i),trimeshVertices:n,textureUris:o}}function lS(s){return s.startsWith("http://")||s.startsWith("https://")?s:`/voxcinder/world-editor/${s.startsWith("/")?s.slice(1):s}`}function cS(s,e,t){const n=Ed(s),i=Td(e);if(n&&i)return{vertices:n,indices:i,profile:Cd(n,i)};if(!t||t.shape!=="trimesh")return{};const r=Ed(hS(t,"vertices")),o=Td(uS(t,"indices"));return{vertices:r,indices:o,profile:r&&o?Cd(r,o):void 0}}function Ed(s){if(s)return s instanceof Float32Array?s.slice():new Float32Array(s)}function Td(s){if(s)return s instanceof Uint32Array?s.slice():new Uint32Array(s)}function hS(s,e){const t=s[e];if(t instanceof Float32Array||Array.isArray(t))return t}function uS(s,e){const t=s[e];if(t instanceof Uint32Array||Array.isArray(t))return t}function dS(s,e){if(!s||!e)return;const t=e.length/3,n=new Array(t);for(let i=0;i<t;i++){const r=e[i*3]*3,o=e[i*3+1]*3,a=e[i*3+2]*3,l=s[r],c=s[r+1],h=s[r+2],u=s[o],d=s[o+1],f=s[o+2],m=s[a],_=s[a+1],p=s[a+2],g=u-l,v=d-c,b=f-h,M=m-l,T=_-c,A=p-h,C=v*A-b*T,x=b*M-g*A,S=g*T-v*M,V=Math.sqrt(C*C+x*x+S*S)||1,I=Math.abs(C),k=Math.abs(x),O=Math.abs(S),N=k>=I&&k>=O,F=!N&&I>=O;n[i]={normalX:C/V,normalY:x/V,normalZ:S/V,v0x:l,v0y:c,v0z:h,v1x:u,v1y:d,v1z:f,v2x:m,v2y:_,v2z:p,v0u:N?l:F?h:l,v0v:N?h:c,v1u:N?u:F?f:u,v1v:N?f:d,v2u:N?m:F?p:m,v2v:N?p:_}}return n}function Cd(s,e){if(e.length===0)return{aoOpacity:1,axisPassMask:0,skyOpacityUp:1,skyOpacityX:1,skyOpacityZ:1};const t=4,n=new Uint8Array(t*t*t);for(let c=0;c<e.length;c+=3){const h=e[c]*3,u=e[c+1]*3,d=e[c+2]*3,f=Math.max(0,Math.min(1,Math.min(s[h],s[u],s[d]))),m=Math.max(0,Math.min(1,Math.min(s[h+1],s[u+1],s[d+1]))),_=Math.max(0,Math.min(1,Math.min(s[h+2],s[u+2],s[d+2]))),p=Math.max(0,Math.min(1,Math.max(s[h],s[u],s[d]))),g=Math.max(0,Math.min(1,Math.max(s[h+1],s[u+1],s[d+1]))),v=Math.max(0,Math.min(1,Math.max(s[h+2],s[u+2],s[d+2]))),b=Math.max(0,Math.min(t-1,Math.floor(f*t))),M=Math.max(0,Math.min(t-1,Math.floor(m*t))),T=Math.max(0,Math.min(t-1,Math.floor(_*t))),A=Math.max(b,Math.max(0,Math.min(t-1,Math.ceil(p*t)-1))),C=Math.max(M,Math.max(0,Math.min(t-1,Math.ceil(g*t)-1))),x=Math.max(T,Math.max(0,Math.min(t-1,Math.ceil(v*t)-1)));for(let S=T;S<=x;S++)for(let V=M;V<=C;V++)for(let I=b;I<=A;I++)n[I+t*(V+t*S)]=1}let i=0;for(let c=0;c<n.length;c++)i+=n[c];let r=0;for(let c=0;c<t;c++)for(let h=0;h<t;h++)for(let u=0;u<t;u++)if(n[h+t*(u+t*c)]!==0){r++;break}let o=0;for(let c=0;c<t;c++)for(let h=0;h<t;h++)for(let u=0;u<t;u++)if(n[u+t*(h+t*c)]!==0){o++;break}let a=0;for(let c=0;c<t;c++)for(let h=0;h<t;h++)for(let u=0;u<t;u++)if(n[h+t*(c+t*u)]!==0){a++;break}let l=0;return o<t*t&&(l|=tS),r<t*t&&(l|=nS),a<t*t&&(l|=iS),{aoOpacity:i/(t*t*t),axisPassMask:l,skyOpacityUp:r/(t*t),skyOpacityX:o/(t*t),skyOpacityZ:a/(t*t)}}const fS=15,ms=Math.ceil((fS+1)/Re);class Ad{constructor(){R(this,"_chunks",new Map);R(this,"_blockTypes",new Map);R(this,"_blockTypeList",[]);R(this,"_entities");R(this,"_lightSourcesCache",null)}load(e,t){var n;this._chunks.clear(),this._entities=e.entities?{...e.entities}:void 0,this._setBlockTypes((n=e.blockTypes)!=null&&n.length?e.blockTypes:t);for(const[i,r]of Object.entries(e.blocks??{})){const o=QM(r);o!==0&&this.setBlock(JM(i),o,eS(r))}}toJson(){const e={};for(const t of this._chunks.values())t.forEachBlock((n,i,r)=>{const o={x:t.originCoordinate.x+n.x,y:t.originCoordinate.y+n.y,z:t.originCoordinate.z+n.z};e[ia(o)]=r===0?i:{i,r}});return{blockTypes:this._blockTypeList.map(t=>({id:t.id,name:t.name,textureUri:t.textureUri,isLiquid:t.isLiquid,lightLevel:t.lightLevel,...t.trimeshIndices?{trimeshIndices:Array.from(t.trimeshIndices)}:{},...t.trimeshVertices?{trimeshVertices:Array.from(t.trimeshVertices)}:{},durability:t.durability,customColliderOptions:t.customColliderOptions,isCustom:t.isCustom,isMultiTexture:t.isMultiTexture})),blocks:e,...this._entities?{entities:this._entities}:{}}}get blockTypes(){return this._blockTypeList}get chunkIds(){return[...this._chunks.keys()]}get entities(){return this._entities?{...this._entities}:{}}toSnapshot(){return{blockTypes:this._blockTypeList.map(wd),chunks:this.chunkIds.map(e=>{const t=this._chunks.get(e);return{chunkId:e,originCoordinate:{...t.originCoordinate},blocks:t.cloneBlocks(),rotations:t.cloneRotations()}}),...this._entities?{entities:{...this._entities}}:{}}}loadSnapshot(e){this._chunks.clear(),this._blockTypes.clear(),this._blockTypeList=e.blockTypes.map(wd);for(const t of this._blockTypeList)this._blockTypes.set(t.id,t);for(const t of e.chunks)this._chunks.set(t.chunkId,new Ke(t.originCoordinate,t.blocks,t.rotations));this._entities=e.entities?{...e.entities}:void 0,this._lightSourcesCache=null}getChunkSnapshot(e){const t=this._chunks.get(e);return t?{chunkId:e,originCoordinate:{...t.originCoordinate},blocks:t.cloneBlocks(),rotations:t.cloneRotations()}:null}applyChunkSnapshot(e,t){if(!t){this._chunks.delete(e),this._lightSourcesCache=null;return}this._chunks.set(e,new Ke({...t.originCoordinate},new Uint16Array(t.blocks),new Uint8Array(t.rotations))),this._lightSourcesCache=null}setEntities(e){this._entities=e?{...e}:void 0}setEntity(e,t){this._entities||(this._entities={}),this._entities[e]=t}deleteEntity(e){this._entities&&(delete this._entities[e],Object.keys(this._entities).length===0&&(this._entities=void 0))}getChunk(e){return this._chunks.get(e)}getBlockTypeById(e){return e===0?void 0:this._blockTypes.get(e)}getBlockType(e){const t=this.getBlockTypeId(e);return t===0?void 0:this._blockTypes.get(t)}getBlockTypeId(e){const t=this._chunks.get(Ke.globalCoordinateToChunkId(e));return t?t.getBlockType(Ke.globalCoordinateToLocalCoordinate(e)):0}getBlockRotation(e){const t=this._chunks.get(Ke.globalCoordinateToChunkId(e));return t?t.getBlockRotation(Ke.globalCoordinateToLocalCoordinate(e)):0}hasBlock(e){return this.getBlockTypeId(e)!==0}setBlock(e,t,n=0){const i=Ke.globalCoordinateToChunkId(e),r=Ke.globalCoordinateToLocalCoordinate(e);let o=this._chunks.get(i);o||(o=new Ke(Ke.globalCoordinateToOriginCoordinate(e)),this._chunks.set(i,o)),o.setBlock(r,t),o.setBlockRotation(r,t===0?0:n),o.isEmpty()&&this._chunks.delete(i),this._lightSourcesCache=null}deleteBlock(e){this.setBlock(e,0)}getChunksNear(e,t){const n=Ke.globalCoordinateToOriginCoordinate(e),i=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=this._chunks.get(Ke.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&i.push(l)}return i}getAllLightSources(){if(this._lightSourcesCache)return this._lightSourcesCache;const e=[];for(const t of this._chunks.values())t.forEachBlock((n,i)=>{const r=this._blockTypes.get(i);r!=null&&r.lightLevel&&e.push({position:{x:t.originCoordinate.x+n.x,y:t.originCoordinate.y+n.y,z:t.originCoordinate.z+n.z},level:r.lightLevel})});return this._lightSourcesCache=e,e}getLightSourcesNear(e,t){const n=Ke.globalCoordinateToOriginCoordinate(e),i=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=this._chunks.get(Ke.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&l.forEachBlock((c,h)=>{const u=this._blockTypes.get(h);u!=null&&u.lightLevel&&i.push({position:{x:l.originCoordinate.x+c.x,y:l.originCoordinate.y+c.y,z:l.originCoordinate.z+c.z},level:u.lightLevel})})}return i}getAffectedChunkIds(e,t,n){const i=new Set,r=Ke.globalCoordinateToChunkId(e),o=Ke.globalCoordinateToLocalCoordinate(e),a=t===0?void 0:this._blockTypes.get(t),l=n===0?void 0:this._blockTypes.get(n);if(i.add(r),(a==null?void 0:a.lightLevel)!==(l==null?void 0:l.lightLevel)){const d=Math.max((a==null?void 0:a.lightLevel)??0,(l==null?void 0:l.lightLevel)??0),f=Math.min(d,Re);for(let m=-ms;m<=ms;m++)for(let _=-ms;_<=ms;_++)for(let p=-ms;p<=ms;p++){const g=Ke.globalCoordinateToChunkId({x:e.x+m*f,y:e.y+_*f,z:e.z+p*f});this._chunks.has(g)&&i.add(g)}}const c=[0],h=[0],u=[0];o.x===0?c.push(-1):o.x===on&&c.push(1),o.y===0?h.push(-1):o.y===on&&h.push(1),o.z===0?u.push(-1):o.z===on&&u.push(1);for(const d of c)for(const f of h)for(const m of u){if(d===0&&f===0&&m===0)continue;const _=Ke.globalCoordinateToChunkId({x:e.x+d,y:e.y+f,z:e.z+m});this._chunks.has(_)&&i.add(_)}return[...i]}_setBlockTypes(e){this._blockTypes.clear(),this._blockTypeList=e.map(aS);for(const t of this._blockTypeList)this._blockTypes.set(t.id,t)}}function wd(s){const e=s.trimeshIndices?new Uint32Array(s.trimeshIndices):void 0,t=s.trimeshVertices?new Float32Array(s.trimeshVertices):void 0;return{id:s.id,name:s.name,textureUri:s.textureUri,isLiquid:s.isLiquid,lightLevel:s.lightLevel,durability:s.durability,customColliderOptions:s.customColliderOptions,isCustom:s.isCustom,isMultiTexture:s.isMultiTexture,textureUris:{...s.textureUris},aoIntensity:[...s.aoIntensity],axisPassMask:s.axisPassMask,color:[...s.color],isTranslucent:s.isTranslucent,transparencyRatio:s.transparencyRatio,...s.trimeshOcclusionProfile?{trimeshOcclusionProfile:{...s.trimeshOcclusionProfile}}:{},...e?{trimeshIndices:e}:{},...s.trimeshTriangleData?{trimeshTriangleData:s.trimeshTriangleData.map(n=>({...n}))}:{},...t?{trimeshVertices:t}:{}}}const bc="worldEditorColorMap",Ec="worldEditorUseColorMap",Tc="worldEditorAlphaMap",Cc="worldEditorUseAlphaMap",Uo="worldEditorAlphaTest",Ac="worldEditorEmissive",wc="worldEditorEmissiveIntensity",Rc="worldEditorEmissiveMap",Ic="worldEditorUseEmissiveMap",Lc="worldEditorFogColor",Pc="worldEditorFogEnabled",Dc="worldEditorFogNear",Bc="worldEditorFogFar",mr="vWorldEditorColorMapUv",$o="vWorldEditorEmissiveMapUv",Yo="vWorldEditorWorldPos",fh=pt.basic,pS=new Ve,mS=fh.vertexShader.replace("#include <uv_pars_vertex>",`
      #include <uv_pars_vertex>
      varying vec2 ${mr};
      varying vec2 ${$o};
      varying vec3 ${Yo};
    `).replace("#include <uv_vertex>",`
      #include <uv_vertex>
      ${mr} = uv;
      ${$o} = uv;
    `).replace("#include <project_vertex>",`
      vec4 worldEditorWorldPosition = vec4(transformed, 1.0);
      #ifdef USE_BATCHING
        worldEditorWorldPosition = batchingMatrix * worldEditorWorldPosition;
      #endif
      #ifdef USE_INSTANCING
        worldEditorWorldPosition = instanceMatrix * worldEditorWorldPosition;
      #endif
      worldEditorWorldPosition = modelMatrix * worldEditorWorldPosition;
      ${Yo} = worldEditorWorldPosition.xyz;
      #include <project_vertex>
    `),gS=fh.fragmentShader.replace("#include <map_pars_fragment>",`
      uniform sampler2D ${bc};
      uniform bool ${Ec};
      uniform sampler2D ${Tc};
      uniform bool ${Cc};
      uniform float ${Uo};
      uniform vec3 ${Ac};
      uniform float ${wc};
      uniform sampler2D ${Rc};
      uniform bool ${Ic};
      varying vec2 ${mr};
      varying vec2 ${$o};
      varying vec3 ${Yo};
      uniform vec3 ${Lc};
      uniform bool ${Pc};
      uniform float ${Dc};
      uniform float ${Bc};

      vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
        if (!${Pc}) {
          return color;
        }

        float fogFactor = smoothstep(${Dc}, ${Bc}, length(worldPos.xz - cameraPosition.xz));
        return mix(color, ${Lc}, fogFactor);
      }
    `).replace("#include <alphamap_pars_fragment>","").replace("#include <alphatest_pars_fragment>","").replace("#include <map_fragment>",`
      if (${Ec}) {
        vec4 sampledDiffuseColor = texture2D(${bc}, ${mr});
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
      if (${Cc}) {
        diffuseColor.a *= texture2D(${Tc}, ${mr}).g;
      }
    `).replace("#include <alphatest_fragment>",`
      if (${Uo} > 0.0 && diffuseColor.a < ${Uo}) {
        discard;
      }
    `).replace("#include <opaque_fragment>",`
      vec3 emissiveColor = ${Ac} * ${wc};
      if (${Ic}) {
        emissiveColor *= texture2D(${Rc}, ${$o}).rgb;
      }
      outgoingLight += emissiveColor;
      #include <opaque_fragment>
    `).replace("#include <fog_fragment>",`
      gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, ${Yo});
    `);class _S extends Gt{constructor(t){const{alphaMap:n,alphaTest:i,color:r,emissive:o,emissiveIntensity:a,emissiveMap:l,fogUniformProvider:c,map:h,...u}=t||{};super({...u,uniforms:Nn.clone(fh.uniforms),vertexShader:mS,fragmentShader:gS,fog:!1,lights:!1,clipping:!0,toneMapped:!0});R(this,"_color");R(this,"_emissive");R(this,"_uvScrollSpeed",pS);R(this,"_colorMap");R(this,"_alphaMap");R(this,"_alphaTestValue");R(this,"_emissiveMap");R(this,"_emissiveIntensityValue");R(this,"_fogUniformProvider");R(this,"_shaderProcessors",[]);this.defines={...this.defines||{},USE_UV:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0]},this._color=new me(r??16777215),this._colorMap=h??null,this._alphaMap=n??null,this._alphaTestValue=i??0,this._emissive=new me(o??0),this._emissiveMap=l??null,this._emissiveIntensityValue=a??1,this._fogUniformProvider=c??null,this.bindUniforms()}get color(){return this._color}get customEmissive(){return this._emissive}get customEmissiveIntensity(){return this._emissiveIntensityValue}addShaderProcessor(t,n=!1){n?this._shaderProcessors.push(t):this._shaderProcessors.unshift(t),this.needsUpdate=!0}onBeforeCompile(t,n){for(const i of this._shaderProcessors)i(t,n)}customProgramCacheKey(){return`${super.customProgramCacheKey()}|processors=${this._shaderProcessors.map(t=>t.toString()).join("|")}`}bindUniforms(){const t=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms[bc]={get value(){return t._colorMap}},this.uniforms[Ec]={get value(){return t._colorMap!==null}},this.uniforms[Tc]={get value(){return t._alphaMap}},this.uniforms[Cc]={get value(){return t._alphaMap!==null}},this.uniforms[Uo]={get value(){return t._alphaTestValue}},this.uniforms[Ac]={value:this._emissive},this.uniforms[wc]={get value(){return t._emissiveIntensityValue}},this.uniforms[Rc]={get value(){return t._emissiveMap}},this.uniforms[Ic]={get value(){return t._emissiveMap!==null}},this.uniforms[Lc]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.color())??t.color}},this.uniforms[Pc]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.enabled())??!1}},this.uniforms[Dc]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.near())??0}},this.uniforms[Bc]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.far())??0}},this.uniforms.uvScroll={value:this._uvScrollSpeed}}}function ot(s,e,t){const n=t*2+1;return(e+t)*n+(s+t)}function Xi(s){return Math.max(0,Math.min(1,s))}function ph(s,e,t,n){const i=s[ot(e,t,n)];let r=0;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)o===0&&a===0||Math.abs(e+o)>n||Math.abs(t+a)>n||(r=Math.max(r,Math.abs(i-s[ot(e+o,t+a,n)])));return r}function Ko(s,e,t,n,i=0){let r={x:0,z:0},o=-1/0;for(let a=-s+e;a<=s-e;a++)for(let l=-s+e;l<=s-e;l++){if(n&&Math.hypot(a-n.x,l-n.z)<i)continue;const c=t(a,l);c>o&&(o=c,r={x:a,z:l})}return r}function Uc(s,e,t,n){let i=0,r=0;for(let o=e.x-t;o<=e.x+t;o++)for(let a=e.z-t;a<=e.z+t;a++)Math.abs(o)>n||Math.abs(a)>n||(i+=s[ot(o,a,n)],r+=1);return r>0?i/r:0}function op(s,e,t,n,i){const r=s*2+1,o=new Int16Array(r*r),a=new Float32Array(r*r);for(let c=-s;c<=s;c++)for(let h=-s;h<=s;h++){const u=Math.hypot(c,h)/Math.max(1,s),d=Math.abs(i(e+101,Math.floor(c*.4),Math.floor(h*.4))-.5)*3.2,f=i(e+211,c,h)*1.8,m=Math.round(t+d+f-Math.max(0,u-.72)*5.5);o[ot(c,h,s)]=m}for(let c=-s;c<=s;c++)for(let h=-s;h<=s;h++){const u=ot(c,h,s),d=ph(o,c,h,s);a[u]=o[u]*.18+Math.max(0,1-d/5)*2.6-xS(c,h,s)*1.4}const l=Ko(s,Math.max(4,Math.floor(s*.28)),(c,h)=>a[ot(c,h,s)]);return{height:o,suitability:a,center:l}}function xS(s,e,t){return Math.max(0,Math.hypot(s,e)/Math.max(1,t)-.35)}function Rd(s,e,t){const n=[];e&&n.push(0);const i=-s+3,r=s-3,o=Math.max(4,Math.round(s/6));let a=i;for(;a<=r;){const l=Math.min(r,a+8);let c=a,h=1/0;for(let u=a;u<=l;u++){if(n.some(m=>Math.abs(m-u)<6))continue;const d=e?Math.abs(u)*.03:Math.abs(u)*.02,f=t(u)+d;f<h&&(h=f,c=u)}n.push(c),a=c+Math.max(6,Math.round((r-i)/o))}return n.push(i),n.push(r),[...new Set(n)].sort((l,c)=>l-c)}function Id(s,e,t,n){let i=0;for(let r=-e;r<=e;r++)i+=s[ot(n?t:r,n?r:t,e)];return i}function vS(s,e,t,n){const i=`${s.x},${s.z}`,r=`${e.x},${e.z}`,o=[s],a=new Map,l=new Map([[i,0]]);for(;o.length>0;){o.sort((f,m)=>{const _=`${f.x},${f.z}`,p=`${m.x},${m.z}`,g=(l.get(_)??1/0)+Math.abs(f.x-e.x)+Math.abs(f.z-e.z),v=(l.get(p)??1/0)+Math.abs(m.x-e.x)+Math.abs(m.z-e.z);return g-v});const u=o.shift();if(!u)break;const d=`${u.x},${u.z}`;if(d===r)break;for(const[f,m]of[[1,0],[-1,0],[0,1],[0,-1]]){const _={x:u.x+f,z:u.z+m};if(Math.abs(_.x)>t||Math.abs(_.z)>t)continue;const p=`${_.x},${_.z}`,g=n[ot(_.x,_.z,t)],v=(l.get(d)??1/0)+g;v>=(l.get(p)??1/0)||(l.set(p,v),a.set(p,d),o.some(b=>b.x===_.x&&b.z===_.z)||o.push(_))}}const c=[];let h=r;for(;h;){const[u,d]=h.split(",").map(Number);if(c.push({x:u,z:d}),h===i)break;h=a.get(h)}return c.reverse()}function ur(s,e,t,n,i=0){const r=s.maxX-s.minX+1,o=s.maxZ-s.minZ+1;if(r<e*2||o<t*2)return[s];if(r>o?!0:o>r?!1:n(i)>.5){const u=s.minX+e-1,d=s.maxX-e;if(u>=d)return[s];const f=u+Math.floor(n(i+1)*Math.max(1,d-u+1));return[...ur({minX:s.minX,maxX:f,minZ:s.minZ,maxZ:s.maxZ},e,t,n,i+11),...ur({minX:f+1,maxX:s.maxX,minZ:s.minZ,maxZ:s.maxZ},e,t,n,i+19)]}const l=s.minZ+t-1,c=s.maxZ-t;if(l>=c)return[s];const h=l+Math.floor(n(i+2)*Math.max(1,c-l+1));return[...ur({minX:s.minX,maxX:s.maxX,minZ:s.minZ,maxZ:h},e,t,n,i+23),...ur({minX:s.minX,maxX:s.maxX,minZ:h+1,maxZ:s.maxZ},e,t,n,i+31)]}function Nc(s){return{x:Math.floor((s.minX+s.maxX)/2),z:Math.floor((s.minZ+s.maxZ)/2)}}const il=[{id:"overworld",label:"Overworld",description:"Minecraft-like overworld with biomes, caves, rivers, trees, and a small village.",defaultSize:48,defaultHeight:12},{id:"arena",label:"Arena",description:"Circular combat bowl with walls, pillars, and a marked center.",defaultSize:18,defaultHeight:4},{id:"floating-island",label:"Floating Island",description:"Suspended landmass with a pond and a small tree.",defaultSize:16,defaultHeight:12},{id:"fortress",label:"Fortress",description:"Square stronghold with towers, gate, and a raised keep.",defaultSize:18,defaultHeight:6},{id:"downtown",label:"Downtown",description:"Dense city blocks with crossroads, towers, and a central plaza.",defaultSize:20,defaultHeight:9},{id:"castle",label:"Castle",description:"Layered castle walls with gatehouse, courtyard, and central keep.",defaultSize:22,defaultHeight:8},{id:"archipelago",label:"Archipelago",description:"Scattered islands, shallow water, and uneven shorelines.",defaultSize:22,defaultHeight:5},{id:"canyon",label:"Canyon",description:"Layered mesas cut by a winding canyon river.",defaultSize:24,defaultHeight:10},{id:"pine-valley",label:"Pine Valley",description:"Rolling hills, pine patches, and a shallow stream bed.",defaultSize:24,defaultHeight:8},{id:"kingdom",label:"Kingdom",description:"Large mixed world with macro terrain, regions, roads, downtown, castle, and forests.",defaultSize:56,defaultHeight:12}];function yS(s,e){switch(s.theme){case"overworld":return MS(s,e);case"arena":return SS(s,e);case"floating-island":return bS(s,e);case"fortress":return ES(s,e);case"downtown":return ap(s,e);case"castle":return lp(s,e);case"archipelago":return TS(s,e);case"canyon":return CS(s,e);case"pine-valley":return AS(s,e);case"kingdom":return wS(s,e)}}function MS(s,e){const t={},n=gt(s.size,24,96),i=gt(s.height,7,24),r=n*2+1,o=Math.max(3,Math.round(i*.35)),a=-12,l=On(s.seed),c=new Int16Array(r*r),h=new Float32Array(r*r),u=new Float32Array(r*r),d=new Float32Array(r*r),f=new Float32Array(r*r),m=new Float32Array(r*r),_=new Float32Array(r*r),p=new Uint8Array(r*r),g=l()*Math.PI*2,v=l()*Math.PI*2;for(let M=-n;M<=n;M++){const T=Math.sin(M*.041+g)*n*.22+Math.sin(M*.097+v)*n*.08;for(let A=-n;A<=n;A++){const C=ot(M,A,n),x=Math.hypot(M,A)/Math.max(1,n),S=Nd(ze(s.seed+17,Math.floor(M*.065),Math.floor(A*.065))*2-1)-Math.max(0,x-.82)*.65,V=Xi(ze(s.seed+101,Math.floor(M*.085),Math.floor(A*.085))*.75+ze(s.seed+181,Math.floor(M*.19),Math.floor(A*.19))*.25),I=Nd((ze(s.seed+293,Math.floor(M*.11),Math.floor(A*.11))-.5)*2),k=Xi(.18+ze(s.seed+401,Math.floor(M*.08),Math.floor(A*.08))*.55+Math.max(0,1-Math.abs(A-T)/18)*.24),O=Xi(.62+ze(s.seed+503,Math.floor(M*.07),Math.floor(A*.07))*.36-Math.max(0,x-.4)*.12),N=Math.abs(A-T),F=Math.pow(Math.max(0,1-Math.abs(I)),1.35),H=Math.max(0,I)*8.5+F*4.5,z=V*8,ee=S<-.22?o-6+S*6:i+S*14,Q=Math.max(0,5.5-N)*(.45+(1-V)*.5),oe=Math.round(ee+H-z-Q);c[C]=oe,h[C]=k,u[C]=O,d[C]=S,f[C]=V,m[C]=I,_[C]=N,p[C]=RS(oe,o,S,V,k,O,N)}}for(let M=-n;M<=n;M++)for(let T=-n;T<=n;T++){const A=ot(M,T,n),C=c[A],x=p[A];IS(t,M,T,C,o,a,x,e)}LS(t,n,a,c,o,s.seed);for(let M=-n;M<=n;M++)for(let T=-n;T<=n;T++){const A=ot(M,T,n),C=p[A],x=Mh(t,M,T);if(!(x<=o||C===gh||C===mh)){if(C===_r||C===xr||C===gr){const S=C===_r?.042:C===xr?.036:.012,V=ze(s.seed+701,M,T);V<S&&BS(t,M,T,x+1,2)?C===xr?sa(t,{x:M,y:x+1,z:T},4+Math.floor(ze(s.seed+733,M,T)*4),e.wood,e.leaves):PS(t,{x:M,y:x+1,z:T},4+Math.floor(ze(s.seed+727,M,T)*3),e.wood,e.leaves):C===gr&&V>.93&&j(t,{x:M,y:x+1,z:T},e.leaves)}C===yh&&ze(s.seed+809,M,T)>.958&&DS(t,{x:M,y:x+1,z:T},1+Math.floor(ze(s.seed+877,M,T)*2),e.stone,e.accent),(C===_h||C===xh)&&ze(s.seed+919,M,T)>.972&&j(t,{x:M,y:x+1,z:T},e.wood)}}const b=Ko(n,Math.max(10,Math.floor(n*.22)),(M,T)=>{const A=ot(M,T,n),C=p[A];return C!==gr&&C!==_r?-1/0:2.8-ph(c,M,T,n)*1.2+Math.max(0,1-_[A]/18)*.7+f[A]*.5+d[A]*.2});return US(t,b,Math.max(o+1,Math.round(Uc(c,b,3,n))),e,s.seed),{blocks:t,bounds:{min:{x:-n,y:a,z:-n},max:{x:n,y:i+28,z:n}}}}function SS(s,e){const t={},n=gt(s.size,8,40),i=gt(s.height,3,10),r=On(s.seed),o=Math.max(2,Math.floor(n*.18)),a=Math.floor(r()*4);for(let c=-n-3;c<=n+3;c++)for(let h=-n-3;h<=n+3;h++){const u=Math.hypot(c,h),d=(ze(s.seed,c,h)-.5)*1.8,f=-Math.max(0,Math.round((1-Math.min(1,u/(n*.74)))*o));if(u<=n+d){for(let _=-2;_<f;_++)j(t,{x:c,y:_,z:h},e.stone);j(t,{x:c,y:f-1,z:h},e.stone),j(t,{x:c,y:f,z:h},u<n*.68?e.sand:e.stone)}else u<=n+3+d*.5&&r()>.42&&j(t,{x:c,y:-1,z:h},e.grass);const m=a===0&&h>=n-1&&Math.abs(c)<=2||a===1&&c>=n-1&&Math.abs(h)<=2||a===2&&h<=-n+1&&Math.abs(c)<=2||a===3&&c<=-n+1&&Math.abs(h)<=2;if(u>=n-1.4&&u<=n+.8+d*.25&&!m)for(let _=1;_<=i;_++){const p=_===i?e.accent:e.wall;j(t,{x:c,y:_,z:h},p)}(Math.abs(c)<=1||Math.abs(h)<=1)&&u<n-2&&j(t,{x:c,y:f,z:h},e.accent),u<n*.2&&j(t,{x:c,y:1,z:h},e.accent)}const l=Math.floor(n*.55);for(const[c,h]of[[-l,-l],[-l,l],[l,-l],[l,l]])Mi(t,{x:c,y:1,z:h},i+2,e.wall,e.accent);return{blocks:t,bounds:{min:{x:-n-3,y:-2,z:-n-3},max:{x:n+3,y:i+2,z:n+3}}}}function bS(s,e){const t={},n=gt(s.size,10,36),i=gt(s.height,6,24),r=Math.max(5,Math.floor(n*.45)),o=On(s.seed),a=new Map;for(let f=-n;f<=n;f++)for(let m=-n;m<=n;m++){const _=Math.hypot(f/n,m/n);if(_>1.02)continue;const p=(ze(s.seed+41,f,m)-.5)*1.8+(ze(s.seed+83,f*2,m*2)-.5)*.8,g=Math.round(i+r-1-_*2.8+p),v=Math.max(4,Math.round((1.08-_)*r*1.75+ze(s.seed+149,f,m)*3)),b=g-v;a.set(`${f},${m}`,g);for(let M=b;M<=g;M++){const T=g-M,A=T===0?e.grass:T<=2?e.wall:e.stone;j(t,{x:f,y:M,z:m},A)}}const l=Math.max(2,Math.floor(n*.16));for(let f=-l;f<=l;f++)for(let m=-l;m<=l;m++){if(f*f+m*m>l*l)continue;const _=a.get(`${f},${m}`)??i+r-1;j(t,{x:f,y:_,z:m},e.water)}const c=Math.max(4,Math.floor(n*.28)),h={x:-Math.floor(n*.28),y:(a.get(`${-Math.floor(n*.28)},${Math.floor(n*.12)}`)??i+r-1)+1,z:Math.floor(n*.12)};for(let f=0;f<c;f++)j(t,{x:h.x,y:h.y+f,z:h.z},e.wood);const u={x:h.x,y:h.y+c,z:h.z};for(let f=-3;f<=3;f++)for(let m=-2;m<=2;m++)for(let _=-3;_<=3;_++)f*f+m*m*1.4+_*_>9||j(t,{x:u.x+f,y:u.y+m,z:u.z+_},e.leaves);const d=2+Math.floor(o()*3);for(let f=0;f<d;f++){const m=Math.round((o()*2-1)*n*.68),_=Math.round((o()*2-1)*n*.68),p=(a.get(`${m},${_}`)??i)-Math.max(5,Math.floor(r*.8)),g=3+Math.floor(o()*4);for(let v=0;v<g;v++)j(t,{x:m,y:p-v,z:_},v===g-1?e.accent:e.wall)}return{blocks:t,bounds:{min:{x:-n,y:i-r,z:-n},max:{x:n,y:i+r+c+2,z:n}}}}function ES(s,e){const t={},n=gt(s.size,10,40),i=gt(s.height,4,12),r=On(s.seed),o=Math.max(4,Math.floor(n*.35)),a=2,l=n-4,c=Math.floor(r()*4),h=op(n+2,s.seed,0,!0,ze),u={x:gt(h.center.x,-2,2),z:gt(h.center.z,-2,2)};for(let d=-n-2;d<=n+2;d++)for(let f=-n-2;f<=n+2;f++){const m=d+u.x,_=f+u.z,p=ot(m,_,n+2),g=Math.max(0,h.height[p]),v=Math.abs(d)<=n&&Math.abs(f)<=n;for(let T=-1;T<g;T++)j(t,{x:m,y:T,z:_},e.stone);v?j(t,{x:m,y:g,z:_},Math.abs(d)<=l&&Math.abs(f)<=l?Math.max(Math.abs(d),Math.abs(f))<l*.4?e.sand:e.grass:e.wall):Math.abs(d)<=n+2&&Math.abs(f)<=n+2&&j(t,{x:m,y:g,z:_},e.stone);const b=Math.abs(d)===n||Math.abs(f)===n,M=Fc(c,n,d,f,2);if(b&&!M)for(let T=1;T<=i;T++)j(t,{x:m,y:g+T,z:_},T===i?e.accent:e.wall)}for(const[d,f]of[[-n,-n],[-n,n],[n,-n],[n,n]])for(let m=-a;m<=a;m++)for(let _=-a;_<=a;_++)m*m+_*_>(a+.4)*(a+.4)||Mi(t,{x:u.x+d+m,y:1+Math.max(0,h.height[ot(u.x+d+m,u.z+f+_,n+2)]),z:u.z+f+_},i+3,e.wall,e.accent);for(let d=-o;d<=o;d++)for(let f=-o;f<=o;f++){const m=u.x+d,_=u.z+f,p=1+Math.max(0,h.height[ot(m,_,n+2)]);if(j(t,{x:m,y:p,z:_},e.stone),Math.abs(d)===o||Math.abs(f)===o)for(let v=2;v<=i+1;v++)j(t,{x:m,y:p+v-1,z:_},v===i+1?e.accent:e.wall)}return kc(t,u,c,n,2,3),HS(t,u,l,c,e),WS(t,u,c,n,e),{blocks:t,bounds:{min:{x:-n-2,y:-1,z:-n-2},max:{x:n+2,y:i+3,z:n+2}}}}function ap(s,e){const t={},n=gt(s.size,12,42),i=gt(s.height,5,18),r=On(s.seed),o=1+Math.floor(r()*2),a=o+1,l=n*2+1,c=new Float32Array(l*l);for(let _=-n;_<=n;_++)for(let p=-n;p<=n;p++){const g=Math.hypot(_,p)/n,v=Math.abs(_)*.02+Math.abs(p)*.02,b=Math.abs(ze(s.seed+201,Math.floor(_*.28),Math.floor(p*.28))-.5)*1.2,M=ze(s.seed+71,_,p)*.8;c[ot(_,p,n)]=1+v+b+M+Math.max(0,g-.75)*3.2}const h=Rd(n,!0,_=>Id(c,n,_,!0)),u=Rd(n,!1,_=>Id(c,n,_,!1)),d=h[Math.floor(h.length/2)]??0,f=u[Math.floor(u.length/2)]??0;for(let _=-n;_<=n;_++)for(let p=-n;p<=n;p++)j(t,{x:_,y:-1,z:p},e.stone),j(t,{x:_,y:0,z:p},e.sand);for(const _ of h)Ar(t,{x:_,z:-n},{x:_,z:n},_===d?a:o,_===d?e.accent:e.wall,e.stone);for(const _ of u)Ar(t,{x:-n,z:_},{x:n,z:_},_===f?a:o,_===f?e.accent:e.wall,e.stone);const m=ZS(d,f,h,u,r);for(const[_,p]of m){const g=vS(_,p,n,c);JS(t,g,o,e.wall,e.stone)}for(const _ of h)for(const p of u){const g=(_===d||p===f)&&r()>.45?2+Math.floor(r()*2):1;for(let v=-g;v<=g;v++)for(let b=-g;b<=g;b++)Math.abs(v)+Math.abs(b)>g+1||j(t,{x:_+v,y:0,z:p+b},e.accent)}for(let _=0;_<h.length-1;_++)for(let p=0;p<u.length-1;p++){const g=h[_]===d?a:o,v=h[_+1]===d?a:o,b=u[p]===f?a:o,M=u[p+1]===f?a:o,T=h[_]+g+2,A=h[_+1]-v-2,C=u[p]+b+2,x=u[p+1]-M-2;if(A-T<4||x-C<4)continue;const S={minX:T,maxX:A,minZ:C,maxZ:x},V=Nc(S),I=YS(V,d,f,s.seed,m),k=I==="civic"?8:I==="market"?5:4,O=ur(S,k,k,N=>ze(s.seed+1403+N,V.x,V.z));for(const N of O){if(KS(t,N,I,e),I==="green"&&N.maxX-N.minX>4&&N.maxZ-N.minZ>4){const F=Nc(N);sa(t,{x:F.x,y:1,z:F.z},4+Math.floor(r()*3),e.wood,e.leaves);continue}jS(t,N,I,i,e,r,h,u)}}return{blocks:t,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+2,z:n}}}}function lp(s,e){const t={},n=gt(s.size,14,44),i=gt(s.height,5,16),r=On(s.seed),o=Math.max(6,n-(4+Math.floor(r()*4))),a=Math.max(4,Math.floor(n*(.22+r()*.14))),l=n+2+Math.floor(r()*3),c=Math.floor(r()*4),h=Math.max(o+2,n-3),u=op(l,s.seed+57,0,!0,ze),d={x:gt(u.center.x,-2,2),z:gt(u.center.z,-2,2)};for(let f=-l;f<=l;f++)for(let m=-l;m<=l;m++){const _=f+d.x,p=m+d.z,g=Math.max(0,u.height[ot(_,p,l)]);if(j(t,{x:_,y:-2,z:p},e.stone),Math.abs(f)<=l&&Math.abs(m)<=l&&j(t,{x:_,y:-1,z:p},Math.abs(f)===l||Math.abs(m)===l?e.water:e.stone),Math.abs(f)<=n&&Math.abs(m)<=n){const v=Math.abs(f)<=o&&Math.abs(m)<=o,b=Math.abs(f)<=h&&Math.abs(m)<=h;for(let M=0;M<g;M++)j(t,{x:_,y:M,z:p},e.stone);j(t,{x:_,y:g,z:p},v?e.grass:b?e.sand:e.wall)}}for(let f=-n;f<=n;f++)for(let m=-n;m<=n;m++){const _=Math.abs(f)===n||Math.abs(m)===n,p=Math.abs(f)===o||Math.abs(m)===o,g=Fc(c,n,f,m,2),v=f+d.x,b=m+d.z,M=Math.max(0,u.height[ot(v,b,l)]);if(_&&!g)for(let T=1;T<=i;T++)j(t,{x:v,y:M+T,z:b},T===i?e.accent:e.wall);if(p&&!Fc(c,o,f,m,1))for(let T=1;T<=i-1;T++)j(t,{x:v,y:M+T,z:b},T===i-1?e.accent:e.wall)}for(const[f,m]of[[-n,-n],[-n,n],[n,-n],[n,n],[-o,-o],[-o,o],[o,-o],[o,o]])for(let _=-1;_<=1;_++)for(let p=-1;p<=1;p++){const g=d.x+f+_,v=d.z+m+p,b=1+Math.max(0,u.height[ot(g,v,l)]);Mi(t,{x:g,y:b,z:v},i+3,e.wall,e.accent)}for(let f=-a;f<=a;f++)for(let m=-a;m<=a;m++){const _=d.x+f,p=d.z+m,g=1+Math.max(0,u.height[ot(_,p,l)]);j(t,{x:_,y:g,z:p},e.stone);for(let v=2;v<=i+3;v++)!(Math.abs(f)===a||Math.abs(m)===a)&&v!==i+3||j(t,{x:_,y:g+v-1,z:p},v===i+3?e.accent:e.wall)}return $S(t,d,c,o,l,e),kc(t,d,c,n,2,3),kc(t,d,c,o,1,3),qS(t,d,o,a,c,e),{blocks:t,bounds:{min:{x:-l,y:-2,z:-l},max:{x:l,y:i+3,z:l}}}}function TS(s,e){const t={},n=gt(s.size,14,44),i=gt(s.height,3,10),r=On(s.seed),o=4+Math.floor(r()*4),a=Array.from({length:o},()=>({x:Math.round((r()*2-1)*n*.72),z:Math.round((r()*2-1)*n*.72),radius:4+Math.floor(r()*Math.max(4,n*.18)),height:i+Math.floor(r()*3)}));for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){j(t,{x:l,y:-2,z:c},e.stone),j(t,{x:l,y:-1,z:c},e.water);let h=0,u=0,d=0;for(const _ of a){const g=1-Math.hypot(l-_.x,c-_.z)/_.radius;d+=Math.max(0,g),!(g<=h)&&(h=g,u=_.height)}if(h<=0)continue;const f=ze(s.seed+211,Math.floor(l*.5),Math.floor(c*.5)),m=Math.max(1,Math.round(h*u+Math.max(0,d-1.2)+f*1.4));for(let _=0;_<m;_++){const p=_===m-1?h>.74?e.grass:e.sand:_>=m-2?e.wall:e.stone;j(t,{x:l,y:_,z:c},p)}h<.38&&d>.7&&j(t,{x:l,y:0,z:c},e.sand),h>.72&&ze(s.seed*3+17,l,c)>.78&&kS(t,{x:l,y:m,z:c},3+Math.floor(r()*2),e.wood,e.leaves)}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+5,z:n}}}}function CS(s,e){const t={},n=gt(s.size,16,48),i=gt(s.height,6,18),r=s.seed*.0013;for(let o=-n;o<=n;o++){const a=Math.sin(o*.18+r)*n*.28+Math.sin(o*.07-r*1.7)*n*.14;for(let l=-n;l<=n;l++){const c=Math.abs(l-a),h=ze(s.seed+91,o,l)*2.2+ze(s.seed+313,o*2,l*2)*1.2,u=Math.abs(ze(s.seed+517,Math.floor(o*.33),Math.floor(l*.33))-.5)*3.4,d=Math.max(2,Math.round(i+h+u)),f=Math.max(0,Math.round((8-c)*.9)),m=d-f;for(let _=-2;_<=m;_++){let p=e.stone;_===m&&c<2.5?p=e.water:_===m?p=m>i+1?e.sand:e.accent:_>=m-1?p=e.wall:(m-_)%4===0&&c>4&&(p=e.accent),j(t,{x:o,y:_,z:l},p)}c>8&&m>i+4&&ze(s.seed+887,o,l)>.91&&Mi(t,{x:o,y:m+1,z:l},2+Math.round(ze(s.seed+991,o,l)*3),e.wall,e.accent)}}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+4,z:n}}}}function AS(s,e){const t={},n=gt(s.size,16,48),i=gt(s.height,5,16),r=On(s.seed);for(let o=-n;o<=n;o++){const a=Math.sin(o*.15+s.seed*.0021)*n*.18,l=Math.sin(o*.09-s.seed*.0014)*n*.08+n*.22;for(let c=-n;c<=n;c++){const h=ze(s.seed+19,o,c)*2.8+ze(s.seed+211,o*2,c*2)*1.3,u=Math.round(i*.55+h),d=Math.max(0,Math.round(4-Math.abs(c-a)))+Math.max(0,Math.round(2-Math.abs(c-l))),f=Math.max(1,u-d),m=ze(s.seed+433,Math.floor(o*.4),Math.floor(c*.4));for(let _=-1;_<=f;_++){const g=_===f?Math.abs(c-a)<1.6||Math.abs(c-l)<1.1?e.water:m>.78?e.sand:e.grass:_>=f-2?e.wall:e.stone;j(t,{x:o,y:_,z:c},g)}if(f>=2&&Math.abs(c-a)>3){const _=.02+ze(s.seed+701,o,c)*.06+Math.max(0,m-.7)*.04;r()<_&&sa(t,{x:o,y:f+1,z:c},4+Math.floor(r()*4),e.wood,e.leaves)}}}return{blocks:t,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+8,z:n}}}}function wS(s,e){const t={},n=gt(s.size,28,96),i=gt(s.height,8,24),r=On(s.seed),o=Math.max(18,Math.round(n*.38)),a=Math.max(20,Math.round(n*.34)),l=n*2+1,c=new Int16Array(l*l),h=new Float32Array(l*l),u=new Float32Array(l*l),d=new Float32Array(l*l),f=new Float32Array(l*l),m=r()*Math.PI*2,_=r()*Math.PI*2;for(let C=-n;C<=n;C++){const x=Math.sin(C*.045+m)*n*.24+Math.sin(C*.11+_)*n*.07;for(let S=-n;S<=n;S++){const V=Math.hypot(C,S)/n,I=(ze(s.seed+13,Math.floor(C*.18),Math.floor(S*.18))-.5)*10.5,k=ze(s.seed+73,C,S)*3.1+ze(s.seed+193,C*2,S*2)*1.9,O=Math.pow(Math.abs(ze(s.seed+311,C,S)-.5)*2,1.35)*8.4,N=Math.max(0,V-.74)*12,F=Math.abs(S-x),H=Math.max(0,8.4-F)*1.05,z=Math.max(-2,Math.round(i+I+k+O-N-H)),ee=Xi(.26+ze(s.seed+401,Math.floor(C*.33),Math.floor(S*.33))*.28+Math.max(0,1-F/14)*.48-Math.max(0,V-.68)*.25),Q=Xi(.58-z/Math.max(10,i+12)*.28+ze(s.seed+557,Math.floor(C*.26),Math.floor(S*.26))*.24);c[ot(C,S,n)]=z,h[ot(C,S,n)]=ee,u[ot(C,S,n)]=Q;for(let oe=-2;oe<=z;oe++){let de=e.stone;oe===z&&z<=0?de=e.water:oe===z?de=ee>.58?e.grass:Q>.66?e.sand:e.grass:oe>=z-2&&(de=ee>.58?e.wall:e.stone),j(t,{x:C,y:oe,z:S},de)}}}for(let C=-n;C<=n;C++)for(let x=-n;x<=n;x++){const S=ot(C,x,n),V=ph(c,C,x,n);d[S]=V;const I=Dd(C,x,n,m,_);f[S]=Xi(.62-Math.min(1,V/6)*.46-Math.max(0,(c[S]-i-3)/18)*.24+(1-Math.min(1,I/28))*.2+(1-Math.min(1,Math.hypot(C,x)/n))*.12)}const p=Ko(n,Math.max(10,Math.floor(o*.42)),(C,x)=>{const S=ot(C,x,n);return f[S]+h[S]*.08}),g=Ko(n,Math.max(10,Math.floor(a*.38)),(C,x)=>{const S=ot(C,x,n),V=Math.hypot(C-p.x,x-p.z),I=Math.abs(V-n*.34);return Xi(.18+Math.min(1,(c[S]-i+4)/16)*.42+Math.max(0,1-d[S]/5.2)*.26+Math.max(0,1-I/(n*.22))*.18-Math.max(0,h[S]-.72)*.18)},p,Math.max(18,Math.floor(n*.28))),v=Math.max(1,Math.round(Uc(c,p,5,n))),b=Math.max(v+3,Math.round(Uc(c,g,5,n))+2);Bd(t,p,o+6,v,e.stone,e.sand),Bd(t,g,a+8,b,e.stone,e.grass);const M=ap({seed:s.seed*17+5,size:o,height:Math.max(8,Math.round(i*.8))},e);Yi(t,M.blocks,{x:p.x,y:v,z:p.z});const T=lp({seed:s.seed*29+7,size:a,height:Math.max(7,Math.round(i*.75))},e);Yi(t,T.blocks,{x:g.x,y:b,z:g.z});const A=QS(p,g,n,d,h,c);Ar(t,p,A,1,e.accent,e.stone),Ar(t,A,g,1,e.accent,e.stone);for(let C=-n;C<=n;C++)for(let x=-n;x<=n;x++){const S=Math.hypot(C-p.x,x-p.z)<o*.72,V=Math.hypot(C-g.x,x-g.z)<a*.75,I=Math.min(Oc({x:C,z:x},p,A),Oc({x:C,z:x},A,g))<3.2;if(S||V||I)continue;const k=ot(C,x,n),O=c[k];if(O<1)continue;const N=h[k],F=u[k],H=d[k],z=Dd(C,x,n,m,_);if(N>.43&&N<.72&&F>.42&&H<2.4&&z<18&&Math.hypot(C-p.x,x-p.z)<o*1.45){eb(t,{x:C,y:O,z:x},e,s.seed);continue}const Q=.014+Math.max(0,N-.42)*.08+ze(s.seed+809,C,x)*.03;N>.5&&H<4.8&&r()<Q?sa(t,{x:C,y:O+1,z:x},4+Math.floor(r()*4),e.wood,e.leaves):O>i+8&&H<3.8&&ze(s.seed+991,C,x)>.84&&Mi(t,{x:C,y:O+1,z:x},2+Math.floor(r()*3),e.wall,e.accent)}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+24,z:n}}}}const mh=0,gh=1,_h=2,xh=3,gr=4,_r=5,xr=6,vh=7,yh=8;function RS(s,e,t,n,i,r,o){return s<=e-4||t<-.42?mh:s<=e||t<-.16?gh:o<2.2&&s<=e+4?xh:s<=e+2?_h:s>=e+14&&n<.4?yh:r>.74&&i<.38?vh:r<.4&&i>.46?xr:i>.52?_r:gr}function IS(s,e,t,n,i,r,o,a){const l=Math.max(n,i);for(let c=r;c<=l;c++){const h=n-c;let u=a.stone;c>n?u=a.water:h===0?u=Ld(o,n,i,!0,a):h<=3?u=Ld(o,n,i,!1,a):o===vh&&h<=6&&(u=a.sand),j(s,{x:e,y:c,z:t},u)}}function Ld(s,e,t,n,i){switch(s){case mh:case gh:return n?i.sand:i.stone;case _h:case xh:return n?i.sand:i.wall;case vh:return i.sand;case xr:return n?i.accent:i.wall;case yh:return n&&e>t+18?i.accent:i.stone;case _r:case gr:default:return n?i.grass:i.wall}}function LS(s,e,t,n,i,r){for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){const l=n[ot(o,a,e)],c=Math.min(l-3,i+18);for(let h=t+2;h<=c;h++){const u=sl(r+3001,o*.18,h*.22,a*.18)+sl(r+3119,o*.09,h*.11,a*.09)*.7,d=Math.abs(sl(r+3251,o*.07,h*.1,a*.07)-.5),f=h<i-6?.96:1.08;(u>f||d<.04)&&j(s,{x:o,y:h,z:a},0)}}}function PS(s,e,t,n,i){for(let o=0;o<t;o++)j(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t;for(let o=-2;o<=2;o++)for(let a=-2;a<=1;a++)for(let l=-2;l<=2;l++)o*o+l*l+a*a*1.5>7.5||j(s,{x:e.x+o,y:r+a,z:e.z+l},i)}function DS(s,e,t,n,i){for(let r=-t;r<=t;r++)for(let o=0;o<=t;o++)for(let a=-t;a<=t;a++)r*r+o*o*1.3+a*a>(t+.2)*(t+.2)||j(s,{x:e.x+r,y:e.y+o,z:e.z+a},o===t?i:n)}function BS(s,e,t,n,i){for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)for(let a=0;a<=6;a++)if(s[ia({x:e+r,y:n+a,z:t+o})])return!1;return!0}function US(s,e,t,n,i){const r=On(i+4109),o=[{x:e.x-8,z:e.z},{x:e.x+8,z:e.z},{x:e.x,z:e.z-8},{x:e.x,z:e.z+8},e];for(const l of o)Ar(s,e,l,1,n.sand,n.wall);const a=[{x:-6,z:-4},{x:6,z:-4},{x:-6,z:4},{x:6,z:4}];for(const l of a)NS(s,{x:e.x+l.x,y:t,z:e.z+l.z},3+Math.floor(r()*2),n);FS(s,{x:e.x,y:t,z:e.z},n)}function NS(s,e,t,n){const i=e.x-t,r=e.x+t,o=e.z-t,a=e.z+t;for(let l=i;l<=r;l++)for(let c=o;c<=a;c++){j(s,{x:l,y:e.y,z:c},n.wall);for(let h=1;h<=3;h++)(l===i||l===r||c===o||c===a)&&j(s,{x:l,y:e.y+h,z:c},n.wood);j(s,{x:l,y:e.y+4,z:c},n.accent)}for(let l=e.y+1;l<=e.y+2;l++)j(s,{x:e.x,y:l,z:o},0)}function FS(s,e,t){for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)j(s,{x:e.x+n,y:e.y,z:e.z+i},t.wall),j(s,{x:e.x+n,y:e.y-1,z:e.z+i},n===0&&i===0?t.water:t.stone);for(const[n,i]of[[-2,-2],[2,-2],[-2,2],[2,2]])Mi(s,{x:e.x+n,y:e.y+1,z:e.z+i},3,t.wood,t.wood);for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)(Math.abs(n)===2||Math.abs(i)===2)&&j(s,{x:e.x+n,y:e.y+4,z:e.z+i},t.accent)}function Mi(s,e,t,n,i){for(let r=0;r<t;r++)j(s,{x:e.x,y:e.y+r,z:e.z},r===t-1?i:n)}function kS(s,e,t,n,i){for(let o=0;o<t;o++)j(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t;for(const[o,a]of[[2,0],[-2,0],[0,2],[0,-2],[1,1],[-1,1],[1,-1],[-1,-1]])j(s,{x:e.x+o,y:r,z:e.z+a},i);j(s,{x:e.x,y:r+1,z:e.z},i)}function sa(s,e,t,n,i){for(let o=0;o<t;o++)j(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t-1;for(let o=0;o<4;o++){const a=o<2?2:1;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++)Math.abs(l)+Math.abs(c)>a+1||j(s,{x:e.x+l,y:r-o,z:e.z+c},i)}j(s,{x:e.x,y:r+1,z:e.z},i)}function Fc(s,e,t,n,i){switch(s){case 0:return n===e&&Math.abs(t)<=i;case 1:return t===e&&Math.abs(n)<=i;case 2:return n===-e&&Math.abs(t)<=i;case 3:return t===-e&&Math.abs(n)<=i;default:return!1}}function OS(s,e,t,n,i){for(let r=t+1;r<=n;r++)for(let o=-1;o<=1;o++)switch(e){case 0:j(s,{x:o,y:-1,z:r},i.stone),j(s,{x:o,y:0,z:r},i.accent);break;case 1:j(s,{x:r,y:-1,z:o},i.stone),j(s,{x:r,y:0,z:o},i.accent);break;case 2:j(s,{x:o,y:-1,z:-r},i.stone),j(s,{x:o,y:0,z:-r},i.accent);break;case 3:j(s,{x:-r,y:-1,z:o},i.stone),j(s,{x:-r,y:0,z:o},i.accent);break}}function zS(s,e,t,n,i){for(let r=1;r<=i;r++)for(let o=-n;o<=n;o++)switch(e){case 0:j(s,{x:o,y:r,z:t},0);break;case 1:j(s,{x:t,y:r,z:o},0);break;case 2:j(s,{x:o,y:r,z:-t},0);break;case 3:j(s,{x:-t,y:r,z:o},0);break}}function VS(s,e,t,n){for(let r=-e;r<=e;r++)j(s,{x:0,y:0,z:r},n.accent),j(s,{x:r,y:0,z:0},n.accent);const i=e+4;for(let r=0;r<=i;r++)switch(t){case 0:j(s,{x:0,y:0,z:r},n.accent);break;case 1:j(s,{x:r,y:0,z:0},n.accent);break;case 2:j(s,{x:0,y:0,z:-r},n.accent);break;case 3:j(s,{x:-r,y:0,z:0},n.accent);break}}function HS(s,e,t,n,i){const r={};VS(r,t,n,i),Yi(s,r,{x:e.x,y:0,z:e.z})}function GS(s,e,t,n){for(let i=t;i<=t+5;i++)for(let r=-2;r<=2;r++)switch(e){case 0:j(s,{x:r,y:-1,z:i},n.stone),j(s,{x:r,y:0,z:i},n.accent);break;case 1:j(s,{x:i,y:-1,z:r},n.stone),j(s,{x:i,y:0,z:r},n.accent);break;case 2:j(s,{x:r,y:-1,z:-i},n.stone),j(s,{x:r,y:0,z:-i},n.accent);break;case 3:j(s,{x:-i,y:-1,z:r},n.stone),j(s,{x:-i,y:0,z:r},n.accent);break}}function WS(s,e,t,n,i){const r={};GS(r,t,n,i),Yi(s,r,{x:e.x,y:0,z:e.z})}function XS(s,e,t,n,i){for(let r=-e+1;r<=e-1;r++)j(s,{x:0,y:0,z:r},i.accent),j(s,{x:r,y:0,z:0},i.accent);for(let r=-t-1;r<=t+1;r++)j(s,{x:r,y:0,z:-t-1},i.accent),j(s,{x:r,y:0,z:t+1},i.accent);for(let r=-t-1;r<=t+1;r++)j(s,{x:-t-1,y:0,z:r},i.accent),j(s,{x:t+1,y:0,z:r},i.accent);for(let r=t+1;r<=e;r++)switch(n){case 0:j(s,{x:0,y:0,z:r},i.accent);break;case 1:j(s,{x:r,y:0,z:0},i.accent);break;case 2:j(s,{x:0,y:0,z:-r},i.accent);break;case 3:j(s,{x:-r,y:0,z:0},i.accent);break}}function qS(s,e,t,n,i,r){const o={};XS(o,t,n,i,r),Yi(s,o,{x:e.x,y:0,z:e.z})}function kc(s,e,t,n,i,r){const o={};zS(o,t,n,i,r),Yi(s,o,{x:e.x,y:0,z:e.z})}function $S(s,e,t,n,i,r){const o={};OS(o,t,n,i,r),Yi(s,o,{x:e.x,y:0,z:e.z})}function YS(s,e,t,n,i){const r=Math.abs(s.x-e)+Math.abs(s.z-t),o=Math.min(...i.map(([l,c])=>Oc(s,l,c))),a=ze(n+1701,s.x,s.z);return r<6||o<3.2?"civic":a>.84&&o>5?"green":o<7||a>.46?"market":"residential"}function KS(s,e,t,n){for(let i=e.minX;i<=e.maxX;i++)for(let r=e.minZ;r<=e.maxZ;r++)j(s,{x:i,y:0,z:r},t==="green"?n.grass:t==="market"?n.sand:n.stone)}function jS(s,e,t,n,i,r,o,a){const l=Nc(e),c=e.maxX-e.minX+1,h=e.maxZ-e.minZ+1,u=t==="civic"?1:0,d=e.minX+u,f=e.maxX-u,m=e.minZ+u,_=e.maxZ-u;if(f-d<3||_-m<3)return;const p=t==="civic"?n+1:t==="market"?Math.max(4,n-2):Math.max(4,n-3),g=Math.max(4,p+Math.floor(r()*4)-1),v=Math.max(3,g),b=t==="civic"?i.accent:t==="market"?i.stone:i.wall;for(let x=d;x<=f;x++)for(let S=m;S<=_;S++)for(let V=1;V<=v;V++)!(x===d||x===f||S===m||S===_)&&V!==v||j(s,{x,y:V,z:S},V===v?b:i.wall);const M=Math.abs(l.x-Pd(l.x,o)),T=Math.abs(l.z-Pd(l.z,a));let A=l.x,C=l.z;T<=M?C=m:A=l.x<0?f:d;for(let x=1;x<=2;x++)j(s,{x:A,y:x,z:C},0);(t==="civic"||r()>.58)&&(Mi(s,{x:d,y:v+1,z:m},2,i.accent,i.accent),Mi(s,{x:f,y:v+1,z:_},2,i.accent,i.accent)),t==="market"&&c>4&&h>4&&(j(s,{x:l.x,y:1,z:l.z},i.wood),j(s,{x:l.x,y:2,z:l.z},i.leaves))}function Pd(s,e){let t=e[0]??0,n=Math.abs(t-s);for(const i of e){const r=Math.abs(i-s);r<n&&(n=r,t=i)}return t}function ZS(s,e,t,n,i){const r=[],o=t[Math.max(0,Math.floor(t.length*.25))]??s,a=t[Math.min(t.length-1,Math.floor(t.length*.75))]??s,l=n[Math.max(0,Math.floor(n.length*.25))]??e,c=n[Math.min(n.length-1,Math.floor(n.length*.75))]??e;return r.push([{x:o,z:e},{x:s,z:l}]),r.push([{x:s,z:c},{x:a,z:e}]),i()>.45&&r.push([{x:o,z:l},{x:a,z:c}]),i()>.55&&r.push([{x:o,z:c},{x:a,z:l}]),r}function JS(s,e,t,n,i){for(const r of e){const o=Math.max(0,Mh(s,r.x,r.z));for(let a=-t;a<=t;a++)for(let l=-t;l<=t;l++){const c=r.x+a,h=r.z+l;for(let u=-2;u<o;u++)j(s,{x:c,y:u,z:h},i);j(s,{x:c,y:o,z:h},n),Sh(s,c,h,o+1,o+8)}}}function Dd(s,e,t,n,i){const r=Math.sin(s*.045+n)*t*.24+Math.sin(s*.11+i)*t*.07;return Math.abs(e-r)}function QS(s,e,t,n,i,r){const o={x:Math.round((s.x+e.x)*.5),z:Math.round((s.z+e.z)*.5)};let a=o,l=1/0;for(let c=o.x-12;c<=o.x+12;c++)for(let h=o.z-12;h<=o.z+12;h++){if(Math.abs(c)>t||Math.abs(h)>t)continue;const u=ot(c,h,t),d=n[u]*1.8+Math.max(0,i[u]-.78)*6+Math.max(0,-r[u])*2.4+Math.abs(c-o.x)*.06+Math.abs(h-o.z)*.06;d<l&&(l=d,a={x:c,z:h})}return a}function eb(s,e,t,n){const i=ze(n+1221,e.x,e.z),r=i>.58?t.sand:t.grass;j(s,e,r),i>.8?j(s,{x:e.x,y:e.y+1,z:e.z},t.wood):i<.16&&j(s,{x:e.x,y:e.y+1,z:e.z},t.leaves)}function Bd(s,e,t,n,i,r){for(let o=e.x-t;o<=e.x+t;o++)for(let a=e.z-t;a<=e.z+t;a++)if(!(Math.hypot(o-e.x,a-e.z)>t)){for(let l=-2;l<n;l++)j(s,{x:o,y:l,z:a},i);j(s,{x:o,y:n,z:a},r),Sh(s,o,a,n+1,n+30)}}function Ar(s,e,t,n,i,r){const o=Math.max(Math.abs(t.x-e.x),Math.abs(t.z-e.z));for(let a=0;a<=o;a++){const l=o===0?0:a/o,c=Math.round(Ud(e.x,t.x,l)),h=Math.round(Ud(e.z,t.z,l)),u=Math.max(0,Mh(s,c,h));for(let d=-n;d<=n;d++)for(let f=-n;f<=n;f++){const m=c+d,_=h+f;for(let p=-2;p<u;p++)j(s,{x:m,y:p,z:_},r);j(s,{x:m,y:u,z:_},i),Sh(s,m,_,u+1,u+8)}}}function Yi(s,e,t){for(const[n,i]of Object.entries(e)){const r=tb(n);j(s,{x:r.x+t.x,y:r.y+t.y,z:r.z+t.z},i)}}function Mh(s,e,t){for(let n=96;n>=-2;n--)if(s[ia({x:e,y:n,z:t})])return n;return-2}function Sh(s,e,t,n,i){for(let r=n;r<=i;r++)j(s,{x:e,y:r,z:t},0)}function Oc(s,e,t){const n=t.x-e.x,i=t.z-e.z,r=n*n+i*i;if(r===0)return Math.hypot(s.x-e.x,s.z-e.z);const o=Math.max(0,Math.min(1,((s.x-e.x)*n+(s.z-e.z)*i)/r)),a=e.x+n*o,l=e.z+i*o;return Math.hypot(s.x-a,s.z-l)}function Ud(s,e,t){return s+(e-s)*t}function tb(s){const e=s.indexOf(","),t=s.indexOf(",",e+1);return{x:Number(s.slice(0,e)),y:Number(s.slice(e+1,t)),z:Number(s.slice(t+1))}}function j(s,e,t){const n=ia(e);if(t===0){delete s[n];return}s[n]=t}function gt(s,e,t){return Math.max(e,Math.min(t,Math.round(s)))}function Nd(s){return Math.max(-1,Math.min(1,s))}function On(s){let e=s>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ze(s,e,t){const n=Math.sin(e*127.1+t*311.7+s*1e-4)*43758.5453123;return n-Math.floor(n)}function sl(s,e,t,n){const i=Math.sin(e*127.1+t*269.5+n*311.7+s*1e-4)*43758.5453123;return i-Math.floor(i)}class bh{constructor(e,t){R(this,"_texture");R(this,"_uvByUri",new Map);this._texture=e,this._uvByUri=t}get texture(){return this._texture}toSnapshot(){return Object.fromEntries(this._uvByUri.entries())}getFaceUvs(e,t){const n=this._uvByUri.get(e.textureUris[t]);if(!n)throw new Error(`TextureAtlas: Missing atlas entry for ${e.textureUris[t]}`);return n}static async create(e){const t=new Set;for(const u of e)Object.values(u.textureUris).forEach(d=>t.add(d));const n=await Promise.all([...t].map(async u=>[u,await nb(u)])),i=16,r=Math.max(1,Math.ceil(Math.sqrt(n.length))),o=Math.max(1,Math.ceil(n.length/r)),a=document.createElement("canvas");a.width=r*i,a.height=o*i;const l=a.getContext("2d");if(!l)throw new Error("TextureAtlas: Failed to create 2d context.");l.imageSmoothingEnabled=!1;const c=new Map;n.forEach(([u,d],f)=>{const m=f%r,_=Math.floor(f/r),p=m*i,g=_*i;l.drawImage(d,p,g,i,i);const v=ib(d,i);c.set(u,{averageRGB:v.averageRGB,isTransparent:v.isTransparent,needsAlphaTest:v.needsAlphaTest,transparencyRatio:v.transparencyRatio,u0:p/a.width,v0:1-(g+i)/a.height,u1:(p+i)/a.width,v1:1-g/a.height})});const h=new ng(a);return h.colorSpace=St,h.magFilter=bt,h.minFilter=bt,h.generateMipmaps=!1,h.needsUpdate=!0,new bh(h,c)}}async function nb(s){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`Failed to load image ${s}`)),n.src=s})}function ib(s,e){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)return{averageRGB:[1,1,1],isTransparent:!1,needsAlphaTest:!1,transparencyRatio:0};n.imageSmoothingEnabled=!1,n.clearRect(0,0,e,e),n.drawImage(s,0,0,e,e);const i=n.getImageData(0,0,e,e).data;let r=0,o=!1,a=0,l=0,c=0,h=0;for(let u=0;u<i.length;u+=4){const d=i[u],f=i[u+1],m=i[u+2],_=i[u+3],p=_/255;l+=d*p,c+=f*p,h+=m*p,a+=p,_<255&&r++,_>0&&_<255&&(o=!0)}return{averageRGB:a>0?[l/(255*a),c/(255*a),h/(255*a)]:[1,1,1],isTransparent:r>0,needsAlphaTest:o,transparencyRatio:r/(e*e)}}const cp=document.querySelector("#app");if(!cp)throw new Error("App root not found.");const xo=new Ve,gs=new D,Fd=new D,kd=new me,sb=new me,rb=new D(0,1,0),nr=new D,vo=new D,Od=new Fe,ir=new Fn,_s=new D(1,1,1),xs=new Ve,zd=new Fe,vs=new Jo,yo=new Ft,wn=document.createElement("input");wn.type="file";wn.accept=".json,application/json";wn.style.display="none";document.body.append(wn);const ob=256,ab=15,Vd=.0025,Hd=Math.PI/2-.1,Kn="color",Gd="tCube",rl="horizonColor",lb="/voxcinder/world-editor/skyboxes/partly-cloudy",cb="/voxcinder/world-editor/maps/boilerplate.json",hb="/voxcinder/",Wd=[new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href],ub="exploreMapSource",db="mode",fb="soloMode",ol=new Mn(0,0,0,"YXZ"),Mo=new D,So=new D,pb=50,Xd=1.02,Ni=.045,al="world-editor-sidebar-sections",sr="world-editor-autosave",qd=500,mb="world-editor-db",un="autosaves",Eh="world-meta",hp="view-state",gb=800,_b=500,xb=8,vb=1,yb=1,bo=2,Mb=.4,ll=56,Sb=220,bb=12,$d=1,Yd=.8,Kd=.5,jd="worldEditorInstanceLightLevel",Zd="worldEditorInstanceSkyLight",rr="vWorldEditorInstanceLightLevel",or="vWorldEditorInstanceSkyLight",up=15,Eb=Math.ceil((up+1)/Re),Jd="worldEditorStaticEntityMaterialSetup",Qd={ULTRA:{multiplier:2},HIGH:{devicePixelRatioCap:3,multiplier:1},MEDIUM:{devicePixelRatioCap:2,multiplier:1},LOW:{devicePixelRatioCap:1,multiplier:.85},POWER_SAVING:{devicePixelRatioCap:1,multiplier:.5}},Fi={ULTRA:{distance:600,fog:{enabled:!0,far:550,near:320}},HIGH:{distance:300,fog:{enabled:!0,far:300,near:160}},MEDIUM:{distance:150,fog:{enabled:!0,far:150,near:80}},LOW:{distance:75,fog:{enabled:!0,far:75,near:36}},POWER_SAVING:{distance:50,fog:{enabled:!0,far:50,near:16}}};class ef extends Gt{constructor(e){const t=Nn.clone(pt.cube.uniforms);t[Gd].value=e,t[Kn]={value:new me},super({vertexShader:pt.cube.vertexShader,fragmentShader:pt.cube.fragmentShader.replace("void main() {",`
            uniform vec3 ${Kn};
            void main() {
          `).replace("gl_FragColor = texColor;",`
            gl_FragColor = texColor;
            gl_FragColor.rgb *= ${Kn};
          `),uniforms:t,side:Vt,depthWrite:!1,fog:!1})}get color(){return this.uniforms[Kn].value}get map(){return this.uniforms[Gd].value}}class tf extends Gt{constructor(){super({vertexShader:`
        varying vec3 vDirection;

        void main() {
          vDirection = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 ${Kn};
        uniform vec3 ${rl};
        varying vec3 vDirection;

        void main() {
          float horizonMix = smoothstep(-0.25, 0.45, vDirection.y);
          float zenithBoost = smoothstep(0.1, 1.0, vDirection.y);
          vec3 baseColor = mix(${rl}, ${Kn}, horizonMix);
          vec3 finalColor = baseColor * 0.78 + ${Kn} * zenithBoost * 0.1;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,uniforms:{[Kn]:{value:new me},[rl]:{value:new me(.42,.5,.6)}},side:Vt,depthWrite:!1,fog:!1})}get color(){return this.uniforms[Kn].value}}var of;class Tb{constructor(e){R(this,"container");R(this,"viewport");R(this,"renderer");R(this,"camera");R(this,"scene");R(this,"chunkLayer",new jt);R(this,"entityLayer",new jt);R(this,"entityAmbientLight");R(this,"buildPlane");R(this,"hoverBox");R(this,"hoverIndicatorRoot",new jt);R(this,"crosshair");R(this,"startupLoadingOverlay");R(this,"startupLoadingSubtitle");R(this,"mobileMoveStick");R(this,"mobileMoveStickThumb");R(this,"sidebar");R(this,"mobileMenuButton");R(this,"historyControls");R(this,"undoButton");R(this,"redoButton");R(this,"toolbelt");R(this,"toolToggleButton");R(this,"paletteContainer");R(this,"paletteFilterInput");R(this,"entityListContainer");R(this,"entityOptionsInput");R(this,"entityAddButton");R(this,"entitySaveButton");R(this,"entityDeleteButton");R(this,"lightingAmbientInput");R(this,"fogColorInput");R(this,"skyboxIntensityInput");R(this,"resolutionPresetInput");R(this,"viewDistancePresetInput");R(this,"viewDistanceCustomInput");R(this,"templateThemeSelect");R(this,"templateSeedInput");R(this,"templateSizeInput");R(this,"templateHeightInput");R(this,"templateApplyButton");R(this,"debugPanel");R(this,"debugSummaryLine");R(this,"debugMemoryLine");R(this,"debugRenderLine");R(this,"debugSceneLine");R(this,"chunkMesherWorker");R(this,"cubeTextureLoader",new Sg);R(this,"gltfLoader",new ky);R(this,"chunkBatchRenderer",new qM(this.chunkLayer));R(this,"chunkMeshManager",null);R(this,"chunkBlockMaterialManager",null);R(this,"chunkRendererHost",null);R(this,"entityMeshManager");R(this,"preOcclusionChunkModes",new Map);R(this,"nextPreOcclusionChunkModes",new Map);R(this,"entityModelCache",new Map);R(this,"entityFallbackObjects",new Map);R(this,"entityRenderObjects",new Set);R(this,"deferredEntityDisposals",[]);R(this,"selectedEntityMarker",null);R(this,"world",new Ad);R(this,"atlas",null);R(this,"atlasSnapshotCache",null);R(this,"selectedBlockTypeId",((of=Li[0])==null?void 0:of.id)??1);R(this,"paletteFilter","");R(this,"hoveredPlacement",null);R(this,"hoveredBlock",null);R(this,"lastPointerEvent",null);R(this,"pointerDownEvent",null);R(this,"pointerLocked",!1);R(this,"mobileControlsEnabled",window.matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0);R(this,"mobileMoveTouchId",null);R(this,"mobileLookTouchId",null);R(this,"mobileMoveStart",new Ve);R(this,"mobileMoveCurrent",new Ve);R(this,"mobileLookLast",new Ve);R(this,"mobileMoveInputX",0);R(this,"mobileMoveInputY",0);R(this,"mobileTapCandidates",new Map);R(this,"mobileSidebarOpen",!1);R(this,"debugVisible",!1);R(this,"lastDebugTouchToggleAt",0);R(this,"suppressTouchToolActions",!1);R(this,"fileName","untitled-world-map.json");R(this,"frameCounter",0);R(this,"fps",0);R(this,"lastFpsSampleAt",performance.now());R(this,"nextWorkerRequestId",1);R(this,"nextChunkBuildGeneration",1);R(this,"activeChunkBuildGeneration",0);R(this,"pendingChunkBuildPriorities",new Map);R(this,"pendingWorkerBlockUpdates",new Map);R(this,"chunkBuildWaiters",[]);R(this,"inFlightChunkBuildIds",new Set);R(this,"inFlightChunkBuildPriorities",new Map);R(this,"deferredInteractiveChunkBuildResults",[]);R(this,"deferredBackgroundChunkBuildResults",[]);R(this,"chunkBuildRequestGenerations",new Map);R(this,"lastInteractiveChunkBuildRequestAt",-1/0);R(this,"workerSyncedChunkIds",new Set);R(this,"chunkBuildDispatchInProgress",!1);R(this,"fogColor",new me(1,1,1));R(this,"skyboxIntensity",1);R(this,"skyboxMesh",null);R(this,"pendingSkyboxTexture",null);R(this,"spectatorPitch",.95);R(this,"spectatorYaw",.75);R(this,"pressedKeys",new Set);R(this,"lightingAmbient",1);R(this,"fogColorHex","#ffffff");R(this,"skyboxUiIntensity",1);R(this,"resolutionPreset","MEDIUM");R(this,"viewDistancePreset","MEDIUM");R(this,"viewDistanceCustomDistance",Fi.MEDIUM.distance);R(this,"currentTool","build");R(this,"undoStack",[]);R(this,"redoStack",[]);R(this,"autosaveDirtyChunkIds",new Set);R(this,"autosaveEntitiesDirty",!1);R(this,"autosaveFullWorldDirty",!0);R(this,"selectedEntityKey",null);R(this,"autosaveTimeoutId",null);R(this,"viewStateAutosaveTimeoutId",null);R(this,"handleResize",()=>{const e=this.viewport.clientWidth,t=this.viewport.clientHeight;this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)});R(this,"handlePointerMove",e=>{if(e.pointerType!=="touch"){if(this.pointerLocked){this.updateSpectatorRotation(e.movementX,e.movementY),this.updateHoverFromScreenCenter();return}this.lastPointerEvent=e,this.mobileControlsEnabled?this.updateHoverFromPointer(e):this.clearHover()}});R(this,"handlePointerDown",e=>{var t,n;if(e.pointerType!=="touch"){if(this.mobileSidebarOpen){const i=e.target;i&&!this.sidebar.contains(i)&&i!==this.mobileMenuButton&&this.setMobileSidebarOpen(!1)}if(!this.pointerLocked&&!this.mobileControlsEnabled){(n=(t=this.renderer.domElement).requestPointerLock)==null||n.call(t),this.pointerDownEvent=null;return}this.lastPointerEvent=e,this.updateHoverFromScreenCenter(),this.pointerDownEvent=e}});R(this,"handlePointerUp",e=>{if(e.pointerType==="touch"||(this.pointerLocked?this.updateHoverFromScreenCenter():(this.lastPointerEvent=e,this.mobileControlsEnabled?this.updateHoverFromPointer(e):this.clearHover()),!this.pointerDownEvent))return;const t=Math.hypot(e.clientX-this.pointerDownEvent.clientX,e.clientY-this.pointerDownEvent.clientY),n=this.pointerDownEvent.button;this.pointerDownEvent=null,!(t>4)&&this.applyCurrentTool(n)});R(this,"handleKeyDown",e=>{const t=rf(e.code);if(this.pressedKeys.add(t),e.ctrlKey||e.metaKey){if(e.key.toLowerCase()==="z"&&!e.shiftKey){e.preventDefault(),this.undo();return}if(e.key.toLowerCase()==="y"||e.key.toLowerCase()==="z"&&e.shiftKey){e.preventDefault(),this.redo();return}}if(e.key.toLowerCase()==="g"){this.toggleDebugPanel();return}if(e.code==="Digit1"){this.setToolMode("build");return}if(e.code==="Digit2"){this.setToolMode("erase");return}});R(this,"handleKeyUp",e=>{this.pressedKeys.delete(rf(e.code))});R(this,"handleTouchStart",e=>{if(this.mobileSidebarOpen&&this.setMobileSidebarOpen(!1),e.touches.length!==5){if(!this.mobileControlsEnabled)return;e.preventDefault();const n=this.viewport.clientWidth;for(const i of Array.from(e.changedTouches)){const r=i.clientX<n*Mb?"move":"look";this.mobileTapCandidates.set(i.identifier,{zone:r,startX:i.clientX,startY:i.clientY,lastX:i.clientX,lastY:i.clientY,moved:!1,time:performance.now()}),r==="move"&&this.mobileMoveTouchId===null?(this.mobileMoveTouchId=i.identifier,this.mobileMoveStart.set(i.clientX,i.clientY),this.mobileMoveCurrent.copy(this.mobileMoveStart),this.updateMobileMoveStick()):r==="look"&&this.mobileLookTouchId===null&&(this.mobileLookTouchId=i.identifier,this.mobileLookLast.set(i.clientX,i.clientY),this.updateHoverFromClientPosition(i.clientX,i.clientY))}return}const t=performance.now();t-this.lastDebugTouchToggleAt<gb||(this.lastDebugTouchToggleAt=t,this.cancelActiveTouchInteractions(),this.suppressTouchToolActions=!0,e.preventDefault(),e.stopPropagation(),this.toggleDebugPanel())});R(this,"handleTouchMove",e=>{if(this.mobileControlsEnabled){e.preventDefault();for(const t of Array.from(e.changedTouches)){const n=this.mobileTapCandidates.get(t.identifier);n&&(n.lastX=t.clientX,n.lastY=t.clientY,Math.hypot(t.clientX-n.startX,t.clientY-n.startY)>bb&&(n.moved=!0)),t.identifier===this.mobileMoveTouchId?(this.mobileMoveCurrent.set(t.clientX,t.clientY),this.updateMobileMoveStick()):t.identifier===this.mobileLookTouchId&&(this.updateSpectatorRotation(t.clientX-this.mobileLookLast.x,t.clientY-this.mobileLookLast.y),this.mobileLookLast.set(t.clientX,t.clientY),this.updateHoverFromClientPosition(t.clientX,t.clientY))}}});R(this,"handleTouchEnd",e=>{if(this.mobileControlsEnabled){if(e.preventDefault(),this.suppressTouchToolActions){e.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(e.changedTouches);return}this.finishTouchSequence(e.changedTouches)}});R(this,"handleTouchCancel",e=>{if(this.mobileControlsEnabled){if(e.preventDefault(),this.suppressTouchToolActions){e.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(e.changedTouches);return}this.finishTouchSequence(e.changedTouches,!0)}});R(this,"handlePointerLockChange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,this.pointerLocked&&this.updateHoverFromScreenCenter()});R(this,"handleBeforeUnload",()=>{this.flushAutosave(),this.flushViewStateAutosave()});R(this,"handleChunkMesherWorkerMessage",e=>{const t=e.data;if(t.type!=="built_chunk")return;const n=this.chunkBuildRequestGenerations.get(t.requestId);if(this.chunkBuildRequestGenerations.delete(t.requestId),n!==this.activeChunkBuildGeneration){this.inFlightChunkBuildIds.delete(t.chunkId),this.inFlightChunkBuildPriorities.delete(t.chunkId),this.resolveChunkBuildWaiters();return}const i={requestId:t.requestId,chunkId:t.chunkId,geometry:t.geometry};(this.inFlightChunkBuildPriorities.get(t.chunkId)??0)>=bo?this.deferredInteractiveChunkBuildResults.push(i):this.deferredBackgroundChunkBuildResults.push(i)});R(this,"renderLoop",()=>{var n;requestAnimationFrame(this.renderLoop),this.flushQueuedWorkerBlockUpdates(),this.processChunkBuildQueueFrame(this.activeChunkBuildGeneration),this.flushDeferredChunkBuildResults();const e=this.updateSpectatorCamera(1/60);this.pointerLocked&&e&&this.updateHoverFromScreenCenter(),this.updateSkybox(),this.chunkMeshManager||this.chunkBatchRenderer.update(1/60),(n=this.chunkBlockMaterialManager)==null||n.update(),this.updateViewDistanceVisibility(),this.renderer.render(this.scene,this.camera),this.flushDeferredEntityDisposals(),this.frameCounter++;const t=performance.now();t-this.lastFpsSampleAt>=1e3&&(this.fps=Math.round(this.frameCounter*1e3/(t-this.lastFpsSampleAt)),this.frameCounter=0,this.lastFpsSampleAt=t,this.updateDebugPanel())});this.container=document.createElement("div"),this.container.className="app-shell",this.viewport=document.createElement("div"),this.viewport.className="viewport",this.container.append(this.viewport);const t=document.createElement("div");t.className="overlay",this.container.append(t),this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",t.append(this.crosshair),this.startupLoadingOverlay=document.createElement("div"),this.startupLoadingOverlay.className="world-editor-loading-overlay",this.startupLoadingOverlay.innerHTML=`
      <div class="world-editor-loading-panel">
        <div class="world-editor-loading-title">Loading</div>
        <div class="world-editor-loading-subtitle">
          <span class="world-editor-loading-spinner" aria-hidden="true"></span>
        </div>
      </div>
    `,this.startupLoadingSubtitle=document.createElement("span"),this.startupLoadingSubtitle.textContent="Preparing editor...",this.startupLoadingOverlay.querySelector(".world-editor-loading-subtitle").append(this.startupLoadingSubtitle),t.append(this.startupLoadingOverlay),this.mobileMoveStick=document.createElement("div"),this.mobileMoveStick.className="mobile-move-stick",this.mobileMoveStick.hidden=!0,this.mobileMoveStickThumb=document.createElement("div"),this.mobileMoveStickThumb.className="mobile-move-stick-thumb",this.mobileMoveStick.append(this.mobileMoveStickThumb),t.append(this.mobileMoveStick),this.scene=new zm,this.scene.add(this.chunkLayer),this.scene.add(this.entityLayer),this.entityAmbientLight=new Ig(new me(16777215),1),this.scene.add(this.entityAmbientLight),this.camera=new qt(55,1,.1,1e3),this.camera.position.set(18,20,18),this.camera.rotation.order="YXZ",this.applySpectatorCameraOrientation(),this.renderer=new Ny({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=St,this.viewport.append(this.renderer.domElement),this.chunkBatchRenderer.setFogProvider(this.createFogUniformProvider()),this.entityMeshManager=new FM({addToScene:r=>this.entityLayer.add(r),createRenderMaterial:r=>this.createEntityRenderMaterial(r),getViewDistance:()=>this.getCurrentViewDistance(),loadEntityModelTemplate:r=>this.loadEntityModelTemplate(r),removeFromScene:r=>this.entityLayer.remove(r)}),this.buildPlane=new _t(new wr(512,512),new Ln({visible:!1,side:$t})),this.buildPlane.rotation.x=-Math.PI/2,this.buildPlane.position.y=-.5,this.scene.add(this.buildPlane),this.hoverBox=new ec(new yu(new Zn(1.01,1.01,1.01)),new zo({color:"#f5b942",transparent:!0,opacity:.95})),this.hoverBox.renderOrder=1e3,this.hoverBox.visible=!1,this.scene.add(this.hoverBox),this.hoverIndicatorRoot.add(this.createHoverFrameIndicator()),this.hoverIndicatorRoot.renderOrder=1e3,this.hoverIndicatorRoot.visible=!1,this.scene.add(this.hoverIndicatorRoot);const n=document.createElement("div");n.className="topbar",n.innerHTML=`
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
    `,this.toolToggleButton=this.toolbelt.querySelector("[data-tool-toggle]"),this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(this.currentTool)),this.toolToggleButton.title=this.getToolLabel(this.currentTool),t.append(n,i,this.debugPanel,this.historyControls,this.toolbelt),e.append(this.container),this.chunkMesherWorker=new Worker(new URL("/voxcinder/world-editor/assets/chunkMesherWorker-DTBiahQx.js",import.meta.url),{type:"module"}),this.chunkMesherWorker.addEventListener("message",this.handleChunkMesherWorkerMessage),n.addEventListener("click",r=>{this.handleUiAction(r.target,wn)}),i.addEventListener("click",r=>{this.handleUiAction(r.target,wn)}),this.historyControls.addEventListener("click",r=>{this.handleUiAction(r.target,wn)}),wn.addEventListener("change",()=>{var o;const r=(o=wn.files)==null?void 0:o[0];r&&this.importMap(r),wn.value=""}),this.toolbelt.addEventListener("click",r=>{r.target.closest("[data-tool-toggle]")&&this.toggleToolMode()}),this.templateThemeSelect.addEventListener("change",()=>this.syncTemplateInputsToTheme()),this.templateApplyButton.addEventListener("click",()=>{this.applyThemeTemplate()}),this.entityAddButton.addEventListener("click",()=>{this.addEntityAtHover()}),this.entitySaveButton.addEventListener("click",()=>{this.saveSelectedEntity()}),this.entityDeleteButton.addEventListener("click",()=>{this.deleteSelectedEntity()}),this.resolutionPresetInput.addEventListener("change",()=>this.handleResolutionChange()),this.viewDistancePresetInput.addEventListener("change",()=>this.handleViewDistanceChange()),this.viewDistanceCustomInput.addEventListener("input",()=>this.handleViewDistanceChange()),this.lightingAmbientInput.addEventListener("input",()=>this.handleLightingChange()),this.fogColorInput.addEventListener("input",()=>this.handleLightingChange()),this.skyboxIntensityInput.addEventListener("input",()=>this.handleLightingChange()),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),this.renderer.domElement.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),this.renderer.domElement.addEventListener("touchend",this.handleTouchEnd,{passive:!1}),this.renderer.domElement.addEventListener("touchcancel",this.handleTouchCancel,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("beforeunload",this.handleBeforeUnload),document.addEventListener("pointerlockchange",this.handlePointerLockChange),this.handleResize(),this.loadSkybox(lb),this.populateTemplateThemeOptions(),this.syncResolutionInputs(),this.syncViewDistanceInputs(),this.applyResolutionSettings(),this.applyViewDistanceSettings(),this.applyLightingSettings(),this.initializeWorld(),this.updateDebugPanel(),this.renderLoop()}async initializeWorld(){this.setStartupLoadingState("Restoring view...");try{await this.restoreAutosavedViewState(),this.setStartupLoadingState("Checking autosave...");const e=await this.getRestorableAutosavePayload();if(e)this.hideStartupLoadingOverlay(),await this.applyAutosavedWorldPayload(e,!1);else{this.setStartupLoadingState("Downloading world...");const t=await this.loadDefaultWorldMapPayload();this.hideStartupLoadingOverlay(),await this.applyDefaultWorldMapPayload(t,!1)}}finally{this.startupLoadingOverlay.hidden||this.hideStartupLoadingOverlay()}}setStartupLoadingState(e){this.startupLoadingSubtitle.textContent=e,this.startupLoadingOverlay.hidden=!1}hideStartupLoadingOverlay(){this.startupLoadingOverlay.hidden=!0}setMobileSidebarOpen(e,t=!0){this.mobileSidebarOpen!==e&&(this.mobileSidebarOpen=e,this.container.classList.toggle("mobile-sidebar-open",this.mobileSidebarOpen),this.mobileMenuButton.classList.toggle("active",this.mobileSidebarOpen),t&&this.scheduleViewStateAutosave())}handleUiAction(e,t){var i;const n=(i=e.closest("[data-action]"))==null?void 0:i.dataset.action;if(n){if(n==="menu"){this.setMobileSidebarOpen(!this.mobileSidebarOpen);return}n==="new"?this.resetToEmptyMap():n==="reset"?this.resetSavedData():n==="undo"?this.undo():n==="redo"?this.redo():n==="import"?t.click():n==="export"?this.exportMap():n==="explore"&&this.openExploreMode()}}async finishTouchSequence(e,t=!1){for(const n of Array.from(e)){const i=this.mobileTapCandidates.get(n.identifier);if(this.mobileTapCandidates.delete(n.identifier),n.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),n.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null),!i||t)continue;const r=performance.now()-i.time;i.moved||r>Sb||(this.updateHoverFromClientPosition(i.lastX,i.lastY),await this.applyCurrentTool(0))}}cancelActiveTouchInteractions(){this.mobileTapCandidates.clear(),this.mobileLookTouchId=null,this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0}cancelEndedTouchControls(e){for(const t of Array.from(e))this.mobileTapCandidates.delete(t.identifier),t.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),t.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null)}updateMobileMoveStick(){if(this.mobileMoveTouchId===null){this.mobileMoveStick.hidden=!0,this.mobileMoveInputX=0,this.mobileMoveInputY=0;return}const e=this.mobileMoveCurrent.x-this.mobileMoveStart.x,t=this.mobileMoveCurrent.y-this.mobileMoveStart.y,n=Math.hypot(e,t),i=Math.min(n,ll),r=n>0?e/n:0,o=n>0?t/n:0,a=r*i,l=o*i;this.mobileMoveInputX=r*(i/ll),this.mobileMoveInputY=o*(i/ll),this.mobileMoveStick.hidden=!1,this.mobileMoveStick.style.left=`${this.mobileMoveStart.x}px`,this.mobileMoveStick.style.top=`${this.mobileMoveStart.y}px`,this.mobileMoveStickThumb.style.transform=`translate(${a}px, ${l}px)`}toggleDebugPanel(){this.debugVisible=!this.debugVisible,this.debugPanel.hidden=!this.debugVisible,this.updateStatus(this.debugVisible?"Debug mode enabled.":"Debug mode disabled."),this.updateDebugPanel()}async resetToEmptyMap(e=!0){var t;this.world.load({},Li),this.selectedBlockTypeId=((t=this.world.blockTypes[0])==null?void 0:t.id)??1,this.fileName="untitled-world-map.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),e?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus("Started a new empty world map.")}resetViewStateToDefaults(){this.spectatorPitch=.95,this.spectatorYaw=.75,this.camera.position.set(18,20,18),this.applySpectatorCameraOrientation(),this.setMobileSidebarOpen(!1,!1),this.paletteFilter="",this.paletteFilterInput.value="",this.resolutionPreset="MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.viewDistancePreset="MEDIUM",this.viewDistanceCustomDistance=Fi.MEDIUM.distance,this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.lightingAmbient=1,this.fogColorHex="#ffffff",this.skyboxUiIntensity=1,this.syncLightingInputs(),this.applyLightingSettings(),this.setToolMode("build")}async resetSavedData(){window.confirm("Delete saved World Editor data and reset to the default world?")&&(this.autosaveTimeoutId!==null&&(window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=null),this.viewStateAutosaveTimeoutId!==null&&(window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=null),localStorage.removeItem(sr),await nf(),this.resetViewStateToDefaults(),await this.loadDefaultWorldMap(),this.updateStatus("Reset saved data and restored the default world."))}async loadDefaultWorldMap(e=!0){try{const t=await this.loadDefaultWorldMapPayload();await this.applyDefaultWorldMapPayload(t,e)}catch(t){console.error(t),await this.resetToEmptyMap(e),this.updateStatus(`Default world map load failed: ${t.message}`)}}async loadDefaultWorldMapPayload(){const e=await fetch(cb,{cache:"no-store"});if(!e.ok)throw new Error(`Failed to load default map: ${e.status} ${e.statusText}`);return await e.json()}async applyDefaultWorldMapPayload(e,t){var n;this.world.load(e,Li),this.selectedBlockTypeId=((n=this.world.blockTypes[0])==null?void 0:n.id)??this.selectedBlockTypeId,this.fileName="boilerplate.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),t?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),t?await this.flushAutosave():this.flushAutosave(),this.updateStatus("Loaded default world map.")}populateTemplateThemeOptions(){this.templateThemeSelect.replaceChildren();for(const e of il){const t=document.createElement("option");t.value=e.id,t.textContent=e.label,this.templateThemeSelect.append(t)}this.syncTemplateInputsToTheme()}syncTemplateInputsToTheme(){const e=il.find(t=>t.id===this.templateThemeSelect.value);e&&(this.templateSizeInput.value=String(e.defaultSize),this.templateHeightInput.value=String(e.defaultHeight))}async importMap(e){var t;try{const n=JSON.parse(await e.text());this.world.load(n,Li),this.selectedBlockTypeId=((t=this.world.blockTypes[0])==null?void 0:t.id)??this.selectedBlockTypeId,this.fileName=e.name,this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Imported ${e.name}.`)}catch(n){console.error(n),this.updateStatus(`Import failed: ${n.message}`)}}exportMap(){const e=this.world.toJson(),t=new Blob([`${JSON.stringify(e,null,2)}
`],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=this.fileName.endsWith(".json")?this.fileName:`${this.fileName}.json`,n.click(),URL.revokeObjectURL(n.href),this.updateStatus(`Exported ${n.download}.`)}async applyThemeTemplate(){const e=this.templateThemeSelect.value||"arena",t=il.find(l=>l.id===e);if(!t){this.updateStatus(`Unknown template theme "${e}".`);return}const n=this.getCurrentBlockTypeDefinitions(),i=this.resolveTemplateBlockIds(n),r=yS({theme:e,seed:Number(this.templateSeedInput.value)||0,size:Number(this.templateSizeInput.value)||t.defaultSize,height:Number(this.templateHeightInput.value)||t.defaultHeight},i),o=this.world.toSnapshot();this.world.load({blockTypes:n,blocks:r.blocks},n);const a=this.world.toSnapshot();this.pushSnapshotUndoState(`Generate ${t.label}`,o,a),this.markFullWorldAutosaveDirty(),this.fileName=`generated-${e}.json`,this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Generated ${t.label.toLowerCase()} template with seed ${this.templateSeedInput.value||"0"}.`)}rebuildPalette(){var n;const e=this.sidebar.scrollTop,t=this.paletteContainer.scrollTop;this.paletteContainer.replaceChildren(),this.paletteFilterInput.value=this.paletteFilter;for(const i of this.world.blockTypes){if(this.paletteFilter&&!i.name.toLowerCase().includes(this.paletteFilter))continue;const r=document.createElement("button");r.type="button",r.className="palette-button",i.id===this.selectedBlockTypeId&&r.classList.add("active"),r.innerHTML=`
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
      `,i.addEventListener("click",()=>{this.selectedEntityKey=n,this.entityOptionsInput.value=JSON.stringify(e[n],null,2),this.rebuildEntitiesUi(),this.refreshSelectedEntityMarker()}),this.entityListContainer.append(i)}(!this.selectedEntityKey||!(this.selectedEntityKey in e))&&(this.selectedEntityKey=t[0]??null),this.entityOptionsInput.value=this.selectedEntityKey?JSON.stringify(e[this.selectedEntityKey],null,2):"{}",this.refreshSelectedEntityMarker()}async rebuildAllChunkMeshes(){const e=++this.nextChunkBuildGeneration;this.activeChunkBuildGeneration=e,this.pendingChunkBuildPriorities.clear(),this.chunkBuildWaiters=[],this.inFlightChunkBuildIds.clear(),this.inFlightChunkBuildPriorities.clear(),this.chunkBuildRequestGenerations.clear(),this.workerSyncedChunkIds.clear(),this.chunkBuildDispatchInProgress=!1,this.disposeAllChunkMeshes(),this.atlas=await bh.create(this.world.blockTypes),this.atlasSnapshotCache=this.atlas.toSnapshot(),this.chunkBatchRenderer.setAtlas(null),this.chunkRendererHost={addToScene:t=>this.chunkLayer.add(t),ambientLight:this.entityAmbientLight,removeFromScene:t=>this.chunkLayer.remove(t),fogColor:this.fogColor,fogEnabled:this.getViewDistanceConfig().fog.enabled,fogFar:this.getViewDistanceConfig().fog.far,fogNear:this.getViewDistanceConfig().fog.near,webGLRenderer:this.renderer},this.chunkBlockMaterialManager=new bM({renderer:this.chunkRendererHost},this.atlas.texture),this.chunkMeshManager=new DM({blockMaterialManager:this.chunkBlockMaterialManager,renderer:this.chunkRendererHost}),await this.initializeChunkMesherWorkerWorld(),this.rebuildEntityMarkers(),this.queueChunkBuilds(this.getChunkIdsSortedByDistanceToCamera(this.world.chunkIds),yb,e),this.lastPointerEvent?this.updateHoverFromPointer(this.lastPointerEvent):this.pointerLocked&&this.updateHoverFromScreenCenter()}createHoverFrameIndicator(){const e=new jt,t=new Ln({color:"#f5b942",transparent:!0,opacity:.95,depthWrite:!1}),i=Xd/2-Ni/2,r=Xd,o=(a,l,c,h,u,d)=>{const f=new _t(new Zn(a,l,c),t.clone());f.renderOrder=1e3,f.position.set(h,u,d),f.matrixAutoUpdate=!1,f.updateMatrix(),e.add(f)};for(const a of[-i,i])for(const l of[-i,i])o(r,Ni,Ni,0,a,l);for(const a of[-i,i])for(const l of[-i,i])o(Ni,r,Ni,a,0,l);for(const a of[-i,i])for(const l of[-i,i])o(Ni,Ni,r,a,l,0);return e}disposeAllChunkMeshes(){var e;(e=this.chunkMeshManager)==null||e.clear(),this.chunkMeshManager=null,this.chunkBlockMaterialManager=null,this.chunkRendererHost=null,this.chunkBatchRenderer.clear(),this.chunkBatchRenderer.setAtlas(null)}async rebuildEntityMarkers(){this.disposeSelectedEntityMarker();for(const i of[...this.entityRenderObjects])this.disposeEntityRenderObject(i);this.entityFallbackObjects.clear(),this.entityRenderObjects.clear(),this.entityMeshManager.clear();const e=Object.entries(this.world.entities),t=[];for(const[i,r]of e){const o=ys(i);if(!o)continue;const a=this.buildStaticEntityDescriptor(i,r);if(a){t.push(a);continue}this.addFallbackEntityObject({key:i,position:o,options:r})}const n=await this.entityMeshManager.replaceAll(t);for(const i of t){if(!n.has(i.key))continue;const r=ys(i.key),o=this.world.entities[i.key];r&&o&&this.addFallbackEntityObject({key:i.key,position:r,options:o})}this.refreshSelectedEntityMarker()}addFallbackEntityObject(e){const t=new jt;t.position.set(e.position.x,e.position.y,e.position.z),t.userData.entityKey=e.key,t.userData.entityOptions=e.options,t.userData.visibilityRadius=1,t.add(this.createEntityMarker("#8b5cf6")),this.entityFallbackObjects.set(e.key,t),this.entityRenderObjects.add(t),this.entityLayer.add(t)}disposeEntityRenderObject(e){this.entityRenderObjects.delete(e),e.parent&&e.parent.remove(e),this.queueEntityRenderObjectDisposal(e)}async syncEntityMarkersForKeys(e,t){for(const n of e){const i=this.world.entities[n];this.entityMeshManager.removeEntity(n);const r=this.entityFallbackObjects.get(n);if(r&&(this.disposeEntityRenderObject(r),this.entityFallbackObjects.delete(n)),!i)continue;const o=this.buildStaticEntityDescriptor(n,i);if(o){if(!await this.entityMeshManager.upsertEntity(o)){const c=ys(n);c&&this.addFallbackEntityObject({key:n,position:c,options:i})}continue}const a=ys(n);a&&this.addFallbackEntityObject({key:n,position:a,options:i})}this.refreshSelectedEntityMarker()}buildStaticEntityDescriptor(e,t){const n=this.getEntityModelUri(t),i=ys(e);if(!n||!i)return null;const r=this.getEntityGlobalCoordinate(i);return Od.compose(new D(i.x,i.y,i.z),Nb(t),Ub(t)),{chunkId:Ke.globalCoordinateToChunkId(r),key:e,lightLevel:this.getEntityLightLevel(i),modelUri:this.resolveEntityModelUri(n),skyLight:this.getEntitySkyLight(i),tintColor:Bb(t),worldMatrix:Od.clone()}}buildStaticEntityLightingDescriptor(e){const t=this.world.entities[e],n=t?this.buildStaticEntityDescriptor(e,t):null;return n?{chunkId:n.chunkId,lightLevel:n.lightLevel,skyLight:n.skyLight}:null}refreshSelectedEntityMarker(){if(this.disposeSelectedEntityMarker(),!this.selectedEntityKey)return;const e=ys(this.selectedEntityKey);if(!e)return;const t=this.createEntityMarker("#ff8a65");t.position.set(e.x,e.y,e.z),t.renderOrder=1001,t.userData.visibilityRadius=1,this.selectedEntityMarker=t,this.entityRenderObjects.add(t),this.entityLayer.add(t)}disposeSelectedEntityMarker(){this.selectedEntityMarker&&(this.entityRenderObjects.delete(this.selectedEntityMarker),this.entityLayer.remove(this.selectedEntityMarker),this.queueEntityRenderObjectDisposal(this.selectedEntityMarker),this.selectedEntityMarker=null)}queueEntityRenderObjectDisposal(e){e.traverse(t=>{const n=t.geometry,i=t.material;if(n&&this.deferredEntityDisposals.push(()=>{n.dispose()}),Array.isArray(i))for(const r of i)this.deferredEntityDisposals.push(()=>{r.dispose()});else i&&this.deferredEntityDisposals.push(()=>{i.dispose()})})}flushDeferredEntityDisposals(){if(this.deferredEntityDisposals.length!==0){for(const e of this.deferredEntityDisposals)e();this.deferredEntityDisposals.length=0}}createEntityMarker(e){const t=new yu(new Zn(.6,1.2,.6)),n=new zo({color:e,transparent:!0,opacity:.95}),i=new ec(t,n);return i.renderOrder=1e3,i}handleLightingChange(){this.lightingAmbient=Number(this.lightingAmbientInput.value),this.fogColorHex=this.fogColorInput.value||"#ffffff",this.skyboxUiIntensity=Number(this.skyboxIntensityInput.value),this.applyLightingSettings(),this.scheduleViewStateAutosave()}handleResolutionChange(){const e=this.resolutionPresetInput.value;this.resolutionPreset=e in Qd?e:"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.scheduleViewStateAutosave()}handleViewDistanceChange(){const e=this.viewDistancePresetInput.value;this.viewDistancePreset=e in Fi||e==="CUSTOM"?e:"HIGH",this.viewDistanceCustomDistance=Math.max(1,Math.round(Number(this.viewDistanceCustomInput.value)||Fi.HIGH.distance)),this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.scheduleViewStateAutosave()}syncLightingInputs(){this.lightingAmbientInput.value=String(this.lightingAmbient),this.fogColorInput.value=this.fogColorHex,this.skyboxIntensityInput.value=String(this.skyboxUiIntensity)}syncResolutionInputs(){this.resolutionPresetInput.value=this.resolutionPreset}getEffectivePixelRatio(e,t){return(t===void 0?window.devicePixelRatio:Math.min(window.devicePixelRatio,t))*e}applyResolutionSettings(){const e=Qd[this.resolutionPreset];this.renderer.setPixelRatio(this.getEffectivePixelRatio(e.multiplier,e.devicePixelRatioCap)),this.handleResize()}syncViewDistanceInputs(){if(this.viewDistancePresetInput.value=this.viewDistancePreset,this.viewDistancePreset==="CUSTOM"){this.viewDistanceCustomInput.value=String(this.viewDistanceCustomDistance),this.viewDistanceCustomInput.disabled=!1;return}this.viewDistanceCustomInput.value=String(Fi[this.viewDistancePreset].distance),this.viewDistanceCustomInput.disabled=!0}getViewDistanceConfig(){if(this.viewDistancePreset!=="CUSTOM")return Fi[this.viewDistancePreset];const e=Math.max(1,this.viewDistanceCustomDistance),t=Math.min(e,Math.max(16,Math.round(e*(160/300))));return{distance:e,fog:{enabled:!0,far:e,near:t}}}getCurrentViewDistance(){const e=this.getViewDistanceConfig();return e.fog.enabled?e.fog.far:e.distance}getCurrentLodTransitionDistance(){const e=this.getViewDistanceConfig();return e.fog.enabled?Math.min(e.fog.far,e.fog.near+(e.fog.far-e.fog.near)*.5):e.distance}createFogUniformProvider(){return{color:()=>this.fogColor,enabled:()=>this.getViewDistanceConfig().fog.enabled,far:()=>this.getViewDistanceConfig().fog.far,near:()=>this.getViewDistanceConfig().fog.near}}applyViewDistanceSettings(){this.chunkRendererHost&&(this.chunkRendererHost.fogEnabled=this.getViewDistanceConfig().fog.enabled,this.chunkRendererHost.fogFar=this.getViewDistanceConfig().fog.far,this.chunkRendererHost.fogNear=this.getViewDistanceConfig().fog.near),this.updateViewDistanceVisibility()}applyLightingSettings(){this.chunkBlockMaterialManager||(this.chunkBatchRenderer.setAmbientColor(this.entityAmbientLight.color),this.chunkBatchRenderer.setAmbientIntensity(this.lightingAmbient)),this.entityAmbientLight.intensity=this.lightingAmbient,this.fogColor.set(this.fogColorHex).convertSRGBToLinear(),this.skyboxIntensity=this.skyboxUiIntensity,this.skyboxMesh&&this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor())}getEntityGlobalCoordinate(e){return{x:Math.floor(e.x),y:Math.floor(e.y),z:Math.floor(e.z)}}getEntityLightLevel(e){const t=this.getEntityGlobalCoordinate(e),n=this.world.getLightSourcesNear(t,Eb);let i=0;for(const r of n){const o=t.x-r.position.x+.5,a=t.y-r.position.y+.5,l=t.z-r.position.z+.5;if(o>r.level||o<-r.level||a>r.level||a<-r.level||l>r.level||l<-r.level)continue;const c=o*o+a*a+l*l,h=r.level*r.level;if(c>=h)continue;const u=r.level-Math.sqrt(c);u>i&&(i=u)}return Math.max(0,Math.min(1,i/up))}getEntitySkyLight(e){const t=this.getEntityGlobalCoordinate(e);let n=Ms;for(let r=Ms;r>=0;r--){const o=this.getEntitySkyOpacityUp({x:t.x,y:t.y+r,z:t.z});o!==void 0?n=o+n*(1-o):n=Math.min(Ms,n+1)}const i=Math.max(1,Math.min(Ms,Math.round(n)));return sS[i]}getEntitySkyOpacityUp(e){if(!this.atlas)return;const t=this.world.getBlockType(e);if(!t||t.isLiquid)return;const n=this.getEntityBlockOpacity(t);return t.trimeshOcclusionProfile?this.getEntityTrimeshSkyOpacity(t,this.world.getBlockRotation(e))*n:n}getEntityBlockOpacity(e){let t=0;for(const i of Md)t+=this.atlas.getFaceUvs(e,i).transparencyRatio;const n=t/Md.length;return Math.max(0,Math.min(1,1-n))}getEntityTrimeshSkyOpacity(e,t){const n=e.trimeshOcclusionProfile;if(!n)return 1;const i=Sd[t]??Sd[0],r=i[3],o=i[5];return Math.abs(r)>.5?n.skyOpacityX:Math.abs(o)>.5?n.skyOpacityZ:n.skyOpacityUp}updateEntityLighting(e){this.entityMeshManager.updateLighting(t=>this.buildStaticEntityLightingDescriptor(t),e?new Set(e):void 0)}getCurrentSkyboxDisplayColor(){const e=this.getViewDistanceConfig();if(!e.fog.enabled)return kd.copy(this.fogColor).multiplyScalar(this.skyboxIntensity);const n=Math.max(0,Math.min(1,1-e.fog.near/100)),i=e.fog.far-e.fog.near,o=Math.max(1,100/Math.max(i,1)),a=Math.min(1,n*o);return kd.copy(sb.setRGB(1,1,1).lerp(this.fogColor,a)).multiplyScalar(this.skyboxIntensity)}restoreSidebarSectionState(e){let t={};try{t=JSON.parse(localStorage.getItem(al)??"{}")}catch{t={}}for(const n of e.querySelectorAll(".sidebar-section[data-section]")){const i=n.dataset.section;i&&(n.open=t[i]===!0)}}bindSidebarSectionState(e){for(const t of e.querySelectorAll(".sidebar-section[data-section]"))t.addEventListener("toggle",()=>{const n=t.dataset.section;if(!n)return;let i={};try{i=JSON.parse(localStorage.getItem(al)??"{}")}catch{i={}}i[n]=t.open,localStorage.setItem(al,JSON.stringify(i))})}createEntityRenderMaterial(e){const t=Array.isArray(e)?e[0]:e,n=t,i=new _S({color:n.color??new me(16777215),map:n.map??null,alphaMap:n.alphaMap??null,alphaTest:n.alphaTest??0,transparent:t.transparent,opacity:t.opacity,side:t.side,depthWrite:t.depthWrite,depthTest:t.depthTest,emissive:n.emissive??new me(0),emissiveIntensity:n.emissiveIntensity??1,emissiveMap:n.emissiveMap??null,fogUniformProvider:this.createFogUniformProvider()});return i.name=`${t.name||"entity"}-editor`,this.ensureEntityMaterialSetup(i),i}ensureEntityMaterialSetup(e){if(e.userData[Jd])return;const t=this;e.addShaderProcessor(n=>{n.uniforms.worldEditorAmbientLightColor={value:this.entityAmbientLight.color},n.uniforms.worldEditorAmbientLightIntensity={get value(){return t.entityAmbientLight.intensity}},n.vertexShader=n.vertexShader.replace("void main() {",`
            #ifdef USE_INSTANCING
              attribute float ${jd};
              attribute float ${Zd};
            #endif
            varying float ${rr};
            varying float ${or};
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
              ${rr} = 0.0;
              ${or} = 1.0;
          `).replace("#include <uv_vertex>",`
            #include <uv_vertex>
            #ifdef USE_INSTANCING
              ${rr} = ${jd};
              ${or} = ${Zd};
            #endif
            mat4 worldEditorInstanceWorldMatrix = modelMatrix;
            #ifdef USE_INSTANCING
              worldEditorInstanceWorldMatrix = modelMatrix * instanceMatrix;
            #endif
            worldEditorWorldNormalY = worldEditorGetWorldNormalY(normal, worldEditorInstanceWorldMatrix);
          `),n.fragmentShader=n.fragmentShader.replace("void main() {",`
            varying float ${rr};
            varying float ${or};
            varying float worldEditorWorldNormalY;
            uniform vec3 worldEditorAmbientLightColor;
            uniform float worldEditorAmbientLightIntensity;

            void main() {
          `).replace("#include <opaque_fragment>",`
            vec3 ambientLight = worldEditorAmbientLightColor * worldEditorAmbientLightIntensity;
            vec3 blockLight = worldEditorAmbientLightColor * ${rr};
            float normalY = gl_FrontFacing ? worldEditorWorldNormalY : -worldEditorWorldNormalY;
            float faceShade = ${Yd.toFixed(2)}
              + (${$d.toFixed(2)} - ${Kd.toFixed(2)}) * 0.5 * normalY
              + ((${$d.toFixed(2)} + ${Kd.toFixed(2)}) * 0.5 - ${Yd.toFixed(2)}) * normalY * normalY;
            outgoingLight *= max(ambientLight, blockLight);
            outgoingLight *= ${or} * faceShade;

            #include <opaque_fragment>
          `)}),e.userData[Jd]=!0}async loadEntityModelTemplate(e){this.entityModelCache.has(e)||this.entityModelCache.set(e,this.gltfLoader.loadAsync(e).then(n=>{const i=new jt;return i.add(n.scene.clone(!0)),i.updateMatrixWorld(!0),i}).catch(n=>(console.error(n),new jt)));const t=await this.entityModelCache.get(e);return t.children.length===0?null:t}resolveEntityModelUri(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/voxcinder/world-editor/${e}`}getEntityModelUri(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.modelUri=="string"&&t.modelUri.length>0?t.modelUri:null}updateHoverFromPointer(e){this.updateHoverFromClientPosition(e.clientX,e.clientY)}updateHoverFromScreenCenter(){const e=this.renderer.domElement.getBoundingClientRect();this.updateHoverFromClientPosition(e.left+e.width/2,e.top+e.height/2)}updateHoverFromClientPosition(e,t){const n=this.renderer.domElement.getBoundingClientRect();xo.x=(e-n.left)/n.width*2-1,xo.y=-((t-n.top)/n.height)*2+1,this.camera.updateMatrixWorld(),nr.setFromMatrixPosition(this.camera.matrixWorld),gs.set(xo.x,xo.y,.5).unproject(this.camera),vo.copy(gs).sub(nr).normalize();const i=this.raycastBlocks(nr,vo,ob);if(i){this.hoveredBlock=i.coordinate;const l=this.getPlacementCoordinateFromBlock(i.coordinate,i.normal);this.hoveredPlacement=l,this.currentTool==="build"?this.setHoverBox(l,"#f5b942"):this.currentTool==="erase"&&this.setHoverBox(i.coordinate,"#f05d6c");return}this.hoveredBlock=null;const r=-.5,o=vo.dot(rb);if(Math.abs(o)<1e-6){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}const a=(r-nr.y)/o;if(a<0){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}gs.copy(nr).addScaledVector(vo,a),this.hoveredPlacement={x:Math.floor(gs.x),y:0,z:Math.floor(gs.z)},this.setHoverIndicatorVisible(!1),this.hoveredPlacement&&this.currentTool==="build"&&this.setHoverBox(this.hoveredPlacement,"#f5b942"),this.hoveredBlock&&this.currentTool==="erase"&&this.setHoverBox(this.hoveredBlock,"#f05d6c")}clearHover(){this.hoveredPlacement=null,this.hoveredBlock=null,this.setHoverIndicatorVisible(!1)}getPlacementCoordinateFromBlock(e,t){return{x:e.x+Math.round(t.x),y:e.y+Math.round(t.y),z:e.z+Math.round(t.z)}}setHoverBox(e,t){Fd.set(e.x+.5,e.y+.5,e.z+.5),this.hoverIndicatorRoot.position.copy(Fd),this.hoverIndicatorRoot.traverse(n=>{const i=n;if(!i.material)return;const r=Array.isArray(i.material)?i.material:[i.material];for(const o of r){const a=o;a.color&&a.color.set(t)}}),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setHoverIndicatorVisible(e){this.hoverIndicatorRoot.visible=e,this.hoverBox.visible=!1}async applyCurrentTool(e){if(this.currentTool==="build"){e===0&&await this.placeSingleBlock();return}this.currentTool==="erase"&&(e===0||e===2)&&await this.deleteSingleBlock()}async rebuildAffectedChunks(e){await this.syncChunkMesherWorkerChunks(e),await this.enqueueChunkBuilds(e,bo,this.activeChunkBuildGeneration),this.updateEntityLighting(e),this.updateDebugPanel()}requestAffectedChunksRebuild(e,t=!0){this.lastInteractiveChunkBuildRequestAt=performance.now(),t&&this.flushQueuedWorkerBlockUpdates(),this.queueChunkBuilds(e,bo,this.activeChunkBuildGeneration),this.updateEntityLighting(e),this.updateDebugPanel()}queueChunkBuilds(e,t,n){if(!this.atlas||e.length===0||n!==this.activeChunkBuildGeneration)return[];const i=[...new Set(e)];for(const r of i){const o=this.inFlightChunkBuildPriorities.get(r)??0;if(this.inFlightChunkBuildIds.has(r)&&t>o){this.inFlightChunkBuildPriorities.set(r,t),this.chunkMesherWorker.postMessage({type:"prioritize_chunk_build",focusChunkId:r,priority:t,chunkId:r});continue}const a=this.pendingChunkBuildPriorities.get(r)??0;t>=a&&this.pendingChunkBuildPriorities.set(r,t)}return i}async enqueueChunkBuilds(e,t,n){const i=this.queueChunkBuilds(e,t,n);i.length!==0&&await new Promise(r=>{this.chunkBuildWaiters.push({chunkIds:new Set(i),resolve:r}),this.resolveChunkBuildWaiters()})}processChunkBuildQueueFrame(e){if(e!==this.activeChunkBuildGeneration||this.chunkBuildDispatchInProgress)return;const t=this.takeNextChunkBuildBatch();t.length!==0&&(this.chunkBuildDispatchInProgress=!0,this.dispatchChunkBuildBatch(t,e))}takeNextChunkBuildBatch(){const e=[...this.pendingChunkBuildPriorities.keys()].filter(n=>!this.inFlightChunkBuildIds.has(n)),t=e.filter(n=>(this.pendingChunkBuildPriorities.get(n)??0)>=bo);return t.length>0?t.sort((n,i)=>this.getChunkDistanceToCameraSquared(n)-this.getChunkDistanceToCameraSquared(i)).slice(0,xb):performance.now()-this.lastInteractiveChunkBuildRequestAt<_b?[]:e.sort((n,i)=>this.getChunkDistanceToCameraSquared(n)-this.getChunkDistanceToCameraSquared(i)).slice(0,vb)}getChunkDistanceToCameraSquared(e){const t=Ke.chunkIdToOriginCoordinate(e),n=t.x+8,i=t.y+8,r=t.z+8;return(n-this.camera.position.x)*(n-this.camera.position.x)+(i-this.camera.position.y)*(i-this.camera.position.y)+(r-this.camera.position.z)*(r-this.camera.position.z)}getChunkIdsSortedByDistanceToCamera(e){return[...new Set(e)].sort((t,n)=>this.getChunkDistanceToCameraSquared(t)-this.getChunkDistanceToCameraSquared(n))}async dispatchChunkBuildBatch(e,t){try{if(t!==this.activeChunkBuildGeneration)return;const n=e.filter(i=>!this.workerSyncedChunkIds.has(i));if(n.length>0&&await this.syncChunkMesherWorkerChunks(n),t!==this.activeChunkBuildGeneration)return;this.flushQueuedWorkerBlockUpdates();for(const i of e){const r=this.pendingChunkBuildPriorities.get(i);r!==void 0&&(this.pendingChunkBuildPriorities.delete(i),this.inFlightChunkBuildIds.add(i),this.inFlightChunkBuildPriorities.set(i,r),this.postBuildChunkRequest(i,r,t))}}finally{this.chunkBuildDispatchInProgress=!1}}resolveChunkBuildWaiters(){for(let e=this.chunkBuildWaiters.length-1;e>=0;e--){const t=this.chunkBuildWaiters[e];let n=!0;for(const i of t.chunkIds)if(this.pendingChunkBuildPriorities.has(i)||this.inFlightChunkBuildIds.has(i)){n=!1;break}n&&(this.chunkBuildWaiters.splice(e,1),t.resolve())}}postBuildChunkRequest(e,t,n){const i=this.nextWorkerRequestId++;this.chunkBuildRequestGenerations.set(i,n),this.chunkMesherWorker.postMessage({type:"build_chunk",focusChunkId:e,priority:t,requestId:i,chunkId:e})}flushDeferredChunkBuildResults(){const e=this.deferredInteractiveChunkBuildResults.length>0?this.deferredInteractiveChunkBuildResults.splice(0,this.deferredInteractiveChunkBuildResults.length):this.deferredBackgroundChunkBuildResults.splice(0,this.deferredBackgroundChunkBuildResults.length);if(e.length!==0){e.sort((t,n)=>{const i=(this.inFlightChunkBuildPriorities.get(n.chunkId)??0)-(this.inFlightChunkBuildPriorities.get(t.chunkId)??0);return i!==0?i:this.getChunkDistanceToCameraSquared(t.chunkId)-this.getChunkDistanceToCameraSquared(n.chunkId)});for(const t of e)this.chunkMeshManager?this.chunkMeshManager.setChunkGeometry(t.chunkId,t.geometry):this.chunkBatchRenderer.setChunkGeometry(t.chunkId,t.geometry),this.inFlightChunkBuildIds.delete(t.chunkId),this.inFlightChunkBuildPriorities.delete(t.chunkId);this.chunkMeshManager?this.chunkMeshManager.flush():this.chunkBatchRenderer.flush(),this.resolveChunkBuildWaiters()}}async initializeChunkMesherWorkerWorld(){if(!this.atlas)return;this.flushQueuedWorkerBlockUpdates();const e=this.nextWorkerRequestId++,t=this.atlasSnapshotCache??this.atlas.toSnapshot();await this.postChunkMesherWorkerRequest(e,{type:"sync_world",requestId:e,world:{blockTypes:this.world.toSnapshot().blockTypes,chunks:[]},atlas:t})}async syncChunkMesherWorkerChunks(e){if(!this.atlas||e.length===0)return;this.flushQueuedWorkerBlockUpdates();const t=[...new Set(e)],n=this.nextWorkerRequestId++;await this.postChunkMesherWorkerRequest(n,{type:"update_world_chunks",requestId:n,chunks:t.map(i=>({chunkId:i,snapshot:this.world.getChunkSnapshot(i)}))});for(const i of t)this.workerSyncedChunkIds.add(i)}queueChunkMesherWorkerBlockUpdate(e,t,n=0){const i=`${e.x},${e.y},${e.z}`;this.pendingWorkerBlockUpdates.set(i,{blockTypeId:t,coordinate:{...e},rotation:n})}canMergeQueuedBlockUpdates(e){for(const t of e)if(this.inFlightChunkBuildIds.has(t))return!1;return!0}flushQueuedWorkerBlockUpdates(){if(!this.atlas||this.pendingWorkerBlockUpdates.size===0)return;const e=[...this.pendingWorkerBlockUpdates.values()];this.chunkMesherWorker.postMessage({type:"update_world_blocks",updates:e}),this.pendingWorkerBlockUpdates.clear()}async postChunkMesherWorkerRequest(e,t){await new Promise(n=>{const i=r=>{const o=r.data;o.type!=="worker_ack"||o.requestId!==e||(this.chunkMesherWorker.removeEventListener("message",i),n())};this.chunkMesherWorker.addEventListener("message",i),this.chunkMesherWorker.postMessage(t)})}loadSkyboxTexture(e){return new Promise((t,n)=>{const i=this.cubeTextureLoader.load([...e],()=>t(i),void 0,r=>n(r));i.colorSpace=St})}createSkyboxMesh(e){const t=new _t(new Zn(1,1,1),e);return t.renderOrder=-1e3,t.frustumCulled=!1,t.matrixAutoUpdate=!1,t.matrixWorldAutoUpdate=!1,t}disposeSkyboxMesh(){if(!this.skyboxMesh)return;this.scene.remove(this.skyboxMesh),this.skyboxMesh.geometry.dispose();const e=this.skyboxMesh.material;e instanceof ef&&e.map.dispose(),e.dispose(),this.skyboxMesh=null}ensurePlaceholderSkybox(){this.skyboxMesh instanceof _t&&this.skyboxMesh.material instanceof tf||(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new tf),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh))}async loadSkybox(e){const t=e===Wd,n=Array.isArray(e)?[...e]:[`${e}/+x.png`,`${e}/-x.png`,`${e}/+y.png`,`${e}/-y.png`,`${e}/+z.png`,`${e}/-z.png`],i=this.loadSkyboxTexture(n);this.pendingSkyboxTexture=i,this.ensurePlaceholderSkybox();let r=null;try{r=await i}catch(o){if(console.error(o),!t)try{r=await this.loadSkyboxTexture(Wd)}catch(a){console.error(a)}}this.pendingSkyboxTexture===i&&(this.pendingSkyboxTexture=null,r&&(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new ef(r)),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh)))}updateSkybox(){this.skyboxMesh&&(this.camera.updateMatrixWorld(),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.skyboxMesh.position.copy(this.camera.position),this.skyboxMesh.updateMatrix(),this.skyboxMesh.matrixWorld.copy(this.skyboxMesh.matrix))}raycastBlocks(e,t,n){let i=Math.floor(e.x),r=Math.floor(e.y),o=Math.floor(e.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=a===0?Number.POSITIVE_INFINITY:Math.abs(1/t.x),u=l===0?Number.POSITIVE_INFINITY:Math.abs(1/t.y),d=c===0?Number.POSITIVE_INFINITY:Math.abs(1/t.z);let f=cl(e.x,t.x,i,a),m=cl(e.y,t.y,r,l),_=cl(e.z,t.z,o,c);if(this.world.hasBlock({x:i,y:r,z:o}))return{coordinate:{x:i,y:r,z:o},normal:{x:0,y:1,z:0}};let p=0,g={x:0,y:0,z:0};for(;p<=n;)if(f<m&&f<_?(i+=a,p=f,f+=h,g={x:-a,y:0,z:0}):m<_?(r+=l,p=m,m+=u,g={x:0,y:-l,z:0}):(o+=c,p=_,_+=d,g={x:0,y:0,z:-c}),this.world.hasBlock({x:i,y:r,z:o}))return{coordinate:{x:i,y:r,z:o},normal:g};return null}setToolMode(e){this.currentTool=e,this.toolToggleButton.classList.toggle("active",!0),this.toolToggleButton.innerHTML=`<span class="tool-slot-icon" aria-hidden="true">${this.getToolIconSvg(e)}</span>`,this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(e)),this.toolToggleButton.title=this.getToolLabel(e),e==="build"&&this.revealBlocksMenu(),this.updateStatus(`Tool changed to ${this.getToolLabel(e)}.`),this.pointerLocked&&this.updateHoverFromScreenCenter()}toggleToolMode(){this.setToolMode(this.currentTool==="build"?"erase":"build")}revealBlocksMenu(){this.setMobileSidebarOpen(!0);const e=this.sidebar.querySelector('[data-section="pattern"]');e&&!e.open&&(e.open=!0)}getToolLabel(e){switch(e){case"build":return"Build";case"erase":return"Erase"}}getToolIconSvg(e){switch(e){case"build":return`
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
        `}}async placeSingleBlock(){const e=this.hoveredPlacement;if(!e)return;const t=this.world.blockTypes.find(l=>l.id===this.selectedBlockTypeId);if(!t){this.updateStatus("No block pattern selected.");return}if(this.world.getBlockTypeId(e)===t.id)return;const n=this.world.getBlockTypeId(e),i=new Set([Ke.globalCoordinateToChunkId(e)]),r=this.captureChunkStates(i);this.world.setBlock(e,t.id);const o=[...this.world.getAffectedChunkIds(e,n,t.id)],a=this.canMergeQueuedBlockUpdates(o);a?this.queueChunkMesherWorkerBlockUpdate(e,t.id):await this.syncChunkMesherWorkerChunks(o),this.pushPatchUndoState(`Place ${t.name}`,r),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild(o,!a),this.scheduleAutosave(),this.updateStatus(`Placed ${t.name} at ${hl(e)}.`)}async deleteSingleBlock(){const e=this.hoveredBlock;if(!e||!this.world.hasBlock(e))return;const t=this.world.getBlockTypeId(e),n=new Set([Ke.globalCoordinateToChunkId(e)]),i=this.captureChunkStates(n);this.world.deleteBlock(e);const r=[...this.world.getAffectedChunkIds(e,t,0)],o=this.canMergeQueuedBlockUpdates(r);o?this.queueChunkMesherWorkerBlockUpdate(e,0):await this.syncChunkMesherWorkerChunks(r),this.pushPatchUndoState(`Delete ${hl(e)}`,i),this.markChunkIdsAutosaveDirty(n),this.requestAffectedChunksRebuild(r,!o),this.scheduleAutosave(),this.updateStatus(`Deleted block at ${hl(e)}.`)}pushHistoryEntry(e){this.undoStack.push(e),this.undoStack.length>pb&&this.undoStack.shift(),this.redoStack=[],this.updateHistoryButtons()}pushSnapshotUndoState(e,t,n){this.pushHistoryEntry({kind:"snapshot",label:e,before:t,after:n})}pushPatchUndoState(e,t,n=[]){const i=[];for(const[o,a]of t){const l=this.world.getChunkSnapshot(o);this.chunkSnapshotsEqual(a,l)||i.push({chunkId:o,before:a,after:l})}const r=n.filter(o=>this.entityDiffChanged(o));return i.length===0&&r.length===0?!1:(this.pushHistoryEntry({kind:"patch",label:e,chunks:i,...r.length>0?{entities:r}:{}}),!0)}serializeHistoryEntry(e){return e.kind==="snapshot"?{kind:"snapshot",label:e.label,beforeWorld:this.snapshotToWorldMap(e.before),afterWorld:this.snapshotToWorldMap(e.after)}:{kind:"patch",label:e.label,chunks:e.chunks.map(t=>({chunkId:t.chunkId,before:this.serializeChunkSnapshot(t.before),after:this.serializeChunkSnapshot(t.after)})),...e.entities?{entities:e.entities.map(t=>this.serializeEntityHistoryDiff(t))}:{}}}deserializeHistoryEntry(e){return e.kind==="snapshot"?{kind:"snapshot",label:e.label,before:this.worldMapToSnapshot(e.beforeWorld),after:this.worldMapToSnapshot(e.afterWorld)}:{kind:"patch",label:e.label,chunks:e.chunks.map(t=>({chunkId:t.chunkId,before:this.deserializeChunkSnapshot(t.before),after:this.deserializeChunkSnapshot(t.after)})),...e.entities?{entities:e.entities.map(t=>this.deserializeEntityHistoryDiff(t))}:{}}}captureChunkStates(e){const t=new Map;for(const n of new Set(e))t.set(n,this.world.getChunkSnapshot(n));return t}serializeChunkSnapshot(e){return e?{chunkId:e.chunkId,originCoordinate:{...e.originCoordinate},blocks:Array.from(e.blocks),rotations:Array.from(e.rotations)}:null}deserializeChunkSnapshot(e){return e?{chunkId:e.chunkId,originCoordinate:{...e.originCoordinate},blocks:new Uint16Array(e.blocks),rotations:new Uint8Array(e.rotations)}:null}serializeEntityHistoryDiff(e){return{...e,before:this.cloneEntityValue(e.before),after:this.cloneEntityValue(e.after)}}deserializeEntityHistoryDiff(e){return{...e,before:this.cloneEntityValue(e.before),after:this.cloneEntityValue(e.after)}}chunkSnapshotsEqual(e,t){return!e||!t?e===t:e.chunkId===t.chunkId&&e.originCoordinate.x===t.originCoordinate.x&&e.originCoordinate.y===t.originCoordinate.y&&e.originCoordinate.z===t.originCoordinate.z&&Eo(e.blocks,t.blocks)&&Eo(e.rotations,t.rotations)}entityDiffChanged(e){return e.hasBefore!==e.hasAfter?!0:!e.hasBefore&&!e.hasAfter?!1:JSON.stringify(e.before)!==JSON.stringify(e.after)}cloneEntityValue(e){return e==null?e:typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}snapshotToWorldMap(e){const t={};for(const n of e.chunks)for(let i=0;i<n.blocks.length;i++){const r=n.blocks[i];if(r===0)continue;const o=Ke.blockIndexToLocalCoordinate(i),a=`${n.originCoordinate.x+o.x},${n.originCoordinate.y+o.y},${n.originCoordinate.z+o.z}`,l=n.rotations[i]??0;t[a]=l===0?r:{i:r,r:l}}return{blockTypes:e.blockTypes.map(n=>({id:n.id,name:n.name,textureUri:n.textureUri,isLiquid:n.isLiquid,lightLevel:n.lightLevel,...n.trimeshIndices?{trimeshIndices:Array.from(n.trimeshIndices)}:{},...n.trimeshVertices?{trimeshVertices:Array.from(n.trimeshVertices)}:{},durability:n.durability,customColliderOptions:n.customColliderOptions,isCustom:n.isCustom,isMultiTexture:n.isMultiTexture})),blocks:t,...e.entities?{entities:{...e.entities}}:{}}}worldMapToSnapshot(e){const t=new Ad;return t.load(e,Li),t.toSnapshot()}async undo(){const e=this.undoStack.pop();if(!e){this.updateHistoryButtons(),this.updateStatus("Nothing to undo.");return}this.redoStack.push(e),this.updateHistoryButtons(),await this.applyHistoryEntry(e,"before"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Undid: ${e.label}.`)}async redo(){const e=this.redoStack.pop();if(!e){this.updateHistoryButtons(),this.updateStatus("Nothing to redo.");return}this.undoStack.push(e),this.updateHistoryButtons(),await this.applyHistoryEntry(e,"after"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Redid: ${e.label}.`)}async applyHistoryEntry(e,t){if(e.kind==="snapshot"){const r=t==="before"?e.before:e.after,o=t==="before"?e.after:e.before;this.markFullWorldAutosaveDirty(),await this.restoreSnapshot(r,o);return}const n=t==="before"?"before":"after",i=e.chunks.map(r=>r.chunkId);for(const r of e.chunks)this.world.applyChunkSnapshot(r.chunkId,r[n]);if(this.markChunkIdsAutosaveDirty(i),e.entities){const r={},o=this.world.entities;for(const a of e.entities){a.key in o&&(r[a.key]=this.cloneEntityValue(o[a.key]));const l=t==="before"?a.hasBefore:a.hasAfter,c=t==="before"?a.before:a.after;l?o[a.key]=this.cloneEntityValue(c):delete o[a.key]}this.world.setEntities(Object.keys(o).length>0?o:void 0),this.markEntitiesAutosaveDirty(),await this.syncEntityMarkersForKeys(e.entities.map(a=>a.key),r)}await this.rebuildAffectedChunks(this.expandChunkIdsForLighting(i))}markChunkIdsAutosaveDirty(e){if(!this.autosaveFullWorldDirty)for(const t of e)this.autosaveDirtyChunkIds.add(t)}markEntitiesAutosaveDirty(){this.autosaveEntitiesDirty=!0}markFullWorldAutosaveDirty(){this.autosaveFullWorldDirty=!0,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!0}resetAutosaveDirtyState(){this.autosaveFullWorldDirty=!1,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!1}async restoreSnapshot(e,t){const n=!this.areSnapshotsBlockTypeCompatible(t,e),i=n?[]:this.expandChunkIdsForLighting(this.getChangedChunkIds(t,e));if(this.world.loadSnapshot(e),n){await this.rebuildAllChunkMeshes();return}await this.rebuildAffectedChunks(i)}areSnapshotsBlockTypeCompatible(e,t){if(e.blockTypes.length!==t.blockTypes.length)return!1;for(let n=0;n<e.blockTypes.length;n++){const i=e.blockTypes[n],r=t.blockTypes[n];if(i.id!==r.id||i.name!==r.name||i.textureUri!==r.textureUri||i.isLiquid!==r.isLiquid||i.isMultiTexture!==r.isMultiTexture)return!1}return!0}getChangedChunkIds(e,t){const n=new Set,i=new Map(e.chunks.map(o=>[o.chunkId,o])),r=new Map(t.chunks.map(o=>[o.chunkId,o]));for(const o of new Set([...i.keys(),...r.keys()])){const a=i.get(o),l=r.get(o);if(!a||!l){n.add(o);continue}(!Eo(a.blocks,l.blocks)||!Eo(a.rotations,l.rotations))&&n.add(o)}return[...n]}expandChunkIdsForLighting(e){const t=new Set;for(const n of e){const i=Ke.chunkIdToOriginCoordinate(n);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)t.add(Ke.originCoordinateToChunkId({x:i.x+a*16,y:i.y+r*16,z:i.z+o*16}))}return[...t]}updateStatus(e){}updateDebugPanel(){var n;const e=this.renderer.info,t=performance.memory;this.debugSummaryLine.innerHTML=`<strong>FPS:</strong> ${this.fps} <strong>Chunks:</strong> ${this.world.chunkIds.length} <strong>Chunk Batches:</strong> ${((n=this.chunkMeshManager)==null?void 0:n.batchMeshCount)??this.chunkBatchRenderer.batchMeshCount}`,this.debugRenderLine.innerHTML=`<strong>Draw Calls:</strong> ${e.render.calls} <strong>Triangles:</strong> ${e.render.triangles}`,this.debugSceneLine.innerHTML=`<strong>Geometries:</strong> ${e.memory.geometries} <strong>Textures:</strong> ${e.memory.textures}`,t?this.debugMemoryLine.innerHTML=`<strong>Heap:</strong> ${sf(t.usedJSHeapSize)} / ${sf(t.totalJSHeapSize)}`:this.debugMemoryLine.innerHTML="<strong>Heap:</strong> unavailable in this browser"}updateViewDistanceVisibility(){const e=this.getCurrentViewDistance(),t=this.getCurrentLodTransitionDistance(),n=e*e,i=t*t;this.camera.updateMatrixWorld(),xs.set(this.camera.position.x,this.camera.position.z),zd.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),vs.setFromProjectionMatrix(zd);const o=(this.chunkMeshManager??this.chunkBatchRenderer).collectPreOcclusionChunkModes(xs,i,n,vs,this.nextPreOcclusionChunkModes);this.preOcclusionChunkModes.clear();for(const[a,l]of o)this.preOcclusionChunkModes.set(a,l);this.chunkMeshManager?this.chunkMeshManager.applyBatchVisibility(xs,i,n,vs,this.preOcclusionChunkModes):this.chunkBatchRenderer.applyViewDistanceVisibility(xs,i,n,vs,this.preOcclusionChunkModes),this.entityMeshManager.updateScenePresence(xs,n,vs);for(const a of this.entityRenderObjects){const l=Number(a.userData.visibilityRadius??1);yo.center.copy(a.getWorldPosition(gs)),yo.radius=l;const c=Db(yo.center,xs)<=n,h=vs.intersectsSphere(yo),u=c&&h,d=a.parent!==null;u&&!d?this.entityLayer.add(a):!u&&d&&this.entityLayer.remove(a)}}updateSpectatorRotation(e,t){this.spectatorPitch=Math.max(-Hd,Math.min(Hd,this.spectatorPitch+t*Vd)),this.spectatorYaw-=e*Vd,this.applySpectatorCameraOrientation(),this.scheduleViewStateAutosave()}applySpectatorCameraOrientation(){this.camera.rotation.set(-this.spectatorPitch,this.spectatorYaw,0,"YXZ")}updateSpectatorCamera(e){if(!this.pointerLocked&&!this.mobileControlsEnabled)return!1;const t=ab*e;ol.copy(this.camera.rotation),Mo.set(0,0,-1).applyEuler(ol),So.set(1,0,0).applyEuler(ol);let n=!1;return this.pressedKeys.has("key_w")&&(this.camera.position.addScaledVector(Mo,t),n=!0),this.pressedKeys.has("key_s")&&(this.camera.position.addScaledVector(Mo,-t),n=!0),this.pressedKeys.has("key_a")&&(this.camera.position.addScaledVector(So,-t),n=!0),this.pressedKeys.has("key_d")&&(this.camera.position.addScaledVector(So,t),n=!0),this.pressedKeys.has("space")&&(this.camera.position.y+=t,n=!0),this.pressedKeys.has("shift")&&(this.camera.position.y-=t,n=!0),this.mobileControlsEnabled&&(Math.abs(this.mobileMoveInputY)>.01&&(this.camera.position.addScaledVector(Mo,-this.mobileMoveInputY*t),n=!0),Math.abs(this.mobileMoveInputX)>.01&&(this.camera.position.addScaledVector(So,this.mobileMoveInputX*t),n=!0)),n&&this.scheduleViewStateAutosave(),n}getCurrentBlockTypeDefinitions(){return this.world.toJson().blockTypes??Li}resolveTemplateBlockIds(e){var i;const t=(...r)=>{var a;const o=r.map(l=>l.toLowerCase());return(a=e.find(l=>o.includes(l.name.toLowerCase())))==null?void 0:a.id},n=((i=e[0])==null?void 0:i.id)??1;return{accent:t("bricks","andesite")??n,grass:t("grass-block","grass-block-pine","grass-flower-block","grass-flower-block-pine")??n,leaves:t("oak-leaves","birch-leaves","spruce-leaves")??n,sand:t("sand")??n,stone:t("stone","andesite","cobblestone")??n,wall:t("cobblestone","andesite","stone")??n,water:t("water")??n,wood:t("oak-log","spruce-log")??n}}getEntityLabel(e){if(e&&typeof e=="object"){const t=e,n=t.name??t.modelUri??t.modelLoopedAnimations??t.type;if(typeof n=="string"&&n.length>0)return n}return"entity"}async addEntityAtHover(){const e=this.hoveredPlacement??this.hoveredBlock;if(!e){this.updateStatus("No hover target for entity placement.");return}const t=`${e.x+.5},${e.y+.5},${e.z+.5}`,n=this.cloneEntityValue(void 0);this.world.setEntity(t,{name:"entity"}),this.pushPatchUndoState("Add entity",new Map,[{key:t,before:n,after:this.cloneEntityValue(this.world.entities[t]),hasBefore:!1,hasAfter:!0}]),this.selectedEntityKey=t,this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([t]),this.scheduleAutosave(),this.updateStatus(`Added entity at ${t}.`)}async saveSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}try{const e=JSON.parse(this.entityOptionsInput.value||"{}"),t=this.world.entities,n=this.cloneEntityValue(t[this.selectedEntityKey]);this.world.setEntity(this.selectedEntityKey,e),this.pushPatchUndoState("Edit entity",new Map,[{key:this.selectedEntityKey,before:n,after:this.cloneEntityValue(e),hasBefore:!0,hasAfter:!0}]),this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([this.selectedEntityKey],{[this.selectedEntityKey]:n}),this.scheduleAutosave(),this.updateStatus(`Saved entity at ${this.selectedEntityKey}.`)}catch(e){this.updateStatus(`Invalid entity JSON: ${e.message}`)}}async deleteSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}const e=this.selectedEntityKey,t=this.world.entities,n=this.cloneEntityValue(t[e]);this.world.deleteEntity(e),this.pushPatchUndoState("Delete entity",new Map,[{key:e,before:n,after:this.cloneEntityValue(void 0),hasBefore:!0,hasAfter:!1}]),this.markEntitiesAutosaveDirty(),this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([e],{[e]:n}),this.scheduleAutosave(),this.updateStatus(`Deleted entity at ${e}.`)}scheduleAutosave(){this.autosaveTimeoutId!==null&&window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=window.setTimeout(()=>{this.autosaveTimeoutId=null,this.flushAutosave()},qd)}scheduleViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=window.setTimeout(()=>{this.viewStateAutosaveTimeoutId=null,this.flushViewStateAutosave()},qd)}async flushAutosave(){this.autosaveTimeoutId!==null&&(window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=null);const e={fileName:this.fileName,blockTypes:this.world.blockTypes.map(r=>({id:r.id,name:r.name,textureUri:r.textureUri,isLiquid:r.isLiquid,lightLevel:r.lightLevel,...r.trimeshIndices?{trimeshIndices:Array.from(r.trimeshIndices)}:{},...r.trimeshVertices?{trimeshVertices:Array.from(r.trimeshVertices)}:{},durability:r.durability,customColliderOptions:r.customColliderOptions,isCustom:r.isCustom,isMultiTexture:r.isMultiTexture})),redoStack:this.redoStack.map(r=>this.serializeHistoryEntry(r)),undoStack:this.undoStack.map(r=>this.serializeHistoryEntry(r))},t=this.autosaveFullWorldDirty?this.world.chunkIds.map(r=>this.world.getChunkSnapshot(r)).filter(r=>r!==null).map(r=>({chunkId:r.chunkId,originCoordinate:r.originCoordinate,blocks:r.blocks,rotations:r.rotations})):[],n=this.autosaveFullWorldDirty?[]:[...this.autosaveDirtyChunkIds].map(r=>{const o=this.world.getChunkSnapshot(r);return{chunkId:r,snapshot:o?{chunkId:o.chunkId,originCoordinate:o.originCoordinate,blocks:o.blocks,rotations:o.rotations}:null}}),i=this.autosaveEntitiesDirty||this.autosaveFullWorldDirty?Object.entries(this.world.entities).map(([r,o])=>({key:r,options:o})):[];try{this.autosaveFullWorldDirty?await Ib(e,t,i):await Lb(e,n,this.autosaveEntitiesDirty?i:null),localStorage.removeItem(sr),this.resetAutosaveDirtyState()}catch(r){console.error(r);try{const o={fileName:this.fileName,redoStack:e.redoStack,undoStack:e.undoStack,world:this.world.toJson()};localStorage.setItem(sr,JSON.stringify(o))}catch(o){console.error(o)}}}async flushViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&(window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=null);const e={camera:{pitch:this.spectatorPitch,position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},yaw:this.spectatorYaw},lighting:{ambient:this.lightingAmbient,fogColorHex:this.fogColorHex,skyboxIntensity:this.skyboxUiIntensity},menuOpen:this.mobileSidebarOpen,paletteFilter:this.paletteFilter,resolutionPreset:this.resolutionPreset,viewDistance:{customDistance:this.viewDistanceCustomDistance,preset:this.viewDistancePreset}};try{await Ab(e)}catch(t){console.error(t)}}buildExploreUrl(){const e=new URL(hb,window.location.origin);return e.searchParams.set(db,"solo"),e.searchParams.set(fb,"peaceful"),e.searchParams.set(ub,"editor"),e}async openExploreMode(){const e=window.open("about:blank","_blank");if(!e){this.updateStatus("Failed to open Explore tab. Allow pop-ups and try again.");return}e.document.title="Preparing Explore...",this.updateStatus("Saving map for Explore...");try{await this.flushAutosave(),await this.flushViewStateAutosave(),e.location.href=this.buildExploreUrl().toString(),this.updateStatus("Opened Explore in a new tab.")}catch(t){e.close(),this.updateStatus(`Failed to open Explore: ${t.message}`)}}async getRestorableAutosavePayload(){let e=null,t=null;try{t=await Pb(),t||(e=JSON.parse(localStorage.getItem(sr)??"null"))}catch{e=null,t=null}const n=(t==null?void 0:t.world)??(e==null?void 0:e.world);return n?{legacyPayload:e,metaPayload:(t==null?void 0:t.meta)??null,worldPayload:n}:null}async applyAutosavedWorldPayload(e,t){var n,i,r,o,a,l,c;try{this.world.load(e.worldPayload,Li),this.selectedBlockTypeId=((n=this.world.blockTypes[0])==null?void 0:n.id)??this.selectedBlockTypeId,this.fileName=((i=e.metaPayload)==null?void 0:i.fileName)||((r=e.legacyPayload)==null?void 0:r.fileName)||"untitled-world-map.json",this.undoStack=(((o=e.metaPayload)==null?void 0:o.undoStack)??((a=e.legacyPayload)==null?void 0:a.undoStack)??[]).map(h=>this.deserializeHistoryEntry(h)),this.redoStack=(((l=e.metaPayload)==null?void 0:l.redoStack)??((c=e.legacyPayload)==null?void 0:c.redoStack)??[]).map(h=>this.deserializeHistoryEntry(h)),this.updateHistoryButtons(),this.resetAutosaveDirtyState(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),t?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),this.updateStatus(`Restored autosave for ${this.fileName}.`)}catch(h){throw console.error(h),localStorage.removeItem(sr),nf(),h}}updateHistoryButtons(){this.undoButton.disabled=this.undoStack.length===0,this.redoButton.disabled=this.redoStack.length===0}async restoreAutosavedViewState(){var t,n;let e=null;try{e=await wb()}catch{e=null}e&&(this.spectatorPitch=e.camera.pitch,this.spectatorYaw=e.camera.yaw,this.camera.position.set(e.camera.position.x,e.camera.position.y,e.camera.position.z),this.applySpectatorCameraOrientation(),this.setMobileSidebarOpen(e.menuOpen??!1,!1),this.paletteFilter=e.paletteFilter??"",this.paletteFilterInput.value=this.paletteFilter,this.resolutionPreset=e.resolutionPreset??"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.viewDistancePreset=((t=e.viewDistance)==null?void 0:t.preset)??"MEDIUM",this.viewDistanceCustomDistance=((n=e.viewDistance)==null?void 0:n.customDistance)??Fi.MEDIUM.distance,this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.lightingAmbient=e.lighting.ambient,this.fogColorHex=e.lighting.fogColorHex||"#ffffff",this.skyboxUiIntensity=e.lighting.skyboxIntensity,this.syncLightingInputs(),this.applyLightingSettings())}}function Rr(){return new Promise((s,e)=>{const t=indexedDB.open(mb,1);t.onerror=()=>e(t.error),t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains(un)||n.createObjectStore(un)},t.onsuccess=()=>s(t.result)})}async function dp(s,e){const t=await Rr();try{return await new Promise((n,i)=>{const r=t.transaction(un,s),o=r.objectStore(un),a=e(o);a.onerror=()=>i(a.error),a.onsuccess=()=>n(a.result),r.onerror=()=>i(r.error)})}finally{t.close()}}function Cb(s,e){return dp("readwrite",t=>t.put(e,s)).then(()=>{})}async function fp(s){return await dp("readonly",t=>t.get(s))??null}function Ab(s){return Cb(hp,s)}function wb(){return fp(hp)}function pp(s){return`chunk:${s}`}function mp(s){return`entity:${s}`}async function Rb(s,e){const t=await Rr();try{await new Promise((n,i)=>{const r=t.transaction(un,s),o=r.objectStore(un),a=o.openCursor();a.onerror=()=>i(a.error),a.onsuccess=()=>{const l=a.result;if(!l){n();return}Promise.resolve(e(l.key,l.value,o)).then(()=>l.continue()).catch(i)},r.onerror=()=>i(r.error)})}finally{t.close()}}async function Ib(s,e,t){const n=await Rr();try{await new Promise((i,r)=>{const o=n.transaction(un,"readwrite"),a=o.objectStore(un),l=a.clear();l.onerror=()=>r(l.error),l.onsuccess=()=>{a.put(s,Eh);for(const c of e)a.put(c,pp(c.chunkId));for(const c of t)a.put(c,mp(c.key));o.oncomplete=()=>i()},o.onerror=()=>r(o.error)})}finally{n.close()}}async function Lb(s,e,t){const n=await Rr();try{await new Promise((i,r)=>{const o=n.transaction(un,"readwrite"),a=o.objectStore(un);a.put(s,Eh);for(const l of e){const c=pp(l.chunkId);l.snapshot?a.put(l.snapshot,c):a.delete(c)}if(t){const l=a.openCursor();l.onerror=()=>r(l.error),l.onsuccess=()=>{const c=l.result;if(!c){for(const h of t)a.put(h,mp(h.key));return}typeof c.key=="string"&&c.key.startsWith("entity:")&&c.delete(),c.continue()}}o.oncomplete=()=>i(),o.onerror=()=>r(o.error)})}finally{n.close()}}async function Pb(){const s=await fp(Eh);if(!s)return null;const e={},t={};return await Rb("readonly",(n,i)=>{if(typeof n=="string"){if(n.startsWith("chunk:")){const r=i;for(let o=0;o<r.blocks.length;o++){const a=r.blocks[o];if(a===0)continue;const l=Ke.blockIndexToLocalCoordinate(o),c=`${r.originCoordinate.x+l.x},${r.originCoordinate.y+l.y},${r.originCoordinate.z+l.z}`,h=r.rotations[o]??0;e[c]=h===0?a:{i:a,r:h}}return}if(n.startsWith("entity:")){const r=i;t[r.key]=r.options}}}),{meta:s,world:{blockTypes:s.blockTypes,blocks:e,...Object.keys(t).length>0?{entities:t}:{}}}}async function nf(){const s=await Rr();try{await new Promise((e,t)=>{const n=s.transaction(un,"readwrite"),r=n.objectStore(un).clear();r.onerror=()=>t(r.error),r.onsuccess=()=>e(),n.onerror=()=>t(n.error)})}finally{s.close()}}function cl(s,e,t,n){if(n===0||e===0)return Number.POSITIVE_INFINITY;const i=n>0?t+1:t;return Math.abs((i-s)/e)}function sf(s){return`${(s/(1024*1024)).toFixed(1)} MB`}function hl(s){return`${s.x},${s.y},${s.z}`}function Eo(s,e){if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0}function rf(s){switch(s){case"KeyW":return"key_w";case"KeyA":return"key_a";case"KeyS":return"key_s";case"KeyD":return"key_d";case"Space":return"space";case"ShiftLeft":case"ShiftRight":return"shift";default:return s.toLowerCase()}}function ys(s){const e=s.split(",");if(e.length!==3)return null;const t=Number(e[0]),n=Number(e[1]),i=Number(e[2]);return!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(i)?null:{x:t,y:n,z:i}}function Db(s,e){const t=s.x-e.x,n=s.z-e.y;return t*t+n*n}function Bb(s){if(!s||typeof s!="object")return null;const e=s.tintColor;if(typeof e=="string"&&e.length>0)try{return new me(e)}catch{return null}if(Array.isArray(e)&&e.length>=3){const t=Number(e[0]),n=Number(e[1]),i=Number(e[2]);if(Number.isFinite(t)&&Number.isFinite(n)&&Number.isFinite(i))return new me(t,n,i)}if(e&&typeof e=="object"){const t=e,n=Number(t.r??t.x),i=Number(t.g??t.y),r=Number(t.b??t.z);if(Number.isFinite(n)&&Number.isFinite(i)&&Number.isFinite(r))return new me(n,i,r)}return null}function Ub(s){if(_s.set(1,1,1),!s||typeof s!="object")return _s;const e=s,t=e.modelScale??e.scale;if(typeof t=="number")return _s.setScalar(t),_s;if(t&&typeof t=="object"){const n=t;_s.set(Number(n.x??1)||1,Number(n.y??1)||1,Number(n.z??1)||1)}return _s}function Nb(s){if(ir.identity(),!s||typeof s!="object")return ir;const t=s.rotation;if(!t||typeof t!="object")return ir;const n=t;return typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"&&typeof n.w=="number"&&ir.set(n.x,n.y,n.z,n.w),ir}new Tb(cp);
