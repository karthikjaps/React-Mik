export const trackAddProduct = data => {
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
    event: "addToCart",
    ecommerce: {
      add: { products: trackingData }
    }
  });
};
