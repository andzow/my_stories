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

  static async payment(dataObject) {
    try {
      const response = await MailServices.payment(dataObject);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
  static async paymentDolyami(dataObject) {
    try {
      const response = await MailServices.paymentDolyami(dataObject);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
  static async checkLivePhone(dataObject) {
    try {
      const response = await MailServices.checkLivePhone(dataObject);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
}
