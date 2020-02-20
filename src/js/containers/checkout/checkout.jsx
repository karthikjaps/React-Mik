import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import {
  selectIsLoading,
  selectCart,
  selectTotals,
  selectItems,
  selectVoucherValues,
  selectCartTimestamp,
  selectDataTimestamp
} from "../cart/reducer";
import { selectCurrencyCode } from "../catalogueSort/reducer";
import CheckoutSection from "../../components/checkout/checkoutSection";
import { selectIsLoggedIn } from "../profile/reducer";
import {
  submitCart,
  submitVoucher,
  removeVoucher,
  removeProductFromCart,
  updateProductQuantity
} from "../cart/actions";

class Checkout extends React.PureComponent {
  componentDidMount() {
    const { items, dataTimestamp, cartTimestamp } = this.props;

    if (items.size && moment(dataTimestamp) >= moment(cartTimestamp)) {
      this.props.onSubmitCart(this.props.items.toJS());
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.items.size &&
      prevProps.items !== this.props.items &&
      moment(this.props.dataTimestamp) >= moment(this.props.cartTimestamp)
    ) {
      this.props.onSubmitCart(this.props.items.toJS());
    }
  }

  render() {
    const {
      title,
      isLoading,
      isLoggedIn,
      cart,
      totals,
      history,
      isReadOnly,
      twoColumnLayout,
      voucherValues,
      onRemoveProductFromCart,
      onUpdateProductQuantity,
      onSubmitVoucher,
      onRemoveVoucher,
      currencyCode
    } = this.props;

    return (
      <CheckoutSection
        title={title}
        items={cart}
        totals={totals}
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
        handleClose={history.goBack}
        isReadOnly={isReadOnly}
        twoColumnLayout={twoColumnLayout}
        voucherUpdate={onSubmitVoucher}
        voucherValues={voucherValues}
        voucherRemove={onRemoveVoucher}
        onRemoveProductFromCart={onRemoveProductFromCart}
        onUpdateProductQuantity={onUpdateProductQuantity}
        currencyCode={currencyCode}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  items: selectItems,
  cart: selectCart,
  totals: selectTotals,
  isLoggedIn: selectIsLoggedIn,
  voucherValues: selectVoucherValues,
  dataTimestamp: selectDataTimestamp,
  cartTimestamp: selectCartTimestamp,
  currencyCode: selectCurrencyCode
});

const mapDispatchToProps = dispatch => ({
  onSubmitCart: data => dispatch(submitCart(data)),
  onSubmitVoucher: data => dispatch(submitVoucher(data)),
  onRemoveVoucher: data => dispatch(removeVoucher(data)),
  onRemoveProductFromCart: data => dispatch(removeProductFromCart(data)),
  onUpdateProductQuantity: data => dispatch(updateProductQuantity(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
