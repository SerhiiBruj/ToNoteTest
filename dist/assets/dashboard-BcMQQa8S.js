import{r as h,j as e,C as D,h as A}from"./index-CYXAzBX-.js";import{u as I}from"./useLocalStorage-CofHUpBd.js";import{B as y}from"./bellsIcon-g2IuiRfR.js";import{A as N}from"./arrow-CvXdoplj.js";const T=({clockers:n,setClockers:t})=>{const[a,x]=h.useState(!1),[u,d]=h.useState({fileName:"",type:"counter",goal:""}),s=l=>{const{name:o,value:c}=l.target;d(m=>({...m,[o]:c}))},i=l=>{if(l.preventDefault(),u.fileName.trim()==="")return;const o={fileName:u.fileName,type:u.type||"counter",goal:u.goal,dateOfStart:new Date().toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit",year:"numeric"})},c=n.table.map(m=>{switch(u.type){case"clock on":case"timer":return[...m,[]];case"check in":return[...m,!1];case"counter":default:return[...m,0]}});t({templates:[...n.templates,o],table:c}),r()},r=()=>{d({fileName:"",type:"counter",goal:""}),x(!1)};return e.jsxs("div",{onClick:()=>{a||x(!0)},className:"fileIconConteiner addFile",style:{height:a&&500,width:a&&400},children:[e.jsxs("div",{className:"upperside",style:{},children:[e.jsx("span",{className:"fileIconName",children:"Add"}),e.jsx("div",{onClick:()=>{x(l=>!l),d({fileName:"",fileType:"note"})},style:{display:"flex",height:"100%",transition:"all 0.6s ease",alignItems:"center",paddingRight:20,transform:a?"rotate(45deg)":"rotate(0deg)  translateY(15px) scale(1.1)"},children:e.jsx(D,{color:"#D9D9D9",size:a?.8:1.5})})]}),a&&e.jsxs("form",{style:{width:"100%",marginTop:10},onSubmit:i,children:[e.jsx("input",{className:"fileName",name:"fileName",placeholder:"Name",value:u.fileName,onChange:s,required:!0}),e.jsxs("select",{className:"fileType",name:"type",value:u.type,onChange:s,children:[e.jsx("option",{value:"counter",children:"counter"}),e.jsx("option",{value:"clock on",children:"clock on"}),e.jsx("option",{value:"check in",children:"check in"}),e.jsx("option",{value:"timer",children:"timer"})]}),e.jsx("input",{className:"fileName",name:"goal",placeholder:"Goal",value:u.goal,onChange:s,required:!0}),e.jsx("button",{type:"submit",className:"submit",children:"Create"})]})]})},C=n=>{if(!n||typeof n!="string")return 0;const[t,a]=n.split(":").map(x=>Number(x));return console.log(t,a),(t*60+a)*60*1e3},S=n=>{let t=0;for(let a=0;a<n.length;a++){const{s:x,e:u}=n[a];if(!u)continue;const d=C(x),s=C(u);t+=s-d}return t},M=({i:n,clockers:t,setClockers:a})=>{const x=h.useMemo(()=>{if(Array.isArray(t.table[t.table.length-1][n])){let s=0,i=0;for(let r=t.table.length-1;r>=0&&s<30;r--)if(Array.isArray(t.table[r][n])){for(let l=0;l<t.table[r][n].length;l++){const o=S([t.table[r][n][l]]);i+=o}s++}if(s>0){const r=i/s,l=Math.floor(r/(60*60*1e3)),o=Math.floor(r%(60*60*1e3)/(60*1e3));return`${l}:${o.toString().padStart(2,"0")} a day`}else return"0:00 a day"}return"0:00 a day"},[t.table[t.table.length-1][n]]),u=h.useMemo(()=>{if(Array.isArray(t.table[t.table.length-1][n]))try{let s=0;for(let l=t.table.length-1;l>=0&&l>=t.table.length-30;l--){const o=S(t.table[l][n]);o>s&&(s=o)}const i=Math.floor(s/(60*60*1e3)),r=Math.floor(s%(60*60*1e3)/(60*1e3));return console.log(i,r),`${i}:${r}`}catch(s){console.log(s.message)}console.log("useMemo")},[t.table,n]),d=h.useCallback(s=>{var r;s.stopPropagation();let i=JSON.parse(JSON.stringify(t));if(i.table[i.table.length-1][n].length>0&&!((r=i.table[i.table.length-1][n][i.table[i.table.length-1][n].length-1])!=null&&r.e))i.table[i.table.length-1][n][i.table[i.table.length-1][n].length-1]={...i.table[i.table.length-1][n][i.table[i.table.length-1][n].length-1],e:`${String(new Date().getHours()).padStart(2,"0")}:${String(new Date().getMinutes()).padStart(2,"0")}`};else{let l={s:`${String(new Date().getHours()).padStart(2,"0")}:${String(new Date().getMinutes()).padStart(2,"0")}`,e:null};i.table[i.table.length-1][n].push(l)}a(i),console.log("handleClick")},[t,n]);return e.jsxs("div",{className:"clockonConteiner",children:[e.jsxs("div",{className:"clockonConteinerInner",children:[e.jsxs("div",{className:"fsb",children:[e.jsxs("div",{children:[e.jsx("span",{className:"name",children:t.templates[n-1].fileName}),e.jsx("br",{}),e.jsxs("span",{children:["Started:",t.templates[n-1].dateOfStart]})]}),e.jsx(y,{size:1.5})]}),e.jsx($,{table:t.table,i:n})]}),e.jsx("div",{className:"clockonConteinerInner",children:e.jsxs("div",{className:"fcsb",style:{height:"150%"},children:[e.jsx("div",{className:"fe",children:e.jsx("div",{className:"clockOn",onClick:s=>d(s),style:{textAlign:"center"},size:200,color:"#313131",children:t.table[t.table.length-1][n][0]&&!t.table[t.table.length-1][n][t.table[t.table.length-1][n].length-1].e?`started at ${t.table[t.table.length-1][n][t.table[t.table.length-1][n].length-1].s}`:"ClockOn"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifySelf:"flex-end"},children:[!!t.templates[n-1].goal&&e.jsxs("span",{className:"name",children:["Goal:",t.templates[n-1].goal]}),!!x&&e.jsxs("span",{className:"name",children:["Results: ",x]}),u?e.jsxs("span",{className:"name",children:["Best result: ",u]}):null]})]})})]})},$=({i:n,table:t})=>{const[a,x]=h.useState([[]]),[u,d]=h.useState(""),s=r=>{if(!r)return 0;const l=r.split(":"),o=parseInt(l[0],10)||0,c=parseInt(l[1],10)||0,m=parseInt(l[2],10)||0;return o*36e5+c*6e4+m*1e3},i=r=>{let l=0;for(let m=0;m<r.length;m++){let{s:j,e:f}=r[m];if(!f)continue;const g=s(j),p=s(f);l+=p-g}const o=Math.floor(l/(60*60*1e3)),c=Math.floor(l%(60*60*1e3)/(60*1e3));return`${o}:${c}`};return h.useEffect(()=>{if(console.log(t[t.length-1][n]),Array.isArray(t[t.length-1][n])){let r=t.map(c=>({date:c[0],value:c[n]}));console.log(t[t.length-1][n]),r.length>21&&r.splice(0,r.length-14);let l=[],o=0;for(let c=0;c<r.length;c++)l[o]||(l[o]=[]),l[o].push(r[c]),(c+1)%7===0&&(o+=1);x(l)}},[n,t]),h.useEffect(()=>{a.length>0&&a[0].length>0&&a[a.length-1].length>0&&d(a[a.length-1][a[a.length-1].length-1].date.split(".")[1]===a[0][0].date.split(".")[1]?a[0][0].date.split(".")[1]:a[0][0].date.split(".")[1]+"-"+a[a.length-1][a[a.length-1].length-1].date.split(".")[1])},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"schedule",children:[e.jsxs("div",{className:"alignedDiv days",style:{paddingBottom:0},children:[e.jsx("div",{children:"s"}),e.jsx("div",{children:"m"}),e.jsx("div",{children:"t"}),e.jsx("div",{children:"w"}),e.jsx("div",{children:"t"}),e.jsx("div",{children:"f"}),e.jsx("div",{children:"s"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0,justifyContent:"space-between",height:"100%",paddingBottom:10},children:[a.map((r,l)=>e.jsx("div",{className:"alignedDiv",style:{gap:0,paddingBottom:0},children:r.map((o,c)=>e.jsxs("div",{style:{width:"14.28% ",paddingBottom:5,display:"flex",flexDirection:"column"},children:[e.jsx("span",{style:{position:"relative",transform:"translateY(5px) translateX(0px)",fontSize:12,height:10,width:10,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",background:"#03a9f4",padding:5,color:"black",alignSelf:"flex-end",borderRadius:"50%"},children:o.date.split(".")[0]}),e.jsx("div",{className:"indicator",style:{backgroundColor:o.value[0]?"#1e4f39":"brown",color:"lightgray",padding:5,borderRadius:5,paddingBottom:10,fontSize:15,fontFamily:"Times New Roman"},children:typeof o.value[0]=="object"&&o.value[0].e&&i(o.value)})]},c))},l)),e.jsx("span",{style:{alignSelf:"flex-end",paddingRight:"55%",color:"lightgray"},children:u})]})]})})},R=({setClockers:n,clockers:t,i:a})=>{const x=h.useMemo(()=>{let d=0,s=0;for(let i=t.table.length-1;i>=0&&s<30;i--)typeof t.table[i][a]=="boolean"&&t.table[i][a]===!0&&(d+=1),s+=1;if(s>0){const i=d/s,r=i%1===0?1:i.toFixed(1);return`every ${r} day${r>1?"s":""}`}else return"No data"},[t.table,a]),u=h.useCallback(d=>{d.stopPropagation();const s=[...t.table];s[s.length-1][a]=!0,n({...t,table:s}),console.log("clockers"),console.log("handleClick")},[t.table,a]);return e.jsxs("div",{className:"clockonConteiner",children:[e.jsxs("div",{className:"clockonConteinerInner",children:[e.jsxs("div",{className:"fsb",children:[e.jsxs("div",{children:[e.jsx("span",{className:"name",children:t.templates[a-1].fileName}),e.jsx("br",{}),e.jsxs("span",{children:["Started:",t.templates[a-1].dateOfStart]})]}),e.jsx(y,{size:1.5})]}),e.jsx(O,{i:a,table:t.table})]}),e.jsx("div",{className:"clockonConteinerInner",children:e.jsxs("div",{className:"fcsb",style:{height:"150%"},children:[e.jsx("div",{className:"fe",children:e.jsx("div",{className:"clockOn",onClick:d=>u(d),style:{textAlign:"center"},size:200,color:"#313131",children:t.table[t.table.length-1][a]?"checked in":"check in"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifySelf:"flex-end"},children:[!!t.templates[a-1].goal&&e.jsxs("span",{className:"name",children:["Goal:",t.templates[a-1].goal]}),!!x&&e.jsxs("span",{className:"name",children:["Results: ",x]})]})]})})]})},O=({i:n,table:t})=>{const[a,x]=h.useState([]),[u,d]=h.useState("");return h.useEffect(()=>{let s=t.map(r=>({date:r[0],value:r[n]}));s.length>21&&(s=s.slice(-21));let i=[];for(let r=0;r<s.length;r+=7)i.push(s.slice(r,r+7));if(x(i),i.length>0){const r=i[0][0].date.split(".")[1],l=i[i.length-1][i[i.length-1].length-1].date.split(".")[1];d(r===l?r:`${r}-${l}`)}},[t,n]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"schedule",children:[e.jsxs("div",{className:"alignedDiv days",children:[e.jsx("div",{children:"s"}),e.jsx("div",{children:"m"}),e.jsx("div",{children:"t"}),e.jsx("div",{children:"w"}),e.jsx("div",{children:"t"}),e.jsx("div",{children:"f"}),e.jsx("div",{children:"s"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0,justifyContent:"space-between",height:"100%",paddingBottom:10},children:[a.map((s,i)=>e.jsx("div",{className:"alignedDiv",style:{gap:"7%"},children:s.map((r,l)=>e.jsx("div",{className:"indicator",style:{backgroundColor:r.value?"#1e4f39":"brown",transition:"background-color 0.5s ease",color:"white",borderRadius:"20%",fontSize:"18px",width:"8%",height:"fit-content",display:"flex",alignItems:"center",justifyContent:"center"},children:r.date.split(".")[0]},l))},i)),e.jsx("span",{style:{alignSelf:"flex-end",paddingRight:"55%",color:"lightgray"},children:u})]})]})})},E=({i:n,clockers:t,setClockers:a})=>{const x=h.useMemo(()=>t.table[t.table.length-1][n]||0,[t.table[t.table.length-1][n]]),[u,d]=h.useState(null),s=h.useMemo(()=>{let l=0;for(let o=t.table.length-1;o>=0;o--){const c=t.table[o][n];typeof c=="number"&&c>l&&(l=c)}return console.log("useMemo"),l===-1/0?null:l},[t.table,n]);h.useEffect(()=>{try{let l=0,o=0;for(let c=t.table.length-1;c>0&&o<30;c--)typeof t.table[c][n]=="number"&&(l+=t.table[c][n],o++);d(o>0?l/o%2===0?l/o:(l/o).toFixed(1):0)}catch(l){console.log(l.message)}console.log("useEffect")},[t.table[t.table.length-1][n]]);const i=()=>{const l=[...t.table];l[l.length-1][n]=l[l.length-1][n]+1,a({...t,table:l})},r=()=>{if(t.table[t.table.length-1][n]>0){const l=[...t.table];l[l.length-1][n]=l[l.length-1][n]-1,a({...t,table:l}),console.log("handleClick")}};return e.jsxs("div",{className:"clockonConteiner",children:[e.jsxs("div",{className:"clockonConteinerInner",children:[e.jsxs("div",{className:"fsb",children:[e.jsxs("div",{children:[e.jsx("span",{className:"name",children:t.templates[n-1].fileName}),e.jsx("br",{}),e.jsxs("span",{children:["Started: ",t.templates[n-1].dateOfStart]})]}),e.jsx(y,{size:1.5})]}),e.jsx(z,{i:n,table:t.table,bestResults:s})]}),e.jsx("div",{className:"clockonConteinerInner",children:e.jsxs("div",{className:"fcsb",style:{height:"150%"},children:[e.jsx("div",{className:"fe",children:e.jsxs("div",{className:"clockOn",style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"space-between",height:160,width:160,padding:20},children:[e.jsxs("span",{onClick:i,style:{cursor:"pointer",transform:"rotate(90deg)",display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx(N,{size:"2.5vw"})," ",e.jsx("br",{})]}),x,e.jsx("br",{}),e.jsx("span",{onClick:r,style:{cursor:"pointer",transform:"rotate(-90deg)",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(N,{size:"2.5vw"})})]})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifySelf:"flex-end"},children:[!!t.templates[n-1].goal&&e.jsxs("span",{className:"name",children:["Goal:",t.templates[n-1].goal]}),!!u&&e.jsxs("span",{className:"name",children:["Results: ",u]}),s?e.jsxs("span",{className:"name",children:["Best result: ",s]}):null]})]})})]})},z=({table:n,i:t,bestResults:a})=>{const[x,u]=h.useState([]),d=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"];return h.useEffect(()=>{try{const s=n.map((i,r)=>n.length-r<=7?{date:i[0],value:i[t]}:null).filter(i=>i!==null);u(s)}catch(s){console.error(s)}},[n,t]),e.jsx("div",{className:"schedule",children:e.jsx("div",{className:"diagram",style:{display:"flex",height:"100%",justifyContent:"flex-end"},children:x.map((s,i)=>e.jsxs("div",{style:{height:"100%",flex:1,backgroundColor:s?"gray":"lightgray",display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[e.jsx("div",{style:{background:s.value<d.length?d[s.value]:d[s.value%d.length],transition:"all 0.1s",display:"flex",justifyContent:"center",alignItems:"center",color:"lightgray",width:"100%",height:`${Math.min(s.value/a*80,80)}%`,minHeight:"6%"},children:s.value}),e.jsx("div",{style:{alignSelf:"center",height:"20%",background:"#00000052",width:"100%",textAlign:"center",color:"lightgray",display:"flex",justifyContent:"center",alignItems:"center"},children:s.date.split(".")[0]})]},i))})})},F=({setClockers:n,clockers:t,i:a,colors:x})=>{const[u,d]=h.useState(null),[s,i]=h.useState(0),[r,l]=h.useState(!1),[o,c]=h.useState(null),m=h.useMemo(()=>{let f=0;for(let g=t.table.length-1;g>=0&&f<30;g--)Array.isArray(t.table[g][a])&&t.table[g][a].map(p=>{typeof p=="number"&&p>f&&(f=p)});return console.log("useMemo"),f},[t.table]);h.useEffect(()=>{try{let f=0,g=0;for(let p=t.table.length-1;p>0&&g<10;p=p-1)Array.isArray(t.table[p][a])&&t.table[p][a].map(b=>{typeof b=="number"&&(f+=b,g++)});d(g>0?f/g%2===0?f/g:(f/g).toFixed(1):0)}catch(f){console.log(f.message)}console.log("useEffect")},[t.table[t.table.length-1][a]]);const j=h.useCallback(f=>{if(f.stopPropagation(),r){if(clearInterval(o),l(!1),c(null),s>0){let g=[...t.table];Array.isArray(g[g.length-1][a])||(g[g.length-1][a]=[]),g[g.length-1][a].push(s),n({...t,table:g})}i(0)}else{l(!0);const g=setInterval(()=>{i(p=>p+1)},1e3);c(g)}},[o,s]);return e.jsxs("div",{className:"clockonConteiner",children:[e.jsxs("div",{className:"clockonConteinerInner",children:[e.jsxs("div",{className:"fsb",children:[e.jsxs("div",{children:[e.jsx("span",{className:"name",children:t.templates[a-1].fileName}),e.jsx("br",{}),e.jsxs("span",{children:["Started:",t.templates[a-1].dateOfStart]})]}),e.jsx(y,{size:1.5})]}),e.jsx(B,{bestResults:m,i:a,table:t.table,colors:x})]}),e.jsx("div",{className:"clockonConteinerInner",children:e.jsxs("div",{className:"fcsb",style:{height:"150%"},children:[e.jsx("div",{className:"fe",children:e.jsx("div",{className:"clockOn",onClick:f=>j(f),style:{textAlign:"center"},size:200,color:"#313131",children:r?` ${s} sec`:"Start"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifySelf:"flex-end"},children:[!!t.templates[a-1].goal&&e.jsxs("span",{className:"name",children:["Goal:",t.templates[a-1].goal]}),!!u&&e.jsxs("span",{className:"name",children:["Results: ",u]}),m?e.jsxs("span",{className:"name",children:["Best result: ",m]}):null]})]})})]})},B=({bestResults:n,i:t,table:a,colors:x})=>{const[u,d]=h.useState([]);return h.useEffect(()=>{try{const s=a.map((i,r)=>a.length-r<=7?{date:i[0],value:i[t]}:null).filter(i=>i!==null);d(s.reverse()),console.log("TimerDiagram")}catch(s){console.error(s)}},[a,t]),e.jsx("div",{className:"schedule",children:e.jsx("div",{className:"diagram",style:{display:"flex",height:"100%",flexDirection:"row-reverse",justifyContent:"flex-end"},children:u.map((s,i)=>{let r=0;if(r<4&&s.value.length>0)return e.jsxs("div",{style:{height:"100%",flex:1,backgroundColor:s?"gray":"lightgray",display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[e.jsx("div",{className:"div",style:{display:"flex",justifyContent:"center",alignItems:"flex-end",height:"80% "},children:Array.isArray(s.value)&&s.value.slice(-4).map((l,o)=>(r<5&&l&&(r+=1),e.jsx("div",{style:{background:x[i],display:"flex",justifyContent:"center",alignItems:"center",color:"lightgray",width:"100%",height:`${Math.min(l/n*100,100)}%`,overflow:"hidden"},children:l},o)))}),e.jsx("div",{style:{alignSelf:"center",height:"20%",background:"#00000052",width:"100%",textAlign:"center",color:"lightgray",display:"flex",justifyContent:"center",alignItems:"center"},children:s.date.split(".")[0]})]},i)})})})},P=()=>{const{name:n}=A(),t=h.useRef(),[a,x]=h.useState(!1),u="dashboard/"+n,[d,s]=I(u),i=h.useMemo(()=>(console.log(a),[["",...d.templates],...d.table]),[d.templates,d.table]);function r(l){const o=[],[c,m,j]=l.split(".").map(Number);let f=new Date(j,m-1,c);const g=new Date;for(g.setHours(0,0,0,0),f.setHours(0,0,0,0);f<g;){f.setDate(f.getDate()+1);const p=String(f.getDate()).padStart(2,"0"),b=String(f.getMonth()+1).padStart(2,"0"),w=f.getFullYear();o.push(`${p}.${b}.${w}`)}return o}return h.useEffect(()=>{var o;const l=(o=d.table[d.table.length-1])==null?void 0:o[0];if(l){const c=r(l);if(c.length>0){const m=[...d.table];c.forEach(j=>{let f=[];d.templates.forEach(g=>{switch(g.type){case"clock on":f.push([]);break;case"counter":f.push(0);break;case"timer":f.push([]);break;case"check in":f.push(!1);break;default:f.push(null)}}),m.push([j,...f])}),s({...d,table:m})}}},[d.table,d.templates,s]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"fixed",width:"100%",display:"flex",top:"0px",justifyContent:"flex-end",alignItems:"center"},children:e.jsx("button",{onClick:()=>x(!a),className:"submit",style:{width:"fit-content",margin:10},children:"showTable"})}),a?e.jsx(e.Fragment,{children:e.jsx("div",{className:"conteiner fileConteiner",style:{display:"flex"},onClick:l=>l.stopPropagation(),children:e.jsx("div",{className:"table",ref:t,style:{display:"flex",flexDirection:"column"},children:i.map((l,o)=>e.jsx("div",{className:"tableRow",style:{display:"flex"},children:l.map((c,m)=>o===0||m===0?e.jsxs(e.Fragment,{children:[!m&&o!==0?e.jsx("div",{className:"line",style:{transform:` scaleX(${l.length*2.3}) rotate(-90deg)`}},m):!o&&m!==0?e.jsx("div",{className:"line",style:{transform:` scaleY(${i.length}) `,height:80}},m+111):null,e.jsx("div",{className:"tableCell",style:{marginLeft:`${m*1/25}px`},children:e.jsx("p",{style:{textAlign:" center",overflow:"scroll"},children:o===0?c.fileName:c})},m+201)]}):e.jsx("div",{className:"tableCell",style:{marginLeft:5},children:Array.isArray(c)?typeof c[0]=="object"?c.map(j=>`${j.s}-${j.e}`).join(", "):c.join(", "):typeof c=="boolean"?String(c):c},m+301))},o*1223))})})}):e.jsxs("div",{className:"dashboard fileContainer",children:[d.templates.map((l,o)=>{switch(l.type){case"timer":return e.jsx(F,{colors:v,clockers:d,setClockers:s,i:o+1},o);case"counter":return e.jsx(E,{colors:v,clockers:d,setClockers:s,i:o+1},o);case"clock on":return e.jsx(M,{colors:v,clockers:d,setClockers:s,i:o+1},o);case"check in":return e.jsx(R,{clockers:d,setClockers:s,dateOfStart:l.dateOfStart,name:l.name,results:l.results,goal:l.goal,table:d.table,typeName:u,i:o+1},o);default:return null}}),e.jsx("div",{className:"heightCont",children:e.jsx(T,{clockers:d,setClockers:s})})]})]})},q=h.memo(P);let v=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"];export{q as default};
