"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5631],{8764:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Deployment Instructions/SetUp","title":"<span class=\\"h1style\\">Setting up the server:</span>","description":"This page will help you navigate to the right pages, settings, and installations to set up your server correctly. This page is verified by: Laerk Ndreko","source":"@site/docs/Deployment Instructions/SetUp.md","sourceDirName":"Deployment Instructions","slug":"/Deployment Instructions/SetUp","permalink":"/docs/Deployment Instructions/SetUp","draft":false,"unlisted":false,"editUrl":"https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io/edit/documentation/docs/Deployment Instructions/SetUp.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Deployment Docs","permalink":"/docs/category/deployment-docs"}}');var r=s(4848),t=s(8453);const l={},o="Setting up the server:",c={},a=[{value:'<span class="h2style">Initial Navigation</span>',id:"initial-navigation",level:2},{value:'<span class="h2style">Server Settings</span>',id:"server-settings",level:2},{value:'<span class="h2style">Firewall Settings</span>',id:"firewall-settings",level:2},{value:'<span class="h2style">SSH and Terminal Instructions</span>',id:"ssh-and-terminal-instructions",level:2},{value:'<span class="h2style">SSH-Keygen &amp; Repo Instructions</span>',id:"ssh-keygen--repo-instructions",level:2}];function d(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"setting-up-the-server",children:(0,r.jsx)("span",{class:"h1style",children:"Setting up the server:"})})}),"\n",(0,r.jsxs)(e.p,{children:["This page will help you navigate to the right pages, settings, and installations to set up your server correctly. This page is verified by: ",(0,r.jsx)(e.em,{children:"Laerk Ndreko"})]}),"\n",(0,r.jsx)(e.h2,{id:"initial-navigation",children:(0,r.jsx)("span",{class:"h2style",children:"Initial Navigation"})}),"\n",(0,r.jsxs)(e.p,{children:["To start, navigate to ",(0,r.jsx)(e.strong,{children:"console.cloud.com"})," using an appropriate BU or other authorized account."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["If you are given access to the project, you should be able to see ",(0,r.jsx)(e.strong,{children:'"empirica-fall-2024"'}),".","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"If this is not the case, please contact a team lead or supervisor of the research to access."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["On the top-left-hand side, navigate to the three bars, hover over ",(0,r.jsx)(e.strong,{children:"Compute Engine"}),", and select ",(0,r.jsx)(e.strong,{children:"VM Instances"}),"."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"server-settings",children:(0,r.jsx)("span",{class:"h2style",children:"Server Settings"})}),"\n",(0,r.jsxs)(e.p,{children:["Now, navigate to ",(0,r.jsx)(e.strong,{children:'"Create Instance"'}),". Select ",(0,r.jsx)(e.strong,{children:'"CREATE VM FROM..."'})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Select ",(0,r.jsx)(e.strong,{children:'"Marketplace"'})," and search for ",(0,r.jsx)(e.strong,{children:'"Ubuntu 22.04 LTS (Jammy)"'}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["It is ",(0,r.jsx)(e.strong,{children:"IMPORTANT"})," that you select this version and not the ",(0,r.jsx)(e.strong,{children:"Pro"})," version."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Launch the virtual operating system."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Now rename the server to ",(0,r.jsx)(e.strong,{children:'"(yourname)-h2h-server"'}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["There is no requirement to what you name your server however it is easy to keep track of:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"who: started the server."}),"\n",(0,r.jsx)(e.li,{children:"what: the server will host."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Once that is done, ensure that your server is selected to run with ",(0,r.jsx)(e.strong,{children:'"E2"'})," under the ",(0,r.jsx)(e.strong,{children:'"Machine Configuration"'})," section."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Important"})," - under ",(0,r.jsx)(e.strong,{children:"Machine type"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["select ",(0,r.jsx)(e.strong,{children:"High CPU"})]}),"\n",(0,r.jsxs)(e.li,{children:["then select ",(0,r.jsx)(e.strong,{children:"e2-highcpu-8"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:'NOTE: If you did this right, the monthly estimate should be "$145.45"'}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Next, under ",(0,r.jsx)(e.strong,{children:"Identity and API access - Access scopes"})," select ",(0,r.jsx)(e.strong,{children:"Allow full access to all Cloud APIs"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Next, under ",(0,r.jsx)(e.strong,{children:"Firewall"}),", select both ",(0,r.jsx)(e.strong,{children:"Allow HTTP traffic"})," AND ",(0,r.jsx)(e.strong,{children:"Allow HTTPS traffic"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ALL DONE HERE!"}),' Now select "CREATE".']}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Wait for the server to be created and then move on to the next steps."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"firewall-settings",children:(0,r.jsx)("span",{class:"h2style",children:"Firewall Settings"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["At the top of the page, search for and click ",(0,r.jsx)(e.strong,{children:'"Firewall"'}),". Create a new firewall rule.","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:['Name it "(yourname)-http-allowall".',"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'Enter "Allow all incoming connections to (yourname)\'s machines." in the description.'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Turn on logs."}),"\n",(0,r.jsxs)(e.li,{children:['Enter "(yourname)-http-server" in ',(0,r.jsx)(e.strong,{children:"Target tags"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:['Enter "0.0.0.0/0" in ',(0,r.jsx)(e.strong,{children:"Source IPV4 Ranges"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["Under ",(0,r.jsx)(e.strong,{children:"Protocols and ports"}),", under ",(0,r.jsx)(e.strong,{children:"Specified protocols and ports"}),", under ",(0,r.jsx)(e.strong,{children:"BOTH TCP and UDP"}),' enter "80, 443, 8000".']}),"\n",(0,r.jsx)(e.li,{children:"Create!"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Navigate back to your vm machine, select it and click edit.","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:['Under both "Labels" and "Network Tags", enter ',(0,r.jsx)(e.strong,{children:'"(yourname)-http-server"'}),", and click save."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"ssh-and-terminal-instructions",children:(0,r.jsx)("span",{class:"h2style",children:"SSH and Terminal Instructions"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Now we have to enter the SSH terminal and install the necessary packages."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"For this to work ensure that any settings on your device, allow pop-ups (including disabling any ad-blockers)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:'There should be a button labeled "SSH" at your VM Machine, select that and you should have a terminal pop up on your screen.'}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Once that is loaded, now we have to install our libraries/packages for this to work. For that to happen we need to initialize an environment."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["We will be using Miniconda. Copy and paste ",(0,r.jsx)(e.code,{children:"wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"})," into your terminal and press enter."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Enter the command ",(0,r.jsx)(e.code,{children:"bash Miniconda3-latest-Linux-x86_64.sh"})," and hit enter."]}),"\n",(0,r.jsx)(e.li,{children:"Now your terminal should be going through Miniconda's terms and conditions (to shortcut this press q)."}),"\n",(0,r.jsx)(e.li,{children:'Follow all instructions and select "yes" when prompted to.'}),"\n",(0,r.jsxs)(e.li,{children:["If the terminal asks for a folder location, you may hit ",(0,r.jsx)(e.strong,{children:"Enter"})," or select a folder yourself."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Once Miniconda is downloaded, enter ",(0,r.jsx)(e.code,{children:"source ~/.bashrc"}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'You should see a "(base)" environment to the left of your terminal line, if this appears you have taken all of the correct steps!'}),"\n",(0,r.jsxs)(e.li,{children:["We now have to create and activate our environment, copy and paste these commands into your terminal:","\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'conda create --name empirica_env python=3.9\nconda activate empirica_env\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash\n\\. "$HOME/.nvm/nvm.sh"\nnvm install 22\nconda install jupyterlab\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"You may give your environment another name as well."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Once those packages are installed, now install Caddy & Empirica:","\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl\ncurl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg\ncurl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list\nsudo apt update\nsudo apt install caddy\ncurl -fsS https://install.empirica.dev | sh\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Now you should have a Caddyfile, we will edit it in vim:",(0,r.jsx)(e.code,{children:"sudo vi /etc/caddy/Caddyfile"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"IMPORTANT COMMANDS FOR VIM:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:'"i" to insert/edit text'}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:'"Esc" to stop inserting/editing'}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:'":" to enter "quit" mode'}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:'"q!" to quit without saving changes'}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:'"wq!" to quit and save changes'}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"In your Caddyfile, comment all code there out, and at the very top of the file insert:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:":80 { \n  reverse_proxy :3000 \n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Quit and save changes!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"ssh-keygen--repo-instructions",children:(0,r.jsx)("span",{class:"h2style",children:"SSH-Keygen & Repo Instructions"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Run ",(0,r.jsx)(e.code,{children:"ssh-keygen"}),".","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"You can pick and choose your own ssh-key password & location to store your ssh-key information."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Run ",(0,r.jsx)(e.code,{children:"cat ~/.ssh/id_rsa.pub"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"NOTE:"})," do not EVER print your private ssh-key!!!"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Copy your public key and go to your Github account.","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Go to your Github profile, and go to settings."}),"\n",(0,r.jsx)(e.li,{children:'Navigate to SSH and GPG keys, click "New SSH Key".'}),"\n",(0,r.jsx)(e.li,{children:'Name your key "gcp instance empirica game"'}),"\n",(0,r.jsxs)(e.li,{children:["Double-check that your key is an ",(0,r.jsx)(e.strong,{children:"authentication key"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Now, go to the H2H repo, and clone using SSH. Copy and paste that into your terminal!"}),"\n",(0,r.jsxs)(e.li,{children:["Make sure ",(0,r.jsx)(e.code,{children:"git clone"})," is in front of your pasted link before you hit enter!"]}),"\n",(0,r.jsxs)(e.li,{children:["Now cd into your repository and enter ",(0,r.jsx)(e.code,{children:"cd client && npm i && cd ../server/ && npm i && cd ../ && empirica"}),".","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Once your build is created, hit ",(0,r.jsx)(e.code,{children:"Ctrl"})," + ",(0,r.jsx)(e.code,{children:"C"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Enter ",(0,r.jsx)(e.code,{children:"empirica bundle"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:['Move the newly created "tar.zst" file back into your home directory (use ',(0,r.jsx)(e.code,{children:"mv"}),")."]}),"\n",(0,r.jsxs)(e.li,{children:["Now do ",(0,r.jsx)(e.code,{children:"empirica serve < tar.zst filename >"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["Your server will be running!","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["To remove the tajriba.json local file and retry your build, run ",(0,r.jsx)(e.code,{children:"rm .empirica/local/*"})," first."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h1,{id:"running-the-server-in-a-browser",children:(0,r.jsx)("span",{class:"h2style",children:"Running the server in a browser:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Once your server is running, return to your GCP instance."}),"\n",(0,r.jsx)(e.li,{children:"Click on its external IP, this should take you to a new tab."}),"\n",(0,r.jsxs)(e.li,{children:["In the URL bar, ensure that your URL begins with ",(0,r.jsx)(e.strong,{children:"http://"})," and ends in either ",(0,r.jsx)(e.strong,{children:":80"})," or ",(0,r.jsx)(e.strong,{children:":80/admin"}),".","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["The admin username is ",(0,r.jsx)(e.strong,{children:'"admin"'}),"."]}),"\n",(0,r.jsx)(e.li,{children:"To access the admin password, contact the research team."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Now, you should be able to run experiments on your IP's admin page, players can join by entering your machine's external IP into a browser."}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h1,{id:"happy-experimenting",children:(0,r.jsx)("span",{class:"h2style",children:"Happy Experimenting!"})}),"\n",(0,r.jsx)(e.hr,{})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);