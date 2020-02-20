import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import OrderHistoryItem from "../../components/orderHistory/orderHistoryItem";
import OrderHistoryEmpty from "../../components/orderHistory/orderHistoryEmpty";
import { selectIsLoggedIn } from "../profile/reducer";
import { DATA_TTL, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "./constants";
import { getOrderHistory } from "./actions";
import {
  selectIsLoading,
  selectDataTimestamp,
  selectOrderHistory
} from "./reducer";
import { selectCurrencyCode } from "../catalogueSort/reducer";

class OrderHistory extends React.PureComponent {
  componentDidMount() {
    const {
      onLoadOrderHistory,
      orderHistory,
      isLoggedIn,
      dataTimestamp
    } = this.props;

    if (isLoggedIn) {
      if (
        !(orderHistory && orderHistory.size) ||
        moment(dataTimestamp).add(DATA_TTL, "milliseconds") < moment()
      )
        onLoadOrderHistory({ page: DEFAULT_PAGE, pageSize: DEFAULT_PAGE_SIZE });
    }
  }

  componentDidUpdate(prevProps) {
    const { isLoggedIn, orderHistory, onLoadOrderHistory } = this.props;
    if (
      prevProps.orderHistory.size !== orderHistory.size ||
      prevProps.isLoggedIn !== isLoggedIn
    ) {
      if (!(orderHistory && orderHistory.size) && isLoggedIn) {
        onLoadOrderHistory({ page: DEFAULT_PAGE, pageSize: DEFAULT_PAGE_SIZE });
      }
    }
  }

  render() {
    const { isLoading, orderHistory, currencyCode } = this.props;

    return (
      <div className="order-history">
        {isLoading ? (
          <div className="order-history__loading" />
        ) : (
          <div className="order-history__content">
            {!orderHistory.size && <OrderHistoryEmpty />}
            <div className="order-history__content__list">
              {orderHistory.size > 0 &&
                orderHistory.map(
                  (item, index) =>
                    item.get("isCancel") && (
                      <div
                        className="order-history__content__list__item"
                        key={index}
                      >
                        <OrderHistoryItem
                          data={item}
                          currencyCode={currencyCode}
                        />
                      </div>
                    )
                )}
            </div>
          </div>
        )}
      </div>
    );
  }

  static fetchData(store) {
    return store.dispatch(
      getOrderHistory({ page: DEFAULT_PAGE, pageSize: DEFAULT_PAGE_SIZE })
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  dataTimestamp: selectDataTimestamp,
  isLoggedIn: selectIsLoggedIn,
  orderHistory: selectOrderHistory,
  currencyCode: selectCurrencyCode
});

const mapDispatchToProps = dispatch => ({
  onLoadOrderHistory: data => dispatch(getOrderHistory(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistory);
