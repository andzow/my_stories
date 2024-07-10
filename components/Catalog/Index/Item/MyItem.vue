<template>
  <div
    class="catalog__item"
    :class="['catalog__item' + (idx + 1)]"
    v-if="arrImages"
  >
    <div
      class="catalog__item_images"
      @click="$router.push(`/catalog/${item.name}/${item.id}`)"
    >
      <CatalogIndexItemMyImage
        v-for="(image, idx) in arrImages"
        :key="image"
        :image="image"
        :idx="idx"
        :activeIdx="activeIdx"
        :item="item"
      />
      <CatalogIndexItemMyConrols
        :lengthEl="arrImages.length"
        @setImage="setImage"
      />
    </div>
    <div class="catalog__item_about">
      <h2 class="catalog__item_title">
        {{ item.name + ` &nbsp;&nbsp;( &nbsp;${item.color}&nbsp; )` }}
      </h2>
      <div class="catalog__item_summ">
        <div class="catalog__item_text">
          {{
            item[`${!item.discount ? "price" : "discount"}`]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          ₽
        </div>
        <div
          class="catalog__item_text catalog__item_discount"
          v-if="item?.discount"
        >
          {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽
        </div>
      </div>
    </div>
    <p class="catalog__item_des">
      {{ `${item?.text}, ${item?.characteristic}` }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    idx: Number,
  },
  data() {
    return {
      activeIdx: 0,
      arrImages: null,
    };
  },
  methods: {
    setImage(idx) {
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
    this.arrImages = this.item.images.filter((el, idx) => idx <= 2);
  },
  mounted() {
    this.setWidthName();
    console.log(this.item);
  },
};
</script>

<style scoped>
.catalog__item {
  position: relative;
  width: 100%;
}
.catalog__item_images {
  position: relative;
  height: 656px;
  margin-bottom: 25px;
  overflow: hidden;
  z-index: 4;
}
.catalog__item_title {
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
  transition: all 1s ease;
}
.catalog__item_summ {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.catalog__item_text {
  font-weight: 400;
  font-size: 20px;
  color: var(--brown);
  /* margin-left: 84px;
  text-decoration: line-through; */
}
.catalog__item_discount {
  margin-left: 84px;
  text-decoration: line-through;
}
.catalog__item_des {
  position: absolute;
  top: 0;
  opacity: 0;
  height: 0;
}
@media screen and (max-width: 1820px) {
  .catalog__item_images {
    height: 625px;
  }
}
@media screen and (max-width: 1730px) {
  .catalog__item_images {
    height: 585px;
  }
}
@media screen and (max-width: 1630px) {
  .catalog__item_images {
    height: 535px;
  }
}
@media screen and (max-width: 1540px) {
  .catalog__item_images {
    height: 465px;
  }
}
@media screen and (max-width: 1400px) {
  .catalog__item_title {
    font-size: 20px;
  }
  .catalog__item_text {
    font-size: 18px;
  }
}
@media screen and (max-width: 1240px) {
  .catalog__item_images {
    height: 370px;
  }
}
@media screen and (max-width: 1100px) {
  .catalog__item_title {
    font-size: 18px;
  }
  .catalog__item_text {
    font-size: 16px;
  }
}
@media screen and (max-width: 1020px) {
  .catalog__item_title {
    font-size: 17px;
  }
  .catalog__item_text {
    font-size: 15px;
  }
  .catalog__item_images {
    height: 300px;
  }
}
@media screen and (max-width: 952px) {
  .catalog__item_images {
    height: 430px;
  }
}
@media screen and (max-width: 900px) {
  .catalog__item_images {
    height: 380px;
  }
}
@media screen and (max-width: 836px) {
  .catalog__item_images {
    height: 495px;
  }
}
@media screen and (max-width: 730px) {
  .catalog__item_images {
    height: 445px;
  }
}
@media screen and (max-width: 688px) {
  .catalog__item_images {
    height: 400px;
  }
}
@media screen and (max-width: 588px) {
  .catalog__item_images {
    height: 320px;
  }
}
@media screen and (max-width: 466px) {
  .catalog__item_title {
    font-size: 20px;
  }
  .catalog__item_text {
    font-size: 18px;
  }
  .catalog__item_images {
    height: 475px;
  }
}
@media screen and (max-width: 400px) {
  .catalog__item_images {
    height: 390px;
  }
}
</style>
