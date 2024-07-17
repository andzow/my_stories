<template>
  <div class="new__item" :class="['new__item' + (idx + 1)]" v-if="arrImages">
    <div
      class="new__item_images"
      @click="$router.push(`/catalog/${item.name}/${item.id}`)"
      data-cursor-class="animateCursor"
      :class="[
        'new__item_images' + (idx + 1),
        activeOpacity ? 'activeAnimation' : '',
      ]"
    >
      <UINewMyImage
        v-for="(image, idx) in arrImages"
        :key="image"
        :image="image"
        :idx="idx"
        :activeIdx="activeIdx"
        :item="item"
        @loadImage="loadContent = true"
      />
      <UINewMyControls
        :lengthEl="arrImages.length"
        @setImage="setImage"
        :item="item"
      />
    </div>
    <div class="new__item_about">
      <h3
        class="new__item_title"
        :class="[
          'new__item_title' + (idx + 1),
          activeOpacity ? 'activeAnimation' : '',
        ]"
      >
        {{ item.name + ` &nbsp;&nbsp;( &nbsp;${item.color}&nbsp; )` }}
      </h3>
      <div
        class="new__item_summ"
        :class="[
          'new__item_summ' + (idx + 1),
          activeOpacity ? 'activeAnimation' : '',
        ]"
      >
        <div class="new__item_text">
          {{
            item[`${!item.discount ? "price" : "discount"}`]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          ₽
        </div>
        <div class="new__item_text new__item_discount" v-if="item?.discount">
          {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽
        </div>
      </div>
    </div>
    <p class="new__item_des">
      {{ `${item?.text}, ${item?.characteristic}` }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    idx: Number,
    activeOpacity: Boolean,
  },
  data() {
    return {
      activeIdx: 0,
      arrImages: null,
      loadContent: false,
      useCursor: useCursor(),
    };
  },
  methods: {
    setImage(idx) {
      if (!this.loadContent) return;
      this.activeIdx = idx;
    },
    setWidthName() {
      const elementsCard = document.querySelectorAll(".catalog__item");
      elementsCard.forEach((el, idx) => {
        const elHtmlBlock = document.querySelector(
          ".catalog__item" + (idx + 1)
        );
        const setStyleP = document.querySelector(
          ".catalog__item" + (idx + 1) + " .catalog__item_title"
        );
        if (elHtmlBlock.getBoundingClientRect()) {
          setStyleP.style.width =
            elHtmlBlock.getBoundingClientRect().width + "px";
        }
      });
    },
  },
  created() {
    if (!this.item?.images) return;
    const { isMobile } = useDevice();
    this.arrImages = this.item.images.filter((el, idx) => {
      if (isMobile && idx < 1) {
        return el;
      } else if (!isMobile && idx <= 2) {
        return el;
      }
    });
  },
  mounted() {
    this.setWidthName();
    this.useCursor = false;
    setTimeout(() => {
      this.useCursor = true;
    }, 0);
  },
};
</script>

<style scoped>
.new__item {
  position: relative;
  width: 100%;
}
.new__item_images {
  position: relative;
  height: 580px;
  margin-bottom: 25px;
  overflow: hidden;
  z-index: 4;
}
.activeAnimation {
  opacity: 0;
}
.new__item_title {
  font-weight: 400;
  font-size: 22px;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 20px;
  text-transform: lowercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  /* transition: all 1s ease; */
}
.new__item_summ {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.new__item_text {
  font-weight: 400;
  font-size: 20px;
  color: var(--brown);
  /* margin-left: 84px;
    text-decoration: line-through; */
}
.new__item_discount {
  margin-left: 84px;
  text-decoration: line-through;
}
.new__item_des {
  position: absolute;
  top: 0;
  opacity: 0;
  height: 0;
}

@media screen and (max-width: 1630px) {
  .new__item_images {
    height: 450px;
  }
}
@media screen and (max-width: 1400px) {
  .new__item_title {
    font-size: 20px;
  }
  .new__item_text {
    font-size: 18px;
  }
}
@media screen and (max-width: 1255px) {
  .new__item_images {
    height: 410px;
  }
}
@media screen and (max-width: 1154px) {
  .new__item_images {
    height: 450px;
  }
}
@media screen and (max-width: 876px) {
  .new__item_images {
    height: 490px;
  }
}
@media screen and (max-width: 761px) {
  .new__item_images {
    height: 420px;
  }
}
@media screen and (max-width: 620px) {
  .new__item_images {
    height: 380px;
  }
}
@media screen and (max-width: 576px) {
  .new__item_images {
    height: 420px;
  }
}
@media screen and (max-width: 470px) {
  .new__item_images {
    height: 440px;
  }
}
@media screen and (max-width: 360px) {
  .new__item_images {
    height: 390px;
  }
}
</style>
