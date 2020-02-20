import { toMeta, toImage, toView, toVideo } from "../adapter";
import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";

export const toPageStub = data => {
  if (data) {
    return {
      id: data.id,
      name: data.name,
      title: data.title,
      summary: data.summary,
      url: data.url,
      thumbnail: toImage(data.thumbnail)
    };
  }
};

export const toPageJson = data => ({
  store_id: data.storeId,
  slug: data.slug
});

export const toPageResponse = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return toPage(responseData[0]);
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toPage = data => {
  if (data) {
    return {
      id: data.id,
      name: data.name,
      template: data.template,
      title: data.title,
      summary: data.summary,
      html: data.html,
      url: data.url,
      isHidden: data.isHidden,
      meta: toMeta(data.meta),
      thumbnail: toImage(data.thumbnail),
      view: toView(data)
    };
  }
};

export const toPageArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toPage(item);
    });
  }
  return [];
};

export const toPageStubArray = data => {
  if (data && data.length) {
    return data.map(item => {
      return toPageStub(item);
    });
  }
  return [];
};
