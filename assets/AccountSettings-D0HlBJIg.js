import{r as o,u as v,b as C,j as e,f as k}from"./index-CzUMW2uM.js";const T=()=>{const[d,m]=o.useState([""]),[i,u]=o.useState(!1),t=v(s=>s.userData),[c,p]=o.useState(!1),[a,x]=o.useState({oldPassword:"fdsfs",newPassword:"fdsfd"}),h=o.useCallback(s=>{x({...a,[s.target.name]:s.target.value})},[]);o.useEffect(()=>{d[0]===""&&!localStorage.getItem("beLocal")&&(async()=>{try{console.log("reqForLastTimeSeenData");const n=await k.get("http://localhost:3000/entries",{headers:{userName:t.userName}});let g=new Array(n.data.length);for(let r=0;r<n.data.length;r++){let{client_time:S}=n.data[r];const l=new Date(S),j=String(l.getDate()).padStart(2,"0"),b=String(l.getMonth()+1).padStart(2,"0"),f=l.getFullYear(),P=String(l.getHours()).padStart(2,"0"),y=String(l.getMinutes()).padStart(2,"0"),N=`${P}:${y}  ${j}.${b}.${f}`;g.push(N)}m(g.filter(r=>r!=="").slice(0,10))}catch(n){console.log(n)}})()},[]);const w=C();return e.jsxs("div",{className:"settingsSection",children:[e.jsx("h1",{children:"Account Settings"}),e.jsxs("p",{children:["Email: ",e.jsx("strong",{children:t==null?void 0:t.email})]}),e.jsxs("p",{children:["Username: ",e.jsx("strong",{children:t==null?void 0:t.userName})]}),e.jsxs("label",{children:[e.jsx("strong",{children:"Change password"}),e.jsxs("div",{id:"passwordChange",children:[e.jsx("input",{type:"text",placeholder:"Old password",name:"oldPassword",style:{WebkitTextSecurity:c?"none":"disc"},className:"submit inputpas ",value:a.oldPassword,onChange:s=>h(s)}),e.jsx("input",{type:"text",placeholder:"New password",name:"newPassword",style:{WebkitTextSecurity:c?"none":"disc"},className:"submit inputpas",value:a.newPassword,onChange:s=>h(s)})]})]}),(a.newPassword||a.oldPassword)&&e.jsx("span",{className:"hideshow",onClick:()=>p(!c),children:c?"Hide it":"Make it visible"}),e.jsx("br",{}),a.newPassword&&a.oldPassword&&e.jsx("button",{className:"submit",id:"changepass",children:"Change"}),e.jsxs("div",{className:"lastTimeSeen",children:[e.jsx("br",{}),e.jsx("strong",{children:"Last time seen:"})," ",d[0],e.jsx("br",{}),e.jsx("b",{id:"showlogins",onClick:()=>u(!i),children:i?"Hide":"Show  more attendance dates"}),e.jsx("div",{id:"logshidsh",style:{transform:i?"scaleY(1)":"scaleY(0)",height:i?"auto":"0",opacity:i?"1":"0"},children:d.map((s,n)=>e.jsx("div",{children:e.jsx("span",{className:"marker",children:s})},n))})]}),e.jsx("br",{}),e.jsx("button",{onClick:()=>{localStorage.removeItem("token"),w("/authentification")},className:"submit logout",children:"Log out"})]})};export{T as default};
