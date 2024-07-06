import $api from "..";

export default class MailServices {
  static async getPvz(data) {
    return $api.post("/mail/getIndex", data);
  }
  static async getPrice(data) {
    return $api.post("/mail/getPrice", data);
  }
  static async getAddresPvz(data) {
    return $api.post("/mail/getPvz", data);
  }
  static async normalizeAddress(data) {
    return $api.post("/mail/getAddress", data);
  }
}
