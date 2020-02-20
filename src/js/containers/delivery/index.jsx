import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchDeliveryPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import ShipmentAddress from "../shipmentAddress/shipmentAddress";
import Checkout from "../checkout/checkout";

const RETURN_URL = "/checkout/delivery/";

class DeliveryPage extends React.PureComponent {
  render() {
    const { match, history } = this.props;
    return (
      <section className="page">
        <div className="page-content">
          <section className="container-section payment-section">
            <div className="payment-section-column payment-section-column--right">
              <ShipmentAddress
                match={match}
                history={history}
                returnUrl={RETURN_URL}
              />
            </div>
            <div className="payment-section-column payment-section-column--left">
              <Checkout history={history} url={match.url} isReadOnly={true} />
            </div>
          </section>
        </div>
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(
      fetchDeliveryPage({
        url
      })
    );
  }
}

export default withPage(DeliveryPage, getPage, REDUCER_NAME);
