"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[7605],{77605:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"ele-body"},[s("el-card",{attrs:{shadow:"never",header:"消息提示"}},[s("div",{staticStyle:{margin:"0 0 10px 0"}},[e._v("边框风格")]),s("div",{staticClass:"ele-action-group"},[s("el-button",{attrs:{size:"small"},on:{click:function(s){return e.showSuccessMessage(!0)}}},[e._v(" 成功 ")]),s("el-button",{attrs:{size:"small"},on:{click:function(s){return e.showWarningMessage(!0)}}},[e._v(" 警告 ")]),s("el-button",{attrs:{size:"small"},on:{click:function(s){return e.showErrorMessage(!0)}}},[e._v("错误")]),s("el-button",{attrs:{size:"small"},on:{click:function(s){return e.showInfoMessage(!0)}}},[e._v("消息")])],1),s("div",{staticStyle:{margin:"20px 0 10px 0"}},[e._v("清新风格")]),s("div",{staticClass:"ele-action-group"},[s("el-button",{attrs:{size:"small"},on:{click:function(s){return e.showSuccessMessage(!1)}}},[e._v(" 成功 ")]),s("el-button",{attrs:{size:"small"},on:{click:function(s){return e.showWarningMessage(!1)}}},[e._v(" 警告 ")]),s("el-button",{attrs:{size:"small"},on:{click:function(s){return e.showErrorMessage(!1)}}},[e._v(" 错误 ")]),s("el-button",{attrs:{size:"small"},on:{click:function(s){return e.showInfoMessage(!1)}}},[e._v("消息")])],1),s("div",[s("div",{staticStyle:{margin:"20px 0 10px 0"}},[e._v("loading")]),s("div",{staticClass:"ele-action-group"},[s("el-button",{attrs:{size:"small"},on:{click:e.showLoadingMessage1}},[e._v(" Loading ")]),s("el-button",{attrs:{size:"small"},on:{click:e.showLoadingMessage2}},[e._v(" 加遮罩层 ")]),s("el-button",{attrs:{size:"small"},on:{click:e.showLoadingMessage3}},[e._v(" 居中显示 ")])],1)])]),s("el-card",{attrs:{shadow:"never",header:"警告组件","body-style":"padding: 20px 20px 0 20px;"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",e._b({},"el-col",e.styleResponsive?{md:6,sm:12,xs:24}:{span:6},!1),[s("el-alert",{staticClass:"ele-alert-border",attrs:{"show-icon":"",type:"success",title:"Success Tips"}}),s("el-alert",{staticClass:"ele-alert-border",attrs:{"show-icon":"",type:"success",title:"Success Tips",description:"Detailed description and advice about successful copywriting."}})],1),s("el-col",e._b({},"el-col",e.styleResponsive?{md:6,sm:12,xs:24}:{span:6},!1),[s("el-alert",{staticClass:"ele-alert-border",attrs:{"show-icon":"",type:"info",title:"Informational Notes"}}),s("el-alert",{staticClass:"ele-alert-border",attrs:{"show-icon":"",type:"info",title:"Informational Notes",description:"Additional description and information about copywriting."}})],1),s("el-col",e._b({},"el-col",e.styleResponsive?{md:6,sm:12,xs:24}:{span:6},!1),[s("el-alert",{staticClass:"ele-alert-border",attrs:{"show-icon":"",type:"warning",title:"Warning"}}),s("el-alert",{staticClass:"ele-alert-border",attrs:{"show-icon":"",type:"warning",title:"Warning",description:"This is a warning notice about copywriting."}})],1),s("el-col",e._b({},"el-col",e.styleResponsive?{md:6,sm:12,xs:24}:{span:6},!1),[s("el-alert",{staticClass:"ele-alert-border",attrs:{"show-icon":"",type:"error",title:"Error"}}),s("el-alert",{staticClass:"ele-alert-border",attrs:{"show-icon":"",type:"error",title:"Error",description:"This is an error message about copywriting."}})],1)],1)],1)],1)},o=[],i={name:"ExtensionMessage",computed:{styleResponsive(){return this.$store.state.theme.styleResponsive}},methods:{showSuccessMessage(e){this.$message({type:"success",message:"这是一条成功的提示",customClass:e?"ele-message-border":""})},showWarningMessage(e){this.$message({type:"warning",message:"这是一条警告的提示",customClass:e?"ele-message-border":""})},showErrorMessage(e){e?this.$message({type:"error",message:"这是一条错误的提示",customClass:"ele-message-border"}):this.$message.error("这是一条错误的提示")},showInfoMessage(e){e?this.$message({type:"info",message:"这是一条普通的提示",customClass:"ele-message-border"}):this.$message.info("这是一条普通的提示")},showLoadingMessage1(){const e=this.$messageLoading("正在加载中..");setTimeout((()=>{e.close()}),3e3)},showLoadingMessage2(){const e=this.$messageLoading({message:"正在加载中..",background:!0});setTimeout((()=>{e.close()}),3e3)},showLoadingMessage3(){const e=this.$messageLoading({message:"正在加载中..",background:!0,center:!0});setTimeout((()=>{e.close()}),3e3)}}},r=i,l=t(1001),n=(0,l.Z)(r,a,o,!1,null,"b922205c",null),c=n.exports}}]);