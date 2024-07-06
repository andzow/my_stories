import MailServices from "../services/MailServices";

export default class MailController {
  static async getPvz(data) {
    try {
      const response = await MailServices.getPvz(data);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }

  static async deletePromo(data) {
    try {
      const response = await MailServices.getPrice(data);
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

  static async check(dataObject) {
    try {
      const response = await PromoServices.check(dataObject);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
  static async getAddresPvz(dataObject) {
    try {
      const response = await PromoServices.getAddresPvz(dataObject);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
  static async normalizeAddress(dataObject) {
    try {
      const response = await PromoServices.normalizeAddress(dataObject);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
}
