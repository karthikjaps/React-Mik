import React from "react";
import { Link } from "react-router-dom";

import Card from "../card/card";
import RegisterForm from "./registerForm";
import RegisterOAuth from "./registerOAuth";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const RegisterCard = ({
  url,
  title,
  messages,
  authFailureMessage,
  handleSubmit,
  handleClose,
  translations
}) => (
  <Card className="register-card">
    <div className="card__pre-header">
      <Link to={getUrl("/shop")} className="card__pre-header__link">
        {translations.get("register_back")}
      </Link>
    </div>
    <div className="register-card__header">
      <h2 className="register-card__title">{title}</h2>
      <div className="card-close">
        <span className="card-close__button" onClick={handleClose} />
      </div>
    </div>
    <div className="register-card__content register-card__content--top">
      <RegisterOAuth />
      <div className="register-card__separator">
        <span className="register-card__separator__span">
          {translations.get("register_or")}
        </span>
      </div>
    </div>
    <div className="register-card__content register-card__content--columns">
      <div className="register-card__content-section">
        <RegisterForm
          action={getUrl(url)}
          method="post"
          messages={messages}
          authFailureMessage={authFailureMessage}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  </Card>
);

export default withTranslations(RegisterCard, ["register_back", "register_or"]);
