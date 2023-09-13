"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[6822],{36822:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"基础示例"}},[t("ele-image-upload",{attrs:{limit:8,disabled:e.disabled,"before-upload":e.onBeforeUpload,drag:!0},on:{upload:e.onUpload,"item-click":e.onItemClick},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}}),t("div",{staticClass:"ele-cell"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.getData}},[e._v(" 获取数据 ")]),t("div",{staticStyle:{"line-height":"22px"}},[t("em"),e._v("禁用:")]),t("div",{staticClass:"ele-cell-content"},[t("el-radio-group",{model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}},[t("el-radio",{attrs:{label:!1}},[e._v("否")]),t("el-radio",{attrs:{label:!0}},[e._v("是")])],1)],1)],1)],1)},o=[],s=(i(23157),i(6718)),a={components:{EleImageUpload:s.Z},data:function(){return{images:[{uid:1,url:"https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg",status:"done"},{uid:2,url:"https://cdn.eleadmin.com/20200610/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd.jpg",status:"done"},{uid:3,url:"https://cdn.eleadmin.com/20200609/f6bc05af944a4f738b54128717952107.jpg",status:"done"}],disabled:!1}},methods:{getData:function(){console.log("data:",this.images),this.$message.success("数据已打印在控制台")},onUpload:function(e){var t=this;if(console.log("item:",e),5!==this.images.length){e.status="uploading",e.progress=20;var i=setInterval((function(){e.progress+=20,100===e.progress&&(e.status="done",clearInterval(i))}),1e3)}else e.status="uploading",e.progress<80&&(e.progress+=20),setTimeout((function(){e.status="exception",t.$message.error("上传失败, 服务器繁忙")}),2e3)},onBeforeUpload:function(e){return e.type.startsWith("image")?e.size/1024/1024>2?(this.$message.error("大小不能超过 2MB"),!1):void 0:(this.$message.error("只能选择图片"),!1)},onItemClick:function(e){console.log("item-click:",e)}}},l=a,r=i(1001),u=(0,r.Z)(l,n,o,!1,null,null,null),c=u.exports},6718:function(e,t,i){i.d(t,{Z:function(){return _}});i(92222),i(21249),i(57327),i(41539),i(68309),i(23157),i(78783),i(33948),i(60285),i(41637),i(47941);var n=i(9980),o=i.n(n),s=i(92061),a=(i(26699),i(83647));function l(e,t,i,n,o,s,a,l){var r,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),a?(r=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=r):o&&(r=l?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),r)if(u.functional){u._injectStyles=r;var c=u.render;u.render=function(e,t){return r.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,r):[r]}return{exports:e,options:u}}var r={name:"ImageItem",mixins:[a["default"]],props:{item:Object,disabled:Boolean,itemStyle:Object},emits:["remove","item-click","retry"],computed:{statusText:function(){return{uploading:this.t("ele.upload.uploading"),exception:this.t("ele.upload.exception")}[this.item.status]},progressVisible:function(){return!(!this.item.status||!["uploading","exception"].includes(this.item.status))}},methods:{onRemove:function(){this.$emit("remove")},onItemClick:function(){this.$emit("item-click")},onRetry:function(){this.$emit("retry")}}},u=function(){var e=this,t=e._self._c;return t("div",{class:["ele-image-upload-item",{draggable:!e.disabled}],style:e.itemStyle,on:{click:e.onItemClick}},[e.item.url?t("el-image",{attrs:{fit:"cover",width:"100%",height:"100%",src:e.item.url,title:e.item.name}}):[e._t("image",(function(){return[t("div",{staticClass:"ele-image-upload-thumbnail",attrs:{title:e.item.name}},[t("i",{staticClass:"el-icon-document"})])]}),{item:e.item})],e.disabled?e._e():t("div",{staticClass:"ele-image-upload-close",on:{click:function(t){return t.stopPropagation(),e.onRemove.apply(null,arguments)}}},[t("i",{staticClass:"el-icon-close"})]),e.progressVisible?t("div",{staticClass:"ele-image-upload-progress"},[e._t("progress",(function(){return[t("div",{staticClass:"ele-image-upload-text"},[e._v(e._s(e.statusText))]),t("el-progress",{attrs:{"show-text":!1,percentage:e.item.progress,status:{exception:"exception"}[e.item.status]}}),"exception"===e.item.status?t("div",{staticClass:"ele-image-upload-retry"},[t("i",{staticClass:"el-icon-refresh",attrs:{title:e.t("ele.upload.retry")},on:{click:function(t){return t.stopPropagation(),e.onRetry.apply(null,arguments)}}})]):e._e()]}),{item:e.item})],2):t("div",{staticClass:"ele-image-upload-mask"})],2)},c=[],d=l(r,u,c,!1,null,null,null,null),p=d.exports,m=(i(9653),{value:{type:Array,required:!0},disabled:Boolean,preview:{type:Boolean,default:!0},itemStyle:Object,buttonStyle:Object,beforeUpload:Function,beforeRemove:Function,uploadHandler:Function,removeHandler:Function,autoUpload:{type:Boolean,default:!0},limit:Number,multiple:Boolean,drag:Boolean,accept:{type:String,default:"image/png,image/jpeg"}});function f(e,t,i,n,o,s,a,l){var r,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),a?(r=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=r):o&&(r=l?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),r)if(u.functional){u._injectStyles=r;var c=u.render;u.render=function(e,t){return r.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,r):[r]}return{exports:e,options:u}}var h={name:"EleImageUpload",components:{VueDraggable:o(),ImageItem:p},mixins:[s.u],inject:{elForm:{default:null}},props:m,emits:["input","remove","item-click","upload"],data:function(){return{currentUrl:void 0}},computed:{isDisabled:function(){var e;return this.disabled||(null==(e=this.elForm)?void 0:e.disabled)},uploadVisible:function(){return!this.isDisabled&&!("number"===typeof this.limit&&this.limit>0&&this.value.length>=this.limit)},previewSrcList:function(){return this.preview?this.value.filter((function(e){return!!e.url})).map((function(e){return e.url})):null}},methods:{updateValue:function(e){this.$emit("input",e)},onUpload:function(e){var t=this;if(!this.authenticated)return console.warn(s.c),!1;if(!this.uploadVisible)return!1;if("function"===typeof this.uploadHandler)return this.uploadHandler(e),!1;var i={file:e,uid:e.uid,name:e.name,progress:0,status:void 0};return e.type.startsWith("image")&&(i.url=window.URL.createObjectURL(e)),"function"===typeof this.beforeUpload?Promise.resolve(this.beforeUpload(e)).then((function(e){!1!==e&&t.uploadItem(i)})).catch((function(e){e&&console.error(e)})):this.uploadItem(i),!1},uploadItem:function(e){this.updateValue(this.value.concat([e])),this.autoUpload&&this.$emit("upload",e)},onRemove:function(e){var t=this;"function"!==typeof this.removeHandler?"function"===typeof this.beforeRemove?Promise.resolve(this.beforeRemove(e)).then((function(i){!1!==i&&t.removeItem(e)})).catch((function(){})):this.removeItem(e):this.removeHandler(e)},removeItem:function(e){this.updateValue(this.value.filter((function(t){return t!==e}))),this.$emit("remove",e)},onItemClick:function(e){var t=this;this.preview&&e.url&&(this.currentUrl=e.url,this.$nextTick((function(){t.$refs.previewRef&&(t.$refs.previewRef.showViewer=!0)}))),this.$emit("item-click",e)},onRetry:function(e){this.$emit("upload",e)}},deactivated:function(){this.currentUrl=void 0}},v=function(){var e=this,t=e._self._c;return t("VueDraggable",{class:["ele-image-upload-list",{"ele-image-upload-disabled":e.isDisabled}],attrs:{value:e.value,animation:300,draggable:".draggable","set-data":function(){}},on:{input:e.updateValue},scopedSlots:e._u([{key:"footer",fn:function(){return[e.uploadVisible?t("div",{staticClass:"ele-image-upload-item ele-image-upload-button",style:[e.itemStyle,e.buttonStyle]},[t("el-upload",{attrs:{action:"",drag:e.drag,accept:e.accept,multiple:e.multiple,"show-file-list":!1,"before-upload":e.onUpload}},[e._t("icon",(function(){return[t("i",{staticClass:"el-icon-plus ele-image-upload-icon"})]}))],2)],1):e._e(),e.currentUrl?t("el-image",{ref:"previewRef",staticStyle:{display:"none"},attrs:{src:e.currentUrl,"preview-src-list":e.previewSrcList}}):e._e()]},proxy:!0}],null,!0)},e._l(e.value,(function(i){return t("ImageItem",{key:i.uid,attrs:{item:i,disabled:e.isDisabled,"item-style":e.itemStyle},on:{"item-click":function(t){return e.onItemClick(i)},remove:function(t){return e.onRemove(i)},retry:function(t){return e.onRetry(i)}},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(i){return[e._t(t,null,null,i||{})]}}}))],null,!0)})})),1)},g=[],b=f(h,v,g,!1,null,null,null,null),_=b.exports}}]);