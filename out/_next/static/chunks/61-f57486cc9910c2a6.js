(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{3412:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return f},isThenable:function(){return c}});let o="refresh",i="navigate",l="restore",u="server-patch",s="prefetch",a="fast-refresh",f="server-action";function c(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(8754),o=r(1757),i=r(5893),l=o._(r(7294)),u=n._(r(3935)),s=n._(r(6665)),a=r(1908),f=r(4706),c=r(5670);r(1558);let d=r(1973),p=n._(r(3293)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,o,i){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function m(e){let[t,r]=l.version.split(".",2),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:s,decoding:a,className:f,style:c,fetchPriority:d,placeholder:p,loading:g,unoptimized:b,fill:v,onLoadRef:y,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:C,onLoad:w,onError:P,...S}=e;return(0,i.jsx)("img",{...S,...m(d),loading:g,width:s,height:u,decoding:a,"data-nimg":v?"fill":"1",className:f,style:c,sizes:o,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&h(e,p,y,_,j,b))},[r,p,y,_,j,P,b,t]),onLoad:e=>{h(e.currentTarget,p,y,_,j,b)},onError:e=>{C(!0),"empty"!==p&&j(!0),P&&P(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(d.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=g||n||f.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:u,onLoadingComplete:s}=e,h=(0,l.useRef)(u);(0,l.useEffect)(()=>{h.current=u},[u]);let m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let[y,_]=(0,l.useState)(!1),[j,C]=(0,l.useState)(!1),{props:w,meta:P}=(0,a.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:j});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...w,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:_,setShowAltText:C,ref:t}),P.priority?(0,i.jsx)(v,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=r(5893),i=n._(r(7294)),l=r(7950),u=r(7387),s=r(6982),a=r(6921),f=r(7727),c=r(1973),d=r(6216),p=r(1722),g=r(6504),h=r(634),m=r(3412),b=new Set;function v(e,t,r,n,o,i){if(i||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let _=i.default.forwardRef(function(e,t){let r,n;let{href:s,as:b,children:_,prefetch:j=null,passHref:C,replace:w,shallow:P,scroll:S,locale:O,onClick:E,onMouseEnter:x,onTouchStart:R,legacyBehavior:M=!1,...I}=e;r=_,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let z=i.default.useContext(c.RouterContext),A=i.default.useContext(d.AppRouterContext),k=null!=z?z:A,T=!z,L=!1!==j,N=null===j?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:D,as:F}=i.default.useMemo(()=>{if(!z){let e=y(s);return{href:e,as:b?y(b):e}}let[e,t]=(0,l.resolveHref)(z,s,!0);return{href:e,as:b?(0,l.resolveHref)(z,b):t||e}},[z,s,b]),U=i.default.useRef(D),B=i.default.useRef(F);M&&(n=i.default.Children.only(r));let G=M?n&&"object"==typeof n&&n.ref:t,[H,K,V]=(0,p.useIntersection)({rootMargin:"200px"}),W=i.default.useCallback(e=>{(B.current!==F||U.current!==D)&&(V(),B.current=F,U.current=D),H(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[F,G,D,V,H]);i.default.useEffect(()=>{k&&K&&L&&v(k,D,F,{locale:O},{kind:N},T)},[F,D,K,O,L,null==z?void 0:z.locale,k,T,N]);let q={ref:W,onClick(e){M||"function"!=typeof E||E(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,r,n,o,l,s,a,f){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};f?i.default.startTransition(d):d()}(e,k,D,F,w,P,S,O,T)},onMouseEnter(e){M||"function"!=typeof x||x(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),k&&(L||!T)&&v(k,D,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:N},T)},onTouchStart(e){M||"function"!=typeof R||R(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),k&&(L||!T)&&v(k,D,F,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:N},T)}};if((0,a.isAbsoluteUrl)(F))q.href=F;else if(!M||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&(0,g.getDomainLocale)(F,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);q.href=t||(0,h.addBasePath)((0,f.addLocale)(F,e,null==z?void 0:z.defaultLocale))}return M?i.default.cloneElement(n,q):(0,o.jsx)("a",{...I,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(7294),o=r(9126),i="function"==typeof IntersectionObserver,l=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,a=s||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(a||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(1558);let n=r(7386),o=r(4706);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,s,a,{src:f,sizes:c,unoptimized:d=!1,priority:p=!1,loading:g,className:h,quality:m,width:b,height:v,fill:y=!1,style:_,onLoad:j,onLoadingComplete:C,placeholder:w="empty",blurDataURL:P,fetchPriority:S,layout:O,objectFit:E,objectPosition:x,lazyBoundary:R,lazyRoot:M,...I}=e,{imgConf:z,showAltText:A,blurComplete:k,defaultLoader:T}=t,L=z||o.imageConfigDefault;if("allSizes"in L)u=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);u={...L,allSizes:e,deviceSizes:t}}let N=I.loader||T;delete I.loader,delete I.srcSet;let D="__next_img_default"in N;if(D){if("custom"===u.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let F="",U=l(b),B=l(v);if("object"==typeof(r=f)&&(i(r)||void 0!==r.src)){let e=i(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,a=e.blurHeight,P=P||e.blurDataURL,F=e.src,!y){if(U||B){if(U&&!B){let t=U/e.width;B=Math.round(e.height*t)}else if(!U&&B){let t=B/e.height;U=Math.round(e.width*t)}}else U=e.width,B=e.height}}let G=!p&&("lazy"===g||void 0===g);(!(f="string"==typeof f?f:F)||f.startsWith("data:")||f.startsWith("blob:"))&&(d=!0,G=!1),u.unoptimized&&(d=!0),D&&f.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(d=!0),p&&(S="high");let H=l(m),K=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:x}:{},A?{}:{color:"transparent"},_),V=k||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:U,heightInt:B,blurWidth:s,blurHeight:a,blurDataURL:P||"",objectFit:K.objectFit})+'")':'url("'+w+'")',W=V?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:a}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),f=s.length-1;return{sizes:l||"w"!==a?l:"100vw",srcSet:s.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===a?e:n+1)+a).join(", "),src:u({config:t,src:r,quality:i,width:s[f]})}}({config:u,src:f,unoptimized:d,width:U,quality:H,sizes:c,loader:N});return{props:{...I,loading:G?"lazy":g,fetchPriority:S,width:U,height:B,decoding:"async",className:h,style:{...K,...W},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:d,priority:p,placeholder:w,fill:y}}}},7386:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n?40*n:t,s=o?40*o:r,a=u&&s?"viewBox='0 0 "+u+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+a+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(a?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return u},default:function(){return s}});let n=r(8754),o=r(1908),i=r(3686),l=n._(r(3293)),u=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=i.Image},3293:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5675:function(e,t,r){e.exports=r(9267)},1664:function(e,t,r){e.exports=r(3480)}}]);