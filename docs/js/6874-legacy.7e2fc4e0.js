"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[6874,6118],{66874:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never","body-style":"padding: 6px 0;"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))]),e("more-icon",{on:{remove:t.onRemove,edit:t.onEdit}})]},proxy:!0}])},[e("el-scrollbar",{staticStyle:{height:"326px"},attrs:{wrapStyle:"overflow-x: hidden;",viewStyle:"padding: 14px 10px;"}},[e("el-timeline",{staticClass:"ele-timeline ele-timeline-act",attrs:{reverse:!1}},t._l(t.activities,(function(i,n){return e("el-timeline-item",{key:n,attrs:{timestamp:i.timestamp,type:i.type}},[t._v(" "+t._s(i.title)+" ")])})),1)],1)],1)},o=[],m=i(66118),r={components:{MoreIcon:m["default"]},props:{title:String},data:function(){return{activities:[]}},created:function(){this.queryActivities()},methods:{queryActivities:function(){this.activities=[{title:"SunSmile 解决了bug 登录提示操作失败",timestamp:"20:30"},{title:"Jasmine 解决了bug 按钮颜色与设计不符",timestamp:"19:30"},{title:"项目经理 指派了任务 解决项目一的bug",timestamp:"18:30",type:"primary"},{title:"项目经理 指派了任务 解决项目二的bug",timestamp:"17:30",type:"primary"},{title:"项目经理 指派了任务 解决项目三的bug",timestamp:"16:30",type:"primary"},{title:"项目经理 指派了任务 解决项目四的bug",timestamp:"15:30"},{title:"项目经理 指派了任务 解决项目五的bug",timestamp:"14:30"},{title:"项目经理 指派了任务 解决项目六的bug",timestamp:"12:30"},{title:"项目经理 指派了任务 解决项目七的bug",timestamp:"11:30",type:"primary"},{title:"项目经理 指派了任务 解决项目八的bug",timestamp:"10:30"},{title:"项目经理 指派了任务 解决项目九的bug",timestamp:"09:30"},{title:"项目经理 指派了任务 解决项目十的bug",timestamp:"08:30"}]},onRemove:function(){this.$emit("remove")},onEdit:function(){this.$emit("edit")}}},s=r,a=i(1001),l=(0,a.Z)(s,n,o,!1,null,"4178ff55",null),c=l.exports},66118:function(t,e,i){i.r(e),i.d(e,{default:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("el-dropdown",{staticClass:"card-more-icon",on:{command:t.onCommand},scopedSlots:t._u([{key:"dropdown",fn:function(){return[e("el-dropdown-menu",[e("el-dropdown-item",{attrs:{icon:"el-icon-edit",command:"edit"}},[t._v(" 编辑 ")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-close",command:"remove"}},[t._v(" 删除 ")])],1)]},proxy:!0}])},[e("i",{staticClass:"el-icon-more ele-text-secondary"})])},o=[],m={methods:{onCommand:function(t){this.$emit(t)}}},r=m,s=i(1001),a=(0,s.Z)(r,n,o,!1,null,"7ba34c22",null),l=a.exports}}]);