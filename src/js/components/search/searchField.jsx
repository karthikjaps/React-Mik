import React from "react";

const SearchField = props => {
  const {
    type = "text",
    placeholder = "SEARCH",
    input,
    className = ""
  } = props;
  return (
    <div
      className={`search-field ${
        className ? `search-field--${className}` : ""
      }`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className={`search-field__input ${
          className ? `search-field__input--${className}` : ""
        } ${
          input.value || input.value === 0
            ? "search-field__input--has-value"
            : ""
        }`}
        {...input}
      />
    </div>
  );
};

export default SearchField;
