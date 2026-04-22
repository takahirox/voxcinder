var sf=Object.defineProperty;var rf=(s,e,t)=>e in s?sf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var N=(s,e,t)=>rf(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="183",of=0,Lc=1,af=2,Zr=1,lf=2,Ns=3,Cn=0,Ot=1,en=2,Yn=0,es=1,Pc=2,Dc=3,Uc=4,cf=5,bi=100,uf=101,hf=102,df=103,ff=104,pf=200,mf=201,gf=202,_f=203,Aa=204,wa=205,xf=206,vf=207,yf=208,Mf=209,Sf=210,bf=211,Ef=212,Tf=213,Af=214,Ca=0,Ra=1,Ia=2,ss=3,La=4,Pa=5,Da=6,Ua=7,Xh=0,wf=1,Cf=2,Tn=0,qh=1,Yh=2,$h=3,Kh=4,jh=5,Zh=6,Jh=7,Nc="attached",Rf="detached",Qh=300,Ri=301,rs=302,Ro=303,Io=304,xo=306,os=1e3,bn=1001,oo=1002,yt=1003,ed=1004,Fs=1005,Tt=1006,Jr=1007,Gn=1008,Kt=1009,td=1010,nd=1011,qs=1012,Wl=1013,Rn=1014,nn=1015,Kn=1016,Xl=1017,ql=1018,Ys=1020,id=35902,sd=35899,rd=1021,od=1022,sn=1023,jn=1026,Ti=1027,Yl=1028,$l=1029,as=1030,Kl=1031,jl=1033,Qr=33776,eo=33777,to=33778,no=33779,Na=35840,Fa=35841,Oa=35842,Ba=35843,ka=36196,za=37492,Va=37496,Ha=37488,Ga=37489,Wa=37490,Xa=37491,qa=37808,Ya=37809,$a=37810,Ka=37811,ja=37812,Za=37813,Ja=37814,Qa=37815,el=37816,tl=37817,nl=37818,il=37819,sl=37820,rl=37821,ol=36492,al=36494,ll=36495,cl=36283,ul=36284,hl=36285,dl=36286,$s=2300,Ks=2301,Lo=2302,Fc=2303,Oc=2400,Bc=2401,kc=2402,If=2500,Lf=0,ad=1,fl=2,Pf=3200,ld=0,Df=1,oi="",vt="srgb",Ht="srgb-linear",ao="linear",tt="srgb",Ui=7680,zc=519,Uf=512,Nf=513,Ff=514,Zl=515,Of=516,Bf=517,Jl=518,kf=519,pl=35044,lo="300 es",En=2e3,js=2001;function zf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hf(){const s=Zs("canvas");return s.style.display="block",s}const Vc={};function co(...s){const e="THREE."+s.shift();console.log(e,...s)}function cd(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function we(...s){s=cd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Le(...s){s=cd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function uo(...s){const e=s.join(" ");e in Vc||(Vc[e]=!0,we(...s))}function Gf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Wf={[Ca]:Ra,[Ia]:Da,[La]:Ua,[ss]:Pa,[Ra]:Ca,[Da]:Ia,[Ua]:La,[Pa]:ss};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hc=1234567;const ts=Math.PI/180,ls=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function Ql(s,e){return(s%e+e)%e}function Xf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qf(s,e,t){return s!==e?(t-s)/(e-s):0}function zs(s,e,t){return(1-t)*s+t*e}function Yf(s,e,t,n){return zs(s,e,1-Math.exp(-t*n))}function $f(s,e=1){return e-Math.abs(Ql(s,e*2)-e)}function Kf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function jf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Zf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Jf(s,e){return s+Math.random()*(e-s)}function Qf(s){return s*(.5-Math.random())}function ep(s){s!==void 0&&(Hc=s);let e=Hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tp(s){return s*ts}function np(s){return s*ls}function ip(s){return(s&s-1)===0&&s!==0}function sp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function op(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*u,a*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ap={DEG2RAD:ts,RAD2DEG:ls,generateUUID:fn,clamp:qe,euclideanModulo:Ql,mapLinear:Xf,inverseLerp:qf,lerp:zs,damp:Yf,pingpong:$f,smoothstep:Kf,smootherstep:jf,randInt:Zf,randFloat:Jf,randFloatSpread:Qf,seededRandom:ep,degToRad:tp,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:rp,setQuaternionFromProperEuler:op,normalize:nt,denormalize:dn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class In{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(h!==_||l!==d||c!==f||u!==m){let p=l*d+c*f+u*m+h*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const y=Math.acos(p),E=Math.sin(y);g=Math.sin(g*y)/E,a=Math.sin(a*y)/E,l=l*g+d*a,c=c*g+f*a,u=u*g+m*a,h=h*g+_*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+m*a,h=h*g+_*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new P,Gc=new In;class Be{constructor(e,t,n,i,r,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],E=i[4],M=i[7],A=i[2],w=i[5],T=i[8];return r[0]=o*_+a*y+l*A,r[3]=o*p+a*E+l*w,r[6]=o*g+a*M+l*T,r[1]=c*_+u*y+h*A,r[4]=c*p+u*E+h*w,r[7]=c*g+u*M+h*T,r[2]=d*_+f*y+m*A,r[5]=d*p+f*E+m*w,r[8]=d*g+f*M+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Be,Wc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){const s={enabled:!0,workingColorSpace:Ht,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?ao:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ht]:{primaries:e,whitePoint:n,transfer:ao,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),s}const $e=lp();function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ni;class cp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Zs("canvas")),Ni.width=e.width,Ni.height=e.height;const i=Ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let up=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uo(i[o].image)):r.push(Uo(i[o]))}else r=Uo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let hp=0;const No=new P;class At extends ps{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=bn,i=bn,r=Tt,o=Gn,a=sn,l=Kt,c=At.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=fn(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Qh;At.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(f+1)/2,A=(g+1)/2,w=(u+d)/4,T=(h+_)/4,x=(m+p)/4;return E>M&&E>A?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=w/n,r=T/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=x/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=x/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dp extends ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new At(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ec(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends dp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ud extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fp extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,m,_,p){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,m,_,p)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),o=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Qn.crossVectors(n,Yt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Qn.crossVectors(n,Yt)),Qn.normalize(),lr.crossVectors(Yt,Qn),i[0]=Qn.x,i[4]=lr.x,i[8]=Yt.x,i[1]=Qn.y,i[5]=lr.y,i[9]=Yt.y,i[2]=Qn.z,i[6]=lr.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],E=n[7],M=n[11],A=n[15],w=i[0],T=i[4],x=i[8],S=i[12],O=i[1],R=i[5],B=i[9],k=i[13],F=i[2],V=i[6],H=i[10],z=i[14],Q=i[3],J=i[7],le=i[11],fe=i[15];return r[0]=o*w+a*O+l*F+c*Q,r[4]=o*T+a*R+l*V+c*J,r[8]=o*x+a*B+l*H+c*le,r[12]=o*S+a*k+l*z+c*fe,r[1]=u*w+h*O+d*F+f*Q,r[5]=u*T+h*R+d*V+f*J,r[9]=u*x+h*B+d*H+f*le,r[13]=u*S+h*k+d*z+f*fe,r[2]=m*w+_*O+p*F+g*Q,r[6]=m*T+_*R+p*V+g*J,r[10]=m*x+_*B+p*H+g*le,r[14]=m*S+_*k+p*z+g*fe,r[3]=y*w+E*O+M*F+A*Q,r[7]=y*T+E*R+M*V+A*J,r[11]=y*x+E*B+M*H+A*le,r[15]=y*S+E*k+M*z+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],y=l*f-c*d,E=a*f-c*h,M=a*d-l*h,A=o*f-c*u,w=o*d-l*u,T=o*h-a*u;return t*(_*y-p*E+g*M)-n*(m*y-p*A+g*w)+i*(m*E-_*A+g*T)-r*(m*M-_*w+p*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],y=t*a-n*o,E=t*l-i*o,M=t*c-r*o,A=n*l-i*a,w=n*c-r*a,T=i*c-r*l,x=u*_-h*m,S=u*p-d*m,O=u*g-f*m,R=h*p-d*_,B=h*g-f*_,k=d*g-f*p,F=y*k-E*B+M*R+A*O-w*S+T*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/F;return e[0]=(a*k-l*B+c*R)*V,e[1]=(i*B-n*k-r*R)*V,e[2]=(_*T-p*w+g*A)*V,e[3]=(d*w-h*T-f*A)*V,e[4]=(l*O-o*k-c*S)*V,e[5]=(t*k-i*O+r*S)*V,e[6]=(p*M-m*T-g*E)*V,e[7]=(u*T-d*M+f*E)*V,e[8]=(o*B-a*O+c*x)*V,e[9]=(n*O-t*B-r*x)*V,e[10]=(m*w-_*M+g*y)*V,e[11]=(h*M-u*w-f*y)*V,e[12]=(a*S-o*R-l*x)*V,e[13]=(t*R-n*S+i*x)*V,e[14]=(_*E-m*A-p*y)*V,e[15]=(u*A-h*E+d*y)*V,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,_=o*u,p=o*h,g=a*h,y=l*c,E=l*u,M=l*h,A=n.x,w=n.y,T=n.z;return i[0]=(1-(_+g))*A,i[1]=(f+M)*A,i[2]=(m-E)*A,i[3]=0,i[4]=(f-M)*w,i[5]=(1-(d+g))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(m+E)*T,i[9]=(p-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Fi.set(i[0],i[1],i[2]).length();const a=Fi.set(i[4],i[5],i[6]).length(),l=Fi.set(i[8],i[9],i[10]).length();r<0&&(o=-o),cn.copy(this);const c=1/o,u=1/a,h=1/l;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=En,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===En)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===js)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=En,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===En)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===js)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fi=new P,cn=new Ue,pp=new P(0,0,0),mp=new P(1,1,1),Qn=new P,lr=new P,Yt=new P,qc=new Ue,Yc=new In;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gp=0;const $c=new P,Oi=new In,Nn=new Ue,cr=new P,vs=new P,_p=new P,xp=new In,Kc=new P(1,0,0),jc=new P(0,1,0),Zc=new P(0,0,1),Jc={type:"added"},vp={type:"removed"},Bi={type:"childadded",child:null},Fo={type:"childremoved",child:null};class mt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new P,t=new pn,n=new In,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Be}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Kc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(vs,cr,this.up):Nn.lookAt(cr,vs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Bo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Ql(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bo(o,r,e+1/3),this.g=Bo(o,r,e),this.b=Bo(o,r,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return $e.workingToColorSpace(Ft.copy(this),e),Math.round(qe(Ft.r*255,0,255))*65536+Math.round(qe(Ft.g*255,0,255))*256+Math.round(qe(Ft.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=vt){$e.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(ur);const n=zs(ei.h,ur.h,t),i=zs(ei.s,ur.s,t),r=zs(ei.l,ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Se;Se.NAMES=dd;class Mp extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const un=new P,Fn=new P,ko=new P,On=new P,ki=new P,zi=new P,Qc=new P,zo=new P,Vo=new P,Ho=new P,Go=new dt,Wo=new dt,Xo=new dt;class tn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),Fn.subVectors(n,t),ko.subVectors(e,t);const o=un.dot(un),a=un.dot(Fn),l=un.dot(ko),c=Fn.dot(Fn),u=Fn.dot(ko),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Go,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Fn.subVectors(e,t),un.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),un.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ki.subVectors(i,n),zi.subVectors(r,n),zo.subVectors(e,n);const l=ki.dot(zo),c=zi.dot(zo);if(l<=0&&c<=0)return t.copy(n);Vo.subVectors(e,i);const u=ki.dot(Vo),h=zi.dot(Vo);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ki,o);Ho.subVectors(e,r);const f=ki.dot(Ho),m=zi.dot(Ho);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(zi,a);const p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return Qc.subVectors(r,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Qc,a);const g=1/(p+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(ki,o).addScaledVector(zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),dr.subVectors(this.max,ys),Vi.subVectors(e.a,ys),Hi.subVectors(e.b,ys),Gi.subVectors(e.c,ys),ti.subVectors(Hi,Vi),ni.subVectors(Gi,Hi),hi.subVectors(Vi,Gi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-hi.z,hi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,hi.z,0,-hi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-hi.y,hi.x,0];return!qo(t,Vi,Hi,Gi,dr)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,Vi,Hi,Gi,dr))?!1:(fr.crossVectors(ti,ni),t=[fr.x,fr.y,fr.z],qo(t,Vi,Hi,Gi,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,hr=new jt,Vi=new P,Hi=new P,Gi=new P,ti=new P,ni=new P,hi=new P,ys=new P,dr=new P,fr=new P,di=new P;function qo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){di.fromArray(s,r);const a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bt=new P,pr=new Ve;let Sp=0;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pl,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}}class fd extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pd extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rn extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bp=new jt,Ms=new P,Yo=new P;class an{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Yo)),this.expandByPoint(Ms.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ep=0;const Zt=new Ue,$o=new mt,Wi=new P,$t=new jt,Ss=new jt,Lt=new P;class Xt extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?pd:fd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors($t.min,Ss.min),$t.expandByPoint(Lt),Lt.addVectors($t.max,Ss.max),$t.expandByPoint(Lt)):($t.expandByPoint(Ss.min),$t.expandByPoint(Ss.max))}$t.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),Lt.add(Wi)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new P,l[x]=new P;const c=new P,u=new P,h=new P,d=new Ve,f=new Ve,m=new Ve,_=new P,p=new P;function g(x,S,O){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,O),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,O),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(R),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(R),a[x].add(_),a[S].add(_),a[O].add(_),l[x].add(p),l[S].add(p),l[O].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,S=y.length;x<S;++x){const O=y[x],R=O.start,B=O.count;for(let k=R,F=R+B;k<F;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new P,M=new P,A=new P,w=new P;function T(x){A.fromBufferAttribute(i,x),w.copy(A);const S=a[x];E.copy(S),E.sub(A.multiplyScalar(A.dot(S))).normalize(),M.crossVectors(w,S);const R=M.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,R)}for(let x=0,S=y.length;x<S;++x){const O=y[x],R=O.start,B=O.count;for(let k=R,F=R+B;k<F;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)d[m++]=c[f++]}return new Vt(d,u,h)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new P;class tc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ap=0;class wn extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=es,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kn=new P,Ko=new P,mr=new P,ii=new P,jo=new P,gr=new P,Zo=new P;class vo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ko.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Ko);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mr),a=ii.dot(this.direction),l=-ii.dot(mr),c=ii.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ko).addScaledVector(mr,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){jo.subVectors(t,e),gr.subVectors(n,e),Zo.crossVectors(jo,gr);let o=this.direction.dot(Zo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(gr.crossVectors(ii,gr));if(l<0)return null;const c=a*this.direction.dot(jo.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot(Zo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const eu=new Ue,fi=new vo,_r=new an,tu=new P,xr=new P,vr=new P,yr=new P,Jo=new P,Mr=new P,nu=new P,Sr=new P;class Et extends mt{constructor(e=new Xt,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Jo.fromBufferAttribute(h,e),o?Mr.addScaledVector(Jo,u):Mr.addScaledVector(Jo.sub(t),u))}t.add(Mr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(_r.containsPoint(fi.origin)===!1&&(fi.intersectSphere(_r,tu)===null||fi.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(r).invert(),fi.copy(e.ray).applyMatrix4(eu),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,A=E;M<A;M+=3){const w=a.getX(M),T=a.getX(M+1),x=a.getX(M+2);i=br(this,g,e,n,c,u,h,w,T,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const y=a.getX(p),E=a.getX(p+1),M=a.getX(p+2);i=br(this,o,e,n,c,u,h,y,E,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,A=E;M<A;M+=3){const w=M,T=M+1,x=M+2;i=br(this,g,e,n,c,u,h,w,T,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const y=p,E=p+1,M=p+2;i=br(this,o,e,n,c,u,h,y,E,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function wp(s,e,t,n,i,r,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Cn,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:s}}function br(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,xr),s.getVertexPosition(l,vr),s.getVertexPosition(c,yr);const u=wp(s,e,t,n,xr,vr,yr,nu);if(u){const h=new P;tn.getBarycoord(nu,xr,vr,yr,h),i&&(u.uv=tn.getInterpolatedAttribute(i,a,l,c,h,new Ve)),r&&(u.uv1=tn.getInterpolatedAttribute(r,a,l,c,h,new Ve)),o&&(u.normal=tn.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};tn.getNormal(xr,vr,yr,d.normal),u.face=d,u.barycoord=h}return u}const iu=new P,su=new dt,ru=new dt,Cp=new P,ou=new Ue,Er=new P,Qo=new an,au=new Ue,ea=new vo;class Rp extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nc,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingBox.expandByPoint(Er)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingSphere.expandByPoint(Er)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(i),e.ray.intersectsSphere(Qo)!==!1&&(au.copy(i).invert(),ea.copy(e.ray).applyMatrix4(au),!(this.boundingBox!==null&&ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rf?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;su.fromBufferAttribute(i.attributes.skinIndex,e),ru.fromBufferAttribute(i.attributes.skinWeight,e),iu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ru.getComponent(r);if(o!==0){const a=su.getComponent(r);ou.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Cp.copy(iu).applyMatrix4(ou),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class md extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nc extends At{constructor(e=null,t=1,n=1,i,r,o,a,l,c=yt,u=yt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=new Ue,Ip=new Ue;class ic{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ip;lu.multiplyMatrices(a,t[r]),lu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ic(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new nc(t,e,e,sn,nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(we("Skeleton: No bone found with UUID:",r),o=new md),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Js extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xi=new Ue,cu=new Ue,Tr=[],uu=new jt,Lp=new Ue,bs=new Et,Es=new an;class Os extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),uu.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(uu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Es.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xi),cu.multiplyMatrices(n,Xi),bs.matrixWorld=cu,bs.raycast(e,Tr);for(let o=0,a=Tr.length;o<a;o++){const l=Tr[o];l.instanceId=r,l.object=this,t.push(l)}Tr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nc(new Float32Array(i*this.count),i,this.count,Yl,nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ta=new P,Pp=new P,Dp=new Be;class Si{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ta.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dp.getNormalMatrix(e),i=this.coplanarPoint(ta).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new an,Up=new Ve(.5,.5),Ar=new P;class yo{constructor(e=new Si,t=new Si,n=new Si,i=new Si,r=new Si,o=new Si){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],y=r[12],E=r[13],M=r[14],A=r[15];if(i[0].setComponents(c-o,f-u,g-m,A-y).normalize(),i[1].setComponents(c+o,f+u,g+m,A+y).normalize(),i[2].setComponents(c+a,f+h,g+_,A+E).normalize(),i[3].setComponents(c-a,f-h,g-_,A-E).normalize(),n)i[4].setComponents(l,d,p,M).normalize(),i[5].setComponents(c-l,f-d,g-p,A-M).normalize();else if(i[4].setComponents(c-l,f-d,g-p,A-M).normalize(),t===En)i[5].setComponents(c+l,f+d,g+p,A+M).normalize();else if(t===js)i[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=Up.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ar.x=i.normal.x>0?e.max.x:e.min.x,Ar.y=i.normal.y>0?e.max.y:e.min.y,Ar.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ho extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fo=new P,po=new P,hu=new Ue,Ts=new vo,wr=new an,na=new P,du=new P;class sc extends mt{constructor(e=new Xt,t=new ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)fo.fromBufferAttribute(t,i-1),po.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fo.distanceTo(po);e.setAttribute("lineDistance",new rn(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=r,e.ray.intersectsSphere(wr)===!1)return;hu.copy(i).invert(),Ts.copy(e.ray).applyMatrix4(hu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=u.getX(_),y=u.getX(_+1),E=Cr(this,e,Ts,l,g,y,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(m-1),p=u.getX(f),g=Cr(this,e,Ts,l,_,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,p=m-1;_<p;_+=c){const g=Cr(this,e,Ts,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Cr(this,e,Ts,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(fo.fromBufferAttribute(a,i),po.fromBufferAttribute(a,r),t.distanceSqToSegment(fo,po,na,du)>n)return;na.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(na);if(!(c<e.near||c>e.far))return{distance:c,point:du.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const fu=new P,pu=new P;class io extends sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)fu.fromBufferAttribute(t,i),pu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fu.distanceTo(pu);e.setAttribute("lineDistance",new rn(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Np extends sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gd extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mu=new Ue,ml=new vo,Rr=new an,Ir=new P;class Fp extends mt{constructor(e=new Xt,t=new gd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;mu.copy(i).invert(),ml.copy(e.ray).applyMatrix4(mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const p=c.getX(m);Ir.fromBufferAttribute(h,p),gu(Ir,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Ir.fromBufferAttribute(h,m),gu(Ir,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gu(s,e,t,n,i,r,o){const a=ml.distanceSqToPoint(s);if(a<t){const l=new P;ml.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class rc extends At{constructor(e=[],t=Ri,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Op extends At{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qs extends At{constructor(e,t,n=Rn,i,r,o,a=yt,l=yt,c,u=jn,h=1){if(u!==jn&&u!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bp extends Qs{constructor(e,t=Rn,n=Ri,i,r,o=yt,a=yt,l,c=jn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _d extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xn extends Xt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(h,2));function m(_,p,g,y,E,M,A,w,T,x,S){const O=M/T,R=A/x,B=M/2,k=A/2,F=w/2,V=T+1,H=x+1;let z=0,Q=0;const J=new P;for(let le=0;le<H;le++){const fe=le*R-k;for(let pe=0;pe<V;pe++){const ke=pe*O-B;J[_]=ke*y,J[p]=fe*E,J[g]=F,c.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[g]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(pe/T),h.push(1-le/x),z+=1}}for(let le=0;le<x;le++)for(let fe=0;fe<T;fe++){const pe=d+fe+V*le,ke=d+fe+V*(le+1),ft=d+(fe+1)+V*(le+1),ht=d+(fe+1)+V*le;l.push(pe,ke,ht),l.push(ke,ft,ht),Q+=6}a.addGroup(f,Q,S),f+=Q,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Lr=new P,Pr=new P,ia=new P,Dr=new tn;class _u extends Xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ts*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:p,c:g}=Dr;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Dr.getNormal(ia),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const E=(y+1)%3,M=h[y],A=h[E],w=Dr[u[y]],T=Dr[u[E]],x=`${M}_${A}`,S=`${A}_${M}`;S in d&&d[S]?(ia.dot(d[S].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(T.x,T.y,T.z)),d[S]=null):x in d||(d[x]={index0:c[y],index1:c[E],normal:ia.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:p}=d[m];Lr.fromBufferAttribute(a,_),Pr.fromBufferAttribute(a,p),f.push(Lr.x,Lr.y,Lr.z),f.push(Pr.x,Pr.y,Pr.z)}this.setAttribute("position",new rn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ir extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const y=g*d-o;for(let E=0;E<c;E++){const M=E*h-r;m.push(M,-y,0),_.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const E=y+c*g,M=y+c*(g+1),A=y+1+c*(g+1),w=y+1+c*g;f.push(E,M,w),f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}function cs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(s){const e={};for(let t=0;t<s.length;t++){const n=cs(s[t]);for(const i in n)e[i]=n[i]}return e}function kp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const sr={clone:cs,merge:kt};var zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hp extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oc extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends oc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gp extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wp extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ur(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Xp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function xu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function vd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ms{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qp extends ms{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bc:r=e,a=2*t-n;break;case kc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:o=e,l=2*n-t;break;case kc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,y=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,E=(-1-f)*p+(1.5+f)*_+.5*m,M=f*p-f*_;for(let A=0;A!==a;++A)r[A]=g*o[u+A]+y*o[c+A]+E*o[l+A]+M*o[h+A];return r}}class Yp extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class $p extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kp extends ms{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const _=(n-t)/(i-t),p=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*p+o[l+g]*_;return r}const f=a*2,m=e-1;for(let _=0;_!==a;++_){const p=o[c+_],g=o[l+_],y=m*f+_*2,E=d[y],M=d[y+1],A=e*f+_*2,w=h[A],T=h[A+1];let x=(n-t)/(i-t),S,O,R,B,k;for(let F=0;F<8;F++){S=x*x,O=S*x,R=1-x,B=R*R,k=B*R;const H=k*t+3*B*x*E+3*R*S*w+O*i-n;if(Math.abs(H)<1e-10)break;const z=3*B*(E-t)+6*R*x*(w-E)+3*S*(i-w);if(Math.abs(z)<1e-10)break;x=x-H/z,x=Math.max(0,Math.min(1,x))}r[_]=k*p+3*B*x*M+3*R*S*T+O*g}return r}}class mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $p(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Kp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case Lo:t=this.InterpolantFactoryMethodSmooth;break;case Fc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Le("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Vf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Ks;class gs extends mn{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=$s;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class yd extends mn{constructor(e,t,n,i){super(e,t,n,i)}}yd.prototype.ValueTypeName="color";class us extends mn{constructor(e,t,n,i){super(e,t,n,i)}}us.prototype.ValueTypeName="number";class jp extends ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}}class hs extends mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new jp(this.times,this.values,this.getValueSize(),e)}}hs.prototype.ValueTypeName="quaternion";hs.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends mn{constructor(e,t,n){super(e,t,n)}}_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=$s;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends mn{constructor(e,t,n,i){super(e,t,n,i)}}ds.prototype.ValueTypeName="vector";class Zp{constructor(e="",t=-1,n=[],i=If){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Qp(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Xp(l);l=xu(l,1,u),c=xu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new us(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(we("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Le("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const p=[],g=[];vd(f,p,g,m),p.length!==0&&_.push(new h(d,p,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const p=[],g=[];for(let y=0;y!==d[m].morphTargets.length;++y){const E=d[m];p.push(E.time),g.push(E.morphTarget===_?1:0)}i.push(new us(".morphTargetInfluence["+_+"]",p,g))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(ds,f+".position",d,"pos",i),n(hs,f+".quaternion",d,"rot",i),n(ds,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Jp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return yd;case"quaternion":return hs;case"bool":case"boolean":return gs;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Qp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jp(s.type);if(s.times===void 0){const t=[],n=[];vd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const qn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(vu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!vu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function vu(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class em{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tm=new em;class Li{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Li.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class nm extends Error{constructor(e,t){super(e),this.response=t}}class Md extends Li{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=qn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:i});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const p=new ReadableStream({start(g){y();function y(){h.read().then(({done:E,value:M})=>{if(E)g.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,T=u.length;w<T;w++){const x=u[w];x.onProgress&&x.onProgress(A)}g.enqueue(M),y()}},E=>{g.error(E)})}}});return new Response(p)}else throw new nm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{qn.add(`file:${e}`,c);const u=zn[e];delete zn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qi=new WeakMap;class Sd extends Li{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=qn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=qi.get(o);h===void 0&&(h=[],qi.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Zs("img");function l(){u(),t&&t(this);const h=qi.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}qi.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),qn.remove(`image:${e}`);const d=qi.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(h)}qi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class im extends Li{constructor(e){super(e)}load(e,t,n,i){const r=new rc;r.colorSpace=vt;const o=new Sd(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class sm extends Li{constructor(e){super(e)}load(e,t,n,i){const r=new At,o=new Sd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Mo extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const sa=new Ue,yu=new P,Mu=new P;class ac{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(yu),Mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mu),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===js||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nr=new P,Fr=new In,_n=new P;class bd extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nr,Fr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Fr,_n.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Nr,Fr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Fr,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new P,Su=new Ve,bu=new Ve;class zt extends bd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Su,bu),t.subVectors(bu,Su)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class rm extends ac{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class om extends Mo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class am extends ac{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}}class lm extends Mo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new am}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class So extends bd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cm extends ac{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class um extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new cm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class hm extends Mo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ra=new WeakMap;class dm extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=qn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(ra.has(o)===!0)i&&i(ra.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return qn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ra.set(l,c),qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});qn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Yi=-90,$i=1;class fm extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(Yi,$i,e,t);i.layers=this.layers,this.add(i);const r=new zt(Yi,$i,e,t);r.layers=this.layers,this.add(r);const o=new zt(Yi,$i,e,t);o.layers=this.layers,this.add(o);const a=new zt(Yi,$i,e,t);a.layers=this.layers,this.add(a);const l=new zt(Yi,$i,e,t);l.layers=this.layers,this.add(l);const c=new zt(Yi,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class pm extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lc="\\[\\]\\.:\\/",mm=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",gm="[^"+lc.replace("\\.","")+"]",_m=/((?:WC+[\/:])*)/.source.replace("WC",cc),xm=/(WCOD+)?/.source.replace("WCOD",gm),vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),Mm=new RegExp("^"+_m+xm+vm+ym+"$"),Sm=["material","materials","bones","map"];class bm{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mm,"")}static parseTrackName(e){const t=Mm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Sm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=bm;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vn{constructor(e,t,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}function Eu(s,e,t,n){const i=Em(n);switch(t){case rd:return s*e;case Yl:return s*e/i.components*i.byteLength;case $l:return s*e/i.components*i.byteLength;case as:return s*e*2/i.components*i.byteLength;case Kl:return s*e*2/i.components*i.byteLength;case od:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case jl:return s*e*4/i.components*i.byteLength;case Qr:case eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(s,16)*Math.max(e,8)/4;case Na:case Oa:return Math.max(s,8)*Math.max(e,8)/2;case ka:case za:case Ha:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Va:case Wa:case Xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case el:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case tl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case il:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ol:case al:case ll:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cl:case ul:return Math.ceil(s/4)*Math.ceil(e/4)*8;case hl:case dl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Em(s){switch(s){case Kt:case td:return{byteLength:1,components:1};case qs:case nd:case Kn:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case Rn:case Wl:case nn:return{byteLength:4,components:1};case id:case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ed(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Tm(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
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
#endif`,Dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,km=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
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
}`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
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
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
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
#endif`,Eg=`uniform sampler2D dfgLUT;
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
}`,Tg=`
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ng=`#if defined( USE_POINTS_UV )
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
#endif`,Fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
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
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
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
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u_=`float getShadowMask() {
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
}`,h_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A_=`uniform sampler2D t2D;
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`#include <common>
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
}`,P_=`#if DEPTH_PACKING == 3200
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
}`,D_=`#define DISTANCE
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
}`,U_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`uniform float scale;
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
}`,B_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,z_=`uniform vec3 diffuse;
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
}`,V_=`#define LAMBERT
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
}`,H_=`#define LAMBERT
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
}`,G_=`#define MATCAP
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
}`,W_=`#define MATCAP
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
}`,X_=`#define NORMAL
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
}`,q_=`#define NORMAL
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
}`,Y_=`#define PHONG
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
}`,$_=`#define PHONG
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
}`,K_=`#define STANDARD
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
}`,j_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,J_=`#define TOON
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
}`,Q_=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,t0=`#include <common>
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
}`,n0=`uniform vec3 color;
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
}`,i0=`uniform float rotation;
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
}`,s0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Am,alphahash_pars_fragment:wm,alphamap_fragment:Cm,alphamap_pars_fragment:Rm,alphatest_fragment:Im,alphatest_pars_fragment:Lm,aomap_fragment:Pm,aomap_pars_fragment:Dm,batching_pars_vertex:Um,batching_vertex:Nm,begin_vertex:Fm,beginnormal_vertex:Om,bsdfs:Bm,iridescence_fragment:km,bumpmap_pars_fragment:zm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Wm,color_fragment:Xm,color_pars_fragment:qm,color_pars_vertex:Ym,color_vertex:$m,common:Km,cube_uv_reflection_fragment:jm,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Jm,displacementmap_vertex:Qm,emissivemap_fragment:eg,emissivemap_pars_fragment:tg,colorspace_fragment:ng,colorspace_pars_fragment:ig,envmap_fragment:sg,envmap_common_pars_fragment:rg,envmap_pars_fragment:og,envmap_pars_vertex:ag,envmap_physical_pars_fragment:xg,envmap_vertex:lg,fog_vertex:cg,fog_pars_vertex:ug,fog_fragment:hg,fog_pars_fragment:dg,gradientmap_pars_fragment:fg,lightmap_pars_fragment:pg,lights_lambert_fragment:mg,lights_lambert_pars_fragment:gg,lights_pars_begin:_g,lights_toon_fragment:vg,lights_toon_pars_fragment:yg,lights_phong_fragment:Mg,lights_phong_pars_fragment:Sg,lights_physical_fragment:bg,lights_physical_pars_fragment:Eg,lights_fragment_begin:Tg,lights_fragment_maps:Ag,lights_fragment_end:wg,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Lg,map_fragment:Pg,map_pars_fragment:Dg,map_particle_fragment:Ug,map_particle_pars_fragment:Ng,metalnessmap_fragment:Fg,metalnessmap_pars_fragment:Og,morphinstance_vertex:Bg,morphcolor_vertex:kg,morphnormal_vertex:zg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Hg,normal_fragment_begin:Gg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Jg,opaque_fragment:Qg,packing:e_,premultiplied_alpha_fragment:t_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:s_,roughnessmap_fragment:r_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:a_,shadowmap_pars_vertex:l_,shadowmap_vertex:c_,shadowmask_pars_fragment:u_,skinbase_vertex:h_,skinning_pars_vertex:d_,skinning_vertex:f_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:__,tonemapping_pars_fragment:x_,transmission_fragment:v_,transmission_pars_fragment:y_,uv_pars_fragment:M_,uv_pars_vertex:S_,uv_vertex:b_,worldpos_vertex:E_,background_vert:T_,background_frag:A_,backgroundCube_vert:w_,backgroundCube_frag:C_,cube_vert:R_,cube_frag:I_,depth_vert:L_,depth_frag:P_,distance_vert:D_,distance_frag:U_,equirect_vert:N_,equirect_frag:F_,linedashed_vert:O_,linedashed_frag:B_,meshbasic_vert:k_,meshbasic_frag:z_,meshlambert_vert:V_,meshlambert_frag:H_,meshmatcap_vert:G_,meshmatcap_frag:W_,meshnormal_vert:X_,meshnormal_frag:q_,meshphong_vert:Y_,meshphong_frag:$_,meshphysical_vert:K_,meshphysical_frag:j_,meshtoon_vert:Z_,meshtoon_frag:J_,points_vert:Q_,points_frag:e0,shadow_vert:t0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},ce={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Dt={basic:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:kt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:kt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:kt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:kt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:kt([ce.lights,ce.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Dt.physical={uniforms:kt([Dt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Or={r:0,b:0,g:0},mi=new pn,r0=new Ue;function o0(s,e,t,n,i,r){const o=new Se(0);let a=i===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const M=y.backgroundBlurriness>0;E=e.get(E,M)}return E}function m(y){let E=!1;const M=f(y);M===null?p(o,a):M&&M.isColor&&(p(M,1),E=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,E){const M=f(E);M&&(M.isCubeTexture||M.mapping===xo)?(c===void 0&&(c=new Et(new Xn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:cs(Dt.backgroundCube.uniforms),vertexShader:Dt.backgroundCube.vertexShader,fragmentShader:Dt.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),mi.copy(E.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(mi)),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==tt,(u!==M||h!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Et(new ir(2,2),new Gt({name:"BackgroundMaterial",uniforms:cs(Dt.background.uniforms),vertexShader:Dt.background.vertexShader,fragmentShader:Dt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,E){y.getRGB(Or,xd(s)),t.buffers.color.setClear(Or.r,Or.g,Or.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:g}}function a0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(R,B,k,F,V){let H=!1;const z=h(R,F,k,B);r!==z&&(r=z,c(r.object)),H=f(R,F,k,V),H&&m(R,F,k,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(R,B,k,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function u(R){return s.deleteVertexArray(R)}function h(R,B,k,F){const V=F.wireframe===!0;let H=n[B.id];H===void 0&&(H={},n[B.id]=H);const z=R.isInstancedMesh===!0?R.id:0;let Q=H[z];Q===void 0&&(Q={},H[z]=Q);let J=Q[k.id];J===void 0&&(J={},Q[k.id]=J);let le=J[V];return le===void 0&&(le=d(l()),J[V]=le),le}function d(R){const B=[],k=[],F=[];for(let V=0;V<t;V++)B[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:F,object:R,attributes:{},index:null}}function f(R,B,k,F){const V=r.attributes,H=B.attributes;let z=0;const Q=k.getAttributes();for(const J in Q)if(Q[J].location>=0){const fe=V[J];let pe=H[J];if(pe===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor)),fe===void 0||fe.attribute!==pe||pe&&fe.data!==pe.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function m(R,B,k,F){const V={},H=B.attributes;let z=0;const Q=k.getAttributes();for(const J in Q)if(Q[J].location>=0){let fe=H[J];fe===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor));const pe={};pe.attribute=fe,fe&&fe.data&&(pe.data=fe.data),V[J]=pe,z++}r.attributes=V,r.attributesNum=z,r.index=F}function _(){const R=r.newAttributes;for(let B=0,k=R.length;B<k;B++)R[B]=0}function p(R){g(R,0)}function g(R,B){const k=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;k[R]=1,F[R]===0&&(s.enableVertexAttribArray(R),F[R]=1),V[R]!==B&&(s.vertexAttribDivisor(R,B),V[R]=B)}function y(){const R=r.newAttributes,B=r.enabledAttributes;for(let k=0,F=B.length;k<F;k++)B[k]!==R[k]&&(s.disableVertexAttribArray(k),B[k]=0)}function E(R,B,k,F,V,H,z){z===!0?s.vertexAttribIPointer(R,B,k,V,H):s.vertexAttribPointer(R,B,k,F,V,H)}function M(R,B,k,F){_();const V=F.attributes,H=k.getAttributes(),z=B.defaultAttributeValues;for(const Q in H){const J=H[Q];if(J.location>=0){let le=V[Q];if(le===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const fe=le.normalized,pe=le.itemSize,ke=e.get(le);if(ke===void 0)continue;const ft=ke.buffer,ht=ke.type,K=ke.bytesPerElement,se=ht===s.INT||ht===s.UNSIGNED_INT||le.gpuType===Wl;if(le.isInterleavedBufferAttribute){const ae=le.data,Oe=ae.stride,Re=le.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<J.locationSize;Pe++)g(J.location+Pe,ae.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<J.locationSize;Pe++)p(J.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let Pe=0;Pe<J.locationSize;Pe++)E(J.location+Pe,pe/J.locationSize,ht,fe,Oe*K,(Re+pe/J.locationSize*Pe)*K,se)}else{if(le.isInstancedBufferAttribute){for(let ae=0;ae<J.locationSize;ae++)g(J.location+ae,le.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<J.locationSize;ae++)p(J.location+ae);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let ae=0;ae<J.locationSize;ae++)E(J.location+ae,pe/J.locationSize,ht,fe,pe*K,pe/J.locationSize*ae*K,se)}}else if(z!==void 0){const fe=z[Q];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(J.location,fe);break;case 3:s.vertexAttrib3fv(J.location,fe);break;case 4:s.vertexAttrib4fv(J.location,fe);break;default:s.vertexAttrib1fv(J.location,fe)}}}}y()}function A(){S();for(const R in n){const B=n[R];for(const k in B){const F=B[k];for(const V in F){const H=F[V];for(const z in H)u(H[z].object),delete H[z];delete F[V]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const B=n[R.id];for(const k in B){const F=B[k];for(const V in F){const H=F[V];for(const z in H)u(H[z].object),delete H[z];delete F[V]}}delete n[R.id]}function T(R){for(const B in n){const k=n[B];for(const F in k){const V=k[F];if(V[R.id]===void 0)continue;const H=V[R.id];for(const z in H)u(H[z].object),delete H[z];delete V[R.id]}}}function x(R){for(const B in n){const k=n[B],F=R.isInstancedMesh===!0?R.id:0,V=k[F];if(V!==void 0){for(const H in V){const z=V[H];for(const Q in z)u(z[Q].object),delete z[Q];delete V[H]}delete k[F],Object.keys(k).length===0&&delete n[B]}}}function S(){O(),o=!0,r!==i&&(r=i,c(r.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function l0(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function c0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==sn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const x=T===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Kt&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==nn&&!x)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(we("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:M,maxSamples:A,samples:w}}function u0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Si,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,E=y*4;let M=g.clippingState||null;l.value=M,M=u(m,d,E,f);for(let A=0;A!==E;++A)M[A]=t[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,M=f;E!==_;++E,M+=4)o.copy(h[E]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const ai=4,Tu=[.125,.215,.35,.446,.526,.582],Ei=20,h0=256,As=new So,Au=new Se;let oa=null,aa=0,la=0,ca=!1;const d0=new P;class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=d0}=r;oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,e.scissorTest=!1,Ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Kn,format:sn,colorSpace:Ht,depthBuffer:!1},i=Cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=f0(r)),this._blurMaterial=m0(r,e,t),this._ggxMaterial=p0(r,e,t)}return i}_compileMaterial(e){const t=new Et(new Xt,e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,i,r){const l=new zt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Au),h.toneMapping=Tn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new Xn,new Wn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,g=!0):(p.color.copy(Au),g=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const A=this._cubeSize;Ki(i,M*A,E>2?A:0,A,A),h.setRenderTarget(i),g&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ri||e.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ki(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,As)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-ai?n-m+ai:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Ki(r,p,g,3*_,2*_),i.setRenderTarget(r),i.render(a,As),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ki(e,p,g,3*_,2*_),i.setRenderTarget(e),i.render(a,As)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),_=r/m,p=isFinite(r)?1+Math.floor(u*_):Ei;p>Ei&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const g=[];let y=0;for(let T=0;T<Ei;++T){const x=T/_,S=Math.exp(-x*x/2);g.push(S),T===0?y+=S:T<p&&(y+=2*S)}for(let T=0;T<g.length;T++)g[T]=g[T]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-n;const M=this._sizeLods[i],A=3*M*(i>E-ai?i-E+ai:0),w=4*(this._cubeSize-M);Ki(t,A,w,3*M,2*M),l.setRenderTarget(t),l.render(h,As)}}function f0(s){const e=[],t=[],n=[];let i=s;const r=s-ai+1+Tu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ai?l=Tu[o-s+ai-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,p=2,g=1,y=new Float32Array(_*m*f),E=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,x=w>2?0:-1,S=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];y.set(S,_*m*w),E.set(d,p*m*w);const O=[w,w,w,w,w,w];M.set(O,g*m*w)}const A=new Xt;A.setAttribute("position",new Vt(y,_)),A.setAttribute("uv",new Vt(E,p)),A.setAttribute("faceIndex",new Vt(M,g)),n.push(new Et(A,null)),i>ai&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Cu(s,e,t){const n=new An(s,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function p0(s,e,t){return new Gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function m0(s,e,t){const n=new Float32Array(Ei),i=new P(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ru(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Iu(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}class Td extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xn(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Yn});r.uniforms.tEquirect.value=t;const o=new Et(i,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Tt),new fm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function g0(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ro||f===Io)if(e.has(d)){const m=e.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new Td(m.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,m=f===Ro||f===Io,_=f===Ri||f===rs;if(m||_){let p=t.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new wu(s)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new wu(s)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function a(d,f){return f===Ro?d.mapping=Ri:f===Io&&(d.mapping=rs),d}function l(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function _0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&uo("WebGLRenderer: "+n+" extension not supported."),i}}}function x0(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let E=0,M=y.length;E<M;E+=3){const A=y[E+0],w=y[E+1],T=y[E+2];d.push(A,w,w,T,T,A)}}else{const y=m.array;_=m.version;for(let E=0,M=y.length/3-1;E<M;E+=3){const A=E+0,w=E+1,T=E+2;d.push(A,w,w,T,T,A)}}const p=new(m.count>=65535?pd:fd)(d,1);p.version=_;const g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function v0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function h(d,f,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let g=0;for(let y=0;y<m;y++)g+=f[y]*_[y];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function y0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Le("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function M0(s,e,t){const n=new WeakMap,i=new dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let M=a.attributes.position.count*E,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*A*4*h),T=new ud(w,M,A,h);T.type=nn,T.needsUpdate=!0;const x=E*4;for(let O=0;O<h;O++){const R=p[O],B=g[O],k=y[O],F=M*A*4*O;for(let V=0;V<R.count;V++){const H=V*x;f===!0&&(i.fromBufferAttribute(R,V),w[F+H+0]=i.x,w[F+H+1]=i.y,w[F+H+2]=i.z,w[F+H+3]=0),m===!0&&(i.fromBufferAttribute(B,V),w[F+H+4]=i.x,w[F+H+5]=i.y,w[F+H+6]=i.z,w[F+H+7]=0),_===!0&&(i.fromBufferAttribute(k,V),w[F+H+8]=i.x,w[F+H+9]=i.y,w[F+H+10]=i.z,w[F+H+11]=k.itemSize===4?i.w:1)}}d={count:h,texture:T,size:new Ve(M,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function S0(s,e,t,n,i){let r=new WeakMap;function o(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const b0={[qh]:"LINEAR_TONE_MAPPING",[Yh]:"REINHARD_TONE_MAPPING",[$h]:"CINEON_TONE_MAPPING",[Kh]:"ACES_FILMIC_TONE_MAPPING",[Zh]:"AGX_TONE_MAPPING",[Jh]:"NEUTRAL_TONE_MAPPING",[jh]:"CUSTOM_TONE_MAPPING"};function E0(s,e,t,n,i){const r=new An(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new An(e,t,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),a=new Xt;a.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new rn([0,2,0,0,2,0],2));const l=new Hp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Et(a,l),u=new So(-1,1,1,-1,0,1);let h=null,d=null,f=!1,m,_=null,p=[],g=!1;this.setSize=function(y,E){r.setSize(y,E),o.setSize(y,E);for(let M=0;M<p.length;M++){const A=p[M];A.setSize&&A.setSize(y,E)}},this.setEffects=function(y){p=y,g=p.length>0&&p[0].isRenderPass===!0;const E=r.width,M=r.height;for(let A=0;A<p.length;A++){const w=p[A];w.setSize&&w.setSize(E,M)}},this.begin=function(y,E){if(f||y.toneMapping===Tn&&p.length===0)return!1;if(_=E,E!==null){const M=E.width,A=E.height;(r.width!==M||r.height!==A)&&this.setSize(M,A)}return g===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=Tn,!0},this.hasRenderPass=function(){return g},this.end=function(y,E){y.toneMapping=m,f=!0;let M=r,A=o;for(let w=0;w<p.length;w++){const T=p[w];if(T.enabled!==!1&&(T.render(y,A,M,E),T.needsSwap!==!1)){const x=M;M=A,A=x}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},$e.getTransfer(h)===tt&&(l.defines.SRGB_TRANSFER="");const w=b0[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(_),y.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Ad=new At,gl=new Qs(1,1),wd=new ud,Cd=new fp,Rd=new rc,Lu=[],Pu=[],Du=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function xs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Lu[i];if(r===void 0&&(r=new Float32Array(i),Lu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Eo(s,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function T0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function A0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function w0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function C0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function R0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;Nu.set(n),s.uniformMatrix2fv(this.addr,!1,Nu),Ct(t,n)}}function I0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;Uu.set(n),s.uniformMatrix3fv(this.addr,!1,Uu),Ct(t,n)}}function L0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;Du.set(n),s.uniformMatrix4fv(this.addr,!1,Du),Ct(t,n)}}function P0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function D0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function U0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function N0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function F0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function O0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function B0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function k0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function z0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gl.compareFunction=t.isReversedDepthBuffer()?Jl:Zl,r=gl):r=Ad,t.setTexture2D(e||r,i)}function V0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cd,i)}function H0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rd,i)}function G0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wd,i)}function W0(s){switch(s){case 5126:return T0;case 35664:return A0;case 35665:return w0;case 35666:return C0;case 35674:return R0;case 35675:return I0;case 35676:return L0;case 5124:case 35670:return P0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return G0}}function X0(s,e){s.uniform1fv(this.addr,e)}function q0(s,e){const t=xs(e,this.size,2);s.uniform2fv(this.addr,t)}function Y0(s,e){const t=xs(e,this.size,3);s.uniform3fv(this.addr,t)}function $0(s,e){const t=xs(e,this.size,4);s.uniform4fv(this.addr,t)}function K0(s,e){const t=xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function j0(s,e){const t=xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Z0(s,e){const t=xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function J0(s,e){s.uniform1iv(this.addr,e)}function Q0(s,e){s.uniform2iv(this.addr,e)}function ex(s,e){s.uniform3iv(this.addr,e)}function tx(s,e){s.uniform4iv(this.addr,e)}function nx(s,e){s.uniform1uiv(this.addr,e)}function ix(s,e){s.uniform2uiv(this.addr,e)}function sx(s,e){s.uniform3uiv(this.addr,e)}function rx(s,e){s.uniform4uiv(this.addr,e)}function ox(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=gl:o=Ad;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function ax(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Cd,r[o])}function lx(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Rd,r[o])}function cx(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wd,r[o])}function ux(s){switch(s){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return $0;case 35674:return K0;case 35675:return j0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}class hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}}class dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ux(t.type)}}class fx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Fu(s,e){s.seq.push(e),s.map[e.id]=e}function px(s,e,t){const n=s.name,i=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),o=ua.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fu(t,c===void 0?new hx(a,s,e):new dx(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new fx(a),Fu(t,h)),t=h}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);px(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ou(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const mx=37297;let gx=0;function _x(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Bu=new Be;function xx(s){$e._getMatrix(Bu,$e.workingColorSpace,s);const e=`mat3( ${Bu.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case ao:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ku(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+_x(s.getShaderSource(e),a)}else return r}function vx(s,e){const t=xx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yx={[qh]:"Linear",[Yh]:"Reinhard",[$h]:"Cineon",[Kh]:"ACESFilmic",[Zh]:"AgX",[Jh]:"Neutral",[jh]:"Custom"};function Mx(s,e){const t=yx[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new P;function Sx(){$e.getLuminanceCoefficients(Br);const s=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function Ex(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Bs(s){return s!==""}function zu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(s){return s.replace(Ax,Cx)}const wx=new Map;function Cx(s,e){let t=ze[e];if(t===void 0){const n=wx.get(e);if(n!==void 0)t=ze[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(s){return s.replace(Rx,Ix)}function Ix(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Lx={[Zr]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function Px(s){return Lx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Dx={[Ri]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"};function Ux(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Dx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Nx={[rs]:"ENVMAP_MODE_REFRACTION"};function Fx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Nx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ox={[Xh]:"ENVMAP_BLENDING_MULTIPLY",[wf]:"ENVMAP_BLENDING_MIX",[Cf]:"ENVMAP_BLENDING_ADD"};function Bx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ox[s.combine]||"ENVMAP_BLENDING_NONE"}function kx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Px(t),c=Ux(t),u=Fx(t),h=Bx(t),d=kx(t),f=bx(t),m=Ex(r),_=i.createProgram();let p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bs).join(`
`),g.length>0&&(g+=`
`)):(p=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),g=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,vx("linearToOutputTexel",t.outputColorSpace),Sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),o=_l(o),o=zu(o,t),o=Vu(o,t),a=_l(a),a=zu(a,t),a=Vu(a,t),o=Hu(o),a=Hu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=y+p+o,M=y+g+a,A=Ou(i,i.VERTEX_SHADER,E),w=Ou(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(A)||"",F=i.getShaderInfoLog(w)||"",V=B.trim(),H=k.trim(),z=F.trim();let Q=!0,J=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,w);else{const le=ku(i,A,"vertex"),fe=ku(i,w,"fragment");Le("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+le+`
`+fe)}else V!==""?we("WebGLProgram: Program Info Log:",V):(H===""||z==="")&&(J=!1);J&&(R.diagnostics={runnable:Q,programLog:V,vertexShader:{log:H,prefix:p},fragmentShader:{log:z,prefix:g}})}i.deleteShader(A),i.deleteShader(w),x=new so(i,_),S=Tx(i,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(_,mx)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Vx=0;class Hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gx(e),t.set(e,n)),n}}class Gx{constructor(e){this.id=Vx++,this.code=e,this.usedTimes=0}}function Wx(s,e,t,n,i,r){const o=new hd,a=new Hx,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,O,R,B){const k=R.fog,F=B.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||V,H),Q=z&&z.mapping===xo?z.image.height:null,J=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&we("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=le!==void 0?le.length:0;let pe=0;F.morphAttributes.position!==void 0&&(pe=1),F.morphAttributes.normal!==void 0&&(pe=2),F.morphAttributes.color!==void 0&&(pe=3);let ke,ft,ht,K;if(J){const et=Dt[J];ke=et.vertexShader,ft=et.fragmentShader}else ke=x.vertexShader,ft=x.fragmentShader,a.update(x),ht=a.getVertexShaderID(x),K=a.getFragmentShaderID(x);const se=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,Re=B.isBatchedMesh===!0,Pe=!!x.map,Rt=!!x.matcap,Ke=!!z,Qe=!!x.aoMap,at=!!x.lightMap,He=!!x.bumpMap,_t=!!x.normalMap,I=!!x.displacementMap,St=!!x.emissiveMap,Je=!!x.metalnessMap,ct=!!x.roughnessMap,be=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,D=x.iridescence>0,$=x.sheen>0,Z=x.transmission>0,Y=be&&!!x.anisotropyMap,_e=C&&!!x.clearcoatMap,re=C&&!!x.clearcoatNormalMap,Ce=C&&!!x.clearcoatRoughnessMap,Ie=D&&!!x.iridescenceMap,ee=D&&!!x.iridescenceThicknessMap,ne=$&&!!x.sheenColorMap,xe=$&&!!x.sheenRoughnessMap,ye=!!x.specularMap,de=!!x.specularColorMap,Ge=!!x.specularIntensityMap,L=Z&&!!x.transmissionMap,oe=Z&&!!x.thicknessMap,ie=!!x.gradientMap,ge=!!x.alphaMap,te=x.alphaTest>0,q=!!x.alphaHash,ve=!!x.extensions;let De=Tn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(De=s.toneMapping);const ut={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:ft,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Re,batchingColor:Re&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ht,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:Rt,envMap:Ke,envMapMode:Ke&&z.mapping,envMapCubeUVHeight:Q,aoMap:Qe,lightMap:at,bumpMap:He,normalMap:_t,displacementMap:I,emissiveMap:St,normalMapObjectSpace:_t&&x.normalMapType===Df,normalMapTangentSpace:_t&&x.normalMapType===ld,metalnessMap:Je,roughnessMap:ct,anisotropy:be,anisotropyMap:Y,clearcoat:C,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:Ce,dispersion:v,iridescence:D,iridescenceMap:Ie,iridescenceThicknessMap:ee,sheen:$,sheenColorMap:ne,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:de,specularIntensityMap:Ge,transmission:Z,transmissionMap:L,thicknessMap:oe,gradientMap:ie,opaque:x.transparent===!1&&x.blending===es&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:q,combine:x.combine,mapUv:Pe&&m(x.map.channel),aoMapUv:Qe&&m(x.aoMap.channel),lightMapUv:at&&m(x.lightMap.channel),bumpMapUv:He&&m(x.bumpMap.channel),normalMapUv:_t&&m(x.normalMap.channel),displacementMapUv:I&&m(x.displacementMap.channel),emissiveMapUv:St&&m(x.emissiveMap.channel),metalnessMapUv:Je&&m(x.metalnessMap.channel),roughnessMapUv:ct&&m(x.roughnessMap.channel),anisotropyMapUv:Y&&m(x.anisotropyMap.channel),clearcoatMapUv:_e&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(x.sheenRoughnessMap.channel),specularMapUv:ye&&m(x.specularMap.channel),specularColorMapUv:de&&m(x.specularColorMap.channel),specularIntensityMapUv:Ge&&m(x.specularIntensityMap.channel),transmissionMapUv:L&&m(x.transmissionMap.channel),thicknessMapUv:oe&&m(x.thicknessMap.channel),alphaMapUv:ge&&m(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_t||be),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Pe||ge),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:St&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===Ot,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)S.push(O),S.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(g(S,x),y(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const S=f[x.type];let O;if(S){const R=Dt[S];O=sr.clone(R.uniforms)}else O=x.uniforms;return O}function M(x,S){let O=u.get(S);return O!==void 0?++O.usedTimes:(O=new zx(s,S,x,i),c.push(O),u.set(S,O)),O}function A(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:M,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:T}}function Xx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function qx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Wu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,_,p,g){let y=s[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},s[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=o(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=p,y.group=g),e++,y}function l(d,f,m,_,p,g){const y=a(d,f,m,_,p,g);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):t.push(y)}function c(d,f,m,_,p,g){const y=a(d,f,m,_,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||qx),n.length>1&&n.sort(f||Wu),i.length>1&&i.sort(f||Wu)}function h(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:h,sort:u}}function Yx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Xu,s.set(n,[o])):i>=r.length?(o=new Xu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function $x(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Se};break;case"SpotLight":t={position:new P,direction:new P,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Kx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jx=0;function Zx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Jx(s){const e=new $x,t=Kx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new Ue,o=new Ue;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,y=0,E=0,M=0,A=0,w=0,T=0;c.sort(Zx);for(let S=0,O=c.length;S<O;S++){const R=c[S],B=R.color,k=R.intensity,F=R.distance;let V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===as?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=B.r*k,h+=B.g*k,d+=B.b*k;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],k);T++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,Q=t.get(R);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=H,f++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(B).multiplyScalar(k),H.distance=F,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[_]=H;const z=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,z.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=z.matrix,R.castShadow){const Q=t.get(R);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=V,M++}_++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(B).multiplyScalar(k),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=H,p++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const z=R.shadow,Q=t.get(R);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,Q.shadowCameraNear=z.camera.near,Q.shadowCameraFar=z.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=R.shadow.matrix,E++}n.point[m]=H,m++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(k),H.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[g]=H,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==y||x.numPointShadows!==E||x.numSpotShadows!==M||x.numSpotMaps!==A||x.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=y,x.numPointShadows=E,x.numSpotShadows=M,x.numSpotMaps=A,x.numLightProbes=T,n.version=jx++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const E=c[g];if(E.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),h++}else if(E.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function qu(s){const e=new Jx(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Qx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new qu(s),e.set(i,[a])):r>=o.length?(a=new qu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
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
}`,nv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],iv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Yu=new Ue,ws=new P,ha=new P;function sv(s,e,t){let n=new yo;const i=new Ve,r=new Ve,o=new dt,a=new Gp,l=new Wp,c={},u=t.maxTextureSize,h={[Cn]:Ot,[Ot]:Cn,[en]:en},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:ev,fragmentShader:tv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Xt;m.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let g=this.type;this.render=function(w,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===lf&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zr);const S=s.getRenderTarget(),O=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Yn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=g!==this.type;k&&T.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=w.length;F<V;F++){const H=w[F],z=H.shadow;if(z===void 0){we("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Q=z.getFrameExtents();i.multiply(Q),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,z.mapSize.y=r.y));const J=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=J,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ns){if(H.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new An(i.x,i.y,{format:as,type:Kn,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new Qs(i.x,i.y,nn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=jn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=yt,z.map.depthTexture.magFilter=yt}else H.isPointLight?(z.map=new Td(i.x),z.map.depthTexture=new Bp(i.x,Rn)):(z.map=new An(i.x,i.y),z.map.depthTexture=new Qs(i.x,i.y,Rn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=jn,this.type===Zr?(z.map.depthTexture.compareFunction=J?Jl:Zl,z.map.depthTexture.minFilter=Tt,z.map.depthTexture.magFilter=Tt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=yt,z.map.depthTexture.magFilter=yt);z.camera.updateProjectionMatrix()}const le=z.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<le;fe++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,fe),s.clear();else{fe===0&&(s.setRenderTarget(z.map),s.clear());const pe=z.getViewport(fe);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),B.viewport(o)}if(H.isPointLight){const pe=z.camera,ke=z.matrix,ft=H.distance||pe.far;ft!==pe.far&&(pe.far=ft,pe.updateProjectionMatrix()),ws.setFromMatrixPosition(H.matrixWorld),pe.position.copy(ws),ha.copy(pe.position),ha.add(nv[fe]),pe.up.copy(iv[fe]),pe.lookAt(ha),pe.updateMatrixWorld(),ke.makeTranslation(-ws.x,-ws.y,-ws.z),Yu.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Yu,pe.coordinateSystem,pe.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),M(T,x,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Ns&&y(z,x),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(S,O,R)};function y(w,T){const x=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new An(i.x,i.y,{format:as,type:Kn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,x,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,x,f,_,null)}function E(w,T,x,S){let O=null;const R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)O=R;else if(O=x.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const B=O.uuid,k=T.uuid;let F=c[B];F===void 0&&(F={},c[B]=F);let V=F[k];V===void 0&&(V=O.clone(),F[k]=V,T.addEventListener("dispose",A)),O=V}if(O.visible=T.visible,O.wireframe=T.wireframe,S===Ns?O.side=T.shadowSide!==null?T.shadowSide:T.side:O.side=T.shadowSide!==null?T.shadowSide:h[T.side],O.alphaMap=T.alphaMap,O.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,O.map=T.map,O.clipShadows=T.clipShadows,O.clippingPlanes=T.clippingPlanes,O.clipIntersection=T.clipIntersection,O.displacementMap=T.displacementMap,O.displacementScale=T.displacementScale,O.displacementBias=T.displacementBias,O.wireframeLinewidth=T.wireframeLinewidth,O.linewidth=T.linewidth,x.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const B=s.properties.get(O);B.light=x}return O}function M(w,T,x,S,O){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Ns)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const k=e.update(w),F=w.material;if(Array.isArray(F)){const V=k.groups;for(let H=0,z=V.length;H<z;H++){const Q=V[H],J=F[Q.materialIndex];if(J&&J.visible){const le=E(w,J,S,O);w.onBeforeShadow(s,w,T,x,k,le,Q),s.renderBufferDirect(x,null,k,le,w,Q),w.onAfterShadow(s,w,T,x,k,le,Q)}}}else if(F.visible){const V=E(w,F,S,O);w.onBeforeShadow(s,w,T,x,k,V,null),s.renderBufferDirect(x,null,k,V,w,null),w.onAfterShadow(s,w,T,x,k,V,null)}}const B=w.children;for(let k=0,F=B.length;k<F;k++)M(B[k],T,x,S,O)}function A(w){w.target.removeEventListener("dispose",A);for(const x in c){const S=c[x],O=w.target.uuid;O in S&&(S[O].dispose(),delete S[O])}}}function rv(s,e){function t(){let L=!1;const oe=new dt;let ie=null;const ge=new dt(0,0,0,0);return{setMask:function(te){ie!==te&&!L&&(s.colorMask(te,te,te,te),ie=te)},setLocked:function(te){L=te},setClear:function(te,q,ve,De,ut){ut===!0&&(te*=De,q*=De,ve*=De),oe.set(te,q,ve,De),ge.equals(oe)===!1&&(s.clearColor(te,q,ve,De),ge.copy(oe))},reset:function(){L=!1,ie=null,ge.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,ie=null,ge=null,te=null;return{setReversed:function(q){if(oe!==q){const ve=e.get("EXT_clip_control");q?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),oe=q;const De=te;te=null,this.setClear(De)}},getReversed:function(){return oe},setTest:function(q){q?se(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(q){ie!==q&&!L&&(s.depthMask(q),ie=q)},setFunc:function(q){if(oe&&(q=Wf[q]),ge!==q){switch(q){case Ca:s.depthFunc(s.NEVER);break;case Ra:s.depthFunc(s.ALWAYS);break;case Ia:s.depthFunc(s.LESS);break;case ss:s.depthFunc(s.LEQUAL);break;case La:s.depthFunc(s.EQUAL);break;case Pa:s.depthFunc(s.GEQUAL);break;case Da:s.depthFunc(s.GREATER);break;case Ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=q}},setLocked:function(q){L=q},setClear:function(q){te!==q&&(te=q,oe&&(q=1-q),s.clearDepth(q))},reset:function(){L=!1,ie=null,ge=null,te=null,oe=!1}}}function i(){let L=!1,oe=null,ie=null,ge=null,te=null,q=null,ve=null,De=null,ut=null;return{setTest:function(et){L||(et?se(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(et){oe!==et&&!L&&(s.stencilMask(et),oe=et)},setFunc:function(et,Dn,Un){(ie!==et||ge!==Dn||te!==Un)&&(s.stencilFunc(et,Dn,Un),ie=et,ge=Dn,te=Un)},setOp:function(et,Dn,Un){(q!==et||ve!==Dn||De!==Un)&&(s.stencilOp(et,Dn,Un),q=et,ve=Dn,De=Un)},setLocked:function(et){L=et},setClear:function(et){ut!==et&&(s.clearStencil(et),ut=et)},reset:function(){L=!1,oe=null,ie=null,ge=null,te=null,q=null,ve=null,De=null,ut=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,y=null,E=null,M=null,A=null,w=null,T=new Se(0,0,0),x=0,S=!1,O=null,R=null,B=null,k=null,F=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=z>=1):Q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=z>=2);let J=null,le={};const fe=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),ke=new dt().fromArray(fe),ft=new dt().fromArray(pe);function ht(L,oe,ie,ge){const te=new Uint8Array(4),q=s.createTexture();s.bindTexture(L,q),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<ie;ve++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(oe+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return q}const K={};K[s.TEXTURE_2D]=ht(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(s.DEPTH_TEST),o.setFunc(ss),He(!1),_t(Lc),se(s.CULL_FACE),Qe(Yn);function se(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function ae(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function Oe(L,oe){return h[L]!==oe?(s.bindFramebuffer(L,oe),h[L]=oe,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=oe),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Re(L,oe){let ie=f,ge=!1;if(L){ie=d.get(oe),ie===void 0&&(ie=[],d.set(oe,ie));const te=L.textures;if(ie.length!==te.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let q=0,ve=te.length;q<ve;q++)ie[q]=s.COLOR_ATTACHMENT0+q;ie.length=te.length,ge=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ie)}function Pe(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const Rt={[bi]:s.FUNC_ADD,[uf]:s.FUNC_SUBTRACT,[hf]:s.FUNC_REVERSE_SUBTRACT};Rt[df]=s.MIN,Rt[ff]=s.MAX;const Ke={[pf]:s.ZERO,[mf]:s.ONE,[gf]:s.SRC_COLOR,[Aa]:s.SRC_ALPHA,[Sf]:s.SRC_ALPHA_SATURATE,[yf]:s.DST_COLOR,[xf]:s.DST_ALPHA,[_f]:s.ONE_MINUS_SRC_COLOR,[wa]:s.ONE_MINUS_SRC_ALPHA,[Mf]:s.ONE_MINUS_DST_COLOR,[vf]:s.ONE_MINUS_DST_ALPHA,[bf]:s.CONSTANT_COLOR,[Ef]:s.ONE_MINUS_CONSTANT_COLOR,[Tf]:s.CONSTANT_ALPHA,[Af]:s.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,oe,ie,ge,te,q,ve,De,ut,et){if(L===Yn){_===!0&&(ae(s.BLEND),_=!1);return}if(_===!1&&(se(s.BLEND),_=!0),L!==cf){if(L!==p||et!==S){if((g!==bi||M!==bi)&&(s.blendEquation(s.FUNC_ADD),g=bi,M=bi),et)switch(L){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pc:s.blendFunc(s.ONE,s.ONE);break;case Dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Le("WebGLState: Invalid blending: ",L);break}else switch(L){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dc:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",L);break}y=null,E=null,A=null,w=null,T.set(0,0,0),x=0,p=L,S=et}return}te=te||oe,q=q||ie,ve=ve||ge,(oe!==g||te!==M)&&(s.blendEquationSeparate(Rt[oe],Rt[te]),g=oe,M=te),(ie!==y||ge!==E||q!==A||ve!==w)&&(s.blendFuncSeparate(Ke[ie],Ke[ge],Ke[q],Ke[ve]),y=ie,E=ge,A=q,w=ve),(De.equals(T)===!1||ut!==x)&&(s.blendColor(De.r,De.g,De.b,ut),T.copy(De),x=ut),p=L,S=!1}function at(L,oe){L.side===en?ae(s.CULL_FACE):se(s.CULL_FACE);let ie=L.side===Ot;oe&&(ie=!ie),He(ie),L.blending===es&&L.transparent===!1?Qe(Yn):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const ge=L.stencilWrite;a.setTest(ge),ge&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),St(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){O!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),O=L)}function _t(L){L!==of?(se(s.CULL_FACE),L!==R&&(L===Lc?s.cullFace(s.BACK):L===af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),R=L}function I(L){L!==B&&(H&&s.lineWidth(L),B=L)}function St(L,oe,ie){L?(se(s.POLYGON_OFFSET_FILL),(k!==oe||F!==ie)&&(k=oe,F=ie,o.getReversed()&&(oe=-oe),s.polygonOffset(oe,ie))):ae(s.POLYGON_OFFSET_FILL)}function Je(L){L?se(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function ct(L){L===void 0&&(L=s.TEXTURE0+V-1),J!==L&&(s.activeTexture(L),J=L)}function be(L,oe,ie){ie===void 0&&(J===null?ie=s.TEXTURE0+V-1:ie=J);let ge=le[ie];ge===void 0&&(ge={type:void 0,texture:void 0},le[ie]=ge),(ge.type!==L||ge.texture!==oe)&&(J!==ie&&(s.activeTexture(ie),J=ie),s.bindTexture(L,oe||K[L]),ge.type=L,ge.texture=oe)}function C(){const L=le[J];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function $(){try{s.texSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function Z(){try{s.texSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function re(){try{s.texStorage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function Ce(){try{s.texStorage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function Ie(){try{s.texImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function ee(){try{s.texImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function ne(L){ke.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function xe(L){ft.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ft.copy(L))}function ye(L,oe){let ie=c.get(oe);ie===void 0&&(ie=new WeakMap,c.set(oe,ie));let ge=ie.get(L);ge===void 0&&(ge=s.getUniformBlockIndex(oe,L.name),ie.set(L,ge))}function de(L,oe){const ge=c.get(oe).get(L);l.get(oe)!==ge&&(s.uniformBlockBinding(oe,ge,L.__bindingPointIndex),l.set(oe,ge))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},J=null,le={},h={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,y=null,E=null,M=null,A=null,w=null,T=new Se(0,0,0),x=0,S=!1,O=null,R=null,B=null,k=null,F=null,ke.set(0,0,s.canvas.width,s.canvas.height),ft.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:ae,bindFramebuffer:Oe,drawBuffers:Re,useProgram:Pe,setBlending:Qe,setMaterial:at,setFlipSided:He,setCullFace:_t,setLineWidth:I,setPolygonOffset:St,setScissorTest:Je,activeTexture:ct,bindTexture:be,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Ie,texImage3D:ee,updateUBOMapping:ye,uniformBlockBinding:de,texStorage2D:re,texStorage3D:Ce,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:ne,viewport:xe,reset:Ge}}function ov(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,v){return f?new OffscreenCanvas(C,v):Zs("canvas")}function _(C,v,D){let $=1;const Z=be(C);if((Z.width>D||Z.height>D)&&($=D/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor($*Z.width),_e=Math.floor($*Z.height);h===void 0&&(h=m(Y,_e));const re=v?m(Y,_e):h;return re.width=Y,re.height=_e,re.getContext("2d").drawImage(C,0,0,Y,_e),we("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_e+")."),re}else return"data"in C&&we("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function g(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,v,D,$,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=v;if(v===s.RED&&(D===s.FLOAT&&(Y=s.R32F),D===s.HALF_FLOAT&&(Y=s.R16F),D===s.UNSIGNED_BYTE&&(Y=s.R8)),v===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.R8UI),D===s.UNSIGNED_SHORT&&(Y=s.R16UI),D===s.UNSIGNED_INT&&(Y=s.R32UI),D===s.BYTE&&(Y=s.R8I),D===s.SHORT&&(Y=s.R16I),D===s.INT&&(Y=s.R32I)),v===s.RG&&(D===s.FLOAT&&(Y=s.RG32F),D===s.HALF_FLOAT&&(Y=s.RG16F),D===s.UNSIGNED_BYTE&&(Y=s.RG8)),v===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.RG8UI),D===s.UNSIGNED_SHORT&&(Y=s.RG16UI),D===s.UNSIGNED_INT&&(Y=s.RG32UI),D===s.BYTE&&(Y=s.RG8I),D===s.SHORT&&(Y=s.RG16I),D===s.INT&&(Y=s.RG32I)),v===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),D===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),D===s.UNSIGNED_INT&&(Y=s.RGB32UI),D===s.BYTE&&(Y=s.RGB8I),D===s.SHORT&&(Y=s.RGB16I),D===s.INT&&(Y=s.RGB32I)),v===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),D===s.UNSIGNED_INT&&(Y=s.RGBA32UI),D===s.BYTE&&(Y=s.RGBA8I),D===s.SHORT&&(Y=s.RGBA16I),D===s.INT&&(Y=s.RGBA32I)),v===s.RGB&&(D===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),D===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),v===s.RGBA){const _e=Z?ao:$e.getTransfer($);D===s.FLOAT&&(Y=s.RGBA32F),D===s.HALF_FLOAT&&(Y=s.RGBA16F),D===s.UNSIGNED_BYTE&&(Y=_e===tt?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(C,v){let D;return C?v===null||v===Rn||v===Ys?D=s.DEPTH24_STENCIL8:v===nn?D=s.DEPTH32F_STENCIL8:v===qs&&(D=s.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Rn||v===Ys?D=s.DEPTH_COMPONENT24:v===nn?D=s.DEPTH_COMPONENT32F:v===qs&&(D=s.DEPTH_COMPONENT16),D}function A(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==yt&&C.minFilter!==Tt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){const v=C.target;v.removeEventListener("dispose",w),x(v),v.isVideoTexture&&u.delete(v)}function T(C){const v=C.target;v.removeEventListener("dispose",T),O(v)}function x(C){const v=n.get(C);if(v.__webglInit===void 0)return;const D=C.source,$=d.get(D);if($){const Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(C),Object.keys($).length===0&&d.delete(D)}n.remove(C)}function S(C){const v=n.get(C);s.deleteTexture(v.__webglTexture);const D=C.source,$=d.get(D);delete $[v.__cacheKey],o.memory.textures--}function O(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)s.deleteFramebuffer(v.__webglFramebuffer[$]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=C.textures;for(let $=0,Z=D.length;$<Z;$++){const Y=n.get(D[$]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(D[$])}n.remove(C)}let R=0;function B(){R=0}function k(){const C=R;return C>=i.maxTextures&&we("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function F(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function V(C,v){const D=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&D.__version!==C.version){const $=C.image;if($===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{K(D,C,v);return}}else C.isExternalTexture&&(D.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+v)}function H(C,v){const D=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){K(D,C,v);return}else C.isExternalTexture&&(D.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+v)}function z(C,v){const D=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){K(D,C,v);return}t.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+v)}function Q(C,v){const D=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&D.__version!==C.version){se(D,C,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+v)}const J={[os]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[oo]:s.MIRRORED_REPEAT},le={[yt]:s.NEAREST,[ed]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[Tt]:s.LINEAR,[Jr]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},fe={[Uf]:s.NEVER,[kf]:s.ALWAYS,[Nf]:s.LESS,[Zl]:s.LEQUAL,[Ff]:s.EQUAL,[Jl]:s.GEQUAL,[Of]:s.GREATER,[Bf]:s.NOTEQUAL};function pe(C,v){if(v.type===nn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tt||v.magFilter===Jr||v.magFilter===Fs||v.magFilter===Gn||v.minFilter===Tt||v.minFilter===Jr||v.minFilter===Fs||v.minFilter===Gn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,J[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,le[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yt||v.minFilter!==Fs&&v.minFilter!==Gn||v.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ke(C,v){let D=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));const $=v.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const Y=F(v);if(Y!==C.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Z[Y].usedTimes++;const _e=Z[C.__cacheKey];_e!==void 0&&(Z[C.__cacheKey].usedTimes--,_e.usedTimes===0&&S(v)),C.__cacheKey=Y,C.__webglTexture=Z[Y].texture}return D}function ft(C,v,D){return Math.floor(Math.floor(C/D)/v)}function ht(C,v,D,$){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,D,$,v.data);else{Y.sort((ee,ne)=>ee.start-ne.start);let _e=0;for(let ee=1;ee<Y.length;ee++){const ne=Y[_e],xe=Y[ee],ye=ne.start+ne.count,de=ft(xe.start,v.width,4),Ge=ft(ne.start,v.width,4);xe.start<=ye+1&&de===Ge&&ft(xe.start+xe.count-1,v.width,4)===de?ne.count=Math.max(ne.count,xe.start+xe.count-ne.start):(++_e,Y[_e]=xe)}Y.length=_e+1;const re=s.getParameter(s.UNPACK_ROW_LENGTH),Ce=s.getParameter(s.UNPACK_SKIP_PIXELS),Ie=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let ee=0,ne=Y.length;ee<ne;ee++){const xe=Y[ee],ye=Math.floor(xe.start/4),de=Math.ceil(xe.count/4),Ge=ye%v.width,L=Math.floor(ye/v.width),oe=de,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Ge,L,oe,ie,D,$,v.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function K(C,v,D){let $=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=s.TEXTURE_3D);const Z=ke(C,v),Y=v.source;t.bindTexture($,C.__webglTexture,s.TEXTURE0+D);const _e=n.get(Y);if(Y.version!==_e.__version||Z===!0){t.activeTexture(s.TEXTURE0+D);const re=$e.getPrimaries($e.workingColorSpace),Ce=v.colorSpace===oi?null:$e.getPrimaries(v.colorSpace),Ie=v.colorSpace===oi||re===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ee=_(v.image,!1,i.maxTextureSize);ee=ct(v,ee);const ne=r.convert(v.format,v.colorSpace),xe=r.convert(v.type);let ye=E(v.internalFormat,ne,xe,v.colorSpace,v.isVideoTexture);pe($,v);let de;const Ge=v.mipmaps,L=v.isVideoTexture!==!0,oe=_e.__version===void 0||Z===!0,ie=Y.dataReady,ge=A(v,ee);if(v.isDepthTexture)ye=M(v.format===Ti,v.type),oe&&(L?t.texStorage2D(s.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,ye,ee.width,ee.height,0,ne,xe,null));else if(v.isDataTexture)if(Ge.length>0){L&&oe&&t.texStorage2D(s.TEXTURE_2D,ge,ye,Ge[0].width,Ge[0].height);for(let te=0,q=Ge.length;te<q;te++)de=Ge[te],L?ie&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,ne,xe,de.data):t.texImage2D(s.TEXTURE_2D,te,ye,de.width,de.height,0,ne,xe,de.data);v.generateMipmaps=!1}else L?(oe&&t.texStorage2D(s.TEXTURE_2D,ge,ye,ee.width,ee.height),ie&&ht(v,ee,ne,xe)):t.texImage2D(s.TEXTURE_2D,0,ye,ee.width,ee.height,0,ne,xe,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ye,Ge[0].width,Ge[0].height,ee.depth);for(let te=0,q=Ge.length;te<q;te++)if(de=Ge[te],v.format!==sn)if(ne!==null)if(L){if(ie)if(v.layerUpdates.size>0){const ve=Eu(de.width,de.height,v.format,v.type);for(const De of v.layerUpdates){const ut=de.data.subarray(De*ve/de.data.BYTES_PER_ELEMENT,(De+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,De,de.width,de.height,1,ne,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ee.depth,ne,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,ye,de.width,de.height,ee.depth,0,de.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ee.depth,ne,xe,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,ye,de.width,de.height,ee.depth,0,ne,xe,de.data)}else{L&&oe&&t.texStorage2D(s.TEXTURE_2D,ge,ye,Ge[0].width,Ge[0].height);for(let te=0,q=Ge.length;te<q;te++)de=Ge[te],v.format!==sn?ne!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,ne,de.data):t.compressedTexImage2D(s.TEXTURE_2D,te,ye,de.width,de.height,0,de.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,ne,xe,de.data):t.texImage2D(s.TEXTURE_2D,te,ye,de.width,de.height,0,ne,xe,de.data)}else if(v.isDataArrayTexture)if(L){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ye,ee.width,ee.height,ee.depth),ie)if(v.layerUpdates.size>0){const te=Eu(ee.width,ee.height,v.format,v.type);for(const q of v.layerUpdates){const ve=ee.data.subarray(q*te/ee.data.BYTES_PER_ELEMENT,(q+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,ne,xe,ve)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ne,xe,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,ne,xe,ee.data);else if(v.isData3DTexture)L?(oe&&t.texStorage3D(s.TEXTURE_3D,ge,ye,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ne,xe,ee.data)):t.texImage3D(s.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,ne,xe,ee.data);else if(v.isFramebufferTexture){if(oe)if(L)t.texStorage2D(s.TEXTURE_2D,ge,ye,ee.width,ee.height);else{let te=ee.width,q=ee.height;for(let ve=0;ve<ge;ve++)t.texImage2D(s.TEXTURE_2D,ve,ye,te,q,0,ne,xe,null),te>>=1,q>>=1}}else if(Ge.length>0){if(L&&oe){const te=be(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ge,ye,te.width,te.height)}for(let te=0,q=Ge.length;te<q;te++)de=Ge[te],L?ie&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ne,xe,de):t.texImage2D(s.TEXTURE_2D,te,ye,ne,xe,de);v.generateMipmaps=!1}else if(L){if(oe){const te=be(ee);t.texStorage2D(s.TEXTURE_2D,ge,ye,te.width,te.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne,xe,ee)}else t.texImage2D(s.TEXTURE_2D,0,ye,ne,xe,ee);p(v)&&g($),_e.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function se(C,v,D){if(v.image.length!==6)return;const $=ke(C,v),Z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+D);const Y=n.get(Z);if(Z.version!==Y.__version||$===!0){t.activeTexture(s.TEXTURE0+D);const _e=$e.getPrimaries($e.workingColorSpace),re=v.colorSpace===oi?null:$e.getPrimaries(v.colorSpace),Ce=v.colorSpace===oi||_e===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let q=0;q<6;q++)!Ie&&!ee?ne[q]=_(v.image[q],!0,i.maxCubemapSize):ne[q]=ee?v.image[q].image:v.image[q],ne[q]=ct(v,ne[q]);const xe=ne[0],ye=r.convert(v.format,v.colorSpace),de=r.convert(v.type),Ge=E(v.internalFormat,ye,de,v.colorSpace),L=v.isVideoTexture!==!0,oe=Y.__version===void 0||$===!0,ie=Z.dataReady;let ge=A(v,xe);pe(s.TEXTURE_CUBE_MAP,v);let te;if(Ie){L&&oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,xe.width,xe.height);for(let q=0;q<6;q++){te=ne[q].mipmaps;for(let ve=0;ve<te.length;ve++){const De=te[ve];v.format!==sn?ye!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,De.width,De.height,ye,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,Ge,De.width,De.height,0,De.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,0,0,De.width,De.height,ye,de,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve,Ge,De.width,De.height,0,ye,de,De.data)}}}else{if(te=v.mipmaps,L&&oe){te.length>0&&ge++;const q=be(ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,q.width,q.height)}for(let q=0;q<6;q++)if(ee){L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ne[q].width,ne[q].height,ye,de,ne[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ge,ne[q].width,ne[q].height,0,ye,de,ne[q].data);for(let ve=0;ve<te.length;ve++){const ut=te[ve].image[q].image;L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,ut.width,ut.height,ye,de,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,Ge,ut.width,ut.height,0,ye,de,ut.data)}}else{L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ye,de,ne[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ge,ye,de,ne[q]);for(let ve=0;ve<te.length;ve++){const De=te[ve];L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,0,0,ye,de,De.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ve+1,Ge,ye,de,De.image[q])}}}p(v)&&g(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ae(C,v,D,$,Z,Y){const _e=r.convert(D.format,D.colorSpace),re=r.convert(D.type),Ce=E(D.internalFormat,_e,re,D.colorSpace),Ie=n.get(v),ee=n.get(D);if(ee.__renderTarget=v,!Ie.__hasExternalTextures){const ne=Math.max(1,v.width>>Y),xe=Math.max(1,v.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Ce,ne,xe,v.depth,0,_e,re,null):t.texImage2D(Z,Y,Ce,ne,xe,0,_e,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),St(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,ee.__webglTexture,0,I(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,ee.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(C,v,D){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){const $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=M(v.stencilBuffer,Z),_e=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;St(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),Y,v.width,v.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),Y,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Y,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,C)}else{const $=v.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],_e=r.convert(Y.format,Y.colorSpace),re=r.convert(Y.type),Ce=E(Y.internalFormat,_e,re,Y.colorSpace);St(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),Ce,v.width,v.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),Ce,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(C,v,D){const $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),pe(s.TEXTURE_CUBE_MAP,v.depthTexture);const Ie=r.convert(v.depthTexture.format),ee=r.convert(v.depthTexture.type);let ne;v.depthTexture.format===jn?ne=s.DEPTH_COMPONENT24:v.depthTexture.format===Ti&&(ne=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ne,v.width,v.height,0,Ie,ee,null)}}else V(v.depthTexture,0);const Y=Z.__webglTexture,_e=I(v),re=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+D:s.TEXTURE_2D,Ce=v.depthTexture.format===Ti?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===jn)St(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,re,Y,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,re,Y,0);else if(v.depthTexture.format===Ti)St(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,re,Y,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,re,Y,0);else throw new Error("Unknown depthTexture format")}function Pe(C){const v=n.get(C),D=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let $=0;$<6;$++)Re(v.__webglFramebuffer[$],C,$);else{const $=C.texture.mipmaps;$&&$.length>0?Re(v.__webglFramebuffer[0],C,0):Re(v.__webglFramebuffer,C,0)}else if(D){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=s.createRenderbuffer(),Oe(v.__webglDepthbuffer[$],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Oe(v.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(C,v,D){const $=n.get(C);v!==void 0&&ae($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Pe(C)}function Ke(C){const v=C.texture,D=n.get(C),$=n.get(v);C.addEventListener("dispose",T);const Z=C.textures,Y=C.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=v.version,o.memory.textures++),Y){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)D.__webglFramebuffer[re][Ce]=s.createFramebuffer()}else D.__webglFramebuffer[re]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)D.__webglFramebuffer[re]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(_e)for(let re=0,Ce=Z.length;re<Ce;re++){const Ie=n.get(Z[re]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&St(C)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const Ce=Z[re];D.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const Ie=r.convert(Ce.format,Ce.colorSpace),ee=r.convert(Ce.type),ne=E(Ce.internalFormat,Ie,ee,Ce.colorSpace,C.isXRRenderTarget===!0),xe=I(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ne,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,D.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(D.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),pe(s.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ae(D.__webglFramebuffer[re][Ce],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce);else ae(D.__webglFramebuffer[re],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(v)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,Ce=Z.length;re<Ce;re++){const Ie=Z[re],ee=n.get(Ie);let ne=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,ee.__webglTexture),pe(ne,Ie),ae(D.__webglFramebuffer,C,Ie,s.COLOR_ATTACHMENT0+re,ne,0),p(Ie)&&g(ne)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),pe(re,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ae(D.__webglFramebuffer[Ce],C,v,s.COLOR_ATTACHMENT0,re,Ce);else ae(D.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,re,0);p(v)&&g(re),t.unbindTexture()}C.depthBuffer&&Pe(C)}function Qe(C){const v=C.textures;for(let D=0,$=v.length;D<$;D++){const Z=v[D];if(p(Z)){const Y=y(C),_e=n.get(Z).__webglTexture;t.bindTexture(Y,_e),g(Y),t.unbindTexture()}}}const at=[],He=[];function _t(C){if(C.samples>0){if(St(C)===!1){const v=C.textures,D=C.width,$=C.height;let Z=s.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(C),re=v.length>1;if(re)for(let Ie=0;Ie<v.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ce=C.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ie=0;Ie<v.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const ee=n.get(v[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,D,$,0,0,D,$,Z,s.NEAREST),l===!0&&(at.length=0,He.length=0,at.push(s.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(at.push(Y),He.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,He)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Ie=0;Ie<v.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const ee=n.get(v[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function St(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Je(C){const v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function ct(C,v){const D=C.colorSpace,$=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||D!==Ht&&D!==oi&&($e.getTransfer(D)===tt?($!==sn||Z!==Kt)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",D)),v}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=Rt,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function av(s,e){function t(n,i=oi){let r;const o=$e.getTransfer(i);if(n===Kt)return s.UNSIGNED_BYTE;if(n===Xl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return s.UNSIGNED_SHORT_5_5_5_1;if(n===id)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===td)return s.BYTE;if(n===nd)return s.SHORT;if(n===qs)return s.UNSIGNED_SHORT;if(n===Wl)return s.INT;if(n===Rn)return s.UNSIGNED_INT;if(n===nn)return s.FLOAT;if(n===Kn)return s.HALF_FLOAT;if(n===rd)return s.ALPHA;if(n===od)return s.RGB;if(n===sn)return s.RGBA;if(n===jn)return s.DEPTH_COMPONENT;if(n===Ti)return s.DEPTH_STENCIL;if(n===Yl)return s.RED;if(n===$l)return s.RED_INTEGER;if(n===as)return s.RG;if(n===Kl)return s.RG_INTEGER;if(n===jl)return s.RGBA_INTEGER;if(n===Qr||n===eo||n===to||n===no)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===za||n===Va||n===Ha||n===Ga||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===za)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wa)return r.COMPRESSED_RG11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===Ya||n===$a||n===Ka||n===ja||n===Za||n===Ja||n===Qa||n===el||n===tl||n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===il)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===al||n===ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ol)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===ul||n===hl||n===dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cv=`
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

}`;class uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _d(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gt({vertexShader:lv,fragmentShader:cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hv extends ps{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new uv,g={},y=t.getContextAttributes();let E=null,M=null;const A=[],w=[],T=new Ve;let x=null;const S=new zt;S.viewport=new dt;const O=new zt;O.viewport=new dt;const R=[S,O],B=new pm;let k=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=A[K];return se===void 0&&(se=new Oo,A[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=A[K];return se===void 0&&(se=new Oo,A[K]=se),se.getGripSpace()},this.getHand=function(K){let se=A[K];return se===void 0&&(se=new Oo,A[K]=se),se.getHandSpace()};function V(K){const se=w.indexOf(K.inputSource);if(se===-1)return;const ae=A[se];ae!==void 0&&(ae.update(K.inputSource,K.frame,c||o),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",z);for(let K=0;K<A.length;K++){const se=w[K];se!==null&&(w[K]=null,A[K].disconnect(se))}k=null,F=null,p.reset();for(const K in g)delete g[K];e.setRenderTarget(E),f=null,d=null,h=null,i=null,M=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",H),i.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Oe=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?Ti:jn,Oe=y.stencil?Ys:Rn);const Pe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new An(d.textureWidth,d.textureHeight,{format:sn,type:Kt,depthTexture:new Qs(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new An(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(K){for(let se=0;se<K.removed.length;se++){const ae=K.removed[se],Oe=w.indexOf(ae);Oe>=0&&(w[Oe]=null,A[Oe].disconnect(ae))}for(let se=0;se<K.added.length;se++){const ae=K.added[se];let Oe=w.indexOf(ae);if(Oe===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=w.length){w.push(ae),Oe=Pe;break}else if(w[Pe]===null){w[Pe]=ae,Oe=Pe;break}if(Oe===-1)break}const Re=A[Oe];Re&&Re.connect(ae)}}const Q=new P,J=new P;function le(K,se,ae){Q.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(ae.matrixWorld);const Oe=Q.distanceTo(J),Re=se.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,Rt=Re[14]/(Re[10]-1),Ke=Re[14]/(Re[10]+1),Qe=(Re[9]+1)/Re[5],at=(Re[9]-1)/Re[5],He=(Re[8]-1)/Re[0],_t=(Pe[8]+1)/Pe[0],I=Rt*He,St=Rt*_t,Je=Oe/(-He+_t),ct=Je*-He;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ct),K.translateZ(Je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Re[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const be=Rt+Je,C=Ke+Je,v=I-ct,D=St+(Oe-ct),$=Qe*Ke/C*be,Z=at*Ke/C*be;K.projectionMatrix.makePerspective(v,D,$,Z,be,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let se=K.near,ae=K.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(ae=p.depthFar)),B.near=O.near=S.near=se,B.far=O.far=S.far=ae,(k!==B.near||F!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,F=B.far),B.layers.mask=K.layers.mask|6,S.layers.mask=B.layers.mask&-5,O.layers.mask=B.layers.mask&-3;const Oe=K.parent,Re=B.cameras;fe(B,Oe);for(let Pe=0;Pe<Re.length;Pe++)fe(Re[Pe],Oe);Re.length===2?le(B,S,O):B.projectionMatrix.copy(S.projectionMatrix),pe(K,B,Oe)};function pe(K,se,ae){ae===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ls*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(K){return g[K]};let ke=null;function ft(K,se){if(u=se.getViewerPose(c||o),m=se,u!==null){const ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Oe=!1;ae.length!==B.cameras.length&&(B.cameras.length=0,Oe=!0);for(let Ke=0;Ke<ae.length;Ke++){const Qe=ae[Ke];let at=null;if(f!==null)at=f.getViewport(Qe);else{const _t=h.getViewSubImage(d,Qe);at=_t.viewport,Ke===0&&(e.setRenderTargetTextures(M,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(M))}let He=R[Ke];He===void 0&&(He=new zt,He.layers.enable(Ke),He.viewport=new dt,R[Ke]=He),He.matrix.fromArray(Qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(at.x,at.y,at.width,at.height),Ke===0&&(B.matrix.copy(He.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Oe===!0&&B.cameras.push(He)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Ke=h.getDepthInformation(ae[0]);Ke&&Ke.isValid&&Ke.texture&&p.init(Ke,i.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ke=0;Ke<ae.length;Ke++){const Qe=ae[Ke].camera;if(Qe){let at=g[Qe];at||(at=new _d,g[Qe]=at);const He=h.getCameraImage(Qe);at.sourceTexture=He}}}}for(let ae=0;ae<A.length;ae++){const Oe=w[ae],Re=A[ae];Oe!==null&&Re!==void 0&&Re.update(Oe,se,c||o)}ke&&ke(K,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}const ht=new Ed;ht.setAnimationLoop(ft),this.setAnimationLoop=function(K){ke=K},this.dispose=function(){}}}const gi=new pn,dv=new Ue;function fv(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,xd(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,E,M){g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ot&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ot&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=e.get(g),E=y.envMap,M=y.envMapRotation;E&&(p.envMap.value=E,gi.copy(M),gi.x*=-1,gi.y*=-1,gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(dv.makeRotationFromEuler(gi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=E*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ot&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const M=E.program;n.uniformBlockBinding(y,M)}function c(y,E){let M=i[y.id];M===void 0&&(m(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",p));const A=E.program;n.updateUBOMapping(y,A);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function u(y){const E=h();y.__bindingPointIndex=E;const M=s.createBuffer(),A=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=i[y.id],M=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,T=M.length;w<T;w++){const x=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,O=x.length;S<O;S++){const R=x[S];if(f(R,w,S,A)===!0){const B=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let V=0;V<k.length;V++){const H=k[V],z=_(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,B+F,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,F),F+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,E,M,A){const w=y.value,T=E+"_"+M;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const x=A[T];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return A[T]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function m(y){const E=y.uniforms;let M=0;const A=16;for(let T=0,x=E.length;T<x;T++){const S=Array.isArray(E[T])?E[T]:[E[T]];for(let O=0,R=S.length;O<R;O++){const B=S[O],k=Array.isArray(B.value)?B.value:[B.value];for(let F=0,V=k.length;F<V;F++){const H=k[F],z=_(H),Q=M%A,J=Q%z.boundary,le=Q+J;M+=J,le!==0&&A-le<z.storage&&(M+=A-le),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=z.storage}}}const w=M%A;return w>0&&(M+=A-w),y.__size=M,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",y),E}function p(y){const E=y.target;E.removeEventListener("dispose",p);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}const mv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function gv(){return xn===null&&(xn=new nc(mv,16,16,as,Kn),xn.name="DFG_LUT",xn.minFilter=Tt,xn.magFilter=Tt,xn.wrapS=bn,xn.wrapT=bn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class _v{constructor(e={}){const{canvas:t=Hf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Kt}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,p=new Set([jl,Kl,$l]),g=new Set([Kt,Rn,qs,Ys,Xl,ql]),y=new Uint32Array(4),E=new Int32Array(4);let M=null,A=null;const w=[],T=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let O=!1;this._outputColorSpace=vt;let R=0,B=0,k=null,F=-1,V=null;const H=new dt,z=new dt;let Q=null;const J=new Se(0);let le=0,fe=t.width,pe=t.height,ke=1,ft=null,ht=null;const K=new dt(0,0,fe,pe),se=new dt(0,0,fe,pe);let ae=!1;const Oe=new yo;let Re=!1,Pe=!1;const Rt=new Ue,Ke=new P,Qe=new dt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function _t(){return k===null?ke:1}let I=n;function St(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gl}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ut,!1),I===null){const U="webgl2";if(I=St(U,b),I===null)throw St(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Le("WebGLRenderer: "+b.message),b}let Je,ct,be,C,v,D,$,Z,Y,_e,re,Ce,Ie,ee,ne,xe,ye,de,Ge,L,oe,ie,ge;function te(){Je=new _0(I),Je.init(),oe=new av(I,Je),ct=new c0(I,Je,e,oe),be=new rv(I,Je),ct.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),C=new y0(I),v=new Xx,D=new ov(I,Je,be,v,ct,oe,C),$=new g0(S),Z=new Tm(I),ie=new a0(I,Z),Y=new x0(I,Z,C,ie),_e=new S0(I,Y,Z,ie,C),de=new M0(I,ct,D),ne=new u0(v),re=new Wx(S,$,Je,ct,ie,ne),Ce=new fv(S,v),Ie=new Yx,ee=new Qx(Je),ye=new o0(S,$,be,_e,m,l),xe=new sv(S,_e,ct),ge=new pv(I,C,ct,be),Ge=new l0(I,Je,C),L=new v0(I,Je,C),C.programs=re.programs,S.capabilities=ct,S.extensions=Je,S.properties=v,S.renderLists=Ie,S.shadowMap=xe,S.state=be,S.info=C}te(),_!==Kt&&(x=new E0(_,t.width,t.height,i,r));const q=new hv(S,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(b){b!==void 0&&(ke=b,this.setSize(fe,pe,!1))},this.getSize=function(b){return b.set(fe,pe)},this.setSize=function(b,U,X=!0){if(q.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=b,pe=U,t.width=Math.floor(b*ke),t.height=Math.floor(U*ke),X===!0&&(t.style.width=b+"px",t.style.height=U+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(fe*ke,pe*ke).floor()},this.setDrawingBufferSize=function(b,U,X){fe=b,pe=U,ke=X,t.width=Math.floor(b*X),t.height=Math.floor(U*X),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===Kt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,U,X,W){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,U,X,W),be.viewport(H.copy(K).multiplyScalar(ke).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,U,X,W){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,U,X,W),be.scissor(z.copy(se).multiplyScalar(ke).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){be.setScissorTest(ae=b)},this.setOpaqueSort=function(b){ft=b},this.setTransparentSort=function(b){ht=b},this.getClearColor=function(b){return b.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,X=!0){let W=0;if(b){let G=!1;if(k!==null){const ue=k.texture.format;G=p.has(ue)}if(G){const ue=k.texture.type,me=g.has(ue),he=ye.getClearColor(),Me=ye.getClearAlpha(),Te=he.r,Ne=he.g,We=he.b;me?(y[0]=Te,y[1]=Ne,y[2]=We,y[3]=Me,I.clearBufferuiv(I.COLOR,0,y)):(E[0]=Te,E[1]=Ne,E[2]=We,E[3]=Me,I.clearBufferiv(I.COLOR,0,E))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT),X&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),ye.dispose(),Ie.dispose(),ee.dispose(),v.dispose(),$.dispose(),_e.dispose(),ie.dispose(),ge.dispose(),re.dispose(),q.dispose(),q.removeEventListener("sessionstart",bc),q.removeEventListener("sessionend",Ec),ci.stop()};function ve(b){b.preventDefault(),co("WebGLRenderer: Context Lost."),O=!0}function De(){co("WebGLRenderer: Context Restored."),O=!1;const b=C.autoReset,U=xe.enabled,X=xe.autoUpdate,W=xe.needsUpdate,G=xe.type;te(),C.autoReset=b,xe.enabled=U,xe.autoUpdate=X,xe.needsUpdate=W,xe.type=G}function ut(b){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function et(b){const U=b.target;U.removeEventListener("dispose",et),Dn(U)}function Dn(b){Un(b),v.remove(b)}function Un(b){const U=v.get(b).programs;U!==void 0&&(U.forEach(function(X){re.releaseProgram(X)}),b.isShaderMaterial&&re.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,X,W,G,ue){U===null&&(U=at);const me=G.isMesh&&G.matrixWorld.determinant()<0,he=Zd(b,U,X,W,G);be.setMaterial(W,me);let Me=X.index,Te=1;if(W.wireframe===!0){if(Me=Y.getWireframeAttribute(X),Me===void 0)return;Te=2}const Ne=X.drawRange,We=X.attributes.position;let Ae=Ne.start*Te,rt=(Ne.start+Ne.count)*Te;ue!==null&&(Ae=Math.max(Ae,ue.start*Te),rt=Math.min(rt,(ue.start+ue.count)*Te)),Me!==null?(Ae=Math.max(Ae,0),rt=Math.min(rt,Me.count)):We!=null&&(Ae=Math.max(Ae,0),rt=Math.min(rt,We.count));const xt=rt-Ae;if(xt<0||xt===1/0)return;ie.setup(G,W,he,X,Me);let gt,ot=Ge;if(Me!==null&&(gt=Z.get(Me),ot=L,ot.setIndex(gt)),G.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*_t()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(G.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),be.setLineWidth(Ut*_t()),G.isLineSegments?ot.setMode(I.LINES):G.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else G.isPoints?ot.setMode(I.POINTS):G.isSprite&&ot.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)uo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ut=G._multiDrawStarts,Ee=G._multiDrawCounts,qt=G._multiDrawCount,je=Me?Z.get(Me).bytesPerElement:1,ln=v.get(W).currentProgram.getUniforms();for(let gn=0;gn<qt;gn++)ln.setValue(I,"_gl_DrawID",gn),ot.render(Ut[gn]/je,Ee[gn])}else if(G.isInstancedMesh)ot.renderInstances(Ae,xt,G.count);else if(X.isInstancedBufferGeometry){const Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Ut);ot.renderInstances(Ae,xt,Ee)}else ot.render(Ae,xt)};function Sc(b,U,X){b.transparent===!0&&b.side===en&&b.forceSinglePass===!1?(b.side=Ot,b.needsUpdate=!0,ar(b,U,X),b.side=Cn,b.needsUpdate=!0,ar(b,U,X),b.side=en):ar(b,U,X)}this.compile=function(b,U,X=null){X===null&&(X=b),A=ee.get(X),A.init(U),T.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const W=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const he=ue[me];Sc(he,X,G),W.add(he)}else Sc(ue,X,G),W.add(ue)}),A=T.pop(),W},this.compileAsync=function(b,U,X=null){const W=this.compile(b,U,X);return new Promise(G=>{function ue(){if(W.forEach(function(me){v.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){G(b);return}setTimeout(ue,10)}Je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let wo=null;function jd(b){wo&&wo(b)}function bc(){ci.stop()}function Ec(){ci.start()}const ci=new Ed;ci.setAnimationLoop(jd),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(b){wo=b,q.setAnimationLoop(b),b===null?ci.stop():ci.start()},q.addEventListener("sessionstart",bc),q.addEventListener("sessionend",Ec),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const X=q.enabled===!0&&q.isPresenting===!0,W=x!==null&&(k===null||X)&&x.begin(S,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,U,k),A=ee.get(b,T.length),A.init(U),T.push(A),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Oe.setFromProjectionMatrix(Rt,En,U.reversedDepth),Pe=this.localClippingEnabled,Re=ne.init(this.clippingPlanes,Pe),M=Ie.get(b,w.length),M.init(),w.push(M),q.enabled===!0&&q.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&Co(me,U,-1/0,S.sortObjects)}Co(b,U,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(ft,ht),He=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,He&&ye.addToRenderList(M,b),this.info.render.frame++,Re===!0&&ne.beginShadows();const G=A.state.shadowsArray;if(xe.render(G,b,U),Re===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&x.hasRenderPass())===!1){const me=M.opaque,he=M.transmissive;if(A.setupLights(),U.isArrayCamera){const Me=U.cameras;if(he.length>0)for(let Te=0,Ne=Me.length;Te<Ne;Te++){const We=Me[Te];Ac(me,he,b,We)}He&&ye.render(b);for(let Te=0,Ne=Me.length;Te<Ne;Te++){const We=Me[Te];Tc(M,b,We,We.viewport)}}else he.length>0&&Ac(me,he,b,U),He&&ye.render(b),Tc(M,b,U)}k!==null&&B===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),W&&x.end(S),b.isScene===!0&&b.onAfterRender(S,b,U),ie.resetDefaultState(),F=-1,V=null,T.pop(),T.length>0?(A=T[T.length-1],Re===!0&&ne.setGlobalState(S.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function Co(b,U,X,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Oe.intersectsSprite(b)){W&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Rt);const me=_e.update(b),he=b.material;he.visible&&M.push(b,me,he,X,Qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Oe.intersectsObject(b))){const me=_e.update(b),he=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Qe.copy(me.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(Rt)),Array.isArray(he)){const Me=me.groups;for(let Te=0,Ne=Me.length;Te<Ne;Te++){const We=Me[Te],Ae=he[We.materialIndex];Ae&&Ae.visible&&M.push(b,me,Ae,X,Qe.z,We)}}else he.visible&&M.push(b,me,he,X,Qe.z,null)}}const ue=b.children;for(let me=0,he=ue.length;me<he;me++)Co(ue[me],U,X,W)}function Tc(b,U,X,W){const{opaque:G,transmissive:ue,transparent:me}=b;A.setupLightsView(X),Re===!0&&ne.setGlobalState(S.clippingPlanes,X),W&&be.viewport(H.copy(W)),G.length>0&&or(G,U,X),ue.length>0&&or(ue,U,X),me.length>0&&or(me,U,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ac(b,U,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const Ae=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new An(1,1,{generateMipmaps:!0,type:Ae?Kn:Kt,minFilter:Gn,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ue=A.state.transmissionRenderTarget[W.id],me=W.viewport||H;ue.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const he=S.getRenderTarget(),Me=S.getActiveCubeFace(),Te=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(J),le=S.getClearAlpha(),le<1&&S.setClearColor(16777215,.5),S.clear(),He&&ye.render(X);const Ne=S.toneMapping;S.toneMapping=Tn;const We=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),Re===!0&&ne.setGlobalState(S.clippingPlanes,W),or(b,X,W),D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let rt=0,xt=U.length;rt<xt;rt++){const gt=U[rt],{object:ot,geometry:Ut,material:Ee,group:qt}=gt;if(Ee.side===en&&ot.layers.test(W.layers)){const je=Ee.side;Ee.side=Ot,Ee.needsUpdate=!0,wc(ot,X,W,Ut,Ee,qt),Ee.side=je,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&(D.updateMultisampleRenderTarget(ue),D.updateRenderTargetMipmap(ue))}S.setRenderTarget(he,Me,Te),S.setClearColor(J,le),We!==void 0&&(W.viewport=We),S.toneMapping=Ne}function or(b,U,X){const W=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ue=b.length;G<ue;G++){const me=b[G],{object:he,geometry:Me,group:Te}=me;let Ne=me.material;Ne.allowOverride===!0&&W!==null&&(Ne=W),he.layers.test(X.layers)&&wc(he,U,X,Me,Ne,Te)}}function wc(b,U,X,W,G,ue){b.onBeforeRender(S,U,X,W,G,ue),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(S,U,X,W,b,ue),G.transparent===!0&&G.side===en&&G.forceSinglePass===!1?(G.side=Ot,G.needsUpdate=!0,S.renderBufferDirect(X,U,W,G,b,ue),G.side=Cn,G.needsUpdate=!0,S.renderBufferDirect(X,U,W,G,b,ue),G.side=en):S.renderBufferDirect(X,U,W,G,b,ue),b.onAfterRender(S,U,X,W,G,ue)}function ar(b,U,X){U.isScene!==!0&&(U=at);const W=v.get(b),G=A.state.lights,ue=A.state.shadowsArray,me=G.state.version,he=re.getParameters(b,G.state,ue,U,X),Me=re.getProgramCacheKey(he);let Te=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Ne=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=$.get(b.envMap||W.environment,Ne),W.envMapRotation=W.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",et),Te=new Map,W.programs=Te);let We=Te.get(Me);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===me)return Rc(b,he),We}else he.uniforms=re.getUniforms(b),b.onBeforeCompile(he,S),We=re.acquireProgram(he,Me),Te.set(Me,We),W.uniforms=he.uniforms;const Ae=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=ne.uniform),Rc(b,he),W.needsLights=Qd(b),W.lightsStateVersion=me,W.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=We,W.uniformsList=null,We}function Cc(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=so.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Rc(b,U){const X=v.get(b);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Zd(b,U,X,W,G){U.isScene!==!0&&(U=at),D.resetTextureUnits();const ue=U.fog,me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,he=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ht,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Te=$.get(W.envMap||me,Me),Ne=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color;let gt=Tn;W.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(gt=S.toneMapping);const ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ut=ot!==void 0?ot.length:0,Ee=v.get(W),qt=A.state.lights;if(Re===!0&&(Pe===!0||b!==V)){const It=b===V&&W.id===F;ne.setState(W,b,It)}let je=!1;W.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==qt.state.version||Ee.outputColorSpace!==he||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==Te||W.fog===!0&&Ee.fog!==ue||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ne.numPlanes||Ee.numIntersection!==ne.numIntersection)||Ee.vertexAlphas!==Ne||Ee.vertexTangents!==We||Ee.morphTargets!==Ae||Ee.morphNormals!==rt||Ee.morphColors!==xt||Ee.toneMapping!==gt||Ee.morphTargetsCount!==Ut)&&(je=!0):(je=!0,Ee.__version=W.version);let ln=Ee.currentProgram;je===!0&&(ln=ar(W,U,G));let gn=!1,ui=!1,Pi=!1;const lt=ln.getUniforms(),Pt=Ee.uniforms;if(be.useProgram(ln.program)&&(gn=!0,ui=!0,Pi=!0),W.id!==F&&(F=W.id,ui=!0),gn||V!==b){be.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",b.projectionMatrix),lt.setValue(I,"viewMatrix",b.matrixWorldInverse);const Jn=lt.map.cameraPosition;Jn!==void 0&&Jn.setValue(I,Ke.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,ui=!0,Pi=!0)}if(Ee.needsLights&&(qt.state.directionalShadowMap.length>0&&lt.setValue(I,"directionalShadowMap",qt.state.directionalShadowMap,D),qt.state.spotShadowMap.length>0&&lt.setValue(I,"spotShadowMap",qt.state.spotShadowMap,D),qt.state.pointShadowMap.length>0&&lt.setValue(I,"pointShadowMap",qt.state.pointShadowMap,D)),G.isSkinnedMesh){lt.setOptional(I,G,"bindMatrix"),lt.setOptional(I,G,"bindMatrixInverse");const It=G.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),lt.setValue(I,"boneTexture",It.boneTexture,D))}G.isBatchedMesh&&(lt.setOptional(I,G,"batchingTexture"),lt.setValue(I,"batchingTexture",G._matricesTexture,D),lt.setOptional(I,G,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",G._indirectTexture,D),lt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",G._colorsTexture,D));const Zn=X.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&de.update(G,X,ln),(ui||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,lt.setValue(I,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Pt.envMapIntensity.value=U.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=gv()),ui&&(lt.setValue(I,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&Jd(Pt,Pi),ue&&W.fog===!0&&Ce.refreshFogUniforms(Pt,ue),Ce.refreshMaterialUniforms(Pt,W,ke,pe,A.state.transmissionRenderTarget[b.id]),so.upload(I,Cc(Ee),Pt,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(so.upload(I,Cc(Ee),Pt,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(I,"center",G.center),lt.setValue(I,"modelViewMatrix",G.modelViewMatrix),lt.setValue(I,"normalMatrix",G.normalMatrix),lt.setValue(I,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const It=W.uniformsGroups;for(let Jn=0,Di=It.length;Jn<Di;Jn++){const Ic=It[Jn];ge.update(Ic,ln),ge.bind(Ic,ln)}}return ln}function Jd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Qd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,U,X){const W=v.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=U,v.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const X=v.get(b);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0};const ef=I.createFramebuffer();this.setRenderTarget=function(b,U=0,X=0){k=b,R=U,B=X;let W=null,G=!1,ue=!1;if(b){const he=v.get(b);if(he.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(I.FRAMEBUFFER,he.__webglFramebuffer),H.copy(b.viewport),z.copy(b.scissor),Q=b.scissorTest,be.viewport(H),be.scissor(z),be.setScissorTest(Q),F=-1;return}else if(he.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(he.__hasExternalTextures)D.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(he.__boundDepthTexture!==Ne){if(Ne!==null&&v.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ue=!0);const Te=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?W=Te[U][X]:W=Te[U],G=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?W=v.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?W=Te[X]:W=Te,H.copy(b.viewport),z.copy(b.scissor),Q=b.scissorTest}else H.copy(K).multiplyScalar(ke).floor(),z.copy(se).multiplyScalar(ke).floor(),Q=ae;if(X!==0&&(W=ef),be.bindFramebuffer(I.FRAMEBUFFER,W)&&be.drawBuffers(b,W),be.viewport(H),be.scissor(z),be.setScissorTest(Q),G){const he=v.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,X)}else if(ue){const he=U;for(let Me=0;Me<b.textures.length;Me++){const Te=v.get(b.textures[Me]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Me,Te.__webglTexture,X,he)}}else if(b!==null&&X!==0){const he=v.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,X)}F=-1},this.readRenderTargetPixels=function(b,U,X,W,G,ue,me,he=0){if(!(b&&b.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){be.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Te=b.textures[he],Ne=Te.format,We=Te.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),!ct.textureFormatReadable(Ne)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(We)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&X>=0&&X<=b.height-G&&I.readPixels(U,X,W,G,oe.convert(Ne),oe.convert(We),ue)}finally{const Te=k!==null?v.get(k).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,U,X,W,G,ue,me,he=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(U>=0&&U<=b.width-W&&X>=0&&X<=b.height-G){be.bindFramebuffer(I.FRAMEBUFFER,Me);const Te=b.textures[he],Ne=Te.format,We=Te.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),!ct.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(U,X,W,G,oe.convert(Ne),oe.convert(We),0);const rt=k!==null?v.get(k).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,rt);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Gf(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(Ae),I.deleteSync(xt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,X=0){const W=Math.pow(2,-X),G=Math.floor(b.image.width*W),ue=Math.floor(b.image.height*W),me=U!==null?U.x:0,he=U!==null?U.y:0;D.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,me,he,G,ue),be.unbindTexture()};const tf=I.createFramebuffer(),nf=I.createFramebuffer();this.copyTextureToTexture=function(b,U,X=null,W=null,G=0,ue=0){let me,he,Me,Te,Ne,We,Ae,rt,xt;const gt=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(X!==null)me=X.max.x-X.min.x,he=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,Ne=X.min.y,We=X.isBox3?X.min.z:0;else{const Pt=Math.pow(2,-G);me=Math.floor(gt.width*Pt),he=Math.floor(gt.height*Pt),b.isDataArrayTexture?Me=gt.depth:b.isData3DTexture?Me=Math.floor(gt.depth*Pt):Me=1,Te=0,Ne=0,We=0}W!==null?(Ae=W.x,rt=W.y,xt=W.z):(Ae=0,rt=0,xt=0);const ot=oe.convert(U.format),Ut=oe.convert(U.type);let Ee;U.isData3DTexture?(D.setTexture3D(U,0),Ee=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(D.setTexture2DArray(U,0),Ee=I.TEXTURE_2D_ARRAY):(D.setTexture2D(U,0),Ee=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const qt=I.getParameter(I.UNPACK_ROW_LENGTH),je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ln=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),ui=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Pi=b.isDataArrayTexture||b.isData3DTexture,lt=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const Pt=v.get(b),Zn=v.get(U),It=v.get(Pt.__renderTarget),Jn=v.get(Zn.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,It.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Di=0;Di<Me;Di++)Pi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(b).__webglTexture,G,We+Di),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ue,xt+Di)),I.blitFramebuffer(Te,Ne,me,he,Ae,rt,me,he,I.DEPTH_BUFFER_BIT,I.NEAREST);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||v.has(b)){const Pt=v.get(b),Zn=v.get(U);be.bindFramebuffer(I.READ_FRAMEBUFFER,tf),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,nf);for(let It=0;It<Me;It++)Pi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,G,We+It):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,G),lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zn.__webglTexture,ue,xt+It):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zn.__webglTexture,ue),G!==0?I.blitFramebuffer(Te,Ne,me,he,Ae,rt,me,he,I.COLOR_BUFFER_BIT,I.NEAREST):lt?I.copyTexSubImage3D(Ee,ue,Ae,rt,xt+It,Te,Ne,me,he):I.copyTexSubImage2D(Ee,ue,Ae,rt,Te,Ne,me,he);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Ee,ue,Ae,rt,xt,me,he,Me,ot,Ut,gt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,ue,Ae,rt,xt,me,he,Me,ot,gt.data):I.texSubImage3D(Ee,ue,Ae,rt,xt,me,he,Me,ot,Ut,gt):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,Ae,rt,me,he,ot,Ut,gt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,Ae,rt,gt.width,gt.height,ot,gt.data):I.texSubImage2D(I.TEXTURE_2D,ue,Ae,rt,me,he,ot,Ut,gt);I.pixelStorei(I.UNPACK_ROW_LENGTH,qt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ui),ue===0&&U.generateMipmaps&&I.generateMipmap(Ee),be.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){R=0,B=0,k=null,be.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}function $u(s,e){if(e===Lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===fl||e===ad){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===fl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function xv(s){const e=new Map,t=new Map,n=s.clone();return Id(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Id(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Id(s.children[n],e.children[n],t)}class vv extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ev(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new Ku(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ku(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ov(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Vs.extractUrlBase(e);o=Vs.resolveURL(c,this.path)}else o=Vs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Md(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ld){try{o[Xe.KHR_BINARY_GLTF]=new Bv(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Zv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:o[h]=new Sv;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[h]=new kv(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[h]=new zv;break;case Xe.KHR_MESH_QUANTIZATION:o[h]=new Vv;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function yv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Mt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Mv{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ht);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new um(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lm(u),c.distance=h;break;case"spot":c=new om(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Sv{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Wn}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}}class bv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Ev{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(r,r)}return Promise.all(i)}}class Tv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Av{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class wv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ht)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Cv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Rv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(r[0],r[1],r[2],Ht),Promise.all(i)}}class Iv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class Lv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(r[0],r[1],r[2],Ht),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(i)}}class Pv{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Dv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Mt(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=Mt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Uv{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Nv{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Fv{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Ku{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Ov{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const m of h){const _=new Ue,p=new P,g=new In,y=new P(1,1,1),E=new Os(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),E.setMatrixAt(M,_.compose(p,g,y));for(const M in l)if(M==="_COLOR_0"){const A=l[M];E.instanceColor=new Js(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);mt.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Ld="glTF",Cs=12,ju={JSON:1313821514,BIN:5130562};class Bv{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ld)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Cs,r=new DataView(e,Cs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ju.JSON){const c=new Uint8Array(e,Cs+o,a);this.content=n.decode(c)}else if(l===ju.BIN){const c=Cs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=xl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=xl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=is[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const m in f.attributes){const _=f.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}h(f)},a,c,Ht,d)})})}}class zv{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vv{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Pd extends ms{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*c,_=m-c,p=-2*f+3*d,g=f-d,y=1-p,E=g-d+h;for(let M=0;M!==a;M++){const A=o[_+M+a],w=o[_+M+l]*u,T=o[m+M+a],x=o[m+M]*u;r[M]=y*A+E*w+p*T+g*x}return r}}const Hv=new In;class Gv extends Pd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Hv.fromArray(r).normalize().toArray(r),r}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zu={9728:yt,9729:Tt,9984:ed,9985:Jr,9986:Fs,9987:Gn},Ju={33071:bn,33648:oo,10497:os},da={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wv={CUBICSPLINE:void 0,LINEAR:Ks,STEP:$s},fa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new oc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),s.DefaultMaterial}function _i(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Yv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $v(s){let e;const t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pa(t.attributes):e=s.indices+":"+pa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+pa(s.targets[n]);return e}function pa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const jv=new Ue;class Zv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new sm(this.options.manager):this.textureLoader=new dm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Md(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return _i(r,a,i),yn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Vs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=da[i.type],a=is[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Vt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=da[i.type],c=is[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,p;if(f&&f!==h){const g=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let E=t.cache.get(y);E||(_=new c(a,g*f,i.count*f/u),E=new Tp(_,f/u),t.cache.add(y,E)),p=new tc(E,l,d%f/u,m)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),p=new Vt(_,l,m);if(i.sparse!==void 0){const g=da.SCALAR,y=is[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new y(o[1],E,i.sparse.count*g),w=new c(o[2],M,i.sparse.count*l);a!==null&&(p=new Vt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,x=A.length;T<x;T++){const S=A[T];if(p.setX(S,w[T*l]),l>=2&&p.setY(S,w[T*l+1]),l>=3&&p.setZ(S,w[T*l+2]),l>=4&&p.setW(S,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Zu[d.magFilter]||Tt,u.minFilter=Zu[d.minFilter]||Gn,u.wrapS=Ju[d.wrapS]||os,u.wrapT=Ju[d.wrapT]||os,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==yt&&u.minFilter!==Tt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const p=new At(_);p.needsUpdate=!0,d(p)}),t.load(Vs.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),yn(h,o),h.userData.mimeType=o.mimeType||Kv(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new gd,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ho,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return oc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const h=i[Xe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ht),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=en);const u=r.alphaMode||fa.OPAQUE;if(u===fa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===fa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Wn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wn){const h=r.emissiveFactor;a.emissive=new Se().setRGB(h[0],h[1],h[2],Ht)}return r.emissiveTexture!==void 0&&o!==Wn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),yn(h,r),t.associations.set(h,{materials:e}),r.extensions&&_i(i,h,r),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Qu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=$v(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Qu(new Xt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Xv(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const _=u[f],p=o[f];let g;const y=c[f];if(p.mode===Jt.TRIANGLES||p.mode===Jt.TRIANGLE_STRIP||p.mode===Jt.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new Rp(_,y):new Et(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Jt.TRIANGLE_STRIP?g.geometry=$u(g.geometry,ad):p.mode===Jt.TRIANGLE_FAN&&(g.geometry=$u(g.geometry,fl));else if(p.mode===Jt.LINES)g=new io(_,y);else if(p.mode===Jt.LINE_STRIP)g=new sc(_,y);else if(p.mode===Jt.LINE_LOOP)g=new Np(_,y);else if(p.mode===Jt.POINTS)g=new Fp(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Yv(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),yn(g,r),p.extensions&&_i(i,g,p),t.assignFinalMaterial(g),h.push(g)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&_i(i,h[0],r),h[0];const d=new Wt;r.extensions&&_i(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(ap.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new So(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Ue;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ic(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],m=i.samplers[f.sampler],_=f.target,p=_.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],_=h[3],p=h[4],g=[];for(let E=0,M=d.length;E<M;E++){const A=d[E],w=f[E],T=m[E],x=_[E],S=p[E];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const O=n._createAnimationTracks(A,w,T,x,S);if(O)for(let R=0;R<O.length;R++)g.push(O[R])}const y=new Zp(r,void 0,g);return yn(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,jv)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,m=h[0];u.pivot=new P().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new md:c.length>1?u=new Wt:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),yn(u,r),r.extensions&&_i(n,u,r),r.matrix!==void 0){const h=new Ue;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Wt;n.name&&(r.name=i.createUniqueName(n.name)),yn(r,n),n.extensions&&_i(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?r.add(xv(d)):r.add(d)}const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof wn||d instanceof At)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ri[r.path]===ri.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ri[r.path]){case ri.weights:c=us;break;case ri.rotation:c=hs;break;case ri.translation:case ri.scale:c=ds;break;default:switch(n.itemSize){case 1:c=us;break;case 2:case 3:default:c=ds;break}break}const u=i.interpolation!==void 0?Wv[i.interpolation]:Ks,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+ri[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof hs?Gv:Pd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jv(s,e,t){const n=e.attributes,i=new jt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=vl(is[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=vl(is[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new an;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Qu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=xl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return $e.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),yn(s,e),Jv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qv(s,e.targets,t):s})}const xi=[{id:1,name:"andesite",textureUri:"blocks/andesite.png",isMultiTexture:!1},{id:2,name:"birch-leaves",textureUri:"blocks/birch-leaves.png",isMultiTexture:!1},{id:3,name:"bricks",textureUri:"blocks/bricks.png",isMultiTexture:!1},{id:4,name:"coal-ore",textureUri:"blocks/coal-ore.png",isMultiTexture:!1},{id:5,name:"cobblestone",textureUri:"blocks/cobblestone.png",isMultiTexture:!1},{id:6,name:"grass-block-pine",textureUri:"blocks/grass-block-pine",isMultiTexture:!0},{id:7,name:"grass-block",textureUri:"blocks/grass-block",isMultiTexture:!0},{id:8,name:"grass-flower-block-pine",textureUri:"blocks/grass-flower-block-pine",isMultiTexture:!0},{id:9,name:"grass-flower-block",textureUri:"blocks/grass-flower-block",isMultiTexture:!0},{id:10,name:"oak-leaves",textureUri:"blocks/oak-leaves.png",isMultiTexture:!1},{id:11,name:"oak-log",textureUri:"blocks/oak-log",isMultiTexture:!0},{id:12,name:"sand",textureUri:"blocks/sand.png",isMultiTexture:!1},{id:13,name:"spruce-leaves",textureUri:"blocks/spruce-leaves.png",isMultiTexture:!1},{id:14,name:"spruce-log",textureUri:"blocks/spruce-log",isMultiTexture:!0},{id:15,name:"stone",textureUri:"blocks/stone.png",isMultiTexture:!1},{id:16,name:"water",textureUri:"blocks/water.png",isMultiTexture:!1,isLiquid:!0}],Ze=16,Qt=Ze-1,eh=Ze*Ze*Ze,th={x:0,y:0,z:0};function Qv(s,e){const t=s.indexOf(","),n=s.indexOf(",",t+1);return e.x=Number(s.slice(0,t)),e.y=Number(s.slice(t+1,n)),e.z=Number(s.slice(n+1)),e}class Ye{constructor(e,t,n){N(this,"originCoordinate");N(this,"_chunkId");N(this,"_blocks");N(this,"_rotations");this.originCoordinate={...e},this._chunkId=Ye.originCoordinateToChunkId(e),this._blocks=t??new Uint16Array(eh),this._rotations=n??new Uint8Array(eh)}get chunkId(){return this._chunkId}static originCoordinateToChunkId(e){return`${e.x},${e.y},${e.z}`}static chunkIdToOriginCoordinate(e){return Qv(e,th),{...th}}static globalCoordinateToOriginCoordinate(e){return{x:e.x&~Qt,y:e.y&~Qt,z:e.z&~Qt}}static globalCoordinateToChunkId(e){return Ye.originCoordinateToChunkId(Ye.globalCoordinateToOriginCoordinate(e))}static globalCoordinateToLocalCoordinate(e){return{x:e.x&Qt,y:e.y&Qt,z:e.z&Qt}}static blockIndexToLocalCoordinate(e){return{x:e&Qt,y:e>>4&Qt,z:e>>8&Qt}}getBlockType(e){return this._blocks[this._getIndex(e)]}getBlockTypeAt(e,t,n){return this._blocks[e+Ze*(t+Ze*n)]}setBlock(e,t){this._blocks[this._getIndex(e)]=t}getBlockRotation(e){return this._rotations[this._getIndex(e)]??0}getBlockRotationAt(e,t,n){return this._rotations[e+Ze*(t+Ze*n)]??0}setBlockRotation(e,t){this._rotations[this._getIndex(e)]=t&255}isEmpty(){for(let e=0;e<this._blocks.length;e++)if(this._blocks[e]!==0)return!1;return!0}cloneBlocks(){return this._blocks.slice()}cloneRotations(){return this._rotations.slice()}forEachBlock(e){for(let t=0;t<this._blocks.length;t++){const n=this._blocks[t];n!==0&&e(Ye.blockIndexToLocalCoordinate(t),n,this._rotations[t]??0)}}_getIndex(e){return e.x+Ze*(e.y+Ze*e.z)}}const ma="TransparentSortData",ga=new jt;function nh(s){if(!(ma in s.userData)){const n={center:new P,frame:-1,halfSize:new P,key:-1};s.userData[ma]=n}s.geometry.boundingBox===null&&s.geometry.computeBoundingBox();const{center:e,halfSize:t}=s.userData[ma];ga.copy(s.geometry.boundingBox).applyMatrix4(s.matrixWorld),ga.getCenter(e),ga.getSize(t).multiplyScalar(.5)}const fs=256,er=0,ey=1,yl=.2,ty=-.1,vi="worldEditorTime",kr="worldEditorTextureAtlas",Ml="worldEditorFogColor",Sl="worldEditorFogEnabled",bl="worldEditorFogFar",El="worldEditorFogNear",Mn="worldEditorAmbientLightColor",_a="worldEditorAmbientLightIntensity",wi="worldEditorChunkVisibleBits",Ci="worldEditorChunkVisibilityMode",Dd=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`;function tr(s){return Math.ceil(s/128)}function Ud(s){return{[wi]:{value:new Uint32Array(tr(s)*4)},[Ci]:{value:er}}}const ny={color:()=>new Se(16777215),enabled:()=>!1,far:()=>0,near:()=>0};function Nd(s){return{[Ml]:{get value(){return s.color()}},[Sl]:{get value(){return s.enabled()}},[bl]:{get value(){return s.far()}},[El]:{get value(){return s.near()}}}}function Fd(){return`
    uniform vec3 ${Ml};
    uniform bool ${Sl};
    uniform float ${bl};
    uniform float ${El};

    vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
      if (!${Sl}) {
        return color;
      }

      float fogFactor = smoothstep(${El}, ${bl}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${Ml}, fogFactor);
    }
  `}class ih extends Gt{constructor(t,n){const i=sr.clone(Dt.basic.uniforms);Object.assign(i,Nd(n)),Object.assign(i,Ud(fs));const r=Dt.basic.vertexShader.replace("void main() {",`
        uniform uvec4 ${wi}[${tr(fs)}];
        uniform uint ${Ci};
        attribute float chunkIndex;
        attribute float lightLevel;
        varying float vChunkVisible;
        varying float vLightLevel;
        varying vec3 vWorldPos;

        bool isChunkVisible(uint chunkIndexValue) {
          if (${Ci} == uint(${er})) {
            return true;
          }

          uint wordIndex = chunkIndexValue >> 5u;
          uvec4 packedWords = ${wi}[int(wordIndex >> 2u)];
          uint packedWord = packedWords[int(wordIndex & 3u)];
          uint bitIndex = chunkIndexValue & 31u;
          return ((packedWord >> bitIndex) & 1u) != 0u;
        }

        void main() {
          uint chunkIndexValue = uint(chunkIndex + 0.5);
          vChunkVisible = isChunkVisible(chunkIndexValue) ? 1.0 : 0.0;
          vLightLevel = lightLevel;
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),o=Dt.basic.fragmentShader.replace("void main() {",`
          ${Dd}
          uniform vec3 ${Mn};
          uniform float ${_a};
          varying float vChunkVisible;
          varying float vLightLevel;
          varying vec3 vWorldPos;
          ${Fd()}
          void main() {
        `).replace("#include <clipping_planes_fragment>",`
          #include <clipping_planes_fragment>
          if (vChunkVisible < 0.5) {
            discard;
          }
        `).replace("#include <opaque_fragment>",`
          vec3 ambientLight = ${Mn} * ${_a};
          vec3 blockLight = ${Mn} * vLightLevel;
          outgoingLight *= max(ambientLight, blockLight);
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:i,vertexShader:r,fragmentShader:o,glslVersion:lo,side:Cn,transparent:t,alphaTest:t?yl:0,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0});N(this,"colorValue",new Se(16777215));N(this,"ambientColor",new Se(16777215));N(this,"boundChunkVisibilityBits",null);N(this,"boundChunkVisibilityMode",-1);N(this,"boundChunkVisibilityRevision",-1);N(this,"transparentMode");N(this,"atlasTexture",null);N(this,"alphaTestValue",0);N(this,"ambientIntensity",1);this.transparentMode=t,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_MAP:"",MAP_UV:"uv",...t?{USE_ALPHATEST:""}:{}},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],chunkIndex:[0],lightLevel:[0]},this.bindUniforms()}set textureAtlas(t){this.atlasTexture=t}setAmbientIntensity(t){this.ambientIntensity=t}setAmbientColor(t){this.ambientColor.copy(t)}bindChunkVisibility(t,n,i){return this.boundChunkVisibilityBits===t&&this.boundChunkVisibilityMode===n&&this.boundChunkVisibilityRevision===i?!1:(this.boundChunkVisibilityBits=t,this.boundChunkVisibilityMode=n,this.boundChunkVisibilityRevision=i,this.uniforms[wi].value=t,this.uniforms[Ci].value=n,this.uniformsNeedUpdate=!0,!0)}copy(t){return super.copy(t),this.colorValue.copy(t.colorValue),this.ambientColor.copy(t.ambientColor),this.atlasTexture=t.atlasTexture,this.alphaTestValue=t.alphaTestValue,this.bindUniforms(),this}bindUniforms(){const t=this;this.uniforms.diffuse={value:this.colorValue},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms.map={get value(){return t.atlasTexture}},this.uniforms.alphaTest={get value(){return t.transparentMode?yl:t.alphaTestValue}},this.uniforms[Mn]={value:this.ambientColor},this.uniforms[_a]={get value(){return t.ambientIntensity}}}}class iy extends Gt{constructor(t){super({uniforms:sr.merge([Nd(t),Ud(fs),{[vi]:{value:0},[kr]:{value:null},[Mn]:{value:new Se(1,1,1)}}]),vertexShader:`
        uniform uvec4 ${wi}[${tr(fs)}];
        uniform uint ${Ci};
        uniform float ${vi};

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

        bool isChunkVisible(uint chunkIndexValue) {
          if (${Ci} == uint(${er})) {
            return true;
          }

          uint wordIndex = chunkIndexValue >> 5u;
          uvec4 packedWords = ${wi}[int(wordIndex >> 2u)];
          uint packedWord = packedWords[int(wordIndex & 3u)];
          uint bitIndex = chunkIndexValue & 31u;
          return ((packedWord >> bitIndex) & 1u) != 0u;
        }

        void main() {
          uint chunkIndexValue = uint(chunkIndex + 0.5);
          vChunkVisible = isChunkVisible(chunkIndexValue) ? 1.0 : 0.0;
          vNormal = normalize(normal);
          vUv = uv;
          vFoamLevel = foamLevel;
          vFoamLevelDiag = foamLevelDiag;

          vec3 pos = position;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vViewVector = normalize(cameraPosition - worldPos.xyz);

          float slowTime = ${vi} * 0.5;
          float yOffset = ${ty};
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
        ${Dd}
        uniform float ${vi};
        uniform sampler2D ${kr};
        uniform vec3 ${Mn};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying float vChunkVisible;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${Fd()}

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
          vec4 texColor = texture(${kr}, vUv);
          if (texColor.a < ${yl.toFixed(1)}) {
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
      `,forceSinglePass:!0,glslVersion:lo,side:en,transparent:!0,fog:!1,lights:!1,toneMapped:!0,vertexColors:!0});N(this,"ambientColor",new Se(16777215));N(this,"ambientIntensity",1);N(this,"boundChunkVisibilityBits",null);N(this,"boundChunkVisibilityMode",-1);N(this,"boundChunkVisibilityRevision",-1);this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],chunkIndex:[0],foamLevel:[0,0,0,0],foamLevelDiag:[0,0,0,0],uv:[0,0]}}set textureAtlas(t){this.uniforms[kr].value=t}setAmbientIntensity(t){this.ambientIntensity=t,this.uniforms[Mn].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}setAmbientColor(t){this.ambientColor.copy(t),this.uniforms[Mn].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}bindChunkVisibility(t,n,i){return this.boundChunkVisibilityBits===t&&this.boundChunkVisibilityMode===n&&this.boundChunkVisibilityRevision===i?!1:(this.boundChunkVisibilityBits=t,this.boundChunkVisibilityMode=n,this.boundChunkVisibilityRevision=i,this.uniforms[wi].value=t,this.uniforms[Ci].value=n,this.uniformsNeedUpdate=!0,!0)}update(t){this.uniforms[vi].value+=.0075}}function sy(s,e,t=ny){switch(s){case"lod":case"opaque":{const n=new ih(!1,t);return n.textureAtlas=e,n}case"transparent":{const n=new ih(!0,t);return n.depthWrite=!0,n.textureAtlas=e,n}case"liquid":{const n=new iy(t);return n.depthWrite=!0,n.textureAtlas=e,n}}}const ry={x:2,y:2,z:2},oy={x:8,y:4,z:8},ay={x:2,y:2,z:2},vn={x:8,y:4,z:8};class ly{constructor(e){N(this,"parent");N(this,"gl",null);N(this,"atlas",null);N(this,"ambientIntensity",1);N(this,"ambientColor",new Se(16777215));N(this,"fogProvider",null);N(this,"chunkBoundsCache",new Map);N(this,"parentBatches",new Map);N(this,"scratchChunkIds",new Set);N(this,"scratchChunkModes",new Map);N(this,"states",{liquid:zr(),lod:zr(),opaque:zr(),transparent:zr()});this.parent=e}setRenderer(e){this.gl=e.getContext()}get batchMeshCount(){return this.states.liquid.batches.size+this.states.lod.batches.size+this.states.opaque.batches.size+this.states.transparent.batches.size}setAtlas(e){if(this.atlas!==e){if(this.atlas=e,!e){this.disposeBatchMeshes();return}for(const t of Object.values(this.states))for(const n of t.batchChunkIds.keys())t.dirtyBatchIds.add(n)}}clear(){this.disposeBatchMeshes();for(const e of Object.values(this.states))e.batchChunkIds.clear(),e.chunkGeometries.clear(),e.dirtyBatchIds.clear();this.parentBatches.clear(),this.chunkBoundsCache.clear(),this.scratchChunkIds.clear(),this.scratchChunkModes.clear()}setChunkGeometry(e,t){this.updateKindGeometry("lod",e,(t==null?void 0:t.lodGeometry)??null),this.updateKindGeometry("opaque",e,(t==null?void 0:t.opaqueGeometry)??null),this.updateKindGeometry("transparent",e,(t==null?void 0:t.transparentGeometry)??null),this.updateKindGeometry("liquid",e,(t==null?void 0:t.liquidGeometry)??null)}flush(){!this.atlas||!this.gl||(this.flushKind("opaque"),this.flushKind("transparent"),this.flushKind("liquid"),this.flushKind("lod"))}update(e){for(const t of this.states.liquid.batches.values())"update"in t.material&&t.material.update(e)}setAmbientIntensity(e){this.ambientIntensity=e;for(const t of Object.values(this.states))for(const n of t.batches.values())n.material.setAmbientIntensity(e)}setAmbientColor(e){this.ambientColor.copy(e);for(const t of Object.values(this.states))for(const n of t.batches.values())n.material.setAmbientColor(this.ambientColor)}setFogProvider(e){if(this.fogProvider=e,this.atlas){const t=this.atlas;this.atlas=null,this.setAtlas(t)}}applyViewDistanceVisibility(e,t,n,i,r,o){for(const a of this.parentBatches.values())this.applyParentBatchVisibility(a,e,t,n,i,r,o)}dispose(){this.clear(),this.atlas=null}updateKindGeometry(e,t,n){const i=this.states[e],r=this.getBatchId(e,t),o=this.getParentBatchId(t),a=i.batchChunkIds.get(r)??new Set,l=i.chunkGeometries.has(t);if(n?(i.chunkGeometries.set(t,n),a.add(t),i.batchChunkIds.set(r,a)):(i.chunkGeometries.delete(t),a.delete(t)&&a.size===0&&i.batchChunkIds.delete(r)),this.updateParentBatchRegistration(e,o,r,t,!!n),l!==!!n){i.dirtyBatchIds.add(r),i.dirtyChunkIdsByBatch.delete(r);return}const u=i.dirtyChunkIdsByBatch.get(r)??new Set;u.add(t),i.dirtyChunkIdsByBatch.set(r,u),i.dirtyBatchIds.add(r)}flushKind(e){const t=this.states[e],n=[...t.dirtyBatchIds];t.dirtyBatchIds.clear();for(const i of n){const r=t.dirtyChunkIdsByBatch.get(i);(!r||r.size===0||!this.updateBatchChunks(e,i,r))&&this.rebuildBatch(e,i),t.dirtyChunkIdsByBatch.delete(i)}}updateBatchChunks(e,t,n){const i=this.states[e],r=i.batches.get(t),o=i.batchMetadata.get(t);if(!r||!o||!this.gl)return!1;for(const a of n){const l=i.chunkGeometries.get(a),c=o.allocations.get(a);if(!l||!c)return!1;const u=l.positions.length/3,h=l.indices.length;if(u>c.vertexCapacity||h>c.indexCapacity)return!1;this.writeChunkGeometry(o,c,l),c.vertexCount=u,c.indexCount=h}return this.updateBatchDrawRange(r.geometry,o),this.flushPendingUploads(o),!0}rebuildBatch(e,t){var A,w;const n=this.states[e],i=n.batches.get(t)??null,r=n.batchMetadata.get(t)??null,o=n.batchChunkIds.get(t);if(!o||o.size===0||!this.atlas||!this.gl){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(t)),r&&this.disposeBatchMetadata(r),n.batchMetadata.delete(t);return}const a=[...o].sort(cy);let l=0,c=0;for(const T of a){const x=n.chunkGeometries.get(T);if(!x)continue;const S=r==null?void 0:r.allocations.get(T),O=x.positions.length/3;l+=Tl(O,(S==null?void 0:S.vertexCapacity)??0),c+=rh(x.indices.length,(S==null?void 0:S.indexCapacity)??0)}if(c===0){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(t)),r&&this.disposeBatchMetadata(r),n.batchMetadata.delete(t);return}const u=Math.max(l,(r==null?void 0:r.vertexCapacity)??0),h=Math.max(c,(r==null?void 0:r.indexCapacity)??0),d=new Map;let f=0,m=0;for(let T=0;T<a.length;T++){const x=a[T],S=n.chunkGeometries.get(x);if(!S)continue;const O=S.positions.length/3,R=Tl(O,((A=r==null?void 0:r.allocations.get(x))==null?void 0:A.vertexCapacity)??0),B=rh(S.indices.length,((w=r==null?void 0:r.allocations.get(x))==null?void 0:w.indexCapacity)??0),k=m,F=f;f+=B,m+=R,d.set(x,{chunkIndex:T,indexCapacity:B,indexCount:S.indices.length,indexOffset:F,vertexCapacity:R,vertexCount:O,vertexOffset:k})}const _=kd(d),p=i??this.createBatchMesh(e),g=p.geometry,y=r??this.createBatchMetadata(e,t);y.allocations=d,y.chunkIds=a,y.vertexCapacity=u,y.indexCapacity=h,y.pendingUploads.length=0,this.resizeBatchBuffers(g,y,e,u,h);for(const T of a){const x=n.chunkGeometries.get(T),S=d.get(T);!x||!S||this.writeChunkGeometry(y,S,x)}g.setDrawRange(0,_),fy(g,e,t),nh(p),this.flushPendingUploads(y);const E=(r==null?void 0:r.visibility)??new Float32Array(256);let M=!r||r.chunkIds.length!==a.length;M&&E.fill(0),p.material.setAmbientColor(this.ambientColor),p.material.setAmbientIntensity(this.ambientIntensity),n.batches.set(t,p),y.visibility=E,y.visibilityDirty=M,r||p.material.bindChunkVisibility(y.chunkVisibilityBits,y.chunkVisibilityMode,y.chunkVisibilityRevision),n.batchMetadata.set(t,y),i||this.parent.add(p)}createBatchMesh(e){const t=new Xt,n=sy(e,this.atlas.texture,this.fogProvider??void 0);n.setAmbientColor(this.ambientColor),n.setAmbientIntensity(this.ambientIntensity);const i=new Et(t,n);return i.frustumCulled=!1,i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.renderOrder=e==="lod"?-1:e==="opaque"?0:e==="transparent"?1:2,i.updateMatrix(),nh(i),i}applyParentBatchVisibility(e,t,n,i,r,o,a){if(sh(e.bounds,t,i)===-1||!r.intersectsBox(e.bounds)){this.syncParentBatchVisibility(e,"hidden");return}const l=this.classifyParentChunkVisibility(e,t,n,i,r,o,a);let c=!1;c||(c=this.applyBatchSetVisibility(this.states.opaque,e.opaqueBatchIds,l,"normal",a)),c||(c=this.applyBatchSetVisibility(this.states.transparent,e.transparentBatchIds,l,"normal",a)),c||(c=this.applyBatchSetVisibility(this.states.liquid,e.liquidBatchIds,l,"normal",a));const u=e.lodBatchId?this.applyBatchSetVisibility(this.states.lod,new Set([e.lodBatchId]),l,"lod",a):!1;let h="hidden";c&&u?h="mixed":c?h="normal":u&&(h="lod"),this.syncParentBatchVisibility(e,h)}classifyParentChunkVisibility(e,t,n,i,r,o,a){const l=e.chunkModes;l.clear();for(const c of this.getParentBatchChunkIds(e)){const u=o==null?void 0:o.get(c);if(u){if(a&&!a.has(c)){l.set(c,"hidden");continue}l.set(c,u);continue}const h=this.getChunkBounds(c);if(!r.intersectsBox(h)){l.set(c,"hidden");continue}if(sh(h,t,i)===-1){l.set(c,"hidden");continue}if(a&&!a.has(c)){l.set(c,"hidden");continue}Bd(h,t)>n&&e.lodChunkIds.has(c)?l.set(c,"lod"):l.set(c,"normal")}return l}applyBatchSetVisibility(e,t,n,i,r){let o=!1;for(const a of t){const l=e.batches.get(a),c=e.batchMetadata.get(a);if(!l||!c)continue;const u=this.applyBatchChunkVisibility(c,l,n,i,r);l.visible=u,o||(o=u)}return o}applyBatchChunkVisibility(e,t,n,i,r){let o=0;e.chunkVisibilityScratchBits.fill(0);for(let c=0;c<e.chunkIds.length;c++){const u=e.chunkIds[c];if(n.get(u)!==i||r&&!r.has(u))continue;const h=c>>5;e.chunkVisibilityScratchBits[h]|=1<<(c&31),o++}const a=!dy(e.chunkVisibilityBits,e.chunkVisibilityScratchBits);a&&e.chunkVisibilityBits.set(e.chunkVisibilityScratchBits);let l=ey;return o===e.chunkIds.length&&(l=er),(e.chunkVisibilityMode!==l||a||e.visibilityDirty)&&(e.chunkVisibilityMode=l,e.chunkVisibilityRevision++,t.material.bindChunkVisibility(e.chunkVisibilityBits,e.chunkVisibilityMode,e.chunkVisibilityRevision),e.visibilityDirty=!1),o>0}syncParentBatchVisibility(e,t){if(t==="hidden"){for(const n of e.opaqueBatchIds){const i=this.states.opaque.batches.get(n);i&&(i.visible=!1)}for(const n of e.transparentBatchIds){const i=this.states.transparent.batches.get(n);i&&(i.visible=!1)}for(const n of e.liquidBatchIds){const i=this.states.liquid.batches.get(n);i&&(i.visible=!1)}if(e.lodBatchId){const n=this.states.lod.batches.get(e.lodBatchId);n&&(n.visible=!1)}}e.visibilityState=t}getParentBatchChunkIds(e){if(!e.allChunkIdsDirty)return e.allChunkIds;const t=new Set(e.lodChunkIds);this.collectParentBatchChunkIds(this.states.opaque,e.opaqueBatchIds,t),this.collectParentBatchChunkIds(this.states.transparent,e.transparentBatchIds,t),this.collectParentBatchChunkIds(this.states.liquid,e.liquidBatchIds,t),e.allChunkIds.length=0;for(const n of t)e.allChunkIds.push(n);return e.allChunkIdsDirty=!1,e.allChunkIds}collectParentBatchChunkIds(e,t,n){for(const i of t){const r=e.batchMetadata.get(i);if(r)for(const o of r.chunkIds)n.add(o)}}updateParentBatchRegistration(e,t,n,i,r){var l;const o=this.ensureParentBatch(t);if(o.allChunkIdsDirty=!0,e==="lod"){r?(o.lodBatchId=n,o.lodChunkIds.add(i)):(o.lodChunkIds.delete(i),o.lodChunkIds.size===0&&(o.lodBatchId=void 0)),this.cleanupParentBatch(t,o);return}const a=e==="opaque"?o.opaqueBatchIds:e==="transparent"?o.transparentBatchIds:o.liquidBatchIds;r?a.add(n):(((l=this.states[e].batchChunkIds.get(n))==null?void 0:l.size)??0)===0&&a.delete(n),this.cleanupParentBatch(t,o)}ensureParentBatch(e){const t=this.parentBatches.get(e);if(t)return t;const[n,i,r]=e.split(",").map(Number),o=new jt(new P(n,i,r),new P(n+vn.x*Ze,i+vn.y*Ze,r+vn.z*Ze)),a={allChunkIds:[],allChunkIdsDirty:!0,bounds:o,chunkModes:new Map,key:e,liquidBatchIds:new Set,lodChunkIds:new Set,opaqueBatchIds:new Set,transparentBatchIds:new Set,visibilityState:"hidden"};return this.parentBatches.set(e,a),a}cleanupParentBatch(e,t){const n=t.opaqueBatchIds.size>0||t.transparentBatchIds.size>0||t.liquidBatchIds.size>0,i=t.lodChunkIds.size>0||t.lodBatchId!==void 0;n||i||this.parentBatches.delete(e)}getChunkBounds(e){const t=this.chunkBoundsCache.get(e);if(t)return t;const n=uy(e);return this.chunkBoundsCache.set(e,n),n}getBatchId(e,t){const n=Ye.chunkIdToOriginCoordinate(t),i=Od(e),r={x:i.x*Ze,y:i.y*Ze,z:i.z*Ze};return[Math.floor(n.x/r.x)*r.x,Math.floor(n.y/r.y)*r.y,Math.floor(n.z/r.z)*r.z].join(",")}getParentBatchId(e){const t=Ye.chunkIdToOriginCoordinate(e);return[Math.floor(t.x/(vn.x*Ze))*vn.x*Ze,Math.floor(t.y/(vn.y*Ze))*vn.y*Ze,Math.floor(t.z/(vn.z*Ze))*vn.z*Ze].join(",")}disposeBatchMeshes(){for(const e of Object.values(this.states)){for(const[t,n]of e.batches.entries()){this.parent.remove(n),n.geometry.dispose(),n.material.dispose();const i=e.batchMetadata.get(t);i&&this.disposeBatchMetadata(i)}e.batches.clear(),e.batchMetadata.clear(),e.dirtyChunkIdsByBatch.clear()}}createBatchMetadata(e,t){return{allocations:new Map,batchId:t,chunkIds:[],chunkIndexBuffer:this.createGLBuffer(this.gl.ARRAY_BUFFER,2),chunkVisibilityBits:new Uint32Array(tr(fs)*4),chunkVisibilityMode:er,chunkVisibilityRevision:0,chunkVisibilityScratchBits:new Uint32Array(tr(fs)*4),colorBuffer:this.createGLBuffer(this.gl.ARRAY_BUFFER,4),indexArrayCtor:Uint16Array,indexBuffer:this.createGLBuffer(this.gl.ELEMENT_ARRAY_BUFFER,2),indexBytesPerElement:2,indexCapacity:1,indexType:this.gl.UNSIGNED_SHORT,lightLevelBuffer:this.createGLBuffer(this.gl.ARRAY_BUFFER,4),normalBuffer:this.createGLBuffer(this.gl.ARRAY_BUFFER,4),pendingUploads:[],positionBuffer:this.createGLBuffer(this.gl.ARRAY_BUFFER,4),uvBuffer:this.createGLBuffer(this.gl.ARRAY_BUFFER,4),vertexCapacity:1,visibility:new Float32Array(256),visibilityDirty:!0,...e==="liquid"?{foamBuffer:this.createGLBuffer(this.gl.ARRAY_BUFFER,4),foamDiagBuffer:this.createGLBuffer(this.gl.ARRAY_BUFFER,4)}:{}}}resizeBatchBuffers(e,t,n,i,r){const o=this.gl;o&&(t.pendingUploads.length=0,t.vertexCapacity=i,t.indexCapacity=r,t.indexType=i>65535?o.UNSIGNED_INT:o.UNSIGNED_SHORT,t.indexArrayCtor=t.indexType===o.UNSIGNED_INT?Uint32Array:Uint16Array,t.indexBytesPerElement=t.indexType===o.UNSIGNED_INT?4:2,this.allocateBuffer(t.positionBuffer,o.ARRAY_BUFFER,i*3*4),this.allocateBuffer(t.normalBuffer,o.ARRAY_BUFFER,i*3*4),this.allocateBuffer(t.uvBuffer,o.ARRAY_BUFFER,i*2*4),this.allocateBuffer(t.colorBuffer,o.ARRAY_BUFFER,i*3*4),this.allocateBuffer(t.chunkIndexBuffer,o.ARRAY_BUFFER,i*2),this.allocateBuffer(t.lightLevelBuffer,o.ARRAY_BUFFER,i*4),t.foamBuffer&&t.foamDiagBuffer&&(this.allocateBuffer(t.foamBuffer,o.ARRAY_BUFFER,i*4*4),this.allocateBuffer(t.foamDiagBuffer,o.ARRAY_BUFFER,i*4*4)),this.allocateBuffer(t.indexBuffer,o.ELEMENT_ARRAY_BUFFER,r*t.indexBytesPerElement),this.attachGLAttributes(e,t,n))}attachGLAttributes(e,t,n){const i=this.gl;i&&(e.setIndex(new Vn(t.indexBuffer,t.indexType,1,t.indexBytesPerElement,t.indexCapacity)),e.setAttribute("position",new Vn(t.positionBuffer,i.FLOAT,3,4,t.vertexCapacity)),e.setAttribute("normal",new Vn(t.normalBuffer,i.FLOAT,3,4,t.vertexCapacity)),e.setAttribute("uv",new Vn(t.uvBuffer,i.FLOAT,2,4,t.vertexCapacity)),e.setAttribute("color",new Vn(t.colorBuffer,i.FLOAT,3,4,t.vertexCapacity)),e.setAttribute("chunkIndex",new Vn(t.chunkIndexBuffer,i.UNSIGNED_SHORT,1,2,t.vertexCapacity)),e.setAttribute("lightLevel",new Vn(t.lightLevelBuffer,i.FLOAT,1,4,t.vertexCapacity)),n==="liquid"&&t.foamBuffer&&t.foamDiagBuffer?(e.setAttribute("foamLevel",new Vn(t.foamBuffer,i.FLOAT,4,4,t.vertexCapacity)),e.setAttribute("foamLevelDiag",new Vn(t.foamDiagBuffer,i.FLOAT,4,4,t.vertexCapacity))):(e.deleteAttribute("foamLevel"),e.deleteAttribute("foamLevelDiag")))}writeChunkGeometry(e,t,n){const i=this.gl;if(!i)return;this.queueUpload(e,e.positionBuffer,i.ARRAY_BUFFER,t.vertexOffset*3*4,n.positions),this.queueUpload(e,e.normalBuffer,i.ARRAY_BUFFER,t.vertexOffset*3*4,n.normals),this.queueUpload(e,e.uvBuffer,i.ARRAY_BUFFER,t.vertexOffset*2*4,n.uvs),this.queueUpload(e,e.colorBuffer,i.ARRAY_BUFFER,t.vertexOffset*3*4,n.colors),this.queueUpload(e,e.chunkIndexBuffer,i.ARRAY_BUFFER,t.vertexOffset*2,new Uint16Array(t.vertexCapacity).fill(t.chunkIndex)),this.queueUpload(e,e.lightLevelBuffer,i.ARRAY_BUFFER,t.vertexOffset*4,n.lightLevels),e.foamBuffer&&e.foamDiagBuffer&&(this.queueUpload(e,e.foamBuffer,i.ARRAY_BUFFER,t.vertexOffset*4*4,n.foamLevels??new Float32Array(t.vertexCapacity*4)),this.queueUpload(e,e.foamDiagBuffer,i.ARRAY_BUFFER,t.vertexOffset*4*4,n.foamLevelsDiag??new Float32Array(t.vertexCapacity*4)));const r=new e.indexArrayCtor(t.indexCapacity);for(let o=0;o<n.indices.length;o++)r[o]=n.indices[o]+t.vertexOffset;for(let o=n.indices.length;o<t.indexCapacity;o++)r[o]=t.vertexOffset;this.queueUpload(e,e.indexBuffer,i.ELEMENT_ARRAY_BUFFER,t.indexOffset*e.indexBytesPerElement,r)}queueUpload(e,t,n,i,r){e.pendingUploads.push({arrayCtor:r.constructor,buffer:t,bytesPerElement:r.BYTES_PER_ELEMENT,data:r,offset:i,target:n})}flushPendingUploads(e){if(e.pendingUploads.length===0)return;const t=new Map;for(const n of e.pendingUploads){const i=t.get(n.buffer);i?i.push(n):t.set(n.buffer,[n])}for(const n of t.values())this.flushMergedUploads(n);e.pendingUploads.length=0}flushMergedUploads(e){e.sort((i,r)=>i.offset-r.offset);let t=0,n=e[0].offset+e[0].data.byteLength;for(let i=1;i<=e.length;i++){const r=e[i];if(r&&r.offset<=n+r.bytesPerElement&&r.arrayCtor===e[t].arrayCtor&&r.bytesPerElement===e[t].bytesPerElement){n=Math.max(n,r.offset+r.data.byteLength);continue}this.flushUploadCluster(e,t,i),t=i,r&&(n=r.offset+r.data.byteLength)}}flushUploadCluster(e,t,n){if(n<=t)return;const i=e[t];if(n===t+1){this.uploadArray(i.buffer,i.target,i.offset,i.data);return}let r=i.offset+i.data.byteLength;for(let l=t+1;l<n;l++)r=Math.max(r,e[l].offset+e[l].data.byteLength);const o=(r-i.offset)/i.bytesPerElement,a=new i.arrayCtor(o);for(let l=t;l<n;l++){const c=e[l],u=(c.offset-i.offset)/c.bytesPerElement;a.set(c.data,u)}this.uploadArray(i.buffer,i.target,i.offset,a)}uploadArray(e,t,n,i){const r=this.gl;r&&(r.bindBuffer(t,e),r.bufferSubData(t,n,i))}allocateBuffer(e,t,n){const i=this.gl;i&&(i.bindBuffer(t,e),i.bufferData(t,n,i.DYNAMIC_DRAW))}createGLBuffer(e,t){const n=this.gl;if(!n)throw new Error("ChunkBatchRenderer: WebGL context is not ready.");const i=n.createBuffer();if(!i)throw new Error("ChunkBatchRenderer: Failed to create WebGL buffer.");return this.allocateBuffer(i,e,t),i}updateBatchDrawRange(e,t){e.setDrawRange(0,hy(t))}disposeBatchMetadata(e){const t=this.gl;t&&(t.deleteBuffer(e.positionBuffer),t.deleteBuffer(e.normalBuffer),t.deleteBuffer(e.uvBuffer),t.deleteBuffer(e.colorBuffer),t.deleteBuffer(e.chunkIndexBuffer),t.deleteBuffer(e.lightLevelBuffer),t.deleteBuffer(e.indexBuffer),e.foamBuffer&&t.deleteBuffer(e.foamBuffer),e.foamDiagBuffer&&t.deleteBuffer(e.foamDiagBuffer))}}function zr(){return{batchChunkIds:new Map,batches:new Map,batchMetadata:new Map,chunkGeometries:new Map,dirtyBatchIds:new Set,dirtyChunkIdsByBatch:new Map}}function Od(s){switch(s){case"liquid":return ry;case"lod":return oy;case"opaque":return vn;case"transparent":return ay}}function cy(s,e){const t=Ye.chunkIdToOriginCoordinate(s),n=Ye.chunkIdToOriginCoordinate(e);return t.y!==n.y?t.y-n.y:t.z!==n.z?t.z-n.z:t.x-n.x}function Bd(s,e){const t=Math.max(s.min.x,Math.min(e.x,s.max.x)),n=Math.max(s.min.z,Math.min(e.y,s.max.z)),i=e.x-t,r=e.y-n;return i*i+r*r}function sh(s,e,t){if(Bd(s,e)>t)return-1;const n=Math.abs(e.x-s.min.x)>Math.abs(e.x-s.max.x)?s.min.x:s.max.x,i=Math.abs(e.y-s.min.z)>Math.abs(e.y-s.max.z)?s.min.z:s.max.z,r=e.x-n,o=e.y-i;return r*r+o*o<=t?1:0}function uy(s){const e=Ye.chunkIdToOriginCoordinate(s);return new jt(new P(e.x,e.y,e.z),new P(e.x+Ze,e.y+Ze,e.z+Ze))}function Tl(s,e){if(s<=e)return e;let t=Math.max(1,e);for(;t<s;)t*=2;return t}function rh(s,e){const t=Tl(s,e),n=t%3;return n===0?t:t+(3-n)}function hy(s){return kd(s.allocations)}function dy(s,e){if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0}function kd(s){let e=0;for(const t of s.values())e=Math.max(e,t.indexOffset+t.indexCount);return e}function fy(s,e,t){const[n,i,r]=t.split(",").map(Number),o=Od(e),a=new P(n+o.x*Ze,i+o.y*Ze,r+o.z*Ze);s.boundingBox=new jt(new P(n,i,r),a),s.boundingSphere=s.boundingBox.getBoundingSphere(s.boundingSphere??new an)}function To({x:s,y:e,z:t}){return`${s},${e},${t}`}function py(s){const e=s.indexOf(","),t=s.indexOf(",",e+1);return{x:Number(s.slice(0,e)),y:Number(s.slice(e+1,t)),z:Number(s.slice(t+1))}}function my(s){return typeof s=="number"?s:s.i}function gy(s){return typeof s=="number"?0:s.r??0}const oh=["left","right","top","bottom","front","back"],_y=1,xy=2,vy=4,ah=[[1,0,0,0,1,0,0,0,1],[0,0,-1,0,1,0,1,0,0],[-1,0,0,0,1,0,0,0,-1],[0,0,1,0,1,0,-1,0,0],[-1,0,0,0,-1,0,0,0,1],[0,0,-1,0,-1,0,-1,0,0],[1,0,0,0,-1,0,0,0,-1],[0,0,1,0,-1,0,1,0,0],[0,-1,0,1,0,0,0,0,1],[0,0,-1,1,0,0,0,-1,0],[0,1,0,1,0,0,0,0,-1],[0,0,1,1,0,0,0,1,0],[0,1,0,-1,0,0,0,0,1],[0,0,-1,-1,0,0,0,1,0],[0,-1,0,-1,0,0,0,0,-1],[0,0,1,-1,0,0,0,-1,0],[1,0,0,0,0,1,0,-1,0],[0,1,0,0,0,1,1,0,0],[-1,0,0,0,0,1,0,1,0],[0,-1,0,0,0,1,-1,0,0],[1,0,0,0,0,-1,0,1,0],[0,-1,0,0,0,-1,1,0,0],[-1,0,0,0,0,-1,0,-1,0],[0,1,0,0,0,-1,-1,0,0]],Qi=16,lh=.3,yy=Array.from({length:Qi+1},(s,e)=>e===0?0:lh+(1-lh)*(e-1)/(Qi-1)),My=[0,.5,.7,.9],Sy=[1,1,1,1];function by(s){var a;const e=s.name.toLowerCase(),t=Ty(s.trimeshVertices,s.trimeshIndices,s.customColliderOptions),n=t.vertices,i=t.indices,r=Ey(s.textureUri),o=s.isMultiTexture?{left:`${r}/-x.png`,right:`${r}/+x.png`,top:`${r}/+y.png`,bottom:`${r}/-y.png`,front:`${r}/+z.png`,back:`${r}/-z.png`}:{left:r,right:r,top:r,bottom:r,front:r,back:r};return{...s,aoIntensity:My,axisPassMask:((a=t.profile)==null?void 0:a.axisPassMask)??0,color:Sy,isTranslucent:!!s.isLiquid||e.includes("glass")||e.includes("leaves")||e.includes("water")||e.includes("ice"),transparencyRatio:0,trimeshIndices:i,trimeshOcclusionProfile:t.profile,trimeshTriangleData:Cy(n,i),trimeshVertices:n,textureUris:o}}function Ey(s){return s.startsWith("http://")||s.startsWith("https://")?s:`/voxcinder/world-editor/${s.startsWith("/")?s.slice(1):s}`}function Ty(s,e,t){const n=ch(s),i=uh(e);if(n&&i)return{vertices:n,indices:i,profile:hh(n,i)};if(!t||t.shape!=="trimesh")return{};const r=ch(Ay(t,"vertices")),o=uh(wy(t,"indices"));return{vertices:r,indices:o,profile:r&&o?hh(r,o):void 0}}function ch(s){if(s)return s instanceof Float32Array?s.slice():new Float32Array(s)}function uh(s){if(s)return s instanceof Uint32Array?s.slice():new Uint32Array(s)}function Ay(s,e){const t=s[e];if(t instanceof Float32Array||Array.isArray(t))return t}function wy(s,e){const t=s[e];if(t instanceof Uint32Array||Array.isArray(t))return t}function Cy(s,e){if(!s||!e)return;const t=e.length/3,n=new Array(t);for(let i=0;i<t;i++){const r=e[i*3]*3,o=e[i*3+1]*3,a=e[i*3+2]*3,l=s[r],c=s[r+1],u=s[r+2],h=s[o],d=s[o+1],f=s[o+2],m=s[a],_=s[a+1],p=s[a+2],g=h-l,y=d-c,E=f-u,M=m-l,A=_-c,w=p-u,T=y*w-E*A,x=E*M-g*w,S=g*A-y*M,O=Math.sqrt(T*T+x*x+S*S)||1,R=Math.abs(T),B=Math.abs(x),k=Math.abs(S),F=B>=R&&B>=k,V=!F&&R>=k;n[i]={normalX:T/O,normalY:x/O,normalZ:S/O,v0x:l,v0y:c,v0z:u,v1x:h,v1y:d,v1z:f,v2x:m,v2y:_,v2z:p,v0u:F?l:V?u:l,v0v:F?u:c,v1u:F?h:V?f:h,v1v:F?f:d,v2u:F?m:V?p:m,v2v:F?p:_}}return n}function hh(s,e){if(e.length===0)return{aoOpacity:1,axisPassMask:0,skyOpacityUp:1,skyOpacityX:1,skyOpacityZ:1};const t=4,n=new Uint8Array(t*t*t);for(let c=0;c<e.length;c+=3){const u=e[c]*3,h=e[c+1]*3,d=e[c+2]*3,f=Math.max(0,Math.min(1,Math.min(s[u],s[h],s[d]))),m=Math.max(0,Math.min(1,Math.min(s[u+1],s[h+1],s[d+1]))),_=Math.max(0,Math.min(1,Math.min(s[u+2],s[h+2],s[d+2]))),p=Math.max(0,Math.min(1,Math.max(s[u],s[h],s[d]))),g=Math.max(0,Math.min(1,Math.max(s[u+1],s[h+1],s[d+1]))),y=Math.max(0,Math.min(1,Math.max(s[u+2],s[h+2],s[d+2]))),E=Math.max(0,Math.min(t-1,Math.floor(f*t))),M=Math.max(0,Math.min(t-1,Math.floor(m*t))),A=Math.max(0,Math.min(t-1,Math.floor(_*t))),w=Math.max(E,Math.max(0,Math.min(t-1,Math.ceil(p*t)-1))),T=Math.max(M,Math.max(0,Math.min(t-1,Math.ceil(g*t)-1))),x=Math.max(A,Math.max(0,Math.min(t-1,Math.ceil(y*t)-1)));for(let S=A;S<=x;S++)for(let O=M;O<=T;O++)for(let R=E;R<=w;R++)n[R+t*(O+t*S)]=1}let i=0;for(let c=0;c<n.length;c++)i+=n[c];let r=0;for(let c=0;c<t;c++)for(let u=0;u<t;u++)for(let h=0;h<t;h++)if(n[u+t*(h+t*c)]!==0){r++;break}let o=0;for(let c=0;c<t;c++)for(let u=0;u<t;u++)for(let h=0;h<t;h++)if(n[h+t*(u+t*c)]!==0){o++;break}let a=0;for(let c=0;c<t;c++)for(let u=0;u<t;u++)for(let h=0;h<t;h++)if(n[u+t*(c+t*h)]!==0){a++;break}let l=0;return o<t*t&&(l|=_y),r<t*t&&(l|=xy),a<t*t&&(l|=vy),{aoOpacity:i/(t*t*t),axisPassMask:l,skyOpacityUp:r/(t*t),skyOpacityX:o/(t*t),skyOpacityZ:a/(t*t)}}const Ry=15,ji=Math.ceil((Ry+1)/Ze);class dh{constructor(){N(this,"_chunks",new Map);N(this,"_blockTypes",new Map);N(this,"_blockTypeList",[]);N(this,"_entities");N(this,"_lightSourcesCache",null)}load(e,t){var n;this._chunks.clear(),this._entities=e.entities?{...e.entities}:void 0,this._setBlockTypes((n=e.blockTypes)!=null&&n.length?e.blockTypes:t);for(const[i,r]of Object.entries(e.blocks??{})){const o=my(r);o!==0&&this.setBlock(py(i),o,gy(r))}}toJson(){const e={};for(const t of this._chunks.values())t.forEachBlock((n,i,r)=>{const o={x:t.originCoordinate.x+n.x,y:t.originCoordinate.y+n.y,z:t.originCoordinate.z+n.z};e[To(o)]=r===0?i:{i,r}});return{blockTypes:this._blockTypeList.map(t=>({id:t.id,name:t.name,textureUri:t.textureUri,isLiquid:t.isLiquid,lightLevel:t.lightLevel,...t.trimeshIndices?{trimeshIndices:Array.from(t.trimeshIndices)}:{},...t.trimeshVertices?{trimeshVertices:Array.from(t.trimeshVertices)}:{},durability:t.durability,customColliderOptions:t.customColliderOptions,isCustom:t.isCustom,isMultiTexture:t.isMultiTexture})),blocks:e,...this._entities?{entities:this._entities}:{}}}get blockTypes(){return this._blockTypeList}get chunkIds(){return[...this._chunks.keys()]}get entities(){return this._entities?{...this._entities}:{}}toSnapshot(){return{blockTypes:this._blockTypeList.map(fh),chunks:this.chunkIds.map(e=>{const t=this._chunks.get(e);return{chunkId:e,originCoordinate:{...t.originCoordinate},blocks:t.cloneBlocks(),rotations:t.cloneRotations()}}),...this._entities?{entities:{...this._entities}}:{}}}loadSnapshot(e){this._chunks.clear(),this._blockTypes.clear(),this._blockTypeList=e.blockTypes.map(fh);for(const t of this._blockTypeList)this._blockTypes.set(t.id,t);for(const t of e.chunks)this._chunks.set(t.chunkId,new Ye(t.originCoordinate,t.blocks,t.rotations));this._entities=e.entities?{...e.entities}:void 0,this._lightSourcesCache=null}getChunkSnapshot(e){const t=this._chunks.get(e);return t?{chunkId:e,originCoordinate:{...t.originCoordinate},blocks:t.cloneBlocks(),rotations:t.cloneRotations()}:null}applyChunkSnapshot(e,t){if(!t){this._chunks.delete(e),this._lightSourcesCache=null;return}this._chunks.set(e,new Ye({...t.originCoordinate},new Uint16Array(t.blocks),new Uint8Array(t.rotations))),this._lightSourcesCache=null}setEntities(e){this._entities=e?{...e}:void 0}setEntity(e,t){this._entities||(this._entities={}),this._entities[e]=t}deleteEntity(e){this._entities&&(delete this._entities[e],Object.keys(this._entities).length===0&&(this._entities=void 0))}getChunk(e){return this._chunks.get(e)}getBlockTypeById(e){return e===0?void 0:this._blockTypes.get(e)}getBlockType(e){const t=this.getBlockTypeId(e);return t===0?void 0:this._blockTypes.get(t)}getBlockTypeId(e){const t=this._chunks.get(Ye.globalCoordinateToChunkId(e));return t?t.getBlockType(Ye.globalCoordinateToLocalCoordinate(e)):0}getBlockRotation(e){const t=this._chunks.get(Ye.globalCoordinateToChunkId(e));return t?t.getBlockRotation(Ye.globalCoordinateToLocalCoordinate(e)):0}hasBlock(e){return this.getBlockTypeId(e)!==0}setBlock(e,t,n=0){const i=Ye.globalCoordinateToChunkId(e),r=Ye.globalCoordinateToLocalCoordinate(e);let o=this._chunks.get(i);o||(o=new Ye(Ye.globalCoordinateToOriginCoordinate(e)),this._chunks.set(i,o)),o.setBlock(r,t),o.setBlockRotation(r,t===0?0:n),o.isEmpty()&&this._chunks.delete(i),this._lightSourcesCache=null}deleteBlock(e){this.setBlock(e,0)}getChunksNear(e,t){const n=Ye.globalCoordinateToOriginCoordinate(e),i=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=this._chunks.get(Ye.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&i.push(l)}return i}getAllLightSources(){if(this._lightSourcesCache)return this._lightSourcesCache;const e=[];for(const t of this._chunks.values())t.forEachBlock((n,i)=>{const r=this._blockTypes.get(i);r!=null&&r.lightLevel&&e.push({position:{x:t.originCoordinate.x+n.x,y:t.originCoordinate.y+n.y,z:t.originCoordinate.z+n.z},level:r.lightLevel})});return this._lightSourcesCache=e,e}getLightSourcesNear(e,t){const n=Ye.globalCoordinateToOriginCoordinate(e),i=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=this._chunks.get(Ye.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&l.forEachBlock((c,u)=>{const h=this._blockTypes.get(u);h!=null&&h.lightLevel&&i.push({position:{x:l.originCoordinate.x+c.x,y:l.originCoordinate.y+c.y,z:l.originCoordinate.z+c.z},level:h.lightLevel})})}return i}getAffectedChunkIds(e,t,n){const i=new Set,r=Ye.globalCoordinateToChunkId(e),o=Ye.globalCoordinateToLocalCoordinate(e),a=t===0?void 0:this._blockTypes.get(t),l=n===0?void 0:this._blockTypes.get(n);if(i.add(r),(a==null?void 0:a.lightLevel)!==(l==null?void 0:l.lightLevel)){const d=Math.max((a==null?void 0:a.lightLevel)??0,(l==null?void 0:l.lightLevel)??0),f=Math.min(d,Ze);for(let m=-ji;m<=ji;m++)for(let _=-ji;_<=ji;_++)for(let p=-ji;p<=ji;p++){const g=Ye.globalCoordinateToChunkId({x:e.x+m*f,y:e.y+_*f,z:e.z+p*f});this._chunks.has(g)&&i.add(g)}}const c=[0],u=[0],h=[0];o.x===0?c.push(-1):o.x===Qt&&c.push(1),o.y===0?u.push(-1):o.y===Qt&&u.push(1),o.z===0?h.push(-1):o.z===Qt&&h.push(1);for(const d of c)for(const f of u)for(const m of h){if(d===0&&f===0&&m===0)continue;const _=Ye.globalCoordinateToChunkId({x:e.x+d,y:e.y+f,z:e.z+m});this._chunks.has(_)&&i.add(_)}return[...i]}_setBlockTypes(e){this._blockTypes.clear(),this._blockTypeList=e.map(by);for(const t of this._blockTypeList)this._blockTypes.set(t.id,t)}}function fh(s){const e=s.trimeshIndices?new Uint32Array(s.trimeshIndices):void 0,t=s.trimeshVertices?new Float32Array(s.trimeshVertices):void 0;return{id:s.id,name:s.name,textureUri:s.textureUri,isLiquid:s.isLiquid,lightLevel:s.lightLevel,durability:s.durability,customColliderOptions:s.customColliderOptions,isCustom:s.isCustom,isMultiTexture:s.isMultiTexture,textureUris:{...s.textureUris},aoIntensity:[...s.aoIntensity],axisPassMask:s.axisPassMask,color:[...s.color],isTranslucent:s.isTranslucent,transparencyRatio:s.transparencyRatio,...s.trimeshOcclusionProfile?{trimeshOcclusionProfile:{...s.trimeshOcclusionProfile}}:{},...e?{trimeshIndices:e}:{},...s.trimeshTriangleData?{trimeshTriangleData:s.trimeshTriangleData.map(n=>({...n}))}:{},...t?{trimeshVertices:t}:{}}}const Al="worldEditorColorMap",wl="worldEditorUseColorMap",Cl="worldEditorAlphaMap",Rl="worldEditorUseAlphaMap",ro="worldEditorAlphaTest",Il="worldEditorEmissive",Ll="worldEditorEmissiveIntensity",Pl="worldEditorEmissiveMap",Dl="worldEditorUseEmissiveMap",Ul="worldEditorFogColor",Nl="worldEditorFogEnabled",Fl="worldEditorFogNear",Ol="worldEditorFogFar",Hs="vWorldEditorColorMapUv",mo="vWorldEditorEmissiveMapUv",go="vWorldEditorWorldPos",uc=Dt.basic,Iy=new Ve,Ly=uc.vertexShader.replace("#include <uv_pars_vertex>",`
      #include <uv_pars_vertex>
      varying vec2 ${Hs};
      varying vec2 ${mo};
      varying vec3 ${go};
    `).replace("#include <uv_vertex>",`
      #include <uv_vertex>
      ${Hs} = uv;
      ${mo} = uv;
    `).replace("#include <project_vertex>",`
      vec4 worldEditorWorldPosition = vec4(transformed, 1.0);
      #ifdef USE_BATCHING
        worldEditorWorldPosition = batchingMatrix * worldEditorWorldPosition;
      #endif
      #ifdef USE_INSTANCING
        worldEditorWorldPosition = instanceMatrix * worldEditorWorldPosition;
      #endif
      worldEditorWorldPosition = modelMatrix * worldEditorWorldPosition;
      ${go} = worldEditorWorldPosition.xyz;
      #include <project_vertex>
    `),Py=uc.fragmentShader.replace("#include <map_pars_fragment>",`
      uniform sampler2D ${Al};
      uniform bool ${wl};
      uniform sampler2D ${Cl};
      uniform bool ${Rl};
      uniform float ${ro};
      uniform vec3 ${Il};
      uniform float ${Ll};
      uniform sampler2D ${Pl};
      uniform bool ${Dl};
      varying vec2 ${Hs};
      varying vec2 ${mo};
      varying vec3 ${go};
      uniform vec3 ${Ul};
      uniform bool ${Nl};
      uniform float ${Fl};
      uniform float ${Ol};

      vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
        if (!${Nl}) {
          return color;
        }

        float fogFactor = smoothstep(${Fl}, ${Ol}, length(worldPos.xz - cameraPosition.xz));
        return mix(color, ${Ul}, fogFactor);
      }
    `).replace("#include <alphamap_pars_fragment>","").replace("#include <alphatest_pars_fragment>","").replace("#include <map_fragment>",`
      if (${wl}) {
        vec4 sampledDiffuseColor = texture2D(${Al}, ${Hs});
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
      if (${Rl}) {
        diffuseColor.a *= texture2D(${Cl}, ${Hs}).g;
      }
    `).replace("#include <alphatest_fragment>",`
      if (${ro} > 0.0 && diffuseColor.a < ${ro}) {
        discard;
      }
    `).replace("#include <opaque_fragment>",`
      vec3 emissiveColor = ${Il} * ${Ll};
      if (${Dl}) {
        emissiveColor *= texture2D(${Pl}, ${mo}).rgb;
      }
      outgoingLight += emissiveColor;
      #include <opaque_fragment>
    `).replace("#include <fog_fragment>",`
      gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, ${go});
    `);class Dy extends Gt{constructor(t){const{alphaMap:n,alphaTest:i,color:r,emissive:o,emissiveIntensity:a,emissiveMap:l,fogUniformProvider:c,map:u,...h}=t||{};super({...h,uniforms:sr.clone(uc.uniforms),vertexShader:Ly,fragmentShader:Py,fog:!1,lights:!1,clipping:!0,toneMapped:!0});N(this,"_color");N(this,"_emissive");N(this,"_uvScrollSpeed",Iy);N(this,"_colorMap");N(this,"_alphaMap");N(this,"_alphaTestValue");N(this,"_emissiveMap");N(this,"_emissiveIntensityValue");N(this,"_fogUniformProvider");N(this,"_shaderProcessors",[]);this.defines={...this.defines||{},USE_UV:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0]},this._color=new Se(r??16777215),this._colorMap=u??null,this._alphaMap=n??null,this._alphaTestValue=i??0,this._emissive=new Se(o??0),this._emissiveMap=l??null,this._emissiveIntensityValue=a??1,this._fogUniformProvider=c??null,this.bindUniforms()}get color(){return this._color}get customEmissive(){return this._emissive}get customEmissiveIntensity(){return this._emissiveIntensityValue}addShaderProcessor(t,n=!1){n?this._shaderProcessors.push(t):this._shaderProcessors.unshift(t),this.needsUpdate=!0}onBeforeCompile(t,n){for(const i of this._shaderProcessors)i(t,n)}customProgramCacheKey(){return`${super.customProgramCacheKey()}|processors=${this._shaderProcessors.map(t=>t.toString()).join("|")}`}bindUniforms(){const t=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms[Al]={get value(){return t._colorMap}},this.uniforms[wl]={get value(){return t._colorMap!==null}},this.uniforms[Cl]={get value(){return t._alphaMap}},this.uniforms[Rl]={get value(){return t._alphaMap!==null}},this.uniforms[ro]={get value(){return t._alphaTestValue}},this.uniforms[Il]={value:this._emissive},this.uniforms[Ll]={get value(){return t._emissiveIntensityValue}},this.uniforms[Pl]={get value(){return t._emissiveMap}},this.uniforms[Dl]={get value(){return t._emissiveMap!==null}},this.uniforms[Ul]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.color())??t.color}},this.uniforms[Nl]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.enabled())??!1}},this.uniforms[Fl]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.near())??0}},this.uniforms[Ol]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.far())??0}},this.uniforms.uvScroll={value:this._uvScrollSpeed}}}function st(s,e,t){const n=t*2+1;return(e+t)*n+(s+t)}function Ai(s){return Math.max(0,Math.min(1,s))}function hc(s,e,t,n){const i=s[st(e,t,n)];let r=0;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)o===0&&a===0||Math.abs(e+o)>n||Math.abs(t+a)>n||(r=Math.max(r,Math.abs(i-s[st(e+o,t+a,n)])));return r}function _o(s,e,t,n,i=0){let r={x:0,z:0},o=-1/0;for(let a=-s+e;a<=s-e;a++)for(let l=-s+e;l<=s-e;l++){if(n&&Math.hypot(a-n.x,l-n.z)<i)continue;const c=t(a,l);c>o&&(o=c,r={x:a,z:l})}return r}function Bl(s,e,t,n){let i=0,r=0;for(let o=e.x-t;o<=e.x+t;o++)for(let a=e.z-t;a<=e.z+t;a++)Math.abs(o)>n||Math.abs(a)>n||(i+=s[st(o,a,n)],r+=1);return r>0?i/r:0}function zd(s,e,t,n,i){const r=s*2+1,o=new Int16Array(r*r),a=new Float32Array(r*r);for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++){const h=Math.hypot(c,u)/Math.max(1,s),d=Math.abs(i(e+101,Math.floor(c*.4),Math.floor(u*.4))-.5)*3.2,f=i(e+211,c,u)*1.8,m=Math.round(t+d+f-Math.max(0,h-.72)*5.5);o[st(c,u,s)]=m}for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++){const h=st(c,u,s),d=hc(o,c,u,s);a[h]=o[h]*.18+Math.max(0,1-d/5)*2.6-Uy(c,u,s)*1.4}const l=_o(s,Math.max(4,Math.floor(s*.28)),(c,u)=>a[st(c,u,s)]);return{height:o,suitability:a,center:l}}function Uy(s,e,t){return Math.max(0,Math.hypot(s,e)/Math.max(1,t)-.35)}function ph(s,e,t){const n=[];e&&n.push(0);const i=-s+3,r=s-3,o=Math.max(4,Math.round(s/6));let a=i;for(;a<=r;){const l=Math.min(r,a+8);let c=a,u=1/0;for(let h=a;h<=l;h++){if(n.some(m=>Math.abs(m-h)<6))continue;const d=e?Math.abs(h)*.03:Math.abs(h)*.02,f=t(h)+d;f<u&&(u=f,c=h)}n.push(c),a=c+Math.max(6,Math.round((r-i)/o))}return n.push(i),n.push(r),[...new Set(n)].sort((l,c)=>l-c)}function mh(s,e,t,n){let i=0;for(let r=-e;r<=e;r++)i+=s[st(n?t:r,n?r:t,e)];return i}function Ny(s,e,t,n){const i=`${s.x},${s.z}`,r=`${e.x},${e.z}`,o=[s],a=new Map,l=new Map([[i,0]]);for(;o.length>0;){o.sort((f,m)=>{const _=`${f.x},${f.z}`,p=`${m.x},${m.z}`,g=(l.get(_)??1/0)+Math.abs(f.x-e.x)+Math.abs(f.z-e.z),y=(l.get(p)??1/0)+Math.abs(m.x-e.x)+Math.abs(m.z-e.z);return g-y});const h=o.shift();if(!h)break;const d=`${h.x},${h.z}`;if(d===r)break;for(const[f,m]of[[1,0],[-1,0],[0,1],[0,-1]]){const _={x:h.x+f,z:h.z+m};if(Math.abs(_.x)>t||Math.abs(_.z)>t)continue;const p=`${_.x},${_.z}`,g=n[st(_.x,_.z,t)],y=(l.get(d)??1/0)+g;y>=(l.get(p)??1/0)||(l.set(p,y),a.set(p,d),o.some(E=>E.x===_.x&&E.z===_.z)||o.push(_))}}const c=[];let u=r;for(;u;){const[h,d]=u.split(",").map(Number);if(c.push({x:h,z:d}),u===i)break;u=a.get(u)}return c.reverse()}function ks(s,e,t,n,i=0){const r=s.maxX-s.minX+1,o=s.maxZ-s.minZ+1;if(r<e*2||o<t*2)return[s];if(r>o?!0:o>r?!1:n(i)>.5){const h=s.minX+e-1,d=s.maxX-e;if(h>=d)return[s];const f=h+Math.floor(n(i+1)*Math.max(1,d-h+1));return[...ks({minX:s.minX,maxX:f,minZ:s.minZ,maxZ:s.maxZ},e,t,n,i+11),...ks({minX:f+1,maxX:s.maxX,minZ:s.minZ,maxZ:s.maxZ},e,t,n,i+19)]}const l=s.minZ+t-1,c=s.maxZ-t;if(l>=c)return[s];const u=l+Math.floor(n(i+2)*Math.max(1,c-l+1));return[...ks({minX:s.minX,maxX:s.maxX,minZ:s.minZ,maxZ:u},e,t,n,i+23),...ks({minX:s.minX,maxX:s.maxX,minZ:u+1,maxZ:s.maxZ},e,t,n,i+31)]}function kl(s){return{x:Math.floor((s.minX+s.maxX)/2),z:Math.floor((s.minZ+s.maxZ)/2)}}const xa=[{id:"overworld",label:"Overworld",description:"Minecraft-like overworld with biomes, caves, rivers, trees, and a small village.",defaultSize:48,defaultHeight:12},{id:"arena",label:"Arena",description:"Circular combat bowl with walls, pillars, and a marked center.",defaultSize:18,defaultHeight:4},{id:"floating-island",label:"Floating Island",description:"Suspended landmass with a pond and a small tree.",defaultSize:16,defaultHeight:12},{id:"fortress",label:"Fortress",description:"Square stronghold with towers, gate, and a raised keep.",defaultSize:18,defaultHeight:6},{id:"downtown",label:"Downtown",description:"Dense city blocks with crossroads, towers, and a central plaza.",defaultSize:20,defaultHeight:9},{id:"castle",label:"Castle",description:"Layered castle walls with gatehouse, courtyard, and central keep.",defaultSize:22,defaultHeight:8},{id:"archipelago",label:"Archipelago",description:"Scattered islands, shallow water, and uneven shorelines.",defaultSize:22,defaultHeight:5},{id:"canyon",label:"Canyon",description:"Layered mesas cut by a winding canyon river.",defaultSize:24,defaultHeight:10},{id:"pine-valley",label:"Pine Valley",description:"Rolling hills, pine patches, and a shallow stream bed.",defaultSize:24,defaultHeight:8},{id:"kingdom",label:"Kingdom",description:"Large mixed world with macro terrain, regions, roads, downtown, castle, and forests.",defaultSize:56,defaultHeight:12}];function Fy(s,e){switch(s.theme){case"overworld":return Oy(s,e);case"arena":return By(s,e);case"floating-island":return ky(s,e);case"fortress":return zy(s,e);case"downtown":return Vd(s,e);case"castle":return Hd(s,e);case"archipelago":return Vy(s,e);case"canyon":return Hy(s,e);case"pine-valley":return Gy(s,e);case"kingdom":return Wy(s,e)}}function Oy(s,e){const t={},n=pt(s.size,24,96),i=pt(s.height,7,24),r=n*2+1,o=Math.max(3,Math.round(i*.35)),a=-12,l=Pn(s.seed),c=new Int16Array(r*r),u=new Float32Array(r*r),h=new Float32Array(r*r),d=new Float32Array(r*r),f=new Float32Array(r*r),m=new Float32Array(r*r),_=new Float32Array(r*r),p=new Uint8Array(r*r),g=l()*Math.PI*2,y=l()*Math.PI*2;for(let M=-n;M<=n;M++){const A=Math.sin(M*.041+g)*n*.22+Math.sin(M*.097+y)*n*.08;for(let w=-n;w<=n;w++){const T=st(M,w,n),x=Math.hypot(M,w)/Math.max(1,n),S=Mh(Fe(s.seed+17,Math.floor(M*.065),Math.floor(w*.065))*2-1)-Math.max(0,x-.82)*.65,O=Ai(Fe(s.seed+101,Math.floor(M*.085),Math.floor(w*.085))*.75+Fe(s.seed+181,Math.floor(M*.19),Math.floor(w*.19))*.25),R=Mh((Fe(s.seed+293,Math.floor(M*.11),Math.floor(w*.11))-.5)*2),B=Ai(.18+Fe(s.seed+401,Math.floor(M*.08),Math.floor(w*.08))*.55+Math.max(0,1-Math.abs(w-A)/18)*.24),k=Ai(.62+Fe(s.seed+503,Math.floor(M*.07),Math.floor(w*.07))*.36-Math.max(0,x-.4)*.12),F=Math.abs(w-A),V=Math.pow(Math.max(0,1-Math.abs(R)),1.35),H=Math.max(0,R)*8.5+V*4.5,z=O*8,Q=S<-.22?o-6+S*6:i+S*14,J=Math.max(0,5.5-F)*(.45+(1-O)*.5),le=Math.round(Q+H-z-J);c[T]=le,u[T]=B,h[T]=k,d[T]=S,f[T]=O,m[T]=R,_[T]=F,p[T]=Xy(le,o,S,O,B,k,F)}}for(let M=-n;M<=n;M++)for(let A=-n;A<=n;A++){const w=st(M,A,n),T=c[w],x=p[w];qy(t,M,A,T,o,a,x,e)}Yy(t,n,a,c,o,s.seed);for(let M=-n;M<=n;M++)for(let A=-n;A<=n;A++){const w=st(M,A,n),T=p[w],x=xc(t,M,A);if(!(x<=o||T===fc||T===dc)){if(T===Ws||T===Xs||T===Gs){const S=T===Ws?.042:T===Xs?.036:.012,O=Fe(s.seed+701,M,A);O<S&&jy(t,M,A,x+1,2)?T===Xs?Ao(t,{x:M,y:x+1,z:A},4+Math.floor(Fe(s.seed+733,M,A)*4),e.wood,e.leaves):$y(t,{x:M,y:x+1,z:A},4+Math.floor(Fe(s.seed+727,M,A)*3),e.wood,e.leaves):T===Gs&&O>.93&&j(t,{x:M,y:x+1,z:A},e.leaves)}T===_c&&Fe(s.seed+809,M,A)>.958&&Ky(t,{x:M,y:x+1,z:A},1+Math.floor(Fe(s.seed+877,M,A)*2),e.stone,e.accent),(T===pc||T===mc)&&Fe(s.seed+919,M,A)>.972&&j(t,{x:M,y:x+1,z:A},e.wood)}}const E=_o(n,Math.max(10,Math.floor(n*.22)),(M,A)=>{const w=st(M,A,n),T=p[w];return T!==Gs&&T!==Ws?-1/0:2.8-hc(c,M,A,n)*1.2+Math.max(0,1-_[w]/18)*.7+f[w]*.5+d[w]*.2});return Zy(t,E,Math.max(o+1,Math.round(Bl(c,E,3,n))),e,s.seed),{blocks:t,bounds:{min:{x:-n,y:a,z:-n},max:{x:n,y:i+28,z:n}}}}function By(s,e){const t={},n=pt(s.size,8,40),i=pt(s.height,3,10),r=Pn(s.seed),o=Math.max(2,Math.floor(n*.18)),a=Math.floor(r()*4);for(let c=-n-3;c<=n+3;c++)for(let u=-n-3;u<=n+3;u++){const h=Math.hypot(c,u),d=(Fe(s.seed,c,u)-.5)*1.8,f=-Math.max(0,Math.round((1-Math.min(1,h/(n*.74)))*o));if(h<=n+d){for(let _=-2;_<f;_++)j(t,{x:c,y:_,z:u},e.stone);j(t,{x:c,y:f-1,z:u},e.stone),j(t,{x:c,y:f,z:u},h<n*.68?e.sand:e.stone)}else h<=n+3+d*.5&&r()>.42&&j(t,{x:c,y:-1,z:u},e.grass);const m=a===0&&u>=n-1&&Math.abs(c)<=2||a===1&&c>=n-1&&Math.abs(u)<=2||a===2&&u<=-n+1&&Math.abs(c)<=2||a===3&&c<=-n+1&&Math.abs(u)<=2;if(h>=n-1.4&&h<=n+.8+d*.25&&!m)for(let _=1;_<=i;_++){const p=_===i?e.accent:e.wall;j(t,{x:c,y:_,z:u},p)}(Math.abs(c)<=1||Math.abs(u)<=1)&&h<n-2&&j(t,{x:c,y:f,z:u},e.accent),h<n*.2&&j(t,{x:c,y:1,z:u},e.accent)}const l=Math.floor(n*.55);for(const[c,u]of[[-l,-l],[-l,l],[l,-l],[l,l]])li(t,{x:c,y:1,z:u},i+2,e.wall,e.accent);return{blocks:t,bounds:{min:{x:-n-3,y:-2,z:-n-3},max:{x:n+3,y:i+2,z:n+3}}}}function ky(s,e){const t={},n=pt(s.size,10,36),i=pt(s.height,6,24),r=Math.max(5,Math.floor(n*.45)),o=Pn(s.seed),a=new Map;for(let f=-n;f<=n;f++)for(let m=-n;m<=n;m++){const _=Math.hypot(f/n,m/n);if(_>1.02)continue;const p=(Fe(s.seed+41,f,m)-.5)*1.8+(Fe(s.seed+83,f*2,m*2)-.5)*.8,g=Math.round(i+r-1-_*2.8+p),y=Math.max(4,Math.round((1.08-_)*r*1.75+Fe(s.seed+149,f,m)*3)),E=g-y;a.set(`${f},${m}`,g);for(let M=E;M<=g;M++){const A=g-M,w=A===0?e.grass:A<=2?e.wall:e.stone;j(t,{x:f,y:M,z:m},w)}}const l=Math.max(2,Math.floor(n*.16));for(let f=-l;f<=l;f++)for(let m=-l;m<=l;m++){if(f*f+m*m>l*l)continue;const _=a.get(`${f},${m}`)??i+r-1;j(t,{x:f,y:_,z:m},e.water)}const c=Math.max(4,Math.floor(n*.28)),u={x:-Math.floor(n*.28),y:(a.get(`${-Math.floor(n*.28)},${Math.floor(n*.12)}`)??i+r-1)+1,z:Math.floor(n*.12)};for(let f=0;f<c;f++)j(t,{x:u.x,y:u.y+f,z:u.z},e.wood);const h={x:u.x,y:u.y+c,z:u.z};for(let f=-3;f<=3;f++)for(let m=-2;m<=2;m++)for(let _=-3;_<=3;_++)f*f+m*m*1.4+_*_>9||j(t,{x:h.x+f,y:h.y+m,z:h.z+_},e.leaves);const d=2+Math.floor(o()*3);for(let f=0;f<d;f++){const m=Math.round((o()*2-1)*n*.68),_=Math.round((o()*2-1)*n*.68),p=(a.get(`${m},${_}`)??i)-Math.max(5,Math.floor(r*.8)),g=3+Math.floor(o()*4);for(let y=0;y<g;y++)j(t,{x:m,y:p-y,z:_},y===g-1?e.accent:e.wall)}return{blocks:t,bounds:{min:{x:-n,y:i-r,z:-n},max:{x:n,y:i+r+c+2,z:n}}}}function zy(s,e){const t={},n=pt(s.size,10,40),i=pt(s.height,4,12),r=Pn(s.seed),o=Math.max(4,Math.floor(n*.35)),a=2,l=n-4,c=Math.floor(r()*4),u=zd(n+2,s.seed,0,!0,Fe),h={x:pt(u.center.x,-2,2),z:pt(u.center.z,-2,2)};for(let d=-n-2;d<=n+2;d++)for(let f=-n-2;f<=n+2;f++){const m=d+h.x,_=f+h.z,p=st(m,_,n+2),g=Math.max(0,u.height[p]),y=Math.abs(d)<=n&&Math.abs(f)<=n;for(let A=-1;A<g;A++)j(t,{x:m,y:A,z:_},e.stone);y?j(t,{x:m,y:g,z:_},Math.abs(d)<=l&&Math.abs(f)<=l?Math.max(Math.abs(d),Math.abs(f))<l*.4?e.sand:e.grass:e.wall):Math.abs(d)<=n+2&&Math.abs(f)<=n+2&&j(t,{x:m,y:g,z:_},e.stone);const E=Math.abs(d)===n||Math.abs(f)===n,M=zl(c,n,d,f,2);if(E&&!M)for(let A=1;A<=i;A++)j(t,{x:m,y:g+A,z:_},A===i?e.accent:e.wall)}for(const[d,f]of[[-n,-n],[-n,n],[n,-n],[n,n]])for(let m=-a;m<=a;m++)for(let _=-a;_<=a;_++)m*m+_*_>(a+.4)*(a+.4)||li(t,{x:h.x+d+m,y:1+Math.max(0,u.height[st(h.x+d+m,h.z+f+_,n+2)]),z:h.z+f+_},i+3,e.wall,e.accent);for(let d=-o;d<=o;d++)for(let f=-o;f<=o;f++){const m=h.x+d,_=h.z+f,p=1+Math.max(0,u.height[st(m,_,n+2)]);if(j(t,{x:m,y:p,z:_},e.stone),Math.abs(d)===o||Math.abs(f)===o)for(let y=2;y<=i+1;y++)j(t,{x:m,y:p+y-1,z:_},y===i+1?e.accent:e.wall)}return Vl(t,h,c,n,2,3),sM(t,h,l,c,e),oM(t,h,c,n,e),{blocks:t,bounds:{min:{x:-n-2,y:-1,z:-n-2},max:{x:n+2,y:i+3,z:n+2}}}}function Vd(s,e){const t={},n=pt(s.size,12,42),i=pt(s.height,5,18),r=Pn(s.seed),o=1+Math.floor(r()*2),a=o+1,l=n*2+1,c=new Float32Array(l*l);for(let _=-n;_<=n;_++)for(let p=-n;p<=n;p++){const g=Math.hypot(_,p)/n,y=Math.abs(_)*.02+Math.abs(p)*.02,E=Math.abs(Fe(s.seed+201,Math.floor(_*.28),Math.floor(p*.28))-.5)*1.2,M=Fe(s.seed+71,_,p)*.8;c[st(_,p,n)]=1+y+E+M+Math.max(0,g-.75)*3.2}const u=ph(n,!0,_=>mh(c,n,_,!0)),h=ph(n,!1,_=>mh(c,n,_,!1)),d=u[Math.floor(u.length/2)]??0,f=h[Math.floor(h.length/2)]??0;for(let _=-n;_<=n;_++)for(let p=-n;p<=n;p++)j(t,{x:_,y:-1,z:p},e.stone),j(t,{x:_,y:0,z:p},e.sand);for(const _ of u)nr(t,{x:_,z:-n},{x:_,z:n},_===d?a:o,_===d?e.accent:e.wall,e.stone);for(const _ of h)nr(t,{x:-n,z:_},{x:n,z:_},_===f?a:o,_===f?e.accent:e.wall,e.stone);const m=fM(d,f,u,h,r);for(const[_,p]of m){const g=Ny(_,p,n,c);pM(t,g,o,e.wall,e.stone)}for(const _ of u)for(const p of h){const g=(_===d||p===f)&&r()>.45?2+Math.floor(r()*2):1;for(let y=-g;y<=g;y++)for(let E=-g;E<=g;E++)Math.abs(y)+Math.abs(E)>g+1||j(t,{x:_+y,y:0,z:p+E},e.accent)}for(let _=0;_<u.length-1;_++)for(let p=0;p<h.length-1;p++){const g=u[_]===d?a:o,y=u[_+1]===d?a:o,E=h[p]===f?a:o,M=h[p+1]===f?a:o,A=u[_]+g+2,w=u[_+1]-y-2,T=h[p]+E+2,x=h[p+1]-M-2;if(w-A<4||x-T<4)continue;const S={minX:A,maxX:w,minZ:T,maxZ:x},O=kl(S),R=uM(O,d,f,s.seed,m),B=R==="civic"?8:R==="market"?5:4,k=ks(S,B,B,F=>Fe(s.seed+1403+F,O.x,O.z));for(const F of k){if(hM(t,F,R,e),R==="green"&&F.maxX-F.minX>4&&F.maxZ-F.minZ>4){const V=kl(F);Ao(t,{x:V.x,y:1,z:V.z},4+Math.floor(r()*3),e.wood,e.leaves);continue}dM(t,F,R,i,e,r,u,h)}}return{blocks:t,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+2,z:n}}}}function Hd(s,e){const t={},n=pt(s.size,14,44),i=pt(s.height,5,16),r=Pn(s.seed),o=Math.max(6,n-(4+Math.floor(r()*4))),a=Math.max(4,Math.floor(n*(.22+r()*.14))),l=n+2+Math.floor(r()*3),c=Math.floor(r()*4),u=Math.max(o+2,n-3),h=zd(l,s.seed+57,0,!0,Fe),d={x:pt(h.center.x,-2,2),z:pt(h.center.z,-2,2)};for(let f=-l;f<=l;f++)for(let m=-l;m<=l;m++){const _=f+d.x,p=m+d.z,g=Math.max(0,h.height[st(_,p,l)]);if(j(t,{x:_,y:-2,z:p},e.stone),Math.abs(f)<=l&&Math.abs(m)<=l&&j(t,{x:_,y:-1,z:p},Math.abs(f)===l||Math.abs(m)===l?e.water:e.stone),Math.abs(f)<=n&&Math.abs(m)<=n){const y=Math.abs(f)<=o&&Math.abs(m)<=o,E=Math.abs(f)<=u&&Math.abs(m)<=u;for(let M=0;M<g;M++)j(t,{x:_,y:M,z:p},e.stone);j(t,{x:_,y:g,z:p},y?e.grass:E?e.sand:e.wall)}}for(let f=-n;f<=n;f++)for(let m=-n;m<=n;m++){const _=Math.abs(f)===n||Math.abs(m)===n,p=Math.abs(f)===o||Math.abs(m)===o,g=zl(c,n,f,m,2),y=f+d.x,E=m+d.z,M=Math.max(0,h.height[st(y,E,l)]);if(_&&!g)for(let A=1;A<=i;A++)j(t,{x:y,y:M+A,z:E},A===i?e.accent:e.wall);if(p&&!zl(c,o,f,m,1))for(let A=1;A<=i-1;A++)j(t,{x:y,y:M+A,z:E},A===i-1?e.accent:e.wall)}for(const[f,m]of[[-n,-n],[-n,n],[n,-n],[n,n],[-o,-o],[-o,o],[o,-o],[o,o]])for(let _=-1;_<=1;_++)for(let p=-1;p<=1;p++){const g=d.x+f+_,y=d.z+m+p,E=1+Math.max(0,h.height[st(g,y,l)]);li(t,{x:g,y:E,z:y},i+3,e.wall,e.accent)}for(let f=-a;f<=a;f++)for(let m=-a;m<=a;m++){const _=d.x+f,p=d.z+m,g=1+Math.max(0,h.height[st(_,p,l)]);j(t,{x:_,y:g,z:p},e.stone);for(let y=2;y<=i+3;y++)!(Math.abs(f)===a||Math.abs(m)===a)&&y!==i+3||j(t,{x:_,y:g+y-1,z:p},y===i+3?e.accent:e.wall)}return cM(t,d,c,o,l,e),Vl(t,d,c,n,2,3),Vl(t,d,c,o,1,3),lM(t,d,o,a,c,e),{blocks:t,bounds:{min:{x:-l,y:-2,z:-l},max:{x:l,y:i+3,z:l}}}}function Vy(s,e){const t={},n=pt(s.size,14,44),i=pt(s.height,3,10),r=Pn(s.seed),o=4+Math.floor(r()*4),a=Array.from({length:o},()=>({x:Math.round((r()*2-1)*n*.72),z:Math.round((r()*2-1)*n*.72),radius:4+Math.floor(r()*Math.max(4,n*.18)),height:i+Math.floor(r()*3)}));for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){j(t,{x:l,y:-2,z:c},e.stone),j(t,{x:l,y:-1,z:c},e.water);let u=0,h=0,d=0;for(const _ of a){const g=1-Math.hypot(l-_.x,c-_.z)/_.radius;d+=Math.max(0,g),!(g<=u)&&(u=g,h=_.height)}if(u<=0)continue;const f=Fe(s.seed+211,Math.floor(l*.5),Math.floor(c*.5)),m=Math.max(1,Math.round(u*h+Math.max(0,d-1.2)+f*1.4));for(let _=0;_<m;_++){const p=_===m-1?u>.74?e.grass:e.sand:_>=m-2?e.wall:e.stone;j(t,{x:l,y:_,z:c},p)}u<.38&&d>.7&&j(t,{x:l,y:0,z:c},e.sand),u>.72&&Fe(s.seed*3+17,l,c)>.78&&eM(t,{x:l,y:m,z:c},3+Math.floor(r()*2),e.wood,e.leaves)}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+5,z:n}}}}function Hy(s,e){const t={},n=pt(s.size,16,48),i=pt(s.height,6,18),r=s.seed*.0013;for(let o=-n;o<=n;o++){const a=Math.sin(o*.18+r)*n*.28+Math.sin(o*.07-r*1.7)*n*.14;for(let l=-n;l<=n;l++){const c=Math.abs(l-a),u=Fe(s.seed+91,o,l)*2.2+Fe(s.seed+313,o*2,l*2)*1.2,h=Math.abs(Fe(s.seed+517,Math.floor(o*.33),Math.floor(l*.33))-.5)*3.4,d=Math.max(2,Math.round(i+u+h)),f=Math.max(0,Math.round((8-c)*.9)),m=d-f;for(let _=-2;_<=m;_++){let p=e.stone;_===m&&c<2.5?p=e.water:_===m?p=m>i+1?e.sand:e.accent:_>=m-1?p=e.wall:(m-_)%4===0&&c>4&&(p=e.accent),j(t,{x:o,y:_,z:l},p)}c>8&&m>i+4&&Fe(s.seed+887,o,l)>.91&&li(t,{x:o,y:m+1,z:l},2+Math.round(Fe(s.seed+991,o,l)*3),e.wall,e.accent)}}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+4,z:n}}}}function Gy(s,e){const t={},n=pt(s.size,16,48),i=pt(s.height,5,16),r=Pn(s.seed);for(let o=-n;o<=n;o++){const a=Math.sin(o*.15+s.seed*.0021)*n*.18,l=Math.sin(o*.09-s.seed*.0014)*n*.08+n*.22;for(let c=-n;c<=n;c++){const u=Fe(s.seed+19,o,c)*2.8+Fe(s.seed+211,o*2,c*2)*1.3,h=Math.round(i*.55+u),d=Math.max(0,Math.round(4-Math.abs(c-a)))+Math.max(0,Math.round(2-Math.abs(c-l))),f=Math.max(1,h-d),m=Fe(s.seed+433,Math.floor(o*.4),Math.floor(c*.4));for(let _=-1;_<=f;_++){const g=_===f?Math.abs(c-a)<1.6||Math.abs(c-l)<1.1?e.water:m>.78?e.sand:e.grass:_>=f-2?e.wall:e.stone;j(t,{x:o,y:_,z:c},g)}if(f>=2&&Math.abs(c-a)>3){const _=.02+Fe(s.seed+701,o,c)*.06+Math.max(0,m-.7)*.04;r()<_&&Ao(t,{x:o,y:f+1,z:c},4+Math.floor(r()*4),e.wood,e.leaves)}}}return{blocks:t,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+8,z:n}}}}function Wy(s,e){const t={},n=pt(s.size,28,96),i=pt(s.height,8,24),r=Pn(s.seed),o=Math.max(18,Math.round(n*.38)),a=Math.max(20,Math.round(n*.34)),l=n*2+1,c=new Int16Array(l*l),u=new Float32Array(l*l),h=new Float32Array(l*l),d=new Float32Array(l*l),f=new Float32Array(l*l),m=r()*Math.PI*2,_=r()*Math.PI*2;for(let T=-n;T<=n;T++){const x=Math.sin(T*.045+m)*n*.24+Math.sin(T*.11+_)*n*.07;for(let S=-n;S<=n;S++){const O=Math.hypot(T,S)/n,R=(Fe(s.seed+13,Math.floor(T*.18),Math.floor(S*.18))-.5)*10.5,B=Fe(s.seed+73,T,S)*3.1+Fe(s.seed+193,T*2,S*2)*1.9,k=Math.pow(Math.abs(Fe(s.seed+311,T,S)-.5)*2,1.35)*8.4,F=Math.max(0,O-.74)*12,V=Math.abs(S-x),H=Math.max(0,8.4-V)*1.05,z=Math.max(-2,Math.round(i+R+B+k-F-H)),Q=Ai(.26+Fe(s.seed+401,Math.floor(T*.33),Math.floor(S*.33))*.28+Math.max(0,1-V/14)*.48-Math.max(0,O-.68)*.25),J=Ai(.58-z/Math.max(10,i+12)*.28+Fe(s.seed+557,Math.floor(T*.26),Math.floor(S*.26))*.24);c[st(T,S,n)]=z,u[st(T,S,n)]=Q,h[st(T,S,n)]=J;for(let le=-2;le<=z;le++){let fe=e.stone;le===z&&z<=0?fe=e.water:le===z?fe=Q>.58?e.grass:J>.66?e.sand:e.grass:le>=z-2&&(fe=Q>.58?e.wall:e.stone),j(t,{x:T,y:le,z:S},fe)}}}for(let T=-n;T<=n;T++)for(let x=-n;x<=n;x++){const S=st(T,x,n),O=hc(c,T,x,n);d[S]=O;const R=xh(T,x,n,m,_);f[S]=Ai(.62-Math.min(1,O/6)*.46-Math.max(0,(c[S]-i-3)/18)*.24+(1-Math.min(1,R/28))*.2+(1-Math.min(1,Math.hypot(T,x)/n))*.12)}const p=_o(n,Math.max(10,Math.floor(o*.42)),(T,x)=>{const S=st(T,x,n);return f[S]+u[S]*.08}),g=_o(n,Math.max(10,Math.floor(a*.38)),(T,x)=>{const S=st(T,x,n),O=Math.hypot(T-p.x,x-p.z),R=Math.abs(O-n*.34);return Ai(.18+Math.min(1,(c[S]-i+4)/16)*.42+Math.max(0,1-d[S]/5.2)*.26+Math.max(0,1-R/(n*.22))*.18-Math.max(0,u[S]-.72)*.18)},p,Math.max(18,Math.floor(n*.28))),y=Math.max(1,Math.round(Bl(c,p,5,n))),E=Math.max(y+3,Math.round(Bl(c,g,5,n))+2);vh(t,p,o+6,y,e.stone,e.sand),vh(t,g,a+8,E,e.stone,e.grass);const M=Vd({seed:s.seed*17+5,size:o,height:Math.max(8,Math.round(i*.8))},e);Ii(t,M.blocks,{x:p.x,y,z:p.z});const A=Hd({seed:s.seed*29+7,size:a,height:Math.max(7,Math.round(i*.75))},e);Ii(t,A.blocks,{x:g.x,y:E,z:g.z});const w=mM(p,g,n,d,u,c);nr(t,p,w,1,e.accent,e.stone),nr(t,w,g,1,e.accent,e.stone);for(let T=-n;T<=n;T++)for(let x=-n;x<=n;x++){const S=Math.hypot(T-p.x,x-p.z)<o*.72,O=Math.hypot(T-g.x,x-g.z)<a*.75,R=Math.min(Hl({x:T,z:x},p,w),Hl({x:T,z:x},w,g))<3.2;if(S||O||R)continue;const B=st(T,x,n),k=c[B];if(k<1)continue;const F=u[B],V=h[B],H=d[B],z=xh(T,x,n,m,_);if(F>.43&&F<.72&&V>.42&&H<2.4&&z<18&&Math.hypot(T-p.x,x-p.z)<o*1.45){gM(t,{x:T,y:k,z:x},e,s.seed);continue}const J=.014+Math.max(0,F-.42)*.08+Fe(s.seed+809,T,x)*.03;F>.5&&H<4.8&&r()<J?Ao(t,{x:T,y:k+1,z:x},4+Math.floor(r()*4),e.wood,e.leaves):k>i+8&&H<3.8&&Fe(s.seed+991,T,x)>.84&&li(t,{x:T,y:k+1,z:x},2+Math.floor(r()*3),e.wall,e.accent)}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+24,z:n}}}}const dc=0,fc=1,pc=2,mc=3,Gs=4,Ws=5,Xs=6,gc=7,_c=8;function Xy(s,e,t,n,i,r,o){return s<=e-4||t<-.42?dc:s<=e||t<-.16?fc:o<2.2&&s<=e+4?mc:s<=e+2?pc:s>=e+14&&n<.4?_c:r>.74&&i<.38?gc:r<.4&&i>.46?Xs:i>.52?Ws:Gs}function qy(s,e,t,n,i,r,o,a){const l=Math.max(n,i);for(let c=r;c<=l;c++){const u=n-c;let h=a.stone;c>n?h=a.water:u===0?h=gh(o,n,i,!0,a):u<=3?h=gh(o,n,i,!1,a):o===gc&&u<=6&&(h=a.sand),j(s,{x:e,y:c,z:t},h)}}function gh(s,e,t,n,i){switch(s){case dc:case fc:return n?i.sand:i.stone;case pc:case mc:return n?i.sand:i.wall;case gc:return i.sand;case Xs:return n?i.accent:i.wall;case _c:return n&&e>t+18?i.accent:i.stone;case Ws:case Gs:default:return n?i.grass:i.wall}}function Yy(s,e,t,n,i,r){for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){const l=n[st(o,a,e)],c=Math.min(l-3,i+18);for(let u=t+2;u<=c;u++){const h=va(r+3001,o*.18,u*.22,a*.18)+va(r+3119,o*.09,u*.11,a*.09)*.7,d=Math.abs(va(r+3251,o*.07,u*.1,a*.07)-.5),f=u<i-6?.96:1.08;(h>f||d<.04)&&j(s,{x:o,y:u,z:a},0)}}}function $y(s,e,t,n,i){for(let o=0;o<t;o++)j(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t;for(let o=-2;o<=2;o++)for(let a=-2;a<=1;a++)for(let l=-2;l<=2;l++)o*o+l*l+a*a*1.5>7.5||j(s,{x:e.x+o,y:r+a,z:e.z+l},i)}function Ky(s,e,t,n,i){for(let r=-t;r<=t;r++)for(let o=0;o<=t;o++)for(let a=-t;a<=t;a++)r*r+o*o*1.3+a*a>(t+.2)*(t+.2)||j(s,{x:e.x+r,y:e.y+o,z:e.z+a},o===t?i:n)}function jy(s,e,t,n,i){for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)for(let a=0;a<=6;a++)if(s[To({x:e+r,y:n+a,z:t+o})])return!1;return!0}function Zy(s,e,t,n,i){const r=Pn(i+4109),o=[{x:e.x-8,z:e.z},{x:e.x+8,z:e.z},{x:e.x,z:e.z-8},{x:e.x,z:e.z+8},e];for(const l of o)nr(s,e,l,1,n.sand,n.wall);const a=[{x:-6,z:-4},{x:6,z:-4},{x:-6,z:4},{x:6,z:4}];for(const l of a)Jy(s,{x:e.x+l.x,y:t,z:e.z+l.z},3+Math.floor(r()*2),n);Qy(s,{x:e.x,y:t,z:e.z},n)}function Jy(s,e,t,n){const i=e.x-t,r=e.x+t,o=e.z-t,a=e.z+t;for(let l=i;l<=r;l++)for(let c=o;c<=a;c++){j(s,{x:l,y:e.y,z:c},n.wall);for(let u=1;u<=3;u++)(l===i||l===r||c===o||c===a)&&j(s,{x:l,y:e.y+u,z:c},n.wood);j(s,{x:l,y:e.y+4,z:c},n.accent)}for(let l=e.y+1;l<=e.y+2;l++)j(s,{x:e.x,y:l,z:o},0)}function Qy(s,e,t){for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)j(s,{x:e.x+n,y:e.y,z:e.z+i},t.wall),j(s,{x:e.x+n,y:e.y-1,z:e.z+i},n===0&&i===0?t.water:t.stone);for(const[n,i]of[[-2,-2],[2,-2],[-2,2],[2,2]])li(s,{x:e.x+n,y:e.y+1,z:e.z+i},3,t.wood,t.wood);for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)(Math.abs(n)===2||Math.abs(i)===2)&&j(s,{x:e.x+n,y:e.y+4,z:e.z+i},t.accent)}function li(s,e,t,n,i){for(let r=0;r<t;r++)j(s,{x:e.x,y:e.y+r,z:e.z},r===t-1?i:n)}function eM(s,e,t,n,i){for(let o=0;o<t;o++)j(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t;for(const[o,a]of[[2,0],[-2,0],[0,2],[0,-2],[1,1],[-1,1],[1,-1],[-1,-1]])j(s,{x:e.x+o,y:r,z:e.z+a},i);j(s,{x:e.x,y:r+1,z:e.z},i)}function Ao(s,e,t,n,i){for(let o=0;o<t;o++)j(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t-1;for(let o=0;o<4;o++){const a=o<2?2:1;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++)Math.abs(l)+Math.abs(c)>a+1||j(s,{x:e.x+l,y:r-o,z:e.z+c},i)}j(s,{x:e.x,y:r+1,z:e.z},i)}function zl(s,e,t,n,i){switch(s){case 0:return n===e&&Math.abs(t)<=i;case 1:return t===e&&Math.abs(n)<=i;case 2:return n===-e&&Math.abs(t)<=i;case 3:return t===-e&&Math.abs(n)<=i;default:return!1}}function tM(s,e,t,n,i){for(let r=t+1;r<=n;r++)for(let o=-1;o<=1;o++)switch(e){case 0:j(s,{x:o,y:-1,z:r},i.stone),j(s,{x:o,y:0,z:r},i.accent);break;case 1:j(s,{x:r,y:-1,z:o},i.stone),j(s,{x:r,y:0,z:o},i.accent);break;case 2:j(s,{x:o,y:-1,z:-r},i.stone),j(s,{x:o,y:0,z:-r},i.accent);break;case 3:j(s,{x:-r,y:-1,z:o},i.stone),j(s,{x:-r,y:0,z:o},i.accent);break}}function nM(s,e,t,n,i){for(let r=1;r<=i;r++)for(let o=-n;o<=n;o++)switch(e){case 0:j(s,{x:o,y:r,z:t},0);break;case 1:j(s,{x:t,y:r,z:o},0);break;case 2:j(s,{x:o,y:r,z:-t},0);break;case 3:j(s,{x:-t,y:r,z:o},0);break}}function iM(s,e,t,n){for(let r=-e;r<=e;r++)j(s,{x:0,y:0,z:r},n.accent),j(s,{x:r,y:0,z:0},n.accent);const i=e+4;for(let r=0;r<=i;r++)switch(t){case 0:j(s,{x:0,y:0,z:r},n.accent);break;case 1:j(s,{x:r,y:0,z:0},n.accent);break;case 2:j(s,{x:0,y:0,z:-r},n.accent);break;case 3:j(s,{x:-r,y:0,z:0},n.accent);break}}function sM(s,e,t,n,i){const r={};iM(r,t,n,i),Ii(s,r,{x:e.x,y:0,z:e.z})}function rM(s,e,t,n){for(let i=t;i<=t+5;i++)for(let r=-2;r<=2;r++)switch(e){case 0:j(s,{x:r,y:-1,z:i},n.stone),j(s,{x:r,y:0,z:i},n.accent);break;case 1:j(s,{x:i,y:-1,z:r},n.stone),j(s,{x:i,y:0,z:r},n.accent);break;case 2:j(s,{x:r,y:-1,z:-i},n.stone),j(s,{x:r,y:0,z:-i},n.accent);break;case 3:j(s,{x:-i,y:-1,z:r},n.stone),j(s,{x:-i,y:0,z:r},n.accent);break}}function oM(s,e,t,n,i){const r={};rM(r,t,n,i),Ii(s,r,{x:e.x,y:0,z:e.z})}function aM(s,e,t,n,i){for(let r=-e+1;r<=e-1;r++)j(s,{x:0,y:0,z:r},i.accent),j(s,{x:r,y:0,z:0},i.accent);for(let r=-t-1;r<=t+1;r++)j(s,{x:r,y:0,z:-t-1},i.accent),j(s,{x:r,y:0,z:t+1},i.accent);for(let r=-t-1;r<=t+1;r++)j(s,{x:-t-1,y:0,z:r},i.accent),j(s,{x:t+1,y:0,z:r},i.accent);for(let r=t+1;r<=e;r++)switch(n){case 0:j(s,{x:0,y:0,z:r},i.accent);break;case 1:j(s,{x:r,y:0,z:0},i.accent);break;case 2:j(s,{x:0,y:0,z:-r},i.accent);break;case 3:j(s,{x:-r,y:0,z:0},i.accent);break}}function lM(s,e,t,n,i,r){const o={};aM(o,t,n,i,r),Ii(s,o,{x:e.x,y:0,z:e.z})}function Vl(s,e,t,n,i,r){const o={};nM(o,t,n,i,r),Ii(s,o,{x:e.x,y:0,z:e.z})}function cM(s,e,t,n,i,r){const o={};tM(o,t,n,i,r),Ii(s,o,{x:e.x,y:0,z:e.z})}function uM(s,e,t,n,i){const r=Math.abs(s.x-e)+Math.abs(s.z-t),o=Math.min(...i.map(([l,c])=>Hl(s,l,c))),a=Fe(n+1701,s.x,s.z);return r<6||o<3.2?"civic":a>.84&&o>5?"green":o<7||a>.46?"market":"residential"}function hM(s,e,t,n){for(let i=e.minX;i<=e.maxX;i++)for(let r=e.minZ;r<=e.maxZ;r++)j(s,{x:i,y:0,z:r},t==="green"?n.grass:t==="market"?n.sand:n.stone)}function dM(s,e,t,n,i,r,o,a){const l=kl(e),c=e.maxX-e.minX+1,u=e.maxZ-e.minZ+1,h=t==="civic"?1:0,d=e.minX+h,f=e.maxX-h,m=e.minZ+h,_=e.maxZ-h;if(f-d<3||_-m<3)return;const p=t==="civic"?n+1:t==="market"?Math.max(4,n-2):Math.max(4,n-3),g=Math.max(4,p+Math.floor(r()*4)-1),y=Math.max(3,g),E=t==="civic"?i.accent:t==="market"?i.stone:i.wall;for(let x=d;x<=f;x++)for(let S=m;S<=_;S++)for(let O=1;O<=y;O++)!(x===d||x===f||S===m||S===_)&&O!==y||j(s,{x,y:O,z:S},O===y?E:i.wall);const M=Math.abs(l.x-_h(l.x,o)),A=Math.abs(l.z-_h(l.z,a));let w=l.x,T=l.z;A<=M?T=m:w=l.x<0?f:d;for(let x=1;x<=2;x++)j(s,{x:w,y:x,z:T},0);(t==="civic"||r()>.58)&&(li(s,{x:d,y:y+1,z:m},2,i.accent,i.accent),li(s,{x:f,y:y+1,z:_},2,i.accent,i.accent)),t==="market"&&c>4&&u>4&&(j(s,{x:l.x,y:1,z:l.z},i.wood),j(s,{x:l.x,y:2,z:l.z},i.leaves))}function _h(s,e){let t=e[0]??0,n=Math.abs(t-s);for(const i of e){const r=Math.abs(i-s);r<n&&(n=r,t=i)}return t}function fM(s,e,t,n,i){const r=[],o=t[Math.max(0,Math.floor(t.length*.25))]??s,a=t[Math.min(t.length-1,Math.floor(t.length*.75))]??s,l=n[Math.max(0,Math.floor(n.length*.25))]??e,c=n[Math.min(n.length-1,Math.floor(n.length*.75))]??e;return r.push([{x:o,z:e},{x:s,z:l}]),r.push([{x:s,z:c},{x:a,z:e}]),i()>.45&&r.push([{x:o,z:l},{x:a,z:c}]),i()>.55&&r.push([{x:o,z:c},{x:a,z:l}]),r}function pM(s,e,t,n,i){for(const r of e){const o=Math.max(0,xc(s,r.x,r.z));for(let a=-t;a<=t;a++)for(let l=-t;l<=t;l++){const c=r.x+a,u=r.z+l;for(let h=-2;h<o;h++)j(s,{x:c,y:h,z:u},i);j(s,{x:c,y:o,z:u},n),vc(s,c,u,o+1,o+8)}}}function xh(s,e,t,n,i){const r=Math.sin(s*.045+n)*t*.24+Math.sin(s*.11+i)*t*.07;return Math.abs(e-r)}function mM(s,e,t,n,i,r){const o={x:Math.round((s.x+e.x)*.5),z:Math.round((s.z+e.z)*.5)};let a=o,l=1/0;for(let c=o.x-12;c<=o.x+12;c++)for(let u=o.z-12;u<=o.z+12;u++){if(Math.abs(c)>t||Math.abs(u)>t)continue;const h=st(c,u,t),d=n[h]*1.8+Math.max(0,i[h]-.78)*6+Math.max(0,-r[h])*2.4+Math.abs(c-o.x)*.06+Math.abs(u-o.z)*.06;d<l&&(l=d,a={x:c,z:u})}return a}function gM(s,e,t,n){const i=Fe(n+1221,e.x,e.z),r=i>.58?t.sand:t.grass;j(s,e,r),i>.8?j(s,{x:e.x,y:e.y+1,z:e.z},t.wood):i<.16&&j(s,{x:e.x,y:e.y+1,z:e.z},t.leaves)}function vh(s,e,t,n,i,r){for(let o=e.x-t;o<=e.x+t;o++)for(let a=e.z-t;a<=e.z+t;a++)if(!(Math.hypot(o-e.x,a-e.z)>t)){for(let l=-2;l<n;l++)j(s,{x:o,y:l,z:a},i);j(s,{x:o,y:n,z:a},r),vc(s,o,a,n+1,n+30)}}function nr(s,e,t,n,i,r){const o=Math.max(Math.abs(t.x-e.x),Math.abs(t.z-e.z));for(let a=0;a<=o;a++){const l=o===0?0:a/o,c=Math.round(yh(e.x,t.x,l)),u=Math.round(yh(e.z,t.z,l)),h=Math.max(0,xc(s,c,u));for(let d=-n;d<=n;d++)for(let f=-n;f<=n;f++){const m=c+d,_=u+f;for(let p=-2;p<h;p++)j(s,{x:m,y:p,z:_},r);j(s,{x:m,y:h,z:_},i),vc(s,m,_,h+1,h+8)}}}function Ii(s,e,t){for(const[n,i]of Object.entries(e)){const r=_M(n);j(s,{x:r.x+t.x,y:r.y+t.y,z:r.z+t.z},i)}}function xc(s,e,t){for(let n=96;n>=-2;n--)if(s[To({x:e,y:n,z:t})])return n;return-2}function vc(s,e,t,n,i){for(let r=n;r<=i;r++)j(s,{x:e,y:r,z:t},0)}function Hl(s,e,t){const n=t.x-e.x,i=t.z-e.z,r=n*n+i*i;if(r===0)return Math.hypot(s.x-e.x,s.z-e.z);const o=Math.max(0,Math.min(1,((s.x-e.x)*n+(s.z-e.z)*i)/r)),a=e.x+n*o,l=e.z+i*o;return Math.hypot(s.x-a,s.z-l)}function yh(s,e,t){return s+(e-s)*t}function _M(s){const e=s.indexOf(","),t=s.indexOf(",",e+1);return{x:Number(s.slice(0,e)),y:Number(s.slice(e+1,t)),z:Number(s.slice(t+1))}}function j(s,e,t){const n=To(e);if(t===0){delete s[n];return}s[n]=t}function pt(s,e,t){return Math.max(e,Math.min(t,Math.round(s)))}function Mh(s){return Math.max(-1,Math.min(1,s))}function Pn(s){let e=s>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Fe(s,e,t){const n=Math.sin(e*127.1+t*311.7+s*1e-4)*43758.5453123;return n-Math.floor(n)}function va(s,e,t,n){const i=Math.sin(e*127.1+t*269.5+n*311.7+s*1e-4)*43758.5453123;return i-Math.floor(i)}class yc{constructor(e,t){N(this,"_texture");N(this,"_uvByUri",new Map);this._texture=e,this._uvByUri=t}get texture(){return this._texture}toSnapshot(){return Object.fromEntries(this._uvByUri.entries())}getFaceUvs(e,t){const n=this._uvByUri.get(e.textureUris[t]);if(!n)throw new Error(`TextureAtlas: Missing atlas entry for ${e.textureUris[t]}`);return n}static async create(e){const t=new Set;for(const h of e)Object.values(h.textureUris).forEach(d=>t.add(d));const n=await Promise.all([...t].map(async h=>[h,await xM(h)])),i=16,r=Math.max(1,Math.ceil(Math.sqrt(n.length))),o=Math.max(1,Math.ceil(n.length/r)),a=document.createElement("canvas");a.width=r*i,a.height=o*i;const l=a.getContext("2d");if(!l)throw new Error("TextureAtlas: Failed to create 2d context.");l.imageSmoothingEnabled=!1;const c=new Map;n.forEach(([h,d],f)=>{const m=f%r,_=Math.floor(f/r),p=m*i,g=_*i;l.drawImage(d,p,g,i,i);const y=vM(d,i);c.set(h,{averageRGB:y.averageRGB,isTransparent:y.isTransparent,needsAlphaTest:y.needsAlphaTest,transparencyRatio:y.transparencyRatio,u0:p/a.width,v0:1-(g+i)/a.height,u1:(p+i)/a.width,v1:1-g/a.height})});const u=new Op(a);return u.colorSpace=vt,u.magFilter=yt,u.minFilter=yt,u.generateMipmaps=!1,u.needsUpdate=!0,new yc(u,c)}}async function xM(s){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`Failed to load image ${s}`)),n.src=s})}function vM(s,e){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)return{averageRGB:[1,1,1],isTransparent:!1,needsAlphaTest:!1,transparencyRatio:0};n.imageSmoothingEnabled=!1,n.clearRect(0,0,e,e),n.drawImage(s,0,0,e,e);const i=n.getImageData(0,0,e,e).data;let r=0,o=!1,a=0,l=0,c=0,u=0;for(let h=0;h<i.length;h+=4){const d=i[h],f=i[h+1],m=i[h+2],_=i[h+3],p=_/255;l+=d*p,c+=f*p,u+=m*p,a+=p,_<255&&r++,_>0&&_<255&&(o=!0)}return{averageRGB:a>0?[l/(255*a),c/(255*a),u/(255*a)]:[1,1,1],isTransparent:r>0,needsAlphaTest:o,transparencyRatio:r/(e*e)}}const Gd=document.querySelector("#app");if(!Gd)throw new Error("App root not found.");const Vr=new Ve,Zi=new P,Sh=new P,bh=new Se,yM=new Se,MM=new P(0,1,0),Rs=new P,Hr=new P,Eh=new Ue,Th=new Ue,Is=new In,Ji=new P(1,1,1),Gr=new Ve,Ah=new Ue,Wr=new yo,Ls=new an,Sn=document.createElement("input");Sn.type="file";Sn.accept=".json,application/json";Sn.style.display="none";document.body.append(Sn);const SM=256,bM=15,wh=.0025,Ch=Math.PI/2-.1,Hn="color",Rh="tCube",ya="horizonColor",EM="/voxcinder/world-editor/skyboxes/partly-cloudy",TM="/voxcinder/world-editor/maps/boilerplate.json",AM="/voxcinder/",Ih=[new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href],wM="exploreMapSource",CM="mode",RM="soloMode",Ma=new pn(0,0,0,"YXZ"),Xr=new P,qr=new P,IM=50,Lh=1.02,yi=.045,Sa="world-editor-sidebar-sections",Ps="world-editor-autosave",Ph=500,LM="world-editor-db",on="autosaves",Mc="world-meta",Wd="view-state",PM=800,DM=8,UM=8,NM=1,Dh=2,FM=.4,ba=56,OM=220,BM=12,Uh=1,Nh=.8,Fh=.5,Yr="worldEditorInstanceLightLevel",$r="worldEditorInstanceSkyLight",Ds="vWorldEditorInstanceLightLevel",Us="vWorldEditorInstanceSkyLight",Xd=15,kM=Math.ceil((Xd+1)/Ze),Oh="worldEditorStaticEntityMaterialSetup",Bh={ULTRA:{multiplier:2},HIGH:{devicePixelRatioCap:3,multiplier:1},MEDIUM:{devicePixelRatioCap:2,multiplier:1},LOW:{devicePixelRatioCap:1,multiplier:.85},POWER_SAVING:{devicePixelRatioCap:1,multiplier:.5}},Mi={ULTRA:{distance:600,fog:{enabled:!0,far:550,near:320}},HIGH:{distance:300,fog:{enabled:!0,far:300,near:160}},MEDIUM:{distance:150,fog:{enabled:!0,far:150,near:80}},LOW:{distance:75,fog:{enabled:!0,far:75,near:36}},POWER_SAVING:{distance:50,fog:{enabled:!0,far:50,near:16}}};class kh extends Gt{constructor(e){const t=sr.clone(Dt.cube.uniforms);t[Rh].value=e,t[Hn]={value:new Se},super({vertexShader:Dt.cube.vertexShader,fragmentShader:Dt.cube.fragmentShader.replace("void main() {",`
            uniform vec3 ${Hn};
            void main() {
          `).replace("gl_FragColor = texColor;",`
            gl_FragColor = texColor;
            gl_FragColor.rgb *= ${Hn};
          `),uniforms:t,side:Ot,depthWrite:!1,fog:!1})}get color(){return this.uniforms[Hn].value}get map(){return this.uniforms[Rh].value}}class zh extends Gt{constructor(){super({vertexShader:`
        varying vec3 vDirection;

        void main() {
          vDirection = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 ${Hn};
        uniform vec3 ${ya};
        varying vec3 vDirection;

        void main() {
          float horizonMix = smoothstep(-0.25, 0.45, vDirection.y);
          float zenithBoost = smoothstep(0.1, 1.0, vDirection.y);
          vec3 baseColor = mix(${ya}, ${Hn}, horizonMix);
          vec3 finalColor = baseColor * 0.78 + ${Hn} * zenithBoost * 0.1;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,uniforms:{[Hn]:{value:new Se},[ya]:{value:new Se(.42,.5,.6)}},side:Ot,depthWrite:!1,fog:!1})}get color(){return this.uniforms[Hn].value}}var Wh;class zM{constructor(e){N(this,"container");N(this,"viewport");N(this,"renderer");N(this,"camera");N(this,"scene");N(this,"chunkLayer",new Wt);N(this,"entityLayer",new Wt);N(this,"entityAmbientLight");N(this,"buildPlane");N(this,"hoverBox");N(this,"hoverIndicatorRoot",new Wt);N(this,"crosshair");N(this,"mobileMoveStick");N(this,"mobileMoveStickThumb");N(this,"sidebar");N(this,"mobileMenuButton");N(this,"historyControls");N(this,"undoButton");N(this,"redoButton");N(this,"toolbelt");N(this,"toolToggleButton");N(this,"paletteContainer");N(this,"paletteFilterInput");N(this,"entityListContainer");N(this,"entityOptionsInput");N(this,"entityAddButton");N(this,"entitySaveButton");N(this,"entityDeleteButton");N(this,"lightingAmbientInput");N(this,"fogColorInput");N(this,"skyboxIntensityInput");N(this,"resolutionPresetInput");N(this,"viewDistancePresetInput");N(this,"viewDistanceCustomInput");N(this,"templateThemeSelect");N(this,"templateSeedInput");N(this,"templateSizeInput");N(this,"templateHeightInput");N(this,"templateApplyButton");N(this,"debugPanel");N(this,"debugSummaryLine");N(this,"debugMemoryLine");N(this,"debugRenderLine");N(this,"debugSceneLine");N(this,"chunkMesherWorker");N(this,"cubeTextureLoader",new im);N(this,"gltfLoader",new vv);N(this,"chunkBatchRenderer",new ly(this.chunkLayer));N(this,"entityModelCache",new Map);N(this,"entityFallbackObjects",new Map);N(this,"entityModelObjectsByUri",new Map);N(this,"entityRenderObjects",new Set);N(this,"selectedEntityMarker",null);N(this,"world",new dh);N(this,"atlas",null);N(this,"atlasSnapshotCache",null);N(this,"selectedBlockTypeId",((Wh=xi[0])==null?void 0:Wh.id)??1);N(this,"paletteFilter","");N(this,"hoveredPlacement",null);N(this,"hoveredBlock",null);N(this,"lastPointerEvent",null);N(this,"pointerDownEvent",null);N(this,"pointerLocked",!1);N(this,"mobileControlsEnabled",window.matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0);N(this,"mobileMoveTouchId",null);N(this,"mobileLookTouchId",null);N(this,"mobileMoveStart",new Ve);N(this,"mobileMoveCurrent",new Ve);N(this,"mobileLookLast",new Ve);N(this,"mobileMoveInputX",0);N(this,"mobileMoveInputY",0);N(this,"mobileTapCandidates",new Map);N(this,"mobileSidebarOpen",!1);N(this,"debugVisible",!1);N(this,"lastDebugTouchToggleAt",0);N(this,"suppressTouchToolActions",!1);N(this,"fileName","untitled-world-map.json");N(this,"frameCounter",0);N(this,"fps",0);N(this,"lastFpsSampleAt",performance.now());N(this,"nextWorkerRequestId",1);N(this,"nextChunkBuildGeneration",1);N(this,"activeChunkBuildGeneration",0);N(this,"pendingChunkBuildPriorities",new Map);N(this,"pendingWorkerBlockUpdates",new Map);N(this,"chunkBuildWaiters",[]);N(this,"chunkBuildProcessing",!1);N(this,"workerBlockUpdateFlushScheduled",!1);N(this,"consecutiveChunkBuildBatchCount",0);N(this,"inFlightChunkBuildIds",new Set);N(this,"fogColor",new Se(1,1,1));N(this,"skyboxIntensity",1);N(this,"skyboxMesh",null);N(this,"pendingSkyboxTexture",null);N(this,"spectatorPitch",.95);N(this,"spectatorYaw",.75);N(this,"pressedKeys",new Set);N(this,"lightingAmbient",1);N(this,"fogColorHex","#ffffff");N(this,"skyboxUiIntensity",1);N(this,"resolutionPreset","MEDIUM");N(this,"viewDistancePreset","MEDIUM");N(this,"viewDistanceCustomDistance",Mi.MEDIUM.distance);N(this,"currentTool","build");N(this,"undoStack",[]);N(this,"redoStack",[]);N(this,"autosaveDirtyChunkIds",new Set);N(this,"autosaveEntitiesDirty",!1);N(this,"autosaveFullWorldDirty",!0);N(this,"selectedEntityKey",null);N(this,"autosaveTimeoutId",null);N(this,"viewStateAutosaveTimeoutId",null);N(this,"handleResize",()=>{const e=this.viewport.clientWidth,t=this.viewport.clientHeight;this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)});N(this,"handlePointerMove",e=>{if(e.pointerType!=="touch"){if(this.pointerLocked){this.updateSpectatorRotation(e.movementX,e.movementY),this.updateHoverFromScreenCenter();return}this.lastPointerEvent=e,this.mobileControlsEnabled?this.updateHoverFromPointer(e):this.clearHover()}});N(this,"handlePointerDown",e=>{var t,n;if(e.pointerType!=="touch"){if(this.mobileSidebarOpen){const i=e.target;i&&!this.sidebar.contains(i)&&i!==this.mobileMenuButton&&this.setMobileSidebarOpen(!1)}if(!this.pointerLocked&&!this.mobileControlsEnabled){(n=(t=this.renderer.domElement).requestPointerLock)==null||n.call(t),this.pointerDownEvent=null;return}this.lastPointerEvent=e,this.updateHoverFromScreenCenter(),this.pointerDownEvent=e}});N(this,"handlePointerUp",e=>{if(e.pointerType==="touch"||(this.pointerLocked?this.updateHoverFromScreenCenter():(this.lastPointerEvent=e,this.mobileControlsEnabled?this.updateHoverFromPointer(e):this.clearHover()),!this.pointerDownEvent))return;const t=Math.hypot(e.clientX-this.pointerDownEvent.clientX,e.clientY-this.pointerDownEvent.clientY),n=this.pointerDownEvent.button;this.pointerDownEvent=null,!(t>4)&&this.applyCurrentTool(n)});N(this,"handleKeyDown",e=>{const t=Gh(e.code);if(this.pressedKeys.add(t),e.ctrlKey||e.metaKey){if(e.key.toLowerCase()==="z"&&!e.shiftKey){e.preventDefault(),this.undo();return}if(e.key.toLowerCase()==="y"||e.key.toLowerCase()==="z"&&e.shiftKey){e.preventDefault(),this.redo();return}}if(e.key.toLowerCase()==="g"){this.toggleDebugPanel();return}if(e.code==="Digit1"){this.setToolMode("build");return}if(e.code==="Digit2"){this.setToolMode("erase");return}});N(this,"handleKeyUp",e=>{this.pressedKeys.delete(Gh(e.code))});N(this,"handleTouchStart",e=>{if(this.mobileSidebarOpen&&this.setMobileSidebarOpen(!1),e.touches.length!==5){if(!this.mobileControlsEnabled)return;e.preventDefault();const n=this.viewport.clientWidth;for(const i of Array.from(e.changedTouches)){const r=i.clientX<n*FM?"move":"look";this.mobileTapCandidates.set(i.identifier,{zone:r,startX:i.clientX,startY:i.clientY,lastX:i.clientX,lastY:i.clientY,moved:!1,time:performance.now()}),r==="move"&&this.mobileMoveTouchId===null?(this.mobileMoveTouchId=i.identifier,this.mobileMoveStart.set(i.clientX,i.clientY),this.mobileMoveCurrent.copy(this.mobileMoveStart),this.updateMobileMoveStick()):r==="look"&&this.mobileLookTouchId===null&&(this.mobileLookTouchId=i.identifier,this.mobileLookLast.set(i.clientX,i.clientY),this.updateHoverFromClientPosition(i.clientX,i.clientY))}return}const t=performance.now();t-this.lastDebugTouchToggleAt<PM||(this.lastDebugTouchToggleAt=t,this.cancelActiveTouchInteractions(),this.suppressTouchToolActions=!0,e.preventDefault(),e.stopPropagation(),this.toggleDebugPanel())});N(this,"handleTouchMove",e=>{if(this.mobileControlsEnabled){e.preventDefault();for(const t of Array.from(e.changedTouches)){const n=this.mobileTapCandidates.get(t.identifier);n&&(n.lastX=t.clientX,n.lastY=t.clientY,Math.hypot(t.clientX-n.startX,t.clientY-n.startY)>BM&&(n.moved=!0)),t.identifier===this.mobileMoveTouchId?(this.mobileMoveCurrent.set(t.clientX,t.clientY),this.updateMobileMoveStick()):t.identifier===this.mobileLookTouchId&&(this.updateSpectatorRotation(t.clientX-this.mobileLookLast.x,t.clientY-this.mobileLookLast.y),this.mobileLookLast.set(t.clientX,t.clientY),this.updateHoverFromClientPosition(t.clientX,t.clientY))}}});N(this,"handleTouchEnd",e=>{if(this.mobileControlsEnabled){if(e.preventDefault(),this.suppressTouchToolActions){e.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(e.changedTouches);return}this.finishTouchSequence(e.changedTouches)}});N(this,"handleTouchCancel",e=>{if(this.mobileControlsEnabled){if(e.preventDefault(),this.suppressTouchToolActions){e.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(e.changedTouches);return}this.finishTouchSequence(e.changedTouches,!0)}});N(this,"handlePointerLockChange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,this.pointerLocked&&this.updateHoverFromScreenCenter()});N(this,"handleBeforeUnload",()=>{this.flushAutosave(),this.flushViewStateAutosave()});N(this,"handleChunkMesherWorkerMessage",()=>{});N(this,"renderLoop",()=>{requestAnimationFrame(this.renderLoop);const e=this.updateSpectatorCamera(1/60);this.pointerLocked&&e&&this.updateHoverFromScreenCenter(),this.updateSkybox(),this.chunkBatchRenderer.update(1/60),this.updateViewDistanceVisibility(),this.renderer.render(this.scene,this.camera),this.frameCounter++;const t=performance.now();t-this.lastFpsSampleAt>=1e3&&(this.fps=Math.round(this.frameCounter*1e3/(t-this.lastFpsSampleAt)),this.frameCounter=0,this.lastFpsSampleAt=t,this.updateDebugPanel())});this.container=document.createElement("div"),this.container.className="app-shell",this.viewport=document.createElement("div"),this.viewport.className="viewport",this.container.append(this.viewport);const t=document.createElement("div");t.className="overlay",this.container.append(t),this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",t.append(this.crosshair),this.mobileMoveStick=document.createElement("div"),this.mobileMoveStick.className="mobile-move-stick",this.mobileMoveStick.hidden=!0,this.mobileMoveStickThumb=document.createElement("div"),this.mobileMoveStickThumb.className="mobile-move-stick-thumb",this.mobileMoveStick.append(this.mobileMoveStickThumb),t.append(this.mobileMoveStick),this.scene=new Mp,this.scene.add(this.chunkLayer),this.scene.add(this.entityLayer),this.entityAmbientLight=new hm(new Se(16777215),1),this.scene.add(this.entityAmbientLight),this.camera=new zt(55,1,.1,1e3),this.camera.position.set(18,20,18),this.camera.rotation.order="YXZ",this.applySpectatorCameraOrientation(),this.renderer=new _v({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=vt,this.viewport.append(this.renderer.domElement),this.chunkBatchRenderer.setRenderer(this.renderer),this.chunkBatchRenderer.setFogProvider(this.createFogUniformProvider()),this.buildPlane=new Et(new ir(512,512),new Wn({visible:!1,side:en})),this.buildPlane.rotation.x=-Math.PI/2,this.buildPlane.position.y=-.5,this.scene.add(this.buildPlane),this.hoverBox=new io(new _u(new Xn(1.01,1.01,1.01)),new ho({color:"#f5b942",transparent:!0,opacity:.95})),this.hoverBox.renderOrder=1e3,this.hoverBox.visible=!1,this.scene.add(this.hoverBox),this.hoverIndicatorRoot.add(this.createHoverFrameIndicator()),this.hoverIndicatorRoot.renderOrder=1e3,this.hoverIndicatorRoot.visible=!1,this.scene.add(this.hoverIndicatorRoot);const n=document.createElement("div");n.className="topbar",n.innerHTML=`
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
    `,this.toolToggleButton=this.toolbelt.querySelector("[data-tool-toggle]"),this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(this.currentTool)),this.toolToggleButton.title=this.getToolLabel(this.currentTool),t.append(n,i,this.debugPanel,this.historyControls,this.toolbelt),e.append(this.container),this.chunkMesherWorker=new Worker(new URL("/voxcinder/world-editor/assets/chunkMesherWorker-CC_rT4DI.js",import.meta.url),{type:"module"}),this.chunkMesherWorker.addEventListener("message",this.handleChunkMesherWorkerMessage),n.addEventListener("click",r=>{this.handleUiAction(r.target,Sn)}),i.addEventListener("click",r=>{this.handleUiAction(r.target,Sn)}),this.historyControls.addEventListener("click",r=>{this.handleUiAction(r.target,Sn)}),Sn.addEventListener("change",()=>{var o;const r=(o=Sn.files)==null?void 0:o[0];r&&this.importMap(r),Sn.value=""}),this.toolbelt.addEventListener("click",r=>{r.target.closest("[data-tool-toggle]")&&this.toggleToolMode()}),this.templateThemeSelect.addEventListener("change",()=>this.syncTemplateInputsToTheme()),this.templateApplyButton.addEventListener("click",()=>{this.applyThemeTemplate()}),this.entityAddButton.addEventListener("click",()=>{this.addEntityAtHover()}),this.entitySaveButton.addEventListener("click",()=>{this.saveSelectedEntity()}),this.entityDeleteButton.addEventListener("click",()=>{this.deleteSelectedEntity()}),this.resolutionPresetInput.addEventListener("change",()=>this.handleResolutionChange()),this.viewDistancePresetInput.addEventListener("change",()=>this.handleViewDistanceChange()),this.viewDistanceCustomInput.addEventListener("input",()=>this.handleViewDistanceChange()),this.lightingAmbientInput.addEventListener("input",()=>this.handleLightingChange()),this.fogColorInput.addEventListener("input",()=>this.handleLightingChange()),this.skyboxIntensityInput.addEventListener("input",()=>this.handleLightingChange()),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),this.renderer.domElement.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),this.renderer.domElement.addEventListener("touchend",this.handleTouchEnd,{passive:!1}),this.renderer.domElement.addEventListener("touchcancel",this.handleTouchCancel,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("beforeunload",this.handleBeforeUnload),document.addEventListener("pointerlockchange",this.handlePointerLockChange),this.handleResize(),this.loadSkybox(EM),this.populateTemplateThemeOptions(),this.syncResolutionInputs(),this.syncViewDistanceInputs(),this.applyResolutionSettings(),this.applyViewDistanceSettings(),this.applyLightingSettings(),this.initializeWorld(),this.updateDebugPanel(),this.renderLoop()}async initializeWorld(){await this.restoreAutosavedViewState(),await this.restoreAutosavedWorld()||await this.loadDefaultWorldMap()}setMobileSidebarOpen(e,t=!0){this.mobileSidebarOpen!==e&&(this.mobileSidebarOpen=e,this.container.classList.toggle("mobile-sidebar-open",this.mobileSidebarOpen),this.mobileMenuButton.classList.toggle("active",this.mobileSidebarOpen),t&&this.scheduleViewStateAutosave())}handleUiAction(e,t){var i;const n=(i=e.closest("[data-action]"))==null?void 0:i.dataset.action;if(n){if(n==="menu"){this.setMobileSidebarOpen(!this.mobileSidebarOpen);return}n==="new"?this.resetToEmptyMap():n==="reset"?this.resetSavedData():n==="undo"?this.undo():n==="redo"?this.redo():n==="import"?t.click():n==="export"?this.exportMap():n==="explore"&&this.openExploreMode()}}async finishTouchSequence(e,t=!1){for(const n of Array.from(e)){const i=this.mobileTapCandidates.get(n.identifier);if(this.mobileTapCandidates.delete(n.identifier),n.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),n.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null),!i||t)continue;const r=performance.now()-i.time;i.moved||r>OM||(this.updateHoverFromClientPosition(i.lastX,i.lastY),await this.applyCurrentTool(0))}}cancelActiveTouchInteractions(){this.mobileTapCandidates.clear(),this.mobileLookTouchId=null,this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0}cancelEndedTouchControls(e){for(const t of Array.from(e))this.mobileTapCandidates.delete(t.identifier),t.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),t.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null)}updateMobileMoveStick(){if(this.mobileMoveTouchId===null){this.mobileMoveStick.hidden=!0,this.mobileMoveInputX=0,this.mobileMoveInputY=0;return}const e=this.mobileMoveCurrent.x-this.mobileMoveStart.x,t=this.mobileMoveCurrent.y-this.mobileMoveStart.y,n=Math.hypot(e,t),i=Math.min(n,ba),r=n>0?e/n:0,o=n>0?t/n:0,a=r*i,l=o*i;this.mobileMoveInputX=r*(i/ba),this.mobileMoveInputY=o*(i/ba),this.mobileMoveStick.hidden=!1,this.mobileMoveStick.style.left=`${this.mobileMoveStart.x}px`,this.mobileMoveStick.style.top=`${this.mobileMoveStart.y}px`,this.mobileMoveStickThumb.style.transform=`translate(${a}px, ${l}px)`}toggleDebugPanel(){this.debugVisible=!this.debugVisible,this.debugPanel.hidden=!this.debugVisible,this.updateStatus(this.debugVisible?"Debug mode enabled.":"Debug mode disabled."),this.updateDebugPanel()}async resetToEmptyMap(){var e;this.world.load({},xi),this.selectedBlockTypeId=((e=this.world.blockTypes[0])==null?void 0:e.id)??1,this.fileName="untitled-world-map.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus("Started a new empty world map.")}resetViewStateToDefaults(){this.spectatorPitch=.95,this.spectatorYaw=.75,this.camera.position.set(18,20,18),this.applySpectatorCameraOrientation(),this.setMobileSidebarOpen(!1,!1),this.paletteFilter="",this.paletteFilterInput.value="",this.resolutionPreset="MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.viewDistancePreset="MEDIUM",this.viewDistanceCustomDistance=Mi.MEDIUM.distance,this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.lightingAmbient=1,this.fogColorHex="#ffffff",this.skyboxUiIntensity=1,this.syncLightingInputs(),this.applyLightingSettings(),this.setToolMode("build")}async resetSavedData(){window.confirm("Delete saved World Editor data and reset to the default world?")&&(this.autosaveTimeoutId!==null&&(window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=null),this.viewStateAutosaveTimeoutId!==null&&(window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=null),localStorage.removeItem(Ps),await Vh(),this.resetViewStateToDefaults(),await this.loadDefaultWorldMap(),this.updateStatus("Reset saved data and restored the default world."))}async loadDefaultWorldMap(){var e;try{const t=await fetch(TM,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load default map: ${t.status} ${t.statusText}`);const n=await t.json();this.world.load(n,xi),this.selectedBlockTypeId=((e=this.world.blockTypes[0])==null?void 0:e.id)??this.selectedBlockTypeId,this.fileName="boilerplate.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),await this.flushAutosave(),this.updateStatus("Loaded default world map.")}catch(t){console.error(t),await this.resetToEmptyMap(),this.updateStatus(`Default world map load failed: ${t.message}`)}}populateTemplateThemeOptions(){this.templateThemeSelect.replaceChildren();for(const e of xa){const t=document.createElement("option");t.value=e.id,t.textContent=e.label,this.templateThemeSelect.append(t)}this.syncTemplateInputsToTheme()}syncTemplateInputsToTheme(){const e=xa.find(t=>t.id===this.templateThemeSelect.value);e&&(this.templateSizeInput.value=String(e.defaultSize),this.templateHeightInput.value=String(e.defaultHeight))}async importMap(e){var t;try{const n=JSON.parse(await e.text());this.world.load(n,xi),this.selectedBlockTypeId=((t=this.world.blockTypes[0])==null?void 0:t.id)??this.selectedBlockTypeId,this.fileName=e.name,this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Imported ${e.name}.`)}catch(n){console.error(n),this.updateStatus(`Import failed: ${n.message}`)}}exportMap(){const e=this.world.toJson(),t=new Blob([`${JSON.stringify(e,null,2)}
`],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=this.fileName.endsWith(".json")?this.fileName:`${this.fileName}.json`,n.click(),URL.revokeObjectURL(n.href),this.updateStatus(`Exported ${n.download}.`)}async applyThemeTemplate(){const e=this.templateThemeSelect.value||"arena",t=xa.find(l=>l.id===e);if(!t){this.updateStatus(`Unknown template theme "${e}".`);return}const n=this.getCurrentBlockTypeDefinitions(),i=this.resolveTemplateBlockIds(n),r=Fy({theme:e,seed:Number(this.templateSeedInput.value)||0,size:Number(this.templateSizeInput.value)||t.defaultSize,height:Number(this.templateHeightInput.value)||t.defaultHeight},i),o=this.world.toSnapshot();this.world.load({blockTypes:n,blocks:r.blocks},n);const a=this.world.toSnapshot();this.pushSnapshotUndoState(`Generate ${t.label}`,o,a),this.markFullWorldAutosaveDirty(),this.fileName=`generated-${e}.json`,this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Generated ${t.label.toLowerCase()} template with seed ${this.templateSeedInput.value||"0"}.`)}rebuildPalette(){var n;const e=this.sidebar.scrollTop,t=this.paletteContainer.scrollTop;this.paletteContainer.replaceChildren(),this.paletteFilterInput.value=this.paletteFilter;for(const i of this.world.blockTypes){if(this.paletteFilter&&!i.name.toLowerCase().includes(this.paletteFilter))continue;const r=document.createElement("button");r.type="button",r.className="palette-button",i.id===this.selectedBlockTypeId&&r.classList.add("active"),r.innerHTML=`
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
      `,i.addEventListener("click",()=>{this.selectedEntityKey=n,this.entityOptionsInput.value=JSON.stringify(e[n],null,2),this.rebuildEntitiesUi(),this.refreshSelectedEntityMarker()}),this.entityListContainer.append(i)}(!this.selectedEntityKey||!(this.selectedEntityKey in e))&&(this.selectedEntityKey=t[0]??null),this.entityOptionsInput.value=this.selectedEntityKey?JSON.stringify(e[this.selectedEntityKey],null,2):"{}",this.refreshSelectedEntityMarker()}async rebuildAllChunkMeshes(){const e=++this.nextChunkBuildGeneration;this.activeChunkBuildGeneration=e,this.pendingChunkBuildPriorities.clear(),this.chunkBuildWaiters=[],this.inFlightChunkBuildIds.clear(),this.disposeAllChunkMeshes(),this.atlas=await yc.create(this.world.blockTypes),this.atlasSnapshotCache=this.atlas.toSnapshot(),this.chunkBatchRenderer.setAtlas(this.atlas),await this.syncChunkMesherWorkerWorld(),this.rebuildEntityMarkers(),await this.enqueueChunkBuilds(this.world.chunkIds,NM,e),this.lastPointerEvent?this.updateHoverFromPointer(this.lastPointerEvent):this.pointerLocked&&this.updateHoverFromScreenCenter()}waitForNextFrame(){return new Promise(e=>requestAnimationFrame(()=>e()))}createHoverFrameIndicator(){const e=new Wt,t=new Wn({color:"#f5b942",transparent:!0,opacity:.95,depthWrite:!1}),i=Lh/2-yi/2,r=Lh,o=(a,l,c,u,h,d)=>{const f=new Et(new Xn(a,l,c),t.clone());f.renderOrder=1e3,f.position.set(u,h,d),f.matrixAutoUpdate=!1,f.updateMatrix(),e.add(f)};for(const a of[-i,i])for(const l of[-i,i])o(r,yi,yi,0,a,l);for(const a of[-i,i])for(const l of[-i,i])o(yi,r,yi,a,0,l);for(const a of[-i,i])for(const l of[-i,i])o(yi,yi,r,a,l,0);return e}disposeAllChunkMeshes(){this.chunkBatchRenderer.clear()}async rebuildEntityMarkers(){this.disposeSelectedEntityMarker(),this.entityFallbackObjects.clear(),this.entityModelObjectsByUri.clear(),this.entityRenderObjects.clear(),this.entityLayer.clear();const e=Object.entries(this.world.entities),t=new Map;for(const[n,i]of e){const r=jr(n);if(!r)continue;const o=this.getEntityModelUri(i);if(o){const a=this.resolveEntityModelUri(o),l=t.get(a)??[];l.push({key:n,position:r,options:i}),t.set(a,l);continue}this.addFallbackEntityObject({key:n,position:r,options:i})}for(const[n,i]of t)await this.rebuildEntityModelGroup(n,i);this.refreshSelectedEntityMarker()}addFallbackEntityObject(e){const t=new Wt;t.position.set(e.position.x,e.position.y,e.position.z),t.userData.entityKey=e.key,t.userData.entityOptions=e.options,t.userData.visibilityRadius=1,t.add(this.createEntityMarker("#8b5cf6")),this.entityFallbackObjects.set(e.key,t),this.entityRenderObjects.add(t),this.entityLayer.add(t)}async rebuildEntityModelGroup(e,t){if(this.disposeEntityModelGroup(e),t.length===0)return;const n=await this.loadEntityModelTemplate(e);if(!n){for(const r of t)this.addFallbackEntityObject(r);return}const i=[];n.updateMatrixWorld(!0),n.traverse(r=>{if(!(r instanceof Et))return;const o=r.geometry.clone(),a=new Float32Array(t.length),l=new Float32Array(t.length),c=[],u=new Os(o,this.createEntityRenderMaterial(r.material),t.length);u.userData.entityKeys=t.map(h=>h.key),u.userData.entityOptions=t.map(h=>h.options),u.userData.entityPositions=t.map(h=>({...h.position})),u.userData.modelUri=e,u.castShadow=r.castShadow,u.receiveShadow=r.receiveShadow;for(let h=0;h<t.length;h++){const d=t[h],f=this.getEntityGlobalCoordinate(d.position);Eh.compose(new P(d.position.x,d.position.y,d.position.z),ZM(d.options),jM(d.options)),Th.copy(Eh).multiply(r.matrixWorld),u.setMatrixAt(h,Th),a[h]=this.getEntityLightLevel(d.position),l[h]=this.getEntitySkyLight(d.position),c.push(Ye.globalCoordinateToChunkId(f))}o.setAttribute(Yr,new Js(a,1)),o.setAttribute($r,new Js(l,1)),u.instanceMatrix.needsUpdate=!0,u.userData.entityChunkIds=c,u.computeBoundingBox(),u.computeBoundingSphere(),this.entityRenderObjects.add(u),this.entityLayer.add(u),i.push(u)}),this.entityModelObjectsByUri.set(e,i)}disposeEntityModelGroup(e){const t=this.entityModelObjectsByUri.get(e);if(t){for(const n of t)this.disposeEntityRenderObject(n);this.entityModelObjectsByUri.delete(e)}}disposeEntityRenderObject(e){if(this.entityRenderObjects.delete(e),e.parent&&e.parent.remove(e),e instanceof Os){if(e.geometry.dispose(),Array.isArray(e.material))for(const t of e.material)t.dispose();else e.material.dispose();return}if(e instanceof io){if(e.geometry.dispose(),Array.isArray(e.material))for(const t of e.material)t.dispose();else e.material.dispose();return}}async syncEntityMarkersForKeys(e,t){const n=new Set;for(const i of e){const r=t==null?void 0:t[i],o=this.world.entities[i],a=r?this.getEntityModelUri(r):null,l=o?this.getEntityModelUri(o):null;if(a&&n.add(this.resolveEntityModelUri(a)),l&&n.add(this.resolveEntityModelUri(l)),!a){const c=this.entityFallbackObjects.get(i);c&&(this.disposeEntityRenderObject(c),this.entityFallbackObjects.delete(i))}if(!l&&o){const c=jr(i);if(c){const u=this.entityFallbackObjects.get(i);u&&(this.disposeEntityRenderObject(u),this.entityFallbackObjects.delete(i)),this.addFallbackEntityObject({key:i,position:c,options:o})}}}for(const i of n){const r=[];for(const[o,a]of Object.entries(this.world.entities)){const l=this.getEntityModelUri(a);if(!l||this.resolveEntityModelUri(l)!==i)continue;const c=jr(o);c&&r.push({key:o,position:c,options:a})}await this.rebuildEntityModelGroup(i,r)}this.refreshSelectedEntityMarker()}refreshSelectedEntityMarker(){if(this.disposeSelectedEntityMarker(),!this.selectedEntityKey)return;const e=jr(this.selectedEntityKey);if(!e)return;const t=this.createEntityMarker("#ff8a65");t.position.set(e.x,e.y,e.z),t.renderOrder=1001,t.userData.visibilityRadius=1,this.selectedEntityMarker=t,this.entityRenderObjects.add(t),this.entityLayer.add(t)}disposeSelectedEntityMarker(){if(this.selectedEntityMarker){if(this.entityRenderObjects.delete(this.selectedEntityMarker),this.entityLayer.remove(this.selectedEntityMarker),this.selectedEntityMarker.geometry.dispose(),Array.isArray(this.selectedEntityMarker.material))for(const e of this.selectedEntityMarker.material)e.dispose();else this.selectedEntityMarker.material.dispose();this.selectedEntityMarker=null}}createEntityMarker(e){const t=new _u(new Xn(.6,1.2,.6)),n=new ho({color:e,transparent:!0,opacity:.95}),i=new io(t,n);return i.renderOrder=1e3,i}handleLightingChange(){this.lightingAmbient=Number(this.lightingAmbientInput.value),this.fogColorHex=this.fogColorInput.value||"#ffffff",this.skyboxUiIntensity=Number(this.skyboxIntensityInput.value),this.applyLightingSettings(),this.scheduleViewStateAutosave()}handleResolutionChange(){const e=this.resolutionPresetInput.value;this.resolutionPreset=e in Bh?e:"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.scheduleViewStateAutosave()}handleViewDistanceChange(){const e=this.viewDistancePresetInput.value;this.viewDistancePreset=e in Mi||e==="CUSTOM"?e:"HIGH",this.viewDistanceCustomDistance=Math.max(1,Math.round(Number(this.viewDistanceCustomInput.value)||Mi.HIGH.distance)),this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.scheduleViewStateAutosave()}syncLightingInputs(){this.lightingAmbientInput.value=String(this.lightingAmbient),this.fogColorInput.value=this.fogColorHex,this.skyboxIntensityInput.value=String(this.skyboxUiIntensity)}syncResolutionInputs(){this.resolutionPresetInput.value=this.resolutionPreset}getEffectivePixelRatio(e,t){return(t===void 0?window.devicePixelRatio:Math.min(window.devicePixelRatio,t))*e}applyResolutionSettings(){const e=Bh[this.resolutionPreset];this.renderer.setPixelRatio(this.getEffectivePixelRatio(e.multiplier,e.devicePixelRatioCap)),this.handleResize()}syncViewDistanceInputs(){if(this.viewDistancePresetInput.value=this.viewDistancePreset,this.viewDistancePreset==="CUSTOM"){this.viewDistanceCustomInput.value=String(this.viewDistanceCustomDistance),this.viewDistanceCustomInput.disabled=!1;return}this.viewDistanceCustomInput.value=String(Mi[this.viewDistancePreset].distance),this.viewDistanceCustomInput.disabled=!0}getViewDistanceConfig(){if(this.viewDistancePreset!=="CUSTOM")return Mi[this.viewDistancePreset];const e=Math.max(1,this.viewDistanceCustomDistance),t=Math.min(e,Math.max(16,Math.round(e*(160/300))));return{distance:e,fog:{enabled:!0,far:e,near:t}}}getCurrentViewDistance(){const e=this.getViewDistanceConfig();return e.fog.enabled?e.fog.far:e.distance}getCurrentLodTransitionDistance(){const e=this.getViewDistanceConfig();return e.fog.enabled?Math.min(e.fog.far,e.fog.near+(e.fog.far-e.fog.near)*.5):e.distance}createFogUniformProvider(){return{color:()=>this.fogColor,enabled:()=>this.getViewDistanceConfig().fog.enabled,far:()=>this.getViewDistanceConfig().fog.far,near:()=>this.getViewDistanceConfig().fog.near}}applyViewDistanceSettings(){this.updateViewDistanceVisibility()}applyLightingSettings(){this.chunkBatchRenderer.setAmbientColor(this.entityAmbientLight.color),this.chunkBatchRenderer.setAmbientIntensity(this.lightingAmbient),this.entityAmbientLight.intensity=this.lightingAmbient,this.fogColor.set(this.fogColorHex).convertSRGBToLinear(),this.skyboxIntensity=this.skyboxUiIntensity,this.skyboxMesh&&this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor())}getEntityGlobalCoordinate(e){return{x:Math.floor(e.x),y:Math.floor(e.y),z:Math.floor(e.z)}}getEntityLightLevel(e){const t=this.getEntityGlobalCoordinate(e),n=this.world.getLightSourcesNear(t,kM);let i=0;for(const r of n){const o=t.x-r.position.x+.5,a=t.y-r.position.y+.5,l=t.z-r.position.z+.5;if(o>r.level||o<-r.level||a>r.level||a<-r.level||l>r.level||l<-r.level)continue;const c=o*o+a*a+l*l,u=r.level*r.level;if(c>=u)continue;const h=r.level-Math.sqrt(c);h>i&&(i=h)}return Math.max(0,Math.min(1,i/Xd))}getEntitySkyLight(e){const t=this.getEntityGlobalCoordinate(e);let n=Qi;for(let r=Qi;r>=0;r--){const o=this.getEntitySkyOpacityUp({x:t.x,y:t.y+r,z:t.z});o!==void 0?n=o+n*(1-o):n=Math.min(Qi,n+1)}const i=Math.max(1,Math.min(Qi,Math.round(n)));return yy[i]}getEntitySkyOpacityUp(e){if(!this.atlas)return;const t=this.world.getBlockType(e);if(!t||t.isLiquid)return;const n=this.getEntityBlockOpacity(t);return t.trimeshOcclusionProfile?this.getEntityTrimeshSkyOpacity(t,this.world.getBlockRotation(e))*n:n}getEntityBlockOpacity(e){let t=0;for(const i of oh)t+=this.atlas.getFaceUvs(e,i).transparencyRatio;const n=t/oh.length;return Math.max(0,Math.min(1,1-n))}getEntityTrimeshSkyOpacity(e,t){const n=e.trimeshOcclusionProfile;if(!n)return 1;const i=ah[t]??ah[0],r=i[3],o=i[5];return Math.abs(r)>.5?n.skyOpacityX:Math.abs(o)>.5?n.skyOpacityZ:n.skyOpacityUp}updateEntityLighting(e){const t=e?new Set(e):null;for(const n of this.entityRenderObjects){if(!(n instanceof Os))continue;const i=n.geometry.getAttribute(Yr),r=n.geometry.getAttribute($r),o=n.userData.entityPositions,a=n.userData.entityChunkIds;if(!i||!r||!o)continue;let l=!1;for(let c=0;c<o.length;c++)t&&a&&!t.has(a[c])||(i.setX(c,this.getEntityLightLevel(o[c])),r.setX(c,this.getEntitySkyLight(o[c])),l=!0);l&&(i.needsUpdate=!0,r.needsUpdate=!0)}}getCurrentSkyboxDisplayColor(){const e=this.getViewDistanceConfig();if(!e.fog.enabled)return bh.copy(this.fogColor).multiplyScalar(this.skyboxIntensity);const n=Math.max(0,Math.min(1,1-e.fog.near/100)),i=e.fog.far-e.fog.near,o=Math.max(1,100/Math.max(i,1)),a=Math.min(1,n*o);return bh.copy(yM.setRGB(1,1,1).lerp(this.fogColor,a)).multiplyScalar(this.skyboxIntensity)}restoreSidebarSectionState(e){let t={};try{t=JSON.parse(localStorage.getItem(Sa)??"{}")}catch{t={}}for(const n of e.querySelectorAll(".sidebar-section[data-section]")){const i=n.dataset.section;i&&(n.open=t[i]===!0)}}bindSidebarSectionState(e){for(const t of e.querySelectorAll(".sidebar-section[data-section]"))t.addEventListener("toggle",()=>{const n=t.dataset.section;if(!n)return;let i={};try{i=JSON.parse(localStorage.getItem(Sa)??"{}")}catch{i={}}i[n]=t.open,localStorage.setItem(Sa,JSON.stringify(i))})}createEntityRenderMaterial(e){const t=Array.isArray(e)?e[0]:e,n=t,i=new Dy({color:n.color??new Se(16777215),map:n.map??null,alphaMap:n.alphaMap??null,alphaTest:n.alphaTest??0,transparent:t.transparent,opacity:t.opacity,side:t.side,depthWrite:t.depthWrite,depthTest:t.depthTest,emissive:n.emissive??new Se(0),emissiveIntensity:n.emissiveIntensity??1,emissiveMap:n.emissiveMap??null,fogUniformProvider:this.createFogUniformProvider()});return i.name=`${t.name||"entity"}-editor`,this.ensureEntityMaterialSetup(i),i}ensureEntityMaterialSetup(e){if(e.userData[Oh])return;const t=this;e.addShaderProcessor(n=>{n.uniforms.worldEditorAmbientLightColor={value:this.entityAmbientLight.color},n.uniforms.worldEditorAmbientLightIntensity={get value(){return t.entityAmbientLight.intensity}},n.vertexShader=n.vertexShader.replace("void main() {",`
            #ifdef USE_INSTANCING
              attribute float ${Yr};
              attribute float ${$r};
            #endif
            varying float ${Ds};
            varying float ${Us};
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
              ${Ds} = 0.0;
              ${Us} = 1.0;
          `).replace("#include <uv_vertex>",`
            #include <uv_vertex>
            #ifdef USE_INSTANCING
              ${Ds} = ${Yr};
              ${Us} = ${$r};
            #endif
            mat4 worldEditorInstanceWorldMatrix = modelMatrix;
            #ifdef USE_INSTANCING
              worldEditorInstanceWorldMatrix = modelMatrix * instanceMatrix;
            #endif
            worldEditorWorldNormalY = worldEditorGetWorldNormalY(normal, worldEditorInstanceWorldMatrix);
          `),n.fragmentShader=n.fragmentShader.replace("void main() {",`
            varying float ${Ds};
            varying float ${Us};
            varying float worldEditorWorldNormalY;
            uniform vec3 worldEditorAmbientLightColor;
            uniform float worldEditorAmbientLightIntensity;

            void main() {
          `).replace("#include <opaque_fragment>",`
            vec3 ambientLight = worldEditorAmbientLightColor * worldEditorAmbientLightIntensity;
            vec3 blockLight = worldEditorAmbientLightColor * ${Ds};
            float normalY = gl_FrontFacing ? worldEditorWorldNormalY : -worldEditorWorldNormalY;
            float faceShade = ${Nh.toFixed(2)}
              + (${Uh.toFixed(2)} - ${Fh.toFixed(2)}) * 0.5 * normalY
              + ((${Uh.toFixed(2)} + ${Fh.toFixed(2)}) * 0.5 - ${Nh.toFixed(2)}) * normalY * normalY;
            outgoingLight *= max(ambientLight, blockLight);
            outgoingLight *= ${Us} * faceShade;

            #include <opaque_fragment>
          `)}),e.userData[Oh]=!0}async loadEntityModelTemplate(e){this.entityModelCache.has(e)||this.entityModelCache.set(e,this.gltfLoader.loadAsync(e).then(n=>{const i=new Wt;return i.add(n.scene.clone(!0)),i.updateMatrixWorld(!0),i}).catch(n=>(console.error(n),new Wt)));const t=await this.entityModelCache.get(e);return t.children.length===0?null:t}resolveEntityModelUri(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/voxcinder/world-editor/${e}`}getEntityModelUri(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.modelUri=="string"&&t.modelUri.length>0?t.modelUri:null}updateHoverFromPointer(e){this.updateHoverFromClientPosition(e.clientX,e.clientY)}updateHoverFromScreenCenter(){const e=this.renderer.domElement.getBoundingClientRect();this.updateHoverFromClientPosition(e.left+e.width/2,e.top+e.height/2)}updateHoverFromClientPosition(e,t){const n=this.renderer.domElement.getBoundingClientRect();Vr.x=(e-n.left)/n.width*2-1,Vr.y=-((t-n.top)/n.height)*2+1,this.camera.updateMatrixWorld(),Rs.setFromMatrixPosition(this.camera.matrixWorld),Zi.set(Vr.x,Vr.y,.5).unproject(this.camera),Hr.copy(Zi).sub(Rs).normalize();const i=this.raycastBlocks(Rs,Hr,SM);if(i){this.hoveredBlock=i.coordinate;const l=this.getPlacementCoordinateFromBlock(i.coordinate,i.normal);this.hoveredPlacement=l,this.currentTool==="build"?this.setHoverBox(l,"#f5b942"):this.currentTool==="erase"&&this.setHoverBox(i.coordinate,"#f05d6c");return}this.hoveredBlock=null;const r=-.5,o=Hr.dot(MM);if(Math.abs(o)<1e-6){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}const a=(r-Rs.y)/o;if(a<0){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}Zi.copy(Rs).addScaledVector(Hr,a),this.hoveredPlacement={x:Math.floor(Zi.x),y:0,z:Math.floor(Zi.z)},this.setHoverIndicatorVisible(!1),this.hoveredPlacement&&this.currentTool==="build"&&this.setHoverBox(this.hoveredPlacement,"#f5b942"),this.hoveredBlock&&this.currentTool==="erase"&&this.setHoverBox(this.hoveredBlock,"#f05d6c")}clearHover(){this.hoveredPlacement=null,this.hoveredBlock=null,this.setHoverIndicatorVisible(!1)}getPlacementCoordinateFromBlock(e,t){return{x:e.x+Math.round(t.x),y:e.y+Math.round(t.y),z:e.z+Math.round(t.z)}}setHoverBox(e,t){Sh.set(e.x+.5,e.y+.5,e.z+.5),this.hoverIndicatorRoot.position.copy(Sh),this.hoverIndicatorRoot.traverse(n=>{const i=n;if(!i.material)return;const r=Array.isArray(i.material)?i.material:[i.material];for(const o of r){const a=o;a.color&&a.color.set(t)}}),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setHoverIndicatorVisible(e){this.hoverIndicatorRoot.visible=e,this.hoverBox.visible=!1}async applyCurrentTool(e){if(this.currentTool==="build"){e===0&&await this.placeSingleBlock();return}this.currentTool==="erase"&&(e===0||e===2)&&await this.deleteSingleBlock()}async rebuildAffectedChunks(e){await this.syncChunkMesherWorkerChunks(e),await this.enqueueChunkBuilds(e,Dh,this.activeChunkBuildGeneration),this.updateEntityLighting(e),this.updateDebugPanel()}requestAffectedChunksRebuild(e){this.queueChunkBuilds(e,Dh,this.activeChunkBuildGeneration),this.updateEntityLighting(e),this.updateDebugPanel()}queueChunkBuilds(e,t,n){if(!this.atlas||e.length===0||n!==this.activeChunkBuildGeneration)return[];const i=[...new Set(e)];for(const r of i){const o=this.pendingChunkBuildPriorities.get(r)??0;t>=o&&this.pendingChunkBuildPriorities.set(r,t)}return this.ensureChunkBuildQueueProcessing(n),i}async enqueueChunkBuilds(e,t,n){const i=this.queueChunkBuilds(e,t,n);i.length!==0&&await new Promise(r=>{this.chunkBuildWaiters.push({chunkIds:new Set(i),resolve:r}),this.resolveChunkBuildWaiters()})}ensureChunkBuildQueueProcessing(e){this.chunkBuildProcessing||e!==this.activeChunkBuildGeneration||(this.chunkBuildProcessing=!0,this.processChunkBuildQueue(e))}async processChunkBuildQueue(e){try{for(;e===this.activeChunkBuildGeneration;){const t=this.takeNextChunkBuildBatch();if(t.length===0)return;for(const i of t)this.pendingChunkBuildPriorities.delete(i),this.inFlightChunkBuildIds.add(i);this.flushQueuedWorkerBlockUpdates();const n=await this.buildChunkMeshesBatch(t);if(e!==this.activeChunkBuildGeneration)return;for(const i of n)this.chunkBatchRenderer.setChunkGeometry(i.chunkId,i.geometry),this.inFlightChunkBuildIds.delete(i.chunkId);this.chunkBatchRenderer.flush(),this.resolveChunkBuildWaiters(),this.consecutiveChunkBuildBatchCount++,this.consecutiveChunkBuildBatchCount>=UM&&(this.consecutiveChunkBuildBatchCount=0,await this.waitForNextFrame())}}finally{this.consecutiveChunkBuildBatchCount=0,this.chunkBuildProcessing=!1,e===this.activeChunkBuildGeneration&&this.pendingChunkBuildPriorities.size>0&&this.ensureChunkBuildQueueProcessing(e)}}takeNextChunkBuildBatch(){return[...this.pendingChunkBuildPriorities.keys()].sort((t,n)=>{const i=(this.pendingChunkBuildPriorities.get(n)??0)-(this.pendingChunkBuildPriorities.get(t)??0);return i!==0?i:this.getChunkDistanceToCameraSquared(t)-this.getChunkDistanceToCameraSquared(n)}).slice(0,DM)}getChunkDistanceToCameraSquared(e){const t=Ye.chunkIdToOriginCoordinate(e),n=t.x+8,i=t.y+8,r=t.z+8;return(n-this.camera.position.x)*(n-this.camera.position.x)+(i-this.camera.position.y)*(i-this.camera.position.y)+(r-this.camera.position.z)*(r-this.camera.position.z)}resolveChunkBuildWaiters(){for(let e=this.chunkBuildWaiters.length-1;e>=0;e--){const t=this.chunkBuildWaiters[e];let n=!0;for(const i of t.chunkIds)if(this.pendingChunkBuildPriorities.has(i)||this.inFlightChunkBuildIds.has(i)){n=!1;break}n&&(this.chunkBuildWaiters.splice(e,1),t.resolve())}}async buildChunkMeshesBatch(e){const t=this.nextWorkerRequestId++;return new Promise(n=>{const i=r=>{const o=r.data;o.type!=="built_chunks"||o.requestId!==t||(this.chunkMesherWorker.removeEventListener("message",i),n(o.results))};this.chunkMesherWorker.addEventListener("message",i),this.chunkMesherWorker.postMessage({type:"build_chunks",focusChunkId:e[0],requestId:t,chunkIds:e})})}async syncChunkMesherWorkerWorld(){if(!this.atlas)return;this.flushQueuedWorkerBlockUpdates();const e=this.nextWorkerRequestId++,t=this.atlasSnapshotCache??this.atlas.toSnapshot();await this.postChunkMesherWorkerRequest(e,{type:"sync_world",requestId:e,world:this.world.toSnapshot(),atlas:t})}async syncChunkMesherWorkerChunks(e){if(!this.atlas||e.length===0)return;this.flushQueuedWorkerBlockUpdates();const t=[...new Set(e)],n=this.nextWorkerRequestId++;await this.postChunkMesherWorkerRequest(n,{type:"update_world_chunks",requestId:n,chunks:t.map(i=>({chunkId:i,snapshot:this.world.getChunkSnapshot(i)}))})}queueChunkMesherWorkerBlockUpdate(e,t,n=0){const i=`${e.x},${e.y},${e.z}`;this.pendingWorkerBlockUpdates.set(i,{blockTypeId:t,coordinate:{...e},rotation:n}),!this.workerBlockUpdateFlushScheduled&&(this.workerBlockUpdateFlushScheduled=!0,queueMicrotask(()=>{this.flushQueuedWorkerBlockUpdates()}))}flushQueuedWorkerBlockUpdates(){this.workerBlockUpdateFlushScheduled=!1,!(!this.atlas||this.pendingWorkerBlockUpdates.size===0)&&(this.chunkMesherWorker.postMessage({type:"update_world_blocks",updates:[...this.pendingWorkerBlockUpdates.values()]}),this.pendingWorkerBlockUpdates.clear())}async postChunkMesherWorkerRequest(e,t){await new Promise(n=>{const i=r=>{const o=r.data;o.type!=="worker_ack"||o.requestId!==e||(this.chunkMesherWorker.removeEventListener("message",i),n())};this.chunkMesherWorker.addEventListener("message",i),this.chunkMesherWorker.postMessage(t)})}loadSkyboxTexture(e){return new Promise((t,n)=>{const i=this.cubeTextureLoader.load([...e],()=>t(i),void 0,r=>n(r));i.colorSpace=vt})}createSkyboxMesh(e){const t=new Et(new Xn(1,1,1),e);return t.renderOrder=-1e3,t.frustumCulled=!1,t.matrixAutoUpdate=!1,t.matrixWorldAutoUpdate=!1,t}disposeSkyboxMesh(){if(!this.skyboxMesh)return;this.scene.remove(this.skyboxMesh),this.skyboxMesh.geometry.dispose();const e=this.skyboxMesh.material;e instanceof kh&&e.map.dispose(),e.dispose(),this.skyboxMesh=null}ensurePlaceholderSkybox(){this.skyboxMesh instanceof Et&&this.skyboxMesh.material instanceof zh||(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new zh),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh))}async loadSkybox(e){const t=e===Ih,n=Array.isArray(e)?[...e]:[`${e}/+x.png`,`${e}/-x.png`,`${e}/+y.png`,`${e}/-y.png`,`${e}/+z.png`,`${e}/-z.png`],i=this.loadSkyboxTexture(n);this.pendingSkyboxTexture=i,this.ensurePlaceholderSkybox();let r=null;try{r=await i}catch(o){if(console.error(o),!t)try{r=await this.loadSkyboxTexture(Ih)}catch(a){console.error(a)}}this.pendingSkyboxTexture===i&&(this.pendingSkyboxTexture=null,r&&(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new kh(r)),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh)))}updateSkybox(){this.skyboxMesh&&(this.camera.updateMatrixWorld(),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.skyboxMesh.position.copy(this.camera.position),this.skyboxMesh.updateMatrix(),this.skyboxMesh.matrixWorld.copy(this.skyboxMesh.matrix))}raycastBlocks(e,t,n){let i=Math.floor(e.x),r=Math.floor(e.y),o=Math.floor(e.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),u=a===0?Number.POSITIVE_INFINITY:Math.abs(1/t.x),h=l===0?Number.POSITIVE_INFINITY:Math.abs(1/t.y),d=c===0?Number.POSITIVE_INFINITY:Math.abs(1/t.z);let f=Ea(e.x,t.x,i,a),m=Ea(e.y,t.y,r,l),_=Ea(e.z,t.z,o,c);if(this.world.hasBlock({x:i,y:r,z:o}))return{coordinate:{x:i,y:r,z:o},normal:{x:0,y:1,z:0}};let p=0,g={x:0,y:0,z:0};for(;p<=n;)if(f<m&&f<_?(i+=a,p=f,f+=u,g={x:-a,y:0,z:0}):m<_?(r+=l,p=m,m+=h,g={x:0,y:-l,z:0}):(o+=c,p=_,_+=d,g={x:0,y:0,z:-c}),this.world.hasBlock({x:i,y:r,z:o}))return{coordinate:{x:i,y:r,z:o},normal:g};return null}setToolMode(e){this.currentTool=e,this.toolToggleButton.classList.toggle("active",!0),this.toolToggleButton.innerHTML=`<span class="tool-slot-icon" aria-hidden="true">${this.getToolIconSvg(e)}</span>`,this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(e)),this.toolToggleButton.title=this.getToolLabel(e),e==="build"&&this.revealBlocksMenu(),this.updateStatus(`Tool changed to ${this.getToolLabel(e)}.`),this.pointerLocked&&this.updateHoverFromScreenCenter()}toggleToolMode(){this.setToolMode(this.currentTool==="build"?"erase":"build")}revealBlocksMenu(){this.setMobileSidebarOpen(!0);const e=this.sidebar.querySelector('[data-section="pattern"]');e&&!e.open&&(e.open=!0)}getToolLabel(e){switch(e){case"build":return"Build";case"erase":return"Erase"}}getToolIconSvg(e){switch(e){case"build":return`
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
        `}}async placeSingleBlock(){const e=this.hoveredPlacement;if(!e)return;const t=this.world.blockTypes.find(o=>o.id===this.selectedBlockTypeId);if(!t){this.updateStatus("No block pattern selected.");return}if(this.world.getBlockTypeId(e)===t.id)return;const n=this.world.getBlockTypeId(e),i=new Set([Ye.globalCoordinateToChunkId(e)]),r=this.captureChunkStates(i);this.world.setBlock(e,t.id),this.queueChunkMesherWorkerBlockUpdate(e,t.id),this.pushPatchUndoState(`Place ${t.name}`,r),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild([...this.world.getAffectedChunkIds(e,n,t.id)]),this.scheduleAutosave(),this.updateStatus(`Placed ${t.name} at ${Ta(e)}.`)}async deleteSingleBlock(){const e=this.hoveredBlock;if(!e||!this.world.hasBlock(e))return;const t=this.world.getBlockTypeId(e),n=new Set([Ye.globalCoordinateToChunkId(e)]),i=this.captureChunkStates(n);this.world.deleteBlock(e),this.queueChunkMesherWorkerBlockUpdate(e,0),this.pushPatchUndoState(`Delete ${Ta(e)}`,i),this.markChunkIdsAutosaveDirty(n),this.requestAffectedChunksRebuild([...this.world.getAffectedChunkIds(e,t,0)]),this.scheduleAutosave(),this.updateStatus(`Deleted block at ${Ta(e)}.`)}pushHistoryEntry(e){this.undoStack.push(e),this.undoStack.length>IM&&this.undoStack.shift(),this.redoStack=[],this.updateHistoryButtons()}pushSnapshotUndoState(e,t,n){this.pushHistoryEntry({kind:"snapshot",label:e,before:t,after:n})}pushPatchUndoState(e,t,n=[]){const i=[];for(const[o,a]of t){const l=this.world.getChunkSnapshot(o);this.chunkSnapshotsEqual(a,l)||i.push({chunkId:o,before:a,after:l})}const r=n.filter(o=>this.entityDiffChanged(o));return i.length===0&&r.length===0?!1:(this.pushHistoryEntry({kind:"patch",label:e,chunks:i,...r.length>0?{entities:r}:{}}),!0)}serializeHistoryEntry(e){return e.kind==="snapshot"?{kind:"snapshot",label:e.label,beforeWorld:this.snapshotToWorldMap(e.before),afterWorld:this.snapshotToWorldMap(e.after)}:{kind:"patch",label:e.label,chunks:e.chunks.map(t=>({chunkId:t.chunkId,before:this.serializeChunkSnapshot(t.before),after:this.serializeChunkSnapshot(t.after)})),...e.entities?{entities:e.entities.map(t=>this.serializeEntityHistoryDiff(t))}:{}}}deserializeHistoryEntry(e){return e.kind==="snapshot"?{kind:"snapshot",label:e.label,before:this.worldMapToSnapshot(e.beforeWorld),after:this.worldMapToSnapshot(e.afterWorld)}:{kind:"patch",label:e.label,chunks:e.chunks.map(t=>({chunkId:t.chunkId,before:this.deserializeChunkSnapshot(t.before),after:this.deserializeChunkSnapshot(t.after)})),...e.entities?{entities:e.entities.map(t=>this.deserializeEntityHistoryDiff(t))}:{}}}captureChunkStates(e){const t=new Map;for(const n of new Set(e))t.set(n,this.world.getChunkSnapshot(n));return t}serializeChunkSnapshot(e){return e?{chunkId:e.chunkId,originCoordinate:{...e.originCoordinate},blocks:Array.from(e.blocks),rotations:Array.from(e.rotations)}:null}deserializeChunkSnapshot(e){return e?{chunkId:e.chunkId,originCoordinate:{...e.originCoordinate},blocks:new Uint16Array(e.blocks),rotations:new Uint8Array(e.rotations)}:null}serializeEntityHistoryDiff(e){return{...e,before:this.cloneEntityValue(e.before),after:this.cloneEntityValue(e.after)}}deserializeEntityHistoryDiff(e){return{...e,before:this.cloneEntityValue(e.before),after:this.cloneEntityValue(e.after)}}chunkSnapshotsEqual(e,t){return!e||!t?e===t:e.chunkId===t.chunkId&&e.originCoordinate.x===t.originCoordinate.x&&e.originCoordinate.y===t.originCoordinate.y&&e.originCoordinate.z===t.originCoordinate.z&&Kr(e.blocks,t.blocks)&&Kr(e.rotations,t.rotations)}entityDiffChanged(e){return e.hasBefore!==e.hasAfter?!0:!e.hasBefore&&!e.hasAfter?!1:JSON.stringify(e.before)!==JSON.stringify(e.after)}cloneEntityValue(e){return e==null?e:typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}snapshotToWorldMap(e){const t={};for(const n of e.chunks)for(let i=0;i<n.blocks.length;i++){const r=n.blocks[i];if(r===0)continue;const o=Ye.blockIndexToLocalCoordinate(i),a=`${n.originCoordinate.x+o.x},${n.originCoordinate.y+o.y},${n.originCoordinate.z+o.z}`,l=n.rotations[i]??0;t[a]=l===0?r:{i:r,r:l}}return{blockTypes:e.blockTypes.map(n=>({id:n.id,name:n.name,textureUri:n.textureUri,isLiquid:n.isLiquid,lightLevel:n.lightLevel,...n.trimeshIndices?{trimeshIndices:Array.from(n.trimeshIndices)}:{},...n.trimeshVertices?{trimeshVertices:Array.from(n.trimeshVertices)}:{},durability:n.durability,customColliderOptions:n.customColliderOptions,isCustom:n.isCustom,isMultiTexture:n.isMultiTexture})),blocks:t,...e.entities?{entities:{...e.entities}}:{}}}worldMapToSnapshot(e){const t=new dh;return t.load(e,xi),t.toSnapshot()}async undo(){const e=this.undoStack.pop();if(!e){this.updateHistoryButtons(),this.updateStatus("Nothing to undo.");return}this.redoStack.push(e),this.updateHistoryButtons(),await this.applyHistoryEntry(e,"before"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Undid: ${e.label}.`)}async redo(){const e=this.redoStack.pop();if(!e){this.updateHistoryButtons(),this.updateStatus("Nothing to redo.");return}this.undoStack.push(e),this.updateHistoryButtons(),await this.applyHistoryEntry(e,"after"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Redid: ${e.label}.`)}async applyHistoryEntry(e,t){if(e.kind==="snapshot"){const r=t==="before"?e.before:e.after,o=t==="before"?e.after:e.before;this.markFullWorldAutosaveDirty(),await this.restoreSnapshot(r,o);return}const n=t==="before"?"before":"after",i=e.chunks.map(r=>r.chunkId);for(const r of e.chunks)this.world.applyChunkSnapshot(r.chunkId,r[n]);if(this.markChunkIdsAutosaveDirty(i),e.entities){const r={},o=this.world.entities;for(const a of e.entities){a.key in o&&(r[a.key]=this.cloneEntityValue(o[a.key]));const l=t==="before"?a.hasBefore:a.hasAfter,c=t==="before"?a.before:a.after;l?o[a.key]=this.cloneEntityValue(c):delete o[a.key]}this.world.setEntities(Object.keys(o).length>0?o:void 0),this.markEntitiesAutosaveDirty(),await this.syncEntityMarkersForKeys(e.entities.map(a=>a.key),r)}await this.rebuildAffectedChunks(this.expandChunkIdsForLighting(i))}markChunkIdsAutosaveDirty(e){if(!this.autosaveFullWorldDirty)for(const t of e)this.autosaveDirtyChunkIds.add(t)}markEntitiesAutosaveDirty(){this.autosaveEntitiesDirty=!0}markFullWorldAutosaveDirty(){this.autosaveFullWorldDirty=!0,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!0}resetAutosaveDirtyState(){this.autosaveFullWorldDirty=!1,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!1}async restoreSnapshot(e,t){const n=!this.areSnapshotsBlockTypeCompatible(t,e),i=n?[]:this.expandChunkIdsForLighting(this.getChangedChunkIds(t,e));if(this.world.loadSnapshot(e),n){await this.rebuildAllChunkMeshes();return}await this.rebuildAffectedChunks(i)}areSnapshotsBlockTypeCompatible(e,t){if(e.blockTypes.length!==t.blockTypes.length)return!1;for(let n=0;n<e.blockTypes.length;n++){const i=e.blockTypes[n],r=t.blockTypes[n];if(i.id!==r.id||i.name!==r.name||i.textureUri!==r.textureUri||i.isLiquid!==r.isLiquid||i.isMultiTexture!==r.isMultiTexture)return!1}return!0}getChangedChunkIds(e,t){const n=new Set,i=new Map(e.chunks.map(o=>[o.chunkId,o])),r=new Map(t.chunks.map(o=>[o.chunkId,o]));for(const o of new Set([...i.keys(),...r.keys()])){const a=i.get(o),l=r.get(o);if(!a||!l){n.add(o);continue}(!Kr(a.blocks,l.blocks)||!Kr(a.rotations,l.rotations))&&n.add(o)}return[...n]}expandChunkIdsForLighting(e){const t=new Set;for(const n of e){const i=Ye.chunkIdToOriginCoordinate(n);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)t.add(Ye.originCoordinateToChunkId({x:i.x+a*16,y:i.y+r*16,z:i.z+o*16}))}return[...t]}updateStatus(e){}updateDebugPanel(){const e=this.renderer.info,t=performance.memory;this.debugSummaryLine.innerHTML=`<strong>FPS:</strong> ${this.fps} <strong>Chunks:</strong> ${this.world.chunkIds.length} <strong>Chunk Batches:</strong> ${this.chunkBatchRenderer.batchMeshCount}`,this.debugRenderLine.innerHTML=`<strong>Draw Calls:</strong> ${e.render.calls} <strong>Triangles:</strong> ${e.render.triangles}`,this.debugSceneLine.innerHTML=`<strong>Geometries:</strong> ${e.memory.geometries} <strong>Textures:</strong> ${e.memory.textures}`,t?this.debugMemoryLine.innerHTML=`<strong>Heap:</strong> ${Hh(t.usedJSHeapSize)} / ${Hh(t.totalJSHeapSize)}`:this.debugMemoryLine.innerHTML="<strong>Heap:</strong> unavailable in this browser"}updateViewDistanceVisibility(){const e=this.getCurrentViewDistance(),t=this.getCurrentLodTransitionDistance(),n=e*e,i=t*t;Gr.set(this.camera.position.x,this.camera.position.z),Ah.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),Wr.setFromProjectionMatrix(Ah),this.chunkBatchRenderer.applyViewDistanceVisibility(Gr,i,n,Wr);for(const r of this.entityRenderObjects){if(r instanceof Os){const h=r.boundingBox,d=!h||$M(h,Gr)<=n,f=!r.boundingSphere||Wr.intersectsSphere(Ls.copy(r.boundingSphere).applyMatrix4(r.matrixWorld)),m=d&&f,_=r.parent!==null;m&&!_?this.entityLayer.add(r):!m&&_&&this.entityLayer.remove(r);continue}const o=Number(r.userData.visibilityRadius??1);Ls.center.copy(r.getWorldPosition(Zi)),Ls.radius=o;const a=KM(Ls.center,Gr)<=n,l=Wr.intersectsSphere(Ls),c=a&&l,u=r.parent!==null;c&&!u?this.entityLayer.add(r):!c&&u&&this.entityLayer.remove(r)}}updateSpectatorRotation(e,t){this.spectatorPitch=Math.max(-Ch,Math.min(Ch,this.spectatorPitch+t*wh)),this.spectatorYaw-=e*wh,this.applySpectatorCameraOrientation(),this.scheduleViewStateAutosave()}applySpectatorCameraOrientation(){this.camera.rotation.set(-this.spectatorPitch,this.spectatorYaw,0,"YXZ")}updateSpectatorCamera(e){if(!this.pointerLocked&&!this.mobileControlsEnabled)return!1;const t=bM*e;Ma.copy(this.camera.rotation),Xr.set(0,0,-1).applyEuler(Ma),qr.set(1,0,0).applyEuler(Ma);let n=!1;return this.pressedKeys.has("key_w")&&(this.camera.position.addScaledVector(Xr,t),n=!0),this.pressedKeys.has("key_s")&&(this.camera.position.addScaledVector(Xr,-t),n=!0),this.pressedKeys.has("key_a")&&(this.camera.position.addScaledVector(qr,-t),n=!0),this.pressedKeys.has("key_d")&&(this.camera.position.addScaledVector(qr,t),n=!0),this.pressedKeys.has("space")&&(this.camera.position.y+=t,n=!0),this.pressedKeys.has("shift")&&(this.camera.position.y-=t,n=!0),this.mobileControlsEnabled&&(Math.abs(this.mobileMoveInputY)>.01&&(this.camera.position.addScaledVector(Xr,-this.mobileMoveInputY*t),n=!0),Math.abs(this.mobileMoveInputX)>.01&&(this.camera.position.addScaledVector(qr,this.mobileMoveInputX*t),n=!0)),n&&this.scheduleViewStateAutosave(),n}getCurrentBlockTypeDefinitions(){return this.world.toJson().blockTypes??xi}resolveTemplateBlockIds(e){var i;const t=(...r)=>{var a;const o=r.map(l=>l.toLowerCase());return(a=e.find(l=>o.includes(l.name.toLowerCase())))==null?void 0:a.id},n=((i=e[0])==null?void 0:i.id)??1;return{accent:t("bricks","andesite")??n,grass:t("grass-block","grass-block-pine","grass-flower-block","grass-flower-block-pine")??n,leaves:t("oak-leaves","birch-leaves","spruce-leaves")??n,sand:t("sand")??n,stone:t("stone","andesite","cobblestone")??n,wall:t("cobblestone","andesite","stone")??n,water:t("water")??n,wood:t("oak-log","spruce-log")??n}}getEntityLabel(e){if(e&&typeof e=="object"){const t=e,n=t.name??t.modelUri??t.modelLoopedAnimations??t.type;if(typeof n=="string"&&n.length>0)return n}return"entity"}async addEntityAtHover(){const e=this.hoveredPlacement??this.hoveredBlock;if(!e){this.updateStatus("No hover target for entity placement.");return}const t=`${e.x+.5},${e.y+.5},${e.z+.5}`,n=this.cloneEntityValue(void 0);this.world.setEntity(t,{name:"entity"}),this.pushPatchUndoState("Add entity",new Map,[{key:t,before:n,after:this.cloneEntityValue(this.world.entities[t]),hasBefore:!1,hasAfter:!0}]),this.selectedEntityKey=t,this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([t]),this.scheduleAutosave(),this.updateStatus(`Added entity at ${t}.`)}async saveSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}try{const e=JSON.parse(this.entityOptionsInput.value||"{}"),t=this.world.entities,n=this.cloneEntityValue(t[this.selectedEntityKey]);this.world.setEntity(this.selectedEntityKey,e),this.pushPatchUndoState("Edit entity",new Map,[{key:this.selectedEntityKey,before:n,after:this.cloneEntityValue(e),hasBefore:!0,hasAfter:!0}]),this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([this.selectedEntityKey],{[this.selectedEntityKey]:n}),this.scheduleAutosave(),this.updateStatus(`Saved entity at ${this.selectedEntityKey}.`)}catch(e){this.updateStatus(`Invalid entity JSON: ${e.message}`)}}async deleteSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}const e=this.selectedEntityKey,t=this.world.entities,n=this.cloneEntityValue(t[e]);this.world.deleteEntity(e),this.pushPatchUndoState("Delete entity",new Map,[{key:e,before:n,after:this.cloneEntityValue(void 0),hasBefore:!0,hasAfter:!1}]),this.markEntitiesAutosaveDirty(),this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([e],{[e]:n}),this.scheduleAutosave(),this.updateStatus(`Deleted entity at ${e}.`)}scheduleAutosave(){this.autosaveTimeoutId!==null&&window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=window.setTimeout(()=>{this.autosaveTimeoutId=null,this.flushAutosave()},Ph)}scheduleViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=window.setTimeout(()=>{this.viewStateAutosaveTimeoutId=null,this.flushViewStateAutosave()},Ph)}async flushAutosave(){this.autosaveTimeoutId!==null&&(window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=null);const e={fileName:this.fileName,blockTypes:this.world.blockTypes.map(r=>({id:r.id,name:r.name,textureUri:r.textureUri,isLiquid:r.isLiquid,lightLevel:r.lightLevel,...r.trimeshIndices?{trimeshIndices:Array.from(r.trimeshIndices)}:{},...r.trimeshVertices?{trimeshVertices:Array.from(r.trimeshVertices)}:{},durability:r.durability,customColliderOptions:r.customColliderOptions,isCustom:r.isCustom,isMultiTexture:r.isMultiTexture})),redoStack:this.redoStack.map(r=>this.serializeHistoryEntry(r)),undoStack:this.undoStack.map(r=>this.serializeHistoryEntry(r))},t=this.autosaveFullWorldDirty?this.world.chunkIds.map(r=>this.world.getChunkSnapshot(r)).filter(r=>r!==null).map(r=>({chunkId:r.chunkId,originCoordinate:r.originCoordinate,blocks:r.blocks,rotations:r.rotations})):[],n=this.autosaveFullWorldDirty?[]:[...this.autosaveDirtyChunkIds].map(r=>{const o=this.world.getChunkSnapshot(r);return{chunkId:r,snapshot:o?{chunkId:o.chunkId,originCoordinate:o.originCoordinate,blocks:o.blocks,rotations:o.rotations}:null}}),i=this.autosaveEntitiesDirty||this.autosaveFullWorldDirty?Object.entries(this.world.entities).map(([r,o])=>({key:r,options:o})):[];try{this.autosaveFullWorldDirty?await XM(e,t,i):await qM(e,n,this.autosaveEntitiesDirty?i:null),localStorage.removeItem(Ps),this.resetAutosaveDirtyState()}catch(r){console.error(r);try{const o={fileName:this.fileName,redoStack:e.redoStack,undoStack:e.undoStack,world:this.world.toJson()};localStorage.setItem(Ps,JSON.stringify(o))}catch(o){console.error(o)}}}async flushViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&(window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=null);const e={camera:{pitch:this.spectatorPitch,position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},yaw:this.spectatorYaw},lighting:{ambient:this.lightingAmbient,fogColorHex:this.fogColorHex,skyboxIntensity:this.skyboxUiIntensity},menuOpen:this.mobileSidebarOpen,paletteFilter:this.paletteFilter,resolutionPreset:this.resolutionPreset,viewDistance:{customDistance:this.viewDistanceCustomDistance,preset:this.viewDistancePreset}};try{await HM(e)}catch(t){console.error(t)}}buildExploreUrl(){const e=new URL(AM,window.location.origin);return e.searchParams.set(CM,"solo"),e.searchParams.set(RM,"peaceful"),e.searchParams.set(wM,"editor"),e}async openExploreMode(){const e=window.open("about:blank","_blank");if(!e){this.updateStatus("Failed to open Explore tab. Allow pop-ups and try again.");return}e.document.title="Preparing Explore...",this.updateStatus("Saving map for Explore...");try{await this.flushAutosave(),await this.flushViewStateAutosave(),e.location.href=this.buildExploreUrl().toString(),this.updateStatus("Opened Explore in a new tab.")}catch(t){e.close(),this.updateStatus(`Failed to open Explore: ${t.message}`)}}async restoreAutosavedWorld(){var r;let e=null,t=null;try{t=await YM(),t||(e=JSON.parse(localStorage.getItem(Ps)??"null"))}catch{e=null,t=null}const n=(t==null?void 0:t.world)??(e==null?void 0:e.world),i=t==null?void 0:t.meta;if(!n)return!1;try{return this.world.load(n,xi),this.selectedBlockTypeId=((r=this.world.blockTypes[0])==null?void 0:r.id)??this.selectedBlockTypeId,this.fileName=(i==null?void 0:i.fileName)||(e==null?void 0:e.fileName)||"untitled-world-map.json",this.undoStack=((i==null?void 0:i.undoStack)??(e==null?void 0:e.undoStack)??[]).map(o=>this.deserializeHistoryEntry(o)),this.redoStack=((i==null?void 0:i.redoStack)??(e==null?void 0:e.redoStack)??[]).map(o=>this.deserializeHistoryEntry(o)),this.updateHistoryButtons(),this.resetAutosaveDirtyState(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.updateStatus(`Restored autosave for ${this.fileName}.`),!0}catch(o){return console.error(o),localStorage.removeItem(Ps),Vh(),!1}}updateHistoryButtons(){this.undoButton.disabled=this.undoStack.length===0,this.redoButton.disabled=this.redoStack.length===0}async restoreAutosavedViewState(){var t,n;let e=null;try{e=await GM()}catch{e=null}e&&(this.spectatorPitch=e.camera.pitch,this.spectatorYaw=e.camera.yaw,this.camera.position.set(e.camera.position.x,e.camera.position.y,e.camera.position.z),this.applySpectatorCameraOrientation(),this.setMobileSidebarOpen(e.menuOpen??!1,!1),this.paletteFilter=e.paletteFilter??"",this.paletteFilterInput.value=this.paletteFilter,this.resolutionPreset=e.resolutionPreset??"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.viewDistancePreset=((t=e.viewDistance)==null?void 0:t.preset)??"MEDIUM",this.viewDistanceCustomDistance=((n=e.viewDistance)==null?void 0:n.customDistance)??Mi.MEDIUM.distance,this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.lightingAmbient=e.lighting.ambient,this.fogColorHex=e.lighting.fogColorHex||"#ffffff",this.skyboxUiIntensity=e.lighting.skyboxIntensity,this.syncLightingInputs(),this.applyLightingSettings())}}function rr(){return new Promise((s,e)=>{const t=indexedDB.open(LM,1);t.onerror=()=>e(t.error),t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains(on)||n.createObjectStore(on)},t.onsuccess=()=>s(t.result)})}async function qd(s,e){const t=await rr();try{return await new Promise((n,i)=>{const r=t.transaction(on,s),o=r.objectStore(on),a=e(o);a.onerror=()=>i(a.error),a.onsuccess=()=>n(a.result),r.onerror=()=>i(r.error)})}finally{t.close()}}function VM(s,e){return qd("readwrite",t=>t.put(e,s)).then(()=>{})}async function Yd(s){return await qd("readonly",t=>t.get(s))??null}function HM(s){return VM(Wd,s)}function GM(){return Yd(Wd)}function $d(s){return`chunk:${s}`}function Kd(s){return`entity:${s}`}async function WM(s,e){const t=await rr();try{await new Promise((n,i)=>{const r=t.transaction(on,s),o=r.objectStore(on),a=o.openCursor();a.onerror=()=>i(a.error),a.onsuccess=()=>{const l=a.result;if(!l){n();return}Promise.resolve(e(l.key,l.value,o)).then(()=>l.continue()).catch(i)},r.onerror=()=>i(r.error)})}finally{t.close()}}async function XM(s,e,t){const n=await rr();try{await new Promise((i,r)=>{const o=n.transaction(on,"readwrite"),a=o.objectStore(on),l=a.clear();l.onerror=()=>r(l.error),l.onsuccess=()=>{a.put(s,Mc);for(const c of e)a.put(c,$d(c.chunkId));for(const c of t)a.put(c,Kd(c.key));o.oncomplete=()=>i()},o.onerror=()=>r(o.error)})}finally{n.close()}}async function qM(s,e,t){const n=await rr();try{await new Promise((i,r)=>{const o=n.transaction(on,"readwrite"),a=o.objectStore(on);a.put(s,Mc);for(const l of e){const c=$d(l.chunkId);l.snapshot?a.put(l.snapshot,c):a.delete(c)}if(t){const l=a.openCursor();l.onerror=()=>r(l.error),l.onsuccess=()=>{const c=l.result;if(!c){for(const u of t)a.put(u,Kd(u.key));return}typeof c.key=="string"&&c.key.startsWith("entity:")&&c.delete(),c.continue()}}o.oncomplete=()=>i(),o.onerror=()=>r(o.error)})}finally{n.close()}}async function YM(){const s=await Yd(Mc);if(!s)return null;const e={},t={};return await WM("readonly",(n,i)=>{if(typeof n=="string"){if(n.startsWith("chunk:")){const r=i;for(let o=0;o<r.blocks.length;o++){const a=r.blocks[o];if(a===0)continue;const l=Ye.blockIndexToLocalCoordinate(o),c=`${r.originCoordinate.x+l.x},${r.originCoordinate.y+l.y},${r.originCoordinate.z+l.z}`,u=r.rotations[o]??0;e[c]=u===0?a:{i:a,r:u}}return}if(n.startsWith("entity:")){const r=i;t[r.key]=r.options}}}),{meta:s,world:{blockTypes:s.blockTypes,blocks:e,...Object.keys(t).length>0?{entities:t}:{}}}}async function Vh(){const s=await rr();try{await new Promise((e,t)=>{const n=s.transaction(on,"readwrite"),r=n.objectStore(on).clear();r.onerror=()=>t(r.error),r.onsuccess=()=>e(),n.onerror=()=>t(n.error)})}finally{s.close()}}function Ea(s,e,t,n){if(n===0||e===0)return Number.POSITIVE_INFINITY;const i=n>0?t+1:t;return Math.abs((i-s)/e)}function Hh(s){return`${(s/(1024*1024)).toFixed(1)} MB`}function Ta(s){return`${s.x},${s.y},${s.z}`}function Kr(s,e){if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0}function Gh(s){switch(s){case"KeyW":return"key_w";case"KeyA":return"key_a";case"KeyS":return"key_s";case"KeyD":return"key_d";case"Space":return"space";case"ShiftLeft":case"ShiftRight":return"shift";default:return s.toLowerCase()}}function jr(s){const e=s.split(",");if(e.length!==3)return null;const t=Number(e[0]),n=Number(e[1]),i=Number(e[2]);return!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(i)?null:{x:t,y:n,z:i}}function $M(s,e){const t=Math.max(s.min.x,Math.min(e.x,s.max.x)),n=Math.max(s.min.z,Math.min(e.y,s.max.z)),i=e.x-t,r=e.y-n;return i*i+r*r}function KM(s,e){const t=s.x-e.x,n=s.z-e.y;return t*t+n*n}function jM(s){if(Ji.set(1,1,1),!s||typeof s!="object")return Ji;const e=s,t=e.modelScale??e.scale;if(typeof t=="number")return Ji.setScalar(t),Ji;if(t&&typeof t=="object"){const n=t;Ji.set(Number(n.x??1)||1,Number(n.y??1)||1,Number(n.z??1)||1)}return Ji}function ZM(s){if(Is.identity(),!s||typeof s!="object")return Is;const t=s.rotation;if(!t||typeof t!="object")return Is;const n=t;return typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"&&typeof n.w=="number"&&Is.set(n.x,n.y,n.z,n.w),Is}new zM(Gd);
