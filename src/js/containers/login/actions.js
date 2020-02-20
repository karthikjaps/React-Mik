import {
  REDUCER_NAME,
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES
} from "./constants";
import { setProfile, resetProfile } from "../profile/actions";
import Api from "../../../../service/main";
import {
  USER_PROFILE_STORAGE_KEY,
  GUEST_PROFILE_STORAGE_KEY,
  SESSION_USER,
  CART_STORAGE_KEY
} from "../../../../service/constants";
import { renderPage, getPage } from "../page/actions";
import { clearCart } from "../cart/actions";

export const fetchLoginPage = data => dispatch =>
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

export const login = data => dispatch =>
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
        localStorage.setItem(
          USER_PROFILE_STORAGE_KEY,
          JSON.stringify(response.profile)
        );

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
      throw new Error("Incorrect email address or password");
    });

export const socialMediaLogin = data => dispatch =>
  Api.authentication
    .socialMediaLogin(data)
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
        localStorage.setItem(
          USER_PROFILE_STORAGE_KEY,
          JSON.stringify(response.profile)
        );

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
      throw new Error("Incorrect email address");
    });

export const logout = data => dispatch =>
  Api.authentication
    .signOut(data)
    .then(response => {
      let hasStorage = typeof sessionStorage !== "undefined";

      if (hasStorage) {
        localStorage.removeItem(USER_PROFILE_STORAGE_KEY);
        localStorage.removeItem(CART_STORAGE_KEY);
      }

      Api.session.post({
        sessionKey: SESSION_USER,
        sessionData: null,
        rememberSession: false
      });
    })
    .then(response => {
      dispatch(resetProfile());
      dispatch(clearCart());
      return response;
    })
    .catch(error => {
      throw error;
    });

export const setGuestInSession = data => {
  localStorage.setItem(GUEST_PROFILE_STORAGE_KEY, JSON.stringify(data));
};
