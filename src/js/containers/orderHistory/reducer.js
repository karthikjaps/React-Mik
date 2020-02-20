import { fromJS } from "immutable";
import { createSelector } from "reselect";
import moment from "moment";

import {
  REDUCER_NAME,
  SET_ORDER_HISTORY,
  SET_LOADING,
  IS_ERROR
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: false,
  isError: false,
  dataTimestamp: moment(0),
  orderHistory: []
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case IS_ERROR:
      return state.set("isError", action.data);
    case SET_ORDER_HISTORY:
      return state
        .set("orderHistory", fromJS(action.data.orders))
        .set("dataTimestamp", moment());
    default:
      return state;
  }
};

export const getOrderHistoryState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectDataTimestamp = createSelector(
  getOrderHistoryState,
  n => n.get("dataTimestamp")
);
export const selectIsLoading = createSelector(
  getOrderHistoryState,
  n => n.get("isLoading")
);
export const selectIsError = createSelector(
  getOrderHistoryState,
  n => n.get("isError")
);
export const selectOrderHistory = createSelector(
  getOrderHistoryState,
  n => n.get("orderHistory")
);

reducerRegistry.register(REDUCER_NAME, reducer);
