!function(e){function t(t){for(var r,o,c=t[0],a=t[1],i=t[2],s=0,u=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(D,o)&&D[o]&&u.push(D[o][0]),D[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(H&&H(t);u.length;)u.shift()();return L.push.apply(L,i||[]),n()}function n(){for(var e,t=0;t<L.length;t++){for(var n=L[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==D[c]&&(r=!1)}r&&(L.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!k[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--w&&0===b&&A()}(e,t),r&&r(e,t)};var o,c=!0,a="adb2f0469df21082f6df",i={},s=[],u=[];function l(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,f){case"idle":(v={})[t]=e[t],p("ready");break;case"ready":E(t);break;case"prepare":case"check":case"dispose":case"apply":(y=y||[]).push(t)}},check:O,apply:S,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:i[t]};return o=void 0,n}var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,v,_,y,w=0,b=0,m={},g={},k={};function q(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=P.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p(x()?"ready":"idle"),null;g={},m={},k=e.c,_=e.h,p("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in v={},D)C(n);return"prepare"===f&&0===b&&0===w&&A(),t}));var t}function C(e){k[e]?(g[e]=!0,w++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):m[e]=!0}function A(){p("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then((function(){return S(c)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(q(n));e.resolve(t)}}function S(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");return function t(n){var r,c,u,l,d;function f(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),c=o.id,a=o.chain;if((l=j[c])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var i=0;i<l.parents.length;i++){var s=l.parents[i],u=j[s];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([s]),moduleId:c,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[c]?(n[s]||(n[s]=[]),h(n[s],[c])):(delete n[s],t.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}x();var w={},b=[],m={},g=function(){console.warn("[HMR] unexpected require("+C.moduleId+") to disposed module")};for(var O in v)if(Object.prototype.hasOwnProperty.call(v,O)){var C;d=q(O),C=v[O]?f(d):{type:"disposed",moduleId:O};var A=!1,S=!1,E=!1,L="";switch(C.chain&&(L="\nUpdate propagation: "+C.chain.join(" -> ")),C.type){case"self-declined":n.onDeclined&&n.onDeclined(C),n.ignoreDeclined||(A=new Error("Aborted because of self decline: "+C.moduleId+L));break;case"declined":n.onDeclined&&n.onDeclined(C),n.ignoreDeclined||(A=new Error("Aborted because of declined dependency: "+C.moduleId+" in "+C.parentId+L));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(C),n.ignoreUnaccepted||(A=new Error("Aborted because "+d+" is not accepted"+L));break;case"accepted":n.onAccepted&&n.onAccepted(C),S=!0;break;case"disposed":n.onDisposed&&n.onDisposed(C),E=!0;break;default:throw new Error("Unexception type "+C.type)}if(A)return p("abort"),Promise.reject(A);if(S)for(d in m[d]=v[d],h(b,C.outdatedModules),C.outdatedDependencies)Object.prototype.hasOwnProperty.call(C.outdatedDependencies,d)&&(w[d]||(w[d]=[]),h(w[d],C.outdatedDependencies[d]));E&&(h(b,[C.moduleId]),m[d]=g)}var I,N=[];for(c=0;c<b.length;c++)d=b[c],j[d]&&j[d].hot._selfAccepted&&m[d]!==g&&!j[d].hot._selfInvalidated&&N.push({module:d,parents:j[d].parents.slice(),errorHandler:j[d].hot._selfAccepted});p("dispose"),Object.keys(k).forEach((function(e){!1===k[e]&&function(e){delete D[e]}(e)}));var M,H,T=b.slice();for(;T.length>0;)if(d=T.pop(),l=j[d]){var R={},U=l.hot._disposeHandlers;for(u=0;u<U.length;u++)(r=U[u])(R);for(i[d]=R,l.hot.active=!1,delete j[d],delete w[d],u=0;u<l.children.length;u++){var F=j[l.children[u]];F&&((I=F.parents.indexOf(d))>=0&&F.parents.splice(I,1))}}for(d in w)if(Object.prototype.hasOwnProperty.call(w,d)&&(l=j[d]))for(H=w[d],u=0;u<H.length;u++)M=H[u],(I=l.children.indexOf(M))>=0&&l.children.splice(I,1);p("apply"),void 0!==_&&(a=_,_=void 0);for(d in v=void 0,m)Object.prototype.hasOwnProperty.call(m,d)&&(e[d]=m[d]);var B=null;for(d in w)if(Object.prototype.hasOwnProperty.call(w,d)&&(l=j[d])){H=w[d];var J=[];for(c=0;c<H.length;c++)if(M=H[c],r=l.hot._acceptedDependencies[M]){if(-1!==J.indexOf(r))continue;J.push(r)}for(c=0;c<J.length;c++){r=J[c];try{r(H)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:H[c],error:e}),n.ignoreErrored||B||(B=e)}}}for(c=0;c<N.length;c++){var X=N[c];d=X.module,s=X.parents,o=d;try{P(d)}catch(e){if("function"==typeof X.errorHandler)try{X.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||B||(B=t),B||(B=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||B||(B=e)}}if(B)return p("fail"),Promise.reject(B);if(y)return t(n).then((function(e){return b.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(b)}))}(t=t||{})}function x(){if(y)return v||(v={}),y.forEach(E),y=void 0,!0}function E(t){Object.prototype.hasOwnProperty.call(v,t)||(v[t]=e[t])}var j={},D={0:0},L=[];function P(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=j[e];if(!t)return P;var n=function(n){return t.hot.active?(j[n]?-1===j[n].parents.indexOf(e)&&j[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var c in P)Object.prototype.hasOwnProperty.call(P,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,r(c));return n.e=function(e){return"ready"===f&&p("prepare"),b++,P.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===f&&(m[e]||C(e),0===b&&0===w&&A())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.m=e,P.c=j,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/2048/",P.h=function(){return a};var I=window.webpackJsonp=window.webpackJsonp||[],N=I.push.bind(I);I.push=t,I=I.slice();for(var M=0;M<I.length;M++)t(I[M]);var H=N;L.push([125,1]),n()}({125:function(e,t,n){n(126),e.exports=n(316)},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(50),o=n(45),c=n(63);var a=!1,i=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sound=new c.Howl({src:["../assets/audio/".concat(t,".mp3")],volume:.3}),a&&this._sound.play()},s=(new c.Howl({src:["../assets/audio/move.mp3"]}),new c.Howl({src:["../assets/audio/merge.mp3"]}),document.querySelector("#sound-icon"));function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}s.addEventListener("click",(function(){a=!a,"bg-no__sound"===s.className?s.className="bg-sound":s.className="bg-no__sound"}));var l=!1,d=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._num=t,this._dir=n,this._squaresArr=[],this._table=document.querySelector(".table"),this._square=this._create(),this._squares=document.querySelectorAll(".square"),this._clearMerged(),this._colorChange(this._num,this._square),this._dir?this._initAction():this._append(r),this._saveLocal()}var t,n,c;return t=e,(n=[{key:"_initAction",value:function(){this._squaresArr=this._getSquareArr(),this._clearNewClass(this._squaresArr),this._findFreePos()||this._checkForLose(),this._prepForMove(),l&&(new i("move"),this._append(),l=!1)}},{key:"_saveLocal",value:function(){(new o.a).write()}},{key:"_checkForLose",value:function(){var e=this,t=!1;this._squaresArr=this._getSquareArr(),this._squaresArr.forEach((function(n){var r=e._getAllPosCoords(n.id);r.forEach((function(e){var o=e.querySelector(".square"),c=(null==o?void 0:o.textContent)===n.textContent;(!o||c&&r.length>2)&&(t=!0)}))})),t||this._showMessage("lose")}},{key:"_showMessage",value:function(e){document.querySelector(".".concat(e)).classList.remove("hide")}},{key:"_getAllPosCoords",value:function(e){var t=this,n=[],r=[],o=Number(e[0]),c=Number(e[2]);return 4!==o&&n.push("".concat(o+1,"-").concat(c)),0!==o&&n.push("".concat(o-1,"-").concat(c)),4!==c&&n.push("".concat(o,"-").concat(c+1)),0!==c&&n.push("".concat(o,"-").concat(c-1)),n.forEach((function(e){var n=t._table.querySelector('.table__cell[id="'.concat(e,'"]'));n&&r.push(n)})),r}},{key:"_clearNewClass",value:function(e){e.forEach((function(e){e.classList.remove("new")}))}},{key:"_prepForMove",value:function(){var e=this;this._squaresArr.forEach((function(t,n){var r=e._getSquareArr()[n],o=r.id.split("-");e._getNextCell(e._dir,o,r)}))}},{key:"_clearMerged",value:function(){this._squares.forEach((function(e){e.classList.remove("merged")}))}},{key:"_checkForMerge",value:function(e,t){var n=e.querySelector(".square");return!(!n||n.textContent!==t.textContent)}},{key:"_moveTo",value:function(e,t,n,r){if(e.id!==t.id){l=!0;var o=this._createClone(t),c=this._getStartClonePos(t);this._addClone(o,c),this._addOriginal(e,t),this._moveClone(e,o,c,r),setTimeout((function(){o.remove()}),100),n&&this._merge(t,n)}}},{key:"_createClone",value:function(e){var t=e.cloneNode(!0);t.classList.add("clone");var n=e.getBoundingClientRect().width;return t.style.width="".concat(n,"px"),t.style.height="".concat(n,"px"),t}},{key:"_getStartClonePos",value:function(e){return[e.getBoundingClientRect().top,e.getBoundingClientRect().left]}},{key:"_addClone",value:function(e,t){e.style.top="".concat(t[0],"px"),e.style.left="".concat(t[1],"px"),document.body.append(e)}},{key:"_moveClone",value:function(e,t,n,r){var o=parseInt(getComputedStyle(this._table).borderTopWidth),c=e.getBoundingClientRect().top+o,a=e.getBoundingClientRect().left+o;t.style.transform="ArrowUp"===r||"ArrowDown"===r?"translate(0px,".concat(c-n[0],"px)"):"translate(".concat(a-n[1],"px,0px)")}},{key:"_addOriginal",value:function(e,t){t.classList.add("hide"),e.append(t),t.id=e.id,setTimeout((function(){t.classList.remove("hide")}),40)}},{key:"_merge",value:function(e,t){new i("merge"),t.remove(),e.textContent=2*Number(e.textContent),"2048"===e.textContent&&this._showMessage("win"),e.classList.add("s".concat(e.textContent),"merged"),this._scoreUpdate(e.textContent)}},{key:"_scoreUpdate",value:function(e){var t=document.querySelector("#scoreNum");t.textContent=Number(t.textContent)+Number(e)}},{key:"_isCellFree",value:function(e,t,n,r,o){var c=this._table.querySelector('.table__cell[id="'.concat(e,'"]'));if(c.hasChildNodes()){if(c.hasChildNodes()){var a=c.querySelector(".square");a.textContent!==o||a.classList.contains("merged")?this._corrMov(this._dir,"".concat(t).concat(n),r):this._moveTo(c,r,a,this._dir)}}else this._getNextCell(this._dir,"".concat(t).concat(n),r)}},{key:"_corrMov",value:function(e,t,n){var r,o=Number(t[0]),c=Number(t[1]);switch(e){case"ArrowDown":r="".concat(o-=1,"-").concat(c);break;case"ArrowUp":r="".concat(o+=1,"-").concat(c);break;case"ArrowLeft":c+=1,r="".concat(o,"-").concat(c);break;case"ArrowRight":c-=1,r="".concat(o,"-").concat(c)}var a=this._table.querySelector('.table__cell[id="'.concat(r,'"]'));this._moveTo(a,n,!1,e)}},{key:"_getNextCell",value:function(e,t,n){var r,o=n.textContent,c=Number(t[0]),a=Number(t[1]);switch(r="".concat(c,"-").concat(a),e){case"ArrowDown":if(4!==c)r="".concat(c+=1,"-").concat(a),this._isCellFree(r,c,a,n,o);else{var i=this._table.querySelector('.table__cell[id="'.concat(r,'"]'));this._moveTo(i,n,!1,e)}break;case"ArrowUp":if(1!==c)r="".concat(c-=1,"-").concat(a),this._isCellFree(r,c,a,n,o);else{var s=this._table.querySelector('.table__cell[id="'.concat(r,'"]'));this._moveTo(s,n,!1,e)}break;case"ArrowLeft":if(1!==a)a-=1,r="".concat(c,"-").concat(a),this._isCellFree(r,c,a,n,o);else{var u=this._table.querySelector('.table__cell[id="'.concat(r,'"]'));this._moveTo(u,n,!1,e)}break;case"ArrowRight":if(4!==a)a+=1,r="".concat(c,"-").concat(a),this._isCellFree(r,c,a,n,o);else{var l=this._table.querySelector('.table__cell[id="'.concat(r,'"]'));this._moveTo(l,n,!1,e)}}}},{key:"_getSquareArr",value:function(){var e=[],t=Array.prototype.slice.call(this._squares,0);switch(this._dir){case"ArrowUp":for(var n=this._squares.length-1;n>=0;n-=1)e.unshift(this._squares[n]);break;case"ArrowDown":for(var r=this._squares.length-1;r>=0;r-=1)e.push(this._squares[r]);break;case"ArrowLeft":t.sort((function(e,t){var n=e.id.substr(2,1),r=t.id.substr(2,1);return n>r?1:n<r?-1:0})),e=t;break;case"ArrowRight":t.sort((function(e,t){var n=e.id.substr(2,1),r=t.id.substr(2,1);return n<r?1:n>r?-1:0})),e=t}return e}},{key:"_findFreePos",value:function(){var e=[];return this._cells&&this._cells.forEach((function(t){0===t.childNodes.length&&e.push(t)})),e[Object(r.b)(0,e.length)]}},{key:"_create",value:function(){var e=document.createElement("div");return e.classList.add("square"),e.textContent=this._num,e}},{key:"_colorChange",value:function(e,t){t.classList.add("s".concat(e))}},{key:"_append",value:function(e){if(this._cells=document.querySelectorAll(".table__cell"),e){var t=this._table.querySelector('.table__cell[id="'.concat(e,'"]'));this._square.id=t.id,this._square.classList.add("new"),t.append(this._square)}else this._freeCell=this._findFreePos(),this._freeCell.id&&(this._square.id=this._freeCell.id,this._freeCell.append(this._square),this._square.classList.add("new"))}}])&&u(t.prototype,n),c&&u(t,c),e}();function f(){new d(Object(r.a)()),new d(Object(r.a)())}function p(e){new d(Object(r.a)(),e)}localStorage[2048]||f()},312:function(e,t,n){},313:function(e,t){(window.navigator.userAgent.indexOf("MSIE ")>-1||window.navigator.userAgent.indexOf("Trident/")>-1)&&document.querySelector(".IE").classList.remove("hide")},316:function(e,t,n){"use strict";n.r(t);n(312),n(313);var r=n(17),o=n(45),c=document.querySelector(".settings-icon"),a=document.querySelector(".settings-content");c.addEventListener("click",(function(){a.classList.toggle("hide")}));var i=document.querySelector(".new-game-btn"),s=document.getElementById("new-game"),u=document.getElementById("continue");function l(){document.querySelectorAll(".square").forEach((function(e){e.remove()})),document.querySelector(".score").querySelector("span").textContent=0,document.querySelector(".lose").classList.add("hide"),Object(r.b)(),(new o.a).write()}i.addEventListener("click",l),s.addEventListener("click",l),u.addEventListener("click",(function(){document.querySelector(".win").classList.add("hide"),(new o.a).write()}))},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(17);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,c;return t=e,(n=[{key:"_getData",value:function(){var e=this;return this._data=[],this._score=document.querySelector(".score").querySelector("span").textContent,this._squares=document.querySelectorAll(".square"),this._data.push(this._score),this._squares.forEach((function(t){var n=[];n.push(t.textContent,t.id),e._data.push(n)})),this._data}},{key:"write",value:function(){var e=this._getData(),t=this._stringify(e);localStorage.setItem("2048",t)}},{key:"_stringify",value:function(e){return JSON.stringify(e)}},{key:"_parse",value:function(e){return JSON.parse(e)}},{key:"read",value:function(){var e=localStorage.getItem("2048"),t=this._parse(e);this._updateData(t)}},{key:"_updateData",value:function(e){this._score=document.querySelector("#scoreNum"),this._score.textContent=e.shift(),e.forEach((function(e){new r.a(e[0],void 0,e[1])}))}}])&&o(t.prototype,n),c&&o(t,c),e}();window.onload=function(){var e=new c;localStorage[2048]&&e.read()}},50:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(17);function o(e,t){return Math.floor(Math.random()*(t-e)+e)}function c(){return 0===o(0,2)?2:4}document.addEventListener("keyup",(function(e){["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].forEach((function(t){e.key===t&&Object(r.c)(t)}))}));var a=new e(document.querySelector(".table"));a.get("swipe").set({direction:e.DIRECTION_ALL,pointers:1}),a.on("swipe",(function(e){switch(e.direction){case 8:Object(r.c)("ArrowUp");break;case 16:Object(r.c)("ArrowDown");break;case 2:Object(r.c)("ArrowLeft");break;case 4:Object(r.c)("ArrowRight")}}))}).call(this,n(314))}});