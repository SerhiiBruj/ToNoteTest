import{i as n,r as t,j as e}from"./index-CzUMW2uM.js";import i from"./CloudStorage-BwnvjoBY.js";import l from"./Appearence-lRfbYhUb.js";import p from"./AccountSettings-D0HlBJIg.js";import h from"./TermsAndPolicy-CmXk73ab.js";const f=()=>{const o=n(),c=t.useRef(null),s=t.useCallback(a=>{if(c.current){const r=document.getElementById(a);r&&r.scrollIntoView({behavior:"smooth",block:"end"})}},[]);return t.useEffect(()=>{switch(o.pathname.split("/").pop()){case"Account_settings":s("account-settings");break;case"Appearance":s("appearance");break;case"Storage":s("storage");break;case"Terms_and_Policy":s("terms-and-policy");break}},[o.pathname]),e.jsxs("div",{style:{padding:50,color:"white",height:"100vh",scrillBehavior:"smooth"},className:"Settings",ref:c,children:[e.jsx("h1",{style:{fontSize:45},children:"Still in development"}),e.jsx("section",{id:"account-settings",children:e.jsx(p,{})}),e.jsx("hr",{className:"hr"}),e.jsx("section",{id:"appearance",children:e.jsx(l,{})}),e.jsx("hr",{className:"hr"}),e.jsx("section",{id:"storage",children:e.jsx(i,{})}),e.jsx("hr",{className:"hr"}),e.jsx("section",{id:"terms-and-policy",children:e.jsx(h,{})})]})};export{f as default};
