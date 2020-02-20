import {
  CITIES_LOADING,
  SET_CITIES,
  RESET_CITIES,
  SET_COUNTRIES,
  RESET_COUNTRIES
} from "./constants";
import Api from "../../../../service/main";

const isLoading = data => {
  return {
    type: CITIES_LOADING,
    data
  };
};

const setCities = data => ({
  type: SET_CITIES,
  data
});

const setCountries = data => ({
  type: SET_COUNTRIES,
  data
});

export const resetCities = () => ({
  type: RESET_CITIES
});

export const resetCountries = () => ({
  type: RESET_COUNTRIES
});

export const fetchCities = data => dispatch => {
  dispatch(isLoading(true));
  dispatch(resetCities());
  return Api.cities
    .getCities(data)
    .then(response => {
      dispatch(setCities(response));
      return response;
    })
    .then(response => {
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      console.error(error);
      throw error;
    });
};

export const fetchCountries = data => dispatch => {
  dispatch(isLoading(true));
  dispatch(resetCountries());
  return Api.cities
    .getCountries(data)
    .then(response => {
      dispatch(setCountries(response));
      return response;
    })
    .then(response => {
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      console.error(error);
      throw error;
    });
};
