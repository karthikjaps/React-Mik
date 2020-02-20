import React from "react";

const CatalogueSkeletonItem = () => (
  <div className="product product--skeleton">
    <div className="product__thumb product__thumb--skeleton" />
    <div className="product__details product__details--skeleton">
      <div className="product__details__row product__details__row--upper product__details__row--skeleton" />
      <div className="product__details__row product__details__row--lower product__details__row--skeleton" />
    </div>
  </div>
);

export default CatalogueSkeletonItem;
