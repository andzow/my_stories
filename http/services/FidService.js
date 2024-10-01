import $api from "..";

export default class FidService {
  static async createFid() {
    return $api.get("/product/createFid");
  }
}
