import { SET_NAV_ITEM_ACTIVE, SET_NAVIGATION, SET_HEADER } from "./constants";
import Api from "../../../../service/main";

export const setNavItemActive = data => {
  return {
    type: SET_NAV_ITEM_ACTIVE,
    data
  };
};

const loadNavigation = data => {
  return {
    type: SET_NAVIGATION,
    data
  };
};

export const fetchNavigation = data => dispatch =>
  Api.navigation
    .get(data)
    .then(response => {
      dispatch(loadNavigation(response));
      return response;
    })
    .catch(error => {
      throw error;
    });

const loadHeader = data => {
  return {
    type: SET_HEADER,
    data
  };
};

export const fetchHeader = data => dispatch =>
  Api.header
    .get(data)
    .then(response => {
      dispatch(loadHeader(response));
      return response;
    })
    .catch(error => {
      throw error;
    });
