import {
  SET_LOADING,
  SET_CATALOGUE_SORT,
  SET_CURRENCY_CODE,
  SET_CURRENCY_INDEX
} from "./constants";
import Api from "../../../../service/main";
import { setConfigStore } from "../multiStore/actions";

const isLoading = data => {
  return {
    type: SET_LOADING,
    data
  };
};

const setCatalogueConfig = data => ({
  type: SET_CATALOGUE_SORT,
  data
});

const setCurrencyCode = data => ({
  type: SET_CURRENCY_CODE,
  data
});

const setCurrencyIndex = data => ({
  type: SET_CURRENCY_INDEX,
  data
});

export const fetchCatalogueConfig = data => dispatch => {
  dispatch(isLoading(true));

  return Api.catalogueConfig
    .get(data)
    .then(response => {
      // TODO: Should be in adapter
      const sortingOptions =
        response &&
        response.catalogueConfig &&
        response.catalogueConfig.sortingOptions
          ? response.catalogueConfig.sortingOptions
          : [];
      const storeConfig =
        response &&
        response.catalogueConfig &&
        response.catalogueConfig.storeConfig;
      dispatch(setCatalogueConfig(sortingOptions));
      dispatch(setConfigStore(storeConfig));
      dispatch(setCurrencyCode(storeConfig.currencyCode));
      dispatch(setCurrencyIndex(storeConfig.currencyIndex));
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      throw error;
    });
};
