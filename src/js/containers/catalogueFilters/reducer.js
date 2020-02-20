import { fromJS } from "immutable";
import { createSelector } from "reselect";

import {
  REDUCER_NAME,
  SET_LOADING,
  SET_CATALOGUE_FILTERS,
  RESET_CATALOGUE_FILTERS
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: false,
  categoryId: -1,
  items: []
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_CATALOGUE_FILTERS:
      return state
        .set("categoryId", fromJS(action.data.categoryId))
        .set("items", fromJS(action.data.items));
    case RESET_CATALOGUE_FILTERS:
      return state
        .set("categoryId", initialState.get("categoryId"))
        .set("items", initialState.get("items"));
    default:
      return state;
  }
};

export const getCatalogueFiltersState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectIsLoading = createSelector(
  getCatalogueFiltersState,
  n => n.get("isLoading")
);
export const selectCategoryId = createSelector(
  getCatalogueFiltersState,
  n => n.get("categoryId")
);
export const selectItems = createSelector(
  getCatalogueFiltersState,
  n => n.get("items")
);

reducerRegistry.register(REDUCER_NAME, reducer);
