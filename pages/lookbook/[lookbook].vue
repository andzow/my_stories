<template>
  <div class="page" :class="{ waitActive: !arrActive }">
    <LookbookIdMyMain v-if="arrActive" :arrActive="arrActive" />
    <section class="index" v-if="arrActive">
      <LookbookIdMyPhotos :arrPhotos="arrActive.arrPhotos" />
      <UIMyAnimationLine duration="8" :arrAnimationLine="arrAnimationLine" />
      <UIMyNoise />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrActive: null,
      arrCollection: [
        {
          name: "letniy-vecher",
          title: 'летний ветер <span class="span__inter">. . .</span>',
          year: "( 2024 )",
          backgroundPhotoSrc: "../Lookbook/letniy/letniyBack.webp",
          arrPhotos: [
            "../Lookbook/letniy/letniy1.webp",
            "../Lookbook/letniy/letniy2.webp",
            "../Lookbook/letniy/letniy3.webp",
            "../Lookbook/letniy/letniy4.webp",
            "../Lookbook/letniy/letniy5.webp",
            "../Lookbook/letniy/letniy6.webp",
            "../Lookbook/letniy/letniy7.webp",
            "../Lookbook/letniy/letniy8.webp",
            "../Lookbook/letniy/letniy9.webp",
            "../Lookbook/letniy/letniy10.webp",
            "../Lookbook/letniy/letniy11.webp",
            "../Lookbook/letniy/letniy12.webp",
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
