import { REDUCER_NAME } from "./constants";
import { renderPage, getPage } from "../page/actions";

export const fetchCheckoutPage = data => dispatch =>
  renderPage({
    reducerName: REDUCER_NAME,
    get: getPage,
    data
  })(dispatch);
