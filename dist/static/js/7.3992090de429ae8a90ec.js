webpackJsonp([7],{"6BUc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"page404",mounted:function(){!function(){var t=document.getElementById("cvs"),e=t.height=window.innerHeight/2,n=t.width=window.innerWidth/2,i=t.getContext("2d");function r(t,e){return Math.random()*(e-t+1)+t}function s(t,e,n,i,r){return(t-e)*(r-i)/(n-e)+i}for(var o=[],a=5,f=25,u=!1,c=2,d=0;d<25;d++)o.push({x:r(0,n),y:r(0,e),text:"404",size:r(a,f)}),o.push({x:r(0,n),y:r(0,e),text:"page",size:r(a,f)}),o.push({x:r(0,n),y:r(0,e),text:"not found",size:r(a,f)}),o.push({x:r(0,n),y:r(0,e),text:"404",size:Math.floor(r(a,f))});!function t(){i.fillStyle="rgba(0,0,0,1)",i.fillRect(0,0,n,e),i.fillStyle="#fff";for(var d=0;d<o.length;d++){i.font=o[d].size+"px sans-serif";var l=i.measureText(o[d].text);i.fillText(o[d].text,o[d].x,o[d].y),o[d].x+=u?s(o[d].size,a,f,2,4)*c:s(o[d].size,a,f,2,3),o[d].x>=n&&(o[d].x=2*-l.width,o[d].y=r(0,e),o[d].size=Math.floor(r(a,f)))}i.fill(),requestAnimationFrame(t)}(),window.addEventListener("keydown",function(){u=!0},!0),window.addEventListener("keyup",function(){u=!1},!0)}()}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("canvas",{attrs:{id:"cvs"}})])}]};var s=n("VU/8")(i,r,!1,function(t){n("Q9HA")},"data-v-5b36f999",null);e.default=s.exports},Q9HA:function(t,e){}});
//# sourceMappingURL=7.3992090de429ae8a90ec.js.map