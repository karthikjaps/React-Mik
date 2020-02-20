import { fromJS } from "immutable";
import { createSelector } from "reselect";
import moment from "moment";

import {
  SET_CATALOGUE,
  REDUCER_NAME,
  SET_LOADING,
  SET_SCROLL_LOADING,
  SET_CATEGORY_LOADING,
  RESET_CATALOGUE,
  SET_CATEGORY_ID,
  UPDATE_CATALOGUE,
  SET_HAS_MORE,
  SET_PAGE,
  SET_CATEGORY_TITLE,
  RESET_CATEGORY_TITLE,
  SET_WISHLIST_ITEMS,
  LOAD_WISHLIST_ITEMS,
  SET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEMS
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: false,
  isScrollLoading: false,
  isCategoryLoading: false,
  dataTimestamp: moment(0),
  categoryId: 0,
  title: "",
  items: [],
  page: 1,
  hasMore: true,
  categoryTitle: "",
  isSelectedWishItem: false,
  wishlistItems: []
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_SCROLL_LOADING:
      return state.set("isScrollLoading", action.data);
    case SET_CATEGORY_LOADING:
      return state.set("isCategoryLoading", action.data);
    case SET_HAS_MORE:
      return state.set("hasMore", action.data);
    case SET_CATEGORY_ID:
      return state.set("categoryId", fromJS(action.data.categoryId));
    case SET_CATALOGUE:
      return state
        .set("title", fromJS(action.data.title))
        .set("dataTimestamp", moment())
        .set("items", fromJS(action.data.items));
    case LOAD_WISHLIST_ITEMS:
      return state.set("wishlistItems", fromJS(action.data));
    case SET_WISHLIST_ITEMS:
      let tmpWishlist = state.get("wishlistItems").toJS();
      return state.set(
        "items",
        fromJS(
          state
            .get("items")
            .toJS()
            .map(item => {
              for (let i = 0; i < tmpWishlist.length; i++) {
                if (parseInt(tmpWishlist[i].id) === parseInt(item.id)) {
                  item.isSelectedWishItem = true;
                }
              }
              return item;
            })
        )
      );
    case SET_WISHLIST_ITEM:
      return state.set(
        "items",
        state
          .get("items")
          .map(n =>
            n.set(
              "isSelectedWishItem",
              n.get("id") === action.data ? true : n.get("isSelectedWishItem")
            )
          )
      );
    case RESET_WISHLIST_ITEM:
      return state.set(
        "items",
        state
          .get("items")
          .map(n =>
            n.set(
              "isSelectedWishItem",
              n.get("id") === action.data ? false : n.get("isSelectedWishItem")
            )
          )
      );
    case UPDATE_CATALOGUE:
      return state.set("items", state.get("items").concat(fromJS(action.data)));
    case RESET_CATALOGUE:
      return state
        .set("categoryId", initialState.get("categoryId"))
        .set("title", initialState.get("title"))
        .set("items", initialState.get("items"))
        .set("dataTimestamp", moment(0));
    case SET_PAGE:
      return state.set("page", fromJS(action.data));
    case SET_CATEGORY_TITLE:
      return state.set("categoryTitle", action.data);
    case RESET_CATEGORY_TITLE:
      return state.set("categoryTitle", initialState.get("categoryTitle"));
    case RESET_WISHLIST_ITEMS:
      return state.set("wishlistItems", initialState.get("wishlistItems"));
    default:
      return state;
  }
};

export const getCatalogueState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectDataTimestamp = createSelector(
  getCatalogueState,
  n => n.get("dataTimestamp")
);
export const selectIsLoading = createSelector(
  getCatalogueState,
  n => n.get("isLoading")
);
export const selectIsScrollLoading = createSelector(
  getCatalogueState,
  n => n.get("isScrollLoading")
);
export const selectIsCategoryLoading = createSelector(
  getCatalogueState,
  n => n.get("isCategoryLoading")
);
export const selectHasMore = createSelector(
  getCatalogueState,
  n => n.get("hasMore")
);
export const selectCategoryId = createSelector(
  getCatalogueState,
  n => n.get("categoryId")
);
export const selectTitle = createSelector(
  getCatalogueState,
  n => n.get("title")
);
export const selectItems = createSelector(
  getCatalogueState,
  n => n.get("items")
);
export const selectPage = createSelector(
  getCatalogueState,
  n => n.get("page")
);
export const selectCategoryTitle = createSelector(
  getCatalogueState,
  n => n.get("categoryTitle")
);
export const selectWishlistItems = createSelector(
  getCatalogueState,
  n => n.get("wishlistItems")
);

reducerRegistry.register(REDUCER_NAME, reducer);
