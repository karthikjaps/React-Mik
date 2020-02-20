import React from "react";
import { Link } from "react-router-dom";

import withTranslations from "../../containers/translations/withTranslations";
import AddToBagForm from "./addToBagForm.jsx";
import { getUrl } from "../../../../server/helpers/routing";

const ItemDetails = ({
  data,
  initialValues,
  translations,
  onAddToCart,
  onRemoveItem,
  currencyCode
}) => {
  return (
    <div className="cart-product__details">
      <div className="cart-product__details__row">
        {data.get("isAvailable") ? (
          <Link to={getUrl(data.get("url"))} title={data.get("title")}>
            <span className="cart-product__title">{data.get("title")}</span>
          </Link>
        ) : (
          <span className="cart-product__title">{data.get("title")}</span>
        )}
        <span
          className="cart-product__remove cart-product__remove--whishlist-item"
          onClick={onRemoveItem}
        />
      </div>
      <div className="cart-product__details__row">
        {(!data.get("rrp") || data.get("price") === data.get("rrp")) && (
          <span className="cart-product__price">
            {data.get("price") && `${currencyCode} ${data.get("price")}`}
          </span>
        )}
        {data.get("rrp") &&
          data.get("price") !== data.get("rrp") && [
            <span
              className="cart-product__price cart-product__price--discounted"
              key="product__price--discounted"
            >
              {data.get("price") && `${currencyCode} ${data.get("price")}`}
            </span>,
            <span
              className="cart-product__price cart-product__price--regular"
              key="product__price--regular"
            >
              {data.get("rrp") && `${currencyCode} ${data.get("rrp")}`}
            </span>
          ]}
      </div>
      {!data.get("isAvailable") ? (
        <span className="cart-product__info">
          {translations.size > 0
            ? translations.get("cartProduct_unavailable")
            : ""}
        </span>
      ) : (
        <AddToBagForm
          initialValues={initialValues}
          item={data}
          onSubmit={onAddToCart}
          displayCarouselUseWith={true}
        />
      )}
    </div>
  );
};

export default withTranslations(ItemDetails, ["cartProduct_unavailable"]);
