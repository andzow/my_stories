import $api from "..";

export default class PromoServices {
  static async getAll() {
    return $api.get("/promo/get");
  }

  static async deletePromo(id) {
    return $api.delete("/promo/delete", { data: { id } });
  }

  static async createPromo(FormObject) {
    return $api.post("/promo/create", FormObject);
  }
  static async setPromo(FormObject) {
    return $api.post("/promo/check", FormObject);
  }
  static async checkPromo(FormObject) {
    return $api.post("/promo/identification", FormObject);
  }
}
