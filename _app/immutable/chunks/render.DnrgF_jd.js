import{n as m,o as L,q as O,u as b,v as p,c as h,s as E,a as C,f as _,w as H,x as I,y as Y,z as j,A as M,B as S,C as V,e as $,g as k,h as w,D as q,j as z,F as B}from"./runtime.C_zXYu29.js";import{c as F,r as A,h as y,d as W,i as G}from"./disclose-version.BF36dfvA.js";function Q(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function J(t,e){return D(t,e)}function U(t,e){m(),e.intro=e.intro??!1;const n=e.target,l=w,u=_;try{for(var a=L(n);a&&(a.nodeType!==8||a.data!==O);)a=b(a);if(!a)throw p;h(!0),E(a),C();const o=D(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==H)throw I(),p;return h(!1),o}catch(o){if(o===p)return e.recover===!1&&Y(),m(),j(n),h(!1),J(t,e);throw o}finally{h(l),E(u)}}const i=new Map;function D(t,{target:e,anchor:n,props:l={},events:u,context:a,intro:o=!0}){m();var v=new Set,g=d=>{for(var r=0;r<d.length;r++){var s=d[r];if(!v.has(s)){v.add(s);var f=G(s);e.addEventListener(s,y,{passive:f});var T=i.get(s);T===void 0?(document.addEventListener(s,y,{passive:f}),i.set(s,1)):i.set(s,T+1)}}};g(M(F)),A.add(g);var c=void 0,N=S(()=>{var d=n??e.appendChild(V());return $(()=>{if(a){k({});var r=B;r.c=a}u&&(l.$$events=u),w&&W(d,null),c=t(d,l)||{},w&&(q.nodes_end=_),a&&z()}),()=>{var f;for(var r of v){e.removeEventListener(r,y);var s=i.get(r);--s===0?(document.removeEventListener(r,y),i.delete(r)):i.set(r,s)}A.delete(g),R.delete(c),d!==n&&((f=d.parentNode)==null||f.removeChild(d))}});return R.set(c,N),c}let R=new WeakMap;function X(t){const e=R.get(t);e&&e()}export{U as h,J as m,Q as s,X as u};
