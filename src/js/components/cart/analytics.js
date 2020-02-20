export const trackRemoveProduct = data => {
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
    event: "removeFromCart",
    ecommerce: {
      remove: { products: trackingData }
    }
  });
};

export const trackCheckoutStep1 = (data, option) => {
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
        actionField: { step: 1, option },
        products: trackingData
      }
    }
  });
};
