(window.webpackJsonp=window.webpackJsonp||[]).push([[13,36],{247:function(t,e,n){},248:function(t,e,n){"use strict";var r={name:"cl-icon",props:{name:String}},i=(n(252),n(4)),c=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("i",{class:"cl-icon--"+this.name})},[],!1,null,null,null);e.a=c.exports},249:function(t,e,n){"use strict";var r,i,c=n(258),s=RegExp.prototype.exec,o=String.prototype.replace,a=s,u=(r=/a/,i=/b*/g,s.call(r,"a"),s.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(a=function(t){var e,n,r,i,a=this;return l&&(n=new RegExp("^"+a.source+"$(?!\\s)",c.call(a))),u&&(e=a.lastIndex),r=s.call(a,t),u&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),l&&r&&r.length>1&&o.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=a},250:function(t,e,n){"use strict";var r=n(9),i=n(33),c=n(34),s=n(21),o=n(253),a=n(254),u=Math.max,l=Math.min,v=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(255)("replace",2,function(t,e,n,d){return[function(r,i){var c=t(this),s=null==r?void 0:r[e];return void 0!==s?s.call(r,c,i):n.call(String(c),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var v=r(t),f=String(this),h="function"==typeof e;h||(e=String(e));var _=v.global;if(_){var g=v.unicode;v.lastIndex=0}for(var m=[];;){var x=a(v,f);if(null===x)break;if(m.push(x),!_)break;""===String(x[0])&&(v.lastIndex=o(f,c(v.lastIndex),g))}for(var y,b="",C=0,I=0;I<m.length;I++){x=m[I];for(var w=String(x[0]),E=u(l(s(x.index),f.length),0),N=[],S=1;S<x.length;S++)N.push(void 0===(y=x[S])?y:String(y));var A=x.groups;if(h){var k=[w].concat(N,E,f);void 0!==A&&k.push(A);var $=String(e.apply(void 0,k))}else $=p(w,f,E,N,A,e);E>=C&&(b+=f.slice(C,E)+$,C=E+w.length)}return b+f.slice(C)}];function p(t,e,r,c,s,o){var a=r+t.length,u=c.length,l=h;return void 0!==s&&(s=i(s),l=f),n.call(o,l,function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(a);case"<":o=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>u){var f=v(l/10);return 0===f?n:f<=u?void 0===c[f-1]?i.charAt(1):c[f-1]+i.charAt(1):n}o=c[l-1]}return void 0===o?"":o})}})},251:function(t,e,n){"use strict";n(250);e.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[]}},methods:{trim:function(t){return t.replace(/^ {8}/gm,"").trim()},showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick(function(){!0===e.isShow[t]?e.codeParent[t].style.height=+e.codeHeightArr[t]+25+"px":e.codeParent[t].style.height=0})},getCodesHeight:function(){var t=this.$el.getElementsByClassName("code-content-height");this.codeParent=this.$el.getElementsByClassName("code-content");for(var e=t.length,n=0;n<e;n++)this.codeHeightArr.push(t[n].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick(function(){t.getCodesHeight()})}}},252:function(t,e,n){"use strict";var r=n(247);n.n(r).a},253:function(t,e,n){"use strict";var r=n(256)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},254:function(t,e,n){"use strict";var r=n(257),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var c=n.call(t,e);if("object"!=typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},255:function(t,e,n){"use strict";n(261);var r=n(10),i=n(2),c=n(19),s=n(20),o=n(3),a=n(249),u=o("species"),l=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),v=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=o(t),h=!c(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),d=h?!c(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e}):void 0;if(!h||!d||"replace"===t&&!l||"split"===t&&!v){var p=/./[f],_=n(s,f,""[t],function(t,e,n,r,i){return e.exec===a?h&&!i?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),g=_[0],m=_[1];r(String.prototype,t,g),i(RegExp.prototype,f,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},256:function(t,e,n){var r=n(21),i=n(20);t.exports=function(t){return function(e,n){var c,s,o=String(i(e)),a=r(n),u=o.length;return a<0||a>=u?t?"":void 0:(c=o.charCodeAt(a))<55296||c>56319||a+1===u||(s=o.charCodeAt(a+1))<56320||s>57343?t?o.charAt(a):c:t?o.slice(a,a+2):s-56320+(c-55296<<10)+65536}}},257:function(t,e,n){var r=n(31),i=n(3)("toStringTag"),c="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},258:function(t,e,n){"use strict";var r=n(9);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},259:function(t,e,n){var r=n(266),i=n(22),c=n(13),s=n(32),o=n(6),a=n(38),u=Object.getOwnPropertyDescriptor;e.f=n(5)?u:function(t,e){if(t=c(t),e=s(e,!0),a)try{return u(t,e)}catch(t){}if(o(t,e))return i(!r.f.call(t,e),t[e])}},260:function(t,e,n){"use strict";var r=n(1),i=n(6),c=n(31),s=n(265),o=n(32),a=n(19),u=n(262).f,l=n(259).f,v=n(11).f,f=n(263).trim,h=r.Number,d=h,p=h.prototype,_="Number"==c(n(36)(p)),g="trim"in String.prototype,m=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,c=(e=g?e.trim():f(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var s,a=e.slice(2),u=0,l=a.length;u<l;u++)if((s=a.charCodeAt(u))<48||s>i)return NaN;return parseInt(a,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(_?a(function(){p.valueOf.call(n)}):"Number"!=c(n))?s(new d(m(e)),n,h):m(e)};for(var x,y=n(5)?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;y.length>b;b++)i(d,x=y[b])&&!i(h,x)&&v(h,x,l(d,x));h.prototype=p,p.constructor=h,n(10)(r,"Number",h)}},261:function(t,e,n){"use strict";var r=n(249);n(30)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},262:function(t,e,n){var r=n(39),i=n(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},263:function(t,e,n){var r=n(30),i=n(20),c=n(19),s=n(264),o="["+s+"]",a=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),l=function(t,e,n){var i={},o=c(function(){return!!s[t]()||"​"!="​"[t]()}),a=i[t]=o?e(v):s[t];n&&(i[n]=a),r(r.P+r.F*o,"String",i)},v=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(a,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},264:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},265:function(t,e,n){var r=n(12),i=n(268).set;t.exports=function(t,e,n){var c,s=e.constructor;return s!==n&&"function"==typeof s&&(c=s.prototype)!==n.prototype&&r(c)&&i&&i(t,c),t}},266:function(t,e){e.f={}.propertyIsEnumerable},267:function(t,e,n){var r=n(11).f,i=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in i||n(5)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},268:function(t,e,n){var r=n(12),i=n(9),c=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(37)(Function.call,n(259).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return c(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:c}},353:function(t,e,n){},354:function(t,e,n){},355:function(t,e,n){},407:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{table:[{param:"height",des:"走马灯的高度",type:"string",choice:"-",def:"-"},{param:"interval",des:"自动切换的时间间隔，单位为毫秒",type:"number",choice:"-",def:"3000"}],table1:[{param:"name",des:"幻灯片的 index 值",type:"number",choice:"-",def:"-"}]}}},i=n(4),c=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base"},[n("section",[n("h2",[t._v("Carousel Attributes")]),t._v(" "),n("div",{staticClass:"attr"},[n("table",[t._m(0),t._v(" "),n("tbody",t._l(t.table,function(e,r){return n("tr",{key:r},[n("th",[t._v(t._s(e.param))]),t._v(" "),n("th",{staticClass:"des"},[t._v(t._s(e.des))]),t._v(" "),n("th",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),n("td",[t._v(t._s(e.choice))]),t._v(" "),n("td",[t._v(t._s(e.def))])])}),0)])])]),t._v(" "),n("section",[n("h2",[t._v("Carousel-Item Attributes")]),t._v(" "),n("div",{staticClass:"attr"},[n("table",[t._m(1),t._v(" "),n("tbody",t._l(t.table1,function(e,r){return n("tr",{key:r},[n("th",[t._v(t._s(e.param))]),t._v(" "),n("th",{staticClass:"des"},[t._v(t._s(e.des))]),t._v(" "),n("th",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),n("td",[t._v(t._s(e.choice))]),t._v(" "),n("td",[t._v(t._s(e.def))])])}),0)])])])])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticClass:"des"},[t._v("说明")]),t._v(" "),n("th",{staticClass:"type"},[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticClass:"des"},[t._v("说明")]),t._v(" "),n("th",{staticClass:"type"},[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])])}],!1,null,null,null);e.default=c.exports},480:function(t,e,n){"use strict";var r=n(353);n.n(r).a},481:function(t,e,n){"use strict";var r=n(354);n.n(r).a},482:function(t,e,n){"use strict";var r=n(355);n.n(r).a},538:function(t,e,n){"use strict";n.r(e);n(250);var r=n(248),i=n(251),c=(n(267),n(260),{components:{Icon:r.a},props:{height:[String,Number],autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3}},data:function(){return{activeIndex:-1,containerWidth:0,itemsLength:0,reverse:!1,timer:null}},computed:{selectedIndex:function(){var t=this.activeIndex;return-1===t?0:t},items:function(){return this.$children.filter(function(t){return"cl-carousel-item"===t.$options.name})}},mounted:function(){this.getItemsLength(),this.setAutoPlay()},provide:function(){return{rootCarousel:this}},methods:{setAutoPlay:function(){var t=this;this.autoplay&&(this.timer=setInterval(function(){t.onClickNext()},this.interval))},getItemsLength:function(){this.itemsLength=this.items.length},onMouseEnter:function(){clearInterval(this.timer)},onMouseLeave:function(){this.setAutoPlay()},onClickPrev:function(){var t=this;this.reverse=!0,this.$nextTick(function(){var e=t.activeIndex,n=t.itemsLength,r=t.selectedIndex;e<0&&(t.activeIndex=r),e<=0&&(t.activeIndex=n),t.activeIndex--})},onClickNext:function(){var t=this;this.reverse=!1,this.$nextTick(function(){var e=t.activeIndex,n=t.itemsLength,r=t.selectedIndex;e<0&&(t.activeIndex=r),t.activeIndex++,t.activeIndex>=n&&(t.activeIndex=0)})},select:function(t){this.activeIndex=t}}}),s=(n(480),n(4)),o=Object(s.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cl-slides",on:{mouseenter:function(e){return e.stopPropagation(),t.onMouseEnter(e)},mouseleave:function(e){return e.stopPropagation(),t.onMouseLeave(e)}}},[n("div",{ref:"window",staticClass:"cl-slides-window"},[n("div",{staticClass:"cl-slides-wrapper",style:{height:t.height}},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"cl-slides-dots"},[n("span",{on:{click:t.onClickPrev}},[n("icon",{attrs:{name:"arrow-left"}})],1),t._v(" "),t._l(t.itemsLength,function(e){return n("span",{key:e,class:{active:t.selectedIndex===e-1},attrs:{"data-index":e-1},on:{click:function(n){return t.select(e-1)}}},[t._v(t._s(e))])}),t._v(" "),n("span",{on:{click:t.onClickNext}},[n("icon",{attrs:{name:"arrow-right"}})],1)],2)])},[],!1,null,"7ee8b25f",null).exports,a={name:"cl-carousel-item",props:{name:{type:[Number,String],default:0}},inject:["rootCarousel"],computed:{visible:function(){return this.rootCarousel.selectedIndex===this.name},reverse:function(){return this.rootCarousel.reverse}}},u=(n(481),Object(s.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[this.visible?e("div",{staticClass:"cl-slides-item",class:{reverse:this.reverse}},[this._t("default")],2):this._e()])},[],!1,null,"2f2afd10",null).exports),l=n(407),v={name:"carousel-demo",mixins:[i.a],components:{ClIcon:r.a,ClCarousel:o,ClCarouselItem:u,Attributes:l.default},data:function(){return{selected:"1",codeStr:'\n<cl-carousel>\n    <cl-carousel-item auto-play v-for="(item,index) in 4" :key="item" :name="index">\n        <div class="box">{{item}}</div>\n    </cl-carousel-item>\n</cl-carousel>\n        '}},computed:{baseMethods:function(){return this.codeStr.replace(/^ {20}$/gm,"").trim()}}},f=(n(482),Object(s.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("p",[t._v("在有限空间内，循环播放同一类型的图片、文字等内容")]),t._v(" "),n("h3",[t._v("基础用法")]),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("cl-carousel",t._l(4,function(e,r){return n("cl-carousel-item",{key:e,attrs:{autoplay:"",name:r}},[n("div",{staticClass:"box"},[t._v(t._s(e))])])}),1)],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.baseMethods))])])])]),t._v(" "),n("div",{staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[n("cl-icon",{staticClass:"icon-down",attrs:{name:!1===t.isShow[0]?"arrocl-down":"arrocl-up"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),n("Attributes")],1)},[],!1,null,"c2ba2072",null));e.default=f.exports}}]);