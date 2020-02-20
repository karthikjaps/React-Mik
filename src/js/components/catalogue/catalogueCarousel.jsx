import React, { Fragment } from "react";
import Slider from "react-slick";

import CatalogueItem from "./catalogueItem";
import CatalogueSkeleton from "./catalogueSkeleton";
import withTranslations from "../../containers/translations/withTranslations";

// should be the same as scss breakpoint mixin value (see _base.scss)
const DESKTOP_MIN_WIDTH = 768; // equivalent to 48em

const CatalogueCarousel = ({
  items,
  isLoading,
  translations,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  currencyCode,
  slidesToShowDesktop,
  slidesToScrollDesktop,
  slidesToShowMobile,
  slidesToScrollMobile,
  arrowsDesktop,
  arrowsMobile,
  dotsDesktop,
  dotsMobile,
  className
}) => {
  const sliderSettings = {
    dots: dotsDesktop || false,
    arrows: arrowsDesktop || true,
    slidesToShow: slidesToShowDesktop || 4,
    slidesToScroll: slidesToScrollDesktop || 4,
    infinite: !!items && items.size > 4,
    responsive: [
      {
        breakpoint: DESKTOP_MIN_WIDTH,
        settings: {
          dots: dotsMobile || false,
          arrows: arrowsMobile || false,
          slidesToShow: slidesToShowMobile || 2,
          slidesToScroll: slidesToScrollMobile || 2,
          infinite: !!items && items.size > 2
        }
      }
    ]
  };

  return (
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
                          <CatalogueItem
                            data={n}
                            key={n.get("id")}
                            className={`catalogue-carousel__item ${
                              className
                                ? `catalogue-carousel__item--${className}`
                                : ""
                            }`}
                            handleAddToWishlist={handleAddToWishlist}
                            handleRemoveFromWishlist={handleRemoveFromWishlist}
                            currencyCode={currencyCode}
                          />
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
  );
};

export default withTranslations(CatalogueCarousel, ["catalogueSection_label"]);
