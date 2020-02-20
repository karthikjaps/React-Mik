import {
  SET_LOADING,
  SET_CATALOGUE_FILTERS,
  RESET_CATALOGUE_FILTERS,
  REDUCER_NAME
} from "./constants";
import Api from "../../../../service/main";

const isLoading = data => ({
  type: SET_LOADING,
  data
});

const loadCatalogueFilters = data => ({
  type: SET_CATALOGUE_FILTERS,
  data
});

export const resetCatalogueFilters = data => ({
  type: RESET_CATALOGUE_FILTERS
});

export const getCatalogueFilters = data => dispatch => {
  dispatch(isLoading(true));

  return Api.catalogue
    .getFilters(data)
    .then(response => {
      dispatch(
        loadCatalogueFilters({
          categoryId: data.categoryId,
          ...response
        })
      );
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      throw error;
    });
};

export const fetchCatalogueFilters = data => dispatch =>
  getCatalogueFilters(data)(dispatch);
