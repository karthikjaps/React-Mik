import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form/immutable";

import InputButton from "../buttons/inputButton";
import Radio from "../form/materialRadio";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const ShipmentAddressesRadioList = ({
  action,
  method,
  handleSubmit,
  onSubmit,
  submitting,
  shipmentAddresses,
  translations,
  isLoggedIn
}) => {
  const shipmentAddressOptions =
    shipmentAddresses &&
    shipmentAddresses.map(n => ({
      id: `shipment-address-${n.get("addressId")}`,
      label: (
        <Fragment>
          <span className="address-radio__label__line">{n.get("name")}</span>
          <span className="address-radio__label__line">
            {n.get("streetAddress")}
          </span>
          <span className="address-radio__label__line">{n.get("city")}</span>
          <span className="address-radio__label__line">{n.get("zip")}</span>
          <span className="address-radio__label__line">{n.get("country")}</span>
          <span className="address-radio__label__line">
            {n.get("phoneNumber")}
          </span>
          <Link
            to={getUrl(`/checkout/delivery/${n.get("addressId")}/edit`)}
            className="address-radio__label__line address-radio__link"
          >
            {translations.get("shipment_editAddress")}
          </Link>
        </Fragment>
      ),
      value: n.get("addressId")
    }));
  return (
    <section className="shipment-address-list">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action={getUrl(action)}
        method={method}
        className="form"
      >
        {isLoggedIn && (
          <div className="shipment-address-list__link">
            <Link to={getUrl("/checkout/delivery/new/create")}>
              {translations.get("shipment_newAddress")}
            </Link>
          </div>
        )}
        <div className="shipment-address-list__fields form__section">
          {shipmentAddressOptions && (
            <Field
              component={Radio}
              name="shipmentAddress"
              material={true}
              className="shipment-address-field"
              options={shipmentAddressOptions}
            />
          )}
          <div className="form-field form-field--single">
            <InputButton
              type="submit"
              value={translations.get("shipment_submit")}
              className="form__buttons__button button form__buttons__button--save"
              loading={submitting}
              disabled={submitting}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default reduxForm({
  form: "shipmentAddressesList"
})(
  withTranslations(ShipmentAddressesRadioList, [
    "shipment_newAddress",
    "shipment_editAddress",
    "shipment_submit"
  ])
);
