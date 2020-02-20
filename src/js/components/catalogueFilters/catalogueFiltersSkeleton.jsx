import React from "react";

const CatalogueFiltersSkeleton = ({ isVisible }) => {
  return (
    <section
      className={
        isVisible
          ? "container-section catalogue-filters-section catalogue-filters-section--skeleton catalogue-filters-section--visible"
          : "container-section catalogue-filters-section catalogue-filters-section--skeleton"
      }
    >
      <div className="catalogue-filters-list catalogue-filters-list--skeleton">
        <div className="catalogue-loading">
          <div className="container-section-list__item catalogue-filters-list__item catalogue-filters-list__item--skeleton">
            <div className="catalogue-filters-item__label catalogue-filters-item__label--skeleton" />
            <div className="catalogue-filters-item__label catalogue-filters-item__label--skeleton" />
            <div className="catalogue-filters-item__label catalogue-filters-item__label--skeleton" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogueFiltersSkeleton;
