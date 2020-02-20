import React from "react";
import CartQuantityForm from "./cartQuantityForm";
import { trackRemoveProduct } from "./analytics";
import { trackAddProduct } from "../product/analytics";
import { TYPE_MINUS, TYPE_PLUS } from "../form/stepper";
import withTranslations from "../../containers/translations/withTranslations";

const CartItem = ({
  quantity,
  data,
  selectedOptions,
  isReadOnly,
  onRemoveProductFromCart,
  onUpdateProductQuantity,
  currencyCode
}) => {
  if (data) {
    return (
      <div className="cart-product">
        <Product
          quantity={quantity}
          data={data}
          selectedOptions={selectedOptions}
          isReadOnly={isReadOnly}
          onRemoveProductFromCart={onRemoveProductFromCart}
          onUpdateProductQuantity={onUpdateProductQuantity}
          currencyCode={currencyCode}
        />
      </div>
    );
  }
  return null;
};

const Product = ({
  quantity,
  data,
  selectedOptions,
  isReadOnly,
  onRemoveProductFromCart,
  onUpdateProductQuantity,
  currencyCode
}) => [
  <ProductThumb
    key="productThumb"
    data={data}
    selectedOptions={selectedOptions}
    isReadOnly={isReadOnly}
  />,
  <ProductDetailsWithTranslations
    key="productDetails"
    quantity={quantity}
    data={data}
    isReadOnly={isReadOnly}
    onRemoveProductFromCart={onRemoveProductFromCart}
    onUpdateProductQuantity={onUpdateProductQuantity}
    selectedOptions={selectedOptions}
    currencyCode={currencyCode}
  />
];

const ProductThumb = ({ data, selectedOptions }) => (
  <div className="cart-product__thumb">
    <img
      src={
        (selectedOptions &&
          !!selectedOptions.size &&
          selectedOptions.get(0).get("image")) || // TODO: Can `selectedOptions` has more then one element?
        data.get("image")
      }
      alt={data.get("title")}
      title={data.get("title")}
      className="cart-product__thumb__img"
    />
  </div>
);

const ProductDetails = ({
  quantity,
  data,
  isReadOnly,
  onRemoveProductFromCart,
  onUpdateProductQuantity,
  translations,
  currencyCode,
  selectedOptions
}) => (
  <div className="cart-product__details">
    <div className="cart-product__details__row">
      <span className="cart-product__title">{`${data.get("title")} ${
        selectedOptions && !!selectedOptions.size
          ? selectedOptions.get(0).get("swatchCode")
          : ""
      }`}</span>
      {!isReadOnly && (
        <span
          className="cart-product__remove"
          onClick={() => {
            const productData = data.toJS();

            trackRemoveProduct([
              {
                ...productData,
                quantity
              }
            ]);

            onRemoveProductFromCart({ productId: data.get("id") });
          }}
        />
      )}
    </div>
    <div className="cart-product__details__row">
      {(!data.get("rrp") || data.get("price") === data.get("rrp")) && (
        <span className="cart-product__price">
          {`${currencyCode} ${data.get("price")}`}
        </span>
      )}
      {data.get("rrp") &&
        data.get("price") !== data.get("rrp") && [
          <span
            className="cart-product__price cart-product__price--discounted"
            key="product__price--discounted"
          >
            {`${currencyCode} ${data.get("price")}`}
          </span>,
          <span
            className="cart-product__price cart-product__price--regular"
            key="product__price--regular"
          >
            {data.get("rrp") && `${currencyCode} ${data.get("rrp")}`}
          </span>
        ]}
      {!data.get("isAvailable") && (
        <span className="cart-product__info">
          {translations.size > 0
            ? translations.get("cartProduct_unavailable")
            : ""}
        </span>
      )}
      {data.get("hasError") && (
        <span className="cart-product__error">
          {translations.size > 0
            ? translations
                .get("cartProduct_quantityError")
                .replace("{maxQuantity}", data.get("maxQuantity"))
            : ""}
        </span>
      )}
    </div>
    <div className="cart-product__details__row cart-product__details__row--footer">
      {isReadOnly ? (
        !!quantity && (
          <span className="cart-product__details__row__quantity">
            Qty: {quantity}
          </span>
        )
      ) : (
        <CartQuantityForm
          initialValues={{ [`quantity_${data.get("id")}`]: Number(quantity) }}
          item={data}
          quantity={quantity}
          formId={data.get("id")}
          onStepperButtonClick={({ type, value }) => {
            const productData = data.toJS();

            if (type === TYPE_MINUS) {
              trackRemoveProduct([
                {
                  ...productData,
                  quantity: 1
                }
              ]);
            } else if (type === TYPE_PLUS) {
              trackAddProduct([
                {
                  ...productData,
                  quantity: 1
                }
              ]);
            }

            onUpdateProductQuantity({
              productId: data.get("id"),
              quantity: value
            });
          }}
        />
      )}
    </div>
  </div>
);

const ProductDetailsWithTranslations = withTranslations(ProductDetails, [
  "cartProduct_unavailable",
  "cartProduct_quantityError"
]);

export default CartItem;
