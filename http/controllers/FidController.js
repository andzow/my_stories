import FidService from "@/http/services/FidService";

export default class FidController {
  static async createFid(data) {
    try {
      const response = await FidService.createFid();
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
}
