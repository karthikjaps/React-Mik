import React from "react";

const ProductSkeleton = () => (
  <div className="product product--skeleton desktop-two-column">
    <div className="product__thumb--skeleton product__thumb--desktop-skeleton desktop-two-column desktop-two-column_column--aside" />
    <div className="product__details product__details--skeleton desktop-two-column_column desktop-two-column_column--main">
      <div className="product__details__row product__details__row--skeleton product__details__row--skeleton--heading" />
      <div className="product__details__row product__details__row--skeleton" />
      <div className="product__details__row product__details__row--skeleton" />
      <div className="product__details__row product__details__row--skeleton" />
      <div className="product__details__row product__details__row--skeleton" />
    </div>
  </div>
);

export default ProductSkeleton;
