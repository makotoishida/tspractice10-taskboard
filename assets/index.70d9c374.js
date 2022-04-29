var K=Object.defineProperty,Q=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var j=(o,t,e)=>t in o?K(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,S=(o,t)=>{for(var e in t||(t={}))X.call(t,e)&&j(o,e,t[e]);if(P)for(var e of P(t))tt.call(t,e)&&j(o,e,t[e]);return o},I=(o,t)=>Q(o,G(t));const et=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}};et();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const _=globalThis.trustedTypes,E=_?_.createPolicy("lit-html",{createHTML:o=>o}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,F="?"+A,it=`<${F}>`,y=document,x=(o="")=>y.createComment(o),H=o=>o===null||typeof o!="object"&&typeof o!="function",Y=Array.isArray,st=o=>{var t;return Y(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,R=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,z=/"/g,Z=/^(?:script|style|textarea|title)$/i,nt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),D=nt(1),b=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),U=new WeakMap,ot=(o,t,e)=>{var s,i;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=r._$litPart$;if(n===void 0){const c=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=n=new N(t.insertBefore(x(),c),c,void 0,e!=null?e:{})}return n._$AI(o),n},m=y.createTreeWalker(y,129,null,!1),rt=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":"",n=T;for(let l=0;l<e;l++){const a=o[l];let u,d,h=-1,p=0;for(;p<a.length&&(n.lastIndex=p,d=n.exec(a),d!==null);)p=n.lastIndex,n===T?d[1]==="!--"?n=B:d[1]!==void 0?n=R:d[2]!==void 0?(Z.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=g):d[3]!==void 0&&(n=g):n===g?d[0]===">"?(n=i!=null?i:T,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,u=d[1],n=d[3]===void 0?g:d[3]==='"'?z:O):n===z||n===O?n=g:n===B||n===R?n=T:(n=g,i=void 0);const v=n===g&&o[l+1].startsWith("/>")?" ":"";r+=n===T?a+it:h>=0?(s.push(u),a.slice(0,h)+"$lit$"+a.slice(h)+A+v):a+A+(h===-2?(s.push(void 0),l):v)}const c=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[E!==void 0?E.createHTML(c):c,s]};class C{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const c=t.length-1,l=this.parts,[a,u]=rt(t,e);if(this.el=C.createElement(a,s),m.currentNode=this.el.content,e===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=m.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(A)){const p=u[n++];if(d.push(h),p!==void 0){const v=i.getAttribute(p.toLowerCase()+"$lit$").split(A),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:v,ctor:f[1]==="."?at:f[1]==="?"?ct:f[1]==="@"?ht:M})}else l.push({type:6,index:r})}for(const h of d)i.removeAttribute(h)}if(Z.test(i.tagName)){const d=i.textContent.split(A),h=d.length-1;if(h>0){i.textContent=_?_.emptyScript:"";for(let p=0;p<h;p++)i.append(d[p],x()),m.nextNode(),l.push({type:2,index:++r});i.append(d[h],x())}}}else if(i.nodeType===8)if(i.data===F)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(A,d+1))!==-1;)l.push({type:7,index:r}),d+=A.length-1}r++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function k(o,t,e=o,s){var i,r,n,c;if(t===b)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const a=H(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,s)),s!==void 0?((n=(c=e)._$Cl)!==null&&n!==void 0?n:c._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=k(o,l._$AS(o,t.values),l,s)),t}class lt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(s,!0);m.currentNode=r;let n=m.nextNode(),c=0,l=0,a=i[0];for(;a!==void 0;){if(c===a.index){let u;a.type===2?u=new N(n,n.nextSibling,this,t):a.type===1?u=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(u=new ut(n,this,t)),this.v.push(u),a=i[++l]}c!==(a==null?void 0:a.index)&&(n=m.nextNode(),c++)}return r}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class N{constructor(t,e,s,i){var r;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),H(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==b&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):st(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==$&&H(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(s);else{const n=new lt(r,this),c=n.p(this.options);n.m(s),this.k(c),this._$AH=n}}_$AC(t){let e=U.get(t.strings);return e===void 0&&U.set(t.strings,e=new C(t)),e}S(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new N(this.M(x()),this.M(x()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class M{constructor(t,e,s,i,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=k(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const c=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=k(this,c[s+l],e,l),a===b&&(a=this._$AH[l]),n||(n=!H(a)||a!==this._$AH[l]),a===$?t=$:t!==$&&(t+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}n&&!i&&this.C(t)}C(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class at extends M{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===$?void 0:t}}const dt=_?_.emptyScript:"";class ct extends M{constructor(){super(...arguments),this.type=4}C(t){t&&t!==$?this.element.setAttribute(this.name,dt):this.element.removeAttribute(this.name)}}class ht extends M{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=k(this,t,e,0))!==null&&s!==void 0?s:$)===b)return;const i=this._$AH,r=t===$&&i!==$||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==$&&(i===$||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const W=window.litHtmlPolyfillSupport;W==null||W(C,N),((L=globalThis.litHtmlVersions)!==null&&L!==void 0?L:globalThis.litHtmlVersions=[]).push("2.2.2");function pt(o,t){let e=S({},o);t(e);function s(n){n!==e.currentProject&&(e=I(S({},e),{currentProject:n}),t(e))}function i(n,c){let l,a;return n.lanes.forEach(u=>{const d=u.tasks.find(h=>h.id===c);d&&(l=u,a=d)}),{lane:l,task:a}}function r(n,c,l){console.log("moveTask: ",n,c,l),e=S({},e);const{currentProject:a}=e,{lane:u,task:d}=i(a,n);if(console.log(a,u,d),!u||!d)return;const h=a.lanes.find(v=>v.id===c);if(!h)return;let p=-1;l&&(p=h.tasks.findIndex(v=>v.id===l)),u.tasks=u.tasks.filter(v=>v!==d),p>=0?h.tasks.splice(p,0,d):h.tasks.push(d),t(e)}return{state:e,setCurrentProject:s,moveTask:r}}var q=[{id:"project-1",title:"Project 1",lanes:[{id:"lane-1-1",title:"To Do",tasks:[{id:"t10905",title:"Task 1",description:"Desc 1"},{id:"t10906",title:"Task 2",description:"Desc 2",dueDate:new Date(2022,5,12)}]},{id:"lane-1-2",title:"Doing",tasks:[{id:"t10907",title:"AAAAAA",description:"ADADADaDAAd dsad",dueDate:new Date(2022,4,30)}]},{id:"lane-1-3",title:"Done",tasks:[{id:"t10908",title:"Task 0",description:"000000"},{id:"t10909",title:"MPMPMPMPmpmpmp",description:"Djkfjdksajfkdsam dsadsa"}]}]},{id:"project-2",title:"Project 2",lanes:[{id:"lane-2-1",title:"To Do",tasks:[{id:"t132321",title:"Create FAQ page",description:"Desc 1"},{id:"t132323",title:"Write a review",description:"Djkfjdksajfkdsam dsadsa",dueDate:new Date(2022,4,1)}]},{id:"lane-2-2",title:"Doing",tasks:[{id:"t132322",title:"Create landing page",description:"ADADADaDAAd dsad",dueDate:new Date(2022,4,30)}]},{id:"lane-2-3",title:"Done",tasks:[]}]},{id:"PROJECT 333",title:"THIS IS A TEST",lanes:[]}];function $t(o){return D`<div data-id="${o.id}" class="task" draggable="true">
    <h4 class="task-title">${o.title}</h4>
    <div class="task-description">${o.description}</div>
    <div class="task-due">${o.dueDate}</div>
  </div>`}function vt(o){return D`<div data-id="${o.id}" class="lane" dropzone="true">
    <h4 class="lane-title">${o.title}</h4>
    <div class="tasks">${o.tasks.map(t=>$t(t))}</div>
  </div>`}function At(o){return D`<div data-id="${o.id}" class="project">
    <h3 class="project-title">${o.title}</h3>
    <div class="lanes">${o.lanes.map(t=>vt(t))}</div>
  </div> `}function ft(o,t){return D`
    <div class="project-selector">
      ${o.map(e=>D`<div
            class="project ${e===t?"active":""}"
            @click=${()=>yt(e)}
          >
            ${e.title}
          </div>`)}
    </div>
  `}function gt({projects:o,currentProject:t}){return D`<div>
    ${ft(o,t)} ${At(t)}
  </div>`}function mt(o){ot(gt(o),_t),Dt()}const _t=document.querySelector("#app"),{setCurrentProject:yt,moveTask:V}=pt({projects:q,currentProject:q[0]},o=>mt(o));function Dt(){const o=document.querySelectorAll(".task[draggable=true]"),t=document.querySelectorAll(".lane[dropzone=true]");let e=null;o.forEach(s=>{s.ondragstart=i=>{var n,c;const r=(c=(n=i==null?void 0:i.target)==null?void 0:n.dataset.id)!=null?c:"";i.dataTransfer&&(i.dataTransfer.setData("text/plain",r),i.dataTransfer.effectAllowed="move")},s.ondragenter=i=>{i.preventDefault(),e=s},s.ondragover=i=>{i.preventDefault(),s.classList.remove("over-top","over-bottom");const r=s.getBoundingClientRect();i.clientY-r.top<s.clientHeight/2?s.classList.add("over-top"):s.classList.add("over-bottom")},s.ondragleave=i=>{i.preventDefault(),s.classList.remove("over-top","over-bottom")},s.ondrop=i=>{var u,d,h,p;i.preventDefault(),e=null;const r=(u=i==null?void 0:i.dataTransfer)==null?void 0:u.getData("text/plain");if(!r)return;let n=s.dataset.id;s.classList.remove("over-top","over-bottom");const c=s.getBoundingClientRect();if(!(i.clientY-c.top<s.clientHeight/2)){const v=Array.from((h=(d=s.parentElement)==null?void 0:d.querySelectorAll(".task"))!=null?h:[]),f=v.findIndex(J=>J===s),w=f>=0?v[f+1]:void 0;n=(p=w==null?void 0:w.dataset)==null?void 0:p.id}const a=s.closest(".lane").dataset.id;V(r,a,n)}}),t.forEach(s=>{s.ondragenter=i=>{i.preventDefault(),s.classList.add("over"),e=s},s.ondragover=i=>{i.preventDefault(),s.classList.add("over")},s.ondragleave=i=>{i.preventDefault(),s.style.border="",s.classList.remove("over")},s.ondrop=i=>{var c;if(i.preventDefault(),s.classList.remove("over"),e!==s)return;e=null;const r=(c=i==null?void 0:i.dataTransfer)==null?void 0:c.getData("text/plain");if(!r)return;const n=s.dataset.id;V(r,n)}})}
