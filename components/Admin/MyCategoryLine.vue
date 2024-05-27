<template>
  <section class="categoryLine">
    <div class="categoryLine__container">
        <div class="categoryLine__position" v-auto-animate>
            <p class="categoryLine__item" :class="{categoryLine__item_active: isCategory === item.name}" v-for="(item, idx) in useCategoryAll" @click="changeCategory(item.name)" :key="idx">{{ item.name }}</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            useCategoryAll: useCategoryAll(),
            isCategory: 'все'
        }
    },
    async mounted() {
        if (this.$route.query.category) {
            this.isCategory = this.$route.query.category
        }
    },
    methods: {
        async changeCategory(name) {
            await this.$router.push({ path: "/admin", query: { ...this.$route.query, category: name } })
            this.isCategory = name
        }
    }
}
</script>

<style scoped>
.categoryLine {
    padding-top: 20px;
}
.categoryLine__container {
    padding: 0 20px;
    max-width: 1380px;
    margin: 0 auto;
}
.categoryLine__position {
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
}
.categoryLine__item {
    cursor: pointer;
    margin: 10px 25px 0 0;
    font-size: 18px;
    transition: all .3s ease;
}
.categoryLine__item:hover {
    transform: scale(1.1);

}
.categoryLine__item_active {
    font-weight: 900;
}
</style>