export const toHeader = data => {
  if (data) {
    let response = {};
    response.langs = data.langs;
    response.flags = data.flags;
    return response;
  }
};
