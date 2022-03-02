<script>
const tableSubject = ["預覽", "品名", "單價", "數量", "編輯"];
const productsData = [];
export default {
  props: ["openCart"],
  data() {
    return {
      tableSubject: tableSubject,
    };
  },
  methods:{
    deleteCart(id,qty=1){
      const data = {
        product_id: id,
        qty
      };
      axios.delete(`${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`,{data})
        .then((res) => {
            this.qty=res.data.qty;
            console.log("cart res.data=============>",res.data)
        });
    }
  }
};
</script>

<template>
  <div
    class="bg-brown-200 max-w-fit md:w-[500px] p-4 absolute top-4 right-0 z-40"
  >
    <div class="flex justify-between">
      <h3>購物車商品:</h3>
      <div @click="$emit('close')">
        <heroicons-outline-x class="w-5 h-5 cursor-pointer" />
      </div>
    </div>
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
        <tr class="border-b" v-for="item in productsData" :key="item.id">
          <td class="py-4 px-6">{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.is_enabled }}</td>
          <td>
            <button @click.prevent="deleteCart(item.id)">
              <heroicons-outline-trash class="w-6 h-6 text-cyan-700 mx-auto" />
            </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>名稱名稱名稱</td>
          <td>3000</td>
          <td>3000</td>
          <td></td>
          <td><button @click.prevent="">
                <heroicons-outline-trash class="w-6 h-6 text-cyan-700 mx-auto"/>
              </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="py-4">總金額 NT$</td>
        </tr>
      </tfoot>
    </table>
    <div class="flex justify-between">
      <Button @click="this.$router.push('/product')">繼續購物</Button>
      <Button @click="this.$router.push('/cart')">確認訂單前往結賬</Button>
    </div>
  </div>
</template>
