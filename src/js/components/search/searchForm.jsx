import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import SearchField from "./searchField";
import { getUrl } from "../../../../server/helpers/routing";

const SearchForm = ({
  action,
  method,
  change,
  handleSubmit,
  onSubmit,
  className,
  fieldPlaceholder,
  isLoading
}) => (
  <div className={`search ${className ? `search--${className}` : ""}`}>
    <form
      onSubmit={handleSubmit}
      action={getUrl(action)}
      method={method}
      className={`search__form ${
        className ? `search__form--${className}` : ""
      }`}
    >
      <Field
        name="search"
        className={className}
        component={SearchField}
        placeholder={fieldPlaceholder}
      />
      <input
        type="submit"
        value="Search"
        className={`search__button ${
          className ? `search__button--${className}` : ""
        }`}
      />
      <button
        type="button"
        value="Search"
        onClick={() => {
          change("search", "");
          handleSubmit(() => onSubmit({ search: "" }))();
        }}
        className="search__clear-button"
      />
    </form>
  </div>
);

export default reduxForm({
  form: "searchForm"
})(SearchForm);
