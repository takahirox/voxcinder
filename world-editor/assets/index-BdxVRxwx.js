var S0=Object.defineProperty;var b0=(s,t,e)=>t in s?S0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var C=(s,t,e)=>b0(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vu="183",E0=0,Hd=1,T0=2,Na=1,w0=2,eo=3,fn=0,Ze=1,Ke=2,gi=0,er=1,Gd=2,Wd=3,Xd=4,A0=5,fs=100,C0=101,R0=102,I0=103,P0=104,L0=200,B0=201,D0=202,U0=203,Qc=204,th=205,N0=206,k0=207,F0=208,O0=209,z0=210,V0=211,H0=212,G0=213,W0=214,eh=0,nh=1,ih=2,lr=3,sh=4,rh=5,oh=6,ah=7,qm=0,X0=1,q0=2,Kn=0,$m=1,Ym=2,Km=3,Zm=4,jm=5,Jm=6,Qm=7,qd="attached",$0="detached",tg=300,ys=301,cr=302,Nl=303,kl=304,Ml=306,hr=1e3,qn=1001,Ka=1002,Ae=1003,eg=1004,no=1005,Ie=1006,ka=1007,fi=1008,dn=1009,ng=1010,ig=1011,Mo=1012,Hu=1013,Jn=1014,xn=1015,yi=1016,Gu=1017,Wu=1018,So=1020,sg=35902,rg=35899,og=1021,ag=1022,vn=1023,xi=1026,gs=1027,Xu=1028,qu=1029,ur=1030,$u=1031,Yu=1033,Fa=33776,Oa=33777,za=33778,Va=33779,lh=35840,ch=35841,hh=35842,uh=35843,dh=36196,fh=37492,ph=37496,mh=37488,gh=37489,_h=37490,yh=37491,xh=37808,vh=37809,Mh=37810,Sh=37811,bh=37812,Eh=37813,Th=37814,wh=37815,Ah=37816,Ch=37817,Rh=37818,Ih=37819,Ph=37820,Lh=37821,Bh=36492,Dh=36494,Uh=36495,Nh=36283,kh=36284,Fh=36285,Oh=36286,bo=2300,Eo=2301,Fl=2302,$d=2303,Yd=2400,Kd=2401,Zd=2402,Y0=2500,K0=0,lg=1,zh=2,Z0=3200,cg=0,j0=1,Ni="",we="srgb",en="srgb-linear",Za="linear",oe="srgb",Ts=7680,jd=519,J0=512,Q0=513,t_=514,Ku=515,e_=516,n_=517,Zu=518,i_=519,Vh=35044,_n=35048,Oi="300 es",$n=2e3,To=2001;function s_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function r_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function o_(){const s=wo("canvas");return s.style.display="block",s}const Jd={};function ja(...s){const t="THREE."+s.shift();console.log(t,...s)}function hg(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=hg(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ut(...s){s=hg(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ja(...s){const t=s.join(" ");t in Jd||(Jd[t]=!0,xt(...s))}function a_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const l_={[eh]:nh,[ih]:oh,[sh]:ah,[lr]:rh,[nh]:eh,[oh]:ih,[ah]:sh,[rh]:lr};class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qd=1234567;const nr=Math.PI/180,dr=180/Math.PI;function Ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[s&255]+We[s>>8&255]+We[s>>16&255]+We[s>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function ju(s,t){return(s%t+t)%t}function c_(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function h_(s,t,e){return s!==t?(e-s)/(t-s):0}function ao(s,t,e){return(1-e)*s+e*t}function u_(s,t,e,n){return ao(s,t,1-Math.exp(-e*n))}function d_(s,t=1){return t-Math.abs(ju(s,t*2)-t)}function f_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function p_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function m_(s,t){return s+Math.floor(Math.random()*(t-s+1))}function g_(s,t){return s+Math.random()*(t-s)}function __(s){return s*(.5-Math.random())}function y_(s){s!==void 0&&(Qd=s);let t=Qd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function x_(s){return s*nr}function v_(s){return s*dr}function M_(s){return(s&s-1)===0&&s!==0}function S_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function b_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function E_(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const T_={DEG2RAD:nr,RAD2DEG:dr,generateUUID:Ln,clamp:jt,euclideanModulo:ju,mapLinear:c_,inverseLerp:h_,lerp:ao,damp:u_,pingpong:d_,smoothstep:f_,smootherstep:p_,randInt:m_,randFloat:g_,randFloatSpread:__,seededRandom:y_,degToRad:x_,radToDeg:v_,isPowerOfTwo:M_,ceilPowerOfTwo:S_,floorPowerOfTwo:b_,setQuaternionFromProperEuler:E_,normalize:ae,denormalize:Pn};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const x=Math.acos(m),b=Math.sin(x);g=Math.sin(g*x)/b,a=Math.sin(a*x)/b,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+_*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+_*a;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ol=new L,tf=new Bn;class zt{constructor(t,e,n,i,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],b=i[4],v=i[7],A=i[2],T=i[5],E=i[8];return r[0]=o*_+a*x+l*A,r[3]=o*m+a*b+l*T,r[6]=o*g+a*v+l*E,r[1]=c*_+h*x+u*A,r[4]=c*m+h*b+u*T,r[7]=c*g+h*v+u*E,r[2]=d*_+f*x+p*A,r[5]=d*m+f*b+p*T,r[8]=d*g+f*v+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zl.makeScale(t,e)),this}rotate(t){return this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zl=new zt,ef=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nf=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w_(){const s={enabled:!0,workingColorSpace:en,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?Za:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[en]:{primaries:t,whitePoint:n,transfer:Za,toXYZ:ef,fromXYZ:nf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:ef,fromXYZ:nf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),s}const Qt=w_();function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class A_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ws===void 0&&(ws=wo("canvas")),ws.width=t.width,ws.height=t.height;const i=ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let C_=0;class Ju{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Vl(i[o].image)):r.push(Vl(i[o]))}else r=Vl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?A_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let R_=0;const Hl=new L;class Pe extends yr{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=qn,i=qn,r=Ie,o=fi,a=vn,l=dn,c=Pe.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Ln(),this.name="",this.source=new Ju(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hr:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hr:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=tg;Pe.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,v=(f+1)/2,A=(g+1)/2,T=(h+d)/4,E=(u+_)/4,y=(p+m)/4;return b>v&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=T/n,r=E/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=y/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=y/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I_ extends yr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Pe(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ju(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends I_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ug extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class P_ extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dt{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,_,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L_,t,B_)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ei.crossVectors(n,rn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ei.crossVectors(n,rn)),Ei.normalize(),Bo.crossVectors(rn,Ei),i[0]=Ei.x,i[4]=Bo.x,i[8]=rn.x,i[1]=Ei.y,i[5]=Bo.y,i[9]=rn.y,i[2]=Ei.z,i[6]=Bo.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],b=n[7],v=n[11],A=n[15],T=i[0],E=i[4],y=i[8],S=i[12],B=i[1],R=i[5],O=i[9],z=i[13],P=i[2],U=i[6],V=i[10],N=i[14],q=i[3],j=i[7],it=i[11],at=i[15];return r[0]=o*T+a*B+l*P+c*q,r[4]=o*E+a*R+l*U+c*j,r[8]=o*y+a*O+l*V+c*it,r[12]=o*S+a*z+l*N+c*at,r[1]=h*T+u*B+d*P+f*q,r[5]=h*E+u*R+d*U+f*j,r[9]=h*y+u*O+d*V+f*it,r[13]=h*S+u*z+d*N+f*at,r[2]=p*T+_*B+m*P+g*q,r[6]=p*E+_*R+m*U+g*j,r[10]=p*y+_*O+m*V+g*it,r[14]=p*S+_*z+m*N+g*at,r[3]=x*T+b*B+v*P+A*q,r[7]=x*E+b*R+v*U+A*j,r[11]=x*y+b*O+v*V+A*it,r[15]=x*S+b*z+v*N+A*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],x=l*f-c*d,b=a*f-c*u,v=a*d-l*u,A=o*f-c*h,T=o*d-l*h,E=o*u-a*h;return e*(_*x-m*b+g*v)-n*(p*x-m*A+g*T)+i*(p*b-_*A+g*E)-r*(p*v-_*T+m*E)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],x=e*a-n*o,b=e*l-i*o,v=e*c-r*o,A=n*l-i*a,T=n*c-r*a,E=i*c-r*l,y=h*_-u*p,S=h*m-d*p,B=h*g-f*p,R=u*m-d*_,O=u*g-f*_,z=d*g-f*m,P=x*z-b*O+v*R+A*B-T*S+E*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return t[0]=(a*z-l*O+c*R)*U,t[1]=(i*O-n*z-r*R)*U,t[2]=(_*E-m*T+g*A)*U,t[3]=(d*T-u*E-f*A)*U,t[4]=(l*B-o*z-c*S)*U,t[5]=(e*z-i*B+r*S)*U,t[6]=(m*v-p*E-g*b)*U,t[7]=(h*E-d*v+f*b)*U,t[8]=(o*O-a*B+c*y)*U,t[9]=(n*B-e*O-r*y)*U,t[10]=(p*T-_*v+g*x)*U,t[11]=(u*v-h*T-f*x)*U,t[12]=(a*S-o*R-l*y)*U,t[13]=(e*R-n*S+i*y)*U,t[14]=(_*b-p*A-m*x)*U,t[15]=(h*A-u*b+d*x)*U,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,m=o*u,g=a*u,x=l*c,b=l*h,v=l*u,A=n.x,T=n.y,E=n.z;return i[0]=(1-(_+g))*A,i[1]=(f+v)*A,i[2]=(p-b)*A,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(d+g))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(p+b)*E,i[9]=(m-x)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=As.set(i[0],i[1],i[2]).length();const a=As.set(i[4],i[5],i[6]).length(),l=As.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Tn.copy(this);const c=1/o,h=1/a,u=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=$n,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===$n)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===To)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=$n,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===$n)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===To)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const As=new L,Tn=new Dt,L_=new L(0,0,0),B_=new L(1,1,1),Ei=new L,Bo=new L,rn=new L,sf=new Dt,rf=new Bn;class Sn{constructor(t=0,e=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rf.setFromEuler(this),this.setFromQuaternion(rf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class dg{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let D_=0;const of=new L,Cs=new Bn,si=new Dt,Do=new L,wr=new L,U_=new L,N_=new Bn,af=new L(1,0,0),lf=new L(0,1,0),cf=new L(0,0,1),hf={type:"added"},k_={type:"removed"},Rs={type:"childadded",child:null},Gl={type:"childremoved",child:null};class ye extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new L,e=new Sn,n=new Bn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new zt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(af,t)}rotateY(t){return this.rotateOnAxis(lf,t)}rotateZ(t){return this.rotateOnAxis(cf,t)}translateOnAxis(t,e){return of.copy(t).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(af,t)}translateY(t){return this.translateOnAxis(lf,t)}translateZ(t){return this.translateOnAxis(cf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(wr,Do,this.up):si.lookAt(Do,wr,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(si),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hf),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(k_),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hf),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,U_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,N_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new L(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qe extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F_={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Xl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=ju(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xl(o,r,t+1/3),this.g=Xl(o,r,t),this.b=Xl(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=fg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Qt.workingToColorSpace(Xe.copy(this),t),Math.round(jt(Xe.r*255,0,255))*65536+Math.round(jt(Xe.g*255,0,255))*256+Math.round(jt(Xe.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Xe.copy(this),e);const n=Xe.r,i=Xe.g,r=Xe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=we){Qt.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,i=Xe.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Uo);const n=ao(Ti.h,Uo.h,e),i=ao(Ti.s,Uo.s,e),r=ao(Ti.l,Uo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new ut;ut.NAMES=fg;class uf extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wn=new L,ri=new L,ql=new L,oi=new L,Is=new L,Ps=new L,df=new L,$l=new L,Yl=new L,Kl=new L,Zl=new _e,jl=new _e,Jl=new _e;class yn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){wn.subVectors(i,e),ri.subVectors(n,e),ql.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(ri),l=wn.dot(ql),c=ri.dot(ri),h=ri.dot(ql),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Zl.setScalar(0),jl.setScalar(0),Jl.setScalar(0),Zl.fromBufferAttribute(t,e),jl.fromBufferAttribute(t,n),Jl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Zl,r.x),o.addScaledVector(jl,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),ri.subVectors(t,e),wn.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),wn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Is.subVectors(i,n),Ps.subVectors(r,n),$l.subVectors(t,n);const l=Is.dot($l),c=Ps.dot($l);if(l<=0&&c<=0)return e.copy(n);Yl.subVectors(t,i);const h=Is.dot(Yl),u=Ps.dot(Yl);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Is,o);Kl.subVectors(t,r);const f=Is.dot(Kl),p=Ps.dot(Kl);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ps,a);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return df.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(df,a);const g=1/(m+_+d);return o=_*g,a=d*g,e.copy(n).addScaledVector(Is,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ve{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),No.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(t.matrixWorld),this.union(No)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),ko.subVectors(this.max,Ar),Ls.subVectors(t.a,Ar),Bs.subVectors(t.b,Ar),Ds.subVectors(t.c,Ar),wi.subVectors(Bs,Ls),Ai.subVectors(Ds,Bs),Xi.subVectors(Ls,Ds);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Xi.z,Xi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Xi.z,0,-Xi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Xi.y,Xi.x,0];return!Ql(e,Ls,Bs,Ds,ko)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,Ls,Bs,Ds,ko))?!1:(Fo.crossVectors(wi,Ai),e=[Fo.x,Fo.y,Fo.z],Ql(e,Ls,Bs,Ds,ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ai=[new L,new L,new L,new L,new L,new L,new L,new L],An=new L,No=new Ve,Ls=new L,Bs=new L,Ds=new L,wi=new L,Ai=new L,Xi=new L,Ar=new L,ko=new L,Fo=new L,qi=new L;function Ql(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){qi.fromArray(s,r);const a=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Re=new L,Oo=new Wt;let O_=0;class Vt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vh&&(t.usage=this.usage),t}}class pg extends Vt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mg extends Vt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Mn extends Vt{constructor(t,e,n){super(new Float32Array(t),e,n)}}const z_=new Ve,Cr=new L,tc=new L;class ke{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):z_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);const e=Cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Cr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(tc)),this.expandByPoint(Cr.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let V_=0;const pn=new Dt,ec=new ye,Us=new L,on=new Ve,Rr=new Ve,Ne=new L;class Le extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(s_(t)?mg:pg)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mn(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ve);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(on.min,Rr.min),on.expandByPoint(Ne),Ne.addVectors(on.max,Rr.max),on.expandByPoint(Ne)):(on.expandByPoint(Rr.min),on.expandByPoint(Rr.max))}on.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(t,c),Ne.add(Us)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new L,l[y]=new L;const c=new L,h=new L,u=new L,d=new Wt,f=new Wt,p=new Wt,_=new L,m=new L;function g(y,S,B){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,B),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,B),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(R),a[y].add(_),a[S].add(_),a[B].add(_),l[y].add(m),l[S].add(m),l[B].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,S=x.length;y<S;++y){const B=x[y],R=B.start,O=B.count;for(let z=R,P=R+O;z<P;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new L,v=new L,A=new L,T=new L;function E(y){A.fromBufferAttribute(i,y),T.copy(A);const S=a[y];b.copy(S),b.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(T,S);const R=v.dot(l[y])<0?-1:1;o.setXYZW(y,b.x,b.y,b.z,R)}for(let y=0,S=x.length;y<S;++y){const B=x[y],R=B.start,O=B.count;for(let z=R,P=R+O;z<P;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Vt(d,h,u)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class H_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vh,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new L;class Qu{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Vt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let G_=0;class jn extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=er,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=th,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){xt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qc&&(n.blendSrc=this.blendSrc),this.blendDst!==th&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const li=new L,nc=new L,zo=new L,Ci=new L,ic=new L,Vo=new L,sc=new L;class Sl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nc.copy(t).add(e).multiplyScalar(.5),zo.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(nc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zo),a=Ci.dot(this.direction),l=-Ci.dot(zo),c=Ci.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nc).addScaledVector(zo,d),f}intersectSphere(t,e){li.subVectors(t.center,this.origin);const n=li.dot(this.direction),i=li.dot(li)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,i,r){ic.subVectors(e,t),Vo.subVectors(n,t),sc.crossVectors(ic,Vo);let o=this.direction.dot(sc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const l=a*this.direction.dot(Vo.crossVectors(Ci,Vo));if(l<0)return null;const c=a*this.direction.dot(ic.cross(Ci));if(c<0||l+c>o)return null;const h=-a*Ci.dot(sc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yn extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=qm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ff=new Dt,$i=new Sl,Ho=new ke,pf=new L,Go=new L,Wo=new L,Xo=new L,rc=new L,qo=new L,mf=new L,$o=new L;class Me extends ye{constructor(t=new Le,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(rc.fromBufferAttribute(u,t),o?qo.addScaledVector(rc,h):qo.addScaledVector(rc.sub(e),h))}e.add(qo)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(Ho.containsPoint($i.origin)===!1&&($i.intersectSphere(Ho,pf)===null||$i.origin.distanceToSquared(pf)>(t.far-t.near)**2))&&(ff.copy(r).invert(),$i.copy(t.ray).applyMatrix4(ff),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=b;v<A;v+=3){const T=a.getX(v),E=a.getX(v+1),y=a.getX(v+2);i=Yo(this,g,t,n,c,h,u,T,E,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);i=Yo(this,o,t,n,c,h,u,x,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=b;v<A;v+=3){const T=v,E=v+1,y=v+2;i=Yo(this,g,t,n,c,h,u,T,E,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=m,b=m+1,v=m+2;i=Yo(this,o,t,n,c,h,u,x,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function W_(s,t,e,n,i,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===fn,a),l===null)return null;$o.copy(a),$o.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo($o);return c<e.near||c>e.far?null:{distance:c,point:$o.clone(),object:s}}function Yo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Go),s.getVertexPosition(l,Wo),s.getVertexPosition(c,Xo);const h=W_(s,t,e,n,Go,Wo,Xo,mf);if(h){const u=new L;yn.getBarycoord(mf,Go,Wo,Xo,u),i&&(h.uv=yn.getInterpolatedAttribute(i,a,l,c,u,new Wt)),r&&(h.uv1=yn.getInterpolatedAttribute(r,a,l,c,u,new Wt)),o&&(h.normal=yn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};yn.getNormal(Go,Wo,Xo,d.normal),h.face=d,h.barycoord=u}return h}const gf=new L,_f=new _e,yf=new _e,X_=new L,xf=new Dt,Ko=new L,oc=new ke,vf=new Dt,ac=new Sl;class q_ extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qd,this.bindMatrix=new Dt,this.bindMatrixInverse=new Dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ve),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ko),this.boundingBox.expandByPoint(Ko)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ke),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ko),this.boundingSphere.expandByPoint(Ko)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oc.copy(this.boundingSphere),oc.applyMatrix4(i),t.ray.intersectsSphere(oc)!==!1&&(vf.copy(i).invert(),ac.copy(t.ray).applyMatrix4(vf),!(this.boundingBox!==null&&ac.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ac)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new _e,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===qd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$0?this.bindMatrixInverse.copy(this.bindMatrix).invert():xt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;_f.fromBufferAttribute(i.attributes.skinIndex,t),yf.fromBufferAttribute(i.attributes.skinWeight,t),gf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=yf.getComponent(r);if(o!==0){const a=_f.getComponent(r);xf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(X_.copy(gf).applyMatrix4(xf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class gg extends ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class td extends Pe{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Ae,h=Ae,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mf=new Dt,$_=new Dt;class ed{constructor(t=[],e=[]){this.uuid=Ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){xt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Dt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Dt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:$_;Mf.multiplyMatrices(a,e[r]),Mf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ed(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new td(e,t,t,vn,xn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(xt("Skeleton: No bone found with UUID:",r),o=new gg),this.bones.push(o),this.boneInverses.push(new Dt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class cn extends Vt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ns=new Dt,Sf=new Dt,Zo=[],bf=new Ve,Y_=new Dt,Ir=new Me,Pr=new ke;class nd extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cn(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ve),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),bf.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(bf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ke),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),Pr.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ns),Sf.multiplyMatrices(n,Ns),Ir.matrixWorld=Sf,Ir.raycast(t,Zo);for(let o=0,a=Zo.length;o<a;o++){const l=Zo[o];l.instanceId=r,l.object=this,e.push(l)}Zo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new td(new Float32Array(i*this.count),i,this.count,Xu,xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lc=new L,K_=new L,Z_=new zt;class hs{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=lc.subVectors(n,e).cross(K_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Z_.getNormalMatrix(t),i=this.coplanarPoint(lc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new ke,j_=new Wt(.5,.5),jo=new L;class bl{constructor(t=new hs,e=new hs,n=new hs,i=new hs,r=new hs,o=new hs){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],x=r[12],b=r[13],v=r[14],A=r[15];if(i[0].setComponents(c-o,f-h,g-p,A-x).normalize(),i[1].setComponents(c+o,f+h,g+p,A+x).normalize(),i[2].setComponents(c+a,f+u,g+_,A+b).normalize(),i[3].setComponents(c-a,f-u,g-_,A-b).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,f-d,g-m,A-v).normalize();else if(i[4].setComponents(c-l,f-d,g-m,A-v).normalize(),e===$n)i[5].setComponents(c+l,f+d,g+m,A+v).normalize();else if(e===To)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);const e=j_.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(jo.x=i.normal.x>0?t.max.x:t.min.x,jo.y=i.normal.y>0?t.max.y:t.min.y,jo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qa extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tl=new L,el=new L,Ef=new Dt,Lr=new Sl,Jo=new ke,cc=new L,Tf=new L;class id extends ye{constructor(t=new Le,e=new Qa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)tl.fromBufferAttribute(e,i-1),el.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=tl.distanceTo(el);t.setAttribute("lineDistance",new Mn(n,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=r,t.ray.intersectsSphere(Jo)===!1)return;Ef.copy(i).invert(),Lr.copy(t.ray).applyMatrix4(Ef);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=h.getX(_),x=h.getX(_+1),b=Qo(this,t,Lr,l,g,x,_);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(f),g=Qo(this,t,Lr,l,_,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=Qo(this,t,Lr,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=Qo(this,t,Lr,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qo(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(tl.fromBufferAttribute(a,i),el.fromBufferAttribute(a,r),e.distanceSqToSegment(tl,el,cc,Tf)>n)return;cc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(cc);if(!(c<t.near||c>t.far))return{distance:c,point:Tf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const wf=new L,Af=new L;class Hh extends id{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)wf.fromBufferAttribute(e,i),Af.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wf.distanceTo(Af);t.setAttribute("lineDistance",new Mn(n,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class J_ extends id{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class _g extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cf=new Dt,Gh=new Sl,ta=new ke,ea=new L;class Q_ extends ye{constructor(t=new Le,e=new _g){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(i),ta.radius+=r,t.ray.intersectsSphere(ta)===!1)return;Cf.copy(i).invert(),Gh.copy(t.ray).applyMatrix4(Cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const m=c.getX(p);ea.fromBufferAttribute(u,m),Rf(ea,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)ea.fromBufferAttribute(u,p),Rf(ea,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rf(s,t,e,n,i,r,o){const a=Gh.distanceSqToPoint(s);if(a<e){const l=new L;Gh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class sd extends Pe{constructor(t=[],e=ys,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ty extends Pe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ao extends Pe{constructor(t,e,n=Jn,i,r,o,a=Ae,l=Ae,c,h=xi,u=1){if(h!==xi&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ju(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ey extends Ao{constructor(t,e=Jn,n=ys,i,r,o=Ae,a=Ae,l,c=xi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yg extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class pi extends Le{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(h,3)),this.setAttribute("uv",new Mn(u,2));function p(_,m,g,x,b,v,A,T,E,y,S){const B=v/E,R=A/y,O=v/2,z=A/2,P=T/2,U=E+1,V=y+1;let N=0,q=0;const j=new L;for(let it=0;it<V;it++){const at=it*R-z;for(let dt=0;dt<U;dt++){const At=dt*B-O;j[_]=At*x,j[m]=at*b,j[g]=P,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[g]=T>0?1:-1,h.push(j.x,j.y,j.z),u.push(dt/E),u.push(1-it/y),N+=1}}for(let it=0;it<y;it++)for(let at=0;at<E;at++){const dt=d+at+U*it,At=d+at+U*(it+1),te=d+(at+1)+U*(it+1),kt=d+(at+1)+U*it;l.push(dt,At,kt),l.push(At,te,kt),q+=6}a.addGroup(f,q,S),f+=q,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const na=new L,ia=new L,hc=new L,sa=new yn;class If extends Le{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(nr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:m,c:g}=sa;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),sa.getNormal(hc),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const b=(x+1)%3,v=u[x],A=u[b],T=sa[h[x]],E=sa[h[b]],y=`${v}_${A}`,S=`${A}_${v}`;S in d&&d[S]?(hc.dot(d[S].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),d[S]=null):y in d||(d[y]={index0:c[x],index1:c[b],normal:hc.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:m}=d[p];na.fromBufferAttribute(a,_),ia.fromBufferAttribute(a,m),f.push(na.x,na.y,na.z),f.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new Mn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class xr extends Le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const x=g*d-o;for(let b=0;b<c;b++){const v=b*u-r;p.push(v,-x,0),_.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const b=x+c*g,v=x+c*(g+1),A=x+1+c*(g+1),T=x+1+c*g;f.push(b,v,T),f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new Mn(p,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.widthSegments,t.heightSegments)}}function fr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Je(s){const t={};for(let e=0;e<s.length;e++){const n=fr(s[e]);for(const i in n)t[i]=n[i]}return t}function ny(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xg(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Qn={clone:fr,merge:Je};var iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=ny(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ry extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rd extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cg,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ti extends rd{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class oy extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ay extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ra(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ly(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Pf(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function vg(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class vr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cy extends vr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yd,endingEnd:Yd}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kd:r=t,a=2*e-n;break;case Zd:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kd:o=t,l=2*n-e;break;case Zd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,b=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+x*o[c+A]+b*o[l+A]+v*o[u+A];return r}}class hy extends vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class uy extends vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class dy extends vr{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const _=(n-e)/(i-e),m=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*_;return r}const f=a*2,p=t-1;for(let _=0;_!==a;++_){const m=o[c+_],g=o[l+_],x=p*f+_*2,b=d[x],v=d[x+1],A=t*f+_*2,T=u[A],E=u[A+1];let y=(n-e)/(i-e),S,B,R,O,z;for(let P=0;P<8;P++){S=y*y,B=S*y,R=1-y,O=R*R,z=O*R;const V=z*e+3*O*y*b+3*R*S*T+B*i-n;if(Math.abs(V)<1e-10)break;const N=3*O*(b-e)+6*R*y*(T-b)+3*S*(i-T);if(Math.abs(N)<1e-10)break;y=y-V/N,y=Math.max(0,Math.min(1,y))}r[_]=z*m+3*O*y*v+3*R*S*E+B*g}return r}}class Dn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new dy(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case bo:e=this.InterpolantFactoryMethodDiscrete;break;case Eo:e=this.InterpolantFactoryMethodLinear;break;case Fl:e=this.InterpolantFactoryMethodSmooth;break;case $d:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return Fl;case this.InterpolantFactoryMethodBezier:return $d}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ut("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&r_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fl,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=e[u+p];if(_!==e[d+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Eo;class Mr extends Dn{constructor(t,e,n){super(t,e,n)}}Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=bo;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mg extends Dn{constructor(t,e,n,i){super(t,e,n,i)}}Mg.prototype.ValueTypeName="color";class pr extends Dn{constructor(t,e,n,i){super(t,e,n,i)}}pr.prototype.ValueTypeName="number";class fy extends vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Bn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class mr extends Dn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new fy(this.times,this.values,this.getValueSize(),t)}}mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends Dn{constructor(t,e,n){super(t,e,n)}}Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=bo;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends Dn{constructor(t,e,n,i){super(t,e,n,i)}}gr.prototype.ValueTypeName="vector";class py{constructor(t="",e=-1,n=[],i=Y0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(gy(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=ly(l);l=Pf(l,1,h),c=Pf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new pr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(xt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Ut("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const m=[],g=[];vg(f,m,g,p),m.length!==0&&_.push(new u(d,m,g))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let x=0;x!==d[p].morphTargets.length;++x){const b=d[p];m.push(b.time),g.push(b.morphTarget===_?1:0)}i.push(new pr(".morphTargetInfluence["+_+"]",m,g))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(gr,f+".position",d,"pos",i),n(mr,f+".quaternion",d,"rot",i),n(gr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function my(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pr;case"vector":case"vector2":case"vector3":case"vector4":return gr;case"color":return Mg;case"quaternion":return mr;case"bool":case"boolean":return Mr;case"string":return Sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function gy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=my(s.type);if(s.times===void 0){const e=[],n=[];vg(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const mi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Lf(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Lf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Lf(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class _y{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yy=new _y;class Hi{constructor(t){this.manager=t!==void 0?t:yy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class xy extends Error{constructor(t,e){super(t),this.response=e}}class od extends Hi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=mi.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ci[t]!==void 0){ci[t].push({onLoad:e,onProgress:n,onError:i});return}ci[t]=[],ci[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&xt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ci[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){u.read().then(({done:b,value:v})=>{if(b)g.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,E=h.length;T<E;T++){const y=h[T];y.onProgress&&y.onProgress(A)}g.enqueue(v),x()}},b=>{g.error(b)})}}});return new Response(m)}else throw new xy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{mi.add(`file:${t}`,c);const h=ci[t];delete ci[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ci[t];if(h===void 0)throw this.manager.itemError(t),c;delete ci[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ks=new WeakMap;class Sg extends Hi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=mi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=ks.get(o);u===void 0&&(u=[],ks.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=wo("img");function l(){h(),e&&e(this);const u=ks.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ks.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),mi.remove(`image:${t}`);const d=ks.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}ks.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),mi.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class vy extends Hi{constructor(t){super(t)}load(t,e,n,i){const r=new sd;r.colorSpace=we;const o=new Sg(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class bg extends Hi{constructor(t){super(t)}load(t,e,n,i){const r=new Pe,o=new Sg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class El extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const uc=new Dt,Bf=new L,Df=new L;class ad{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bf),Df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Df),e.updateMatrixWorld(),uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===To||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oa=new L,aa=new Bn,Nn=new L;class Eg extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,aa,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(oa,aa,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new L,Uf=new Wt,Nf=new Wt;class $e extends Eg{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,Uf,Nf),e.subVectors(Nf,Uf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class My extends ad{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=dr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sy extends El{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new My}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class by extends ad{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}}class Ey extends El{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new by}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Tl extends Eg{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ty extends ad{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wy extends El{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Ty}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Ay extends El{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lo{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const dc=new WeakMap;class Cy extends Hi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&xt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&xt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=mi.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{if(dc.has(o)===!0)i&&i(dc.get(o)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(c),r.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),dc.set(l,c),mi.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});mi.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let la;class Tg{static getContext(){return la===void 0&&(la=new(window.AudioContext||window.webkitAudioContext)),la}static setContext(t){la=t}}class Ry extends Hi{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new od(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0);Tg.getContext().decodeAudioData(c,function(u){e(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):Ut(l),r.manager.itemError(t)}}}const Fs=-90,Os=1;class Iy extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(Fs,Os,t,e);i.layers=this.layers,this.add(i);const r=new $e(Fs,Os,t,e);r.layers=this.layers,this.add(r);const o=new $e(Fs,Os,t,e);o.layers=this.layers,this.add(o);const a=new $e(Fs,Os,t,e);a.layers=this.layers,this.add(a);const l=new $e(Fs,Os,t,e);l.layers=this.layers,this.add(l);const c=new $e(Fs,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Py extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ly{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=By.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function By(){this._document.hidden===!1&&this.reset()}const Ki=new L,fc=new Bn,Dy=new L,Zi=new L,ji=new L;class Uy extends ye{constructor(){super(),this.type="AudioListener",this.context=Tg.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Ly}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ki,fc,Dy),Zi.set(0,0,-1).applyQuaternion(fc),ji.set(0,1,0).applyQuaternion(fc),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ki.x,n),e.positionY.linearRampToValueAtTime(Ki.y,n),e.positionZ.linearRampToValueAtTime(Ki.z,n),e.forwardX.linearRampToValueAtTime(Zi.x,n),e.forwardY.linearRampToValueAtTime(Zi.y,n),e.forwardZ.linearRampToValueAtTime(Zi.z,n),e.upX.linearRampToValueAtTime(ji.x,n),e.upY.linearRampToValueAtTime(ji.y,n),e.upZ.linearRampToValueAtTime(ji.z,n)}else e.setPosition(Ki.x,Ki.y,Ki.z),e.setOrientation(Zi.x,Zi.y,Zi.z,ji.x,ji.y,ji.z)}}class Ny extends ye{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){xt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(xt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(xt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const ld="\\[\\]\\.:\\/",ky=new RegExp("["+ld+"]","g"),cd="[^"+ld+"]",Fy="[^"+ld.replace("\\.","")+"]",Oy=/((?:WC+[\/:])*)/.source.replace("WC",cd),zy=/(WCOD+)?/.source.replace("WCOD",Fy),Vy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cd),Hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cd),Gy=new RegExp("^"+Oy+zy+Vy+Hy+"$"),Wy=["material","materials","bones","map"];class Xy{constructor(t,e,n){const i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class le{constructor(t,e,n){this.path=e,this.parsedPath=n||le.parseTrackName(e),this.node=le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new le.Composite(t,e,n):new le(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ky,"")}static parseTrackName(t){const e=Gy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Wy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=le.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}le.Composite=Xy;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hi{constructor(t,e,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}function kf(s,t,e,n){const i=qy(n);switch(e){case og:return s*t;case Xu:return s*t/i.components*i.byteLength;case qu:return s*t/i.components*i.byteLength;case ur:return s*t*2/i.components*i.byteLength;case $u:return s*t*2/i.components*i.byteLength;case ag:return s*t*3/i.components*i.byteLength;case vn:return s*t*4/i.components*i.byteLength;case Yu:return s*t*4/i.components*i.byteLength;case Fa:case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case za:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ch:case uh:return Math.max(s,16)*Math.max(t,8)/4;case lh:case hh:return Math.max(s,8)*Math.max(t,8)/2;case dh:case fh:case mh:case gh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ph:case _h:case yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case bh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Th:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Bh:case Dh:case Uh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Nh:case kh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fh:case Oh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qy(s){switch(s){case dn:case ng:return{byteLength:1,components:1};case Mo:case ig:case yi:return{byteLength:2,components:1};case Gu:case Wu:return{byteLength:2,components:4};case Jn:case Hu:case xn:return{byteLength:4,components:1};case sg:case rg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wg(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $y(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
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
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tx=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
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
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ax=`#ifdef USE_IRIDESCENCE
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
#endif`,lx=`#ifdef USE_BUMPMAP
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_x=`#define PI 3.141592653589793
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
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xx=`vec3 transformedNormal = objectNormal;
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
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
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
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ox=`uniform bool receiveShadow;
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
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
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
#endif`,qx=`uniform sampler2D dfgLUT;
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
}`,$x=`
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iv=`#if defined( USE_POINTS_UV )
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
#endif`,sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`#ifdef USE_MORPHTARGETS
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
#endif`,hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gv=`#ifdef USE_NORMALMAP
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
#endif`,_v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lv=`float getShadowMask() {
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
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dv=`#ifdef USE_SKINNING
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
#endif`,Uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nv=`#ifdef USE_SKINNING
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
#endif`,kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Hv=`#ifdef USE_TRANSMISSION
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yv=`uniform sampler2D t2D;
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
}`,eM=`#define DISTANCE
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
}`,nM=`#define DISTANCE
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`uniform float scale;
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,uM=`#define MATCAP
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
}`,dM=`#define MATCAP
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
}`,fM=`#define NORMAL
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
}`,pM=`#define NORMAL
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
}`,mM=`#define PHONG
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
}`,gM=`#define PHONG
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
}`,_M=`#define STANDARD
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
}`,yM=`#define STANDARD
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
}`,xM=`#define TOON
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
}`,vM=`#define TOON
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
}`,MM=`uniform float size;
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
}`,SM=`uniform vec3 diffuse;
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
}`,bM=`#include <common>
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
}`,EM=`uniform vec3 color;
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
}`,TM=`uniform float rotation;
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
}`,wM=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Yy,alphahash_pars_fragment:Ky,alphamap_fragment:Zy,alphamap_pars_fragment:jy,alphatest_fragment:Jy,alphatest_pars_fragment:Qy,aomap_fragment:tx,aomap_pars_fragment:ex,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:sx,beginnormal_vertex:rx,bsdfs:ox,iridescence_fragment:ax,bumpmap_pars_fragment:lx,clipping_planes_fragment:cx,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:dx,color_fragment:fx,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:_x,cube_uv_reflection_fragment:yx,defaultnormal_vertex:xx,displacementmap_pars_vertex:vx,displacementmap_vertex:Mx,emissivemap_fragment:Sx,emissivemap_pars_fragment:bx,colorspace_fragment:Ex,colorspace_pars_fragment:Tx,envmap_fragment:wx,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Cx,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:zx,envmap_vertex:Ix,fog_vertex:Px,fog_pars_vertex:Lx,fog_fragment:Bx,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:Nx,lights_lambert_fragment:kx,lights_lambert_pars_fragment:Fx,lights_pars_begin:Ox,lights_toon_fragment:Vx,lights_toon_pars_fragment:Hx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:qx,lights_fragment_begin:$x,lights_fragment_maps:Yx,lights_fragment_end:Kx,logdepthbuf_fragment:Zx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Jx,logdepthbuf_vertex:Qx,map_fragment:tv,map_pars_fragment:ev,map_particle_fragment:nv,map_particle_pars_fragment:iv,metalnessmap_fragment:sv,metalnessmap_pars_fragment:rv,morphinstance_vertex:ov,morphcolor_vertex:av,morphnormal_vertex:lv,morphtarget_pars_vertex:cv,morphtarget_vertex:hv,normal_fragment_begin:uv,normal_fragment_maps:dv,normal_pars_fragment:fv,normal_pars_vertex:pv,normal_vertex:mv,normalmap_pars_fragment:gv,clearcoat_normal_fragment_begin:_v,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:xv,iridescence_pars_fragment:vv,opaque_fragment:Mv,packing:Sv,premultiplied_alpha_fragment:bv,project_vertex:Ev,dithering_fragment:Tv,dithering_pars_fragment:wv,roughnessmap_fragment:Av,roughnessmap_pars_fragment:Cv,shadowmap_pars_fragment:Rv,shadowmap_pars_vertex:Iv,shadowmap_vertex:Pv,shadowmask_pars_fragment:Lv,skinbase_vertex:Bv,skinning_pars_vertex:Dv,skinning_vertex:Uv,skinnormal_vertex:Nv,specularmap_fragment:kv,specularmap_pars_fragment:Fv,tonemapping_fragment:Ov,tonemapping_pars_fragment:zv,transmission_fragment:Vv,transmission_pars_fragment:Hv,uv_pars_fragment:Gv,uv_pars_vertex:Wv,uv_vertex:Xv,worldpos_vertex:qv,background_vert:$v,background_frag:Yv,backgroundCube_vert:Kv,backgroundCube_frag:Zv,cube_vert:jv,cube_frag:Jv,depth_vert:Qv,depth_frag:tM,distance_vert:eM,distance_frag:nM,equirect_vert:iM,equirect_frag:sM,linedashed_vert:rM,linedashed_frag:oM,meshbasic_vert:aM,meshbasic_frag:lM,meshlambert_vert:cM,meshlambert_frag:hM,meshmatcap_vert:uM,meshmatcap_frag:dM,meshnormal_vert:fM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:_M,meshphysical_frag:yM,meshtoon_vert:xM,meshtoon_frag:vM,points_vert:MM,points_frag:SM,shadow_vert:bM,shadow_frag:EM,sprite_vert:TM,sprite_frag:wM},ft={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},me={basic:{uniforms:Je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Je([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Je([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new ut(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Je([ft.points,ft.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Je([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Je([ft.common,ft.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Je([ft.sprite,ft.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Je([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Je([ft.lights,ft.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};me.physical={uniforms:Je([me.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const ca={r:0,b:0,g:0},Ji=new Sn,AM=new Dt;function CM(s,t,e,n,i,r){const o=new ut(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const v=x.backgroundBlurriness>0;b=t.get(b,v)}return b}function p(x){let b=!1;const v=f(x);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(x,b){const v=f(b);v&&(v.isCubeTexture||v.mapping===Ml)?(c===void 0&&(c=new Me(new pi(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:fr(me.backgroundCube.uniforms),vertexShader:me.backgroundCube.vertexShader,fragmentShader:me.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ji.copy(b.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AM.makeRotationFromEuler(Ji)),c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==oe,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Me(new xr(2,2),new He({name:"BackgroundMaterial",uniforms:fr(me.background.uniforms),vertexShader:me.background.vertexShader,fragmentShader:me.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,b){x.getRGB(ca,xg(s)),e.buffers.color.setClear(ca.r,ca.g,ca.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:_,dispose:g}}function RM(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(R,O,z,P,U){let V=!1;const N=u(R,P,z,O);r!==N&&(r=N,c(r.object)),V=f(R,P,z,U),V&&p(R,P,z,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(R,O,z,P),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,O,z,P){const U=P.wireframe===!0;let V=n[O.id];V===void 0&&(V={},n[O.id]=V);const N=R.isInstancedMesh===!0?R.id:0;let q=V[N];q===void 0&&(q={},V[N]=q);let j=q[z.id];j===void 0&&(j={},q[z.id]=j);let it=j[U];return it===void 0&&(it=d(l()),j[U]=it),it}function d(R){const O=[],z=[],P=[];for(let U=0;U<e;U++)O[U]=0,z[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:P,object:R,attributes:{},index:null}}function f(R,O,z,P){const U=r.attributes,V=O.attributes;let N=0;const q=z.getAttributes();for(const j in q)if(q[j].location>=0){const at=U[j];let dt=V[j];if(dt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor)),at===void 0||at.attribute!==dt||dt&&at.data!==dt.data)return!0;N++}return r.attributesNum!==N||r.index!==P}function p(R,O,z,P){const U={},V=O.attributes;let N=0;const q=z.getAttributes();for(const j in q)if(q[j].location>=0){let at=V[j];at===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(at=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(at=R.instanceColor));const dt={};dt.attribute=at,at&&at.data&&(dt.data=at.data),U[j]=dt,N++}r.attributes=U,r.attributesNum=N,r.index=P}function _(){const R=r.newAttributes;for(let O=0,z=R.length;O<z;O++)R[O]=0}function m(R){g(R,0)}function g(R,O){const z=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;z[R]=1,P[R]===0&&(s.enableVertexAttribArray(R),P[R]=1),U[R]!==O&&(s.vertexAttribDivisor(R,O),U[R]=O)}function x(){const R=r.newAttributes,O=r.enabledAttributes;for(let z=0,P=O.length;z<P;z++)O[z]!==R[z]&&(s.disableVertexAttribArray(z),O[z]=0)}function b(R,O,z,P,U,V,N){N===!0?s.vertexAttribIPointer(R,O,z,U,V):s.vertexAttribPointer(R,O,z,P,U,V)}function v(R,O,z,P){_();const U=P.attributes,V=z.getAttributes(),N=O.defaultAttributeValues;for(const q in V){const j=V[q];if(j.location>=0){let it=U[q];if(it===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(it=R.instanceColor)),it!==void 0){const at=it.normalized,dt=it.itemSize,At=t.get(it);if(At===void 0)continue;const te=At.buffer,kt=At.type,$=At.bytesPerElement,Q=kt===s.INT||kt===s.UNSIGNED_INT||it.gpuType===Hu;if(it.isInterleavedBufferAttribute){const st=it.data,Lt=st.stride,Ct=it.offset;if(st.isInstancedInterleavedBuffer){for(let Bt=0;Bt<j.locationSize;Bt++)g(j.location+Bt,st.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Bt=0;Bt<j.locationSize;Bt++)m(j.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let Bt=0;Bt<j.locationSize;Bt++)b(j.location+Bt,dt/j.locationSize,kt,at,Lt*$,(Ct+dt/j.locationSize*Bt)*$,Q)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<j.locationSize;st++)g(j.location+st,it.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<j.locationSize;st++)m(j.location+st);s.bindBuffer(s.ARRAY_BUFFER,te);for(let st=0;st<j.locationSize;st++)b(j.location+st,dt/j.locationSize,kt,at,dt*$,dt/j.locationSize*st*$,Q)}}else if(N!==void 0){const at=N[q];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(j.location,at);break;case 3:s.vertexAttrib3fv(j.location,at);break;case 4:s.vertexAttrib4fv(j.location,at);break;default:s.vertexAttrib1fv(j.location,at)}}}}x()}function A(){S();for(const R in n){const O=n[R];for(const z in O){const P=O[z];for(const U in P){const V=P[U];for(const N in V)h(V[N].object),delete V[N];delete P[U]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;const O=n[R.id];for(const z in O){const P=O[z];for(const U in P){const V=P[U];for(const N in V)h(V[N].object),delete V[N];delete P[U]}}delete n[R.id]}function E(R){for(const O in n){const z=n[O];for(const P in z){const U=z[P];if(U[R.id]===void 0)continue;const V=U[R.id];for(const N in V)h(V[N].object),delete V[N];delete U[R.id]}}}function y(R){for(const O in n){const z=n[O],P=R.isInstancedMesh===!0?R.id:0,U=z[P];if(U!==void 0){for(const V in U){const N=U[V];for(const q in N)h(N[q].object),delete N[q];delete U[V]}delete z[P],Object.keys(z).length===0&&delete n[O]}}}function S(){B(),o=!0,r!==i&&(r=i,c(r.object))}function B(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function IM(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PM(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==vn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const y=E===yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==dn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==xn&&!y)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:v,maxSamples:A,samples:T}}function LM(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new hs,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,b=x*4;let v=g.clippingState||null;l.value=v,v=h(p,d,b,f);for(let A=0;A!==b;++A)v[A]=e[A];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,v=f;b!==_;++b,v+=4)o.copy(u[b]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const ki=4,Ff=[.125,.215,.35,.446,.526,.582],ps=20,BM=256,Br=new Tl,Of=new ut;let pc=null,mc=0,gc=0,_c=!1;const DM=new L;class zf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=DM}=r;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=_c,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:yi,format:vn,colorSpace:en,depthBuffer:!1},i=Vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UM(r)),this._blurMaterial=kM(r,t,e),this._ggxMaterial=NM(r,t,e)}return i}_compileMaterial(t){const e=new Me(new Le,t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,n,i,r){const l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Of),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new pi,new Yn({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,g=!0):(m.color.copy(Of),g=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const A=this._cubeSize;zs(i,v*A,b>2?A:0,A,A),u.setRenderTarget(i),g&&u.render(_,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ys||t.mapping===cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Br)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-ki?n-p+ki:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,zs(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(a,Br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,zs(t,m,g,3*_,2*_),i.setRenderTarget(t),i.render(a,Br)}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ps-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):ps;m>ps&&xt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);const g=[];let x=0;for(let E=0;E<ps;++E){const y=E/_,S=Math.exp(-y*y/2);g.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<g.length;E++)g[E]=g[E]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=p,d.mipInt.value=b-n;const v=this._sizeLods[i],A=3*v*(i>b-ki?i-b+ki:0),T=4*(this._cubeSize-v);zs(e,A,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Br)}}function UM(s){const t=[],e=[],n=[];let i=s;const r=s-ki+1+Ff.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ki?l=Ff[o-s+ki-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*f),b=new Float32Array(m*p*f),v=new Float32Array(g*p*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,y=T>2?0:-1,S=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];x.set(S,_*p*T),b.set(d,m*p*T);const B=[T,T,T,T,T,T];v.set(B,g*p*T)}const A=new Le;A.setAttribute("position",new Vt(x,_)),A.setAttribute("uv",new Vt(b,m)),A.setAttribute("faceIndex",new Vt(v,g)),n.push(new Me(A,null)),i>ki&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Vf(s,t,e){const n=new Zn(s,t,e);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function NM(s,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function kM(s,t,e){const n=new Float32Array(ps),i=new L(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Hf(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Gf(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}class Ag extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new sd(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pi(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:gi});r.uniforms.tEquirect.value=e;const o=new Me(i,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=Ie),new Iy(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function FM(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Nl||f===kl)if(t.has(d)){const p=t.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new Ag(p.height);return _.fromEquirectangularTexture(s,d),t.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===Nl||f===kl,_=f===ys||f===cr;if(p||_){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new zf(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return p&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new zf(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Nl?d.mapping=ys:f===kl&&(d.mapping=cr),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function OM(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ja("WebGLRenderer: "+n+" extension not supported."),i}}}function zM(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let b=0,v=x.length;b<v;b+=3){const A=x[b+0],T=x[b+1],E=x[b+2];d.push(A,T,T,E,E,A)}}else{const x=p.array;_=p.version;for(let b=0,v=x.length/3-1;b<v;b+=3){const A=b+0,T=b+1,E=b+2;d.push(A,T,T,E,E,A)}}const m=new(p.count>=65535?mg:pg)(d,1);m.version=_;const g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function VM(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function u(d,f,p,_){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x]*_[x];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function HM(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function GM(s,t,e){const n=new WeakMap,i=new _e;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*A*4*u),E=new ug(T,v,A,u);E.type=xn,E.needsUpdate=!0;const y=b*4;for(let B=0;B<u;B++){const R=m[B],O=g[B],z=x[B],P=v*A*4*B;for(let U=0;U<R.count;U++){const V=U*y;f===!0&&(i.fromBufferAttribute(R,U),T[P+V+0]=i.x,T[P+V+1]=i.y,T[P+V+2]=i.z,T[P+V+3]=0),p===!0&&(i.fromBufferAttribute(O,U),T[P+V+4]=i.x,T[P+V+5]=i.y,T[P+V+6]=i.z,T[P+V+7]=0),_===!0&&(i.fromBufferAttribute(z,U),T[P+V+8]=i.x,T[P+V+9]=i.y,T[P+V+10]=i.z,T[P+V+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new Wt(v,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function WM(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const XM={[$m]:"LINEAR_TONE_MAPPING",[Ym]:"REINHARD_TONE_MAPPING",[Km]:"CINEON_TONE_MAPPING",[Zm]:"ACES_FILMIC_TONE_MAPPING",[Jm]:"AGX_TONE_MAPPING",[Qm]:"NEUTRAL_TONE_MAPPING",[jm]:"CUSTOM_TONE_MAPPING"};function qM(s,t,e,n,i){const r=new Zn(t,e,{type:s,depthBuffer:n,stencilBuffer:i}),o=new Zn(t,e,{type:yi,depthBuffer:!1,stencilBuffer:!1}),a=new Le;a.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const l=new ry({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Me(a,l),h=new Tl(-1,1,1,-1,0,1);let u=null,d=null,f=!1,p,_=null,m=[],g=!1;this.setSize=function(x,b){r.setSize(x,b),o.setSize(x,b);for(let v=0;v<m.length;v++){const A=m[v];A.setSize&&A.setSize(x,b)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const b=r.width,v=r.height;for(let A=0;A<m.length;A++){const T=m[A];T.setSize&&T.setSize(b,v)}},this.begin=function(x,b){if(f||x.toneMapping===Kn&&m.length===0)return!1;if(_=b,b!==null){const v=b.width,A=b.height;(r.width!==v||r.height!==A)&&this.setSize(v,A)}return g===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=Kn,!0},this.hasRenderPass=function(){return g},this.end=function(x,b){x.toneMapping=p,f=!0;let v=r,A=o;for(let T=0;T<m.length;T++){const E=m[T];if(E.enabled!==!1&&(E.render(x,A,v,b),E.needsSwap!==!1)){const y=v;v=A,A=y}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},Qt.getTransfer(u)===oe&&(l.defines.SRGB_TRANSFER="");const T=XM[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(_),x.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Cg=new Pe,Wh=new Ao(1,1),Rg=new ug,Ig=new P_,Pg=new sd,Wf=[],Xf=[],qf=new Float32Array(16),$f=new Float32Array(9),Yf=new Float32Array(4);function br(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Wf[i];if(r===void 0&&(r=new Float32Array(i),Wf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Al(s,t){let e=Xf[t];e===void 0&&(e=new Int32Array(t),Xf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function $M(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function YM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function KM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function ZM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function jM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Be(e,n))return;Yf.set(n),s.uniformMatrix2fv(this.addr,!1,Yf),De(e,n)}}function JM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Be(e,n))return;$f.set(n),s.uniformMatrix3fv(this.addr,!1,$f),De(e,n)}}function QM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Be(e,n))return;qf.set(n),s.uniformMatrix4fv(this.addr,!1,qf),De(e,n)}}function tS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function eS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function nS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function iS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function sS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function oS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function aS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function lS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wh.compareFunction=e.isReversedDepthBuffer()?Zu:Ku,r=Wh):r=Cg,e.setTexture2D(t||r,i)}function cS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ig,i)}function hS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pg,i)}function uS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rg,i)}function dS(s){switch(s){case 5126:return $M;case 35664:return YM;case 35665:return KM;case 35666:return ZM;case 35674:return jM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return tS;case 35667:case 35671:return eS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return rS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return uS}}function fS(s,t){s.uniform1fv(this.addr,t)}function pS(s,t){const e=br(t,this.size,2);s.uniform2fv(this.addr,e)}function mS(s,t){const e=br(t,this.size,3);s.uniform3fv(this.addr,e)}function gS(s,t){const e=br(t,this.size,4);s.uniform4fv(this.addr,e)}function _S(s,t){const e=br(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function yS(s,t){const e=br(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function xS(s,t){const e=br(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function vS(s,t){s.uniform1iv(this.addr,t)}function MS(s,t){s.uniform2iv(this.addr,t)}function SS(s,t){s.uniform3iv(this.addr,t)}function bS(s,t){s.uniform4iv(this.addr,t)}function ES(s,t){s.uniform1uiv(this.addr,t)}function TS(s,t){s.uniform2uiv(this.addr,t)}function wS(s,t){s.uniform3uiv(this.addr,t)}function AS(s,t){s.uniform4uiv(this.addr,t)}function CS(s,t,e){const n=this.cache,i=t.length,r=Al(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),De(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Wh:o=Cg;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function RS(s,t,e){const n=this.cache,i=t.length,r=Al(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ig,r[o])}function IS(s,t,e){const n=this.cache,i=t.length,r=Al(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Pg,r[o])}function PS(s,t,e){const n=this.cache,i=t.length,r=Al(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Rg,r[o])}function LS(s){switch(s){case 5126:return fS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return yS;case 35676:return xS;case 5124:case 35670:return vS;case 35667:case 35671:return MS;case 35668:case 35672:return SS;case 35669:case 35673:return bS;case 5125:return ES;case 36294:return TS;case 36295:return wS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return PS}}class BS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dS(e.type)}}class DS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LS(e.type)}}class US{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function Kf(s,t){s.seq.push(t),s.map[t.id]=t}function NS(s,t,e){const n=s.name,i=n.length;for(yc.lastIndex=0;;){const r=yc.exec(n),o=yc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kf(e,c===void 0?new BS(a,s,t):new DS(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new US(a),Kf(e,u)),e=u}}}class Ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);NS(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Zf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const kS=37297;let FS=0;function OS(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const jf=new zt;function zS(s){Qt._getMatrix(jf,Qt.workingColorSpace,s);const t=`mat3( ${jf.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case Za:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Jf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+OS(s.getShaderSource(t),a)}else return r}function VS(s,t){const e=zS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const HS={[$m]:"Linear",[Ym]:"Reinhard",[Km]:"Cineon",[Zm]:"ACESFilmic",[Jm]:"AgX",[Qm]:"Neutral",[jm]:"Custom"};function GS(s,t){const e=HS[t];return e===void 0?(xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ha=new L;function WS(){Qt.getLuminanceCoefficients(ha);const s=ha.x.toFixed(4),t=ha.y.toFixed(4),e=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function qS(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $S(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function io(s){return s!==""}function Qf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(s){return s.replace(YS,ZS)}const KS=new Map;function ZS(s,t){let e=qt[t];if(e===void 0){const n=KS.get(t);if(n!==void 0)e=qt[n],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xh(e)}const jS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(s){return s.replace(jS,JS)}function JS(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function np(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const QS={[Na]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function tb(s){return QS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eb={[ys]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[Ml]:"ENVMAP_TYPE_CUBE_UV"};function nb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":eb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ib={[cr]:"ENVMAP_MODE_REFRACTION"};function sb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ib[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rb={[qm]:"ENVMAP_BLENDING_MULTIPLY",[X0]:"ENVMAP_BLENDING_MIX",[q0]:"ENVMAP_BLENDING_ADD"};function ob(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":rb[s.combine]||"ENVMAP_BLENDING_NONE"}function ab(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function lb(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=tb(e),c=nb(e),h=sb(e),u=ob(e),d=ab(e),f=XS(e),p=qS(r),_=i.createProgram();let m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(io).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(io).join(`
`),g.length>0&&(g+=`
`)):(m=[np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),g=[np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?GS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,VS("linearToOutputTexel",e.outputColorSpace),WS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),o=Xh(o),o=Qf(o,e),o=tp(o,e),a=Xh(a),a=Qf(a,e),a=tp(a,e),o=ep(o),a=ep(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Oi?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=x+m+o,v=x+g+a,A=Zf(i,i.VERTEX_SHADER,b),T=Zf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(R){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(A)||"",P=i.getShaderInfoLog(T)||"",U=O.trim(),V=z.trim(),N=P.trim();let q=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,T);else{const it=Jf(i,A,"vertex"),at=Jf(i,T,"fragment");Ut("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+it+`
`+at)}else U!==""?xt("WebGLProgram: Program Info Log:",U):(V===""||N==="")&&(j=!1);j&&(R.diagnostics={runnable:q,programLog:U,vertexShader:{log:V,prefix:m},fragmentShader:{log:N,prefix:g}})}i.deleteShader(A),i.deleteShader(T),y=new Ha(i,_),S=$S(i,_)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(_,kS)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=FS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let cb=0;class hb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ub(t),e.set(t,n)),n}}class ub{constructor(t){this.id=cb++,this.code=t,this.usedTimes=0}}function db(s,t,e,n,i,r){const o=new dg,a=new hb,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,S,B,R,O){const z=R.fog,P=O.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=t.get(y.envMap||U,V),q=N&&N.mapping===Ml?N.image.height:null,j=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&xt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const it=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,at=it!==void 0?it.length:0;let dt=0;P.morphAttributes.position!==void 0&&(dt=1),P.morphAttributes.normal!==void 0&&(dt=2),P.morphAttributes.color!==void 0&&(dt=3);let At,te,kt,$;if(j){const re=me[j];At=re.vertexShader,te=re.fragmentShader}else At=y.vertexShader,te=y.fragmentShader,a.update(y),kt=a.getVertexShaderID(y),$=a.getFragmentShaderID(y);const Q=s.getRenderTarget(),st=s.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,Ct=O.isBatchedMesh===!0,Bt=!!y.map,xe=!!y.matcap,Ft=!!N,ie=!!y.aoMap,se=!!y.lightMap,Xt=!!y.bumpMap,ge=!!y.normalMap,D=!!y.displacementMap,be=!!y.emissiveMap,ee=!!y.metalnessMap,he=!!y.roughnessMap,vt=y.anisotropy>0,I=y.clearcoat>0,M=y.dispersion>0,k=y.iridescence>0,Z=y.sheen>0,tt=y.transmission>0,K=vt&&!!y.anisotropyMap,Mt=I&&!!y.clearcoatMap,lt=I&&!!y.clearcoatNormalMap,Pt=I&&!!y.clearcoatRoughnessMap,Nt=k&&!!y.iridescenceMap,et=k&&!!y.iridescenceThicknessMap,rt=Z&&!!y.sheenColorMap,St=Z&&!!y.sheenRoughnessMap,Et=!!y.specularMap,gt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,F=tt&&!!y.transmissionMap,ct=tt&&!!y.thicknessMap,ot=!!y.gradientMap,yt=!!y.alphaMap,nt=y.alphaTest>0,Y=!!y.alphaHash,bt=!!y.extensions;let Ot=Kn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const pe={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:At,fragmentShader:te,defines:y.defines,customVertexShaderID:kt,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ct,batchingColor:Ct&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:en,alphaToCoverage:!!y.alphaToCoverage,map:Bt,matcap:xe,envMap:Ft,envMapMode:Ft&&N.mapping,envMapCubeUVHeight:q,aoMap:ie,lightMap:se,bumpMap:Xt,normalMap:ge,displacementMap:D,emissiveMap:be,normalMapObjectSpace:ge&&y.normalMapType===j0,normalMapTangentSpace:ge&&y.normalMapType===cg,metalnessMap:ee,roughnessMap:he,anisotropy:vt,anisotropyMap:K,clearcoat:I,clearcoatMap:Mt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Pt,dispersion:M,iridescence:k,iridescenceMap:Nt,iridescenceThicknessMap:et,sheen:Z,sheenColorMap:rt,sheenRoughnessMap:St,specularMap:Et,specularColorMap:gt,specularIntensityMap:Yt,transmission:tt,transmissionMap:F,thicknessMap:ct,gradientMap:ot,opaque:y.transparent===!1&&y.blending===er&&y.alphaToCoverage===!1,alphaMap:yt,alphaTest:nt,alphaHash:Y,combine:y.combine,mapUv:Bt&&p(y.map.channel),aoMapUv:ie&&p(y.aoMap.channel),lightMapUv:se&&p(y.lightMap.channel),bumpMapUv:Xt&&p(y.bumpMap.channel),normalMapUv:ge&&p(y.normalMap.channel),displacementMapUv:D&&p(y.displacementMap.channel),emissiveMapUv:be&&p(y.emissiveMap.channel),metalnessMapUv:ee&&p(y.metalnessMap.channel),roughnessMapUv:he&&p(y.roughnessMap.channel),anisotropyMapUv:K&&p(y.anisotropyMap.channel),clearcoatMapUv:Mt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(y.sheenRoughnessMap.channel),specularMapUv:Et&&p(y.specularMap.channel),specularColorMapUv:gt&&p(y.specularColorMap.channel),specularIntensityMapUv:Yt&&p(y.specularIntensityMap.channel),transmissionMapUv:F&&p(y.transmissionMap.channel),thicknessMapUv:ct&&p(y.thicknessMap.channel),alphaMapUv:yt&&p(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ge||vt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(Bt||yt),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&ge===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:st,skinning:O.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:dt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Bt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===oe,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===Ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:bt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&y.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function m(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)S.push(B),S.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(g(S,y),x(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function g(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function b(y){const S=f[y.type];let B;if(S){const R=me[S];B=Qn.clone(R.uniforms)}else B=y.uniforms;return B}function v(y,S){let B=h.get(S);return B!==void 0?++B.usedTimes:(B=new lb(s,S,y,i),c.push(B),h.set(S,B)),B}function A(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:v,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:E}}function fb(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function pb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ip(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function sp(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,m,g){let x=s[t];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},s[t]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=o(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=m,x.group=g),t++,x}function l(d,f,p,_,m,g){const x=a(d,f,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):e.push(x)}function c(d,f,p,_,m,g){const x=a(d,f,p,_,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):e.unshift(x)}function h(d,f){e.length>1&&e.sort(d||pb),n.length>1&&n.sort(f||ip),i.length>1&&i.sort(f||ip)}function u(){for(let d=t,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function mb(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new sp,s.set(n,[o])):i>=r.length?(o=new sp,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function gb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ut};break;case"SpotLight":e={position:new L,direction:new L,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function _b(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let yb=0;function xb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function vb(s){const t=new gb,e=_b(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Dt,o=new Dt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,x=0,b=0,v=0,A=0,T=0,E=0;c.sort(xb);for(let S=0,B=c.length;S<B;S++){const R=c[S],O=R.color,z=R.intensity,P=R.distance;let U=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ur?U=R.shadow.map.texture:U=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],z);E++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const N=R.shadow,q=e.get(R);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=V,f++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(O).multiplyScalar(z),V.distance=P,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[_]=V;const N=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,N.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=N.matrix,R.castShadow){const q=e.get(R);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=U,v++}_++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(O).multiplyScalar(z),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const N=R.shadow,q=e.get(R);q.shadowIntensity=N.intensity,q.shadowBias=N.bias,q.shadowNormalBias=N.normalBias,q.shadowRadius=N.radius,q.shadowMapSize=N.mapSize,q.shadowCameraNear=N.camera.near,q.shadowCameraFar=N.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=R.shadow.matrix,b++}n.point[p]=V,p++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(z),V.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[g]=V,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==x||y.numPointShadows!==b||y.numSpotShadows!==v||y.numSpotMaps!==A||y.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,y.directionalLength=f,y.pointLength=p,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=x,y.numPointShadows=b,y.numSpotShadows=v,y.numSpotMaps=A,y.numLightProbes=E,n.version=yb++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const b=c[g];if(b.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function rp(s){const t=new vb(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Mb(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new rp(s),t.set(i,[a])):r>=o.length?(a=new rp(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`,Eb=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Tb=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],op=new Dt,Dr=new L,xc=new L;function wb(s,t,e){let n=new bl;const i=new Wt,r=new Wt,o=new _e,a=new oy,l=new ay,c={},h=e.maxTextureSize,u={[fn]:Ze,[Ze]:fn,[Ke]:Ke},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Sb,fragmentShader:bb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Le;p.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Me(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let g=this.type;this.render=function(T,E,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===w0&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Na);const S=s.getRenderTarget(),B=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),O=s.state;O.setBlending(gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=g!==this.type;z&&E.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=T.length;P<U;P++){const V=T[P],N=V.shadow;if(N===void 0){xt("WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const q=N.getFrameExtents();i.multiply(q),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,N.mapSize.y=r.y));const j=s.state.buffers.depth.getReversed();if(N.camera._reversedDepth=j,N.map===null||z===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===eo){if(V.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Zn(i.x,i.y,{format:ur,type:yi,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),N.map.texture.name=V.name+".shadowMap",N.map.depthTexture=new Ao(i.x,i.y,xn),N.map.depthTexture.name=V.name+".shadowMapDepth",N.map.depthTexture.format=xi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ae,N.map.depthTexture.magFilter=Ae}else V.isPointLight?(N.map=new Ag(i.x),N.map.depthTexture=new ey(i.x,Jn)):(N.map=new Zn(i.x,i.y),N.map.depthTexture=new Ao(i.x,i.y,Jn)),N.map.depthTexture.name=V.name+".shadowMap",N.map.depthTexture.format=xi,this.type===Na?(N.map.depthTexture.compareFunction=j?Zu:Ku,N.map.depthTexture.minFilter=Ie,N.map.depthTexture.magFilter=Ie):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ae,N.map.depthTexture.magFilter=Ae);N.camera.updateProjectionMatrix()}const it=N.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<it;at++){if(N.map.isWebGLCubeRenderTarget)s.setRenderTarget(N.map,at),s.clear();else{at===0&&(s.setRenderTarget(N.map),s.clear());const dt=N.getViewport(at);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),O.viewport(o)}if(V.isPointLight){const dt=N.camera,At=N.matrix,te=V.distance||dt.far;te!==dt.far&&(dt.far=te,dt.updateProjectionMatrix()),Dr.setFromMatrixPosition(V.matrixWorld),dt.position.copy(Dr),xc.copy(dt.position),xc.add(Eb[at]),dt.up.copy(Tb[at]),dt.lookAt(xc),dt.updateMatrixWorld(),At.makeTranslation(-Dr.x,-Dr.y,-Dr.z),op.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),N._frustum.setFromProjectionMatrix(op,dt.coordinateSystem,dt.reversedDepth)}else N.updateMatrices(V);n=N.getFrustum(),v(E,y,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===eo&&x(N,y),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(S,B,R)};function x(T,E){const y=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zn(i.x,i.y,{format:ur,type:yi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,y,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,y,f,_,null)}function b(T,E,y,S){let B=null;const R=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)B=R;else if(B=y.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const O=B.uuid,z=E.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let U=P[z];U===void 0&&(U=B.clone(),P[z]=U,E.addEventListener("dispose",A)),B=U}if(B.visible=E.visible,B.wireframe=E.wireframe,S===eo?B.side=E.shadowSide!==null?E.shadowSide:E.side:B.side=E.shadowSide!==null?E.shadowSide:u[E.side],B.alphaMap=E.alphaMap,B.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,B.map=E.map,B.clipShadows=E.clipShadows,B.clippingPlanes=E.clippingPlanes,B.clipIntersection=E.clipIntersection,B.displacementMap=E.displacementMap,B.displacementScale=E.displacementScale,B.displacementBias=E.displacementBias,B.wireframeLinewidth=E.wireframeLinewidth,B.linewidth=E.linewidth,y.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const O=s.properties.get(B);O.light=y}return B}function v(T,E,y,S,B){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===eo)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const z=t.update(T),P=T.material;if(Array.isArray(P)){const U=z.groups;for(let V=0,N=U.length;V<N;V++){const q=U[V],j=P[q.materialIndex];if(j&&j.visible){const it=b(T,j,S,B);T.onBeforeShadow(s,T,E,y,z,it,q),s.renderBufferDirect(y,null,z,it,T,q),T.onAfterShadow(s,T,E,y,z,it,q)}}}else if(P.visible){const U=b(T,P,S,B);T.onBeforeShadow(s,T,E,y,z,U,null),s.renderBufferDirect(y,null,z,U,T,null),T.onAfterShadow(s,T,E,y,z,U,null)}}const O=T.children;for(let z=0,P=O.length;z<P;z++)v(O[z],E,y,S,B)}function A(T){T.target.removeEventListener("dispose",A);for(const y in c){const S=c[y],B=T.target.uuid;B in S&&(S[B].dispose(),delete S[B])}}}function Ab(s,t){function e(){let F=!1;const ct=new _e;let ot=null;const yt=new _e(0,0,0,0);return{setMask:function(nt){ot!==nt&&!F&&(s.colorMask(nt,nt,nt,nt),ot=nt)},setLocked:function(nt){F=nt},setClear:function(nt,Y,bt,Ot,pe){pe===!0&&(nt*=Ot,Y*=Ot,bt*=Ot),ct.set(nt,Y,bt,Ot),yt.equals(ct)===!1&&(s.clearColor(nt,Y,bt,Ot),yt.copy(ct))},reset:function(){F=!1,ot=null,yt.set(-1,0,0,0)}}}function n(){let F=!1,ct=!1,ot=null,yt=null,nt=null;return{setReversed:function(Y){if(ct!==Y){const bt=t.get("EXT_clip_control");Y?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),ct=Y;const Ot=nt;nt=null,this.setClear(Ot)}},getReversed:function(){return ct},setTest:function(Y){Y?Q(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(Y){ot!==Y&&!F&&(s.depthMask(Y),ot=Y)},setFunc:function(Y){if(ct&&(Y=l_[Y]),yt!==Y){switch(Y){case eh:s.depthFunc(s.NEVER);break;case nh:s.depthFunc(s.ALWAYS);break;case ih:s.depthFunc(s.LESS);break;case lr:s.depthFunc(s.LEQUAL);break;case sh:s.depthFunc(s.EQUAL);break;case rh:s.depthFunc(s.GEQUAL);break;case oh:s.depthFunc(s.GREATER);break;case ah:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Y}},setLocked:function(Y){F=Y},setClear:function(Y){nt!==Y&&(nt=Y,ct&&(Y=1-Y),s.clearDepth(Y))},reset:function(){F=!1,ot=null,yt=null,nt=null,ct=!1}}}function i(){let F=!1,ct=null,ot=null,yt=null,nt=null,Y=null,bt=null,Ot=null,pe=null;return{setTest:function(re){F||(re?Q(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(re){ct!==re&&!F&&(s.stencilMask(re),ct=re)},setFunc:function(re,ni,ii){(ot!==re||yt!==ni||nt!==ii)&&(s.stencilFunc(re,ni,ii),ot=re,yt=ni,nt=ii)},setOp:function(re,ni,ii){(Y!==re||bt!==ni||Ot!==ii)&&(s.stencilOp(re,ni,ii),Y=re,bt=ni,Ot=ii)},setLocked:function(re){F=re},setClear:function(re){pe!==re&&(s.clearStencil(re),pe=re)},reset:function(){F=!1,ct=null,ot=null,yt=null,nt=null,Y=null,bt=null,Ot=null,pe=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,b=null,v=null,A=null,T=null,E=new ut(0,0,0),y=0,S=!1,B=null,R=null,O=null,z=null,P=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=N>=1):q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=N>=2);let j=null,it={};const at=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),At=new _e().fromArray(at),te=new _e().fromArray(dt);function kt(F,ct,ot,yt){const nt=new Uint8Array(4),Y=s.createTexture();s.bindTexture(F,Y),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let bt=0;bt<ot;bt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D(ct+bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return Y}const $={};$[s.TEXTURE_2D]=kt(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(lr),Xt(!1),ge(Hd),Q(s.CULL_FACE),ie(gi);function Q(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function st(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Lt(F,ct){return u[F]!==ct?(s.bindFramebuffer(F,ct),u[F]=ct,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ct(F,ct){let ot=f,yt=!1;if(F){ot=d.get(ct),ot===void 0&&(ot=[],d.set(ct,ot));const nt=F.textures;if(ot.length!==nt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,bt=nt.length;Y<bt;Y++)ot[Y]=s.COLOR_ATTACHMENT0+Y;ot.length=nt.length,yt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,yt=!0);yt&&s.drawBuffers(ot)}function Bt(F){return p!==F?(s.useProgram(F),p=F,!0):!1}const xe={[fs]:s.FUNC_ADD,[C0]:s.FUNC_SUBTRACT,[R0]:s.FUNC_REVERSE_SUBTRACT};xe[I0]=s.MIN,xe[P0]=s.MAX;const Ft={[L0]:s.ZERO,[B0]:s.ONE,[D0]:s.SRC_COLOR,[Qc]:s.SRC_ALPHA,[z0]:s.SRC_ALPHA_SATURATE,[F0]:s.DST_COLOR,[N0]:s.DST_ALPHA,[U0]:s.ONE_MINUS_SRC_COLOR,[th]:s.ONE_MINUS_SRC_ALPHA,[O0]:s.ONE_MINUS_DST_COLOR,[k0]:s.ONE_MINUS_DST_ALPHA,[V0]:s.CONSTANT_COLOR,[H0]:s.ONE_MINUS_CONSTANT_COLOR,[G0]:s.CONSTANT_ALPHA,[W0]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(F,ct,ot,yt,nt,Y,bt,Ot,pe,re){if(F===gi){_===!0&&(st(s.BLEND),_=!1);return}if(_===!1&&(Q(s.BLEND),_=!0),F!==A0){if(F!==m||re!==S){if((g!==fs||v!==fs)&&(s.blendEquation(s.FUNC_ADD),g=fs,v=fs),re)switch(F){case er:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gd:s.blendFunc(s.ONE,s.ONE);break;case Wd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",F);break}else switch(F){case er:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wd:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xd:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",F);break}x=null,b=null,A=null,T=null,E.set(0,0,0),y=0,m=F,S=re}return}nt=nt||ct,Y=Y||ot,bt=bt||yt,(ct!==g||nt!==v)&&(s.blendEquationSeparate(xe[ct],xe[nt]),g=ct,v=nt),(ot!==x||yt!==b||Y!==A||bt!==T)&&(s.blendFuncSeparate(Ft[ot],Ft[yt],Ft[Y],Ft[bt]),x=ot,b=yt,A=Y,T=bt),(Ot.equals(E)===!1||pe!==y)&&(s.blendColor(Ot.r,Ot.g,Ot.b,pe),E.copy(Ot),y=pe),m=F,S=!1}function se(F,ct){F.side===Ke?st(s.CULL_FACE):Q(s.CULL_FACE);let ot=F.side===Ze;ct&&(ot=!ot),Xt(ot),F.blending===er&&F.transparent===!1?ie(gi):ie(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const yt=F.stencilWrite;a.setTest(yt),yt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),be(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(F){B!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),B=F)}function ge(F){F!==E0?(Q(s.CULL_FACE),F!==R&&(F===Hd?s.cullFace(s.BACK):F===T0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),R=F}function D(F){F!==O&&(V&&s.lineWidth(F),O=F)}function be(F,ct,ot){F?(Q(s.POLYGON_OFFSET_FILL),(z!==ct||P!==ot)&&(z=ct,P=ot,o.getReversed()&&(ct=-ct),s.polygonOffset(ct,ot))):st(s.POLYGON_OFFSET_FILL)}function ee(F){F?Q(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function he(F){F===void 0&&(F=s.TEXTURE0+U-1),j!==F&&(s.activeTexture(F),j=F)}function vt(F,ct,ot){ot===void 0&&(j===null?ot=s.TEXTURE0+U-1:ot=j);let yt=it[ot];yt===void 0&&(yt={type:void 0,texture:void 0},it[ot]=yt),(yt.type!==F||yt.texture!==ct)&&(j!==ot&&(s.activeTexture(ot),j=ot),s.bindTexture(F,ct||$[F]),yt.type=F,yt.texture=ct)}function I(){const F=it[j];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function Z(){try{s.texSubImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function tt(){try{s.texSubImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function Mt(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function lt(){try{s.texStorage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function Pt(){try{s.texStorage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function Nt(){try{s.texImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function et(){try{s.texImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function rt(F){At.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),At.copy(F))}function St(F){te.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Et(F,ct){let ot=c.get(ct);ot===void 0&&(ot=new WeakMap,c.set(ct,ot));let yt=ot.get(F);yt===void 0&&(yt=s.getUniformBlockIndex(ct,F.name),ot.set(F,yt))}function gt(F,ct){const yt=c.get(ct).get(F);l.get(ct)!==yt&&(s.uniformBlockBinding(ct,yt,F.__bindingPointIndex),l.set(ct,yt))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,it={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,b=null,v=null,A=null,T=null,E=new ut(0,0,0),y=0,S=!1,B=null,R=null,O=null,z=null,P=null,At.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:st,bindFramebuffer:Lt,drawBuffers:Ct,useProgram:Bt,setBlending:ie,setMaterial:se,setFlipSided:Xt,setCullFace:ge,setLineWidth:D,setPolygonOffset:be,setScissorTest:ee,activeTexture:he,bindTexture:vt,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:Nt,texImage3D:et,updateUBOMapping:Et,uniformBlockBinding:gt,texStorage2D:lt,texStorage3D:Pt,texSubImage2D:Z,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:Mt,scissor:rt,viewport:St,reset:Yt}}function Cb(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,M){return f?new OffscreenCanvas(I,M):wo("canvas")}function _(I,M,k){let Z=1;const tt=vt(I);if((tt.width>k||tt.height>k)&&(Z=k/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(Z*tt.width),Mt=Math.floor(Z*tt.height);u===void 0&&(u=p(K,Mt));const lt=M?p(K,Mt):u;return lt.width=K,lt.height=Mt,lt.getContext("2d").drawImage(I,0,0,K,Mt),xt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Mt+")."),lt}else return"data"in I&&xt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){s.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(I,M,k,Z,tt=!1){if(I!==null){if(s[I]!==void 0)return s[I];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=M;if(M===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),M===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),M===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),M===s.RGBA){const Mt=tt?Za:Qt.getTransfer(Z);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=Mt===oe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(I,M){let k;return I?M===null||M===Jn||M===So?k=s.DEPTH24_STENCIL8:M===xn?k=s.DEPTH32F_STENCIL8:M===Mo&&(k=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===So?k=s.DEPTH_COMPONENT24:M===xn?k=s.DEPTH_COMPONENT32F:M===Mo&&(k=s.DEPTH_COMPONENT16),k}function A(I,M){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ae&&I.minFilter!==Ie?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function T(I){const M=I.target;M.removeEventListener("dispose",T),y(M),M.isVideoTexture&&h.delete(M)}function E(I){const M=I.target;M.removeEventListener("dispose",E),B(M)}function y(I){const M=n.get(I);if(M.__webglInit===void 0)return;const k=I.source,Z=d.get(k);if(Z){const tt=Z[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(I),Object.keys(Z).length===0&&d.delete(k)}n.remove(I)}function S(I){const M=n.get(I);s.deleteTexture(M.__webglTexture);const k=I.source,Z=d.get(k);delete Z[M.__cacheKey],o.memory.textures--}function B(I){const M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let tt=0;tt<M.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(M.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[Z]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=I.textures;for(let Z=0,tt=k.length;Z<tt;Z++){const K=n.get(k[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(I)}let R=0;function O(){R=0}function z(){const I=R;return I>=i.maxTextures&&xt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function P(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function U(I,M){const k=n.get(I);if(I.isVideoTexture&&ee(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){const Z=I.image;if(Z===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,I,M);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function V(I,M){const k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){$(k,I,M);return}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function N(I,M){const k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){$(k,I,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function q(I,M){const k=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&k.__version!==I.version){Q(k,I,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const j={[hr]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[Ka]:s.MIRRORED_REPEAT},it={[Ae]:s.NEAREST,[eg]:s.NEAREST_MIPMAP_NEAREST,[no]:s.NEAREST_MIPMAP_LINEAR,[Ie]:s.LINEAR,[ka]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},at={[J0]:s.NEVER,[i_]:s.ALWAYS,[Q0]:s.LESS,[Ku]:s.LEQUAL,[t_]:s.EQUAL,[Zu]:s.GEQUAL,[e_]:s.GREATER,[n_]:s.NOTEQUAL};function dt(I,M){if(M.type===xn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ie||M.magFilter===ka||M.magFilter===no||M.magFilter===fi||M.minFilter===Ie||M.minFilter===ka||M.minFilter===no||M.minFilter===fi)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,j[M.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,j[M.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,j[M.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,it[M.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,at[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ae||M.minFilter!==no&&M.minFilter!==fi||M.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function At(I,M){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",T));const Z=M.source;let tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));const K=P(M);if(K!==I.__cacheKey){tt[K]===void 0&&(tt[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),tt[K].usedTimes++;const Mt=tt[I.__cacheKey];Mt!==void 0&&(tt[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(M)),I.__cacheKey=K,I.__webglTexture=tt[K].texture}return k}function te(I,M,k){return Math.floor(Math.floor(I/k)/M)}function kt(I,M,k,Z){const K=I.updateRanges;if(K.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,k,Z,M.data);else{K.sort((et,rt)=>et.start-rt.start);let Mt=0;for(let et=1;et<K.length;et++){const rt=K[Mt],St=K[et],Et=rt.start+rt.count,gt=te(St.start,M.width,4),Yt=te(rt.start,M.width,4);St.start<=Et+1&&gt===Yt&&te(St.start+St.count-1,M.width,4)===gt?rt.count=Math.max(rt.count,St.start+St.count-rt.start):(++Mt,K[Mt]=St)}K.length=Mt+1;const lt=s.getParameter(s.UNPACK_ROW_LENGTH),Pt=s.getParameter(s.UNPACK_SKIP_PIXELS),Nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let et=0,rt=K.length;et<rt;et++){const St=K[et],Et=Math.floor(St.start/4),gt=Math.ceil(St.count/4),Yt=Et%M.width,F=Math.floor(Et/M.width),ct=gt,ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Yt,F,ct,ot,k,Z,M.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Nt)}}function $(I,M,k){let Z=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=s.TEXTURE_3D);const tt=At(I,M),K=M.source;e.bindTexture(Z,I.__webglTexture,s.TEXTURE0+k);const Mt=n.get(K);if(K.version!==Mt.__version||tt===!0){e.activeTexture(s.TEXTURE0+k);const lt=Qt.getPrimaries(Qt.workingColorSpace),Pt=M.colorSpace===Ni?null:Qt.getPrimaries(M.colorSpace),Nt=M.colorSpace===Ni||lt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let et=_(M.image,!1,i.maxTextureSize);et=he(M,et);const rt=r.convert(M.format,M.colorSpace),St=r.convert(M.type);let Et=b(M.internalFormat,rt,St,M.colorSpace,M.isVideoTexture);dt(Z,M);let gt;const Yt=M.mipmaps,F=M.isVideoTexture!==!0,ct=Mt.__version===void 0||tt===!0,ot=K.dataReady,yt=A(M,et);if(M.isDepthTexture)Et=v(M.format===gs,M.type),ct&&(F?e.texStorage2D(s.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,rt,St,null));else if(M.isDataTexture)if(Yt.length>0){F&&ct&&e.texStorage2D(s.TEXTURE_2D,yt,Et,Yt[0].width,Yt[0].height);for(let nt=0,Y=Yt.length;nt<Y;nt++)gt=Yt[nt],F?ot&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,gt.width,gt.height,rt,St,gt.data):e.texImage2D(s.TEXTURE_2D,nt,Et,gt.width,gt.height,0,rt,St,gt.data);M.generateMipmaps=!1}else F?(ct&&e.texStorage2D(s.TEXTURE_2D,yt,Et,et.width,et.height),ot&&kt(M,et,rt,St)):e.texImage2D(s.TEXTURE_2D,0,Et,et.width,et.height,0,rt,St,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){F&&ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Et,Yt[0].width,Yt[0].height,et.depth);for(let nt=0,Y=Yt.length;nt<Y;nt++)if(gt=Yt[nt],M.format!==vn)if(rt!==null)if(F){if(ot)if(M.layerUpdates.size>0){const bt=kf(gt.width,gt.height,M.format,M.type);for(const Ot of M.layerUpdates){const pe=gt.data.subarray(Ot*bt/gt.data.BYTES_PER_ELEMENT,(Ot+1)*bt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,Ot,gt.width,gt.height,1,rt,pe)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,et.depth,rt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,Et,gt.width,gt.height,et.depth,0,gt.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,et.depth,rt,St,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,Et,gt.width,gt.height,et.depth,0,rt,St,gt.data)}else{F&&ct&&e.texStorage2D(s.TEXTURE_2D,yt,Et,Yt[0].width,Yt[0].height);for(let nt=0,Y=Yt.length;nt<Y;nt++)gt=Yt[nt],M.format!==vn?rt!==null?F?ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,gt.width,gt.height,rt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,Et,gt.width,gt.height,0,gt.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ot&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,gt.width,gt.height,rt,St,gt.data):e.texImage2D(s.TEXTURE_2D,nt,Et,gt.width,gt.height,0,rt,St,gt.data)}else if(M.isDataArrayTexture)if(F){if(ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Et,et.width,et.height,et.depth),ot)if(M.layerUpdates.size>0){const nt=kf(et.width,et.height,M.format,M.type);for(const Y of M.layerUpdates){const bt=et.data.subarray(Y*nt/et.data.BYTES_PER_ELEMENT,(Y+1)*nt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,et.width,et.height,1,rt,St,bt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,rt,St,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,rt,St,et.data);else if(M.isData3DTexture)F?(ct&&e.texStorage3D(s.TEXTURE_3D,yt,Et,et.width,et.height,et.depth),ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,rt,St,et.data)):e.texImage3D(s.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,rt,St,et.data);else if(M.isFramebufferTexture){if(ct)if(F)e.texStorage2D(s.TEXTURE_2D,yt,Et,et.width,et.height);else{let nt=et.width,Y=et.height;for(let bt=0;bt<yt;bt++)e.texImage2D(s.TEXTURE_2D,bt,Et,nt,Y,0,rt,St,null),nt>>=1,Y>>=1}}else if(Yt.length>0){if(F&&ct){const nt=vt(Yt[0]);e.texStorage2D(s.TEXTURE_2D,yt,Et,nt.width,nt.height)}for(let nt=0,Y=Yt.length;nt<Y;nt++)gt=Yt[nt],F?ot&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,rt,St,gt):e.texImage2D(s.TEXTURE_2D,nt,Et,rt,St,gt);M.generateMipmaps=!1}else if(F){if(ct){const nt=vt(et);e.texStorage2D(s.TEXTURE_2D,yt,Et,nt.width,nt.height)}ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt,St,et)}else e.texImage2D(s.TEXTURE_2D,0,Et,rt,St,et);m(M)&&g(Z),Mt.__version=K.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Q(I,M,k){if(M.image.length!==6)return;const Z=At(I,M),tt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+k);const K=n.get(tt);if(tt.version!==K.__version||Z===!0){e.activeTexture(s.TEXTURE0+k);const Mt=Qt.getPrimaries(Qt.workingColorSpace),lt=M.colorSpace===Ni?null:Qt.getPrimaries(M.colorSpace),Pt=M.colorSpace===Ni||Mt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Nt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,rt=[];for(let Y=0;Y<6;Y++)!Nt&&!et?rt[Y]=_(M.image[Y],!0,i.maxCubemapSize):rt[Y]=et?M.image[Y].image:M.image[Y],rt[Y]=he(M,rt[Y]);const St=rt[0],Et=r.convert(M.format,M.colorSpace),gt=r.convert(M.type),Yt=b(M.internalFormat,Et,gt,M.colorSpace),F=M.isVideoTexture!==!0,ct=K.__version===void 0||Z===!0,ot=tt.dataReady;let yt=A(M,St);dt(s.TEXTURE_CUBE_MAP,M);let nt;if(Nt){F&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Yt,St.width,St.height);for(let Y=0;Y<6;Y++){nt=rt[Y].mipmaps;for(let bt=0;bt<nt.length;bt++){const Ot=nt[bt];M.format!==vn?Et!==null?F?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,bt,0,0,Ot.width,Ot.height,Et,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,bt,Yt,Ot.width,Ot.height,0,Ot.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,bt,0,0,Ot.width,Ot.height,Et,gt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,bt,Yt,Ot.width,Ot.height,0,Et,gt,Ot.data)}}}else{if(nt=M.mipmaps,F&&ct){nt.length>0&&yt++;const Y=vt(rt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Yt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(et){F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,rt[Y].width,rt[Y].height,Et,gt,rt[Y].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Yt,rt[Y].width,rt[Y].height,0,Et,gt,rt[Y].data);for(let bt=0;bt<nt.length;bt++){const pe=nt[bt].image[Y].image;F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,bt+1,0,0,pe.width,pe.height,Et,gt,pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,bt+1,Yt,pe.width,pe.height,0,Et,gt,pe.data)}}else{F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Et,gt,rt[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Yt,Et,gt,rt[Y]);for(let bt=0;bt<nt.length;bt++){const Ot=nt[bt];F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,bt+1,0,0,Et,gt,Ot.image[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,bt+1,Yt,Et,gt,Ot.image[Y])}}}m(M)&&g(s.TEXTURE_CUBE_MAP),K.__version=tt.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function st(I,M,k,Z,tt,K){const Mt=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),Pt=b(k.internalFormat,Mt,lt,k.colorSpace),Nt=n.get(M),et=n.get(k);if(et.__renderTarget=M,!Nt.__hasExternalTextures){const rt=Math.max(1,M.width>>K),St=Math.max(1,M.height>>K);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,Pt,rt,St,M.depth,0,Mt,lt,null):e.texImage2D(tt,K,Pt,rt,St,0,Mt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),be(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,et.__webglTexture,0,D(M)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,et.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(I,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,I),M.depthBuffer){const Z=M.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,K=v(M.stencilBuffer,tt),Mt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;be(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(M),K,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(M),K,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,I)}else{const Z=M.textures;for(let tt=0;tt<Z.length;tt++){const K=Z[tt],Mt=r.convert(K.format,K.colorSpace),lt=r.convert(K.type),Pt=b(K.internalFormat,Mt,lt,K.colorSpace);be(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(M),Pt,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(M),Pt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Pt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(I,M,k){const Z=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(M.depthTexture);if(tt.__renderTarget=M,(!tt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),tt.__webglTexture===void 0){tt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),dt(s.TEXTURE_CUBE_MAP,M.depthTexture);const Nt=r.convert(M.depthTexture.format),et=r.convert(M.depthTexture.type);let rt;M.depthTexture.format===xi?rt=s.DEPTH_COMPONENT24:M.depthTexture.format===gs&&(rt=s.DEPTH24_STENCIL8);for(let St=0;St<6;St++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,rt,M.width,M.height,0,Nt,et,null)}}else U(M.depthTexture,0);const K=tt.__webglTexture,Mt=D(M),lt=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,Pt=M.depthTexture.format===gs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===xi)be(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pt,lt,K,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,Pt,lt,K,0);else if(M.depthTexture.format===gs)be(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pt,lt,K,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,Pt,lt,K,0);else throw new Error("Unknown depthTexture format")}function Bt(I){const M=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=Z}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let Z=0;Z<6;Z++)Ct(M.__webglFramebuffer[Z],I,Z);else{const Z=I.texture.mipmaps;Z&&Z.length>0?Ct(M.__webglFramebuffer[0],I,0):Ct(M.__webglFramebuffer,I,0)}else if(k){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=s.createRenderbuffer(),Lt(M.__webglDepthbuffer[Z],I,!1);else{const tt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}else{const Z=I.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Lt(M.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(I,M,k){const Z=n.get(I);M!==void 0&&st(Z.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Bt(I)}function Ft(I){const M=I.texture,k=n.get(I),Z=n.get(M);I.addEventListener("dispose",E);const tt=I.textures,K=I.isWebGLCubeRenderTarget===!0,Mt=tt.length>1;if(Mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=M.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let Pt=0;Pt<M.mipmaps.length;Pt++)k.__webglFramebuffer[lt][Pt]=s.createFramebuffer()}else k.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)k.__webglFramebuffer[lt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let lt=0,Pt=tt.length;lt<Pt;lt++){const Nt=n.get(tt[lt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&be(I)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const Pt=tt[lt];k.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const Nt=r.convert(Pt.format,Pt.colorSpace),et=r.convert(Pt.type),rt=b(Pt.internalFormat,Nt,et,Pt.colorSpace,I.isXRRenderTarget===!0),St=D(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,St,rt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),dt(s.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pt=0;Pt<M.mipmaps.length;Pt++)st(k.__webglFramebuffer[lt][Pt],I,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt);else st(k.__webglFramebuffer[lt],I,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,Pt=tt.length;lt<Pt;lt++){const Nt=tt[lt],et=n.get(Nt);let rt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,et.__webglTexture),dt(rt,Nt),st(k.__webglFramebuffer,I,Nt,s.COLOR_ATTACHMENT0+lt,rt,0),m(Nt)&&g(rt)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(lt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),dt(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let Pt=0;Pt<M.mipmaps.length;Pt++)st(k.__webglFramebuffer[Pt],I,M,s.COLOR_ATTACHMENT0,lt,Pt);else st(k.__webglFramebuffer,I,M,s.COLOR_ATTACHMENT0,lt,0);m(M)&&g(lt),e.unbindTexture()}I.depthBuffer&&Bt(I)}function ie(I){const M=I.textures;for(let k=0,Z=M.length;k<Z;k++){const tt=M[k];if(m(tt)){const K=x(I),Mt=n.get(tt).__webglTexture;e.bindTexture(K,Mt),g(K),e.unbindTexture()}}}const se=[],Xt=[];function ge(I){if(I.samples>0){if(be(I)===!1){const M=I.textures,k=I.width,Z=I.height;let tt=s.COLOR_BUFFER_BIT;const K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(I),lt=M.length>1;if(lt)for(let Nt=0;Nt<M.length;Nt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Pt=I.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Nt=0;Nt<M.length;Nt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[Nt]);const et=n.get(M[Nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,k,Z,0,0,k,Z,tt,s.NEAREST),l===!0&&(se.length=0,Xt.length=0,se.push(s.COLOR_ATTACHMENT0+Nt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(se.push(K),Xt.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let Nt=0;Nt<M.length;Nt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[Nt]);const et=n.get(M[Nt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const M=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function D(I){return Math.min(i.maxSamples,I.samples)}function be(I){const M=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ee(I){const M=o.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function he(I,M){const k=I.colorSpace,Z=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==en&&k!==Ni&&(Qt.getTransfer(k)===oe?(Z!==vn||tt!==dn)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",k)),M}function vt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=q,this.rebindTextures=xe,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Rb(s,t){function e(n,i=Ni){let r;const o=Qt.getTransfer(i);if(n===dn)return s.UNSIGNED_BYTE;if(n===Gu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ng)return s.BYTE;if(n===ig)return s.SHORT;if(n===Mo)return s.UNSIGNED_SHORT;if(n===Hu)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===yi)return s.HALF_FLOAT;if(n===og)return s.ALPHA;if(n===ag)return s.RGB;if(n===vn)return s.RGBA;if(n===xi)return s.DEPTH_COMPONENT;if(n===gs)return s.DEPTH_STENCIL;if(n===Xu)return s.RED;if(n===qu)return s.RED_INTEGER;if(n===ur)return s.RG;if(n===$u)return s.RG_INTEGER;if(n===Yu)return s.RGBA_INTEGER;if(n===Fa||n===Oa||n===za||n===Va)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lh||n===ch||n===hh||n===uh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===yh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dh||n===fh)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ph)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===mh)return r.COMPRESSED_R11_EAC;if(n===gh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_h)return r.COMPRESSED_RG11_EAC;if(n===yh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xh||n===vh||n===Mh||n===Sh||n===bh||n===Eh||n===Th||n===wh||n===Ah||n===Ch||n===Rh||n===Ih||n===Ph||n===Lh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xh)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vh)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mh)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sh)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eh)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Th)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wh)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ah)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ch)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rh)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ih)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ph)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lh)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bh||n===Dh||n===Uh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bh)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nh||n===kh||n===Fh||n===Oh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===So?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
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

}`;class Lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new yg(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new He({vertexShader:Ib,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bb extends yr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new Lb,g={},x=e.getContextAttributes();let b=null,v=null;const A=[],T=[],E=new Wt;let y=null;const S=new $e;S.viewport=new _e;const B=new $e;B.viewport=new _e;const R=[S,B],O=new Py;let z=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=A[$];return Q===void 0&&(Q=new Wl,A[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=A[$];return Q===void 0&&(Q=new Wl,A[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=A[$];return Q===void 0&&(Q=new Wl,A[$]=Q),Q.getHandSpace()};function U($){const Q=T.indexOf($.inputSource);if(Q===-1)return;const st=A[Q];st!==void 0&&(st.update($.inputSource,$.frame,c||o),st.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",N);for(let $=0;$<A.length;$++){const Q=T[$];Q!==null&&(T[$]=null,A[$].disconnect(Q))}z=null,P=null,m.reset();for(const $ in g)delete g[$];t.setRenderTarget(b),f=null,d=null,u=null,i=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",V),i.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Lt=null,Ct=null;x.depth&&(Ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=x.stencil?gs:xi,Lt=x.stencil?So:Jn);const Bt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Zn(d.textureWidth,d.textureHeight,{format:vn,type:dn,depthTexture:new Ao(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const st={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Zn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N($){for(let Q=0;Q<$.removed.length;Q++){const st=$.removed[Q],Lt=T.indexOf(st);Lt>=0&&(T[Lt]=null,A[Lt].disconnect(st))}for(let Q=0;Q<$.added.length;Q++){const st=$.added[Q];let Lt=T.indexOf(st);if(Lt===-1){for(let Bt=0;Bt<A.length;Bt++)if(Bt>=T.length){T.push(st),Lt=Bt;break}else if(T[Bt]===null){T[Bt]=st,Lt=Bt;break}if(Lt===-1)break}const Ct=A[Lt];Ct&&Ct.connect(st)}}const q=new L,j=new L;function it($,Q,st){q.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(st.matrixWorld);const Lt=q.distanceTo(j),Ct=Q.projectionMatrix.elements,Bt=st.projectionMatrix.elements,xe=Ct[14]/(Ct[10]-1),Ft=Ct[14]/(Ct[10]+1),ie=(Ct[9]+1)/Ct[5],se=(Ct[9]-1)/Ct[5],Xt=(Ct[8]-1)/Ct[0],ge=(Bt[8]+1)/Bt[0],D=xe*Xt,be=xe*ge,ee=Lt/(-Xt+ge),he=ee*-Xt;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(he),$.translateZ(ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const vt=xe+ee,I=Ft+ee,M=D-he,k=be+(Lt-he),Z=ie*Ft/I*vt,tt=se*Ft/I*vt;$.projectionMatrix.makePerspective(M,k,Z,tt,vt,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function at($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,st=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(st=m.depthFar)),O.near=B.near=S.near=Q,O.far=B.far=S.far=st,(z!==O.near||P!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,P=O.far),O.layers.mask=$.layers.mask|6,S.layers.mask=O.layers.mask&-5,B.layers.mask=O.layers.mask&-3;const Lt=$.parent,Ct=O.cameras;at(O,Lt);for(let Bt=0;Bt<Ct.length;Bt++)at(Ct[Bt],Lt);Ct.length===2?it(O,S,B):O.projectionMatrix.copy(S.projectionMatrix),dt($,O,Lt)};function dt($,Q,st){st===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(st.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=dr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return g[$]};let At=null;function te($,Q){if(h=Q.getViewerPose(c||o),p=Q,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Lt=!1;st.length!==O.cameras.length&&(O.cameras.length=0,Lt=!0);for(let Ft=0;Ft<st.length;Ft++){const ie=st[Ft];let se=null;if(f!==null)se=f.getViewport(ie);else{const ge=u.getViewSubImage(d,ie);se=ge.viewport,Ft===0&&(t.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(v))}let Xt=R[Ft];Xt===void 0&&(Xt=new $e,Xt.layers.enable(Ft),Xt.viewport=new _e,R[Ft]=Xt),Xt.matrix.fromArray(ie.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(ie.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(se.x,se.y,se.width,se.height),Ft===0&&(O.matrix.copy(Xt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Lt===!0&&O.cameras.push(Xt)}const Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Ft=u.getDepthInformation(st[0]);Ft&&Ft.isValid&&Ft.texture&&m.init(Ft,i.renderState)}if(Ct&&Ct.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Ft=0;Ft<st.length;Ft++){const ie=st[Ft].camera;if(ie){let se=g[ie];se||(se=new yg,g[ie]=se);const Xt=u.getCameraImage(ie);se.sourceTexture=Xt}}}}for(let st=0;st<A.length;st++){const Lt=T[st],Ct=A[st];Lt!==null&&Ct!==void 0&&Ct.update(Lt,Q,c||o)}At&&At($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}const kt=new wg;kt.setAnimationLoop(te),this.setAnimationLoop=function($){At=$},this.dispose=function(){}}}const Qi=new Sn,Db=new Dt;function Ub(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,xg(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,b,v){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ze&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ze&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=t.get(g),b=x.envMap,v=x.envMapRotation;b&&(m.envMap.value=b,Qi.copy(v),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(Qi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ze&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nb(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const v=b.program;n.uniformBlockBinding(x,v)}function c(x,b){let v=i[x.id];v===void 0&&(p(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(x,A);const T=t.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const b=u();x.__bindingPointIndex=b;const v=s.createBuffer(),A=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const b=i[x.id],v=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let T=0,E=v.length;T<E;T++){const y=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,B=y.length;S<B;S++){const R=y[S];if(f(R,T,S,A)===!0){const O=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let P=0;for(let U=0;U<z.length;U++){const V=z[U],N=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,O+P,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,P),P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,b,v,A){const T=x.value,E=b+"_"+v;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{const y=A[E];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return A[E]=T,!0}else if(y.equals(T)===!1)return y.copy(T),!0}return!1}function p(x){const b=x.uniforms;let v=0;const A=16;for(let E=0,y=b.length;E<y;E++){const S=Array.isArray(b[E])?b[E]:[b[E]];for(let B=0,R=S.length;B<R;B++){const O=S[B],z=Array.isArray(O.value)?O.value:[O.value];for(let P=0,U=z.length;P<U;P++){const V=z[P],N=_(V),q=v%A,j=q%N.boundary,it=q+j;v+=j,it!==0&&A-it<N.storage&&(v+=A-it),O.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=N.storage}}}const T=v%A;return T>0&&(v+=A-T),x.__size=v,x.__cache={},this}function _(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xt("WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}const kb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function Fb(){return kn===null&&(kn=new td(kb,16,16,ur,yi),kn.name="DFG_LUT",kn.minFilter=Ie,kn.magFilter=Ie,kn.wrapS=qn,kn.wrapT=qn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class ap{constructor(t={}){const{canvas:e=o_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=f,m=new Set([Yu,$u,qu]),g=new Set([dn,Jn,Mo,So,Gu,Wu]),x=new Uint32Array(4),b=new Int32Array(4);let v=null,A=null;const T=[],E=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let B=!1;this._outputColorSpace=we;let R=0,O=0,z=null,P=-1,U=null;const V=new _e,N=new _e;let q=null;const j=new ut(0);let it=0,at=e.width,dt=e.height,At=1,te=null,kt=null;const $=new _e(0,0,at,dt),Q=new _e(0,0,at,dt);let st=!1;const Lt=new bl;let Ct=!1,Bt=!1;const xe=new Dt,Ft=new L,ie=new _e,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ge(){return z===null?At:1}let D=n;function be(w,H){return e.getContext(w,H)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vu}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",pe,!1),D===null){const H="webgl2";if(D=be(H,w),D===null)throw be(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ut("WebGLRenderer: "+w.message),w}let ee,he,vt,I,M,k,Z,tt,K,Mt,lt,Pt,Nt,et,rt,St,Et,gt,Yt,F,ct,ot,yt;function nt(){ee=new OM(D),ee.init(),ct=new Rb(D,ee),he=new PM(D,ee,t,ct),vt=new Ab(D,ee),he.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),I=new HM(D),M=new fb,k=new Cb(D,ee,vt,M,he,ct,I),Z=new FM(S),tt=new $y(D),ot=new RM(D,tt),K=new zM(D,tt,I,ot),Mt=new WM(D,K,tt,ot,I),gt=new GM(D,he,k),rt=new LM(M),lt=new db(S,Z,ee,he,ot,rt),Pt=new Ub(S,M),Nt=new mb,et=new Mb(ee),Et=new CM(S,Z,vt,Mt,p,l),St=new wb(S,Mt,he),yt=new Nb(D,I,he,vt),Yt=new IM(D,ee,I),F=new VM(D,ee,I),I.programs=lt.programs,S.capabilities=he,S.extensions=ee,S.properties=M,S.renderLists=Nt,S.shadowMap=St,S.state=vt,S.info=I}nt(),_!==dn&&(y=new qM(_,e.width,e.height,i,r));const Y=new Bb(S,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(w){w!==void 0&&(At=w,this.setSize(at,dt,!1))},this.getSize=function(w){return w.set(at,dt)},this.setSize=function(w,H,X=!0){if(Y.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}at=w,dt=H,e.width=Math.floor(w*At),e.height=Math.floor(H*At),X===!0&&(e.style.width=w+"px",e.style.height=H+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(at*At,dt*At).floor()},this.setDrawingBufferSize=function(w,H,X){at=w,dt=H,At=X,e.width=Math.floor(w*X),e.height=Math.floor(H*X),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(_===dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,H,X,W){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,H,X,W),vt.viewport(V.copy($).multiplyScalar(At).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,H,X,W){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,H,X,W),vt.scissor(N.copy(Q).multiplyScalar(At).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(w){vt.setScissorTest(st=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){kt=w},this.getClearColor=function(w){return w.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,X=!0){let W=0;if(w){let G=!1;if(z!==null){const pt=z.texture.format;G=m.has(pt)}if(G){const pt=z.texture.type,_t=g.has(pt),mt=Et.getClearColor(),Tt=Et.getClearAlpha(),Rt=mt.r,Ht=mt.g,Kt=mt.b;_t?(x[0]=Rt,x[1]=Ht,x[2]=Kt,x[3]=Tt,D.clearBufferuiv(D.COLOR,0,x)):(b[0]=Rt,b[1]=Ht,b[2]=Kt,b[3]=Tt,D.clearBufferiv(D.COLOR,0,b))}else W|=D.COLOR_BUFFER_BIT}H&&(W|=D.DEPTH_BUFFER_BIT),X&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),Et.dispose(),Nt.dispose(),et.dispose(),M.dispose(),Z.dispose(),Mt.dispose(),ot.dispose(),yt.dispose(),lt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Dd),Y.removeEventListener("sessionend",Ud),Gi.stop()};function bt(w){w.preventDefault(),ja("WebGLRenderer: Context Lost."),B=!0}function Ot(){ja("WebGLRenderer: Context Restored."),B=!1;const w=I.autoReset,H=St.enabled,X=St.autoUpdate,W=St.needsUpdate,G=St.type;nt(),I.autoReset=w,St.enabled=H,St.autoUpdate=X,St.needsUpdate=W,St.type=G}function pe(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){const H=w.target;H.removeEventListener("dispose",re),ni(H)}function ni(w){ii(w),M.remove(w)}function ii(w){const H=M.get(w).programs;H!==void 0&&(H.forEach(function(X){lt.releaseProgram(X)}),w.isShaderMaterial&&lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,X,W,G,pt){H===null&&(H=se);const _t=G.isMesh&&G.matrixWorld.determinant()<0,mt=g0(w,H,X,W,G);vt.setMaterial(W,_t);let Tt=X.index,Rt=1;if(W.wireframe===!0){if(Tt=K.getWireframeAttribute(X),Tt===void 0)return;Rt=2}const Ht=X.drawRange,Kt=X.attributes.position;let It=Ht.start*Rt,ue=(Ht.start+Ht.count)*Rt;pt!==null&&(It=Math.max(It,pt.start*Rt),ue=Math.min(ue,(pt.start+pt.count)*Rt)),Tt!==null?(It=Math.max(It,0),ue=Math.min(ue,Tt.count)):Kt!=null&&(It=Math.max(It,0),ue=Math.min(ue,Kt.count));const Te=ue-It;if(Te<0||Te===1/0)return;ot.setup(G,W,mt,X,Tt);let Ee,de=Yt;if(Tt!==null&&(Ee=tt.get(Tt),de=F,de.setIndex(Ee)),G.isMesh)W.wireframe===!0?(vt.setLineWidth(W.wireframeLinewidth*ge()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(G.isLine){let Ge=W.linewidth;Ge===void 0&&(Ge=1),vt.setLineWidth(Ge*ge()),G.isLineSegments?de.setMode(D.LINES):G.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else G.isPoints?de.setMode(D.POINTS):G.isSprite&&de.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ja("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ge=G._multiDrawStarts,wt=G._multiDrawCounts,sn=G._multiDrawCount,ne=Tt?tt.get(Tt).bytesPerElement:1,En=M.get(W).currentProgram.getUniforms();for(let Un=0;Un<sn;Un++)En.setValue(D,"_gl_DrawID",Un),de.render(Ge[Un]/ne,wt[Un])}else if(G.isInstancedMesh)de.renderInstances(It,Te,G.count);else if(X.isInstancedBufferGeometry){const Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wt=Math.min(X.instanceCount,Ge);de.renderInstances(It,Te,wt)}else de.render(It,Te)};function Bd(w,H,X){w.transparent===!0&&w.side===Ke&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,Lo(w,H,X),w.side=fn,w.needsUpdate=!0,Lo(w,H,X),w.side=Ke):Lo(w,H,X)}this.compile=function(w,H,X=null){X===null&&(X=w),A=et.get(X),A.init(H),E.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),w!==X&&w.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const W=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pt=G.material;if(pt)if(Array.isArray(pt))for(let _t=0;_t<pt.length;_t++){const mt=pt[_t];Bd(mt,X,G),W.add(mt)}else Bd(pt,X,G),W.add(pt)}),A=E.pop(),W},this.compileAsync=function(w,H,X=null){const W=this.compile(w,H,X);return new Promise(G=>{function pt(){if(W.forEach(function(_t){M.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){G(w);return}setTimeout(pt,10)}ee.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Dl=null;function m0(w){Dl&&Dl(w)}function Dd(){Gi.stop()}function Ud(){Gi.start()}const Gi=new wg;Gi.setAnimationLoop(m0),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(w){Dl=w,Y.setAnimationLoop(w),w===null?Gi.stop():Gi.start()},Y.addEventListener("sessionstart",Dd),Y.addEventListener("sessionend",Ud),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const X=Y.enabled===!0&&Y.isPresenting===!0,W=y!==null&&(z===null||X)&&y.begin(S,z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,H,z),A=et.get(w,E.length),A.init(H),E.push(A),xe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Lt.setFromProjectionMatrix(xe,$n,H.reversedDepth),Bt=this.localClippingEnabled,Ct=rt.init(this.clippingPlanes,Bt),v=Nt.get(w,T.length),v.init(),T.push(v),Y.enabled===!0&&Y.isPresenting===!0){const _t=S.xr.getDepthSensingMesh();_t!==null&&Ul(_t,H,-1/0,S.sortObjects)}Ul(w,H,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(te,kt),Xt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Xt&&Et.addToRenderList(v,w),this.info.render.frame++,Ct===!0&&rt.beginShadows();const G=A.state.shadowsArray;if(St.render(G,w,H),Ct===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&y.hasRenderPass())===!1){const _t=v.opaque,mt=v.transmissive;if(A.setupLights(),H.isArrayCamera){const Tt=H.cameras;if(mt.length>0)for(let Rt=0,Ht=Tt.length;Rt<Ht;Rt++){const Kt=Tt[Rt];kd(_t,mt,w,Kt)}Xt&&Et.render(w);for(let Rt=0,Ht=Tt.length;Rt<Ht;Rt++){const Kt=Tt[Rt];Nd(v,w,Kt,Kt.viewport)}}else mt.length>0&&kd(_t,mt,w,H),Xt&&Et.render(w),Nd(v,w,H)}z!==null&&O===0&&(k.updateMultisampleRenderTarget(z),k.updateRenderTargetMipmap(z)),W&&y.end(S),w.isScene===!0&&w.onAfterRender(S,w,H),ot.resetDefaultState(),P=-1,U=null,E.pop(),E.length>0?(A=E[E.length-1],Ct===!0&&rt.setGlobalState(S.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?v=T[T.length-1]:v=null};function Ul(w,H,X,W){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Lt.intersectsSprite(w)){W&&ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);const _t=Mt.update(w),mt=w.material;mt.visible&&v.push(w,_t,mt,X,ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Lt.intersectsObject(w))){const _t=Mt.update(w),mt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ie.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ie.copy(_t.boundingSphere.center)),ie.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(mt)){const Tt=_t.groups;for(let Rt=0,Ht=Tt.length;Rt<Ht;Rt++){const Kt=Tt[Rt],It=mt[Kt.materialIndex];It&&It.visible&&v.push(w,_t,It,X,ie.z,Kt)}}else mt.visible&&v.push(w,_t,mt,X,ie.z,null)}}const pt=w.children;for(let _t=0,mt=pt.length;_t<mt;_t++)Ul(pt[_t],H,X,W)}function Nd(w,H,X,W){const{opaque:G,transmissive:pt,transparent:_t}=w;A.setupLightsView(X),Ct===!0&&rt.setGlobalState(S.clippingPlanes,X),W&&vt.viewport(V.copy(W)),G.length>0&&Po(G,H,X),pt.length>0&&Po(pt,H,X),_t.length>0&&Po(_t,H,X),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function kd(w,H,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const It=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new Zn(1,1,{generateMipmaps:!0,type:It?yi:dn,minFilter:fi,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const pt=A.state.transmissionRenderTarget[W.id],_t=W.viewport||V;pt.setSize(_t.z*S.transmissionResolutionScale,_t.w*S.transmissionResolutionScale);const mt=S.getRenderTarget(),Tt=S.getActiveCubeFace(),Rt=S.getActiveMipmapLevel();S.setRenderTarget(pt),S.getClearColor(j),it=S.getClearAlpha(),it<1&&S.setClearColor(16777215,.5),S.clear(),Xt&&Et.render(X);const Ht=S.toneMapping;S.toneMapping=Kn;const Kt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),Ct===!0&&rt.setGlobalState(S.clippingPlanes,W),Po(w,X,W),k.updateMultisampleRenderTarget(pt),k.updateRenderTargetMipmap(pt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ue=0,Te=H.length;ue<Te;ue++){const Ee=H[ue],{object:de,geometry:Ge,material:wt,group:sn}=Ee;if(wt.side===Ke&&de.layers.test(W.layers)){const ne=wt.side;wt.side=Ze,wt.needsUpdate=!0,Fd(de,X,W,Ge,wt,sn),wt.side=ne,wt.needsUpdate=!0,It=!0}}It===!0&&(k.updateMultisampleRenderTarget(pt),k.updateRenderTargetMipmap(pt))}S.setRenderTarget(mt,Tt,Rt),S.setClearColor(j,it),Kt!==void 0&&(W.viewport=Kt),S.toneMapping=Ht}function Po(w,H,X){const W=H.isScene===!0?H.overrideMaterial:null;for(let G=0,pt=w.length;G<pt;G++){const _t=w[G],{object:mt,geometry:Tt,group:Rt}=_t;let Ht=_t.material;Ht.allowOverride===!0&&W!==null&&(Ht=W),mt.layers.test(X.layers)&&Fd(mt,H,X,Tt,Ht,Rt)}}function Fd(w,H,X,W,G,pt){w.onBeforeRender(S,H,X,W,G,pt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(S,H,X,W,w,pt),G.transparent===!0&&G.side===Ke&&G.forceSinglePass===!1?(G.side=Ze,G.needsUpdate=!0,S.renderBufferDirect(X,H,W,G,w,pt),G.side=fn,G.needsUpdate=!0,S.renderBufferDirect(X,H,W,G,w,pt),G.side=Ke):S.renderBufferDirect(X,H,W,G,w,pt),w.onAfterRender(S,H,X,W,G,pt)}function Lo(w,H,X){H.isScene!==!0&&(H=se);const W=M.get(w),G=A.state.lights,pt=A.state.shadowsArray,_t=G.state.version,mt=lt.getParameters(w,G.state,pt,H,X),Tt=lt.getProgramCacheKey(mt);let Rt=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,W.fog=H.fog;const Ht=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=Z.get(w.envMap||W.environment,Ht),W.envMapRotation=W.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",re),Rt=new Map,W.programs=Rt);let Kt=Rt.get(Tt);if(Kt!==void 0){if(W.currentProgram===Kt&&W.lightsStateVersion===_t)return zd(w,mt),Kt}else mt.uniforms=lt.getUniforms(w),w.onBeforeCompile(mt,S),Kt=lt.acquireProgram(mt,Tt),Rt.set(Tt,Kt),W.uniforms=mt.uniforms;const It=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=rt.uniform),zd(w,mt),W.needsLights=y0(w),W.lightsStateVersion=_t,W.needsLights&&(It.ambientLightColor.value=G.state.ambient,It.lightProbe.value=G.state.probe,It.directionalLights.value=G.state.directional,It.directionalLightShadows.value=G.state.directionalShadow,It.spotLights.value=G.state.spot,It.spotLightShadows.value=G.state.spotShadow,It.rectAreaLights.value=G.state.rectArea,It.ltc_1.value=G.state.rectAreaLTC1,It.ltc_2.value=G.state.rectAreaLTC2,It.pointLights.value=G.state.point,It.pointLightShadows.value=G.state.pointShadow,It.hemisphereLights.value=G.state.hemi,It.directionalShadowMatrix.value=G.state.directionalShadowMatrix,It.spotLightMatrix.value=G.state.spotLightMatrix,It.spotLightMap.value=G.state.spotLightMap,It.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Kt,W.uniformsList=null,Kt}function Od(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=Ha.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function zd(w,H){const X=M.get(w);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function g0(w,H,X,W,G){H.isScene!==!0&&(H=se),k.resetTextureUnits();const pt=H.fog,_t=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?H.environment:null,mt=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:en,Tt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Rt=Z.get(W.envMap||_t,Tt),Ht=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,Te=!!X.morphAttributes.color;let Ee=Kn;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ee=S.toneMapping);const de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ge=de!==void 0?de.length:0,wt=M.get(W),sn=A.state.lights;if(Ct===!0&&(Bt===!0||w!==U)){const Ue=w===U&&W.id===P;rt.setState(W,w,Ue)}let ne=!1;W.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==sn.state.version||wt.outputColorSpace!==mt||G.isBatchedMesh&&wt.batching===!1||!G.isBatchedMesh&&wt.batching===!0||G.isBatchedMesh&&wt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&wt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&wt.instancing===!1||!G.isInstancedMesh&&wt.instancing===!0||G.isSkinnedMesh&&wt.skinning===!1||!G.isSkinnedMesh&&wt.skinning===!0||G.isInstancedMesh&&wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&wt.instancingMorph===!1&&G.morphTexture!==null||wt.envMap!==Rt||W.fog===!0&&wt.fog!==pt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==rt.numPlanes||wt.numIntersection!==rt.numIntersection)||wt.vertexAlphas!==Ht||wt.vertexTangents!==Kt||wt.morphTargets!==It||wt.morphNormals!==ue||wt.morphColors!==Te||wt.toneMapping!==Ee||wt.morphTargetsCount!==Ge)&&(ne=!0):(ne=!0,wt.__version=W.version);let En=wt.currentProgram;ne===!0&&(En=Lo(W,H,G));let Un=!1,Wi=!1,bs=!1;const fe=En.getUniforms(),Fe=wt.uniforms;if(vt.useProgram(En.program)&&(Un=!0,Wi=!0,bs=!0),W.id!==P&&(P=W.id,Wi=!0),Un||U!==w){vt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),fe.setValue(D,"projectionMatrix",w.projectionMatrix),fe.setValue(D,"viewMatrix",w.matrixWorldInverse);const bi=fe.map.cameraPosition;bi!==void 0&&bi.setValue(D,Ft.setFromMatrixPosition(w.matrixWorld)),he.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fe.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),U!==w&&(U=w,Wi=!0,bs=!0)}if(wt.needsLights&&(sn.state.directionalShadowMap.length>0&&fe.setValue(D,"directionalShadowMap",sn.state.directionalShadowMap,k),sn.state.spotShadowMap.length>0&&fe.setValue(D,"spotShadowMap",sn.state.spotShadowMap,k),sn.state.pointShadowMap.length>0&&fe.setValue(D,"pointShadowMap",sn.state.pointShadowMap,k)),G.isSkinnedMesh){fe.setOptional(D,G,"bindMatrix"),fe.setOptional(D,G,"bindMatrixInverse");const Ue=G.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),fe.setValue(D,"boneTexture",Ue.boneTexture,k))}G.isBatchedMesh&&(fe.setOptional(D,G,"batchingTexture"),fe.setValue(D,"batchingTexture",G._matricesTexture,k),fe.setOptional(D,G,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",G._indirectTexture,k),fe.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",G._colorsTexture,k));const Si=X.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&gt.update(G,X,En),(Wi||wt.receiveShadow!==G.receiveShadow)&&(wt.receiveShadow=G.receiveShadow,fe.setValue(D,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&H.environment!==null&&(Fe.envMapIntensity.value=H.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=Fb()),Wi&&(fe.setValue(D,"toneMappingExposure",S.toneMappingExposure),wt.needsLights&&_0(Fe,bs),pt&&W.fog===!0&&Pt.refreshFogUniforms(Fe,pt),Pt.refreshMaterialUniforms(Fe,W,At,dt,A.state.transmissionRenderTarget[w.id]),Ha.upload(D,Od(wt),Fe,k)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ha.upload(D,Od(wt),Fe,k),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fe.setValue(D,"center",G.center),fe.setValue(D,"modelViewMatrix",G.modelViewMatrix),fe.setValue(D,"normalMatrix",G.normalMatrix),fe.setValue(D,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ue=W.uniformsGroups;for(let bi=0,Es=Ue.length;bi<Es;bi++){const Vd=Ue[bi];yt.update(Vd,En),yt.bind(Vd,En)}}return En}function _0(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function y0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,H,X){const W=M.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=H,M.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const X=M.get(w);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0};const x0=D.createFramebuffer();this.setRenderTarget=function(w,H=0,X=0){z=w,R=H,O=X;let W=null,G=!1,pt=!1;if(w){const mt=M.get(w);if(mt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(D.FRAMEBUFFER,mt.__webglFramebuffer),V.copy(w.viewport),N.copy(w.scissor),q=w.scissorTest,vt.viewport(V),vt.scissor(N),vt.setScissorTest(q),P=-1;return}else if(mt.__webglFramebuffer===void 0)k.setupRenderTarget(w);else if(mt.__hasExternalTextures)k.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ht=w.depthTexture;if(mt.__boundDepthTexture!==Ht){if(Ht!==null&&M.has(Ht)&&(w.width!==Ht.image.width||w.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(w)}}const Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(pt=!0);const Rt=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Rt[H])?W=Rt[H][X]:W=Rt[H],G=!0):w.samples>0&&k.useMultisampledRTT(w)===!1?W=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Rt)?W=Rt[X]:W=Rt,V.copy(w.viewport),N.copy(w.scissor),q=w.scissorTest}else V.copy($).multiplyScalar(At).floor(),N.copy(Q).multiplyScalar(At).floor(),q=st;if(X!==0&&(W=x0),vt.bindFramebuffer(D.FRAMEBUFFER,W)&&vt.drawBuffers(w,W),vt.viewport(V),vt.scissor(N),vt.setScissorTest(q),G){const mt=M.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,mt.__webglTexture,X)}else if(pt){const mt=H;for(let Tt=0;Tt<w.textures.length;Tt++){const Rt=M.get(w.textures[Tt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Tt,Rt.__webglTexture,X,mt)}}else if(w!==null&&X!==0){const mt=M.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,X)}P=-1},this.readRenderTargetPixels=function(w,H,X,W,G,pt,_t,mt=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt){vt.bindFramebuffer(D.FRAMEBUFFER,Tt);try{const Rt=w.textures[mt],Ht=Rt.format,Kt=Rt.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),!he.textureFormatReadable(Ht)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Kt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-W&&X>=0&&X<=w.height-G&&D.readPixels(H,X,W,G,ct.convert(Ht),ct.convert(Kt),pt)}finally{const Rt=z!==null?M.get(z).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(w,H,X,W,G,pt,_t,mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt)if(H>=0&&H<=w.width-W&&X>=0&&X<=w.height-G){vt.bindFramebuffer(D.FRAMEBUFFER,Tt);const Rt=w.textures[mt],Ht=Rt.format,Kt=Rt.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),!he.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(H,X,W,G,ct.convert(Ht),ct.convert(Kt),0);const ue=z!==null?M.get(z).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,ue);const Te=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await a_(D,Te,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(It),D.deleteSync(Te),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,X=0){const W=Math.pow(2,-X),G=Math.floor(w.image.width*W),pt=Math.floor(w.image.height*W),_t=H!==null?H.x:0,mt=H!==null?H.y:0;k.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,_t,mt,G,pt),vt.unbindTexture()};const v0=D.createFramebuffer(),M0=D.createFramebuffer();this.copyTextureToTexture=function(w,H,X=null,W=null,G=0,pt=0){let _t,mt,Tt,Rt,Ht,Kt,It,ue,Te;const Ee=w.isCompressedTexture?w.mipmaps[pt]:w.image;if(X!==null)_t=X.max.x-X.min.x,mt=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,Ht=X.min.y,Kt=X.isBox3?X.min.z:0;else{const Fe=Math.pow(2,-G);_t=Math.floor(Ee.width*Fe),mt=Math.floor(Ee.height*Fe),w.isDataArrayTexture?Tt=Ee.depth:w.isData3DTexture?Tt=Math.floor(Ee.depth*Fe):Tt=1,Rt=0,Ht=0,Kt=0}W!==null?(It=W.x,ue=W.y,Te=W.z):(It=0,ue=0,Te=0);const de=ct.convert(H.format),Ge=ct.convert(H.type);let wt;H.isData3DTexture?(k.setTexture3D(H,0),wt=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(k.setTexture2DArray(H,0),wt=D.TEXTURE_2D_ARRAY):(k.setTexture2D(H,0),wt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const sn=D.getParameter(D.UNPACK_ROW_LENGTH),ne=D.getParameter(D.UNPACK_IMAGE_HEIGHT),En=D.getParameter(D.UNPACK_SKIP_PIXELS),Un=D.getParameter(D.UNPACK_SKIP_ROWS),Wi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Kt);const bs=w.isDataArrayTexture||w.isData3DTexture,fe=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const Fe=M.get(w),Si=M.get(H),Ue=M.get(Fe.__renderTarget),bi=M.get(Si.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,Ue.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Es=0;Es<Tt;Es++)bs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(w).__webglTexture,G,Kt+Es),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(H).__webglTexture,pt,Te+Es)),D.blitFramebuffer(Rt,Ht,_t,mt,It,ue,_t,mt,D.DEPTH_BUFFER_BIT,D.NEAREST);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||M.has(w)){const Fe=M.get(w),Si=M.get(H);vt.bindFramebuffer(D.READ_FRAMEBUFFER,v0),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,M0);for(let Ue=0;Ue<Tt;Ue++)bs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,G,Kt+Ue):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,G),fe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Si.__webglTexture,pt,Te+Ue):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Si.__webglTexture,pt),G!==0?D.blitFramebuffer(Rt,Ht,_t,mt,It,ue,_t,mt,D.COLOR_BUFFER_BIT,D.NEAREST):fe?D.copyTexSubImage3D(wt,pt,It,ue,Te+Ue,Rt,Ht,_t,mt):D.copyTexSubImage2D(wt,pt,It,ue,Rt,Ht,_t,mt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fe?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(wt,pt,It,ue,Te,_t,mt,Tt,de,Ge,Ee.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(wt,pt,It,ue,Te,_t,mt,Tt,de,Ee.data):D.texSubImage3D(wt,pt,It,ue,Te,_t,mt,Tt,de,Ge,Ee):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pt,It,ue,_t,mt,de,Ge,Ee.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pt,It,ue,Ee.width,Ee.height,de,Ee.data):D.texSubImage2D(D.TEXTURE_2D,pt,It,ue,_t,mt,de,Ge,Ee);D.pixelStorei(D.UNPACK_ROW_LENGTH,sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ne),D.pixelStorei(D.UNPACK_SKIP_PIXELS,En),D.pixelStorei(D.UNPACK_SKIP_ROWS,Un),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Wi),pt===0&&H.generateMipmaps&&D.generateMipmap(wt),vt.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&k.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?k.setTextureCube(w,0):w.isData3DTexture?k.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?k.setTexture2DArray(w,0):k.setTexture2D(w,0),vt.unbindTexture()},this.resetState=function(){R=0,O=0,z=null,vt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}function lp(s,t){if(t===K0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===zh||t===lg){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===zh)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}function Ob(s){const t=new Map,e=new Map,n=s.clone();return Lg(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Lg(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Lg(s.children[n],t.children[n],e)}class zb extends Hi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Xb(e)}),this.register(function(e){return new qb(e)}),this.register(function(e){return new eE(e)}),this.register(function(e){return new nE(e)}),this.register(function(e){return new iE(e)}),this.register(function(e){return new Yb(e)}),this.register(function(e){return new Kb(e)}),this.register(function(e){return new Zb(e)}),this.register(function(e){return new jb(e)}),this.register(function(e){return new Wb(e)}),this.register(function(e){return new Jb(e)}),this.register(function(e){return new $b(e)}),this.register(function(e){return new tE(e)}),this.register(function(e){return new Qb(e)}),this.register(function(e){return new Hb(e)}),this.register(function(e){return new cp(e,Zt.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new cp(e,Zt.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new sE(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=lo.extractUrlBase(t);o=lo.resolveURL(c,this.path)}else o=lo.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new od(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Bg){try{o[Zt.KHR_BINARY_GLTF]=new rE(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Zt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yE(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Zt.KHR_MATERIALS_UNLIT:o[u]=new Gb;break;case Zt.KHR_DRACO_MESH_COMPRESSION:o[u]=new oE(r,this.dracoLoader);break;case Zt.KHR_TEXTURE_TRANSFORM:o[u]=new aE;break;case Zt.KHR_MESH_QUANTIZATION:o[u]=new lE;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function Vb(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}function Ce(s,t,e){const n=s.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const Zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Hb{constructor(t){this.parser=t,this.name=Zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new ut(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],en);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new wy(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ey(h),c.distance=u;break;case"spot":c=new Sy(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Hn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class Gb{constructor(){this.name=Zt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(t,e,n){const i=[];t.color=new ut(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],en),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,we))}return Promise.all(i)}}class Wb{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Xb{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Wt(r,r)}return Promise.all(i)}}class qb{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class $b{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Yb{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(e.sheenColor=new ut(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],en)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,we)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Kb{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Zb{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new ut().setRGB(r[0],r[1],r[2],en),Promise.all(i)}}class jb{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IOR}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class Jb{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new ut().setRGB(r[0],r[1],r[2],en),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,we)),Promise.all(i)}}class Qb{constructor(t){this.parser=t,this.name=Zt.EXT_MATERIALS_BUMP}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}}class tE{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ce(this.parser,t,this.name)!==null?ti:null}extendMaterialParams(t,e){const n=Ce(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class eE{constructor(t){this.parser=t,this.name=Zt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class nE{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class iE{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class cp{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class sE{constructor(t){this.name=Zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mn.TRIANGLES&&c.mode!==mn.TRIANGLE_STRIP&&c.mode!==mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const p of u){const _=new Dt,m=new L,g=new Bn,x=new L(1,1,1),b=new nd(p.geometry,p.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),b.setMatrixAt(v,_.compose(m,g,x));for(const v in l)if(v==="_COLOR_0"){const A=l[v];b.instanceColor=new cn(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);ye.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Bg="glTF",Ur=12,hp={JSON:1313821514,BIN:5130562};class rE{constructor(t){this.name=Zt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ur),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Bg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ur,r=new DataView(t,Ur);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===hp.JSON){const c=new Uint8Array(t,Ur+o,a);this.content=n.decode(c)}else if(l===hp.BIN){const c=Ur+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class oE{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=qh[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=qh[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=sr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}u(f)},a,c,en,d)})})}}class aE{constructor(){this.name=Zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class lE{constructor(){this.name=Zt.KHR_MESH_QUANTIZATION}}class Dg extends vr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,p=t*c,_=p-c,m=-2*f+3*d,g=f-d,x=1-m,b=g-d+u;for(let v=0;v!==a;v++){const A=o[_+v+a],T=o[_+v+l]*h,E=o[p+v+a],y=o[p+v]*h;r[v]=x*A+b*T+m*E+g*y}return r}}const cE=new Bn;class hE extends Dg{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return cE.fromArray(r).normalize().toArray(r),r}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},up={9728:Ae,9729:Ie,9984:eg,9985:ka,9986:no,9987:fi},dp={33071:qn,33648:Ka,10497:hr},vc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uE={CUBICSPLINE:void 0,LINEAR:Eo,STEP:bo},Mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new rd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fn})),s.DefaultMaterial}function ts(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Hn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function fE(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function pE(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mE(s){let t;const e=s.extensions&&s.extensions[Zt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Sc(e.attributes):t=s.indices+":"+Sc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Sc(s.targets[n]);return t}function Sc(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function $h(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const _E=new Dt;class yE{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Vb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new bg(this.options.manager):this.textureLoader=new Cy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new od(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ts(r,a,i),Hn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Zt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(lo.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=vc[i.type],a=sr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Vt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=vc[i.type],c=sr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(f&&f!==u){const g=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let b=e.cache.get(x);b||(_=new c(a,g*f,i.count*f/h),b=new H_(_,f/h),e.cache.add(x,b)),m=new Qu(b,l,d%f/h,p)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Vt(_,l,p);if(i.sparse!==void 0){const g=vc.SCALAR,x=sr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,A=new x(o[1],b,i.sparse.count*g),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,y=A.length;E<y;E++){const S=A[E];if(m.setX(S,T[E*l]),l>=2&&m.setY(S,T[E*l+1]),l>=3&&m.setZ(S,T[E*l+2]),l>=4&&m.setW(S,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=up[d.magFilter]||Ie,h.minFilter=up[d.minFilter]||fi,h.wrapS=dp[d.wrapS]||hr,h.wrapT=dp[d.wrapT]||hr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ae&&h.minFilter!==Ie,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;e.isImageBitmapLoader===!0&&(p=function(_){const m=new Pe(_);m.needsUpdate=!0,d(m)}),e.load(lo.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Hn(u,o),u.userData.mimeType=o.mimeType||gE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Zt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Zt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Zt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _g,jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Qa,jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return rd}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[Zt.KHR_MATERIALS_UNLIT]){const u=i[Zt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ut(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],en),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,we)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ke);const h=r.alphaMode||Mc.OPAQUE;if(h===Mc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Mc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Wt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Yn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yn){const u=r.emissiveFactor;a.emissive=new ut().setRGB(u[0],u[1],u[2],en)}return r.emissiveTexture!==void 0&&o!==Yn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,we)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Hn(u,r),e.associations.set(u,{materials:t}),r.extensions&&ts(i,u,r),u})}createUniqueName(t){const e=le.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return fp(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=mE(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Zt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fp(new Le,c,e),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?dE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],m=o[f];let g;const x=c[f];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new q_(_,x):new Me(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?g.geometry=lp(g.geometry,lg):m.mode===mn.TRIANGLE_FAN&&(g.geometry=lp(g.geometry,zh));else if(m.mode===mn.LINES)g=new Hh(_,x);else if(m.mode===mn.LINE_STRIP)g=new id(_,x);else if(m.mode===mn.LINE_LOOP)g=new J_(_,x);else if(m.mode===mn.POINTS)g=new Q_(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&pE(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),Hn(g,r),m.extensions&&ts(i,g,m),e.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&ts(i,u[0],r),u[0];const d=new Qe;r.extensions&&ts(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new $e(T_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Tl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Hn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Dt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ed(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],p=i.samplers[f.sampler],_=f.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let b=0,v=d.length;b<v;b++){const A=d[b],T=f[b],E=p[b],y=_[b],S=m[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const B=n._createAnimationTracks(A,T,E,y,S);if(B)for(let R=0;R<B.length;R++)g.push(B[R])}const x=new py(r,void 0,g);return Hn(x,i),x})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,_E)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,p=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new gg:c.length>1?h=new Qe:c.length===1?h=c[0]:h=new ye,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Hn(h,r),r.extensions&&ts(n,h,r),r.matrix!==void 0){const u=new Dt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Qe;n.name&&(r.name=i.createUniqueName(n.name)),Hn(r,n),n.extensions&&ts(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(Ob(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof jn||d instanceof Pe)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];Ii[r.path]===Ii.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ii[r.path]){case Ii.weights:c=pr;break;case Ii.rotation:c=mr;break;case Ii.translation:case Ii.scale:c=gr;break;default:switch(n.itemSize){case 1:c=pr;break;case 2:case 3:default:c=gr;break}break}const h=i.interpolation!==void 0?uE[i.interpolation]:Eo,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+Ii[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=$h(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof mr?hE:Dg;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xE(s,t,e){const n=t.attributes,i=new Ve;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=$h(sr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=$h(sr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ke;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function fp(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=qh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qt.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),Hn(s,t),xE(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?fE(s,t.targets,e):s})}const Ga=3e38,vE=1e6;function pp(s){const t=(s==null?void 0:s.fps)===void 0||Number.isFinite(s.fps)&&s.fps>0;return s!==void 0&&s.columns>0&&s.rows>0&&t}function mp(s){return{columns:s.columns,rows:s.rows,frameCount:s.columns*s.rows,fps:s.fps??30,loop:s.loop??!0}}function Ug(s,t){if(!t||t.loop)return s;const e=t.frameCount/t.fps;return Math.min(s,e)}function ME(s,t,e){if(s===0)return Ga;const n=s+(Math.random()-.5)*2*t;return Math.max(.001,Ug(n,e))}function SE(s,t,e){if(s===0)return vE;const n=s+t;return Ug(n,e)}const co="initialPosition",rr="initialVelocity",or="sizeVar",Gn="timeVar",ho="opacityVar",uo="colorStartVar",fo="colorEndVar",ua="map",bc="time",Nr="gravity",es="viewDistance",da="viewDistanceCameraPosition",ns="alphaTest",kr="orientationMatrix",Vs="flipbookColumns",fa="flipbookRows",Fr="flipbookFrameCount",pa="flipbookFps",ma="flipbookLoop",ga="USE_ALPHATEST",tr="ORIENTATION_BILLBOARD",Yh="ORIENTATION_BILLBOARD_Y",Kh="ORIENTATION_FIXED",Zh="ORIENTATION_VELOCITY",gp="LOCK_TO_EMITTER",Hs="USE_FLIPBOOK",bE=2,EE=256,Cn=[],Or=new L,_p=new Sn,yp=new zt,TE=new Dt,Ec=Math.PI/180;function wE(s){switch(s){case"billboard":return tr;case"billboardY":return Yh;case"fixed":return Kh;case"velocity":return Zh;default:return tr}}function AE(s){return _p.set(s.x*Ec,s.y*Ec,s.z*Ec,"XYZ"),yp.setFromMatrix4(TE.makeRotationFromEuler(_p)),yp}class CE extends He{constructor(t=!1){super({uniforms:{[ua]:{value:null},[bc]:{value:0},[Nr]:{value:new L},[es]:{value:0},[da]:{value:new L},[kr]:{value:new zt},[Vs]:{value:1},[fa]:{value:1},[Fr]:{value:1},[pa]:{value:30},[ma]:{value:1}},defines:t?{[gp]:"",[tr]:!0}:{[tr]:!0},vertexShader:`
        uniform float ${bc};
        uniform vec3 ${Nr};
        uniform float ${es};
        uniform vec3 ${da};
        uniform mat3 ${kr};

        #ifdef ${Hs}
          uniform float ${Vs};
          uniform float ${fa};
          uniform float ${Fr};
          uniform float ${pa};
          uniform float ${ma};
        #endif

        attribute vec3 ${co};
        attribute vec3 ${rr};
        attribute vec2 ${or};
        attribute vec2 ${Gn};
        attribute vec2 ${ho};
        attribute vec3 ${uo};
        attribute vec3 ${fo};

        varying vec2 vUv;
        varying float vLife;
        varying vec2 vOpacityVar;
        varying vec3 vColorStart;
        varying vec3 vColorEnd;

        void main() {
          float age = ${bc} - ${Gn}.x;
          vLife = clamp(1.0 - age / ${Gn}.y, 0.0, 1.0);

          // Pass variations to fragment shader
          vOpacityVar = ${ho};
          vColorStart = ${uo};
          vColorEnd = ${fo};

          if (vLife <= 0.0) {
            gl_Position = vec4(9999.0, 9999.0, 9999.0, 1.0);
            return;
          }

          // Calculate flipbook UV
          #ifdef ${Hs}
            float rawFrame = floor(age * ${pa});
            float frameIndex;
            if (${ma} > 0.5) {
              frameIndex = mod(rawFrame, ${Fr});
            } else {
              frameIndex = min(rawFrame, ${Fr} - 1.0);
            }
            float col = mod(frameIndex, ${Vs});
            float row = floor(frameIndex / ${Vs});
            vec2 frameSize = vec2(1.0 / ${Vs}, 1.0 / ${fa});
            vec2 frameOffset = vec2(col, row) * frameSize;
            vUv = frameOffset + uv * frameSize;
          #else
            vUv = uv;
          #endif

          // Physics calculation (same for both modes)
          vec3 physics = ${co} + ${rr} * age + 0.5 * ${Nr} * age * age;

          // Calculate world position based on lock mode
          // - LOCK_TO_EMITTER: initialPosition is local, add current emitter world position
          // - Otherwise: initialPosition is already world position
          #ifdef ${gp}
            vec3 worldPos = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz + physics;
          #else
            vec3 worldPos = physics;
          #endif

          // Per-particle view-distance culling on XZ plane.
          if (${es} > 0.0) {
            vec2 toCameraXZ = worldPos.xz - ${da}.xz;
            if (dot(toCameraXZ, toCameraXZ) > ${es} * ${es}) {
              gl_Position = vec4(9999.0, 9999.0, 9999.0, 1.0);
              return;
            }
          }

          // Calculate right and up vectors based on orientation mode
          vec3 particleRight;
          vec3 particleUp;

          #ifdef ${tr}
            // Billboard: particles always face camera (use camera's right/up directly)
            particleRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
            particleUp = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          #elif defined(${Yh})
            // BillboardY: rotate around Y-axis to face camera view direction
            vec3 cameraForward = -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
            vec3 forwardXZ = vec3(cameraForward.x, 0.0, cameraForward.z);
            if (length(forwardXZ) < 1e-4) {
              // Fallback when camera is looking nearly straight up or down
              forwardXZ = vec3(0.0, 0.0, 1.0);
            }
            particleRight = normalize(cross(forwardXZ, vec3(0.0, 1.0, 0.0)));
            particleUp = vec3(0.0, 1.0, 0.0);
          #elif defined(${Kh})
            // Fixed: use orientation matrix
            particleRight = ${kr}[0];
            particleUp = ${kr}[1];
          #elif defined(${Zh})
            // Velocity-aligned: particle Y-axis aligns to velocity direction,
            // billboards around that axis to face the camera.
            // v(t) = v0 + g * t
            vec3 currentVelocity = ${rr} + ${Nr} * age;
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
          float interpolatedSize = mix(${or}.y, ${or}.x, vLife);

          // Use the vertex position from the plane geometry to create quad
          vec3 quadOffset = (position.x * particleRight + position.y * particleUp) * interpolatedSize;
          vec3 finalPos = worldPos + quadOffset;

          gl_Position = projectionMatrix * viewMatrix * vec4(finalPos, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D ${ua};

        #ifdef ${ga}
          uniform float ${ns};
        #endif

        varying vec2 vUv;
        varying float vLife;
        varying vec2 vOpacityVar;
        varying vec3 vColorStart;
        varying vec3 vColorEnd;

        void main() {
          vec4 texColor = texture2D(${ua}, vUv);

          vec3 color = mix(vColorEnd, vColorStart, vLife);
          float alphaGradient = mix(vOpacityVar.y, vOpacityVar.x, vLife);
          float finalAlpha = texColor.a * alphaGradient;

          #ifdef ${ga}
            if (finalAlpha < ${ns}) discard;
          #endif

          gl_FragColor = vec4(texColor.rgb * color, finalAlpha);
        }
      `,side:fn})}setGravity(t){return this.uniforms[Nr].value.copy(t),this}setViewDistanceCulling(t,e){return this.uniforms[es].value=Math.max(0,e),this.uniforms[da].value.set(t.x,t.y,t.z),this}disableViewDistanceCulling(){return this.uniforms[es].value=0,this}setAlphaTest(t){return t>0?ns in this.uniforms?this.uniforms[ns].value=t:(this.uniforms[ns]={value:t},this.defines[ga]="",this.needsUpdate=!0):t===0&&ns in this.uniforms&&(delete this.uniforms[ns],delete this.defines[ga],this.needsUpdate=!0),this}setOrientation(t){return delete this.defines[tr],delete this.defines[Yh],delete this.defines[Kh],delete this.defines[Zh],this.defines[wE(t)]=!0,this.side=t==="fixed"?Ke:fn,this.needsUpdate=!0,this}setOrientationFixedRotation(t){return this.uniforms[kr].value.copy(AE(t)),this}setTexture(t){return this.uniforms[ua].value=t,this.visible=!!t,this}setTransparent(t){return this.transparent!==t&&(this.needsUpdate=!0),this.transparent=t,this.depthWrite=!this.transparent,this}updateTime(t){this.uniforms.time.value=t}setFlipbook(t,e,n,i){return t>1||e>1?(Hs in this.defines||(this.defines[Hs]="",this.needsUpdate=!0),this.uniforms[Vs].value=t,this.uniforms[fa].value=e,this.uniforms[Fr].value=t*e,this.uniforms[pa].value=n,this.uniforms[ma].value=i?1:0):Hs in this.defines&&(delete this.defines[Hs],this.needsUpdate=!0),this}}const RE={alphaTest:0,colorEnd:new ut(1,1,1),colorEndVariance:new ut(0,0,0),colorStart:new ut(1,1,1),colorStartVariance:new ut(0,0,0),colorIntensityStart:1,colorIntensityEnd:1,colorIntensityStartVariance:0,colorIntensityEndVariance:0,flipbook:void 0,lifetime:1,lifetimeVariance:0,lockToEmitter:!1,maxParticles:0,gravity:new L(0,0,0),opacityEnd:0,opacityEndVariance:0,opacityStart:1,opacityStartVariance:0,orientation:"billboard",orientationFixedRotation:new L(0,0,0),position:new L(0,0,0),positionVariance:new L(0,0,0),rate:10,rateVariance:0,sizeEnd:1,sizeEndVariance:0,sizeStart:1,sizeStartVariance:0,texture:null,transparent:!1,velocity:new L(0,0,0),velocityVariance:new L(0,0,0)};class xp{constructor(t){C(this,"_options");C(this,"_poolIndex");C(this,"_currentTime");C(this,"_emissionAccumulator");C(this,"_isMaxParticlesAutoCalculated",!1);C(this,"_mesh");C(this,"_paused",!1);C(this,"_flipbook",null);C(this,"_pendingEmissions",new Map);C(this,"_pendingEmissionOverrideIds",new WeakMap);C(this,"_nextPendingEmissionOverrideId",1);C(this,"_latestRenderableUntil",0);C(this,"_hasImmortalParticles",!1);C(this,"_renderableStateDirty",!1);C(this,"_particleAttachmentSlots",null);C(this,"_attachmentMatrices",new Map);C(this,"_activeAttachmentSlotsScratch",[]);C(this,"_particleIndicesByAttachmentSlot",new Map);C(this,"_dirtyAttachmentSlots",new Set);C(this,"_cleanupAttachmentSlots",new Set);this._options={...RE};for(const i in t)t[i]!==void 0&&(this._options[i]=t[i]);this._options.maxParticles||(this._options.maxParticles=this._calculateMaxParticles(),this._isMaxParticlesAutoCalculated=!0);for(const i in this._options){const r=this._options[i];(r instanceof L||r instanceof ut)&&(this._options[i]=r.clone())}pp(this._options.flipbook)&&(this._flipbook=mp(this._options.flipbook));const e=this._createGeometry(this._options.maxParticles),n=new CE(this._options.lockToEmitter).setTexture(this._options.texture).setGravity(this._options.gravity).setTransparent(this._options.transparent).setAlphaTest(this._options.alphaTest).setOrientation(this._options.orientation).setOrientationFixedRotation(this._options.orientationFixedRotation);if(this._flipbook&&n.setFlipbook(this._flipbook.columns,this._flipbook.rows,this._flipbook.fps,this._flipbook.loop),this._mesh=new nd(e,n,this._options.maxParticles),this._mesh.position.copy(this._options.position),this._options.lockToEmitter){this._mesh.instanceMatrix.setUsage(_n),this._particleAttachmentSlots=new Uint32Array(this._options.maxParticles);const i=new Dt;for(let r=0;r<this._options.maxParticles;r++)this._mesh.setMatrixAt(r,i);this._mesh.instanceMatrix.needsUpdate=!0}this._updateBoundingBox(),this._poolIndex=0,this._currentTime=0,this._emissionAccumulator=0}get mesh(){return this._mesh}get paused(){return this._paused}get flipbook(){return this._flipbook}hasRenderableParticles(){return this._pendingEmissions.size>0?!0:(this._renderableStateDirty&&this._recomputeRenderableState(),this._hasImmortalParticles||this._currentTime<this._latestRenderableUntil)}burst(t,e=0,n){if(t<=0)return;if(!this.mesh.material.visible){this._enqueuePendingEmission(t,e,n);return}this.mesh.matrixWorldAutoUpdate&&this.mesh.updateMatrixWorld(),this._flushPendingEmissions();const r=this._attachmentMatrices.get(e)??this.mesh.matrixWorld;this._emit(t,r,e,n)}pause(){this._paused=!0,this._emissionAccumulator=0}restart(){this._paused=!1}setViewDistanceCulling(t,e){this.mesh.material.setViewDistanceCulling(t,e)}disableViewDistanceCulling(){this.mesh.material.disableViewDistanceCulling()}_calculateMaxParticles(){const t=this._options.lifetime+this._options.lifetimeVariance,e=Math.ceil(this._options.rate*t),i=Math.ceil(e*1.2);return Math.max(10,i)}_calculateBoundingBox(){const t=SE(this._options.lifetime,this._options.lifetimeVariance,this._flipbook),e=this._options.sizeStart+this._options.sizeStartVariance,n=this._options.sizeEnd+this._options.sizeEndVariance,i=Math.max(e,n),r=this._options.positionVariance,o=Math.abs(this._options.velocity.x)+this._options.velocityVariance.x,a=Math.abs(this._options.velocity.y)+this._options.velocityVariance.y,l=Math.abs(this._options.velocity.z)+this._options.velocityVariance.z,c=new L(.5*Math.abs(this._options.gravity.x)*t*t,.5*Math.abs(this._options.gravity.y)*t*t,.5*Math.abs(this._options.gravity.z)*t*t),h=new L(o*t,a*t,l*t),u=new L(r.x+h.x+c.x+i,r.y+h.y+c.y+i,r.z+h.z+c.z+i),d=new L(-u.x,-u.y,-u.z),f=new L(u.x,u.y,u.z);return(this._options.velocity.x>0?f:d).x+=this._options.velocity.x*t,(this._options.velocity.y>0?f:d).y+=this._options.velocity.y*t,(this._options.velocity.z>0?f:d).z+=this._options.velocity.z*t,new Ve(d,f)}_updateBoundingBox(){const t=this._calculateBoundingBox();this.mesh.geometry.boundingBox=t;const e=new L;t.getCenter(e);const n=t.getSize(new L).length()*.5;this.mesh.geometry.boundingSphere=new ke(e,n)}_emit(t,e,n=0,i){const r=this.mesh.geometry,o=r.getAttribute(co),a=r.getAttribute(rr),l=r.getAttribute(or),c=r.getAttribute(Gn),h=r.getAttribute(ho),u=r.getAttribute(uo),d=r.getAttribute(fo),f=this._poolIndex;let p=0,_=!1;const m=(i==null?void 0:i.colorEnd)??this._options.colorEnd,g=(i==null?void 0:i.colorEndVariance)??this._options.colorEndVariance,x=(i==null?void 0:i.colorStart)??this._options.colorStart,b=(i==null?void 0:i.colorStartVariance)??this._options.colorStartVariance,v=(i==null?void 0:i.colorIntensityEnd)??this._options.colorIntensityEnd,A=(i==null?void 0:i.colorIntensityEndVariance)??this._options.colorIntensityEndVariance,T=(i==null?void 0:i.colorIntensityStart)??this._options.colorIntensityStart,E=(i==null?void 0:i.colorIntensityStartVariance)??this._options.colorIntensityStartVariance,y=(i==null?void 0:i.lifetime)??this._options.lifetime,S=(i==null?void 0:i.lifetimeVariance)??this._options.lifetimeVariance,B=(i==null?void 0:i.opacityEnd)??this._options.opacityEnd,R=(i==null?void 0:i.opacityEndVariance)??this._options.opacityEndVariance,O=(i==null?void 0:i.opacityStart)??this._options.opacityStart,z=(i==null?void 0:i.opacityStartVariance)??this._options.opacityStartVariance,P=(i==null?void 0:i.positionVariance)??this._options.positionVariance,U=(i==null?void 0:i.sizeEnd)??this._options.sizeEnd,V=(i==null?void 0:i.sizeEndVariance)??this._options.sizeEndVariance,N=(i==null?void 0:i.sizeStart)??this._options.sizeStart,q=(i==null?void 0:i.sizeStartVariance)??this._options.sizeStartVariance,j=(i==null?void 0:i.velocity)??this._options.velocity,it=(i==null?void 0:i.velocityVariance)??this._options.velocityVariance;let at=this._latestRenderableUntil,dt=this._hasImmortalParticles;for(let At=0;At<t;At++){const te=c.getX(this._poolIndex),kt=c.getY(this._poolIndex);if(kt>0){const k=te+kt;(kt>=Ga||k>=this._latestRenderableUntil)&&(this._renderableStateDirty=!0)}const $=(Math.random()-.5)*2*P.x,Q=(Math.random()-.5)*2*P.y,st=(Math.random()-.5)*2*P.z;Or.set($,Q,st),this._options.lockToEmitter||Or.applyMatrix4(e);const Lt=j.x+(Math.random()-.5)*2*it.x,Ct=j.y+(Math.random()-.5)*2*it.y,Bt=j.z+(Math.random()-.5)*2*it.z,xe=ME(y,S,this._flipbook);xe>=Ga?dt=!0:at=Math.max(at,this._currentTime+xe);const Ft=Math.max(0,N+(Math.random()-.5)*2*q),ie=Math.max(0,U+(Math.random()-.5)*2*V),se=Math.max(0,Math.min(1,O+(Math.random()-.5)*2*z)),Xt=Math.max(0,Math.min(1,B+(Math.random()-.5)*2*R)),ge=Math.max(0,T+(Math.random()-.5)*2*E),D=Math.max(0,v+(Math.random()-.5)*2*A),be=Math.max(0,x.r+(Math.random()-.5)*2*b.r)*ge,ee=Math.max(0,x.g+(Math.random()-.5)*2*b.g)*ge,he=Math.max(0,x.b+(Math.random()-.5)*2*b.b)*ge,vt=Math.max(0,m.r+(Math.random()-.5)*2*g.r)*D,I=Math.max(0,m.g+(Math.random()-.5)*2*g.g)*D,M=Math.max(0,m.b+(Math.random()-.5)*2*g.b)*D;if(o.setXYZ(this._poolIndex,Or.x,Or.y,Or.z),a.setXYZ(this._poolIndex,Lt,Ct,Bt),l.setXY(this._poolIndex,Ft,ie),c.setXY(this._poolIndex,this._currentTime,xe),h.setXY(this._poolIndex,se,Xt),u.setXYZ(this._poolIndex,be,ee,he),d.setXYZ(this._poolIndex,vt,I,M),this._particleAttachmentSlots&&this._options.lockToEmitter){const k=this._particleAttachmentSlots[this._poolIndex],Z=this._particleIndicesByAttachmentSlot.get(k);Z&&(Z.delete(this._poolIndex),Z.size===0&&(this._particleIndicesByAttachmentSlot.delete(k),this._cleanupAttachmentSlots.delete(k),k!==n&&(this._dirtyAttachmentSlots.delete(k),this._attachmentMatrices.delete(k)))),this._particleAttachmentSlots[this._poolIndex]=n,this._particleIndicesByAttachmentSlot.has(n)||this._particleIndicesByAttachmentSlot.set(n,new Set),this._particleIndicesByAttachmentSlot.get(n).add(this._poolIndex),this._cleanupAttachmentSlots.add(n);const tt=this._attachmentMatrices.get(n)??e;this._mesh.setMatrixAt(this._poolIndex,tt),_=!0}this._poolIndex=(this._poolIndex+1)%this._options.maxParticles,p++}if(this._latestRenderableUntil=at,this._hasImmortalParticles=dt,Cn.push(o),Cn.push(a),Cn.push(l),Cn.push(c),Cn.push(h),Cn.push(u),Cn.push(d),p>0){if(f+p<=this._options.maxParticles)Cn.forEach(At=>At.addUpdateRange(f*At.itemSize,p*At.itemSize));else{const At=this._options.maxParticles-f,te=p-At;Cn.forEach(kt=>{kt.addUpdateRange(f*kt.itemSize,At*kt.itemSize),kt.addUpdateRange(0,te*kt.itemSize)})}Cn.forEach(At=>At.needsUpdate=!0)}_&&(this._mesh.instanceMatrix.needsUpdate=!0),Cn.length=0}_getCurrentRate(){if(this._options.rateVariance===0)return this._options.rate;const t=(Math.random()-.5)*2*this._options.rateVariance;return Math.max(0,this._options.rate+t)}update(t){const e=Math.min(t,.1),n=this.mesh.material;if(this._currentTime+=t,n.updateTime(this._currentTime),!n.visible||(this.mesh.matrixWorldAutoUpdate&&this.mesh.updateMatrixWorld(),this._flushPendingEmissions(),this._paused))return;const i=this._getCurrentRate();this._emissionAccumulator+=i*e;const r=Math.floor(this._emissionAccumulator);r>0&&(this.mesh.matrixWorldAutoUpdate&&this.mesh.updateMatrixWorld(),this._emit(r,this.mesh.matrixWorld),this._emissionAccumulator-=r)}updateParameters(t){const e=this.mesh.material;let n=!1,i=!1;t.alphaTest!==void 0&&(this._options.alphaTest=t.alphaTest,e.setAlphaTest(this._options.alphaTest)),t.colorEnd!==void 0&&this._options.colorEnd.copy(t.colorEnd),t.colorEndVariance!==void 0&&this._options.colorEndVariance.copy(t.colorEndVariance),t.colorStart!==void 0&&this._options.colorStart.copy(t.colorStart),t.colorStartVariance!==void 0&&this._options.colorStartVariance.copy(t.colorStartVariance),t.colorIntensityStart!==void 0&&(this._options.colorIntensityStart=t.colorIntensityStart),t.colorIntensityEnd!==void 0&&(this._options.colorIntensityEnd=t.colorIntensityEnd),t.colorIntensityStartVariance!==void 0&&(this._options.colorIntensityStartVariance=t.colorIntensityStartVariance),t.colorIntensityEndVariance!==void 0&&(this._options.colorIntensityEndVariance=t.colorIntensityEndVariance),t.flipbook!==void 0&&(this._options.flipbook=t.flipbook,pp(t.flipbook)?(this._flipbook=mp(t.flipbook),e.setFlipbook(this._flipbook.columns,this._flipbook.rows,this._flipbook.fps,this._flipbook.loop)):(this._flipbook=null,e.setFlipbook(1,1,30,!0)),n=!0),t.gravity!==void 0&&(this._options.gravity.copy(t.gravity),e.setGravity(this._options.gravity),n=!0),t.lifetime!==void 0&&this._options.lifetime!==t.lifetime&&(this._options.lifetime=t.lifetime,n=!0,i=!0),t.lifetimeVariance!==void 0&&this._options.lifetimeVariance!==t.lifetimeVariance&&(this._options.lifetimeVariance=t.lifetimeVariance,n=!0,i=!0),t.opacityEnd!==void 0&&(this._options.opacityEnd=t.opacityEnd),t.opacityEndVariance!==void 0&&(this._options.opacityEndVariance=t.opacityEndVariance),t.opacityStart!==void 0&&(this._options.opacityStart=t.opacityStart),t.opacityStartVariance!==void 0&&(this._options.opacityStartVariance=t.opacityStartVariance),t.position!==void 0&&(this._options.position.copy(t.position),this.mesh.position.copy(this._options.position)),t.positionVariance!==void 0&&!this._options.positionVariance.equals(t.positionVariance)&&(this._options.positionVariance.copy(t.positionVariance),n=!0),t.rate!==void 0&&(this._options.rate!==t.rate&&(i=!0),this._options.rate=t.rate),t.rateVariance!==void 0&&(this._options.rateVariance=t.rateVariance),t.sizeEnd!==void 0&&this._options.sizeEnd!==t.sizeEnd&&(this._options.sizeEnd=t.sizeEnd,n=!0),t.sizeEndVariance!==void 0&&this._options.sizeEndVariance!==t.sizeEndVariance&&(this._options.sizeEndVariance=t.sizeEndVariance,n=!0),t.sizeStart!==void 0&&this._options.sizeStart!==t.sizeStart&&(this._options.sizeStart=t.sizeStart,n=!0),t.sizeStartVariance!==void 0&&this._options.sizeStartVariance!==t.sizeStartVariance&&(this._options.sizeStartVariance=t.sizeStartVariance,n=!0),t.orientation!==void 0&&(this._options.orientation=t.orientation,e.setOrientation(this._options.orientation)),t.orientationFixedRotation!==void 0&&(this._options.orientationFixedRotation=t.orientationFixedRotation,e.setOrientationFixedRotation(this._options.orientationFixedRotation)),t.texture!==void 0&&(this._options.texture=t.texture,e.setTexture(this._options.texture)),t.transparent!==void 0&&(this._options.transparent=t.transparent,e.setTransparent(this._options.transparent)),t.velocity!==void 0&&!this._options.velocity.equals(t.velocity)&&(this._options.velocity.copy(t.velocity),n=!0),t.velocityVariance!==void 0&&!this._options.velocityVariance.equals(t.velocityVariance)&&(this._options.velocityVariance.copy(t.velocityVariance),n=!0);const r=this._options.maxParticles;t.maxParticles!==void 0&&t.maxParticles>0?(this._options.maxParticles=t.maxParticles,this._isMaxParticlesAutoCalculated=!1):(t.maxParticles===0||this._isMaxParticlesAutoCalculated&&i)&&(this._options.maxParticles=this._calculateMaxParticles(),this._isMaxParticlesAutoCalculated=!0),this._options.maxParticles!==r&&this._resize(),n&&this._updateBoundingBox()}_resize(){const t=this.mesh.geometry,e=this.mesh.instanceMatrix,n=this._createGeometry(this._options.maxParticles),i=t.getAttribute(Gn).count,r=Math.min(i,this._options.maxParticles);r>0&&this._copyParticleData(t,n,r),n.boundingBox=t.boundingBox,n.boundingSphere=t.boundingSphere,this.mesh.geometry=n,this.mesh.count=this._options.maxParticles;const o=new cn(new Float32Array(this._options.maxParticles*16),16);o.setUsage(e.usage);const a=e.array,l=o.array,c=Math.min(a.length,l.length);l.set(a.subarray(0,c),0);const h=e.count;if(this._options.maxParticles>h){const u=new Dt().elements;for(let d=h;d<this._options.maxParticles;d++)l.set(u,d*16)}if(this.mesh.dispose(),this.mesh.instanceMatrix=o,this.mesh.instanceMatrix.needsUpdate=!0,t.dispose(),this._poolIndex>=this._options.maxParticles&&(this._poolIndex=0),this._options.lockToEmitter){const u=this._particleAttachmentSlots;if(this._particleAttachmentSlots=new Uint32Array(this._options.maxParticles),u){const d=Math.min(u.length,this._particleAttachmentSlots.length);this._particleAttachmentSlots.set(u.subarray(0,d),0)}for(const[d,f]of this._particleIndicesByAttachmentSlot.entries()){for(const p of f)p>=this._options.maxParticles&&f.delete(p);f.size===0&&(this._particleIndicesByAttachmentSlot.delete(d),this._dirtyAttachmentSlots.delete(d),this._cleanupAttachmentSlots.delete(d),this._attachmentMatrices.delete(d))}}}_createGeometry(t){return new xr(1,1).setAttribute(co,new cn(new Float32Array(t*3),3).setUsage(_n)).setAttribute(rr,new cn(new Float32Array(t*3),3).setUsage(_n)).setAttribute(or,new cn(new Float32Array(t*2),2).setUsage(_n)).setAttribute(Gn,new cn(new Float32Array(t*2),2).setUsage(_n)).setAttribute(ho,new cn(new Float32Array(t*2),2).setUsage(_n)).setAttribute(uo,new cn(new Float32Array(t*3),3).setUsage(_n)).setAttribute(fo,new cn(new Float32Array(t*3),3).setUsage(_n)).deleteAttribute("normal")}_copyParticleData(t,e,n){this._copyAttribute(t,e,co,n),this._copyAttribute(t,e,rr,n),this._copyAttribute(t,e,or,n),this._copyAttribute(t,e,Gn,n),this._copyAttribute(t,e,ho,n),this._copyAttribute(t,e,uo,n),this._copyAttribute(t,e,fo,n)}_copyAttribute(t,e,n,i){const r=t.getAttribute(n),o=e.getAttribute(n),a=i*r.itemSize,l=r.array,c=o.array;for(let h=0;h<a;h++)c[h]=l[h];o.needsUpdate=!0}killAttachmentSlot(t){if(this._clearPendingEmissionsForAttachmentSlot(t),!this._particleAttachmentSlots||!this._options.lockToEmitter)return;const e=this._particleIndicesByAttachmentSlot.get(t);if(!e||e.size===0)return;const i=this.mesh.geometry.getAttribute(Gn);this._renderableStateDirty=!0;for(const r of e)i.setY(r,0);i.needsUpdate=!0,e.clear(),this._dirtyAttachmentSlots.delete(t),this._cleanupAttachmentSlots.delete(t),this._attachmentMatrices.delete(t),this._particleIndicesByAttachmentSlot.delete(t)}_clearPendingEmissionsForAttachmentSlot(t){if(this._pendingEmissions.size!==0)for(const[e,n]of this._pendingEmissions.entries())n.attachmentSlot===t&&this._pendingEmissions.delete(e)}_recomputeRenderableState(){const t=this.mesh.geometry.getAttribute(Gn);if(!t){this._latestRenderableUntil=0,this._hasImmortalParticles=!1,this._renderableStateDirty=!1;return}let e=0,n=!1;for(let i=0;i<t.count;i++){const r=t.getX(i),o=t.getY(i);if(!(o<=0)){if(o>=Ga){n=!0;continue}e=Math.max(e,r+o)}}this._latestRenderableUntil=e,this._hasImmortalParticles=n,this._renderableStateDirty=!1}setAttachmentMatrix(t,e){const n=this._particleIndicesByAttachmentSlot.get(t);if(this._options.lockToEmitter&&t===0&&(!n||n.size===0)){this._dirtyAttachmentSlots.delete(t),this._cleanupAttachmentSlots.delete(t),this._attachmentMatrices.delete(t);return}if(!this._attachmentMatrices.has(t)){this._attachmentMatrices.set(t,new Dt().copy(e)),this._dirtyAttachmentSlots.add(t);return}const i=this._attachmentMatrices.get(t),r=i.elements,o=e.elements;let a=!1;for(let l=0;l<16;l++)if(r[l]!==o[l]){a=!0;break}a&&(i.copy(e),this._dirtyAttachmentSlots.add(t))}getActiveAttachmentSlots(){const t=this._activeAttachmentSlotsScratch;t.length=0;for(const e of this._attachmentMatrices.keys())t.push(e);return t}syncLockedParticleInstanceMatrices(){if(!this._particleAttachmentSlots||!this._options.lockToEmitter||this._dirtyAttachmentSlots.size===0&&this._cleanupAttachmentSlots.size===0)return;const e=this.mesh.geometry.getAttribute(Gn);let n=!1;for(const o of this._dirtyAttachmentSlots)this._syncAttachmentSlot(o,e,!0)&&(n=!0);let i=0;const r=this._cleanupAttachmentSlots.values();for(;i<bE;){const o=r.next();if(o.done)break;const a=o.value;this._dirtyAttachmentSlots.has(a)||(this._cleanupAttachmentSlots.delete(a),this._syncAttachmentSlot(a,e,!1),this._particleIndicesByAttachmentSlot.has(a)&&this._cleanupAttachmentSlots.add(a),i++)}this._dirtyAttachmentSlots.clear(),n&&(this._mesh.instanceMatrix.needsUpdate=!0)}_syncAttachmentSlot(t,e,n){const i=this._particleIndicesByAttachmentSlot.get(t);if(!i||i.size===0)return this._particleIndicesByAttachmentSlot.delete(t),this._dirtyAttachmentSlots.delete(t),this._cleanupAttachmentSlots.delete(t),this._hasPendingEmissionForSlot(t)||this._attachmentMatrices.delete(t),!1;const r=n?this._attachmentMatrices.get(t):void 0;let o=!1;for(const a of i){const l=e.getX(a),c=e.getY(a);if(this._currentTime-l>c){i.delete(a);continue}r&&(this._mesh.setMatrixAt(a,r),o=!0)}return i.size===0&&(this._particleIndicesByAttachmentSlot.delete(t),this._dirtyAttachmentSlots.delete(t),this._cleanupAttachmentSlots.delete(t),this._hasPendingEmissionForSlot(t)||this._attachmentMatrices.delete(t)),o}_hasPendingEmissionForSlot(t){for(const e of this._pendingEmissions.values())if(e.attachmentSlot===t)return!0;return!1}_createPendingEmissionKey(t,e){if(!e)return`${t}:0`;let n=this._pendingEmissionOverrideIds.get(e);return n||(n=this._nextPendingEmissionOverrideId++,this._pendingEmissionOverrideIds.set(e,n)),`${t}:${n}`}_enqueuePendingEmission(t,e,n){const i=Math.min(t,this._options.maxParticles);if(i<=0)return;const r=this._createPendingEmissionKey(e,n),o=this._pendingEmissions.get(r);if(o){o.count=Math.min(this._options.maxParticles,o.count+i);return}this._pendingEmissions.size>=EE||this._pendingEmissions.set(r,{count:i,attachmentSlot:e,emissionOverrides:n})}_flushPendingEmissions(){if(this._pendingEmissions.size!==0){for(const t of this._pendingEmissions.values()){const e=Math.min(t.count,this._options.maxParticles);if(e<=0)continue;const n=this._attachmentMatrices.get(t.attachmentSlot)??this.mesh.matrixWorld;this._emit(e,n,t.attachmentSlot,t.emissionOverrides)}this._pendingEmissions.clear()}}dispose(){this.mesh.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this._dirtyAttachmentSlots.clear(),this._cleanupAttachmentSlots.clear(),this._attachmentMatrices.clear(),this._particleIndicesByAttachmentSlot.clear(),this._pendingEmissions.clear()}}const is=[{id:1,name:"andesite",textureUri:"blocks/andesite.png",isMultiTexture:!1},{id:2,name:"birch-leaves",textureUri:"blocks/birch-leaves.png",isMultiTexture:!1},{id:3,name:"bricks",textureUri:"blocks/bricks.png",isMultiTexture:!1},{id:4,name:"coal-ore",textureUri:"blocks/coal-ore.png",isMultiTexture:!1},{id:5,name:"cobblestone",textureUri:"blocks/cobblestone.png",isMultiTexture:!1},{id:6,name:"grass-block-pine",textureUri:"blocks/grass-block-pine",isMultiTexture:!0},{id:7,name:"grass-block",textureUri:"blocks/grass-block",isMultiTexture:!0},{id:8,name:"grass-flower-block-pine",textureUri:"blocks/grass-flower-block-pine",isMultiTexture:!0},{id:9,name:"grass-flower-block",textureUri:"blocks/grass-flower-block",isMultiTexture:!0},{id:10,name:"oak-leaves",textureUri:"blocks/oak-leaves.png",isMultiTexture:!1},{id:11,name:"oak-log",textureUri:"blocks/oak-log",isMultiTexture:!0},{id:12,name:"sand",textureUri:"blocks/sand.png",isMultiTexture:!1},{id:13,name:"spruce-leaves",textureUri:"blocks/spruce-leaves.png",isMultiTexture:!1},{id:14,name:"spruce-log",textureUri:"blocks/spruce-log",isMultiTexture:!0},{id:15,name:"stone",textureUri:"blocks/stone.png",isMultiTexture:!1},{id:16,name:"water",textureUri:"blocks/water.png",isMultiTexture:!1,isLiquid:!0}],vp=16,Mp=.3;Array.from({length:vp+1},(s,t)=>t===0?0:Mp+(1-Mp)*(t-1)/(vp-1));const IE=-.1,Sp=.05,PE=1 .toFixed(1),zr="rawAmbientLightColor",_a="ambientLightIntensity",nl="uChunkVisibleBits",il="uChunkVisibilityMode",ss="time",Vr="textureAtlas",Hr="ambientLightColor",jh="hytopiaFogColor",Jh="hytopiaFogEnabled",Qh="hytopiaFogFar",tu="hytopiaFogNear",Tc="foamLevel",wc="foamLevelDiag",vi="chunkIndex",LE="HAS_LIGHT_LEVEL",Ng=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`,Rn=0,Pi=1;function BE(s){return Math.max(Math.ceil(s/32),1)}function In(s){return Math.max(Math.ceil(BE(s)/4),1)}function kg(s){return{[nl]:{value:new Uint32Array(In(s)*4)},[il]:{value:Rn}}}function Fg(s){return{[jh]:{get value(){return s.renderer.fogColor}},[Jh]:{get value(){return s.renderer.fogEnabled}},[Qh]:{get value(){return s.renderer.fogFar}},[tu]:{get value(){return s.renderer.fogNear}}}}function Og(){return`
    uniform vec3 ${jh};
    uniform bool ${Jh};
    uniform float ${Qh};
    uniform float ${tu};

    vec3 applyHytopiaFog(vec3 color, vec3 worldPos) {
      if (!${Jh}) {
        return color;
      }

      float fogFactor = smoothstep(${tu}, ${Qh}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${jh}, fogFactor);
    }
  `}function zg(s){return`
    uniform uint ${il};
    uniform uvec4 ${nl}[${s}];
    attribute float ${vi};

    bool isChunkVisible(uint chunkIndexValue) {
      if (${il} == uint(${Rn})) {
        return true;
      }

      uint wordIndex = chunkIndexValue >> 5u;
      uvec4 packedWords = ${nl}[int(wordIndex >> 2u)];
      uint packedWord = packedWords[int(wordIndex & 3u)];
      uint bitIndex = chunkIndexValue & 31u;
      return ((packedWord >> bitIndex) & 1u) != 0u;
    }
  `}let Vg=class extends He{constructor(){super(...arguments);C(this,"_boundChunkVisibilityBatchKey","");C(this,"_boundChunkVisibilityMode",-1);C(this,"_boundChunkVisibilityRevision",-1);C(this,"_boundChunkVisibilityBits",null)}bindChunkVisibility(e,n,i,r){return this._boundChunkVisibilityBatchKey===e&&this._boundChunkVisibilityBits===n&&this._boundChunkVisibilityMode===i&&this._boundChunkVisibilityRevision===r?!1:(this.uniforms[nl].value=n,this.uniforms[il].value=i,this._boundChunkVisibilityBatchKey=e,this._boundChunkVisibilityBits=n,this._boundChunkVisibilityMode=i,this._boundChunkVisibilityRevision=r,!0)}resetBoundChunkVisibilityState(){this._boundChunkVisibilityBatchKey="",this._boundChunkVisibilityBits=null,this._boundChunkVisibilityMode=-1,this._boundChunkVisibilityRevision=-1}};class so extends Vg{constructor(e,n,i,r){const o=Qn.clone(me.basic.uniforms),a=In(r);Object.assign(o,kg(r),{[zr]:{value:e.renderer.ambientLight.color},[_a]:{get value(){return e.renderer.ambientLight.intensity}}},Fg(e));const l=zg(a),c=me.basic.vertexShader.replace("void main() {",`
        ${l}
        ${i?"attribute float lightLevel; varying float vLightLevel;":""}
        varying vec3 vWorldPos;

        void main() {
          uint chunkIndexValue = uint(${vi} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          ${i?"vLightLevel = lightLevel;":""}
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),h=i?`
          vec3 ambientLight = ${zr} * ${_a};
          vec3 blockLight = ${zr} * vLightLevel * float(${PE});
          outgoingLight *= max(ambientLight, blockLight);
        `:`outgoingLight *= ${zr} * ${_a};`,u=me.basic.fragmentShader.replace("void main() {",`
          ${Ng}
          uniform vec3 ${zr};
          uniform float ${_a};
          ${i?"varying float vLightLevel;":""}
          varying vec3 vWorldPos;
          ${Og()}

          void main() {
        `).replace("#include <opaque_fragment>",`
          ${h}
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:o,vertexShader:c,fragmentShader:u,side:fn,transparent:n,alphaTest:Sp,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0,glslVersion:Oi});C(this,"_alphaTest",Sp);C(this,"_batchChunkCount");C(this,"_color",new ut(16777215));C(this,"_customEmissive",new ut(0));C(this,"_customEmissiveIntensity",1);C(this,"_game");C(this,"_map",null);C(this,"_hasLightLevel");C(this,"_uvScrollSpeed",null);this._game=e,this._batchChunkCount=r,this._hasLightLevel=i,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_ALPHATEST:"",[LE]:i?1:0},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],[vi]:[0],lightLevel:[0]},this._bindUniforms()}get map(){return this._map}set map(e){var n;this._map=e,e?this.defines={...this.defines||{},USE_MAP:""}:((n=this.defines)==null?void 0:n.USE_MAP)!==void 0&&delete this.defines.USE_MAP}get color(){return this._color}get customAlphaTest(){return this._alphaTest}set customAlphaTest(e){this._alphaTest=e}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest=e}get customEmissive(){return this._customEmissive}get customEmissiveIntensity(){return this._customEmissiveIntensity}set customEmissiveIntensity(e){this._customEmissiveIntensity=e}get uvScrollSpeed(){return this._uvScrollSpeed}set uvScrollSpeed(e){this._uvScrollSpeed=e?e.clone():null}clone(){return new this.constructor(this._game,this.transparent,this._hasLightLevel,this._batchChunkCount).copy(this)}copy(e){return super.copy(e),this._alphaTest=e._alphaTest,this._batchChunkCount=e._batchChunkCount,this._color.copy(e._color),this._customEmissive.copy(e._customEmissive),this._customEmissiveIntensity=e._customEmissiveIntensity,this._game=e._game,this._hasLightLevel=e._hasLightLevel,this._map=e._map,this.uvScrollSpeed=e._uvScrollSpeed,this._bindUniforms(),this.resetBoundChunkVisibilityState(),this}_bindUniforms(){const e=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return e.opacity}},this.uniforms.map={get value(){return e._map}},this.uniforms.alphaTest={get value(){return e._alphaTest}}}}class Hg extends Vg{constructor(t,e){const n=In(e);super({uniforms:Qn.merge([kg(e),Fg(t),{[ss]:{value:0},[Vr]:{value:null},[Hr]:{value:new ut}}]),vertexShader:`
        uniform float ${ss};
        ${zg(n)}

        attribute vec4 ${Tc};
        attribute vec4 ${wc};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;

        void main() {
          uint chunkIndexValue = uint(${vi} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          vFoamLevel = ${Tc};
          vFoamLevelDiag = ${wc};
          vNormal = normalize(normal);
          vUv = uv;

          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vViewVector = normalize(cameraPosition - worldPos.xyz);

          vec3 pos = position;
          float slowTime = ${ss} * 0.5;
          float yOffset = ${IE};
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
        ${Ng}
        uniform float ${ss};
        uniform sampler2D ${Vr};
        uniform vec3 ${Hr};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${Og()}

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
          vec4 texColor = texture(${Vr}, vUv);
          if (texColor.a < 0.2) {
            discard;
          }

          vec3 color = texColor.rgb * ${Hr};

          if (vNormal.y > 0.5) {
            float fresnel = pow(1.0 - dot(vNormal, vViewVector), 4.0);
            float waveLighting = sin(dot(vWorldPos.xz, vec2(2.0)) + ${ss} * 0.5) * 0.1;

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
              float foamTime = ${ss} * 0.3;
              vec2 foamUV = vWorldPos.xz * 6.0;

              float foamNoise = noise(foamUV + vec2(foamTime, 0.0)) * 0.5 +
                                noise(foamUV * 2.0 + vec2(0.0, foamTime * 0.5)) * 0.3 +
                                noise(foamUV * 4.0 + vec2(foamTime * 0.3, foamTime * 0.2)) * 0.2;
              float foamPattern = smoothstep(0.3, 0.5, foamNoise);
              float finalFoam = mix(foamIntensity, foamPattern * foamIntensity, smoothstep(0.0, 0.05, minDist));

              vec3 foamColor = vec3(1.0) * ${Hr};
              color = mix(color, foamColor, finalFoam * 0.95);
            }
          }

          gl_FragColor = vec4(color, 0.8);
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vWorldPos);
        }
      `,uniformsNeedUpdate:!1,forceSinglePass:!0,side:Ke,transparent:!0,fog:!1,lights:!1,toneMapped:!0,glslVersion:Oi}),this.defaultAttributeValues={...this.defaultAttributeValues,uv:[0,0],[vi]:[0],[Tc]:[0,0,0,0],[wc]:[0,0,0,0]}}get textureAtlas(){return this.uniforms[Vr].value}set textureAtlas(t){this.uniforms[Vr].value=t}update(t,e){this.uniforms[ss].value+=.0075,this.uniforms[Hr].value.copy(t).multiplyScalar(e)}}class DE{constructor(t){C(this,"_game");C(this,"_opaqueMaterial");C(this,"_transparentMaterial");C(this,"_opaqueNonLitMaterial");C(this,"_transparentNonLitMaterial");C(this,"_liquidMaterial");C(this,"_materialsToUpdate",[]);this._game=t,this._opaqueMaterial=new so(t,!1,!0,8*4*8),this._transparentMaterial=new so(t,!0,!0,2*2*2),this._opaqueNonLitMaterial=new so(t,!1,!1,8*4*8),this._transparentNonLitMaterial=new so(t,!0,!1,2*2*2),this._liquidMaterial=new Hg(t,2*2*2);const e=this._game.textureAtlas;this._opaqueMaterial.map=e,this._transparentMaterial.map=e,this._opaqueNonLitMaterial.map=e,this._transparentNonLitMaterial.map=e,this._liquidMaterial.textureAtlas=e,this._opaqueMaterial.needsUpdate=!0,this._transparentMaterial.needsUpdate=!0,this._opaqueNonLitMaterial.needsUpdate=!0,this._transparentNonLitMaterial.needsUpdate=!0,this._liquidMaterial.needsUpdate=!0}get opaqueMaterial(){return this._opaqueMaterial}get transparentMaterial(){return this._transparentMaterial}get opaqueNonLitMaterial(){return this._opaqueNonLitMaterial}get transparentNonLitMaterial(){return this._transparentNonLitMaterial}get liquidMaterial(){return this._liquidMaterial}update(){const t=this._game.renderer.ambientLight;this._liquidMaterial.update(t.color,t.intensity)}cloneTransparentNonLitMaterial(){const t=this._transparentNonLitMaterial.clone();return t.map===null&&this._materialsToUpdate.push(t),t}}class UE{constructor(t,e){C(this,"manager");this.manager=new DE({renderer:t.renderer,textureAtlas:e})}get liquidMaterial(){return this.manager.liquidMaterial}get opaqueMaterial(){return this.manager.opaqueMaterial}get transparentMaterial(){return this.manager.transparentMaterial}update(){this.manager.update()}}const ht=16,ve=ht-1,sl=ht*ht*ht,bp={x:0,y:0,z:0};function NE(s,t){const e=s.indexOf(","),n=s.indexOf(",",e+1);return t.x=Number(s.slice(0,e)),t.y=Number(s.slice(e+1,n)),t.z=Number(s.slice(n+1)),t}class $t{constructor(t,e,n){C(this,"originCoordinate");C(this,"_chunkId");C(this,"_blocks");C(this,"_rotations");this.originCoordinate={...t},this._chunkId=$t.originCoordinateToChunkId(t),this._blocks=e??new Uint16Array(sl),this._rotations=n??new Uint8Array(sl)}get chunkId(){return this._chunkId}static originCoordinateToChunkId(t){return`${t.x},${t.y},${t.z}`}static chunkIdToOriginCoordinate(t){return NE(t,bp),{...bp}}static globalCoordinateToOriginCoordinate(t){return{x:t.x&~ve,y:t.y&~ve,z:t.z&~ve}}static globalCoordinateToChunkId(t){return $t.originCoordinateToChunkId($t.globalCoordinateToOriginCoordinate(t))}static globalCoordinateToLocalCoordinate(t){return{x:t.x&ve,y:t.y&ve,z:t.z&ve}}static blockIndexToLocalCoordinate(t){return{x:t&ve,y:t>>4&ve,z:t>>8&ve}}getBlockType(t){return this._blocks[this._getIndex(t)]}getBlockTypeAt(t,e,n){return this._blocks[t+ht*(e+ht*n)]}setBlock(t,e){this._blocks[this._getIndex(t)]=e}getBlockRotation(t){return this._rotations[this._getIndex(t)]??0}getBlockRotationAt(t,e,n){return this._rotations[t+ht*(e+ht*n)]??0}setBlockRotation(t,e){this._rotations[this._getIndex(t)]=e&255}isEmpty(){for(let t=0;t<this._blocks.length;t++)if(this._blocks[t]!==0)return!1;return!0}cloneBlocks(){return this._blocks.slice()}cloneRotations(){return this._rotations.slice()}forEachBlock(t){for(let e=0;e<this._blocks.length;e++){const n=this._blocks[e];n!==0&&t($t.blockIndexToLocalCoordinate(e),n,this._rotations[e]??0)}}_getIndex(t){return t.x+ht*(t.y+ht*t.z)}}class Gg{}C(Gg,"chunkIdToOriginCoordinate",$t.chunkIdToOriginCoordinate);const an=3,rs=3,Ac=2,Gs=4,ya=1,Li=4,Cc="TransparentSortData",Rc=new Ve;function hn(s){if(!(Cc in s.userData)){const n={center:new L,frame:-1,halfSize:new L,key:-1};s.userData[Cc]=n}s.geometry.boundingBox===null&&s.geometry.computeBoundingBox();const{center:t,halfSize:e}=s.userData[Cc];Rc.copy(s.geometry.boundingBox).applyMatrix4(s.matrixWorld),Rc.getCenter(t),Rc.getSize(e).multiplyScalar(.5)}const kE={x:2,y:2,z:2},FE={x:2,y:2,z:2},nn={x:8,y:4,z:8},OE=2,xa=2,va=new Wt,Bi=new L,Gr=new L,eu="hytopiaFogColor",nu="hytopiaFogEnabled",iu="hytopiaFogFar",su="hytopiaFogNear",Wa="uChunkVisibleBits",Xa="uChunkVisibilityMode",zE=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`;function Ep(s){return s.min.x<=s.max.x&&s.min.y<=s.max.y&&s.min.z<=s.max.z}function VE(s){return{[Wa]:{value:new Uint32Array(In(s)*4)},[Xa]:{value:Rn}}}function HE(s){return{[eu]:{get value(){return s.renderer.fogColor}},[nu]:{get value(){return s.renderer.fogEnabled}},[iu]:{get value(){return s.renderer.fogFar}},[su]:{get value(){return s.renderer.fogNear}}}}class Tp extends He{constructor(e,n){const i=Qn.clone(me.basic.uniforms),r=In(n);Object.assign(i,VE(n),HE(e));const o=me.basic.vertexShader.replace("void main() {",`
        uniform uint ${Xa};
        uniform uvec4 ${Wa}[${r}];
        attribute float ${vi};
        varying vec3 vHytopiaWorldPos;

        bool isChunkVisible(uint chunkIndexValue) {
          if (${Xa} == uint(${Rn})) {
            return true;
          }

          uint wordIndex = chunkIndexValue >> 5u;
          uvec4 packedWords = ${Wa}[int(wordIndex >> 2u)];
          uint packedWord = packedWords[int(wordIndex & 3u)];
          uint bitIndex = chunkIndexValue & 31u;
          return ((packedWord >> bitIndex) & 1u) != 0u;
        }

        void main() {
          uint chunkIndexValue = uint(${vi} + 0.5);
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
      `),a=me.basic.fragmentShader.replace("void main() {",`
          ${zE}
          varying vec3 vHytopiaWorldPos;
          uniform vec3 ${eu};
          uniform bool ${nu};
          uniform float ${iu};
          uniform float ${su};

          vec3 applyHytopiaFog(vec3 color, vec3 worldPos) {
            if (!${nu}) {
              return color;
            }

            float fogFactor = smoothstep(${su}, ${iu}, length(worldPos.xz - cameraPosition.xz));
            return mix(color, ${eu}, fogFactor);
          }

          void main() {
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vHytopiaWorldPos);
        `);super({uniforms:i,vertexShader:o,fragmentShader:a,side:Ke,vertexColors:!0,fog:!1,lights:!1,toneMapped:!0,glslVersion:Oi});C(this,"_boundBatchKey","");C(this,"_boundChunkVisibilityBits",null);C(this,"_boundChunkVisibilityMode",-1);C(this,"_boundChunkVisibilityRevision",-1);this.defines={...this.defines||{},USE_COLOR:""}}bindChunkVisibility(e,n,i,r){return this._boundBatchKey===e&&this._boundChunkVisibilityBits===n&&this._boundChunkVisibilityMode===i&&this._boundChunkVisibilityRevision===r?!1:(this.uniforms[Wa].value=n,this.uniforms[Xa].value=i,this._boundBatchKey=e,this._boundChunkVisibilityBits=n,this._boundChunkVisibilityMode=i,this._boundChunkVisibilityRevision=r,!0)}}class GE{constructor(t){C(this,"_game");C(this,"_gl");C(this,"_chunkLiquidGeometry",new Map);C(this,"_chunkLodGeometry",new Map);C(this,"_chunkOpaqueGeometry",new Map);C(this,"_chunkTransparentGeometry",new Map);C(this,"_chunkLiquidBounds",new Map);C(this,"_chunkLodBounds",new Map);C(this,"_chunkOpaqueBounds",new Map);C(this,"_chunkTransparentBounds",new Map);C(this,"_liquidBatches",new Map);C(this,"_opaqueBatches",new Map);C(this,"_transparentBatches",new Map);C(this,"_opaqueCollisionMeshes",new Map);C(this,"_parentBatches",new Map);C(this,"_transparentCollisionMeshes",new Map);C(this,"_batchKeyCache",new Map);C(this,"_opaqueSolidBatchMeshes",[]);C(this,"_opaqueSolidBatchMeshesDirty",!0);C(this,"_transparentSolidBatchMeshes",[]);C(this,"_transparentSolidBatchMeshesDirty",!0);C(this,"_solidMeshesInScene",[]);C(this,"_solidMeshesInSceneDirty",!0);C(this,"_collisionMaterial",new Yn);C(this,"_lodMaterial");this._game=t,this._gl=t.renderer.webGLRenderer.getContext(),this._lodMaterial=new Tp(t,nn.x*nn.y*nn.z)}updateChunkGeometry(t,e,n,i,r,o,a,l,c){this._updateChunkGeometryForKind("liquid",t,e,n),this._updateChunkLodGeometry(t,i,r),this._updateChunkGeometryForKind("opaque",t,o,a),this._updateChunkGeometryForKind("transparent",t,l,c)}removeChunkGeometry(t){this._updateChunkGeometryForKind("liquid",t,void 0),this._updateChunkLodGeometry(t,void 0),this._updateChunkGeometryForKind("opaque",t,void 0),this._updateChunkGeometryForKind("transparent",t,void 0)}clear(){for(const t of[...this._opaqueBatches.values()])this._disposeBatch(this._opaqueBatches,t);for(const t of[...this._transparentBatches.values()])this._disposeBatch(this._transparentBatches,t);for(const t of[...this._liquidBatches.values()])this._disposeBatch(this._liquidBatches,t);for(const t of this._parentBatches.values())this._disposeLodBatch(t);this._chunkLiquidGeometry.clear(),this._chunkLodGeometry.clear(),this._chunkOpaqueGeometry.clear(),this._chunkTransparentGeometry.clear(),this._chunkLiquidBounds.clear(),this._chunkLodBounds.clear(),this._chunkOpaqueBounds.clear(),this._chunkTransparentBounds.clear(),this._opaqueCollisionMeshes.clear(),this._transparentCollisionMeshes.clear(),this._opaqueBatches.clear(),this._transparentBatches.clear(),this._liquidBatches.clear(),this._parentBatches.clear(),this._batchKeyCache.clear(),this._opaqueSolidBatchMeshes.length=0,this._transparentSolidBatchMeshes.length=0,this._solidMeshesInScene.length=0,this._opaqueSolidBatchMeshesDirty=!0,this._transparentSolidBatchMeshesDirty=!0,this._solidMeshesInSceneDirty=!0}get batchMeshCount(){let t=0;for(const e of this._parentBatches.values())e.lodBatch&&t++;return this._opaqueBatches.size+this._transparentBatches.size+this._liquidBatches.size+t}applyBatchVisibility(t,e,n,i,r,o){this._flushPendingUploads();for(const a of this._parentBatches.values())this._applyParentBatchVisibility(a,t,e,n,i,r,o)}collectPreOcclusionChunkModes(t,e,n,i,r){r.clear();for(const o of this._parentBatches.values()){const a=this._classifyViewDistance(o.bounds,t,n),l=Ep(o.bounds)?this._classifyFrustum(o.bounds,i):-1;if(!(a===-1||l===-1))for(const c of this._getParentBatchChunkIds(o)){const h=this._getChunkVisibilityBounds(c);if(!h||this._classifyChunkBoundsViewDistance(h,t,n)===-1||this._classifyChunkBoundsFrustum(h,i)===-1)continue;const u=this._distanceToChunkBoundsXZSquared(h,t);r.set(c,u>e&&o.lodChunkIds.has(c)?"lod":"normal")}}return r}getChunkVisibilityBounds(t){return this._getChunkVisibilityBounds(t)}getChunkOpaqueBounds(t){return this._chunkOpaqueBounds.get(t)}getChunkTransparentBounds(t){return this._chunkTransparentBounds.get(t)}getChunkLiquidBounds(t){return this._chunkLiquidBounds.get(t)}getChunkLodBounds(t){return this._chunkLodBounds.get(t)}get solidMeshesInScene(){return this._solidMeshesInSceneDirty?(this._solidMeshesInScene.length=0,this._collectCollisionMeshes(this._opaqueBatches,this._opaqueCollisionMeshes),this._collectCollisionMeshes(this._transparentBatches,this._transparentCollisionMeshes),this._solidMeshesInSceneDirty=!1,this._solidMeshesInScene):this._solidMeshesInScene}get opaqueSolidMeshes(){if(this._opaqueSolidBatchMeshesDirty){this._opaqueSolidBatchMeshes.length=0;for(const t of this._opaqueBatches.values())this._opaqueSolidBatchMeshes.push(t.mesh);this._opaqueSolidBatchMeshesDirty=!1}return this._opaqueSolidBatchMeshes.values()}get transparentSolidMeshes(){if(this._transparentSolidBatchMeshesDirty){this._transparentSolidBatchMeshes.length=0;for(const t of this._transparentBatches.values())this._transparentSolidBatchMeshes.push(t.mesh);this._transparentSolidBatchMeshesDirty=!1}return this._transparentSolidBatchMeshes.values()}_collectCollisionMeshes(t,e){for(const n of t.values())if(n.visible)for(let i=0;i<n.chunkIds.length;i++){if(!this._isChunkVisible(n.chunkVisibilityBits,n.chunkVisibilityMode,i))continue;const r=n.chunkIds[i],o=e.get(r);o&&this._solidMeshesInScene.push(o)}}_updateChunkGeometryForKind(t,e,n,i){var _;const r=this._getChunkGeometryMap(t),o=this._getChunkBoundsMap(t),a=this._getBatchMap(t),l=this._getCollisionMeshMap(t),c=this._getBatchKeyForChunk(e,this._getBatchDimensions(t)),h=this._getParentBatchKeyForBatchKey(c);if(!n){r.delete(e),o.delete(e),(_=l==null?void 0:l.get(e))==null||_.geometry.dispose(),l==null||l.delete(e),this._markParentBatchChunkIdsDirty(h);const m=a.get(c);m&&this._removeChunkFromBatch(a,m,e),this._solidMeshesInSceneDirty=!0;return}r.set(e,n),i&&o.set(e,i),l&&t!=="liquid"&&this._updateCollisionMesh(l,e,n);let u=a.get(c);u||(u=this._createBatch(t,c),a.set(c,u),this._registerNormalBatch(c,t));const d=u.allocations.get(e);if(!d){this._markParentBatchChunkIdsDirty(h),this._appendChunkToBatch(a,u,e,n);return}const f=n.positions.length/an,p=n.indices.length;if(f<=d.vertexCapacity&&p<=d.indexCapacity){this._uploadChunkIntoAllocation(u,e,d,n),this._updateBatchBounds(u);return}this._rebuildBatch(a,u,e)}_updateChunkLodGeometry(t,e,n){const i=this._getParentBatchKeyForChunk(t);if(!e||!n){this._chunkLodGeometry.delete(t),this._chunkLodBounds.delete(t),this._unregisterLodChunk(i,t),this._rebuildLodBatch(i);return}this._chunkLodGeometry.set(t,e),this._chunkLodBounds.set(t,n),this._registerLodChunk(i,t),this._rebuildLodBatch(i)}_appendChunkToBatch(t,e,n,i){const r=i.positions.length/an,o=i.indices.length,a=this._roundCapacity(r),l=this._roundIndexCapacity(o);if(e.totalVertexCount+a>e.vertexCapacity||e.totalIndexCount+l>e.indexCapacity){this._rebuildBatch(t,e,n);return}const c={vertexOffset:e.totalVertexCount,vertexCapacity:a,vertexCount:r,indexOffset:e.totalIndexCount,indexCapacity:l,indexCount:o};e.allocations.set(n,c),e.chunkIds.push(n),e.totalVertexCount+=a,e.totalIndexCount+=l,this._uploadChunkIntoAllocation(e,n,c,i),this._updateBatchBounds(e)}_removeChunkFromBatch(t,e,n){const i=e.allocations.get(n);if(!i)return;const r=e.chunkIds[e.chunkIds.length-1];if(r&&r!==n){const o=e.allocations.get(r),a=this._getChunkGeometryMap(e.kind).get(r);if(o.vertexCapacity>i.vertexCapacity||o.indexCapacity>i.indexCapacity){e.allocations.delete(n);const c=e.chunkIds.indexOf(n);c>=0&&e.chunkIds.splice(c,1),this._rebuildBatch(t,e);return}const l={vertexOffset:i.vertexOffset,vertexCapacity:i.vertexCapacity,vertexCount:o.vertexCount,indexOffset:i.indexOffset,indexCapacity:i.indexCapacity,indexCount:o.indexCount};e.allocations.set(r,l),this._uploadChunkIntoAllocation(e,r,l,a)}if(e.allocations.delete(n),e.chunkIds.pop(),r&&r!==n){const o=e.chunkIds.indexOf(n);o>=0&&(e.chunkIds[o]=r)}else{const o=e.chunkIds.indexOf(n);o>=0&&e.chunkIds.splice(o,1)}e.totalVertexCount=0,e.totalIndexCount=0;for(const o of e.chunkIds){const a=e.allocations.get(o);e.totalVertexCount=Math.max(e.totalVertexCount,a.vertexOffset+a.vertexCapacity),e.totalIndexCount=Math.max(e.totalIndexCount,a.indexOffset+a.indexCapacity)}this._updateBatchDrawRange(e),e.chunkIds.length===0?this._disposeBatch(t,e):this._updateBatchBounds(e)}_rebuildBatch(t,e,n){const i=this._getChunkGeometryMap(e.kind),r=n&&!e.allocations.has(n)?[...e.chunkIds,n]:[...e.chunkIds];let o=0,a=0;for(const h of r){const u=i.get(h);u&&(o+=this._roundCapacity(u.positions.length/an),a+=this._roundIndexCapacity(u.indices.length))}const l=Math.max(this._roundCapacity(o),1),c=Math.max(this._roundCapacity(a),1);this._resizeBatchBuffers(e,l,c),e.allocations.clear(),e.chunkIds=[],e.totalVertexCount=0,e.totalIndexCount=0;for(const h of r){const u=i.get(h);u&&this._appendChunkToBatch(t,e,h,u)}this._updateBatchBounds(e)}_uploadChunkIntoAllocation(t,e,n,i){const r=i.positions.length/an,o=i.indices.length,a=t.chunkIds.indexOf(e);n.vertexCount=r,n.indexCount=o,this._queueUpload(t,t.positionBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*an*4,i.positions),this._queueUpload(t,t.normalBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*rs*4,i.normals),this._queueUpload(t,t.uvBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Ac*4,i.uvs),this._queueUpload(t,t.colorBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Gs*4,i.colors),this._queueUpload(t,t.chunkIndexBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*xa,new Uint16Array(n.vertexCapacity).fill(a));const l=i.lightLevels??new Float32Array(r*ya);if(this._queueUpload(t,t.lightLevelBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*ya*4,l),t.kind==="liquid"&&t.foamBuffer&&t.foamDiagBuffer){const u=i.foamLevels??new Float32Array(r*Li),d=i.foamLevelsDiag??new Float32Array(r*Li);this._queueUpload(t,t.foamBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Li*4,u),this._queueUpload(t,t.foamDiagBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Li*4,d)}const c=new t.indexArrayCtor(n.indexCapacity);for(let u=0;u<o;u++)c[u]=i.indices[u]+n.vertexOffset;const h=n.vertexOffset;for(let u=o;u<n.indexCapacity;u++)c[u]=h;this._queueUpload(t,t.indexBuffer,this._gl.ELEMENT_ARRAY_BUFFER,n.indexOffset*t.indexBytesPerElement,c),this._updateBatchDrawRange(t)}_queueUpload(t,e,n,i,r){t.pendingUploads.push({buffer:e,target:n,offset:i,data:r,arrayCtor:r.constructor,bytesPerElement:r.BYTES_PER_ELEMENT})}_uploadArray(t,e,n,i){const r=this._gl instanceof WebGL2RenderingContext?this._gl:null;e===this._gl.ELEMENT_ARRAY_BUFFER&&r&&r.bindVertexArray(null),this._gl.bindBuffer(e,t),this._gl.bufferSubData(e,n,i)}_flushPendingUploads(){for(const t of this._opaqueBatches.values())this._flushBatchPendingUploads(t);for(const t of this._transparentBatches.values())this._flushBatchPendingUploads(t);for(const t of this._liquidBatches.values())this._flushBatchPendingUploads(t)}_flushBatchPendingUploads(t){if(t.pendingUploads.length===0)return;const e=new Map;for(const n of t.pendingUploads){const i=e.get(n.buffer);i?i.push(n):e.set(n.buffer,[n])}for(const n of e.values())this._flushMergedUploads(n);t.pendingUploads.length=0}_flushMergedUploads(t){t.sort((i,r)=>i.offset-r.offset);let e=0,n=t[0].offset+t[0].data.byteLength;for(let i=1;i<=t.length;i++){const r=t[i];if(r&&r.offset<=n+r.bytesPerElement&&r.arrayCtor===t[e].arrayCtor&&r.bytesPerElement===t[e].bytesPerElement){n=Math.max(n,r.offset+r.data.byteLength);continue}this._flushUploadCluster(t,e,i),e=i,r&&(n=r.offset+r.data.byteLength)}}_flushUploadCluster(t,e,n){if(n<=e)return;const i=t[e];if(n===e+1){this._uploadArray(i.buffer,i.target,i.offset,i.data);return}let r=i.offset+i.data.byteLength;for(let l=e+1;l<n;l++)r=Math.max(r,t[l].offset+t[l].data.byteLength);const o=(r-i.offset)/i.bytesPerElement,a=new i.arrayCtor(o);for(let l=e;l<n;l++){const c=t[l],h=(c.offset-i.offset)/c.bytesPerElement;a.set(c.data,h)}this._uploadArray(i.buffer,i.target,i.offset,a)}_createBatch(t,e){const n=this._getBatchDimensions(t),i=this._getBatchOriginFromKey(e),r={x:n.x*ht,y:n.y*ht,z:n.z*ht},o=new Le;o.boundingBox=new Ve(Bi.set(0,0,0).clone(),Bi.set(r.x,r.y,r.z).clone()),o.boundingSphere=new ke(Bi.set(r.x*.5,r.y*.5,r.z*.5).clone(),Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z)*.5);const a=this._getRenderMaterial(t),l=new Me(o,a);l.name=`${t}_batch_${e}`,l.matrixAutoUpdate=!1,l.matrixWorldAutoUpdate=!1,l.frustumCulled=!1,hn(l);const c={allocations:new Map,bounds:o.boundingBox.clone(),chunkIndexBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,xa),chunkIds:[],chunkVisibilityBits:new Uint32Array(In(n.x*n.y*n.z)*4),chunkVisibilityScratchBits:new Uint32Array(In(n.x*n.y*n.z)*4),chunkVisibilityMode:Rn,chunkVisibilityRevision:0,geometry:o,indexBuffer:this._createGLBuffer(this._gl.ELEMENT_ARRAY_BUFFER,2),indexType:this._gl.UNSIGNED_SHORT,indexArrayCtor:Uint16Array,indexBytesPerElement:2,indexCapacity:1,key:e,kind:t,lightLevelBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),lightLevelCapacity:1,material:a,mesh:l,normalBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),origin:i,pendingUploads:[],positionBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),uvBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),colorBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),totalIndexCount:0,totalVertexCount:0,vertexCapacity:1,visible:!1,worldSize:r};return l.onBeforeRender=(h,u,d,f,p)=>{(p instanceof so||p instanceof Hg)&&p.bindChunkVisibility(e,c.chunkVisibilityBits,c.chunkVisibilityMode,c.chunkVisibilityRevision)&&(p.uniformsNeedUpdate=!0)},t==="liquid"&&(c.foamBuffer=this._createGLBuffer(this._gl.ARRAY_BUFFER,4),c.foamDiagBuffer=this._createGLBuffer(this._gl.ARRAY_BUFFER,4)),this._attachGLAttributes(c),this._updateBatchBounds(c),t==="opaque"?this._opaqueSolidBatchMeshesDirty=!0:t==="transparent"&&(this._transparentSolidBatchMeshesDirty=!0),c}_attachGLAttributes(t){const e=new hi(t.indexBuffer,t.indexType,1,t.indexBytesPerElement,t.indexCapacity),n=new hi(t.positionBuffer,this._gl.FLOAT,an,4,t.vertexCapacity),i=new hi(t.normalBuffer,this._gl.FLOAT,rs,4,t.vertexCapacity),r=new hi(t.uvBuffer,this._gl.FLOAT,Ac,4,t.vertexCapacity),o=new hi(t.colorBuffer,this._gl.FLOAT,Gs,4,t.vertexCapacity),a=new hi(t.chunkIndexBuffer,this._gl.UNSIGNED_SHORT,1,xa,t.vertexCapacity),l=new hi(t.lightLevelBuffer,this._gl.FLOAT,ya,4,t.vertexCapacity);if(t.geometry.setIndex(e),t.geometry.setAttribute("position",n),t.geometry.setAttribute("normal",i),t.geometry.setAttribute("uv",r),t.geometry.setAttribute("color",o),t.geometry.setAttribute(vi,a),t.geometry.setAttribute("lightLevel",l),t.kind==="liquid"&&t.foamBuffer&&t.foamDiagBuffer){const c=new hi(t.foamBuffer,this._gl.FLOAT,Li,4,t.vertexCapacity),h=new hi(t.foamDiagBuffer,this._gl.FLOAT,Li,4,t.vertexCapacity);t.geometry.setAttribute("foamLevel",c),t.geometry.setAttribute("foamLevelDiag",h)}t.geometry.setDrawRange(0,0)}_resizeBatchBuffers(t,e,n){t.pendingUploads.length=0;const i=e>65535?this._gl.UNSIGNED_INT:this._gl.UNSIGNED_SHORT,r=i===this._gl.UNSIGNED_INT?Uint32Array:Uint16Array,o=i===this._gl.UNSIGNED_INT?4:2;t.vertexCapacity=e,t.indexCapacity=n,t.indexType=i,t.indexArrayCtor=r,t.indexBytesPerElement=o,this._allocateBuffer(t.positionBuffer,this._gl.ARRAY_BUFFER,e*an*4),this._allocateBuffer(t.normalBuffer,this._gl.ARRAY_BUFFER,e*rs*4),this._allocateBuffer(t.uvBuffer,this._gl.ARRAY_BUFFER,e*Ac*4),this._allocateBuffer(t.colorBuffer,this._gl.ARRAY_BUFFER,e*Gs*4),this._allocateBuffer(t.chunkIndexBuffer,this._gl.ARRAY_BUFFER,e*xa),this._allocateBuffer(t.lightLevelBuffer,this._gl.ARRAY_BUFFER,e*ya*4),t.foamBuffer&&t.foamDiagBuffer&&(this._allocateBuffer(t.foamBuffer,this._gl.ARRAY_BUFFER,e*Li*4),this._allocateBuffer(t.foamDiagBuffer,this._gl.ARRAY_BUFFER,e*Li*4)),this._allocateBuffer(t.indexBuffer,this._gl.ELEMENT_ARRAY_BUFFER,n*o),this._attachGLAttributes(t)}_allocateBuffer(t,e,n){const i=this._gl instanceof WebGL2RenderingContext?this._gl:null;e===this._gl.ELEMENT_ARRAY_BUFFER&&i&&i.bindVertexArray(null),this._gl.bindBuffer(e,t),this._gl.bufferData(e,n,this._gl.DYNAMIC_DRAW)}_updateBatchDrawRange(t){let e=0;for(const n of t.allocations.values())e=Math.max(e,n.indexOffset+n.indexCount);t.geometry.setDrawRange(0,e)}_updateBatchBounds(t){const e=this._getChunkBoundsMap(t.kind);if(t.chunkIds.length===0){t.bounds.makeEmpty(),t.geometry.boundingBox=t.bounds.clone(),t.geometry.boundingSphere=new ke(Bi.set(0,0,0).clone(),0),hn(t.mesh);return}let n=!1;for(const r of t.chunkIds){const o=e.get(r);if(o){if(!n){t.bounds.min.set(o.min[0],o.min[1],o.min[2]),t.bounds.max.set(o.max[0],o.max[1],o.max[2]),n=!0;continue}t.bounds.min.x=Math.min(t.bounds.min.x,o.min[0]),t.bounds.min.y=Math.min(t.bounds.min.y,o.min[1]),t.bounds.min.z=Math.min(t.bounds.min.z,o.min[2]),t.bounds.max.x=Math.max(t.bounds.max.x,o.max[0]),t.bounds.max.y=Math.max(t.bounds.max.y,o.max[1]),t.bounds.max.z=Math.max(t.bounds.max.z,o.max[2])}}t.geometry.boundingBox=t.bounds.clone();const i=t.geometry.boundingSphere??new ke;t.bounds.getCenter(Gr),i.center.copy(Gr),i.radius=Gr.distanceTo(t.bounds.max),t.geometry.boundingSphere=i,hn(t.mesh)}_createGLBuffer(t,e){const n=this._gl.createBuffer();if(!n)throw new Error("ChunkMeshManager: Failed to create WebGLBuffer.");return this._allocateBuffer(n,t,e),n}_disposeBatch(t,e){e.pendingUploads.length=0,this._gl.deleteBuffer(e.positionBuffer),this._gl.deleteBuffer(e.normalBuffer),this._gl.deleteBuffer(e.uvBuffer),this._gl.deleteBuffer(e.colorBuffer),this._gl.deleteBuffer(e.chunkIndexBuffer),this._gl.deleteBuffer(e.lightLevelBuffer),e.foamBuffer&&this._gl.deleteBuffer(e.foamBuffer),e.foamDiagBuffer&&this._gl.deleteBuffer(e.foamDiagBuffer),this._gl.deleteBuffer(e.indexBuffer),this._game.renderer.removeFromScene(e.mesh),t.delete(e.key),this._unregisterNormalBatch(e.key,e.kind),e.kind==="opaque"?this._opaqueSolidBatchMeshesDirty=!0:e.kind==="transparent"&&(this._transparentSolidBatchMeshesDirty=!0),this._solidMeshesInSceneDirty=!0}_applyParentBatchVisibility(t,e,n,i,r,o,a){const l=this._classifyViewDistance(t.bounds,e,i),c=Ep(t.bounds)?this._classifyFrustum(t.bounds,r):-1;if(l===-1||c===-1){this._syncParentBatchVisibility(t,"hidden");return}const h=this._classifyParentChunkVisibility(t,e,n,i,r,o,a);let u=!1;for(const p of t.opaqueBatchKeys){const _=this._opaqueBatches.get(p),m=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,m),u||(u=m)}for(const p of t.transparentBatchKeys){const _=this._transparentBatches.get(p),m=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,m),u||(u=m)}for(const p of t.liquidBatchKeys){const _=this._liquidBatches.get(p),m=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,m),u||(u=m)}const d=this._applyLodBatchChunkVisibility(t,h,a);this._setLodBatchScenePresence(t.lodBatch,d);let f="hidden";u&&d?f="mixed":u?f="normal":d&&(f="lod"),this._syncParentBatchVisibility(t,f)}_classifyParentChunkVisibility(t,e,n,i,r,o,a){const l=t.chunkModes;l.clear();const c=this._getParentBatchChunkIds(t);for(const h of c){const u=o==null?void 0:o.get(h);if(u){if(a&&!a.has(h)){l.set(h,"hidden");continue}l.set(h,u);continue}const d=this._getChunkVisibilityBounds(h);if(!d){l.set(h,"hidden");continue}if(this._classifyChunkBoundsViewDistance(d,e,i)===-1){l.set(h,"hidden");continue}if(this._classifyChunkBoundsFrustum(d,r)===-1){l.set(h,"hidden");continue}this._distanceToChunkBoundsXZSquared(d,e)>n&&t.lodChunkIds.has(h)?l.set(h,"lod"):l.set(h,"normal")}return l}_getParentBatchChunkIds(t){if(!t.allChunkIdsDirty)return t.allChunkIds;const e=new Set(t.lodChunkIds);this._collectParentBatchChunkIds(this._opaqueBatches,t.opaqueBatchKeys,e),this._collectParentBatchChunkIds(this._transparentBatches,t.transparentBatchKeys,e),this._collectParentBatchChunkIds(this._liquidBatches,t.liquidBatchKeys,e),t.allChunkIds.length=0;for(const n of e)t.allChunkIds.push(n);return t.allChunkIdsDirty=!1,t.allChunkIds}_collectParentBatchChunkIds(t,e,n){for(const i of e){const r=t.get(i);if(r)for(const o of r.chunkIds)n.add(o)}}_markParentBatchChunkIdsDirty(t){const e=this._parentBatches.get(t);e&&(e.allChunkIdsDirty=!0)}_getChunkVisibilityBounds(t){return this._chunkOpaqueBounds.get(t)??this._chunkTransparentBounds.get(t)??this._chunkLiquidBounds.get(t)??this._chunkLodBounds.get(t)}_applyLodBatchChunkVisibility(t,e,n){const i=t.lodBatch;if(!i)return!1;const r=i.chunkVisibilityScratchBits;r.fill(0);let o=0;for(let c=0;c<i.chunkIds.length;c++){if(e.get(i.chunkIds[c])!=="lod"||n&&!n.has(i.chunkIds[c]))continue;const h=c>>5;r[h]|=1<<(c&31),o++}const a=!this._areChunkVisibilityBitsEqual(i.chunkVisibilityBits,r);if(a&&i.chunkVisibilityBits.set(r),o===0){const c=i.chunkVisibilityMode!==Pi;return this._setLodBatchChunkVisibilityMode(i,Pi),(c||a)&&i.chunkVisibilityRevision++,!1}if(o===i.chunkIds.length)return i.chunkVisibilityMode!==Rn&&i.chunkVisibilityRevision++,this._setLodBatchChunkVisibilityMode(i,Rn),!0;const l=i.chunkVisibilityMode!==Pi;return this._setLodBatchChunkVisibilityMode(i,Pi),(l||a)&&i.chunkVisibilityRevision++,!0}_applyNormalBatchChunkVisibility(t,e,n){const i=t.chunkVisibilityScratchBits;i.fill(0);let r=0;for(let l=0;l<t.chunkIds.length;l++){if(e.get(t.chunkIds[l])!=="normal"||n&&!n.has(t.chunkIds[l]))continue;const c=l>>5;i[c]|=1<<(l&31),r++}const o=!this._areChunkVisibilityBitsEqual(t.chunkVisibilityBits,i);if(o&&t.chunkVisibilityBits.set(i),r===0){const l=t.chunkVisibilityMode!==Pi;return this._setBatchChunkVisibilityMode(t,Pi),(l||o)&&t.chunkVisibilityRevision++,!1}if(r===t.chunkIds.length)return this._setBatchChunkVisibilityMode(t,Rn),!0;const a=t.chunkVisibilityMode!==Pi;return this._setBatchChunkVisibilityMode(t,Pi),(a||o)&&t.chunkVisibilityRevision++,this._solidMeshesInSceneDirty=!0,!0}_syncParentBatchVisibility(t,e){if(e==="hidden"){for(const n of t.opaqueBatchKeys)this._setNormalBatchScenePresence(this._opaqueBatches.get(n),!1);for(const n of t.transparentBatchKeys)this._setNormalBatchScenePresence(this._transparentBatches.get(n),!1);for(const n of t.liquidBatchKeys)this._setNormalBatchScenePresence(this._liquidBatches.get(n),!1);this._setLodBatchScenePresence(t.lodBatch,!1)}t.visibilityState=e}_setNormalBatchScenePresence(t,e){if(!t)return;const n=t.mesh.parent!==null;e&&!n?(this._game.renderer.addToScene(t.mesh),this._solidMeshesInSceneDirty=!0):!e&&n&&(this._game.renderer.removeFromScene(t.mesh),this._solidMeshesInSceneDirty=!0),t.visible=e}_setLodBatchScenePresence(t,e){if(!t)return;const n=t.mesh.parent!==null;e&&!n?this._game.renderer.addToScene(t.mesh):!e&&n&&this._game.renderer.removeFromScene(t.mesh),t.visible=e}_classifyViewDistance(t,e,n){if(this._distanceToBoundsXZSquared(t,e)>n)return-1;const i=Math.abs(e.x-t.min.x)>Math.abs(e.x-t.max.x)?t.min.x:t.max.x,r=Math.abs(e.y-t.min.z)>Math.abs(e.y-t.max.z)?t.min.z:t.max.z;return e.distanceToSquared(va.set(i,r))<=n?1:0}_distanceToBoundsXZSquared(t,e){const n=Math.max(t.min.x,Math.min(e.x,t.max.x)),i=Math.max(t.min.z,Math.min(e.y,t.max.z));return e.distanceToSquared(va.set(n,i))}_classifyChunkBoundsViewDistance(t,e,n){if(this._distanceToChunkBoundsXZSquared(t,e)>n)return-1;const i=Math.abs(e.x-t.min[0])>Math.abs(e.x-t.max[0])?t.min[0]:t.max[0],r=Math.abs(e.y-t.min[2])>Math.abs(e.y-t.max[2])?t.min[2]:t.max[2];return e.distanceToSquared(va.set(i,r))<=n?1:0}_distanceToChunkBoundsXZSquared(t,e){const n=Math.max(t.min[0],Math.min(e.x,t.max[0])),i=Math.max(t.min[2],Math.min(e.y,t.max[2]));return e.distanceToSquared(va.set(n,i))}_classifyFrustum(t,e){let n=!0;for(const i of e.planes){const r=Bi.set(i.normal.x>=0?t.max.x:t.min.x,i.normal.y>=0?t.max.y:t.min.y,i.normal.z>=0?t.max.z:t.min.z);if(i.distanceToPoint(r)<0)return-1;const o=Gr.set(i.normal.x>=0?t.min.x:t.max.x,i.normal.y>=0?t.min.y:t.max.y,i.normal.z>=0?t.min.z:t.max.z);i.distanceToPoint(o)<0&&(n=!1)}return n?1:0}_classifyChunkBoundsFrustum(t,e){let n=!0;for(const i of e.planes){const r=Bi.set(i.normal.x>=0?t.max[0]:t.min[0],i.normal.y>=0?t.max[1]:t.min[1],i.normal.z>=0?t.max[2]:t.min[2]);if(i.distanceToPoint(r)<0)return-1;const o=Gr.set(i.normal.x>=0?t.min[0]:t.max[0],i.normal.y>=0?t.min[1]:t.max[1],i.normal.z>=0?t.min[2]:t.max[2]);i.distanceToPoint(o)<0&&(n=!1)}return n?1:0}_areChunkVisibilityBitsEqual(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}_isChunkVisible(t,e,n){if(e===Rn)return!0;const i=n>>5;return(t[i]>>>(n&31)&1)!==0}_setBatchChunkVisibilityMode(t,e){t.chunkVisibilityMode!==e&&(t.chunkVisibilityMode=e,t.chunkVisibilityRevision++,this._solidMeshesInSceneDirty=!0)}_setLodBatchChunkVisibilityMode(t,e){t.chunkVisibilityMode!==e&&(t.chunkVisibilityMode=e)}_updateCollisionMesh(t,e,n){const i=new Le;i.setAttribute("position",new Vt(n.positions,an)),i.setAttribute("normal",new Vt(n.normals,rs)),i.setIndex(new Vt(n.indices,1)),i.computeBoundingBox(),i.computeBoundingSphere();const r=t.get(e),o=this._collisionMaterial;if(r){r.geometry.dispose(),r.geometry=i,hn(r);return}const a=new Me(i,o);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,hn(a),t.set(e,a)}_getChunkGeometryMap(t){switch(t){case"liquid":return this._chunkLiquidGeometry;case"opaque":return this._chunkOpaqueGeometry;case"transparent":return this._chunkTransparentGeometry}}_getChunkBoundsMap(t){switch(t){case"liquid":return this._chunkLiquidBounds;case"opaque":return this._chunkOpaqueBounds;case"transparent":return this._chunkTransparentBounds}}_getBatchMap(t){switch(t){case"liquid":return this._liquidBatches;case"opaque":return this._opaqueBatches;case"transparent":return this._transparentBatches}}_getCollisionMeshMap(t){switch(t){case"opaque":return this._opaqueCollisionMeshes;case"transparent":return this._transparentCollisionMeshes;default:return}}_getBatchDimensions(t){switch(t){case"liquid":return kE;case"opaque":return nn;case"transparent":return FE}}_getRenderMaterial(t){switch(t){case"liquid":return this._game.blockMaterialManager.liquidMaterial;case"opaque":return this._game.blockMaterialManager.opaqueMaterial;case"transparent":return this._game.blockMaterialManager.transparentMaterial}}_registerNormalBatch(t,e){const n=this._ensureParentBatch(this._getParentBatchKeyForBatchKey(t));switch(n.allChunkIdsDirty=!0,e){case"opaque":n.opaqueBatchKeys.add(t);break;case"transparent":n.transparentBatchKeys.add(t);break;case"liquid":n.liquidBatchKeys.add(t);break}}_unregisterNormalBatch(t,e){const n=this._getParentBatchKeyForBatchKey(t),i=this._parentBatches.get(n);if(i){switch(i.allChunkIdsDirty=!0,e){case"opaque":i.opaqueBatchKeys.delete(t);break;case"transparent":i.transparentBatchKeys.delete(t);break;case"liquid":i.liquidBatchKeys.delete(t);break}this._cleanupParentBatch(n,i)}}_registerLodChunk(t,e){const n=this._ensureParentBatch(t);n.lodChunkIds.add(e),n.allChunkIdsDirty=!0}_unregisterLodChunk(t,e){const n=this._parentBatches.get(t);n&&(n.lodChunkIds.delete(e),n.allChunkIdsDirty=!0)}_ensureParentBatch(t){let e=this._parentBatches.get(t);if(e)return e;const n=this._getBatchOriginFromKey(t),i={x:nn.x*ht,y:nn.y*ht,z:nn.z*ht};return e={allChunkIds:[],allChunkIdsDirty:!0,bounds:new Ve(Bi.set(n.x,n.y,n.z).clone(),Bi.set(n.x+i.x,n.y+i.y,n.z+i.z).clone()),chunkModes:new Map,key:t,liquidBatchKeys:new Set,lodBuildChunkIds:[],lodChunkIds:new Set,opaqueBatchKeys:new Set,transparentBatchKeys:new Set,visibilityState:"hidden"},this._parentBatches.set(t,e),e}_cleanupParentBatch(t,e){const n=e.opaqueBatchKeys.size>0||e.transparentBatchKeys.size>0||e.liquidBatchKeys.size>0,i=e.lodChunkIds.size>0,r=e.lodBatch!==void 0;n||i||r||this._parentBatches.delete(t)}_rebuildLodBatch(t){const e=this._parentBatches.get(t);if(!e)return;const n=e.lodBuildChunkIds;n.length=0;for(const _ of e.lodChunkIds)this._chunkLodGeometry.has(_)&&this._chunkLodBounds.has(_)&&n.push(_);if(n.sort(),n.length===0){this._disposeLodBatch(e),this._cleanupParentBatch(t,e);return}let i=0,r=0;for(const _ of n){const m=this._chunkLodGeometry.get(_);i+=m.positions.length/an,r+=m.indices.length}const o=new Float32Array(i*an),a=new Float32Array(i*rs),l=new Float32Array(i*Gs),c=new Float32Array(i),h=i>65535?new Uint32Array(r):new Uint16Array(r);let u=0,d=0;for(let _=0;_<n.length;_++){const m=n[_],g=this._chunkLodGeometry.get(m),x=g.positions.length/an;o.set(g.positions,u*an),a.set(g.normals,u*rs),l.set(g.colors,u*Gs),c.fill(_,u,u+x);for(let b=0;b<g.indices.length;b++)h[d+b]=g.indices[b]+u;u+=x,d+=g.indices.length}const f=new Le;if(f.setAttribute("position",new Vt(o,an)),f.setAttribute("normal",new Vt(a,rs)),f.setAttribute("color",new Vt(l,Gs)),f.setAttribute(vi,new Vt(c,1)),f.setIndex(new Vt(h,1)),f.computeBoundingBox(),f.computeBoundingSphere(),e.lodBatch){e.lodBatch.geometry.dispose(),e.lodBatch.geometry=f,e.lodBatch.mesh.geometry=f,e.lodBatch.chunkIds=n,e.lodBatch.chunkVisibilityBits=new Uint32Array(In(n.length)*4),e.lodBatch.chunkVisibilityScratchBits=new Uint32Array(In(n.length)*4),e.lodBatch.chunkVisibilityMode=Rn,e.lodBatch.chunkVisibilityRevision++,hn(e.lodBatch.mesh);return}const p=new Me(f,this._lodMaterial);p.name=`lod_batch_${t}`,p.matrixAutoUpdate=!1,p.matrixWorldAutoUpdate=!1,p.frustumCulled=!1,p.onBeforeRender=(_,m,g,x,b)=>{if(b instanceof Tp){const v=e.lodBatch;if(!v)return;b.bindChunkVisibility(v.key,v.chunkVisibilityBits,v.chunkVisibilityMode,v.chunkVisibilityRevision)&&(b.uniformsNeedUpdate=!0)}},hn(p),e.lodBatch={chunkIds:n,chunkVisibilityBits:new Uint32Array(In(n.length)*4),chunkVisibilityScratchBits:new Uint32Array(In(n.length)*4),chunkVisibilityMode:Rn,chunkVisibilityRevision:0,geometry:f,key:t,mesh:p,visible:!1}}_disposeLodBatch(t){const e=t.lodBatch;e&&(e.mesh.parent&&this._game.renderer.removeFromScene(e.mesh),e.geometry.dispose(),t.lodBatch=void 0)}_getBatchKeyForChunk(t,e){const n=Gg.chunkIdToOriginCoordinate(t);return this._getCachedBatchKey(Math.floor(n.x/(e.x*ht))*e.x*ht,Math.floor(n.y/(e.y*ht))*e.y*ht,Math.floor(n.z/(e.z*ht))*e.z*ht)}_getParentBatchKeyForChunk(t){return this._getBatchKeyForChunk(t,nn)}_getParentBatchKeyForBatchKey(t){const e=this._getBatchOriginFromKey(t);return this._getCachedBatchKey(Math.floor(e.x/(nn.x*ht))*nn.x*ht,Math.floor(e.y/(nn.y*ht))*nn.y*ht,Math.floor(e.z/(nn.z*ht))*nn.z*ht)}_getCachedBatchKey(t,e,n){let i=this._batchKeyCache.get(t);i||(i=new Map,this._batchKeyCache.set(t,i));let r=i.get(e);r||(r=new Map,i.set(e,r));let o=r.get(n);return o||(o=`${t},${e},${n}`,r.set(n,o)),o}_getBatchOriginFromKey(t){const e=t.indexOf(","),n=t.indexOf(",",e+1);return{x:Number(t.slice(0,e)),y:Number(t.slice(e+1,n)),z:Number(t.slice(n+1))}}_roundCapacity(t){let e=1;for(;e<t;)e*=OE;return e}_roundIndexCapacity(t){const e=this._roundCapacity(t),n=e%3;return n===0?e:e+(3-n)}}function Ma(s){return s||null}function WE(s,t){return{chunkId:s,liquidBounds:t==null?void 0:t.liquidBounds,liquidGeometry:Ma((t==null?void 0:t.liquidGeometry)??null),lodBounds:t==null?void 0:t.lodBounds,lodGeometry:Ma((t==null?void 0:t.lodGeometry)??null),opaqueBounds:t==null?void 0:t.opaqueBounds,opaqueGeometry:Ma((t==null?void 0:t.opaqueGeometry)??null),transparentBounds:t==null?void 0:t.transparentBounds,transparentGeometry:Ma((t==null?void 0:t.transparentGeometry)??null)}}class XE{constructor(t){C(this,"host");C(this,"manager");this.host=t,this.manager=new GE(t)}get rendererHost(){return this.host.renderer}get batchMeshCount(){return this.manager.batchMeshCount}setChunkGeometry(t,e){const n=WE(t,e);if(!e){this.manager.removeChunkGeometry(t);return}this.manager.updateChunkGeometry(n.chunkId,n.liquidGeometry??void 0,n.liquidBounds,n.lodGeometry??void 0,n.lodBounds,n.opaqueGeometry??void 0,n.opaqueBounds,n.transparentGeometry??void 0,n.transparentBounds)}clear(){this.manager.clear()}flush(){}collectPreOcclusionChunkModes(t,e,n,i,r){return this.manager.collectPreOcclusionChunkModes(t,e,n,i,r)}applyBatchVisibility(t,e,n,i,r){this.manager.applyBatchVisibility(t,e,n,i,r)}}const qE=16,$E=2,us="worldEditorInstanceLightLevel",ds="worldEditorInstanceSkyLight",Wg=new ut(1,1,1),Wr=new Dt,Ic=new Ve,wp=new Wt,Pc=new ke,Xr=new WeakMap;class YE extends nd{constructor(t,e,n){super(t,e,n),this._setup()}_setup(){this.matrixAutoUpdate=!1,this.matrixWorldAutoUpdate=!1,this.frustumCulled=!0,hn(this),this.instanceMatrix.setUsage(_n);const t=new cn(new Float32Array(this.count),1);t.setUsage(_n),this.geometry.setAttribute(us,t);const e=new cn(new Float32Array(this.count),1);e.setUsage(_n),this.geometry.setAttribute(ds,e),this.setColorAt(0,Wg),this.instanceColor.setUsage(_n)}dispose(){return this.geometry.dispose(),this}}class KE{constructor(t){C(this,"host");C(this,"keyToModelUri",new Map);C(this,"keyToTintColor",new Map);C(this,"uriToEntry",new Map);this.host=t}async replaceAll(t){this.clear();const e=new Set;for(const n of t)await this.upsertEntity(n)||e.add(n.key);return e}async upsertEntity(t){this.removeEntity(t.key);let e=this.uriToEntry.get(t.modelUri);if(e||(e=this.createEntry(t.modelUri),this.uriToEntry.set(t.modelUri,e)),e.gltfRoot===null&&(e.gltfRoot=await e.gltfRootPromise),!e.gltfRoot)return e.entities.size===0&&this.uriToEntry.delete(e.modelUri),!1;const n=e.entities.size;return e.entities.add(t.key),e.entityToInstanceIndex.set(t.key,n),e.instanceIndexToEntityKey.set(n,t.key),e.entityToChunkId.set(t.key,t.chunkId),e.entityToLightLevel.set(t.key,t.lightLevel),e.entityToSkyLight.set(t.key,t.skyLight),this.keyToModelUri.set(t.key,t.modelUri),this.keyToTintColor.set(t.key,t.tintColor?t.tintColor.clone():null),e.gltfRoot.traverse(i=>{if(!(i instanceof Me))return;let r=e.sourceToInstancedMesh.get(i);if(!r||n>=r.instanceMatrix.count){const h=r?r.instanceMatrix.count*$E:qE,u=r?r.material:this.host.createRenderMaterial(i.material),d=new YE(i.geometry.clone(),u,h);if(d.castShadow=i.castShadow,d.receiveShadow=i.receiveShadow,r){d.instanceMatrix.array.set(r.instanceMatrix.array);const f=r.geometry.getAttribute(us),p=d.geometry.getAttribute(us);for(let x=0;x<f.count;x++)p.setX(x,f.getX(x));const _=r.geometry.getAttribute(ds),m=d.geometry.getAttribute(ds);for(let x=0;x<_.count;x++)m.setX(x,_.getX(x));if(r.instanceColor&&d.instanceColor)for(let x=0;x<r.instanceColor.count;x++)d.instanceColor.setXYZ(x,r.instanceColor.getX(x),r.instanceColor.getY(x),r.instanceColor.getZ(x));r.boundingSphere&&(d.boundingSphere=r.boundingSphere.clone());const g=Xr.get(r);g&&Xr.set(d,g.clone()),this.host.removeFromScene(r),r.dispose(),e.sourceToInstancedMesh.delete(i)}this.host.addToScene(d),e.sourceToInstancedMesh.set(i,d),r=d}r.setMatrixAt(n,Wr.copy(t.worldMatrix).multiply(i.matrixWorld)),r.instanceMatrix.needsUpdate=!0;const o=t.tintColor??Wg;r.setColorAt(n,o),r.instanceColor&&(r.instanceColor.needsUpdate=!0);const a=r.geometry.getAttribute(us);a.setX(n,t.lightLevel),a.needsUpdate=!0;const l=r.geometry.getAttribute(ds);l.setX(n,t.skyLight),l.needsUpdate=!0,r.count=n+1,r.geometry.boundingSphere===null&&r.geometry.computeBoundingSphere(),r.geometry.boundingBox===null&&r.geometry.computeBoundingBox(),Pc.copy(r.geometry.boundingSphere).applyMatrix4(Wr.copy(t.worldMatrix).multiply(i.matrixWorld)),Ic.copy(r.geometry.boundingBox).applyMatrix4(Wr.copy(t.worldMatrix).multiply(i.matrixWorld)),r.boundingSphere===null?r.boundingSphere=Pc.clone():r.boundingSphere.union(Pc);const c=Xr.get(r);c?c.union(Ic):Xr.set(r,Ic.clone())}),!0}removeEntity(t){const e=this.keyToModelUri.get(t);if(!e)return;const n=this.uriToEntry.get(e);if(!n||!n.entities.has(t)){this.keyToModelUri.delete(t),this.keyToTintColor.delete(t);return}const i=n.entityToInstanceIndex.get(t);if(i===void 0)return;const r=n.entities.size-1,o=n.instanceIndexToEntityKey.get(r);if(o&&o!==t){n.entityToInstanceIndex.set(o,i),n.instanceIndexToEntityKey.set(i,o),n.entityToChunkId.set(o,n.entityToChunkId.get(o)),n.entityToLightLevel.set(o,n.entityToLightLevel.get(o)),n.entityToSkyLight.set(o,n.entityToSkyLight.get(o));for(const l of n.sourceToInstancedMesh.values()){l.getMatrixAt(r,Wr),l.setMatrixAt(i,Wr);const c=l.geometry.getAttribute(us);c.setX(i,c.getX(r)),c.needsUpdate=!0;const h=l.geometry.getAttribute(ds);h.setX(i,h.getX(r)),h.needsUpdate=!0,l.instanceColor&&(l.instanceColor.setXYZ(i,l.instanceColor.getX(r),l.instanceColor.getY(r),l.instanceColor.getZ(r)),l.instanceColor.needsUpdate=!0),l.instanceMatrix.needsUpdate=!0}const a=this.keyToTintColor.get(o);this.keyToTintColor.set(o,a?a.clone():null)}for(const a of n.sourceToInstancedMesh.values())a.count=r;if(n.entities.delete(t),n.entityToInstanceIndex.delete(t),n.entityToChunkId.delete(t),n.entityToLightLevel.delete(t),n.entityToSkyLight.delete(t),n.instanceIndexToEntityKey.delete(r),this.keyToModelUri.delete(t),this.keyToTintColor.delete(t),n.entities.size===0){for(const a of n.sourceToInstancedMesh.values())this.host.removeFromScene(a),a.dispose();this.uriToEntry.delete(n.modelUri)}}updateLighting(t,e){for(const n of this.uriToEntry.values()){for(const i of n.entities){if(e){const a=n.entityToChunkId.get(i);if(a!==void 0&&!e.has(a))continue}const r=t(i);if(!r)continue;n.entityToChunkId.set(i,r.chunkId),n.entityToLightLevel.set(i,r.lightLevel),n.entityToSkyLight.set(i,r.skyLight);const o=n.entityToInstanceIndex.get(i);if(o!==void 0)for(const a of n.sourceToInstancedMesh.values())a.geometry.getAttribute(us).setX(o,r.lightLevel),a.geometry.getAttribute(ds).setX(o,r.skyLight)}for(const i of n.sourceToInstancedMesh.values())i.geometry.getAttribute(us).needsUpdate=!0,i.geometry.getAttribute(ds).needsUpdate=!0}}updateScenePresence(t,e,n){for(const i of this.uriToEntry.values())for(const r of i.sourceToInstancedMesh.values()){const o=Xr.get(r),a=!o||this.distanceToBoundsXZSquared(o,t)<=e,l=!!r.boundingSphere&&n.intersectsSphere(r.boundingSphere),c=a&&l,h=r.parent!==null;c&&!h?this.host.addToScene(r):!c&&h&&this.host.removeFromScene(r)}}clear(){for(const t of this.uriToEntry.values())for(const e of t.sourceToInstancedMesh.values())this.host.removeFromScene(e),e.dispose();this.uriToEntry.clear(),this.keyToModelUri.clear(),this.keyToTintColor.clear()}createEntry(t){return{entities:new Set,instanceIndexToEntityKey:new Map,entityToChunkId:new Map,entityToInstanceIndex:new Map,entityToLightLevel:new Map,entityToSkyLight:new Map,gltfRoot:null,gltfRootPromise:this.host.loadEntityModelTemplate(t),modelUri:t,sourceToInstancedMesh:new Map}}distanceToBoundsXZSquared(t,e){return wp.set(Math.max(t.min.x,Math.min(e.x,t.max.x)),Math.max(t.min.z,Math.min(e.y,t.max.z))),e.distanceToSquared(wp)}}const _r=["left","right","top","bottom","front","back"],ZE=1,jE=2,JE=4,zi=[[1,0,0,0,1,0,0,0,1],[0,0,-1,0,1,0,1,0,0],[-1,0,0,0,1,0,0,0,-1],[0,0,1,0,1,0,-1,0,0],[-1,0,0,0,-1,0,0,0,1],[0,0,-1,0,-1,0,-1,0,0],[1,0,0,0,-1,0,0,0,-1],[0,0,1,0,-1,0,1,0,0],[0,-1,0,1,0,0,0,0,1],[0,0,-1,1,0,0,0,-1,0],[0,1,0,1,0,0,0,0,-1],[0,0,1,1,0,0,0,1,0],[0,1,0,-1,0,0,0,0,1],[0,0,-1,-1,0,0,0,1,0],[0,-1,0,-1,0,0,0,0,-1],[0,0,1,-1,0,0,0,-1,0],[1,0,0,0,0,1,0,-1,0],[0,1,0,0,0,1,1,0,0],[-1,0,0,0,0,1,0,1,0],[0,-1,0,0,0,1,-1,0,0],[1,0,0,0,0,-1,0,1,0],[0,-1,0,0,0,-1,1,0,0],[-1,0,0,0,0,-1,0,-1,0],[0,1,0,0,0,-1,-1,0,0]],QE=1,tT=.8,eT=.5,un=16,Ap=.3,ro=Array.from({length:un+1},(s,t)=>t===0?0:Ap+(1-Ap)*(t-1)/(un-1)),Lc={left:{normal:[-1,0,0],vertices:[{pos:[0,1,0],uv:[0,1],ao:{corner:[-.5,.5,-.5],side1:[-.5,.5,.5],side2:[-.5,-.5,-.5]}},{pos:[0,0,0],uv:[0,0],ao:{corner:[-.5,-.5,-.5],side1:[-.5,.5,-.5],side2:[-.5,-.5,.5]}},{pos:[0,1,1],uv:[1,1],ao:{corner:[-.5,.5,.5],side1:[-.5,.5,-.5],side2:[-.5,-.5,.5]}},{pos:[0,0,1],uv:[1,0],ao:{corner:[-.5,-.5,.5],side1:[-.5,.5,.5],side2:[-.5,-.5,-.5]}}]},right:{normal:[1,0,0],vertices:[{pos:[1,1,1],uv:[0,1],ao:{corner:[.5,.5,.5],side1:[.5,.5,-.5],side2:[.5,-.5,.5]}},{pos:[1,0,1],uv:[0,0],ao:{corner:[.5,-.5,.5],side1:[.5,.5,.5],side2:[.5,-.5,-.5]}},{pos:[1,1,0],uv:[1,1],ao:{corner:[.5,.5,-.5],side1:[.5,.5,.5],side2:[.5,-.5,-.5]}},{pos:[1,0,0],uv:[1,0],ao:{corner:[.5,-.5,-.5],side1:[.5,.5,-.5],side2:[.5,-.5,.5]}}]},top:{normal:[0,1,0],vertices:[{pos:[0,1,1],uv:[1,1],ao:{corner:[-.5,.5,.5],side1:[.5,.5,.5],side2:[-.5,.5,-.5]}},{pos:[1,1,1],uv:[0,1],ao:{corner:[.5,.5,.5],side1:[-.5,.5,.5],side2:[.5,.5,-.5]}},{pos:[0,1,0],uv:[1,0],ao:{corner:[-.5,.5,-.5],side1:[.5,.5,-.5],side2:[-.5,.5,.5]}},{pos:[1,1,0],uv:[0,0],ao:{corner:[.5,.5,-.5],side1:[-.5,.5,-.5],side2:[.5,.5,.5]}}]},bottom:{normal:[0,-1,0],vertices:[{pos:[1,0,1],uv:[1,0],ao:{corner:[.5,-.5,.5],side1:[-.5,-.5,.5],side2:[.5,-.5,-.5]}},{pos:[0,0,1],uv:[0,0],ao:{corner:[-.5,-.5,.5],side1:[.5,-.5,.5],side2:[-.5,-.5,-.5]}},{pos:[1,0,0],uv:[1,1],ao:{corner:[.5,-.5,-.5],side1:[-.5,-.5,-.5],side2:[.5,-.5,.5]}},{pos:[0,0,0],uv:[0,1],ao:{corner:[-.5,-.5,-.5],side1:[.5,-.5,-.5],side2:[-.5,-.5,.5]}}]},front:{normal:[0,0,1],vertices:[{pos:[0,0,1],uv:[0,0],ao:{corner:[-.5,-.5,.5],side1:[.5,-.5,.5],side2:[-.5,.5,.5]}},{pos:[1,0,1],uv:[1,0],ao:{corner:[.5,-.5,.5],side1:[-.5,-.5,.5],side2:[.5,.5,.5]}},{pos:[0,1,1],uv:[0,1],ao:{corner:[-.5,.5,.5],side1:[.5,.5,.5],side2:[-.5,-.5,.5]}},{pos:[1,1,1],uv:[1,1],ao:{corner:[.5,.5,.5],side1:[-.5,.5,.5],side2:[.5,-.5,.5]}}]},back:{normal:[0,0,-1],vertices:[{pos:[1,0,0],uv:[0,0],ao:{corner:[.5,-.5,-.5],side1:[-.5,-.5,-.5],side2:[.5,.5,-.5]}},{pos:[0,0,0],uv:[1,0],ao:{corner:[-.5,-.5,-.5],side1:[.5,-.5,-.5],side2:[-.5,.5,-.5]}},{pos:[1,1,0],uv:[0,1],ao:{corner:[.5,.5,-.5],side1:[-.5,.5,-.5],side2:[.5,-.5,-.5]}},{pos:[0,1,0],uv:[1,1],ao:{corner:[-.5,.5,-.5],side1:[.5,.5,-.5],side2:[-.5,-.5,-.5]}}]}},ru=256,ms=0,Cp=1,ou=.05,nT=-.1,iT=1,os="worldEditorTime",Sa="worldEditorTextureAtlas",au="worldEditorFogColor",lu="worldEditorFogEnabled",cu="worldEditorFogFar",hu="worldEditorFogNear",Wn="worldEditorAmbientLightColor",Bc="worldEditorAmbientLightIntensity",rl="uChunkVisibleBits",ol="uChunkVisibilityMode",xs="chunkIndex",hd=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`,sT={color:()=>new ut(16777215),enabled:()=>!1,far:()=>0,near:()=>0};function Ui(s){return Math.max(Math.ceil(s/128),1)}function ud(s){return{[rl]:{value:new Uint32Array(Ui(s)*4)},[ol]:{value:ms}}}function dd(s){const t=Ui(s);return`
    uniform uint ${ol};
    uniform uvec4 ${rl}[${t}];
    attribute float ${xs};

    bool isChunkVisible(uint chunkIndexValue) {
      if (${ol} == uint(${ms})) {
        return true;
      }

      uint wordIndex = chunkIndexValue >> 5u;
      uvec4 packedWords = ${rl}[int(wordIndex >> 2u)];
      uint packedWord = packedWords[int(wordIndex & 3u)];
      uint bitIndex = chunkIndexValue & 31u;
      return ((packedWord >> bitIndex) & 1u) != 0u;
    }
  `}function fd(s){return{[au]:{get value(){return s.color()}},[lu]:{get value(){return s.enabled()}},[cu]:{get value(){return s.far()}},[hu]:{get value(){return s.near()}}}}function pd(){return`
    uniform vec3 ${au};
    uniform bool ${lu};
    uniform float ${cu};
    uniform float ${hu};

    vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
      if (!${lu}) {
        return color;
      }

      float fogFactor = smoothstep(${hu}, ${cu}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${au}, fogFactor);
    }
  `}class md extends He{constructor(){super(...arguments);C(this,"boundChunkVisibilityBits",null);C(this,"boundChunkVisibilityMode",-1);C(this,"boundChunkVisibilityRevision",-1)}bindChunkVisibility(e,n,i,r){const o=typeof e=="string"?n:e,a=typeof e=="string"?i:n,l=typeof e=="string"?r:i;return this.boundChunkVisibilityBits===o&&this.boundChunkVisibilityMode===a&&this.boundChunkVisibilityRevision===l?!1:(this.uniforms[rl].value=o,this.uniforms[ol].value=a,this.boundChunkVisibilityBits=o,this.boundChunkVisibilityMode=a,this.boundChunkVisibilityRevision=l,this.uniformsNeedUpdate=!0,!0)}}class Rp extends md{constructor(e,n,i){const r=Qn.clone(me.basic.uniforms);Object.assign(r,fd(n),ud(i));const o=me.basic.vertexShader.replace("void main() {",`
        ${dd(i)}
        attribute float lightLevel;
        varying float vLightLevel;
        varying vec3 vWorldPos;
        void main() {
          uint chunkIndexValue = uint(${xs} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          vLightLevel = lightLevel;
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),a=me.basic.fragmentShader.replace("void main() {",`
          ${hd}
          uniform vec3 ${Wn};
          uniform float ${Bc};
          varying float vLightLevel;
          varying vec3 vWorldPos;
          ${pd()}
          void main() {
        `).replace("#include <opaque_fragment>",`
          vec3 ambientLight = ${Wn} * ${Bc};
          vec3 blockLight = ${Wn} * vLightLevel * float(${iT});
          outgoingLight *= max(ambientLight, blockLight);
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:r,vertexShader:o,fragmentShader:a,side:fn,transparent:e,alphaTest:e?ou:0,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0,glslVersion:Oi});C(this,"colorValue",new ut(16777215));C(this,"ambientColor",new ut(16777215));C(this,"transparentMode");C(this,"atlasTexture",null);C(this,"alphaTestValue",0);C(this,"ambientIntensity",1);this.transparentMode=e,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_MAP:"",MAP_UV:"uv",...e?{USE_ALPHATEST:""}:{}},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],[xs]:[0],lightLevel:[0]},this.bindUniforms()}set textureAtlas(e){this.atlasTexture=e}setAmbientIntensity(e){this.ambientIntensity=e}setAmbientColor(e){this.ambientColor.copy(e)}copy(e){return super.copy(e),this.colorValue.copy(e.colorValue),this.ambientColor.copy(e.ambientColor),this.atlasTexture=e.atlasTexture,this.alphaTestValue=e.alphaTestValue,this.bindUniforms(),this}bindUniforms(){const e=this;this.uniforms.diffuse={value:this.colorValue},this.uniforms.opacity={get value(){return e.opacity}},this.uniforms.map={get value(){return e.atlasTexture}},this.uniforms.alphaTest={get value(){return e.transparentMode?ou:e.alphaTestValue}},this.uniforms[Wn]={value:this.ambientColor},this.uniforms[Bc]={get value(){return e.ambientIntensity}}}}class rT extends md{constructor(e,n){super({uniforms:Qn.merge([fd(e),ud(n),{[os]:{value:0},[Sa]:{value:null},[Wn]:{value:new ut(1,1,1)}}]),vertexShader:`
        uniform float ${os};
        ${dd(n)}

        attribute vec4 foamLevel;
        attribute vec4 foamLevelDiag;
        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;

        void main() {
          uint chunkIndexValue = uint(${xs} + 0.5);
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

          float slowTime = ${os} * 0.5;
          float yOffset = ${nT};
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
        ${hd}
        uniform float ${os};
        uniform sampler2D ${Sa};
        uniform vec3 ${Wn};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${pd()}

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
          vec4 texColor = texture(${Sa}, vUv);
          if (texColor.a < ${ou.toFixed(1)}) {
            discard;
          }

          float fresnel = pow(1.0 - dot(vNormal, vViewVector), 4.0);
          float waveLighting = sin(dot(vWorldPos.xz, vec2(2.0)) + ${os} * 0.5) * 0.1;
          vec3 finalColor = texColor.rgb * ${Wn};

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
              float foamTime = ${os} * 0.3;
              vec2 foamUV = vWorldPos.xz * 6.0;

              float foamNoise = noise(foamUV + vec2(foamTime, 0.0)) * 0.5 +
                                noise(foamUV * 2.0 + vec2(0.0, foamTime * 0.5)) * 0.3 +
                                noise(foamUV * 4.0 + vec2(foamTime * 0.3, foamTime * 0.2)) * 0.2;
              float foamPattern = smoothstep(0.3, 0.5, foamNoise);
              float finalFoam = mix(foamIntensity, foamPattern * foamIntensity, smoothstep(0.0, 0.05, minDist));

              vec3 foamColor = vec3(1.0) * ${Wn};
              finalColor = mix(finalColor, foamColor, finalFoam * 0.95);
            }
          }

          gl_FragColor = vec4(finalColor, 0.8);
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        }
      `,forceSinglePass:!0,side:Ke,transparent:!0,fog:!1,lights:!1,toneMapped:!0,vertexColors:!0,glslVersion:Oi});C(this,"ambientColor",new ut(16777215));C(this,"ambientIntensity",1);this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],[xs]:[0],foamLevel:[0,0,0,0],foamLevelDiag:[0,0,0,0],uv:[0,0]}}set textureAtlas(e){this.uniforms[Sa].value=e}setAmbientIntensity(e){this.ambientIntensity=e,this.uniforms[Wn].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}setAmbientColor(e){this.ambientColor.copy(e),this.uniforms[Wn].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}update(e){this.uniforms[os].value+=.0075}}class oT extends md{constructor(t,e){super({uniforms:Qn.merge([Qn.clone(me.basic.uniforms),fd(t),ud(e)]),vertexShader:me.basic.vertexShader.replace("void main() {",`
          ${dd(e)}
          varying vec3 vWorldPos;
          void main() {
            uint chunkIndexValue = uint(${xs} + 0.5);
            if (!isChunkVisible(chunkIndexValue)) {
              gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
              return;
            }
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        `),fragmentShader:me.basic.fragmentShader.replace("void main() {",`
            ${hd}
            varying vec3 vWorldPos;
            ${pd()}
            void main() {
          `).replace("#include <fog_fragment>",`
            gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
          `),side:Ke,vertexColors:!0,fog:!1,lights:!1,toneMapped:!0,clipping:!0,glslVersion:Oi}),this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],[xs]:[0]}}setAmbientIntensity(t){}setAmbientColor(t){}}function uu(s,t,e=sT,n=ru){switch(s){case"lod":return new oT(e,n);case"opaque":{const i=new Rp(!1,e,n);return i.textureAtlas=t,i}case"transparent":{const i=new Rp(!0,e,n);return i.depthWrite=!0,i.textureAtlas=t,i}case"liquid":{const i=new rT(e,n);return i.depthWrite=!0,i.textureAtlas=t,i}}}const aT=Math.ceil(16/ht),ba=[.3,.25,.25,.2],lT={top:"bottom",bottom:"top",left:"right",right:"left",front:"back",back:"front"},qe={x:0,y:0,z:0},Ws={x:0,y:0,z:0},Fn=[0,0,0],On=[0,0,0],zn=[0,0,0],Jt=[0,0,0],as=[0,0,0],cT=[0,0,0],hT=[0,0,0],uT=[0,0,0],dT={corner:cT,side1:hT,side2:uT},qr=[0,0,0,1],al=[],ll=[],cl=[],po=[],ln={x:0,y:0,z:0},Ea={x:0,y:0,z:0},Ye=2,tn=ht/Ye,fT=Ye*Ye*Ye,Xg=fT/4,qa=[1,1,1];function qg(){return{lodBlockColorCache:new Map,lodCellOccupancy:new Float32Array(tn*tn*tn),lodColorTextureUrisScratch:[],lodColorUniqueTextureUrisScratch:new Set,lodGreedyMask:new Int8Array(tn*tn)}}class pT{constructor(){C(this,"data",new Map)}key(t,e,n){return`${t},${e},${n}`}set(t,e,n,i){this.data.set(this.key(t,e,n),i)}get(t,e,n){const i=this.key(t,e,n);return this.data.has(i)?this.data.get(i):un}}function mT(s,t,e,n=qg()){const i={liquid:{colors:[],foamLevels:[],foamLevelsDiag:[],indices:[],lightLevels:[],normals:[],positions:[],uvs:[]},opaque:{colors:[],foamLevels:[],foamLevelsDiag:[],indices:[],lightLevels:[],normals:[],positions:[],uvs:[]},transparent:{colors:[],foamLevels:[],foamLevelsDiag:[],indices:[],lightLevels:[],normals:[],positions:[],uvs:[]}};let r=0;const o=wT(s,t,e),a=t.originCoordinate,l={x:0,y:0,z:0},c={x:0,y:0,z:0},h={x:0,y:0,z:0};t.forEachBlock((_,m,g)=>{var A;l.x=a.x+_.x,l.y=a.y+_.y,l.z=a.z+_.z;const x=t.getBlockTypeAt(_.x,_.y,_.z),b=s.getBlockTypeById(x);if(!b)return;r++;const v=bT(l,a,o);if((A=b.trimeshTriangleData)!=null&&A.length){const T=i[xT(b,e)];for(const E of b.trimeshTriangleData){const y=T.positions.length/3;g===0?(Fn[0]=E.v0x,Fn[1]=E.v0y,Fn[2]=E.v0z,On[0]=E.v1x,On[1]=E.v1y,On[2]=E.v1z,zn[0]=E.v2x,zn[1]=E.v2y,zn[2]=E.v2z,Jt[0]=E.normalX,Jt[1]=E.normalY,Jt[2]=E.normalZ):(wa(E.v0x,E.v0y,E.v0z,g,Fn),wa(E.v1x,E.v1y,E.v1z,g,On),wa(E.v2x,E.v2y,E.v2z,g,zn),mo(E.normalX,E.normalY,E.normalZ,g,Jt));const S=kc(E.normalX,E.normalY,E.normalZ),B=e.getFaceUvs(b,S),R=kc(Jt[0],Jt[1],Jt[2]),O=Pp(R),z=Lc[R].vertices;al.length=0,ll.length=0,cl.length=0,po.length=0;const P=ET(s,t,a,l,Jt,e);h.x=l.x+Fn[0],h.y=l.y+Fn[1],h.z=l.z+Fn[2],T.positions.push(h.x,h.y,h.z),T.normals.push(Jt[0],Jt[1],Jt[2]),T.uvs.push(B.u0+(B.u1-B.u0)*E.v0u,B.v0+(B.v1-B.v0)*E.v0v);let U=Aa(s,t,l,a,h,b,Fc(Fn[0],Fn[1],Fn[2],z),Jt,O,P,o,e);T.colors.push(U[0],U[1],U[2],U[3]),T.lightLevels.push(v),h.x=l.x+On[0],h.y=l.y+On[1],h.z=l.z+On[2],T.positions.push(h.x,h.y,h.z),T.normals.push(Jt[0],Jt[1],Jt[2]),T.uvs.push(B.u0+(B.u1-B.u0)*E.v1u,B.v0+(B.v1-B.v0)*E.v1v),U=Aa(s,t,l,a,h,b,Fc(On[0],On[1],On[2],z),Jt,O,P,o,e),T.colors.push(U[0],U[1],U[2],U[3]),T.lightLevels.push(v),h.x=l.x+zn[0],h.y=l.y+zn[1],h.z=l.z+zn[2],T.positions.push(h.x,h.y,h.z),T.normals.push(Jt[0],Jt[1],Jt[2]),T.uvs.push(B.u0+(B.u1-B.u0)*E.v2u,B.v0+(B.v1-B.v0)*E.v2v),U=Aa(s,t,l,a,h,b,Fc(zn[0],zn[1],zn[2],z),Jt,O,P,o,e),T.colors.push(U[0],U[1],U[2],U[3]),T.lightLevels.push(v),T.indices.push(y,y+1,y+2)}return}for(const T of _r){const E=Lc[T].normal;g===0?(Jt[0]=E[0],Jt[1]=E[1],Jt[2]=E[2]):mo(E[0],E[1],E[2],g,Jt),c.x=l.x+Math.round(Jt[0]),c.y=l.y+Math.round(Jt[1]),c.z=l.z+Math.round(Jt[2]);const y=gn(s,t,a,c.x,c.y,c.z);if(!MT(b,T,y,e))continue;const S=i[vT(b,T,e)],B=S.positions.length/3,R=e.getFaceUvs(b,T),O=Lc[T],z=Pp(kc(Jt[0],Jt[1],Jt[2])),P=y&&!y.isLiquid&&y.trimeshOcclusionProfile?gd(y,e):0;al.length=0,ll.length=0,cl.length=0,po.length=0;let U=[0,0,0,0],V=[0,0,0,0];if(b.isLiquid&&Jt[1]>.5){c.x=l.x+1,c.y=l.y,c.z=l.z;const N=gn(s,t,a,c.x,c.y,c.z);c.x=l.x-1;const q=gn(s,t,a,c.x,c.y,c.z);c.x=l.x,c.z=l.z+1;const j=gn(s,t,a,c.x,c.y,c.z);c.z=l.z-1;const it=gn(s,t,a,c.x,c.y,c.z);c.x=l.x+1,c.z=l.z+1;const at=gn(s,t,a,c.x,c.y,c.z);c.z=l.z-1;const dt=gn(s,t,a,c.x,c.y,c.z);c.x=l.x-1,c.z=l.z+1;const At=gn(s,t,a,c.x,c.y,c.z);c.z=l.z-1;const te=gn(s,t,a,c.x,c.y,c.z);U=[+!!(N&&!N.isLiquid),+!!(q&&!q.isLiquid),+!!(j&&!j.isLiquid),+!!(it&&!it.isLiquid)],V=[+!!(at&&!at.isLiquid),+!!(dt&&!dt.isLiquid),+!!(At&&!At.isLiquid),+!!(te&&!te.isLiquid)]}for(const N of O.vertices){g===0?(as[0]=N.pos[0],as[1]=N.pos[1],as[2]=N.pos[2]):wa(N.pos[0],N.pos[1],N.pos[2],g,as);const q=g===0?N.ao:ST(N.ao,g,dT);h.x=l.x+as[0],h.y=l.y+as[1],h.z=l.z+as[2],S.positions.push(h.x,h.y,h.z),S.normals.push(Jt[0],Jt[1],Jt[2]);const j=N.uv[0]===0?R.u0:R.u1,it=N.uv[1]===0?R.v0:R.v1;S.uvs.push(j,it);const at=Aa(s,t,l,a,h,b,q,Jt,z,P,o,e);S.colors.push(at[0],at[1],at[2],at[3]),S.lightLevels.push(v),b.isLiquid&&(S.foamLevels.push(...U),S.foamLevelsDiag.push(...V))}S.indices.push(B,B+1,B+2,B+1,B+3,B+2)}});const u=Uc(i.liquid),d=_T(s,t,e,n),f=Uc(i.opaque),p=Uc(i.transparent);return!u&&!d&&!f&&!p?null:{blockCount:r,liquidBounds:u?Ta(u.positions):void 0,liquidGeometry:u,lodBounds:d?Ta(d.positions):void 0,lodGeometry:d,opaqueBounds:f?Ta(f.positions):void 0,opaqueGeometry:f,transparentBounds:p?Ta(p.positions):void 0,transparentGeometry:p}}function gT(s){return{getAverageRgb(t){const e=s[t];if(!e)throw new Error(`TextureAtlas snapshot missing entry for ${t}`);return e.averageRGB},getAverageTransparencyRatio(t){let e=0;for(const n of _r){const i=s[t.textureUris[n]];if(!i)throw new Error(`TextureAtlas snapshot missing entry for ${t.textureUris[n]}`);e+=i.transparencyRatio}return e/_r.length},getFaceUvs(t,e){const n=s[t.textureUris[e]];if(!n)throw new Error(`TextureAtlas snapshot missing entry for ${t.textureUris[e]}`);return n},isTextureTransparent(t){const e=s[t];if(!e)throw new Error(`TextureAtlas snapshot missing entry for ${t}`);return e.isTransparent},textureNeedsAlphaTest(t){const e=s[t];if(!e)throw new Error(`TextureAtlas snapshot missing entry for ${t}`);return e.needsAlphaTest}}}function Dc(s,t,e){const n=new Le;n.setAttribute("position",new Vt(s.positions,3)),n.setAttribute("normal",new Vt(s.normals,3)),n.setAttribute("uv",new Vt(s.uvs,2)),n.setAttribute("color",new Vt(s.colors,4)),n.setAttribute("lightLevel",new Vt(s.lightLevels,1)),s.foamLevels&&n.setAttribute("foamLevel",new Vt(s.foamLevels,4)),s.foamLevelsDiag&&n.setAttribute("foamLevelDiag",new Vt(s.foamLevelsDiag,4)),n.setIndex(new Vt(s.indices,1)),n.computeBoundingBox(),n.computeBoundingSphere();const i=uu(e,t.texture),r=new Me(n,i);return r.frustumCulled=!0,r.matrixAutoUpdate=!1,r.renderOrder=e==="opaque"?0:e==="transparent"?1:2,r.updateMatrix(),r}function Uc(s){return s.indices.length===0?null:{blockCount:0,colors:new Float32Array(s.colors),foamLevels:s.foamLevels.length>0?new Float32Array(s.foamLevels):void 0,foamLevelsDiag:s.foamLevelsDiag.length>0?new Float32Array(s.foamLevelsDiag):void 0,indices:$g(s.indices),lightLevels:new Float32Array(s.lightLevels),normals:new Float32Array(s.normals),positions:new Float32Array(s.positions),uvs:new Float32Array(s.uvs)}}function Ta(s){let t=s[0],e=s[1],n=s[2],i=s[0],r=s[1],o=s[2];for(let a=3;a<s.length;a+=3){const l=s[a],c=s[a+1],h=s[a+2];l<t&&(t=l),c<e&&(e=c),h<n&&(n=h),l>i&&(i=l),c>r&&(r=c),h>o&&(o=h)}return{min:[t,e,n],max:[i,r,o]}}function $g(s){return(s.length===0?0:s[s.length-1])>65535?new Uint32Array(s):new Uint16Array(s)}function _T(s,t,e,n){n.lodCellOccupancy.fill(0);let i=0,r=0,o=0,a=0,l=0,c=0,h=0,u=0,d=0,f=0,p=0,_=0;for(let E=0;E<ht;E++)for(let y=0;y<ht;y++)for(let S=0;S<ht;S++){const B=s.getBlockTypeById(t.getBlockTypeAt(S,E,y));if(!B)continue;const R=Math.floor(S/Ye),O=Math.floor(E/Ye),z=Math.floor(y/Ye),P=R+tn*(O+tn*z);n.lodCellOccupancy[P]+=Yg(B);const U=Nc(B,"top",e,n);i+=U[0],r+=U[1],o+=U[2],a++;const V=Nc(B,"side",e,n);l+=V[0],c+=V[1],h+=V[2],u++;const N=Nc(B,"bottom",e,n);d+=N[0],f+=N[1],p+=N[2],_++}for(let E=0;E<n.lodCellOccupancy.length;E++)n.lodCellOccupancy[E]=n.lodCellOccupancy[E]>=Xg?1:0;const m=[],g=[],x=[],b=[],v=[],A={top:a>0?[i/a,r/a,o/a]:qa,side:u>0?[l/u,c/u,h/u]:qa,bottom:_>0?[d/_,f/_,p/_]:qa};if(yT(s,t,A,m,g,x,b,v,n),m.length===0)return null;const T=m.length/3;return{blockCount:0,colors:new Float32Array(x),indices:$g(v),lightLevels:new Float32Array(T),normals:new Float32Array(g),positions:new Float32Array(m),uvs:new Float32Array(b)}}function yT(s,t,e,n,i,r,o,a,l){const c=[tn,tn,tn],h=[0,0,0],u=[0,0,0],d=[0,0,0],f=[0,0,0],p=t.originCoordinate;for(let _=0;_<3;_++){const m=(_+1)%3,g=(_+2)%3;for(u[0]=0,u[1]=0,u[2]=0,u[_]=1,h[0]=0,h[1]=0,h[2]=0,h[_]=-1;h[_]<c[_];){let x=0;for(h[g]=0;h[g]<c[g];h[g]++)for(h[m]=0;h[m]<c[m];h[m]++){const b=Ip(s,t,p,h[0],h[1],h[2],l),v=Ip(s,t,p,h[0]+u[0],h[1]+u[1],h[2]+u[2],l);b!==0&&v===0?l.lodGreedyMask[x++]=b:b===0&&v!==0?l.lodGreedyMask[x++]=-v:l.lodGreedyMask[x++]=0}h[_]++,x=0;for(let b=0;b<c[g];b++)for(let v=0;v<c[m];){const A=l.lodGreedyMask[x];if(A===0){v++,x++;continue}let T=1;for(;v+T<c[m]&&l.lodGreedyMask[x+T]===A;)T++;let E=1,y=!1;for(;b+E<c[g]&&!y;){for(let q=0;q<T;q++)if(l.lodGreedyMask[x+q+E*c[m]]!==A){y=!0;break}y||E++}h[m]=v,h[g]=b,d[0]=0,d[1]=0,d[2]=0,f[0]=0,f[1]=0,f[2]=0,d[m]=T,f[g]=E;const S=[0,0,0];S[_]=A>0?1:-1;const B=S[1]>0?e.top:S[1]<0?e.bottom:e.side,R=[h[0],h[1],h[2]];A<0&&(R[_]=h[_]);const O=[R[0],R[1],R[2]],z=[R[0]+d[0],R[1]+d[1],R[2]+d[2]],P=[R[0]+f[0],R[1]+f[1],R[2]+f[2]],U=[R[0]+d[0]+f[0],R[1]+d[1]+f[1],R[2]+d[2]+f[2]],V=n.length/3,N=A>0?[O,z,P,U]:[O,P,z,U];for(const q of N)n.push(p.x+q[0]*Ye,p.y+q[1]*Ye,p.z+q[2]*Ye),i.push(S[0],S[1],S[2]),r.push(B[0],B[1],B[2],1),o.push(0,0);a.push(V,V+1,V+2,V+2,V+1,V+3);for(let q=0;q<E;q++)for(let j=0;j<T;j++)l.lodGreedyMask[x+j+q*c[m]]=0;v+=T,x+=T}}}}function Ip(s,t,e,n,i,r,o){if(n>=0&&n<tn&&i>=0&&i<tn&&r>=0&&r<tn)return o.lodCellOccupancy[n+tn*(i+tn*r)];const a=e.x+n*Ye,l=e.y+i*Ye,c=e.z+r*Ye;let h=0;for(let u=0;u<Ye;u++)for(let d=0;d<Ye;d++)for(let f=0;f<Ye;f++){const p=IT(s,t,e,a+f,l+u,c+d);if(p&&(h+=Yg(p),h>=Xg))return 1}return 0}function Yg(s){const t=1-s.transparencyRatio;return s.trimeshOcclusionProfile?Math.max(0,Math.min(1,s.trimeshOcclusionProfile.aoOpacity*t)):t}function Nc(s,t,e,n){const i=`${s.id}:${t}`,r=n.lodBlockColorCache.get(i);if(r)return r;const o=n.lodColorTextureUrisScratch;o.length=0,t==="top"?o.push(s.textureUris.top):t==="bottom"?o.push(s.textureUris.bottom):o.push(s.textureUris.left,s.textureUris.right,s.textureUris.front,s.textureUris.back);const a=n.lodColorUniqueTextureUrisScratch;a.clear();for(const f of o)f&&a.add(f);let l=0,c=0,h=0,u=0;for(const f of a){const p=e.getAverageRgb(f);l+=p[0],c+=p[1],h+=p[2],u++}const d=u>0?[l/u,c/u,h/u]:qa;return n.lodBlockColorCache.set(i,d),d}function xT(s,t){if(s.isLiquid)return"liquid";if(s.isTranslucent)return"transparent";for(const e of _r){const n=s.textureUris[e];if(t.isTextureTransparent(n)||t.textureNeedsAlphaTest(n))return"transparent"}return"opaque"}function vT(s,t,e){if(s.isLiquid)return"liquid";const n=s.textureUris[t];return s.isTranslucent||e.isTextureTransparent(n)||e.textureNeedsAlphaTest(n)?"transparent":"opaque"}function MT(s,t,e,n){var o;if(!e)return!0;if(e.isLiquid||(o=e.trimeshTriangleData)!=null&&o.length)return e.id!==s.id;const i=lT[t],r=e.textureUris[i];return n.isTextureTransparent(r)||n.textureNeedsAlphaTest(r)}function Pp(s){switch(s){case"top":return QE;case"bottom":return eT;default:return tT}}function kc(s,t,e){const n=Math.abs(s),i=Math.abs(t),r=Math.abs(e);return i>=n&&i>=r?t>=0?"top":"bottom":n>=r?s>=0?"right":"left":e>=0?"front":"back"}function Fc(s,t,e,n){let i=Number.POSITIVE_INFINITY,r=n[0].ao;for(const o of n){const a=s-o.pos[0],l=t-o.pos[1],c=e-o.pos[2],h=a*a+l*l+c*c;h<i&&(i=h,r=o.ao)}return r}function wa(s,t,e,n,i){const r=zi[n]??zi[0],o=s-.5,a=t-.5,l=e-.5;return i[0]=r[0]*o+r[1]*a+r[2]*l+.5,i[1]=r[3]*o+r[4]*a+r[5]*l+.5,i[2]=r[6]*o+r[7]*a+r[8]*l+.5,i}function mo(s,t,e,n,i){const r=zi[n]??zi[0];return i[0]=r[0]*s+r[1]*t+r[2]*e,i[1]=r[3]*s+r[4]*t+r[5]*e,i[2]=r[6]*s+r[7]*t+r[8]*e,i}function ST(s,t,e){return mo(s.corner[0],s.corner[1],s.corner[2],t,e.corner),mo(s.side1[0],s.side1[1],s.side1[2],t,e.side1),mo(s.side2[0],s.side2[1],s.side2[2],t,e.side2),e}function Aa(s,t,e,n,i,r,o,a,l,c,h,u){let d=c;d+=Oc(s,t,n,i,o.corner,u),d+=Oc(s,t,n,i,o.side1,u),d+=Oc(s,t,n,i,o.side2,u);const f=Math.min(3,d),p=Math.floor(f),_=r.aoIntensity[p]+(r.aoIntensity[Math.min(3,p+1)]-r.aoIntensity[p])*(f-p),m=TT(i,e,a,n,h),g=l*m;return qr[0]=Math.max(0,(r.color[0]-_)*g),qr[1]=Math.max(0,(r.color[1]-_)*g),qr[2]=Math.max(0,(r.color[2]-_)*g),qr[3]=1,qr}function bT(s,t,e){return BT(s,t,e.lightLevelVolume)/15}function Oc(s,t,e,n,i,r){qe.x=Math.floor(n.x+i[0]),qe.y=Math.floor(n.y+i[1]),qe.z=Math.floor(n.z+i[2]);for(let l=0;l<po.length;l++)if(al[l]===qe.x&&ll[l]===qe.y&&cl[l]===qe.z)return po[l];const o=gn(s,t,e,qe.x,qe.y,qe.z),a=!o||o.isLiquid?0:gd(o,r);return al.push(qe.x),ll.push(qe.y),cl.push(qe.z),po.push(a),a}function ET(s,t,e,n,i,r){Ws.x=n.x+i[0],Ws.y=n.y+i[1],Ws.z=n.z+i[2];const o=gn(s,t,e,Ws.x,Ws.y,Ws.z);return!o||o.isLiquid||!o.trimeshOcclusionProfile?0:gd(o,r)}function gn(s,t,e,n,i,r){const o=n-e.x,a=i-e.y,l=r-e.z;if(o>=0&&o<ht&&a>=0&&a<ht&&l>=0&&l<ht)return CT(t,s,o,a,l);qe.x=n,qe.y=i,qe.z=r;const c=s.getChunk($t.globalCoordinateToChunkId(qe));if(c)return s.getBlockTypeById(c.getBlockTypeAt(n&ve,i&ve,r&ve))}function TT(s,t,e,n,i){const r=t.x+e[0],o=t.y+e[1],a=t.z+e[2],l=t.x+(s.x-t.x-.5)*2,c=t.y+(s.y-t.y-.5)*2,h=t.z+(s.z-t.z-.5)*2;let u=l>r?1:l<r?-1:0,d=c>o?1:c<o?-1:0,f=h>a?1:h<a?-1:0;e[0]!==0&&(u=0),e[1]!==0&&(d=0),e[2]!==0&&(f=0);let p=ro[Ca(r-n.x,o-n.y,a-n.z,i)]*ba[0],_=r,m=o,g=a,x=r,b=o,v=a,A=1;return u!==0&&(A===1?_+=u:x+=u,A++),d!==0&&(A===1?m+=d:b+=d,A++),f!==0&&(A===1?g+=f:v+=f),p+=ro[Ca(_-n.x,m-n.y,g-n.z,i)]*ba[1],p+=ro[Ca(x-n.x,b-n.y,v-n.z,i)]*ba[2],p+=ro[Ca(r+u-n.x,o+d-n.y,a+f-n.z,i)]*ba[3],p}function Ca(s,t,e,n){return s>=0&&s<ht&&t>=0&&t<ht&&e>=0&&e<ht?Zg(n.skyDistanceVolume,hl(s,t,e))+1:n.skyBoundaryVolume.get(s,t,e)}function wT(s,t,e){const n=new Uint8Array(Math.ceil(sl/2)),i=new pT,r=s.getLightSourcesNear(t.originCoordinate,aT);let o;const a=t.originCoordinate;for(let l=-1;l<=ht;l++)for(let c=-1;c<=ht;c++){let h=un;if(ln.x=a.x+l,ln.y=a.y+ht,ln.z=a.z+c,s.getChunk($t.globalCoordinateToChunkId(ln))){let f=un;const p=a.y+ht-1;for(let _=un;_>=1;_--){ln.x=a.x+l,ln.y=p+_,ln.z=a.z+c;const m=Lp(s,ln,e);m!==void 0?f=m+f*(1-m):f=Math.min(un,f+1)}h=f}let d=h;for(let f=ht;f>=-1;f--){ln.x=a.x+l,ln.y=a.y+f,ln.z=a.z+c;const p=Lp(s,ln,e);p!==void 0?d=p+d*(1-p):d=Math.min(un,d+1);const _=Math.max(1,Math.min(un,Math.round(d)));if(l>=0&&l<ht&&f>=0&&f<ht&&c>=0&&c<ht){Bp(n,hl(l,f,c),_-1);const m=Math.floor(AT(ln,r))&15;m>0&&(o??(o=new Uint8Array(Math.ceil(sl/2))),Bp(o,hl(l,f,c),m))}else i.set(l,f,c,_)}}return{lightLevelVolume:o,skyBoundaryVolume:i,skyDistanceVolume:n}}function AT(s,t){let e=0;for(const n of t){const i=s.x-n.position.x+.5,r=s.y-n.position.y+.5,o=s.z-n.position.z+.5;if(i>n.level||i<-n.level||r>n.level||r<-n.level||o>n.level||o<-n.level)continue;const a=i*i+r*r+o*o,l=n.level*n.level;if(a>=l)continue;const c=n.level-Math.sqrt(a);c>e&&(e=c)}return e}function Lp(s,t,e){Ea.x=t.x&~ve,Ea.y=t.y&~ve,Ea.z=t.z&~ve;const n=s.getChunk($t.originCoordinateToChunkId(Ea));if(!n)return;const i=s.getBlockTypeById(n.getBlockTypeAt(t.x&ve,t.y&ve,t.z&ve));if(!(!i||i.isLiquid))return PT(i,n.getBlockRotationAt(t.x&ve,t.y&ve,t.z&ve),e)}function CT(s,t,e,n,i){return t.getBlockTypeById(s.getBlockTypeAt(e,n,i))}function RT(s,t,e,n,i,r){return gn(s,t,e,n,i,r)}function IT(s,t,e,n,i,r){return RT(s,t,e,n,i,r)}function Kg(s,t){return Math.max(0,Math.min(1,1-t.getAverageTransparencyRatio(s)))}function gd(s,t){const e=Kg(s,t);return s.trimeshOcclusionProfile?s.trimeshOcclusionProfile.aoOpacity*e:e}function PT(s,t,e){const n=Kg(s,e);return s.trimeshOcclusionProfile?LT(s,t)*n:n}function LT(s,t){const e=s.trimeshOcclusionProfile;if(!e)return 1;const n=zi[t]??zi[0],i=n[3],r=n[5];return Math.abs(i)>.5?e.skyOpacityX:Math.abs(r)>.5?e.skyOpacityZ:e.skyOpacityUp}function BT(s,t,e){if(!e)return 0;const n=s.x-t.x,i=s.y-t.y,r=s.z-t.z;return n<0||i<0||r<0||n>=ht||i>=ht||r>=ht?0:Zg(e,hl(n,i,r))}function hl(s,t,e){return s+ht*(t+ht*e)}function Zg(s,t){const e=Math.floor(t/2);return t%2===0?s[e]&15:s[e]>>4&15}function Bp(s,t,e){const n=Math.floor(t/2);t%2===0?s[n]=s[n]&240|e&15:s[n]=s[n]&15|(e&15)<<4}const DT={x:2,y:2,z:2},UT={x:2,y:2,z:2},Oe={x:8,y:4,z:8},NT=2,go=new L,jg=new L,Dp=new Float32Array(0);class kT{constructor(t){C(this,"parent");C(this,"atlas",null);C(this,"ambientIntensity",1);C(this,"ambientColor",new ut(16777215));C(this,"fogProvider",null);C(this,"chunkLiquidBounds",new Map);C(this,"chunkLodBounds",new Map);C(this,"chunkOpaqueBounds",new Map);C(this,"chunkTransparentBounds",new Map);C(this,"parentBatches",new Map);C(this,"scratchChunkIds",new Set);C(this,"scratchChunkModes",new Map);C(this,"states",{liquid:Ra(),lod:Ra(),opaque:Ra(),transparent:Ra()});this.parent=t}get batchMeshCount(){let t=0;for(const e of this.parentBatches.values())e.lodBatch&&t++;return this.states.liquid.batches.size+t+this.states.opaque.batches.size+this.states.transparent.batches.size}setAtlas(t){if(this.atlas!==t){if(this.atlas=t,!t){this.disposeBatchMeshes();return}for(const e of[this.states.opaque,this.states.transparent,this.states.liquid,this.states.lod])for(const n of e.batchChunkIds.keys())e.dirtyBatchIds.add(n);for(const e of this.parentBatches.values())e.lodChunkIds.size>0&&this.states.lod.dirtyBatchIds.add(e.key)}}clear(){this.disposeBatchMeshes();for(const t of[this.states.opaque,this.states.transparent,this.states.liquid,this.states.lod])t.batchChunkIds.clear(),t.chunkGeometries.clear(),t.dirtyBatchIds.clear(),t.dirtyChunkIdsByBatch.clear();this.chunkLiquidBounds.clear(),this.chunkLodBounds.clear(),this.chunkOpaqueBounds.clear(),this.chunkTransparentBounds.clear(),this.parentBatches.clear(),this.scratchChunkIds.clear(),this.scratchChunkModes.clear()}setChunkGeometry(t,e){this.updateLodGeometry(t,(e==null?void 0:e.lodGeometry)??null,e==null?void 0:e.lodBounds),this.updateKindGeometry("opaque",t,(e==null?void 0:e.opaqueGeometry)??null,e==null?void 0:e.opaqueBounds),this.updateKindGeometry("transparent",t,(e==null?void 0:e.transparentGeometry)??null,e==null?void 0:e.transparentBounds),this.updateKindGeometry("liquid",t,(e==null?void 0:e.liquidGeometry)??null,e==null?void 0:e.liquidBounds)}flush(){this.atlas&&(this.flushKind("opaque"),this.flushKind("transparent"),this.flushKind("liquid"),this.flushLodBatches())}update(t){for(const e of this.states.liquid.batches.values())"update"in e.material&&e.material.update(t)}setAmbientIntensity(t){this.ambientIntensity=t;for(const e of Object.values(this.states))for(const n of e.batches.values())n.material.setAmbientIntensity(t)}setAmbientColor(t){this.ambientColor.copy(t);for(const e of Object.values(this.states))for(const n of e.batches.values())n.material.setAmbientColor(this.ambientColor)}setFogProvider(t){if(this.fogProvider=t,this.atlas){const e=this.atlas;this.atlas=null,this.setAtlas(e)}}applyViewDistanceVisibility(t,e,n,i,r){for(const o of this.parentBatches.values())this.applyParentBatchVisibility(o,t,e,n,i,r)}collectPreOcclusionChunkModes(t,e,n,i,r){r.clear();for(const o of this.parentBatches.values())if(Np(o.bounds,t,n)!==-1&&Fp(o.bounds,i)!==-1)for(const a of this.getParentBatchChunkIds(o)){const l=this.getChunkVisibilityBounds(a);if(!l||kp(l,t,n)===-1||Op(l,i)===-1)continue;const c=fu(l,t);r.set(a,c>e&&o.lodChunkIds.has(a)?"lod":"normal")}return r}dispose(){this.clear(),this.atlas=null}updateKindGeometry(t,e,n,i){const r=this.states[t],o=this.getBatchId(t,e),a=r.batchChunkIds.get(o)??new Set,l=this.getParentBatchIdForChunk(e),c=r.batchChunkIds.has(o),h=r.chunkGeometries.has(e);n?(r.chunkGeometries.set(e,n),a.add(e),r.batchChunkIds.set(o,a),i?this.getChunkBoundsMap(t).set(e,i):this.getChunkBoundsMap(t).delete(e)):(r.chunkGeometries.delete(e),this.getChunkBoundsMap(t).delete(e),a.delete(e)&&a.size===0&&r.batchChunkIds.delete(o));const u=r.batchChunkIds.has(o);if(t==="lod"?n&&i?this.registerLodChunk(l,e):h&&this.unregisterLodChunk(l,e):!c&&u?this.registerNormalBatch(o,t):c&&!u?this.unregisterNormalBatch(o,t):u&&this.markParentBatchChunkIdsDirty(l),h!==!!n){r.dirtyBatchIds.add(o),r.dirtyChunkIdsByBatch.delete(o);return}const f=r.dirtyChunkIdsByBatch.get(o)??new Set;f.add(e),r.dirtyChunkIdsByBatch.set(o,f),r.dirtyBatchIds.add(o)}updateLodGeometry(t,e,n){const i=this.states.lod,r=this.getParentBatchIdForChunk(t),o=i.chunkGeometries.has(t);e&&n?(i.chunkGeometries.set(t,e),this.chunkLodBounds.set(t,n),this.registerLodChunk(r,t)):(i.chunkGeometries.delete(t),this.chunkLodBounds.delete(t),o&&this.unregisterLodChunk(r,t)),this.states.lod.dirtyBatchIds.add(r)}flushKind(t){const e=this.states[t],n=[...e.dirtyBatchIds];e.dirtyBatchIds.clear();for(const i of n){const r=e.dirtyChunkIdsByBatch.get(i);(!r||r.size===0||!this.updateBatchChunks(t,i,r))&&this.rebuildBatch(t,i),e.dirtyChunkIdsByBatch.delete(i)}}flushLodBatches(){const t=[...this.states.lod.dirtyBatchIds];this.states.lod.dirtyBatchIds.clear();for(const e of t)this.rebuildLodBatch(e)}updateBatchChunks(t,e,n){const i=this.states[t],r=i.batches.get(e),o=i.batchMetadata.get(e);if(!r||!o)return!1;for(const a of n){const l=i.chunkGeometries.get(a),c=o.allocations.get(a);if(!l||!c)return!1;const h=l.positions.length/3,u=l.indices.length;if(h>c.vertexCapacity||u>c.indexCapacity)return!1;this.writeChunkGeometryIntoMergedGeometry(t,r.geometry,c,l),c.vertexCount=h,c.indexCount=u}return HT(r.geometry,o.allocations),Vc(r.geometry,t,o.chunkIds,this.getChunkBoundsMap(t),e),hn(r),!0}rebuildBatch(t,e){var At,te;const n=this.states[t],i=n.batches.get(e)??null,r=n.batchMetadata.get(e)??null,o=n.batchChunkIds.get(e);if(!o||o.size===0||!this.atlas){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(e)),n.batchMetadata.delete(e);return}const a=[...o].sort(Up);let l=0,c=0,h=0,u=0,d=0,f=0,p=0,_=0,m=0,g=0;for(const kt of a){const $=n.chunkGeometries.get(kt);if(!$)continue;const Q=r==null?void 0:r.allocations.get(kt),st=$.positions.length/3,Lt=$a(st,(Q==null?void 0:Q.vertexCapacity)??0),Ct=zc($.indices.length,(Q==null?void 0:Q.indexCapacity)??0);l+=$.positions.length,c+=$.normals.length,h+=$.uvs.length,u+=$.colors.length,d+=Lt,f+=$.lightLevels.length,p+=((At=$.foamLevels)==null?void 0:At.length)??0,_+=((te=$.foamLevelsDiag)==null?void 0:te.length)??0,m+=Lt,g+=Ct}if(g===0){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(e)),n.batchMetadata.delete(e);return}const x=Math.max($a(m,(r==null?void 0:r.vertexCapacity)??0),1),b=Math.max(zc(g,(r==null?void 0:r.indexCapacity)??0),1),v=new Map,A=new Float32Array(x*3),T=new Float32Array(x*3),E=new Float32Array(x*2),y=new Float32Array(x*3),S=new Float32Array(x),B=new Float32Array(x),R=t==="liquid"?new Float32Array(x*4):null,O=t==="liquid"?new Float32Array(x*4):null,z=new Uint32Array(b);let P=0,U=0;for(let kt=0;kt<a.length;kt++){const $=a[kt],Q=n.chunkGeometries.get($);if(!Q)continue;const st=Q.positions.length/3,Lt=r==null?void 0:r.allocations.get($),Ct=$a(st,(Lt==null?void 0:Lt.vertexCapacity)??0),Bt=zc(Q.indices.length,(Lt==null?void 0:Lt.indexCapacity)??0),xe={chunkIndex:kt,indexCapacity:Bt,indexCount:Q.indices.length,indexOffset:P,vertexCapacity:Ct,vertexCount:st,vertexOffset:U};v.set($,xe),A.set(Q.positions,U*3),T.set(Q.normals,U*3),E.set(Q.uvs,U*2),y.set(Q.colors,U*3),S.fill(kt,U,U+Ct),B.set(Q.lightLevels,U),R&&Q.foamLevels&&R.set(Q.foamLevels,U*4),O&&Q.foamLevelsDiag&&O.set(Q.foamLevelsDiag,U*4);for(let Ft=0;Ft<Q.indices.length;Ft++)z[P+Ft]=Q.indices[Ft]+U;for(let Ft=Q.indices.length;Ft<Bt;Ft++)z[P+Ft]=U;P+=Bt,U+=Ct}const V=i??this.createBatchMesh(t),N=V.geometry;this.applyMergedGeometry(N,{positions:A,normals:T,uvs:E,colors:y,chunkIndices:S,lightLevels:B,foamLevels:R,foamLevelsDiag:O,indices:z},{positionCount:l,normalCount:c,uvCount:h,colorCount:u,chunkIndexCount:d,lightLevelCount:f,foamLevelCount:p,foamLevelDiagCount:_,indexCount:pu(v)}),N.setDrawRange(0,pu(v)),Vc(N,t,a,this.getChunkBoundsMap(t),e),hn(V);const q=(r==null?void 0:r.chunkVisibilityBits)??new Uint32Array(Ui(ru)*4),j=(r==null?void 0:r.chunkVisibilityScratchBits)??new Uint32Array(Ui(ru)*4),it=(r==null?void 0:r.chunkVisibilityMode)??ms;let at=(r==null?void 0:r.chunkVisibilityRevision)??0,dt=!r||r.chunkIds.length!==a.length;dt&&(q.fill(0),j.fill(0),at++),V.material.setAmbientColor(this.ambientColor),V.material.setAmbientIntensity(this.ambientIntensity),n.batches.set(e,V),n.batchMetadata.set(e,{allocations:v,chunkIds:a,chunkVisibilityBits:q,chunkVisibilityMode:it,chunkVisibilityRevision:at,chunkVisibilityScratchBits:j,visibilityDirty:dt,indexCapacity:b,vertexCapacity:x}),V.material.bindChunkVisibility(q,it,at,a.length),i||this.parent.add(V)}createBatchMesh(t){const e=new Le,n=uu(t,this.atlas.texture,this.fogProvider??void 0);n.setAmbientColor(this.ambientColor),n.setAmbientIntensity(this.ambientIntensity);const i=new Me(e,n);return i.frustumCulled=!1,i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.renderOrder=t==="lod"?-1:t==="opaque"?0:t==="transparent"?1:2,i.updateMatrix(),hn(i),i}rebuildLodBatch(t){const e=this.parentBatches.get(t);if(!e||!this.atlas)return;const n=e.lodBuildChunkIds;n.length=0;for(const g of e.lodChunkIds)this.states.lod.chunkGeometries.has(g)&&this.chunkLodBounds.has(g)&&n.push(g);if(n.sort(Up),n.length===0){this.disposeLodBatch(e),this.cleanupParentBatch(t,e);return}let i=0,r=0;for(const g of n){const x=this.states.lod.chunkGeometries.get(g);i+=x.positions.length/3,r+=x.indices.length}const o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i*3),c=new Float32Array(i),h=new Uint32Array(r);let u=0,d=0;for(let g=0;g<n.length;g++){const x=n[g],b=this.states.lod.chunkGeometries.get(x),v=b.positions.length/3;o.set(b.positions,u*3),a.set(b.normals,u*3),l.set(b.colors,u*3),c.fill(g,u,u+v);for(let A=0;A<b.indices.length;A++)h[d+A]=b.indices[A]+u;u+=v,d+=b.indices.length}const f=new Le;f.setAttribute("position",new Vt(o,3)),f.setAttribute("normal",new Vt(a,3)),f.setAttribute("color",new Vt(l,3)),f.setAttribute("chunkIndex",new Vt(c,1)),f.setIndex(new Vt(h,1)),Vc(f,"lod",n,this.chunkLodBounds,t);const p=e.lodBatch;if(p){p.geometry.dispose(),p.geometry=f,p.mesh.geometry=f,p.chunkIds=[...n],p.chunkVisibilityBits=new Uint32Array(Ui(n.length)*4),p.chunkVisibilityScratchBits=new Uint32Array(Ui(n.length)*4),p.chunkVisibilityMode=ms,p.chunkVisibilityRevision++,p.visibilityDirty=!0,p.mesh.material.setAmbientColor(this.ambientColor),p.mesh.material.setAmbientIntensity(this.ambientIntensity),hn(p.mesh);return}const _=uu("lod",this.atlas.texture,this.fogProvider??void 0);_.setAmbientColor(this.ambientColor),_.setAmbientIntensity(this.ambientIntensity);const m=new Me(f,_);m.frustumCulled=!1,m.matrixAutoUpdate=!1,m.matrixWorldAutoUpdate=!1,m.renderOrder=-1,m.updateMatrix(),hn(m),this.parent.add(m),e.lodBatch={chunkIds:[...n],geometry:f,mesh:m,chunkVisibilityBits:new Uint32Array(Ui(n.length)*4),chunkVisibilityMode:ms,chunkVisibilityRevision:0,chunkVisibilityScratchBits:new Uint32Array(Ui(n.length)*4),visibilityDirty:!0}}disposeLodBatch(t){const e=t.lodBatch;e&&(this.parent.remove(e.mesh),e.geometry.dispose(),e.mesh.material.dispose(),t.lodBatch=void 0)}applyMergedGeometry(t,e,n){Di(t,"position",e.positions,3,n.positionCount/3),Di(t,"normal",e.normals,3,n.normalCount/3),Di(t,"uv",e.uvs,2,n.uvCount/2),Di(t,"color",e.colors,3,n.colorCount/3),Di(t,"chunkIndex",e.chunkIndices,1,n.chunkIndexCount),Di(t,"lightLevel",e.lightLevels,1,n.lightLevelCount),e.foamLevels?Di(t,"foamLevel",e.foamLevels,4,n.foamLevelCount/4):t.deleteAttribute("foamLevel"),e.foamLevelsDiag?Di(t,"foamLevelDiag",e.foamLevelsDiag,4,n.foamLevelDiagCount/4):t.deleteAttribute("foamLevelDiag"),OT(t,e.indices,n.indexCount)}writeChunkGeometryIntoMergedGeometry(t,e,n,i){ls(e,"position",i.positions,n.vertexOffset*3,n.vertexCapacity*3),ls(e,"normal",i.normals,n.vertexOffset*3,n.vertexCapacity*3),ls(e,"uv",i.uvs,n.vertexOffset*2,n.vertexCapacity*2),ls(e,"color",i.colors,n.vertexOffset*3,n.vertexCapacity*3),zT(e,"chunkIndex",n.chunkIndex,n.vertexOffset,n.vertexCapacity),ls(e,"lightLevel",i.lightLevels,n.vertexOffset,n.vertexCapacity),t==="liquid"&&(ls(e,"foamLevel",i.foamLevels??Dp,n.vertexOffset*4,n.vertexCapacity*4),ls(e,"foamLevelDiag",i.foamLevelsDiag??Dp,n.vertexOffset*4,n.vertexCapacity*4)),VT(e,i.indices,n.indexOffset,n.indexCapacity,n.vertexOffset)}getBatchId(t,e){const n=$t.chunkIdToOriginCoordinate(e),i=du(t),r={x:i.x*ht,y:i.y*ht,z:i.z*ht};return[Math.floor(n.x/r.x)*r.x,Math.floor(n.y/r.y)*r.y,Math.floor(n.z/r.z)*r.z].join(",")}getParentBatchIdForChunk(t){const e=$t.chunkIdToOriginCoordinate(t);return[Math.floor(e.x/(Oe.x*ht))*Oe.x*ht,Math.floor(e.y/(Oe.y*ht))*Oe.y*ht,Math.floor(e.z/(Oe.z*ht))*Oe.z*ht].join(",")}getChunkBoundsMap(t){switch(t){case"liquid":return this.chunkLiquidBounds;case"lod":return this.chunkLodBounds;case"opaque":return this.chunkOpaqueBounds;case"transparent":return this.chunkTransparentBounds}}getChunkVisibilityBounds(t){return this.chunkOpaqueBounds.get(t)??this.chunkTransparentBounds.get(t)??this.chunkLiquidBounds.get(t)??this.chunkLodBounds.get(t)}markParentBatchChunkIdsDirty(t){const e=this.parentBatches.get(t);e&&(e.allChunkIdsDirty=!0)}registerNormalBatch(t,e){const n=this.ensureParentBatch(this.getParentBatchIdForBatch(t));switch(n.allChunkIdsDirty=!0,e){case"opaque":n.opaqueBatchIds.add(t);break;case"transparent":n.transparentBatchIds.add(t);break;case"liquid":n.liquidBatchIds.add(t);break}}unregisterNormalBatch(t,e){const n=this.getParentBatchIdForBatch(t),i=this.parentBatches.get(n);if(i){switch(i.allChunkIdsDirty=!0,e){case"opaque":i.opaqueBatchIds.delete(t);break;case"transparent":i.transparentBatchIds.delete(t);break;case"liquid":i.liquidBatchIds.delete(t);break}this.cleanupParentBatch(n,i)}}registerLodChunk(t,e){const n=this.ensureParentBatch(t);n.lodChunkIds.add(e),n.allChunkIdsDirty=!0}unregisterLodChunk(t,e){const n=this.parentBatches.get(t);n&&(n.lodChunkIds.delete(e),n.allChunkIdsDirty=!0,this.cleanupParentBatch(t,n))}getParentBatchIdForBatch(t){const[e,n,i]=t.split(",").map(Number);return[Math.floor(e/(Oe.x*ht))*Oe.x*ht,Math.floor(n/(Oe.y*ht))*Oe.y*ht,Math.floor(i/(Oe.z*ht))*Oe.z*ht].join(",")}ensureParentBatch(t){const e=this.parentBatches.get(t);if(e)return e;const[n,i,r]=t.split(",").map(Number),o={allChunkIds:[],allChunkIdsDirty:!0,bounds:new Ve(new L(n,i,r),new L(n+Oe.x*ht,i+Oe.y*ht,r+Oe.z*ht)),chunkModes:new Map,key:t,liquidBatchIds:new Set,lodBuildChunkIds:[],lodChunkIds:new Set,opaqueBatchIds:new Set,transparentBatchIds:new Set,visibilityState:"hidden"};return this.parentBatches.set(t,o),o}cleanupParentBatch(t,e){const n=e.opaqueBatchIds.size>0||e.transparentBatchIds.size>0||e.liquidBatchIds.size>0,i=e.lodChunkIds.size>0,r=e.lodBatch!==void 0;n||i||r||this.parentBatches.delete(t)}applyParentBatchVisibility(t,e,n,i,r,o){var h;if(Np(t.bounds,e,i)===-1){this.syncParentBatchVisibility(t,"hidden");return}if(Fp(t.bounds,r)===-1){this.syncParentBatchVisibility(t,"hidden");return}const a=this.classifyParentChunkVisibility(t,e,n,i,r,o);this.applyBatchSetVisibility(this.states.opaque,t.opaqueBatchIds,a,"normal"),this.applyBatchSetVisibility(this.states.transparent,t.transparentBatchIds,a,"normal"),this.applyBatchSetVisibility(this.states.liquid,t.liquidBatchIds,a,"normal"),this.applyLodBatchVisibility(t,a);const l=this.hasVisibleBatchSet(this.states.opaque,t.opaqueBatchIds)||this.hasVisibleBatchSet(this.states.transparent,t.transparentBatchIds)||this.hasVisibleBatchSet(this.states.liquid,t.liquidBatchIds),c=!!((h=t.lodBatch)!=null&&h.mesh.visible);l&&c?this.syncParentBatchVisibility(t,"mixed"):l?this.syncParentBatchVisibility(t,"normal"):c?this.syncParentBatchVisibility(t,"lod"):this.syncParentBatchVisibility(t,"hidden")}classifyParentChunkVisibility(t,e,n,i,r,o){const a=t.chunkModes;a.clear();for(const l of this.getParentBatchChunkIds(t)){const c=o==null?void 0:o.get(l);if(c){a.set(l,c);continue}const h=this.getChunkVisibilityBounds(l);if(!h){a.set(l,"hidden");continue}if(kp(h,e,i)===-1){a.set(l,"hidden");continue}if(Op(h,r)===-1){a.set(l,"hidden");continue}fu(h,e)>n&&t.lodChunkIds.has(l)?a.set(l,"lod"):a.set(l,"normal")}return a}getParentBatchChunkIds(t){if(!t.allChunkIdsDirty)return t.allChunkIds;const e=this.scratchChunkIds;e.clear();for(const n of t.lodChunkIds)e.add(n);this.collectParentBatchChunkIds(this.states.opaque,t.opaqueBatchIds,e),this.collectParentBatchChunkIds(this.states.transparent,t.transparentBatchIds,e),this.collectParentBatchChunkIds(this.states.liquid,t.liquidBatchIds,e),t.allChunkIds.length=0;for(const n of e)t.allChunkIds.push(n);return t.allChunkIdsDirty=!1,t.allChunkIds}collectParentBatchChunkIds(t,e,n){for(const i of e){const r=t.batchMetadata.get(i);if(r)for(const o of r.chunkIds)n.add(o)}}applyBatchSetVisibility(t,e,n,i){for(const r of e){const o=t.batches.get(r),a=t.batchMetadata.get(r);if(!o||!a)continue;const l=this.applyBatchChunkVisibility(a,o,n,i);this.setMeshScenePresence(o,l)}}applyBatchChunkVisibility(t,e,n,i){t.chunkVisibilityScratchBits.fill(0);let r=0;for(let c=0;c<t.chunkIds.length;c++){const h=t.chunkIds[c];if(n.get(h)===i){const d=c>>5;t.chunkVisibilityScratchBits[d]|=1<<(c&31),r++}}const o=!zp(t.chunkVisibilityBits,t.chunkVisibilityScratchBits);o&&t.chunkVisibilityBits.set(t.chunkVisibilityScratchBits);const a=r===t.chunkIds.length?ms:Cp,l=t.chunkVisibilityMode!==a;return l&&(t.chunkVisibilityMode=a),(t.visibilityDirty||o||l)&&(t.chunkVisibilityRevision++,e.material.bindChunkVisibility(t.chunkVisibilityBits,t.chunkVisibilityMode,t.chunkVisibilityRevision,t.chunkIds.length),t.visibilityDirty=!1),r>0}applyLodBatchVisibility(t,e){const n=t.lodBatch;if(!n)return;n.chunkVisibilityScratchBits.fill(0);let i=0;for(let l=0;l<n.chunkIds.length;l++){const c=n.chunkIds[l];if(e.get(c)!=="lod")continue;const h=l>>5;n.chunkVisibilityScratchBits[h]|=1<<(l&31),i++}const r=!zp(n.chunkVisibilityBits,n.chunkVisibilityScratchBits);r&&n.chunkVisibilityBits.set(n.chunkVisibilityScratchBits);const o=i===n.chunkIds.length?ms:Cp,a=n.chunkVisibilityMode!==o;a&&(n.chunkVisibilityMode=o),(n.visibilityDirty||r||a)&&(n.chunkVisibilityRevision++,n.mesh.material.bindChunkVisibility(n.chunkVisibilityBits,n.chunkVisibilityMode,n.chunkVisibilityRevision,n.chunkIds.length),n.visibilityDirty=!1),this.setMeshScenePresence(n.mesh,i>0)}syncParentBatchVisibility(t,e){if(e==="hidden"){for(const n of t.opaqueBatchIds){const i=this.states.opaque.batches.get(n);i&&this.setMeshScenePresence(i,!1)}for(const n of t.transparentBatchIds){const i=this.states.transparent.batches.get(n);i&&this.setMeshScenePresence(i,!1)}for(const n of t.liquidBatchIds){const i=this.states.liquid.batches.get(n);i&&this.setMeshScenePresence(i,!1)}t.lodBatch&&this.setMeshScenePresence(t.lodBatch.mesh,!1)}t.visibilityState=e}setMeshScenePresence(t,e){const n=t.parent!==null;e&&!n?this.parent.add(t):!e&&n&&this.parent.remove(t),t.visible=e}hasVisibleBatchSet(t,e){for(const n of e){const i=t.batches.get(n);if(i!=null&&i.visible)return!0}return!1}disposeBatchMeshes(){for(const t of[this.states.opaque,this.states.transparent,this.states.liquid]){for(const e of t.batches.values())this.parent.remove(e),e.geometry.dispose(),e.material.dispose();t.batches.clear(),t.batchMetadata.clear(),t.dirtyChunkIdsByBatch.clear()}for(const t of this.parentBatches.values())this.disposeLodBatch(t);this.states.lod.batchMetadata.clear(),this.states.lod.batchChunkIds.clear(),this.states.lod.dirtyChunkIdsByBatch.clear()}}function Ra(){return{batchChunkIds:new Map,batches:new Map,batchMetadata:new Map,chunkGeometries:new Map,dirtyBatchIds:new Set,dirtyChunkIdsByBatch:new Map}}function du(s){switch(s){case"liquid":return DT;case"lod":return Oe;case"opaque":return Oe;case"transparent":return UT}}function Up(s,t){const e=$t.chunkIdToOriginCoordinate(s),n=$t.chunkIdToOriginCoordinate(t);return e.y!==n.y?e.y-n.y:e.z!==n.z?e.z-n.z:e.x-n.x}function FT(s,t){const e=Math.max(s.min.x,Math.min(t.x,s.max.x)),n=Math.max(s.min.z,Math.min(t.y,s.max.z)),i=t.x-e,r=t.y-n;return i*i+r*r}function fu(s,t){const e=Math.max(s.min[0],Math.min(t.x,s.max[0])),n=Math.max(s.min[2],Math.min(t.y,s.max[2])),i=t.x-e,r=t.y-n;return i*i+r*r}function Np(s,t,e){if(FT(s,t)>e)return-1;const n=Math.abs(t.x-s.min.x)>Math.abs(t.x-s.max.x)?s.min.x:s.max.x,i=Math.abs(t.y-s.min.z)>Math.abs(t.y-s.max.z)?s.min.z:s.max.z,r=t.x-n,o=t.y-i;return r*r+o*o<=e?1:0}function kp(s,t,e){if(fu(s,t)>e)return-1;const n=Math.abs(t.x-s.min[0])>Math.abs(t.x-s.max[0])?s.min[0]:s.max[0],i=Math.abs(t.y-s.min[2])>Math.abs(t.y-s.max[2])?s.min[2]:s.max[2],r=t.x-n,o=t.y-i;return r*r+o*o<=e?1:0}function Fp(s,t){let e=!0;for(const n of t.planes){const i=go.set(n.normal.x>=0?s.max.x:s.min.x,n.normal.y>=0?s.max.y:s.min.y,n.normal.z>=0?s.max.z:s.min.z);if(n.distanceToPoint(i)<0)return-1;const r=jg.set(n.normal.x>=0?s.min.x:s.max.x,n.normal.y>=0?s.min.y:s.max.y,n.normal.z>=0?s.min.z:s.max.z);n.distanceToPoint(r)<0&&(e=!1)}return e?1:0}function Op(s,t){let e=!0;for(const n of t.planes){const i=go.set(n.normal.x>=0?s.max[0]:s.min[0],n.normal.y>=0?s.max[1]:s.min[1],n.normal.z>=0?s.max[2]:s.min[2]);if(n.distanceToPoint(i)<0)return-1;const r=jg.set(n.normal.x>=0?s.min[0]:s.max[0],n.normal.y>=0?s.min[1]:s.max[1],n.normal.z>=0?s.min[2]:s.max[2]);n.distanceToPoint(r)<0&&(e=!1)}return e?1:0}function $a(s,t){if(s<=t)return t;let e=Math.max(1,t);for(;e<s;)e*=NT;return e}function zc(s,t){const e=$a(s,t),n=e%3;return n===0?e:e+(3-n)}function pu(s){let t=0;for(const e of s.values())t=Math.max(t,e.indexOffset+e.indexCount);return t}function Di(s,t,e,n,i){const r=s.getAttribute(t);if(!(r instanceof Vt)||r.array.length!==e.length||r.itemSize!==n){s.setAttribute(t,new Vt(e,n));return}r.array.set(e),r.needsUpdate=!0}function OT(s,t,e){const n=s.getIndex();if(!(n instanceof Vt)||n.array.length!==t.length){s.setIndex(new Vt(t,1)),s.setDrawRange(0,e);return}n.array.set(t),n.needsUpdate=!0,s.setDrawRange(0,e)}function zp(s,t){if(s.length!==t.length)return!1;for(let e=0;e<s.length;e++)if(s[e]!==t[e])return!1;return!0}function ls(s,t,e,n,i){const r=s.getAttribute(t);if(!(r instanceof Vt)||!(r.array instanceof Float32Array))return;const o=r.array;o.fill(0,n,n+i),o.set(e,n),r.needsUpdate=!0}function zT(s,t,e,n,i){const r=s.getAttribute(t);!(r instanceof Vt)||!(r.array instanceof Float32Array)||(r.array.fill(e,n,n+i),r.needsUpdate=!0)}function VT(s,t,e,n,i){const r=s.getIndex();if(!(r instanceof Vt))return;const o=r.array;o.fill(i,e,e+n);for(let a=0;a<t.length;a++)o[e+a]=t[a]+i;r.needsUpdate=!0}function HT(s,t){s.setDrawRange(0,pu(t))}function Vc(s,t,e,n,i){if(e.length===0){const[l,c,h]=i.split(",").map(Number),u=du(t);s.boundingBox=new Ve(new L(l,c,h),new L(l+u.x*ht,c+u.y*ht,h+u.z*ht)),s.boundingSphere=s.boundingBox.getBoundingSphere(s.boundingSphere??new ke);return}let r=!1;const o=s.boundingBox??new Ve;for(const l of e){const c=n.get(l);if(c){if(!r){o.min.set(c.min[0],c.min[1],c.min[2]),o.max.set(c.max[0],c.max[1],c.max[2]),r=!0;continue}o.min.x=Math.min(o.min.x,c.min[0]),o.min.y=Math.min(o.min.y,c.min[1]),o.min.z=Math.min(o.min.z,c.min[2]),o.max.x=Math.max(o.max.x,c.max[0]),o.max.y=Math.max(o.max.y,c.max[1]),o.max.z=Math.max(o.max.z,c.max[2])}}if(!r){const[l,c,h]=i.split(",").map(Number),u=du(t);o.min.set(l,c,h),o.max.set(l+u.x*ht,c+u.y*ht,h+u.z*ht)}s.boundingBox=o;const a=s.boundingSphere??new ke;o.getCenter(go),a.center.copy(go),a.radius=go.distanceTo(o.max),s.boundingSphere=a}function Er({x:s,y:t,z:e}){return`${s},${t},${e}`}function Cl(s){const t=s.indexOf(","),e=s.indexOf(",",t+1);return{x:Number(s.slice(0,t)),y:Number(s.slice(t+1,e)),z:Number(s.slice(e+1))}}function Mi(s){return typeof s=="number"?s:s.i}function Jg(s){return typeof s=="number"?0:s.r??0}const GT=[0,.5,.7,.9],WT=[1,1,1,1];function XT(s){var a;const t=s.name.toLowerCase(),e=$T(s.trimeshVertices,s.trimeshIndices,s.customColliderOptions),n=e.vertices,i=e.indices,r=qT(s.textureUri),o=s.isMultiTexture?{left:`${r}/-x.png`,right:`${r}/+x.png`,top:`${r}/+y.png`,bottom:`${r}/-y.png`,front:`${r}/+z.png`,back:`${r}/-z.png`}:{left:r,right:r,top:r,bottom:r,front:r,back:r};return{...s,aoIntensity:GT,axisPassMask:((a=e.profile)==null?void 0:a.axisPassMask)??0,color:WT,isTranslucent:!!s.isLiquid||t.includes("glass")||t.includes("leaves")||t.includes("water")||t.includes("ice"),transparencyRatio:0,trimeshIndices:i,trimeshOcclusionProfile:e.profile,trimeshTriangleData:ZT(n,i),trimeshVertices:n,textureUris:o}}function qT(s){return s.startsWith("http://")||s.startsWith("https://")?s:`/voxcinder/world-editor/${s.startsWith("/")?s.slice(1):s}`}function $T(s,t,e){const n=Vp(s),i=Hp(t);if(n&&i)return{vertices:n,indices:i,profile:Gp(n,i)};if(!e||e.shape!=="trimesh")return{};const r=Vp(YT(e,"vertices")),o=Hp(KT(e,"indices"));return{vertices:r,indices:o,profile:r&&o?Gp(r,o):void 0}}function Vp(s){if(s)return s instanceof Float32Array?s.slice():new Float32Array(s)}function Hp(s){if(s)return s instanceof Uint32Array?s.slice():new Uint32Array(s)}function YT(s,t){const e=s[t];if(e instanceof Float32Array||Array.isArray(e))return e}function KT(s,t){const e=s[t];if(e instanceof Uint32Array||Array.isArray(e))return e}function ZT(s,t){if(!s||!t)return;const e=t.length/3,n=new Array(e);for(let i=0;i<e;i++){const r=t[i*3]*3,o=t[i*3+1]*3,a=t[i*3+2]*3,l=s[r],c=s[r+1],h=s[r+2],u=s[o],d=s[o+1],f=s[o+2],p=s[a],_=s[a+1],m=s[a+2],g=u-l,x=d-c,b=f-h,v=p-l,A=_-c,T=m-h,E=x*T-b*A,y=b*v-g*T,S=g*A-x*v,B=Math.sqrt(E*E+y*y+S*S)||1,R=Math.abs(E),O=Math.abs(y),z=Math.abs(S),P=O>=R&&O>=z,U=!P&&R>=z;n[i]={normalX:E/B,normalY:y/B,normalZ:S/B,v0x:l,v0y:c,v0z:h,v1x:u,v1y:d,v1z:f,v2x:p,v2y:_,v2z:m,v0u:P?l:U?h:l,v0v:P?h:c,v1u:P?u:U?f:u,v1v:P?f:d,v2u:P?p:U?m:p,v2v:P?m:_}}return n}function Gp(s,t){if(t.length===0)return{aoOpacity:1,axisPassMask:0,skyOpacityUp:1,skyOpacityX:1,skyOpacityZ:1};const e=4,n=new Uint8Array(e*e*e);for(let c=0;c<t.length;c+=3){const h=t[c]*3,u=t[c+1]*3,d=t[c+2]*3,f=Math.max(0,Math.min(1,Math.min(s[h],s[u],s[d]))),p=Math.max(0,Math.min(1,Math.min(s[h+1],s[u+1],s[d+1]))),_=Math.max(0,Math.min(1,Math.min(s[h+2],s[u+2],s[d+2]))),m=Math.max(0,Math.min(1,Math.max(s[h],s[u],s[d]))),g=Math.max(0,Math.min(1,Math.max(s[h+1],s[u+1],s[d+1]))),x=Math.max(0,Math.min(1,Math.max(s[h+2],s[u+2],s[d+2]))),b=Math.max(0,Math.min(e-1,Math.floor(f*e))),v=Math.max(0,Math.min(e-1,Math.floor(p*e))),A=Math.max(0,Math.min(e-1,Math.floor(_*e))),T=Math.max(b,Math.max(0,Math.min(e-1,Math.ceil(m*e)-1))),E=Math.max(v,Math.max(0,Math.min(e-1,Math.ceil(g*e)-1))),y=Math.max(A,Math.max(0,Math.min(e-1,Math.ceil(x*e)-1)));for(let S=A;S<=y;S++)for(let B=v;B<=E;B++)for(let R=b;R<=T;R++)n[R+e*(B+e*S)]=1}let i=0;for(let c=0;c<n.length;c++)i+=n[c];let r=0;for(let c=0;c<e;c++)for(let h=0;h<e;h++)for(let u=0;u<e;u++)if(n[h+e*(u+e*c)]!==0){r++;break}let o=0;for(let c=0;c<e;c++)for(let h=0;h<e;h++)for(let u=0;u<e;u++)if(n[u+e*(h+e*c)]!==0){o++;break}let a=0;for(let c=0;c<e;c++)for(let h=0;h<e;h++)for(let u=0;u<e;u++)if(n[h+e*(c+e*u)]!==0){a++;break}let l=0;return o<e*e&&(l|=ZE),r<e*e&&(l|=jE),a<e*e&&(l|=JE),{aoOpacity:i/(e*e*e),axisPassMask:l,skyOpacityUp:r/(e*e),skyOpacityX:o/(e*e),skyOpacityZ:a/(e*e)}}const jT=15,Xs=Math.ceil((jT+1)/ht);class Hc{constructor(){C(this,"_chunks",new Map);C(this,"_blockTypes",new Map);C(this,"_blockTypeList",[]);C(this,"_entities");C(this,"_lightSourcesCache",null)}load(t,e){var n;this._chunks.clear(),this._entities=t.entities?{...t.entities}:void 0,this._setBlockTypes((n=t.blockTypes)!=null&&n.length?t.blockTypes:e);for(const[i,r]of Object.entries(t.blocks??{})){const o=Mi(r);o!==0&&this.setBlock(Cl(i),o,Jg(r))}}toJson(){const t={};for(const e of this._chunks.values())e.forEachBlock((n,i,r)=>{const o={x:e.originCoordinate.x+n.x,y:e.originCoordinate.y+n.y,z:e.originCoordinate.z+n.z};t[Er(o)]=r===0?i:{i,r}});return{blockTypes:this._blockTypeList.map(e=>({id:e.id,name:e.name,textureUri:e.textureUri,isLiquid:e.isLiquid,lightLevel:e.lightLevel,...e.trimeshIndices?{trimeshIndices:Array.from(e.trimeshIndices)}:{},...e.trimeshVertices?{trimeshVertices:Array.from(e.trimeshVertices)}:{},durability:e.durability,customColliderOptions:e.customColliderOptions,isCustom:e.isCustom,isMultiTexture:e.isMultiTexture})),blocks:t,...this._entities?{entities:this._entities}:{}}}get blockTypes(){return this._blockTypeList}get chunkIds(){return[...this._chunks.keys()]}get entities(){return this._entities?{...this._entities}:{}}toSnapshot(){return{blockTypes:this._blockTypeList.map(Wp),chunks:this.chunkIds.map(t=>{const e=this._chunks.get(t);return{chunkId:t,originCoordinate:{...e.originCoordinate},blocks:e.cloneBlocks(),rotations:e.cloneRotations()}}),...this._entities?{entities:{...this._entities}}:{}}}loadSnapshot(t){this._chunks.clear(),this._blockTypes.clear(),this._blockTypeList=t.blockTypes.map(Wp);for(const e of this._blockTypeList)this._blockTypes.set(e.id,e);for(const e of t.chunks)this._chunks.set(e.chunkId,new $t(e.originCoordinate,e.blocks,e.rotations));this._entities=t.entities?{...t.entities}:void 0,this._lightSourcesCache=null}getChunkSnapshot(t){const e=this._chunks.get(t);return e?{chunkId:t,originCoordinate:{...e.originCoordinate},blocks:e.cloneBlocks(),rotations:e.cloneRotations()}:null}applyChunkSnapshot(t,e){if(!e){this._chunks.delete(t),this._lightSourcesCache=null;return}this._chunks.set(t,new $t({...e.originCoordinate},new Uint16Array(e.blocks),new Uint8Array(e.rotations))),this._lightSourcesCache=null}setEntities(t){this._entities=t?{...t}:void 0}setEntity(t,e){this._entities||(this._entities={}),this._entities[t]=e}deleteEntity(t){this._entities&&(delete this._entities[t],Object.keys(this._entities).length===0&&(this._entities=void 0))}getChunk(t){return this._chunks.get(t)}getBlockTypeById(t){return t===0?void 0:this._blockTypes.get(t)}getBlockType(t){const e=this.getBlockTypeId(t);return e===0?void 0:this._blockTypes.get(e)}getBlockTypeId(t){const e=this._chunks.get($t.globalCoordinateToChunkId(t));return e?e.getBlockType($t.globalCoordinateToLocalCoordinate(t)):0}getBlockRotation(t){const e=this._chunks.get($t.globalCoordinateToChunkId(t));return e?e.getBlockRotation($t.globalCoordinateToLocalCoordinate(t)):0}hasBlock(t){return this.getBlockTypeId(t)!==0}setBlock(t,e,n=0){const i=$t.globalCoordinateToChunkId(t),r=$t.globalCoordinateToLocalCoordinate(t);let o=this._chunks.get(i);o||(o=new $t($t.globalCoordinateToOriginCoordinate(t)),this._chunks.set(i,o)),o.setBlock(r,e),o.setBlockRotation(r,e===0?0:n),o.isEmpty()&&this._chunks.delete(i),this._lightSourcesCache=null}deleteBlock(t){this.setBlock(t,0)}getChunksNear(t,e){const n=$t.globalCoordinateToOriginCoordinate(t),i=[];for(let r=-e;r<=e;r++)for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){const l=this._chunks.get($t.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&i.push(l)}return i}getAllLightSources(){if(this._lightSourcesCache)return this._lightSourcesCache;const t=[];for(const e of this._chunks.values())e.forEachBlock((n,i)=>{const r=this._blockTypes.get(i);r!=null&&r.lightLevel&&t.push({position:{x:e.originCoordinate.x+n.x,y:e.originCoordinate.y+n.y,z:e.originCoordinate.z+n.z},level:r.lightLevel})});return this._lightSourcesCache=t,t}getLightSourcesNear(t,e){const n=$t.globalCoordinateToOriginCoordinate(t),i=[];for(let r=-e;r<=e;r++)for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){const l=this._chunks.get($t.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&l.forEachBlock((c,h)=>{const u=this._blockTypes.get(h);u!=null&&u.lightLevel&&i.push({position:{x:l.originCoordinate.x+c.x,y:l.originCoordinate.y+c.y,z:l.originCoordinate.z+c.z},level:u.lightLevel})})}return i}getAffectedChunkIds(t,e,n){const i=new Set,r=$t.globalCoordinateToChunkId(t),o=$t.globalCoordinateToLocalCoordinate(t),a=e===0?void 0:this._blockTypes.get(e),l=n===0?void 0:this._blockTypes.get(n);if(i.add(r),(a==null?void 0:a.lightLevel)!==(l==null?void 0:l.lightLevel)){const d=Math.max((a==null?void 0:a.lightLevel)??0,(l==null?void 0:l.lightLevel)??0),f=Math.min(d,ht);for(let p=-Xs;p<=Xs;p++)for(let _=-Xs;_<=Xs;_++)for(let m=-Xs;m<=Xs;m++){const g=$t.globalCoordinateToChunkId({x:t.x+p*f,y:t.y+_*f,z:t.z+m*f});this._chunks.has(g)&&i.add(g)}}const c=[0],h=[0],u=[0];o.x===0?c.push(-1):o.x===ve&&c.push(1),o.y===0?h.push(-1):o.y===ve&&h.push(1),o.z===0?u.push(-1):o.z===ve&&u.push(1);for(const d of c)for(const f of h)for(const p of u){if(d===0&&f===0&&p===0)continue;const _=$t.globalCoordinateToChunkId({x:t.x+d,y:t.y+f,z:t.z+p});this._chunks.has(_)&&i.add(_)}return[...i]}_setBlockTypes(t){this._blockTypes.clear(),this._blockTypeList=t.map(XT);for(const e of this._blockTypeList)this._blockTypes.set(e.id,e)}}function Wp(s){const t=s.trimeshIndices?new Uint32Array(s.trimeshIndices):void 0,e=s.trimeshVertices?new Float32Array(s.trimeshVertices):void 0;return{id:s.id,name:s.name,textureUri:s.textureUri,isLiquid:s.isLiquid,lightLevel:s.lightLevel,durability:s.durability,customColliderOptions:s.customColliderOptions,isCustom:s.isCustom,isMultiTexture:s.isMultiTexture,textureUris:{...s.textureUris},aoIntensity:[...s.aoIntensity],axisPassMask:s.axisPassMask,color:[...s.color],isTranslucent:s.isTranslucent,transparencyRatio:s.transparencyRatio,...s.trimeshOcclusionProfile?{trimeshOcclusionProfile:{...s.trimeshOcclusionProfile}}:{},...t?{trimeshIndices:t}:{},...s.trimeshTriangleData?{trimeshTriangleData:s.trimeshTriangleData.map(n=>({...n}))}:{},...e?{trimeshVertices:e}:{}}}const mu="worldEditorColorMap",gu="worldEditorUseColorMap",_u="worldEditorAlphaMap",yu="worldEditorUseAlphaMap",Ya="worldEditorAlphaTest",xu="worldEditorEmissive",vu="worldEditorEmissiveIntensity",Mu="worldEditorEmissiveMap",Su="worldEditorUseEmissiveMap",bu="worldEditorFogColor",Eu="worldEditorFogEnabled",Tu="worldEditorFogNear",wu="worldEditorFogFar",_o="vWorldEditorColorMapUv",ul="vWorldEditorEmissiveMapUv",dl="vWorldEditorWorldPos",_d=me.basic,JT=new Wt,QT=_d.vertexShader.replace("#include <uv_pars_vertex>",`
      #include <uv_pars_vertex>
      varying vec2 ${_o};
      varying vec2 ${ul};
      varying vec3 ${dl};
    `).replace("#include <uv_vertex>",`
      #include <uv_vertex>
      ${_o} = uv;
      ${ul} = uv;
    `).replace("#include <project_vertex>",`
      vec4 worldEditorWorldPosition = vec4(transformed, 1.0);
      #ifdef USE_BATCHING
        worldEditorWorldPosition = batchingMatrix * worldEditorWorldPosition;
      #endif
      #ifdef USE_INSTANCING
        worldEditorWorldPosition = instanceMatrix * worldEditorWorldPosition;
      #endif
      worldEditorWorldPosition = modelMatrix * worldEditorWorldPosition;
      ${dl} = worldEditorWorldPosition.xyz;
      #include <project_vertex>
    `),tw=_d.fragmentShader.replace("#include <map_pars_fragment>",`
      uniform sampler2D ${mu};
      uniform bool ${gu};
      uniform sampler2D ${_u};
      uniform bool ${yu};
      uniform float ${Ya};
      uniform vec3 ${xu};
      uniform float ${vu};
      uniform sampler2D ${Mu};
      uniform bool ${Su};
      varying vec2 ${_o};
      varying vec2 ${ul};
      varying vec3 ${dl};
      uniform vec3 ${bu};
      uniform bool ${Eu};
      uniform float ${Tu};
      uniform float ${wu};

      vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
        if (!${Eu}) {
          return color;
        }

        float fogFactor = smoothstep(${Tu}, ${wu}, length(worldPos.xz - cameraPosition.xz));
        return mix(color, ${bu}, fogFactor);
      }
    `).replace("#include <alphamap_pars_fragment>","").replace("#include <alphatest_pars_fragment>","").replace("#include <map_fragment>",`
      if (${gu}) {
        vec4 sampledDiffuseColor = texture2D(${mu}, ${_o});
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
      if (${yu}) {
        diffuseColor.a *= texture2D(${_u}, ${_o}).g;
      }
    `).replace("#include <alphatest_fragment>",`
      if (${Ya} > 0.0 && diffuseColor.a < ${Ya}) {
        discard;
      }
    `).replace("#include <opaque_fragment>",`
      vec3 emissiveColor = ${xu} * ${vu};
      if (${Su}) {
        emissiveColor *= texture2D(${Mu}, ${ul}).rgb;
      }
      outgoingLight += emissiveColor;
      #include <opaque_fragment>
    `).replace("#include <fog_fragment>",`
      gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, ${dl});
    `);class ew extends He{constructor(e){const{alphaMap:n,alphaTest:i,color:r,emissive:o,emissiveIntensity:a,emissiveMap:l,fogUniformProvider:c,map:h,...u}=e||{};super({...u,uniforms:Qn.clone(_d.uniforms),vertexShader:QT,fragmentShader:tw,fog:!1,lights:!1,clipping:!0,toneMapped:!0});C(this,"_color");C(this,"_emissive");C(this,"_uvScrollSpeed",JT);C(this,"_colorMap");C(this,"_alphaMap");C(this,"_alphaTestValue");C(this,"_emissiveMap");C(this,"_emissiveIntensityValue");C(this,"_fogUniformProvider");C(this,"_shaderProcessors",[]);this.defines={...this.defines||{},USE_UV:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0]},this._color=new ut(r??16777215),this._colorMap=h??null,this._alphaMap=n??null,this._alphaTestValue=i??0,this._emissive=new ut(o??0),this._emissiveMap=l??null,this._emissiveIntensityValue=a??1,this._fogUniformProvider=c??null,this.bindUniforms()}get color(){return this._color}get customEmissive(){return this._emissive}get customEmissiveIntensity(){return this._emissiveIntensityValue}addShaderProcessor(e,n=!1){n?this._shaderProcessors.push(e):this._shaderProcessors.unshift(e),this.needsUpdate=!0}onBeforeCompile(e,n){for(const i of this._shaderProcessors)i(e,n)}customProgramCacheKey(){return`${super.customProgramCacheKey()}|processors=${this._shaderProcessors.map(e=>e.toString()).join("|")}`}bindUniforms(){const e=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return e.opacity}},this.uniforms[mu]={get value(){return e._colorMap}},this.uniforms[gu]={get value(){return e._colorMap!==null}},this.uniforms[_u]={get value(){return e._alphaMap}},this.uniforms[yu]={get value(){return e._alphaMap!==null}},this.uniforms[Ya]={get value(){return e._alphaTestValue}},this.uniforms[xu]={value:this._emissive},this.uniforms[vu]={get value(){return e._emissiveIntensityValue}},this.uniforms[Mu]={get value(){return e._emissiveMap}},this.uniforms[Su]={get value(){return e._emissiveMap!==null}},this.uniforms[bu]={get value(){var n;return((n=e._fogUniformProvider)==null?void 0:n.color())??e.color}},this.uniforms[Eu]={get value(){var n;return((n=e._fogUniformProvider)==null?void 0:n.enabled())??!1}},this.uniforms[Tu]={get value(){var n;return((n=e._fogUniformProvider)==null?void 0:n.near())??0}},this.uniforms[wu]={get value(){var n;return((n=e._fogUniformProvider)==null?void 0:n.far())??0}},this.uniforms.uvScroll={value:this._uvScrollSpeed}}}function ce(s,t,e){const n=e*2+1;return(t+e)*n+(s+e)}function _s(s){return Math.max(0,Math.min(1,s))}function yd(s,t,e,n){const i=s[ce(t,e,n)];let r=0;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)o===0&&a===0||Math.abs(t+o)>n||Math.abs(e+a)>n||(r=Math.max(r,Math.abs(i-s[ce(t+o,e+a,n)])));return r}function fl(s,t,e,n,i=0){let r={x:0,z:0},o=-1/0;for(let a=-s+t;a<=s-t;a++)for(let l=-s+t;l<=s-t;l++){if(n&&Math.hypot(a-n.x,l-n.z)<i)continue;const c=e(a,l);c>o&&(o=c,r={x:a,z:l})}return r}function Au(s,t,e,n){let i=0,r=0;for(let o=t.x-e;o<=t.x+e;o++)for(let a=t.z-e;a<=t.z+e;a++)Math.abs(o)>n||Math.abs(a)>n||(i+=s[ce(o,a,n)],r+=1);return r>0?i/r:0}function Qg(s,t,e,n,i){const r=s*2+1,o=new Int16Array(r*r),a=new Float32Array(r*r);for(let c=-s;c<=s;c++)for(let h=-s;h<=s;h++){const u=Math.hypot(c,h)/Math.max(1,s),d=Math.abs(i(t+101,Math.floor(c*.4),Math.floor(h*.4))-.5)*3.2,f=i(t+211,c,h)*1.8,p=Math.round(e+d+f-Math.max(0,u-.72)*5.5);o[ce(c,h,s)]=p}for(let c=-s;c<=s;c++)for(let h=-s;h<=s;h++){const u=ce(c,h,s),d=yd(o,c,h,s);a[u]=o[u]*.18+Math.max(0,1-d/5)*2.6-nw(c,h,s)*1.4}const l=fl(s,Math.max(4,Math.floor(s*.28)),(c,h)=>a[ce(c,h,s)]);return{height:o,suitability:a,center:l}}function nw(s,t,e){return Math.max(0,Math.hypot(s,t)/Math.max(1,e)-.35)}function Xp(s,t,e){const n=[];t&&n.push(0);const i=-s+3,r=s-3,o=Math.max(4,Math.round(s/6));let a=i;for(;a<=r;){const l=Math.min(r,a+8);let c=a,h=1/0;for(let u=a;u<=l;u++){if(n.some(p=>Math.abs(p-u)<6))continue;const d=t?Math.abs(u)*.03:Math.abs(u)*.02,f=e(u)+d;f<h&&(h=f,c=u)}n.push(c),a=c+Math.max(6,Math.round((r-i)/o))}return n.push(i),n.push(r),[...new Set(n)].sort((l,c)=>l-c)}function qp(s,t,e,n){let i=0;for(let r=-t;r<=t;r++)i+=s[ce(n?e:r,n?r:e,t)];return i}function iw(s,t,e,n){const i=`${s.x},${s.z}`,r=`${t.x},${t.z}`,o=[s],a=new Map,l=new Map([[i,0]]);for(;o.length>0;){o.sort((f,p)=>{const _=`${f.x},${f.z}`,m=`${p.x},${p.z}`,g=(l.get(_)??1/0)+Math.abs(f.x-t.x)+Math.abs(f.z-t.z),x=(l.get(m)??1/0)+Math.abs(p.x-t.x)+Math.abs(p.z-t.z);return g-x});const u=o.shift();if(!u)break;const d=`${u.x},${u.z}`;if(d===r)break;for(const[f,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const _={x:u.x+f,z:u.z+p};if(Math.abs(_.x)>e||Math.abs(_.z)>e)continue;const m=`${_.x},${_.z}`,g=n[ce(_.x,_.z,e)],x=(l.get(d)??1/0)+g;x>=(l.get(m)??1/0)||(l.set(m,x),a.set(m,d),o.some(b=>b.x===_.x&&b.z===_.z)||o.push(_))}}const c=[];let h=r;for(;h;){const[u,d]=h.split(",").map(Number);if(c.push({x:u,z:d}),h===i)break;h=a.get(h)}return c.reverse()}function oo(s,t,e,n,i=0){const r=s.maxX-s.minX+1,o=s.maxZ-s.minZ+1;if(r<t*2||o<e*2)return[s];if(r>o?!0:o>r?!1:n(i)>.5){const u=s.minX+t-1,d=s.maxX-t;if(u>=d)return[s];const f=u+Math.floor(n(i+1)*Math.max(1,d-u+1));return[...oo({minX:s.minX,maxX:f,minZ:s.minZ,maxZ:s.maxZ},t,e,n,i+11),...oo({minX:f+1,maxX:s.maxX,minZ:s.minZ,maxZ:s.maxZ},t,e,n,i+19)]}const l=s.minZ+e-1,c=s.maxZ-e;if(l>=c)return[s];const h=l+Math.floor(n(i+2)*Math.max(1,c-l+1));return[...oo({minX:s.minX,maxX:s.maxX,minZ:s.minZ,maxZ:h},t,e,n,i+23),...oo({minX:s.minX,maxX:s.maxX,minZ:h+1,maxZ:s.maxZ},t,e,n,i+31)]}function Cu(s){return{x:Math.floor((s.minX+s.maxX)/2),z:Math.floor((s.minZ+s.maxZ)/2)}}const Gc=[{id:"overworld",label:"Overworld",description:"Minecraft-like overworld with biomes, caves, rivers, trees, and a small village.",defaultSize:48,defaultHeight:12},{id:"arena",label:"Arena",description:"Circular combat bowl with walls, pillars, and a marked center.",defaultSize:18,defaultHeight:4},{id:"floating-island",label:"Floating Island",description:"Suspended landmass with a pond and a small tree.",defaultSize:16,defaultHeight:12},{id:"fortress",label:"Fortress",description:"Square stronghold with towers, gate, and a raised keep.",defaultSize:18,defaultHeight:6},{id:"downtown",label:"Downtown",description:"Dense city blocks with crossroads, towers, and a central plaza.",defaultSize:20,defaultHeight:9},{id:"castle",label:"Castle",description:"Layered castle walls with gatehouse, courtyard, and central keep.",defaultSize:22,defaultHeight:8},{id:"archipelago",label:"Archipelago",description:"Scattered islands, shallow water, and uneven shorelines.",defaultSize:22,defaultHeight:5},{id:"canyon",label:"Canyon",description:"Layered mesas cut by a winding canyon river.",defaultSize:24,defaultHeight:10},{id:"pine-valley",label:"Pine Valley",description:"Rolling hills, pine patches, and a shallow stream bed.",defaultSize:24,defaultHeight:8},{id:"kingdom",label:"Kingdom",description:"Large mixed world with macro terrain, regions, roads, downtown, castle, and forests.",defaultSize:56,defaultHeight:12}];function sw(s,t){switch(s.theme){case"overworld":return rw(s,t);case"arena":return ow(s,t);case"floating-island":return aw(s,t);case"fortress":return lw(s,t);case"downtown":return t0(s,t);case"castle":return e0(s,t);case"archipelago":return cw(s,t);case"canyon":return hw(s,t);case"pine-valley":return uw(s,t);case"kingdom":return dw(s,t)}}function rw(s,t){const e={},n=Se(s.size,24,96),i=Se(s.height,7,24),r=n*2+1,o=Math.max(3,Math.round(i*.35)),a=-12,l=ei(s.seed),c=new Int16Array(r*r),h=new Float32Array(r*r),u=new Float32Array(r*r),d=new Float32Array(r*r),f=new Float32Array(r*r),p=new Float32Array(r*r),_=new Float32Array(r*r),m=new Uint8Array(r*r),g=l()*Math.PI*2,x=l()*Math.PI*2;for(let v=-n;v<=n;v++){const A=Math.sin(v*.041+g)*n*.22+Math.sin(v*.097+x)*n*.08;for(let T=-n;T<=n;T++){const E=ce(v,T,n),y=Math.hypot(v,T)/Math.max(1,n),S=Jp(Gt(s.seed+17,Math.floor(v*.065),Math.floor(T*.065))*2-1)-Math.max(0,y-.82)*.65,B=_s(Gt(s.seed+101,Math.floor(v*.085),Math.floor(T*.085))*.75+Gt(s.seed+181,Math.floor(v*.19),Math.floor(T*.19))*.25),R=Jp((Gt(s.seed+293,Math.floor(v*.11),Math.floor(T*.11))-.5)*2),O=_s(.18+Gt(s.seed+401,Math.floor(v*.08),Math.floor(T*.08))*.55+Math.max(0,1-Math.abs(T-A)/18)*.24),z=_s(.62+Gt(s.seed+503,Math.floor(v*.07),Math.floor(T*.07))*.36-Math.max(0,y-.4)*.12),P=Math.abs(T-A),U=Math.pow(Math.max(0,1-Math.abs(R)),1.35),V=Math.max(0,R)*8.5+U*4.5,N=B*8,q=S<-.22?o-6+S*6:i+S*14,j=Math.max(0,5.5-P)*(.45+(1-B)*.5),it=Math.round(q+V-N-j);c[E]=it,h[E]=O,u[E]=z,d[E]=S,f[E]=B,p[E]=R,_[E]=P,m[E]=fw(it,o,S,B,O,z,P)}}for(let v=-n;v<=n;v++)for(let A=-n;A<=n;A++){const T=ce(v,A,n),E=c[T],y=m[T];pw(e,v,A,E,o,a,y,t)}mw(e,n,a,c,o,s.seed);for(let v=-n;v<=n;v++)for(let A=-n;A<=n;A++){const T=ce(v,A,n),E=m[T],y=Td(e,v,A);if(!(y<=o||E===vd||E===xd)){if(E===xo||E===vo||E===yo){const S=E===xo?.042:E===vo?.036:.012,B=Gt(s.seed+701,v,A);B<S&&yw(e,v,A,y+1,2)?E===vo?Rl(e,{x:v,y:y+1,z:A},4+Math.floor(Gt(s.seed+733,v,A)*4),t.wood,t.leaves):gw(e,{x:v,y:y+1,z:A},4+Math.floor(Gt(s.seed+727,v,A)*3),t.wood,t.leaves):E===yo&&B>.93&&J(e,{x:v,y:y+1,z:A},t.leaves)}E===Ed&&Gt(s.seed+809,v,A)>.958&&_w(e,{x:v,y:y+1,z:A},1+Math.floor(Gt(s.seed+877,v,A)*2),t.stone,t.accent),(E===Md||E===Sd)&&Gt(s.seed+919,v,A)>.972&&J(e,{x:v,y:y+1,z:A},t.wood)}}const b=fl(n,Math.max(10,Math.floor(n*.22)),(v,A)=>{const T=ce(v,A,n),E=m[T];return E!==yo&&E!==xo?-1/0:2.8-yd(c,v,A,n)*1.2+Math.max(0,1-_[T]/18)*.7+f[T]*.5+d[T]*.2});return xw(e,b,Math.max(o+1,Math.round(Au(c,b,3,n))),t,s.seed),{blocks:e,bounds:{min:{x:-n,y:a,z:-n},max:{x:n,y:i+28,z:n}}}}function ow(s,t){const e={},n=Se(s.size,8,40),i=Se(s.height,3,10),r=ei(s.seed),o=Math.max(2,Math.floor(n*.18)),a=Math.floor(r()*4);for(let c=-n-3;c<=n+3;c++)for(let h=-n-3;h<=n+3;h++){const u=Math.hypot(c,h),d=(Gt(s.seed,c,h)-.5)*1.8,f=-Math.max(0,Math.round((1-Math.min(1,u/(n*.74)))*o));if(u<=n+d){for(let _=-2;_<f;_++)J(e,{x:c,y:_,z:h},t.stone);J(e,{x:c,y:f-1,z:h},t.stone),J(e,{x:c,y:f,z:h},u<n*.68?t.sand:t.stone)}else u<=n+3+d*.5&&r()>.42&&J(e,{x:c,y:-1,z:h},t.grass);const p=a===0&&h>=n-1&&Math.abs(c)<=2||a===1&&c>=n-1&&Math.abs(h)<=2||a===2&&h<=-n+1&&Math.abs(c)<=2||a===3&&c<=-n+1&&Math.abs(h)<=2;if(u>=n-1.4&&u<=n+.8+d*.25&&!p)for(let _=1;_<=i;_++){const m=_===i?t.accent:t.wall;J(e,{x:c,y:_,z:h},m)}(Math.abs(c)<=1||Math.abs(h)<=1)&&u<n-2&&J(e,{x:c,y:f,z:h},t.accent),u<n*.2&&J(e,{x:c,y:1,z:h},t.accent)}const l=Math.floor(n*.55);for(const[c,h]of[[-l,-l],[-l,l],[l,-l],[l,l]])Vi(e,{x:c,y:1,z:h},i+2,t.wall,t.accent);return{blocks:e,bounds:{min:{x:-n-3,y:-2,z:-n-3},max:{x:n+3,y:i+2,z:n+3}}}}function aw(s,t){const e={},n=Se(s.size,10,36),i=Se(s.height,6,24),r=Math.max(5,Math.floor(n*.45)),o=ei(s.seed),a=new Map;for(let f=-n;f<=n;f++)for(let p=-n;p<=n;p++){const _=Math.hypot(f/n,p/n);if(_>1.02)continue;const m=(Gt(s.seed+41,f,p)-.5)*1.8+(Gt(s.seed+83,f*2,p*2)-.5)*.8,g=Math.round(i+r-1-_*2.8+m),x=Math.max(4,Math.round((1.08-_)*r*1.75+Gt(s.seed+149,f,p)*3)),b=g-x;a.set(`${f},${p}`,g);for(let v=b;v<=g;v++){const A=g-v,T=A===0?t.grass:A<=2?t.wall:t.stone;J(e,{x:f,y:v,z:p},T)}}const l=Math.max(2,Math.floor(n*.16));for(let f=-l;f<=l;f++)for(let p=-l;p<=l;p++){if(f*f+p*p>l*l)continue;const _=a.get(`${f},${p}`)??i+r-1;J(e,{x:f,y:_,z:p},t.water)}const c=Math.max(4,Math.floor(n*.28)),h={x:-Math.floor(n*.28),y:(a.get(`${-Math.floor(n*.28)},${Math.floor(n*.12)}`)??i+r-1)+1,z:Math.floor(n*.12)};for(let f=0;f<c;f++)J(e,{x:h.x,y:h.y+f,z:h.z},t.wood);const u={x:h.x,y:h.y+c,z:h.z};for(let f=-3;f<=3;f++)for(let p=-2;p<=2;p++)for(let _=-3;_<=3;_++)f*f+p*p*1.4+_*_>9||J(e,{x:u.x+f,y:u.y+p,z:u.z+_},t.leaves);const d=2+Math.floor(o()*3);for(let f=0;f<d;f++){const p=Math.round((o()*2-1)*n*.68),_=Math.round((o()*2-1)*n*.68),m=(a.get(`${p},${_}`)??i)-Math.max(5,Math.floor(r*.8)),g=3+Math.floor(o()*4);for(let x=0;x<g;x++)J(e,{x:p,y:m-x,z:_},x===g-1?t.accent:t.wall)}return{blocks:e,bounds:{min:{x:-n,y:i-r,z:-n},max:{x:n,y:i+r+c+2,z:n}}}}function lw(s,t){const e={},n=Se(s.size,10,40),i=Se(s.height,4,12),r=ei(s.seed),o=Math.max(4,Math.floor(n*.35)),a=2,l=n-4,c=Math.floor(r()*4),h=Qg(n+2,s.seed,0,!0,Gt),u={x:Se(h.center.x,-2,2),z:Se(h.center.z,-2,2)};for(let d=-n-2;d<=n+2;d++)for(let f=-n-2;f<=n+2;f++){const p=d+u.x,_=f+u.z,m=ce(p,_,n+2),g=Math.max(0,h.height[m]),x=Math.abs(d)<=n&&Math.abs(f)<=n;for(let A=-1;A<g;A++)J(e,{x:p,y:A,z:_},t.stone);x?J(e,{x:p,y:g,z:_},Math.abs(d)<=l&&Math.abs(f)<=l?Math.max(Math.abs(d),Math.abs(f))<l*.4?t.sand:t.grass:t.wall):Math.abs(d)<=n+2&&Math.abs(f)<=n+2&&J(e,{x:p,y:g,z:_},t.stone);const b=Math.abs(d)===n||Math.abs(f)===n,v=Ru(c,n,d,f,2);if(b&&!v)for(let A=1;A<=i;A++)J(e,{x:p,y:g+A,z:_},A===i?t.accent:t.wall)}for(const[d,f]of[[-n,-n],[-n,n],[n,-n],[n,n]])for(let p=-a;p<=a;p++)for(let _=-a;_<=a;_++)p*p+_*_>(a+.4)*(a+.4)||Vi(e,{x:u.x+d+p,y:1+Math.max(0,h.height[ce(u.x+d+p,u.z+f+_,n+2)]),z:u.z+f+_},i+3,t.wall,t.accent);for(let d=-o;d<=o;d++)for(let f=-o;f<=o;f++){const p=u.x+d,_=u.z+f,m=1+Math.max(0,h.height[ce(p,_,n+2)]);if(J(e,{x:p,y:m,z:_},t.stone),Math.abs(d)===o||Math.abs(f)===o)for(let x=2;x<=i+1;x++)J(e,{x:p,y:m+x-1,z:_},x===i+1?t.accent:t.wall)}return Iu(e,u,c,n,2,3),ww(e,u,l,c,t),Cw(e,u,c,n,t),{blocks:e,bounds:{min:{x:-n-2,y:-1,z:-n-2},max:{x:n+2,y:i+3,z:n+2}}}}function t0(s,t){const e={},n=Se(s.size,12,42),i=Se(s.height,5,18),r=ei(s.seed),o=1+Math.floor(r()*2),a=o+1,l=n*2+1,c=new Float32Array(l*l);for(let _=-n;_<=n;_++)for(let m=-n;m<=n;m++){const g=Math.hypot(_,m)/n,x=Math.abs(_)*.02+Math.abs(m)*.02,b=Math.abs(Gt(s.seed+201,Math.floor(_*.28),Math.floor(m*.28))-.5)*1.2,v=Gt(s.seed+71,_,m)*.8;c[ce(_,m,n)]=1+x+b+v+Math.max(0,g-.75)*3.2}const h=Xp(n,!0,_=>qp(c,n,_,!0)),u=Xp(n,!1,_=>qp(c,n,_,!1)),d=h[Math.floor(h.length/2)]??0,f=u[Math.floor(u.length/2)]??0;for(let _=-n;_<=n;_++)for(let m=-n;m<=n;m++)J(e,{x:_,y:-1,z:m},t.stone),J(e,{x:_,y:0,z:m},t.sand);for(const _ of h)Co(e,{x:_,z:-n},{x:_,z:n},_===d?a:o,_===d?t.accent:t.wall,t.stone);for(const _ of u)Co(e,{x:-n,z:_},{x:n,z:_},_===f?a:o,_===f?t.accent:t.wall,t.stone);const p=Uw(d,f,h,u,r);for(const[_,m]of p){const g=iw(_,m,n,c);Nw(e,g,o,t.wall,t.stone)}for(const _ of h)for(const m of u){const g=(_===d||m===f)&&r()>.45?2+Math.floor(r()*2):1;for(let x=-g;x<=g;x++)for(let b=-g;b<=g;b++)Math.abs(x)+Math.abs(b)>g+1||J(e,{x:_+x,y:0,z:m+b},t.accent)}for(let _=0;_<h.length-1;_++)for(let m=0;m<u.length-1;m++){const g=h[_]===d?a:o,x=h[_+1]===d?a:o,b=u[m]===f?a:o,v=u[m+1]===f?a:o,A=h[_]+g+2,T=h[_+1]-x-2,E=u[m]+b+2,y=u[m+1]-v-2;if(T-A<4||y-E<4)continue;const S={minX:A,maxX:T,minZ:E,maxZ:y},B=Cu(S),R=Lw(B,d,f,s.seed,p),O=R==="civic"?8:R==="market"?5:4,z=oo(S,O,O,P=>Gt(s.seed+1403+P,B.x,B.z));for(const P of z){if(Bw(e,P,R,t),R==="green"&&P.maxX-P.minX>4&&P.maxZ-P.minZ>4){const U=Cu(P);Rl(e,{x:U.x,y:1,z:U.z},4+Math.floor(r()*3),t.wood,t.leaves);continue}Dw(e,P,R,i,t,r,h,u)}}return{blocks:e,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+2,z:n}}}}function e0(s,t){const e={},n=Se(s.size,14,44),i=Se(s.height,5,16),r=ei(s.seed),o=Math.max(6,n-(4+Math.floor(r()*4))),a=Math.max(4,Math.floor(n*(.22+r()*.14))),l=n+2+Math.floor(r()*3),c=Math.floor(r()*4),h=Math.max(o+2,n-3),u=Qg(l,s.seed+57,0,!0,Gt),d={x:Se(u.center.x,-2,2),z:Se(u.center.z,-2,2)};for(let f=-l;f<=l;f++)for(let p=-l;p<=l;p++){const _=f+d.x,m=p+d.z,g=Math.max(0,u.height[ce(_,m,l)]);if(J(e,{x:_,y:-2,z:m},t.stone),Math.abs(f)<=l&&Math.abs(p)<=l&&J(e,{x:_,y:-1,z:m},Math.abs(f)===l||Math.abs(p)===l?t.water:t.stone),Math.abs(f)<=n&&Math.abs(p)<=n){const x=Math.abs(f)<=o&&Math.abs(p)<=o,b=Math.abs(f)<=h&&Math.abs(p)<=h;for(let v=0;v<g;v++)J(e,{x:_,y:v,z:m},t.stone);J(e,{x:_,y:g,z:m},x?t.grass:b?t.sand:t.wall)}}for(let f=-n;f<=n;f++)for(let p=-n;p<=n;p++){const _=Math.abs(f)===n||Math.abs(p)===n,m=Math.abs(f)===o||Math.abs(p)===o,g=Ru(c,n,f,p,2),x=f+d.x,b=p+d.z,v=Math.max(0,u.height[ce(x,b,l)]);if(_&&!g)for(let A=1;A<=i;A++)J(e,{x,y:v+A,z:b},A===i?t.accent:t.wall);if(m&&!Ru(c,o,f,p,1))for(let A=1;A<=i-1;A++)J(e,{x,y:v+A,z:b},A===i-1?t.accent:t.wall)}for(const[f,p]of[[-n,-n],[-n,n],[n,-n],[n,n],[-o,-o],[-o,o],[o,-o],[o,o]])for(let _=-1;_<=1;_++)for(let m=-1;m<=1;m++){const g=d.x+f+_,x=d.z+p+m,b=1+Math.max(0,u.height[ce(g,x,l)]);Vi(e,{x:g,y:b,z:x},i+3,t.wall,t.accent)}for(let f=-a;f<=a;f++)for(let p=-a;p<=a;p++){const _=d.x+f,m=d.z+p,g=1+Math.max(0,u.height[ce(_,m,l)]);J(e,{x:_,y:g,z:m},t.stone);for(let x=2;x<=i+3;x++)!(Math.abs(f)===a||Math.abs(p)===a)&&x!==i+3||J(e,{x:_,y:g+x-1,z:m},x===i+3?t.accent:t.wall)}return Pw(e,d,c,o,l,t),Iu(e,d,c,n,2,3),Iu(e,d,c,o,1,3),Iw(e,d,o,a,c,t),{blocks:e,bounds:{min:{x:-l,y:-2,z:-l},max:{x:l,y:i+3,z:l}}}}function cw(s,t){const e={},n=Se(s.size,14,44),i=Se(s.height,3,10),r=ei(s.seed),o=4+Math.floor(r()*4),a=Array.from({length:o},()=>({x:Math.round((r()*2-1)*n*.72),z:Math.round((r()*2-1)*n*.72),radius:4+Math.floor(r()*Math.max(4,n*.18)),height:i+Math.floor(r()*3)}));for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){J(e,{x:l,y:-2,z:c},t.stone),J(e,{x:l,y:-1,z:c},t.water);let h=0,u=0,d=0;for(const _ of a){const g=1-Math.hypot(l-_.x,c-_.z)/_.radius;d+=Math.max(0,g),!(g<=h)&&(h=g,u=_.height)}if(h<=0)continue;const f=Gt(s.seed+211,Math.floor(l*.5),Math.floor(c*.5)),p=Math.max(1,Math.round(h*u+Math.max(0,d-1.2)+f*1.4));for(let _=0;_<p;_++){const m=_===p-1?h>.74?t.grass:t.sand:_>=p-2?t.wall:t.stone;J(e,{x:l,y:_,z:c},m)}h<.38&&d>.7&&J(e,{x:l,y:0,z:c},t.sand),h>.72&&Gt(s.seed*3+17,l,c)>.78&&Sw(e,{x:l,y:p,z:c},3+Math.floor(r()*2),t.wood,t.leaves)}return{blocks:e,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+5,z:n}}}}function hw(s,t){const e={},n=Se(s.size,16,48),i=Se(s.height,6,18),r=s.seed*.0013;for(let o=-n;o<=n;o++){const a=Math.sin(o*.18+r)*n*.28+Math.sin(o*.07-r*1.7)*n*.14;for(let l=-n;l<=n;l++){const c=Math.abs(l-a),h=Gt(s.seed+91,o,l)*2.2+Gt(s.seed+313,o*2,l*2)*1.2,u=Math.abs(Gt(s.seed+517,Math.floor(o*.33),Math.floor(l*.33))-.5)*3.4,d=Math.max(2,Math.round(i+h+u)),f=Math.max(0,Math.round((8-c)*.9)),p=d-f;for(let _=-2;_<=p;_++){let m=t.stone;_===p&&c<2.5?m=t.water:_===p?m=p>i+1?t.sand:t.accent:_>=p-1?m=t.wall:(p-_)%4===0&&c>4&&(m=t.accent),J(e,{x:o,y:_,z:l},m)}c>8&&p>i+4&&Gt(s.seed+887,o,l)>.91&&Vi(e,{x:o,y:p+1,z:l},2+Math.round(Gt(s.seed+991,o,l)*3),t.wall,t.accent)}}return{blocks:e,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+4,z:n}}}}function uw(s,t){const e={},n=Se(s.size,16,48),i=Se(s.height,5,16),r=ei(s.seed);for(let o=-n;o<=n;o++){const a=Math.sin(o*.15+s.seed*.0021)*n*.18,l=Math.sin(o*.09-s.seed*.0014)*n*.08+n*.22;for(let c=-n;c<=n;c++){const h=Gt(s.seed+19,o,c)*2.8+Gt(s.seed+211,o*2,c*2)*1.3,u=Math.round(i*.55+h),d=Math.max(0,Math.round(4-Math.abs(c-a)))+Math.max(0,Math.round(2-Math.abs(c-l))),f=Math.max(1,u-d),p=Gt(s.seed+433,Math.floor(o*.4),Math.floor(c*.4));for(let _=-1;_<=f;_++){const g=_===f?Math.abs(c-a)<1.6||Math.abs(c-l)<1.1?t.water:p>.78?t.sand:t.grass:_>=f-2?t.wall:t.stone;J(e,{x:o,y:_,z:c},g)}if(f>=2&&Math.abs(c-a)>3){const _=.02+Gt(s.seed+701,o,c)*.06+Math.max(0,p-.7)*.04;r()<_&&Rl(e,{x:o,y:f+1,z:c},4+Math.floor(r()*4),t.wood,t.leaves)}}}return{blocks:e,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+8,z:n}}}}function dw(s,t){const e={},n=Se(s.size,28,96),i=Se(s.height,8,24),r=ei(s.seed),o=Math.max(18,Math.round(n*.38)),a=Math.max(20,Math.round(n*.34)),l=n*2+1,c=new Int16Array(l*l),h=new Float32Array(l*l),u=new Float32Array(l*l),d=new Float32Array(l*l),f=new Float32Array(l*l),p=r()*Math.PI*2,_=r()*Math.PI*2;for(let E=-n;E<=n;E++){const y=Math.sin(E*.045+p)*n*.24+Math.sin(E*.11+_)*n*.07;for(let S=-n;S<=n;S++){const B=Math.hypot(E,S)/n,R=(Gt(s.seed+13,Math.floor(E*.18),Math.floor(S*.18))-.5)*10.5,O=Gt(s.seed+73,E,S)*3.1+Gt(s.seed+193,E*2,S*2)*1.9,z=Math.pow(Math.abs(Gt(s.seed+311,E,S)-.5)*2,1.35)*8.4,P=Math.max(0,B-.74)*12,U=Math.abs(S-y),V=Math.max(0,8.4-U)*1.05,N=Math.max(-2,Math.round(i+R+O+z-P-V)),q=_s(.26+Gt(s.seed+401,Math.floor(E*.33),Math.floor(S*.33))*.28+Math.max(0,1-U/14)*.48-Math.max(0,B-.68)*.25),j=_s(.58-N/Math.max(10,i+12)*.28+Gt(s.seed+557,Math.floor(E*.26),Math.floor(S*.26))*.24);c[ce(E,S,n)]=N,h[ce(E,S,n)]=q,u[ce(E,S,n)]=j;for(let it=-2;it<=N;it++){let at=t.stone;it===N&&N<=0?at=t.water:it===N?at=q>.58?t.grass:j>.66?t.sand:t.grass:it>=N-2&&(at=q>.58?t.wall:t.stone),J(e,{x:E,y:it,z:S},at)}}}for(let E=-n;E<=n;E++)for(let y=-n;y<=n;y++){const S=ce(E,y,n),B=yd(c,E,y,n);d[S]=B;const R=Kp(E,y,n,p,_);f[S]=_s(.62-Math.min(1,B/6)*.46-Math.max(0,(c[S]-i-3)/18)*.24+(1-Math.min(1,R/28))*.2+(1-Math.min(1,Math.hypot(E,y)/n))*.12)}const m=fl(n,Math.max(10,Math.floor(o*.42)),(E,y)=>{const S=ce(E,y,n);return f[S]+h[S]*.08}),g=fl(n,Math.max(10,Math.floor(a*.38)),(E,y)=>{const S=ce(E,y,n),B=Math.hypot(E-m.x,y-m.z),R=Math.abs(B-n*.34);return _s(.18+Math.min(1,(c[S]-i+4)/16)*.42+Math.max(0,1-d[S]/5.2)*.26+Math.max(0,1-R/(n*.22))*.18-Math.max(0,h[S]-.72)*.18)},m,Math.max(18,Math.floor(n*.28))),x=Math.max(1,Math.round(Au(c,m,5,n))),b=Math.max(x+3,Math.round(Au(c,g,5,n))+2);Zp(e,m,o+6,x,t.stone,t.sand),Zp(e,g,a+8,b,t.stone,t.grass);const v=t0({seed:s.seed*17+5,size:o,height:Math.max(8,Math.round(i*.8))},t);vs(e,v.blocks,{x:m.x,y:x,z:m.z});const A=e0({seed:s.seed*29+7,size:a,height:Math.max(7,Math.round(i*.75))},t);vs(e,A.blocks,{x:g.x,y:b,z:g.z});const T=kw(m,g,n,d,h,c);Co(e,m,T,1,t.accent,t.stone),Co(e,T,g,1,t.accent,t.stone);for(let E=-n;E<=n;E++)for(let y=-n;y<=n;y++){const S=Math.hypot(E-m.x,y-m.z)<o*.72,B=Math.hypot(E-g.x,y-g.z)<a*.75,R=Math.min(Pu({x:E,z:y},m,T),Pu({x:E,z:y},T,g))<3.2;if(S||B||R)continue;const O=ce(E,y,n),z=c[O];if(z<1)continue;const P=h[O],U=u[O],V=d[O],N=Kp(E,y,n,p,_);if(P>.43&&P<.72&&U>.42&&V<2.4&&N<18&&Math.hypot(E-m.x,y-m.z)<o*1.45){Fw(e,{x:E,y:z,z:y},t,s.seed);continue}const j=.014+Math.max(0,P-.42)*.08+Gt(s.seed+809,E,y)*.03;P>.5&&V<4.8&&r()<j?Rl(e,{x:E,y:z+1,z:y},4+Math.floor(r()*4),t.wood,t.leaves):z>i+8&&V<3.8&&Gt(s.seed+991,E,y)>.84&&Vi(e,{x:E,y:z+1,z:y},2+Math.floor(r()*3),t.wall,t.accent)}return{blocks:e,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+24,z:n}}}}const xd=0,vd=1,Md=2,Sd=3,yo=4,xo=5,vo=6,bd=7,Ed=8;function fw(s,t,e,n,i,r,o){return s<=t-4||e<-.42?xd:s<=t||e<-.16?vd:o<2.2&&s<=t+4?Sd:s<=t+2?Md:s>=t+14&&n<.4?Ed:r>.74&&i<.38?bd:r<.4&&i>.46?vo:i>.52?xo:yo}function pw(s,t,e,n,i,r,o,a){const l=Math.max(n,i);for(let c=r;c<=l;c++){const h=n-c;let u=a.stone;c>n?u=a.water:h===0?u=$p(o,n,i,!0,a):h<=3?u=$p(o,n,i,!1,a):o===bd&&h<=6&&(u=a.sand),J(s,{x:t,y:c,z:e},u)}}function $p(s,t,e,n,i){switch(s){case xd:case vd:return n?i.sand:i.stone;case Md:case Sd:return n?i.sand:i.wall;case bd:return i.sand;case vo:return n?i.accent:i.wall;case Ed:return n&&t>e+18?i.accent:i.stone;case xo:case yo:default:return n?i.grass:i.wall}}function mw(s,t,e,n,i,r){for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=n[ce(o,a,t)],c=Math.min(l-3,i+18);for(let h=e+2;h<=c;h++){const u=Wc(r+3001,o*.18,h*.22,a*.18)+Wc(r+3119,o*.09,h*.11,a*.09)*.7,d=Math.abs(Wc(r+3251,o*.07,h*.1,a*.07)-.5),f=h<i-6?.96:1.08;(u>f||d<.04)&&J(s,{x:o,y:h,z:a},0)}}}function gw(s,t,e,n,i){for(let o=0;o<e;o++)J(s,{x:t.x,y:t.y+o,z:t.z},n);const r=t.y+e;for(let o=-2;o<=2;o++)for(let a=-2;a<=1;a++)for(let l=-2;l<=2;l++)o*o+l*l+a*a*1.5>7.5||J(s,{x:t.x+o,y:r+a,z:t.z+l},i)}function _w(s,t,e,n,i){for(let r=-e;r<=e;r++)for(let o=0;o<=e;o++)for(let a=-e;a<=e;a++)r*r+o*o*1.3+a*a>(e+.2)*(e+.2)||J(s,{x:t.x+r,y:t.y+o,z:t.z+a},o===e?i:n)}function yw(s,t,e,n,i){for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)for(let a=0;a<=6;a++)if(s[Er({x:t+r,y:n+a,z:e+o})])return!1;return!0}function xw(s,t,e,n,i){const r=ei(i+4109),o=[{x:t.x-8,z:t.z},{x:t.x+8,z:t.z},{x:t.x,z:t.z-8},{x:t.x,z:t.z+8},t];for(const l of o)Co(s,t,l,1,n.sand,n.wall);const a=[{x:-6,z:-4},{x:6,z:-4},{x:-6,z:4},{x:6,z:4}];for(const l of a)vw(s,{x:t.x+l.x,y:e,z:t.z+l.z},3+Math.floor(r()*2),n);Mw(s,{x:t.x,y:e,z:t.z},n)}function vw(s,t,e,n){const i=t.x-e,r=t.x+e,o=t.z-e,a=t.z+e;for(let l=i;l<=r;l++)for(let c=o;c<=a;c++){J(s,{x:l,y:t.y,z:c},n.wall);for(let h=1;h<=3;h++)(l===i||l===r||c===o||c===a)&&J(s,{x:l,y:t.y+h,z:c},n.wood);J(s,{x:l,y:t.y+4,z:c},n.accent)}for(let l=t.y+1;l<=t.y+2;l++)J(s,{x:t.x,y:l,z:o},0)}function Mw(s,t,e){for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)J(s,{x:t.x+n,y:t.y,z:t.z+i},e.wall),J(s,{x:t.x+n,y:t.y-1,z:t.z+i},n===0&&i===0?e.water:e.stone);for(const[n,i]of[[-2,-2],[2,-2],[-2,2],[2,2]])Vi(s,{x:t.x+n,y:t.y+1,z:t.z+i},3,e.wood,e.wood);for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)(Math.abs(n)===2||Math.abs(i)===2)&&J(s,{x:t.x+n,y:t.y+4,z:t.z+i},e.accent)}function Vi(s,t,e,n,i){for(let r=0;r<e;r++)J(s,{x:t.x,y:t.y+r,z:t.z},r===e-1?i:n)}function Sw(s,t,e,n,i){for(let o=0;o<e;o++)J(s,{x:t.x,y:t.y+o,z:t.z},n);const r=t.y+e;for(const[o,a]of[[2,0],[-2,0],[0,2],[0,-2],[1,1],[-1,1],[1,-1],[-1,-1]])J(s,{x:t.x+o,y:r,z:t.z+a},i);J(s,{x:t.x,y:r+1,z:t.z},i)}function Rl(s,t,e,n,i){for(let o=0;o<e;o++)J(s,{x:t.x,y:t.y+o,z:t.z},n);const r=t.y+e-1;for(let o=0;o<4;o++){const a=o<2?2:1;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++)Math.abs(l)+Math.abs(c)>a+1||J(s,{x:t.x+l,y:r-o,z:t.z+c},i)}J(s,{x:t.x,y:r+1,z:t.z},i)}function Ru(s,t,e,n,i){switch(s){case 0:return n===t&&Math.abs(e)<=i;case 1:return e===t&&Math.abs(n)<=i;case 2:return n===-t&&Math.abs(e)<=i;case 3:return e===-t&&Math.abs(n)<=i;default:return!1}}function bw(s,t,e,n,i){for(let r=e+1;r<=n;r++)for(let o=-1;o<=1;o++)switch(t){case 0:J(s,{x:o,y:-1,z:r},i.stone),J(s,{x:o,y:0,z:r},i.accent);break;case 1:J(s,{x:r,y:-1,z:o},i.stone),J(s,{x:r,y:0,z:o},i.accent);break;case 2:J(s,{x:o,y:-1,z:-r},i.stone),J(s,{x:o,y:0,z:-r},i.accent);break;case 3:J(s,{x:-r,y:-1,z:o},i.stone),J(s,{x:-r,y:0,z:o},i.accent);break}}function Ew(s,t,e,n,i){for(let r=1;r<=i;r++)for(let o=-n;o<=n;o++)switch(t){case 0:J(s,{x:o,y:r,z:e},0);break;case 1:J(s,{x:e,y:r,z:o},0);break;case 2:J(s,{x:o,y:r,z:-e},0);break;case 3:J(s,{x:-e,y:r,z:o},0);break}}function Tw(s,t,e,n){for(let r=-t;r<=t;r++)J(s,{x:0,y:0,z:r},n.accent),J(s,{x:r,y:0,z:0},n.accent);const i=t+4;for(let r=0;r<=i;r++)switch(e){case 0:J(s,{x:0,y:0,z:r},n.accent);break;case 1:J(s,{x:r,y:0,z:0},n.accent);break;case 2:J(s,{x:0,y:0,z:-r},n.accent);break;case 3:J(s,{x:-r,y:0,z:0},n.accent);break}}function ww(s,t,e,n,i){const r={};Tw(r,e,n,i),vs(s,r,{x:t.x,y:0,z:t.z})}function Aw(s,t,e,n){for(let i=e;i<=e+5;i++)for(let r=-2;r<=2;r++)switch(t){case 0:J(s,{x:r,y:-1,z:i},n.stone),J(s,{x:r,y:0,z:i},n.accent);break;case 1:J(s,{x:i,y:-1,z:r},n.stone),J(s,{x:i,y:0,z:r},n.accent);break;case 2:J(s,{x:r,y:-1,z:-i},n.stone),J(s,{x:r,y:0,z:-i},n.accent);break;case 3:J(s,{x:-i,y:-1,z:r},n.stone),J(s,{x:-i,y:0,z:r},n.accent);break}}function Cw(s,t,e,n,i){const r={};Aw(r,e,n,i),vs(s,r,{x:t.x,y:0,z:t.z})}function Rw(s,t,e,n,i){for(let r=-t+1;r<=t-1;r++)J(s,{x:0,y:0,z:r},i.accent),J(s,{x:r,y:0,z:0},i.accent);for(let r=-e-1;r<=e+1;r++)J(s,{x:r,y:0,z:-e-1},i.accent),J(s,{x:r,y:0,z:e+1},i.accent);for(let r=-e-1;r<=e+1;r++)J(s,{x:-e-1,y:0,z:r},i.accent),J(s,{x:e+1,y:0,z:r},i.accent);for(let r=e+1;r<=t;r++)switch(n){case 0:J(s,{x:0,y:0,z:r},i.accent);break;case 1:J(s,{x:r,y:0,z:0},i.accent);break;case 2:J(s,{x:0,y:0,z:-r},i.accent);break;case 3:J(s,{x:-r,y:0,z:0},i.accent);break}}function Iw(s,t,e,n,i,r){const o={};Rw(o,e,n,i,r),vs(s,o,{x:t.x,y:0,z:t.z})}function Iu(s,t,e,n,i,r){const o={};Ew(o,e,n,i,r),vs(s,o,{x:t.x,y:0,z:t.z})}function Pw(s,t,e,n,i,r){const o={};bw(o,e,n,i,r),vs(s,o,{x:t.x,y:0,z:t.z})}function Lw(s,t,e,n,i){const r=Math.abs(s.x-t)+Math.abs(s.z-e),o=Math.min(...i.map(([l,c])=>Pu(s,l,c))),a=Gt(n+1701,s.x,s.z);return r<6||o<3.2?"civic":a>.84&&o>5?"green":o<7||a>.46?"market":"residential"}function Bw(s,t,e,n){for(let i=t.minX;i<=t.maxX;i++)for(let r=t.minZ;r<=t.maxZ;r++)J(s,{x:i,y:0,z:r},e==="green"?n.grass:e==="market"?n.sand:n.stone)}function Dw(s,t,e,n,i,r,o,a){const l=Cu(t),c=t.maxX-t.minX+1,h=t.maxZ-t.minZ+1,u=e==="civic"?1:0,d=t.minX+u,f=t.maxX-u,p=t.minZ+u,_=t.maxZ-u;if(f-d<3||_-p<3)return;const m=e==="civic"?n+1:e==="market"?Math.max(4,n-2):Math.max(4,n-3),g=Math.max(4,m+Math.floor(r()*4)-1),x=Math.max(3,g),b=e==="civic"?i.accent:e==="market"?i.stone:i.wall;for(let y=d;y<=f;y++)for(let S=p;S<=_;S++)for(let B=1;B<=x;B++)!(y===d||y===f||S===p||S===_)&&B!==x||J(s,{x:y,y:B,z:S},B===x?b:i.wall);const v=Math.abs(l.x-Yp(l.x,o)),A=Math.abs(l.z-Yp(l.z,a));let T=l.x,E=l.z;A<=v?E=p:T=l.x<0?f:d;for(let y=1;y<=2;y++)J(s,{x:T,y,z:E},0);(e==="civic"||r()>.58)&&(Vi(s,{x:d,y:x+1,z:p},2,i.accent,i.accent),Vi(s,{x:f,y:x+1,z:_},2,i.accent,i.accent)),e==="market"&&c>4&&h>4&&(J(s,{x:l.x,y:1,z:l.z},i.wood),J(s,{x:l.x,y:2,z:l.z},i.leaves))}function Yp(s,t){let e=t[0]??0,n=Math.abs(e-s);for(const i of t){const r=Math.abs(i-s);r<n&&(n=r,e=i)}return e}function Uw(s,t,e,n,i){const r=[],o=e[Math.max(0,Math.floor(e.length*.25))]??s,a=e[Math.min(e.length-1,Math.floor(e.length*.75))]??s,l=n[Math.max(0,Math.floor(n.length*.25))]??t,c=n[Math.min(n.length-1,Math.floor(n.length*.75))]??t;return r.push([{x:o,z:t},{x:s,z:l}]),r.push([{x:s,z:c},{x:a,z:t}]),i()>.45&&r.push([{x:o,z:l},{x:a,z:c}]),i()>.55&&r.push([{x:o,z:c},{x:a,z:l}]),r}function Nw(s,t,e,n,i){for(const r of t){const o=Math.max(0,Td(s,r.x,r.z));for(let a=-e;a<=e;a++)for(let l=-e;l<=e;l++){const c=r.x+a,h=r.z+l;for(let u=-2;u<o;u++)J(s,{x:c,y:u,z:h},i);J(s,{x:c,y:o,z:h},n),wd(s,c,h,o+1,o+8)}}}function Kp(s,t,e,n,i){const r=Math.sin(s*.045+n)*e*.24+Math.sin(s*.11+i)*e*.07;return Math.abs(t-r)}function kw(s,t,e,n,i,r){const o={x:Math.round((s.x+t.x)*.5),z:Math.round((s.z+t.z)*.5)};let a=o,l=1/0;for(let c=o.x-12;c<=o.x+12;c++)for(let h=o.z-12;h<=o.z+12;h++){if(Math.abs(c)>e||Math.abs(h)>e)continue;const u=ce(c,h,e),d=n[u]*1.8+Math.max(0,i[u]-.78)*6+Math.max(0,-r[u])*2.4+Math.abs(c-o.x)*.06+Math.abs(h-o.z)*.06;d<l&&(l=d,a={x:c,z:h})}return a}function Fw(s,t,e,n){const i=Gt(n+1221,t.x,t.z),r=i>.58?e.sand:e.grass;J(s,t,r),i>.8?J(s,{x:t.x,y:t.y+1,z:t.z},e.wood):i<.16&&J(s,{x:t.x,y:t.y+1,z:t.z},e.leaves)}function Zp(s,t,e,n,i,r){for(let o=t.x-e;o<=t.x+e;o++)for(let a=t.z-e;a<=t.z+e;a++)if(!(Math.hypot(o-t.x,a-t.z)>e)){for(let l=-2;l<n;l++)J(s,{x:o,y:l,z:a},i);J(s,{x:o,y:n,z:a},r),wd(s,o,a,n+1,n+30)}}function Co(s,t,e,n,i,r){const o=Math.max(Math.abs(e.x-t.x),Math.abs(e.z-t.z));for(let a=0;a<=o;a++){const l=o===0?0:a/o,c=Math.round(jp(t.x,e.x,l)),h=Math.round(jp(t.z,e.z,l)),u=Math.max(0,Td(s,c,h));for(let d=-n;d<=n;d++)for(let f=-n;f<=n;f++){const p=c+d,_=h+f;for(let m=-2;m<u;m++)J(s,{x:p,y:m,z:_},r);J(s,{x:p,y:u,z:_},i),wd(s,p,_,u+1,u+8)}}}function vs(s,t,e){for(const[n,i]of Object.entries(t)){const r=Ow(n);J(s,{x:r.x+e.x,y:r.y+e.y,z:r.z+e.z},i)}}function Td(s,t,e){for(let n=96;n>=-2;n--)if(s[Er({x:t,y:n,z:e})])return n;return-2}function wd(s,t,e,n,i){for(let r=n;r<=i;r++)J(s,{x:t,y:r,z:e},0)}function Pu(s,t,e){const n=e.x-t.x,i=e.z-t.z,r=n*n+i*i;if(r===0)return Math.hypot(s.x-t.x,s.z-t.z);const o=Math.max(0,Math.min(1,((s.x-t.x)*n+(s.z-t.z)*i)/r)),a=t.x+n*o,l=t.z+i*o;return Math.hypot(s.x-a,s.z-l)}function jp(s,t,e){return s+(t-s)*e}function Ow(s){const t=s.indexOf(","),e=s.indexOf(",",t+1);return{x:Number(s.slice(0,t)),y:Number(s.slice(t+1,e)),z:Number(s.slice(e+1))}}function J(s,t,e){const n=Er(t);if(e===0){delete s[n];return}s[n]=e}function Se(s,t,e){return Math.max(t,Math.min(e,Math.round(s)))}function Jp(s){return Math.max(-1,Math.min(1,s))}function ei(s){let t=s>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Gt(s,t,e){const n=Math.sin(t*127.1+e*311.7+s*1e-4)*43758.5453123;return n-Math.floor(n)}function Wc(s,t,e,n){const i=Math.sin(t*127.1+e*269.5+n*311.7+s*1e-4)*43758.5453123;return i-Math.floor(i)}class pl{constructor(t,e){C(this,"_texture");C(this,"_uvByUri",new Map);this._texture=t,this._uvByUri=e}get texture(){return this._texture}toSnapshot(){return Object.fromEntries(this._uvByUri.entries())}getFaceUvs(t,e){const n=this._uvByUri.get(t.textureUris[e]);if(!n)throw new Error(`TextureAtlas: Missing atlas entry for ${t.textureUris[e]}`);return n}static async create(t){const e=new Set;for(const u of t)Object.values(u.textureUris).forEach(d=>e.add(d));const n=await Promise.all([...e].map(async u=>[u,await zw(u)])),i=16,r=Math.max(1,Math.ceil(Math.sqrt(n.length))),o=Math.max(1,Math.ceil(n.length/r)),a=document.createElement("canvas");a.width=r*i,a.height=o*i;const l=a.getContext("2d");if(!l)throw new Error("TextureAtlas: Failed to create 2d context.");l.imageSmoothingEnabled=!1;const c=new Map;n.forEach(([u,d],f)=>{const p=f%r,_=Math.floor(f/r),m=p*i,g=_*i;l.drawImage(d,m,g,i,i);const x=Vw(d,i);c.set(u,{averageRGB:x.averageRGB,isTransparent:x.isTransparent,needsAlphaTest:x.needsAlphaTest,transparencyRatio:x.transparencyRatio,u0:m/a.width,v0:1-(g+i)/a.height,u1:(m+i)/a.width,v1:1-g/a.height})});const h=new ty(a);return h.colorSpace=we,h.magFilter=Ae,h.minFilter=Ae,h.generateMipmaps=!1,h.needsUpdate=!0,new pl(h,c)}}async function zw(s){return new Promise((t,e)=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>e(new Error(`Failed to load image ${s}`)),n.src=s})}function Vw(s,t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");if(!n)return{averageRGB:[1,1,1],isTransparent:!1,needsAlphaTest:!1,transparencyRatio:0};n.imageSmoothingEnabled=!1,n.clearRect(0,0,t,t),n.drawImage(s,0,0,t,t);const i=n.getImageData(0,0,t,t).data;let r=0,o=!1,a=0,l=0,c=0,h=0;for(let u=0;u<i.length;u+=4){const d=i[u],f=i[u+1],p=i[u+2],_=i[u+3],m=_/255;l+=d*m,c+=f*m,h+=p*m,a+=m,_<255&&r++,_>0&&_<255&&(o=!0)}return{averageRGB:a>0?[l/(255*a),c/(255*a),h/(255*a)]:[1,1,1],isTransparent:r>0,needsAlphaTest:o,transparencyRatio:r/(t*t)}}const Lu=512,Ms=64*1024*1024,Qp=1024*1024,Bu=80,Du=80,tm=Ms+1024*1024,Il="https://voxcinder-gallery.voxcinder-gallery.workers.dev".replace(/\/$/,""),Pl="hytopia-map-version",n0="application/vnd.hytopia.gallery-map-publish";function Uu(s){const t=new URL(window.location.href);return t.search="",t.hash="",t.searchParams.set("map",s),t.toString()}async function em(){const s=await fetch(`${Il}/api/maps`,{cache:"no-store"});return ml(s).then(t=>t.maps)}async function Hw(s){const t=i0(s),e=await fetch(`${Il}/api/maps/${encodeURIComponent(t)}`,{cache:"no-store"});return s0(e,t)}async function Gw(s,t){const e=await fetch(`${Il}/api/maps/${encodeURIComponent(s)}/versions/${encodeURIComponent(t)}`,{cache:"no-store"});return s0(e,s)}async function Ww(s){const t=await Xw(s),e=await fetch(`${Il}/api/maps`,{body:t,headers:{"content-type":n0},method:"POST"}),n=await ml(e);return{...n,shareUrl:n.shareUrl||Uu(n.mapId)}}async function Xw(s){var l;const t=await $w(s.worldMap);qw(s,t.mapJsonSize);const e={authorName:s.authorName,blockCount:t.blockCount,description:s.description,editToken:s.editToken,mapJsonSize:t.mapJsonSize,mapObjectFormat:Pl,mapId:s.mapId,sourceMapId:s.sourceMapId,sourceVersionId:s.sourceVersionId,title:s.title},n=new TextEncoder().encode(JSON.stringify(e)),i=((l=s.thumbnailBlob)==null?void 0:l.size)??0;if(n.byteLength>4294967295||i>4294967295)throw new Error("Publish metadata is too large.");const r=new ArrayBuffer(8),o=new DataView(r);o.setUint32(0,n.byteLength,!1),o.setUint32(4,i,!1);const a=[r,n];return s.thumbnailBlob&&a.push(s.thumbnailBlob),a.push(t.blob),new Blob(a,{type:n0})}function qw(s,t){const e=s.title.trim();if(!e||e.length>Bu)throw new Error(`Title must be between 1 and ${Bu} characters.`);if(s.authorName&&s.authorName.length>Du)throw new Error(`Author must be at most ${Du} characters.`);if(s.description&&s.description.length>Lu)throw new Error(`Description must be at most ${Lu} characters.`);if(t>Ms)throw new Error(`Map JSON is larger than ${Ms} bytes.`);if(s.thumbnailBlob&&s.thumbnailBlob.size>Qp)throw new Error(`Preview image is larger than ${Qp} bytes.`)}async function $w(s){if(!("CompressionStream"in window))throw new Error("This browser cannot publish compressed Gallery maps.");const t=JSON.stringify(s),e=new TextEncoder().encode(t).byteLength,n=s.blocks&&typeof s.blocks=="object"?Object.keys(s.blocks).length:0,i=JSON.stringify({format:Pl,kind:"full",mapData:s}),r=await new Response(new Blob([i]).stream().pipeThrough(new CompressionStream("gzip"))).blob();return{blob:new Blob([r],{type:"application/gzip"}),blockCount:n,fileName:"world-map-version.full.json.gz",mapJsonSize:e}}function i0(s){const t=s.trim();if(!t)throw new Error("Map ID or URL is required.");try{const e=new URL(t,window.location.origin),n=e.searchParams.get("map");if(n)return n;const i=e.pathname.match(/\/maps\/([^/]+)/);if(i!=null&&i[1])return decodeURIComponent(i[1])}catch{}return t.replace(/^#/,"")}async function ml(s){let t=null;try{t=await s.json()}catch{t=null}if(!s.ok){const e=t&&typeof t=="object"&&"error"in t?String(t.error):`Request failed with HTTP ${s.status}`;throw new Error(e)}return t}async function s0(s,t){if(!s.ok)return ml(s);if((s.headers.get("content-type")||"").includes("application/json")&&!s.headers.get("content-encoding")){const a=await ml(s);return{...a,mapId:a.mapId||t,worldMap:Kw(a.worldMap)}}const n=Xc(s,"x-size-bytes");if(n!==void 0&&n>Ms)throw new Error(`Downloaded map is larger than ${Ms} bytes.`);const i=await Yw(s),r=JSON.parse(i),o=r0(r);return{blockCount:Xc(s,"x-block-count"),createdAt:s.headers.get("x-created-at")||"",mapId:s.headers.get("x-map-id")||t,sizeBytes:Xc(s,"x-size-bytes"),versionId:s.headers.get("x-version-id")||"1",worldMap:o}}async function Yw(s){const t=s.headers.get("x-map-content-encoding")||s.headers.get("content-encoding")||"",e=s.headers.get("content-type")||"";if(!t.includes("gzip")&&!e.includes("gzip"))return nm(s,tm);if(!("DecompressionStream"in window))throw new Error("This browser cannot import compressed Gallery maps.");return nm(new Response(s.body.pipeThrough(new DecompressionStream("gzip"))),tm)}async function nm(s,t){if(!s.body){const a=await s.text();if(new TextEncoder().encode(a).byteLength>t)throw new Error(`Downloaded map is larger than ${Ms} bytes.`);return a}const e=s.body.getReader(),n=[];let i=0;for(;;){const a=await e.read();if(a.done)break;if(i+=a.value.byteLength,i>t)throw await e.cancel().catch(()=>{}),new Error(`Downloaded map is larger than ${Ms} bytes.`);n.push(a.value)}const r=new Uint8Array(i);let o=0;for(const a of n)r.set(a,o),o+=a.byteLength;return new TextDecoder().decode(r)}function r0(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Downloaded map file is invalid.");const t=s;if(t.format!==Pl||t.kind!=="full"||!t.mapData)throw new Error("Downloaded map file is not a full Gallery map version.");return t.mapData}function Kw(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Downloaded map file is invalid.");const t=s;return t.format===Pl||t.kind==="full"||"mapData"in t?r0(s):s}function Xc(s,t){const e=s.headers.get(t);if(!e)return;const n=Number(e);return Number.isFinite(n)?n:void 0}const im=16384,Fi=64,Ss=8*1024*1024,sm=1024*1024,Nu=80,ku=80,rm=Ss+1024*1024,Ad="https://voxcinder-gallery.voxcinder-gallery.workers.dev".replace(/\/$/,""),Ll="hytopia-part";function Zw(s){const t=new URL(window.location.href);return t.search="",t.hash="",t.searchParams.set("part",s),t.toString()}async function jw(){const s=await fetch(`${Ad}/api/parts`,{cache:"no-store"});return gl(s).then(t=>t.parts)}async function Jw(s){const t=iA(s),e=await fetch(`${Ad}/api/parts/${encodeURIComponent(t)}`,{cache:"no-store"});return sA(e,t)}async function Qw(s){const t=await tA(s),e=await fetch(`${Ad}/api/parts`,{body:t,method:"POST"}),n=await gl(e);return{...n,shareUrl:n.shareUrl||Zw(n.partId)}}async function tA(s){const t=await nA(s.worldPart);eA(s,t.partJsonSize,t.blockCount);const e={authorName:s.authorName,blockCount:t.blockCount,partJsonSize:t.partJsonSize,partObjectFormat:Ll,title:s.title},n=new FormData;return n.set("metadata",JSON.stringify(e)),n.set("part",t.blob,t.fileName),s.thumbnailBlob&&n.set("thumbnail",s.thumbnailBlob,"thumbnail.jpg"),n}function eA(s,t,e){const n=s.title.trim();if(!n||n.length>Nu)throw new Error(`Title must be between 1 and ${Nu} characters.`);if(s.authorName&&s.authorName.length>ku)throw new Error(`Author must be at most ${ku} characters.`);if(lA(s.worldPart,e),t>Ss)throw new Error(`Part JSON is larger than ${Ss} bytes.`);if(s.thumbnailBlob&&s.thumbnailBlob.size>sm)throw new Error(`Preview image is larger than ${sm} bytes.`)}async function nA(s){if(!("CompressionStream"in window))throw new Error("This browser cannot publish compressed Gallery parts.");const t=JSON.stringify(s),e=new TextEncoder().encode(t).byteLength,n=aA(s),i=JSON.stringify({format:Ll,kind:"full",partData:s}),r=await new Response(new Blob([i]).stream().pipeThrough(new CompressionStream("gzip"))).blob();return{blob:new Blob([r],{type:"application/gzip"}),blockCount:n,fileName:"world-part.full.json.gz",partJsonSize:e}}function iA(s){const t=s.trim();if(!t)throw new Error("Part ID or URL is required.");try{const e=new URL(t,window.location.origin),n=e.searchParams.get("part");if(n)return n;const i=e.pathname.match(/\/parts\/([^/]+)/);if(i!=null&&i[1])return decodeURIComponent(i[1])}catch{}return t.replace(/^#/,"")}async function gl(s){let t=null;try{t=await s.json()}catch{t=null}if(!s.ok){const e=t&&typeof t=="object"&&"error"in t?String(t.error):`Request failed with HTTP ${s.status}`;throw new Error(e)}return t}async function sA(s,t){if(!s.ok)return gl(s);if((s.headers.get("content-type")||"").includes("application/json")&&!s.headers.get("content-encoding")){const a=await gl(s);return{...a,partId:a.partId||t,worldPart:oA(a.worldPart)}}const n=qc(s,"x-size-bytes");if(n!==void 0&&n>Ss)throw new Error(`Downloaded part is larger than ${Ss} bytes.`);const i=await rA(s),r=JSON.parse(i),o=o0(r);return{blockCount:qc(s,"x-block-count"),createdAt:s.headers.get("x-created-at")||"",partId:s.headers.get("x-part-id")||t,sizeBytes:qc(s,"x-size-bytes"),worldPart:o}}async function rA(s){const t=s.headers.get("x-part-content-encoding")||s.headers.get("content-encoding")||"",e=s.headers.get("content-type")||"";if(!t.includes("gzip")&&!e.includes("gzip"))return om(s,rm);if(!("DecompressionStream"in window))throw new Error("This browser cannot import compressed Gallery parts.");return om(new Response(s.body.pipeThrough(new DecompressionStream("gzip"))),rm)}async function om(s,t){if(!s.body){const a=await s.text();if(new TextEncoder().encode(a).byteLength>t)throw new Error(`Downloaded part is larger than ${Ss} bytes.`);return a}const e=s.body.getReader(),n=[];let i=0;for(;;){const a=await e.read();if(a.done)break;if(i+=a.value.byteLength,i>t)throw await e.cancel().catch(()=>{}),new Error(`Downloaded part is larger than ${Ss} bytes.`);n.push(a.value)}const r=new Uint8Array(i);let o=0;for(const a of n)r.set(a,o),o+=a.byteLength;return new TextDecoder().decode(r)}function o0(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Downloaded part file is invalid.");const t=s;if(t.format!==Ll||t.kind!=="full"||!t.partData)throw new Error("Downloaded part file is not a full Gallery part.");return t.partData}function oA(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Downloaded part file is invalid.");const t=s;return t.format===Ll||t.kind==="full"||"partData"in t?o0(s):s}function aA(s){if(!s.blocks||typeof s.blocks!="object")return 0;let t=0;for(const e of Object.values(s.blocks))Mi(e)!==0&&(t+=1);return t}function lA(s,t){if(t>im)throw new Error(`Part has more than ${im} blocks.`);if(hA(s.size,"Part size"),s.size.x>Fi||s.size.y>Fi||s.size.z>Fi)throw new Error(`Part size must fit within ${Fi} blocks on each axis.`);if(s.anchor){if(!Cd(s.anchor))throw new Error("Part anchor must have integer x, y, and z values.");if(s.anchor.x<0||s.anchor.x>=s.size.x||s.anchor.y<0||s.anchor.y>=s.size.y||s.anchor.z<0||s.anchor.z>=s.size.z)throw new Error("Part anchor must be inside the part size.")}cA(s)}function cA(s){const t=s.blocks??{};let e=!1,n=0,i=0,r=0,o=0,a=0,l=0;for(const[c,h]of Object.entries(t)){if(Mi(h)===0)continue;const u=Cl(c);if(!Cd(u))throw new Error(`Part block coordinate "${c}" is invalid.`);if(u.x<0||u.x>=s.size.x||u.y<0||u.y>=s.size.y||u.z<0||u.z>=s.size.z)throw new Error(`Part block coordinate "${c}" is outside the part size.`);if(!e){n=o=u.x,i=a=u.y,r=l=u.z,e=!0;continue}n=Math.min(n,u.x),i=Math.min(i,u.y),r=Math.min(r,u.z),o=Math.max(o,u.x),a=Math.max(a,u.y),l=Math.max(l,u.z)}if(e&&(o-n+1>Fi||a-i+1>Fi||l-r+1>Fi))throw new Error(`Part block bounds must fit within ${Fi} blocks on each axis.`)}function hA(s,t){if(!s||!Cd(s)||s.x<=0||s.y<=0||s.z<=0)throw new Error(`${t} must have positive integer x, y, and z values.`)}function Cd(s){return Number.isInteger(s.x)&&Number.isInteger(s.y)&&Number.isInteger(s.z)}function qc(s,t){const e=s.headers.get(t);if(!e)return;const n=Number(e);return Number.isFinite(n)?n:void 0}const _l="hytopia-part",yl=1,xl=16384,ze=64;function Rd(){return`part-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function Fu(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Part file is invalid.");const t=s;if(t.format!==_l||t.version!==yl)throw new Error("Part file format is not supported.");if(!t.blocks||typeof t.blocks!="object"||Array.isArray(t.blocks))throw new Error("Part has no blocks.");const e={};for(const[r,o]of Object.entries(t.blocks)){const a=Cl(r);if(!Number.isInteger(a.x)||!Number.isInteger(a.y)||!Number.isInteger(a.z))throw new Error(`Part block coordinate is invalid: ${r}`);Mi(o)!==0&&(e[Er(a)]=o)}let n=0;for(const r of Object.values(e))Mi(r)!==0&&(n+=1);if(n===0)throw new Error("Part has no blocks.");if(n>xl)throw new Error(`Part has more than ${xl} blocks.`);const i=am(t.size,"Part size");if(i.x<1||i.y<1||i.z<1||i.x>ze||i.y>ze||i.z>ze)throw new Error(`Part size must be between 1 and ${ze} blocks on each axis.`);return{anchor:t.anchor?am(t.anchor,"Part anchor"):{x:0,y:0,z:0},blockCount:n,blockTypes:Array.isArray(t.blockTypes)?t.blockTypes:[],blocks:e,createdAt:typeof t.createdAt=="number"?t.createdAt:Date.now(),format:_l,id:typeof t.id=="string"&&t.id?t.id:Rd(),size:i,title:typeof t.title=="string"&&t.title.trim()?t.title.trim():"Untitled Part",updatedAt:typeof t.updatedAt=="number"?t.updatedAt:Date.now(),version:yl}}function uA(s){const t={x:s.max.x-s.min.x+1,y:s.max.y-s.min.y+1,z:s.max.z-s.min.z+1};if(t.x>ze||t.y>ze||t.z>ze)throw new Error(`Part size must be at most ${ze} blocks on each axis.`);let e=0;for(const o of s.blocks)Mi(o.value)!==0&&(e+=1);if(e===0)throw new Error("No blocks selected for part.");if(e>xl)throw new Error(`Part has more than ${xl} blocks.`);const n=new Set,i={};for(const o of s.blocks){const a={x:o.coordinate.x-s.min.x,y:o.coordinate.y-s.min.y,z:o.coordinate.z-s.min.z},l=Mi(o.value);l!==0&&n.add(l),i[Er(a)]=o.value}const r=Date.now();return{anchor:{x:0,y:0,z:0},blockCount:e,blockTypes:s.blockTypes.filter(o=>n.has(o.id)),blocks:i,createdAt:r,format:_l,id:Rd(),size:t,title:s.title,updatedAt:r,version:yl}}function dA(s,t="Imported Part"){return Fu({anchor:s.anchor??{x:0,y:0,z:0},blockTypes:s.blockTypes??[],blocks:s.blocks??{},createdAt:Date.now(),format:_l,id:Rd(),size:s.size,title:s.title||t,updatedAt:Date.now(),version:yl})}function am(s,t){if(!s||typeof s!="object"||Array.isArray(s))throw new Error(`${t} is invalid.`);const e=s,n={x:Number(e.x),y:Number(e.y),z:Number(e.z)};if(!Number.isInteger(n.x)||!Number.isInteger(n.y)||!Number.isInteger(n.z))throw new Error(`${t} is invalid.`);return n}const a0=document.querySelector("#app");if(!a0)throw new Error("App root not found.");const Ia=new Wt,qs=new L,lm=new L,cm=new ut,fA=new ut,pA=new L(0,1,0),Vn=new L,cs=new L,hm=new Dt,$r=new Bn,$s=new L(1,1,1),Ys=new Wt,um=new Dt,Ks=new bl,Pa=new ke,Xn=document.createElement("input");Xn.type="file";Xn.accept=".json,application/json";Xn.style.display="none";document.body.append(Xn);const mA=256,gA=15,_A=2,dm=.0025,fm=Math.PI/2-.1,di="color",pm="tCube",$c="horizonColor",yA="/voxcinder/world-editor/skyboxes/partly-cloudy",xA="/voxcinder/world-editor/maps/boilerplate.json",vA="/voxcinder/",mm=[new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href],MA="exploreMapSource",SA="mode",bA="soloMode",Yr=new Sn(0,0,0,"YXZ"),Zs=new L,La=new L,EA=50,Yc=1.02,ui=.045,Kc="world-editor-sidebar-sections",TA="world-editor-autosave",gm="world-editor-parts",_m=500,wA="world-editor-db",bn="autosaves",l0="view-state",c0="slots:index",h0="slots:current",ym="default",xm="Default Slot",AA=800,CA=500,RA=8,IA=1,PA=1,Ba=2,LA=.4,Zc=56,BA=.05,DA=220,UA=12,vm=1,Mm=.8,Sm=.5,bm="worldEditorInstanceLightLevel",Em="worldEditorInstanceSkyLight",Kr="vWorldEditorInstanceLightLevel",Zr="vWorldEditorInstanceSkyLight",u0=15,NA=Math.ceil((u0+1)/ht),Tm="worldEditorStaticEntityMaterialSetup",kA=36,FA=144,wm=.8,OA=new ut(ar(180/255),ar(180/255),ar(180/255)),Am=52,Cm=96,zA=6,VA="/voxcinder/world-editor/particles/smoke.png",HA=192,Rm=4,GA="/voxcinder/world-editor/audio/sfx/damage/hit-wood.mp3",WA=.035,XA=1,qA=1e3,$A="/voxcinder/world-editor/audio/sfx/ui/inventory-place-item.mp3",YA=.08,jr=640,Jr=360,Im="image/jpeg",Pm=.74,d0="hytopiaDisplayName",KA=1,ZA=1e3,Lm={ULTRA:{multiplier:2},HIGH:{devicePixelRatioCap:3,multiplier:1},MEDIUM:{devicePixelRatioCap:2,multiplier:1},LOW:{devicePixelRatioCap:1,multiplier:.85},POWER_SAVING:{devicePixelRatioCap:1,multiplier:.5}},js={ULTRA:{distance:600,fog:{enabled:!0,far:550,near:320}},HIGH:{distance:300,fog:{enabled:!0,far:300,near:160}},MEDIUM:{distance:150,fog:{enabled:!0,far:150,near:80}},LOW:{distance:75,fog:{enabled:!0,far:75,near:36}},POWER_SAVING:{distance:50,fog:{enabled:!0,far:50,near:16}}};class Bm extends He{constructor(t){const e=Qn.clone(me.cube.uniforms);e[pm].value=t,e[di]={value:new ut},super({vertexShader:me.cube.vertexShader,fragmentShader:me.cube.fragmentShader.replace("void main() {",`
            uniform vec3 ${di};
            void main() {
          `).replace("gl_FragColor = texColor;",`
            gl_FragColor = texColor;
            gl_FragColor.rgb *= ${di};
          `),uniforms:e,side:Ze,depthWrite:!1,fog:!1})}get color(){return this.uniforms[di].value}get map(){return this.uniforms[pm].value}}class Dm extends He{constructor(){super({vertexShader:`
        varying vec3 vDirection;

        void main() {
          vDirection = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 ${di};
        uniform vec3 ${$c};
        varying vec3 vDirection;

        void main() {
          float horizonMix = smoothstep(-0.25, 0.45, vDirection.y);
          float zenithBoost = smoothstep(0.1, 1.0, vDirection.y);
          vec3 baseColor = mix(${$c}, ${di}, horizonMix);
          vec3 finalColor = baseColor * 0.78 + ${di} * zenithBoost * 0.1;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,uniforms:{[di]:{value:new ut},[$c]:{value:new ut(.42,.5,.6)}},side:Ze,depthWrite:!1,fog:!1})}get color(){return this.uniforms[di].value}}var Xm;class jA{constructor(t){C(this,"container");C(this,"viewport");C(this,"renderer");C(this,"camera");C(this,"scene");C(this,"chunkLayer",new Qe);C(this,"entityLayer",new Qe);C(this,"entityAmbientLight");C(this,"buildPlane");C(this,"hoverBox");C(this,"hoverIndicatorRoot",new Qe);C(this,"crosshair");C(this,"startupLoadingOverlay");C(this,"startupLoadingSubtitle");C(this,"mobileMoveStick");C(this,"mobileMoveStickThumb");C(this,"sidebar");C(this,"sidebarToggleButton");C(this,"historyControls");C(this,"undoButton");C(this,"redoButton");C(this,"toolbelt");C(this,"toolToggleButton");C(this,"paletteContainer");C(this,"paletteFilterInput");C(this,"partPaletteContainer");C(this,"partFilterInput");C(this,"partCreateButton");C(this,"partExportButton");C(this,"partImportButton");C(this,"partPublishButton");C(this,"partRenameButton");C(this,"partDeleteButton");C(this,"partSelectionStatus");C(this,"entityListContainer");C(this,"entityOptionsInput");C(this,"entityAddButton");C(this,"entitySaveButton");C(this,"entityDeleteButton");C(this,"exportButton");C(this,"autosaveSlotSelect");C(this,"autosaveSlotNewButton");C(this,"autosaveSlotDuplicateButton");C(this,"autosaveSlotRenameButton");C(this,"autosaveSlotDeleteButton");C(this,"autosaveSlotClearButton");C(this,"lightingAmbientInput");C(this,"fogColorInput");C(this,"skyboxIntensityInput");C(this,"resolutionPresetInput");C(this,"viewDistancePresetInput");C(this,"viewDistanceCustomInput");C(this,"templateThemeSelect");C(this,"templateSeedInput");C(this,"templateSizeInput");C(this,"templateHeightInput");C(this,"templateApplyButton");C(this,"debugPanel");C(this,"debugSummaryLine");C(this,"debugMemoryLine");C(this,"debugRenderLine");C(this,"debugSceneLine");C(this,"chunkMesherWorker");C(this,"cubeTextureLoader",new vy);C(this,"particleTextureLoader",new bg);C(this,"audioLoader",new Ry);C(this,"audioListener",new Uy);C(this,"gltfLoader",new zb);C(this,"chunkBatchRenderer",new kT(this.chunkLayer));C(this,"chunkMeshManager",null);C(this,"chunkBlockMaterialManager",null);C(this,"chunkRendererHost",null);C(this,"entityMeshManager");C(this,"preOcclusionChunkModes",new Map);C(this,"nextPreOcclusionChunkModes",new Map);C(this,"entityModelCache",new Map);C(this,"entityFallbackObjects",new Map);C(this,"entityRenderObjects",new Set);C(this,"deferredEntityDisposals",[]);C(this,"blockBreakEmitters",new Map);C(this,"exclusiveAudioStates",new Map);C(this,"audioBufferCache",new Map);C(this,"blockHitDustEmitter",null);C(this,"selectedEntityMarker",null);C(this,"world",new Hc);C(this,"atlas",null);C(this,"atlasSnapshotCache",null);C(this,"selectedBlockTypeId",((Xm=is[0])==null?void 0:Xm.id)??1);C(this,"parts",[]);C(this,"partPreviewObjectUrls",new Map);C(this,"selectedPartId",null);C(this,"partFilter","");C(this,"partSelectionStart",null);C(this,"partSelectionEnd",null);C(this,"partSelectionBounds",null);C(this,"partSelectionHasBlocks",!1);C(this,"paletteFilter","");C(this,"hoveredPlacement",null);C(this,"hoveredBlock",null);C(this,"hoveredBlockHitPoint",null);C(this,"lastPointerEvent",null);C(this,"pointerDownEvent",null);C(this,"pointerLocked",!1);C(this,"mobileControlsEnabled",window.matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0);C(this,"mobileMoveTouchId",null);C(this,"mobileLookTouchId",null);C(this,"mobilePinchTouchIdA",null);C(this,"mobilePinchTouchIdB",null);C(this,"mobilePinchLastDistance",0);C(this,"mobileMoveStart",new Wt);C(this,"mobileMoveCurrent",new Wt);C(this,"mobileLookLast",new Wt);C(this,"mobileMoveInputX",0);C(this,"mobileMoveInputY",0);C(this,"mobileTapCandidates",new Map);C(this,"sidebarSwipeTouchId",null);C(this,"sidebarSwipeStartedOpen",!1);C(this,"sidebarSwipeStartX",0);C(this,"sidebarSwipeStartY",0);C(this,"sidebarSwipeLastX",0);C(this,"sidebarSwipeLastY",0);C(this,"mobileSidebarOpen",!1);C(this,"mobileSidebarContentVisible",!1);C(this,"debugVisible",!1);C(this,"lastDebugTouchToggleAt",0);C(this,"suppressTouchToolActions",!1);C(this,"fileName","untitled-world-map.json");C(this,"currentAutosaveSlotId",ym);C(this,"autosaveSlots",[]);C(this,"frameCounter",0);C(this,"fps",0);C(this,"lastFpsSampleAt",performance.now());C(this,"nextWorkerRequestId",1);C(this,"nextChunkBuildGeneration",1);C(this,"activeChunkBuildGeneration",0);C(this,"pendingChunkBuildPriorities",new Map);C(this,"pendingWorkerBlockUpdates",new Map);C(this,"chunkBuildWaiters",[]);C(this,"inFlightChunkBuildIds",new Set);C(this,"inFlightChunkBuildPriorities",new Map);C(this,"deferredInteractiveChunkBuildResults",[]);C(this,"deferredBackgroundChunkBuildResults",[]);C(this,"chunkBuildRequestGenerations",new Map);C(this,"lastInteractiveChunkBuildRequestAt",-1/0);C(this,"workerSyncedChunkIds",new Set);C(this,"chunkBuildDispatchInProgress",!1);C(this,"fogColor",new ut(1,1,1));C(this,"skyboxIntensity",1);C(this,"skyboxMesh",null);C(this,"pendingSkyboxTexture",null);C(this,"spectatorPitch",.95);C(this,"spectatorYaw",.75);C(this,"pressedKeys",new Set);C(this,"lightingAmbient",1);C(this,"fogColorHex","#ffffff");C(this,"skyboxUiIntensity",1);C(this,"resolutionPreset","MEDIUM");C(this,"viewDistancePreset","MEDIUM");C(this,"viewDistanceCustomDistance",js.MEDIUM.distance);C(this,"currentTool","build");C(this,"undoStack",[]);C(this,"redoStack",[]);C(this,"autosaveDirtyChunkIds",new Set);C(this,"autosaveEntitiesDirty",!1);C(this,"autosaveFullWorldDirty",!0);C(this,"selectedEntityKey",null);C(this,"autosaveTimeoutId",null);C(this,"viewStateAutosaveTimeoutId",null);C(this,"handleResize",()=>{const t=this.viewport.clientWidth,e=this.viewport.clientHeight;this.camera.aspect=t/Math.max(e,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)});C(this,"handleSidebarTransitionEnd",t=>{t.target!==this.sidebar||t.propertyName!=="transform"||this.mobileSidebarOpen||this.setMobileSidebarContentVisible(!1)});C(this,"handlePointerMove",t=>{if(t.pointerType!=="touch"){if(this.pointerLocked){this.updateSpectatorRotation(t.movementX,t.movementY),this.updateHoverFromScreenCenter();return}this.lastPointerEvent=t,this.mobileControlsEnabled?this.updateHoverFromPointer(t):this.clearHover()}});C(this,"handlePointerDown",t=>{var e,n;if(t.pointerType!=="touch"){if(this.resumeAudioContext(),!this.pointerLocked&&!this.mobileControlsEnabled){(n=(e=this.renderer.domElement).requestPointerLock)==null||n.call(e),this.pointerDownEvent=null;return}this.lastPointerEvent=t,this.updateHoverFromScreenCenter(),this.pointerDownEvent=t}});C(this,"handlePointerUp",t=>{if(t.pointerType==="touch"||(this.pointerLocked?this.updateHoverFromScreenCenter():(this.lastPointerEvent=t,this.mobileControlsEnabled?this.updateHoverFromPointer(t):this.clearHover()),!this.pointerDownEvent))return;const e=Math.hypot(t.clientX-this.pointerDownEvent.clientX,t.clientY-this.pointerDownEvent.clientY),n=this.pointerDownEvent.button;this.pointerDownEvent=null,!(e>4)&&this.applyCurrentTool(n)});C(this,"handleKeyDown",t=>{if(Vm(t.target))return;const e=zm(t.code);if(this.pressedKeys.add(e),t.ctrlKey||t.metaKey){if(t.key.toLowerCase()==="z"&&!t.shiftKey){t.preventDefault(),this.undo();return}if(t.key.toLowerCase()==="y"||t.key.toLowerCase()==="z"&&t.shiftKey){t.preventDefault(),this.redo();return}}if(t.key.toLowerCase()==="g"){this.toggleDebugPanel();return}if(t.code==="Space"){t.preventDefault(),t.repeat||this.setMobileSidebarOpen(!this.mobileSidebarOpen);return}if(t.code==="KeyM"){t.preventDefault(),t.repeat||this.toggleToolMode();return}});C(this,"handleKeyUp",t=>{Vm(t.target)||this.pressedKeys.delete(zm(t.code))});C(this,"handleTouchStart",t=>{if(this.resumeAudioContext(),t.touches.length!==5){if(!this.mobileControlsEnabled)return;t.preventDefault();const n=this.viewport.clientWidth;for(const i of Array.from(t.changedTouches)){const r=i.clientX<n*LA?"move":"look";this.mobileTapCandidates.set(i.identifier,{zone:r,startX:i.clientX,startY:i.clientY,lastX:i.clientX,lastY:i.clientY,moved:!1,time:performance.now()}),r==="move"&&this.mobileMoveTouchId===null?(this.mobileMoveTouchId=i.identifier,this.mobileMoveStart.set(i.clientX,i.clientY),this.mobileMoveCurrent.copy(this.mobileMoveStart),this.updateMobileMoveStick()):r==="look"&&this.mobileLookTouchId===null&&(this.mobileLookTouchId=i.identifier,this.mobileLookLast.set(i.clientX,i.clientY),this.updateHoverFromClientPosition(i.clientX,i.clientY))}this.updateMobilePinchState(t.touches);return}const e=performance.now();e-this.lastDebugTouchToggleAt<AA||(this.lastDebugTouchToggleAt=e,this.cancelActiveTouchInteractions(),this.suppressTouchToolActions=!0,t.preventDefault(),t.stopPropagation(),this.toggleDebugPanel())});C(this,"handleTouchMove",t=>{if(this.mobileControlsEnabled){t.preventDefault(),this.updateMobilePinchState(t.touches);for(const e of Array.from(t.changedTouches)){const n=this.mobileTapCandidates.get(e.identifier);if(n&&(n.lastX=e.clientX,n.lastY=e.clientY,Math.hypot(e.clientX-n.startX,e.clientY-n.startY)>UA&&(n.moved=!0)),e.identifier===this.mobileMoveTouchId)this.mobileMoveCurrent.set(e.clientX,e.clientY),this.updateMobileMoveStick();else if(e.identifier===this.mobileLookTouchId){if(this.mobilePinchTouchIdA===e.identifier||this.mobilePinchTouchIdB===e.identifier){this.mobileLookLast.set(e.clientX,e.clientY);continue}this.updateSpectatorRotation(e.clientX-this.mobileLookLast.x,e.clientY-this.mobileLookLast.y),this.mobileLookLast.set(e.clientX,e.clientY),this.updateHoverFromClientPosition(e.clientX,e.clientY)}}}});C(this,"handleTouchEnd",t=>{if(this.mobileControlsEnabled){if(t.preventDefault(),this.suppressTouchToolActions){t.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(t.changedTouches);return}this.finishTouchSequence(t.changedTouches)}});C(this,"handleTouchCancel",t=>{if(this.mobileControlsEnabled){if(t.preventDefault(),this.suppressTouchToolActions){t.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(t.changedTouches);return}this.finishTouchSequence(t.changedTouches,!0)}});C(this,"handlePointerLockChange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,this.pointerLocked&&this.updateHoverFromScreenCenter()});C(this,"handleSidebarTouchStart",t=>{if(t.touches.length!==1){this.resetSidebarSwipeState();return}const e=t.touches[0];if(!this.mobileSidebarOpen){const n=this.sidebarToggleButton.getBoundingClientRect();if(e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom){this.resetSidebarSwipeState();return}}this.sidebarSwipeTouchId=e.identifier,this.sidebarSwipeStartedOpen=this.mobileSidebarOpen,this.sidebarSwipeStartX=e.clientX,this.sidebarSwipeStartY=e.clientY,this.sidebarSwipeLastX=e.clientX,this.sidebarSwipeLastY=e.clientY});C(this,"handleSidebarPointerDown",t=>{if(this.mobileSidebarOpen)return;const e=this.sidebarToggleButton.getBoundingClientRect();t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom||this.setMobileSidebarOpen(!0)});C(this,"handleSidebarTouchMove",t=>{if(this.sidebarSwipeTouchId===null)return;const e=Array.from(t.changedTouches).find(r=>r.identifier===this.sidebarSwipeTouchId);if(!e)return;this.sidebarSwipeLastX=e.clientX,this.sidebarSwipeLastY=e.clientY;const n=this.sidebarSwipeLastX-this.sidebarSwipeStartX,i=this.sidebarSwipeLastY-this.sidebarSwipeStartY;Math.abs(n)>16&&Math.abs(n)>Math.abs(i)&&t.preventDefault()});C(this,"handleSidebarTouchEnd",t=>{if(this.sidebarSwipeTouchId===null)return;const e=Array.from(t.changedTouches).find(o=>o.identifier===this.sidebarSwipeTouchId);if(!e)return;const n=e.clientX-this.sidebarSwipeStartX,i=e.clientY-this.sidebarSwipeStartY,r=this.sidebarSwipeStartedOpen;if(this.resetSidebarSwipeState(),r&&n<-72&&Math.abs(n)>Math.abs(i)*1.2){this.setMobileSidebarOpen(!1);return}!r&&n>40&&Math.abs(n)>Math.abs(i)*1.2&&this.setMobileSidebarOpen(!0)});C(this,"handleSidebarTouchCancel",()=>{this.resetSidebarSwipeState()});C(this,"handleBeforeUnload",()=>{this.flushAutosave(),this.flushViewStateAutosave()});C(this,"handleChunkMesherWorkerMessage",t=>{const e=t.data;if(e.type!=="built_chunk")return;const n=this.chunkBuildRequestGenerations.get(e.requestId);if(this.chunkBuildRequestGenerations.delete(e.requestId),n!==this.activeChunkBuildGeneration){this.inFlightChunkBuildIds.delete(e.chunkId),this.inFlightChunkBuildPriorities.delete(e.chunkId),this.resolveChunkBuildWaiters();return}const i={requestId:e.requestId,chunkId:e.chunkId,geometry:e.geometry};(this.inFlightChunkBuildPriorities.get(e.chunkId)??0)>=Ba?this.deferredInteractiveChunkBuildResults.push(i):this.deferredBackgroundChunkBuildResults.push(i)});C(this,"renderLoop",()=>{var n;requestAnimationFrame(this.renderLoop),this.flushQueuedWorkerBlockUpdates(),this.processChunkBuildQueueFrame(this.activeChunkBuildGeneration),this.flushDeferredChunkBuildResults();const t=this.updateSpectatorCamera(1/60);this.pointerLocked&&t&&this.updateHoverFromScreenCenter(),this.updateSkybox(),this.chunkMeshManager||this.chunkBatchRenderer.update(1/60),this.updateBlockBreakEffects(1/60),(n=this.chunkBlockMaterialManager)==null||n.update(),this.updateViewDistanceVisibility(),this.renderer.render(this.scene,this.camera),this.flushDeferredEntityDisposals(),this.frameCounter++;const e=performance.now();e-this.lastFpsSampleAt>=1e3&&(this.fps=Math.round(this.frameCounter*1e3/(e-this.lastFpsSampleAt)),this.frameCounter=0,this.lastFpsSampleAt=e,this.updateDebugPanel())});this.container=document.createElement("div"),this.container.className="app-shell",this.viewport=document.createElement("div"),this.viewport.className="viewport",this.container.append(this.viewport);const e=document.createElement("div");e.className="overlay",this.container.append(e),this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",e.append(this.crosshair),this.startupLoadingOverlay=document.createElement("div"),this.startupLoadingOverlay.className="world-editor-loading-overlay",this.startupLoadingOverlay.innerHTML=`
      <div class="world-editor-loading-panel">
        <div class="world-editor-loading-title">Loading</div>
        <div class="world-editor-loading-subtitle">
          <span class="world-editor-loading-spinner" aria-hidden="true"></span>
        </div>
      </div>
    `,this.startupLoadingSubtitle=document.createElement("span"),this.startupLoadingSubtitle.textContent="Preparing editor...",this.startupLoadingOverlay.querySelector(".world-editor-loading-subtitle").append(this.startupLoadingSubtitle),e.append(this.startupLoadingOverlay),this.mobileMoveStick=document.createElement("div"),this.mobileMoveStick.className="mobile-move-stick",this.mobileMoveStick.hidden=!0,this.mobileMoveStickThumb=document.createElement("div"),this.mobileMoveStickThumb.className="mobile-move-stick-thumb",this.mobileMoveStick.append(this.mobileMoveStickThumb),e.append(this.mobileMoveStick),this.scene=new uf,this.scene.add(this.chunkLayer),this.scene.add(this.entityLayer),this.entityAmbientLight=new Ay(new ut(16777215),1),this.scene.add(this.entityAmbientLight),this.camera=new $e(55,1,.1,1e3),this.camera.position.set(18,20,18),this.camera.rotation.order="YXZ",this.camera.add(this.audioListener),this.applySpectatorCameraOrientation(),this.renderer=new ap({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=we,this.viewport.append(this.renderer.domElement),this.chunkBatchRenderer.setFogProvider(this.createFogUniformProvider()),this.entityMeshManager=new KE({addToScene:r=>this.entityLayer.add(r),createRenderMaterial:r=>this.createEntityRenderMaterial(r),getViewDistance:()=>this.getCurrentViewDistance(),loadEntityModelTemplate:r=>this.loadEntityModelTemplate(r),removeFromScene:r=>this.entityLayer.remove(r)}),this.buildPlane=new Me(new xr(512,512),new Yn({visible:!1,side:Ke})),this.buildPlane.rotation.x=-Math.PI/2,this.buildPlane.position.y=-.5,this.scene.add(this.buildPlane),this.hoverBox=new Hh(new If(new pi(1.01,1.01,1.01)),new Qa({color:"#f5b942",transparent:!0,opacity:.95})),this.hoverBox.renderOrder=1e3,this.hoverBox.visible=!1,this.scene.add(this.hoverBox),this.hoverIndicatorRoot.add(this.createHoverFrameIndicator()),this.hoverIndicatorRoot.renderOrder=1e3,this.hoverIndicatorRoot.visible=!1,this.scene.add(this.hoverIndicatorRoot);const n=document.createElement("div");n.className="topbar",n.innerHTML=`
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
        <button class="button icon-button has-tooltip" data-action="explore" data-tooltip="Explore" type="button" aria-label="Explore">
          <span class="topbar-button-icon" aria-hidden="true">
            <svg viewBox="0 -960 960 960" fill="currentColor">
              <path d="M520-40v-240l-84-80-40 176-276-56 16-80 192 40 64-324-72 28v136h-80v-188l158-68q35-15 51.5-19.5T480-720q21 0 39 11t29 29l40 64q26 42 70.5 69T760-520v80q-66 0-123.5-27.5T540-540l-24 120 84 80v300h-80Zm20-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"></path>
            </svg>
          </span>
        </button>
        <button class="button icon-button has-tooltip" data-action="gallery" data-tooltip="Gallery" type="button" aria-label="Gallery">
          <span class="topbar-button-icon" aria-hidden="true">
            <svg viewBox="0 -960 960 960" fill="currentColor">
              <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm600-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520H720Zm40-80h80v-80h-80v80ZM120-280h400v-400H120v400Zm40-80h320L375-500l-75 100-55-73-85 113Zm560 160q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200H720Zm40-80h80v-80h-80v80Zm-640 0v-400 400Zm640-320v-80 80Zm0 320v-80 80Z"></path>
            </svg>
          </span>
        </button>
        <button class="button primary icon-button has-tooltip" data-action="publish" data-tooltip="Publish" type="button" aria-label="Publish">
          <span class="topbar-button-icon" aria-hidden="true">
            <svg viewBox="0 -960 960 960" fill="currentColor">
              <path d="M440-160v-326L336-382l-56-58 200-200 200 200-56 58-104-104v326h-80ZM160-600v-120q0-33 23.5-56.5T240-800h480q33 0 56.5 23.5T800-720v120h-80v-120H240v120h-80Z"></path>
            </svg>
          </span>
        </button>
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
      <details class="sidebar-section" data-section="parts">
        <summary class="sidebar-summary">
          <span>Parts</span>
        </summary>
        <div class="sidebar-content">
          <div class="generator-grid">
            <button class="button" data-part="create" type="button">Create</button>
            <button class="button" data-part="rename" type="button">Rename</button>
            <button class="button" data-part="delete" type="button">Delete</button>
            <button class="button" data-part="import" type="button">Import</button>
            <button class="button" data-part="export" type="button">Export</button>
            <button class="button" data-part="publish" type="button">Publish</button>
          </div>
          <input class="generator-input" data-part="filter" type="text" name="part_filter" placeholder="Filter parts" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" data-form-type="other" data-lpignore="true" data-1p-ignore="true" />
          <p class="part-selection-status" data-part="selection-status"></p>
          <div class="palette" data-part="palette"></div>
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
    `,this.sidebar.append(this.sidebarToggleButton),this.sidebar.addEventListener("transitionend",this.handleSidebarTransitionEnd),this.paletteContainer=i.querySelector('[data-pattern="palette"]'),this.paletteFilterInput=i.querySelector('[data-pattern="filter"]'),this.partPaletteContainer=i.querySelector('[data-part="palette"]'),this.partFilterInput=i.querySelector('[data-part="filter"]'),this.partCreateButton=i.querySelector('[data-part="create"]'),this.partPublishButton=i.querySelector('[data-part="publish"]'),this.partRenameButton=i.querySelector('[data-part="rename"]'),this.partDeleteButton=i.querySelector('[data-part="delete"]'),this.partExportButton=i.querySelector('[data-part="export"]'),this.partImportButton=i.querySelector('[data-part="import"]'),this.partSelectionStatus=i.querySelector('[data-part="selection-status"]'),this.entityListContainer=i.querySelector('[data-entity="list"]'),this.entityOptionsInput=i.querySelector('[data-entity="options"]'),this.entityAddButton=i.querySelector('[data-entity="add"]'),this.entitySaveButton=i.querySelector('[data-entity="save"]'),this.entityDeleteButton=i.querySelector('[data-entity="delete"]'),this.exportButton=i.querySelector('[data-action="export"]'),this.autosaveSlotSelect=i.querySelector('[data-slot="select"]'),this.autosaveSlotNewButton=i.querySelector('[data-slot="new"]'),this.autosaveSlotDuplicateButton=i.querySelector('[data-slot="duplicate"]'),this.autosaveSlotRenameButton=i.querySelector('[data-slot="rename"]'),this.autosaveSlotDeleteButton=i.querySelector('[data-slot="delete"]'),this.autosaveSlotClearButton=i.querySelector('[data-slot="clear"]'),this.resolutionPresetInput=i.querySelector('[data-resolution="preset"]'),this.viewDistancePresetInput=i.querySelector('[data-view-distance="preset"]'),this.viewDistanceCustomInput=i.querySelector('[data-view-distance="custom"]'),this.lightingAmbientInput=i.querySelector('[data-lighting="ambient"]'),this.fogColorInput=i.querySelector('[data-lighting="fog-color"]'),this.skyboxIntensityInput=i.querySelector('[data-lighting="skybox-intensity"]'),this.templateThemeSelect=i.querySelector('[data-generator="theme"]'),this.templateSeedInput=i.querySelector('[data-generator="seed"]'),this.templateSizeInput=i.querySelector('[data-generator="size"]'),this.templateHeightInput=i.querySelector('[data-generator="height"]'),this.templateApplyButton=i.querySelector('[data-generator="apply"]'),this.paletteFilterInput.addEventListener("input",()=>{this.paletteFilter=this.paletteFilterInput.value,this.rebuildPalette()}),this.partFilterInput.addEventListener("input",()=>{this.partFilter=this.partFilterInput.value,this.rebuildPartPalette()}),this.restoreSidebarSectionState(i),this.bindSidebarSectionState(i),i.addEventListener("pointerdown",this.handleSidebarPointerDown),i.addEventListener("touchstart",this.handleSidebarTouchStart,{passive:!0}),i.addEventListener("touchmove",this.handleSidebarTouchMove,{passive:!1}),i.addEventListener("touchend",this.handleSidebarTouchEnd,{passive:!0}),i.addEventListener("touchcancel",this.handleSidebarTouchCancel,{passive:!0}),this.debugPanel=document.createElement("aside"),this.debugPanel.className="debug-panel",this.debugPanel.hidden=!0,this.debugPanel.innerHTML="<h2>Debug</h2>",this.debugSummaryLine=document.createElement("p"),this.debugMemoryLine=document.createElement("p"),this.debugRenderLine=document.createElement("p"),this.debugSceneLine=document.createElement("p"),this.debugPanel.append(this.debugSummaryLine,this.debugMemoryLine,this.debugRenderLine,this.debugSceneLine),this.historyControls=document.createElement("div"),this.historyControls.className="history-controls",this.historyControls.innerHTML=`
      <button class="history-button has-tooltip tooltip-top" data-action="undo" data-tooltip="Undo" type="button" aria-label="Undo">
        <span class="history-button-icon" aria-hidden="true">
          <svg viewBox="0 -960 960 960" fill="currentColor">
            <path d="M280-200v-80h194q63 0 106.5-43.5T624-430q0-63-43.5-106.5T474-580H290l84 84-56 56-180-180 180-180 56 56-84 84h184q97 0 168.5 71.5T714-430q0 97-71.5 168.5T474-190H280Z"/>
          </svg>
        </span>
      </button>
      <button class="history-button has-tooltip tooltip-top" data-action="redo" data-tooltip="Redo" type="button" aria-label="Redo">
        <span class="history-button-icon" aria-hidden="true">
          <svg viewBox="0 -960 960 960" fill="currentColor">
            <path d="M680-200H486q-97 0-168.5-71.5T246-430q0-97 71.5-168.5T486-670h184l-84-84 56-56 180 180-180 180-56-56 84-84H486q-63 0-106.5 43.5T336-430q0 63 43.5 106.5T486-280h194v80Z"/>
          </svg>
        </span>
      </button>
    `,this.undoButton=this.historyControls.querySelector('[data-action="undo"]'),this.redoButton=this.historyControls.querySelector('[data-action="redo"]'),this.updateHistoryButtons(),this.toolbelt=document.createElement("div"),this.toolbelt.className="toolbelt",this.toolbelt.innerHTML=`
      <button class="tool-slot active has-tooltip tooltip-top" data-tool-toggle type="button" data-tooltip="${this.getToolLabel(this.currentTool)}">
        <span class="tool-slot-icon" aria-hidden="true">${this.getToolIconSvg(this.currentTool)}</span>
      </button>
    `,this.toolToggleButton=this.toolbelt.querySelector("[data-tool-toggle]"),this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(this.currentTool)),e.append(n,i,this.debugPanel,this.historyControls,this.toolbelt),t.append(this.container),this.chunkMesherWorker=new Worker(new URL("/voxcinder/world-editor/assets/chunkMesherWorker-DTBiahQx.js",import.meta.url),{type:"module"}),this.chunkMesherWorker.addEventListener("message",this.handleChunkMesherWorkerMessage),n.addEventListener("click",r=>{const o=r.target;o.closest("[data-action]")&&(r.preventDefault(),this.handleUiAction(o,Xn))}),i.addEventListener("click",r=>{this.handleUiAction(r.target,Xn)}),this.historyControls.addEventListener("click",r=>{this.handleUiAction(r.target,Xn)}),Xn.addEventListener("change",()=>{var o;const r=(o=Xn.files)==null?void 0:o[0];r&&this.importMap(r),Xn.value=""}),this.toolbelt.addEventListener("click",r=>{r.target.closest("[data-tool-toggle]")&&this.toggleToolMode()}),this.templateThemeSelect.addEventListener("change",()=>this.syncTemplateInputsToTheme()),this.templateApplyButton.addEventListener("click",()=>{this.applyThemeTemplate()}),this.autosaveSlotSelect.addEventListener("change",()=>{this.handleAutosaveSlotSelectionChange()}),this.autosaveSlotNewButton.addEventListener("click",()=>{this.createAutosaveSlotFromDefaultWorld()}),this.autosaveSlotDuplicateButton.addEventListener("click",()=>{this.duplicateCurrentAutosaveSlot()}),this.autosaveSlotRenameButton.addEventListener("click",()=>{this.renameCurrentAutosaveSlot()}),this.autosaveSlotDeleteButton.addEventListener("click",()=>{this.deleteCurrentAutosaveSlot()}),this.autosaveSlotClearButton.addEventListener("click",()=>{this.clearCurrentAutosaveSlot()}),this.partCreateButton.addEventListener("click",()=>{this.createPartFromSelection()}),this.partRenameButton.addEventListener("click",()=>{this.renameSelectedPart()}),this.partDeleteButton.addEventListener("click",()=>{this.deleteSelectedPart()}),this.partPublishButton.addEventListener("click",()=>{this.publishSelectedPart()}),this.partExportButton.addEventListener("click",()=>{this.exportSelectedPart()}),this.partImportButton.addEventListener("click",()=>{this.importPartFromFile()}),this.syncPartSelectionUi(),this.entityAddButton.addEventListener("click",()=>{this.addEntityAtHover()}),this.entitySaveButton.addEventListener("click",()=>{this.saveSelectedEntity()}),this.entityDeleteButton.addEventListener("click",()=>{this.deleteSelectedEntity()}),this.resolutionPresetInput.addEventListener("change",()=>this.handleResolutionChange()),this.viewDistancePresetInput.addEventListener("change",()=>this.handleViewDistanceChange()),this.viewDistanceCustomInput.addEventListener("input",()=>this.handleViewDistanceChange()),this.lightingAmbientInput.addEventListener("input",()=>this.handleLightingChange()),this.fogColorInput.addEventListener("input",()=>this.handleLightingChange()),this.skyboxIntensityInput.addEventListener("input",()=>this.handleLightingChange()),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),this.renderer.domElement.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),this.renderer.domElement.addEventListener("touchend",this.handleTouchEnd,{passive:!1}),this.renderer.domElement.addEventListener("touchcancel",this.handleTouchCancel,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("beforeunload",this.handleBeforeUnload),document.addEventListener("pointerlockchange",this.handlePointerLockChange),this.handleResize(),this.loadSkybox(yA),this.populateTemplateThemeOptions(),this.syncResolutionInputs(),this.syncViewDistanceInputs(),this.applyResolutionSettings(),this.applyViewDistanceSettings(),this.applyLightingSettings(),this.initializeWorld(),this.updateDebugPanel(),this.renderLoop()}async initializeWorld(){this.setStartupLoadingState("Restoring view...");try{await this.restoreAutosavedViewState(),this.setStartupLoadingState("Checking save slots..."),await this.initializeAutosaveSlots(),this.loadLocalParts(),this.setStartupLoadingState("Checking autosave...");const t=await this.getRestorableAutosavePayload(this.currentAutosaveSlotId);if(t)this.hideStartupLoadingOverlay(),await this.applyAutosavedWorldPayload(t,!1);else{this.setStartupLoadingState("Downloading world...");const e=await this.loadDefaultWorldMapPayload();this.hideStartupLoadingOverlay(),await this.applyDefaultWorldMapPayload(e,!1)}await this.importSharedMapFromUrlIfPresent(),await this.importSharedPartFromUrlIfPresent()}finally{this.startupLoadingOverlay.hidden||this.hideStartupLoadingOverlay()}}async importSharedMapFromUrlIfPresent(){const t=new URL(window.location.href),e=t.searchParams.get("map");e&&(t.searchParams.delete("map"),window.history.replaceState(null,"",t.toString()),await this.importPublishedMap(e))}async importSharedPartFromUrlIfPresent(){const t=new URL(window.location.href),e=t.searchParams.get("part");e&&(t.searchParams.delete("part"),window.history.replaceState(null,"",t.toString()),await this.importPublishedPartOrThrow(e))}setStartupLoadingState(t){this.startupLoadingSubtitle.textContent=t,this.startupLoadingOverlay.hidden=!1}hideStartupLoadingOverlay(){this.startupLoadingOverlay.hidden=!0}async initializeAutosaveSlots(){const t=await uC();if(t.length===0){const i=Um(ym,xm);this.autosaveSlots=[i],await Js(this.autosaveSlots),await Qr(i.id),this.currentAutosaveSlotId=i.id,this.syncAutosaveSlotControls();return}this.autosaveSlots=t;const e=await dC(),n=this.autosaveSlots.find(i=>i.id===e)??this.autosaveSlots[0];this.currentAutosaveSlotId=n.id,await Qr(n.id),this.syncAutosaveSlotControls()}syncAutosaveSlotControls(){this.autosaveSlotSelect.replaceChildren();for(const e of this.autosaveSlots){const n=document.createElement("option");n.value=e.id,n.textContent=e.name,n.selected=e.id===this.currentAutosaveSlotId,this.autosaveSlotSelect.append(n)}const t=this.autosaveSlots.length>1;this.autosaveSlotDeleteButton.disabled=!t,this.autosaveSlotDeleteButton.title=t?"Delete current slot":"At least one slot is required"}async handleAutosaveSlotSelectionChange(){const t=this.autosaveSlotSelect.value;if(!t||t===this.currentAutosaveSlotId){this.syncAutosaveSlotControls();return}await this.flushAutosave(),this.currentAutosaveSlotId=t,await Qr(this.currentAutosaveSlotId),this.syncAutosaveSlotControls();const e=await this.getRestorableAutosavePayload(this.currentAutosaveSlotId);if(e){await this.applyAutosavedWorldPayload(e,!1),this.updateStatus(`Loaded save slot "${this.getCurrentAutosaveSlotName()}".`);return}await this.loadDefaultWorldMap(!1),this.updateStatus(`Created default world in slot "${this.getCurrentAutosaveSlotName()}".`)}async createAutosaveSlot(t){const e=Um(sC(),t);return this.autosaveSlots=[...this.autosaveSlots,e],this.currentAutosaveSlotId=e.id,await Js(this.autosaveSlots),await Qr(this.currentAutosaveSlotId),this.syncAutosaveSlotControls(),e}async createAutosaveSlotFromDefaultWorld(){const t=`Slot ${this.autosaveSlots.length+1}`,e=window.prompt("New save slot name",t);if(e===null)return;const n=e.trim()||t;await this.flushAutosave();const i=await this.createAutosaveSlot(n);await this.loadDefaultWorldMap(!1),this.updateStatus(`Created save slot "${i.name}" with the default world.`)}async duplicateCurrentAutosaveSlot(){const t=this.getNextDuplicatedAutosaveSlotName();await this.flushAutosave();const e=await this.createAutosaveSlot(t);this.markFullWorldAutosaveDirty(),await this.flushAutosave(),this.updateStatus(`Duplicated save slot into "${e.name}".`)}getNextDuplicatedAutosaveSlotName(){const t=`${this.getCurrentAutosaveSlotName()} Copy`,e=new Set(this.autosaveSlots.map(i=>i.name));if(!e.has(t))return t;let n=2;for(;e.has(`${t} ${n}`);)n+=1;return`${t} ${n}`}async renameCurrentAutosaveSlot(){const t=this.autosaveSlots.find(i=>i.id===this.currentAutosaveSlotId);if(!t)return;const e=window.prompt("Rename save slot",t.name);if(e===null)return;const n=e.trim()||t.name;if(n===t.name){this.syncAutosaveSlotControls();return}this.autosaveSlots=this.autosaveSlots.map(i=>i.id===t.id?{...i,name:n}:i),await Js(this.autosaveSlots),this.syncAutosaveSlotControls(),this.updateStatus(`Renamed save slot to "${n}".`)}async deleteCurrentAutosaveSlot(){const t=this.autosaveSlots.find(o=>o.id===this.currentAutosaveSlotId);if(!t)return;if(this.autosaveSlots.length<=1){this.updateStatus("At least one save slot is required."),this.syncAutosaveSlotControls();return}if(!window.confirm(`Delete save slot "${t.name}"?`)){this.syncAutosaveSlotControls();return}const n=this.autosaveSlots.findIndex(o=>o.id===t.id),i=this.autosaveSlots[n+1]??this.autosaveSlots[n-1];this.autosaveSlots=this.autosaveSlots.filter(o=>o.id!==t.id),await Ou(t.id),this.currentAutosaveSlotId=i.id,await Js(this.autosaveSlots),await Qr(this.currentAutosaveSlotId),this.syncAutosaveSlotControls();const r=await this.getRestorableAutosavePayload(this.currentAutosaveSlotId);r?await this.applyAutosavedWorldPayload(r,!1):await this.loadDefaultWorldMap(!1),this.updateStatus(`Deleted save slot "${t.name}".`)}async clearCurrentAutosaveSlot(){const t=this.getCurrentAutosaveSlotName();window.confirm(`Clear save slot "${t}" and replace it with an empty map?`)&&(await this.resetToEmptyMap(!1),await this.setAutosaveSlotPublishMetadata(this.currentAutosaveSlotId,{editToken:void 0,lastPublishedAt:void 0,publishedMapId:void 0,sourceMapId:void 0,sourceUrl:void 0,sourceVersionId:void 0}),this.updateStatus(`Cleared save slot "${t}".`))}getCurrentAutosaveSlotName(){var t;return((t=this.autosaveSlots.find(e=>e.id===this.currentAutosaveSlotId))==null?void 0:t.name)??xm}getCurrentAutosaveSlot(){return this.autosaveSlots.find(t=>t.id===this.currentAutosaveSlotId)}getUniqueAutosaveSlotName(t){const e=t.trim()||"Imported Map",n=new Set(this.autosaveSlots.map(r=>r.name));if(!n.has(e))return e;let i=2;for(;n.has(`${e} ${i}`);)i+=1;return`${e} ${i}`}async setAutosaveSlotPublishMetadata(t,e){this.autosaveSlots=this.autosaveSlots.map(n=>n.id===t?{...n,...e}:n),await Js(this.autosaveSlots),this.syncAutosaveSlotControls()}setMobileSidebarOpen(t,e=!0){this.mobileSidebarOpen!==t&&(t&&this.setMobileSidebarContentVisible(!0),this.mobileSidebarOpen=t,this.container.classList.toggle("mobile-sidebar-open",this.mobileSidebarOpen),this.sidebarToggleButton.setAttribute("aria-expanded",String(this.mobileSidebarOpen)),this.resetSidebarSwipeState(),e&&this.scheduleViewStateAutosave())}setMobileSidebarContentVisible(t){this.mobileSidebarContentVisible!==t&&(this.mobileSidebarContentVisible=t,this.container.classList.toggle("mobile-sidebar-content-visible",this.mobileSidebarContentVisible))}handleUiAction(t,e){var i;const n=(i=t.closest("[data-action]"))==null?void 0:i.dataset.action;if(n){if(n==="menu"){this.setMobileSidebarOpen(!this.mobileSidebarOpen);return}n==="undo"?this.undo():n==="redo"?this.redo():n==="import"?e.click():n==="export"?this.exportMap():n==="explore"?this.openExploreMode():n==="gallery"?this.openGallery():n==="publish"&&this.publishCurrentSlot()}}async finishTouchSequence(t,e=!1){for(const n of Array.from(t)){const i=this.mobileTapCandidates.get(n.identifier);if(this.mobileTapCandidates.delete(n.identifier),n.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),n.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null),(n.identifier===this.mobilePinchTouchIdA||n.identifier===this.mobilePinchTouchIdB)&&(this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0),!i||e)continue;const r=performance.now()-i.time;i.moved||r>DA||(this.updateHoverFromClientPosition(i.lastX,i.lastY),await this.applyCurrentTool(0))}}cancelActiveTouchInteractions(){this.mobileTapCandidates.clear(),this.mobileLookTouchId=null,this.mobileMoveTouchId=null,this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0}cancelEndedTouchControls(t){for(const e of Array.from(t))this.mobileTapCandidates.delete(e.identifier),e.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),e.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null),(e.identifier===this.mobilePinchTouchIdA||e.identifier===this.mobilePinchTouchIdB)&&(this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0)}updateMobilePinchState(t){const e=Array.from(t);if(e.length!==2){this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0;return}const n=this.mobileTapCandidates.get(e[0].identifier),i=this.mobileTapCandidates.get(e[1].identifier);if((n==null?void 0:n.zone)!=="look"||(i==null?void 0:i.zone)!=="look"){this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0;return}const r=e[0].clientX-e[1].clientX,o=e[0].clientY-e[1].clientY,a=Math.hypot(r,o);if(this.mobilePinchTouchIdA!==e[0].identifier||this.mobilePinchTouchIdB!==e[1].identifier){this.mobilePinchTouchIdA=e[0].identifier,this.mobilePinchTouchIdB=e[1].identifier,this.mobilePinchLastDistance=a;return}const l=a-this.mobilePinchLastDistance;this.mobilePinchLastDistance=a,!(Math.abs(l)<.5)&&(Yr.copy(this.camera.rotation),Zs.set(0,0,-1).applyEuler(Yr),this.camera.position.addScaledVector(Zs,l*BA),this.scheduleViewStateAutosave(),this.updateHoverFromScreenCenter())}updateMobileMoveStick(){if(this.mobileMoveTouchId===null){this.mobileMoveStick.hidden=!0,this.mobileMoveInputX=0,this.mobileMoveInputY=0;return}const t=this.mobileMoveCurrent.x-this.mobileMoveStart.x,e=this.mobileMoveCurrent.y-this.mobileMoveStart.y,n=Math.hypot(t,e),i=Math.min(n,Zc),r=n>0?t/n:0,o=n>0?e/n:0,a=r*i,l=o*i;this.mobileMoveInputX=r*(i/Zc),this.mobileMoveInputY=o*(i/Zc),this.mobileMoveStick.hidden=!1,this.mobileMoveStick.style.left=`${this.mobileMoveStart.x}px`,this.mobileMoveStick.style.top=`${this.mobileMoveStart.y}px`,this.mobileMoveStickThumb.style.transform=`translate(${a}px, ${l}px)`}resetSidebarSwipeState(){this.sidebarSwipeTouchId=null,this.sidebarSwipeStartedOpen=!1,this.sidebarSwipeStartX=0,this.sidebarSwipeStartY=0,this.sidebarSwipeLastX=0,this.sidebarSwipeLastY=0}toggleDebugPanel(){this.debugVisible=!this.debugVisible,this.debugPanel.hidden=!this.debugVisible,this.updateStatus(this.debugVisible?"Debug mode enabled.":"Debug mode disabled."),this.updateDebugPanel()}async resetToEmptyMap(t=!0){var e;this.world.load({},is),this.selectedBlockTypeId=((e=this.world.blockTypes[0])==null?void 0:e.id)??1,this.fileName="untitled-world-map.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),t?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus("Started a new empty world map.")}async loadDefaultWorldMap(t=!0){try{const e=await this.loadDefaultWorldMapPayload();await this.applyDefaultWorldMapPayload(e,t)}catch(e){console.error(e),await this.resetToEmptyMap(t),this.updateStatus(`Default world map load failed: ${e.message}`)}}async loadDefaultWorldMapPayload(){const t=await fetch(xA,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load default map: ${t.status} ${t.statusText}`);return await t.json()}async applyDefaultWorldMapPayload(t,e){var n;this.world.load(t,is),this.selectedBlockTypeId=((n=this.world.blockTypes[0])==null?void 0:n.id)??this.selectedBlockTypeId,this.fileName="boilerplate.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),e?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),e?await this.flushAutosave():this.flushAutosave(),this.updateStatus("Loaded default world map.")}populateTemplateThemeOptions(){this.templateThemeSelect.replaceChildren();for(const t of Gc){const e=document.createElement("option");e.value=t.id,e.textContent=t.label,this.templateThemeSelect.append(e)}this.syncTemplateInputsToTheme()}syncTemplateInputsToTheme(){const t=Gc.find(e=>e.id===this.templateThemeSelect.value);t&&(this.templateSizeInput.value=String(t.defaultSize),this.templateHeightInput.value=String(t.defaultHeight))}async importMap(t){try{const e=JSON.parse(await t.text());await this.importMapPayload(e,{fileName:t.name,slotName:t.name.replace(/\.json$/i,"")||"Imported Map",status:`Imported ${t.name}.`})}catch(e){console.error(e),this.updateStatus(`Import failed: ${e.message}`)}}async importPublishedMap(t,e){try{this.updateStatus("Importing shared map..."),await this.importPublishedMapOrThrow(t,e)}catch(n){console.error(n),this.updateStatus(`Shared map import failed: ${n.message}`)}}async importPublishedMapOrThrow(t,e,n){const i=i0(t),r=e&&e!=="latest"?await Gw(i,e):await Hw(i);await this.importMapPayload(r.worldMap,{fileName:`${r.mapId}.json`,slotName:(n==null?void 0:n.trim())||`Imported ${r.mapId}`,sourceMapId:r.mapId,sourceUrl:Uu(r.mapId),sourceVersionId:r.versionId,status:`Imported shared map ${r.mapId}.`})}async importMapPayload(t,e){var i;await this.flushAutosave();const n=await this.createAutosaveSlot(this.getUniqueAutosaveSlotName(e.slotName));await this.setAutosaveSlotPublishMetadata(n.id,{sourceMapId:e.sourceMapId,sourceUrl:e.sourceUrl,sourceVersionId:e.sourceVersionId}),this.world.load(t,is),this.selectedBlockTypeId=((i=this.world.blockTypes[0])==null?void 0:i.id)??this.selectedBlockTypeId,this.fileName=e.fileName,this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),await this.flushAutosave(),this.updateStatus(`${e.status} Created save slot "${n.name}".`)}async publishCurrentSlot(){const t=this.getCurrentAutosaveSlot();if(!t){this.updateStatus("No save slot is selected.");return}const e=t.name||this.fileName.replace(/\.json$/i,"")||"Untitled Map";await this.openPublishDialog(t,e)}async publishSelectedPart(){const t=this.parts.find(e=>e.id===this.selectedPartId);if(!t){this.updateStatus("No part selected.");return}await new Promise(e=>{const n=document.createElement("div");n.className="modal-overlay",n.innerHTML=`
        <form class="publish-modal" data-part-publish="form">
          <header class="gallery-modal-header">
            <h2>Publish Part</h2>
            <button class="button" data-part-publish="cancel" type="button">Cancel</button>
          </header>
          <div class="publish-modal-body">
            <p class="gallery-card-meta">${t.size.x}x${t.size.y}x${t.size.z}</p>
            <section class="publish-preview">
              <div class="publish-preview-header">
                <span>Preview</span>
                <button class="button" data-part-publish="reset-preview" type="button">Reset View</button>
              </div>
              <div class="publish-preview-frame" data-part-publish="preview">
                <span>No Preview</span>
              </div>
            </section>
            <label class="generator-field">
              <span>Title</span>
              <input class="generator-input" data-part-publish="title" type="text" maxlength="${Nu}" required />
            </label>
            <label class="generator-field">
              <span>Author</span>
              <input class="generator-input" data-part-publish="author" type="text" maxlength="${ku}" required />
            </label>
            <div class="publish-error" data-part-publish="error" role="alert" hidden></div>
          </div>
          <footer class="publish-modal-actions">
            <button class="button primary" data-part-publish="submit" type="submit">Publish</button>
          </footer>
        </form>
      `,document.body.append(n);const i=n.querySelector('[data-part-publish="form"]'),r=n.querySelector('[data-part-publish="cancel"]'),o=n.querySelector('[data-part-publish="submit"]'),a=n.querySelector('[data-part-publish="reset-preview"]'),l=n.querySelector('[data-part-publish="preview"]'),c=n.querySelector('[data-part-publish="title"]'),h=n.querySelector('[data-part-publish="author"]'),u=n.querySelector('[data-part-publish="error"]');let d=!1,f,p;c.value=t.title,h.value=Hm(),l.replaceChildren(Object.assign(document.createElement("span"),{textContent:"Loading Preview..."})),c.focus(),c.select();const _=()=>{f==null||f.dispose(),document.removeEventListener("keydown",m),n.remove(),e()},m=v=>{v.key==="Escape"&&!d&&(v.preventDefault(),_())};document.addEventListener("keydown",m);const g=v=>{d=v,r.disabled=v,a.disabled=v||!f,c.disabled=v,h.disabled=v,o.disabled=v,o.classList.toggle("button-busy",v),o.setAttribute("aria-busy",String(v)),o.innerHTML=v?'Publish <span class="button-busy-spinner" aria-hidden="true"></span>':"Publish"},x=v=>{u.hidden=!v,u.textContent=v??""};(async()=>{a.disabled=!0,p=(async()=>{const v=document.createElement("canvas");v.width=jr,v.height=Jr,f=await this.createPartPreviewController(t,v),l.replaceChildren(v),f.render()})().catch(v=>{console.error(v),l.replaceChildren(Object.assign(document.createElement("span"),{textContent:"No Preview"}))}).finally(()=>{p=void 0,a.disabled=d||!f}),await p})(),a.addEventListener("click",()=>{f==null||f.resetView()}),n.addEventListener("click",v=>{!d&&(v.target===n||v.target.closest('[data-part-publish="cancel"]'))&&_()}),i.addEventListener("submit",async v=>{if(v.preventDefault(),d)return;const A=c.value.trim(),T=vl(h.value);if(!A){x("Title is required."),c.focus();return}g(!0);try{Gm(T),this.updateStatus("Publishing part..."),p&&await p;const E=f?await f.captureBlob():await this.createPartThumbnailBlob(t),y={anchor:t.anchor,authorName:T,blockTypes:t.blockTypes,blocks:t.blocks,size:t.size,title:A},S=await Qw({authorName:T,thumbnailBlob:E,title:A,worldPart:y});t.title=A,t.updatedAt=Date.now(),this.persistLocalParts(),this.rebuildPartPalette(),this.updateStatus(`Published part ${S.partId}.`),_(),this.openGallery(void 0,S.partId,"parts")}catch(E){console.error(E);const y=E.message;x(y),this.updateStatus(`Part publish failed: ${y}`),g(!1)}})})}openPublishDialog(t,e){return new Promise(n=>{const i=document.createElement("div");i.className="modal-overlay";let r=aC(t),o=r.isUpdatingPublishedMap,a=!o;i.innerHTML=`
        <form class="publish-modal" data-publish="form">
          <header class="gallery-modal-header">
            <h2>Publish Map</h2>
            <button class="button" data-publish="cancel" type="button">Cancel</button>
          </header>
          <div class="publish-modal-body">
            <div class="publish-version" data-publish="version">${Nm(r)}</div>
            <section class="publish-preview">
              <div class="publish-preview-header">
                <label class="publish-preview-toggle"${o?"":" hidden"}>
                  <input data-publish="update-preview" type="checkbox" />
                  <span>Update Preview</span>
                </label>
                <span${o?" hidden":""}>Preview</span>
                <button class="button" data-publish="refresh-preview" type="button">Refresh Preview</button>
              </div>
              <div class="publish-preview-frame" data-publish="preview">
                <span>No Preview</span>
              </div>
            </section>
            <label class="generator-field">
              <span>Title</span>
              <input class="generator-input" data-publish="title" type="text" maxlength="${Bu}" required />
            </label>
            <label class="generator-field">
              <span>Author</span>
              <input class="generator-input" data-publish="author" type="text" maxlength="${Du}" required />
            </label>
            <label class="generator-field">
              <span>Description (optional)</span>
              <textarea class="generator-input publish-description" data-publish="description" maxlength="${Lu}" rows="4"></textarea>
            </label>
            <div class="publish-error" data-publish="error" role="alert" hidden></div>
          </div>
          <footer class="publish-modal-actions">
            <button class="button primary" data-publish="submit" type="submit">Publish</button>
          </footer>
        </form>
      `,document.body.append(i);const l=i.querySelector('[data-publish="form"]'),c=i.querySelector('[data-publish="cancel"]'),h=i.querySelector('[data-publish="submit"]'),u=i.querySelector('[data-publish="refresh-preview"]'),d=i.querySelector('[data-publish="preview"]'),f=i.querySelector('[data-publish="update-preview"]'),p=i.querySelector('[data-publish="title"]'),_=i.querySelector('[data-publish="author"]'),m=i.querySelector('[data-publish="description"]'),g=i.querySelector('[data-publish="error"]'),x=i.querySelector('[data-publish="version"]');let b=!1,v=r.isChecking,A,T;p.value=e,_.value=Hm(),f.checked=a,f.disabled=!o,to(d,T,a),u.disabled=!a,h.disabled=v,p.focus(),p.select();const E=()=>{T&&URL.revokeObjectURL(T),document.removeEventListener("keydown",y),i.remove(),n()},y=P=>{P.key==="Escape"&&!b&&(P.preventDefault(),E())};document.addEventListener("keydown",y);const S=P=>{T&&URL.revokeObjectURL(T),A=P,T=P?URL.createObjectURL(P):void 0,to(d,T,a)},B=async()=>{S(await this.createMapThumbnailBlob())};a&&B();const R=P=>{r=P,v=r.isChecking,o=r.isUpdatingPublishedMap,x.textContent=Nm(r),o?(f.disabled=b,u.disabled=b||!a):(a=!0,f.checked=!0,f.disabled=!0,u.disabled=b,A||B(),to(d,T,a)),h.disabled=b||v};t.publishedMapId&&t.editToken&&this.resolvePublishDialogState(t).then(R);const O=P=>{b=P,c.disabled=P,f.disabled=P,u.disabled=P||!a,p.disabled=P,_.disabled=P,m.disabled=P,h.disabled=P||v,h.classList.toggle("button-busy",P),h.setAttribute("aria-busy",String(P)),h.innerHTML=P?'Publish <span class="button-busy-spinner" aria-hidden="true"></span>':"Publish"},z=P=>{g.hidden=!P,g.textContent=P??""};i.addEventListener("click",P=>{b||(P.target===i||P.target.closest('[data-publish="cancel"]'))&&E()}),u.addEventListener("click",()=>{b||(a||(a=!0,f.checked=!0),B(),u.disabled=!a)}),f.addEventListener("change",()=>{if(!b){if(!o){a=!0,f.checked=!0,to(d,T,a);return}a=f.checked,a&&!A&&B(),u.disabled=!a,to(d,T,a)}}),l.addEventListener("submit",async P=>{var N;if(P.preventDefault(),b||v)return;z(void 0);const U=p.value.trim(),V=vl(_.value);if(!U){z("Title is required."),this.updateStatus("Publish failed: title is required."),p.focus();return}_.value=V,O(!0);try{z(void 0),this.updateStatus("Publishing map..."),Gm(V),await this.flushAutosave();const q=await Ww({authorName:V,description:m.value.trim()||void 0,editToken:r.isUpdatingPublishedMap?t.editToken:void 0,mapId:r.isUpdatingPublishedMap?t.publishedMapId:void 0,sourceMapId:t.sourceMapId,sourceVersionId:t.sourceVersionId,thumbnailBlob:a?A:void 0,title:U,worldMap:this.world.toJson()});await this.setAutosaveSlotPublishMetadata(t.id,{editToken:q.editToken,lastPublishedAt:new Date().toISOString(),publishedMapId:q.mapId});const j=q.shareUrl||Uu(q.mapId);await((N=navigator.clipboard)==null?void 0:N.writeText(j).catch(()=>{})),this.updateStatus(`Published ${q.mapId}. Share URL: ${j}`),E(),this.openGallery(q.mapId)}catch(q){console.error(q);const j=q.message;z(j),this.updateStatus(`Publish failed: ${j}`),O(!1)}})})}async resolvePublishDialogState(t){if(!t.publishedMapId||!t.editToken)return{isChecking:!1,isUpdatingPublishedMap:!1};try{const e=await this.findPublishedMapLatestVersionNumber(t.publishedMapId);return e?{isChecking:!1,isUpdatingPublishedMap:!0,latestVersionNumber:e}:(await this.setAutosaveSlotPublishMetadata(t.id,{editToken:void 0,lastPublishedAt:void 0,publishedMapId:void 0}),{isChecking:!1,isUpdatingPublishedMap:!1})}catch(e){return cC(e)?(await this.setAutosaveSlotPublishMetadata(t.id,{editToken:void 0,lastPublishedAt:void 0,publishedMapId:void 0}),{isChecking:!1,isUpdatingPublishedMap:!1}):(console.warn("Failed to check published map before opening Publish dialog.",e),{isChecking:!1,isUpdatingPublishedMap:!1})}}async findPublishedMapLatestVersionNumber(t){const n=(await em()).find(i=>i.mapId===t);if(n)return oC(n.latestVersionId)??n.versionCount}async openGallery(t,e,n="maps"){const i=document.createElement("div");i.className="modal-overlay",i.innerHTML=`
      <section class="gallery-modal" role="dialog" aria-modal="true" aria-label="Gallery">
        <header class="gallery-modal-header">
          <h2>Gallery</h2>
          <button class="button" data-gallery="close" type="button">Close</button>
        </header>
        <div class="gallery-tabs">
          <button class="button ${n==="maps"?"primary":""}" data-gallery-tab="maps" type="button">Maps</button>
          <button class="button ${n==="parts"?"primary":""}" data-gallery-tab="parts" type="button">Parts</button>
        </div>
        <div class="gallery-error" data-gallery="error" role="alert" hidden></div>
        <div class="gallery-grid" data-gallery="content">
          <p class="gallery-empty">Loading gallery...</p>
        </div>
      </section>
    `,document.body.append(i);const r=()=>{document.removeEventListener("keydown",o),i.remove()},o=u=>{u.key==="Escape"&&(u.preventDefault(),r())};document.addEventListener("keydown",o),i.addEventListener("click",u=>{(u.target===i||u.target.closest('[data-gallery="close"]'))&&r()});const a=i.querySelector('[data-gallery="content"]'),l=i.querySelector('[data-gallery="error"]'),c=Array.from(i.querySelectorAll("[data-gallery-tab]")),h=async u=>{for(const d of c)d.classList.toggle("primary",d.dataset.galleryTab===u);l.hidden=!0,a.replaceChildren(Object.assign(document.createElement("p"),{className:"gallery-empty",textContent:u==="maps"?"Loading maps...":"Loading parts..."}));try{if(u==="maps"){const d=await em();this.renderGalleryMaps(a,d,r,l,t)}else{const d=await jw();this.renderGalleryParts(a,d,r,l,e)}}catch(d){console.error(d);const f=document.createElement("p");f.className="gallery-empty",f.textContent=`Failed to load gallery: ${d.message}`,a.replaceChildren(f)}};for(const u of c)u.addEventListener("click",()=>{h(u.dataset.galleryTab||"maps")});h(n)}renderGalleryMaps(t,e,n,i,r){if(e.length===0){const u=document.createElement("p");u.className="gallery-empty",u.textContent="No maps have been published yet.",t.replaceChildren(u);return}t.replaceChildren();const o=[],a=[];let l=!1;const c=u=>{i.hidden=!u,i.textContent=u??""},h=(u,d)=>{l=u;for(const f of a)f.disabled=u;for(const f of o){f.disabled=u;const p=f===d;f.classList.toggle("button-busy",u&&p),f.setAttribute("aria-busy",String(u&&p)),f.innerHTML=u&&p?'Import <span class="button-busy-spinner" aria-hidden="true"></span>':"Import"}};for(const u of e){const d=document.createElement("article");d.className="gallery-card",u.mapId===r&&(d.classList.add("highlighted"),d.setAttribute("aria-current","true"));const f=document.createElement("div");if(f.className="gallery-card-thumb",u.thumbnailUrl){const S=document.createElement("img");S.src=u.thumbnailUrl,S.alt="",f.append(S)}else f.textContent="No Preview";const p=document.createElement("div");p.className="gallery-card-body";const _=document.createElement("h3");_.textContent=u.title;const m=document.createElement("div");m.className="gallery-card-byline";const g=document.createElement("span");g.className="gallery-card-author",g.textContent=`by ${u.authorName||"Unknown"}`;const x=document.createElement("span");x.className="gallery-card-updated",x.textContent=km(u.updatedAt),m.append(g,x);const b=document.createElement("p");b.textContent=u.description||"No description";const v=document.createElement("p");v.className="gallery-card-meta",p.append(_,m,b,v);const A=document.createElement("div");A.className="gallery-card-actions";const T=document.createElement("select");T.className="gallery-version-select",T.setAttribute("aria-label",`Version for ${u.title}`),T.append(new Option(`Latest - v${u.versionCount}`,"latest"));for(let S=u.versionCount-1;S>=1;S--)T.append(new Option(`v${S}`,String(S)));const E=()=>{const S=hC(u,T.value);v.textContent=`${yC(S.blockCount)} blocks · ${Fm(S.sizeBytes)} · ${u.versionCount} versions`};T.addEventListener("change",E),E(),a.push(T);const y=document.createElement("button");y.className="button primary gallery-import-button",y.type="button",y.textContent="Import",o.push(y),y.addEventListener("click",async()=>{if(!l){c(void 0),h(!0,y);try{this.updateStatus("Importing shared map..."),await this.importPublishedMapOrThrow(u.mapId,T.value,u.title),n()}catch(S){console.error(S);const B=S.message;c(`Import failed: ${B}`),this.updateStatus(`Shared map import failed: ${B}`),h(!1)}}}),A.append(T,y),d.append(f,p,A),t.append(d),u.mapId===r&&requestAnimationFrame(()=>d.scrollIntoView({block:"center",behavior:"smooth"}))}}renderGalleryParts(t,e,n,i,r){if(e.length===0){const h=document.createElement("p");h.className="gallery-empty",h.textContent="No parts have been published yet.",t.replaceChildren(h);return}t.replaceChildren();const o=[];let a=!1;const l=h=>{i.hidden=!h,i.textContent=h??""},c=(h,u)=>{a=h;for(const d of o){d.disabled=h;const f=d===u;d.classList.toggle("button-busy",h&&f),d.setAttribute("aria-busy",String(h&&f)),d.innerHTML=h&&f?'Import <span class="button-busy-spinner" aria-hidden="true"></span>':"Import"}};for(const h of e){const u=document.createElement("article");u.className="gallery-card",h.partId===r&&(u.classList.add("highlighted"),u.setAttribute("aria-current","true"));const d=document.createElement("div");if(d.className="gallery-card-thumb",h.thumbnailUrl){const A=document.createElement("img");A.src=h.thumbnailUrl,A.alt="",d.append(A)}else d.textContent="No Preview";const f=document.createElement("div");f.className="gallery-card-body";const p=document.createElement("h3");p.textContent=h.title;const _=document.createElement("div");_.className="gallery-card-byline";const m=document.createElement("span");m.className="gallery-card-author",m.textContent=`by ${h.authorName||"Unknown"}`;const g=document.createElement("span");g.className="gallery-card-updated",g.textContent=km(h.updatedAt),_.append(m,g);const x=document.createElement("p");x.className="gallery-card-meta",f.append(p,_,x);const b=document.createElement("div");b.className="gallery-card-actions",x.textContent=`${_C(h.size)} · ${Fm(h.sizeBytes)}`;const v=document.createElement("button");v.className="button primary gallery-import-button",v.type="button",v.textContent="Import",o.push(v),v.addEventListener("click",async()=>{if(!a){l(void 0),c(!0,v);try{this.updateStatus("Importing shared part..."),await this.importPublishedPartOrThrow(h.partId,h.title),n()}catch(A){console.error(A);const T=A.message;l(`Import failed: ${T}`),this.updateStatus(`Shared part import failed: ${T}`),c(!1)}}}),b.append(v),u.append(d,f,b),t.append(u),h.partId===r&&requestAnimationFrame(()=>u.scrollIntoView({block:"center",behavior:"smooth"}))}}async importPublishedPartOrThrow(t,e){const n=await Jw(t),i=dA(n.worldPart,e||`Part ${n.partId}`);this.parts=[i,...this.parts.filter(r=>r.id!==i.id)],this.selectedPartId=i.id,this.persistLocalParts(),await this.persistLocalPartPreview(i),this.rebuildPartPalette(),this.setToolMode("build"),this.updateStatus(`Imported part "${i.title}".`)}async createMapThumbnailBlob(){var t;try{this.updateSkybox(),this.chunkMeshManager||this.chunkBatchRenderer.update(1/60),this.updateBlockBreakEffects(1/60),(t=this.chunkBlockMaterialManager)==null||t.update(),this.updateViewDistanceVisibility(),this.renderer.render(this.scene,this.camera);const e=this.renderer.domElement;if(e.width===0||e.height===0)return;const n=document.createElement("canvas");n.width=jr,n.height=Jr;const i=n.getContext("2d");if(!i)return;i.fillStyle="#101722",i.fillRect(0,0,n.width,n.height);const r=e.width/e.height,o=n.width/n.height;let a=0,l=0,c=e.width,h=e.height;return r>o?(c=Math.round(e.height*o),a=Math.floor((e.width-c)*.5)):r<o&&(h=Math.round(e.width/o),l=Math.floor((e.height-h)*.5)),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.drawImage(e,a,l,c,h,0,0,n.width,n.height),new Promise(u=>{n.toBlob(d=>u(d??void 0),Im,Pm)})}catch(e){console.error(e);return}}async createPartThumbnailBlob(t){const e=document.createElement("canvas");e.width=jr,e.height=Jr;let n;try{return n=await this.createPartPreviewController(t,e),n.render(),await n.captureBlob()}catch(i){console.error(i);return}finally{n==null||n.dispose()}}async createPartPreviewController(t,e){const n=new ap({alpha:!1,antialias:!0,canvas:e,preserveDrawingBuffer:!0}),i=new uf,r=new $e(34,jr/Jr,.1,1e3);let o;const a=[];let l=!1;const c=Math.max(t.size.x,t.size.y,t.size.z,1),h=c*2.2+4,u=new L(0,Math.max(t.size.y*.08,0),0),d={distance:h,pitch:Math.max(.28,Math.min(1.1,Math.atan2(Math.max(t.size.y*.9,c*.8)+2-u.y,h))),yaw:Math.PI*.25};let f=!1,p=0,_=0;const m=(y,S,B)=>Math.max(S,Math.min(B,y)),g=()=>{const y=Math.cos(d.pitch);r.position.set(u.x+Math.sin(d.yaw)*y*d.distance,u.y+Math.sin(d.pitch)*d.distance,u.z+Math.cos(d.yaw)*y*d.distance),r.lookAt(u),r.updateProjectionMatrix()},x=()=>{l||(g(),n.render(i,r))},b=()=>{d.distance=h,d.pitch=Math.max(.28,Math.min(1.1,Math.atan2(Math.max(t.size.y*.9,c*.8)+2-u.y,h))),d.yaw=Math.PI*.25,x()},v=y=>{y.preventDefault(),f=!0,p=y.clientX,_=y.clientY,e.setPointerCapture(y.pointerId),e.classList.add("dragging")},A=y=>{if(!f)return;y.preventDefault();const S=y.clientX-p,B=y.clientY-_;p=y.clientX,_=y.clientY,d.yaw-=S*.01,d.pitch=m(d.pitch+B*.01,-.15,1.35),x()},T=y=>{f=!1,e.classList.remove("dragging"),e.hasPointerCapture(y.pointerId)&&e.releasePointerCapture(y.pointerId)},E=y=>{y.preventDefault(),d.distance=m(d.distance*(1+y.deltaY*.0015),Math.max(2,c*.7),c*6+12),x()};try{n.setPixelRatio(1),n.setSize(jr,Jr,!1),n.setClearColor(new ut("#101722"),1);const y=new Hc;y.load({blockTypes:t.blockTypes,blocks:t.blocks},t.blockTypes),o=await pl.create(y.blockTypes);const S=gT(o.toSnapshot()),B=qg(),R=new Qe;for(const O of y.chunkIds){const z=y.getChunk(O);if(!z)continue;const P=mT(y,z,S,B);if(!P)continue;const U=P.opaqueGeometry?Dc(P.opaqueGeometry,o,"opaque"):null,V=P.transparentGeometry?Dc(P.transparentGeometry,o,"transparent"):null,N=P.liquidGeometry?Dc(P.liquidGeometry,o,"liquid"):null;for(const q of[U,V,N])q&&(q.material.setAmbientColor(new ut(16777215)),q.material.setAmbientIntensity(1),a.push(q),R.add(q))}if(R.children.length===0)throw new Error("Part has no previewable blocks.");return R.position.set(-t.size.x/2,-t.size.y/2,-t.size.z/2),i.add(R),e.addEventListener("pointerdown",v),e.addEventListener("pointermove",A),e.addEventListener("pointerup",T),e.addEventListener("pointercancel",T),e.addEventListener("wheel",E,{passive:!1}),b(),{captureBlob:async()=>(x(),await new Promise(O=>{e.toBlob(z=>O(z??void 0),Im,Pm)})),dispose:()=>{if(!l){l=!0,e.removeEventListener("pointerdown",v),e.removeEventListener("pointermove",A),e.removeEventListener("pointerup",T),e.removeEventListener("pointercancel",T),e.removeEventListener("wheel",E);for(const O of a){O.geometry.dispose();const z=Array.isArray(O.material)?O.material:[O.material];for(const P of z)P.dispose()}o==null||o.texture.dispose(),n.dispose()}},render:x,resetView:b}}catch(y){n.dispose();for(const S of a){S.geometry.dispose();const B=Array.isArray(S.material)?S.material:[S.material];for(const R of B)R.dispose()}throw o==null||o.texture.dispose(),y}}async exportMap(){this.setExportButtonBusy(!0);try{await new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})});const t=this.world.toJson(),e=new Blob([`${JSON.stringify(t,null,2)}
`],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=this.fileName.endsWith(".json")?this.fileName:`${this.fileName}.json`,n.click(),URL.revokeObjectURL(n.href),this.updateStatus(`Exported ${n.download}.`)}finally{this.setExportButtonBusy(!1)}}setExportButtonBusy(t){this.exportButton.disabled=t,this.exportButton.classList.toggle("button-busy",t),this.exportButton.setAttribute("aria-busy",String(t)),this.exportButton.innerHTML=t?'Export <span class="button-busy-spinner" aria-hidden="true"></span>':"Export"}async applyThemeTemplate(){const t=this.templateThemeSelect.value||"arena",e=Gc.find(l=>l.id===t);if(!e){this.updateStatus(`Unknown template theme "${t}".`);return}const n=this.getCurrentBlockTypeDefinitions(),i=this.resolveTemplateBlockIds(n),r=sw({theme:t,seed:Number(this.templateSeedInput.value)||0,size:Number(this.templateSizeInput.value)||e.defaultSize,height:Number(this.templateHeightInput.value)||e.defaultHeight},i),o=this.world.toSnapshot();this.world.load({blockTypes:n,blocks:r.blocks},n);const a=this.world.toSnapshot();this.pushSnapshotUndoState(`Generate ${e.label}`,o,a),this.markFullWorldAutosaveDirty(),this.fileName=`generated-${t}.json`,this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Generated ${e.label.toLowerCase()} template with seed ${this.templateSeedInput.value||"0"}.`)}rebuildPalette(){const t=this.sidebar.scrollTop,e=this.paletteContainer.scrollTop,n=this.paletteFilter.trim().toLowerCase();this.paletteContainer.replaceChildren(),this.paletteFilterInput.value=this.paletteFilter;for(const i of this.world.blockTypes){if(n&&!i.name.toLowerCase().includes(n))continue;const r=document.createElement("button");r.type="button",r.className="palette-button",i.id===this.selectedBlockTypeId&&r.classList.add("active");const o=document.createElement("img");o.src=i.textureUris.top,o.alt=i.name;const a=document.createElement("span");a.className="palette-meta";const l=document.createElement("strong");l.textContent=i.name;const c=document.createElement("span");c.textContent=`ID ${i.id}`,a.append(l,c),r.append(o,a),r.addEventListener("click",()=>{this.selectedBlockTypeId=i.id,this.selectedPartId=null,this.syncPaletteSelection(),this.syncPartPaletteSelection(),this.updateStatus(`Pattern set to "${i.name}".`)}),this.paletteContainer.append(r)}this.sidebar.scrollTop=t,this.paletteContainer.scrollTop=e}syncPaletteSelection(){var e,n;const t=(e=this.world.blockTypes.find(i=>i.id===this.selectedBlockTypeId))==null?void 0:e.name;for(const i of Array.from(this.paletteContainer.children)){if(!(i instanceof HTMLButtonElement))continue;const r=(n=i.querySelector(".palette-meta strong"))==null?void 0:n.textContent;i.classList.toggle("active",!this.selectedPartId&&r===t)}}loadLocalParts(){try{const t=JSON.parse(localStorage.getItem(gm)??"[]");this.parts=Array.isArray(t)?t.map(e=>Fu(e)):[]}catch(t){console.warn("Failed to load local parts.",t),this.parts=[]}this.rebuildPartPalette()}persistLocalParts(){localStorage.setItem(gm,JSON.stringify(this.parts))}rebuildPartPalette(){const t=this.partPaletteContainer.scrollTop,e=this.partFilter.trim().toLowerCase();for(const n of this.partPreviewObjectUrls.values())URL.revokeObjectURL(n);this.partPreviewObjectUrls.clear(),this.partPaletteContainer.replaceChildren(),this.partFilterInput.value=this.partFilter;for(const n of this.parts){if(e&&!n.title.toLowerCase().includes(e))continue;const i=document.createElement("button");i.type="button",i.className="palette-button part-palette-button",i.dataset.partId=n.id,n.id===this.selectedPartId&&i.classList.add("active");const r=document.createElement("span");r.className="palette-meta";const o=document.createElement("strong");o.textContent=n.title;const a=document.createElement("span");a.textContent=`${n.size.x}x${n.size.y}x${n.size.z}`,r.append(o,a),i.append(r),i.addEventListener("click",()=>{this.selectedPartId=n.id,this.syncPaletteSelection(),this.syncPartPaletteSelection(),this.syncPartSelectionUi(),this.setToolMode("build"),this.updateStatus(`Part set to "${n.title}".`)}),this.partPaletteContainer.append(i),this.loadPartPreviewIntoElement(n.id,i)}if(this.parts.length===0){const n=document.createElement("p");n.className="gallery-empty",n.textContent="No local parts yet.",this.partPaletteContainer.append(n)}this.partPaletteContainer.scrollTop=t}syncPartPaletteSelection(){for(const t of Array.from(this.partPaletteContainer.children))t instanceof HTMLButtonElement&&t.classList.toggle("active",t.dataset.partId===this.selectedPartId)}async loadPartPreviewIntoElement(t,e){const n=await tC(t);if(!e.isConnected||!n||!this.parts.some(o=>o.id===t))return;const i=this.partPreviewObjectUrls.get(t);i&&URL.revokeObjectURL(i);const r=URL.createObjectURL(n);this.partPreviewObjectUrls.set(t,r),e.style.setProperty("--part-preview-image",`url("${r}")`),e.classList.add("has-preview")}async persistLocalPartPreview(t,e){const n=e??await this.createPartThumbnailBlob(t);n&&await QA(t.id,n)}updatePartSelectionPoint(){const t=this.hoveredBlock??this.hoveredPlacement;if(!t){this.updateStatus("No block target for part selection.");return}if(!this.partSelectionStart||this.partSelectionBounds){this.partSelectionStart={...t},this.partSelectionEnd=null,this.partSelectionBounds=null,this.partSelectionHasBlocks=!1,this.updateStatus("Part selection started."),this.setSelectionHoverBox(t),this.syncPartSelectionUi();return}if(!this.partSelectionEnd){this.partSelectionEnd={x:t.x,y:this.partSelectionStart.y,z:t.z},this.partSelectionBounds=null,this.partSelectionHasBlocks=!1,this.updateStatus("Part footprint selected."),this.setSelectionHoverBox(t),this.syncPartSelectionUi();return}this.partSelectionBounds=this.getPartSelectionHeightBounds(t),this.partSelectionHasBlocks=this.partSelectionBounds&&!this.isPartSelectionTooLarge(this.partSelectionBounds)?this.partSelectionContainsBlocks(this.partSelectionBounds):!1,!this.partSelectionBounds||!this.partSelectionHasBlocks?this.updateStatus(this.partSelectionBounds&&this.isPartSelectionTooLarge(this.partSelectionBounds)?`Part selection is too large. Each axis must be ${ze} blocks or less.`:"No blocks in selected area."):this.isPartSelectionTooLarge(this.partSelectionBounds)?this.updateStatus(`Part selection is too large. Each axis must be ${ze} blocks or less.`):this.updateStatus("Part selection ready."),this.setSelectionHoverBox(t),this.syncPartSelectionUi()}syncPartSelectionUi(){if(this.partRenameButton.disabled=!this.selectedPartId,this.partDeleteButton.disabled=!this.selectedPartId,this.partExportButton.disabled=!this.selectedPartId,this.partPublishButton.disabled=!this.selectedPartId,!this.partSelectionStart){this.partCreateButton.disabled=!0,this.partCreateButton.textContent="Create",this.partSelectionStatus.textContent="";return}if(!this.partSelectionEnd){this.partCreateButton.disabled=!0,this.partCreateButton.textContent="Create",this.partSelectionStatus.textContent="";return}const t=this.partSelectionBounds;this.partCreateButton.disabled=!t||!this.partSelectionHasBlocks||this.isPartSelectionTooLarge(t),this.partCreateButton.textContent="Create",this.partSelectionStatus.textContent=""}isPartSelectionTooLarge(t){return t.size.x>ze||t.size.y>ze||t.size.z>ze}getPartSelectionFootprint(t){if(!this.partSelectionStart)return null;const e=this.partSelectionEnd??t??this.partSelectionStart;return{maxX:Math.max(this.partSelectionStart.x,e.x),maxZ:Math.max(this.partSelectionStart.z,e.z),minX:Math.min(this.partSelectionStart.x,e.x),minZ:Math.min(this.partSelectionStart.z,e.z)}}getPartSelectionPreviewBounds(t){const e=this.getPartSelectionFootprint(t);if(!e||!this.partSelectionStart)return null;const n={x:e.minX,y:this.partSelectionStart.y,z:e.minZ},i={x:e.maxX,y:this.partSelectionStart.y,z:e.maxZ};return{max:i,min:n,size:{x:i.x-n.x+1,y:1,z:i.z-n.z+1}}}getPartSelectionHeightBounds(t){const e=this.getPartSelectionFootprint();if(!e||!this.partSelectionStart)return null;const n=Math.min(this.partSelectionStart.y,t.y),i=Math.max(this.partSelectionStart.y,t.y),r={x:e.minX,y:n,z:e.minZ},o={x:e.maxX,y:i,z:e.maxZ};return{max:o,min:r,size:{x:o.x-r.x+1,y:o.y-r.y+1,z:o.z-r.z+1}}}getPartSelectionHeightCoordinateFromRay(){const t=this.getPartSelectionFootprint();if(!t||!this.partSelectionStart)return null;const e=(t.minX+t.maxX+1)/2,n=(t.minZ+t.maxZ+1)/2,i=Vn.x-e,r=Vn.z-n,o=Math.hypot(i,r);if(o<1e-4)return null;const a=i/o,l=r/o,c=cs.x*a+cs.z*l;if(Math.abs(c)<1e-4)return null;const h=((e-Vn.x)*a+(n-Vn.z)*l)/c;if(h<0)return null;const u=Math.floor(Vn.y+cs.y*h);return{x:Math.floor(e),y:u,z:Math.floor(n)}}partSelectionContainsBlocks(t){for(let e=t.min.y;e<=t.max.y;e++)for(let n=t.min.z;n<=t.max.z;n++)for(let i=t.min.x;i<=t.max.x;i++)if(this.world.getBlockTypeId({x:i,y:e,z:n})!==0)return!0;return!1}async createPartFromSelection(){var i;if(!this.partSelectionStart||!this.partSelectionEnd||!this.partSelectionBounds){this.updateStatus("Select footprint and height with the Select tool before creating a part."),this.setToolMode("select");return}const t=this.partSelectionBounds;if(!this.partSelectionHasBlocks){this.updateStatus("No blocks in selected area."),this.setToolMode("select");return}if(t.size.x>ze||t.size.y>ze||t.size.z>ze){this.updateStatus(`Part selection is too large. Each axis must be ${ze} blocks or less.`);return}const e=(i=window.prompt("Part title",`Part ${this.parts.length+1}`))==null?void 0:i.trim();if(!e)return;const n=[];for(let r=t.min.y;r<=t.max.y;r++)for(let o=t.min.z;o<=t.max.z;o++)for(let a=t.min.x;a<=t.max.x;a++){const l={x:a,y:r,z:o},c=this.world.getBlockTypeId(l),h=this.world.getBlockRotation(l);n.push({coordinate:l,value:c===0||h===0?c:{i:c,r:h}})}try{const r=uA({blockTypes:this.world.toJson().blockTypes??[],blocks:n,max:t.max,min:t.min,title:e});this.parts=[r,...this.parts.filter(o=>o.id!==r.id)],this.selectedPartId=r.id,this.partSelectionStart=null,this.partSelectionEnd=null,this.partSelectionBounds=null,this.partSelectionHasBlocks=!1,this.syncPartSelectionUi(),this.persistLocalParts(),this.persistLocalPartPreview(r).then(()=>this.rebuildPartPalette()),this.rebuildPartPalette(),this.updateStatus(`Created part "${r.title}".`)}catch(r){this.updateStatus(`Part creation failed: ${r.message}`)}}exportSelectedPart(){const t=this.parts.find(i=>i.id===this.selectedPartId);if(!t){this.updateStatus("No part selected.");return}const e=new Blob([`${JSON.stringify(t,null,2)}
`],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=`${t.title.replace(/[^a-z0-9._-]+/gi,"-").replace(/^-+|-+$/g,"")||"part"}.part.json`,n.click(),URL.revokeObjectURL(n.href),this.updateStatus(`Exported part "${t.title}".`)}renameSelectedPart(){var n;const t=this.parts.find(i=>i.id===this.selectedPartId);if(!t){this.updateStatus("No part selected.");return}const e=(n=window.prompt("Part title",t.title))==null?void 0:n.trim();!e||e===t.title||(t.title=e,t.updatedAt=Date.now(),this.persistLocalParts(),this.rebuildPartPalette(),this.syncPartSelectionUi(),this.updateStatus(`Renamed part to "${t.title}".`))}deleteSelectedPart(){var n;const t=this.parts.find(i=>i.id===this.selectedPartId);if(!t){this.updateStatus("No part selected.");return}if(!window.confirm(`Delete local part "${t.title}"?`))return;this.parts=this.parts.filter(i=>i.id!==t.id),this.selectedPartId=((n=this.parts[0])==null?void 0:n.id)??null;const e=this.partPreviewObjectUrls.get(t.id);e&&(URL.revokeObjectURL(e),this.partPreviewObjectUrls.delete(t.id)),this.persistLocalParts(),eC(t.id),this.rebuildPartPalette(),this.syncPaletteSelection(),this.syncPartSelectionUi(),this.selectedPartId||this.setHoverIndicatorVisible(!1),this.updateStatus(`Deleted part "${t.title}".`)}async importPartFromFile(){const t=document.createElement("input");t.type="file",t.accept=".json,.part.json,application/json";const e=await new Promise(n=>{t.addEventListener("change",()=>{var i;return n((i=t.files)==null?void 0:i[0])}),t.click()});if(e)try{const n=Fu(JSON.parse(await e.text()));this.parts=[n,...this.parts.filter(i=>i.id!==n.id)],this.selectedPartId=n.id,this.persistLocalParts(),this.persistLocalPartPreview(n).then(()=>this.rebuildPartPalette()),this.rebuildPartPalette(),this.setToolMode("build"),this.updateStatus(`Imported part "${n.title}".`)}catch(n){this.updateStatus(`Part import failed: ${n.message}`)}}resolvePartPlacements(t,e){const n=this.resolvePartBlockTypeMap(t),i=[],r=new Set;for(const[o,a]of Object.entries(t.blocks)){const l=Cl(o),c=Mi(a),h=c===0?0:n.get(c);if(h===void 0){r.add(c);continue}i.push({blockTypeId:h,coordinate:{x:e.x+l.x-t.anchor.x,y:e.y+l.y-t.anchor.y,z:e.z+l.z-t.anchor.z},rotation:Jg(a)})}if(r.size>0){const o=[...r].map(a=>{var l;return((l=t.blockTypes.find(c=>c.id===a))==null?void 0:l.name)??`#${a}`}).slice(0,4).join(", ");throw new Error(`Part uses block types that are not available in this world: ${o}.`)}return i}resolvePartBlockTypeMap(t){const e=new Map,n=new Map(this.world.blockTypes.map(r=>[r.id,r])),i=new Set(Object.values(t.blocks).map(r=>Mi(r)).filter(r=>r!==0));for(const r of i)n.has(r)&&e.set(r,r);for(const r of t.blockTypes){if(e.has(r.id))continue;const o=this.world.blockTypes.find(a=>a.name===r.name&&a.textureUri===r.textureUri);o&&e.set(r.id,o.id)}return e}rebuildEntitiesUi(){this.entityListContainer.replaceChildren();const t=this.world.entities,e=Object.keys(t).sort();for(const n of e){const i=document.createElement("button");i.type="button",i.className="palette-button",n===this.selectedEntityKey&&i.classList.add("active");const r=document.createElement("span");r.className="texture-fallback",r.textContent="ENT";const o=document.createElement("span");o.className="palette-meta";const a=document.createElement("strong");a.textContent=this.getEntityLabel(t[n]);const l=document.createElement("span");l.textContent=n,o.append(a,l),i.append(r,o),i.addEventListener("click",()=>{this.selectedEntityKey=n,this.entityOptionsInput.value=JSON.stringify(t[n],null,2),this.rebuildEntitiesUi(),this.refreshSelectedEntityMarker()}),this.entityListContainer.append(i)}(!this.selectedEntityKey||!(this.selectedEntityKey in t))&&(this.selectedEntityKey=e[0]??null),this.entityOptionsInput.value=this.selectedEntityKey?JSON.stringify(t[this.selectedEntityKey],null,2):"{}",this.refreshSelectedEntityMarker()}async rebuildAllChunkMeshes(){const t=++this.nextChunkBuildGeneration;this.activeChunkBuildGeneration=t,this.pendingChunkBuildPriorities.clear(),this.chunkBuildWaiters=[],this.inFlightChunkBuildIds.clear(),this.inFlightChunkBuildPriorities.clear(),this.chunkBuildRequestGenerations.clear(),this.workerSyncedChunkIds.clear(),this.chunkBuildDispatchInProgress=!1,this.disposeAllChunkMeshes(),this.atlas=await pl.create(this.world.blockTypes),this.atlasSnapshotCache=this.atlas.toSnapshot(),this.chunkBatchRenderer.setAtlas(null),this.chunkRendererHost={addToScene:e=>this.chunkLayer.add(e),ambientLight:this.entityAmbientLight,removeFromScene:e=>this.chunkLayer.remove(e),fogColor:this.fogColor,fogEnabled:this.getViewDistanceConfig().fog.enabled,fogFar:this.getViewDistanceConfig().fog.far,fogNear:this.getViewDistanceConfig().fog.near,webGLRenderer:this.renderer},this.chunkBlockMaterialManager=new UE({renderer:this.chunkRendererHost},this.atlas.texture),this.chunkMeshManager=new XE({blockMaterialManager:this.chunkBlockMaterialManager,renderer:this.chunkRendererHost}),await this.initializeChunkMesherWorkerWorld(),this.rebuildEntityMarkers(),this.queueChunkBuilds(this.getChunkIdsSortedByDistanceToCamera(this.world.chunkIds),PA,t),this.lastPointerEvent?this.updateHoverFromPointer(this.lastPointerEvent):this.pointerLocked&&this.updateHoverFromScreenCenter()}createHoverFrameIndicator(){const t=new Qe,e=new Yn({color:"#f5b942",transparent:!0,opacity:.95,depthWrite:!1}),n=(i,r,o)=>{const a=new Me(new pi(1,1,1),e.clone());a.renderOrder=1e3,a.userData.hoverFrameAxis=i,a.userData.hoverFrameSignA=r,a.userData.hoverFrameSignB=o,a.matrixAutoUpdate=!1,t.add(a)};for(const i of[-1,1])for(const r of[-1,1])n("x",i,r);for(const i of[-1,1])for(const r of[-1,1])n("y",i,r);for(const i of[-1,1])for(const r of[-1,1])n("z",i,r);return this.configureHoverFrame({x:1,y:1,z:1},"#f5b942"),t}disposeAllChunkMeshes(){var t;(t=this.chunkMeshManager)==null||t.clear(),this.chunkMeshManager=null,this.chunkBlockMaterialManager=null,this.chunkRendererHost=null,this.chunkBatchRenderer.clear(),this.chunkBatchRenderer.setAtlas(null)}async rebuildEntityMarkers(){this.disposeSelectedEntityMarker();for(const i of[...this.entityRenderObjects])this.disposeEntityRenderObject(i);this.entityFallbackObjects.clear(),this.entityRenderObjects.clear(),this.entityMeshManager.clear();const t=Object.entries(this.world.entities),e=[];for(const[i,r]of t){const o=Qs(i);if(!o)continue;const a=this.buildStaticEntityDescriptor(i,r);if(a){e.push(a);continue}this.addFallbackEntityObject({key:i,position:o,options:r})}const n=await this.entityMeshManager.replaceAll(e);for(const i of e){if(!n.has(i.key))continue;const r=Qs(i.key),o=this.world.entities[i.key];r&&o&&this.addFallbackEntityObject({key:i.key,position:r,options:o})}this.refreshSelectedEntityMarker()}addFallbackEntityObject(t){const e=new Qe;e.position.set(t.position.x,t.position.y,t.position.z),e.userData.entityKey=t.key,e.userData.entityOptions=t.options,e.userData.visibilityRadius=1,e.add(this.createEntityMarker("#8b5cf6")),this.entityFallbackObjects.set(t.key,e),this.entityRenderObjects.add(e),this.entityLayer.add(e)}disposeEntityRenderObject(t){this.entityRenderObjects.delete(t),t.parent&&t.parent.remove(t),this.queueEntityRenderObjectDisposal(t)}async syncEntityMarkersForKeys(t,e){for(const n of t){const i=this.world.entities[n];this.entityMeshManager.removeEntity(n);const r=this.entityFallbackObjects.get(n);if(r&&(this.disposeEntityRenderObject(r),this.entityFallbackObjects.delete(n)),!i)continue;const o=this.buildStaticEntityDescriptor(n,i);if(o){if(!await this.entityMeshManager.upsertEntity(o)){const c=Qs(n);c&&this.addFallbackEntityObject({key:n,position:c,options:i})}continue}const a=Qs(n);a&&this.addFallbackEntityObject({key:n,position:a,options:i})}this.refreshSelectedEntityMarker()}buildStaticEntityDescriptor(t,e){const n=this.getEntityModelUri(e),i=Qs(t);if(!n||!i)return null;const r=this.getEntityGlobalCoordinate(i);return hm.compose(new L(i.x,i.y,i.z),bC(e),SC(e)),{chunkId:$t.globalCoordinateToChunkId(r),key:t,lightLevel:this.getEntityLightLevel(i),modelUri:this.resolveEntityModelUri(n),skyLight:this.getEntitySkyLight(i),tintColor:MC(e),worldMatrix:hm.clone()}}buildStaticEntityLightingDescriptor(t){const e=this.world.entities[t],n=e?this.buildStaticEntityDescriptor(t,e):null;return n?{chunkId:n.chunkId,lightLevel:n.lightLevel,skyLight:n.skyLight}:null}refreshSelectedEntityMarker(){if(this.disposeSelectedEntityMarker(),!this.selectedEntityKey)return;const t=Qs(this.selectedEntityKey);if(!t)return;const e=this.createEntityMarker("#ff8a65");e.position.set(t.x,t.y,t.z),e.renderOrder=1001,e.userData.visibilityRadius=1,this.selectedEntityMarker=e,this.entityRenderObjects.add(e),this.entityLayer.add(e)}disposeSelectedEntityMarker(){this.selectedEntityMarker&&(this.entityRenderObjects.delete(this.selectedEntityMarker),this.entityLayer.remove(this.selectedEntityMarker),this.queueEntityRenderObjectDisposal(this.selectedEntityMarker),this.selectedEntityMarker=null)}queueEntityRenderObjectDisposal(t){t.traverse(e=>{const n=e.geometry,i=e.material;if(n&&this.deferredEntityDisposals.push(()=>{n.dispose()}),Array.isArray(i))for(const r of i)this.deferredEntityDisposals.push(()=>{r.dispose()});else i&&this.deferredEntityDisposals.push(()=>{i.dispose()})})}flushDeferredEntityDisposals(){if(this.deferredEntityDisposals.length!==0){for(const t of this.deferredEntityDisposals)t();this.deferredEntityDisposals.length=0}}createEntityMarker(t){const e=new If(new pi(.6,1.2,.6)),n=new Qa({color:t,transparent:!0,opacity:.95}),i=new Hh(e,n);return i.renderOrder=1e3,i}handleLightingChange(){this.lightingAmbient=Number(this.lightingAmbientInput.value),this.fogColorHex=this.fogColorInput.value||"#ffffff",this.skyboxUiIntensity=Number(this.skyboxIntensityInput.value),this.applyLightingSettings(),this.scheduleViewStateAutosave()}handleResolutionChange(){const t=this.resolutionPresetInput.value;this.resolutionPreset=t in Lm?t:"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.scheduleViewStateAutosave()}handleViewDistanceChange(){const t=this.viewDistancePresetInput.value;this.viewDistancePreset=t in js||t==="CUSTOM"?t:"HIGH",this.viewDistanceCustomDistance=Math.max(1,Math.round(Number(this.viewDistanceCustomInput.value)||js.HIGH.distance)),this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.scheduleViewStateAutosave()}syncLightingInputs(){this.lightingAmbientInput.value=String(this.lightingAmbient),this.fogColorInput.value=this.fogColorHex,this.skyboxIntensityInput.value=String(this.skyboxUiIntensity)}syncResolutionInputs(){this.resolutionPresetInput.value=this.resolutionPreset}getEffectivePixelRatio(t,e){return(e===void 0?window.devicePixelRatio:Math.min(window.devicePixelRatio,e))*t}applyResolutionSettings(){const t=Lm[this.resolutionPreset];this.renderer.setPixelRatio(this.getEffectivePixelRatio(t.multiplier,t.devicePixelRatioCap)),this.handleResize()}syncViewDistanceInputs(){if(this.viewDistancePresetInput.value=this.viewDistancePreset,this.viewDistancePreset==="CUSTOM"){this.viewDistanceCustomInput.value=String(this.viewDistanceCustomDistance),this.viewDistanceCustomInput.disabled=!1;return}this.viewDistanceCustomInput.value=String(js[this.viewDistancePreset].distance),this.viewDistanceCustomInput.disabled=!0}getViewDistanceConfig(){if(this.viewDistancePreset!=="CUSTOM")return js[this.viewDistancePreset];const t=Math.max(1,this.viewDistanceCustomDistance),e=Math.min(t,Math.max(16,Math.round(t*(160/300))));return{distance:t,fog:{enabled:!0,far:t,near:e}}}getCurrentViewDistance(){const t=this.getViewDistanceConfig();return t.fog.enabled?t.fog.far:t.distance}getCurrentLodTransitionDistance(){const t=this.getViewDistanceConfig();return t.fog.enabled?Math.min(t.fog.far,t.fog.near+(t.fog.far-t.fog.near)*.5):t.distance}createFogUniformProvider(){return{color:()=>this.fogColor,enabled:()=>this.getViewDistanceConfig().fog.enabled,far:()=>this.getViewDistanceConfig().fog.far,near:()=>this.getViewDistanceConfig().fog.near}}applyViewDistanceSettings(){this.chunkRendererHost&&(this.chunkRendererHost.fogEnabled=this.getViewDistanceConfig().fog.enabled,this.chunkRendererHost.fogFar=this.getViewDistanceConfig().fog.far,this.chunkRendererHost.fogNear=this.getViewDistanceConfig().fog.near),this.updateViewDistanceVisibility()}applyLightingSettings(){this.chunkBlockMaterialManager||(this.chunkBatchRenderer.setAmbientColor(this.entityAmbientLight.color),this.chunkBatchRenderer.setAmbientIntensity(this.lightingAmbient)),this.entityAmbientLight.intensity=this.lightingAmbient,this.fogColor.set(this.fogColorHex).convertSRGBToLinear(),this.skyboxIntensity=this.skyboxUiIntensity,this.skyboxMesh&&this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor())}getEntityGlobalCoordinate(t){return{x:Math.floor(t.x),y:Math.floor(t.y),z:Math.floor(t.z)}}getEntityLightLevel(t){const e=this.getEntityGlobalCoordinate(t),n=this.world.getLightSourcesNear(e,NA);let i=0;for(const r of n){const o=e.x-r.position.x+.5,a=e.y-r.position.y+.5,l=e.z-r.position.z+.5;if(o>r.level||o<-r.level||a>r.level||a<-r.level||l>r.level||l<-r.level)continue;const c=o*o+a*a+l*l,h=r.level*r.level;if(c>=h)continue;const u=r.level-Math.sqrt(c);u>i&&(i=u)}return Math.max(0,Math.min(1,i/u0))}getEntitySkyLight(t){const e=this.getEntityGlobalCoordinate(t);let n=un;for(let r=un;r>=0;r--){const o=this.getEntitySkyOpacityUp({x:e.x,y:e.y+r,z:e.z});o!==void 0?n=o+n*(1-o):n=Math.min(un,n+1)}const i=Math.max(1,Math.min(un,Math.round(n)));return ro[i]}getEntitySkyOpacityUp(t){if(!this.atlas)return;const e=this.world.getBlockType(t);if(!e||e.isLiquid)return;const n=this.getEntityBlockOpacity(e);return e.trimeshOcclusionProfile?this.getEntityTrimeshSkyOpacity(e,this.world.getBlockRotation(t))*n:n}getEntityBlockOpacity(t){let e=0;for(const i of _r)e+=this.atlas.getFaceUvs(t,i).transparencyRatio;const n=e/_r.length;return Math.max(0,Math.min(1,1-n))}getEntityTrimeshSkyOpacity(t,e){const n=t.trimeshOcclusionProfile;if(!n)return 1;const i=zi[e]??zi[0],r=i[3],o=i[5];return Math.abs(r)>.5?n.skyOpacityX:Math.abs(o)>.5?n.skyOpacityZ:n.skyOpacityUp}updateEntityLighting(t){this.entityMeshManager.updateLighting(e=>this.buildStaticEntityLightingDescriptor(e),t?new Set(t):void 0)}getCurrentSkyboxDisplayColor(){const t=this.getViewDistanceConfig();if(!t.fog.enabled)return cm.copy(this.fogColor).multiplyScalar(this.skyboxIntensity);const n=Math.max(0,Math.min(1,1-t.fog.near/100)),i=t.fog.far-t.fog.near,o=Math.max(1,100/Math.max(i,1)),a=Math.min(1,n*o);return cm.copy(fA.setRGB(1,1,1).lerp(this.fogColor,a)).multiplyScalar(this.skyboxIntensity)}restoreSidebarSectionState(t){let e={};try{e=JSON.parse(localStorage.getItem(Kc)??"{}")}catch{e={}}for(const n of t.querySelectorAll(".sidebar-section[data-section]")){const i=n.dataset.section;i&&(n.open=e[i]===!0)}}bindSidebarSectionState(t){for(const e of t.querySelectorAll(".sidebar-section[data-section]"))e.addEventListener("toggle",()=>{const n=e.dataset.section;if(!n)return;let i={};try{i=JSON.parse(localStorage.getItem(Kc)??"{}")}catch{i={}}i[n]=e.open,localStorage.setItem(Kc,JSON.stringify(i))})}createEntityRenderMaterial(t){const e=Array.isArray(t)?t[0]:t,n=e,i=new ew({color:n.color??new ut(16777215),map:n.map??null,alphaMap:n.alphaMap??null,alphaTest:n.alphaTest??0,transparent:e.transparent,opacity:e.opacity,side:e.side,depthWrite:e.depthWrite,depthTest:e.depthTest,emissive:n.emissive??new ut(0),emissiveIntensity:n.emissiveIntensity??1,emissiveMap:n.emissiveMap??null,fogUniformProvider:this.createFogUniformProvider()});return i.name=`${e.name||"entity"}-editor`,this.ensureEntityMaterialSetup(i),i}ensureEntityMaterialSetup(t){if(t.userData[Tm])return;const e=this;t.addShaderProcessor(n=>{n.uniforms.worldEditorAmbientLightColor={value:this.entityAmbientLight.color},n.uniforms.worldEditorAmbientLightIntensity={get value(){return e.entityAmbientLight.intensity}},n.vertexShader=n.vertexShader.replace("void main() {",`
            #ifdef USE_INSTANCING
              attribute float ${bm};
              attribute float ${Em};
            #endif
            varying float ${Kr};
            varying float ${Zr};
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
              ${Kr} = 0.0;
              ${Zr} = 1.0;
          `).replace("#include <uv_vertex>",`
            #include <uv_vertex>
            #ifdef USE_INSTANCING
              ${Kr} = ${bm};
              ${Zr} = ${Em};
            #endif
            mat4 worldEditorInstanceWorldMatrix = modelMatrix;
            #ifdef USE_INSTANCING
              worldEditorInstanceWorldMatrix = modelMatrix * instanceMatrix;
            #endif
            worldEditorWorldNormalY = worldEditorGetWorldNormalY(normal, worldEditorInstanceWorldMatrix);
          `),n.fragmentShader=n.fragmentShader.replace("void main() {",`
            varying float ${Kr};
            varying float ${Zr};
            varying float worldEditorWorldNormalY;
            uniform vec3 worldEditorAmbientLightColor;
            uniform float worldEditorAmbientLightIntensity;

            void main() {
          `).replace("#include <opaque_fragment>",`
            vec3 ambientLight = worldEditorAmbientLightColor * worldEditorAmbientLightIntensity;
            vec3 blockLight = worldEditorAmbientLightColor * ${Kr};
            float normalY = gl_FrontFacing ? worldEditorWorldNormalY : -worldEditorWorldNormalY;
            float faceShade = ${Mm.toFixed(2)}
              + (${vm.toFixed(2)} - ${Sm.toFixed(2)}) * 0.5 * normalY
              + ((${vm.toFixed(2)} + ${Sm.toFixed(2)}) * 0.5 - ${Mm.toFixed(2)}) * normalY * normalY;
            outgoingLight *= max(ambientLight, blockLight);
            outgoingLight *= ${Zr} * faceShade;

            #include <opaque_fragment>
          `)}),t.userData[Tm]=!0}async loadEntityModelTemplate(t){this.entityModelCache.has(t)||this.entityModelCache.set(t,this.gltfLoader.loadAsync(t).then(n=>{const i=new Qe;return i.add(n.scene.clone(!0)),i.updateMatrixWorld(!0),i}).catch(n=>(console.error(n),new Qe)));const e=await this.entityModelCache.get(t);return e.children.length===0?null:e}resolveEntityModelUri(t){return t.startsWith("http://")||t.startsWith("https://")||t.startsWith("/")?t:`/voxcinder/world-editor/${t}`}getEntityModelUri(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.modelUri=="string"&&e.modelUri.length>0?e.modelUri:null}updateHoverFromPointer(t){this.updateHoverFromClientPosition(t.clientX,t.clientY)}updateHoverFromScreenCenter(){const t=this.renderer.domElement.getBoundingClientRect();this.updateHoverFromClientPosition(t.left+t.width/2,t.top+t.height/2)}updateHoverFromClientPosition(t,e){const n=this.renderer.domElement.getBoundingClientRect();if(Ia.x=(t-n.left)/n.width*2-1,Ia.y=-((e-n.top)/n.height)*2+1,this.camera.updateMatrixWorld(),Vn.setFromMatrixPosition(this.camera.matrixWorld),qs.set(Ia.x,Ia.y,.5).unproject(this.camera),cs.copy(qs).sub(Vn).normalize(),this.currentTool==="select"&&this.partSelectionStart&&this.partSelectionEnd&&!this.partSelectionBounds){const l=this.getPartSelectionHeightCoordinateFromRay();if(l){this.hoveredBlock=null,this.hoveredBlockHitPoint=null,this.hoveredPlacement=l,this.setSelectionHoverBox(l);return}}const i=this.raycastBlocks(Vn,cs,mA);if(i){this.hoveredBlock=i.coordinate,this.hoveredBlockHitPoint=i.hitPoint;const l=this.getPlacementCoordinateFromBlock(i.coordinate,i.normal);this.hoveredPlacement=l,this.currentTool==="build"?this.setBuildHoverBox(l):this.currentTool==="erase"?this.setHoverBox(i.coordinate,"#f05d6c"):this.currentTool==="select"&&this.setSelectionHoverBox(i.coordinate);return}this.hoveredBlock=null,this.hoveredBlockHitPoint=null;const r=-.5,o=cs.dot(pA);if(Math.abs(o)<1e-6){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}const a=(r-Vn.y)/o;if(a<0){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}qs.copy(Vn).addScaledVector(cs,a),this.hoveredPlacement={x:Math.floor(qs.x),y:0,z:Math.floor(qs.z)},this.setHoverIndicatorVisible(!1),this.hoveredPlacement&&this.currentTool==="build"&&this.setBuildHoverBox(this.hoveredPlacement),this.hoveredBlock&&this.currentTool==="erase"&&this.setHoverBox(this.hoveredBlock,"#f05d6c"),this.hoveredPlacement&&this.currentTool==="select"&&this.setSelectionHoverBox(this.hoveredPlacement)}clearHover(){if(this.hoveredPlacement=null,this.hoveredBlock=null,this.hoveredBlockHitPoint=null,this.currentTool==="select"&&this.partSelectionStart&&this.partSelectionEnd){this.setSelectionHoverBox(this.partSelectionEnd);return}this.setHoverIndicatorVisible(!1)}getPlacementCoordinateFromBlock(t,e){return{x:t.x+Math.round(e.x),y:t.y+Math.round(e.y),z:t.z+Math.round(e.z)}}configureHoverFrame(t,e){const n={x:t.x+Yc-1,y:t.y+Yc-1,z:t.z+Yc-1},i={x:n.x/2-ui/2,y:n.y/2-ui/2,z:n.z/2-ui/2};this.hoverIndicatorRoot.scale.setScalar(1),this.hoverIndicatorRoot.traverse(r=>{const o=r;if(!o.material)return;const a=o.userData.hoverFrameAxis;if(a){const c=Number(o.userData.hoverFrameSignA)||1,h=Number(o.userData.hoverFrameSignB)||1;a==="x"?(o.scale.set(n.x,ui,ui),o.position.set(0,c*i.y,h*i.z)):a==="y"?(o.scale.set(ui,n.y,ui),o.position.set(c*i.x,0,h*i.z)):(o.scale.set(ui,ui,n.z),o.position.set(c*i.x,h*i.y,0)),o.updateMatrix()}const l=Array.isArray(o.material)?o.material:[o.material];for(const c of l){const h=c;h.color&&h.color.set(e)}})}setHoverBox(t,e){lm.set(t.x+.5,t.y+.5,t.z+.5),this.hoverIndicatorRoot.position.copy(lm),this.configureHoverFrame({x:1,y:1,z:1},e),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setBuildHoverBox(t){const e=this.parts.find(i=>i.id===this.selectedPartId);if(!e){this.setHoverBox(t,"#f5b942");return}const n={x:t.x-e.anchor.x,y:t.y-e.anchor.y,z:t.z-e.anchor.z};this.hoverIndicatorRoot.position.set(n.x+e.size.x/2,n.y+e.size.y/2,n.z+e.size.z/2),this.configureHoverFrame(e.size,"#f5b942"),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setSelectionHoverBox(t){if(!this.partSelectionStart){this.setHoverBox(t,"#61d6ff");return}const e=this.partSelectionBounds??(this.partSelectionEnd?this.getPartSelectionHeightBounds(t):this.getPartSelectionPreviewBounds(t));if(!e){this.setHoverBox(t,"#61d6ff");return}const n=this.partSelectionBounds?this.partSelectionHasBlocks&&!this.isPartSelectionTooLarge(this.partSelectionBounds)?"#6ee787":"#f05d6c":"#61d6ff";this.hoverIndicatorRoot.position.set(e.min.x+e.size.x/2,e.min.y+e.size.y/2,e.min.z+e.size.z/2),this.configureHoverFrame(e.size,n),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setHoverIndicatorVisible(t){this.hoverIndicatorRoot.visible=t,this.hoverBox.visible=!1}async applyCurrentTool(t){if(this.currentTool==="build"){t===0&&await this.placeSingleBlock();return}if(this.currentTool==="erase"){(t===0||t===2)&&await this.deleteSingleBlock();return}this.currentTool==="select"&&t===0&&this.updatePartSelectionPoint()}async rebuildAffectedChunks(t){await this.syncChunkMesherWorkerChunks(t),await this.enqueueChunkBuilds(t,Ba,this.activeChunkBuildGeneration),this.updateEntityLighting(t),this.updateDebugPanel()}requestAffectedChunksRebuild(t,e=!0){this.lastInteractiveChunkBuildRequestAt=performance.now(),e&&this.flushQueuedWorkerBlockUpdates(),this.queueChunkBuilds(t,Ba,this.activeChunkBuildGeneration),this.updateEntityLighting(t),this.updateDebugPanel()}queueChunkBuilds(t,e,n){if(!this.atlas||t.length===0||n!==this.activeChunkBuildGeneration)return[];const i=[...new Set(t)];for(const r of i){const o=this.inFlightChunkBuildPriorities.get(r)??0;if(this.inFlightChunkBuildIds.has(r)&&e>o){this.inFlightChunkBuildPriorities.set(r,e),this.chunkMesherWorker.postMessage({type:"prioritize_chunk_build",focusChunkId:r,priority:e,chunkId:r});continue}const a=this.pendingChunkBuildPriorities.get(r)??0;e>=a&&this.pendingChunkBuildPriorities.set(r,e)}return i}async enqueueChunkBuilds(t,e,n){const i=this.queueChunkBuilds(t,e,n);i.length!==0&&await new Promise(r=>{this.chunkBuildWaiters.push({chunkIds:new Set(i),resolve:r}),this.resolveChunkBuildWaiters()})}processChunkBuildQueueFrame(t){if(t!==this.activeChunkBuildGeneration||this.chunkBuildDispatchInProgress)return;const e=this.takeNextChunkBuildBatch();e.length!==0&&(this.chunkBuildDispatchInProgress=!0,this.dispatchChunkBuildBatch(e,t))}takeNextChunkBuildBatch(){const t=[...this.pendingChunkBuildPriorities.keys()].filter(n=>!this.inFlightChunkBuildIds.has(n)),e=t.filter(n=>(this.pendingChunkBuildPriorities.get(n)??0)>=Ba);return e.length>0?e.sort((n,i)=>this.getChunkDistanceToCameraSquared(n)-this.getChunkDistanceToCameraSquared(i)).slice(0,RA):performance.now()-this.lastInteractiveChunkBuildRequestAt<CA?[]:t.sort((n,i)=>this.getChunkDistanceToCameraSquared(n)-this.getChunkDistanceToCameraSquared(i)).slice(0,IA)}getChunkDistanceToCameraSquared(t){const e=$t.chunkIdToOriginCoordinate(t),n=e.x+8,i=e.y+8,r=e.z+8;return(n-this.camera.position.x)*(n-this.camera.position.x)+(i-this.camera.position.y)*(i-this.camera.position.y)+(r-this.camera.position.z)*(r-this.camera.position.z)}getChunkIdsSortedByDistanceToCamera(t){return[...new Set(t)].sort((e,n)=>this.getChunkDistanceToCameraSquared(e)-this.getChunkDistanceToCameraSquared(n))}async dispatchChunkBuildBatch(t,e){try{if(e!==this.activeChunkBuildGeneration)return;const n=t.filter(i=>!this.workerSyncedChunkIds.has(i));if(n.length>0&&await this.syncChunkMesherWorkerChunks(n),e!==this.activeChunkBuildGeneration)return;this.flushQueuedWorkerBlockUpdates();for(const i of t){const r=this.pendingChunkBuildPriorities.get(i);r!==void 0&&(this.pendingChunkBuildPriorities.delete(i),this.inFlightChunkBuildIds.add(i),this.inFlightChunkBuildPriorities.set(i,r),this.postBuildChunkRequest(i,r,e))}}finally{this.chunkBuildDispatchInProgress=!1}}resolveChunkBuildWaiters(){for(let t=this.chunkBuildWaiters.length-1;t>=0;t--){const e=this.chunkBuildWaiters[t];let n=!0;for(const i of e.chunkIds)if(this.pendingChunkBuildPriorities.has(i)||this.inFlightChunkBuildIds.has(i)){n=!1;break}n&&(this.chunkBuildWaiters.splice(t,1),e.resolve())}}postBuildChunkRequest(t,e,n){const i=this.nextWorkerRequestId++;this.chunkBuildRequestGenerations.set(i,n),this.chunkMesherWorker.postMessage({type:"build_chunk",focusChunkId:t,priority:e,requestId:i,chunkId:t})}flushDeferredChunkBuildResults(){const t=this.deferredInteractiveChunkBuildResults.length>0?this.deferredInteractiveChunkBuildResults.splice(0,this.deferredInteractiveChunkBuildResults.length):this.deferredBackgroundChunkBuildResults.splice(0,this.deferredBackgroundChunkBuildResults.length);if(t.length!==0){t.sort((e,n)=>{const i=(this.inFlightChunkBuildPriorities.get(n.chunkId)??0)-(this.inFlightChunkBuildPriorities.get(e.chunkId)??0);return i!==0?i:this.getChunkDistanceToCameraSquared(e.chunkId)-this.getChunkDistanceToCameraSquared(n.chunkId)});for(const e of t)this.chunkMeshManager?this.chunkMeshManager.setChunkGeometry(e.chunkId,e.geometry):this.chunkBatchRenderer.setChunkGeometry(e.chunkId,e.geometry),this.inFlightChunkBuildIds.delete(e.chunkId),this.inFlightChunkBuildPriorities.delete(e.chunkId);this.chunkMeshManager?this.chunkMeshManager.flush():this.chunkBatchRenderer.flush(),this.resolveChunkBuildWaiters()}}async initializeChunkMesherWorkerWorld(){if(!this.atlas)return;this.flushQueuedWorkerBlockUpdates();const t=this.nextWorkerRequestId++,e=this.atlasSnapshotCache??this.atlas.toSnapshot();await this.postChunkMesherWorkerRequest(t,{type:"sync_world",requestId:t,world:{blockTypes:this.world.toSnapshot().blockTypes,chunks:[]},atlas:e})}async syncChunkMesherWorkerChunks(t){if(!this.atlas||t.length===0)return;this.flushQueuedWorkerBlockUpdates();const e=[...new Set(t)],n=this.nextWorkerRequestId++;await this.postChunkMesherWorkerRequest(n,{type:"update_world_chunks",requestId:n,chunks:e.map(i=>({chunkId:i,snapshot:this.world.getChunkSnapshot(i)}))});for(const i of e)this.workerSyncedChunkIds.add(i)}queueChunkMesherWorkerBlockUpdate(t,e,n=0){const i=`${t.x},${t.y},${t.z}`;this.pendingWorkerBlockUpdates.set(i,{blockTypeId:e,coordinate:{...t},rotation:n})}canMergeQueuedBlockUpdates(t){for(const e of t)if(this.inFlightChunkBuildIds.has(e))return!1;return!0}flushQueuedWorkerBlockUpdates(){if(!this.atlas||this.pendingWorkerBlockUpdates.size===0)return;const t=[...this.pendingWorkerBlockUpdates.values()];this.chunkMesherWorker.postMessage({type:"update_world_blocks",updates:t}),this.pendingWorkerBlockUpdates.clear()}async postChunkMesherWorkerRequest(t,e){await new Promise(n=>{const i=r=>{const o=r.data;o.type!=="worker_ack"||o.requestId!==t||(this.chunkMesherWorker.removeEventListener("message",i),n())};this.chunkMesherWorker.addEventListener("message",i),this.chunkMesherWorker.postMessage(e)})}loadSkyboxTexture(t){return new Promise((e,n)=>{const i=this.cubeTextureLoader.load([...t],()=>e(i),void 0,r=>n(r));i.colorSpace=we})}createSkyboxMesh(t){const e=new Me(new pi(1,1,1),t);return e.renderOrder=-1e3,e.frustumCulled=!1,e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1,e}disposeSkyboxMesh(){if(!this.skyboxMesh)return;this.scene.remove(this.skyboxMesh),this.skyboxMesh.geometry.dispose();const t=this.skyboxMesh.material;t instanceof Bm&&t.map.dispose(),t.dispose(),this.skyboxMesh=null}ensurePlaceholderSkybox(){this.skyboxMesh instanceof Me&&this.skyboxMesh.material instanceof Dm||(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new Dm),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh))}async loadSkybox(t){const e=t===mm,n=Array.isArray(t)?[...t]:[`${t}/+x.png`,`${t}/-x.png`,`${t}/+y.png`,`${t}/-y.png`,`${t}/+z.png`,`${t}/-z.png`],i=this.loadSkyboxTexture(n);this.pendingSkyboxTexture=i,this.ensurePlaceholderSkybox();let r=null;try{r=await i}catch(o){if(console.error(o),!e)try{r=await this.loadSkyboxTexture(mm)}catch(a){console.error(a)}}this.pendingSkyboxTexture===i&&(this.pendingSkyboxTexture=null,r&&(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new Bm(r)),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh)))}updateSkybox(){this.skyboxMesh&&(this.camera.updateMatrixWorld(),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.skyboxMesh.position.copy(this.camera.position),this.skyboxMesh.updateMatrix(),this.skyboxMesh.matrixWorld.copy(this.skyboxMesh.matrix))}raycastBlocks(t,e,n){let i=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z);const a=Math.sign(e.x),l=Math.sign(e.y),c=Math.sign(e.z),h=a===0?Number.POSITIVE_INFINITY:Math.abs(1/e.x),u=l===0?Number.POSITIVE_INFINITY:Math.abs(1/e.y),d=c===0?Number.POSITIVE_INFINITY:Math.abs(1/e.z);let f=jc(t.x,e.x,i,a),p=jc(t.y,e.y,r,l),_=jc(t.z,e.z,o,c);if(this.world.hasBlock({x:i,y:r,z:o}))return{coordinate:{x:i,y:r,z:o},hitPoint:{x:t.x,y:t.y,z:t.z},normal:{x:0,y:1,z:0}};let m=0,g={x:0,y:0,z:0};for(;m<=n;)if(f<p&&f<_?(i+=a,m=f,f+=h,g={x:-a,y:0,z:0}):p<_?(r+=l,m=p,p+=u,g={x:0,y:-l,z:0}):(o+=c,m=_,_+=d,g={x:0,y:0,z:-c}),this.world.hasBlock({x:i,y:r,z:o}))return{coordinate:{x:i,y:r,z:o},hitPoint:{x:t.x+e.x*m,y:t.y+e.y*m,z:t.z+e.z*m},normal:g};return null}setToolMode(t){this.currentTool==="select"&&t!=="select"&&this.clearPartSelection(),this.currentTool=t,this.toolToggleButton.classList.toggle("active",!0),this.toolToggleButton.innerHTML=`<span class="tool-slot-icon" aria-hidden="true">${this.getToolIconSvg(t)}</span>`,this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(t)),this.toolToggleButton.dataset.tooltip=this.getToolLabel(t),this.updateStatus(`Tool changed to ${this.getToolLabel(t)}.`),this.pointerLocked&&this.updateHoverFromScreenCenter()}clearPartSelection(){this.partSelectionStart=null,this.partSelectionEnd=null,this.partSelectionBounds=null,this.partSelectionHasBlocks=!1,this.syncPartSelectionUi()}toggleToolMode(){const t=this.currentTool==="build"?"erase":this.currentTool==="erase"?"select":"build";this.setToolMode(t)}getToolLabel(t){switch(t){case"build":return"Build";case"erase":return"Erase";case"select":return"Select"}}getToolIconSvg(t){switch(t){case"build":return`
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
        `;case"select":return`
          <svg viewBox="0 -960 960 960" fill="currentColor">
            <path d="M200-200v80q-33 0-56.5-23.5T120-200h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80q0-33 23.5-56.5T200-840v80Zm80 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 560h80q0 33-23.5 56.5T760-120v-80Zm0-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z"></path>
          </svg>
        `}}async placeSingleBlock(){if(this.selectedPartId){await this.placeSelectedPart();return}const t=this.hoveredPlacement;if(!t)return;const e=this.world.blockTypes.find(l=>l.id===this.selectedBlockTypeId);if(!e){this.updateStatus("No block pattern selected.");return}if(this.world.getBlockTypeId(t)===e.id)return;const n=this.world.getBlockTypeId(t),i=new Set([$t.globalCoordinateToChunkId(t)]),r=this.captureChunkStates(i);this.world.setBlock(t,e.id);const o=[...this.world.getAffectedChunkIds(t,n,e.id)],a=this.canMergeQueuedBlockUpdates(o);a?this.queueChunkMesherWorkerBlockUpdate(t,e.id):await this.syncChunkMesherWorkerChunks(o),this.spawnBlockPlaceDustEffect(t,e),this.playBlockPlaceAudio(),this.pushPatchUndoState(`Place ${e.name}`,r),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild(o,!a),this.scheduleAutosave(),this.updateStatus(`Placed ${e.name} at ${Jc(t)}.`)}async placeSelectedPart(){const t=this.parts.find(c=>c.id===this.selectedPartId),e=this.hoveredPlacement;if(!t||!e)return;let n;try{n=this.resolvePartPlacements(t,e)}catch(c){this.updateStatus(`Part placement failed: ${c.message}`);return}if(n.length===0){this.updateStatus(`Part "${t.title}" has no placeable blocks.`);return}const i=new Set,r=new Set;for(const c of n){const h=this.world.getBlockTypeId(c.coordinate);if(!(h===c.blockTypeId&&this.world.getBlockRotation(c.coordinate)===c.rotation)){i.add($t.globalCoordinateToChunkId(c.coordinate));for(const u of this.world.getAffectedChunkIds(c.coordinate,h,c.blockTypeId))r.add(u)}}if(i.size===0)return;const o=this.captureChunkStates(i);for(const c of n)this.world.setBlock(c.coordinate,c.blockTypeId,c.rotation);const a=[...r],l=n.length<=64&&this.canMergeQueuedBlockUpdates(a);if(l)for(const c of n)this.queueChunkMesherWorkerBlockUpdate(c.coordinate,c.blockTypeId,c.rotation);else await this.syncChunkMesherWorkerChunks(a);this.spawnPartPlaceDustEffects(n),this.playBlockPlaceAudio(),this.pushPatchUndoState(`Place part ${t.title}`,o),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild(a,!l),this.scheduleAutosave(),this.updateStatus(`Placed part "${t.title}".`)}async deleteSingleBlock(){const t=this.hoveredBlock;if(!t||!this.world.hasBlock(t))return;const e=this.world.getBlockTypeId(t),n=this.world.getBlockTypeById(e),i=new Set([$t.globalCoordinateToChunkId(t)]),r=this.captureChunkStates(i);n&&(this.spawnBlockHitDustEffect(this.hoveredBlockHitPoint??vC(t),t,n),this.spawnBlockBreakEffect(t,n),this.playBlockBreakAudio()),this.world.deleteBlock(t);const o=[...this.world.getAffectedChunkIds(t,e,0)],a=this.canMergeQueuedBlockUpdates(o);a?this.queueChunkMesherWorkerBlockUpdate(t,0):await this.syncChunkMesherWorkerChunks(o),this.pushPatchUndoState(`Delete ${Jc(t)}`,r),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild(o,!a),this.scheduleAutosave(),this.updateStatus(`Deleted block at ${Jc(t)}.`)}spawnBlockBreakEffect(t,e){const n=this.getBlockBreakParticleEmitter(e),i=new Dt().setPosition(t.x+.5,t.y+.75,t.z+.5),r=this.resolveBlockBreakParticleColorTint(e),o={colorStart:r,colorEnd:r,colorIntensityStart:1.25,colorIntensityEnd:1.15,lifetime:.22,lifetimeVariance:.07,positionVariance:new L(.42,.42,.42),velocity:new L(0,3.1,0),velocityVariance:new L(3.4,2,3.4),sizeStart:.17,sizeStartVariance:.06,sizeEnd:.07,sizeEndVariance:.03,opacityStart:1,opacityEnd:.9};n.core.setAttachmentMatrix(0,i),n.core.burst(kA,0,o),this.syncParticleEmitterScenePresence(n)}spawnBlockHitDustEffect(t,e,n){const i=this.getBlockHitDustEmitter(),r=Wm(this.resolveBlockBreakParticleColorTint(n),1.35),o=e.x+.5,a=e.y+.5,l=e.z+.5;let c=t.x-o,h=t.y-a,u=t.z-l;const d=Math.hypot(c,h,u);d<1e-4?(c=0,h=1,u=0):(c/=d,h/=d,u/=d);const f=new Dt().setPosition(t.x+c*.2,t.y+h*.2,t.z+u*.2),p={colorStart:r,colorEnd:r,colorIntensityStart:1.7,colorIntensityEnd:1.1,lifetime:.58,lifetimeVariance:.2,positionVariance:new L(.26,.2,.26),velocity:new L(c*1.25,Math.max(.6,h*.9+.6),u*1.25),velocityVariance:new L(.95,.7,.95),sizeStart:.3,sizeStartVariance:.1,sizeEnd:.55,sizeEndVariance:.18,opacityStart:.95,opacityEnd:.1};i.core.setAttachmentMatrix(0,f),i.core.burst(Am,0,p),this.syncParticleEmitterScenePresence(i)}spawnBlockPlaceDustEffect(t,e,n=Am){const i=this.getBlockHitDustEmitter(),r=Wm(this.resolveBlockBreakParticleColorTint(e),1.2),o=new Dt().setPosition(t.x+.5,t.y+.55,t.z+.5),a={colorStart:r,colorEnd:r,colorIntensityStart:1.6,colorIntensityEnd:1.1,lifetime:.56,lifetimeVariance:.18,positionVariance:new L(.28,.2,.28),velocity:new L(0,.85,0),velocityVariance:new L(.8,.45,.8),sizeStart:.3,sizeStartVariance:.1,sizeEnd:.56,sizeEndVariance:.16,opacityStart:.95,opacityEnd:.03};i.core.setAttachmentMatrix(0,o),i.core.burst(n,0,a),this.syncParticleEmitterScenePresence(i)}spawnPartPlaceDustEffects(t){if(t.length===0)return;const e=Math.max(1,Math.ceil(t.length/Cm));let n=0;for(let i=0;i<t.length&&n<Cm;i+=e){const r=t[i],o=this.world.getBlockTypeById(r.blockTypeId);o&&(this.spawnBlockPlaceDustEffect(r.coordinate,o,zA),n+=1)}}getBlockBreakParticleEmitter(t){const e=t.textureUris.top,n=this.blockBreakEmitters.get(e);if(n)return n;const i=this.loadParticleTexture(e),r=new xp({alphaTest:.5,maxParticles:FA,rate:0,texture:i,transparent:!1});r.mesh.matrixAutoUpdate=!1,r.mesh.matrixWorldAutoUpdate=!1,r.mesh.frustumCulled=!1;const o={core:r,texture:i};return this.blockBreakEmitters.set(e,o),o}getBlockHitDustEmitter(){if(this.blockHitDustEmitter)return this.blockHitDustEmitter;const t=this.loadParticleTexture(VA),e=new xp({alphaTest:.005,maxParticles:HA,orientation:"billboard",rate:0,texture:t,transparent:!0});return e.mesh.matrixAutoUpdate=!1,e.mesh.matrixWorldAutoUpdate=!1,e.mesh.frustumCulled=!1,this.blockHitDustEmitter={core:e,texture:t},this.blockHitDustEmitter}loadParticleTexture(t){return this.particleTextureLoader.load(t)}resolveBlockBreakParticleColorTint(t){if(!this.atlas)return OA;const e=this.atlas.getFaceUvs(t,"top").averageRGB;return new ut(ar(e[0]),ar(e[1]),ar(e[2]))}syncParticleEmitterScenePresence(t){t.core.hasRenderableParticles()?t.core.mesh.parent===null&&this.scene.add(t.core.mesh):t.core.mesh.parent!==null&&this.scene.remove(t.core.mesh)}updateBlockBreakEffects(t){const e=this.getCurrentViewDistance();for(const n of this.blockBreakEmitters.values())n.core.setViewDistanceCulling(this.camera.position,e),n.core.update(t),this.syncParticleEmitterScenePresence(n);this.blockHitDustEmitter&&(this.blockHitDustEmitter.core.setViewDistanceCulling(this.camera.position,e),this.blockHitDustEmitter.core.update(t),this.syncParticleEmitterScenePresence(this.blockHitDustEmitter))}playBlockBreakAudio(){this.playExclusiveActionAudio({playbackRate:XA,uri:GA,volume:WA},qA)}playBlockPlaceAudio(){this.playExclusiveActionAudio({playbackRate:KA,uri:$A,volume:YA},ZA)}playExclusiveActionAudio(t,e){this.resumeAudioContext();const n=this.getOrCreateExclusiveAudioState(t.uri);let i=n.slots.findIndex(l=>!l.isActive);i===-1&&(i=n.nextSlotIndex);const r=n.slots[i];r.cleanupTimer!==null&&(window.clearTimeout(r.cleanupTimer),r.cleanupTimer=null),this.applyAudioOptions(r.audio,t),r.isActive=!0,r.playGeneration+=1;const o=r.playGeneration;this.loadAudioBuffer(t.uri).then(l=>{r.playGeneration===o&&(r.audio.isPlaying&&r.audio.stop(),r.audio.setBuffer(l),r.audio.play(),r.cleanupTimer=window.setTimeout(()=>{r.playGeneration===o&&(r.audio.isPlaying&&r.audio.stop(),r.cleanupTimer=null,r.isActive=!1)},e))}).catch(l=>{console.warn(`WorldEditor: Failed to load audio "${t.uri}".`,l)}),n.nextSlotIndex=(i+1)%Rm}getOrCreateExclusiveAudioState(t){const e=this.exclusiveAudioStates.get(t);if(e)return e;const n={nextSlotIndex:0,slots:Array.from({length:Rm},()=>{const i=new Ny(this.audioListener);return i.setLoop(!1),{audio:i,cleanupTimer:null,isActive:!1,playGeneration:0}})};return this.exclusiveAudioStates.set(t,n),n}applyAudioOptions(t,e){t.setVolume(e.volume),t.setPlaybackRate(e.playbackRate),t.setDetune(0)}loadAudioBuffer(t){const e=this.audioBufferCache.get(t);if(e)return e;const n=this.audioLoader.loadAsync(t);return this.audioBufferCache.set(t,n),n}async resumeAudioContext(){this.audioListener.context.state==="suspended"&&await this.audioListener.context.resume()}pushHistoryEntry(t){this.undoStack.push(t),this.undoStack.length>EA&&this.undoStack.shift(),this.redoStack=[],this.updateHistoryButtons()}pushSnapshotUndoState(t,e,n){this.pushHistoryEntry({kind:"snapshot",label:t,before:e,after:n})}pushPatchUndoState(t,e,n=[]){const i=[];for(const[o,a]of e){const l=this.world.getChunkSnapshot(o);this.chunkSnapshotsEqual(a,l)||i.push({chunkId:o,before:a,after:l})}const r=n.filter(o=>this.entityDiffChanged(o));return i.length===0&&r.length===0?!1:(this.pushHistoryEntry({kind:"patch",label:t,chunks:i,...r.length>0?{entities:r}:{}}),!0)}serializeHistoryEntry(t){return t.kind==="snapshot"?{kind:"snapshot",label:t.label,beforeWorld:this.snapshotToWorldMap(t.before),afterWorld:this.snapshotToWorldMap(t.after)}:{kind:"patch",label:t.label,chunks:t.chunks.map(e=>({chunkId:e.chunkId,before:this.serializeChunkSnapshot(e.before),after:this.serializeChunkSnapshot(e.after)})),...t.entities?{entities:t.entities.map(e=>this.serializeEntityHistoryDiff(e))}:{}}}deserializeHistoryEntry(t){return t.kind==="snapshot"?{kind:"snapshot",label:t.label,before:this.worldMapToSnapshot(t.beforeWorld),after:this.worldMapToSnapshot(t.afterWorld)}:{kind:"patch",label:t.label,chunks:t.chunks.map(e=>({chunkId:e.chunkId,before:this.deserializeChunkSnapshot(e.before),after:this.deserializeChunkSnapshot(e.after)})),...t.entities?{entities:t.entities.map(e=>this.deserializeEntityHistoryDiff(e))}:{}}}captureChunkStates(t){const e=new Map;for(const n of new Set(t))e.set(n,this.world.getChunkSnapshot(n));return e}serializeChunkSnapshot(t){return t?{chunkId:t.chunkId,originCoordinate:{...t.originCoordinate},blocks:Array.from(t.blocks),rotations:Array.from(t.rotations)}:null}deserializeChunkSnapshot(t){return t?{chunkId:t.chunkId,originCoordinate:{...t.originCoordinate},blocks:new Uint16Array(t.blocks),rotations:new Uint8Array(t.rotations)}:null}serializeEntityHistoryDiff(t){return{...t,before:this.cloneEntityValue(t.before),after:this.cloneEntityValue(t.after)}}deserializeEntityHistoryDiff(t){return{...t,before:this.cloneEntityValue(t.before),after:this.cloneEntityValue(t.after)}}chunkSnapshotsEqual(t,e){return!t||!e?t===e:t.chunkId===e.chunkId&&t.originCoordinate.x===e.originCoordinate.x&&t.originCoordinate.y===e.originCoordinate.y&&t.originCoordinate.z===e.originCoordinate.z&&Ua(t.blocks,e.blocks)&&Ua(t.rotations,e.rotations)}entityDiffChanged(t){return t.hasBefore!==t.hasAfter?!0:!t.hasBefore&&!t.hasAfter?!1:JSON.stringify(t.before)!==JSON.stringify(t.after)}cloneEntityValue(t){return t==null?t:typeof structuredClone=="function"?structuredClone(t):JSON.parse(JSON.stringify(t))}snapshotToWorldMap(t){const e={};for(const n of t.chunks)for(let i=0;i<n.blocks.length;i++){const r=n.blocks[i];if(r===0)continue;const o=$t.blockIndexToLocalCoordinate(i),a=`${n.originCoordinate.x+o.x},${n.originCoordinate.y+o.y},${n.originCoordinate.z+o.z}`,l=n.rotations[i]??0;e[a]=l===0?r:{i:r,r:l}}return{blockTypes:t.blockTypes.map(n=>({id:n.id,name:n.name,textureUri:n.textureUri,isLiquid:n.isLiquid,lightLevel:n.lightLevel,...n.trimeshIndices?{trimeshIndices:Array.from(n.trimeshIndices)}:{},...n.trimeshVertices?{trimeshVertices:Array.from(n.trimeshVertices)}:{},durability:n.durability,customColliderOptions:n.customColliderOptions,isCustom:n.isCustom,isMultiTexture:n.isMultiTexture})),blocks:e,...t.entities?{entities:{...t.entities}}:{}}}worldMapToSnapshot(t){const e=new Hc;return e.load(t,is),e.toSnapshot()}async undo(){const t=this.undoStack.pop();if(!t){this.updateHistoryButtons(),this.updateStatus("Nothing to undo.");return}this.redoStack.push(t),this.updateHistoryButtons(),await this.applyHistoryEntry(t,"before"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Undid: ${t.label}.`)}async redo(){const t=this.redoStack.pop();if(!t){this.updateHistoryButtons(),this.updateStatus("Nothing to redo.");return}this.undoStack.push(t),this.updateHistoryButtons(),await this.applyHistoryEntry(t,"after"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Redid: ${t.label}.`)}async applyHistoryEntry(t,e){if(t.kind==="snapshot"){const r=e==="before"?t.before:t.after,o=e==="before"?t.after:t.before;this.markFullWorldAutosaveDirty(),await this.restoreSnapshot(r,o);return}const n=e==="before"?"before":"after",i=t.chunks.map(r=>r.chunkId);for(const r of t.chunks)this.world.applyChunkSnapshot(r.chunkId,r[n]);if(this.markChunkIdsAutosaveDirty(i),t.entities){const r={},o=this.world.entities;for(const a of t.entities){a.key in o&&(r[a.key]=this.cloneEntityValue(o[a.key]));const l=e==="before"?a.hasBefore:a.hasAfter,c=e==="before"?a.before:a.after;l?o[a.key]=this.cloneEntityValue(c):delete o[a.key]}this.world.setEntities(Object.keys(o).length>0?o:void 0),this.markEntitiesAutosaveDirty(),await this.syncEntityMarkersForKeys(t.entities.map(a=>a.key),r)}await this.rebuildAffectedChunks(this.expandChunkIdsForLighting(i))}markChunkIdsAutosaveDirty(t){if(!this.autosaveFullWorldDirty)for(const e of t)this.autosaveDirtyChunkIds.add(e)}markEntitiesAutosaveDirty(){this.autosaveEntitiesDirty=!0}markFullWorldAutosaveDirty(){this.autosaveFullWorldDirty=!0,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!0}resetAutosaveDirtyState(){this.autosaveFullWorldDirty=!1,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!1}async restoreSnapshot(t,e){const n=!this.areSnapshotsBlockTypeCompatible(e,t),i=n?[]:this.expandChunkIdsForLighting(this.getChangedChunkIds(e,t));if(this.world.loadSnapshot(t),n){await this.rebuildAllChunkMeshes();return}await this.rebuildAffectedChunks(i)}areSnapshotsBlockTypeCompatible(t,e){if(t.blockTypes.length!==e.blockTypes.length)return!1;for(let n=0;n<t.blockTypes.length;n++){const i=t.blockTypes[n],r=e.blockTypes[n];if(i.id!==r.id||i.name!==r.name||i.textureUri!==r.textureUri||i.isLiquid!==r.isLiquid||i.isMultiTexture!==r.isMultiTexture)return!1}return!0}getChangedChunkIds(t,e){const n=new Set,i=new Map(t.chunks.map(o=>[o.chunkId,o])),r=new Map(e.chunks.map(o=>[o.chunkId,o]));for(const o of new Set([...i.keys(),...r.keys()])){const a=i.get(o),l=r.get(o);if(!a||!l){n.add(o);continue}(!Ua(a.blocks,l.blocks)||!Ua(a.rotations,l.rotations))&&n.add(o)}return[...n]}expandChunkIdsForLighting(t){const e=new Set;for(const n of t){const i=$t.chunkIdToOriginCoordinate(n);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)e.add($t.originCoordinateToChunkId({x:i.x+a*16,y:i.y+r*16,z:i.z+o*16}))}return[...e]}updateStatus(t){}updateDebugPanel(){var n;const t=this.renderer.info,e=performance.memory;this.debugSummaryLine.innerHTML=`<strong>FPS:</strong> ${this.fps} <strong>Chunks:</strong> ${this.world.chunkIds.length} <strong>Chunk Batches:</strong> ${((n=this.chunkMeshManager)==null?void 0:n.batchMeshCount)??this.chunkBatchRenderer.batchMeshCount}`,this.debugRenderLine.innerHTML=`<strong>Draw Calls:</strong> ${t.render.calls} <strong>Triangles:</strong> ${t.render.triangles}`,this.debugSceneLine.innerHTML=`<strong>Geometries:</strong> ${t.memory.geometries} <strong>Textures:</strong> ${t.memory.textures}`,e?this.debugMemoryLine.innerHTML=`<strong>Heap:</strong> ${zu(e.usedJSHeapSize)} / ${zu(e.totalJSHeapSize)}`:this.debugMemoryLine.innerHTML="<strong>Heap:</strong> unavailable in this browser"}updateViewDistanceVisibility(){const t=this.getCurrentViewDistance(),e=this.getCurrentLodTransitionDistance();this.updateSceneVisibilityForCamera(this.camera,t,e)}updateSceneVisibilityForCamera(t,e,n){const i=e*e,r=n*n;t.updateMatrixWorld(),Ys.set(t.position.x,t.position.z),um.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ks.setFromProjectionMatrix(um);const a=(this.chunkMeshManager??this.chunkBatchRenderer).collectPreOcclusionChunkModes(Ys,r,i,Ks,this.nextPreOcclusionChunkModes);this.preOcclusionChunkModes.clear();for(const[l,c]of a)this.preOcclusionChunkModes.set(l,c);this.chunkMeshManager?this.chunkMeshManager.applyBatchVisibility(Ys,r,i,Ks,this.preOcclusionChunkModes):this.chunkBatchRenderer.applyViewDistanceVisibility(Ys,r,i,Ks,this.preOcclusionChunkModes),this.entityMeshManager.updateScenePresence(Ys,i,Ks);for(const l of this.entityRenderObjects){const c=Number(l.userData.visibilityRadius??1);Pa.center.copy(l.getWorldPosition(qs)),Pa.radius=c;const h=xC(Pa.center,Ys)<=i,u=Ks.intersectsSphere(Pa),d=h&&u,f=l.parent!==null;d&&!f?this.entityLayer.add(l):!d&&f&&this.entityLayer.remove(l)}}updateSpectatorRotation(t,e){this.spectatorPitch=Math.max(-fm,Math.min(fm,this.spectatorPitch+e*dm)),this.spectatorYaw-=t*dm,this.applySpectatorCameraOrientation(),this.scheduleViewStateAutosave()}applySpectatorCameraOrientation(){this.camera.rotation.set(-this.spectatorPitch,this.spectatorYaw,0,"YXZ")}updateSpectatorCamera(t){if(!this.pointerLocked&&!this.mobileControlsEnabled)return!1;const e=gA*(this.pressedKeys.has("shift")?_A:1)*t;Yr.copy(this.camera.rotation),Zs.set(0,0,-1).applyEuler(Yr),La.set(1,0,0).applyEuler(Yr);let n=!1;return this.pressedKeys.has("key_w")&&(this.camera.position.addScaledVector(Zs,e),n=!0),this.pressedKeys.has("key_s")&&(this.camera.position.addScaledVector(Zs,-e),n=!0),this.pressedKeys.has("key_a")&&(this.camera.position.addScaledVector(La,-e),n=!0),this.pressedKeys.has("key_d")&&(this.camera.position.addScaledVector(La,e),n=!0),this.mobileControlsEnabled&&(Math.abs(this.mobileMoveInputY)>.01&&(this.camera.position.addScaledVector(Zs,-this.mobileMoveInputY*e),n=!0),Math.abs(this.mobileMoveInputX)>.01&&(this.camera.position.addScaledVector(La,this.mobileMoveInputX*e),n=!0)),n&&this.scheduleViewStateAutosave(),n}getCurrentBlockTypeDefinitions(){return this.world.toJson().blockTypes??is}resolveTemplateBlockIds(t){var i;const e=(...r)=>{var a;const o=r.map(l=>l.toLowerCase());return(a=t.find(l=>o.includes(l.name.toLowerCase())))==null?void 0:a.id},n=((i=t[0])==null?void 0:i.id)??1;return{accent:e("bricks","andesite")??n,grass:e("grass-block","grass-block-pine","grass-flower-block","grass-flower-block-pine")??n,leaves:e("oak-leaves","birch-leaves","spruce-leaves")??n,sand:e("sand")??n,stone:e("stone","andesite","cobblestone")??n,wall:e("cobblestone","andesite","stone")??n,water:e("water")??n,wood:e("oak-log","spruce-log")??n}}getEntityLabel(t){if(t&&typeof t=="object"){const e=t,n=e.name??e.modelUri??e.modelLoopedAnimations??e.type;if(typeof n=="string"&&n.length>0)return n}return"entity"}async addEntityAtHover(){const t=this.hoveredPlacement??this.hoveredBlock;if(!t){this.updateStatus("No hover target for entity placement.");return}const e=`${t.x+.5},${t.y+.5},${t.z+.5}`,n=this.cloneEntityValue(void 0);this.world.setEntity(e,{name:"entity"}),this.pushPatchUndoState("Add entity",new Map,[{key:e,before:n,after:this.cloneEntityValue(this.world.entities[e]),hasBefore:!1,hasAfter:!0}]),this.selectedEntityKey=e,this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([e]),this.scheduleAutosave(),this.updateStatus(`Added entity at ${e}.`)}async saveSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}try{const t=JSON.parse(this.entityOptionsInput.value||"{}"),e=this.world.entities,n=this.cloneEntityValue(e[this.selectedEntityKey]);this.world.setEntity(this.selectedEntityKey,t),this.pushPatchUndoState("Edit entity",new Map,[{key:this.selectedEntityKey,before:n,after:this.cloneEntityValue(t),hasBefore:!0,hasAfter:!0}]),this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([this.selectedEntityKey],{[this.selectedEntityKey]:n}),this.scheduleAutosave(),this.updateStatus(`Saved entity at ${this.selectedEntityKey}.`)}catch(t){this.updateStatus(`Invalid entity JSON: ${t.message}`)}}async deleteSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}const t=this.selectedEntityKey,e=this.world.entities,n=this.cloneEntityValue(e[t]);this.world.deleteEntity(t),this.pushPatchUndoState("Delete entity",new Map,[{key:t,before:n,after:this.cloneEntityValue(void 0),hasBefore:!0,hasAfter:!1}]),this.markEntitiesAutosaveDirty(),this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([t],{[t]:n}),this.scheduleAutosave(),this.updateStatus(`Deleted entity at ${t}.`)}scheduleAutosave(){this.autosaveTimeoutId!==null&&window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=window.setTimeout(()=>{this.autosaveTimeoutId=null,this.flushAutosave()},_m)}scheduleViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=window.setTimeout(()=>{this.viewStateAutosaveTimeoutId=null,this.flushViewStateAutosave()},_m)}async flushAutosave(){this.autosaveTimeoutId!==null&&(window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=null);const t={fileName:this.fileName,blockTypes:this.world.blockTypes.map(r=>({id:r.id,name:r.name,textureUri:r.textureUri,isLiquid:r.isLiquid,lightLevel:r.lightLevel,...r.trimeshIndices?{trimeshIndices:Array.from(r.trimeshIndices)}:{},...r.trimeshVertices?{trimeshVertices:Array.from(r.trimeshVertices)}:{},durability:r.durability,customColliderOptions:r.customColliderOptions,isCustom:r.isCustom,isMultiTexture:r.isMultiTexture})),redoStack:this.redoStack.map(r=>this.serializeHistoryEntry(r)),undoStack:this.undoStack.map(r=>this.serializeHistoryEntry(r))},e=this.autosaveFullWorldDirty?this.world.chunkIds.map(r=>this.world.getChunkSnapshot(r)).filter(r=>r!==null).map(r=>({chunkId:r.chunkId,originCoordinate:r.originCoordinate,blocks:r.blocks,rotations:r.rotations})):[],n=this.autosaveFullWorldDirty?[]:[...this.autosaveDirtyChunkIds].map(r=>{const o=this.world.getChunkSnapshot(r);return{chunkId:r,snapshot:o?{chunkId:o.chunkId,originCoordinate:o.originCoordinate,blocks:o.blocks,rotations:o.rotations}:null}}),i=this.autosaveEntitiesDirty||this.autosaveFullWorldDirty?Object.entries(this.world.entities).map(([r,o])=>({key:r,options:o})):[];try{this.autosaveFullWorldDirty?await pC(this.currentAutosaveSlotId,t,e,i):await mC(this.currentAutosaveSlotId,t,n,this.autosaveEntitiesDirty?i:null),localStorage.removeItem(Da(this.currentAutosaveSlotId)),this.autosaveSlots=rC(this.autosaveSlots,this.currentAutosaveSlotId),await Js(this.autosaveSlots),this.resetAutosaveDirtyState()}catch(r){console.error(r);try{const o={fileName:this.fileName,redoStack:t.redoStack,undoStack:t.undoStack,world:this.world.toJson()};localStorage.setItem(Da(this.currentAutosaveSlotId),JSON.stringify(o))}catch(o){console.error(o)}}}async flushViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&(window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=null);const t={camera:{pitch:this.spectatorPitch,position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},yaw:this.spectatorYaw},lighting:{ambient:this.lightingAmbient,fogColorHex:this.fogColorHex,skyboxIntensity:this.skyboxUiIntensity},menuOpen:this.mobileSidebarOpen,paletteFilter:this.paletteFilter,resolutionPreset:this.resolutionPreset,viewDistance:{customDistance:this.viewDistanceCustomDistance,preset:this.viewDistancePreset}};try{await nC(t)}catch(e){console.error(e)}}buildExploreUrl(){const t=new URL(vA,window.location.origin);return t.searchParams.set(SA,"solo"),t.searchParams.set(bA,"peaceful"),t.searchParams.set(MA,"editor"),t}async openExploreMode(){const t=window.open("about:blank","_blank");if(!t){this.updateStatus("Failed to open Explore tab. Allow pop-ups and try again.");return}t.document.title="Preparing Explore...",this.updateStatus("Saving map for Explore...");try{await this.flushAutosave(),await this.flushViewStateAutosave(),t.location.href=this.buildExploreUrl().toString(),this.updateStatus("Opened Explore in a new tab.")}catch(e){t.close(),this.updateStatus(`Failed to open Explore: ${e.message}`)}}async getRestorableAutosavePayload(t){let e=null,n=null;try{n=await gC(t),n||(e=JSON.parse(localStorage.getItem(Da(t))??"null"))}catch{e=null,n=null}const i=(n==null?void 0:n.world)??(e==null?void 0:e.world);return i?{legacyPayload:e,metaPayload:(n==null?void 0:n.meta)??null,worldPayload:i}:null}async applyAutosavedWorldPayload(t,e){var n,i,r,o,a,l,c;try{this.world.load(t.worldPayload,is),this.selectedBlockTypeId=((n=this.world.blockTypes[0])==null?void 0:n.id)??this.selectedBlockTypeId,this.fileName=((i=t.metaPayload)==null?void 0:i.fileName)||((r=t.legacyPayload)==null?void 0:r.fileName)||"untitled-world-map.json",this.undoStack=(((o=t.metaPayload)==null?void 0:o.undoStack)??((a=t.legacyPayload)==null?void 0:a.undoStack)??[]).map(h=>this.deserializeHistoryEntry(h)),this.redoStack=(((l=t.metaPayload)==null?void 0:l.redoStack)??((c=t.legacyPayload)==null?void 0:c.redoStack)??[]).map(h=>this.deserializeHistoryEntry(h)),this.updateHistoryButtons(),this.resetAutosaveDirtyState(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),e?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),this.updateStatus(`Restored autosave for ${this.fileName}.`)}catch(h){throw console.error(h),localStorage.removeItem(Da(this.currentAutosaveSlotId)),Ou(this.currentAutosaveSlotId),h}}updateHistoryButtons(){this.undoButton.disabled=this.undoStack.length===0,this.redoButton.disabled=this.redoStack.length===0}async restoreAutosavedViewState(){var e,n;let t=null;try{t=await iC()}catch{t=null}t&&(this.spectatorPitch=t.camera.pitch,this.spectatorYaw=t.camera.yaw,this.camera.position.set(t.camera.position.x,t.camera.position.y,t.camera.position.z),this.applySpectatorCameraOrientation(),this.setMobileSidebarOpen(t.menuOpen??!1,!1),this.paletteFilter=t.paletteFilter??"",this.paletteFilterInput.value=this.paletteFilter,this.resolutionPreset=t.resolutionPreset??"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.viewDistancePreset=((e=t.viewDistance)==null?void 0:e.preset)??"MEDIUM",this.viewDistanceCustomDistance=((n=t.viewDistance)==null?void 0:n.customDistance)??js.MEDIUM.distance,this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.lightingAmbient=t.lighting.ambient,this.fogColorHex=t.lighting.fogColorHex||"#ffffff",this.skyboxUiIntensity=t.lighting.skyboxIntensity,this.syncLightingInputs(),this.applyLightingSettings())}}function Ro(){return new Promise((s,t)=>{const e=indexedDB.open(wA,1);e.onerror=()=>t(e.error),e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains(bn)||n.createObjectStore(bn)},e.onsuccess=()=>s(e.result)})}async function Id(s,t){const e=await Ro();try{return await new Promise((n,i)=>{const r=e.transaction(bn,s),o=r.objectStore(bn),a=t(o);a.onerror=()=>i(a.error),a.onsuccess=()=>n(a.result),r.onerror=()=>i(r.error)})}finally{e.close()}}function Bl(s,t){return Id("readwrite",e=>e.put(t,s)).then(()=>{})}function JA(s){return Id("readwrite",t=>t.delete(s)).then(()=>{})}async function Io(s){return await Id("readonly",e=>e.get(s))??null}function Pd(s){return`part-preview:${s}`}function QA(s,t){return Bl(Pd(s),t)}function tC(s){return Io(Pd(s))}function eC(s){return JA(Pd(s))}function nC(s){return Bl(l0,s)}function iC(){return Io(l0)}function Da(s){return`${TA}:${s}`}function sC(){return`slot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function Um(s,t){const e=Date.now();return{id:s,name:t,createdAt:e,updatedAt:e}}function rC(s,t){const e=Date.now();return s.map(n=>n.id===t?{...n,updatedAt:e}:n)}function oC(s){const t=Number(s);return Number.isInteger(t)&&t>0?t:void 0}function aC(s){return!s.publishedMapId||!s.editToken?{isChecking:!1,isUpdatingPublishedMap:!1}:{isChecking:!0,isUpdatingPublishedMap:!0}}function Nm(s){return s.isChecking?"Version: Checking...":s.isUpdatingPublishedMap&&!s.latestVersionNumber?"Version: Unknown":`Version: v${lC(s.isUpdatingPublishedMap,s.latestVersionNumber)}`}function lC(s,t){return s&&Number.isInteger(t)&&t>0?t+1:1}function cC(s){return s instanceof Error&&/\bmap\b.*\bnot found\b|\bmap\b.*\bwas not found\b/i.test(s.message)}function hC(s,t){var i;const e=t==="latest"?s.versionCount:Number(t);return((i=s.versions)==null?void 0:i.find(r=>r.versionNumber===e||r.versionId===t))??{blockCount:s.blockCount,sizeBytes:s.sizeBytes}}function km(s){const t=new Date(s);if(Number.isNaN(t.getTime()))return s;const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),r=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${e}/${n}/${i} ${r}:${o}:${a}`}async function uC(){const s=await Io(c0);return Array.isArray(s)?s.filter(t=>!!(t&&typeof t.id=="string"&&typeof t.name=="string")).sort((t,e)=>t.createdAt-e.createdAt):[]}function Js(s){return Bl(c0,s)}function dC(){return Io(h0)}function Qr(s){return Bl(h0,s)}function Tr(s){return`slot:${s}:`}function Ld(s){return`${Tr(s)}meta`}function f0(s,t){return`${Tr(s)}chunk:${t}`}function p0(s,t){return`${Tr(s)}entity:${t}`}async function fC(s,t){const e=await Ro();try{await new Promise((n,i)=>{const r=e.transaction(bn,s),o=r.objectStore(bn),a=o.openCursor();a.onerror=()=>i(a.error),a.onsuccess=()=>{const l=a.result;if(!l){n();return}Promise.resolve(t(l.key,l.value,o)).then(()=>l.continue()).catch(i)},r.onerror=()=>i(r.error)})}finally{e.close()}}async function pC(s,t,e,n){await Ou(s);const i=await Ro();try{await new Promise((r,o)=>{const a=i.transaction(bn,"readwrite"),l=a.objectStore(bn);l.put(t,Ld(s));for(const c of e)l.put(c,f0(s,c.chunkId));for(const c of n)l.put(c,p0(s,c.key));a.oncomplete=()=>r(),a.onerror=()=>o(a.error)})}finally{i.close()}}async function mC(s,t,e,n){const i=await Ro();try{await new Promise((r,o)=>{const a=i.transaction(bn,"readwrite"),l=a.objectStore(bn);l.put(t,Ld(s));for(const c of e){const h=f0(s,c.chunkId);c.snapshot?l.put(c.snapshot,h):l.delete(h)}if(n){const c=l.openCursor();c.onerror=()=>o(c.error),c.onsuccess=()=>{const h=c.result;if(!h){for(const u of n)l.put(u,p0(s,u.key));return}typeof h.key=="string"&&h.key.startsWith(`${Tr(s)}entity:`)&&h.delete(),h.continue()}}a.oncomplete=()=>r(),a.onerror=()=>o(a.error)})}finally{i.close()}}async function gC(s){const t=await Io(Ld(s));if(!t)return null;const e={},n={},i=Tr(s);return await fC("readonly",(r,o)=>{if(typeof r=="string"){if(r.startsWith(`${i}chunk:`)){const a=o;for(let l=0;l<a.blocks.length;l++){const c=a.blocks[l];if(c===0)continue;const h=$t.blockIndexToLocalCoordinate(l),u=`${a.originCoordinate.x+h.x},${a.originCoordinate.y+h.y},${a.originCoordinate.z+h.z}`,d=a.rotations[l]??0;e[u]=d===0?c:{i:c,r:d}}return}if(r.startsWith(`${i}entity:`)){const a=o;n[a.key]=a.options}}}),{meta:t,world:{blockTypes:t.blockTypes,blocks:e,...Object.keys(n).length>0?{entities:n}:{}}}}async function Ou(s){const t=await Ro();try{await new Promise((e,n)=>{const i=t.transaction(bn,"readwrite"),r=i.objectStore(bn),o=Tr(s),a=r.openCursor();a.onerror=()=>n(a.error),a.onsuccess=()=>{const l=a.result;if(!l){e();return}typeof l.key=="string"&&l.key.startsWith(o)&&l.delete(),l.continue()},i.onerror=()=>n(i.error)})}finally{t.close()}}function jc(s,t,e,n){if(n===0||t===0)return Number.POSITIVE_INFINITY;const i=n>0?e+1:e;return Math.abs((i-s)/t)}function zu(s){return`${(s/(1024*1024)).toFixed(1)} MB`}function Fm(s){return s<1024?`${s} B`:s<1024*1024?`${(s/1024).toFixed(1)} KB`:zu(s)}function _C(s){return s?`${s.x}x${s.y}x${s.z}`:"Size unknown"}function yC(s){if(!Number.isFinite(s))return"0";const t=Math.max(0,Math.round(s));return t<1e3?String(t):t<1e6?`${Om(t/1e3)}K`:`${Om(t/1e6)}M`}function Om(s){return s>=10?String(Math.round(s)):s.toFixed(1).replace(/\.0$/,"")}function Jc(s){return`${s.x},${s.y},${s.z}`}function Ua(s,t){if(s.length!==t.length)return!1;for(let e=0;e<s.length;e++)if(s[e]!==t[e])return!1;return!0}function zm(s){switch(s){case"KeyW":return"key_w";case"KeyA":return"key_a";case"KeyS":return"key_s";case"KeyD":return"key_d";case"Space":return"space";case"ShiftLeft":case"ShiftRight":return"shift";default:return s.toLowerCase()}}function Vm(s){return s instanceof HTMLElement?!!s.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]'):!1}function to(s,t,e){if(s.replaceChildren(),!e){const i=document.createElement("span");i.textContent="Preview unchanged",s.append(i);return}if(!t){const i=document.createElement("span");i.textContent="No Preview",s.append(i);return}const n=document.createElement("img");n.src=t,n.alt="",s.append(n)}function vl(s){return(typeof s=="string"?s.trim():"")||"You"}function Hm(){try{return vl(window.localStorage.getItem(d0))}catch{return"You"}}function Gm(s){try{window.localStorage.setItem(d0,vl(s))}catch{}}function Qs(s){const t=s.split(",");if(t.length!==3)return null;const e=Number(t[0]),n=Number(t[1]),i=Number(t[2]);return!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(i)?null:{x:e,y:n,z:i}}function xC(s,t){const e=s.x-t.x,n=s.z-t.y;return e*e+n*n}function ar(s){return Math.max(0,Math.min(1,1-wm+s*wm))}function Wm(s,t){return new ut(Math.min(1,s.r*t),Math.min(1,s.g*t),Math.min(1,s.b*t))}function vC(s){return{x:s.x+.5,y:s.y+.5,z:s.z+.5}}function MC(s){if(!s||typeof s!="object")return null;const t=s.tintColor;if(typeof t=="string"&&t.length>0)try{return new ut(t)}catch{return null}if(Array.isArray(t)&&t.length>=3){const e=Number(t[0]),n=Number(t[1]),i=Number(t[2]);if(Number.isFinite(e)&&Number.isFinite(n)&&Number.isFinite(i))return new ut(e,n,i)}if(t&&typeof t=="object"){const e=t,n=Number(e.r??e.x),i=Number(e.g??e.y),r=Number(e.b??e.z);if(Number.isFinite(n)&&Number.isFinite(i)&&Number.isFinite(r))return new ut(n,i,r)}return null}function SC(s){if($s.set(1,1,1),!s||typeof s!="object")return $s;const t=s,e=t.modelScale??t.scale;if(typeof e=="number")return $s.setScalar(e),$s;if(e&&typeof e=="object"){const n=e;$s.set(Number(n.x??1)||1,Number(n.y??1)||1,Number(n.z??1)||1)}return $s}function bC(s){if($r.identity(),!s||typeof s!="object")return $r;const e=s.rotation;if(!e||typeof e!="object")return $r;const n=e;return typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"&&typeof n.w=="number"&&$r.set(n.x,n.y,n.z,n.w),$r}new jA(a0);
