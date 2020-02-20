import { REDUCER_NAME, SET_LOADING, SET_STORE_LOCATIONS } from "./constants";
import { renderPage, getPage } from "../page/actions";
import Api from "../../../../service/main";

const isLoading = data => ({
  type: SET_LOADING,
  data
});

const setStoreLocations = data => ({
  type: SET_STORE_LOCATIONS,
  data
});

export const fetchStoreLocatorPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);

export const getStoreLocations = data => dispatch => {
  dispatch(isLoading(true));

  return Api.storeLocations
    .get(data)
    .then(response => {
      dispatch(setStoreLocations(response));
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      throw error;
    });
};
