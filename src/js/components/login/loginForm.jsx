import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import { Link } from "react-router-dom";

import TextBox from "../form/textBox";
import CheckBox from "../form/checkBox";
import InputButton from "../buttons/inputButton";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const LoginForm = ({
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
        <div className="login-form__intro">
          {translations.get("login_signInEmail")}
        </div>
        <div className="login-form__section">
          <Field
            name="email"
            label={translations.get("login_email")}
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
          <Field
            name="password"
            label={translations.get("login_password")}
            component={TextBox}
            type="password"
            messages={
              messages.password &&
              messages.password.map((message, ...n) => ({
                message: translations.get(message.message),
                ...n
              }))
            }
            autoComplete="password"
            material={true}
            className="single"
            isAlwaysOpen={true}
          />
          <div className="form-field form-field--single login-form-links">
            <div className="login-form-links__item login-form-links__item--remember-me">
              <Field
                name="rememberMe"
                label={translations.get("login_rememberMe")}
                component={CheckBox}
                material={true}
                className="single"
              />
            </div>
            <Link
              to={getUrl("/forgot-password/")}
              title={translations.get("login_forgot")}
              className="login-form-links__item login-form-links__item--forgot-password"
            >
              {translations.get("login_forgot")}
            </Link>
          </div>
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
            value={translations.get("login_submit")}
            className="form__buttons__button form__buttons__button--login"
            loading={submitting}
            disabled={submitting}
          />
        </div>
        <div className="login-form__register-links">
          <span className="login-form__register-links__label">
            {translations.get("login_account")}
          </span>
          <Link
            to={{
              pathname: getUrl("/register"),
              state: { returnUrl: "/checkout" }
            }}
            title={translations.get("login_SignUp")}
            className="login-form__register-links__link"
          >
            {translations.get("login_SignUp")}
          </Link>
        </div>
      </form>
    </section>
  );
};

export default reduxForm({
  form: "loginForm"
})(
  withTranslations(LoginForm, [
    "login_signInEmail",
    "login_forgot",
    "login_account",
    "login_SignUp",
    "login_submit",
    "login_rememberMe",
    "login_email",
    "login_password",
    "loginForm_email_required",
    "loginForm_email_valid",
    "loginForm_password_required"
  ])
);
