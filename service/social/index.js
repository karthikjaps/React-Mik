import MockService from "./service.mock";
import { toSocialPage, toSocialRequest } from "./adapter";

export default class Social {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service.post({ data: toSocialRequest(data) }).then(response => {
      return toSocialPage(response);
    });
  }
}
