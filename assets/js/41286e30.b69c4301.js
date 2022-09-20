"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[1044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={id:"research-multipart-chunksize",title:"Multipart Chunksize Research Notes",description:"Research Notes on Modifying Multipart-Chunksize for copy_to_glacier."},o=void 0,l={unversionedId:"developer/research/research-multipart-chunksize",id:"developer/research/research-multipart-chunksize",title:"Multipart Chunksize Research Notes",description:"Research Notes on Modifying Multipart-Chunksize for copy_to_glacier.",source:"@site/docs/developer/research/research-multipart-chunksize.md",sourceDirName:"developer/research",slug:"/developer/research/research-multipart-chunksize",permalink:"/cumulus-orca/docs/developer/research/research-multipart-chunksize",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/research/research-multipart-chunksize.md",tags:[],version:"current",frontMatter:{id:"research-multipart-chunksize",title:"Multipart Chunksize Research Notes",description:"Research Notes on Modifying Multipart-Chunksize for copy_to_glacier."},sidebar:"dev_guide",previous:{title:"GraphQL Research Notes",permalink:"/cumulus-orca/docs/developer/research/research-graphql"},next:{title:"Bamboo specs Research Notes",permalink:"/cumulus-orca/docs/developer/research/research-bamboo"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Implementation Details",id:"implementation-details",level:3},{value:"Future Direction",id:"future-direction",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/blob/2f2600a2edd85e0af216d78180c5d46ebda03060/tasks/copy_to_glacier/copy_to_glacier.py#L50"},"copy_to_glacier"),"\nuses a copy command that has a chunk-size for multi-part transfers.\nWe currently are using the default value of 8mb, which will cause problems when transferring large files, sometimes exceeding 120Gb."),(0,n.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Client.copy"},"Docs for the copy command")," mention a ",(0,n.kt)("inlineCode",{parentName:"li"},"Config")," parameter of type ",(0,n.kt)("inlineCode",{parentName:"li"},"TransferConfig"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/customizations/s3.html#boto3.s3.transfer.TransferConfig"},"Docs for TransferConfig")," state that it has a property"),(0,n.kt)("li",{parentName:"ul"},"Given the above, we can modify the ",(0,n.kt)("inlineCode",{parentName:"li"},"s3.copy")," command to",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"s3.copy(\n  copy_source,\n  destination_bucket, destination_key,\n  ExtraArgs={\n      'StorageClass': 'GLACIER',\n      'MetadataDirective': 'COPY',\n      'ContentType': s3.head_object(Bucket=source_bucket_name, Key=source_key)['ContentType'],\n      'ACL': 'bucket-owner-full-control'  # Sets the x-amz-acl URI Request Parameter. Needed for cross-OU copies.\n  },\n  Config=TransferConfig(multipart_chunksize=multipart_chunksize_mb * MB)\n)\n"))),(0,n.kt)("li",{parentName:"ul"},"This will require a variable passed into the lambda.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Could be set at the collection level under ",(0,n.kt)("inlineCode",{parentName:"li"},"config['collection']['s3MultipartChunksizeMb']")," with a default value in the lambdas/main.tf entry for ",(0,n.kt)("inlineCode",{parentName:"li"},"copy_to_glacier")," defined as",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"environment {\n  variables = {\n    ORCA_DEFAULT_BUCKET = var.orca_default_bucket,\n    DEFAULT_ORCA_COPY_CHUNK_SIZE_MB = var.orca_copy_chunk_size\n  }\n}\n"))),(0,n.kt)("li",{parentName:"ul"},"Could also be an overall environment variable, though this is less flexible. In the lambdas/main.tf entry for ",(0,n.kt)("inlineCode",{parentName:"li"},"copy_to_glacier")," this would look like",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"environment {\n  variables = {\n    ORCA_DEFAULT_BUCKET = var.orca_default_bucket,\n    ORCA_COPY_CHUNK_SIZE_MB = var.orca_copy_chunk_size\n  }\n}\n"))))),(0,n.kt)("li",{parentName:"ul"},"The above should be added to other TF files such as terraform.tfvars, orca/main.tf, orca/variables.tf, and lambdas/variables.tf as well as documentation.")),(0,n.kt)("h3",{id:"future-direction"},"Future Direction"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Recommend adding the environment variable ",(0,n.kt)("inlineCode",{parentName:"li"},"ORCA_COPY_CHUNK_SIZE_MB")," to TF and Lambda.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Worth waiting to use the same name as Cumulus, as they are going through a similar change."))),(0,n.kt)("li",{parentName:"ul"},"I have read in a couple of sources that increasing ",(0,n.kt)("inlineCode",{parentName:"li"},"io_chunksize")," can also have a significant impact on performance. May be worth looking into if more improvements are desired.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The other variables should be considered as well.")))))}p.isMDXComponent=!0}}]);