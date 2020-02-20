import React from "react";

import withTranslations from "../../containers/translations/withTranslations";

const OrderHistoryBreakdownItem = ({
  item,
  currencyCode,
  key,
  translations
}) => (
  <div className="breakdown-section__list__item" key={key}>
    <div className="breakdown-section__list__item__thumb">
      <img
        src={item.get("image")}
        alt={item.get("title")}
        title={item.get("title")}
        className="breakdown-section__list__item__thumb__img"
      />
    </div>
    <div className="breakdown-section__list__item__details">
      <span className="breakdown-section__list__item__details__title">
        {item.get("title")}
      </span>
      <span className="breakdown-section__list__item__details__price">
        {item.get("price") && `${currencyCode} ${item.get("price")}`}
      </span>
      <span className="breakdown-section__list__item__details__quantity">
        {`${translations.get("breakdown_quantity") || "QTY"}: ${item.get(
          "quantity"
        )}`}
      </span>
    </div>
  </div>
);

export default withTranslations(OrderHistoryBreakdownItem, [
  "breakdown_quantity"
]);
