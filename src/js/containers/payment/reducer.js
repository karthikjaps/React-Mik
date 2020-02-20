import { fromJS } from "immutable";
import { createSelector } from "reselect";

import {
  REDUCER_NAME,
  SET_PAYMENT_FEE,
  SET_PAYMENT_DETAILS,
  RESET_VALIDATION_MESSAGES,
  SET_VALIDATION_MESSAGES,
  SET_LOADING,
  SET_PAYMENT_METHODS,
  SET_PAYFORT_DETAILS
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: true,
  messages: {},
  formValues: {},
  fee: null,
  details: null,
  methods: null,
  payfort: {}
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_VALIDATION_MESSAGES:
      return state
        .set("messages", action.data.messages)
        .set("formValues", action.data.formValues);
    case RESET_VALIDATION_MESSAGES:
      return state.set("messages", initialState.get("messages"));
    case SET_PAYMENT_FEE:
      return state.set("fee", fromJS(action.data));
    case SET_PAYMENT_DETAILS:
      return state.set("details", fromJS(action.data));
    case SET_PAYMENT_METHODS:
      return state.set("methods", fromJS(action.data));
    case SET_PAYFORT_DETAILS:
      return state.set("payfort", fromJS(action.data));
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

export const selectIsLoading = createSelector(
  getState,
  n => n.get("isLoading")
);

export const selectFormValues = createSelector(
  getState,
  n => n.get("formValues")
);

export const selectMessages = createSelector(
  getState,
  n => n.get("messages")
);

export const selectDetails = createSelector(
  getState,
  n => n.get("details")
);

export const selectFee = createSelector(
  getState,
  n => n.get("fee")
);

export const selectPaymentMethods = createSelector(
  getState,
  n => n.get("methods")
);

export const selectPayfortDetails = createSelector(
  getState,
  n => n.get("payfort")
);

reducerRegistry.register(REDUCER_NAME, reducer);
