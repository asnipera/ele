"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[9584],{9584:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("el-card",{attrs:{shadow:"never"}},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[t("edit-form",{attrs:{data:e.user}})],1)])],1)},i=[],r=a(41306),n=a(59477),d={name:"ListBasicEdit",components:{EditForm:r["default"]},data(){return{loading:!0,user:void 0}},created(){this.query()},methods:{query(){const{query:e}=this.$route;e.id&&(0,n.PR)(Number(e.id)).then((e=>{this.loading=!1,this.user=e})).catch((e=>{this.$message.error(e.message)}))}}},l=d,u=a(1001),o=(0,u.Z)(l,s,i,!1,null,null,null),c=o.exports}}]);