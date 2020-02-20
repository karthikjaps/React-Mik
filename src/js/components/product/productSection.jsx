import React from "react";

import ProductSkeleton from "./productSkeleton";
import ImageSlide from "./imageSlide";
import AddToBagForm from "./addToBagForm";
import ProductVideoBottom from "./productVideoBottom/productVideoBottom";
import CollapsibleList from "./collapsibleList";
import CatalogueCarousel from "../../components/catalogue/catalogueCarousel";
import { trackAddProduct } from "./analytics";
import withTranslations from "../../containers/translations/withTranslations";
import ProductMediaGallery from "./productMediaGallery/productMediaGallery";

const ProductSection = ({
  item,
  isLoading,
  onAddToCart,
  translations,
  currencyCode,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  displayProductVideoBottom,
  displayProductMediaGallery
}) => (
  <section className="container-section product-section">
    {isLoading && <ProductSkeleton />}
    {!isLoading && item && (
      <>
        <div key="desktop-two-column--first" className="desktop-two-column">
          <div className="desktop-two-column desktop-two-column_column--aside">
            <ImageSlide data={item} />
            {displayProductMediaGallery && (
              <ProductMediaGallery items={item.get("productMediaGallery")} />
            )}
          </div>
          <div className="desktop-two-column_column desktop-two-column_column--main">
            <div className="product-section__product-title">
              <span className="product-section__product-title__text">
                {item.get("title")}
              </span>
            </div>
            <div className="product-section__short-description">
              <span
                className="product-section__short-description__text"
                dangerouslySetInnerHTML={{
                  __html: item.get("shortDescription")
                }}
              />
            </div>
            {item.get("pdpOffer") && (
              <div className="product-section__pdp-offer">
                <span
                  className="product-section__pdp-offer__text"
                  dangerouslySetInnerHTML={{
                    __html: item.get("pdpOffer")
                  }}
                />
              </div>
            )}
            <AddToBagForm
              initialValues={{
                productId: item.get("id"),
                swatchOptionId: undefined,
                quantity: "1",
                isSuccess: false
              }}
              item={item}
              handleAddToWishlist={handleAddToWishlist}
              handleRemoveFromWishlist={handleRemoveFromWishlist}
              displayCarouselUseWith={true}
              currencyCode={currencyCode}
              onSubmit={e => {
                let data = null;

                if (e.toJS) {
                  data = e.toJS();
                } else {
                  data = e;
                }

                const productData = item.toJS();

                trackAddProduct([
                  {
                    ...productData,
                    quantity: parseInt(data.quantity)
                  }
                ]);

                onAddToCart(data);
              }}
            />
          </div>
        </div>
        <CollapsibleList
          key="product-section__collapsible-list"
          items={[
            {
              name: translations.get("product_description"),
              content: item.get("shortDescription")
            },
            {
              name: translations.get("product_learn_more"),
              content: item.get("description")
            },
            {
              name: translations.get("product_ingredients"),
              content: item.get("ingredients")
            }
          ]}
          className="product-section__collapsible-list"
        />
        {displayProductVideoBottom && (
          <ProductVideoBottom
            items={item.get("productVideos")}
            className="product-section__video__bottom"
          />
        )}
        {item.get("relatedProducts") && !!item.get("relatedProducts").size && (
          <section className="related-products">
            <div className="page__subtitle__wrapper">
              <h2 className="page__subtitle">
                <span className="page__subtitle__text related-products__subtitle__text">
                  {translations.get("product_like")}
                </span>
              </h2>
            </div>
            <CatalogueCarousel
              items={item.get("relatedProducts")}
              handleAddToWishlist={handleAddToWishlist}
              handleRemoveFromWishlist={handleRemoveFromWishlist}
              currencyCode={currencyCode}
            />
          </section>
        )}
      </>
    )}
  </section>
);

export default withTranslations(ProductSection, [
  "product_description",
  "product_learn_more",
  "product_ingredients",
  "product_like",
  "use_it_with"
]);
