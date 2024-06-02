<template>
  <Transition>
    <section class="category" v-if="useCategory">
      <div class="category__container" v-click-outside="clickOutside">
        <div class="category__position">
          <div class="category__head">
            <h3 class="category__title">разделы каталога</h3>
            <div class="category__close" @click="useCategory = false">
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
          <div class="category__body" ref="categoryContainer">
            <div class="category__animate" :style="'width: 100%'" v-auto-animate>
            <div class="category__item" v-for="(item, idx) in isCategory" :key="idx" draggable="true" @dragstart="dragStart(idx)" @dragover.prevent @drop="drop(idx)">
                <div class="category__info">
                    <img src="~/assets/images/Admin/drag.svg" alt="">
                    <p class="category__name" v-if="!item.status">{{ item.name }}</p>
                    <input class="category__input" v-if="item.status" type="text" placeholder="пусто" v-model="item.name">
                </div>
                <img class="category__trash" src="~/assets/images/Admin/trash.svg" v-if="item.name !== 'все'" alt="" @click="deleteCategory(item.id, idx)">
            </div>
            </div>
            <img
              class="category__circle"
              @click="addCategory"
              src="~/assets/images/Admin/add-circle.svg"
              alt=""
            />
          </div>
        </div>
        <div class="category__footer">
          <UIMyButton
            class="category__btn_save"
            @click="saveCategory"
            :info="'сохранить'"
            :variant="'green'"
          />
          <UIMyButton
            class="category__btn_reset"
            :info="'отмена'"
          />
        </div>
      </div>
    </section>
  </Transition>
</template>

<script>
import CategoryController from "@/http/controllers/CategoryController";
export default {
  data() {
    return {
      useCategory: useCategory(),
      isCategory: useCategoryAll(),
      useStatus: useStatus(),
      draggingItemIndex: null,
      useCategoryId: useCategoryId()
    };
  },
  methods: {
    clickOutside() {
      this.useCategory = false;
    },
    dragStart(index) {
      this.draggingItemIndex = index; 
    },
    drop(index) {
      if (this.draggingItemIndex !== null) {
        const draggedItem = this.isCategory[this.draggingItemIndex];
        this.isCategory.splice(this.draggingItemIndex, 1);
        this.isCategory.splice(index, 0, draggedItem);
        this.draggingItemIndex = null;
      }
    },
    addCategory() {
      const category = {
        name: '',
        status: 'create',
        validatorName: false
      }
      this.isCategory.push(category)

      this.$nextTick(() => {
      setTimeout(() => {
        this.scrollToBottom();
      }, 300); // Задержка в 1000 миллисекунд (1 секунда)
      });
    },
    async saveCategory() {
      this.useStatus = true
      await CategoryController.deleteCategory();
      for( let i = 0; i < this.isCategory.length; i++) {
          let FormObject = {
            name: this.isCategory[i].name
          }
          await CategoryController.createCategory(FormObject)
      }
      this.isCategory = await CategoryController.getAll()
      this.useStatus = null
    },
    deleteCategory(id, index) {
      this.useStatus = 'deleteCategory'
      this.useCategoryId = {
        id: id,
        index: index
      }
    },
    scrollToBottom() {
      const container = this.$refs.categoryContainer;
      container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth'
    });
    },
  },
};
</script>

<style scoped>
.category {
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
.category__container {
  background: #fefaf1;
  margin-left: 50%;
  width: 50%;
  height: 100%;
  box-shadow: 0 5px 10px #cfc9b4;
  overflow: hidden;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: nowrap;
}
.category__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.category__title {
  font-size: 30px;
  font-weight: 600;
}
.category__close {
  transform: translateY(3px);
  transition: all 0.3s ease;
  cursor: pointer;
}
.category__close:hover {
  transform: translateY(3px) scale(1.4);
}
.category__body {
  margin-top: 40px;
  height: 760px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.category__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--brown);
    margin-bottom: 10px;
    cursor: move;
}
.category__item:last-child {
    margin-bottom: 0;
}
.category__name {
    font-size: 20px;
    margin-left: 20px;
    transform: translateY(-2px);  
}
.category__input {
  transform: translateY(-2px);
  font-size: 20px;
  margin-left: 20px;
  background: transparent;
}
.category__input::placeholder {
  color: var(--brown);
}
.category__info {
    display: flex;
    align-items: center;
}
.category__footer {
  display: flex;
  align-items: center;
}
.category__btn_save {
  margin-right: 10px;
  flex-grow: 2;
}
.category__btn_reset {
  width: 550px !important;
  flex-grow: 1;
}
.category__animate {
  display: flex;
  flex-direction: column;
}
.category__circle {
  margin-top: 20px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.category__trash {
  cursor: pointer;
  transition: all .3s ease;
}
.category__trash:hover {
  transform: scale(1.1);
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
