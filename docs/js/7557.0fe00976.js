"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[7557,1661,9195],{61661:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var r=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"导出 Excel"}},[t("ele-pro-table",{attrs:{size:"mini",columns:e.columns,datasource:e.users,selection:e.select,toolkit:["size","columns","fullscreen"],"need-page":!1},on:{"update:selection":function(t){e.select=t}},scopedSlots:e._u([{key:"toolbar",fn:function(){return[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.exportBas}},[e._v(" 导出 ")]),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.exportAdv}},[e._v(" 导出带表头合并 ")]),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.exportSel}},[e._v(" 导出选中 ")])]},proxy:!0}])})],1)},o=[],l=s(84105),n={data(){return{columns:[{columnKey:"selection",type:"selection",width:45,align:"center"},{columnKey:"index",type:"index",width:45,align:"center"},{prop:"username",label:"用户名",align:"center",showOverflowTooltip:!0},{prop:"addressGroup",label:"地址",align:"center",showOverflowTooltip:!0,children:[{prop:"province",label:"省",align:"center",showOverflowTooltip:!0},{prop:"city",label:"市",align:"center",showOverflowTooltip:!0},{prop:"zone",label:"区",align:"center",showOverflowTooltip:!0},{prop:"street",label:"街道",align:"center",showOverflowTooltip:!0},{prop:"address",label:"详细地址",align:"center",showOverflowTooltip:!0}]},{prop:"amount",label:"金额",align:"center",showOverflowTooltip:!0}],users:[{key:1,username:"张小三",amount:18,province:"浙江",city:"杭州",zone:"西湖区",street:"西溪街道",address:"西溪花园30栋1单元"},{key:2,username:"李小四",amount:39,province:"江苏",city:"苏州",zone:"姑苏区",street:"丝绸路",address:"天墅之城9幢2单元"},{key:3,username:"王小五",amount:8,province:"江西",city:"南昌",zone:"青山湖区",street:"艾溪湖办事处",address:"中兴和园1幢3单元"},{key:4,username:"赵小六",amount:16,province:"福建",city:"泉州",zone:"丰泽区",street:"南洋街道",address:"南洋村6幢1单元"},{key:5,username:"孙小七",amount:12,province:"湖北",city:"武汉",zone:"武昌区",street:"武昌大道",address:"两湖花园16幢2单元"},{key:6,username:"周小八",amount:11,province:"安徽",city:"黄山",zone:"黄山区",street:"汤口镇",address:"温泉村21号"}],select:[]}},methods:{exportBas(){const e=[["用户名","省","市","区","街道","详细地址","金额"]];this.users.forEach((t=>{e.push([t.username,t.province,t.city,t.zone,t.street,t.address,t.amount])}));const t="Sheet1",s={SheetNames:[t],Sheets:{}},r=l.P6.aoa_to_sheet(e);s.Sheets[t]=r,r["!cols"]=[{wch:10},{wch:10},{wch:10},{wch:10},{wch:20},{wch:40},{wch:10}],(0,l.NC)(s,"用户数据.xlsx")},exportAdv(){const e=[["用户名","地址",null,null,null,null,"金额"],[null,"省","市","区","街道","详细地址",null]];this.users.forEach((t=>{e.push([t.username,t.province,t.city,t.zone,t.street,t.address,t.amount])}));const t=l.P6.aoa_to_sheet(e);t["!merges"]=[{s:{r:0,c:1},e:{r:0,c:5}},{s:{r:0,c:0},e:{r:1,c:0}},{s:{r:0,c:6},e:{r:1,c:6}}];const s="Sheet1",r={SheetNames:[s],Sheets:{}};r.Sheets[s]=t,(0,l.NC)(r,"用户数据.xlsx")},exportSel(){if(0===this.select.length)return void this.$message.error("请至少选择一条数据");const e=[["用户名","省","市","区","街道","详细地址","金额"]];this.select.forEach((t=>{e.push([t.username,t.province,t.city,t.zone,t.street,t.address,t.amount])}));const t="Sheet1",s={SheetNames:[t],Sheets:{}};s.Sheets[t]=l.P6.aoa_to_sheet(e),(0,l.NC)(s,"用户数据.xlsx")}}},a=n,i=s(1001),c=(0,i.Z)(a,r,o,!1,null,null,null),p=c.exports},89195:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var r=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"导入 Excel"}},[t("div",{staticStyle:{display:"flex","margin-bottom":"12px"}},[t("el-upload",{staticClass:"ele-action",attrs:{action:"","show-file-list":!1,"before-upload":e.importFile,accept:".xls,.xlsx"}},[t("el-button",{staticClass:"hidden-xs-only",attrs:{type:"primary",size:"small"}},[e._v(" 导入 ")])],1),t("el-upload",{staticClass:"ele-action",attrs:{action:"","show-file-list":!1,"before-upload":e.importFile2,accept:".xls,.xlsx"}},[t("el-button",{attrs:{type:"primary",size:"small"}},[e._v("导入拆分合并")])],1),t("el-upload",{staticClass:"ele-action",attrs:{action:"","show-file-list":!1,"before-upload":e.importFile3,accept:".xls,.xlsx"}},[t("el-button",{attrs:{type:"primary",size:"small"}},[e._v("导入保持合并")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",border:!0,data:e.importData,"span-method":e.spanMethod}},[t("el-table-column",{attrs:{type:"index",width:"45",align:"center"}}),e._l(e.importTitle,(function(e,s){return t("el-table-column",{key:s,attrs:{prop:e,label:e,align:"center","show-overflow-tooltip":""}})}))],2),t("el-row",{attrs:{gutter:30}},[t("el-col",e._b({},"el-col",e.styleResponsive?{md:12}:{span:12},!1),[t("div",{staticStyle:{padding:"15px 0"}},[e._v("二维数组格式数据:")]),t("pre",{staticStyle:{"max-height":"300px",overflow:"auto"}},[e._v(e._s(JSON.stringify(e.importDataAoa,null,4)))])]),t("el-col",e._b({},"el-col",e.styleResponsive?{md:12}:{span:12},!1),[t("div",{staticStyle:{padding:"15px 0"}},[e._v("JSON格式数据:")]),t("pre",{staticStyle:{"max-height":"300px",overflow:"auto"}},[e._v(e._s(JSON.stringify(e.importData,null,4)))])])],1)],1)},o=[],l=(s(48675),s(37380),s(1118),s(84105)),n={data(){return{importData:[],importTitle:["A","B","C","D","E","F","G"],importDataAoa:[]}},computed:{styleResponsive(){return this.$store.state.theme.styleResponsive}},methods:{importFile(e){if(!["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(e.type))return this.$message.error("只能选择 excel 文件"),!1;if(e.size/1024/1024>20)return this.$message.error("大小不能超过 20MB"),!1;const t=new FileReader;return t.onload=e=>{const t=new Uint8Array(e.target.result),s=(0,l.ij)(t,{type:"array"}),r=s.SheetNames,o=s.Sheets[r[0]],n=l.P6.sheet_to_json(o,{header:1}),a=[];let i=0;const c=[];n.forEach((e=>{e.length>i&&(i=e.length);const t={};for(let s=0;s<e.length;s++)t[this.getCharByIndex(s)]=e[s];a.push(t)}));for(let l=0;l<i;l++)c.push(this.getCharByIndex(l));this.importTitle=c,this.importData=a,this.importDataAoa=n},t.readAsArrayBuffer(e),!1},importFile2(e){if(!["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(e.type))return this.$message.error("只能选择 excel 文件"),!1;if(e.size/1024/1024>20)return this.$message.error("大小不能超过 20MB"),!1;const t=new FileReader;return t.onload=e=>{const t=new Uint8Array(e.target.result),s=(0,l.ij)(t,{type:"array"}),r=s.SheetNames,o=s.Sheets[r[0]],n=l.P6.sheet_to_json(o,{header:1});o["!merges"]&&o["!merges"].forEach((e=>{for(let t=e.s.r;t<=e.e.r;t++)for(let s=e.s.c;s<=e.e.c;s++)n[t][s]=n[e.s.r][e.s.c]}));const a=[];let i=0;const c=[];n.forEach((e=>{e.length>i&&(i=e.length);const t={};for(let s=0;s<e.length;s++)t[this.getCharByIndex(s)]=e[s];a.push(t)}));for(let l=0;l<i;l++)c.push(this.getCharByIndex(l));this.importTitle=c,this.importData=a,this.importDataAoa=n},t.readAsArrayBuffer(e),!1},importFile3(e){if(!["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(e.type))return this.$message.error("只能选择 excel 文件"),!1;if(e.size/1024/1024>20)return this.$message.error("大小不能超过 20MB"),!1;const t=new FileReader;return t.onload=e=>{const t=new Uint8Array(e.target.result),s=(0,l.ij)(t,{type:"array"}),r=s.SheetNames,o=s.Sheets[r[0]],n=l.P6.sheet_to_json(o,{header:1}),a=[];let i=0;const c=[];n.forEach((e=>{e.length>i&&(i=e.length);const t={};for(let s=0;s<e.length;s++)t[this.getCharByIndex(s)]=e[s];a.push(t)}));for(let l=0;l<i;l++)c.push(this.getCharByIndex(l));o["!merges"]&&o["!merges"].forEach((e=>{for(let s=e.s.r;s<=e.e.r;s++)for(let t=e.s.c;t<=e.e.c;t++){const e=this.getCharByIndex(t);a[s]["__colspan__"+e]=0,a[s]["__rowspan__"+e]=0}const t=this.getCharByIndex(e.s.c);a[e.s.r]["__colspan__"+t]=e.e.c-e.s.c+1,a[e.s.r]["__rowspan__"+t]=e.e.r-e.s.r+1})),this.importTitle=c,this.importData=a,this.importDataAoa=n},t.readAsArrayBuffer(e),!1},getCharByIndex(e){const t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];if(e<t.length)return t[e];const s=parseInt(e/t.length),r=e%t.length;return t[s]+t[r]},spanMethod({row:e,column:t}){if(!t.label)return[1,1];const s=e["__rowspan__"+t.label],r=e["__colspan__"+t.label];return[null==s?1:s,null==r?1:r]}}},a=n,i=s(1001),c=(0,i.Z)(a,r,o,!1,null,null,null),p=c.exports},37557:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("excel-export"),t("excel-import")],1)},o=[],l=s(61661),n=s(89195),a={name:"ExtensionExcel",components:{ExcelExport:l["default"],ExcelImport:n["default"]}},i=a,c=s(1001),p=(0,c.Z)(i,r,o,!1,null,null,null),h=p.exports}}]);