<script>
import axios from "axios";

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      //取token
      const token = document.cookie.replace(
        /(?:(?:^|.*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1"
      );
      if (token){
        axios.defaults.headers.common.Authorization = `${token}`; 
        
        const api = `${import.meta.env.VITE_APP_API}/api/user/check`;

        axios
          .post(api, { api_token: this.token })  //token沒過期可以進入
          .then(() => {
            this.checkSuccess = true;
          })
          .catch((err)=>{
            alert(err.data.message);
            this.$router.push("/login");
          });
      }else{
        alert("您尚未登入");
        this.$router.push("/login");
      }
    },
    signout(){
      axios.post(`${import.meta.env.VITE_APP_API}/logout`)
      .then((res) => {
        console.log("read res====>", res.data);
      });
    }
  }
};
</script>

<template>
  <div class="flex">
    <!--側邊欄選單-->
    <div class="h-screen bg-rosy-900 text-slate-400 py-4 px-6">
      <RouterLink to="/" class="mx-2 hover:text-slate-300">
        <h2 class="flex items-center font-medium text-xl whitespace-nowrap tracking-wide">
          <heroicons-outline-color-swatch class="w-6 h-6 mr-1" /><span>解憂餐酒館</span>
        </h2>
      </RouterLink>

      <div class="border-y-2 border-y-slate-700 py-3 my-4">
      <div>Hi,Dobe 管理者</div>
      <RouterLink to="/" class="mx-2 hover:text-slate-300" @click.prevent="signout">登出</RouterLink>
      </div>

      <nav class="flex flex-col">
          <RouterLink to="/admin/product" class="mx-2 hover:text-slate-300">商品管理</RouterLink>
          <RouterLink to="/admin/order" class="mx-2 hover:text-slate-300">訂單管理</RouterLink>
          <RouterLink to="/admin/coupon" class="mx-2 hover:text-slate-300">優惠券管理</RouterLink>
          <RouterLink to="/admin/article" class="mx-2 hover:text-slate-300">文章管理</RouterLink>
      </nav>
    </div>

    <!--內容-->
    <div class="w-full px-7">
      <RouterView v-if="checkSuccess"></RouterView>
    </div>
  </div>
</template>