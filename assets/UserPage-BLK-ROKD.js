import{j as u,c as G,r as L,a as wt,u as Et,b as A,f as Le,d as Ot,g as St,e as Tt,L as xt}from"./index-G739p_QD.js";import{G as Pt,n as v,F as kt,L as jt,C as Lt,N as Ct}from"./Navigation-CSPop0Cz.js";function Mt(t){return Pt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"},child:[]}]})(t)}const $t=v.button`
  width: 140px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  font-size: 18px;
  font-weight: 900;
  margin-left: 24px;
  background: var(--background-body);
  color: var(--color-text);
  border-radius: 30px;

  transition: background-color 0.4s;
  -webkit-transition: background-color 0.4s;
  -moz-transition: background-color 0.4s;
  -ms-transition: background-color 0.4s;
  -o-transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    background: var(--button-hover);
    color: black;
  }

  @media screen and (max-width: 530px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
`,Ht=v.span`
  display: flex;
  align-items: center;
  margin-right: 12px;
`,It=()=>u.jsxs($t,{children:[u.jsx(Ht,{children:u.jsx(Mt,{})}),"Go Back"]}),Rt=t=>t.tweets.items,Bt=t=>t.tweets.isLoading,Dt=t=>t.tweets.error,At=t=>t.tweets.hasMore,zt=t=>t.tweets.page,Wt=v.select`
  width: 100%;
  height: 40px;
  border-radius: var(--border-radius);
  background: var(--background-card);
  border: var(--border);
  padding: 6px;
  color: #c08cf5;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #005fa3;
  }

  &:focus {
    border-color: #004080;
  }
