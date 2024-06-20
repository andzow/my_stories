<template>
  <section class="main">
    <div class="main__content">
      <div class="main__image">
        <svg
          width="1201"
          height="557"
          viewBox="0 0 1201 557"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1055.91 550.016V432.356H798.141V386.215L1065.88 7.85791H1118.04V380.832H1200.9V432.356H1118.04V550.016H1055.91ZM1055.91 380.832V83.2217H1072.78L850.307 396.981V380.832H1055.91Z"
            fill="#D2BCAE"
          />
          <path
            d="M591.306 556.936C529.933 556.936 482.881 533.097 450.149 485.418C417.417 437.739 401.051 368.783 401.051 278.552C401.051 187.808 417.417 118.852 450.149 71.6859C482.881 24.5195 529.933 0.936279 591.306 0.936279C653.189 0.936279 700.242 24.5195 732.462 71.6859C765.194 118.852 781.56 187.551 781.56 277.783C781.56 368.527 765.194 437.739 732.462 485.418C699.73 533.097 652.678 556.936 591.306 556.936ZM591.306 501.567C634.266 501.567 666.231 483.367 687.2 446.967C708.169 410.567 718.653 354.172 718.653 277.783C718.653 200.881 708.169 144.743 687.2 109.368C666.231 73.4803 634.266 55.5366 591.306 55.5366C548.856 55.5366 516.891 73.4803 495.411 109.368C474.442 145.255 463.958 201.394 463.958 277.783C463.958 354.172 474.442 410.567 495.411 446.967C516.891 483.367 548.856 501.567 591.306 501.567Z"
            fill="#D2BCAE"
          />
          <path
            d="M258.663 550.016V432.356H0.898438V386.215L268.636 7.85791H320.803V380.832H403.655V432.356H320.803V550.016H258.663ZM258.663 380.832V83.2217H275.54L53.065 396.981V380.832H258.663Z"
            fill="#D2BCAE"
          />
        </svg>
      </div>
      <div class="main__block">
        <div class="main__header">
          <div class="main__text">( &nbsp;404&nbsp; )</div>
          <div class="main__item">
            к сожалению, эта страница была удалена или не найдена
          </div>
        </div>
        <div class="main__btn">
          <UIButtonMyButton
            @click="$router.push('/')"
            info="вернуться на главную"
            fontSize="24"
            variant="main"
            data-cursor-class="animateCursor"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
  padding-top: 150px;
  min-height: 70vh;
  z-index: 17;
}
.main__content {
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}
.main__image {
  transform: translateY(10px);
}
.main__image svg {
  transform: translateX(-200px);
  width: 150vw;
}
.main__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 63px;
}
.main__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
}
.main__text {
  font-weight: 400;
  font-size: 16px;
  color: var(--brown);
}
.main__item {
  font-weight: 400;
  font-size: 16px;
  color: var(--brown);
  max-width: 250px;
  text-align: justify;
}
.main__btn {
  margin-bottom: 30px;
  width: 100%;
}
</style>
