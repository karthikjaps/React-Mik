import React from "react";
import { Field, reduxForm } from "redux-form/immutable";

import TextBox from "../form/textBox";
import InputButton from "../buttons/inputButton";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const ResetPasswordForm = ({
  action,
  method,
  messages,
  handleSubmit,
  submitting,
  apiErrorMessage,
  translations
}) => (
  <section className="forgot-password-form">
    <form
      onSubmit={handleSubmit}
      action={getUrl(action)}
      method={method}
      className="form"
    >
      <div className="forgot-password-form__title">
        {translations.get("resetPassword_setPassword")}
      </div>
      <div className="forgot-password-form__info">
        {translations.get("resetPassword_newPassword")}
      </div>
      <div className="forgot-password-form__section">
        <Field
          name="newPassword"
          label={translations.get("resetPassword_newPasswordField")}
          component={TextBox}
          type="password"
          messages={
            messages.newPassword &&
            messages.newPassword.map((message, ...n) => ({
              message: translations.get(message.message),
              ...n
            }))
          }
          autoComplete="password"
          material={true}
          className="single"
        />
        <Field
          name="confirmPassword"
          label={translations.get("resetPassword_confirmPasswordField")}
          component={TextBox}
          type="password"
          messages={
            messages.confirmPassword &&
            messages.confirmPassword.map((message, ...n) => ({
              message: translations.get(message.message),
              ...n
            }))
          }
          autoComplete="password"
          material={true}
          className="single"
        />
      </div>

      {apiErrorMessage && (
        <div className="forgot-password__error-section">
          <span className="form-field__error-message forgot-password-form__error-section__error-message">
            {apiErrorMessage}
          </span>
        </div>
      )}

      <div className="form-field form-field--single form__buttons form__buttons--center">
        <InputButton
          type="submit"
          value={translations.get("resetPassword_submit")}
          className="form__buttons__button form__buttons__button--forgot-password"
          loading={submitting}
          disabled={submitting}
        />
      </div>
    </form>
  </section>
);

export default reduxForm({
  form: "resetPasswordForm"
})(
  withTranslations(ResetPasswordForm, [
    "resetPassword_setPassword",
    "resetPassword_newPassword",
    "resetPassword_submit",
    "resetPassword_newPasswordField",
    "resetPassword_confirmPasswordField",
    "resetPassword_newPassword_required",
    "resetPassword_confirmPassword_required",
    "resetPassword_confirmPassword_different"
  ])
);
