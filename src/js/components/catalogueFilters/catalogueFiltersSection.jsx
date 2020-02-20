import React, { Fragment } from "react";

import CatalogueFiltersSkeleton from "./catalogueFiltersSkeleton";
import CatalogueFiltersForm from "./catalogueFiltersForm";
import withTranslations from "../../containers/translations/withTranslations";

class CatalogueFiltersSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleClick(e) {
    if (this.state.isVisible) {
      document.body.style.overflowY = "visible";
    } else {
      scrollTo(0, 0);
      document.body.style.overflowY = "hidden";
    }
    this.setState({ isVisible: !this.state.isVisible });
  }

  componentWillUnmount() {
    document.body.style.overflowY = "visible";
  }

  handleResetClick() {
    this.setState({ isVisible: false });
  }

  render() {
    const {
      items,
      isLoading,
      url,
      onSubmit,
      defaultPriceRange,
      filters,
      translations,
      currencyCode
    } = this.props;

    const { isVisible } = this.state;
    const initialFilters =
      filters && filters.hasOwnProperty("price")
        ? filters
        : { ...filters, price: defaultPriceRange };

    return (
      <Fragment>
        <div
          className={`catalogue-filters-toggle ${
            isVisible ? "catalogue-filters-toggle--visible" : ""
          }`}
        >
          <input
            id="catalogue-filters-toggle__checkbox"
            className="catalogue-filters-toggle__checkbox"
            type="checkbox"
            onClick={this.handleClick}
          />
          <label
            htmlFor="catalogue-filters-toggle__checkbox"
            className={`catalogue-filters-toggle__label ${
              isVisible ? "catalogue-filters-toggle__label--visible" : ""
            }`}
          >
            {translations.get("catalogueFilters_filter")}
          </label>
        </div>
        {isLoading && <CatalogueFiltersSkeleton isVisible={isVisible} />}
        {!isLoading && items && items.size > 0 && filters && (
          <section
            className={`container-section catalogue-filters-section ${
              isVisible ? `catalogue-filters-section--visible` : ""
            }`}
          >
            <div className="catalogue-filters-list">
              <CatalogueFiltersForm
                url={url}
                data={items}
                initialValues={initialFilters}
                defaultPriceRange={defaultPriceRange}
                onSubmit={onSubmit}
                onChangeVisible={this.handleClick}
                handleResetClick={this.handleResetClick}
                currencyCode={currencyCode}
              />
            </div>
          </section>
        )}
      </Fragment>
    );
  }
}

export default withTranslations(CatalogueFiltersSection, [
  "catalogueFilters_filter"
]);
