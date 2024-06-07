<template>
  <div class="filter__price">
    <div class="filter__price_content">
      <div class="filter__price_header">
        <div class="filter__price_title">цена</div>
      </div>
      <div clas="filter__price_form">
        <form class="filter__price_inputs" @submit.prevent="send">
          <div class="filter__price_block">
            <input
              type="number"
              class="filter__price_input"
              :value="activeMinVal"
              data-cursor-class="animateCursor"
            />
          </div>
          <div class="filter__price_block">
            <input
              type="number"
              class="filter__price_inp"
              :value="activeMaxVal"
              data-cursor-class="animateCursor"
            />
          </div>
          <button :style="{ display: 'none' }"></button>
        </form>
        <div class="filter__price_range">
          <div class="filter__price_slider"></div>
          <div class="filter__price_progress">
            <input
              type="range"
              class="filter_price_min"
              :min="minVal"
              :max="maxVal"
              :value="activeMinVal"
              data-cursor-class="animateCursor"
            />
            <input
              type="range"
              class="filter_price_max"
              :min="minVal"
              :max="maxVal"
              :value="activeMaxVal"
              data-cursor-class="animateCursor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    minVal: Number,
    maxVal: Number,
    checkPrice: Boolean,
  },
  data() {
    return {
      useFilterPrice: useFilterPrice(),
      useCheckPrice: useCheckPrice(),
      priceGap: 0,
      activeMinVal: null,
      activeMaxVal: null,
      useCheckReset: useCheckReset(),
    };
  },
  methods: {
    send() {
      console.log("hi");
    },
    setPriceInputs(rangeInput, priceInput) {
      priceInput.forEach((input) => {
        input.addEventListener("input", (e) => {
          let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
          this.useFilterPrice.activeMinVal = minPrice;
          this.useFilterPrice.activeMaxVal = maxPrice;
          this.$emit("openMethod");
          if (
            maxPrice - minPrice >= this.priceGap &&
            maxPrice <= rangeInput[1].max
          ) {
            if (e.target.className === "filter__price_input") {
              rangeInput[0].value = minPrice;
            } else {
              rangeInput[1].value = maxPrice;
            }
          }
        });
      });
    },
    setRangeInputs(rangeInput, priceInput) {
      rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
          let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
          this.useFilterPrice.activeMinVal = minVal;
          this.useFilterPrice.activeMaxVal = maxVal;
          this.$emit("openMethod");
          if (maxVal - minVal < this.priceGap) {
            if (e.target.className === "filter_price_min") {
              rangeInput[0].value = maxVal - this.priceGap;
            } else {
              rangeInput[1].value = minVal + this.priceGap;
            }
          } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
          }
        });
      });
    },
    async replaceRoute() {
      const minEl = document.querySelector(".filter_price_min").value;
      const maxEl = document.querySelector(".filter_price_max").value;
      await this.$router.replace({
        path: "/catalog",
        query: {
          ...this.$route.query,
          min: minEl,
          max: maxEl,
        },
      });
    },
    initRouteMinQuery(min, max) {
      const minElInp = document.querySelector(".filter__price_input");
      const maxElInp = document.querySelector(".filter__price_inp");
      const minElRange = document.querySelector(".filter_price_min");
      const maxElRange = document.querySelector(".filter_price_max");

      if (!min || !max) {
        minElInp.value = this.minVal;
        maxElInp.value = this.maxVal;
        minElRange.value = this.minVal;
        maxElRange.value = this.maxVal;
        this.useFilterPrice.activeMinVal = this.minVal;
        this.useFilterPrice.activeMaxVal = this.maxVal;
        return;
      }
      const numParseMin = parseInt(this.minVal);
      const numParseMax = parseInt(this.maxVal);

      const parseMin = parseInt(min);
      const parseMax = parseInt(max);

      if (
        parseMin < 0 ||
        parseMin + this.priceGap > parseMax ||
        parseMin < numParseMin ||
        parseMin > numParseMax
      ) {
        minElInp.value = numParseMin;
        minElRange.value = numParseMin;
      } else {
        minElInp.value = parseMin;
        minElRange.value = parseMin;
      }

      if (
        parseMax < 0 ||
        parseMax + this.priceGap < parseMin ||
        parseMax > numParseMax ||
        parseMax < numParseMin
      ) {
        maxElInp.value = numParseMax;
        maxElRange.value = numParseMax;
      } else {
        maxElInp.value = parseMax;
        maxElRange.value = parseMax;
      }

      this.useFilterPrice.activeMinVal = minElRange.value;
      this.useFilterPrice.activeMaxVal = maxElRange.value;
      this.$emit("openMethod");
    },
  },
  mounted() {
    const rangeInput = document.querySelectorAll(
      `.filter__price_progress input`
    );
    const priceInput = document.querySelectorAll(".filter__price_block input");
    this.initRouteMinQuery(this.$route?.query?.min, this.$route?.query?.max);
    this.setPriceInputs(rangeInput, priceInput);
    this.setRangeInputs(rangeInput, priceInput);
  },
  watch: {
    useCheckPrice(val) {
      if (val) {
        const minElInp = document.querySelector(".filter__price_input");
        const maxElInp = document.querySelector(".filter__price_inp");
        this.initRouteMinQuery(minElInp.value, maxElInp.value);
        this.replaceRoute();
        this.useCheckPrice = false;
      }
    },
    async useCheckReset(val) {
      if (val) {
        document.querySelector(".filter__price_input").value = this.minVal;
        document.querySelector(".filter__price_inp").value = this.maxVal;
        document.querySelector(".filter_price_min").value = this.minVal;
        document.querySelector(".filter_price_max").value = this.maxVal;
        this.useFilterPrice.activeMinVal = this.minVal;
        this.useFilterPrice.activeMaxVal = this.maxVal;
        this.activeMinVal = this.minVal;
        this.activeMaxVal = this.maxVal;
        this.useCheckReset = false;
      }
    },
  },
};
</script>

<style scoped>
.filter__price {
  margin-bottom: 65px;
}
.filter__price_header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 30px;
}
.filter__price_btn {
  display: flex;
  padding-top: 8px;
  width: 25px;
  height: 25px;
  margin-left: 15px;
}
.filter__price_form {
  width: 100%;
}
.filter__price_inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0px;
  margin-bottom: 20px;
}
.filter__price_input {
  font-size: 17px;
  font-weight: 300;
  background: none;
  padding: 10px 20px;
  width: 100%;
  color: var(--brandname);
  border: 1px solid #af9280;
}
.filter__price_inp {
  font-size: 17px;
  font-weight: 300;
  background: none;
  padding: 10px 20px;
  width: 100%;
  color: var(--brandname);
  border: 1px solid #af9280;
}
.filter__price_input::placeholder {
  color: var(--brandname);
}
.filter__price_slider {
  position: relative;
  width: 100%;
  height: 2px;
  background: var(--brown);
  border-radius: 2px;
  z-index: 5;
}
.filter__price_progress {
  position: relative;
  z-index: 10;
}
.filter__price_progress input {
  position: absolute;
  top: -3px;
  height: 5px;
  width: 100%;
  left: 0;
  pointer-events: none;
  background: none;
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  pointer-events: auto;
  -webkit-appearance: none;
  background: var(--brown);
  border: none;
}
input[type="range"]::-moz-range-thumb {
  height: 20px;
  width: 17px;
  border-radius: 50%;
  pointer-events: auto;
  border: none;
  -moz-appearance: none;
  background: var(--brown);
}
</style>
