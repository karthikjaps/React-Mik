import {
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES
} from "./constants";
import Api from "../../../../service/main";

export const setValidationMessages = data => dispatch =>
  dispatch({
    type: SET_VALIDATION_MESSAGES,
    data
  });

export const resetValidationMessages = data => ({
  type: RESET_VALIDATION_MESSAGES
});

export const forgotPassword = data => dispatch =>
  Api.authentication
    .forgotPassword(data)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    });

export const resetPassword = data => dispatch =>
  Api.authentication
    .resetPassword(data)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    });
