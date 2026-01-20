const Dv=()=>{};var Ad={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ov=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],a=r[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,a=o?r[i+1]:0,l=i+2<r.length,u=l?r[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),n.push(t[h],t[p],t[g],t[m])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Yg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ov(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],a=i<r.length?t[r.charAt(i)]:0;++i;const u=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new xv;const g=s<<2|a>>4;if(n.push(g),u!==64){const m=a<<4&240|u>>2;if(n.push(m),p!==64){const I=u<<6&192|p;n.push(I)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class xv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nv=function(r){const e=Yg(r);return Xg.encodeByteArray(e,!0)},Mc=function(r){return Nv(r).replace(/\./g,"")},Qg=function(r){try{return Xg.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=()=>Vv().__FIREBASE_DEFAULTS__,Lv=()=>{if(typeof process>"u"||typeof Ad>"u")return;const r=Ad.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Fv=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Qg(r[1]);return e&&JSON.parse(e)},gl=()=>{try{return Dv()||Mv()||Lv()||Fv()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Jg=r=>gl()?.emulatorHosts?.[r],Uv=r=>{const e=Jg(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Zg=()=>gl()?.config,em=r=>gl()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function tm(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Mc(JSON.stringify(t)),Mc(JSON.stringify(o)),""].join(".")}const Xo={};function qv(){const r={prod:[],emulator:[]};for(const e of Object.keys(Xo))Xo[e]?r.emulator.push(e):r.prod.push(e);return r}function $v(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Sd=!1;function nm(r,e){if(typeof window>"u"||typeof document>"u"||!go(window.location.host)||Xo[r]===e||Xo[r]||Sd)return;Xo[r]=e;function t(g){return`__firebase__banner__${g}`}const n="__firebase__banner",s=qv().prod.length>0;function o(){const g=document.getElementById(n);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,m){g.setAttribute("width","24"),g.setAttribute("id",m),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Sd=!0,o()},g}function h(g,m){g.setAttribute("id",m),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=$v(n),m=t("text"),I=document.getElementById(m)||document.createElement("span"),w=t("learnmore"),S=document.getElementById(w)||document.createElement("a"),D=t("preprendIcon"),k=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const N=g.element;a(N),h(S,w);const O=u();l(k,D),N.append(k,I,S,O),document.body.appendChild(N)}s?(I.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function Hv(){const r=gl()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kv(){const r=Yt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Yv(){return!Hv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function im(){try{return typeof indexedDB=="object"}catch{return!1}}function sm(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}function Xv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="FirebaseError";class dr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Qv,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Jv(s,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dr(i,a,n)}}function Jv(r,e){return r.replace(Zv,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Zv=/\{\$([^}]+)}/g;function ew(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Si(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(bd(s)&&bd(o)){if(!Si(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function bd(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Lo(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fo(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function tw(r,e){const t=new nw(r,e);return t.subscribe.bind(t)}class nw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");rw(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ql),i.error===void 0&&(i.error=Ql),i.complete===void 0&&(i.complete=Ql);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ql(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=1e3,sw=2,ow=4*60*60*1e3,aw=.5;function Rd(r,e=iw,t=sw){const n=e*Math.pow(t,r),i=Math.round(aw*n*(Math.random()-.5)*2);return Math.min(ow,n+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(r){return r&&r._delegate?r._delegate:r}class ur{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Bv;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uw(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:lw(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lw(r){return r===Gi?void 0:r}function uw(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(pe||(pe={}));const fw={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},dw=pe.INFO,pw={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},gw=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=pw[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=dw,this._logHandler=gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const mw=(r,e)=>e.some(t=>r instanceof t);let Pd,Cd;function _w(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yw(){return Cd||(Cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const om=new WeakMap,Ru=new WeakMap,am=new WeakMap,Jl=new WeakMap,Ih=new WeakMap;function Tw(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(_i(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&om.set(t,r)}).catch(()=>{}),Ih.set(e,r),e}function vw(r){if(Ru.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});Ru.set(r,e)}let Pu={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ru.get(r);if(e==="objectStoreNames")return r.objectStoreNames||am.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ww(r){Pu=r(Pu)}function Ew(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Zl(this),e,...t);return am.set(n,e.sort?e.sort():[e]),_i(n)}:yw().includes(r)?function(...e){return r.apply(Zl(this),e),_i(om.get(this))}:function(...e){return _i(r.apply(Zl(this),e))}}function Iw(r){return typeof r=="function"?Ew(r):(r instanceof IDBTransaction&&vw(r),mw(r,_w())?new Proxy(r,Pu):r)}function _i(r){if(r instanceof IDBRequest)return Tw(r);if(Jl.has(r))return Jl.get(r);const e=Iw(r);return e!==r&&(Jl.set(r,e),Ih.set(e,r)),e}const Zl=r=>Ih.get(r);function cm(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),a=_i(o);return n&&o.addEventListener("upgradeneeded",l=>{n(_i(o.result),l.oldVersion,l.newVersion,_i(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Aw=["get","getKey","getAll","getAllKeys","count"],Sw=["put","add","delete","clear"],eu=new Map;function kd(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(eu.get(e))return eu.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Sw.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Aw.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&l.done]))[0]};return eu.set(e,s),s}ww(r=>({...r,get:(e,t,n)=>kd(e,t)||r.get(e,t,n),has:(e,t)=>!!kd(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rw(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Rw(r){return r.getComponent()?.type==="VERSION"}const Cu="@firebase/app",Dd="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new ml("@firebase/app"),Pw="@firebase/app-compat",Cw="@firebase/analytics-compat",kw="@firebase/analytics",Dw="@firebase/app-check-compat",Ow="@firebase/app-check",xw="@firebase/auth",Nw="@firebase/auth-compat",Vw="@firebase/database",Mw="@firebase/data-connect",Lw="@firebase/database-compat",Fw="@firebase/functions",Uw="@firebase/functions-compat",Bw="@firebase/installations",zw="@firebase/installations-compat",qw="@firebase/messaging",$w="@firebase/messaging-compat",jw="@firebase/performance",Hw="@firebase/performance-compat",Ww="@firebase/remote-config",Gw="@firebase/remote-config-compat",Kw="@firebase/storage",Yw="@firebase/storage-compat",Xw="@firebase/firestore",Qw="@firebase/ai",Jw="@firebase/firestore-compat",Zw="firebase",eE="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="[DEFAULT]",tE={[Cu]:"fire-core",[Pw]:"fire-core-compat",[kw]:"fire-analytics",[Cw]:"fire-analytics-compat",[Ow]:"fire-app-check",[Dw]:"fire-app-check-compat",[xw]:"fire-auth",[Nw]:"fire-auth-compat",[Vw]:"fire-rtdb",[Mw]:"fire-data-connect",[Lw]:"fire-rtdb-compat",[Fw]:"fire-fn",[Uw]:"fire-fn-compat",[Bw]:"fire-iid",[zw]:"fire-iid-compat",[qw]:"fire-fcm",[$w]:"fire-fcm-compat",[jw]:"fire-perf",[Hw]:"fire-perf-compat",[Ww]:"fire-rc",[Gw]:"fire-rc-compat",[Kw]:"fire-gcs",[Yw]:"fire-gcs-compat",[Xw]:"fire-fst",[Jw]:"fire-fst-compat",[Qw]:"fire-vertex","fire-js":"fire-js",[Zw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Map,nE=new Map,Du=new Map;function Od(r,e){try{r.container.addComponent(e)}catch(t){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Or(r){const e=r.name;if(Du.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;Du.set(e,r);for(const t of Lc.values())Od(t,r);for(const t of nE.values())Od(t,r);return!0}function vs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function or(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new Ts("app","Firebase",rE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=eE;function lm(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:ku,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw yi.create("bad-app-name",{appName:String(i)});if(t||(t=Zg()),!t)throw yi.create("no-options");const s=Lc.get(i);if(s){if(Si(t,s.options)&&Si(n,s.config))return s;throw yi.create("duplicate-app",{appName:i})}const o=new hw(i);for(const l of Du.values())o.addComponent(l);const a=new iE(t,n,o);return Lc.set(i,a),a}function Ah(r=ku){const e=Lc.get(r);if(!e&&r===ku&&Zg())return lm();if(!e)throw yi.create("no-app",{appName:r});return e}function Yn(r,e,t){let n=tE[r]??r;t&&(n+=`-${t}`);const i=n.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${n}" with version "${e}":`];i&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(o.join(" "));return}Or(new ur(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebase-heartbeat-database",oE=1,ga="firebase-heartbeat-store";let tu=null;function um(){return tu||(tu=cm(sE,oE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ga)}catch(t){console.warn(t)}}}}).catch(r=>{throw yi.create("idb-open",{originalErrorMessage:r.message})})),tu}async function aE(r){try{const t=(await um()).transaction(ga),n=await t.objectStore(ga).get(hm(r));return await t.done,n}catch(e){if(e instanceof dr)Hr.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e?.message});Hr.warn(t.message)}}}async function xd(r,e){try{const n=(await um()).transaction(ga,"readwrite");await n.objectStore(ga).put(e,hm(r)),await n.done}catch(t){if(t instanceof dr)Hr.warn(t.message);else{const n=yi.create("idb-set",{originalErrorMessage:t?.message});Hr.warn(n.message)}}}function hm(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=1024,lE=30;class uE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fE(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Nd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>lE){const i=dE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Hr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nd(),{heartbeatsToSend:t,unsentEntries:n}=hE(this._heartbeatsCache.heartbeats),i=Mc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Hr.warn(e),""}}}function Nd(){return new Date().toISOString().substring(0,10)}function hE(r,e=cE){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Vd(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class fE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return im()?sm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return xd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return xd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Vd(r){return Mc(JSON.stringify({version:2,heartbeats:r})).length}function dE(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(r){Or(new ur("platform-logger",e=>new bw(e),"PRIVATE")),Or(new ur("heartbeat",e=>new uE(e),"PRIVATE")),Yn(Cu,Dd,r),Yn(Cu,Dd,"esm2020"),Yn("fire-js","")}pE("");var gE="firebase",mE="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(gE,mE,"app");var Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ti,fm;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function _(){}_.prototype=y.prototype,v.F=y.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(E,b,R){for(var A=Array(arguments.length-2),G=2;G<arguments.length;G++)A[G-2]=arguments[G];return y.prototype[b].apply(E,A)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,_){_||(_=0);const E=Array(16);if(typeof y=="string")for(var b=0;b<16;++b)E[b]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(b=0;b<16;++b)E[b]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=v.g[0],_=v.g[1],b=v.g[2];let R=v.g[3],A;A=y+(R^_&(b^R))+E[0]+3614090360&4294967295,y=_+(A<<7&4294967295|A>>>25),A=R+(b^y&(_^b))+E[1]+3905402710&4294967295,R=y+(A<<12&4294967295|A>>>20),A=b+(_^R&(y^_))+E[2]+606105819&4294967295,b=R+(A<<17&4294967295|A>>>15),A=_+(y^b&(R^y))+E[3]+3250441966&4294967295,_=b+(A<<22&4294967295|A>>>10),A=y+(R^_&(b^R))+E[4]+4118548399&4294967295,y=_+(A<<7&4294967295|A>>>25),A=R+(b^y&(_^b))+E[5]+1200080426&4294967295,R=y+(A<<12&4294967295|A>>>20),A=b+(_^R&(y^_))+E[6]+2821735955&4294967295,b=R+(A<<17&4294967295|A>>>15),A=_+(y^b&(R^y))+E[7]+4249261313&4294967295,_=b+(A<<22&4294967295|A>>>10),A=y+(R^_&(b^R))+E[8]+1770035416&4294967295,y=_+(A<<7&4294967295|A>>>25),A=R+(b^y&(_^b))+E[9]+2336552879&4294967295,R=y+(A<<12&4294967295|A>>>20),A=b+(_^R&(y^_))+E[10]+4294925233&4294967295,b=R+(A<<17&4294967295|A>>>15),A=_+(y^b&(R^y))+E[11]+2304563134&4294967295,_=b+(A<<22&4294967295|A>>>10),A=y+(R^_&(b^R))+E[12]+1804603682&4294967295,y=_+(A<<7&4294967295|A>>>25),A=R+(b^y&(_^b))+E[13]+4254626195&4294967295,R=y+(A<<12&4294967295|A>>>20),A=b+(_^R&(y^_))+E[14]+2792965006&4294967295,b=R+(A<<17&4294967295|A>>>15),A=_+(y^b&(R^y))+E[15]+1236535329&4294967295,_=b+(A<<22&4294967295|A>>>10),A=y+(b^R&(_^b))+E[1]+4129170786&4294967295,y=_+(A<<5&4294967295|A>>>27),A=R+(_^b&(y^_))+E[6]+3225465664&4294967295,R=y+(A<<9&4294967295|A>>>23),A=b+(y^_&(R^y))+E[11]+643717713&4294967295,b=R+(A<<14&4294967295|A>>>18),A=_+(R^y&(b^R))+E[0]+3921069994&4294967295,_=b+(A<<20&4294967295|A>>>12),A=y+(b^R&(_^b))+E[5]+3593408605&4294967295,y=_+(A<<5&4294967295|A>>>27),A=R+(_^b&(y^_))+E[10]+38016083&4294967295,R=y+(A<<9&4294967295|A>>>23),A=b+(y^_&(R^y))+E[15]+3634488961&4294967295,b=R+(A<<14&4294967295|A>>>18),A=_+(R^y&(b^R))+E[4]+3889429448&4294967295,_=b+(A<<20&4294967295|A>>>12),A=y+(b^R&(_^b))+E[9]+568446438&4294967295,y=_+(A<<5&4294967295|A>>>27),A=R+(_^b&(y^_))+E[14]+3275163606&4294967295,R=y+(A<<9&4294967295|A>>>23),A=b+(y^_&(R^y))+E[3]+4107603335&4294967295,b=R+(A<<14&4294967295|A>>>18),A=_+(R^y&(b^R))+E[8]+1163531501&4294967295,_=b+(A<<20&4294967295|A>>>12),A=y+(b^R&(_^b))+E[13]+2850285829&4294967295,y=_+(A<<5&4294967295|A>>>27),A=R+(_^b&(y^_))+E[2]+4243563512&4294967295,R=y+(A<<9&4294967295|A>>>23),A=b+(y^_&(R^y))+E[7]+1735328473&4294967295,b=R+(A<<14&4294967295|A>>>18),A=_+(R^y&(b^R))+E[12]+2368359562&4294967295,_=b+(A<<20&4294967295|A>>>12),A=y+(_^b^R)+E[5]+4294588738&4294967295,y=_+(A<<4&4294967295|A>>>28),A=R+(y^_^b)+E[8]+2272392833&4294967295,R=y+(A<<11&4294967295|A>>>21),A=b+(R^y^_)+E[11]+1839030562&4294967295,b=R+(A<<16&4294967295|A>>>16),A=_+(b^R^y)+E[14]+4259657740&4294967295,_=b+(A<<23&4294967295|A>>>9),A=y+(_^b^R)+E[1]+2763975236&4294967295,y=_+(A<<4&4294967295|A>>>28),A=R+(y^_^b)+E[4]+1272893353&4294967295,R=y+(A<<11&4294967295|A>>>21),A=b+(R^y^_)+E[7]+4139469664&4294967295,b=R+(A<<16&4294967295|A>>>16),A=_+(b^R^y)+E[10]+3200236656&4294967295,_=b+(A<<23&4294967295|A>>>9),A=y+(_^b^R)+E[13]+681279174&4294967295,y=_+(A<<4&4294967295|A>>>28),A=R+(y^_^b)+E[0]+3936430074&4294967295,R=y+(A<<11&4294967295|A>>>21),A=b+(R^y^_)+E[3]+3572445317&4294967295,b=R+(A<<16&4294967295|A>>>16),A=_+(b^R^y)+E[6]+76029189&4294967295,_=b+(A<<23&4294967295|A>>>9),A=y+(_^b^R)+E[9]+3654602809&4294967295,y=_+(A<<4&4294967295|A>>>28),A=R+(y^_^b)+E[12]+3873151461&4294967295,R=y+(A<<11&4294967295|A>>>21),A=b+(R^y^_)+E[15]+530742520&4294967295,b=R+(A<<16&4294967295|A>>>16),A=_+(b^R^y)+E[2]+3299628645&4294967295,_=b+(A<<23&4294967295|A>>>9),A=y+(b^(_|~R))+E[0]+4096336452&4294967295,y=_+(A<<6&4294967295|A>>>26),A=R+(_^(y|~b))+E[7]+1126891415&4294967295,R=y+(A<<10&4294967295|A>>>22),A=b+(y^(R|~_))+E[14]+2878612391&4294967295,b=R+(A<<15&4294967295|A>>>17),A=_+(R^(b|~y))+E[5]+4237533241&4294967295,_=b+(A<<21&4294967295|A>>>11),A=y+(b^(_|~R))+E[12]+1700485571&4294967295,y=_+(A<<6&4294967295|A>>>26),A=R+(_^(y|~b))+E[3]+2399980690&4294967295,R=y+(A<<10&4294967295|A>>>22),A=b+(y^(R|~_))+E[10]+4293915773&4294967295,b=R+(A<<15&4294967295|A>>>17),A=_+(R^(b|~y))+E[1]+2240044497&4294967295,_=b+(A<<21&4294967295|A>>>11),A=y+(b^(_|~R))+E[8]+1873313359&4294967295,y=_+(A<<6&4294967295|A>>>26),A=R+(_^(y|~b))+E[15]+4264355552&4294967295,R=y+(A<<10&4294967295|A>>>22),A=b+(y^(R|~_))+E[6]+2734768916&4294967295,b=R+(A<<15&4294967295|A>>>17),A=_+(R^(b|~y))+E[13]+1309151649&4294967295,_=b+(A<<21&4294967295|A>>>11),A=y+(b^(_|~R))+E[4]+4149444226&4294967295,y=_+(A<<6&4294967295|A>>>26),A=R+(_^(y|~b))+E[11]+3174756917&4294967295,R=y+(A<<10&4294967295|A>>>22),A=b+(y^(R|~_))+E[2]+718787259&4294967295,b=R+(A<<15&4294967295|A>>>17),A=_+(R^(b|~y))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(b+(A<<21&4294967295|A>>>11))&4294967295,v.g[2]=v.g[2]+b&4294967295,v.g[3]=v.g[3]+R&4294967295}n.prototype.v=function(v,y){y===void 0&&(y=v.length);const _=y-this.blockSize,E=this.C;let b=this.h,R=0;for(;R<y;){if(b==0)for(;R<=_;)i(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<y;)if(E[b++]=v.charCodeAt(R++),b==this.blockSize){i(this,E),b=0;break}}else for(;R<y;)if(E[b++]=v[R++],b==this.blockSize){i(this,E),b=0;break}}this.h=b,this.o+=y},n.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,_=0;_<4;++_)for(let E=0;E<32;E+=8)v[y++]=this.g[_]>>>E&255;return v};function s(v,y){var _=a;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=y(v)}function o(v,y){this.h=y;const _=[];let E=!0;for(let b=v.length-1;b>=0;b--){const R=v[b]|0;E&&R==y||(_[b]=R,E=!1)}this.g=_}var a={};function l(v){return-128<=v&&v<128?s(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return S(u(-v));const y=[];let _=1;for(let E=0;v>=_;E++)y[E]=v/_|0,_*=4294967296;return new o(y,0)}function h(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return S(h(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(y,8));let E=p;for(let R=0;R<v.length;R+=8){var b=Math.min(8,v.length-R);const A=parseInt(v.substring(R,R+b),y);b<8?(b=u(Math.pow(y,b)),E=E.j(b).add(u(A))):(E=E.j(_),E=E.add(u(A)))}return E}var p=l(0),g=l(1),m=l(16777216);r=o.prototype,r.m=function(){if(w(this))return-S(this).m();let v=0,y=1;for(let _=0;_<this.g.length;_++){const E=this.i(_);v+=(E>=0?E:4294967296+E)*y,y*=4294967296}return v},r.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I(this))return"0";if(w(this))return"-"+S(this).toString(v);const y=u(Math.pow(v,6));var _=this;let E="";for(;;){const b=O(_,y).g;_=D(_,b.j(y));let R=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=b,I(_))return R+E;for(;R.length<6;)R="0"+R;E=R+E}},r.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function I(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function w(v){return v.h==-1}r.l=function(v){return v=D(this,v),w(v)?-1:I(v)?0:1};function S(v){const y=v.g.length,_=[];for(let E=0;E<y;E++)_[E]=~v.g[E];return new o(_,~v.h).add(g)}r.abs=function(){return w(this)?S(this):this},r.add=function(v){const y=Math.max(this.g.length,v.g.length),_=[];let E=0;for(let b=0;b<=y;b++){let R=E+(this.i(b)&65535)+(v.i(b)&65535),A=(R>>>16)+(this.i(b)>>>16)+(v.i(b)>>>16);E=A>>>16,R&=65535,A&=65535,_[b]=A<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function D(v,y){return v.add(S(y))}r.j=function(v){if(I(this)||I(v))return p;if(w(this))return w(v)?S(this).j(S(v)):S(S(this).j(v));if(w(v))return S(this.j(S(v)));if(this.l(m)<0&&v.l(m)<0)return u(this.m()*v.m());const y=this.g.length+v.g.length,_=[];for(var E=0;E<2*y;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(let b=0;b<v.g.length;b++){const R=this.i(E)>>>16,A=this.i(E)&65535,G=v.i(b)>>>16,re=v.i(b)&65535;_[2*E+2*b]+=A*re,k(_,2*E+2*b),_[2*E+2*b+1]+=R*re,k(_,2*E+2*b+1),_[2*E+2*b+1]+=A*G,k(_,2*E+2*b+1),_[2*E+2*b+2]+=R*G,k(_,2*E+2*b+2)}for(v=0;v<y;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=y;v<2*y;v++)_[v]=0;return new o(_,0)};function k(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function N(v,y){this.g=v,this.h=y}function O(v,y){if(I(y))throw Error("division by zero");if(I(v))return new N(p,p);if(w(v))return y=O(S(v),y),new N(S(y.g),S(y.h));if(w(y))return y=O(v,S(y)),new N(S(y.g),y.h);if(v.g.length>30){if(w(v)||w(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,E=y;E.l(v)<=0;)_=M(_),E=M(E);var b=L(_,1),R=L(E,1);for(E=L(E,2),_=L(_,2);!I(E);){var A=R.add(E);A.l(v)<=0&&(b=b.add(_),R=A),E=L(E,1),_=L(_,1)}return y=D(v,b.j(y)),new N(b,y)}for(b=p;v.l(y)>=0;){for(_=Math.max(1,Math.floor(v.m()/y.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),R=u(_),A=R.j(y);w(A)||A.l(v)>0;)_-=E,R=u(_),A=R.j(y);I(R)&&(R=g),b=b.add(R),v=D(v,A)}return new N(b,v)}r.B=function(v){return O(this,v).h},r.and=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let E=0;E<y;E++)_[E]=this.i(E)&v.i(E);return new o(_,this.h&v.h)},r.or=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let E=0;E<y;E++)_[E]=this.i(E)|v.i(E);return new o(_,this.h|v.h)},r.xor=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let E=0;E<y;E++)_[E]=this.i(E)^v.i(E);return new o(_,this.h^v.h)};function M(v){const y=v.g.length+1,_=[];for(let E=0;E<y;E++)_[E]=v.i(E)<<1|v.i(E-1)>>>31;return new o(_,v.h)}function L(v,y){const _=y>>5;y%=32;const E=v.g.length-_,b=[];for(let R=0;R<E;R++)b[R]=y>0?v.i(R+_)>>>y|v.i(R+_+1)<<32-y:v.i(R+_);return new o(b,v.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,fm=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ti=o}).apply(typeof Md<"u"?Md:typeof self<"u"?self:typeof window<"u"?window:{});var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dm,Uo,pm,_c,Ou,gm,mm,_m;(function(){var r,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ja=="object"&&Ja];for(var f=0;f<c.length;++f){var d=c[f];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(c,f){if(f)e:{var d=n;c=c.split(".");for(var T=0;T<c.length-1;T++){var C=c[T];if(!(C in d))break e;d=d[C]}c=c[c.length-1],T=d[c],f=f(T),f!=T&&f!=null&&e(d,c,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(f){var d=[],T;for(T in f)Object.prototype.hasOwnProperty.call(f,T)&&d.push([T,f[T]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function l(c,f,d){return c.call.apply(c.bind,arguments)}function u(c,f,d){return u=l,u.apply(null,arguments)}function h(c,f){var d=Array.prototype.slice.call(arguments,1);return function(){var T=d.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function p(c,f){function d(){}d.prototype=f.prototype,c.Z=f.prototype,c.prototype=new d,c.prototype.constructor=c,c.Ob=function(T,C,x){for(var B=Array(arguments.length-2),se=2;se<arguments.length;se++)B[se-2]=arguments[se];return f.prototype[C].apply(T,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function m(c){const f=c.length;if(f>0){const d=Array(f);for(let T=0;T<f;T++)d[T]=c[T];return d}return[]}function I(c,f){for(let T=1;T<arguments.length;T++){const C=arguments[T];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=c.length||0;const x=C.length||0;c.length=d+x;for(let B=0;B<x;B++)c[d+B]=C[B]}else c.push(C)}}class w{constructor(f,d){this.i=f,this.j=d,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function S(c){o.setTimeout(()=>{throw c},0)}function D(){var c=v;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class k{constructor(){this.h=this.g=null}add(f,d){const T=N.get();T.set(f,d),this.h?this.h.next=T:this.g=T,this.h=T}}var N=new w(()=>new O,c=>c.reset());class O{constructor(){this.next=this.g=this.h=null}set(f,d){this.h=f,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,L=!1,v=new k,y=()=>{const c=Promise.resolve(void 0);M=()=>{c.then(_)}};function _(){for(var c;c=D();){try{c.h.call(c.g)}catch(d){S(d)}var f=N;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}L=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const d=()=>{};o.addEventListener("test",d,f),o.removeEventListener("test",d,f)}catch{}return c}();function A(c){return/^[\s\xa0]*$/.test(c)}function G(c,f){b.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}p(G,b),G.prototype.init=function(c,f){const d=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(d=="mouseover"?f=c.fromElement:d=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&G.Z.h.call(this)},G.prototype.h=function(){G.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),ae=0;function J(c,f,d,T,C){this.listener=c,this.proxy=null,this.src=f,this.type=d,this.capture=!!T,this.ha=C,this.key=++ae,this.da=this.fa=!1}function ue(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function we(c,f,d){for(const T in c)f.call(d,c[T],T,c)}function P(c,f){for(const d in c)f.call(void 0,c[d],d,c)}function Se(c){const f={};for(const d in c)f[d]=c[d];return f}const At="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function on(c,f){let d,T;for(let C=1;C<arguments.length;C++){T=arguments[C];for(d in T)c[d]=T[d];for(let x=0;x<At.length;x++)d=At[x],Object.prototype.hasOwnProperty.call(T,d)&&(c[d]=T[d])}}function Re(c){this.src=c,this.g={},this.h=0}Re.prototype.add=function(c,f,d,T,C){const x=c.toString();c=this.g[x],c||(c=this.g[x]=[],this.h++);const B=at(c,f,T,C);return B>-1?(f=c[B],d||(f.fa=!1)):(f=new J(f,this.src,x,!!T,C),f.fa=d,c.push(f)),f};function tt(c,f){const d=f.type;if(d in c.g){var T=c.g[d],C=Array.prototype.indexOf.call(T,f,void 0),x;(x=C>=0)&&Array.prototype.splice.call(T,C,1),x&&(ue(f),c.g[d].length==0&&(delete c.g[d],c.h--))}}function at(c,f,d,T){for(let C=0;C<c.length;++C){const x=c[C];if(!x.da&&x.listener==f&&x.capture==!!d&&x.ha==T)return C}return-1}var Be="closure_lm_"+(Math.random()*1e6|0),mt={};function _t(c,f,d,T,C){if(Array.isArray(f)){for(let x=0;x<f.length;x++)_t(c,f[x],d,T,C);return null}return d=Ut(d),c&&c[re]?c.J(f,d,a(T)?!!T.capture:!1,C):pr(c,f,d,!1,T,C)}function pr(c,f,d,T,C,x){if(!f)throw Error("Invalid event type");const B=a(C)?!!C.capture:!!C;let se=Ot(c);if(se||(c[Be]=se=new Re(c)),d=se.add(f,d,T,B,x),d.proxy)return d;if(T=Dt(),d.proxy=T,T.src=c,T.listener=d,c.addEventListener)R||(C=B),C===void 0&&(C=!1),c.addEventListener(f.toString(),T,C);else if(c.attachEvent)c.attachEvent(ze(f.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Dt(){function c(d){return f.call(c.src,c.listener,d)}const f=Ft;return c}function St(c,f,d,T,C){if(Array.isArray(f))for(var x=0;x<f.length;x++)St(c,f[x],d,T,C);else T=a(T)?!!T.capture:!!T,d=Ut(d),c&&c[re]?(c=c.i,x=String(f).toString(),x in c.g&&(f=c.g[x],d=at(f,d,T,C),d>-1&&(ue(f[d]),Array.prototype.splice.call(f,d,1),f.length==0&&(delete c.g[x],c.h--)))):c&&(c=Ot(c))&&(f=c.g[f.toString()],c=-1,f&&(c=at(f,d,T,C)),(d=c>-1?f[c]:null)&&he(d))}function he(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[re])tt(f.i,c);else{var d=c.type,T=c.proxy;f.removeEventListener?f.removeEventListener(d,T,c.capture):f.detachEvent?f.detachEvent(ze(d),T):f.addListener&&f.removeListener&&f.removeListener(T),(d=Ot(f))?(tt(d,c),d.h==0&&(d.src=null,f[Be]=null)):ue(c)}}}function ze(c){return c in mt?mt[c]:mt[c]="on"+c}function Ft(c,f){if(c.da)c=!0;else{f=new G(f,this);const d=c.listener,T=c.ha||c.src;c.fa&&he(c),c=d.call(T,f)}return c}function Ot(c){return c=c[Be],c instanceof Re?c:null}var V="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ut(c){return typeof c=="function"?c:(c[V]||(c[V]=function(f){return c.handleEvent(f)}),c[V])}function xe(){E.call(this),this.i=new Re(this),this.M=this,this.G=null}p(xe,E),xe.prototype[re]=!0,xe.prototype.removeEventListener=function(c,f,d,T){St(this,c,f,d,T)};function qe(c,f){var d,T=c.G;if(T)for(d=[];T;T=T.G)d.push(T);if(c=c.M,T=f.type||f,typeof f=="string")f=new b(f,c);else if(f instanceof b)f.target=f.target||c;else{var C=f;f=new b(T,c),on(f,C)}C=!0;let x,B;if(d)for(B=d.length-1;B>=0;B--)x=f.g=d[B],C=Pe(x,T,!0,f)&&C;if(x=f.g=c,C=Pe(x,T,!0,f)&&C,C=Pe(x,T,!1,f)&&C,d)for(B=0;B<d.length;B++)x=f.g=d[B],C=Pe(x,T,!1,f)&&C}xe.prototype.N=function(){if(xe.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const d=c.g[f];for(let T=0;T<d.length;T++)ue(d[T]);delete c.g[f],c.h--}}this.G=null},xe.prototype.J=function(c,f,d,T){return this.i.add(String(c),f,!1,d,T)},xe.prototype.K=function(c,f,d,T){return this.i.add(String(c),f,!0,d,T)};function Pe(c,f,d,T){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let C=!0;for(let x=0;x<f.length;++x){const B=f[x];if(B&&!B.da&&B.capture==d){const se=B.listener,Tt=B.ha||B.src;B.fa&&tt(c.i,B),C=se.call(Tt,T)!==!1&&C}}return C&&!T.defaultPrevented}function Jn(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(c,f||0)}function Zn(c){c.g=Jn(()=>{c.g=null,c.i&&(c.i=!1,Zn(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class Vr extends E{constructor(f,d){super(),this.m=f,this.l=d,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Zn(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(c){E.call(this),this.h=c,this.g={}}p($e,E);var er=[];function je(c){we(c.g,function(f,d){this.g.hasOwnProperty(d)&&he(f)},c),c.g={}}$e.prototype.N=function(){$e.Z.N.call(this),je(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xt=o.JSON.stringify,an=o.JSON.parse,tr=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Qr(){}function Ge(){}var gr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vn(){b.call(this,"d")}p(vn,b);function mr(){b.call(this,"c")}p(mr,b);var cn={},nr=null;function Fn(){return nr=nr||new xe}cn.Ia="serverreachability";function ie(c){b.call(this,cn.Ia,c)}p(ie,b);function wn(c){const f=Fn();qe(f,new ie(f))}cn.STAT_EVENT="statevent";function ln(c,f){b.call(this,cn.STAT_EVENT,c),this.stat=f}p(ln,b);function Ce(c){const f=Fn();qe(f,new ln(f,c))}cn.Ja="timingevent";function un(c,f){b.call(this,cn.Ja,c),this.size=f}p(un,b);function En(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},f)}function Un(){this.g=!0}Un.prototype.ua=function(){this.g=!1};function rr(c,f,d,T,C,x){c.info(function(){if(c.g)if(x){var B="",se=x.split("&");for(let ke=0;ke<se.length;ke++){var Tt=se[ke].split("=");if(Tt.length>1){const bt=Tt[0];Tt=Tt[1];const yr=bt.split("_");B=yr.length>=2&&yr[1]=="type"?B+(bt+"="+Tt+"&"):B+(bt+"=redacted&")}}}else B=null;else B=x;return"XMLHTTP REQ ("+T+") [attempt "+C+"]: "+f+`
`+d+`
`+B})}function Bi(c,f,d,T,C,x,B){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+C+"]: "+f+`
`+d+`
`+x+" "+B})}function Y(c,f,d,T){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+Te(c,d)+(T?" "+T:"")})}function K(c,f){c.info(function(){return"TIMEOUT: "+f})}Un.prototype.info=function(){};function Te(c,f){if(!c.g)return f;if(!f)return null;try{const x=JSON.parse(f);if(x){for(c=0;c<x.length;c++)if(Array.isArray(x[c])){var d=x[c];if(!(d.length<2)){var T=d[1];if(Array.isArray(T)&&!(T.length<1)){var C=T[0];if(C!="noop"&&C!="stop"&&C!="close")for(let B=1;B<T.length;B++)T[B]=""}}}}return Xt(x)}catch{return f}}var z={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ee={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},H;function Z(){}p(Z,Qr),Z.prototype.g=function(){return new XMLHttpRequest},H=new Z;function He(c){return encodeURIComponent(String(c))}function fe(c){var f=1;c=c.split(":");const d=[];for(;f>0&&c.length;)d.push(c.shift()),f--;return c.length&&d.push(c.join(":")),d}function Ee(c,f,d,T){this.j=c,this.i=f,this.l=d,this.S=T||1,this.V=new $e(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var Me={},be={};function ve(c,f,d){c.M=1,c.A=ja(_r(f)),c.u=d,c.R=!0,hn(c,null)}function hn(c,f){c.F=Date.now(),Je(c),c.B=_r(c.A);var d=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),nd(d.i,"t",T),c.C=0,d=c.j.L,c.h=new yt,c.g=vd(c.j,d?f:null,!c.u),c.P>0&&(c.O=new Vr(u(c.Y,c,c.g),c.P)),f=c.V,d=c.g,T=c.ba;var C="readystatechange";Array.isArray(C)||(C&&(er[0]=C.toString()),C=er);for(let x=0;x<C.length;x++){const B=_t(d,C[x],T||f.handleEvent,!1,f.h||f);if(!B)break;f.g[B.key]=B}f=c.J?Se(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),wn(),rr(c.i,c.v,c.B,c.l,c.S,c.u)}Ee.prototype.ba=function(c){c=c.target;const f=this.O;f&&ti(c)==3?f.j():this.Y(c)},Ee.prototype.Y=function(c){try{if(c==this.g)e:{const se=ti(this.g),Tt=this.g.ya(),ke=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||ld(this.g)))){this.K||se!=4||Tt==7||(Tt==8||ke<=0?wn(3):wn(2)),lt(this);var f=this.g.ca();this.X=f;var d=Le(this);if(this.o=f==200,Bi(this.i,this.v,this.B,this.l,this.S,se,f),this.o){if(this.U&&!this.L){t:{if(this.g){var T,C=this.g;if((T=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(T)){var x=T;break t}}x=null}if(c=x)Y(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ut(this,c);else{this.o=!1,this.m=3,Ce(12),zn(this),In(this);break e}}if(this.R){c=!0;let bt;for(;!this.K&&this.C<d.length;)if(bt=Bn(this,d),bt==be){se==4&&(this.m=4,Ce(14),c=!1),Y(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Me){this.m=4,Ce(15),Y(this.i,this.l,d,"[Invalid Chunk]"),c=!1;break}else Y(this.i,this.l,bt,null),ut(this,bt);if(Bt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||d.length!=0||this.h.h||(this.m=1,Ce(16),c=!1),this.o=this.o&&c,!c)Y(this.i,this.l,d,"[Invalid Chunked Response]"),zn(this),In(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Yl(B),B.P=!0,Ce(11))}}else Y(this.i,this.l,d,null),ut(this,d);se==4&&zn(this),this.o&&!this.K&&(se==4?md(this.j,this):(this.o=!1,Je(this)))}else Cv(this.g),f==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),zn(this),In(this)}}}catch{}finally{}};function Le(c){if(!Bt(c))return c.g.la();const f=ld(c.g);if(f==="")return"";let d="";const T=f.length,C=ti(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return zn(c),In(c),"";c.h.i=new o.TextDecoder}for(let x=0;x<T;x++)c.h.h=!0,d+=c.h.i.decode(f[x],{stream:!(C&&x==T-1)});return f.length=0,c.h.g+=d,c.C=0,c.h.g}function Bt(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Bn(c,f){var d=c.C,T=f.indexOf(`
`,d);return T==-1?be:(d=Number(f.substring(d,T)),isNaN(d)?Me:(T+=1,T+d>f.length?be:(f=f.slice(T,T+d),c.C=T+d,f)))}Ee.prototype.cancel=function(){this.K=!0,zn(this)};function Je(c){c.T=Date.now()+c.H,ct(c,c.H)}function ct(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=En(u(c.aa,c),f)}function lt(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Ee.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(K(this.i,this.B),this.M!=2&&(wn(),Ce(17)),zn(this),this.m=2,In(this)):ct(this,this.T-c)};function In(c){c.j.I==0||c.K||md(c.j,c)}function zn(c){lt(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,je(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function ut(c,f){try{var d=c.j;if(d.I!=0&&(d.g==c||Mr(d.h,c))){if(!c.L&&Mr(d.h,c)&&d.I==3){try{var T=d.Ba.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var C=T;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<c.F)Ya(d),Ga(d);else break e;Kl(d),Ce(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=En(u(d.Va,d),6e3));Ao(d.h)<=1&&d.ta&&(d.ta=void 0)}else $i(d,11)}else if((c.L||d.g==c)&&Ya(d),!A(f))for(C=d.Ba.g.parse(f),f=0;f<C.length;f++){let ke=C[f];const bt=ke[0];if(!(bt<=d.K))if(d.K=bt,ke=ke[1],d.I==2)if(ke[0]=="c"){d.M=ke[1],d.ba=ke[2];const yr=ke[3];yr!=null&&(d.ka=yr,d.j.info("VER="+d.ka));const ji=ke[4];ji!=null&&(d.za=ji,d.j.info("SVER="+d.za));const ni=ke[5];ni!=null&&typeof ni=="number"&&ni>0&&(T=1.5*ni,d.O=T,d.j.info("backChannelRequestTimeoutMs_="+T)),T=d;const ri=c.g;if(ri){const Qa=ri.g?ri.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qa){var x=T.h;x.g||Qa.indexOf("spdy")==-1&&Qa.indexOf("quic")==-1&&Qa.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(fn(x,x.h),x.h=null))}if(T.G){const Xl=ri.g?ri.g.getResponseHeader("X-HTTP-Session-Id"):null;Xl&&(T.wa=Xl,Fe(T.J,T.G,Xl))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-c.F,d.j.info("Handshake RTT: "+d.T+"ms")),T=d;var B=c;if(T.na=Td(T,T.L?T.ba:null,T.W),B.L){Jr(T.h,B);var se=B,Tt=T.O;Tt&&(se.H=Tt),se.D&&(lt(se),Je(se)),T.g=B}else pd(T);d.i.length>0&&Ka(d)}else ke[0]!="stop"&&ke[0]!="close"||$i(d,7);else d.I==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?$i(d,7):Gl(d):ke[0]!="noop"&&d.l&&d.l.qa(ke),d.A=0)}}wn(4)}catch{}}var nt=class{constructor(c,f){this.g=c,this.map=f}};function An(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Rs(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ao(c){return c.h?1:c.g?c.g.size:0}function Mr(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function fn(c,f){c.g?c.g.add(f):c.h=f}function Jr(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}An.prototype.cancel=function(){if(this.i=zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function zi(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const d of c.g.values())f=f.concat(d.G);return f}return m(c.i)}var ir=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _v(c,f){if(c){c=c.split("&");for(let d=0;d<c.length;d++){const T=c[d].indexOf("=");let C,x=null;T>=0?(C=c[d].substring(0,T),x=c[d].substring(T+1)):C=c[d],f(C,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Zr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof Zr?(this.l=c.l,So(this,c.j),this.o=c.o,this.g=c.g,bo(this,c.u),this.h=c.h,jl(this,rd(c.i)),this.m=c.m):c&&(f=String(c).match(ir))?(this.l=!1,So(this,f[1]||"",!0),this.o=Ro(f[2]||""),this.g=Ro(f[3]||"",!0),bo(this,f[4]),this.h=Ro(f[5]||"",!0),jl(this,f[6]||"",!0),this.m=Ro(f[7]||"")):(this.l=!1,this.i=new Co(null,this.l))}Zr.prototype.toString=function(){const c=[];var f=this.j;f&&c.push(Po(f,Jf,!0),":");var d=this.g;return(d||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Po(f,Jf,!0),"@"),c.push(He(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&c.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&c.push("/"),c.push(Po(d,d.charAt(0)=="/"?vv:Tv,!0))),(d=this.i.toString())&&c.push("?",d),(d=this.m)&&c.push("#",Po(d,Ev)),c.join("")},Zr.prototype.resolve=function(c){const f=_r(this);let d=!!c.j;d?So(f,c.j):d=!!c.o,d?f.o=c.o:d=!!c.g,d?f.g=c.g:d=c.u!=null;var T=c.h;if(d)bo(f,c.u);else if(d=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var C=f.h.lastIndexOf("/");C!=-1&&(T=f.h.slice(0,C+1)+T)}if(C=T,C==".."||C==".")T="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){T=C.lastIndexOf("/",0)==0,C=C.split("/");const x=[];for(let B=0;B<C.length;){const se=C[B++];se=="."?T&&B==C.length&&x.push(""):se==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),T&&B==C.length&&x.push("")):(x.push(se),T=!0)}T=x.join("/")}else T=C}return d?f.h=T:d=c.i.toString()!=="",d?jl(f,rd(c.i)):d=!!c.m,d&&(f.m=c.m),f};function _r(c){return new Zr(c)}function So(c,f,d){c.j=d?Ro(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function bo(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function jl(c,f,d){f instanceof Co?(c.i=f,Iv(c.i,c.l)):(d||(f=Po(f,wv)),c.i=new Co(f,c.l))}function Fe(c,f,d){c.i.set(f,d)}function ja(c){return Fe(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ro(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Po(c,f,d){return typeof c=="string"?(c=encodeURI(c).replace(f,yv),d&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yv(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Jf=/[#\/\?@]/g,Tv=/[#\?:]/g,vv=/[#\?]/g,wv=/[#\?@]/g,Ev=/#/g;function Co(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function qi(c){c.g||(c.g=new Map,c.h=0,c.i&&_v(c.i,function(f,d){c.add(decodeURIComponent(f.replace(/\+/g," ")),d)}))}r=Co.prototype,r.add=function(c,f){qi(this),this.i=null,c=Ps(this,c);let d=this.g.get(c);return d||this.g.set(c,d=[]),d.push(f),this.h+=1,this};function Zf(c,f){qi(c),f=Ps(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function ed(c,f){return qi(c),f=Ps(c,f),c.g.has(f)}r.forEach=function(c,f){qi(this),this.g.forEach(function(d,T){d.forEach(function(C){c.call(f,C,T,this)},this)},this)};function td(c,f){qi(c);let d=[];if(typeof f=="string")ed(c,f)&&(d=d.concat(c.g.get(Ps(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)d=d.concat(c[f]);return d}r.set=function(c,f){return qi(this),this.i=null,c=Ps(this,c),ed(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},r.get=function(c,f){return c?(c=td(this,c),c.length>0?String(c[0]):f):f};function nd(c,f,d){Zf(c,f),d.length>0&&(c.i=null,c.g.set(Ps(c,f),m(d)),c.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let T=0;T<f.length;T++){var d=f[T];const C=He(d);d=td(this,d);for(let x=0;x<d.length;x++){let B=C;d[x]!==""&&(B+="="+He(d[x])),c.push(B)}}return this.i=c.join("&")};function rd(c){const f=new Co;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function Ps(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function Iv(c,f){f&&!c.j&&(qi(c),c.i=null,c.g.forEach(function(d,T){const C=T.toLowerCase();T!=C&&(Zf(this,T),nd(this,C,d))},c)),c.j=f}function Av(c,f){const d=new Un;if(o.Image){const T=new Image;T.onload=h(ei,d,"TestLoadImage: loaded",!0,f,T),T.onerror=h(ei,d,"TestLoadImage: error",!1,f,T),T.onabort=h(ei,d,"TestLoadImage: abort",!1,f,T),T.ontimeout=h(ei,d,"TestLoadImage: timeout",!1,f,T),o.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else f(!1)}function Sv(c,f){const d=new Un,T=new AbortController,C=setTimeout(()=>{T.abort(),ei(d,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:T.signal}).then(x=>{clearTimeout(C),x.ok?ei(d,"TestPingServer: ok",!0,f):ei(d,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(C),ei(d,"TestPingServer: error",!1,f)})}function ei(c,f,d,T,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),T(d)}catch{}}function bv(){this.g=new tr}function Hl(c){this.i=c.Sb||null,this.h=c.ab||!1}p(Hl,Qr),Hl.prototype.g=function(){return new Ha(this.i,this.h)};function Ha(c,f){xe.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ha,xe),r=Ha.prototype,r.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,Do(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ko(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;id(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function id(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?ko(this):Do(this),this.readyState==3&&id(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,ko(this))},r.Na=function(c){this.g&&(this.response=c,ko(this))},r.ga=function(){this.g&&ko(this)};function ko(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Do(c)}r.setRequestHeader=function(c,f){this.A.append(c,f)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var d=f.next();!d.done;)d=d.value,c.push(d[0]+": "+d[1]),d=f.next();return c.join(`\r
`)};function Do(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function sd(c){let f="";return we(c,function(d,T){f+=T,f+=":",f+=d,f+=`\r
`}),f}function Wl(c,f,d){e:{for(T in d){var T=!1;break e}T=!0}T||(d=sd(d),typeof c=="string"?d!=null&&He(d):Fe(c,f,d))}function Ze(c){xe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ze,xe);var Rv=/^https?$/i,Pv=["POST","PUT"];r=Ze.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,f,d,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():H.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(x){od(this,x);return}if(c=d||"",d=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var C in T)d.set(C,T[C]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const x of T.keys())d.set(x,T.get(x));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),C=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(Pv,f,void 0)>=0)||T||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,B]of d)this.g.setRequestHeader(x,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(x){od(this,x)}};function od(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,ad(c),Wa(c)}function ad(c){c.A||(c.A=!0,qe(c,"complete"),qe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,qe(this,"complete"),qe(this,"abort"),Wa(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wa(this,!0)),Ze.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?cd(this):this.Xa())},r.Xa=function(){cd(this)};function cd(c){if(c.h&&typeof s<"u"){if(c.v&&ti(c)==4)setTimeout(c.Ca.bind(c),0);else if(qe(c,"readystatechange"),ti(c)==4){c.h=!1;try{const x=c.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var d;if(!(d=f)){var T;if(T=x===0){let B=String(c.D).match(ir)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),T=!Rv.test(B?B.toLowerCase():"")}d=T}if(d)qe(c,"complete"),qe(c,"success");else{c.o=6;try{var C=ti(c)>2?c.g.statusText:""}catch{C=""}c.l=C+" ["+c.ca()+"]",ad(c)}}finally{Wa(c)}}}}function Wa(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const d=c.g;c.g=null,f||qe(c,"ready");try{d.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function ti(c){return c.g?c.g.readyState:0}r.ca=function(){try{return ti(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),an(f)}};function ld(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Cv(c){const f={};c=(c.g&&ti(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(A(c[T]))continue;var d=fe(c[T]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=f[C]||[];f[C]=x,x.push(d)}P(f,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oo(c,f,d){return d&&d.internalChannelParams&&d.internalChannelParams[c]||f}function ud(c){this.za=0,this.i=[],this.j=new Un,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Oo("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Oo("baseRetryDelayMs",5e3,c),this.Za=Oo("retryDelaySeedMs",1e4,c),this.Ta=Oo("forwardChannelMaxRetries",2,c),this.va=Oo("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new An(c&&c.concurrentRequestLimit),this.Ba=new bv,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=ud.prototype,r.ka=8,r.I=1,r.connect=function(c,f,d,T){Ce(0),this.W=c,this.H=f||{},d&&T!==void 0&&(this.H.OSID=d,this.H.OAID=T),this.F=this.X,this.J=Td(this,null,this.W),Ka(this)};function Gl(c){if(hd(c),c.I==3){var f=c.V++,d=_r(c.J);if(Fe(d,"SID",c.M),Fe(d,"RID",f),Fe(d,"TYPE","terminate"),xo(c,d),f=new Ee(c,c.j,f),f.M=2,f.A=ja(_r(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=f.A,d=!0),d||(f.g=vd(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Je(f)}yd(c)}function Ga(c){c.g&&(Yl(c),c.g.cancel(),c.g=null)}function hd(c){Ga(c),c.v&&(o.clearTimeout(c.v),c.v=null),Ya(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Ka(c){if(!Rs(c.h)&&!c.m){c.m=!0;var f=c.Ea;M||y(),L||(M(),L=!0),v.add(f,c),c.D=0}}function kv(c,f){return Ao(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=En(u(c.Ea,c,f),_d(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const C=new Ee(this,this.j,c);let x=this.o;if(this.U&&(x?(x=Se(x),on(x,this.U)):x=this.U),this.u!==null||this.R||(C.J=x,x=null),this.S)e:{for(var f=0,d=0;d<this.i.length;d++){t:{var T=this.i[d];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(f+=T,f>4096){f=d;break e}if(f===4096||d===this.i.length-1){f=d+1;break e}}f=1e3}else f=1e3;f=dd(this,C,f),d=_r(this.J),Fe(d,"RID",c),Fe(d,"CVER",22),this.G&&Fe(d,"X-HTTP-Session-Id",this.G),xo(this,d),x&&(this.R?f="headers="+He(sd(x))+"&"+f:this.u&&Wl(d,this.u,x)),fn(this.h,C),this.Ra&&Fe(d,"TYPE","init"),this.S?(Fe(d,"$req",f),Fe(d,"SID","null"),C.U=!0,ve(C,d,null)):ve(C,d,f),this.I=2}}else this.I==3&&(c?fd(this,c):this.i.length==0||Rs(this.h)||fd(this))};function fd(c,f){var d;f?d=f.l:d=c.V++;const T=_r(c.J);Fe(T,"SID",c.M),Fe(T,"RID",d),Fe(T,"AID",c.K),xo(c,T),c.u&&c.o&&Wl(T,c.u,c.o),d=new Ee(c,c.j,d,c.D+1),c.u===null&&(d.J=c.o),f&&(c.i=f.G.concat(c.i)),f=dd(c,d,1e3),d.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),fn(c.h,d),ve(d,T,f)}function xo(c,f){c.H&&we(c.H,function(d,T){Fe(f,T,d)}),c.l&&we({},function(d,T){Fe(f,T,d)})}function dd(c,f,d){d=Math.min(c.i.length,d);const T=c.l?u(c.l.Ka,c.l,c):null;e:{var C=c.i;let se=-1;for(;;){const Tt=["count="+d];se==-1?d>0?(se=C[0].g,Tt.push("ofs="+se)):se=0:Tt.push("ofs="+se);let ke=!0;for(let bt=0;bt<d;bt++){var x=C[bt].g;const yr=C[bt].map;if(x-=se,x<0)se=Math.max(0,C[bt].g-100),ke=!1;else try{x="req"+x+"_"||"";try{var B=yr instanceof Map?yr:Object.entries(yr);for(const[ji,ni]of B){let ri=ni;a(ni)&&(ri=Xt(ni)),Tt.push(x+ji+"="+encodeURIComponent(ri))}}catch(ji){throw Tt.push(x+"type="+encodeURIComponent("_badmap")),ji}}catch{T&&T(yr)}}if(ke){B=Tt.join("&");break e}}B=void 0}return c=c.i.splice(0,d),f.G=c,B}function pd(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;M||y(),L||(M(),L=!0),v.add(f,c),c.A=0}}function Kl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=En(u(c.Da,c),_d(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,gd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=En(u(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),Ga(this),gd(this))};function Yl(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function gd(c){c.g=new Ee(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=_r(c.na);Fe(f,"RID","rpc"),Fe(f,"SID",c.M),Fe(f,"AID",c.K),Fe(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&Fe(f,"TO",c.ia),Fe(f,"TYPE","xmlhttp"),xo(c,f),c.u&&c.o&&Wl(f,c.u,c.o),c.O&&(c.g.H=c.O);var d=c.g;c=c.ba,d.M=1,d.A=ja(_r(f)),d.u=null,d.R=!0,hn(d,c)}r.Va=function(){this.C!=null&&(this.C=null,Ga(this),Kl(this),Ce(19))};function Ya(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function md(c,f){var d=null;if(c.g==f){Ya(c),Yl(c),c.g=null;var T=2}else if(Mr(c.h,f))d=f.G,Jr(c.h,f),T=1;else return;if(c.I!=0){if(f.o)if(T==1){d=f.u?f.u.length:0,f=Date.now()-f.F;var C=c.D;T=Fn(),qe(T,new un(T,d)),Ka(c)}else pd(c);else if(C=f.m,C==3||C==0&&f.X>0||!(T==1&&kv(c,f)||T==2&&Kl(c)))switch(d&&d.length>0&&(f=c.h,f.i=f.i.concat(d)),C){case 1:$i(c,5);break;case 4:$i(c,10);break;case 3:$i(c,6);break;default:$i(c,2)}}}function _d(c,f){let d=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(d*=2),d*f}function $i(c,f){if(c.j.info("Error code "+f),f==2){var d=u(c.bb,c),T=c.Ua;const C=!T;T=new Zr(T||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||So(T,"https"),ja(T),C?Av(T.toString(),d):Sv(T.toString(),d)}else Ce(2);c.I=0,c.l&&c.l.pa(f),yd(c),hd(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function yd(c){if(c.I=0,c.ja=[],c.l){const f=zi(c.h);(f.length!=0||c.i.length!=0)&&(I(c.ja,f),I(c.ja,c.i),c.h.i.length=0,m(c.i),c.i.length=0),c.l.oa()}}function Td(c,f,d){var T=d instanceof Zr?_r(d):new Zr(d);if(T.g!="")f&&(T.g=f+"."+T.g),bo(T,T.u);else{var C=o.location;T=C.protocol,f=f?f+"."+C.hostname:C.hostname,C=+C.port;const x=new Zr(null);T&&So(x,T),f&&(x.g=f),C&&bo(x,C),d&&(x.h=d),T=x}return d=c.G,f=c.wa,d&&f&&Fe(T,d,f),Fe(T,"VER",c.ka),xo(c,T),T}function vd(c,f,d){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new Ze(new Hl({ab:d})):new Ze(c.ma),f.Fa(c.L),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function wd(){}r=wd.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Xa(){}Xa.prototype.g=function(c,f){return new Sn(c,f)};function Sn(c,f){xe.call(this),this.g=new ud(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!A(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!A(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Cs(this)}p(Sn,xe),Sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Sn.prototype.close=function(){Gl(this.g)},Sn.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var d={};d.__data__=c,c=d}else this.v&&(d={},d.__data__=Xt(c),c=d);f.i.push(new nt(f.Ya++,c)),f.I==3&&Ka(f)},Sn.prototype.N=function(){this.g.l=null,delete this.j,Gl(this.g),delete this.g,Sn.Z.N.call(this)};function Ed(c){vn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const d in f){c=d;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}p(Ed,vn);function Id(){mr.call(this),this.status=1}p(Id,mr);function Cs(c){this.g=c}p(Cs,wd),Cs.prototype.ra=function(){qe(this.g,"a")},Cs.prototype.qa=function(c){qe(this.g,new Ed(c))},Cs.prototype.pa=function(c){qe(this.g,new Id)},Cs.prototype.oa=function(){qe(this.g,"b")},Xa.prototype.createWebChannel=Xa.prototype.g,Sn.prototype.send=Sn.prototype.o,Sn.prototype.open=Sn.prototype.m,Sn.prototype.close=Sn.prototype.close,_m=function(){return new Xa},mm=function(){return Fn()},gm=cn,Ou={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},z.NO_ERROR=0,z.TIMEOUT=8,z.HTTP_ERROR=6,_c=z,ee.COMPLETE="complete",pm=ee,Ge.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",xe.prototype.listen=xe.prototype.J,Uo=Ge,Ze.prototype.listenOnce=Ze.prototype.K,Ze.prototype.getLastError=Ze.prototype.Ha,Ze.prototype.getLastErrorCode=Ze.prototype.ya,Ze.prototype.getStatus=Ze.prototype.ca,Ze.prototype.getResponseJson=Ze.prototype.La,Ze.prototype.getResponseText=Ze.prototype.la,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Fa,dm=Ze}).apply(typeof Ja<"u"?Ja:typeof self<"u"?self:typeof window<"u"?window:{});const Ld="@firebase/firestore",Fd="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new ml("@firebase/firestore");function xs(){return hs.logLevel}function $(r,...e){if(hs.logLevel<=pe.DEBUG){const t=e.map(Sh);hs.debug(`Firestore (${_o}): ${r}`,...t)}}function Wr(r,...e){if(hs.logLevel<=pe.ERROR){const t=e.map(Sh);hs.error(`Firestore (${_o}): ${r}`,...t)}}function eo(r,...e){if(hs.logLevel<=pe.WARN){const t=e.map(Sh);hs.warn(`Firestore (${_o}): ${r}`,...t)}}function Sh(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,ym(r,n,t)}function ym(r,e,t){let n=`FIRESTORE (${_o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Wr(n),new Error(n)}function Ae(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||ym(e,i,n)}function ne(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t($t.UNAUTHENTICATED))}shutdown(){}}class yE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class TE{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ae(this.o===void 0,42304);let n=this.i;const i=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let s=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $r)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ae(typeof n.accessToken=="string",31837,{l:n}),new Tm(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string",2055,{h:e}),new $t(e)}}class vE{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wE{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new vE(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ud{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EE{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,or(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ae(this.o===void 0,3512);const n=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ud(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ae(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ud(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=IE(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function ge(r,e){return r<e?-1:r>e?1:0}function xu(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const i=r.charAt(n),s=e.charAt(n);if(i!==s)return nu(i)===nu(s)?ge(i,s):nu(i)?1:-1}return ge(r.length,e.length)}const AE=55296,SE=57343;function nu(r){const e=r.charCodeAt(0);return e>=AE&&e<=SE}function to(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="__name__";class Tr{constructor(e,t,n){t===void 0?t=0:t>e.length&&Q(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&Q(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Tr?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=Tr.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ge(e.length,t.length)}static compareSegments(e,t){const n=Tr.isNumericId(e),i=Tr.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Tr.extractNumericId(e).compare(Tr.extractNumericId(t)):xu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ti.fromString(e.substring(4,e.length-2))}}class Ve extends Tr{construct(e,t,n){return new Ve(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new q(F.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new Ve(t)}static emptyPath(){return new Ve([])}}const bE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends Tr{construct(e,t,n){return new Nt(e,t,n)}static isValidIdentifier(e){return bE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bd}static keyField(){return new Nt([Bd])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(n+=a,i++):(s(),i++)}if(s(),o)throw new q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ve.fromString(e))}static fromName(e){return new W(Ve.fromString(e).popFirst(5))}static empty(){return new W(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(r,e,t){if(!t)throw new q(F.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function RE(r,e,t,n){if(e===!0&&n===!0)throw new q(F.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function zd(r){if(!W.isDocumentKey(r))throw new q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function qd(r){if(W.isDocumentKey(r))throw new q(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function wm(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function _l(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Q(12329,{type:typeof r})}function Xn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_l(r);throw new q(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Va(r,e){if(!wm(r))throw new q(F.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(i&&typeof o!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new q(F.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=-62135596800,jd=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*jd);return new Ue(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$d)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Va(e,Ue._jsonSchema))return new Ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$d;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ue._jsonSchemaVersion="firestore/timestamp/1.0",Ue._jsonSchema={type:gt("string",Ue._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Ue(0,0))}static max(){return new te(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=-1;function PE(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=te.fromTimestamp(n===1e9?new Ue(t+1,0):new Ue(t,n));return new bi(i,W.empty(),e)}function CE(r){return new bi(r.readTime,r.key,ma)}class bi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new bi(te.min(),W.empty(),ma)}static max(){return new bi(te.max(),W.empty(),ma)}}function kE(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(r.documentKey,e.documentKey),t!==0?t:ge(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(r){if(r.code!==F.FAILED_PRECONDITION||r.message!==DE)throw r;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,n)=>{t(e)})}static reject(e){return new U((t,n)=>{n(e)})}static waitFor(e){return new U((t,n)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},l=>n(l))}),o=!0,s===i&&t()})}static or(e){let t=U.resolve(!1);for(const n of e)t=t.next(i=>i?U.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new U((n,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next(h=>{o[u]=h,++a,a===s&&n(o)},h=>i(h))}})}static doWhile(e,t){return new U((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}function xE(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function To(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yl.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=-1;function Tl(r){return r==null}function Fc(r){return r===0&&1/r==-1/0}function NE(r){return typeof r=="number"&&Number.isInteger(r)&&!Fc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="";function VE(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Hd(e)),e=ME(r.get(t),e);return Hd(e)}function ME(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case Em:t+="";break;default:t+=s}}return t}function Hd(r){return r+Em+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ws(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Im(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new Qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Za(this.root,e,this.comparator,!1)}getReverseIterator(){return new Za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Za(this.root,e,this.comparator,!0)}}class Za{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??xt.RED,this.left=i??xt.EMPTY,this.right=s??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new xt(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return xt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gd(this.data.getIterator())}getIteratorFrom(e){return new Gd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Gd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new ar([])}unionWith(e){let t=new Et(Nt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ar(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return to(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Am("Invalid base64 string: "+s):s}}(e);return new Lt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const LE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(r){if(Ae(!!r,39018),typeof r=="string"){let e=0;const t=LE.exec(r);if(Ae(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:rt(r.seconds),nanos:rt(r.nanos)}}function rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Pi(r){return typeof r=="string"?Lt.fromBase64String(r):Lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="server_timestamp",bm="__type__",Rm="__previous_value__",Pm="__local_write_time__";function Ph(r){return(r?.mapValue?.fields||{})[bm]?.stringValue===Sm}function vl(r){const e=r.mapValue.fields[Rm];return Ph(e)?vl(e):e}function _a(r){const e=Ri(r.mapValue.fields[Pm].timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t,n,i,s,o,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const Uc="(default)";class ya{constructor(e,t){this.projectId=e,this.database=t||Uc}static empty(){return new ya("","")}get isDefaultDatabase(){return this.database===Uc}isEqual(e){return e instanceof ya&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="__type__",UE="__max__",ec={mapValue:{}},km="__vector__",Bc="value";function Ci(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ph(r)?4:zE(r)?9007199254740991:BE(r)?10:11:Q(28295,{value:r})}function xr(r,e){if(r===e)return!0;const t=Ci(r);if(t!==Ci(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return _a(r).isEqual(_a(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ri(i.timestampValue),a=Ri(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Pi(i.bytesValue).isEqual(Pi(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return rt(i.geoPointValue.latitude)===rt(s.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return rt(i.integerValue)===rt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=rt(i.doubleValue),a=rt(s.doubleValue);return o===a?Fc(o)===Fc(a):isNaN(o)&&isNaN(a)}return!1}(r,e);case 9:return to(r.arrayValue.values||[],e.arrayValue.values||[],xr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Wd(o)!==Wd(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xr(o[l],a[l])))return!1;return!0}(r,e);default:return Q(52216,{left:r})}}function Ta(r,e){return(r.values||[]).find(t=>xr(t,e))!==void 0}function no(r,e){if(r===e)return 0;const t=Ci(r),n=Ci(e);if(t!==n)return ge(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ge(r.booleanValue,e.booleanValue);case 2:return function(s,o){const a=rt(s.integerValue||s.doubleValue),l=rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(r,e);case 3:return Kd(r.timestampValue,e.timestampValue);case 4:return Kd(_a(r),_a(e));case 5:return xu(r.stringValue,e.stringValue);case 6:return function(s,o){const a=Pi(s),l=Pi(o);return a.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ge(a[u],l[u]);if(h!==0)return h}return ge(a.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ge(rt(s.latitude),rt(o.latitude));return a!==0?a:ge(rt(s.longitude),rt(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Yd(r.arrayValue,e.arrayValue);case 10:return function(s,o){const a=s.fields||{},l=o.fields||{},u=a[Bc]?.arrayValue,h=l[Bc]?.arrayValue,p=ge(u?.values?.length||0,h?.values?.length||0);return p!==0?p:Yd(u,h)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===ec.mapValue&&o===ec.mapValue)return 0;if(s===ec.mapValue)return 1;if(o===ec.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=xu(l[p],h[p]);if(g!==0)return g;const m=no(a[l[p]],u[h[p]]);if(m!==0)return m}return ge(l.length,h.length)}(r.mapValue,e.mapValue);default:throw Q(23264,{he:t})}}function Kd(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ge(r,e);const t=Ri(r),n=Ri(e),i=ge(t.seconds,n.seconds);return i!==0?i:ge(t.nanos,n.nanos)}function Yd(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=no(t[i],n[i]);if(s)return s}return ge(t.length,n.length)}function ro(r){return Nu(r)}function Nu(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Ri(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Pi(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return W.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Nu(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${Nu(t.fields[o])}`;return i+"}"}(r.mapValue):Q(61005,{value:r})}function yc(r){switch(Ci(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vl(r);return e?16+yc(e):16;case 5:return 2*r.stringValue.length;case 6:return Pi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+yc(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return ws(n.fields,(s,o)=>{i+=s.length+yc(o)}),i}(r.mapValue);default:throw Q(13486,{value:r})}}function Xd(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Vu(r){return!!r&&"integerValue"in r}function Ch(r){return!!r&&"arrayValue"in r}function Qd(r){return!!r&&"nullValue"in r}function Jd(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Tc(r){return!!r&&"mapValue"in r}function BE(r){return(r?.mapValue?.fields||{})[Cm]?.stringValue===km}function Qo(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ws(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Qo(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qo(r.arrayValue.values[t]);return e}return{...r}}function zE(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===UE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.value=e}static empty(){return new Hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Tc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qo(t)}setAll(e){let t=Nt.emptyPath(),n={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,n,i),n={},i=[],t=a.popLast()}o?n[a.lastSegment()]=Qo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Tc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Tc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ws(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Hn(Qo(this.value))}}function Dm(r){const e=[];return ws(r.fields,(t,n)=>{const i=new Nt([t]);if(Tc(n)){const s=Dm(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ar(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n,i,s,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ht(e,0,te.min(),te.min(),te.min(),Hn.empty(),0)}static newFoundDocument(e,t,n,i){return new Ht(e,1,t,te.min(),n,i,0)}static newNoDocument(e,t){return new Ht(e,2,t,te.min(),te.min(),Hn.empty(),0)}static newUnknownDocument(e,t){return new Ht(e,3,t,te.min(),te.min(),Hn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.position=e,this.inclusive=t}}function Zd(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=W.comparator(W.fromName(o.referenceValue),t.key):n=no(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function ep(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!xr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t="asc"){this.field=e,this.dir=t}}function qE(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{}class pt extends Om{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new jE(e,t,n):t==="array-contains"?new GE(e,n):t==="in"?new KE(e,n):t==="not-in"?new YE(e,n):t==="array-contains-any"?new XE(e,n):new pt(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new HE(e,n):new WE(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(no(t,this.value)):t!==null&&Ci(this.value)===Ci(t)&&this.matchesComparison(no(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hr extends Om{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new hr(e,t)}matches(e){return xm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xm(r){return r.op==="and"}function Nm(r){return $E(r)&&xm(r)}function $E(r){for(const e of r.filters)if(e instanceof hr)return!1;return!0}function Mu(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+ro(r.value);if(Nm(r))return r.filters.map(e=>Mu(e)).join(",");{const e=r.filters.map(t=>Mu(t)).join(",");return`${r.op}(${e})`}}function Vm(r,e){return r instanceof pt?function(n,i){return i instanceof pt&&n.op===i.op&&n.field.isEqual(i.field)&&xr(n.value,i.value)}(r,e):r instanceof hr?function(n,i){return i instanceof hr&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,a)=>s&&Vm(o,i.filters[a]),!0):!1}(r,e):void Q(19439)}function Mm(r){return r instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${ro(t.value)}`}(r):r instanceof hr?function(t){return t.op.toString()+" {"+t.getFilters().map(Mm).join(" ,")+"}"}(r):"Filter"}class jE extends pt{constructor(e,t,n){super(e,t,n),this.key=W.fromName(n.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class HE extends pt{constructor(e,t){super(e,"in",t),this.keys=Lm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class WE extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Lm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Lm(r,e){return(e.arrayValue?.values||[]).map(t=>W.fromName(t.referenceValue))}class GE extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ch(t)&&Ta(t.arrayValue,this.value)}}class KE extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ta(this.value.arrayValue,t)}}class YE extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ta(this.value.arrayValue,t)}}class XE extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ch(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Ta(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,t=null,n=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function tp(r,e=null,t=[],n=[],i=null,s=null,o=null){return new QE(r,e,t,n,i,s,o)}function kh(r){const e=ne(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Mu(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Tl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ro(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ro(n)).join(",")),e.Te=t}return e.Te}function Dh(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!qE(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Vm(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ep(r.startAt,e.startAt)&&ep(r.endAt,e.endAt)}function Lu(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t=null,n=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function JE(r,e,t,n,i,s,o,a){return new vo(r,e,t,n,i,s,o,a)}function wl(r){return new vo(r)}function np(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Fm(r){return r.collectionGroup!==null}function Jo(r){const e=ne(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Et(Nt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new va(s,n))}),t.has(Nt.keyField().canonicalString())||e.Ie.push(new va(Nt.keyField(),n))}return e.Ie}function Sr(r){const e=ne(r);return e.Ee||(e.Ee=ZE(e,Jo(r))),e.Ee}function ZE(r,e){if(r.limitType==="F")return tp(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new va(i.field,s)});const t=r.endAt?new zc(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new zc(r.startAt.position,r.startAt.inclusive):null;return tp(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Fu(r,e){const t=r.filters.concat([e]);return new vo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Uu(r,e,t){return new vo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function El(r,e){return Dh(Sr(r),Sr(e))&&r.limitType===e.limitType}function Um(r){return`${kh(Sr(r))}|lt:${r.limitType}`}function Ns(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Mm(i)).join(", ")}]`),Tl(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>ro(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>ro(i)).join(",")),`Target(${n})`}(Sr(r))}; limitType=${r.limitType})`}function Il(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):W.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Jo(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,a,l){const u=Zd(o,a,l);return o.inclusive?u<=0:u<0}(n.startAt,Jo(n),i)||n.endAt&&!function(o,a,l){const u=Zd(o,a,l);return o.inclusive?u>=0:u>0}(n.endAt,Jo(n),i))}(r,e)}function e0(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Bm(r){return(e,t)=>{let n=!1;for(const i of Jo(r)){const s=t0(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function t0(r,e,t){const n=r.field.isKeyField()?W.comparator(e.key,t.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?no(l,u):Q(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Q(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Im(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=new Qe(W.comparator);function Gr(){return n0}const zm=new Qe(W.comparator);function Bo(...r){let e=zm;for(const t of r)e=e.insert(t.key,t);return e}function qm(r){let e=zm;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Qi(){return Zo()}function $m(){return Zo()}function Zo(){return new Es(r=>r.toString(),(r,e)=>r.isEqual(e))}const r0=new Qe(W.comparator),i0=new Et(W.comparator);function me(...r){let e=i0;for(const t of r)e=e.add(t);return e}const s0=new Et(ge);function o0(){return s0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fc(e)?"-0":e}}function jm(r){return{integerValue:""+r}}function a0(r,e){return NE(e)?jm(e):Oh(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this._=void 0}}function c0(r,e,t){return r instanceof qc?function(i,s){const o={fields:{[bm]:{stringValue:Sm},[Pm]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ph(s)&&(s=vl(s)),s&&(o.fields[Rm]=s),{mapValue:o}}(t,e):r instanceof wa?Wm(r,e):r instanceof Ea?Gm(r,e):function(i,s){const o=Hm(i,s),a=rp(o)+rp(i.Ae);return Vu(o)&&Vu(i.Ae)?jm(a):Oh(i.serializer,a)}(r,e)}function l0(r,e,t){return r instanceof wa?Wm(r,e):r instanceof Ea?Gm(r,e):t}function Hm(r,e){return r instanceof $c?function(n){return Vu(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class qc extends Al{}class wa extends Al{constructor(e){super(),this.elements=e}}function Wm(r,e){const t=Km(e);for(const n of r.elements)t.some(i=>xr(i,n))||t.push(n);return{arrayValue:{values:t}}}class Ea extends Al{constructor(e){super(),this.elements=e}}function Gm(r,e){let t=Km(e);for(const n of r.elements)t=t.filter(i=>!xr(i,n));return{arrayValue:{values:t}}}class $c extends Al{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function rp(r){return rt(r.integerValue||r.doubleValue)}function Km(r){return Ch(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function u0(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof wa&&i instanceof wa||n instanceof Ea&&i instanceof Ea?to(n.elements,i.elements,xr):n instanceof $c&&i instanceof $c?xr(n.Ae,i.Ae):n instanceof qc&&i instanceof qc}(r.transform,e.transform)}class h0{constructor(e,t){this.version=e,this.transformResults=t}}class lr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lr}static exists(e){return new lr(void 0,e)}static updateTime(e){return new lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Sl{}function Ym(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new xh(r.key,lr.none()):new Ma(r.key,r.data,lr.none());{const t=r.data,n=Hn.empty();let i=new Et(Nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new Is(r.key,n,new ar(i.toArray()),lr.none())}}function f0(r,e,t){r instanceof Ma?function(i,s,o){const a=i.value.clone(),l=sp(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(r,e,t):r instanceof Is?function(i,s,o){if(!vc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=sp(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Xm(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ea(r,e,t,n){return r instanceof Ma?function(s,o,a,l){if(!vc(s.precondition,o))return a;const u=s.value.clone(),h=op(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(r,e,t,n):r instanceof Is?function(s,o,a,l){if(!vc(s.precondition,o))return a;const u=op(s.fieldTransforms,l,o),h=o.data;return h.setAll(Xm(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,o,a){return vc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(r,e,t)}function d0(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=Hm(n.transform,i||null);s!=null&&(t===null&&(t=Hn.empty()),t.set(n.field,s))}return t||null}function ip(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&to(n,i,(s,o)=>u0(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ma extends Sl{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Is extends Sl{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xm(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function sp(r,e,t){const n=new Map;Ae(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,a=e.data.field(s.field);n.set(s.field,l0(o,a,t[i]))}return n}function op(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,c0(s,o,e))}return n}class xh extends Sl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p0 extends Sl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&f0(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ea(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ea(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=$m();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=Ym(o,a);l!==null&&n.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&to(this.mutations,e.mutations,(t,n)=>ip(t,n))&&to(this.baseMutations,e.baseMutations,(t,n)=>ip(t,n))}}class Nh{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Ae(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let i=function(){return r0}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Nh(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,ye;function y0(r){switch(r){case F.OK:return Q(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Q(15467,{code:r})}}function Qm(r){if(r===void 0)return Wr("GRPC error has no .code"),F.UNKNOWN;switch(r){case ht.OK:return F.OK;case ht.CANCELLED:return F.CANCELLED;case ht.UNKNOWN:return F.UNKNOWN;case ht.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ht.INTERNAL:return F.INTERNAL;case ht.UNAVAILABLE:return F.UNAVAILABLE;case ht.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ht.NOT_FOUND:return F.NOT_FOUND;case ht.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ht.ABORTED:return F.ABORTED;case ht.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ht.DATA_LOSS:return F.DATA_LOSS;default:return Q(39323,{code:r})}}(ye=ht||(ht={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=new Ti([4294967295,4294967295],0);function ap(r){const e=T0().encode(r),t=new fm;return t.update(e),new Uint8Array(t.digest())}function cp(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ti([t,n],0),new Ti([i,s],0)]}class Vh{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new zo(`Invalid padding: ${t}`);if(n<0)throw new zo(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new zo(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new zo(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ti.fromNumber(this.ge)}ye(e,t,n){let i=e.add(t.multiply(Ti.fromNumber(n)));return i.compare(v0)===1&&(i=new Ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ap(e),[n,i]=cp(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(n,i,s);if(!this.we(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vh(s,i,t);return n.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const t=ap(e),[n,i]=cp(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(n,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class zo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,La.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new bl(te.min(),i,new Qe(ge),Gr(),me())}}class La{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new La(n,t,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,n,i){this.be=e,this.removedTargetIds=t,this.key=n,this.De=i}}class Jm{constructor(e,t){this.targetId=e,this.Ce=t}}class Zm{constructor(e,t,n=Lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class lp{constructor(){this.ve=0,this.Fe=up(),this.Me=Lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=me(),t=me(),n=me();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Q(38017,{changeType:s})}}),new La(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=up()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ae(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class w0{constructor(e){this.Ge=e,this.ze=new Map,this.je=Gr(),this.Je=tc(),this.He=tc(),this.Ye=new Qe(ge)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,n=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Lu(s))if(n===0){const o=new W(s.path);this.et(t,o,Ht.newNoDocument(o,te.min()))}else Ae(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Pi(n).toUint8Array()}catch(l){if(l instanceof Am)return eo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Vh(o,i,s)}catch(l){return eo(l instanceof zo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(t,s,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&Lu(a.target)){const l=new W(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ht.newNoDocument(l,e))}s.Be&&(t.set(o,s.ke()),s.qe())}});let n=me();this.He.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(n=n.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new bl(e,t,this.Ye,this.je,n);return this.je=Gr(),this.Je=tc(),this.He=tc(),this.Ye=new Qe(ge),i}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new lp,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Et(ge),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Et(ge),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new lp),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function tc(){return new Qe(W.comparator)}function up(){return new Qe(W.comparator)}const E0={asc:"ASCENDING",desc:"DESCENDING"},I0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},A0={and:"AND",or:"OR"};class S0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bu(r,e){return r.useProto3Json||Tl(e)?e:{value:e}}function jc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function b0(r,e){return jc(r,e.toTimestamp())}function br(r){return Ae(!!r,49232),te.fromTimestamp(function(t){const n=Ri(t);return new Ue(n.seconds,n.nanos)}(r))}function Mh(r,e){return zu(r,e).canonicalString()}function zu(r,e){const t=function(i){return new Ve(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function t_(r){const e=Ve.fromString(r);return Ae(o_(e),10190,{key:e.toString()}),e}function qu(r,e){return Mh(r.databaseId,e.path)}function ru(r,e){const t=t_(e);if(t.get(1)!==r.databaseId.projectId)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new W(r_(t))}function n_(r,e){return Mh(r.databaseId,e)}function R0(r){const e=t_(r);return e.length===4?Ve.emptyPath():r_(e)}function $u(r){return new Ve(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function r_(r){return Ae(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function hp(r,e,t){return{name:qu(r,e),fields:t.value.mapValue.fields}}function P0(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Ae(h===void 0||typeof h=="string",58123),Lt.fromBase64String(h||"")):(Ae(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Lt.fromUint8Array(h||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?F.UNKNOWN:Qm(u.code);return new q(h,u.message||"")}(o);t=new Zm(n,i,s,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=ru(r,n.document.name),s=br(n.document.updateTime),o=n.document.createTime?br(n.document.createTime):te.min(),a=new Hn({mapValue:{fields:n.document.fields}}),l=Ht.newFoundDocument(i,s,o,a),u=n.targetIds||[],h=n.removedTargetIds||[];t=new wc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=ru(r,n.document),s=n.readTime?br(n.readTime):te.min(),o=Ht.newNoDocument(i,s),a=n.removedTargetIds||[];t=new wc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=ru(r,n.document),s=n.removedTargetIds||[];t=new wc([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new _0(i,s),a=n.targetId;t=new Jm(a,o)}}return t}function C0(r,e){let t;if(e instanceof Ma)t={update:hp(r,e.key,e.value)};else if(e instanceof xh)t={delete:qu(r,e.key)};else if(e instanceof Is)t={update:hp(r,e.key,e.data),updateMask:F0(e.fieldMask)};else{if(!(e instanceof p0))return Q(16599,{Vt:e.type});t={verify:qu(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const a=o.transform;if(a instanceof qc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $c)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Q(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:b0(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(r,e.precondition)),t}function k0(r,e){return r&&r.length>0?(Ae(e!==void 0,14353),r.map(t=>function(i,s){let o=i.updateTime?br(i.updateTime):br(s);return o.isEqual(te.min())&&(o=br(s)),new h0(o,i.transformResults||[])}(t,e))):[]}function D0(r,e){return{documents:[n_(r,e.path)]}}function O0(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=n_(r,i);const s=function(u){if(u.length!==0)return s_(hr.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Vs(g.field),direction:V0(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Bu(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:t,parent:i}}function x0(r){let e=R0(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){Ae(n===1,65062);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(p){const g=i_(p);return g instanceof hr&&Nm(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(I){return new va(Ms(I.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,Tl(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,m=p.values||[];return new zc(m,g)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const g=!p.before,m=p.values||[];return new zc(m,g)}(t.endAt)),JE(e,i,o,s,a,"F",l,u)}function N0(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function i_(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ms(t.unaryFilter.field);return pt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ms(t.unaryFilter.field);return pt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ms(t.unaryFilter.field);return pt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(t.unaryFilter.field);return pt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(r):r.fieldFilter!==void 0?function(t){return pt.create(Ms(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return hr.create(t.compositeFilter.filters.map(n=>i_(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(t.compositeFilter.op))}(r):Q(30097,{filter:r})}function V0(r){return E0[r]}function M0(r){return I0[r]}function L0(r){return A0[r]}function Vs(r){return{fieldPath:r.canonicalString()}}function Ms(r){return Nt.fromServerFormat(r.fieldPath)}function s_(r){return r instanceof pt?function(t){if(t.op==="=="){if(Jd(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NAN"}};if(Qd(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Jd(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NOT_NAN"}};if(Qd(t.value))return{unaryFilter:{field:Vs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vs(t.field),op:M0(t.op),value:t.value}}}(r):r instanceof hr?function(t){const n=t.getFilters().map(i=>s_(i));return n.length===1?n[0]:{compositeFilter:{op:L0(t.op),filters:n}}}(r):Q(54877,{filter:r})}function F0(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function o_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,n,i,s=te.min(),o=te.min(),a=Lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.yt=e}}function B0(r){const e=x0({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Uu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.Cn=new q0}addToCollectionParentIndex(e,t){return this.Cn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(bi.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(bi.min())}updateCollectionGroup(e,t,n){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class q0{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Et(Ve.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Et(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},a_=41943040;class pn{static withCacheSize(e){return new pn(e,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(a_,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new io(0)}static cr(){return new io(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="LruGarbageCollector",$0=1048576;function pp([r,e],[t,n]){const i=ge(r,t);return i===0?ge(e,n):i}class j0{constructor(e){this.Ir=e,this.buffer=new Et(pp),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();pp(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class H0{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(dp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){To(t)?$(dp,"Ignoring IndexedDB error during garbage collection: ",t):await yo(t)}await this.Vr(3e5)})}}class W0{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return U.resolve(yl.ce);const n=new j0(t);return this.mr.forEachTarget(e,i=>n.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>n.Ar(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(fp)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fp):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,i,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(n=p,a=Date.now(),this.removeTargets(e,n,t))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(u=Date.now(),xs()<=pe.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function G0(r,e){return new W0(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.changes=new Es(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?U.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&ea(n.mutation,i,ar.empty(),Ue.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,me()).next(()=>n))}getLocalViewOfDocuments(e,t,n=me()){const i=Qi();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=Bo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Qi();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,me()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,n,i){let s=Gr();const o=Zo(),a=function(){return Zo()}();return t.forEach((l,u)=>{const h=n.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Is)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ea(h.mutation,u,h.mutation.getFieldMask(),Ue.now())):o.set(u.key,ar.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>a.set(u,new Y0(h,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,t){const n=Zo();let i=new Qe((o,a)=>o-a),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let h=n.get(l)||ar.empty();h=a.applyToLocalView(u,h),n.set(l,h);const p=(i.get(a.batchId)||me()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,p=$m();h.forEach(g=>{if(!s.has(g)){const m=Ym(t.get(g),n.get(g));m!==null&&p.set(g,m),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return U.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):U.resolve(Qi());let a=ma,l=s;return o.next(u=>U.forEach(u,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,me())).next(h=>({batchId:a,changes:qm(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(n=>{let i=Bo();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=Bo();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,l=>{const u=function(p,g){return new vo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,n,i).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ht.newInvalidDocument(h)))});let a=Bo();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&ea(h.mutation,u,ar.empty(),Ue.now()),Il(t,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return U.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:br(i.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(i){return{name:i.name,query:B0(i.bundledQuery),readTime:br(i.readTime)}}(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this.overlays=new Qe(W.comparator),this.qr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Qi();return U.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.St(e,t,s)}),U.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(n)),U.resolve()}getOverlaysForCollection(e,t,n){const i=Qi(),s=t.length+1,o=new W(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>n&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new Qe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=s.get(u.largestBatchId);h===null&&(h=Qi(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Qi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return U.resolve(a)}St(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new m0(t,n));let s=this.qr.get(t);s===void 0&&(s=me(),this.qr.set(t,s)),this.qr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.Qr=new Et(Ct.$r),this.Ur=new Et(Ct.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Ct(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new Ct(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new W(new Ve([])),n=new Ct(t,e),i=new Ct(t,e+1),s=[];return this.Ur.forEachInRange([n,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new W(new Ve([])),n=new Ct(t,e),i=new Ct(t,e+1);let s=me();return this.Ur.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ct(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ct{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return W.comparator(e.key,t.key)||ge(e.Yr,t.Yr)}static Kr(e,t){return ge(e.Yr,t.Yr)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Et(Ct.$r)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new g0(s,t,n,i);this.mutationQueue.push(o);for(const a of i)this.Zr=this.Zr.add(new Ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,t){return U.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ei(n),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Rh:this.tr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ct(t,0),i=new Ct(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([n,i],o=>{const a=this.Xr(o.Yr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Et(ge);return t.forEach(i=>{const s=new Ct(i,0),o=new Ct(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],a=>{n=n.add(a.Yr)})}),U.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;W.isDocumentKey(s)||(s=s.child(""));const o=new Ct(new W(s),0);let a=new Et(ge);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Yr)),!0)},o),U.resolve(this.ti(a))}ti(e){const t=[];return e.forEach(n=>{const i=this.Xr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ae(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return U.forEach(t.mutations,i=>{const s=new Ct(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new Ct(t,0),i=this.Zr.firstAfterOrEqual(n);return U.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.ri=e,this.docs=function(){return new Qe(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return U.resolve(n?n.document.mutableCopy():Ht.newInvalidDocument(t))}getEntries(e,t){let n=Gr();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():Ht.newInvalidDocument(i))}),U.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Gr();const o=t.path,a=new W(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||kE(CE(h),n)<=0||(i.has(h.key)||Il(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,t,n,i){Q(9500)}ii(e,t){return U.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new nI(this)}getSize(e){return U.resolve(this.size)}}class nI extends K0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(n)}),U.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.persistence=e,this.si=new Es(t=>kh(t),Dh),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.oi=0,this._i=new Lh,this.targetCount=0,this.ai=io.ur()}forEachTarget(e,t){return this.si.forEach((n,i)=>t(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),U.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new io(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Pr(t),U.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return U.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),U.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return U.resolve(n)}containsKey(e,t){return U.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t){this.ui={},this.overlays={},this.ci=new yl(0),this.li=!1,this.li=!0,this.hi=new Z0,this.referenceDelegate=e(this),this.Pi=new rI(this),this.indexManager=new z0,this.remoteDocumentCache=function(i){return new tI(i)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new U0(t),this.Ii=new Q0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new J0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new eI(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){$("MemoryPersistence","Starting transaction:",e);const i=new iI(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,t){return U.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class iI extends OE{constructor(e){super(),this.currentSequenceNumber=e}}class Fh{constructor(e){this.persistence=e,this.Ri=new Lh,this.Vi=null}static mi(e){return new Fh(e)}get fi(){if(this.Vi)return this.Vi;throw Q(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),U.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),U.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(i=>this.fi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.fi,n=>{const i=W.fromPath(n);return this.gi(e,i).next(s=>{s||t.removeEntry(i,te.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return U.or([()=>U.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Hc{constructor(e,t){this.persistence=e,this.pi=new Es(n=>VE(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=G0(this,t)}static mi(e,t){return new Hc(e,t)}Ei(){}di(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return U.forEach(this.pi,(n,i)=>this.br(e,n,i).next(s=>s?U.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,t).next(a=>{a||(n++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),U.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yc(e.data.value)),t}br(e,t,n){return U.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return U.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=i}static As(e,t){let n=me(),i=me();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Uh(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Yv()?8:xE(Yt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ys(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new sI;return this.Ss(e,t,o).next(a=>{if(s.result=a,this.Vs)return this.bs(e,t,o,a.size)})}).next(()=>s.result)}bs(e,t,n,i){return n.documentReadCount<this.fs?(xs()<=pe.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ns(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),U.resolve()):(xs()<=pe.DEBUG&&$("QueryEngine","Query:",Ns(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(xs()<=pe.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ns(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sr(t))):U.resolve())}ys(e,t){if(np(t))return U.resolve(null);let n=Sr(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Uu(t,null,"F"),n=Sr(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=me(...s);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,n).next(l=>{const u=this.Ds(t,a);return this.Cs(t,u,o,l.readTime)?this.ys(e,Uu(t,null,"F")):this.vs(e,u,t,l)}))})))}ws(e,t,n,i){return np(t)||i.isEqual(te.min())?U.resolve(null):this.ps.getDocuments(e,n).next(s=>{const o=this.Ds(t,s);return this.Cs(t,o,n,i)?U.resolve(null):(xs()<=pe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ns(t)),this.vs(e,o,t,PE(i,ma)).next(a=>a))})}Ds(e,t){let n=new Et(Bm(e));return t.forEach((i,s)=>{Il(e,s)&&(n=n.add(s))}),n}Cs(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,n){return xs()<=pe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ns(t)),this.ps.getDocumentsMatchingQuery(e,t,bi.min(),n)}vs(e,t,n,i){return this.ps.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="LocalStore",aI=3e8;class cI{constructor(e,t,n,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Qe(ge),this.xs=new Es(s=>kh(s),Dh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function lI(r,e,t,n){return new cI(r,e,t,n)}async function l_(r,e){const t=ne(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],a=[];let l=me();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(n,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:a}))})})}function uI(r,e){const t=ne(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const p=u.batch,g=p.keys();let m=U.resolve();return g.forEach(I=>{m=m.next(()=>h.getEntry(l,I)).next(w=>{const S=u.docVersions.get(I);Ae(S!==null,48541),w.version.compareTo(S)<0&&(p.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),h.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let l=me();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function u_(r){const e=ne(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function hI(r,e){const t=ne(r),n=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const a=[];e.targetChanges.forEach((h,p)=>{const g=i.get(p);if(!g)return;a.push(t.Pi.removeMatchingKeys(s,h.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(s,h.addedDocuments,p)));let m=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?m=m.withResumeToken(Lt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,n)),i=i.insert(p,m),function(w,S,D){return w.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=aI?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(g,m,h)&&a.push(t.Pi.updateTargetData(s,m))});let l=Gr(),u=me();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(fI(s,o,e.documentUpdates).next(h=>{l=h.ks,u=h.qs})),!n.isEqual(te.min())){const h=t.Pi.getLastRemoteSnapshotVersion(s).next(p=>t.Pi.setTargetsMetadata(s,s.currentSequenceNumber,n));a.push(h)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(t.Ms=i,s))}function fI(r,e,t){let n=me(),i=me();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=Gr();return t.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$(Bh,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:i}})}function dI(r,e){const t=ne(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Rh),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function pI(r,e){const t=ne(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Pi.getTargetData(n,e).next(s=>s?(i=s,U.resolve(i)):t.Pi.allocateTargetId(n).next(o=>(i=new hi(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function ju(r,e,t){const n=ne(r),i=n.Ms.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!To(o))throw o;$(Bh,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(i.target)}function gp(r,e,t){const n=ne(r);let i=te.min(),s=me();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=ne(l),g=p.xs.get(h);return g!==void 0?U.resolve(p.Ms.get(g)):p.Pi.getTargetData(u,h)}(n,o,Sr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(o,e,t?i:te.min(),t?s:me())).next(a=>(gI(n,e0(e),a),{documents:a,Qs:s})))}function gI(r,e,t){let n=r.Os.get(e)||te.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.Os.set(e,n)}class mp{constructor(){this.activeTargetIds=o0()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mI{constructor(){this.Mo=new mp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new mp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="ConnectivityMonitor";class yp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(_p,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(_p,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc=null;function Hu(){return nc===null?nc=function(){return 268435456+Math.round(2147483648*Math.random())}():nc++,"0x"+nc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="RestConnection",yI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class TI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===Uc?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(e,t,n,i,s){const o=Hu(),a=this.zo(e,t.toUriEncodedString());$(iu,`Sending RPC '${e}' ${o}:`,a,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,s);const{host:u}=new URL(a),h=go(u);return this.Jo(e,a,l,n,h).then(p=>($(iu,`Received RPC '${e}' ${o}: `,p),p),p=>{throw eo(iu,`RPC '${e}' ${o} failed with error: `,p,"url: ",a,"request:",n),p})}Ho(e,t,n,i,s,o){return this.Go(e,t,n,i,s)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_o}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),n&&n.headers.forEach((i,s)=>e[s]=i)}zo(e,t){const n=yI[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="WebChannelConnection";class wI extends TI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,i,s){const o=Hu();return new Promise((a,l)=>{const u=new dm;u.setWithCredentials(!0),u.listenOnce(pm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _c.NO_ERROR:const p=u.getResponseJson();$(zt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case _c.TIMEOUT:$(zt,`RPC '${e}' ${o} timed out`),l(new q(F.DEADLINE_EXCEEDED,"Request time out"));break;case _c.HTTP_ERROR:const g=u.getStatus();if($(zt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m?.error;if(I&&I.status&&I.message){const w=function(D){const k=D.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(k)>=0?k:F.UNKNOWN}(I.status);l(new q(w,I.message))}else l(new q(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(F.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{$(zt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);$(zt,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",h,n,15)})}T_(e,t,n){const i=Hu(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_m(),a=mm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const h=s.join("");$(zt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const p=o.createWebChannel(h,l);this.I_(p);let g=!1,m=!1;const I=new vI({Yo:S=>{m?$(zt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(g||($(zt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),$(zt,`RPC '${e}' stream ${i} sending:`,S),p.send(S))},Zo:()=>p.close()}),w=(S,D,k)=>{S.listen(D,N=>{try{k(N)}catch(O){setTimeout(()=>{throw O},0)}})};return w(p,Uo.EventType.OPEN,()=>{m||($(zt,`RPC '${e}' stream ${i} transport opened.`),I.o_())}),w(p,Uo.EventType.CLOSE,()=>{m||(m=!0,$(zt,`RPC '${e}' stream ${i} transport closed`),I.a_(),this.E_(p))}),w(p,Uo.EventType.ERROR,S=>{m||(m=!0,eo(zt,`RPC '${e}' stream ${i} transport errored. Name:`,S.name,"Message:",S.message),I.a_(new q(F.UNAVAILABLE,"The operation could not be completed")))}),w(p,Uo.EventType.MESSAGE,S=>{if(!m){const D=S.data[0];Ae(!!D,16349);const k=D,N=k?.error||k[0]?.error;if(N){$(zt,`RPC '${e}' stream ${i} received error:`,N);const O=N.status;let M=function(y){const _=ht[y];if(_!==void 0)return Qm(_)}(O),L=N.message;M===void 0&&(M=F.INTERNAL,L="Unknown error status: "+O+" with message "+N.message),m=!0,I.a_(new q(M,L)),p.close()}else $(zt,`RPC '${e}' stream ${i} received:`,D),I.u_(D)}}),w(a,gm.STAT_EVENT,S=>{S.stat===Ou.PROXY?$(zt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Ou.NOPROXY&&$(zt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.__()},0),I}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function su(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(r){return new S0(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-n);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="PersistentStream";class f_{constructor(e,t,n,i,s,o,a,l){this.Mi=e,this.S_=n,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new h_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(Wr(t.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.D_===t&&this.G_(n,i)},n=>{e(()=>{const i=new q(F.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{n(()=>this.z_(i))}),this.stream.onMessage(i=>{n(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(Tp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():($(Tp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EI extends f_{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=P0(this.serializer,e),n=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?br(o.readTime):te.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=$u(this.serializer),t.addTarget=function(s,o){let a;const l=o.target;if(a=Lu(l)?{documents:D0(s,l)}:{query:O0(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=e_(s,o.resumeToken);const u=Bu(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=jc(s,o.snapshotVersion.toTimestamp());const u=Bu(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const n=N0(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=$u(this.serializer),t.removeTarget=e,this.q_(t)}}class II extends f_{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=k0(e.writeResults,e.commitTime),n=br(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=$u(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>C0(this.serializer,n))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{}class SI extends AI{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,zu(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(F.UNKNOWN,s.toString())})}Ho(e,t,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,zu(t,n),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class bI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Wr(t),this.aa=!1):$("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="RemoteStore";class RI{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{n.enqueueAndForget(async()=>{As(this)&&($(fs,"Restarting streams for network reachability change."),await async function(l){const u=ne(l);u.Ea.add(4),await Fa(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Pl(u)}(this))})}),this.Ra=new bI(n,i)}}async function Pl(r){if(As(r))for(const e of r.da)await e(!0)}async function Fa(r){for(const e of r.da)await e(!1)}function d_(r,e){const t=ne(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),jh(t)?$h(t):wo(t).O_()&&qh(t,e))}function zh(r,e){const t=ne(r),n=wo(t);t.Ia.delete(e),n.O_()&&p_(t,e),t.Ia.size===0&&(n.O_()?n.L_():As(t)&&t.Ra.set("Unknown"))}function qh(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wo(r).Y_(e)}function p_(r,e){r.Va.Ue(e),wo(r).Z_(e)}function $h(r){r.Va=new w0({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),wo(r).start(),r.Ra.ua()}function jh(r){return As(r)&&!wo(r).x_()&&r.Ia.size>0}function As(r){return ne(r).Ea.size===0}function g_(r){r.Va=void 0}async function PI(r){r.Ra.set("Online")}async function CI(r){r.Ia.forEach((e,t)=>{qh(r,e)})}async function kI(r,e){g_(r),jh(r)?(r.Ra.ha(e),$h(r)):r.Ra.set("Unknown")}async function DI(r,e,t){if(r.Ra.set("Online"),e instanceof Zm&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.Va.removeTarget(a))}(r,e)}catch(n){$(fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Wc(r,n)}else if(e instanceof wc?r.Va.Ze(e):e instanceof Jm?r.Va.st(e):r.Va.tt(e),!t.isEqual(te.min()))try{const n=await u_(r.localStore);t.compareTo(n)>=0&&await function(s,o){const a=s.Va.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ia.get(u);h&&s.Ia.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=s.Ia.get(l);if(!h)return;s.Ia.set(l,h.withResumeToken(Lt.EMPTY_BYTE_STRING,h.snapshotVersion)),p_(s,l);const p=new hi(h.target,l,u,h.sequenceNumber);qh(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(r,t)}catch(n){$(fs,"Failed to raise snapshot:",n),await Wc(r,n)}}async function Wc(r,e,t){if(!To(e))throw e;r.Ea.add(1),await Fa(r),r.Ra.set("Offline"),t||(t=()=>u_(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{$(fs,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Pl(r)})}function m_(r,e){return e().catch(t=>Wc(r,t,e))}async function Cl(r){const e=ne(r),t=ki(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Rh;for(;OI(e);)try{const i=await dI(e.localStore,n);if(i===null){e.Ta.length===0&&t.L_();break}n=i.batchId,xI(e,i)}catch(i){await Wc(e,i)}__(e)&&y_(e)}function OI(r){return As(r)&&r.Ta.length<10}function xI(r,e){r.Ta.push(e);const t=ki(r);t.O_()&&t.X_&&t.ea(e.mutations)}function __(r){return As(r)&&!ki(r).x_()&&r.Ta.length>0}function y_(r){ki(r).start()}async function NI(r){ki(r).ra()}async function VI(r){const e=ki(r);for(const t of r.Ta)e.ea(t.mutations)}async function MI(r,e,t){const n=r.Ta.shift(),i=Nh.from(n,e,t);await m_(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Cl(r)}async function LI(r,e){e&&ki(r).X_&&await async function(n,i){if(function(o){return y0(o)&&o!==F.ABORTED}(i.code)){const s=n.Ta.shift();ki(n).B_(),await m_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cl(n)}}(r,e),__(r)&&y_(r)}async function vp(r,e){const t=ne(r);t.asyncQueue.verifyOperationInProgress(),$(fs,"RemoteStore received new credentials");const n=As(t);t.Ea.add(3),await Fa(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Pl(t)}async function FI(r,e){const t=ne(r);e?(t.Ea.delete(2),await Pl(t)):e||(t.Ea.add(2),await Fa(t),t.Ra.set("Unknown"))}function wo(r){return r.ma||(r.ma=function(t,n,i){const s=ne(t);return s.sa(),new EI(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Xo:PI.bind(null,r),t_:CI.bind(null,r),r_:kI.bind(null,r),H_:DI.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),jh(r)?$h(r):r.Ra.set("Unknown")):(await r.ma.stop(),g_(r))})),r.ma}function ki(r){return r.fa||(r.fa=function(t,n,i){const s=ne(t);return s.sa(),new II(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:NI.bind(null,r),r_:LI.bind(null,r),ta:VI.bind(null,r),na:MI.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Cl(r)):(await r.fa.stop(),r.Ta.length>0&&($(fs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,a=new Hh(e,t,o,i,s);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wh(r,e){if(Wr("AsyncQueue",`${e}: ${r}`),To(r))return new q(F.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{static emptySet(e){return new $s(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||W.comparator(t.key,n.key):(t,n)=>W.comparator(t.key,n.key),this.keyedMap=Bo(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new $s;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.ga=new Qe(W.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Q(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class so{constructor(e,t,n,i,s,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new so(e,t,$s.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&El(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class BI{constructor(){this.queries=Ep(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const i=ne(t),s=i.queries;i.queries=Ep(),s.forEach((o,a)=>{for(const l of a.Sa)l.onError(n)})})(this,new q(F.ABORTED,"Firestore shutting down"))}}function Ep(){return new Es(r=>Um(r),El)}async function Gh(r,e){const t=ne(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(n=2):(s=new UI,n=e.Da()?0:1);try{switch(n){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=Wh(o,`Initialization of query '${Ns(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Yh(t)}async function Kh(r,e){const t=ne(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function zI(r,e){const t=ne(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.Sa)a.Fa(i)&&(n=!0);o.wa=i}}n&&Yh(t)}function qI(r,e,t){const n=ne(r),i=n.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);n.queries.delete(e)}function Yh(r){r.Ca.forEach(e=>{e.next()})}var Wu,Ip;(Ip=Wu||(Wu={})).Ma="default",Ip.Cache="cache";class Xh{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new so(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=so.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Wu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.key=e}}class v_{constructor(e){this.key=e}}class $I{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=me(),this.mutatedKeys=me(),this.eu=Bm(e),this.tu=new $s(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new wp,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const g=i.get(h),m=Il(this.query,p)?p:null,I=!!g&&this.mutatedKeys.has(g.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;g&&m?g.data.isEqual(m.data)?I!==w&&(n.track({type:3,doc:m}),S=!0):this.su(g,m)||(n.track({type:2,doc:m}),S=!0,(l&&this.eu(m,l)>0||u&&this.eu(m,u)<0)&&(a=!0)):!g&&m?(n.track({type:0,doc:m}),S=!0):g&&!m&&(n.track({type:1,doc:g}),S=!0,(l||u)&&(a=!0)),S&&(m?(o=o.add(m),s=w?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),n.track({type:1,doc:h})}return{tu:o,iu:n,Cs:a,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,p)=>function(m,I){const w=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Rt:S})}};return w(m)-w(I)}(h.type,p.type)||this.eu(h.doc,p.doc)),this.ou(n),i=i??!1;const a=t&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new so(this.query,e.tu,s,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=me(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new v_(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new T_(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=me();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return so.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Qh="SyncEngine";class jI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class HI{constructor(e){this.key=e,this.hu=!1}}class WI{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Es(a=>Um(a),El),this.Iu=new Map,this.Eu=new Set,this.du=new Qe(W.comparator),this.Au=new Map,this.Ru=new Lh,this.Vu={},this.mu=new Map,this.fu=io.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function GI(r,e,t=!0){const n=b_(r);let i;const s=n.Tu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await w_(n,e,t,!0),i}async function KI(r,e){const t=b_(r);await w_(t,e,!0,!1)}async function w_(r,e,t,n){const i=await pI(r.localStore,Sr(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let a;return n&&(a=await YI(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&d_(r.remoteStore,i),a}async function YI(r,e,t,n,i){r.pu=(p,g,m)=>async function(w,S,D,k){let N=S.view.ru(D);N.Cs&&(N=await gp(w.localStore,S.query,!1).then(({documents:v})=>S.view.ru(v,N)));const O=k&&k.targetChanges.get(S.targetId),M=k&&k.targetMismatches.get(S.targetId)!=null,L=S.view.applyChanges(N,w.isPrimaryClient,O,M);return Sp(w,S.targetId,L.au),L.snapshot}(r,p,g,m);const s=await gp(r.localStore,e,!0),o=new $I(e,s.Qs),a=o.ru(s.documents),l=La.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),u=o.applyChanges(a,r.isPrimaryClient,l);Sp(r,t,u.au);const h=new jI(e,t,o);return r.Tu.set(e,h),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),u.snapshot}async function XI(r,e,t){const n=ne(r),i=n.Tu.get(e),s=n.Iu.get(i.targetId);if(s.length>1)return n.Iu.set(i.targetId,s.filter(o=>!El(o,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ju(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&zh(n.remoteStore,i.targetId),Gu(n,i.targetId)}).catch(yo)):(Gu(n,i.targetId),await ju(n.localStore,i.targetId,!0))}async function QI(r,e){const t=ne(r),n=t.Tu.get(e),i=t.Iu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),zh(t.remoteStore,n.targetId))}async function JI(r,e,t){const n=sA(r);try{const i=await function(o,a){const l=ne(o),u=Ue.now(),h=a.reduce((m,I)=>m.add(I.key),me());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let I=Gr(),w=me();return l.Ns.getEntries(m,h).next(S=>{I=S,I.forEach((D,k)=>{k.isValidDocument()||(w=w.add(D))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,I)).next(S=>{p=S;const D=[];for(const k of a){const N=d0(k,p.get(k.key).overlayedDocument);N!=null&&D.push(new Is(k.key,N,Dm(N.value.mapValue),lr.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,D,a)}).next(S=>{g=S;const D=S.applyToLocalDocumentSet(p,w);return l.documentOverlayCache.saveOverlays(m,S.batchId,D)})}).then(()=>({batchId:g.batchId,changes:qm(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Qe(ge)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u}(n,i.batchId,t),await Ua(n,i.changes),await Cl(n.remoteStore)}catch(i){const s=Wh(i,"Failed to persist write");t.reject(s)}}async function E_(r,e){const t=ne(r);try{const n=await hI(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Au.get(s);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Ae(o.hu,14607):i.removedDocuments.size>0&&(Ae(o.hu,42227),o.hu=!1))}),await Ua(t,n,e)}catch(n){await yo(n)}}function Ap(r,e,t){const n=ne(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let u=!1;l.queries.forEach((h,p)=>{for(const g of p.Sa)g.va(a)&&(u=!0)}),u&&Yh(l)}(n.eventManager,e),i.length&&n.Pu.H_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ZI(r,e,t){const n=ne(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Au.get(e),s=i&&i.key;if(s){let o=new Qe(W.comparator);o=o.insert(s,Ht.newNoDocument(s,te.min()));const a=me().add(s),l=new bl(te.min(),new Map,new Qe(ge),o,a);await E_(n,l),n.du=n.du.remove(s),n.Au.delete(e),Jh(n)}else await ju(n.localStore,e,!1).then(()=>Gu(n,e,t)).catch(yo)}async function eA(r,e){const t=ne(r),n=e.batch.batchId;try{const i=await uI(t.localStore,e);A_(t,n,null),I_(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Ua(t,i)}catch(i){await yo(i)}}async function tA(r,e,t){const n=ne(r);try{const i=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(p=>(Ae(p!==null,37113),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(n.localStore,e);A_(n,e,t),I_(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Ua(n,i)}catch(i){await yo(i)}}function I_(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function A_(r,e,t){const n=ne(r);let i=n.Vu[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Vu[n.currentUser.toKey()]=i}}function Gu(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(n=>{r.Ru.containsKey(n)||S_(r,n)})}function S_(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(zh(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Jh(r))}function Sp(r,e,t){for(const n of t)n instanceof T_?(r.Ru.addReference(n.key,e),nA(r,n)):n instanceof v_?($(Qh,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||S_(r,n.key)):Q(19791,{wu:n})}function nA(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||($(Qh,"New document in limbo: "+t),r.Eu.add(n),Jh(r))}function Jh(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new W(Ve.fromString(e)),n=r.fu.next();r.Au.set(n,new HI(t)),r.du=r.du.insert(t,n),d_(r.remoteStore,new hi(Sr(wl(t.path)),n,"TargetPurposeLimboResolution",yl.ce))}}async function Ua(r,e,t){const n=ne(r),i=[],s=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((a,l)=>{o.push(n.pu(l,e,t).then(u=>{if((u||t)&&n.isPrimaryClient){const h=u?!u.fromCache:t?.targetChanges.get(l.targetId)?.current;n.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){i.push(u);const h=Uh.As(l.targetId,u);s.push(h)}}))}),await Promise.all(o),n.Pu.H_(i),await async function(l,u){const h=ne(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(u,g=>U.forEach(g.Es,m=>h.persistence.referenceDelegate.addReference(p,g.targetId,m)).next(()=>U.forEach(g.ds,m=>h.persistence.referenceDelegate.removeReference(p,g.targetId,m)))))}catch(p){if(!To(p))throw p;$(Bh,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const m=h.Ms.get(g),I=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(I);h.Ms=h.Ms.insert(g,w)}}}(n.localStore,s))}async function rA(r,e){const t=ne(r);if(!t.currentUser.isEqual(e)){$(Qh,"User change. New user:",e.toKey());const n=await l_(t.localStore,e);t.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new q(F.CANCELLED,o))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ua(t,n.Ls)}}function iA(r,e){const t=ne(r),n=t.Au.get(e);if(n&&n.hu)return me().add(n.key);{let i=me();const s=t.Iu.get(e);if(!s)return i;for(const o of s){const a=t.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function b_(r){const e=ne(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=E_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZI.bind(null,e),e.Pu.H_=zI.bind(null,e.eventManager),e.Pu.yu=qI.bind(null,e.eventManager),e}function sA(r){const e=ne(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tA.bind(null,e),e}class Gc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return lI(this.persistence,new oI,e.initialUser,this.serializer)}Cu(e){return new c_(Fh.mi,this.serializer)}Du(e){return new mI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gc.provider={build:()=>new Gc};class oA extends Gc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ae(this.persistence.referenceDelegate instanceof Hc,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new H0(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new c_(n=>Hc.mi(n,t),this.serializer)}}class Ku{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ap(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=rA.bind(null,this.syncEngine),await FI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BI}()}createDatastore(e){const t=Rl(e.databaseInfo.databaseId),n=function(s){return new wI(s)}(e.databaseInfo);return function(s,o,a,l){return new SI(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,a){return new RI(n,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Ap(this.syncEngine,t,0),function(){return yp.v()?new yp:new _I}())}createSyncEngine(e,t){return function(i,s,o,a,l,u,h){const p=new WI(i,s,o,a,l,u);return h&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const n=ne(t);$(fs,"RemoteStore shutting down."),n.Ea.add(5),await Fa(n),n.Aa.shutdown(),n.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ku.provider={build:()=>new Ku};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Wr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="FirestoreClient";class aA{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=bh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{$(Di,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>($(Di,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Wh(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ou(r,e){r.asyncQueue.verifyOperationInProgress(),$(Di,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await l_(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function bp(r,e){r.asyncQueue.verifyOperationInProgress();const t=await cA(r);$(Di,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>vp(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>vp(e.remoteStore,i)),r._onlineComponents=e}async function cA(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){$(Di,"Using user provided OfflineComponentProvider");try{await ou(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;eo("Error using user provided cache. Falling back to memory cache: "+t),await ou(r,new Gc)}}else $(Di,"Using default OfflineComponentProvider"),await ou(r,new oA(void 0));return r._offlineComponents}async function R_(r){return r._onlineComponents||(r._uninitializedComponentsProvider?($(Di,"Using user provided OnlineComponentProvider"),await bp(r,r._uninitializedComponentsProvider._online)):($(Di,"Using default OnlineComponentProvider"),await bp(r,new Ku))),r._onlineComponents}function lA(r){return R_(r).then(e=>e.syncEngine)}async function Kc(r){const e=await R_(r),t=e.eventManager;return t.onListen=GI.bind(null,e.syncEngine),t.onUnlisten=XI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=KI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=QI.bind(null,e.syncEngine),t}function uA(r,e,t={}){const n=new $r;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new Zh({next:g=>{h.Nu(),o.enqueueAndForget(()=>Kh(s,p));const m=g.docs.has(a);!m&&g.fromCache?u.reject(new q(F.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&l&&l.source==="server"?u.reject(new q(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Xh(wl(a.path),h,{includeMetadataChanges:!0,qa:!0});return Gh(s,p)}(await Kc(r),r.asyncQueue,e,t,n)),n.promise}function hA(r,e,t={}){const n=new $r;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new Zh({next:g=>{h.Nu(),o.enqueueAndForget(()=>Kh(s,p)),g.fromCache&&l.source==="server"?u.reject(new q(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Xh(a,h,{includeMetadataChanges:!0,qa:!0});return Gh(s,p)}(await Kc(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="firestore.googleapis.com",Pp=!0;class Cp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=C_,this.ssl=Pp}else this.host=e.host,this.ssl=e.ssl??Pp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=a_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$0)throw new q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P_(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kl{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _E;switch(n.type){case"firstParty":return new wE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Rp.get(t);n&&($("ComponentProvider","Removing Datastore"),Rp.delete(t),n.terminate())}(this),Promise.resolve()}}function fA(r,e,t,n={}){r=Xn(r,kl);const i=go(e),s=r._getSettings(),o={...s,emulatorOptions:r._getEmulatorOptions()},a=`${e}:${t}`;i&&(tm(`https://${a}`),nm("Firestore",!0)),s.host!==C_&&s.host!==a&&eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:n};if(!Si(l,o)&&(r._setSettings(l),n.mockUserToken)){let u,h;if(typeof n.mockUserToken=="string")u=n.mockUserToken,h=$t.MOCK_USER;else{u=zv(n.mockUserToken,r._app?.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new $t(p)}r._authCredentials=new yE(new Tm(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Li(this.firestore,e,this._query)}}class st{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Va(t,st._jsonSchema))return new st(e,n||null,new W(Ve.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:gt("string",st._jsonSchemaVersion),referencePath:gt("string")};class vi extends Li{constructor(e,t,n){super(e,t,wl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new W(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function nC(r,e,...t){if(r=It(r),vm("collection","path",e),r instanceof kl){const n=Ve.fromString(e,...t);return qd(n),new vi(r,null,n)}{if(!(r instanceof st||r instanceof vi))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Ve.fromString(e,...t));return qd(n),new vi(r.firestore,null,n)}}function dA(r,e,...t){if(r=It(r),arguments.length===1&&(e=bh.newId()),vm("doc","path",e),r instanceof kl){const n=Ve.fromString(e,...t);return zd(n),new st(r,null,new W(n))}{if(!(r instanceof st||r instanceof vi))throw new q(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Ve.fromString(e,...t));return zd(n),new st(r.firestore,r instanceof vi?r.converter:null,new W(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="AsyncQueue";class Dp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new h_(this,"async_queue_retry"),this._c=()=>{const n=su();n&&$(kp,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=su();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=su();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new $r;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!To(e))throw e;$(kp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Wr("INTERNAL UNHANDLED ERROR: ",Op(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Hh.createAndSchedule(this,e,t,n,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:Op(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Op(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class Oi extends kl{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Dp,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dp(e),this._firestoreClient=void 0,await e}}}function pA(r,e){const t=typeof r=="object"?r:Ah(),n=typeof r=="string"?r:Uc,i=vs(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=Uv("firestore");s&&fA(i,...s)}return i}function Dl(r){if(r._terminated)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||gA(r),r._firestoreClient}function gA(r){const e=r._freezeSettings(),t=function(i,s,o,a){return new FE(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,P_(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)}(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new aA(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(i){const s=i?._online.build();return{_offline:i?._offline.build(s),_online:s}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(Lt.fromBase64String(e))}catch(t){throw new q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wn(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Va(e,Wn._jsonSchema))return Wn.fromBase64String(e.bytes)}}Wn._jsonSchemaVersion="firestore/bytes/1.0",Wn._jsonSchema={type:gt("string",Wn._jsonSchemaVersion),bytes:gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rr._jsonSchemaVersion}}static fromJSON(e){if(Va(e,Rr._jsonSchema))return new Rr(e.latitude,e.longitude)}}Rr._jsonSchemaVersion="firestore/geoPoint/1.0",Rr._jsonSchema={type:gt("string",Rr._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Pr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Va(e,Pr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Pr(e.vectorValues);throw new q(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pr._jsonSchemaVersion="firestore/vectorValue/1.0",Pr._jsonSchema={type:gt("string",Pr._jsonSchemaVersion),vectorValues:gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=/^__.*__$/;class _A{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Is(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ma(e,this.data,t,this.fieldTransforms)}}function D_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ac:r})}}class tf{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new tf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Yc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(D_(this.Ac)&&mA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class yA{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Rl(e)}Cc(e,t,n,i=!1){return new tf({Ac:e,methodName:t,Dc:n,path:Nt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nf(r){const e=r._freezeSettings(),t=Rl(r._databaseId);return new yA(r._databaseId,!!e.ignoreUndefinedProperties,t)}function O_(r,e,t,n,i,s={}){const o=r.Cc(s.merge||s.mergeFields?2:0,e,t,i);V_("Data must be an object, but it was:",o,n);const a=x_(n,o);let l,u;if(s.merge)l=new ar(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const g=vA(e,p,t);if(!o.contains(g))throw new q(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);EA(h,g)||h.push(g)}l=new ar(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new _A(new Hn(a),l,u)}function TA(r,e,t,n=!1){return rf(t,r.Cc(n?4:3,e))}function rf(r,e){if(N_(r=It(r)))return V_("Unsupported field value:",e,r),x_(r,e);if(r instanceof k_)return function(n,i){if(!D_(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const a of n){let l=rf(a,i.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=It(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return a0(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ue.fromDate(n);return{timestampValue:jc(i.serializer,s)}}if(n instanceof Ue){const s=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jc(i.serializer,s)}}if(n instanceof Rr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Wn)return{bytesValue:e_(i.serializer,n._byteString)};if(n instanceof st){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mh(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Pr)return function(o,a){return{mapValue:{fields:{[Cm]:{stringValue:km},[Bc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Oh(a.serializer,u)})}}}}}}(n,i);throw i.Sc(`Unsupported field value: ${_l(n)}`)}(r,e)}function x_(r,e){const t={};return Im(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(r,(n,i)=>{const s=rf(i,e.mc(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function N_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ue||r instanceof Rr||r instanceof Wn||r instanceof st||r instanceof k_||r instanceof Pr)}function V_(r,e,t){if(!N_(t)||!wm(t)){const n=_l(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function vA(r,e,t){if((e=It(e))instanceof ef)return e._internalPath;if(typeof e=="string")return M_(r,e);throw Yc("Field path arguments must be of type string or ",r,!1,void 0,t)}const wA=new RegExp("[~\\*/\\[\\]]");function M_(r,e,t){if(e.search(wA)>=0)throw Yc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ef(...e.split("."))._internalPath}catch{throw Yc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Yc(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new q(F.INVALID_ARGUMENT,a+r+l)}function EA(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ol("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IA extends L_{data(){return super.data()}}function Ol(r,e){return typeof e=="string"?M_(r,e):e instanceof ef?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sf{}class U_ extends sf{}function rC(r,e,...t){let n=[];e instanceof sf&&n.push(e),n=n.concat(t),function(s){const o=s.filter(l=>l instanceof of).length,a=s.filter(l=>l instanceof xl).length;if(o>1||o>0&&a>0)throw new q(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class xl extends U_{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new xl(e,t,n)}_apply(e){const t=this._parse(e);return B_(e._query,t),new Li(e.firestore,e.converter,Fu(e._query,t))}_parse(e){const t=nf(e.firestore);return function(s,o,a,l,u,h,p){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Vp(p,h);const I=[];for(const w of p)I.push(Np(l,s,w));g={arrayValue:{values:I}}}else g=Np(l,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Vp(p,h),g=TA(a,o,p,h==="in"||h==="not-in");return pt.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function iC(r,e,t){const n=e,i=Ol("where",r);return xl._create(i,n,t)}class of extends sf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new of(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:hr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)B_(o,l),o=Fu(o,l)}(e._query,t),new Li(e.firestore,e.converter,Fu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class af extends U_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new af(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new q(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new va(s,o)}(e._query,this._field,this._direction);return new Li(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new vo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function sC(r,e="asc"){const t=e,n=Ol("orderBy",r);return af._create(n,t)}function Np(r,e,t){if(typeof(t=It(t))=="string"){if(t==="")throw new q(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fm(e)&&t.indexOf("/")!==-1)throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Ve.fromString(t));if(!W.isDocumentKey(n))throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Xd(r,new W(n))}if(t instanceof st)return Xd(r,t._key);throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_l(t)}.`)}function Vp(r,e){if(!Array.isArray(r)||r.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function B_(r,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class AA{convertValue(e,t="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ws(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){const t=e.fields?.[Bc].arrayValue?.values?.map(n=>rt(n.doubleValue));return new Pr(t)}convertGeoPoint(e){return new Rr(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=vl(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(_a(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new Ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ve.fromString(e);Ae(o_(n),9688,{name:e});const i=new ya(n.get(1),n.get(3)),s=new W(n.popFirst(5));return i.isEqual(t)||Wr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class qo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ts extends L_{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ol("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ts._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",ts._jsonSchema={type:gt("string",ts._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class Ec extends ts{data(e={}){return super.data(e)}}class ns{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new qo(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ec(this._firestore,this._userDataWriter,n.key,n,new qo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ec(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ec(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:SA(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(r){r=Xn(r,st);const e=Xn(r.firestore,Oi);return uA(Dl(e),r._key).then(t=>q_(e,r,t))}ns._jsonSchemaVersion="firestore/querySnapshot/1.0",ns._jsonSchema={type:gt("string",ns._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};class cf extends AA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function aC(r){r=Xn(r,Li);const e=Xn(r.firestore,Oi),t=Dl(e),n=new cf(e);return F_(r._query),hA(t,r._query).then(i=>new ns(e,n,r,i))}function cC(r,e,t){r=Xn(r,st);const n=Xn(r.firestore,Oi),i=z_(r.converter,e);return lf(n,[O_(nf(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,lr.none())])}function lC(r){return lf(Xn(r.firestore,Oi),[new xh(r._key,lr.none())])}function uC(r,e){const t=Xn(r.firestore,Oi),n=dA(r),i=z_(r.converter,e);return lf(t,[O_(nf(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,lr.exists(!1))]).then(()=>n)}function hC(r,...e){r=It(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||xp(e[n])||(t=e[n++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(xp(e[n])){const l=e[n];e[n]=l.next?.bind(l),e[n+1]=l.error?.bind(l),e[n+2]=l.complete?.bind(l)}let s,o,a;if(r instanceof st)o=Xn(r.firestore,Oi),a=wl(r._key.path),s={next:l=>{e[n]&&e[n](q_(o,r,l))},error:e[n+1],complete:e[n+2]};else{const l=Xn(r,Li);o=Xn(l.firestore,Oi),a=l._query;const u=new cf(o);s={next:h=>{e[n]&&e[n](new ns(o,u,l,h))},error:e[n+1],complete:e[n+2]},F_(r._query)}return function(u,h,p,g){const m=new Zh(g),I=new Xh(h,m,p);return u.asyncQueue.enqueueAndForget(async()=>Gh(await Kc(u),I)),()=>{m.Nu(),u.asyncQueue.enqueueAndForget(async()=>Kh(await Kc(u),I))}}(Dl(o),a,i,s)}function lf(r,e){return function(n,i){const s=new $r;return n.asyncQueue.enqueueAndForget(async()=>JI(await lA(n),i,s)),s.promise}(Dl(r),e)}function q_(r,e,t){const n=t.docs.get(e._key),i=new cf(r);return new ts(r,i,e._key,n,new qo(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){_o=i})(mo),Or(new ur("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new Oi(new TE(n.getProvider("auth-internal")),new EE(o,n.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ya(u.options.projectId,h)}(o,i),o);return s={useFetchStreams:t,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Yn(Ld,Fd,e),Yn(Ld,Fd,"esm2020")})();function $_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bA=$_,j_=new Ts("auth","Firebase",$_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new ml("@firebase/auth");function RA(r,...e){Xc.logLevel<=pe.WARN&&Xc.warn(`Auth (${mo}): ${r}`,...e)}function Ic(r,...e){Xc.logLevel<=pe.ERROR&&Xc.error(`Auth (${mo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(r,...e){throw uf(r,...e)}function Cr(r,...e){return uf(r,...e)}function H_(r,e,t){const n={...bA(),[e]:t};return new Ts("auth","Firebase",n).create(e,{appName:r.name})}function wi(r){return H_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uf(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return j_.create(r,...e)}function X(r,e,...t){if(!r)throw uf(e,...t)}function Br(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ic(e),new Error(e)}function Kr(r,e){r||Br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){return typeof self<"u"&&self.location?.href||""}function PA(){return Mp()==="http:"||Mp()==="https:"}function Mp(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PA()||rm()||"connection"in navigator)?navigator.onLine:!0}function kA(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kr(t>e,"Short delay should be less than long delay!"),this.isMobile=jv()||Gv()}get(){return CA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(r,e){Kr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xA=new Ba(3e4,6e4);function Ss(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Fi(r,e,t,n,i={}){return G_(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const a=Na({key:r.config.apiKey,...o}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const u={method:e,headers:l,...s};return Wv()||(u.referrerPolicy="no-referrer"),r.emulatorConfig&&go(r.emulatorConfig.host)&&(u.credentials="include"),W_.fetch()(await K_(r,r.config.apiHost,t,a),u)})}async function G_(r,e,t){r._canInitEmulator=!1;const n={...DA,...e};try{const i=new VA(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rc(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw rc(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw rc(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw rc(r,"user-disabled",o);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw H_(r,h,u);fr(r,h)}}catch(i){if(i instanceof dr)throw i;fr(r,"network-request-failed",{message:String(i)})}}async function Nl(r,e,t,n,i={}){const s=await Fi(r,e,t,n,i);return"mfaPendingCredential"in s&&fr(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function K_(r,e,t,n){const i=`${e}${t}?${n}`,s=r,o=s.config.emulator?hf(r.config,i):`${r.config.apiScheme}://${i}`;return OA.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function NA(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Cr(this.auth,"network-request-failed")),xA.get())})}}function rc(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Cr(r,e,n);return i.customData._tokenResponse=t,i}function Lp(r){return r!==void 0&&r.enterprise!==void 0}class MA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return NA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function LA(r,e){return Fi(r,"GET","/v2/recaptchaConfig",Ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(r,e){return Fi(r,"POST","/v1/accounts:delete",e)}async function Qc(r,e){return Fi(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UA(r,e=!1){const t=It(r),n=await t.getIdToken(e),i=ff(n);X(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:n,authTime:ta(au(i.auth_time)),issuedAtTime:ta(au(i.iat)),expirationTime:ta(au(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function au(r){return Number(r)*1e3}function ff(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Ic("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qg(t);return i?JSON.parse(i):(Ic("Failed to decode base64 JWT payload"),null)}catch(i){return Ic("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Fp(r){const e=ff(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof dr&&BA(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function BA({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ta(this.lastLoginAt),this.creationTime=ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(r){const e=r.auth,t=await r.getIdToken(),n=await Ia(r,Qc(e,{idToken:t}));X(n?.users.length,e,"internal-error");const i=n.users[0];r._notifyReloadListener(i);const s=i.providerUserInfo?.length?Y_(i.providerUserInfo):[],o=$A(r.providerData,s),a=r.isAnonymous,l=!(r.email&&i.passwordHash)&&!o?.length,u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Xu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(r,h)}async function qA(r){const e=It(r);await Jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $A(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Y_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(r,e){const t=await G_(r,{},async()=>{const n=Na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=await K_(r,i,"/v1/token",`key=${s}`),a=await r._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return r.emulatorConfig&&go(r.emulatorConfig.host)&&(l.credentials="include"),W_.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function HA(r,e){return Fi(r,"POST","/v2/accounts:revokeToken",Ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=Fp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await jA(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new js;return n&&(X(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class cr{constructor({uid:e,auth:t,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new zA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ia(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return UA(this,e)}reload(){return qA(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new cr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Jc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(or(this.auth.app))return Promise.reject(wi(this.auth));const e=await this.getIdToken();return await Ia(this,FA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:m,providerData:I,stsTokenManager:w}=t;X(p&&w,e,"internal-error");const S=js.fromJSON(this.name,w);X(typeof p=="string",e,"internal-error"),ii(n,e.name),ii(i,e.name),X(typeof g=="boolean",e,"internal-error"),X(typeof m=="boolean",e,"internal-error"),ii(s,e.name),ii(o,e.name),ii(a,e.name),ii(l,e.name),ii(u,e.name),ii(h,e.name);const D=new cr({uid:p,auth:e,email:i,emailVerified:g,displayName:n,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:S,createdAt:u,lastLoginAt:h});return I&&Array.isArray(I)&&(D.providerData=I.map(k=>({...k}))),l&&(D._redirectEventId=l),D}static async _fromIdTokenResponse(e,t,n=!1){const i=new js;i.updateFromServerResponse(t);const s=new cr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Jc(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Y_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new js;a.updateFromIdToken(n);const l=new cr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new Map;function zr(r){Kr(r instanceof Function,"Expected a class definition");let e=Up.get(r);return e?(Kr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Up.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}X_.type="NONE";const Bp=X_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(r,e,t){return`firebase:${r}:${e}:${t}`}class Hs{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Ac(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ac("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qc(this.auth,{idToken:e}).catch(()=>{});return t?cr._fromGetAccountInfoResponse(this.auth,t,e):null}return cr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Hs(zr(Bp),e,n);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zr(Bp);const o=Ac(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let p;if(typeof h=="string"){const g=await Qc(e,{idToken:h}).catch(()=>{});if(!g)break;p=await cr._fromGetAccountInfoResponse(e,g,h)}else p=cr._fromJSON(e,h);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Hs(s,e,n):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Hs(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ey(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ny(e))return"Blackberry";if(ry(e))return"Webos";if(J_(e))return"Safari";if((e.includes("chrome/")||Z_(e))&&!e.includes("edge/"))return"Chrome";if(ty(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function Q_(r=Yt()){return/firefox\//i.test(r)}function J_(r=Yt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z_(r=Yt()){return/crios\//i.test(r)}function ey(r=Yt()){return/iemobile/i.test(r)}function ty(r=Yt()){return/android/i.test(r)}function ny(r=Yt()){return/blackberry/i.test(r)}function ry(r=Yt()){return/webos/i.test(r)}function df(r=Yt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function WA(r=Yt()){return df(r)&&!!window.navigator?.standalone}function GA(){return Kv()&&document.documentMode===10}function iy(r=Yt()){return df(r)||ty(r)||ry(r)||ny(r)||/windows phone/i.test(r)||ey(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(r,e=[]){let t;switch(r){case"Browser":t=zp(Yt());break;case"Worker":t=`${zp(Yt())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mo}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(r,e={}){return Fi(r,"GET","/v2/passwordPolicy",Ss(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=6;class QA{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??XA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qp(this),this.idTokenSubscription=new qp(this),this.beforeStateQueue=new KA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qc(this,{idToken:e}),n=await cr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(or(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(or(this.app))return Promise.reject(wi(this));const t=e?It(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return or(this.app)?Promise.reject(wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return or(this.app)?Promise.reject(wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YA(this),t=new QA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await HA(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zr(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[zr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(or(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&RA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Eo(r){return It(r)}class qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=tw(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZA(r){Vl=r}function oy(r){return Vl.loadJS(r)}function eS(){return Vl.recaptchaEnterpriseScript}function tS(){return Vl.gapiScript}function nS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class rS{constructor(){this.enterprise=new iS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class iS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const sS="recaptcha-enterprise",ay="NO_RECAPTCHA";class oS{constructor(e){this.type=sS,this.auth=Eo(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{LA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new MA(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Lp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ay)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{n(this.auth).then(a=>{if(!t&&Lp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=eS();l.length!==0&&(l+=a),oy(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function $p(r,e,t,n=!1,i=!1){const s=new oS(r);let o;if(i)o=ay;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function jp(r,e,t,n,i){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $p(r,e,t,t==="getOobCode");return n(r,s)}else return n(r,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $p(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(r,e){const t=vs(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Si(s,e??{}))return i;fr(i,"already-initialized")}return t.initialize({options:e})}function cS(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(zr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function lS(r,e,t){const n=Eo(r);X(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=cy(e),{host:o,port:a}=uS(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){X(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),X(Si(u,n.config.emulator)&&Si(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,go(o)?(tm(`${s}//${o}${l}`),nm("Auth",!0)):hS()}function cy(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function uS(r){const e=cy(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Hp(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Hp(o)}}}function Hp(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function hS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}async function fS(r,e){return Fi(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(r,e){return Nl(r,"POST","/v1/accounts:signInWithPassword",Ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(r,e){return Nl(r,"POST","/v1/accounts:signInWithEmailLink",Ss(r,e))}async function gS(r,e){return Nl(r,"POST","/v1/accounts:signInWithEmailLink",Ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends pf{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Aa(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Aa(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jp(e,t,"signInWithPassword",dS);case"emailLink":return pS(e,{email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jp(e,n,"signUpPassword",fS);case"emailLink":return gS(e,{idToken:t,email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(r,e){return Nl(r,"POST","/v1/accounts:signInWithIdp",Ss(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="http://localhost";class ds extends pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...s}=t;if(!n||!i)return null;const o=new ds(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ws(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ws(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ws(e,t)}buildRequest(){const e={requestUri:mS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Na(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yS(r){const e=Lo(Fo(r)).link,t=e?Lo(Fo(e)).deep_link_id:null,n=Lo(Fo(r)).deep_link_id;return(n?Lo(Fo(n)).link:null)||n||t||e||r}class gf{constructor(e){const t=Lo(Fo(e)),n=t.apiKey??null,i=t.oobCode??null,s=_S(t.mode??null);X(n&&i&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=yS(e);try{return new gf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.providerId=Io.PROVIDER_ID}static credential(e,t){return Aa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=gf.parseLink(t);return X(n,"argument-error"),Aa._fromEmailAndCode(e,n.code,n.tenantId)}}Io.PROVIDER_ID="password";Io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends ly{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends za{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ci.credential(t,n)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends za{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends za{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ui.credential(t,n)}catch{return null}}}ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await cr._fromIdTokenResponse(e,n,i),o=Wp(n);return new oo({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Wp(n);return new oo({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Wp(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends dr{constructor(e,t,n,i){super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Zc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Zc(e,t,n,i)}}function uy(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zc._fromErrorAndOperation(r,s,e,n):s})}async function TS(r,e,t=!1){const n=await Ia(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return oo._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(r,e,t=!1){const{auth:n}=r;if(or(n.app))return Promise.reject(wi(n));const i="reauthenticate";try{const s=await Ia(r,uy(n,i,e,r),t);X(s.idToken,n,"internal-error");const o=ff(s.idToken);X(o,n,"internal-error");const{sub:a}=o;return X(r.uid===a,n,"user-mismatch"),oo._forOperation(r,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&fr(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(r,e,t=!1){if(or(r.app))return Promise.reject(wi(r));const n="signIn",i=await uy(r,n,e),s=await oo._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function wS(r,e){return hy(Eo(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(r){const e=Eo(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function fC(r,e,t){return or(r.app)?Promise.reject(wi(r)):wS(It(r),Io.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&ES(r),n})}function IS(r,e,t,n){return It(r).onIdTokenChanged(e,t,n)}function AS(r,e,t){return It(r).beforeAuthStateChanged(e,t)}function dC(r,e,t,n){return It(r).onAuthStateChanged(e,t,n)}function pC(r){return It(r).signOut()}const el="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(el,"1"),this.storage.removeItem(el),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=1e3,bS=10;class dy extends fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);GA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bS):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},SS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const RS=dy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}py.type="SESSION";const gy=py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Ml(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),l=await PS(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ml.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=mf("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return window}function kS(r){kr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(){return typeof kr().WorkerGlobalScope<"u"&&typeof kr().importScripts=="function"}async function DS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OS(){return navigator?.serviceWorker?.controller||null}function xS(){return my()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="firebaseLocalStorageDb",NS=1,tl="firebaseLocalStorage",yy="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ll(r,e){return r.transaction([tl],e?"readwrite":"readonly").objectStore(tl)}function VS(){const r=indexedDB.deleteDatabase(_y);return new qa(r).toPromise()}function Qu(){const r=indexedDB.open(_y,NS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(tl,{keyPath:yy})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(tl)?e(n):(n.close(),await VS(),e(await Qu()))})})}async function Gp(r,e,t){const n=Ll(r,!0).put({[yy]:e,value:t});return new qa(n).toPromise()}async function MS(r,e){const t=Ll(r,!1).get(e),n=await new qa(t).toPromise();return n===void 0?null:n.value}function Kp(r,e){const t=Ll(r,!0).delete(e);return new qa(t).toPromise()}const LS=800,FS=3;class Ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>FS)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return my()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ml._getInstance(xS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await DS(),!this.activeServiceWorker)return;this.sender=new CS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qu();return await Gp(e,el,"1"),await Kp(e,el),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gp(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>MS(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ll(i,!1).getAll();return new qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ty.type="LOCAL";const US=Ty;new Ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(r,e){return e?zr(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ws(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zS(r){return hy(r.auth,new _f(r),r.bypassAuthState)}function qS(r){const{auth:e,user:t}=r;return X(t,e,"internal-error"),vS(t,new _f(r),r.bypassAuthState)}async function $S(r){const{auth:e,user:t}=r;return X(t,e,"internal-error"),TS(t,new _f(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zS;case"linkViaPopup":case"linkViaRedirect":return $S;case"reauthViaPopup":case"reauthViaRedirect":return qS;default:fr(this.auth,"internal-error")}}resolve(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new Ba(2e3,1e4);class Us extends vy{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Kr(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jS.get())};e()}}Us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="pendingRedirect",Sc=new Map;class WS extends vy{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const n=await GS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GS(r,e){const t=XS(e),n=YS(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function KS(r,e){Sc.set(r._key(),e)}function YS(r){return zr(r._redirectPersistence)}function XS(r){return Ac(HS,r.config.apiKey,r.name)}async function QS(r,e,t=!1){if(or(r.app))return Promise.reject(wi(r));const n=Eo(r),i=BS(n,e),o=await new WS(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=10*60*1e3;class ZS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!wy(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Cr(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yp(e))}saveEventToCache(e){this.cachedEventUids.add(Yp(e)),this.lastProcessedEventTime=Date.now()}}function Yp(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function wy({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function eb(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wy(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(r,e={}){return Fi(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rb=/^https?/;async function ib(r){if(r.config.emulator)return;const{authorizedDomains:e}=await tb(r);for(const t of e)try{if(sb(t))return}catch{}fr(r,"unauthorized-domain")}function sb(r){const e=Yu(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!rb.test(t))return!1;if(nb.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new Ba(3e4,6e4);function Xp(){const r=kr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function ab(r){return new Promise((e,t)=>{function n(){Xp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xp(),t(Cr(r,"network-request-failed"))},timeout:ob.get()})}if(kr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(kr().gapi?.load)n();else{const i=nS("iframefcb");return kr()[i]=()=>{gapi.load?n():t(Cr(r,"network-request-failed"))},oy(`${tS()}?onload=${i}`).catch(s=>t(s))}}).catch(e=>{throw bc=null,e})}let bc=null;function cb(r){return bc=bc||ab(r),bc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new Ba(5e3,15e3),ub="__/auth/iframe",hb="emulator/auth/iframe",fb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},db=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pb(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?hf(e,hb):`https://${r.config.authDomain}/${ub}`,n={apiKey:e.apiKey,appName:r.name,v:mo},i=db.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Na(n).slice(1)}`}async function gb(r){const e=await cb(r),t=kr().gapi;return X(t,r,"internal-error"),e.open({where:document.body,url:pb(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fb,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Cr(r,"network-request-failed"),a=kr().setTimeout(()=>{s(o)},lb.get());function l(){kr().clearTimeout(a),i(n)}n.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_b=500,yb=600,Tb="_blank",vb="http://localhost";class Qp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wb(r,e,t,n=_b,i=yb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l={...mb,width:n.toString(),height:i.toString(),top:s,left:o},u=Yt().toLowerCase();t&&(a=Z_(u)?Tb:t),Q_(u)&&(e=e||vb,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[m,I])=>`${g}${m}=${I},`,"");if(WA(u)&&a!=="_self")return Eb(e||"",a),new Qp(null);const p=window.open(e||"",a,h);X(p,r,"popup-blocked");try{p.focus()}catch{}return new Qp(p)}function Eb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="__/auth/handler",Ab="emulator/auth/handler",Sb=encodeURIComponent("fac");async function Jp(r,e,t,n,i,s){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:mo,eventId:i};if(e instanceof ly){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",ew(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof za){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await r._getAppCheckToken(),u=l?`#${Sb}=${encodeURIComponent(l)}`:"";return`${bb(r)}?${Na(a).slice(1)}${u}`}function bb({config:r}){return r.emulator?hf(r,Ab):`https://${r.authDomain}/${Ib}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="webStorageSupport";class Rb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gy,this._completeRedirectFn=QS,this._overrideRedirectResult=KS}async _openPopup(e,t,n,i){Kr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Jp(e,t,n,Yu(),i);return wb(e,s,mf())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Jp(e,t,n,Yu(),i);return kS(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Kr(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await gb(e),n=new ZS(e);return t.register("authEvent",i=>(X(i?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cu,{type:cu},i=>{const s=i?.[0]?.[cu];s!==void 0&&t(!!s),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ib(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return iy()||J_()||df()}}const Pb=Rb;var Zp="@firebase/auth",eg="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Db(r){Or(new ur("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sy(r)},u=new JA(n,i,s,l);return cS(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Or(new ur("auth-internal",e=>{const t=Eo(e.getProvider("auth").getImmediate());return(n=>new Cb(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(Zp,eg,kb(r)),Yn(Zp,eg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=5*60,xb=em("authIdTokenMaxAge")||Ob;let tg=null;const Nb=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>xb)return;const i=t?.token;tg!==i&&(tg=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vb(r=Ah()){const e=vs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=aS(r,{popupRedirectResolver:Pb,persistence:[US,RS,gy]}),n=em("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=Nb(s.toString());AS(t,o,()=>o(t.currentUser)),IS(t,a=>o(a))}}const i=Jg("auth");return i&&lS(t,`http://${i}`),t}function Mb(){return document.getElementsByTagName("head")?.[0]??document}ZA({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Cr("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",Mb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Db("Browser");const Ey="@firebase/installations",yf="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=1e4,Ay=`w:${yf}`,Sy="FIS_v2",Lb="https://firebaseinstallations.googleapis.com/v1",Fb=60*60*1e3,Ub="installations",Bb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ps=new Ts(Ub,Bb,zb);function by(r){return r instanceof dr&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry({projectId:r}){return`${Lb}/projects/${r}/installations`}function Py(r){return{token:r.token,requestStatus:2,expiresIn:$b(r.expiresIn),creationTime:Date.now()}}async function Cy(r,e){const n=(await e.json()).error;return ps.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ky({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function qb(r,{refreshToken:e}){const t=ky(r);return t.append("Authorization",jb(e)),t}async function Dy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function $b(r){return Number(r.replace("s","000"))}function jb(r){return`${Sy} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const n=Ry(r),i=ky(r),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:t,authVersion:Sy,appId:r.appId,sdkVersion:Ay},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Dy(()=>fetch(n,a));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Py(u.authToken)}}else throw await Cy("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^[cdef][\w-]{21}$/,Ju="";function Kb(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=Yb(r);return Gb.test(t)?t:Ju}catch{return Ju}}function Yb(r){return Wb(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Map;function Ny(r,e){const t=Fl(r);Vy(t,e),Xb(t,e)}function Vy(r,e){const t=xy.get(r);if(t)for(const n of t)n(e)}function Xb(r,e){const t=Qb();t&&t.postMessage({key:r,fid:e}),Jb()}let Ji=null;function Qb(){return!Ji&&"BroadcastChannel"in self&&(Ji=new BroadcastChannel("[Firebase] FID Change"),Ji.onmessage=r=>{Vy(r.data.key,r.data.fid)}),Ji}function Jb(){xy.size===0&&Ji&&(Ji.close(),Ji=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="firebase-installations-database",eR=1,gs="firebase-installations-store";let lu=null;function Tf(){return lu||(lu=cm(Zb,eR,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(gs)}}})),lu}async function nl(r,e){const t=Fl(r),i=(await Tf()).transaction(gs,"readwrite"),s=i.objectStore(gs),o=await s.get(t);return await s.put(e,t),await i.done,(!o||o.fid!==e.fid)&&Ny(r,e.fid),e}async function My(r){const e=Fl(r),n=(await Tf()).transaction(gs,"readwrite");await n.objectStore(gs).delete(e),await n.done}async function Ul(r,e){const t=Fl(r),i=(await Tf()).transaction(gs,"readwrite"),s=i.objectStore(gs),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&Ny(r,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(r){let e;const t=await Ul(r.appConfig,n=>{const i=tR(n),s=nR(r,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Ju?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function tR(r){const e=r||{fid:Kb(),registrationStatus:0};return Ly(e)}function nR(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ps.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=rR(r,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iR(r)}:{installationEntry:e}}async function rR(r,e){try{const t=await Hb(r,e);return nl(r.appConfig,t)}catch(t){throw by(t)&&t.customData.serverCode===409?await My(r.appConfig):await nl(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function iR(r){let e=await ng(r.appConfig);for(;e.registrationStatus===1;)await Oy(100),e=await ng(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await vf(r);return n||t}return e}function ng(r){return Ul(r,e=>{if(!e)throw ps.create("installation-not-found");return Ly(e)})}function Ly(r){return sR(r)?{fid:r.fid,registrationStatus:0}:r}function sR(r){return r.registrationStatus===1&&r.registrationTime+Iy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR({appConfig:r,heartbeatServiceProvider:e},t){const n=aR(r,t),i=qb(r,t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ay,appId:r.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Dy(()=>fetch(n,a));if(l.ok){const u=await l.json();return Py(u)}else throw await Cy("Generate Auth Token",l)}function aR(r,{fid:e}){return`${Ry(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(r,e=!1){let t;const n=await Ul(r.appConfig,s=>{if(!Fy(s))throw ps.create("not-registered");const o=s.authToken;if(!e&&uR(o))return s;if(o.requestStatus===1)return t=cR(r,e),s;{if(!navigator.onLine)throw ps.create("app-offline");const a=fR(s);return t=lR(r,a),a}});return t?await t:n.authToken}async function cR(r,e){let t=await rg(r.appConfig);for(;t.authToken.requestStatus===1;)await Oy(100),t=await rg(r.appConfig);const n=t.authToken;return n.requestStatus===0?wf(r,e):n}function rg(r){return Ul(r,e=>{if(!Fy(e))throw ps.create("not-registered");const t=e.authToken;return dR(t)?{...e,authToken:{requestStatus:0}}:e})}async function lR(r,e){try{const t=await oR(r,e),n={...e,authToken:t};return await nl(r.appConfig,n),t}catch(t){if(by(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await My(r.appConfig);else{const n={...e,authToken:{requestStatus:0}};await nl(r.appConfig,n)}throw t}}function Fy(r){return r!==void 0&&r.registrationStatus===2}function uR(r){return r.requestStatus===2&&!hR(r)}function hR(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+Fb}function fR(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function dR(r){return r.requestStatus===1&&r.requestTime+Iy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(r){const e=r,{installationEntry:t,registrationPromise:n}=await vf(e);return n?n.catch(console.error):wf(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(r,e=!1){const t=r;return await mR(t),(await wf(t,e)).token}async function mR(r){const{registrationPromise:e}=await vf(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(r){if(!r||!r.options)throw uu("App Configuration");if(!r.name)throw uu("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw uu(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function uu(r){return ps.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="installations",yR="installations-internal",TR=r=>{const e=r.getProvider("app").getImmediate(),t=_R(e),n=vs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},vR=r=>{const e=r.getProvider("app").getImmediate(),t=vs(e,Uy).getImmediate();return{getId:()=>pR(t),getToken:i=>gR(t,i)}};function wR(){Or(new ur(Uy,TR,"PUBLIC")),Or(new ur(yR,vR,"PRIVATE"))}wR();Yn(Ey,yf);Yn(Ey,yf,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="analytics",ER="firebase_id",IR="origin",AR=60*1e3,SR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ef="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new ml("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nn=new Ts("analytics","Analytics",bR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(r){if(!r.startsWith(Ef)){const e=Nn.create("invalid-gtag-resource",{gtagURL:r});return sn.warn(e.message),""}return r}function By(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function PR(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function CR(r,e){const t=PR("firebase-js-sdk-policy",{createScriptURL:RR}),n=document.createElement("script"),i=`${Ef}?l=${r}&id=${e}`;n.src=t?t?.createScriptURL(i):i,n.async=!0,document.head.appendChild(n)}function kR(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function DR(r,e,t,n,i,s){const o=n[i];try{if(o)await e[o];else{const l=(await By(t)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){sn.error(a)}r("config",i,s)}async function OR(r,e,t,n,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await By(t);for(const l of o){const u=a.find(p=>p.measurementId===l),h=u&&e[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),r("event",n,i||{})}catch(s){sn.error(s)}}function xR(r,e,t,n){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await OR(r,e,t,a,l)}else if(s==="config"){const[a,l]=o;await DR(r,e,t,n,a,l)}else if(s==="consent"){const[a,l]=o;r("consent",a,l)}else if(s==="get"){const[a,l,u]=o;r("get",a,l,u)}else if(s==="set"){const[a]=o;r("set",a)}else r(s,...o)}catch(a){sn.error(a)}}return i}function NR(r,e,t,n,i){let s=function(...o){window[n].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=xR(s,r,e,t),{gtagCore:s,wrappedGtag:window[i]}}function VR(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ef)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=30,LR=1e3;class FR{constructor(e={},t=LR){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zy=new FR;function UR(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function BR(r){const{appId:e,apiKey:t}=r,n={method:"GET",headers:UR(t)},i=SR.replace("{app-id}",e),s=await fetch(i,n);if(s.status!==200&&s.status!==304){let o="";try{const a=await s.json();a.error?.message&&(o=a.error.message)}catch{}throw Nn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function zR(r,e=zy,t){const{appId:n,apiKey:i,measurementId:s}=r.options;if(!n)throw Nn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:n};throw Nn.create("no-api-key")}const o=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jR;return setTimeout(async()=>{a.abort()},AR),qy({appId:n,apiKey:i,measurementId:s},o,a,e)}async function qy(r,{throttleEndTimeMillis:e,backoffCount:t},n,i=zy){const{appId:s,measurementId:o}=r;try{await qR(n,e)}catch(a){if(o)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:s,measurementId:o};throw a}try{const a=await BR(r);return i.deleteThrottleMetadata(s),a}catch(a){const l=a;if(!$R(l)){if(i.deleteThrottleMetadata(s),o)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:o};throw a}const u=Number(l?.customData?.httpStatus)===503?Rd(t,i.intervalMillis,MR):Rd(t,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return i.setThrottleMetadata(s,h),sn.debug(`Calling attemptFetch again in ${u} millis`),qy(r,h,n,i)}}function qR(r,e){return new Promise((t,n)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);r.addEventListener(()=>{clearTimeout(s),n(Nn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $R(r){if(!(r instanceof dr)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class jR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HR(r,e,t,n,i){if(i&&i.global){r("event",t,n);return}else{const s=await e,o={...n,send_to:s};r("event",t,o)}}async function WR(r,e,t,n){if(n&&n.global){const i={};for(const s of Object.keys(t))i[`user_properties.${s}`]=t[s];return r("set",i),Promise.resolve()}else{const i=await e;r("config",i,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(){if(im())try{await sm()}catch(r){return sn.warn(Nn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return sn.warn(Nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function KR(r,e,t,n,i,s,o){const a=zR(r);a.then(g=>{t[g.measurementId]=g.appId,r.options.measurementId&&g.measurementId!==r.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>sn.error(g)),e.push(a);const l=GR().then(g=>{if(g)return n.getId()}),[u,h]=await Promise.all([a,l]);VR(s)||CR(s,u.measurementId),i("js",new Date);const p=o?.config??{};return p[IR]="firebase",p.update=!0,h!=null&&(p[ER]=h),i("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.app=e}_delete(){return delete Gs[this.app.options.appId],Promise.resolve()}}let Gs={},ig=[];const sg={};let hu="dataLayer",XR="gtag",og,If,ag=!1;function QR(){const r=[];if(rm()&&r.push("This is a browser extension environment."),Xv()||r.push("Cookies are not available."),r.length>0){const e=r.map((n,i)=>`(${i+1}) ${n}`).join(" "),t=Nn.create("invalid-analytics-context",{errorInfo:e});sn.warn(t.message)}}function JR(r,e,t){QR();const n=r.options.appId;if(!n)throw Nn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nn.create("no-api-key");if(Gs[n]!=null)throw Nn.create("already-exists",{id:n});if(!ag){kR(hu);const{wrappedGtag:s,gtagCore:o}=NR(Gs,ig,sg,hu,XR);If=s,og=o,ag=!0}return Gs[n]=KR(r,ig,sg,e,og,hu,t),new YR(r)}function ZR(r=Ah()){r=It(r);const e=vs(r,rl);return e.isInitialized()?e.getImmediate():e1(r)}function e1(r,e={}){const t=vs(r,rl);if(t.isInitialized()){const i=t.getImmediate();if(Si(e,t.getOptions()))return i;throw Nn.create("already-initialized")}return t.initialize({options:e})}function t1(r,e,t){r=It(r),WR(If,Gs[r.app.options.appId],e,t).catch(n=>sn.error(n))}function n1(r,e,t,n){r=It(r),HR(If,Gs[r.app.options.appId],e,t,n).catch(i=>sn.error(i))}const cg="@firebase/analytics",lg="0.10.19";function r1(){Or(new ur(rl,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return JR(n,i,t)},"PUBLIC")),Or(new ur("analytics-internal",r,"PRIVATE")),Yn(cg,lg),Yn(cg,lg,"esm2020");function r(e){try{const t=e.getProvider(rl).getImmediate();return{logEvent:(n,i,s)=>n1(t,n,i,s),setUserProperties:(n,i)=>t1(t,n,i)}}catch(t){throw Nn.create("interop-component-reg-failed",{reason:t})}}}r1();const i1={apiKey:"AIzaSyBibVyflJlGXHnYlZ7EjgXNX-aSMVFRINc",authDomain:"olhar-o-sol.firebaseapp.com",projectId:"olhar-o-sol",storageBucket:"olhar-o-sol.firebasestorage.app",messagingSenderId:"351435118169",appId:"1:351435118169:web:c7a016e430c60e5d6a8348",measurementId:"G-4FDQG2RR53"},Af=lm(i1),gC=pA(Af),mC=Vb(Af);typeof window<"u"&&ZR(Af);function Lr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $y(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ao={duration:.5,overwrite:!1,delay:0},Sf,Mt,We,Gn=1e8,Oe=1/Gn,Zu=Math.PI*2,s1=Zu/4,o1=0,jy=Math.sqrt,a1=Math.cos,c1=Math.sin,kt=function(e){return typeof e=="string"},et=function(e){return typeof e=="function"},Yr=function(e){return typeof e=="number"},bf=function(e){return typeof e>"u"},Nr=function(e){return typeof e=="object"},gn=function(e){return e!==!1},Rf=function(){return typeof window<"u"},ic=function(e){return et(e)||kt(e)},Hy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Kt=Array.isArray,l1=/random\([^)]+\)/g,u1=/,\s*/g,ug=/(?:-?\.?\d|\.)+/gi,Wy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gy=/[+-]=-?[.\d]+/,h1=/[^,'"\[\]\s]+/gi,f1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ye,vr,eh,Pf,Mn={},il={},Ky,Yy=function(e){return(il=co(e,Mn))&&Tn},Cf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Sa=function(e,t){return!t&&console.warn(e)},Xy=function(e,t){return e&&(Mn[e]=t)&&il&&(il[e]=t)||Mn},ba=function(){return 0},d1={suppressEvents:!0,isStart:!0,kill:!1},Rc={suppressEvents:!0,kill:!1},p1={suppressEvents:!0},kf={},Ei=[],th={},Qy,Pn={},du={},hg=30,Pc=[],Df="",Of=function(e){var t=e[0],n,i;if(Nr(t)||et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Pc.length;i--&&!Pc[i].targetTest(t););n=Pc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new wT(e[i],n)))||e.splice(i,1);return e},rs=function(e){return e._gsap||Of(Kn(e))[0]._gsap},Jy=function(e,t,n){return(n=e[t])&&et(n)?e[t]():bf(n)&&e.getAttribute&&e.getAttribute(t)||n},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},it=function(e){return Math.round(e*1e5)/1e5||0},Ke=function(e){return Math.round(e*1e7)/1e7||0},Ks=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},g1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},sl=function(){var e=Ei.length,t=Ei.slice(0),n,i;for(th={},Ei.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xf=function(e){return!!(e._initted||e._startAt||e.add)},Zy=function(e,t,n,i){Ei.length&&!Mt&&sl(),e.render(t,n,!!(Mt&&t<0&&xf(e))),Ei.length&&!Mt&&sl()},eT=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(h1).length<2?t:kt(e)?e.trim():e},tT=function(e){return e},Ln=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},m1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},co=function(e,t){for(var n in t)e[n]=t[n];return e},fg=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Nr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ol=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},na=function(e){var t=e.parent||Ye,n=e.keyframes?m1(Kt(e.keyframes)):Ln;if(gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},_1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},nT=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Bl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},xi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},y1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nh=function(e,t,n,i){return e._startAt&&(Mt?e._startAt.revert(Rc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},T1=function r(e){return!e||e._ts&&r(e.parent)},dg=function(e){return e._repeat?lo(e._tTime,e=e.duration()+e._rDelay)*e:0},lo=function(e,t){var n=Math.floor(e=Ke(e/t));return e&&n===e?n-1:n},al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zl=function(e){return e._end=Ke(e._start+(e._tDur/Math.abs(e._ts||e._rts||Oe)||0))},ql=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ke(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zl(e),n._dirty||is(n,e)),e},rT=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=al(e.rawTime(),t),(!t._dur||$a(0,t.totalDuration(),n)-t._tTime>Oe)&&t.render(n,!0)),is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Oe}},Er=function(e,t,n,i){return t.parent&&xi(t),t._start=Ke((Yr(n)?n:n||e!==Ye?qn(e,n,t):e._time)+t._delay),t._end=Ke(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nT(e,t,"_first","_last",e._sort?"_start":0),rh(t)||(e._recent=t),i||rT(e,t),e._ts<0&&ql(e,e._tTime),e},iT=function(e,t){return(Mn.ScrollTrigger||Cf("scrollTrigger",t))&&Mn.ScrollTrigger.create(t,e)},sT=function(e,t,n,i,s){if(Vf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Mt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qy!==kn.frame)return Ei.push(e),e._lazy=[s,i],1},v1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},rh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},w1=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&v1(e)&&!(!e._initted&&rh(e))||(e._ts<0||e._dp._ts<0)&&!rh(e))?0:1,a=e._rDelay,l=0,u,h,p;if(a&&e._repeat&&(l=$a(0,e._tDur,t),h=lo(l,a),e._yoyo&&h&1&&(o=1-o),h!==lo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mt||i||e._zTime===Oe||!t&&e._zTime){if(!e._initted&&sT(e,t,i,n,l))return;for(p=e._zTime,e._zTime=t||(n?Oe:0),n||(n=t&&!p),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&nh(e,t,n,!0),e._onUpdate&&!n&&On(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&On(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&xi(e,1),!n&&!Mt&&(On(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},E1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},uo=function(e,t,n,i){var s=e._repeat,o=Ke(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ke(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ql(e,e._tTime=e._tDur*a),e.parent&&zl(e),n||is(e.parent,e),e},pg=function(e){return e instanceof nn?is(e):uo(e,e._dur)},I1={_start:0,endTime:ba,totalDuration:ba},qn=function r(e,t,n){var i=e.labels,s=e._recent||I1,o=e.duration()>=Gn?s.endTime(!1):e._dur,a,l,u;return kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&n&&(l=l/100*(Kt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ra=function(e,t,n){var i=Yr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=gn(l.vars.inherit)&&l.parent;o.immediateRender=gn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new dt(t[0],o,t[s+1])},Ui=function(e,t){return e||e===0?t(e):t},$a=function(e,t,n){return n<e?e:n>t?t:n},Wt=function(e,t){return!kt(e)||!(t=f1.exec(e))?"":t[1]},A1=function(e,t,n){return Ui(n,function(i){return $a(e,t,i)})},ih=[].slice,oT=function(e,t){return e&&Nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Nr(e[0]))&&!e.nodeType&&e!==vr},S1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return kt(i)&&!t||oT(i,1)?(s=n).push.apply(s,Kn(i)):n.push(i)})||n},Kn=function(e,t,n){return We&&!t&&We.selector?We.selector(e):kt(e)&&!n&&(eh||!ho())?ih.call((t||Pf).querySelectorAll(e),0):Kt(e)?S1(e,n):oT(e)?ih.call(e,0):e?[e]:[]},sh=function(e){return e=Kn(e)[0]||Sa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Kn(t,n.querySelectorAll?n:n===e?Sa("Invalid scope")||Pf.createElement("div"):e)}},aT=function(e){return e.sort(function(){return .5-Math.random()})},cT=function(e){if(et(e))return e;var t=Nr(e)?e:{each:e},n=ss(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,u=t.axis,h=i,p=i;return kt(i)?h=p={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],p=i[1]),function(g,m,I){var w=(I||t).length,S=o[w],D,k,N,O,M,L,v,y,_;if(!S){if(_=t.grid==="auto"?0:(t.grid||[1,Gn])[1],!_){for(v=-Gn;v<(v=I[_++].getBoundingClientRect().left)&&_<w;);_<w&&_--}for(S=o[w]=[],D=l?Math.min(_,w)*h-.5:i%_,k=_===Gn?0:l?w*p/_-.5:i/_|0,v=0,y=Gn,L=0;L<w;L++)N=L%_-D,O=k-(L/_|0),S[L]=M=u?Math.abs(u==="y"?O:N):jy(N*N+O*O),M>v&&(v=M),M<y&&(y=M);i==="random"&&aT(S),S.max=v-y,S.min=y,S.v=w=(parseFloat(t.amount)||parseFloat(t.each)*(_>w?w-1:u?u==="y"?w/_:_:Math.max(_,w/_))||0)*(i==="edges"?-1:1),S.b=w<0?s-w:s,S.u=Wt(t.amount||t.each)||0,n=n&&w<0?yT(n):n}return w=(S[g]-S.min)/S.max||0,Ke(S.b+(n?n(w):w)*S.v)+S.u}},oh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ke(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Yr(n)?0:Wt(n))}},lT=function(e,t){var n=Kt(e),i,s;return!n&&Nr(e)&&(i=n=e.radius||Gn,e.values?(e=Kn(e.values),(s=!Yr(e[0]))&&(i*=i)):e=oh(e.increment)),Ui(t,n?et(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Gn,h=0,p=e.length,g,m;p--;)s?(g=e[p].x-a,m=e[p].y-l,g=g*g+m*m):g=Math.abs(e[p]-a),g<u&&(u=g,h=p);return h=!i||u<=i?e[h]:o,s||h===o||Yr(o)?h:h+Wt(o)}:oh(e))},uT=function(e,t,n,i){return Ui(Kt(e)?!t:n===!0?!!(n=0):!i,function(){return Kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},b1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},R1=function(e,t){return function(n){return e(parseFloat(n))+(t||Wt(n))}},P1=function(e,t,n){return fT(e,t,0,1,n)},hT=function(e,t,n){return Ui(n,function(i){return e[~~t(i)]})},C1=function r(e,t,n){var i=t-e;return Kt(e)?hT(e,r(0,e.length),t):Ui(n,function(s){return(i+(s-e)%i)%i+e})},k1=function r(e,t,n){var i=t-e,s=i*2;return Kt(e)?hT(e,r(0,e.length-1),t):Ui(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ra=function(e){return e.replace(l1,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(u1);return uT(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},fT=function(e,t,n,i,s){var o=t-e,a=i-n;return Ui(s,function(l){return n+((l-e)/o*a||0)})},D1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=kt(e),a={},l,u,h,p,g;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Kt(e)&&!Kt(t)){for(h=[],p=e.length,g=p-2,u=1;u<p;u++)h.push(r(e[u-1],e[u]));p--,s=function(I){I*=p;var w=Math.min(g,~~I);return h[w](I-w)},n=t}else i||(e=co(Kt(e)?[]:{},e));if(!h){for(l in t)Nf.call(a,e,l,"get",t[l]);s=function(I){return Ff(I,a)||(o?e.p:e)}}}return Ui(n,s)},gg=function(e,t,n){var i=e.labels,s=Gn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},On=function(e,t,n){var i=e.vars,s=i[t],o=We,a=e._ctx,l,u,h;if(s)return l=i[t+"Params"],u=i.callbackScope||e,n&&Ei.length&&sl(),a&&(We=a),h=l?s.apply(u,l):s.call(u),We=o,h},$o=function(e){return xi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mt),e.progress()<1&&On(e,"onInterrupt"),e},zs,dT=[],pT=function(e){if(e)if(e=!e.name&&e.default||e,Rf()||e.headless){var t=e.name,n=et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ba,render:Ff,add:Nf,kill:G1,modifier:W1,rawVars:0},o={targetTest:0,get:0,getSetter:Lf,aliases:{},register:0};if(ho(),e!==i){if(Pn[t])return;Ln(i,Ln(ol(e,s),o)),co(i.prototype,co(s,ol(e,o))),Pn[i.prop=t]=i,e.targetTest&&(Pc.push(i),kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Xy(t,i),e.register&&e.register(Tn,i,_n)}else dT.push(e)},De=255,jo={aqua:[0,De,De],lime:[0,De,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,De],navy:[0,0,128],white:[De,De,De],olive:[128,128,0],yellow:[De,De,0],orange:[De,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[De,0,0],pink:[De,192,203],cyan:[0,De,De],transparent:[De,De,De,0]},pu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*De+.5|0},gT=function(e,t,n){var i=e?Yr(e)?[e>>16,e>>8&De,e&De]:0:jo.black,s,o,a,l,u,h,p,g,m,I;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),jo[e])i=jo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&De,i&De,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&De,e&De]}else if(e.substr(0,3)==="hsl"){if(i=I=e.match(ug),!t)l=+i[0]%360/360,u=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(u+1):h+u-h*u,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=pu(l+1/3,s,o),i[1]=pu(l,s,o),i[2]=pu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Wy),n&&i.length<4&&(i[3]=1),i}else i=e.match(ug)||jo.transparent;i=i.map(Number)}return t&&!I&&(s=i[0]/De,o=i[1]/De,a=i[2]/De,p=Math.max(s,o,a),g=Math.min(s,o,a),h=(p+g)/2,p===g?l=u=0:(m=p-g,u=h>.5?m/(2-p-g):m/(p+g),l=p===s?(o-a)/m+(o<a?6:0):p===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},mT=function(e){var t=[],n=[],i=-1;return e.split(Ii).forEach(function(s){var o=s.match(Bs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},mg=function(e,t,n){var i="",s=(e+i).match(Ii),o=t?"hsla(":"rgba(",a=0,l,u,h,p;if(!s)return e;if(s=s.map(function(g){return(g=gT(g,t,1))&&o+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(h=mT(e),l=n.c,l.join(i)!==h.c.join(i)))for(u=e.replace(Ii,"1").split(Bs),p=u.length-1;a<p;a++)i+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!u)for(u=e.split(Ii),p=u.length-1;a<p;a++)i+=u[a]+s[a];return i+u[p]},Ii=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in jo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),O1=/hsl[a]?\(/,_T=function(e){var t=e.join(" "),n;if(Ii.lastIndex=0,Ii.test(t))return n=O1.test(t),e[1]=mg(e[1],n),e[0]=mg(e[0],n,mT(e[1])),!0},Pa,kn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,u,h,p,g,m,I=function w(S){var D=r()-i,k=S===!0,N,O,M,L;if((D>e||D<0)&&(n+=D-t),i+=D,M=i-n,N=M-o,(N>0||k)&&(L=++p.frame,g=M-p.time*1e3,p.time=M=M/1e3,o+=N+(N>=s?4:s-N),O=1),k||(l=u(w)),O)for(m=0;m<a.length;m++)a[m](M,g,L,S)};return p={time:0,frame:0,tick:function(){I(!0)},deltaRatio:function(S){return g/(1e3/(S||60))},wake:function(){Ky&&(!eh&&Rf()&&(vr=eh=window,Pf=vr.document||{},Mn.gsap=Tn,(vr.gsapVersions||(vr.gsapVersions=[])).push(Tn.version),Yy(il||vr.GreenSockGlobals||!vr.gsap&&vr||{}),dT.forEach(pT)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&p.sleep(),u=h||function(S){return setTimeout(S,o-p.time*1e3+1|0)},Pa=1,I(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Pa=0,u=ba},lagSmoothing:function(S,D){e=S||1/0,t=Math.min(D||33,e)},fps:function(S){s=1e3/(S||240),o=p.time*1e3+s},add:function(S,D,k){var N=D?function(O,M,L,v){S(O,M,L,v),p.remove(N)}:S;return p.remove(S),a[k?"unshift":"push"](N),ho(),N},remove:function(S,D){~(D=a.indexOf(S))&&a.splice(D,1)&&m>=D&&m--},_listeners:a},p}(),ho=function(){return!Pa&&kn.wake()},_e={},x1=/^[\d.\-M][\d.\-,\s]/,N1=/["']/g,V1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,u;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[i]=isNaN(u)?u.replace(N1,"").trim():+u,i=l.substr(a+1).trim();return t},M1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},L1=function(e){var t=(e+"").split("("),n=_e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[V1(t[1])]:M1(e).split(",").map(eT)):_e._CE&&x1.test(e)?_e._CE("",e):n},yT=function(e){return function(t){return 1-e(1-t)}},TT=function r(e,t){for(var n=e._first,i;n;)n instanceof nn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ss=function(e,t){return e&&(et(e)?e:_e[e]||L1(e))||t},bs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return mn(e,function(a){_e[a]=Mn[a]=s,_e[o=a.toLowerCase()]=n;for(var l in s)_e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_e[a+"."+l]=s[l]}),s},vT=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},gu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Zu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*c1((h-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:vT(a);return s=Zu/s,l.config=function(u,h){return r(e,u,h)},l},mu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:vT(n);return i.config=function(s){return r(e,s)},i};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;bs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_e.Linear.easeNone=_e.none=_e.Linear.easeIn;bs("Elastic",gu("in"),gu("out"),gu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};bs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);bs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});bs("Circ",function(r){return-(jy(1-r*r)-1)});bs("Sine",function(r){return r===1?1:-a1(r*s1)+1});bs("Back",mu("in"),mu("out"),mu());_e.SteppedEase=_e.steps=Mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Oe;return function(a){return((i*$a(0,o,a)|0)+s)*n}}};ao.ease=_e["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Df+=r+","+r+"Params,"});var wT=function(e,t){this.id=o1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jy,this.set=t?t.getSetter:Lf},Ca=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,uo(this,+t.duration,1,1),this.data=t.data,We&&(this._ctx=We,We.data.push(this)),Pa||kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,uo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ho(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ql(this,n),!s._dp||s.parent||rT(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Er(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Oe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zy(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+dg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+dg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?lo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Oe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Oe?0:this._rts,this.totalTime($a(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),zl(this),y1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ho(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Oe&&(this._tTime-=Oe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ke(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Er(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?al(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=p1);var i=Mt;return Mt=n,xf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qn(this,n),gn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,gn(i)),this._dur||(this._zTime=-Oe),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Oe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Oe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Oe)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=et(n)?n:tT,l=function(){var h=i.then;i.then=null,s&&s(),et(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){$o(this)},r}();Ln(Ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Oe,_prom:0,_ps:!1,_rts:1});var nn=function(r){$y(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=gn(n.sortChildren),Ye&&Er(n.parent||Ye,Lr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&iT(Lr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ra(0,arguments,this),this},t.from=function(i,s,o){return ra(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ra(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,na(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dt(i,s,qn(this,o),1),this},t.call=function(i,s,o){return Er(this,dt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,u,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=h,o.parent=this,new dt(i,o,qn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,u,h){return o.runBackwards=1,na(o).immediateRender=gn(o.immediateRender),this.staggerTo(i,s,o,a,l,u,h)},t.staggerFromTo=function(i,s,o,a,l,u,h,p){return a.startAt=o,na(a).immediateRender=gn(a.immediateRender),this.staggerTo(i,s,a,l,u,h,p)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=i<=0?0:Ke(i),p=this._zTime<0!=i<0&&(this._initted||!u),g,m,I,w,S,D,k,N,O,M,L,v;if(this!==Ye&&h>l&&i>=0&&(h=l),h!==this._tTime||o||p){if(a!==this._time&&u&&(h+=this._time-a,i+=this._time-a),g=h,O=this._start,N=this._ts,D=!N,p&&(u||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(L=this._yoyo,S=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(S*100+i,s,o);if(g=Ke(h%S),h===l?(w=this._repeat,g=u):(M=Ke(h/S),w=~~M,w&&w===M&&(g=u,w--),g>u&&(g=u)),M=lo(this._tTime,S),!a&&this._tTime&&M!==w&&this._tTime-M*S-this._dur<=0&&(M=w),L&&w&1&&(g=u-g,v=1),w!==M&&!this._lock){var y=L&&M&1,_=y===(L&&w&1);if(w<M&&(y=!y),a=y?0:h%u?u:h,this._lock=1,this.render(a||(v?0:Ke(w*S)),s,!u)._lock=0,this._tTime=h,!s&&this.parent&&On(this,"onRepeat"),this.vars.repeatRefresh&&!v&&(this.invalidate()._lock=1,M=w),a&&a!==this._time||D!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,_&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!v&&this.invalidate()),this._lock=0,!this._ts&&!D)return this;TT(this,v)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(k=E1(this,Ke(a),Ke(g)),k&&(h-=g-(g=k._start))),this._tTime=h,this._time=g,this._act=!N,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&u&&!s&&!M&&(On(this,"onStart"),this._tTime!==h))return this;if(g>=a&&i>=0)for(m=this._first;m;){if(I=m._next,(m._act||g>=m._start)&&m._ts&&k!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(g-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(g-m._start)*m._ts,s,o),g!==this._time||!this._ts&&!D){k=0,I&&(h+=this._zTime=-Oe);break}}m=I}else{m=this._last;for(var E=i<0?i:g;m;){if(I=m._prev,(m._act||E<=m._end)&&m._ts&&k!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(E-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(E-m._start)*m._ts,s,o||Mt&&xf(m)),g!==this._time||!this._ts&&!D){k=0,I&&(h+=this._zTime=E?-Oe:Oe);break}}m=I}}if(k&&!s&&(this.pause(),k.render(g>=a?0:-Oe)._zTime=g>=a?1:-1,this._ts))return this._start=O,zl(this),this.render(i,s,o);this._onUpdate&&!s&&On(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(O===this._start||Math.abs(N)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(h===l&&this._ts>0||!h&&this._ts<0)&&xi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(On(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Yr(s)||(s=qn(this,s,i)),!(i instanceof Ca)){if(Kt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(kt(i))return this.addLabel(i,s);if(et(i))i=dt.delayedCall(0,i);else return this}return this!==i?Er(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof dt?s&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return kt(i)?this.removeLabel(i):et(i)?this.killTweensOf(i):(i.parent===this&&Bl(this,i),i===this._recent&&(this._recent=this._last),is(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ke(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=dt.delayedCall(0,s||ba,o);return a.data="isPause",this._hasPause=1,Er(this,a,qn(this,i))},t.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&xi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)fi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Kn(i),l=this._first,u=Yr(s),h;l;)l instanceof dt?g1(l._targets,a)&&(u?(!fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=qn(o,i),l=s,u=l.startAt,h=l.onStart,p=l.onStartParams,g=l.immediateRender,m,I=dt.to(o,Ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Oe,onStart:function(){if(o.pause(),!m){var S=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());I._dur!==S&&uo(I,S,0,1).render(I._time,!0,!0),m=1}h&&h.apply(I,p||[])}},s));return g?I.render(0):I},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ln({startAt:{time:qn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),gg(this,qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),gg(this,qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Oe)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(i=Ke(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=i);return is(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),is(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Gn,u,h,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(p=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Er(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=Ke(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;uo(o,o===Ye&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ye._ts&&(Zy(Ye,al(i,Ye)),Qy=kn.frame),kn.frame>=hg){hg+=Vn.autoSleep||120;var s=Ye._first;if((!s||!s._ts)&&Vn.autoSleep&&kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||kn.sleep()}}},e}(Ca);Ln(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var F1=function(e,t,n,i,s,o,a){var l=new _n(this._pt,e,t,0,1,RT,null,s),u=0,h=0,p,g,m,I,w,S,D,k;for(l.b=n,l.e=i,n+="",i+="",(D=~i.indexOf("random("))&&(i=Ra(i)),o&&(k=[n,i],o(k,e,t),n=k[0],i=k[1]),g=n.match(fu)||[];p=fu.exec(i);)I=p[0],w=i.substring(u,p.index),m?m=(m+1)%5:w.substr(-5)==="rgba("&&(m=1),I!==g[h++]&&(S=parseFloat(g[h-1])||0,l._pt={_next:l._pt,p:w||h===1?w:",",s:S,c:I.charAt(1)==="="?Ks(S,I)-S:parseFloat(I)-S,m:m&&m<4?Math.round:0},u=fu.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=a,(Gy.test(i)||D)&&(l.e=0),this._pt=l,l},Nf=function(e,t,n,i,s,o,a,l,u,h){et(i)&&(i=i(s||0,e,o));var p=e[t],g=n!=="get"?n:et(p)?u?e[t.indexOf("set")||!et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():p,m=et(p)?u?$1:ST:Mf,I;if(kt(i)&&(~i.indexOf("random(")&&(i=Ra(i)),i.charAt(1)==="="&&(I=Ks(g,i)+(Wt(g)||0),(I||I===0)&&(i=I))),!h||g!==i||ah)return!isNaN(g*i)&&i!==""?(I=new _n(this._pt,e,t,+g||0,i-(g||0),typeof p=="boolean"?H1:bT,0,m),u&&(I.fp=u),a&&I.modifier(a,this,e),this._pt=I):(!p&&!(t in e)&&Cf(t,i),F1.call(this,e,t,g,i,m,l||Vn.stringFilter,u))},U1=function(e,t,n,i,s){if(et(e)&&(e=ia(e,s,t,n,i)),!Nr(e)||e.style&&e.nodeType||Kt(e)||Hy(e))return kt(e)?ia(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ia(e[a],s,t,n,i);return o},ET=function(e,t,n,i,s,o){var a,l,u,h;if(Pn[e]&&(a=new Pn[e]).init(s,a.rawVars?t[e]:U1(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new _n(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==zs))for(u=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)u[a._props[h]]=l;return a},fi,ah,Vf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,u=i.onUpdate,h=i.runBackwards,p=i.yoyoEase,g=i.keyframes,m=i.autoRevert,I=e._dur,w=e._startAt,S=e._targets,D=e.parent,k=D&&D.data==="nested"?D.vars.targets:S,N=e._overwrite==="auto"&&!Sf,O=e.timeline,M,L,v,y,_,E,b,R,A,G,re,ae,J;if(O&&(!g||!s)&&(s="none"),e._ease=ss(s,ao.ease),e._yEase=p?yT(ss(p===!0?s:p,ao.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!O&&!!i.runBackwards,!O||g&&!i.stagger){if(R=S[0]?rs(S[0]).harness:0,ae=R&&i[R.prop],M=ol(i,kf),w&&(w._zTime<0&&w.progress(1),t<0&&h&&a&&!m?w.render(-1,!0):w.revert(h&&I?Rc:d1),w._lazy=0),o){if(xi(e._startAt=dt.set(S,Ln({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:!w&&gn(l),startAt:null,delay:0,onUpdate:u&&function(){return On(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mt||!a&&!m)&&e._startAt.revert(Rc),a&&I&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&I&&!w){if(t&&(a=!1),v=Ln({overwrite:!1,data:"isFromStart",lazy:a&&!w&&gn(l),immediateRender:a,stagger:0,parent:D},M),ae&&(v[R.prop]=ae),xi(e._startAt=dt.set(S,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mt?e._startAt.revert(Rc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Oe,Oe);else if(!t)return}for(e._pt=e._ptCache=0,l=I&&gn(l)||l&&!I,L=0;L<S.length;L++){if(_=S[L],b=_._gsap||Of(S)[L]._gsap,e._ptLookup[L]=G={},th[b.id]&&Ei.length&&sl(),re=k===S?L:k.indexOf(_),R&&(A=new R).init(_,ae||M,e,re,k)!==!1&&(e._pt=y=new _n(e._pt,_,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(ue){G[ue]=y}),A.priority&&(E=1)),!R||ae)for(v in M)Pn[v]&&(A=ET(v,M,e,re,_,k))?A.priority&&(E=1):G[v]=y=Nf.call(e,_,v,"get",M[v],re,k,0,i.stringFilter);e._op&&e._op[L]&&e.kill(_,e._op[L]),N&&e._pt&&(fi=e,Ye.killTweensOf(_,G,e.globalTime(t)),J=!e.parent,fi=0),e._pt&&l&&(th[b.id]=1)}E&&PT(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!J,g&&t<=0&&O.render(Gn,!0,!0)},B1=function(e,t,n,i,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,p,g,m;if(!u)for(u=e._ptCache[t]=[],g=e._ptLookup,m=e._targets.length;m--;){if(h=g[m][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ah=1,e.vars[t]="+=0",Vf(e,a),ah=0,l?Sa(t+" not eligible for reset"):1;u.push(h)}for(m=u.length;m--;)p=u[m],h=p._pt||p,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,p.e&&(p.e=it(n)+Wt(p.e)),p.b&&(p.b=h.s+Wt(p.b))},z1=function(e,t){var n=e[0]?rs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=co({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},q1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Kt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ia=function(e,t,n,i,s){return et(e)?e.call(t,n,i,s):kt(e)&&~e.indexOf("random(")?Ra(e):e},IT=Df+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",AT={};mn(IT+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return AT[r]=1});var dt=function(r){$y(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:na(i))||this;var l=a.vars,u=l.duration,h=l.delay,p=l.immediateRender,g=l.stagger,m=l.overwrite,I=l.keyframes,w=l.defaults,S=l.scrollTrigger,D=l.yoyoEase,k=i.parent||Ye,N=(Kt(n)||Hy(n)?Yr(n[0]):"length"in i)?[n]:Kn(n),O,M,L,v,y,_,E,b;if(a._targets=N.length?Of(N):Sa("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,I||g||ic(u)||ic(h)){if(i=a.vars,O=a.timeline=new nn({data:"nested",defaults:w||{},targets:k&&k.data==="nested"?k.vars.targets:N}),O.kill(),O.parent=O._dp=Lr(a),O._start=0,g||ic(u)||ic(h)){if(v=N.length,E=g&&cT(g),Nr(g))for(y in g)~IT.indexOf(y)&&(b||(b={}),b[y]=g[y]);for(M=0;M<v;M++)L=ol(i,AT),L.stagger=0,D&&(L.yoyoEase=D),b&&co(L,b),_=N[M],L.duration=+ia(u,Lr(a),M,_,N),L.delay=(+ia(h,Lr(a),M,_,N)||0)-a._delay,!g&&v===1&&L.delay&&(a._delay=h=L.delay,a._start+=h,L.delay=0),O.to(_,L,E?E(M,_,N):0),O._ease=_e.none;O.duration()?u=h=0:a.timeline=0}else if(I){na(Ln(O.vars.defaults,{ease:"none"})),O._ease=ss(I.ease||i.ease||"none");var R=0,A,G,re;if(Kt(I))I.forEach(function(ae){return O.to(N,ae,">")}),O.duration();else{L={};for(y in I)y==="ease"||y==="easeEach"||q1(y,I[y],L,I.easeEach);for(y in L)for(A=L[y].sort(function(ae,J){return ae.t-J.t}),R=0,M=0;M<A.length;M++)G=A[M],re={ease:G.e,duration:(G.t-(M?A[M-1].t:0))/100*u},re[y]=G.v,O.to(N,re,R),R+=re.duration;O.duration()<u&&O.to({},{duration:u-O.duration()})}}u||a.duration(u=O.duration())}else a.timeline=0;return m===!0&&!Sf&&(fi=Lr(a),Ye.killTweensOf(N),fi=0),Er(k,Lr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(p||!u&&!I&&a._start===Ke(k._time)&&gn(p)&&T1(Lr(a))&&k.data!=="nested")&&(a._tTime=-Oe,a.render(Math.max(0,-h)||0)),S&&iT(Lr(a),S),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,u=this._dur,h=i<0,p=i>l-Oe&&!h?l:i<Oe?0:i,g,m,I,w,S,D,k,N,O;if(!u)w1(this,i,s,o);else if(p!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(g=p,N=this.timeline,this._repeat){if(w=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(w*100+i,s,o);if(g=Ke(p%w),p===l?(I=this._repeat,g=u):(S=Ke(p/w),I=~~S,I&&I===S?(g=u,I--):g>u&&(g=u)),D=this._yoyo&&I&1,D&&(O=this._yEase,g=u-g),S=lo(this._tTime,w),g===a&&!o&&this._initted&&I===S)return this._tTime=p,this;I!==S&&(N&&this._yEase&&TT(N,D),this.vars.repeatRefresh&&!D&&!this._lock&&g!==w&&this._initted&&(this._lock=o=1,this.render(Ke(w*I),!0).invalidate()._lock=0))}if(!this._initted){if(sT(this,h?i:g,o,s,p))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&I!==S))return this;if(u!==this._dur)return this.render(i,s,o)}if(this._tTime=p,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=k=(O||this._ease)(g/u),this._from&&(this.ratio=k=1-k),!a&&p&&!s&&!S&&(On(this,"onStart"),this._tTime!==p))return this;for(m=this._pt;m;)m.r(k,m.d),m=m._next;N&&N.render(i<0?i:N._dur*N._ease(g/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&nh(this,i,s,o),On(this,"onUpdate")),this._repeat&&I!==S&&this.vars.onRepeat&&!s&&this.parent&&On(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(h&&!this._onUpdate&&nh(this,i,!0,!0),(i||!u)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&xi(this,1),!s&&!(h&&!a)&&(p||a||D)&&(On(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Pa||kn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Vf(this,u),h=this._ease(u/this._dur),B1(this,i,s,o,a,h,u,l)?this.resetTo(i,s,o,a,1):(ql(this,0),this.parent||nT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$o(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fi&&fi.vars.overwrite!==!0)._first||$o(this),this.parent&&o!==this.timeline.totalDuration()&&uo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Kn(i):a,u=this._ptLookup,h=this._pt,p,g,m,I,w,S,D;if((!s||s==="all")&&_1(a,l))return s==="all"&&(this._pt=0),$o(this);for(p=this._op=this._op||[],s!=="all"&&(kt(s)&&(w={},mn(s,function(k){return w[k]=1}),s=w),s=z1(a,s)),D=a.length;D--;)if(~l.indexOf(a[D])){g=u[D],s==="all"?(p[D]=s,I=g,m={}):(m=p[D]=p[D]||{},I=s);for(w in I)S=g&&g[w],S&&((!("kill"in S.d)||S.d.kill(w)===!0)&&Bl(this,S,"_pt"),delete g[w]),m!=="all"&&(m[w]=1)}return this._initted&&!this._pt&&h&&$o(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ra(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ra(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ye.killTweensOf(i,s,o)},e}(Ca);Ln(dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(r){dt[r]=function(){var e=new nn,t=ih.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Mf=function(e,t,n){return e[t]=n},ST=function(e,t,n){return e[t](n)},$1=function(e,t,n,i){return e[t](i.fp,n)},j1=function(e,t,n){return e.setAttribute(t,n)},Lf=function(e,t){return et(e[t])?ST:bf(e[t])&&e.setAttribute?j1:Mf},bT=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},H1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},RT=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ff=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},W1=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},G1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Bl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},K1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},PT=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},_n=function(){function r(t,n,i,s,o,a,l,u,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||bT,this.d=l||this,this.set=u||Mf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=K1,this.m=n,this.mt=s,this.tween=i},r}();mn(Df+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return kf[r]=1});Mn.TweenMax=Mn.TweenLite=dt;Mn.TimelineLite=Mn.TimelineMax=nn;Ye=new nn({sortChildren:!1,defaults:ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=_T;var os=[],Cc={},Y1=[],_g=0,X1=0,_u=function(e){return(Cc[e]||Y1).map(function(t){return t()})},ch=function(){var e=Date.now(),t=[];e-_g>2&&(_u("matchMediaInit"),os.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,u;for(a in i)o=vr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(n.revert(),l&&t.push(n))}),_u("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),_g=e,_u("matchMedia"))},CT=function(){function r(t,n){this.selector=n&&sh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=X1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){et(n)&&(s=i,i=n,n=et);var o=this,a=function(){var u=We,h=o.selector,p;return u&&u!==o&&u.data.push(o),s&&(o.selector=sh(s)),We=o,p=i.apply(o,arguments),et(p)&&o._r.push(p),We=u,o.selector=h,o.isReverted=!1,p};return o.last=a,n===et?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=We;We=null,n(this),We=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof dt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,p){return p.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)u=s.data[l],u instanceof nn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof dt)&&u.revert&&u.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=os.length;o--;)os[o].id===this.id&&os.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Q1=function(){function r(t){this.contexts=[],this.scope=t,We&&We.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Nr(n)||(n={matches:n});var o=new CT(0,s||this.scope),a=o.conditions={},l,u,h;We&&!o.selector&&(o.selector=We.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(u in n)u==="all"?h=1:(l=vr.matchMedia(n[u]),l&&(os.indexOf(o)<0&&os.push(o),(a[u]=l.matches)&&(h=1),l.addListener?l.addListener(ch):l.addEventListener("change",ch)));return h&&i(o,function(p){return o.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return pT(i)})},timeline:function(e){return new nn(e)},getTweensOf:function(e,t){return Ye.getTweensOf(e,t)},getProperty:function(e,t,n,i){kt(e)&&(e=Kn(e)[0]);var s=rs(e||{}).get,o=n?tT:eT;return n==="native"&&(n=""),e&&(t?o((Pn[t]&&Pn[t].get||s)(e,t,n,i)):function(a,l,u){return o((Pn[a]&&Pn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,n){if(e=Kn(e),e.length>1){var i=e.map(function(h){return Tn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var p=s;p--;)i[p](h)}}e=e[0]||{};var o=Pn[t],a=rs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(h){var p=new o;zs._pt=0,p.init(e,n?h+n:h,zs,0,[e]),p.render(1,p),zs._pt&&Ff(1,zs)}:a.set(e,l);return o?u:function(h){return u(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Tn.to(e,Ln((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,u,h){return s.resetTo(t,l,u,h)};return o.tween=s,o},isTweening:function(e){return Ye.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ss(e.ease,ao.ease)),fg(ao,e||{})},config:function(e){return fg(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Pn[a]&&!Mn[a]&&Sa(t+" effect requires "+a+" plugin.")}),du[t]=function(a,l,u){return n(Kn(a),Ln(l||{},s),u)},o&&(nn.prototype[t]=function(a,l,u){return this.add(du[t](a,Nr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){_e[e]=ss(t)},parseEase:function(e,t){return arguments.length?ss(e,t):_e},getById:function(e){return Ye.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new nn(e),i,s;for(n.smoothChildTiming=gn(e.smoothChildTiming),Ye.remove(n),n._dp=0,n._time=n._tTime=Ye._time,i=Ye._first;i;)s=i._next,(t||!(!i._dur&&i instanceof dt&&i.vars.onComplete===i._targets[0]))&&Er(n,i,i._start-i._delay),i=s;return Er(Ye,n,0),n},context:function(e,t){return e?new CT(e,t):We},matchMedia:function(e){return new Q1(e)},matchMediaRefresh:function(){return os.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ch()},addEventListener:function(e,t){var n=Cc[e]||(Cc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Cc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:C1,wrapYoyo:k1,distribute:cT,random:uT,snap:lT,normalize:P1,getUnit:Wt,clamp:A1,splitColor:gT,toArray:Kn,selector:sh,mapRange:fT,pipe:b1,unitize:R1,interpolate:D1,shuffle:aT},install:Yy,effects:du,ticker:kn,updateRoot:nn.updateRoot,plugins:Pn,globalTimeline:Ye,core:{PropTween:_n,globals:Xy,Tween:dt,Timeline:nn,Animation:Ca,getCache:rs,_removeLinkedListItem:Bl,reverting:function(){return Mt},context:function(e){return e&&We&&(We.data.push(e),e._ctx=We),We},suppressOverwrites:function(e){return Sf=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cl[r]=dt[r]});kn.add(nn.updateRoot);zs=cl.to({},{duration:0});var J1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Z1=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=J1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},yu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,u;if(kt(s)&&(l={},mn(s,function(h){return l[h]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Z1(a,s)}}}},Tn=cl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Mt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},yu("roundProps",oh),yu("modifiers"),yu("snap",lT))||cl;dt.version=nn.version=Tn.version="3.14.2";Ky=1;Rf()&&ho();_e.Power0;_e.Power1;_e.Power2;_e.Power3;_e.Power4;_e.Linear;_e.Quad;_e.Cubic;_e.Quart;_e.Quint;_e.Strong;_e.Elastic;_e.Back;_e.SteppedEase;_e.Bounce;_e.Sine;_e.Expo;_e.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yg,di,Ys,Uf,Zi,Tg,Bf,eP=function(){return typeof window<"u"},Xr={},Ki=180/Math.PI,Xs=Math.PI/180,ks=Math.atan2,vg=1e8,zf=/([A-Z])/g,tP=/(left|right|width|margin|padding|x)/i,nP=/[\s,\(]\S/,Ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sP=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oP=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},kT=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},DT=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},aP=function(e,t,n){return e.style[t]=n},cP=function(e,t,n){return e.style.setProperty(t,n)},lP=function(e,t,n){return e._gsap[t]=n},uP=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hP=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},fP=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Xe="transform",yn=Xe+"Origin",dP=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Xr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Fr(i,a)}):this.tfm[e]=o.x?o[e]:Fr(i,e),e===yn&&(this.tfm.zOrigin=o.zOrigin);else return Ir.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Xe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yn,t,"")),e=Xe}(s||t)&&this.props.push(e,t,s[e])},OT=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pP=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(zf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bf(),(!s||!s.isStart)&&!n[Xe]&&(OT(n),i.zOrigin&&n[yn]&&(n[yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},xT=function(e,t){var n={target:e,props:[],revert:pP,save:dP};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},NT,uh=function(e,t){var n=di.createElementNS?di.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):di.createElement(e);return n&&n.style?n:di.createElement(e)},xn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(zf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,fo(t)||t,1)||""},wg="O,Moz,ms,Ms,Webkit".split(","),fo=function(e,t,n){var i=t||Zi,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(wg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?wg[o]:"")+e},hh=function(){eP()&&window.document&&(yg=window,di=yg.document,Ys=di.documentElement,Zi=uh("div")||{style:{}},uh("div"),Xe=fo(Xe),yn=Xe+"Origin",Zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",NT=!!fo("perspective"),Bf=Tn.core.reverting,Uf=1)},Eg=function(e){var t=e.ownerSVGElement,n=uh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ys.removeChild(n),s},Ig=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},VT=function(e){var t,n;try{t=e.getBBox()}catch{t=Eg(e),n=1}return t&&(t.width||t.height)||n||(t=Eg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ig(e,["x","cx","x1"])||0,y:+Ig(e,["y","cy","y1"])||0,width:0,height:0}:t},MT=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&VT(e))},Ni=function(e,t){if(t){var n=e.style,i;t in Xr&&t!==yn&&(t=Xe),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(zf,"-$1").toLowerCase())):n.removeAttribute(t)}},pi=function(e,t,n,i,s,o){var a=new _n(e._pt,t,n,0,1,o?DT:kT);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Ag={deg:1,rad:1,turn:1},gP={grid:1,flex:1},Vi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Zi.style,l=tP.test(t),u=e.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(l?"Width":"Height"),p=100,g=i==="px",m=i==="%",I,w,S,D;if(i===o||!s||Ag[i]||Ag[o])return s;if(o!=="px"&&!g&&(s=r(e,t,n,"px")),D=e.getCTM&&MT(e),(m||o==="%")&&(Xr[t]||~t.indexOf("adius")))return I=D?e.getBBox()[l?"width":"height"]:e[h],it(m?s/I*p:s/100*I);if(a[l?"width":"height"]=p+(g?o:i),w=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,D&&(w=(e.ownerSVGElement||{}).parentNode),(!w||w===di||!w.appendChild)&&(w=di.body),S=w._gsap,S&&m&&S.width&&l&&S.time===kn.time&&!S.uncache)return it(s/S.width*p);if(m&&(t==="height"||t==="width")){var k=e.style[t];e.style[t]=p+i,I=e[h],k?e.style[t]=k:Ni(e,t)}else(m||o==="%")&&!gP[xn(w,"display")]&&(a.position=xn(e,"position")),w===e&&(a.position="static"),w.appendChild(Zi),I=Zi[h],w.removeChild(Zi),a.position="absolute";return l&&m&&(S=rs(w),S.time=kn.time,S.width=w[h]),it(g?I*s/p:I&&s?p/I*s:0)},Fr=function(e,t,n,i){var s;return Uf||hh(),t in Ir&&t!=="transform"&&(t=Ir[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xr[t]&&t!=="transform"?(s=Da(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ul(xn(e,yn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ll[t]&&ll[t](e,t,n)||xn(e,t)||Jy(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Vi(e,t,s,n)+n:s},mP=function(e,t,n,i){if(!n||n==="none"){var s=fo(t,e,1),o=s&&xn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=xn(e,"borderTopColor"))}var a=new _n(this._pt,e.style,t,0,1,RT),l=0,u=0,h,p,g,m,I,w,S,D,k,N,O,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=xn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(w=e.style[t],e.style[t]=i,i=xn(e,t)||i,w?e.style[t]=w:Ni(e,t)),h=[n,i],_T(h),n=h[0],i=h[1],g=n.match(Bs)||[],M=i.match(Bs)||[],M.length){for(;p=Bs.exec(i);)S=p[0],k=i.substring(l,p.index),I?I=(I+1)%5:(k.substr(-5)==="rgba("||k.substr(-5)==="hsla(")&&(I=1),S!==(w=g[u++]||"")&&(m=parseFloat(w)||0,O=w.substr((m+"").length),S.charAt(1)==="="&&(S=Ks(m,S)+O),D=parseFloat(S),N=S.substr((D+"").length),l=Bs.lastIndex-N.length,N||(N=N||Vn.units[t]||O,l===i.length&&(i+=N,a.e+=N)),O!==N&&(m=Vi(e,t,w,N)||0),a._pt={_next:a._pt,p:k||u===1?k:",",s:m,c:D-m,m:I&&I<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?DT:kT;return Gy.test(i)&&(a.e=0),this._pt=a,a},Sg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_P=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Sg[n]||n,t[1]=Sg[i]||i,t.join(" ")},yP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Xr[a]&&(l=1,a=a==="transformOrigin"?yn:Xe),Ni(n,a);l&&(Ni(n,Xe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Da(n,1),o.uncache=1,OT(i)))}},ll={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new _n(e._pt,t,n,0,0,yP);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ka=[1,0,0,1,0,0],LT={},FT=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bg=function(e){var t=xn(e,Xe);return FT(t)?ka:t.substr(7).match(Wy).map(it)},qf=function(e,t){var n=e._gsap||rs(e),i=e.style,s=bg(e),o,a,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ka:s):(s===ka&&!e.offsetParent&&e!==Ys&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ys.appendChild(e)),s=bg(e),l?i.display=l:Ni(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ys.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fh=function(e,t,n,i,s,o){var a=e._gsap,l=s||qf(e,!0),u=a.xOrigin||0,h=a.yOrigin||0,p=a.xOffset||0,g=a.yOffset||0,m=l[0],I=l[1],w=l[2],S=l[3],D=l[4],k=l[5],N=t.split(" "),O=parseFloat(N[0])||0,M=parseFloat(N[1])||0,L,v,y,_;n?l!==ka&&(v=m*S-I*w)&&(y=O*(S/v)+M*(-w/v)+(w*k-S*D)/v,_=O*(-I/v)+M*(m/v)-(m*k-I*D)/v,O=y,M=_):(L=VT(e),O=L.x+(~N[0].indexOf("%")?O/100*L.width:O),M=L.y+(~(N[1]||N[0]).indexOf("%")?M/100*L.height:M)),i||i!==!1&&a.smooth?(D=O-u,k=M-h,a.xOffset=p+(D*m+k*w)-D,a.yOffset=g+(D*I+k*S)-k):a.xOffset=a.yOffset=0,a.xOrigin=O,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[yn]="0px 0px",o&&(pi(o,a,"xOrigin",u,O),pi(o,a,"yOrigin",h,M),pi(o,a,"xOffset",p,a.xOffset),pi(o,a,"yOffset",g,a.yOffset)),e.setAttribute("data-svg-origin",O+" "+M)},Da=function(e,t){var n=e._gsap||new wT(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=xn(e,yn)||"0",h,p,g,m,I,w,S,D,k,N,O,M,L,v,y,_,E,b,R,A,G,re,ae,J,ue,we,P,Se,At,on,Re,tt;return h=p=g=w=S=D=k=N=O=0,m=I=1,n.svg=!!(e.getCTM&&MT(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),i.scale=i.rotate=i.translate="none"),v=qf(e,n.svg),n.svg&&(n.uncache?(ue=e.getBBox(),u=n.xOrigin-ue.x+"px "+(n.yOrigin-ue.y)+"px",J=""):J=!t&&e.getAttribute("data-svg-origin"),fh(e,J||u,!!J||n.originIsAbsolute,n.smooth!==!1,v)),M=n.xOrigin||0,L=n.yOrigin||0,v!==ka&&(b=v[0],R=v[1],A=v[2],G=v[3],h=re=v[4],p=ae=v[5],v.length===6?(m=Math.sqrt(b*b+R*R),I=Math.sqrt(G*G+A*A),w=b||R?ks(R,b)*Ki:0,k=A||G?ks(A,G)*Ki+w:0,k&&(I*=Math.abs(Math.cos(k*Xs))),n.svg&&(h-=M-(M*b+L*A),p-=L-(M*R+L*G))):(tt=v[6],on=v[7],P=v[8],Se=v[9],At=v[10],Re=v[11],h=v[12],p=v[13],g=v[14],y=ks(tt,At),S=y*Ki,y&&(_=Math.cos(-y),E=Math.sin(-y),J=re*_+P*E,ue=ae*_+Se*E,we=tt*_+At*E,P=re*-E+P*_,Se=ae*-E+Se*_,At=tt*-E+At*_,Re=on*-E+Re*_,re=J,ae=ue,tt=we),y=ks(-A,At),D=y*Ki,y&&(_=Math.cos(-y),E=Math.sin(-y),J=b*_-P*E,ue=R*_-Se*E,we=A*_-At*E,Re=G*E+Re*_,b=J,R=ue,A=we),y=ks(R,b),w=y*Ki,y&&(_=Math.cos(y),E=Math.sin(y),J=b*_+R*E,ue=re*_+ae*E,R=R*_-b*E,ae=ae*_-re*E,b=J,re=ue),S&&Math.abs(S)+Math.abs(w)>359.9&&(S=w=0,D=180-D),m=it(Math.sqrt(b*b+R*R+A*A)),I=it(Math.sqrt(ae*ae+tt*tt)),y=ks(re,ae),k=Math.abs(y)>2e-4?y*Ki:0,O=Re?1/(Re<0?-Re:Re):0),n.svg&&(J=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!FT(xn(e,Xe)),J&&e.setAttribute("transform",J))),Math.abs(k)>90&&Math.abs(k)<270&&(s?(m*=-1,k+=w<=0?180:-180,w+=w<=0?180:-180):(I*=-1,k+=k<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=p-((n.yPercent=p&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=g+o,n.scaleX=it(m),n.scaleY=it(I),n.rotation=it(w)+a,n.rotationX=it(S)+a,n.rotationY=it(D)+a,n.skewX=k+a,n.skewY=N+a,n.transformPerspective=O+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(i[yn]=ul(u)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?vP:NT?UT:TP,n.uncache=0,n},ul=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tu=function(e,t,n){var i=Wt(t);return it(parseFloat(t)+parseFloat(Vi(e,"x",n+"px",i)))+i},TP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,UT(e,t)},Hi="0deg",No="0px",Wi=") ",UT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,u=n.rotation,h=n.rotationY,p=n.rotationX,g=n.skewX,m=n.skewY,I=n.scaleX,w=n.scaleY,S=n.transformPerspective,D=n.force3D,k=n.target,N=n.zOrigin,O="",M=D==="auto"&&e&&e!==1||D===!0;if(N&&(p!==Hi||h!==Hi)){var L=parseFloat(h)*Xs,v=Math.sin(L),y=Math.cos(L),_;L=parseFloat(p)*Xs,_=Math.cos(L),o=Tu(k,o,v*_*-N),a=Tu(k,a,-Math.sin(L)*-N),l=Tu(k,l,y*_*-N+N)}S!==No&&(O+="perspective("+S+Wi),(i||s)&&(O+="translate("+i+"%, "+s+"%) "),(M||o!==No||a!==No||l!==No)&&(O+=l!==No||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Wi),u!==Hi&&(O+="rotate("+u+Wi),h!==Hi&&(O+="rotateY("+h+Wi),p!==Hi&&(O+="rotateX("+p+Wi),(g!==Hi||m!==Hi)&&(O+="skew("+g+", "+m+Wi),(I!==1||w!==1)&&(O+="scale("+I+", "+w+Wi),k.style[Xe]=O||"translate(0, 0)"},vP=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,u=n.skewX,h=n.skewY,p=n.scaleX,g=n.scaleY,m=n.target,I=n.xOrigin,w=n.yOrigin,S=n.xOffset,D=n.yOffset,k=n.forceCSS,N=parseFloat(o),O=parseFloat(a),M,L,v,y,_;l=parseFloat(l),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,l+=h),l||u?(l*=Xs,u*=Xs,M=Math.cos(l)*p,L=Math.sin(l)*p,v=Math.sin(l-u)*-g,y=Math.cos(l-u)*g,u&&(h*=Xs,_=Math.tan(u-h),_=Math.sqrt(1+_*_),v*=_,y*=_,h&&(_=Math.tan(h),_=Math.sqrt(1+_*_),M*=_,L*=_)),M=it(M),L=it(L),v=it(v),y=it(y)):(M=p,y=g,L=v=0),(N&&!~(o+"").indexOf("px")||O&&!~(a+"").indexOf("px"))&&(N=Vi(m,"x",o,"px"),O=Vi(m,"y",a,"px")),(I||w||S||D)&&(N=it(N+I-(I*M+w*v)+S),O=it(O+w-(I*L+w*y)+D)),(i||s)&&(_=m.getBBox(),N=it(N+i/100*_.width),O=it(O+s/100*_.height)),_="matrix("+M+","+L+","+v+","+y+","+N+","+O+")",m.setAttribute("transform",_),k&&(m.style[Xe]=_)},wP=function(e,t,n,i,s){var o=360,a=kt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ki:1),u=l-i,h=i+u+"deg",p,g;return a&&(p=s.split("_")[1],p==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),p==="cw"&&u<0?u=(u+o*vg)%o-~~(u/o)*o:p==="ccw"&&u>0&&(u=(u-o*vg)%o-~~(u/o)*o)),e._pt=g=new _n(e._pt,t,n,i,u,rP),g.e=h,g.u="deg",e._props.push(n),g},Rg=function(e,t){for(var n in t)e[n]=t[n];return e},EP=function(e,t,n){var i=Rg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,u,h,p,g,m,I;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[Xe]=t,a=Da(n,1),Ni(n,Xe),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Xe],o[Xe]=t,a=Da(n,1),o[Xe]=u);for(l in Xr)u=i[l],h=a[l],u!==h&&s.indexOf(l)<0&&(m=Wt(u),I=Wt(h),p=m!==I?Vi(n,l,u,I):parseFloat(u),g=parseFloat(h),e._pt=new _n(e._pt,a,l,p,g-p,lh),e._pt.u=I||0,e._props.push(l));Rg(a,i)};mn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ll[e>1?"border"+r:r]=function(a,l,u,h,p){var g,m;if(arguments.length<4)return g=o.map(function(I){return Fr(a,I,u)}),m=g.join(" "),m.split(g[0]).length===5?g[0]:m;g=(h+"").split(" "),m={},o.forEach(function(I,w){return m[I]=g[w]=g[w]||g[(w-1)/2|0]}),a.init(l,m,p)}});var BT={name:"css",register:hh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,u,h,p,g,m,I,w,S,D,k,N,O,M,L,v,y,_;Uf||hh(),this.styles=this.styles||xT(e),y=this.styles.props,this.tween=n;for(w in t)if(w!=="autoRound"&&(h=t[w],!(Pn[w]&&ET(w,t,n,i,e,s)))){if(m=typeof h,I=ll[w],m==="function"&&(h=h.call(n,i,e,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Ra(h)),I)I(this,e,w,h,n)&&(v=1);else if(w.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(w)+"").trim(),h+="",Ii.lastIndex=0,Ii.test(u)||(S=Wt(u),D=Wt(h),D?S!==D&&(u=Vi(e,w,u,D)+D):S&&(h+=S)),this.add(a,"setProperty",u,h,i,s,0,0,w),o.push(w),y.push(w,0,a[w]);else if(m!=="undefined"){if(l&&w in l?(u=typeof l[w]=="function"?l[w].call(n,i,e,s):l[w],kt(u)&&~u.indexOf("random(")&&(u=Ra(u)),Wt(u+"")||u==="auto"||(u+=Vn.units[w]||Wt(Fr(e,w))||""),(u+"").charAt(1)==="="&&(u=Fr(e,w))):u=Fr(e,w),g=parseFloat(u),k=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),k&&(h=h.substr(2)),p=parseFloat(h),w in Ir&&(w==="autoAlpha"&&(g===1&&Fr(e,"visibility")==="hidden"&&p&&(g=0),y.push("visibility",0,a.visibility),pi(this,a,"visibility",g?"inherit":"hidden",p?"inherit":"hidden",!p)),w!=="scale"&&w!=="transform"&&(w=Ir[w],~w.indexOf(",")&&(w=w.split(",")[0]))),N=w in Xr,N){if(this.styles.save(w),_=h,m==="string"&&h.substring(0,6)==="var(--"){if(h=xn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=h,h=xn(e,"perspective"),E?e.style.perspective=E:Ni(e,"perspective")}p=parseFloat(h)}if(O||(M=e._gsap,M.renderTransform&&!t.parseTransform||Da(e,t.parseTransform),L=t.smoothOrigin!==!1&&M.smooth,O=this._pt=new _n(this._pt,a,Xe,0,1,M.renderTransform,M,0,-1),O.dep=1),w==="scale")this._pt=new _n(this._pt,M,"scaleY",M.scaleY,(k?Ks(M.scaleY,k+p):p)-M.scaleY||0,lh),this._pt.u=0,o.push("scaleY",w),w+="X";else if(w==="transformOrigin"){y.push(yn,0,a[yn]),h=_P(h),M.svg?fh(e,h,0,L,0,this):(D=parseFloat(h.split(" ")[2])||0,D!==M.zOrigin&&pi(this,M,"zOrigin",M.zOrigin,D),pi(this,a,w,ul(u),ul(h)));continue}else if(w==="svgOrigin"){fh(e,h,1,L,0,this);continue}else if(w in LT){wP(this,M,w,g,k?Ks(g,k+h):h);continue}else if(w==="smoothOrigin"){pi(this,M,"smooth",M.smooth,h);continue}else if(w==="force3D"){M[w]=h;continue}else if(w==="transform"){EP(this,h,e);continue}}else w in a||(w=fo(w)||w);if(N||(p||p===0)&&(g||g===0)&&!nP.test(h)&&w in a)S=(u+"").substr((g+"").length),p||(p=0),D=Wt(h)||(w in Vn.units?Vn.units[w]:S),S!==D&&(g=Vi(e,w,u,D)),this._pt=new _n(this._pt,N?M:a,w,g,(k?Ks(g,k+p):p)-g,!N&&(D==="px"||w==="zIndex")&&t.autoRound!==!1?oP:lh),this._pt.u=D||0,N&&_!==h?(this._pt.b=u,this._pt.e=_,this._pt.r=sP):S!==D&&D!=="%"&&(this._pt.b=u,this._pt.r=iP);else if(w in a)mP.call(this,e,w,u,k?k+h:h);else if(w in e)this.add(e,w,u||e[w],k?k+h:h,i,s);else if(w!=="parseTransform"){Cf(w,h);continue}N||(w in a?y.push(w,0,a[w]):typeof e[w]=="function"?y.push(w,2,e[w]()):y.push(w,1,u||e[w])),o.push(w)}}v&&PT(this)},render:function(e,t){if(t.tween._time||!Bf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Fr,aliases:Ir,getSetter:function(e,t,n){var i=Ir[t];return i&&i.indexOf(",")<0&&(t=i),t in Xr&&t!==yn&&(e._gsap.x||Fr(e,"x"))?n&&Tg===n?t==="scale"?uP:lP:(Tg=n||{})&&(t==="scale"?hP:fP):e.style&&!bf(e.style[t])?aP:~t.indexOf("-")?cP:Lf(e,t)},core:{_removeProperty:Ni,_getMatrix:qf}};Tn.utils.checkPrefix=fo;Tn.core.getStyleSaver=xT;(function(r,e,t,n){var i=mn(r+","+e+","+t,function(s){Xr[s]=1});mn(e,function(s){Vn.units[s]="deg",LT[s]=1}),Ir[i[13]]=r+","+e,mn(n,function(s){var o=s.split(":");Ir[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Tn.registerPlugin(BT);var $f=Tn.registerPlugin(BT)||Tn;$f.core.Tween;function IP(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function AP(r,e,t){return e&&IP(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vt,kc,Dn,gi,mi,Qs,zT,Yi,sa,qT,qr,sr,$T,jT=function(){return Vt||typeof window<"u"&&(Vt=window.gsap)&&Vt.registerPlugin&&Vt},HT=1,qs=[],le=[],Dr=[],oa=Date.now,dh=function(e,t){return t},SP=function(){var e=sa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,le),i.push.apply(i,Dr),le=n,Dr=i,dh=function(o,a){return t[o](a)}},Ai=function(e,t){return~Dr.indexOf(e)&&Dr[Dr.indexOf(e)+1][t]},aa=function(e){return!!~qT.indexOf(e)},Jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},sc="scrollLeft",oc="scrollTop",ph=function(){return qr&&qr.isPressed||le.cache++},hl=function(e,t){var n=function i(s){if(s||s===0){HT&&(Dn.history.scrollRestoration="manual");var o=qr&&qr.isPressed;s=i.v=Math.round(s)||(qr&&qr.iOS?1:0),e(s),i.cacheID=le.cache,o&&dh("ss",s)}else(t||le.cache!==i.cacheID||dh("ref"))&&(i.cacheID=le.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},rn={s:sc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:hl(function(r){return arguments.length?Dn.scrollTo(r,wt.sc()):Dn.pageXOffset||gi[sc]||mi[sc]||Qs[sc]||0})},wt={s:oc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:rn,sc:hl(function(r){return arguments.length?Dn.scrollTo(rn.sc(),r):Dn.pageYOffset||gi[oc]||mi[oc]||Qs[oc]||0})},dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Vt.utils.toArray)(e)[0]||(typeof e=="string"&&Vt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},bP=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Mi=function(e,t){var n=t.s,i=t.sc;aa(e)&&(e=gi.scrollingElement||mi);var s=le.indexOf(e),o=i===wt.sc?1:2;!~s&&(s=le.push(e)-1),le[s+o]||Jt(e,"scroll",ph);var a=le[s+o],l=a||(le[s+o]=hl(Ai(e,n),!0)||(aa(e)?i:hl(function(u){return arguments.length?e[n]=u:e[n]})));return l.target=e,a||(l.smooth=Vt.getProperty(e,"scrollBehavior")==="smooth"),l},gh=function(e,t,n){var i=e,s=e,o=oa(),a=o,l=t||50,u=Math.max(500,l*3),h=function(I,w){var S=oa();w||S-o>l?(s=i,i=I,a=o,o=S):n?i+=I:i=s+(I-s)/(S-a)*(o-a)},p=function(){s=i=n?0:i,a=o=0},g=function(I){var w=a,S=s,D=oa();return(I||I===0)&&I!==i&&h(I),o===a||D-a>u?0:(i+(n?S:-S))/((n?D:o)-w)*1e3};return{update:h,reset:p,getVelocity:g}},Vo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Pg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},WT=function(){sa=Vt.core.globals().ScrollTrigger,sa&&sa.core&&SP()},GT=function(e){return Vt=e||jT(),!kc&&Vt&&typeof document<"u"&&document.body&&(Dn=window,gi=document,mi=gi.documentElement,Qs=gi.body,qT=[Dn,gi,mi,Qs],Vt.utils.clamp,$T=Vt.core.context||function(){},Yi="onpointerenter"in Qs?"pointer":"mouse",zT=ot.isTouch=Dn.matchMedia&&Dn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Dn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,sr=ot.eventTypes=("ontouchstart"in mi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in mi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return HT=0},500),WT(),kc=1),kc};rn.op=wt;le.cache=0;var ot=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){kc||GT(Vt)||console.warn("Please gsap.registerPlugin(Observer)"),sa||WT();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,u=n.debounce,h=n.preventDefault,p=n.onStop,g=n.onStopDelay,m=n.ignore,I=n.wheelSpeed,w=n.event,S=n.onDragStart,D=n.onDragEnd,k=n.onDrag,N=n.onPress,O=n.onRelease,M=n.onRight,L=n.onLeft,v=n.onUp,y=n.onDown,_=n.onChangeX,E=n.onChangeY,b=n.onChange,R=n.onToggleX,A=n.onToggleY,G=n.onHover,re=n.onHoverEnd,ae=n.onMove,J=n.ignoreCheck,ue=n.isNormalizer,we=n.onGestureStart,P=n.onGestureEnd,Se=n.onWheel,At=n.onEnable,on=n.onDisable,Re=n.onClick,tt=n.scrollSpeed,at=n.capture,Be=n.allowClicks,mt=n.lockAxis,_t=n.onLockAxis;this.target=a=dn(a)||mi,this.vars=n,m&&(m=Vt.utils.toArray(m)),i=i||1e-9,s=s||0,I=I||1,tt=tt||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Dn.getComputedStyle(Qs).lineHeight)||22);var pr,Dt,St,he,ze,Ft,Ot,V=this,Ut=0,xe=0,qe=n.passive||!h&&n.passive!==!1,Pe=Mi(a,rn),Jn=Mi(a,wt),Zn=Pe(),Vr=Jn(),$e=~o.indexOf("touch")&&!~o.indexOf("pointer")&&sr[0]==="pointerdown",er=aa(a),je=a.ownerDocument||gi,Xt=[0,0,0],an=[0,0,0],tr=0,Qr=function(){return tr=oa()},Ge=function(K,Te){return(V.event=K)&&m&&bP(K.target,m)||Te&&$e&&K.pointerType!=="touch"||J&&J(K,Te)},gr=function(){V._vx.reset(),V._vy.reset(),Dt.pause(),p&&p(V)},vn=function(){var K=V.deltaX=Pg(Xt),Te=V.deltaY=Pg(an),z=Math.abs(K)>=i,ee=Math.abs(Te)>=i;b&&(z||ee)&&b(V,K,Te,Xt,an),z&&(M&&V.deltaX>0&&M(V),L&&V.deltaX<0&&L(V),_&&_(V),R&&V.deltaX<0!=Ut<0&&R(V),Ut=V.deltaX,Xt[0]=Xt[1]=Xt[2]=0),ee&&(y&&V.deltaY>0&&y(V),v&&V.deltaY<0&&v(V),E&&E(V),A&&V.deltaY<0!=xe<0&&A(V),xe=V.deltaY,an[0]=an[1]=an[2]=0),(he||St)&&(ae&&ae(V),St&&(S&&St===1&&S(V),k&&k(V),St=0),he=!1),Ft&&!(Ft=!1)&&_t&&_t(V),ze&&(Se(V),ze=!1),pr=0},mr=function(K,Te,z){Xt[z]+=K,an[z]+=Te,V._vx.update(K),V._vy.update(Te),u?pr||(pr=requestAnimationFrame(vn)):vn()},cn=function(K,Te){mt&&!Ot&&(V.axis=Ot=Math.abs(K)>Math.abs(Te)?"x":"y",Ft=!0),Ot!=="y"&&(Xt[2]+=K,V._vx.update(K,!0)),Ot!=="x"&&(an[2]+=Te,V._vy.update(Te,!0)),u?pr||(pr=requestAnimationFrame(vn)):vn()},nr=function(K){if(!Ge(K,1)){K=Vo(K,h);var Te=K.clientX,z=K.clientY,ee=Te-V.x,H=z-V.y,Z=V.isDragging;V.x=Te,V.y=z,(Z||(ee||H)&&(Math.abs(V.startX-Te)>=s||Math.abs(V.startY-z)>=s))&&(St||(St=Z?2:1),Z||(V.isDragging=!0),cn(ee,H))}},Fn=V.onPress=function(Y){Ge(Y,1)||Y&&Y.button||(V.axis=Ot=null,Dt.pause(),V.isPressed=!0,Y=Vo(Y),Ut=xe=0,V.startX=V.x=Y.clientX,V.startY=V.y=Y.clientY,V._vx.reset(),V._vy.reset(),Jt(ue?a:je,sr[1],nr,qe,!0),V.deltaX=V.deltaY=0,N&&N(V))},ie=V.onRelease=function(Y){if(!Ge(Y,1)){Qt(ue?a:je,sr[1],nr,!0);var K=!isNaN(V.y-V.startY),Te=V.isDragging,z=Te&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),ee=Vo(Y);!z&&K&&(V._vx.reset(),V._vy.reset(),h&&Be&&Vt.delayedCall(.08,function(){if(oa()-tr>300&&!Y.defaultPrevented){if(Y.target.click)Y.target.click();else if(je.createEvent){var H=je.createEvent("MouseEvents");H.initMouseEvent("click",!0,!0,Dn,1,ee.screenX,ee.screenY,ee.clientX,ee.clientY,!1,!1,!1,!1,0,null),Y.target.dispatchEvent(H)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,p&&Te&&!ue&&Dt.restart(!0),St&&vn(),D&&Te&&D(V),O&&O(V,z)}},wn=function(K){return K.touches&&K.touches.length>1&&(V.isGesturing=!0)&&we(K,V.isDragging)},ln=function(){return(V.isGesturing=!1)||P(V)},Ce=function(K){if(!Ge(K)){var Te=Pe(),z=Jn();mr((Te-Zn)*tt,(z-Vr)*tt,1),Zn=Te,Vr=z,p&&Dt.restart(!0)}},un=function(K){if(!Ge(K)){K=Vo(K,h),Se&&(ze=!0);var Te=(K.deltaMode===1?l:K.deltaMode===2?Dn.innerHeight:1)*I;mr(K.deltaX*Te,K.deltaY*Te,0),p&&!ue&&Dt.restart(!0)}},En=function(K){if(!Ge(K)){var Te=K.clientX,z=K.clientY,ee=Te-V.x,H=z-V.y;V.x=Te,V.y=z,he=!0,p&&Dt.restart(!0),(ee||H)&&cn(ee,H)}},Un=function(K){V.event=K,G(V)},rr=function(K){V.event=K,re(V)},Bi=function(K){return Ge(K)||Vo(K,h)&&Re(V)};Dt=V._dc=Vt.delayedCall(g||.25,gr).pause(),V.deltaX=V.deltaY=0,V._vx=gh(0,50,!0),V._vy=gh(0,50,!0),V.scrollX=Pe,V.scrollY=Jn,V.isDragging=V.isGesturing=V.isPressed=!1,$T(this),V.enable=function(Y){return V.isEnabled||(Jt(er?je:a,"scroll",ph),o.indexOf("scroll")>=0&&Jt(er?je:a,"scroll",Ce,qe,at),o.indexOf("wheel")>=0&&Jt(a,"wheel",un,qe,at),(o.indexOf("touch")>=0&&zT||o.indexOf("pointer")>=0)&&(Jt(a,sr[0],Fn,qe,at),Jt(je,sr[2],ie),Jt(je,sr[3],ie),Be&&Jt(a,"click",Qr,!0,!0),Re&&Jt(a,"click",Bi),we&&Jt(je,"gesturestart",wn),P&&Jt(je,"gestureend",ln),G&&Jt(a,Yi+"enter",Un),re&&Jt(a,Yi+"leave",rr),ae&&Jt(a,Yi+"move",En)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=he=St=!1,V._vx.reset(),V._vy.reset(),Zn=Pe(),Vr=Jn(),Y&&Y.type&&Fn(Y),At&&At(V)),V},V.disable=function(){V.isEnabled&&(qs.filter(function(Y){return Y!==V&&aa(Y.target)}).length||Qt(er?je:a,"scroll",ph),V.isPressed&&(V._vx.reset(),V._vy.reset(),Qt(ue?a:je,sr[1],nr,!0)),Qt(er?je:a,"scroll",Ce,at),Qt(a,"wheel",un,at),Qt(a,sr[0],Fn,at),Qt(je,sr[2],ie),Qt(je,sr[3],ie),Qt(a,"click",Qr,!0),Qt(a,"click",Bi),Qt(je,"gesturestart",wn),Qt(je,"gestureend",ln),Qt(a,Yi+"enter",Un),Qt(a,Yi+"leave",rr),Qt(a,Yi+"move",En),V.isEnabled=V.isPressed=V.isDragging=!1,on&&on(V))},V.kill=V.revert=function(){V.disable();var Y=qs.indexOf(V);Y>=0&&qs.splice(Y,1),qr===V&&(qr=0)},qs.push(V),ue&&aa(a)&&(qr=V),V.enable(w)},AP(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();ot.version="3.14.2";ot.create=function(r){return new ot(r)};ot.register=GT;ot.getAll=function(){return qs.slice()};ot.getById=function(r){return qs.filter(function(e){return e.vars.id===r})[0]};jT()&&Vt.registerPlugin(ot);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var j,Ls,ce,Ne,Cn,Ie,jf,fl,Oa,ca,Ho,ac,qt,$l,mh,en,Cg,kg,Fs,KT,vu,YT,Zt,_h,XT,QT,oi,yh,Hf,Js,Wf,la,Th,wu,cc=1,jt=Date.now,Eu=jt(),Qn=0,Wo=0,Dg=function(e,t,n){var i=Rn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Og=function(e,t){return t&&(!Rn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},RP=function r(){return Wo&&requestAnimationFrame(r)},xg=function(){return $l=1},Ng=function(){return $l=0},wr=function(e){return e},Go=function(e){return Math.round(e*1e5)/1e5||0},JT=function(){return typeof window<"u"},ZT=function(){return j||JT()&&(j=window.gsap)&&j.registerPlugin&&j},ms=function(e){return!!~jf.indexOf(e)},ev=function(e){return(e==="Height"?Wf:ce["inner"+e])||Cn["client"+e]||Ie["client"+e]},tv=function(e){return Ai(e,"getBoundingClientRect")||(ms(e)?function(){return Vc.width=ce.innerWidth,Vc.height=Wf,Vc}:function(){return Ur(e)})},PP=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ai(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?ev(s):e["client"+s])||0}},CP=function(e,t){return!t||~Dr.indexOf(e)?tv(e):function(){return Vc}},Ar=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ai(e,n))?o()-tv(e)()[s]:ms(e)?(Cn[n]||Ie[n])-ev(i):e[n]-e["offset"+i])},lc=function(e,t){for(var n=0;n<Fs.length;n+=3)(!t||~t.indexOf(Fs[n+1]))&&e(Fs[n],Fs[n+1],Fs[n+2])},Rn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},Ko=function(e){return typeof e=="number"},Xi=function(e){return typeof e=="object"},Mo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Iu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ds=Math.abs,nv="left",rv="top",Gf="right",Kf="bottom",as="width",cs="height",ua="Right",ha="Left",fa="Top",da="Bottom",ft="padding",$n="margin",po="Width",Yf="Height",vt="px",jn=function(e){return ce.getComputedStyle(e)},kP=function(e){var t=jn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Vg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ur=function(e,t){var n=t&&jn(e)[mh]!=="matrix(1, 0, 0, 1, 0, 0)"&&j.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},dl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},iv=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},DP=function(e){return function(t){return j.utils.snap(iv(e),t)}},Xf=function(e){var t=j.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},OP=function(e){return function(t,n){return Xf(iv(e))(t,n.direction)}},uc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Pt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Rt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},hc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Mg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},fc={toggleActions:"play",anticipatePin:0},pl={top:0,left:0,center:.5,bottom:1,right:1},Dc=function(e,t){if(Rn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in pl?pl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},dc=function(e,t,n,i,s,o,a,l){var u=s.startColor,h=s.endColor,p=s.fontSize,g=s.indent,m=s.fontWeight,I=Ne.createElement("div"),w=ms(n)||Ai(n,"pinType")==="fixed",S=e.indexOf("scroller")!==-1,D=w?Ie:n,k=e.indexOf("start")!==-1,N=k?u:h,O="border-color:"+N+";font-size:"+p+";color:"+N+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return O+="position:"+((S||l)&&w?"fixed;":"absolute;"),(S||l||!w)&&(O+=(i===wt?Gf:Kf)+":"+(o+parseFloat(g))+"px;"),a&&(O+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),I._isStart=k,I.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),I.style.cssText=O,I.innerText=t||t===0?e+"-"+t:e,D.children[0]?D.insertBefore(I,D.children[0]):D.appendChild(I),I._offset=I["offset"+i.op.d2],Oc(I,0,i,k),I},Oc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+po]=1,s["border"+a+po]=0,s[n.p]=t+"px",j.set(e,s)},oe=[],vh={},xa,Lg=function(){return jt()-Qn>34&&(xa||(xa=requestAnimationFrame(jr)))},Os=function(){(!Zt||!Zt.isPressed||Zt.startX>Ie.clientWidth)&&(le.cache++,Zt?xa||(xa=requestAnimationFrame(jr)):jr(),Qn||ys("scrollStart"),Qn=jt())},Au=function(){QT=ce.innerWidth,XT=ce.innerHeight},Yo=function(e){le.cache++,(e===!0||!qt&&!YT&&!Ne.fullscreenElement&&!Ne.webkitFullscreenElement&&(!_h||QT!==ce.innerWidth||Math.abs(ce.innerHeight-XT)>ce.innerHeight*.25))&&fl.restart(!0)},_s={},xP=[],sv=function r(){return Rt(de,"scrollEnd",r)||es(!0)},ys=function(e){return _s[e]&&_s[e].map(function(t){return t()})||xP},bn=[],ov=function(e){for(var t=0;t<bn.length;t+=5)(!e||bn[t+4]&&bn[t+4].query===e)&&(bn[t].style.cssText=bn[t+1],bn[t].getBBox&&bn[t].setAttribute("transform",bn[t+2]||""),bn[t+3].uncache=1)},av=function(){return le.forEach(function(e){return Gt(e)&&++e.cacheID&&(e.rec=e())})},Qf=function(e,t){var n;for(en=0;en<oe.length;en++)n=oe[en],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));la=!0,t&&ov(t),t||ys("revert")},cv=function(e,t){le.cache++,(t||!tn)&&le.forEach(function(n){return Gt(n)&&n.cacheID++&&(n.rec=0)}),Rn(e)&&(ce.history.scrollRestoration=Hf=e)},tn,ls=0,Fg,NP=function(){if(Fg!==ls){var e=Fg=ls;requestAnimationFrame(function(){return e===ls&&es(!0)})}},lv=function(){Ie.appendChild(Js),Wf=!Zt&&Js.offsetHeight||ce.innerHeight,Ie.removeChild(Js)},Ug=function(e){return Oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},es=function(e,t){if(Cn=Ne.documentElement,Ie=Ne.body,jf=[ce,Ne,Cn,Ie],Qn&&!e&&!la){Pt(de,"scrollEnd",sv);return}lv(),tn=de.isRefreshing=!0,la||av();var n=ys("refreshInit");KT&&de.sort(),t||Qf(),le.forEach(function(i){Gt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),oe.slice(0).forEach(function(i){return i.refresh()}),la=!1,oe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Th=1,Ug(!0),oe.forEach(function(i){var s=Ar(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Ug(!1),Th=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),le.forEach(function(i){Gt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),cv(Hf,1),fl.pause(),ls++,tn=2,jr(2),oe.forEach(function(i){return Gt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),tn=de.isRefreshing=!1,ys("refresh")},wh=0,xc=1,pa,jr=function(e){if(e===2||!tn&&!la){de.isUpdating=!0,pa&&pa.update(0);var t=oe.length,n=jt(),i=n-Eu>=50,s=t&&oe[0].scroll();if(xc=wh>s?-1:1,tn||(wh=s),i&&(Qn&&!$l&&n-Qn>200&&(Qn=0,ys("scrollEnd")),Ho=Eu,Eu=n),xc<0){for(en=t;en-- >0;)oe[en]&&oe[en].update(0,i);xc=1}else for(en=0;en<t;en++)oe[en]&&oe[en].update(0,i);de.isUpdating=!1}xa=0},Eh=[nv,rv,Kf,Gf,$n+da,$n+ua,$n+fa,$n+ha,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Nc=Eh.concat([as,cs,"boxSizing","max"+po,"max"+Yf,"position",$n,ft,ft+fa,ft+ua,ft+da,ft+ha]),VP=function(e,t,n){Zs(n);var i=e._gsap;if(i.spacerIsNative)Zs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Su=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Eh.length,o=t.style,a=e.style,l;s--;)l=Eh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Kf]=a[Gf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[as]=dl(e,rn)+vt,o[cs]=dl(e,wt)+vt,o[ft]=a[$n]=a[rv]=a[nv]="0",Zs(i),a[as]=a["max"+po]=n[as],a[cs]=a["max"+Yf]=n[cs],a[ft]=n[ft],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},MP=/([A-Z])/g,Zs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||j.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(MP,"-$1").toLowerCase())}},pc=function(e){for(var t=Nc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Nc[s],n[Nc[s]]);return i.t=e,i},LP=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Vc={left:0,top:0},Bg=function(e,t,n,i,s,o,a,l,u,h,p,g,m,I){Gt(e)&&(e=e(l)),Rn(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?Dc("0"+e.substr(3),n):0));var w=m?m.time():0,S,D,k;if(m&&m.seek(0),isNaN(e)||(e=+e),Ko(e))m&&(e=j.utils.mapRange(m.scrollTrigger.start,m.scrollTrigger.end,0,g,e)),a&&Oc(a,n,i,!0);else{Gt(t)&&(t=t(l));var N=(e||"0").split(" "),O,M,L,v;k=dn(t,l)||Ie,O=Ur(k)||{},(!O||!O.left&&!O.top)&&jn(k).display==="none"&&(v=k.style.display,k.style.display="block",O=Ur(k),v?k.style.display=v:k.style.removeProperty("display")),M=Dc(N[0],O[i.d]),L=Dc(N[1]||"0",n),e=O[i.p]-u[i.p]-h+M+s-L,a&&Oc(a,L,i,n-L<20||a._isStart&&L>20),n-=n-L}if(I&&(l[I]=e||-.001,e<0&&(e=0)),o){var y=e+n,_=o._isStart;S="scroll"+i.d2,Oc(o,y,i,_&&y>20||!_&&(p?Math.max(Ie[S],Cn[S]):o.parentNode[S])<=y+1),p&&(u=Ur(a),p&&(o.style[i.op.p]=u[i.op.p]-i.op.m-o._offset+vt))}return m&&k&&(S=Ur(k),m.seek(g),D=Ur(k),m._caScrollDist=S[i.p]-D[i.p],e=e/m._caScrollDist*g),m&&m.seek(w),m?e:Math.round(e)},FP=/(webkit|moz|length|cssText|inset)/i,zg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Ie){e._stOrig=s.cssText,a=jn(e);for(o in a)!+o&&!FP.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;j.core.getCache(e).uncache=1,t.appendChild(e)}},uv=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},gc=function(e,t,n){var i={};i[t.p]="+="+n,j.set(e,i)},qg=function(e,t){var n=Mi(e,t),i="_scroll"+t.p2,s=function o(a,l,u,h,p){var g=o.tween,m=l.onComplete,I={};u=u||n();var w=uv(n,u,function(){g.kill(),o.tween=0});return p=h&&p||0,h=h||a-u,g&&g.kill(),l[i]=a,l.inherit=!1,l.modifiers=I,I[i]=function(){return w(u+h*g.ratio+p*g.ratio*g.ratio)},l.onUpdate=function(){le.cache++,o.tween&&jr()},l.onComplete=function(){o.tween=0,m&&m.call(g)},g=o.tween=j.to(e,l),g};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Pt(e,"wheel",n.wheelHandler),de.isTouch&&Pt(e,"touchmove",n.wheelHandler),s},de=function(){function r(t,n){Ls||r.register(j)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wo){this.update=this.refresh=this.kill=wr;return}n=Vg(Rn(n)||Ko(n)||n.nodeType?{trigger:n}:n,fc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,h=s.onRefresh,p=s.scrub,g=s.trigger,m=s.pin,I=s.pinSpacing,w=s.invalidateOnRefresh,S=s.anticipatePin,D=s.onScrubComplete,k=s.onSnapComplete,N=s.once,O=s.snap,M=s.pinReparent,L=s.pinSpacer,v=s.containerAnimation,y=s.fastScrollEnd,_=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?rn:wt,b=!p&&p!==0,R=dn(n.scroller||ce),A=j.core.getCache(R),G=ms(R),re=("pinType"in n?n.pinType:Ai(R,"pinType")||G&&"fixed")==="fixed",ae=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],J=b&&n.toggleActions.split(" "),ue="markers"in n?n.markers:fc.markers,we=G?0:parseFloat(jn(R)["border"+E.p2+po])||0,P=this,Se=n.onRefreshInit&&function(){return n.onRefreshInit(P)},At=PP(R,G,E),on=CP(R,G),Re=0,tt=0,at=0,Be=Mi(R,E),mt,_t,pr,Dt,St,he,ze,Ft,Ot,V,Ut,xe,qe,Pe,Jn,Zn,Vr,$e,er,je,Xt,an,tr,Qr,Ge,gr,vn,mr,cn,nr,Fn,ie,wn,ln,Ce,un,En,Un,rr;if(P._startClamp=P._endClamp=!1,P._dir=E,S*=45,P.scroller=R,P.scroll=v?v.time.bind(v):Be,Dt=Be(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(KT=1,n.refreshPriority===-9999&&(pa=P)),A.tweenScroll=A.tweenScroll||{top:qg(R,wt),left:qg(R,rn)},P.tweenTo=mt=A.tweenScroll[E.p],P.scrubDuration=function(z){wn=Ko(z)&&z,wn?ie?ie.duration(z):ie=j.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:wn,paused:!0,onComplete:function(){return D&&D(P)}}):(ie&&ie.progress(1).kill(),ie=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(p),nr=0,l||(l=i.vars.id)),O&&((!Xi(O)||O.push)&&(O={snapTo:O}),"scrollBehavior"in Ie.style&&j.set(G?[Ie,Cn]:R,{scrollBehavior:"auto"}),le.forEach(function(z){return Gt(z)&&z.target===(G?Ne.scrollingElement||Cn:R)&&(z.smooth=!1)}),pr=Gt(O.snapTo)?O.snapTo:O.snapTo==="labels"?DP(i):O.snapTo==="labelsDirectional"?OP(i):O.directional!==!1?function(z,ee){return Xf(O.snapTo)(z,jt()-tt<500?0:ee.direction)}:j.utils.snap(O.snapTo),ln=O.duration||{min:.1,max:2},ln=Xi(ln)?ca(ln.min,ln.max):ca(ln,ln),Ce=j.delayedCall(O.delay||wn/2||.1,function(){var z=Be(),ee=jt()-tt<500,H=mt.tween;if((ee||Math.abs(P.getVelocity())<10)&&!H&&!$l&&Re!==z){var Z=(z-he)/Pe,He=i&&!b?i.totalProgress():Z,fe=ee?0:(He-Fn)/(jt()-Ho)*1e3||0,Ee=j.utils.clamp(-Z,1-Z,Ds(fe/2)*fe/.185),yt=Z+(O.inertia===!1?0:Ee),Me,be,ve=O,hn=ve.onStart,Le=ve.onInterrupt,Bt=ve.onComplete;if(Me=pr(yt,P),Ko(Me)||(Me=yt),be=Math.max(0,Math.round(he+Me*Pe)),z<=ze&&z>=he&&be!==z){if(H&&!H._initted&&H.data<=Ds(be-z))return;O.inertia===!1&&(Ee=Me-Z),mt(be,{duration:ln(Ds(Math.max(Ds(yt-He),Ds(Me-He))*.185/fe/.05||0)),ease:O.ease||"power3",data:Ds(be-z),onInterrupt:function(){return Ce.restart(!0)&&Le&&Le(P)},onComplete:function(){P.update(),Re=Be(),i&&!b&&(ie?ie.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),nr=Fn=i&&!b?i.totalProgress():P.progress,k&&k(P),Bt&&Bt(P)}},z,Ee*Pe,be-z-Ee*Pe),hn&&hn(P,mt.tween)}}else P.isActive&&Re!==z&&Ce.restart(!0)}).pause()),l&&(vh[l]=P),g=P.trigger=dn(g||m!==!0&&m),rr=g&&g._gsap&&g._gsap.stRevert,rr&&(rr=rr(P)),m=m===!0?g:dn(m),Rn(a)&&(a={targets:g,className:a}),m&&(I===!1||I===$n||(I=!I&&m.parentNode&&m.parentNode.style&&jn(m.parentNode).display==="flex"?!1:ft),P.pin=m,_t=j.core.getCache(m),_t.spacer?Jn=_t.pinState:(L&&(L=dn(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),_t.spacerIsNative=!!L,L&&(_t.spacerState=pc(L))),_t.spacer=$e=L||Ne.createElement("div"),$e.classList.add("pin-spacer"),l&&$e.classList.add("pin-spacer-"+l),_t.pinState=Jn=pc(m)),n.force3D!==!1&&j.set(m,{force3D:!0}),P.spacer=$e=_t.spacer,cn=jn(m),Qr=cn[I+E.os2],je=j.getProperty(m),Xt=j.quickSetter(m,E.a,vt),Su(m,$e,cn),Vr=pc(m)),ue){xe=Xi(ue)?Vg(ue,Mg):Mg,V=dc("scroller-start",l,R,E,xe,0),Ut=dc("scroller-end",l,R,E,xe,0,V),er=V["offset"+E.op.d2];var Bi=dn(Ai(R,"content")||R);Ft=this.markerStart=dc("start",l,Bi,E,xe,er,0,v),Ot=this.markerEnd=dc("end",l,Bi,E,xe,er,0,v),v&&(Un=j.quickSetter([Ft,Ot],E.a,vt)),!re&&!(Dr.length&&Ai(R,"fixedMarkers")===!0)&&(kP(G?Ie:R),j.set([V,Ut],{force3D:!0}),gr=j.quickSetter(V,E.a,vt),mr=j.quickSetter(Ut,E.a,vt))}if(v){var Y=v.vars.onUpdate,K=v.vars.onUpdateParams;v.eventCallback("onUpdate",function(){P.update(0,0,1),Y&&Y.apply(v,K||[])})}if(P.previous=function(){return oe[oe.indexOf(P)-1]},P.next=function(){return oe[oe.indexOf(P)+1]},P.revert=function(z,ee){if(!ee)return P.kill(!0);var H=z!==!1||!P.enabled,Z=qt;H!==P.isReverted&&(H&&(un=Math.max(Be(),P.scroll.rec||0),at=P.progress,En=i&&i.progress()),Ft&&[Ft,Ot,V,Ut].forEach(function(He){return He.style.display=H?"none":"block"}),H&&(qt=P,P.update(H)),m&&(!M||!P.isActive)&&(H?VP(m,$e,Jn):Su(m,$e,jn(m),Ge)),H||P.update(H),qt=Z,P.isReverted=H)},P.refresh=function(z,ee,H,Z){if(!((qt||!P.enabled)&&!ee)){if(m&&z&&Qn){Pt(r,"scrollEnd",sv);return}!tn&&Se&&Se(P),qt=P,mt.tween&&!H&&(mt.tween.kill(),mt.tween=0),ie&&ie.pause(),w&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ir){return ir.vars.immediateRender&&ir.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var He=At(),fe=on(),Ee=v?v.duration():Ar(R,E),yt=Pe<=.01||!Pe,Me=0,be=Z||0,ve=Xi(H)?H.end:n.end,hn=n.endTrigger||g,Le=Xi(H)?H.start:n.start||(n.start===0||!g?0:m?"0 0":"0 100%"),Bt=P.pinnedContainer=n.pinnedContainer&&dn(n.pinnedContainer,P),Bn=g&&Math.max(0,oe.indexOf(P))||0,Je=Bn,ct,lt,In,zn,ut,nt,An,Rs,Ao,Mr,fn,Jr,zi;for(ue&&Xi(H)&&(Jr=j.getProperty(V,E.p),zi=j.getProperty(Ut,E.p));Je-- >0;)nt=oe[Je],nt.end||nt.refresh(0,1)||(qt=P),An=nt.pin,An&&(An===g||An===m||An===Bt)&&!nt.isReverted&&(Mr||(Mr=[]),Mr.unshift(nt),nt.revert(!0,!0)),nt!==oe[Je]&&(Bn--,Je--);for(Gt(Le)&&(Le=Le(P)),Le=Dg(Le,"start",P),he=Bg(Le,g,He,E,Be(),Ft,V,P,fe,we,re,Ee,v,P._startClamp&&"_startClamp")||(m?-.001:0),Gt(ve)&&(ve=ve(P)),Rn(ve)&&!ve.indexOf("+=")&&(~ve.indexOf(" ")?ve=(Rn(Le)?Le.split(" ")[0]:"")+ve:(Me=Dc(ve.substr(2),He),ve=Rn(Le)?Le:(v?j.utils.mapRange(0,v.duration(),v.scrollTrigger.start,v.scrollTrigger.end,he):he)+Me,hn=g)),ve=Dg(ve,"end",P),ze=Math.max(he,Bg(ve||(hn?"100% 0":Ee),hn,He,E,Be()+Me,Ot,Ut,P,fe,we,re,Ee,v,P._endClamp&&"_endClamp"))||-.001,Me=0,Je=Bn;Je--;)nt=oe[Je]||{},An=nt.pin,An&&nt.start-nt._pinPush<=he&&!v&&nt.end>0&&(ct=nt.end-(P._startClamp?Math.max(0,nt.start):nt.start),(An===g&&nt.start-nt._pinPush<he||An===Bt)&&isNaN(Le)&&(Me+=ct*(1-nt.progress)),An===m&&(be+=ct));if(he+=Me,ze+=Me,P._startClamp&&(P._startClamp+=Me),P._endClamp&&!tn&&(P._endClamp=ze||-.001,ze=Math.min(ze,Ar(R,E))),Pe=ze-he||(he-=.01)&&.001,yt&&(at=j.utils.clamp(0,1,j.utils.normalize(he,ze,un))),P._pinPush=be,Ft&&Me&&(ct={},ct[E.a]="+="+Me,Bt&&(ct[E.p]="-="+Be()),j.set([Ft,Ot],ct)),m&&!(Th&&P.end>=Ar(R,E)))ct=jn(m),zn=E===wt,In=Be(),an=parseFloat(je(E.a))+be,!Ee&&ze>1&&(fn=(G?Ne.scrollingElement||Cn:R).style,fn={style:fn,value:fn["overflow"+E.a.toUpperCase()]},G&&jn(Ie)["overflow"+E.a.toUpperCase()]!=="scroll"&&(fn.style["overflow"+E.a.toUpperCase()]="scroll")),Su(m,$e,ct),Vr=pc(m),lt=Ur(m,!0),Rs=re&&Mi(R,zn?rn:wt)(),I?(Ge=[I+E.os2,Pe+be+vt],Ge.t=$e,Je=I===ft?dl(m,E)+Pe+be:0,Je&&(Ge.push(E.d,Je+vt),$e.style.flexBasis!=="auto"&&($e.style.flexBasis=Je+vt)),Zs(Ge),Bt&&oe.forEach(function(ir){ir.pin===Bt&&ir.vars.pinSpacing!==!1&&(ir._subPinOffset=!0)}),re&&Be(un)):(Je=dl(m,E),Je&&$e.style.flexBasis!=="auto"&&($e.style.flexBasis=Je+vt)),re&&(ut={top:lt.top+(zn?In-he:Rs)+vt,left:lt.left+(zn?Rs:In-he)+vt,boxSizing:"border-box",position:"fixed"},ut[as]=ut["max"+po]=Math.ceil(lt.width)+vt,ut[cs]=ut["max"+Yf]=Math.ceil(lt.height)+vt,ut[$n]=ut[$n+fa]=ut[$n+ua]=ut[$n+da]=ut[$n+ha]="0",ut[ft]=ct[ft],ut[ft+fa]=ct[ft+fa],ut[ft+ua]=ct[ft+ua],ut[ft+da]=ct[ft+da],ut[ft+ha]=ct[ft+ha],Zn=LP(Jn,ut,M),tn&&Be(0)),i?(Ao=i._initted,vu(1),i.render(i.duration(),!0,!0),tr=je(E.a)-an+Pe+be,vn=Math.abs(Pe-tr)>1,re&&vn&&Zn.splice(Zn.length-2,2),i.render(0,!0,!0),Ao||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),vu(0)):tr=Pe,fn&&(fn.value?fn.style["overflow"+E.a.toUpperCase()]=fn.value:fn.style.removeProperty("overflow-"+E.a));else if(g&&Be()&&!v)for(lt=g.parentNode;lt&&lt!==Ie;)lt._pinOffset&&(he-=lt._pinOffset,ze-=lt._pinOffset),lt=lt.parentNode;Mr&&Mr.forEach(function(ir){return ir.revert(!1,!0)}),P.start=he,P.end=ze,Dt=St=tn?un:Be(),!v&&!tn&&(Dt<un&&Be(un),P.scroll.rec=0),P.revert(!1,!0),tt=jt(),Ce&&(Re=-1,Ce.restart(!0)),qt=0,i&&b&&(i._initted||En)&&i.progress()!==En&&i.progress(En||0,!0).render(i.time(),!0,!0),(yt||at!==P.progress||v||w||i&&!i._initted)&&(i&&!b&&(i._initted||at||i.vars.immediateRender!==!1)&&i.totalProgress(v&&he<-.001&&!at?j.utils.normalize(he,ze,0):at,!0),P.progress=yt||(Dt-he)/Pe===at?0:at),m&&I&&($e._pinOffset=Math.round(P.progress*tr)),ie&&ie.invalidate(),isNaN(Jr)||(Jr-=j.getProperty(V,E.p),zi-=j.getProperty(Ut,E.p),gc(V,E,Jr),gc(Ft,E,Jr-(Z||0)),gc(Ut,E,zi),gc(Ot,E,zi-(Z||0))),yt&&!tn&&P.update(),h&&!tn&&!qe&&(qe=!0,h(P),qe=!1)}},P.getVelocity=function(){return(Be()-St)/(jt()-Ho)*1e3||0},P.endAnimation=function(){Mo(P.callbackAnimation),i&&(ie?ie.progress(1):i.paused()?b||Mo(i,P.direction<0,1):Mo(i,i.reversed()))},P.labelToScroll=function(z){return i&&i.labels&&(he||P.refresh()||he)+i.labels[z]/i.duration()*Pe||0},P.getTrailing=function(z){var ee=oe.indexOf(P),H=P.direction>0?oe.slice(0,ee).reverse():oe.slice(ee+1);return(Rn(z)?H.filter(function(Z){return Z.vars.preventOverlaps===z}):H).filter(function(Z){return P.direction>0?Z.end<=he:Z.start>=ze})},P.update=function(z,ee,H){if(!(v&&!H&&!z)){var Z=tn===!0?un:P.scroll(),He=z?0:(Z-he)/Pe,fe=He<0?0:He>1?1:He||0,Ee=P.progress,yt,Me,be,ve,hn,Le,Bt,Bn;if(ee&&(St=Dt,Dt=v?Be():Z,O&&(Fn=nr,nr=i&&!b?i.totalProgress():fe)),S&&m&&!qt&&!cc&&Qn&&(!fe&&he<Z+(Z-St)/(jt()-Ho)*S?fe=1e-4:fe===1&&ze>Z+(Z-St)/(jt()-Ho)*S&&(fe=.9999)),fe!==Ee&&P.enabled){if(yt=P.isActive=!!fe&&fe<1,Me=!!Ee&&Ee<1,Le=yt!==Me,hn=Le||!!fe!=!!Ee,P.direction=fe>Ee?1:-1,P.progress=fe,hn&&!qt&&(be=fe&&!Ee?0:fe===1?1:Ee===1?2:3,b&&(ve=!Le&&J[be+1]!=="none"&&J[be+1]||J[be],Bn=i&&(ve==="complete"||ve==="reset"||ve in i))),_&&(Le||Bn)&&(Bn||p||!i)&&(Gt(_)?_(P):P.getTrailing(_).forEach(function(In){return In.endAnimation()})),b||(ie&&!qt&&!cc?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",fe,i._tTime/i._tDur):(ie.vars.totalProgress=fe,ie.invalidate().restart())):i&&i.totalProgress(fe,!!(qt&&(tt||z)))),m){if(z&&I&&($e.style[I+E.os2]=Qr),!re)Xt(Go(an+tr*fe));else if(hn){if(Bt=!z&&fe>Ee&&ze+1>Z&&Z+1>=Ar(R,E),M)if(!z&&(yt||Bt)){var Je=Ur(m,!0),ct=Z-he;zg(m,Ie,Je.top+(E===wt?ct:0)+vt,Je.left+(E===wt?0:ct)+vt)}else zg(m,$e);Zs(yt||Bt?Zn:Vr),vn&&fe<1&&yt||Xt(an+(fe===1&&!Bt?tr:0))}}O&&!mt.tween&&!qt&&!cc&&Ce.restart(!0),a&&(Le||N&&fe&&(fe<1||!wu))&&Oa(a.targets).forEach(function(In){return In.classList[yt||N?"add":"remove"](a.className)}),o&&!b&&!z&&o(P),hn&&!qt?(b&&(Bn&&(ve==="complete"?i.pause().totalProgress(1):ve==="reset"?i.restart(!0).pause():ve==="restart"?i.restart(!0):i[ve]()),o&&o(P)),(Le||!wu)&&(u&&Le&&Iu(P,u),ae[be]&&Iu(P,ae[be]),N&&(fe===1?P.kill(!1,1):ae[be]=0),Le||(be=fe===1?1:3,ae[be]&&Iu(P,ae[be]))),y&&!yt&&Math.abs(P.getVelocity())>(Ko(y)?y:2500)&&(Mo(P.callbackAnimation),ie?ie.progress(1):Mo(i,ve==="reverse"?1:!fe,1))):b&&o&&!qt&&o(P)}if(mr){var lt=v?Z/v.duration()*(v._caScrollDist||0):Z;gr(lt+(V._isFlipped?1:0)),mr(lt)}Un&&Un(-Z/v.duration()*(v._caScrollDist||0))}},P.enable=function(z,ee){P.enabled||(P.enabled=!0,Pt(R,"resize",Yo),G||Pt(R,"scroll",Os),Se&&Pt(r,"refreshInit",Se),z!==!1&&(P.progress=at=0,Dt=St=Re=Be()),ee!==!1&&P.refresh())},P.getTween=function(z){return z&&mt?mt.tween:ie},P.setPositions=function(z,ee,H,Z){if(v){var He=v.scrollTrigger,fe=v.duration(),Ee=He.end-He.start;z=He.start+Ee*z/fe,ee=He.start+Ee*ee/fe}P.refresh(!1,!1,{start:Og(z,H&&!!P._startClamp),end:Og(ee,H&&!!P._endClamp)},Z),P.update()},P.adjustPinSpacing=function(z){if(Ge&&z){var ee=Ge.indexOf(E.d)+1;Ge[ee]=parseFloat(Ge[ee])+z+vt,Ge[1]=parseFloat(Ge[1])+z+vt,Zs(Ge)}},P.disable=function(z,ee){if(z!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,ee||ie&&ie.pause(),un=0,_t&&(_t.uncache=1),Se&&Rt(r,"refreshInit",Se),Ce&&(Ce.pause(),mt.tween&&mt.tween.kill()&&(mt.tween=0)),!G)){for(var H=oe.length;H--;)if(oe[H].scroller===R&&oe[H]!==P)return;Rt(R,"resize",Yo),G||Rt(R,"scroll",Os)}},P.kill=function(z,ee){P.disable(z,ee),ie&&!ee&&ie.kill(),l&&delete vh[l];var H=oe.indexOf(P);H>=0&&oe.splice(H,1),H===en&&xc>0&&en--,H=0,oe.forEach(function(Z){return Z.scroller===P.scroller&&(H=1)}),H||tn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,z&&i.revert({kill:!1}),ee||i.kill()),Ft&&[Ft,Ot,V,Ut].forEach(function(Z){return Z.parentNode&&Z.parentNode.removeChild(Z)}),pa===P&&(pa=0),m&&(_t&&(_t.uncache=1),H=0,oe.forEach(function(Z){return Z.pin===m&&H++}),H||(_t.spacer=0)),n.onKill&&n.onKill(P)},oe.push(P),P.enable(!1,!1),rr&&rr(P),i&&i.add&&!Pe){var Te=P.update;P.update=function(){P.update=Te,le.cache++,he||ze||P.refresh()},j.delayedCall(.01,P.update),Pe=.01,he=ze=0}else P.refresh();m&&NP()},r.register=function(n){return Ls||(j=n||ZT(),JT()&&window.document&&r.enable(),Ls=Wo),Ls},r.defaults=function(n){if(n)for(var i in n)fc[i]=n[i];return fc},r.disable=function(n,i){Wo=0,oe.forEach(function(o){return o[i?"kill":"disable"](n)}),Rt(ce,"wheel",Os),Rt(Ne,"scroll",Os),clearInterval(ac),Rt(Ne,"touchcancel",wr),Rt(Ie,"touchstart",wr),uc(Rt,Ne,"pointerdown,touchstart,mousedown",xg),uc(Rt,Ne,"pointerup,touchend,mouseup",Ng),fl.kill(),lc(Rt);for(var s=0;s<le.length;s+=3)hc(Rt,le[s],le[s+1]),hc(Rt,le[s],le[s+2])},r.enable=function(){if(ce=window,Ne=document,Cn=Ne.documentElement,Ie=Ne.body,j&&(Oa=j.utils.toArray,ca=j.utils.clamp,yh=j.core.context||wr,vu=j.core.suppressOverwrites||wr,Hf=ce.history.scrollRestoration||"auto",wh=ce.pageYOffset||0,j.core.globals("ScrollTrigger",r),Ie)){Wo=1,Js=document.createElement("div"),Js.style.height="100vh",Js.style.position="absolute",lv(),RP(),ot.register(j),r.isTouch=ot.isTouch,oi=ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_h=ot.isTouch===1,Pt(ce,"wheel",Os),jf=[ce,Ne,Cn,Ie],j.matchMedia?(r.matchMedia=function(u){var h=j.matchMedia(),p;for(p in u)h.add(p,u[p]);return h},j.addEventListener("matchMediaInit",function(){av(),Qf()}),j.addEventListener("matchMediaRevert",function(){return ov()}),j.addEventListener("matchMedia",function(){es(0,1),ys("matchMedia")}),j.matchMedia().add("(orientation: portrait)",function(){return Au(),Au})):console.warn("Requires GSAP 3.11.0 or later"),Au(),Pt(Ne,"scroll",Os);var n=Ie.hasAttribute("style"),i=Ie.style,s=i.borderTopStyle,o=j.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ur(Ie),wt.m=Math.round(a.top+wt.sc())||0,rn.m=Math.round(a.left+rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Ie.setAttribute("style",""),Ie.removeAttribute("style")),ac=setInterval(Lg,250),j.delayedCall(.5,function(){return cc=0}),Pt(Ne,"touchcancel",wr),Pt(Ie,"touchstart",wr),uc(Pt,Ne,"pointerdown,touchstart,mousedown",xg),uc(Pt,Ne,"pointerup,touchend,mouseup",Ng),mh=j.utils.checkPrefix("transform"),Nc.push(mh),Ls=jt(),fl=j.delayedCall(.2,es).pause(),Fs=[Ne,"visibilitychange",function(){var u=ce.innerWidth,h=ce.innerHeight;Ne.hidden?(Cg=u,kg=h):(Cg!==u||kg!==h)&&Yo()},Ne,"DOMContentLoaded",es,ce,"load",es,ce,"resize",Yo],lc(Pt),oe.forEach(function(u){return u.enable(0,1)}),l=0;l<le.length;l+=3)hc(Rt,le[l],le[l+1]),hc(Rt,le[l],le[l+2])}},r.config=function(n){"limitCallbacks"in n&&(wu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ac)||(ac=i)&&setInterval(Lg,i),"ignoreMobileResize"in n&&(_h=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(lc(Rt)||lc(Pt,n.autoRefreshEvents||"none"),YT=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=dn(n),o=le.indexOf(s),a=ms(s);~o&&le.splice(o,a?6:2),i&&(a?Dr.unshift(ce,i,Ie,i,Cn,i):Dr.unshift(s,i))},r.clearMatchMedia=function(n){oe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Rn(n)?dn(n):n).getBoundingClientRect(),a=o[s?as:cs]*i||0;return s?o.right-a>0&&o.left+a<ce.innerWidth:o.bottom-a>0&&o.top+a<ce.innerHeight},r.positionInViewport=function(n,i,s){Rn(n)&&(n=dn(n));var o=n.getBoundingClientRect(),a=o[s?as:cs],l=i==null?a/2:i in pl?pl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ce.innerWidth:(o.top+l)/ce.innerHeight},r.killAll=function(n){if(oe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=_s.killAll||[];_s={},i.forEach(function(s){return s()})}},r}();de.version="3.14.2";de.saveStyles=function(r){return r?Oa(r).forEach(function(e){if(e&&e.style){var t=bn.indexOf(e);t>=0&&bn.splice(t,5),bn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),j.core.getCache(e),yh())}}):bn};de.revert=function(r,e){return Qf(!r,e)};de.create=function(r,e){return new de(r,e)};de.refresh=function(r){return r?Yo(!0):(Ls||de.register())&&es(!0)};de.update=function(r){return++le.cache&&jr(r===!0?2:0)};de.clearScrollMemory=cv;de.maxScroll=function(r,e){return Ar(r,e?rn:wt)};de.getScrollFunc=function(r,e){return Mi(dn(r),e?rn:wt)};de.getById=function(r){return vh[r]};de.getAll=function(){return oe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};de.isScrolling=function(){return!!Qn};de.snapDirectional=Xf;de.addEventListener=function(r,e){var t=_s[r]||(_s[r]=[]);~t.indexOf(e)||t.push(e)};de.removeEventListener=function(r,e){var t=_s[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};de.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(u,h){var p=[],g=[],m=j.delayedCall(i,function(){h(p,g),p=[],g=[]}).pause();return function(I){p.length||m.restart(!0),p.push(I.trigger),g.push(I),s<=p.length&&m.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Gt(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Gt(s)&&(s=s(),Pt(de,"refresh",function(){return s=e.batchMax()})),Oa(r).forEach(function(l){var u={};for(a in n)u[a]=n[a];u.trigger=l,t.push(de.create(u))}),t};var $g=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},bu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(ot.isTouch?" pinch-zoom":""):"none",e===Cn&&r(Ie,t)},mc={auto:1,scroll:1},UP=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||j.core.getCache(s),a=jt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ie&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(mc[(l=jn(s)).overflowY]||mc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ms(s)&&(mc[(l=jn(s)).overflowY]||mc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},hv=function(e,t,n,i){return ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&UP,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Pt(Ne,ot.eventTypes[0],Hg,!1,!0)},onDisable:function(){return Rt(Ne,ot.eventTypes[0],Hg,!0)}})},BP=/(input|label|select|textarea)/i,jg,Hg=function(e){var t=BP.test(e.target.tagName);(t||jg)&&(e._gsapAllow=!0,jg=t)},zP=function(e){Xi(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=dn(e.target)||Cn,h=j.core.globals().ScrollSmoother,p=h&&h.get(),g=oi&&(e.content&&dn(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),m=Mi(u,wt),I=Mi(u,rn),w=1,S=(ot.isTouch&&ce.visualViewport?ce.visualViewport.scale*ce.visualViewport.width:ce.outerWidth)/ce.innerWidth,D=0,k=Gt(i)?function(){return i(a)}:function(){return i||2.8},N,O,M=hv(u,e.type,!0,s),L=function(){return O=!1},v=wr,y=wr,_=function(){l=Ar(u,wt),y=ca(oi?1:0,l),n&&(v=ca(0,Ar(u,rn))),N=ls},E=function(){g._gsap.y=Go(parseFloat(g._gsap.y)+m.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",m.offset=m.cacheID=0},b=function(){if(O){requestAnimationFrame(L);var ue=Go(a.deltaY/2),we=y(m.v-ue);if(g&&we!==m.v+m.offset){m.offset=we-m.v;var P=Go((parseFloat(g&&g._gsap.y)||0)-m.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",g._gsap.y=P+"px",m.cacheID=le.cache,jr()}return!0}m.offset&&E(),O=!0},R,A,G,re,ae=function(){_(),R.isActive()&&R.vars.scrollY>l&&(m()>l?R.progress(1)&&m(l):R.resetTo("scrollY",l))};return g&&j.set(g,{y:"+=0"}),e.ignoreCheck=function(J){return oi&&J.type==="touchmove"&&b()||w>1.05&&J.type!=="touchstart"||a.isGesturing||J.touches&&J.touches.length>1},e.onPress=function(){O=!1;var J=w;w=Go((ce.visualViewport&&ce.visualViewport.scale||1)/S),R.pause(),J!==w&&bu(u,w>1.01?!0:n?!1:"x"),A=I(),G=m(),_(),N=ls},e.onRelease=e.onGestureStart=function(J,ue){if(m.offset&&E(),!ue)re.restart(!0);else{le.cache++;var we=k(),P,Se;n&&(P=I(),Se=P+we*.05*-J.velocityX/.227,we*=$g(I,P,Se,Ar(u,rn)),R.vars.scrollX=v(Se)),P=m(),Se=P+we*.05*-J.velocityY/.227,we*=$g(m,P,Se,Ar(u,wt)),R.vars.scrollY=y(Se),R.invalidate().duration(we).play(.01),(oi&&R.vars.scrollY>=l||P>=l-1)&&j.to({},{onUpdate:ae,duration:we})}o&&o(J)},e.onWheel=function(){R._ts&&R.pause(),jt()-D>1e3&&(N=0,D=jt())},e.onChange=function(J,ue,we,P,Se){if(ls!==N&&_(),ue&&n&&I(v(P[2]===ue?A+(J.startX-J.x):I()+ue-P[1])),we){m.offset&&E();var At=Se[2]===we,on=At?G+J.startY-J.y:m()+we-Se[1],Re=y(on);At&&on!==Re&&(G+=Re-on),m(Re)}(we||ue)&&jr()},e.onEnable=function(){bu(u,n?!1:"x"),de.addEventListener("refresh",ae),Pt(ce,"resize",ae),m.smooth&&(m.target.style.scrollBehavior="auto",m.smooth=I.smooth=!1),M.enable()},e.onDisable=function(){bu(u,!0),Rt(ce,"resize",ae),de.removeEventListener("refresh",ae),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new ot(e),a.iOS=oi,oi&&!m()&&m(1),oi&&j.ticker.add(wr),re=a._dc,R=j.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:uv(m,m(),function(){return R.pause()})},onUpdate:jr,onComplete:re.vars.onComplete}),a};de.sort=function(r){if(Gt(r))return oe.sort(r);var e=ce.pageYOffset||0;return de.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ce.innerHeight}),oe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};de.observe=function(r){return new ot(r)};de.normalizeScroll=function(r){if(typeof r>"u")return Zt;if(r===!0&&Zt)return Zt.enable();if(r===!1){Zt&&Zt.kill(),Zt=r;return}var e=r instanceof ot?r:zP(r);return Zt&&Zt.target===e.target&&Zt.kill(),ms(e.target)&&(Zt=e),e};de.core={_getVelocityProp:gh,_inputObserver:hv,_scrollers:le,_proxies:Dr,bridge:{ss:function(){Qn||ys("scrollStart"),Qn=jt()},ref:function(){return qt}}};ZT()&&j.registerPlugin(de);$f.registerPlugin(de);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".reveal").forEach(e=>{$f.fromTo(e,{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.8,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 85%",end:"bottom 15%",toggleActions:"play none none reverse"}})})});var qP="1.3.17";function fv(r,e,t){return Math.max(r,Math.min(e,t))}function $P(r,e,t){return(1-t)*r+t*e}function jP(r,e,t,n){return $P(r,e,1-Math.exp(-t*n))}function HP(r,e){return(r%e+e)%e}var WP=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=fv(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=jP(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function GP(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var KP=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=GP(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},dv=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Wg=100/6,si={passive:!1},YP=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,si),this.element.addEventListener("touchstart",this.onTouchStart,si),this.element.addEventListener("touchmove",this.onTouchMove,si),this.element.addEventListener("touchend",this.onTouchEnd,si)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new dv;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,si),this.element.removeEventListener("touchstart",this.onTouchStart,si),this.element.removeEventListener("touchmove",this.onTouchMove,si),this.element.removeEventListener("touchend",this.onTouchEnd,si)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Wg:n===2?this.window.width:1,s=n===1?Wg:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Gg=r=>Math.min(1,1.001-Math.pow(2,-10*r)),XP=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new WP;emitter=new dv;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:u=.1,infinite:h=!1,orientation:p="vertical",gestureOrientation:g=p==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:I=1,autoResize:w=!0,prevent:S,virtualScroll:D,overscroll:k=!0,autoRaf:N=!1,anchors:O=!1,autoToggle:M=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:v=!1,naiveDimensions:y=v,stopInertiaOnNavigate:_=!1}={}){window.lenisVersion=qP,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Gg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:u,infinite:h,gestureOrientation:g,orientation:p,touchMultiplier:m,wheelMultiplier:I,autoResize:w,prevent:S,virtualScroll:D,overscroll:k,autoRaf:N,anchors:O,autoToggle:M,allowNestedScroll:L,naiveDimensions:y,stopInertiaOnNavigate:_},this.dimensions=new KP(r,e,{autoResize:w}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new YP(t,{touchMultiplier:m,wheelMultiplier:I}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let u=n.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const h=this.options.prevent;if(u.find(S=>S instanceof HTMLElement&&(typeof h=="function"&&h?.(S)||S.hasAttribute?.("data-lenis-prevent")||i&&S.hasAttribute?.("data-lenis-prevent-touch")||s&&S.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(S,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let g=t;this.options.gestureOrientation==="both"?g=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(g=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const m=i&&this.options.syncTouch,w=i&&n.type==="touchend";w&&(g=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+g,{programmatic:!1,...m?{lerp:w?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:u,force:h=!1,userData:p}={}){if(!((this.isStopped||this.isLocked)&&!h)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let g;if(typeof r=="string"?(g=document.querySelector(r),g||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(g=r),g){if(this.options.wrapper!==window){const I=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?I.left:I.top}const m=g.getBoundingClientRect();r=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=r-this.animatedScroll;g>this.limit/2?r=r-this.limit:g<-this.limit/2&&(r=r+this.limit)}}else r=fv(0,r,this.limit);if(r===this.targetScroll){l?.(this),u?.(this);return}if(this.userData=p??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=Gg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),m||this.emit(),m&&(this.reset(),this.emit(),u?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,u,h,p,g;const m=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const M=window.getComputedStyle(r);i.computedStyle=M;const L=M.overflowX,v=M.overflowY;if(s=["auto","overlay","scroll"].includes(L),o=["auto","overlay","scroll"].includes(v),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||m==="vertical"&&!o||m==="horizontal"&&!s)return!1;u=r.scrollWidth,h=r.scrollHeight,p=r.clientWidth,g=r.clientHeight,a=u>p,l=h>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=h,i.clientWidth=p,i.clientHeight=g}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,u=i.scrollWidth,h=i.scrollHeight,p=i.clientWidth,g=i.clientHeight;if(!s&&!o||!a&&!l||m==="vertical"&&(!o||!l)||m==="horizontal"&&(!s||!a))return!1;let I;if(m==="horizontal")I="x";else if(m==="vertical")I="y";else{const M=e!==0,L=t!==0;M&&s&&a&&(I="x"),L&&o&&l&&(I="y")}if(!I)return!1;let w,S,D,k,N;if(I==="x")w=r.scrollLeft,S=u-p,D=e,k=s,N=a;else if(I==="y")w=r.scrollTop,S=h-g,D=t,k=o,N=l;else return!1;return(D>0?w<S:w>0)&&k&&N}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?HP(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const QP=new XP({duration:1.2,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0});function pv(r){QP.raf(r),requestAnimationFrame(pv)}requestAnimationFrame(pv);document.addEventListener("lazybeforeunveil",function(r){var e=r.target.getAttribute("data-bg");e&&(r.target.style.backgroundImage="url("+e+")")});const Kg=document.getElementById("main-header"),JP=document.getElementById("mobile-menu-button"),ZP=document.getElementById("close-menu-button"),us=document.getElementById("mobile-menu");function gv(){window.scrollY>100?Kg?.classList.add("scrolled"):Kg?.classList.remove("scrolled")}window.addEventListener("scroll",gv);gv();function eC(){us&&(us.classList.remove("hidden"),setTimeout(()=>{us.classList.remove("opacity-0")},10),document.body.style.overflow="hidden")}function mv(){us&&(us.classList.add("opacity-0"),setTimeout(()=>{us.classList.add("hidden")},300),document.body.style.overflow="")}JP?.addEventListener("click",eC);ZP?.addEventListener("click",mv);us?.querySelectorAll("a").forEach(r=>{r.addEventListener("click",mv)});document.querySelectorAll('a[href^="/#"]').forEach(r=>{r.addEventListener("click",function(e){const t=this.getAttribute("href");if(t&&t.startsWith("/#")){const n=t.substring(1),i=document.querySelector(n);i&&(e.preventDefault(),i.scrollIntoView({behavior:"smooth",block:"start"}))}})});export{mC as a,pC as b,dA as c,lC as d,gC as e,nC as f,sC as g,hC as h,cC as i,oC as j,aC as k,uC as l,dC as o,rC as q,fC as s,iC as w};
