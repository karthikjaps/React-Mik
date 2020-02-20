import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchShipmentAddressPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import ShipmentAddressProfile from "./shipmentAddressProfile";
import Nav from "../myAccount/nav";
import withTranslations from "../translations/withTranslations";

class ShipmentAddressPage extends React.PureComponent {
  render() {
    const { translations, match, history, location } = this.props;

    let returnUrl = location.state ? location.state.returnUrl : null;

    return (
      <section className="container-section">
        <div className="my-account__header">
          <h2 className="my-account__title">
            {translations.get("shipmentAddress_title")}
          </h2>
        </div>
        <section className="my-account-section">
          <aside className="my-account-section__aside">
            {/* <Nav url={match.url} /> */}
          </aside>
          <div className="my-account-section__main">
            <ShipmentAddressProfile
              history={history}
              url={match.url}
              title={translations.get("shipmentAddress_title")}
              returnUrl={returnUrl}
            />
          </div>
        </section>
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchShipmentAddressPage({
        url
      })
    );
  }
}

export default withPage(
  withTranslations(ShipmentAddressPage, ["shipmentAddress_title"]),
  getPage,
  REDUCER_NAME
);
