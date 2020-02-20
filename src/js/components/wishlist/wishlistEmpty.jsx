import React from "react";
import { Link } from "react-router-dom";

import withTranslations from "../../containers/translations/withTranslations";
import InputButton from "../buttons/inputButton";
import { getUrl } from "../../../../server/helpers/routing";

const WishlistEmpty = ({ translations }) => {
  return (
    <div className="wishlist-no-results">
      <div className="wishlist-no-results__content">
        <span className="wishlist-no-results__title">
          {translations.get("wishlist_noresults_title")}
        </span>
        <div className="wishlist-no-results__icon">
          <img src="/img/icons/my-account/cosmetics.svg" alt="Wishlist" />
        </div>
        <div className="wishlist-no-results__summary">
          {translations.get("wishlist_noresults_summary_first")}
          <span className="wishlist-no-results__wishlist-icon" />
          {translations.get("wishlist_noresults_summary_second")}
        </div>
      </div>
      <Link to={getUrl("/shop")} className="button wishlist-no-results__button">
        {translations.get("find_your_favorites")}
      </Link>
    </div>
  );
};

export default withTranslations(WishlistEmpty, [
  "wishlist_noresults_title",
  "wishlist_noresults_summary_first",
  "wishlist_noresults_summary_second",
  "find_your_favorites"
]);
