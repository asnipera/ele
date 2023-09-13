"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[9850],{39850:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"支持多选"}},[t("ele-image-upload",{attrs:{limit:8,drag:!0,multiple:!0,"upload-handler":e.uploadHandler},on:{upload:e.onUpload},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}}),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.getData}},[e._v(" 获取数据 ")])],1)},n=[],o=i(6718),a={components:{EleImageUpload:o.Z},data(){return{images:[{uid:1,url:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg",status:"done"},{uid:2,url:"https://cdn.eleadmin.com/20200610/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd.jpg",status:"done"},{uid:3,url:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg",status:"done"}]}},methods:{getData(){console.log("data:",this.images),this.$message.success("数据已打印在控制台")},uploadHandler(e){const t={file:e,uid:e.uid,name:e.name,progress:0,status:null};e.type.startsWith("image")?e.size/1024/1024>2?this.$message.error("大小不能超过 2MB"):(t.url=window.URL.createObjectURL(e),this.images.push(t),this.onUpload(t)):this.$message.error("只能选择图片")},onUpload(e){console.log("item:",e),e.status="uploading",e.progress=20;const t=setInterval((()=>{e.progress+=20,100===e.progress&&(e.status="done",clearInterval(t))}),1e3)}}},l=a,r=i(1001),u=(0,r.Z)(l,s,n,!1,null,null,null),d=u.exports},6718:function(e,t,i){i.d(t,{Z:function(){return b}});var s=i(9980),n=i.n(s),o=i(92061),a=i(83647);function l(e,t,i,s,n,o,a,l){var r,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),s&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(r=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=r):n&&(r=l?function(){n.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(u.functional){u._injectStyles=r;var d=u.render;u.render=function(e,t){return r.call(t),d(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,r):[r]}return{exports:e,options:u}}const r={name:"ImageItem",mixins:[a["default"]],props:{item:Object,disabled:Boolean,itemStyle:Object},emits:["remove","item-click","retry"],computed:{statusText(){return{uploading:this.t("ele.upload.uploading"),exception:this.t("ele.upload.exception")}[this.item.status]},progressVisible(){return!(!this.item.status||!["uploading","exception"].includes(this.item.status))}},methods:{onRemove(){this.$emit("remove")},onItemClick(){this.$emit("item-click")},onRetry(){this.$emit("retry")}}};var u=function(){var e=this,t=e._self._c;return t("div",{class:["ele-image-upload-item",{draggable:!e.disabled}],style:e.itemStyle,on:{click:e.onItemClick}},[e.item.url?t("el-image",{attrs:{fit:"cover",width:"100%",height:"100%",src:e.item.url,title:e.item.name}}):[e._t("image",(function(){return[t("div",{staticClass:"ele-image-upload-thumbnail",attrs:{title:e.item.name}},[t("i",{staticClass:"el-icon-document"})])]}),{item:e.item})],e.disabled?e._e():t("div",{staticClass:"ele-image-upload-close",on:{click:function(t){return t.stopPropagation(),e.onRemove.apply(null,arguments)}}},[t("i",{staticClass:"el-icon-close"})]),e.progressVisible?t("div",{staticClass:"ele-image-upload-progress"},[e._t("progress",(function(){return[t("div",{staticClass:"ele-image-upload-text"},[e._v(e._s(e.statusText))]),t("el-progress",{attrs:{"show-text":!1,percentage:e.item.progress,status:{exception:"exception"}[e.item.status]}}),"exception"===e.item.status?t("div",{staticClass:"ele-image-upload-retry"},[t("i",{staticClass:"el-icon-refresh",attrs:{title:e.t("ele.upload.retry")},on:{click:function(t){return t.stopPropagation(),e.onRetry.apply(null,arguments)}}})]):e._e()]}),{item:e.item})],2):t("div",{staticClass:"ele-image-upload-mask"})],2)},d=[],c=l(r,u,d,!1,null,null,null,null);const p=c.exports,m={value:{type:Array,required:!0},disabled:Boolean,preview:{type:Boolean,default:!0},itemStyle:Object,buttonStyle:Object,beforeUpload:Function,beforeRemove:Function,uploadHandler:Function,removeHandler:Function,autoUpload:{type:Boolean,default:!0},limit:Number,multiple:Boolean,drag:Boolean,accept:{type:String,default:"image/png,image/jpeg"}};function h(e,t,i,s,n,o,a,l){var r,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),s&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(r=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=r):n&&(r=l?function(){n.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(u.functional){u._injectStyles=r;var d=u.render;u.render=function(e,t){return r.call(t),d(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,r):[r]}return{exports:e,options:u}}const f={name:"EleImageUpload",components:{VueDraggable:n(),ImageItem:p},mixins:[o.u],inject:{elForm:{default:null}},props:m,emits:["input","remove","item-click","upload"],data(){return{currentUrl:void 0}},computed:{isDisabled(){var e;return this.disabled||(null==(e=this.elForm)?void 0:e.disabled)},uploadVisible(){return!this.isDisabled&&!("number"===typeof this.limit&&this.limit>0&&this.value.length>=this.limit)},previewSrcList(){return this.preview?this.value.filter((e=>!!e.url)).map((e=>e.url)):null}},methods:{updateValue(e){this.$emit("input",e)},onUpload(e){if(!this.authenticated)return console.warn(o.c),!1;if(!this.uploadVisible)return!1;if("function"===typeof this.uploadHandler)return this.uploadHandler(e),!1;const t={file:e,uid:e.uid,name:e.name,progress:0,status:void 0};return e.type.startsWith("image")&&(t.url=window.URL.createObjectURL(e)),"function"===typeof this.beforeUpload?Promise.resolve(this.beforeUpload(e)).then((e=>{!1!==e&&this.uploadItem(t)})).catch((e=>{e&&console.error(e)})):this.uploadItem(t),!1},uploadItem(e){this.updateValue(this.value.concat([e])),this.autoUpload&&this.$emit("upload",e)},onRemove(e){"function"!==typeof this.removeHandler?"function"===typeof this.beforeRemove?Promise.resolve(this.beforeRemove(e)).then((t=>{!1!==t&&this.removeItem(e)})).catch((()=>{})):this.removeItem(e):this.removeHandler(e)},removeItem(e){this.updateValue(this.value.filter((t=>t!==e))),this.$emit("remove",e)},onItemClick(e){this.preview&&e.url&&(this.currentUrl=e.url,this.$nextTick((()=>{this.$refs.previewRef&&(this.$refs.previewRef.showViewer=!0)}))),this.$emit("item-click",e)},onRetry(e){this.$emit("upload",e)}},deactivated(){this.currentUrl=void 0}};var g=function(){var e=this,t=e._self._c;return t("VueDraggable",{class:["ele-image-upload-list",{"ele-image-upload-disabled":e.isDisabled}],attrs:{value:e.value,animation:300,draggable:".draggable","set-data":()=>{}},on:{input:e.updateValue},scopedSlots:e._u([{key:"footer",fn:function(){return[e.uploadVisible?t("div",{staticClass:"ele-image-upload-item ele-image-upload-button",style:[e.itemStyle,e.buttonStyle]},[t("el-upload",{attrs:{action:"",drag:e.drag,accept:e.accept,multiple:e.multiple,"show-file-list":!1,"before-upload":e.onUpload}},[e._t("icon",(function(){return[t("i",{staticClass:"el-icon-plus ele-image-upload-icon"})]}))],2)],1):e._e(),e.currentUrl?t("el-image",{ref:"previewRef",staticStyle:{display:"none"},attrs:{src:e.currentUrl,"preview-src-list":e.previewSrcList}}):e._e()]},proxy:!0}],null,!0)},e._l(e.value,(function(i){return t("ImageItem",{key:i.uid,attrs:{item:i,disabled:e.isDisabled,"item-style":e.itemStyle},on:{"item-click":function(t){return e.onItemClick(i)},remove:function(t){return e.onRemove(i)},retry:function(t){return e.onRetry(i)}},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(i){return[e._t(t,null,null,i||{})]}}}))],null,!0)})})),1)},v=[],_=h(f,g,v,!1,null,null,null,null);const b=_.exports}}]);