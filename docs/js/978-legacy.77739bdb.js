"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[978],{50978:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var i=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never",header:"最近1小时访问情况","body-style":"padding: 14px 5px 0 0;"}},[e("v-chart",{ref:"visitHourChart",staticStyle:{height:"323px"},attrs:{option:t.visitHourChartOption}})],1)},n=[],r=(a(21249),a(68023)),o=a(91416),s=a(85299),u=a(63914),l=a(82739),p=a(54488),c=a(59634),h=a(51430),d=a(12544);(0,r.D)([o.N,s.N,u.N,l.N,p.N]);var m={components:{VChart:c.ZP},mixins:[(0,d.i)(["visitHourChart"])],data:function(){return{visitHourChartOption:{}}},created:function(){this.getVisitHourData()},methods:{getVisitHourData:function(){var t=this;(0,h.CY)().then((function(e){t.visitHourChartOption={tooltip:{trigger:"axis"},legend:{data:["浏览量","访问量"],right:20},xAxis:[{type:"category",boundaryGap:!1,data:e.map((function(t){return t.time}))}],yAxis:[{type:"value"}],series:[{name:"浏览量",type:"line",smooth:!0,symbol:"none",areaStyle:{opacity:.5},data:e.map((function(t){return t.views}))},{name:"访问量",type:"line",smooth:!0,symbol:"none",areaStyle:{opacity:.5},data:e.map((function(t){return t.visits}))}]}})).catch((function(e){t.$message.error(e.message)}))}}},f=m,y=a(1001),v=(0,y.Z)(f,i,n,!1,null,null,null),g=v.exports}}]);