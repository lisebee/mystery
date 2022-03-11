import{_ as m}from"./Button.8569883a.js";import{_ as C}from"./Counter.bab7a825.js";import{_ as $,a as B}from"./heart.5e0c94cd.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,e as l,l as w,g as r,w as d,f as t,F as h,i as k,t as e,h as n}from"./vendor.2abb9eaf.js";import{a as g}from"./index.ba57a07c.js";import{e as T}from"./emitter.ae664089.js";import"./axios.dad79325.js";const A={},L={class:"flex justify-between items-center bg-amber-300 py-1 px-8 my-4"};function N(o,c){return i(),l("div",L,[w(o.$slots,"default")])}var V=u(A,[["render",N]]);const q={components:{Button:m},data(){return{pd:"",message:""}},mounted(){console.log("this.$route.params=============>",this.$route.params),g.get(`https://vue3-course-api.hexschool.io/v2/api/dobe/product/${this.$route.params.id}`).then(o=>{this.pd=o.data.product,console.log("res.data=============>",o.data)})},methods:{openAlert(){},addToCart(o,c=1){const p={product_id:o,qty:c};g.post("https://vue3-course-api.hexschool.io/v2/api/dobe/cart",{data:p}).then(a=>{console.log("CART res.data =============>",a.data),console.log("res.data.length =============>",a.data.carts.length);const s=a.data.carts.length;this.qty=a.data.qty,this.message=a.data.message,T.emit("get-cartLength",s)})}}},F={id:"product",class:"page"},S={class:"flex text-3xl font-bold text-slate-900"},U=n(" \u597D\u904B\u5546\u5E97 "),D={class:"container"},E={class:"grid grid-cols-2 gap-y-10"},H={class:"py-14 px-8"},R=["src"],z={class:"flex"},G=["src"],I={class:"py-14 px-8"},J={class:"text-3xl font-bold"},K=t("span",{class:"font-medium mr-4"},"\u7C21\u8FF0",-1),M=t("span",{class:"font-medium mr-4"},"\u552E\u50F9",-1),O=t("span",{class:"font-medium mr-4"},"\u539F\u50F9",-1),P=t("span",{class:"font-medium mr-4"},"\u55AE\u4F4D",-1),Q={class:"flex items-center"},W=n("\u52A0\u5165\u8CFC\u7269\u8ECA"),X=t("hr",null,null,-1),Y=t("h2",null,"\u5546\u54C1\u4ECB\u7D39",-1);function Z(o,c,p,a,s,f){const x=V,v=B,b=$,y=C,j=m;return i(),l(h,null,[r(x,{id:"myAlert"},{default:d(()=>[n(e(s.message),1)]),_:1}),t("article",F,[r(b,null,{default:d(()=>[t("h1",S,[r(v,{class:"w-10 h-10 text-amber-700"}),U])]),_:1}),t("div",D,[t("div",E,[t("div",H,[t("img",{src:s.pd.imageUrl},null,8,R),t("div",z,[(i(!0),l(h,null,k(s.pd.imagesUrl,_=>(i(),l("img",{src:_,key:_,class:"w-28"},null,8,G))),128))])]),t("div",I,[t("span",null,e(s.pd.category),1),t("h1",J,e(s.pd.title),1),t("p",null,[K,n(e(s.pd.description),1)]),t("p",null,[M,n(e(s.pd.price),1)]),t("p",null,[O,n(e(s.pd.origin_price),1)]),t("p",null,[P,n(e(s.pd.unit),1)]),t("p",Q,[r(y),r(j,{onClick:c[0]||(c[0]=_=>f.addToCart(s.pd.id))},{default:d(()=>[W]),_:1})]),X,t("div",null,[Y,t("p",null,e(s.pd.content),1)])])])])])],64)}var it=u(q,[["render",Z]]);export{it as default};