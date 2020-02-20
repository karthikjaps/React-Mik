import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form/immutable";
import { Link } from "react-router-dom";

import TextBox from "../form/textBox";
import CheckBox from "../form/checkBox";
import InputButton from "../buttons/inputButton";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const RegisterForm = ({
  action,
  method,
  messages,
  handleSubmit,
  submitting,
  authFailureMessage,
  translations
}) => {
  return (
    <section className="register-form">
      <form
        onSubmit={handleSubmit}
        action={getUrl(action)}
        method={method}
        className="form"
      >
        <div className="register-form__intro">
          {translations.get("register_signUp")}
        </div>
        <div className="register-form__section">
          <Field
            name="firstName"
            label={translations.get("register_firstName")}
            component={TextBox}
            type="text"
            messages={
              messages.firstName &&
              messages.firstName.map((message, ...n) => ({
                message: translations.get(message.message),
                ...n
              }))
            }
            autoComplete="first-name"
            material={true}
            className=""
          />
          <Field
            name="lastName"
            label={translations.get("register_lastName")}
            component={TextBox}
            type="text"
            messages={
              messages.lastName &&
              messages.lastName.map((message, ...n) => ({
                message: translations.get(message.message),
                ...n
              }))
            }
            autoComplete="last-name"
            material={true}
            className=""
          />
          <Field
            name="email"
            label={translations.get("register_email")}
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
          />
          <Field
            name="password"
            label={translations.get("register_password")}
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
          />
          <Field
            name="confirmPassword"
            label={translations.get("register_confirmPassword")}
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
          <div className="form-field form-field--single register-form-links">
            <div className="register-form-links__item">
              <Field
                name="agreeTaC"
                label={
                  <Fragment>
                    <span>{translations.get("register_agree")}</span>
                    <Link
                      to={getUrl("/terms-conditions")}
                      target="_blank"
                      className=""
                    >
                      {translations.get("register_terms")}
                    </Link>
                    <span>&nbsp;and&nbsp;</span>
                    <Link
                      to={getUrl("/privacy-policy")}
                      target="_blank"
                      className=""
                    >
                      {translations.get("register_privacy")}
                    </Link>
                  </Fragment>
                }
                component={CheckBox}
                messages={
                  messages.agreeTaC &&
                  messages.agreeTaC.map((message, ...n) => ({
                    message: translations.get(message.message),
                    ...n
                  }))
                }
                material={true}
                className="single register-form__checkbox"
              />
            </div>
          </div>
        </div>

        {authFailureMessage && (
          <div className="register-form__error-section">
            <span className="form-field__error-message register-form__error-section__error-message">
              {authFailureMessage}
            </span>
          </div>
        )}

        <div className="form-field form-field--single form__buttons">
          <InputButton
            type="submit"
            value={translations.get("register_submit")}
            className="form__buttons__button form__buttons__button--register"
            loading={submitting}
            disabled={submitting}
          />
        </div>
        <div className="register-form__register-links">
          <span className="register-form__register-links__label">
            {translations.get("register_alreadyAccount")}
          </span>
          <Link
            to={getUrl("/login/")}
            title="Login"
            className="register-form__register-links__link"
          >
            {translations.get("register_signIn")}
          </Link>
        </div>
      </form>
    </section>
  );
};

export default reduxForm({
  form: "registerForm"
})(
  withTranslations(RegisterForm, [
    "register_signUp",
    "register_agree",
    "register_terms",
    "register_privacy",
    "register_alreadyAccount",
    "register_signIn",
    "register_submit",
    "register_firstName",
    "register_lastName",
    "register_email",
    "register_password",
    "register_confirmPassword",
    "register_agreeTaC_required",
    "register_firstName_required",
    "register_lastName_required",
    "register_email_required",
    "register_email_valid",
    "register_password_required",
    "register_confirmPassword_required",
    "register_confirmPassword_different"
  ])
);
