import React from "react";

const ProductPrice = ({ item, currencyCode }) => {
  if (item) {
    return (
      <div className="product-price__wrapper">
        {item.get("price") === item.get("rrp") && (
          <span className="product-price">
            {item.get("price") && `${currencyCode} ${item.get("price")}`}
          </span>
        )}
        {item.get("price") !== item.get("rrp") && [
          <span
            className="product-price product-price--discounted"
            key="product__price--discounted"
          >
            {item.get("price") && `${currencyCode} ${item.get("price")}`}
          </span>,
          <span
            className="product-price product-price--regular"
            key="product-price--regular"
          >
            {item.get("rrp") && `${currencyCode} ${item.get("rrp")}`}
          </span>
        ]}
      </div>
    );
  }
  return null;
};

export default ProductPrice;
