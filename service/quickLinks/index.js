import MockService from "./service.mock";
import { toQuickLinkPage, toQuickLinksRequest } from "./adapter";

export default class QuickLinks {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service
      .post({ data: toQuickLinksRequest(data) })
      .then(response => {
        return toQuickLinkPage(response);
      });
  }
}
