import {
  toTokenizeRequest,
  toTokenizeHtmlResponse,
  toPurchaseRequest,
  toPurchaseResponse
} from "./adapter";
import PayfortMockService from "./service.mock";

export default class Payfort {
  constructor({ service } = {}) {
    this.service = service || new PayfortMockService();
  }

  tokenize(data) {
    return this.service
      .tokenize({ data: toTokenizeRequest(data) })
      .then(response => toTokenizeHtmlResponse(response));
  }

  purchase(data) {
    return this.service
      .purchase({ data: toPurchaseRequest(data) })
      .then(response => toPurchaseResponse(response));
  }
}
