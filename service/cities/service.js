import AuthenticatedApiService from "../authenticatedApiService";
import { toGetCitiesRequest } from "./adapter";

export default class CitiesService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/checkout/`;
  }

  getCities({ countryCode, lang }) {
    return super.post({
      url: `${this.getServiceUrl()}get_city_details`,
      data: toGetCitiesRequest({ countryCode, lang })
    });
  }

  getCountries({ storeId }) {
    return super.post({
      url: `${this.getServiceUrl()}get_city_details`,
      data: toGetCitiesRequest({ storeId })
    });
  }
}
