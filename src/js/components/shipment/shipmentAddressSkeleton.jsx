import React from "react";

const ShipmentAddressSkeleton = () => (
  <section className="shipment-address-list shipment-address-list--skeleton">
    <div className="form__section shipment-address-list__fields shipment-address-list__fields--skeleton">
      <div className="form-field form-field--material form-field--shipment-address-field form-field--shipment-address-field--skeleton">
        <div className="address-radio__label__line address-radio__label__line--skeleton" />
        <div className="address-radio__label__line address-radio__label__line--skeleton" />
        <div className="address-radio__label__line address-radio__label__line--skeleton" />
      </div>
    </div>
  </section>
);

export default ShipmentAddressSkeleton;
