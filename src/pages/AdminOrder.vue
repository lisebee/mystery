<script>
import axios from "axios";
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      openModal: false,
      tableSubject: [
        "購買時間",
        "Email",
        "購買款項",
        "應付金額",
        "是否付款",
        "編輯",
      ],
      ordersData: [],
    };
  },
  mounted() {
    axios.get(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/orders`)
    .then((res) => {
      console.log("read res.data.orders====>", res.data.orders);
      this.ordersData = res.data.orders;
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
        <span>訂單管理</span>
      </h2>
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
            <tr class="border-b" v-for="item in ordersData" :key="item.id">
              <td class="py-4 px-6">kkkkk</td>
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
              <td class="py-4">目前有 {{ ordersData.length }} 項產品</td>
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
