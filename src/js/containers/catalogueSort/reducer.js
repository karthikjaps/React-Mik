import { fromJS } from "immutable";
import { createSelector } from "reselect";
import moment from "moment";

import {
  SET_LOADING,
  SET_CATALOGUE_SORT,
  SET_CURRENCY_CODE,
  SET_CURRENCY_INDEX,
  REDUCER_NAME
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: true,
  sortingOptions: [],
  currencyCode: "",
  currencyIndex: ""
});

export const catalogueSortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_CATALOGUE_SORT:
      return state
        .set("sortingOptions", fromJS(action.data))
        .set("dataTimestamp", moment());
    case SET_CURRENCY_CODE:
      return state.set("currencyCode", action.data);
    case SET_CURRENCY_INDEX:
      return state.set("currencyIndex", action.data);
    default:
      return state;
  }
};

export const getCatalogueSortState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectIsLoading = createSelector(
  getCatalogueSortState,
  n => n.get("isLoading")
);

export const selectSortingOptions = createSelector(
  getCatalogueSortState,
  n => n.get("sortingOptions")
);

export const selectCurrencyCode = createSelector(
  getCatalogueSortState,
  n => n.get("currencyCode")
);

export const selectCurrencyIndex = createSelector(
  getCatalogueSortState,
  n => n.get("currencyIndex")
);

reducerRegistry.register(REDUCER_NAME, catalogueSortReducer);
