import { SET_ROUTES } from "./constants";
import { getRoutes } from "../../../../server/routes";

const loadRoutes = data => {
  return {
    type: SET_ROUTES,
    data
  };
};

export const fetchRoutes = data => dispatch =>
  getRoutes(data)
    .then(response => {
      dispatch(loadRoutes(response));
      return response;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
