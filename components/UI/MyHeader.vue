<template>
  <Transition name="header-fade">
    <header class="header" v-if="!searchVisible">
      <div class="header__content">
        <div class="header__logo" data-cursor-class="animateCursor">
          <div class="header__burger" @click="activeMenu = !activeMenu">
            <div class="header__burger_block">
              <div
                class="header__burger_line"
                :class="{
                  activeLineFirst: activeMenu,
                  activeLineStyle: changeHeader,
                }"
              ></div>
              <div
                class="header__burger_line"
                :class="{
                  activeLineSec: activeMenu,
                  activeLineStyle: changeHeader,
                }"
              ></div>
            </div>
          </div>
          <NuxtLink class="header__logo_link" :to="'/'">
            <svg
              width="163"
              height="14"
              viewBox="0 0 163 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ activeSvg: changeHeader || activeMenu }"
            >
              <path
                d="M13.039 0.138672V13.8653H11.7305V2.80094L6.51774 9.51342L1.30495 2.80094V13.8653H0V0.138672H0.765335L6.51774 7.57529L12.2913 0.138672H13.039Z"
                fill="#EDE9DF"
              />
              <path
                d="M31.001 0.138672L25.6436 9.091V13.8653H24.3457V9.1123L18.9883 0.138672H20.4872L24.9911 7.58949L29.502 0.138672H31.001Z"
                fill="#EDE9DF"
              />
              <path
                d="M53.8277 9.98821C53.8277 11.1774 53.3375 12.1571 52.3605 12.899C51.4012 13.6302 50.2408 13.9994 48.9006 13.9994H48.7877C47.4722 13.9994 46.333 13.7118 45.3984 13.1616C44.4673 12.6008 43.7901 11.8305 43.4021 10.865L43.3457 10.7372L44.2451 9.89593L44.3509 10.1657C44.6648 10.9573 45.2009 11.5927 45.9486 12.0541C46.7033 12.5156 47.6556 12.7463 48.7877 12.7463H48.9006C49.9163 12.7463 50.7875 12.4872 51.4894 11.976C52.1877 11.472 52.5263 10.8259 52.5263 9.99177C52.5263 9.21083 52.2935 8.62513 51.8174 8.22402C51.3306 7.8087 50.5512 7.52828 49.5002 7.39339L47.8707 7.16266C46.4811 6.98163 45.4301 6.6231 44.7635 6.0942C44.0758 5.55109 43.7266 4.78081 43.7266 3.8011C43.7266 2.67939 44.1886 1.74583 45.1092 1.04299C46.0085 0.350797 47.0913 0.00292969 48.3116 0.00292969H48.5408C49.5249 0.00292969 50.4454 0.205263 51.2813 0.602829C52.1242 1.0004 52.8119 1.57899 53.3198 2.31733L53.4186 2.45931L52.5439 3.2864L52.4099 3.10181C51.9902 2.51256 51.4329 2.05109 50.7593 1.73517C50.0715 1.41925 49.3309 1.25597 48.5444 1.25597H48.3151C47.451 1.25597 46.6751 1.49024 46.005 1.9588C45.3525 2.40962 45.0351 3.00952 45.0351 3.78335C45.0351 4.38325 45.2467 4.83406 45.6841 5.16418C46.1426 5.51205 46.922 5.76053 48.0048 5.90606L49.6271 6.1368C51.0238 6.31784 52.0784 6.7154 52.7696 7.31529C53.4715 7.93294 53.8277 8.83101 53.8277 9.98821Z"
                fill="#EDE9DF"
              />
              <path
                d="M68.2499 0.138672V1.38817H63.9153V13.8653H62.6139V1.38817H58.2793V0.138672H68.2499Z"
                fill="#EDE9DF"
              />
              <path
                d="M84.3817 2.05172C83.0309 0.69219 81.3732 0 79.4652 0C78.5094 0 77.6171 0.173932 76.7988 0.518253C75.9771 0.862573 75.2293 1.37373 74.5557 2.05172C73.2119 3.41126 72.5312 5.07252 72.5312 7C72.5312 8.92748 73.2119 10.5887 74.5557 11.9483C75.8995 13.3078 77.5536 14 79.4687 14C81.3768 14 83.0344 13.3078 84.3852 11.9483C85.736 10.5887 86.4167 8.92039 86.4167 7C86.4132 5.07252 85.729 3.41126 84.3817 2.05172ZM79.4616 12.7399C77.8922 12.7399 76.5484 12.1826 75.4656 11.0822C74.3758 9.98529 73.8292 8.61156 73.8292 7C73.8292 5.38134 74.3758 4.01116 75.4656 2.91075C76.5484 1.8139 77.8922 1.25304 79.4616 1.25304C81.0241 1.25304 82.3678 1.8139 83.4647 2.91075C84.558 4.01116 85.1118 5.38844 85.1118 7C85.1118 8.61156 84.558 9.98884 83.4753 11.0822C82.389 12.1861 81.0382 12.7399 79.4616 12.7399Z"
                fill="#EDE9DF"
              />
              <path
                d="M100.972 11.3877C100.369 10.4399 99.7343 9.769 99.0818 9.39984C99.9917 9.08036 100.739 8.5976 101.321 7.95155C102.02 7.18127 102.365 6.19445 102.365 5.0195C102.365 3.47539 101.801 2.2614 100.68 1.40947C99.5791 0.568191 98.1578 0.138672 96.4543 0.138672H92.1338V13.8653H93.4352V9.90389H96.5671C97.3148 9.90389 97.9109 10.0281 98.3482 10.2695C98.782 10.5109 99.2758 11.0575 99.8119 11.8882L101.085 13.8653H102.598L100.972 11.3877ZM93.4317 1.38817H96.5072C97.8474 1.38817 98.9619 1.70409 99.8154 2.31464C100.665 2.92163 101.078 3.80196 101.078 5.01596C101.078 6.22996 100.665 7.11028 99.8154 7.72438C98.9619 8.33493 97.8439 8.64729 96.5072 8.64729H93.4317V1.38817Z"
                fill="#EDE9DF"
              />
              <path
                d="M120.394 1.38817V6.28675H127.286V7.52204H120.394V12.6052H127.642V13.8653H119.093V0.138672H127.642V1.38817H120.394Z"
                fill="#EDE9DF"
              />
              <path
                d="M143.281 9.98821C143.281 11.1774 142.791 12.1571 141.814 12.899C140.854 13.6302 139.694 13.9994 138.354 13.9994H138.241C136.925 13.9994 135.786 13.7118 134.851 13.1616C133.92 12.6008 133.243 11.8305 132.848 10.865L132.799 10.7372L133.698 9.89593L133.804 10.1657C134.118 10.9573 134.654 11.5927 135.402 12.0541C136.156 12.5156 137.109 12.7463 138.241 12.7463H138.354C139.362 12.7463 140.241 12.4872 140.942 11.976C141.641 11.472 141.976 10.8259 141.976 9.99177C141.976 9.21083 141.747 8.62513 141.274 8.22402C140.787 7.8087 140.008 7.52828 138.953 7.39339L137.324 7.16266C135.934 6.98163 134.89 6.6231 134.22 6.0942C133.532 5.55109 133.183 4.78081 133.183 3.8011C133.183 2.67939 133.645 1.74583 134.566 1.04299C135.465 0.350797 136.548 0.00292969 137.768 0.00292969H137.998C138.982 0.00292969 139.902 0.205263 140.738 0.602829C141.581 1.0004 142.269 1.57899 142.776 2.31733L142.872 2.45931L142.001 3.2864L141.867 3.10181C141.447 2.51256 140.89 2.05109 140.216 1.73517C139.528 1.41925 138.788 1.25597 138.001 1.25597H137.772C136.908 1.25597 136.132 1.49024 135.462 1.9588C134.809 2.40962 134.492 3.00952 134.492 3.78335C134.492 4.38325 134.703 4.83406 135.141 5.16418C135.599 5.51205 136.375 5.76053 137.461 5.90606L139.084 6.1368C140.48 6.31784 141.535 6.7154 142.226 7.31529C142.925 7.93294 143.281 8.83101 143.281 9.98821Z"
                fill="#EDE9DF"
              />
              <path
                d="M149.506 12.6188C149.668 12.775 149.756 12.9667 149.756 13.1903C149.756 13.4104 149.668 13.602 149.506 13.7618C149.34 13.918 149.142 13.9961 148.913 13.9961C148.684 13.9961 148.483 13.9109 148.321 13.7618C148.155 13.5985 148.07 13.4068 148.07 13.1903C148.07 12.9667 148.155 12.775 148.321 12.6188C148.645 12.3029 149.174 12.3029 149.506 12.6188Z"
                fill="#EDE9DF"
              />
              <path
                d="M156.373 13.1903C156.373 13.4104 156.289 13.602 156.123 13.7618C155.96 13.9144 155.759 13.9961 155.53 13.9961C155.308 13.9961 155.107 13.9109 154.945 13.7618C154.779 13.5985 154.694 13.4068 154.694 13.1903C154.694 12.9667 154.779 12.775 154.945 12.6188C155.269 12.3029 155.798 12.3029 156.123 12.6188C156.292 12.775 156.373 12.9667 156.373 13.1903Z"
                fill="#EDE9DF"
              />
              <path
                d="M162.999 13.1913C162.999 13.4113 162.915 13.603 162.749 13.7628C162.583 13.9189 162.386 13.997 162.156 13.997C161.927 13.997 161.726 13.9118 161.564 13.7628C161.398 13.5995 161.313 13.4078 161.313 13.1913C161.313 12.9676 161.398 12.7759 161.564 12.6198C161.888 12.3038 162.417 12.3038 162.745 12.6198C162.915 12.7759 162.999 12.9676 162.999 13.1913Z"
                fill="#EDE9DF"
              />
              <path
                d="M110.823 0.121094H109.504V13.8407H110.823V0.121094Z"
                fill="#EDE9DF"
              /></svg
          ></NuxtLink>
        </div>
        <nav class="header__nav">
          <ul class="header__ul">
            <li
              class="header__li"
              v-for="(item, idx) in navArr"
              :key="item"
              data-cursor-class="animateCursor"
              :class="['header__li' + (idx + 1)]"
            >
              <NuxtLink
                class="header__link"
                :to="generateLink(item.path)"
                :class="{
                  activeLi: changeHeader,
                  activeIndex: activeLiPath === item.path,
                }"
                >{{ item.name }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <UIHeaderMyInteraction
          @setActiveSearch="searchVisible = true"
          :changeHeader="changeHeader"
        />
      </div>
    </header>
  </Transition>
  <UIMyBlur :searchVisible="searchVisible" @keydown.esc="searchVisible = false">
    <UIHeaderMySearch @closeSearch="searchVisible = false" @close="close" />
  </UIMyBlur>
  <Transition name="fade-menu">
    <UIMenuMyMenu v-if="activeMenu" />
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      useCursor: useCursor(),
      searchVisible: false,
      changeHeader: false,
      activeLiPath: null,
      activeMenu: useActiveMenu(),
      navArr: [
        {
          name: "Каталог",
          path: "/catalog",
        },
        {
          name: "О бренде",
          path: "/brand",
        },
        {
          name: "Lookbook",
          path: "/lookbook/",
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
      useCheckedAuth: useCheckedAuth(),
    };
  },
  methods: {
    close(item) {
      this.searchVisible = false;
      this.$router.push(`/catalog/${item.name}/${item.id}`);
    },
    cursorEnter() {
      this.useCursor = true;
    },
    cursorLeave() {
      this.useCursor = false;
    },
    generateLink(item) {
      const currentQuery = this.$route.query;
      if (item.includes("/catalog")) {
        return { path: item, query: currentQuery };
      }
      return { path: item };
    },
    changeColor(route) {
      if (
        route.path === "/" ||
        route.params.lookbook ||
        route.path === "/brand"
      ) {
        this.changeHeader = false;
        return;
      }
      this.changeHeader = true;
    },
  },
  created() {
    const route = useRoute();
    this.changeColor(route);
  },
  mounted() {
    this.changeColor(this.$route);
    this.activeLiPath = this.$route.path;
  },
  watch: {
    searchVisible(val) {
      if (!val) {
        const bodyEl = document.body;
        bodyEl.style.overflow = "auto";

        setTimeout(() => {
          this.useCursor = true;
        }, 0);
      }
    },
    $route() {
      this.changeColor(this.$route);
      this.activeLiPath = this.$route.path;
    },
  },
};
</script>

