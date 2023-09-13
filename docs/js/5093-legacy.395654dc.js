"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[5093,1306],{85093:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var a=function(){var e=this,r=e._self._c;return r("div",{staticClass:"ele-body"},[r("el-card",{attrs:{shadow:"never"}},[r("edit-form")],1)],1)},l=[],o=t(41306),s={name:"ListBasicAdd",components:{EditForm:o["default"]}},n=s,i=t(1001),m=(0,i.Z)(n,a,l,!1,null,null,null),u=m.exports},41306:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var a=function(){var e=this,r=e._self._c;return r("el-form",{ref:"form",staticStyle:{"max-width":"600px",margin:"0 auto"},attrs:{model:e.form,rules:e.rules,"label-width":"82px"}},[r("el-form-item",{attrs:{label:"用户账号:",prop:"username"}},[r("el-input",{attrs:{clearable:"",maxlength:20,disabled:e.isUpdate,placeholder:"请输入用户账号"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"用户名:",prop:"nickname"}},[r("el-input",{attrs:{clearable:"",maxlength:20,placeholder:"请输入用户名"},model:{value:e.form.nickname,callback:function(r){e.$set(e.form,"nickname",r)},expression:"form.nickname"}})],1),r("el-form-item",{attrs:{label:"性别:",prop:"sex"}},[r("el-select",{staticClass:"ele-block",attrs:{clearable:"",placeholder:"请选择性别"},model:{value:e.form.sex,callback:function(r){e.$set(e.form,"sex",r)},expression:"form.sex"}},[r("el-option",{attrs:{label:"男",value:"1"}}),r("el-option",{attrs:{label:"女",value:"2"}})],1)],1),r("el-form-item",{attrs:{label:"角色:",prop:"roleIds"}},[r("role-select",{model:{value:e.form.roleIds,callback:function(r){e.$set(e.form,"roleIds",r)},expression:"form.roleIds"}})],1),r("el-form-item",{attrs:{label:"邮箱:",prop:"email"}},[r("el-input",{attrs:{clearable:"",maxlength:100,placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"手机号:",prop:"phone"}},[r("el-input",{attrs:{clearable:"",maxlength:11,placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",r)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{label:"出生日期:",prop:"birthday"}},[r("el-date-picker",{staticClass:"ele-fluid",attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择出生日期"},model:{value:e.form.birthday,callback:function(r){e.$set(e.form,"birthday",r)},expression:"form.birthday"}})],1),e.isUpdate?e._e():r("el-form-item",{attrs:{label:"登录密码:",prop:"password"}},[r("el-input",{attrs:{"show-password":"",maxlength:20,placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("el-form-item",{attrs:{label:"个人简介:"}},[r("el-input",{attrs:{rows:4,clearable:"",type:"textarea",maxlength:200,placeholder:"请输入个人简介"},model:{value:e.form.introduction,callback:function(r){e.$set(e.form,"introduction",r)},expression:"form.introduction"}})],1),r("el-form-item",[r("el-button",{on:{click:e.onClose}},[e._v("关闭")]),r("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v(" 保存 ")])],1)],1)},l=[],o=t(95082),s=(t(21703),t(21249),t(33721)),n=t(84045),i=t(59477),m=t(45623),u={components:{RoleSelect:n["default"]},props:{data:Object},data:function(){var e=this,r={userId:null,username:"",nickname:"",sex:null,roleIds:[],email:"",phone:"",birthday:"",password:"",introduction:""};return{defaultForm:r,form:(0,o.Z)({},r),rules:{username:[{required:!0,trigger:"blur",validator:function(r,t,a){var l;if(!t)return a(new Error("请输入用户账号"));(0,i.mL)("username",t,null===(l=e.data)||void 0===l?void 0:l.username).then((function(){a(new Error("账号已经存在"))})).catch((function(){a()}))}}],nickname:[{required:!0,message:"请输入用户名",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],roleIds:[{required:!0,message:"请选择角色",trigger:"blur"}],email:[{pattern:s.m0,message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,pattern:/^[\S]{5,18}$/,message:"密码必须为5-18位非空白字符",trigger:"blur"}],phone:[{pattern:s.$v,message:"手机号格式不正确",trigger:"blur"}]},loading:!1,isUpdate:!1}},methods:{save:function(){var e=this;this.$refs.form.validate((function(r){if(!r)return!1;e.loading=!0;var t=(0,o.Z)((0,o.Z)({},e.form),{},{roles:e.form.roleIds.map((function(e){return{roleId:e}}))}),a=e.isUpdate?i.Nq:i.cn;a(t).then((function(r){e.loading=!1,e.$message.success(r),e.onDone()})).catch((function(r){e.loading=!1,e.$message.error(r.message)}))}))},onClose:function(){(0,m.BR)({key:this.$route.path}),this.$router.push("/list/basic")},onDone:function(){(0,m.BR)({key:this.$route.path}),(0,m.Cy)({fullPath:"/list/basic"})}},watch:{data:{handler:function(e){var r;e?(this.$util.assignObject(this.form,(0,o.Z)((0,o.Z)({},e),{},{roleIds:e.roles.map((function(e){return e.roleId})),password:""})),this.isUpdate=!0):(this.isUpdate=!1,null===(r=this.$refs.form)||void 0===r||r.clearValidate(),this.form=(0,o.Z)({},this.defaultForm))},immediate:!0}}},c=u,d=t(1001),f=(0,d.Z)(c,a,l,!1,null,null,null),p=f.exports}}]);