`,Ft=({options:t,filter:e,onSelect:n})=>{const r=o=>{n(o.target.value)};return u.jsx("div",{children:u.jsx(Wt,{value:e,onChange:r,children:t.map(o=>u.jsx("option",{value:o.value,children:o.label},o.value))})})},Nt=[{value:"all",label:"Show all"},{value:"follow",label:"Follow"},{value:"following",label:"Following"}];var _={},be={},W={},F={},Ze="Expected a function",Ce=NaN,Ut="[object Symbol]",Qt=/^\s+|\s+$/g,qt=/^[-+]0x[0-9a-f]+$/i,Xt=/^0b[01]+$/i,Yt=/^0o[0-7]+$/i,Gt=parseInt,Vt=typeof G=="object"&&G&&G.Object===Object&&G,Zt=typeof self=="object"&&self&&self.Object===Object&&self,Jt=Vt||Zt||Function("return this")(),Kt=Object.prototype,en=Kt.toString,tn=Math.max,nn=Math.min,ue=function(){return Jt.Date.now()};function rn(t,e,n){var r,o,s,i,a,l,c=0,f=!1,d=!1,g=!0;if(typeof t!="function")throw new TypeError(Ze);e=Me(e)||0,ne(n)&&(f=!!n.leading,d="maxWait"in n,s=d?tn(Me(n.maxWait)||0,e):s,g="trailing"in n?!!n.trailing:g);function h(p){var E=r,I=o;return r=o=void 0,c=p,i=t.apply(I,E),i}function O(p){return c=p,a=setTimeout(w,e),f?h(p):i}function S(p){var E=p-l,I=p-c,D=e-E;return d?nn(D,s-I):D}function T(p){var E=p-l,I=p-c;return l===void 0||E>=e||E<0||d&&I>=s}function w(){var p=ue();if(T(p))return x(p);a=setTimeout(w,S(p))}function x(p){return a=void 0,g&&r?h(p):(r=o=void 0,i)}function M(){a!==void 0&&clearTimeout(a),c=0,r=l=o=a=void 0}function P(){return a===void 0?i:x(ue())}function k(){var p=ue(),E=T(p);if(r=arguments,o=this,l=p,E){if(a===void 0)return O(l);if(d)return a=setTimeout(w,e),h(l)}return a===void 0&&(a=setTimeout(w,e)),i}return k.cancel=M,k.flush=P,k}function on(t,e,n){var r=!0,o=!0;if(typeof t!="function")throw new TypeError(Ze);return ne(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),rn(t,e,{leading:r,maxWait:e,trailing:o})}function ne(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function an(t){return!!t&&typeof t=="object"}function ln(t){return typeof t=="symbol"||an(t)&&en.call(t)==Ut}function Me(t){if(typeof t=="number")return t;if(ln(t))return Ce;if(ne(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ne(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Qt,"");var n=Xt.test(t);return n||Yt.test(t)?Gt(t.slice(2),n?2:8):qt.test(t)?Ce:+t}var sn=on,N={};Object.defineProperty(N,"__esModule",{value:!0});N.addPassiveEventListener=function(e,n,r){var o=r.name;o||(o=n,console.warn("Listener must be a named function.")),te.has(n)||te.set(n,new Set);var s=te.get(n);if(!s.has(o)){var i=function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,l)}catch{}return a}();e.addEventListener(n,r,i?{passive:!0}:!1),s.add(o)}};N.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r),te.get(n).delete(r.name||n)};var te=new Map;Object.defineProperty(F,"__esModule",{value:!0});var cn=sn,un=dn(cn),fn=N;function dn(t){return t&&t.__esModule?t:{default:t}}var pn=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,un.default)(e,n)},y={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var r=pn(function(o){y.scrollHandler(e)},n);y.scrollSpyContainers.push(e),(0,fn.addPassiveEventListener)(e,"scroll",r)}},isMounted:function(e){return y.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=y.scrollSpyContainers[y.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(r){return r(y.currentPositionX(e),y.currentPositionY(e))})},addStateHandler:function(e){y.spySetState.push(e)},addSpyHandler:function(e,n){var r=y.scrollSpyContainers[y.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(e),e(y.currentPositionX(n),y.currentPositionY(n))},updateStates:function(){y.spySetState.forEach(function(e){return e()})},unmount:function(e,n){y.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),y.spySetState&&y.spySetState.length&&y.spySetState.indexOf(e)>-1&&y.spySetState.splice(y.spySetState.indexOf(e),1),document.removeEventListener("scroll",y.scrollHandler)},update:function(){return y.scrollSpyContainers.forEach(function(e){return y.scrollHandler(e)})}};F.default=y;var B={},U={};Object.defineProperty(U,"__esModule",{value:!0});var vn=function(e,n){var r=e.indexOf("#")===0?e.substring(1):e,o=r?"#"+r:"",s=window&&window.location,i=o?s.pathname+s.search+o:s.pathname+s.search;n?history.pushState(history.state,"",i):history.replaceState(history.state,"",i)},hn=function(){return window.location.hash.replace(/^#/,"")},mn=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},gn=function(e){return getComputedStyle(e).position!=="static"},fe=function(e,n){for(var r=e.offsetTop,o=e.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},yn=function(e,n,r){if(r)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(gn(e)){if(n.offsetParent!==e){var o=function(f){return f===e||f===document},s=fe(n,o),i=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return i}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(f){return f===document};return fe(n,l).offsetTop-fe(e,l).offsetTop};U.default={updateHash:vn,getHash:hn,filterElementInContainer:mn,scrollOffset:yn};var re={},_e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var we={};Object.defineProperty(we,"__esModule",{value:!0});var bn=N,_n=["mousedown","mousewheel","touchmove","keydown"];we.default={subscribe:function(e){return typeof document<"u"&&_n.forEach(function(n){return(0,bn.addPassiveEventListener)(document,n,e)})}};var Q={};Object.defineProperty(Q,"__esModule",{value:!0});var he={registered:{},scrollEvent:{register:function(e,n){he.registered[e]=n},remove:function(e){he.registered[e]=null}}};Q.default=he;Object.defineProperty(re,"__esModule",{value:!0});var wn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},En=U;oe(En);var On=_e,$e=oe(On),Sn=we,Tn=oe(Sn),xn=Q,j=oe(xn);function oe(t){return t&&t.__esModule?t:{default:t}}var Je=function(e){return $e.default[e.smooth]||$e.default.defaultEasing},Pn=function(e){return typeof e=="function"?e:function(){return e}},kn=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},me=function(){return kn()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),Ke=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},et=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},tt=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},jn=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},Ln=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},Cn=function t(e,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){j.default.registered.end&&j.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:e(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var s=t.bind(null,e,n);me.call(window,s);return}j.default.registered.end&&j.default.registered.end(o.to,o.target,o.currentPosition)},Ee=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},q=function(e,n,r,o){n.data=n.data||Ke(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(Tn.default.subscribe(s),Ee(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?et(n):tt(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){j.default.registered.end&&j.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Pn(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var i=Je(n),a=Cn.bind(null,i,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){j.default.registered.begin&&j.default.registered.begin(n.data.to,n.data.target),me.call(window,a)},n.delay);return}j.default.registered.begin&&j.default.registered.begin(n.data.to,n.data.target),me.call(window,a)},ae=function(e){return e=wn({},e),e.data=e.data||Ke(),e.absolute=!0,e},Mn=function(e){q(0,ae(e))},$n=function(e,n){q(e,ae(n))},Hn=function(e){e=ae(e),Ee(e),q(e.horizontal?jn(e):Ln(e),e)},In=function(e,n){n=ae(n),Ee(n);var r=n.horizontal?et(n):tt(n);q(e+r,n)};re.default={animateTopScroll:q,getAnimationType:Je,scrollToTop:Mn,scrollToBottom:Hn,scrollTo:$n,scrollMore:In};Object.defineProperty(B,"__esModule",{value:!0});var Rn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bn=U,Dn=Oe(Bn),An=re,zn=Oe(An),Wn=Q,V=Oe(Wn);function Oe(t){return t&&t.__esModule?t:{default:t}}var Z={},He=void 0;B.default={unmount:function(){Z={}},register:function(e,n){Z[e]=n},unregister:function(e){delete Z[e]},get:function(e){return Z[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return He=e},getActiveLink:function(){return He},scrollTo:function(e,n){var r=this.get(e);if(!r){console.warn("target Element not found");return}n=Rn({},n,{absolute:!1});var o=n.containerId,s=n.container,i=void 0;o?i=document.getElementById(o):s&&s.nodeType?i=s:i=document,n.absolute=!0;var a=n.horizontal,l=Dn.default.scrollOffset(i,r,a)+(n.offset||0);if(!n.smooth){V.default.registered.begin&&V.default.registered.begin(e,r),i===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):i.scrollTop=l,V.default.registered.end&&V.default.registered.end(e,r);return}zn.default.animateTopScroll(l,n,e,r)}};var nt={exports:{}},Fn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Nn=Fn,Un=Nn;function rt(){}function ot(){}ot.resetWarningCache=rt;var Qn=function(){function t(r,o,s,i,a,l){if(l!==Un){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ot,resetWarningCache:rt};return n.PropTypes=n,n};nt.exports=Qn();var ie=nt.exports,le={};Object.defineProperty(le,"__esModule",{value:!0});var qn=U,de=Xn(qn);function Xn(t){return t&&t.__esModule?t:{default:t}}var Yn={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var r=this.scroller,o=r.get(e);if(o&&(n||e!==r.getActiveLink())){var s=this.containers[e]||document;r.scrollTo(e,{container:s})}},getHash:function(){return de.default.getHash()},changeHash:function(e,n){this.isInitialized()&&de.default.getHash()!==e&&de.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};le.default=Yn;Object.defineProperty(W,"__esModule",{value:!0});var J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gn=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Vn=L,Ie=X(Vn),Zn=F,K=X(Zn),Jn=B,Kn=X(Jn),er=ie,m=X(er),tr=le,$=X(tr);function X(t){return t&&t.__esModule?t:{default:t}}function nr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function or(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Re={to:m.default.string.isRequired,containerId:m.default.string,container:m.default.object,activeClass:m.default.string,activeStyle:m.default.object,spy:m.default.bool,horizontal:m.default.bool,smooth:m.default.oneOfType([m.default.bool,m.default.string]),offset:m.default.number,delay:m.default.number,isDynamic:m.default.bool,onClick:m.default.func,duration:m.default.oneOfType([m.default.number,m.default.func]),absolute:m.default.bool,onSetActive:m.default.func,onSetInactive:m.default.func,ignoreCancelEvents:m.default.bool,hashSpy:m.default.bool,saveHashHistory:m.default.bool,spyThrottle:m.default.number};W.default=function(t,e){var n=e||Kn.default,r=function(s){or(i,s);function i(a){nr(this,i);var l=rr(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,a));return o.call(l),l.state={active:!1},l}return Gn(i,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();K.default.isMounted(l)||K.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&($.default.isMounted()||$.default.mount(n),$.default.mapContainer(this.props.to,l)),K.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){K.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c={};this.state&&this.state.active?c=J({},this.props.style,this.props.activeStyle):c=J({},this.props.style);var f=J({},this.props);for(var d in Re)f.hasOwnProperty(d)&&delete f[d];return f.className=l,f.style=c,f.onClick=this.handleClick,Ie.default.createElement(t,f)}}]),i}(Ie.default.PureComponent),o=function(){var i=this;this.scrollTo=function(a,l){n.scrollTo(a,J({},i.state,l))},this.handleClick=function(a){i.props.onClick&&i.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),i.scrollTo(i.props.to,i.props)},this.spyHandler=function(a,l){var c=i.getScrollSpyContainer();if(!($.default.isMounted()&&!$.default.isInitialized())){var f=i.props.horizontal,d=i.props.to,g=null,h=void 0,O=void 0;if(f){var S=0,T=0,w=0;if(c.getBoundingClientRect){var x=c.getBoundingClientRect();w=x.left}if(!g||i.props.isDynamic){if(g=n.get(d),!g)return;var M=g.getBoundingClientRect();S=M.left-w+a,T=S+M.width}var P=a-i.props.offset;h=P>=Math.floor(S)&&P<Math.floor(T),O=P<Math.floor(S)||P>=Math.floor(T)}else{var k=0,p=0,E=0;if(c.getBoundingClientRect){var I=c.getBoundingClientRect();E=I.top}if(!g||i.props.isDynamic){if(g=n.get(d),!g)return;var D=g.getBoundingClientRect();k=D.top-E+l,p=k+D.height}var Y=l-i.props.offset;h=Y>=Math.floor(k)&&Y<Math.floor(p),O=Y<Math.floor(k)||Y>=Math.floor(p)}var Pe=n.getActiveLink();if(O){if(d===Pe&&n.setActiveLink(void 0),i.props.hashSpy&&$.default.getHash()===d){var ke=i.props.saveHashHistory,bt=ke===void 0?!1:ke;$.default.changeHash("",bt)}i.props.spy&&i.state.active&&(i.setState({active:!1}),i.props.onSetInactive&&i.props.onSetInactive(d,g))}if(h&&(Pe!==d||i.state.active===!1)){n.setActiveLink(d);var je=i.props.saveHashHistory,_t=je===void 0?!1:je;i.props.hashSpy&&$.default.changeHash(d,_t),i.props.spy&&(i.setState({active:!0}),i.props.onSetActive&&i.props.onSetActive(d,g))}}}};return r.propTypes=Re,r.defaultProps={offset:0},r};Object.defineProperty(be,"__esModule",{value:!0});var ar=L,Be=at(ar),ir=W,lr=at(ir);function at(t){return t&&t.__esModule?t:{default:t}}function sr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function De(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function cr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ur=function(t){cr(e,t);function e(){var n,r,o,s;sr(this,e);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return s=(r=(o=De(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),o),o.render=function(){return Be.default.createElement("a",o.props,o.props.children)},r),De(o,s)}return e}(Be.default.Component);be.default=(0,lr.default)(ur);var Se={};Object.defineProperty(Se,"__esModule",{value:!0});var fr=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),dr=L,Ae=it(dr),pr=W,vr=it(pr);function it(t){return t&&t.__esModule?t:{default:t}}function hr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function gr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var yr=function(t){gr(e,t);function e(){return hr(this,e),mr(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return fr(e,[{key:"render",value:function(){return Ae.default.createElement("button",this.props,this.props.children)}}]),e}(Ae.default.Component);Se.default=(0,vr.default)(yr);var Te={},se={};Object.defineProperty(se,"__esModule",{value:!0});var br=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_r=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),wr=L,ze=ce(wr),Er=wt;ce(Er);var Or=B,We=ce(Or),Sr=ie,Fe=ce(Sr);function ce(t){return t&&t.__esModule?t:{default:t}}function Tr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Pr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}se.default=function(t){var e=function(n){Pr(r,n);function r(o){Tr(this,r);var s=xr(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return s.childBindings={domNode:null},s}return _r(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;We.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){We.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return ze.default.createElement(t,br({},this.props,{parentBindings:this.childBindings}))}}]),r}(ze.default.Component);return e.propTypes={name:Fe.default.string,id:Fe.default.string},e};Object.defineProperty(Te,"__esModule",{value:!0});var Ne=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kr=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),jr=L,Ue=xe(jr),Lr=se,Cr=xe(Lr),Mr=ie,Qe=xe(Mr);function xe(t){return t&&t.__esModule?t:{default:t}}function $r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Hr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ir(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var lt=function(t){Ir(e,t);function e(){return $r(this,e),Hr(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return kr(e,[{key:"render",value:function(){var r=this,o=Ne({},this.props);return delete o.name,o.parentBindings&&delete o.parentBindings,Ue.default.createElement("div",Ne({},o,{ref:function(i){r.props.parentBindings.domNode=i}}),this.props.children)}}]),e}(Ue.default.Component);lt.propTypes={name:Qe.default.string,id:Qe.default.string};Te.default=(0,Cr.default)(lt);var pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qe=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function Xe(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ye(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ge(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ee=L,R=F,ve=B,b=ie,H=le,Ve={to:b.string.isRequired,containerId:b.string,container:b.object,activeClass:b.string,spy:b.bool,smooth:b.oneOfType([b.bool,b.string]),offset:b.number,delay:b.number,isDynamic:b.bool,onClick:b.func,duration:b.oneOfType([b.number,b.func]),absolute:b.bool,onSetActive:b.func,onSetInactive:b.func,ignoreCancelEvents:b.bool,hashSpy:b.bool,spyThrottle:b.number},Rr={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||ve,o=function(i){Ge(a,i);function a(l){Xe(this,a);var c=Ye(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return s.call(c),c.state={active:!1},c}return qe(a,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,f=this.props.container;return c?document.getElementById(c):f&&f.nodeType?f:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();R.isMounted(c)||R.mount(c,this.props.spyThrottle),this.props.hashSpy&&(H.isMounted()||H.mount(r),H.mapContainer(this.props.to,c)),this.props.spy&&R.addStateHandler(this.stateHandler),R.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){R.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var f=pe({},this.props);for(var d in Ve)f.hasOwnProperty(d)&&delete f[d];return f.className=c,f.onClick=this.handleClick,ee.createElement(e,f)}}]),a}(ee.Component),s=function(){var a=this;this.scrollTo=function(l,c){r.scrollTo(l,pe({},a.state,c))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var c=a.getScrollSpyContainer();if(!(H.isMounted()&&!H.isInitialized())){var f=a.props.to,d=null,g=0,h=0,O=0;if(c.getBoundingClientRect){var S=c.getBoundingClientRect();O=S.top}if(!d||a.props.isDynamic){if(d=r.get(f),!d)return;var T=d.getBoundingClientRect();g=T.top-O+l,h=g+T.height}var w=l-a.props.offset,x=w>=Math.floor(g)&&w<Math.floor(h),M=w<Math.floor(g)||w>=Math.floor(h),P=r.getActiveLink();if(M)return f===P&&r.setActiveLink(void 0),a.props.hashSpy&&H.getHash()===f&&H.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),R.updateStates();if(x&&P!==f)return r.setActiveLink(f),a.props.hashSpy&&H.changeHash(f),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(f)),R.updateStates()}}};return o.propTypes=Ve,o.defaultProps={offset:0},o},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Ge(o,r);function o(s){Xe(this,o);var i=Ye(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,s));return i.childBindings={domNode:null},i}return qe(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;ve.unregister(this.props.name)}},{key:"registerElems",value:function(i){ve.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return ee.createElement(e,pe({},this.props,{parentBindings:this.childBindings}))}}]),o}(ee.Component);return n.propTypes={name:b.string,id:b.string},n}},Br=Rr;Object.defineProperty(_,"__esModule",{value:!0});_.Helpers=_.ScrollElement=_.ScrollLink=yt=_.animateScroll=_.scrollSpy=_.Events=_.scroller=_.Element=_.Button=_.Link=void 0;var Dr=be,st=C(Dr),Ar=Se,ct=C(Ar),zr=Te,ut=C(zr),Wr=B,ft=C(Wr),Fr=Q,dt=C(Fr),Nr=F,pt=C(Nr),Ur=re,vt=C(Ur),Qr=W,ht=C(Qr),qr=se,mt=C(qr),Xr=Br,gt=C(Xr);function C(t){return t&&t.__esModule?t:{default:t}}_.Link=st.default;_.Button=ct.default;_.Element=ut.default;_.scroller=ft.default;_.Events=dt.default;_.scrollSpy=pt.default;var yt=_.animateScroll=vt.default;_.ScrollLink=ht.default;_.ScrollElement=mt.default;_.Helpers=gt.default;_.default={Link:st.default,Button:ct.default,Element:ut.default,scroller:ft.default,Events:dt.default,scrollSpy:pt.default,animateScroll:vt.default,ScrollLink:ht.default,ScrollElement:mt.default,Helpers:gt.default};const Yr="/tweets-app/assets/picture-B77hZ4Xo.png",Gr="/tweets-app/assets/Rectangle-Cw4HuGmw.png",Vr="/tweets-app/assets/Ellipse-DmnRR60u.png",Zr=v(kt)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`,Jr=v.div`
  width: 140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`,Kr=v.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`,eo=v.li`
  position: relative;
  width: 380px;
  background: var(--background-card);
  border-radius: 20px;
