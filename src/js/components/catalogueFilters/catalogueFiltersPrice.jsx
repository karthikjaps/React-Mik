import React from "react";
import { Field } from "redux-form/immutable";

import RangeField from "../form/rangeField";
import withTranslations from "../../containers/translations/withTranslations";

const CatalogueFiltersPrice = ({
  data,
  onChange,
  onAfterChange,
  parsedPriceRange,
  defaultValues,
  defaultPriceRange,
  translations,
  currencyCode
}) => {
  if (data) {
    return (
      <div className="catalogue-filters-item">
        <input
          id={`catalogue-filters-item-${data.get("type")}`}
          className="catalogue-filters-item__toggle"
          type="checkbox"
          name="catalogue-filters-item__toggle"
        />
        <label
          htmlFor={`catalogue-filters-item-${data.get("type")}`}
          className="catalogue-filters-item__label"
        >
          {data.get("title")}
        </label>
        <div className="catalogue-filters-item__content catalogue-filters-item__content--price">
          {data.get("values") && data.get("values").size && (
            <div className="catalogue-filters-price__subcontent">
              <div className="catalogue-filters-subtitle__price">
                {translations.get("catalogueFilters_price")}
              </div>
              <div className="catalogue-filters-range__price">
                {`${currencyCode} ${parsedPriceRange[0]} - ${currencyCode} ${
                  parsedPriceRange[1]
                }`}
              </div>
              <div className="catalogue-filters-slider__price">
                <Field
                  name="price"
                  label={data.get("title")}
                  component={RangeField}
                  defaultPriceRange={defaultPriceRange}
                  values={parsedPriceRange}
                  defaultValues={defaultValues}
                  onPriceChange={onChange}
                  onAfterChange={onAfterChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default withTranslations(CatalogueFiltersPrice, [
  "catalogueFilters_price"
]);
