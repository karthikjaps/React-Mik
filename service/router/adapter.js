import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toDefaultRoutes = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        routes: toDefaultRoute(responseData)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toDefaultRoute = data => {
  if (data) {
    return {
      root: data.root,
      pages: toDefaultRouteArray(data.urlsAndDocTypes)
    };
  }
  return null;
};

export const toDefaultRouteArray = data => {
  if (data && data.length) {
    return data.map(n => toRoute(n));
  }
  return [];
};

export const toRoute = data => {
  if (data) {
    return {
      url: `/:store${data.url}`,
      value: data.value,
      name: data.name,
      id: data.id || null
    };
  }
  return null;
};

export const toRoutesFromApi = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        routes: toRouteFromApiArray(responseData)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toRouteFromApiArray = data => {
  if (data && data.length) {
    return data.map(n => toRouteFromApi(n));
  }
  return [];
};

export const toRouteFromApi = data => {
  if (data) {
    return {
      url: `/:storeId/shop${data.url}`,
      value: data.value,
      name: data.name,
      id: data.id || null
    };
  }
  return null;
};
