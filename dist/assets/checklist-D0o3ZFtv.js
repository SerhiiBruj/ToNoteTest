import{r as c,h as C,e as j,u as y,j as l,B as k}from"./index-CcoqSnJQ.js";import{B as w}from"./bellsIcon-D1eqe-q1.js";import{u as D}from"./useLocalStorage-oiFY2slo.js";import{D as L}from"./doneIcon-Cba29-zi.js";import{C as N}from"./circle-RmBpBW_S.js";const I=()=>{const{name:u}=C(),[n,r]=D("checklist/"),i=j(s=>s.isEditable.value),p=y(),m=()=>{if(i){const s=structuredClone(n);s.forEach(e=>{e.desc.some(a=>a.value==="")||e.desc.push({value:"",done:!1})}),s.some(e=>e.p==="")||s.push({p:"",desc:[{value:"",done:!1}]}),r(s)}else{const s=structuredClone(n).map(e=>({...e,desc:e.desc.map(a=>{var t;return{...a,value:(t=a.value)==null?void 0:t.trim()}}).filter(a=>a.value!=="")})).filter(e=>e.p.trim()!==""&&e.desc.length>0);(n.length!==s.length||n.some((e,a)=>e.desc.length!==n[a].desc.length))&&r(s)}};c.useInsertionEffect(()=>{m()},[i]);const f=c.useCallback(s=>{const e=n.filter((a,t)=>t!==s);r(e)},[n,u,r,p]),g=c.useCallback((s,e)=>{const a=n.map((t,o)=>o===s?{...t,desc:t.desc.map((d,h)=>h===e?{...d,done:!d.done}:d)}:t);r(a)},[n,u,r,p]),v=c.useCallback((s,e,a)=>{const t=structuredClone(n).map((o,d)=>d===e?{...o,desc:o.desc.map((h,x)=>x===a?{...h,value:s.target.value}:h)}:o);t[e].desc.some(o=>o.value.trim()==="")||t[e].desc.push({value:"",done:!1}),r(t)},[n,u,r,p]),b=c.useCallback((s,e)=>{const a=structuredClone(n).map((t,o)=>o===e?{...t,p:s.target.value}:t);a.some(t=>t.p.trim()==="")||a.push({p:"",desc:[{value:"",done:!1}]}),r(a)},[n,u,r,p]);return l.jsx("div",{className:"checkList conteiner fileConteiner",onClick:s=>i&&s.stopPropagation(),children:n.map((s,e)=>l.jsxs("ul",{className:"checkLisList",children:[l.jsxs("div",{className:"spbtw",style:{borderBottom:!s.p&&"5px solid gray"},children:[l.jsx("textarea",{onChange:a=>b(a,e),className:`caption texarea ${s.p?"with-after":"noafter"}`,placeholder:"Type in",disabled:!i,value:s.p,style:{padding:10,height:50,margin:0}}),l.jsxs("div",{style:{display:"flex"},children:[l.jsx(w,{size:1.2}),l.jsx("div",{onClick:()=>f(e),children:l.jsx(k,{size:.8,color:"#bfbfbf"})})]})]}),s.desc.map((a,t)=>l.jsx("li",{className:`${a.done?"doned checkLi":"checkLi"}`,style:{paddingTop:20},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[l.jsx("div",{style:{transform:"translate(-20px)"},children:l.jsx(N,{size:20,color:"#bfbfbf"})}),l.jsx("input",{value:a.value,disabled:!i,onChange:o=>v(o,e,t),className:"texarea checkLi",style:{borderBottom:!a.value&&"5px solid gray",height:"auto",padding:5,minHeight:30,margin:0,width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})]}),l.jsx("div",{onClick:()=>g(e,t),style:{opacity:a.done?1:.5},children:l.jsx(L,{})})]})},t)),l.jsx("hr",{style:{marginTop:50,border:0,width:"100%",height:5,backgroundColor:"#bfbfbf",opacity:"50%"},className:"hr"})]},e))})},R=c.memo(I);export{R as default};
