import{r as t,e as h,h as u,j as a}from"./index-DgtEE1PH.js";import{u as m}from"./useLocalStorage-Cgl932f3.js";const x=()=>{const o=h(e=>e.isEditable.value),s=t.useRef(null),{name:n}=u(),[l,i]=m("note/");t.useEffect(()=>{location.pathname.split("/")[1];const e=s.current;e&&(e.style.height="auto",e.style.height=`${e.scrollHeight}px`),console.log("note")},[]);const r=t.useCallback(e=>{const c=e.target.value;i(c)},[n]);return a.jsx("div",{style:{height:"90%"},onClick:e=>{e.stopPropagation()},className:" conteiner fileConteiner",children:a.jsx("div",{className:"contic",style:{paddingTop:20,width:"100%",height:"100%"},children:a.jsx("textarea",{style:{width:"100%",height:"100% !important",minHeight:"90%",margin:0},disabled:!o,ref:s,className:"texarea",placeholder:"Type here...",value:l,onChange:e=>r(e),autoFocus:!0})})})},p=t.memo(x);export{p as default};
