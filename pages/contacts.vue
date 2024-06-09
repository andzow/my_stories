<template>
  <div>
    <ContactsMyMain />
    <UIMyAnimationLine duration="2" :arrAnimationLine="arrAnimationLine" />
    <UIMyNoise />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrAnimationLine: [
        {
          name: ".header__content",
          defaultLine: false,
          indent: "left",
        },
        {
          name: ".main__image_img",
          defaultLine: false,
          share: true,
          indent: "left",
        },
        {
          name: ".main__about_title",
          defaultLine: false,
          indent: "left",
        },
        {
          name: ".header__interaction_btn",
          defaultLine: false,
          indent: "left",
        },
      ],
    };
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
  },
};
</script>

<style scoped></style>