`,to=v.img`
  width: 100px;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 180px;
`,no=v.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
`,ro=v.div`
  position: relative;
`,oo=v.img`
  display: block;
  width: 100%;
  margin-bottom: 62px;
`,ao=v.div`
  width: 130px;
  height: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--background-body);
`,io=v.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  height: 130px;
  transform: translate(-50%, -50%);
`,lo=v.img`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`,so=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`,co=v.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,uo=v.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,fo=v.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,po=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 194px;
  font-family: var(--font-family);
  font-weight: 600;
  line-height: 22px;
  color: var(--color-text-btn);
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 36px;

  background: ${({isFollowed:t})=>t?"var(--button-color-active)":"var(--background-body)"};

  border-radius: var(--border-radius);
  padding: 14px 28px;
  transition: color var(--transition);

  &.button-color-active {
    background: var(--button-color-active);
  }

  &:hover {
    background: var(--button-hover);
    color: var(--button-color-text);
  }
`,vo=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: var(--font-family);
  font-weight: 600;
  line-height: 22px;
  color: var(--color-text);
  text-transform: uppercase;
  background: var(--background-body);

  border-radius: var(--border-radius);
  padding: 14px 28px;
  transition: var(--transition);

  &:hover {
    background: var(--button-hover);
    color: var(--button-color-text);
  }
`,ho=v.p`
  font-size: 20px;

  font-weight: 700;
  text-align: center;
  color: var(--color-text-more);
  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`,mo=()=>{const t=Et(),e=A(Rt),n=A(Bt),r=A(Dt),o=A(zt),s=A(At),i=L.useRef(!0),[a,l]=L.useState("all"),c=h=>{l(h)};L.useEffect(()=>{i.current&&!n&&(t(Le({page:o})),i.current=!1)},[t,e.length,o,n]);const f=()=>{!n&&s&&t(Le({page:o})),yt.scrollToBottom({duration:500,smooth:"easeInOutQuad"})},d=(h,O)=>{t(Ot({tweetId:h,isFollowed:O}))},g=e.filter(h=>a==="follow"?!h.isFollowed:a==="following"?h.isFollowed:!0);return u.jsxs(u.Fragment,{children:[r&&u.jsxs("p",{children:["Error: ",r]}),u.jsx(Jr,{children:u.jsx(Ft,{options:Nt,filter:a,onSelect:c})}),u.jsx(Kr,{children:n&&e.length===0?u.jsx(Zr,{size:50,color:"aqua"}):g.map(({id:h,avatar:O,followers:S,tweets:T,user:w,isFollowed:x})=>u.jsxs(eo,{children:[u.jsx(to,{src:jt,alt:"Logo Image"}),u.jsx(no,{src:Yr,alt:"Promo Image"}),u.jsxs(ro,{children:[u.jsx(oo,{src:Gr,alt:"Rectangle line"}),u.jsxs(ao,{children:[u.jsx(io,{src:Vr,alt:"Ellipse png"}),u.jsx(lo,{src:O,alt:w})]})]}),u.jsxs(so,{children:[u.jsxs(uo,{children:["user: ",w]}),u.jsxs(co,{children:["tweets: ",T]}),u.jsxs(fo,{children:["followers: ",S]}),u.jsx(po,{type:"button",isFollowed:x,onClick:()=>d(h,x),children:x?"Following":"Follow"})]})]},h))}),s&&u.jsx(vo,{onClick:f,disabled:n,children:n&&e.length>0?u.jsx("p",{children:"Loading more..."}):u.jsx("p",{children:"Load more"})}),!s&&u.jsx(ho,{children:"No more tweets to load"})]})};function go(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var ge=L,z=go(ge);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ye=function(){return ye=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ye.apply(this,arguments)};function yo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function bo(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}var _o=`.scroll-to-top {
  background-color: white;
  right: 40px;
  bottom: 40px;
  position: fixed;
  z-index: 2;
  cursor: pointer;
  border-radius: 7px;
  width: 40px;
  height: 40px;
  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
  border: none;
}

.scroll-to-top:active {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}
`;bo(_o);function wo(t){t===void 0&&(t=!1),t?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}var Eo=function(t){var e=t.top,n=e===void 0?20:e,r=t.className,o=r===void 0?"":r,s=t.color,i=s===void 0?"black":s,a=t.smooth,l=a===void 0?!1:a,c=t.component,f=c===void 0?"":c,d=t.viewBox,g=d===void 0?"0 0 256 256":d,h=t.svgPath,O=h===void 0?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":h,S=t.width,T=S===void 0?"28":S,w=t.height,x=w===void 0?"28":w,M=yo(t,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),P=ge.useState(!1),k=P[0],p=P[1];return ge.useEffect(function(){var E=function(){p(document.documentElement.scrollTop>=n)};return E(),document.addEventListener("scroll",E),function(){return document.removeEventListener("scroll",E)}},[n]),z.createElement(z.Fragment,null,k&&z.createElement("button",ye({className:"scroll-to-top "+o,onClick:function(){return wo(l)},"aria-label":"Scroll to top"},M),f||z.createElement("svg",{width:T,height:x,fill:i,viewBox:g},z.createElement("path",{d:O}))))},Oo=Eo;const So=St(Oo),To=v.section`
  padding: 20px;
  min-height: 100vh;
  background: var(--background-body);
`,xo=v.h1`
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  font-size: 61px;
  margin-bottom: 30px;
  color: var(--color-text);

  @media screen and (max-width: 475px) {
    font-size: 41px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 475px) {
    font-size: 31px;
  }
`,Po=v.h1`
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  font-size: 41px;
  margin-bottom: 20px;
  color: var(--color-text);

  @media screen and (max-width: 475px) {
    font-size: 31px;
  }

  @media screen and (max-width: 475px) {
    font-size: 21px;
  }
`,ko=v(So)`
  width: 54px;
  height: 50px;
  border-radius: 50%; !important;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-body); !important;
  transition: var(--transition);

  &:hover {
    transform: scale(1.1);

    svg {
      fill: var(--button-hover);
    }
  }

  svg {
    fill: var(--color-text);
    transition: var(--transition);
  }
`,Co=()=>{var n;const e=((n=Tt().state)==null?void 0:n.from)??"/";return u.jsxs(To,{children:[u.jsx(ko,{smooth:!0}),u.jsxs(Lt,{children:[u.jsx(Ct,{}),u.jsx(xo,{children:"Users Tweets"}),u.jsx(xt,{to:e,children:u.jsx(It,{})}),u.jsx(Po,{children:"Tweet Cards"}),u.jsx(mo,{})]})]})};export{Co as default};
