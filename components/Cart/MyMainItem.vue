<template>
  <div class="main__item">
    <div class="main__item_header">
      <div class="main__item_image">
        <img
          class="main__item_img"
          width="146"
          height="167"
          :src="'../Primer/catalog13.webp'"
        />
      </div>
      <div class="main__item_block">
        <p class="main__item_text">Брюки из вельвета "Вельвет"</p>
        <p class="main__text_size">
          размер<br />
          <span class="main__text_span">M</span>
        </p>
      </div>
    </div>
    <div class="main__item_price">
      <div class="main__item_summ">5 200 ₽</div>
      <div class="main__item_piece">цена за шт</div>
    </div>
    <div class="main__item_change">
      <div class="main__item_action">
        <button class="main__item_btn">-</button>
        <div class="main__item_res">1</div>
        <button class="main__item_btn">+</button>
      </div>
      <div class="main__item_piece">цена за шт</div>
    </div>
    <div class="main__item_full">
      <div class="main__item_info">5 200 ₽</div>
      <div class="main__item_piece">всего</div>
    </div>
    <div class="main__item_close">
      <button class="main__item_closed">
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main__item {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.main__item_header {
  display: flex;
  align-items: flex-start;
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
}
.main__item_info {
  font-size: 20px;
  font-weight: 400;
  color: var(--brown);
  text-transform: lowercase;
  margin-bottom: 15px;
}
</style>
