import React, { Fragment } from "react";
import Slider from "react-slick";

import CatalogueItem from "./catalogueItem";
import CatalogueSkeleton from "./catalogueSkeleton";
import withTranslations from "../../containers/translations/withTranslations";

const CatalogueCarouselUseWith = ({
  items,
  isLoading,
  translations,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  currencyCode,
  className
}) => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: !!items && items.size > 1
  };

  return (
    <div className="desktop-two-column_column desktop-two-column_column--main use-it-with">
      <div className="use-it-with__title">
        {translations.get("use_it_with") || "Use it with..."}
      </div>
      <section
        className={`container-section catalogue-carousel ${
          className ? `catalogue-carousel--${className}` : ""
        }`}
      >
        <div className="container-section__content catalogue-carousel__content">
          <div className="catalogue-product-section">
            <div className="catalogue-product-list">
              {isLoading ? (
                <CatalogueSkeleton />
              ) : (
                <Fragment>
                  <Slider {...sliderSettings}>
                    {items &&
                      items.map(n => {
                        return (
                          <div
                            className="container-section-list__item"
                            key={n.get("id")}
                          >
                            <div>
                              <CatalogueItem
                                data={n}
                                key={n.get("id")}
                                className={`catalogue-carousel__item ${
                                  className
                                    ? `catalogue-carousel__item--${className}`
                                    : ""
                                }`}
                                handleAddToWishlist={handleAddToWishlist}
                                handleRemoveFromWishlist={
                                  handleRemoveFromWishlist
                                }
                                currencyCode={currencyCode}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </Slider>
                  {!items.size && (
                    <span
                      className="catalogue-no-results"
                      key="catalogue-no-results"
                    >
                      {translations.get("catalogueSection_label")}
                    </span>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withTranslations(CatalogueCarouselUseWith, [
  "catalogueSection_label"
]);
