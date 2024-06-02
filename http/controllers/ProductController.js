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
        const response = await PostService.updateProduct(dataObject);
        return response.status;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }
}