import MockService from "./service.mock";
import { toPromotionPage, toGetPromotionRequest } from "./adapter";

export default class Promotion {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  getPromotion(data) {
    return this.service
      .getProduct({ data: toGetPromotionRequest(data) })
      .then(response => toPromotionPage(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
