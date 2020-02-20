export const trackEntryPopupView = data => {
  dataLayer.push({
    event: "entryPopupView",
    entryPopupId: data.id
  });
};
