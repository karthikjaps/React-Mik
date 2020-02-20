import {
  REDUCER_NAME,
  SET_VALIDATION_MESSAGES,
  RESET_VALIDATION_MESSAGES,
  SET_LOADING,
  SET_EDIT_PROFILE
} from "./constants";
import { setProfile } from "../profile/actions";
import Api from "../../../../service/main";
import {
  USER_PROFILE_STORAGE_KEY,
  SESSION_USER
} from "../../../../service/constants";
import { renderPage, getPage } from "../page/actions";

const isLoading = data => {
  return {
    type: SET_LOADING,
    data
  };
};

const setEditProfile = data => ({
  type: SET_EDIT_PROFILE,
  data
});

export const fetchEditProfilePage = data => dispatch =>
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

export const fetchEditProfile = data => dispatch => {
  dispatch(isLoading(true));

  return Api.authentication
    .getProfile(data)
    .then(response => {
      dispatch(setEditProfile(response.profile));
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      throw error;
    });
};

export const editProfile = data => dispatch =>
  Promise.all([
    Api.authentication.updateProfile(data),
    new Promise((resolve, reject) => {
      if (data.changePassword) {
        Api.authentication
          .changePassword(data)
          .then(response => resolve(response))
          .catch(error => {
            console.error(error);
            reject(error);
          });
      } else {
        resolve(null);
      }
    })
  ])
    .then(([updateProfileResponse, changePasswordResponse]) => {
      try {
        // sync with node express-session
        let sessionData = {};
        sessionData[USER_PROFILE_STORAGE_KEY] = JSON.stringify(
          updateProfileResponse.profile
        );

        Api.session.post({
          sessionKey: SESSION_USER,
          sessionData,
          rememberSession: data.rememberMe
        });

        // set user profile in session storage
        localStorage.setItem(
          USER_PROFILE_STORAGE_KEY,
          updateProfileResponse.id
        );

        return updateProfileResponse;
      } catch (err) {
        throw err;
      }
    })
    .catch(error => {
      throw error;
    })
    .then(response => {
      dispatch(setProfile(response.profile));
      return response;
    });
