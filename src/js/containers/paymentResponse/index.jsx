import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  REDUCER_NAME,
  EMAIL_QUERY_STRING_PARAM,
  PAYMENT_METHOD_QUERY_STRING_PARAM
} from "./constants";
import withPage from "../page/withPage";
import { getPage, fetchPage } from "../page/actions";
import { createStructuredSelector } from "reselect";
import { selectDetails } from "../payment/reducer";
import { trackPurchase } from "../payment/analytics";
import { clearCart } from "../cart/actions";
import { selectItems } from "../cart/reducer";
import withTranslations from "../translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";
import { placeOrder, setPaymentDetails } from "../payment/actions";

class PaymentResponsePage extends React.PureComponent {
  componentDidMount() {
    let searchParams = new URLSearchParams(this.props.location.search);
    const email = searchParams.get(EMAIL_QUERY_STRING_PARAM);
    const paymentMethod = searchParams.get(PAYMENT_METHOD_QUERY_STRING_PARAM);

    if (email && paymentMethod) {
      return this.props
        .onPlaceOrder({
          email,
          paymentMethod
        })
        .then(placeOrderResponse => {
          this.props.onSetPaymentDetails(placeOrderResponse);
          // TODO: Track also products names
          trackPurchase({
            products: this.props.items.toJS(),
            paymentMethod,
            amount: placeOrderResponse.total
          });
          this.props.onClearCart();
        })
        .catch(error => {
          this.props.onClearCart();
          console.error(error);
        });
    } else {
      this.props.onClearCart();
    }
  }

  render() {
    const { details, page, translations } = this.props;

    const template = page.get("template").toLowerCase();

    return (
      <section
        className={`container-section page-section page-section--${template}`}
      >
        <section className={`page-content page-content--${template}`}>
          <h1
            key="page-content__title"
            className={`page-content__title page-content__title--${template}`}
          >
            {template === "paymentsuccess"
              ? translations.get("paymentResponse_successTitle")
              : translations.get("paymentResponse_failedTitle")}
          </h1>
          <div
            key="page-content__richtext"
            className={`page-content__richtext page-content__richtext--${template}`}
            dangerouslySetInnerHTML={
              template === "paymentsuccess"
                ? {
                    __html: translations.get("paymentResponse_successSummary")
                  }
                : {
                    __html: translations.get("paymentResponse_failedSummary")
                  }
            }
          />
          {template === "paymentsuccess" && details ? (
            <>
              <div className="payment-response-details">
                <ul className="payment-response-details__list">
                  <li className="payment-response-details__list-item">
                    <span className="payment-response-details__list-item__title">
                      {translations.get("paymentResponse_orderNumber")}
                    </span>
                    <span className="payment-response-details__list-item__value">
                      {details.get("orderNumber")}
                    </span>
                  </li>
                  <li className="payment-response-details__list-item">
                    <span className="payment-response-details__list-item__title">
                      {translations.get("paymentResponse_orderDate")}
                    </span>
                    <span className="payment-response-details__list-item__value">
                      {details.get("orderDate")}
                    </span>
                  </li>
                  <li className="payment-response-details__list-item">
                    <span className="payment-response-details__list-item__title">
                      {translations.get("paymentResponse_total")}
                    </span>
                    <span className="payment-response-details__list-item__value">
                      {details.get("total")}
                    </span>
                  </li>
                  <li className="payment-response-details__list-item">
                    <span className="payment-response-details__list-item__title">
                      {translations.get("paymentResponse_paymentMethod")}
                    </span>
                    <span
                      className="payment-response-details__list-item__value"
                      dangerouslySetInnerHTML={{
                        __html: details.get("paymentMethod")
                      }}
                    />
                  </li>
                </ul>
              </div>
              <div className="payment-response-buttons">
                <Link
                  to={getUrl("/shop")}
                  className="button payment-response-buttons__button"
                >
                  {translations.get("paymentResponse_continueShopping")}
                </Link>
              </div>
            </>
          ) : (
            <div className="payment-response-buttons">
              <Link
                to={getUrl("/shop")}
                className="button payment-response-buttons__button"
              >
                {translations.get("paymentResponse_finish")}
              </Link>
            </div>
          )}
        </section>
      </section>
    );
  }

  static fetchData(store, { url }) {
    return store.dispatch(fetchPage({ url }, REDUCER_NAME));
  }
}

const mapStateToProps = createStructuredSelector({
  details: selectDetails,
  items: selectItems
});

const mapDispatchToProps = dispatch => ({
  onPlaceOrder: data => dispatch(placeOrder(data)),
  onClearCart: data => dispatch(clearCart(data)),
  onSetPaymentDetails: data => dispatch(setPaymentDetails(data))
});

export default withPage(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    withTranslations(PaymentResponsePage, [
      "paymentResponse_orderNumber",
      "paymentResponse_orderDate",
      "paymentResponse_total",
      "paymentResponse_paymentMethod",
      "paymentResponse_continueShopping",
      "paymentResponse_finish",
      "paymentResponse_successTitle",
      "paymentResponse_successSummary",
      "paymentResponse_failedTitle",
      "paymentResponse_failedSummary"
    ])
  ),
  getPage,
  REDUCER_NAME
);