<style scoped>
header {
  position: absolute;
  width: 100%;
  z-index: 19;
}
.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1920px;
  margin: 0 auto;
  padding: 26px 30px;
}
.header__logo {
  display: flex;
  align-items: center;
}
.header__logo_link {
  padding: 7px 0;
  display: flex;
  align-items: center;
}
.header__logo svg path {
  transition: all 0.4s ease;
}
.activeSvg path {
  fill: var(--brown);
}
.header__ul {
  display: flex;
  align-items: center;
  column-gap: 70px;
}
.header__link {
  font-weight: 300;
  color: #fff;
  font-size: 16px;
  text-transform: lowercase;
  padding: 7px 0;
  transition: all 0.5s ease;
}
.header__burger {
  display: flex;
  margin-right: 25px;
  flex-direction: column;
  width: 30px;
  display: none;
}
.header__burger_line {
  width: 100%;
  border: 1px solid #ede9df;
  transition: all 0.5s ease;
}
.header__burger_line:first-child {
  margin-bottom: 8px;
}
.activeLineFirst {
  transform: translateY(4px) rotate(45deg);
  border: 1px solid var(--brown);
}
.activeLineSec {
  transform: translateY(-5px) rotate(-45deg);
  border: 1px solid var(--brown);
}
.activeLineStyle {
  border: 1px solid var(--brown);
}
.activeLi {
  color: var(--brown);
}
.activeIndex {
  font-weight: 500;
}
.header-fade-enter-from {
  opacity: 0;
  transition: all 0.5s ease;
}
.header-fade-enter-to {
  opacity: 1;
  transition: all 0.5s ease;
}
.header-fade-leave-from {
  opacity: 1;
  transition: all 0.5s ease;
}
.header-fade-leave-to {
  opacity: 0;
  transition: all 0.5s ease;
}
.fade-menu-enter-from {
  transform: translateX(-100%) scale(1);
  opacity: 0;
  transition: all 0.5s ease;
}
.fade-menu-enter-to {
  transform: translateX(0) scale(1);
  opacity: 1;
  transition: all 0.5s ease;
}
.fade-menu-leave-from {
  transform: translateX(0) scale(1);
  opacity: 1;
  transition: all 0.5s ease;
}
.fade-menu-leave-to {
  transform: translateX(100%) scale(1);
  opacity: 0;
  transition: all 0.5s ease;
}

@media screen and (max-width: 1060px) {
  .header__ul {
    display: flex;
    align-items: center;
    column-gap: 40px;
  }
}
@media screen and (max-width: 904px) {
  .header__content {
    padding: 31px 30px;
  }
  .header__ul {
    display: flex;
    align-items: center;
    column-gap: 25px;
  }
}
@media screen and (max-width: 890px) {
  .header__ul {
    display: flex;
    align-items: center;
    column-gap: 25px;
  }
}
@media screen and (max-width: 868px) {
  .header__nav {
    display: none;
  }
  .header__burger {
    display: block;
  }
}
</style>
