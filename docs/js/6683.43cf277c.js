"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[6683,6874,9812,1838,6118,2970,1405,4660,3062],{66874:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never","body-style":"padding: 6px 0;"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))]),e("more-icon",{on:{remove:t.onRemove,edit:t.onEdit}})]},proxy:!0}])},[e("el-scrollbar",{staticStyle:{height:"326px"},attrs:{wrapStyle:"overflow-x: hidden;",viewStyle:"padding: 14px 10px;"}},[e("el-timeline",{staticClass:"ele-timeline ele-timeline-act",attrs:{reverse:!1}},t._l(t.activities,(function(a,s){return e("el-timeline-item",{key:s,attrs:{timestamp:a.timestamp,type:a.type}},[t._v(" "+t._s(a.title)+" ")])})),1)],1)],1)},i=[],l=a(66118),r={components:{MoreIcon:l["default"]},props:{title:String},data(){return{activities:[]}},created(){this.queryActivities()},methods:{queryActivities(){this.activities=[{title:"SunSmile 解决了bug 登录提示操作失败",timestamp:"20:30"},{title:"Jasmine 解决了bug 按钮颜色与设计不符",timestamp:"19:30"},{title:"项目经理 指派了任务 解决项目一的bug",timestamp:"18:30",type:"primary"},{title:"项目经理 指派了任务 解决项目二的bug",timestamp:"17:30",type:"primary"},{title:"项目经理 指派了任务 解决项目三的bug",timestamp:"16:30",type:"primary"},{title:"项目经理 指派了任务 解决项目四的bug",timestamp:"15:30"},{title:"项目经理 指派了任务 解决项目五的bug",timestamp:"14:30"},{title:"项目经理 指派了任务 解决项目六的bug",timestamp:"12:30"},{title:"项目经理 指派了任务 解决项目七的bug",timestamp:"11:30",type:"primary"},{title:"项目经理 指派了任务 解决项目八的bug",timestamp:"10:30"},{title:"项目经理 指派了任务 解决项目九的bug",timestamp:"09:30"},{title:"项目经理 指派了任务 解决项目十的bug",timestamp:"08:30"}]},onRemove(){this.$emit("remove")},onEdit(){this.$emit("edit")}}},n=r,o=a(1001),c=(0,o.Z)(n,s,i,!1,null,"4178ff55",null),d=c.exports},69812:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))]),e("more-icon",{on:{remove:t.onRemove,edit:t.onEdit}})]},proxy:!0}])},[e("div",{staticClass:"workplace-goal-wrap"},[e("div",{staticClass:"workplace-goal-group"},[e("el-progress",{attrs:{width:170,percentage:80,type:"dashboard",format:()=>""}}),e("div",{staticClass:"workplace-goal-content"},[e("el-tag",{staticClass:"ele-tag-round",attrs:{size:"large"}},[e("i",{staticClass:"el-icon-s-data"})]),e("div",{staticClass:"workplace-goal-num ele-text-heading"},[t._v("285")])],1),e("div",{staticClass:"workplace-goal-text"},[t._v("恭喜, 本月目标已达标!")])],1)])])},i=[],l=a(66118),r={components:{MoreIcon:l["default"]},props:{title:String},methods:{onRemove(){this.$emit("remove")},onEdit(){this.$emit("edit")}}},n=r,o=a(1001),c=(0,o.Z)(n,s,i,!1,null,"669122f6",null),d=c.exports},41838:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("vue-draggable",{attrs:{tag:"el-row","component-data":{props:{gutter:15}},animation:300,"set-data":()=>{}},on:{end:t.onEnd},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}},t._l(t.data,(function(a){return e("el-col",t._b({key:a.url},"el-col",t.styleResponsive?{lg:3,md:6,sm:6,xs:12}:{span:3},!1),[e("el-card",{attrs:{shadow:"hover","body-style":"padding: 0;"}},[e("router-link",{staticClass:"app-link-block",attrs:{to:a.url}},[e("i",{class:["app-link-icon",a.icon],style:{color:a.color}}),e("div",{staticClass:"app-link-title"},[t._v(t._s(a.title))])])],1)],1)})),1)},i=[],l=a(9980),r=a.n(l),n={components:{VueDraggable:r()},data(){const t=[{icon:"el-icon-user",title:"用户",url:"/system/user"},{icon:"el-icon-data-line",title:"分析",url:"/dashboard/analysis",color:"#95de64"},{icon:"el-icon-shopping-cart-2",title:"商品",url:"/list/card/project",color:"#ff9c6e"},{icon:"el-icon-tickets",title:"订单",url:"/list/basic",color:"#b37feb"},{icon:"el-icon-bank-card",title:"票据",url:"/list/advanced",color:"#ffd666"},{icon:"el-icon-message",title:"消息",url:"/user/message",color:"#5cdbd3"},{icon:"el-icon-discount",title:"标签",url:"/extension/tag",color:"#ff85c0"},{icon:"el-icon-s-operation",title:"配置",url:"/user/profile",color:"#ffc069"}],e=(()=>{const t=localStorage.getItem("workplace-links");try{return t?JSON.parse(t):null}catch(e){return null}})();return{defaultData:t,data:[...e??t]}},computed:{styleResponsive(){return this.$store.state.theme.styleResponsive}},methods:{onEnd(){this.cacheData()},reset(){this.data=[...this.defaultData],this.cacheData()},cacheData(){localStorage.setItem("workplace-links",JSON.stringify(this.data))}}},o=n,c=a(1001),d=(0,c.Z)(o,s,i,!1,null,"d2572082",null),u=d.exports},66118:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("el-dropdown",{staticClass:"card-more-icon",on:{command:t.onCommand},scopedSlots:t._u([{key:"dropdown",fn:function(){return[e("el-dropdown-menu",[e("el-dropdown-item",{attrs:{icon:"el-icon-edit",command:"edit"}},[t._v(" 编辑 ")]),e("el-dropdown-item",{attrs:{icon:"el-icon-circle-close",command:"remove"}},[t._v(" 删除 ")])],1)]},proxy:!0}])},[e("i",{staticClass:"el-icon-more ele-text-secondary"})])},i=[],l={methods:{onCommand(t){this.$emit(t)}}},r=l,n=a(1001),o=(0,n.Z)(r,s,i,!1,null,"7ba34c22",null),c=o.exports},2970:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never","body-style":"padding: 20px;"}},[e("div",{class:["ele-cell","workplace-user-card",{"workplace-user-responsive":t.styleResponsive}]},[e("div",{staticClass:"ele-cell-content ele-cell"},[e("el-avatar",{attrs:{size:68,src:t.loginUser.avatar}}),e("div",{staticClass:"ele-cell-content"},[e("h4",{staticClass:"ele-elip"},[t._v(" 早安, "+t._s(t.loginUser.nickname)+" , 开始您一天的工作吧! ")]),e("div",{staticClass:"ele-text-secondary ele-elip",staticStyle:{"margin-top":"8px"}},[e("i",{staticClass:"el-icon-heavy-rain"}),e("em",[t._v("今日阴转小雨, 22℃ - 32℃ , 出门记得带伞哦。")])])])],1),e("div",{staticClass:"workplace-count-group"},[e("div",{staticClass:"workplace-count-item"},[e("div",{staticClass:"workplace-count-header"},[e("el-tag",{staticClass:"ele-tag-round",attrs:{size:"small"}},[e("i",{staticClass:"el-icon-menu"})]),e("span",{staticClass:"workplace-count-name"},[t._v("项目数")])],1),e("div",{staticClass:"workplace-count-num ele-text-heading"},[t._v("3")])]),e("div",{staticClass:"workplace-count-item"},[e("div",{staticClass:"workplace-count-header"},[e("el-tag",{staticClass:"ele-tag-round",attrs:{type:"warning",size:"small"}},[e("i",{staticClass:"el-icon-finished"})]),e("span",{staticClass:"workplace-count-name"},[t._v("待办项")])],1),e("div",{staticClass:"workplace-count-num ele-text-heading"},[t._v("6 / 24")])]),e("div",{staticClass:"workplace-count-item"},[e("div",{staticClass:"workplace-count-header"},[e("el-tag",{staticClass:"ele-tag-round",attrs:{type:"success",size:"small"}},[e("i",{staticClass:"el-icon-bell"})]),e("span",{staticClass:"workplace-count-name"},[t._v("消息")])],1),e("div",{staticClass:"workplace-count-num ele-text-heading"},[t._v("1,689")])])])])])},i=[],l={computed:{loginUser(){return this.$store.state.user.info},styleResponsive(){return this.$store.state.theme.styleResponsive}}},r=l,n=a(1001),o=(0,n.Z)(r,s,i,!1,null,"3d5aae83",null),c=o.exports},41405:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"workplace-table-card",attrs:{shadow:"never","body-style":"padding: 11px;"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))]),e("more-icon",{on:{remove:t.onRemove,edit:t.onEdit}})]},proxy:!0}])},[e("el-table",{attrs:{data:t.projectList,height:316}},[e("el-table-column",{attrs:{type:"index",width:"35","min-width":"35",align:"right"}}),e("el-table-column",{attrs:{label:"项目名称","min-width":"110","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("el-link",{attrs:{type:"primary",underline:!1}},[t._v(" "+t._s(a.projectName)+" ")])]}}])}),e("el-table-column",{attrs:{label:"开始时间",prop:"startDate",width:"95","min-width":"80",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{prop:"endDate",label:"结束时间",width:"95","min-width":"80",align:"center","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"状态",width:"70","min-width":"60",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:a}){return[e("span",{class:["ele-text-success","ele-text-danger","ele-text-warning","ele-text-info ele-text-delete"][a.status]},[t._v(" "+t._s(["进行中","已延期","未开始","已结束"][a.status])+" ")])]}}])}),e("el-table-column",{attrs:{label:"进度",width:"160","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function({row:t}){return[e("el-progress",{staticClass:"ele-text-small",attrs:{percentage:t.progress}})]}}])})],1)],1)},i=[],l=a(66118),r={components:{MoreIcon:l["default"]},props:{title:String},data(){return{projectList:[]}},created(){this.queryProjectList()},methods:{queryProjectList(){this.projectList=[{id:1,projectName:"项目0000001",status:0,startDate:"2020-03-01",endDate:"2020-06-01",progress:30},{id:2,projectName:"项目0000002",status:0,startDate:"2020-03-01",endDate:"2020-08-01",progress:10},{id:3,projectName:"项目0000003",status:1,startDate:"2020-01-01",endDate:"2020-05-01",progress:60},{id:4,projectName:"项目0000004",status:1,startDate:"2020-06-01",endDate:"2020-10-01",progress:0},{id:5,projectName:"项目0000005",status:2,startDate:"2020-01-01",endDate:"2020-03-01",progress:100},{id:6,projectName:"项目0000006",status:3,startDate:"2020-01-01",endDate:"2020-03-01",progress:100}]},onRemove(){this.$emit("remove")},onEdit(){this.$emit("edit")}}},n=r,o=a(1001),c=(0,o.Z)(n,s,i,!1,null,"760b678c",null),d=c.exports},44660:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"workplace-table-card",attrs:{shadow:"never","body-style":"padding: 0;height: 338px;overflow: hidden;"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))]),e("more-icon",{on:{remove:t.onRemove,edit:t.onEdit}})]},proxy:!0}])},[e("table",{staticClass:"ele-table",staticStyle:{"table-layout":"fixed"}},[e("colgroup",[e("col",{attrs:{width:"38"}}),e("col",{attrs:{width:"65"}}),e("col"),e("col",{attrs:{width:"70"}})]),e("thead",[e("tr",{staticStyle:{background:"none"}},[e("th"),e("th",[t._v("优先级")]),e("th",{staticClass:"ele-elip"},[t._v("任务名称")]),e("th",{staticStyle:{"text-align":"center"}},[t._v("状态")])])]),e("vue-draggable",{attrs:{tag:"tbody",animation:300,handle:".sort-handle","set-data":()=>{}},model:{value:t.taskList,callback:function(e){t.taskList=e},expression:"taskList"}},t._l(t.taskList,(function(a){return e("tr",{key:a.id},[e("td",{staticStyle:{"text-align":"center"}},[e("i",{staticClass:"sort-handle el-icon-_nav ele-text-placeholder"})]),e("td",[e("el-tag",{staticClass:"ele-tag-round",attrs:{size:"mini",type:["danger","warning","primary"][a.priority-1]}},[t._v(" "+t._s(a.priority)+" ")])],1),e("td",{staticClass:"ele-elip"},[e("el-link",{staticClass:"ele-inline",attrs:{type:"primary",underline:!1}},[t._v(" "+t._s(a.taskName)+" ")])],1),e("td",{staticStyle:{"text-align":"center"}},[e("span",{class:["ele-text-warning","ele-text-success","ele-text-info"][a.status]},[t._v(" "+t._s(["未开始","进行中","已完成"][a.status])+" ")])])])})),0)],1)])},i=[],l=a(9980),r=a.n(l),n=a(66118),o={components:{VueDraggable:r(),MoreIcon:n["default"]},props:{title:String},data(){return{taskList:[]}},created(){this.queryTaskList()},methods:{queryTaskList(){this.taskList=[{id:1,priority:1,taskName:"解决项目一的bug",status:0},{id:2,priority:2,taskName:"解决项目二的bug",status:0},{id:3,priority:2,taskName:"解决项目三的bug",status:1},{id:4,priority:3,taskName:"解决项目四的bug",status:1},{id:5,priority:3,taskName:"解决项目五的bug",status:2},{id:6,priority:3,taskName:"解决项目六的bug",status:2}]},onRemove(){this.$emit("remove")},onEdit(){this.$emit("edit")}}},c=o,d=a(1001),u=(0,d.Z)(c,s,i,!1,null,"ecfbec7e",null),p=u.exports},73062:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never","body-style":"padding: 2px 0;"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.title))]),e("more-icon",{on:{remove:t.onRemove,edit:t.onEdit}})]},proxy:!0}])},t._l(t.userList,(function(a,s){return e("div",{key:s,staticClass:"ele-cell user-list-item"},[e("el-avatar",{attrs:{size:40,src:a.avatar}}),e("div",{staticClass:"ele-cell-content",staticStyle:{overflow:"hidden"}},[e("div",{staticClass:"ele-cell-title ele-elip"},[t._v(t._s(a.name))]),e("div",{staticClass:"ele-cell-desc ele-elip"},[t._v(t._s(a.introduction))])]),e("el-tag",{attrs:{size:"mini",type:["success","danger"][a.status]}},[t._v(" "+t._s(["在线","离线"][a.status])+" ")])],1)})),0)},i=[],l=a(66118),r={components:{MoreIcon:l["default"]},props:{title:String},data(){return{userList:[]}},created(){this.queryUserList()},methods:{queryUserList(){this.userList=[{name:"SunSmile",introduction:"UI设计师、交互专家",status:0,avatar:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg"},{name:"你的名字很好听",introduction:"前端工程师",status:0,avatar:"https://cdn.eleadmin.com/20200609/b6a811873e704db49db994053a5019b2.jpg"},{name:"全村人的希望",introduction:"前端工程师",status:0,avatar:"https://cdn.eleadmin.com/20200609/948344a2a77c47a7a7b332fe12ff749a.jpg"},{name:"Jasmine",introduction:"产品经理、项目经理",status:1,avatar:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg"},{name:"酷酷的大叔",introduction:"组长、后端工程师",status:1,avatar:"https://cdn.eleadmin.com/20200609/2d98970a51b34b6b859339c96b240dcd.jpg"}]},onRemove(){this.$emit("remove")},onEdit(){this.$emit("edit")}}},n=r,o=a(1001),c=(0,o.Z)(n,s,i,!1,null,"0e3f5c50",null),d=c.exports},6683:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ele-body ele-body-card"},[e("profile-card"),e("link-card",{ref:"linkCard"}),e("vue-draggable",{attrs:{tag:"el-row",handle:".el-card__header","component-data":{props:{gutter:15}},animation:300,"set-data":()=>{}},on:{end:t.onEnd},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}},t._l(t.data,(function(a,s){return e("el-col",t._b({key:a.name},"el-col",t.styleResponsive?{md:a.md,sm:a.sm}:{span:a.md},!1),[e(a.name,{tag:"component",attrs:{title:a.title},on:{remove:function(e){return t.onRemove(s)},edit:function(e){return t.onEdit(s)}}})],1)})),1),e("el-card",{attrs:{shadow:"never","body-style":"padding: 0;"}},[e("div",{staticClass:"ele-cell",staticStyle:{"line-height":"42px"}},[e("div",{staticClass:"ele-cell-content ele-text-primary workplace-bottom-btn",on:{click:t.add}},[e("i",{staticClass:"el-icon-circle-plus-outline"}),t._v(" 添加视图 ")]),e("el-divider",{attrs:{direction:"vertical"}}),e("div",{staticClass:"ele-cell-content ele-text-primary workplace-bottom-btn",on:{click:t.reset}},[e("i",{staticClass:"el-icon-refresh-left"}),t._v(" 重置布局 ")])],1)]),e("ele-modal",{attrs:{width:"680px",visible:t.visible,title:"未添加的视图"},on:{"update:visible":function(e){t.visible=e}}},[e("el-row",{staticStyle:{"margin-bottom":"-15px"},attrs:{gutter:15}},t._l(t.notAddedData,(function(a){return e("el-col",{key:a.name,attrs:{md:8,sm:24}},[e("div",{staticClass:"workplace-card-item ele-border-lighter",on:{click:function(e){return t.addView(a)}}},[e("div",{staticClass:"workplace-card-header ele-border-lighter"},[t._v(" "+t._s(a.title)+" ")]),e("div",{staticClass:"workplace-card-body ele-text-placeholder"},[e("i",{staticClass:"el-icon-plus"})])])])})),1),t.notAddedData.length?t._e():e("ele-empty",{attrs:{text:"已添加所有视图"}})],1)],1)},i=[],l=a(9980),r=a.n(l),n=a(2970),o=a(41838),c=a(66874),d=a(44660),u=a(69812),p=a(41405),m=a(73062),v={name:"DashboardWorkplace",components:{VueDraggable:r(),ProfileCard:n["default"],LinkCard:o["default"],ActivitiesCard:c["default"],TaskCard:d["default"],GoalCard:u["default"],ProjectCard:p["default"],UserList:m["default"]},data(){const t=[{name:"activities-card",title:"最新动态",md:8,sm:24},{name:"task-card",title:"我的任务",md:8,sm:24},{name:"goal-card",title:"本月目标",md:8,sm:24},{name:"project-card",title:"项目进度",md:16,sm:24},{name:"user-list",title:"小组成员",md:8,sm:24}],e=(()=>{const t=localStorage.getItem("workplace-layout");try{return t?JSON.parse(t):null}catch(e){return null}})();return{defaultData:t,data:[...e??t],visible:!1}},computed:{notAddedData(){return this.defaultData.filter((t=>!this.data.some((e=>e.name===t.name))))},styleResponsive(){return this.$store.state.theme.styleResponsive}},methods:{add(){this.visible=!0},reset(){this.data=[...this.defaultData],this.cacheData(),this.$refs.linkCard.reset(),this.$message.success("已重置")},cacheData(){localStorage.setItem("workplace-layout",JSON.stringify(this.data))},onRemove(t){this.data=this.data.filter(((e,a)=>a!==t)),this.cacheData()},onEdit(t){console.log("index:",t),this.$message.info("点击了编辑")},addView(t){this.data.push(t),this.cacheData(),this.$message.success("已添加")},onEnd(){this.cacheData()}}},h=v,f=a(1001),g=(0,f.Z)(h,s,i,!1,null,"aa5d8ab8",null),y=g.exports}}]);