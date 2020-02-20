import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import {
  submitCart,
  submitVoucher,
  removeVoucher,
  removeProductFromCart,
  updateProductQuantity,
  clearCart
} from "./actions";
import {
  selectIsLoading,
  selectItems,
  selectTotals,
  selectCart,
  selectVoucherValues,
  selectDataTimestamp,
  selectCartTimestamp,
  selectOutOfStock
} from "./reducer";
import { selectCurrencyCode } from "../catalogueSort/reducer";
import CartSection from "../../components/cart/cartSection";
import { selectIsLoggedIn } from "../profile/reducer";

class Cart extends React.PureComponent {
  componentDidMount() {
    const { items, dataTimestamp, cartTimestamp } = this.props;

    if (items.size && moment(dataTimestamp) >= moment(cartTimestamp)) {
      this.props.onSubmitCart(this.props.items.toJS()).catch(error => {
        // TODO: gracefully handle API error on add_to_cart_bulk
        this.props.onClearCart();
        this.props.onSubmitCart([]);
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.items &&
      this.props.items.size &&
      prevProps.items !== this.props.items &&
      moment(this.props.dataTimestamp) >= moment(this.props.cartTimestamp)
    ) {
      this.props.onSubmitCart(this.props.items.toJS()).catch(error => {
        // TODO: gracefully handle API error on add_to_cart_bulk
        this.props.onClearCart();
        this.props.onSubmitCart([]);
      });
    }
  }

  render() {
    const {
      title,
      isLoading,
      isLoggedIn,
      cart,
      outOfStock,
      totals,
      history,
      voucherValues,
      onRemoveProductFromCart,
      onUpdateProductQuantity,
      currencyCode,
      onSubmitVoucher,
      onRemoveVoucher
    } = this.props;

    return (
      <CartSection
        title={title}
        items={cart}
        outOfStock={outOfStock}
        totals={totals}
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
        handleClose={e => {
          if (history.location.state && history.location.state.returnUrl) {
            history.push(history.location.state.returnUrl);
          } else {
            history.goBack();
          }
        }}
        voucherUpdate={onSubmitVoucher}
        voucherValues={voucherValues}
        onRemoveProductFromCart={onRemoveProductFromCart}
        onUpdateProductQuantity={onUpdateProductQuantity}
        voucherRemove={onRemoveVoucher}
        currencyCode={currencyCode}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  items: selectItems,
  cart: selectCart,
  outOfStock: selectOutOfStock,
  totals: selectTotals,
  isLoggedIn: selectIsLoggedIn,
  voucherValues: selectVoucherValues,
  dataTimestamp: selectDataTimestamp,
  cartTimestamp: selectCartTimestamp,
  currencyCode: selectCurrencyCode
});

const mapDispatchToProps = dispatch => ({
  onClearCart: data => dispatch(clearCart(data)),
  onSubmitCart: data => dispatch(submitCart(data)),
  onSubmitVoucher: data => dispatch(submitVoucher(data)),
  onRemoveVoucher: data => dispatch(removeVoucher(data)),
  onRemoveProductFromCart: data => dispatch(removeProductFromCart(data)),
  onUpdateProductQuantity: data => dispatch(updateProductQuantity(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
