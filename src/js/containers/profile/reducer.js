import { fromJS } from "immutable";

import { REDUCER_NAME, SET_PROFILE, RESET_PROFILE } from "./constants";
import reducerRegistry from "../../util/reducerRegistry";
import { createSelector } from "reselect";

const initialState = fromJS({
  profile: null,
  isLoading: false
});

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return state.set("profile", fromJS(action.data));
    case RESET_PROFILE:
      return state.set("profile", initialState.get("profile"));
    default:
      return state;
  }
};

const getProfileState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
export const selectProfile = createSelector(
  getProfileState,
  n => n.get("profile")
);
export const selectIsLoggedIn = createSelector(
  getProfileState,
  n => (n.get("profile") ? !!n.get("profile").get("id") : false)
);

reducerRegistry.register(REDUCER_NAME, profileReducer);
