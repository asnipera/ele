"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[4562],{4562:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never"}},[t("ele-pro-table",{ref:"table",attrs:{"row-key":"menuId",title:"树形表格懒加载",columns:e.columns,datasource:e.datasource,"need-page":!1,lazy:!0,size:"mini"},scopedSlots:e._u([{key:"title",fn:function({row:n}){return[t("i",{class:n.icon}),e._v(" "+e._s(n.title)+" ")]}}])})],1)},r=[],o=n(22677),s={data(){return{columns:[{columnKey:"index",type:"index",width:45,align:"center",showOverflowTooltip:!0},{prop:"title",label:"菜单名称",showOverflowTooltip:!0,minWidth:110,slot:"title"},{prop:"path",label:"路由地址",showOverflowTooltip:!0,minWidth:110},{prop:"component",label:"组件路径",showOverflowTooltip:!0,minWidth:110},{prop:"sortNumber",label:"排序",align:"center",showOverflowTooltip:!0,width:60},{prop:"createTime",label:"创建时间",showOverflowTooltip:!0,minWidth:110,formatter:(e,t,n)=>this.$util.toDateString(n)}]}},methods:{datasource({where:e,parent:t}){return(0,o.sF)({...e,parentId:t?.menuId??0})}}},i=s,l=n(1001),u=(0,l.Z)(i,a,r,!1,null,null,null),c=u.exports},22677:function(e,t,n){n.d(t,{_8:function(){return s},bL:function(){return o},n_:function(){return i},sF:function(){return r}});n(21703);var a=n(84471);async function r(e){const t=await a.Z.get("/system/menu",{params:e});return 0===t.data.code?t.data.data:Promise.reject(new Error(t.data.message))}async function o(e){const t=await a.Z.post("/system/menu",e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function s(e){const t=await a.Z.put("/system/menu",e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function i(e){const t=await a.Z["delete"]("/system/menu/"+e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}}}]);