import { fromJS } from "immutable";
import { createSelector, createStructuredSelector } from "reselect";
import moment from "moment";

import {
  REDUCER_NAME,
  SET_LOADING,
  SET_ITEMS,
  SET_CART,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCT,
  RESET_ITEMS,
  RESET_CART,
  ADD_VOUCHER,
  SET_CART_TOTALS,
  REMOVE_VOUCHER,
  SET_INVALID_VOUCHER
} from "./constants";
import reducerRegistry from "../../util/reducerRegistry";

const initialState = fromJS({
  isLoading: true,
  dataTimestamp: moment(0),
  items: [],
  cartTimestamp: moment(0),
  cart: [],
  outOfStock: [],
  subTotal: "",
  subTotalAfterDiscount: "",
  taxFromSubTotal: "",
  grandTotal: "",
  shippingTotal: "",
  shippingTotalValue: 0,
  discount: "",
  discountValue: 0,
  grandTotalValue: 0,
  voucher: null,
  promotionCode: null,
  rmsPromotionCode: null
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("isLoading", action.data);
    case SET_ITEMS:
      return state
        .set("items", fromJS(action.data.items))
        .set("dataTimestamp", moment());
    case SET_CART:
      return state
        .set(
          "items",
          fromJS(
            action.data.items.map(n => ({
              quantity: n.quantity,
              productId: n.item.id,
              selectedOptions: n.selectedOptions
            }))
          )
        )
        .set("cart", fromJS(action.data.items))
        .set("outOfStock", fromJS(action.data.outOfStock))
        .set("cartTimestamp", moment())
        .set("promotionCode", fromJS(action.data.promotionCode))
        .set("rmsPromotionCode", fromJS(action.data.rmsPromotionCode));
    case SET_CART_TOTALS:
      return state
        .set("subTotal", fromJS(action.data.subTotal))
        .set("subTotalAfterDiscount", fromJS(action.data.subTotalAfterDiscount))
        .set("taxFromSubTotal", fromJS(action.data.taxFromSubTotal))
        .set("grandTotal", fromJS(action.data.grandTotal))
        .set("shippingTotal", fromJS(action.data.shippingTotal))
        .set("shippingTotalValue", fromJS(action.data.shippingTotalValue))
        .set("paymentMethodFee", fromJS(action.data.paymentMethodFee))
        .set("paymentMethodFeeValue", fromJS(action.data.paymentMethodFeeValue))
        .set("discount", fromJS(action.data.discount))
        .set("discountValue", fromJS(action.data.discountValue))
        .set("grandTotalValue", fromJS(action.data.grandTotalValue));
    case RESET_ITEMS:
      return state
        .set("items", initialState.get("items"))
        .set("dataTimestamp", moment());
    case RESET_CART:
      return state
        .set("cart", initialState.get("cart"))
        .set("dataTimestamp", moment());
    case ADD_PRODUCT:
      return state
        .set("items", state.get("items").push(fromJS(action.data)))
        .set("dataTimestamp", moment());
    case REMOVE_PRODUCT:
      return state
        .get("items")
        .filter(n => n.get("id") !== action.data.id)
        .set("dataTimestamp", moment());
    case SET_PRODUCT:
      const index = state
        .get("items")
        .findIndex(n => n.get("id") === action.data.id);
      return state.set(
        "items",
        state
          .get("items")
          .update(index, () => fromJS(action.data))
          .set("dataTimestamp", moment())
      );
    case ADD_VOUCHER:
      if (!action.data.voucher) {
        return state;
      }
      return state
        .set("voucher", fromJS(action.data.voucher))
        .set(
          "subTotalAfterDiscount",
          fromJS(action.data.voucher.subTotalAfterDiscount)
        )
        .set("taxFromSubTotal", fromJS(action.data.voucher.taxFromSubTotal))
        .set("grandTotal", fromJS(action.data.voucher.grandTotal))
        .set("discount", fromJS(action.data.voucher.discount))
        .set("discountValue", fromJS(action.data.voucher.discountValue));
    case SET_INVALID_VOUCHER:
      return state.set("voucher", fromJS(action.data));
    case REMOVE_VOUCHER:
      return state
        .set("voucher", initialState.get("voucher"))
        .set("subTotalAfterDiscount", fromJS(action.data.subTotalAfterDiscount))
        .set("taxFromSubTotal", fromJS(action.data.taxFromSubTotal))
        .set("grandTotal", fromJS(action.data.grandTotal))
        .set("discount", fromJS(action.data.discount))
        .set("discountValue", fromJS(action.data.discountValue));
    default:
      return state;
  }
};

const getState = state => {
  if (state.get(REDUCER_NAME)) {
    return state.get(REDUCER_NAME);
  } else {
    return initialState;
  }
};

export const selectIsLoading = createSelector(
  getState,
  n => n.get("isLoading")
);
export const selectItems = createSelector(
  getState,
  n => n.get("items")
);
export const selectItemCount = createSelector(
  getState,
  n =>
    n.get("items")
      ? n.get("items").groupBy(m => m.get("productId").toString()).size
      : 0
);
export const selectCart = createSelector(
  getState,
  n => n.get("cart")
);
export const selectOutOfStock = createSelector(
  getState,
  n => n.get("outOfStock")
);
export const selectSubTotal = createSelector(
  getState,
  n => n.get("subTotal")
);
export const selectSubTotalAfterDiscount = createSelector(
  getState,
  n => n.get("subTotalAfterDiscount")
);
export const selectTaxFromSubTotalAfterDiscount = createSelector(
  getState,
  n => n.get("taxFromSubTotal")
);
export const selectGrandTotal = createSelector(
  getState,
  n => n.get("grandTotal")
);
export const selectDiscount = createSelector(
  getState,
  n => n.get("discount")
);
export const selectDiscountValue = createSelector(
  getState,
  n => n.get("discountValue")
);
export const selectGrandTotalValue = createSelector(
  getState,
  n => n.get("grandTotalValue")
);
export const selectShippingTotalValue = createSelector(
  getState,
  n => n.get("shippingTotalValue")
);
export const selectShippingTotal = createSelector(
  getState,
  n => n.get("shippingTotal")
);
export const selectPaymentMethodFeeValue = createSelector(
  getState,
  n => n.get("paymentMethodFeeValue")
);
export const selectPaymentMethodFee = createSelector(
  getState,
  n => n.get("paymentMethodFee")
);
export const selectVoucherValues = createSelector(
  getState,
  n => n.get("voucher")
);
export const selectDataTimestamp = createSelector(
  getState,
  n => n.get("dataTimestamp")
);
export const selectCartTimestamp = createSelector(
  getState,
  n => n.get("cartTimestamp")
);

export const selectTotals = createStructuredSelector({
  subTotal: selectSubTotal,
  subTotalAfterDiscount: selectSubTotalAfterDiscount,
  taxFromSubTotal: selectTaxFromSubTotalAfterDiscount,
  grandTotal: selectGrandTotal,
  discount: selectDiscount,
  discountValue: selectDiscountValue,
  shippingTotal: selectShippingTotal,
  shippingTotalValue: selectShippingTotalValue,
  paymentMethodFee: selectPaymentMethodFee,
  paymentMethodFeeValue: selectPaymentMethodFeeValue
});

reducerRegistry.register(REDUCER_NAME, reducer);
