<template>
  <section class="table">
    <div class="table__container">
      <div class="table__header">
        <div class="table__title">{{ arrObjectSize.title }}</div>
        <div clas="table__close">
          <button
            class="table__close_btn"
            data-cursor-class="animateCursor"
            @click="(useTableSize = false), (useTableMeus = false)"
            ref="tableClose"
          >
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
          </button>
        </div>
      </div>
      <p class="table__text">
        {{ arrObjectSize.text }}
      </p>
      <div class="table__content">
        <CatalogIdTablesMyTableItem :arrTable="arrTable" />
      </div>
      <p class="table__text">*Все размеры указаны в см.</p>
      <div class="table__des">
        <p class="table__des_text table__text">
          Не уверены в правильном выборе размера?<br />Напишите нам или
          позвоните и мы вам поможем
        </p>
        <div class="table__des_btn">
          <UIButtonMyButton
            info="написать в telegram"
            fontSize="22"
            padding="12px 0"
            data-cursor-class="animateCursor"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    arrTable: Array,
    arrObjectSize: Object,
  },
  data() {
    return {
      useTableSize: useTableSize(),
      useTableMeus: useTableMeus(),
      useCursor: useCursor(),
    };
  },
  methods: {
    clickOutside() {
      // setTimeout(() => {
      //   const blockEl = document.querySelector(".table");
      //   document.addEventListener("mouseup", (e) => {
      //     // const click = e.composedPath().includes(blockEl);
      //     // if (!click) {
      //     //   this.useTableSize = false;
      //     //   this.useTableMeus = false;
      //     // }
      //   });
      // }, 0);
    },
  },
  mounted() {
    const body = document.body;
    body.style.overflow = "hidden";
    nextTick(() => {
      this.useCursor = true;
      this.clickOutside();
      this.$refs.tableClose.focus();
    });
  },
};
</script>

<style scoped>
.table {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease;
  z-index: 30;
}
.table__container {
  background: #fefaf1;
  margin-left: 50%;
  width: 50%;
  height: 100%;
  box-shadow: 0 5px 10px #cfc9b4;
  padding: 20px 30px;
  white-space: nowrap;
  overflow: hidden;
  z-index: 35;
}
.table__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.table__title {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  text-transform: lowercase;
}
.table__close_btn {
  display: flex;
}
.table__close_btn {
  transform: translateY(3px);
  transition: all 0.3s ease;
  cursor: pointer;
}
.table__close_btn:hover {
  transform: translateY(3px) scale(1.4);
}
.table__text {
  margin-bottom: 40px;
  font-size: 17px;
  font-weight: 300;
  color: var(--brown);
  text-transform: lowercase;
}
.table__des {
  padding-top: 15px;
  border-top: 1px solid #d2bcae;
}
.table__des_text:last-child {
  margin-bottom: 30px;
}
.table__des_btn {
  max-width: 330px;
}
</style>
