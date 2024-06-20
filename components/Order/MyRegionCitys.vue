<template>
  <div
    class="region__item"
    @keydown="handleKeydown"
    ref="container"
    tabindex="0"
    @mouseenter="setActiveFocus"
    @keydown.enter="$emit('setCity', arrCitys, activeIdx)"
  >
    <div
      class="region__item_dropdown"
      v-for="(item, idx) in arrCitys"
      :key="item.name"
      :class="{ activeDropdown: idx === activeIdx }"
      :ref="'dropdown' + idx"
      @click="activeIdx = idx"
      data-cursor-class="animateCursor"
    >
      <span class="region__item_span">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrCitys: [
        { name: "Москва" },
        { name: "Киров" },
        { name: "Чепецк" },
        { name: "Алматы" },
        { name: "Чебоксары" },
        { name: "Урал" },
      ],
      useCursor: useCursor(),
      activeIdx: 2,
    };
  },
  mounted() {
    this.useCursor = true;
    this.dropDownClose();
  },
  methods: {
    handleKeydown(event) {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();

        if (event.key === "ArrowUp" && this.activeIdx > 0) {
          this.activeIdx--;
          this.scrollToActive();
        } else if (
          event.key === "ArrowDown" &&
          this.activeIdx < this.arrCitys.length - 1
        ) {
          this.activeIdx++;
          this.scrollToActive();
        }
      }
    },
    setActiveFocus() {
      this.$refs.container.focus();
    },
    scrollToActive() {
      const container = this.$refs.container;
      const activeElement = this.$refs["dropdown" + this.activeIdx][0];
      if (activeElement) {
        const elementTop = activeElement.offsetTop;
        const elementHeight = activeElement.offsetHeight;
        const containerHeight = container.clientHeight;

        if (elementTop < container.scrollTop) {
          container.scrollTop = elementTop;
        } else if (
          elementTop + elementHeight >
          container.scrollTop + containerHeight
        ) {
          container.scrollTop = elementTop + elementHeight - containerHeight;
        }
      }
    },
    dropDownClose() {
      setTimeout(() => {
        const blockEl = document.querySelector(".region__block");
        document.addEventListener("mouseup", (e) => {
          const click = e.composedPath().includes(blockEl);
          if (!click) {
            this.$emit("close");
          }
        });
      }, 0);
    },
  },
};
</script>

<style scoped>
.region__item {
  position: absolute;
  width: 100%;
  top: 90%;
  left: 0;
  background: #f5f2ea;
  box-shadow: 2px 2px 20px 2px rgba(207, 201, 180, 0.4);
  height: 300px;
  padding: 5px;
  overflow: auto;
  z-index: 33;
}
.region__item_dropdown {
  font-size: 16px;
  color: var(--brown);
  font-weight: 300;
  padding: 15px 10px;
  margin-bottom: 5px;
  transition: all 0.2s ease;
}
.region__item_dropdown:hover {
  background: var(--brown);
  color: #fff;
}

.activeDropdown {
  background: var(--brown);
  color: #fff;
}
</style>
