import{a as p,b as h,c as g}from"./pencil.c8dd302e.js";import{_ as y}from"./trash.2ef4634c.js";import{a as M}from"./index.ba57a07c.js";import{o as a,e as r,f as t,F as c,i as _,t as l,c as k,k as v,j as i,g as d}from"./vendor.2abb9eaf.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./x.2ff6d6c5.js";import"./axios.dad79325.js";const D={components:{Modal:p},data(){return{openModal:!1,tableSubject:["\u4F5C\u8005","\u6A19\u984C","\u63CF\u8FF0","\u5716\u7247","\u6A19\u7C64","\u6642\u9593","\u662F\u5426\u767C\u4F48"],articlesData:[],articlesDetail:[]}},mounted(){M.get("https://vue3-course-api.hexschool.io/v2/api/dobe/admin/articles").then(n=>{console.log("read res.data.articles====>",n.data.articles),this.articlesData=n.data.articles,this.articlesDetail=n.data.articles[0],console.log("read res.data.articles[0]====>",n.data.articles[0]),console.log("read this.articlesDetail====>",this.articlesDetail),console.log("read this.articlesDetail.category====>",this.articlesDetail.category)})},methods:{controlModal(){this.openModal=!0}}},w={class:"max-w-2xl mx-auto lg:max-w-7xl px-4"},C={class:"flex justify-between py-4 mb-8"},B=t("h2",{class:"flex font-black text-2xl tracking-wide"},[t("span",null,"\u6587\u7AE0\u7BA1\u7406")],-1),N=["openModal"],S={class:"flex flex-row"},V={class:"w-full"},A={class:"border-b-2"},F={class:"py-4 px-6"},E={class:"py-4"};function L(n,e,P,q,s,u){const m=h,x=g,b=y,f=p;return a(),r(c,null,[t("div",w,[t("div",C,[B,t("button",{class:"bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700",type:"submit",onClick:e[0]||(e[0]=(...o)=>u.controlModal&&u.controlModal(...o)),openModal:s.openModal}," \u5EFA\u7ACB\u65B0\u6587\u7AE0 ",8,N)]),t("div",S,[t("table",V,[t("thead",null,[t("tr",A,[(a(!0),r(c,null,_(s.tableSubject,o=>(a(),r("td",{class:"font-bold py-2 px-4",key:o+1},l(o),1))),128))])]),t("tbody",null,[(a(!0),r(c,null,_(s.articlesData,o=>(a(),r("tr",{class:"border-b",key:o.id},[t("td",F,l(o.author),1),t("td",null,l(o.title),1),t("td",null,l(o.description),1),t("td",null,l(o.image),1),t("td",null,l(o.tag),1),t("td",null,l(n.create_at),1),t("td",null,l(o.isPublic),1),t("td",null,[t("button",{onClick:e[1]||(e[1]=i(()=>{},["prevent"]))},[d(m,{class:"w-6 h-6 text-cyan-700 mx-auto"})])]),t("td",null,[t("button",{onClick:e[2]||(e[2]=i(()=>{},["prevent"]))},[d(x,{class:"w-6 h-6 text-cyan-700 mx-auto"})])]),t("td",null,[t("button",{onClick:e[3]||(e[3]=i(()=>{},["prevent"]))},[d(b,{class:"w-6 h-6 text-cyan-700 mx-auto"})])])]))),128))]),t("tfoot",null,[t("tr",null,[t("td",E,"\u76EE\u524D\u6709 "+l(s.articlesData.length)+" \u9805",1)])])])])]),s.openModal?(a(),k(f,{key:0,onClose:e[4]||(e[4]=o=>s.openModal=!1),openModal:s.openModal},null,8,["openModal"])):v("",!0)],64)}var Q=j(D,[["render",L]]);export{Q as default};