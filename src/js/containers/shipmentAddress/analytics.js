export const trackCheckoutStep2 = data => {
  const trackingData = data.map(item => ({
    name: item.title,
    id: item.id,
    price: item.price,
    brand: item.brand,
    category: "",
    variant: "",
    list: "",
    quantity: item.quantity
  }));

  dataLayer.push({
    event: "checkout",
    ecommerce: {
      checkout: {
        actionField: { step: 2 },
        products: trackingData
      }
    }
  });
};
