import React from "react";

import ProductSkeleton from "./productSkeleton";
import ImageSlide from "./imageSlide";
import AddToBagForm from "./addToBagForm";
import { trackAddProduct } from "./analytics";
import { getUrl } from "../../../../server/helpers/routing";
import withTranslations from "../../containers/translations/withTranslations";

const QuickProductSection = ({
  item,
  isLoading,
  onAddToCart,
  currencyCode,
  translations
}) => (
  <section className="container-section quick-product-section">
    {isLoading && <ProductSkeleton />}
    {!isLoading && item && (
      <>
        <div key="desktop-two-column" className="desktop-two-column">
          <div className="desktop-two-column desktop-two-column_column--aside">
            <ImageSlide data={item} />
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

            <div className="product-section__url">
              <a
                className="product-section__url__text"
                title="Product details"
                href={getUrl(item.get("url"))}
              >
                {translations.get("quick_product_view_details") ||
                  "View Product Details"}
              </a>
            </div>
            <AddToBagForm
              initialValues={{
                productId: item.get("id"),
                swatchOptionId: undefined,
                quantity: "1",
                isSuccess: false
              }}
              item={item}
              currencyCode={currencyCode}
              displayCarouselUseWith={false}
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
      </>
    )}
  </section>
);

export default withTranslations(QuickProductSection, ["view_product_details"]);
