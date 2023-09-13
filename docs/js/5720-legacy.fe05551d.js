"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[5720],{95720:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=function(){var e=this,t=e._self._c;return t("ele-modal",{attrs:{width:"460px",visible:e.visible,"close-on-click-modal":!0,title:e.isUpdate?"修改角色":"添加角色"},on:{"update:visible":e.updateVisible},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:function(t){return e.updateVisible(!1)}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v(" 保存 ")])]},proxy:!0}])},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"82px"}},[t("el-form-item",{attrs:{label:"角色名称:",prop:"roleName"}},[t("el-input",{attrs:{clearable:"",maxlength:20,placeholder:"请输入角色名称"},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),t("el-form-item",{attrs:{label:"角色标识:",prop:"roleCode"}},[t("el-input",{attrs:{clearable:"",maxlength:20,placeholder:"请输入角色标识"},model:{value:e.form.roleCode,callback:function(t){e.$set(e.form,"roleCode",t)},expression:"form.roleCode"}})],1),t("el-form-item",{attrs:{label:"备注:"}},[t("el-input",{attrs:{rows:4,type:"textarea",maxlength:200,placeholder:"请输入备注"},model:{value:e.form.comments,callback:function(t){e.$set(e.form,"comments",t)},expression:"form.comments"}})],1)],1)],1)},a=[],s=r(95082),u=r(49967),o={props:{visible:Boolean,data:Object},data:function(){var e={roleId:null,roleName:"",roleCode:"",comments:""};return{defaultForm:e,form:(0,s.Z)({},e),rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}],roleCode:[{required:!0,message:"请输入角色标识",trigger:"blur"}]},loading:!1,isUpdate:!1}},methods:{save:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.loading=!0;var r=e.isUpdate?u.ul:u._d;r(e.form).then((function(t){e.loading=!1,e.$message.success(t),e.updateVisible(!1),e.$emit("done")})).catch((function(t){e.loading=!1,e.$message.error(t.message)}))}))},updateVisible:function(e){this.$emit("update:visible",e)}},watch:{visible:function(e){e?this.data?(this.$util.assignObject(this.form,this.data),this.isUpdate=!0):this.isUpdate=!1:(this.$refs.form.clearValidate(),this.form=(0,s.Z)({},this.defaultForm))}}},i=o,c=r(1001),l=(0,c.Z)(i,n,a,!1,null,null,null),p=l.exports},49967:function(e,t,r){r.d(t,{AC:function(){return v},_d:function(){return l},fr:function(){return u},l5:function(){return f},rs:function(){return b},tO:function(){return x},ul:function(){return m},xv:function(){return i}});var n=r(50124),a=r(48534),s=(r(41539),r(21703),r(84471));function u(e){return o.apply(this,arguments)}function o(){return o=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/system/role/page",{params:t});case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.data);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function i(e){return c.apply(this,arguments)}function c(){return c=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/system/role",{params:t});case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.data);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/system/role",t);case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return d=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/system/role",t);case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z["delete"]("/system/role/"+t);case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return w=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z["delete"]("/system/role/batch",{data:t});case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return g=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/system/role-menu/"+t);case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.data);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function x(e,t){return Z.apply(this,arguments)}function Z(){return Z=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put("/system/role-menu/"+t,r);case 2:if(a=e.sent,0!==a.data.code){e.next=5;break}return e.abrupt("return",a.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(a.data.message)));case 6:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}}}]);