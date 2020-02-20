import { toCatalogueItemArray } from "../catalogue/adapter";
import { STATUS_SUCCESS, STATUS_FAIL } from "../constants";
import {
  BANNERS,
  PRODUCTS,
  MAIN_BANNER,
  MAIN_BANNER_MOBILE,
  SUBHEADER_BANNER,
  TWO_COLUMN_BANNERS,
  THREE_COLUMN_BANNERS,
  CATALOGUE_CAROUSEL,
  DEFAULT_LIMIT,
  DEFAULT_OFFSET
} from "./constants";

export const toHome = data => {
  if (data) {
    if (data.status === STATUS_SUCCESS) {
      const { data: responseData } = data;

      return {
        ...toHomeContent(responseData)
      };
    }
    if (data.status === STATUS_FAIL) {
      throw Error(data.message);
    }
  }
  return null;
};

export const toHomeContentRequest = ({ storeId }) => ({
  store_id: storeId,
  limit: DEFAULT_LIMIT,
  offset: DEFAULT_OFFSET
});

const toHomeContent = data => {
  let response = {
    mainBanners: [],
    mainBannersMobile: [],
    twoColumnBanners: [],
    threeColumnBanners: [],
    products: []
  };
  data
    .filter(n => n)
    .forEach(n => {
      switch (n.type) {
        case BANNERS:
          response = Object.assign(response, toHomeContentBanner(n.data));
          break;
        case PRODUCTS:
          const productsObj = { ...response };
          productsObj.products.push(toHomeContentProducts(n.data));
          response = Object.assign(response, productsObj);
          break;
        default:
          break;
      }
    });
  return response;
};

const toHomeContentBanner = data => {
  switch (data.type) {
    case MAIN_BANNER:
      return {
        mainBanners: toBannerArray(data.items)
      };
    case MAIN_BANNER_MOBILE:
      return {
        mainBannersMobile: toBannerArray(data.items)
      };
    case SUBHEADER_BANNER:
      return {
        subheaderBanners: toBannerArray(data.items)
      };
    case TWO_COLUMN_BANNERS:
      return {
        twoColumnBanners: toBannerArray(data.items)
      };
    case THREE_COLUMN_BANNERS:
      return {
        threeColumnBanners: toBannerArray(data.items)
      };
    default:
      break;
  }
};

const toHomeContentProducts = data => {
  switch (data.type) {
    case CATALOGUE_CAROUSEL:
      return {
        title: data.title,
        items: toCatalogueItemArray(data.items)
      };
    default:
      break;
  }
};

const toBannerArray = data => data.map(n => toBanner(n));

const toBanner = data => {
  if (data) {
    if (data.title === "Video") {
      return {
        src: data.video_url,
        linkText: data.CTA_label,
        title: data.title
      };
    } else {
      return {
        src: data.image_url,
        link: data.redirection_url,
        linkText: data.CTA_label,
        title: data.title,
        summary: data.summary,
        isExternal: /^http(s)?:\/\//.test(data.redirection_url)
      };
    }
  }
  return null;
};
