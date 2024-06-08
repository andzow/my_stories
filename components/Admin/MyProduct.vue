<template>
  <Transition>
    <section class="product" v-if="useProduct">
      <div class="product__container" v-click-outside="clickOutside">
        <div class="product__position">
          <div class="product__head">
            <h3 class="product__title" v-show="!useProductUpdate">создание нового товара</h3>
            <h3 class="product__title" v-show="useProductUpdate">редактирование товара</h3>
            <div class="product__close" @click="useProduct = false">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.929688 0.928711L15.0718 15.0708"
                  stroke="#AF9280"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.928175 15.0708L15.0703 0.928711"
                  stroke="#AF9280"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="product__body">
            <p class="product__line">(  1  ) о товаре</p>
            <div class="product__log">
              <div class="product__info">
                <span class="product__prefix">заголовок</span>
                <input class="product__input" type="text" placeholder="название" v-model="isName">
              </div>
              <div class="product__dop">
                <div class="product__info product__info_special">
                  <span class="product__prefix">цена</span>
                  <input class="product__input product__input_special" type="number" placeholder="значение" v-model="isPrice">
                </div>
                <div class="product__info product__info_special">
                  <span class="product__prefix">цена со скидкой</span>
                  <input class="product__input product__input_special" type="number" placeholder="значение" v-model="isDiscount">
                </div>
                <div class="product__info">
                  <span class="product__prefix">артикул</span>
                  <input class="product__input" type="number" placeholder="значение" v-model="isArticul">
                </div>
              </div>
              <div class="product__info">
                <span class="product__prefix">описание</span>
                <textarea class="product__textarea" type="text" placeholder="напишите описание" v-model="isText"/>
              </div>
              <div class="product__info">
                <span class="product__prefix">характеристики</span>
                <textarea class="product__textarea" type="text" placeholder="напишите характеристику" v-model="isCharacteristic"/>
              </div>
              <div class="product__info">
                <span class="product__prefix">Раздел каталога</span>
                <div class="product__box" v-auto-animate>
                  <div class="product__category_item" v-for="(item, idx) in isCategory" :key="idx">
                    <p class="product__category_final">{{ item }}</p>
                    <img src="~/assets/images/Admin/close.svg" v-if="item !== 'все'" class="product__close product__close_category" @click="addCategory(item)"  alt="">
                  </div>
                  <div class="product__menu" :class="{product__menu_active: isActive}">
                    <div class="product__other">
                      <div class="product__status" v-for="(category, i) in useCategoryAll" :key="i">
                        <img class="product__tick" :class="{ 'product__tick_active': isCategory.includes(category.name) }" src="~/assets/images/Admin/tick-circle.svg" alt="">
                        <p class="product__name" @click="addCategory(category.name)">{{ category.name }}</p>
                      </div>
                    </div>
                    <img class="product__add" src="~/assets/images/Admin/add-circle.svg" alt="" @click="isActive = !isActive">
                  </div>
                </div>
                <div class="product__border"></div>
              </div>
            </div>

            <p class="product__line">(  2  ) таблица обмеров изделия</p>
            <div class="product__log" v-auto-animate>
              <div class="product__status" v-for="(measurement, index) in isMeasurement" :key="index">
                <div class="product__info product__info_special product__grow_1">
                  <span class="product__prefix">размер</span>
                  <input class="product__input" type="text" placeholder="пусто" v-model="measurement.name"/>
                </div>
                <div class="product__info product__grow_2">
                  <span class="product__prefix">обмеры изделия размер, см</span>
                  <div class="product__pos" v-auto-animate>
                    <div class="product__description" v-for="(data, ind) in measurement.array" :key="ind">
                      <p class="product__text">{{ data.description }}</p>
                      <p class="product__grand">-</p>
                      <p class="product__text">{{ data.value }}</p>
                      <img class="product__close_special" @click="deleteLine(index, ind)" src="~/assets/images/Admin/close.svg" alt="">
                    </div>
                    <div class="product__copy">
                      <img class="product__svg" @click="addLine(index)" src="~/assets/images/Admin/add-circle.svg" alt="">
                      <img class="product__trash product__svg" @click="remoteSize(index)" src="~/assets/images/Admin/trash.svg" alt="">
                    </div>
                  </div>
                  <div class="product__border"></div>
                </div>
              </div>
              <UIMyButton
                :info="'добавить размер'"
                :variant="'green'"
                :size="'big'"
                @click="addSize"
              />
            </div>

            <p class="product__line">(  3  ) таблица размеров</p>
            <div class="product__log" v-auto-animate>
              <div class="product__status" v-for="(dimension, index) in useDimension" :key="index">
                <div class="product__info product__info_special product__grow_1">
                  <span class="product__prefix">размер</span>
                  <input class="product__input" type="text" placeholder="пусто" v-model="dimension.name"/>
                </div>
                <div class="product__info product__grow_2">
                  <span class="product__prefix">обмеры изделия размер, см</span>
                  <div class="product__pos" v-auto-animate>
                    <div class="product__description" v-for="(dimensionItem, ind) in dimension.array" :key="ind">
                      <p class="product__text">{{ dimensionItem.description }}</p>
                      <p class="product__grand">-</p>
                      <p class="product__text">{{ dimensionItem.value }}</p>
                      <img class="product__close_special" @click="deleteDimension(index, ind)" src="~/assets/images/Admin/close.svg" alt="">
                    </div>
                    <div class="product__copy">
                      <img class="product__svg" @click="addDimension(index)" src="~/assets/images/Admin/add-circle.svg" alt="">
                      <img class="product__trash product__svg" @click="remoteDimension(index)" src="~/assets/images/Admin/trash.svg" alt="">
                    </div>
                  </div>
                  <div class="product__border"></div>
                </div>
              </div>
              <UIMyButton
                :info="'добавить размер'"
                :variant="'green'"
                :size="'big'"
                @click="addSizeDimension"
              />
            </div>

            <p class="product__line">(  4  ) цвет</p>
            <div class="product__log">
              <div class="product__dop product__dop_special">
                <div class="product__info product__info_special">
                  <span class="product__prefix product__prefix_special">цвет</span>
                  <input class="product__input product__input_special" type="text" placeholder="название" v-model="isColor">
                </div>
                <div class="product__info">
                  <span class="product__prefix">цветовое отображение</span>
                  <input class="product__input_color" type="color" v-model="isColorValue">
                  <div class="product__border"></div>
                </div>
              </div>
            </div>

            <p class="product__line">(  5  ) фото контент</p>
            <div class="product__log">
              <div class="product__download">
                <UIMyButton
                  :info="'загрузить фото'"
                  :size="'big'"
                  @click="triggerFileInput"
                />
                <input class="product__image" type="file" @change="saveImages" multiple ref="fileInput"/>
              </div>
              <div class="product__grid" v-auto-animate>
                <div class="product__item" v-for="(item, index) in listImages" :key="index" draggable="true" @dragstart="dragStart(index)" @dragover.prevent @drop="drop(index)">
                  <img class="product__img" :src="item.src" alt="">
                  <img class="product__img_close" @click="deletePhoto(index)" src="~/assets/images/Admin/add-circle.svg" alt="">
                </div>
              </div>
            </div>

            <p class="product__line">(  6  ) видео контент</p>
            <div class="product__log">
              <div class="product__download">
                <UIMyButton
                  :info="'загрузить видео'"
                  :size="'big'"
                  @click="triggerVideoInput"
                />
                <input class="product__image" type="file" @change="saveVideo" ref="videoInput" accept="video/*"/>
              </div>
              <div class="product__grid" v-show="videoUrl">
                  <div class="product__item" v-auto-animate>
                    <video class="product__video" :src="videoUrl" autoplay muted loop pip="false"></video>
                    <img class="product__img_close" @click="deleteVideo()" src="~/assets/images/Admin/add-circle.svg" alt="">
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product__footer">
          <UIMyButton
            v-show="!useProductUpdate"
            class="product__btn_save"
            :info="'сохранить'"
            :variant="'green'"
            @click="sendData"
          />
          <UIMyButton
            v-show="useProductUpdate"
            class="product__btn_save"
            :info="'сохранить'"
            :variant="'green'"
            @click="updateData"
          />
          <UIMyButton
            class="product__btn_reset"
            :info="'отмена'"
          />
        </div>
      </div>
    </section>
  </Transition>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";
