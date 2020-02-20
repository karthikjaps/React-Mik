import MockService from "./service.mock";
import { toHome, toHomeContentRequest } from "./adapter";

export default class Home {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  getHomeContent(data) {
    return this.service
      .getHomeContent(toHomeContentRequest(data))
      .then(response => {
        return toHome(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
