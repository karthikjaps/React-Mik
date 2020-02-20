import React from "react";

const ToggleField = props => {
  const {
    input,
    label,
    text,
    readOnly,
    className,
    meta: { touched, error }
  } = props;

  return (
    <div className={`form-field form-field-toggle ${className || ""}`}>
      <label htmlFor={input.name} className="form-field-toggle__input ">
        <div className="form-field-toggle__label">
          <span className="title">{label}</span>
        </div>
        <div className="form-field-toggle__checkbox">
          <div className="form-field-toggle__holder">
            <div className="input toggle-input">
              <input
                type="checkbox"
                id={input.name}
                {...input}
                disabled={readOnly}
              />
              <span className="switch" />
              <span className="toggle">&nbsp;</span>
            </div>
          </div>
        </div>
        <span className="form-field-toggle__title">{text}</span>
      </label>
    </div>
  );
};

export default ToggleField;
