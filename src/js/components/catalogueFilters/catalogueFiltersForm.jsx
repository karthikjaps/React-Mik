import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form/immutable";
import ExecutionEnvironment from "exenv";
import { Link } from "react-router-dom";

import CatalogueFiltersItem from "./catalogueFiltersItem";
import CatalogueFiltersPrice from "./catalogueFiltersPrice";
import InputButton from "../buttons/inputButton";
import { FILTERS_PRICE } from "../../../../service/catalogue/constants";
import withTranslations from "../../containers/translations/withTranslations";

class CatalogueFiltersForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      canUseDOM: false,
      parsedPriceRange: []
    };

    this.onReset = this.onReset.bind(this);
  }

  componentDidMount() {
    this.setState({
      canUseDOM: ExecutionEnvironment.canUseDOM
    });
  }

  onReset() {
    const { handleResetClick, reset } = this.props;
    reset();
    handleResetClick();
  }

  render() {
    const {
      data,
      url,
      submitting,
      change,
      priceRange,
      onChangeVisible,
      initialValues,
      defaultPriceRange,
      handleSubmit,
      onSubmit,
      translations,
      currencyCode
    } = this.props;

    return (
      <form action={url} method="post" className="form">
        <Field
          component="input"
          type="hidden"
          name="page"
          value={initialValues.get("page")}
        />
        <Field
          component="input"
          type="hidden"
          name="pageSize"
          value={initialValues.get("pageSize")}
        />
        <Field
          component="input"
          type="hidden"
          name="categoryId"
          value={initialValues.get("categoryId")}
        />
        {data.map(
          n =>
            n.get("name") !== FILTERS_PRICE && (
              <div
                className="container-section-list__item catalogue-filters-list__item"
                key={n.get("name")}
              >
                <CatalogueFiltersItem
                  data={n}
                  key={n.get("name")}
                  onChange={e =>
                    handleSubmit(values => {
                      let data = values.toJS();
                      const fieldName = e.target.name.split(".");
                      const key = fieldName[0];
                      if (!data[key]) {
                        data[key] = {};
                      }
                      data[key][fieldName[1]] = e.target.checked;
                      onSubmit(data);
                    })(e)
                  }
                />
              </div>
            )
        )}
        {data.map(
          n =>
            n.get("name") === FILTERS_PRICE && (
              <div
                className="container-section-list__item catalogue-filters-list__item"
                key={n.get("name")}
              >
                {priceRange ? (
                  <CatalogueFiltersPrice
                    data={n}
                    key={n.get("name")}
                    currencyCode={currencyCode}
                    onAfterChange={handleSubmit(data => {
                      onSubmit(data);
                    })}
                    onChange={value => change("price", value)}
                    parsedPriceRange={
                      isPriceRangeInitialised(priceRange)
                        ? priceRange
                        : initialValues.get("price").toJS()
                    }
                    defaultValues={initialValues.get("price").toJS()}
                    defaultPriceRange={defaultPriceRange}
                  />
                ) : null}
              </div>
            )
        )}
        <div className="catalogue-filters-reset">
          <Link
            to={url}
            className="catalogue-filters-reset__link"
            onClick={this.onReset}
          >
            {translations.get("catalogueFilters_reset")}
          </Link>
        </div>
        <div
          className="catalogue-filters-apply__filters"
          onClick={onChangeVisible}
        >
          <span className="catalogue-filters-apply__filters-link">
            {translations.get("catalogueFilters_apply")}
          </span>
        </div>

        {!this.state.canUseDOM && (
          <div className="catalogue-filters-buttons">
            <InputButton
              type="submit"
              value={translations.get("catalogueFilters_filter")}
              className="button catalogue-filters-buttons__button"
              loading={submitting}
              disabled={submitting}
            />
          </div>
        )}
      </form>
    );
  }
}

const isPriceRangeInitialised = priceRange =>
  !!(priceRange && priceRange[priceRange.length - 1]);

const selector = formValueSelector("catalogueFiltersForm");

export default connect(state => ({
  priceRange: selector(state, "price")
}))(
  reduxForm({
    form: "catalogueFiltersForm",
    destroyOnUnmount: false,
    enableReinitialize: false
  })(
    withTranslations(CatalogueFiltersForm, [
      "catalogueFilters_reset",
      "catalogueFilters_apply",
      "catalogueFilters_filter"
    ])
  )
);
