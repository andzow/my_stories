<template>
  <div class="main__item" :class="['main__item'] + (idx + 1)">
    <button
      class="main__item_closed cart__mobile_close"
      data-cursor-class="animateCursor"
      @click="$emit('delItem')"
    >
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.00006 9.99994L10 1"
          stroke="#AF9280"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 1L9.99994 9.99994"
          stroke="#AF9280"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="main__item_header">
      <div class="main__item_image">
        <img
          class="main__item_img"
          width="146"
          height="167"
          :src="item.imageSrc"
          alt="фото товара в корзине"
        />
      </div>
      <div class="main__item_block">
        <p class="main__item_text">{{ item.name }}</p>
        <p class="main__text_size">
          размер<br />
          <span class="main__text_span">{{ item.size }}</span>
        </p>
      </div>
    </div>

    <div class="main__item_price cart__mobile">
      <div class="main__item_summ">
        {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽
      </div>
      <div class="main__item_piece">цена за шт</div>
    </div>
    <div class="main__item_change cart__mobile">
      <div class="main__item_action">
        <button
          class="main__item_btn"
          data-cursor-class="animateCursor"
          @click="$emit('delCounter')"
        >
          -
        </button>
        <div class="main__item_res">{{ item.counter }}</div>
        <button
          class="main__item_btn"
          data-cursor-class="animateCursor"
          @click="$emit('addCounter')"
        >
          +
        </button>
      </div>
      <div class="main__item_piece">цена за шт</div>
    </div>
    <div class="main__item_full cart__mobile">
      <div class="main__item_info">
        {{ item.fullPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽
      </div>
      <div class="main__item_piece">всего</div>
    </div>
    <div class="main__item_close cart__mobile">
      <button
        class="main__item_closed"
        data-cursor-class="animateCursor"
        @click="$emit('delItem')"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00006 9.99994L10 1"
            stroke="#AF9280"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 1L9.99994 9.99994"
            stroke="#AF9280"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="main__item_cont">
      <div class="main__item_price">
        <div class="main__item_summ">
          {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} ₽
        </div>
        <div class="main__item_piece">цена за шт</div>
      </div>
      <div class="main__item_change">
        <div class="main__item_action">
          <button
            class="main__item_btn"
            data-cursor-class="animateCursor"
            @click="$emit('delCounter')"
          >
            -
          </button>
          <div class="main__item_res">{{ item.counter }}</div>
          <button
            class="main__item_btn"
            data-cursor-class="animateCursor"
            @click="$emit('addCounter')"
          >
            +
          </button>
        </div>
        <div class="main__item_piece">цена за шт</div>
      </div>
      <div class="main__item_full">
        <div class="main__item_info">
          {{ item.fullPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
          ₽
        </div>
        <div class="main__item_piece">всего</div>
      </div>
    </div>
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
      useCursor: useCursor(),
      useGsapAnimationOpacity: useGsapAnimationOpacity,
    };
  },
  methods: {
    initLocalStorage() {},
  },
  mounted() {
    this.useCursor = true;
    this.useGsapAnimationOpacity([".main__item" + (this.idx + 1)], ".main");
  },
};
</script>

<style scoped>
div {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
p {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.main__item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #d2bcae;
  padding: 15px 0;
  opacity: 0;
}
.main__item_header {
  display: flex;
  align-items: flex-start;
}
.main__item_cont {
  display: none;
}
.main__item_img {
  object-fit: cover;
}
.main__item_block {
  margin-left: 30px;
}
.main__item_text {
  font-size: 17px;
  font-weight: 300;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 15px;
  width: 300px;
  text-transform: lowercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.main__text_size {
  font-size: 17px;
  font-weight: 300;
  color: #a8ab98;
  text-transform: lowercase;
}
.main__text_span {
  color: var(--brown);
}
.main__item_about {
  display: flex;
  align-items: center;
}
.main__item_summ {
  font-size: 20px;
  font-weight: 400;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 15px;
}
.main__item_piece {
  font-size: 16px;
  font-weight: 300;
  color: #a8ab98;
  text-transform: lowercase;
}
.main__item_action {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.main__item_res {
  font-size: 20px;
  font-weight: 400;
  color: var(--brown);
  text-transform: lowercase;
  margin: 0 10px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__item_btn {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  font-size: 24px;
  font-weight: 300;
  color: var(--brown);
  border: none;
  background: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.4s ease;
}
.main__item_info {
  font-size: 20px;
  font-weight: 400;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 15px;
  min-width: 150px;
}
.cart__mobile_close {
  position: absolute;
  top: 5%;
  right: 0;
  display: none;
}

@media screen and (max-width: 976px) {
  .main__item_text {
    width: 150px;
  }
  .main__item_info {
    min-width: 70px;
  }
}
@media screen and (max-width: 776px) {
  .main__item {
    flex-direction: column;
  }
  .main__item_text {
    width: 150px;
  }
  .main__item_info {
    min-width: 70px;
  }
  .cart__mobile {
    display: none;
  }
  .main__item_cont {
    position: absolute;
    right: 0;
    top: 50%;
    display: flex;
    column-gap: 20px;
  }
  .cart__mobile_close {
    display: block;
  }
  .main__item_text {
    font-size: 20px;
    font-weight: 400;
  }
}
@media screen and (max-width: 550px) {
  .main__item_cont {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .main__item_img {
    height: 190px;
  }
}
</style>
