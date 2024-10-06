"use strict";(self.webpackChunkneuroreality_edu=self.webpackChunkneuroreality_edu||[]).push([[1093],{5680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>y});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(t),g=r,y=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return t?n.createElement(y,o(o({ref:a},m),{},{components:t})):n.createElement(y,o({ref:a},m))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6982:(e,a,t)=>{t.d(a,{A:()=>r});var n=t(6540);const r=function(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},1931:(e,a,t)=>{t.d(a,{A:()=>d});var n=t(6540),r=t(8555);const i=function(){const e=(0,n.useContext)(r.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=t(53);const l="tabItem_vU9c",s="tabItemActive_cw6a";const d=function(e){const{lazy:a,block:t,defaultValue:r,values:d,groupId:m,className:p}=e,c=n.Children.toArray(e.children),g=d??c.map((e=>({value:e.props.value,label:e.props.label}))),y=r??c.find((e=>e.props.default))?.props.value,{tabGroupChoices:u,setTabGroupChoices:h}=i(),[v,N]=(0,n.useState)(y),f=[];if(null!=m){const e=u[m];null!=e&&e!==v&&g.some((a=>a.value===e))&&N(e)}const b=e=>{const a=e.currentTarget,t=f.indexOf(a),n=g[t].value;N(n),null!=m&&(h(m,n),setTimeout((()=>{(function(e){const{top:a,left:t,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:o}=window;return a>=0&&r<=o&&n<=i&&t>=0})(a)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((()=>a.classList.remove(s)),2e3))}),150))},w=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=f.indexOf(e.target)+1;a=f[t]||f[0];break}case"ArrowLeft":{const t=f.indexOf(e.target)-1;a=f[t]||f[f.length-1];break}}a?.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},p)},g.map((e=>{let{value:a,label:t}=e;return n.createElement("li",{role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,className:(0,o.A)("tabs__item",l,{"tabs__item--active":v===a}),key:a,ref:e=>f.push(e),onKeyDown:w,onFocus:b,onClick:b},t??a)}))),a?(0,n.cloneElement)(c.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},c.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==v})))))}},8555:(e,a,t)=>{t.d(a,{A:()=>n});const n=(0,t(6540).createContext)(void 0)},9410:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=t(8168),r=(t(6540),t(5680)),i=t(1931),o=t(6982);const l={sidebar_position:3},s=void 0,d={unversionedId:"Robotic-Wikis/Panda-Arm/Running the Files",id:"Robotic-Wikis/Panda-Arm/Running the Files",isDocsHomePage:!1,title:"Running the Files",description:"1. The Config File",source:"@site/docs/Robotic-Wikis/Panda-Arm/Running the Files.md",sourceDirName:"Robotic-Wikis/Panda-Arm",slug:"/Robotic-Wikis/Panda-Arm/Running the Files",permalink:"/HFI-wiki/docs/Robotic-Wikis/Panda-Arm/Running the Files",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Robotic-Wikis/Panda-Arm/Running the Files.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/HFI-wiki/docs/Robotic-Wikis/Panda-Arm/Getting Started"},next:{title:"Communication Data",permalink:"/HFI-wiki/docs/Robotic-Wikis/Panda-Arm/Communication Data"}},m=[{value:"1. The Config File",id:"1-the-config-file",children:[]},{value:"2. The Driver File",id:"2-the-driver-file",children:[]},{value:"3. The Keyboard Teleoperation File",id:"3-the-keyboard-teleoperation-file",children:[]}],p={toc:m},c="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"1-the-config-file"},"1. The Config File"),(0,r.yg)("p",null,"The config is a .yaml file which the driver uses to configure the robot and its motions.The description of its contents are explained below."),(0,r.yg)(i.A,{groupId:"config-panda-yaml",mdxType:"Tabs"},(0,r.yg)(o.A,{value:"connection",label:"Connection Configs",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"IP: # The IPv4 address of the Robot (Only necessary if using the physical robot)\nusername: # The user name for connecting to the robot (default is admin)\npassword: # The password for the given username to connect to the robot (default is admin)\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"If configurations such as safety boundaries are modified for a certain user, it needs to be ensured that the relevant user's name is password is set before the connection to the robot is established.")))),(0,r.yg)(o.A,{value:"modes",label:"Mode Configs",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'mode: #Desired Mode from valid_modes\nvalid_modes: ["default", "sim", "test"]\n\n# "default" mode refers to using robot at its full capablity\n# "sim"     mode refers to using simulation\n# "test"    mode refers to using the robot at a lower speed\n')),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Except for default, not all modes are available for each controller. Please refer to the individual controller's documentation for verification if the given controller is supported in the desired mode. "))),(0,r.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"DO NOT modify the valid_modes values. There is an assertion checker in ",(0,r.yg)("em",{parentName:"p"},"utilities.py")," that verifies if the desired mode is a valid mode. ")))),(0,r.yg)(o.A,{value:"controller",label:"Controller Configs",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'controller: #Desired controller from valid_controllers\nvalid_controllers: ["null_space","QP"]     \n\n# null_space        controller is the null space controller\n# QP                controller is the quadratic programming controller\n')),(0,r.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"DO NOT modify the valid_controllers values. There is an assertion checker in ",(0,r.yg)("em",{parentName:"p"},"utilities.py")," that verifies if the desired controller is a valid controller. ")))),(0,r.yg)(o.A,{value:"topic",label:"Topic Configs",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"topic: #The topic name the driver will subscribe to\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Topic names start with a ",(0,r.yg)("em",{parentName:"p"},'"/"')," and the fist character must be a letter. No special characters are allowed."))))),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"2-the-driver-file"},"2. The Driver File"),(0,r.yg)("p",null,"The driver file subscribes to the topic passed in the ",(0,r.yg)("em",{parentName:"p"},"config.yaml")," file. The message on this topic is the desired pose in the co-ordinate frame of the robot's base-link. The expected message type on this topic is ",(0,r.yg)("strong",{parentName:"p"},"PoseStamped")," which upon subscription is passed to the selected controller to move the robot to the desired pose."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"source ~/ros2_ws/install/setup.bash\nros2 run panda_driver driver.py\n")),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"3-the-keyboard-teleoperation-file"},"3. The Keyboard Teleoperation File"),(0,r.yg)("p",null,"To move the robot around using the keyboard, we have provided the ",(0,r.yg)("em",{parentName:"p"},"teleop.py"),"  file. To run this file, you need to be the sudo user to allow access to keyboard inputs."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo su\nsource /home/<your-username>/.bashrc\nsource /home/<your-username>/ros2_ws/install/setup.bash\nros2 run panda_driver teleop.py\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"You may need to install the ",(0,r.yg)("em",{parentName:"p"},"keyboard")," and ",(0,r.yg)("em",{parentName:"p"},"quaternion")," library if you have not already done so. "),(0,r.yg)("pre",{parentName:"div"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip3 install keyboard\npip3 install pyquaternion\n")))),(0,r.yg)("br",null),(0,r.yg)("p",null,"You may now use the keyboard for teleoperating the robot. The teleoperation key legend is as follows (all with respect to baselink's co-ordinate frame)"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Action"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"w"),(0,r.yg)("td",{parentName:"tr",align:null},"move along +ve x-axis (forward)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x"),(0,r.yg)("td",{parentName:"tr",align:null},"move along -ve x-axis  (back)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},"move along -ve y-axis (left)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"a"),(0,r.yg)("td",{parentName:"tr",align:null},"move along +ve y-axis (right)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q"),(0,r.yg)("td",{parentName:"tr",align:null},"move along +ve z-axis  (up)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"z"),(0,r.yg)("td",{parentName:"tr",align:null},"move along -ve z-axis  (down)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"r"),(0,r.yg)("td",{parentName:"tr",align:null},"positive roll")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"v"),(0,r.yg)("td",{parentName:"tr",align:null},"negative roll")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"t"),(0,r.yg)("td",{parentName:"tr",align:null},"positive pitch")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"b"),(0,r.yg)("td",{parentName:"tr",align:null},"negative pitch")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"y"),(0,r.yg)("td",{parentName:"tr",align:null},"positive yaw")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"n"),(0,r.yg)("td",{parentName:"tr",align:null},"negative yaw")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"s"),(0,r.yg)("td",{parentName:"tr",align:null},"stop execution of teleop node")))),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Order of rotation is Roll, Pitch, Yaw (RPY). However, rotations are not very intuitive to us humans particularly when they are sequential (provided one after the other). The robot may make a very different rotation when a yaw is applied with the roll at 0 degrees vs when the same yaw is applied but the roll being 90 degrees."))),(0,r.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Commands to the robot are sent event if the keyboard teleoperation terminal is not active. "))),(0,r.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"If the robot is asked to reach a position that is outside of its reachable workspace (singularity) it will behave erratically. Usually, in such scenarios, giving an input that is within the workspace of the robot resumes normal behavior. If that does not solve the problem, you may simply restart the driver."))),(0,r.yg)("hr",null),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("h5",{id:"authors"},"Authors"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/s-m-asjad.png"},"Syed Mohammad Asjad")," "),(0,r.yg)("br",null),(0,r.yg)("h5",{id:"issues"},"Issues?"),(0,r.yg)("p",null,"Please report issues to ",(0,r.yg)("em",{parentName:"p"},(0,r.yg)("a",{parentName:"em",href:"mailto:hfisoftware@case.edu"},"hfisoftware@case.edu"))))}g.isMDXComponent=!0},53:(e,a,t)=>{function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}t.d(a,{A:()=>r});const r=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}}}]);