import { fromJS } from "immutable";

import {
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES,
  REDUCER_NAME
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";
import { createSelector } from "reselect";

const initialState = fromJS({
  messages: {},
  formValues: {}
});

export const registerReducer = (state = initialState, action) => {
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

const getRegisterState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectFormValues = createSelector(
  getRegisterState,
  n => n.get("formValues")
);
export const selectMessages = createSelector(
  getRegisterState,
  n => n.get("messages")
);

reducerRegistry.register(REDUCER_NAME, registerReducer);
