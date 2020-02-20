import React from "react";
import { withRouter } from "react-router-dom";
import { getParameterByName, removeQueryStringParam } from "../../util/util.js";
import withTranslations from "../translations/withTranslations";

import {
  SUCCESS_QUERY_STRING_PARAM,
  PREVACTION_QUERY_STRING_PARAM
} from "./constants";
import { getUrl } from "../../../../server/helpers/routing.js";

const TTL = 10000;

class Toast extends React.PureComponent {
  componentDidMount() {
    toggleSnackbar(this.element);
  }

  componentDidUpdate() {
    toggleSnackbar(this.element);
  }

  render() {
    const { history, translations } = this.props;
    // retrieve status from the URL query string
    let isSuccess = "";
    let prevAction = "";

    if (history.location.search) {
      isSuccess = getParameterByName(
        SUCCESS_QUERY_STRING_PARAM,
        history.location.search
      );
      prevAction = getParameterByName(
        PREVACTION_QUERY_STRING_PARAM,
        history.location.search
      );
    }

    let message = "";
    if (isSuccess === "true") {
      switch (prevAction) {
        case "add":
          message = translations.get("toast_cartAdd");
          break;
        default:
          break;
      }
    }

    if (typeof window !== "undefined") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname +
          removeQueryStringParam(
            window.location.search,
            SUCCESS_QUERY_STRING_PARAM
          )
      );
    }

    message = message || "The application encountered an error.";
    return prevAction ? (
      <div
        ref={n => {
          this.element = n;
        }}
        className={
          "cart-toast cart-toast--dismissed " +
          (isSuccess === "true" ? "cart-toast--success" : "cart-toast--error")
        }
      >
        <p className="cart-toast__text">{message}</p>
        <button
          className="cart-toast__button"
          onClick={e => {
            this.element.classList.add("cart-toast--dismissed");
            history.push({
              pathname: getUrl("/cart"),
              state: { returnUrl: history.location.pathname }
            });
          }}
        >
          {translations.size > 0 ? translations.get("cart_toast_label") : ""}
        </button>
      </div>
    ) : null;
  }
}

const toggleSnackbar = element => {
  if (element) {
    element.classList.remove("cart-toast--dismissed");
    setTimeout(() => {
      element.classList.add("cart-toast--dismissed");
    }, TTL);
  }
};

export default withRouter(
  withTranslations(Toast, ["cart_toast_label", "toast_cartAdd"])
);
