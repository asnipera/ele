"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[3475],{23475:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("ele-modal",{attrs:{width:"460px",title:"分配权限",visible:e.visible},on:{"update:visible":e.updateVisible},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:function(t){return e.updateVisible(!1)}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v(" 保存 ")])]},proxy:!0}])},[t("el-scrollbar",{directives:[{name:"loading",rawName:"v-loading",value:e.authLoading,expression:"authLoading"}],staticStyle:{height:"60vh"},attrs:{"wrap-style":"overflow-x: hidden;"}},[t("el-tree",{ref:"tree",attrs:{"show-checkbox":"",data:e.authData,"node-key":"menuId","default-expand-all":!0,props:{label:"title"},"default-checked-keys":e.checkedKeys},scopedSlots:e._u([{key:"default",fn:function({data:a}){return[t("span",[t("i",{class:a.icon}),t("span",[e._v(" "+e._s(a.title))])])]}}])})],1)],1)},n=[],r=a(49967),i={props:{visible:Boolean,data:Object},data(){return{authData:[],authLoading:!1,loading:!1,checkedKeys:[]}},methods:{query(){this.authData=[],this.checkedKeys=[],this.data&&(this.authLoading=!0,(0,r.AC)(this.data.roleId).then((e=>{this.authLoading=!1,this.authData=this.$util.toTreeData({data:e,idKey:"menuId",pidKey:"parentId"});const t=[];this.$util.eachTreeData(this.authData,(e=>{e.checked&&!e.children?.length&&t.push(e.menuId)})),this.checkedKeys=t})).catch((e=>{this.authLoading=!1,this.$message.error(e.message)})))},save(){this.loading=!0;const e=this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());(0,r.tO)(this.data.roleId,e).then((e=>{this.loading=!1,this.$message.success(e),this.updateVisible(!1)})).catch((e=>{this.loading=!1,this.$message.error(e.message)}))},updateVisible(e){this.$emit("update:visible",e)}},watch:{visible(e){e&&this.query()}}},o=i,d=a(1001),c=(0,d.Z)(o,s,n,!1,null,null,null),u=c.exports},49967:function(e,t,a){a.d(t,{AC:function(){return u},_d:function(){return i},fr:function(){return n},l5:function(){return d},rs:function(){return c},tO:function(){return l},ul:function(){return o},xv:function(){return r}});a(21703);var s=a(84471);async function n(e){const t=await s.Z.get("/system/role/page",{params:e});return 0===t.data.code?t.data.data:Promise.reject(new Error(t.data.message))}async function r(e){const t=await s.Z.get("/system/role",{params:e});return 0===t.data.code?t.data.data:Promise.reject(new Error(t.data.message))}async function i(e){const t=await s.Z.post("/system/role",e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function o(e){const t=await s.Z.put("/system/role",e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function d(e){const t=await s.Z["delete"]("/system/role/"+e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function c(e){const t=await s.Z["delete"]("/system/role/batch",{data:e});return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function u(e){const t=await s.Z.get("/system/role-menu/"+e);return 0===t.data.code?t.data.data:Promise.reject(new Error(t.data.message))}async function l(e,t){const a=await s.Z.put("/system/role-menu/"+e,t);return 0===a.data.code?a.data.message:Promise.reject(new Error(a.data.message))}}}]);