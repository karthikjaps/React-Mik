import { fromJS } from "immutable";

import { SET_QUICKLINKS, SET_SOCIAL, REDUCER_NAME } from "./constants";
import reducerRegistry from "../../util/reducerRegistry";
import { createSelector } from "reselect";

const initialState = fromJS({
  quickLinks: [],
  trustIcons: [],
  social: []
});

export function footerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUICKLINKS:
      return state
        .set("quickLinks", fromJS(action.data.footerBlocks))
        .set("trustIcons", fromJS(action.data.footerTrustIcons));
    case SET_SOCIAL:
      return state.set("social", fromJS(action.data));
    default:
      return state;
  }
}

export const getFooterState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectTrustIcons = createSelector(
  getFooterState,
  n => n.get("trustIcons")
);

export const selectQuickLinks = createSelector(
  getFooterState,
  n => n.get("quickLinks")
);

export const selectSocial = createSelector(
  getFooterState,
  n => n.get("social")
);

reducerRegistry.register(REDUCER_NAME, footerReducer);
