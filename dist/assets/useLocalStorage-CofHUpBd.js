import{u as n,r as a}from"./index-CYXAzBX-.js";const c=e=>{const t=n(),r=a.useMemo(()=>{if(localStorage.getItem(e))return!0;if(sessionStorage.getItem(e))return!1;t("404")},[t]),[l,o]=a.useState(()=>{try{return JSON.parse(r?localStorage.getItem(e):sessionStorage.getItem(e))}catch(s){console.error(s),t("404")}});return a.useEffect(()=>(r?o(JSON.parse(localStorage.getItem(e))):r?t("/404"):o(JSON.parse(sessionStorage.getItem(e))),()=>{}),[t]),[l,s=>{o(s),i&&clearTimeout(i);var i=setTimeout(()=>{r?window.localStorage.setItem(e,JSON.stringify(s)):window.sessionStorage.setItem(e,JSON.stringify(s))},1e3)}]};export{c as u};
