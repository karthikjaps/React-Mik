import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toCitiesResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;
      return responseData[0] ? responseData[0].cities : [];
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toGetCitiesRequest = ({ countryCode, lang }) => ({
  country_code: countryCode,
  store_code: lang
});

export const toCountriesResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;
      return responseData[0] ? responseData[0].countries[0] : [];
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toGetCountriesRequest = ({ storeId }) => ({
  store_Id: storeId
});
