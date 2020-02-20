import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import { Link } from "react-router-dom";

import TextBox from "../form/textBox";
import InputButton from "../buttons/inputButton";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const ForgotPasswordForm = ({
  action,
  method,
  messages,
  handleSubmit,
  submitting,
  apiErrorMessage,
  translations
}) => {
  const emailErrorMessage = apiErrorMessage && [{ message: apiErrorMessage }];

  return (
    <section className="forgot-password-form">
      <form
        onSubmit={handleSubmit}
        action={getUrl(action)}
        method={method}
        className="form"
      >
        <div className="forgot-password-form__title">
          {translations.get("resetPassword_forgotYourPassword")}
        </div>
        <div className="forgot-password-form__info">
          {translations.get("resetPassword_notToWorry")}
        </div>
        <div className="forgot-password-form__section">
          <Field
            name="email"
            label={translations.get("resetPassword_email")}
            component={TextBox}
            type="text"
            messages={
              messages.currentPassword
                ? messages.currentPassword.map((message, ...n) => ({
                    message: translations.get(message.message),
                    ...n
                  }))
                : emailErrorMessage
            }
            autoComplete="email"
            material={true}
            className="single forgot-password__field"
            isAlwaysOpen={true}
          />
        </div>
        <div className="form-field form-field--single form__buttons form__buttons--center">
          <InputButton
            type="submit"
            value={translations.get("resetPassword_submit")}
            className="form__buttons__button form__buttons__button--forgot-password"
            loading={submitting}
            disabled={submitting}
          />
        </div>
        <div className="forgot-password-form__forgot-password-links">
          <span className="forgot-password-form__forgot-password-links__separator">
            {translations.get("resetPassword_or")}
          </span>
          <Link
            to={getUrl("/login/")}
            title="Login"
            className="forgot-password-form__forgot-password-links__link"
          >
            {translations.get("resetPassword_backLogin")}
          </Link>
        </div>
      </form>
    </section>
  );
};

export default reduxForm({
  form: "forgotPasswordForm"
})(
  withTranslations(ForgotPasswordForm, [
    "resetPassword_forgotYourPassword",
    "resetPassword_notToWorry",
    "resetPassword_or",
    "resetPassword_backLogin",
    "resetPassword_submit",
    "resetPassword_email",
    "resetPassword_email_required",
    "resetPassword_email_valid"
  ])
);
