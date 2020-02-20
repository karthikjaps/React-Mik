import { SET_LANGS } from "./constants";

const loadLangs = data => {
  return {
    type: SET_LANGS,
    data
  };
};

export const fetchLangs = data => dispatch =>
  Promise.resolve({
    langs: [
      {
        id: "EN",
        title: "English",
        label: "العربية",
        isActive: data.lang === "EN",
        url: "en"
      },
      {
        id: "AR",
        title: "العربية",
        label: "English",
        isActive: data.lang === "AR",
        url: "ar"
      }
    ]
  }).then(response => {
    dispatch(loadLangs(response));
  });
