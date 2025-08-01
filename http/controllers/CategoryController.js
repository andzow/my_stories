import CategoryServices from "../services/CategoryServices"

export default class CategoryController {
    static async getAll() {
        try {
            const response = await CategoryServices.getAll()
            return response.data
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }

    static async getCategory(query) { // категории
      try {
          const response = await CategoryServices.getCategory(query)
          return response.data
      } catch (e) {
          console.log(e.response?.data?.message)
          return e.response.status
      }
  }

    static async createCategory(dataObject) {
      try {
        const response = await CategoryServices.createCategory(dataObject);
        return response.status;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async deleteCategory() {
      try {
        const response = await CategoryServices.deleteCategory();
        return response.status;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }

    static async deleteCategoryOne(id) {
      try {
        const response = await CategoryServices.deleteCategoryOne(id);
        return response.status;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
    }
}