import {
  REDUCER_NAME,
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES
} from "./constants";
import { renderPage, getPage } from "../page/actions";
import Api from "../../../../service/main";

export const setValidationMessages = data => dispatch =>
  dispatch({
    type: SET_VALIDATION_MESSAGES,
    data
  });

export const resetValidationMessages = data => ({
  type: RESET_VALIDATION_MESSAGES
});

export const postUserEmail = data =>
  Api.notifyMe
    .postUserEmail(data)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });

export const fetchProductPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);
