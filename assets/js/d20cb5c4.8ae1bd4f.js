"use strict";(self.webpackChunkneuroreality_edu=self.webpackChunkneuroreality_edu||[]).push([[6756],{5680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>d});var n=o(6540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||a;return o?n.createElement(d,i(i({ref:t},p),{},{components:o})):n.createElement(d,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6982:(e,t,o)=>{o.d(t,{A:()=>r});var n=o(6540);const r=function(e){let{children:t,hidden:o,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:o,className:r},t)}},1931:(e,t,o)=>{o.d(t,{A:()=>c});var n=o(6540),r=o(8555);const a=function(){const e=(0,n.useContext)(r.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=o(53);const s="tabItem_vU9c",l="tabItemActive_cw6a";const c=function(e){const{lazy:t,block:o,defaultValue:r,values:c,groupId:p,className:u}=e,h=n.Children.toArray(e.children),m=c??h.map((e=>({value:e.props.value,label:e.props.label}))),d=r??h.find((e=>e.props.default))?.props.value,{tabGroupChoices:g,setTabGroupChoices:y}=a(),[b,v]=(0,n.useState)(d),f=[];if(null!=p){const e=g[p];null!=e&&e!==b&&m.some((t=>t.value===e))&&v(e)}const w=e=>{const t=e.currentTarget,o=f.indexOf(t),n=m[o].value;v(n),null!=p&&(y(p,n),setTimeout((()=>{(function(e){const{top:t,left:o,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&r<=i&&n<=a&&o>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},k=e=>{let t=null;switch(e.key){case"ArrowRight":{const o=f.indexOf(e.target)+1;t=f[o]||f[0];break}case"ArrowLeft":{const o=f.indexOf(e.target)-1;t=f[o]||f[f.length-1];break}}t?.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":o},u)},m.map((e=>{let{value:t,label:o}=e;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.A)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:e=>f.push(e),onKeyDown:k,onFocus:w,onClick:w},o??t)}))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}},8555:(e,t,o)=>{o.d(t,{A:()=>n});const n=(0,o(6540).createContext)(void 0)},2541:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=o(8168),r=(o(6540),o(5680)),a=o(1931),i=o(6982);const s={sidebar_position:2},l=void 0,c={unversionedId:"Robotic-Wikis/Kinova-Gen3/Getting Started",id:"Robotic-Wikis/Kinova-Gen3/Getting Started",isDocsHomePage:!1,title:"Getting Started",description:"Powered by the Robotics Toolbox",source:"@site/docs/Robotic-Wikis/Kinova-Gen3/Getting Started.md",sourceDirName:"Robotic-Wikis/Kinova-Gen3",slug:"/Robotic-Wikis/Kinova-Gen3/Getting Started",permalink:"/HFI-wiki/docs/Robotic-Wikis/Kinova-Gen3/Getting Started",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Robotic-Wikis/Kinova-Gen3/Getting Started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/HFI-wiki/docs/Robotic-Wikis/Kinova-Gen3/Introduction"},next:{title:"Running the Files",permalink:"/HFI-wiki/docs/Robotic-Wikis/Kinova-Gen3/Running the Files"}},p=[{value:"Requirements",id:"requirements",children:[{value:"1. ROS2 (Humble)",id:"1-ros2-humble",children:[]},{value:"2. Kinova API",id:"2-kinova-api",children:[]},{value:"3. Numerical IK Solver Package",id:"3-numerical-ik-solver-package",children:[]},{value:"4. Peter Corke&#39;s Robotic Toolbox",id:"4-peter-corkes-robotic-toolbox",children:[]},{value:"5. Drake",id:"5-drake",children:[]},{value:"6. Github Repository",id:"6-github-repository",children:[]}]}],u={toc:p},h="wrapper";function m(e){let{components:t,...o}=e;return(0,r.yg)(h,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/petercorke/robotics-toolbox-python"},(0,r.yg)("img",{parentName:"a",src:"https://raw.githubusercontent.com/petercorke/robotics-toolbox-python/master/.github/svg/rtb_powered.min.svg",alt:"Powered by the Robotics Toolbox"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/petercorke/robotics-toolbox-python"},(0,r.yg)("img",{parentName:"a",src:"https://raw.githubusercontent.com/petercorke/robotics-toolbox-python/master/.github/svg/pr_powered.min.svg",alt:"Powered by Python Robotics"}))),(0,r.yg)("h2",{id:"requirements"},"Requirements"),(0,r.yg)("h3",{id:"1-ros2-humble"},"1. ROS2 (Humble)"),(0,r.yg)("p",null,"Please follow the steps listed on the official ROS2 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html"},"documentation")," for installing ROS2 on Ubuntu. "),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"The project has been tested using ROS2 Humble. However, other versions of ROS2 such as Foxy should also work. The only exception may arise because of the simulation and/or when the communication with the robot occurs via ROS2 directly. In such scenario, it is suggested to raise an issue on the official kortex repository ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Kinovarobotics/ros2_kortex"},"here")," "))),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"2-kinova-api"},"2. Kinova API"),(0,r.yg)("p",null,"The Kinova Gen3's API has two modes. A higher level servoing mode and a lower level servoing mode. "),(0,r.yg)("h4",{id:"a-high-level-servoing-mode"},"a) High Level Servoing Mode"),(0,r.yg)("p",null,"The high level mode is the default mode at bootup and users connect to the base through the API, sending command inputs. The base routes commands to the actuators, and manages a 1 kHz control loop. We shall be using this mode primarily as the project focuses on sending velocity commands to the robot. In high level servoing mode, each API call takes 25 ms to execute which means that our control loop runs no faster than 20Hz."),(0,r.yg)("p",null,"The project uses the Python version of the API to handle communications in this servoing mode. To install simply"),(0,r.yg)("p",null,"i)  Download the python .whl ",(0,r.yg)("a",{parentName:"p",href:"https://artifactory.kinovaapps.com/ui/native/generic-public/kortex/API/2.6.0/kortex_api-2.6.0.post3-py3-none-any.whl"},"file")," "),(0,r.yg)("p",null,"ii) Install the package using the following command"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install <path_to_whl>\n")),(0,r.yg)("h4",{id:"b-low-level-servoing-mode"},"b) Low Level Servoing Mode"),(0,r.yg)("p",null,"The low level servoing mode allows the user to communicate with the base at 1kHz but now it is our responsibility to mantain the 1kHz control loop. From reviewing open GitHub issues in the Kortex repository, there seems to be no direct method of performing velocity control in this mode. The challenge being when a velocity of 0 degrees/second is sent to any of the joints, the robot drifts because of the gravity vector. In the older versions of the API, there was no mechanism to counteract the fall; however, newer version of the API resorts to raising a ",(0,r.yg)("em",{parentName:"p"},"Joint Fault")," error when this happens."),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Joint Fault is just the robot's way of saying ",(0,r.yg)("em",{parentName:"p"},'" I did something that I was not supposed to "'),". Whilst using velocity control in the low level servoing mode, this is caused by the joints obtaining a velocity greater than 0 degrees/second due to the force of gravity when it was commanded to stay at 0 degrees/second. "))),(0,r.yg)("br",null),(0,r.yg)("p",null,"The API suggests sending small increments in positions at 1kHz to mimic the behaviour of velocity control. This can be achieved using the API directly, however, we utilize a ROS2 based controller for this project. To install relevant dependencies"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ros-$ROS_DISTRO-kortex-bringup\n")),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"3-numerical-ik-solver-package"},"3. Numerical IK Solver Package"),(0,r.yg)("p",null,"We use ",(0,r.yg)("em",{parentName:"p"},"Klampt")," to perform our Numerical IK solutions. Klampt is Kris Hauser's Locomotion and Manipulation Planning Toolbox whose development began in 2009 at Indiana University (Currently mantained by the Intelligent Motion Laboratory at University of Illinois Urbana-Champaign). It uses Newton-Raphson's method to estimate the joint angles whilst using the previous joint positions of the robot as its initial guess. The solver shall return the solution if one is found, however, it sometimes does not return a solution even if one exists because of local minimals and constraints. This issue is discussed in more detail in the controllers sections."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip3 install Klampt  \n")),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"4-peter-corkes-robotic-toolbox"},"4. Peter Corke's Robotic Toolbox"),(0,r.yg)("p",null,"One of the go to toolboxes for roboticists, Peter Corke's Robotic Toolbox serves as a vital component in our project too. If you have not already, I would suggest checking out their tutorial Jupyter notebooks ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/petercorke/robotics-toolbox-python"},"here"),". "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip3 install roboticstoolbox-python\npip3 install spatialmath-python\n")),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"5-drake"},"5. Drake"),(0,r.yg)("p",null,"Drake ",(0,r.yg)("em",{parentName:"p"},"(or the Dragon)")," is a C++ toolbox developed by the Robot Locomotion Group at MIT Computer Science and Artificial Intelligence Lab (CSAIL). The core development is now taking place at Toyota Research Institute. We shall use the Python bindings of Drake for the purpose of using its numerical solvers/optimization tools in manipulation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip3 install drake\n")),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"6-github-repository"},"6. Github Repository"),(0,r.yg)("p",null,"We are now ready to clone the repository. Clone your desired repository inside your ROS2 workspace. "),(0,r.yg)(a.A,{groupId:"github-repo-types",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"cwru",label:"Case Western Reserve University Private Repository",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:cwru-non-academic/HFI_Robotics_Kinova.git\n"))),(0,r.yg)(i.A,{value:"public-facing",label:"Public Access Repository",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# This repository is still under development\n")))),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("h5",{id:"references"},"References"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/Kinovarobotics/kortex/blob/master/linked_md/cpp_servoing_modes.md"},"Kinova Gen3 Servoing Modes")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://motion.cs.illinois.edu/software/klampt/latest/pyklampt_docs/"},"Klampt")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/petercorke/robotics-toolbox-python"},"Peter Corke's Robotic Toolbox")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://drake.mit.edu"},"Drake")," "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'@misc{drake,\n author = "Russ Tedrake and the Drake Development Team",\n title = "Drake: Model-based design and verification for robotics",\n year = 2019,\n url = "https://drake.mit.edu"\n}\n')),(0,r.yg)("br",null),(0,r.yg)("h5",{id:"authors"},"Authors"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/s-m-asjad.png"},"Syed Mohammad Asjad")," "),(0,r.yg)("br",null),(0,r.yg)("h5",{id:"issues"},"Issues?"),(0,r.yg)("p",null,"Please report issues to ",(0,r.yg)("em",{parentName:"p"},(0,r.yg)("a",{parentName:"em",href:"mailto:hfisoftware@case.edu"},"hfisoftware@case.edu"))))}m.isMDXComponent=!0},53:(e,t,o)=>{function n(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}o.d(t,{A:()=>r});const r=function(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}}}]);