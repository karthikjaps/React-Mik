import { fromJS } from "immutable";
import { createSelector } from "reselect";

import { REDUCER_NAME } from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: false,
  items: []
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const getState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

reducerRegistry.register(REDUCER_NAME, reducer);
