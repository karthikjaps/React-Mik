import AuthenticatedApiService from "../authenticatedApiService";

export default class CartMockService extends AuthenticatedApiService {
  get({ data }) {
    // TODO
    return Promise.reject("Not implemented");
  }

  submit({ data }) {
    // TODO
    return Promise.reject("Not implemented");
  }
}
