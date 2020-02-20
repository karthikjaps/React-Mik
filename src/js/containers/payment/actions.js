import {
  REDUCER_NAME,
  SET_PAYMENT_DETAILS,
  SET_PAYMENT_FEE,
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES,
  SET_LOADING,
  SET_PAYFORT_DETAILS
} from "./constants";
import { renderPage, getPage } from "../page/actions";
import Api from "../../../../service/main";
import { PAYFORT_MOBILE_PAYMENT_METHOD } from "../../../../service/payment/constants";
import { setCartTotals } from "../cart/actions";

const isLoading = data => ({
  type: SET_LOADING,
  data
});

export const setValidationMessages = data => dispatch =>
  dispatch({
    type: SET_VALIDATION_MESSAGES,
    data
  });

export const resetValidationMessages = data => ({
  type: RESET_VALIDATION_MESSAGES
});

export const setPaymentDetails = data => ({
  type: SET_PAYMENT_DETAILS,
  data
});

const setPaymentFee = data => ({
  type: SET_PAYMENT_FEE,
  data
});

const setPayfortDetails = data => ({
  type: SET_PAYFORT_DETAILS,
  data
});

export const fetchPaymentPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);

export const purchasePayFort = data => dispatch =>
  Api.payment.purchasePayFort(data);

export const submitPayFort = data => dispatch =>
  Api.payment.submitPayFort(data);

export const savePaymentMethod = data => dispatch =>
  Api.payment.savePaymentMethod({ paymentMethod: data }).then(response => {
    dispatch(setCartTotals(response));
    return response;
  });

export const placeOrder = data => dispatch =>
  Api.payment
    .savePaymentMethod({ paymentMethod: data.paymentMethod })
    .then(response => {
      dispatch(setPaymentFee(response));
      return Api.payment
        .placeOrder({
          email: data.email,
          paymentMethod: data.paymentMethod,
          items: data.items
        })
        .then(response => {
          if (data.paymentMethod === PAYFORT_MOBILE_PAYMENT_METHOD) {
          }
          dispatch(setPaymentDetails(response));
          return response;
        })
        .catch(error => {
          console.error(error);
          throw error;
        });
    });

export const getPayfortDetails = data => dispatch =>
  Api.payment.getPayFortDetails().then(payfortDetails =>
    Api.payment
      .getPayFortPurchaseDetails({
        merchantReference: payfortDetails.merchantReference,
        ...data
      })
      .then(response => {
        dispatch(setPayfortDetails(response));
        return response;
      })
  );
