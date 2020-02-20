import React from "react";

const TextBox = props => {
  const {
    type = "text",
    input,
    label,
    className,
    readOnly,
    disabled,
    messages,
    placeholder,
    autoComplete,
    border,
    material,
    align,
    min,
    max,
    step,
    meta: { touched, error },
    isAlwaysOpen,
    hasButtonInside,
    buttonValue,
    handleButtonClick,
    isVerificationCode
  } = props;
  return (
    <div
      className={`form-field ${className ? `form-field--${className}` : ""}
        ${messages && messages.length > 0 ? " form-field--invalid" : ""}
        ${material ? "form-field--material" : ""}`}
    >
      <div className="form-field__input-container">
        <input
          type={type}
          className={`form-field__input ${
            input.value || input.value === 0
              ? "form-field__input--has-value"
              : ""
          } ${border ? "form-field__input--bordered" : ""} ${
            align ? `form-field__input--${align}` : ""
          }`}
          {...input}
          readOnly={readOnly}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          min={min}
          max={max}
          step={step}
        />
        {hasButtonInside && (
          <input
            type="submit"
            className={`form-field__submit--${className}`}
            value={buttonValue}
            onClick={handleButtonClick}
          />
        )}
        <label
          className={`form-field__label ${
            isAlwaysOpen ? "form-field__label--always-open" : ""
          }`}
          htmlFor={input.name}
        >
          <span>{label}</span>
        </label>
      </div>
      {messages &&
        messages.map((n, index) => {
          return (
            <span
              key={index}
              className={`form-field__error-message ${
                isVerificationCode ? " form-field__error-message--invalid" : ""
              }`}
            >
              {n.message}
            </span>
          );
        })}
    </div>
  );
};

export default TextBox;
