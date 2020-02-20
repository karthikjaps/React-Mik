import MockService from "./service.mock";
import { toCitiesResponse, toCountriesResponse } from "./adapter";

export default class Cities {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  getCities(data) {
    return this.service
      .getCities(data)
      .then(response => {
        return toCitiesResponse(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  getCountries(data) {
    return this.service
      .getCities(data)
      .then(response => {
        return toCountriesResponse(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
