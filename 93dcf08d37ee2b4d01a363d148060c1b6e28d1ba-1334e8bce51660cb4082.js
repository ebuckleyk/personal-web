(self.webpackChunkekb_website=self.webpackChunkekb_website||[]).push([[292],{9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},4762:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(2543),o=n(3888),u=n(7487),i=n(6511),c=n(5587),f=n(4667),a=n(7294);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s=(0,r.G)((function(e,t){var n=(0,o.m)("Heading",e),r=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}((0,u.Lr)(e),["className"]);return a.createElement(i.m$.h2,l({ref:t,className:(0,c.cx)("chakra-heading",e.className)},r,{__css:n}))}));f.Ts&&(s.displayName="Heading")},9806:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var f,a,l,s=(f=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),i=function(e){try{return!!e()}catch(t){return!0}},f=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!a.call({1:2},1)?function(e){var t=l(this,e);return!!t&&t.enumerable}:a},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},y={}.toString,d=function(e){return y.call(e).slice(8,-1)},E="".split,v=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==d(e)?E.call(e,""):Object(e)}:Object,h=function(e){return v(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},b=function(e){return"object"==typeof e?null!==e:"function"==typeof e},m=function(e,t){if(!b(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!b(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!b(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!b(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},g={}.hasOwnProperty,O=function(e,t){return g.call(e,t)},T=u.document,S=b(T)&&b(T.createElement),_=function(e){return S?T.createElement(e):{}},A=!f&&!i((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,D={f:f?I:function(e,t){if(e=h(e),t=m(t,!0),A)try{return I(e,t)}catch(n){}if(O(e,t))return p(!s.f.call(e,t),e[t])}},w=function(e){if(!b(e))throw TypeError(String(e)+" is not an object");return e},N=Object.defineProperty,j={f:f?N:function(e,t,n){if(w(e),t=m(t,!0),w(n),A)try{return N(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},P=f?function(e,t,n){return j.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},L=function(e,t){try{P(u,e,t)}catch(n){u[e]=t}return t},R="__core-js_shared__",M=u[R]||L(R,{}),k=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(e){return k.call(e)});var H,x,G,C=M.inspectSource,B=u.WeakMap,Y="function"==typeof B&&/native code/.test(C(B)),U=r((function(e){(e.exports=function(e,t){return M[e]||(M[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),K=0,F=Math.random(),W=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++K+F).toString(36)},z=U("keys"),V=function(e){return z[e]||(z[e]=W(e))},Q={},q=u.WeakMap;if(Y){var Z=M.state||(M.state=new q),X=Z.get,J=Z.has,$=Z.set;H=function(e,t){return t.facade=e,$.call(Z,e,t),t},x=function(e){return X.call(Z,e)||{}},G=function(e){return J.call(Z,e)}}else{var ee=V("state");Q[ee]=!0,H=function(e,t){return t.facade=e,P(e,ee,t),t},x=function(e){return O(e,ee)?e[ee]:{}},G=function(e){return O(e,ee)}}var te={set:H,get:x,has:G,enforce:function(e){return G(e)?x(e):H(e,{})},getterFor:function(e){return function(t){var n;if(!b(t)||(n=x(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ne=r((function(e){var t=te.get,n=te.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c,f=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||O(o,"name")||P(o,"name",t),(c=n(o)).source||(c.source=r.join("string"==typeof t?t:""))),e!==u?(f?!l&&e[t]&&(a=!0):delete e[t],a?e[t]=o:P(e,t,o)):a?e[t]=o:L(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C(this)}))})),re=u,oe=function(e){return"function"==typeof e?e:void 0},ue=function(e,t){return arguments.length<2?oe(re[e])||oe(u[e]):re[e]&&re[e][t]||u[e]&&u[e][t]},ie=Math.ceil,ce=Math.floor,fe=function(e){return isNaN(e=+e)?0:(e>0?ce:ie)(e)},ae=Math.min,le=Math.max,se=Math.min,pe=function(e){return function(t,n,r){var o,u,i=h(t),c=(o=i.length)>0?ae(fe(o),9007199254740991):0,f=function(e,t){var n=fe(e);return n<0?le(n+t,0):se(n,t)}(r,c);if(e&&n!=n){for(;c>f;)if((u=i[f++])!=u)return!0}else for(;c>f;f++)if((e||f in i)&&i[f]===n)return e||f||0;return!e&&-1}},ye={includes:pe(!0),indexOf:pe(!1)},de=ye.indexOf,Ee=function(e,t){var n,r=h(e),o=0,u=[];for(n in r)!O(Q,n)&&O(r,n)&&u.push(n);for(;t.length>o;)O(r,n=t[o++])&&(~de(u,n)||u.push(n));return u},ve=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=ve.concat("length","prototype"),be={f:Object.getOwnPropertyNames||function(e){return Ee(e,he)}},me={f:Object.getOwnPropertySymbols},ge=ue("Reflect","ownKeys")||function(e){var t=be.f(w(e)),n=me.f;return n?t.concat(n(e)):t},Oe=function(e,t){for(var n=ge(t),r=j.f,o=D.f,u=0;u<n.length;u++){var i=n[u];O(e,i)||r(e,i,o(t,i))}},Te=/#|\.prototype\./,Se=function(e,t){var n=Ae[_e(e)];return n==De||n!=Ie&&("function"==typeof t?i(t):!!t)},_e=Se.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},Ae=Se.data={},Ie=Se.NATIVE="N",De=Se.POLYFILL="P",we=Se,Ne=D.f,je=function(e,t){var n,r,o,i,c,f=e.target,a=e.global,l=e.stat;if(n=a?u:l?u[f]||L(f,{}):(u[f]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=Ne(n,r))&&c.value:n[r],!we(a?r:f+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Oe(i,o)}(e.sham||o&&o.sham)&&P(i,"sham",!0),ne(n,r,i,e)}},Pe=Object.keys||function(e){return Ee(e,ve)},Le=s.f,Re=function(e){return function(t){for(var n,r=h(t),o=Pe(r),u=o.length,i=0,c=[];u>i;)n=o[i++],f&&!Le.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Me=(Re(!0),Re(!1));je({target:"Object",stat:!0},{values:function(e){return Me(e)}}),re.Object.values;var ke,He,xe="process"==d(u.process),Ge=ue("navigator","userAgent")||"",Ce=u.process,Be=Ce&&Ce.versions,Ye=Be&&Be.v8;Ye?He=(ke=Ye.split("."))[0]+ke[1]:Ge&&(!(ke=Ge.match(/Edge\/(\d+)/))||ke[1]>=74)&&(ke=Ge.match(/Chrome\/(\d+)/))&&(He=ke[1]);var Ue,Ke=He&&+He,Fe=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(xe?38===Ke:Ke>37&&Ke<41)})),We=Fe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ze=U("wks"),Ve=u.Symbol,Qe=We?Ve:Ve&&Ve.withoutSetter||W,qe=f?Object.defineProperties:function(e,t){w(e);for(var n,r=Pe(t),o=r.length,u=0;o>u;)j.f(e,n=r[u++],t[n]);return e},Ze=ue("document","documentElement"),Xe=V("IE_PROTO"),Je=function(){},$e=function(e){return"<script>"+e+"<\/script>"},et=function(){try{Ue=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;et=Ue?function(e){e.write($e("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ue):((t=_("iframe")).style.display="none",Ze.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write($e("document.F=Object")),e.close(),e.F);for(var n=ve.length;n--;)delete et.prototype[ve[n]];return et()};Q[Xe]=!0;var tt,nt=Object.create||function(e,t){var n;return null!==e?(Je.prototype=w(e),n=new Je,Je.prototype=null,n[Xe]=e):n=et(),void 0===t?n:qe(n,t)},rt=(O(ze,tt="unscopables")&&(Fe||"string"==typeof ze[tt])||(Fe&&O(Ve,tt)?ze[tt]=Ve[tt]:ze[tt]=Qe("Symbol."+tt)),ze[tt]),ot=Array.prototype;null==ot[rt]&&j.f(ot,rt,{configurable:!0,value:nt(null)});var ut,it=ye.includes;je({target:"Array",proto:!0},{includes:function(e){return it(this,e,arguments.length>1?arguments[1]:void 0)}}),ut="includes",ot[rt][ut]=!0;var ct,ft,at,lt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},st=Function.call;ct="includes",lt(st,u.Array.prototype[ct],ft),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(at||(at={}));var pt,yt=at;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(pt||(pt={}));var dt,Et=pt,vt=[yt.PARAGRAPH,yt.HEADING_1,yt.HEADING_2,yt.HEADING_3,yt.HEADING_4,yt.HEADING_5,yt.HEADING_6,yt.OL_LIST,yt.UL_LIST,yt.HR,yt.QUOTE,yt.EMBEDDED_ENTRY,yt.EMBEDDED_ASSET],ht=[yt.HR,yt.EMBEDDED_ENTRY,yt.EMBEDDED_ASSET],bt=((dt={})[yt.OL_LIST]=[yt.LIST_ITEM],dt[yt.UL_LIST]=[yt.LIST_ITEM],dt[yt.LIST_ITEM]=vt.slice(),dt[yt.QUOTE]=[yt.PARAGRAPH],dt),mt={nodeType:yt.DOCUMENT,data:{},content:[{nodeType:yt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},gt=Object.freeze({isInline:function(e){return Object.values(Et).includes(e.nodeType)},isBlock:function(e){return Object.values(yt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=yt,t.CONTAINERS=bt,t.EMPTY_DOCUMENT=mt,t.INLINES=Et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=vt,t.VOID_BLOCKS=ht,t.helpers=gt},f(a={exports:{}},a.exports),a.exports);(l=s)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var p,y,d=s.BLOCKS,E=(s.CONTAINERS,s.EMPTY_DOCUMENT,s.INLINES),v=s.MARKS,h=(s.TOP_LEVEL_BLOCKS,s.VOID_BLOCKS,s.helpers);function b(e,t){return e.map((function(e,n){return r=m(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function m(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(h.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=b(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var g=((p={})[d.DOCUMENT]=function(e,t){return t},p[d.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},p[d.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},p[d.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},p[d.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},p[d.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},p[d.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},p[d.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},p[d.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},p[d.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},p[d.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},p[d.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},p[d.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},p[d.HR]=function(){return u.createElement("hr",null)},p[E.ASSET_HYPERLINK]=function(e){return T(E.ASSET_HYPERLINK,e)},p[E.ENTRY_HYPERLINK]=function(e){return T(E.ENTRY_HYPERLINK,e)},p[E.EMBEDDED_ENTRY]=function(e){return T(E.EMBEDDED_ENTRY,e)},p[E.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},p),O=((y={})[v.BOLD]=function(e){return u.createElement("b",null,e)},y[v.ITALIC]=function(e){return u.createElement("i",null,e)},y[v.UNDERLINE]=function(e){return u.createElement("u",null,e)},y[v.CODE]=function(e){return u.createElement("code",null,e)},y);function T(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?m(e,{renderNode:i({},g,t.renderNode),renderMark:i({},O,t.renderMark),renderText:t.renderText}):null}},1394:function(e,t,n){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var u=function(e){return e&&e.Math==Math&&e},i=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof r&&r)||Function("return this")(),c=function(e){try{return!!e()}catch(t){return!0}},f=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!a.call({1:2},1)?function(e){var t=l(this,e);return!!t&&t.enumerable}:a},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},y={}.toString,d="".split,E=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return y.call(e).slice(8,-1)}(e)?d.call(e,""):Object(e)}:Object,v=function(e){return E(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},h=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!h(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!h(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!h(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!h(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,g=function(e,t){return m.call(e,t)},O=i.document,T=h(O)&&h(O.createElement),S=function(e){return T?O.createElement(e):{}},_=!f&&!c((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,I={f:f?A:function(e,t){if(e=v(e),t=b(t,!0),_)try{return A(e,t)}catch(n){}if(g(e,t))return p(!s.f.call(e,t),e[t])}},D=function(e){if(!h(e))throw TypeError(String(e)+" is not an object");return e},w=Object.defineProperty,N={f:f?w:function(e,t,n){if(D(e),t=b(t,!0),D(n),_)try{return w(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},j=f?function(e,t,n){return N.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},P=function(e,t){try{j(i,e,t)}catch(n){i[e]=t}return t},L="__core-js_shared__",R=i[L]||P(L,{}),M=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(e){return M.call(e)});var k,H,x,G=R.inspectSource,C=i.WeakMap,B="function"==typeof C&&/native code/.test(G(C)),Y=o((function(e){(e.exports=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),U=0,K=Math.random(),F=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+K).toString(36)},W=Y("keys"),z=function(e){return W[e]||(W[e]=F(e))},V={},Q=i.WeakMap;if(B){var q=new Q,Z=q.get,X=q.has,J=q.set;k=function(e,t){return J.call(q,e,t),t},H=function(e){return Z.call(q,e)||{}},x=function(e){return X.call(q,e)}}else{var $=z("state");V[$]=!0,k=function(e,t){return j(e,$,t),t},H=function(e){return g(e,$)?e[$]:{}},x=function(e){return g(e,$)}}var ee={set:k,get:H,has:x,enforce:function(e){return x(e)?H(e):k(e,{})},getterFor:function(e){return function(t){var n;if(!h(t)||(n=H(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},te=o((function(e){var t=ee.get,n=ee.enforce,r=String(String).split("String");(e.exports=function(e,t,o,u){var c=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||g(o,"name")||j(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==i?(c?!a&&e[t]&&(f=!0):delete e[t],f?e[t]=o:j(e,t,o)):f?e[t]=o:P(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G(this)}))})),ne=i,re=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?re(ne[e])||re(i[e]):ne[e]&&ne[e][t]||i[e]&&i[e][t]},ue=Math.ceil,ie=Math.floor,ce=function(e){return isNaN(e=+e)?0:(e>0?ie:ue)(e)},fe=Math.min,ae=Math.max,le=Math.min,se=function(e){return function(t,n,r){var o,u,i=v(t),c=(o=i.length)>0?fe(ce(o),9007199254740991):0,f=function(e,t){var n=ce(e);return n<0?ae(n+t,0):le(n,t)}(r,c);if(e&&n!=n){for(;c>f;)if((u=i[f++])!=u)return!0}else for(;c>f;f++)if((e||f in i)&&i[f]===n)return e||f||0;return!e&&-1}},pe={includes:se(!0),indexOf:se(!1)},ye=pe.indexOf,de=function(e,t){var n,r=v(e),o=0,u=[];for(n in r)!g(V,n)&&g(r,n)&&u.push(n);for(;t.length>o;)g(r,n=t[o++])&&(~ye(u,n)||u.push(n));return u},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ve=Ee.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return de(e,ve)}},be={f:Object.getOwnPropertySymbols},me=oe("Reflect","ownKeys")||function(e){var t=he.f(D(e)),n=be.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=me(t),r=N.f,o=I.f,u=0;u<n.length;u++){var i=n[u];g(e,i)||r(e,i,o(t,i))}},Oe=/#|\.prototype\./,Te=function(e,t){var n=_e[Se(e)];return n==Ie||n!=Ae&&("function"==typeof t?c(t):!!t)},Se=Te.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},_e=Te.data={},Ae=Te.NATIVE="N",Ie=Te.POLYFILL="P",De=Te,we=I.f,Ne=function(e,t){var n,r,o,u,c,f=e.target,a=e.global,l=e.stat;if(n=a?i:l?i[f]||P(f,{}):(i[f]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(c=we(n,r))&&c.value:n[r],!De(a?r:f+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;ge(u,o)}(e.sham||o&&o.sham)&&j(u,"sham",!0),te(n,r,u,e)}},je=Object.keys||function(e){return de(e,Ee)},Pe=s.f,Le=function(e){return function(t){for(var n,r=v(t),o=je(r),u=o.length,i=0,c=[];u>i;)n=o[i++],f&&!Pe.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Re={entries:Le(!0),values:Le(!1)}.values;Ne({target:"Object",stat:!0},{values:function(e){return Re(e)}});ne.Object.values;var Me,ke=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),He=ke&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,xe=Y("wks"),Ge=i.Symbol,Ce=He?Ge:Ge&&Ge.withoutSetter||F,Be=f?Object.defineProperties:function(e,t){D(e);for(var n,r=je(t),o=r.length,u=0;o>u;)N.f(e,n=r[u++],t[n]);return e},Ye=oe("document","documentElement"),Ue=z("IE_PROTO"),Ke=function(){},Fe=function(e){return"<script>"+e+"</"+"script>"},We=function(){try{Me=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;We=Me?function(e){e.write(Fe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Me):((t=S("iframe")).style.display="none",Ye.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Fe("document.F=Object")),e.close(),e.F);for(var n=Ee.length;n--;)delete We.prototype[Ee[n]];return We()};V[Ue]=!0;var ze,Ve=Object.create||function(e,t){var n;return null!==e?(Ke.prototype=D(e),n=new Ke,Ke.prototype=null,n[Ue]=e):n=We(),void 0===t?n:Be(n,t)},Qe=(g(xe,ze="unscopables")||(ke&&g(Ge,ze)?xe[ze]=Ge[ze]:xe[ze]=Ce("Symbol."+ze)),xe[ze]),qe=Array.prototype;null==qe[Qe]&&N.f(qe,Qe,{configurable:!0,value:Ve(null)});var Ze,Xe=Object.defineProperty,Je={},$e=function(e){throw e},et=pe.includes;Ne({target:"Array",proto:!0,forced:!function(e,t){if(g(Je,e))return Je[e];t||(t={});var n=[][e],r=!!g(t,"ACCESSORS")&&t.ACCESSORS,o=g(t,0)?t[0]:$e,u=g(t,1)?t[1]:void 0;return Je[e]=!!n&&!c((function(){if(r&&!f)return!0;var e={length:-1};r?Xe(e,1,{enumerable:!0,get:$e}):e[1]=1,n.call(e,o,u)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return et(this,e,arguments.length>1?arguments[1]:void 0)}}),Ze="includes",qe[Qe][Ze]=!0;var tt,nt,rt,ot=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},ut=Function.call;tt="includes",ot(ut,i["Array"].prototype[tt],nt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(rt||(rt={}));var it,ct=rt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(it||(it={}));var ft,at=it,lt=[ct.PARAGRAPH,ct.HEADING_1,ct.HEADING_2,ct.HEADING_3,ct.HEADING_4,ct.HEADING_5,ct.HEADING_6,ct.OL_LIST,ct.UL_LIST,ct.HR,ct.QUOTE,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],st=[ct.HR,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],pt=((ft={})[ct.OL_LIST]=[ct.LIST_ITEM],ft[ct.UL_LIST]=[ct.LIST_ITEM],ft[ct.LIST_ITEM]=lt.slice(),ft[ct.QUOTE]=[ct.PARAGRAPH],ft),yt={nodeType:ct.DOCUMENT,data:{},content:[{nodeType:ct.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var dt=Object.freeze({isInline:function(e){return Object.values(at).includes(e.nodeType)},isBlock:function(e){return Object.values(ct).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.RG=ct,t.oN={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"}},5830:function(e,t,n){"use strict";n.r(t);var r=n(2459),o=n.n(r),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={},f=function(e){return e&&e.sys&&"Link"===e.sys.type},a=function(e){return e.type+"!"+e.id},l=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":u(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==c}));for(var t in e)e[t]===c&&delete e[t];return e}(t))}return t},s=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,u=a({type:r,id:o});return e.get(u)||c}(e,t);return r===c?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(i(t),i(e.includes[n]))}),[]),u=[].concat(i(n.items),i(r)),c=new Map(u.map((function(e){return[a(e.sys),e]})));return u.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,l(n,f,(function(e){return s(c,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},2459:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getPrototypeOf,f=Object.prototype,a=f.hasOwnProperty,l=f.propertyIsEnumerable,s={SYMBOL_PROPERTIES:"function"==typeof i,WEAKMAP:"function"==typeof WeakMap},p=function(){if(s.WEAKMAP)return new WeakMap;var e=t({has:function(t){return!!~e._keys.indexOf(t)},set:function(t,n){e._keys.push(t),e._values.push(n)},get:function(t){return e._values[e._keys.indexOf(t)]}});return e._keys=[],e._values=[],e},y=function(n,r){if(!n.constructor)return t(null);var o=n.constructor,u=n.__proto__||c(n);if(o===r.Object)return u===r.Object.prototype?{}:t(u);if(~e.call(o).indexOf("[native code]"))try{return new o}catch(f){}return t(u)},d=function(e,t,n,r){var o=y(e,t);for(var u in r.set(e,o),e)a.call(e,u)&&(o[u]=n(e[u],r));if(s.SYMBOL_PROPERTIES){var c=i(e),f=c.length;if(f)for(var p=0,d=void 0;p<f;p++)d=c[p],l.call(e,d)&&(o[d]=n(e[d],r))}return o},E=function(e,t,n,c){var f=y(e,t);c.set(e,f);var a=s.SYMBOL_PROPERTIES?u(e).concat(i(e)):u(e),l=a.length;if(l)for(var p=0,d=void 0,E=void 0;p<l;p++)if("callee"!==(d=a[p])&&"caller"!==d)if(E=o(e,d)){E.get||E.set||(E.value=n(e[d],c));try{r(f,d,E)}catch(v){f[d]=E.value}}else f[d]=n(e[d],c);return f},v=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},h=Array.isArray,b="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:void(console&&console.error&&console.error('Unable to locate global object, returning "this".'));function m(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||b,o=n?E:d,u=function e(t,u){if(!t||"object"!=typeof t)return t;if(u.has(t))return u.get(t);var i,c=t.constructor;if(c===r.Object)return o(t,r,e,u);if(h(t)){if(n)return E(t,r,e,u);var f=t.length;i=new c,u.set(t,i);for(var a=0;a<f;a++)i[a]=e(t[a],u);return i}if(t instanceof r.Date)return new c(t.getTime());if(t instanceof r.RegExp)return(i=new c(t.source,t.flags||v(t))).lastIndex=t.lastIndex,i;if(r.Map&&t instanceof r.Map)return i=new c,u.set(t,i),t.forEach((function(t,n){i.set(n,e(t,u))})),i;if(r.Set&&t instanceof r.Set)return i=new c,u.set(t,i),t.forEach((function(t){i.add(e(t,u))})),i;if(r.Blob&&t instanceof r.Blob)return t.slice(0,t.size,t.type);if(r.Buffer&&r.Buffer.isBuffer(t))return i=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(t.length):new c(t.length),u.set(t,i),t.copy(i),i;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(t))return i=new c(t.buffer.slice(0)),u.set(t,i),i;if(t instanceof r.ArrayBuffer)return i=t.slice(0),u.set(t,i),i}return"function"==typeof t.then||t instanceof Error||r.WeakMap&&t instanceof r.WeakMap||r.WeakSet&&t instanceof r.WeakSet?t:o(t,r,e,u)};return u(e,p())}return m.default=m,m.strict=function(e,t){return m(e,{isStrict:!0,realm:t?t.realm:void 0})},m}()},5761:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n(5318),c=n(9806),f=i(n(5830));t.Z=function(e,t){var n=e.raw,r=e.references;void 0===t&&(t={});var o=JSON.parse(n);if(!r||!r.length)return(0,c.documentToReactComponents)(o,t);var i={items:[{sys:{type:"Entry"},richText:o}],includes:{Entry:r.filter((function(e){return"ContentfulAsset"!==e.__typename})).map((function(e){return u(u({},e),{},{sys:{type:"Entry",id:e.contentful_id}})})),Asset:r.filter((function(e){return"ContentfulAsset"===e.__typename})).map((function(e){return u(u({},e),{},{sys:{type:"Asset",id:e.contentful_id}})}))}},a=(0,f.default)(i,{removeUnresolved:!0});return(0,c.documentToReactComponents)(a[0].richText,t)}},8644:function(e,t,n){"use strict";var r=n(3433),o=n(5245),u=n(7294),i=n(1394),c=n(5761),f=n(2200),a=n(4762),l=["richText","children"];t.Z=function(e){var t,n,s=e.richText,p=e.children,y=(0,o.Z)(e,l);return u.createElement(f.x,Object.assign({fontSize:["sm","md"]},y),(0,c.Z)(s||p,{renderMark:(t={},t[i.oN.BOLD]=function(e){return u.createElement(f.x,{as:"b"},e)},t[i.oN.UNDERLINE]=function(e){return u.createElement(f.x,{as:"u"},e)},t[i.oN.ITALIC]=function(e){return u.createElement(f.x,{as:"i"},e)},t[i.oN.CODE]=function(e){return u.createElement(f.x,{as:"code"},e)},t),renderNode:(n={},n[i.RG.PARAGRAPH]=function(e,t){return u.createElement(f.x,{as:"p",mb:5},t)},n[i.RG.HEADING_1]=function(e,t){return u.createElement(a.X,{as:"h1"},t)},n),renderText:function(e){return e.split("\n").reduce((function(e,t,n){return[].concat((0,r.Z)(e),[n>0&&u.createElement("br",{key:n}),t])}),[])}}))}}}]);
//# sourceMappingURL=93dcf08d37ee2b4d01a363d148060c1b6e28d1ba-1334e8bce51660cb4082.js.map