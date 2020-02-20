import React from "react";
import withTranslations from "../../containers/translations/withTranslations";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

const OAUTH_PROVIDERS_FACEBOOK = {
  name: "Facebook",
  url: "#",
  imageUrl: "/img/icons/facebook_login.svg",
  id: "449523682278622"
};

const OAUTH_PROVIDERS_GOOGLE = {
  name: "Google",
  url: "#",
  imageUrl: "/img/icons/google_login.svg",
  id: "917817648750-flet5e2bo1nk73npmld37dm2qv5i56ph.apps.googleusercontent.com"
};

class LoginOAuth extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { translations, handleSocialMediaSubmit } = this.props;

    return (
      <div className="login-oauth">
        <div className="login-oauth__intro">
          {translations.get("login_signInSocial")}
        </div>
        <div className="login-oauth-icons">
          <ul className="login-oauth-icons__list">
            <li
              key={OAUTH_PROVIDERS_FACEBOOK.name}
              className="login-oauth-icons__list-item"
            >
              <FacebookLogin
                appId={OAUTH_PROVIDERS_FACEBOOK.id}
                fields="name,email,first_name,last_name"
                callback={handleSocialMediaSubmit}
                render={renderProps => (
                  <img
                    src={OAUTH_PROVIDERS_FACEBOOK.imageUrl}
                    title={OAUTH_PROVIDERS_FACEBOOK.name}
                    alt={OAUTH_PROVIDERS_FACEBOOK.name}
                    className="login-oauth-icons__list-item__img"
                    onClick={renderProps.onClick}
                  />
                )}
              />
            </li>
            <li
              key={OAUTH_PROVIDERS_GOOGLE.name}
              className="login-oauth-icons__list-item"
            >
              <GoogleLogin
                clientId={OAUTH_PROVIDERS_GOOGLE.id}
                render={renderProps => (
                  <img
                    src={OAUTH_PROVIDERS_GOOGLE.imageUrl}
                    title={OAUTH_PROVIDERS_GOOGLE.name}
                    alt={OAUTH_PROVIDERS_GOOGLE.name}
                    className="login-oauth-icons__list-item__img"
                    onClick={renderProps.onClick}
                  />
                )}
                onSuccess={handleSocialMediaSubmit}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default withTranslations(LoginOAuth, ["login_signInSocial"]);
