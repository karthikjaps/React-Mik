import AuthenticatedApiService from "../authenticatedApiService";
import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export default class NotifyMeMockService extends AuthenticatedApiService {
  postUserEmail({ data }) {
    if (data.email) {
      return Promise.resolve({
        status: STATUS_SUCCESS,
        message: ["SUCCESS"]
      });
    } else {
      return Promise.resolve({
        status: STATUS_FAIL,
        message: ["Email is missing!"]
      });
    }
  }
}
