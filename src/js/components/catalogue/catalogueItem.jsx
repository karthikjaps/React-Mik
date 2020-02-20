import React from "react";
import { Link } from "react-router-dom";
import withTranslations from "../../containers/translations/withTranslations";
import { trackProductClicks } from "./analytics";
import { getUrl } from "../../../../server/helpers/routing";

const PRODUCT_TYPE_SIMPLE = "simple";

const CatalogueItem = ({
  data,
  translations,
  className,
  handleAddToCart,
  handleQuickViewButtonClick,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  currencyCode
}) => {
  if (data) {
    return [
      data.get("isAvailable") && (
        <Link
          key="isAvailable"
          to={getUrl(data.get("url"))}
          title={data.get("title")}
          className={`product ${className || ""}`}
          onClick={() => trackProductClicks([data])}
        >
          <Product
            data={data}
            translations={translations}
            handleAddToCart={handleAddToCart}
            handleQuickViewButtonClick={handleQuickViewButtonClick}
            handleAddToWishlist={handleAddToWishlist}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            currencyCode={currencyCode}
          />
        </Link>
      ),
      !data.get("isAvailable") && (
        <div key="isNotAvailable" className={`product ${className || ""}`}>
          <Product
            data={data}
            translations={translations}
            handleQuickViewButtonClick={handleQuickViewButtonClick}
            handleAddToWishlist={handleAddToWishlist}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            currencyCode={currencyCode}
          />
        </div>
      )
    ];
  }
  return null;
};

const Product = ({
  data,
  translations,
  handleAddToCart,
  handleQuickViewButtonClick,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  currencyCode
}) => [
  <ProductThumb
    key="productThumb"
    data={data}
    handleAddToCart={handleAddToCart}
    handleQuickViewButtonClick={handleQuickViewButtonClick}
    translations={translations}
  />,
  <ProductDetails
    key="productDetails"
    data={data}
    translations={translations}
    handleAddToWishlist={handleAddToWishlist}
    handleRemoveFromWishlist={handleRemoveFromWishlist}
    currencyCode={currencyCode}
  />
];

const ProductThumb = ({
  data,
  handleAddToCart,
  handleQuickViewButtonClick,
  translations
}) => (
  <div className="product__thumb">
    {handleQuickViewButtonClick && (
      <ProductThumbOverlay
        data={data}
        handleAddToCart={handleAddToCart}
        handleQuickViewButtonClick={handleQuickViewButtonClick}
        translations={translations}
      />
    )}
    <img
      src={data.get("image")}
      alt={data.get("title")}
      title={data.get("title")}
      className="product__thumb__img"
    />
    {!data.get("isAvailable") && (
      <div className="product__banner">
        <span className="product__banner__info">
          {translations.get("catalogueItem_label")}
        </span>
      </div>
    )}
  </div>
);

const ProductThumbOverlay = ({
  data,
  handleAddToCart,
  handleQuickViewButtonClick,
  translations
}) => (
  <>
    {data.get("isAvailable") && data.get("type") === PRODUCT_TYPE_SIMPLE && (
      <button
        onClick={e => {
          e.preventDefault();

          return handleAddToCart({
            productId: data.get("id"),
            quantity: "1"
          });
        }}
        className="form__buttons__button button product-thumb-overlay__button"
      >
        {translations.get("product_addToBag")}
      </button>
    )}
    {data.get("isAvailable") && !(data.get("type") === PRODUCT_TYPE_SIMPLE) && (
      <span
        onClick={e => {
          e.preventDefault();

          return handleQuickViewButtonClick(
            getUrl(`/shop/product/${data.get("id")}`)
          );
        }}
        className="form__buttons__button button product-thumb-overlay__button"
      >
        {translations.get("product_quick_view")}
      </span>
    )}
    {!data.get("isAvailable") && (
      <span
        onClick={e => {
          e.preventDefault();

          return handleQuickViewButtonClick(getUrl(`/shop/notify-me`));
        }}
        className="form__buttons__button button product-thumb-overlay__button product-thumb-overlay__button--notify-me"
      >
        {translations.get("product_notifyMe") || "Notify me"}
      </span>
    )}
    <div className="product-thumb-overlay__background" />
  </>
);

const ProductDetails = ({
  data,
  translations,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  currencyCode
}) => (
  <div className="product__details">
    <div className="product__details__row product__details__row--upper">
      <span className="product__title">{data.get("title")}</span>
    </div>
    <div className="product__details__row product__details__row--lower">
      {(!data.get("rrp") || data.get("price") === data.get("rrp")) && (
        <span className="product__price">
          {data.get("price") && `${currencyCode} ${data.get("price")}`}
        </span>
      )}
      {data.get("rrp") &&
        data.get("price") !== data.get("rrp") && [
          <span
            className="product__price product__price--discounted"
            key="product__price--discounted"
          >
            {data.get("price") && `${currencyCode} ${data.get("price")}`}
          </span>,
          <span
            className="product__price product__price--regular"
            key="product__price--regular"
          >
            {data.get("rrp") && `${currencyCode} ${data.get("rrp")}`}
          </span>
        ]}
    </div>
    {data.get("tag") && data.get("tag").get("text") && (
      <div className="product__header">
        <span className="product__header__info">
          <span className="product__header__info__text">
            {data.get("tag").get("text")}
          </span>
          {data.get("tag").get("icon") && (
            <span className="product__header__info__icon">
              <img
                src={data.get("tag").get("icon")}
                className="product__header__info__icon__img"
              />
            </span>
          )}
        </span>
      </div>
    )}
    <div className="product__wishlist">
      <span
        className={`product__wishlist__icon ${
          data.get("isSelectedWishItem") ? "product__wishlist__icon--added" : ""
        }`}
        onClick={e => {
          if (data.get("isSelectedWishItem")) {
            handleRemoveFromWishlist(e, { id: data.get("id") });
          } else {
            handleAddToWishlist(e, { id: data.get("id") });
          }
        }}
      />
    </div>
  </div>
);

export default withTranslations(CatalogueItem, [
  "catalogueItem_discount",
  "catalogueItem_label",
  "product_addToBag",
  "product_quick_view",
  "product_notifyMe"
]);
