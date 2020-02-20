import { fromJS } from "immutable";
import { createSelector } from "reselect";
import moment from "moment";

import { REDUCER_NAME, SET_LOADING, SET_STORE_LOCATIONS } from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: true,
  dataTimestamp: moment(0),
  storeLocations: []
});

export const storeLocatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_STORE_LOCATIONS:
      return state
        .set("storeLocations", fromJS(action.data))
        .set("dataTimestamp", moment());
    default:
      return state;
  }
};

export const getStoreLocatorState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectDataTimestamp = createSelector(
  getStoreLocatorState,
  n => n.get("dataTimestamp")
);
export const selectIsLoading = createSelector(
  getStoreLocatorState,
  n => n.get("isLoading")
);
export const selectStoreLocations = createSelector(
  getStoreLocatorState,
  n => n.get("storeLocations")
);

reducerRegistry.register(REDUCER_NAME, storeLocatorReducer);
