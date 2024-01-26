"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[2449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"deployment-s3-bucket",title:"Creating the Archive Bucket",description:"Provides developer with information on archive storage solutions."},i=void 0,c={unversionedId:"developer/deployment-guide/deployment-s3-bucket",id:"developer/deployment-guide/deployment-s3-bucket",title:"Creating the Archive Bucket",description:"Provides developer with information on archive storage solutions.",source:"@site/docs/developer/deployment-guide/creating-orca-archive-bucket.md",sourceDirName:"developer/deployment-guide",slug:"/developer/deployment-guide/deployment-s3-bucket",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-s3-bucket",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/deployment-guide/creating-orca-archive-bucket.md",tags:[],version:"current",frontMatter:{id:"deployment-s3-bucket",title:"Creating the Archive Bucket",description:"Provides developer with information on archive storage solutions."},sidebar:"dev_guide",previous:{title:"Creating a Deployment Environment",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-environment"},next:{title:"Generating S3 credentials",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-s3-credentials"}},l={},s=[{value:"Create the ORCA Archive and Report Buckets",id:"create-the-orca-archive-and-report-buckets",level:2},{value:"Provide Cross Account (OU) Access",id:"provide-cross-account-ou-access",level:2},{value:"Via AWS CloudFormation Template",id:"via-aws-cloudformation-template",level:3},{value:"Via Terraform",id:"via-terraform",level:3},{value:"Via AWS GUI",id:"via-aws-gui",level:3},{value:"Archive Bucket:",id:"archive-bucket",level:5},{value:"Reports Bucket:",id:"reports-bucket",level:5},{value:"Bucket policy for load balancer server access logging:",id:"bucket-policy-for-load-balancer-server-access-logging",level:5}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ORCA maintains a cloud ready backup of science and ancillary data\nin one of various ",(0,r.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/operator/storage-classes"},"storage classes"),"\nin ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"S3"),"\nfor the long term. The ORCA archive bucket can live in any NGAP Organizational\nUnit (OU)."),(0,r.kt)("admonition",{title:"Archive Bucket OU Placement",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Best practice is to place the ORCA archive bucket in your Disaster Recovery OU.\nThis is done to better separate the costs associated with the cloud ready backup\nfrom primary Cumulus holdings and ingest and archive activity. See the\n",(0,r.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/about/architecture/architecture-intro"},"ORCA Architecture Introduction documentation"),"\nfor more information.")),(0,r.kt)("p",null,"The sections below go into further detail on creating the ORCA archive bucket."),(0,r.kt)("h2",{id:"create-the-orca-archive-and-report-buckets"},"Create the ORCA Archive and Report Buckets"),(0,r.kt)("p",null,"Prior to creating the S3 buckets, make sure the deployment environment is created\nper the ",(0,r.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/developer/deployment-guide/deployment-environment"},"Creating the Deployment Environment"),"\ndocumentation."),(0,r.kt)("p",null,"To create the ORCA buckets run the AWS CLI command below twice, once for your archive bucket and once for your report bucket.\nReplace the ","[","place holder text","]"," with proper values for your deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'aws s3api create-bucket \\\n    --bucket [orca bucket name] \\\n    --profile [AWS OU profile]  \\\n    --region us-west-2 \\\n    --create-bucket-configuration "LocationConstraint=us-west-2"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[","AWS OU profile","]")," - This is the AWS profile name to use to connect to the proper OU where the bucket will be created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[","orca bucket name","]")," - This is the name of your bucket. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"PREFIX-orca-archive")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PREFIX-orca-reports"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Due to limits on report names, the maximum length of a non-report bucket's name is 54 characters.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--region us-west-2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},'--create-bucket-configuration "LocationConstraint=us-west-2"'),"\nlines are only necessary if you are creating your bucket outside of ",(0,r.kt)("strong",{parentName:"p"},"us-east-1"),".")),(0,r.kt)("p",null,"For more information on creating an S3 bucket, see the\n",(0,r.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html"},'AWS "Creating a Bucket" documentation'),"\nand the ",(0,r.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus/docs/deployment/create_bucket"},'Cumulus "Creating an S3 Bucket" documentation'),"."),(0,r.kt)("h2",{id:"provide-cross-account-ou-access"},"Provide Cross Account (OU) Access"),(0,r.kt)("p",null,"Per best practice, the ORCA archive bucket will be created in the Disaster\nRecovery OU and the additional ORCA components will be created in the Cumulus OU.\nIn order for the components in the Cumulus OU to interact with the ORCA archive\nbucket in the Cumulus OU, cross account bucket access privileges are needed. This\nsection details the steps needed to request the cross account bucket access."),(0,r.kt)("admonition",{title:"Deploying ORCA with Objects in Different OUs",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you are following best practice and have created your ORCA archive bucket in\nthe Disaster Recovery OU, you must have cross account bucket access permissions\ncreated and enabled before deploying the ORCA code. If you do not, your deployment\nwill return with the following error."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"module.orca.module.orca_lambdas.aws_s3_bucket_notification.copy_lambda_trigger: Creating...\n\nError: Error putting S3 notification configuration: AccessDenied: Access Denied\n    status code: 403, request id: 2E31C2ACD124B50B, host id: 0JrRBUioe/gT......\n"))),(0,r.kt)("h3",{id:"via-aws-cloudformation-template"},"Via AWS CloudFormation Template"),(0,r.kt)("p",null,"The AWS Cloudformation template for creating the ORCA DR buckets can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/blob/master/modules/dr_buckets_cloudformation/dr-buckets.yaml"},"here"),". Make sure you have AWS CLI installed before deploying this template."),(0,r.kt)("p",null,"From your terminal, run the following command by replacing the variables ",(0,r.kt)("inlineCode",{parentName:"p"},"<PREFIX>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<AWS_ACCOUNT_ID>")," first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'aws cloudformation deploy --stack-name <PREFIX>-orca-bucket-stack --template-file dr-buckets.yaml --parameter-overrides "PREFIX"="<PREFIX>" "CumulusAccountID"="<AWS_ACCOUNT_ID>"\n\n')),(0,r.kt)("p",null,"This will create archive and reports buckets with the necessary bucket policies giving the Cumulus Account permission to write data to the archive bucket."),(0,r.kt)("h3",{id:"via-terraform"},"Via Terraform"),(0,r.kt)("p",null,"The Terraform template for creating the ORCA DR buckets can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/blob/master/modules/dr_buckets/dr_buckets.tf"},"here"),". Make sure you have AWS CLI installed and a DR profile for the DR account configured before deploying this template. More information on how to configure an AWS CLI profile can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-options.html#cli-configure-options-list:~:text=as%20programmatically%20useful.-,%2D%2Dprofile%20%3Cstring%3E,-Specifies%20the%20named"},"here"),"."),(0,r.kt)("p",null,"From your terminal, first run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform init")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply"),". When running the apply, Terraform will ask for the following inputs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cumulus_account_id")," - This is the account ID of the Cumulus AWS account."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix")," - This is the prefix to use for the bucket names.")),(0,r.kt)("p",null,"Tags are an optional variable that can be set if you wish to have the DR buckets tagged."),(0,r.kt)("p",null,"Optionally you can provide Terraform the required inputs through the terminal with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'terraform apply \\\n-var=cumulus_account_id="<CUMULUS_ACCOUNT_ID>" \\\n-var=prefix="PREFIX"\n')),(0,r.kt)("h3",{id:"via-aws-gui"},"Via AWS GUI"),(0,r.kt)("p",null,'For each of the buckets listed below\ngo to AWS, open the bucket in question, click "Permissions",\nthen under "Bucket policy" click "Edit".\nThe policy given, once modified, can be pasted into this form.'),(0,r.kt)("h5",{id:"archive-bucket"},"Archive Bucket:"),(0,r.kt)("p",null,"The policy shown below can be used with some minor\nmodifications, which will be detailed below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "Version": "2012-10-17",\n   "Statement": [\n      {\n         "Sid": "Cross Account Access",\n         "Effect": "Allow",\n         "Principal": {\n            "AWS": "arn:aws:iam::012345678912:root"\n         },\n         "Action":[\n            "s3:GetObject*",\n            "S3:GetObjectTagging",\n            "S3:PutObjectTagging",\n            "s3:RestoreObject",\n            "s3:GetBucket*",\n            "s3:ListBucket",\n            "s3:PutBucketNotification",\n            "s3:GetInventoryConfiguration",\n            "s3:PutInventoryConfiguration",\n            "s3:ListBucketVersions"\n         ],\n         "Resource": [\n            "arn:aws:s3:::PREFIX-orca-archive",\n            "arn:aws:s3:::PREFIX-orca-archive/*"\n         ]\n      },\n      {\n         "Sid": "Cross Account Write Access",\n         "Effect": "Allow",\n         "Principal": {\n            "AWS": "arn:aws:iam::012345678912:root"\n         },\n         "Action": "s3:PutObject*",\n         "Resource": [\n            "arn:aws:s3:::PREFIX-orca-archive/*"\n         ],\n         "Condition": {\n            "StringEquals": {\n               "s3:x-amz-acl": "bucket-owner-full-control",\n               "s3:x-amz-storage-class": [\n                  "GLACIER",\n                  "DEEP_ARCHIVE"\n               ]\n            }\n         }\n      }\n   ]\n}\n')),(0,r.kt)("p",null,"The Principal value is the AWS root user for your Cumulus application that will\naccess the ORCA archive bucket. The value for this can be retrieved by\nperforming the following."),(0,r.kt)("p",null,"First, change your connection to the Cumulus account/OU rather than the Disaster Recovery account/OU.\nThen, using your AWS CLI client run the following command to get the account number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'aws sts get-caller-identity\n\n{\n    "UserId": "ABCWXYZ123...",\n    "Account": "90912...",\n    "Arn": "arn:aws:iam::90912...:user/NGAPShApplicationDeveloper-someone-123"\n}\n')),(0,r.kt)("p",null,"Replace the number in ",(0,r.kt)("inlineCode",{parentName:"p"},"arn:aws:iam::012345678912:root")," with the value of your non-DR account number."),(0,r.kt)("p",null,"The Resource value is the bucket and bucket paths that the Cumulus application\ncan access. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"PREFIX-orca-archive")," with the name\nof the Orca archive bucket created in the previous section."),(0,r.kt)("h5",{id:"reports-bucket"},"Reports Bucket:"),(0,r.kt)("p",null,"The policy shown below can be used with some minor\nmodifications, which will be detailed below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "Cross Account Access",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::012345678912:root"\n      },\n      "Action": [\n        "s3:GetObject*",\n        "s3:GetBucket*",\n        "s3:ListBucket",\n        "s3:PutObject",\n        "s3:PutObjectAcl",\n        "s3:PutBucketNotification"\n      ],\n      "Resource": [\n        "arn:aws:s3:::PREFIX-orca-reports",\n        "arn:aws:s3:::PREFIX-orca-reports/*"\n      ]\n    },\n    {\n      "Sid": "Inventory-PREFIX-orca-archive-reports",\n      "Effect": "Allow",\n      "Principal": {\n        "Service": "s3.amazonaws.com"\n      },\n      "Action": "s3:PutObject",\n      "Resource": "arn:aws:s3:::PREFIX-orca-reports/*",\n      "Condition": {\n        "StringEquals": {\n          "s3:x-amz-acl": "bucket-owner-full-control",\n          "aws:SourceAccount": "000000000000"\n        },\n        "ArnLike": {\n          "aws:SourceArn": ["arn:aws:s3:::PREFIX-orca-archive"]\n        }\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"The Principal value is the AWS root user for your Cumulus application that will\naccess the ORCA reports bucket.\nSee the Archive Bucket instructions for assistance getting this value."),(0,r.kt)("p",null,"Replace the number in ",(0,r.kt)("inlineCode",{parentName:"p"},"arn:aws:iam::012345678912:root")," with the value of your non-DR account number.\nSee the Archive Bucket instructions for assistance getting this value."),(0,r.kt)("p",null,"Replace the number ",(0,r.kt)("inlineCode",{parentName:"p"},"000000000000")," with your DR account number."),(0,r.kt)("p",null,"The Resource value is the bucket and bucket paths that the Cumulus application\ncan access. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"PREFIX-orca-reports")," with the name\nof the Orca reports bucket created in the previous section."),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"PREFIX-orca-archive")," with the name of your ",(0,r.kt)("a",{parentName:"p",href:"#archive-bucket"},"ORCA archive bucket"),".\nIf you have multiple ORCA buckets, expand the ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceArn")," array with the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"ArnLike": {\n   "aws:SourceArn": ["arn:aws:s3:::BUCKET-NAME", "arn:aws:s3:::BUCKET-NAME"]\n}\n')),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"PREFIX-orca-archive")," with the name of your ",(0,r.kt)("a",{parentName:"p",href:"#archive-bucket"},"ORCA archive bucket"),".\nIf you have multiple ORCA buckets, expand the ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceArn")," array with the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"ArnLike": {\n   "aws:SourceArn": ["arn:aws:s3:::BUCKET-NAME", "arn:aws:s3:::BUCKET-NAME"]\n}\n')),(0,r.kt)("h5",{id:"bucket-policy-for-load-balancer-server-access-logging"},"Bucket policy for load balancer server access logging:"),(0,r.kt)("p",null,"You must add the following S3 bucket policy to your ",(0,r.kt)("inlineCode",{parentName:"p"},"system_bucket"),", which will likely be named ",(0,r.kt)("inlineCode",{parentName:"p"},"<PREFIX>-internal"),", to give the load balancer access to write logs to the S3 bucket. Otherwise, the deployment will throw an ",(0,r.kt)("inlineCode",{parentName:"p"},"Access Denied")," error. If successful, a test log message will be posted to the bucket under the provided prefix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Principal": {\n                "AWS": "arn:aws:iam::<LOAD_BALANCER_ACCOUNT_ID>:root"\n            },\n            "Action": "s3:PutObject",\n            "Resource": "arn:aws:s3:::<BUCKET_NAME>/<PREFIX>-lb-gql-a-logs/AWSLogs/<AWS_ACCOUNT_ID>/*"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<LOAD_BALANCER_ACCOUNT_ID>")," with the ID of the AWS account for Elastic Load Balancing for your Region which can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html#attach-bucket-policy"},"here"),". If you do not know your region name, it can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html"},"here"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"<LOAD_BALANCER_ACCOUNT_ID>")," is different from your AWS account ID.")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<BUCKET_NAME>")," with your ",(0,r.kt)("inlineCode",{parentName:"p"},"system-bucket")," name."),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<PREFIX>")," with your prefix."),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<AWS_ACCOUNT_ID>")," with your Cumulus OU account number."))}m.isMDXComponent=!0}}]);