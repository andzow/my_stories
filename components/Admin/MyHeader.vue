<template>
    <section class="header">
        <div class="header__container">
            <div class="header__name">
                <h3 class="header__title">админ панель</h3>
                <span class="header__line"></span>
                <NuxtLink to="/" class="header__title_special">MY STORIES...</NuxtLink>
            </div>
            <div class="header__icons">
                <Transition>
                    <input class="header__input" v-if="isActive" type="text" placeholder="название" @keyup.enter="search"  v-model="isName">
                </Transition>
                <img class="header__loop" src="~/assets/images/Admin/loop.svg" alt="" @click="isActive = !isActive">
                <img class="header__logout" src="~/assets/images/Admin/logout.svg" @click="useStatus = 'logout'" alt="">
            </div>
        </div>
    </section>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";

export default {
    data() {
        return {
            isActive: false,
            useStatus: useStatus(),
            isName: "",
            usePage: usePage(),
            usePageActive: usePageActive(),
            useProducts: useProducts()
        }
    },
    mounted() {
        this.isName = this.$route.query.name
    },
    methods: {
        async search() {
            await this.$router.push({ path: "/admin", query: { ...this.$route.query, name: this.isName, page: 1 } })
            const data = await ProductController.getProductAll(this.$route.query);
            this.useProducts = data.products
            this.usePage = data.totalPages
            this.usePageActive = 1
        },
    }
}
</script>

<style scoped>
.header {
    position: relative;
    padding: 25px 0px;
    margin: 0 auto;
    z-index: 1;
}
.header__container {
    padding: 0 20px;
    max-width: 1880px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header__name {
    display: flex;
    align-items: center;
}
.header__line {
    margin: 0 15px;
    font-size: 30px;
    height: 18px;
    width: 1px;
    background: var(--brown);
}
.header__title {
    font-size: 30px;
    transform: translateY(-2px);
}
.header__title_special {
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 6px;
    transition: all .3s ease;
    cursor: pointer;
}
.header__title_special:hover {
    transform: scale(1.05);
}
.header__loop {
    cursor: pointer;
    transition: all .3s ease;
}
.header__loop:hover {
    transform: scale(1.2);
}
.header__logout {
    cursor: pointer;
    margin-left: 20px;
    transition: all .3s ease;
}
.header__logout:hover {
    transform: scale(1.2);
}
.header__icons {
    display: flex;
    align-items: center;
}
.header__input {
    padding: 8px 15px;
    background-color: #f7f6f3;
    border: 1px solid var(--brown);
    margin-right: 20px;
    transition: all .3s ease;
}
.v-enter-active,
.v-leave-active {
  transition: width padding 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  width: 0;
  padding: 0;
}
</style>