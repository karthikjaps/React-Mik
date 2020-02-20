import { SET_PROFILE, RESET_PROFILE } from "./constants";
import { USER_PROFILE_STORAGE_KEY } from "../../../../service/constants";

export const setProfile = data => ({
  type: SET_PROFILE,
  data
});

export const resetProfile = data => ({
  type: RESET_PROFILE,
  data
});

export const getUserSession = () => {
  let hasStorage = typeof sessionStorage !== "undefined";
  if (hasStorage) {
    let sessionData = {};
    sessionData[USER_PROFILE_STORAGE_KEY] = localStorage.getItem(
      USER_PROFILE_STORAGE_KEY
    );
    return sessionData;
  } else {
    return null;
  }
};
