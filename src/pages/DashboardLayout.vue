<template>
  <div class="flex">
    <!--側邊欄選單-->
    <div class="h-screen bg-rosy-900 text-slate-400 py-4 px-6">
      <RouterLink to="/" class="mx-2 hover:text-slate-300">
        <h2 class="flex items-center font-medium text-xl whitespace-nowrap tracking-wide">
          <heroicons-outline-color-swatch class="w-6 h-6 mr-1" /><span>解憂餐酒館</span>
        </h2>
      </RouterLink>

      <div class="border-y-2 border-y-slate-700 py-3 my-4">Hi,Dobe 管理者</div>

      <nav class="flex flex-col">
          <RouterLink to="/admin/products" class="mx-2 hover:text-slate-300">商品管理</RouterLink>
          <RouterLink to="/admin/article" class="mx-2 hover:text-slate-300">文章管理</RouterLink>
      </nav>
    </div>

    <!--內容-->
    <div class="w-full px-7">
      <RouterView></RouterView>
    </div>
  </div>
</template>