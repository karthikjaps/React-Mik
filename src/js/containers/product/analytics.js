export const trackProductDetail = data => {
  const trackingData = data.map(item => ({
    name: item.title,
    id: item.id,
    price: item.price,
    brand: item.brand,
    category: "",
    variant: "",
    list: ""
  }));

  dataLayer.push({
    event: "productClick",
    ecommerce: {
      detail: { products: trackingData }
    }
  });
};
