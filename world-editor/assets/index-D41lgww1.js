var $0=Object.defineProperty;var Y0=(s,e,t)=>e in s?$0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var C=(s,e,t)=>Y0(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ju="183",K0=0,nf=1,Z0=2,Wa=1,j0=2,uo=3,_n=0,Jt=1,jt=2,Ei=0,ur=1,sf=2,rf=3,of=4,J0=5,Ms=100,Q0=101,e_=102,t_=103,n_=104,i_=200,s_=201,r_=202,o_=203,ch=204,hh=205,a_=206,l_=207,c_=208,h_=209,u_=210,d_=211,f_=212,p_=213,m_=214,uh=0,dh=1,fh=2,_r=3,ph=4,mh=5,gh=6,_h=7,mg=0,g_=1,__=2,Jn=0,gg=1,_g=2,yg=3,xg=4,vg=5,bg=6,Sg=7,af="attached",y_="detached",Mg=300,Cs=301,yr=302,ql=303,Xl=304,Rl=306,xr=1e3,Kn=1001,il=1002,It=1003,Eg=1004,fo=1005,Lt=1006,qa=1007,bi=1008,gn=1009,Tg=1010,wg=1011,Ao=1012,Qu=1013,ti=1014,En=1015,wi=1016,ed=1017,td=1018,Co=1020,Ag=35902,Cg=35899,Ig=1021,Rg=1022,Tn=1023,Ai=1026,ws=1027,nd=1028,id=1029,vr=1030,sd=1031,rd=1033,Xa=33776,$a=33777,Ya=33778,Ka=33779,yh=35840,xh=35841,vh=35842,bh=35843,Sh=36196,Mh=37492,Eh=37496,Th=37488,wh=37489,Ah=37490,Ch=37491,Ih=37808,Rh=37809,Ph=37810,Lh=37811,Bh=37812,Dh=37813,kh=37814,Uh=37815,Nh=37816,Fh=37817,Oh=37818,zh=37819,Vh=37820,Hh=37821,Gh=36492,Wh=36494,qh=36495,Xh=36283,$h=36284,Yh=36285,Kh=36286,Io=2300,Ro=2301,$l=2302,lf=2303,cf=2400,hf=2401,uf=2402,x_=2500,v_=0,Pg=1,Zh=2,b_=3200,Lg=0,S_=1,Yi="",Ct="srgb",sn="srgb-linear",sl="linear",ot="srgb",ks=7680,df=519,M_=512,E_=513,T_=514,od=515,w_=516,A_=517,ad=518,C_=519,jh=35044,Sn=35048,ji="300 es",Zn=2e3,Po=2001;function I_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function R_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function P_(){const s=Lo("canvas");return s.style.display="block",s}const ff={};function rl(...s){const e="THREE."+s.shift();console.log(e,...s)}function Bg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xe(...s){s=Bg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ke(...s){s=Bg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ol(...s){const e=s.join(" ");e in ff||(ff[e]=!0,xe(...s))}function L_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const B_={[uh]:dh,[fh]:gh,[ph]:_h,[_r]:mh,[dh]:uh,[gh]:fh,[_h]:ph,[mh]:_r};class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pf=1234567;const dr=Math.PI/180,br=180/Math.PI;function Nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[s&255]+Xt[s>>8&255]+Xt[s>>16&255]+Xt[s>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function ld(s,e){return(s%e+e)%e}function D_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function k_(s,e,t){return s!==e?(t-s)/(e-s):0}function yo(s,e,t){return(1-t)*s+t*e}function U_(s,e,t,n){return yo(s,e,1-Math.exp(-t*n))}function N_(s,e=1){return e-Math.abs(ld(s,e*2)-e)}function F_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function O_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function z_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function V_(s,e){return s+Math.random()*(e-s)}function H_(s){return s*(.5-Math.random())}function G_(s){s!==void 0&&(pf=s);let e=pf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W_(s){return s*dr}function q_(s){return s*br}function X_(s){return(s&s-1)===0&&s!==0}function $_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Y_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function K_(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Z_={DEG2RAD:dr,RAD2DEG:br,generateUUID:Nn,clamp:Je,euclideanModulo:ld,mapLinear:D_,inverseLerp:k_,lerp:yo,damp:U_,pingpong:N_,smoothstep:F_,smootherstep:O_,randInt:z_,randFloat:V_,randFloatSpread:H_,seededRandom:G_,degToRad:W_,radToDeg:q_,isPowerOfTwo:X_,ceilPowerOfTwo:$_,floorPowerOfTwo:Y_,setQuaternionFromProperEuler:K_,normalize:at,denormalize:Un};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const x=Math.acos(m),S=Math.sin(x);g=Math.sin(g*x)/S,a=Math.sin(a*x)/S,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+_*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+_*a;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new L,mf=new Fn;class Oe{constructor(e,t,n,i,r,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],S=i[4],v=i[7],A=i[2],T=i[5],E=i[8];return r[0]=o*_+a*x+l*A,r[3]=o*m+a*S+l*T,r[6]=o*g+a*v+l*E,r[1]=c*_+h*x+u*A,r[4]=c*m+h*S+u*T,r[7]=c*g+h*v+u*E,r[2]=d*_+f*x+p*A,r[5]=d*m+f*S+p*T,r[8]=d*g+f*v+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kl=new Oe,gf=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j_(){const s={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ot&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yi?sl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[sn]:{primaries:e,whitePoint:n,transfer:sl,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),s}const et=j_();function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class J_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=Lo("canvas")),Us.width=e.width,Us.height=e.height;const i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q_=0;class cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Zl(i[o].image)):r.push(Zl(i[o]))}else r=Zl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?J_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}let ey=0;const jl=new L;class Bt extends Cr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Kn,i=Kn,r=Lt,o=bi,a=Tn,l=gn,c=Bt.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Nn(),this.name="",this.source=new cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){xe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Mg;Bt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,A=(g+1)/2,T=(h+d)/4,E=(u+_)/4,y=(p+m)/4;return S>v&&S>A?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=T/n,r=E/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=y/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=y/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ty extends Cr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Bt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new cd(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends ty{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dg extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class De{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,p,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,p,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iy,e,sy)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Pi.crossVectors(n,cn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Pi.crossVectors(n,cn)),Pi.normalize(),Oo.crossVectors(cn,Pi),i[0]=Pi.x,i[4]=Oo.x,i[8]=cn.x,i[1]=Pi.y,i[5]=Oo.y,i[9]=cn.y,i[2]=Pi.z,i[6]=Oo.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],S=n[7],v=n[11],A=n[15],T=i[0],E=i[4],y=i[8],M=i[12],B=i[1],I=i[5],O=i[9],z=i[13],P=i[2],k=i[6],V=i[10],U=i[14],X=i[3],j=i[7],ie=i[11],ae=i[15];return r[0]=o*T+a*B+l*P+c*X,r[4]=o*E+a*I+l*k+c*j,r[8]=o*y+a*O+l*V+c*ie,r[12]=o*M+a*z+l*U+c*ae,r[1]=h*T+u*B+d*P+f*X,r[5]=h*E+u*I+d*k+f*j,r[9]=h*y+u*O+d*V+f*ie,r[13]=h*M+u*z+d*U+f*ae,r[2]=p*T+_*B+m*P+g*X,r[6]=p*E+_*I+m*k+g*j,r[10]=p*y+_*O+m*V+g*ie,r[14]=p*M+_*z+m*U+g*ae,r[3]=x*T+S*B+v*P+A*X,r[7]=x*E+S*I+v*k+A*j,r[11]=x*y+S*O+v*V+A*ie,r[15]=x*M+S*z+v*U+A*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],x=l*f-c*d,S=a*f-c*u,v=a*d-l*u,A=o*f-c*h,T=o*d-l*h,E=o*u-a*h;return t*(_*x-m*S+g*v)-n*(p*x-m*A+g*T)+i*(p*S-_*A+g*E)-r*(p*v-_*T+m*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=t*a-n*o,S=t*l-i*o,v=t*c-r*o,A=n*l-i*a,T=n*c-r*a,E=i*c-r*l,y=h*_-u*p,M=h*m-d*p,B=h*g-f*p,I=u*m-d*_,O=u*g-f*_,z=d*g-f*m,P=x*z-S*O+v*I+A*B-T*M+E*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/P;return e[0]=(a*z-l*O+c*I)*k,e[1]=(i*O-n*z-r*I)*k,e[2]=(_*E-m*T+g*A)*k,e[3]=(d*T-u*E-f*A)*k,e[4]=(l*B-o*z-c*M)*k,e[5]=(t*z-i*B+r*M)*k,e[6]=(m*v-p*E-g*S)*k,e[7]=(h*E-d*v+f*S)*k,e[8]=(o*O-a*B+c*y)*k,e[9]=(n*B-t*O-r*y)*k,e[10]=(p*T-_*v+g*x)*k,e[11]=(u*v-h*T-f*x)*k,e[12]=(a*M-o*I-l*y)*k,e[13]=(t*I-n*M+i*y)*k,e[14]=(_*S-p*A-m*x)*k,e[15]=(h*A-u*S+d*x)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,m=o*u,g=a*u,x=l*c,S=l*h,v=l*u,A=n.x,T=n.y,E=n.z;return i[0]=(1-(_+g))*A,i[1]=(f+v)*A,i[2]=(p-S)*A,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(d+g))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(p+S)*E,i[9]=(m-x)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ns.set(i[0],i[1],i[2]).length();const a=Ns.set(i[4],i[5],i[6]).length(),l=Ns.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Pn.copy(this);const c=1/o,h=1/a,u=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Zn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Zn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Po)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Zn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Zn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Po)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new L,Pn=new De,iy=new L(0,0,0),sy=new L(1,1,1),Pi=new L,Oo=new L,cn=new L,yf=new De,xf=new Fn;class Cn{constructor(e=0,t=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ry=0;const vf=new L,Fs=new Fn,ai=new De,zo=new L,Ur=new L,oy=new L,ay=new Fn,bf=new L(1,0,0),Sf=new L(0,1,0),Mf=new L(0,0,1),Ef={type:"added"},ly={type:"removed"},Os={type:"childadded",child:null},Jl={type:"childremoved",child:null};class yt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new L,t=new Cn,n=new Fn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Oe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(bf,e)}rotateY(e){return this.rotateOnAxis(Sf,e)}rotateZ(e){return this.rotateOnAxis(Mf,e)}translateOnAxis(e,t){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bf,e)}translateY(e){return this.translateOnAxis(Sf,e)}translateZ(e){return this.translateOnAxis(Mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zo.copy(e):zo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Ur,zo,this.up):ai.lookAt(zo,Ur,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(ai),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ef),Os.child=e,this.dispatchEvent(Os),Os.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ly),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ef),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,ay,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cy={type:"move"};class Ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function ec(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=ld(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ec(o,r,e+1/3),this.g=ec(o,r,e),this.b=ec(o,r,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&xe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:xe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Ug[e.toLowerCase()];return n!==void 0?this.setHex(n,t):xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return et.workingToColorSpace($t.copy(this),e),Math.round(Je($t.r*255,0,255))*65536+Math.round(Je($t.g*255,0,255))*256+Math.round(Je($t.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace($t.copy(this),t);const n=$t.r,i=$t.g,r=$t.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ct){et.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,i=$t.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Vo);const n=yo(Li.h,Vo.h,t),i=yo(Li.s,Vo.s,t),r=yo(Li.l,Vo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new ue;ue.NAMES=Ug;class Tf extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ln=new L,li=new L,tc=new L,ci=new L,zs=new L,Vs=new L,wf=new L,nc=new L,ic=new L,sc=new L,rc=new _t,oc=new _t,ac=new _t;class Mn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ln.subVectors(i,t),li.subVectors(n,t),tc.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(li),l=Ln.dot(tc),c=li.dot(li),h=li.dot(tc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),li.subVectors(e,t),Ln.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Ln.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;zs.subVectors(i,n),Vs.subVectors(r,n),nc.subVectors(e,n);const l=zs.dot(nc),c=Vs.dot(nc);if(l<=0&&c<=0)return t.copy(n);ic.subVectors(e,i);const h=zs.dot(ic),u=Vs.dot(ic);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(zs,o);sc.subVectors(e,r);const f=zs.dot(sc),p=Vs.dot(sc);if(p>=0&&f<=p)return t.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Vs,a);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return wf.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(wf,a);const g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(zs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Go.subVectors(this.max,Nr),Hs.subVectors(e.a,Nr),Gs.subVectors(e.b,Nr),Ws.subVectors(e.c,Nr),Bi.subVectors(Gs,Hs),Di.subVectors(Ws,Gs),ns.subVectors(Hs,Ws);let t=[0,-Bi.z,Bi.y,0,-Di.z,Di.y,0,-ns.z,ns.y,Bi.z,0,-Bi.x,Di.z,0,-Di.x,ns.z,0,-ns.x,-Bi.y,Bi.x,0,-Di.y,Di.x,0,-ns.y,ns.x,0];return!lc(t,Hs,Gs,Ws,Go)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,Hs,Gs,Ws,Go))?!1:(Wo.crossVectors(Bi,Di),t=[Wo.x,Wo.y,Wo.z],lc(t,Hs,Gs,Ws,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new L,new L,new L,new L,new L,new L,new L,new L],Bn=new L,Ho=new Gt,Hs=new L,Gs=new L,Ws=new L,Bi=new L,Di=new L,ns=new L,Nr=new L,Go=new L,Wo=new L,is=new L;function lc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){is.fromArray(s,r);const a=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Pt=new L,qo=new We;let hy=0;class ze{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qo.fromBufferAttribute(this,t),qo.applyMatrix3(e),this.setXY(t,qo.x,qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jh&&(e.usage=this.usage),e}}class Ng extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fg extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class An extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}}const uy=new Gt,Fr=new L,cc=new L;class Ot{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(cc)),this.expandByPoint(Fr.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let dy=0;const yn=new De,hc=new yt,qs=new L,hn=new Gt,Or=new Gt,Ft=new L;class Dt extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?Fg:Ng)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new An(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(hn.min,Or.min),hn.expandByPoint(Ft),Ft.addVectors(hn.max,Or.max),hn.expandByPoint(Ft)):(hn.expandByPoint(Or.min),hn.expandByPoint(Or.max))}hn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),Ft.add(qs)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new L,l[y]=new L;const c=new L,h=new L,u=new L,d=new We,f=new We,p=new We,_=new L,m=new L;function g(y,M,B){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,B),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,B),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),a[y].add(_),a[M].add(_),a[B].add(_),l[y].add(m),l[M].add(m),l[B].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,M=x.length;y<M;++y){const B=x[y],I=B.start,O=B.count;for(let z=I,P=I+O;z<P;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new L,v=new L,A=new L,T=new L;function E(y){A.fromBufferAttribute(i,y),T.copy(A);const M=a[y];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(T,M);const I=v.dot(l[y])<0?-1:1;o.setXYZW(y,S.x,S.y,S.z,I)}for(let y=0,M=x.length;y<M;++y){const B=x[y],I=B.start,O=B.count;for(let z=I,P=I+O;z<P;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new ze(d,h,u)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new L;class hd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){rl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){rl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let py=0;class ei extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=ur,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){xe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ch&&(n.blendSrc=this.blendSrc),this.blendDst!==hh&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==df&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ui=new L,uc=new L,Xo=new L,ki=new L,dc=new L,$o=new L,fc=new L;class Pl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uc.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(uc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xo),a=ki.dot(this.direction),l=-ki.dot(Xo),c=ki.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uc).addScaledVector(Xo,d),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,r){dc.subVectors(t,e),$o.subVectors(n,e),fc.crossVectors(dc,$o);let o=this.direction.dot(fc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot($o.crossVectors(ki,$o));if(l<0)return null;const c=a*this.direction.dot(dc.cross(ki));if(c<0||l+c>o)return null;const h=-a*ki.dot(fc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jn extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Af=new De,ss=new Pl,Yo=new Ot,Cf=new L,Ko=new L,Zo=new L,jo=new L,pc=new L,Jo=new L,If=new L,Qo=new L;class bt extends yt{constructor(e=new Dt,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(pc.fromBufferAttribute(u,e),o?Jo.addScaledVector(pc,h):Jo.addScaledVector(pc.sub(t),h))}t.add(Jo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(Yo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Yo,Cf)===null||ss.origin.distanceToSquared(Cf)>(e.far-e.near)**2))&&(Af.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Af),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=S;v<A;v+=3){const T=a.getX(v),E=a.getX(v+1),y=a.getX(v+2);i=ea(this,g,e,n,c,h,u,T,E,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=ea(this,o,e,n,c,h,u,x,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=S;v<A;v+=3){const T=v,E=v+1,y=v+2;i=ea(this,g,e,n,c,h,u,T,E,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=m,S=m+1,v=m+2;i=ea(this,o,e,n,c,h,u,x,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function my(s,e,t,n,i,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===_n,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Qo);return c<t.near||c>t.far?null:{distance:c,point:Qo.clone(),object:s}}function ea(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ko),s.getVertexPosition(l,Zo),s.getVertexPosition(c,jo);const h=my(s,e,t,n,Ko,Zo,jo,If);if(h){const u=new L;Mn.getBarycoord(If,Ko,Zo,jo,u),i&&(h.uv=Mn.getInterpolatedAttribute(i,a,l,c,u,new We)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,a,l,c,u,new We)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Mn.getNormal(Ko,Zo,jo,d.normal),h.face=d,h.barycoord=u}return h}const Rf=new L,Pf=new _t,Lf=new _t,gy=new L,Bf=new De,ta=new L,mc=new Ot,Df=new De,gc=new Pl;class _y extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=af,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ta),this.boundingBox.expandByPoint(ta)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ta),this.boundingSphere.expandByPoint(ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(i),e.ray.intersectsSphere(mc)!==!1&&(Df.copy(i).invert(),gc.copy(e.ray).applyMatrix4(Df),!(this.boundingBox!==null&&gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===af?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===y_?this.bindMatrixInverse.copy(this.bindMatrix).invert():xe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Pf.fromBufferAttribute(i.attributes.skinIndex,e),Lf.fromBufferAttribute(i.attributes.skinWeight,e),Rf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Lf.getComponent(r);if(o!==0){const a=Pf.getComponent(r);Bf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gy.copy(Rf).applyMatrix4(Bf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Og extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ud extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=It,h=It,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kf=new De,yy=new De;class dd{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){xe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:yy;kf.multiplyMatrices(a,t[r]),kf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ud(t,e,e,Tn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(xe("Skeleton: No bone found with UUID:",r),o=new Og),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class fn extends ze{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new De,Uf=new De,na=[],Nf=new Gt,xy=new De,zr=new bt,Vr=new Ot;class fd extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fn(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Nf.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Nf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Vr.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),e.ray.intersectsSphere(Vr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xs),Uf.multiplyMatrices(n,Xs),zr.matrixWorld=Uf,zr.raycast(e,na);for(let o=0,a=na.length;o<a;o++){const l=na[o];l.instanceId=r,l.object=this,t.push(l)}na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ud(new Float32Array(i*this.count),i,this.count,nd,En));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _c=new L,vy=new L,by=new Oe;class vs{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_c.subVectors(n,t).cross(vy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||by.getNormalMatrix(e),i=this.coplanarPoint(_c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Ot,Sy=new We(.5,.5),ia=new L;class Ll{constructor(e=new vs,t=new vs,n=new vs,i=new vs,r=new vs,o=new vs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],x=r[12],S=r[13],v=r[14],A=r[15];if(i[0].setComponents(c-o,f-h,g-p,A-x).normalize(),i[1].setComponents(c+o,f+h,g+p,A+x).normalize(),i[2].setComponents(c+a,f+u,g+_,A+S).normalize(),i[3].setComponents(c-a,f-u,g-_,A-S).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,f-d,g-m,A-v).normalize();else if(i[4].setComponents(c-l,f-d,g-m,A-v).normalize(),t===Zn)i[5].setComponents(c+l,f+d,g+m,A+v).normalize();else if(t===Po)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=Sy.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ia.x=i.normal.x>0?e.max.x:e.min.x,ia.y=i.normal.y>0?e.max.y:e.min.y,ia.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ll=new L,cl=new L,Ff=new De,Hr=new Pl,sa=new Ot,yc=new L,Of=new L;class pd extends yt{constructor(e=new Dt,t=new al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ll.fromBufferAttribute(t,i-1),cl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ll.distanceTo(cl);e.setAttribute("lineDistance",new An(n,1))}else xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;Ff.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(Ff);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=h.getX(_),x=h.getX(_+1),S=ra(this,e,Hr,l,g,x,_);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(f),g=ra(this,e,Hr,l,_,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=ra(this,e,Hr,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=ra(this,e,Hr,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ra(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(ll.fromBufferAttribute(a,i),cl.fromBufferAttribute(a,r),t.distanceSqToSegment(ll,cl,yc,Of)>n)return;yc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(yc);if(!(c<e.near||c>e.far))return{distance:c,point:Of.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const zf=new L,Vf=new L;class Jh extends pd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zf.fromBufferAttribute(t,i),Vf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zf.distanceTo(Vf);e.setAttribute("lineDistance",new An(n,1))}else xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class My extends pd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zg extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hf=new De,Qh=new Pl,oa=new Ot,aa=new L;class Ey extends yt{constructor(e=new Dt,t=new zg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;Hf.copy(i).invert(),Qh.copy(e.ray).applyMatrix4(Hf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const m=c.getX(p);aa.fromBufferAttribute(u,m),Gf(aa,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)aa.fromBufferAttribute(u,p),Gf(aa,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gf(s,e,t,n,i,r,o){const a=Qh.distanceSqToPoint(s);if(a<t){const l=new L;Qh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class md extends Bt{constructor(e=[],t=Cs,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends Bt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bo extends Bt{constructor(e,t,n=ti,i,r,o,a=It,l=It,c,h=Ai,u=1){if(h!==Ai&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wy extends Bo{constructor(e,t=ti,n=Cs,i,r,o=It,a=It,l,c=Ai){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vg extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Si extends Dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(h,3)),this.setAttribute("uv",new An(u,2));function p(_,m,g,x,S,v,A,T,E,y,M){const B=v/E,I=A/y,O=v/2,z=A/2,P=T/2,k=E+1,V=y+1;let U=0,X=0;const j=new L;for(let ie=0;ie<V;ie++){const ae=ie*I-z;for(let de=0;de<k;de++){const ve=de*B-O;j[_]=ve*x,j[m]=ae*S,j[g]=P,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[g]=T>0?1:-1,h.push(j.x,j.y,j.z),u.push(de/E),u.push(1-ie/y),U+=1}}for(let ie=0;ie<y;ie++)for(let ae=0;ae<E;ae++){const de=d+ae+k*ie,ve=d+ae+k*(ie+1),Ve=d+(ae+1)+k*(ie+1),Ze=d+(ae+1)+k*ie;l.push(de,ve,Ze),l.push(ve,Ve,Ze),X+=6}a.addGroup(f,X,M),f+=X,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const la=new L,ca=new L,xc=new L,ha=new Mn;class Wf extends Dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(dr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:m,c:g}=ha;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),ha.getNormal(xc),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const S=(x+1)%3,v=u[x],A=u[S],T=ha[h[x]],E=ha[h[S]],y=`${v}_${A}`,M=`${A}_${v}`;M in d&&d[M]?(xc.dot(d[M].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),d[M]=null):y in d||(d[y]={index0:c[x],index1:c[S],normal:xc.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:m}=d[p];la.fromBufferAttribute(a,_),ca.fromBufferAttribute(a,m),f.push(la.x,la.y,la.z),f.push(ca.x,ca.y,ca.z)}this.setAttribute("position",new An(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ir extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const x=g*d-o;for(let S=0;S<c;S++){const v=S*u-r;p.push(v,-x,0),_.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const S=x+c*g,v=x+c*(g+1),A=x+1+c*(g+1),T=x+1+c*g;f.push(S,v,T),f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new An(p,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}function Sr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function en(s){const e={};for(let t=0;t<s.length;t++){const n=Sr(s[t]);for(const i in n)e[i]=n[i]}return e}function Ay(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ni={clone:Sr,merge:en};var Cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cy,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ry extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gd extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lg,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends gd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Py extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ly extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ua(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function By(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function qf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Gg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Rr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dy extends Rr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cf,endingEnd:cf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hf:r=e,a=2*t-n;break;case uf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hf:o=e,l=2*n-t;break;case uf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+x*o[c+A]+S*o[l+A]+v*o[u+A];return r}}class ky extends Rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Uy extends Rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ny extends Rr{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const _=(n-t)/(i-t),m=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*_;return r}const f=a*2,p=e-1;for(let _=0;_!==a;++_){const m=o[c+_],g=o[l+_],x=p*f+_*2,S=d[x],v=d[x+1],A=e*f+_*2,T=u[A],E=u[A+1];let y=(n-t)/(i-t),M,B,I,O,z;for(let P=0;P<8;P++){M=y*y,B=M*y,I=1-y,O=I*I,z=O*I;const V=z*t+3*O*y*S+3*I*M*T+B*i-n;if(Math.abs(V)<1e-10)break;const U=3*O*(S-t)+6*I*y*(T-S)+3*M*(i-T);if(Math.abs(U)<1e-10)break;y=y-V/U,y=Math.max(0,Math.min(1,y))}r[_]=z*m+3*O*y*v+3*I*M*E+B*g}return r}}class On{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ua(t,this.TimeBufferType),this.values=ua(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ua(e.times,Array),values:ua(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ky(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Ny(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Io:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case $l:t=this.InterpolantFactoryMethodSmooth;break;case lf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return $l;case this.InterpolantFactoryMethodBezier:return lf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&R_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$l,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Ro;class Pr extends On{constructor(e,t,n){super(e,t,n)}}Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=Io;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wg extends On{constructor(e,t,n,i){super(e,t,n,i)}}Wg.prototype.ValueTypeName="color";class Mr extends On{constructor(e,t,n,i){super(e,t,n,i)}}Mr.prototype.ValueTypeName="number";class Fy extends Rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Er extends On{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Fy(this.times,this.values,this.getValueSize(),e)}}Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends On{constructor(e,t,n){super(e,t,n)}}Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=Io;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends On{constructor(e,t,n,i){super(e,t,n,i)}}Tr.prototype.ValueTypeName="vector";class Oy{constructor(e="",t=-1,n=[],i=x_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Vy(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=By(l);l=qf(l,1,h),c=qf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Mr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(xe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ke("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const m=[],g=[];Gg(f,m,g,p),m.length!==0&&_.push(new u(d,m,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let x=0;x!==d[p].morphTargets.length;++x){const S=d[p];m.push(S.time),g.push(S.morphTarget===_?1:0)}i.push(new Mr(".morphTargetInfluence["+_+"]",m,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Tr,f+".position",d,"pos",i),n(Er,f+".quaternion",d,"rot",i),n(Tr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function zy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mr;case"vector":case"vector2":case"vector3":case"vector4":return Tr;case"color":return Wg;case"quaternion":return Er;case"bool":case"boolean":return Pr;case"string":return Lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Vy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zy(s.type);if(s.times===void 0){const t=[],n=[];Gg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Xf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Xf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Xf(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Hy{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Gy=new Hy;class Qi{constructor(e){this.manager=e!==void 0?e:Gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const di={};class Wy extends Error{constructor(e,t){super(e),this.response=t}}class _d extends Qi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Mi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:i});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=di[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){u.read().then(({done:S,value:v})=>{if(S)g.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,E=h.length;T<E;T++){const y=h[T];y.onProgress&&y.onProgress(A)}g.enqueue(v),x()}},S=>{g.error(S)})}}});return new Response(m)}else throw new Wy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Mi.add(`file:${e}`,c);const h=di[e];delete di[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=di[e];if(h===void 0)throw this.manager.itemError(e),c;delete di[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $s=new WeakMap;class qg extends Qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Mi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=$s.get(o);u===void 0&&(u=[],$s.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Lo("img");function l(){h(),t&&t(this);const u=$s.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}$s.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Mi.remove(`image:${e}`);const d=$s.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}$s.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class qy extends Qi{constructor(e){super(e)}load(e,t,n,i){const r=new md;r.colorSpace=Ct;const o=new qg(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Xg extends Qi{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new qg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Bl extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const vc=new De,$f=new L,Yf=new L;class yd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$f.setFromMatrixPosition(e.matrixWorld),t.position.copy($f),Yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yf),t.updateMatrixWorld(),vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Po||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const da=new L,fa=new Fn,Vn=new L;class $g extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(da,fa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(da,fa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new L,Kf=new We,Zf=new We;class Kt extends $g{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return br*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Kf,Zf),t.subVectors(Zf,Kf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xy extends yd{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=br*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $y extends Bl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Yy extends yd{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ky extends Bl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Dl extends $g{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zy extends yd{constructor(){super(new Dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jy extends Bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Zy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Jy extends Bl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const bc=new WeakMap;class Qy extends Qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&xe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&xe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Mi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(bc.has(o)===!0)i&&i(bc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),bc.set(l,c),Mi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Mi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let pa;class Yg{static getContext(){return pa===void 0&&(pa=new(window.AudioContext||window.webkitAudioContext)),pa}static setContext(e){pa=e}}class ex extends Qi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new _d(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);Yg.getContext().decodeAudioData(c,function(u){t(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):ke(l),r.manager.itemError(e)}}}const Ys=-90,Ks=1;class tx extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(Ys,Ks,e,t);i.layers=this.layers,this.add(i);const r=new Kt(Ys,Ks,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Ys,Ks,e,t);o.layers=this.layers,this.add(o);const a=new Kt(Ys,Ks,e,t);a.layers=this.layers,this.add(a);const l=new Kt(Ys,Ks,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Ys,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class nx extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ix{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function sx(){this._document.hidden===!1&&this.reset()}const os=new L,Sc=new Fn,rx=new L,as=new L,ls=new L;class ox extends yt{constructor(){super(),this.type="AudioListener",this.context=Yg.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new ix}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(os,Sc,rx),as.set(0,0,-1).applyQuaternion(Sc),ls.set(0,1,0).applyQuaternion(Sc),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(os.x,n),t.positionY.linearRampToValueAtTime(os.y,n),t.positionZ.linearRampToValueAtTime(os.z,n),t.forwardX.linearRampToValueAtTime(as.x,n),t.forwardY.linearRampToValueAtTime(as.y,n),t.forwardZ.linearRampToValueAtTime(as.z,n),t.upX.linearRampToValueAtTime(ls.x,n),t.upY.linearRampToValueAtTime(ls.y,n),t.upZ.linearRampToValueAtTime(ls.z,n)}else t.setPosition(os.x,os.y,os.z),t.setOrientation(as.x,as.y,as.z,ls.x,ls.y,ls.z)}}class ax extends yt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){xe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(xe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){xe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(xe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const xd="\\[\\]\\.:\\/",lx=new RegExp("["+xd+"]","g"),vd="[^"+xd+"]",cx="[^"+xd.replace("\\.","")+"]",hx=/((?:WC+[\/:])*)/.source.replace("WC",vd),ux=/(WCOD+)?/.source.replace("WCOD",cx),dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vd),fx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vd),px=new RegExp("^"+hx+ux+dx+fx+"$"),mx=["material","materials","bones","map"];class gx{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lx,"")}static parseTrackName(e){const t=px.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=gx;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fi{constructor(e,t,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}function jf(s,e,t,n){const i=_x(n);switch(t){case Ig:return s*e;case nd:return s*e/i.components*i.byteLength;case id:return s*e/i.components*i.byteLength;case vr:return s*e*2/i.components*i.byteLength;case sd:return s*e*2/i.components*i.byteLength;case Rg:return s*e*3/i.components*i.byteLength;case Tn:return s*e*4/i.components*i.byteLength;case rd:return s*e*4/i.components*i.byteLength;case Xa:case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xh:case bh:return Math.max(s,16)*Math.max(e,8)/4;case yh:case vh:return Math.max(s,8)*Math.max(e,8)/2;case Sh:case Mh:case Th:case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eh:case Ah:case Ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gh:case Wh:case qh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _x(s){switch(s){case gn:case Tg:return{byteLength:1,components:1};case Ao:case wg:case wi:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case ti:case Qu:case En:return{byteLength:4,components:1};case Ag:case Cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ju}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ju);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function yx(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
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
#endif`,bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
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
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
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
#endif`,Cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Px=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lx=`#ifdef USE_IRIDESCENCE
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
#endif`,Bx=`#ifdef USE_BUMPMAP
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hx=`#define PI 3.141592653589793
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
} // validated`,Gx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wx=`vec3 transformedNormal = objectNormal;
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
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
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
}`,av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hv=`uniform bool receiveShadow;
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
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gv=`PhysicalMaterial material;
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
#endif`,_v=`uniform sampler2D dfgLUT;
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
}`,yv=`
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cv=`#if defined( USE_POINTS_UV )
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
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`#ifdef USE_MORPHTARGETS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
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
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ib=`float getShadowMask() {
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
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
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
#endif`,fb=`#ifdef USE_TRANSMISSION
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`#include <common>
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
}`,Tb=`#if DEPTH_PACKING == 3200
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
}`,wb=`#define DISTANCE
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
}`,Ab=`#define DISTANCE
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`uniform float scale;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Lb=`#include <common>
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Db=`#define LAMBERT
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
}`,kb=`#define LAMBERT
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
}`,Ub=`#define MATCAP
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
}`,Nb=`#define MATCAP
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
}`,Fb=`#define NORMAL
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
}`,Ob=`#define NORMAL
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
}`,zb=`#define PHONG
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
}`,Vb=`#define PHONG
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
}`,Hb=`#define STANDARD
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
}`,Gb=`#define STANDARD
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
}`,Wb=`#define TOON
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
}`,qb=`#define TOON
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
}`,Xb=`uniform float size;
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
}`,$b=`uniform vec3 diffuse;
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
}`,Yb=`#include <common>
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
}`,Kb=`uniform vec3 color;
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
}`,Zb=`uniform float rotation;
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
}`,jb=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:xx,alphahash_pars_fragment:vx,alphamap_fragment:bx,alphamap_pars_fragment:Sx,alphatest_fragment:Mx,alphatest_pars_fragment:Ex,aomap_fragment:Tx,aomap_pars_fragment:wx,batching_pars_vertex:Ax,batching_vertex:Cx,begin_vertex:Ix,beginnormal_vertex:Rx,bsdfs:Px,iridescence_fragment:Lx,bumpmap_pars_fragment:Bx,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:Nx,color_fragment:Fx,color_pars_fragment:Ox,color_pars_vertex:zx,color_vertex:Vx,common:Hx,cube_uv_reflection_fragment:Gx,defaultnormal_vertex:Wx,displacementmap_pars_vertex:qx,displacementmap_vertex:Xx,emissivemap_fragment:$x,emissivemap_pars_fragment:Yx,colorspace_fragment:Kx,colorspace_pars_fragment:Zx,envmap_fragment:jx,envmap_common_pars_fragment:Jx,envmap_pars_fragment:Qx,envmap_pars_vertex:ev,envmap_physical_pars_fragment:uv,envmap_vertex:tv,fog_vertex:nv,fog_pars_vertex:iv,fog_fragment:sv,fog_pars_fragment:rv,gradientmap_pars_fragment:ov,lightmap_pars_fragment:av,lights_lambert_fragment:lv,lights_lambert_pars_fragment:cv,lights_pars_begin:hv,lights_toon_fragment:dv,lights_toon_pars_fragment:fv,lights_phong_fragment:pv,lights_phong_pars_fragment:mv,lights_physical_fragment:gv,lights_physical_pars_fragment:_v,lights_fragment_begin:yv,lights_fragment_maps:xv,lights_fragment_end:vv,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:Ev,map_fragment:Tv,map_pars_fragment:wv,map_particle_fragment:Av,map_particle_pars_fragment:Cv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Rv,morphinstance_vertex:Pv,morphcolor_vertex:Lv,morphnormal_vertex:Bv,morphtarget_pars_vertex:Dv,morphtarget_vertex:kv,normal_fragment_begin:Uv,normal_fragment_maps:Nv,normal_pars_fragment:Fv,normal_pars_vertex:Ov,normal_vertex:zv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Gv,clearcoat_pars_fragment:Wv,iridescence_pars_fragment:qv,opaque_fragment:Xv,packing:$v,premultiplied_alpha_fragment:Yv,project_vertex:Kv,dithering_fragment:Zv,dithering_pars_fragment:jv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:Qv,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:tb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:sb,skinning_pars_vertex:rb,skinning_vertex:ob,skinnormal_vertex:ab,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:hb,tonemapping_pars_fragment:ub,transmission_fragment:db,transmission_pars_fragment:fb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:_b,background_vert:yb,background_frag:xb,backgroundCube_vert:vb,backgroundCube_frag:bb,cube_vert:Sb,cube_frag:Mb,depth_vert:Eb,depth_frag:Tb,distance_vert:wb,distance_frag:Ab,equirect_vert:Cb,equirect_frag:Ib,linedashed_vert:Rb,linedashed_frag:Pb,meshbasic_vert:Lb,meshbasic_frag:Bb,meshlambert_vert:Db,meshlambert_frag:kb,meshmatcap_vert:Ub,meshmatcap_frag:Nb,meshnormal_vert:Fb,meshnormal_frag:Ob,meshphong_vert:zb,meshphong_frag:Vb,meshphysical_vert:Hb,meshphysical_frag:Gb,meshtoon_vert:Wb,meshtoon_frag:qb,points_vert:Xb,points_frag:$b,shadow_vert:Yb,shadow_frag:Kb,sprite_vert:Zb,sprite_frag:jb},fe={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},mt={basic:{uniforms:en([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:en([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:en([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:en([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:en([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ue(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:en([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:en([fe.points,fe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:en([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:en([fe.common,fe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:en([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:en([fe.sprite,fe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:en([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:en([fe.lights,fe.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};mt.physical={uniforms:en([mt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ma={r:0,b:0,g:0},cs=new Cn,Jb=new De;function Qb(s,e,t,n,i,r){const o=new ue(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const v=x.backgroundBlurriness>0;S=e.get(S,v)}return S}function p(x){let S=!1;const v=f(x);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(x,S){const v=f(S);v&&(v.isCubeTexture||v.mapping===Rl)?(c===void 0&&(c=new bt(new Si(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Sr(mt.backgroundCube.uniforms),vertexShader:mt.backgroundCube.vertexShader,fragmentShader:mt.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),cs.copy(S.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(cs)),c.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new bt(new Ir(2,2),new Wt({name:"BackgroundMaterial",uniforms:Sr(mt.background.uniforms),vertexShader:mt.background.vertexShader,fragmentShader:mt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,S){x.getRGB(ma,Hg(s)),t.buffers.color.setClear(ma.r,ma.g,ma.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:_,dispose:g}}function eS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(I,O,z,P,k){let V=!1;const U=u(I,P,z,O);r!==U&&(r=U,c(r.object)),V=f(I,P,z,k),V&&p(I,P,z,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(I,O,z,P),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,O,z,P){const k=P.wireframe===!0;let V=n[O.id];V===void 0&&(V={},n[O.id]=V);const U=I.isInstancedMesh===!0?I.id:0;let X=V[U];X===void 0&&(X={},V[U]=X);let j=X[z.id];j===void 0&&(j={},X[z.id]=j);let ie=j[k];return ie===void 0&&(ie=d(l()),j[k]=ie),ie}function d(I){const O=[],z=[],P=[];for(let k=0;k<t;k++)O[k]=0,z[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,O,z,P){const k=r.attributes,V=O.attributes;let U=0;const X=z.getAttributes();for(const j in X)if(X[j].location>=0){const ae=k[j];let de=V[j];if(de===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(de=I.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function p(I,O,z,P){const k={},V=O.attributes;let U=0;const X=z.getAttributes();for(const j in X)if(X[j].location>=0){let ae=V[j];ae===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor));const de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),k[j]=de,U++}r.attributes=k,r.attributesNum=U,r.index=P}function _(){const I=r.newAttributes;for(let O=0,z=I.length;O<z;O++)I[O]=0}function m(I){g(I,0)}function g(I,O){const z=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;z[I]=1,P[I]===0&&(s.enableVertexAttribArray(I),P[I]=1),k[I]!==O&&(s.vertexAttribDivisor(I,O),k[I]=O)}function x(){const I=r.newAttributes,O=r.enabledAttributes;for(let z=0,P=O.length;z<P;z++)O[z]!==I[z]&&(s.disableVertexAttribArray(z),O[z]=0)}function S(I,O,z,P,k,V,U){U===!0?s.vertexAttribIPointer(I,O,z,k,V):s.vertexAttribPointer(I,O,z,P,k,V)}function v(I,O,z,P){_();const k=P.attributes,V=z.getAttributes(),U=O.defaultAttributeValues;for(const X in V){const j=V[X];if(j.location>=0){let ie=k[X];if(ie===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ie!==void 0){const ae=ie.normalized,de=ie.itemSize,ve=e.get(ie);if(ve===void 0)continue;const Ve=ve.buffer,Ze=ve.type,$=ve.bytesPerElement,Q=Ze===s.INT||Ze===s.UNSIGNED_INT||ie.gpuType===Qu;if(ie.isInterleavedBufferAttribute){const se=ie.data,Le=se.stride,Ce=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Be=0;Be<j.locationSize;Be++)g(j.location+Be,se.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<j.locationSize;Be++)m(j.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Be=0;Be<j.locationSize;Be++)S(j.location+Be,de/j.locationSize,Ze,ae,Le*$,(Ce+de/j.locationSize*Be)*$,Q)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)g(j.location+se,ie.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<j.locationSize;se++)m(j.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let se=0;se<j.locationSize;se++)S(j.location+se,de/j.locationSize,Ze,ae,de*$,de/j.locationSize*se*$,Q)}}else if(U!==void 0){const ae=U[X];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(j.location,ae);break;case 3:s.vertexAttrib3fv(j.location,ae);break;case 4:s.vertexAttrib4fv(j.location,ae);break;default:s.vertexAttrib1fv(j.location,ae)}}}}x()}function A(){M();for(const I in n){const O=n[I];for(const z in O){const P=O[z];for(const k in P){const V=P[k];for(const U in V)h(V[U].object),delete V[U];delete P[k]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const O=n[I.id];for(const z in O){const P=O[z];for(const k in P){const V=P[k];for(const U in V)h(V[U].object),delete V[U];delete P[k]}}delete n[I.id]}function E(I){for(const O in n){const z=n[O];for(const P in z){const k=z[P];if(k[I.id]===void 0)continue;const V=k[I.id];for(const U in V)h(V[U].object),delete V[U];delete k[I.id]}}}function y(I){for(const O in n){const z=n[O],P=I.isInstancedMesh===!0?I.id:0,k=z[P];if(k!==void 0){for(const V in k){const U=k[V];for(const X in U)h(U[X].object),delete U[X];delete k[V]}delete z[P],Object.keys(z).length===0&&delete n[O]}}}function M(){B(),o=!0,r!==i&&(r=i,c(r.object))}function B(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:M,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function tS(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Tn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const y=E===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==gn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==En&&!y)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,maxSamples:A,samples:T}}function iS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new vs,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,S=x*4;let v=g.clippingState||null;l.value=v,v=h(p,d,S,f);for(let A=0;A!==S;++A)v[A]=t[A];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(u[S]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Ki=4,Jf=[.125,.215,.35,.446,.526,.582],Es=20,sS=256,Gr=new Dl,Qf=new ue;let Mc=null,Ec=0,Tc=0,wc=!1;const rS=new L;class ep{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=rS}=r;Mc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mc,Ec,Tc),this._renderer.xr.enabled=wc,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:wi,format:Tn,colorSpace:sn,depthBuffer:!1},i=tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tp(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oS(r)),this._blurMaterial=lS(r,e,t),this._ggxMaterial=aS(r,e,t)}return i}_compileMaterial(e){const t=new bt(new Dt,e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,n,i,r){const l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Qf),u.toneMapping=Jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Si,new jn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(Qf),g=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const A=this._cubeSize;Zs(i,v*A,S>2?A:0,A,A),u.setRenderTarget(i),g&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Cs||e.mapping===yr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Ki?n-p+Ki:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Zs(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(a,Gr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Zs(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(a,Gr)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ke("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Es-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):Es;m>Es&&xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);const g=[];let x=0;for(let E=0;E<Es;++E){const y=E/_,M=Math.exp(-y*y/2);g.push(M),E===0?x+=M:E<m&&(x+=2*M)}for(let E=0;E<g.length;E++)g[E]=g[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=p,d.mipInt.value=S-n;const v=this._sizeLods[i],A=3*v*(i>S-Ki?i-S+Ki:0),T=4*(this._cubeSize-v);Zs(t,A,T,3*v,2*v),l.setRenderTarget(t),l.render(u,Gr)}}function oS(s){const e=[],t=[],n=[];let i=s;const r=s-Ki+1+Jf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ki?l=Jf[o-s+Ki-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*f),S=new Float32Array(m*p*f),v=new Float32Array(g*p*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,y=T>2?0:-1,M=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];x.set(M,_*p*T),S.set(d,m*p*T);const B=[T,T,T,T,T,T];v.set(B,g*p*T)}const A=new Dt;A.setAttribute("position",new ze(x,_)),A.setAttribute("uv",new ze(S,m)),A.setAttribute("faceIndex",new ze(v,g)),n.push(new bt(A,null)),i>Ki&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function tp(s,e,t){const n=new Qn(s,e,t);return n.texture.mapping=Rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function aS(s,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function lS(s,e,t){const n=new Float32Array(Es),i=new L(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function np(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ip(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}class Zg extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new md(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Si(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Ei});r.uniforms.tEquirect.value=t;const o=new bt(i,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Lt),new tx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function cS(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ql||f===Xl)if(e.has(d)){const p=e.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new Zg(p.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===ql||f===Xl,_=f===Cs||f===yr;if(p||_){let m=t.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new ep(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return p&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new ep(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===ql?d.mapping=Cs:f===Xl&&(d.mapping=yr),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function hS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ol("WebGLRenderer: "+n+" extension not supported."),i}}}function uS(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let S=0,v=x.length;S<v;S+=3){const A=x[S+0],T=x[S+1],E=x[S+2];d.push(A,T,T,E,E,A)}}else{const x=p.array;_=p.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const A=S+0,T=S+1,E=S+2;d.push(A,T,T,E,E,A)}}const m=new(p.count>=65535?Fg:Ng)(d,1);m.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function dS(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function u(d,f,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x]*_[x];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:ke("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pS(s,e,t){const n=new WeakMap,i=new _t;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let v=a.attributes.position.count*S,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*A*4*u),E=new Dg(T,v,A,u);E.type=En,E.needsUpdate=!0;const y=S*4;for(let B=0;B<u;B++){const I=m[B],O=g[B],z=x[B],P=v*A*4*B;for(let k=0;k<I.count;k++){const V=k*y;f===!0&&(i.fromBufferAttribute(I,k),T[P+V+0]=i.x,T[P+V+1]=i.y,T[P+V+2]=i.z,T[P+V+3]=0),p===!0&&(i.fromBufferAttribute(O,k),T[P+V+4]=i.x,T[P+V+5]=i.y,T[P+V+6]=i.z,T[P+V+7]=0),_===!0&&(i.fromBufferAttribute(z,k),T[P+V+8]=i.x,T[P+V+9]=i.y,T[P+V+10]=i.z,T[P+V+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new We(v,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function mS(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const gS={[gg]:"LINEAR_TONE_MAPPING",[_g]:"REINHARD_TONE_MAPPING",[yg]:"CINEON_TONE_MAPPING",[xg]:"ACES_FILMIC_TONE_MAPPING",[bg]:"AGX_TONE_MAPPING",[Sg]:"NEUTRAL_TONE_MAPPING",[vg]:"CUSTOM_TONE_MAPPING"};function _S(s,e,t,n,i){const r=new Qn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new Qn(e,t,{type:wi,depthBuffer:!1,stencilBuffer:!1}),a=new Dt;a.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new An([0,2,0,0,2,0],2));const l=new Ry({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new bt(a,l),h=new Dl(-1,1,1,-1,0,1);let u=null,d=null,f=!1,p,_=null,m=[],g=!1;this.setSize=function(x,S){r.setSize(x,S),o.setSize(x,S);for(let v=0;v<m.length;v++){const A=m[v];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const S=r.width,v=r.height;for(let A=0;A<m.length;A++){const T=m[A];T.setSize&&T.setSize(S,v)}},this.begin=function(x,S){if(f||x.toneMapping===Jn&&m.length===0)return!1;if(_=S,S!==null){const v=S.width,A=S.height;(r.width!==v||r.height!==A)&&this.setSize(v,A)}return g===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=Jn,!0},this.hasRenderPass=function(){return g},this.end=function(x,S){x.toneMapping=p,f=!0;let v=r,A=o;for(let T=0;T<m.length;T++){const E=m[T];if(E.enabled!==!1&&(E.render(x,A,v,S),E.needsSwap!==!1)){const y=v;v=A,A=y}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},et.getTransfer(u)===ot&&(l.defines.SRGB_TRANSFER="");const T=gS[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(_),x.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const jg=new Bt,eu=new Bo(1,1),Jg=new Dg,Qg=new ny,e0=new md,sp=[],rp=[],op=new Float32Array(16),ap=new Float32Array(9),lp=new Float32Array(4);function Br(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=sp[i];if(r===void 0&&(r=new Float32Array(i),sp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ul(s,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function yS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function vS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function bS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function SS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;lp.set(n),s.uniformMatrix2fv(this.addr,!1,lp),Ut(t,n)}}function MS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;ap.set(n),s.uniformMatrix3fv(this.addr,!1,ap),Ut(t,n)}}function ES(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;op.set(n),s.uniformMatrix4fv(this.addr,!1,op),Ut(t,n)}}function TS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function wS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function AS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function CS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function IS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function RS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function PS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function LS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function BS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(eu.compareFunction=t.isReversedDepthBuffer()?ad:od,r=eu):r=jg,t.setTexture2D(e||r,i)}function DS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qg,i)}function kS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||e0,i)}function US(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jg,i)}function NS(s){switch(s){case 5126:return yS;case 35664:return xS;case 35665:return vS;case 35666:return bS;case 35674:return SS;case 35675:return MS;case 35676:return ES;case 5124:case 35670:return TS;case 35667:case 35671:return wS;case 35668:case 35672:return AS;case 35669:case 35673:return CS;case 5125:return IS;case 36294:return RS;case 36295:return PS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return US}}function FS(s,e){s.uniform1fv(this.addr,e)}function OS(s,e){const t=Br(e,this.size,2);s.uniform2fv(this.addr,t)}function zS(s,e){const t=Br(e,this.size,3);s.uniform3fv(this.addr,t)}function VS(s,e){const t=Br(e,this.size,4);s.uniform4fv(this.addr,t)}function HS(s,e){const t=Br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function GS(s,e){const t=Br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function WS(s,e){const t=Br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qS(s,e){s.uniform1iv(this.addr,e)}function XS(s,e){s.uniform2iv(this.addr,e)}function $S(s,e){s.uniform3iv(this.addr,e)}function YS(s,e){s.uniform4iv(this.addr,e)}function KS(s,e){s.uniform1uiv(this.addr,e)}function ZS(s,e){s.uniform2uiv(this.addr,e)}function jS(s,e){s.uniform3uiv(this.addr,e)}function JS(s,e){s.uniform4uiv(this.addr,e)}function QS(s,e,t){const n=this.cache,i=e.length,r=Ul(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=eu:o=jg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function eM(s,e,t){const n=this.cache,i=e.length,r=Ul(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qg,r[o])}function tM(s,e,t){const n=this.cache,i=e.length,r=Ul(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||e0,r[o])}function nM(s,e,t){const n=this.cache,i=e.length,r=Ul(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jg,r[o])}function iM(s){switch(s){case 5126:return FS;case 35664:return OS;case 35665:return zS;case 35666:return VS;case 35674:return HS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return qS;case 35667:case 35671:return XS;case 35668:case 35672:return $S;case 35669:case 35673:return YS;case 5125:return KS;case 36294:return ZS;case 36295:return jS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}class sM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=NS(t.type)}}class rM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iM(t.type)}}class oM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function cp(s,e){s.seq.push(e),s.map[e.id]=e}function aM(s,e,t){const n=s.name,i=n.length;for(Ac.lastIndex=0;;){const r=Ac.exec(n),o=Ac.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){cp(t,c===void 0?new sM(a,s,e):new rM(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new oM(a),cp(t,u)),t=u}}}class Za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);aM(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function hp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const lM=37297;let cM=0;function hM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const up=new Oe;function uM(s){et._getMatrix(up,et.workingColorSpace,s);const e=`mat3( ${up.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case sl:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function dp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+hM(s.getShaderSource(e),a)}else return r}function dM(s,e){const t=uM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const fM={[gg]:"Linear",[_g]:"Reinhard",[yg]:"Cineon",[xg]:"ACESFilmic",[bg]:"AgX",[Sg]:"Neutral",[vg]:"Custom"};function pM(s,e){const t=fM[e];return t===void 0?(xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ga=new L;function mM(){et.getLuminanceCoefficients(ga);const s=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function _M(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function po(s){return s!==""}function fp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(s){return s.replace(xM,bM)}const vM=new Map;function bM(s,e){let t=$e[e];if(t===void 0){const n=vM.get(e);if(n!==void 0)t=$e[n],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tu(t)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(s){return s.replace(SM,MM)}function MM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const EM={[Wa]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function TM(s){return EM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wM={[Cs]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Rl]:"ENVMAP_TYPE_CUBE_UV"};function AM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":wM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const CM={[yr]:"ENVMAP_MODE_REFRACTION"};function IM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":CM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RM={[mg]:"ENVMAP_BLENDING_MULTIPLY",[g_]:"ENVMAP_BLENDING_MIX",[__]:"ENVMAP_BLENDING_ADD"};function PM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":RM[s.combine]||"ENVMAP_BLENDING_NONE"}function LM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function BM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=TM(t),c=AM(t),h=IM(t),u=PM(t),d=LM(t),f=gM(t),p=_M(r),_=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(po).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(po).join(`
`),g.length>0&&(g+=`
`)):(m=[gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),g=[gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Jn?pM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,dM("linearToOutputTexel",t.outputColorSpace),mM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),o=tu(o),o=fp(o,t),o=pp(o,t),a=tu(a),a=fp(a,t),a=pp(a,t),o=mp(o),a=mp(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===ji?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ji?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=x+m+o,v=x+g+a,A=hp(i,i.VERTEX_SHADER,S),T=hp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(I){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(A)||"",P=i.getShaderInfoLog(T)||"",k=O.trim(),V=z.trim(),U=P.trim();let X=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,T);else{const ie=dp(i,A,"vertex"),ae=dp(i,T,"fragment");ke("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+ie+`
`+ae)}else k!==""?xe("WebGLProgram: Program Info Log:",k):(V===""||U==="")&&(j=!1);j&&(I.diagnostics={runnable:X,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:U,prefix:g}})}i.deleteShader(A),i.deleteShader(T),y=new Za(i,_),M=yM(i,_)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(_,lM)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let DM=0;class kM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new UM(e),t.set(e,n)),n}}class UM{constructor(e){this.id=DM++,this.code=e,this.usedTimes=0}}function NM(s,e,t,n,i,r){const o=new kg,a=new kM,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,M,B,I,O){const z=I.fog,P=O.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,U=e.get(y.envMap||k,V),X=U&&U.mapping===Rl?U.image.height:null,j=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&xe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ie=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ae=ie!==void 0?ie.length:0;let de=0;P.morphAttributes.position!==void 0&&(de=1),P.morphAttributes.normal!==void 0&&(de=2),P.morphAttributes.color!==void 0&&(de=3);let ve,Ve,Ze,$;if(j){const rt=mt[j];ve=rt.vertexShader,Ve=rt.fragmentShader}else ve=y.vertexShader,Ve=y.fragmentShader,a.update(y),Ze=a.getVertexShaderID(y),$=a.getFragmentShaderID(y);const Q=s.getRenderTarget(),se=s.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,Ce=O.isBatchedMesh===!0,Be=!!y.map,xt=!!y.matcap,Ne=!!U,it=!!y.aoMap,st=!!y.lightMap,qe=!!y.bumpMap,gt=!!y.normalMap,D=!!y.displacementMap,Et=!!y.emissiveMap,tt=!!y.metalnessMap,ht=!!y.roughnessMap,be=y.anisotropy>0,R=y.clearcoat>0,b=y.dispersion>0,N=y.iridescence>0,Z=y.sheen>0,ee=y.transmission>0,K=be&&!!y.anisotropyMap,Se=R&&!!y.clearcoatMap,le=R&&!!y.clearcoatNormalMap,Pe=R&&!!y.clearcoatRoughnessMap,Ue=N&&!!y.iridescenceMap,te=N&&!!y.iridescenceThicknessMap,re=Z&&!!y.sheenColorMap,Me=Z&&!!y.sheenRoughnessMap,Te=!!y.specularMap,ge=!!y.specularColorMap,Ye=!!y.specularIntensityMap,F=ee&&!!y.transmissionMap,ce=ee&&!!y.thicknessMap,oe=!!y.gradientMap,ye=!!y.alphaMap,ne=y.alphaTest>0,Y=!!y.alphaHash,Ee=!!y.extensions;let Fe=Jn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const pt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:ve,fragmentShader:Ve,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:sn,alphaToCoverage:!!y.alphaToCoverage,map:Be,matcap:xt,envMap:Ne,envMapMode:Ne&&U.mapping,envMapCubeUVHeight:X,aoMap:it,lightMap:st,bumpMap:qe,normalMap:gt,displacementMap:D,emissiveMap:Et,normalMapObjectSpace:gt&&y.normalMapType===S_,normalMapTangentSpace:gt&&y.normalMapType===Lg,metalnessMap:tt,roughnessMap:ht,anisotropy:be,anisotropyMap:K,clearcoat:R,clearcoatMap:Se,clearcoatNormalMap:le,clearcoatRoughnessMap:Pe,dispersion:b,iridescence:N,iridescenceMap:Ue,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:re,sheenRoughnessMap:Me,specularMap:Te,specularColorMap:ge,specularIntensityMap:Ye,transmission:ee,transmissionMap:F,thicknessMap:ce,gradientMap:oe,opaque:y.transparent===!1&&y.blending===ur&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:ne,alphaHash:Y,combine:y.combine,mapUv:Be&&p(y.map.channel),aoMapUv:it&&p(y.aoMap.channel),lightMapUv:st&&p(y.lightMap.channel),bumpMapUv:qe&&p(y.bumpMap.channel),normalMapUv:gt&&p(y.normalMap.channel),displacementMapUv:D&&p(y.displacementMap.channel),emissiveMapUv:Et&&p(y.emissiveMap.channel),metalnessMapUv:tt&&p(y.metalnessMap.channel),roughnessMapUv:ht&&p(y.roughnessMap.channel),anisotropyMapUv:K&&p(y.anisotropyMap.channel),clearcoatMapUv:Se&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:re&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(y.sheenRoughnessMap.channel),specularMapUv:Te&&p(y.specularMap.channel),specularColorMapUv:ge&&p(y.specularColorMap.channel),specularIntensityMapUv:Ye&&p(y.specularIntensityMap.channel),transmissionMapUv:F&&p(y.transmissionMap.channel),thicknessMapUv:ce&&p(y.thicknessMap.channel),alphaMapUv:ye&&p(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(gt||be),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(Be||ye),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:se,skinning:O.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:de,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Be&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===ot,decodeVideoTextureEmissive:Et&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jt,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)M.push(B),M.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(g(M,y),x(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function g(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=f[y.type];let B;if(M){const I=mt[M];B=ni.clone(I.uniforms)}else B=y.uniforms;return B}function v(y,M){let B=h.get(M);return B!==void 0?++B.usedTimes:(B=new BM(s,M,y,i),c.push(B),h.set(M,B)),B}function A(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:E}}function FM(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function OM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function _p(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,m,g){let x=s[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},s[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=o(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=m,x.group=g),e++,x}function l(d,f,p,_,m,g){const x=a(d,f,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function c(d,f,p,_,m,g){const x=a(d,f,p,_,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||OM),n.length>1&&n.sort(f||_p),i.length>1&&i.sort(f||_p)}function u(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function zM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new yp,s.set(n,[o])):i>=r.length?(o=new yp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function VM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ue};break;case"SpotLight":t={position:new L,direction:new L,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function HM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let GM=0;function WM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qM(s){const e=new VM,t=HM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new De,o=new De;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,x=0,S=0,v=0,A=0,T=0,E=0;c.sort(WM);for(let M=0,B=c.length;M<B;M++){const I=c[M],O=I.color,z=I.intensity,P=I.distance;let k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===vr?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],z);E++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const U=I.shadow,X=t.get(I);X.shadowIntensity=U.intensity,X.shadowBias=U.bias,X.shadowNormalBias=U.normalBias,X.shadowRadius=U.radius,X.shadowMapSize=U.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=V,f++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(O).multiplyScalar(z),V.distance=P,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[_]=V;const U=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,U.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=U.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=U.intensity,X.shadowBias=U.bias,X.shadowNormalBias=U.normalBias,X.shadowRadius=U.radius,X.shadowMapSize=U.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=k,v++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(O).multiplyScalar(z),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const U=I.shadow,X=t.get(I);X.shadowIntensity=U.intensity,X.shadowBias=U.bias,X.shadowNormalBias=U.normalBias,X.shadowRadius=U.radius,X.shadowMapSize=U.mapSize,X.shadowCameraNear=U.camera.near,X.shadowCameraFar=U.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=V,p++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(z),V.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[g]=V,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==x||y.numPointShadows!==S||y.numSpotShadows!==v||y.numSpotMaps!==A||y.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,y.directionalLength=f,y.pointLength=p,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=x,y.numPointShadows=S,y.numSpotShadows=v,y.numSpotMaps=A,y.numLightProbes=E,n.version=GM++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const S=c[g];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function xp(s){const e=new qM(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function XM(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new xp(s),e.set(i,[a])):r>=o.length?(a=new xp(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`,KM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ZM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],vp=new De,Wr=new L,Cc=new L;function jM(s,e,t){let n=new Ll;const i=new We,r=new We,o=new _t,a=new Py,l=new Ly,c={},h=t.maxTextureSize,u={[_n]:Jt,[Jt]:_n,[jt]:jt},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:$M,fragmentShader:YM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Dt;p.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let g=this.type;this.render=function(T,E,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===j0&&(xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wa);const M=s.getRenderTarget(),B=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Ei),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=g!==this.type;z&&E.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=T.length;P<k;P++){const V=T[P],U=V.shadow;if(U===void 0){xe("WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const X=U.getFrameExtents();i.multiply(X),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,U.mapSize.y=r.y));const j=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=j,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===uo){if(V.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Qn(i.x,i.y,{format:vr,type:wi,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),U.map.texture.name=V.name+".shadowMap",U.map.depthTexture=new Bo(i.x,i.y,En),U.map.depthTexture.name=V.name+".shadowMapDepth",U.map.depthTexture.format=Ai,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=It,U.map.depthTexture.magFilter=It}else V.isPointLight?(U.map=new Zg(i.x),U.map.depthTexture=new wy(i.x,ti)):(U.map=new Qn(i.x,i.y),U.map.depthTexture=new Bo(i.x,i.y,ti)),U.map.depthTexture.name=V.name+".shadowMap",U.map.depthTexture.format=Ai,this.type===Wa?(U.map.depthTexture.compareFunction=j?ad:od,U.map.depthTexture.minFilter=Lt,U.map.depthTexture.magFilter=Lt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=It,U.map.depthTexture.magFilter=It);U.camera.updateProjectionMatrix()}const ie=U.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<ie;ae++){if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,ae),s.clear();else{ae===0&&(s.setRenderTarget(U.map),s.clear());const de=U.getViewport(ae);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),O.viewport(o)}if(V.isPointLight){const de=U.camera,ve=U.matrix,Ve=V.distance||de.far;Ve!==de.far&&(de.far=Ve,de.updateProjectionMatrix()),Wr.setFromMatrixPosition(V.matrixWorld),de.position.copy(Wr),Cc.copy(de.position),Cc.add(KM[ae]),de.up.copy(ZM[ae]),de.lookAt(Cc),de.updateMatrixWorld(),ve.makeTranslation(-Wr.x,-Wr.y,-Wr.z),vp.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),U._frustum.setFromProjectionMatrix(vp,de.coordinateSystem,de.reversedDepth)}else U.updateMatrices(V);n=U.getFrustum(),v(E,y,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===uo&&x(U,y),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(M,B,I)};function x(T,E){const y=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qn(i.x,i.y,{format:vr,type:wi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,y,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,y,f,_,null)}function S(T,E,y,M){let B=null;const I=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)B=I;else if(B=y.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const O=B.uuid,z=E.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let k=P[z];k===void 0&&(k=B.clone(),P[z]=k,E.addEventListener("dispose",A)),B=k}if(B.visible=E.visible,B.wireframe=E.wireframe,M===uo?B.side=E.shadowSide!==null?E.shadowSide:E.side:B.side=E.shadowSide!==null?E.shadowSide:u[E.side],B.alphaMap=E.alphaMap,B.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,B.map=E.map,B.clipShadows=E.clipShadows,B.clippingPlanes=E.clippingPlanes,B.clipIntersection=E.clipIntersection,B.displacementMap=E.displacementMap,B.displacementScale=E.displacementScale,B.displacementBias=E.displacementBias,B.wireframeLinewidth=E.wireframeLinewidth,B.linewidth=E.linewidth,y.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const O=s.properties.get(B);O.light=y}return B}function v(T,E,y,M,B){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===uo)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const z=e.update(T),P=T.material;if(Array.isArray(P)){const k=z.groups;for(let V=0,U=k.length;V<U;V++){const X=k[V],j=P[X.materialIndex];if(j&&j.visible){const ie=S(T,j,M,B);T.onBeforeShadow(s,T,E,y,z,ie,X),s.renderBufferDirect(y,null,z,ie,T,X),T.onAfterShadow(s,T,E,y,z,ie,X)}}}else if(P.visible){const k=S(T,P,M,B);T.onBeforeShadow(s,T,E,y,z,k,null),s.renderBufferDirect(y,null,z,k,T,null),T.onAfterShadow(s,T,E,y,z,k,null)}}const O=T.children;for(let z=0,P=O.length;z<P;z++)v(O[z],E,y,M,B)}function A(T){T.target.removeEventListener("dispose",A);for(const y in c){const M=c[y],B=T.target.uuid;B in M&&(M[B].dispose(),delete M[B])}}}function JM(s,e){function t(){let F=!1;const ce=new _t;let oe=null;const ye=new _t(0,0,0,0);return{setMask:function(ne){oe!==ne&&!F&&(s.colorMask(ne,ne,ne,ne),oe=ne)},setLocked:function(ne){F=ne},setClear:function(ne,Y,Ee,Fe,pt){pt===!0&&(ne*=Fe,Y*=Fe,Ee*=Fe),ce.set(ne,Y,Ee,Fe),ye.equals(ce)===!1&&(s.clearColor(ne,Y,Ee,Fe),ye.copy(ce))},reset:function(){F=!1,oe=null,ye.set(-1,0,0,0)}}}function n(){let F=!1,ce=!1,oe=null,ye=null,ne=null;return{setReversed:function(Y){if(ce!==Y){const Ee=e.get("EXT_clip_control");Y?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ce=Y;const Fe=ne;ne=null,this.setClear(Fe)}},getReversed:function(){return ce},setTest:function(Y){Y?Q(s.DEPTH_TEST):se(s.DEPTH_TEST)},setMask:function(Y){oe!==Y&&!F&&(s.depthMask(Y),oe=Y)},setFunc:function(Y){if(ce&&(Y=B_[Y]),ye!==Y){switch(Y){case uh:s.depthFunc(s.NEVER);break;case dh:s.depthFunc(s.ALWAYS);break;case fh:s.depthFunc(s.LESS);break;case _r:s.depthFunc(s.LEQUAL);break;case ph:s.depthFunc(s.EQUAL);break;case mh:s.depthFunc(s.GEQUAL);break;case gh:s.depthFunc(s.GREATER);break;case _h:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=Y}},setLocked:function(Y){F=Y},setClear:function(Y){ne!==Y&&(ne=Y,ce&&(Y=1-Y),s.clearDepth(Y))},reset:function(){F=!1,oe=null,ye=null,ne=null,ce=!1}}}function i(){let F=!1,ce=null,oe=null,ye=null,ne=null,Y=null,Ee=null,Fe=null,pt=null;return{setTest:function(rt){F||(rt?Q(s.STENCIL_TEST):se(s.STENCIL_TEST))},setMask:function(rt){ce!==rt&&!F&&(s.stencilMask(rt),ce=rt)},setFunc:function(rt,ri,oi){(oe!==rt||ye!==ri||ne!==oi)&&(s.stencilFunc(rt,ri,oi),oe=rt,ye=ri,ne=oi)},setOp:function(rt,ri,oi){(Y!==rt||Ee!==ri||Fe!==oi)&&(s.stencilOp(rt,ri,oi),Y=rt,Ee=ri,Fe=oi)},setLocked:function(rt){F=rt},setClear:function(rt){pt!==rt&&(s.clearStencil(rt),pt=rt)},reset:function(){F=!1,ce=null,oe=null,ye=null,ne=null,Y=null,Ee=null,Fe=null,pt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,S=null,v=null,A=null,T=null,E=new ue(0,0,0),y=0,M=!1,B=null,I=null,O=null,z=null,P=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,U=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=U>=1):X.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=U>=2);let j=null,ie={};const ae=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),ve=new _t().fromArray(ae),Ve=new _t().fromArray(de);function Ze(F,ce,oe,ye){const ne=new Uint8Array(4),Y=s.createTexture();s.bindTexture(F,Y),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<oe;Ee++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(ce+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return Y}const $={};$[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(_r),qe(!1),gt(nf),Q(s.CULL_FACE),it(Ei);function Q(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function se(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Le(F,ce){return u[F]!==ce?(s.bindFramebuffer(F,ce),u[F]=ce,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ce(F,ce){let oe=f,ye=!1;if(F){oe=d.get(ce),oe===void 0&&(oe=[],d.set(ce,oe));const ne=F.textures;if(oe.length!==ne.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,Ee=ne.length;Y<Ee;Y++)oe[Y]=s.COLOR_ATTACHMENT0+Y;oe.length=ne.length,ye=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,ye=!0);ye&&s.drawBuffers(oe)}function Be(F){return p!==F?(s.useProgram(F),p=F,!0):!1}const xt={[Ms]:s.FUNC_ADD,[Q0]:s.FUNC_SUBTRACT,[e_]:s.FUNC_REVERSE_SUBTRACT};xt[t_]=s.MIN,xt[n_]=s.MAX;const Ne={[i_]:s.ZERO,[s_]:s.ONE,[r_]:s.SRC_COLOR,[ch]:s.SRC_ALPHA,[u_]:s.SRC_ALPHA_SATURATE,[c_]:s.DST_COLOR,[a_]:s.DST_ALPHA,[o_]:s.ONE_MINUS_SRC_COLOR,[hh]:s.ONE_MINUS_SRC_ALPHA,[h_]:s.ONE_MINUS_DST_COLOR,[l_]:s.ONE_MINUS_DST_ALPHA,[d_]:s.CONSTANT_COLOR,[f_]:s.ONE_MINUS_CONSTANT_COLOR,[p_]:s.CONSTANT_ALPHA,[m_]:s.ONE_MINUS_CONSTANT_ALPHA};function it(F,ce,oe,ye,ne,Y,Ee,Fe,pt,rt){if(F===Ei){_===!0&&(se(s.BLEND),_=!1);return}if(_===!1&&(Q(s.BLEND),_=!0),F!==J0){if(F!==m||rt!==M){if((g!==Ms||v!==Ms)&&(s.blendEquation(s.FUNC_ADD),g=Ms,v=Ms),rt)switch(F){case ur:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sf:s.blendFunc(s.ONE,s.ONE);break;case rf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case of:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ke("WebGLState: Invalid blending: ",F);break}else switch(F){case ur:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rf:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case of:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",F);break}x=null,S=null,A=null,T=null,E.set(0,0,0),y=0,m=F,M=rt}return}ne=ne||ce,Y=Y||oe,Ee=Ee||ye,(ce!==g||ne!==v)&&(s.blendEquationSeparate(xt[ce],xt[ne]),g=ce,v=ne),(oe!==x||ye!==S||Y!==A||Ee!==T)&&(s.blendFuncSeparate(Ne[oe],Ne[ye],Ne[Y],Ne[Ee]),x=oe,S=ye,A=Y,T=Ee),(Fe.equals(E)===!1||pt!==y)&&(s.blendColor(Fe.r,Fe.g,Fe.b,pt),E.copy(Fe),y=pt),m=F,M=!1}function st(F,ce){F.side===jt?se(s.CULL_FACE):Q(s.CULL_FACE);let oe=F.side===Jt;ce&&(oe=!oe),qe(oe),F.blending===ur&&F.transparent===!1?it(Ei):it(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const ye=F.stencilWrite;a.setTest(ye),ye&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Et(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):se(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){B!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),B=F)}function gt(F){F!==K0?(Q(s.CULL_FACE),F!==I&&(F===nf?s.cullFace(s.BACK):F===Z0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):se(s.CULL_FACE),I=F}function D(F){F!==O&&(V&&s.lineWidth(F),O=F)}function Et(F,ce,oe){F?(Q(s.POLYGON_OFFSET_FILL),(z!==ce||P!==oe)&&(z=ce,P=oe,o.getReversed()&&(ce=-ce),s.polygonOffset(ce,oe))):se(s.POLYGON_OFFSET_FILL)}function tt(F){F?Q(s.SCISSOR_TEST):se(s.SCISSOR_TEST)}function ht(F){F===void 0&&(F=s.TEXTURE0+k-1),j!==F&&(s.activeTexture(F),j=F)}function be(F,ce,oe){oe===void 0&&(j===null?oe=s.TEXTURE0+k-1:oe=j);let ye=ie[oe];ye===void 0&&(ye={type:void 0,texture:void 0},ie[oe]=ye),(ye.type!==F||ye.texture!==ce)&&(j!==oe&&(s.activeTexture(oe),j=oe),s.bindTexture(F,ce||$[F]),ye.type=F,ye.texture=ce)}function R(){const F=ie[j];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(F){ke("WebGLState:",F)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(F){ke("WebGLState:",F)}}function Z(){try{s.texSubImage2D(...arguments)}catch(F){ke("WebGLState:",F)}}function ee(){try{s.texSubImage3D(...arguments)}catch(F){ke("WebGLState:",F)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(F){ke("WebGLState:",F)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(F){ke("WebGLState:",F)}}function le(){try{s.texStorage2D(...arguments)}catch(F){ke("WebGLState:",F)}}function Pe(){try{s.texStorage3D(...arguments)}catch(F){ke("WebGLState:",F)}}function Ue(){try{s.texImage2D(...arguments)}catch(F){ke("WebGLState:",F)}}function te(){try{s.texImage3D(...arguments)}catch(F){ke("WebGLState:",F)}}function re(F){ve.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ve.copy(F))}function Me(F){Ve.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Ve.copy(F))}function Te(F,ce){let oe=c.get(ce);oe===void 0&&(oe=new WeakMap,c.set(ce,oe));let ye=oe.get(F);ye===void 0&&(ye=s.getUniformBlockIndex(ce,F.name),oe.set(F,ye))}function ge(F,ce){const ye=c.get(ce).get(F);l.get(ce)!==ye&&(s.uniformBlockBinding(ce,ye,F.__bindingPointIndex),l.set(ce,ye))}function Ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,ie={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,S=null,v=null,A=null,T=null,E=new ue(0,0,0),y=0,M=!1,B=null,I=null,O=null,z=null,P=null,ve.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:se,bindFramebuffer:Le,drawBuffers:Ce,useProgram:Be,setBlending:it,setMaterial:st,setFlipSided:qe,setCullFace:gt,setLineWidth:D,setPolygonOffset:Et,setScissorTest:tt,activeTexture:ht,bindTexture:be,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:N,texImage2D:Ue,texImage3D:te,updateUBOMapping:Te,uniformBlockBinding:ge,texStorage2D:le,texStorage3D:Pe,texSubImage2D:Z,texSubImage3D:ee,compressedTexSubImage2D:K,compressedTexSubImage3D:Se,scissor:re,viewport:Me,reset:Ye}}function QM(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return f?new OffscreenCanvas(R,b):Lo("canvas")}function _(R,b,N){let Z=1;const ee=be(R);if((ee.width>N||ee.height>N)&&(Z=N/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*ee.width),Se=Math.floor(Z*ee.height);u===void 0&&(u=p(K,Se));const le=b?p(K,Se):u;return le.width=K,le.height=Se,le.getContext("2d").drawImage(R,0,0,K,Se),xe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Se+")."),le}else return"data"in R&&xe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(R,b,N,Z,ee=!1){if(R!==null){if(s[R]!==void 0)return s[R];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=b;if(b===s.RED&&(N===s.FLOAT&&(K=s.R32F),N===s.HALF_FLOAT&&(K=s.R16F),N===s.UNSIGNED_BYTE&&(K=s.R8)),b===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.R8UI),N===s.UNSIGNED_SHORT&&(K=s.R16UI),N===s.UNSIGNED_INT&&(K=s.R32UI),N===s.BYTE&&(K=s.R8I),N===s.SHORT&&(K=s.R16I),N===s.INT&&(K=s.R32I)),b===s.RG&&(N===s.FLOAT&&(K=s.RG32F),N===s.HALF_FLOAT&&(K=s.RG16F),N===s.UNSIGNED_BYTE&&(K=s.RG8)),b===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RG8UI),N===s.UNSIGNED_SHORT&&(K=s.RG16UI),N===s.UNSIGNED_INT&&(K=s.RG32UI),N===s.BYTE&&(K=s.RG8I),N===s.SHORT&&(K=s.RG16I),N===s.INT&&(K=s.RG32I)),b===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RGB8UI),N===s.UNSIGNED_SHORT&&(K=s.RGB16UI),N===s.UNSIGNED_INT&&(K=s.RGB32UI),N===s.BYTE&&(K=s.RGB8I),N===s.SHORT&&(K=s.RGB16I),N===s.INT&&(K=s.RGB32I)),b===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),N===s.UNSIGNED_INT&&(K=s.RGBA32UI),N===s.BYTE&&(K=s.RGBA8I),N===s.SHORT&&(K=s.RGBA16I),N===s.INT&&(K=s.RGBA32I)),b===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),b===s.RGBA){const Se=ee?sl:et.getTransfer(Z);N===s.FLOAT&&(K=s.RGBA32F),N===s.HALF_FLOAT&&(K=s.RGBA16F),N===s.UNSIGNED_BYTE&&(K=Se===ot?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,b){let N;return R?b===null||b===ti||b===Co?N=s.DEPTH24_STENCIL8:b===En?N=s.DEPTH32F_STENCIL8:b===Ao&&(N=s.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ti||b===Co?N=s.DEPTH_COMPONENT24:b===En?N=s.DEPTH_COMPONENT32F:b===Ao&&(N=s.DEPTH_COMPONENT16),N}function A(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==It&&R.minFilter!==Lt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){const b=R.target;b.removeEventListener("dispose",T),y(b),b.isVideoTexture&&h.delete(b)}function E(R){const b=R.target;b.removeEventListener("dispose",E),B(b)}function y(R){const b=n.get(R);if(b.__webglInit===void 0)return;const N=R.source,Z=d.get(N);if(Z){const ee=Z[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(R),Object.keys(Z).length===0&&d.delete(N)}n.remove(R)}function M(R){const b=n.get(R);s.deleteTexture(b.__webglTexture);const N=R.source,Z=d.get(N);delete Z[b.__cacheKey],o.memory.textures--}function B(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ee=0;ee<b.__webglFramebuffer[Z].length;ee++)s.deleteFramebuffer(b.__webglFramebuffer[Z][ee]);else s.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[Z]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const N=R.textures;for(let Z=0,ee=N.length;Z<ee;Z++){const K=n.get(N[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(N[Z])}n.remove(R)}let I=0;function O(){I=0}function z(){const R=I;return R>=i.maxTextures&&xe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function P(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){const N=n.get(R);if(R.isVideoTexture&&tt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&N.__version!==R.version){const Z=R.image;if(Z===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,R,b);return}}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+b)}function V(R,b){const N=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){$(N,R,b);return}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+b)}function U(R,b){const N=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){$(N,R,b);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+b)}function X(R,b){const N=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&N.__version!==R.version){Q(N,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+b)}const j={[xr]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[il]:s.MIRRORED_REPEAT},ie={[It]:s.NEAREST,[Eg]:s.NEAREST_MIPMAP_NEAREST,[fo]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[qa]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},ae={[M_]:s.NEVER,[C_]:s.ALWAYS,[E_]:s.LESS,[od]:s.LEQUAL,[T_]:s.EQUAL,[ad]:s.GEQUAL,[w_]:s.GREATER,[A_]:s.NOTEQUAL};function de(R,b){if(b.type===En&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Lt||b.magFilter===qa||b.magFilter===fo||b.magFilter===bi||b.minFilter===Lt||b.minFilter===qa||b.minFilter===fo||b.minFilter===bi)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,j[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,j[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,j[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ie[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===It||b.minFilter!==fo&&b.minFilter!==bi||b.type===En&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ve(R,b){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));const Z=b.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const K=P(b);if(K!==R.__cacheKey){ee[K]===void 0&&(ee[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ee[K].usedTimes++;const Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&M(b)),R.__cacheKey=K,R.__webglTexture=ee[K].texture}return N}function Ve(R,b,N){return Math.floor(Math.floor(R/N)/b)}function Ze(R,b,N,Z){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,N,Z,b.data);else{K.sort((te,re)=>te.start-re.start);let Se=0;for(let te=1;te<K.length;te++){const re=K[Se],Me=K[te],Te=re.start+re.count,ge=Ve(Me.start,b.width,4),Ye=Ve(re.start,b.width,4);Me.start<=Te+1&&ge===Ye&&Ve(Me.start+Me.count-1,b.width,4)===ge?re.count=Math.max(re.count,Me.start+Me.count-re.start):(++Se,K[Se]=Me)}K.length=Se+1;const le=s.getParameter(s.UNPACK_ROW_LENGTH),Pe=s.getParameter(s.UNPACK_SKIP_PIXELS),Ue=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let te=0,re=K.length;te<re;te++){const Me=K[te],Te=Math.floor(Me.start/4),ge=Math.ceil(Me.count/4),Ye=Te%b.width,F=Math.floor(Te/b.width),ce=ge,oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,Ye,F,ce,oe,N,Z,b.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function $(R,b,N){let Z=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=s.TEXTURE_3D);const ee=ve(R,b),K=b.source;t.bindTexture(Z,R.__webglTexture,s.TEXTURE0+N);const Se=n.get(K);if(K.version!==Se.__version||ee===!0){t.activeTexture(s.TEXTURE0+N);const le=et.getPrimaries(et.workingColorSpace),Pe=b.colorSpace===Yi?null:et.getPrimaries(b.colorSpace),Ue=b.colorSpace===Yi||le===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let te=_(b.image,!1,i.maxTextureSize);te=ht(b,te);const re=r.convert(b.format,b.colorSpace),Me=r.convert(b.type);let Te=S(b.internalFormat,re,Me,b.colorSpace,b.isVideoTexture);de(Z,b);let ge;const Ye=b.mipmaps,F=b.isVideoTexture!==!0,ce=Se.__version===void 0||ee===!0,oe=K.dataReady,ye=A(b,te);if(b.isDepthTexture)Te=v(b.format===ws,b.type),ce&&(F?t.texStorage2D(s.TEXTURE_2D,1,Te,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Te,te.width,te.height,0,re,Me,null));else if(b.isDataTexture)if(Ye.length>0){F&&ce&&t.texStorage2D(s.TEXTURE_2D,ye,Te,Ye[0].width,Ye[0].height);for(let ne=0,Y=Ye.length;ne<Y;ne++)ge=Ye[ne],F?oe&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ge.width,ge.height,re,Me,ge.data):t.texImage2D(s.TEXTURE_2D,ne,Te,ge.width,ge.height,0,re,Me,ge.data);b.generateMipmaps=!1}else F?(ce&&t.texStorage2D(s.TEXTURE_2D,ye,Te,te.width,te.height),oe&&Ze(b,te,re,Me)):t.texImage2D(s.TEXTURE_2D,0,Te,te.width,te.height,0,re,Me,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Te,Ye[0].width,Ye[0].height,te.depth);for(let ne=0,Y=Ye.length;ne<Y;ne++)if(ge=Ye[ne],b.format!==Tn)if(re!==null)if(F){if(oe)if(b.layerUpdates.size>0){const Ee=jf(ge.width,ge.height,b.format,b.type);for(const Fe of b.layerUpdates){const pt=ge.data.subarray(Fe*Ee/ge.data.BYTES_PER_ELEMENT,(Fe+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Fe,ge.width,ge.height,1,re,pt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,te.depth,re,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Te,ge.width,ge.height,te.depth,0,ge.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,te.depth,re,Me,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Te,ge.width,ge.height,te.depth,0,re,Me,ge.data)}else{F&&ce&&t.texStorage2D(s.TEXTURE_2D,ye,Te,Ye[0].width,Ye[0].height);for(let ne=0,Y=Ye.length;ne<Y;ne++)ge=Ye[ne],b.format!==Tn?re!==null?F?oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ge.width,ge.height,re,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Te,ge.width,ge.height,0,ge.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?oe&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ge.width,ge.height,re,Me,ge.data):t.texImage2D(s.TEXTURE_2D,ne,Te,ge.width,ge.height,0,re,Me,ge.data)}else if(b.isDataArrayTexture)if(F){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Te,te.width,te.height,te.depth),oe)if(b.layerUpdates.size>0){const ne=jf(te.width,te.height,b.format,b.type);for(const Y of b.layerUpdates){const Ee=te.data.subarray(Y*ne/te.data.BYTES_PER_ELEMENT,(Y+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,re,Me,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,re,Me,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,re,Me,te.data);else if(b.isData3DTexture)F?(ce&&t.texStorage3D(s.TEXTURE_3D,ye,Te,te.width,te.height,te.depth),oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,re,Me,te.data)):t.texImage3D(s.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,re,Me,te.data);else if(b.isFramebufferTexture){if(ce)if(F)t.texStorage2D(s.TEXTURE_2D,ye,Te,te.width,te.height);else{let ne=te.width,Y=te.height;for(let Ee=0;Ee<ye;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,Te,ne,Y,0,re,Me,null),ne>>=1,Y>>=1}}else if(Ye.length>0){if(F&&ce){const ne=be(Ye[0]);t.texStorage2D(s.TEXTURE_2D,ye,Te,ne.width,ne.height)}for(let ne=0,Y=Ye.length;ne<Y;ne++)ge=Ye[ne],F?oe&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,re,Me,ge):t.texImage2D(s.TEXTURE_2D,ne,Te,re,Me,ge);b.generateMipmaps=!1}else if(F){if(ce){const ne=be(te);t.texStorage2D(s.TEXTURE_2D,ye,Te,ne.width,ne.height)}oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,Me,te)}else t.texImage2D(s.TEXTURE_2D,0,Te,re,Me,te);m(b)&&g(Z),Se.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Q(R,b,N){if(b.image.length!==6)return;const Z=ve(R,b),ee=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+N);const K=n.get(ee);if(ee.version!==K.__version||Z===!0){t.activeTexture(s.TEXTURE0+N);const Se=et.getPrimaries(et.workingColorSpace),le=b.colorSpace===Yi?null:et.getPrimaries(b.colorSpace),Pe=b.colorSpace===Yi||Se===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ue=b.isCompressedTexture||b.image[0].isCompressedTexture,te=b.image[0]&&b.image[0].isDataTexture,re=[];for(let Y=0;Y<6;Y++)!Ue&&!te?re[Y]=_(b.image[Y],!0,i.maxCubemapSize):re[Y]=te?b.image[Y].image:b.image[Y],re[Y]=ht(b,re[Y]);const Me=re[0],Te=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),Ye=S(b.internalFormat,Te,ge,b.colorSpace),F=b.isVideoTexture!==!0,ce=K.__version===void 0||Z===!0,oe=ee.dataReady;let ye=A(b,Me);de(s.TEXTURE_CUBE_MAP,b);let ne;if(Ue){F&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Ye,Me.width,Me.height);for(let Y=0;Y<6;Y++){ne=re[Y].mipmaps;for(let Ee=0;Ee<ne.length;Ee++){const Fe=ne[Ee];b.format!==Tn?Te!==null?F?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee,0,0,Fe.width,Fe.height,Te,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee,Ye,Fe.width,Fe.height,0,Fe.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee,0,0,Fe.width,Fe.height,Te,ge,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee,Ye,Fe.width,Fe.height,0,Te,ge,Fe.data)}}}else{if(ne=b.mipmaps,F&&ce){ne.length>0&&ye++;const Y=be(re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Ye,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,re[Y].width,re[Y].height,Te,ge,re[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ye,re[Y].width,re[Y].height,0,Te,ge,re[Y].data);for(let Ee=0;Ee<ne.length;Ee++){const pt=ne[Ee].image[Y].image;F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee+1,0,0,pt.width,pt.height,Te,ge,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee+1,Ye,pt.width,pt.height,0,Te,ge,pt.data)}}else{F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,ge,re[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ye,Te,ge,re[Y]);for(let Ee=0;Ee<ne.length;Ee++){const Fe=ne[Ee];F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee+1,0,0,Te,ge,Fe.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee+1,Ye,Te,ge,Fe.image[Y])}}}m(b)&&g(s.TEXTURE_CUBE_MAP),K.__version=ee.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function se(R,b,N,Z,ee,K){const Se=r.convert(N.format,N.colorSpace),le=r.convert(N.type),Pe=S(N.internalFormat,Se,le,N.colorSpace),Ue=n.get(b),te=n.get(N);if(te.__renderTarget=b,!Ue.__hasExternalTextures){const re=Math.max(1,b.width>>K),Me=Math.max(1,b.height>>K);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,Pe,re,Me,b.depth,0,Se,le,null):t.texImage2D(ee,K,Pe,re,Me,0,Se,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Et(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,ee,te.__webglTexture,0,D(b)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,ee,te.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(R,b,N){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){const Z=b.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=v(b.stencilBuffer,ee),Se=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Et(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(b),K,b.width,b.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(b),K,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,K,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,R)}else{const Z=b.textures;for(let ee=0;ee<Z.length;ee++){const K=Z[ee],Se=r.convert(K.format,K.colorSpace),le=r.convert(K.type),Pe=S(K.internalFormat,Se,le,K.colorSpace);Et(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(b),Pe,b.width,b.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(b),Pe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(R,b,N){const Z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(b.depthTexture);if(ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),ee.__webglTexture===void 0){ee.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),de(s.TEXTURE_CUBE_MAP,b.depthTexture);const Ue=r.convert(b.depthTexture.format),te=r.convert(b.depthTexture.type);let re;b.depthTexture.format===Ai?re=s.DEPTH_COMPONENT24:b.depthTexture.format===ws&&(re=s.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,re,b.width,b.height,0,Ue,te,null)}}else k(b.depthTexture,0);const K=ee.__webglTexture,Se=D(b),le=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,Pe=b.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ai)Et(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,le,K,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,le,K,0);else if(b.depthTexture.format===ws)Et(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,le,K,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Pe,le,K,0);else throw new Error("Unknown depthTexture format")}function Be(R){const b=n.get(R),N=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(N)for(let Z=0;Z<6;Z++)Ce(b.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Ce(b.__webglFramebuffer[0],R,0):Ce(b.__webglFramebuffer,R,0)}else if(N){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=s.createRenderbuffer(),Le(b.__webglDepthbuffer[Z],R,!1);else{const ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,K)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Le(b.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,K)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(R,b,N){const Z=n.get(R);b!==void 0&&se(Z.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Be(R)}function Ne(R){const b=R.texture,N=n.get(R),Z=n.get(b);R.addEventListener("dispose",E);const ee=R.textures,K=R.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=b.version,o.memory.textures++),K){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)N.__webglFramebuffer[le][Pe]=s.createFramebuffer()}else N.__webglFramebuffer[le]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)N.__webglFramebuffer[le]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Se)for(let le=0,Pe=ee.length;le<Pe;le++){const Ue=n.get(ee[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Et(R)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const Pe=ee[le];N.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const Ue=r.convert(Pe.format,Pe.colorSpace),te=r.convert(Pe.type),re=S(Pe.internalFormat,Ue,te,Pe.colorSpace,R.isXRRenderTarget===!0),Me=D(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,re,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,N.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(N.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),de(s.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pe=0;Pe<b.mipmaps.length;Pe++)se(N.__webglFramebuffer[le][Pe],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe);else se(N.__webglFramebuffer[le],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(b)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,Pe=ee.length;le<Pe;le++){const Ue=ee[le],te=n.get(Ue);let re=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,te.__webglTexture),de(re,Ue),se(N.__webglFramebuffer,R,Ue,s.COLOR_ATTACHMENT0+le,re,0),m(Ue)&&g(re)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),de(le,b),b.mipmaps&&b.mipmaps.length>0)for(let Pe=0;Pe<b.mipmaps.length;Pe++)se(N.__webglFramebuffer[Pe],R,b,s.COLOR_ATTACHMENT0,le,Pe);else se(N.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,le,0);m(b)&&g(le),t.unbindTexture()}R.depthBuffer&&Be(R)}function it(R){const b=R.textures;for(let N=0,Z=b.length;N<Z;N++){const ee=b[N];if(m(ee)){const K=x(R),Se=n.get(ee).__webglTexture;t.bindTexture(K,Se),g(K),t.unbindTexture()}}}const st=[],qe=[];function gt(R){if(R.samples>0){if(Et(R)===!1){const b=R.textures,N=R.width,Z=R.height;let ee=s.COLOR_BUFFER_BIT;const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(R),le=b.length>1;if(le)for(let Ue=0;Ue<b.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Pe=R.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ue=0;Ue<b.length;Ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[Ue]);const te=n.get(b[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,N,Z,0,0,N,Z,ee,s.NEAREST),l===!0&&(st.length=0,qe.length=0,st.push(s.COLOR_ATTACHMENT0+Ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(K),qe.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let Ue=0;Ue<b.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Se.__webglColorRenderbuffer[Ue]);const te=n.get(b[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function D(R){return Math.min(i.maxSamples,R.samples)}function Et(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function tt(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function ht(R,b){const N=R.colorSpace,Z=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==sn&&N!==Yi&&(et.getTransfer(N)===ot?(Z!==Tn||ee!==gn)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",N)),b}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=U,this.setTextureCube=X,this.rebindTextures=xt,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eE(s,e){function t(n,i=Yi){let r;const o=et.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===ed)return s.UNSIGNED_SHORT_4_4_4_4;if(n===td)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ag)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Cg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tg)return s.BYTE;if(n===wg)return s.SHORT;if(n===Ao)return s.UNSIGNED_SHORT;if(n===Qu)return s.INT;if(n===ti)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===wi)return s.HALF_FLOAT;if(n===Ig)return s.ALPHA;if(n===Rg)return s.RGB;if(n===Tn)return s.RGBA;if(n===Ai)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===nd)return s.RED;if(n===id)return s.RED_INTEGER;if(n===vr)return s.RG;if(n===sd)return s.RG_INTEGER;if(n===rd)return s.RGBA_INTEGER;if(n===Xa||n===$a||n===Ya||n===Ka)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yh||n===xh||n===vh||n===bh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===Mh||n===Eh||n===Th||n===wh||n===Ah||n===Ch)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sh||n===Mh)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Th)return r.COMPRESSED_R11_EAC;if(n===wh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ah)return r.COMPRESSED_RG11_EAC;if(n===Ch)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ih||n===Rh||n===Ph||n===Lh||n===Bh||n===Dh||n===kh||n===Uh||n===Nh||n===Fh||n===Oh||n===zh||n===Vh||n===Hh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ih)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ph)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hh)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gh||n===Wh||n===qh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gh)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xh||n===$h||n===Yh||n===Kh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$h)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const tE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
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

}`;class iE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:tE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sE extends Cr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new iE,g={},x=t.getContextAttributes();let S=null,v=null;const A=[],T=[],E=new We;let y=null;const M=new Kt;M.viewport=new _t;const B=new Kt;B.viewport=new _t;const I=[M,B],O=new nx;let z=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=A[$];return Q===void 0&&(Q=new Ql,A[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=A[$];return Q===void 0&&(Q=new Ql,A[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=A[$];return Q===void 0&&(Q=new Ql,A[$]=Q),Q.getHandSpace()};function k($){const Q=T.indexOf($.inputSource);if(Q===-1)return;const se=A[Q];se!==void 0&&(se.update($.inputSource,$.frame,c||o),se.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",U);for(let $=0;$<A.length;$++){const Q=T[$];Q!==null&&(T[$]=null,A[$].disconnect(Q))}z=null,P=null,m.reset();for(const $ in g)delete g[$];e.setRenderTarget(S),f=null,d=null,u=null,i=null,v=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Le=null,Ce=null;x.depth&&(Ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?ws:Ai,Le=x.stencil?Co:ti);const Be={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Qn(d.textureWidth,d.textureHeight,{format:Tn,type:gn,depthTexture:new Bo(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qn(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U($){for(let Q=0;Q<$.removed.length;Q++){const se=$.removed[Q],Le=T.indexOf(se);Le>=0&&(T[Le]=null,A[Le].disconnect(se))}for(let Q=0;Q<$.added.length;Q++){const se=$.added[Q];let Le=T.indexOf(se);if(Le===-1){for(let Be=0;Be<A.length;Be++)if(Be>=T.length){T.push(se),Le=Be;break}else if(T[Be]===null){T[Be]=se,Le=Be;break}if(Le===-1)break}const Ce=A[Le];Ce&&Ce.connect(se)}}const X=new L,j=new L;function ie($,Q,se){X.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);const Le=X.distanceTo(j),Ce=Q.projectionMatrix.elements,Be=se.projectionMatrix.elements,xt=Ce[14]/(Ce[10]-1),Ne=Ce[14]/(Ce[10]+1),it=(Ce[9]+1)/Ce[5],st=(Ce[9]-1)/Ce[5],qe=(Ce[8]-1)/Ce[0],gt=(Be[8]+1)/Be[0],D=xt*qe,Et=xt*gt,tt=Le/(-qe+gt),ht=tt*-qe;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ht),$.translateZ(tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const be=xt+tt,R=Ne+tt,b=D-ht,N=Et+(Le-ht),Z=it*Ne/R*be,ee=st*Ne/R*be;$.projectionMatrix.makePerspective(b,N,Z,ee,be,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,se=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(se=m.depthFar)),O.near=B.near=M.near=Q,O.far=B.far=M.far=se,(z!==O.near||P!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,P=O.far),O.layers.mask=$.layers.mask|6,M.layers.mask=O.layers.mask&-5,B.layers.mask=O.layers.mask&-3;const Le=$.parent,Ce=O.cameras;ae(O,Le);for(let Be=0;Be<Ce.length;Be++)ae(Ce[Be],Le);Ce.length===2?ie(O,M,B):O.projectionMatrix.copy(M.projectionMatrix),de($,O,Le)};function de($,Q,se){se===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=br*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return g[$]};let ve=null;function Ve($,Q){if(h=Q.getViewerPose(c||o),p=Q,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Le=!1;se.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let Ne=0;Ne<se.length;Ne++){const it=se[Ne];let st=null;if(f!==null)st=f.getViewport(it);else{const gt=u.getViewSubImage(d,it);st=gt.viewport,Ne===0&&(e.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(v))}let qe=I[Ne];qe===void 0&&(qe=new Kt,qe.layers.enable(Ne),qe.viewport=new _t,I[Ne]=qe),qe.matrix.fromArray(it.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(it.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(st.x,st.y,st.width,st.height),Ne===0&&(O.matrix.copy(qe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(qe)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Ne=u.getDepthInformation(se[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,i.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Ne=0;Ne<se.length;Ne++){const it=se[Ne].camera;if(it){let st=g[it];st||(st=new Vg,g[it]=st);const qe=u.getCameraImage(it);st.sourceTexture=qe}}}}for(let se=0;se<A.length;se++){const Le=T[se],Ce=A[se];Le!==null&&Ce!==void 0&&Ce.update(Le,Q,c||o)}ve&&ve($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}const Ze=new Kg;Ze.setAnimationLoop(Ve),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const hs=new Cn,rE=new De;function oE(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Hg(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,S,v){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Jt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Jt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),S=x.envMap,v=x.envMapRotation;S&&(m.envMap.value=S,hs.copy(v),hs.x*=-1,hs.y*=-1,hs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.envMapRotation.value.setFromMatrix4(rE.makeRotationFromEuler(hs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aE(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const v=S.program;n.uniformBlockBinding(x,v)}function c(x,S){let v=i[x.id];v===void 0&&(p(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(x,A);const T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const S=u();x.__bindingPointIndex=S;const v=s.createBuffer(),A=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=i[x.id],v=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let T=0,E=v.length;T<E;T++){const y=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,B=y.length;M<B;M++){const I=y[M];if(f(I,T,M,A)===!0){const O=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let k=0;k<z.length;k++){const V=z[k],U=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,O+P,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,P),P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,S,v,A){const T=x.value,E=S+"_"+v;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{const y=A[E];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return A[E]=T,!0}else if(y.equals(T)===!1)return y.copy(T),!0}return!1}function p(x){const S=x.uniforms;let v=0;const A=16;for(let E=0,y=S.length;E<y;E++){const M=Array.isArray(S[E])?S[E]:[S[E]];for(let B=0,I=M.length;B<I;B++){const O=M[B],z=Array.isArray(O.value)?O.value:[O.value];for(let P=0,k=z.length;P<k;P++){const V=z[P],U=_(V),X=v%A,j=X%U.boundary,ie=X+j;v+=j,ie!==0&&A-ie<U.storage&&(v+=A-ie),O.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=U.storage}}}const T=v%A;return T>0&&(v+=A-T),x.__size=v,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xe("WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}const lE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function cE(){return Hn===null&&(Hn=new ud(lE,16,16,vr,wi),Hn.name="DFG_LUT",Hn.minFilter=Lt,Hn.magFilter=Lt,Hn.wrapS=Kn,Hn.wrapT=Kn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class bp{constructor(e={}){const{canvas:t=P_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=f,m=new Set([rd,sd,id]),g=new Set([gn,ti,Ao,Co,ed,td]),x=new Uint32Array(4),S=new Int32Array(4);let v=null,A=null;const T=[],E=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let B=!1;this._outputColorSpace=Ct;let I=0,O=0,z=null,P=-1,k=null;const V=new _t,U=new _t;let X=null;const j=new ue(0);let ie=0,ae=t.width,de=t.height,ve=1,Ve=null,Ze=null;const $=new _t(0,0,ae,de),Q=new _t(0,0,ae,de);let se=!1;const Le=new Ll;let Ce=!1,Be=!1;const xt=new De,Ne=new L,it=new _t,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function gt(){return z===null?ve:1}let D=n;function Et(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ju}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",pt,!1),D===null){const H="webgl2";if(D=Et(H,w),D===null)throw Et(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw ke("WebGLRenderer: "+w.message),w}let tt,ht,be,R,b,N,Z,ee,K,Se,le,Pe,Ue,te,re,Me,Te,ge,Ye,F,ce,oe,ye;function ne(){tt=new hS(D),tt.init(),ce=new eE(D,tt),ht=new nS(D,tt,e,ce),be=new JM(D,tt),ht.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),R=new fS(D),b=new FM,N=new QM(D,tt,be,b,ht,ce,R),Z=new cS(M),ee=new yx(D),oe=new eS(D,ee),K=new uS(D,ee,R,oe),Se=new mS(D,K,ee,oe,R),ge=new pS(D,ht,N),re=new iS(b),le=new NM(M,Z,tt,ht,oe,re),Pe=new oE(M,b),Ue=new zM,te=new XM(tt),Te=new Qb(M,Z,be,Se,p,l),Me=new jM(M,Se,ht),ye=new aE(D,R,ht,be),Ye=new tS(D,tt,R),F=new dS(D,tt,R),R.programs=le.programs,M.capabilities=ht,M.extensions=tt,M.properties=b,M.renderLists=Ue,M.shadowMap=Me,M.state=be,M.info=R}ne(),_!==gn&&(y=new _S(_,t.width,t.height,i,r));const Y=new sE(M,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(ae,de,!1))},this.getSize=function(w){return w.set(ae,de)},this.setSize=function(w,H,q=!0){if(Y.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=w,de=H,t.width=Math.floor(w*ve),t.height=Math.floor(H*ve),q===!0&&(t.style.width=w+"px",t.style.height=H+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(ae*ve,de*ve).floor()},this.setDrawingBufferSize=function(w,H,q){ae=w,de=H,ve=q,t.width=Math.floor(w*q),t.height=Math.floor(H*q),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(_===gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,H,q,W){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,H,q,W),be.viewport(V.copy($).multiplyScalar(ve).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,H,q,W){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,H,q,W),be.scissor(U.copy(Q).multiplyScalar(ve).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){be.setScissorTest(se=w)},this.setOpaqueSort=function(w){Ve=w},this.setTransparentSort=function(w){Ze=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,q=!0){let W=0;if(w){let G=!1;if(z!==null){const pe=z.texture.format;G=m.has(pe)}if(G){const pe=z.texture.type,_e=g.has(pe),me=Te.getClearColor(),we=Te.getClearAlpha(),Ie=me.r,He=me.g,Ke=me.b;_e?(x[0]=Ie,x[1]=He,x[2]=Ke,x[3]=we,D.clearBufferuiv(D.COLOR,0,x)):(S[0]=Ie,S[1]=He,S[2]=Ke,S[3]=we,D.clearBufferiv(D.COLOR,0,S))}else W|=D.COLOR_BUFFER_BIT}H&&(W|=D.DEPTH_BUFFER_BIT),q&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),Te.dispose(),Ue.dispose(),te.dispose(),b.dispose(),Z.dispose(),Se.dispose(),oe.dispose(),ye.dispose(),le.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Yd),Y.removeEventListener("sessionend",Kd),es.stop()};function Ee(w){w.preventDefault(),rl("WebGLRenderer: Context Lost."),B=!0}function Fe(){rl("WebGLRenderer: Context Restored."),B=!1;const w=R.autoReset,H=Me.enabled,q=Me.autoUpdate,W=Me.needsUpdate,G=Me.type;ne(),R.autoReset=w,Me.enabled=H,Me.autoUpdate=q,Me.needsUpdate=W,Me.type=G}function pt(w){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const H=w.target;H.removeEventListener("dispose",rt),ri(H)}function ri(w){oi(w),b.remove(w)}function oi(w){const H=b.get(w).programs;H!==void 0&&(H.forEach(function(q){le.releaseProgram(q)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,q,W,G,pe){H===null&&(H=st);const _e=G.isMesh&&G.matrixWorld.determinant()<0,me=V0(w,H,q,W,G);be.setMaterial(W,_e);let we=q.index,Ie=1;if(W.wireframe===!0){if(we=K.getWireframeAttribute(q),we===void 0)return;Ie=2}const He=q.drawRange,Ke=q.attributes.position;let Re=He.start*Ie,ut=(He.start+He.count)*Ie;pe!==null&&(Re=Math.max(Re,pe.start*Ie),ut=Math.min(ut,(pe.start+pe.count)*Ie)),we!==null?(Re=Math.max(Re,0),ut=Math.min(ut,we.count)):Ke!=null&&(Re=Math.max(Re,0),ut=Math.min(ut,Ke.count));const At=ut-Re;if(At<0||At===1/0)return;oe.setup(G,W,me,q,we);let Tt,dt=Ye;if(we!==null&&(Tt=ee.get(we),dt=F,dt.setIndex(Tt)),G.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*gt()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(G.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),be.setLineWidth(qt*gt()),G.isLineSegments?dt.setMode(D.LINES):G.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else G.isPoints?dt.setMode(D.POINTS):G.isSprite&&dt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qt=G._multiDrawStarts,Ae=G._multiDrawCounts,ln=G._multiDrawCount,nt=we?ee.get(we).bytesPerElement:1,Rn=b.get(W).currentProgram.getUniforms();for(let zn=0;zn<ln;zn++)Rn.setValue(D,"_gl_DrawID",zn),dt.render(qt[zn]/nt,Ae[zn])}else if(G.isInstancedMesh)dt.renderInstances(Re,At,G.count);else if(q.isInstancedBufferGeometry){const qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ae=Math.min(q.instanceCount,qt);dt.renderInstances(Re,At,Ae)}else dt.render(Re,At)};function $d(w,H,q){w.transparent===!0&&w.side===jt&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,Fo(w,H,q),w.side=_n,w.needsUpdate=!0,Fo(w,H,q),w.side=jt):Fo(w,H,q)}this.compile=function(w,H,q=null){q===null&&(q=w),A=te.get(q),A.init(H),E.push(A),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),w!==q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const W=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let _e=0;_e<pe.length;_e++){const me=pe[_e];$d(me,q,G),W.add(me)}else $d(pe,q,G),W.add(pe)}),A=E.pop(),W},this.compileAsync=function(w,H,q=null){const W=this.compile(w,H,q);return new Promise(G=>{function pe(){if(W.forEach(function(_e){b.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){G(w);return}setTimeout(pe,10)}tt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Gl=null;function z0(w){Gl&&Gl(w)}function Yd(){es.stop()}function Kd(){es.start()}const es=new Kg;es.setAnimationLoop(z0),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(w){Gl=w,Y.setAnimationLoop(w),w===null?es.stop():es.start()},Y.addEventListener("sessionstart",Yd),Y.addEventListener("sessionend",Kd),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const q=Y.enabled===!0&&Y.isPresenting===!0,W=y!==null&&(z===null||q)&&y.begin(M,z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,H,z),A=te.get(w,E.length),A.init(H),E.push(A),xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Le.setFromProjectionMatrix(xt,Zn,H.reversedDepth),Be=this.localClippingEnabled,Ce=re.init(this.clippingPlanes,Be),v=Ue.get(w,T.length),v.init(),T.push(v),Y.enabled===!0&&Y.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&Wl(_e,H,-1/0,M.sortObjects)}Wl(w,H,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(Ve,Ze),qe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qe&&Te.addToRenderList(v,w),this.info.render.frame++,Ce===!0&&re.beginShadows();const G=A.state.shadowsArray;if(Me.render(G,w,H),Ce===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&y.hasRenderPass())===!1){const _e=v.opaque,me=v.transmissive;if(A.setupLights(),H.isArrayCamera){const we=H.cameras;if(me.length>0)for(let Ie=0,He=we.length;Ie<He;Ie++){const Ke=we[Ie];jd(_e,me,w,Ke)}qe&&Te.render(w);for(let Ie=0,He=we.length;Ie<He;Ie++){const Ke=we[Ie];Zd(v,w,Ke,Ke.viewport)}}else me.length>0&&jd(_e,me,w,H),qe&&Te.render(w),Zd(v,w,H)}z!==null&&O===0&&(N.updateMultisampleRenderTarget(z),N.updateRenderTargetMipmap(z)),W&&y.end(M),w.isScene===!0&&w.onAfterRender(M,w,H),oe.resetDefaultState(),P=-1,k=null,E.pop(),E.length>0?(A=E[E.length-1],Ce===!0&&re.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?v=T[T.length-1]:v=null};function Wl(w,H,q,W){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Le.intersectsSprite(w)){W&&it.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);const _e=Se.update(w),me=w.material;me.visible&&v.push(w,_e,me,q,it.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Le.intersectsObject(w))){const _e=Se.update(w),me=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),it.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),it.copy(_e.boundingSphere.center)),it.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(me)){const we=_e.groups;for(let Ie=0,He=we.length;Ie<He;Ie++){const Ke=we[Ie],Re=me[Ke.materialIndex];Re&&Re.visible&&v.push(w,_e,Re,q,it.z,Ke)}}else me.visible&&v.push(w,_e,me,q,it.z,null)}}const pe=w.children;for(let _e=0,me=pe.length;_e<me;_e++)Wl(pe[_e],H,q,W)}function Zd(w,H,q,W){const{opaque:G,transmissive:pe,transparent:_e}=w;A.setupLightsView(q),Ce===!0&&re.setGlobalState(M.clippingPlanes,q),W&&be.viewport(V.copy(W)),G.length>0&&No(G,H,q),pe.length>0&&No(pe,H,q),_e.length>0&&No(_e,H,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function jd(w,H,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const Re=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new Qn(1,1,{generateMipmaps:!0,type:Re?wi:gn,minFilter:bi,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const pe=A.state.transmissionRenderTarget[W.id],_e=W.viewport||V;pe.setSize(_e.z*M.transmissionResolutionScale,_e.w*M.transmissionResolutionScale);const me=M.getRenderTarget(),we=M.getActiveCubeFace(),Ie=M.getActiveMipmapLevel();M.setRenderTarget(pe),M.getClearColor(j),ie=M.getClearAlpha(),ie<1&&M.setClearColor(16777215,.5),M.clear(),qe&&Te.render(q);const He=M.toneMapping;M.toneMapping=Jn;const Ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),Ce===!0&&re.setGlobalState(M.clippingPlanes,W),No(w,q,W),N.updateMultisampleRenderTarget(pe),N.updateRenderTargetMipmap(pe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ut=0,At=H.length;ut<At;ut++){const Tt=H[ut],{object:dt,geometry:qt,material:Ae,group:ln}=Tt;if(Ae.side===jt&&dt.layers.test(W.layers)){const nt=Ae.side;Ae.side=Jt,Ae.needsUpdate=!0,Jd(dt,q,W,qt,Ae,ln),Ae.side=nt,Ae.needsUpdate=!0,Re=!0}}Re===!0&&(N.updateMultisampleRenderTarget(pe),N.updateRenderTargetMipmap(pe))}M.setRenderTarget(me,we,Ie),M.setClearColor(j,ie),Ke!==void 0&&(W.viewport=Ke),M.toneMapping=He}function No(w,H,q){const W=H.isScene===!0?H.overrideMaterial:null;for(let G=0,pe=w.length;G<pe;G++){const _e=w[G],{object:me,geometry:we,group:Ie}=_e;let He=_e.material;He.allowOverride===!0&&W!==null&&(He=W),me.layers.test(q.layers)&&Jd(me,H,q,we,He,Ie)}}function Jd(w,H,q,W,G,pe){w.onBeforeRender(M,H,q,W,G,pe),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(M,H,q,W,w,pe),G.transparent===!0&&G.side===jt&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,M.renderBufferDirect(q,H,W,G,w,pe),G.side=_n,G.needsUpdate=!0,M.renderBufferDirect(q,H,W,G,w,pe),G.side=jt):M.renderBufferDirect(q,H,W,G,w,pe),w.onAfterRender(M,H,q,W,G,pe)}function Fo(w,H,q){H.isScene!==!0&&(H=st);const W=b.get(w),G=A.state.lights,pe=A.state.shadowsArray,_e=G.state.version,me=le.getParameters(w,G.state,pe,H,q),we=le.getProgramCacheKey(me);let Ie=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,W.fog=H.fog;const He=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=Z.get(w.envMap||W.environment,He),W.envMapRotation=W.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",rt),Ie=new Map,W.programs=Ie);let Ke=Ie.get(we);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===_e)return ef(w,me),Ke}else me.uniforms=le.getUniforms(w),w.onBeforeCompile(me,M),Ke=le.acquireProgram(me,we),Ie.set(we,Ke),W.uniforms=me.uniforms;const Re=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=re.uniform),ef(w,me),W.needsLights=G0(w),W.lightsStateVersion=_e,W.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Ke,W.uniformsList=null,Ke}function Qd(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=Za.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function ef(w,H){const q=b.get(w);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function V0(w,H,q,W,G){H.isScene!==!0&&(H=st),N.resetTextureUnits();const pe=H.fog,_e=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?H.environment:null,me=z===null?M.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:sn,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ie=Z.get(W.envMap||_e,we),He=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!q.morphAttributes.position,ut=!!q.morphAttributes.normal,At=!!q.morphAttributes.color;let Tt=Jn;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Tt=M.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qt=dt!==void 0?dt.length:0,Ae=b.get(W),ln=A.state.lights;if(Ce===!0&&(Be===!0||w!==k)){const Nt=w===k&&W.id===P;re.setState(W,w,Nt)}let nt=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ln.state.version||Ae.outputColorSpace!==me||G.isBatchedMesh&&Ae.batching===!1||!G.isBatchedMesh&&Ae.batching===!0||G.isBatchedMesh&&Ae.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ae.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ae.instancing===!1||!G.isInstancedMesh&&Ae.instancing===!0||G.isSkinnedMesh&&Ae.skinning===!1||!G.isSkinnedMesh&&Ae.skinning===!0||G.isInstancedMesh&&Ae.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ae.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ae.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ae.instancingMorph===!1&&G.morphTexture!==null||Ae.envMap!==Ie||W.fog===!0&&Ae.fog!==pe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==re.numPlanes||Ae.numIntersection!==re.numIntersection)||Ae.vertexAlphas!==He||Ae.vertexTangents!==Ke||Ae.morphTargets!==Re||Ae.morphNormals!==ut||Ae.morphColors!==At||Ae.toneMapping!==Tt||Ae.morphTargetsCount!==qt)&&(nt=!0):(nt=!0,Ae.__version=W.version);let Rn=Ae.currentProgram;nt===!0&&(Rn=Fo(W,H,G));let zn=!1,ts=!1,Bs=!1;const ft=Rn.getUniforms(),zt=Ae.uniforms;if(be.useProgram(Rn.program)&&(zn=!0,ts=!0,Bs=!0),W.id!==P&&(P=W.id,ts=!0),zn||k!==w){be.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ft.setValue(D,"projectionMatrix",w.projectionMatrix),ft.setValue(D,"viewMatrix",w.matrixWorldInverse);const Ri=ft.map.cameraPosition;Ri!==void 0&&Ri.setValue(D,Ne.setFromMatrixPosition(w.matrixWorld)),ht.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,ts=!0,Bs=!0)}if(Ae.needsLights&&(ln.state.directionalShadowMap.length>0&&ft.setValue(D,"directionalShadowMap",ln.state.directionalShadowMap,N),ln.state.spotShadowMap.length>0&&ft.setValue(D,"spotShadowMap",ln.state.spotShadowMap,N),ln.state.pointShadowMap.length>0&&ft.setValue(D,"pointShadowMap",ln.state.pointShadowMap,N)),G.isSkinnedMesh){ft.setOptional(D,G,"bindMatrix"),ft.setOptional(D,G,"bindMatrixInverse");const Nt=G.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ft.setValue(D,"boneTexture",Nt.boneTexture,N))}G.isBatchedMesh&&(ft.setOptional(D,G,"batchingTexture"),ft.setValue(D,"batchingTexture",G._matricesTexture,N),ft.setOptional(D,G,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",G._indirectTexture,N),ft.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",G._colorsTexture,N));const Ii=q.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ge.update(G,q,Rn),(ts||Ae.receiveShadow!==G.receiveShadow)&&(Ae.receiveShadow=G.receiveShadow,ft.setValue(D,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&H.environment!==null&&(zt.envMapIntensity.value=H.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=cE()),ts&&(ft.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ae.needsLights&&H0(zt,Bs),pe&&W.fog===!0&&Pe.refreshFogUniforms(zt,pe),Pe.refreshMaterialUniforms(zt,W,ve,de,A.state.transmissionRenderTarget[w.id]),Za.upload(D,Qd(Ae),zt,N)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Za.upload(D,Qd(Ae),zt,N),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(D,"center",G.center),ft.setValue(D,"modelViewMatrix",G.modelViewMatrix),ft.setValue(D,"normalMatrix",G.normalMatrix),ft.setValue(D,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Nt=W.uniformsGroups;for(let Ri=0,Ds=Nt.length;Ri<Ds;Ri++){const tf=Nt[Ri];ye.update(tf,Rn),ye.bind(tf,Rn)}}return Rn}function H0(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function G0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,H,q){const W=b.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=H,b.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const q=b.get(w);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const W0=D.createFramebuffer();this.setRenderTarget=function(w,H=0,q=0){z=w,I=H,O=q;let W=null,G=!1,pe=!1;if(w){const me=b.get(w);if(me.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),V.copy(w.viewport),U.copy(w.scissor),X=w.scissorTest,be.viewport(V),be.scissor(U),be.setScissorTest(X),P=-1;return}else if(me.__webglFramebuffer===void 0)N.setupRenderTarget(w);else if(me.__hasExternalTextures)N.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&b.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(pe=!0);const Ie=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[H])?W=Ie[H][q]:W=Ie[H],G=!0):w.samples>0&&N.useMultisampledRTT(w)===!1?W=b.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?W=Ie[q]:W=Ie,V.copy(w.viewport),U.copy(w.scissor),X=w.scissorTest}else V.copy($).multiplyScalar(ve).floor(),U.copy(Q).multiplyScalar(ve).floor(),X=se;if(q!==0&&(W=W0),be.bindFramebuffer(D.FRAMEBUFFER,W)&&be.drawBuffers(w,W),be.viewport(V),be.scissor(U),be.setScissorTest(X),G){const me=b.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,me.__webglTexture,q)}else if(pe){const me=H;for(let we=0;we<w.textures.length;we++){const Ie=b.get(w.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Ie.__webglTexture,q,me)}}else if(w!==null&&q!==0){const me=b.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,q)}P=-1},this.readRenderTargetPixels=function(w,H,q,W,G,pe,_e,me=0){if(!(w&&w.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){be.bindFramebuffer(D.FRAMEBUFFER,we);try{const Ie=w.textures[me],He=Ie.format,Ke=Ie.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!ht.textureFormatReadable(He)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ke)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-W&&q>=0&&q<=w.height-G&&D.readPixels(H,q,W,G,ce.convert(He),ce.convert(Ke),pe)}finally{const Ie=z!==null?b.get(z).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(w,H,q,W,G,pe,_e,me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we)if(H>=0&&H<=w.width-W&&q>=0&&q<=w.height-G){be.bindFramebuffer(D.FRAMEBUFFER,we);const Ie=w.textures[me],He=Ie.format,Ke=Ie.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!ht.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(H,q,W,G,ce.convert(He),ce.convert(Ke),0);const ut=z!==null?b.get(z).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,ut);const At=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await L_(D,At,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(Re),D.deleteSync(At),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,q=0){const W=Math.pow(2,-q),G=Math.floor(w.image.width*W),pe=Math.floor(w.image.height*W),_e=H!==null?H.x:0,me=H!==null?H.y:0;N.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,_e,me,G,pe),be.unbindTexture()};const q0=D.createFramebuffer(),X0=D.createFramebuffer();this.copyTextureToTexture=function(w,H,q=null,W=null,G=0,pe=0){let _e,me,we,Ie,He,Ke,Re,ut,At;const Tt=w.isCompressedTexture?w.mipmaps[pe]:w.image;if(q!==null)_e=q.max.x-q.min.x,me=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,He=q.min.y,Ke=q.isBox3?q.min.z:0;else{const zt=Math.pow(2,-G);_e=Math.floor(Tt.width*zt),me=Math.floor(Tt.height*zt),w.isDataArrayTexture?we=Tt.depth:w.isData3DTexture?we=Math.floor(Tt.depth*zt):we=1,Ie=0,He=0,Ke=0}W!==null?(Re=W.x,ut=W.y,At=W.z):(Re=0,ut=0,At=0);const dt=ce.convert(H.format),qt=ce.convert(H.type);let Ae;H.isData3DTexture?(N.setTexture3D(H,0),Ae=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(N.setTexture2DArray(H,0),Ae=D.TEXTURE_2D_ARRAY):(N.setTexture2D(H,0),Ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const ln=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=D.getParameter(D.UNPACK_SKIP_PIXELS),zn=D.getParameter(D.UNPACK_SKIP_ROWS),ts=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);const Bs=w.isDataArrayTexture||w.isData3DTexture,ft=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const zt=b.get(w),Ii=b.get(H),Nt=b.get(zt.__renderTarget),Ri=b.get(Ii.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,Nt.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ds=0;Ds<we;Ds++)Bs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(w).__webglTexture,G,Ke+Ds),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(H).__webglTexture,pe,At+Ds)),D.blitFramebuffer(Ie,He,_e,me,Re,ut,_e,me,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||b.has(w)){const zt=b.get(w),Ii=b.get(H);be.bindFramebuffer(D.READ_FRAMEBUFFER,q0),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,X0);for(let Nt=0;Nt<we;Nt++)Bs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.__webglTexture,G,Ke+Nt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zt.__webglTexture,G),ft?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ii.__webglTexture,pe,At+Nt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ii.__webglTexture,pe),G!==0?D.blitFramebuffer(Ie,He,_e,me,Re,ut,_e,me,D.COLOR_BUFFER_BIT,D.NEAREST):ft?D.copyTexSubImage3D(Ae,pe,Re,ut,At+Nt,Ie,He,_e,me):D.copyTexSubImage2D(Ae,pe,Re,ut,Ie,He,_e,me);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ft?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ae,pe,Re,ut,At,_e,me,we,dt,qt,Tt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,pe,Re,ut,At,_e,me,we,dt,Tt.data):D.texSubImage3D(Ae,pe,Re,ut,At,_e,me,we,dt,qt,Tt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,Re,ut,_e,me,dt,qt,Tt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,Re,ut,Tt.width,Tt.height,dt,Tt.data):D.texSubImage2D(D.TEXTURE_2D,pe,Re,ut,_e,me,dt,qt,Tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ln),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,zn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ts),pe===0&&H.generateMipmaps&&D.generateMipmap(Ae),be.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&N.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?N.setTextureCube(w,0):w.isData3DTexture?N.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?N.setTexture2DArray(w,0):N.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){I=0,O=0,z=null,be.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function Sp(s,e){if(e===v_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Zh||e===Pg){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Zh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function hE(s){const e=new Map,t=new Map,n=s.clone();return t0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function t0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)t0(s.children[n],e.children[n],t)}class uE extends Qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new mE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new Mp(t,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mp(t,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new IE(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=xo.extractUrlBase(e);o=xo.resolveURL(c,this.path)}else o=xo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _d(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===n0){try{o[je.KHR_BINARY_GLTF]=new RE(e)}catch(u){i&&i(u);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new GE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new pE;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new PE(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new LE;break;case je.KHR_MESH_QUANTIZATION:o[u]=new BE;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function dE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Rt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fE{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ue(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],sn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jy(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ky(h),c.distance=u;break;case"spot":c=new $y(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Xn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class pE{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return jn}extendParams(e,t,n){const i=[];e.color=new ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(i)}}class mE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class gE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(r,r)}return Promise.all(i)}}class _E{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class yE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class xE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new ue(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ct)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class vE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class bE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ue().setRGB(r[0],r[1],r[2],sn),Promise.all(i)}}class SE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class ME{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new ue().setRGB(r[0],r[1],r[2],sn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ct)),Promise.all(i)}}class EE{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class TE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?ii:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class wE{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class AE{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class CE{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Mp{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class IE{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const p of u){const _=new De,m=new L,g=new Fn,x=new L(1,1,1),S=new fd(p.geometry,p.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,_.compose(m,g,x));for(const v in l)if(v==="_COLOR_0"){const A=l[v];S.instanceColor=new fn(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);yt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const n0="glTF",qr=12,Ep={JSON:1313821514,BIN:5130562};class RE{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==n0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-qr,r=new DataView(e,qr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ep.JSON){const c=new Uint8Array(e,qr+o,a);this.content=n.decode(c)}else if(l===Ep.BIN){const c=qr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class PE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=nu[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=nu[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=pr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}u(f)},a,c,sn,d)})})}}class LE{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class BE{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class i0 extends Rr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,_=p-c,m=-2*f+3*d,g=f-d,x=1-m,S=g-d+u;for(let v=0;v!==a;v++){const A=o[_+v+a],T=o[_+v+l]*h,E=o[p+v+a],y=o[p+v]*h;r[v]=x*A+S*T+m*E+g*y}return r}}const DE=new Fn;class kE extends i0{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return DE.fromArray(r).normalize().toArray(r),r}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tp={9728:It,9729:Lt,9984:Eg,9985:qa,9986:fo,9987:bi},wp={33071:Kn,33648:il,10497:xr},Ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UE={CUBICSPLINE:void 0,LINEAR:Ro,STEP:Io},Rc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_n})),s.DefaultMaterial}function us(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function OE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zE(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pc(t.attributes):e=s.indices+":"+Pc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Pc(s.targets[n]);return e}function Pc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function iu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function VE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HE=new De;class GE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Xg(this.options.manager):this.textureLoader=new Qy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _d(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return us(r,a,i),Xn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(xo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ic[i.type],a=pr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new ze(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ic[i.type],c=pr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(f&&f!==u){const g=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let S=t.cache.get(x);S||(_=new c(a,g*f,i.count*f/h),S=new fy(_,f/h),t.cache.add(x,S)),m=new hd(S,l,d%f/h,p)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new ze(_,l,p);if(i.sparse!==void 0){const g=Ic.SCALAR,x=pr[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,A=new x(o[1],S,i.sparse.count*g),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new ze(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,y=A.length;E<y;E++){const M=A[E];if(m.setX(M,T[E*l]),l>=2&&m.setY(M,T[E*l+1]),l>=3&&m.setZ(M,T[E*l+2]),l>=4&&m.setW(M,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Tp[d.magFilter]||Lt,h.minFilter=Tp[d.minFilter]||bi,h.wrapS=wp[d.wrapS]||xr,h.wrapT=wp[d.wrapT]||xr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==It&&h.minFilter!==Lt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){const m=new Bt(_);m.needsUpdate=!0,d(m)}),t.load(xo.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Xn(u,o),u.userData.mimeType=o.mimeType||VE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zg,ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new al,ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gd}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=i[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],sn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=jt);const h=r.alphaMode||Rc.OPAQUE;if(h===Rc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Rc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==jn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==jn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==jn){const u=r.emissiveFactor;a.emissive=new ue().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&o!==jn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Xn(u,r),t.associations.set(u,{materials:e}),r.extensions&&us(i,u,r),u})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ap(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=zE(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ap(new Dt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?NE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],m=o[f];let g;const x=c[f];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new _y(_,x):new bt(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?g.geometry=Sp(g.geometry,Pg):m.mode===vn.TRIANGLE_FAN&&(g.geometry=Sp(g.geometry,Zh));else if(m.mode===vn.LINES)g=new Jh(_,x);else if(m.mode===vn.LINE_STRIP)g=new pd(_,x);else if(m.mode===vn.LINE_LOOP)g=new My(_,x);else if(m.mode===vn.POINTS)g=new Ey(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&OE(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Xn(g,r),m.extensions&&us(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&us(i,u[0],r),u[0];const d=new tn;r.extensions&&us(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(Z_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Dl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dd(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],p=i.samplers[f.sampler],_=f.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let S=0,v=d.length;S<v;S++){const A=d[S],T=f[S],E=p[S],y=_[S],M=m[S];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const B=n._createAnimationTracks(A,T,E,y,M);if(B)for(let I=0;I<B.length;I++)g.push(B[I])}const x=new Oy(r,void 0,g);return Xn(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,HE)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,p=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Og:c.length>1?h=new tn:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Xn(h,r),r.extensions&&us(n,h,r),r.matrix!==void 0){const u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new tn;n.name&&(r.name=i.createUniqueName(n.name)),Xn(r,n),n.extensions&&us(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(hE(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof ei||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ni[r.path]===Ni.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ni[r.path]){case Ni.weights:c=Mr;break;case Ni.rotation:c=Er;break;case Ni.translation:case Ni.scale:c=Tr;break;default:switch(n.itemSize){case 1:c=Mr;break;case 2:case 3:default:c=Tr;break}break}const h=i.interpolation!==void 0?UE[i.interpolation]:Ro,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+Ni[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=iu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Er?kE:i0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function WE(s,e,t){const n=e.attributes,i=new Gt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=iu(pr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=iu(pr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ot;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ap(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=nu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return et.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Xn(s,e),WE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?FE(s,e.targets,t):s})}const qE=new Set,Cp=new WeakMap,js=new WeakMap,bd=s=>!!s&&s.isInstancedBufferAttribute===!0,mr=(s,e,t)=>{t<=0||(s.addUpdateRange(e,t),s.needsUpdate=!0)},XE=s=>{for(const e of s.geometrySlots)e.dispose();js.delete(s.sourceInstanceMatrix);for(const e of s.instanceMatrix.slots)js.delete(e);if(s.sourceInstanceColor&&js.delete(s.sourceInstanceColor),s.instanceColor)for(const e of s.instanceColor.slots)js.delete(e);for(const e in s.sourceGeometry.attributes){const t=s.sourceGeometry.attributes[e];bd(t)&&js.delete(t)}for(const e of s.geometryAttributes.values())for(const t of e.slots)js.delete(t)},$E=s=>{s.mesh.geometry=s.sourceGeometry,s.mesh.instanceMatrix=s.sourceInstanceMatrix,s.mesh.instanceColor=s.sourceInstanceColor},YE=s=>{},KE=s=>{const e=Cp.get(s);e&&($E(e),XE(e)),Cp.delete(s),qE.delete(s)},_a=(s,e,t)=>{{mr(s.instanceMatrix,e,t);return}},ZE=(s,e,t,n)=>{{const i=s.geometry.getAttribute(e);bd(i)&&mr(i,t,n);return}},wt=ZE,jE=s=>{{mr(s.instanceMatrix,0,s.instanceMatrix.array.length),s.instanceColor&&mr(s.instanceColor,0,s.instanceColor.array.length);for(const e in s.geometry.attributes){const t=s.geometry.attributes[e];bd(t)&&mr(t,0,t.array.length)}return}},Ip=jE,JE=(s,e)=>{{s.geometry=e;return}},QE=(s,e)=>{{s.instanceMatrix=e,mr(e,0,e.array.length);return}},ja=3e38,eT=1e6;function Rp(s){const e=(s==null?void 0:s.fps)===void 0||Number.isFinite(s.fps)&&s.fps>0;return s!==void 0&&s.columns>0&&s.rows>0&&e}function Pp(s){return{columns:s.columns,rows:s.rows,frameCount:s.columns*s.rows,fps:s.fps??30,loop:s.loop??!0}}function s0(s,e){if(!e||e.loop)return s;const t=e.frameCount/e.fps;return Math.min(s,t)}function tT(s,e,t){if(s===0)return ja;const n=s+(Math.random()-.5)*2*e;return Math.max(.001,s0(n,t))}function nT(s,e,t){if(s===0)return eT;const n=s+e;return s0(n,t)}const Gi="initialPosition",yi="initialVelocity",xi="sizeVar",on="timeVar",Wi="opacityVar",qi="colorStartVar",Xi="colorEndVar",ya="map",Lc="time",Xr="gravity",ds="viewDistance",xa="viewDistanceCameraPosition",fs="alphaTest",$r="orientationMatrix",Js="flipbookColumns",va="flipbookRows",Yr="flipbookFrameCount",ba="flipbookFps",Sa="flipbookLoop",Ma="USE_ALPHATEST",hr="ORIENTATION_BILLBOARD",su="ORIENTATION_BILLBOARD_Y",ru="ORIENTATION_FIXED",ou="ORIENTATION_VELOCITY",Lp="LOCK_TO_EMITTER",Qs="USE_FLIPBOOK",ps=16,iT=2,sT=256,Kr=new L,Bp=new Cn,Dp=new Oe,rT=new De,Bc=Math.PI/180;function oT(s){switch(s){case"billboard":return hr;case"billboardY":return su;case"fixed":return ru;case"velocity":return ou;default:return hr}}function aT(s){return Bp.set(s.x*Bc,s.y*Bc,s.z*Bc,"XYZ"),Dp.setFromMatrix4(rT.makeRotationFromEuler(Bp)),Dp}class lT extends Wt{constructor(e=!1){super({uniforms:{[ya]:{value:null},[Lc]:{value:0},[Xr]:{value:new L},[ds]:{value:0},[xa]:{value:new L},[$r]:{value:new Oe},[Js]:{value:1},[va]:{value:1},[Yr]:{value:1},[ba]:{value:30},[Sa]:{value:1}},defines:e?{[Lp]:"",[hr]:!0}:{[hr]:!0},vertexShader:`
        uniform float ${Lc};
        uniform vec3 ${Xr};
        uniform float ${ds};
        uniform vec3 ${xa};
        uniform mat3 ${$r};

        #ifdef ${Qs}
          uniform float ${Js};
          uniform float ${va};
          uniform float ${Yr};
          uniform float ${ba};
          uniform float ${Sa};
        #endif

        attribute vec3 ${Gi};
        attribute vec3 ${yi};
        attribute vec2 ${xi};
        attribute vec2 ${on};
        attribute vec2 ${Wi};
        attribute vec3 ${qi};
        attribute vec3 ${Xi};

        varying vec2 vUv;
        varying float vLife;
        varying vec2 vOpacityVar;
        varying vec3 vColorStart;
        varying vec3 vColorEnd;

        void main() {
          float age = ${Lc} - ${on}.x;
          vLife = clamp(1.0 - age / ${on}.y, 0.0, 1.0);

          // Pass variations to fragment shader
          vOpacityVar = ${Wi};
          vColorStart = ${qi};
          vColorEnd = ${Xi};

          if (vLife <= 0.0) {
            gl_Position = vec4(9999.0, 9999.0, 9999.0, 1.0);
            return;
          }

          // Calculate flipbook UV
          #ifdef ${Qs}
            float rawFrame = floor(age * ${ba});
            float frameIndex;
            if (${Sa} > 0.5) {
              frameIndex = mod(rawFrame, ${Yr});
            } else {
              frameIndex = min(rawFrame, ${Yr} - 1.0);
            }
            float col = mod(frameIndex, ${Js});
            float row = floor(frameIndex / ${Js});
            vec2 frameSize = vec2(1.0 / ${Js}, 1.0 / ${va});
            vec2 frameOffset = vec2(col, row) * frameSize;
            vUv = frameOffset + uv * frameSize;
          #else
            vUv = uv;
          #endif

          // Physics calculation (same for both modes)
          vec3 physics = ${Gi} + ${yi} * age + 0.5 * ${Xr} * age * age;

          // Calculate world position based on lock mode
          // - LOCK_TO_EMITTER: initialPosition is local, add current emitter world position
          // - Otherwise: initialPosition is already world position
          #ifdef ${Lp}
            vec3 worldPos = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz + physics;
          #else
            vec3 worldPos = physics;
          #endif

          // Per-particle view-distance culling on XZ plane.
          if (${ds} > 0.0) {
            vec2 toCameraXZ = worldPos.xz - ${xa}.xz;
            if (dot(toCameraXZ, toCameraXZ) > ${ds} * ${ds}) {
              gl_Position = vec4(9999.0, 9999.0, 9999.0, 1.0);
              return;
            }
          }

          // Calculate right and up vectors based on orientation mode
          vec3 particleRight;
          vec3 particleUp;

          #ifdef ${hr}
            // Billboard: particles always face camera (use camera's right/up directly)
            particleRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
            particleUp = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          #elif defined(${su})
            // BillboardY: rotate around Y-axis to face camera view direction
            vec3 cameraForward = -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
            vec3 forwardXZ = vec3(cameraForward.x, 0.0, cameraForward.z);
            if (length(forwardXZ) < 1e-4) {
              // Fallback when camera is looking nearly straight up or down
              forwardXZ = vec3(0.0, 0.0, 1.0);
            }
            particleRight = normalize(cross(forwardXZ, vec3(0.0, 1.0, 0.0)));
            particleUp = vec3(0.0, 1.0, 0.0);
          #elif defined(${ru})
            // Fixed: use orientation matrix
            particleRight = ${$r}[0];
            particleUp = ${$r}[1];
          #elif defined(${ou})
            // Velocity-aligned: particle Y-axis aligns to velocity direction,
            // billboards around that axis to face the camera.
            // v(t) = v0 + g * t
            vec3 currentVelocity = ${yi} + ${Xr} * age;
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
          float interpolatedSize = mix(${xi}.y, ${xi}.x, vLife);

          // Use the vertex position from the plane geometry to create quad
          vec3 quadOffset = (position.x * particleRight + position.y * particleUp) * interpolatedSize;
          vec3 finalPos = worldPos + quadOffset;

          gl_Position = projectionMatrix * viewMatrix * vec4(finalPos, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D ${ya};

        #ifdef ${Ma}
          uniform float ${fs};
        #endif

        varying vec2 vUv;
        varying float vLife;
        varying vec2 vOpacityVar;
        varying vec3 vColorStart;
        varying vec3 vColorEnd;

        void main() {
          vec4 texColor = texture2D(${ya}, vUv);

          vec3 color = mix(vColorEnd, vColorStart, vLife);
          float alphaGradient = mix(vOpacityVar.y, vOpacityVar.x, vLife);
          float finalAlpha = texColor.a * alphaGradient;

          #ifdef ${Ma}
            if (finalAlpha < ${fs}) discard;
          #endif

          gl_FragColor = vec4(texColor.rgb * color, finalAlpha);
        }
      `,side:_n})}setGravity(e){return this.uniforms[Xr].value.copy(e),this}setViewDistanceCulling(e,t){return this.uniforms[ds].value=Math.max(0,t),this.uniforms[xa].value.set(e.x,e.y,e.z),this}disableViewDistanceCulling(){return this.uniforms[ds].value=0,this}setAlphaTest(e){return e>0?fs in this.uniforms?this.uniforms[fs].value=e:(this.uniforms[fs]={value:e},this.defines[Ma]="",this.needsUpdate=!0):e===0&&fs in this.uniforms&&(delete this.uniforms[fs],delete this.defines[Ma],this.needsUpdate=!0),this}setOrientation(e){return delete this.defines[hr],delete this.defines[su],delete this.defines[ru],delete this.defines[ou],this.defines[oT(e)]=!0,this.side=e==="fixed"?jt:_n,this.needsUpdate=!0,this}setOrientationFixedRotation(e){return this.uniforms[$r].value.copy(aT(e)),this}setTexture(e){return this.uniforms[ya].value=e,this.visible=!!e,this}setTransparent(e){return this.transparent!==e&&(this.needsUpdate=!0),this.transparent=e,this.depthWrite=!this.transparent,this}updateTime(e){this.uniforms.time.value=e}setFlipbook(e,t,n,i){return e>1||t>1?(Qs in this.defines||(this.defines[Qs]="",this.needsUpdate=!0),this.uniforms[Js].value=e,this.uniforms[va].value=t,this.uniforms[Yr].value=e*t,this.uniforms[ba].value=n,this.uniforms[Sa].value=i?1:0):Qs in this.defines&&(delete this.defines[Qs],this.needsUpdate=!0),this}}const cT={alphaTest:0,colorEnd:new ue(1,1,1),colorEndVariance:new ue(0,0,0),colorStart:new ue(1,1,1),colorStartVariance:new ue(0,0,0),colorIntensityStart:1,colorIntensityEnd:1,colorIntensityStartVariance:0,colorIntensityEndVariance:0,flipbook:void 0,lifetime:1,lifetimeVariance:0,lockToEmitter:!1,maxParticles:0,gravity:new L(0,0,0),opacityEnd:0,opacityEndVariance:0,opacityStart:1,opacityStartVariance:0,orientation:"billboard",orientationFixedRotation:new L(0,0,0),position:new L(0,0,0),positionVariance:new L(0,0,0),rate:10,rateVariance:0,sizeEnd:1,sizeEndVariance:0,sizeStart:1,sizeStartVariance:0,texture:null,transparent:!1,velocity:new L(0,0,0),velocityVariance:new L(0,0,0)};class kp{constructor(e){C(this,"_options");C(this,"_poolIndex");C(this,"_currentTime");C(this,"_emissionAccumulator");C(this,"_isMaxParticlesAutoCalculated",!1);C(this,"_mesh");C(this,"_paused",!1);C(this,"_flipbook",null);C(this,"_pendingEmissions",new Map);C(this,"_pendingEmissionOverrideIds",new WeakMap);C(this,"_nextPendingEmissionOverrideId",1);C(this,"_latestRenderableUntil",0);C(this,"_hasImmortalParticles",!1);C(this,"_renderableStateDirty",!1);C(this,"_particleAttachmentSlots",null);C(this,"_attachmentMatrices",new Map);C(this,"_activeAttachmentSlotsScratch",[]);C(this,"_particleIndicesByAttachmentSlot",new Map);C(this,"_dirtyAttachmentSlots",new Set);C(this,"_cleanupAttachmentSlots",new Set);C(this,"_lastSyncedAttachmentMinIndex",Number.POSITIVE_INFINITY);C(this,"_lastSyncedAttachmentMaxIndex",-1);this._options={...cT};for(const i in e)e[i]!==void 0&&(this._options[i]=e[i]);this._options.maxParticles||(this._options.maxParticles=this._calculateMaxParticles(),this._isMaxParticlesAutoCalculated=!0);for(const i in this._options){const r=this._options[i];(r instanceof L||r instanceof ue)&&(this._options[i]=r.clone())}Rp(this._options.flipbook)&&(this._flipbook=Pp(this._options.flipbook));const t=this._createGeometry(this._options.maxParticles),n=new lT(this._options.lockToEmitter).setTexture(this._options.texture).setGravity(this._options.gravity).setTransparent(this._options.transparent).setAlphaTest(this._options.alphaTest).setOrientation(this._options.orientation).setOrientationFixedRotation(this._options.orientationFixedRotation);if(this._flipbook&&n.setFlipbook(this._flipbook.columns,this._flipbook.rows,this._flipbook.fps,this._flipbook.loop),this._mesh=new fd(t,n,this._options.maxParticles),this._mesh.position.copy(this._options.position),YE(this._mesh),this._options.lockToEmitter){this._mesh.instanceMatrix.setUsage(Sn),this._particleAttachmentSlots=new Uint32Array(this._options.maxParticles);const i=new De;for(let r=0;r<this._options.maxParticles;r++)this._mesh.setMatrixAt(r,i);Ip(this._mesh)}this._updateBoundingBox(),this._poolIndex=0,this._currentTime=0,this._emissionAccumulator=0}get mesh(){return this._mesh}get paused(){return this._paused}get flipbook(){return this._flipbook}hasRenderableParticles(){return this._pendingEmissions.size>0?!0:(this._renderableStateDirty&&this._recomputeRenderableState(),this._hasImmortalParticles||this._currentTime<this._latestRenderableUntil)}burst(e,t=0,n){if(e<=0)return;if(!this.mesh.material.visible){this._enqueuePendingEmission(e,t,n);return}this.mesh.matrixWorldAutoUpdate&&this.mesh.updateMatrixWorld(),this._flushPendingEmissions();const r=this._attachmentMatrices.get(t)??this.mesh.matrixWorld;this._emit(e,r,t,n)}pause(){this._paused=!0,this._emissionAccumulator=0}restart(){this._paused=!1}setViewDistanceCulling(e,t){this.mesh.material.setViewDistanceCulling(e,t)}disableViewDistanceCulling(){this.mesh.material.disableViewDistanceCulling()}_calculateMaxParticles(){const e=this._options.lifetime+this._options.lifetimeVariance,t=Math.ceil(this._options.rate*e),i=Math.ceil(t*1.2);return Math.max(10,i)}_calculateBoundingBox(){const e=nT(this._options.lifetime,this._options.lifetimeVariance,this._flipbook),t=this._options.sizeStart+this._options.sizeStartVariance,n=this._options.sizeEnd+this._options.sizeEndVariance,i=Math.max(t,n),r=this._options.positionVariance,o=Math.abs(this._options.velocity.x)+this._options.velocityVariance.x,a=Math.abs(this._options.velocity.y)+this._options.velocityVariance.y,l=Math.abs(this._options.velocity.z)+this._options.velocityVariance.z,c=new L(.5*Math.abs(this._options.gravity.x)*e*e,.5*Math.abs(this._options.gravity.y)*e*e,.5*Math.abs(this._options.gravity.z)*e*e),h=new L(o*e,a*e,l*e),u=new L(r.x+h.x+c.x+i,r.y+h.y+c.y+i,r.z+h.z+c.z+i),d=new L(-u.x,-u.y,-u.z),f=new L(u.x,u.y,u.z);return(this._options.velocity.x>0?f:d).x+=this._options.velocity.x*e,(this._options.velocity.y>0?f:d).y+=this._options.velocity.y*e,(this._options.velocity.z>0?f:d).z+=this._options.velocity.z*e,new Gt(d,f)}_updateBoundingBox(){const e=this._calculateBoundingBox();this.mesh.geometry.boundingBox=e;const t=new L;e.getCenter(t);const n=e.getSize(new L).length()*.5;this.mesh.geometry.boundingSphere=new Ot(t,n)}_emit(e,t,n=0,i){const r=this.mesh.geometry,o=r.getAttribute(Gi),a=r.getAttribute(yi),l=r.getAttribute(xi),c=r.getAttribute(on),h=r.getAttribute(Wi),u=r.getAttribute(qi),d=r.getAttribute(Xi),f=this._poolIndex;let p=0,_=!1;const m=(i==null?void 0:i.colorEnd)??this._options.colorEnd,g=(i==null?void 0:i.colorEndVariance)??this._options.colorEndVariance,x=(i==null?void 0:i.colorStart)??this._options.colorStart,S=(i==null?void 0:i.colorStartVariance)??this._options.colorStartVariance,v=(i==null?void 0:i.colorIntensityEnd)??this._options.colorIntensityEnd,A=(i==null?void 0:i.colorIntensityEndVariance)??this._options.colorIntensityEndVariance,T=(i==null?void 0:i.colorIntensityStart)??this._options.colorIntensityStart,E=(i==null?void 0:i.colorIntensityStartVariance)??this._options.colorIntensityStartVariance,y=(i==null?void 0:i.lifetime)??this._options.lifetime,M=(i==null?void 0:i.lifetimeVariance)??this._options.lifetimeVariance,B=(i==null?void 0:i.opacityEnd)??this._options.opacityEnd,I=(i==null?void 0:i.opacityEndVariance)??this._options.opacityEndVariance,O=(i==null?void 0:i.opacityStart)??this._options.opacityStart,z=(i==null?void 0:i.opacityStartVariance)??this._options.opacityStartVariance,P=(i==null?void 0:i.positionVariance)??this._options.positionVariance,k=(i==null?void 0:i.sizeEnd)??this._options.sizeEnd,V=(i==null?void 0:i.sizeEndVariance)??this._options.sizeEndVariance,U=(i==null?void 0:i.sizeStart)??this._options.sizeStart,X=(i==null?void 0:i.sizeStartVariance)??this._options.sizeStartVariance,j=(i==null?void 0:i.velocity)??this._options.velocity,ie=(i==null?void 0:i.velocityVariance)??this._options.velocityVariance;let ae=this._latestRenderableUntil,de=this._hasImmortalParticles;for(let ve=0;ve<e;ve++){const Ve=c.getX(this._poolIndex),Ze=c.getY(this._poolIndex);if(Ze>0){const N=Ve+Ze;(Ze>=ja||N>=this._latestRenderableUntil)&&(this._renderableStateDirty=!0)}const $=(Math.random()-.5)*2*P.x,Q=(Math.random()-.5)*2*P.y,se=(Math.random()-.5)*2*P.z;Kr.set($,Q,se),this._options.lockToEmitter||Kr.applyMatrix4(t);const Le=j.x+(Math.random()-.5)*2*ie.x,Ce=j.y+(Math.random()-.5)*2*ie.y,Be=j.z+(Math.random()-.5)*2*ie.z,xt=tT(y,M,this._flipbook);xt>=ja?de=!0:ae=Math.max(ae,this._currentTime+xt);const Ne=Math.max(0,U+(Math.random()-.5)*2*X),it=Math.max(0,k+(Math.random()-.5)*2*V),st=Math.max(0,Math.min(1,O+(Math.random()-.5)*2*z)),qe=Math.max(0,Math.min(1,B+(Math.random()-.5)*2*I)),gt=Math.max(0,T+(Math.random()-.5)*2*E),D=Math.max(0,v+(Math.random()-.5)*2*A),Et=Math.max(0,x.r+(Math.random()-.5)*2*S.r)*gt,tt=Math.max(0,x.g+(Math.random()-.5)*2*S.g)*gt,ht=Math.max(0,x.b+(Math.random()-.5)*2*S.b)*gt,be=Math.max(0,m.r+(Math.random()-.5)*2*g.r)*D,R=Math.max(0,m.g+(Math.random()-.5)*2*g.g)*D,b=Math.max(0,m.b+(Math.random()-.5)*2*g.b)*D;if(o.setXYZ(this._poolIndex,Kr.x,Kr.y,Kr.z),a.setXYZ(this._poolIndex,Le,Ce,Be),l.setXY(this._poolIndex,Ne,it),c.setXY(this._poolIndex,this._currentTime,xt),h.setXY(this._poolIndex,st,qe),u.setXYZ(this._poolIndex,Et,tt,ht),d.setXYZ(this._poolIndex,be,R,b),this._particleAttachmentSlots&&this._options.lockToEmitter){const N=this._particleAttachmentSlots[this._poolIndex],Z=this._particleIndicesByAttachmentSlot.get(N);Z&&(Z.delete(this._poolIndex),Z.size===0&&(this._particleIndicesByAttachmentSlot.delete(N),this._cleanupAttachmentSlots.delete(N),N!==n&&(this._dirtyAttachmentSlots.delete(N),this._attachmentMatrices.delete(N)))),this._particleAttachmentSlots[this._poolIndex]=n,this._particleIndicesByAttachmentSlot.has(n)||this._particleIndicesByAttachmentSlot.set(n,new Set),this._particleIndicesByAttachmentSlot.get(n).add(this._poolIndex),this._cleanupAttachmentSlots.add(n);const ee=this._attachmentMatrices.get(n)??t;this._mesh.setMatrixAt(this._poolIndex,ee),_=!0}this._poolIndex=(this._poolIndex+1)%this._options.maxParticles,p++}if(this._latestRenderableUntil=ae,this._hasImmortalParticles=de,p>0)if(f+p<=this._options.maxParticles)wt(this._mesh,Gi,f*o.itemSize,p*o.itemSize),wt(this._mesh,yi,f*a.itemSize,p*a.itemSize),wt(this._mesh,xi,f*l.itemSize,p*l.itemSize),wt(this._mesh,on,f*c.itemSize,p*c.itemSize),wt(this._mesh,Wi,f*h.itemSize,p*h.itemSize),wt(this._mesh,qi,f*u.itemSize,p*u.itemSize),wt(this._mesh,Xi,f*d.itemSize,p*d.itemSize);else{const ve=this._options.maxParticles-f,Ve=p-ve;wt(this._mesh,Gi,f*o.itemSize,ve*o.itemSize),wt(this._mesh,Gi,0,Ve*o.itemSize),wt(this._mesh,yi,f*a.itemSize,ve*a.itemSize),wt(this._mesh,yi,0,Ve*a.itemSize),wt(this._mesh,xi,f*l.itemSize,ve*l.itemSize),wt(this._mesh,xi,0,Ve*l.itemSize),wt(this._mesh,on,f*c.itemSize,ve*c.itemSize),wt(this._mesh,on,0,Ve*c.itemSize),wt(this._mesh,Wi,f*h.itemSize,ve*h.itemSize),wt(this._mesh,Wi,0,Ve*h.itemSize),wt(this._mesh,qi,f*u.itemSize,ve*u.itemSize),wt(this._mesh,qi,0,Ve*u.itemSize),wt(this._mesh,Xi,f*d.itemSize,ve*d.itemSize),wt(this._mesh,Xi,0,Ve*d.itemSize)}if(_)if(f+p<=this._options.maxParticles)_a(this._mesh,f*ps,p*ps);else{const ve=this._options.maxParticles-f,Ve=p-ve;_a(this._mesh,f*ps,ve*ps),_a(this._mesh,0,Ve*ps)}}_getCurrentRate(){if(this._options.rateVariance===0)return this._options.rate;const e=(Math.random()-.5)*2*this._options.rateVariance;return Math.max(0,this._options.rate+e)}update(e){const t=Math.min(e,.1),n=this.mesh.material;if(this._currentTime+=e,n.updateTime(this._currentTime),!n.visible||(this.mesh.matrixWorldAutoUpdate&&this.mesh.updateMatrixWorld(),this._flushPendingEmissions(),this._paused))return;const i=this._getCurrentRate();this._emissionAccumulator+=i*t;const r=Math.floor(this._emissionAccumulator);r>0&&(this.mesh.matrixWorldAutoUpdate&&this.mesh.updateMatrixWorld(),this._emit(r,this.mesh.matrixWorld),this._emissionAccumulator-=r)}updateParameters(e){const t=this.mesh.material;let n=!1,i=!1;e.alphaTest!==void 0&&(this._options.alphaTest=e.alphaTest,t.setAlphaTest(this._options.alphaTest)),e.colorEnd!==void 0&&this._options.colorEnd.copy(e.colorEnd),e.colorEndVariance!==void 0&&this._options.colorEndVariance.copy(e.colorEndVariance),e.colorStart!==void 0&&this._options.colorStart.copy(e.colorStart),e.colorStartVariance!==void 0&&this._options.colorStartVariance.copy(e.colorStartVariance),e.colorIntensityStart!==void 0&&(this._options.colorIntensityStart=e.colorIntensityStart),e.colorIntensityEnd!==void 0&&(this._options.colorIntensityEnd=e.colorIntensityEnd),e.colorIntensityStartVariance!==void 0&&(this._options.colorIntensityStartVariance=e.colorIntensityStartVariance),e.colorIntensityEndVariance!==void 0&&(this._options.colorIntensityEndVariance=e.colorIntensityEndVariance),e.flipbook!==void 0&&(this._options.flipbook=e.flipbook,Rp(e.flipbook)?(this._flipbook=Pp(e.flipbook),t.setFlipbook(this._flipbook.columns,this._flipbook.rows,this._flipbook.fps,this._flipbook.loop)):(this._flipbook=null,t.setFlipbook(1,1,30,!0)),n=!0),e.gravity!==void 0&&(this._options.gravity.copy(e.gravity),t.setGravity(this._options.gravity),n=!0),e.lifetime!==void 0&&this._options.lifetime!==e.lifetime&&(this._options.lifetime=e.lifetime,n=!0,i=!0),e.lifetimeVariance!==void 0&&this._options.lifetimeVariance!==e.lifetimeVariance&&(this._options.lifetimeVariance=e.lifetimeVariance,n=!0,i=!0),e.opacityEnd!==void 0&&(this._options.opacityEnd=e.opacityEnd),e.opacityEndVariance!==void 0&&(this._options.opacityEndVariance=e.opacityEndVariance),e.opacityStart!==void 0&&(this._options.opacityStart=e.opacityStart),e.opacityStartVariance!==void 0&&(this._options.opacityStartVariance=e.opacityStartVariance),e.position!==void 0&&(this._options.position.copy(e.position),this.mesh.position.copy(this._options.position)),e.positionVariance!==void 0&&!this._options.positionVariance.equals(e.positionVariance)&&(this._options.positionVariance.copy(e.positionVariance),n=!0),e.rate!==void 0&&(this._options.rate!==e.rate&&(i=!0),this._options.rate=e.rate),e.rateVariance!==void 0&&(this._options.rateVariance=e.rateVariance),e.sizeEnd!==void 0&&this._options.sizeEnd!==e.sizeEnd&&(this._options.sizeEnd=e.sizeEnd,n=!0),e.sizeEndVariance!==void 0&&this._options.sizeEndVariance!==e.sizeEndVariance&&(this._options.sizeEndVariance=e.sizeEndVariance,n=!0),e.sizeStart!==void 0&&this._options.sizeStart!==e.sizeStart&&(this._options.sizeStart=e.sizeStart,n=!0),e.sizeStartVariance!==void 0&&this._options.sizeStartVariance!==e.sizeStartVariance&&(this._options.sizeStartVariance=e.sizeStartVariance,n=!0),e.orientation!==void 0&&(this._options.orientation=e.orientation,t.setOrientation(this._options.orientation)),e.orientationFixedRotation!==void 0&&(this._options.orientationFixedRotation=e.orientationFixedRotation,t.setOrientationFixedRotation(this._options.orientationFixedRotation)),e.texture!==void 0&&(this._options.texture=e.texture,t.setTexture(this._options.texture)),e.transparent!==void 0&&(this._options.transparent=e.transparent,t.setTransparent(this._options.transparent)),e.velocity!==void 0&&!this._options.velocity.equals(e.velocity)&&(this._options.velocity.copy(e.velocity),n=!0),e.velocityVariance!==void 0&&!this._options.velocityVariance.equals(e.velocityVariance)&&(this._options.velocityVariance.copy(e.velocityVariance),n=!0);const r=this._options.maxParticles;e.maxParticles!==void 0&&e.maxParticles>0?(this._options.maxParticles=e.maxParticles,this._isMaxParticlesAutoCalculated=!1):(e.maxParticles===0||this._isMaxParticlesAutoCalculated&&i)&&(this._options.maxParticles=this._calculateMaxParticles(),this._isMaxParticlesAutoCalculated=!0),this._options.maxParticles!==r&&this._resize(),n&&this._updateBoundingBox()}_resize(){const e=this.mesh.geometry,t=this.mesh.instanceMatrix,n=this._createGeometry(this._options.maxParticles),i=e.getAttribute(on).count,r=Math.min(i,this._options.maxParticles);r>0&&this._copyParticleData(e,n,r),n.boundingBox=e.boundingBox,n.boundingSphere=e.boundingSphere,JE(this.mesh,n),this.mesh.count=this._options.maxParticles;const o=new fn(new Float32Array(this._options.maxParticles*16),16);o.setUsage(t.usage);const a=t.array,l=o.array,c=Math.min(a.length,l.length);l.set(a.subarray(0,c),0);const h=t.count;if(this._options.maxParticles>h){const u=new De().elements;for(let d=h;d<this._options.maxParticles;d++)l.set(u,d*16)}if(this.mesh.dispose(),QE(this.mesh,o),Ip(this.mesh),e.dispose(),this._poolIndex>=this._options.maxParticles&&(this._poolIndex=0),this._options.lockToEmitter){const u=this._particleAttachmentSlots;if(this._particleAttachmentSlots=new Uint32Array(this._options.maxParticles),u){const d=Math.min(u.length,this._particleAttachmentSlots.length);this._particleAttachmentSlots.set(u.subarray(0,d),0)}for(const[d,f]of this._particleIndicesByAttachmentSlot.entries()){for(const p of f)p>=this._options.maxParticles&&f.delete(p);f.size===0&&(this._particleIndicesByAttachmentSlot.delete(d),this._dirtyAttachmentSlots.delete(d),this._cleanupAttachmentSlots.delete(d),this._attachmentMatrices.delete(d))}}}_createGeometry(e){return new Ir(1,1).setAttribute(Gi,new fn(new Float32Array(e*3),3).setUsage(Sn)).setAttribute(yi,new fn(new Float32Array(e*3),3).setUsage(Sn)).setAttribute(xi,new fn(new Float32Array(e*2),2).setUsage(Sn)).setAttribute(on,new fn(new Float32Array(e*2),2).setUsage(Sn)).setAttribute(Wi,new fn(new Float32Array(e*2),2).setUsage(Sn)).setAttribute(qi,new fn(new Float32Array(e*3),3).setUsage(Sn)).setAttribute(Xi,new fn(new Float32Array(e*3),3).setUsage(Sn)).deleteAttribute("normal")}_copyParticleData(e,t,n){this._copyAttribute(e,t,Gi,n),this._copyAttribute(e,t,yi,n),this._copyAttribute(e,t,xi,n),this._copyAttribute(e,t,on,n),this._copyAttribute(e,t,Wi,n),this._copyAttribute(e,t,qi,n),this._copyAttribute(e,t,Xi,n)}_copyAttribute(e,t,n,i){const r=e.getAttribute(n),o=t.getAttribute(n),a=i*r.itemSize,l=r.array,c=o.array;for(let h=0;h<a;h++)c[h]=l[h]}killAttachmentSlot(e){if(this._clearPendingEmissionsForAttachmentSlot(e),!this._particleAttachmentSlots||!this._options.lockToEmitter)return;const t=this._particleIndicesByAttachmentSlot.get(e);if(!t||t.size===0)return;const i=this.mesh.geometry.getAttribute(on);this._renderableStateDirty=!0;for(const r of t)i.setY(r,0);wt(this._mesh,on,0,i.array.length),t.clear(),this._dirtyAttachmentSlots.delete(e),this._cleanupAttachmentSlots.delete(e),this._attachmentMatrices.delete(e),this._particleIndicesByAttachmentSlot.delete(e)}_clearPendingEmissionsForAttachmentSlot(e){if(this._pendingEmissions.size!==0)for(const[t,n]of this._pendingEmissions.entries())n.attachmentSlot===e&&this._pendingEmissions.delete(t)}_recomputeRenderableState(){const e=this.mesh.geometry.getAttribute(on);if(!e){this._latestRenderableUntil=0,this._hasImmortalParticles=!1,this._renderableStateDirty=!1;return}let t=0,n=!1;for(let i=0;i<e.count;i++){const r=e.getX(i),o=e.getY(i);if(!(o<=0)){if(o>=ja){n=!0;continue}t=Math.max(t,r+o)}}this._latestRenderableUntil=t,this._hasImmortalParticles=n,this._renderableStateDirty=!1}setAttachmentMatrix(e,t){const n=this._particleIndicesByAttachmentSlot.get(e);if(this._options.lockToEmitter&&e===0&&(!n||n.size===0)){this._dirtyAttachmentSlots.delete(e),this._cleanupAttachmentSlots.delete(e),this._attachmentMatrices.delete(e);return}if(!this._attachmentMatrices.has(e)){this._attachmentMatrices.set(e,new De().copy(t)),this._dirtyAttachmentSlots.add(e);return}const i=this._attachmentMatrices.get(e),r=i.elements,o=t.elements;let a=!1;for(let l=0;l<16;l++)if(r[l]!==o[l]){a=!0;break}a&&(i.copy(t),this._dirtyAttachmentSlots.add(e))}getActiveAttachmentSlots(){const e=this._activeAttachmentSlotsScratch;e.length=0;for(const t of this._attachmentMatrices.keys())e.push(t);return e}syncLockedParticleInstanceMatrices(){if(!this._particleAttachmentSlots||!this._options.lockToEmitter||this._dirtyAttachmentSlots.size===0&&this._cleanupAttachmentSlots.size===0)return;const t=this.mesh.geometry.getAttribute(on);let n=!1,i=Number.POSITIVE_INFINITY,r=-1;for(const l of this._dirtyAttachmentSlots)this._syncAttachmentSlot(l,t,!0)&&(n=!0,i=Math.min(i,this._lastSyncedAttachmentMinIndex),r=Math.max(r,this._lastSyncedAttachmentMaxIndex));let o=0;const a=this._cleanupAttachmentSlots.values();for(;o<iT;){const l=a.next();if(l.done)break;const c=l.value;this._dirtyAttachmentSlots.has(c)||(this._cleanupAttachmentSlots.delete(c),this._syncAttachmentSlot(c,t,!1),this._particleIndicesByAttachmentSlot.has(c)&&this._cleanupAttachmentSlots.add(c),o++)}this._dirtyAttachmentSlots.clear(),n&&_a(this._mesh,i*ps,(r-i+1)*ps)}_syncAttachmentSlot(e,t,n){this._lastSyncedAttachmentMinIndex=Number.POSITIVE_INFINITY,this._lastSyncedAttachmentMaxIndex=-1;const i=this._particleIndicesByAttachmentSlot.get(e);if(!i||i.size===0)return this._particleIndicesByAttachmentSlot.delete(e),this._dirtyAttachmentSlots.delete(e),this._cleanupAttachmentSlots.delete(e),this._hasPendingEmissionForSlot(e)||this._attachmentMatrices.delete(e),!1;const r=n?this._attachmentMatrices.get(e):void 0;for(const o of i){const a=t.getX(o),l=t.getY(o);if(this._currentTime-a>l){i.delete(o);continue}r&&(this._mesh.setMatrixAt(o,r),this._lastSyncedAttachmentMinIndex=Math.min(this._lastSyncedAttachmentMinIndex,o),this._lastSyncedAttachmentMaxIndex=Math.max(this._lastSyncedAttachmentMaxIndex,o))}return i.size===0&&(this._particleIndicesByAttachmentSlot.delete(e),this._dirtyAttachmentSlots.delete(e),this._cleanupAttachmentSlots.delete(e),this._hasPendingEmissionForSlot(e)||this._attachmentMatrices.delete(e)),this._lastSyncedAttachmentMinIndex<=this._lastSyncedAttachmentMaxIndex}_hasPendingEmissionForSlot(e){for(const t of this._pendingEmissions.values())if(t.attachmentSlot===e)return!0;return!1}_createPendingEmissionKey(e,t){if(!t)return`${e}:0`;let n=this._pendingEmissionOverrideIds.get(t);return n||(n=this._nextPendingEmissionOverrideId++,this._pendingEmissionOverrideIds.set(t,n)),`${e}:${n}`}_enqueuePendingEmission(e,t,n){const i=Math.min(e,this._options.maxParticles);if(i<=0)return;const r=this._createPendingEmissionKey(t,n),o=this._pendingEmissions.get(r);if(o){o.count=Math.min(this._options.maxParticles,o.count+i);return}this._pendingEmissions.size>=sT||this._pendingEmissions.set(r,{count:i,attachmentSlot:t,emissionOverrides:n})}_flushPendingEmissions(){if(this._pendingEmissions.size!==0){for(const e of this._pendingEmissions.values()){const t=Math.min(e.count,this._options.maxParticles);if(t<=0)continue;const n=this._attachmentMatrices.get(e.attachmentSlot)??this.mesh.matrixWorld;this._emit(t,n,e.attachmentSlot,e.emissionOverrides)}this._pendingEmissions.clear()}}dispose(){KE(this.mesh),this.mesh.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this._dirtyAttachmentSlots.clear(),this._cleanupAttachmentSlots.clear(),this._attachmentMatrices.clear(),this._particleIndicesByAttachmentSlot.clear(),this._pendingEmissions.clear()}}const hl=[{id:1,name:"andesite",textureUri:"blocks/andesite.png",isMultiTexture:!1},{id:2,name:"birch-leaves",textureUri:"blocks/birch-leaves.png",isMultiTexture:!1},{id:3,name:"bricks",textureUri:"blocks/bricks.png",isMultiTexture:!1},{id:4,name:"coal-ore",textureUri:"blocks/coal-ore.png",isMultiTexture:!1},{id:5,name:"cobblestone",textureUri:"blocks/cobblestone.png",isMultiTexture:!1},{id:6,name:"grass-block-pine",textureUri:"blocks/grass-block-pine",isMultiTexture:!0},{id:7,name:"grass-block",textureUri:"blocks/grass-block",isMultiTexture:!0},{id:8,name:"grass-flower-block-pine",textureUri:"blocks/grass-flower-block-pine",isMultiTexture:!0},{id:9,name:"grass-flower-block",textureUri:"blocks/grass-flower-block",isMultiTexture:!0},{id:10,name:"oak-leaves",textureUri:"blocks/oak-leaves.png",isMultiTexture:!1},{id:11,name:"oak-log",textureUri:"blocks/oak-log",isMultiTexture:!0},{id:12,name:"sand",textureUri:"blocks/sand.png",isMultiTexture:!1},{id:13,name:"spruce-leaves",textureUri:"blocks/spruce-leaves.png",isMultiTexture:!1},{id:14,name:"spruce-log",textureUri:"blocks/spruce-log",isMultiTexture:!0},{id:15,name:"stone",textureUri:"blocks/stone.png",isMultiTexture:!1},{id:16,name:"water",textureUri:"blocks/water.png",isMultiTexture:!1,isLiquid:!0},{id:207,name:"tnt",textureUri:"blocks/TNT",isMultiTexture:!0,durability:1},{id:208,name:"water-source",textureUri:"blocks/water.png",isMultiTexture:!1,isLiquid:!0}];function Dr({x:s,y:e,z:t}){return`${s},${e},${t}`}function Nl(s){const e=s.indexOf(","),t=s.indexOf(",",e+1);return{x:Number(s.slice(0,e)),y:Number(s.slice(e+1,t)),z:Number(s.slice(t+1))}}function wn(s){return typeof s=="number"?s:s.i}function au(s){return typeof s=="number"?0:s.r??0}function Sd(s,e){const t=s.map(Up),n=new Set(t.map(o=>o.id)),i=new Set(t.map(wr));let r=Math.max(0,...n)+1;for(const o of e){const a=wr(o);if(i.has(a))continue;const l=Up(o);if(n.has(l.id)){for(;n.has(r);)r+=1;l.id=r}n.add(l.id),i.add(a),t.push(l)}return t}function wr(s){return[s.name,s.textureUri,s.isLiquid?"liquid":"solid",s.isMultiTexture?"multi":"single"].join("\0")}function Up(s){return{...s,...s.trimeshIndices?{trimeshIndices:Array.from(s.trimeshIndices)}:{},...s.trimeshVertices?{trimeshVertices:Array.from(s.trimeshVertices)}:{}}}const hT="/voxcinder/world-editor/blocks/.atlas/atlas.json",Ea="blocks/",Np=new Set(["+x.png","-x.png","+y.png","-y.png","+z.png","-z.png"]);async function uT(){try{const s=await fetch(hT,{cache:"no-store"});if(!s.ok)throw new Error(`Failed to load block atlas manifest: ${s.status} ${s.statusText}`);const e=await s.json();return dT(Object.keys(e.textures??{}))}catch(s){return console.warn("WorldEditor: Falling back to default block types.",s),hl}}function dT(s){const e=new Set,t=new Map;for(const r of s){if(!r.startsWith(Ea)||!r.endsWith(".png"))continue;const a=r.slice(Ea.length).split("/");if(a.length===1){e.add(a[0].slice(0,-4));continue}if(a.length===2&&Np.has(a[1])){const l=a[0],c=t.get(l)??new Set;c.add(a[1]),t.set(l,c)}}const n=[];for(const[r,o]of t)[...Np].every(a=>o.has(a))&&n.push({id:0,name:r,textureUri:`${Ea}${r}`,isLiquid:zp(r),isMultiTexture:!0});for(const r of e)n.push({id:0,name:r,textureUri:`${Ea}${r}.png`,isLiquid:zp(r),isMultiTexture:!1});n.sort((r,o)=>r.name.localeCompare(o.name));const i=n.map((r,o)=>({...r,id:o+1}));return Sd(hl,i)}function fT(s,e){const{blockTypes:t,blockTypeIdMap:n}=r0(s.blockTypes??[],e);return{...s,blockTypes:t,blocks:o0(s.blocks??{},n)}}function Fp(s,e){const{blockTypes:t,blockTypeIdMap:n}=r0(s.blockTypes??[],e);return{...s,blockTypes:t,blocks:o0(s.blocks??{},n)}}function r0(s,e){const t=new Map(e.map(a=>[wr(a),a])),n=new Map(e.map(a=>[Op(a),a])),i=new Map,r=new Map,o=[];for(const a of s){const l=t.get(wr(a))??n.get(Op(a));if(l){i.set(a.id,l.id),r.set(l.id,pT(a,l));continue}i.set(a.id,a.id),o.push(a)}return{blockTypes:[...e.map(a=>r.get(a.id)).filter(a=>!!a),...o],blockTypeIdMap:i}}function pT(s,e){return{...e,...s,id:e.id,name:e.name,textureUri:e.textureUri,isLiquid:e.isLiquid,isMultiTexture:e.isMultiTexture}}function o0(s,e){const t={};for(const[n,i]of Object.entries(s)){const r=wn(i),o=e.get(r)??r;t[n]=typeof i=="number"?o:{...i,i:o}}return t}function Op(s){return[mT(s.textureUri),s.isLiquid?"liquid":"solid",gT(s)?"multi":"single"].join("\0")}function mT(s){return(s.split(/[?#]/,1)[0]??s).replace(/\\/g,"/").replace(/^\/+/,"").replace(/\/+$/,"").replace(/\/(?:\+x|-x|\+y|-y|\+z|-z)\.png$/i,"")}function gT(s){return!!s.isMultiTexture||/\/(?:\+x|-x|\+y|-y|\+z|-z)\.png(?:[?#].*)?$/i.test(s.textureUri)}function zp(s){return s.toLowerCase().includes("water")}const Vp=16,Hp=.3;Array.from({length:Vp+1},(s,e)=>e===0?0:Hp+(1-Hp)*(e-1)/(Vp-1));const _T=-.1,Gp=.05,yT=1 .toFixed(1),Zr="rawAmbientLightColor",Ta="ambientLightIntensity",ul="uChunkVisibleBits",dl="uChunkVisibilityMode",ms="time",jr="textureAtlas",Jr="ambientLightColor",lu="hytopiaFogColor",cu="hytopiaFogEnabled",hu="hytopiaFogFar",uu="hytopiaFogNear",Dc="foamLevel",kc="foamLevelDiag",Ci="chunkIndex",xT="HAS_LIGHT_LEVEL",a0=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`,Dn=0,Fi=1;function vT(s){return Math.max(Math.ceil(s/32),1)}function kn(s){return Math.max(Math.ceil(vT(s)/4),1)}function l0(s){return{[ul]:{value:new Uint32Array(kn(s)*4)},[dl]:{value:Dn}}}function c0(s){return{[lu]:{get value(){return s.renderer.fogColor}},[cu]:{get value(){return s.renderer.fogEnabled}},[hu]:{get value(){return s.renderer.fogFar}},[uu]:{get value(){return s.renderer.fogNear}}}}function h0(){return`
    uniform vec3 ${lu};
    uniform bool ${cu};
    uniform float ${hu};
    uniform float ${uu};

    vec3 applyHytopiaFog(vec3 color, vec3 worldPos) {
      if (!${cu}) {
        return color;
      }

      float fogFactor = smoothstep(${uu}, ${hu}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${lu}, fogFactor);
    }
  `}function u0(s){return`
    uniform uint ${dl};
    uniform uvec4 ${ul}[${s}];
    attribute float ${Ci};

    bool isChunkVisible(uint chunkIndexValue) {
      if (${dl} == uint(${Dn})) {
        return true;
      }

      uint wordIndex = chunkIndexValue >> 5u;
      uvec4 packedWords = ${ul}[int(wordIndex >> 2u)];
      uint packedWord = packedWords[int(wordIndex & 3u)];
      uint bitIndex = chunkIndexValue & 31u;
      return ((packedWord >> bitIndex) & 1u) != 0u;
    }
  `}let d0=class extends Wt{constructor(){super(...arguments);C(this,"_boundChunkVisibilityBatchKey","");C(this,"_boundChunkVisibilityMode",-1);C(this,"_boundChunkVisibilityRevision",-1);C(this,"_boundChunkVisibilityBits",null)}bindChunkVisibility(t,n,i,r){return this._boundChunkVisibilityBatchKey===t&&this._boundChunkVisibilityBits===n&&this._boundChunkVisibilityMode===i&&this._boundChunkVisibilityRevision===r?!1:(this.uniforms[ul].value=n,this.uniforms[dl].value=i,this._boundChunkVisibilityBatchKey=t,this._boundChunkVisibilityBits=n,this._boundChunkVisibilityMode=i,this._boundChunkVisibilityRevision=r,!0)}resetBoundChunkVisibilityState(){this._boundChunkVisibilityBatchKey="",this._boundChunkVisibilityBits=null,this._boundChunkVisibilityMode=-1,this._boundChunkVisibilityRevision=-1}};class mo extends d0{constructor(t,n,i,r){const o=ni.clone(mt.basic.uniforms),a=kn(r);Object.assign(o,l0(r),{[Zr]:{value:t.renderer.ambientLight.color},[Ta]:{get value(){return t.renderer.ambientLight.intensity}}},c0(t));const l=u0(a),c=mt.basic.vertexShader.replace("void main() {",`
        ${l}
        ${i?"attribute float lightLevel; varying float vLightLevel;":""}
        varying vec3 vWorldPos;

        void main() {
          uint chunkIndexValue = uint(${Ci} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          ${i?"vLightLevel = lightLevel;":""}
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),h=i?`
          vec3 ambientLight = ${Zr} * ${Ta};
          vec3 blockLight = ${Zr} * vLightLevel * float(${yT});
          outgoingLight *= max(ambientLight, blockLight);
        `:`outgoingLight *= ${Zr} * ${Ta};`,u=mt.basic.fragmentShader.replace("void main() {",`
          ${a0}
          uniform vec3 ${Zr};
          uniform float ${Ta};
          ${i?"varying float vLightLevel;":""}
          varying vec3 vWorldPos;
          ${h0()}

          void main() {
        `).replace("#include <opaque_fragment>",`
          ${h}
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:o,vertexShader:c,fragmentShader:u,side:_n,transparent:n,alphaTest:Gp,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0,glslVersion:ji});C(this,"_alphaTest",Gp);C(this,"_batchChunkCount");C(this,"_color",new ue(16777215));C(this,"_customEmissive",new ue(0));C(this,"_customEmissiveIntensity",1);C(this,"_game");C(this,"_map",null);C(this,"_hasLightLevel");C(this,"_uvScrollSpeed",null);this._game=t,this._batchChunkCount=r,this._hasLightLevel=i,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_ALPHATEST:"",[xT]:i?1:0},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],[Ci]:[0],lightLevel:[0]},this._bindUniforms()}get map(){return this._map}set map(t){var n;this._map=t,t?this.defines={...this.defines||{},USE_MAP:""}:((n=this.defines)==null?void 0:n.USE_MAP)!==void 0&&delete this.defines.USE_MAP}get color(){return this._color}get customAlphaTest(){return this._alphaTest}set customAlphaTest(t){this._alphaTest=t}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest=t}get customEmissive(){return this._customEmissive}get customEmissiveIntensity(){return this._customEmissiveIntensity}set customEmissiveIntensity(t){this._customEmissiveIntensity=t}get uvScrollSpeed(){return this._uvScrollSpeed}set uvScrollSpeed(t){this._uvScrollSpeed=t?t.clone():null}clone(){return new this.constructor(this._game,this.transparent,this._hasLightLevel,this._batchChunkCount).copy(this)}copy(t){return super.copy(t),this._alphaTest=t._alphaTest,this._batchChunkCount=t._batchChunkCount,this._color.copy(t._color),this._customEmissive.copy(t._customEmissive),this._customEmissiveIntensity=t._customEmissiveIntensity,this._game=t._game,this._hasLightLevel=t._hasLightLevel,this._map=t._map,this.uvScrollSpeed=t._uvScrollSpeed,this._bindUniforms(),this.resetBoundChunkVisibilityState(),this}_bindUniforms(){const t=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms.map={get value(){return t._map}},this.uniforms.alphaTest={get value(){return t._alphaTest}}}}class f0 extends d0{constructor(e,t){const n=kn(t);super({uniforms:ni.merge([l0(t),c0(e),{[ms]:{value:0},[jr]:{value:null},[Jr]:{value:new ue}}]),vertexShader:`
        uniform float ${ms};
        ${u0(n)}

        attribute vec4 ${Dc};
        attribute vec4 ${kc};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;

        void main() {
          uint chunkIndexValue = uint(${Ci} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          vFoamLevel = ${Dc};
          vFoamLevelDiag = ${kc};
          vNormal = normalize(normal);
          vUv = uv;

          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vViewVector = normalize(cameraPosition - worldPos.xyz);

          vec3 pos = position;
          float slowTime = ${ms} * 0.5;
          float yOffset = ${_T};
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
        ${a0}
        uniform float ${ms};
        uniform sampler2D ${jr};
        uniform vec3 ${Jr};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${h0()}

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
          vec4 texColor = texture(${jr}, vUv);
          if (texColor.a < 0.2) {
            discard;
          }

          vec3 color = texColor.rgb * ${Jr};

          if (vNormal.y > 0.5) {
            float fresnel = pow(1.0 - dot(vNormal, vViewVector), 4.0);
            float waveLighting = sin(dot(vWorldPos.xz, vec2(2.0)) + ${ms} * 0.5) * 0.1;

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
              float foamTime = ${ms} * 0.3;
              vec2 foamUV = vWorldPos.xz * 6.0;

              float foamNoise = noise(foamUV + vec2(foamTime, 0.0)) * 0.5 +
                                noise(foamUV * 2.0 + vec2(0.0, foamTime * 0.5)) * 0.3 +
                                noise(foamUV * 4.0 + vec2(foamTime * 0.3, foamTime * 0.2)) * 0.2;
              float foamPattern = smoothstep(0.3, 0.5, foamNoise);
              float finalFoam = mix(foamIntensity, foamPattern * foamIntensity, smoothstep(0.0, 0.05, minDist));

              vec3 foamColor = vec3(1.0) * ${Jr};
              color = mix(color, foamColor, finalFoam * 0.95);
            }
          }

          gl_FragColor = vec4(color, 0.8);
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vWorldPos);
        }
      `,uniformsNeedUpdate:!1,forceSinglePass:!0,side:jt,transparent:!0,fog:!1,lights:!1,toneMapped:!0,glslVersion:ji}),this.defaultAttributeValues={...this.defaultAttributeValues,uv:[0,0],[Ci]:[0],[Dc]:[0,0,0,0],[kc]:[0,0,0,0]}}get textureAtlas(){return this.uniforms[jr].value}set textureAtlas(e){this.uniforms[jr].value=e}update(e,t){this.uniforms[ms].value+=.0075,this.uniforms[Jr].value.copy(e).multiplyScalar(t)}}class bT{constructor(e){C(this,"_game");C(this,"_opaqueMaterial");C(this,"_transparentMaterial");C(this,"_opaqueNonLitMaterial");C(this,"_transparentNonLitMaterial");C(this,"_liquidMaterial");C(this,"_materialsToUpdate",[]);this._game=e,this._opaqueMaterial=new mo(e,!1,!0,8*4*8),this._transparentMaterial=new mo(e,!0,!0,2*2*2),this._opaqueNonLitMaterial=new mo(e,!1,!1,8*4*8),this._transparentNonLitMaterial=new mo(e,!0,!1,2*2*2),this._liquidMaterial=new f0(e,2*2*2);const t=this._game.textureAtlas;this._opaqueMaterial.map=t,this._transparentMaterial.map=t,this._opaqueNonLitMaterial.map=t,this._transparentNonLitMaterial.map=t,this._liquidMaterial.textureAtlas=t,this._opaqueMaterial.needsUpdate=!0,this._transparentMaterial.needsUpdate=!0,this._opaqueNonLitMaterial.needsUpdate=!0,this._transparentNonLitMaterial.needsUpdate=!0,this._liquidMaterial.needsUpdate=!0}get opaqueMaterial(){return this._opaqueMaterial}get transparentMaterial(){return this._transparentMaterial}get opaqueNonLitMaterial(){return this._opaqueNonLitMaterial}get transparentNonLitMaterial(){return this._transparentNonLitMaterial}get liquidMaterial(){return this._liquidMaterial}update(){const e=this._game.renderer.ambientLight;this._liquidMaterial.update(e.color,e.intensity)}cloneTransparentNonLitMaterial(){const e=this._transparentNonLitMaterial.clone();return e.map===null&&this._materialsToUpdate.push(e),e}}class ST{constructor(e,t){C(this,"manager");this.manager=new bT({renderer:e.renderer,textureAtlas:t})}get liquidMaterial(){return this.manager.liquidMaterial}get opaqueMaterial(){return this.manager.opaqueMaterial}get transparentMaterial(){return this.manager.transparentMaterial}update(){this.manager.update()}}const he=16,vt=he-1,fl=he*he*he,Wp={x:0,y:0,z:0};function MT(s,e){const t=s.indexOf(","),n=s.indexOf(",",t+1);return e.x=Number(s.slice(0,t)),e.y=Number(s.slice(t+1,n)),e.z=Number(s.slice(n+1)),e}class Xe{constructor(e,t,n){C(this,"originCoordinate");C(this,"_chunkId");C(this,"_blocks");C(this,"_rotations");this.originCoordinate={...e},this._chunkId=Xe.originCoordinateToChunkId(e),this._blocks=t??new Uint16Array(fl),this._rotations=n??new Uint8Array(fl)}get chunkId(){return this._chunkId}static originCoordinateToChunkId(e){return`${e.x},${e.y},${e.z}`}static chunkIdToOriginCoordinate(e){return MT(e,Wp),{...Wp}}static globalCoordinateToOriginCoordinate(e){return{x:e.x&~vt,y:e.y&~vt,z:e.z&~vt}}static globalCoordinateToChunkId(e){return Xe.originCoordinateToChunkId(Xe.globalCoordinateToOriginCoordinate(e))}static globalCoordinateToLocalCoordinate(e){return{x:e.x&vt,y:e.y&vt,z:e.z&vt}}static blockIndexToLocalCoordinate(e){return{x:e&vt,y:e>>4&vt,z:e>>8&vt}}getBlockType(e){return this._blocks[this._getIndex(e)]}getBlockTypeAt(e,t,n){return this._blocks[e+he*(t+he*n)]}setBlock(e,t){this._blocks[this._getIndex(e)]=t}getBlockRotation(e){return this._rotations[this._getIndex(e)]??0}getBlockRotationAt(e,t,n){return this._rotations[e+he*(t+he*n)]??0}setBlockRotation(e,t){this._rotations[this._getIndex(e)]=t&255}isEmpty(){for(let e=0;e<this._blocks.length;e++)if(this._blocks[e]!==0)return!1;return!0}cloneBlocks(){return this._blocks.slice()}cloneRotations(){return this._rotations.slice()}forEachBlock(e){for(let t=0;t<this._blocks.length;t++){const n=this._blocks[t];n!==0&&e(Xe.blockIndexToLocalCoordinate(t),n,this._rotations[t]??0)}}_getIndex(e){return e.x+he*(e.y+he*e.z)}}class p0{}C(p0,"chunkIdToOriginCoordinate",Xe.chunkIdToOriginCoordinate);const un=3,gs=3,Uc=2,er=4,wa=1,Oi=4,Nc="TransparentSortData",Fc=new Gt;function pn(s){if(!(Nc in s.userData)){const n={center:new L,frame:-1,halfSize:new L,key:-1};s.userData[Nc]=n}s.geometry.boundingBox===null&&s.geometry.computeBoundingBox();const{center:e,halfSize:t}=s.userData[Nc];Fc.copy(s.geometry.boundingBox).applyMatrix4(s.matrixWorld),Fc.getCenter(e),Fc.getSize(t).multiplyScalar(.5)}const ET={x:2,y:2,z:2},TT={x:2,y:2,z:2},rn={x:8,y:4,z:8},wT=2,Aa=2,Ca=new We,zi=new L,Qr=new L,du="hytopiaFogColor",fu="hytopiaFogEnabled",pu="hytopiaFogFar",mu="hytopiaFogNear",Ja="uChunkVisibleBits",Qa="uChunkVisibilityMode",AT=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`;function qp(s){return s.min.x<=s.max.x&&s.min.y<=s.max.y&&s.min.z<=s.max.z}function CT(s){return{[Ja]:{value:new Uint32Array(kn(s)*4)},[Qa]:{value:Dn}}}function IT(s){return{[du]:{get value(){return s.renderer.fogColor}},[fu]:{get value(){return s.renderer.fogEnabled}},[pu]:{get value(){return s.renderer.fogFar}},[mu]:{get value(){return s.renderer.fogNear}}}}class Xp extends Wt{constructor(t,n){const i=ni.clone(mt.basic.uniforms),r=kn(n);Object.assign(i,CT(n),IT(t));const o=mt.basic.vertexShader.replace("void main() {",`
        uniform uint ${Qa};
        uniform uvec4 ${Ja}[${r}];
        attribute float ${Ci};
        varying vec3 vHytopiaWorldPos;

        bool isChunkVisible(uint chunkIndexValue) {
          if (${Qa} == uint(${Dn})) {
            return true;
          }

          uint wordIndex = chunkIndexValue >> 5u;
          uvec4 packedWords = ${Ja}[int(wordIndex >> 2u)];
          uint packedWord = packedWords[int(wordIndex & 3u)];
          uint bitIndex = chunkIndexValue & 31u;
          return ((packedWord >> bitIndex) & 1u) != 0u;
        }

        void main() {
          uint chunkIndexValue = uint(${Ci} + 0.5);
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
      `),a=mt.basic.fragmentShader.replace("void main() {",`
          ${AT}
          varying vec3 vHytopiaWorldPos;
          uniform vec3 ${du};
          uniform bool ${fu};
          uniform float ${pu};
          uniform float ${mu};

          vec3 applyHytopiaFog(vec3 color, vec3 worldPos) {
            if (!${fu}) {
              return color;
            }

            float fogFactor = smoothstep(${mu}, ${pu}, length(worldPos.xz - cameraPosition.xz));
            return mix(color, ${du}, fogFactor);
          }

          void main() {
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyHytopiaFog(gl_FragColor.rgb, vHytopiaWorldPos);
        `);super({uniforms:i,vertexShader:o,fragmentShader:a,side:jt,vertexColors:!0,fog:!1,lights:!1,toneMapped:!0,glslVersion:ji});C(this,"_boundBatchKey","");C(this,"_boundChunkVisibilityBits",null);C(this,"_boundChunkVisibilityMode",-1);C(this,"_boundChunkVisibilityRevision",-1);this.defines={...this.defines||{},USE_COLOR:""}}bindChunkVisibility(t,n,i,r){return this._boundBatchKey===t&&this._boundChunkVisibilityBits===n&&this._boundChunkVisibilityMode===i&&this._boundChunkVisibilityRevision===r?!1:(this.uniforms[Ja].value=n,this.uniforms[Qa].value=i,this._boundBatchKey=t,this._boundChunkVisibilityBits=n,this._boundChunkVisibilityMode=i,this._boundChunkVisibilityRevision=r,!0)}}class RT{constructor(e){C(this,"_game");C(this,"_gl");C(this,"_chunkLiquidGeometry",new Map);C(this,"_chunkLodGeometry",new Map);C(this,"_chunkOpaqueGeometry",new Map);C(this,"_chunkTransparentGeometry",new Map);C(this,"_chunkLiquidBounds",new Map);C(this,"_chunkLodBounds",new Map);C(this,"_chunkOpaqueBounds",new Map);C(this,"_chunkTransparentBounds",new Map);C(this,"_liquidBatches",new Map);C(this,"_opaqueBatches",new Map);C(this,"_transparentBatches",new Map);C(this,"_opaqueCollisionMeshes",new Map);C(this,"_parentBatches",new Map);C(this,"_transparentCollisionMeshes",new Map);C(this,"_batchKeyCache",new Map);C(this,"_opaqueSolidBatchMeshes",[]);C(this,"_opaqueSolidBatchMeshesDirty",!0);C(this,"_transparentSolidBatchMeshes",[]);C(this,"_transparentSolidBatchMeshesDirty",!0);C(this,"_solidMeshesInScene",[]);C(this,"_solidMeshesInSceneDirty",!0);C(this,"_collisionMaterial",new jn);C(this,"_lodMaterial");this._game=e,this._gl=e.renderer.webGLRenderer.getContext(),this._lodMaterial=new Xp(e,rn.x*rn.y*rn.z)}updateChunkGeometry(e,t,n,i,r,o,a,l,c){this._updateChunkGeometryForKind("liquid",e,t,n),this._updateChunkLodGeometry(e,i,r),this._updateChunkGeometryForKind("opaque",e,o,a),this._updateChunkGeometryForKind("transparent",e,l,c)}removeChunkGeometry(e){this._updateChunkGeometryForKind("liquid",e,void 0),this._updateChunkLodGeometry(e,void 0),this._updateChunkGeometryForKind("opaque",e,void 0),this._updateChunkGeometryForKind("transparent",e,void 0)}clear(){for(const e of[...this._opaqueBatches.values()])this._disposeBatch(this._opaqueBatches,e);for(const e of[...this._transparentBatches.values()])this._disposeBatch(this._transparentBatches,e);for(const e of[...this._liquidBatches.values()])this._disposeBatch(this._liquidBatches,e);for(const e of this._parentBatches.values())this._disposeLodBatch(e);this._chunkLiquidGeometry.clear(),this._chunkLodGeometry.clear(),this._chunkOpaqueGeometry.clear(),this._chunkTransparentGeometry.clear(),this._chunkLiquidBounds.clear(),this._chunkLodBounds.clear(),this._chunkOpaqueBounds.clear(),this._chunkTransparentBounds.clear(),this._opaqueCollisionMeshes.clear(),this._transparentCollisionMeshes.clear(),this._opaqueBatches.clear(),this._transparentBatches.clear(),this._liquidBatches.clear(),this._parentBatches.clear(),this._batchKeyCache.clear(),this._opaqueSolidBatchMeshes.length=0,this._transparentSolidBatchMeshes.length=0,this._solidMeshesInScene.length=0,this._opaqueSolidBatchMeshesDirty=!0,this._transparentSolidBatchMeshesDirty=!0,this._solidMeshesInSceneDirty=!0}get batchMeshCount(){let e=0;for(const t of this._parentBatches.values())t.lodBatch&&e++;return this._opaqueBatches.size+this._transparentBatches.size+this._liquidBatches.size+e}applyBatchVisibility(e,t,n,i,r,o){this._flushPendingUploads();for(const a of this._parentBatches.values())this._applyParentBatchVisibility(a,e,t,n,i,r,o)}collectPreOcclusionChunkModes(e,t,n,i,r){r.clear();for(const o of this._parentBatches.values()){const a=this._classifyViewDistance(o.bounds,e,n),l=qp(o.bounds)?this._classifyFrustum(o.bounds,i):-1;if(!(a===-1||l===-1))for(const c of this._getParentBatchChunkIds(o)){const h=this._getChunkVisibilityBounds(c);if(!h||this._classifyChunkBoundsViewDistance(h,e,n)===-1||this._classifyChunkBoundsFrustum(h,i)===-1)continue;const u=this._distanceToChunkBoundsXZSquared(h,e);r.set(c,u>t&&o.lodChunkIds.has(c)?"lod":"normal")}}return r}getChunkVisibilityBounds(e){return this._getChunkVisibilityBounds(e)}getChunkOpaqueBounds(e){return this._chunkOpaqueBounds.get(e)}getChunkTransparentBounds(e){return this._chunkTransparentBounds.get(e)}getChunkLiquidBounds(e){return this._chunkLiquidBounds.get(e)}getChunkLodBounds(e){return this._chunkLodBounds.get(e)}get solidMeshesInScene(){return this._solidMeshesInSceneDirty?(this._solidMeshesInScene.length=0,this._collectCollisionMeshes(this._opaqueBatches,this._opaqueCollisionMeshes),this._collectCollisionMeshes(this._transparentBatches,this._transparentCollisionMeshes),this._solidMeshesInSceneDirty=!1,this._solidMeshesInScene):this._solidMeshesInScene}get opaqueSolidMeshes(){if(this._opaqueSolidBatchMeshesDirty){this._opaqueSolidBatchMeshes.length=0;for(const e of this._opaqueBatches.values())this._opaqueSolidBatchMeshes.push(e.mesh);this._opaqueSolidBatchMeshesDirty=!1}return this._opaqueSolidBatchMeshes.values()}get transparentSolidMeshes(){if(this._transparentSolidBatchMeshesDirty){this._transparentSolidBatchMeshes.length=0;for(const e of this._transparentBatches.values())this._transparentSolidBatchMeshes.push(e.mesh);this._transparentSolidBatchMeshesDirty=!1}return this._transparentSolidBatchMeshes.values()}_collectCollisionMeshes(e,t){for(const n of e.values())if(n.visible)for(let i=0;i<n.chunkIds.length;i++){if(!this._isChunkVisible(n.chunkVisibilityBits,n.chunkVisibilityMode,i))continue;const r=n.chunkIds[i],o=t.get(r);o&&this._solidMeshesInScene.push(o)}}_updateChunkGeometryForKind(e,t,n,i){var _;const r=this._getChunkGeometryMap(e),o=this._getChunkBoundsMap(e),a=this._getBatchMap(e),l=this._getCollisionMeshMap(e),c=this._getBatchKeyForChunk(t,this._getBatchDimensions(e)),h=this._getParentBatchKeyForBatchKey(c);if(!n){r.delete(t),o.delete(t),(_=l==null?void 0:l.get(t))==null||_.geometry.dispose(),l==null||l.delete(t),this._markParentBatchChunkIdsDirty(h);const m=a.get(c);m&&this._removeChunkFromBatch(a,m,t),this._solidMeshesInSceneDirty=!0;return}r.set(t,n),i&&o.set(t,i),l&&e!=="liquid"&&this._updateCollisionMesh(l,t,n);let u=a.get(c);u||(u=this._createBatch(e,c),a.set(c,u),this._registerNormalBatch(c,e));const d=u.allocations.get(t);if(!d){this._markParentBatchChunkIdsDirty(h),this._appendChunkToBatch(a,u,t,n);return}const f=n.positions.length/un,p=n.indices.length;if(f<=d.vertexCapacity&&p<=d.indexCapacity){this._uploadChunkIntoAllocation(u,t,d,n),this._updateBatchBounds(u);return}this._rebuildBatch(a,u,t)}_updateChunkLodGeometry(e,t,n){const i=this._getParentBatchKeyForChunk(e);if(!t||!n){this._chunkLodGeometry.delete(e),this._chunkLodBounds.delete(e),this._unregisterLodChunk(i,e),this._rebuildLodBatch(i);return}this._chunkLodGeometry.set(e,t),this._chunkLodBounds.set(e,n),this._registerLodChunk(i,e),this._rebuildLodBatch(i)}_appendChunkToBatch(e,t,n,i){const r=i.positions.length/un,o=i.indices.length,a=this._roundCapacity(r),l=this._roundIndexCapacity(o);if(t.totalVertexCount+a>t.vertexCapacity||t.totalIndexCount+l>t.indexCapacity){this._rebuildBatch(e,t,n);return}const c={vertexOffset:t.totalVertexCount,vertexCapacity:a,vertexCount:r,indexOffset:t.totalIndexCount,indexCapacity:l,indexCount:o};t.allocations.set(n,c),t.chunkIds.push(n),t.totalVertexCount+=a,t.totalIndexCount+=l,this._uploadChunkIntoAllocation(t,n,c,i),this._updateBatchBounds(t)}_removeChunkFromBatch(e,t,n){const i=t.allocations.get(n);if(!i)return;const r=t.chunkIds[t.chunkIds.length-1];if(r&&r!==n){const o=t.allocations.get(r),a=this._getChunkGeometryMap(t.kind).get(r);if(o.vertexCapacity>i.vertexCapacity||o.indexCapacity>i.indexCapacity){t.allocations.delete(n);const c=t.chunkIds.indexOf(n);c>=0&&t.chunkIds.splice(c,1),this._rebuildBatch(e,t);return}const l={vertexOffset:i.vertexOffset,vertexCapacity:i.vertexCapacity,vertexCount:o.vertexCount,indexOffset:i.indexOffset,indexCapacity:i.indexCapacity,indexCount:o.indexCount};t.allocations.set(r,l),this._uploadChunkIntoAllocation(t,r,l,a)}if(t.allocations.delete(n),t.chunkIds.pop(),r&&r!==n){const o=t.chunkIds.indexOf(n);o>=0&&(t.chunkIds[o]=r)}else{const o=t.chunkIds.indexOf(n);o>=0&&t.chunkIds.splice(o,1)}t.totalVertexCount=0,t.totalIndexCount=0;for(const o of t.chunkIds){const a=t.allocations.get(o);t.totalVertexCount=Math.max(t.totalVertexCount,a.vertexOffset+a.vertexCapacity),t.totalIndexCount=Math.max(t.totalIndexCount,a.indexOffset+a.indexCapacity)}this._updateBatchDrawRange(t),t.chunkIds.length===0?this._disposeBatch(e,t):this._updateBatchBounds(t)}_rebuildBatch(e,t,n){const i=this._getChunkGeometryMap(t.kind),r=n&&!t.allocations.has(n)?[...t.chunkIds,n]:[...t.chunkIds];let o=0,a=0;for(const h of r){const u=i.get(h);u&&(o+=this._roundCapacity(u.positions.length/un),a+=this._roundIndexCapacity(u.indices.length))}const l=Math.max(this._roundCapacity(o),1),c=Math.max(this._roundCapacity(a),1);this._resizeBatchBuffers(t,l,c),t.allocations.clear(),t.chunkIds=[],t.totalVertexCount=0,t.totalIndexCount=0;for(const h of r){const u=i.get(h);u&&this._appendChunkToBatch(e,t,h,u)}this._updateBatchBounds(t)}_uploadChunkIntoAllocation(e,t,n,i){const r=i.positions.length/un,o=i.indices.length,a=e.chunkIds.indexOf(t);n.vertexCount=r,n.indexCount=o,this._queueUpload(e,e.positionBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*un*4,i.positions),this._queueUpload(e,e.normalBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*gs*4,i.normals),this._queueUpload(e,e.uvBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Uc*4,i.uvs),this._queueUpload(e,e.colorBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*er*4,i.colors),this._queueUpload(e,e.chunkIndexBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Aa,new Uint16Array(n.vertexCapacity).fill(a));const l=i.lightLevels??new Float32Array(r*wa);if(this._queueUpload(e,e.lightLevelBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*wa*4,l),e.kind==="liquid"&&e.foamBuffer&&e.foamDiagBuffer){const u=i.foamLevels??new Float32Array(r*Oi),d=i.foamLevelsDiag??new Float32Array(r*Oi);this._queueUpload(e,e.foamBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Oi*4,u),this._queueUpload(e,e.foamDiagBuffer,this._gl.ARRAY_BUFFER,n.vertexOffset*Oi*4,d)}const c=new e.indexArrayCtor(n.indexCapacity);for(let u=0;u<o;u++)c[u]=i.indices[u]+n.vertexOffset;const h=n.vertexOffset;for(let u=o;u<n.indexCapacity;u++)c[u]=h;this._queueUpload(e,e.indexBuffer,this._gl.ELEMENT_ARRAY_BUFFER,n.indexOffset*e.indexBytesPerElement,c),this._updateBatchDrawRange(e)}_queueUpload(e,t,n,i,r){e.pendingUploads.push({buffer:t,target:n,offset:i,data:r,arrayCtor:r.constructor,bytesPerElement:r.BYTES_PER_ELEMENT})}_uploadArray(e,t,n,i){const r=this._gl instanceof WebGL2RenderingContext?this._gl:null;t===this._gl.ELEMENT_ARRAY_BUFFER&&r&&r.bindVertexArray(null),this._gl.bindBuffer(t,e),this._gl.bufferSubData(t,n,i)}_flushPendingUploads(){for(const e of this._opaqueBatches.values())this._flushBatchPendingUploads(e);for(const e of this._transparentBatches.values())this._flushBatchPendingUploads(e);for(const e of this._liquidBatches.values())this._flushBatchPendingUploads(e)}_flushBatchPendingUploads(e){if(e.pendingUploads.length===0)return;const t=new Map;for(const n of e.pendingUploads){const i=t.get(n.buffer);i?i.push(n):t.set(n.buffer,[n])}for(const n of t.values())this._flushMergedUploads(n);e.pendingUploads.length=0}_flushMergedUploads(e){e.sort((i,r)=>i.offset-r.offset);let t=0,n=e[0].offset+e[0].data.byteLength;for(let i=1;i<=e.length;i++){const r=e[i];if(r&&r.offset<=n+r.bytesPerElement&&r.arrayCtor===e[t].arrayCtor&&r.bytesPerElement===e[t].bytesPerElement){n=Math.max(n,r.offset+r.data.byteLength);continue}this._flushUploadCluster(e,t,i),t=i,r&&(n=r.offset+r.data.byteLength)}}_flushUploadCluster(e,t,n){if(n<=t)return;const i=e[t];if(n===t+1){this._uploadArray(i.buffer,i.target,i.offset,i.data);return}let r=i.offset+i.data.byteLength;for(let l=t+1;l<n;l++)r=Math.max(r,e[l].offset+e[l].data.byteLength);const o=(r-i.offset)/i.bytesPerElement,a=new i.arrayCtor(o);for(let l=t;l<n;l++){const c=e[l],h=(c.offset-i.offset)/c.bytesPerElement;a.set(c.data,h)}this._uploadArray(i.buffer,i.target,i.offset,a)}_createBatch(e,t){const n=this._getBatchDimensions(e),i=this._getBatchOriginFromKey(t),r={x:n.x*he,y:n.y*he,z:n.z*he},o=new Dt;o.boundingBox=new Gt(zi.set(0,0,0).clone(),zi.set(r.x,r.y,r.z).clone()),o.boundingSphere=new Ot(zi.set(r.x*.5,r.y*.5,r.z*.5).clone(),Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z)*.5);const a=this._getRenderMaterial(e),l=new bt(o,a);l.name=`${e}_batch_${t}`,l.matrixAutoUpdate=!1,l.matrixWorldAutoUpdate=!1,l.frustumCulled=!1,pn(l);const c={allocations:new Map,bounds:o.boundingBox.clone(),chunkIndexBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,Aa),chunkIds:[],chunkVisibilityBits:new Uint32Array(kn(n.x*n.y*n.z)*4),chunkVisibilityScratchBits:new Uint32Array(kn(n.x*n.y*n.z)*4),chunkVisibilityMode:Dn,chunkVisibilityRevision:0,geometry:o,indexBuffer:this._createGLBuffer(this._gl.ELEMENT_ARRAY_BUFFER,2),indexType:this._gl.UNSIGNED_SHORT,indexArrayCtor:Uint16Array,indexBytesPerElement:2,indexCapacity:1,key:t,kind:e,lightLevelBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),lightLevelCapacity:1,material:a,mesh:l,normalBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),origin:i,pendingUploads:[],positionBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),uvBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),colorBuffer:this._createGLBuffer(this._gl.ARRAY_BUFFER,4),totalIndexCount:0,totalVertexCount:0,vertexCapacity:1,visible:!1,worldSize:r};return l.onBeforeRender=(h,u,d,f,p)=>{(p instanceof mo||p instanceof f0)&&p.bindChunkVisibility(t,c.chunkVisibilityBits,c.chunkVisibilityMode,c.chunkVisibilityRevision)&&(p.uniformsNeedUpdate=!0)},e==="liquid"&&(c.foamBuffer=this._createGLBuffer(this._gl.ARRAY_BUFFER,4),c.foamDiagBuffer=this._createGLBuffer(this._gl.ARRAY_BUFFER,4)),this._attachGLAttributes(c),this._updateBatchBounds(c),e==="opaque"?this._opaqueSolidBatchMeshesDirty=!0:e==="transparent"&&(this._transparentSolidBatchMeshesDirty=!0),c}_attachGLAttributes(e){const t=new fi(e.indexBuffer,e.indexType,1,e.indexBytesPerElement,e.indexCapacity),n=new fi(e.positionBuffer,this._gl.FLOAT,un,4,e.vertexCapacity),i=new fi(e.normalBuffer,this._gl.FLOAT,gs,4,e.vertexCapacity),r=new fi(e.uvBuffer,this._gl.FLOAT,Uc,4,e.vertexCapacity),o=new fi(e.colorBuffer,this._gl.FLOAT,er,4,e.vertexCapacity),a=new fi(e.chunkIndexBuffer,this._gl.UNSIGNED_SHORT,1,Aa,e.vertexCapacity),l=new fi(e.lightLevelBuffer,this._gl.FLOAT,wa,4,e.vertexCapacity);if(e.geometry.setIndex(t),e.geometry.setAttribute("position",n),e.geometry.setAttribute("normal",i),e.geometry.setAttribute("uv",r),e.geometry.setAttribute("color",o),e.geometry.setAttribute(Ci,a),e.geometry.setAttribute("lightLevel",l),e.kind==="liquid"&&e.foamBuffer&&e.foamDiagBuffer){const c=new fi(e.foamBuffer,this._gl.FLOAT,Oi,4,e.vertexCapacity),h=new fi(e.foamDiagBuffer,this._gl.FLOAT,Oi,4,e.vertexCapacity);e.geometry.setAttribute("foamLevel",c),e.geometry.setAttribute("foamLevelDiag",h)}e.geometry.setDrawRange(0,0)}_resizeBatchBuffers(e,t,n){e.pendingUploads.length=0;const i=t>65535?this._gl.UNSIGNED_INT:this._gl.UNSIGNED_SHORT,r=i===this._gl.UNSIGNED_INT?Uint32Array:Uint16Array,o=i===this._gl.UNSIGNED_INT?4:2;e.vertexCapacity=t,e.indexCapacity=n,e.indexType=i,e.indexArrayCtor=r,e.indexBytesPerElement=o,this._allocateBuffer(e.positionBuffer,this._gl.ARRAY_BUFFER,t*un*4),this._allocateBuffer(e.normalBuffer,this._gl.ARRAY_BUFFER,t*gs*4),this._allocateBuffer(e.uvBuffer,this._gl.ARRAY_BUFFER,t*Uc*4),this._allocateBuffer(e.colorBuffer,this._gl.ARRAY_BUFFER,t*er*4),this._allocateBuffer(e.chunkIndexBuffer,this._gl.ARRAY_BUFFER,t*Aa),this._allocateBuffer(e.lightLevelBuffer,this._gl.ARRAY_BUFFER,t*wa*4),e.foamBuffer&&e.foamDiagBuffer&&(this._allocateBuffer(e.foamBuffer,this._gl.ARRAY_BUFFER,t*Oi*4),this._allocateBuffer(e.foamDiagBuffer,this._gl.ARRAY_BUFFER,t*Oi*4)),this._allocateBuffer(e.indexBuffer,this._gl.ELEMENT_ARRAY_BUFFER,n*o),this._attachGLAttributes(e)}_allocateBuffer(e,t,n){const i=this._gl instanceof WebGL2RenderingContext?this._gl:null;t===this._gl.ELEMENT_ARRAY_BUFFER&&i&&i.bindVertexArray(null),this._gl.bindBuffer(t,e),this._gl.bufferData(t,n,this._gl.DYNAMIC_DRAW)}_updateBatchDrawRange(e){let t=0;for(const n of e.allocations.values())t=Math.max(t,n.indexOffset+n.indexCount);e.geometry.setDrawRange(0,t)}_updateBatchBounds(e){const t=this._getChunkBoundsMap(e.kind);if(e.chunkIds.length===0){e.bounds.makeEmpty(),e.geometry.boundingBox=e.bounds.clone(),e.geometry.boundingSphere=new Ot(zi.set(0,0,0).clone(),0),pn(e.mesh);return}let n=!1;for(const r of e.chunkIds){const o=t.get(r);if(o){if(!n){e.bounds.min.set(o.min[0],o.min[1],o.min[2]),e.bounds.max.set(o.max[0],o.max[1],o.max[2]),n=!0;continue}e.bounds.min.x=Math.min(e.bounds.min.x,o.min[0]),e.bounds.min.y=Math.min(e.bounds.min.y,o.min[1]),e.bounds.min.z=Math.min(e.bounds.min.z,o.min[2]),e.bounds.max.x=Math.max(e.bounds.max.x,o.max[0]),e.bounds.max.y=Math.max(e.bounds.max.y,o.max[1]),e.bounds.max.z=Math.max(e.bounds.max.z,o.max[2])}}e.geometry.boundingBox=e.bounds.clone();const i=e.geometry.boundingSphere??new Ot;e.bounds.getCenter(Qr),i.center.copy(Qr),i.radius=Qr.distanceTo(e.bounds.max),e.geometry.boundingSphere=i,pn(e.mesh)}_createGLBuffer(e,t){const n=this._gl.createBuffer();if(!n)throw new Error("ChunkMeshManager: Failed to create WebGLBuffer.");return this._allocateBuffer(n,e,t),n}_disposeBatch(e,t){t.pendingUploads.length=0,this._gl.deleteBuffer(t.positionBuffer),this._gl.deleteBuffer(t.normalBuffer),this._gl.deleteBuffer(t.uvBuffer),this._gl.deleteBuffer(t.colorBuffer),this._gl.deleteBuffer(t.chunkIndexBuffer),this._gl.deleteBuffer(t.lightLevelBuffer),t.foamBuffer&&this._gl.deleteBuffer(t.foamBuffer),t.foamDiagBuffer&&this._gl.deleteBuffer(t.foamDiagBuffer),this._gl.deleteBuffer(t.indexBuffer),this._game.renderer.removeFromScene(t.mesh),e.delete(t.key),this._unregisterNormalBatch(t.key,t.kind),t.kind==="opaque"?this._opaqueSolidBatchMeshesDirty=!0:t.kind==="transparent"&&(this._transparentSolidBatchMeshesDirty=!0),this._solidMeshesInSceneDirty=!0}_applyParentBatchVisibility(e,t,n,i,r,o,a){const l=this._classifyViewDistance(e.bounds,t,i),c=qp(e.bounds)?this._classifyFrustum(e.bounds,r):-1;if(l===-1||c===-1){this._syncParentBatchVisibility(e,"hidden");return}const h=this._classifyParentChunkVisibility(e,t,n,i,r,o,a);let u=!1;for(const p of e.opaqueBatchKeys){const _=this._opaqueBatches.get(p),m=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,m),u||(u=m)}for(const p of e.transparentBatchKeys){const _=this._transparentBatches.get(p),m=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,m),u||(u=m)}for(const p of e.liquidBatchKeys){const _=this._liquidBatches.get(p),m=_?this._applyNormalBatchChunkVisibility(_,h,a):!1;this._setNormalBatchScenePresence(_,m),u||(u=m)}const d=this._applyLodBatchChunkVisibility(e,h,a);this._setLodBatchScenePresence(e.lodBatch,d);let f="hidden";u&&d?f="mixed":u?f="normal":d&&(f="lod"),this._syncParentBatchVisibility(e,f)}_classifyParentChunkVisibility(e,t,n,i,r,o,a){const l=e.chunkModes;l.clear();const c=this._getParentBatchChunkIds(e);for(const h of c){const u=o==null?void 0:o.get(h);if(u){if(a&&!a.has(h)){l.set(h,"hidden");continue}l.set(h,u);continue}const d=this._getChunkVisibilityBounds(h);if(!d){l.set(h,"hidden");continue}if(this._classifyChunkBoundsViewDistance(d,t,i)===-1){l.set(h,"hidden");continue}if(this._classifyChunkBoundsFrustum(d,r)===-1){l.set(h,"hidden");continue}this._distanceToChunkBoundsXZSquared(d,t)>n&&e.lodChunkIds.has(h)?l.set(h,"lod"):l.set(h,"normal")}return l}_getParentBatchChunkIds(e){if(!e.allChunkIdsDirty)return e.allChunkIds;const t=new Set(e.lodChunkIds);this._collectParentBatchChunkIds(this._opaqueBatches,e.opaqueBatchKeys,t),this._collectParentBatchChunkIds(this._transparentBatches,e.transparentBatchKeys,t),this._collectParentBatchChunkIds(this._liquidBatches,e.liquidBatchKeys,t),e.allChunkIds.length=0;for(const n of t)e.allChunkIds.push(n);return e.allChunkIdsDirty=!1,e.allChunkIds}_collectParentBatchChunkIds(e,t,n){for(const i of t){const r=e.get(i);if(r)for(const o of r.chunkIds)n.add(o)}}_markParentBatchChunkIdsDirty(e){const t=this._parentBatches.get(e);t&&(t.allChunkIdsDirty=!0)}_getChunkVisibilityBounds(e){return this._chunkOpaqueBounds.get(e)??this._chunkTransparentBounds.get(e)??this._chunkLiquidBounds.get(e)??this._chunkLodBounds.get(e)}_applyLodBatchChunkVisibility(e,t,n){const i=e.lodBatch;if(!i)return!1;const r=i.chunkVisibilityScratchBits;r.fill(0);let o=0;for(let c=0;c<i.chunkIds.length;c++){if(t.get(i.chunkIds[c])!=="lod"||n&&!n.has(i.chunkIds[c]))continue;const h=c>>5;r[h]|=1<<(c&31),o++}const a=!this._areChunkVisibilityBitsEqual(i.chunkVisibilityBits,r);if(a&&i.chunkVisibilityBits.set(r),o===0){const c=i.chunkVisibilityMode!==Fi;return this._setLodBatchChunkVisibilityMode(i,Fi),(c||a)&&i.chunkVisibilityRevision++,!1}if(o===i.chunkIds.length)return i.chunkVisibilityMode!==Dn&&i.chunkVisibilityRevision++,this._setLodBatchChunkVisibilityMode(i,Dn),!0;const l=i.chunkVisibilityMode!==Fi;return this._setLodBatchChunkVisibilityMode(i,Fi),(l||a)&&i.chunkVisibilityRevision++,!0}_applyNormalBatchChunkVisibility(e,t,n){const i=e.chunkVisibilityScratchBits;i.fill(0);let r=0;for(let l=0;l<e.chunkIds.length;l++){if(t.get(e.chunkIds[l])!=="normal"||n&&!n.has(e.chunkIds[l]))continue;const c=l>>5;i[c]|=1<<(l&31),r++}const o=!this._areChunkVisibilityBitsEqual(e.chunkVisibilityBits,i);if(o&&e.chunkVisibilityBits.set(i),r===0){const l=e.chunkVisibilityMode!==Fi;return this._setBatchChunkVisibilityMode(e,Fi),(l||o)&&e.chunkVisibilityRevision++,!1}if(r===e.chunkIds.length)return this._setBatchChunkVisibilityMode(e,Dn),!0;const a=e.chunkVisibilityMode!==Fi;return this._setBatchChunkVisibilityMode(e,Fi),(a||o)&&e.chunkVisibilityRevision++,this._solidMeshesInSceneDirty=!0,!0}_syncParentBatchVisibility(e,t){if(t==="hidden"){for(const n of e.opaqueBatchKeys)this._setNormalBatchScenePresence(this._opaqueBatches.get(n),!1);for(const n of e.transparentBatchKeys)this._setNormalBatchScenePresence(this._transparentBatches.get(n),!1);for(const n of e.liquidBatchKeys)this._setNormalBatchScenePresence(this._liquidBatches.get(n),!1);this._setLodBatchScenePresence(e.lodBatch,!1)}e.visibilityState=t}_setNormalBatchScenePresence(e,t){if(!e)return;const n=e.mesh.parent!==null;t&&!n?(this._game.renderer.addToScene(e.mesh),this._solidMeshesInSceneDirty=!0):!t&&n&&(this._game.renderer.removeFromScene(e.mesh),this._solidMeshesInSceneDirty=!0),e.visible=t}_setLodBatchScenePresence(e,t){if(!e)return;const n=e.mesh.parent!==null;t&&!n?this._game.renderer.addToScene(e.mesh):!t&&n&&this._game.renderer.removeFromScene(e.mesh),e.visible=t}_classifyViewDistance(e,t,n){if(this._distanceToBoundsXZSquared(e,t)>n)return-1;const i=Math.abs(t.x-e.min.x)>Math.abs(t.x-e.max.x)?e.min.x:e.max.x,r=Math.abs(t.y-e.min.z)>Math.abs(t.y-e.max.z)?e.min.z:e.max.z;return t.distanceToSquared(Ca.set(i,r))<=n?1:0}_distanceToBoundsXZSquared(e,t){const n=Math.max(e.min.x,Math.min(t.x,e.max.x)),i=Math.max(e.min.z,Math.min(t.y,e.max.z));return t.distanceToSquared(Ca.set(n,i))}_classifyChunkBoundsViewDistance(e,t,n){if(this._distanceToChunkBoundsXZSquared(e,t)>n)return-1;const i=Math.abs(t.x-e.min[0])>Math.abs(t.x-e.max[0])?e.min[0]:e.max[0],r=Math.abs(t.y-e.min[2])>Math.abs(t.y-e.max[2])?e.min[2]:e.max[2];return t.distanceToSquared(Ca.set(i,r))<=n?1:0}_distanceToChunkBoundsXZSquared(e,t){const n=Math.max(e.min[0],Math.min(t.x,e.max[0])),i=Math.max(e.min[2],Math.min(t.y,e.max[2]));return t.distanceToSquared(Ca.set(n,i))}_classifyFrustum(e,t){let n=!0;for(const i of t.planes){const r=zi.set(i.normal.x>=0?e.max.x:e.min.x,i.normal.y>=0?e.max.y:e.min.y,i.normal.z>=0?e.max.z:e.min.z);if(i.distanceToPoint(r)<0)return-1;const o=Qr.set(i.normal.x>=0?e.min.x:e.max.x,i.normal.y>=0?e.min.y:e.max.y,i.normal.z>=0?e.min.z:e.max.z);i.distanceToPoint(o)<0&&(n=!1)}return n?1:0}_classifyChunkBoundsFrustum(e,t){let n=!0;for(const i of t.planes){const r=zi.set(i.normal.x>=0?e.max[0]:e.min[0],i.normal.y>=0?e.max[1]:e.min[1],i.normal.z>=0?e.max[2]:e.min[2]);if(i.distanceToPoint(r)<0)return-1;const o=Qr.set(i.normal.x>=0?e.min[0]:e.max[0],i.normal.y>=0?e.min[1]:e.max[1],i.normal.z>=0?e.min[2]:e.max[2]);i.distanceToPoint(o)<0&&(n=!1)}return n?1:0}_areChunkVisibilityBitsEqual(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}_isChunkVisible(e,t,n){if(t===Dn)return!0;const i=n>>5;return(e[i]>>>(n&31)&1)!==0}_setBatchChunkVisibilityMode(e,t){e.chunkVisibilityMode!==t&&(e.chunkVisibilityMode=t,e.chunkVisibilityRevision++,this._solidMeshesInSceneDirty=!0)}_setLodBatchChunkVisibilityMode(e,t){e.chunkVisibilityMode!==t&&(e.chunkVisibilityMode=t)}_updateCollisionMesh(e,t,n){const i=new Dt;i.setAttribute("position",new ze(n.positions,un)),i.setAttribute("normal",new ze(n.normals,gs)),i.setIndex(new ze(n.indices,1)),i.computeBoundingBox(),i.computeBoundingSphere();const r=e.get(t),o=this._collisionMaterial;if(r){r.geometry.dispose(),r.geometry=i,pn(r);return}const a=new bt(i,o);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,pn(a),e.set(t,a)}_getChunkGeometryMap(e){switch(e){case"liquid":return this._chunkLiquidGeometry;case"opaque":return this._chunkOpaqueGeometry;case"transparent":return this._chunkTransparentGeometry}}_getChunkBoundsMap(e){switch(e){case"liquid":return this._chunkLiquidBounds;case"opaque":return this._chunkOpaqueBounds;case"transparent":return this._chunkTransparentBounds}}_getBatchMap(e){switch(e){case"liquid":return this._liquidBatches;case"opaque":return this._opaqueBatches;case"transparent":return this._transparentBatches}}_getCollisionMeshMap(e){switch(e){case"opaque":return this._opaqueCollisionMeshes;case"transparent":return this._transparentCollisionMeshes;default:return}}_getBatchDimensions(e){switch(e){case"liquid":return ET;case"opaque":return rn;case"transparent":return TT}}_getRenderMaterial(e){switch(e){case"liquid":return this._game.blockMaterialManager.liquidMaterial;case"opaque":return this._game.blockMaterialManager.opaqueMaterial;case"transparent":return this._game.blockMaterialManager.transparentMaterial}}_registerNormalBatch(e,t){const n=this._ensureParentBatch(this._getParentBatchKeyForBatchKey(e));switch(n.allChunkIdsDirty=!0,t){case"opaque":n.opaqueBatchKeys.add(e);break;case"transparent":n.transparentBatchKeys.add(e);break;case"liquid":n.liquidBatchKeys.add(e);break}}_unregisterNormalBatch(e,t){const n=this._getParentBatchKeyForBatchKey(e),i=this._parentBatches.get(n);if(i){switch(i.allChunkIdsDirty=!0,t){case"opaque":i.opaqueBatchKeys.delete(e);break;case"transparent":i.transparentBatchKeys.delete(e);break;case"liquid":i.liquidBatchKeys.delete(e);break}this._cleanupParentBatch(n,i)}}_registerLodChunk(e,t){const n=this._ensureParentBatch(e);n.lodChunkIds.add(t),n.allChunkIdsDirty=!0}_unregisterLodChunk(e,t){const n=this._parentBatches.get(e);n&&(n.lodChunkIds.delete(t),n.allChunkIdsDirty=!0)}_ensureParentBatch(e){let t=this._parentBatches.get(e);if(t)return t;const n=this._getBatchOriginFromKey(e),i={x:rn.x*he,y:rn.y*he,z:rn.z*he};return t={allChunkIds:[],allChunkIdsDirty:!0,bounds:new Gt(zi.set(n.x,n.y,n.z).clone(),zi.set(n.x+i.x,n.y+i.y,n.z+i.z).clone()),chunkModes:new Map,key:e,liquidBatchKeys:new Set,lodBuildChunkIds:[],lodChunkIds:new Set,opaqueBatchKeys:new Set,transparentBatchKeys:new Set,visibilityState:"hidden"},this._parentBatches.set(e,t),t}_cleanupParentBatch(e,t){const n=t.opaqueBatchKeys.size>0||t.transparentBatchKeys.size>0||t.liquidBatchKeys.size>0,i=t.lodChunkIds.size>0,r=t.lodBatch!==void 0;n||i||r||this._parentBatches.delete(e)}_rebuildLodBatch(e){const t=this._parentBatches.get(e);if(!t)return;const n=t.lodBuildChunkIds;n.length=0;for(const _ of t.lodChunkIds)this._chunkLodGeometry.has(_)&&this._chunkLodBounds.has(_)&&n.push(_);if(n.sort(),n.length===0){this._disposeLodBatch(t),this._cleanupParentBatch(e,t);return}let i=0,r=0;for(const _ of n){const m=this._chunkLodGeometry.get(_);i+=m.positions.length/un,r+=m.indices.length}const o=new Float32Array(i*un),a=new Float32Array(i*gs),l=new Float32Array(i*er),c=new Float32Array(i),h=i>65535?new Uint32Array(r):new Uint16Array(r);let u=0,d=0;for(let _=0;_<n.length;_++){const m=n[_],g=this._chunkLodGeometry.get(m),x=g.positions.length/un;o.set(g.positions,u*un),a.set(g.normals,u*gs),l.set(g.colors,u*er),c.fill(_,u,u+x);for(let S=0;S<g.indices.length;S++)h[d+S]=g.indices[S]+u;u+=x,d+=g.indices.length}const f=new Dt;if(f.setAttribute("position",new ze(o,un)),f.setAttribute("normal",new ze(a,gs)),f.setAttribute("color",new ze(l,er)),f.setAttribute(Ci,new ze(c,1)),f.setIndex(new ze(h,1)),f.computeBoundingBox(),f.computeBoundingSphere(),t.lodBatch){t.lodBatch.geometry.dispose(),t.lodBatch.geometry=f,t.lodBatch.mesh.geometry=f,t.lodBatch.chunkIds=n,t.lodBatch.chunkVisibilityBits=new Uint32Array(kn(n.length)*4),t.lodBatch.chunkVisibilityScratchBits=new Uint32Array(kn(n.length)*4),t.lodBatch.chunkVisibilityMode=Dn,t.lodBatch.chunkVisibilityRevision++,pn(t.lodBatch.mesh);return}const p=new bt(f,this._lodMaterial);p.name=`lod_batch_${e}`,p.matrixAutoUpdate=!1,p.matrixWorldAutoUpdate=!1,p.frustumCulled=!1,p.onBeforeRender=(_,m,g,x,S)=>{if(S instanceof Xp){const v=t.lodBatch;if(!v)return;S.bindChunkVisibility(v.key,v.chunkVisibilityBits,v.chunkVisibilityMode,v.chunkVisibilityRevision)&&(S.uniformsNeedUpdate=!0)}},pn(p),t.lodBatch={chunkIds:n,chunkVisibilityBits:new Uint32Array(kn(n.length)*4),chunkVisibilityScratchBits:new Uint32Array(kn(n.length)*4),chunkVisibilityMode:Dn,chunkVisibilityRevision:0,geometry:f,key:e,mesh:p,visible:!1}}_disposeLodBatch(e){const t=e.lodBatch;t&&(t.mesh.parent&&this._game.renderer.removeFromScene(t.mesh),t.geometry.dispose(),e.lodBatch=void 0)}_getBatchKeyForChunk(e,t){const n=p0.chunkIdToOriginCoordinate(e);return this._getCachedBatchKey(Math.floor(n.x/(t.x*he))*t.x*he,Math.floor(n.y/(t.y*he))*t.y*he,Math.floor(n.z/(t.z*he))*t.z*he)}_getParentBatchKeyForChunk(e){return this._getBatchKeyForChunk(e,rn)}_getParentBatchKeyForBatchKey(e){const t=this._getBatchOriginFromKey(e);return this._getCachedBatchKey(Math.floor(t.x/(rn.x*he))*rn.x*he,Math.floor(t.y/(rn.y*he))*rn.y*he,Math.floor(t.z/(rn.z*he))*rn.z*he)}_getCachedBatchKey(e,t,n){let i=this._batchKeyCache.get(e);i||(i=new Map,this._batchKeyCache.set(e,i));let r=i.get(t);r||(r=new Map,i.set(t,r));let o=r.get(n);return o||(o=`${e},${t},${n}`,r.set(n,o)),o}_getBatchOriginFromKey(e){const t=e.indexOf(","),n=e.indexOf(",",t+1);return{x:Number(e.slice(0,t)),y:Number(e.slice(t+1,n)),z:Number(e.slice(n+1))}}_roundCapacity(e){let t=1;for(;t<e;)t*=wT;return t}_roundIndexCapacity(e){const t=this._roundCapacity(e),n=t%3;return n===0?t:t+(3-n)}}function Ia(s){return s||null}function PT(s,e){return{chunkId:s,liquidBounds:e==null?void 0:e.liquidBounds,liquidGeometry:Ia((e==null?void 0:e.liquidGeometry)??null),lodBounds:e==null?void 0:e.lodBounds,lodGeometry:Ia((e==null?void 0:e.lodGeometry)??null),opaqueBounds:e==null?void 0:e.opaqueBounds,opaqueGeometry:Ia((e==null?void 0:e.opaqueGeometry)??null),transparentBounds:e==null?void 0:e.transparentBounds,transparentGeometry:Ia((e==null?void 0:e.transparentGeometry)??null)}}class LT{constructor(e){C(this,"host");C(this,"manager");this.host=e,this.manager=new RT(e)}get rendererHost(){return this.host.renderer}get batchMeshCount(){return this.manager.batchMeshCount}setChunkGeometry(e,t){const n=PT(e,t);if(!t){this.manager.removeChunkGeometry(e);return}this.manager.updateChunkGeometry(n.chunkId,n.liquidGeometry??void 0,n.liquidBounds,n.lodGeometry??void 0,n.lodBounds,n.opaqueGeometry??void 0,n.opaqueBounds,n.transparentGeometry??void 0,n.transparentBounds)}clear(){this.manager.clear()}flush(){}collectPreOcclusionChunkModes(e,t,n,i,r){return this.manager.collectPreOcclusionChunkModes(e,t,n,i,r)}applyBatchVisibility(e,t,n,i,r){this.manager.applyBatchVisibility(e,t,n,i,r)}}const BT=16,DT=2,bs="worldEditorInstanceLightLevel",Ss="worldEditorInstanceSkyLight",m0=new ue(1,1,1),eo=new De,Oc=new Gt,$p=new We,zc=new Ot,to=new WeakMap;class kT extends fd{constructor(e,t,n){super(e,t,n),this._setup()}_setup(){this.matrixAutoUpdate=!1,this.matrixWorldAutoUpdate=!1,this.frustumCulled=!0,pn(this),this.instanceMatrix.setUsage(Sn);const e=new fn(new Float32Array(this.count),1);e.setUsage(Sn),this.geometry.setAttribute(bs,e);const t=new fn(new Float32Array(this.count),1);t.setUsage(Sn),this.geometry.setAttribute(Ss,t),this.setColorAt(0,m0),this.instanceColor.setUsage(Sn)}dispose(){return this.geometry.dispose(),this}}class UT{constructor(e){C(this,"host");C(this,"keyToModelUri",new Map);C(this,"keyToTintColor",new Map);C(this,"uriToEntry",new Map);this.host=e}async replaceAll(e){this.clear();const t=new Set;for(const n of e)await this.upsertEntity(n)||t.add(n.key);return t}async upsertEntity(e){this.removeEntity(e.key);let t=this.uriToEntry.get(e.modelUri);if(t||(t=this.createEntry(e.modelUri),this.uriToEntry.set(e.modelUri,t)),t.gltfRoot===null&&(t.gltfRoot=await t.gltfRootPromise),!t.gltfRoot)return t.entities.size===0&&this.uriToEntry.delete(t.modelUri),!1;const n=t.entities.size;return t.entities.add(e.key),t.entityToInstanceIndex.set(e.key,n),t.instanceIndexToEntityKey.set(n,e.key),t.entityToChunkId.set(e.key,e.chunkId),t.entityToLightLevel.set(e.key,e.lightLevel),t.entityToSkyLight.set(e.key,e.skyLight),this.keyToModelUri.set(e.key,e.modelUri),this.keyToTintColor.set(e.key,e.tintColor?e.tintColor.clone():null),t.gltfRoot.traverse(i=>{if(!(i instanceof bt))return;let r=t.sourceToInstancedMesh.get(i);if(!r||n>=r.instanceMatrix.count){const h=r?r.instanceMatrix.count*DT:BT,u=r?r.material:this.host.createRenderMaterial(i.material),d=new kT(i.geometry.clone(),u,h);if(d.castShadow=i.castShadow,d.receiveShadow=i.receiveShadow,r){d.instanceMatrix.array.set(r.instanceMatrix.array);const f=r.geometry.getAttribute(bs),p=d.geometry.getAttribute(bs);for(let x=0;x<f.count;x++)p.setX(x,f.getX(x));const _=r.geometry.getAttribute(Ss),m=d.geometry.getAttribute(Ss);for(let x=0;x<_.count;x++)m.setX(x,_.getX(x));if(r.instanceColor&&d.instanceColor)for(let x=0;x<r.instanceColor.count;x++)d.instanceColor.setXYZ(x,r.instanceColor.getX(x),r.instanceColor.getY(x),r.instanceColor.getZ(x));r.boundingSphere&&(d.boundingSphere=r.boundingSphere.clone());const g=to.get(r);g&&to.set(d,g.clone()),this.host.removeFromScene(r),r.dispose(),t.sourceToInstancedMesh.delete(i)}this.host.addToScene(d),t.sourceToInstancedMesh.set(i,d),r=d}r.setMatrixAt(n,eo.copy(e.worldMatrix).multiply(i.matrixWorld)),r.instanceMatrix.needsUpdate=!0;const o=e.tintColor??m0;r.setColorAt(n,o),r.instanceColor&&(r.instanceColor.needsUpdate=!0);const a=r.geometry.getAttribute(bs);a.setX(n,e.lightLevel),a.needsUpdate=!0;const l=r.geometry.getAttribute(Ss);l.setX(n,e.skyLight),l.needsUpdate=!0,r.count=n+1,r.geometry.boundingSphere===null&&r.geometry.computeBoundingSphere(),r.geometry.boundingBox===null&&r.geometry.computeBoundingBox(),zc.copy(r.geometry.boundingSphere).applyMatrix4(eo.copy(e.worldMatrix).multiply(i.matrixWorld)),Oc.copy(r.geometry.boundingBox).applyMatrix4(eo.copy(e.worldMatrix).multiply(i.matrixWorld)),r.boundingSphere===null?r.boundingSphere=zc.clone():r.boundingSphere.union(zc);const c=to.get(r);c?c.union(Oc):to.set(r,Oc.clone())}),!0}removeEntity(e){const t=this.keyToModelUri.get(e);if(!t)return;const n=this.uriToEntry.get(t);if(!n||!n.entities.has(e)){this.keyToModelUri.delete(e),this.keyToTintColor.delete(e);return}const i=n.entityToInstanceIndex.get(e);if(i===void 0)return;const r=n.entities.size-1,o=n.instanceIndexToEntityKey.get(r);if(o&&o!==e){n.entityToInstanceIndex.set(o,i),n.instanceIndexToEntityKey.set(i,o),n.entityToChunkId.set(o,n.entityToChunkId.get(o)),n.entityToLightLevel.set(o,n.entityToLightLevel.get(o)),n.entityToSkyLight.set(o,n.entityToSkyLight.get(o));for(const l of n.sourceToInstancedMesh.values()){l.getMatrixAt(r,eo),l.setMatrixAt(i,eo);const c=l.geometry.getAttribute(bs);c.setX(i,c.getX(r)),c.needsUpdate=!0;const h=l.geometry.getAttribute(Ss);h.setX(i,h.getX(r)),h.needsUpdate=!0,l.instanceColor&&(l.instanceColor.setXYZ(i,l.instanceColor.getX(r),l.instanceColor.getY(r),l.instanceColor.getZ(r)),l.instanceColor.needsUpdate=!0),l.instanceMatrix.needsUpdate=!0}const a=this.keyToTintColor.get(o);this.keyToTintColor.set(o,a?a.clone():null)}for(const a of n.sourceToInstancedMesh.values())a.count=r;if(n.entities.delete(e),n.entityToInstanceIndex.delete(e),n.entityToChunkId.delete(e),n.entityToLightLevel.delete(e),n.entityToSkyLight.delete(e),n.instanceIndexToEntityKey.delete(r),this.keyToModelUri.delete(e),this.keyToTintColor.delete(e),n.entities.size===0){for(const a of n.sourceToInstancedMesh.values())this.host.removeFromScene(a),a.dispose();this.uriToEntry.delete(n.modelUri)}}updateLighting(e,t){for(const n of this.uriToEntry.values()){for(const i of n.entities){if(t){const a=n.entityToChunkId.get(i);if(a!==void 0&&!t.has(a))continue}const r=e(i);if(!r)continue;n.entityToChunkId.set(i,r.chunkId),n.entityToLightLevel.set(i,r.lightLevel),n.entityToSkyLight.set(i,r.skyLight);const o=n.entityToInstanceIndex.get(i);if(o!==void 0)for(const a of n.sourceToInstancedMesh.values())a.geometry.getAttribute(bs).setX(o,r.lightLevel),a.geometry.getAttribute(Ss).setX(o,r.skyLight)}for(const i of n.sourceToInstancedMesh.values())i.geometry.getAttribute(bs).needsUpdate=!0,i.geometry.getAttribute(Ss).needsUpdate=!0}}updateScenePresence(e,t,n){for(const i of this.uriToEntry.values())for(const r of i.sourceToInstancedMesh.values()){const o=to.get(r),a=!o||this.distanceToBoundsXZSquared(o,e)<=t,l=!!r.boundingSphere&&n.intersectsSphere(r.boundingSphere),c=a&&l,h=r.parent!==null;c&&!h?this.host.addToScene(r):!c&&h&&this.host.removeFromScene(r)}}clear(){for(const e of this.uriToEntry.values())for(const t of e.sourceToInstancedMesh.values())this.host.removeFromScene(t),t.dispose();this.uriToEntry.clear(),this.keyToModelUri.clear(),this.keyToTintColor.clear()}createEntry(e){return{entities:new Set,instanceIndexToEntityKey:new Map,entityToChunkId:new Map,entityToInstanceIndex:new Map,entityToLightLevel:new Map,entityToSkyLight:new Map,gltfRoot:null,gltfRootPromise:this.host.loadEntityModelTemplate(e),modelUri:e,sourceToInstancedMesh:new Map}}distanceToBoundsXZSquared(e,t){return $p.set(Math.max(e.min.x,Math.min(t.x,e.max.x)),Math.max(e.min.z,Math.min(t.y,e.max.z))),t.distanceToSquared($p)}}const Ar=["left","right","top","bottom","front","back"],NT=1,FT=2,OT=4,an=[[1,0,0,0,1,0,0,0,1],[0,0,-1,0,1,0,1,0,0],[-1,0,0,0,1,0,0,0,-1],[0,0,1,0,1,0,-1,0,0],[-1,0,0,0,-1,0,0,0,1],[0,0,-1,0,-1,0,-1,0,0],[1,0,0,0,-1,0,0,0,-1],[0,0,1,0,-1,0,1,0,0],[0,-1,0,1,0,0,0,0,1],[0,0,-1,1,0,0,0,-1,0],[0,1,0,1,0,0,0,0,-1],[0,0,1,1,0,0,0,1,0],[0,1,0,-1,0,0,0,0,1],[0,0,-1,-1,0,0,0,1,0],[0,-1,0,-1,0,0,0,0,-1],[0,0,1,-1,0,0,0,-1,0],[1,0,0,0,0,1,0,-1,0],[0,1,0,0,0,1,1,0,0],[-1,0,0,0,0,1,0,1,0],[0,-1,0,0,0,1,-1,0,0],[1,0,0,0,0,-1,0,1,0],[0,-1,0,0,0,-1,1,0,0],[-1,0,0,0,0,-1,0,-1,0],[0,1,0,0,0,-1,-1,0,0]],zT=1,VT=.8,HT=.5,mn=16,Yp=.3,go=Array.from({length:mn+1},(s,e)=>e===0?0:Yp+(1-Yp)*(e-1)/(mn-1)),Vc={left:{normal:[-1,0,0],vertices:[{pos:[0,1,0],uv:[0,1],ao:{corner:[-.5,.5,-.5],side1:[-.5,.5,.5],side2:[-.5,-.5,-.5]}},{pos:[0,0,0],uv:[0,0],ao:{corner:[-.5,-.5,-.5],side1:[-.5,.5,-.5],side2:[-.5,-.5,.5]}},{pos:[0,1,1],uv:[1,1],ao:{corner:[-.5,.5,.5],side1:[-.5,.5,-.5],side2:[-.5,-.5,.5]}},{pos:[0,0,1],uv:[1,0],ao:{corner:[-.5,-.5,.5],side1:[-.5,.5,.5],side2:[-.5,-.5,-.5]}}]},right:{normal:[1,0,0],vertices:[{pos:[1,1,1],uv:[0,1],ao:{corner:[.5,.5,.5],side1:[.5,.5,-.5],side2:[.5,-.5,.5]}},{pos:[1,0,1],uv:[0,0],ao:{corner:[.5,-.5,.5],side1:[.5,.5,.5],side2:[.5,-.5,-.5]}},{pos:[1,1,0],uv:[1,1],ao:{corner:[.5,.5,-.5],side1:[.5,.5,.5],side2:[.5,-.5,-.5]}},{pos:[1,0,0],uv:[1,0],ao:{corner:[.5,-.5,-.5],side1:[.5,.5,-.5],side2:[.5,-.5,.5]}}]},top:{normal:[0,1,0],vertices:[{pos:[0,1,1],uv:[1,1],ao:{corner:[-.5,.5,.5],side1:[.5,.5,.5],side2:[-.5,.5,-.5]}},{pos:[1,1,1],uv:[0,1],ao:{corner:[.5,.5,.5],side1:[-.5,.5,.5],side2:[.5,.5,-.5]}},{pos:[0,1,0],uv:[1,0],ao:{corner:[-.5,.5,-.5],side1:[.5,.5,-.5],side2:[-.5,.5,.5]}},{pos:[1,1,0],uv:[0,0],ao:{corner:[.5,.5,-.5],side1:[-.5,.5,-.5],side2:[.5,.5,.5]}}]},bottom:{normal:[0,-1,0],vertices:[{pos:[1,0,1],uv:[1,0],ao:{corner:[.5,-.5,.5],side1:[-.5,-.5,.5],side2:[.5,-.5,-.5]}},{pos:[0,0,1],uv:[0,0],ao:{corner:[-.5,-.5,.5],side1:[.5,-.5,.5],side2:[-.5,-.5,-.5]}},{pos:[1,0,0],uv:[1,1],ao:{corner:[.5,-.5,-.5],side1:[-.5,-.5,-.5],side2:[.5,-.5,.5]}},{pos:[0,0,0],uv:[0,1],ao:{corner:[-.5,-.5,-.5],side1:[.5,-.5,-.5],side2:[-.5,-.5,.5]}}]},front:{normal:[0,0,1],vertices:[{pos:[0,0,1],uv:[0,0],ao:{corner:[-.5,-.5,.5],side1:[.5,-.5,.5],side2:[-.5,.5,.5]}},{pos:[1,0,1],uv:[1,0],ao:{corner:[.5,-.5,.5],side1:[-.5,-.5,.5],side2:[.5,.5,.5]}},{pos:[0,1,1],uv:[0,1],ao:{corner:[-.5,.5,.5],side1:[.5,.5,.5],side2:[-.5,-.5,.5]}},{pos:[1,1,1],uv:[1,1],ao:{corner:[.5,.5,.5],side1:[-.5,.5,.5],side2:[.5,-.5,.5]}}]},back:{normal:[0,0,-1],vertices:[{pos:[1,0,0],uv:[0,0],ao:{corner:[.5,-.5,-.5],side1:[-.5,-.5,-.5],side2:[.5,.5,-.5]}},{pos:[0,0,0],uv:[1,0],ao:{corner:[-.5,-.5,-.5],side1:[.5,-.5,-.5],side2:[-.5,.5,-.5]}},{pos:[1,1,0],uv:[0,1],ao:{corner:[.5,.5,-.5],side1:[-.5,.5,-.5],side2:[.5,-.5,-.5]}},{pos:[0,1,0],uv:[1,1],ao:{corner:[-.5,.5,-.5],side1:[.5,.5,-.5],side2:[-.5,-.5,-.5]}}]}},gu=256,Ts=0,Kp=1,_u=.05,GT=-.1,WT=1,_s="worldEditorTime",Ra="worldEditorTextureAtlas",yu="worldEditorFogColor",xu="worldEditorFogEnabled",vu="worldEditorFogFar",bu="worldEditorFogNear",$n="worldEditorAmbientLightColor",Hc="worldEditorAmbientLightIntensity",pl="uChunkVisibleBits",ml="uChunkVisibilityMode",Is="chunkIndex",Md=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`,qT={color:()=>new ue(16777215),enabled:()=>!1,far:()=>0,near:()=>0};function $i(s){return Math.max(Math.ceil(s/128),1)}function Ed(s){return{[pl]:{value:new Uint32Array($i(s)*4)},[ml]:{value:Ts}}}function Td(s){const e=$i(s);return`
    uniform uint ${ml};
    uniform uvec4 ${pl}[${e}];
    attribute float ${Is};

    bool isChunkVisible(uint chunkIndexValue) {
      if (${ml} == uint(${Ts})) {
        return true;
      }

      uint wordIndex = chunkIndexValue >> 5u;
      uvec4 packedWords = ${pl}[int(wordIndex >> 2u)];
      uint packedWord = packedWords[int(wordIndex & 3u)];
      uint bitIndex = chunkIndexValue & 31u;
      return ((packedWord >> bitIndex) & 1u) != 0u;
    }
  `}function wd(s){return{[yu]:{get value(){return s.color()}},[xu]:{get value(){return s.enabled()}},[vu]:{get value(){return s.far()}},[bu]:{get value(){return s.near()}}}}function Ad(){return`
    uniform vec3 ${yu};
    uniform bool ${xu};
    uniform float ${vu};
    uniform float ${bu};

    vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
      if (!${xu}) {
        return color;
      }

      float fogFactor = smoothstep(${bu}, ${vu}, length(worldPos.xz - cameraPosition.xz));
      return mix(color, ${yu}, fogFactor);
    }
  `}class Cd extends Wt{constructor(){super(...arguments);C(this,"boundChunkVisibilityBits",null);C(this,"boundChunkVisibilityMode",-1);C(this,"boundChunkVisibilityRevision",-1)}bindChunkVisibility(t,n,i,r){const o=typeof t=="string"?n:t,a=typeof t=="string"?i:n,l=typeof t=="string"?r:i;return this.boundChunkVisibilityBits===o&&this.boundChunkVisibilityMode===a&&this.boundChunkVisibilityRevision===l?!1:(this.uniforms[pl].value=o,this.uniforms[ml].value=a,this.boundChunkVisibilityBits=o,this.boundChunkVisibilityMode=a,this.boundChunkVisibilityRevision=l,this.uniformsNeedUpdate=!0,!0)}}class Zp extends Cd{constructor(t,n,i){const r=ni.clone(mt.basic.uniforms);Object.assign(r,wd(n),Ed(i));const o=mt.basic.vertexShader.replace("void main() {",`
        ${Td(i)}
        attribute float lightLevel;
        varying float vLightLevel;
        varying vec3 vWorldPos;
        void main() {
          uint chunkIndexValue = uint(${Is} + 0.5);
          if (!isChunkVisible(chunkIndexValue)) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          vLightLevel = lightLevel;
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      `),a=mt.basic.fragmentShader.replace("void main() {",`
          ${Md}
          uniform vec3 ${$n};
          uniform float ${Hc};
          varying float vLightLevel;
          varying vec3 vWorldPos;
          ${Ad()}
          void main() {
        `).replace("#include <opaque_fragment>",`
          vec3 ambientLight = ${$n} * ${Hc};
          vec3 blockLight = ${$n} * vLightLevel * float(${WT});
          outgoingLight *= max(ambientLight, blockLight);
          #include <opaque_fragment>
        `).replace("#include <fog_fragment>",`
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        `);super({uniforms:r,vertexShader:o,fragmentShader:a,side:_n,transparent:t,alphaTest:t?_u:0,vertexColors:!0,fog:!1,lights:!1,clipping:!0,toneMapped:!0,glslVersion:ji});C(this,"colorValue",new ue(16777215));C(this,"ambientColor",new ue(16777215));C(this,"transparentMode");C(this,"atlasTexture",null);C(this,"alphaTestValue",0);C(this,"ambientIntensity",1);this.transparentMode=t,this.defines={...this.defines||{},USE_COLOR:"",USE_UV:"",USE_MAP:"",MAP_UV:"uv",...t?{USE_ALPHATEST:""}:{}},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0],[Is]:[0],lightLevel:[0]},this.bindUniforms()}set textureAtlas(t){this.atlasTexture=t}setAmbientIntensity(t){this.ambientIntensity=t}setAmbientColor(t){this.ambientColor.copy(t)}copy(t){return super.copy(t),this.colorValue.copy(t.colorValue),this.ambientColor.copy(t.ambientColor),this.atlasTexture=t.atlasTexture,this.alphaTestValue=t.alphaTestValue,this.bindUniforms(),this}bindUniforms(){const t=this;this.uniforms.diffuse={value:this.colorValue},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms.map={get value(){return t.atlasTexture}},this.uniforms.alphaTest={get value(){return t.transparentMode?_u:t.alphaTestValue}},this.uniforms[$n]={value:this.ambientColor},this.uniforms[Hc]={get value(){return t.ambientIntensity}}}}class XT extends Cd{constructor(t,n){super({uniforms:ni.merge([wd(t),Ed(n),{[_s]:{value:0},[Ra]:{value:null},[$n]:{value:new ue(1,1,1)}}]),vertexShader:`
        uniform float ${_s};
        ${Td(n)}

        attribute vec4 foamLevel;
        attribute vec4 foamLevelDiag;
        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;

        void main() {
          uint chunkIndexValue = uint(${Is} + 0.5);
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

          float slowTime = ${_s} * 0.5;
          float yOffset = ${GT};
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
        ${Md}
        uniform float ${_s};
        uniform sampler2D ${Ra};
        uniform vec3 ${$n};

        varying vec3 vNormal;
        varying vec3 vViewVector;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec4 vFoamLevel;
        varying vec4 vFoamLevelDiag;
        ${Ad()}

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
          vec4 texColor = texture(${Ra}, vUv);
          if (texColor.a < ${_u.toFixed(1)}) {
            discard;
          }

          float fresnel = pow(1.0 - dot(vNormal, vViewVector), 4.0);
          float waveLighting = sin(dot(vWorldPos.xz, vec2(2.0)) + ${_s} * 0.5) * 0.1;
          vec3 finalColor = texColor.rgb * ${$n};

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
              float foamTime = ${_s} * 0.3;
              vec2 foamUV = vWorldPos.xz * 6.0;

              float foamNoise = noise(foamUV + vec2(foamTime, 0.0)) * 0.5 +
                                noise(foamUV * 2.0 + vec2(0.0, foamTime * 0.5)) * 0.3 +
                                noise(foamUV * 4.0 + vec2(foamTime * 0.3, foamTime * 0.2)) * 0.2;
              float foamPattern = smoothstep(0.3, 0.5, foamNoise);
              float finalFoam = mix(foamIntensity, foamPattern * foamIntensity, smoothstep(0.0, 0.05, minDist));

              vec3 foamColor = vec3(1.0) * ${$n};
              finalColor = mix(finalColor, foamColor, finalFoam * 0.95);
            }
          }

          gl_FragColor = vec4(finalColor, 0.8);
          gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
        }
      `,forceSinglePass:!0,side:jt,transparent:!0,fog:!1,lights:!1,toneMapped:!0,vertexColors:!0,glslVersion:ji});C(this,"ambientColor",new ue(16777215));C(this,"ambientIntensity",1);this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],[Is]:[0],foamLevel:[0,0,0,0],foamLevelDiag:[0,0,0,0],uv:[0,0]}}set textureAtlas(t){this.uniforms[Ra].value=t}setAmbientIntensity(t){this.ambientIntensity=t,this.uniforms[$n].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}setAmbientColor(t){this.ambientColor.copy(t),this.uniforms[$n].value.copy(this.ambientColor).multiplyScalar(this.ambientIntensity)}update(t){this.uniforms[_s].value+=.0075}}class $T extends Cd{constructor(e,t){super({uniforms:ni.merge([ni.clone(mt.basic.uniforms),wd(e),Ed(t)]),vertexShader:mt.basic.vertexShader.replace("void main() {",`
          ${Td(t)}
          varying vec3 vWorldPos;
          void main() {
            uint chunkIndexValue = uint(${Is} + 0.5);
            if (!isChunkVisible(chunkIndexValue)) {
              gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
              return;
            }
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        `),fragmentShader:mt.basic.fragmentShader.replace("void main() {",`
            ${Md}
            varying vec3 vWorldPos;
            ${Ad()}
            void main() {
          `).replace("#include <fog_fragment>",`
            gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, vWorldPos);
          `),side:jt,vertexColors:!0,fog:!1,lights:!1,toneMapped:!0,clipping:!0,glslVersion:ji}),this.defines={...this.defines||{},USE_COLOR:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],[Is]:[0]}}setAmbientIntensity(e){}setAmbientColor(e){}}function Su(s,e,t=qT,n=gu){switch(s){case"lod":return new $T(t,n);case"opaque":{const i=new Zp(!1,t,n);return i.textureAtlas=e,i}case"transparent":{const i=new Zp(!0,t,n);return i.depthWrite=!0,i.textureAtlas=e,i}case"liquid":{const i=new XT(t,n);return i.depthWrite=!0,i.textureAtlas=e,i}}}const YT=Math.ceil(16/he),Pa=[.3,.25,.25,.2],KT={top:"bottom",bottom:"top",left:"right",right:"left",front:"back",back:"front"},Yt={x:0,y:0,z:0},tr={x:0,y:0,z:0},Gn=[0,0,0],Wn=[0,0,0],qn=[0,0,0],Qe=[0,0,0],ys=[0,0,0],ZT=[0,0,0],jT=[0,0,0],JT=[0,0,0],QT={corner:ZT,side1:jT,side2:JT},no=[0,0,0,1],gl=[],_l=[],yl=[],vo=[],dn={x:0,y:0,z:0},La={x:0,y:0,z:0},Zt=2,nn=he/Zt,ew=Zt*Zt*Zt,g0=ew/4,el=[1,1,1];function _0(){return{lodBlockColorCache:new Map,lodCellOccupancy:new Float32Array(nn*nn*nn),lodColorTextureUrisScratch:[],lodColorUniqueTextureUrisScratch:new Set,lodGreedyMask:new Int8Array(nn*nn)}}class tw{constructor(){C(this,"data",new Map)}key(e,t,n){return`${e},${t},${n}`}set(e,t,n,i){this.data.set(this.key(e,t,n),i)}get(e,t,n){const i=this.key(e,t,n);return this.data.has(i)?this.data.get(i):mn}}function nw(s,e,t,n=_0()){const i={liquid:{colors:[],foamLevels:[],foamLevelsDiag:[],indices:[],lightLevels:[],normals:[],positions:[],uvs:[]},opaque:{colors:[],foamLevels:[],foamLevelsDiag:[],indices:[],lightLevels:[],normals:[],positions:[],uvs:[]},transparent:{colors:[],foamLevels:[],foamLevelsDiag:[],indices:[],lightLevels:[],normals:[],positions:[],uvs:[]}};let r=0;const o=fw(s,e,t),a=e.originCoordinate,l={x:0,y:0,z:0},c={x:0,y:0,z:0},h={x:0,y:0,z:0};e.forEachBlock((_,m,g)=>{var A;l.x=a.x+_.x,l.y=a.y+_.y,l.z=a.z+_.z;const x=e.getBlockTypeAt(_.x,_.y,_.z),S=s.getBlockTypeById(x);if(!S)return;r++;const v=hw(l,a,o);if((A=S.trimeshTriangleData)!=null&&A.length){const T=i[ow(S,t)];for(const E of S.trimeshTriangleData){const y=T.positions.length/3;g===0?(Gn[0]=E.v0x,Gn[1]=E.v0y,Gn[2]=E.v0z,Wn[0]=E.v1x,Wn[1]=E.v1y,Wn[2]=E.v1z,qn[0]=E.v2x,qn[1]=E.v2y,qn[2]=E.v2z,Qe[0]=E.normalX,Qe[1]=E.normalY,Qe[2]=E.normalZ):(Da(E.v0x,E.v0y,E.v0z,g,Gn),Da(E.v1x,E.v1y,E.v1z,g,Wn),Da(E.v2x,E.v2y,E.v2z,g,qn),bo(E.normalX,E.normalY,E.normalZ,g,Qe));const M=Xc(E.normalX,E.normalY,E.normalZ),B=t.getFaceUvs(S,M),I=Xc(Qe[0],Qe[1],Qe[2]),O=Jp(I),z=Vc[I].vertices;gl.length=0,_l.length=0,yl.length=0,vo.length=0;const P=uw(s,e,a,l,Qe,t);h.x=l.x+Gn[0],h.y=l.y+Gn[1],h.z=l.z+Gn[2],T.positions.push(h.x,h.y,h.z),T.normals.push(Qe[0],Qe[1],Qe[2]),T.uvs.push(B.u0+(B.u1-B.u0)*E.v0u,B.v0+(B.v1-B.v0)*E.v0v);let k=ka(s,e,l,a,h,S,$c(Gn[0],Gn[1],Gn[2],z),Qe,O,P,o,t);T.colors.push(k[0],k[1],k[2],k[3]),T.lightLevels.push(v),h.x=l.x+Wn[0],h.y=l.y+Wn[1],h.z=l.z+Wn[2],T.positions.push(h.x,h.y,h.z),T.normals.push(Qe[0],Qe[1],Qe[2]),T.uvs.push(B.u0+(B.u1-B.u0)*E.v1u,B.v0+(B.v1-B.v0)*E.v1v),k=ka(s,e,l,a,h,S,$c(Wn[0],Wn[1],Wn[2],z),Qe,O,P,o,t),T.colors.push(k[0],k[1],k[2],k[3]),T.lightLevels.push(v),h.x=l.x+qn[0],h.y=l.y+qn[1],h.z=l.z+qn[2],T.positions.push(h.x,h.y,h.z),T.normals.push(Qe[0],Qe[1],Qe[2]),T.uvs.push(B.u0+(B.u1-B.u0)*E.v2u,B.v0+(B.v1-B.v0)*E.v2v),k=ka(s,e,l,a,h,S,$c(qn[0],qn[1],qn[2],z),Qe,O,P,o,t),T.colors.push(k[0],k[1],k[2],k[3]),T.lightLevels.push(v),T.indices.push(y,y+1,y+2)}return}for(const T of Ar){const E=Vc[T].normal;g===0?(Qe[0]=E[0],Qe[1]=E[1],Qe[2]=E[2]):bo(E[0],E[1],E[2],g,Qe),c.x=l.x+Math.round(Qe[0]),c.y=l.y+Math.round(Qe[1]),c.z=l.z+Math.round(Qe[2]);const y=bn(s,e,a,c.x,c.y,c.z);if(!lw(S,T,y,t))continue;const M=i[aw(S,T,t)],B=M.positions.length/3,I=t.getFaceUvs(S,T),O=Vc[T],z=Jp(Xc(Qe[0],Qe[1],Qe[2])),P=y&&!y.isLiquid&&y.trimeshOcclusionProfile?Id(y,t):0;gl.length=0,_l.length=0,yl.length=0,vo.length=0;let k=[0,0,0,0],V=[0,0,0,0];if(S.isLiquid&&Qe[1]>.5){c.x=l.x+1,c.y=l.y,c.z=l.z;const U=bn(s,e,a,c.x,c.y,c.z);c.x=l.x-1;const X=bn(s,e,a,c.x,c.y,c.z);c.x=l.x,c.z=l.z+1;const j=bn(s,e,a,c.x,c.y,c.z);c.z=l.z-1;const ie=bn(s,e,a,c.x,c.y,c.z);c.x=l.x+1,c.z=l.z+1;const ae=bn(s,e,a,c.x,c.y,c.z);c.z=l.z-1;const de=bn(s,e,a,c.x,c.y,c.z);c.x=l.x-1,c.z=l.z+1;const ve=bn(s,e,a,c.x,c.y,c.z);c.z=l.z-1;const Ve=bn(s,e,a,c.x,c.y,c.z);k=[+!!(U&&!U.isLiquid),+!!(X&&!X.isLiquid),+!!(j&&!j.isLiquid),+!!(ie&&!ie.isLiquid)],V=[+!!(ae&&!ae.isLiquid),+!!(de&&!de.isLiquid),+!!(ve&&!ve.isLiquid),+!!(Ve&&!Ve.isLiquid)]}for(const U of O.vertices){g===0?(ys[0]=U.pos[0],ys[1]=U.pos[1],ys[2]=U.pos[2]):Da(U.pos[0],U.pos[1],U.pos[2],g,ys);const X=g===0?U.ao:cw(U.ao,g,QT);h.x=l.x+ys[0],h.y=l.y+ys[1],h.z=l.z+ys[2],M.positions.push(h.x,h.y,h.z),M.normals.push(Qe[0],Qe[1],Qe[2]);const j=U.uv[0]===0?I.u0:I.u1,ie=U.uv[1]===0?I.v0:I.v1;M.uvs.push(j,ie);const ae=ka(s,e,l,a,h,S,X,Qe,z,P,o,t);M.colors.push(ae[0],ae[1],ae[2],ae[3]),M.lightLevels.push(v),S.isLiquid&&(M.foamLevels.push(...k),M.foamLevelsDiag.push(...V))}M.indices.push(B,B+1,B+2,B+1,B+3,B+2)}});const u=Wc(i.liquid),d=sw(s,e,t,n),f=Wc(i.opaque),p=Wc(i.transparent);return!u&&!d&&!f&&!p?null:{blockCount:r,liquidBounds:u?Ba(u.positions):void 0,liquidGeometry:u,lodBounds:d?Ba(d.positions):void 0,lodGeometry:d,opaqueBounds:f?Ba(f.positions):void 0,opaqueGeometry:f,transparentBounds:p?Ba(p.positions):void 0,transparentGeometry:p}}function iw(s){return{getAverageRgb(e){const t=s[e];if(!t)throw new Error(`TextureAtlas snapshot missing entry for ${e}`);return t.averageRGB},getAverageTransparencyRatio(e){let t=0;for(const n of Ar){const i=s[e.textureUris[n]];if(!i)throw new Error(`TextureAtlas snapshot missing entry for ${e.textureUris[n]}`);t+=i.transparencyRatio}return t/Ar.length},getFaceUvs(e,t){const n=s[e.textureUris[t]];if(!n)throw new Error(`TextureAtlas snapshot missing entry for ${e.textureUris[t]}`);return n},isTextureTransparent(e){const t=s[e];if(!t)throw new Error(`TextureAtlas snapshot missing entry for ${e}`);return t.isTransparent},textureNeedsAlphaTest(e){const t=s[e];if(!t)throw new Error(`TextureAtlas snapshot missing entry for ${e}`);return t.needsAlphaTest}}}function Gc(s,e,t){const n=new Dt;n.setAttribute("position",new ze(s.positions,3)),n.setAttribute("normal",new ze(s.normals,3)),n.setAttribute("uv",new ze(s.uvs,2)),n.setAttribute("color",new ze(s.colors,4)),n.setAttribute("lightLevel",new ze(s.lightLevels,1)),s.foamLevels&&n.setAttribute("foamLevel",new ze(s.foamLevels,4)),s.foamLevelsDiag&&n.setAttribute("foamLevelDiag",new ze(s.foamLevelsDiag,4)),n.setIndex(new ze(s.indices,1)),n.computeBoundingBox(),n.computeBoundingSphere();const i=Su(t,e.texture),r=new bt(n,i);return r.frustumCulled=!0,r.matrixAutoUpdate=!1,r.renderOrder=t==="opaque"?0:t==="transparent"?1:2,r.updateMatrix(),r}function Wc(s){return s.indices.length===0?null:{blockCount:0,colors:new Float32Array(s.colors),foamLevels:s.foamLevels.length>0?new Float32Array(s.foamLevels):void 0,foamLevelsDiag:s.foamLevelsDiag.length>0?new Float32Array(s.foamLevelsDiag):void 0,indices:y0(s.indices),lightLevels:new Float32Array(s.lightLevels),normals:new Float32Array(s.normals),positions:new Float32Array(s.positions),uvs:new Float32Array(s.uvs)}}function Ba(s){let e=s[0],t=s[1],n=s[2],i=s[0],r=s[1],o=s[2];for(let a=3;a<s.length;a+=3){const l=s[a],c=s[a+1],h=s[a+2];l<e&&(e=l),c<t&&(t=c),h<n&&(n=h),l>i&&(i=l),c>r&&(r=c),h>o&&(o=h)}return{min:[e,t,n],max:[i,r,o]}}function y0(s){return(s.length===0?0:s[s.length-1])>65535?new Uint32Array(s):new Uint16Array(s)}function sw(s,e,t,n){n.lodCellOccupancy.fill(0);let i=0,r=0,o=0,a=0,l=0,c=0,h=0,u=0,d=0,f=0,p=0,_=0;for(let E=0;E<he;E++)for(let y=0;y<he;y++)for(let M=0;M<he;M++){const B=s.getBlockTypeById(e.getBlockTypeAt(M,E,y));if(!B)continue;const I=Math.floor(M/Zt),O=Math.floor(E/Zt),z=Math.floor(y/Zt),P=I+nn*(O+nn*z);n.lodCellOccupancy[P]+=x0(B);const k=qc(B,"top",t,n);i+=k[0],r+=k[1],o+=k[2],a++;const V=qc(B,"side",t,n);l+=V[0],c+=V[1],h+=V[2],u++;const U=qc(B,"bottom",t,n);d+=U[0],f+=U[1],p+=U[2],_++}for(let E=0;E<n.lodCellOccupancy.length;E++)n.lodCellOccupancy[E]=n.lodCellOccupancy[E]>=g0?1:0;const m=[],g=[],x=[],S=[],v=[],A={top:a>0?[i/a,r/a,o/a]:el,side:u>0?[l/u,c/u,h/u]:el,bottom:_>0?[d/_,f/_,p/_]:el};if(rw(s,e,A,m,g,x,S,v,n),m.length===0)return null;const T=m.length/3;return{blockCount:0,colors:new Float32Array(x),indices:y0(v),lightLevels:new Float32Array(T),normals:new Float32Array(g),positions:new Float32Array(m),uvs:new Float32Array(S)}}function rw(s,e,t,n,i,r,o,a,l){const c=[nn,nn,nn],h=[0,0,0],u=[0,0,0],d=[0,0,0],f=[0,0,0],p=e.originCoordinate;for(let _=0;_<3;_++){const m=(_+1)%3,g=(_+2)%3;for(u[0]=0,u[1]=0,u[2]=0,u[_]=1,h[0]=0,h[1]=0,h[2]=0,h[_]=-1;h[_]<c[_];){let x=0;for(h[g]=0;h[g]<c[g];h[g]++)for(h[m]=0;h[m]<c[m];h[m]++){const S=jp(s,e,p,h[0],h[1],h[2],l),v=jp(s,e,p,h[0]+u[0],h[1]+u[1],h[2]+u[2],l);S!==0&&v===0?l.lodGreedyMask[x++]=S:S===0&&v!==0?l.lodGreedyMask[x++]=-v:l.lodGreedyMask[x++]=0}h[_]++,x=0;for(let S=0;S<c[g];S++)for(let v=0;v<c[m];){const A=l.lodGreedyMask[x];if(A===0){v++,x++;continue}let T=1;for(;v+T<c[m]&&l.lodGreedyMask[x+T]===A;)T++;let E=1,y=!1;for(;S+E<c[g]&&!y;){for(let X=0;X<T;X++)if(l.lodGreedyMask[x+X+E*c[m]]!==A){y=!0;break}y||E++}h[m]=v,h[g]=S,d[0]=0,d[1]=0,d[2]=0,f[0]=0,f[1]=0,f[2]=0,d[m]=T,f[g]=E;const M=[0,0,0];M[_]=A>0?1:-1;const B=M[1]>0?t.top:M[1]<0?t.bottom:t.side,I=[h[0],h[1],h[2]];A<0&&(I[_]=h[_]);const O=[I[0],I[1],I[2]],z=[I[0]+d[0],I[1]+d[1],I[2]+d[2]],P=[I[0]+f[0],I[1]+f[1],I[2]+f[2]],k=[I[0]+d[0]+f[0],I[1]+d[1]+f[1],I[2]+d[2]+f[2]],V=n.length/3,U=A>0?[O,z,P,k]:[O,P,z,k];for(const X of U)n.push(p.x+X[0]*Zt,p.y+X[1]*Zt,p.z+X[2]*Zt),i.push(M[0],M[1],M[2]),r.push(B[0],B[1],B[2],1),o.push(0,0);a.push(V,V+1,V+2,V+2,V+1,V+3);for(let X=0;X<E;X++)for(let j=0;j<T;j++)l.lodGreedyMask[x+j+X*c[m]]=0;v+=T,x+=T}}}}function jp(s,e,t,n,i,r,o){if(n>=0&&n<nn&&i>=0&&i<nn&&r>=0&&r<nn)return o.lodCellOccupancy[n+nn*(i+nn*r)];const a=t.x+n*Zt,l=t.y+i*Zt,c=t.z+r*Zt;let h=0;for(let u=0;u<Zt;u++)for(let d=0;d<Zt;d++)for(let f=0;f<Zt;f++){const p=_w(s,e,t,a+f,l+u,c+d);if(p&&(h+=x0(p),h>=g0))return 1}return 0}function x0(s){const e=1-s.transparencyRatio;return s.trimeshOcclusionProfile?Math.max(0,Math.min(1,s.trimeshOcclusionProfile.aoOpacity*e)):e}function qc(s,e,t,n){const i=`${s.id}:${e}`,r=n.lodBlockColorCache.get(i);if(r)return r;const o=n.lodColorTextureUrisScratch;o.length=0,e==="top"?o.push(s.textureUris.top):e==="bottom"?o.push(s.textureUris.bottom):o.push(s.textureUris.left,s.textureUris.right,s.textureUris.front,s.textureUris.back);const a=n.lodColorUniqueTextureUrisScratch;a.clear();for(const f of o)f&&a.add(f);let l=0,c=0,h=0,u=0;for(const f of a){const p=t.getAverageRgb(f);l+=p[0],c+=p[1],h+=p[2],u++}const d=u>0?[l/u,c/u,h/u]:el;return n.lodBlockColorCache.set(i,d),d}function ow(s,e){if(s.isLiquid)return"liquid";if(s.isTranslucent)return"transparent";for(const t of Ar){const n=s.textureUris[t];if(e.isTextureTransparent(n)||e.textureNeedsAlphaTest(n))return"transparent"}return"opaque"}function aw(s,e,t){if(s.isLiquid)return"liquid";const n=s.textureUris[e];return s.isTranslucent||t.isTextureTransparent(n)||t.textureNeedsAlphaTest(n)?"transparent":"opaque"}function lw(s,e,t,n){var o;if(!t)return!0;if(t.isLiquid||(o=t.trimeshTriangleData)!=null&&o.length)return t.id!==s.id;const i=KT[e],r=t.textureUris[i];return n.isTextureTransparent(r)||n.textureNeedsAlphaTest(r)}function Jp(s){switch(s){case"top":return zT;case"bottom":return HT;default:return VT}}function Xc(s,e,t){const n=Math.abs(s),i=Math.abs(e),r=Math.abs(t);return i>=n&&i>=r?e>=0?"top":"bottom":n>=r?s>=0?"right":"left":t>=0?"front":"back"}function $c(s,e,t,n){let i=Number.POSITIVE_INFINITY,r=n[0].ao;for(const o of n){const a=s-o.pos[0],l=e-o.pos[1],c=t-o.pos[2],h=a*a+l*l+c*c;h<i&&(i=h,r=o.ao)}return r}function Da(s,e,t,n,i){const r=an[n]??an[0],o=s-.5,a=e-.5,l=t-.5;return i[0]=r[0]*o+r[1]*a+r[2]*l+.5,i[1]=r[3]*o+r[4]*a+r[5]*l+.5,i[2]=r[6]*o+r[7]*a+r[8]*l+.5,i}function bo(s,e,t,n,i){const r=an[n]??an[0];return i[0]=r[0]*s+r[1]*e+r[2]*t,i[1]=r[3]*s+r[4]*e+r[5]*t,i[2]=r[6]*s+r[7]*e+r[8]*t,i}function cw(s,e,t){return bo(s.corner[0],s.corner[1],s.corner[2],e,t.corner),bo(s.side1[0],s.side1[1],s.side1[2],e,t.side1),bo(s.side2[0],s.side2[1],s.side2[2],e,t.side2),t}function ka(s,e,t,n,i,r,o,a,l,c,h,u){let d=c;d+=Yc(s,e,n,i,o.corner,u),d+=Yc(s,e,n,i,o.side1,u),d+=Yc(s,e,n,i,o.side2,u);const f=Math.min(3,d),p=Math.floor(f),_=r.aoIntensity[p]+(r.aoIntensity[Math.min(3,p+1)]-r.aoIntensity[p])*(f-p),m=dw(i,t,a,n,h),g=l*m;return no[0]=Math.max(0,(r.color[0]-_)*g),no[1]=Math.max(0,(r.color[1]-_)*g),no[2]=Math.max(0,(r.color[2]-_)*g),no[3]=1,no}function hw(s,e,t){return vw(s,e,t.lightLevelVolume)/15}function Yc(s,e,t,n,i,r){Yt.x=Math.floor(n.x+i[0]),Yt.y=Math.floor(n.y+i[1]),Yt.z=Math.floor(n.z+i[2]);for(let l=0;l<vo.length;l++)if(gl[l]===Yt.x&&_l[l]===Yt.y&&yl[l]===Yt.z)return vo[l];const o=bn(s,e,t,Yt.x,Yt.y,Yt.z),a=!o||o.isLiquid?0:Id(o,r);return gl.push(Yt.x),_l.push(Yt.y),yl.push(Yt.z),vo.push(a),a}function uw(s,e,t,n,i,r){tr.x=n.x+i[0],tr.y=n.y+i[1],tr.z=n.z+i[2];const o=bn(s,e,t,tr.x,tr.y,tr.z);return!o||o.isLiquid||!o.trimeshOcclusionProfile?0:Id(o,r)}function bn(s,e,t,n,i,r){const o=n-t.x,a=i-t.y,l=r-t.z;if(o>=0&&o<he&&a>=0&&a<he&&l>=0&&l<he)return mw(e,s,o,a,l);Yt.x=n,Yt.y=i,Yt.z=r;const c=s.getChunk(Xe.globalCoordinateToChunkId(Yt));if(c)return s.getBlockTypeById(c.getBlockTypeAt(n&vt,i&vt,r&vt))}function dw(s,e,t,n,i){const r=e.x+t[0],o=e.y+t[1],a=e.z+t[2],l=e.x+(s.x-e.x-.5)*2,c=e.y+(s.y-e.y-.5)*2,h=e.z+(s.z-e.z-.5)*2;let u=l>r?1:l<r?-1:0,d=c>o?1:c<o?-1:0,f=h>a?1:h<a?-1:0;t[0]!==0&&(u=0),t[1]!==0&&(d=0),t[2]!==0&&(f=0);let p=go[Ua(r-n.x,o-n.y,a-n.z,i)]*Pa[0],_=r,m=o,g=a,x=r,S=o,v=a,A=1;return u!==0&&(A===1?_+=u:x+=u,A++),d!==0&&(A===1?m+=d:S+=d,A++),f!==0&&(A===1?g+=f:v+=f),p+=go[Ua(_-n.x,m-n.y,g-n.z,i)]*Pa[1],p+=go[Ua(x-n.x,S-n.y,v-n.z,i)]*Pa[2],p+=go[Ua(r+u-n.x,o+d-n.y,a+f-n.z,i)]*Pa[3],p}function Ua(s,e,t,n){return s>=0&&s<he&&e>=0&&e<he&&t>=0&&t<he?b0(n.skyDistanceVolume,xl(s,e,t))+1:n.skyBoundaryVolume.get(s,e,t)}function fw(s,e,t){const n=new Uint8Array(Math.ceil(fl/2)),i=new tw,r=s.getLightSourcesNear(e.originCoordinate,YT);let o;const a=e.originCoordinate;for(let l=-1;l<=he;l++)for(let c=-1;c<=he;c++){let h=mn;if(dn.x=a.x+l,dn.y=a.y+he,dn.z=a.z+c,s.getChunk(Xe.globalCoordinateToChunkId(dn))){let f=mn;const p=a.y+he-1;for(let _=mn;_>=1;_--){dn.x=a.x+l,dn.y=p+_,dn.z=a.z+c;const m=Qp(s,dn,t);m!==void 0?f=m+f*(1-m):f=Math.min(mn,f+1)}h=f}let d=h;for(let f=he;f>=-1;f--){dn.x=a.x+l,dn.y=a.y+f,dn.z=a.z+c;const p=Qp(s,dn,t);p!==void 0?d=p+d*(1-p):d=Math.min(mn,d+1);const _=Math.max(1,Math.min(mn,Math.round(d)));if(l>=0&&l<he&&f>=0&&f<he&&c>=0&&c<he){em(n,xl(l,f,c),_-1);const m=Math.floor(pw(dn,r))&15;m>0&&(o??(o=new Uint8Array(Math.ceil(fl/2))),em(o,xl(l,f,c),m))}else i.set(l,f,c,_)}}return{lightLevelVolume:o,skyBoundaryVolume:i,skyDistanceVolume:n}}function pw(s,e){let t=0;for(const n of e){const i=s.x-n.position.x+.5,r=s.y-n.position.y+.5,o=s.z-n.position.z+.5;if(i>n.level||i<-n.level||r>n.level||r<-n.level||o>n.level||o<-n.level)continue;const a=i*i+r*r+o*o,l=n.level*n.level;if(a>=l)continue;const c=n.level-Math.sqrt(a);c>t&&(t=c)}return t}function Qp(s,e,t){La.x=e.x&~vt,La.y=e.y&~vt,La.z=e.z&~vt;const n=s.getChunk(Xe.originCoordinateToChunkId(La));if(!n)return;const i=s.getBlockTypeById(n.getBlockTypeAt(e.x&vt,e.y&vt,e.z&vt));if(!(!i||i.isLiquid))return yw(i,n.getBlockRotationAt(e.x&vt,e.y&vt,e.z&vt),t)}function mw(s,e,t,n,i){return e.getBlockTypeById(s.getBlockTypeAt(t,n,i))}function gw(s,e,t,n,i,r){return bn(s,e,t,n,i,r)}function _w(s,e,t,n,i,r){return gw(s,e,t,n,i,r)}function v0(s,e){return Math.max(0,Math.min(1,1-e.getAverageTransparencyRatio(s)))}function Id(s,e){const t=v0(s,e);return s.trimeshOcclusionProfile?s.trimeshOcclusionProfile.aoOpacity*t:t}function yw(s,e,t){const n=v0(s,t);return s.trimeshOcclusionProfile?xw(s,e)*n:n}function xw(s,e){const t=s.trimeshOcclusionProfile;if(!t)return 1;const n=an[e]??an[0],i=n[3],r=n[5];return Math.abs(i)>.5?t.skyOpacityX:Math.abs(r)>.5?t.skyOpacityZ:t.skyOpacityUp}function vw(s,e,t){if(!t)return 0;const n=s.x-e.x,i=s.y-e.y,r=s.z-e.z;return n<0||i<0||r<0||n>=he||i>=he||r>=he?0:b0(t,xl(n,i,r))}function xl(s,e,t){return s+he*(e+he*t)}function b0(s,e){const t=Math.floor(e/2);return e%2===0?s[t]&15:s[t]>>4&15}function em(s,e,t){const n=Math.floor(e/2);e%2===0?s[n]=s[n]&240|t&15:s[n]=s[n]&15|(t&15)<<4}const bw={x:2,y:2,z:2},Sw={x:2,y:2,z:2},Vt={x:8,y:4,z:8},Mw=2,So=new L,S0=new L,tm=new Float32Array(0);class Ew{constructor(e){C(this,"parent");C(this,"atlas",null);C(this,"ambientIntensity",1);C(this,"ambientColor",new ue(16777215));C(this,"fogProvider",null);C(this,"chunkLiquidBounds",new Map);C(this,"chunkLodBounds",new Map);C(this,"chunkOpaqueBounds",new Map);C(this,"chunkTransparentBounds",new Map);C(this,"parentBatches",new Map);C(this,"scratchChunkIds",new Set);C(this,"scratchChunkModes",new Map);C(this,"states",{liquid:Na(),lod:Na(),opaque:Na(),transparent:Na()});this.parent=e}get batchMeshCount(){let e=0;for(const t of this.parentBatches.values())t.lodBatch&&e++;return this.states.liquid.batches.size+e+this.states.opaque.batches.size+this.states.transparent.batches.size}setAtlas(e){if(this.atlas!==e){if(this.atlas=e,!e){this.disposeBatchMeshes();return}for(const t of[this.states.opaque,this.states.transparent,this.states.liquid,this.states.lod])for(const n of t.batchChunkIds.keys())t.dirtyBatchIds.add(n);for(const t of this.parentBatches.values())t.lodChunkIds.size>0&&this.states.lod.dirtyBatchIds.add(t.key)}}clear(){this.disposeBatchMeshes();for(const e of[this.states.opaque,this.states.transparent,this.states.liquid,this.states.lod])e.batchChunkIds.clear(),e.chunkGeometries.clear(),e.dirtyBatchIds.clear(),e.dirtyChunkIdsByBatch.clear();this.chunkLiquidBounds.clear(),this.chunkLodBounds.clear(),this.chunkOpaqueBounds.clear(),this.chunkTransparentBounds.clear(),this.parentBatches.clear(),this.scratchChunkIds.clear(),this.scratchChunkModes.clear()}setChunkGeometry(e,t){this.updateLodGeometry(e,(t==null?void 0:t.lodGeometry)??null,t==null?void 0:t.lodBounds),this.updateKindGeometry("opaque",e,(t==null?void 0:t.opaqueGeometry)??null,t==null?void 0:t.opaqueBounds),this.updateKindGeometry("transparent",e,(t==null?void 0:t.transparentGeometry)??null,t==null?void 0:t.transparentBounds),this.updateKindGeometry("liquid",e,(t==null?void 0:t.liquidGeometry)??null,t==null?void 0:t.liquidBounds)}flush(){this.atlas&&(this.flushKind("opaque"),this.flushKind("transparent"),this.flushKind("liquid"),this.flushLodBatches())}update(e){for(const t of this.states.liquid.batches.values())"update"in t.material&&t.material.update(e)}setAmbientIntensity(e){this.ambientIntensity=e;for(const t of Object.values(this.states))for(const n of t.batches.values())n.material.setAmbientIntensity(e)}setAmbientColor(e){this.ambientColor.copy(e);for(const t of Object.values(this.states))for(const n of t.batches.values())n.material.setAmbientColor(this.ambientColor)}setFogProvider(e){if(this.fogProvider=e,this.atlas){const t=this.atlas;this.atlas=null,this.setAtlas(t)}}applyViewDistanceVisibility(e,t,n,i,r){for(const o of this.parentBatches.values())this.applyParentBatchVisibility(o,e,t,n,i,r)}collectPreOcclusionChunkModes(e,t,n,i,r){r.clear();for(const o of this.parentBatches.values())if(im(o.bounds,e,n)!==-1&&rm(o.bounds,i)!==-1)for(const a of this.getParentBatchChunkIds(o)){const l=this.getChunkVisibilityBounds(a);if(!l||sm(l,e,n)===-1||om(l,i)===-1)continue;const c=Eu(l,e);r.set(a,c>t&&o.lodChunkIds.has(a)?"lod":"normal")}return r}dispose(){this.clear(),this.atlas=null}updateKindGeometry(e,t,n,i){const r=this.states[e],o=this.getBatchId(e,t),a=r.batchChunkIds.get(o)??new Set,l=this.getParentBatchIdForChunk(t),c=r.batchChunkIds.has(o),h=r.chunkGeometries.has(t);n?(r.chunkGeometries.set(t,n),a.add(t),r.batchChunkIds.set(o,a),i?this.getChunkBoundsMap(e).set(t,i):this.getChunkBoundsMap(e).delete(t)):(r.chunkGeometries.delete(t),this.getChunkBoundsMap(e).delete(t),a.delete(t)&&a.size===0&&r.batchChunkIds.delete(o));const u=r.batchChunkIds.has(o);if(e==="lod"?n&&i?this.registerLodChunk(l,t):h&&this.unregisterLodChunk(l,t):!c&&u?this.registerNormalBatch(o,e):c&&!u?this.unregisterNormalBatch(o,e):u&&this.markParentBatchChunkIdsDirty(l),h!==!!n){r.dirtyBatchIds.add(o),r.dirtyChunkIdsByBatch.delete(o);return}const f=r.dirtyChunkIdsByBatch.get(o)??new Set;f.add(t),r.dirtyChunkIdsByBatch.set(o,f),r.dirtyBatchIds.add(o)}updateLodGeometry(e,t,n){const i=this.states.lod,r=this.getParentBatchIdForChunk(e),o=i.chunkGeometries.has(e);t&&n?(i.chunkGeometries.set(e,t),this.chunkLodBounds.set(e,n),this.registerLodChunk(r,e)):(i.chunkGeometries.delete(e),this.chunkLodBounds.delete(e),o&&this.unregisterLodChunk(r,e)),this.states.lod.dirtyBatchIds.add(r)}flushKind(e){const t=this.states[e],n=[...t.dirtyBatchIds];t.dirtyBatchIds.clear();for(const i of n){const r=t.dirtyChunkIdsByBatch.get(i);(!r||r.size===0||!this.updateBatchChunks(e,i,r))&&this.rebuildBatch(e,i),t.dirtyChunkIdsByBatch.delete(i)}}flushLodBatches(){const e=[...this.states.lod.dirtyBatchIds];this.states.lod.dirtyBatchIds.clear();for(const t of e)this.rebuildLodBatch(t)}updateBatchChunks(e,t,n){const i=this.states[e],r=i.batches.get(t),o=i.batchMetadata.get(t);if(!r||!o)return!1;for(const a of n){const l=i.chunkGeometries.get(a),c=o.allocations.get(a);if(!l||!c)return!1;const h=l.positions.length/3,u=l.indices.length;if(h>c.vertexCapacity||u>c.indexCapacity)return!1;this.writeChunkGeometryIntoMergedGeometry(e,r.geometry,c,l),c.vertexCount=h,c.indexCount=u}return Iw(r.geometry,o.allocations),Zc(r.geometry,e,o.chunkIds,this.getChunkBoundsMap(e),t),pn(r),!0}rebuildBatch(e,t){var ve,Ve;const n=this.states[e],i=n.batches.get(t)??null,r=n.batchMetadata.get(t)??null,o=n.batchChunkIds.get(t);if(!o||o.size===0||!this.atlas){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(t)),n.batchMetadata.delete(t);return}const a=[...o].sort(nm);let l=0,c=0,h=0,u=0,d=0,f=0,p=0,_=0,m=0,g=0;for(const Ze of a){const $=n.chunkGeometries.get(Ze);if(!$)continue;const Q=r==null?void 0:r.allocations.get(Ze),se=$.positions.length/3,Le=tl(se,(Q==null?void 0:Q.vertexCapacity)??0),Ce=Kc($.indices.length,(Q==null?void 0:Q.indexCapacity)??0);l+=$.positions.length,c+=$.normals.length,h+=$.uvs.length,u+=$.colors.length,d+=Le,f+=$.lightLevels.length,p+=((ve=$.foamLevels)==null?void 0:ve.length)??0,_+=((Ve=$.foamLevelsDiag)==null?void 0:Ve.length)??0,m+=Le,g+=Ce}if(g===0){i&&(this.parent.remove(i),i.geometry.dispose(),i.material.dispose(),n.batches.delete(t)),n.batchMetadata.delete(t);return}const x=Math.max(tl(m,(r==null?void 0:r.vertexCapacity)??0),1),S=Math.max(Kc(g,(r==null?void 0:r.indexCapacity)??0),1),v=new Map,A=new Float32Array(x*3),T=new Float32Array(x*3),E=new Float32Array(x*2),y=new Float32Array(x*3),M=new Float32Array(x),B=new Float32Array(x),I=e==="liquid"?new Float32Array(x*4):null,O=e==="liquid"?new Float32Array(x*4):null,z=new Uint32Array(S);let P=0,k=0;for(let Ze=0;Ze<a.length;Ze++){const $=a[Ze],Q=n.chunkGeometries.get($);if(!Q)continue;const se=Q.positions.length/3,Le=r==null?void 0:r.allocations.get($),Ce=tl(se,(Le==null?void 0:Le.vertexCapacity)??0),Be=Kc(Q.indices.length,(Le==null?void 0:Le.indexCapacity)??0),xt={chunkIndex:Ze,indexCapacity:Be,indexCount:Q.indices.length,indexOffset:P,vertexCapacity:Ce,vertexCount:se,vertexOffset:k};v.set($,xt),A.set(Q.positions,k*3),T.set(Q.normals,k*3),E.set(Q.uvs,k*2),y.set(Q.colors,k*3),M.fill(Ze,k,k+Ce),B.set(Q.lightLevels,k),I&&Q.foamLevels&&I.set(Q.foamLevels,k*4),O&&Q.foamLevelsDiag&&O.set(Q.foamLevelsDiag,k*4);for(let Ne=0;Ne<Q.indices.length;Ne++)z[P+Ne]=Q.indices[Ne]+k;for(let Ne=Q.indices.length;Ne<Be;Ne++)z[P+Ne]=k;P+=Be,k+=Ce}const V=i??this.createBatchMesh(e),U=V.geometry;this.applyMergedGeometry(U,{positions:A,normals:T,uvs:E,colors:y,chunkIndices:M,lightLevels:B,foamLevels:I,foamLevelsDiag:O,indices:z},{positionCount:l,normalCount:c,uvCount:h,colorCount:u,chunkIndexCount:d,lightLevelCount:f,foamLevelCount:p,foamLevelDiagCount:_,indexCount:Tu(v)}),U.setDrawRange(0,Tu(v)),Zc(U,e,a,this.getChunkBoundsMap(e),t),pn(V);const X=(r==null?void 0:r.chunkVisibilityBits)??new Uint32Array($i(gu)*4),j=(r==null?void 0:r.chunkVisibilityScratchBits)??new Uint32Array($i(gu)*4),ie=(r==null?void 0:r.chunkVisibilityMode)??Ts;let ae=(r==null?void 0:r.chunkVisibilityRevision)??0,de=!r||r.chunkIds.length!==a.length;de&&(X.fill(0),j.fill(0),ae++),V.material.setAmbientColor(this.ambientColor),V.material.setAmbientIntensity(this.ambientIntensity),n.batches.set(t,V),n.batchMetadata.set(t,{allocations:v,chunkIds:a,chunkVisibilityBits:X,chunkVisibilityMode:ie,chunkVisibilityRevision:ae,chunkVisibilityScratchBits:j,visibilityDirty:de,indexCapacity:S,vertexCapacity:x}),V.material.bindChunkVisibility(X,ie,ae,a.length),i||this.parent.add(V)}createBatchMesh(e){const t=new Dt,n=Su(e,this.atlas.texture,this.fogProvider??void 0);n.setAmbientColor(this.ambientColor),n.setAmbientIntensity(this.ambientIntensity);const i=new bt(t,n);return i.frustumCulled=!1,i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.renderOrder=e==="lod"?-1:e==="opaque"?0:e==="transparent"?1:2,i.updateMatrix(),pn(i),i}rebuildLodBatch(e){const t=this.parentBatches.get(e);if(!t||!this.atlas)return;const n=t.lodBuildChunkIds;n.length=0;for(const g of t.lodChunkIds)this.states.lod.chunkGeometries.has(g)&&this.chunkLodBounds.has(g)&&n.push(g);if(n.sort(nm),n.length===0){this.disposeLodBatch(t),this.cleanupParentBatch(e,t);return}let i=0,r=0;for(const g of n){const x=this.states.lod.chunkGeometries.get(g);i+=x.positions.length/3,r+=x.indices.length}const o=new Float32Array(i*3),a=new Float32Array(i*3),l=new Float32Array(i*3),c=new Float32Array(i),h=new Uint32Array(r);let u=0,d=0;for(let g=0;g<n.length;g++){const x=n[g],S=this.states.lod.chunkGeometries.get(x),v=S.positions.length/3;o.set(S.positions,u*3),a.set(S.normals,u*3),l.set(S.colors,u*3),c.fill(g,u,u+v);for(let A=0;A<S.indices.length;A++)h[d+A]=S.indices[A]+u;u+=v,d+=S.indices.length}const f=new Dt;f.setAttribute("position",new ze(o,3)),f.setAttribute("normal",new ze(a,3)),f.setAttribute("color",new ze(l,3)),f.setAttribute("chunkIndex",new ze(c,1)),f.setIndex(new ze(h,1)),Zc(f,"lod",n,this.chunkLodBounds,e);const p=t.lodBatch;if(p){p.geometry.dispose(),p.geometry=f,p.mesh.geometry=f,p.chunkIds=[...n],p.chunkVisibilityBits=new Uint32Array($i(n.length)*4),p.chunkVisibilityScratchBits=new Uint32Array($i(n.length)*4),p.chunkVisibilityMode=Ts,p.chunkVisibilityRevision++,p.visibilityDirty=!0,p.mesh.material.setAmbientColor(this.ambientColor),p.mesh.material.setAmbientIntensity(this.ambientIntensity),pn(p.mesh);return}const _=Su("lod",this.atlas.texture,this.fogProvider??void 0);_.setAmbientColor(this.ambientColor),_.setAmbientIntensity(this.ambientIntensity);const m=new bt(f,_);m.frustumCulled=!1,m.matrixAutoUpdate=!1,m.matrixWorldAutoUpdate=!1,m.renderOrder=-1,m.updateMatrix(),pn(m),this.parent.add(m),t.lodBatch={chunkIds:[...n],geometry:f,mesh:m,chunkVisibilityBits:new Uint32Array($i(n.length)*4),chunkVisibilityMode:Ts,chunkVisibilityRevision:0,chunkVisibilityScratchBits:new Uint32Array($i(n.length)*4),visibilityDirty:!0}}disposeLodBatch(e){const t=e.lodBatch;t&&(this.parent.remove(t.mesh),t.geometry.dispose(),t.mesh.material.dispose(),e.lodBatch=void 0)}applyMergedGeometry(e,t,n){Vi(e,"position",t.positions,3,n.positionCount/3),Vi(e,"normal",t.normals,3,n.normalCount/3),Vi(e,"uv",t.uvs,2,n.uvCount/2),Vi(e,"color",t.colors,3,n.colorCount/3),Vi(e,"chunkIndex",t.chunkIndices,1,n.chunkIndexCount),Vi(e,"lightLevel",t.lightLevels,1,n.lightLevelCount),t.foamLevels?Vi(e,"foamLevel",t.foamLevels,4,n.foamLevelCount/4):e.deleteAttribute("foamLevel"),t.foamLevelsDiag?Vi(e,"foamLevelDiag",t.foamLevelsDiag,4,n.foamLevelDiagCount/4):e.deleteAttribute("foamLevelDiag"),ww(e,t.indices,n.indexCount)}writeChunkGeometryIntoMergedGeometry(e,t,n,i){xs(t,"position",i.positions,n.vertexOffset*3,n.vertexCapacity*3),xs(t,"normal",i.normals,n.vertexOffset*3,n.vertexCapacity*3),xs(t,"uv",i.uvs,n.vertexOffset*2,n.vertexCapacity*2),xs(t,"color",i.colors,n.vertexOffset*3,n.vertexCapacity*3),Aw(t,"chunkIndex",n.chunkIndex,n.vertexOffset,n.vertexCapacity),xs(t,"lightLevel",i.lightLevels,n.vertexOffset,n.vertexCapacity),e==="liquid"&&(xs(t,"foamLevel",i.foamLevels??tm,n.vertexOffset*4,n.vertexCapacity*4),xs(t,"foamLevelDiag",i.foamLevelsDiag??tm,n.vertexOffset*4,n.vertexCapacity*4)),Cw(t,i.indices,n.indexOffset,n.indexCapacity,n.vertexOffset)}getBatchId(e,t){const n=Xe.chunkIdToOriginCoordinate(t),i=Mu(e),r={x:i.x*he,y:i.y*he,z:i.z*he};return[Math.floor(n.x/r.x)*r.x,Math.floor(n.y/r.y)*r.y,Math.floor(n.z/r.z)*r.z].join(",")}getParentBatchIdForChunk(e){const t=Xe.chunkIdToOriginCoordinate(e);return[Math.floor(t.x/(Vt.x*he))*Vt.x*he,Math.floor(t.y/(Vt.y*he))*Vt.y*he,Math.floor(t.z/(Vt.z*he))*Vt.z*he].join(",")}getChunkBoundsMap(e){switch(e){case"liquid":return this.chunkLiquidBounds;case"lod":return this.chunkLodBounds;case"opaque":return this.chunkOpaqueBounds;case"transparent":return this.chunkTransparentBounds}}getChunkVisibilityBounds(e){return this.chunkOpaqueBounds.get(e)??this.chunkTransparentBounds.get(e)??this.chunkLiquidBounds.get(e)??this.chunkLodBounds.get(e)}markParentBatchChunkIdsDirty(e){const t=this.parentBatches.get(e);t&&(t.allChunkIdsDirty=!0)}registerNormalBatch(e,t){const n=this.ensureParentBatch(this.getParentBatchIdForBatch(e));switch(n.allChunkIdsDirty=!0,t){case"opaque":n.opaqueBatchIds.add(e);break;case"transparent":n.transparentBatchIds.add(e);break;case"liquid":n.liquidBatchIds.add(e);break}}unregisterNormalBatch(e,t){const n=this.getParentBatchIdForBatch(e),i=this.parentBatches.get(n);if(i){switch(i.allChunkIdsDirty=!0,t){case"opaque":i.opaqueBatchIds.delete(e);break;case"transparent":i.transparentBatchIds.delete(e);break;case"liquid":i.liquidBatchIds.delete(e);break}this.cleanupParentBatch(n,i)}}registerLodChunk(e,t){const n=this.ensureParentBatch(e);n.lodChunkIds.add(t),n.allChunkIdsDirty=!0}unregisterLodChunk(e,t){const n=this.parentBatches.get(e);n&&(n.lodChunkIds.delete(t),n.allChunkIdsDirty=!0,this.cleanupParentBatch(e,n))}getParentBatchIdForBatch(e){const[t,n,i]=e.split(",").map(Number);return[Math.floor(t/(Vt.x*he))*Vt.x*he,Math.floor(n/(Vt.y*he))*Vt.y*he,Math.floor(i/(Vt.z*he))*Vt.z*he].join(",")}ensureParentBatch(e){const t=this.parentBatches.get(e);if(t)return t;const[n,i,r]=e.split(",").map(Number),o={allChunkIds:[],allChunkIdsDirty:!0,bounds:new Gt(new L(n,i,r),new L(n+Vt.x*he,i+Vt.y*he,r+Vt.z*he)),chunkModes:new Map,key:e,liquidBatchIds:new Set,lodBuildChunkIds:[],lodChunkIds:new Set,opaqueBatchIds:new Set,transparentBatchIds:new Set,visibilityState:"hidden"};return this.parentBatches.set(e,o),o}cleanupParentBatch(e,t){const n=t.opaqueBatchIds.size>0||t.transparentBatchIds.size>0||t.liquidBatchIds.size>0,i=t.lodChunkIds.size>0,r=t.lodBatch!==void 0;n||i||r||this.parentBatches.delete(e)}applyParentBatchVisibility(e,t,n,i,r,o){var h;if(im(e.bounds,t,i)===-1){this.syncParentBatchVisibility(e,"hidden");return}if(rm(e.bounds,r)===-1){this.syncParentBatchVisibility(e,"hidden");return}const a=this.classifyParentChunkVisibility(e,t,n,i,r,o);this.applyBatchSetVisibility(this.states.opaque,e.opaqueBatchIds,a,"normal"),this.applyBatchSetVisibility(this.states.transparent,e.transparentBatchIds,a,"normal"),this.applyBatchSetVisibility(this.states.liquid,e.liquidBatchIds,a,"normal"),this.applyLodBatchVisibility(e,a);const l=this.hasVisibleBatchSet(this.states.opaque,e.opaqueBatchIds)||this.hasVisibleBatchSet(this.states.transparent,e.transparentBatchIds)||this.hasVisibleBatchSet(this.states.liquid,e.liquidBatchIds),c=!!((h=e.lodBatch)!=null&&h.mesh.visible);l&&c?this.syncParentBatchVisibility(e,"mixed"):l?this.syncParentBatchVisibility(e,"normal"):c?this.syncParentBatchVisibility(e,"lod"):this.syncParentBatchVisibility(e,"hidden")}classifyParentChunkVisibility(e,t,n,i,r,o){const a=e.chunkModes;a.clear();for(const l of this.getParentBatchChunkIds(e)){const c=o==null?void 0:o.get(l);if(c){a.set(l,c);continue}const h=this.getChunkVisibilityBounds(l);if(!h){a.set(l,"hidden");continue}if(sm(h,t,i)===-1){a.set(l,"hidden");continue}if(om(h,r)===-1){a.set(l,"hidden");continue}Eu(h,t)>n&&e.lodChunkIds.has(l)?a.set(l,"lod"):a.set(l,"normal")}return a}getParentBatchChunkIds(e){if(!e.allChunkIdsDirty)return e.allChunkIds;const t=this.scratchChunkIds;t.clear();for(const n of e.lodChunkIds)t.add(n);this.collectParentBatchChunkIds(this.states.opaque,e.opaqueBatchIds,t),this.collectParentBatchChunkIds(this.states.transparent,e.transparentBatchIds,t),this.collectParentBatchChunkIds(this.states.liquid,e.liquidBatchIds,t),e.allChunkIds.length=0;for(const n of t)e.allChunkIds.push(n);return e.allChunkIdsDirty=!1,e.allChunkIds}collectParentBatchChunkIds(e,t,n){for(const i of t){const r=e.batchMetadata.get(i);if(r)for(const o of r.chunkIds)n.add(o)}}applyBatchSetVisibility(e,t,n,i){for(const r of t){const o=e.batches.get(r),a=e.batchMetadata.get(r);if(!o||!a)continue;const l=this.applyBatchChunkVisibility(a,o,n,i);this.setMeshScenePresence(o,l)}}applyBatchChunkVisibility(e,t,n,i){e.chunkVisibilityScratchBits.fill(0);let r=0;for(let c=0;c<e.chunkIds.length;c++){const h=e.chunkIds[c];if(n.get(h)===i){const d=c>>5;e.chunkVisibilityScratchBits[d]|=1<<(c&31),r++}}const o=!am(e.chunkVisibilityBits,e.chunkVisibilityScratchBits);o&&e.chunkVisibilityBits.set(e.chunkVisibilityScratchBits);const a=r===e.chunkIds.length?Ts:Kp,l=e.chunkVisibilityMode!==a;return l&&(e.chunkVisibilityMode=a),(e.visibilityDirty||o||l)&&(e.chunkVisibilityRevision++,t.material.bindChunkVisibility(e.chunkVisibilityBits,e.chunkVisibilityMode,e.chunkVisibilityRevision,e.chunkIds.length),e.visibilityDirty=!1),r>0}applyLodBatchVisibility(e,t){const n=e.lodBatch;if(!n)return;n.chunkVisibilityScratchBits.fill(0);let i=0;for(let l=0;l<n.chunkIds.length;l++){const c=n.chunkIds[l];if(t.get(c)!=="lod")continue;const h=l>>5;n.chunkVisibilityScratchBits[h]|=1<<(l&31),i++}const r=!am(n.chunkVisibilityBits,n.chunkVisibilityScratchBits);r&&n.chunkVisibilityBits.set(n.chunkVisibilityScratchBits);const o=i===n.chunkIds.length?Ts:Kp,a=n.chunkVisibilityMode!==o;a&&(n.chunkVisibilityMode=o),(n.visibilityDirty||r||a)&&(n.chunkVisibilityRevision++,n.mesh.material.bindChunkVisibility(n.chunkVisibilityBits,n.chunkVisibilityMode,n.chunkVisibilityRevision,n.chunkIds.length),n.visibilityDirty=!1),this.setMeshScenePresence(n.mesh,i>0)}syncParentBatchVisibility(e,t){if(t==="hidden"){for(const n of e.opaqueBatchIds){const i=this.states.opaque.batches.get(n);i&&this.setMeshScenePresence(i,!1)}for(const n of e.transparentBatchIds){const i=this.states.transparent.batches.get(n);i&&this.setMeshScenePresence(i,!1)}for(const n of e.liquidBatchIds){const i=this.states.liquid.batches.get(n);i&&this.setMeshScenePresence(i,!1)}e.lodBatch&&this.setMeshScenePresence(e.lodBatch.mesh,!1)}e.visibilityState=t}setMeshScenePresence(e,t){const n=e.parent!==null;t&&!n?this.parent.add(e):!t&&n&&this.parent.remove(e),e.visible=t}hasVisibleBatchSet(e,t){for(const n of t){const i=e.batches.get(n);if(i!=null&&i.visible)return!0}return!1}disposeBatchMeshes(){for(const e of[this.states.opaque,this.states.transparent,this.states.liquid]){for(const t of e.batches.values())this.parent.remove(t),t.geometry.dispose(),t.material.dispose();e.batches.clear(),e.batchMetadata.clear(),e.dirtyChunkIdsByBatch.clear()}for(const e of this.parentBatches.values())this.disposeLodBatch(e);this.states.lod.batchMetadata.clear(),this.states.lod.batchChunkIds.clear(),this.states.lod.dirtyChunkIdsByBatch.clear()}}function Na(){return{batchChunkIds:new Map,batches:new Map,batchMetadata:new Map,chunkGeometries:new Map,dirtyBatchIds:new Set,dirtyChunkIdsByBatch:new Map}}function Mu(s){switch(s){case"liquid":return bw;case"lod":return Vt;case"opaque":return Vt;case"transparent":return Sw}}function nm(s,e){const t=Xe.chunkIdToOriginCoordinate(s),n=Xe.chunkIdToOriginCoordinate(e);return t.y!==n.y?t.y-n.y:t.z!==n.z?t.z-n.z:t.x-n.x}function Tw(s,e){const t=Math.max(s.min.x,Math.min(e.x,s.max.x)),n=Math.max(s.min.z,Math.min(e.y,s.max.z)),i=e.x-t,r=e.y-n;return i*i+r*r}function Eu(s,e){const t=Math.max(s.min[0],Math.min(e.x,s.max[0])),n=Math.max(s.min[2],Math.min(e.y,s.max[2])),i=e.x-t,r=e.y-n;return i*i+r*r}function im(s,e,t){if(Tw(s,e)>t)return-1;const n=Math.abs(e.x-s.min.x)>Math.abs(e.x-s.max.x)?s.min.x:s.max.x,i=Math.abs(e.y-s.min.z)>Math.abs(e.y-s.max.z)?s.min.z:s.max.z,r=e.x-n,o=e.y-i;return r*r+o*o<=t?1:0}function sm(s,e,t){if(Eu(s,e)>t)return-1;const n=Math.abs(e.x-s.min[0])>Math.abs(e.x-s.max[0])?s.min[0]:s.max[0],i=Math.abs(e.y-s.min[2])>Math.abs(e.y-s.max[2])?s.min[2]:s.max[2],r=e.x-n,o=e.y-i;return r*r+o*o<=t?1:0}function rm(s,e){let t=!0;for(const n of e.planes){const i=So.set(n.normal.x>=0?s.max.x:s.min.x,n.normal.y>=0?s.max.y:s.min.y,n.normal.z>=0?s.max.z:s.min.z);if(n.distanceToPoint(i)<0)return-1;const r=S0.set(n.normal.x>=0?s.min.x:s.max.x,n.normal.y>=0?s.min.y:s.max.y,n.normal.z>=0?s.min.z:s.max.z);n.distanceToPoint(r)<0&&(t=!1)}return t?1:0}function om(s,e){let t=!0;for(const n of e.planes){const i=So.set(n.normal.x>=0?s.max[0]:s.min[0],n.normal.y>=0?s.max[1]:s.min[1],n.normal.z>=0?s.max[2]:s.min[2]);if(n.distanceToPoint(i)<0)return-1;const r=S0.set(n.normal.x>=0?s.min[0]:s.max[0],n.normal.y>=0?s.min[1]:s.max[1],n.normal.z>=0?s.min[2]:s.max[2]);n.distanceToPoint(r)<0&&(t=!1)}return t?1:0}function tl(s,e){if(s<=e)return e;let t=Math.max(1,e);for(;t<s;)t*=Mw;return t}function Kc(s,e){const t=tl(s,e),n=t%3;return n===0?t:t+(3-n)}function Tu(s){let e=0;for(const t of s.values())e=Math.max(e,t.indexOffset+t.indexCount);return e}function Vi(s,e,t,n,i){const r=s.getAttribute(e);if(!(r instanceof ze)||r.array.length!==t.length||r.itemSize!==n){s.setAttribute(e,new ze(t,n));return}r.array.set(t),r.needsUpdate=!0}function ww(s,e,t){const n=s.getIndex();if(!(n instanceof ze)||n.array.length!==e.length){s.setIndex(new ze(e,1)),s.setDrawRange(0,t);return}n.array.set(e),n.needsUpdate=!0,s.setDrawRange(0,t)}function am(s,e){if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0}function xs(s,e,t,n,i){const r=s.getAttribute(e);if(!(r instanceof ze)||!(r.array instanceof Float32Array))return;const o=r.array;o.fill(0,n,n+i),o.set(t,n),r.needsUpdate=!0}function Aw(s,e,t,n,i){const r=s.getAttribute(e);!(r instanceof ze)||!(r.array instanceof Float32Array)||(r.array.fill(t,n,n+i),r.needsUpdate=!0)}function Cw(s,e,t,n,i){const r=s.getIndex();if(!(r instanceof ze))return;const o=r.array;o.fill(i,t,t+n);for(let a=0;a<e.length;a++)o[t+a]=e[a]+i;r.needsUpdate=!0}function Iw(s,e){s.setDrawRange(0,Tu(e))}function Zc(s,e,t,n,i){if(t.length===0){const[l,c,h]=i.split(",").map(Number),u=Mu(e);s.boundingBox=new Gt(new L(l,c,h),new L(l+u.x*he,c+u.y*he,h+u.z*he)),s.boundingSphere=s.boundingBox.getBoundingSphere(s.boundingSphere??new Ot);return}let r=!1;const o=s.boundingBox??new Gt;for(const l of t){const c=n.get(l);if(c){if(!r){o.min.set(c.min[0],c.min[1],c.min[2]),o.max.set(c.max[0],c.max[1],c.max[2]),r=!0;continue}o.min.x=Math.min(o.min.x,c.min[0]),o.min.y=Math.min(o.min.y,c.min[1]),o.min.z=Math.min(o.min.z,c.min[2]),o.max.x=Math.max(o.max.x,c.max[0]),o.max.y=Math.max(o.max.y,c.max[1]),o.max.z=Math.max(o.max.z,c.max[2])}}if(!r){const[l,c,h]=i.split(",").map(Number),u=Mu(e);o.min.set(l,c,h),o.max.set(l+u.x*he,c+u.y*he,h+u.z*he)}s.boundingBox=o;const a=s.boundingSphere??new Ot;o.getCenter(So),a.center.copy(So),a.radius=So.distanceTo(o.max),s.boundingSphere=a}const Rw=[0,.5,.7,.9],Pw=[1,1,1,1];function lm(s){var a;const e=s.name.toLowerCase(),t=Bw(s.trimeshVertices,s.trimeshIndices,s.customColliderOptions),n=t.vertices,i=t.indices,r=Lw(s.textureUri),o=s.isMultiTexture?{left:`${r}/-x.png`,right:`${r}/+x.png`,top:`${r}/+y.png`,bottom:`${r}/-y.png`,front:`${r}/+z.png`,back:`${r}/-z.png`}:{left:r,right:r,top:r,bottom:r,front:r,back:r};return{...s,aoIntensity:Rw,axisPassMask:((a=t.profile)==null?void 0:a.axisPassMask)??0,color:Pw,isTranslucent:!!s.isLiquid||e.includes("glass")||e.includes("leaves")||e.includes("water")||e.includes("ice"),transparencyRatio:0,trimeshIndices:i,trimeshOcclusionProfile:t.profile,trimeshTriangleData:Uw(n,i),trimeshVertices:n,textureUris:o}}function Lw(s){return s.startsWith("http://")||s.startsWith("https://")?s:`/voxcinder/world-editor/${s.startsWith("/")?s.slice(1):s}`}function Bw(s,e,t){const n=cm(s),i=hm(e);if(n&&i)return{vertices:n,indices:i,profile:um(n,i)};if(!t||t.shape!=="trimesh")return{};const r=cm(Dw(t,"vertices")),o=hm(kw(t,"indices"));return{vertices:r,indices:o,profile:r&&o?um(r,o):void 0}}function cm(s){if(s)return s instanceof Float32Array?s.slice():new Float32Array(s)}function hm(s){if(s)return s instanceof Uint32Array?s.slice():new Uint32Array(s)}function Dw(s,e){const t=s[e];if(t instanceof Float32Array||Array.isArray(t))return t}function kw(s,e){const t=s[e];if(t instanceof Uint32Array||Array.isArray(t))return t}function Uw(s,e){if(!s||!e)return;const t=e.length/3,n=new Array(t);for(let i=0;i<t;i++){const r=e[i*3]*3,o=e[i*3+1]*3,a=e[i*3+2]*3,l=s[r],c=s[r+1],h=s[r+2],u=s[o],d=s[o+1],f=s[o+2],p=s[a],_=s[a+1],m=s[a+2],g=u-l,x=d-c,S=f-h,v=p-l,A=_-c,T=m-h,E=x*T-S*A,y=S*v-g*T,M=g*A-x*v,B=Math.sqrt(E*E+y*y+M*M)||1,I=Math.abs(E),O=Math.abs(y),z=Math.abs(M),P=O>=I&&O>=z,k=!P&&I>=z;n[i]={normalX:E/B,normalY:y/B,normalZ:M/B,v0x:l,v0y:c,v0z:h,v1x:u,v1y:d,v1z:f,v2x:p,v2y:_,v2z:m,v0u:P?l:k?h:l,v0v:P?h:c,v1u:P?u:k?f:u,v1v:P?f:d,v2u:P?p:k?m:p,v2v:P?m:_}}return n}function um(s,e){if(e.length===0)return{aoOpacity:1,axisPassMask:0,skyOpacityUp:1,skyOpacityX:1,skyOpacityZ:1};const t=4,n=new Uint8Array(t*t*t);for(let c=0;c<e.length;c+=3){const h=e[c]*3,u=e[c+1]*3,d=e[c+2]*3,f=Math.max(0,Math.min(1,Math.min(s[h],s[u],s[d]))),p=Math.max(0,Math.min(1,Math.min(s[h+1],s[u+1],s[d+1]))),_=Math.max(0,Math.min(1,Math.min(s[h+2],s[u+2],s[d+2]))),m=Math.max(0,Math.min(1,Math.max(s[h],s[u],s[d]))),g=Math.max(0,Math.min(1,Math.max(s[h+1],s[u+1],s[d+1]))),x=Math.max(0,Math.min(1,Math.max(s[h+2],s[u+2],s[d+2]))),S=Math.max(0,Math.min(t-1,Math.floor(f*t))),v=Math.max(0,Math.min(t-1,Math.floor(p*t))),A=Math.max(0,Math.min(t-1,Math.floor(_*t))),T=Math.max(S,Math.max(0,Math.min(t-1,Math.ceil(m*t)-1))),E=Math.max(v,Math.max(0,Math.min(t-1,Math.ceil(g*t)-1))),y=Math.max(A,Math.max(0,Math.min(t-1,Math.ceil(x*t)-1)));for(let M=A;M<=y;M++)for(let B=v;B<=E;B++)for(let I=S;I<=T;I++)n[I+t*(B+t*M)]=1}let i=0;for(let c=0;c<n.length;c++)i+=n[c];let r=0;for(let c=0;c<t;c++)for(let h=0;h<t;h++)for(let u=0;u<t;u++)if(n[h+t*(u+t*c)]!==0){r++;break}let o=0;for(let c=0;c<t;c++)for(let h=0;h<t;h++)for(let u=0;u<t;u++)if(n[u+t*(h+t*c)]!==0){o++;break}let a=0;for(let c=0;c<t;c++)for(let h=0;h<t;h++)for(let u=0;u<t;u++)if(n[h+t*(c+t*u)]!==0){a++;break}let l=0;return o<t*t&&(l|=NT),r<t*t&&(l|=FT),a<t*t&&(l|=OT),{aoOpacity:i/(t*t*t),axisPassMask:l,skyOpacityUp:r/(t*t),skyOpacityX:o/(t*t),skyOpacityZ:a/(t*t)}}const Nw=15,nr=Math.ceil((Nw+1)/he);class jc{constructor(){C(this,"_chunks",new Map);C(this,"_blockTypes",new Map);C(this,"_blockTypeList",[]);C(this,"_entities");C(this,"_lightSourcesCache",null)}load(e,t){var n;this._chunks.clear(),this._entities=e.entities?{...e.entities}:void 0,this._setBlockTypes((n=e.blockTypes)!=null&&n.length?Sd(e.blockTypes,t):t);for(const[i,r]of Object.entries(e.blocks??{})){const o=wn(r);o!==0&&this.setBlock(Nl(i),o,au(r))}}toJson(){const e={};for(const t of this._chunks.values())t.forEachBlock((n,i,r)=>{const o={x:t.originCoordinate.x+n.x,y:t.originCoordinate.y+n.y,z:t.originCoordinate.z+n.z};e[Dr(o)]=r===0?i:{i,r}});return{blockTypes:this._blockTypeList.map(t=>({id:t.id,name:t.name,textureUri:t.textureUri,isLiquid:t.isLiquid,lightLevel:t.lightLevel,...t.trimeshIndices?{trimeshIndices:Array.from(t.trimeshIndices)}:{},...t.trimeshVertices?{trimeshVertices:Array.from(t.trimeshVertices)}:{},durability:t.durability,customColliderOptions:t.customColliderOptions,isCustom:t.isCustom,isMultiTexture:t.isMultiTexture})),blocks:e,...this._entities?{entities:this._entities}:{}}}get blockTypes(){return this._blockTypeList}addBlockType(e){const t=lm(e);return this._blockTypeList.push(t),this._blockTypes.set(t.id,t),this._lightSourcesCache=null,t}get chunkIds(){return[...this._chunks.keys()]}get entities(){return this._entities?{...this._entities}:{}}toSnapshot(){return{blockTypes:this._blockTypeList.map(dm),chunks:this.chunkIds.map(e=>{const t=this._chunks.get(e);return{chunkId:e,originCoordinate:{...t.originCoordinate},blocks:t.cloneBlocks(),rotations:t.cloneRotations()}}),...this._entities?{entities:{...this._entities}}:{}}}loadSnapshot(e){this._chunks.clear(),this._blockTypes.clear(),this._blockTypeList=e.blockTypes.map(dm);for(const t of this._blockTypeList)this._blockTypes.set(t.id,t);for(const t of e.chunks)this._chunks.set(t.chunkId,new Xe(t.originCoordinate,t.blocks,t.rotations));this._entities=e.entities?{...e.entities}:void 0,this._lightSourcesCache=null}getChunkSnapshot(e){const t=this._chunks.get(e);return t?{chunkId:e,originCoordinate:{...t.originCoordinate},blocks:t.cloneBlocks(),rotations:t.cloneRotations()}:null}applyChunkSnapshot(e,t){if(!t){this._chunks.delete(e),this._lightSourcesCache=null;return}this._chunks.set(e,new Xe({...t.originCoordinate},new Uint16Array(t.blocks),new Uint8Array(t.rotations))),this._lightSourcesCache=null}setEntities(e){this._entities=e?{...e}:void 0}setEntity(e,t){this._entities||(this._entities={}),this._entities[e]=t}deleteEntity(e){this._entities&&(delete this._entities[e],Object.keys(this._entities).length===0&&(this._entities=void 0))}getChunk(e){return this._chunks.get(e)}getBlockTypeById(e){return e===0?void 0:this._blockTypes.get(e)}getBlockType(e){const t=this.getBlockTypeId(e);return t===0?void 0:this._blockTypes.get(t)}getBlockTypeId(e){const t=this._chunks.get(Xe.globalCoordinateToChunkId(e));return t?t.getBlockType(Xe.globalCoordinateToLocalCoordinate(e)):0}getBlockRotation(e){const t=this._chunks.get(Xe.globalCoordinateToChunkId(e));return t?t.getBlockRotation(Xe.globalCoordinateToLocalCoordinate(e)):0}hasBlock(e){return this.getBlockTypeId(e)!==0}setBlock(e,t,n=0){const i=Xe.globalCoordinateToChunkId(e),r=Xe.globalCoordinateToLocalCoordinate(e);let o=this._chunks.get(i);o||(o=new Xe(Xe.globalCoordinateToOriginCoordinate(e)),this._chunks.set(i,o)),o.setBlock(r,t),o.setBlockRotation(r,t===0?0:n),o.isEmpty()&&this._chunks.delete(i),this._lightSourcesCache=null}deleteBlock(e){this.setBlock(e,0)}getChunksNear(e,t){const n=Xe.globalCoordinateToOriginCoordinate(e),i=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=this._chunks.get(Xe.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&i.push(l)}return i}getAllLightSources(){if(this._lightSourcesCache)return this._lightSourcesCache;const e=[];for(const t of this._chunks.values())t.forEachBlock((n,i)=>{const r=this._blockTypes.get(i);r!=null&&r.lightLevel&&e.push({position:{x:t.originCoordinate.x+n.x,y:t.originCoordinate.y+n.y,z:t.originCoordinate.z+n.z},level:r.lightLevel})});return this._lightSourcesCache=e,e}getLightSourcesNear(e,t){const n=Xe.globalCoordinateToOriginCoordinate(e),i=[];for(let r=-t;r<=t;r++)for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){const l=this._chunks.get(Xe.originCoordinateToChunkId({x:n.x+a*16,y:n.y+r*16,z:n.z+o*16}));l&&l.forEachBlock((c,h)=>{const u=this._blockTypes.get(h);u!=null&&u.lightLevel&&i.push({position:{x:l.originCoordinate.x+c.x,y:l.originCoordinate.y+c.y,z:l.originCoordinate.z+c.z},level:u.lightLevel})})}return i}getAffectedChunkIds(e,t,n){const i=new Set,r=Xe.globalCoordinateToChunkId(e),o=Xe.globalCoordinateToLocalCoordinate(e),a=t===0?void 0:this._blockTypes.get(t),l=n===0?void 0:this._blockTypes.get(n);if(i.add(r),(a==null?void 0:a.lightLevel)!==(l==null?void 0:l.lightLevel)){const d=Math.max((a==null?void 0:a.lightLevel)??0,(l==null?void 0:l.lightLevel)??0),f=Math.min(d,he);for(let p=-nr;p<=nr;p++)for(let _=-nr;_<=nr;_++)for(let m=-nr;m<=nr;m++){const g=Xe.globalCoordinateToChunkId({x:e.x+p*f,y:e.y+_*f,z:e.z+m*f});this._chunks.has(g)&&i.add(g)}}const c=[0],h=[0],u=[0];o.x===0?c.push(-1):o.x===vt&&c.push(1),o.y===0?h.push(-1):o.y===vt&&h.push(1),o.z===0?u.push(-1):o.z===vt&&u.push(1);for(const d of c)for(const f of h)for(const p of u){if(d===0&&f===0&&p===0)continue;const _=Xe.globalCoordinateToChunkId({x:e.x+d,y:e.y+f,z:e.z+p});this._chunks.has(_)&&i.add(_)}return[...i]}_setBlockTypes(e){this._blockTypes.clear(),this._blockTypeList=e.map(lm);for(const t of this._blockTypeList)this._blockTypes.set(t.id,t)}}function dm(s){const e=s.trimeshIndices?new Uint32Array(s.trimeshIndices):void 0,t=s.trimeshVertices?new Float32Array(s.trimeshVertices):void 0;return{id:s.id,name:s.name,textureUri:s.textureUri,isLiquid:s.isLiquid,lightLevel:s.lightLevel,durability:s.durability,customColliderOptions:s.customColliderOptions,isCustom:s.isCustom,isMultiTexture:s.isMultiTexture,textureUris:{...s.textureUris},aoIntensity:[...s.aoIntensity],axisPassMask:s.axisPassMask,color:[...s.color],isTranslucent:s.isTranslucent,transparencyRatio:s.transparencyRatio,...s.trimeshOcclusionProfile?{trimeshOcclusionProfile:{...s.trimeshOcclusionProfile}}:{},...e?{trimeshIndices:e}:{},...s.trimeshTriangleData?{trimeshTriangleData:s.trimeshTriangleData.map(n=>({...n}))}:{},...t?{trimeshVertices:t}:{}}}const wu="worldEditorColorMap",Au="worldEditorUseColorMap",Cu="worldEditorAlphaMap",Iu="worldEditorUseAlphaMap",nl="worldEditorAlphaTest",Ru="worldEditorEmissive",Pu="worldEditorEmissiveIntensity",Lu="worldEditorEmissiveMap",Bu="worldEditorUseEmissiveMap",Du="worldEditorFogColor",ku="worldEditorFogEnabled",Uu="worldEditorFogNear",Nu="worldEditorFogFar",Mo="vWorldEditorColorMapUv",vl="vWorldEditorEmissiveMapUv",bl="vWorldEditorWorldPos",Rd=mt.basic,Fw=new We,Ow=Rd.vertexShader.replace("#include <uv_pars_vertex>",`
      #include <uv_pars_vertex>
      varying vec2 ${Mo};
      varying vec2 ${vl};
      varying vec3 ${bl};
    `).replace("#include <uv_vertex>",`
      #include <uv_vertex>
      ${Mo} = uv;
      ${vl} = uv;
    `).replace("#include <project_vertex>",`
      vec4 worldEditorWorldPosition = vec4(transformed, 1.0);
      #ifdef USE_BATCHING
        worldEditorWorldPosition = batchingMatrix * worldEditorWorldPosition;
      #endif
      #ifdef USE_INSTANCING
        worldEditorWorldPosition = instanceMatrix * worldEditorWorldPosition;
      #endif
      worldEditorWorldPosition = modelMatrix * worldEditorWorldPosition;
      ${bl} = worldEditorWorldPosition.xyz;
      #include <project_vertex>
    `),zw=Rd.fragmentShader.replace("#include <map_pars_fragment>",`
      uniform sampler2D ${wu};
      uniform bool ${Au};
      uniform sampler2D ${Cu};
      uniform bool ${Iu};
      uniform float ${nl};
      uniform vec3 ${Ru};
      uniform float ${Pu};
      uniform sampler2D ${Lu};
      uniform bool ${Bu};
      varying vec2 ${Mo};
      varying vec2 ${vl};
      varying vec3 ${bl};
      uniform vec3 ${Du};
      uniform bool ${ku};
      uniform float ${Uu};
      uniform float ${Nu};

      vec3 applyWorldEditorFog(vec3 color, vec3 worldPos) {
        if (!${ku}) {
          return color;
        }

        float fogFactor = smoothstep(${Uu}, ${Nu}, length(worldPos.xz - cameraPosition.xz));
        return mix(color, ${Du}, fogFactor);
      }
    `).replace("#include <alphamap_pars_fragment>","").replace("#include <alphatest_pars_fragment>","").replace("#include <map_fragment>",`
      if (${Au}) {
        vec4 sampledDiffuseColor = texture2D(${wu}, ${Mo});
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
      if (${Iu}) {
        diffuseColor.a *= texture2D(${Cu}, ${Mo}).g;
      }
    `).replace("#include <alphatest_fragment>",`
      if (${nl} > 0.0 && diffuseColor.a < ${nl}) {
        discard;
      }
    `).replace("#include <opaque_fragment>",`
      vec3 emissiveColor = ${Ru} * ${Pu};
      if (${Bu}) {
        emissiveColor *= texture2D(${Lu}, ${vl}).rgb;
      }
      outgoingLight += emissiveColor;
      #include <opaque_fragment>
    `).replace("#include <fog_fragment>",`
      gl_FragColor.rgb = applyWorldEditorFog(gl_FragColor.rgb, ${bl});
    `);class Vw extends Wt{constructor(t){const{alphaMap:n,alphaTest:i,color:r,emissive:o,emissiveIntensity:a,emissiveMap:l,fogUniformProvider:c,map:h,...u}=t||{};super({...u,uniforms:ni.clone(Rd.uniforms),vertexShader:Ow,fragmentShader:zw,fog:!1,lights:!1,clipping:!0,toneMapped:!0});C(this,"_color");C(this,"_emissive");C(this,"_uvScrollSpeed",Fw);C(this,"_colorMap");C(this,"_alphaMap");C(this,"_alphaTestValue");C(this,"_emissiveMap");C(this,"_emissiveIntensityValue");C(this,"_fogUniformProvider");C(this,"_shaderProcessors",[]);this.defines={...this.defines||{},USE_UV:""},this.defaultAttributeValues={...this.defaultAttributeValues,color:[1,1,1],uv:[0,0]},this._color=new ue(r??16777215),this._colorMap=h??null,this._alphaMap=n??null,this._alphaTestValue=i??0,this._emissive=new ue(o??0),this._emissiveMap=l??null,this._emissiveIntensityValue=a??1,this._fogUniformProvider=c??null,this.bindUniforms()}get color(){return this._color}get customEmissive(){return this._emissive}get customEmissiveIntensity(){return this._emissiveIntensityValue}addShaderProcessor(t,n=!1){n?this._shaderProcessors.push(t):this._shaderProcessors.unshift(t),this.needsUpdate=!0}onBeforeCompile(t,n){for(const i of this._shaderProcessors)i(t,n)}customProgramCacheKey(){return`${super.customProgramCacheKey()}|processors=${this._shaderProcessors.map(t=>t.toString()).join("|")}`}bindUniforms(){const t=this;this.uniforms.diffuse={value:this._color},this.uniforms.opacity={get value(){return t.opacity}},this.uniforms[wu]={get value(){return t._colorMap}},this.uniforms[Au]={get value(){return t._colorMap!==null}},this.uniforms[Cu]={get value(){return t._alphaMap}},this.uniforms[Iu]={get value(){return t._alphaMap!==null}},this.uniforms[nl]={get value(){return t._alphaTestValue}},this.uniforms[Ru]={value:this._emissive},this.uniforms[Pu]={get value(){return t._emissiveIntensityValue}},this.uniforms[Lu]={get value(){return t._emissiveMap}},this.uniforms[Bu]={get value(){return t._emissiveMap!==null}},this.uniforms[Du]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.color())??t.color}},this.uniforms[ku]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.enabled())??!1}},this.uniforms[Uu]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.near())??0}},this.uniforms[Nu]={get value(){var n;return((n=t._fogUniformProvider)==null?void 0:n.far())??0}},this.uniforms.uvScroll={value:this._uvScrollSpeed}}}function ct(s,e,t){const n=t*2+1;return(e+t)*n+(s+t)}function As(s){return Math.max(0,Math.min(1,s))}function Pd(s,e,t,n){const i=s[ct(e,t,n)];let r=0;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)o===0&&a===0||Math.abs(e+o)>n||Math.abs(t+a)>n||(r=Math.max(r,Math.abs(i-s[ct(e+o,t+a,n)])));return r}function Sl(s,e,t,n,i=0){let r={x:0,z:0},o=-1/0;for(let a=-s+e;a<=s-e;a++)for(let l=-s+e;l<=s-e;l++){if(n&&Math.hypot(a-n.x,l-n.z)<i)continue;const c=t(a,l);c>o&&(o=c,r={x:a,z:l})}return r}function Fu(s,e,t,n){let i=0,r=0;for(let o=e.x-t;o<=e.x+t;o++)for(let a=e.z-t;a<=e.z+t;a++)Math.abs(o)>n||Math.abs(a)>n||(i+=s[ct(o,a,n)],r+=1);return r>0?i/r:0}function M0(s,e,t,n,i){const r=s*2+1,o=new Int16Array(r*r),a=new Float32Array(r*r);for(let c=-s;c<=s;c++)for(let h=-s;h<=s;h++){const u=Math.hypot(c,h)/Math.max(1,s),d=Math.abs(i(e+101,Math.floor(c*.4),Math.floor(h*.4))-.5)*3.2,f=i(e+211,c,h)*1.8,p=Math.round(t+d+f-Math.max(0,u-.72)*5.5);o[ct(c,h,s)]=p}for(let c=-s;c<=s;c++)for(let h=-s;h<=s;h++){const u=ct(c,h,s),d=Pd(o,c,h,s);a[u]=o[u]*.18+Math.max(0,1-d/5)*2.6-Hw(c,h,s)*1.4}const l=Sl(s,Math.max(4,Math.floor(s*.28)),(c,h)=>a[ct(c,h,s)]);return{height:o,suitability:a,center:l}}function Hw(s,e,t){return Math.max(0,Math.hypot(s,e)/Math.max(1,t)-.35)}function fm(s,e,t){const n=[];e&&n.push(0);const i=-s+3,r=s-3,o=Math.max(4,Math.round(s/6));let a=i;for(;a<=r;){const l=Math.min(r,a+8);let c=a,h=1/0;for(let u=a;u<=l;u++){if(n.some(p=>Math.abs(p-u)<6))continue;const d=e?Math.abs(u)*.03:Math.abs(u)*.02,f=t(u)+d;f<h&&(h=f,c=u)}n.push(c),a=c+Math.max(6,Math.round((r-i)/o))}return n.push(i),n.push(r),[...new Set(n)].sort((l,c)=>l-c)}function pm(s,e,t,n){let i=0;for(let r=-e;r<=e;r++)i+=s[ct(n?t:r,n?r:t,e)];return i}function Gw(s,e,t,n){const i=`${s.x},${s.z}`,r=`${e.x},${e.z}`,o=[s],a=new Map,l=new Map([[i,0]]);for(;o.length>0;){o.sort((f,p)=>{const _=`${f.x},${f.z}`,m=`${p.x},${p.z}`,g=(l.get(_)??1/0)+Math.abs(f.x-e.x)+Math.abs(f.z-e.z),x=(l.get(m)??1/0)+Math.abs(p.x-e.x)+Math.abs(p.z-e.z);return g-x});const u=o.shift();if(!u)break;const d=`${u.x},${u.z}`;if(d===r)break;for(const[f,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const _={x:u.x+f,z:u.z+p};if(Math.abs(_.x)>t||Math.abs(_.z)>t)continue;const m=`${_.x},${_.z}`,g=n[ct(_.x,_.z,t)],x=(l.get(d)??1/0)+g;x>=(l.get(m)??1/0)||(l.set(m,x),a.set(m,d),o.some(S=>S.x===_.x&&S.z===_.z)||o.push(_))}}const c=[];let h=r;for(;h;){const[u,d]=h.split(",").map(Number);if(c.push({x:u,z:d}),h===i)break;h=a.get(h)}return c.reverse()}function _o(s,e,t,n,i=0){const r=s.maxX-s.minX+1,o=s.maxZ-s.minZ+1;if(r<e*2||o<t*2)return[s];if(r>o?!0:o>r?!1:n(i)>.5){const u=s.minX+e-1,d=s.maxX-e;if(u>=d)return[s];const f=u+Math.floor(n(i+1)*Math.max(1,d-u+1));return[..._o({minX:s.minX,maxX:f,minZ:s.minZ,maxZ:s.maxZ},e,t,n,i+11),..._o({minX:f+1,maxX:s.maxX,minZ:s.minZ,maxZ:s.maxZ},e,t,n,i+19)]}const l=s.minZ+t-1,c=s.maxZ-t;if(l>=c)return[s];const h=l+Math.floor(n(i+2)*Math.max(1,c-l+1));return[..._o({minX:s.minX,maxX:s.maxX,minZ:s.minZ,maxZ:h},e,t,n,i+23),..._o({minX:s.minX,maxX:s.maxX,minZ:h+1,maxZ:s.maxZ},e,t,n,i+31)]}function Ou(s){return{x:Math.floor((s.minX+s.maxX)/2),z:Math.floor((s.minZ+s.maxZ)/2)}}const Jc=[{id:"overworld",label:"Overworld",description:"Minecraft-like overworld with biomes, caves, rivers, trees, and a small village.",defaultSize:48,defaultHeight:12},{id:"arena",label:"Arena",description:"Circular combat bowl with walls, pillars, and a marked center.",defaultSize:18,defaultHeight:4},{id:"floating-island",label:"Floating Island",description:"Suspended landmass with a pond and a small tree.",defaultSize:16,defaultHeight:12},{id:"fortress",label:"Fortress",description:"Square stronghold with towers, gate, and a raised keep.",defaultSize:18,defaultHeight:6},{id:"downtown",label:"Downtown",description:"Dense city blocks with crossroads, towers, and a central plaza.",defaultSize:20,defaultHeight:9},{id:"castle",label:"Castle",description:"Layered castle walls with gatehouse, courtyard, and central keep.",defaultSize:22,defaultHeight:8},{id:"archipelago",label:"Archipelago",description:"Scattered islands, shallow water, and uneven shorelines.",defaultSize:22,defaultHeight:5},{id:"canyon",label:"Canyon",description:"Layered mesas cut by a winding canyon river.",defaultSize:24,defaultHeight:10},{id:"pine-valley",label:"Pine Valley",description:"Rolling hills, pine patches, and a shallow stream bed.",defaultSize:24,defaultHeight:8},{id:"kingdom",label:"Kingdom",description:"Large mixed world with macro terrain, regions, roads, downtown, castle, and forests.",defaultSize:56,defaultHeight:12}];function Ww(s,e){switch(s.theme){case"overworld":return qw(s,e);case"arena":return Xw(s,e);case"floating-island":return $w(s,e);case"fortress":return Yw(s,e);case"downtown":return E0(s,e);case"castle":return T0(s,e);case"archipelago":return Kw(s,e);case"canyon":return Zw(s,e);case"pine-valley":return jw(s,e);case"kingdom":return Jw(s,e)}}function qw(s,e){const t={},n=St(s.size,24,96),i=St(s.height,7,24),r=n*2+1,o=Math.max(3,Math.round(i*.35)),a=-12,l=si(s.seed),c=new Int16Array(r*r),h=new Float32Array(r*r),u=new Float32Array(r*r),d=new Float32Array(r*r),f=new Float32Array(r*r),p=new Float32Array(r*r),_=new Float32Array(r*r),m=new Uint8Array(r*r),g=l()*Math.PI*2,x=l()*Math.PI*2;for(let v=-n;v<=n;v++){const A=Math.sin(v*.041+g)*n*.22+Math.sin(v*.097+x)*n*.08;for(let T=-n;T<=n;T++){const E=ct(v,T,n),y=Math.hypot(v,T)/Math.max(1,n),M=vm(Ge(s.seed+17,Math.floor(v*.065),Math.floor(T*.065))*2-1)-Math.max(0,y-.82)*.65,B=As(Ge(s.seed+101,Math.floor(v*.085),Math.floor(T*.085))*.75+Ge(s.seed+181,Math.floor(v*.19),Math.floor(T*.19))*.25),I=vm((Ge(s.seed+293,Math.floor(v*.11),Math.floor(T*.11))-.5)*2),O=As(.18+Ge(s.seed+401,Math.floor(v*.08),Math.floor(T*.08))*.55+Math.max(0,1-Math.abs(T-A)/18)*.24),z=As(.62+Ge(s.seed+503,Math.floor(v*.07),Math.floor(T*.07))*.36-Math.max(0,y-.4)*.12),P=Math.abs(T-A),k=Math.pow(Math.max(0,1-Math.abs(I)),1.35),V=Math.max(0,I)*8.5+k*4.5,U=B*8,X=M<-.22?o-6+M*6:i+M*14,j=Math.max(0,5.5-P)*(.45+(1-B)*.5),ie=Math.round(X+V-U-j);c[E]=ie,h[E]=O,u[E]=z,d[E]=M,f[E]=B,p[E]=I,_[E]=P,m[E]=Qw(ie,o,M,B,O,z,P)}}for(let v=-n;v<=n;v++)for(let A=-n;A<=n;A++){const T=ct(v,A,n),E=c[T],y=m[T];eA(t,v,A,E,o,a,y,e)}tA(t,n,a,c,o,s.seed);for(let v=-n;v<=n;v++)for(let A=-n;A<=n;A++){const T=ct(v,A,n),E=m[T],y=Fd(t,v,A);if(!(y<=o||E===Bd||E===Ld)){if(E===To||E===wo||E===Eo){const M=E===To?.042:E===wo?.036:.012,B=Ge(s.seed+701,v,A);B<M&&sA(t,v,A,y+1,2)?E===wo?Fl(t,{x:v,y:y+1,z:A},4+Math.floor(Ge(s.seed+733,v,A)*4),e.wood,e.leaves):nA(t,{x:v,y:y+1,z:A},4+Math.floor(Ge(s.seed+727,v,A)*3),e.wood,e.leaves):E===Eo&&B>.93&&J(t,{x:v,y:y+1,z:A},e.leaves)}E===Nd&&Ge(s.seed+809,v,A)>.958&&iA(t,{x:v,y:y+1,z:A},1+Math.floor(Ge(s.seed+877,v,A)*2),e.stone,e.accent),(E===Dd||E===kd)&&Ge(s.seed+919,v,A)>.972&&J(t,{x:v,y:y+1,z:A},e.wood)}}const S=Sl(n,Math.max(10,Math.floor(n*.22)),(v,A)=>{const T=ct(v,A,n),E=m[T];return E!==Eo&&E!==To?-1/0:2.8-Pd(c,v,A,n)*1.2+Math.max(0,1-_[T]/18)*.7+f[T]*.5+d[T]*.2});return rA(t,S,Math.max(o+1,Math.round(Fu(c,S,3,n))),e,s.seed),{blocks:t,bounds:{min:{x:-n,y:a,z:-n},max:{x:n,y:i+28,z:n}}}}function Xw(s,e){const t={},n=St(s.size,8,40),i=St(s.height,3,10),r=si(s.seed),o=Math.max(2,Math.floor(n*.18)),a=Math.floor(r()*4);for(let c=-n-3;c<=n+3;c++)for(let h=-n-3;h<=n+3;h++){const u=Math.hypot(c,h),d=(Ge(s.seed,c,h)-.5)*1.8,f=-Math.max(0,Math.round((1-Math.min(1,u/(n*.74)))*o));if(u<=n+d){for(let _=-2;_<f;_++)J(t,{x:c,y:_,z:h},e.stone);J(t,{x:c,y:f-1,z:h},e.stone),J(t,{x:c,y:f,z:h},u<n*.68?e.sand:e.stone)}else u<=n+3+d*.5&&r()>.42&&J(t,{x:c,y:-1,z:h},e.grass);const p=a===0&&h>=n-1&&Math.abs(c)<=2||a===1&&c>=n-1&&Math.abs(h)<=2||a===2&&h<=-n+1&&Math.abs(c)<=2||a===3&&c<=-n+1&&Math.abs(h)<=2;if(u>=n-1.4&&u<=n+.8+d*.25&&!p)for(let _=1;_<=i;_++){const m=_===i?e.accent:e.wall;J(t,{x:c,y:_,z:h},m)}(Math.abs(c)<=1||Math.abs(h)<=1)&&u<n-2&&J(t,{x:c,y:f,z:h},e.accent),u<n*.2&&J(t,{x:c,y:1,z:h},e.accent)}const l=Math.floor(n*.55);for(const[c,h]of[[-l,-l],[-l,l],[l,-l],[l,l]])Ji(t,{x:c,y:1,z:h},i+2,e.wall,e.accent);return{blocks:t,bounds:{min:{x:-n-3,y:-2,z:-n-3},max:{x:n+3,y:i+2,z:n+3}}}}function $w(s,e){const t={},n=St(s.size,10,36),i=St(s.height,6,24),r=Math.max(5,Math.floor(n*.45)),o=si(s.seed),a=new Map;for(let f=-n;f<=n;f++)for(let p=-n;p<=n;p++){const _=Math.hypot(f/n,p/n);if(_>1.02)continue;const m=(Ge(s.seed+41,f,p)-.5)*1.8+(Ge(s.seed+83,f*2,p*2)-.5)*.8,g=Math.round(i+r-1-_*2.8+m),x=Math.max(4,Math.round((1.08-_)*r*1.75+Ge(s.seed+149,f,p)*3)),S=g-x;a.set(`${f},${p}`,g);for(let v=S;v<=g;v++){const A=g-v,T=A===0?e.grass:A<=2?e.wall:e.stone;J(t,{x:f,y:v,z:p},T)}}const l=Math.max(2,Math.floor(n*.16));for(let f=-l;f<=l;f++)for(let p=-l;p<=l;p++){if(f*f+p*p>l*l)continue;const _=a.get(`${f},${p}`)??i+r-1;J(t,{x:f,y:_,z:p},e.water)}const c=Math.max(4,Math.floor(n*.28)),h={x:-Math.floor(n*.28),y:(a.get(`${-Math.floor(n*.28)},${Math.floor(n*.12)}`)??i+r-1)+1,z:Math.floor(n*.12)};for(let f=0;f<c;f++)J(t,{x:h.x,y:h.y+f,z:h.z},e.wood);const u={x:h.x,y:h.y+c,z:h.z};for(let f=-3;f<=3;f++)for(let p=-2;p<=2;p++)for(let _=-3;_<=3;_++)f*f+p*p*1.4+_*_>9||J(t,{x:u.x+f,y:u.y+p,z:u.z+_},e.leaves);const d=2+Math.floor(o()*3);for(let f=0;f<d;f++){const p=Math.round((o()*2-1)*n*.68),_=Math.round((o()*2-1)*n*.68),m=(a.get(`${p},${_}`)??i)-Math.max(5,Math.floor(r*.8)),g=3+Math.floor(o()*4);for(let x=0;x<g;x++)J(t,{x:p,y:m-x,z:_},x===g-1?e.accent:e.wall)}return{blocks:t,bounds:{min:{x:-n,y:i-r,z:-n},max:{x:n,y:i+r+c+2,z:n}}}}function Yw(s,e){const t={},n=St(s.size,10,40),i=St(s.height,4,12),r=si(s.seed),o=Math.max(4,Math.floor(n*.35)),a=2,l=n-4,c=Math.floor(r()*4),h=M0(n+2,s.seed,0,!0,Ge),u={x:St(h.center.x,-2,2),z:St(h.center.z,-2,2)};for(let d=-n-2;d<=n+2;d++)for(let f=-n-2;f<=n+2;f++){const p=d+u.x,_=f+u.z,m=ct(p,_,n+2),g=Math.max(0,h.height[m]),x=Math.abs(d)<=n&&Math.abs(f)<=n;for(let A=-1;A<g;A++)J(t,{x:p,y:A,z:_},e.stone);x?J(t,{x:p,y:g,z:_},Math.abs(d)<=l&&Math.abs(f)<=l?Math.max(Math.abs(d),Math.abs(f))<l*.4?e.sand:e.grass:e.wall):Math.abs(d)<=n+2&&Math.abs(f)<=n+2&&J(t,{x:p,y:g,z:_},e.stone);const S=Math.abs(d)===n||Math.abs(f)===n,v=zu(c,n,d,f,2);if(S&&!v)for(let A=1;A<=i;A++)J(t,{x:p,y:g+A,z:_},A===i?e.accent:e.wall)}for(const[d,f]of[[-n,-n],[-n,n],[n,-n],[n,n]])for(let p=-a;p<=a;p++)for(let _=-a;_<=a;_++)p*p+_*_>(a+.4)*(a+.4)||Ji(t,{x:u.x+d+p,y:1+Math.max(0,h.height[ct(u.x+d+p,u.z+f+_,n+2)]),z:u.z+f+_},i+3,e.wall,e.accent);for(let d=-o;d<=o;d++)for(let f=-o;f<=o;f++){const p=u.x+d,_=u.z+f,m=1+Math.max(0,h.height[ct(p,_,n+2)]);if(J(t,{x:p,y:m,z:_},e.stone),Math.abs(d)===o||Math.abs(f)===o)for(let x=2;x<=i+1;x++)J(t,{x:p,y:m+x-1,z:_},x===i+1?e.accent:e.wall)}return Vu(t,u,c,n,2,3),dA(t,u,l,c,e),pA(t,u,c,n,e),{blocks:t,bounds:{min:{x:-n-2,y:-1,z:-n-2},max:{x:n+2,y:i+3,z:n+2}}}}function E0(s,e){const t={},n=St(s.size,12,42),i=St(s.height,5,18),r=si(s.seed),o=1+Math.floor(r()*2),a=o+1,l=n*2+1,c=new Float32Array(l*l);for(let _=-n;_<=n;_++)for(let m=-n;m<=n;m++){const g=Math.hypot(_,m)/n,x=Math.abs(_)*.02+Math.abs(m)*.02,S=Math.abs(Ge(s.seed+201,Math.floor(_*.28),Math.floor(m*.28))-.5)*1.2,v=Ge(s.seed+71,_,m)*.8;c[ct(_,m,n)]=1+x+S+v+Math.max(0,g-.75)*3.2}const h=fm(n,!0,_=>pm(c,n,_,!0)),u=fm(n,!1,_=>pm(c,n,_,!1)),d=h[Math.floor(h.length/2)]??0,f=u[Math.floor(u.length/2)]??0;for(let _=-n;_<=n;_++)for(let m=-n;m<=n;m++)J(t,{x:_,y:-1,z:m},e.stone),J(t,{x:_,y:0,z:m},e.sand);for(const _ of h)Do(t,{x:_,z:-n},{x:_,z:n},_===d?a:o,_===d?e.accent:e.wall,e.stone);for(const _ of u)Do(t,{x:-n,z:_},{x:n,z:_},_===f?a:o,_===f?e.accent:e.wall,e.stone);const p=bA(d,f,h,u,r);for(const[_,m]of p){const g=Gw(_,m,n,c);SA(t,g,o,e.wall,e.stone)}for(const _ of h)for(const m of u){const g=(_===d||m===f)&&r()>.45?2+Math.floor(r()*2):1;for(let x=-g;x<=g;x++)for(let S=-g;S<=g;S++)Math.abs(x)+Math.abs(S)>g+1||J(t,{x:_+x,y:0,z:m+S},e.accent)}for(let _=0;_<h.length-1;_++)for(let m=0;m<u.length-1;m++){const g=h[_]===d?a:o,x=h[_+1]===d?a:o,S=u[m]===f?a:o,v=u[m+1]===f?a:o,A=h[_]+g+2,T=h[_+1]-x-2,E=u[m]+S+2,y=u[m+1]-v-2;if(T-A<4||y-E<4)continue;const M={minX:A,maxX:T,minZ:E,maxZ:y},B=Ou(M),I=yA(B,d,f,s.seed,p),O=I==="civic"?8:I==="market"?5:4,z=_o(M,O,O,P=>Ge(s.seed+1403+P,B.x,B.z));for(const P of z){if(xA(t,P,I,e),I==="green"&&P.maxX-P.minX>4&&P.maxZ-P.minZ>4){const k=Ou(P);Fl(t,{x:k.x,y:1,z:k.z},4+Math.floor(r()*3),e.wood,e.leaves);continue}vA(t,P,I,i,e,r,h,u)}}return{blocks:t,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+2,z:n}}}}function T0(s,e){const t={},n=St(s.size,14,44),i=St(s.height,5,16),r=si(s.seed),o=Math.max(6,n-(4+Math.floor(r()*4))),a=Math.max(4,Math.floor(n*(.22+r()*.14))),l=n+2+Math.floor(r()*3),c=Math.floor(r()*4),h=Math.max(o+2,n-3),u=M0(l,s.seed+57,0,!0,Ge),d={x:St(u.center.x,-2,2),z:St(u.center.z,-2,2)};for(let f=-l;f<=l;f++)for(let p=-l;p<=l;p++){const _=f+d.x,m=p+d.z,g=Math.max(0,u.height[ct(_,m,l)]);if(J(t,{x:_,y:-2,z:m},e.stone),Math.abs(f)<=l&&Math.abs(p)<=l&&J(t,{x:_,y:-1,z:m},Math.abs(f)===l||Math.abs(p)===l?e.water:e.stone),Math.abs(f)<=n&&Math.abs(p)<=n){const x=Math.abs(f)<=o&&Math.abs(p)<=o,S=Math.abs(f)<=h&&Math.abs(p)<=h;for(let v=0;v<g;v++)J(t,{x:_,y:v,z:m},e.stone);J(t,{x:_,y:g,z:m},x?e.grass:S?e.sand:e.wall)}}for(let f=-n;f<=n;f++)for(let p=-n;p<=n;p++){const _=Math.abs(f)===n||Math.abs(p)===n,m=Math.abs(f)===o||Math.abs(p)===o,g=zu(c,n,f,p,2),x=f+d.x,S=p+d.z,v=Math.max(0,u.height[ct(x,S,l)]);if(_&&!g)for(let A=1;A<=i;A++)J(t,{x,y:v+A,z:S},A===i?e.accent:e.wall);if(m&&!zu(c,o,f,p,1))for(let A=1;A<=i-1;A++)J(t,{x,y:v+A,z:S},A===i-1?e.accent:e.wall)}for(const[f,p]of[[-n,-n],[-n,n],[n,-n],[n,n],[-o,-o],[-o,o],[o,-o],[o,o]])for(let _=-1;_<=1;_++)for(let m=-1;m<=1;m++){const g=d.x+f+_,x=d.z+p+m,S=1+Math.max(0,u.height[ct(g,x,l)]);Ji(t,{x:g,y:S,z:x},i+3,e.wall,e.accent)}for(let f=-a;f<=a;f++)for(let p=-a;p<=a;p++){const _=d.x+f,m=d.z+p,g=1+Math.max(0,u.height[ct(_,m,l)]);J(t,{x:_,y:g,z:m},e.stone);for(let x=2;x<=i+3;x++)!(Math.abs(f)===a||Math.abs(p)===a)&&x!==i+3||J(t,{x:_,y:g+x-1,z:m},x===i+3?e.accent:e.wall)}return _A(t,d,c,o,l,e),Vu(t,d,c,n,2,3),Vu(t,d,c,o,1,3),gA(t,d,o,a,c,e),{blocks:t,bounds:{min:{x:-l,y:-2,z:-l},max:{x:l,y:i+3,z:l}}}}function Kw(s,e){const t={},n=St(s.size,14,44),i=St(s.height,3,10),r=si(s.seed),o=4+Math.floor(r()*4),a=Array.from({length:o},()=>({x:Math.round((r()*2-1)*n*.72),z:Math.round((r()*2-1)*n*.72),radius:4+Math.floor(r()*Math.max(4,n*.18)),height:i+Math.floor(r()*3)}));for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){J(t,{x:l,y:-2,z:c},e.stone),J(t,{x:l,y:-1,z:c},e.water);let h=0,u=0,d=0;for(const _ of a){const g=1-Math.hypot(l-_.x,c-_.z)/_.radius;d+=Math.max(0,g),!(g<=h)&&(h=g,u=_.height)}if(h<=0)continue;const f=Ge(s.seed+211,Math.floor(l*.5),Math.floor(c*.5)),p=Math.max(1,Math.round(h*u+Math.max(0,d-1.2)+f*1.4));for(let _=0;_<p;_++){const m=_===p-1?h>.74?e.grass:e.sand:_>=p-2?e.wall:e.stone;J(t,{x:l,y:_,z:c},m)}h<.38&&d>.7&&J(t,{x:l,y:0,z:c},e.sand),h>.72&&Ge(s.seed*3+17,l,c)>.78&&lA(t,{x:l,y:p,z:c},3+Math.floor(r()*2),e.wood,e.leaves)}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+5,z:n}}}}function Zw(s,e){const t={},n=St(s.size,16,48),i=St(s.height,6,18),r=s.seed*.0013;for(let o=-n;o<=n;o++){const a=Math.sin(o*.18+r)*n*.28+Math.sin(o*.07-r*1.7)*n*.14;for(let l=-n;l<=n;l++){const c=Math.abs(l-a),h=Ge(s.seed+91,o,l)*2.2+Ge(s.seed+313,o*2,l*2)*1.2,u=Math.abs(Ge(s.seed+517,Math.floor(o*.33),Math.floor(l*.33))-.5)*3.4,d=Math.max(2,Math.round(i+h+u)),f=Math.max(0,Math.round((8-c)*.9)),p=d-f;for(let _=-2;_<=p;_++){let m=e.stone;_===p&&c<2.5?m=e.water:_===p?m=p>i+1?e.sand:e.accent:_>=p-1?m=e.wall:(p-_)%4===0&&c>4&&(m=e.accent),J(t,{x:o,y:_,z:l},m)}c>8&&p>i+4&&Ge(s.seed+887,o,l)>.91&&Ji(t,{x:o,y:p+1,z:l},2+Math.round(Ge(s.seed+991,o,l)*3),e.wall,e.accent)}}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+4,z:n}}}}function jw(s,e){const t={},n=St(s.size,16,48),i=St(s.height,5,16),r=si(s.seed);for(let o=-n;o<=n;o++){const a=Math.sin(o*.15+s.seed*.0021)*n*.18,l=Math.sin(o*.09-s.seed*.0014)*n*.08+n*.22;for(let c=-n;c<=n;c++){const h=Ge(s.seed+19,o,c)*2.8+Ge(s.seed+211,o*2,c*2)*1.3,u=Math.round(i*.55+h),d=Math.max(0,Math.round(4-Math.abs(c-a)))+Math.max(0,Math.round(2-Math.abs(c-l))),f=Math.max(1,u-d),p=Ge(s.seed+433,Math.floor(o*.4),Math.floor(c*.4));for(let _=-1;_<=f;_++){const g=_===f?Math.abs(c-a)<1.6||Math.abs(c-l)<1.1?e.water:p>.78?e.sand:e.grass:_>=f-2?e.wall:e.stone;J(t,{x:o,y:_,z:c},g)}if(f>=2&&Math.abs(c-a)>3){const _=.02+Ge(s.seed+701,o,c)*.06+Math.max(0,p-.7)*.04;r()<_&&Fl(t,{x:o,y:f+1,z:c},4+Math.floor(r()*4),e.wood,e.leaves)}}}return{blocks:t,bounds:{min:{x:-n,y:-1,z:-n},max:{x:n,y:i+8,z:n}}}}function Jw(s,e){const t={},n=St(s.size,28,96),i=St(s.height,8,24),r=si(s.seed),o=Math.max(18,Math.round(n*.38)),a=Math.max(20,Math.round(n*.34)),l=n*2+1,c=new Int16Array(l*l),h=new Float32Array(l*l),u=new Float32Array(l*l),d=new Float32Array(l*l),f=new Float32Array(l*l),p=r()*Math.PI*2,_=r()*Math.PI*2;for(let E=-n;E<=n;E++){const y=Math.sin(E*.045+p)*n*.24+Math.sin(E*.11+_)*n*.07;for(let M=-n;M<=n;M++){const B=Math.hypot(E,M)/n,I=(Ge(s.seed+13,Math.floor(E*.18),Math.floor(M*.18))-.5)*10.5,O=Ge(s.seed+73,E,M)*3.1+Ge(s.seed+193,E*2,M*2)*1.9,z=Math.pow(Math.abs(Ge(s.seed+311,E,M)-.5)*2,1.35)*8.4,P=Math.max(0,B-.74)*12,k=Math.abs(M-y),V=Math.max(0,8.4-k)*1.05,U=Math.max(-2,Math.round(i+I+O+z-P-V)),X=As(.26+Ge(s.seed+401,Math.floor(E*.33),Math.floor(M*.33))*.28+Math.max(0,1-k/14)*.48-Math.max(0,B-.68)*.25),j=As(.58-U/Math.max(10,i+12)*.28+Ge(s.seed+557,Math.floor(E*.26),Math.floor(M*.26))*.24);c[ct(E,M,n)]=U,h[ct(E,M,n)]=X,u[ct(E,M,n)]=j;for(let ie=-2;ie<=U;ie++){let ae=e.stone;ie===U&&U<=0?ae=e.water:ie===U?ae=X>.58?e.grass:j>.66?e.sand:e.grass:ie>=U-2&&(ae=X>.58?e.wall:e.stone),J(t,{x:E,y:ie,z:M},ae)}}}for(let E=-n;E<=n;E++)for(let y=-n;y<=n;y++){const M=ct(E,y,n),B=Pd(c,E,y,n);d[M]=B;const I=_m(E,y,n,p,_);f[M]=As(.62-Math.min(1,B/6)*.46-Math.max(0,(c[M]-i-3)/18)*.24+(1-Math.min(1,I/28))*.2+(1-Math.min(1,Math.hypot(E,y)/n))*.12)}const m=Sl(n,Math.max(10,Math.floor(o*.42)),(E,y)=>{const M=ct(E,y,n);return f[M]+h[M]*.08}),g=Sl(n,Math.max(10,Math.floor(a*.38)),(E,y)=>{const M=ct(E,y,n),B=Math.hypot(E-m.x,y-m.z),I=Math.abs(B-n*.34);return As(.18+Math.min(1,(c[M]-i+4)/16)*.42+Math.max(0,1-d[M]/5.2)*.26+Math.max(0,1-I/(n*.22))*.18-Math.max(0,h[M]-.72)*.18)},m,Math.max(18,Math.floor(n*.28))),x=Math.max(1,Math.round(Fu(c,m,5,n))),S=Math.max(x+3,Math.round(Fu(c,g,5,n))+2);ym(t,m,o+6,x,e.stone,e.sand),ym(t,g,a+8,S,e.stone,e.grass);const v=E0({seed:s.seed*17+5,size:o,height:Math.max(8,Math.round(i*.8))},e);Rs(t,v.blocks,{x:m.x,y:x,z:m.z});const A=T0({seed:s.seed*29+7,size:a,height:Math.max(7,Math.round(i*.75))},e);Rs(t,A.blocks,{x:g.x,y:S,z:g.z});const T=MA(m,g,n,d,h,c);Do(t,m,T,1,e.accent,e.stone),Do(t,T,g,1,e.accent,e.stone);for(let E=-n;E<=n;E++)for(let y=-n;y<=n;y++){const M=Math.hypot(E-m.x,y-m.z)<o*.72,B=Math.hypot(E-g.x,y-g.z)<a*.75,I=Math.min(Hu({x:E,z:y},m,T),Hu({x:E,z:y},T,g))<3.2;if(M||B||I)continue;const O=ct(E,y,n),z=c[O];if(z<1)continue;const P=h[O],k=u[O],V=d[O],U=_m(E,y,n,p,_);if(P>.43&&P<.72&&k>.42&&V<2.4&&U<18&&Math.hypot(E-m.x,y-m.z)<o*1.45){EA(t,{x:E,y:z,z:y},e,s.seed);continue}const j=.014+Math.max(0,P-.42)*.08+Ge(s.seed+809,E,y)*.03;P>.5&&V<4.8&&r()<j?Fl(t,{x:E,y:z+1,z:y},4+Math.floor(r()*4),e.wood,e.leaves):z>i+8&&V<3.8&&Ge(s.seed+991,E,y)>.84&&Ji(t,{x:E,y:z+1,z:y},2+Math.floor(r()*3),e.wall,e.accent)}return{blocks:t,bounds:{min:{x:-n,y:-2,z:-n},max:{x:n,y:i+24,z:n}}}}const Ld=0,Bd=1,Dd=2,kd=3,Eo=4,To=5,wo=6,Ud=7,Nd=8;function Qw(s,e,t,n,i,r,o){return s<=e-4||t<-.42?Ld:s<=e||t<-.16?Bd:o<2.2&&s<=e+4?kd:s<=e+2?Dd:s>=e+14&&n<.4?Nd:r>.74&&i<.38?Ud:r<.4&&i>.46?wo:i>.52?To:Eo}function eA(s,e,t,n,i,r,o,a){const l=Math.max(n,i);for(let c=r;c<=l;c++){const h=n-c;let u=a.stone;c>n?u=a.water:h===0?u=mm(o,n,i,!0,a):h<=3?u=mm(o,n,i,!1,a):o===Ud&&h<=6&&(u=a.sand),J(s,{x:e,y:c,z:t},u)}}function mm(s,e,t,n,i){switch(s){case Ld:case Bd:return n?i.sand:i.stone;case Dd:case kd:return n?i.sand:i.wall;case Ud:return i.sand;case wo:return n?i.accent:i.wall;case Nd:return n&&e>t+18?i.accent:i.stone;case To:case Eo:default:return n?i.grass:i.wall}}function tA(s,e,t,n,i,r){for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){const l=n[ct(o,a,e)],c=Math.min(l-3,i+18);for(let h=t+2;h<=c;h++){const u=Qc(r+3001,o*.18,h*.22,a*.18)+Qc(r+3119,o*.09,h*.11,a*.09)*.7,d=Math.abs(Qc(r+3251,o*.07,h*.1,a*.07)-.5),f=h<i-6?.96:1.08;(u>f||d<.04)&&J(s,{x:o,y:h,z:a},0)}}}function nA(s,e,t,n,i){for(let o=0;o<t;o++)J(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t;for(let o=-2;o<=2;o++)for(let a=-2;a<=1;a++)for(let l=-2;l<=2;l++)o*o+l*l+a*a*1.5>7.5||J(s,{x:e.x+o,y:r+a,z:e.z+l},i)}function iA(s,e,t,n,i){for(let r=-t;r<=t;r++)for(let o=0;o<=t;o++)for(let a=-t;a<=t;a++)r*r+o*o*1.3+a*a>(t+.2)*(t+.2)||J(s,{x:e.x+r,y:e.y+o,z:e.z+a},o===t?i:n)}function sA(s,e,t,n,i){for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)for(let a=0;a<=6;a++)if(s[Dr({x:e+r,y:n+a,z:t+o})])return!1;return!0}function rA(s,e,t,n,i){const r=si(i+4109),o=[{x:e.x-8,z:e.z},{x:e.x+8,z:e.z},{x:e.x,z:e.z-8},{x:e.x,z:e.z+8},e];for(const l of o)Do(s,e,l,1,n.sand,n.wall);const a=[{x:-6,z:-4},{x:6,z:-4},{x:-6,z:4},{x:6,z:4}];for(const l of a)oA(s,{x:e.x+l.x,y:t,z:e.z+l.z},3+Math.floor(r()*2),n);aA(s,{x:e.x,y:t,z:e.z},n)}function oA(s,e,t,n){const i=e.x-t,r=e.x+t,o=e.z-t,a=e.z+t;for(let l=i;l<=r;l++)for(let c=o;c<=a;c++){J(s,{x:l,y:e.y,z:c},n.wall);for(let h=1;h<=3;h++)(l===i||l===r||c===o||c===a)&&J(s,{x:l,y:e.y+h,z:c},n.wood);J(s,{x:l,y:e.y+4,z:c},n.accent)}for(let l=e.y+1;l<=e.y+2;l++)J(s,{x:e.x,y:l,z:o},0)}function aA(s,e,t){for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)J(s,{x:e.x+n,y:e.y,z:e.z+i},t.wall),J(s,{x:e.x+n,y:e.y-1,z:e.z+i},n===0&&i===0?t.water:t.stone);for(const[n,i]of[[-2,-2],[2,-2],[-2,2],[2,2]])Ji(s,{x:e.x+n,y:e.y+1,z:e.z+i},3,t.wood,t.wood);for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)(Math.abs(n)===2||Math.abs(i)===2)&&J(s,{x:e.x+n,y:e.y+4,z:e.z+i},t.accent)}function Ji(s,e,t,n,i){for(let r=0;r<t;r++)J(s,{x:e.x,y:e.y+r,z:e.z},r===t-1?i:n)}function lA(s,e,t,n,i){for(let o=0;o<t;o++)J(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t;for(const[o,a]of[[2,0],[-2,0],[0,2],[0,-2],[1,1],[-1,1],[1,-1],[-1,-1]])J(s,{x:e.x+o,y:r,z:e.z+a},i);J(s,{x:e.x,y:r+1,z:e.z},i)}function Fl(s,e,t,n,i){for(let o=0;o<t;o++)J(s,{x:e.x,y:e.y+o,z:e.z},n);const r=e.y+t-1;for(let o=0;o<4;o++){const a=o<2?2:1;for(let l=-a;l<=a;l++)for(let c=-a;c<=a;c++)Math.abs(l)+Math.abs(c)>a+1||J(s,{x:e.x+l,y:r-o,z:e.z+c},i)}J(s,{x:e.x,y:r+1,z:e.z},i)}function zu(s,e,t,n,i){switch(s){case 0:return n===e&&Math.abs(t)<=i;case 1:return t===e&&Math.abs(n)<=i;case 2:return n===-e&&Math.abs(t)<=i;case 3:return t===-e&&Math.abs(n)<=i;default:return!1}}function cA(s,e,t,n,i){for(let r=t+1;r<=n;r++)for(let o=-1;o<=1;o++)switch(e){case 0:J(s,{x:o,y:-1,z:r},i.stone),J(s,{x:o,y:0,z:r},i.accent);break;case 1:J(s,{x:r,y:-1,z:o},i.stone),J(s,{x:r,y:0,z:o},i.accent);break;case 2:J(s,{x:o,y:-1,z:-r},i.stone),J(s,{x:o,y:0,z:-r},i.accent);break;case 3:J(s,{x:-r,y:-1,z:o},i.stone),J(s,{x:-r,y:0,z:o},i.accent);break}}function hA(s,e,t,n,i){for(let r=1;r<=i;r++)for(let o=-n;o<=n;o++)switch(e){case 0:J(s,{x:o,y:r,z:t},0);break;case 1:J(s,{x:t,y:r,z:o},0);break;case 2:J(s,{x:o,y:r,z:-t},0);break;case 3:J(s,{x:-t,y:r,z:o},0);break}}function uA(s,e,t,n){for(let r=-e;r<=e;r++)J(s,{x:0,y:0,z:r},n.accent),J(s,{x:r,y:0,z:0},n.accent);const i=e+4;for(let r=0;r<=i;r++)switch(t){case 0:J(s,{x:0,y:0,z:r},n.accent);break;case 1:J(s,{x:r,y:0,z:0},n.accent);break;case 2:J(s,{x:0,y:0,z:-r},n.accent);break;case 3:J(s,{x:-r,y:0,z:0},n.accent);break}}function dA(s,e,t,n,i){const r={};uA(r,t,n,i),Rs(s,r,{x:e.x,y:0,z:e.z})}function fA(s,e,t,n){for(let i=t;i<=t+5;i++)for(let r=-2;r<=2;r++)switch(e){case 0:J(s,{x:r,y:-1,z:i},n.stone),J(s,{x:r,y:0,z:i},n.accent);break;case 1:J(s,{x:i,y:-1,z:r},n.stone),J(s,{x:i,y:0,z:r},n.accent);break;case 2:J(s,{x:r,y:-1,z:-i},n.stone),J(s,{x:r,y:0,z:-i},n.accent);break;case 3:J(s,{x:-i,y:-1,z:r},n.stone),J(s,{x:-i,y:0,z:r},n.accent);break}}function pA(s,e,t,n,i){const r={};fA(r,t,n,i),Rs(s,r,{x:e.x,y:0,z:e.z})}function mA(s,e,t,n,i){for(let r=-e+1;r<=e-1;r++)J(s,{x:0,y:0,z:r},i.accent),J(s,{x:r,y:0,z:0},i.accent);for(let r=-t-1;r<=t+1;r++)J(s,{x:r,y:0,z:-t-1},i.accent),J(s,{x:r,y:0,z:t+1},i.accent);for(let r=-t-1;r<=t+1;r++)J(s,{x:-t-1,y:0,z:r},i.accent),J(s,{x:t+1,y:0,z:r},i.accent);for(let r=t+1;r<=e;r++)switch(n){case 0:J(s,{x:0,y:0,z:r},i.accent);break;case 1:J(s,{x:r,y:0,z:0},i.accent);break;case 2:J(s,{x:0,y:0,z:-r},i.accent);break;case 3:J(s,{x:-r,y:0,z:0},i.accent);break}}function gA(s,e,t,n,i,r){const o={};mA(o,t,n,i,r),Rs(s,o,{x:e.x,y:0,z:e.z})}function Vu(s,e,t,n,i,r){const o={};hA(o,t,n,i,r),Rs(s,o,{x:e.x,y:0,z:e.z})}function _A(s,e,t,n,i,r){const o={};cA(o,t,n,i,r),Rs(s,o,{x:e.x,y:0,z:e.z})}function yA(s,e,t,n,i){const r=Math.abs(s.x-e)+Math.abs(s.z-t),o=Math.min(...i.map(([l,c])=>Hu(s,l,c))),a=Ge(n+1701,s.x,s.z);return r<6||o<3.2?"civic":a>.84&&o>5?"green":o<7||a>.46?"market":"residential"}function xA(s,e,t,n){for(let i=e.minX;i<=e.maxX;i++)for(let r=e.minZ;r<=e.maxZ;r++)J(s,{x:i,y:0,z:r},t==="green"?n.grass:t==="market"?n.sand:n.stone)}function vA(s,e,t,n,i,r,o,a){const l=Ou(e),c=e.maxX-e.minX+1,h=e.maxZ-e.minZ+1,u=t==="civic"?1:0,d=e.minX+u,f=e.maxX-u,p=e.minZ+u,_=e.maxZ-u;if(f-d<3||_-p<3)return;const m=t==="civic"?n+1:t==="market"?Math.max(4,n-2):Math.max(4,n-3),g=Math.max(4,m+Math.floor(r()*4)-1),x=Math.max(3,g),S=t==="civic"?i.accent:t==="market"?i.stone:i.wall;for(let y=d;y<=f;y++)for(let M=p;M<=_;M++)for(let B=1;B<=x;B++)!(y===d||y===f||M===p||M===_)&&B!==x||J(s,{x:y,y:B,z:M},B===x?S:i.wall);const v=Math.abs(l.x-gm(l.x,o)),A=Math.abs(l.z-gm(l.z,a));let T=l.x,E=l.z;A<=v?E=p:T=l.x<0?f:d;for(let y=1;y<=2;y++)J(s,{x:T,y,z:E},0);(t==="civic"||r()>.58)&&(Ji(s,{x:d,y:x+1,z:p},2,i.accent,i.accent),Ji(s,{x:f,y:x+1,z:_},2,i.accent,i.accent)),t==="market"&&c>4&&h>4&&(J(s,{x:l.x,y:1,z:l.z},i.wood),J(s,{x:l.x,y:2,z:l.z},i.leaves))}function gm(s,e){let t=e[0]??0,n=Math.abs(t-s);for(const i of e){const r=Math.abs(i-s);r<n&&(n=r,t=i)}return t}function bA(s,e,t,n,i){const r=[],o=t[Math.max(0,Math.floor(t.length*.25))]??s,a=t[Math.min(t.length-1,Math.floor(t.length*.75))]??s,l=n[Math.max(0,Math.floor(n.length*.25))]??e,c=n[Math.min(n.length-1,Math.floor(n.length*.75))]??e;return r.push([{x:o,z:e},{x:s,z:l}]),r.push([{x:s,z:c},{x:a,z:e}]),i()>.45&&r.push([{x:o,z:l},{x:a,z:c}]),i()>.55&&r.push([{x:o,z:c},{x:a,z:l}]),r}function SA(s,e,t,n,i){for(const r of e){const o=Math.max(0,Fd(s,r.x,r.z));for(let a=-t;a<=t;a++)for(let l=-t;l<=t;l++){const c=r.x+a,h=r.z+l;for(let u=-2;u<o;u++)J(s,{x:c,y:u,z:h},i);J(s,{x:c,y:o,z:h},n),Od(s,c,h,o+1,o+8)}}}function _m(s,e,t,n,i){const r=Math.sin(s*.045+n)*t*.24+Math.sin(s*.11+i)*t*.07;return Math.abs(e-r)}function MA(s,e,t,n,i,r){const o={x:Math.round((s.x+e.x)*.5),z:Math.round((s.z+e.z)*.5)};let a=o,l=1/0;for(let c=o.x-12;c<=o.x+12;c++)for(let h=o.z-12;h<=o.z+12;h++){if(Math.abs(c)>t||Math.abs(h)>t)continue;const u=ct(c,h,t),d=n[u]*1.8+Math.max(0,i[u]-.78)*6+Math.max(0,-r[u])*2.4+Math.abs(c-o.x)*.06+Math.abs(h-o.z)*.06;d<l&&(l=d,a={x:c,z:h})}return a}function EA(s,e,t,n){const i=Ge(n+1221,e.x,e.z),r=i>.58?t.sand:t.grass;J(s,e,r),i>.8?J(s,{x:e.x,y:e.y+1,z:e.z},t.wood):i<.16&&J(s,{x:e.x,y:e.y+1,z:e.z},t.leaves)}function ym(s,e,t,n,i,r){for(let o=e.x-t;o<=e.x+t;o++)for(let a=e.z-t;a<=e.z+t;a++)if(!(Math.hypot(o-e.x,a-e.z)>t)){for(let l=-2;l<n;l++)J(s,{x:o,y:l,z:a},i);J(s,{x:o,y:n,z:a},r),Od(s,o,a,n+1,n+30)}}function Do(s,e,t,n,i,r){const o=Math.max(Math.abs(t.x-e.x),Math.abs(t.z-e.z));for(let a=0;a<=o;a++){const l=o===0?0:a/o,c=Math.round(xm(e.x,t.x,l)),h=Math.round(xm(e.z,t.z,l)),u=Math.max(0,Fd(s,c,h));for(let d=-n;d<=n;d++)for(let f=-n;f<=n;f++){const p=c+d,_=h+f;for(let m=-2;m<u;m++)J(s,{x:p,y:m,z:_},r);J(s,{x:p,y:u,z:_},i),Od(s,p,_,u+1,u+8)}}}function Rs(s,e,t){for(const[n,i]of Object.entries(e)){const r=TA(n);J(s,{x:r.x+t.x,y:r.y+t.y,z:r.z+t.z},i)}}function Fd(s,e,t){for(let n=96;n>=-2;n--)if(s[Dr({x:e,y:n,z:t})])return n;return-2}function Od(s,e,t,n,i){for(let r=n;r<=i;r++)J(s,{x:e,y:r,z:t},0)}function Hu(s,e,t){const n=t.x-e.x,i=t.z-e.z,r=n*n+i*i;if(r===0)return Math.hypot(s.x-e.x,s.z-e.z);const o=Math.max(0,Math.min(1,((s.x-e.x)*n+(s.z-e.z)*i)/r)),a=e.x+n*o,l=e.z+i*o;return Math.hypot(s.x-a,s.z-l)}function xm(s,e,t){return s+(e-s)*t}function TA(s){const e=s.indexOf(","),t=s.indexOf(",",e+1);return{x:Number(s.slice(0,e)),y:Number(s.slice(e+1,t)),z:Number(s.slice(t+1))}}function J(s,e,t){const n=Dr(e);if(t===0){delete s[n];return}s[n]=t}function St(s,e,t){return Math.max(e,Math.min(t,Math.round(s)))}function vm(s){return Math.max(-1,Math.min(1,s))}function si(s){let e=s>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ge(s,e,t){const n=Math.sin(e*127.1+t*311.7+s*1e-4)*43758.5453123;return n-Math.floor(n)}function Qc(s,e,t,n){const i=Math.sin(e*127.1+t*269.5+n*311.7+s*1e-4)*43758.5453123;return i-Math.floor(i)}class Ml{constructor(e,t){C(this,"_texture");C(this,"_uvByUri",new Map);this._texture=e,this._uvByUri=t}get texture(){return this._texture}toSnapshot(){return Object.fromEntries(this._uvByUri.entries())}getFaceUvs(e,t){const n=this._uvByUri.get(e.textureUris[t]);if(!n)throw new Error(`TextureAtlas: Missing atlas entry for ${e.textureUris[t]}`);return n}static async create(e){const t=new Set;for(const u of e)Object.values(u.textureUris).forEach(d=>t.add(d));const n=await Promise.all([...t].map(async u=>[u,await wA(u)])),i=16,r=Math.max(1,Math.ceil(Math.sqrt(n.length))),o=Math.max(1,Math.ceil(n.length/r)),a=document.createElement("canvas");a.width=r*i,a.height=o*i;const l=a.getContext("2d");if(!l)throw new Error("TextureAtlas: Failed to create 2d context.");l.imageSmoothingEnabled=!1;const c=new Map;n.forEach(([u,d],f)=>{const p=f%r,_=Math.floor(f/r),m=p*i,g=_*i;l.drawImage(d,m,g,i,i);const x=AA(d,i);c.set(u,{averageRGB:x.averageRGB,isTransparent:x.isTransparent,needsAlphaTest:x.needsAlphaTest,transparencyRatio:x.transparencyRatio,u0:m/a.width,v0:1-(g+i)/a.height,u1:(m+i)/a.width,v1:1-g/a.height})});const h=new Ty(a);return h.colorSpace=Ct,h.magFilter=It,h.minFilter=It,h.generateMipmaps=!1,h.needsUpdate=!0,new Ml(h,c)}}async function wA(s){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`Failed to load image ${s}`)),n.src=s})}function AA(s,e){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)return{averageRGB:[1,1,1],isTransparent:!1,needsAlphaTest:!1,transparencyRatio:0};n.imageSmoothingEnabled=!1,n.clearRect(0,0,e,e),n.drawImage(s,0,0,e,e);const i=n.getImageData(0,0,e,e).data;let r=0,o=!1,a=0,l=0,c=0,h=0;for(let u=0;u<i.length;u+=4){const d=i[u],f=i[u+1],p=i[u+2],_=i[u+3],m=_/255;l+=d*m,c+=f*m,h+=p*m,a+=m,_<255&&r++,_>0&&_<255&&(o=!0)}return{averageRGB:a>0?[l/(255*a),c/(255*a),h/(255*a)]:[1,1,1],isTransparent:r>0,needsAlphaTest:o,transparencyRatio:r/(e*e)}}const Gu=512,Ps=64*1024*1024,bm=1024*1024,Wu=80,qu=80,Sm=Ps+1024*1024,Ol="https://voxcinder-gallery.voxcinder-gallery.workers.dev".replace(/\/$/,""),zl="hytopia-map-version",w0="application/vnd.hytopia.gallery-map-publish";function Xu(s){const e=new URL(window.location.href);return e.search="",e.hash="",e.searchParams.set("map",s),e.toString()}async function Mm(){const s=await fetch(`${Ol}/api/maps`,{cache:"no-store"});return El(s).then(e=>e.maps)}async function CA(s){const e=A0(s),t=await fetch(`${Ol}/api/maps/${encodeURIComponent(e)}`,{cache:"no-store"});return C0(t,e)}async function IA(s,e){const t=await fetch(`${Ol}/api/maps/${encodeURIComponent(s)}/versions/${encodeURIComponent(e)}`,{cache:"no-store"});return C0(t,s)}async function RA(s){const e=await PA(s),t=await fetch(`${Ol}/api/maps`,{body:e,headers:{"content-type":w0},method:"POST"}),n=await El(t);return{...n,shareUrl:n.shareUrl||Xu(n.mapId)}}async function PA(s){var l;const e=await BA(s.worldMap);LA(s,e.mapJsonSize);const t={authorName:s.authorName,blockCount:e.blockCount,description:s.description,editToken:s.editToken,mapJsonSize:e.mapJsonSize,mapObjectFormat:zl,mapId:s.mapId,sourceMapId:s.sourceMapId,sourceVersionId:s.sourceVersionId,title:s.title},n=new TextEncoder().encode(JSON.stringify(t)),i=((l=s.thumbnailBlob)==null?void 0:l.size)??0;if(n.byteLength>4294967295||i>4294967295)throw new Error("Publish metadata is too large.");const r=new ArrayBuffer(8),o=new DataView(r);o.setUint32(0,n.byteLength,!1),o.setUint32(4,i,!1);const a=[r,n];return s.thumbnailBlob&&a.push(s.thumbnailBlob),a.push(e.blob),new Blob(a,{type:w0})}function LA(s,e){const t=s.title.trim();if(!t||t.length>Wu)throw new Error(`Title must be between 1 and ${Wu} characters.`);if(s.authorName&&s.authorName.length>qu)throw new Error(`Author must be at most ${qu} characters.`);if(s.description&&s.description.length>Gu)throw new Error(`Description must be at most ${Gu} characters.`);if(e>Ps)throw new Error(`Map JSON is larger than ${Ps} bytes.`);if(s.thumbnailBlob&&s.thumbnailBlob.size>bm)throw new Error(`Preview image is larger than ${bm} bytes.`)}async function BA(s){if(!("CompressionStream"in window))throw new Error("This browser cannot publish compressed Gallery maps.");const e=JSON.stringify(s),t=new TextEncoder().encode(e).byteLength,n=s.blocks&&typeof s.blocks=="object"?Object.keys(s.blocks).length:0,i=JSON.stringify({format:zl,kind:"full",mapData:s}),r=await new Response(new Blob([i]).stream().pipeThrough(new CompressionStream("gzip"))).blob();return{blob:new Blob([r],{type:"application/gzip"}),blockCount:n,fileName:"world-map-version.full.json.gz",mapJsonSize:t}}function A0(s){const e=s.trim();if(!e)throw new Error("Map ID or URL is required.");try{const t=new URL(e,window.location.origin),n=t.searchParams.get("map");if(n)return n;const i=t.pathname.match(/\/maps\/([^/]+)/);if(i!=null&&i[1])return decodeURIComponent(i[1])}catch{}return e.replace(/^#/,"")}async function El(s){let e=null;try{e=await s.json()}catch{e=null}if(!s.ok){const t=e&&typeof e=="object"&&"error"in e?String(e.error):`Request failed with HTTP ${s.status}`;throw new Error(t)}return e}async function C0(s,e){if(!s.ok)return El(s);if((s.headers.get("content-type")||"").includes("application/json")&&!s.headers.get("content-encoding")){const a=await El(s);return{...a,mapId:a.mapId||e,worldMap:kA(a.worldMap)}}const n=eh(s,"x-size-bytes");if(n!==void 0&&n>Ps)throw new Error(`Downloaded map is larger than ${Ps} bytes.`);const i=await DA(s),r=JSON.parse(i),o=I0(r);return{blockCount:eh(s,"x-block-count"),createdAt:s.headers.get("x-created-at")||"",mapId:s.headers.get("x-map-id")||e,sizeBytes:eh(s,"x-size-bytes"),versionId:s.headers.get("x-version-id")||"1",worldMap:o}}async function DA(s){const e=s.headers.get("x-map-content-encoding")||s.headers.get("content-encoding")||"",t=s.headers.get("content-type")||"";if(!e.includes("gzip")&&!t.includes("gzip"))return Em(s,Sm);if(!("DecompressionStream"in window))throw new Error("This browser cannot import compressed Gallery maps.");return Em(new Response(s.body.pipeThrough(new DecompressionStream("gzip"))),Sm)}async function Em(s,e){if(!s.body){const a=await s.text();if(new TextEncoder().encode(a).byteLength>e)throw new Error(`Downloaded map is larger than ${Ps} bytes.`);return a}const t=s.body.getReader(),n=[];let i=0;for(;;){const a=await t.read();if(a.done)break;if(i+=a.value.byteLength,i>e)throw await t.cancel().catch(()=>{}),new Error(`Downloaded map is larger than ${Ps} bytes.`);n.push(a.value)}const r=new Uint8Array(i);let o=0;for(const a of n)r.set(a,o),o+=a.byteLength;return new TextDecoder().decode(r)}function I0(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Downloaded map file is invalid.");const e=s;if(e.format!==zl||e.kind!=="full"||!e.mapData)throw new Error("Downloaded map file is not a full Gallery map version.");return e.mapData}function kA(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Downloaded map file is invalid.");const e=s;return e.format===zl||e.kind==="full"||"mapData"in e?I0(s):s}function eh(s,e){const t=s.headers.get(e);if(!t)return;const n=Number(t);return Number.isFinite(n)?n:void 0}const Tm=16384,Zi=64,Ls=8*1024*1024,wm=1024*1024,$u=80,Yu=80,Am=Ls+1024*1024,zd="https://voxcinder-gallery.voxcinder-gallery.workers.dev".replace(/\/$/,""),Vl="hytopia-prefab";function UA(s){const e=new URL(window.location.href);return e.search="",e.hash="",e.searchParams.set("prefab",s),e.toString()}async function NA(){const s=await fetch(`${zd}/api/prefabs`,{cache:"no-store"});return Tl(s).then(e=>e.prefabs)}async function FA(s){const e=GA(s),t=await fetch(`${zd}/api/prefabs/${encodeURIComponent(e)}`,{cache:"no-store"});return WA(t,e)}async function OA(s){const e=await zA(s),t=await fetch(`${zd}/api/prefabs`,{body:e,method:"POST"}),n=await Tl(t);return{...n,shareUrl:n.shareUrl||UA(n.prefabId)}}async function zA(s){const e=await HA(s.worldPrefab);VA(s,e.prefabJsonSize,e.blockCount);const t={authorName:s.authorName,blockCount:e.blockCount,prefabJsonSize:e.prefabJsonSize,prefabObjectFormat:Vl,title:s.title},n=new FormData;return n.set("metadata",JSON.stringify(t)),n.set("prefab",e.blob,e.fileName),s.thumbnailBlob&&n.set("thumbnail",s.thumbnailBlob,"thumbnail.jpg"),n}function VA(s,e,t){const n=s.title.trim();if(!n||n.length>$u)throw new Error(`Title must be between 1 and ${$u} characters.`);if(s.authorName&&s.authorName.length>Yu)throw new Error(`Author must be at most ${Yu} characters.`);if(YA(s.worldPrefab,t),e>Ls)throw new Error(`Prefab JSON is larger than ${Ls} bytes.`);if(s.thumbnailBlob&&s.thumbnailBlob.size>wm)throw new Error(`Preview image is larger than ${wm} bytes.`)}async function HA(s){if(!("CompressionStream"in window))throw new Error("This browser cannot publish compressed Gallery prefabs.");const e=JSON.stringify(s),t=new TextEncoder().encode(e).byteLength,n=$A(s),i=JSON.stringify({format:Vl,kind:"full",prefabData:s}),r=await new Response(new Blob([i]).stream().pipeThrough(new CompressionStream("gzip"))).blob();return{blob:new Blob([r],{type:"application/gzip"}),blockCount:n,fileName:"world-prefab.full.json.gz",prefabJsonSize:t}}function GA(s){const e=s.trim();if(!e)throw new Error("Prefab ID or URL is required.");try{const t=new URL(e,window.location.origin),n=t.searchParams.get("prefab");if(n)return n;const i=t.pathname.match(/\/prefabs\/([^/]+)/);if(i!=null&&i[1])return decodeURIComponent(i[1])}catch{}return e.replace(/^#/,"")}async function Tl(s){let e=null;try{e=await s.json()}catch{e=null}if(!s.ok){const t=e&&typeof e=="object"&&"error"in e?String(e.error):`Request failed with HTTP ${s.status}`;throw new Error(t)}return e}async function WA(s,e){if(!s.ok)return Tl(s);if((s.headers.get("content-type")||"").includes("application/json")&&!s.headers.get("content-encoding")){const a=await Tl(s);return{...a,prefabId:a.prefabId||e,worldPrefab:XA(a.worldPrefab)}}const n=th(s,"x-size-bytes");if(n!==void 0&&n>Ls)throw new Error(`Downloaded prefab is larger than ${Ls} bytes.`);const i=await qA(s),r=JSON.parse(i),o=R0(r);return{blockCount:th(s,"x-block-count"),createdAt:s.headers.get("x-created-at")||"",prefabId:s.headers.get("x-prefab-id")||e,sizeBytes:th(s,"x-size-bytes"),worldPrefab:o}}async function qA(s){const e=s.headers.get("x-prefab-content-encoding")||s.headers.get("content-encoding")||"",t=s.headers.get("content-type")||"";if(!e.includes("gzip")&&!t.includes("gzip"))return Cm(s,Am);if(!("DecompressionStream"in window))throw new Error("This browser cannot import compressed Gallery prefabs.");return Cm(new Response(s.body.pipeThrough(new DecompressionStream("gzip"))),Am)}async function Cm(s,e){if(!s.body){const a=await s.text();if(new TextEncoder().encode(a).byteLength>e)throw new Error(`Downloaded prefab is larger than ${Ls} bytes.`);return a}const t=s.body.getReader(),n=[];let i=0;for(;;){const a=await t.read();if(a.done)break;if(i+=a.value.byteLength,i>e)throw await t.cancel().catch(()=>{}),new Error(`Downloaded prefab is larger than ${Ls} bytes.`);n.push(a.value)}const r=new Uint8Array(i);let o=0;for(const a of n)r.set(a,o),o+=a.byteLength;return new TextDecoder().decode(r)}function R0(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Downloaded prefab file is invalid.");const e=s;if(e.format!==Vl||e.kind!=="full"||!e.prefabData)throw new Error("Downloaded prefab file is not a full Gallery prefab.");return e.prefabData}function XA(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Downloaded prefab file is invalid.");const e=s;return e.format===Vl||e.kind==="full"||"prefabData"in e?R0(s):s}function $A(s){if(!s.blocks||typeof s.blocks!="object")return 0;let e=0;for(const t of Object.values(s.blocks))wn(t)!==0&&(e+=1);return e}function YA(s,e){if(e>Tm)throw new Error(`Prefab has more than ${Tm} blocks.`);if(ZA(s.size,"Prefab size"),s.size.x>Zi||s.size.y>Zi||s.size.z>Zi)throw new Error(`Prefab size must fit within ${Zi} blocks on each axis.`);if(s.anchor){if(!Vd(s.anchor))throw new Error("Prefab anchor must have integer x, y, and z values.");if(s.anchor.x<0||s.anchor.x>=s.size.x||s.anchor.y<0||s.anchor.y>=s.size.y||s.anchor.z<0||s.anchor.z>=s.size.z)throw new Error("Prefab anchor must be inside the prefab size.")}KA(s)}function KA(s){const e=s.blocks??{};let t=!1,n=0,i=0,r=0,o=0,a=0,l=0;for(const[c,h]of Object.entries(e)){if(wn(h)===0)continue;const u=Nl(c);if(!Vd(u))throw new Error(`Prefab block coordinate "${c}" is invalid.`);if(u.x<0||u.x>=s.size.x||u.y<0||u.y>=s.size.y||u.z<0||u.z>=s.size.z)throw new Error(`Prefab block coordinate "${c}" is outside the prefab size.`);if(!t){n=o=u.x,i=a=u.y,r=l=u.z,t=!0;continue}n=Math.min(n,u.x),i=Math.min(i,u.y),r=Math.min(r,u.z),o=Math.max(o,u.x),a=Math.max(a,u.y),l=Math.max(l,u.z)}if(t&&(o-n+1>Zi||a-i+1>Zi||l-r+1>Zi))throw new Error(`Prefab block bounds must fit within ${Zi} blocks on each axis.`)}function ZA(s,e){if(!s||!Vd(s)||s.x<=0||s.y<=0||s.z<=0)throw new Error(`${e} must have positive integer x, y, and z values.`)}function Vd(s){return Number.isInteger(s.x)&&Number.isInteger(s.y)&&Number.isInteger(s.z)}function th(s,e){const t=s.headers.get(e);if(!t)return;const n=Number(t);return Number.isFinite(n)?n:void 0}const wl="hytopia-prefab",Al=1,Cl=16384,Ht=64;function Hd(){return`prefab-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function Ku(s){if(!s||typeof s!="object"||Array.isArray(s))throw new Error("Prefab file is invalid.");const e=s;if(e.format!==wl||e.version!==Al)throw new Error("Prefab file format is not supported.");if(!e.blocks||typeof e.blocks!="object"||Array.isArray(e.blocks))throw new Error("Prefab has no blocks.");const t={};for(const[r,o]of Object.entries(e.blocks)){const a=Nl(r);if(!Number.isInteger(a.x)||!Number.isInteger(a.y)||!Number.isInteger(a.z))throw new Error(`Prefab block coordinate is invalid: ${r}`);wn(o)!==0&&(t[Dr(a)]=o)}let n=0;for(const r of Object.values(t))wn(r)!==0&&(n+=1);if(n===0)throw new Error("Prefab has no blocks.");if(n>Cl)throw new Error(`Prefab has more than ${Cl} blocks.`);const i=Im(e.size,"Prefab size");if(i.x<1||i.y<1||i.z<1||i.x>Ht||i.y>Ht||i.z>Ht)throw new Error(`Prefab size must be between 1 and ${Ht} blocks on each axis.`);return{anchor:e.anchor?Im(e.anchor,"Prefab anchor"):{x:0,y:0,z:0},blockCount:n,blockTypes:Array.isArray(e.blockTypes)?e.blockTypes:[],blocks:t,createdAt:typeof e.createdAt=="number"?e.createdAt:Date.now(),format:wl,id:typeof e.id=="string"&&e.id?e.id:Hd(),size:i,title:typeof e.title=="string"&&e.title.trim()?e.title.trim():"Untitled Prefab",updatedAt:typeof e.updatedAt=="number"?e.updatedAt:Date.now(),version:Al}}function jA(s){const e={x:s.max.x-s.min.x+1,y:s.max.y-s.min.y+1,z:s.max.z-s.min.z+1};if(e.x>Ht||e.y>Ht||e.z>Ht)throw new Error(`Prefab size must be at most ${Ht} blocks on each axis.`);let t=0;for(const o of s.blocks)wn(o.value)!==0&&(t+=1);if(t===0)throw new Error("No blocks selected for prefab.");if(t>Cl)throw new Error(`Prefab has more than ${Cl} blocks.`);const n=new Set,i={};for(const o of s.blocks){const a={x:o.coordinate.x-s.min.x,y:o.coordinate.y-s.min.y,z:o.coordinate.z-s.min.z},l=wn(o.value);l!==0&&n.add(l),i[Dr(a)]=o.value}const r=Date.now();return{anchor:{x:0,y:0,z:0},blockCount:t,blockTypes:s.blockTypes.filter(o=>n.has(o.id)),blocks:i,createdAt:r,format:wl,id:Hd(),size:e,title:s.title,updatedAt:r,version:Al}}function JA(s,e="Imported Prefab"){return Ku({anchor:s.anchor??{x:0,y:0,z:0},blockTypes:s.blockTypes??[],blocks:s.blocks??{},createdAt:Date.now(),format:wl,id:Hd(),size:s.size,title:s.title||e,updatedAt:Date.now(),version:Al})}function Im(s,e){if(!s||typeof s!="object"||Array.isArray(s))throw new Error(`${e} is invalid.`);const t=s,n={x:Number(t.x),y:Number(t.y),z:Number(t.z)};if(!Number.isInteger(n.x)||!Number.isInteger(n.y)||!Number.isInteger(n.z))throw new Error(`${e} is invalid.`);return n}const QA=["cube","stairs","slab","carpet","wall","pane","fence"],eC={cube:"Cube",slab:"Slab",stairs:"Stairs",pane:"Pane",carpet:"Carpet",fence:"Fence",wall:"Wall"};function Hi(s){var t,n;if(!((t=s.trimeshIndices)!=null&&t.length)||!((n=s.trimeshVertices)!=null&&n.length))return"cube";const e=s.name.toLowerCase();return e.includes("carpet")?"carpet":e.includes("pane")?"pane":e.includes("fence")?"fence":e.includes("wall")?"wall":e.includes("slab")?"slab":e.includes("stairs")?"stairs":"cube"}function Rm(s){return eC[s]}function tC(s){const e=Gd("svg",{viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",focusable:"false"});e.classList.add("block-shape-icon");for(const t of nC(s))e.append(t);return e}function nC(s){switch(s){case"slab":return[Mt("M6 15 16 9l10 6-10 6L6 15Z","top"),Mt("M6 15v5l10 6v-5L6 15Z","left"),Mt("M16 21v5l10-6v-5l-10 6Z","right")];case"stairs":return[Mt("M6 15 L11 12 L21 18 L16 21Z","top"),Mt("M6 15 L16 21 L16 27 L6 21Z","left"),Mt("M11 12 L21 18 L21 14 L11 8Z","left"),Mt("M11 8 L16 5 L26 11 L21 14Z","top"),Mt("M21 18 L21 14 L26 11 L26 21 L16 27 L16 21Z","right"),pi("M6 15 L11 12 L21 18 L16 21Z"),pi("M11 8 L16 5 L26 11 L21 14"),pi("M11 12 L11 8"),pi("M21 18 L21 14")];case"pane":return[Mt("M9 8 L23 11 L23 25 L9 22Z","left")];case"carpet":return[Mt("M5 17 16 10l11 7-11 7L5 17Z","top"),pi("M5 17v2l11 7 11-7v-2")];case"fence":return[Mt("M13 8 L16 6 L19 8 L16 10Z","top"),Mt("M13 8 L16 10 L16 28 L13 26Z","left"),Mt("M16 10 L19 8 L19 26 L16 28Z","right"),Mt("M5 6 L13 10 L13 14 L5 10Z","left"),Mt("M19 11 L27 15 L27 19 L19 15Z","right"),Mt("M5 13 L13 17 L13 21 L5 17Z","left"),Mt("M19 18 L27 22 L27 26 L19 22Z","right"),pi("M5 10 L13 14"),pi("M19 15 L27 19"),pi("M5 17 L13 21"),pi("M19 22 L27 26")];case"wall":return[Mt("M9 9 L13 7 L23 13 L19 15Z","top"),Mt("M9 9 L19 15 L19 25 L9 19Z","left"),Mt("M19 15 L23 13 L23 23 L19 25Z","right")];case"cube":default:return[Mt("M6 11 16 5l10 6-10 6L6 11Z","top"),Mt("M6 11v10l10 6V17L6 11Z","left"),Mt("M16 17v10l10-6V11l-10 6Z","right")]}}function Mt(s,e){return Gd("path",{d:s,class:`block-shape-icon-face block-shape-icon-face-${e}`})}function pi(s){return Gd("path",{d:s,class:"block-shape-icon-edge"})}function Gd(s,e){const t=document.createElementNS("http://www.w3.org/2000/svg",s);for(const[n,i]of Object.entries(e))t.setAttribute(n,i);return t}const P0=document.querySelector("#app");if(!P0)throw new Error("App root not found.");const Fa=new We,mi=new L,Pm=new L,Lm=new ue,iC=new ue,sC=new L(0,1,0),xn=new L,gi=new L,Bm=new De,io=new Fn,ir=new L(1,1,1),sr=new We,Dm=new De,rr=new Ll,Oa=new Ot,Yn=document.createElement("input");Yn.type="file";Yn.accept=".json,application/json";Yn.style.display="none";document.body.append(Yn);const rC=256,oC=15,aC=2,km=.0025,Um=Math.PI/2-.1,vi="color",Nm="tCube",nh="horizonColor",lC="/voxcinder/world-editor/skyboxes/partly-cloudy",cC="/voxcinder/world-editor/maps/boilerplate.json",hC="/voxcinder/",Fm=[new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href,new URL("/voxcinder/world-editor/assets/-x-DwBuutkU.png",import.meta.url).href],uC="exploreMapSource",dC="mode",fC="soloMode",so=new Cn(0,0,0,"YXZ"),or=new L,za=new L,pC=50,ih=1.02,_i=.045,sh="world-editor-sidebar-sections",mC="world-editor-autosave",Om="world-editor-prefabs",zm=500,gC="world-editor-db",In="autosaves",L0="view-state",B0="slots:index",D0="slots:current",Vm="default",Hm="Default Slot",_C=800,yC=500,xC=8,vC=1,rh=1,Va=2,bC=.4,oh=56,SC=.05,MC=220,EC=12,Gm=1,Wm=.8,qm=.5,Xm="worldEditorInstanceLightLevel",$m="worldEditorInstanceSkyLight",ro="vWorldEditorInstanceLightLevel",oo="vWorldEditorInstanceSkyLight",k0=15,TC=Math.ceil((k0+1)/he),Ym="worldEditorStaticEntityMaterialSetup",wC=36,AC=144,Km=.8,CC=new ue(gr(180/255),gr(180/255),gr(180/255)),Zm=52,jm=96,IC=6,RC="/voxcinder/world-editor/particles/smoke.png",PC=192,Jm=4,LC="/voxcinder/world-editor/audio/sfx/damage/hit-wood.mp3",BC=.035,DC=1,kC=1e3,UC="/voxcinder/world-editor/audio/sfx/ui/inventory-place-item.mp3",NC=.08,ao=640,lo=360,Qm="image/jpeg",eg=.74,U0="hytopiaDisplayName",FC=1,OC=1e3,tg={ULTRA:{multiplier:2},HIGH:{devicePixelRatioCap:3,multiplier:1},MEDIUM:{devicePixelRatioCap:2,multiplier:1},LOW:{devicePixelRatioCap:1,multiplier:.85},POWER_SAVING:{devicePixelRatioCap:1,multiplier:.5}},ar={ULTRA:{distance:600,fog:{enabled:!0,far:550,near:320}},HIGH:{distance:300,fog:{enabled:!0,far:300,near:160}},MEDIUM:{distance:150,fog:{enabled:!0,far:150,near:80}},LOW:{distance:75,fog:{enabled:!0,far:75,near:36}},POWER_SAVING:{distance:50,fog:{enabled:!0,far:50,near:16}}};class ng extends Wt{constructor(e){const t=ni.clone(mt.cube.uniforms);t[Nm].value=e,t[vi]={value:new ue},super({vertexShader:mt.cube.vertexShader,fragmentShader:mt.cube.fragmentShader.replace("void main() {",`
            uniform vec3 ${vi};
            void main() {
          `).replace("gl_FragColor = texColor;",`
            gl_FragColor = texColor;
            gl_FragColor.rgb *= ${vi};
          `),uniforms:t,side:Jt,depthWrite:!1,fog:!1})}get color(){return this.uniforms[vi].value}get map(){return this.uniforms[Nm].value}}class ig extends Wt{constructor(){super({vertexShader:`
        varying vec3 vDirection;

        void main() {
          vDirection = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 ${vi};
        uniform vec3 ${nh};
        varying vec3 vDirection;

        void main() {
          float horizonMix = smoothstep(-0.25, 0.45, vDirection.y);
          float zenithBoost = smoothstep(0.1, 1.0, vDirection.y);
          vec3 baseColor = mix(${nh}, ${vi}, horizonMix);
          vec3 finalColor = baseColor * 0.78 + ${vi} * zenithBoost * 0.1;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,uniforms:{[vi]:{value:new ue},[nh]:{value:new ue(.42,.5,.6)}},side:Jt,depthWrite:!1,fog:!1})}get color(){return this.uniforms[vi].value}}var pg;class zC{constructor(e){C(this,"container");C(this,"viewport");C(this,"renderer");C(this,"camera");C(this,"scene");C(this,"chunkLayer",new tn);C(this,"entityLayer",new tn);C(this,"entityAmbientLight");C(this,"buildPlane");C(this,"hoverBox");C(this,"hoverIndicatorRoot",new tn);C(this,"crosshair");C(this,"startupLoadingOverlay");C(this,"startupLoadingSubtitle");C(this,"mobileMoveStick");C(this,"mobileMoveStickThumb");C(this,"sidebar");C(this,"sidebarToggleButton");C(this,"historyControls");C(this,"undoButton");C(this,"redoButton");C(this,"toolbelt");C(this,"toolToggleButton");C(this,"paletteContainer");C(this,"shapePaletteContainer");C(this,"paletteFilterInput");C(this,"prefabPaletteContainer");C(this,"prefabFilterInput");C(this,"selectionCreatePrefabButton");C(this,"selectionClearButton");C(this,"selectionDeleteButton");C(this,"selectionFillTooltip");C(this,"selectionFillButton");C(this,"selectionCopyButton");C(this,"selectionPasteButton");C(this,"prefabExportButton");C(this,"prefabImportButton");C(this,"prefabPublishButton");C(this,"prefabRenameButton");C(this,"prefabDeleteButton");C(this,"prefabSelectionStatus");C(this,"entityListContainer");C(this,"entityOptionsInput");C(this,"entityAddButton");C(this,"entitySaveButton");C(this,"entityDeleteButton");C(this,"exportButton");C(this,"autosaveSlotSelect");C(this,"autosaveSlotNewButton");C(this,"autosaveSlotDuplicateButton");C(this,"autosaveSlotRenameButton");C(this,"autosaveSlotDeleteButton");C(this,"autosaveSlotClearButton");C(this,"lightingAmbientInput");C(this,"fogColorInput");C(this,"skyboxIntensityInput");C(this,"resolutionPresetInput");C(this,"viewDistancePresetInput");C(this,"viewDistanceCustomInput");C(this,"templateThemeSelect");C(this,"templateSeedInput");C(this,"templateSizeInput");C(this,"templateHeightInput");C(this,"templateApplyButton");C(this,"debugPanel");C(this,"debugSummaryLine");C(this,"debugMemoryLine");C(this,"debugRenderLine");C(this,"debugSceneLine");C(this,"chunkMesherWorker");C(this,"cubeTextureLoader",new qy);C(this,"particleTextureLoader",new Xg);C(this,"audioLoader",new ex);C(this,"audioListener",new ox);C(this,"gltfLoader",new uE);C(this,"chunkBatchRenderer",new Ew(this.chunkLayer));C(this,"chunkMeshManager",null);C(this,"chunkBlockMaterialManager",null);C(this,"chunkRendererHost",null);C(this,"entityMeshManager");C(this,"preOcclusionChunkModes",new Map);C(this,"nextPreOcclusionChunkModes",new Map);C(this,"entityModelCache",new Map);C(this,"entityFallbackObjects",new Map);C(this,"entityRenderObjects",new Set);C(this,"deferredEntityDisposals",[]);C(this,"blockBreakEmitters",new Map);C(this,"exclusiveAudioStates",new Map);C(this,"audioBufferCache",new Map);C(this,"blockHitDustEmitter",null);C(this,"selectedEntityMarker",null);C(this,"world",new jc);C(this,"atlas",null);C(this,"atlasSnapshotCache",null);C(this,"editorBlockCatalog",hl);C(this,"selectedBlockTypeId",((pg=hl[0])==null?void 0:pg.id)??1);C(this,"selectedAppearanceKey","");C(this,"selectedShapeGroup","cube");C(this,"placementRotationY",0);C(this,"prefabs",[]);C(this,"prefabPreviewObjectUrls",new Map);C(this,"selectedPrefabId",null);C(this,"prefabFilter","");C(this,"prefabPaletteHighlightTimer");C(this,"prefabSelectionStart",null);C(this,"prefabSelectionWidthEnd",null);C(this,"prefabSelectionWidthAxis",null);C(this,"prefabSelectionEnd",null);C(this,"prefabSelectionBounds",null);C(this,"prefabSelectionHasBlocks",!1);C(this,"selectionClipboard",null);C(this,"selectionPastePending",!1);C(this,"paletteFilter","");C(this,"hoveredPlacement",null);C(this,"hoveredBlock",null);C(this,"hoveredBlockHitPoint",null);C(this,"lastPointerEvent",null);C(this,"pointerDownEvent",null);C(this,"pointerLocked",!1);C(this,"mobileControlsEnabled",window.matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0);C(this,"mobileMoveTouchId",null);C(this,"mobileLookTouchId",null);C(this,"mobilePinchTouchIdA",null);C(this,"mobilePinchTouchIdB",null);C(this,"mobilePinchLastDistance",0);C(this,"mobileMoveStart",new We);C(this,"mobileMoveCurrent",new We);C(this,"mobileLookLast",new We);C(this,"mobileMoveInputX",0);C(this,"mobileMoveInputY",0);C(this,"mobileTapCandidates",new Map);C(this,"sidebarSwipeTouchId",null);C(this,"sidebarSwipeStartedOpen",!1);C(this,"sidebarSwipeStartX",0);C(this,"sidebarSwipeStartY",0);C(this,"sidebarSwipeLastX",0);C(this,"sidebarSwipeLastY",0);C(this,"mobileSidebarOpen",!1);C(this,"mobileSidebarContentVisible",!1);C(this,"debugVisible",!1);C(this,"lastDebugTouchToggleAt",0);C(this,"suppressTouchToolActions",!1);C(this,"fileName","untitled-world-map.json");C(this,"currentAutosaveSlotId",Vm);C(this,"autosaveSlots",[]);C(this,"frameCounter",0);C(this,"fps",0);C(this,"lastFpsSampleAt",performance.now());C(this,"nextWorkerRequestId",1);C(this,"nextChunkBuildGeneration",1);C(this,"activeChunkBuildGeneration",0);C(this,"pendingChunkBuildPriorities",new Map);C(this,"pendingWorkerBlockUpdates",new Map);C(this,"chunkBuildWaiters",[]);C(this,"inFlightChunkBuildIds",new Set);C(this,"inFlightChunkBuildPriorities",new Map);C(this,"deferredInteractiveChunkBuildResults",[]);C(this,"deferredBackgroundChunkBuildResults",[]);C(this,"chunkBuildRequestGenerations",new Map);C(this,"lastInteractiveChunkBuildRequestAt",-1/0);C(this,"workerSyncedChunkIds",new Set);C(this,"chunkBuildDispatchInProgress",!1);C(this,"fogColor",new ue(1,1,1));C(this,"skyboxIntensity",1);C(this,"skyboxMesh",null);C(this,"pendingSkyboxTexture",null);C(this,"spectatorPitch",.95);C(this,"spectatorYaw",.75);C(this,"pressedKeys",new Set);C(this,"lightingAmbient",1);C(this,"fogColorHex","#ffffff");C(this,"skyboxUiIntensity",1);C(this,"resolutionPreset","MEDIUM");C(this,"viewDistancePreset","MEDIUM");C(this,"viewDistanceCustomDistance",ar.MEDIUM.distance);C(this,"currentTool","build");C(this,"undoStack",[]);C(this,"redoStack",[]);C(this,"autosaveDirtyChunkIds",new Set);C(this,"autosaveEntitiesDirty",!1);C(this,"autosaveFullWorldDirty",!0);C(this,"selectedEntityKey",null);C(this,"autosaveTimeoutId",null);C(this,"viewStateAutosaveTimeoutId",null);C(this,"handleResize",()=>{const e=this.viewport.clientWidth,t=this.viewport.clientHeight;this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)});C(this,"handleSidebarTransitionEnd",e=>{e.target!==this.sidebar||e.propertyName!=="transform"||this.mobileSidebarOpen||this.setMobileSidebarContentVisible(!1)});C(this,"handlePointerMove",e=>{if(e.pointerType!=="touch"){if(this.pointerLocked){this.updateSpectatorRotation(e.movementX,e.movementY),this.updateHoverFromScreenCenter();return}this.lastPointerEvent=e,this.mobileControlsEnabled?this.shouldUseSelectionCenterTarget()?this.updateHoverFromScreenCenter():this.updateHoverFromPointer(e):this.clearHover()}});C(this,"handlePointerDown",e=>{var t,n;if(e.pointerType!=="touch"){if(this.resumeAudioContext(),!this.pointerLocked&&!this.mobileControlsEnabled){(n=(t=this.renderer.domElement).requestPointerLock)==null||n.call(t),this.pointerDownEvent=null;return}this.lastPointerEvent=e,this.updateHoverFromScreenCenter(),this.pointerDownEvent=e}});C(this,"handlePointerUp",e=>{if(e.pointerType==="touch"||(this.pointerLocked?this.updateHoverFromScreenCenter():(this.lastPointerEvent=e,this.mobileControlsEnabled?this.shouldUseSelectionCenterTarget()?this.updateHoverFromScreenCenter():this.updateHoverFromPointer(e):this.clearHover()),!this.pointerDownEvent))return;const t=Math.hypot(e.clientX-this.pointerDownEvent.clientX,e.clientY-this.pointerDownEvent.clientY),n=this.pointerDownEvent.button;this.pointerDownEvent=null,!(t>4)&&this.applyCurrentTool(n)});C(this,"handleKeyDown",e=>{if(hg(e.target))return;const t=cg(e.code);if(this.pressedKeys.add(t),e.ctrlKey||e.metaKey){if(e.key.toLowerCase()==="z"&&!e.shiftKey){e.preventDefault(),this.undo();return}if(e.key.toLowerCase()==="y"||e.key.toLowerCase()==="z"&&e.shiftKey){e.preventDefault(),this.redo();return}}if(e.key.toLowerCase()==="g"){this.toggleDebugPanel();return}if(e.code==="Space"){e.preventDefault(),e.repeat||this.setMobileSidebarOpen(!this.mobileSidebarOpen);return}if(e.code==="KeyM"){e.preventDefault(),e.repeat||this.toggleToolMode();return}if(e.code==="Escape"&&this.selectionPastePending){e.preventDefault(),this.cancelPasteSelection();return}if(e.code==="KeyR"){e.preventDefault(),e.repeat||this.currentTool==="build"&&this.rotatePlacement(e.shiftKey?-1:1);return}});C(this,"handleKeyUp",e=>{hg(e.target)||this.pressedKeys.delete(cg(e.code))});C(this,"handleTouchStart",e=>{if(this.resumeAudioContext(),e.touches.length!==5){if(!this.mobileControlsEnabled)return;e.preventDefault();const n=this.viewport.clientWidth;for(const i of Array.from(e.changedTouches)){const r=i.clientX<n*bC?"move":"look";this.mobileTapCandidates.set(i.identifier,{zone:r,startX:i.clientX,startY:i.clientY,lastX:i.clientX,lastY:i.clientY,moved:!1,time:performance.now()}),r==="move"&&this.mobileMoveTouchId===null?(this.mobileMoveTouchId=i.identifier,this.mobileMoveStart.set(i.clientX,i.clientY),this.mobileMoveCurrent.copy(this.mobileMoveStart),this.updateMobileMoveStick()):r==="look"&&this.mobileLookTouchId===null&&(this.mobileLookTouchId=i.identifier,this.mobileLookLast.set(i.clientX,i.clientY),this.shouldUseSelectionCenterTarget()?this.updateHoverFromScreenCenter():this.updateHoverFromClientPosition(i.clientX,i.clientY))}this.updateMobilePinchState(e.touches);return}const t=performance.now();t-this.lastDebugTouchToggleAt<_C||(this.lastDebugTouchToggleAt=t,this.cancelActiveTouchInteractions(),this.suppressTouchToolActions=!0,e.preventDefault(),e.stopPropagation(),this.toggleDebugPanel())});C(this,"handleTouchMove",e=>{if(this.mobileControlsEnabled){e.preventDefault(),this.updateMobilePinchState(e.touches);for(const t of Array.from(e.changedTouches)){const n=this.mobileTapCandidates.get(t.identifier);if(n&&(n.lastX=t.clientX,n.lastY=t.clientY,Math.hypot(t.clientX-n.startX,t.clientY-n.startY)>EC&&(n.moved=!0)),t.identifier===this.mobileMoveTouchId)this.mobileMoveCurrent.set(t.clientX,t.clientY),this.updateMobileMoveStick();else if(t.identifier===this.mobileLookTouchId){if(this.mobilePinchTouchIdA===t.identifier||this.mobilePinchTouchIdB===t.identifier){this.mobileLookLast.set(t.clientX,t.clientY);continue}this.updateSpectatorRotation(t.clientX-this.mobileLookLast.x,t.clientY-this.mobileLookLast.y),this.mobileLookLast.set(t.clientX,t.clientY),this.shouldUseSelectionCenterTarget()?this.updateHoverFromScreenCenter():this.updateHoverFromClientPosition(t.clientX,t.clientY)}}}});C(this,"handleTouchEnd",e=>{if(this.mobileControlsEnabled){if(e.preventDefault(),this.suppressTouchToolActions){e.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(e.changedTouches);return}this.finishTouchSequence(e.changedTouches)}});C(this,"handleTouchCancel",e=>{if(this.mobileControlsEnabled){if(e.preventDefault(),this.suppressTouchToolActions){e.touches.length===0&&(this.suppressTouchToolActions=!1),this.cancelEndedTouchControls(e.changedTouches);return}this.finishTouchSequence(e.changedTouches,!0)}});C(this,"handlePointerLockChange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,this.pointerLocked&&this.updateHoverFromScreenCenter()});C(this,"handleSidebarTouchStart",e=>{if(e.touches.length!==1){this.resetSidebarSwipeState();return}const t=e.touches[0];if(!this.mobileSidebarOpen){const n=this.sidebarToggleButton.getBoundingClientRect();if(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom){this.resetSidebarSwipeState();return}}this.sidebarSwipeTouchId=t.identifier,this.sidebarSwipeStartedOpen=this.mobileSidebarOpen,this.sidebarSwipeStartX=t.clientX,this.sidebarSwipeStartY=t.clientY,this.sidebarSwipeLastX=t.clientX,this.sidebarSwipeLastY=t.clientY});C(this,"handleSidebarTouchMove",e=>{if(this.sidebarSwipeTouchId===null)return;const t=Array.from(e.changedTouches).find(r=>r.identifier===this.sidebarSwipeTouchId);if(!t)return;this.sidebarSwipeLastX=t.clientX,this.sidebarSwipeLastY=t.clientY;const n=this.sidebarSwipeLastX-this.sidebarSwipeStartX,i=this.sidebarSwipeLastY-this.sidebarSwipeStartY;Math.abs(n)>16&&Math.abs(n)>Math.abs(i)&&e.preventDefault()});C(this,"handleSidebarTouchEnd",e=>{if(this.sidebarSwipeTouchId===null)return;const t=Array.from(e.changedTouches).find(o=>o.identifier===this.sidebarSwipeTouchId);if(!t)return;const n=t.clientX-this.sidebarSwipeStartX,i=t.clientY-this.sidebarSwipeStartY,r=this.sidebarSwipeStartedOpen;if(this.resetSidebarSwipeState(),r&&n<-72&&Math.abs(n)>Math.abs(i)*1.2){this.setMobileSidebarOpen(!1);return}!r&&n>40&&Math.abs(n)>Math.abs(i)*1.2&&this.setMobileSidebarOpen(!0)});C(this,"handleSidebarTouchCancel",()=>{this.resetSidebarSwipeState()});C(this,"handleBeforeUnload",()=>{this.flushAutosave(),this.flushViewStateAutosave()});C(this,"handleChunkMesherWorkerMessage",e=>{const t=e.data;if(t.type!=="built_chunk")return;const n=this.chunkBuildRequestGenerations.get(t.requestId);if(this.chunkBuildRequestGenerations.delete(t.requestId),n!==this.activeChunkBuildGeneration){this.inFlightChunkBuildIds.delete(t.chunkId),this.inFlightChunkBuildPriorities.delete(t.chunkId),this.resolveChunkBuildWaiters();return}const i={requestId:t.requestId,chunkId:t.chunkId,geometry:t.geometry};(this.inFlightChunkBuildPriorities.get(t.chunkId)??0)>=Va?this.deferredInteractiveChunkBuildResults.push(i):this.deferredBackgroundChunkBuildResults.push(i)});C(this,"renderLoop",()=>{var n;requestAnimationFrame(this.renderLoop),this.flushQueuedWorkerBlockUpdates(),this.processChunkBuildQueueFrame(this.activeChunkBuildGeneration),this.flushDeferredChunkBuildResults();const e=this.updateSpectatorCamera(1/60);(this.pointerLocked||this.shouldUseSelectionCenterTarget())&&e&&this.updateHoverFromScreenCenter(),this.updateSkybox(),this.chunkMeshManager||this.chunkBatchRenderer.update(1/60),this.updateBlockBreakEffects(1/60),(n=this.chunkBlockMaterialManager)==null||n.update(),this.updateViewDistanceVisibility(),this.renderer.render(this.scene,this.camera),this.flushDeferredEntityDisposals(),this.frameCounter++;const t=performance.now();t-this.lastFpsSampleAt>=1e3&&(this.fps=Math.round(this.frameCounter*1e3/(t-this.lastFpsSampleAt)),this.frameCounter=0,this.lastFpsSampleAt=t,this.updateDebugPanel())});this.container=document.createElement("div"),this.container.className="app-shell",this.viewport=document.createElement("div"),this.viewport.className="viewport",this.container.append(this.viewport);const t=document.createElement("div");t.className="overlay",this.container.append(t),this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",t.append(this.crosshair),this.startupLoadingOverlay=document.createElement("div"),this.startupLoadingOverlay.className="world-editor-loading-overlay",this.startupLoadingOverlay.innerHTML=`
      <div class="world-editor-loading-panel">
        <div class="world-editor-loading-title">Loading</div>
        <div class="world-editor-loading-subtitle">
          <span class="world-editor-loading-spinner" aria-hidden="true"></span>
        </div>
      </div>
    `,this.startupLoadingSubtitle=document.createElement("span"),this.startupLoadingSubtitle.textContent="Preparing editor...",this.startupLoadingOverlay.querySelector(".world-editor-loading-subtitle").append(this.startupLoadingSubtitle),t.append(this.startupLoadingOverlay),this.mobileMoveStick=document.createElement("div"),this.mobileMoveStick.className="mobile-move-stick",this.mobileMoveStick.hidden=!0,this.mobileMoveStickThumb=document.createElement("div"),this.mobileMoveStickThumb.className="mobile-move-stick-thumb",this.mobileMoveStick.append(this.mobileMoveStickThumb),t.append(this.mobileMoveStick),this.scene=new Tf,this.scene.add(this.chunkLayer),this.scene.add(this.entityLayer),this.entityAmbientLight=new Jy(new ue(16777215),1),this.scene.add(this.entityAmbientLight),this.camera=new Kt(55,1,.1,1e3),this.camera.position.set(18,20,18),this.camera.rotation.order="YXZ",this.camera.add(this.audioListener),this.applySpectatorCameraOrientation(),this.renderer=new bp({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ct,this.viewport.append(this.renderer.domElement),this.chunkBatchRenderer.setFogProvider(this.createFogUniformProvider()),this.entityMeshManager=new UT({addToScene:r=>this.entityLayer.add(r),createRenderMaterial:r=>this.createEntityRenderMaterial(r),getViewDistance:()=>this.getCurrentViewDistance(),loadEntityModelTemplate:r=>this.loadEntityModelTemplate(r),removeFromScene:r=>this.entityLayer.remove(r)}),this.buildPlane=new bt(new Ir(512,512),new jn({visible:!1,side:jt})),this.buildPlane.rotation.x=-Math.PI/2,this.buildPlane.position.y=-.5,this.scene.add(this.buildPlane),this.hoverBox=new Jh(new Wf(new Si(1.01,1.01,1.01)),new al({color:"#f5b942",transparent:!0,opacity:.95})),this.hoverBox.renderOrder=1e3,this.hoverBox.visible=!1,this.scene.add(this.hoverBox),this.hoverIndicatorRoot.add(this.createHoverFrameIndicator()),this.hoverIndicatorRoot.renderOrder=1e3,this.hoverIndicatorRoot.visible=!1,this.scene.add(this.hoverIndicatorRoot);const n=document.createElement("div");n.className="topbar",n.innerHTML=`
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
          <div class="shape-palette" data-pattern="shape-palette" aria-label="Block shape"></div>
          <div class="palette" data-pattern="palette"></div>
        </div>
      </details>
      <details class="sidebar-section" data-section="selection">
        <summary class="sidebar-summary">
          <span>Selection</span>
        </summary>
        <div class="sidebar-content">
          <div class="generator-grid">
            <button class="button" data-selection="create-prefab" type="button">Create Prefab</button>
            <button class="button" data-selection="clear" type="button">Clear</button>
            <button class="button" data-selection="delete" type="button">Delete</button>
            <span class="disabled-tooltip-wrap" data-selection="fill-tooltip" data-tooltip="">
              <button class="button" data-selection="fill" type="button">Fill</button>
            </span>
            <button class="button" data-selection="copy" type="button">Copy</button>
            <button class="button" data-selection="paste" type="button">Paste</button>
          </div>
          <p class="prefab-selection-status" data-selection="status" hidden></p>
        </div>
      </details>
      <details class="sidebar-section" data-section="prefabs">
        <summary class="sidebar-summary">
          <span>Prefabs</span>
        </summary>
        <div class="sidebar-content">
          <div class="generator-grid">
            <button class="button" data-prefab="rename" type="button">Rename</button>
            <button class="button" data-prefab="delete" type="button">Delete</button>
            <button class="button" data-prefab="import" type="button">Import</button>
            <button class="button" data-prefab="export" type="button">Export</button>
            <button class="button" data-prefab="publish" type="button">Publish</button>
          </div>
          <input class="generator-input" data-prefab="filter" type="text" name="prefab_filter" placeholder="Filter prefabs" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" data-form-type="other" data-lpignore="true" data-1p-ignore="true" />
          <div class="palette" data-prefab="palette"></div>
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
    `,this.sidebar.append(this.sidebarToggleButton),this.sidebar.addEventListener("transitionend",this.handleSidebarTransitionEnd),this.paletteContainer=i.querySelector('[data-pattern="palette"]'),this.shapePaletteContainer=i.querySelector('[data-pattern="shape-palette"]'),this.paletteFilterInput=i.querySelector('[data-pattern="filter"]'),this.prefabPaletteContainer=i.querySelector('[data-prefab="palette"]'),this.prefabFilterInput=i.querySelector('[data-prefab="filter"]'),this.selectionCreatePrefabButton=i.querySelector('[data-selection="create-prefab"]'),this.selectionClearButton=i.querySelector('[data-selection="clear"]'),this.selectionDeleteButton=i.querySelector('[data-selection="delete"]'),this.selectionFillTooltip=i.querySelector('[data-selection="fill-tooltip"]'),this.selectionFillButton=i.querySelector('[data-selection="fill"]'),this.selectionCopyButton=i.querySelector('[data-selection="copy"]'),this.selectionPasteButton=i.querySelector('[data-selection="paste"]'),this.prefabPublishButton=i.querySelector('[data-prefab="publish"]'),this.prefabRenameButton=i.querySelector('[data-prefab="rename"]'),this.prefabDeleteButton=i.querySelector('[data-prefab="delete"]'),this.prefabExportButton=i.querySelector('[data-prefab="export"]'),this.prefabImportButton=i.querySelector('[data-prefab="import"]'),this.prefabSelectionStatus=i.querySelector('[data-selection="status"]'),this.entityListContainer=i.querySelector('[data-entity="list"]'),this.entityOptionsInput=i.querySelector('[data-entity="options"]'),this.entityAddButton=i.querySelector('[data-entity="add"]'),this.entitySaveButton=i.querySelector('[data-entity="save"]'),this.entityDeleteButton=i.querySelector('[data-entity="delete"]'),this.exportButton=i.querySelector('[data-action="export"]'),this.autosaveSlotSelect=i.querySelector('[data-slot="select"]'),this.autosaveSlotNewButton=i.querySelector('[data-slot="new"]'),this.autosaveSlotDuplicateButton=i.querySelector('[data-slot="duplicate"]'),this.autosaveSlotRenameButton=i.querySelector('[data-slot="rename"]'),this.autosaveSlotDeleteButton=i.querySelector('[data-slot="delete"]'),this.autosaveSlotClearButton=i.querySelector('[data-slot="clear"]'),this.resolutionPresetInput=i.querySelector('[data-resolution="preset"]'),this.viewDistancePresetInput=i.querySelector('[data-view-distance="preset"]'),this.viewDistanceCustomInput=i.querySelector('[data-view-distance="custom"]'),this.lightingAmbientInput=i.querySelector('[data-lighting="ambient"]'),this.fogColorInput=i.querySelector('[data-lighting="fog-color"]'),this.skyboxIntensityInput=i.querySelector('[data-lighting="skybox-intensity"]'),this.templateThemeSelect=i.querySelector('[data-generator="theme"]'),this.templateSeedInput=i.querySelector('[data-generator="seed"]'),this.templateSizeInput=i.querySelector('[data-generator="size"]'),this.templateHeightInput=i.querySelector('[data-generator="height"]'),this.templateApplyButton=i.querySelector('[data-generator="apply"]'),this.paletteFilterInput.addEventListener("input",()=>{this.paletteFilter=this.paletteFilterInput.value,this.rebuildPalette()}),this.prefabFilterInput.addEventListener("input",()=>{this.prefabFilter=this.prefabFilterInput.value,this.rebuildPrefabPalette()}),this.restoreSidebarSectionState(i),this.bindSidebarSectionState(i),i.addEventListener("touchstart",this.handleSidebarTouchStart,{passive:!0}),i.addEventListener("touchmove",this.handleSidebarTouchMove,{passive:!1}),i.addEventListener("touchend",this.handleSidebarTouchEnd,{passive:!0}),i.addEventListener("touchcancel",this.handleSidebarTouchCancel,{passive:!0}),this.debugPanel=document.createElement("aside"),this.debugPanel.className="debug-panel",this.debugPanel.hidden=!0,this.debugPanel.innerHTML="<h2>Debug</h2>",this.debugSummaryLine=document.createElement("p"),this.debugMemoryLine=document.createElement("p"),this.debugRenderLine=document.createElement("p"),this.debugSceneLine=document.createElement("p"),this.debugPanel.append(this.debugSummaryLine,this.debugMemoryLine,this.debugRenderLine,this.debugSceneLine),this.historyControls=document.createElement("div"),this.historyControls.className="history-controls",this.historyControls.innerHTML=`
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
    `,this.toolToggleButton=this.toolbelt.querySelector("[data-tool-toggle]"),this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(this.currentTool)),t.append(n,i,this.debugPanel,this.historyControls,this.toolbelt),e.append(this.container),this.chunkMesherWorker=new Worker(new URL("/voxcinder/world-editor/assets/chunkMesherWorker-DtEkDleZ.js",import.meta.url),{type:"module"}),this.chunkMesherWorker.addEventListener("message",this.handleChunkMesherWorkerMessage),n.addEventListener("click",r=>{const o=r.target;o.closest("[data-action]")&&(r.preventDefault(),this.handleUiAction(o,Yn))}),i.addEventListener("click",r=>{this.handleUiAction(r.target,Yn)}),this.historyControls.addEventListener("click",r=>{this.handleUiAction(r.target,Yn)}),Yn.addEventListener("change",()=>{var o;const r=(o=Yn.files)==null?void 0:o[0];r&&this.importMap(r),Yn.value=""}),this.toolbelt.addEventListener("click",r=>{r.target.closest("[data-tool-toggle]")&&this.toggleToolMode()}),this.templateThemeSelect.addEventListener("change",()=>this.syncTemplateInputsToTheme()),this.templateApplyButton.addEventListener("click",()=>{this.applyThemeTemplate()}),this.autosaveSlotSelect.addEventListener("change",()=>{this.handleAutosaveSlotSelectionChange()}),this.autosaveSlotNewButton.addEventListener("click",()=>{this.createAutosaveSlotFromDefaultWorld()}),this.autosaveSlotDuplicateButton.addEventListener("click",()=>{this.duplicateCurrentAutosaveSlot()}),this.autosaveSlotRenameButton.addEventListener("click",()=>{this.renameCurrentAutosaveSlot()}),this.autosaveSlotDeleteButton.addEventListener("click",()=>{this.deleteCurrentAutosaveSlot()}),this.autosaveSlotClearButton.addEventListener("click",()=>{this.clearCurrentAutosaveSlot()}),this.selectionCreatePrefabButton.addEventListener("click",()=>{this.createPrefabFromSelection()}),this.selectionClearButton.addEventListener("click",()=>this.clearPrefabSelection()),this.selectionDeleteButton.addEventListener("click",()=>{this.deleteSelection()}),this.selectionFillButton.addEventListener("click",()=>{this.fillSelection()}),this.selectionCopyButton.addEventListener("click",()=>this.copySelection()),this.selectionPasteButton.addEventListener("click",()=>{this.beginPasteSelection()}),this.prefabRenameButton.addEventListener("click",()=>{this.renameSelectedPrefab()}),this.prefabDeleteButton.addEventListener("click",()=>{this.deleteSelectedPrefab()}),this.prefabPublishButton.addEventListener("click",()=>{this.publishSelectedPrefab()}),this.prefabExportButton.addEventListener("click",()=>{this.exportSelectedPrefab()}),this.prefabImportButton.addEventListener("click",()=>{this.importPrefabFromFile()}),this.syncPrefabSelectionUi(),this.entityAddButton.addEventListener("click",()=>{this.addEntityAtHover()}),this.entitySaveButton.addEventListener("click",()=>{this.saveSelectedEntity()}),this.entityDeleteButton.addEventListener("click",()=>{this.deleteSelectedEntity()}),this.resolutionPresetInput.addEventListener("change",()=>this.handleResolutionChange()),this.viewDistancePresetInput.addEventListener("change",()=>this.handleViewDistanceChange()),this.viewDistanceCustomInput.addEventListener("input",()=>this.handleViewDistanceChange()),this.lightingAmbientInput.addEventListener("input",()=>this.handleLightingChange()),this.fogColorInput.addEventListener("input",()=>this.handleLightingChange()),this.skyboxIntensityInput.addEventListener("input",()=>this.handleLightingChange()),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),this.renderer.domElement.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),this.renderer.domElement.addEventListener("touchend",this.handleTouchEnd,{passive:!1}),this.renderer.domElement.addEventListener("touchcancel",this.handleTouchCancel,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("beforeunload",this.handleBeforeUnload),document.addEventListener("pointerlockchange",this.handlePointerLockChange),this.handleResize(),this.loadSkybox(lC),this.populateTemplateThemeOptions(),this.syncResolutionInputs(),this.syncViewDistanceInputs(),this.applyResolutionSettings(),this.applyViewDistanceSettings(),this.applyLightingSettings(),this.initializeWorld(),this.updateDebugPanel(),this.renderLoop()}async initializeWorld(){var e;this.setStartupLoadingState("Loading block catalog...");try{this.editorBlockCatalog=await uT(),this.selectedBlockTypeId=((e=this.editorBlockCatalog[0])==null?void 0:e.id)??this.selectedBlockTypeId,this.selectedAppearanceKey="",this.selectedShapeGroup="cube",this.setStartupLoadingState("Restoring view..."),await this.restoreAutosavedViewState(),this.setStartupLoadingState("Checking save slots..."),await this.initializeAutosaveSlots(),this.loadLocalPrefabs(),this.setStartupLoadingState("Checking autosave...");const t=await this.getRestorableAutosavePayload(this.currentAutosaveSlotId);if(t)this.hideStartupLoadingOverlay(),await this.applyAutosavedWorldPayload(t,!1);else{this.setStartupLoadingState("Downloading world...");const n=await this.loadDefaultWorldMapPayload();this.hideStartupLoadingOverlay(),await this.applyDefaultWorldMapPayload(n,!1)}await this.importSharedMapFromUrlIfPresent(),await this.importSharedPrefabFromUrlIfPresent()}finally{this.startupLoadingOverlay.hidden||this.hideStartupLoadingOverlay()}}async importSharedMapFromUrlIfPresent(){const e=new URL(window.location.href),t=e.searchParams.get("map");t&&(e.searchParams.delete("map"),window.history.replaceState(null,"",e.toString()),await this.importPublishedMap(t))}async importSharedPrefabFromUrlIfPresent(){const e=new URL(window.location.href),t=e.searchParams.get("prefab");t&&(e.searchParams.delete("prefab"),window.history.replaceState(null,"",e.toString()),await this.importPublishedPrefabOrThrow(t))}setStartupLoadingState(e){this.startupLoadingSubtitle.textContent=e,this.startupLoadingOverlay.hidden=!1}hideStartupLoadingOverlay(){this.startupLoadingOverlay.hidden=!0}async initializeAutosaveSlots(){const e=await e1();if(e.length===0){const i=sg(Vm,Hm);this.autosaveSlots=[i],await lr(this.autosaveSlots),await co(i.id),this.currentAutosaveSlotId=i.id,this.syncAutosaveSlotControls();return}this.autosaveSlots=e;const t=await t1(),n=this.autosaveSlots.find(i=>i.id===t)??this.autosaveSlots[0];this.currentAutosaveSlotId=n.id,await co(n.id),this.syncAutosaveSlotControls()}syncAutosaveSlotControls(){this.autosaveSlotSelect.replaceChildren();for(const t of this.autosaveSlots){const n=document.createElement("option");n.value=t.id,n.textContent=t.name,n.selected=t.id===this.currentAutosaveSlotId,this.autosaveSlotSelect.append(n)}const e=this.autosaveSlots.length>1;this.autosaveSlotDeleteButton.disabled=!e,this.autosaveSlotDeleteButton.title=e?"Delete current slot":"At least one slot is required"}async handleAutosaveSlotSelectionChange(){const e=this.autosaveSlotSelect.value;if(!e||e===this.currentAutosaveSlotId){this.syncAutosaveSlotControls();return}await this.flushAutosave(),this.currentAutosaveSlotId=e,await co(this.currentAutosaveSlotId),this.syncAutosaveSlotControls();const t=await this.getRestorableAutosavePayload(this.currentAutosaveSlotId);if(t){await this.applyAutosavedWorldPayload(t,!1),this.updateStatus(`Loaded save slot "${this.getCurrentAutosaveSlotName()}".`);return}await this.loadDefaultWorldMap(!1),this.updateStatus(`Created default world in slot "${this.getCurrentAutosaveSlotName()}".`)}async createAutosaveSlot(e){const t=sg($C(),e);return this.autosaveSlots=[...this.autosaveSlots,t],this.currentAutosaveSlotId=t.id,await lr(this.autosaveSlots),await co(this.currentAutosaveSlotId),this.syncAutosaveSlotControls(),t}async createAutosaveSlotFromDefaultWorld(){const e=`Slot ${this.autosaveSlots.length+1}`,t=window.prompt("New save slot name",e);if(t===null)return;const n=t.trim()||e;await this.flushAutosave();const i=await this.createAutosaveSlot(n);await this.loadDefaultWorldMap(!1),this.updateStatus(`Created save slot "${i.name}" with the default world.`)}async duplicateCurrentAutosaveSlot(){const e=this.getNextDuplicatedAutosaveSlotName();await this.flushAutosave();const t=await this.createAutosaveSlot(e);this.markFullWorldAutosaveDirty(),await this.flushAutosave(),this.updateStatus(`Duplicated save slot into "${t.name}".`)}getNextDuplicatedAutosaveSlotName(){const e=`${this.getCurrentAutosaveSlotName()} Copy`,t=new Set(this.autosaveSlots.map(i=>i.name));if(!t.has(e))return e;let n=2;for(;t.has(`${e} ${n}`);)n+=1;return`${e} ${n}`}async renameCurrentAutosaveSlot(){const e=this.autosaveSlots.find(i=>i.id===this.currentAutosaveSlotId);if(!e)return;const t=window.prompt("Rename save slot",e.name);if(t===null)return;const n=t.trim()||e.name;if(n===e.name){this.syncAutosaveSlotControls();return}this.autosaveSlots=this.autosaveSlots.map(i=>i.id===e.id?{...i,name:n}:i),await lr(this.autosaveSlots),this.syncAutosaveSlotControls(),this.updateStatus(`Renamed save slot to "${n}".`)}async deleteCurrentAutosaveSlot(){const e=this.autosaveSlots.find(o=>o.id===this.currentAutosaveSlotId);if(!e)return;if(this.autosaveSlots.length<=1){this.updateStatus("At least one save slot is required."),this.syncAutosaveSlotControls();return}if(!window.confirm(`Delete save slot "${e.name}"?`)){this.syncAutosaveSlotControls();return}const n=this.autosaveSlots.findIndex(o=>o.id===e.id),i=this.autosaveSlots[n+1]??this.autosaveSlots[n-1];this.autosaveSlots=this.autosaveSlots.filter(o=>o.id!==e.id),await Zu(e.id),this.currentAutosaveSlotId=i.id,await lr(this.autosaveSlots),await co(this.currentAutosaveSlotId),this.syncAutosaveSlotControls();const r=await this.getRestorableAutosavePayload(this.currentAutosaveSlotId);r?await this.applyAutosavedWorldPayload(r,!1):await this.loadDefaultWorldMap(!1),this.updateStatus(`Deleted save slot "${e.name}".`)}async clearCurrentAutosaveSlot(){const e=this.getCurrentAutosaveSlotName();window.confirm(`Clear save slot "${e}" and replace it with an empty map?`)&&(await this.resetToEmptyMap(!1),await this.setAutosaveSlotPublishMetadata(this.currentAutosaveSlotId,{editToken:void 0,lastPublishedAt:void 0,publishedMapId:void 0,sourceMapId:void 0,sourceUrl:void 0,sourceVersionId:void 0}),this.updateStatus(`Cleared save slot "${e}".`))}getCurrentAutosaveSlotName(){var e;return((e=this.autosaveSlots.find(t=>t.id===this.currentAutosaveSlotId))==null?void 0:e.name)??Hm}getCurrentAutosaveSlot(){return this.autosaveSlots.find(e=>e.id===this.currentAutosaveSlotId)}getUniqueAutosaveSlotName(e){const t=e.trim()||"Imported Map",n=new Set(this.autosaveSlots.map(r=>r.name));if(!n.has(t))return t;let i=2;for(;n.has(`${t} ${i}`);)i+=1;return`${t} ${i}`}async setAutosaveSlotPublishMetadata(e,t){this.autosaveSlots=this.autosaveSlots.map(n=>n.id===e?{...n,...t}:n),await lr(this.autosaveSlots),this.syncAutosaveSlotControls()}setMobileSidebarOpen(e,t=!0){this.mobileSidebarOpen!==e&&(e&&this.setMobileSidebarContentVisible(!0),this.mobileSidebarOpen=e,this.container.classList.toggle("mobile-sidebar-open",this.mobileSidebarOpen),this.sidebarToggleButton.setAttribute("aria-expanded",String(this.mobileSidebarOpen)),this.resetSidebarSwipeState(),t&&this.scheduleViewStateAutosave())}setMobileSidebarContentVisible(e){this.mobileSidebarContentVisible!==e&&(this.mobileSidebarContentVisible=e,this.container.classList.toggle("mobile-sidebar-content-visible",this.mobileSidebarContentVisible))}handleUiAction(e,t){var i;const n=(i=e.closest("[data-action]"))==null?void 0:i.dataset.action;if(n){if(n==="menu"){this.setMobileSidebarOpen(!this.mobileSidebarOpen);return}n==="undo"?this.undo():n==="redo"?this.redo():n==="import"?t.click():n==="export"?this.exportMap():n==="explore"?this.openExploreMode():n==="gallery"?this.openGallery():n==="publish"&&this.publishCurrentSlot()}}async finishTouchSequence(e,t=!1){for(const n of Array.from(e)){const i=this.mobileTapCandidates.get(n.identifier);if(this.mobileTapCandidates.delete(n.identifier),n.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),n.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null),(n.identifier===this.mobilePinchTouchIdA||n.identifier===this.mobilePinchTouchIdB)&&(this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0),!i||t)continue;const r=performance.now()-i.time;i.moved||r>MC||(this.shouldUseSelectionCenterTarget()?this.updateHoverFromScreenCenter():this.updateHoverFromClientPosition(i.lastX,i.lastY),await this.applyCurrentTool(0))}}cancelActiveTouchInteractions(){this.mobileTapCandidates.clear(),this.mobileLookTouchId=null,this.mobileMoveTouchId=null,this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0}cancelEndedTouchControls(e){for(const t of Array.from(e))this.mobileTapCandidates.delete(t.identifier),t.identifier===this.mobileMoveTouchId&&(this.mobileMoveTouchId=null,this.mobileMoveInputX=0,this.mobileMoveInputY=0,this.mobileMoveStick.hidden=!0),t.identifier===this.mobileLookTouchId&&(this.mobileLookTouchId=null),(t.identifier===this.mobilePinchTouchIdA||t.identifier===this.mobilePinchTouchIdB)&&(this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0)}updateMobilePinchState(e){const t=Array.from(e);if(t.length!==2){this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0;return}const n=this.mobileTapCandidates.get(t[0].identifier),i=this.mobileTapCandidates.get(t[1].identifier);if((n==null?void 0:n.zone)!=="look"||(i==null?void 0:i.zone)!=="look"){this.mobilePinchTouchIdA=null,this.mobilePinchTouchIdB=null,this.mobilePinchLastDistance=0;return}const r=t[0].clientX-t[1].clientX,o=t[0].clientY-t[1].clientY,a=Math.hypot(r,o);if(this.mobilePinchTouchIdA!==t[0].identifier||this.mobilePinchTouchIdB!==t[1].identifier){this.mobilePinchTouchIdA=t[0].identifier,this.mobilePinchTouchIdB=t[1].identifier,this.mobilePinchLastDistance=a;return}const l=a-this.mobilePinchLastDistance;this.mobilePinchLastDistance=a,!(Math.abs(l)<.5)&&(so.copy(this.camera.rotation),or.set(0,0,-1).applyEuler(so),this.camera.position.addScaledVector(or,l*SC),this.scheduleViewStateAutosave(),this.updateHoverFromScreenCenter())}updateMobileMoveStick(){if(this.mobileMoveTouchId===null){this.mobileMoveStick.hidden=!0,this.mobileMoveInputX=0,this.mobileMoveInputY=0;return}const e=this.mobileMoveCurrent.x-this.mobileMoveStart.x,t=this.mobileMoveCurrent.y-this.mobileMoveStart.y,n=Math.hypot(e,t),i=Math.min(n,oh),r=n>0?e/n:0,o=n>0?t/n:0,a=r*i,l=o*i;this.mobileMoveInputX=r*(i/oh),this.mobileMoveInputY=o*(i/oh),this.mobileMoveStick.hidden=!1,this.mobileMoveStick.style.left=`${this.mobileMoveStart.x}px`,this.mobileMoveStick.style.top=`${this.mobileMoveStart.y}px`,this.mobileMoveStickThumb.style.transform=`translate(${a}px, ${l}px)`}resetSidebarSwipeState(){this.sidebarSwipeTouchId=null,this.sidebarSwipeStartedOpen=!1,this.sidebarSwipeStartX=0,this.sidebarSwipeStartY=0,this.sidebarSwipeLastX=0,this.sidebarSwipeLastY=0}toggleDebugPanel(){this.debugVisible=!this.debugVisible,this.debugPanel.hidden=!this.debugVisible,this.updateStatus(this.debugVisible?"Debug mode enabled.":"Debug mode disabled."),this.updateDebugPanel()}async resetToEmptyMap(e=!0){var t;this.world.load({},this.editorBlockCatalog),this.selectedBlockTypeId=((t=this.world.blockTypes[0])==null?void 0:t.id)??1,this.resetBlockAppearanceSelection(),this.fileName="untitled-world-map.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),e?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus("Started a new empty world map.")}async loadDefaultWorldMap(e=!0){try{const t=await this.loadDefaultWorldMapPayload();await this.applyDefaultWorldMapPayload(t,e)}catch(t){console.error(t),await this.resetToEmptyMap(e),this.updateStatus(`Default world map load failed: ${t.message}`)}}async loadDefaultWorldMapPayload(){const e=await fetch(cC,{cache:"no-store"});if(!e.ok)throw new Error(`Failed to load default map: ${e.status} ${e.statusText}`);return await e.json()}async applyDefaultWorldMapPayload(e,t){var n;this.world.load(e,this.editorBlockCatalog),this.selectedBlockTypeId=((n=this.world.blockTypes[0])==null?void 0:n.id)??this.selectedBlockTypeId,this.resetBlockAppearanceSelection(),this.fileName="boilerplate.json",this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),t?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),t?await this.flushAutosave():this.flushAutosave(),this.updateStatus("Loaded default world map.")}populateTemplateThemeOptions(){this.templateThemeSelect.replaceChildren();for(const e of Jc){const t=document.createElement("option");t.value=e.id,t.textContent=e.label,this.templateThemeSelect.append(t)}this.syncTemplateInputsToTheme()}syncTemplateInputsToTheme(){const e=Jc.find(t=>t.id===this.templateThemeSelect.value);e&&(this.templateSizeInput.value=String(e.defaultSize),this.templateHeightInput.value=String(e.defaultHeight))}async importMap(e){try{const t=JSON.parse(await e.text());await this.importMapPayload(t,{fileName:e.name,slotName:e.name.replace(/\.json$/i,"")||"Imported Map",status:`Imported ${e.name}.`})}catch(t){console.error(t),this.updateStatus(`Import failed: ${t.message}`)}}async importPublishedMap(e,t){try{this.updateStatus("Importing shared map..."),await this.importPublishedMapOrThrow(e,t)}catch(n){console.error(n),this.updateStatus(`Shared map import failed: ${n.message}`)}}async importPublishedMapOrThrow(e,t,n){const i=A0(e),r=t&&t!=="latest"?await IA(i,t):await CA(i);await this.importMapPayload(r.worldMap,{fileName:`${r.mapId}.json`,slotName:(n==null?void 0:n.trim())||`Imported ${r.mapId}`,sourceMapId:r.mapId,sourceUrl:Xu(r.mapId),sourceVersionId:r.versionId,status:`Imported shared map ${r.mapId}.`})}async importMapPayload(e,t){var i;await this.flushAutosave();const n=await this.createAutosaveSlot(this.getUniqueAutosaveSlotName(t.slotName));await this.setAutosaveSlotPublishMetadata(n.id,{sourceMapId:t.sourceMapId,sourceUrl:t.sourceUrl,sourceVersionId:t.sourceVersionId}),this.world.load(e,this.editorBlockCatalog),this.selectedBlockTypeId=((i=this.world.blockTypes[0])==null?void 0:i.id)??this.selectedBlockTypeId,this.resetBlockAppearanceSelection(),this.fileName=t.fileName,this.undoStack=[],this.redoStack=[],this.updateHistoryButtons(),this.markFullWorldAutosaveDirty(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),await this.flushAutosave(),this.updateStatus(`${t.status} Created save slot "${n.name}".`)}async publishCurrentSlot(){const e=this.getCurrentAutosaveSlot();if(!e){this.updateStatus("No save slot is selected.");return}const t=e.name||this.fileName.replace(/\.json$/i,"")||"Untitled Map";await this.openPublishDialog(e,t)}async publishSelectedPrefab(){const e=this.prefabs.find(t=>t.id===this.selectedPrefabId);if(!e){this.updateStatus("No prefab selected.");return}await new Promise(t=>{const n=document.createElement("div");n.className="modal-overlay",n.innerHTML=`
        <form class="publish-modal" data-prefab-publish="form">
          <header class="gallery-modal-header">
            <h2>Publish Prefab</h2>
            <button class="button" data-prefab-publish="cancel" type="button">Cancel</button>
          </header>
          <div class="publish-modal-body">
            <p class="gallery-card-meta">${e.size.x}x${e.size.y}x${e.size.z}</p>
            <section class="publish-preview">
              <div class="publish-preview-header">
                <span>Preview</span>
                <button class="button" data-prefab-publish="reset-preview" type="button">Reset View</button>
              </div>
              <div class="publish-preview-frame" data-prefab-publish="preview">
                <span>No Preview</span>
              </div>
            </section>
            <label class="generator-field">
              <span>Title</span>
              <input class="generator-input" data-prefab-publish="title" type="text" maxlength="${$u}" required />
            </label>
            <label class="generator-field">
              <span>Author</span>
              <input class="generator-input" data-prefab-publish="author" type="text" maxlength="${Yu}" required />
            </label>
            <div class="publish-error" data-prefab-publish="error" role="alert" hidden></div>
          </div>
          <footer class="publish-modal-actions">
            <button class="button primary" data-prefab-publish="submit" type="submit">Publish</button>
          </footer>
        </form>
      `,document.body.append(n);const i=n.querySelector('[data-prefab-publish="form"]'),r=n.querySelector('[data-prefab-publish="cancel"]'),o=n.querySelector('[data-prefab-publish="submit"]'),a=n.querySelector('[data-prefab-publish="reset-preview"]'),l=n.querySelector('[data-prefab-publish="preview"]'),c=n.querySelector('[data-prefab-publish="title"]'),h=n.querySelector('[data-prefab-publish="author"]'),u=n.querySelector('[data-prefab-publish="error"]');let d=!1,f,p;c.value=e.title,h.value=ug(),l.replaceChildren(Object.assign(document.createElement("span"),{textContent:"Loading Preview..."})),c.focus(),c.select();const _=()=>{f==null||f.dispose(),document.removeEventListener("keydown",m),n.remove(),t()},m=v=>{v.key==="Escape"&&!d&&(v.preventDefault(),_())};document.addEventListener("keydown",m);const g=v=>{d=v,r.disabled=v,a.disabled=v||!f,c.disabled=v,h.disabled=v,o.disabled=v,o.classList.toggle("button-busy",v),o.setAttribute("aria-busy",String(v)),o.innerHTML=v?'Publish <span class="button-busy-spinner" aria-hidden="true"></span>':"Publish"},x=v=>{u.hidden=!v,u.textContent=v??""};(async()=>{a.disabled=!0,p=(async()=>{const v=document.createElement("canvas");v.width=ao,v.height=lo,f=await this.createPrefabPreviewController(e,v),l.replaceChildren(v),f.render()})().catch(v=>{console.error(v),l.replaceChildren(Object.assign(document.createElement("span"),{textContent:"No Preview"}))}).finally(()=>{p=void 0,a.disabled=d||!f}),await p})(),a.addEventListener("click",()=>{f==null||f.resetView()}),n.addEventListener("click",v=>{!d&&(v.target===n||v.target.closest('[data-prefab-publish="cancel"]'))&&_()}),i.addEventListener("submit",async v=>{if(v.preventDefault(),d)return;const A=c.value.trim(),T=Il(h.value);if(!A){x("Title is required."),c.focus();return}g(!0);try{dg(T),this.updateStatus("Publishing prefab..."),p&&await p;const E=f?await f.captureBlob():await this.createPrefabThumbnailBlob(e),y=Fp({anchor:e.anchor,authorName:T,blockTypes:e.blockTypes,blocks:e.blocks,size:e.size,title:A},this.editorBlockCatalog),M=await OA({authorName:T,thumbnailBlob:E,title:A,worldPrefab:y});e.title=A,e.updatedAt=Date.now(),this.persistLocalPrefabs(),this.rebuildPrefabPalette(),this.updateStatus(`Published prefab ${M.prefabId}.`),_(),this.openGallery(void 0,M.prefabId,"prefabs")}catch(E){console.error(E);const y=E.message;x(y),this.updateStatus(`Prefab publish failed: ${y}`),g(!1)}})})}openPublishDialog(e,t){return new Promise(n=>{const i=document.createElement("div");i.className="modal-overlay";let r=ZC(e),o=r.isUpdatingPublishedMap,a=!o;i.innerHTML=`
        <form class="publish-modal" data-publish="form">
          <header class="gallery-modal-header">
            <h2>Publish Map</h2>
            <button class="button" data-publish="cancel" type="button">Cancel</button>
          </header>
          <div class="publish-modal-body">
            <div class="publish-version" data-publish="version">${rg(r)}</div>
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
              <input class="generator-input" data-publish="title" type="text" maxlength="${Wu}" required />
            </label>
            <label class="generator-field">
              <span>Author</span>
              <input class="generator-input" data-publish="author" type="text" maxlength="${qu}" required />
            </label>
            <label class="generator-field">
              <span>Description (optional)</span>
              <textarea class="generator-input publish-description" data-publish="description" maxlength="${Gu}" rows="4"></textarea>
            </label>
            <div class="publish-error" data-publish="error" role="alert" hidden></div>
          </div>
          <footer class="publish-modal-actions">
            <button class="button primary" data-publish="submit" type="submit">Publish</button>
          </footer>
        </form>
      `,document.body.append(i);const l=i.querySelector('[data-publish="form"]'),c=i.querySelector('[data-publish="cancel"]'),h=i.querySelector('[data-publish="submit"]'),u=i.querySelector('[data-publish="refresh-preview"]'),d=i.querySelector('[data-publish="preview"]'),f=i.querySelector('[data-publish="update-preview"]'),p=i.querySelector('[data-publish="title"]'),_=i.querySelector('[data-publish="author"]'),m=i.querySelector('[data-publish="description"]'),g=i.querySelector('[data-publish="error"]'),x=i.querySelector('[data-publish="version"]');let S=!1,v=r.isChecking,A,T;p.value=t,_.value=ug(),f.checked=a,f.disabled=!o,ho(d,T,a),u.disabled=!a,h.disabled=v,p.focus(),p.select();const E=()=>{T&&URL.revokeObjectURL(T),document.removeEventListener("keydown",y),i.remove(),n()},y=P=>{P.key==="Escape"&&!S&&(P.preventDefault(),E())};document.addEventListener("keydown",y);const M=P=>{T&&URL.revokeObjectURL(T),A=P,T=P?URL.createObjectURL(P):void 0,ho(d,T,a)},B=async()=>{M(await this.createMapThumbnailBlob())};a&&B();const I=P=>{r=P,v=r.isChecking,o=r.isUpdatingPublishedMap,x.textContent=rg(r),o?(f.disabled=S,u.disabled=S||!a):(a=!0,f.checked=!0,f.disabled=!0,u.disabled=S,A||B(),ho(d,T,a)),h.disabled=S||v};e.publishedMapId&&e.editToken&&this.resolvePublishDialogState(e).then(I);const O=P=>{S=P,c.disabled=P,f.disabled=P,u.disabled=P||!a,p.disabled=P,_.disabled=P,m.disabled=P,h.disabled=P||v,h.classList.toggle("button-busy",P),h.setAttribute("aria-busy",String(P)),h.innerHTML=P?'Publish <span class="button-busy-spinner" aria-hidden="true"></span>':"Publish"},z=P=>{g.hidden=!P,g.textContent=P??""};i.addEventListener("click",P=>{S||(P.target===i||P.target.closest('[data-publish="cancel"]'))&&E()}),u.addEventListener("click",()=>{S||(a||(a=!0,f.checked=!0),B(),u.disabled=!a)}),f.addEventListener("change",()=>{if(!S){if(!o){a=!0,f.checked=!0,ho(d,T,a);return}a=f.checked,a&&!A&&B(),u.disabled=!a,ho(d,T,a)}}),l.addEventListener("submit",async P=>{var U;if(P.preventDefault(),S||v)return;z(void 0);const k=p.value.trim(),V=Il(_.value);if(!k){z("Title is required."),this.updateStatus("Publish failed: title is required."),p.focus();return}_.value=V,O(!0);try{z(void 0),this.updateStatus("Publishing map..."),dg(V),await this.flushAutosave();const X=await RA({authorName:V,description:m.value.trim()||void 0,editToken:r.isUpdatingPublishedMap?e.editToken:void 0,mapId:r.isUpdatingPublishedMap?e.publishedMapId:void 0,sourceMapId:e.sourceMapId,sourceVersionId:e.sourceVersionId,thumbnailBlob:a?A:void 0,title:k,worldMap:fT(this.world.toJson(),this.editorBlockCatalog)});await this.setAutosaveSlotPublishMetadata(e.id,{editToken:X.editToken,lastPublishedAt:new Date().toISOString(),publishedMapId:X.mapId});const j=X.shareUrl||Xu(X.mapId);await((U=navigator.clipboard)==null?void 0:U.writeText(j).catch(()=>{})),this.updateStatus(`Published ${X.mapId}. Share URL: ${j}`),E(),this.openGallery(X.mapId)}catch(X){console.error(X);const j=X.message;z(j),this.updateStatus(`Publish failed: ${j}`),O(!1)}})})}async resolvePublishDialogState(e){if(!e.publishedMapId||!e.editToken)return{isChecking:!1,isUpdatingPublishedMap:!1};try{const t=await this.findPublishedMapLatestVersionNumber(e.publishedMapId);return t?{isChecking:!1,isUpdatingPublishedMap:!0,latestVersionNumber:t}:(await this.setAutosaveSlotPublishMetadata(e.id,{editToken:void 0,lastPublishedAt:void 0,publishedMapId:void 0}),{isChecking:!1,isUpdatingPublishedMap:!1})}catch(t){return JC(t)?(await this.setAutosaveSlotPublishMetadata(e.id,{editToken:void 0,lastPublishedAt:void 0,publishedMapId:void 0}),{isChecking:!1,isUpdatingPublishedMap:!1}):(console.warn("Failed to check published map before opening Publish dialog.",t),{isChecking:!1,isUpdatingPublishedMap:!1})}}async findPublishedMapLatestVersionNumber(e){const n=(await Mm()).find(i=>i.mapId===e);if(n)return KC(n.latestVersionId)??n.versionCount}async openGallery(e,t,n="maps"){const i=document.createElement("div");i.className="modal-overlay",i.innerHTML=`
      <section class="gallery-modal" role="dialog" aria-modal="true" aria-label="Gallery">
        <header class="gallery-modal-header">
          <h2>Gallery</h2>
          <button class="button" data-gallery="close" type="button">Close</button>
        </header>
        <div class="gallery-tabs">
          <button class="button ${n==="maps"?"primary":""}" data-gallery-tab="maps" type="button">Maps</button>
          <button class="button ${n==="prefabs"?"primary":""}" data-gallery-tab="prefabs" type="button">Prefabs</button>
        </div>
        <div class="gallery-error" data-gallery="error" role="alert" hidden></div>
        <div class="gallery-grid" data-gallery="content">
          <p class="gallery-empty">Loading gallery...</p>
        </div>
      </section>
    `,document.body.append(i);const r=()=>{document.removeEventListener("keydown",o),i.remove()},o=u=>{u.key==="Escape"&&(u.preventDefault(),r())};document.addEventListener("keydown",o),i.addEventListener("click",u=>{(u.target===i||u.target.closest('[data-gallery="close"]'))&&r()});const a=i.querySelector('[data-gallery="content"]'),l=i.querySelector('[data-gallery="error"]'),c=Array.from(i.querySelectorAll("[data-gallery-tab]")),h=async u=>{for(const d of c)d.classList.toggle("primary",d.dataset.galleryTab===u);l.hidden=!0,a.replaceChildren(Object.assign(document.createElement("p"),{className:"gallery-empty",textContent:u==="maps"?"Loading maps...":"Loading prefabs..."}));try{if(u==="maps"){const d=await Mm();this.renderGalleryMaps(a,d,r,l,e)}else{const d=await NA();this.renderGalleryPrefabs(a,d,r,l,t)}}catch(d){console.error(d);const f=document.createElement("p");f.className="gallery-empty",f.textContent=`Failed to load gallery: ${d.message}`,a.replaceChildren(f)}};for(const u of c)u.addEventListener("click",()=>{h(u.dataset.galleryTab||"maps")});h(n)}renderGalleryMaps(e,t,n,i,r){if(t.length===0){const u=document.createElement("p");u.className="gallery-empty",u.textContent="No maps have been published yet.",e.replaceChildren(u);return}e.replaceChildren();const o=[],a=[];let l=!1;const c=u=>{i.hidden=!u,i.textContent=u??""},h=(u,d)=>{l=u;for(const f of a)f.disabled=u;for(const f of o){f.disabled=u;const p=f===d;f.classList.toggle("button-busy",u&&p),f.setAttribute("aria-busy",String(u&&p)),f.innerHTML=u&&p?'Import <span class="button-busy-spinner" aria-hidden="true"></span>':"Import"}};for(const u of t){const d=document.createElement("article");d.className="gallery-card",u.mapId===r&&(d.classList.add("highlighted"),d.setAttribute("aria-current","true"));const f=document.createElement("div");if(f.className="gallery-card-thumb",u.thumbnailUrl){const M=document.createElement("img");M.src=u.thumbnailUrl,M.alt="",f.append(M)}else f.textContent="No Preview";const p=document.createElement("div");p.className="gallery-card-body";const _=document.createElement("h3");_.textContent=u.title;const m=document.createElement("div");m.className="gallery-card-byline";const g=document.createElement("span");g.className="gallery-card-author",g.textContent=`by ${u.authorName||"Unknown"}`;const x=document.createElement("span");x.className="gallery-card-updated",x.textContent=og(u.updatedAt),m.append(g,x);const S=document.createElement("p");S.textContent=u.description||"No description";const v=document.createElement("p");v.className="gallery-card-meta",p.append(_,m,S,v);const A=document.createElement("div");A.className="gallery-card-actions gallery-map-actions";const T=document.createElement("select");T.className="gallery-version-select",T.setAttribute("aria-label",`Version for ${u.title}`),T.append(new Option(`Latest - v${u.versionCount}`,"latest"));for(let M=u.versionCount-1;M>=1;M--)T.append(new Option(`v${M}`,String(M)));const E=()=>{const M=QC(u,T.value);v.textContent=`${a1(M.blockCount)} blocks · ${ag(M.sizeBytes)} · ${u.versionCount} versions`};T.addEventListener("change",E),E(),a.push(T);const y=document.createElement("button");y.className="button primary gallery-import-button",y.type="button",y.textContent="Import",o.push(y),y.addEventListener("click",async()=>{if(!l){c(void 0),h(!0,y);try{this.updateStatus("Importing shared map..."),await this.importPublishedMapOrThrow(u.mapId,T.value,u.title),n()}catch(M){console.error(M);const B=M.message;c(`Import failed: ${B}`),this.updateStatus(`Shared map import failed: ${B}`),h(!1)}}}),A.append(T,y),d.append(f,p,A),e.append(d),u.mapId===r&&requestAnimationFrame(()=>d.scrollIntoView({block:"center",behavior:"smooth"}))}}renderGalleryPrefabs(e,t,n,i,r){if(t.length===0){const h=document.createElement("p");h.className="gallery-empty",h.textContent="No prefabs have been published yet.",e.replaceChildren(h);return}e.replaceChildren();const o=[];let a=!1;const l=h=>{i.hidden=!h,i.textContent=h??""},c=(h,u)=>{a=h;for(const d of o){d.disabled=h;const f=d===u;d.classList.toggle("button-busy",h&&f),d.setAttribute("aria-busy",String(h&&f)),d.innerHTML=h&&f?'Import <span class="button-busy-spinner" aria-hidden="true"></span>':"Import"}};for(const h of t){const u=document.createElement("article");u.className="gallery-card",h.prefabId===r&&(u.classList.add("highlighted"),u.setAttribute("aria-current","true"));const d=document.createElement("div");if(d.className="gallery-card-thumb",h.thumbnailUrl){const A=document.createElement("img");A.src=h.thumbnailUrl,A.alt="",d.append(A)}else d.textContent="No Preview";const f=document.createElement("div");f.className="gallery-card-body";const p=document.createElement("h3");p.textContent=h.title;const _=document.createElement("div");_.className="gallery-card-byline";const m=document.createElement("span");m.className="gallery-card-author",m.textContent=`by ${h.authorName||"Unknown"}`;const g=document.createElement("span");g.className="gallery-card-updated",g.textContent=og(h.updatedAt),_.append(m,g);const x=document.createElement("p");x.className="gallery-card-meta",f.append(p,_,x);const S=document.createElement("div");S.className="gallery-card-actions gallery-prefab-actions",x.textContent=`${o1(h.size)} · ${ag(h.sizeBytes)}`;const v=document.createElement("button");v.className="button primary gallery-import-button",v.type="button",v.textContent="Import",o.push(v),v.addEventListener("click",async()=>{if(!a){l(void 0),c(!0,v);try{this.updateStatus("Importing shared prefab..."),await this.importPublishedPrefabOrThrow(h.prefabId,h.title),n()}catch(A){console.error(A);const T=A.message;l(`Import failed: ${T}`),this.updateStatus(`Shared prefab import failed: ${T}`),c(!1)}}}),S.append(v),u.append(d,f,S),e.append(u),h.prefabId===r&&requestAnimationFrame(()=>u.scrollIntoView({block:"center",behavior:"smooth"}))}}async importPublishedPrefabOrThrow(e,t){const n=await FA(e),i=Fp(n.worldPrefab,this.editorBlockCatalog),r=JA(i,t||`Prefab ${n.prefabId}`);this.prefabs=[r,...this.prefabs.filter(o=>o.id!==r.id)],this.selectedPrefabId=r.id,this.persistLocalPrefabs(),await this.persistLocalPrefabPreview(r),this.rebuildPrefabPalette(),this.setToolMode("build"),this.updateStatus(`Imported prefab "${r.title}".`)}async createMapThumbnailBlob(){var e;try{this.updateSkybox(),this.chunkMeshManager||this.chunkBatchRenderer.update(1/60),this.updateBlockBreakEffects(1/60),(e=this.chunkBlockMaterialManager)==null||e.update(),this.updateViewDistanceVisibility(),this.renderer.render(this.scene,this.camera);const t=this.renderer.domElement;if(t.width===0||t.height===0)return;const n=document.createElement("canvas");n.width=ao,n.height=lo;const i=n.getContext("2d");if(!i)return;i.fillStyle="#101722",i.fillRect(0,0,n.width,n.height);const r=t.width/t.height,o=n.width/n.height;let a=0,l=0,c=t.width,h=t.height;return r>o?(c=Math.round(t.height*o),a=Math.floor((t.width-c)*.5)):r<o&&(h=Math.round(t.width/o),l=Math.floor((t.height-h)*.5)),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.drawImage(t,a,l,c,h,0,0,n.width,n.height),new Promise(u=>{n.toBlob(d=>u(d??void 0),Qm,eg)})}catch(t){console.error(t);return}}async createPrefabThumbnailBlob(e){const t=document.createElement("canvas");t.width=ao,t.height=lo;let n;try{return n=await this.createPrefabPreviewController(e,t),n.render(),await n.captureBlob()}catch(i){console.error(i);return}finally{n==null||n.dispose()}}async createPrefabPreviewController(e,t){const n=new bp({alpha:!1,antialias:!0,canvas:t,preserveDrawingBuffer:!0}),i=new Tf,r=new Kt(34,ao/lo,.1,1e3);let o;const a=[];let l=!1;const c=Math.max(e.size.x,e.size.y,e.size.z,1),h=c*2.2+4,u=new L(0,Math.max(e.size.y*.08,0),0),d={distance:h,pitch:Math.max(.28,Math.min(1.1,Math.atan2(Math.max(e.size.y*.9,c*.8)+2-u.y,h))),yaw:Math.PI*.25};let f=!1,p=0,_=0;const m=(y,M,B)=>Math.max(M,Math.min(B,y)),g=()=>{const y=Math.cos(d.pitch);r.position.set(u.x+Math.sin(d.yaw)*y*d.distance,u.y+Math.sin(d.pitch)*d.distance,u.z+Math.cos(d.yaw)*y*d.distance),r.lookAt(u),r.updateProjectionMatrix()},x=()=>{l||(g(),n.render(i,r))},S=()=>{d.distance=h,d.pitch=Math.max(.28,Math.min(1.1,Math.atan2(Math.max(e.size.y*.9,c*.8)+2-u.y,h))),d.yaw=Math.PI*.25,x()},v=y=>{y.preventDefault(),f=!0,p=y.clientX,_=y.clientY,t.setPointerCapture(y.pointerId),t.classList.add("dragging")},A=y=>{if(!f)return;y.preventDefault();const M=y.clientX-p,B=y.clientY-_;p=y.clientX,_=y.clientY,d.yaw-=M*.01,d.pitch=m(d.pitch+B*.01,-.15,1.35),x()},T=y=>{f=!1,t.classList.remove("dragging"),t.hasPointerCapture(y.pointerId)&&t.releasePointerCapture(y.pointerId)},E=y=>{y.preventDefault(),d.distance=m(d.distance*(1+y.deltaY*.0015),Math.max(2,c*.7),c*6+12),x()};try{n.setPixelRatio(1),n.setSize(ao,lo,!1),n.setClearColor(new ue("#101722"),1);const y=new jc;y.load({blockTypes:e.blockTypes,blocks:e.blocks},e.blockTypes),o=await Ml.create(y.blockTypes);const M=iw(o.toSnapshot()),B=_0(),I=new tn;for(const O of y.chunkIds){const z=y.getChunk(O);if(!z)continue;const P=nw(y,z,M,B);if(!P)continue;const k=P.opaqueGeometry?Gc(P.opaqueGeometry,o,"opaque"):null,V=P.transparentGeometry?Gc(P.transparentGeometry,o,"transparent"):null,U=P.liquidGeometry?Gc(P.liquidGeometry,o,"liquid"):null;for(const X of[k,V,U])X&&(X.material.setAmbientColor(new ue(16777215)),X.material.setAmbientIntensity(1),a.push(X),I.add(X))}if(I.children.length===0)throw new Error("Prefab has no previewable blocks.");return I.position.set(-e.size.x/2,-e.size.y/2,-e.size.z/2),i.add(I),t.addEventListener("pointerdown",v),t.addEventListener("pointermove",A),t.addEventListener("pointerup",T),t.addEventListener("pointercancel",T),t.addEventListener("wheel",E,{passive:!1}),S(),{captureBlob:async()=>(x(),await new Promise(O=>{t.toBlob(z=>O(z??void 0),Qm,eg)})),dispose:()=>{if(!l){l=!0,t.removeEventListener("pointerdown",v),t.removeEventListener("pointermove",A),t.removeEventListener("pointerup",T),t.removeEventListener("pointercancel",T),t.removeEventListener("wheel",E);for(const O of a){O.geometry.dispose();const z=Array.isArray(O.material)?O.material:[O.material];for(const P of z)P.dispose()}o==null||o.texture.dispose(),n.dispose()}},render:x,resetView:S}}catch(y){n.dispose();for(const M of a){M.geometry.dispose();const B=Array.isArray(M.material)?M.material:[M.material];for(const I of B)I.dispose()}throw o==null||o.texture.dispose(),y}}async exportMap(){this.setExportButtonBusy(!0);try{await new Promise(i=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>i())})});const e=this.world.toJson(),t=new Blob([`${JSON.stringify(e,null,2)}
`],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=this.fileName.endsWith(".json")?this.fileName:`${this.fileName}.json`,n.click(),URL.revokeObjectURL(n.href),this.updateStatus(`Exported ${n.download}.`)}finally{this.setExportButtonBusy(!1)}}setExportButtonBusy(e){this.exportButton.disabled=e,this.exportButton.classList.toggle("button-busy",e),this.exportButton.setAttribute("aria-busy",String(e)),this.exportButton.innerHTML=e?'Export <span class="button-busy-spinner" aria-hidden="true"></span>':"Export"}async applyThemeTemplate(){const e=this.templateThemeSelect.value||"arena",t=Jc.find(l=>l.id===e);if(!t){this.updateStatus(`Unknown template theme "${e}".`);return}const n=this.getCurrentBlockTypeDefinitions(),i=this.resolveTemplateBlockIds(n),r=Ww({theme:e,seed:Number(this.templateSeedInput.value)||0,size:Number(this.templateSizeInput.value)||t.defaultSize,height:Number(this.templateHeightInput.value)||t.defaultHeight},i),o=this.world.toSnapshot();this.world.load({blockTypes:n,blocks:r.blocks},n),this.resetBlockAppearanceSelection();const a=this.world.toSnapshot();this.pushSnapshotUndoState(`Generate ${t.label}`,o,a),this.markFullWorldAutosaveDirty(),this.fileName=`generated-${e}.json`,this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),await this.rebuildAllChunkMeshes(),this.flushAutosave(),this.updateStatus(`Generated ${t.label.toLowerCase()} template with seed ${this.templateSeedInput.value||"0"}.`)}getBlockAppearanceKey(e){return[e.textureUri,e.isLiquid?"liquid":"solid",e.isMultiTexture?"multi":"single"].join("\0")}getShapeTemplates(){const e=new Map;for(const t of this.world.blockTypes){const n=Hi(t);e.has(n)||e.set(n,t)}return e}getAppearanceOptions(){const e=new Map;for(const t of this.world.blockTypes){const n=this.getBlockAppearanceKey(t),i=e.get(n);if(i){i.blockTypes.push(t),Hi(i.representative)!=="cube"&&Hi(t)==="cube"&&(i.representative=t);continue}e.set(n,{blockTypes:[t],key:n,representative:t})}return[...e.values()]}ensureSelectedBlockType(){const e=this.getAppearanceOptions();if(!e.length)return{created:!1};const t=this.world.blockTypes.find(f=>f.id===this.selectedBlockTypeId);this.selectedAppearanceKey||(this.selectedAppearanceKey=t?this.getBlockAppearanceKey(t):e[0].key);let n=e.find(f=>f.key===this.selectedAppearanceKey);n||(n=e[0],this.selectedAppearanceKey=n.key);const i=this.getShapeTemplates().get(this.selectedShapeGroup);if(!i){const f=n.blockTypes.find(p=>Hi(p)==="cube")??n.representative;return this.selectedShapeGroup=Hi(f),this.selectedBlockTypeId=f.id,{blockType:f,created:!1}}const r=n.blockTypes.find(f=>Hi(f)===this.selectedShapeGroup&&this.hasSameBlockShapeGeometry(f,i));if(r)return this.selectedBlockTypeId=r.id,{blockType:r,created:!1};const o=n.representative,a=Math.max(0,...this.world.blockTypes.map(f=>f.id))+1,l=this.selectedShapeGroup==="cube"?"":`-${this.selectedShapeGroup}`,c=i.trimeshVertices?Array.from(i.trimeshVertices):void 0,h=i.trimeshIndices?Array.from(i.trimeshIndices):void 0,u={id:a,name:`${o.name}${l}`,textureUri:o.textureUri,isLiquid:o.isLiquid,lightLevel:o.lightLevel,durability:o.durability,isCustom:!0,isMultiTexture:o.isMultiTexture,...c&&h?{trimeshVertices:c,trimeshIndices:h,customColliderOptions:{shape:"trimesh",vertices:c,indices:h}}:{}},d=this.world.addBlockType(u);return this.selectedBlockTypeId=d.id,{blockType:d,created:!0}}hasSameBlockShapeGeometry(e,t){return this.hasSameNumberSequence(e.trimeshVertices,t.trimeshVertices)&&this.hasSameNumberSequence(e.trimeshIndices,t.trimeshIndices)}hasSameNumberSequence(e,t){if(!(e!=null&&e.length)||!(t!=null&&t.length))return!(e!=null&&e.length)&&!(t!=null&&t.length);if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}async getSelectedBlockTypeForPlacement(){const e=this.ensureSelectedBlockType();return e.created&&await this.syncChunkMesherWorkerBlockType(e.blockType),e.blockType}resetBlockAppearanceSelection(){const e=this.world.blockTypes.find(t=>t.id===this.selectedBlockTypeId)??this.world.blockTypes[0];this.selectedAppearanceKey=e?this.getBlockAppearanceKey(e):"",this.selectedShapeGroup=e?Hi(e):"cube",this.ensureSelectedBlockType()}rebuildPalette(){const e=this.sidebar.scrollTop,t=this.paletteContainer.scrollTop,n=this.paletteFilter.trim().toLowerCase();this.paletteContainer.replaceChildren(),this.shapePaletteContainer.replaceChildren(),this.paletteFilterInput.value=this.paletteFilter,this.ensureSelectedBlockType();const i=this.getShapeTemplates();for(const r of QA){const o=Rm(r),a=document.createElement("button");a.type="button",a.className="shape-palette-button",a.dataset.shapeGroup=r,a.title=o,a.setAttribute("aria-label",o),a.append(tC(r)),r===this.selectedShapeGroup&&a.classList.add("active"),i.has(r)||(a.disabled=!0),a.addEventListener("click",()=>{this.selectedShapeGroup=r,this.selectedPrefabId=null;const l=this.ensureSelectedBlockType();l.created&&this.syncChunkMesherWorkerBlockType(l.blockType),this.syncPaletteSelection(),this.queueChunkBuilds(this.world.chunkIds,rh,this.activeChunkBuildGeneration),this.syncPrefabPaletteSelection(),this.updateStatus(`Shape set to ${o}.`)}),this.shapePaletteContainer.append(a)}for(const r of this.getAppearanceOptions()){if(n&&!r.blockTypes.some(d=>d.name.toLowerCase().includes(n)))continue;const o=r.representative,a=document.createElement("button");a.type="button",a.className="palette-button block-palette-button",a.dataset.appearanceKey=r.key,a.title=o.name,a.setAttribute("aria-label",o.name),r.key===this.selectedAppearanceKey&&a.classList.add("active");const l=document.createElement("img");l.src=o.textureUris.top,l.alt=o.name;const c=document.createElement("span");c.className="palette-meta";const h=document.createElement("strong");h.textContent=o.name;const u=document.createElement("span");u.textContent=`${new Set(r.blockTypes.map(d=>Hi(d))).size} shapes`,c.append(h,u),a.append(l,c),!this.selectedPrefabId&&r.key===this.selectedAppearanceKey&&this.syncPaletteRotationBadge(a,!0),a.addEventListener("click",()=>{if(!this.selectedPrefabId&&this.selectedAppearanceKey===r.key)this.rotatePlacement(1,!1);else{this.selectedAppearanceKey=r.key,this.selectedPrefabId=null;const f=this.ensureSelectedBlockType();f.created&&this.syncChunkMesherWorkerBlockType(f.blockType),this.setPlacementRotationY(0,!1)}this.syncPaletteSelection(),this.queueChunkBuilds(this.world.chunkIds,rh,this.activeChunkBuildGeneration),this.syncPrefabPaletteSelection(),this.updateStatus(`Block look set to "${o.name}" with ${Rm(this.selectedShapeGroup)} shape.`)}),this.paletteContainer.append(a)}this.sidebar.scrollTop=e,this.paletteContainer.scrollTop=t}syncPaletteSelection(){this.ensureSelectedBlockType();for(const e of Array.from(this.shapePaletteContainer.children))e instanceof HTMLButtonElement&&e.classList.toggle("active",e.dataset.shapeGroup===this.selectedShapeGroup);for(const e of Array.from(this.paletteContainer.children)){if(!(e instanceof HTMLButtonElement))continue;const t=!this.selectedPrefabId&&e.dataset.appearanceKey===this.selectedAppearanceKey;e.classList.toggle("active",t),this.syncPaletteRotationBadge(e,t)}}loadLocalPrefabs(){try{const e=JSON.parse(localStorage.getItem(Om)??"[]");this.prefabs=Array.isArray(e)?e.map(t=>Ku(t)):[]}catch(e){console.warn("Failed to load local prefabs.",e),this.prefabs=[]}this.rebuildPrefabPalette()}persistLocalPrefabs(){localStorage.setItem(Om,JSON.stringify(this.prefabs))}rebuildPrefabPalette(e){const t=this.prefabPaletteContainer.scrollTop,n=this.prefabFilter.trim().toLowerCase();for(const i of this.prefabPreviewObjectUrls.values())URL.revokeObjectURL(i);this.prefabPreviewObjectUrls.clear(),this.prefabPaletteContainer.replaceChildren(),this.prefabFilterInput.value=this.prefabFilter;for(const i of this.prefabs){if(n&&!i.title.toLowerCase().includes(n))continue;const r=document.createElement("button");r.type="button",r.className="palette-button prefab-palette-button",r.dataset.prefabId=i.id,i.id===this.selectedPrefabId&&r.classList.add("active"),i.id===e&&r.classList.add("recently-created");const o=document.createElement("span");o.className="palette-meta";const a=document.createElement("strong");a.textContent=i.title;const l=document.createElement("span");l.textContent=`${i.size.x}x${i.size.y}x${i.size.z}`,o.append(a,l),r.append(o),i.id===this.selectedPrefabId&&this.syncPaletteRotationBadge(r,!0),r.addEventListener("click",()=>{this.selectedPrefabId===i.id?this.rotatePlacement(1,!1):(this.selectedPrefabId=i.id,this.setPlacementRotationY(0,!1)),this.syncPaletteSelection(),this.syncPrefabPaletteSelection(),this.syncPrefabSelectionUi(),this.updateStatus(`Prefab set to "${i.title}" at ${this.placementRotationY*90}.`)}),this.prefabPaletteContainer.append(r),this.loadPrefabPreviewIntoElement(i.id,r)}if(this.prefabs.length===0){const i=document.createElement("p");i.className="gallery-empty",i.textContent="No local prefabs yet.",this.prefabPaletteContainer.append(i)}this.prefabPaletteContainer.scrollTop=t,e&&this.revealPrefabPaletteButton(e)}revealPrefabPaletteButton(e){const t=this.sidebar.querySelector('[data-section="prefabs"]');t&&(t.open=!0),window.clearTimeout(this.prefabPaletteHighlightTimer),requestAnimationFrame(()=>{const n=this.prefabPaletteContainer.querySelector(`[data-prefab-id="${CSS.escape(e)}"]`);n&&(n.classList.add("recently-created"),n.scrollIntoView({block:"center",behavior:"smooth"}),this.prefabPaletteHighlightTimer=window.setTimeout(()=>{n.classList.remove("recently-created")},1800))})}syncPrefabPaletteSelection(){for(const e of Array.from(this.prefabPaletteContainer.children)){if(!(e instanceof HTMLButtonElement))continue;const t=e.dataset.prefabId===this.selectedPrefabId;e.classList.toggle("active",t),this.syncPaletteRotationBadge(e,t)}}syncPaletteRotationBadge(e,t){const n=e.querySelector(".palette-rotation-badge");if(!t||this.placementRotationY===0){n==null||n.remove();return}const i=n??document.createElement("span");i.className="palette-rotation-badge",i.dataset.rotation=String(this.placementRotationY),i.setAttribute("aria-label",`Rotation ${_1(this.placementRotationY)}`),i.replaceChildren(y1(this.placementRotationY)),n||e.append(i)}async loadPrefabPreviewIntoElement(e,t){const n=await GC(e);if(!t.isConnected||!n||!this.prefabs.some(o=>o.id===e))return;const i=this.prefabPreviewObjectUrls.get(e);i&&URL.revokeObjectURL(i);const r=URL.createObjectURL(n);this.prefabPreviewObjectUrls.set(e,r),t.style.setProperty("--prefab-preview-image",`url("${r}")`),t.classList.add("has-preview")}async persistLocalPrefabPreview(e,t){const n=t??await this.createPrefabThumbnailBlob(e);n&&await HC(e.id,n)}updatePrefabSelectionPoint(){const e=this.hoveredBlock??this.hoveredPlacement;if(!e){this.updateStatus("No block target for prefab selection.");return}if(!this.prefabSelectionStart||this.prefabSelectionBounds){this.prefabSelectionStart={...e},this.prefabSelectionWidthEnd=null,this.prefabSelectionWidthAxis=null,this.prefabSelectionEnd=null,this.prefabSelectionBounds=null,this.prefabSelectionHasBlocks=!1,this.updateStatus("Prefab selection started."),this.setSelectionHoverBox(e),this.syncPrefabSelectionUi();return}if(!this.prefabSelectionWidthEnd){const t=Math.abs(e.x-this.prefabSelectionStart.x)>=Math.abs(e.z-this.prefabSelectionStart.z)?"x":"z";this.prefabSelectionWidthAxis=t,this.prefabSelectionWidthEnd=t==="x"?{x:e.x,y:this.prefabSelectionStart.y,z:this.prefabSelectionStart.z}:{x:this.prefabSelectionStart.x,y:this.prefabSelectionStart.y,z:e.z},this.prefabSelectionEnd=null,this.prefabSelectionBounds=null,this.prefabSelectionHasBlocks=!1,this.updateStatus("Prefab selection width selected."),this.setSelectionHoverBox(this.prefabSelectionWidthEnd),this.syncPrefabSelectionUi();return}if(!this.prefabSelectionEnd){this.prefabSelectionEnd=this.getPrefabSelectionDepthEnd(e),this.prefabSelectionBounds=null,this.prefabSelectionHasBlocks=!1,this.updateStatus("Prefab selection footprint selected."),this.setSelectionHoverBox(this.prefabSelectionEnd),this.syncPrefabSelectionUi();return}this.prefabSelectionBounds=this.getPrefabSelectionHeightBounds(e),this.prefabSelectionHasBlocks=this.prefabSelectionBounds&&!this.isPrefabSelectionTooLarge(this.prefabSelectionBounds)?this.prefabSelectionContainsBlocks(this.prefabSelectionBounds):!1,!this.prefabSelectionBounds||!this.prefabSelectionHasBlocks?this.updateStatus(this.prefabSelectionBounds&&this.isPrefabSelectionTooLarge(this.prefabSelectionBounds)?`Prefab selection is too large. Each axis must be ${Ht} blocks or less.`:"No blocks in selected area."):this.isPrefabSelectionTooLarge(this.prefabSelectionBounds)?this.updateStatus(`Prefab selection is too large. Each axis must be ${Ht} blocks or less.`):this.updateStatus("Prefab selection ready."),this.setSelectionHoverBox(e),this.syncPrefabSelectionUi()}syncPrefabSelectionUi(){if(this.prefabRenameButton.disabled=!this.selectedPrefabId,this.prefabDeleteButton.disabled=!this.selectedPrefabId,this.prefabExportButton.disabled=!this.selectedPrefabId,this.prefabPublishButton.disabled=!this.selectedPrefabId,this.selectionPasteButton.disabled=!this.selectionClipboard,this.selectionPasteButton.classList.toggle("active",this.selectionPastePending),this.selectionPasteButton.textContent=this.selectionPastePending?"Cancel Paste":"Paste",this.setSelectionFillTooltip(""),!this.prefabSelectionStart){this.selectionCreatePrefabButton.disabled=!0,this.selectionClearButton.disabled=!0,this.selectionDeleteButton.disabled=!0,this.selectionFillButton.disabled=!0,this.selectionCopyButton.disabled=!0,this.prefabSelectionStatus.textContent="";return}if(!this.prefabSelectionEnd){this.selectionCreatePrefabButton.disabled=!0,this.selectionClearButton.disabled=!1,this.selectionDeleteButton.disabled=!0,this.selectionFillButton.disabled=!0,this.selectionCopyButton.disabled=!0,this.prefabSelectionStatus.textContent="";return}const e=this.prefabSelectionBounds,t=!!e&&!this.isPrefabSelectionTooLarge(e);this.selectionCreatePrefabButton.disabled=!t||!this.prefabSelectionHasBlocks,this.selectionClearButton.disabled=!1,this.selectionDeleteButton.disabled=!t||!this.prefabSelectionHasBlocks,this.selectionFillButton.disabled=!t||!!this.selectedPrefabId,this.setSelectionFillTooltip(t&&this.selectedPrefabId?"Select a Block to use Fill.":""),this.selectionCopyButton.disabled=!t||!this.prefabSelectionHasBlocks,this.prefabSelectionStatus.textContent=""}setSelectionFillTooltip(e){this.selectionFillTooltip.dataset.tooltip=e,this.selectionFillTooltip.classList.toggle("has-tooltip",e.length>0)}isPrefabSelectionTooLarge(e){return e.size.x>Ht||e.size.y>Ht||e.size.z>Ht}getPrefabSelectionWidthEnd(e){return this.prefabSelectionStart?(Math.abs(e.x-this.prefabSelectionStart.x)>=Math.abs(e.z-this.prefabSelectionStart.z)?"x":"z")==="x"?{x:e.x,y:this.prefabSelectionStart.y,z:this.prefabSelectionStart.z}:{x:this.prefabSelectionStart.x,y:this.prefabSelectionStart.y,z:e.z}:null}getPrefabSelectionDepthEnd(e){return!this.prefabSelectionStart||!this.prefabSelectionWidthEnd||!this.prefabSelectionWidthAxis?{...e}:this.prefabSelectionWidthAxis==="x"?{x:this.prefabSelectionWidthEnd.x,y:this.prefabSelectionStart.y,z:e.z}:{x:e.x,y:this.prefabSelectionStart.y,z:this.prefabSelectionWidthEnd.z}}getPrefabSelectionFootprint(e){if(!this.prefabSelectionStart)return null;const t=this.prefabSelectionEnd??(this.prefabSelectionWidthEnd&&e?this.getPrefabSelectionDepthEnd(e):null)??this.prefabSelectionWidthEnd??(e?this.getPrefabSelectionWidthEnd(e):null)??this.prefabSelectionStart;return{maxX:Math.max(this.prefabSelectionStart.x,t.x),maxZ:Math.max(this.prefabSelectionStart.z,t.z),minX:Math.min(this.prefabSelectionStart.x,t.x),minZ:Math.min(this.prefabSelectionStart.z,t.z)}}getPrefabSelectionPreviewBounds(e){const t=this.getPrefabSelectionFootprint(e);if(!t||!this.prefabSelectionStart)return null;const n={x:t.minX,y:this.prefabSelectionStart.y,z:t.minZ},i={x:t.maxX,y:this.prefabSelectionStart.y,z:t.maxZ};return{max:i,min:n,size:{x:i.x-n.x+1,y:1,z:i.z-n.z+1}}}getPrefabSelectionHeightBounds(e){const t=this.getPrefabSelectionFootprint();if(!t||!this.prefabSelectionStart)return null;const n=Math.min(this.prefabSelectionStart.y,e.y),i=Math.max(this.prefabSelectionStart.y,e.y),r={x:t.minX,y:n,z:t.minZ},o={x:t.maxX,y:i,z:t.maxZ};return{max:o,min:r,size:{x:o.x-r.x+1,y:o.y-r.y+1,z:o.z-r.z+1}}}getPrefabSelectionFootprintCoordinateFromRay(){if(!this.prefabSelectionStart||this.prefabSelectionEnd||this.prefabSelectionBounds)return null;const e=this.prefabSelectionStart.y+.5,t=gi.y;if(Math.abs(t)<1e-4)return null;const n=(e-xn.y)/t;return n<0?null:(mi.copy(xn).addScaledVector(gi,n),{x:Math.floor(mi.x),y:this.prefabSelectionStart.y,z:Math.floor(mi.z)})}getPrefabSelectionHeightCoordinateFromRay(){const e=this.getPrefabSelectionFootprint();if(!e||!this.prefabSelectionStart)return null;const t=(e.minX+e.maxX+1)/2,n=(e.minZ+e.maxZ+1)/2,i=xn.x-t,r=xn.z-n,o=Math.hypot(i,r);if(o<1e-4)return null;const a=i/o,l=r/o,c=gi.x*a+gi.z*l;if(Math.abs(c)<1e-4)return null;const h=((t-xn.x)*a+(n-xn.z)*l)/c;if(h<0)return null;const u=Math.floor(xn.y+gi.y*h);return{x:Math.floor(t),y:u,z:Math.floor(n)}}prefabSelectionContainsBlocks(e){for(let t=e.min.y;t<=e.max.y;t++)for(let n=e.min.z;n<=e.max.z;n++)for(let i=e.min.x;i<=e.max.x;i++)if(this.world.getBlockTypeId({x:i,y:t,z:n})!==0)return!0;return!1}async createPrefabFromSelection(){var i;if(!this.prefabSelectionStart||!this.prefabSelectionEnd||!this.prefabSelectionBounds){this.updateStatus("Select footprint and height with the Select tool before creating a prefab."),this.setToolMode("select");return}const e=this.prefabSelectionBounds;if(!this.prefabSelectionHasBlocks){this.updateStatus("No blocks in selected area."),this.setToolMode("select");return}if(e.size.x>Ht||e.size.y>Ht||e.size.z>Ht){this.updateStatus(`Prefab selection is too large. Each axis must be ${Ht} blocks or less.`);return}const t=(i=window.prompt("Prefab title",`Prefab ${this.prefabs.length+1}`))==null?void 0:i.trim();if(!t)return;const n=[];for(let r=e.min.y;r<=e.max.y;r++)for(let o=e.min.z;o<=e.max.z;o++)for(let a=e.min.x;a<=e.max.x;a++){const l={x:a,y:r,z:o},c=this.world.getBlockTypeId(l),h=this.world.getBlockRotation(l);n.push({coordinate:l,value:c===0||h===0?c:{i:c,r:h}})}try{const r=jA({blockTypes:this.world.toJson().blockTypes??[],blocks:n,max:e.max,min:e.min,title:t});this.prefabs=[r,...this.prefabs.filter(o=>o.id!==r.id)],this.selectedPrefabId=r.id,this.prefabSelectionStart=null,this.prefabSelectionWidthEnd=null,this.prefabSelectionWidthAxis=null,this.prefabSelectionEnd=null,this.prefabSelectionBounds=null,this.prefabSelectionHasBlocks=!1,this.prefabFilter="",this.prefabFilterInput.value="",this.syncPrefabSelectionUi(),this.persistLocalPrefabs(),this.persistLocalPrefabPreview(r).then(()=>this.rebuildPrefabPalette(r.id)),this.rebuildPrefabPalette(r.id),this.updateStatus(`Created prefab "${r.title}".`)}catch(r){this.updateStatus(`Prefab creation failed: ${r.message}`)}}async deleteSelection(){const e=this.prefabSelectionBounds;if(!e||!this.prefabSelectionHasBlocks||this.isPrefabSelectionTooLarge(e)){this.updateStatus("No selected blocks to delete.");return}const t=[];for(let n=e.min.y;n<=e.max.y;n++)for(let i=e.min.z;i<=e.max.z;i++)for(let r=e.min.x;r<=e.max.x;r++){const o={x:r,y:n,z:i};this.world.getBlockTypeId(o)!==0&&t.push({blockTypeId:0,coordinate:o,rotation:0})}await this.applySelectionBlockChanges("Delete selection",t),this.prefabSelectionHasBlocks=!1,this.prefabSelectionEnd&&this.setSelectionHoverBox(this.prefabSelectionEnd),this.syncPrefabSelectionUi(),this.updateStatus(`Deleted ${t.length} selected blocks.`)}async fillSelection(){const e=this.prefabSelectionBounds;if(!e||this.isPrefabSelectionTooLarge(e)){this.updateStatus("No selection to fill.");return}if(this.selectedPrefabId){this.updateStatus("Select a block before filling a selection.");return}const t=await this.getSelectedBlockTypeForPlacement();if(!t){this.updateStatus("No block pattern selected.");return}const n=[];for(let i=e.min.y;i<=e.max.y;i++)for(let r=e.min.z;r<=e.max.z;r++)for(let o=e.min.x;o<=e.max.x;o++)n.push({blockTypeId:t.id,coordinate:{x:o,y:i,z:r},rotation:this.placementRotationY});await this.applySelectionBlockChanges(`Fill selection with ${t.name}`,n),this.prefabSelectionHasBlocks=!0,this.prefabSelectionEnd&&this.setSelectionHoverBox(this.prefabSelectionEnd),this.syncPrefabSelectionUi(),this.updateStatus(`Filled selection with ${t.name}.`)}copySelection(){const e=this.prefabSelectionBounds;if(!e||!this.prefabSelectionHasBlocks||this.isPrefabSelectionTooLarge(e)){this.updateStatus("No selected blocks to copy.");return}const t=[];for(let n=e.min.y;n<=e.max.y;n++)for(let i=e.min.z;i<=e.max.z;i++)for(let r=e.min.x;r<=e.max.x;r++){const o={x:r,y:n,z:i};t.push({relative:{x:r-e.min.x,y:n-e.min.y,z:i-e.min.z},value:this.getWorldBlockValue(o)})}this.selectionClipboard={blocks:t,size:{...e.size}},this.syncPrefabSelectionUi(),this.updateStatus(`Copied selection ${e.size.x}x${e.size.y}x${e.size.z}.`)}beginPasteSelection(){if(!this.selectionClipboard){this.updateStatus("No copied selection to paste.");return}if(this.selectionPastePending){this.cancelPasteSelection();return}this.selectionPastePending=!0,this.syncPrefabSelectionUi(),this.pointerLocked?this.updateHoverFromScreenCenter():this.lastPointerEvent&&this.updateHoverFromPointer(this.lastPointerEvent),this.updateStatus("Choose where to paste the copied selection.")}cancelPasteSelection(){this.selectionPastePending=!1,this.syncPrefabSelectionUi(),this.setHoverIndicatorVisible(!1),this.updateStatus("Paste canceled.")}async confirmPasteSelection(){const e=this.hoveredPlacement;if(!this.selectionClipboard){this.updateStatus("No copied selection to paste."),this.selectionPastePending=!1;return}if(!e){this.updateStatus("No paste target.");return}await this.pasteSelectionAt(e),this.syncPrefabSelectionUi(),this.hoveredPlacement&&this.setSelectionPasteHoverBox(this.hoveredPlacement)}async pasteSelectionAt(e){const t=this.selectionClipboard;if(!t)return;const n=t.blocks.map(i=>({blockTypeId:wn(i.value),coordinate:{x:e.x+i.relative.x,y:e.y+i.relative.y,z:e.z+i.relative.z},rotation:au(i.value)}));await this.applySelectionBlockChanges("Paste selection",n),this.updateStatus(`Pasted selection ${t.size.x}x${t.size.y}x${t.size.z}.`)}getWorldBlockValue(e){const t=this.world.getBlockTypeId(e),n=this.world.getBlockRotation(e);return t===0||n===0?t:{i:t,r:n}}async applySelectionBlockChanges(e,t){const n=new Set,i=new Set,r=[];for(const c of t){const h=this.world.getBlockTypeId(c.coordinate),u=this.world.getBlockRotation(c.coordinate);if(!(h===c.blockTypeId&&u===c.rotation)){r.push(c),n.add(Xe.globalCoordinateToChunkId(c.coordinate));for(const d of this.world.getAffectedChunkIds(c.coordinate,h,c.blockTypeId))i.add(d)}}if(r.length===0)return!1;const o=this.captureChunkStates(n);for(const c of r)this.world.setBlock(c.coordinate,c.blockTypeId,c.rotation);const a=[...i],l=r.length<=64&&this.canMergeQueuedBlockUpdates(a);if(l)for(const c of r)this.queueChunkMesherWorkerBlockUpdate(c.coordinate,c.blockTypeId,c.rotation);else await this.syncChunkMesherWorkerChunks(a);return this.playBlockPlaceAudio(),this.pushPatchUndoState(e,o),this.markChunkIdsAutosaveDirty(n),this.requestAffectedChunksRebuild(a,!l),this.scheduleAutosave(),!0}exportSelectedPrefab(){const e=this.prefabs.find(i=>i.id===this.selectedPrefabId);if(!e){this.updateStatus("No prefab selected.");return}const t=new Blob([`${JSON.stringify(e,null,2)}
`],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=`${e.title.replace(/[^a-z0-9._-]+/gi,"-").replace(/^-+|-+$/g,"")||"prefab"}.prefab.json`,n.click(),URL.revokeObjectURL(n.href),this.updateStatus(`Exported prefab "${e.title}".`)}renameSelectedPrefab(){var n;const e=this.prefabs.find(i=>i.id===this.selectedPrefabId);if(!e){this.updateStatus("No prefab selected.");return}const t=(n=window.prompt("Prefab title",e.title))==null?void 0:n.trim();!t||t===e.title||(e.title=t,e.updatedAt=Date.now(),this.persistLocalPrefabs(),this.rebuildPrefabPalette(),this.syncPrefabSelectionUi(),this.updateStatus(`Renamed prefab to "${e.title}".`))}deleteSelectedPrefab(){var n;const e=this.prefabs.find(i=>i.id===this.selectedPrefabId);if(!e){this.updateStatus("No prefab selected.");return}if(!window.confirm(`Delete local prefab "${e.title}"?`))return;this.prefabs=this.prefabs.filter(i=>i.id!==e.id),this.selectedPrefabId=((n=this.prefabs[0])==null?void 0:n.id)??null;const t=this.prefabPreviewObjectUrls.get(e.id);t&&(URL.revokeObjectURL(t),this.prefabPreviewObjectUrls.delete(e.id)),this.persistLocalPrefabs(),WC(e.id),this.rebuildPrefabPalette(),this.syncPaletteSelection(),this.syncPrefabSelectionUi(),this.selectedPrefabId||this.setHoverIndicatorVisible(!1),this.updateStatus(`Deleted prefab "${e.title}".`)}async importPrefabFromFile(){const e=document.createElement("input");e.type="file",e.accept=".json,.prefab.json,application/json";const t=await new Promise(n=>{e.addEventListener("change",()=>{var i;return n((i=e.files)==null?void 0:i[0])}),e.click()});if(t)try{const n=Ku(JSON.parse(await t.text()));this.prefabs=[n,...this.prefabs.filter(i=>i.id!==n.id)],this.selectedPrefabId=n.id,this.persistLocalPrefabs(),this.persistLocalPrefabPreview(n).then(()=>this.rebuildPrefabPalette()),this.rebuildPrefabPalette(),this.setToolMode("build"),this.updateStatus(`Imported prefab "${n.title}".`)}catch(n){this.updateStatus(`Prefab import failed: ${n.message}`)}}async ensurePrefabBlockTypesAvailable(e){const t=new Set(Object.values(e.blocks).map(r=>wn(r)).filter(r=>r!==0)),n=[];for(const r of t){const o=e.blockTypes.find(a=>a.id===r);!o||this.findMatchingWorldBlockType(o)||n.push(o)}if(n.length===0)return;const i=this.world.toJson();i.blockTypes=Sd(i.blockTypes??[],n),this.world.load(i,this.editorBlockCatalog),this.resetBlockAppearanceSelection(),this.markFullWorldAutosaveDirty(),this.rebuildPalette(),await this.rebuildAllChunkMeshes()}resolvePrefabPlacements(e,t){const n=this.resolvePrefabBlockTypeMap(e),i=[],r=new Set;for(const[o,a]of Object.entries(e.blocks)){const l=Nl(o),c=wn(a),h=c===0?0:n.get(c);if(h===void 0){r.add(c);continue}const u=O0(l,e.anchor,this.placementRotationY);i.push({blockTypeId:h,coordinate:{x:t.x+u.x,y:t.y+u.y,z:t.z+u.z},rotation:p1(au(a),this.placementRotationY)})}if(r.size>0){const o=[...r].map(a=>{var l;return((l=e.blockTypes.find(c=>c.id===a))==null?void 0:l.name)??`#${a}`}).slice(0,4).join(", ");throw new Error(`Prefab uses block types that are not available in this world: ${o}.`)}return i}resolvePrefabBlockTypeMap(e){const t=new Map,n=new Map(this.world.blockTypes.map(r=>[r.id,r])),i=new Set(Object.values(e.blocks).map(r=>wn(r)).filter(r=>r!==0));for(const r of i){const o=e.blockTypes.find(a=>a.id===r);if(o){const a=this.findMatchingWorldBlockType(o);a&&t.set(r,a.id);continue}n.has(r)&&t.set(r,r)}return t}findMatchingWorldBlockType(e){const t=wr(e);return this.world.blockTypes.find(n=>wr(n)===t)}rebuildEntitiesUi(){this.entityListContainer.replaceChildren();const e=this.world.entities,t=Object.keys(e).sort();for(const n of t){const i=document.createElement("button");i.type="button",i.className="palette-button",n===this.selectedEntityKey&&i.classList.add("active");const r=document.createElement("span");r.className="texture-fallback",r.textContent="ENT";const o=document.createElement("span");o.className="palette-meta";const a=document.createElement("strong");a.textContent=this.getEntityLabel(e[n]);const l=document.createElement("span");l.textContent=n,o.append(a,l),i.append(r,o),i.addEventListener("click",()=>{this.selectedEntityKey=n,this.entityOptionsInput.value=JSON.stringify(e[n],null,2),this.rebuildEntitiesUi(),this.refreshSelectedEntityMarker()}),this.entityListContainer.append(i)}(!this.selectedEntityKey||!(this.selectedEntityKey in e))&&(this.selectedEntityKey=t[0]??null),this.entityOptionsInput.value=this.selectedEntityKey?JSON.stringify(e[this.selectedEntityKey],null,2):"{}",this.refreshSelectedEntityMarker()}async rebuildAllChunkMeshes(){const e=++this.nextChunkBuildGeneration;this.activeChunkBuildGeneration=e,this.pendingChunkBuildPriorities.clear(),this.chunkBuildWaiters=[],this.inFlightChunkBuildIds.clear(),this.inFlightChunkBuildPriorities.clear(),this.chunkBuildRequestGenerations.clear(),this.workerSyncedChunkIds.clear(),this.chunkBuildDispatchInProgress=!1,this.disposeAllChunkMeshes(),this.atlas=await Ml.create(this.world.blockTypes),this.atlasSnapshotCache=this.atlas.toSnapshot(),this.chunkBatchRenderer.setAtlas(null),this.chunkRendererHost={addToScene:t=>this.chunkLayer.add(t),ambientLight:this.entityAmbientLight,removeFromScene:t=>this.chunkLayer.remove(t),fogColor:this.fogColor,fogEnabled:this.getViewDistanceConfig().fog.enabled,fogFar:this.getViewDistanceConfig().fog.far,fogNear:this.getViewDistanceConfig().fog.near,webGLRenderer:this.renderer},this.chunkBlockMaterialManager=new ST({renderer:this.chunkRendererHost},this.atlas.texture),this.chunkMeshManager=new LT({blockMaterialManager:this.chunkBlockMaterialManager,renderer:this.chunkRendererHost}),await this.initializeChunkMesherWorkerWorld(),this.rebuildEntityMarkers(),this.queueChunkBuilds(this.getChunkIdsSortedByDistanceToCamera(this.world.chunkIds),rh,e),this.lastPointerEvent?this.updateHoverFromPointer(this.lastPointerEvent):this.pointerLocked&&this.updateHoverFromScreenCenter()}createHoverFrameIndicator(){const e=new tn,t=new jn({color:"#f5b942",transparent:!0,opacity:.95,depthWrite:!1}),n=(i,r,o)=>{const a=new bt(new Si(1,1,1),t.clone());a.renderOrder=1e3,a.userData.hoverFrameAxis=i,a.userData.hoverFrameSignA=r,a.userData.hoverFrameSignB=o,a.matrixAutoUpdate=!1,e.add(a)};for(const i of[-1,1])for(const r of[-1,1])n("x",i,r);for(const i of[-1,1])for(const r of[-1,1])n("y",i,r);for(const i of[-1,1])for(const r of[-1,1])n("z",i,r);return this.configureHoverFrame({x:1,y:1,z:1},"#f5b942"),e}disposeAllChunkMeshes(){var e;(e=this.chunkMeshManager)==null||e.clear(),this.chunkMeshManager=null,this.chunkBlockMaterialManager=null,this.chunkRendererHost=null,this.chunkBatchRenderer.clear(),this.chunkBatchRenderer.setAtlas(null)}async rebuildEntityMarkers(){this.disposeSelectedEntityMarker();for(const i of[...this.entityRenderObjects])this.disposeEntityRenderObject(i);this.entityFallbackObjects.clear(),this.entityRenderObjects.clear(),this.entityMeshManager.clear();const e=Object.entries(this.world.entities),t=[];for(const[i,r]of e){const o=cr(i);if(!o)continue;const a=this.buildStaticEntityDescriptor(i,r);if(a){t.push(a);continue}this.addFallbackEntityObject({key:i,position:o,options:r})}const n=await this.entityMeshManager.replaceAll(t);for(const i of t){if(!n.has(i.key))continue;const r=cr(i.key),o=this.world.entities[i.key];r&&o&&this.addFallbackEntityObject({key:i.key,position:r,options:o})}this.refreshSelectedEntityMarker()}addFallbackEntityObject(e){const t=new tn;t.position.set(e.position.x,e.position.y,e.position.z),t.userData.entityKey=e.key,t.userData.entityOptions=e.options,t.userData.visibilityRadius=1,t.add(this.createEntityMarker("#8b5cf6")),this.entityFallbackObjects.set(e.key,t),this.entityRenderObjects.add(t),this.entityLayer.add(t)}disposeEntityRenderObject(e){this.entityRenderObjects.delete(e),e.parent&&e.parent.remove(e),this.queueEntityRenderObjectDisposal(e)}async syncEntityMarkersForKeys(e,t){for(const n of e){const i=this.world.entities[n];this.entityMeshManager.removeEntity(n);const r=this.entityFallbackObjects.get(n);if(r&&(this.disposeEntityRenderObject(r),this.entityFallbackObjects.delete(n)),!i)continue;const o=this.buildStaticEntityDescriptor(n,i);if(o){if(!await this.entityMeshManager.upsertEntity(o)){const c=cr(n);c&&this.addFallbackEntityObject({key:n,position:c,options:i})}continue}const a=cr(n);a&&this.addFallbackEntityObject({key:n,position:a,options:i})}this.refreshSelectedEntityMarker()}buildStaticEntityDescriptor(e,t){const n=this.getEntityModelUri(t),i=cr(e);if(!n||!i)return null;const r=this.getEntityGlobalCoordinate(i);return Bm.compose(new L(i.x,i.y,i.z),d1(t),u1(t)),{chunkId:Xe.globalCoordinateToChunkId(r),key:e,lightLevel:this.getEntityLightLevel(i),modelUri:this.resolveEntityModelUri(n),skyLight:this.getEntitySkyLight(i),tintColor:h1(t),worldMatrix:Bm.clone()}}buildStaticEntityLightingDescriptor(e){const t=this.world.entities[e],n=t?this.buildStaticEntityDescriptor(e,t):null;return n?{chunkId:n.chunkId,lightLevel:n.lightLevel,skyLight:n.skyLight}:null}refreshSelectedEntityMarker(){if(this.disposeSelectedEntityMarker(),!this.selectedEntityKey)return;const e=cr(this.selectedEntityKey);if(!e)return;const t=this.createEntityMarker("#ff8a65");t.position.set(e.x,e.y,e.z),t.renderOrder=1001,t.userData.visibilityRadius=1,this.selectedEntityMarker=t,this.entityRenderObjects.add(t),this.entityLayer.add(t)}disposeSelectedEntityMarker(){this.selectedEntityMarker&&(this.entityRenderObjects.delete(this.selectedEntityMarker),this.entityLayer.remove(this.selectedEntityMarker),this.queueEntityRenderObjectDisposal(this.selectedEntityMarker),this.selectedEntityMarker=null)}queueEntityRenderObjectDisposal(e){e.traverse(t=>{const n=t.geometry,i=t.material;if(n&&this.deferredEntityDisposals.push(()=>{n.dispose()}),Array.isArray(i))for(const r of i)this.deferredEntityDisposals.push(()=>{r.dispose()});else i&&this.deferredEntityDisposals.push(()=>{i.dispose()})})}flushDeferredEntityDisposals(){if(this.deferredEntityDisposals.length!==0){for(const e of this.deferredEntityDisposals)e();this.deferredEntityDisposals.length=0}}createEntityMarker(e){const t=new Wf(new Si(.6,1.2,.6)),n=new al({color:e,transparent:!0,opacity:.95}),i=new Jh(t,n);return i.renderOrder=1e3,i}handleLightingChange(){this.lightingAmbient=Number(this.lightingAmbientInput.value),this.fogColorHex=this.fogColorInput.value||"#ffffff",this.skyboxUiIntensity=Number(this.skyboxIntensityInput.value),this.applyLightingSettings(),this.scheduleViewStateAutosave()}handleResolutionChange(){const e=this.resolutionPresetInput.value;this.resolutionPreset=e in tg?e:"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.scheduleViewStateAutosave()}handleViewDistanceChange(){const e=this.viewDistancePresetInput.value;this.viewDistancePreset=e in ar||e==="CUSTOM"?e:"HIGH",this.viewDistanceCustomDistance=Math.max(1,Math.round(Number(this.viewDistanceCustomInput.value)||ar.HIGH.distance)),this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.scheduleViewStateAutosave()}syncLightingInputs(){this.lightingAmbientInput.value=String(this.lightingAmbient),this.fogColorInput.value=this.fogColorHex,this.skyboxIntensityInput.value=String(this.skyboxUiIntensity)}syncResolutionInputs(){this.resolutionPresetInput.value=this.resolutionPreset}getEffectivePixelRatio(e,t){return(t===void 0?window.devicePixelRatio:Math.min(window.devicePixelRatio,t))*e}applyResolutionSettings(){const e=tg[this.resolutionPreset];this.renderer.setPixelRatio(this.getEffectivePixelRatio(e.multiplier,e.devicePixelRatioCap)),this.handleResize()}syncViewDistanceInputs(){if(this.viewDistancePresetInput.value=this.viewDistancePreset,this.viewDistancePreset==="CUSTOM"){this.viewDistanceCustomInput.value=String(this.viewDistanceCustomDistance),this.viewDistanceCustomInput.disabled=!1;return}this.viewDistanceCustomInput.value=String(ar[this.viewDistancePreset].distance),this.viewDistanceCustomInput.disabled=!0}getViewDistanceConfig(){if(this.viewDistancePreset!=="CUSTOM")return ar[this.viewDistancePreset];const e=Math.max(1,this.viewDistanceCustomDistance),t=Math.min(e,Math.max(16,Math.round(e*(160/300))));return{distance:e,fog:{enabled:!0,far:e,near:t}}}getCurrentViewDistance(){const e=this.getViewDistanceConfig();return e.fog.enabled?e.fog.far:e.distance}getCurrentLodTransitionDistance(){const e=this.getViewDistanceConfig();return e.fog.enabled?Math.min(e.fog.far,e.fog.near+(e.fog.far-e.fog.near)*.5):e.distance}createFogUniformProvider(){return{color:()=>this.fogColor,enabled:()=>this.getViewDistanceConfig().fog.enabled,far:()=>this.getViewDistanceConfig().fog.far,near:()=>this.getViewDistanceConfig().fog.near}}applyViewDistanceSettings(){this.chunkRendererHost&&(this.chunkRendererHost.fogEnabled=this.getViewDistanceConfig().fog.enabled,this.chunkRendererHost.fogFar=this.getViewDistanceConfig().fog.far,this.chunkRendererHost.fogNear=this.getViewDistanceConfig().fog.near),this.updateViewDistanceVisibility()}applyLightingSettings(){this.chunkBlockMaterialManager||(this.chunkBatchRenderer.setAmbientColor(this.entityAmbientLight.color),this.chunkBatchRenderer.setAmbientIntensity(this.lightingAmbient)),this.entityAmbientLight.intensity=this.lightingAmbient,this.fogColor.set(this.fogColorHex).convertSRGBToLinear(),this.skyboxIntensity=this.skyboxUiIntensity,this.skyboxMesh&&this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor())}getEntityGlobalCoordinate(e){return{x:Math.floor(e.x),y:Math.floor(e.y),z:Math.floor(e.z)}}getEntityLightLevel(e){const t=this.getEntityGlobalCoordinate(e),n=this.world.getLightSourcesNear(t,TC);let i=0;for(const r of n){const o=t.x-r.position.x+.5,a=t.y-r.position.y+.5,l=t.z-r.position.z+.5;if(o>r.level||o<-r.level||a>r.level||a<-r.level||l>r.level||l<-r.level)continue;const c=o*o+a*a+l*l,h=r.level*r.level;if(c>=h)continue;const u=r.level-Math.sqrt(c);u>i&&(i=u)}return Math.max(0,Math.min(1,i/k0))}getEntitySkyLight(e){const t=this.getEntityGlobalCoordinate(e);let n=mn;for(let r=mn;r>=0;r--){const o=this.getEntitySkyOpacityUp({x:t.x,y:t.y+r,z:t.z});o!==void 0?n=o+n*(1-o):n=Math.min(mn,n+1)}const i=Math.max(1,Math.min(mn,Math.round(n)));return go[i]}getEntitySkyOpacityUp(e){if(!this.atlas)return;const t=this.world.getBlockType(e);if(!t||t.isLiquid)return;const n=this.getEntityBlockOpacity(t);return t.trimeshOcclusionProfile?this.getEntityTrimeshSkyOpacity(t,this.world.getBlockRotation(e))*n:n}getEntityBlockOpacity(e){let t=0;for(const i of Ar)t+=this.atlas.getFaceUvs(e,i).transparencyRatio;const n=t/Ar.length;return Math.max(0,Math.min(1,1-n))}getEntityTrimeshSkyOpacity(e,t){const n=e.trimeshOcclusionProfile;if(!n)return 1;const i=an[t]??an[0],r=i[3],o=i[5];return Math.abs(r)>.5?n.skyOpacityX:Math.abs(o)>.5?n.skyOpacityZ:n.skyOpacityUp}updateEntityLighting(e){this.entityMeshManager.updateLighting(t=>this.buildStaticEntityLightingDescriptor(t),e?new Set(e):void 0)}getCurrentSkyboxDisplayColor(){const e=this.getViewDistanceConfig();if(!e.fog.enabled)return Lm.copy(this.fogColor).multiplyScalar(this.skyboxIntensity);const n=Math.max(0,Math.min(1,1-e.fog.near/100)),i=e.fog.far-e.fog.near,o=Math.max(1,100/Math.max(i,1)),a=Math.min(1,n*o);return Lm.copy(iC.setRGB(1,1,1).lerp(this.fogColor,a)).multiplyScalar(this.skyboxIntensity)}restoreSidebarSectionState(e){let t={};try{t=JSON.parse(localStorage.getItem(sh)??"{}")}catch{t={}}for(const n of e.querySelectorAll(".sidebar-section[data-section]")){const i=n.dataset.section;i&&(n.open=t[i]===!0)}}bindSidebarSectionState(e){for(const t of e.querySelectorAll(".sidebar-section[data-section]"))t.addEventListener("toggle",()=>{const n=t.dataset.section;if(!n)return;let i={};try{i=JSON.parse(localStorage.getItem(sh)??"{}")}catch{i={}}i[n]=t.open,localStorage.setItem(sh,JSON.stringify(i))})}createEntityRenderMaterial(e){const t=Array.isArray(e)?e[0]:e,n=t,i=new Vw({color:n.color??new ue(16777215),map:n.map??null,alphaMap:n.alphaMap??null,alphaTest:n.alphaTest??0,transparent:t.transparent,opacity:t.opacity,side:t.side,depthWrite:t.depthWrite,depthTest:t.depthTest,emissive:n.emissive??new ue(0),emissiveIntensity:n.emissiveIntensity??1,emissiveMap:n.emissiveMap??null,fogUniformProvider:this.createFogUniformProvider()});return i.name=`${t.name||"entity"}-editor`,this.ensureEntityMaterialSetup(i),i}ensureEntityMaterialSetup(e){if(e.userData[Ym])return;const t=this;e.addShaderProcessor(n=>{n.uniforms.worldEditorAmbientLightColor={value:this.entityAmbientLight.color},n.uniforms.worldEditorAmbientLightIntensity={get value(){return t.entityAmbientLight.intensity}},n.vertexShader=n.vertexShader.replace("void main() {",`
            #ifdef USE_INSTANCING
              attribute float ${Xm};
              attribute float ${$m};
            #endif
            varying float ${ro};
            varying float ${oo};
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
              ${ro} = 0.0;
              ${oo} = 1.0;
          `).replace("#include <uv_vertex>",`
            #include <uv_vertex>
            #ifdef USE_INSTANCING
              ${ro} = ${Xm};
              ${oo} = ${$m};
            #endif
            mat4 worldEditorInstanceWorldMatrix = modelMatrix;
            #ifdef USE_INSTANCING
              worldEditorInstanceWorldMatrix = modelMatrix * instanceMatrix;
            #endif
            worldEditorWorldNormalY = worldEditorGetWorldNormalY(normal, worldEditorInstanceWorldMatrix);
          `),n.fragmentShader=n.fragmentShader.replace("void main() {",`
            varying float ${ro};
            varying float ${oo};
            varying float worldEditorWorldNormalY;
            uniform vec3 worldEditorAmbientLightColor;
            uniform float worldEditorAmbientLightIntensity;

            void main() {
          `).replace("#include <opaque_fragment>",`
            vec3 ambientLight = worldEditorAmbientLightColor * worldEditorAmbientLightIntensity;
            vec3 blockLight = worldEditorAmbientLightColor * ${ro};
            float normalY = gl_FrontFacing ? worldEditorWorldNormalY : -worldEditorWorldNormalY;
            float faceShade = ${Wm.toFixed(2)}
              + (${Gm.toFixed(2)} - ${qm.toFixed(2)}) * 0.5 * normalY
              + ((${Gm.toFixed(2)} + ${qm.toFixed(2)}) * 0.5 - ${Wm.toFixed(2)}) * normalY * normalY;
            outgoingLight *= max(ambientLight, blockLight);
            outgoingLight *= ${oo} * faceShade;

            #include <opaque_fragment>
          `)}),e.userData[Ym]=!0}async loadEntityModelTemplate(e){this.entityModelCache.has(e)||this.entityModelCache.set(e,this.gltfLoader.loadAsync(e).then(n=>{const i=new tn;return i.add(n.scene.clone(!0)),i.updateMatrixWorld(!0),i}).catch(n=>(console.error(n),new tn)));const t=await this.entityModelCache.get(e);return t.children.length===0?null:t}resolveEntityModelUri(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/voxcinder/world-editor/${e}`}getEntityModelUri(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.modelUri=="string"&&t.modelUri.length>0?t.modelUri:null}updateHoverFromPointer(e){this.updateHoverFromClientPosition(e.clientX,e.clientY)}shouldUseSelectionCenterTarget(){return this.currentTool==="select"&&!!this.prefabSelectionStart&&!this.prefabSelectionBounds}updateHoverFromScreenCenter(){const e=this.renderer.domElement.getBoundingClientRect();this.updateHoverFromClientPosition(e.left+e.width/2,e.top+e.height/2)}updateHoverFromClientPosition(e,t){const n=this.renderer.domElement.getBoundingClientRect();if(Fa.x=(e-n.left)/n.width*2-1,Fa.y=-((t-n.top)/n.height)*2+1,this.camera.updateMatrixWorld(),xn.setFromMatrixPosition(this.camera.matrixWorld),mi.set(Fa.x,Fa.y,.5).unproject(this.camera),gi.copy(mi).sub(xn).normalize(),this.currentTool==="select"&&this.prefabSelectionStart&&!this.prefabSelectionEnd&&!this.prefabSelectionBounds){const l=this.getPrefabSelectionFootprintCoordinateFromRay();this.hoveredBlock=null,this.hoveredBlockHitPoint=null,l?(this.hoveredPlacement=l,this.setSelectionHoverBox(l)):(this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1));return}if(this.currentTool==="select"&&this.prefabSelectionStart&&this.prefabSelectionEnd&&!this.prefabSelectionBounds){const l=this.getPrefabSelectionHeightCoordinateFromRay();if(l){this.hoveredBlock=null,this.hoveredBlockHitPoint=null,this.hoveredPlacement=l,this.setSelectionHoverBox(l);return}}const i=this.raycastBlocks(xn,gi,rC);if(i){this.hoveredBlock=i.coordinate,this.hoveredBlockHitPoint=i.hitPoint;const l=this.getPlacementCoordinateFromBlock(i.coordinate,i.normal);this.hoveredPlacement=l,this.selectionPastePending?this.setSelectionPasteHoverBox(l):this.currentTool==="build"?this.setBuildHoverBox(l):this.currentTool==="erase"?this.setHoverBox(i.coordinate,"#f05d6c"):this.currentTool==="select"&&this.setSelectionHoverBox(i.coordinate);return}this.hoveredBlock=null,this.hoveredBlockHitPoint=null;const r=-.5,o=gi.dot(sC);if(Math.abs(o)<1e-6){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}const a=(r-xn.y)/o;if(a<0){this.hoveredPlacement=null,this.setHoverIndicatorVisible(!1);return}mi.copy(xn).addScaledVector(gi,a),this.hoveredPlacement={x:Math.floor(mi.x),y:0,z:Math.floor(mi.z)},this.setHoverIndicatorVisible(!1),this.hoveredPlacement&&this.selectionPastePending?this.setSelectionPasteHoverBox(this.hoveredPlacement):this.hoveredPlacement&&this.currentTool==="build"&&this.setBuildHoverBox(this.hoveredPlacement),this.hoveredBlock&&this.currentTool==="erase"&&this.setHoverBox(this.hoveredBlock,"#f05d6c"),this.hoveredPlacement&&this.currentTool==="select"&&this.setSelectionHoverBox(this.hoveredPlacement)}clearHover(){if(this.hoveredPlacement=null,this.hoveredBlock=null,this.hoveredBlockHitPoint=null,this.selectionPastePending){this.setHoverIndicatorVisible(!1);return}if(this.currentTool==="select"&&this.prefabSelectionStart&&this.prefabSelectionEnd){this.setSelectionHoverBox(this.prefabSelectionEnd);return}this.setHoverIndicatorVisible(!1)}getPlacementCoordinateFromBlock(e,t){return{x:e.x+Math.round(t.x),y:e.y+Math.round(t.y),z:e.z+Math.round(t.z)}}configureHoverFrame(e,t){const n={x:e.x+ih-1,y:e.y+ih-1,z:e.z+ih-1},i={x:n.x/2-_i/2,y:n.y/2-_i/2,z:n.z/2-_i/2};this.hoverIndicatorRoot.scale.setScalar(1),this.hoverIndicatorRoot.traverse(r=>{const o=r;if(!o.material)return;const a=o.userData.hoverFrameAxis;if(a){const c=Number(o.userData.hoverFrameSignA)||1,h=Number(o.userData.hoverFrameSignB)||1;a==="x"?(o.scale.set(n.x,_i,_i),o.position.set(0,c*i.y,h*i.z)):a==="y"?(o.scale.set(_i,n.y,_i),o.position.set(c*i.x,0,h*i.z)):(o.scale.set(_i,_i,n.z),o.position.set(c*i.x,h*i.y,0)),o.updateMatrix()}const l=Array.isArray(o.material)?o.material:[o.material];for(const c of l){const h=c;h.color&&h.color.set(t)}})}setHoverBox(e,t){Pm.set(e.x+.5,e.y+.5,e.z+.5),this.hoverIndicatorRoot.position.copy(Pm),this.configureHoverFrame({x:1,y:1,z:1},t),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setBuildHoverBox(e){const t=this.prefabs.find(i=>i.id===this.selectedPrefabId);if(!t){this.setHoverBox(e,"#f5b942");return}const n=f1(t,this.placementRotationY);this.hoverIndicatorRoot.position.set(e.x+n.min.x+n.size.x/2,e.y+n.min.y+n.size.y/2,e.z+n.min.z+n.size.z/2),this.configureHoverFrame(n.size,"#f5b942"),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setSelectionHoverBox(e){if(!this.prefabSelectionStart){this.setHoverBox(e,"#61d6ff");return}const t=this.prefabSelectionBounds??(this.prefabSelectionEnd?this.getPrefabSelectionHeightBounds(e):this.getPrefabSelectionPreviewBounds(e));if(!t){this.setHoverBox(e,"#61d6ff");return}const n=this.prefabSelectionBounds?this.prefabSelectionHasBlocks&&!this.isPrefabSelectionTooLarge(this.prefabSelectionBounds)?"#6ee787":"#f05d6c":"#61d6ff";this.hoverIndicatorRoot.position.set(t.min.x+t.size.x/2,t.min.y+t.size.y/2,t.min.z+t.size.z/2),this.configureHoverFrame(t.size,n),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setSelectionPasteHoverBox(e){const t=this.selectionClipboard;if(!t){this.setHoverIndicatorVisible(!1);return}this.hoverIndicatorRoot.position.set(e.x+t.size.x/2,e.y+t.size.y/2,e.z+t.size.z/2),this.configureHoverFrame(t.size,"#b68cff"),this.hoverIndicatorRoot.visible=!0,this.hoverBox.visible=!1}setHoverIndicatorVisible(e){this.hoverIndicatorRoot.visible=e,this.hoverBox.visible=!1}async applyCurrentTool(e){if(this.selectionPastePending){e===0?await this.confirmPasteSelection():e===2&&this.cancelPasteSelection();return}if(this.currentTool==="build"){e===0&&await this.placeSingleBlock();return}if(this.currentTool==="erase"){(e===0||e===2)&&await this.deleteSingleBlock();return}this.currentTool==="select"&&e===0&&(this.shouldUseSelectionCenterTarget()&&this.updateHoverFromScreenCenter(),this.updatePrefabSelectionPoint())}async rebuildAffectedChunks(e){await this.syncChunkMesherWorkerChunks(e),await this.enqueueChunkBuilds(e,Va,this.activeChunkBuildGeneration),this.updateEntityLighting(e),this.updateDebugPanel()}requestAffectedChunksRebuild(e,t=!0){this.lastInteractiveChunkBuildRequestAt=performance.now(),t&&this.flushQueuedWorkerBlockUpdates(),this.queueChunkBuilds(e,Va,this.activeChunkBuildGeneration),this.updateEntityLighting(e),this.updateDebugPanel()}queueChunkBuilds(e,t,n){if(!this.atlas||e.length===0||n!==this.activeChunkBuildGeneration)return[];const i=[...new Set(e)];for(const r of i){const o=this.inFlightChunkBuildPriorities.get(r)??0;if(this.inFlightChunkBuildIds.has(r)&&t>o){this.inFlightChunkBuildPriorities.set(r,t),this.chunkMesherWorker.postMessage({type:"prioritize_chunk_build",focusChunkId:r,priority:t,chunkId:r});continue}const a=this.pendingChunkBuildPriorities.get(r)??0;t>=a&&this.pendingChunkBuildPriorities.set(r,t)}return i}async enqueueChunkBuilds(e,t,n){const i=this.queueChunkBuilds(e,t,n);i.length!==0&&await new Promise(r=>{this.chunkBuildWaiters.push({chunkIds:new Set(i),resolve:r}),this.resolveChunkBuildWaiters()})}processChunkBuildQueueFrame(e){if(e!==this.activeChunkBuildGeneration||this.chunkBuildDispatchInProgress)return;const t=this.takeNextChunkBuildBatch();t.length!==0&&(this.chunkBuildDispatchInProgress=!0,this.dispatchChunkBuildBatch(t,e))}takeNextChunkBuildBatch(){const e=[...this.pendingChunkBuildPriorities.keys()].filter(n=>!this.inFlightChunkBuildIds.has(n)),t=e.filter(n=>(this.pendingChunkBuildPriorities.get(n)??0)>=Va);return t.length>0?t.sort((n,i)=>this.getChunkDistanceToCameraSquared(n)-this.getChunkDistanceToCameraSquared(i)).slice(0,xC):performance.now()-this.lastInteractiveChunkBuildRequestAt<yC?[]:e.sort((n,i)=>this.getChunkDistanceToCameraSquared(n)-this.getChunkDistanceToCameraSquared(i)).slice(0,vC)}getChunkDistanceToCameraSquared(e){const t=Xe.chunkIdToOriginCoordinate(e),n=t.x+8,i=t.y+8,r=t.z+8;return(n-this.camera.position.x)*(n-this.camera.position.x)+(i-this.camera.position.y)*(i-this.camera.position.y)+(r-this.camera.position.z)*(r-this.camera.position.z)}getChunkIdsSortedByDistanceToCamera(e){return[...new Set(e)].sort((t,n)=>this.getChunkDistanceToCameraSquared(t)-this.getChunkDistanceToCameraSquared(n))}async dispatchChunkBuildBatch(e,t){try{if(t!==this.activeChunkBuildGeneration)return;const n=e.filter(i=>!this.workerSyncedChunkIds.has(i));if(n.length>0&&await this.syncChunkMesherWorkerChunks(n),t!==this.activeChunkBuildGeneration)return;this.flushQueuedWorkerBlockUpdates();for(const i of e){const r=this.pendingChunkBuildPriorities.get(i);r!==void 0&&(this.pendingChunkBuildPriorities.delete(i),this.inFlightChunkBuildIds.add(i),this.inFlightChunkBuildPriorities.set(i,r),this.postBuildChunkRequest(i,r,t))}}finally{this.chunkBuildDispatchInProgress=!1}}resolveChunkBuildWaiters(){for(let e=this.chunkBuildWaiters.length-1;e>=0;e--){const t=this.chunkBuildWaiters[e];let n=!0;for(const i of t.chunkIds)if(this.pendingChunkBuildPriorities.has(i)||this.inFlightChunkBuildIds.has(i)){n=!1;break}n&&(this.chunkBuildWaiters.splice(e,1),t.resolve())}}postBuildChunkRequest(e,t,n){const i=this.nextWorkerRequestId++;this.chunkBuildRequestGenerations.set(i,n),this.chunkMesherWorker.postMessage({type:"build_chunk",focusChunkId:e,priority:t,requestId:i,chunkId:e})}flushDeferredChunkBuildResults(){const e=this.deferredInteractiveChunkBuildResults.length>0?this.deferredInteractiveChunkBuildResults.splice(0,this.deferredInteractiveChunkBuildResults.length):this.deferredBackgroundChunkBuildResults.splice(0,this.deferredBackgroundChunkBuildResults.length);if(e.length!==0){e.sort((t,n)=>{const i=(this.inFlightChunkBuildPriorities.get(n.chunkId)??0)-(this.inFlightChunkBuildPriorities.get(t.chunkId)??0);return i!==0?i:this.getChunkDistanceToCameraSquared(t.chunkId)-this.getChunkDistanceToCameraSquared(n.chunkId)});for(const t of e)this.chunkMeshManager?this.chunkMeshManager.setChunkGeometry(t.chunkId,t.geometry):this.chunkBatchRenderer.setChunkGeometry(t.chunkId,t.geometry),this.inFlightChunkBuildIds.delete(t.chunkId),this.inFlightChunkBuildPriorities.delete(t.chunkId);this.chunkMeshManager?this.chunkMeshManager.flush():this.chunkBatchRenderer.flush(),this.resolveChunkBuildWaiters()}}async initializeChunkMesherWorkerWorld(){if(!this.atlas)return;this.flushQueuedWorkerBlockUpdates();const e=this.nextWorkerRequestId++,t=this.atlasSnapshotCache??this.atlas.toSnapshot();await this.postChunkMesherWorkerRequest(e,{type:"sync_world",requestId:e,world:{blockTypes:this.world.toSnapshot().blockTypes,chunks:[]},atlas:t})}async syncChunkMesherWorkerChunks(e){if(!this.atlas||e.length===0)return;this.flushQueuedWorkerBlockUpdates();const t=[...new Set(e)],n=this.nextWorkerRequestId++;await this.postChunkMesherWorkerRequest(n,{type:"update_world_chunks",requestId:n,chunks:t.map(i=>({chunkId:i,snapshot:this.world.getChunkSnapshot(i)}))});for(const i of t)this.workerSyncedChunkIds.add(i)}async syncChunkMesherWorkerBlockType(e){if(!this.atlas||!e)return;const t=this.nextWorkerRequestId++;await this.postChunkMesherWorkerRequest(t,{type:"add_block_type",requestId:t,blockType:this.runtimeBlockTypeToEditorBlockType(e)})}runtimeBlockTypeToEditorBlockType(e){return{id:e.id,name:e.name,textureUri:e.textureUri,isLiquid:e.isLiquid,lightLevel:e.lightLevel,...e.trimeshIndices?{trimeshIndices:Array.from(e.trimeshIndices)}:{},...e.trimeshVertices?{trimeshVertices:Array.from(e.trimeshVertices)}:{},durability:e.durability,customColliderOptions:e.customColliderOptions,isCustom:e.isCustom,isMultiTexture:e.isMultiTexture}}queueChunkMesherWorkerBlockUpdate(e,t,n=0){const i=`${e.x},${e.y},${e.z}`;this.pendingWorkerBlockUpdates.set(i,{blockTypeId:t,coordinate:{...e},rotation:n})}canMergeQueuedBlockUpdates(e){for(const t of e)if(this.inFlightChunkBuildIds.has(t))return!1;return!0}flushQueuedWorkerBlockUpdates(){if(!this.atlas||this.pendingWorkerBlockUpdates.size===0)return;const e=[...this.pendingWorkerBlockUpdates.values()];this.chunkMesherWorker.postMessage({type:"update_world_blocks",updates:e}),this.pendingWorkerBlockUpdates.clear()}async postChunkMesherWorkerRequest(e,t){await new Promise(n=>{const i=r=>{const o=r.data;o.type!=="worker_ack"||o.requestId!==e||(this.chunkMesherWorker.removeEventListener("message",i),n())};this.chunkMesherWorker.addEventListener("message",i),this.chunkMesherWorker.postMessage(t)})}loadSkyboxTexture(e){return new Promise((t,n)=>{const i=this.cubeTextureLoader.load([...e],()=>t(i),void 0,r=>n(r));i.colorSpace=Ct})}createSkyboxMesh(e){const t=new bt(new Si(1,1,1),e);return t.renderOrder=-1e3,t.frustumCulled=!1,t.matrixAutoUpdate=!1,t.matrixWorldAutoUpdate=!1,t}disposeSkyboxMesh(){if(!this.skyboxMesh)return;this.scene.remove(this.skyboxMesh),this.skyboxMesh.geometry.dispose();const e=this.skyboxMesh.material;e instanceof ng&&e.map.dispose(),e.dispose(),this.skyboxMesh=null}ensurePlaceholderSkybox(){this.skyboxMesh instanceof bt&&this.skyboxMesh.material instanceof ig||(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new ig),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh))}async loadSkybox(e){const t=e===Fm,n=Array.isArray(e)?[...e]:[`${e}/+x.png`,`${e}/-x.png`,`${e}/+y.png`,`${e}/-y.png`,`${e}/+z.png`,`${e}/-z.png`],i=this.loadSkyboxTexture(n);this.pendingSkyboxTexture=i,this.ensurePlaceholderSkybox();let r=null;try{r=await i}catch(o){if(console.error(o),!t)try{r=await this.loadSkyboxTexture(Fm)}catch(a){console.error(a)}}this.pendingSkyboxTexture===i&&(this.pendingSkyboxTexture=null,r&&(this.disposeSkyboxMesh(),this.skyboxMesh=this.createSkyboxMesh(new ng(r)),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.scene.add(this.skyboxMesh)))}updateSkybox(){this.skyboxMesh&&(this.camera.updateMatrixWorld(),this.skyboxMesh.material.color.copy(this.getCurrentSkyboxDisplayColor()),this.skyboxMesh.position.copy(this.camera.position),this.skyboxMesh.updateMatrix(),this.skyboxMesh.matrixWorld.copy(this.skyboxMesh.matrix))}raycastBlocks(e,t,n){let i=Math.floor(e.x),r=Math.floor(e.y),o=Math.floor(e.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=a===0?Number.POSITIVE_INFINITY:Math.abs(1/t.x),u=l===0?Number.POSITIVE_INFINITY:Math.abs(1/t.y),d=c===0?Number.POSITIVE_INFINITY:Math.abs(1/t.z);let f=ah(e.x,t.x,i,a),p=ah(e.y,t.y,r,l),_=ah(e.z,t.z,o,c),m=0,g={x:0,y:0,z:0},x=this.world.hasBlock({x:i,y:r,z:o});for(;m<=n;){f<p&&f<_?(i+=a,m=f,f+=h,g={x:-a,y:0,z:0}):p<_?(r+=l,m=p,p+=u,g={x:0,y:-l,z:0}):(o+=c,m=_,_+=d,g={x:0,y:0,z:-c});const S=this.world.hasBlock({x:i,y:r,z:o});if(S&&!x)return{coordinate:{x:i,y:r,z:o},hitPoint:{x:e.x+t.x*m,y:e.y+t.y*m,z:e.z+t.z*m},normal:g};x=S}return null}setToolMode(e){this.currentTool==="select"&&e!=="select"&&this.clearPrefabSelection(),this.currentTool=e,this.toolToggleButton.classList.toggle("active",!0),this.toolToggleButton.innerHTML=`<span class="tool-slot-icon" aria-hidden="true">${this.getToolIconSvg(e)}</span>`,this.toolToggleButton.setAttribute("aria-label",this.getToolLabel(e)),this.toolToggleButton.dataset.tooltip=this.getToolLabel(e),this.updateStatus(`Tool changed to ${this.getToolLabel(e)}.`),this.pointerLocked&&this.updateHoverFromScreenCenter()}setPlacementRotationY(e,t=!0){this.placementRotationY=e,this.syncPaletteSelection(),this.syncPrefabPaletteSelection(),this.hoveredPlacement&&this.currentTool==="build"&&this.setBuildHoverBox(this.hoveredPlacement),t&&this.updateStatus(`Placement rotation set to ${this.placementRotationY*90}.`)}rotatePlacement(e,t=!0){this.setPlacementRotationY((this.placementRotationY+e+4)%4,t)}clearPrefabSelection(){this.prefabSelectionStart=null,this.prefabSelectionWidthEnd=null,this.prefabSelectionWidthAxis=null,this.prefabSelectionEnd=null,this.prefabSelectionBounds=null,this.prefabSelectionHasBlocks=!1,this.syncPrefabSelectionUi()}toggleToolMode(){const e=this.currentTool==="build"?"erase":this.currentTool==="erase"?"select":"build";this.setToolMode(e)}getToolLabel(e){switch(e){case"build":return"Build";case"erase":return"Erase";case"select":return"Select"}}getToolIconSvg(e){switch(e){case"build":return`
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
        `}}async placeSingleBlock(){if(this.selectedPrefabId){await this.placeSelectedPrefab();return}const e=this.hoveredPlacement;if(!e)return;const t=await this.getSelectedBlockTypeForPlacement();if(!t){this.updateStatus("No block pattern selected.");return}if(this.world.getBlockTypeId(e)===t.id&&this.world.getBlockRotation(e)===this.placementRotationY)return;const n=this.world.getBlockTypeId(e),i=new Set([Xe.globalCoordinateToChunkId(e)]),r=this.captureChunkStates(i);this.world.setBlock(e,t.id,this.placementRotationY);const o=[...this.world.getAffectedChunkIds(e,n,t.id)],a=this.canMergeQueuedBlockUpdates(o);a?this.queueChunkMesherWorkerBlockUpdate(e,t.id,this.placementRotationY):await this.syncChunkMesherWorkerChunks(o),this.spawnBlockPlaceDustEffect(e,t),this.playBlockPlaceAudio(),this.pushPatchUndoState(`Place ${t.name}`,r),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild(o,!a),this.scheduleAutosave(),this.updateStatus(`Placed ${t.name} at ${lh(e)}.`)}async placeSelectedPrefab(){const e=this.prefabs.find(c=>c.id===this.selectedPrefabId),t=this.hoveredPlacement;if(!e||!t)return;let n;try{await this.ensurePrefabBlockTypesAvailable(e),n=this.resolvePrefabPlacements(e,t)}catch(c){this.updateStatus(`Prefab placement failed: ${c.message}`);return}if(n.length===0){this.updateStatus(`Prefab "${e.title}" has no placeable blocks.`);return}const i=new Set,r=new Set;for(const c of n){const h=this.world.getBlockTypeId(c.coordinate);if(!(h===c.blockTypeId&&this.world.getBlockRotation(c.coordinate)===c.rotation)){i.add(Xe.globalCoordinateToChunkId(c.coordinate));for(const u of this.world.getAffectedChunkIds(c.coordinate,h,c.blockTypeId))r.add(u)}}if(i.size===0)return;const o=this.captureChunkStates(i);for(const c of n)this.world.setBlock(c.coordinate,c.blockTypeId,c.rotation);const a=[...r],l=n.length<=64&&this.canMergeQueuedBlockUpdates(a);if(l)for(const c of n)this.queueChunkMesherWorkerBlockUpdate(c.coordinate,c.blockTypeId,c.rotation);else await this.syncChunkMesherWorkerChunks(a);this.spawnPrefabPlaceDustEffects(n),this.playBlockPlaceAudio(),this.pushPatchUndoState(`Place prefab ${e.title}`,o),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild(a,!l),this.scheduleAutosave(),this.updateStatus(`Placed prefab "${e.title}".`)}async deleteSingleBlock(){const e=this.hoveredBlock;if(!e||!this.world.hasBlock(e))return;const t=this.world.getBlockTypeId(e),n=this.world.getBlockTypeById(t),i=new Set([Xe.globalCoordinateToChunkId(e)]),r=this.captureChunkStates(i);n&&(this.spawnBlockHitDustEffect(this.hoveredBlockHitPoint??c1(e),e,n),this.spawnBlockBreakEffect(e,n),this.playBlockBreakAudio()),this.world.deleteBlock(e);const o=[...this.world.getAffectedChunkIds(e,t,0)],a=this.canMergeQueuedBlockUpdates(o);a?this.queueChunkMesherWorkerBlockUpdate(e,0):await this.syncChunkMesherWorkerChunks(o),this.pushPatchUndoState(`Delete ${lh(e)}`,r),this.markChunkIdsAutosaveDirty(i),this.requestAffectedChunksRebuild(o,!a),this.scheduleAutosave(),this.updateStatus(`Deleted block at ${lh(e)}.`)}spawnBlockBreakEffect(e,t){const n=this.getBlockBreakParticleEmitter(t),i=new De().setPosition(e.x+.5,e.y+.75,e.z+.5),r=this.resolveBlockBreakParticleColorTint(t),o={colorStart:r,colorEnd:r,colorIntensityStart:1.25,colorIntensityEnd:1.15,lifetime:.22,lifetimeVariance:.07,positionVariance:new L(.42,.42,.42),velocity:new L(0,3.1,0),velocityVariance:new L(3.4,2,3.4),sizeStart:.17,sizeStartVariance:.06,sizeEnd:.07,sizeEndVariance:.03,opacityStart:1,opacityEnd:.9};n.core.setAttachmentMatrix(0,i),n.core.burst(wC,0,o),this.syncParticleEmitterScenePresence(n)}spawnBlockHitDustEffect(e,t,n){const i=this.getBlockHitDustEmitter(),r=fg(this.resolveBlockBreakParticleColorTint(n),1.35),o=t.x+.5,a=t.y+.5,l=t.z+.5;let c=e.x-o,h=e.y-a,u=e.z-l;const d=Math.hypot(c,h,u);d<1e-4?(c=0,h=1,u=0):(c/=d,h/=d,u/=d);const f=new De().setPosition(e.x+c*.2,e.y+h*.2,e.z+u*.2),p={colorStart:r,colorEnd:r,colorIntensityStart:1.7,colorIntensityEnd:1.1,lifetime:.58,lifetimeVariance:.2,positionVariance:new L(.26,.2,.26),velocity:new L(c*1.25,Math.max(.6,h*.9+.6),u*1.25),velocityVariance:new L(.95,.7,.95),sizeStart:.3,sizeStartVariance:.1,sizeEnd:.55,sizeEndVariance:.18,opacityStart:.95,opacityEnd:.1};i.core.setAttachmentMatrix(0,f),i.core.burst(Zm,0,p),this.syncParticleEmitterScenePresence(i)}spawnBlockPlaceDustEffect(e,t,n=Zm){const i=this.getBlockHitDustEmitter(),r=fg(this.resolveBlockBreakParticleColorTint(t),1.2),o=new De().setPosition(e.x+.5,e.y+.55,e.z+.5),a={colorStart:r,colorEnd:r,colorIntensityStart:1.6,colorIntensityEnd:1.1,lifetime:.56,lifetimeVariance:.18,positionVariance:new L(.28,.2,.28),velocity:new L(0,.85,0),velocityVariance:new L(.8,.45,.8),sizeStart:.3,sizeStartVariance:.1,sizeEnd:.56,sizeEndVariance:.16,opacityStart:.95,opacityEnd:.03};i.core.setAttachmentMatrix(0,o),i.core.burst(n,0,a),this.syncParticleEmitterScenePresence(i)}spawnPrefabPlaceDustEffects(e){if(e.length===0)return;const t=Math.max(1,Math.ceil(e.length/jm));let n=0;for(let i=0;i<e.length&&n<jm;i+=t){const r=e[i],o=this.world.getBlockTypeById(r.blockTypeId);o&&(this.spawnBlockPlaceDustEffect(r.coordinate,o,IC),n+=1)}}getBlockBreakParticleEmitter(e){const t=e.textureUris.top,n=this.blockBreakEmitters.get(t);if(n)return n;const i=this.loadParticleTexture(t),r=new kp({alphaTest:.5,maxParticles:AC,rate:0,texture:i,transparent:!1});r.mesh.matrixAutoUpdate=!1,r.mesh.matrixWorldAutoUpdate=!1,r.mesh.frustumCulled=!1;const o={core:r,texture:i};return this.blockBreakEmitters.set(t,o),o}getBlockHitDustEmitter(){if(this.blockHitDustEmitter)return this.blockHitDustEmitter;const e=this.loadParticleTexture(RC),t=new kp({alphaTest:.005,maxParticles:PC,orientation:"billboard",rate:0,texture:e,transparent:!0});return t.mesh.matrixAutoUpdate=!1,t.mesh.matrixWorldAutoUpdate=!1,t.mesh.frustumCulled=!1,this.blockHitDustEmitter={core:t,texture:e},this.blockHitDustEmitter}loadParticleTexture(e){return this.particleTextureLoader.load(e)}resolveBlockBreakParticleColorTint(e){if(!this.atlas)return CC;const t=this.atlas.getFaceUvs(e,"top").averageRGB;return new ue(gr(t[0]),gr(t[1]),gr(t[2]))}syncParticleEmitterScenePresence(e){e.core.hasRenderableParticles()?e.core.mesh.parent===null&&this.scene.add(e.core.mesh):e.core.mesh.parent!==null&&this.scene.remove(e.core.mesh)}updateBlockBreakEffects(e){const t=this.getCurrentViewDistance();for(const n of this.blockBreakEmitters.values())n.core.setViewDistanceCulling(this.camera.position,t),n.core.update(e),this.syncParticleEmitterScenePresence(n);this.blockHitDustEmitter&&(this.blockHitDustEmitter.core.setViewDistanceCulling(this.camera.position,t),this.blockHitDustEmitter.core.update(e),this.syncParticleEmitterScenePresence(this.blockHitDustEmitter))}playBlockBreakAudio(){this.playExclusiveActionAudio({playbackRate:DC,uri:LC,volume:BC},kC)}playBlockPlaceAudio(){this.playExclusiveActionAudio({playbackRate:FC,uri:UC,volume:NC},OC)}playExclusiveActionAudio(e,t){this.resumeAudioContext();const n=this.getOrCreateExclusiveAudioState(e.uri);let i=n.slots.findIndex(l=>!l.isActive);i===-1&&(i=n.nextSlotIndex);const r=n.slots[i];r.cleanupTimer!==null&&(window.clearTimeout(r.cleanupTimer),r.cleanupTimer=null),this.applyAudioOptions(r.audio,e),r.isActive=!0,r.playGeneration+=1;const o=r.playGeneration;this.loadAudioBuffer(e.uri).then(l=>{r.playGeneration===o&&(r.audio.isPlaying&&r.audio.stop(),r.audio.setBuffer(l),r.audio.play(),r.cleanupTimer=window.setTimeout(()=>{r.playGeneration===o&&(r.audio.isPlaying&&r.audio.stop(),r.cleanupTimer=null,r.isActive=!1)},t))}).catch(l=>{console.warn(`WorldEditor: Failed to load audio "${e.uri}".`,l)}),n.nextSlotIndex=(i+1)%Jm}getOrCreateExclusiveAudioState(e){const t=this.exclusiveAudioStates.get(e);if(t)return t;const n={nextSlotIndex:0,slots:Array.from({length:Jm},()=>{const i=new ax(this.audioListener);return i.setLoop(!1),{audio:i,cleanupTimer:null,isActive:!1,playGeneration:0}})};return this.exclusiveAudioStates.set(e,n),n}applyAudioOptions(e,t){e.setVolume(t.volume),e.setPlaybackRate(t.playbackRate),e.setDetune(0)}loadAudioBuffer(e){const t=this.audioBufferCache.get(e);if(t)return t;const n=this.audioLoader.loadAsync(e);return this.audioBufferCache.set(e,n),n}async resumeAudioContext(){this.audioListener.context.state==="suspended"&&await this.audioListener.context.resume()}pushHistoryEntry(e){this.undoStack.push(e),this.undoStack.length>pC&&this.undoStack.shift(),this.redoStack=[],this.updateHistoryButtons()}pushSnapshotUndoState(e,t,n){this.pushHistoryEntry({kind:"snapshot",label:e,before:t,after:n})}pushPatchUndoState(e,t,n=[]){const i=[];for(const[o,a]of t){const l=this.world.getChunkSnapshot(o);this.chunkSnapshotsEqual(a,l)||i.push({chunkId:o,before:a,after:l})}const r=n.filter(o=>this.entityDiffChanged(o));return i.length===0&&r.length===0?!1:(this.pushHistoryEntry({kind:"patch",label:e,chunks:i,...r.length>0?{entities:r}:{}}),!0)}serializeHistoryEntry(e){return e.kind==="snapshot"?{kind:"snapshot",label:e.label,beforeWorld:this.snapshotToWorldMap(e.before),afterWorld:this.snapshotToWorldMap(e.after)}:{kind:"patch",label:e.label,chunks:e.chunks.map(t=>({chunkId:t.chunkId,before:this.serializeChunkSnapshot(t.before),after:this.serializeChunkSnapshot(t.after)})),...e.entities?{entities:e.entities.map(t=>this.serializeEntityHistoryDiff(t))}:{}}}deserializeHistoryEntry(e){return e.kind==="snapshot"?{kind:"snapshot",label:e.label,before:this.worldMapToSnapshot(e.beforeWorld),after:this.worldMapToSnapshot(e.afterWorld)}:{kind:"patch",label:e.label,chunks:e.chunks.map(t=>({chunkId:t.chunkId,before:this.deserializeChunkSnapshot(t.before),after:this.deserializeChunkSnapshot(t.after)})),...e.entities?{entities:e.entities.map(t=>this.deserializeEntityHistoryDiff(t))}:{}}}captureChunkStates(e){const t=new Map;for(const n of new Set(e))t.set(n,this.world.getChunkSnapshot(n));return t}serializeChunkSnapshot(e){return e?{chunkId:e.chunkId,originCoordinate:{...e.originCoordinate},blocks:Array.from(e.blocks),rotations:Array.from(e.rotations)}:null}deserializeChunkSnapshot(e){return e?{chunkId:e.chunkId,originCoordinate:{...e.originCoordinate},blocks:new Uint16Array(e.blocks),rotations:new Uint8Array(e.rotations)}:null}serializeEntityHistoryDiff(e){return{...e,before:this.cloneEntityValue(e.before),after:this.cloneEntityValue(e.after)}}deserializeEntityHistoryDiff(e){return{...e,before:this.cloneEntityValue(e.before),after:this.cloneEntityValue(e.after)}}chunkSnapshotsEqual(e,t){return!e||!t?e===t:e.chunkId===t.chunkId&&e.originCoordinate.x===t.originCoordinate.x&&e.originCoordinate.y===t.originCoordinate.y&&e.originCoordinate.z===t.originCoordinate.z&&Ga(e.blocks,t.blocks)&&Ga(e.rotations,t.rotations)}entityDiffChanged(e){return e.hasBefore!==e.hasAfter?!0:!e.hasBefore&&!e.hasAfter?!1:JSON.stringify(e.before)!==JSON.stringify(e.after)}cloneEntityValue(e){return e==null?e:typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}snapshotToWorldMap(e){const t={};for(const n of e.chunks)for(let i=0;i<n.blocks.length;i++){const r=n.blocks[i];if(r===0)continue;const o=Xe.blockIndexToLocalCoordinate(i),a=`${n.originCoordinate.x+o.x},${n.originCoordinate.y+o.y},${n.originCoordinate.z+o.z}`,l=n.rotations[i]??0;t[a]=l===0?r:{i:r,r:l}}return{blockTypes:e.blockTypes.map(n=>({id:n.id,name:n.name,textureUri:n.textureUri,isLiquid:n.isLiquid,lightLevel:n.lightLevel,...n.trimeshIndices?{trimeshIndices:Array.from(n.trimeshIndices)}:{},...n.trimeshVertices?{trimeshVertices:Array.from(n.trimeshVertices)}:{},durability:n.durability,customColliderOptions:n.customColliderOptions,isCustom:n.isCustom,isMultiTexture:n.isMultiTexture})),blocks:t,...e.entities?{entities:{...e.entities}}:{}}}worldMapToSnapshot(e){const t=new jc;return t.load(e,this.editorBlockCatalog),t.toSnapshot()}async undo(){const e=this.undoStack.pop();if(!e){this.updateHistoryButtons(),this.updateStatus("Nothing to undo.");return}this.redoStack.push(e),this.updateHistoryButtons(),await this.applyHistoryEntry(e,"before"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Undid: ${e.label}.`)}async redo(){const e=this.redoStack.pop();if(!e){this.updateHistoryButtons(),this.updateStatus("Nothing to redo.");return}this.undoStack.push(e),this.updateHistoryButtons(),await this.applyHistoryEntry(e,"after"),this.scheduleAutosave(),this.rebuildEntitiesUi(),this.updateStatus(`Redid: ${e.label}.`)}async applyHistoryEntry(e,t){if(e.kind==="snapshot"){const r=t==="before"?e.before:e.after,o=t==="before"?e.after:e.before;this.markFullWorldAutosaveDirty(),await this.restoreSnapshot(r,o);return}const n=t==="before"?"before":"after",i=e.chunks.map(r=>r.chunkId);for(const r of e.chunks)this.world.applyChunkSnapshot(r.chunkId,r[n]);if(this.markChunkIdsAutosaveDirty(i),e.entities){const r={},o=this.world.entities;for(const a of e.entities){a.key in o&&(r[a.key]=this.cloneEntityValue(o[a.key]));const l=t==="before"?a.hasBefore:a.hasAfter,c=t==="before"?a.before:a.after;l?o[a.key]=this.cloneEntityValue(c):delete o[a.key]}this.world.setEntities(Object.keys(o).length>0?o:void 0),this.markEntitiesAutosaveDirty(),await this.syncEntityMarkersForKeys(e.entities.map(a=>a.key),r)}await this.rebuildAffectedChunks(this.expandChunkIdsForLighting(i))}markChunkIdsAutosaveDirty(e){if(!this.autosaveFullWorldDirty)for(const t of e)this.autosaveDirtyChunkIds.add(t)}markEntitiesAutosaveDirty(){this.autosaveEntitiesDirty=!0}markFullWorldAutosaveDirty(){this.autosaveFullWorldDirty=!0,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!0}resetAutosaveDirtyState(){this.autosaveFullWorldDirty=!1,this.autosaveDirtyChunkIds.clear(),this.autosaveEntitiesDirty=!1}async restoreSnapshot(e,t){const n=!this.areSnapshotsBlockTypeCompatible(t,e),i=n?[]:this.expandChunkIdsForLighting(this.getChangedChunkIds(t,e));if(this.world.loadSnapshot(e),n){await this.rebuildAllChunkMeshes();return}await this.rebuildAffectedChunks(i)}areSnapshotsBlockTypeCompatible(e,t){if(e.blockTypes.length!==t.blockTypes.length)return!1;for(let n=0;n<e.blockTypes.length;n++){const i=e.blockTypes[n],r=t.blockTypes[n];if(i.id!==r.id||i.name!==r.name||i.textureUri!==r.textureUri||i.isLiquid!==r.isLiquid||i.isMultiTexture!==r.isMultiTexture)return!1}return!0}getChangedChunkIds(e,t){const n=new Set,i=new Map(e.chunks.map(o=>[o.chunkId,o])),r=new Map(t.chunks.map(o=>[o.chunkId,o]));for(const o of new Set([...i.keys(),...r.keys()])){const a=i.get(o),l=r.get(o);if(!a||!l){n.add(o);continue}(!Ga(a.blocks,l.blocks)||!Ga(a.rotations,l.rotations))&&n.add(o)}return[...n]}expandChunkIdsForLighting(e){const t=new Set;for(const n of e){const i=Xe.chunkIdToOriginCoordinate(n);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)t.add(Xe.originCoordinateToChunkId({x:i.x+a*16,y:i.y+r*16,z:i.z+o*16}))}return[...t]}updateStatus(e){}updateDebugPanel(){var n;const e=this.renderer.info,t=performance.memory;this.debugSummaryLine.innerHTML=`<strong>FPS:</strong> ${this.fps} <strong>Chunks:</strong> ${this.world.chunkIds.length} <strong>Chunk Batches:</strong> ${((n=this.chunkMeshManager)==null?void 0:n.batchMeshCount)??this.chunkBatchRenderer.batchMeshCount}`,this.debugRenderLine.innerHTML=`<strong>Draw Calls:</strong> ${e.render.calls} <strong>Triangles:</strong> ${e.render.triangles}`,this.debugSceneLine.innerHTML=`<strong>Geometries:</strong> ${e.memory.geometries} <strong>Textures:</strong> ${e.memory.textures}`,t?this.debugMemoryLine.innerHTML=`<strong>Heap:</strong> ${ju(t.usedJSHeapSize)} / ${ju(t.totalJSHeapSize)}`:this.debugMemoryLine.innerHTML="<strong>Heap:</strong> unavailable in this browser"}updateViewDistanceVisibility(){const e=this.getCurrentViewDistance(),t=this.getCurrentLodTransitionDistance();this.updateSceneVisibilityForCamera(this.camera,e,t)}updateSceneVisibilityForCamera(e,t,n){const i=t*t,r=n*n;e.updateMatrixWorld(),sr.set(e.position.x,e.position.z),Dm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),rr.setFromProjectionMatrix(Dm);const a=(this.chunkMeshManager??this.chunkBatchRenderer).collectPreOcclusionChunkModes(sr,r,i,rr,this.nextPreOcclusionChunkModes);this.preOcclusionChunkModes.clear();for(const[l,c]of a)this.preOcclusionChunkModes.set(l,c);this.chunkMeshManager?this.chunkMeshManager.applyBatchVisibility(sr,r,i,rr,this.preOcclusionChunkModes):this.chunkBatchRenderer.applyViewDistanceVisibility(sr,r,i,rr,this.preOcclusionChunkModes),this.entityMeshManager.updateScenePresence(sr,i,rr);for(const l of this.entityRenderObjects){const c=Number(l.userData.visibilityRadius??1);Oa.center.copy(l.getWorldPosition(mi)),Oa.radius=c;const h=l1(Oa.center,sr)<=i,u=rr.intersectsSphere(Oa),d=h&&u,f=l.parent!==null;d&&!f?this.entityLayer.add(l):!d&&f&&this.entityLayer.remove(l)}}updateSpectatorRotation(e,t){this.spectatorPitch=Math.max(-Um,Math.min(Um,this.spectatorPitch+t*km)),this.spectatorYaw-=e*km,this.applySpectatorCameraOrientation(),this.scheduleViewStateAutosave()}applySpectatorCameraOrientation(){this.camera.rotation.set(-this.spectatorPitch,this.spectatorYaw,0,"YXZ")}updateSpectatorCamera(e){if(!this.pointerLocked&&!this.mobileControlsEnabled)return!1;const t=oC*(this.pressedKeys.has("shift")?aC:1)*e;so.copy(this.camera.rotation),or.set(0,0,-1).applyEuler(so),za.set(1,0,0).applyEuler(so);let n=!1;return this.pressedKeys.has("key_w")&&(this.camera.position.addScaledVector(or,t),n=!0),this.pressedKeys.has("key_s")&&(this.camera.position.addScaledVector(or,-t),n=!0),this.pressedKeys.has("key_a")&&(this.camera.position.addScaledVector(za,-t),n=!0),this.pressedKeys.has("key_d")&&(this.camera.position.addScaledVector(za,t),n=!0),this.mobileControlsEnabled&&(Math.abs(this.mobileMoveInputY)>.01&&(this.camera.position.addScaledVector(or,-this.mobileMoveInputY*t),n=!0),Math.abs(this.mobileMoveInputX)>.01&&(this.camera.position.addScaledVector(za,this.mobileMoveInputX*t),n=!0)),n&&this.scheduleViewStateAutosave(),n}getCurrentBlockTypeDefinitions(){return this.world.toJson().blockTypes??this.editorBlockCatalog}resolveTemplateBlockIds(e){var i;const t=(...r)=>{var a;const o=r.map(l=>l.toLowerCase());return(a=e.find(l=>o.includes(l.name.toLowerCase())))==null?void 0:a.id},n=((i=e[0])==null?void 0:i.id)??1;return{accent:t("bricks","andesite")??n,grass:t("grass-block","grass-block-pine","grass-flower-block","grass-flower-block-pine")??n,leaves:t("oak-leaves","birch-leaves","spruce-leaves")??n,sand:t("sand")??n,stone:t("stone","andesite","cobblestone")??n,wall:t("cobblestone","andesite","stone")??n,water:t("water")??n,wood:t("oak-log","spruce-log")??n}}getEntityLabel(e){if(e&&typeof e=="object"){const t=e,n=t.name??t.modelUri??t.modelLoopedAnimations??t.type;if(typeof n=="string"&&n.length>0)return n}return"entity"}async addEntityAtHover(){const e=this.hoveredPlacement??this.hoveredBlock;if(!e){this.updateStatus("No hover target for entity placement.");return}const t=`${e.x+.5},${e.y+.5},${e.z+.5}`,n=this.cloneEntityValue(void 0);this.world.setEntity(t,{name:"entity"}),this.pushPatchUndoState("Add entity",new Map,[{key:t,before:n,after:this.cloneEntityValue(this.world.entities[t]),hasBefore:!1,hasAfter:!0}]),this.selectedEntityKey=t,this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([t]),this.scheduleAutosave(),this.updateStatus(`Added entity at ${t}.`)}async saveSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}try{const e=JSON.parse(this.entityOptionsInput.value||"{}"),t=this.world.entities,n=this.cloneEntityValue(t[this.selectedEntityKey]);this.world.setEntity(this.selectedEntityKey,e),this.pushPatchUndoState("Edit entity",new Map,[{key:this.selectedEntityKey,before:n,after:this.cloneEntityValue(e),hasBefore:!0,hasAfter:!0}]),this.markEntitiesAutosaveDirty(),this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([this.selectedEntityKey],{[this.selectedEntityKey]:n}),this.scheduleAutosave(),this.updateStatus(`Saved entity at ${this.selectedEntityKey}.`)}catch(e){this.updateStatus(`Invalid entity JSON: ${e.message}`)}}async deleteSelectedEntity(){if(!this.selectedEntityKey){this.updateStatus("No entity selected.");return}const e=this.selectedEntityKey,t=this.world.entities,n=this.cloneEntityValue(t[e]);this.world.deleteEntity(e),this.pushPatchUndoState("Delete entity",new Map,[{key:e,before:n,after:this.cloneEntityValue(void 0),hasBefore:!0,hasAfter:!1}]),this.markEntitiesAutosaveDirty(),this.selectedEntityKey=null,this.rebuildEntitiesUi(),await this.syncEntityMarkersForKeys([e],{[e]:n}),this.scheduleAutosave(),this.updateStatus(`Deleted entity at ${e}.`)}scheduleAutosave(){this.autosaveTimeoutId!==null&&window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=window.setTimeout(()=>{this.autosaveTimeoutId=null,this.flushAutosave()},zm)}scheduleViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=window.setTimeout(()=>{this.viewStateAutosaveTimeoutId=null,this.flushViewStateAutosave()},zm)}async flushAutosave(){this.autosaveTimeoutId!==null&&(window.clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=null);const e={fileName:this.fileName,blockTypes:this.world.blockTypes.map(r=>({id:r.id,name:r.name,textureUri:r.textureUri,isLiquid:r.isLiquid,lightLevel:r.lightLevel,...r.trimeshIndices?{trimeshIndices:Array.from(r.trimeshIndices)}:{},...r.trimeshVertices?{trimeshVertices:Array.from(r.trimeshVertices)}:{},durability:r.durability,customColliderOptions:r.customColliderOptions,isCustom:r.isCustom,isMultiTexture:r.isMultiTexture})),redoStack:this.redoStack.map(r=>this.serializeHistoryEntry(r)),undoStack:this.undoStack.map(r=>this.serializeHistoryEntry(r))},t=this.autosaveFullWorldDirty?this.world.chunkIds.map(r=>this.world.getChunkSnapshot(r)).filter(r=>r!==null).map(r=>({chunkId:r.chunkId,originCoordinate:r.originCoordinate,blocks:r.blocks,rotations:r.rotations})):[],n=this.autosaveFullWorldDirty?[]:[...this.autosaveDirtyChunkIds].map(r=>{const o=this.world.getChunkSnapshot(r);return{chunkId:r,snapshot:o?{chunkId:o.chunkId,originCoordinate:o.originCoordinate,blocks:o.blocks,rotations:o.rotations}:null}}),i=this.autosaveEntitiesDirty||this.autosaveFullWorldDirty?Object.entries(this.world.entities).map(([r,o])=>({key:r,options:o})):[];try{this.autosaveFullWorldDirty?await i1(this.currentAutosaveSlotId,e,t,i):await s1(this.currentAutosaveSlotId,e,n,this.autosaveEntitiesDirty?i:null),localStorage.removeItem(Ha(this.currentAutosaveSlotId)),this.autosaveSlots=YC(this.autosaveSlots,this.currentAutosaveSlotId),await lr(this.autosaveSlots),this.resetAutosaveDirtyState()}catch(r){console.error(r);try{const o={fileName:this.fileName,redoStack:e.redoStack,undoStack:e.undoStack,world:this.world.toJson()};localStorage.setItem(Ha(this.currentAutosaveSlotId),JSON.stringify(o))}catch(o){console.error(o)}}}async flushViewStateAutosave(){this.viewStateAutosaveTimeoutId!==null&&(window.clearTimeout(this.viewStateAutosaveTimeoutId),this.viewStateAutosaveTimeoutId=null);const e={camera:{pitch:this.spectatorPitch,position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},yaw:this.spectatorYaw},lighting:{ambient:this.lightingAmbient,fogColorHex:this.fogColorHex,skyboxIntensity:this.skyboxUiIntensity},menuOpen:this.mobileSidebarOpen,paletteFilter:this.paletteFilter,resolutionPreset:this.resolutionPreset,viewDistance:{customDistance:this.viewDistanceCustomDistance,preset:this.viewDistancePreset}};try{await qC(e)}catch(t){console.error(t)}}buildExploreUrl(){const e=new URL(hC,window.location.origin);return e.searchParams.set(dC,"solo"),e.searchParams.set(fC,"peaceful"),e.searchParams.set(uC,"editor"),e}async openExploreMode(){const e=window.open("about:blank","_blank");if(!e){this.updateStatus("Failed to open Explore tab. Allow pop-ups and try again.");return}e.document.title="Preparing Explore...",this.updateStatus("Saving map for Explore...");try{await this.flushAutosave(),await this.flushViewStateAutosave(),e.location.href=this.buildExploreUrl().toString(),this.updateStatus("Opened Explore in a new tab.")}catch(t){e.close(),this.updateStatus(`Failed to open Explore: ${t.message}`)}}async getRestorableAutosavePayload(e){let t=null,n=null;try{n=await r1(e),n||(t=JSON.parse(localStorage.getItem(Ha(e))??"null"))}catch{t=null,n=null}const i=(n==null?void 0:n.world)??(t==null?void 0:t.world);return i?{legacyPayload:t,metaPayload:(n==null?void 0:n.meta)??null,worldPayload:i}:null}async applyAutosavedWorldPayload(e,t){var n,i,r,o,a,l,c;try{this.world.load(e.worldPayload,this.editorBlockCatalog),this.selectedBlockTypeId=((n=this.world.blockTypes[0])==null?void 0:n.id)??this.selectedBlockTypeId,this.resetBlockAppearanceSelection(),this.fileName=((i=e.metaPayload)==null?void 0:i.fileName)||((r=e.legacyPayload)==null?void 0:r.fileName)||"untitled-world-map.json",this.undoStack=(((o=e.metaPayload)==null?void 0:o.undoStack)??((a=e.legacyPayload)==null?void 0:a.undoStack)??[]).map(h=>this.deserializeHistoryEntry(h)),this.redoStack=(((l=e.metaPayload)==null?void 0:l.redoStack)??((c=e.legacyPayload)==null?void 0:c.redoStack)??[]).map(h=>this.deserializeHistoryEntry(h)),this.updateHistoryButtons(),this.resetAutosaveDirtyState(),this.selectedEntityKey=null,this.rebuildPalette(),this.rebuildEntitiesUi(),t?await this.rebuildAllChunkMeshes():this.rebuildAllChunkMeshes(),this.updateStatus(`Restored autosave for ${this.fileName}.`)}catch(h){throw console.error(h),localStorage.removeItem(Ha(this.currentAutosaveSlotId)),Zu(this.currentAutosaveSlotId),h}}updateHistoryButtons(){this.undoButton.disabled=this.undoStack.length===0,this.redoButton.disabled=this.redoStack.length===0}async restoreAutosavedViewState(){var t,n;let e=null;try{e=await XC()}catch{e=null}e&&(this.spectatorPitch=e.camera.pitch,this.spectatorYaw=e.camera.yaw,this.camera.position.set(e.camera.position.x,e.camera.position.y,e.camera.position.z),this.applySpectatorCameraOrientation(),this.setMobileSidebarOpen(e.menuOpen??!1,!1),this.paletteFilter=e.paletteFilter??"",this.paletteFilterInput.value=this.paletteFilter,this.resolutionPreset=e.resolutionPreset??"MEDIUM",this.syncResolutionInputs(),this.applyResolutionSettings(),this.viewDistancePreset=((t=e.viewDistance)==null?void 0:t.preset)??"MEDIUM",this.viewDistanceCustomDistance=((n=e.viewDistance)==null?void 0:n.customDistance)??ar.MEDIUM.distance,this.syncViewDistanceInputs(),this.applyViewDistanceSettings(),this.lightingAmbient=e.lighting.ambient,this.fogColorHex=e.lighting.fogColorHex||"#ffffff",this.skyboxUiIntensity=e.lighting.skyboxIntensity,this.syncLightingInputs(),this.applyLightingSettings())}}function ko(){return new Promise((s,e)=>{const t=indexedDB.open(gC,1);t.onerror=()=>e(t.error),t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains(In)||n.createObjectStore(In)},t.onsuccess=()=>s(t.result)})}async function Wd(s,e){const t=await ko();try{return await new Promise((n,i)=>{const r=t.transaction(In,s),o=r.objectStore(In),a=e(o);a.onerror=()=>i(a.error),a.onsuccess=()=>n(a.result),r.onerror=()=>i(r.error)})}finally{t.close()}}function Hl(s,e){return Wd("readwrite",t=>t.put(e,s)).then(()=>{})}function VC(s){return Wd("readwrite",e=>e.delete(s)).then(()=>{})}async function Uo(s){return await Wd("readonly",t=>t.get(s))??null}function qd(s){return`prefab-preview:${s}`}function HC(s,e){return Hl(qd(s),e)}function GC(s){return Uo(qd(s))}function WC(s){return VC(qd(s))}function qC(s){return Hl(L0,s)}function XC(){return Uo(L0)}function Ha(s){return`${mC}:${s}`}function $C(){return`slot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function sg(s,e){const t=Date.now();return{id:s,name:e,createdAt:t,updatedAt:t}}function YC(s,e){const t=Date.now();return s.map(n=>n.id===e?{...n,updatedAt:t}:n)}function KC(s){const e=Number(s);return Number.isInteger(e)&&e>0?e:void 0}function ZC(s){return!s.publishedMapId||!s.editToken?{isChecking:!1,isUpdatingPublishedMap:!1}:{isChecking:!0,isUpdatingPublishedMap:!0}}function rg(s){return s.isChecking?"Version: Checking...":s.isUpdatingPublishedMap&&!s.latestVersionNumber?"Version: Unknown":`Version: v${jC(s.isUpdatingPublishedMap,s.latestVersionNumber)}`}function jC(s,e){return s&&Number.isInteger(e)&&e>0?e+1:1}function JC(s){return s instanceof Error&&/\bmap\b.*\bnot found\b|\bmap\b.*\bwas not found\b/i.test(s.message)}function QC(s,e){var i;const t=e==="latest"?s.versionCount:Number(e);return((i=s.versions)==null?void 0:i.find(r=>r.versionNumber===t||r.versionId===e))??{blockCount:s.blockCount,sizeBytes:s.sizeBytes}}function og(s){const e=new Date(s);if(Number.isNaN(e.getTime()))return s;const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0"),a=String(e.getSeconds()).padStart(2,"0");return`${t}/${n}/${i} ${r}:${o}:${a}`}async function e1(){const s=await Uo(B0);return Array.isArray(s)?s.filter(e=>!!(e&&typeof e.id=="string"&&typeof e.name=="string")).sort((e,t)=>e.createdAt-t.createdAt):[]}function lr(s){return Hl(B0,s)}function t1(){return Uo(D0)}function co(s){return Hl(D0,s)}function kr(s){return`slot:${s}:`}function Xd(s){return`${kr(s)}meta`}function N0(s,e){return`${kr(s)}chunk:${e}`}function F0(s,e){return`${kr(s)}entity:${e}`}async function n1(s,e){const t=await ko();try{await new Promise((n,i)=>{const r=t.transaction(In,s),o=r.objectStore(In),a=o.openCursor();a.onerror=()=>i(a.error),a.onsuccess=()=>{const l=a.result;if(!l){n();return}Promise.resolve(e(l.key,l.value,o)).then(()=>l.continue()).catch(i)},r.onerror=()=>i(r.error)})}finally{t.close()}}async function i1(s,e,t,n){await Zu(s);const i=await ko();try{await new Promise((r,o)=>{const a=i.transaction(In,"readwrite"),l=a.objectStore(In);l.put(e,Xd(s));for(const c of t)l.put(c,N0(s,c.chunkId));for(const c of n)l.put(c,F0(s,c.key));a.oncomplete=()=>r(),a.onerror=()=>o(a.error)})}finally{i.close()}}async function s1(s,e,t,n){const i=await ko();try{await new Promise((r,o)=>{const a=i.transaction(In,"readwrite"),l=a.objectStore(In);l.put(e,Xd(s));for(const c of t){const h=N0(s,c.chunkId);c.snapshot?l.put(c.snapshot,h):l.delete(h)}if(n){const c=l.openCursor();c.onerror=()=>o(c.error),c.onsuccess=()=>{const h=c.result;if(!h){for(const u of n)l.put(u,F0(s,u.key));return}typeof h.key=="string"&&h.key.startsWith(`${kr(s)}entity:`)&&h.delete(),h.continue()}}a.oncomplete=()=>r(),a.onerror=()=>o(a.error)})}finally{i.close()}}async function r1(s){const e=await Uo(Xd(s));if(!e)return null;const t={},n={},i=kr(s);return await n1("readonly",(r,o)=>{if(typeof r=="string"){if(r.startsWith(`${i}chunk:`)){const a=o;for(let l=0;l<a.blocks.length;l++){const c=a.blocks[l];if(c===0)continue;const h=Xe.blockIndexToLocalCoordinate(l),u=`${a.originCoordinate.x+h.x},${a.originCoordinate.y+h.y},${a.originCoordinate.z+h.z}`,d=a.rotations[l]??0;t[u]=d===0?c:{i:c,r:d}}return}if(r.startsWith(`${i}entity:`)){const a=o;n[a.key]=a.options}}}),{meta:e,world:{blockTypes:e.blockTypes,blocks:t,...Object.keys(n).length>0?{entities:n}:{}}}}async function Zu(s){const e=await ko();try{await new Promise((t,n)=>{const i=e.transaction(In,"readwrite"),r=i.objectStore(In),o=kr(s),a=r.openCursor();a.onerror=()=>n(a.error),a.onsuccess=()=>{const l=a.result;if(!l){t();return}typeof l.key=="string"&&l.key.startsWith(o)&&l.delete(),l.continue()},i.onerror=()=>n(i.error)})}finally{e.close()}}function ah(s,e,t,n){if(n===0||e===0)return Number.POSITIVE_INFINITY;const i=n>0?t+1:t;return Math.abs((i-s)/e)}function ju(s){return`${(s/(1024*1024)).toFixed(1)} MB`}function ag(s){return s<1024?`${s} B`:s<1024*1024?`${(s/1024).toFixed(1)} KB`:ju(s)}function o1(s){return s?`${s.x}x${s.y}x${s.z}`:"Size unknown"}function a1(s){if(!Number.isFinite(s))return"0";const e=Math.max(0,Math.round(s));return e<1e3?String(e):e<1e6?`${lg(e/1e3)}K`:`${lg(e/1e6)}M`}function lg(s){return s>=10?String(Math.round(s)):s.toFixed(1).replace(/\.0$/,"")}function lh(s){return`${s.x},${s.y},${s.z}`}function Ga(s,e){if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0}function cg(s){switch(s){case"KeyW":return"key_w";case"KeyA":return"key_a";case"KeyS":return"key_s";case"KeyD":return"key_d";case"Space":return"space";case"ShiftLeft":case"ShiftRight":return"shift";default:return s.toLowerCase()}}function hg(s){return s instanceof HTMLElement?!!s.closest('input, textarea, select, [contenteditable="true"], [contenteditable=""]'):!1}function ho(s,e,t){if(s.replaceChildren(),!t){const i=document.createElement("span");i.textContent="Preview unchanged",s.append(i);return}if(!e){const i=document.createElement("span");i.textContent="No Preview",s.append(i);return}const n=document.createElement("img");n.src=e,n.alt="",s.append(n)}function Il(s){return(typeof s=="string"?s.trim():"")||"You"}function ug(){try{return Il(window.localStorage.getItem(U0))}catch{return"You"}}function dg(s){try{window.localStorage.setItem(U0,Il(s))}catch{}}function cr(s){const e=s.split(",");if(e.length!==3)return null;const t=Number(e[0]),n=Number(e[1]),i=Number(e[2]);return!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(i)?null:{x:t,y:n,z:i}}function l1(s,e){const t=s.x-e.x,n=s.z-e.y;return t*t+n*n}function gr(s){return Math.max(0,Math.min(1,1-Km+s*Km))}function fg(s,e){return new ue(Math.min(1,s.r*e),Math.min(1,s.g*e),Math.min(1,s.b*e))}function c1(s){return{x:s.x+.5,y:s.y+.5,z:s.z+.5}}function h1(s){if(!s||typeof s!="object")return null;const e=s.tintColor;if(typeof e=="string"&&e.length>0)try{return new ue(e)}catch{return null}if(Array.isArray(e)&&e.length>=3){const t=Number(e[0]),n=Number(e[1]),i=Number(e[2]);if(Number.isFinite(t)&&Number.isFinite(n)&&Number.isFinite(i))return new ue(t,n,i)}if(e&&typeof e=="object"){const t=e,n=Number(t.r??t.x),i=Number(t.g??t.y),r=Number(t.b??t.z);if(Number.isFinite(n)&&Number.isFinite(i)&&Number.isFinite(r))return new ue(n,i,r)}return null}function u1(s){if(ir.set(1,1,1),!s||typeof s!="object")return ir;const e=s,t=e.modelScale??e.scale;if(typeof t=="number")return ir.setScalar(t),ir;if(t&&typeof t=="object"){const n=t;ir.set(Number(n.x??1)||1,Number(n.y??1)||1,Number(n.z??1)||1)}return ir}function d1(s){if(io.identity(),!s||typeof s!="object")return io;const t=s.rotation;if(!t||typeof t!="object")return io;const n=t;return typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"&&typeof n.w=="number"&&io.set(n.x,n.y,n.z,n.w),io}function O0(s,e,t){const n=s.x-e.x,i=s.y-e.y,r=s.z-e.z;if(t===0)return{x:n,y:i,z:r};const o=an[t];return{x:o[0]*n+o[1]*i+o[2]*r,y:o[3]*n+o[4]*i+o[5]*r,z:o[6]*n+o[7]*i+o[8]*r}}function f1(s,e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(const l of[0,s.size.x-1])for(const c of[0,s.size.y-1])for(const h of[0,s.size.z-1]){const u=O0({x:l,y:c,z:h},s.anchor,e);t=Math.min(t,u.x),n=Math.min(n,u.y),i=Math.min(i,u.z),r=Math.max(r,u.x),o=Math.max(o,u.y),a=Math.max(a,u.z)}return{min:{x:t,y:n,z:i},max:{x:r,y:o,z:a},size:{x:r-t+1,y:o-n+1,z:a-i+1}}}function p1(s,e){const t=Number.isInteger(s)&&s>=0&&s<an.length?s:0;if(e===0)return t;const n=m1(an[e],an[t]);for(let i=0;i<an.length;i+=1)if(g1(n,an[i]))return i;return t}function m1(s,e){return[s[0]*e[0]+s[1]*e[3]+s[2]*e[6],s[0]*e[1]+s[1]*e[4]+s[2]*e[7],s[0]*e[2]+s[1]*e[5]+s[2]*e[8],s[3]*e[0]+s[4]*e[3]+s[5]*e[6],s[3]*e[1]+s[4]*e[4]+s[5]*e[7],s[3]*e[2]+s[4]*e[5]+s[5]*e[8],s[6]*e[0]+s[7]*e[3]+s[8]*e[6],s[6]*e[1]+s[7]*e[4]+s[8]*e[7],s[6]*e[2]+s[7]*e[5]+s[8]*e[8]]}function g1(s,e){for(let t=0;t<9;t+=1)if(s[t]!==e[t])return!1;return!0}function _1(s){switch(s){case 1:return"→";case 2:return"↓";case 3:return"←";case 0:return"↑"}}function y1(s){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("class","palette-rotation-icon"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("aria-hidden","true");const t=document.createElementNS("http://www.w3.org/2000/svg","path");if(t.setAttribute("d","M3.5 12h13m-5-5 5 5-5 5"),t.setAttribute("fill","none"),t.setAttribute("stroke","currentColor"),t.setAttribute("stroke-width","2.6"),t.setAttribute("stroke-linecap","round"),t.setAttribute("stroke-linejoin","round"),e.append(t),s!==1){const n=s===2?90:s===3?180:-90;e.style.transform=`rotate(${n}deg)`}return e}new zC(P0);
