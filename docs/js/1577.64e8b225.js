"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[1577,1986,6822,9850],{71986:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"手动上传"}},[t("ele-image-upload",{attrs:{"auto-upload":!1,"before-remove":e.onBeforeRemove},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}}),t("div",[t("el-button",{attrs:{type:"primary",size:"small",loading:e.loading},on:{click:e.onSubmit}},[e._v(" 提交 ")])],1)],1)},a=[],o=s(6718),l={components:{EleImageUpload:o.Z},data(){return{images:[{uid:1,url:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg",status:"done"},{uid:2,url:"https://cdn.eleadmin.com/20200610/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd.jpg",status:"done"}],loading:!1}},methods:{onSubmit(){this.checkDone()?this.submitForm():(this.loading=!0,this.images.forEach((e=>{e.status||this.uploadItem(e)})))},uploadItem(e){e.progress+=20,e.status="uploading";const t=setInterval((()=>{e.progress+=20,100===e.progress&&(e.status="done",clearInterval(t),this.checkDone()&&this.submitForm())}),Math.round(2500*Math.random())+500)},checkDone(){return!this.images.some((e=>"done"!==e.status))},submitForm(){this.$message.success("已全部上传完毕"),console.log("data:",this.images),this.loading=!1},onBeforeRemove(){return new Promise(((e,t)=>{this.$confirm("确定要删除吗?","提示",{type:"warning"}).then((()=>{e()})).catch((()=>{t()}))}))}}},n=l,r=s(1001),u=(0,r.Z)(n,i,a,!1,null,null,null),d=u.exports},36822:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"基础示例"}},[t("ele-image-upload",{attrs:{limit:8,disabled:e.disabled,"before-upload":e.onBeforeUpload,drag:!0},on:{upload:e.onUpload,"item-click":e.onItemClick},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}}),t("div",{staticClass:"ele-cell"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.getData}},[e._v(" 获取数据 ")]),t("div",{staticStyle:{"line-height":"22px"}},[t("em"),e._v("禁用:")]),t("div",{staticClass:"ele-cell-content"},[t("el-radio-group",{model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}},[t("el-radio",{attrs:{label:!1}},[e._v("否")]),t("el-radio",{attrs:{label:!0}},[e._v("是")])],1)],1)],1)],1)},a=[],o=s(6718),l={components:{EleImageUpload:o.Z},data(){return{images:[{uid:1,url:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg",status:"done"},{uid:2,url:"https://cdn.eleadmin.com/20200610/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd.jpg",status:"done"},{uid:3,url:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg",status:"done"}],disabled:!1}},methods:{getData(){console.log("data:",this.images),this.$message.success("数据已打印在控制台")},onUpload(e){if(console.log("item:",e),5!==this.images.length){e.status="uploading",e.progress=20;const t=setInterval((()=>{e.progress+=20,100===e.progress&&(e.status="done",clearInterval(t))}),1e3)}else e.status="uploading",e.progress<80&&(e.progress+=20),setTimeout((()=>{e.status="exception",this.$message.error("上传失败, 服务器繁忙")}),2e3)},onBeforeUpload(e){return e.type.startsWith("image")?e.size/1024/1024>2?(this.$message.error("大小不能超过 2MB"),!1):void 0:(this.$message.error("只能选择图片"),!1)},onItemClick(e){console.log("item-click:",e)}}},n=l,r=s(1001),u=(0,r.Z)(n,i,a,!1,null,null,null),d=u.exports},39850:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"支持多选"}},[t("ele-image-upload",{attrs:{limit:8,drag:!0,multiple:!0,"upload-handler":e.uploadHandler},on:{upload:e.onUpload},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}}),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.getData}},[e._v(" 获取数据 ")])],1)},a=[],o=s(6718),l={components:{EleImageUpload:o.Z},data(){return{images:[{uid:1,url:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg",status:"done"},{uid:2,url:"https://cdn.eleadmin.com/20200610/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd.jpg",status:"done"},{uid:3,url:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg",status:"done"}]}},methods:{getData(){console.log("data:",this.images),this.$message.success("数据已打印在控制台")},uploadHandler(e){const t={file:e,uid:e.uid,name:e.name,progress:0,status:null};e.type.startsWith("image")?e.size/1024/1024>2?this.$message.error("大小不能超过 2MB"):(t.url=window.URL.createObjectURL(e),this.images.push(t),this.onUpload(t)):this.$message.error("只能选择图片")},onUpload(e){console.log("item:",e),e.status="uploading",e.progress=20;const t=setInterval((()=>{e.progress+=20,100===e.progress&&(e.status="done",clearInterval(t))}),1e3)}}},n=l,r=s(1001),u=(0,r.Z)(n,i,a,!1,null,null,null),d=u.exports},31577:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("demo-basic"),t("demo-advanced"),t("demo-multiple")],1)},a=[],o=s(36822),l=s(71986),n=s(39850),r={name:"ExtensionUpload",components:{DemoBasic:o["default"],DemoAdvanced:l["default"],DemoMultiple:n["default"]}},u=r,d=s(1001),c=(0,d.Z)(u,i,a,!1,null,null,null),m=c.exports},6718:function(e,t,s){s.d(t,{Z:function(){return _}});var i=s(9980),a=s.n(i),o=s(92061),l=s(83647);function n(e,t,s,i,a,o,l,n){var r,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=s,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),l?(r=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},u._ssrRegister=r):a&&(r=n?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),r)if(u.functional){u._injectStyles=r;var d=u.render;u.render=function(e,t){return r.call(t),d(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,r):[r]}return{exports:e,options:u}}const r={name:"ImageItem",mixins:[l["default"]],props:{item:Object,disabled:Boolean,itemStyle:Object},emits:["remove","item-click","retry"],computed:{statusText(){return{uploading:this.t("ele.upload.uploading"),exception:this.t("ele.upload.exception")}[this.item.status]},progressVisible(){return!(!this.item.status||!["uploading","exception"].includes(this.item.status))}},methods:{onRemove(){this.$emit("remove")},onItemClick(){this.$emit("item-click")},onRetry(){this.$emit("retry")}}};var u=function(){var e=this,t=e._self._c;return t("div",{class:["ele-image-upload-item",{draggable:!e.disabled}],style:e.itemStyle,on:{click:e.onItemClick}},[e.item.url?t("el-image",{attrs:{fit:"cover",width:"100%",height:"100%",src:e.item.url,title:e.item.name}}):[e._t("image",(function(){return[t("div",{staticClass:"ele-image-upload-thumbnail",attrs:{title:e.item.name}},[t("i",{staticClass:"el-icon-document"})])]}),{item:e.item})],e.disabled?e._e():t("div",{staticClass:"ele-image-upload-close",on:{click:function(t){return t.stopPropagation(),e.onRemove.apply(null,arguments)}}},[t("i",{staticClass:"el-icon-close"})]),e.progressVisible?t("div",{staticClass:"ele-image-upload-progress"},[e._t("progress",(function(){return[t("div",{staticClass:"ele-image-upload-text"},[e._v(e._s(e.statusText))]),t("el-progress",{attrs:{"show-text":!1,percentage:e.item.progress,status:{exception:"exception"}[e.item.status]}}),"exception"===e.item.status?t("div",{staticClass:"ele-image-upload-retry"},[t("i",{staticClass:"el-icon-refresh",attrs:{title:e.t("ele.upload.retry")},on:{click:function(t){return t.stopPropagation(),e.onRetry.apply(null,arguments)}}})]):e._e()]}),{item:e.item})],2):t("div",{staticClass:"ele-image-upload-mask"})],2)},d=[],c=n(r,u,d,!1,null,null,null,null);const m=c.exports,p={value:{type:Array,required:!0},disabled:Boolean,preview:{type:Boolean,default:!0},itemStyle:Object,buttonStyle:Object,beforeUpload:Function,beforeRemove:Function,uploadHandler:Function,removeHandler:Function,autoUpload:{type:Boolean,default:!0},limit:Number,multiple:Boolean,drag:Boolean,accept:{type:String,default:"image/png,image/jpeg"}};function h(e,t,s,i,a,o,l,n){var r,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=s,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),l?(r=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},u._ssrRegister=r):a&&(r=n?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),r)if(u.functional){u._injectStyles=r;var d=u.render;u.render=function(e,t){return r.call(t),d(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,r):[r]}return{exports:e,options:u}}const g={name:"EleImageUpload",components:{VueDraggable:a(),ImageItem:m},mixins:[o.u],inject:{elForm:{default:null}},props:p,emits:["input","remove","item-click","upload"],data(){return{currentUrl:void 0}},computed:{isDisabled(){var e;return this.disabled||(null==(e=this.elForm)?void 0:e.disabled)},uploadVisible(){return!this.isDisabled&&!("number"===typeof this.limit&&this.limit>0&&this.value.length>=this.limit)},previewSrcList(){return this.preview?this.value.filter((e=>!!e.url)).map((e=>e.url)):null}},methods:{updateValue(e){this.$emit("input",e)},onUpload(e){if(!this.authenticated)return console.warn(o.c),!1;if(!this.uploadVisible)return!1;if("function"===typeof this.uploadHandler)return this.uploadHandler(e),!1;const t={file:e,uid:e.uid,name:e.name,progress:0,status:void 0};return e.type.startsWith("image")&&(t.url=window.URL.createObjectURL(e)),"function"===typeof this.beforeUpload?Promise.resolve(this.beforeUpload(e)).then((e=>{!1!==e&&this.uploadItem(t)})).catch((e=>{e&&console.error(e)})):this.uploadItem(t),!1},uploadItem(e){this.updateValue(this.value.concat([e])),this.autoUpload&&this.$emit("upload",e)},onRemove(e){"function"!==typeof this.removeHandler?"function"===typeof this.beforeRemove?Promise.resolve(this.beforeRemove(e)).then((t=>{!1!==t&&this.removeItem(e)})).catch((()=>{})):this.removeItem(e):this.removeHandler(e)},removeItem(e){this.updateValue(this.value.filter((t=>t!==e))),this.$emit("remove",e)},onItemClick(e){this.preview&&e.url&&(this.currentUrl=e.url,this.$nextTick((()=>{this.$refs.previewRef&&(this.$refs.previewRef.showViewer=!0)}))),this.$emit("item-click",e)},onRetry(e){this.$emit("upload",e)}},deactivated(){this.currentUrl=void 0}};var f=function(){var e=this,t=e._self._c;return t("VueDraggable",{class:["ele-image-upload-list",{"ele-image-upload-disabled":e.isDisabled}],attrs:{value:e.value,animation:300,draggable:".draggable","set-data":()=>{}},on:{input:e.updateValue},scopedSlots:e._u([{key:"footer",fn:function(){return[e.uploadVisible?t("div",{staticClass:"ele-image-upload-item ele-image-upload-button",style:[e.itemStyle,e.buttonStyle]},[t("el-upload",{attrs:{action:"",drag:e.drag,accept:e.accept,multiple:e.multiple,"show-file-list":!1,"before-upload":e.onUpload}},[e._t("icon",(function(){return[t("i",{staticClass:"el-icon-plus ele-image-upload-icon"})]}))],2)],1):e._e(),e.currentUrl?t("el-image",{ref:"previewRef",staticStyle:{display:"none"},attrs:{src:e.currentUrl,"preview-src-list":e.previewSrcList}}):e._e()]},proxy:!0}],null,!0)},e._l(e.value,(function(s){return t("ImageItem",{key:s.uid,attrs:{item:s,disabled:e.isDisabled,"item-style":e.itemStyle},on:{"item-click":function(t){return e.onItemClick(s)},remove:function(t){return e.onRemove(s)},retry:function(t){return e.onRetry(s)}},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(s){return[e._t(t,null,null,s||{})]}}}))],null,!0)})})),1)},v=[],b=h(g,f,v,!1,null,null,null,null);const _=b.exports}}]);