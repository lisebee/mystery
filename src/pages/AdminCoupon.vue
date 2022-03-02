<script>
import axios from "axios";
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      openModal: false,
      tableSubject: [
        "名稱",
        "折扣",
        "到期日",
        "啟用",
        "編輯",
        "刪除",
      ],
      couponsData: [],
    };
  },
  mounted() {
    axios.get(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/coupons`)
    .then((res) => {
      console.log("read res.data.coupons====>", res.data.coupons);
      this.couponsData = res.data.coupons;
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
        <span>優惠券管理</span>
      </h2>
      <button
        class="bg-cyan-900 text-cyan-200 rounded py-2 px-4 hover:bg-cyan-700"
        type="submit"
        @click="controlModal"
        :openModal="openModal"
      >
        建立新優惠券
      </button>
    </div>

<div>
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
            <tr class="border-b" v-for="item in couponsData" :key="item.id">
              <td class="py-4 px-6">kkkkkk</td>
              <td>{{ item.title }}</td>
              <td>{{ item.percent }}</td>
              <td>{{ item.due_date }}</td>
              <td>{{ item.is_enabled }}</td>
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
              <td class="py-4">目前有 {{ couponsData.length }} 項</td>
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
