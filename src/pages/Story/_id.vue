<script>
import axios from "axios";
import Button from '@/components/Button.vue';

export default {
  components: { Button },
  data() {
    return {
      articleDetail: "",
    };
  },
  mounted() {
    //老師寫法 const {id} = this.$route.params
    axios.get(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/article/${this.$route.params.id}`)
      .then((res) => {
          this.articleDetail=res.data.article;
          console.log("res.data=============>",res.data)
        });
  }
};
</script>

<template>
<article id="product" class="page">
  <Headings>
    <h1 class="flex text-3xl font-bold text-slate-900">
      <dashicons-heart class="w-10 h-10 text-amber-700" /> 好運商店
    </h1>
  </Headings>
  
  <div class="container">
    <div class="grid grid-cols-2 gap-y-10">
      <div class="py-14 px-8">
        <img :src="articleDetail.image" />
      </div>
      <div class="py-14 px-8">
        <span>{{articleDetail.tag}}</span>
        <h1 class="text-3xl font-bold">{{articleDetail.title}}</h1>
        <p>{{articleDetail.author}}</p>
        {{articleDetail.create_at}}
        {{articleDetail.description}}
        <hr>
        <div>
          <h2>商品介紹</h2>
          <p>{{articleDetail.content}}</p>
        </div>

      </div>
    </div>

  </div>
</article>
</template>

<style scoped></style>
