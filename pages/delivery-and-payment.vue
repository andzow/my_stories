<template>
  <div>
    <DeliveryMyMain />
    <DeliveryMyAbout />
    <UIMyAnimationLine duration="4" :arrAnimationLine="arrAnimationLine" />
    <UIMyNoise />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrAnimationLine: [
        {
          name: ".header__logo",
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
  methods: {
    initLine() {
      if (window.innerWidth > 930) {
        this.arrAnimationLine = [
          {
            name: ".header__logo",
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
        ];
        return;
      }
      this.arrAnimationLine = [
        { name: ".header__logo", defaultLine: false, indent: "left" },

        {
          name: ".header__interaction_cart",
          defaultLine: false,
          indent: "left",
          widthTo: true,
        },
      ];
    },
  },
  mounted() {
    const bodyEl = document.body;
    bodyEl.style.overflow = "auto";
    this.initLine();
  },
};
</script>

<style scoped></style>
