import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toGroupsRequest = data => ({
  store_id: data.storeId
});

export const toGroupsResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;
      return { groups: toGroupsArray(responseData) };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toGroupsArray = data => {
  if (data && data.length) {
    return data.map(n => toGroup(n));
  }
  return [];
};

export const toGroup = data => {
  if (data) {
    return {
      id: data.default_store_id,
      groupId: data.group_id,
      websiteId: data.website_id,
      name: data.name,
      rootCategoryId: data.root_category_id,
      defaultStoreId: data.default_store_id,
      countryFlag: data.country_flag,
      isSelected: data.is_selected,
      views: toStoreViewArray(data.storeviews)
    };
  }
  return null;
};

export const toStoreViewArray = data => {
  if (data && data.length) {
    return data.map(n => toStoreView(n));
  }
  return [];
};

export const toStoreView = data => {
  if (data) {
    return {
      id: data.store_id,
      storeId: data.store_id,
      code: data.code,
      websiteId: data.website_id,
      groupId: data.group_id,
      name: data.name,
      sortOrder: data.sort_order,
      isActive: data.is_active,
      geoipCountryCode: data.geoip_country_code,
      useStore: data.use_store,
      langFlag: data.lang_flag
    };
  }
  return null;
};
