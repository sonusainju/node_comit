(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),a=(n(0),n(469)),i={},c={id:"exercises/browser/ex_38",title:"ex_38",description:"# Exercise 38",source:"@site/../docs/exercises/browser/ex_38.md",permalink:"/node_comit/docs/exercises/browser/ex_38",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_38.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_37",permalink:"/node_comit/docs/exercises/browser/ex_37"},next:{title:"ex_39",permalink:"/node_comit/docs/exercises/browser/ex_39"}},l=[{value:"index.html",id:"indexhtml",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-38"},"Exercise 38"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_38\n  |-- index.html\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Events</title>\n  </head>\n  <body>\n    <div></div>\n    <button id="firstButton">Click Me!!</button>\n    <button id="secondButton">Remove event listener</button>\n    <a href="https://google.com">Link with JavaScript handler</a>\n  </body>\n</html>\n')),Object(a.b)("h2",{id:"indexhtml"},"index.html"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(a.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(a.b)("li",{parentName:"ul"},"Select the div element using ",Object(a.b)("inlineCode",{parentName:"li"},"querySelector")),Object(a.b)("li",{parentName:"ul"},"Refactor the body keypress event handler to show the pressed key and code as div content instead of using the console"),Object(a.b)("li",{parentName:"ul"},"This means that we'll have to remove the console.log call"),Object(a.b)("li",{parentName:"ul"},"Show the text inside the div"),Object(a.b)("li",{parentName:"ul"},"Once you have this feature working add the following styles to the div:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Font size: 20px"),Object(a.b)("li",{parentName:"ul"},"Font Color: red"),Object(a.b)("li",{parentName:"ul"},"Font Family: Arial"),Object(a.b)("li",{parentName:"ul"},"Bottom padding: 20px")))))}s.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(m,c({ref:t},u,{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);