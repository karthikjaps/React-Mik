import { SET_TRANSLATIONS, SET_LOADING } from "./constants";
import Api from "../../../../service/main";

const isLoading = data => ({
  type: SET_LOADING,
  data
});

export const setTranslations = data => ({
  type: SET_TRANSLATIONS,
  data
});

export const getTranslations = data => dispatch => {
  dispatch(isLoading(true));

  return Api.language
    .get(data)
    .then(response => {
      dispatch(setTranslations(response));
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      throw error;
    });
};
