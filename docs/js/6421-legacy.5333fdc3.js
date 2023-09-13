"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[6421,6152,6614,5104],{66152:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var o=function(){var e=this,t=e._self._c;return t("div")},i=[],a={created:function(){console.log("弹窗内组件创建")},destroyed:function(){console.log("弹窗内组件销毁")}},n=a,s=l(1001),r=(0,s.Z)(n,o,i,!1,null,null,null),u=r.exports},76614:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var o=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"可拖拽、拉伸、全屏弹窗"}},[t("el-form",{staticStyle:{"max-width":"360px"},attrs:{"label-width":"140px"}},[t("el-form-item",{attrs:{label:"是否可拖出边界:"}},[t("el-select",{staticClass:"ele-block",model:{value:e.moveOut,callback:function(t){e.moveOut=t},expression:"moveOut"}},[t("el-option",{attrs:{label:"不可拖出边界",value:0}}),t("el-option",{attrs:{label:"可以拖出边界",value:1}}),t("el-option",{attrs:{label:"只可右下方向拖出边界",value:2}})],1)],1),t("el-form-item",{attrs:{label:"是否可拉伸大小:"}},[t("el-select",{staticClass:"ele-block",model:{value:e.resizable,callback:function(t){e.resizable=t},expression:"resizable"}},[t("el-option",{attrs:{label:"不可拉伸大小",value:"false"}}),t("el-option",{attrs:{label:"可以拉伸大小",value:"true"}}),t("el-option",{attrs:{label:"只可横向拉伸",value:"horizontal"}}),t("el-option",{attrs:{label:"只可纵向拉伸",value:"vertical"}})],1)],1),t("el-form-item",{attrs:{label:"最大化切换按钮:"}},[t("el-switch",{model:{value:e.maxable,callback:function(t){e.maxable=t},expression:"maxable"}})],1),t("el-form-item",{attrs:{label:"关闭后重置位置:"}},[t("el-switch",{model:{value:e.resetOnClose,callback:function(t){e.resetOnClose=t},expression:"resetOnClose"}})],1),t("el-form-item",{attrs:{label:"限制在主体区域:"}},[t("el-switch",{model:{value:e.inner,callback:function(t){e.inner=t},expression:"inner"}})],1),t("el-form-item",{attrs:{label:"默认位置:"}},[t("el-select",{staticClass:"ele-block",attrs:{clearable:""},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}},[t("el-option",{attrs:{label:"顶部",value:"top"}}),t("el-option",{attrs:{label:"底部",value:"bottom"}}),t("el-option",{attrs:{label:"左边",value:"left"}}),t("el-option",{attrs:{label:"右边",value:"right"}}),t("el-option",{attrs:{label:"左上角",value:"leftTop"}}),t("el-option",{attrs:{label:"左下角",value:"leftBottom"}}),t("el-option",{attrs:{label:"右上角",value:"rightTop"}}),t("el-option",{attrs:{label:"右下角",value:"rightBottom"}}),t("el-option",{attrs:{label:"正中间",value:"center"}})],1)],1),t("el-form-item",{attrs:{label:"destroy-on-close:"}},[t("el-switch",{model:{value:e.destroyOnClose,callback:function(t){e.destroyOnClose=t},expression:"destroyOnClose"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.openDialog}},[e._v("打开可拖拽弹窗")])],1)],1),t("ele-modal",{attrs:{width:"400px",title:"拖拽弹窗",visible:e.visible,"move-out":e.moveOut>0,"move-out-positive":2===e.moveOut,resizable:e.modalResizable,maxable:e.maxable,inner:e.inner,centered:e.centered,"reset-on-close":e.resetOnClose,"append-to-body":!0,"destroy-on-close":e.destroyOnClose,"mask-keep-alive":e.inner||!e.destroyOnClose,position:e.position},on:{"update:visible":function(t){e.visible=t},closed:e.cancel},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:e.cancel}},[e._v("取消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])]},proxy:!0}])},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"82px"}},[t("el-form-item",{attrs:{label:"用户名:",prop:"nickname"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入用户名"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),t("el-form-item",{attrs:{label:"性别:",prop:"sex"}},[t("el-select",{staticClass:"ele-fluid",attrs:{clearable:"",placeholder:"请选择性别","popper-append-to-body":!1},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:"男"}}),t("el-option",{attrs:{label:"女",value:"女"}})],1)],1),t("el-form-item",{attrs:{label:"手机号:",prop:"phone"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),t("el-form-item",{attrs:{label:"邮箱:",prop:"email"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("el-form-item",{attrs:{label:"个人简介:"}},[t("el-input",{attrs:{rows:4,clearable:"",type:"textarea",placeholder:"请输入个人简介"},model:{value:e.form.introduction,callback:function(t){e.$set(e.form,"introduction",t)},expression:"form.introduction"}})],1)],1),t("component-test")],1)],1)},i=[],a=l(66152),n={components:{ComponentTest:a["default"]},data:function(){return{visible:!1,moveOut:0,resizable:"false",maxable:!0,resetOnClose:!0,inner:!1,centered:!1,form:{nickname:"",sex:void 0,phone:"",email:"",introduction:""},rules:{nickname:[{required:!0,message:"请输入用户名",type:"string"}],sex:[{required:!0,message:"请选择性别",type:"string"}],phone:[{required:!0,message:"请输入手机号",type:"string"}],email:[{required:!0,message:"请输入邮箱",type:"string"}]},destroyOnClose:!1,position:void 0}},computed:{modalResizable:function(){return"true"===this.resizable||"false"!==this.resizable&&this.resizable}},methods:{openDialog:function(){this.visible||(this.visible=!0)},cancel:function(){var e=this;this.form={nickname:"",sex:void 0,phone:"",email:"",introduction:""},this.$nextTick((function(){e.$refs.form.clearValidate()})),this.visible=!1},save:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.$message.success("保存成功")}))}}},s=n,r=l(1001),u=(0,r.Z)(s,o,i,!1,null,null,null),c=u.exports},85104:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var o=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"同时打开多个弹窗"}},[t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.openDialog1}},[e._v("打开弹窗1")]),t("el-button",{attrs:{type:"primary"},on:{click:e.openDialog2}},[e._v("打开弹窗2")]),t("el-button",{attrs:{type:"primary"},on:{click:e.openDialog3}},[e._v("打开弹窗3")])],1),t("p",{staticStyle:{"margin-top":"20px"}},[e._v("同时打开多个弹窗时点击会自动置顶")]),t("ele-modal",{attrs:{width:"400px",title:"弹窗1",visible:e.visible1,resizable:!0,maxable:!0,multiple:!0,"move-out":!0,"move-out-positive":!0,position:"center"},on:{"update:visible":function(t){e.visible1=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:function(t){e.visible1=!1}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary"}},[e._v("确定")])]},proxy:!0}])},[t("div",{staticStyle:{padding:"20px 0"}},[e._v("弹窗1")])]),t("ele-modal",{attrs:{width:"400px",title:"弹窗2",visible:e.visible2,resizable:!0,maxable:!0,multiple:!0,"move-out":!0,"move-out-positive":!0,position:"rightTop"},on:{"update:visible":function(t){e.visible2=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:function(t){e.visible2=!1}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary"}},[e._v("确定")])]},proxy:!0}])},[t("div",{staticStyle:{padding:"20px 0"}},[e._v("弹窗2")])]),t("ele-modal",{attrs:{width:"400px",title:"弹窗3",visible:e.visible3,resizable:!0,maxable:!0,multiple:!0,"move-out":!0,"move-out-positive":!0,position:"rightBottom"},on:{"update:visible":function(t){e.visible3=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:function(t){e.visible3=!1}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary"}},[e._v("确定")])]},proxy:!0}])},[t("div",{staticStyle:{padding:"20px 0"}},[e._v("弹窗3")])])],1)},i=[],a={data:function(){return{visible1:!1,visible2:!1,visible3:!1}},methods:{openDialog1:function(){this.visible1=!0},openDialog2:function(){this.visible2=!0},openDialog3:function(){this.visible3=!0}}},n=a,s=l(1001),r=(0,s.Z)(n,o,i,!1,null,null,null),u=r.exports},66421:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body ele-body-card"},[t("demo-modal"),t("multiple-modal")],1)},i=[],a=l(76614),n=l(85104),s={name:"ExtensionDialog",components:{DemoModal:a["default"],MultipleModal:n["default"]}},r=s,u=l(1001),c=(0,u.Z)(r,o,i,!1,null,null,null),p=c.exports}}]);