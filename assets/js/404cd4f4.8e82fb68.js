"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4162],{1567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"installation 2","title":"Installation Guide","description":"Follow the steps below to install and run the Empirica experiment on your local system. If the standard Empirica installation instructions are not sufficient, use this guide.","source":"@site/docs/installation 2.md","sourceDirName":".","slug":"/installation 2","permalink":"/docs/installation 2","draft":false,"unlisted":false,"editUrl":"https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io/edit/documentation/docs/installation 2.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Setting up the server","permalink":"/docs/Deployment Instructions/SetUp"},"next":{"title":"Installation Guide","permalink":"/docs/installation"}}');var s=t(4848),o=t(8453);const r={sidebar_position:5},a="Installation Guide",l={},c=[{value:"<strong>Prerequisites for Running an Empirica Experiment (OSX)</strong>",id:"prerequisites-for-running-an-empirica-experiment-osx",level:2},{value:"<strong>Installation on Windows:</strong>",id:"installation-on-windows",level:2},{value:"<strong>Optional Step: Set up your Public Key on Github</strong>",id:"optional-step-set-up-your-public-key-on-github",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"installation-guide",children:"Installation Guide"})}),"\n",(0,s.jsxs)(n.p,{children:["Follow the steps below to ",(0,s.jsx)(n.strong,{children:"install and run the Empirica experiment"})," on your local system. If the standard ",(0,s.jsx)(n.a,{href:"https://docs.empirica.ly/getting-started/setup",children:"Empirica installation instructions"})," are not sufficient, use this guide."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites-for-running-an-empirica-experiment-osx",children:(0,s.jsx)(n.strong,{children:"Prerequisites for Running an Empirica Experiment (OSX)"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Try to clone and run the experiment from github: git clone ",(0,s.jsx)(n.a,{href:"mailto:git@github.com",children:"git@github.com"}),":Digital-Information-Research-Lab","/take-home-summer-assignment.git (see ",(0,s.jsx)(n.a,{href:"https://docs.google.com/document/d/1T7Ha5S31H4mF5hlIpHFNMGZa5WqQINp88Hf3SHtJhkk/edit?tab=t.0#bookmark=kix.fugj8x5vvpr",children:"how to create public keys"})," since that might make your life easier and ensure you have provided Swapneel with your github username)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Node.js - this is the language the application is written in and that you will be developing the extended experiments in: ",(0,s.jsx)(n.a,{href:"https://changelog.com/posts/install-node-js-with-homebrew-on-os-x",children:"Install Node.js and npm using Homebrew on OS X"})]}),"\n",(0,s.jsxs)(n.p,{children:["a. ",(0,s.jsx)(n.code,{children:"brew install npm"})," works for me since I have installed the ",(0,s.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew package manager"})," for mac."]}),"\n",(0,s.jsxs)(n.p,{children:["b. If you don\u2019t want to use Homebrew then there are other ways to install node.js through the ",(0,s.jsx)(n.a,{href:"https://anaconda.org/conda-forge/nodejs",children:"Anaconda"})," package manager, if you have used this in the past."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Empirica"}),"\n",(0,s.jsxs)(n.p,{children:["a. Install Empirica following the instructions in ",(0,s.jsx)(n.a,{href:"https://docs.empirica.ly/getting-started/setup",children:"Setup - Empirica v2 Docs"})]}),"\n",(0,s.jsxs)(n.p,{children:["b. REMEMBER: you need to ",(0,s.jsx)(n.code,{children:"cd client && npm install"})," and ",(0,s.jsx)(n.code,{children:"cd server && npm install"})," in order to install the packages in the ",(0,s.jsx)(n.code,{children:"package.json"})," file in both the client/ and server/ directories."]}),"\n",(0,s.jsxs)(n.p,{children:["c. Try ",(0,s.jsx)(n.a,{href:"https://docs.empirica.ly/getting-started/quick-start",children:"creating"})," and ",(0,s.jsx)(n.a,{href:"https://docs.empirica.ly/getting-started/quick-test",children:"running"})," a sample experiment on your machine following the instructions."]}),"\n",(0,s.jsxs)(n.p,{children:["d. If things don\u2019t work because of a Meteor error then follow the instructions to ",(0,s.jsx)(n.a,{href:"https://docs.meteor.com/install",children:"Install Meteor.js"})," via the Node package manager (npm)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Note: If you have an issue installing the most recent version of Empirica due to some GLIBC issues, please try to use a virtual machine with a recent version of Ubuntu (22.04 LTS) or Debian (12) which should have the updated drivers. You could also install a slightly older Empirica version so you can run it on your local system with less work going into this."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation-on-windows",children:(0,s.jsx)(n.strong,{children:"Installation on Windows:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download and install ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"Windows Subsystem for Linux"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install miniconda by finding the latest Linux installer from ",(0,s.jsx)(n.a,{href:"https://docs.conda.io/projects/miniconda/en/latest/",children:"this page"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"a. Inside a WSL terminal, use command:"}),"\n",(0,s.jsxs)(n.p,{children:["wget ",(0,s.jsx)(n.a,{href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh",children:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"})]}),"\n",(0,s.jsx)(n.p,{children:"b. Then run:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"bash Miniconda3-latest-Linux-x86_64.sh"})}),"\n",(0,s.jsx)(n.p,{children:"And follow the instructions to install and initialize the conda environment on your system in Linux (initializing is the process of setting a path so that every time you open Linux, you launch a conda base environment to work out of. Ideally you need a separate conda environment for each project so let\u2019s create one now)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a conda environment for your project: ",(0,s.jsx)(n.code,{children:"conda create -n empirica_env python=3.9"})]}),"\n",(0,s.jsx)(n.p,{children:"a. This creates a named empirica environment for your system."}),"\n",(0,s.jsxs)(n.p,{children:["b. Activate the environment after it's installed: ",(0,s.jsx)(n.code,{children:"conda activate empirica_env"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Now install nodejs inside the conda environment: ",(0,s.jsx)(n.code,{children:"conda install nodejs -c conda-forge"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"optional-step-set-up-your-public-key-on-github",children:(0,s.jsx)(n.strong,{children:"Optional Step: Set up your Public Key on Github"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Follow this tutorial for generating a key: ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account",children:"Adding a new SSH key to your GitHub account"})]}),"\n",(0,s.jsx)(n.p,{children:"i. Or just run the command ssh-keygen and it will generate one for you \u2013 follow the defaults saving it to the id_rsa file and setting a password of your choice for it \u2013 REMEMBER THIS PASSWORD!!!"}),"\n",(0,s.jsx)(n.p,{children:"ii. Basically, you will generate a local SSH key from within WSL that you will use to tell github that you have permissions to access this private repository. The tutorial will walk you through adding it to ssh-agent but you don\u2019t need to do that right now."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add this key to Github so github knows it exists. Follow that part in the tutorial linked above."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);