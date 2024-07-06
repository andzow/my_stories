<template>
  <section class="dogovor">
    <div class="dogovor__container">
      <h1 class="dogovor__title">
        (&nbsp; ДОГОВОР-ОФЕРТА ИНТЕРНЕТ-МАГАЗИНА «my stories» &nbsp;)
      </h1>
      <div class="dogovor__block" v-for="(item, idx) in dogovor" :key="idx">
        <p v-if="item.termin" class="dogovor__termin" v-html="item.termin"></p>
        <div class="dogovor__info">
          <p
            class="dogovor__text"
            v-for="(info, i) in item.text"
            v-html="info"
            :key="i"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dogovorData from "~/assets/json/dogovor.json";

export default {
  data() {
    return {
      dogovor: dogovorData,
    };
  },
};
</script>

<style scoped>
.dogovor {
  padding-top: 110px;
}
.dogovor__container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dogovor__title {
  font-size: 30px;
  max-width: 900px;
  margin-bottom: 30px;
}
.dogovor__text {
  margin-bottom: 10px;
  text-transform: lowercase;
  text-align: justify;
}
.dogovor__info {
  margin-bottom: 50px;
}
.dogovor__termin {
  margin-bottom: 30px;
}
.dogovor__name {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 30px;
}
.dogovor__block {
  width: 100%;
}
@media (max-width: 620px) {
  .dogovor__title {
    text-align: center;
    font-size: 24px;
  }
}
</style>
