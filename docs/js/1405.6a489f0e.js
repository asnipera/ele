"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[1405,6118],{66118:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var r=function(){var t=this,e=t._self._c;return e("el-dropdown",{staticClass:"card-more-icon",on:{command:t.onCommand},scopedSlots:t._u([{key:"dropdown",fn:function(){return[e("el-dropdown-menu",[e("el-dropdown-item",{attrs:{icon:"el-icon-edit",command:"edit"}},[t._v(" 编辑 ")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-close",command:"remove"}},[t._v(" 删除 ")])],1)]},proxy:!0}])},[e("i",{staticClass:"el-icon-more ele-text-secondary"})])},a=[],n={methods:{onCommand(t){this.$emit(t)}}},s=n,l=o(1001),i=(0,l.Z)(s,r,a,!1,null,"7ba34c22",null),d=i.exports},41405:function(t,e,o){o.r(e),o.d(e,{default:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"workplace-table-card",attrs:{shadow:"never","body-style":"padding: 11px;"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))]),e("more-icon",{on:{remove:t.onRemove,edit:t.onEdit}})]},proxy:!0}])},[e("el-table",{attrs:{data:t.projectList,height:316}},[e("el-table-column",{attrs:{type:"index",width:"35","min-width":"35",align:"right"}}),e("el-table-column",{attrs:{label:"项目名称","min-width":"110","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:o}){return[e("el-link",{attrs:{type:"primary",underline:!1}},[t._v(" "+t._s(o.projectName)+" ")])]}}])}),e("el-table-column",{attrs:{label:"开始时间",prop:"startDate",width:"95","min-width":"80",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{prop:"endDate",label:"结束时间",width:"95","min-width":"80",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"状态",width:"70","min-width":"60",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:o}){return[e("span",{class:["ele-text-success","ele-text-danger","ele-text-warning","ele-text-info ele-text-delete"][o.status]},[t._v(" "+t._s(["进行中","已延期","未开始","已结束"][o.status])+" ")])]}}])}),e("el-table-column",{attrs:{label:"进度",width:"160","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function({row:t}){return[e("el-progress",{staticClass:"ele-text-small",attrs:{percentage:t.progress}})]}}])})],1)],1)},a=[],n=o(66118),s={components:{MoreIcon:n["default"]},props:{title:String},data(){return{projectList:[]}},created(){this.queryProjectList()},methods:{queryProjectList(){this.projectList=[{id:1,projectName:"项目0000001",status:0,startDate:"2020-03-01",endDate:"2020-06-01",progress:30},{id:2,projectName:"项目0000002",status:0,startDate:"2020-03-01",endDate:"2020-08-01",progress:10},{id:3,projectName:"项目0000003",status:1,startDate:"2020-01-01",endDate:"2020-05-01",progress:60},{id:4,projectName:"项目0000004",status:1,startDate:"2020-06-01",endDate:"2020-10-01",progress:0},{id:5,projectName:"项目0000005",status:2,startDate:"2020-01-01",endDate:"2020-03-01",progress:100},{id:6,projectName:"项目0000006",status:3,startDate:"2020-01-01",endDate:"2020-03-01",progress:100}]},onRemove(){this.$emit("remove")},onEdit(){this.$emit("edit")}}},l=s,i=o(1001),d=(0,i.Z)(l,r,a,!1,null,"760b678c",null),c=d.exports}}]);