import {
  REDUCER_NAME,
  SET_LOADING,
  SET_PROMOTION,
  RESET_PROMOTION,
  SET_PROMOTION_TITLE,
  RESET_PROMOTION_TITLE,
  LOAD_WISHLIST_ITEMS,
  SET_WISHLIST_ITEMS,
  SET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEMS
} from "./constants";
import { renderPage, getPage } from "../page/actions";
import Api from "../../../../service/main";

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

const loadPromotion = data => ({
  type: SET_PROMOTION,
  data
});

export const resetPromotion = () => ({
  type: RESET_PROMOTION
});

export const setPromotionTitle = data => ({
  type: SET_PROMOTION_TITLE,
  data
});

export const resetPromotionTitle = () => ({
  type: RESET_PROMOTION_TITLE
});

export const getPromotion = data => dispatch => {
  dispatch(isLoading(true));

  return Api.promotion
    .getPromotion(data)
    .then(response => {
      if (response && response.item && response.item.title) {
        dispatch(setPromotionTitle(response.item.title));
      }
      dispatch(
        loadPromotion({
          productId: data.productId,
          ...response
        })
      );
      // TODO: this cannot be placed in the action as the action is called by the server-side too
      // trackPromotionDetail([response.item]);
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      throw error;
    });
};

export const fetchPromotionPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);
