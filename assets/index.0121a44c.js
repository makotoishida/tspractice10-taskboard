var F=Object.defineProperty,K=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var j=(n,t,e)=>t in n?F(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,k=(n,t)=>{for(var e in t||(t={}))J.call(t,e)&&j(n,e,t[e]);if(S)for(var e of S(t))Q.call(t,e)&&j(n,e,t[e]);return n},I=(n,t)=>K(n,G(t));const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}};X();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var w;const f=globalThis.trustedTypes,L=f?f.createPolicy("lit-html",{createHTML:n=>n}):void 0,p=`lit$${(Math.random()+"").slice(9)}$`,V="?"+p,Y=`<${V}>`,m=document,D=(n="")=>m.createComment(n),x=n=>n===null||typeof n!="object"&&typeof n!="function",q=Array.isArray,tt=n=>{var t;return q(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,B=/>/g,v=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,R=/"/g,Z=/^(?:script|style|textarea|title)$/i,et=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),g=et(1),M=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),U=new WeakMap,it=(n,t,e)=>{var s,i;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const c=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new T(t.insertBefore(D(),c),c,void 0,e!=null?e:{})}return o._$AI(n),o},_=m.createTreeWalker(m,129,null,!1),st=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":"",o=H;for(let l=0;l<e;l++){const h=n[l];let A,d,a=-1,$=0;for(;$<h.length&&(o.lastIndex=$,d=o.exec(h),d!==null);)$=o.lastIndex,o===H?d[1]==="!--"?o=E:d[1]!==void 0?o=B:d[2]!==void 0?(Z.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=v):d[3]!==void 0&&(o=v):o===v?d[0]===">"?(o=i!=null?i:H,a=-1):d[1]===void 0?a=-2:(a=o.lastIndex-d[2].length,A=d[1],o=d[3]===void 0?v:d[3]==='"'?R:O):o===R||o===O?o=v:o===E||o===B?o=H:(o=v,i=void 0);const P=o===v&&n[l+1].startsWith("/>")?" ":"";r+=o===H?h+Y:a>=0?(s.push(A),h.slice(0,a)+"$lit$"+h.slice(a)+p+P):h+p+(a===-2?(s.push(void 0),l):P)}const c=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[L!==void 0?L.createHTML(c):c,s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const c=t.length-1,l=this.parts,[h,A]=st(t,e);if(this.el=N.createElement(h,s),_.currentNode=this.el.content,e===2){const d=this.el.content,a=d.firstChild;a.remove(),d.append(...a.childNodes)}for(;(i=_.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const a of i.getAttributeNames())if(a.endsWith("$lit$")||a.startsWith(p)){const $=A[o++];if(d.push(a),$!==void 0){const P=i.getAttribute($.toLowerCase()+"$lit$").split(p),b=/([.?@])?(.*)/.exec($);l.push({type:1,index:r,name:b[2],strings:P,ctor:b[1]==="."?ot:b[1]==="?"?lt:b[1]==="@"?ht:C})}else l.push({type:6,index:r})}for(const a of d)i.removeAttribute(a)}if(Z.test(i.tagName)){const d=i.textContent.split(p),a=d.length-1;if(a>0){i.textContent=f?f.emptyScript:"";for(let $=0;$<a;$++)i.append(d[$],D()),_.nextNode(),l.push({type:2,index:++r});i.append(d[a],D())}}}else if(i.nodeType===8)if(i.data===V)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(p,d+1))!==-1;)l.push({type:7,index:r}),d+=p.length-1}r++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function y(n,t,e=n,s){var i,r,o,c;if(t===M)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const h=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((o=(c=e)._$Cl)!==null&&o!==void 0?o:c._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=y(n,l._$AS(n,t.values),l,s)),t}class nt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(s,!0);_.currentNode=r;let o=_.nextNode(),c=0,l=0,h=i[0];for(;h!==void 0;){if(c===h.index){let A;h.type===2?A=new T(o,o.nextSibling,this,t):h.type===1?A=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(A=new dt(o,this,t)),this.v.push(A),h=i[++l]}c!==(h==null?void 0:h.index)&&(o=_.nextNode(),c++)}return r}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{constructor(t,e,s,i){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=y(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==M&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):tt(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(s);else{const o=new nt(r,this),c=o.p(this.options);o.m(s),this.k(c),this._$AH=o}}_$AC(t){let e=U.get(t.strings);return e===void 0&&U.set(t.strings,e=new N(t)),e}S(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new T(this.M(D()),this.M(D()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class C{constructor(t,e,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=y(this,t,e,0),o=!x(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const c=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=y(this,c[s+l],e,l),h===M&&(h=this._$AH[l]),o||(o=!x(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h!=null?h:"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ot extends C{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}}const rt=f?f.emptyScript:"";class lt extends C{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,rt):this.element.removeAttribute(this.name)}}class ht extends C{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=y(this,t,e,0))!==null&&s!==void 0?s:u)===M)return;const i=this._$AH,r=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class dt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}}const W=window.litHtmlPolyfillSupport;W==null||W(N,T),((w=globalThis.litHtmlVersions)!==null&&w!==void 0?w:globalThis.litHtmlVersions=[]).push("2.2.2");const z=[{title:"Project 1",lanes:[{title:"To Do",tasks:[{title:"Task 1",description:"Desc 1"},{title:"Task 2",description:"Desc 2",dueDate:new Date(2022,5,12)}]},{title:"Doing",tasks:[{title:"AAAAAA",description:"ADADADaDAAd dsad",dueDate:new Date(2022,4,30)}]},{title:"Done",tasks:[{title:"Task 0",description:"000000"},{title:"MPMPMPMPmpmpmp",description:"Djkfjdksajfkdsam dsadsa"}]}]},{title:"Project 2",lanes:[{title:"To Do",tasks:[{title:"Task 1",description:"Desc 1"}]},{title:"Doing",tasks:[{title:"AAAAAA",description:"ADADADaDAAd dsad",dueDate:new Date(2022,4,30)}]},{title:"Done",tasks:[{title:"MPMPMPMPmpmpmp",description:"Djkfjdksajfkdsam dsadsa",dueDate:new Date(2022,4,1)}]}]}];function at(n,t){let e=k({},n);return t(e),{state:e,setCurrentProject:s=>{s!==e.currentProject&&(e=I(k({},e),{currentProject:s}),t(e))}}}function ct(n){return g`<div>${n.title} ${n.description} ${n.dueDate}</div>`}function ut(n){return g`<div>${n.title} ${n.tasks.map(t=>ct(t))}</div>`}function $t(n){return g`<div>
    <h2>${n.title}</h2>
    <hr />
    ${n.lanes.map(t=>ut(t))}
  </div> `}function At(n,t){return g`
    <div class="project-selector">
      ${n.map(e=>g`<div
            class="project ${e===t?"active":""}"
            @click=${()=>ft(e)}
          >
            ${e.title}
          </div>`)}
    </div>
  `}function pt({projects:n,currentProject:t}){return g`<div>
    ${At(n,t)} ${$t(t)}
  </div>`}function vt(n){it(pt(n),_t)}const _t=document.querySelector("#app"),{setCurrentProject:ft}=at({projects:z,currentProject:z[0]},n=>vt(n));
