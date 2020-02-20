export const trackPromotionClicks = data => {
  const trackingData = data.map(item => ({
    name: item.title,
    id: item.id,
    creative: "" // TODO: Not used for now
    // position:
  }));

  dataLayer.push({
    event: "promotionClick",
    ecommerce: {
      promoClick: { promotions: trackingData }
    }
  });
};
