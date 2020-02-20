import React from "react";

const CheckBox = props => {
  const {
    input,
    label,
    readOnly,
    material,
    meta: { touched, error },
    defaultChecked,
    className,
    messages,
    onChange
  } = props;

  return (
    <div
      className={`form-field ${className ? `form-field--${className}` : ""}
      ${messages && messages.length > 0 ? " form-field--invalid" : ""}
      ${material ? "form-field--material" : ""}`}
    >
      <div className="form-field__checkbox checkbox">
        <input
          className="form-field__checkbox__input"
          type="checkbox"
          id={input.name}
          disabled={readOnly}
          defaultChecked={defaultChecked}
          checked={!!input.value}
          onChange={onChange}
          {...input}
        />
        {readOnly && (
          <input name={input.name} type="hidden" value={input.value} />
        )}
        <label className="form-field__checkbox__label" htmlFor={input.name}>
          <span className="form-field__checkbox__label__span">{label}</span>
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

export default CheckBox;
