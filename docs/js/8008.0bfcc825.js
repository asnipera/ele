"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[8008],{78008:function(t,e,l){l.r(e),l.d(e,{default:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never",header:"打印当前页面"}},[e("el-form",{staticStyle:{"max-width":"320px"},attrs:{"label-width":"80px",size:"small"}},[e("el-form-item",{attrs:{label:"纸张方向"}},[e("el-select",{staticClass:"ele-block",attrs:{clearable:"",placeholder:"不设置"},model:{value:t.option.horizontal,callback:function(e){t.$set(t.option,"horizontal",e)},expression:"option.horizontal"}},[e("el-option",{attrs:{label:"横向",value:!0}}),e("el-option",{attrs:{label:"纵向",value:!1}})],1)],1),e("el-form-item",{attrs:{label:"页面间距"}},[e("el-select",{staticClass:"ele-block",attrs:{clearable:"",placeholder:"不设置"},model:{value:t.option.margin,callback:function(e){t.$set(t.option,"margin",e)},expression:"option.margin"}},[e("el-option",{attrs:{label:"0px",value:"0px"}}),e("el-option",{attrs:{label:"50px",value:"50px"}}),e("el-option",{attrs:{label:"100px",value:"100px"}})],1)],1),e("el-form-item",{attrs:{label:"页面标题"}},[e("el-input",{attrs:{clearable:"",placeholder:"不设置"},model:{value:t.option.title,callback:function(e){t.$set(t.option,"title",e)},expression:"option.title"}})],1)],1),e("el-button",{attrs:{size:"small"},on:{click:t.print}},[t._v("打印")]),e("el-button",{attrs:{size:"small"},on:{click:t.printHide}},[t._v("打印隐藏指定内容")]),e("div",{staticStyle:{"margin-top":"15px"}},[e("span",{staticClass:"ele-text-primary ele-printer-hide"},[t._v(" 此段内容在所有打印时隐藏, 打印完复原。 ")]),e("span",{staticClass:"ele-text-danger demo-hide-1"},[t._v(" 此段内容在指定打印时才隐藏。 ")])])],1)},i=[],o=l(86515),n={data(){return{option:{horizontal:null,margin:null,title:""}}},methods:{print(){(0,o.ox)(this.option1)},printHide(){(0,o.ox)({...this.option1,hide:[".demo-hide-1"]})}}},r=n,s=l(1001),p=(0,s.Z)(r,a,i,!1,null,null,null),c=p.exports}}]);