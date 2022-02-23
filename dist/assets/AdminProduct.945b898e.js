import{_ as j,a as M,b as $,c as I}from"./pencil.6fa08dc3.js";import{_ as V}from"./trash.2ef4634c.js";import{a as u}from"./index.03bb1a20.js";import{_ as C}from"./x.2ff6d6c5.js";import{o as c,e as a,f as e,g as h,j as m,s as p,v as _,u as P,k as b,c as k,t as i,F as f,i as w,h as T}from"./vendor.2abb9eaf.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const A={props:["openModal"],data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",imgsIndex:0,pd:{title:"",category:"",unit:"",origin_price:"",price:"",description:"",content:"",is_enabled:!1,imageUrl:"",imagesUrl:[]}}},methods:{appendInput(){console.log("count===========> ok"),this.imgsIndex+=1,console.log("this.imgsIndex===========>",this.imgsIndex)},addPD(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");u.defaults.headers.common.Authorization=n;const t={data:{title:this.pd.title,category:this.pd.category,unit:this.pd.unit,origin_price:this.pd.origin_price,price:this.pd.price,description:this.pd.description,content:this.pd.content,is_enabled:this.pd.is_enabled,imageUrl:this.pd.imageUrl,imagesUrl:this.pd.imagesUrl}};u.post(`${this.url}/api/${this.path}/admin/product`,t).then(d=>{console.log("res.data====>",d.data)}).catch(d=>console.log(d))}}},z={key:0,class:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"},B={class:"relative w-[1000px] mx-auto bg-slate-700 border border-slate-500 rounded p-10 mt-4"},N={class:"grid grid-cols-2"},S={class:"py-4 px-8"},F={class:"flex justify-between items-center w-full mb-2"},G=e("label",{for:"title",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u540D\u7A31",-1),E={class:"flex justify-between items-center w-full mb-2"},L=e("label",{for:"category",class:"w-1/4 font-bold text-white"},"\u5206\u985E",-1),q={class:"flex justify-between items-center w-full mb-2"},H=e("label",{for:"unit",class:"w-1/4 font-bold text-white"},"\u55AE\u4F4D",-1),J={class:"flex justify-between items-center w-full mb-2"},K=e("label",{for:"origin_price",class:"w-1/4 font-bold text-white"},"\u539F\u50F9",-1),O={class:"flex justify-between items-center w-full mb-2"},Q=e("label",{for:"price",class:"w-1/4 font-bold text-white"},"\u552E\u50F9",-1),R={class:"flex justify-between items-center w-full mb-2"},W=e("label",{for:"description",class:"w-1/4 font-bold text-white"},"\u7522\u54C1\u63CF\u8FF0",-1),X={class:"flex justify-between items-center w-full mb-2"},Y=e("label",{for:"content",class:"w-1/4 font-bold text-white"},"\u8AAA\u660E\u5167\u5BB9",-1),Z={class:"flex justify-start items-center w-full mb-2"},ee=e("label",{for:"is_enabled",class:"w-1/4 font-bold text-white"},"\u662F\u5426\u555F\u7528",-1),te={class:"py-4 px-8"},oe={class:"flex justify-between items-center w-full mb-2"},se=e("label",{for:"imageUrl",class:"w-1/4 font-bold text-white"},"\u5C01\u9762\u5716\u7247",-1),le={class:"flex justify-center"},ne=["src"],ie={class:"flex justify-between items-center w-full mb-2"},de=e("label",{for:"",class:"w-1/4 font-bold text-white"},"\u9644\u52A0\u5716\u7247",-1),ce=["disabled"],re=e("div",{class:"flex justify-between items-center w-60 mx-auto mt-10"},[e("button",{type:"button",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u53D6\u6D88 "),e("button",{type:"submit",class:"font-bold bg-slate-400 rounded py-2 px-8 hover:bg-amber-300"}," \u78BA\u8A8D ")],-1);function ae(n,t,d,g,o,r){const x=C,y=j;return(d.openModal=!0)?(c(),a("div",z,[e("div",B,[e("button",{type:"button",class:"absolute top-3 right-3",onClick:t[0]||(t[0]=s=>n.$emit("close"))},[h(x,{class:"w-5 h-5 text-white"})]),e("form",{onSubmit:t[11]||(t[11]=m((...s)=>r.addPD&&r.addPD(...s),["prevent"]))},[e("div",N,[e("div",S,[e("div",F,[G,p(e("input",{id:"title",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u540D\u7A31","onUpdate:modelValue":t[1]||(t[1]=s=>o.pd.title=s)},null,512),[[_,o.pd.title]])]),e("div",E,[L,p(e("input",{id:"category",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u54C1\u5206\u985E","onUpdate:modelValue":t[2]||(t[2]=s=>o.pd.category=s)},null,512),[[_,o.pd.category]])]),e("div",q,[H,p(e("input",{id:"unit",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u55AE\u4F4D","onUpdate:modelValue":t[3]||(t[3]=s=>o.pd.unit=s)},null,512),[[_,o.pd.unit]])]),e("div",J,[K,p(e("input",{id:"origin_price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u539F\u50F9","onUpdate:modelValue":t[4]||(t[4]=s=>o.pd.origin_price=s)},null,512),[[_,o.pd.origin_price]])]),e("div",O,[Q,p(e("input",{id:"price",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",type:"number",placeholder:"\u8ACB\u8F38\u5165\u552E\u50F9","onUpdate:modelValue":t[5]||(t[5]=s=>o.pd.price=s)},null,512),[[_,o.pd.price]])]),e("div",R,[W,p(e("textarea",{id:"description",name:"description",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u7522\u54C1\u63CF\u8FF0","onUpdate:modelValue":t[6]||(t[6]=s=>o.pd.description=s)},`
              `,512),[[_,o.pd.description]])]),e("div",X,[Y,p(e("textarea",{id:"content",name:"content",class:"w-3/4 caret-red-500 bg-sky-100/75 rounded",rows:"3",placeholder:"\u8ACB\u8F38\u5165\u8AAA\u660E\u5167\u5BB9","onUpdate:modelValue":t[7]||(t[7]=s=>o.pd.content=s)},`
              `,512),[[_,o.pd.content]])]),e("div",Z,[ee,p(e("input",{id:"is_enabled",type:"checkbox",class:"bg-sky-100/75 rounded","onUpdate:modelValue":t[8]||(t[8]=s=>o.pd.is_enabled=s)},null,512),[[P,o.pd.is_enabled]])])]),e("div",te,[e("div",oe,[se,p(e("input",{id:"imageUrl",class:"w-3/4 bg-sky-100/75 rounded",type:"text",placeholder:"\u8ACB\u8F38\u5165\u5716\u7247\u9023\u7D50","onUpdate:modelValue":t[9]||(t[9]=s=>o.pd.imageUrl=s)},null,512),[[_,o.pd.imageUrl]])]),e("div",le,[o.pd.imageUrl?(c(),a("img",{key:0,src:o.pd.imageUrl,class:"h-32"},null,8,ne)):b("",!0)]),e("div",ie,[de,e("button",{class:"w-3/4 text-white py-2 border-2 hover:bg-slate-800",onClick:t[10]||(t[10]=(...s)=>r.appendInput&&r.appendInput(...s)),disabled:o.imgsIndex==5}," \u65B0\u589E\u5716\u7247 ",8,ce)]),o.imgsIndex>=1?(c(),k(y,{key:0,imgsIndex:o.imgsIndex,onGetImgVal:o.pd.imagesUrl},null,8,["imgsIndex","onGetImgVal"])):b("",!0)])]),re],32)])])):b("",!0)}var pe=D(A,[["render",ae]]);const ue={components:{Modal:pe},name:"dashboard-product",data(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"dobe",openModal:!1,tableSubject:["\u5206\u985E","\u7522\u54C1\u540D\u7A31","\u539F\u50F9","\u552E\u50F9","\u555F\u7528","\u7DE8\u8F2F","\u7D30\u7BC0","\u522A\u9664"],productsData:[],productDetail:[]}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("token====>",n),u.defaults.headers.common.Authorization=n,u.get(`${this.url}/api/${this.path}/admin/products`).then(t=>{console.log("read res.data.products====>",t.data.products),this.productsData=t.data.products,this.productDetail=t.data.products[0],console.log("read res.data.products[0]====>",t.data.products[0]),console.log("read this.productDetail====>",this.productDetail),console.log("read this.productDetail.category====>",this.productDetail.category)})},watch:{},methods:{controlModal(){this.openModal=!0},readPD(n){console.log("read id====>",n);const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");u.defaults.headers.common.Authorization=t,u.get(`${this.url}/api/${this.path}/admin/products`).then(d=>{console.log("read res.data====>",d.data),this.productDetail=d.data.products.filter(g=>g.id==n)})},removePD(n){const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");u.defaults.headers.common.Authorization=t,u.delete(`${this.url}/api/${this.path}/admin/product/${n}`).then(d=>{console.log("res.data====>",d.data),window.location.href="/#/dashboard"})}}},_e={class:"max-w-2xl mx-auto lg:max-w-7xl px-4"},he={class:"flex justify-between py-4 mb-8"},me=e("h2",{class:"flex font-black text-2xl tracking-wide"},[e("span",null,"\u5546\u54C1\u7BA1\u7406")],-1),be=["openModal"],fe={class:"flex flex-row"},ge={class:"basis-1/4"},xe={class:"bg-slate-200 drop-shadow-2xl rounded p-4"},ye=e("h2",{class:"font-bold text-xl mb-4"},"\u7522\u54C1\u7D30\u7BC0",-1),we={class:"flex justify-center"},ve=["src"],ke={class:"text-left"},De={class:"font-bold text-l"},Ue={class:"inline-block text-xs bg-slate-700 text-white py-1 px-4"},je={class:"my-2"},Me={class:"my-2"},$e={class:"my-2"},Ie={class:"font-bold mr-2"},Ve={class:"line-through mr-2"},Ce=T("\u500B/\u5143 "),Pe={class:"flex flex-wrap"},Te=["src"],Ae={class:"basis-3/4 pl-4"},ze={class:"w-full"},Be={class:"border-b-2"},Ne={class:"py-4 px-6"},Se=["onClick"],Fe=["onClick"],Ge=["onClick"],Ee={class:"py-4"};function Le(n,t,d,g,o,r){const x=$,y=I,s=V,U=M;return c(),a(f,null,[e("div",_e,[e("div",he,[me,e("button",{class:"bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700",type:"submit",onClick:t[0]||(t[0]=(...l)=>r.controlModal&&r.controlModal(...l)),openModal:o.openModal}," \u5EFA\u7ACB\u65B0\u7522\u54C1 ",8,be)]),e("div",fe,[e("div",ge,[e("div",xe,[ye,e("div",null,[e("div",we,[e("img",{src:o.productDetail.imageUrl,class:"h-40 w-auto"},null,8,ve)]),e("div",ke,[e("h3",De,i(o.productDetail.title),1),e("span",Ue,i(o.productDetail.category),1),e("p",je,i(o.productDetail.description),1),e("p",Me,i(o.productDetail.content),1),e("p",$e,[e("span",Ie,i(o.productDetail.price),1),e("span",Ve,i(o.productDetail.origin_price),1),Ce])]),e("div",Pe,[(c(!0),a(f,null,w(o.productDetail.imagesUrl,l=>(c(),a("img",{src:l,class:"h-9 border border-slate-50",key:l},null,8,Te))),128))])])])]),e("div",Ae,[e("table",ze,[e("thead",null,[e("tr",Be,[(c(!0),a(f,null,w(o.tableSubject,l=>(c(),a("td",{class:"font-bold py-2 px-4",key:l+1},i(l),1))),128))])]),e("tbody",null,[(c(!0),a(f,null,w(o.productsData,l=>(c(),a("tr",{class:"border-b",key:l.id},[e("td",Ne,i(l.category),1),e("td",null,i(l.title),1),e("td",null,i(l.origin_price),1),e("td",null,i(l.price),1),e("td",null,i(l.is_enabled),1),e("td",null,[e("button",{onClick:m(v=>n.editPD(this.removeID=l.id),["prevent"])},[h(x,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Se)]),e("td",null,[e("button",{onClick:m(v=>r.readPD(l.id),["prevent"])},[h(y,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Fe)]),e("td",null,[e("button",{onClick:m(v=>r.removePD(this.removeID=l.id),["prevent"])},[h(s,{class:"w-6 h-6 text-cyan-700 mx-auto"})],8,Ge)])]))),128))]),e("tfoot",null,[e("tr",null,[e("td",Ee,"\u76EE\u524D\u6709 "+i(o.productsData.length)+" \u9805\u7522\u54C1",1)])])])])])]),o.openModal?(c(),k(U,{key:0,onClose:t[1]||(t[1]=l=>o.openModal=!1),openModal:o.openModal},null,8,["openModal"])):b("",!0)],64)}var Re=D(ue,[["render",Le]]);export{Re as default};
