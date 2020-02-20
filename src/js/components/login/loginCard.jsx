import React from "react";
import { Link } from "react-router-dom";

import Card from "../card/card";
import LoginForm from "./loginForm";
import LoginOAuth from "./loginOAuth";
import GuestLoginForm from "./guestLoginForm";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const LoginCard = ({
  url,
  title,
  messages,
  authFailureMessage,
  handleSubmit,
  handleClose,
  handleGuestSubmit,
  handleSocialMediaSubmit,
  translations
}) => (
  <Card className="login-card">
    <div className="card__pre-header">
      <Link to={getUrl("/shop")} className="card__pre-header__link">
        {translations.get("login_back")}
      </Link>
    </div>
    <div className="login-card__header">
      <h2 className="login-card__title">{title}</h2>
      <div className="card-close">
        <span className="card-close__button" onClick={handleClose} />
      </div>
    </div>
    <div className="login-card__content login-card__content--top">
      <LoginOAuth
        messages={messages}
        authFailureMessage={authFailureMessage}
        handleSocialMediaSubmit={handleSocialMediaSubmit}
      />
      <div className="login-card__separator">
        <span className="login-card__separator__span">OR</span>
      </div>
    </div>
    <div className="login-card__content login-card__content--columns">
      <div className="login-card__content-section">
        <p className="login-card__content__subheading">
          {translations.get("login_guest")}
        </p>
        <GuestLoginForm
          action={getUrl(url)}
          method="post"
          messages={messages}
          onSubmit={handleGuestSubmit}
        />
      </div>
      <div className="login-card__content-section">
        <p className="login-card__content__subheading">
          {translations.get("login_signIn")}
        </p>
        <LoginForm
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

export default withTranslations(LoginCard, [
  "login_back",
  "login_guest",
  "login_signIn"
]);
