import $api from "..";

export default class CdekService {
  static async getCity(data) {
    return $api.post("/cdek/getCity", data);
  }
  static async getOptions(data) {
    return $api.post("/cdek/getOpptions", data);
  }
  static async getPvz(data) {
    return $api.post("/cdek/getPvz", data);
  }
}
