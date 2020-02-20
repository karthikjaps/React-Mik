import React from "react";

import CatalogueSkeletonItem from "./catalogueSkeletonItem";

const CatalogueSkeleton = () => {
  const skeletonItems = [];
  for (let i = 0; i < 4; i++) {
    skeletonItems.push(
      <div
        className={"container-section-list__item catalogue-product-list__item"}
        key={i}
      >
        <CatalogueSkeletonItem />
      </div>
    );
  }

  return <div className="catalogue-loading">{skeletonItems}</div>;
};

export default CatalogueSkeleton;
