<template>
  <div>
    <DeliveryMyMain />
    <DeliveryMyAbout />
    <UIMyAnimationLine duration="3" :arrAnimationLine="arrAnimationLine" />
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
          name: ".about__info_image",
          defaultLine: false,
          widthTo: true,
          indent: "left",
        },
        {
          name: ".main__delivery_title",
          defaultLine: false,
          indent: "left",
        },
        {
          name: ".main__delivery_number",
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
