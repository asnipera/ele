"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[3634,3493],{73493:function(e,t,l){l.r(t),l.d(t,{default:function(){return b}});l(68309);var r=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"选择成员"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,border:!0}},[t("el-table-column",{attrs:{type:"index",width:"45",align:"center"}}),t("el-table-column",{attrs:{label:"用户名"},scopedSlots:e._u([{key:"default",fn:function(l){var r=l.row;return[r.isEdit?t("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:r.name,callback:function(t){e.$set(r,"name",t)},expression:"row.name"}}):t("span",[e._v(e._s(r.name))])]}}])}),t("el-table-column",{attrs:{label:"工号"},scopedSlots:e._u([{key:"default",fn:function(l){var r=l.row;return[r.isEdit?t("el-input",{attrs:{placeholder:"请输入工号"},model:{value:r.number,callback:function(t){e.$set(r,"number",t)},expression:"row.number"}}):t("span",[e._v(e._s(r.number))])]}}])}),t("el-table-column",{attrs:{label:"所属部门"},scopedSlots:e._u([{key:"default",fn:function(l){var r=l.row;return[r.isEdit?t("el-select",{staticClass:"ele-fluid",attrs:{placeholder:"请选择部门"},model:{value:r.department,callback:function(t){e.$set(r,"department",t)},expression:"row.department"}},[t("el-option",{attrs:{label:"研发部",value:"研发部"}}),t("el-option",{attrs:{label:"测试部",value:"测试部"}}),t("el-option",{attrs:{label:"产品部",value:"产品部"}})],1):t("span",[e._v(e._s(r.department))])]}}])}),t("el-table-column",{attrs:{label:"操作",width:"130px",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(l){var r=l.row,a=l.$index;return[r.isEdit?t("el-link",{attrs:{icon:"el-icon-check",type:"success",underline:!1},on:{click:function(t){return e.done(r,a)}}},[e._v(" 完成 ")]):t("el-link",{attrs:{icon:"el-icon-edit",type:"primary",underline:!1},on:{click:function(t){return e.edit(r,a)}}},[e._v(" 修改 ")]),t("span",{staticClass:"ele-action"},[t("el-popconfirm",{attrs:{title:"确定要删除此用户吗?"},on:{confirm:function(t){return e.remove(r,a)}},scopedSlots:e._u([{key:"reference",fn:function(){return[t("el-link",{attrs:{icon:"el-icon-delete",type:"danger",underline:!1}},[e._v(" 删除 ")])]},proxy:!0}],null,!0)})],1)]}}])})],1),t("el-button",{staticStyle:{width:"100%","margin-top":"15px"},attrs:{icon:"el-icon-plus"},on:{click:e.add}},[e._v(" 新增成员 ")])],1)},a=[],s=l(95082),o=(l(40561),l(21249),l(20383)),n=l(50124),i=l(48534);function c(){return u.apply(this,arguments)}function u(){return u=(0,i.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[{key:"1",number:"00001",name:"John Brown",department:"研发部"},{key:"2",number:"00002",name:"Jim Green",department:"产品部"},{key:"3",number:"00003",name:"Joe Black",department:"产品部"}],e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}var p={data:function(){return{users:[]}},methods:{add:function(){this.users.push({key:(0,o.Vj)(8),isEdit:!0,number:"00001",name:"John Brown",department:"研发部"})},edit:function(e,t){this.users[t].isEdit=!0},remove:function(e,t){this.users.splice(t,1)},done:function(e,t){this.users[t].isEdit=!1}},created:function(){var e=this;c().then((function(t){e.users=t.map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{isEdit:!1})}))})).catch((function(t){e.$message.error(t.message)}))}},m=p,d=l(1001),f=(0,d.Z)(m,r,a,!1,null,null,null),b=f.exports},63634:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});l(68309),l(82526),l(41817);var r=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"ele-body",staticStyle:{"padding-bottom":"71px"}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)},submit:function(e){e.preventDefault()}}},[t("el-card",{attrs:{shadow:"never",header:"仓库信息","body-style":"padding: 22px 22px 0 22px;"}},[t("el-row",{attrs:{gutter:15}},[t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"仓库名:",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入仓库名",clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"仓库域名:",prop:"url"}},[t("el-input",{attrs:{placeholder:"请输入",clearable:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[e._v("http://")]},proxy:!0},{key:"append",fn:function(){return[e._v(".com")]},proxy:!0}]),model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"仓库管理员:",prop:"administrator"}},[t("el-select",{staticClass:"ele-block",attrs:{placeholder:"请选择仓库管理员",clearable:""},model:{value:e.form.administrator,callback:function(t){e.$set(e.form,"administrator",t)},expression:"form.administrator"}},[t("el-option",{attrs:{label:"SunSmile",value:1}}),t("el-option",{attrs:{label:"Jasmine",value:2}})],1)],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"审批人:",prop:"approver"}},[t("el-select",{staticClass:"ele-block",attrs:{placeholder:"请选择审批人",clearable:""},model:{value:e.form.approver,callback:function(t){e.$set(e.form,"approver",t)},expression:"form.approver"}},[t("el-option",{attrs:{label:"SunSmile",value:1}}),t("el-option",{attrs:{label:"Jasmine",value:2}})],1)],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"生效日期:",prop:"datetime"}},[t("el-date-picker",{staticClass:"ele-fluid",attrs:{type:"daterange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.form.datetime,callback:function(t){e.$set(e.form,"datetime",t)},expression:"form.datetime"}})],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"仓库类型:",prop:"type"}},[t("el-select",{staticClass:"ele-fluid",attrs:{placeholder:"请选择仓库类型",clearable:""},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("el-option",{attrs:{label:"私密",value:1}}),t("el-option",{attrs:{label:"公开",value:2}})],1)],1)],1)],1)],1),t("el-card",{attrs:{shadow:"never",header:"任务信息","body-style":"padding: 22px 22px 0 22px;"}},[t("el-row",{attrs:{gutter:15}},[t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"任务名:",prop:"task"}},[t("el-input",{attrs:{placeholder:"请输入任务名",clearable:""},model:{value:e.form.task,callback:function(t){e.$set(e.form,"task",t)},expression:"form.task"}})],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"任务表述:",prop:"description"}},[t("el-input",{attrs:{placeholder:"请输入任务表述",clearable:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"执行人:",prop:"executor"}},[t("el-select",{staticClass:"ele-fluid",attrs:{placeholder:"请选择执行人",clearable:""},model:{value:e.form.executor,callback:function(t){e.$set(e.form,"executor",t)},expression:"form.executor"}},[t("el-option",{attrs:{label:"SunSmile",value:1}}),t("el-option",{attrs:{label:"Jasmine",value:2}})],1)],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"责任人:",prop:"officer"}},[t("el-select",{staticClass:"ele-fluid",attrs:{placeholder:"请选择责任人",clearable:""},model:{value:e.form.officer,callback:function(t){e.$set(e.form,"officer",t)},expression:"form.officer"}},[t("el-option",{attrs:{label:"SunSmile",value:1}}),t("el-option",{attrs:{label:"Jasmine",value:2}})],1)],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"提醒时间:",prop:"reminder"}},[t("el-time-picker",{staticClass:"ele-fluid",attrs:{placeholder:"请选择提醒时间","picker-options":{selectableRange:"00:00:00 - 23:59:59"}},model:{value:e.form.reminder,callback:function(t){e.$set(e.form,"reminder",t)},expression:"form.reminder"}})],1)],1),t("el-col",e._b({},"el-col",e.styleResponsive?{lg:8,md:12}:{span:8},!1),[t("el-form-item",{attrs:{label:"任务类型:",prop:"type"}},[t("el-select",{staticClass:"ele-block",attrs:{placeholder:"请选择任务类型",clearable:""},model:{value:e.form.taskType,callback:function(t){e.$set(e.form,"taskType",t)},expression:"form.taskType"}},[t("el-option",{attrs:{label:"私密",value:1}}),t("el-option",{attrs:{label:"公开",value:2}})],1)],1)],1)],1)],1),t("user-select"),t("div",{staticClass:"ele-bottom-tool"},[e.validMsg?t("div",{staticClass:"ele-text-danger"},[t("i",{staticClass:"el-icon-circle-close"}),t("span",[e._v(e._s(e.validMsg))])]):e._e(),t("div",{staticClass:"ele-bottom-tool-actions"},[t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.submit}},[e._v(" 提交 ")])],1)])],1)],1)])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-page-header"},[t("div",{staticClass:"ele-page-title"},[e._v("复杂表单")]),t("div",{staticClass:"ele-page-desc"},[e._v(" 复杂表单常见于一次性输入和提交大批量数据的场景。 ")])])}],s=(l(47941),l(73493)),o={name:"FormAdvanced",components:{UserSelect:s["default"]},data:function(){return{loading:!1,form:{weight:0,publicType:1},rules:{name:[{required:!0,message:"请输入仓库名",trigger:"blur"}],url:[{required:!0,message:"请输入仓库域名",trigger:"blur"}],datetime:[{required:!0,message:"请选择生效日期",trigger:"blur"}],administrator:[{required:!0,message:"请选择仓库管理员",trigger:"blur"}],approver:[{required:!0,message:"请选择审批人",trigger:"blur"}],type:[{required:!0,message:"请选择仓库类型",trigger:"blur"}],task:[{required:!0,message:"请输入任务名",trigger:"blur"}],description:[{required:!0,message:"请输入任务表述",trigger:"blur"}],executor:[{required:!0,message:"请选择执行人",trigger:"blur"}],officer:[{required:!0,message:"请选择责任人",trigger:"blur"}],reminder:[{required:!0,message:"请选择提醒时间",trigger:"blur"}],taskType:[{required:!0,message:"请选择任务类型",trigger:"blur"}]},validMsg:""}},computed:{styleResponsive:function(){return this.$store.state.theme.styleResponsive}},methods:{submit:function(){var e=this;this.$refs.form.validate((function(t,l){if(!t)return e.validMsg=" 共有校验 ".concat(Object.keys(l).length," 项不通过"),!1;e.validMsg="",e.loading=!0,setTimeout((function(){e.loading=!1,e.$message.success("提交成功")}),1500)}))}}},n=o,i=l(1001),c=(0,i.Z)(n,r,a,!1,null,null,null),u=c.exports}}]);