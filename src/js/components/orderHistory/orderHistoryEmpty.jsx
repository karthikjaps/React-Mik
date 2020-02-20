import React from "react";
import { Link } from "react-router-dom";

import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const OrdertHistoryEmpty = ({ translations }) => {
  return (
    <div className="order-history-no-results">
      <div className="order-history-no-results__content">
        <div className="order-history-no-results__icon">
          <img src="/img/icons/my-account/makeup.svg" alt="Order History" />
        </div>
        <div className="order-history-no-results__summary">
          {translations.get("order-history_noresults_summary") ||
            "You have placed no orders!"}
        </div>
      </div>
      <Link
        to={getUrl("/shop")}
        className="button order-history-no-results__button"
      >
        {translations.get("order_history_start_shopping") || "Start shopping"}
      </Link>
    </div>
  );
};

export default withTranslations(OrdertHistoryEmpty, [
  "order_history_noresults_summary",
  "order_history_start_shopping"
]);
