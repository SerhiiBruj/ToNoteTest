import{r as i,e as g,j as a,R as p,C as f}from"./index-6vMRcOZg.js";import{u as j}from"./useLocalStorage-oTfYrqNp.js";import{D as C}from"./doneIcon-xl2xP_qV.js";const x=()=>{const o=g(e=>e.isEditable.value),[n,r]=j("table/"),m=i.useCallback((e,t,s)=>{const l=[...n];l[t][s]=e.target.value,r(l)},[n,r]),u=i.useCallback((e,t)=>{const s=[...n];s[e][t]=n[e][t]===!1||n[e][t]==="",r(s)},[n,r]),h=i.useCallback(()=>{const e=[...n];e.push(new Array(e[0].length).fill("")),r(e)},[n]),d=i.useCallback(()=>{const e=n.map(t=>[...t,""]);r(e)},[n]);return i.useEffect(()=>{if(!o&&n.length>2){let e=n.filter(s=>s.some(l=>l===!0||typeof l=="string"&&l.trim()!==""));const t=new Set;for(let s=0;s<(e[0]||[]).length;s++){let l=!1;for(let c=0;c<e.length;c++)if(e[c][s]===!0||e[c][s]&&e[c][s].trim()!==""){l=!0;break}l&&t.add(s)}e=e.map(s=>s.filter((l,c)=>t.has(c))),r(e)}console.log("table")},[o]),a.jsx(a.Fragment,{children:a.jsxs("div",{className:"conteiner fileConteiner",style:{display:"flex"},onClick:e=>{o&&e.stopPropagation()},children:[a.jsxs("div",{className:"table",style:{display:"flex",flexDirection:"column"},children:[n.map((e,t)=>a.jsx("div",{className:"tableRow",style:{display:"flex"},children:e.map((s,l)=>{const c=`cell-${t}-${l}`;return t===0||l===0?a.jsxs(p.Fragment,{children:[!l&&t!==0?a.jsx("div",{className:"line",style:{transform:` scaleX(${e.length*2.3}) rotate(-90deg)`}},`line-h-${l}-${t+200}`):!t&&l!==0?a.jsx("div",{className:"line",style:{transform:` scaleY(${n.length*1.1}) `}},`line-v-${l}-${t+300}`):null,a.jsx("div",{className:"tableCell",children:a.jsx("textarea",{className:"texarea talbetextarea",onChange:b=>m(b,t,l),value:s,name:"head",disabled:!o||t===0&&l===0})},l)]},`fragment-${t}-${l}`):a.jsx("div",{onClick:()=>{o&&u(t,l)},className:"tableCell",style:{cursor:o?"pointer":"default",marginLeft:`${l*1/1.85}px`},children:s&&a.jsx(C,{})},c)})},`row-1987-${t}`)),a.jsx("div",{onClick:()=>{o&&h()},style:{height:"fit-content",width:"fit-content"},children:a.jsx(f,{size:.05,color:o?"#7a7c7c":"#484848"})})]}),a.jsx("div",{onClick:()=>{o&&d()},style:{height:"fit-content",width:"fit-content"},children:a.jsx(f,{size:.05,color:o?"#7a7c7c":"#484848"})})]})})},w=i.memo(x);export{w as default};