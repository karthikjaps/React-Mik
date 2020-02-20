import React from "react";

const SearchBox = props => {
  const {
    type = "text",
    placeholder = "Search",
    input,
    className = ""
  } = props;
  return (
    <div className={`form-field form-field--material ${className || ""}`}>
      <div className="profile-search__field-input">
        <input
          type={type}
          placeholder={placeholder}
          className={`profile-search__input ${
            input.value || input.value === 0
              ? "form-field__input--has-value"
              : ""
          }`}
          {...input}
        />
      </div>
      <span className="bar" />
    </div>
  );
};

export default SearchBox;
