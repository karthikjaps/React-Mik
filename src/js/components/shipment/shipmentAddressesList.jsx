import React from "react";
import { Link } from "react-router-dom";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const ShipmentAddressesList = ({
  shipmentAddresses,
  translations,
  isLoggedIn
}) => {
  return (
    <section className="shipment-address-list">
      <div className="shipment-address-list__title">
        {translations.get("shipment_address")}
      </div>
      {isLoggedIn && (
        <div className="shipment-address-list__link">
          <Link to={getUrl("/shipment-address/new/create")}>
            {translations.get("shipment_newAddress")}
          </Link>
        </div>
      )}
      <div className="shipment-address-list__section">
        {shipmentAddresses &&
          shipmentAddresses.map(n => (
            <div
              key={n.get("addressId")}
              className="shipment-address-list__item"
            >
              <div className="shipment-address-list__item__column--left">
                <span className="shipment-address-list__item__line">
                  {n.get("name")}
                </span>
                <span className="shipment-address-list__item__line">
                  {n.get("streetAddress")}
                </span>
                <span className="shipment-address-list__item__line">
                  {n.get("city")}
                </span>
                <span className="shipment-address-list__item__line">
                  {n.get("zip")}
                </span>
                <span className="shipment-address-list__item__line">
                  {n.get("country")}
                </span>
                <span className="shipment-address-list__item__line">
                  {n.get("phone")}
                </span>
                {n.get("isDefaultShipping") && (
                  <span className="shipment-address-list__item__line shipment-address-list__item__line--small-font">
                    {translations.get("shipment_defaultAddress")}
                  </span>
                )}
                {n.get("isDefaultBilling") && (
                  <span className="shipment-address-list__item__line shipment-address-list__item__line--small-font">
                    {translations.get("shipment_billingAddress")}
                  </span>
                )}
              </div>
              <div className="shipment-address-list__item__column--right">
                <Link
                  to={getUrl(`/shipment-address/${n.get("addressId")}/edit`)}
                  className="shipment-address-list__item__line shipment-address-list__item__link"
                >
                  {translations.get("shipment_editAddress")}
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default withTranslations(ShipmentAddressesList, [
  "shipment_address",
  "shipment_newAddress",
  "shipment_defaultAddress",
  "shipment_billingAddress",
  "shipment_editAddress"
]);
