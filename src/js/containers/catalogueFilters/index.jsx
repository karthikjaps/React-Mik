import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getCatalogue } from "../catalogue/actions";
import { getCatalogueFilters, fetchCatalogueFilters } from "./actions";
import {
  selectItems,
  selectCategoryId as selectFiltersCategoryId,
  selectIsLoading
} from "./reducer";
import { selectCurrencyCode } from "../catalogueSort/reducer";
import CatalogueFiltersSection from "../../components/catalogueFilters/catalogueFiltersSection";
import { selectCategoryRoutesByUrl } from "../routes/reducer";
import { selectCategoryId } from "../catalogue/reducer";
import { STORE_ID } from "../../../../service/catalogueConfig/constants";
import {
  FILTERS_PRICE,
  NON_FILTERS
} from "../../../../service/catalogue/constants";
import { FILTERS_PRICE_ARRAY_LENGTH } from "./constants";

class CatalogueFilters extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { categoryId, onGetCatalogueFilters } = this.props;

    onGetCatalogueFilters({
      categoryId,
      storeId: localStorage.getItem("STORE_ID") || STORE_ID
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.categoryId &&
      this.props.categoryId !== prevProps.categoryId
    ) {
      this.props.onGetCatalogueFilters({
        categoryId: this.props.categoryId
      });
    }
  }

  render() {
    const { items, isLoading, url, filters, currencyCode } = this.props;

    // TODO: should not be in render
    const priceFilter = items.filter(
      item => item.get("name") === FILTERS_PRICE
    );

    let min = 0;
    let max = 0;

    // TODO: should not be in render
    if (
      priceFilter &&
      priceFilter.first() &&
      priceFilter.first().get("values") &&
      priceFilter
        .first()
        .get("values")
        .first()
    ) {
      min = priceFilter
        .first()
        .get("values")
        .first()
        .get("min");
      max = priceFilter
        .first()
        .get("values")
        .first()
        .get("max");
    }

    return isLoading || (items && items.size) ? (
      <div className="catalogue-filters__wrapper">
        <section className="catalogue-filters">
          <CatalogueFiltersSection
            url={url}
            items={items}
            isLoading={isLoading}
            onSubmit={this.handleSubmit}
            defaultPriceRange={[Number(min), Number(max)]}
            filters={filters}
            currencyCode={currencyCode}
          />
        </section>
      </div>
    ) : null;
  }

  static fetchData(store, { url }, { storeId }) {
    const categoryRoutes = selectCategoryRoutesByUrl(store.getState());

    const category = categoryRoutes.get(url.replace(/\/$/, ""));
    const categoryId = category ? category.get("id") : null;

    return store.dispatch(
      fetchCatalogueFilters({
        categoryId: categoryId,
        storeId
      })
    );
  }

  encodeFilterData(data) {
    let filterData = {};
    for (const n in data) {
      if (data.hasOwnProperty(n) && !NON_FILTERS.includes(n)) {
        if (n === FILTERS_PRICE) {
          if (
            Array.isArray(data[n]) &&
            data[n].length == FILTERS_PRICE_ARRAY_LENGTH
          ) {
            filterData[n] = `${data[n][0]}-${data[n][1]}`;
          }
        } else {
          for (const m in data[n]) {
            if (data[n].hasOwnProperty(m) && data[n][m]) {
              if (filterData.hasOwnProperty(n)) {
                filterData[n] = filterData[n].concat("-", m);
              } else {
                filterData[n] = m;
              }
            }
          }
        }
      }
    }

    return filterData;
  }

  handleSubmit(e) {
    let data = null;

    if (e.toJS) {
      data = e.toJS();
    } else {
      data = e;
    }

    const filterData = this.encodeFilterData(data);

    let searchParams = new URLSearchParams(this.props.queryString);

    searchParams.forEach((value, key) => {
      if (!NON_FILTERS.includes(key) && !filterData.hasOwnProperty(key)) {
        searchParams.delete(key);
      }
    });

    const filterDataKeys = Object.keys(filterData);
    for (const key of filterDataKeys) {
      searchParams.set(key, filterData[key]);
    }

    this.props.history.push(`${this.props.url}?${searchParams.toString()}`);
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    items: selectItems,
    isLoading: selectIsLoading,
    filtersCategoryId: selectFiltersCategoryId,
    categoryId: selectCategoryId,
    currencyCode: selectCurrencyCode
  });

const mapDispatchToProps = dispatch => ({
  onGetCatalogueFilters: data => dispatch(getCatalogueFilters(data)),
  onGetCatalogue: data => dispatch(getCatalogue(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogueFilters);
