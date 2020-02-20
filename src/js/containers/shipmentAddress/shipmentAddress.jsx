import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { fetchShipmentAddress, submitShipmentAddress } from "./actions";
import { selectShipmentAddress, selectIsLoading } from "./reducer";
import { trackCheckoutStep2 } from "./analytics";
import { selectCart } from "../cart/reducer";
import { selectIsLoggedIn } from "../profile/reducer";
import ShipmentAddressesRadioList from "../../components/shipment/shipmentAddressesRadioList";
import AddressFormContainer from "./addressFormContainer";
import withTranslations from "../translations/withTranslations";
import ShipmentAddressSkeleton from "../../components/shipment/shipmentAddressSkeleton";
import { getUrl } from "../../../../server/helpers/routing";

class ShipmentAddress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleAddressListSubmit = this.handleAddressListSubmit.bind(this);
    this.handleAddressFormSubmit = this.handleAddressFormSubmit.bind(this);
  }

  handleAddressListSubmit(e) {
    const { shipmentAddresses, onSubmitAddress, cart } = this.props;

    const shipmentAddress = shipmentAddresses.find(
      n => n.get("addressId") === e.get("shipmentAddress")
    );
    const shipmentAddressData = shipmentAddress && {
      email: shipmentAddress.get("email"),
      billingAddress: shipmentAddress.toJS(),
      shippingAddress: shipmentAddress.toJS()
    };

    if (shipmentAddressData) {
      return onSubmitAddress(shipmentAddressData)
        .then(response => {
          const items = cart.toJS();
          const products = items.map(n => ({
            ...n.item,
            quantity: n.quantity
          }));
          trackCheckoutStep2(products);

          this.props.history.push({
            pathname: getUrl("/checkout/payment")
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  handleAddressFormSubmit(e) {
    const { onSubmitAddress } = this.props;
    const shipmentAddressData = {
      email: e.get("email"),
      billingAddress: e.toJS(),
      shippingAddress: e.toJS()
    };

    if (shipmentAddressData) {
      return onSubmitAddress(shipmentAddressData)
        .then(response => {
          this.props.history.push({
            pathname: getUrl("/checkout/payment")
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  componentDidMount() {
    const { onLoadShipmentAddress } = this.props;

    onLoadShipmentAddress();
  }

  render() {
    const {
      shipmentAddresses,
      history,
      match,
      returnUrl,
      translations,
      isLoading,
      isLoggedIn
    } = this.props;

    const hasShipmentAddress = !!shipmentAddresses.size;
    const defaultAddress = shipmentAddresses.find(
      n => n.get("isDefaultShipping") === true
    );

    return (
      <section className="container-section shipment-address-section">
        <div className="card__pre-header">
          <Link to={getUrl("/shop")} className="card__pre-header__link">
            {translations.get("shipmentAddress_backToShopping")}
          </Link>
        </div>
        <div className="shipment-address-form__title">
          {translations.get("shipmentAddress_address")}
        </div>
        {isLoading ? (
          <ShipmentAddressSkeleton />
        ) : (
          <>
            {hasShipmentAddress && (
              <ShipmentAddressesRadioList
                initialValues={{
                  shipmentAddress: defaultAddress
                    ? defaultAddress.get("addressId")
                    : shipmentAddresses.first().get("addressId")
                }}
                method="post"
                onSubmit={this.handleAddressListSubmit}
                shipmentAddresses={shipmentAddresses}
                isLoggedIn={isLoggedIn}
              />
            )}
            {!hasShipmentAddress && (
              <AddressFormContainer
                match={match}
                history={history}
                returnUrl={returnUrl}
              />
            )}
          </>
        )}
      </section>
    );
  }

  static fetchData(store) {
    return store.dispatch(fetchShipmentAddress());
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  shipmentAddresses: selectShipmentAddress,
  cart: selectCart,
  isLoggedIn: selectIsLoggedIn
});

const mapDispatchToProps = dispatch => ({
  onLoadShipmentAddress: data => dispatch(fetchShipmentAddress(data)),
  onSubmitAddress: data => dispatch(submitShipmentAddress(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withTranslations(ShipmentAddress, [
    "shipmentAddress_backToShopping",
    "shipmentAddress_address"
  ])
);
