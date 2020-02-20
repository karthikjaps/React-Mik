import React from "react";
import PhoneInput from "react-phone-number-input";

const PhoneInputField = props => {
  const {
    type = "text",
    input,
    label,
    className,
    readOnly,
    disabled,
    messages,
    autoComplete,
    border,
    material,
    align,
    step,
    meta: { touched, error },
    isAlwaysOpen,
    defCountry,
    verificationMessage
  } = props;
  return (
    <div
      className={`form-field ${className ? `form-field--${className}` : ""}
      ${messages && messages.length > 0 ? " form-field--invalid" : ""}
      ${material ? "form-field--material" : ""}`}
    >
      <div className="form-field__input-container">
        <PhoneInput
          className={`form-field__input form-field__input--phone 
          ${
            input.value || input.value === 0
              ? "form-field__input--has-value"
              : ""
          } 
          ${border ? "form-field__input--bordered" : ""} ${
            align ? `form-field__input--${align}` : ""
          } ${
            messages && messages.length > 0 ? " form-field__input--invalid" : ""
          }`}
          name="phoneinput"
          value={input.value}
          disabled={disabled}
          country={defCountry.get("country")}
          onChange={value => props.onPhoneChange(event.target.value)}
        />
        <label
          className={`form-field__label form-field__label--phone 
          ${isAlwaysOpen ? "form-field__label--always-open" : ""}
          `}
          htmlFor="phoneinput"
        >
          <span>{label}</span>
        </label>
      </div>
      {messages &&
        messages.map((n, index) => {
          return (
            <span
              key={index}
              className="form-field__error-message form-field__error-message--invalid"
            >
              {n.message}
            </span>
          );
        })}
      <div>
        {verificationMessage && (
          <span className="phone-section__success-message phone-section__success-message--phone-verification">
            {verificationMessage}
          </span>
        )}
      </div>
    </div>
  );
};

export default PhoneInputField;
