"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[785,1213],{80785:function(e,t,i){i.r(t),i.d(t,{default:function(){return O}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"demo-file-list-group"},[e.data.length?t("ele-file-list",{style:{minHeight:"400px",minWidth:e.grid?"auto":"456px"},attrs:{data:e.data,grid:e.grid,sort:e.sort,order:e.order,checked:e.checked,icons:e.icons,"sm-icons":e.smIcons},on:{"item-click":e.onItemClick,"sort-change":e.onSortChange,"update:checked":e.updateChecked,"item-context-menu":e.onCtxMenuClick},scopedSlots:e._u([{key:"context-menu",fn:function({item:i}){return[t("el-dropdown-item",{attrs:{command:"open"}},[e._v("打开")]),i.isDirectory?e._e():t("el-dropdown-item",{attrs:{command:"download",icon:"el-icon-download",divided:""}},[e._v(" 下载 ")]),t("el-dropdown-item",{attrs:{command:"edit",icon:"el-icon-edit",divided:i.isDirectory}},[e._v(" 重命名 ")]),t("el-dropdown-item",{attrs:{command:"move",icon:"el-icon-rank",divided:""}},[e._v(" 移动到 ")]),t("el-dropdown-item",{attrs:{command:"remove",icon:"el-icon-delete"}},[e._v(" 删除 ")])]}}],null,!1,770370516)}):t("div",{staticClass:"demo-file-list-empty"},[t("ele-empty")],1),t("div",{staticStyle:{display:"none"}},[e.previewOption.visible?t("el-image",{ref:"previewRef",attrs:{src:e.previewOption.current,"preview-src-list":e.previewImages}}):e._e()],1),t("name-edit",{attrs:{visible:e.nameEditVisible,data:e.nameEditData},on:{"update:visible":function(t){e.nameEditVisible=t},done:e.onDone}})],1)},s=[],c=i(83647),o=i(92061);const l="ele-file-item-context-el",a={name:"FileGridItem",props:{item:{type:Object,required:!0},checkbox:Boolean,selection:Array,icons:Array},emits:["item-click","item-check-change","context-menu"],computed:{checked(){return this.item&&Array.isArray(this.selection)&&this.selection.includes(this.item)},icon(){var e,t,i,n;return(null==(e=this.item)?void 0:e.thumbnail)?this.item.thumbnail:this.icons?this.item.isDirectory?null==(t=this.icons.find((e=>"dir"===e.type)))?void 0:t.icon:(null==(i=this.icons.find((e=>{var t;return!!(null==(t=e.types)?void 0:t.find((e=>{var t;return!!(null==(t=this.item.name)?void 0:t.endsWith(e))})))})))?void 0:i.icon)||(null==(n=this.icons.find((e=>"file"===e.type)))?void 0:n.icon):void 0}},methods:{onItemClick(){this.$emit("item-click",this.item)},onItemCheckChange(){this.$emit("item-check-change",this.item)},onContextMenu(e){e.preventDefault(),e.stopPropagation();const t=e.currentTarget.parentNode;if(t){const e=t.querySelector("."+l);e&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{e.click()}),200))}},onContextMenuClick(e){this.$emit("context-menu",{key:e,item:this.item})}},render(e){const t=[e("div",{class:"ele-file-list-item-body",on:{contextmenu:this.onContextMenu}},[e("div",{class:"ele-file-list-item-icon"},[e("img",{attrs:{src:this.icon},class:{"ele-file-list-item-icon-image":!!this.item.thumbnail}})]),e("div",{class:"ele-file-list-item-title",attrs:{title:this.item.name}},this.item.name)])];this.checkbox&&t.push(e("div",{class:"ele-file-list-item-check",on:{click:e=>{e.stopPropagation(),this.onItemCheckChange()}}},[e("i",{class:"ele-file-icon-check checked"})]));const i=this.$scopedSlots["context-menu"];return i&&t.push(e("el-dropdown",{class:"ele-file-item-context-wrap",props:{trigger:"click",placement:"bottom"},on:{command:this.onContextMenuClick}},[e("div",{class:l,on:{click:e=>e.stopPropagation()}}),e("el-dropdown-menu",{slot:"dropdown",class:"ele-file-item-context-menu"},i({item:this.item}))])),e("div",{class:["ele-file-list-item",{checked:this.checked}],on:{click:e=>{e.stopPropagation(),this.onItemClick()}}},t)}},r={name:"FileGrid",props:{data:Array,icons:Array,selection:Array,checkbox:Boolean,checked:Boolean,indeterminate:Boolean,total:Number,totalText:String,checkAllText:String},emits:["check-all-change","item-click","item-check-change","item-context-menu"],computed:{checkboxClass(){return["ele-file-list-check ele-file-icon-check",{checked:this.checked},{indeterminate:this.indeterminate}]}},methods:{onCheckAllChange(){this.$emit("check-all-change")},onItemClick(e){this.$emit("item-click",e)},onItemCheckChange(e){this.$emit("item-check-change",e)},onItemContextMenu(e){this.$emit("item-context-menu",e)}},render(e){var t,i;const n=[];return this.checkbox&&n.push(e("div",{class:"ele-file-list-header"},[e("div",{class:"ele-file-list-check-group",on:{click:e=>{e.stopPropagation(),this.onCheckAllChange()}}},[e("i",{class:this.checkboxClass}),e("div",{},this.total?null==(t=this.totalText)?void 0:t.replace(/{total}/g,String(this.total)):this.checkAllText)])])),n.push(e("div",{class:"ele-file-list-body"},null==(i=this.data)?void 0:i.map(((t,i)=>e(a,{key:i,props:{item:t,icons:this.icons,checkbox:this.checkbox,selection:this.selection},on:{"item-click":this.onItemClick,"item-check-change":this.onItemCheckChange,"context-menu":this.onItemContextMenu},scopedSlots:this.$scopedSlots}))))),e("div",{class:"ele-file-list"},n)}};function d(e,t,i,n,s,c,o,l){var a,r="function"===typeof e?e.options:e;if(t&&(r.render=t,r.staticRenderFns=i,r._compiled=!0),n&&(r.functional=!0),c&&(r._scopeId="data-v-"+c),o?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},r._ssrRegister=a):s&&(a=l?function(){s.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:s),a)if(r.functional){r._injectStyles=a;var d=r.render;r.render=function(e,t){return a.call(t),d(e,t)}}else{var m=r.beforeCreate;r.beforeCreate=m?[].concat(m,a):[a]}return{exports:e,options:r}}const m={name:"FileSort",props:{sort:String,order:String,name:{type:String,required:!0}},computed:{classes(){return["ele-file-list-table-item-sort",{"ele-file-list-sort-asc":this.name===this.sort&&"asc"===this.order},{"ele-file-list-sort-desc":this.name===this.sort&&"desc"===this.order}]}}};var h=function(){var e=this,t=e._self._c;return t("i",{class:e.classes})},p=[],u=d(m,h,p,!1,null,null,null,null);const f=u.exports,g="ele-file-item-context-el",k={name:"FileTableItem",props:{item:{type:Object,required:!0},checkbox:Boolean,selection:Array,icons:Array,columns:Array},emits:["item-click","item-check-change","context-menu"],computed:{checked(){return this.item&&Array.isArray(this.selection)&&this.selection.includes(this.item)},icon(){var e,t,i,n;if(this.icons)return(null==(e=this.item)?void 0:e.isDirectory)?null==(t=this.icons.find((e=>"dir"===e.type)))?void 0:t.icon:(null==(i=this.icons.find((e=>{var t;return!!(null==(t=e.types)?void 0:t.find((e=>{var t;return!!(null==(t=this.item.name)?void 0:t.endsWith(e))})))})))?void 0:i.icon)||(null==(n=this.icons.find((e=>"file"===e.type)))?void 0:n.icon)}},methods:{onItemClick(){this.$emit("item-click",this.item)},onItemCheckChange(){this.$emit("item-check-change",this.item)},onContextMenu(e){e.preventDefault(),e.stopPropagation();const t=e.currentTarget.parentNode;if(t){const e=t.querySelector("."+g);e&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{e.click()}),200))}},onContextMenuClick(e){this.$emit("context-menu",{key:e,item:this.item})}},render(e){var t;const i=[];this.checkbox&&i.push(e("div",{class:"ele-file-list-table-item-check-group"},[e("i",{class:["ele-file-icon-check",{checked:this.checked}],on:{click:e=>{e.stopPropagation(),this.onItemCheckChange()}}})]));const n=[e("div",{class:"ele-file-list-table-item-icon"},[e("img",{attrs:{src:this.icon,alt:this.item.name},class:"ele-file-list-table-item-icon-image",on:{click:this.onItemClick}}),e("div",{class:"ele-file-list-table-item-title",attrs:{title:this.item.name},on:{click:this.onItemClick}},this.item.name)])],s=this.$scopedSlots["tool"];s&&n.push(e("div",{class:"ele-file-list-table-item-tool-group"},s({item:this.item}))),i.push(e("div",{class:"ele-file-list-table-item-name"},n)),null==(t=this.columns)||t.forEach((t=>{var n;const s=null==(n=this.item)?void 0:n[t.prop],c=t.slot?this.$scopedSlots[t.slot]:void 0;i.push(e("div",{key:t.prop,style:t.style,class:"ele-file-list-table-item-col"},c?c({item:this.item,col:t}):null==s?void 0:String(s)))}));const c=[e("div",{class:"ele-file-list-table-item-body",on:{contextmenu:this.onContextMenu}},i)],o=this.$scopedSlots["context-menu"];return o&&c.push(e("el-dropdown",{class:"ele-file-item-context-wrap",props:{trigger:"click",placement:"bottom-start"},on:{command:this.onContextMenuClick}},[e("div",{class:g,on:{click:e=>e.stopPropagation()}}),e("el-dropdown-menu",{slot:"dropdown",class:"ele-file-item-context-menu"},o({item:this.item}))])),e("div",{class:["ele-file-list-table-item",{checked:this.checked}]},c)}},v={name:"FileTable",props:{data:Array,icons:Array,selection:Array,checkbox:Boolean,checked:Boolean,indeterminate:Boolean,total:Number,totalText:String,checkAllText:String,nameText:String,sizeText:String,timeText:String,sort:{type:[String,Boolean],default:!1},order:String,columns:Array},emits:["check-all-change","item-click","item-check-change","sort-change","item-context-menu"],computed:{checkboxClass(){return["ele-file-list-table-item-check ele-file-icon-check",{checked:this.checked},{indeterminate:this.indeterminate}]},tableCols(){if(this.columns)return this.columns;const e=[{title:this.sizeText,prop:"length",style:{width:"120px",flexShrink:0}},{title:this.timeText,prop:"updateTime",style:{width:"180px",flexShrink:0}}];return e}},methods:{onCheckAllChange(){this.$emit("check-all-change")},onItemClick(e){this.$emit("item-click",e)},onItemCheckChange(e){this.$emit("item-check-change",e)},onSortChange(e){this.$emit("sort-change",e)},onItemContextMenu(e){this.$emit("item-context-menu",e)}},render(e){var t;const i=[],n=[];this.checkbox&&n.push(e("div",{class:"ele-file-list-table-item-check-group"},[e("i",{class:this.checkboxClass,on:{click:e=>{e.stopPropagation(),this.onCheckAllChange()}}})]));const s=[e("span",{},this.nameText)];return"string"===typeof this.sort&&s.push(e(f,{props:{sort:this.sort,order:this.order,name:"name"}})),n.push(e("div",{class:"ele-file-list-table-item-name",on:{click:()=>this.onSortChange("name")}},s)),this.tableCols.forEach((t=>{const i=t.headerSlot?this.$scopedSlots[t.headerSlot]:void 0,s=[e("span",{},i?i({col:t}):t.title)];"string"===typeof this.sort&&s.push(e(f,{props:{sort:this.sort,order:this.order,name:t.prop}})),n.push(e("div",{key:t.prop,style:t.headStyle||t.style,class:"ele-file-list-table-item-col",on:{click:()=>this.onSortChange(t.prop)}},s))})),i.push(e("div",{class:"ele-file-list-table-header"},[e("div",{class:"ele-file-list-table-item"},[e("div",{class:"ele-file-list-table-item-body"},[n])])])),i.push(e("div",{class:"ele-file-list-table-body"},null==(t=this.data)?void 0:t.map(((t,i)=>e(k,{key:i,props:{item:t,icons:this.icons,checkbox:this.checkbox,selection:this.selection,columns:this.tableCols},on:{"item-click":this.onItemClick,"item-check-change":this.onItemCheckChange,"context-menu":this.onItemContextMenu},scopedSlots:this.$scopedSlots}))))),e("div",{class:"ele-file-list-table"},i)}},_=[{icon:"https://cdn.eleadmin.com/20200609/ic_file_misc.png",type:"file"},{icon:"https://cdn.eleadmin.com/20200609/ic_file_folder.png",type:"dir"},{icon:"https://cdn.eleadmin.com/20200609/ic_file_code.png",types:[".java",".js",".css",".vue",".ts",".tsx",".scss",".less",".c",".cpp",".cs",".jsp",".php",".asp",".py",".go",".kt",".lua"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_htm.png",types:[".html",".htm"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_text.png",types:[".txt"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_pdf.png",types:[".pdf"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_word.png",types:[".doc",".docx"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_excel.png",types:[".xls",".xlsx"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_ppt.png",types:[".ppt",".pptx"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_visio.png",types:[".vsd"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_ps.png",types:[".psd"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_cad.png",types:[".dwg"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_flash.png",types:[".swf"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_music.png",types:[".mp3",".wav"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_video.png",types:[".mp4",".rmvb",".flv",".avi",".3gp"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_picture.png",types:[".png",".jpg",".jpeg",".gif",".bmp"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_fonts.png",types:[".ttf",".woff"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_bt.png",types:[".torrent"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_android.png",types:[".apk"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_exe.png",types:[".exe"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_ipa.png",types:[".ipa",".dmg"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_zip.png",types:[".zip",".rar",".7z"]}],y=[{icon:"https://cdn.eleadmin.com/20200609/ic_file_misc_sm.png",type:"file"},{icon:"https://cdn.eleadmin.com/20200609/ic_file_folder_sm.png",type:"dir"},{icon:"https://cdn.eleadmin.com/20200609/ic_file_code_sm.png",types:[".java",".js",".css",".vue",".ts",".tsx",".scss",".less",".c",".cpp",".cs",".jsp",".php",".asp",".py",".go",".kt",".lua"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_htm_sm.png",types:[".html",".htm"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_text_sm.png",types:[".txt"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_pdf_sm.png",types:[".pdf"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_word_sm.png",types:[".doc",".docx"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_excel_sm.png",types:[".xls",".xlsx"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_ppt_sm.png",types:[".ppt",".pptx"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_visio_sm.png",types:[".vsd"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_ps_sm.png",types:[".psd"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_cad_sm.png",types:[".dwg"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_flash_sm.png",types:[".swf"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_music_sm.png",types:[".mp3",".wav"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_video_sm.png",types:[".mp4",".rmvb",".flv",".avi",".3gp"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_picture_sm.png",types:[".png",".jpg",".jpeg",".gif",".bmp"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_fonts_sm.png",types:[".ttf",".woff"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_bt_sm.png",types:[".torrent"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_android_sm.png",types:[".apk"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_exe_sm.png",types:[".exe"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_ipa_sm.png",types:[".ipa",".dmg"]},{icon:"https://cdn.eleadmin.com/20200609/ic_file_zip_sm.png",types:[".zip",".rar",".7z"]}],x={data:Array,checked:Array,grid:{type:Boolean,default:!0},sort:{type:[String,Boolean],default:!1},order:String,icons:{type:Array,default(){return _}},smIcons:{type:Array,default(){return y}},columns:Array};function C(e,t,i,n,s,c,o,l){var a,r="function"===typeof e?e.options:e;if(t&&(r.render=t,r.staticRenderFns=i,r._compiled=!0),n&&(r.functional=!0),c&&(r._scopeId="data-v-"+c),o?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},r._ssrRegister=a):s&&(a=l?function(){s.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:s),a)if(r.functional){r._injectStyles=a;var d=r.render;r.render=function(e,t){return a.call(t),d(e,t)}}else{var m=r.beforeCreate;r.beforeCreate=m?[].concat(m,a):[a]}return{exports:e,options:r}}const b=".ele-file-list-body>.ele-file-list-item",w=".ele-file-list-table-body>.ele-file-list-table-item",S={name:"EleFileList",mixins:[c["default"],o.u],components:{FileGrid:r,FileTable:v},props:x,emits:["item-click","sort-change","update:checked","item-context-menu"],data(){return{selectorStyle:{left:"0px",top:"0px",width:"0px",height:"0px",display:"none"}}},computed:{checkbox(){return Array.isArray(this.checked)},allChecked(){var e,t,i;return!!(null==(e=this.data)?void 0:e.length)&&(null==(t=this.checked)?void 0:t.length)===(null==(i=this.data)?void 0:i.length)},indeterminate(){var e,t;return!(!(null==(e=this.checked)?void 0:e.length)||this.checked.length===(null==(t=this.data)?void 0:t.length))},totalText(){return this.t("ele.fileList.selectTips",{total:this.checked?this.checked.length:0})}},methods:{onCheckAllChange(){this.allChecked||null==this.data||!this.data.length?this.$emit("update:checked",[]):this.$emit("update:checked",this.data.slice())},onItemCheckChange(e){var t,i,n,s;const c=null!=(i=null==(t=this.checked)?void 0:t.indexOf(e))?i:-1;if(-1===c)this.$emit("update:checked",null==(n=this.checked)?void 0:n.concat([e]));else{const e=null==(s=this.checked)?void 0:s.slice(0,c).concat(this.checked.slice(c+1,this.checked.length));this.$emit("update:checked",e)}},onItemClick(e){this.authenticated?this.$emit("item-click",e):console.warn(o.c)},onSortChange(e){"string"===typeof this.sort&&this.$emit("sort-change",{sort:e,order:this.order&&e===this.sort?{asc:"desc",desc:""}[this.order]:"asc"})},onItemContextMenu(e){this.$emit("item-context-menu",e)},onMousedown(e){if(!this.checkbox)return;const t=e.clientX,i=e.clientY,n=e.currentTarget,s=n.getBoundingClientRect(),c=c=>{const o=Math.max(c.clientX,s.left),l=Math.max(c.clientY,s.top),a=Math.min(o,t)-s.left,r=Math.min(l,i)-s.top,d=Math.min(Math.abs(o-t),n.clientWidth-a),m=Math.min(Math.abs(l-i),n.clientHeight-r);Object.assign(this.selectorStyle,{left:a+"px",top:r+"px",width:d+"px",height:m+"px",display:"block"});const h=n.querySelectorAll(this.grid?b:w);d<6||m<6?Array.from(h).forEach((e=>{e.classList.remove("active")})):(e.stopPropagation(),e.preventDefault(),c.stopPropagation(),c.preventDefault(),Array.from(h).forEach((e=>{const t=e.offsetLeft+e.clientWidth,i=e.offsetTop+e.clientHeight;t>a&&i>r&&e.offsetLeft<a+d&&e.offsetTop<r+m?e.classList.add("active"):e.classList.remove("active")})))},o=()=>{this.selectorStyle.display="none";const e=[],t=n.querySelectorAll(this.grid?b:w);Array.from(t).forEach(((t,i)=>{t.classList.contains("active")&&(t.classList.remove("active"),this.data&&this.data[i]&&e.push(this.data[i]))})),e.length&&this.$emit("update:checked",e),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",o)}}};var $=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-file-list-group",on:{mousedown:e.onMousedown}},[e.grid?t("FileGrid",{attrs:{data:e.data,icons:e.icons,selection:e.checked,checkbox:e.checkbox,checked:e.allChecked,indeterminate:e.indeterminate,total:e.checked?e.checked.length:0,"total-text":e.totalText,"check-all-text":e.t("ele.fileList.selectAll")},on:{"check-all-change":e.onCheckAllChange,"item-click":e.onItemClick,"item-check-change":e.onItemCheckChange,"item-context-menu":e.onItemContextMenu},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(i){return[e._t(t,null,null,i||{})]}}}))],null,!0)}):t("FileTable",{attrs:{data:e.data,icons:e.icons,selection:e.checked,checkbox:e.checkbox,checked:e.allChecked,indeterminate:e.indeterminate,total:e.checked?e.checked.length:0,"total-text":e.totalText,"check-all-text":e.t("ele.fileList.selectAll"),"name-text":e.t("ele.fileList.fileName"),"size-text":e.t("ele.fileList.fileSize"),"time-text":e.t("ele.fileList.fileTimestamp"),sort:e.sort,order:e.order,columns:e.columns},on:{"check-all-change":e.onCheckAllChange,"item-click":e.onItemClick,"item-check-change":e.onItemCheckChange,"sort-change":e.onSortChange,"item-context-menu":e.onItemContextMenu},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(i){return[e._t(t,null,null,i||{})]}}}))],null,!0)}),t("div",{staticClass:"ele-file-list-selector",style:e.selectorStyle})],1)},I=[],A=C(S,$,I,!1,null,null,null,null);const T=A.exports;var E=i(21213),M=i(37789),j={components:{EleFileList:T,NameEdit:E["default"]},props:{parentId:Number,data:Array,sort:String,order:String,checked:Array,grid:Boolean},data(){return{icons:_.map((e=>({...e,icon:e.icon.replace("https://cdn.eleadmin.com/20200609/","/ele-file-list/")}))),smIcons:y.map((e=>({...e,icon:e.icon.replace("https://cdn.eleadmin.com/20200609/","/ele-file-list/")}))),previewImages:[],previewOption:{visible:!1,current:null},nameEditVisible:!1,nameEditData:null}},methods:{onSortChange(e){this.$emit("sort-change",e)},updateChecked(e){this.$emit("update:checked",e)},onItemClick(e){e.isDirectory?this.$emit("go-directory",e):this.isImageFile(e)?this.previewItemImage(e):this.updateChecked(this.checked.includes(e)?this.checked.filter((t=>t!==e)):[...this.checked,e])},onCtxMenuClick({key:e,item:t}){"open"===e?t.isDirectory||this.isImageFile(t)?this.onItemClick(t):window.open(t.url):"download"===e?"string"===typeof t.downloadUrl&&window.open(t.downloadUrl):"edit"===e?(this.nameEditData=t,this.nameEditVisible=!0):"remove"===e&&this.removeItem(t)},removeItem(e){this.$confirm("确定要删除此文件吗?","提示",{type:"warning"}).then((()=>{const t=this.$messageLoading("请求中..");(0,M.IX)(e.id).then((e=>{t.close(),this.$message.success(e),this.onDone()})).catch((e=>{t.close(),this.$message.error(e.message)}))})).catch((()=>{}))},onDone(){this.$emit("done")},isImageFile(e){return"string"===typeof e.contentType&&e.contentType.startsWith("image/")&&e.url},previewItemImage(e){this.previewImages=this.data.filter((e=>this.isImageFile(e))).map((e=>e.url)),this.previewOption.current=e.url,this.previewOption.visible=!0,this.$nextTick((()=>{this.$refs.previewRef&&(this.$refs.previewRef.showViewer=!0)}))}}},L=j,F=i(1001),D=(0,F.Z)(L,n,s,!1,null,null,null),O=D.exports},21213:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("ele-modal",{attrs:{width:"460px",visible:e.visible,"append-to-body":!0,"close-on-click-modal":!0,"custom-class":"ele-dialog-form",title:"重命名"},on:{"update:visible":e.updateVisible},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{on:{click:function(t){return e.updateVisible(!1)}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v(" 保存 ")])]},proxy:!0}])},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"102px"}},[t("el-form-item",{attrs:{label:"文件/夹名称:",prop:"name"}},[t("el-input",{attrs:{clearable:"",maxlength:20,placeholder:"请输入文件夹名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1)],1)},s=[],c=i(37789),o={props:{visible:Boolean,data:Object},data(){return{form:{name:""},rules:{name:[{required:!0,message:"请输入文件/夹名称",trigger:"blur"}]},loading:!1}},methods:{save(){this.$refs.form.validate((e=>{if(!e)return!1;this.loading=!0,(0,c.JU)({...this.form,id:this.data?.id}).then((e=>{this.loading=!1,this.$message.success(e),this.updateVisible(!1),this.$emit("done")})).catch((e=>{this.loading=!1,this.$message.error(e.message)}))}))},updateVisible(e){this.$emit("update:visible",e)}},watch:{visible(e){e?this.data&&(this.form.name=this.data.name):(this.$refs.form.clearValidate(),this.form.name="")}}},l=o,a=i(1001),r=(0,a.Z)(l,n,s,!1,null,null,null),d=r.exports},37789:function(e,t,i){i.d(t,{Cp:function(){return a},IX:function(){return l},JU:function(){return o},Ml:function(){return s},b1:function(){return c}});i(21703);var n=i(84471);async function s(e){const t=await n.Z.get("/system/user-file",{params:e});return 0===t.data.code&&t.data.data?t.data.data:Promise.reject(new Error(t.data.message))}async function c(e){const t=await n.Z.post("/system/user-file",e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function o(e){const t=await n.Z.put("/system/user-file",e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function l(e){const t=await n.Z["delete"]("/system/user-file/"+e);return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}async function a(e){const t=await n.Z["delete"]("/system/user-file/batch",{data:e});return 0===t.data.code?t.data.message:Promise.reject(new Error(t.data.message))}}}]);