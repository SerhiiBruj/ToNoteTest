import{r as n,u as m,i as x,j as a,B as h}from"./index-CzUMW2uM.js";import{B as j}from"./bellsIcon-DzhyNQa-.js";import{C as v}from"./circle-CZI8zLzP.js";import{u as b}from"./useLocalStorage-DVcwY5UD.js";const C=()=>{const c=m(e=>e.isEditable.value),f=m(e=>e.showExpo.value),d=x(),r=n.useMemo(()=>d.pathname.split("/").slice(2).join("/"),[d.pathname]),[t,o]=b(r,[""]);n.useEffect(()=>{if(c){const e=[...t,""];o(e)}else if(t.length>1){const e=t.map(s=>s.trim()).filter(s=>s!=="");o(e)}},[c]);const p=n.useCallback(e=>{const s=t.filter((i,l)=>l!==e);o(s)},[t,o,r]),u=n.useCallback((e,s)=>{const i=[...t];i[s]=e.target.value,o(i),i[s].trim()!==""&&!i.some(l=>l.trim()==="")&&o(l=>[...l,""])},[t,o,r]);return a.jsx("div",{className:"todo conteiner fileConteiner ",onClick:e=>{(f||c)&&e.stopPropagation()},children:a.jsx("ol",{children:t.map((e,s)=>a.jsxs("li",{className:"li",children:[a.jsxs("div",{className:"divdiv",style:{width:"80%"},children:[a.jsx(v,{size:30,color:"#bfbfbf"}),a.jsx("textarea",{className:"texarea",disabled:!c,value:e,onChange:i=>u(i,s),rows:"1",cols:"50"})]}),a.jsxs("div",{className:"divindiv",children:[a.jsx("div",{children:a.jsx(j,{size:1.5})}),a.jsx("div",{onClick:()=>p(s),children:a.jsx(h,{size:1,color:"#bfbfbf"})})]})]},s))})})},k=n.memo(C);export{k as default};
