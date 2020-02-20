import React from "react";
import { Field, reduxForm } from "redux-form/immutable";

import TextBox from "../form/textBox";
import InputButton from "../buttons/inputButton";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const NewsletterForm = ({
  action,
  method,
  handleSubmit,
  messages,
  apiErrorMessage,
  translations
}) => (
  <form
    onSubmit={handleSubmit}
    action={getUrl(action)}
    method={method}
    className="form form--newsletter"
  >
    <Field
      name="email"
      component={TextBox}
      type="text"
      className="newsletter"
      placeholder={translations.get("newsletter_placeholder")}
    />
    <InputButton
      type="submit"
      value={translations.get("newsletter_submit")}
      className="button--newsletter"
    />
    <div className="form--newsletter__error-messages">
      {messages.email &&
        messages.email.map((message, index) => (
          <span key={index} className="form--newsletter__error-message__text">
            {translations.get(message.message)}
          </span>
        ))}
      {apiErrorMessage && (
        <span className="form--newsletter__error-message__text">
          {apiErrorMessage}
        </span>
      )}
    </div>
  </form>
);

export default reduxForm({
  form: "newsletterForm"
})(
  withTranslations(NewsletterForm, [
    "newsletter_submit",
    "newsletter_placeholder",
    "loginForm_email_required",
    "loginForm_email_valid"
  ])
);
