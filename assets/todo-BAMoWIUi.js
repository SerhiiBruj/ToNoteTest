import{r,e as d,h as u,j as t,B as x}from"./index-I7sV2_Tq.js";import{B as j}from"./bellsIcon-1oARDgh8.js";import{C as v}from"./circle-S04e9AZe.js";import{u as w}from"./useLocalStorage-25CBDgjq.js";const b=()=>{const l=d(e=>e.isEditable.value),m=d(e=>e.showExpo.value),{name:f}=u(),c="todo/"+f,[o,i]=w(c);r.useEffect(()=>{if(l){const e=[...o,""];i(e)}else if(o.length>1){const e=o.map(s=>s.trim()).filter(s=>s!=="");i(e)}},[l]);const h=r.useCallback(e=>{const s=o.filter((a,n)=>n!==e);i(s)},[o,i,c]),p=r.useCallback((e,s)=>{const a=[...o];a[s]=e.target.value,i(a),a[s].trim()!==""&&!a.some(n=>n.trim()==="")&&i(n=>[...n,""])},[o,i,c]);return t.jsx("div",{className:"todo conteiner fileConteiner ",onClick:e=>{(m||l)&&e.stopPropagation()},children:t.jsx("ol",{className:"todoListCont",children:o.map((e,s)=>t.jsxs("li",{className:"li",children:[t.jsxs("div",{className:"divdiv",style:{width:"80%"},children:[t.jsx(v,{size:30,color:"#bfbfbf"}),t.jsx("textarea",{onTouchStart:a=>a.stopPropagation(),className:"texarea",disabled:!l,value:e,onChange:a=>p(a,s),rows:"1",cols:"50"})]}),t.jsxs("div",{className:"divindiv",children:[t.jsx("div",{children:t.jsx(j,{size:window.innerWidth>480?1.5:.8})}),t.jsx("div",{onClick:()=>h(s),children:t.jsx(x,{size:window.innerWidth>480?1:.5,color:"#bfbfbf"})})]})]},s))})})},k=r.memo(b);export{k as default};