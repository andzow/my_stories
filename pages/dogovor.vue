<template>
  <div>
    <section class="dogovor">
      <div class="dogovor__container">
        <h1 class="dogovor__title">
          (&nbsp; ДОГОВОР-ОФЕРТА ИНТЕРНЕТ-МАГАЗИНА «my stories» &nbsp;)
        </h1>
        <div class="dogovor__block" v-for="(item, idx) in dogovor" :key="idx">
          <p
            v-if="item.termin"
            class="dogovor__termin"
            v-html="item.termin"
          ></p>
          <div class="dogovor__info">
            <p
              class="dogovor__text"
              v-for="(info, i) in item.text"
              v-html="info"
              :key="i"
            ></p>
          </div>
        </div>
      </div>
    </section>
    <LazyUIMyNoise v-if="checkHydrate" />
  </div>
</template>

<script>
import dogovorData from "~/assets/json/dogovor.json";

export default {
  setup() {
    useHead({
      title:
        "Договор - Оферта - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
      meta: [
        {
          name: "description",
          content: `ДОГОВОР-ОФЕРТА - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories`,
        },
        {
          name: "keywords",
          content:
            "ДОГОВОР-ОФЕРТА, модная женская одежда, интернет-магазин, стильная одежда, mystories",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content:
            "ДОГОВОР-ОФЕРТА - Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
        },
        {
          property: "og:description",
          content: `В интернет-магазине mystories вас ждет огромный выбор модной одежды различных размеров! Доставка по всей России.`,
        },
        {
          property: "og:site_name",
          content:
            "Интернет-магазин модной женской одежды и доставкой по всей России | MyStories",
        },
        {
          property: "og:image",
          content: "/Preload/collectionF.webp",
        },
      ],
    });
  },
  data() {
    return {
      dogovor: dogovorData,
      checkHydrate: useCheckHydration(),
    };
  },
  mounted() {
    document.body.style.overflow = "auto";
  },
};
</script>

<style scoped>
.dogovor {
  position: relative;
  padding-top: 110px;
  z-index: 17;
}
.dogovor__container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dogovor__title {
  font-size: 30px;
  max-width: 900px;
  margin-bottom: 30px;
}
.dogovor__text {
  margin-bottom: 10px;
  text-transform: lowercase;
  text-align: justify;
}
.dogovor__info {
  margin-bottom: 50px;
}
.dogovor__termin {
  margin-bottom: 30px;
}
.dogovor__name {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 30px;
}
.dogovor__block {
  width: 100%;
}
@media (max-width: 620px) {
  .dogovor__title {
    text-align: center;
    font-size: 24px;
  }
}
</style>
