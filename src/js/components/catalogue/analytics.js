export const trackProductClicks = data => {
  const trackingData = data.map(item => ({
    name: item.get("title"),
    id: item.get("id"),
    price: item.get("price"),
    brand: item.get("brand"),
    category: "",
    variant: "",
    list: ""
  }));

  dataLayer.push({
    event: "productClick",
    ecommerce: {
      click: { products: trackingData }
    }
  });
};
