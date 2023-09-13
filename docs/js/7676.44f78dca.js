"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[7676,3315,4902,978],{53315:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var s=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never","body-style":"padding: 0;"}},[e("div",{staticClass:"ele-cell demo-monitor-tool"},[e("div",{staticClass:"ele-cell-content"},[e("el-tabs",{staticClass:"demo-monitor-tabs",on:{"tab-click":t.onSaleTypeChange},model:{value:t.saleSearch.type,callback:function(e){t.$set(t.saleSearch,"type",e)},expression:"saleSearch.type"}},[e("el-tab-pane",{attrs:{label:"销售额",name:"saleroom"}}),e("el-tab-pane",{attrs:{label:"访问量",name:"visits"}})],1)],1),e("div",{class:["ele-inline-block",{"hidden-xs-only":t.styleResponsive}]},[e("el-radio-group",{attrs:{size:"small"},model:{value:t.saleSearch.dateType,callback:function(e){t.$set(t.saleSearch,"dateType",e)},expression:"saleSearch.dateType"}},[e("el-radio-button",{attrs:{label:0}},[t._v("今天")]),e("el-radio-button",{attrs:{label:1}},[t._v("本周")]),e("el-radio-button",{attrs:{label:2}},[t._v("本月")]),e("el-radio-button",{attrs:{label:3}},[t._v("本年")])],1)],1),e("div",{class:["ele-inline-block",{"hidden-sm-and-down":t.styleResponsive}],staticStyle:{width:"260px","margin-left":"10px"}},[e("el-date-picker",{staticClass:"ele-fluid",attrs:{"unlink-panels":"",type:"daterange","end-placeholder":"结束日期","start-placeholder":"开始日期","range-separator":"至",size:"small"},model:{value:t.saleSearch.datetime,callback:function(e){t.$set(t.saleSearch,"datetime",e)},expression:"saleSearch.datetime"}})],1)]),e("el-divider"),e("el-row",[e("el-col",t._b({},"el-col",t.styleResponsive?{lg:18,md:16}:{span:18},!1),[e("div",{staticClass:"demo-monitor-title"},["saleroom"===t.saleSearch.type?e("span",[t._v("销售额趋势")]):e("span",[t._v("访问量趋势")])]),e("v-chart",{ref:"saleChart",staticStyle:{height:"285px"},attrs:{option:t.saleChartOption}})],1),e("el-col",t._b({},"el-col",t.styleResponsive?{lg:6,md:8}:{span:6},!1),[e("div",{staticClass:"demo-monitor-title",staticStyle:{display:"flex"}},[e("div",[t._v("门店")]),e("div",["saleroom"===t.saleSearch.type?e("span",[t._v("销售额")]):e("span",[t._v("访问量")])]),e("div",[t._v("排名")])]),t._l(t.saleroomRankData,(function(a,s){return e("div",{key:s,staticClass:"demo-monitor-rank-item ele-cell",staticStyle:{"margin-bottom":"15px"}},[e("el-tag",{staticClass:"ele-tag-round",staticStyle:{"border-color":"transparent"},attrs:{size:"mini",type:"info",effect:s<3?"dark":"light",color:s<3?"#314659":"hsla(0, 0%, 60%, .2)"}},[t._v(" "+t._s(s+1)+" ")]),e("div",{staticClass:"ele-cell-content"},[t._v(t._s(a.name))]),e("div",{staticClass:"ele-text-secondary"},[t._v(t._s(a.value))])],1)}))],2)],1)],1)},l=[],i=a(68023),r=a(91416),o=a(47956),n=a(63914),c=a(82739),d=a(59634),p=a(51430),h=a(12544);(0,i.D)([r.N,o.N,n.N,c.N]);var v={components:{VChart:d.ZP},mixins:[(0,h.i)(["saleChart"])],data(){return{saleSearch:{type:"saleroom",dateType:0,datetime:""},saleroomData1:[],saleroomData2:[],saleroomRankData:[{name:"工专路 1 号店",value:"323,234"},{name:"工专路 2 号店",value:"323,234"},{name:"工专路 3 号店",value:"323,234"},{name:"工专路 4 号店",value:"323,234"},{name:"工专路 5 号店",value:"323,234"},{name:"工专路 6 号店",value:"323,234"},{name:"工专路 7 号店",value:"323,234"}],saleChartOption:{}}},computed:{styleResponsive(){return this.$store.state.theme.styleResponsive}},created(){this.getSaleroomData()},methods:{getSaleroomData(){(0,p.Zs)().then((t=>{this.saleroomData1=t.list1,this.saleroomData2=t.list2,this.onSaleTypeChange()})).catch((t=>{this.$message.error(t.message)}))},onSaleTypeChange(){const t="saleroom"===this.saleSearch.type,e=t?this.saleroomData1:this.saleroomData2;this.saleChartOption={tooltip:{trigger:"axis"},xAxis:[{type:"category",data:e.map((t=>t.month))}],yAxis:[{type:"value"}],series:[{type:"bar",data:e.map((t=>t.value))}]}}}},m=v,u=a(1001),y=(0,u.Z)(m,s,l,!1,null,"36093262",null),C=y.exports},34902:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("el-row",{attrs:{gutter:15}},[e("el-col",t._b({},"el-col",t.styleResponsive?{lg:6,md:12}:{span:6},!1),[e("el-card",{staticClass:"analysis-chart-card",attrs:{shadow:"never"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"ele-cell"},[e("div",{staticClass:"ele-cell-content"},[t._v("总销售额")]),e("el-tooltip",{attrs:{content:"指标说明",placement:"top"}},[e("i",{staticClass:"el-icon-_question ele-text-placeholder",staticStyle:{cursor:"pointer"}})])],1)]},proxy:!0}])},[e("div",{staticClass:"analysis-chart-card-num ele-text-heading"},[t._v("¥ 126,560")]),e("div",{staticClass:"analysis-chart-card-content",staticStyle:{"padding-top":"18px"}},[e("span",{staticClass:"ele-action"},[e("span",[t._v("周同比12%")]),e("i",{staticClass:"el-icon-caret-top ele-text-danger"})]),e("span",{staticClass:"ele-action"},[e("span",[t._v("日同比11%")]),e("i",{staticClass:"el-icon-caret-bottom ele-text-success"})])]),e("el-divider"),e("div",{staticClass:"analysis-chart-card-text"},[t._v("日销售额 ¥12,423")])],1)],1),e("el-col",t._b({},"el-col",t.styleResponsive?{lg:6,md:12}:{span:6},!1),[e("el-card",{staticClass:"analysis-chart-card",attrs:{shadow:"never"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"ele-cell"},[e("div",{staticClass:"ele-cell-content"},[t._v("访问量")]),e("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("日")])],1)]},proxy:!0}])},[e("div",{staticClass:"analysis-chart-card-num ele-text-heading"},[t._v("8,846")]),e("div",{staticClass:"analysis-chart-card-content"},[e("v-chart",{ref:"visitChart",staticStyle:{height:"40px"},attrs:{option:t.visitChartOption}})],1),e("el-divider"),e("div",{staticClass:"analysis-chart-card-text"},[t._v("日访问量 1,234")])],1)],1),e("el-col",t._b({},"el-col",t.styleResponsive?{lg:6,md:12}:{span:6},!1),[e("el-card",{staticClass:"analysis-chart-card",attrs:{shadow:"never"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"ele-cell"},[e("div",{staticClass:"ele-cell-content"},[t._v("支付笔数")]),e("el-tag",{attrs:{size:"mini"}},[t._v("月")])],1)]},proxy:!0}])},[e("div",{staticClass:"analysis-chart-card-num ele-text-heading"},[t._v("6,560")]),e("div",{staticClass:"analysis-chart-card-content"},[e("v-chart",{ref:"payNumChart",staticStyle:{height:"40px"},attrs:{option:t.payNumChartOption}})],1),e("el-divider"),e("div",{staticClass:"analysis-chart-card-text"},[t._v("转化率 60%")])],1)],1),e("el-col",t._b({},"el-col",t.styleResponsive?{lg:6,md:12}:{span:6},!1),[e("el-card",{staticClass:"analysis-chart-card",attrs:{shadow:"never"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"ele-cell"},[e("div",{staticClass:"ele-cell-content"},[t._v("运营活动效果")]),e("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("周")])],1)]},proxy:!0}])},[e("div",{staticClass:"analysis-chart-card-num ele-text-heading"},[t._v("78%")]),e("div",{staticClass:"analysis-chart-card-content",staticStyle:{"padding-top":"25px"}},[e("el-progress",{attrs:{percentage:78,"show-text":!1,"stroke-width":10,color:"#13c2c2"}})],1),e("el-divider"),e("div",{staticClass:"analysis-chart-card-text"},[e("span",{staticClass:"ele-action"},[e("span",[t._v("周同比12%")]),e("i",{staticClass:"el-icon-caret-top ele-text-danger"})]),e("span",{staticClass:"ele-action"},[e("span",[t._v("日同比11%")]),e("i",{staticClass:"el-icon-caret-bottom ele-text-success"})])])],1)],1)],1)},l=[],i=a(68023),r=a(91416),o=a(85299),n=a(47956),c=a(63914),d=a(82739),p=a(59634),h=a(51430),v=a(12544);(0,i.D)([r.N,o.N,n.N,c.N,d.N]);var m={components:{VChart:p.ZP},mixins:[(0,v.i)(["visitChart","payNumChart"])],data(){return{visitChartOption:{},payNumChartOption:{}}},computed:{styleResponsive(){return this.$store.state.theme.styleResponsive}},created(){this.getPayNumData()},methods:{getPayNumData(){(0,h.fy)().then((t=>{this.visitChartOption={color:"#975fe5",tooltip:{trigger:"axis",formatter:'<i class="ele-chart-dot" style="background: #975fe5;"></i>{b0}: {c0}'},grid:{top:10,bottom:0,left:0,right:0},xAxis:[{show:!1,type:"category",boundaryGap:!1,data:t.map((t=>t.date))}],yAxis:[{show:!1,type:"value",splitLine:{show:!1}}],series:[{type:"line",smooth:!0,symbol:"none",areaStyle:{opacity:.5},data:t.map((t=>t.value))}]},this.payNumChartOption={tooltip:{trigger:"axis",formatter:'<i class="ele-chart-dot" style="background: #5b8ff9;"></i>{b0}: {c0}'},grid:{top:10,bottom:0,left:0,right:0},xAxis:[{show:!1,type:"category",data:t.map((t=>t.date))}],yAxis:[{show:!1,type:"value",splitLine:{show:!1}}],series:[{type:"bar",data:t.map((t=>t.value))}]}})).catch((t=>{this.$message.error(t.message)}))}}},u=m,y=a(1001),C=(0,y.Z)(u,s,l,!1,null,"4425ecb4",null),g=C.exports},50978:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never",header:"最近1小时访问情况","body-style":"padding: 14px 5px 0 0;"}},[e("v-chart",{ref:"visitHourChart",staticStyle:{height:"323px"},attrs:{option:t.visitHourChartOption}})],1)},l=[],i=a(68023),r=a(91416),o=a(85299),n=a(63914),c=a(82739),d=a(54488),p=a(59634),h=a(51430),v=a(12544);(0,i.D)([r.N,o.N,n.N,c.N,d.N]);var m={components:{VChart:p.ZP},mixins:[(0,v.i)(["visitHourChart"])],data(){return{visitHourChartOption:{}}},created(){this.getVisitHourData()},methods:{getVisitHourData(){(0,h.CY)().then((t=>{this.visitHourChartOption={tooltip:{trigger:"axis"},legend:{data:["浏览量","访问量"],right:20},xAxis:[{type:"category",boundaryGap:!1,data:t.map((t=>t.time))}],yAxis:[{type:"value"}],series:[{name:"浏览量",type:"line",smooth:!0,symbol:"none",areaStyle:{opacity:.5},data:t.map((t=>t.views))},{name:"访问量",type:"line",smooth:!0,symbol:"none",areaStyle:{opacity:.5},data:t.map((t=>t.visits))}]}})).catch((t=>{this.$message.error(t.message)}))}}},u=m,y=a(1001),C=(0,y.Z)(u,s,l,!1,null,null,null),g=C.exports},87676:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ele-body ele-body-card"},[e("statistics-card"),e("sale-card"),e("el-row",{attrs:{gutter:15}},[e("el-col",t._b({},"el-col",t.styleResponsive?{lg:18,md:16}:{span:18},!1),[e("visit-hour")],1),e("el-col",t._b({},"el-col",t.styleResponsive?{lg:6,md:8}:{span:6},!1),[e("hot-search")],1)],1)],1)},l=[],i=a(34902),r=a(53315),o=a(50978),n=a(8044),c={name:"DashboardAnalysis",components:{StatisticsCard:i["default"],SaleCard:r["default"],VisitHour:o["default"],HotSearch:n["default"]},computed:{styleResponsive(){return this.$store.state.theme.styleResponsive}}},d=c,p=a(1001),h=(0,p.Z)(d,s,l,!1,null,null,null),v=h.exports}}]);