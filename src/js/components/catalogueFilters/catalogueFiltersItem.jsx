import React from "react";
import { Field } from "redux-form/immutable";

import CheckBox from "../form/checkBox";

const CatalogueFiltersItem = ({ data, onChange }) => {
  if (data) {
    return (
      <div className="catalogue-filters-item">
        <input
          id={`catalogue-filters-item-${data.get("name")}`}
          className="catalogue-filters-item__toggle"
          type="checkbox"
          name="catalogue-filters-item__toggle"
        />
        <label
          htmlFor={`catalogue-filters-item-${data.get("name")}`}
          className="catalogue-filters-item__label"
        >
          {data.get("title")}
        </label>
        <div className="catalogue-filters-item__content">
          {data.get("values") && data.get("values").size && (
            <ul className="catalogue-filters-values__list">
              {data.get("values").map(n => (
                <li
                  className="catalogue-filters-values__list-item"
                  key={n.get("id")}
                >
                  <Field
                    name={`${data.get("name")}.${n.get("id")}`}
                    label={n.get("title")}
                    component={CheckBox}
                    material={true}
                    className="single form-field--catalogue-filter"
                    onChange={onChange}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default CatalogueFiltersItem;
