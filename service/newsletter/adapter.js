import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toPostUserEmail = data => {
  if (data) {
    return {
      email: data.email
    };
  }
};

export const postUserEmailResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      return data.message;
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};
