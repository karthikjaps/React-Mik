import React from "react";
import withTranslations from "../../containers/translations/withTranslations";
import OrderHistoryBreakdown from "./orderHistoryBreakdown";
import OrderHistoryField from "./orderHistoryField";

const OrderHistoryItem = ({ data, translations, currencyCode }) => {
  if (data) {
    return (
      <div className="order-history-item__wrapper">
        <div className="order-history-item">
          <OrderHistoryField
            label={translations.get("order_number") || "Order number"}
            value={data.get("id")}
          />
          <OrderHistoryField
            label={translations.get("order_date") || "Order date"}
            value={data.get("dateFormatted")}
          />
          <OrderHistoryField
            label={translations.get("order_delivery_date") || "Delivery date"}
            value={data.get("deliveryDate")}
          />
          <OrderHistoryField
            label={translations.get("order_payment_method") || "Payment method"}
            value={data.get("paymentMethod")}
          />
          <OrderHistoryField
            label={`${translations.get("order_total") ||
              "Total"} (${translations.get("order_after discount") ||
              "after discount"})`}
            value={data.get("total") && `${currencyCode} ${data.get("total")}`}
          />
          <OrderHistoryField
            label={translations.get("order_coupon_code") || "Coupon code"}
            value={data.get("couponCode")}
          />
          <OrderHistoryField
            label={translations.get("order_items") || "Items"}
            value={(data.get("items") && data.get("items").size) || "0"}
            className="order-history-item__field--last"
          />
        </div>
        <OrderHistoryBreakdown
          currencyCode={currencyCode}
          items={data.get("items")}
        />
      </div>
    );
  }
  return null;
};

export default withTranslations(OrderHistoryItem, [
  "order_number",
  "order_date",
  "order_delivery_date",
  "order_payment_method",
  "order_total",
  "order_after discount",
  "order_coupon_code",
  "order_items"
]);
