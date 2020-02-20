import React from "react";

const Radio = props => {
  const {
    className = "",
    messages,
    name,
    options,
    input,
    onChangeRadio,
    material,
    defaultChecked
  } = props;
  return (
    <div
      className={`form-field ${className ? `form-field--${className}` : ""} ${
        material ? "form-field--material" : ""
      }`}
    >
      <div className="radio-group">
        {options &&
          options.map((option, index) => {
            return (
              <div
                key={option.id}
                className={`radio-group__item ${
                  option.disabled ? `radio-group__item--disabled` : ""
                }`}
              >
                <input
                  id={option.id}
                  type="radio"
                  {...input}
                  value={option.value}
                  checked={option.value === input.value}
                  className={`radio-group__item__input ${
                    className
                      ? `radio-group__item__input--${className}`
                      : "radio-group__item__input"
                  } ${
                    option.disabled ? `radio-group__item__input--disabled` : ""
                  }`}
                  disabled={option.disabled}
                  onClick={onChangeRadio}
                />
                <label htmlFor={option.id} className="radio-group__item__label">
                  {option.label}
                </label>
              </div>
            );
          })}
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

export default Radio;
