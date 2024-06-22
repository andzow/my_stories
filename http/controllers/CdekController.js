import CdekService from "../services/Cdek.service";

export default class CdekController {
  static async getCity(data) {
    try {
      const response = await CdekService.getCity(data);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
  static async getOptions(data) {
    try {
      const response = await CdekService.getOptions(data);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
  static async getPvz(data) {
    try {
      const response = await CdekService.getPvz(data);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
}
