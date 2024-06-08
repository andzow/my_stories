<template>
  <section class="categoryLine">
    <div class="categoryLine__container">
        <div class="categoryLine__position" v-auto-animate>
            <p class="categoryLine__item" :class="{categoryLine__item_active: isCategory.includes(item.name)}" v-for="(item, idx) in useCategoryAll" @click="changeCategory(item.name)" :key="idx">{{ item.name }}</p>
        </div>
    </div>
  </section>
</template>

<script>
import ProductController from "@/http/controllers/ProductController";

export default {
    data() {
        return {
            useCategoryAll: useCategoryAll(),
            usePage: usePage(),
            usePageActive: usePageActive(),
            isCategory: [],
            useProducts: useProducts()
        }
    },
    async mounted() {
        if (this.$route.query.category) {
            this.isCategory = this.$route.query.category
        }
    },
    methods: {
        async changeCategory(name) {
            const currentQuery = {...this.$route.query };
        let currentCategory = currentQuery.category;

        if (currentCategory &&!currentCategory.startsWith(';')) {
            const categories = currentCategory.split(";");
            if (categories.includes(name)) {
                const index = categories.indexOf(name);
                if (index > -1) {
                    categories.splice(index, 1);
                }
                currentCategory = categories.join(";");
            } else {
                currentCategory += ";" + name;
            }
        } else {
            currentCategory = name;
        }

        if (this.isCategory.includes(name)) {
            this.isCategory = this.isCategory.filter(category => category !== name);
        } else {
            this.isCategory.push(name);
        }

        currentQuery.category = currentCategory;
        await this.$router.push({ query: currentQuery });

        await this.$router.push({ path: "/admin", query: { ...this.$route.query, page: 1 } })
        const data = await ProductController.getProductAll(this.$route.query);
        this.useProducts = data.products
        this.usePage = data.totalPages
        this.usePageActive = 1
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
    max-width: 1880px;
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