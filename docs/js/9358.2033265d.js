"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[9358],{59358:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var r=function(){var t=this,e=t._self._c;return e("el-card",{attrs:{shadow:"never",header:"弹幕功能"}},[e("div",{staticClass:"ele-action-group",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"ele-action",staticStyle:{display:"inline-block",width:"160px"}},[e("el-input",{attrs:{placeholder:"请输入弹幕内容",size:"mini",disabled:!t.ready},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),e("el-button",{attrs:{size:"mini",disabled:!t.ready},on:{click:t.shoot}},[t._v("发射")])],1),e("xgplayer",{attrs:{config:t.config},on:{player:t.onPlayer}})],1)},l=[],i=o(53714),a={components:{Xgplayer:i.Z},data(){return{config:{id:"demoPlayer2",lang:"zh-cn",fluid:!0,url:"https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_TheatricalTeaser_WeAreOverwatch_zhCN.mp4",poster:"https://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/solution/general-video/css/img/scene/1.png",danmu:{comments:[{id:"1",start:0,txt:"空降",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"2",start:1500,txt:"前方高能",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"3",start:3500,txt:"弹幕护体",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"4",start:4500,txt:"弹幕护体",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"5",start:6e3,txt:"前方高能",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"6",start:8500,txt:"弹幕护体",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"7",start:1e4,txt:"666666666",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"8",start:12500,txt:"前方高能",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"9",start:15500,txt:"666666666",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"10",start:16500,txt:"666666666",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"11",start:18e3,txt:"关弹幕, 保智商",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"12",start:20500,txt:"关弹幕, 保智商",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"13",start:22e3,txt:"666666666",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"14",start:25500,txt:"666666666",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}},{id:"15",start:26e3,txt:"前方高能",duration:15e3,color:!0,style:{color:"#ffcd08",fontSize:"20px"}}]}},player:null,ready:!1,text:""}},methods:{onPlayer(t){this.player=t,this.player.on("play",(()=>{this.ready=!0}))},shoot(){this.text?(this.player.danmu.sendComment({id:(new Date).getTime(),duration:15e3,color:!0,start:1e3*this.player.currentTime,txt:this.text,style:{color:"#fa1f41",fontSize:"20px",border:"solid 1px #fa1f41"}}),this.text=""):this.$message.error("请输入弹幕内容")}}},n=a,s=o(1001),c=(0,s.Z)(n,r,l,!1,null,null,null),d=c.exports}}]);