import React from "react";

const StripeBanner = ({ data, className, handleClose }) => {
  if (data && data.size) {
    return (
      <section className={`banner ${className || ""}`}>
        <div className="stripe-banner">
          {data.map((item, index) => {
            return (
              <div key={index} className="stripe-banner__content">
                <div className="card-close stripe-banner__close">
                  <span className="card-close__button" onClick={handleClose} />
                </div>
                <div className="stripe-banner__content__text">
                  {item.get("title") && (
                    <span className="stripe-banner__content__text__title">
                      {item.get("title")}
                    </span>
                  )}
                  {item.get("summary") && (
                    <div
                      className="stripe-banner__content__text__summary"
                      dangerouslySetInnerHTML={{
                        __html: item.get("summary")
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return null;
};

export default StripeBanner;
