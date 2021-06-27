!function(e){function t(t){for(var r,i,a=t[0],o=t[1],c=t[2],s=0,l=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(j,i)&&j[i]&&l.push(j[i][0]),j[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(F&&F(t);l.length;)l.shift()();return x.push.apply(x,c||[]),n()}function n(){for(var e,t=0;t<x.length;t++){for(var n=x[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==j[a]&&(r=!1)}r&&(x.splice(t--,1),e=H(H.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!k[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--m&&0===g&&P()}(e,t),r&&r(e,t)};var i,a=!0,o="b563b6a5fe898bfe2a89",c={},s=[],l=[];function u(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:i!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,f){case"idle":(v={})[t]=e[t],p("ready");break;case"ready":A(t);break;case"prepare":case"check":case"dispose":case"apply":(y=y||[]).push(t)}},check:E,apply:D,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[t]};return i=void 0,n}var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,v,_,y,m=0,g=0,b={},w={},k={};function S(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=H.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p(C()?"ready":"idle"),null;w={},b={},k=e.c,_=e.h,p("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in v={},j)O(n);return"prepare"===f&&0===g&&0===m&&P(),t}));var t}function O(e){k[e]?(w[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=H.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function P(){p("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return D(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(S(n));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");return function t(n){var r,a,l,u,d;function f(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var i=r.pop(),a=i.id,o=i.chain;if((u=q[a])&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:a};if(u.hot._main)return{type:"unaccepted",chain:o,moduleId:a};for(var c=0;c<u.parents.length;c++){var s=u.parents[c],l=q[s];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:o.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),h(n[s],[a])):(delete n[s],t.push(s),r.push({chain:o.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}C();var m={},g=[],b={},w=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in v)if(Object.prototype.hasOwnProperty.call(v,E)){var O;d=S(E),O=v[E]?f(d):{type:"disposed",moduleId:E};var P=!1,D=!1,A=!1,x="";switch(O.chain&&(x="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(P=new Error("Aborted because of self decline: "+O.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(P=new Error("Aborted because "+d+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(O),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),A=!0;break;default:throw new Error("Unexception type "+O.type)}if(P)return p("abort"),Promise.reject(P);if(D)for(d in b[d]=v[d],h(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(m[d]||(m[d]=[]),h(m[d],O.outdatedDependencies[d]));A&&(h(g,[O.moduleId]),b[d]=w)}var L,I=[];for(a=0;a<g.length;a++)d=g[a],q[d]&&q[d].hot._selfAccepted&&b[d]!==w&&!q[d].hot._selfInvalidated&&I.push({module:d,parents:q[d].parents.slice(),errorHandler:q[d].hot._selfAccepted});p("dispose"),Object.keys(k).forEach((function(e){!1===k[e]&&function(e){delete j[e]}(e)}));var N,F,M=g.slice();for(;M.length>0;)if(d=M.pop(),u=q[d]){var U={},T=u.hot._disposeHandlers;for(l=0;l<T.length;l++)(r=T[l])(U);for(c[d]=U,u.hot.active=!1,delete q[d],delete m[d],l=0;l<u.children.length;l++){var R=q[u.children[l]];R&&((L=R.parents.indexOf(d))>=0&&R.parents.splice(L,1))}}for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(u=q[d]))for(F=m[d],l=0;l<F.length;l++)N=F[l],(L=u.children.indexOf(N))>=0&&u.children.splice(L,1);p("apply"),void 0!==_&&(o=_,_=void 0);for(d in v=void 0,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var G=null;for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(u=q[d])){F=m[d];var Z=[];for(a=0;a<F.length;a++)if(N=F[a],r=u.hot._acceptedDependencies[N]){if(-1!==Z.indexOf(r))continue;Z.push(r)}for(a=0;a<Z.length;a++){r=Z[a];try{r(F)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:F[a],error:e}),n.ignoreErrored||G||(G=e)}}}for(a=0;a<I.length;a++){var V=I[a];d=V.module,s=V.parents,i=d;try{H(d)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||G||(G=t),G||(G=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||G||(G=e)}}if(G)return p("fail"),Promise.reject(G);if(y)return t(n).then((function(e){return g.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(g)}))}(t=t||{})}function C(){if(y)return v||(v={}),y.forEach(A),y=void 0,!0}function A(t){Object.prototype.hasOwnProperty.call(v,t)||(v[t]=e[t])}var q={},j={0:0},x=[];function H(t){if(q[t])return q[t].exports;var n=q[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=q[e];if(!t)return H;var n=function(n){return t.hot.active?(q[n]?-1===q[n].parents.indexOf(e)&&q[n].parents.push(e):(s=[e],i=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),H(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(t){H[e]=t}}};for(var a in H)Object.prototype.hasOwnProperty.call(H,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&p("prepare"),g++,H.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===f&&(b[e]||O(e),0===g&&0===m&&P())}},n.t=function(e,t){return 1&t&&(e=n(e)),H.t(e,-2&t)},n}(t)),n.l=!0,n.exports}H.m=e,H.c=q,H.d=function(e,t,n){H.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,t){if(1&t&&(e=H(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(H.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)H.d(n,r,function(t){return e[t]}.bind(null,r));return n},H.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(t,"a",t),t},H.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},H.p="./",H.h=function(){return o};var L=window.webpackJsonp=window.webpackJsonp||[],I=L.push.bind(L);L.push=t,L=L.slice();for(var N=0;N<L.length;N++)t(L[N]);var F=I;x.push([122,1]),n()}({122:function(e,t,n){n(123),e.exports=n(316)},309:function(e,t,n){},311:function(e,t,n){var r={"./bgScndVar.png":312,"./cog.png":313,"./css_sprites.png":314,"./helm.png":315};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=311},312:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/img/bgScndVar.png"},313:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/img/cog.png"},314:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/img/css_sprites.png"},315:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/img/helm.png"},316:function(e,t,n){"use strict";n.r(t);n(309);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(){u(".game__userSide"),u(".game__aiSide")}var c=function(){function e(t){r(this,e),null!=t&&(this._parent=t,this._field=document.querySelector(this._parent).querySelector(".game__table"))}return a(e,[{key:"clearField",value:function(){var e=document.querySelectorAll(".game__cell"),t=document.querySelectorAll(".dot"),n=["deadZone","data-deadzone-id","data-class","data-name","data-direction"];t.forEach((function(e){e.remove()})),e.forEach((function(e){e.setAttribute("data-status","empty"),n.forEach((function(t){e.removeAttribute("".concat(t))}))}))}},{key:"getDeadPos",value:function(e,t,n,r){var i,a,o=[],c=[];e.forEach((function(e){i=Number(e.split("-")[0]),a=Number(e.split("-")[1]),"v"==t?(o.push("".concat(i-1,"-").concat(a)),o.push("".concat(i+1,"-").concat(a))):"h"==t&&(o.push("".concat(i,"-").concat(a-1)),o.push("".concat(i,"-").concat(a+1)))})),c.push(o),o.forEach((function(e){i=Number(e.split("-")[0]),a=Number(e.split("-")[1]),"v"==t?(c.push("".concat(i,"-").concat(a-1)),c.push("".concat(i,"-").concat(a+1))):"h"==t&&(c.push("".concat(i-1,"-").concat(a)),c.push("".concat(i+1,"-").concat(a)))})),1==n&&(c.push("".concat(i-1,"-").concat(a-1)),"v"==t?c.push("".concat(i-1,"-").concat(a+1)):c.push("".concat(i+1,"-").concat(a-1)));var s=c.join(",").split(","),l=this.arrFilter(s,e);if(void 0===r)return l;this._setDeadPos(l,r)}},{key:"arrFilter",value:function(e,t){return Array.from(new Set(e)).map((function(e){if(!t.includes(e))return e})).filter((function(e){if(null!=e){var t=e.split("-"),n=t[0],r=t[1];if("0"!=n&&"11"!=n&&"0"!=r&&"11"!=r)return e}}))}},{key:"_setDeadPos",value:function(e,t){var n=this;e.forEach((function(e){var r=n._field.querySelector('[data-cell-id="'.concat(e,'"]'));r&&(r.setAttribute("data-status","deadZone"),r.setAttribute("data-deadZone-id",t))}))}},{key:"appendShip",value:function(e,t,n,r){var i=this;e.forEach((function(e){var a=i._field.querySelector('[data-cell-id="'.concat(e,'"]'));a.setAttribute("data-status","ship"),a.setAttribute("data-class",n),a.setAttribute("data-name",r),a.setAttribute("data-direction",t)})),this.getDeadPos(e,t,n,r)}}]),e}(),s=function(){function e(t,n,i,a){r(this,e),this._type=t,this._id=a,this._field=n,this._table=i,this._initGetData()}return a(e,[{key:"_initGetData",value:function(){this._direction=this._getDirection(),this._availableCells=this._getAvailableCells(),this._randStartPosCell=this._getRandStartPosCell(),this._getNextPos()}},{key:"_getDirection",value:function(){return 0==l(0,1)?"v":"h"}},{key:"_getAvailableCells",value:function(){return document.querySelector(this._table).querySelectorAll('.game__cell[data-status="empty"]')}},{key:"_getRandStartPosCell",value:function(){for(var e=l(0,this._availableCells.length);null==this._availableCells[e];)e=l(0,this._availableCells.length);return this._availableCells[e].dataset.cellId}},{key:"_getNextPos",value:function(){for(var e=this._randStartPosCell.split("-"),t=e[0],n=e[1],r=10-this._type>=t,i=10-this._type>=n,a=[],o=0;o<this._type;o++){var c=[];if("v"==this._direction){if(!r||!this._checkNextPos("".concat(t,"-").concat(n)))return void this._initGetData();c.push(t++,n)}else if("h"==this._direction){if(!i||!this._checkNextPos("".concat(t,"-").concat(n)))return void this._initGetData();c.push(t,n++)}a.push(c.join("-"))}this._field.appendShip(a,this._direction,this._type,this._id)}},{key:"_checkNextPos",value:function(e){return"empty"==document.querySelector(this._table).querySelector('.game__cell[data-cell-id="'.concat(e,'"]')).dataset.status}}]),e}();function l(e,t){return Math.round(Math.random()*(t-e)+e)}function u(e){var t=new c(e),n=1;[4,3,3,2,2,2,1,1,1,1].forEach((function(r){new s(r,t,e,n++)}))}window.addEventListener("load",(function(){(window.navigator.userAgent.indexOf("MSIE ")>-1||window.navigator.userAgent.indexOf("Trident/")>-1)&&(alert("your browser not support"),window.close());o(),document.querySelector(".preloader").remove()}));var d=document.querySelector(".game__start");d.querySelector("button").addEventListener("click",(function(e){e.preventDefault(),d.classList.add("hide"),new O(".game__aiSide","user"),_.play()})),document.querySelector(".mobile-btn").addEventListener("click",(function(){f.classList.contains("hide")?f.classList.remove("hide"):f.classList.add("hide")}));var f=document.querySelector(".mobile-menu");document.querySelectorAll(".restart").forEach((function(e){e.addEventListener("click",h)}));var p=document.querySelector(".showMessage");function h(e){e.preventDefault(),(new c).clearField(),o(),p.classList.add("hide"),f.classList.add("hide"),new O(".game__aiSide","user")}var v=n(88),_=new v.Howl({src:["../assets/audio/music.mp3"]});function y(e){m&&new v.Howl({src:["../assets/audio/".concat(e,".mp3")]}).play()}window.addEventListener("blur",(function(){_.pause()})),document.querySelector(".game__sound").addEventListener("click",g),document.querySelector(".sound-side").addEventListener("click",g);var m=!0;function g(){var e=this.firstElementChild;"bg-soundOn"===e.className?(e.className="bg-soundOff",m=!1,_.pause()):(e.className="bg-soundOn",m=!0,_.play())}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=[],k=!1,S=10,E=10,O=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._table=document.querySelector(t),this._gamer=n,this._allPosCells=this._table.querySelectorAll(".game__cell"),this._target=r,this._initNextStep()}var t,n,r;return t=e,(n=[{key:"_initNextStep",value:function(){if("user"===this._gamer)this._listenFire();else if(void 0===this._target)this._getRandPosForFire();else{var e=this._getCellFromCoord(this._target);this._fire(e)}}},{key:"_initUser",value:function(){new e(".game__aiSide","user")}},{key:"_initAi",value:function(){if(0==w.length)setTimeout((function(){new e(".game__userSide","ai",void 0)}),1e3);else if(!k){var t=this._getCorForFireArr(),n=t[l(0,t.length-1)];setTimeout((function(){new e(".game__userSide","ai",n.dataset.cellId)}),1e3)}}},{key:"_listenFire",value:function(){this._target;var e=this;this._table.addEventListener("click",(function t(n){e._isNotHitten(n.target.dataset.status)&&(e._fire(n.target),e._table.removeEventListener("click",t))}))}},{key:"_fire",value:function(e){this._isHit(e)?(y("hit"),this._markCell(e,"hit"),this._removeArmor(e),this._isSunk(e),"ai"===this._gamer?(this._getLastHittedCell(e),this._initAi()):"user"===this._gamer&&this._initUser()):(y("miss"),this._markCell(e,"miss"),"ai"===this._gamer?(this._initUser(),this._showUserSide()):"user"===this._gamer&&(this._initAi(),this._hideUserSide()))}},{key:"_showUserSide",value:function(){document.querySelector(".game__aiSide").classList.remove("hideSide")}},{key:"_hideUserSide",value:function(){document.querySelector(".game__aiSide").classList.add("hideSide")}},{key:"_markCell",value:function(e,t){e.dataset.status=t}},{key:"_createDot",value:function(){var e=document.createElement("div");return e.classList.add("dot"),e}},{key:"_removeArmor",value:function(e){this._getShip(e).forEach((function(e){e.dataset.class=Number(e.dataset.class)-1}))}},{key:"_gameOver",value:function(e){var t=this;k=!0;var n=document.querySelector(".showMessage");n.querySelector("p").textContent=e,setTimeout((function(){n.classList.remove("hide"),t._refreshGlobalVars()}),500)}},{key:"_refreshGlobalVars",value:function(){S=10,E=10,k=!1}},{key:"_isLose",value:function(){"ai"==this._gamer?0==--E&&this._gameOver("you lose"):"user"==this._gamer&&0==--S&&this._gameOver("you win")}},{key:"_isReadyForFire",value:function(e){var t=e.dataset.status;return"ship"==t||"deadZone"==t||"empty"==t}},{key:"_isHit",value:function(e){return"ship"===e.dataset.status||(e.append(this._createDot()),!1)}},{key:"_isSunk",value:function(e){var t=this,n=this._getShip(e);0==e.dataset.class&&(n.forEach((function(e){t._markCell(e,"sunk")})),this._getDeadPosGamePlay(n,e.dataset.direction,n.length).forEach((function(e){var n=t._getCellFromCoord(e);t._markCell(n,"miss"),n.firstChild||n.append(t._createDot())})),"ai"==this._gamer&&(w=[]),y("sunk"),this._isLose())}},{key:"_isNotHitten",value:function(e){return["empty","deadZone","ship"].some((function(t){return t===e}))}},{key:"_getCorForFireArr",value:function(){var e=this,t=[];w.forEach((function(e){var n=Number(e.dataset.cellId.split("-")[0]),r=Number(e.dataset.cellId.split("-")[1]);if(1==w.length)t.push("".concat(n-1,"-").concat(r)),t.push("".concat(n+1,"-").concat(r)),t.push("".concat(n,"-").concat(r-1)),t.push("".concat(n,"-").concat(r+1));else{var i=w[0].dataset.direction;"v"==i?(t.push("".concat(n-1,"-").concat(r)),t.push("".concat(n+1,"-").concat(r))):"h"==i&&(t.push("".concat(n,"-").concat(r-1)),t.push("".concat(n,"-").concat(r+1)))}}));var n=[];return t.forEach((function(t){var r=document.querySelector(".game__userSide").querySelector('.game__cell[data-cell-id="'.concat(t,'"]'));null!=r&&e._isNotHitten(r.dataset.status)&&n.push(r)})),n}},{key:"_getRandPosForFire",value:function(){var e=this,t=[];this._allPosCells.forEach((function(n){e._isReadyForFire(n)&&t.push(n)}));var n=t[l(0,t.length-1)];this._fire(n)}},{key:"_getLastHittedCell",value:function(e){0!=e.dataset.class&&w.push(e)}},{key:"_getShip",value:function(e){return this._table.querySelectorAll('.game__cell[data-name="'.concat(e.dataset.name,'"]'))}},{key:"_getDeadPosGamePlay",value:function(e,t,n){var r=this._getCoordsFromCells(e);return new c(".".concat(this._table.className)).getDeadPos(r,t,n,void 0)}},{key:"_getCoordsFromCells",value:function(e){var t=[];return e.forEach((function(e){t.push(e.dataset.cellId)})),t}},{key:"_getCellFromCoord",value:function(e){return this._table.querySelector('.game__cell[data-cell-id="'.concat(e,'"]'))}}])&&b(t.prototype,n),r&&b(t,r),e}();var P,D;P=n(311),D={},P.keys().map((function(e,t){D[e.replace("./","")]=P(e)}));e.hot.accept()}});