import { SET_QUICKLINKS, SET_SOCIAL } from "./constants";
import Api from "../../../../service/main";

const loadQuickLinks = data => {
  return {
    type: SET_QUICKLINKS,
    data
  };
};

const setSocial = data => ({
  type: SET_SOCIAL,
  data
});

export const fetchQuickLinks = data => dispatch =>
  Api.quickLinks
    .get(data)
    .then(response => {
      dispatch(loadQuickLinks(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchSocial = data => dispatch =>
  Api.social
    .get(data)
    .then(response => {
      dispatch(setSocial(response));
      return response;
    })
    .catch(error => {
      throw error;
    });
