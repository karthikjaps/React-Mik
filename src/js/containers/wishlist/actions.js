import { renderPage, getPage } from "../page/actions";
import {
  REDUCER_NAME,
  SET_WISHLIST_PRODUCTS,
  REMOVE_WISHLIST,
  SET_LOADING,
  IS_ERROR,
  IS_WISHLIST_LOADED
} from "./constants";
import { loadWishlistItems } from "../catalogue/actions";
import { loadHomeWishlistItems } from "../home/actions";

import Api from "../../../../service/main";

const isLoading = data => ({
  type: SET_LOADING,
  data
});

export const isError = data => ({
  type: IS_ERROR,
  data
});

const isWishlistLoaded = data => ({
  type: IS_WISHLIST_LOADED,
  data
});

export const setWishlistProducts = data => ({
  type: SET_WISHLIST_PRODUCTS,
  data
});

const removeWishlist = data => ({
  type: REMOVE_WISHLIST,
  data
});

export const addProductToWishlist = data => dispatch => {
  dispatch(isLoading(true));
  dispatch(isError(false));

  return Api.wishlist
    .addToWishlist(data)
    .then(response => {
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(isError(true));
      console.error(error);
      throw error;
    });
};

export const addWishlistProductToCart = data => dispatch => {
  return Api.wishlist
    .addWishlistProductToCart(data)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};

export const removeProductFromWishlist = data => dispatch => {
  dispatch(isLoading(true));
  dispatch(isError(false));

  return Api.wishlist
    .removeProductFromWishlist(data)
    .then(response => {
      dispatch(isLoading(false));
      dispatch(removeWishlist(data));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(isError(true));
      console.error(error);
      throw error;
    });
};

export const getWishlistProducts = data => dispatch => {
  dispatch(isLoading(true));
  dispatch(isError(false));

  return Api.wishlist
    .getWishlistProducts(data)
    .then(response => {
      dispatch(setWishlistProducts(response));
      dispatch(loadWishlistItems(response.wishlistProducts));
      dispatch(loadHomeWishlistItems(response.wishlistProducts));
      dispatch(isLoading(false));
      dispatch(isWishlistLoaded(true));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(isError(true));
      console.error(error);
      throw error;
    });
};

export const fetchWishlistPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);
