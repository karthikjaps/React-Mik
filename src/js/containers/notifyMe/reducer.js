import { fromJS } from "immutable";
import { createSelector } from "reselect";

import {
  REDUCER_NAME,
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  messages: {},
  formValues: {}
});

export const notifyMeReducer = (state = initialState, action) => {
  switch (action.type) {
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

export const getNotifyMeState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectFormValues = createSelector(
  getNotifyMeState,
  n => n.get("formValues")
);

export const selectMessages = createSelector(
  getNotifyMeState,
  n => n.get("messages")
);

reducerRegistry.register(REDUCER_NAME, notifyMeReducer);
