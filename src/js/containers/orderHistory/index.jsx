import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchOrderHistoryPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import OrderHistory from "./orderHistory";
import Nav from "../myAccount/nav";
import withTranslations from "../translations/withTranslations";

class OrderHistoryPage extends React.PureComponent {
  render() {
    const { translations, match, history, location } = this.props;

    let returnUrl = location.state ? location.state.returnUrl : null;

    return (
      <section className="container-section">
        <div className="my-account__header">
          <h2 className="my-account__title">
            {translations.get("order_history_title")}
          </h2>
        </div>
        <section className="my-account-section">
          <aside className="my-account-section__aside">
            <Nav url={match.url} />
          </aside>
          <div className="my-account-section__main">
            <OrderHistory
              history={history}
              url={match.url}
              returnUrl={returnUrl}
            />
          </div>
        </section>
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchOrderHistoryPage({
        url
      })
    );
  }
}

export default withPage(
  withTranslations(OrderHistoryPage, ["order_history_title"]),
  getPage,
  REDUCER_NAME
);
