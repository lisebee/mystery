import{o as s,e as n,f as e,g as t,w as m,m as g,h as v}from"./vendor.2abb9eaf.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as f}from"./CardPd.c256d38a.js";import{_ as $,a as x}from"./heart.d1b061a0.js";import{a as b}from"./index.03bb1a20.js";const k={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},w=e("g",{fill:"none"},[e("path",{d:"M13 5l7 7l-7 7M5 5l7 7l-7 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),P=[w];function j(o,c){return s(),n("svg",k,P)}var M={name:"heroicons-outline-chevron-double-right",render:j};const A={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},V=e("g",{fill:"none"},[e("path",{d:"M11 19l-7-7l7-7m8 14l-7-7l7-7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),B=[V];function C(o,c){return s(),n("svg",A,B)}var y={name:"heroicons-outline-chevron-double-left",render:C};const N={},T={class:"pagination flex"},E={class:"page-item disabled"},I={href:"#"},H=e("li",{class:"page-item active"},[e("a",{href:"#"},"1")],-1),R=e("li",{class:"page-item"},[e("a",{href:"#"},"2")],-1),Y={class:"page-item"},S={href:"#"};function q(o,c,d,l,a,p){const i=y,r=M;return s(),n("nav",null,[e("ul",T,[e("li",E,[e("a",I,[t(i)])]),H,R,e("li",Y,[e("a",S,[t(r)])])])])}var z=_(N,[["render",q]]);const D={data(){return{products:null}},mounted(){console.log("this.$route.params=============>",this.$route.params),b.get(`${{}.VITE_APP_API}/api/${{}.VITE_APP_PATH}/products`).then(o=>{this.products=o.data.products,console.log("res.data.products=============>",o.data.products)})}},F={id:"product",class:"page"},G={class:"flex text-3xl font-bold text-slate-900"},J=v(" \u597D\u904B\u5546\u5E97 "),K=g('<div class="container"><input id="search" type="search" placeholder="\u641C\u5C0B" class=""><div class="flex"><div class="mr-4">\u5168\u90E8</div><div class="mr-4">\u62DB\u8CB4\u4EBA</div><div class="mr-4">\u62DB\u8CA1\u904B</div><div class="mr-4">\u62DB\u6843\u82B1</div></div></div>',1),L={class:"container"},O={class:"grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"},Q={class:"flex justify-center py-20"};function U(o,c,d,l,a,p){const i=x,r=$,h=f,u=z;return s(),n("article",F,[t(r,null,{default:m(()=>[e("h1",G,[t(i,{class:"w-10 h-10 text-amber-700"}),J])]),_:1}),K,e("div",L,[e("div",O,[t(h,{products:a.products},null,8,["products"])]),e("div",Q,[t(u)])])])}var te=_(D,[["render",U]]);export{te as default};