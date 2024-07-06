<template>
  <section class="politics">
    <div class="politics__container">
      <h1 class="politics__title">
        ( &nbsp;ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ ПЕРСОНАЛЬНЫХ ДАННЫХ КОМПАНИИ&nbsp; )
      </h1>
      <div class="politics__block" v-for="(item, idx) in politics" :key="idx">
        <h2 class="politics__name" v-if="item.title" v-html="item.title"></h2>
        <div class="politics__info">
          <p
            class="politics__text"
            v-for="(info, i) in item.text"
            v-html="info"
            :key="i"
          ></p>
        </div>
        <p v-if="item.termin" class="politics__termin" v-html="item.termin"></p>
      </div>
    </div>
  </section>
</template>

<script>
import politicsData from "~/assets/json/politics.json";

export default {
  data() {
    return {
      politics: politicsData,
    };
  },
};
</script>

<style scoped>
.politics {
  padding-top: 110px;
}
.politics__container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.politics__title {
  font-size: 30px;
  max-width: 620px;
  margin-bottom: 30px;
}
.politics__text {
  margin-bottom: 20px;
  text-align: justify;
  text-transform: lowercase;
}
.politics__info {
  margin-bottom: 50px;
}
.politics__termin {
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 30px;
}
.politics__name {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 30px;
}
@media (max-width: 620px) {
  .politics__title {
    text-align: center;
    font-size: 24px;
  }
}
</style>
