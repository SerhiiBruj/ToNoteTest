import{h as n,u as g,r as i}from"./index-6vMRcOZg.js";const S=s=>{const{name:e}=n(),t=g(),r=i.useMemo(()=>{if(localStorage.getItem(s+e))return!0;if(sessionStorage.getItem(s+e))return!1;t("404")},[t]),[a,o]=i.useState(()=>{try{return JSON.parse(r?localStorage.getItem(s+e):sessionStorage.getItem(s+e))}catch(l){console.error(l),t("404")}});return i.useEffect(()=>{r?o(JSON.parse(localStorage.getItem(s+e))):r?t("/404"):o(JSON.parse(sessionStorage.getItem(s+e)))},[e]),[a,l=>{o(l),r?localStorage.setItem(s+e,JSON.stringify(a)):sessionStorage.setItem(s+e,JSON.stringify(a)),console.log(JSON.stringify(a))}]};export{S as u};