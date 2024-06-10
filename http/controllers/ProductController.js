import ProductServices from "../services/ProductServices"

export default class ProductController {
    static async createProduct(dataObject) {
      try {
        const response = await ProductServices.createProduct(dataObject);
        return response.status;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async getSearch(query) { // Поиск
      try {
        const response = await ProductServices.getSearch(query);
        return response.data;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async getNew() { // Новинки
      try {
        const response = await ProductServices.getNew();
        return response.data;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async getFilter(query) { // Отфильтрованые товары
      try {
        const response = await ProductServices.getFilter(query);
        return response.data;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async getProductAll(query) {
      try {
        const response = await ProductServices.getProductAll(query);
        return response.data;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async updateProduct(dataObject) {
      try {
        const response = await ProductServices.updateProduct(dataObject);
        return response.status;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async updateProductWatch(dataObject) {
      try {
        const response = await ProductServices.updateProductWatch(dataObject);
        return response.status;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async deleteProduct(id) {
      try {
        const response = await ProductServices.deleteProduct(id);
        return response.status;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async productOne(data) { // получение товара
      try {
        const response = await ProductServices.productOne(data);
        return response.data;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }
}