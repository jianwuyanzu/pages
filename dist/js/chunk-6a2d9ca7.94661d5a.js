(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a2d9ca7"],{"27bb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"layout"},[a("el-aside",[a("Sidebar",{ref:"sidebar",staticClass:"customScrollbar"})],1),a("el-container",[a("el-header",[a("AppHeader",{on:{collSide:function(e){t.collSide()}}})],1),a("el-main",{staticClass:"customScrollbar"},[a("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-menu",{staticClass:"sidebar",attrs:{router:"","default-active":t.navSet.defaultActive,collapse:t.navSet.isCollapse,"background-color":t.navSet.backgroundColor,"text-color":t.navSet.textColor,"active-text-color":t.navSet.activeTextColor}},t._l(t.sideBar,function(e,n){return a("div",{key:n,class:t.menuDIV},[e.children[0]?a("el-submenu",{attrs:{index:e.name}},[a("template",{slot:"title"},[a("i",{staticClass:"fa",class:t.iconClass(e.icon)}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),a("el-menu-item-group",t._l(e.children,function(e,n){return a("el-menu-item",{key:n,attrs:{index:e.name,route:{name:e.name}}},[a("span",[t._v(t._s(e.title))])])}),1)],2):a("el-menu-item",{attrs:{index:e.name,route:{name:e.name}}},[a("i",{staticClass:"fa",class:t.iconClass(e.icon)}),a("span",[t._v(t._s(e.title))])])],1)}),0)},s=[],o=(a("7f7f"),[{title:"canvas时钟",name:"canvasTime",path:"/layout/canvasTime",icon:"fa-clock-o",children:[]},{title:"h5GAME",name:"h5GAME",path:"/layout/h5GAME",icon:"fa-gamepad",children:[{title:"粒子逃脱",name:"escape",path:"/layout/h5GAME/escape"}]}]),c=o,l={data:function(){return{navSet:{defaultActive:this.$route.name,isCollapse:!1,backgroundColor:"#545c64",textColor:"#fff",activeTextColor:"#ffd04b"},sideBar:c}},computed:{menuDIV:function(){return{"el-menu--collapse":this.navSet.isCollapse}}},methods:{changeSide:function(){this.navSet.isCollapse=!this.navSet.isCollapse},iconClass:function(t){var e={};return e[t]=!0,e},getSideBar:function(){}},mounted:function(){}},u=l,d=(a("334d"),a("2877")),m=Object(d["a"])(u,r,s,!1,null,"40a50ec5",null);m.options.__file="Sidebar.vue";var f=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"header"},[a("span",{staticClass:"sg",class:{turn:t.istrun},on:{click:function(e){t.collSide()}}},[t._v("☰")]),a("Breadcrumb",{attrs:{model:t.breadcrumbData}}),a("ul",{staticClass:"user"},[t._m(0),a("el-dropdown",{attrs:{placement:"bottom-end"},on:{command:t.userClick}},[a("span",[t._v("\r\n                "+t._s(t.userName)),a("i",{staticClass:"el-icon-arrow-down"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{divided:"",command:"loginOut"}},[t._v("退出")])],1)],1)],1)],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",[a("img",{attrs:{src:""}})])}],b=(a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"breadcrumb"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("transition-group",{attrs:{name:"breadcrumbItem"}},t._l(t.model,function(e,n){return a("el-breadcrumb-item",{key:n+1,attrs:{to:{path:e.path}}},[a("span",[t._v(t._s(e.text))])])}),1)],1)],1)}),v=[],S=(a("5348"),{props:{model:{type:Array,default:function(){return[]}}},methods:{},mounted:function(){}}),C=S,_=(a("2f2f"),Object(d["a"])(C,b,v,!1,null,"1f171cc4",null));_.options.__file="Breadcrumb.vue";var L=_.exports,g=function(t){var e=[];return t.matched.forEach(function(t,a,n){t.meta&&t.meta.title&&e.push({text:t.meta.title,name:t.name,path:t.path})}),e},T={data:function(){return{istrun:!1,userName:"用户不存在",breadcrumbData:[]}},components:{Breadcrumb:L},methods:{collSide:function(){this.istrun=!this.istrun,this.$emit("collSide")},userClick:function(t){this.$router.push({name:"Login"})}},watch:{$route:function(){var t=this;this.breadcrumbData=[],setTimeout(function(){t.breadcrumbData=g(t.$route)})}},mounted:function(){this.breadcrumbData=g(this.$route)}},x=T,y=(a("8bec"),Object(d["a"])(x,p,h,!1,null,"e09a7a40",null));y.options.__file="Header.vue";var k=y.exports,w={components:{Sidebar:f,AppHeader:k},methods:{collSide:function(){this.$refs.sidebar.changeSide(),this.ofl=!this.ofl}}},M=w,A=(a("99f5"),Object(d["a"])(M,n,i,!1,null,"58f2e80c",null));A.options.__file="layout.vue";e["default"]=A.exports},"2f2f":function(t,e,a){"use strict";var n=a("3841"),i=a.n(n);i.a},"334d":function(t,e,a){"use strict";var n=a("4bd2"),i=a.n(n);i.a},3841:function(t,e,a){},"4bd2":function(t,e,a){},"8bec":function(t,e,a){"use strict";var n=a("c1f8"),i=a.n(n);i.a},"99f5":function(t,e,a){"use strict";var n=a("ba02"),i=a.n(n);i.a},ac6a:function(t,e,a){for(var n=a("cadf"),i=a("0d58"),r=a("2aba"),s=a("7726"),o=a("32e9"),c=a("84f2"),l=a("2b4c"),u=l("iterator"),d=l("toStringTag"),m=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(f),h=0;h<p.length;h++){var b,v=p[h],S=f[v],C=s[v],_=C&&C.prototype;if(_&&(_[u]||o(_,u,m),_[d]||o(_,d,v),c[v]=m,S))for(b in n)_[b]||r(_,b,n[b],!0)}},ba02:function(t,e,a){},c1f8:function(t,e,a){}}]);