"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[6425],{76425:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("ele-pro-table",{ref:"table",attrs:{columns:t.columns,datasource:t.datasource,selection:t.selection,"tool-class":"ele-toolbar-actions"},on:{"update:selection":function(e){t.selection=e}},scopedSlots:t._u([{key:"toolbar",fn:function(){return[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.read}},[t._v(" 标记已读 ")]),e("el-button",{attrs:{size:"small",type:"danger"},on:{click:t.removeBatch}},[t._v(" 删除消息 ")])]},proxy:!0},{key:"status",fn:function(i){var n=i.row;return[e("span",{class:["ele-text-danger","ele-text-info"][n.status]},[t._v(" "+t._s(["未读","已读"][n.status])+" ")])]}},{key:"action",fn:function(i){var n=i.row;return[e("el-link",{attrs:{type:"primary",underline:!1,icon:"el-icon-chat-dot-square"},on:{click:function(e){return t.view(n)}}},[t._v(" 回复 ")]),e("el-popconfirm",{staticClass:"ele-action",attrs:{title:"确定要删除此消息吗?"},on:{confirm:function(e){return t.remove(n)}},scopedSlots:t._u([{key:"reference",fn:function(){return[e("el-link",{attrs:{type:"danger",underline:!1,icon:"el-icon-delete"}},[t._v(" 删除 ")])]},proxy:!0}],null,!0)})]}}])})},s=[],r=i(95082),a=(i(41539),i(54747),i(68357)),l={data:function(){return{columns:[{columnKey:"selection",type:"selection",width:45,align:"center",fixed:"left"},{columnKey:"index",type:"index",width:45,align:"center",showOverflowTooltip:!0,fixed:"left"},{prop:"title",label:"私信内容",showOverflowTooltip:!0,minWidth:110},{prop:"time",label:"发送时间",align:"center",showOverflowTooltip:!0,width:140},{prop:"status",label:"状态",align:"center",showOverflowTooltip:!0,width:80,slot:"status"},{columnKey:"action",label:"操作",align:"center",showOverflowTooltip:!0,width:140,resizable:!1,slot:"action"}],selection:[]}},methods:{datasource:function(t){var e=t.page,i=t.limit,n=t.where,s=t.order;return(0,a.g2)((0,r.Z)((0,r.Z)((0,r.Z)({},n),s),{},{page:e,limit:i}))},reload:function(t){this.$refs.table.reload({page:1,where:t})},view:function(t){this.$message.info(t.title)},remove:function(t){console.log(t),this.$message.info("点击了删除"),this.updateUnReadNum()},removeBatch:function(){this.selection.length?(this.$message.info("点击了删除"),this.updateUnReadNum()):this.$message.error("请至少选择一条数据")},read:function(){this.selection.length?(this.selection.forEach((function(t){t.status=1})),this.updateUnReadNum()):this.$message.error("请至少选择一条数据")},updateUnReadNum:function(){this.$emit("update-data")}}},u=l,o=i(1001),c=(0,o.Z)(u,n,s,!1,null,null,null),d=c.exports},68357:function(t,e,i){i.d(e,{Nt:function(){return d},S4:function(){return r},cR:function(){return o},g2:function(){return l}});var n=i(50124),s=i(48534);function r(){return a.apply(this,arguments)}function a(){return a=(0,s.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",{count:10,list:[{id:21,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:0},{id:22,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:0},{id:23,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:1},{id:24,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:1},{id:25,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:1},{id:26,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:1},{id:27,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:1},{id:28,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:1},{id:29,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:1},{id:30,title:"EleAdmin新版本发布，欢迎体验",time:"2020-07-24 11:35",status:1}]});case 1:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}function l(){return u.apply(this,arguments)}function u(){return u=(0,s.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",{count:10,list:[{id:11,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:0},{id:12,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:0},{id:13,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:0},{id:14,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:15,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:16,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:17,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:18,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:19,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:20,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1}]});case 1:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function o(){return c.apply(this,arguments)}function c(){return c=(0,s.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",{count:10,list:[{id:1,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:0},{id:2,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:0},{id:3,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:0},{id:4,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:0},{id:5,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:6,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:7,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:8,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:9,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:10,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1}]});case 1:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return m=(0,s.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",{notice:2,letter:3,todo:4});case 1:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}}}]);