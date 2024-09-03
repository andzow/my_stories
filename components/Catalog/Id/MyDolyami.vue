<template>
  <div
    class="dolyami"
    @click="
      (useModalDolyami = true),
        (useDolyamiPrice = `${(fullPrice / 4)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`)
    "
  >
    <div class="dolyami__content">
      <div class="dolyami__logo">
        <img class="dolyami__img" :src="'/dolyami.svg'" />
      </div>
      <p class="dolyamy__platesh">
        4 платежа по
        {{
          `${Math.floor(fullPrice / 4)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`
        }}
        ₽
      </p>
      <div class="dolyami__arrow">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_83302_208"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="17"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 8.5L6.65782 2.5L5.31564 3.92335L9.81564 8.5L5.31564 13.0766L6.65782 14.5L12.5 8.5Z"
              fill="black"
            />
          </mask>
          <g class="dolyami__g" mask="url(#mask0_83302_208)">
            <rect y="0.5" width="16" height="16" fill="#AF9280" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    priceProduct: {},
  },
  data() {
    return {
      useModalDolyami: useModalDolyami(),
      useDolyamiPrice: useDolyamiPrice(),
      fullPrice: null,
    };
  },
  created() {
    if (this.priceProduct) {
      this.fullPrice = this.priceProduct?.product[0].price;
    }
  },
  mounted() {
    if (this.priceProduct) {
      this.fullPrice = this.priceProduct?.product[0].price;
    }
  },
  watch: {
    priceProduct(val) {
      if (val) {
        this.fullPrice = this.priceProduct?.product[0].price;
      }
    },
  },
};
</script>

<style scoped>
.dolyami {
  border: 1px solid #af9280;
  padding: 15px 15px;
  max-width: 350px;
  transition: all 0.4s ease;
  cursor: pointer;
}
.dolyami__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.dolyami__logo {
  display: flex;
}
.dolyamy__platesh {
  font-size: 16px;
  font-weight: 500;
  transition: all 0.4s ease;
}
.dolyami__arrow {
  display: flex;
}
.dolyami rect {
  transition: all 0.4s ease;
}
.dolyami:hover {
  background: #af9280;
}
.dolyami:hover rect {
  fill: white;
}
.dolyami:hover .dolyamy__platesh {
  color: white;
}
@media screen and (max-width: 400px) {
  .dolyami__content {
    align-items: flex-start;
    flex-direction: column;
  }
  .dolyami__arrow {
    display: none;
  }
}
</style>
