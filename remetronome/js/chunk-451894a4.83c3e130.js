(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-451894a4"],{"0ed0":function(t,e,n){"use strict";var r=n("5530"),i=(n("d3b7"),n("159b"),n("b64b"),n("b0c0"),{computed:{properties:function(){var t=this,e={};return Object.keys(this.propsToMerge).forEach((function(n){var r=t.$options.name;r===n&&(e=t.propsToMerge[n])})),Object(r["a"])(Object(r["a"])({},this.$props),e)}},props:{propsToMerge:{type:Object,default:function(){return{}}}}});e["a"]=i},8345:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"neuro-button",class:t.computedClasses,on:{click:function(e){return e.preventDefault(),t.clickHandler.apply(null,arguments)}}},[n("span",[t._v(t._s(t.properties.title))])])},i=[],s=n("0ed0"),o={mixins:[s["a"]],data:function(){return{localIsActive:!1}},props:{isActive:{type:Boolean,default:function(){return!1}},returningPressed:{type:Boolean,default:function(){return!1}},title:{type:String,default:function(){return""}}},computed:{computedClasses:function(){var t=this.properties.returningPressed?this.localIsActive:this.properties.isActive;return t?"neuro-button--pressed":""}},methods:{clickHandler:function(){this.$emit("click-handler"),this.$emit("neuro-button-handler",this.properties.title),this.returningPressed&&this.blinkButton()},blinkButton:function(){var t=this;this.localIsActive=!0,setTimeout((function(){t.localIsActive=!1}),50)}}},u=o,c=n("2877"),l=Object(c["a"])(u,r,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-451894a4.83c3e130.js.map