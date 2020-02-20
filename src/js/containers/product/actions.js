import {
  REDUCER_NAME,
  SET_LOADING,
  SET_PRODUCT,
  RESET_PRODUCT,
  SET_PRODUCT_TITLE,
  RESET_PRODUCT_TITLE,
  LOAD_WISHLIST_ITEMS,
  SET_WISHLIST_ITEMS,
  SET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEMS
} from "./constants";
import { renderPage, getPage } from "../page/actions";
import Api from "../../../../service/main";
import { trackProductDetail } from "./analytics";

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

const loadProduct = data => ({
  type: SET_PRODUCT,
  data
});

export const resetProduct = () => ({
  type: RESET_PRODUCT
});

export const setProductTitle = data => ({
  type: SET_PRODUCT_TITLE,
  data
});

export const resetProductTitle = () => ({
  type: RESET_PRODUCT_TITLE
});

export const getProduct = data => dispatch => {
  dispatch(isLoading(true));

  return Api.catalogue
    .getProduct(data)
    .then(response => {
      if (response && response.item && response.item.title) {
        dispatch(setProductTitle(response.item.title));
      }
      dispatch(
        loadProduct({
          productId: data.productId,
          ...response
        })
      );
      // TODO: this cannot be placed in the action as the action is called by the server-side too
      // trackProductDetail([response.item]);
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      throw error;
    });
};

export const fetchProductPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);
