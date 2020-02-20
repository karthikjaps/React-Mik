import React from "react";

import { REDUCER_NAME } from "./constants";
import { fetchPaymentPage } from "./actions";
import withPage from "../page/withPage";
import { getPage } from "../page/actions";
import Payment from "./payment";
import Checkout from "../checkout/checkout";

class PaymentPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      paymentMethod: 1
    };
  }

  render() {
    const { match, history } = this.props;
    return (
      <section className="page">
        <div className="page-content">
          <section className="container-section payment-section">
            <div className="payment-section-column payment-section-column--right">
              <Payment url={match.url} history={history} />
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
      fetchPaymentPage({
        url
      })
    );
  }
}

export default withPage(PaymentPage, getPage, REDUCER_NAME);
