import { fromJS } from "immutable";
import { createSelector } from "reselect";
import moment from "moment";

import {
  SET_LOADING,
  SET_SHIPMENT_ADDRESS,
  REDUCER_NAME,
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES,
  UPDATE_SHIPMENT_ADDRESS,
  ADD_SHIPMENT_ADDRESS,
  SET_SELECTED_ADDRESS_ID
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: false,
  messages: {},
  formValues: {},
  shipmentAddress: [],
  selectedAddressId: undefined
});

export const shipmentAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_VALIDATION_MESSAGES:
      return state
        .set("messages", action.data.messages)
        .set("formValues", action.data.formValues);
    case RESET_VALIDATION_MESSAGES:
      return state.set("messages", initialState.get("messages"));
    case SET_SHIPMENT_ADDRESS:
      return state
        .set("shipmentAddress", fromJS(action.data))
        .set("dataTimestamp", moment());
    case ADD_SHIPMENT_ADDRESS:
      return state.set(
        "shipmentAddress",
        state.get("shipmentAddress").push(fromJS(action.data))
      );
    case UPDATE_SHIPMENT_ADDRESS:
      const index = state
        .get("shipmentAddress")
        .findIndex(n => n.get("addressId") === action.data.addressId);
      return state
        .set(
          "shipmentAddress",
          state.get("shipmentAddress").update(index, function(item) {
            return fromJS(action.data);
          })
        )
        .set("dataTimestamp", moment());
    case SET_SELECTED_ADDRESS_ID:
      return state
        .set("selectedAddressId", fromJS(action.data))
        .set("dataTimestamp", moment());
    default:
      return state;
  }
};

export const getShipmentAddressState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectIsLoading = createSelector(
  getShipmentAddressState,
  n => n.get("isLoading")
);

export const selectFormValues = createSelector(
  getShipmentAddressState,
  n => n.get("formValues")
);

export const selectMessages = createSelector(
  getShipmentAddressState,
  n => n.get("messages")
);

export const selectShipmentAddress = createSelector(
  getShipmentAddressState,
  n => n.get("shipmentAddress")
);

export const selectSelectedAddressId = createSelector(
  getShipmentAddressState,
  n => n.get("selectedAddressId")
);

reducerRegistry.register(REDUCER_NAME, shipmentAddressReducer);
