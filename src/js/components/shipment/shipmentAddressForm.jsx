import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import { Link } from "react-router-dom";

import PhoneSection from "./phoneSection";
import TeleInput from "../form/teleInput";
import TextBox from "../form/textBox";
import CheckBox from "../form/checkBox";
import InputButton from "../buttons/inputButton";
import Cities from "../../containers/cities/cities";
import Countries from "../../containers/cities/countries";

import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";
import {
  VERIFICATION_CODE_VERIFIED,
  NUMBER_ALREADY_VERFIED
} from "../../containers/shipmentAddress/constants";

const ShipmentAddressForm = ({
  action,
  method,
  handleSubmit,
  messages,
  submitting,
  isReadOnly,
  returnUrl,
  onCancel,
  showCancelButton,
  translations,
  isLoggedIn,
  change,
  initialValues,
  handlePhoneVerification,
  handlePhoneChange,
  sendValidationFailureMessage,
  sendValidationStatus,
  verifyValidationFailureMessage,
  verifyValidationStatus
}) => (
  <section className="shipment-address-form">
    <form
      onSubmit={handleSubmit}
      action={getUrl(action)}
      method={method}
      className="form"
    >
      <div className="shipment-address-form__section form__section">
        <Field
          name="firstName"
          label={translations.get("shipmentAddress_firstName")}
          component={TextBox}
          type="text"
          messages={
            messages.firstName &&
            messages.firstName.map((message, ...n) => ({
              message: translations.get(message.message),
              ...n
            }))
          }
          autoComplete="firstName"
          material={true}
          className="shipment-address"
          readOnly={isReadOnly}
        />
        <Field
          name="lastName"
          label={translations.get("shipmentAddress_lastName")}
          component={TextBox}
          type="text"
          messages={
            messages.lastName &&
            messages.lastName.map((message, ...n) => ({
              message: translations.get(message.message),
              ...n
            }))
          }
          autoComplete="lastName"
          material={true}
          className="shipment-address"
          readOnly={isReadOnly}
        />
        <Field
          name="streetAddress"
          label={translations.get("shipmentAddress_streetAddress")}
          component={TextBox}
          type="text"
          className="shipment-address"
          messages={
            messages.streetAddress &&
            messages.streetAddress.map((message, ...n) => ({
              message: translations.get(message.message),
              ...n
            }))
          }
          readOnly={isReadOnly}
          material={true}
          autoComplete="streetAddress"
        />
        <Field
          name="buildingNumber"
          label={translations.get("shipmentAddress_buildingNumber")}
          component={TextBox}
          type="text"
          className="shipment-address"
          messages={
            messages.buildingNumber &&
            messages.buildingNumber.map((message, ...n) => ({
              message: translations.get(message.message),
              ...n
            }))
          }
          readOnly={isReadOnly}
          material={true}
          autoComplete="buildingNumber"
        />
        <Cities
          name="city"
          label={translations.get("cities_label")}
          messages={
            messages.city &&
            messages.city.map((message, ...n) => ({
              message: translations.get(message.message),
              ...n
            }))
          }
          readOnly={isReadOnly}
          className="shipment-address"
          change={change}
        />
        <Countries
          name="country"
          label={translations.get("countries_label")}
          messages={
            messages.country &&
            messages.country.map((message, ...n) => ({
              message: translations.get(message.message),
              ...n
            }))
          }
          readOnly={isReadOnly}
          className="shipment-address"
          change={change}
        />
        <PhoneSection
          initialValues={initialValues}
          messages={messages}
          isLoggedIn={isLoggedIn}
          handleSubmit={handleSubmit}
          handlePhoneVerification={handlePhoneVerification}
          sendValidationFailureMessage={sendValidationFailureMessage}
          sendValidationStatus={sendValidationStatus}
          handlePhoneChange={handlePhoneChange}
          verifyValidationFailureMessage={verifyValidationFailureMessage}
          verifyValidationStatus={verifyValidationStatus}
          change={change}
        />
        {!!isLoggedIn && (
          <>
            <Field
              name="isDefaultShipping"
              label={translations.get("shipmentAddress_defaultShipping")}
              component={CheckBox}
              material={true}
              type="checkbox"
              className="single form-field--shipment-address__checkbox"
            />
            <Field
              name="isDefaultBilling"
              label={translations.get("shipmentAddress_defaultBilling")}
              component={CheckBox}
              material={true}
              type="checkbox"
              className="single form-field--shipment-address__checkbox"
            />
          </>
        )}
        <div className="form-field--shipment-address form-field--shipment-address__buttons">
          <div className="form__buttons shipment-address-form__buttons">
            {showCancelButton && (
              <Link
                to={getUrl(returnUrl)}
                className="form__buttons__button button button--ghost form__buttons__button--cancel shipment-address-form__buttons__button--cancel"
                title={translations.get("shipmentAddress_cancel")}
                onClick={onCancel}
              >
                {translations.get("shipmentAddress_cancel")}
              </Link>
            )}
            <InputButton
              type="submit"
              value={translations.get("shipmentAddress_submit") || ""}
              className="form__buttons__button button form__buttons__button--save shipment-address-form__buttons__button--save"
              loading={submitting}
              disabled={
                submitting ||
                (verifyValidationStatus !== VERIFICATION_CODE_VERIFIED &&
                  sendValidationStatus !== NUMBER_ALREADY_VERFIED)
              }
            />
          </div>
        </div>
      </div>
    </form>
  </section>
);

export default reduxForm({
  form: "shipmentAddressForm",
  enableReinitialize: true
})(
  withTranslations(ShipmentAddressForm, [
    "shipmentAddress_submit",
    "shipmentAddress_firstName",
    "shipmentAddress_lastName",
    "shipmentAddress_streetAddress",
    "shipmentAddress_buildingNumber",
    "cities_label",
    "countries_label",
    "shipmentAddress_country",
    "shipmentAddress_phone",
    "shipmentAddress_defaultShipping",
    "shipmentAddress_defaultBilling",
    "shipmentAddress_cancel",
    "shipmentAddress_firstName_required",
    "shipmentAddress_lastName_required",
    "shipmentAddress_streetAddress_required",
    "shipmentAddress_buildingNumber_required",
    "shipmentAddress_city_required",
    "shipmentAddress_country_required",
    "shipmentAddress_phone_required"
  ])
);
