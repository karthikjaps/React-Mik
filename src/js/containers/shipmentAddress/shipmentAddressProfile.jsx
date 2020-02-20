import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchShipmentAddress } from "./actions";
import { selectShipmentAddress } from "./reducer";
import ShipmentAddressesList from "../../components/shipment/shipmentAddressesList";
import { selectIsLoggedIn } from "../profile/reducer";

const RETURN_URL = "/";

class ShipmentAddressProfile extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      returnUrl: this.props.returnUrl || RETURN_URL
    };
  }

  componentDidMount() {
    const { onLoadShipmentAddress } = this.props;

    onLoadShipmentAddress(); // TODO: Optimize this
  }

  render() {
    const { shipmentAddresses, isLoggedIn } = this.props;

    return (
      <section className="page">
        <div className="page-content">
          <section className="container-section shipment-address-profile-section">
            <ShipmentAddressesList
              shipmentAddresses={shipmentAddresses}
              isLoggedIn={isLoggedIn}
            />
          </section>
        </div>
      </section>
    );
  }

  static fetchData(store) {
    return store.dispatch(fetchShipmentAddress());
  }
}

const mapStateToProps = createStructuredSelector({
  shipmentAddresses: selectShipmentAddress,
  isLoggedIn: selectIsLoggedIn
});

const mapDispatchToProps = dispatch => ({
  onLoadShipmentAddress: data => dispatch(fetchShipmentAddress(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentAddressProfile);
