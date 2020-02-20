import MockService from "./service.mock";
import { toCatalogueConfigRequest, toCatalogueConfigResponse } from "./adapter";

export default class CatalogueConfig {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service
      .getCatalogueConfig(toCatalogueConfigRequest(data))
      .then(response => toCatalogueConfigResponse(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
