(window.webpackJsonp=window.webpackJsonp||[]).push([[10,50],{247:function(t,e,n){},248:function(t,e,n){"use strict";var i={name:"cl-icon",props:{name:String}},r=(n(252),n(4)),o=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("i",{class:"cl-icon--"+this.name})},[],!1,null,null,null);e.a=o.exports},249:function(t,e,n){"use strict";var i,r,o=n(258),s=RegExp.prototype.exec,c=String.prototype.replace,a=s,l=(i=/a/,r=/b*/g,s.call(i,"a"),s.call(r,"a"),0!==i.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(a=function(t){var e,n,i,r,a=this;return u&&(n=new RegExp("^"+a.source+"$(?!\\s)",o.call(a))),l&&(e=a.lastIndex),i=s.call(a,t),l&&i&&(a.lastIndex=a.global?i.index+i[0].length:e),u&&i&&i.length>1&&c.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i}),t.exports=a},250:function(t,e,n){"use strict";var i=n(9),r=n(33),o=n(34),s=n(21),c=n(253),a=n(254),l=Math.max,u=Math.min,h=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;n(255)("replace",2,function(t,e,n,p){return[function(i,r){var o=t(this),s=null==i?void 0:i[e];return void 0!==s?s.call(i,o,r):n.call(String(o),i,r)},function(t,e){var r=p(n,t,this,e);if(r.done)return r.value;var h=i(t),f=String(this),d="function"==typeof e;d||(e=String(e));var g=h.global;if(g){var m=h.unicode;h.lastIndex=0}for(var _=[];;){var b=a(h,f);if(null===b)break;if(_.push(b),!g)break;""===String(b[0])&&(h.lastIndex=c(f,o(h.lastIndex),m))}for(var y,x="",w=0,E=0;E<_.length;E++){b=_[E];for(var C=String(b[0]),S=l(u(s(b.index),f.length),0),N=[],k=1;k<b.length;k++)N.push(void 0===(y=b[k])?y:String(y));var $=b.groups;if(d){var I=[C].concat(N,S,f);void 0!==$&&I.push($);var O=String(e.apply(void 0,I))}else O=v(C,f,S,N,$,e);S>=w&&(x+=f.slice(w,S)+O,w=S+C.length)}return x+f.slice(w)}];function v(t,e,i,o,s,c){var a=i+t.length,l=o.length,u=d;return void 0!==s&&(s=r(s),u=f),n.call(c,u,function(n,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(a);case"<":c=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var f=h(u/10);return 0===f?n:f<=l?void 0===o[f-1]?r.charAt(1):o[f-1]+r.charAt(1):n}c=o[u-1]}return void 0===c?"":c})}})},251:function(t,e,n){"use strict";n(250);e.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[]}},methods:{trim:function(t){return t.replace(/^ {8}/gm,"").trim()},showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick(function(){!0===e.isShow[t]?e.codeParent[t].style.height=+e.codeHeightArr[t]+25+"px":e.codeParent[t].style.height=0})},getCodesHeight:function(){var t=this.$el.getElementsByClassName("code-content-height");this.codeParent=this.$el.getElementsByClassName("code-content");for(var e=t.length,n=0;n<e;n++)this.codeHeightArr.push(t[n].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick(function(){t.getCodesHeight()})}}},252:function(t,e,n){"use strict";var i=n(247);n.n(i).a},253:function(t,e,n){"use strict";var i=n(256)(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},254:function(t,e,n){"use strict";var i=n(257),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},255:function(t,e,n){"use strict";n(261);var i=n(10),r=n(2),o=n(19),s=n(20),c=n(3),a=n(249),l=c("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=c(t),d=!o(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),p=d?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}):void 0;if(!d||!p||"replace"===t&&!u||"split"===t&&!h){var v=/./[f],g=n(s,f,""[t],function(t,e,n,i,r){return e.exec===a?d&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=g[0],_=g[1];i(String.prototype,t,m),r(RegExp.prototype,f,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}}},256:function(t,e,n){var i=n(21),r=n(20);t.exports=function(t){return function(e,n){var o,s,c=String(r(e)),a=i(n),l=c.length;return a<0||a>=l?t?"":void 0:(o=c.charCodeAt(a))<55296||o>56319||a+1===l||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):o:t?c.slice(a,a+2):s-56320+(o-55296<<10)+65536}}},257:function(t,e,n){var i=n(31),r=n(3)("toStringTag"),o="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:o?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},258:function(t,e,n){"use strict";var i=n(9);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},259:function(t,e,n){var i=n(266),r=n(22),o=n(13),s=n(32),c=n(6),a=n(38),l=Object.getOwnPropertyDescriptor;e.f=n(5)?l:function(t,e){if(t=o(t),e=s(e,!0),a)try{return l(t,e)}catch(t){}if(c(t,e))return r(!i.f.call(t,e),t[e])}},260:function(t,e,n){"use strict";var i=n(1),r=n(6),o=n(31),s=n(265),c=n(32),a=n(19),l=n(262).f,u=n(259).f,h=n(11).f,f=n(263).trim,d=i.Number,p=d,v=d.prototype,g="Number"==o(n(36)(v)),m="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var n,i,r,o=(e=m?e.trim():f(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,a=e.slice(2),l=0,u=a.length;l<u;l++)if((s=a.charCodeAt(l))<48||s>r)return NaN;return parseInt(a,i)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(g?a(function(){v.valueOf.call(n)}):"Number"!=o(n))?s(new p(_(e)),n,d):_(e)};for(var b,y=n(5)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)r(p,b=y[x])&&!r(d,b)&&h(d,b,u(p,b));d.prototype=v,v.constructor=d,n(10)(i,"Number",d)}},261:function(t,e,n){"use strict";var i=n(249);n(30)({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},262:function(t,e,n){var i=n(39),r=n(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},263:function(t,e,n){var i=n(30),r=n(20),o=n(19),s=n(264),c="["+s+"]",a=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),u=function(t,e,n){var r={},c=o(function(){return!!s[t]()||"​"!="​"[t]()}),a=r[t]=c?e(h):s[t];n&&(r[n]=a),i(i.P+i.F*c,"String",r)},h=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(a,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},264:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},265:function(t,e,n){var i=n(12),r=n(268).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t}},266:function(t,e){e.f={}.propertyIsEnumerable},267:function(t,e,n){var i=n(11).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(5)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},268:function(t,e,n){var i=n(12),r=n(9),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{(i=n(37)(Function.call,n(259).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},270:function(t,e,n){},278:function(t,e,n){},279:function(t,e,n){"use strict";var i={name:"cl-button",components:{Icon:n(248).a},mixins:[{name:"cl-wave-animation-animating",data:function(){return{node:null,animating:!1,originClassName:""}},mounted:function(){this.node=this.$el,this.originClassName=this.node.className,this.node.addEventListener("click",this.animationStart)},beforeDestroy:function(){this.node.removeEventListener("click",this.animationStart),this.node.removeEventListener("animationend",this.animationEnd)},methods:{animationStart:function(){this.animating||this.closeWave||(this.animating=!0,this.originClassName=this.node.className,this.node.className=[this.originClassName+" cl-wave-animation-animating"],this.node.addEventListener("animationend",this.animationEnd))},animationEnd:function(){this.animating=!1,this.node.className=this.originClassName,this.node.removeEventListener("animationend",this.animationEnd)}}}],props:{icon:{type:String,default:""},type:{type:String,default:"default"},loading:{type:Boolean,default:!1},size:{type:String,default:"normal",validator:function(t){return["normal","large","small"].indexOf(t)>-1}},disabled:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return["left","right"].indexOf(t)>-1}}},computed:{classObject:function(){var t=this.type,e=this.size,n=this.isDisabled;return["cl-btn",t,{loading:this.loading},{disabled:n},e]},getIconPosition:function(){var t=this.icon,e=this.loading;if(t||e)return"icon-".concat(this.iconPosition)},isDisabled:function(){return this.loading||this.disabled}},methods:{clickHandler:function(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.$emit("click",t)}}},r=(n(291),n(4)),o=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return"text"===t.type?n("span",{class:t.classObject},[t._t("default")],2):n("button",{class:[t.classObject,t.getIconPosition],attrs:{disabled:t.isDisabled},on:{click:t.clickHandler}},[t.icon&&!t.loading?n("Icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.loading?n("Icon",{staticClass:"loading icon",attrs:{name:"loading"}}):t._e(),t._v(" "),n("div",{staticClass:"content"},[t._t("default")],2)],1)},[],!1,null,"39818d03",null);e.a=o.exports},291:function(t,e,n){"use strict";var i=n(270);n.n(i).a},315:function(t,e,n){"use strict";var i=n(278);n.n(i).a},316:function(t,e,n){"use strict";n(260);var i={name:"cl-popover",props:{popClassName:{type:String},content:{type:[Number,String]},position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>-1}},container:{},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>-1}},width:{type:[String,Number],default:"15"},title:{}},data:function(){return{visible:!1}},watch:{visible:function(t){this.$emit("change",t)}},computed:{classObject:function(){return["cl-popover--item","position-".concat(this.position),this.popClassName]},containerObject:function(){return["cl-popover--item__container","date-position-".concat(this.position)]}},mounted:function(){this.addPopoverListenser()},methods:{addPopoverListenser:function(){var t=this.$slots.reference[0].elm,e=this.$refs.popover,n=this.trigger;"hover"===n?(t.addEventListener("mouseover",this.handleShow),t.addEventListener("mouseleave",this.handleHide),e.addEventListener("mouseover",this.handleShow),e.addEventListener("mouseleave",this.handleHide)):"click"===n&&(t.addEventListener("click",this.handleToggle),document.addEventListener("click",this.handleDocumentClick))},handleShow:function(){this.visible=!0},handleHide:function(){this.visible=!1},handleToggle:function(){this.visible=!this.visible},handleDocumentClick:function(t){var e=this.reference||this.$refs.reference,n=this.popover||this.$refs.popover;!e&&this.$slots.reference&&this.$slots.reference[0]&&(e=this.referenceElm=this.$slots.reference[0].elm),this.$el&&this.$el.contains(t.target)||e&&e.contains(t.target)||n&&n.contains(t.target)||(this.visible=!1)},handleAfterEnter:function(){this.$emit("after-enter")},handleAfterLeave:function(){this.$emit("after-leave")},removePopoverListeners:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},destroyed:function(){this.removePopoverListeners()}}},r=(n(315),n(4)),o=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cl-popover"},[t._t("reference"),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],ref:"popover",class:t.container?t.containerObject:t.classObject,style:{width:t.container?"":t.width+"px"}},[t.container?t._t("content"):[n("div",{staticClass:"cl-popover--title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"cl-popover--content"},[t._v(t._s(t.content))])]],2)])],2)},[],!1,null,"1a6774ba",null);e.a=o.exports},379:function(t,e,n){},419:function(t,e,n){"use strict";n.r(e);var i={data:function(){return{table:[{param:"trigger",des:"触发方式",type:"click/hover",choice:"-",def:"click"},{param:"title",des:"标题",type:"string",choice:"-",def:"-"},{param:"content",des:"显示的内容，也可以通过 slot 传入 DOM",type:"string",choice:"-",def:"-"},{param:"title",des:"标题",type:"string",choice:"-",def:"-"},{param:"width",des:"宽度",type:"string, number",choice:"-",def:"15px"},{param:"position",des:"出现位置",type:"string",choice:"top/left/right/bottom",def:"top"},{param:"popClassName",des:"自定义Class",type:"string",choice:"-",def:"-"}]}}},r=n(4),o=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base"},[n("section",[n("h2",[t._v("Attributes")]),t._v(" "),n("div",{staticClass:"attr"},[n("table",[t._m(0),t._v(" "),n("tbody",t._l(t.table,function(e,i){return n("tr",{key:i},[n("th",[t._v(t._s(e.param))]),t._v(" "),n("th",{staticClass:"des"},[t._v(t._s(e.des))]),t._v(" "),n("th",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),n("td",[t._v(t._s(e.choice))]),t._v(" "),n("td",[t._v(t._s(e.def))])])}),0)])])])])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticClass:"des"},[t._v("说明")]),t._v(" "),n("th",{staticClass:"type"},[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])])}],!1,null,null,null);e.default=o.exports},514:function(t,e,n){"use strict";var i=n(379);n.n(i).a},557:function(t,e,n){"use strict";n.r(e);n(35),n(267);var i=n(248),r=n(251),o=n(316),s=n(279),c=n(419),a={name:"popover-demo",mixins:[r.a],components:{ClIcon:i.a,ClPopover:o.a,ClButton:s.a,Attributes:c.default},data:function(){return{visible:!0,codeStr:'\n         <cl-popover\n          position="top"\n          title="标题"\n          width="200"\n          trigger="hover"\n          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n        >\n          <cl-button slot="reference">hover 激活</cl-button>\n        </cl-popover>\n        <cl-popover\n          position="bottom"\n          title="标题"\n          width="200"\n          trigger="hover"\n          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n        >\n          <cl-button slot="reference">hover 激活</cl-button>\n        </cl-popover>\n        <cl-popover\n          position="left"\n          title="标题"\n          width="200"\n          trigger="click"\n          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n        >\n          <cl-button slot="reference">click 激活</cl-button>\n        </cl-popover>\n        <cl-popover\n          position="right"\n          title="标题"\n          width="200"\n          trigger="click"\n          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n        >\n          <cl-button slot="reference">click 激活</cl-button>\n        </cl-popover>\n        '}},computed:{baseMethods:function(){return this.trim(this.codeStr)}},methods:{handleClick:function(t){this.activeName=t.name,console.log(t)}},mounted:function(){document.querySelectorAll(".component-wrapper-demo").forEach(function(t){t&&t.childNodes.forEach(function(t){t.classList&&t.classList.add("wave")})})}},l=(n(514),n(4)),u=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("p",[t._v("展示小段文本内容")]),t._v(" "),n("h3",[t._v("基础用法")]),t._v(" "),n("p",[t._v("基础的弹出框")]),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("cl-popover",{attrs:{position:"top",title:"标题",width:"200",trigger:"hover",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}},[n("cl-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("hover 激活")])],1),t._v(" "),n("cl-popover",{attrs:{position:"bottom",title:"标题",width:"200",trigger:"hover",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}},[n("cl-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("hover 激活")])],1),t._v(" "),n("cl-popover",{attrs:{position:"left",title:"标题",width:"200",trigger:"click",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}},[n("cl-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("click 激活")])],1),t._v(" "),n("cl-popover",{attrs:{position:"right",title:"标题",width:"200",trigger:"click",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}},[n("cl-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("click 激活")])],1)],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.baseMethods))])])])]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[n("cl-icon",{staticClass:"icon-down",attrs:{name:!1===t.isShow[0]?"arrow-down":"arrow-up"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),n("Attributes")],1)},[],!1,null,"0f33dcd8",null);e.default=u.exports}}]);