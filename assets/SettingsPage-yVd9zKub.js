import{i as n,r as t,j as e,k as i}from"./index-6vMRcOZg.js";import l from"./CloudStorage-EzlN27PI.js";import h from"./Appearence-C0LvZZqT.js";import p from"./TermsAndPolicy-Bruw3dDd.js";const u=()=>{const o=n(),a=t.useRef(null),s=t.useCallback(c=>{if(a.current){const r=document.getElementById(c);r&&r.scrollIntoView({behavior:"smooth",block:"end"})}},[]);return t.useEffect(()=>{switch(o.pathname.split("/").pop()){case"Account_settings":s("account-settings");break;case"Appearance":s("appearance");break;case"Storage":s("storage");break;case"Terms_and_Policy":s("terms-and-policy");break}},[o.pathname]),e.jsxs("div",{style:{padding:50,color:"white",height:"100vh",scrillBehavior:"smooth"},className:"Settings",ref:a,children:[e.jsx("h1",{style:{fontSize:45},children:"Still in development"}),e.jsx("section",{id:"account-settings",children:e.jsx(i,{})}),e.jsx("hr",{className:"hr"}),e.jsx("section",{id:"appearance",children:e.jsx(h,{})}),e.jsx("hr",{className:"hr"}),e.jsx("section",{id:"storage",children:e.jsx(l,{})}),e.jsx("hr",{className:"hr"}),e.jsx("section",{id:"terms-and-policy",children:e.jsx(p,{})})]})};export{u as default};
