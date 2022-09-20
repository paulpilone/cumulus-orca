"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[6059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"orca-intro",title:"Introduction to ORCA",description:"Initial document describing what ORCA is and resources available."},i=void 0,c={unversionedId:"about/introduction/orca-intro",id:"about/introduction/orca-intro",title:"Introduction to ORCA",description:"Initial document describing what ORCA is and resources available.",source:"@site/docs/about/introduction/orca-intro.md",sourceDirName:"about/introduction",slug:"/about/introduction/orca-intro",permalink:"/cumulus-orca/docs/about/introduction/orca-intro",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/about/introduction/orca-intro.md",tags:[],version:"current",frontMatter:{id:"orca-intro",title:"Introduction to ORCA",description:"Initial document describing what ORCA is and resources available."},sidebar:"about_orca",next:{title:"Navigating the ORCA Documents",permalink:"/cumulus-orca/docs/about/introduction/intro-navigating"}},u={},l=[{value:"What is ORCA?",id:"what-is-orca",level:2},{value:"How do I implement or use ORCA?",id:"how-do-i-implement-or-use-orca",level:2}],s={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-orca"},"What is ORCA?"),(0,o.kt)("p",null,"The Operational Recovery Cloud Archive (ORCA) provides a baseline solution for\ncreating, and managing operational backups in the cloud. In addition, best\npractices and recovery code that manages common baseline recovery scenarios is\nalso maintained. Requirements and use cases for ORCA are derived from the\nORCA Working Group."),(0,o.kt)("h2",{id:"how-do-i-implement-or-use-orca"},"How do I implement or use ORCA?"),(0,o.kt)("p",null,"Information on implementing ORCA is located ",(0,o.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/developer/deployment-guide/deployment"},"here"),"."),(0,o.kt)("p",null,"Information on ORCA use for Operators and Data Managers is located ",(0,o.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/operator/operator-intro"},"here"),"."))}d.isMDXComponent=!0}}]);