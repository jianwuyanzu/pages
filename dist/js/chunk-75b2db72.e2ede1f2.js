(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75b2db72"],{"6bf2":function(t,a,l){"use strict";l.r(a);var e=function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticClass:"AUTOGRAPH"},[l("el-card",{staticClass:"card"},[l("div",{attrs:{slot:"header"},slot:"header"},[l("span",{staticClass:"FS18"},[t._v("签名canvasAutoGraph")]),l("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(a){t.modal=!0}}},[t._v("示例")])],1),l("div",[l("h3",[t._v("Attributes")]),l("el-table",{attrs:{data:t.attributesList,border:""}},[l("el-table-column",{attrs:{prop:"attr",label:"参数"}}),l("el-table-column",{attrs:{prop:"des",label:"说明"}}),l("el-table-column",{attrs:{prop:"type",label:"类型"}}),l("el-table-column",{attrs:{prop:"optional",label:"可选值"}}),l("el-table-column",{attrs:{prop:"default",label:"默认值"}})],1),l("h3",[t._v("Events")]),l("el-table",{attrs:{data:t.eventsList,border:""}},[l("el-table-column",{attrs:{prop:"funName",label:"事件名"}}),l("el-table-column",{attrs:{prop:"des",label:"说明"}}),l("el-table-column",{attrs:{prop:"attr",label:"参数"}})],1)],1)]),l("el-dialog",{attrs:{title:"示例",visible:t.modal,fullscreen:!0},on:{"update:visible":function(a){t.modal=a}}},[l("div",{staticClass:"modal"},[l("div",{staticClass:"buttonGroup"},[l("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.clear()}}},[t._v("清除")]),l("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.toDataURL()}}},[t._v("确认")])],1),l("div",{staticClass:"broad"},[l("canvasAutoGraph",{ref:"canvasAutoGraph",staticClass:"canvasAutoGraph"}),l("img",{attrs:{src:t.url}})],1)])])],1)},s=[],r=(l("cadf"),l("551c"),l("097d"),{data:function(){var t=[],a=[];return{attributesList:t,eventsList:a,modal:!1,url:""}},methods:{clear:function(){this.$refs.canvasAutoGraph.clear()},toDataURL:function(){var t=this;this.$refs.canvasAutoGraph.toDataURL().then(function(a){console.log(a),t.url=a.base64})}}}),o=r,n=(l("afb7"),l("2877")),c=Object(n["a"])(o,e,s,!1,null,"3423c6a3",null);c.options.__file="canvasAutoGraph.vue";a["default"]=c.exports},afb7:function(t,a,l){"use strict";var e=l("cc5e"),s=l.n(e);s.a},cc5e:function(t,a,l){}}]);