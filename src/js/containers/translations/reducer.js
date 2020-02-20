import { fromJS } from "immutable";

import { REDUCER_NAME, SET_TRANSLATIONS, SET_LOADING } from "./constants";
import reducerRegistry from "../../util/reducerRegistry";
import { createSelector } from "reselect";

const initialState = fromJS({
  translations: {},
  isLoading: false
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_TRANSLATIONS:
      return state.set("translations", fromJS(action.data));
    default:
      return state;
  }
};

const getTranslationsState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
export const selectTranslations = createSelector(
  getTranslationsState,
  n => n.get("translations")
);

reducerRegistry.register(REDUCER_NAME, reducer);
