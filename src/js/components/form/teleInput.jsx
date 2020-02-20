import React from "react";
import ReactTelInput from "react-telephone-input";

const TeleInput = props => {
  const {
    input,
    label,
    messages,
    meta: { touched, error },
    isAlwaysOpen,
    defCountry
  } = props;
  let inputProps = {
    className: "form-field__input",
    readOnly: true
  };
  return (
    <div className="form-field form-field--shipment-address form-field--material">
      <div className="form-field__input-container">
        <ReactTelInput
          inputProps={inputProps}
          defaultCountry={
            defCountry.get("country") && defCountry.get("country").toLowerCase()
          }
          autoFormat={false}
          {...input}
          preferredCountries={["ae", "sa", "bh", "kw", "qa"]}
          classNames="form-field__input-container phone_container"
        />
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
            <span key={index} className="form-field__error-message">
              {n.message}
            </span>
          );
        })}
    </div>
  );
};

export default TeleInput;
