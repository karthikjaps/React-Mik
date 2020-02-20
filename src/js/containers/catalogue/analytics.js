export const trackProductImpression = data => {
  const trackingData = data.map((item, index) => ({
    name: item.get("title"),
    id: item.get("id"),
    price: item.get("price"),
    brand: item.get("brand"),
    category: "",
    variant: "",
    list: ""
    // position: index + 1
  }));

  dataLayer.push({
    event: "productImpression",
    ecommerce: {
      impressions: trackingData
    }
  });
};
