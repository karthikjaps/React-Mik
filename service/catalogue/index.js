import MockService from "./service.mock";
import {
  toCatalogue,
  toCatalogueFilters,
  toCatalogueItemPage,
  toGetProductsRequest,
  toGetProductRequest,
  toGetCategoryFiltersRequest
} from "./adapter";

export default class Catalogue {
  constructor({ service } = {}) {
    this.service = service || new MockService();
  }

  getProducts(data) {
    return this.service
      .getProducts({ data: toGetProductsRequest(data) })
      .then(response => {
        return toCatalogue(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  getProduct(data) {
    return this.service
      .getProduct({ data: toGetProductRequest(data) })
      .then(response => toCatalogueItemPage(response))
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  getFilters(data) {
    return this.service
      .getFilters({ data: toGetCategoryFiltersRequest(data) })
      .then(response => {
        return toCatalogueFilters(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
