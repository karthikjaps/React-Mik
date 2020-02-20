import {
  SET_LOADING,
  SET_SHIPMENT_ADDRESS,
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES,
  UPDATE_SHIPMENT_ADDRESS,
  ADD_SHIPMENT_ADDRESS,
  SET_SELECTED_ADDRESS_ID,
  REDUCER_NAME
} from "./constants";
import { SET_PAYMENT_METHODS } from "../payment/constants";
import Api from "../../../../service/main";
import { renderPage, getPage } from "../page/actions";
import { setCartTotals } from "../cart/actions";

const isLoading = data => {
  return {
    type: SET_LOADING,
    data
  };
};

export const setValidationMessages = data => dispatch =>
  dispatch({
    type: SET_VALIDATION_MESSAGES,
    data
  });

export const resetValidationMessages = data => ({
  type: RESET_VALIDATION_MESSAGES
});

export const setShipmentAddress = data => ({
  type: SET_SHIPMENT_ADDRESS,
  data
});

const setSelectedAddressId = data => ({
  type: SET_SELECTED_ADDRESS_ID,
  data
});

const updateShipmentAddress = data => ({
  type: UPDATE_SHIPMENT_ADDRESS,
  data
});

const addShipmentAddress = data => ({
  type: ADD_SHIPMENT_ADDRESS,
  data
});

const setPaymentMethods = data => ({
  type: SET_PAYMENT_METHODS,
  data
});

export const createUserAddress = data => dispatch =>
  Api.userAddress
    .createUserAddress(data)
    .then(response => {
      dispatch(fetchShipmentAddress());
      return response;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });

export const updateUserAddress = data => dispatch => {
  if (data.loggedIn === false) {
    dispatch(updateShipmentAddress(data));
    return new Promise(resolve => resolve(data));
  } else {
    return Api.userAddress
      .updateUserAddresses(data)
      .then(response => {
        dispatch(fetchShipmentAddress());
        return response;
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
};

export const sendPhoneValidate = data => dispatch =>
  Api.userAddress
    .sendPhoneValidate(data)
    .then(response => {
      // TODO
      return response;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });

export const verifyPhoneValidate = data => dispatch =>
  Api.userAddress
    .verifyPhoneValidate(data)
    .then(response => {
      // TODO
      return response;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });

export const submitShipmentAddress = data => dispatch => {
  if (data.loggedIn === false) {
    data.shippingAddress.addressId = "999";
    data.shippingAddress.isDefaultShipping = true;
    dispatch(addShipmentAddress(data.shippingAddress));
    // return new Promise(resolve => resolve(data.shippingAddress));
  } else {
    return Api.userAddress
      .setOrderAddress(data)
      .then(response => {
        dispatch(setSelectedAddressId(data.shippingAddress.addressId));
        dispatch(setPaymentMethods(response.paymentMethods));
        dispatch(setCartTotals(response.fee));
        return response;
      })
      .catch(error => {
        throw error;
      });
  }
};

export const fetchShipmentAddress = data => dispatch => {
  dispatch(isLoading(true));
  return Api.userAddress
    .getUserAddresses(data)
    .then(response => {
      dispatch(setShipmentAddress(response));
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      throw error;
    });
};

export const fetchShipmentAddressPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);
