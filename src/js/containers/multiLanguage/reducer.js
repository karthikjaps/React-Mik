import { fromJS } from "immutable";

import { SET_LANGS, REDUCER_NAME } from "./constants";
import reducerRegistry from "../../util/reducerRegistry";
import { createSelector } from "reselect";

const initialState = fromJS({
  langs: []
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGS:
      return state.set("langs", fromJS(action.data.langs));
    default:
      return state;
  }
}

export const getState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectLangs = createSelector(
  getState,
  n => n.get("langs")
);
export const selectSelectedLang = createSelector(
  getState,
  n => n.get("langs").find(m => m.get("isActive"))
);

reducerRegistry.register(REDUCER_NAME, reducer);
