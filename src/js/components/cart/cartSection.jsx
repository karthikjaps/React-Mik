import React from "react";

import CartNoResults from "./cartNoResults";
import CartItem from "./cartItem";
import CartTotals from "./cartTotals";

const CartSection = ({
  title,
  items,
  outOfStock,
  totals,
  isLoading,
  isLoggedIn,
  isReadOnly,
  handleClose,
  voucherUpdate,
  voucherValues,
  voucherRemove,
  onRemoveProductFromCart,
  onUpdateProductQuantity,
  currencyCode
}) => {
  return (
    <section
      className={`cart-section ${items.size ? "" : "cart-section--no-results"}`}
    >
      <div className="cart-section__content">
        <div className="cart-section__wrapper">
          {!!items.size &&
            (title && <h3 className="cart-section__title">{title}</h3>)}
          <div className="card-close card-close--cart">
            <span className="card-close__button" onClick={handleClose} />
          </div>
        </div>
        {isLoading ? (
          <div className="cart-section__details cart-section__details--loading" />
        ) : (
          <div className="cart-section__details">
            <div className="cart-product-section">
              <div className="cart-product-list">
                {items &&
                  items.map((n, index) => (
                    <div className="cart-product-list__item" key={index}>
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
                {outOfStock &&
                  outOfStock.map((n, index) => (
                    <div
                      className="cart-product-list__item cart-product-list__item--unavailable"
                      key={index}
                    >
                      <CartItem
                        quantity={n.get("quantity")}
                        data={n.get("item")}
                        isReadOnly={true}
                        currencyCode={currencyCode}
                      />
                    </div>
                  ))}
              </div>
            </div>
            {!!items.size && (
              <CartTotals
                isLoggedIn={isLoggedIn}
                isReadOnly={isReadOnly}
                subTotal={totals.subTotal}
                taxTotal={totals.taxFromSubTotal}
                discount={totals.discount}
                discountValue={totals.discountValue}
                finalTotal={totals.subTotalAfterDiscount}
                voucherUpdate={voucherUpdate}
                voucherValues={voucherValues}
                voucherRemove={voucherRemove}
                items={items}
                currencyCode={currencyCode}
              />
            )}
            {!items.size && <CartNoResults key="cart-no-results" />}
          </div>
        )}
      </div>
    </section>
  );
};

export default CartSection;
