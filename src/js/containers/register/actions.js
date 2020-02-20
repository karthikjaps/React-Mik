import {
  REDUCER_NAME,
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES
} from "./constants";
import { setProfile } from "../profile/actions";
import Api from "../../../../service/main";
import {
  USER_PROFILE_STORAGE_KEY,
  SESSION_USER
} from "../../../../service/constants";
import { renderPage, getPage } from "../page/actions";

export const fetchRegisterPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);

export const setValidationMessages = data => dispatch =>
  dispatch({
    type: SET_VALIDATION_MESSAGES,
    data
  });

export const resetValidationMessages = data => ({
  type: RESET_VALIDATION_MESSAGES
});

export const register = data => dispatch =>
  Api.authentication
    .register(data)
    .then(response => {
      Api.authentication
        .login(data)
        .then(response => {
          try {
            // sync with node express-session
            let sessionData = {};
            sessionData[USER_PROFILE_STORAGE_KEY] = JSON.stringify(
              response.profile
            );

            Api.session.post({
              sessionKey: SESSION_USER,
              sessionData,
              rememberSession: data.rememberMe
            });

            // set user profile in session storage
            localStorage.setItem(USER_PROFILE_STORAGE_KEY, response.id);

            return response;
          } catch (err) {
            throw err;
          }
        })
        .then(response => {
          dispatch(setProfile(response.profile));
          return response;
        })
        .catch(error => {
          throw new Error(
            "Registration successful but subsequent login failed"
          );
        });
    })
    .catch(error => {
      throw new Error("Ragistration failed");
    });
