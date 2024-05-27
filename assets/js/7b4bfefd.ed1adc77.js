"use strict";(self.webpackChunkneuroreality_edu=self.webpackChunkneuroreality_edu||[]).push([[399],{5680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>m});var n=i(6540);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(i),d=o,m=g["".concat(s,".").concat(d)]||g[d]||y[d]||a;return i?n.createElement(m,r(r({ref:t},c),{},{components:i})):n.createElement(m,r({ref:t},c))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4820:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=i(8168),o=(i(6540),i(5680));const a={sidebar_position:1,title:"Setting Up the Project",description:"This wiki describes how to set Unity for using the VR Teleoperation/Callibration Interface.",author:"Asjad",tags:["Unity Callibration","Unity Teleoperation"],hide_table_of_contents:!1},r=void 0,l={unversionedId:"VAMR-Wikis/Callibration-and-Teleop-Unity-Interface/Setting-Up",id:"VAMR-Wikis/Callibration-and-Teleop-Unity-Interface/Setting-Up",isDocsHomePage:!1,title:"Setting Up the Project",description:"This wiki describes how to set Unity for using the VR Teleoperation/Callibration Interface.",source:"@site/docs/VAMR-Wikis/Callibration-and-Teleop-Unity-Interface/Setting-Up.md",sourceDirName:"VAMR-Wikis/Callibration-and-Teleop-Unity-Interface",slug:"/VAMR-Wikis/Callibration-and-Teleop-Unity-Interface/Setting-Up",permalink:"/HFI-wiki/docs/VAMR-Wikis/Callibration-and-Teleop-Unity-Interface/Setting-Up",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/VAMR-Wikis/Callibration-and-Teleop-Unity-Interface/Setting-Up.md",tags:[{label:"Unity Callibration",permalink:"/HFI-wiki/docs/tags/unity-callibration"},{label:"Unity Teleoperation",permalink:"/HFI-wiki/docs/tags/unity-teleoperation"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Setting Up the Project",description:"This wiki describes how to set Unity for using the VR Teleoperation/Callibration Interface.",author:"Asjad",tags:["Unity Callibration","Unity Teleoperation"],hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Welcome to the VAMR Wikis",permalink:"/HFI-wiki/docs/VAMR-Wikis/introduction"},next:{title:"Welcome to the Communication Wikis",permalink:"/HFI-wiki/docs/Communications-Wikis/introduction"}},s=[{value:"Install Git LFS",id:"install-git-lfs",children:[]},{value:"Clone the Repository",id:"clone-the-repository",children:[]},{value:"Modify your GLOBAL .gitconfig",id:"modify-your-global-gitconfig",children:[]},{value:"Opening the Project",id:"opening-the-project",children:[]},{value:"Adding pre and post-commit scripts",id:"adding-pre-and-post-commit-scripts",children:[]},{value:"Ready to Roll",id:"ready-to-roll",children:[]}],p={toc:s},c="wrapper";function g(e){let{components:t,...i}=e;return(0,o.yg)(c,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"install-git-lfs"},"Install Git LFS"),(0,o.yg)("p",null,"Prior to cloning this repository, we need to install Git LFS. This can be accomplished by following the steps listed ",(0,o.yg)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage"},"here")),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,o.yg)("p",null,"You may now clone the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cwru-non-academic/HFI_VR_CalibrationTeleoperationUnity/tree/XRtistryONR"},"github repository")," for the teleop and callibration interface for Unity."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:cwru-non-academic/HFI_VR_CalibrationTeleoperationUnity.git\n")),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"You may need to request access if you already do not have it."))),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"modify-your-global-gitconfig"},"Modify your GLOBAL .gitconfig"),(0,o.yg)("p",null,'Not everyone on your team may have the same path to UnityYAMLMerge (i.e. diffrent operating systems or install locations). Because of this, we suggest you modify your local config to define the "unityyamlmerge" merge tool that this repository\'s .gitconfig points to. To do this:'),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Find and open your local config file inside of the hidden git folder ",(0,o.yg)("inlineCode",{parentName:"p"},".git\\config"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Identify your version of unity (e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"2020.3.21f1"),"). This will replace the word ",(0,o.yg)("inlineCode",{parentName:"p"},"VERSION")," in the paths commented below depending on your OS")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add the following text to the bottom of the file, subbing in the unitymergetool path:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'[mergetool "unityyamlmerge"]\n    trustExitCode = false\n    #Replace <path to UnityYAMLMerge> in the next line with the following default locations (may be diffrent depending on your Unity installation location)\n    # Installs using the Unity Hub (Default):\n    # Win: C:\\\\Program Files\\\\Unity\\\\Hub\\\\Editor\\\\VERSION\\\\Editor\\\\Data\\\\Tools\\\\UnityYAMLMerge.exe\n    # MacOS: /Applications/Unity/Hub/Editor/VERSION/Unity.app/Contents/Tools/UnityYAMLMerge\n    # Linux: /home/USERNAME/Unity/Hub/Editor/VERSION/Editor/Data/Tools/UnityYAMLMerge\n    cmd = \'<path to UnityYAMLMerge>\' merge -p "$BASE" "$REMOTE" "$LOCAL" "$MERGED"\n')))),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"opening-the-project"},"Opening the Project"),(0,o.yg)("p",null,"This project was created using ",(0,o.yg)("inlineCode",{parentName:"p"},"2020.3.17f1"),". When you open this project in Unity, Unity may say that it needs to upgrade the project. Given this is a bare-bones project, this is a safe action and you may allow Unity to continue. "),(0,o.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"pro-tip")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"Just like wolf hunt in pairs, it is a great idea for your team to be using the same version of Unity."))),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"adding-pre-and-post-commit-scripts"},"Adding pre and post-commit scripts"),(0,o.yg)("p",null,"Download the scripts from the link below and paste them into ",(0,o.yg)("inlineCode",{parentName:"p"},"<your_repo>/.git/hooks/")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Pre-commit: ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/NYUGameCenter/Unity-Git-Config/blob/master/pre-commit"},"https://github.com/NYUGameCenter/Unity-Git-Config/blob/master/pre-commit")),(0,o.yg)("li",{parentName:"ul"},"Post-commit: ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/NYUGameCenter/Unity-Git-Config/blob/master/post-merge"},"https://github.com/NYUGameCenter/Unity-Git-Config/blob/master/post-merge"))),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"ready-to-roll"},"Ready to Roll"),(0,o.yg)("p",null,"If you are starting a new project you can start working now."),(0,o.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"if you are adding version control to an old project, these steps may be useful:"),(0,o.yg)("ol",{parentName:"div"},(0,o.yg)("li",{parentName:"ol"},"Paste your project files into the current repository on your local machine. "),(0,o.yg)("li",{parentName:"ol"},"Open the project on the target unity version, so all the files are modified as necessary. "),(0,o.yg)("li",{parentName:"ol"},"If you had unity collab or plastic, disable it now."),(0,o.yg)("li",{parentName:"ol"},"Save your project and close unity."),(0,o.yg)("li",{parentName:"ol"},"delete left over files from plastic or collab like x.meta.private or y.meta.private.meta (some files may be hidden, delete them by enabling the option to view hidden files)."),(0,o.yg)("li",{parentName:"ol"},"Commit and Push."),(0,o.yg)("li",{parentName:"ol"},"If you are having issues with .meta files check and modify your gitignore or make sure there are no empty folders. ")))),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("h5",{id:"authors"},"Authors"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/lemfn64.png"},"Luis Mesias Flores")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/s-m-asjad.png"},"Syed Mohammad Asjad")," ",(0,o.yg)("em",{parentName:"p"},"(editor)")),(0,o.yg)("br",null),(0,o.yg)("h5",{id:"issues"},"Issues?"),(0,o.yg)("p",null,"Please report issues to ",(0,o.yg)("em",{parentName:"p"},(0,o.yg)("a",{parentName:"em",href:"mailto:hfisoftware@case.edu"},"hfisoftware@case.edu"))))}g.isMDXComponent=!0}}]);