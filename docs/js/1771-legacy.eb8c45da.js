"use strict";(self["webpackChunkele_admin_template"]=self["webpackChunkele_admin_template"]||[]).push([[1771],{80553:function(e,r,t){t.d(r,{Cp:function(){return m},IX:function(){return d},JU:function(){return o},Ml:function(){return s},b1:function(){return i}});var n=t(50124),a=t(48534),u=(t(41539),t(21703),t(84471));function s(e){return c.apply(this,arguments)}function c(){return c=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/system/user-file",{params:r});case 2:if(t=e.sent,0!==t.data.code||!t.data.data){e.next=5;break}return e.abrupt("return",t.data.data);case 5:return e.abrupt("return",Promise.reject(new Error(t.data.message)));case 6:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function i(e){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.Z.post("/system/user-file",r);case 2:if(t=e.sent,0!==t.data.code){e.next=5;break}return e.abrupt("return",t.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(t.data.message)));case 6:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function o(e){return f.apply(this,arguments)}function f(){return f=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.Z.put("/system/user-file",r);case 2:if(t=e.sent,0!==t.data.code){e.next=5;break}return e.abrupt("return",t.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(t.data.message)));case 6:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.Z["delete"]("/system/user-file/"+r);case 2:if(t=e.sent,0!==t.data.code){e.next=5;break}return e.abrupt("return",t.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(t.data.message)));case 6:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return h=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.Z["delete"]("/system/user-file/batch",{data:r});case 2:if(t=e.sent,0!==t.data.code){e.next=5;break}return e.abrupt("return",t.data.message);case 5:return e.abrupt("return",Promise.reject(new Error(t.data.message)));case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}}}]);