import { fromJS } from "immutable";

import { SET_HEADER, REDUCER_NAME, SET_NAVIGATION } from "./constants";
import reducerRegistry from "../../util/reducerRegistry";
import { createSelector } from "reselect";

const initialState = fromJS({
  langs: [],
  flags: [],
  nav: []
});

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HEADER:
      return state
        .set("langs", fromJS(action.data.langs))
        .set("flags", fromJS(action.data.flags));
    case SET_NAVIGATION:
      return state.set("nav", fromJS(action.data.nav));
    default:
      return state;
  }
}

export const getHeaderState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectFlags = createSelector(
  getHeaderState,
  n => n.get("flags")
);
export const selectLanguages = createSelector(
  getHeaderState,
  n => n.get("langs")
);
export const selectNav = createSelector(
  getHeaderState,
  n => n.get("nav")
);

reducerRegistry.register(REDUCER_NAME, headerReducer);
