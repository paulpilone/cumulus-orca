"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[7502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"research-AuroraServerless",title:"Aurora Serverless Research Notes",description:"Research Notes on Aurora Serverless."},i=void 0,s={unversionedId:"developer/research/research-AuroraServerless",id:"developer/research/research-AuroraServerless",title:"Aurora Serverless Research Notes",description:"Research Notes on Aurora Serverless.",source:"@site/docs/developer/research/research-AuroraServerless.md",sourceDirName:"developer/research",slug:"/developer/research/research-AuroraServerless",permalink:"/cumulus-orca/docs/developer/research/research-AuroraServerless",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/research/research-AuroraServerless.md",tags:[],version:"current",frontMatter:{id:"research-AuroraServerless",title:"Aurora Serverless Research Notes",description:"Research Notes on Aurora Serverless."},sidebar:"dev_guide",previous:{title:"ORCA Reconciliation",permalink:"/cumulus-orca/docs/developer/research/research-reconciliation"},next:{title:"GraphQL Research Notes",permalink:"/cumulus-orca/docs/developer/research/research-graphql"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Implementation Details",id:"implementation-details",level:3},{value:"Future Direction",id:"future-direction",level:3},{value:"Sources",id:"sources",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/rds/aurora/serverless/"},"AWS Aurora Serverless")," is a resource used by other teams for storage with scaling architecture.\nAs part of our plans to utilize Cumulus' database for Orca storage, research was conducted to preemptively identify pitfalls and needed changes."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This page will not focus on moving to the database.\nInstead, emphasis will be placed on connecting to and querying an already-unified Serverless database.")),(0,a.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By default, Aurora scaling will only happen when no connections to the DB exist, but this can be overridden."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This means that if we do not handle connections responsibly or optimize our queries, we could hold up scaling operations for other teams."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When scaling occurs, connections are cancelled, transactions are rolled back, locks are dropped, and temporary tables are dropped."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In our current technology, PostgreSQL, ",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/8.3/tutorial-transactions.html"},"each query is a transaction"),". "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When the Aurora DB is scaled down to zero, it takes some time to scale up."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"With SQLAlchemy this translated to a 30-40 second hang on ",(0,a.kt)("inlineCode",{parentName:"li"},"engine.begin()")),(0,a.kt)("li",{parentName:"ul"},"The default timeout for SQLAlchemy appears to be ",(0,a.kt)("a",{parentName:"li",href:"https://docs.sqlalchemy.org/en/14/core/engines.html"},"30 seconds"),", though as mentioned previously connecting took 40 seconds with no issues.\nMay be multiple timeouts in play."),(0,a.kt)("li",{parentName:"ul"},"Scaling up after this point did not cause query performance degradation, despite what was documented. However, the UI is poorly made, and may be reporting incorrectly."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connections canceled due to scaling raise an error in SQLAlchemy.\nIf the query is ongoing:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'[SQL: \nSELECT pg_sleep(600);\n]\n(Background on this error at: http://sqlalche.me/e/14/e3q8)\nTraceback (most recent call last):\n  File "...\\venv\\lib\\site-packages\\sqlalchemy\\engine\\base.py", line 1770, in _execute_context\n    self.dialect.do_execute(\n  File "...\\venv\\lib\\site-packages\\sqlalchemy\\engine\\default.py", line 717, in do_execute\n    cursor.execute(statement, parameters)\npsycopg2.errors.AdminShutdown: terminating connection due to serverless scale event timeout\nSSL connection has been closed unexpectedly\n\n\nThe above exception was the direct cause of the following exception:\n\nTraceback (most recent call last):\n  File ".../main.py", line 85, in <module>\n    connection.execute(wait_command)\n    ...\nsqlalchemy.exc.OperationalError: (psycopg2.errors.AdminShutdown) terminating connection due to serverless scale event timeout\nSSL connection has been closed unexpectedly\n')),(0,a.kt)("p",{parentName:"li"},"If the query is starting up:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'Database connection failed due to (psycopg2.OperationalError) FATAL:  terminating connection because backend initialization completed past serverless scale point\n\n(Background on this error at: https://sqlalche.me/e/14/e3q8)\nTraceback (most recent call last):\n  ...\n  File "...\\venv\\lib\\site-packages\\psycopg2\\__init__.py", line 122, in connect\n    conn = _connect(dsn, connection_factory=connection_factory, **kwasync)\npsycopg2.OperationalError: FATAL:  terminating connection because backend initialization completed past serverless scale point\n\n\nThe above exception was the direct cause of the following exception:\n\nTraceback (most recent call last):\n  File ".../main.py", line 84, in <module>\n    with engine.begin() as connection:\n  File "...\\engine.py", line 393, in begin\n    conn = self.connect()\n  ...\nsqlalchemy.exc.OperationalError: (psycopg2.OperationalError) FATAL:  terminating connection because backend initialization completed past serverless scale point\n\n(Background on this error at: https://sqlalche.me/e/14/e3q8)\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Retrying when these errors occur should be sufficient to sidestep scaling errors, as scaling does not take long.",(0,a.kt)("admonition",{parentName:"li",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"  Disconnections caused by these errors are NOT reported to Cloudwatch. Connecting lambdas/modules should have reliable and robust error logging.")))))),(0,a.kt)("h3",{id:"future-direction"},"Future Direction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modifications should be made to database code to account for AdminShutdown, OperationalError, and connection timeout issues."),(0,a.kt)("li",{parentName:"ul"},"Timeouts for Lambdas/code that use the database should account for the 30-40 second scale-up-time."),(0,a.kt)("li",{parentName:"ul"},"Note that this code has not been tested with Lambdas.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/sqlalchemy-serverless-aurora-plugin/"},"A SQLAlchemy plugin"),' suggests that Lambdas "freeze" causing connection errors.',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"I question whether this actually matters more for Aurora Serverless compared to base Aurora."),(0,a.kt)("li",{parentName:"ul"},"Freeze only occurs after execution. Would be worth reviewing code to ensure connections do not live beyond lambda execution.")))))),(0,a.kt)("h4",{id:"sources"},"Sources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/database/best-practices-for-working-with-amazon-aurora-serverless/"},"Best Practices for Working With Amazon Aurora Serverless")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html"},"Aurora Serverless: How it Works"))))}u.isMDXComponent=!0}}]);