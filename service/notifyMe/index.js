import MockAuthenticationService from "./service.mock";
import { toPostUserEmail, postUserEmailResponse } from "./adapter";

export default class NotifyMe {
  constructor({ service } = {}) {
    this.service = service || new MockAuthenticationService();
  }

  postUserEmail(data) {
    return this.service
      .postUserEmail({ data: toPostUserEmail(data) })
      .then(response => {
        return postUserEmailResponse(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
