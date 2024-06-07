<template>
  <div class="about">
    <div class="about__header">
      <h1 class="about__header_title">
        {{ `( &nbsp;${$route.params.catalog}&nbsp; )` }}
      </h1>
      <div class="about__header_arcticle">8723913108</div>
    </div>
    <div class="about_price">
      <div class="about__price_text">
        <span class="about__price_summ">4 800 </span
        ><span class="about__price_span">₽</span>
      </div>
      <div class="about__price_text">
        <span class="about__price_summ">4 800 </span
        ><span class="about__price_span">₽</span>
      </div>
    </div>
    <div class="about__dolyami">
      <img :src="'../Primer/dolyami.png'" />
    </div>
    <CatalogIdAboutMyAboutSize />
    <CatalogIdAboutMyAboutColor />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  margin-left: 135px;
  margin-right: 69px;
}
.about__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
}
.about__header_title {
  font-weight: 400;
  font-size: 50px;
  color: var(--brown);
  text-transform: lowercase;
}
.about__header_arcticle {
  font-weight: 300;
  font-size: 16px;
  color: var(--brown);
  text-transform: lowercase;
}
.about_price {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
}
.about__price_text {
  font-weight: 500;
  font-size: 20px;
  color: var(--brown);
  text-transform: lowercase;
}
.about__price_text:nth-child(2) {
  margin-left: 136px;
  text-decoration: line-through;
}
.about__dolyami {
  margin-bottom: 50px;
}
</style>
