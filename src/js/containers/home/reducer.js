import { fromJS } from "immutable";
import { createSelector } from "reselect";
import moment from "moment";

import {
  REDUCER_NAME,
  SET_LOADING,
  SET_HOME_CONTENT,
  SET_WISHLIST_ITEMS,
  LOAD_WISHLIST_ITEMS,
  RESET_WISHLIST_ITEMS,
  SET_WISHLIST_ITEM,
  RESET_WISHLIST_ITEM
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: true,
  dataTimestamp: moment(0),
  mainBanners: [],
  mainBannersMobile: [],
  subheaderBanners: [],
  twoColumnBanners: [],
  threeColumnBanners: [],
  products: [],
  wishlistItems: []
});

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_HOME_CONTENT:
      return state
        .set("mainBanners", fromJS(action.data.mainBanners))
        .set("mainBannersMobile", fromJS(action.data.mainBannersMobile))
        .set("subheaderBanners", fromJS(action.data.subheaderBanners))
        .set("twoColumnBanners", fromJS(action.data.twoColumnBanners))
        .set("threeColumnBanners", fromJS(action.data.threeColumnBanners))
        .set("products", fromJS(action.data.products))
        .set("dataTimestamp", moment());
    case LOAD_WISHLIST_ITEMS:
      return state.set("wishlistItems", fromJS(action.data));
    case SET_WISHLIST_ITEMS:
      const wishlist = state.get("wishlistItems").toJS();
      const updatedProducts = state.get("products").toJS();
      for (let i = 0; i < updatedProducts.length; i++) {
        for (let j = 0; j < updatedProducts[i].items.length; j++) {
          for (let k = 0; k < wishlist.length; k++) {
            if (
              parseInt(wishlist[k].id) ===
              parseInt(updatedProducts[i].items[j].id)
            ) {
              updatedProducts[i].items[j].isSelectedWishItem = true;
            }
          }
        }
      }
      return state.set("products", fromJS(updatedProducts));
    case SET_WISHLIST_ITEM:
      const tmpProducts = state.get("products").toJS();
      for (let i = 0; i < tmpProducts.length; i++) {
        for (let j = 0; j < tmpProducts[i].items.length; j++) {
          if (parseInt(tmpProducts[i].items[j].id) === parseInt(action.data)) {
            tmpProducts[i].items[j].isSelectedWishItem = true;
          }
        }
      }
      return state.set("products", fromJS(tmpProducts));
    case RESET_WISHLIST_ITEM:
      let tmpList = state.get("products").toJS();
      for (let i = 0; i < tmpList.length; i++) {
        for (let j = 0; j < tmpList[i].items.length; j++) {
          if (parseInt(tmpList[i].items[j].id) === parseInt(action.data)) {
            tmpList[i].items[j].isSelectedWishItem = false;
          }
        }
      }
      return state.set("products", fromJS(tmpList));
    case RESET_WISHLIST_ITEMS:
      return state.set("wishlistItems", initialState.get("wishlistItems"));
    default:
      return state;
  }
};

export const getHomeState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectDataTimestamp = createSelector(
  getHomeState,
  n => n.get("dataTimestamp")
);
export const selectIsLoading = createSelector(
  getHomeState,
  n => n.get("isLoading")
);
export const selectMainBanners = createSelector(
  getHomeState,
  n => n.get("mainBanners")
);
export const selectMainBannersMobile = createSelector(
  getHomeState,
  n => n.get("mainBannersMobile")
);
export const selectSubheaderBanners = createSelector(
  getHomeState,
  n => n.get("subheaderBanners")
);
export const selectTwoColumnBanners = createSelector(
  getHomeState,
  n => n.get("twoColumnBanners")
);
export const selectThreeColumnBanners = createSelector(
  getHomeState,
  n => n.get("threeColumnBanners")
);
export const selectProducts = createSelector(
  getHomeState,
  n => n.get("products")
);
export const selectWishlistItems = createSelector(
  getHomeState,
  n => n.get("wishlistItems")
);

reducerRegistry.register(REDUCER_NAME, homeReducer);
