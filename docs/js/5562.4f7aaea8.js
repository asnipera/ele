"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[5562],{95562:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("el-card",{attrs:{shadow:"never",header:"修改菜单徽章数据"}},[t("el-form",{staticStyle:{"max-width":"360px","padding-top":"20px"},attrs:{"label-width":"90px"}},[t("el-form-item",{attrs:{label:"菜单:"}},[t("ele-tree-select",{attrs:{clearable:"",data:e.treeData,"default-expand-all":"",placeholder:"请选择菜单"},model:{value:e.path,callback:function(t){e.path=t},expression:"path"}})],1),t("el-form-item",{attrs:{label:"徽章值:"}},[t("el-input",{attrs:{placeholder:"请输入徽章值",clearable:"",maxlength:20},model:{value:e.badge,callback:function(t){e.badge=t},expression:"badge"}})],1),t("el-form-item",{attrs:{label:"徽章颜色:"}},[t("el-select",{staticClass:"ele-fluid",attrs:{placeholder:"请选择徽章颜色",clearable:""},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}},[t("el-option",{attrs:{label:"primary",value:"primary"}}),t("el-option",{attrs:{label:"success",value:"success"}}),t("el-option",{attrs:{label:"warning",value:"warning"}}),t("el-option",{attrs:{label:"danger",value:"danger"}}),t("el-option",{attrs:{label:"info",value:"info"}})],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.setBadge}},[e._v("更新")])],1)],1)],1),t("el-card",{attrs:{shadow:"never",header:"分组菜单"}},[t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.toMenuGroup1}},[e._v(" 一级菜单变为分组形式 ")])],1),t("div",{staticStyle:{"margin-top":"16px"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.toMenuGroup2}},[e._v(" 二级菜单变为分组形式 ")])],1),t("div",{staticClass:"ele-text-secondary",staticStyle:{"margin-top":"6px"}},[e._v(" 二级菜单可查看列表页面/卡片列表的效果 ")])])],1)},r=[],s=a(20383),o={name:"ExampleMenuBadge",data(){return{path:"",badge:"",color:"",orgMenus:JSON.parse(JSON.stringify(this.$store.state.user.menus))}},computed:{treeData(){return(0,s.lt)(this.$store.state.user.menus,(e=>({...e,value:e.path,label:e.meta.title})))}},methods:{setBadge(){this.path?this.$store.dispatch("user/setMenuBadge",{path:this.path,value:this.badge,color:this.color||void 0}):this.$message.error("请选择菜单")},toMenuGroup1(){this.$store.dispatch("user/setMenus",this.orgMenus.map((e=>({...e,meta:{...e.meta,group:!0}}))))},toMenuGroup2(){this.$store.dispatch("user/setMenus",this.orgMenus.map((e=>({...e,children:e.children?e.children.map((e=>({...e,meta:{...e.meta,group:!0}}))):void 0}))))}}},i=o,n=a(1001),u=(0,n.Z)(i,l,r,!1,null,null,null),p=u.exports}}]);