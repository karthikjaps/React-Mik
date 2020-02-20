import { toGroupsRequest, toGroupsResponse } from "./adapter";

export default class Groups {
  constructor({ service } = {}) {
    this.service = service;
  }

  getGroups(data) {
    return this.service
      .getGroups(toGroupsRequest(data))
      .then(response => {
        return toGroupsResponse(response);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}
