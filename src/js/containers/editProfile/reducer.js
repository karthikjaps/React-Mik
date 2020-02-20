import { fromJS } from "immutable";
import moment from "moment";
import { createSelector } from "reselect";

import {
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES,
  REDUCER_NAME,
  SET_LOADING,
  SET_EDIT_PROFILE
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  messages: {},
  formValues: {},
  userProfile: null
});

export const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_EDIT_PROFILE:
      return state
        .set("userProfile", fromJS(action.data))
        .set("dataTimestamp", moment());
    case SET_VALIDATION_MESSAGES:
      return state
        .set("messages", action.data.messages)
        .set("formValues", action.data.formValues);
    case RESET_VALIDATION_MESSAGES:
      return state.set("messages", initialState.get("messages"));
    default:
      return state;
  }
};

const getEditProfileState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectIsLoading = createSelector(
  getEditProfileState,
  n => n.get("isLoading")
);

export const selectUserProfile = createSelector(
  getEditProfileState,
  n => n.get("userProfile")
);

export const selectFormValues = createSelector(
  getEditProfileState,
  n => n.get("formValues")
);
export const selectMessages = createSelector(
  getEditProfileState,
  n => n.get("messages")
);

reducerRegistry.register(REDUCER_NAME, editProfileReducer);
