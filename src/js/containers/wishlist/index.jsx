import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchWishlistPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import Wishlist from "./wishlist";
import Nav from "../myAccount/nav";
import withTranslations from "../translations/withTranslations";

class WishlistPage extends React.PureComponent {
  render() {
    const { translations, match, history, location } = this.props;

    let returnUrl = location.state ? location.state.returnUrl : null;

    return (
      <section className="container-section">
        <div className="my-account__header">
          <h2 className="my-account__title">
            {translations.get("wishlist_title")}
          </h2>
        </div>
        <section className="my-account-section">
          <aside className="my-account-section__aside">
            <Nav url={match.url} />
          </aside>
          <div className="my-account-section__main">
            <Wishlist history={history} url={match.url} returnUrl={returnUrl} />
          </div>
        </section>
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchWishlistPage({
        url
      })
    );
  }
}

export default withPage(
  withTranslations(WishlistPage, ["wishlist_title"]),
  getPage,
  REDUCER_NAME
);
