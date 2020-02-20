import { fromJS } from "immutable";

import {
  CITIES_LOADING,
  SET_CITIES,
  SET_COUNTRIES,
  RESET_CITIES,
  RESET_COUNTRIES,
  REDUCER_NAME
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  cities: [],
  countries: [],
  isLoading: false
});

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CITIES_LOADING:
      return state.set("isLoading", action.data);
    case SET_CITIES:
      return state.set("cities", fromJS(action.data));
    case SET_COUNTRIES:
      return state.set("countries", fromJS(action.data));
    case RESET_CITIES:
      return state.set("cities", initialState.get("cities"));
    case RESET_COUNTRIES:
      return state.set("countries", initialState.get("countries"));
    default:
      return state;
  }
};

export const getCitiesState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};
export const selectCities = state => getCitiesState(state).get("cities");
export const selectCountries = state => getCitiesState(state).get("countries");
export const selectIsLoading = state => getCitiesState(state).get("isLoading");

reducerRegistry.register(REDUCER_NAME, citiesReducer);
