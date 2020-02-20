import { renderPage, getPage } from "../page/actions";
import {
  REDUCER_NAME,
  SET_LOADING,
  IS_ERROR,
  SET_ORDER_HISTORY
} from "./constants";

import Api from "../../../../service/main";

const isLoading = data => ({
  type: SET_LOADING,
  data
});

const isError = data => ({
  type: IS_ERROR,
  data
});

export const setOrderHistory = data => ({
  type: SET_ORDER_HISTORY,
  data
});

export const getOrderHistory = data => dispatch => {
  dispatch(isLoading(true));
  dispatch(isError(false));

  return Api.orderHistory
    .getOrderHistory(data)
    .then(response => {
      dispatch(setOrderHistory(response));
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(isError(true));
      console.error(error);
      throw error;
    });
};

export const fetchOrderHistoryPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);
