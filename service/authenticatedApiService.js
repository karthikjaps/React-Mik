import ApiService from "./apiService";

export default class AuthenticatedApiService extends ApiService {
  constructor() {
    super();

    // interceptor that appends the authorization header
    this.instance.interceptors.request.use(config => {
      config.headers["Token"] = process.env.API_PRIVATE_KEY;
      return config;
    });
  }
}
