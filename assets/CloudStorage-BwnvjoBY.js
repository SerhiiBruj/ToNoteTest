import{u,j as s,f as n}from"./index-CzUMW2uM.js";const f=()=>{let i="checklist/Python";const l=u(e=>e.pages.value),c=async()=>{console.log("receiving");try{const e=localStorage.getItem("token"),o=await n.get("http://localhost:3000/get-uploaded-file",{headers:{Authorization:`Bearer ${e}`},params:{fileName:i}});console.log("received"),console.log(o.data);for(let t=0;t<o.data.userFiles.length;t++)sessionStorage.setItem(o.data.userFiles[t].name,o.data.userFiles[t].value);return o.data}catch(e){console.error(e)}},g=async()=>{console.log("sending");try{let e=[];for(let a=0;a<l.length;a++)e.push({name:l[a],value:sessionStorage.getItem(l[a])});const o=localStorage.getItem("token"),t=await n.post("http://localhost:3000/upload-file",{file:e},{headers:{Authorization:`Bearer ${o}`}});return console.log(t),t.status!==200?(console.log("Не вдалося завантажити файли."),!1):(console.log("Файли успішно завантажені!"),!0)}catch(e){console.error("Помилка під час завантаження файлів:",e)}};function r(){let e=0;for(let o in sessionStorage)Object.prototype.hasOwnProperty.call(sessionStorage,o)&&(e+=(sessionStorage[o].length+o.length)*2);return e}const d=e=>{if(e<1024)return`${e} B`;if(e<1024*1024)return`${(e/1024).toFixed(2)} KB`;if(e<1024*1024*1024)return`${(e/(1024*1024)).toFixed(2)} MB`};return s.jsxs("div",{className:"settingsSection",children:[s.jsx("h1",{style:{fontSize:"40px"},children:"Storage"}),s.jsx("div",{id:"progress",style:{boxShadow:`inset white ${r()/(1024*1024*2/100)}px 0px 0px 0px`},children:s.jsxs("span",{style:{mixBlendMode:"difference"},children:["Storage Space ",d(r())," of 10MB used."]})}),s.jsx("h2",{style:{},children:"You also can use a cloud storage and use it via different devices."}),s.jsx("h3",{className:"h3sinCloudSec",onClick:localStorage.getItem("beLocal")&&g,children:"Send your files to Cloud Storage"}),s.jsx("h3",{className:"h3sinCloudSec",onClick:localStorage.getItem("beLocal")&&c,children:"Get your files from the Cloud Storage"})]})};export{f as default};
