(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[728],{8171:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pomodoro",function(){return t(7407)}])},7407:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Un}});var i=t(5893),r=t(9008),o=t(7379),u={src:"/_next/static/media/tomato.857f61da.jpg",height:1824,width:1824,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKoEq//EABwQAAEDBQAAAAAAAAAAAAAAABEFEiIAAhMUFf/aAAgBAQABPwDqK96xryOdjBBhr//EABsRAAIBBQAAAAAAAAAAAAAAAAECAwAREyIx/9oACAECAQE/AIFJyXkc7npr/8QAHBEAAgICAwAAAAAAAAAAAAAAAgMBEgAEERRR/9oACAEDAQE/AN8lh16oVFkiU8R7n//Z"},c=t(7294);function a(){var n,e,t=(n=["\nbackground: ",";\nwidth: 100%;\nheight: 100%;\nmargin: auto;\nborder: 2px solid palevioletred;\nbox-sizing: border-box;\nfont-size: 25px;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return a=function(){return t},t}var s=o.ZP.div(a(),(function(n){return n.color}));function l(n){var e=function(){clearInterval(a.current),console.log("El timepo se ha terminado")},t=1e3,r=(0,c.useState)(1e3*(60*0*60+60*0+10)),o=r[0],u=r[1],a=(0,c.useRef)();return(0,c.useEffect)((function(){null!=n.events&&("start"===n.events?function(){var n=o;a.current=setInterval((function(){(n-=t)<=0?(u(n=0),e()):u(n)}),t)}():"restart"===n.events||"pause"===n.events||n.events)})),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s,{color:"#665620",children:[" ",function(n){var e=Math.floor(n/6e4),t=(n%6e4/1e3).toFixed(0);return e+":"+(t<10?"0":"")+t}(o)]})})}function d(n){return(0,i.jsx)(i.Fragment,{children:"TabTasks"})}function f(n){return(0,i.jsx)(i.Fragment,{children:"TabInfo"})}function x(n){return(0,i.jsx)(i.Fragment,{children:"TabTips"})}function p(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function b(){var n=p(["\n    width: auto;\n    display: inline-block;\n    background: #ffee07;\n    border-radius: 0px 15px 0px 0px;  \n    border-top: 2px solid ",";\n    border-left: 2px solid ",";\n    border-right: 2px solid ",";\n    border-bottom: "," solid ",";\n    color: ",";\n    margin: 0 1em;\n    padding: 0.25em 1em;\n    cursor: pointer;\n    z-index: 3;\n    box-sizing: content-box;\n"]);return b=function(){return n},n}function v(){var n=p(["\n    position: absolute;\n    width: 100%;\n    height: 30px; \n    z-index: 1;\n    box-sizing: border-box;\n"]);return v=function(){return n},n}function h(){var n=p(["\n    position: absolute;\n    width: 100%; \n    border: 2px solid #000000; \n    z-index: 0;\n    top: 30px;\n    box-sizing: border-box;\n"]);return h=function(){return n},n}function g(){var n=p(["\n    position: relative;\n    width: 100%;  \n    box-sizing: border-box;\n"]);return g=function(){return n},n}var A="#000000",m=o.ZP.div(b(),A,A,A,(function(n){return n.buttonBorder===A?"0px":"4px"}),(function(n){return n.buttonBorder}),A),j=o.ZP.div(v()),y=o.ZP.div(h()),w=o.ZP.div(g());function k(n){var e=function(n){1===n?(o(1),s(d)):2===n?(o(2),s(f)):3===n&&(o(3),s(x))},t=(0,c.useState)(1),r=t[0],o=t[1],u=(0,c.useState)(),a=u[0],s=u[1],l=(0,c.useRef)([{label:"Tareas / Objetivos",numTab:1},{label:"Como Funciona",numTab:2},{label:"Tips",numTab:3}]).current.map((function(n,t){return(0,i.jsx)(m,{buttonBorder:r===n.numTab?"#ffffff":A,onClick:function(){return e(n.numTab)},children:n.label},n.numTab)}));return(0,c.useEffect)((function(){e(r)}),[r]),(0,i.jsxs)(w,{children:[(0,i.jsx)(j,{children:l}),(0,i.jsx)(y,{children:a})]})}function P(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function z(){var n=P(["\n    background: ",";\n    border-radius: 10px;\n    border: 1px "," ",";\n    color: ","; \n    display: inline-flex; \n    align-items: center;\n    vertical-align: middle;\n    box-sizing: border-box;\n    font-size: 17px;\n    padding: 15px 10px;\n    height: 20px;   \n    cursor: pointer;\n    transition: all 100ms;\n    &&:hover{\n        transform: scale(1.05);\n    }\n"]);return z=function(){return n},n}function E(){var n=P(["   \n    padding: 0 0 0 1em;\n    display: inline-block; \n    vertical-align: middle;\n"]);return E=function(){return n},n}var C=o.ZP.button(z(),(function(n){return n.background}),(function(n){return n.borderType}),(function(n){return n.colorBorder}),(function(n){return n.colorText})),I=o.ZP.div(E());function Z(n){return(0,i.jsxs)(C,{type:"buttom",onClick:function(){return n.onClick(2)},borderType:n.stylesInfo.border,colorBorder:n.stylesInfo.colorBorder,colorText:n.stylesInfo.colorText,background:n.stylesInfo.background,children:[n.icon,null!=n.content?(0,i.jsxs)(I,{children:[" ",n.content]}):null]})}function B(){var n=(0,c.useState)({width:1920,height:1080}),e=n[0],t=n[1];return(0,c.useEffect)((function(){var n=function(){t({width:1920,height:1080})};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),e}var O=t(2814),S=t(9398);function T(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function F(){var n=T(["\n    width: 100%;\n    height: 50px; \n    font-size: ","px;\n"]);return F=function(){return n},n}function D(){var n=T(["\n    display: block;\n    padding: 5px;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    width: 100%;  \n    color: #979797;\n"]);return D=function(){return n},n}function Q(){var n=T(["\n    display: block;\n    padding: 5px;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    width: 100%;  \n    color: #979797;\n"]);return Q=function(){return n},n}function R(){var n=T(["\n    display: block;\n    font-size: ","px;\n    padding: 0;\n    margin: auto;\n    box-sizing: border-box; \n    appearance: none;\n    border: 1px solid #c2c2c2;\n    border-radius: 5px;\n    text-align: center;\n   \n    -moz-appearance: textfield;\n    &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n"]);return R=function(){return n},n}var M=o.ZP.div(F(),18),N=o.ZP.div(D()),X=o.ZP.div(Q()),_=o.ZP.input(R(),18);function U(){var n=function(n){var e=n;e>u?e=u:e<s&&(e=s),r(e)},e=(0,c.useState)(0),t=e[0],r=e[1],o=(0,c.useState)(60),u=o[0],a=(o[1],(0,c.useState)(0)),s=a[0],l=(a[1],(0,i.jsx)(O.G,{icon:S.mTx})),d=(0,i.jsx)(O.G,{icon:S.ptq});return(0,i.jsxs)(M,{children:[(0,i.jsxs)(N,{onClick:function(){n(t+1)},children:[" ",l," "]}),(0,i.jsx)(_,{type:"number",min:s,max:"5",onChange:function(e){return n(e.target.value)},value:t}),(0,i.jsxs)(X,{onClick:function(){n(t-1)},children:[" ",d," "]})]})}function Y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function L(){var n=Y(["    \n  from {transform: scale(1.2);} \n  to {transform: scale(1.5);}\n"]);return L=function(){return n},n}function G(){var n=Y([" \n  position: absolute;  \n  visibility: ",";\n  opacity: ",";\n  width: 100%;\n  height: 100%;\n  background: #00000075;\n  z-index: 9999;\n"]);return G=function(){return n},n}function J(){var n=Y([" \n  width: 500px;\n  height: max-content;\n  max-width: 80%;\n  max-height: 70%;\n  position: fixed;  //OR ABSOLUTE\n  //position: absolute;  //OR FIXED\n  z-index: 9999;\n  left: ","px; \n  top: ","px;   \n  right: 0;\n  bottom: 0;\n  background-color: #ffffff;\n  border: 1px solid #000; \n  border-radius: 0;\n  border-radius: 10px;\n  animation: "," 2000ms normal linear; \n  animation-fill-mode: both; \n"]);return J=function(){return n},n}function K(){var n=Y(["  \n  display: flex;\n  align-items: center;  \n  width: 100%;\n  height: max-content; \n  position: relative; \n  box-sizing: border-box; \n  padding: 5px 5px; \n\n"]);return K=function(){return n},n}function V(){var n=Y(["  \n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto; \n  position: relative; \n  padding: 2px 15px; \n  width: 100%; \n  min-height: 150px;\n  max-height: 50vh;\n  height: max-content; \n  box-sizing: border-box;  \n  overflow-y: scroll;\n\n"]);return V=function(){return n},n}function W(){var n=Y(["   \ndisplay: flex; \nwidth: 100%; \nheight: max-content; \nposition: relative;  \nbox-sizing: border-box;  \npadding: 5px 5px; \n"]);return W=function(){return n},n}function q(){var n=Y([" \nposition: relative;\ndisplay: inline-block; \ntext-align: start;\nfont-weight: bold;\ncolor: #616161;\nwidth: 100%;\npadding: 0 10px;\nleft: 0; \n"]);return q=function(){return n},n}function H(){var n=Y(["\nbackground: #616161;\nposition: relative;\ndisplay: block; \nwidth: 100%;\nheight: 2px;\nmargin: 8px 0 0 1px;\nbox-sizing: border-box;\npointer-events: none;\n"]);return H=function(){return n},n}function $(){var n=Y(["  \nposition: relative;\ndisplay: inline-block; \nmargin: auto auto auto 0; \n"]);return $=function(){return n},n}function nn(){var n=Y([" \nposition: relative; \ndisplay: inline-block; \nmargin: auto 0 auto auto; \n"]);return nn=function(){return n},n}var en=(0,o.F4)(L()),tn=o.ZP.div(G(),(function(n){return n.visibility}),(function(n){return n.opacity})),rn=o.ZP.div(J(),(function(n){return Number(n.positionX)}),(function(n){return Number(n.positionY)}),en),on=o.ZP.div(K()),un=o.ZP.div(V()),cn=o.ZP.div(W()),an=o.ZP.div(q()),sn=o.ZP.div(H()),ln=o.ZP.div($()),dn=o.ZP.div(nn()),fn=null,xn=null,pn="popSettings";function bn(n){var e=function(n){null==fn&&(fn=n.pageX-1,xn=n.pageY-1);var e=document.getElementById(pn).getBoundingClientRect();a(e.x+(n.pageX-fn)),d(e.y+(n.pageY-xn)),fn=n.pageX,xn=n.pageY},t=(0,c.useRef)(B().width),r=(0,c.useRef)(B().height),o=(0,c.useState)(0),u=o[0],a=o[1],s=(0,c.useState)(0),l=s[0],d=s[1],f=(0,i.jsx)(O.G,{icon:S.NBC}),x=(0,i.jsx)(O.G,{icon:S.nYk}),p=(0,i.jsx)(O.G,{icon:S.LEp});return(0,c.useEffect)((function(){a((t.current-document.getElementById(pn).offsetWidth)/2),d((r.current-document.getElementById(pn).offsetHeight)/3),console.log("PopDiv : ",document.getElementById(pn).offsetWidth)}),[]),(0,i.jsx)(tn,{visibility:n.visibility,opacity:n.opacity,children:(0,i.jsxs)(rn,{positionX:u,positionY:l,id:pn,anim:en,children:[(0,i.jsxs)(on,{children:[(0,i.jsxs)(an,{onMouseDown:function(){document.onmousemove=e},onMouseUp:function(){document.onmousemove=null},onClick:function(n){document.onmousemove=null},children:["Ajustes",(0,i.jsx)(sn,{})]}),(0,i.jsx)(Z,{onClick:n.closeClic,stylesInfo:n.stylesInfo.btnStyle,icon:x,content:"Cerrar"})]}),(0,i.jsxs)(un,{children:[(0,i.jsx)(an,{children:"Tiempo"}),(0,i.jsx)(U,{}),(0,i.jsxs)("div",{children:["button ",(0,i.jsx)("input",{type:"button"})]}),(0,i.jsxs)("div",{children:["checkbox  ",(0,i.jsx)("input",{type:"checkbox"})]}),(0,i.jsxs)("div",{children:["color  ",(0,i.jsx)("input",{type:"color"})]}),(0,i.jsxs)("div",{children:["date  ",(0,i.jsx)("input",{type:"date"})]}),(0,i.jsxs)("div",{children:["datetime-local  ",(0,i.jsx)("input",{type:"datetime-local"})]}),(0,i.jsxs)("div",{children:["month  ",(0,i.jsx)("input",{type:"month"})]}),(0,i.jsxs)("div",{children:["number  ",(0,i.jsx)("input",{type:"number"})]}),(0,i.jsxs)("div",{children:["search  ",(0,i.jsx)("input",{type:"search"})]}),(0,i.jsxs)("div",{children:["time  ",(0,i.jsx)("input",{type:"time"})," "]}),(0,i.jsxs)("div",{children:["week  ",(0,i.jsx)("input",{type:"week"})]}),(0,i.jsx)(an,{children:"Tonos"})]}),(0,i.jsxs)(cn,{children:[(0,i.jsx)(ln,{children:(0,i.jsx)(Z,{onClick:n.closeClic,stylesInfo:n.stylesInfo.btnStyle,icon:f,content:"Cancelar"})}),(0,i.jsx)(dn,{children:(0,i.jsx)(Z,{onClick:n.closeClic,stylesInfo:n.stylesInfo.btnStyle,icon:p,content:"Aceptar"})})]})]})})}function vn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function hn(){var n=vn(["    \n  //from {opacity: 0;} \n  //to {opacity: 1;}\n"]);return hn=function(){return n},n}function gn(){var n=vn([" \n  position: absolute;  \n  visibility: ",";\n  opacity: ",";\n  width: 100%;\n  height: 100%;\n  background: #00000075;\n  z-index: 9999;\n"]);return gn=function(){return n},n}function An(){var n=vn([" \n    visibility: ",";\n    opacity: ",";\n    width: 500px;\n    height: max-content;\n    max-width: 80%;\n    max-height: 70%;\n    position: fixed;  //OR ABSOLUTE\n    //position: absolute;  //OR FIXED\n    z-index: 9999;\n    left: ","px; \n    top: ","px;   \n    right: 0;\n    bottom: 0;\n    background-color: #ffffff;\n    border: 1px solid #000; \n    border-radius: 0;\n    border-radius: 10px;\n    animation: "," 0s normal; \n    transition: none 1000ms;    \n"]);return An=function(){return n},n}function mn(){var n=vn(["  \n  display: flex;\n  align-items: center;  \n  width: 100%;\n  height: max-content; \n  position: relative; \n  box-sizing: border-box; \n  padding: 5px 5px; \n\n"]);return mn=function(){return n},n}function jn(){var n=vn(["  \n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto; \n  position: relative; \n  padding: 2px 15px; \n  width: 100%; \n  min-height: 150px;\n  max-height: 50vh;\n  height: max-content; \n  box-sizing: border-box;  \n  overflow-y: scroll;\n\n"]);return jn=function(){return n},n}function yn(){var n=vn(["   \n  display: flex; \n  width: 100%; \n  height: max-content; \n  position: relative;  \n  box-sizing: border-box;  \n  padding: 5px 5px; \n"]);return yn=function(){return n},n}function wn(){var n=vn([" \n  position: relative;\n  display: inline-block; \n  text-align: start;\n  font-weight: bold;\n  color: #616161;\n  width: 100%;\n  padding: 0 10px;\n  left: 0; \n"]);return wn=function(){return n},n}function kn(){var n=vn(["\n  background: #616161;\n  position: relative;\n  display: block; \n  width: 100%;\n  height: 2px;\n  margin: 8px 0 0 1px;\n  box-sizing: border-box;\n  pointer-events: none;\n"]);return kn=function(){return n},n}function Pn(){var n=vn(["  \n  position: relative;\n  display: inline-block; \n  margin: auto auto auto 0; \n"]);return Pn=function(){return n},n}function zn(){var n=vn([" \n  position: relative; \n  display: inline-block; \n  margin: auto 0 auto auto; \n"]);return zn=function(){return n},n}var En=(0,o.F4)(hn());o.ZP.div(gn(),(function(n){return n.visibility}),(function(n){return n.opacity})),o.ZP.div(An(),(function(n){return n.visibility}),(function(n){return n.opacity}),(function(n){return Number(n.positionX)}),(function(n){return Number(n.positionY)}),En),o.ZP.div(mn()),o.ZP.div(jn()),o.ZP.div(yn()),o.ZP.div(wn()),o.ZP.div(kn()),o.ZP.div(Pn()),o.ZP.div(zn());function Cn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function In(){var n=Cn(["\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;  \n"]);return In=function(){return n},n}function Zn(){var n=Cn(["\n  display: flex;\n  text-align: left;\n  margin-left: 20px;\n  font-size: 18px; \n  font-weight: bold;\n"]);return Zn=function(){return n},n}function Bn(){var n=Cn(["\n  display: flex;\n  text-align: left;\n  margin-left: 20px;\n  font-size: 17px; \n  font-weight: bold;\n"]);return Bn=function(){return n},n}var On=o.ZP.div(In()),Sn=o.ZP.div(Zn()),Tn=o.ZP.div(Bn()),Fn=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],Dn=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];function Qn(){var n=(0,c.useRef)(""),e=(0,c.useState)(""),t=e[0],r=e[1];return(0,c.useEffect)((function(){var e;return e=setInterval((function(){return function(){clearInterval(e);var t=new Date;r(t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0})),n.current="".concat(Dn[t.getDay()]," ").concat(t.getDate(),", ").concat(Fn[t.getMonth()]," ").concat(t.getFullYear())}()}),1e3),function(){clearInterval(e)}}),[t]),(0,i.jsxs)(On,{children:[(0,i.jsxs)(Sn,{children:[" ",n.current,"."]}),(0,i.jsxs)(Tn,{children:[" ",t,"."]})]})}function Rn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Mn(){var n=Rn(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"]);return Mn=function(){return n},n}function Nn(){var n=Rn([" \n  display: block;   \n  width: auto;\n  height: 50px;\n  max-width: 500px;\n  margin: 0 auto;\n  position: relative;\n"]);return Nn=function(){return n},n}function Xn(){var n=Rn([" \n  display: block;  \n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n"]);return Xn=function(){return n},n}function _n(){var n=Rn([" \n  display: block;  \n  position: absolute;\n  right: 0px;\n  bottom: 0px; \n"]);return _n=function(){return n},n}function Un(){var n=(0,c.useState)(),e=n[0],t=n[1],o=(0,c.useState)({visibility:"hidden",opacity:0}),a=o[0],s=o[1],d=(0,i.jsx)(O.G,{icon:S.b7W}),f=function(){return(0,i.jsxs)(r.default,{children:[(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("title",{children:" Pomodoro "}),(0,i.jsx)("link",{rel:"manifest",href:"/manifest_pomodoro.json"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("meta",{name:"theme-color",content:"$fff"}),(0,i.jsx)("meta",{name:"autor",content:"autor"})]})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(bn,{visibility:a.visibility,stylesInfo:Yn,opacity:a.opacity,closeClic:function(n){s({visibility:"hidden",opacity:0})}}),(0,i.jsx)("header",{className:"App-header"}),(0,i.jsxs)("main",{children:[(0,i.jsxs)(Gn,{children:[(0,i.jsx)(Jn,{children:(0,i.jsx)(Qn,{})}),(0,i.jsx)(Kn,{children:(0,i.jsx)(Z,{onClick:function(n){s({visibility:"visible",opacity:1})},stylesInfo:Yn.btnStyle,icon:d,content:"Ajustes"})})]}),(0,i.jsxs)("div",{className:"tomatoArea",children:[(0,i.jsx)("img",{src:u,className:"tomatoimg",alt:"logo"}),(0,i.jsx)("div",{className:"tomatoCounter",children:(0,i.jsx)(l,{events:e})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:(0,i.jsx)(Ln,{onClick:function(){t("start")},children:" Iniciar Cuenta Atras "})}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:(0,i.jsx)(k,{children:" "})})]}),(0,i.jsx)("footer",{})]})}var Yn={btnStyle:{border:"solid",colorBorder:"#ffdc18",background:"#ffdc18",colorText:"#000"}},Ln=o.ZP.button(Mn()),Gn=o.ZP.div(Nn()),Jn=o.ZP.div(Xn()),Kn=o.ZP.div(_n())}},function(n){n.O(0,[523,716,814,774,888,179],(function(){return e=8171,n(n.s=e);var e}));var e=n.O();_N_E=e}]);