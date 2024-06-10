<template>
  <section class="main">
    <div class="main__content">
      <div class="main__menu">
        <CatalogIdMySlider />
        <CatalogIdMyAbout />
      </div>
    </div>
  </section>
  <Transition>
    <CatalogIdTablesMyTable
      v-if="useTableSize"
      :arrTable="arrTableSize"
      :arrObjectSize="arrObjectSize"
      @keydown.esc="useTableSize = false"
    />
  </Transition>
  <Transition>
    <CatalogIdTablesMyTable
      v-if="useTableMeus"
      :arrTable="arrTableSize"
      :arrObjectSize="arrObjectSize"
      @keydown.esc="useTableMeus = false"
    />
  </Transition>
  <Transition name="fade-table-blur">
    <div class="table__blur" v-if="useTableSize || useTableMeus"></div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      useTableSize: useTableSize(),
      useTableMeus: useTableMeus(),
      arrTableSize: [
        {
          nameTable: "xs",
          arrSettings: [
            { name: "int", value: "xs" },
            { name: "ru", value: 16 },
            { name: "длина", value: 44 },
            { name: "обхват груди", value: 119 },
            { name: "плечо", value: 16 },
            { name: "длина рукава", value: 68 },
          ],
        },
        {
          nameTable: "m",
          arrSettings: [
            { name: "int", value: "l" },
            { name: "ru", value: 26 },
            { name: "длина", value: 44 },
            { name: "обхват груди", value: 79 },
            { name: "плечо", value: 46 },
            { name: "длина рукава", value: 58 },
          ],
        },
        {
          nameTable: "l",
          arrSettings: [
            { name: "int", value: "xl" },
            { name: "ru", value: 45 },
            { name: "длина", value: 32 },
            { name: "обхват груди", value: 89 },
            { name: "плечо", value: 23 },
            { name: "длина рукава", value: 45 },
          ],
        },
      ],
      arrObjectSize: {
        title: "таблица размеров",
        text: "Общая таблица размеров показывает нашу стандартную размерную линейку",
      },
      arrTableMeus: [
        {
          nameTable: "xs",
          arrSettings: [
            { name: "int", value: "xs" },
            { name: "ru", value: 16 },
            { name: "длина", value: 44 },
            { name: "обхват груди", value: 119 },
            { name: "плечо", value: 16 },
            { name: "длина рукава", value: 68 },
          ],
        },
        {
          nameTable: "s",
          arrSettings: [
            { name: "int", value: "l" },
            { name: "ru", value: 26 },
            { name: "длина", value: 44 },
            { name: "обхват груди", value: 79 },
            { name: "плечо", value: 46 },
            { name: "длина рукава", value: 58 },
          ],
        },
        {
          nameTable: "m",
          arrSettings: [
            { name: "int", value: "xl" },
            { name: "ru", value: 45 },
            { name: "длина", value: 32 },
            { name: "обхват груди", value: 89 },
            { name: "плечо", value: 23 },
            { name: "длина рукава", value: 45 },
          ],
        },
      ],
      arrObjectSize: {
        title: "обмеры изделия",
        text: "точные параметры изделия",
      },
    };
  },
  watch: {
    useTableSize(val) {
      if (!val) {
        const body = document.body;
        body.style.overflow = "auto";
      }
    },
    useTableMeus(val) {
      if (!val) {
        const body = document.body;
        body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  padding-top: 150px;
  margin-bottom: 96px;
  z-index: 17;
}
.main__content {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
.main__menu {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
}
.table__blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 29;
}
.fade-table-blur-enter-from {
  opacity: 0;
  transition: all 0.4s ease;
}
.fade-table-blur-enter-to {
  opacity: 1;
  transition: all 0.4s ease;
}
.fade-table-blur-leave-from {
  opacity: 1;
  transition: all 0.4s ease;
}
.fade-table-blur-leave-to {
  opacity: 0;
  transition: all 0.4s ease;
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
