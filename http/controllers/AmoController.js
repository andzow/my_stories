import $api from "..";
import AmoService from "../services/AmoService";

export default class AmoController {
  static async create(login) {
    try {
      const response = await AmoService.create(data);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
}
