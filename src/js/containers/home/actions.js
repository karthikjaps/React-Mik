import {
  REDUCER_NAME,
  SET_LOADING,
  SET_HOME_CONTENT,
  LOAD_WISHLIST_ITEMS,
  SET_WISHLIST_ITEMS,
  SET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEMS
} from "./constants";
import { trackPromotionImpression } from "./analytics";
import { renderPage, getPage } from "../page/actions";
import Api from "../../../../service/main";

export const loadHomeWishlistItems = data => ({
  type: LOAD_WISHLIST_ITEMS,
  data
});

export const setWishlistItems = data => ({
  type: SET_WISHLIST_ITEMS,
  data
});

export const resetWishlist = data => ({
  type: RESET_WISHLIST_ITEMS
});

export const setWishlistItem = data => ({
  type: SET_WISHLIST_ITEM,
  data
});

export const resetWishlistItem = data => ({
  type: RESET_WISHLIST_ITEM,
  data
});

const isLoading = data => ({
  type: SET_LOADING,
  data
});

const loadHomeContent = data => ({
  type: SET_HOME_CONTENT,
  data
});

export const fetchHomePage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);

export const getHome = data => dispatch => {
  dispatch(isLoading(true));

  return Api.home
    .getHomeContent(data)
    .then(response => {
      // const bannersTrackingData = response && [
      //   ...response.mainBanners,
      //   ...response.subheaderBanners,
      //   ...response.threeColumnBanners,
      //   ...response.twoColumnBanners
      // ];
      // trackPromotionImpression(bannersTrackingData);
      dispatch(loadHomeContent(response));
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      throw error;
    });
};
