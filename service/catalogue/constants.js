import {
  SORT_QUERY_STRING_PARAM,
  SEARCH_QUERY_STRING_PARAM
} from "../../src/js/containers/catalogue/constants";

export const NON_FILTERS = [
  "page",
  "pageSize",
  "categoryId",
  SORT_QUERY_STRING_PARAM,
  SEARCH_QUERY_STRING_PARAM
];
export const FILTERS_PRICE = "price";
export const DEFAULT_CATEGORY_ID = `${process.env.CATEGORY_ID}`;
export const DEFAULT_PAGE_SIZE = 16;
