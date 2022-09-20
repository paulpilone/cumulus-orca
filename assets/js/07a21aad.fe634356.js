"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[9848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=u(n),p=o,f=s["".concat(c,".").concat(p)]||s[p]||l[p]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=s;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={id:"contrib-documentation-add",title:"Adding New Content",desc:"Provides instruction on adding a page to ORCA documentation."},i=void 0,d={unversionedId:"developer/development-guide/documentation/contrib-documentation-add",id:"developer/development-guide/documentation/contrib-documentation-add",title:"Adding New Content",description:"Add a New Documentation Page",source:"@site/docs/developer/development-guide/documentation/documentation-add-content.md",sourceDirName:"developer/development-guide/documentation",slug:"/developer/development-guide/documentation/contrib-documentation-add",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-add",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/documentation/documentation-add-content.md",tags:[],version:"current",frontMatter:{id:"contrib-documentation-add",title:"Adding New Content",desc:"Provides instruction on adding a page to ORCA documentation."},sidebar:"dev_guide",previous:{title:"Development Environment",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-env"},next:{title:"Documentation Templates",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-templates"}},c={},u=[{value:"Add a New Documentation Page",id:"add-a-new-documentation-page",level:2},{value:"MD or MDX Format",id:"md-or-mdx-format",level:3},{value:"Embedding Static Content or Template Information",id:"embedding-static-content-or-template-information",level:3},{value:"Add a New Template Page",id:"add-a-new-template-page",level:2},{value:"Add a New Image or Diagram",id:"add-a-new-image-or-diagram",level:2}],m={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"add-a-new-documentation-page"},"Add a New Documentation Page"),(0,o.kt)("p",null,"Creating a new page should be as simple as writing some documentation in markdown,\nplacing it under the correct directory in the docs/ folder and adding some\nconfiguration values wrapped by ",(0,o.kt)("inlineCode",{parentName:"p"},"---")," at the top of the file. There are many\nfiles that already have this header which can be used as reference. For information\non specific values allowed in the header section, see the ",(0,o.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/markdown-features#markdown-headers"},"Docusaurus documentation"),"."),(0,o.kt)("p",null,"Generally, most markdown files for ORCA use the following items in the header\nsection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: doc-unique-id    # Unique id for this document.\ntitle: Title Of Doc  # This shows up as the title and sidebar reference.\ndesc: Breif description of the document\n---\n")),(0,o.kt)("p",null,"Once the markdown configuration file is created, the ",(0,o.kt)("inlineCode",{parentName:"p"},"website/sidebars.json"),"\nfile should be updated in order to be able to navigate to the new page. Information\non the ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar.json")," file can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/sidebar#sidebar-object"},"Docusaurus documentation"),"."),(0,o.kt)("p",null,"When writing markdown for this project, please reference the\n",(0,o.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/developer/development-guide/documentation/documentation-style-guide"},"documentation style guide")),(0,o.kt)("h3",{id:"md-or-mdx-format"},"MD or MDX Format"),(0,o.kt)("p",null,"Generally, all documentation should be written in Markdown however, when adding\ntemplates, images, or dynamic content a MDX format should be used. More information\non MDX content can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/markdown-features/#embedding-react-components-with-mdx"},"Docusaurus documentation"),"\nand the ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX website"),"."),(0,o.kt)("h3",{id:"embedding-static-content-or-template-information"},"Embedding Static Content or Template Information"),(0,o.kt)("p",null,"To embed static content like images or a template into your MDX documentation,\nrefer to the ",(0,o.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/static-assets/"},"Docusaurus documentation"),"\nand the ",(0,o.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-templates"},"documentation template guide"),"."),(0,o.kt)("h2",{id:"add-a-new-template-page"},"Add a New Template Page"),(0,o.kt)("p",null,"To create a template page, follow the same standards a creating an MDX or\nMarkdown documentation page. All templates should reside in the ",(0,o.kt)("inlineCode",{parentName:"p"},"website/docs/templates"),"\nfolder. Once the template is created and tested, update the ",(0,o.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-templates"},"template guide"),"\nlocated in ",(0,o.kt)("inlineCode",{parentName:"p"},"website/docs/developer/contribute/documentation/documentaion-templates.md"),"\nwith the pertinent information."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Do not include the standard Docusaurus header in a template. This will cause\nbuilds to break badly."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: doc-unique-id    # Unique id for this document.\ntitle: Title Of Doc  # This shows up as the title and sidbar refrence.\ndesc: Breif description of the document\n---\n"))),(0,o.kt)("h2",{id:"add-a-new-image-or-diagram"},"Add a New Image or Diagram"),(0,o.kt)("p",null,"All images should be properly named and saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"website/static/img")," directory.\nIdeally images should be in an SVG or PNG format. Diagrams are created and\nmaintained in ",(0,o.kt)("a",{parentName:"p",href:"https://www.lucidchart.com/"},"Lucidchart")," by the ORCA core team.\nTo access the diagrams for an update, please speak to a ORCA core team member."))}l.isMDXComponent=!0}}]);