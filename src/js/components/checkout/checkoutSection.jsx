import React from "react";

import CartItem from "../cart/cartItem";
import CartTotals from "../cart/cartTotals";

const CheckoutSection = ({
  title,
  items,
  totals,
  isLoading,
  isLoggedIn,
  isReadOnly,
  twoColumnLayout,
  voucherUpdate,
  voucherValues,
  onRemoveProductFromCart,
  onUpdateProductQuantity,
  voucherRemove,
  currencyCode
}) => {
  return (
    <section className="container-section checkout-section">
      <div className="checkout-section__content">
        {!isReadOnly && (
          <div className="checkout-section__wrapper">
            {!isLoading && (
              <h1 className="container-section__title checkout-section__title">
                {title}
              </h1>
            )}
          </div>
        )}
        {isLoading ? (
          <div className="checkout-section__details checkout-section__details--loading" />
        ) : (
          <div
            className={`checkout-section__details ${
              twoColumnLayout ? "checkout-section__details--two-column" : ""
            }`}
          >
            <div
              className={`checkout-product-section ${
                twoColumnLayout ? "checkout-product-section--two-column" : ""
              }`}
            >
              <div className="cart-product-list">
                {!isLoading &&
                  items &&
                  items.map((n, index) => (
                    <div className={"cart-product-list__item"} key={index}>
                      <CartItem
                        quantity={n.get("quantity")}
                        data={n.get("item")}
                        selectedOptions={n.get("selectedOptions")}
                        isReadOnly={isReadOnly}
                        onRemoveProductFromCart={onRemoveProductFromCart}
                        onUpdateProductQuantity={onUpdateProductQuantity}
                        currencyCode={currencyCode}
                      />
                    </div>
                  ))}
              </div>
            </div>
            {items && !!items.size && (
              <div
                className={`checkout-totals-section ${
                  twoColumnLayout ? "checkout-totals-section--two-column" : ""
                }`}
              >
                <CartTotals
                  isLoggedIn={isLoggedIn}
                  isReadOnly={isReadOnly}
                  subTotal={totals.subTotal}
                  taxTotal={totals.taxFromSubTotal}
                  discount={totals.discount}
                  discountValue={totals.discountValue}
                  paymentMethodFee={totals.paymentMethodFee}
                  paymentMethodFeeValue={totals.paymentMethodFeeValue}
                  shippingTotal={totals.shippingTotal}
                  shippingTotalValue={totals.shippingTotalValue}
                  finalTotal={totals.grandTotal}
                  voucherUpdate={voucherUpdate}
                  voucherValues={voucherValues}
                  voucherRemove={voucherRemove}
                  items={items}
                  currencyCode={currencyCode}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckoutSection;
