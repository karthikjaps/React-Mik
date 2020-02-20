import { REDUCER_NAME, SET_PUSH_ENABLED } from "./constants";
import { getPage, renderPage } from "../page/actions";

export const setPushEnabled = data => {
  return {
    type: SET_PUSH_ENABLED,
    data
  };
};

export const getSettings = data => dispatch => {
  dispatch(setPushEnabled(false));
  return getPage(data)(dispatch);
};

export const fetchSettings = data => dispatch =>
  renderPage({ reducerName: REDUCER_NAME, get: getSettings, data })(dispatch);
