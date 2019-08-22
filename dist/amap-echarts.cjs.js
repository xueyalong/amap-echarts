"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var echarts=_interopDefault(require("echarts/lib/echarts"));function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var _core=createCommonjsModule(function(e){var t=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=t)}),_core_1=_core.version,_global=createCommonjsModule(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),_shared=createCommonjsModule(function(e){var t=_global["__core-js_shared__"]||(_global["__core-js_shared__"]={});(e.exports=function(e,r){return t[e]||(t[e]=void 0!==r?r:{})})("versions",[]).push({version:_core.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),id=0,px=Math.random(),_uid=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++id+px).toString(36))},_wks=createCommonjsModule(function(e){var t=_shared("wks"),r=_global.Symbol,n="function"==typeof r;(e.exports=function(e){return t[e]||(t[e]=n&&r[e]||(n?r:_uid)("Symbol."+e))}).store=t}),_isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_anObject=function(e){if(!_isObject(e))throw TypeError(e+" is not an object!");return e},_fails=function(e){try{return!!e()}catch(e){return!0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document$1=_global.document,is=_isObject(document$1)&&_isObject(document$1.createElement),_domCreate=function(e){return is?document$1.createElement(e):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(e,t){if(!_isObject(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!_isObject(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(e,t,r){if(_anObject(e),t=_toPrimitive(t,!0),_anObject(r),_ie8DomDefine)try{return dP(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e},_objectDp={f:f},_propertyDesc=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},_hide=_descriptors?function(e,t,r){return _objectDp.f(e,t,_propertyDesc(1,r))}:function(e,t,r){return e[t]=r,e},UNSCOPABLES=_wks("unscopables"),ArrayProto=Array.prototype;null==ArrayProto[UNSCOPABLES]&&_hide(ArrayProto,UNSCOPABLES,{});var _addToUnscopables=function(e){ArrayProto[UNSCOPABLES][e]=!0},_iterStep=function(e,t){return{value:t,done:!!e}},_iterators={},toString={}.toString,_cof=function(e){return toString.call(e).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==_cof(e)?e.split(""):Object(e)},_defined=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},_toIobject=function(e){return _iobject(_defined(e))},hasOwnProperty={}.hasOwnProperty,_has=function(e,t){return hasOwnProperty.call(e,t)},_functionToString=_shared("native-function-to-string",Function.toString),_redefine=createCommonjsModule(function(e){var t=_uid("src"),r=(""+_functionToString).split("toString");_core.inspectSource=function(e){return _functionToString.call(e)},(e.exports=function(e,n,o,i){var a="function"==typeof o;a&&(_has(o,"name")||_hide(o,"name",n)),e[n]!==o&&(a&&(_has(o,t)||_hide(o,t,e[n]?""+e[n]:r.join(String(n)))),e===_global?e[n]=o:i?e[n]?e[n]=o:_hide(e,n,o):(delete e[n],_hide(e,n,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[t]||_functionToString.call(this)})}),_aFunction=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},_ctx=function(e,t,r){if(_aFunction(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}},PROTOTYPE="prototype",$export=function(e,t,r){var n,o,i,a,c=e&$export.F,u=e&$export.G,s=e&$export.S,l=e&$export.P,_=e&$export.B,f=u?_global:s?_global[t]||(_global[t]={}):(_global[t]||{})[PROTOTYPE],p=u?_core:_core[t]||(_core[t]={}),d=p[PROTOTYPE]||(p[PROTOTYPE]={});for(n in u&&(r=t),r)i=((o=!c&&f&&void 0!==f[n])?f:r)[n],a=_&&o?_ctx(i,_global):l&&"function"==typeof i?_ctx(Function.call,i):i,f&&_redefine(f,n,i,e&$export.U),p[n]!=i&&_hide(p,n,a),l&&d[n]!=i&&(d[n]=i)};_global.core=_core,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var _export=$export,ceil=Math.ceil,floor=Math.floor,_toInteger=function(e){return isNaN(e=+e)?0:(e>0?floor:ceil)(e)},min=Math.min,_toLength=function(e){return e>0?min(_toInteger(e),9007199254740991):0},max=Math.max,min$1=Math.min,_toAbsoluteIndex=function(e,t){return(e=_toInteger(e))<0?max(e+t,0):min$1(e,t)},_arrayIncludes=function(e){return function(t,r,n){var o,i=_toIobject(t),a=_toLength(i.length),c=_toAbsoluteIndex(n,a);if(e&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((e||c in i)&&i[c]===r)return e||c||0;return!e&&-1}},shared=_shared("keys"),_sharedKey=function(e){return shared[e]||(shared[e]=_uid(e))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(e,t){var r,n=_toIobject(e),o=0,i=[];for(r in n)r!=IE_PROTO&&_has(n,r)&&i.push(r);for(;t.length>o;)_has(n,r=t[o++])&&(~arrayIndexOf(i,r)||i.push(r));return i},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function(e){return _objectKeysInternal(e,_enumBugKeys)},_objectDps=_descriptors?Object.defineProperties:function(e,t){_anObject(e);for(var r,n=_objectKeys(t),o=n.length,i=0;o>i;)_objectDp.f(e,r=n[i++],t[r]);return e},document$2=_global.document,_html=document$2&&document$2.documentElement,IE_PROTO$1=_sharedKey("IE_PROTO"),Empty=function(){},PROTOTYPE$1="prototype",createDict=function(){var e,t=_domCreate("iframe"),r=_enumBugKeys.length;for(t.style.display="none",_html.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;r--;)delete createDict[PROTOTYPE$1][_enumBugKeys[r]];return createDict()},_objectCreate=Object.create||function(e,t){var r;return null!==e?(Empty[PROTOTYPE$1]=_anObject(e),r=new Empty,Empty[PROTOTYPE$1]=null,r[IE_PROTO$1]=e):r=createDict(),void 0===t?r:_objectDps(r,t)},def=_objectDp.f,TAG=_wks("toStringTag"),_setToStringTag=function(e,t,r){e&&!_has(e=r?e:e.prototype,TAG)&&def(e,TAG,{configurable:!0,value:t})},IteratorPrototype={};_hide(IteratorPrototype,_wks("iterator"),function(){return this});var _iterCreate=function(e,t,r){e.prototype=_objectCreate(IteratorPrototype,{next:_propertyDesc(1,r)}),_setToStringTag(e,t+" Iterator")},_toObject=function(e){return Object(_defined(e))},IE_PROTO$2=_sharedKey("IE_PROTO"),ObjectProto=Object.prototype,_objectGpo=Object.getPrototypeOf||function(e){return e=_toObject(e),_has(e,IE_PROTO$2)?e[IE_PROTO$2]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?ObjectProto:null},ITERATOR=_wks("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this},_iterDefine=function(e,t,r,n,o,i,a){_iterCreate(r,t,n);var c,u,s,l=function(e){if(!BUGGY&&e in d)return d[e];switch(e){case KEYS:case VALUES:return function(){return new r(this,e)}}return function(){return new r(this,e)}},_=t+" Iterator",f=o==VALUES,p=!1,d=e.prototype,y=d[ITERATOR]||d[FF_ITERATOR]||o&&d[o],h=y||l(o),O=o?f?l("entries"):h:void 0,b="Array"==t&&d.entries||y;if(b&&(s=_objectGpo(b.call(new e)))!==Object.prototype&&s.next&&(_setToStringTag(s,_,!0),"function"!=typeof s[ITERATOR]&&_hide(s,ITERATOR,returnThis)),f&&y&&y.name!==VALUES&&(p=!0,h=function(){return y.call(this)}),(BUGGY||p||!d[ITERATOR])&&_hide(d,ITERATOR,h),_iterators[t]=h,_iterators[_]=returnThis,o)if(c={values:f?h:l(VALUES),keys:i?h:l(KEYS),entries:O},a)for(u in c)u in d||_redefine(d,u,c[u]);else _export(_export.P+_export.F*(BUGGY||p),t,c);return c},es6_array_iterator=_iterDefine(Array,"Array",function(e,t){this._t=_toIobject(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,_iterStep(1)):_iterStep(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])},"values");_iterators.Arguments=_iterators.Array,_addToUnscopables("keys"),_addToUnscopables("values"),_addToUnscopables("entries");for(var ITERATOR$1=_wks("iterator"),TO_STRING_TAG=_wks("toStringTag"),ArrayValues=_iterators.Array,DOMIterables={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},collections=_objectKeys(DOMIterables),i=0;i<collections.length;i++){var key,NAME=collections[i],explicit=DOMIterables[NAME],Collection=_global[NAME],proto=Collection&&Collection.prototype;if(proto&&(proto[ITERATOR$1]||_hide(proto,ITERATOR$1,ArrayValues),proto[TO_STRING_TAG]||_hide(proto,TO_STRING_TAG,NAME),_iterators[NAME]=ArrayValues,explicit))for(key in es6_array_iterator)proto[key]||_redefine(proto,key,es6_array_iterator[key],!0)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _global$1=createCommonjsModule(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),_core$1=createCommonjsModule(function(e){var t=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=t)}),_core_1$1=_core$1.version,_aFunction$1=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},_ctx$1=function(e,t,r){if(_aFunction$1(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}},_isObject$1=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_anObject$1=function(e){if(!_isObject$1(e))throw TypeError(e+" is not an object!");return e},_fails$1=function(e){try{return!!e()}catch(e){return!0}},_descriptors$1=!_fails$1(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document$3=_global$1.document,is$1=_isObject$1(document$3)&&_isObject$1(document$3.createElement),_domCreate$1=function(e){return is$1?document$3.createElement(e):{}},_ie8DomDefine$1=!_descriptors$1&&!_fails$1(function(){return 7!=Object.defineProperty(_domCreate$1("div"),"a",{get:function(){return 7}}).a}),_toPrimitive$1=function(e,t){if(!_isObject$1(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!_isObject$1(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!_isObject$1(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!_isObject$1(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},dP$1=Object.defineProperty,f$1=_descriptors$1?Object.defineProperty:function(e,t,r){if(_anObject$1(e),t=_toPrimitive$1(t,!0),_anObject$1(r),_ie8DomDefine$1)try{return dP$1(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e},_objectDp$1={f:f$1},_propertyDesc$1=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},_hide$1=_descriptors$1?function(e,t,r){return _objectDp$1.f(e,t,_propertyDesc$1(1,r))}:function(e,t,r){return e[t]=r,e},hasOwnProperty$1={}.hasOwnProperty,_has$1=function(e,t){return hasOwnProperty$1.call(e,t)},PROTOTYPE$2="prototype",$export$1=function(e,t,r){var n,o,i,a=e&$export$1.F,c=e&$export$1.G,u=e&$export$1.S,s=e&$export$1.P,l=e&$export$1.B,_=e&$export$1.W,f=c?_core$1:_core$1[t]||(_core$1[t]={}),p=f[PROTOTYPE$2],d=c?_global$1:u?_global$1[t]:(_global$1[t]||{})[PROTOTYPE$2];for(n in c&&(r=t),r)(o=!a&&d&&void 0!==d[n])&&_has$1(f,n)||(i=o?d[n]:r[n],f[n]=c&&"function"!=typeof d[n]?r[n]:l&&o?_ctx$1(i,_global$1):_&&d[n]==i?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[PROTOTYPE$2]=e[PROTOTYPE$2],t}(i):s&&"function"==typeof i?_ctx$1(Function.call,i):i,s&&((f.virtual||(f.virtual={}))[n]=i,e&$export$1.R&&p&&!p[n]&&_hide$1(p,n,i)))};$export$1.F=1,$export$1.G=2,$export$1.S=4,$export$1.P=8,$export$1.B=16,$export$1.W=32,$export$1.U=64,$export$1.R=128;var _export$1=$export$1;_export$1(_export$1.S+_export$1.F*!_descriptors$1,"Object",{defineProperty:_objectDp$1.f});var $Object=_core$1.Object,defineProperty=function(e,t,r){return $Object.defineProperty(e,t,r)},defineProperty$1=defineProperty;function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),defineProperty$1(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?defineProperty$1(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var AMapContainer=function(){function e(){_classCallCheck(this,e),_defineProperty(this,"dom",null),_defineProperty(this,"layer",null),_defineProperty(this,"visible",!0)}return _createClass(e,[{key:"resize",value:function(){var e=this.getMap().getSize(),t=e.getWidth(),r=e.getHeight();this.dom.style.width=t+"px",this.dom.style.height=r+"px"}},{key:"setRender",value:function(e){this.layer.render=e}},{key:"getMap",value:function(){return this.layer.getMap()}},{key:"getZIndex",value:function(){return this.layer.getzIndex()}},{key:"setZIndex",value:function(e){this.layer.setzIndex(e)}},{key:"setOpacity",value:function(e){this.layer.setOpacity(e)}},{key:"show",value:function(){this.visible||(this.visible=!0,this.layer.show())}},{key:"hide",value:function(){this.visible&&(this.visible=!1,this.layer.hide())}},{key:"getDom",value:function(){return this.dom}},{key:"dispose",value:function(){this.layer.hide(),this.dom=null,this.layer=null}}],[{key:"init",value:function(t){return new Promise(function(r,n){try{AMap.plugin("AMap.CustomLayer",function(){var n=new e,o=document.createElement("div");n.layer=new AMap.CustomLayer(o,{map:t,zIndex:120,alwaysRender:!1}),n.dom=o,n.resize(),r(n)})}catch(e){n(e)}})}}]),e}(),AMapEcharts=function(){function e(){_classCallCheck(this,e),_defineProperty(this,"_amapContainer",null),_defineProperty(this,"_echarts",null),_defineProperty(this,"_cachedOptions",null)}return _createClass(e,[{key:"_init",value:function(e,t,r){var n=e.getDom();return this._amapContainer=e,this._echarts=echarts.init(n,t,r),e.setRender(this._render.bind(this)),this._mixin()}},{key:"_mixin",value:function(){var e=this,t=/^_/,r=Object.getPrototypeOf(this),n=Object.create(this._echarts);return Object.getOwnPropertyNames(r).forEach(function(o){t.test(o)||(n[o]=r[o].bind(e))}),n}},{key:"_render",value:function(){this._echarts.setOption(this._cachedOptions)}},{key:"_clear",value:function(){this._amapContainer=null,this._echarts=null,this._cachedOptions=null}},{key:"getContainer",value:function(){return this._amapContainer}},{key:"resize",value:function(){this._amapContainer.resize(),this._echarts.resize()}},{key:"setOption",value:function(e){var t,r=this;e.getMap=function(){return r._amapContainer.getMap()},this._cachedOptions=e;for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];(t=this._echarts).setOption.apply(t,[e].concat(o))}},{key:"dispose",value:function(){this._echarts.dispose(),this._amapContainer.dispose(),this._clear()}}],[{key:"init",value:function(t,r,n){return AMapContainer.init(t).then(function(t){return(new e)._init(t,r,n)})}}]),e}(),AMapCoordinate=function(){function e(t){_classCallCheck(this,e),_defineProperty(this,"map",null),_defineProperty(this,"model",null),_defineProperty(this,"axisPointerEnabled",!1),_defineProperty(this,"dimensions",e.dimensions),this.map=t}return _createClass(e,null,[{key:"getDimensionsInfo",value:function(){return e.dimensions}},{key:"create",value:function(t){var r=t.getOption();if(r.getMap){var n=new e(r.getMap());t.eachSeries(function(e){"amap"===e.get("coordinateSystem")&&(e.coordinateSystem=n)})}}}]),_createClass(e,[{key:"dataToPoint",value:function(e){var t=this.map.lngLatToContainer(e);return[t.x,t.y]}},{key:"pointToData",value:function(e){var t=this.map.containerToLngLat({x:e[0],y:e[1]});return[t.lng,t.lat]}}]),e}();_defineProperty(AMapCoordinate,"dimensions",["lng","lat"]),echarts.registerCoordinateSystem("amap",AMapCoordinate),exports.default=AMapEcharts;
//# sourceMappingURL=amap-echarts.cjs.js.map
