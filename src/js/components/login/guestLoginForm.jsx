import React from "react";
import { Field, reduxForm } from "redux-form/immutable";

import TextBox from "../form/textBox";
import InputButton from "../buttons/inputButton";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const GuestLoginForm = ({
  action,
  method,
  messages,
  handleSubmit,
  submitting,
  authFailureMessage,
  translations
}) => {
  return (
    <section className="login-form">
      <form
        onSubmit={handleSubmit}
        action={getUrl(action)}
        method={method}
        className="form"
      >
        <div className="login-form__section">
          <Field
            name="email"
            label={translations.get("login_guest_email")}
            component={TextBox}
            type="text"
            messages={
              messages.email &&
              messages.email.map((message, ...n) => ({
                message: translations.get(message.message),
                ...n
              }))
            }
            autoComplete="email"
            material={true}
            className="single"
            isAlwaysOpen={true}
          />
        </div>

        {authFailureMessage && (
          <div className="login-form__error-section">
            <span className="form-field__error-message login-form__error-section__error-message">
              {authFailureMessage}
            </span>
          </div>
        )}

        <div className="form-field form-field--single form__buttons">
          <InputButton
            type="submit"
            value={translations.get("login_guest_submit")}
            className="form__buttons__button form__buttons__button--login"
            loading={submitting}
            disabled={submitting}
          />
        </div>
      </form>
    </section>
  );
};

export default reduxForm({
  form: "guestLoginForm"
})(
  withTranslations(GuestLoginForm, [
    "login_guest_email",
    "login_guest_submit",
    "loginForm_email_required",
    "loginForm_email_valid",
    "loginForm_password_required"
  ])
);
