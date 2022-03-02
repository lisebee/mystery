<script>
import Counter from '@/components/Counter.vue';
const tableSubject = ["預覽", "品名", "單價", "數量", "編輯"];
const productsData = [];
export default {
  components: { Counter },
  props: ["openCart"],
  data() {
    return {
      tableSubject: tableSubject,
      user: [
        {name: "",
        phone: "",
        email: "",
        add: "",
        }
      ]
    };
  },
};
</script>

<template>
<article id="tool" class="page">
  <Headings>
    <h1 class="flex text-3xl font-bold text-slate-900">
      <dashicons-heart class="w-10 h-10 text-amber-700" /> 購物車
    </h1>
  </Headings>
  <div class="container">
    <div class="flex">
    <!--訂單-->
      <div class="bg-white text-gray p-12">
            <h2 class="text-2xl font-medium">訂單明細</h2>

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
                <td class="py-4 px-6">{{ item.imageUrl }}</td>
                <td>{{ item.category }}{{ item.title }}</td>
                <td>{{ item.origin_price }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.is_enabled }}</td>
                <td>
                  <button @click.prevent="editPD((this.removeID = item.id))">
                    <heroicons-outline-trash class="w-6 h-6 text-cyan-700 mx-auto" />
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>名稱名稱名稱</td>
                <td>3000</td>
                <td><Counter /></td>
                <td></td>
                <td><button @click.prevent="">
                      <heroicons-outline-trash class="w-6 h-6 text-cyan-700 mx-auto"/>
                    </button></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="py-4">總金額 NT$ 3000</td>
              </tr>
              <tr>
                <td class="py-4"><Button>繼續購物</Button></td>
                <td class="py-4"><Button>確認訂單前往結賬</Button></td>
              </tr>
            </tfoot>
          </table>
      </div>

  <!--表單-->
    <div class="bg-white text-gray p-12">
    <h2 class="text-2xl font-medium">填寫收件資訊</h2>
    <form class="py-8 px-16 rounded bg-slate-100/10 drop-shadow-lg">
      <div class="mb-2">
        <label for="inputEmail" class="mb-2 pr-4">註冊 Email</label>
        <input id="inputEmail" type="email" placeholder="name@example.com" v-model="user.email" />
      </div>
      <div class="mb-2">
        <label for="inputName" class="mb-2 pr-4">收件人姓名</label>
        <input id="inputName" type="text" placeholder="請輸入姓名" v-model="user.name" />
      </div>
      <div class="mb-2">
        <label for="inputPhone" class="mb-2 pr-4">收件人電話</label>
        <input id="inputPhone" type="number" placeholder="請輸入電話" v-model="user.phone" />
      </div>
      <div class="mb-2">
        <label for="inputAdd" class="mb-2 pr-4">收件人地址</label>
        <input id="inputAdd" type="text" placeholder="請輸入地址" v-model="user.add" />
      </div>

      <div class="mb-2">
        <label for="inputEmail" class="mb-2 pr-4">留言</label>
        <textarea id="message" class="" cols="30" rows="4" name="" v-model="user.msg"></textarea>
      </div>

      <div class="flex justify-center">
        <Button @click.prevent="login">送出訂單</Button>
      </div>
    </form>
    </div>
    </div>
  </div>
</article>
</template>
