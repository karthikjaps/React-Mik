import React from "react";
import { Link } from "react-router-dom";

import Card from "../card/card";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const EmailSentCard = ({ title, handleClose, translations }) => (
  <Card className="email-sent-card">
    <div className="email-sent-card__header">
      <h2 className="email-sent-card__title">{title}</h2>
      <div className="card-close">
        <span className="card-close__button" onClick={handleClose} />
      </div>
    </div>
    <div className="forgot-password-card__content forgot-password-card__content--columns">
      <div className="forgot-password-card__content-section">
        <div className="forgot-password-form__title">
          {translations.get("resetPassword_request")}
        </div>
        <div className="forgot-password-form__info">
          {translations.get("resetPassword_thanks")}
        </div>
        <div className="form-field form-field--single form__buttons form__buttons--center">
          <Link
            to={getUrl("/login")}
            title="Login"
            className="form__buttons__button button form__buttons__button--email-sent"
          >
            {translations.get("resetPassword_loginAgain")}
          </Link>
        </div>
        <div className="forgot-password-form__forgot-password-links">
          <Link
            to={getUrl("/")}
            title="Home"
            className="forgot-password-form__forgot-password-links__link"
          >
            {translations.get("resetPassword_back")}
          </Link>
        </div>
      </div>
    </div>
  </Card>
);

export default withTranslations(EmailSentCard, [
  "resetPassword_request",
  "resetPassword_request",
  "resetPassword_thanks",
  "resetPassword_loginAgain",
  "resetPassword_back"
]);
