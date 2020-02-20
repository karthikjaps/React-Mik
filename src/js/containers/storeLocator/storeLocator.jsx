import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import StoreLocatorComponent from "../../components/storeLocator/storeLocator";
import { getStoreLocations } from "./actions";
import {
  selectDataTimestamp,
  selectIsLoading,
  selectStoreLocations
} from "./reducer";
import { DATA_TTL } from "./constants";
import { STORE_ID } from "../../../../service/catalogueConfig/constants";
import { selectConfigStore } from "../multiStore/reducer";

class StoreLocator extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onGetStoreLocations, dataTimestamp } = this.props;

    if (moment(dataTimestamp).add(DATA_TTL, "milliseconds") < moment()) {
      onGetStoreLocations({
        storeId: localStorage.getItem("STORE_ID") || STORE_ID
      });
    }
  }

  render() {
    const { isLoading, storeLocations, configStore } = this.props;

    const countryCode = configStore && configStore.get("countryCode");

    return (
      <StoreLocatorComponent
        locations={storeLocations}
        countryCode={countryCode}
      />
    );
  }

  static fetchData(store, {}, { storeId }) {
    return store.dispatch(getStoreLocations({ storeId }));
  }
}

const mapStateToProps = createStructuredSelector({
  dataTimestamp: selectDataTimestamp,
  isLoading: selectIsLoading,
  storeLocations: selectStoreLocations,
  configStore: selectConfigStore
});

const mapDispatchToProps = dispatch => ({
  onGetStoreLocations: data => dispatch(getStoreLocations(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreLocator);
