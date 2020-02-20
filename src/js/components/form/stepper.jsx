import React from "react";

export const TYPE_MINUS = "minus";
export const TYPE_PLUS = "plus";

class Stepper extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      input,
      label,
      className,
      minValue = 1,
      maxValue,
      change,
      readOnly,
      disabled,
      onButtonClick,
      quantity
    } = this.props;

    return (
      <div className={`form-field ${className || ""}`}>
        <div
          className={`stepper__button stepper__button--minus ${
            !(quantity && quantity > minValue)
              ? "stepper__button--disabled"
              : ""
          }`}
          onClick={() => {
            if (quantity > minValue) {
              const newValue = parseInt(quantity) - 1;
              change(input.name, newValue.toString());
              if (onButtonClick) {
                onButtonClick({ type: TYPE_MINUS, value: newValue });
              }
            }
          }}
        >
          &minus;
        </div>
        <div className="stepper__input-field">
          <input
            type="text"
            className="stepper__input-field__input"
            {...input}
            readOnly={readOnly}
            disabled={disabled}
          />
          <label htmlFor={input.name} className="stepper__input-field__label">
            <span>{label}</span>
          </label>
        </div>
        <div
          className={`stepper__button stepper__button--plus ${
            !(quantity && quantity < maxValue)
              ? "stepper__button--disabled"
              : ""
          }`}
          onClick={() => {
            if (quantity < maxValue) {
              const newValue = parseInt(quantity) + 1;
              change(input.name, newValue.toString());
              if (onButtonClick) {
                onButtonClick({ type: TYPE_PLUS, value: newValue });
              }
            }
          }}
        >
          +
        </div>
      </div>
    );
  }
}

export default Stepper;
