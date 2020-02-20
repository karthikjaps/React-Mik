import { fromJS } from "immutable";
import { createSelector } from "reselect";
import { combineReducers } from "redux-immutable";

import { SET_PAGE, REDUCER_NAME } from "./constants";
import reducerRegistry from "../../util/reducerRegistry";
import pageReducerRegistry from "./pageReducerRegistry";

const initialState = fromJS({
  title: "",
  html: "",
  buttons: [],
  url: "",
  template: "",
  images: [],
  meta: {}
});

export const createPageReducerWithNamedType = (reducerName = "") => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `${SET_PAGE}/${reducerName}`:
        return state
          .set("title", action.data.title)
          .set("html", action.data.html)
          .set("buttons", fromJS(action.data.buttons))
          .set("url", action.data.url)
          .set("template", fromJS(action.data.template))
          .set("images", fromJS(action.data.images))
          .set("meta", fromJS(action.data.meta));
      default:
        return state;
    }
  };
};

const getPageState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectPage = createSelector(
  getPageState,
  n => n
);

export const createReducer = reducerName => {
  const reducer = createPageReducerWithNamedType(reducerName);
  pageReducerRegistry.register(reducerName, reducer);

  const pageReducer = pageReducerRegistry.getReducers();

  reducerRegistry.register(
    REDUCER_NAME,
    combineReducers({
      ...pageReducer
    })
  );
};

reducerRegistry.register(REDUCER_NAME, () => null);
