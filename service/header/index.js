import MockService from "./service.mock";
import { toHeader, toSitemap } from "./adapter";

export default class Header {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service.get({ data }).then(response => {
      return toHeader(response);
    });
  }
}
