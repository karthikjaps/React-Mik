import React from "react";
import withTranslations from "../../containers/translations/withTranslations";

const OAUTH_PROVIDERS = [
  { name: "Facebook", url: "#", imageUrl: "/img/icons/facebook_register.svg" },
  { name: "Google", url: "#", imageUrl: "/img/icons/google_register.svg" }
];

const RegisterOAuth = ({ translations }) => (
  <div className="register-oauth">
    <div className="register-oauth__intro">
      {translations.get("register_social")}
    </div>
    <div className="register-oauth-icons">
      <ul className="register-oauth-icons__list">
        {OAUTH_PROVIDERS.map(n => (
          <li key={n.name} className="register-oauth-icons__list-item">
            <img
              src={n.imageUrl}
              title={n.name}
              alt={n.name}
              className="register-oauth-icons__list-item__img"
            />
            <span className="register-oauth-icons__list-item__text">
              {n.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default withTranslations(RegisterOAuth, ["register_social"]);
