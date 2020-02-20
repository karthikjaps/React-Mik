import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toCatalogueConfigRequest = data => ({
  store_id: data.storeId
});

export const toCatalogueConfigResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;
      return {
        catalogueConfig: toCatalogueConfig(responseData[0])
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toCatalogueConfig = data => {
  if (data) {
    return {
      storeConfig: toStoreConfig(data.store_config),
      sortingOptions: toSortingOptionArray(data.sorting_options)
    };
  }
  return null;
};

export const toStoreConfig = data => {
  if (data) {
    return {
      countryCallingCode: data.country_calling_code,
      countryCode: data.country_code,
      countryName: data.country_name,
      localeIdentifier: data.locale_identifier,
      currencySymbol: data.currency_symbol,
      currencyCode: data.currency_code,
      currencyIndex: data.currency_index,
      storeId: data.store_id,
      storeName: data.store_name
    };
  }
  return null;
};

export const toSortingOptionArray = data => {
  if (data && data.length) {
    return data.map(n => toSortingOption(n));
  }
  return [];
};

export const toSortingOption = data => {
  if (data) {
    return {
      title: data.title,
      items: toSortingOptionItemArray(data.items)
    };
  }
  return null;
};

export const toSortingOptionItemArray = data => {
  if (data && data.length) {
    return data.map(n => toSortingOptionItem(n));
  }
  return [];
};

export const toSortingOptionItem = data => {
  if (data) {
    return {
      title: data.title,
      value: data.value,
      image: data.image
    };
  }
  return null;
};
