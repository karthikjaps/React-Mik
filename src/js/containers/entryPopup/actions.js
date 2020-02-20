import Api from "../../../../service/main";
import {
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES
} from "./constants";

export const setValidationMessages = data => dispatch =>
  dispatch({
    type: SET_VALIDATION_MESSAGES,
    data
  });

export const resetValidationMessages = data => ({
  type: RESET_VALIDATION_MESSAGES
});

export const postUserEmail = data =>
  Api.newsletter
    .postUserEmail(data)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
