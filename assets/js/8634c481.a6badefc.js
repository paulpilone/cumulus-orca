"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[7576],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>g});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(p,".").concat(g)]||d[g]||l[g]||n;return t?r.createElement(m,i(i({ref:a},u),{},{components:t})):r.createElement(m,i({ref:a},u))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},590:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const n={id:"research-pushing-docker-image",title:"Notes on pushing and deploying docker images.",description:"Research notes on pushing Docker images for end users"},i=void 0,s={unversionedId:"developer/research/research-pushing-docker-image",id:"developer/research/research-pushing-docker-image",title:"Notes on pushing and deploying docker images.",description:"Research notes on pushing Docker images for end users",source:"@site/docs/developer/research/research-pushing-docker-image.md",sourceDirName:"developer/research",slug:"/developer/research/research-pushing-docker-image",permalink:"/cumulus-orca/docs/developer/research/research-pushing-docker-image",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/research/research-pushing-docker-image.md",tags:[],version:"current",frontMatter:{id:"research-pushing-docker-image",title:"Notes on pushing and deploying docker images.",description:"Research notes on pushing Docker images for end users"},sidebar:"dev_guide",previous:{title:"Using Lambda functions as container research Notes",permalink:"/cumulus-orca/docs/developer/research/research-lambda-container"},next:{title:"S3 Future Direction/Best Practices",permalink:"/cumulus-orca/docs/developer/research/research-s3-bucket-best-practices"}},p={},c=[{value:"Deploying ECR",id:"deploying-ecr",level:2},{value:"Github Packages",id:"github-packages",level:2},{value:"Pulling from Github repo and pushing to ECR",id:"pulling-from-github-repo-and-pushing-to-ecr",level:2},{value:"Alternative approach to pull and push images to ECR using Packer",id:"alternative-approach-to-pull-and-push-images-to-ecr-using-packer",level:2},{value:"Prototyping using github package",id:"prototyping-using-github-package",level:2},{value:"Future directions and recommendations",id:"future-directions-and-recommendations",level:2},{value:"References",id:"references",level:5}],u={toc:c};function l(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deploying-ecr"},"Deploying ECR"),(0,o.kt)("p",null,"ECR repo can be deploying using terraform as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terraform"},'resource "aws_ecr_repository" "prototype_repo" {\n  name                 = "prototype_repo"\n\n  image_scanning_configuration {\n    scan_on_push = false\n  }\n}\noutput "ecr_repo_url" {\n    value = aws_ecr_repository.prototype_repo.repository_url\n}\n')),(0,o.kt)("h2",{id:"github-packages"},"Github Packages"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages"},"Github packages")," looks like a good platform to store public or private docker images. GitHub Packages usage is free for public packages. For private packages, each account on GitHub receives a certain amount of free storage and data transfer, depending on the product used with the account. Any usage beyond the included amounts is controlled by spending limits. Currently, this github package feature is already being used by our NASA ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/nasa/packages"},"repository"),"."),(0,o.kt)("p",null,"The steps to push a docker image to github repository are shown below. Make sure Docker CLI is installed on your machine."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a DockerFile that will create the image.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#This is a sample image\nFROM alpine:3.4\nRUN apk update\nRUN apk add vim \nCMD [\u201cecho\u201d,\u201dSample image created\u201d]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Build the image using ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build -t sample-image ."),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once the image is there, the next step is to push to github. However, the user will first need to authenticate with github using a ",(0,o.kt)("inlineCode",{parentName:"p"},"personal access token"),". See details ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"here")," on how to create the token."),(0,o.kt)("admonition",{parentName:"li",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Github packages might need to be approved by NASA admins for use. In addition, proper permissions need to be granted to the token such as ",(0,o.kt)("inlineCode",{parentName:"p"},"write_package")," in order to push to github."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once the token is created, sign in to the github container registry using:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export CR_PAT=YOUR_PERSONAL_TOKEN\necho $CR_PAT | docker login ghcr.io -u <GITHUB_USERNAME> --password-stdin\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," with your github username. It will show ",(0,o.kt)("inlineCode",{parentName:"p"},"Login Succeeded")," upon success."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tag the docker image using the following format. Note that the format must be ",(0,o.kt)("inlineCode",{parentName:"li"},"ghcr.io/<GITHUB_USERNAME>/<image_name>:<image_tag>"),". The image name must have the prefix ",(0,o.kt)("inlineCode",{parentName:"li"},"cumulus-orca/"),". e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"cumulus-orca/<image_name>:<image_tag>"),". Note that ",(0,o.kt)("inlineCode",{parentName:"li"},"<image_tag>")," is the image version.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker tag <image_name> ghcr.io/<GITHUB_USERNAME>/<image_name>:<image_tag>\n# example using image name "cumulus-orca/sample-image:latest" and github username "nasa"\ndocker tag sample-image ghcr.io/nasa/cumulus-orca/sample-image:latest\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Finally push the image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push ghcr.io/username/sample-image\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure your username matches with your github username or else it will show error while pushing the image.")),(0,o.kt)("p",null,"Once the image is pushed, it  can be view under ",(0,o.kt)("inlineCode",{parentName:"p"},"Packages")," section in github. However, the image will be private by default. Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"package settings")," page to change from private to public if needed."),(0,o.kt)("h2",{id:"pulling-from-github-repo-and-pushing-to-ecr"},"Pulling from Github repo and pushing to ECR"),(0,o.kt)("p",null,"Docker image in github repository can then be pulled by other users using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/<GITHUB_USERNAME>/<image_name>:<TAG>\n#example\ndocker pull ghcr.io/username/sample-image:latest\n\n")),(0,o.kt)("p",null,"Once image is pulled and ECR is deployed, login to ECR and then tag and push the image."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to properly tag the image or else it will give an error.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#login to ECR\naws ecr get-login-password --region <YOUR_REGION> | docker login --username AWS --password-stdin <YOUR_AWS_ACCOUNT_ID>.dkr.ecr.<YOUR_REGION>.amazonaws.com\n#example\naws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-west-2.amazonaws.com\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#tag your local image with your ECR repo name\ndocker tag <IMAGE_NAME>:<IMAGE_TAG> <YOUR_AWS_ECR_REPO_URI>:<IMAGE_TAG>\n#example\ndocker tag ghcr.io/username/sample-image:latest 123456789.dkr.ecr.us-west-2.amazonaws.com/prototype_repo:prototype\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#push image to your ECR\ndocker push <YOUR_ECR_REPO_URI>:<IMAGE_TAG>\n#example\ndocker push 123456789.dkr.ecr.us-west-2.amazonaws.com/prototype_repo:prototype\n")),(0,o.kt)("h2",{id:"alternative-approach-to-pull-and-push-images-to-ecr-using-packer"},"Alternative approach to pull and push images to ECR using Packer"),(0,o.kt)("p",null,"Another approach to pull, tag and push images from github repository to AWS ECR is to use Hashicorp ",(0,o.kt)("a",{parentName:"p",href:"https://www.packer.io/"},"Packer")," that can automatically build and push docker images to AWS. It uses the HashiCorp Configuration Language (HCL). A sample working script named ",(0,o.kt)("inlineCode",{parentName:"p"},"test.pkr.hcl")," deployed to AWS sandbox is shown below:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'Make sure the file name ends with ".pkr.hcl"\n'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'packer {\n  # install required plugins\n  required_plugins {\n    docker = {\n      version = ">= 1.0.1"\n      source  = "github.com/hashicorp/docker"\n    }\n  }\n}\n\nvariable  "ecr_repository_url" {\n  type = string\n  sensitive = true\n}\n\nvariable  "image_version" {\n  type = string\n}\n\n# pull the image from github repo\nsource "docker" "prototype_image" {\n  image = "ghcr.io/rizbihassan/cumulus-orca/sample-image:latest"\n  commit = true\n}\n# build the image\nbuild {\n  sources = ["source.docker.prototype_image"]\n# tag the image\n  post-processors {\n    post-processor "docker-tag" {\n        repository = var.ecr_repository_url\n        tags = [var.image_version]\n    }\n    # push the image to ECR repo that was deployed using terraform previously\n    post-processor "docker-push" {\n        ecr_login = true\n        login_server = var.ecr_repository_url\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Run the packer file using the command below. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<ECR_REPOSITORY_URL>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<IMAGE_VERSION>")," with yours."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"packer build -var 'ecr_repository_url=<ECR_REPOSITORY_URL>' -var 'image_version=<IMAGE_VERSION>' test.pkr.hcl\n")),(0,o.kt)("p",null,"The output will show something like this if successful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"user$ packer build -var 'ecr_repository_url=123456789.dkr.ecr.us-west-2.amazonaws.com/prototype_repo' -var 'image_version=v1' test.pkr.hcl\ndocker.prototype_image: output will be in this color.\n\n==> docker.prototype_image: Creating a temporary directory for sharing data...\n==> docker.prototype_image: Pulling Docker image: ghcr.io/rizbihassan/cumulus-orca/sample-image:latest\n    docker.prototype_image: latest: Pulling from rizbihassan/cumulus-orca/sample-image\n    docker.prototype_image: Status: Image is up to date for ghcr.io/rizbihassan/cumulus-orca/sample-image:latest\n    docker.prototype_image: ghcr.io/rizbihassan/cumulus-orca/sample-image:latest\n==> docker.prototype_image: Starting docker container...\n    docker.prototype_image: Run command: docker run -v /Users/rhassan/.config/packer/tmp867764898:/packer-files -d -i -t --entrypoint=/bin/sh -- ghcr.io/rizbihassan/cumulus-orca/sample-image:latest\n    docker.prototype_image: Container ID: edbdd851c37304379f241adbec0ca4aecc601c92f7f0ea60d928b3be7ed13224\n==> docker.prototype_image: Using docker communicator to connect: 172.17.0.3\n==> docker.prototype_image: Committing the container\n    docker.prototype_image: Image ID: sha256:a68fd0613f72473f1f11bf81a87eedd308e8e0c7cc9d6568467ddd4e4df5c2aa\n==> docker.prototype_image: Killing the container: edbdd851c37304379f241adbec0ca4aecc601c92f7f0ea60d928b3be7ed13224\n==> docker.prototype_image: Running post-processor:  (type docker-tag)\n    docker.prototype_image (docker-tag): Tagging image: sha256:a68fd0613f72473f1f11bf81a87eedd308e8e0c7cc9d6568467ddd4e4df5c2aa\n    docker.prototype_image (docker-tag): Repository: <sensitive>:v1\n==> docker.prototype_image: Running post-processor:  (type docker-push)\n    docker.prototype_image (docker-push): Fetching ECR credentials...\n    docker.prototype_image (docker-push): Logging in...\n    docker.prototype_image (docker-push): Login Succeeded\n    docker.prototype_image (docker-push): Pushing: <sensitive>:v1\n    docker.prototype_image (docker-push): The push refers to repository [<sensitive>]\n    docker.prototype_image (docker-push): f2f1289d6a81: Preparing\n    docker.prototype_image (docker-push): 4dda5747d6f4: Preparing\n    docker.prototype_image (docker-push): dbb5c5e8d571: Preparing\n    docker.prototype_image (docker-push): 23f7bd114e4a: Preparing\n    docker.prototype_image (docker-push): f2f1289d6a81: Pushed\n    docker.prototype_image (docker-push): v1: digest: sha256:29c151d20a3d1e8e525e9af4e7292f0e99d8f8cd64d7bcba289ceafc77a2ea98 size: 1156\n    docker.prototype_image (docker-push): Pushing: <sensitive>:v1\n    docker.prototype_image (docker-push): The push refers to repository [<sensitive>]\n    docker.prototype_image (docker-push): f2f1289d6a81: Preparing\n    docker.prototype_image (docker-push): 4dda5747d6f4: Preparing\n    docker.prototype_image (docker-push): dbb5c5e8d571: Preparing\n    docker.prototype_image (docker-push): 23f7bd114e4a: Preparing\n    docker.prototype_image (docker-push): v1: digest: sha256:29c151d20a3d1e8e525e9af4e7292f0e99d8f8cd64d7bcba289ceafc77a2ea98 size: 1156\n    docker.prototype_image (docker-push): Logging out...\n    docker.prototype_image (docker-push): Removing login credentials for 236859827343.dkr.ecr.us-west-2.amazonaws.com\nBuild 'docker.prototype_image' finished after 13 seconds 305 milliseconds.\n\n==> Wait completed after 13 seconds 305 milliseconds\n\n==> Builds finished. The artifacts of successful builds are:\n--\x3e docker.prototype_image: Imported Docker image: sha256:a68fd0613f72473f1f11bf81a87eedd308e8e0c7cc9d6568467ddd4e4df5c2aa\n--\x3e docker.prototype_image: Imported Docker image: <sensitive>:v1 with tags <sensitive>:v1\n\n")),(0,o.kt)("h2",{id:"prototyping-using-github-package"},"Prototyping using github package"),(0,o.kt)("p",null,"A prototype of a github package has been created by following the steps above and can be seen ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/users/rizbihassan/packages/container/package/cumulus-orca/sample-image"},"here"),". Note that a personal github account has been used for prototyping since it requires creating a personal access token first. The github repository containing image that was pulled from github repo above and pushed to ECR using packer can be found in the ECR console and is named ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype_repo"),"."),(0,o.kt)("h2",{id:"future-directions-and-recommendations"},"Future directions and recommendations"),(0,o.kt)("p",null,"Using github packages for storing docker container looks promising, easy to use and free of cost. However, the user will need to create a personal access token having proper permissions first to login to github package and push images which could cause some delay. No token is necessary to pull public images from github repository. While Docker CLI can be used to build and tag the image, it is not the ideal way to push to ECR. The better and automated approach would be using Packer as shown above. Once ECR is deployed with terraform, Packer can then be used to pull and push the image to ECR.\nSome cards that  could be written are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a personal access token(PAT) for github container registry with proper permissions. Work with NASA admins."),(0,o.kt)("li",{parentName:"ul"},"Push Docker images to github repository as needed.")),(0,o.kt)("h5",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages"},"https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#visibility-and-access-permissions-for-container-images"},"https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#visibility-and-access-permissions-for-container-images")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-orca/blob/develop/website/docs/developer/research/research-lambda-container.md"},"https://github.com/nasa/cumulus-orca/blob/develop/website/docs/developer/research/research-lambda-container.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.packer.io/guides/hcl/variables"},"https://www.packer.io/guides/hcl/variables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://thoughtmechanix.com/posts/8.01.2021_packer/"},"https://thoughtmechanix.com/posts/8.01.2021_packer/"))))}l.isMDXComponent=!0}}]);