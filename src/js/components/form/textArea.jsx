import React from "react";

const TextArea = props => {
  const {
    input,
    label,
    className = "",
    readOnly,
    disabled,
    messages,
    border,
    material,
    rows,
    meta: { touched, error }
  } = props;
  return (
    <div
      className={`form-field ${className ? `form-field--${className}` : ""}
    ${messages && messages.length > 0 ? " form-field--invalid" : ""}
    ${material ? "form-field--material" : ""}`}
    >
      <div className="form-field__input-container">
        <textarea
          className={`form-field__input ${
            input.value || input.value === 0
              ? "form-field__input--has-value"
              : ""
          } ${border ? "form-field__input--bordered" : ""}`}
          {...input}
          readOnly={readOnly}
          disabled={disabled}
          rows={rows}
        />
        <span className="bar" />
        <label className="form-field__label" htmlFor={input.name}>
          <span>{label}</span>
        </label>
      </div>
      {messages &&
        messages.map((n, index) => {
          return (
            <span key={index} className="form-field__error-message">
              {n.message}
            </span>
          );
        })}
    </div>
  );
};

export default TextArea;
