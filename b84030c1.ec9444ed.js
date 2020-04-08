(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{386:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),l=n(9),a=(n(0),n(469)),o={},c={id:"exercises/css/ex_5",title:"ex_5",description:"# Exercise 5",source:"@site/../docs/exercises/css/ex_5.md",permalink:"/node_comit/docs/exercises/css/ex_5",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/css/ex_5.md",lastUpdatedBy:"prma85",lastUpdatedAt:1581039829,sidebar:"exercises",previous:{title:"ex_4",permalink:"/node_comit/docs/exercises/css/ex_4"},next:{title:"ex_6",permalink:"/node_comit/docs/exercises/css/ex_6"}},i=[],s={rightToc:i};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-5"},"Exercise 5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Inside your git repository create a index5.html file"),Object(a.b)("li",{parentName:"ul"},"Copy and paste the following HTML code:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <title>CSS Selectors</title>\n  </head>\n  <body>\n    <nav>\n      <a href="http://facebook.com" target="_blank">Facebook</a>\n      <a href="http://google.com" target="_blank">Google</a>\n      <a href="http://yahoo.com" target="_blank">Yahoo</a>\n    </nav>\n    <header>\n      <h1>CSS Selectors site</h1>\n      <hr />\n    </header>\n    <article>\n      <section>\n        <h1>Great news, we\'re learning CSS selectors!!</h1>\n        <ol>\n          <li>ID Selector</li>\n          <li>Class Selector</li>\n          <li>Shared CSS code between selectors</li>\n          <li>Universal selector</li>\n          <li>Attribute selectors</li>\n          <li>Pseudo-classes selector</li>\n          <li>Descendant selectors</li>\n          <li>Child selectors</li>\n          <li>Pseudo-elements</li>\n          <li>Adjacent sibling combinator</li>\n          <li>General sibling combinator</li>\n        </ol>\n        <foot>\n          <p>News footer</p>\n          <p>News footer</p>\n        </foot>\n      </section>\n    </article>\n    <foot>\n      <hr />\n      <p>Site footer</p>\n      <hr />\n    </foot>\n  </body>\n</html>\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"After applying all styles the document must look like this:")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"../../../resources/exercises/css/results/ex_5.png",alt:"Ex 5"}))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"../../../resources/exercises/css/results/ex_5b.png",alt:"Ex 5"}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add a style element"),Object(a.b)("li",{parentName:"ul"},"Use the link pseudo-classes selector to make the links text red"),Object(a.b)("li",{parentName:"ul"},"Use the hover pseudo-classes selector to make the links text orange"),Object(a.b)("li",{parentName:"ul"},"Use the visited pseudo-classes selector to make the links text purple"),Object(a.b)("li",{parentName:"ul"},"Use the descendant selector to select the h1 element inside the header and make the text lime"),Object(a.b)("li",{parentName:"ul"},"Use the child selector to select the h1 that is direct child of the section element and make the text coral"),Object(a.b)("li",{parentName:"ul"},"Use the pseudo element selector to make the first letter of each h1 element black"),Object(a.b)("li",{parentName:"ul"},"Use the adjacent sibling combinator selector to select the paragraph that are siblings and make the second paragraph darkgoldenrod"),Object(a.b)("li",{parentName:"ul"},"Use the general sibling combinator to select all the li elements and make them deeppink. The first li element must remain black")))}p.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?l.a.createElement(d,c({ref:t},s,{components:n})):l.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);