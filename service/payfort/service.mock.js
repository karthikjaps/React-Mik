import ApiService from "../apiService";

export default class PayfortMockService extends ApiService {
  tokenize({ data }) {
    return Promise.resolve();
  }
}
