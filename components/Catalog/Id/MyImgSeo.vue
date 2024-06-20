<template>
  <img class="main__seo" :alt="altStr" :src="objectImage" />
</template>

<script>
import { USE_SERVER } from "~/url";

export default {
  props: {
    productObject: {},
  },
  data() {
    return {
      objectImage: null,
      altStr: null,
    };
  },
  created() {
    this.objectImage = USE_SERVER + this.productObject.product[0].images[0];
    const prodObj = this.productObject.product[0];
    this.altStr = `${prodObj?.name.toLowerCase()} ${prodObj?.color.toLowerCase()}, ${prodObj?.characteristic.replace(
      /\r\n/g,
      ", "
    )}`;
  },
  mounted() {},
};
</script>

<style scoped>
.main__seo {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
</style>
