<template>
  <section class="facts">
    <div class="facts__content">
      <div class="facts__menu">
        <h2 class="facts__title">факты о нас</h2>
        <div class="facts__items">
          <div class="facts__item" v-for="(item, idx) in arrFacts" :key="item">
            <div class="facts__number" :class="['facts__number' + (idx + 1)]">
              {{ `( &nbsp;${idx + 1}&nbsp; )` }}
            </div>
            <p
              class="facts__text"
              ref="factsText"
              :class="['facts__text' + (idx + 1)]"
              v-html="item.text"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <div class="facts__images">
      <div class="facts__images_img facts__images_img1">
        <img
          class="facts__images_photo"
          src="@/assets/images/Brand/facts1.webp"
          alt="Фотография бренда"
        />
      </div>
      <div class="facts__images_img facts__images_img2">
        <img
          class="facts__images_photo"
          src="@/assets/images/Brand/facts2.webp"
          alt="Фотография бренда"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrFacts: [
        {
          text: `бренд основан в <span class="facts__span">2020 году </span>командой профессионалов, которая до этого занималась индивидуальными заказами и пошивом люксовых платьев.`,
        },
        {
          text: `<span class="facts__span">70%</span> наших клиентов, сделав первый заказ - остаются с нами. Спасибо, что вы выбираете нас снова и снова, доверяя нашему качеству и сервису.`,
        },
        {
          text: `У нас есть специальный отдел, который <span class="facts__span">под микроскопом</span> внимательно изучает все ваши идеи, пожелания и воплощает их в жизнь.`,
        },
        {
          text: ` вся наша команда - <span class="facts__span">творческие и разносторонние люди.</span> Мы любим петь, танцевать и всю энергию вкладываем в новые вещи для вас`,
        },
      ],
      useGsapAnimationOpacity: useGsapAnimationOpacity,
    };
  },
  mounted() {
    const docEl = document.querySelectorAll(".facts__span");
    docEl.forEach((el) => (el.style.fontWeight = "700"));

    this.useGsapAnimationOpacity(
      [
        ".facts__number1",
        ".facts__number2",
        ".facts__number3",
        ".facts__number4",
        ".facts__title",
      ],
      ".facts__item"
    );
    let delay = 0.5;
    this.$refs.factsText.forEach((el, idx) => {
      this.useGsapAnimationOpacity(
        [".facts__text" + (idx + 1)],
        ".facts__item",
        false,
        delay
      );
      delay += 0.2;
    });
    this.useGsapAnimationOpacity(
      [".facts__images_img1"],
      ".facts__images_img1",
      false,
      0.7
    );
    this.useGsapAnimationOpacity(
      [".facts__images_img2"],
      ".facts__images_img2",
      false,
      0.7
    );
  },
};
</script>

<style scoped>
.facts {
  position: relative;
  width: 100%;
  padding-bottom: 56px;
  z-index: 17;
}
.facts__content {
  border-bottom: 1px solid #d2bcae;
}
.facts__menu {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
}
.facts__title {
  font-weight: 300;
  font-size: 17px;
  color: var(--brown);
  transform: translateY(25px);
  opacity: 0;
}
.facts__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 85px;
  max-width: 1600px;
  margin-bottom: 25px;
}
/* .facts__item {
  border: 1px solid red;
} */
.facts__number {
  font-weight: 500;
  font-size: 36px;
  color: var(--brown);
  margin-bottom: 78px;
  text-align: end;
  opacity: 0;
}
.facts__text {
  font-weight: 300;
  font-size: 17px;
  color: var(--brown);
  text-transform: lowercase;
  text-align: justify;
  opacity: 0;
}
.facts__images {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 40px 30px 96px 30px;
  display: grid;
  grid-template-columns: repeat(2, 19% 81%);
}
.facts__images_img1 {
  opacity: 0;
}
.facts__images_img2 {
  opacity: 0;
}
.facts__images_img:nth-child(1) img {
  width: 100%;
  object-fit: cover;
}
.facts__images_img:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-80px);
}
</style>
