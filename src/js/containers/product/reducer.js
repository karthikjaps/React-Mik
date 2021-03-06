import { fromJS } from "immutable";
import { createSelector } from "reselect";
import moment from "moment";

import {
  REDUCER_NAME,
  SET_LOADING,
  SET_PRODUCT,
  RESET_PRODUCT,
  SET_PRODUCT_TITLE,
  RESET_PRODUCT_TITLE,
  SET_WISHLIST_ITEMS,
  LOAD_WISHLIST_ITEMS,
  RESET_WISHLIST_ITEMS,
  SET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEM
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: false,
  dataTimestamp: moment(0),
  productId: -1,
  item: null,
  productTitle: "",
  wishlistItems: []
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_PRODUCT:
      return state
        .set("productId", action.data.productId)
        .set("item", fromJS(action.data.item))
        .set("dataTimestamp", moment());
    case RESET_PRODUCT:
      return state
        .set("productId", initialState.get("productId"))
        .set("item", initialState.get("item"))
        .set("dataTimestamp", moment(0));
    case SET_PRODUCT_TITLE:
      return state.set("productTitle", action.data);
    case RESET_PRODUCT_TITLE:
      return state.set("productTitle", initialState.get("productTitle"));
    case LOAD_WISHLIST_ITEMS:
      return state.set("wishlistItems", fromJS(action.data));
    case SET_WISHLIST_ITEMS:
      const wishlist = state.get("wishlistItems").toJS();
      const updatedRelatedProducts = state
        .getIn(["item", "relatedProducts"])
        .toJS();
      const updatedUpsellProducts = state
        .getIn(["item", "upsellProducts"])
        .toJS();
      for (let k = 0; k < wishlist.length; k++) {
        for (let i = 0; i < updatedRelatedProducts.length; i++) {
          if (
            parseInt(wishlist[k].id) === parseInt(updatedRelatedProducts[i].id)
          ) {
            updatedRelatedProducts[i].isSelectedWishItem = true;
          }
        }
        for (let i = 0; i < updatedUpsellProducts.length; i++) {
          if (
            parseInt(wishlist[k].id) === parseInt(updatedUpsellProducts[i].id)
          ) {
            updatedUpsellProducts[i].isSelectedWishItem = true;
          }
        }
      }
      return state
        .setIn(["item", "relatedProducts"], fromJS(updatedRelatedProducts))
        .setIn(["item", "upsellProducts"], fromJS(updatedUpsellProducts));
    case SET_WISHLIST_ITEM:
      const tmpRelatedProducts = state
        .getIn(["item", "relatedProducts"])
        .toJS();
      const tmpUpsellProducts = state.getIn(["item", "upsellProducts"]).toJS();
      for (let i = 0; i < tmpRelatedProducts.length; i++) {
        if (parseInt(tmpRelatedProducts[i].id) === parseInt(action.data)) {
          tmpRelatedProducts[i].isSelectedWishItem = true;
        }
      }
      for (let i = 0; i < tmpUpsellProducts.length; i++) {
        if (parseInt(tmpUpsellProducts[i].id) === parseInt(action.data)) {
          tmpUpsellProducts[i].isSelectedWishItem = true;
        }
      }
      return state
        .setIn(["item", "relatedProducts"], fromJS(tmpRelatedProducts))
        .setIn(["item", "upsellProducts"], fromJS(tmpUpsellProducts));
    case RESET_WISHLIST_ITEM:
      let tmpListRelated = state.getIn(["item", "relatedProducts"]).toJS();
      let tmpListUpsell = state.getIn(["item", "upsellProducts"]).toJS();
      for (let i = 0; i < tmpListRelated.length; i++) {
        if (parseInt(tmpListRelated[i].id) === parseInt(action.data)) {
          tmpListRelated[i].isSelectedWishItem = false;
        }
      }
      for (let i = 0; i < tmpListUpsell.length; i++) {
        if (parseInt(tmpListUpsell[i].id) === parseInt(action.data)) {
          tmpListUpsell[i].isSelectedWishItem = false;
        }
      }
      return state
        .setIn(["item", "relatedProducts"], fromJS(tmpListRelated))
        .setIn(["item", "upsellProducts"], fromJS(tmpListUpsell));
    case RESET_WISHLIST_ITEMS:
      return state.set("wishlistItems", initialState.get("wishlistItems"));
    default:
      return state;
  }
};

export const getProductState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectDataTimestamp = createSelector(
  getProductState,
  n => n.get("dataTimestamp")
);
export const selectIsLoading = createSelector(
  getProductState,
  n => n.get("isLoading")
);
export const selectProductId = createSelector(
  getProductState,
  n => n.get("productId")
);
export const selectItem = createSelector(
  getProductState,
  n => n.get("item")
);

export const selectProductTitle = createSelector(
  getProductState,
  n => n.get("productTitle")
);

export const selectWishlistItems = createSelector(
  getProductState,
  n => n.get("wishlistItems")
);

reducerRegistry.register(REDUCER_NAME, reducer);
