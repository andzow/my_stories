<template>
  <div class="page" :class="{ waitActive: !arrActive }">
    <LookbookIdMyMain v-if="arrActive" :arrActive="arrActive" />
    <section class="index" v-if="arrActive">
      <LookbookIdMyPhotos :arrPhotos="arrActive.arrPhotos" />
      <LazyUIMyAnimationLine
        duration="8"
        :arrAnimationLine="arrAnimationLine"
        v-if="checkHydrate"
      />
      <LazyUIMyNoise v-if="checkHydrate" />
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    let nameTitle =
      useRoute().path === "/lookbook/letniy-veter"
        ? "Летний ветер"
        : "Пробуждение";
    nameTitle =
      nameTitle +
      " | Интернет-магазин модной женской одежды с доставкой по всей России | MyStories";
    let imageSrc =
      useRoute().path === "/lookbook/letniy-veter"
        ? "/Lookbook/letniy/letniyBack.webp"
        : "/Lookbook/awakening/awakeningBack.webp";
    useHead({
      title: nameTitle,
      meta: [
        {
          name: "description",
          content: `Исследуйте лукбук от mystories, в котором представлены самые современные образы и стильные сочетания женской одежды. Мы предлагаем доставку по всей России.`,
        },
        {
          name: "keywords",
          content:
            "лукбук, модная женская одежда, интернет-магазин, стильные образы, mystories",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:title",
          content: nameTitle,
        },
        {
          property: "og:description",
          content: `Исследуйте лукбук от mystories, в котором представлены самые современные образы и стильные сочетания женской одежды. Мы предлагаем доставку по всей России.`,
        },
        {
          property: "og:site_name",
          content: nameTitle,
        },
        {
          property: "og:image",
          content: imageSrc,
        },
      ],
    });
  },
  data() {
    return {
      arrActive: null,
      arrCollection: [
        {
          name: "letniy-veter",
          title: 'летний ветер <span class="span__inter">. . .</span>',
          year: "( 2024 )",
          backgroundPhotoSrc: "/Lookbook/letniy/letniyBack.webp",
          arrPhotos: [
            "/Lookbook/letniy/letniy1.webp",
            "/Lookbook/letniy/letniy2.webp",
            "/Lookbook/letniy/letniy3.webp",
            "/Lookbook/letniy/letniy4.webp",
            "/Lookbook/letniy/letniy5.webp",
            "/Lookbook/letniy/letniy6.webp",
            "/Lookbook/letniy/letniy7.webp",
            "/Lookbook/letniy/letniy8.webp",
            "/Lookbook/letniy/letniy9.webp",
            "/Lookbook/letniy/letniy10.webp",
            "/Lookbook/letniy/letniy11.webp",
            "/Lookbook/letniy/letniy12.webp",
            "/Lookbook/letniy/letniy13.webp",
            "/Lookbook/letniy/letniy14.webp",
            "/Lookbook/letniy/letniy15.webp",
            "/Lookbook/letniy/letniy16.webp",
            "/Lookbook/letniy/letniy17.webp",
            "/Lookbook/letniy/letniy18.webp",
            "/Lookbook/letniy/letniy19.webp",
            "/Lookbook/letniy/letniy20.webp",
          ],
        },
        {
          name: "awakening",
          title: 'пробуждение <span class="span__inter">. . .</span>',
          year: "( 2024 )",
          backgroundPhotoSrc: "/Lookbook/awakening/awakeningBack.webp",
          arrPhotos: [
            "/Lookbook/awakening/awakening1.webp",
            "/Lookbook/awakening/awakening2.webp",
            "/Lookbook/awakening/awakening3.webp",
            "/Lookbook/awakening/awakening4.webp",
            "/Lookbook/awakening/awakening5.webp",
            "/Lookbook/awakening/awakening6.webp",
            "/Lookbook/awakening/awakening7.webp",
            "/Lookbook/awakening/awakening8.webp",
            "/Lookbook/awakening/awakening9.webp",
            "/Lookbook/awakening/awakening10.webp",
            "/Lookbook/awakening/awakening11.webp",
            "/Lookbook/awakening/awakening12.webp",
            "/Lookbook/awakening/awakening13.webp",
            "/Lookbook/awakening/awakening14.webp",
          ],
        },
      ],
      arrAnimationLine: [
        {
          name: "",
          defaultLine: true,
          margin: "30px",
          indent: "left",
        },
        {
          name: "",
          defaultLine: true,
          margin: "383px",
          indent: "left",
        },
        {
          name: "",
          defaultLine: true,
          margin: "852px",
          indent: "right",
        },
        {
          name: "",
          defaultLine: true,
          margin: "98px",
          indent: "right",
        },
      ],
      checkHydrate: useCheckHydration(),
    };
  },
  methods: {
    initArr() {
      const paramsIdPage = this.$route.params.lookbook;
      return this.arrCollection.filter((el) => el.name === paramsIdPage)[0];
    },
  },
  mounted() {
    this.arrActive = this.initArr();
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
    if (!this.arrActive || this.arrActive.length <= 0) {
      this.$router.push("/page/not-found");
    }
  },
};
</script>

<style scoped>
.waitActive {
  width: 100vw;
  height: 100vh;
}
.index {
  position: relative;
  background-color: var(--yellow);
  width: 100vw;
  z-index: 17;
}
</style>
