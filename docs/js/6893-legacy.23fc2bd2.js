"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[6893],{56893:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l,n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ele-body"},[t("el-card",{attrs:{shadow:"never",header:"省市区级联选择"}},[t("div",{staticStyle:{"max-width":"280px"}},[t("regions-select",{staticClass:"ele-fluid",attrs:{placeholder:"请选择省市区"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1)]),t("el-card",{attrs:{shadow:"never",header:"省市级联选择"}},[t("div",{staticStyle:{"max-width":"280px"}},[t("regions-select",{staticClass:"ele-fluid",attrs:{placeholder:"请选择省市",type:"provinceCity"},model:{value:e.provinceCity,callback:function(t){e.provinceCity=t},expression:"provinceCity"}})],1)]),t("el-card",{attrs:{shadow:"never",header:"省选择"}},[t("div",{staticStyle:{"max-width":"280px"}},[t("regions-select",{staticClass:"ele-fluid",attrs:{placeholder:"请选择省",type:"province"},model:{value:e.province,callback:function(t){e.province=t},expression:"province"}})],1)]),t("el-card",{attrs:{shadow:"never",header:"可多选"}},[t("div",{staticStyle:{"max-width":"280px"}},[t("regions-select",{staticClass:"ele-fluid",attrs:{placeholder:"请选择省市区",props:{multiple:!0}},model:{value:e.citys,callback:function(t){e.citys=t},expression:"citys"}})],1)])],1)},i=[],r=function(){var e=this,t=e._self._c;return t("el-cascader",{attrs:{clearable:"",value:e.value,options:e.regionsData,placeholder:e.placeholder,"popper-class":"ele-pop-wrap-higher",props:e.props},on:{input:e.updateValue}})},c=[],o=(a(26699),a(21249),a(41539),a(84471)),s="/";function u(){return l||(l=new Promise((function(e,t){o.Z.get(s+"json/regions-data.json",{baseURL:""}).then((function(t){var a;e(null!==(a=t.data)&&void 0!==a?a:[])})).catch((function(e){t(e)}))}))),l}var p={name:"RegionsSelect",props:{value:Array,placeholder:String,options:Array,valueField:{type:String,validator:function(e){return!e||"label"===e}},type:{type:String,validator:function(e){return!e||["provinceCity","province"].includes(e)}},props:Object},data:function(){return{regionsData:[]}},methods:{updateValue:function(e){this.$emit("input",e)},formatData:function(e){return"label"===this.valueField?e.map((function(e){var t={label:e.label,value:e.label};return e.children&&(t.children=e.children.map((function(e){var t={label:e.label,value:e.label};return e.children&&(t.children=e.children.map((function(e){return{label:e.label,value:e.label}}))),t}))),t})):e},filterData:function(e){return"provinceCity"===this.type?this.formatData(e.map((function(e){var t={label:e.label,value:e.value};return e.children&&(t.children=e.children.map((function(e){return{label:e.label,value:e.value}}))),t}))):"province"===this.type?this.formatData(e.map((function(e){return{label:e.label,value:e.value}}))):this.formatData(e)}},watch:{options:{handler:function(e){var t=this;this.regionsData=this.filterData(null!==e&&void 0!==e?e:[]),e||u().then((function(e){t.regionsData=t.filterData(null!==e&&void 0!==e?e:[]),t.$emit("load-data-done",e)}))},immediate:!0}}},d=p,v=a(1001),h=(0,v.Z)(d,r,c,!1,null,null,null),f=h.exports,m={name:"ExtensionRegions",components:{RegionsSelect:f},data:function(){return{city:[],provinceCity:[],province:[],citys:[]}}},y=m,b=(0,v.Z)(y,n,i,!1,null,null,null),g=b.exports}}]);