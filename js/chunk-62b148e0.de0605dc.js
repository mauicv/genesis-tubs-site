(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62b148e0","chunk-8903ec8e","chunk-0de7d644","chunk-4fc17205","chunk-2d0ab80f"],{"160d":function(t,n,e){"use strict";e.r(n),n["default"]={particleTypes:[{color:"#24c4a9",name:"A",radius:4},{color:"#a9c524",name:"B",radius:4},{color:"#c5242d",name:"D",radius:2},{color:"#29c524",name:"E",radius:2},{color:"#12debc",name:"F"}]}},"215c":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("canvas",{attrs:{id:"Canvas"}})},a=[],i=e("9dfb"),o=e("f946"),s={name:"asteroids",data:function(){return{canvas:null,canvasTop:null,canvasLeft:null,drawCtx:null,controller:null,running:!1,finished:!1}},mounted:function(){this.setupCanvas();var t=this.loadEnviroment();this.draw(t),this.createAndstart(t)},beforeDestroy:function(){this.destroy()},methods:{setupCanvas:function(){var t=document.getElementById("Canvas"),n=document.documentElement.clientWidth,e=document.documentElement.clientHeight;t.width=n,t.height=e;var r=t.getContext("2d"),a=t.getBoundingClientRect();this.canvas=t,this.drawCtx=r,this.canvasTop=a.top,this.canvasLeft=a.left},loadEnviroment:function(){return i["default"].createEnvironment(this)},handleMouseMove:function(t){this.getCanvasLoc(t)},handleMouseClick:function(t){this.getCanvasLoc(t)},getCanvasLoc:function(t){return{x:[t.clientX-this.canvasLeft,t.clientY-this.canvasTop]}},onkeydown:function(t){this.finished?32==t.keyCode&&(this.restart(),this.finished=!1):32==t.keyCode&&this.running?this.stop():this.start()},createAndstart:function(t){this.controller=this.createRunner(t),this.controller.run(),this.running=!0,document.addEventListener("keydown",this.onkeydown,!1),document.addEventListener("keyup",this.onkeyup,!1)},restart:function(){this.controller&&this.controller.destroy();var t=this.loadEnviroment();this.controller=this.createRunner(t),this.controller.run(),this.running=!0},stop:function(){this.controller&&this.controller.stop(),this.running=!1},start:function(){this.controller&&!this.running&&(this.running=!0,this.controller.run())},destroy:function(){this.controller&&(this.running=!1,this.controller.destroy()),document.removeEventListener("keydown",this.onkeydown,!1),document.removeEventListener("keyup",this.onkeyup,!1)},createRunner:function(t){return i["default"].createRunner(this,t)},draw:function(t){o["default"].draw(this,t)}}},c=s,u=e("2877"),l=Object(u["a"])(c,r,a,!1,null,null,null);n["default"]=l.exports},"36bd":function(t,n,e){"use strict";var r=e("4bf8"),a=e("77f1"),i=e("9def");t.exports=function(t){var n=r(this),e=i(n.length),o=arguments.length,s=a(o>1?arguments[1]:void 0,e),c=o>2?arguments[2]:void 0,u=void 0===c?e:a(c,e);while(u>s)n[s++]=t;return n}},5640:function(t,n,e){"use strict";e.r(n);e("ac6a"),e("7f7f");var r=e("3be1"),a=e.n(r),i=(e("160d"),a.a.GeneralMethods),o=a.a.CollisionResponse,s=(a.a.CollisionChecker,a.a.Feature),c={A:{A:.1,B:-.03,D:.01,E:.01},B:{B:.1,A:-.03,D:.01,E:.01},D:{A:0,B:.1,D:.05,E:-.05},E:{A:.1,B:0,D:-.05,E:.05}};n["default"]={interactionLaws:function(){var t=new s("interactionLaws");return t.interaction=function(t,n){var e=c[t.stuff.v.name][n.stuff.v.name];if(void 0!=e){e*=5e-5;var r=t.elements[0].x,a=n.elements[0].x,s=i.norm(i.minus(r,a));t.elements[0].update_x_xd(i.mult(s,-e)),n.elements[0].update_x_xd(i.mult(s,e))}var u=t.checkProximityTo(n,0);u.forEach((function(e){e.depth<0&&"D"!=t.stuff.v.name&&"D"!=n.stuff.v.name&&"E"!=t.stuff.v.name&&"E"!=n.stuff.v.name&&o.particleResponse(e)}))},t}()}},"6c7b":function(t,n,e){var r=e("5ca1");r(r.P,"Array",{fill:e("36bd")}),e("9c6c")("fill")},"9dfb":function(t,n,e){"use strict";e.r(n);e("ac6a");var r=e("3be1"),a=e.n(r),i=e("5640"),o=e("160d"),s=a.a.lawInstances;n["default"]={createEnvironment:function(t){for(var n=new a.a.Builder,e=n.returnEnviro(),r=0;r<120;r++){var c=Math.random()*t.canvas.height,u=Math.random()*t.canvas.width;n.addParticle([u,c],4,[0,0])}e.points.forEach((function(t){var e=n.addStructure([t],[]);e.stuff.v=o["default"].particleTypes[Math.floor(4*Math.random())]})),e.laws.bowl=s["bowl"]([t.canvas.width/2,t.canvas.height/2],2),e.laws.bowl.structures=e.structures;var l=i["default"].interactionLaws;return e.structures.forEach((function(t){t.features.push(l)})),e},createRunner:function(t,n){var e,r=t.draw;function a(){n.timeStep(),r(n),e=window.requestAnimationFrame(a)}function i(){window.cancelAnimationFrame(e)}function o(){i(),n.builder.cleanEnvironment(),e=null}return{run:a,stop:i,destroy:o}}}},f946:function(t,n,e){"use strict";e.r(n);e("6c7b"),e("ac6a"),e("3be1");n["default"]={draw:function(t,n){t.drawCtx.fillStyle="rgba(0, 0, 0, 1)",t.drawCtx.fillRect(0,0,t.canvas.width,t.canvas.height),n.structures.forEach((function(n){t.drawCtx.fillStyle=n.stuff.v.color;var e=n.elements[0];t.drawCtx.beginPath(),t.drawCtx.arc(e.x[0],e.x[1],n.stuff.v.radius,0,2*Math.PI),t.drawCtx.fill()}))}}}}]);
//# sourceMappingURL=chunk-62b148e0.de0605dc.js.map