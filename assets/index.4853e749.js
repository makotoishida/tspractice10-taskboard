var ut=Object.defineProperty,pt=Object.defineProperties;var ft=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ht=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable;var W=(e,t,n)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))ht.call(t,n)&&W(e,n,t[n]);if(K)for(var n of K(t))$t.call(t,n)&&W(e,n,t[n]);return e},j=(e,t)=>pt(e,ft(t));const gt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};gt();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;const T=globalThis.trustedTypes,Y=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,tt="?"+y,vt=`<${tt}>`,w=document,S=(e="")=>w.createComment(e),H=e=>e===null||typeof e!="object"&&typeof e!="function",et=Array.isArray,mt=e=>{var t;return et(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,V=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,X=/'/g,J=/"/g,nt=/^(?:script|style|textarea|title)$/i,it=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),h=it(1),At=it(2),P=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Z=new WeakMap,_t=(e,t,n)=>{var s,i;const o=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:t;let r=o._$litPart$;if(r===void 0){const d=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=r=new C(t.insertBefore(S(),d),d,void 0,n!=null?n:{})}return r._$AI(e),r},x=w.createTreeWalker(w,129,null,!1),yt=(e,t)=>{const n=e.length-1,s=[];let i,o=t===2?"<svg>":"",r=E;for(let a=0;a<n;a++){const l=e[a];let m,u,p=-1,v=0;for(;v<l.length&&(r.lastIndex=v,u=r.exec(l),u!==null);)v=r.lastIndex,r===E?u[1]==="!--"?r=z:u[1]!==void 0?r=V:u[2]!==void 0?(nt.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=b):u[3]!==void 0&&(r=b):r===b?u[0]===">"?(r=i!=null?i:E,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,m=u[1],r=u[3]===void 0?b:u[3]==='"'?J:X):r===J||r===X?r=b:r===z||r===V?r=E:(r=b,i=void 0);const k=r===b&&e[a+1].startsWith("/>")?" ":"";o+=r===E?l+vt:p>=0?(s.push(m),l.slice(0,p)+"$lit$"+l.slice(p)+y+k):l+y+(p===-2?(s.push(void 0),a):k)}const d=o+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Y!==void 0?Y.createHTML(d):d,s]};class N{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,m]=yt(t,n);if(this.el=N.createElement(l,s),x.currentNode=this.el.content,n===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(i=x.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const p of i.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(y)){const v=m[r++];if(u.push(p),v!==void 0){const k=i.getAttribute(v.toLowerCase()+"$lit$").split(y),_=/([.?@])?(.*)/.exec(v);a.push({type:1,index:o,name:_[2],strings:k,ctor:_[1]==="."?jt:_[1]==="?"?It:_[1]==="@"?Dt:M})}else a.push({type:6,index:o})}for(const p of u)i.removeAttribute(p)}if(nt.test(i.tagName)){const u=i.textContent.split(y),p=u.length-1;if(p>0){i.textContent=T?T.emptyScript:"";for(let v=0;v<p;v++)i.append(u[v],S()),x.nextNode(),a.push({type:2,index:++o});i.append(u[p],S())}}}else if(i.nodeType===8)if(i.data===tt)a.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(y,u+1))!==-1;)a.push({type:7,index:o}),u+=y.length-1}o++}}static createElement(t,n){const s=w.createElement("template");return s.innerHTML=t,s}}function L(e,t,n=e,s){var i,o,r,d;if(t===P)return t;let a=s!==void 0?(i=n._$Cl)===null||i===void 0?void 0:i[s]:n._$Cu;const l=H(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,n,s)),s!==void 0?((r=(d=n)._$Cl)!==null&&r!==void 0?r:d._$Cl=[])[s]=a:n._$Cu=a),a!==void 0&&(t=L(e,a._$AS(e,t.values),a,s)),t}class kt{constructor(t,n){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var n;const{el:{content:s},parts:i}=this._$AD,o=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:w).importNode(s,!0);x.currentNode=o;let r=x.nextNode(),d=0,a=0,l=i[0];for(;l!==void 0;){if(d===l.index){let m;l.type===2?m=new C(r,r.nextSibling,this,t):l.type===1?m=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(m=new xt(r,this,t)),this.v.push(m),l=i[++a]}d!==(l==null?void 0:l.index)&&(r=x.nextNode(),d++)}return o}m(t){let n=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}class C{constructor(t,n,s,i){var o;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=L(this,t,n),H(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==P&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):mt(t)?this.S(t):this.$(t)}M(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==f&&H(this._$AH)?this._$AA.nextSibling.data=t:this.k(w.createTextNode(t)),this._$AH=t}T(t){var n;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===o)this._$AH.m(s);else{const r=new kt(o,this),d=r.p(this.options);r.m(s),this.k(d),this._$AH=r}}_$AC(t){let n=Z.get(t.strings);return n===void 0&&Z.set(t.strings,n=new N(t)),n}S(t){et(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const o of t)i===n.length?n.push(s=new C(this.M(S()),this.M(S()),this,this.options)):s=n[i],s._$AI(o),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cg=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class M{constructor(t,n,s,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=L(this,t,n,0),r=!H(t)||t!==this._$AH&&t!==P,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=L(this,d[s+a],n,a),l===P&&(l=this._$AH[a]),r||(r=!H(l)||l!==this._$AH[a]),l===f?t=f:t!==f&&(t+=(l!=null?l:"")+o[a+1]),this._$AH[a]=l}r&&!i&&this.C(t)}C(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class jt extends M{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===f?void 0:t}}const bt=T?T.emptyScript:"";class It extends M{constructor(){super(...arguments),this.type=4}C(t){t&&t!==f?this.element.setAttribute(this.name,bt):this.element.removeAttribute(this.name)}}class Dt extends M{constructor(t,n,s,i,o){super(t,n,s,i,o),this.type=5}_$AI(t,n=this){var s;if((t=(s=L(this,t,n,0))!==null&&s!==void 0?s:f)===P)return;const i=this._$AH,o=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==f&&(i===f||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,s;typeof this._$AH=="function"?this._$AH.call((s=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const G=window.litHtmlPolyfillSupport;G==null||G(N,C),((B=globalThis.litHtmlVersions)!==null&&B!==void 0?B:globalThis.litHtmlVersions=[]).push("2.2.2");function R(e){return`0${e}`.slice(-2)}function Tt(e){return e?`${e.getMonth()+1}/${e.getDate()}/${R(e.getFullYear())}`:""}function wt(e){return e?`${e.getFullYear()}-${R(e.getMonth()+1)}-${R(e.getDate())}`:""}function st(e){if(!!e)return new Date(e)}function I(){return Date.now()+Math.random()+""}let c,$;const Lt={projectId:void 0,laneId:void 0,taskId:void 0};function Et(e,t){return c=A({},e),$=t,$(c),{state:c}}function g(){c=j(A({},c),{editing:A({},Lt)})}function St(e){e!==c.currentProjectId&&(c=j(A({},c),{currentProjectId:e}),g(),$(c))}function D(e){if(!!e)return e.projects.find(t=>t.id===e.currentProjectId)}function q(e,t){let n,s,i=-1;return e.lanes.forEach(o=>{const r=o.tasks.findIndex(d=>d.id===t);r>=0&&(n=o,i=r,s=o.tasks[r])}),{lane:n,task:s,taskIndex:i}}function ot(e,t,n){g();const s=D(c);if(!s)return;const{lane:i,task:o,taskIndex:r}=q(s,e);if(!i||!o)return;const d=s.lanes.find(l=>l.id===t);if(!d)return;let a=-1;n&&(a=d.tasks.findIndex(l=>l.id===n)),console.log("beforeTaskIndex=",a),i.tasks.splice(r,1),i===d&&r<=a&&(a--,console.log("Adjusted: beforeTaskIndex=",a)),a>=0?d.tasks.splice(a,0,o):d.tasks.push(o),$(c)}function Ht(e){g();const t=D(c);if(!t)return;const n=t.lanes.find(i=>i.id===e);if(!n)return;const s={id:I(),title:"New task",description:""};n.tasks.push(s),$(c)}function Pt(e){g(),console.log("moveTask",c.editing);const t=D(c);if(!t)return;const{lane:n,task:s,taskIndex:i}=q(t,e);!n||!s||(n.tasks.splice(i,1),$(c))}function Nt(){g();const e=D(c);if(!e)return;const t={id:I(),title:"New Lane",tasks:[]};e.lanes.push(t),$(c)}function Ct(e){g();const t=D(c);!t||(t.lanes=t.lanes.filter(n=>n.id!==e),$(c))}function Mt(){g();const e={id:I(),title:"New Project",lanes:[]};c.projects.push(e),$(c)}function Ot(e){g(),c.projects.length>1&&(c.projects=c.projects.filter(t=>t.id!==e)),$(c)}function Bt(e){g(),c.editing.projectId=e,$(c)}function rt(e,t){g();const n=c.projects.find(s=>s.id===e);!n||(n.title=t,$(c))}function Rt(e){g(),c.editing.laneId=e,$(c)}function at(e,t){g();const n=D(c);if(!n)return;const s=n.lanes.find(i=>i.id===e);!s||(s.title=t,$(c))}function qt(e){g(),c.editing.taskId=e,$(c)}function lt(e,t,n,s){g();const i=D(c);if(!i)return;const{task:o}=q(i,e);!o||(o.title=t,o.description=n,o.dueDate=s,$(c))}function O(e){c.dragdrop.dragOverElem=e}function Ut(){return c.dragdrop.dragOverElem}function U(e,t=24,n="red"){return h`<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke=${n}
    stroke-width="2"
    width=${t}
    style="cursor:pointer;"
    @click=${e}
  >
    ${At`<path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />`}
  </svg>`}function Ft(e){var n;const t=(n=(e==null?void 0:e.target).closest(".task"))==null?void 0:n.dataset.id;qt(t)}function Kt(e){var d;e.preventDefault();const t=(d=(e==null?void 0:e.target).closest(".task"))==null?void 0:d.dataset.id,n=document.querySelector(".task.editing form input.title"),s=document.querySelector(".task.editing form input.description"),i=document.querySelector(".task.editing form input.due-date"),o=i.value?i.value+"T00:00:00":"",r=st(o);lt(t,n.value,s.value,r)}function Wt(e){!confirm("Are you sure to delete this task?")||Pt(e)}function Yt(e,t){const n=e.id===t.editing.taskId;return h` ${n?h`<div data-id="${e.id}" class="task editing">
        <form>
          <input type="text" class="title" value=${e.title} autofocus />
          <input
            type="text"
            class="description"
            value=${e.description}
            autofocus
          />
          <input
            type="date"
            class="due-date"
            value=${wt(e.dueDate)}
          />
          <div class="buttons">
            <button
              @click=${()=>lt(e.id,e.title,e.description,e.dueDate)}
              type="button"
            >
              X
            </button>
            <button @click=${Kt} type="submit">OK</button>
            ${U(()=>Wt(e.id))}
          </div>
        </form>
      </div>`:h`<div
        data-id="${e.id}"
        class="task"
        draggable="true"
        @dragstart=${zt}
        @dragenter=${Vt}
        @dragover=${Xt}
        @dragleave=${Jt}
        @drop=${Zt}
        @click=${Ft}
      >
        <h4 class="task-title">${e.title}</h4>
        <div class="task-description">${e.description}</div>
        <div class="task-due">${Tt(e.dueDate)}</div>
      </div>`}`}let F=null;function zt(e){var n;const t=(n=e==null?void 0:e.target)==null?void 0:n.dataset.id;e.dataTransfer&&(g(),e.dataTransfer.setData("text/plain",t),e.dataTransfer.effectAllowed="move",F=e==null?void 0:e.target)}function Vt(e){e.preventDefault();const t=e.target.closest(".task");O(t)}function Xt(e){e.preventDefault();const t=e.target.closest(".task");if(F===t)return;t.classList.remove("over-top","over-bottom");const n=t.getBoundingClientRect();e.clientY-n.top<t.clientHeight/2?t.classList.add("over-top"):t.classList.add("over-bottom")}function Jt(e){e.preventDefault(),e.target.closest(".task").classList.remove("over-top","over-bottom")}function Zt(e){var d,a,l,m,u,p;if(e.preventDefault(),O(void 0),![...(a=(d=e==null?void 0:e.dataTransfer)==null?void 0:d.types)!=null?a:[]].includes("text/plain"))return;const t=(l=e==null?void 0:e.dataTransfer)==null?void 0:l.getData("text/plain");if(!t)return;const n=e.target.closest(".task");if(F===n)return;let s=n.dataset.id;if(n.classList.remove("over-top","over-bottom"),t===s)return;const i=n.getBoundingClientRect();if(!(e.clientY-i.top<n.clientHeight/2)){const v=Array.from((u=(m=n.parentElement)==null?void 0:m.querySelectorAll(".task"))!=null?u:[]),k=v.findIndex(dt=>dt===n),_=k>=0?v[k+1]:void 0;s=(p=_==null?void 0:_.dataset)==null?void 0:p.id}if(t===s)return;const r=n.closest(".lane").dataset.id;ot(t,r,s)}function Gt(e){var n;const t=(n=(e==null?void 0:e.target).closest(".lane"))==null?void 0:n.dataset.id;Rt(t)}function Qt(e){var s;e.preventDefault();const t=(s=(e==null?void 0:e.target).closest(".lane"))==null?void 0:s.dataset.id,n=document.querySelector(".lane-title input");at(t,n.value)}function te(e){!confirm("Are you sure to delete this lane?")||Ct(e)}function ee(e,t){var s;const n=e.id===((s=t.editing)==null?void 0:s.laneId);return h`<div data-id="${e.id}" class="lane">
    <div class="lane-title ${n?"editing":""}">
      ${n?h`<form>
            <input type="text" value=${e.title} autofocus />
            <button
              @click=${()=>at(e.id,e.title)}
              type="button"
            >
              X
            </button>
            <button @click=${Qt} type="submit">OK</button>
            ${U(()=>te(e.id))}
          </form>`:h`<h4 @click=${Gt}>${e.title}</h4>
            <button @click=${()=>Ht(e.id)}>+</button>`}
    </div>
    <div
      class="tasks"
      @dragenter=${ne}
      @dragover=${i=>Q(i,!0)}
      @dragleave=${i=>Q(i,!1)}
      @drop=${i=>ie(i)}
    >
      ${e.tasks.map(i=>Yt(i,t))}
    </div>
  </div>`}function ne(e){e.preventDefault(),e.target.closest(".tasks").classList.add("over"),O(e.target)}function Q(e,t){e.preventDefault();const n=e.target.closest(".tasks");t?n.classList.add("over"):n.classList.remove("over")}function ie(e){var i,o,r,d,a;if(e.preventDefault(),![...(o=(i=e==null?void 0:e.dataTransfer)==null?void 0:i.types)!=null?o:[]].includes("text/plain"))return;const t=e.target.closest(".tasks");if(t.classList.remove("over"),Ut()!==t)return;O(void 0);const n=(r=e==null?void 0:e.dataTransfer)==null?void 0:r.getData("text/plain");if(!n)return;const s=(a=(d=t.closest(".lane"))==null?void 0:d.dataset)==null?void 0:a.id;ot(n,s)}function se(e){var n;const t=(n=(e==null?void 0:e.target).closest(".project"))==null?void 0:n.dataset.id;Bt(t)}function oe(e){var s;e.preventDefault();const t=(s=(e==null?void 0:e.target).closest(".project"))==null?void 0:s.dataset.id,n=document.querySelector(".project-title input");rt(t,n.value)}function re(e){!confirm("Are you sure to delete this project?")||Ot(e)}function ae(e){var o;if(e.projects.length===0)return h`<div>Add a new project</div>`;const t=e.projects.find(r=>r.id===e.currentProjectId);if(!t)return h`<div>Select a project</div>`;const n=t.id===((o=e.editing)==null?void 0:o.projectId),s=e.projects.length>1,i=t.lanes.length>0;return h`<div data-id="${t.id}" class="project">
    <div class="project-title ${n?"editing":""}">
      ${n?h`<form>
            <input type="text" value=${t.title} autofocus />
            <button
              @click=${()=>rt(t.id,t.title)}
              type="button"
            >
              X
            </button>
            <button @click=${oe} type="submit">OK</button>
            ${s?U(()=>re(t.id)):null}
          </form>`:h`<h3 @click=${se}>${t.title}</h3>
            <button @click=${()=>Nt()}>+ Lane</button>`}
    </div>
    ${i?h`<div class="lanes">
          ${t.lanes.map(r=>ee(r,e))}
        </div>`:h`<div>Add a new lane</div>`}
  </div> `}function le({projects:e,currentProjectId:t}){return h`
    <div class="project-selector">
      ${e.map(n=>h`<div
            class="project ${n.id===t?"active":""}"
            @click=${()=>St(n.id)}
          >
            ${n.title}
          </div>`)}
      <button @click=${()=>Mt()}>+ Project</button>
    </div>
  `}const ct="taskboard";async function ce(e){const t={currentProjectId:e.currentProjectId,projects:e.projects},n=JSON.stringify(t);window.localStorage.setItem(ct,n)}async function de(){var i,o;const e=(i=window.localStorage.getItem(ct))!=null?i:"{}",t=JSON.parse(e);let n=t.currentProjectId;return t.projects||(t.projects=[]),(o=t.projects)!=null&&o.length||(t.projects.push({id:I(),title:"First Project",lanes:[{id:I(),title:"To Do",tasks:[{id:"1",title:"test",description:"",dueDate:new Date}]},{id:I(),title:"Doing",tasks:[]},{id:I(),title:"Done",tasks:[]}]}),n=t.projects[0].id),t.projects=ue(t.projects),{currentProjectId:n!=null?n:t.projects[0].id,projects:t.projects,editing:{},dragdrop:{}}}function ue(e){return e.map(t=>j(A({},t),{lanes:t.lanes.map(n=>j(A({},n),{tasks:n.tasks.map(s=>j(A({},s),{dueDate:st(s.dueDate)}))}))}))}function pe(e){return h`<div>${le(e)} ${ae(e)}</div>`}async function fe(e){const t=document.querySelector("#app");_t(pe(e),t),await ce(e),he()}function he(){const e=document.querySelector("[autofocus]");!e||e.focus()}de().then(e=>{Et(j(A({},e),{editing:{projectId:void 0,laneId:void 0,taskId:void 0},dragdrop:{dragOverElem:void 0}}),fe)});
