import{r as l,u as m,i as u,j as t,B as x}from"./index-zJD69A5m.js";import{B as j}from"./bellsIcon-Bye7s4w7.js";import{C as v}from"./circle-C_tuocet.js";import{u as w}from"./useLocalStorage-CBIi49oz.js";const b=()=>{const c=m(e=>e.isEditable.value),p=m(e=>e.showExpo.value),d=u(),r=l.useMemo(()=>d.pathname.split("/").slice(2).join("/"),[d.pathname]),[o,i]=w(r,[""]);l.useEffect(()=>{if(c){const e=[...o,""];i(e)}else if(o.length>1){const e=o.map(s=>s.trim()).filter(s=>s!=="");i(e)}},[c]);const f=l.useCallback(e=>{const s=o.filter((a,n)=>n!==e);i(s)},[o,i,r]),h=l.useCallback((e,s)=>{const a=[...o];a[s]=e.target.value,i(a),a[s].trim()!==""&&!a.some(n=>n.trim()==="")&&i(n=>[...n,""])},[o,i,r]);return t.jsx("div",{className:"todo conteiner fileConteiner ",onClick:e=>{(p||c)&&e.stopPropagation()},children:t.jsx("ol",{className:"todoListCont",children:o.map((e,s)=>t.jsxs("li",{className:"li",children:[t.jsxs("div",{className:"divdiv",style:{width:"80%"},children:[t.jsx(v,{size:30,color:"#bfbfbf"}),t.jsx("textarea",{onTouchStart:a=>a.stopPropagation(),className:"texarea",disabled:!c,value:e,onChange:a=>h(a,s),rows:"1",cols:"50"})]}),t.jsxs("div",{className:"divindiv",children:[t.jsx("div",{children:t.jsx(j,{size:window.innerWidth>480?1.5:.8})}),t.jsx("div",{onClick:()=>f(s),children:t.jsx(x,{size:window.innerWidth>480?1:.5,color:"#bfbfbf"})})]})]},s))})})},k=l.memo(b);export{k as default};