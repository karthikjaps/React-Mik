import { fromJS } from "immutable";

import {
  SET_GROUPS,
  SET_SELECTED_GROUP,
  SET_CONFIG_STORE,
  REDUCER_NAME
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";
import { createSelector } from "reselect";

const initialState = fromJS({
  groups: [],
  storeConfig: fromJS({})
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUPS:
      return state.set("groups", fromJS(action.data.groups));
    case SET_SELECTED_GROUP:
      return state.set("selectedGroup", fromJS(action.data));
    case SET_CONFIG_STORE:
      return state.set("storeConfig", fromJS(action.data));
    default:
      return state;
  }
}

export const getState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectGroups = createSelector(
  getState,
  n => n.get("groups")
);
export const selectSelectedStore = createSelector(
  getState,
  n => n.get("selectedGroup")
);
export const selectConfigStore = createSelector(
  getState,
  n => n.get("storeConfig")
);

reducerRegistry.register(REDUCER_NAME, reducer);
