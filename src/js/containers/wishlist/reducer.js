import { fromJS } from "immutable";
import { createSelector } from "reselect";
import moment from "moment";

import {
  REDUCER_NAME,
  SET_WISHLIST_PRODUCTS,
  REMOVE_WISHLIST,
  IS_WISHLIST_LOADED,
  SET_LOADING,
  IS_ERROR
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: false,
  isError: false,
  dataTimestamp: moment(0),
  wishlistProducts: [],
  isWishlistLoaded: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case IS_ERROR:
      return state.set("isError", action.data);
    case SET_WISHLIST_PRODUCTS:
      return state
        .set("wishlistProducts", fromJS(action.data.wishlistProducts))
        .set("dataTimestamp", moment());
    case REMOVE_WISHLIST:
      return state.set(
        "wishlistProducts",
        state
          .get("wishlistProducts")
          .filter(n => n.get("id") !== action.data.productId)
      );
    case IS_WISHLIST_LOADED:
      return state.set("isWishlistLoaded", action.data);
    default:
      return state;
  }
};

export const getWishlistState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectDataTimestamp = createSelector(
  getWishlistState,
  n => n.get("dataTimestamp")
);
export const selectIsLoading = createSelector(
  getWishlistState,
  n => n.get("isLoading")
);
export const selectIsError = createSelector(
  getWishlistState,
  n => n.get("isError")
);
export const selectWishlistProducts = createSelector(
  getWishlistState,
  n => n.get("wishlistProducts")
);
export const selectIsWishlistLoaded = createSelector(
  getWishlistState,
  n => n.get("isWishlistLoaded")
);

reducerRegistry.register(REDUCER_NAME, reducer);
