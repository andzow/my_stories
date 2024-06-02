<template>
  <section class="productGrid">
    <div class="productGrid__container">
      <table class="productGrid__table" cellpadding="0" cellspacing="0" border="0" v-if="useProducts.length > 0">
        <thead class="productGrid__thead">
          <tr>
            <th class="productGrid__pos productGrid__left">фото</th>
            <th class="productGrid__pos productGrid__left">заголовок</th>
            <th class="productGrid__pos">артикул</th>
            <th class="productGrid__pos">цена</th>
            <th class="productGrid__pos">видимость</th>
            <th class="productGrid__pos">копировать</th>
            <th class="productGrid__pos">удалить</th>
          </tr>
        </thead>
        <tbody class="productGrid__tbody" v-auto-animate>
          <tr class="productGrid__line" v-for="(item, index) in useProducts" :key="index">
            <td class="productGrid__element productGrid__left" >
                <img class="productGrid__img" v-if="imgSrc" :src="imgSrc + item.images[0]" alt="">
            </td>
            <td class="productGrid__element productGrid__left">{{ item.name }}</td>
            <td class="productGrid__element">{{ item.articul }}</td>
            <td v-if="!item.discount" class="productGrid__element">{{ item.price }} ₽</td>
            <td class="productGrid__element">{{ item.discount }} ₽</td>
            <td class="productGrid__element productGrid__element_special">
                <div class="productGrid__back" :class="{productGrid__back_active: item.watch}" @click="item.watch = !item.watch">
                    <div class="productGrid__circle" :class="{productGrid__circle_active: item.watch}"></div>
                </div>
            </td>
            <td class="productGrid__element">
                <img class="productGrid__trash" src="~/assets/images/Admin/copy.svg" alt="">
            </td>
            <td class="productGrid__element">
                <img class="productGrid__trash" src="~/assets/images/Admin/trash.svg" alt="">
            </td>
          </tr>
        </tbody>
      </table>
      <div class="productGrid__position" v-if="useProducts.length === 0">
        <p class="productGrid__empty">Пусто</p>
      </div>
    </div>
  </section>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
import { USE_SERVER } from "~/url";

export default {
  data() {
    return {
      useProducts: [],
      imgSrc: false,
    };
  },
  async mounted() {
    const data = await ProductController.getProductAll(this.$route.query);
    this.useProducts = data.products
    this.imgSrc = USE_SERVER
  },
};
</script>

<style scoped>
.productGrid {
  padding-top: 40px;
}
.productGrid__container {
  padding: 0 20px;
  max-width: 1880px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.productGrid__table {
    width: 100%;
}
.productGrid__img {
    min-height: 120px;
    height: 120px;
}
.productGrid__pos {
    padding: 10px 0 20px;
}
.productGrid__line {
     height: 150px;
     border-bottom: 1px solid var(--brown);
}
.productGrid__element {
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid var(--brown);
}
.productGrid__left {
    text-align: left;
}
.productGrid__trash {
    transition: all .3s ease;
    cursor: pointer;
}
.productGrid__trash:hover {
    transform: scale(1.1);
}
.productGrid__back {
    height: 40px;
    width: 60px;
    background: rgba(0, 0, 0, .1);
    border-radius: 30px;
    position: absolute;
    transition: all .3s ease;
    cursor: pointer;
}
.productGrid__back_active {
    background: #A8AB98;
}
.productGrid__circle {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    background: #fff;
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all .3s ease;
}
.productGrid__circle_active {
    left: calc(100% - 40px);
}
.productGrid__element_special {
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 150px; 
}
.productGrid__position {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.productGrid__empty {
    font-size: 70px;
    font-weight: 500;
}
</style>