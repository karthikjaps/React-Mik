import AuthenticatedApiService from "../authenticatedApiService";

let id = 10000;

export default class HeaderMockService extends AuthenticatedApiService {
  get({ id, url, data }) {
    const header = {
      langs: ["EN", "AR"],
      flags: [
        "/img/icons/header/country_1.png",
        "/img/icons/header/country_2.svg",
        "/img/icons/header/international.svg"
      ]
    };

    return Promise.resolve(header);
  }
}
