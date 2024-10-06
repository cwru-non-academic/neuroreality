"use strict";(self.webpackChunkneuroreality_edu=self.webpackChunkneuroreality_edu||[]).push([[9395],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,g=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6982:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540);const o=function(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1931:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540),o=n(8555);const r=function(){const e=(0,a.useContext)(o.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(53);const s="tabItem_vU9c",c="tabItemActive_cw6a";const l=function(e){const{lazy:t,block:n,defaultValue:o,values:l,groupId:d,className:p}=e,m=a.Children.toArray(e.children),u=l??m.map((e=>({value:e.props.value,label:e.props.label}))),g=o??m.find((e=>e.props.default))?.props.value,{tabGroupChoices:h,setTabGroupChoices:y}=r(),[b,f]=(0,a.useState)(g),v=[];if(null!=d){const e=h[d];null!=e&&e!==b&&u.some((t=>t.value===e))&&f(e)}const N=e=>{const t=e.currentTarget,n=v.indexOf(t),a=u[n].value;f(a),null!=d&&(y(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&o<=i&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((()=>t.classList.remove(c)),2e3))}),150))},w=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=v.indexOf(e.target)+1;t=v[n]||v[0];break}case"ArrowLeft":{const n=v.indexOf(e.target)-1;t=v[n]||v[v.length-1];break}}t?.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},p)},u.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.A)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:e=>v.push(e),onKeyDown:w,onFocus:N,onClick:N},n??t)}))),t?(0,a.cloneElement)(m.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}},8555:(e,t,n)=>{n.d(t,{A:()=>a});const a=(0,n(6540).createContext)(void 0)},141:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(8168),o=(n(6540),n(5680)),r=n(1931),i=n(6982);const s={sidebar_position:4},c=void 0,l={unversionedId:"Robotic-Wikis/Panda-Arm/Communication Data",id:"Robotic-Wikis/Panda-Arm/Communication Data",isDocsHomePage:!1,title:"Communication Data",description:"1. Data Types",source:"@site/docs/Robotic-Wikis/Panda-Arm/Communication Data.md",sourceDirName:"Robotic-Wikis/Panda-Arm",slug:"/Robotic-Wikis/Panda-Arm/Communication Data",permalink:"/HFI-wiki/docs/Robotic-Wikis/Panda-Arm/Communication Data",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Robotic-Wikis/Panda-Arm/Communication Data.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Running the Files",permalink:"/HFI-wiki/docs/Robotic-Wikis/Panda-Arm/Running the Files"},next:{title:"Introduction",permalink:"/HFI-wiki/docs/Robotic-Wikis/Gimbal/Introduction"}},d=[{value:"1. Data Types",id:"1-data-types",children:[]},{value:"2. Viewing the Data",id:"2-viewing-the-data",children:[]},{value:"3. Recording Data",id:"3-recording-data",children:[]}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"1-data-types"},"1. Data Types"),(0,o.yg)("h4",{id:"a-pose-stamped"},"A. Pose Stamped"),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/PoseStamped.html"},"pose stamped")," message contains the desired location of the robot's end-effector from its base. By default, it is published on the ",(0,o.yg)("inlineCode",{parentName:"p"},"simulation/pose"),"  topic by keyboard teleop node. The robot's driver subscribes to this topic, performs the Inverse Kinematics and updates the robot inside the simulation."),(0,o.yg)("p",null,"The data type consists of the following components"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"- Header\n    it contains the timestamp of the data in seconds and nanoseconds.\n\n- Position\n    it contains the x,y,z displacement from the base in meters.\n\n- Orientation\n    it contains the quaternion(w,x,y,z) for the rotation from the base\n\n")),(0,o.yg)("h4",{id:"b-joint-state"},"B. Joint State"),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html"},"joint state")," message contains the current joint positions of the robot. By default, it is published on the ",(0,o.yg)("em",{parentName:"p"},"panda/jointstate")," by the robot's driver and contains the following components"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"- Header\n    it contains the timestamp of the data in seconds and nanoseconds.\n\n- Position\n    it contains joint angles, in radians, of the robot arm.\n\n")),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"2-viewing-the-data"},"2. Viewing the Data"),(0,o.yg)("p",null,"We can visualize/plot the data in real-time using ",(0,o.yg)("a",{parentName:"p",href:"https://docs.ros.org/en/humble/Concepts/Intermediate/About-RQt.html"},"RQt"),". The data can be printed on the terminal using the following terminal commands."),(0,o.yg)(r.A,{groupId:"ros-topic-echo",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"pose",label:"Pose Stamed",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ros2 topic echo /simulation/pose\n"))),(0,o.yg)(i.A,{value:"jointstate",label:"Joint State",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ros2 topic echo /panda/jointstate\n")))),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"3-recording-data"},"3. Recording Data"),(0,o.yg)("p",null,"Data can be recorded to a ROS2 bag file using the command"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ros2 bag record /simulation/pose /panda/jointstate\n")),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"For the command provided above, you can choose to omit either ",(0,o.yg)("inlineCode",{parentName:"p"},"/simulation/pose")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"/panda/jointstate")," if you do not plan to record both data streams."))),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"A ROS2 bag can be converted to a CSV file using the ",(0,o.yg)("a",{parentName:"p",href:"https://pypi.org/project/rosbags/"},"rosbag")," python package."))),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("h5",{id:"authors"},"Authors"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/s-m-asjad.png"},"Syed Mohammad Asjad")," "),(0,o.yg)("br",null),(0,o.yg)("h5",{id:"issues"},"Issues?"),(0,o.yg)("p",null,"Please report issues to ",(0,o.yg)("em",{parentName:"p"},(0,o.yg)("a",{parentName:"em",href:"mailto:hfisoftware@case.edu"},"hfisoftware@case.edu"))))}u.isMDXComponent=!0},53:(e,t,n)=>{function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{A:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}}}]);