(function(t){function e(e){for(var o,a,c=e[0],l=e[1],u=e[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11d9":function(t,e,n){t.exports=n.p+"img/3.5a511848.jpg"},2395:function(t,e,n){},"405a":function(t,e,n){t.exports=n.p+"img/2.4567bc0f.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-aside",[n("div",{staticStyle:{border:"1px solid #ccc"}},[n("img",{staticClass:"mark",attrs:{src:t.img,id:"source",draggable:"true"}})]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.getPdf("#target")}}},[t._v("点击下载")])],1),n("el-main",[n("div",{staticStyle:{border:"1px solid #ccc",width:"500px",height:"500px",overflow:"auto"}},[n("div",{staticStyle:{border:"1px solid #ccc",position:"relative"},attrs:{id:"target"}},[t.isShow?n("img",{staticClass:"mark",staticStyle:{position:"absolute"},style:{left:t.x+"px",top:t.y+"px"},attrs:{src:t.img,id:"copyimg"}}):t._e(),n("img",{attrs:{src:t.img1,width:"100%"}}),n("img",{attrs:{src:t.img2,width:"100%"}}),n("img",{attrs:{src:t.img3,width:"100%"}}),n("img",{attrs:{src:t.img4,width:"100%"}})])])])],1)],1)},i=[],a=n("cf05"),c=n.n(a),l=n("8554"),u=n.n(l),s=n("405a"),d=n.n(s),p=n("11d9"),f=n.n(p),g=n("bafb"),m=n.n(g),h={name:"App",data:function(){return{htmlTitle:"页面导出PDF文件名",img:c.a,isShow:!1,x:0,y:0,img1:u.a,img2:d.a,img3:f.a,img4:m.a}},mounted:function(){var t=document.getElementById("source"),e=document.getElementById("target"),n=this;t.ondragstart=function(t){var e=t||window.event;console.log("开始拖拽"),e.dataTransfer.setData("text",e.target.id)},e.ondragenter=function(){console.log("进入目标元素")},e.ondragover=function(t){t=t||window.event;console.log("在目标元素中拖拽",t),t.preventDefault()},e.ondragleave=function(){console.log("拖放离开目标元素")},e.ondrop=function(t){console.log("拖放");var e=t||window.event,o=e.dataTransfer.getData("text");n.addImg(o,e)}},methods:{addImg:function(t,e){var n=this;this.isShow=!0;var o=document.getElementById("target"),r=o.getBoundingClientRect().left,i=o.getBoundingClientRect().top;this.$nextTick((function(){n.x=e.clientX-r,n.y=e.clientY-i+o.scrollTop}))}}},v=h,y=(n("7c55"),n("2877")),b=Object(y["a"])(v,r,i,!1,null,null,null),w=b.exports,x=n("cca1"),j=n.n(x),P=(n("8842"),n("c0e9")),S=n.n(P),O=n("e511"),T=n.n(O),_={install:function(t,e){t.prototype.getPdf=function(){var t=this.htmlTitle;S()(document.querySelector("#target"),{allowTaint:!0}).then((function(e){var n=e.width,o=e.height,r=n/592.28*841.89,i=o,a=0,c=595.28,l=592.28/n*o,u=e.toDataURL("image/jpeg",1),s=new T.a("","pt","a4");if(i<r)s.addImage(u,"JPEG",0,0,c,l);else while(i>0)s.addImage(u,"JPEG",0,a,c,l),i-=r,a-=841.89,i>0&&s.addPage();s.save(t+".pdf")}))}}};o["default"].config.productionTip=!1,o["default"].use(j.a),o["default"].use(_),new o["default"]({render:function(t){return t(w)},components:{App:w}}).$mount("#app")},"7c55":function(t,e,n){"use strict";var o=n("2395"),r=n.n(o);r.a},8554:function(t,e,n){t.exports=n.p+"img/1.81e722c4.jpg"},bafb:function(t,e,n){t.exports=n.p+"img/4.32575179.jpg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.712190b8.js.map