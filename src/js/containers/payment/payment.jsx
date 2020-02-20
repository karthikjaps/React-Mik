import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PaymentForm from "../../components/payment/paymentForm";
import {
  placeOrder,
  submitPayFort,
  purchasePayFort,
  setPaymentDetails,
  savePaymentMethod,
  getPayfortDetails
} from "./actions";
import { selectProfile } from "../profile/reducer";
import {
  selectSelectedAddressId,
  selectShipmentAddress
} from "../shipmentAddress/reducer";
import {
  selectMessages,
  selectIsLoading,
  selectPaymentMethods,
  selectPayfortDetails
} from "./reducer";
import {
  PAYMENT_FAILED_PAGE,
  PAYMENT_SUCCESS_PAGE,
  DELIVERY_PAGE,
  SHOP_PAGE
} from "./constants";
import { trackPurchase } from "./analytics";
import { selectCurrencyIndex } from "../catalogueSort/reducer";
import { selectGrandTotalValue, selectCart } from "../cart/reducer";
import { GUEST_PROFILE_STORAGE_KEY } from "../../../../service/constants";
import { getUrl } from "../../../../server/helpers/routing";

class Payment extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      guestEmail: null,
      savingPayment: false
    };

    this.handleSavePaymentMethod = this.handleSavePaymentMethod.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSavePaymentMethod(e) {
    const {
      onSavePaymentMethod,
      onGetPayfortDetails,
      profile,
      currencyIndex
    } = this.props;

    this.setState({ savingPayment: true });

    const guestEmail = JSON.parse(
      localStorage.getItem(GUEST_PROFILE_STORAGE_KEY)
    );

    onSavePaymentMethod(e).then(response => {
      onGetPayfortDetails({
        amount: response && response.grandTotalValue,
        currency: currencyIndex,
        language: localStorage.getItem("LANG").toLowerCase(),
        email:
          profile && profile.get("email") ? profile.get("email") : guestEmail,
        host: window.location.origin
      }).then(() => this.setState({ savingPayment: false }));
    });
  }

  // TODO: this should be refactored into modular methods
  async handleSubmit(e) {
    const items = this.props.cart.toJS();
    const products = items.map(n => ({ ...n.item, quantity: n.quantity }));

    let data = null;
    if (e.toJS) {
      data = e.toJS();
    } else {
      data = e;
    }

    return this.props
      .onPlaceOrder({
        items,
        ...data
      })
      .then(placeOrderResponse => {
        this.props.onSetPaymentDetails(placeOrderResponse);
        trackPurchase({ ...data, products });

        this.props.history.push({
          pathname: getUrl(PAYMENT_SUCCESS_PAGE)
        });
      })
      .catch(error => {
        console.error(error);
        this.props.history.push({
          pathname: getUrl(PAYMENT_FAILED_PAGE)
        });
      });
  }

  componentDidMount() {
    const { history, cart, paymentMethods, selectedAddressId } = this.props;

    if (!selectedAddressId) {
      // this prevents breaking when payment page is reloaded
      // (payment page is dependent on delivery page data)
      history.push(getUrl(DELIVERY_PAGE));
    } else if (!paymentMethods || cart.size === 0) {
      history.push(getUrl(SHOP_PAGE));
    }

    const guestEmail = JSON.parse(
      localStorage.getItem(GUEST_PROFILE_STORAGE_KEY)
    );

    this.setState({ guestEmail });
  }

  render() {
    const {
      selectedAddressId,
      shipmentAddresses,
      messages,
      profile,
      grandTotalValue,
      paymentMethods,
      onSavePaymentMethod,
      payfort,
      currencyIndex
    } = this.props;
    const selectedAddress =
      shipmentAddresses &&
      shipmentAddresses.find(n => n.get("addressId") === selectedAddressId);

    return (
      <section className="page">
        <div className="page-content">
          <section className="container-section payment-section">
            <PaymentForm
              options={paymentMethods}
              onSubmit={this.handleSubmit}
              messages={messages}
              onSavePaymentMethod={this.handleSavePaymentMethod}
              savingPayment={this.state.savingPayment}
              payfort={payfort}
              initialValues={{
                paymentMethod:
                  paymentMethods && paymentMethods.size > 0
                    ? paymentMethods.first().get("paymentMethod")
                    : "",
                agreeTaC: false,
                agreeOffers: false,
                email:
                  profile && profile.get("email")
                    ? profile.get("email")
                    : this.state.guestEmail,
                amount: grandTotalValue
              }}
              selectedAddress={selectedAddress}
              currencyIndex={currencyIndex}
            />
          </section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return createStructuredSelector({
    isLoading: selectIsLoading,
    profile: selectProfile,
    selectedAddressId: selectSelectedAddressId,
    shipmentAddresses: selectShipmentAddress,
    messages: selectMessages,
    grandTotalValue: selectGrandTotalValue,
    paymentMethods: selectPaymentMethods,
    cart: selectCart,
    payfort: selectPayfortDetails,
    currencyIndex: selectCurrencyIndex
  });
};

const mapDispatchToProps = dispatch => ({
  onPlaceOrder: data => dispatch(placeOrder(data)),
  onSavePaymentMethod: data => dispatch(savePaymentMethod(data)),
  onSubmitPayFort: data => dispatch(submitPayFort(data)),
  onPurchasePayFort: data => dispatch(purchasePayFort(data)),
  onSetPaymentDetails: data => dispatch(setPaymentDetails(data)),
  onGetPayfortDetails: data => dispatch(getPayfortDetails(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);
