"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[4768],{81618:function(n){(function(e,o){n.exports=o()})(0,(function(){function n(n){var a=[];return n.AMapUI&&a.push(e(n.AMapUI)),n.Loca&&a.push(o(n.Loca)),Promise.all(a)}function e(n){return new Promise((function(e,o){var s=[];if(n.plugins)for(var l=0;l<n.plugins.length;l+=1)-1==i.AMapUI.plugins.indexOf(n.plugins[l])&&s.push(n.plugins[l]);if(t.AMapUI===a.failed)o("前次请求 AMapUI 失败");else if(t.AMapUI===a.notload){t.AMapUI=a.loading,i.AMapUI.version=n.version||i.AMapUI.version,l=i.AMapUI.version;var r=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+l+"/main.js",d.onerror=function(n){t.AMapUI=a.failed,o("请求 AMapUI 失败")},d.onload=function(){if(t.AMapUI=a.loaded,s.length)window.AMapUI.loadUI(s,(function(){for(var n=0,o=s.length;n<o;n++){var a=s[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}for(e();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()}));else for(e();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()},r.appendChild(d)}else t.AMapUI===a.loaded?n.version&&n.version!==i.AMapUI.version?o("不允许多个版本 AMapUI 混用"):s.length?window.AMapUI.loadUI(s,(function(){for(var n=0,o=s.length;n<o;n++){var a=s[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}e()})):e():n.version&&n.version!==i.AMapUI.version?o("不允许多个版本 AMapUI 混用"):p.AMapUI.push((function(n){n?o(n):s.length?window.AMapUI.loadUI(s,(function(){for(var n=0,o=s.length;n<o;n++){var a=s[n].split("/").slice(-1)[0];window.AMapUI[a]=arguments[n]}e()})):e()}))}))}function o(n){return new Promise((function(e,o){if(t.Loca===a.failed)o("前次请求 Loca 失败");else if(t.Loca===a.notload){t.Loca=a.loading,i.Loca.version=n.version||i.Loca.version;var s=i.Loca.version,l=i.AMap.version.startsWith("2"),r=s.startsWith("2");if(l&&!r||!l&&r)o("JSAPI 与 Loca 版本不对应！！");else{l=i.key,r=document.body||document.head;var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+s+"&key="+l,d.onerror=function(n){t.Loca=a.failed,o("请求 AMapUI 失败")},d.onload=function(){for(t.Loca=a.loaded,e();p.Loca.length;)p.Loca.splice(0,1)[0]()},r.appendChild(d)}}else t.Loca===a.loaded?n.version&&n.version!==i.Loca.version?o("不允许多个版本 Loca 混用"):e():n.version&&n.version!==i.Loca.version?o("不允许多个版本 Loca 混用"):p.Loca.push((function(n){n?o(n):o()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a;(function(n){n.notload="notload",n.loading="loading",n.loaded="loaded",n.failed="failed"})(a||(a={}));var i={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]},s=[],l=function(n){"function"==typeof n&&(t.AMap===a.loaded?n(window.AMap):s.push(n))};return{load:function(e){return new Promise((function(o,p){if(t.AMap==a.failed)p("");else if(t.AMap==a.notload){var r=e.key,d=e.version,c=e.plugins;r?(window.AMap&&"lbs.amap.com"!==location.host&&p("禁止多种API加载方式混用"),i.key=r,i.AMap.version=d||i.AMap.version,i.AMap.plugins=c||i.AMap.plugins,t.AMap=a.loading,d=document.body||document.head,window.___onAPILoaded=function(i){if(delete window.___onAPILoaded,i)t.AMap=a.failed,p(i);else for(t.AMap=a.loaded,n(e).then((function(){o(window.AMap)}))["catch"](p);s.length;)s.splice(0,1)[0]()},c=document.createElement("script"),c.type="text/javascript",c.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+i.AMap.version+"&key="+r+"&plugin="+i.AMap.plugins.join(","),c.onerror=function(n){t.AMap=a.failed,p(n)},d.appendChild(c)):p("请填写key")}else if(t.AMap==a.loaded)if(e.key&&e.key!==i.key)p("多个不一致的 key");else if(e.version&&e.version!==i.AMap.version)p("不允许多个版本 JSAPI 混用");else{if(r=[],e.plugins)for(d=0;d<e.plugins.length;d+=1)-1==i.AMap.plugins.indexOf(e.plugins[d])&&r.push(e.plugins[d]);r.length?window.AMap.plugin(r,(function(){n(e).then((function(){o(window.AMap)}))["catch"](p)})):n(e).then((function(){o(window.AMap)}))["catch"](p)}else if(e.key&&e.key!==i.key)p("多个不一致的 key");else if(e.version&&e.version!==i.AMap.version)p("不允许多个版本 JSAPI 混用");else{var u=[];if(e.plugins)for(d=0;d<e.plugins.length;d+=1)-1==i.AMap.plugins.indexOf(e.plugins[d])&&u.push(e.plugins[d]);l((function(){u.length?window.AMap.plugin(u,(function(){n(e).then((function(){o(window.AMap)}))["catch"](p)})):n(e).then((function(){o(window.AMap)}))["catch"](p)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,i={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]}}}}))},74768:function(n,e,o){o.r(e),o.d(e,{default:function(){return u}});var a=function(){var n=this,e=n._self._c;return e("el-card",{attrs:{shadow:"never",header:"官网底部地图"}},[e("div",{ref:"locationMap",staticStyle:{"max-width":"800px",height:"300px"}})])},i=[],t=o(81618),p=o.n(t),s=o(18816),l={data:function(){return{mapInsLocation:null}},computed:{darkMode:function(){var n,e,o;return null===(n=this.$store)||void 0===n||null===(e=n.state)||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.darkMode}},mounted:function(){this.renderLocationMap()},methods:{renderLocationMap:function(){var n=this;p().load({key:s.K4,version:"2.0",plugins:["AMap.InfoWindow","AMap.Marker"]}).then((function(e){var o={zoom:13,center:[114.346084,30.516215]};n.darkMode&&(o.mapStyle="amap://styles/dark"),n.mapInsLocation=new e.Map(n.$refs.locationMap,o);var a=new e.InfoWindow({content:'\n            <div style="color: #333;">\n              <div style="padding: 5px;font-size: 16px;">武汉易云智科技有限公司</div>\n              <div style="padding: 0 5px;">地址: 湖北省武汉市洪山区雄楚大道222号</div>\n              <div style="padding: 0 5px;">电话: 020-123456789</div>\n            </div>\n            <a\n              style="padding: 8px 5px 0;text-decoration: none;display: inline-block;"\n              href="//uri.amap.com/marker?position=114.346084,30.511215&name=武汉易云智科技有限公司"\n              class="ele-text-primary"\n              target="_blank"\n            >到这里去→</a>\n          '});a.open(n.mapInsLocation,[114.346084,30.511215]);var i=new e.Icon({size:new e.Size(25,34),image:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",imageSize:new e.Size(25,34)}),t=new e.Marker({icon:i,position:[114.346084,30.511215],offset:new e.Pixel(-12,-28)});t.setMap(n.mapInsLocation),t.on("click",(function(){a.open(n.mapInsLocation)}))})).catch((function(n){console.error(n)}))}},watch:{darkMode:function(n){this.mapInsLocation&&(n?this.mapInsLocation.setMapStyle("amap://styles/dark"):this.mapInsLocation.setMapStyle("amap://styles/normal"))}},unmounted:function(){this.mapInsLocation&&this.mapInsLocation.destroy()}},r=l,d=o(1001),c=(0,d.Z)(r,a,i,!1,null,null,null),u=c.exports}}]);