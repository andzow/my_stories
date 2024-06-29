<template>
  <div class="menu__pages">
    <div
      class="menu__pages_item"
      v-for="item in arrItems"
      :key="item"
      @click="$router.push(item.path), (activeMenu = false)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: useActiveMenu(),
      arrItems: [
        {
          name: "главная",
          path: "/",
        },
        {
          name: "О бренде",
          path: "/brand",
        },
        {
          name: "Lookbook",
          path: "/lookbook",
        },
        {
          name: "Доставка и оплата",
          path: "/delivery-and-payment",
        },

        {
          name: "Контакты",
          path: "/contacts",
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu__pages {
  margin-bottom: 45px;
}
.menu__pages_item {
  font-weight: 400;
  color: var(--brown);
  font-size: 22px;
  text-transform: lowercase;
  margin-bottom: 30px;
}
.menu__pages_item:last-child {
  margin-bottom: 0;
}
</style>
