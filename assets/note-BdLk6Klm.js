import{r as t,u,i as m,j as s}from"./index-CSh4VM9D.js";import{u as p}from"./useLocalStorage-BCrAJPNv.js";const x=()=>{const i=u(e=>e.isEditable.value),o=t.useRef(null),a=m(),n=t.useMemo(()=>a.pathname.split("/").slice(2).join("/"),[a.pathname]),[l,r]=p(n,"");t.useEffect(()=>{a.pathname.split("/")[1];const e=o.current;e&&(e.style.height="auto",e.style.height=`${e.scrollHeight}px`),console.log("note")},[]);const c=t.useCallback(e=>{const h=e.target.value;r(h)},[n]);return s.jsx("div",{style:{height:"90%"},onClick:e=>{e.stopPropagation()},className:" conteiner fileConteiner",children:s.jsx("div",{className:"contic",style:{paddingTop:20,width:"100%",height:"100%"},children:s.jsx("textarea",{style:{width:"100%",height:"100% !important",minHeight:"90%",margin:0},disabled:!i,ref:o,className:"texarea",placeholder:"Type here...",value:l,onChange:e=>c(e),autoFocus:!0})})})},f=t.memo(x);export{f as default};
