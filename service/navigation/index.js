import MockService from "./service.mock";
import { toNavigation, toNavigationRequest } from "./adapter";

export default class Navigation {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service
      .post({ data: toNavigationRequest(data) })
      .then(response => {
        return toNavigation(response);
      });
  }
}
