import{e as y,r,j as s,A as v}from"./index-C7DnYtfi.js";import{u as m}from"./useLocalStorage-CgBivwWQ.js";const C=()=>{var h,x;const i=y(e=>e.isEditable.value),d=r.useRef(null),l=()=>{const e=new Date;return`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`},[a,n]=m("diary/",[{date:l(),value:""}]),[t,o]=r.useState(0);r.useEffect(()=>{const e=d.current;e&&(e.style.height="auto",e.style.height=`${e.scrollHeight}px`)},[a,t]),r.useEffect(()=>{i||n(a.filter(e=>e.value.trim()!==""))},[i]);const u=e=>{console.log(`Current page: ${t}, Total pages: ${a.length}`),e?(a.length>t+1||n([...a,{date:l(),value:""}]),o(t+1)):t>0?o(t-1):alert("you cannot do this")},f=e=>{var g;const p=e.target.value,c=[...a];c[t]={date:((g=c[t])==null?void 0:g.date)||l(),value:p},n(c)};return s.jsxs("div",{className:"diary-container",onClick:e=>{i&&e.stopPropagation()},children:[s.jsxs("div",{className:"diary-header",children:[s.jsx("div",{style:{visibility:t===0?"hidden":"visible"},onClick:()=>u(!1),className:"arrow-container",children:s.jsx(v,{size:"5vh"})}),s.jsx("span",{className:"diary-date",children:(h=a[t])==null?void 0:h.date}),s.jsx("div",{style:{visibility:t===a.length-1&&!i?"hidden":"visible"},onClick:()=>u(!0),className:"arrow-container arrow-rotated",children:s.jsx(v,{size:"5vh"})})]}),s.jsx("div",{className:"diary-content",children:s.jsx("textarea",{disabled:!i,ref:d,className:"diary-textarea",placeholder:"Type in",value:((x=a[t])==null?void 0:x.value)||"",onChange:f,autoFocus:!0})})]})};export{C as default};