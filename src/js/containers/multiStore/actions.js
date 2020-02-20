import { SET_GROUPS, SET_SELECTED_GROUP, SET_CONFIG_STORE } from "./constants";
import Api from "../../../../service/main";

export const setGroups = data => ({
  type: SET_GROUPS,
  data
});

export const setSelectedGroup = data => ({
  type: SET_SELECTED_GROUP,
  data
});

export const setConfigStore = data => ({
  type: SET_CONFIG_STORE,
  data
});

export const fetchGroups = data => dispatch => {
  return Api.groups
    .getGroups(data)
    .then(response => {
      if (response && response.groups) {
        const selectedGroup =
          response.groups.find(n =>
            n.views.find(n => n.id === data.storeId.toString())
          ) || response.groups[0];
        dispatch(setSelectedGroup(selectedGroup));
      }
      dispatch(setGroups(response));
      return response;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};
