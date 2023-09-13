"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[3973],{63973:function(e,t,a){a.r(t),a.d(t,{default:function(){return re}});var n=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{shadow:"never",header:"浏览器分布","body-style":"padding: 0 10px;"}},[t("v-chart",{ref:"browserChart",staticStyle:{height:"240px"},attrs:{option:e.browserChartOption}})],1)},r=[],i=a(68023),o=a(91416),l=a(31891),s=a(85669),g=a(76172),c=a(33051),u=2*Math.PI,h=Math.PI/180;function d(e,t){return g.ME(e.getBoxLayoutParams(),{width:t.getWidth(),height:t.getHeight()})}function f(e,t){var a=d(e,t),n=e.get("center"),r=e.get("radius");c.kJ(r)||(r=[0,r]),c.kJ(n)||(n=[n,n]);var i=(0,s.GM)(a.width,t.getWidth()),o=(0,s.GM)(a.height,t.getHeight()),l=Math.min(i,o),g=(0,s.GM)(n[0],i)+a.x,u=(0,s.GM)(n[1],o)+a.y,h=(0,s.GM)(r[0],l/2),f=(0,s.GM)(r[1],l/2);return{cx:g,cy:u,r0:h,r:f}}function p(e,t,a){t.eachSeriesByType(e,(function(e){var t=e.getData(),n=t.mapDimension("value"),r=d(e,a),i=f(e,a),o=i.cx,l=i.cy,g=i.r,c=i.r0,p=-e.get("startAngle")*h,y=e.get("minAngle")*h,v=0;t.each(n,(function(e){!isNaN(e)&&v++}));var m=t.getSum(n),b=Math.PI/(m||v)*2,x=e.get("clockwise"),M=e.get("roseType"),A=e.get("stillShowZeroSum"),w=t.getDataExtent(n);w[0]=0;var S=u,L=0,T=p,D=x?1:-1;if(t.setLayout({viewRect:r,r:g}),t.each(n,(function(e,a){var n;if(isNaN(e))t.setItemLayout(a,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:x,cx:o,cy:l,r0:c,r:M?NaN:g});else{n="area"!==M?0===m&&A?b:e*b:u/v,n<y?(n=y,S-=y):L+=e;var r=T+D*n;t.setItemLayout(a,{angle:n,startAngle:T,endAngle:r,clockwise:x,cx:o,cy:l,r0:c,r:M?(0,s.NU)(e,w,[c,g]):g}),T=r}})),S<u&&v)if(S<=.001){var C=u/v;t.each(n,(function(e,a){if(!isNaN(e)){var n=t.getItemLayout(a);n.angle=C,n.startAngle=p+D*a*C,n.endAngle=p+D*(a+1)*C}}))}else b=S/L,T=p,t.each(n,(function(e,a){if(!isNaN(e)){var n=t.getItemLayout(a),r=n.angle===y?y:e*b;n.startAngle=T,n.endAngle=T+D*r,T+=D*r}}))}))}function y(e){return{seriesType:e,reset:function(e,t){var a=t.findComponents({mainType:"legend"});if(a&&a.length){var n=e.getData();n.filterSelf((function(e){for(var t=n.getName(e),r=0;r<a.length;r++)if(!a[r].isSelected(t))return!1;return!0}))}}}}var v=a(70655),m=a(96498),b=a(29266),x=a(62514),M=a(97782),A=a(26357),w=a(75797),S=a(41610),L=a(87377),T=a(54162),D=Math.PI/180;function C(e,t,a,n,r,i,o,l,s,g){if(!(e.length<2)){for(var c=e.length,u=0;u<c;u++)if("outer"===e[u].position&&"labelLine"===e[u].labelAlignTo){var h=e[u].label.x-g;e[u].linePoints[1][0]+=h,e[u].label.x=g}(0,T.GI)(e,s,s+o)&&f(e)}function d(e){for(var i=e.rB,o=i*i,l=0;l<e.list.length;l++){var s=e.list[l],g=Math.abs(s.label.y-a),c=n+s.len,u=c*c,h=Math.sqrt((1-Math.abs(g*g/o))*u),d=t+(h+s.len2)*r,f=d-s.label.x,p=s.targetTextWidth-f*r;I(s,p,!0),s.label.x=d}}function f(e){for(var i={list:[],maxY:0},o={list:[],maxY:0},l=0;l<e.length;l++)if("none"===e[l].labelAlignTo){var s=e[l],g=s.label.y>a?o:i,c=Math.abs(s.label.y-a);if(c>=g.maxY){var u=s.label.x-t-s.len2*r,h=n+s.len,f=Math.abs(u)<h?Math.sqrt(c*c/(1-u*u/h/h)):h;g.rB=f,g.maxY=c}g.list.push(s)}d(i),d(o)}}function N(e,t,a,n,r,i,o,l){for(var s=[],g=[],c=Number.MAX_VALUE,u=-Number.MAX_VALUE,h=0;h<e.length;h++){var d=e[h].label;Z(e[h])||(d.x<t?(c=Math.min(c,d.x),s.push(e[h])):(u=Math.max(u,d.x),g.push(e[h])))}for(h=0;h<e.length;h++){var f=e[h];if(!Z(f)&&f.linePoints){if(null!=f.labelStyleWidth)continue;d=f.label;var p=f.linePoints,y=void 0;y="edge"===f.labelAlignTo?d.x<t?p[2][0]-f.labelDistance-o-f.edgeDistance:o+r-f.edgeDistance-p[2][0]-f.labelDistance:"labelLine"===f.labelAlignTo?d.x<t?c-o-f.bleedMargin:o+r-u-f.bleedMargin:d.x<t?d.x-o-f.bleedMargin:o+r-d.x-f.bleedMargin,f.targetTextWidth=y,I(f,y)}}C(g,t,a,n,1,r,i,o,l,u),C(s,t,a,n,-1,r,i,o,l,c);for(h=0;h<e.length;h++){f=e[h];if(!Z(f)&&f.linePoints){d=f.label,p=f.linePoints;var v="edge"===f.labelAlignTo,m=d.style.padding,b=m?m[1]+m[3]:0,x=d.style.backgroundColor?0:b,M=f.rect.width+x,A=p[1][0]-p[2][0];v?d.x<t?p[2][0]=o+f.edgeDistance+M+f.labelDistance:p[2][0]=o+r-f.edgeDistance-M-f.labelDistance:(d.x<t?p[2][0]=d.x+f.labelDistance:p[2][0]=d.x-f.labelDistance,p[1][0]=p[2][0]+A),p[1][1]=p[2][1]=d.y}}}function I(e,t,a){if(void 0===a&&(a=!1),null==e.labelStyleWidth){var n=e.label,r=n.style,i=e.rect,o=r.backgroundColor,l=r.padding,s=l?l[1]+l[3]:0,g=r.overflow,c=i.width+(o?0:s);if(t<c||a){var u=i.height;if(g&&g.match("break")){n.setStyle("backgroundColor",null),n.setStyle("width",t-s);var h=n.getBoundingRect();n.setStyle("width",Math.ceil(h.width)),n.setStyle("backgroundColor",o)}else{var d=t-s,f=t<c?d:a?d>e.unconstrainedWidth?null:d:null;n.setStyle("width",f)}var p=n.getBoundingRect();i.width=p.width;var y=(n.style.margin||0)+2.1;i.height=p.height+y,i.y-=(i.height-u)/2}}}function Z(e){return"center"===e.position}function k(e){var t,a,n=e.getData(),r=[],i=!1,o=(e.get("minShowLabelAngle")||0)*D,l=n.getLayout("viewRect"),g=n.getLayout("r"),u=l.width,h=l.x,d=l.y,f=l.height;function p(e){e.ignore=!0}function y(e){if(!e.ignore)return!0;for(var t in e.states)if(!1===e.states[t].ignore)return!0;return!1}n.each((function(e){var l=n.getItemGraphicEl(e),d=l.shape,f=l.getTextContent(),v=l.getTextGuideLine(),m=n.getItemModel(e),b=m.getModel("label"),x=b.get("position")||m.get(["emphasis","label","position"]),M=b.get("distanceToLabelLine"),A=b.get("alignTo"),w=(0,s.GM)(b.get("edgeDistance"),u),L=b.get("bleedMargin"),T=m.getModel("labelLine"),D=T.get("length");D=(0,s.GM)(D,u);var C=T.get("length2");if(C=(0,s.GM)(C,u),Math.abs(d.endAngle-d.startAngle)<o)return(0,c.S6)(f.states,p),void(f.ignore=!0);if(y(f)){var N,I,Z,k,P=(d.startAngle+d.endAngle)/2,G=Math.cos(P),_=Math.sin(P);t=d.cx,a=d.cy;var W="inside"===x||"inner"===x;if("center"===x)N=d.cx,I=d.cy,k="center";else{var O=(W?(d.r+d.r0)/2*G:d.r*G)+t,E=(W?(d.r+d.r0)/2*_:d.r*_)+a;if(N=O+3*G,I=E+3*_,!W){var R=O+G*(D+g-d.r),q=E+_*(D+g-d.r),B=R+(G<0?-1:1)*C,V=q;N="edge"===A?G<0?h+w:h+u-w:B+(G<0?-M:M),I=V,Z=[[O,E],[R,q],[B,V]]}k=W?"center":"edge"===A?G>0?"right":"left":G>0?"left":"right"}var U=Math.PI,z=0,K=b.get("rotate");if((0,c.hj)(K))z=K*(U/180);else if("center"===x)z=0;else if("radial"===K||!0===K){var Y=G<0?-P+U:-P;z=Y}else if("tangential"===K&&"outside"!==x&&"outer"!==x){var J=Math.atan2(G,_);J<0&&(J=2*U+J);var X=_>0;X&&(J=U+J),z=J-U}if(i=!!z,f.x=N,f.y=I,f.rotation=z,f.setStyle({verticalAlign:"middle"}),W){f.setStyle({align:k});var H=f.states.select;H&&(H.x+=f.x,H.y+=f.y)}else{var $=f.getBoundingRect().clone();$.applyTransform(f.getComputedTransform());var F=(f.style.margin||0)+2.1;$.y-=F/2,$.height+=F,r.push({label:f,labelLine:v,position:x,len:D,len2:C,minTurnAngle:T.get("minTurnAngle"),maxSurfaceAngle:T.get("maxSurfaceAngle"),surfaceNormal:new S.Z(G,_),linePoints:Z,textAlign:k,labelDistance:M,labelAlignTo:A,edgeDistance:w,bleedMargin:L,rect:$,unconstrainedWidth:$.width,labelStyleWidth:f.style.width})}l.setTextConfig({inside:W})}})),!i&&e.get("avoidLabelOverlap")&&N(r,t,a,g,u,f,h,d);for(var v=0;v<r.length;v++){var m=r[v],b=m.label,x=m.labelLine,M=isNaN(b.x)||isNaN(b.y);if(b){b.setStyle({align:m.textAlign}),M&&((0,c.S6)(b.states,p),b.ignore=!0);var A=b.states.select;A&&(A.x+=b.x,A.y+=b.y)}if(x){var w=m.linePoints;M||!w?((0,c.S6)(x.states,p),x.ignore=!0):((0,L.qK)(w,m.minTurnAngle),(0,L._A)(w,m.surfaceNormal,m.maxSurfaceAngle),x.setShape({points:w}),b.__hostTarget.textGuideLineConfig={anchor:new S.Z(w[0][0],w[0][1])})}}}var P=a(36006),G=a(80423);function _(e,t,a){var n=e.get("borderRadius");if(null==n)return a?{cornerRadius:0}:null;(0,c.kJ)(n)||(n=[n,n,n,n]);var r=Math.abs(t.r||0-t.r0||0);return{cornerRadius:(0,c.UI)(n,(function(e){return(0,G.GM)(e,r)}))}}var W=function(e){function t(t,a,n){var r=e.call(this)||this;r.z2=2;var i=new m.ZP;return r.setTextContent(i),r.updateData(t,a,n,!0),r}return(0,v.ZT)(t,e),t.prototype.updateData=function(e,t,a,n){var r=this,i=e.hostModel,o=e.getItemModel(t),l=o.getModel("emphasis"),s=e.getItemLayout(t),g=(0,c.l7)(_(o.getModel("itemStyle"),s,!0),s);if(isNaN(g.startAngle))r.setShape(g);else{if(n){r.setShape(g);var u=i.getShallow("animationType");i.ecModel.ssr?(b.KZ(r,{scaleX:0,scaleY:0},i,{dataIndex:t,isFrom:!0}),r.originX=g.cx,r.originY=g.cy):"scale"===u?(r.shape.r=s.r0,b.KZ(r,{shape:{r:s.r}},i,t)):null!=a?(r.setShape({startAngle:a,endAngle:a}),b.KZ(r,{shape:{startAngle:s.startAngle,endAngle:s.endAngle}},i,t)):(r.shape.endAngle=s.startAngle,b.D(r,{shape:{endAngle:s.endAngle}},i,t))}else(0,b.Zi)(r),b.D(r,{shape:g},i,t);r.useStyle(e.getItemVisual(t,"style")),(0,A.WO)(r,o);var h=(s.startAngle+s.endAngle)/2,d=i.get("selectedOffset"),f=Math.cos(h)*d,p=Math.sin(h)*d,y=o.getShallow("cursor");y&&r.attr("cursor",y),this._updateLabel(i,e,t),r.ensureState("emphasis").shape=(0,c.l7)({r:s.r+(l.get("scale")&&l.get("scaleSize")||0)},_(l.getModel("itemStyle"),s)),(0,c.l7)(r.ensureState("select"),{x:f,y:p,shape:_(o.getModel(["select","itemStyle"]),s)}),(0,c.l7)(r.ensureState("blur"),{shape:_(o.getModel(["blur","itemStyle"]),s)});var v=r.getTextGuideLine(),m=r.getTextContent();v&&(0,c.l7)(v.ensureState("select"),{x:f,y:p}),(0,c.l7)(m.ensureState("select"),{x:f,y:p}),(0,A.k5)(this,l.get("focus"),l.get("blurScope"),l.get("disabled"))}},t.prototype._updateLabel=function(e,t,a){var n=this,r=t.getItemModel(a),i=r.getModel("labelLine"),o=t.getItemVisual(a,"style"),l=o&&o.fill,s=o&&o.opacity;(0,P.ni)(n,(0,P.k3)(r),{labelFetcher:t.hostModel,labelDataIndex:a,inheritColor:l,defaultOpacity:s,defaultText:e.getFormattedLabel(a,"normal")||t.getName(a)});var g=n.getTextContent();n.setTextConfig({position:null,rotation:null}),g.attr({z2:10});var u=e.get(["label","position"]);if("outside"!==u&&"outer"!==u)n.removeTextGuideLine();else{var h=this.getTextGuideLine();h||(h=new x.Z,this.setTextGuideLine(h)),(0,L.Iu)(this,(0,L.$x)(r),{stroke:l,opacity:(0,c.R1)(i.get(["lineStyle","opacity"]),s,1)})}},t}(M.C),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ignoreLabelLineUpdate=!0,t}return(0,v.ZT)(t,e),t.prototype.render=function(e,t,a,n){var r,i=e.getData(),o=this._data,l=this.group;if(!o&&i.count()>0){for(var s=i.getItemLayout(0),g=1;isNaN(s&&s.startAngle)&&g<i.count();++g)s=i.getItemLayout(g);s&&(r=s.startAngle)}if(this._emptyCircleSector&&l.remove(this._emptyCircleSector),0===i.count()&&e.get("showEmptyCircle")){var c=new M.C({shape:f(e,a)});c.useStyle(e.getModel("emptyCircleStyle").getItemStyle()),this._emptyCircleSector=c,l.add(c)}i.diff(o).add((function(e){var t=new W(i,e,r);i.setItemGraphicEl(e,t),l.add(t)})).update((function(e,t){var a=o.getItemGraphicEl(t);a.updateData(i,e,r),a.off("click"),l.add(a),i.setItemGraphicEl(e,a)})).remove((function(t){var a=o.getItemGraphicEl(t);b.XD(a,e,t)})).execute(),k(e),"expansion"!==e.get("animationTypeUpdate")&&(this._data=i)},t.prototype.dispose=function(){},t.prototype.containPoint=function(e,t){var a=t.getData(),n=a.getItemLayout(0);if(n){var r=e[0]-n.cx,i=e[1]-n.cy,o=Math.sqrt(r*r+i*i);return o<=n.r&&o>=n.r0}},t.type="pie",t}(w.Z),E=O,R=a(30090),q=a(32234),B=a(61772),V=function(){function e(e,t){this._getDataWithEncodedVisual=e,this._getRawData=t}return e.prototype.getAllNames=function(){var e=this._getRawData();return e.mapArray(e.getName)},e.prototype.containName=function(e){var t=this._getRawData();return t.indexOfName(e)>=0},e.prototype.indexOfName=function(e){var t=this._getDataWithEncodedVisual();return t.indexOfName(e)},e.prototype.getItemVisual=function(e,t){var a=this._getDataWithEncodedVisual();return a.getItemVisual(e,t)},e}(),U=V,z=a(74717),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,v.ZT)(t,e),t.prototype.init=function(t){e.prototype.init.apply(this,arguments),this.legendVisualProvider=new U(c.ak(this.getData,this),c.ak(this.getRawData,this)),this._defaultLabelLine(t)},t.prototype.mergeOption=function(){e.prototype.mergeOption.apply(this,arguments)},t.prototype.getInitialData=function(){return(0,R.Z)(this,{coordDimensions:["value"],encodeDefaulter:c.WA(B.Ss,this)})},t.prototype.getDataParams=function(t){var a=this.getData(),n=e.prototype.getDataParams.call(this,t),r=[];return a.each(a.mapDimension("value"),(function(e){r.push(e)})),n.percent=(0,s.eJ)(r,t,a.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},t.prototype._defaultLabelLine=function(e){q.Cc(e,"labelLine",["show"]);var t=e.labelLine,a=e.emphasis.labelLine;t.show=t.show&&e.label.show,a.show=a.show&&e.emphasis.label.show},t.type="series.pie",t.defaultOption={z:2,legendHoverLink:!0,colorBy:"data",center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,minShowLabelAngle:0,selectedOffset:10,percentPrecision:2,stillShowZeroSum:!0,left:0,top:0,right:0,bottom:0,width:null,height:null,label:{rotate:0,show:!0,overflow:"truncate",position:"outer",alignTo:"none",edgeDistance:"25%",bleedMargin:10,distanceToLabelLine:5},labelLine:{show:!0,length:15,length2:15,smooth:!1,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1,borderJoin:"round"},showEmptyCircle:!0,emptyCircleStyle:{color:"lightgray",opacity:1},labelLayout:{hideOverlap:!0},emphasis:{scale:!0,scaleSize:5},avoidLabelOverlap:!0,animationType:"expansion",animationDuration:1e3,animationTypeUpdate:"transition",animationEasingUpdate:"cubicInOut",animationDurationUpdate:500,animationEasing:"cubicInOut"},t}(z.Z),Y=K;function J(e){return{seriesType:e,reset:function(e,t){var a=e.getData();a.filterSelf((function(e){var t=a.mapDimension("value"),n=a.get(t,e);return!((0,c.hj)(n)&&!isNaN(n)&&n<0)}))}}}function X(e){e.registerChartView(E),e.registerSeriesModel(Y),(0,l.y)("pie",e.registerAction),e.registerLayout((0,c.WA)(p,"pie")),e.registerProcessor(y("pie")),e.registerProcessor(J("pie"))}var H=a(82739),$=a(54488),F=a(59634),j=a(91689),Q=a(12544);(0,i.D)([o.N,X,H.N,$.N]);var ee={components:{VChart:F.ZP},mixins:[(0,Q.i)(["browserChart"])],data(){return{browserChartOption:{}}},created(){this.getBrowserCountData()},methods:{getBrowserCountData(){(0,j.iz)().then((e=>{this.browserChartOption={tooltip:{trigger:"item",confine:!0,borderWidth:1},legend:{bottom:5,itemWidth:10,itemHeight:10,icon:"circle",data:e.map((e=>e.name))},series:[{type:"pie",radius:["45%","70%"],center:["50%","43%"],label:{show:!1},data:e}]}})).catch((e=>{this.$message.error(e.message)}))}}},te=ee,ae=a(1001),ne=(0,ae.Z)(te,n,r,!1,null,null,null),re=ne.exports},87377:function(e,t,a){a.d(t,{$x:function(){return W},Iu:function(){return _},_A:function(){return k},d:function(){return C},qK:function(){return Z}});var n=a(41610),r=a(42932),i=a(62514),o=a(97442),l=a(3266),s=a(18554),g=a(33051),c=a(32892),u=a(45280),h=a(26357),d=2*Math.PI,f=o.Z.CMD,p=["top","right","bottom","left"];function y(e,t,a,n,r){var i=a.width,o=a.height;switch(e){case"top":n.set(a.x+i/2,a.y-t),r.set(0,-1);break;case"bottom":n.set(a.x+i/2,a.y+o+t),r.set(0,1);break;case"left":n.set(a.x-t,a.y+o/2),r.set(-1,0);break;case"right":n.set(a.x+i+t,a.y+o/2),r.set(1,0);break}}function v(e,t,a,n,r,i,o,s,g){o-=e,s-=t;var c=Math.sqrt(o*o+s*s);o/=c,s/=c;var u=o*a+e,h=s*a+t;if(Math.abs(n-r)%d<1e-4)return g[0]=u,g[1]=h,c-a;if(i){var f=n;n=(0,l.m)(r),r=(0,l.m)(f)}else n=(0,l.m)(n),r=(0,l.m)(r);n>r&&(r+=d);var p=Math.atan2(s,o);if(p<0&&(p+=d),p>=n&&p<=r||p+d>=n&&p+d<=r)return g[0]=u,g[1]=h,c-a;var y=a*Math.cos(n)+e,v=a*Math.sin(n)+t,m=a*Math.cos(r)+e,b=a*Math.sin(r)+t,x=(y-o)*(y-o)+(v-s)*(v-s),M=(m-o)*(m-o)+(b-s)*(b-s);return x<M?(g[0]=y,g[1]=v,Math.sqrt(x)):(g[0]=m,g[1]=b,Math.sqrt(M))}function m(e,t,a,n,r,i,o,l){var s=r-e,g=i-t,c=a-e,u=n-t,h=Math.sqrt(c*c+u*u);c/=h,u/=h;var d=s*c+g*u,f=d/h;l&&(f=Math.min(Math.max(f,0),1)),f*=h;var p=o[0]=e+f*c,y=o[1]=t+f*u;return Math.sqrt((p-r)*(p-r)+(y-i)*(y-i))}function b(e,t,a,n,r,i,o){a<0&&(e+=a,a=-a),n<0&&(t+=n,n=-n);var l=e+a,s=t+n,g=o[0]=Math.min(Math.max(r,e),l),c=o[1]=Math.min(Math.max(i,t),s);return Math.sqrt((g-r)*(g-r)+(c-i)*(c-i))}var x=[];function M(e,t,a){var n=b(t.x,t.y,t.width,t.height,e.x,e.y,x);return a.set(x[0],x[1]),n}function A(e,t,a){for(var n,r,i=0,o=0,l=0,g=0,c=1/0,u=t.data,h=e.x,d=e.y,p=0;p<u.length;){var y=u[p++];1===p&&(i=u[p],o=u[p+1],l=i,g=o);var M=c;switch(y){case f.M:l=u[p++],g=u[p++],i=l,o=g;break;case f.L:M=m(i,o,u[p],u[p+1],h,d,x,!0),i=u[p++],o=u[p++];break;case f.C:M=(0,s.t1)(i,o,u[p++],u[p++],u[p++],u[p++],u[p],u[p+1],h,d,x),i=u[p++],o=u[p++];break;case f.Q:M=(0,s.Wr)(i,o,u[p++],u[p++],u[p],u[p+1],h,d,x),i=u[p++],o=u[p++];break;case f.A:var A=u[p++],w=u[p++],S=u[p++],L=u[p++],T=u[p++],D=u[p++];p+=1;var C=!!(1-u[p++]);n=Math.cos(T)*S+A,r=Math.sin(T)*L+w,p<=1&&(l=n,g=r);var N=(h-A)*L/S+A;M=v(A,w,L,T,T+D,C,N,d,x),i=Math.cos(T+D)*S+A,o=Math.sin(T+D)*L+w;break;case f.R:l=i=u[p++],g=o=u[p++];var I=u[p++],Z=u[p++];M=b(l,g,I,Z,h,d,x);break;case f.Z:M=m(i,o,l,g,h,d,x,!0),i=l,o=g;break}M<c&&(c=M,a.set(x[0],x[1]))}return c}var w=new n.Z,S=new n.Z,L=new n.Z,T=new n.Z,D=new n.Z;function C(e,t){if(e){var a=e.getTextGuideLine(),i=e.getTextContent();if(i&&a){var o=e.textGuideLineConfig||{},l=[[0,0],[0,0],[0,0]],s=o.candidates||p,g=i.getBoundingRect().clone();g.applyTransform(i.getComputedTransform());var u=1/0,h=o.anchor,d=e.getComputedTransform(),f=d&&(0,c.U_)([],d),v=t.get("length2")||0;h&&L.copy(h);for(var m=0;m<s.length;m++){var b=s[m];y(b,0,g,w,T),n.Z.scaleAndAdd(S,w,T,v),S.transform(f);var x=e.getBoundingRect(),D=h?h.distance(S):e instanceof r.ZP?A(S,e.path,L):M(S,x,L);D<u&&(u=D,S.transform(d),L.transform(d),L.toArray(l[0]),S.toArray(l[1]),w.toArray(l[2]))}Z(l,t.get("minTurnAngle")),a.setShape({points:l})}}}var N=[],I=new n.Z;function Z(e,t){if(t<=180&&t>0){t=t/180*Math.PI,w.fromArray(e[0]),S.fromArray(e[1]),L.fromArray(e[2]),n.Z.sub(T,w,S),n.Z.sub(D,L,S);var a=T.len(),r=D.len();if(!(a<.001||r<.001)){T.scale(1/a),D.scale(1/r);var i=T.dot(D),o=Math.cos(t);if(o<i){var l=m(S.x,S.y,L.x,L.y,w.x,w.y,N,!1);I.fromArray(N),I.scaleAndAdd(D,l/Math.tan(Math.PI-t));var s=L.x!==S.x?(I.x-S.x)/(L.x-S.x):(I.y-S.y)/(L.y-S.y);if(isNaN(s))return;s<0?n.Z.copy(I,S):s>1&&n.Z.copy(I,L),I.toArray(e[1])}}}}function k(e,t,a){if(a<=180&&a>0){a=a/180*Math.PI,w.fromArray(e[0]),S.fromArray(e[1]),L.fromArray(e[2]),n.Z.sub(T,S,w),n.Z.sub(D,L,S);var r=T.len(),i=D.len();if(!(r<.001||i<.001)){T.scale(1/r),D.scale(1/i);var o=T.dot(t),l=Math.cos(a);if(o<l){var s=m(S.x,S.y,L.x,L.y,w.x,w.y,N,!1);I.fromArray(N);var g=Math.PI/2,c=Math.acos(D.dot(t)),u=g+c-a;if(u>=g)n.Z.copy(I,L);else{I.scaleAndAdd(D,s/Math.tan(Math.PI/2-u));var h=L.x!==S.x?(I.x-S.x)/(L.x-S.x):(I.y-S.y)/(L.y-S.y);if(isNaN(h))return;h<0?n.Z.copy(I,S):h>1&&n.Z.copy(I,L)}I.toArray(e[1])}}}}function P(e,t,a,n){var r="normal"===a,i=r?e:e.ensureState(a);i.ignore=t;var o=n.get("smooth");o&&!0===o&&(o=.3),i.shape=i.shape||{},o>0&&(i.shape.smooth=o);var l=n.getModel("lineStyle").getLineStyle();r?e.useStyle(l):i.style=l}function G(e,t){var a=t.smooth,n=t.points;if(n)if(e.moveTo(n[0][0],n[0][1]),a>0&&n.length>=3){var r=u.TK(n[0],n[1]),i=u.TK(n[1],n[2]);if(!r||!i)return e.lineTo(n[1][0],n[1][1]),void e.lineTo(n[2][0],n[2][1]);var o=Math.min(r,i)*a,l=u.t7([],n[1],n[0],o/r),s=u.t7([],n[1],n[2],o/i),g=u.t7([],l,s,.5);e.bezierCurveTo(l[0],l[1],l[0],l[1],g[0],g[1]),e.bezierCurveTo(s[0],s[1],s[0],s[1],n[2][0],n[2][1])}else for(var c=1;c<n.length;c++)e.lineTo(n[c][0],n[c][1])}function _(e,t,a){var n=e.getTextGuideLine(),r=e.getTextContent();if(r){for(var o=t.normal,l=o.get("show"),s=r.ignore,c=0;c<h.qc.length;c++){var u=h.qc[c],d=t[u],f="normal"===u;if(d){var p=d.get("show"),y=f?s:(0,g.pD)(r.states[u]&&r.states[u].ignore,s);if(y||!(0,g.pD)(p,l)){var v=f?n:n&&n.states[u];v&&(v.ignore=!0);continue}n||(n=new i.Z,e.setTextGuideLine(n),f||!s&&l||P(n,!0,"normal",t.normal),e.stateProxy&&(n.stateProxy=e.stateProxy)),P(n,!1,u,d)}}if(n){(0,g.ce)(n.style,a),n.style.fill=null;var m=o.get("showAbove"),b=e.textGuideLineConfig=e.textGuideLineConfig||{};b.showAbove=m||!1,n.buildPath=G}}else n&&e.removeTextGuideLine()}function W(e,t){t=t||"labelLine";for(var a={normal:e.getModel(t)},n=0;n<h.L1.length;n++){var r=h.L1[n];a[r]=e.getModel([r,t])}return a}}}]);