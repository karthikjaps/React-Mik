import AuthenticatedApiService from "../authenticatedApiService";

export default class GroupsService extends AuthenticatedApiService {
  getServiceUrl() {
    return `${super.getServiceUrl()}connector/config/`;
  }

  getGroups(data) {
    return super.post({
      url: `${this.getServiceUrl()}get_groups`,
      data
    });
  }
}
