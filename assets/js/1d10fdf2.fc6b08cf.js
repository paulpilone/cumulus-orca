"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[2473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"parallel-scripting",title:"Parallel Scripting",description:"Instructions on running multiple functions in a script in Parallel."},o=void 0,l={unversionedId:"developer/development-guide/code/parallel-scripting",id:"developer/development-guide/code/parallel-scripting",title:"Parallel Scripting",description:"Instructions on running multiple functions in a script in Parallel.",source:"@site/docs/developer/development-guide/code/parallel-scripting.md",sourceDirName:"developer/development-guide/code",slug:"/developer/development-guide/code/parallel-scripting",permalink:"/cumulus-orca/docs/developer/development-guide/code/parallel-scripting",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/code/parallel-scripting.md",tags:[],version:"current",frontMatter:{id:"parallel-scripting",title:"Parallel Scripting",description:"Instructions on running multiple functions in a script in Parallel."},sidebar:"dev_guide",previous:{title:"ORCA Logs",permalink:"/cumulus-orca/docs/developer/development-guide/code/orca-logging"},next:{title:"Documentation Introduction",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-intro"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Scripting Basics",id:"scripting-basics",level:2},{value:"Demo",id:"demo",level:4},{value:"Alternatives",id:"alternatives",level:2},{value:"Background and Wait (&amp;)",id:"background-and-wait-",level:3},{value:"Cons",id:"cons",level:4},{value:"Demo",id:"demo-1",level:4},{value:"Xargs",id:"xargs",level:3},{value:"Cons",id:"cons-1",level:4},{value:"Demo",id:"demo-2",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/parallel/man.html"},"Parallel")," is a means of running a function multiple times in different processes.\nThis can significantly increase the performance of scripts that loop with significant wait time.\nFor example, in cases with network calls such as package installation."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"For development, install via ",(0,r.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/parallel"},"brew"),"."),(0,r.kt)("h2",{id:"scripting-basics"},"Scripting Basics"),(0,r.kt)("p",null,"Using parallel will run multiple instances of the command in different processes.\nStandard output for each process will be buffered, and shown all at once when the process completes.\nAfter all processes exit, execution of the main script will continue.\n",(0,r.kt)("inlineCode",{parentName:"p"},"$?")," will contain how many tasks exited with a non-0 exit code."),(0,r.kt)("h4",{id:"demo"},"Demo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--jobs 0")," indicates that as many processes as possible should run at once."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-n 1")," limits the number of parameters per process to 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-X")," distributes the parameters among the new processes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--halt now,fail=1")," is used to halt all ongoing processes once 1 process exits with a non-0 exit code. Modifies ",(0,r.kt)("inlineCode",{parentName:"li"},"$?")," to return the failing process' exit code instead of how many processes failed.",(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since the exit code does not indicate which process failed, logging for individual processes should be robust.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'parallel --jobs 0 -n 1 -X --halt now,fail=1 function_name ::: $parameter_array\nprocess_return_code=$?\nif [ $process_return_code -ne 0 ]; then\n  echo "ERROR: process failed with code $process_return_code."\n  failure=1\nfi\n')),(0,r.kt)("h2",{id:"alternatives"},"Alternatives"),(0,r.kt)("p",null,"Some alternatives were researched, but found to be more limited."),(0,r.kt)("h3",{id:"background-and-wait-"},"Background and Wait (&)"),(0,r.kt)("p",null,"If a function is run with a ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," suffix, it will start in a new process.\nThe process ID can then be captured, and used to track progress and exit codes."),(0,r.kt)("h4",{id:"cons"},"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requires extra code for managing processes."),(0,r.kt)("li",{parentName:"ul"},"Logging is not grouped by function invocation.")),(0,r.kt)("h4",{id:"demo-1"},"Demo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'declare -A pids\nfor param in $parameter_array\ndo\nfunction_name $param &\npids[${param}]=$!  # This assumes that all parameters are unique.\ndone\n\nfailure=0\nfor param in "${!pids[@]}"\ndo\n  wait ${pids[$param]}\n  process_return_code=$?\n  if [ $process_return_code -ne 0 ]; then\n    echo "ERROR: $param failed."\n    failure=1\n  fi\ndone\n')),(0,r.kt)("h3",{id:"xargs"},(0,r.kt)("a",{parentName:"h3",href:"https://www.man7.org/linux/man-pages/man1/xargs.1.html"},"Xargs")),(0,r.kt)("p",null,"Xargs has several useful performance optimization parameters, but is more difficult to use."),(0,r.kt)("h4",{id:"cons-1"},"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logging is not grouped by function invocation."),(0,r.kt)("li",{parentName:"ul"},"Parameters are passed in via a single string, split on a separator character, which is rather brittle."),(0,r.kt)("li",{parentName:"ul"},"Exit codes are not passed out to main process.")),(0,r.kt)("h4",{id:"demo-2"},"Demo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "${parameter_array[@]}" | xargs -n 1 -P 0 bash -c \'function_name "$@"\' _\n')))}u.isMDXComponent=!0}}]);