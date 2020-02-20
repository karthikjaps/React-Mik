import React from "react";

const OrderHistoryField = ({ label, value, className }) => (
  <div className={`order-history-item__field ${className ? className : ""}`}>
    <span className="order-history-item__field__label">{label}</span>
    <span className="order-history-item__field__value">{value}</span>
  </div>
);

export default OrderHistoryField;