export default {
  data() {
    return {
      useProductId: useProductId(),
      useProducts: useProducts(),
      useLine: useLine(),
      useDimensionItem: useDimensionItem(),
      useStatus: useStatus(),
      useProduct: useProduct(),
      useCategoryAll: useCategoryAll(),
      isActive: false,
      draggingItemIndex: null,

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
      useProductUpdate: useProductUpdate(),

      usePage: usePage(),
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    saveImages(event) {
      const files = Array.from(event.target.files).reverse();
      for (let i = 0; i < files.length; i++) {
        this.fileIn.push(files[i]);
        this.listImages.push({ src: URL.createObjectURL(files[i]) });
      }
      event.target.value = '';
    },
    triggerVideoInput() {
      this.$refs.videoInput.click();
    },
    saveVideo(event) {
      const files = event.target.files;
      if (files.length > 0) {
        this.isVideo = files[0]
        this.videoUrl = URL.createObjectURL(this.isVideo); 
      }
      event.target.value = '';
    },
    clickOutside() {
      this.useProduct = false;
    },
    addCategory(name) {
      const index = this.isCategory.indexOf(name);
      if (name !== 'все') {
        if (index !== -1) {
          this.isCategory.splice(index, 1);
        } else {
          this.isCategory.push(name);
        }
      }
    },
    addSize() {
      const size = {
        name: '',
        array: []
      }
      this.isMeasurement.push(size)
    },
    addSizeDimension() {
      const size = {
        name: '',
        array: []
      }
      this.useDimension.push(size)
    },
    remoteSize(index) {
      this.isMeasurement.splice(index, 1)
    },
    addLine(index) {
      this.useStatus = 'addLine'
      this.useLine = index
    },
    deleteLine(index, idx) {
      this.isMeasurement[index].array.splice(idx, 1)
    },
    remoteDimension(index) {
      this.useDimension.splice(index, 1)
    },
    addDimension(index) {
      this.useStatus = 'addDimension'
      this.useDimensionItem = index
    },

    deleteDimension(index, idx) {
      this.useDimension[index].array.splice(idx, 1)
    },
    dragStart(index) {
      this.draggingItemIndex = index; 
    },
    drop(index) {
      if (this.draggingItemIndex !== null && this.draggingItemIndex !== index && this.isValidIndex(this.draggingItemIndex) && this.isValidIndex(index)) {

        const draggedItem = this.listImages[this.draggingItemIndex];
        this.listImages.splice(this.draggingItemIndex, 1);
        this.listImages.splice(index, 0, draggedItem);

    
        const draggedFile = this.fileIn[this.draggingItemIndex];
        this.fileIn.splice(this.draggingItemIndex, 1);
        this.fileIn.splice(index, 0, draggedFile);

        this.draggingItemIndex = null;
      }
    },
    isValidIndex(index) {
      return index >= 0 && index < this.listImages.length;
    },
    deletePhoto(index) {
      this.listImages.splice(index, 1)
      this.fileIn.splice(index, 1)
    },
    deleteVideo() {
      // console.log("AAAA")
      this.isVideo = null
      this.videoUrl = null
    },
    async sendData() {
      this.useProduct = false;
      this.useStatus = true
      const formData = new FormData();
      formData.append("name", this.isName);
      formData.append("price", this.isPrice);
      if (this.isDiscount !== null) {
        formData.append("discount", this.isDiscount);
      }
      formData.append("articul", this.isArticul);
      formData.append("text", this.isText);
      formData.append("characteristic", this.isCharacteristic);
      formData.append("category", JSON.stringify(this.isCategory));
      formData.append("measurement", JSON.stringify(this.isMeasurement));
      formData.append("dimension", JSON.stringify(this.useDimension));
      formData.append("color", this.isColor);
      formData.append("colorValue", this.isColorValue);

      this.fileIn.forEach((file) => {
        formData.append("files", file);
      });

      formData.append("files", this.isVideo)

      await ProductController.createProduct(formData)
      this.resetdata()
      const data = await ProductController.getProductAll(this.$route.query);
      this.useProducts = data.products
      this.usePage = data.totalPages
      this.useStatus = null
    },
    resetdata() {
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
      this.colorValue = '#af9280'
      this.fileIn = []
      this.listImages = []
      this.isVideo = null
      this.videoUrl = null
    },
    async updateData() {
      this.useProduct = false;
      this.useStatus = true
      const formData = new FormData();
      formData.append("id", this.useProductId);
      formData.append("name", this.isName);
      formData.append("price", this.isPrice);
      if (this.isDiscount !== null) {
        formData.append("discount", this.isDiscount);
      }
      formData.append("articul", this.isArticul);
      formData.append("text", this.isText);
      formData.append("characteristic", this.isCharacteristic);
      formData.append("category", JSON.stringify(this.isCategory));
      formData.append("measurement", JSON.stringify(this.isMeasurement));
      formData.append("dimension", JSON.stringify(this.useDimension));
      formData.append("color", this.isColor);
      formData.append("colorValue", this.isColorValue);

      this.fileIn.forEach((file) => {
        formData.append("files", file);
      });

      formData.append("files", this.isVideo)

      await ProductController.updateProduct(formData)
      this.resetdata()
      const data = await ProductController.getProductAll(this.$route.query);
      this.useProducts = data.products
      this.useStatus = null
      this.useProductId = null
    }
  },
};
</script>

<style scoped>
.product {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  z-index: 1000;
  transition: all 0.3s ease;
}
.product__container {
  background: #fefaf1;
  margin-left: 50%;
  width: 50%;
  height: 100%;
  box-shadow: 0 5px 10px #cfc9b4;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: nowrap;
}
.product__head {
  padding: 20px 30px 35px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product__title {
  font-size: 30px;
  font-weight: 600;
}
.product__line {
  font-size: 22px;
  width: 100%;
  padding: 10px 30px;
  background: var(--brown);
  color: #fff;
}
.product__close {
  transform: translateY(3px);
  transition: all 0.3s ease;
  cursor: pointer;
}
.product__close:hover {
  transform: translateY(3px) scale(1.4);
}
.product__body {
  height: 760px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.product__log {
  padding: 25px 30px;
  width: 100%;
}
.product__info {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 25px;
}
.product__prefix {
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 10px;
}
.product__input::placeholder {
  color: var(--brown)
}
.product__input {
  width: 100%;
  background: transparent;
  font-size: 22px;
  border-bottom: 1px solid var(--brown);
  padding-bottom: 8px;
}
.product__textarea {
  width: 100% !important;
  background: transparent;
  font-size: 22px;
  border: 1px solid var(--brown);
  padding: 10px;
  height: 200px !important;
  transition: all .3s ease;
  color: var(--brown);
}
.product__textarea::placeholder {
  color: var(--brown);
}
.product__textarea:focus::placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.product__dop {
  display: flex;
  align-items: center;
  width: 100%;
}
.product__info_special {
  margin-right: 20px;
}
.product__border {
  border-bottom: 1px solid var(--brown);
}
.product__box {
  position: relative;
  display: flex;
  margin-bottom: 8px;
  flex-wrap: wrap;
  padding-right: 40px;
  white-space: nowrap;
}
.product__add {
  position: absolute;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
  right: 0px;
  top: 0px;
}
.product__add:hover {
  transform: scale(1.1);
}
.product__menu {
  position: absolute;
  transition: all .5s ease;
  width: 35px;
  height: 35px;
  bottom: 0;
  right: 0;
  background: #fefaf1;
  display: flex;
}
.product__menu_active {
  width: 326px;
  height: 432px;
  box-shadow: 0 5px 10px #cfc9b4;
  padding: 20px 15px;
}
.product__other {
  display: none;
  overflow-x: hidden;
  overflow-y: auto;
}
.product__menu_active .product__other {
  display: block;
}
.product__menu_active .product__add {
  transform: rotate(45deg);
  top: -45px;
}
.product__name {
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  transform: translateY(3px);
  white-space: pre-wrap;
}
.product__status {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.product__tick {
  opacity: 0;
  transform: scale(0);
  transition: all .3s ease;
}
.product__tick_active {
  opacity: 1;
  transform: scale(1);
}
.product__category_final {
  font-size: 22px;
}
.product__category_item {
  margin-right: 15px;
  display: flex;
  align-items: center;
}
.product__close_category {
  margin-left: 8px;
}
.product__description {
  font-size: 22px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  margin-right: 10px;
}
.product__input_cart {
  border-bottom: none;
}
.product__grow_1 {
  flex-grow: 1;
  width: 200px;
}
.product__grow_2 {
  flex-grow: 10;
}
.product__pos {
  position: relative;
  display: flex;
  min-height: 35px;
  flex-wrap: wrap;
}
.product__copy {
  position: absolute;
  bottom: 10px;
  right: 0;
}
.product__trash {
  margin-left: 10px;
}
.product__svg {
  cursor: pointer;
  transition: all .3s ease;
}
.product__svg:hover {
  transform: scale(1.1);
}
.product__grand {
  margin: 0 5px;
}
.product__close_special {
  transform: translateY(5px) ;
  transition: all .3s ease;
  cursor: pointer;
  margin-left: 5px;
}
.product__close_special:hover {
  transform: scale(1.3) translateY(5px);
}
.product__input_color {
  height: 55px;
  width: 80px;
  margin-bottom: 8px;
}
.product__dop_special {
  align-items: flex-end;
}
.product__prefix_special {
  margin-bottom: 25px;
}
.product__download {
  position: relative;
}
.product__image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  opacity: 0;
}
.product__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product__grid {
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.product__item {
  height: 300px;
  position: relative;
}
.product__img_close {
  position: absolute;
  top: 8px;
  right: 8px;
  transform: rotate(45deg);
  cursor: pointer;
  transition: all .3s ease;
}
.product__img_close:hover {
  transform: rotate(45deg) scale(1.1);
}
.product__video {
  width: 100%;
  pointer-events: none;
}
.product__footer {
  display: flex;
  align-items: center;
  padding: 0 30px 15px 30px;
}
.product__btn_save {
  margin-right: 10px;
  flex-grow: 2;
}
.product__btn_reset {
  width: 550px !important;
  flex-grow: 1;
}
.v-enter-active,
.v-leave-active {
  transition: width 0.7s ease;
}
.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>