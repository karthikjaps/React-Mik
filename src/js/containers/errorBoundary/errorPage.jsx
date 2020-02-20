import React from "react";
import withTranslations from "../translations/withTranslations";

const ErrorPage = ({ translations }) => (
  <section className="error-page">
    <div className="error-page__content">
      <div className="error-page__logo">
        <img
          className="error-page__img"
          src="/img/broken_icon.svg"
          title="Mikyaji"
          alt="Mikyaji"
        />
      </div>
      <div className="error-page__title">
        <h1>{translations.get("errorPage_title")}</h1>
      </div>
      <div className="error-page__message">
        <p>{translations.get("errorPage_message")}</p>
        <p />
        <p>{translations.get("errorPage_webSiteName")}</p>
      </div>
    </div>
  </section>
);

export default withTranslations(ErrorPage, [
  "errorPage_title",
  "errorPage_message",
  "errorPage_webSiteName"
]);
