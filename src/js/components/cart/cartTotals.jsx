import React from "react";
import { Link } from "react-router-dom";

import VoucherForm from "./voucherForm";
import VoucherApplied from "./VoucherApplied";
import VoucherRefused from "./VoucherRefused";
import { trackCheckoutStep1 } from "./analytics";
import withTranslations from "../../containers/translations/withTranslations";
import { getUrl } from "../../../../server/helpers/routing";

const CartTotals = ({
  isLoggedIn,
  subTotal,
  taxTotal,
  finalTotal,
  shippingTotal,
  shippingTotalValue,
  paymentMethodFee,
  paymentMethodFeeValue,
  discount,
  discountValue,
  isReadOnly,
  voucherUpdate,
  voucherValues,
  translations,
  voucherRemove,
  items,
  currencyCode
}) => {
  const itemsConverted = items.toJS();
  const products = itemsConverted.map(n => ({
    ...n.item,
    quantity: n.quantity
  }));

  return (
    <div
      className={`cart-totals ${isReadOnly ? "cart-totals--transparent" : ""}`}
    >
      <span className="cart-totals__title">
        {translations.get("cartTotals_orderSummary")}
      </span>
      <div className="cart-totals-content">
        <ul className="cart-totals-content__list">
          <li className="cart-totals-content__list-item">
            <span className="cart-totals-content__list-item__label">
              {translations.get("cartTotals_subTotal")}
            </span>
            <span className="cart-totals-content__list-item__value">
              {subTotal && `${currencyCode} ${subTotal}`}
            </span>
          </li>
          {voucherValues && voucherValues.get("couponCode") !== "" && (
            <li className="cart-totals-content__list-item">
              <span className="cart-totals-content__list-item__label cart-total-content__discount">
                {voucherValues.get("discountPercentage")}
                {` `}
                {translations.get("cartTotals_promotion")}
              </span>
              <span className="cart-totals-content__list-item__value cart-total-content__discount">
                {voucherValues.get("discount") && `${currencyCode} ${discount}`}
              </span>
            </li>
          )}
          {!!discountValue &&
            !(voucherValues && voucherValues.get("couponCode")) && (
              <li className="cart-totals-content__list-item">
                <span className="cart-totals-content__list-item__label cart-total-content__discount">
                  {translations.get("cartTotals_discount")}
                </span>
                <span className="cart-totals-content__list-item__value cart-total-content__discount">
                  {discount && `${currencyCode} ${discount}`}
                </span>
              </li>
            )}
          {shippingTotalValue > 0 && (
            <li className="cart-totals-content__list-item">
              <span className="cart-totals-content__list-item__label">
                {translations.get("cartTotals_shippingFee")}
              </span>
              <span className="cart-totals-content__list-item__value">
                {shippingTotal && `${currencyCode} ${shippingTotal}`}
              </span>
            </li>
          )}
          {paymentMethodFeeValue > 0 && (
            <li className="cart-totals-content__list-item">
              <span className="cart-totals-content__list-item__label">
                {translations.get("cartTotals_codFee")}
              </span>
              <span className="cart-totals-content__list-item__value">
                {paymentMethodFee && `${currencyCode} ${paymentMethodFee}`}
              </span>
            </li>
          )}
          <li className="cart-totals-content__list-item">
            <span className="cart-totals-content__list-item__label">
              {translations.get("cartTotals_taxes")}
            </span>
            <span className="cart-totals-content__list-item__value">
              {taxTotal && `${currencyCode} ${taxTotal}`}
            </span>
          </li>
        </ul>
        <div className="cart-totals-content__total">
          <span className="cart-totals-content__total__label">
            {translations.get("cartTotals_total")}
          </span>
          <span className="cart-totals-content__total__value">
            {finalTotal && `${currencyCode} ${finalTotal}`}
          </span>
        </div>
        {voucherValues === null || voucherValues.get("couponCode") === "" ? (
          <VoucherForm
            voucherUpdate={voucherUpdate}
            labelApply={translations.get("voucher_apply")}
            labelPlaceholder={translations.get("voucher_placeholder")}
          />
        ) : voucherValues.get("valid") === false ? (
          <VoucherRefused
            voucherRemove={voucherRemove}
            voucherCode={voucherValues.get("couponCode")}
          />
        ) : (
          <VoucherApplied
            voucherCode={voucherValues.get("couponCode")}
            voucherRemove={voucherRemove}
          />
        )}
        {!isReadOnly && (
          <div className="cart-totals-buttons">
            {isLoggedIn ? (
              <Link
                to={getUrl("/checkout/delivery")}
                className="button cart-totals-buttons__button"
                onClick={() => trackCheckoutStep1(products, "loggedIn")}
              >
                {translations.get("cartTotals_proceed")}
              </Link>
            ) : (
              <Link
                to={{
                  pathname: getUrl("/login"),
                  state: { returnUrl: "/checkout" }
                }}
                className="button cart-totals-buttons__button"
                onClick={() => trackCheckoutStep1(products, "notLoggedIn")}
              >
                {translations.get("cartTotals_logIn")}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default withTranslations(CartTotals, [
  "cartTotals_orderSummary",
  "cartTotals_subTotal",
  "cartTotals_promotion",
  "cartTotals_discount",
  "cartTotals_taxes",
  "cartTotals_total",
  "cartTotals_proceed",
  "cartTotals_logIn",
  "cartTotals_codFee",
  "cartTotals_shippingFee",
  "voucherApply_label",
  "voucher_placeholder",
  "voucher_apply"
]);
