import React from "react";

const DropDown = props => {
  const {
    input,
    label,
    className,
    disabled,
    children,
    messages,
    meta: { touched, error },
    material,
    defaultValue
  } = props;
  return (
    <div
      className={`form-field ${className ? `form-field--${className}` : ""}
      ${messages && messages.length > 0 ? " form-field--invalid" : ""}
      ${material ? "form-field--material" : ""}`}
    >
      <select
        className="form-field__input"
        defaultValue={defaultValue}
        {...input}
        disabled={disabled}
      >
        {children}
      </select>
      {label && !material && (
        <label className="form-field__label" htmlFor={input.name}>
          <span>{label}</span>
        </label>
      )}
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

export default DropDown;
