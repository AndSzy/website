(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(140),c=a(137),o=a(129),s=a(138),i=a(150),u=a(149),d=a(143),m=a(2),h=a(131),f=a.n(h),b=a(130),v=()=>null,p=a(154),g=a.n(p),k=a(100),E=a.n(k);const _=()=>l.a.createElement("span",{className:f()(E.a.toggle,E.a.moon)}),y=()=>l.a.createElement("span",{className:f()(E.a.toggle,E.a.sun)});var O=function(e){const{isClient:t}=Object(o.a)();return l.a.createElement(g.a,Object(m.a)({disabled:!t,icons:{checked:l.a.createElement(_,null),unchecked:l.a.createElement(y,null)}},e))},N=a(144),w=a(145);var j=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},C=a(15);const T=()=>({scrollX:C.a.canUseDOM?window.pageXOffset:0,scrollY:C.a.canUseDOM?window.pageYOffset:0});var S=(e,t=[])=>{const[a,l]=Object(n.useState)(T()),r=()=>{const t=T();l(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r,{passive:!0})),t),a};var M=e=>{const[t,a]=Object(n.useState)(!0),[l,r]=Object(n.useState)(!1),[c,o]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(w.b)(),[m,h]=j(d.hash);return S(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(l)return r(!1),a(!1),void o(t);const n=document.documentElement.scrollHeight-s,i=window.innerHeight;c&&t>=c?a(!1):t+i<n&&a(!0),o(t)},[c,s]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&r(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},x=a(146),L=a(147),B=a(101),P=a.n(B);function D({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:r,activeClassName:c="navbar__link--active",prependBaseUrlToHref:o,...i}){const u=Object(s.a)(a),d=Object(s.a)(e),h=Object(s.a)(n,!0);return l.a.createElement(b.a,Object(m.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:o?h:n}:{isNavLink:!0,activeClassName:c,to:u,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(d)}:null},i),r)}function X({items:e,position:t,className:a,...n}){const r=(e,t=!1)=>f()({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?l.a.createElement("div",{className:f()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},l.a.createElement(D,Object(m.a)({className:r(a)},n,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),n.label),l.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>l.a.createElement("li",{key:a},l.a.createElement(D,Object(m.a)({activeClassName:"dropdown__link--active",className:r(e,!0)},t)))))):l.a.createElement(D,Object(m.a)({className:r(a)},n))}function F({items:e,position:t,className:a,...n}){const r=(e,t=!1)=>f()("menu__link",{"menu__link--sublist":t},e);return e?l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(D,Object(m.a)({className:r(a,!0)},n),n.label),l.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>l.a.createElement("li",{className:"menu__list-item",key:a},l.a.createElement(D,Object(m.a)({activeClassName:"menu__link--active",className:r(e)},t,{onClick:n.onClick})))))):l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(D,Object(m.a)({className:r(a)},n)))}var I=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:r=!1}},isClient:c}=Object(o.a)(),[s,i]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:h,setLightTheme:p,setDarkTheme:g}=Object(N.a)(),{navbarRef:k,isNavbarVisible:E}=M(a),{logoLink:_,logoLinkProps:y,logoImageUrl:w,logoAlt:j}=Object(L.a)();Object(x.a)(s);const C=Object(n.useCallback)(()=>{i(!0)},[i]),T=Object(n.useCallback)(()=>{i(!1)},[i]),S=Object(n.useCallback)(e=>e.target.checked?g():p(),[p,g]);return l.a.createElement("nav",{ref:k,className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[P.a.navbarHideable]:a,[P.a.navbarHidden]:!E})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:C,onKeyDown:C},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(b.a,Object(m.a)({className:"navbar__brand",to:_},y),null!=w&&l.a.createElement("img",{key:c,className:"navbar__logo",src:w,alt:j}),null!=e&&l.a.createElement("strong",{className:f()("navbar__title",{[P.a.hideLogoText]:u})},e)),t.filter(e=>"left"===e.position).map((e,t)=>l.a.createElement(X,Object(m.a)({},e,{key:t})))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>l.a.createElement(X,Object(m.a)({},e,{key:t}))),!r&&l.a.createElement(O,{className:P.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:h,onChange:S}),l.a.createElement(v,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:T}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(b.a,Object(m.a)({className:"navbar__brand",onClick:T,to:_},y),null!=w&&l.a.createElement("img",{key:c,className:"navbar__logo",src:w,alt:j}),null!=e&&l.a.createElement("strong",{className:"navbar__title"},e)),!r&&s&&l.a.createElement(O,{"aria-label":"Dark mode toggle in sidebar",checked:h,onChange:S})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>l.a.createElement(F,Object(m.a)({},e,{onClick:T,key:t}))))))))},H=a(102),R=a.n(H);function U({to:e,href:t,label:a,prependBaseUrlToHref:n,...r}){const c=Object(s.a)(e),o=Object(s.a)(t,!0);return l.a.createElement(b.a,Object(m.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:n?o:t}:{to:c},r),a)}const A=({url:e,alt:t})=>l.a.createElement("img",{className:"footer__logo",alt:t,src:e});var Y=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:r,links:c=[],logo:i={}}=n||{},u=Object(s.a)(i.src);return n?l.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===n.style})},l.a.createElement("div",{className:"container"},c&&c.length>0&&l.a.createElement("div",{className:"row footer__links"},c.map((e,t)=>l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?l.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(U,e)))):null))),(i||r)&&l.a.createElement("div",{className:"text--center"},i&&i.src&&l.a.createElement("div",{className:"margin-bottom--sm"},i.href?l.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:R.a.footerLogoLink},l.a.createElement(A,{alt:i.alt,url:u})):l.a.createElement(A,{alt:i.alt,url:u})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null};a(103);t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:m},url:h}=t,{children:f,title:b,noFooter:v,description:p,image:g,keywords:k,permalink:E,version:_}=e,y=b?`${b} | ${n}`:n,O=g||m;let N=h+Object(s.a)(O);Object(c.a)(O)||(N=O);const w=Object(s.a)(a);return l.a.createElement(i.a,null,l.a.createElement(u.a,null,l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en"}),y&&l.a.createElement("title",null,y),y&&l.a.createElement("meta",{property:"og:title",content:y}),a&&l.a.createElement("link",{rel:"shortcut icon",href:w}),p&&l.a.createElement("meta",{name:"description",content:p}),p&&l.a.createElement("meta",{property:"og:description",content:p}),_&&l.a.createElement("meta",{name:"docsearch:version",content:_}),k&&k.length&&l.a.createElement("meta",{name:"keywords",content:k.join(",")}),O&&l.a.createElement("meta",{property:"og:image",content:N}),O&&l.a.createElement("meta",{property:"twitter:image",content:N}),O&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),E&&l.a.createElement("meta",{property:"og:url",content:h+E}),E&&l.a.createElement("link",{rel:"canonical",href:h+E}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),l.a.createElement(d.a,null),l.a.createElement(I,null),l.a.createElement("div",{className:"main-wrapper"},f),!v&&l.a.createElement(Y,null)))}},144:function(e,t,a){"use strict";var n=a(0),l=a(142);t.a=function(){return Object(n.useContext)(l.a)}},145:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e}))},146:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},147:function(e,t,a){"use strict";var n=a(129),l=a(144),r=a(138),c=a(137);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(n.a)(),{isDarkTheme:a}=Object(l.a)(),o=t.href||e;let s={};t.target?s={target:t.target}:Object(c.a)(o)||(s={rel:"noopener noreferrer",target:"_blank"});const i=t.srcDark&&a?t.srcDark:t.src;return{logoLink:o,logoLinkProps:s,logoImageUrl:Object(r.a)(i),logoAlt:t.alt}}},154:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),c=m(r),o=m(a(131)),s=m(a(8)),i=m(a(155)),u=m(a(156)),d=a(157);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,l=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),r=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},l,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(r.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(i.default,null),unchecked:c.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},155:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("title",null,"switch-check"),r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},156:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),r=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("title",null,"switch-x"),r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},157:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);