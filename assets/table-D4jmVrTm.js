import{r as i,u as j,i as C,j as a,R as x,C as f}from"./index-CtEPdiN7.js";import{u as y}from"./useLocalStorage-BL4P7aQD.js";import{D as v}from"./doneIcon-DV2CqfHM.js";const $=()=>{const o=j(e=>e.isEditable.value),m=C(),u=i.useMemo(()=>m.pathname.split("/").slice(2).join("/"),[m.pathname]),[n,r]=y(u,[["",""],["",""]]),h=i.useCallback((e,l,s)=>{const t=[...n];t[l][s]=e.target.value,r(t)},[n,r]),d=i.useCallback((e,l)=>{const s=[...n];s[e][l]=n[e][l]===!1||n[e][l]==="",r(s)},[n,r]),p=i.useCallback(()=>{const e=[...n];e.push(new Array(e[0].length).fill("")),r(e)},[n]),b=i.useCallback(()=>{const e=n.map(l=>[...l,""]);r(e)},[n]);return i.useEffect(()=>{if(!o&&n.length>2){let e=n.filter(s=>s.some(t=>t===!0||typeof t=="string"&&t.trim()!==""));const l=new Set;for(let s=0;s<(e[0]||[]).length;s++){let t=!1;for(let c=0;c<e.length;c++)if(e[c][s]===!0||e[c][s]&&e[c][s].trim()!==""){t=!0;break}t&&l.add(s)}e=e.map(s=>s.filter((t,c)=>l.has(c))),r(e)}console.log("table")},[o]),a.jsx(a.Fragment,{children:a.jsxs("div",{className:"conteiner fileConteiner",style:{display:"flex"},onClick:e=>{o&&e.stopPropagation()},children:[a.jsxs("div",{className:"table",style:{display:"flex",flexDirection:"column"},children:[n.map((e,l)=>a.jsx("div",{className:"tableRow",style:{display:"flex"},children:e.map((s,t)=>{const c=`cell-${l}-${t}`;return l===0||t===0?a.jsxs(x.Fragment,{children:[!t&&l!==0?a.jsx("div",{className:"line",style:{transform:` scaleX(${e.length*2.3}) rotate(-90deg)`}},`line-h-${t}-${l+200}`):!l&&t!==0?a.jsx("div",{className:"line",style:{transform:` scaleY(${n.length*1.1}) `}},`line-v-${t}-${l+300}`):null,a.jsx("div",{className:"tableCell",children:a.jsx("textarea",{className:"texarea talbetextarea",onChange:g=>h(g,l,t),value:s,name:"head",disabled:!o||l===0&&t===0})},t)]},`fragment-${l}-${t}`):a.jsx("div",{onClick:()=>{o&&d(l,t)},className:"tableCell",style:{cursor:o?"pointer":"default",marginLeft:`${t*1/1.85}px`},children:s&&a.jsx(v,{})},c)})},`row-1987-${l}`)),a.jsx("div",{onClick:()=>{o&&p()},style:{height:"fit-content",width:"fit-content"},children:a.jsx(f,{size:.5,color:o?"#7a7c7c":"#484848"})})]}),a.jsx("div",{onClick:()=>{o&&b()},style:{height:"fit-content",width:"fit-content"},children:a.jsx(f,{size:.5,color:o?"#7a7c7c":"#484848 "})})]})})},T=i.memo($);export{T as default};
