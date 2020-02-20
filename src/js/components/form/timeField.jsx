import React from "react";

const TimeField = ({
  input,
  label,
  messages,
  className,
  border,
  isReadOnly = false,
  meta: { touched, error }
}) => (
  <div
    className={`form-field form-field--time ${className || ""}${
      error ? " form-field--invalid" : ""
    }`}
  >
    <div className="form-field__input-container">
      <input
        {...input}
        type="time"
        placeholder={label}
        readOnly={isReadOnly}
        className={`form-field__input form-field--time__input ${
          input.value || input.value === 0 ? "form-field__input--has-value" : ""
        } ${border ? "form-field__input--bordered" : ""}`}
      />
    </div>
    {touched &&
      (error && <span className="form-field__error-message">{error}</span>)}
  </div>
);

export default TimeField;
