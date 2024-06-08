<template>
  <div class="pagination" v-if="useProducts.length !== 0">
    <div class="pagination__container">
      <div class="pagination__position">
        <div class="pagination__arrow" @click="switching(isActive - 1)">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9629 7.4126L4.37539 15.0001L11.9629 22.5876" stroke="#AF9280" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.625 15H4.5875" stroke="#AF9280" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="pagination__box">
          <div class="pagination__items">
            <div class="pagination__item" :class="{ pagination__item_active: isActive == number }"
              v-for="(number, idx) in isPage" :key="idx" @click="switching(number)">
              {{ number }}
            </div>
          </div>
        </div>
        <div class="pagination__arrow_special" @click="switching(isActive + 1)">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0391 7.4126L25.6266 15.0001L18.0391 22.5876" stroke="#AF9280" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.375 15H25.4125" stroke="#AF9280" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import ProductController from "@/http/controllers/ProductController";
  export default {
    data() {
      return {
        isActive: usePageActive(),
        isPage: usePage(),
        useProducts: useProducts(),
        itemWidthActive: 0,
        isActiveLeft: false,
        isActiveRight: true,
      };
    },
    async mounted() {
      if(this.$route.query.page !== undefined) {
        this.isActive = this.$route.query.page
      } else {
        this.isActive = 1
      }
      this.active()
      const data = await ProductController.getProductAll(this.$route.query);
      this.isPage = data.totalPages
    },
    methods: {
      async switching(number) {
        if (number > this.isPage) {
          this.isActive = this.isPage;
          number = this.isPage;
        }
        if (number < 1) {
          this.isActive = 1;
          number = 1;
        }
  
        const positionInfo = document.querySelector(".pagination__box");
        const position = document.querySelector(".pagination__items");
        const items = document.querySelectorAll(".pagination__item");
        const item = document.querySelector(".pagination__item").offsetWidth;
        const element = items[number - 1];
        const positionRect = positionInfo.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
  
        if (number <= this.isPage - 3) {
          if (elementRect.right + 5 == positionRect.right) {
            this.itemWidthActive += (item + 5) * 3;
            position.style.transform = `translateX(-${this.itemWidthActive}px)`;
          }
        } else {
          if (
            elementRect.right + 5 == positionRect.right &&
            number !== this.isPage
          ) {
            const count = this.isPage - number;
            const countFinal = this.itemWidthActive + (item + 5) * count;
            position.style.transform = `translateX(-${countFinal}px)`;
          }
        }
  
        if (number !== 1 || number !== 2 || number !== 3) {
          if (elementRect.left == positionRect.left) {
            this.itemWidthActive -= (item + 5) * 3;
            position.style.transform = `translateX(-${this.itemWidthActive}px)`;
          }
        }
  
        if (number == 1 || number == 2 || number == 3) {
          this.itemWidthActive = 0;
          position.style.transform = `translateX(-${this.itemWidthActive}px)`;
        }
  
        this.isActive = number;
        await this.$router.push({
          query: { ...this.$route.query, page: number },
        });
        
        if (this.isActive === 1) {
          this.isActiveLeft = false;
        } else {
          this.isActiveLeft = true;
        }
        if (this.isActive === this.isPage) {
          this.isActiveRight = false;
        } else {
          this.isActiveRight = true;
        }

        const data = await ProductController.getProductAll(this.$route.query);
        this.useProducts = data.products
        
        this.scrollToAnchor()
      },
      async start(number) {
        if (number > this.isPage) {
          this.isActive = this.isPage;
          number = this.isPage;
        }
  
        if (number < 1) {
          this.isActive = 1;
          number = 1;
        }
  
        const position = document.querySelector(".pagination__items");
        const item = document.querySelector(".pagination__item").offsetWidth;
  
        if (number <= this.isPage - 5) {
          this.itemWidthActive = (item + 5) * (number - 3);
          position.style.transform = `translateX(-${this.itemWidthActive}px)`;
        } else {
          this.itemWidthActive = (item + 5) * (this.isPage - 6);
          position.style.transform = `translateX(-${this.itemWidthActive}px)`;
        }
  
        this.isActive = number;
        await this.$router.push({
          query: { ...this.$route.query, page: number },
        });
        if (this.isActive === 1) {
          this.isActiveLeft = false;
        } else {
          this.isActiveLeft = true;
        }
        if (this.isActive === this.isPage) {
          this.isActiveRight = false;
        } else {
          this.isActiveRight = true;
        }
      },
      async active() {
        if (this.isActive == 1) {
          this.isActiveLeft = false;
        } else {
          this.isActiveLeft = true;
        }

        if (this.isActive == this.isPage) {
          this.isActiveRight = false;
        } else {
          this.isActiveRight = true;
        }
      },
      scrollToAnchor() {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      },
    },
  }
  </script>
  
  <style scoped>
  .pagination {
    padding-top: 70px;
    padding-bottom: 100px;
  }
  .pagination__container {
  display: flex;
  justify-content: center;
  }
  .pagination__position {
    display: flex;
    align-items: center;
  }
  .pagination__btn {
    width: 100%;
    padding: 20px 0;
    border-radius: 20px;
    background: #af9280;
    font-size: 22px;
    color: #fff;
  }
  .pagination__arrow {
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .pagination__arrow_special {
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .pagination__arrow_special:hover {
    transform: translateX(5px);
  }
  .pagination__arrow:hover {
    transform: translateX(-5px);
  }
  .pagination__box {
    max-width: 270px;
    overflow: hidden;
    margin: 0 10px;
  }
  .pagination__items {
    display: flex;
    align-items: center;
    transition: all 0.4s ease;
  }
  .pagination__item {
    border: 1px solid var(--brown);
    width: 60px;
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 200;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .pagination__item:not(:last-child) {
    margin-right: 5px;
  }
  .pagination__item:hover {
    background: var(--brown);
    color: #fff;
  }
  .pagination__item_active {
    background: var(--brown) !important;
    color: #fff;
  }
  </style>