import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchCheckoutPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import Checkout from "./checkout";
import withTranslations from "../translations/withTranslations";

class CheckoutPage extends React.PureComponent {
  render() {
    const { match, history, translations } = this.props;

    return (
      <Checkout
        history={history}
        url={match.url}
        title={translations.get("checkout_title")}
        twoColumnLayout={true}
      />
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchCheckoutPage({
        url
      })
    );
  }
}

export default withPage(
  withTranslations(CheckoutPage, ["checkout_title"]),
  getPage,
  REDUCER_NAME
);
