import{r as u,o as l,c as f,a as h,b as E,d as A}from"./vendor.2abb9eaf.js";const L=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};L();const v={setup(s){return(i,c)=>{const r=u("RouterView");return l(),f(r)}}},y="modulepreload",a={},P="/mystery/",t=function(i,c){return!c||c.length===0?i():Promise.all(c.map(r=>{if(r=`${P}${r}`,r in a)return;a[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":y,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((m,p)=>{n.addEventListener("load",m),n.addEventListener("error",p)})})).then(()=>i())},O=[{path:"/",name:"FrontendLayout",component:()=>t(()=>import("./FrontendLayout.d1efbd00.js"),["assets/FrontendLayout.d1efbd00.js","assets/vendor.2abb9eaf.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Button.8569883a.js","assets/trash.2ef4634c.js","assets/x.2ff6d6c5.js","assets/color-swatch.a3527b6d.js","assets/index.ba57a07c.js","assets/axios.dad79325.js","assets/emitter.ae664089.js"]),children:[{path:"",name:"Home",component:()=>t(()=>import("./Home.8839559a.js"),["assets/Home.8839559a.js","assets/Home.160c49e0.css","assets/vendor.2abb9eaf.js","assets/Button.8569883a.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"about",name:"About",component:()=>t(()=>import("./About.4fadcdb5.js"),["assets/About.4fadcdb5.js","assets/CardPd.2651ed1f.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.2abb9eaf.js","assets/heart.5e0c94cd.js"])},{path:"product",name:"Product",component:()=>t(()=>import("./index.c6d512eb.js"),["assets/index.c6d512eb.js","assets/vendor.2abb9eaf.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/CardPd.2651ed1f.js","assets/heart.5e0c94cd.js","assets/index.ba57a07c.js","assets/axios.dad79325.js"])},{path:"product/:id",name:"Product_id",component:()=>t(()=>import("./_id.5ed18d50.js"),["assets/_id.5ed18d50.js","assets/Button.8569883a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.2abb9eaf.js","assets/Counter.bab7a825.js","assets/heart.5e0c94cd.js","assets/index.ba57a07c.js","assets/axios.dad79325.js","assets/emitter.ae664089.js"])},{path:"story",name:"Stories",component:()=>t(()=>import("./index.3d4f007b.js"),["assets/index.3d4f007b.js","assets/Button.8569883a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.2abb9eaf.js","assets/heart.5e0c94cd.js","assets/axios.dad79325.js"])},{path:"story/:id",name:"Story",component:()=>t(()=>import("./_id.6dda22bf.js"),["assets/_id.6dda22bf.js","assets/heart.5e0c94cd.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.2abb9eaf.js","assets/index.ba57a07c.js","assets/axios.dad79325.js","assets/Button.8569883a.js"])},{path:"tool",name:"Tool",component:()=>t(()=>import("./Tool.464087ce.js"),["assets/Tool.464087ce.js","assets/Tool.d71116df.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.2abb9eaf.js","assets/heart.5e0c94cd.js"])},{path:"faq",name:"Faq",component:()=>t(()=>import("./Faq.5509794f.js"),["assets/Faq.5509794f.js","assets/heart.5e0c94cd.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.2abb9eaf.js"])},{path:"cart",name:"Cart",component:()=>t(()=>import("./Cart.88f950e8.js"),["assets/Cart.88f950e8.js","assets/Button.8569883a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.2abb9eaf.js","assets/Counter.bab7a825.js","assets/trash.2ef4634c.js","assets/heart.5e0c94cd.js"])}]},{path:"/Login",name:"Login",component:()=>t(()=>import("./Login.5041893b.js"),["assets/Login.5041893b.js","assets/Button.8569883a.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.2abb9eaf.js","assets/index.ba57a07c.js","assets/axios.dad79325.js"])},{path:"/admin",name:"Admin",component:()=>t(()=>import("./DashboardLayout.885f45c9.js"),["assets/DashboardLayout.885f45c9.js","assets/color-swatch.a3527b6d.js","assets/vendor.2abb9eaf.js","assets/index.ba57a07c.js","assets/axios.dad79325.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{path:"product",name:"AdminProduct",component:()=>t(()=>import("./AdminProduct.b26704a4.js"),["assets/AdminProduct.b26704a4.js","assets/pencil.72de228e.js","assets/vendor.2abb9eaf.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/x.2ff6d6c5.js","assets/index.ba57a07c.js","assets/axios.dad79325.js","assets/trash.2ef4634c.js"])},{path:"article",name:"AdminArticle",component:()=>t(()=>import("./AdminArticle.470cffdf.js"),["assets/AdminArticle.470cffdf.js","assets/pencil.72de228e.js","assets/vendor.2abb9eaf.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/x.2ff6d6c5.js","assets/index.ba57a07c.js","assets/axios.dad79325.js","assets/trash.2ef4634c.js"])},{path:"coupon",name:"AdminCoupon",component:()=>t(()=>import("./AdminCoupon.5dd9a1a6.js"),["assets/AdminCoupon.5dd9a1a6.js","assets/pencil.72de228e.js","assets/vendor.2abb9eaf.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/x.2ff6d6c5.js","assets/index.ba57a07c.js","assets/axios.dad79325.js","assets/trash.2ef4634c.js"])},{path:"order",name:"AdminOrder",component:()=>t(()=>import("./AdminOrder.e3a38e2d.js"),["assets/AdminOrder.e3a38e2d.js","assets/pencil.72de228e.js","assets/vendor.2abb9eaf.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/x.2ff6d6c5.js","assets/index.ba57a07c.js","assets/axios.dad79325.js","assets/trash.2ef4634c.js"])}]}],d=h({history:E(),routes:O});d.beforeEach(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.pageYOffset=0});const _=A(v);_.use(d);_.mount("#app");