import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { trackPromotionClicks } from "../home/analytics";
import { getUrl } from "../../../../server/helpers/routing";

const BannerSlide = ({ data, className }) => {
  if (data) {
    return (
      <section className={`banner ${className || ""}`}>
        <div className="banner-slider">
          <Slider
            dots={true}
            arrows={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={7000}
            pauseOnHover={false}
            pauseOnFocus={false}
            lazyLoad={false}
            fade={false}
          >
            {data.map((image, index) => {
              let bannerImage = (
                <img
                  src={image.get("src")}
                  alt={image.get("alt") || image.get("title")}
                  title={image.get("title")}
                  className="banner-slider__content__image__img"
                />
              );

              return (
                <div key={index} className="banner-slider__content">
                  <div className="banner-slider__content__image">
                    {image.get("link") ? (
                      <Link
                        to={getUrl(image.get("link"))}
                        href={image.get("link")}
                        title={image.get("linkText")}
                        onClick={() =>
                          trackPromotionClicks([
                            { id: image.get("id"), title: image.get("title") }
                          ])
                        }
                      >
                        {bannerImage}
                      </Link>
                    ) : (
                      bannerImage
                    )}
                  </div>
                  {(image.get("title") ||
                    image.get("summary") ||
                    (image.get("link") && image.get("linkText"))) && (
                    <div className="banner-slider__content__text">
                      {image.get("title") && (
                        <span className="banner-slider__content__text__title">
                          {image.get("title")}
                        </span>
                      )}
                      {image.get("summary") && (
                        <div
                          className="banner-slider__content__text__summary"
                          dangerouslySetInnerHTML={{
                            __html: image.get("summary")
                          }}
                        />
                      )}
                      {image.get("link") && image.get("linkText") && (
                        <Link
                          to={getUrl(image.get("link"))}
                          href={image.get("link")}
                          className="banner-slider__content__text__link"
                          title={image.get("linkText")}
                          onClick={() =>
                            trackPromotionClicks([
                              {
                                id: image.get("id"),
                                title: image.get("title")
                              }
                            ])
                          }
                        >
                          {image.get("linkText")}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    );
  }

  return null;
};

export default BannerSlide;
