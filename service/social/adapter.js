import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toSocialRequest = ({ storeId }) => ({
  store_id: storeId
});

export const toSocialItem = data => {
  if (data) {
    return {
      id: data.id,
      title: data.title,
      url: data.url,
      platform: data.platform
    };
  }
};

export const toSocialPage = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      return toSocialItemArray(data.data);
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return [];
};

export const toSocialItemArray = data => {
  if (data && data.length) {
    return data.map(n => toSocialItem(n));
  }
  return [];
};
