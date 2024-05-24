import PromoServices from "../services/PromoServices"

export default class PromoController {
    static async getAll() {
        try {
            const response = await PromoServices.getAll()
            return response.data
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }

    static async deletePromo(id) {
        try {
          const response = await PromoServices.deletePromo(id);
          return response.status;
        } catch (e) {
          console.log(e.response?.data?.message);
          return e.response.status;
        }
    }

    static async createPromo(dataObject) {
      try {
        const response = await PromoServices.createPromo(dataObject);
        return response.status;
      } catch (e) {
        console.log(e.response?.data?.message);
        return e.response.status;
      }
  }
}