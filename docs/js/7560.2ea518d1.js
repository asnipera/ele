"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[7560,6464],{26464:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var l=function(){var e=this,t=e._self._c;return t("el-form",{staticClass:"ele-form-search",attrs:{"label-width":"77px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)},submit:function(e){e.preventDefault()}}},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{lg:6,md:12}},[t("el-form-item",{attrs:{label:"文件名称:"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.where.name,callback:function(t){e.$set(e.where,"name",t)},expression:"where.name"}})],1)],1),t("el-col",{attrs:{lg:6,md:12}},[t("el-form-item",{attrs:{label:"文件路径:"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.where.path,callback:function(t){e.$set(e.where,"path",t)},expression:"where.path"}})],1)],1),t("el-col",{attrs:{lg:6,md:12}},[t("el-form-item",{attrs:{label:"上传人:"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.where.createNickname,callback:function(t){e.$set(e.where,"createNickname",t)},expression:"where.createNickname"}})],1)],1),t("el-col",{attrs:{lg:6,md:12}},[t("div",{staticClass:"ele-form-actions"},[t("el-button",{staticClass:"ele-btn-icon",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v(" 查询 ")]),t("el-button",{on:{click:e.reset}},[e._v("重置")])],1)])],1)],1)},r=[],o={data(){const e={name:"",path:"",createNickname:""};return{where:{...e}}},methods:{search(){this.$emit("search",this.where)},reset(){this.where={...this.defaultWhere},this.search()}}},n=o,s=a(1001),c=(0,s.Z)(n,l,r,!1,null,null,null),i=c.exports},27560:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("el-card",{attrs:{shadow:"never"}},[t("file-search",{on:{search:e.reload}}),t("ele-pro-table",{ref:"table",attrs:{columns:e.columns,datasource:e.datasource,selection:e.selection,"cache-key":"systemFileTable"},on:{"update:selection":function(t){e.selection=t}},scopedSlots:e._u([{key:"toolbar",fn:function(){return[t("el-upload",{staticClass:"ele-action ele-inline-block",attrs:{action:"","show-file-list":!1,"before-upload":e.onUpload}},[t("el-button",{staticClass:"ele-btn-icon",attrs:{size:"small",type:"primary",icon:"el-icon-upload2"}},[e._v(" 上传 ")])],1),t("el-button",{staticClass:"ele-btn-icon",attrs:{size:"small",type:"danger",icon:"el-icon-delete"},on:{click:e.removeBatch}},[e._v(" 删除 ")])]},proxy:!0},{key:"path",fn:function({row:a}){return[t("a",{attrs:{href:a.url,target:"_blank"}},[e._v(" "+e._s(a.path)+" ")])]}},{key:"action",fn:function({row:a}){return[t("el-link",{attrs:{type:"primary",underline:!1,icon:"el-icon-download",href:a.downloadUrl,target:"_blank"}},[e._v(" 下载 ")]),t("el-popconfirm",{staticClass:"ele-action",attrs:{title:"确定要删除此文件吗？"},on:{confirm:function(t){return e.remove(a)}},scopedSlots:e._u([{key:"reference",fn:function(){return[t("el-link",{attrs:{type:"danger",underline:!1,icon:"el-icon-delete"}},[e._v(" 删除 ")])]},proxy:!0}],null,!0)})]}}])})],1)],1)},r=[],o=a(26464),n=a(69590),s={name:"SystemFile",components:{FileSearch:o["default"]},data(){return{columns:[{columnKey:"selection",type:"selection",width:45,align:"center",fixed:"left"},{columnKey:"index",type:"index",width:45,align:"center",showOverflowTooltip:!0,fixed:"left"},{prop:"name",label:"文件名称",sortable:"custom",showOverflowTooltip:!0},{prop:"path",label:"文件路径",sortable:"custom",showOverflowTooltip:!0,slot:"path"},{prop:"length",label:"文件大小",sortable:"custom",showOverflowTooltip:!0,width:110,formatter:e=>e.length<1024?e.length+"B":e.length<1048576?(e.length/1024).toFixed(1)+"KB":e.length<1073741824?(e.length/1024/1024).toFixed(1)+"M":(e.length/1024/1024/1024).toFixed(1)+"G"},{prop:"createNickname",label:"上传人",sortable:"custom",showOverflowTooltip:!0,width:110},{prop:"createTime",label:"上传时间",sortable:"custom",showOverflowTooltip:!0,width:160,formatter:(e,t,a)=>this.$util.toDateString(a)},{columnKey:"action",label:"操作",width:130,align:"center",resizable:!1,slot:"action",showOverflowTooltip:!0}],selection:[]}},methods:{datasource({page:e,limit:t,where:a,order:l}){return(0,n.dk)({...a,...l,page:e,limit:t})},reload(e){this.$refs.table.reload({page:1,where:e})},remove(e){const t=this.$loading({lock:!0});(0,n.Yd)(e.id).then((e=>{t.close(),this.$message.success(e),this.reload()})).catch((e=>{t.close(),this.$message.error(e.message)}))},removeBatch(){this.selection.length?this.$confirm("确定要删除选中的文件吗?","提示",{type:"warning"}).then((()=>{const e=this.$loading({lock:!0});(0,n.cG)(this.selection.map((e=>e.id))).then((t=>{e.close(),this.$message.success(t),this.reload()})).catch((t=>{e.close(),this.$message.error(t.message)}))})).catch((()=>{})):this.$message.error("请至少选择一条数据")},onUpload(e){if(e.size/1024/1024>100)return this.$message.error("大小不能超过 100MB"),!1;const t=this.$loading({lock:!0});return(0,n.cT)(e).then((()=>{t.close(),this.$message.success("上传成功"),this.reload()})).catch((e=>{t.close(),this.$message.error(e.message)})),!1}}},c=s,i=a(1001),u=(0,i.Z)(c,l,r,!1,null,null,null),h=u.exports},69590:function(e,t,a){a.d(t,{Yd:function(){return n},cG:function(){return s},cT:function(){return r},dk:function(){return o}});a(21703);var l=a(84471);async function r(e){const t=new FormData;t.append("file",e);const a=await l.Z.post("/file/upload",t);return 0===a.data.code?a.data.data:Promise.reject(new Error(a.data.message))}async function o(e){const t=await l.Z.get("/file/page",{params:e});return 0===t.data.code?t.data.data:Promise.reject(new Error(t.data.message))}async function n(e){const t=await l.Z["delete"]("/file/remove/"+e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function s(e){const t=await l.Z["delete"]("/file/remove/batch",{data:e});return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}}}]);