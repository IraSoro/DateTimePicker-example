/*! For license information please see 272.45764ad4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkionic_test=self.webpackChunkionic_test||[]).push([[272],{272:(e,t,o)=>{o.r(t),o.d(t,{startTapClick:()=>s});var n=o(811);const s=e=>{let t,o,s,v=10*-u,f=0;const p=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,m=e=>{v=(0,n.u)(e),E(e)},L=()=>{s&&clearTimeout(s),s=void 0,t&&(g(!1),t=void 0)},w=e=>{t||b(i(e),e)},E=e=>{b(void 0,e)},b=(e,o)=>{if(e&&e===t)return;s&&clearTimeout(s),s=void 0;const{x:i,y:c}=(0,n.p)(o);if(t){if(h.has(t))throw new Error("internal error");t.classList.contains(r)||k(t,i,c),g(!0)}if(e){const t=h.get(e);t&&(clearTimeout(t),h.delete(e)),e.classList.remove(r);const o=()=>{k(e,i,c),s=void 0};a(e)?o():s=setTimeout(o,d)}t=e},k=(e,t,n)=>{if(f=Date.now(),e.classList.add(r),!p)return;const s=c(e);null!==s&&(T(),o=s.addRipple(t,n))},T=()=>{void 0!==o&&(o.then((e=>e())),o=void 0)},g=e=>{T();const o=t;if(!o)return;const n=l-Date.now()+f;if(e&&n>0&&!a(o)){const e=setTimeout((()=>{o.classList.remove(r),h.delete(o)}),l);h.set(o,e)}else o.classList.remove(r)},C=document;C.addEventListener("ionGestureCaptured",L),C.addEventListener("touchstart",(e=>{v=(0,n.u)(e),w(e)}),!0),C.addEventListener("touchcancel",m,!0),C.addEventListener("touchend",m,!0),C.addEventListener("pointercancel",L,!0),C.addEventListener("mousedown",(e=>{if(2===e.button)return;const t=(0,n.u)(e)-u;v<t&&w(e)}),!0),C.addEventListener("mouseup",(e=>{const t=(0,n.u)(e)-u;v<t&&E(e)}),!0)},i=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=272.45764ad4.chunk.js.map