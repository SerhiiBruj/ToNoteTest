import{r,i as L,e as u,j as t,B as N}from"./index-CFAfkGN5.js";import{B as E}from"./bellsIcon-Ca-zFxNl.js";import{u as I}from"./useLocalStorage-CHzxJ16y.js";import{D as x}from"./doneIcon-eTCtlR_p.js";import{C as g}from"./circle-GQkPG-61.js";const v=/(https?:\/\/[^\s]+)/g,B=()=>{const m=L(),y=r.useMemo(()=>m.pathname.split("/").slice(2).join("/"),[m.pathname]),[n,p]=I(y,[]),c=u(s=>s.isEditable.value),j=u(s=>s.showExpo.value);r.useEffect(()=>{if(c){const s=[...n];s.forEach(e=>{e.desc.some(a=>a.value==="")||e.desc.push({value:"",done:!1})}),s.some(e=>e.p==="")||s.push({p:"",desc:[{value:"",done:!1}]}),p(s)}else{const s=n.map(e=>({...e,desc:e.desc.map(a=>{var l;return{...a,value:(l=a.value)==null?void 0:l.trim()}}).filter(a=>a.value!=="")})).filter(e=>e.p.trim()!==""&&e.desc.length>0);p(s)}},[c]);const i=r.useCallback(s=>{p(s)},[p]),b=r.useCallback(s=>{const e=n.filter((a,l)=>l!==s);i(e)},[n,i]),C=r.useCallback((s,e,a)=>{const l=n.map((o,d)=>d===e?{...o,desc:o.desc.map((h,D)=>D===a?{...h,value:s.target.value}:h)}:o);l[e].desc.some(o=>o.value.trim()==="")||l[e].desc.push({value:"",done:!1}),i(l)},[n,i]),f=r.useCallback((s,e)=>{const a=n.map((l,o)=>o===s?{...l,desc:l.desc.map((d,h)=>h===e?{...d,done:!d.done}:d)}:l);i(a)},[n,i]),w=r.useCallback((s,e)=>{const a=n.map((l,o)=>o===e?{...l,p:s.target.value}:l);a.some(l=>l.p.trim()==="")||a.push({p:"",desc:[{value:"",done:!1}]}),i(a)},[n,i]),k=r.useCallback(s=>s.split(v).map((e,a)=>v.test(e)?t.jsx("a",{href:e,style:{color:"inherit",fontSize:25},target:"_blank",rel:"noopener noreferrer",children:e},a):e),[]);return t.jsx("div",{className:"checkList conteiner fileConteiner",onClick:s=>(j||c)&&s.stopPropagation(),children:n.map((s,e)=>t.jsxs("ul",{className:"checkLisList",children:[t.jsxs("div",{className:"spbtw",style:{borderBottom:!s.p&&"5px solid gray"},children:[t.jsx("textarea",{onChange:a=>w(a,e),className:`caption texarea ${s.p?"with-after":"noafter"}`,placeholder:"Type in",disabled:!c,value:s.p,style:{padding:10,height:50,margin:0}}),t.jsxs("div",{style:{display:"flex"},children:[t.jsx(E,{size:1.2}),t.jsx("div",{onClick:()=>b(e),children:t.jsx(N,{size:.8,color:"#bfbfbf"})})]})]}),s.desc.map((a,l)=>t.jsx("li",{className:`${a.done?"doned checkLi":"checkLi"}`,style:{paddingTop:20},children:c?t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[t.jsx("div",{style:{transform:"translate(-20px)"},children:t.jsx(g,{size:20,color:"#bfbfbf"})}),t.jsx("textarea",{value:a.value,disabled:!c,onChange:o=>C(o,e,l),className:"texarea checkLi",style:{borderBottom:!a.value&&"5px solid gray",height:"auto",padding:5,minHeight:30,margin:0,width:"100%"}})]}),t.jsx("div",{onClick:()=>f(e,l),style:{opacity:a.done?1:.5},children:t.jsx(x,{})})]}):t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"column"},children:t.jsxs("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",width:"80%"},children:[t.jsx("div",{style:{transform:"translate(-20px)"},children:t.jsx(g,{size:20,color:"#bfbfbf"})}),t.jsx("div",{className:"texarea checkLi",style:{padding:5,minHeight:30,margin:0,width:"90%",maxWidth:"90%",overflowWrap:"anywhere"},children:k(a.value)})]}),t.jsx("div",{className:"hoverSvg",onClick:()=>f(e,l),style:{transition:"0.5s all ease",opacity:a.done?1:.5},children:t.jsx(x,{})})]})})},l)),t.jsx("hr",{style:{marginTop:50,border:0,width:"100%",height:5,backgroundColor:"#bfbfbf",opacity:"50%"},className:"hr"})]},e))})},M=r.memo(B);export{M as default};
