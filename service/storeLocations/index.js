import MockService from "./service.mock";
import { toStoreLocations, toStoreLocationsRequest } from "./adapter";

export default class StoreLocations {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service
      .post({ data: toStoreLocationsRequest(data) })
      .then(response => toStoreLocations(response));
  }
}
