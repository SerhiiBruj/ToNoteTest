import{e as j,r as i,h as N,j as s}from"./index-DTLamWhr.js";import{u as b}from"./useLocalStorage-DLDito-X.js";import{A as f}from"./arrow-bHAUOB3L.js";const T=()=>{var h,x;const r=j(e=>e.isEditable.value),d=i.useRef(null),{name:v}=N(),m="diary/"+v,l=()=>{const e=new Date;return`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`},[a,n]=b(m,[{date:l(),value:""}]),[t,o]=i.useState(0);i.useEffect(()=>{const e=d.current;e&&(e.style.height="auto",e.style.height=`${e.scrollHeight}px`)},[a,t]),i.useEffect(()=>{r||n(a.filter(e=>e.value.trim()!==""))},[r]);const u=e=>{console.log(`Current page: ${t}, Total pages: ${a.length}`),e?(a.length>t+1||n([...a,{date:l(),value:""}]),o(t+1)):t>0?o(t-1):alert("you cannot do this")},p=e=>{var g;const y=e.target.value,c=[...a];c[t]={date:((g=c[t])==null?void 0:g.date)||l(),value:y},n(c)};return s.jsxs("div",{className:"diary-container",onClick:e=>{r&&e.stopPropagation()},children:[s.jsxs("div",{className:"diary-header",children:[s.jsx("div",{style:{visibility:t===0?"hidden":"visible"},onClick:()=>u(!1),className:"arrow-container",children:s.jsx(f,{size:"5vh"})}),s.jsx("span",{className:"diary-date",children:(h=a[t])==null?void 0:h.date}),s.jsx("div",{style:{visibility:t===a.length-1&&!r?"hidden":"visible"},onClick:()=>u(!0),className:"arrow-container arrow-rotated",children:s.jsx(f,{size:"5vh"})})]}),s.jsx("div",{className:"diary-content",children:s.jsx("textarea",{disabled:!r,ref:d,className:"diary-textarea",placeholder:"Type in",value:((x=a[t])==null?void 0:x.value)||"",onChange:p,autoFocus:!0})})]})};export{T as default};