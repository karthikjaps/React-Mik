import React from "react";
import { Link } from "react-router-dom";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const CartNoResults = ({ translations }) => (
  <div className="cart-no-results">
    <span className="cart-no-results__title">
      {translations.size > 0 ? translations.get("cart_noresults_title") : ""}
    </span>
    <span className="cart-no-results__subheading">
      {translations.size > 0
        ? translations.get("cart_noresults_subheading")
        : ""}
    </span>
    <Link to={getUrl("/shop")} className="cart-no-results__link">
      {translations.size > 0 ? translations.get("cart_noresults_shopAll") : ""}
    </Link>
    <img src="/img/icons/cart/no-results.svg" alt="makeup" />
  </div>
);

export default withTranslations(CartNoResults, [
  "cart_noresults_title",
  "cart_noresults_subheading",
  "cart_noresults_shopAll"
]);
