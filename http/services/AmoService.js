import $api from "..";

export default class AmoService {
  static async create(data) {
    return $api.post("amo/createApplication", data);
  }
}
