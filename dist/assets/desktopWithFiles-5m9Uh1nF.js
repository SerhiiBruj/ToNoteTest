import{g as F,u as h,j as t,r,a as j,b as E,s as P,d as R,c as D,e as A,f as N,C as O,h as _}from"./index-DvyFsoOf.js";import{B as W}from"./bellsIcon-JUdlpuQg.js";var T={exports:{}},w="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",B=w,L=B;function I(){}function C(){}C.resetWarningCache=I;var z=function(){function e(c,d,s,o,g,u){if(u!==L){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function n(){return e}var l={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:C,resetWarningCache:I};return l.PropTypes=l,l};T.exports=z();var q=T.exports;const b=F(q),Y=({isSelected:e})=>{const{isSelecting:n}=h(l=>l.select);return t.jsx("div",{className:"selcirc",style:{transform:n?"none":"scale(0)",opacity:n?1:0},children:t.jsx("div",{className:"selectCircle",style:{background:e?"rgb(46 46 46 )":"none"}})})},k=e=>{const n=h(a=>a.startAnimation.value),l=h(a=>a.isEditable.value),{isSelecting:c,selected:d}=h(a=>a.select),s=j(),o=r.useRef(),g=E(),[u,i]=r.useState(e.name);r.useEffect(()=>{i(e.name)},[e.name]);const f=r.useCallback(a=>{a.stopPropagation();const m=`${e.type}/${u}`;d.includes(m)?s(R(m)):s(P(m))},[d,s,u,e.type]);r.useEffect(()=>{o.current&&n&&(o.current.style.transition="all ease 0.5s",o.current.style.opacity="0%",o.current.style.transform="scale(0)")},[n]);const y=a=>{i(a.target.value)},p=async(a,m)=>{if(typeof m!="string"||!m.trim()||m===a){i(a.split("/")[1]),console.log("Новий ключ не може бути порожнім або таким самим.");return}if(Object.keys(sessionStorage).includes(m)){console.log(`Ключ "${m}" вже існує.`);return}let x=sessionStorage.getItem(a);if(x!==null){sessionStorage.setItem(m,x),sessionStorage.removeItem(a);const S=localStorage.getItem("token");if(!S){console.log("Токен не знайдено, будь ласка, увійдіть у систему.");return}if(!localStorage.getItem("beLocal"))try{const v=await A.post("http://localhost:3000/rename-uploaded-file",{rnfile:a,newName:m},{headers:{authorization:`Bearer ${S}`}});v.status===200?(console.log("Файл успішно перейменовано"),s(N(Object.keys(sessionStorage)))):console.log("Сталася помилка при перейменуванні файлу:",v.data)}catch(v){console.error("Помилка при зверненні до сервера:",v)}}else localStorage.getItem(a)?(x=localStorage.getItem(a),sessionStorage.setItem(m,x),sessionStorage.removeItem(a)):console.log(`Ключ "${a}" не знайдено.`);i(e.name)},$=r.useCallback(()=>{o.current&&(o.current.style.transition="all ease 0.4s",o.current.style.transform="scale(1.2)",setTimeout(()=>{o.current.style.backgroundColor="#1e1e1e",o.current.style.transform="scale(0)",setTimeout(()=>{s(D()),setTimeout(()=>{g(`${e.type}/${e.name}`)},300)},100)},400))},[g,e.name,e.type,s]);return t.jsx("div",{ref:o,className:"fileIconConteiner",onClick:a=>{a.stopPropagation(),!c&&!l?$():c&&f(a)},onBlur:()=>l&&p(`${e.type}/${e.name}`,`${e.type}/${u}`),children:!n&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{height:"70%",overflow:"hidden"},children:[t.jsx("input",{style:{pointerEvents:l?"all":"none",transition:"0.2s all ease",animation:e.name.length>16&&!l?"scrollText 5s linear infinite":"none"},onChange:y,className:`texarea fileIconName ${e.name.length>16&&"scroll-container"}`,disabled:!l,value:l?u:e.name}),t.jsx("span",{className:"fileIconType",children:e.type})]}),t.jsxs("div",{style:{display:"flex",height:"30%",alignItems:"flex-end",justifyContent:"space-between"},children:[t.jsx("div",{children:t.jsx(Y,{isSelected:d.some(a=>a===`${e.type}/${u}`)})}),t.jsx("div",{style:{display:e.type==="todo"||e.type==="dashboard"||e.type===""?"flex":"none"},children:t.jsx(W,{size:1.3})})]})]})})};k.propTypes={name:b.string.isRequired,type:b.string.isRequired};const U=r.memo(k),V=({size:e,checked:n})=>t.jsx("div",{className:"selcirc",style:{height:`${e}px !important `,width:`${e}px !important `},children:t.jsx("div",{className:"selectCircle",style:{background:n?"rgb(46 46 46 )":"none"}})}),H=e=>e.replace(/[/"'\\%]/g,""),J=()=>{const e=r.useRef(null),n=j(),[l,c]=r.useState(!1),d=h(i=>i.startAnimation.value),[s,o]=r.useState({fileName:"",fileType:"note",local:!1});r.useEffect(()=>{e.current&&d&&(e.current.style.transition="all ease 0.5s",e.current.style.opacity="0%",e.current.style.transform="scale(0)")},[d]);const g=r.useCallback(i=>{const{name:f,value:y}=i.target;o(p=>({...p,[f]:H(y)}))},[]),u=r.useCallback(i=>{if(i.preventDefault(),s.fileName.trim()===""){alert("Please enter a file name");return}let f=new Date;const y=(()=>{switch(s.fileType){case"todo":return[];case"note":return"";case"table":return[[s.fileName,""],["",""]];case"checklist":return[];case"dashboard":return{templates:[],table:[[`${String(f.getDate()).padStart(2,"0")}.${String(f.getMonth()+1).padStart(2,"0")}.${f.getFullYear()}`]]};default:return null}})(),p=JSON.stringify(y);localStorage.getItem("beLocal")?localStorage.setItem(`${s.fileType}/${s.fileName}`,p):s.local===!1?sessionStorage.setItem(`${s.fileType}/${s.fileName}`,p):localStorage.setItem(`${s.fileType}/${s.fileName}`,p),c(!1),o({fileName:"",fileType:"note"}),n(N())},[s.fileName,s.fileType]);return t.jsxs("div",{onClick:()=>c(!0),ref:e,className:"fileIconConteiner addFile",style:{height:l&&300,width:l&&340},children:[t.jsxs("div",{className:"upperside",children:[t.jsx("span",{className:"fileIconName",children:"Add"}),t.jsx("div",{onBlur:()=>c(!1),onClick:i=>{i.stopPropagation(),c(f=>!f),o({fileName:"",fileType:"note"})},style:{display:"flex",height:"100%",transition:"all 0.6s ease",alignItems:"center",paddingRight:20,transform:l?"rotate(45deg)":"rotate(0deg) translateY(15px)  translateX(-20px)"},children:t.jsx(O,{color:"#D9D9D9",size:l?.8:1.5})})]}),l&&t.jsxs("form",{onSubmit:u,style:{width:"100%",marginTop:10},children:[t.jsx("input",{className:"fileName",name:"fileName",placeholder:"Name",value:s.fileName,onChange:g}),t.jsxs("select",{className:"fileType",name:"fileType",value:s.fileType,onChange:g,children:[t.jsx("option",{value:"note",children:"note"}),t.jsx("option",{value:"todo",children:"todo"}),t.jsx("option",{value:"table",children:"table"}),t.jsx("option",{value:"dashboard",children:"dashboard"}),t.jsx("option",{value:"checklist",children:"checklist"}),t.jsx("option",{value:"diary",children:"diary"})]}),t.jsxs("label",{htmlFor:"fd",className:"fileIconName",style:{fontSize:25,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["Save Locally",t.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:"100%",width:50},onClick:()=>{o(i=>({...i,local:!s.local}))},children:t.jsx(V,{size:10,checked:s.local})})]}),t.jsx("button",{type:"submit",className:"submit",children:"Create"})]})]})},M=r.memo(J),X=()=>{const e=h(c=>c.pages.value),n=h(c=>c.startAnimation.value),l=j();return r.useEffect(()=>{console.log("useef"),n&&setTimeout(()=>{l(_())},500)},[n]),t.jsx(t.Fragment,{children:t.jsx("div",{style:{width:"100%",display:"flex"},children:t.jsxs("div",{className:"desktopWithFiles",style:{height:"fit-content",background:"none"},children:[e.map((c,d)=>t.jsx(U,{name:c.split("/")[1],type:c.split("/")[0]},d)),t.jsx(M,{})]})})})},Z=r.memo(X);export{Z as default};
