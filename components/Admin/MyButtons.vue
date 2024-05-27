<template>
    <section class="position">
        <div class="position__container">
            <div class="position__item">
                <UIMyButton class="position__btn" :info="'разделы каталога'" @click="useCategory = true"/>
                <UIMyButton :info="'промокоды'" @click="useCode = true"/>
            </div>
            <div class="position__item">
                <button class="position__btn_add" @click="useProduct = true">
                    <span class="position__text">добавить товар</span>
                    <img src="~/assets/images/Admin/add.svg" alt="">
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            useCode: useCode(),
            useCategory: useCategory(),
            useProduct: useProduct()
        }
    }
}
</script>

<style scoped>
.position {
    padding-top: 10px;
}
.position__container {
    padding: 0 20px;
    max-width: 1380px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.position__item {
    display: flex;
    align-items: center;
    height: 100%;
}
.position__btn {
    margin-right: 10px;
}
.position__btn_add {
    padding: 6px 20px;
    background: var(--brown);
    color: var(--yellow);
    font-size: 20px;
    display: flex;
    align-items: center;
    height: 52px;
    transition: all .3s ease;
}
.position__btn_add:hover {
    transform: scale(1.03);
}
.position__text {
    transform: translateY(-2px);
    margin-right: 10px;
}
</style>