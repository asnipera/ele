(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[7560,7863],{87863:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});r(74916),r(64765),r(68309);var n=function(){var e=this,t=e._self._c;return t("el-form",{staticClass:"ele-form-search",attrs:{"label-width":"77px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)},submit:function(e){e.preventDefault()}}},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{lg:6,md:12}},[t("el-form-item",{attrs:{label:"文件名称:"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.where.name,callback:function(t){e.$set(e.where,"name",t)},expression:"where.name"}})],1)],1),t("el-col",{attrs:{lg:6,md:12}},[t("el-form-item",{attrs:{label:"文件路径:"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.where.path,callback:function(t){e.$set(e.where,"path",t)},expression:"where.path"}})],1)],1),t("el-col",{attrs:{lg:6,md:12}},[t("el-form-item",{attrs:{label:"上传人:"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.where.createNickname,callback:function(t){e.$set(e.where,"createNickname",t)},expression:"where.createNickname"}})],1)],1),t("el-col",{attrs:{lg:6,md:12}},[t("div",{staticClass:"ele-form-actions"},[t("el-button",{staticClass:"ele-btn-icon",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v(" 查询 ")]),t("el-button",{on:{click:e.reset}},[e._v("重置")])],1)])],1)],1)},a=[],o=r(95082),l={data:function(){var e={name:"",path:"",createNickname:""};return{where:(0,o.Z)({},e)}},methods:{search:function(){this.$emit("search",this.where)},reset:function(){this.where=(0,o.Z)({},this.defaultWhere),this.search()}}},s=l,c=r(1001),i=(0,c.Z)(s,n,a,!1,null,null,null),u=i.exports},27560:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("el-card",{attrs:{shadow:"never"}},[t("file-search",{on:{search:e.reload}}),t("ele-pro-table",{ref:"table",attrs:{columns:e.columns,datasource:e.datasource,selection:e.selection,"cache-key":"systemFileTable"},on:{"update:selection":function(t){e.selection=t}},scopedSlots:e._u([{key:"toolbar",fn:function(){return[t("el-upload",{staticClass:"ele-action ele-inline-block",attrs:{action:"","show-file-list":!1,"before-upload":e.onUpload}},[t("el-button",{staticClass:"ele-btn-icon",attrs:{size:"small",type:"primary",icon:"el-icon-upload2"}},[e._v(" 上传 ")])],1),t("el-button",{staticClass:"ele-btn-icon",attrs:{size:"small",type:"danger",icon:"el-icon-delete"},on:{click:e.removeBatch}},[e._v(" 删除 ")])]},proxy:!0},{key:"path",fn:function(r){var n=r.row;return[t("a",{attrs:{href:n.url,target:"_blank"}},[e._v(" "+e._s(n.path)+" ")])]}},{key:"action",fn:function(r){var n=r.row;return[t("el-link",{attrs:{type:"primary",underline:!1,icon:"el-icon-download",href:n.downloadUrl,target:"_blank"}},[e._v(" 下载 ")]),t("el-popconfirm",{staticClass:"ele-action",attrs:{title:"确定要删除此文件吗？"},on:{confirm:function(t){return e.remove(n)}},scopedSlots:e._u([{key:"reference",fn:function(){return[t("el-link",{attrs:{type:"danger",underline:!1,icon:"el-icon-delete"}},[e._v(" 删除 ")])]},proxy:!0}],null,!0)})]}}])})],1)],1)},a=[],o=r(95082),l=(r(56977),r(21249),r(87863)),s=r(69590),c={name:"SystemFile",components:{FileSearch:l["default"]},data:function(){var e=this;return{columns:[{columnKey:"selection",type:"selection",width:45,align:"center",fixed:"left"},{columnKey:"index",type:"index",width:45,align:"center",showOverflowTooltip:!0,fixed:"left"},{prop:"name",label:"文件名称",sortable:"custom",showOverflowTooltip:!0},{prop:"path",label:"文件路径",sortable:"custom",showOverflowTooltip:!0,slot:"path"},{prop:"length",label:"文件大小",sortable:"custom",showOverflowTooltip:!0,width:110,formatter:function(e){return e.length<1024?e.length+"B":e.length<1048576?(e.length/1024).toFixed(1)+"KB":e.length<1073741824?(e.length/1024/1024).toFixed(1)+"M":(e.length/1024/1024/1024).toFixed(1)+"G"}},{prop:"createNickname",label:"上传人",sortable:"custom",showOverflowTooltip:!0,width:110},{prop:"createTime",label:"上传时间",sortable:"custom",showOverflowTooltip:!0,width:160,formatter:function(t,r,n){return e.$util.toDateString(n)}},{columnKey:"action",label:"操作",width:130,align:"center",resizable:!1,slot:"action",showOverflowTooltip:!0}],selection:[]}},methods:{datasource:function(e){var t=e.page,r=e.limit,n=e.where,a=e.order;return(0,s.dk)((0,o.Z)((0,o.Z)((0,o.Z)({},n),a),{},{page:t,limit:r}))},reload:function(e){this.$refs.table.reload({page:1,where:e})},remove:function(e){var t=this,r=this.$loading({lock:!0});(0,s.Yd)(e.id).then((function(e){r.close(),t.$message.success(e),t.reload()})).catch((function(e){r.close(),t.$message.error(e.message)}))},removeBatch:function(){var e=this;this.selection.length?this.$confirm("确定要删除选中的文件吗?","提示",{type:"warning"}).then((function(){var t=e.$loading({lock:!0});(0,s.cG)(e.selection.map((function(e){return e.id}))).then((function(r){t.close(),e.$message.success(r),e.reload()})).catch((function(r){t.close(),e.$message.error(r.message)}))})).catch((function(){})):this.$message.error("请至少选择一条数据")},onUpload:function(e){var t=this;if(e.size/1024/1024>100)return this.$message.error("大小不能超过 100MB"),!1;var r=this.$loading({lock:!0});return(0,s.cT)(e).then((function(){r.close(),t.$message.success("上传成功"),t.reload()})).catch((function(e){r.close(),t.$message.error(e.message)})),!1}}},i=c,u=r(1001),p=(0,u.Z)(i,n,a,!1,null,null,null),f=p.exports},81150:function(e){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},64765:function(e,t,r){"use strict";var n=r(46916),a=r(27007),o=r(19670),l=r(68554),s=r(84488),c=r(81150),i=r(41340),u=r(58173),p=r(97651);a("search",(function(e,t,r){return[function(t){var r=s(this),a=l(t)?void 0:u(t,e);return a?n(a,t,r):new RegExp(t)[e](i(r))},function(e){var n=o(this),a=i(e),l=r(t,n,a);if(l.done)return l.value;var s=n.lastIndex;c(s,0)||(n.lastIndex=0);var u=p(n,a);return c(n.lastIndex,s)||(n.lastIndex=s),null===u?-1:u.index}]}))},69590:function(e,t,r){"use strict";r.d(t,{Yd:function(){return u},cG:function(){return f},cT:function(){return l},dk:function(){return c}});var n=r(50124),a=r(48534),o=(r(41539),r(21703),r(84471));function l(e){return s.apply(this,arguments)}function s(){return s=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,r.append("file",t),e.next=4,o.Z.post("/file/upload",r);case 4:if(a=e.sent,0!==a.data.code){e.next=7;break}return e.abrupt("return",a.data.data);case 7:return e.abrupt("return",Promise.reject(new Error(a.data.message)));case 8:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function c(e){return i.apply(this,arguments)}function i(){return i=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/file/page",{params:t});case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.data);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.Z["delete"]("/file/remove/"+t);case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.Z["delete"]("/file/remove/batch",{data:t});case 2:if(r=e.sent,0!==r.data.code){e.next=5;break}return e.abrupt("return",r.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(r.data.message)));case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}}}]);