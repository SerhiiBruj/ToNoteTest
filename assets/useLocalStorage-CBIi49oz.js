import{b as m,i as I,r as a}from"./index-zJD69A5m.js";const d=(n,r)=>{const c=m(),i=I(),o=decodeURIComponent(n.replace(/(%20)/g," ")),[l,g]=a.useState(!1),[S,s]=a.useState(()=>{try{const e=window.sessionStorage.getItem(o);if(e)return JSON.parse(e);g(!0);const t=window.localStorage.getItem(o);return t?JSON.parse(t):r}catch(e){return console.error("Помилка парсингу:",e),r}});return a.useEffect(()=>{try{const e=window.sessionStorage.getItem(o);if(e)s(JSON.parse(e));else{const t=window.localStorage.getItem(o);t?s(JSON.parse(t)):c("/404")}}catch(e){console.error("Помилка при отриманні даних:",e),s(r)}},[i.pathname]),[S,e=>{try{s(e),l?window.localStorage.setItem(o,JSON.stringify(e)):window.sessionStorage.setItem(o,JSON.stringify(e))}catch(t){console.error("Помилка при збереженні даних:",t)}}]};export{d as u};