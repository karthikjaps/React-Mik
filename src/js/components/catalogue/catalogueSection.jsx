import React, { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroller";

import CatalogueItem from "./catalogueItem";
import CatalogueSkeleton from "./catalogueSkeleton";
import CatalogueFilters from "../../containers/catalogueFilters";
import CatalogueSort from "../../containers/catalogueSort";
import CatalogueTitleSkeleton from "./catalogueTitleSkeleton";
import withTranslations from "../../containers/translations/withTranslations";
import { DEFAULT_CATEGORY_ID } from "../../../../service/catalogue/constants";
import {
  DEFAULT_SORTING_ORDER,
  PROMOTIONS_SORTING_ORDER
} from "../../containers/catalogue/constants";

const CatalogueSection = ({
  categoryId,
  title,
  items,
  limit,
  url,
  queryString,
  hideTitle,
  hidePagination,
  hideFilters,
  handleGetMoreContent,
  hasMore,
  isLoading,
  isCategoryLoading,
  translations,
  searchTerm,
  history,
  filters,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  handleAddToCart,
  handleQuickViewButtonClick,
  currencyCode
}) => (
  <section className="container-section catalogue-section">
    <div className="catalogue-section__wrapper">
      {!hideTitle && title && isCategoryLoading && <CatalogueTitleSkeleton />}
      {!hideTitle && title && !isCategoryLoading && (
        <h1 className="container-section__title catalogue-section__title">
          {title}
        </h1>
      )}
      {!!items.size && (
        <h1 className="container-section__title catalogue-section__title">
          {searchTerm}
        </h1>
      )}
    </div>
    <div className="container-section__content catalogue-section__content">
      {!hideFilters && [
        <CatalogueSort
          key="catalogue-sort"
          url={url}
          queryString={queryString}
          defaultOption={
            !categoryId || categoryId === DEFAULT_CATEGORY_ID
              ? PROMOTIONS_SORTING_ORDER
              : DEFAULT_SORTING_ORDER
          }
        />,
        <CatalogueFilters
          key="catalogue-filters"
          url={url}
          queryString={queryString}
          history={history}
          filters={filters}
        />
      ]}
      <div
        className={`catalogue-product-section ${
          hideFilters ? "" : "catalogue-product-section--with-filters"
        }`}
      >
        <div className="catalogue-product-list">
          {isLoading ? (
            <CatalogueSkeleton />
          ) : !hidePagination ? (
            <InfiniteScroll
              initialLoad={false}
              loadMore={handleGetMoreContent}
              hasMore={hasMore}
              threshold={600}
              loader={
                <div className="loader" key={0}>
                  <h1 className="dot one">.</h1>
                  <h1 className="dot two">.</h1>
                  <h1 className="dot three">.</h1>
                </div>
              }
            >
              {!(isLoading && items.size === 0) && [
                <div className="catalogue-product-list__wrapper">
                  {items &&
                    items.map(n => (
                      <div
                        className="container-section-list__item catalogue-product-list__item"
                        key={n.get("id")}
                      >
                        <CatalogueItem
                          data={n}
                          key={n.get("id")}
                          handleAddToCart={handleAddToCart}
                          handleQuickViewButtonClick={
                            handleQuickViewButtonClick
                          }
                          handleAddToWishlist={handleAddToWishlist}
                          handleRemoveFromWishlist={handleRemoveFromWishlist}
                          currencyCode={currencyCode}
                        />
                      </div>
                    ))}
                </div>,
                !items.size && (
                  <Fragment>
                    <span
                      className="catalogue-no-results"
                      key="catalogue-no-results"
                    >
                      {translations.get("catalogueSection_label")}
                    </span>
                    {searchTerm && (
                      <span
                        className="catalogue-no-results-desc"
                        key="catalogue-no-results-desc"
                      >
                        "{searchTerm}"
                      </span>
                    )}
                  </Fragment>
                )
              ]}
            </InfiniteScroll>
          ) : (
            <>
              {items &&
                items.slice(0, limit).map(n => {
                  return (
                    <div
                      className={
                        "container-section-list__item catalogue-product-list__item"
                      }
                      key={n.get("id")}
                    >
                      <CatalogueItem
                        data={n}
                        key={n.get("id")}
                        handleAddToCart={handleAddToCart}
                        handleQuickViewButtonClick={handleQuickViewButtonClick}
                        handleAddToWishlist={handleAddToWishlist}
                        handleRemoveFromWishlist={handleRemoveFromWishlist}
                        currencyCode={currencyCode}
                      />
                    </div>
                  );
                })}
              {!items.size && (
                <Fragment>
                  <span
                    className="catalogue-no-results"
                    key="catalogue-no-results"
                  >
                    {translations.get("catalogueSection_label")}
                  </span>
                  {searchTerm && (
                    <span
                      className="catalogue-no-results-desc"
                      key="catalogue-no-results-desc"
                    >
                      "{searchTerm}"
                    </span>
                  )}
                </Fragment>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default withTranslations(CatalogueSection, ["catalogueSection_label"]);
