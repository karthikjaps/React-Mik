import { Map, fromJS } from "immutable";

import { SET_ROUTES, REDUCER_NAME } from "./constants";
import { createSelector } from "reselect";

const initialState = fromJS({
  routes: [],
  isLoading: false,
  isError: false
});

export const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTES:
      return state.set("routes", fromJS(action.data));
    default:
      return state;
  }
};

const getRoutesState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectRoutes = createSelector(
  getRoutesState,
  n => n.get("routes")
);
export const selectCategoryRoutesByUrl = createSelector(
  getRoutesState,
  n =>
    Map(
      n
        .get("routes")
        .filter(m => m.get("name") === "Catalogue")
        .map(m => [m.get("url"), m])
    )
);
export const selectProductRoutesByUrl = createSelector(
  getRoutesState,
  n =>
    Map(
      n
        .get("routes")
        .filter(m => m.get("name") === "Product")
        .map(m => [m.get("url"), m])
    )
);
export const selectPromotionRoutesByUrl = createSelector(
  getRoutesState,
  n =>
    Map(
      n
        .get("routes")
        .filter(m => m.get("name") === "Promotion")
        .map(m => [m.get("url"), m])
    )
);
export const selectProductRoutesById = createSelector(
  getRoutesState,
  n =>
    Map(
      n
        .get("routes")
        .filter(m => m.get("name") === "Product")
        .map(m => [m.get("id"), m])
    )
);
export const selectPromotionRoutesById = createSelector(
  getRoutesState,
  n =>
    Map(
      n
        .get("routes")
        .filter(m => m.get("name") === "Promotion")
        .map(m => [m.get("id"), m])
    )
);
