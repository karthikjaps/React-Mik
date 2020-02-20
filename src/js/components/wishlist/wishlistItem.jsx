import React from "react";
import { Link } from "react-router-dom";

import AddToBagForm from "./addToBagForm.jsx";
import ItemDetails from "./itemDetails.jsx";
import Thumb from "./thumb";
import { getUrl } from "../../../../server/helpers/routing";

const WishlistItem = ({ data, onAddToCart, onRemoveItem, currencyCode }) => {
  if (data) {
    return (
      <div className="cart-product">
        {data.get("isAvailable") ? (
          <Link
            to={getUrl(data.get("url"))}
            title={data.get("title")}
            className="cart-product__thumb"
          >
            <Thumb data={data} />
          </Link>
        ) : (
          <Thumb data={data} className="cart-product__thumb" />
        )}
        <ItemDetails
          data={data}
          initialValues={{
            productId: data.get("id"),
            quantity: "1",
            isSuccess: false
          }}
          onAddToCart={onAddToCart}
          onRemoveItem={onRemoveItem}
          currencyCode={currencyCode}
        />
      </div>
    );
  }
  return null;
};

export default WishlistItem;
