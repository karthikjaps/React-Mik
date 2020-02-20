import {
  REDUCER_NAME,
  SET_LOADING,
  SET_SCROLL_LOADING,
  SET_CATEGORY_LOADING,
  SET_CATALOGUE,
  UPDATE_CATALOGUE,
  RESET_CATALOGUE,
  SET_PAGE,
  SET_CATEGORY_ID,
  SET_HAS_MORE,
  SET_CATEGORY_TITLE,
  RESET_CATEGORY_TITLE,
  SET_WISHLIST_ITEMS,
  LOAD_WISHLIST_ITEMS,
  SET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEMS,
  RESET_WISHLIST_ITEM
} from "./constants";
import { renderPage, getPage } from "../page/actions";
import Api from "../../../../service/main";

export const setWishlistItems = data => ({
  type: SET_WISHLIST_ITEMS,
  data
});

export const loadWishlistItems = data => ({
  type: LOAD_WISHLIST_ITEMS,
  data
});

export const setWishlistItem = data => ({
  type: SET_WISHLIST_ITEM,
  data
});

export const resetWishlistItem = data => ({
  type: RESET_WISHLIST_ITEM,
  data
});

export const resetWishlist = data => ({
  type: RESET_WISHLIST_ITEMS
});

const isLoading = data => ({
  type: SET_LOADING,
  data
});

const isScrollLoading = data => ({
  type: SET_SCROLL_LOADING,
  data
});

const isCategoryLoading = data => ({
  type: SET_CATEGORY_LOADING,
  data
});

const loadCatalogue = data => ({
  type: SET_CATALOGUE,
  data
});

const updateCatalogueItems = data => ({
  type: UPDATE_CATALOGUE,
  data
});

const setCategoryId = data => ({
  type: SET_CATEGORY_ID,
  data
});

export const resetCatalogue = () => ({
  type: RESET_CATALOGUE
});

export const setPage = data => ({
  type: SET_PAGE,
  data
});

const setHasMore = data => ({
  type: SET_HAS_MORE,
  data
});

export const setCategoryTitle = data => ({
  type: SET_CATEGORY_TITLE,
  data
});

export const resetCategoryTitle = () => ({
  type: RESET_CATEGORY_TITLE
});

export const getCatalogue = data => dispatch => {
  dispatch(isLoading(true));

  if (!data.isFilter) {
    dispatch(isCategoryLoading(true));
    dispatch(setCategoryId({ categoryId: data.categoryId }));
  }

  return Api.catalogue
    .getProducts(data)
    .then(response => {
      dispatch(loadCatalogue(response));
      dispatch(setCategoryTitle(response.title));
      dispatch(setPage(data.page));

      if (data.page < response.pagination.pageCount) {
        dispatch(setHasMore(true));
      } else {
        dispatch(setHasMore(false));
      }

      if (!data.isFilter) {
        dispatch(isCategoryLoading(false));
      }
      dispatch(isLoading(false));

      return response;
    })
    .catch(error => {
      throw error;
    });
};

export const updateCatalogue = data => dispatch => {
  dispatch(isScrollLoading(true));

  if (!data.isFilter) {
    dispatch(setCategoryId({ categoryId: data.categoryId }));
  }

  return Api.catalogue
    .getProducts(data)
    .then(response => {
      dispatch(updateCatalogueItems(response.items));
      dispatch(setPage(data.page));

      if (data.page < response.pagination.pageCount) {
        dispatch(setHasMore(true));
      } else {
        dispatch(setHasMore(false));
      }
      dispatch(isScrollLoading(false));

      return response;
    })
    .catch(error => {
      throw error;
    });
};

export const fetchCataloguePage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);
