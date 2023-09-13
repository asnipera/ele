"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[2642],{72642:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});r(82526),r(41817);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("el-card",{attrs:{shadow:"never",header:"基本用法"}},[t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.onStart1}},[e._v("开始引导")])],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("el-button",{ref:"uploadRef1"},[e._v("Upload")]),t("el-button",{ref:"saveRef1",attrs:{type:"primary"}},[e._v("Save")]),t("el-button",{ref:"moreRef1"},[e._v("More")])],1)]),t("el-card",{attrs:{shadow:"never",header:"不带遮罩层"}},[t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.onStart2}},[e._v("开始引导")])],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("el-button",{ref:"uploadRef2"},[e._v("Upload")]),t("el-button",{ref:"saveRef2",attrs:{type:"primary"}},[e._v("Save")]),t("el-button",{ref:"moreRef2"},[e._v("More")])],1)]),t("el-card",{attrs:{shadow:"never",header:"混合弹窗等多种形式"}},[t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.onStart3}},[e._v("开始引导")])],1),t("div",{staticStyle:{"margin-top":"20px"}},[t("el-button",{ref:"uploadRef3"},[e._v("Upload")]),t("el-button",{ref:"saveRef3",attrs:{type:"primary"}},[e._v("Save")]),t("el-button",{ref:"moreRef3"},[e._v("More")])],1)]),t("ele-tour",{attrs:{steps:e.steps1},model:{value:e.current1,callback:function(t){e.current1=t},expression:"current1"}}),t("ele-tour",{attrs:{steps:e.steps2,mask:!1},model:{value:e.current2,callback:function(t){e.current2=t},expression:"current2"}}),t("ele-tour",{attrs:{steps:e.steps3},scopedSlots:e._u([{key:"text",fn:function(r){var n=r.step,o=r.current;return[0===o?[t("div",{staticStyle:{"margin-bottom":"10px"}},[t("img",{staticStyle:{height:"184px",width:"100%","object-fit":"cover"},attrs:{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ"}})]),t("div",[e._v(e._s(n.description))])]:e._e()]}}]),model:{value:e.current3,callback:function(t){e.current3=t},expression:"current3"}})],1)},o=[],l={name:"ExtensionTour",data:function(){var e=this;return{current1:null,steps1:[{target:function(){var t;return null===(t=e.$refs.uploadRef1)||void 0===t?void 0:t.$el},title:"如何进行文件上传",description:"点击这个按钮在弹出框中选择想要上传的文件即可."},{target:function(){var t;return null===(t=e.$refs.saveRef1)||void 0===t?void 0:t.$el},title:"如何提交数据",description:"数据录入完成后点击这个按钮即可提交数据到后台."},{target:function(){var t;return null===(t=e.$refs.moreRef1)||void 0===t?void 0:t.$el},title:"如何进行更多的操作",description:"鼠标移入到此按钮上即可展示出更多的操作功能."}],current2:null,uploadRef2:null,saveRef2:null,moreRef2:null,steps2:[{target:function(){var t;return null===(t=e.$refs.uploadRef2)||void 0===t?void 0:t.$el},title:"如何进行文件上传",description:"点击这个按钮在弹出框中选择想要上传的文件即可.",popoverProps:{placement:"top-start"}},{target:function(){var t;return null===(t=e.$refs.saveRef2)||void 0===t?void 0:t.$el},title:"如何提交数据",description:"数据录入完成后点击这个按钮即可提交数据到后台.",popoverProps:{placement:"bottom"}},{target:function(){var t;return null===(t=e.$refs.moreRef2)||void 0===t?void 0:t.$el},title:"如何进行更多的操作",description:"鼠标移入到此按钮上即可展示出更多的操作功能.",popoverProps:{placement:"top-end"}}],current3:null,uploadRef3:null,saveRef3:null,moreRef3:null,steps3:[{title:"欢迎使用 EleAdmin 系统",description:"下面将为您介绍一些常用功能的操作说明, 如果之前已经为您介绍过, 您可以直接点击跳过结束指引."},{target:function(){var t;return null===(t=e.$refs.uploadRef3)||void 0===t?void 0:t.$el},title:"如何进行文件上传",description:"点击这个按钮在弹出框中选择想要上传的文件即可."},{target:function(){var t;return null===(t=e.$refs.saveRef3)||void 0===t?void 0:t.$el},title:"如何提交数据",description:"数据录入完成后点击这个按钮即可提交数据到后台.",mask:!1},{target:function(){var t;return null===(t=e.$refs.moreRef3)||void 0===t?void 0:t.$el},title:"如何进行更多的操作",description:"鼠标移入到此按钮上即可展示出更多的操作功能."}]}},methods:{onStart1:function(){this.current1=0},onStart2:function(){this.current2=0},onStart3:function(){this.current3=0}}},a=l,i=r(1001),s=(0,i.Z)(a,n,o,!1,null,null,null),u=s.exports}}]);