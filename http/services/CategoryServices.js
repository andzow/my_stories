import $api from "..";

export default class CategoryServices {
  static async getAll() {
    return $api.get("/category/get");
  }

  static async getCategory() {
    return $api.get("/category/getCategory", {
      params: query,
    });
  }

  static async createCategory(FormObject) {
    return $api.post("/category/create", FormObject);
  }

  static async deleteCategory() {
    return $api.delete("/category/delete");
  }

  static async deleteCategoryOne(id) {
    return $api.delete("/category/deleteOne", { data: { id } });
  }
}
