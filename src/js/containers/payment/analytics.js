export const trackPurchase = data => {
  const trackingProductsData = data.products.map(item => ({
    name: item.title,
    id: item.id || item.productId,
    price: item.price,
    brand: item.brand,
    category: "",
    variant: "",
    quantity: item.quantity,
    coupon: item.coupon
  }));

  dataLayer.push({
    event: "transaction",
    ecommerce: {
      purchase: {
        actionField: {
          id: data.paymentMethod, // Transaction ID. Required for purchases and refunds.
          affiliation: "Online Store",
          revenue: data.amount, // Total transaction value (incl. tax and shipping)
          tax: "",
          shipping: "",
          coupon: ""
        },
        products: trackingProductsData
      }
    }
  });
};
