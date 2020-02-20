import React, { useState, Fragment } from "react";
import { Field } from "redux-form/immutable";

import TextBox from "../form/textBox";
import PhoneInputField from "../form/phoneInputField";

import withTranslations from "../../containers/translations/withTranslations";
import {
  SEND_VERIFICATION_CODE,
  SUBMIT_VERIFICATION_CODE,
  RESEND_VERIFICATION_CODE,
  VERIFICATION_CODE_SENT,
  VERIFICATION_CODE_VERIFIED,
  NUMBER_ALREADY_VERFIED
} from "../../containers/shipmentAddress/constants";

const PhoneSection = ({
  handleSubmit,
  messages,
  isReadOnly,
  translations,
  initialValues,
  handlePhoneVerification,
  handlePhoneChange,
  sendValidationFailureMessage,
  sendValidationStatus,
  verifyValidationFailureMessage,
  verifyValidationStatus,
  change
}) => {
  const [enableSkipVerification, setEnableSkipVerification] = useState(false);

  return (
    <div className="phone-section">
      <Field
        name="phoneNumber"
        label={translations.get("shipmentAddress_phone")}
        component={PhoneInputField}
        defCountry={initialValues}
        type="text"
        className="shipment-address"
        readOnly={isReadOnly}
        disabled={
          sendValidationStatus === NUMBER_ALREADY_VERFIED ||
          verifyValidationStatus === VERIFICATION_CODE_VERIFIED
        }
        isAlwaysOpen={true}
        messages={
          sendValidationFailureMessage
            ? [{ message: sendValidationFailureMessage }]
            : messages.phoneNumber &&
              messages.phoneNumber.map((message, ...n) => ({
                message: translations.get(message.message),
                ...n
              }))
        }
        material={true}
        autoComplete="phoneNumber"
        onPhoneChange={value => {
          change("phoneNumber", value);
          handlePhoneChange();
        }}
        verificationMessage={
          sendValidationStatus === VERIFICATION_CODE_SENT &&
          verifyValidationStatus !== VERIFICATION_CODE_VERIFIED
            ? translations.get("check_your_phone") ||
              "Check your phone for verification code"
            : ""
        }
      />
      <div className="form-field form-field--shipment-address form-field--material form-field--phone-verification">
        {sendValidationStatus !== VERIFICATION_CODE_SENT &&
          sendValidationStatus !== NUMBER_ALREADY_VERFIED && (
            <button
              onClick={handleSubmit(values => {
                setEnableSkipVerification(false);
                setTimeout(() => {
                  setEnableSkipVerification(true);
                }, 20000);
                return handlePhoneVerification({
                  ...values.toJS(),
                  action: SEND_VERIFICATION_CODE
                });
              })}
              disabled={sendValidationStatus === VERIFICATION_CODE_SENT}
              className={`form__buttons__button button button--ghost form__buttons__button--send phone-section__buttons__button--send ${
                sendValidationFailureMessage
                  ? "phone-section__buttons__button--send-fail"
                  : ""
              }`}
            >
              {translations.get("verify_phone_number") || "Verify phone number"}
            </button>
          )}
        {sendValidationStatus === VERIFICATION_CODE_SENT &&
          verifyValidationStatus !== VERIFICATION_CODE_VERIFIED && (
            <button
              onClick={handleSubmit(values => {
                setEnableSkipVerification(false);
                setTimeout(() => {
                  setEnableSkipVerification(true);
                }, 20000);
                return handlePhoneVerification({
                  ...values.toJS(),
                  action: RESEND_VERIFICATION_CODE
                });
              })}
              className="form__buttons__button button button--ghost form__buttons__button--resend phone-section__buttons__button--send"
            >
              {translations.get("resend_code") || "Resend Code"}
            </button>
          )}
        {(verifyValidationStatus === VERIFICATION_CODE_VERIFIED ||
          sendValidationStatus === NUMBER_ALREADY_VERFIED) && (
          <div className="phone-section__phone-verified">
            <span className="phone-section__success-message phone-section__success-message--phone-verified">
              {translations.get("phone_verified") || "Verified"}
            </span>
          </div>
        )}
      </div>
      {sendValidationStatus === VERIFICATION_CODE_SENT &&
        verifyValidationStatus !== VERIFICATION_CODE_VERIFIED && (
          <Fragment>
            <Field
              name="verificationCode"
              label={
                translations.get("shipmentAddress_verification_code") ||
                "Verification code"
              }
              component={TextBox}
              type="text"
              className="shipment-address"
              messages={
                verifyValidationFailureMessage && [
                  { message: verifyValidationFailureMessage }
                ]
              }
              readOnly={isReadOnly}
              material={true}
              isVerificationCode={true}
            />
            <div className="form-field--shipment-address form-field--phone-section form-field--phone-section__buttons">
              <div className="phone-code-buttons__container">
                <button
                  onClick={handleSubmit(values =>
                    handlePhoneVerification({
                      ...values.toJS(),
                      action: SUBMIT_VERIFICATION_CODE
                    })
                  )}
                  className="form__buttons__button button button--ghost form__buttons__button--submit phone-section__buttons__button--submit"
                >
                  {translations.get("submit") || "Submit"}
                </button>
                {enableSkipVerification && (
                  <button
                    onClick={handleSubmit}
                    className="form__buttons__button button button--ghost form__buttons__button--skip phone-section__buttons__button--skip"
                  >
                    {translations.get("skip_verification") ||
                      "Skip verification"}
                  </button>
                )}
              </div>
            </div>
          </Fragment>
        )}
    </div>
  );
};

export default withTranslations(PhoneSection, [
  "shipmentAddress_phone_code",
  "shipmentAddress_phone",
  "shipmentAddress_phone_required",
  "verify_phone_number",
  "submit",
  "resend_code",
  "check_your_phone",
  "phone_verified",
  "submit",
  "shipmentAddress_verification_code"
]);
