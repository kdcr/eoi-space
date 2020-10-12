parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L4bL":[function(require,module,exports) {
function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}ringColors=["#706355","#847364","#aa9484","#c9a47f","#9b7e64","#7c6452","#d6ae8a","#605448"];var a=function a(){e(this,a),o(this,"lifeSpan",0),o(this,"currentLifeSpan",0),o(this,"pos",[]),o(this,"element",{})};function t(){pe.sun=new Zdog.Shape({addTo:me,stroke:190,color:"#993d10"}),pe.sunSur=new Zdog.Shape({addTo:me,stroke:200,color:"#ff660050"}),pe.sunSur2=new Zdog.Shape({addTo:me,stroke:210,color:"#ffa36650"}),pe.sunSur3=new Zdog.Shape({addTo:me,stroke:220,color:"#ffa36650"})}function n(){pe.mercury=new Zdog.Shape({addTo:me,stroke:5,translate:{x:200},color:"#8E8E8E"})}function r(){pe.venus=new Zdog.Shape({addTo:me,stroke:11,translate:{x:250},color:"#C9C97B"})}function s(){pe.earth=new Zdog.Shape({addTo:me,stroke:12,translate:{x:300},color:"#000090"}),pe.moon=new Zdog.Shape({addTo:me,stroke:3,translate:{x:310},color:"#808080"})}function d(){pe.mars=new Zdog.Shape({addTo:me,stroke:8,translate:{x:360},color:"#993d10"}),pe.deimos=new Zdog.Shape({addTo:me,stroke:1,translate:{x:365},color:"#808080"}),pe.phobos=new Zdog.Shape({addTo:me,stroke:1,translate:{x:370},color:"#808080"})}function u(){}function l(){pe.jupiter=new Zdog.Shape({addTo:me,stroke:30,translate:{x:400},color:"#993d10"}),pe.io=new Zdog.Shape({addTo:me,stroke:4,translate:{x:400},color:"#fff2a7"}),pe.europa=new Zdog.Shape({addTo:me,stroke:2,translate:{x:400},color:"#b6c9c5"}),pe.ganymede=new Zdog.Shape({addTo:me,stroke:3,translate:{x:400},color:"#8b7c78"}),pe.callisto=new Zdog.Shape({addTo:me,stroke:3,translate:{x:400},color:"#996e5b"})}function i(){pe.saturnRings=[],pe.saturn=new Zdog.Shape({addTo:me,stroke:28,color:"#993d10"}),pe.mimas=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.enceladus=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.tethys=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.dione=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.rhea=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.titan=new Zdog.Shape({addTo:me,stroke:2,color:"#d4af82"}),pe.hyperion=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.iapetus=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"});for(var e=10,o=0;o<=10;o++){var a=ringColors[Math.round(Math.random()*ringColors.length)];pe.saturnRings.push(new Zdog.Ellipse({addTo:me,diameter:35+e,stroke:1,color:a,quarters:1})),pe.saturnRings.push(new Zdog.Ellipse({addTo:me,diameter:35+e,stroke:1,rotate:{x:Math.PI},color:a,quarters:1})),pe.saturnRings.push(new Zdog.Ellipse({addTo:me,diameter:35+e,stroke:1,rotate:{y:Math.PI},color:a,quarters:1})),pe.saturnRings.push(new Zdog.Ellipse({addTo:me,diameter:35+e,stroke:1,rotate:{z:Math.PI},color:a,quarters:1})),e++,e++,e++}}function c(){pe.uranus=new Zdog.Shape({addTo:me,stroke:15,color:"#6895a9"}),pe.miranda=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.ariel=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.umbriel=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.titania=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"}),pe.oberon=new Zdog.Shape({addTo:me,stroke:2,color:"#575756"})}function h(){pe.neptune=new Zdog.Shape({addTo:me,stroke:15,color:"#4175a9"}),pe.triton=new Zdog.Shape({addTo:me,stroke:2,color:"#c3b097"})}function p(){t(),n(),r(),s(),d(),l(),i(),c(),h()}function m(){var e=new a;e.pos=[Math.random()*ne.clientWidth,Math.random()*ne.clientHeight],e.element=document.createElement("div"),e.element.classList.add("star"),e.element.style.left=e.pos[0]+"px",e.element.style.top=e.pos[1]+"px",e.lifeSpan=2e3*Math.random();var o=Math.round(100*Math.random());return o<=75?e.element.classList.add("starWhite"):o<=90?e.element.classList.add("starRed"):o<=98?e.element.classList.add("starYellow"):o<=100&&e.element.classList.add("starBlue"),e.element.classList.add("starShine"),re.style.setProperty("--shineSize",120*Math.random()+"%"),ne.appendChild(e.element),te.push(e),e}function g(){te.forEach(function(e){e.lifeSpan=e.lifeSpan-100,e.lifeSpan<0&&e.element.remove()}),m()}function S(e){ie-=e.translate.x,ce-=e.translate.y}function f(e,o,a,t,n){var r=o+t*Math.cos(n),s=a+t*Math.sin(n);r+=ie,s+=ce,e.translate={x:r,y:s}}function w(e,o,a,t){var n=o.translate.x+a*Math.cos(t),r=o.translate.y+a*Math.sin(t);e.translate={x:n,y:r}}var T,k,Z,y,v,b,x,M,E,R,j,q,z,C,L,I,P,B,D,O,W,A,F,G,H,Y,J,K,N,Q,U,V,X,$,_,ee,oe,ae,te=[],ne=document.querySelector(".spaceContainer"),re=document.documentElement,se=document.querySelector(".zdog-canvas"),de=document.querySelector("#zoomRange"),ue=document.querySelector("#bodySearch"),le=document.querySelector("#bodySearchBtn"),ie=0,ce=0,he=function(e){return Object.keys(e)[0]};le.addEventListener("click",function(){null!=pe[ue.value]&&(ge=pe[ue.value])});var pe={sun:T,sunSur:k,sunSur2:Z,sunSur3:y,mercury:v,venus:b,earth:x,moon:M,mars:E,phobos:R,deimos:j,pallas:q,ceres:z,juno:C,vesta:L,jupiter:I,io:P,europa:B,ganymede:D,callisto:O,saturn:W,mimas:A,enceladus:F,tethys:G,dione:H,rhea:Y,titan:J,hyperion:K,iapetus:N,saturnRings:Q,uranus:U,miranda:V,ariel:X,umbriel:$,titania:_,oberon:ee,neptune:oe,triton:ae},me=new Zdog.Illustration({element:".zdog-canvas",dragRotate:!0,resize:!0,zoom:.3});p();var ge=pe.sun;function Se(){me.updateRenderGraph(),requestAnimationFrame(Se)}Se(),setInterval(function(){var e=(new Date).getTime();f(pe.sun,0,0,0,0),f(pe.sunSur,0,0,0,0),f(pe.sunSur2,0,0,0,0),f(pe.sunSur3,0,0,0,0),f(pe.mercury,0,0,200,8e-4*e),f(pe.venus,0,0,250,-4e-4*e),f(pe.earth,0,0,300,3e-4*(new Date).getTime()),w(pe.moon,pe.earth,10,.002*e),f(pe.mars,0,0,360,2e-4*(new Date).getTime()),w(pe.deimos,pe.mars,9,.001*e),w(pe.phobos,pe.mars,5,.001*e),f(pe.jupiter,0,0,550,1e-5*e),w(pe.io,pe.jupiter,20,.001*e),w(pe.europa,pe.jupiter,25,8e-4*e),w(pe.ganymede,pe.jupiter,40,6e-4*e),w(pe.callisto,pe.jupiter,50,5e-4*e),f(pe.saturn,0,0,750,5e-5*e),pe.saturnRings.forEach(function(e){w(e,pe.saturn,0,0)}),w(pe.mimas,pe.saturn,45,.001*e),w(pe.enceladus,pe.saturn,50,9e-4*e),w(pe.tethys,pe.saturn,53,6e-4*e),w(pe.dione,pe.saturn,58,8e-4*e),w(pe.rhea,pe.saturn,61,7e-4*e),w(pe.titan,pe.saturn,65,.001*e),w(pe.hyperion,pe.saturn,70,8e-4*e),w(pe.iapetus,pe.saturn,72,5e-4*e),f(pe.uranus,0,0,950,2e-5*e),w(pe.miranda,pe.uranus,10,.001*e),w(pe.ariel,pe.uranus,15,8e-4*e),w(pe.umbriel,pe.uranus,20,7e-4*e),w(pe.titania,pe.uranus,25,9e-4*e),w(pe.oberon,pe.uranus,30,2e-4*e),f(pe.neptune,0,0,1e3,8e-6*e),w(pe.triton,pe.neptune,10,.001*e),me.zoom=.1*de.value,S(ge)},1),ge=pe.uranus;
},{}]},{},["L4bL"], null)
//# sourceMappingURL=/eoi-space/script.93ecba78.js.map