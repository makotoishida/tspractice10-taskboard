var dt=Object.defineProperty,ut=Object.defineProperties;var pt=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var ht=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable;var K=(e,t,n)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))ht.call(t,n)&&K(e,n,t[n]);if(F)for(var n of F(t))ft.call(t,n)&&K(e,n,t[n]);return e},b=(e,t)=>ut(e,pt(t));const $t=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};$t();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;const D=globalThis.trustedTypes,W=D?D.createPolicy("lit-html",{createHTML:e=>e}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,Q="?"+k,gt=`<${Q}>`,T=document,L=(e="")=>T.createComment(e),H=e=>e===null||typeof e!="object"&&typeof e!="function",tt=Array.isArray,vt=e=>{var t;return tt(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,z=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,V=/'/g,X=/"/g,et=/^(?:script|style|textarea|title)$/i,nt=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),$=nt(1),mt=nt(2),P=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),J=new WeakMap,At=(e,t,n)=>{var s,i;const o=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:t;let r=o._$litPart$;if(r===void 0){const d=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=r=new C(t.insertBefore(L(),d),d,void 0,n!=null?n:{})}return r._$AI(e),r},x=T.createTreeWalker(T,129,null,!1),_t=(e,t)=>{const n=e.length-1,s=[];let i,o=t===2?"<svg>":"",r=S;for(let a=0;a<n;a++){const l=e[a];let m,u,p=-1,f=0;for(;f<l.length&&(r.lastIndex=f,u=r.exec(l),u!==null);)f=r.lastIndex,r===S?u[1]==="!--"?r=Y:u[1]!==void 0?r=z:u[2]!==void 0?(et.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=j):u[3]!==void 0&&(r=j):r===j?u[0]===">"?(r=i!=null?i:S,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,m=u[1],r=u[3]===void 0?j:u[3]==='"'?X:V):r===X||r===V?r=j:r===Y||r===z?r=S:(r=j,i=void 0);const y=r===j&&e[a+1].startsWith("/>")?" ":"";o+=r===S?l+gt:p>=0?(s.push(m),l.slice(0,p)+"$lit$"+l.slice(p)+k+y):l+k+(p===-2?(s.push(void 0),a):y)}const d=o+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[W!==void 0?W.createHTML(d):d,s]};class N{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,m]=_t(t,n);if(this.el=N.createElement(l,s),x.currentNode=this.el.content,n===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(i=x.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const p of i.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(k)){const f=m[r++];if(u.push(p),f!==void 0){const y=i.getAttribute(f.toLowerCase()+"$lit$").split(k),_=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:_[2],strings:y,ctor:_[1]==="."?yt:_[1]==="?"?jt:_[1]==="@"?It:M})}else a.push({type:6,index:o})}for(const p of u)i.removeAttribute(p)}if(et.test(i.tagName)){const u=i.textContent.split(k),p=u.length-1;if(p>0){i.textContent=D?D.emptyScript:"";for(let f=0;f<p;f++)i.append(u[f],L()),x.nextNode(),a.push({type:2,index:++o});i.append(u[p],L())}}}else if(i.nodeType===8)if(i.data===Q)a.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(k,u+1))!==-1;)a.push({type:7,index:o}),u+=k.length-1}o++}}static createElement(t,n){const s=T.createElement("template");return s.innerHTML=t,s}}function w(e,t,n=e,s){var i,o,r,d;if(t===P)return t;let a=s!==void 0?(i=n._$Cl)===null||i===void 0?void 0:i[s]:n._$Cu;const l=H(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,n,s)),s!==void 0?((r=(d=n)._$Cl)!==null&&r!==void 0?r:d._$Cl=[])[s]=a:n._$Cu=a),a!==void 0&&(t=w(e,a._$AS(e,t.values),a,s)),t}class kt{constructor(t,n){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var n;const{el:{content:s},parts:i}=this._$AD,o=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:T).importNode(s,!0);x.currentNode=o;let r=x.nextNode(),d=0,a=0,l=i[0];for(;l!==void 0;){if(d===l.index){let m;l.type===2?m=new C(r,r.nextSibling,this,t):l.type===1?m=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(m=new xt(r,this,t)),this.v.push(m),l=i[++a]}d!==(l==null?void 0:l.index)&&(r=x.nextNode(),d++)}return o}m(t){let n=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}class C{constructor(t,n,s,i){var o;this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=w(this,t,n),H(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==P&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):vt(t)?this.S(t):this.$(t)}M(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==h&&H(this._$AH)?this._$AA.nextSibling.data=t:this.k(T.createTextNode(t)),this._$AH=t}T(t){var n;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===o)this._$AH.m(s);else{const r=new kt(o,this),d=r.p(this.options);r.m(s),this.k(d),this._$AH=r}}_$AC(t){let n=J.get(t.strings);return n===void 0&&J.set(t.strings,n=new N(t)),n}S(t){tt(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const o of t)i===n.length?n.push(s=new C(this.M(L()),this.M(L()),this,this.options)):s=n[i],s._$AI(o),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cg=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class M{constructor(t,n,s,i,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=w(this,t,n,0),r=!H(t)||t!==this._$AH&&t!==P,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=w(this,d[s+a],n,a),l===P&&(l=this._$AH[a]),r||(r=!H(l)||l!==this._$AH[a]),l===h?t=h:t!==h&&(t+=(l!=null?l:"")+o[a+1]),this._$AH[a]=l}r&&!i&&this.C(t)}C(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class yt extends M{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===h?void 0:t}}const bt=D?D.emptyScript:"";class jt extends M{constructor(){super(...arguments),this.type=4}C(t){t&&t!==h?this.element.setAttribute(this.name,bt):this.element.removeAttribute(this.name)}}class It extends M{constructor(t,n,s,i,o){super(t,n,s,i,o),this.type=5}_$AI(t,n=this){var s;if((t=(s=w(this,t,n,0))!==null&&s!==void 0?s:h)===P)return;const i=this._$AH,o=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==h&&(i===h||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,s;typeof this._$AH=="function"?this._$AH.call((s=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const Z=window.litHtmlPolyfillSupport;Z==null||Z(N,C),((B=globalThis.litHtmlVersions)!==null&&B!==void 0?B:globalThis.litHtmlVersions=[]).push("2.2.2");function R(e){return`0${e}`.slice(-2)}function Dt(e){return e?`${e.getMonth()+1}/${e.getDate()}/${R(e.getFullYear())}`:""}function Tt(e){return e?`${e.getFullYear()}-${R(e.getMonth()+1)}-${R(e.getDate())}`:""}function it(e){if(!!e)return new Date(e)}function I(){return Date.now()+Math.random()+""}let c,g;const wt={projectId:void 0,laneId:void 0,taskId:void 0};function Et(e,t){return c=A({},e),g=t,g(c),{state:c}}function v(){c=b(A({},c),{editing:A({},wt)})}function St(e){e!==c.currentProjectId&&(c=b(A({},c),{currentProjectId:e}),v(),g(c))}function E(e){if(!!e)return e.projects.find(t=>t.id===e.currentProjectId)}function q(e,t){let n,s,i=-1;return e.lanes.forEach(o=>{const r=o.tasks.findIndex(d=>d.id===t);r>=0&&(n=o,i=r,s=o.tasks[r])}),{lane:n,task:s,taskIndex:i}}function st(e,t,n){v();const s=E(c);if(!s)return;const{lane:i,task:o,taskIndex:r}=q(s,e);if(!i||!o)return;const d=s.lanes.find(l=>l.id===t);if(!d)return;let a=-1;n&&(a=d.tasks.findIndex(l=>l.id===n)),console.log("beforeTaskIndex=",a),i.tasks.splice(r,1),i===d&&r<=a&&(a--,console.log("Adjusted: beforeTaskIndex=",a)),a>=0?d.tasks.splice(a,0,o):d.tasks.push(o),g(c)}function Lt(e){v();const t=E(c);if(!t)return;const n=t.lanes.find(i=>i.id===e);if(!n)return;const s={id:I(),title:"New task",description:""};n.tasks.push(s),g(c)}function Ht(e){v(),console.log("moveTask",c.editing);const t=E(c);if(!t)return;const{lane:n,task:s,taskIndex:i}=q(t,e);!n||!s||(n.tasks.splice(i,1),g(c))}function Pt(){v();const e=E(c);if(!e)return;const t={id:I(),title:"New Lane",tasks:[]};e.lanes.push(t),g(c)}function Nt(){v();const e={id:I(),title:"New Project",lanes:[]};c.projects.push(e),g(c)}function Ct(e){v(),c.editing.projectId=e,g(c)}function ot(e,t){v();const n=c.projects.find(s=>s.id===e);!n||(n.title=t,g(c))}function Mt(e){v(),c.editing.laneId=e,g(c)}function rt(e,t){v();const n=E(c);if(!n)return;const s=n.lanes.find(i=>i.id===e);!s||(s.title=t,g(c))}function Ot(e){v(),c.editing.taskId=e,g(c)}function at(e,t,n,s){v();const i=E(c);if(!i)return;const{task:o}=q(i,e);!o||(o.title=t,o.description=n,o.dueDate=s,g(c))}function O(e){c.dragdrop.dragOverElem=e}function Bt(){return c.dragdrop.dragOverElem}function Rt(e,t=24){return $`<svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    width=${t}
    style="cursor:pointer;"
    @click=${e}
  >
    ${mt`<path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />`}
  </svg>`}function qt(e){var n;const t=(n=(e==null?void 0:e.target).closest(".task"))==null?void 0:n.dataset.id;Ot(t)}function Ut(e){var r;e.preventDefault();const t=(r=(e==null?void 0:e.target).closest(".task"))==null?void 0:r.dataset.id,n=document.querySelector(".task.editing form input.title"),s=document.querySelector(".task.editing form input.description"),i=document.querySelector(".task.editing form input.due-date"),o=it(i.value?i.value+" 00:00:00":"");at(t,n.value,s.value,o)}function Ft(e){!confirm("Are you sure to delete this task?")||Ht(e)}function Kt(e,t){const n=e.id===t.editing.taskId;return $` ${n?$`<div data-id="${e.id}" class="task editing">
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
            value=${Tt(e.dueDate)}
          />
          <div class="buttons">
            <button
              @click=${()=>at(e.id,e.title,e.description,e.dueDate)}
              type="button"
            >
              X
            </button>
            <button @click=${Ut} type="submit">OK</button>
            ${Rt(()=>Ft(e.id))}
          </div>
        </form>
      </div>`:$`<div
        data-id="${e.id}"
        class="task"
        draggable="true"
        @dragstart=${Wt}
        @dragenter=${Yt}
        @dragover=${zt}
        @dragleave=${Vt}
        @drop=${Xt}
        @click=${qt}
      >
        <h4 class="task-title">${e.title}</h4>
        <div class="task-description">${e.description}</div>
        <div class="task-due">${Dt(e.dueDate)}</div>
      </div>`}`}let U=null;function Wt(e){var n;const t=(n=e==null?void 0:e.target)==null?void 0:n.dataset.id;e.dataTransfer&&(v(),e.dataTransfer.setData("text/plain",t),e.dataTransfer.effectAllowed="move",U=e==null?void 0:e.target)}function Yt(e){e.preventDefault();const t=e.target.closest(".task");O(t)}function zt(e){e.preventDefault();const t=e.target.closest(".task");if(U===t)return;t.classList.remove("over-top","over-bottom");const n=t.getBoundingClientRect();e.clientY-n.top<t.clientHeight/2?t.classList.add("over-top"):t.classList.add("over-bottom")}function Vt(e){e.preventDefault(),e.target.closest(".task").classList.remove("over-top","over-bottom")}function Xt(e){var d,a,l,m,u,p;if(e.preventDefault(),O(void 0),![...(a=(d=e==null?void 0:e.dataTransfer)==null?void 0:d.types)!=null?a:[]].includes("text/plain"))return;const t=(l=e==null?void 0:e.dataTransfer)==null?void 0:l.getData("text/plain");if(!t)return;const n=e.target.closest(".task");if(U===n)return;let s=n.dataset.id;if(n.classList.remove("over-top","over-bottom"),t===s)return;const i=n.getBoundingClientRect();if(!(e.clientY-i.top<n.clientHeight/2)){const f=Array.from((u=(m=n.parentElement)==null?void 0:m.querySelectorAll(".task"))!=null?u:[]),y=f.findIndex(ct=>ct===n),_=y>=0?f[y+1]:void 0;s=(p=_==null?void 0:_.dataset)==null?void 0:p.id}if(t===s)return;const r=n.closest(".lane").dataset.id;st(t,r,s)}function Jt(e){var n;const t=(n=(e==null?void 0:e.target).closest(".lane"))==null?void 0:n.dataset.id;Mt(t)}function Zt(e){var s;e.preventDefault();const t=(s=(e==null?void 0:e.target).closest(".lane"))==null?void 0:s.dataset.id,n=document.querySelector(".lane-title input");rt(t,n.value)}function Gt(e,t){var s;const n=e.id===((s=t.editing)==null?void 0:s.laneId);return $`<div data-id="${e.id}" class="lane">
    <div class="lane-title ${n?"editing":""}">
      ${n?$`<form>
            <input type="text" value=${e.title} autofocus />
            <button
              @click=${()=>rt(e.id,e.title)}
              type="button"
            >
              X
            </button>
            <button @click=${Zt} type="submit">OK</button>
          </form>`:$`<h4 @click=${Jt}>${e.title}</h4>
            <button @click=${()=>Lt(e.id)}>+</button>`}
    </div>
    <div
      class="tasks"
      @dragenter=${Qt}
      @dragover=${i=>G(i,!0)}
      @dragleave=${i=>G(i,!1)}
      @drop=${i=>te(i)}
    >
      ${e.tasks.map(i=>Kt(i,t))}
    </div>
  </div>`}function Qt(e){e.preventDefault(),e.target.closest(".tasks").classList.add("over"),O(e.target)}function G(e,t){e.preventDefault();const n=e.target.closest(".tasks");t?n.classList.add("over"):n.classList.remove("over")}function te(e){var i,o,r,d,a;if(e.preventDefault(),![...(o=(i=e==null?void 0:e.dataTransfer)==null?void 0:i.types)!=null?o:[]].includes("text/plain"))return;const t=e.target.closest(".tasks");if(t.classList.remove("over"),Bt()!==t)return;O(void 0);const n=(r=e==null?void 0:e.dataTransfer)==null?void 0:r.getData("text/plain");if(!n)return;const s=(a=(d=t.closest(".lane"))==null?void 0:d.dataset)==null?void 0:a.id;st(n,s)}function ee(e){var n;const t=(n=(e==null?void 0:e.target).closest(".project"))==null?void 0:n.dataset.id;Ct(t)}function ne(e){var s;e.preventDefault();const t=(s=(e==null?void 0:e.target).closest(".project"))==null?void 0:s.dataset.id,n=document.querySelector(".project-title input");ot(t,n.value)}function ie(e){var s;const t=e.projects.find(i=>i.id===e.currentProjectId);if(!t)return $`<div>Select a project</div>`;const n=t.id===((s=e.editing)==null?void 0:s.projectId);return $`<div data-id="${t.id}" class="project">
    <div class="project-title ${n?"editing":""}">
      ${n?$`<form>
            <input type="text" value=${t.title} autofocus />
            <button
              @click=${()=>ot(t.id,t.title)}
              type="button"
            >
              X
            </button>
            <button @click=${ne} type="submit">OK</button>
          </form>`:$`<h3 @click=${ee}>${t.title}</h3>
            <button @click=${()=>Pt()}>+ Lane</button>`}
    </div>
    <div class="lanes">${t.lanes.map(i=>Gt(i,e))}</div>
  </div> `}function se({projects:e,currentProjectId:t}){return $`
    <div class="project-selector">
      ${e.map(n=>$`<div
            class="project ${n.id===t?"active":""}"
            @click=${()=>St(n.id)}
          >
            ${n.title}
          </div>`)}
      <button @click=${()=>Nt()}>+ Project</button>
    </div>
  `}const lt="taskboard";async function oe(e){const t={currentProjectId:e.currentProjectId,projects:e.projects},n=JSON.stringify(t);window.localStorage.setItem(lt,n)}async function re(){var i,o;const e=(i=window.localStorage.getItem(lt))!=null?i:"{}",t=JSON.parse(e);let n=t.currentProjectId;return t.projects||(t.projects=[]),(o=t.projects)!=null&&o.length||(t.projects.push({id:I(),title:"First Project",lanes:[{id:I(),title:"To Do",tasks:[{id:"1",title:"test",description:"",dueDate:new Date}]},{id:I(),title:"Doing",tasks:[]},{id:I(),title:"Done",tasks:[]}]}),n=t.projects[0].id),t.projects=ae(t.projects),{currentProjectId:n!=null?n:t.projects[0].id,projects:t.projects,editing:{},dragdrop:{}}}function ae(e){return e.map(t=>b(A({},t),{lanes:t.lanes.map(n=>b(A({},n),{tasks:n.tasks.map(s=>b(A({},s),{dueDate:it(s.dueDate)}))}))}))}function le(e){return $`<div>${se(e)} ${ie(e)}</div>`}async function ce(e){const t=document.querySelector("#app");At(le(e),t),await oe(e),de()}function de(){const e=document.querySelector("[autofocus]");!e||e.focus()}re().then(e=>{Et(b(A({},e),{editing:{projectId:void 0,laneId:void 0,taskId:void 0},dragdrop:{dragOverElem:void 0}}),ce)});
