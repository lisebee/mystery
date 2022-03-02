<script>
import axios from "axios";

export default {
  data() {
    return {
      storyData: null,
    };
  },
  mounted() {
    // axios.get(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/articles`)
    //   .then((res) => {
    //       this.storyData=res.data.articles;
    //       console.log("res.data.articles=============>",res.data.articles)
    //   });
  }
};
</script>

<template>
<article id="story" class="page">
  <Headings>
    <h1 class="flex text-3xl font-bold text-slate-900">
      <dashicons-heart class="w-10 h-10 text-amber-700" /> 案例解析
    </h1>
  </Headings>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <StoryCard :storyData="storyData"></StoryCard>
    <StoryCard></StoryCard>
    <StoryCard></StoryCard>
    <StoryCard></StoryCard>
  </div>
  <div class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8"></div>
</article>
</template>

<style scoped></style>
