<script>
import axios from "axios";
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      openModal: false,
      tableSubject: [
        "作者",
        "標題",
        "描述",
        "圖片",
        "標籤",
        "時間",
        "是否發佈",
      ],
      articlesData: [],
      articlesDetail: [],
    };
  },
  mounted() {
    axios.get(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/articles`).then((res) => {
      console.log("read res.data.articles====>", res.data.articles);
      this.articlesData = res.data.articles;
      this.articlesDetail = res.data.articles[0];
      console.log("read res.data.articles[0]====>", res.data.articles[0]);
      console.log("read this.articlesDetail====>", this.articlesDetail);
      console.log(
        "read this.articlesDetail.category====>",
        this.articlesDetail.category
      );
    });
  },
  methods: {
    controlModal() {
      this.openModal = true;
    },
  },
};
</script>

<template>
  <div class="max-w-2xl mx-auto lg:max-w-7xl px-4">
    <div class="flex justify-between py-4 mb-8">
      <h2 class="flex font-black text-2xl tracking-wide">
        <span>文章管理</span>
      </h2>
      <button
        class="bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700"
        type="submit"
        @click="controlModal"
        :openModal="openModal"
      >
        建立新文章
      </button>
    </div>

    <div class="flex flex-row">
        <table class="w-full">
          <thead>
            <tr class="border-b-2">
              <td
                class="font-bold py-2 px-4"
                v-for="th in tableSubject"
                :key="th + 1"
              >
                {{ th }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b" v-for="item in articlesData" :key="item.id">
              <td class="py-4 px-6">{{ item.author }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.image }}</td>
              <td>{{ item.tag }}</td>
              <td>{{ create_at }}</td>
              <td>{{ item.isPublic }}</td>
              <td>
                <button @click.prevent="">
                  <heroicons-outline-pencil
                    class="w-6 h-6 text-cyan-700 mx-auto"
                  />
                </button>
              </td>
              <td>
                <button @click.prevent="">
                  <heroicons-outline-document-text
                    class="w-6 h-6 text-cyan-700 mx-auto"
                  />
                </button>
              </td>
              <td>
                <button @click.prevent="">
                  <heroicons-outline-trash
                    class="w-6 h-6 text-cyan-700 mx-auto"
                  />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td class="py-4">目前有 {{ articlesData.length }} 項</td>
            </tr>
          </tfoot>
        </table>
    </div>
  </div>

  <Modal
    v-if="openModal"
    @close="openModal = false"
    :openModal="openModal"
  ></Modal>
</template>

<style scoped></style>
