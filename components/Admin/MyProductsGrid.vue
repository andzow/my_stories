<template>
  <section class="productGrid">
    <div class="productGrid__container">
      <table class="productGrid__table" cellpadding="0" cellspacing="0" border="0" v-if="useProducts.length > 0">
        <thead class="productGrid__thead">
          <tr>
            <th class="productGrid__pos productGrid__pos_image productGrid__left">фото</th>
            <th class="productGrid__pos productGrid__pos_name productGrid__left">заголовок</th>
            <th class="productGrid__pos">артикул</th>
            <th class="productGrid__pos">цена</th>
            <th class="productGrid__pos">видимость</th>
            <th class="productGrid__pos">копировать</th>
            <th class="productGrid__pos">удалить</th>
          </tr>
        </thead>
        <tbody class="productGrid__tbody">
          <tr class="productGrid__line" v-for="(item, index) in useProducts" :key="index">
            <td class="productGrid__element  productGrid__left" >
                <img class="productGrid__img" v-if="imgSrc" :src="imgSrc + item.images[0]" alt="">
            </td>
            <td class="productGrid__element productGrid__left">
              <p class="productGrid__element_name" @click="updateProduct(item)">{{ item.name }}</p>
            </td>
            <td class="productGrid__element">{{ item.articul }}</td>
            <td v-if="item.discount === null" class="productGrid__element">{{ item.price }} ₽</td>
            <td v-if="item.discount !== null" class="productGrid__element">{{ item.discount }} ₽</td>
            <td class="productGrid__element productGrid__element_special">
                <div class="productGrid__back" :class="{productGrid__back_active: item.watch}" @click="sendWatch(index, item.id)">
                    <div class="productGrid__circle" :class="{productGrid__circle_active: item.watch}"></div>
                </div>
            </td>
            <td class="productGrid__element">
                <img class="productGrid__trash" @click="copyProduct(item)" src="~/assets/images/Admin/copy.svg" alt="">
            </td>
            <td class="productGrid__element">
                <img class="productGrid__trash" src="~/assets/images/Admin/trash.svg" @click="deleteProduct(item.id)" alt="">
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
      useProduct: useProduct(),
      useProducts: useProducts(),
      imgSrc: false,
      useStatus: useStatus(),
      useProductId: useProductId(),

      isName: useName(),
      isPrice: usePrice(),
      isDiscount: useDiscount(),
      isArticul: useArticul(),
      isText: useText(),
      isCharacteristic: useCharacteristic(),
      isCategory: useCategoryArray(),
      isMeasurement: useMeasuremen(),
      useDimension: useDimension(),
      isColor: useColor(),
      isColorValue: useColorValue(),
      listImages: useListImages(),
      fileIn: useFileIn(),
      isVideo: useVideo(),
      videoUrl: useVideoUrl(),
      useProductUpdate: useProductUpdate()
    };
  },
  async mounted() {
    const data = await ProductController.getProductAll(this.$route.query);
    this.useProducts = data.products
    this.imgSrc = USE_SERVER
  },
  methods: {
    async sendWatch(index, idProduct) {
      this.useProducts[index].watch = !this.useProducts[index].watch
      this.useStatus = true
      const dataObject = {
        id: idProduct,
        watch: this.useProducts[index].watch
      }
      await ProductController.updateProductWatch(dataObject)
      this.useStatus = null
    },
    async copyProduct(item) {
      this.resetProduct()
      this.useProduct = true
      this.useProductUpdate = false
      this.isName = item.name
      this.isPrice = item.price
      this.isDiscount = item.discount
      this.isArticul = item.articul
      this.isText = item.text
      this.isCharacteristic = item.characteristic
      this.isCategory = JSON.parse(item.category)
      this.isMeasurement = JSON.parse(item.measurement)
      this.useDimension = JSON.parse(item.dimension)
      this.isColor = item.color
      this.isColorValue = item.colorValue

      for (const file of item.images) {
        const imageUrl = this.imgSrc + file
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const imageFile = new File([blob], file.split('/').pop(), { type: blob.type });
        this.fileIn.push(imageFile)
        this.listImages.push({ src: URL.createObjectURL(imageFile) });
      }

      const videoUrl = this.imgSrc + item.video
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const videoFile = new File([blob], item.video.split('/').pop(), { type: blob.type });
      this.isVideo = videoFile
      this.videoUrl = URL.createObjectURL(videoFile) 
    },
    updateProduct(item) {
      this.copyProduct(item)
      this.useProductUpdate = true
      this.useProductId = item.id
    },
    resetProduct() {
      this.isName = ''
      this.isPrice = null
      this.isDiscount = null
      this.isArticul = ''
      this.isText = ''
      this.isCharacteristic = ''
      this.isCategory = ['все']
      this.isMeasurement = [{name: '', array: []}]
      this.useDimension = [{name: '', array: []}]
      this.isColor = ''
      this.isColorValue = '#af9280'
      this.fileIn = []
      this.listImages = []
      this.isVideo = null
      this.videoUrl = null 
    },
    deleteProduct(index) {
      this.useStatus = 'deleteProduct'
      this.useProductId = index
    }
  }
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
.productGrid__pos_image {
  width: 250px;
}
.productGrid__pos_name {
  width: 30%;
}
.productGrid__element_name {
  cursor: pointer;
  transition: all .3s ease;
}
.productGrid__element_name:hover {
  transform: scale(1.04);
}
</style>