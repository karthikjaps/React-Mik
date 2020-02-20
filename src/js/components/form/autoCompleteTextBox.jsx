import React from "react";

import Awesomplete from "awesomplete";
import ExecutionEnvironment from "exenv";

// This extends PureComponent instead of functional component because we need to use componentDidMount
class AutoCompleteTextBox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      canUseDOM: false,
      initialized: false
    };

    this.init = this.init.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.data.length !== this.props.data.length ||
      prevState.canUseDOM !== this.state.canUseDOM
    ) {
      if (
        !this.state.initialized &&
        this.state.canUseDOM &&
        this.props.data &&
        this.props.data.length
      ) {
        this.init(this.props.data, this.props.isCommaSeparated);
      }
    }
  }

  componentDidMount() {
    this.setState({
      canUseDOM: ExecutionEnvironment.canUseDOM
    });

    if (!this.state.initialized && this.state.canUseDOM) {
      this.init(this.props.data, this.props.isCommaSeparated);
    }
  }

  render() {
    const {
      type = "text",
      input,
      label,
      className,
      readOnly,
      disabled,
      messages,
      meta: { touched, error },
      material,
      border,
      align
    } = this.props;

    return (
      <div
        className={`form-field autocomplete ${
          className ? `form-field--${className}` : ""
        }
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
            } ${border ? "form-field__input--bordered" : ""}`}
            {...input}
            readOnly={readOnly}
            disabled={disabled}
            data-multiple
            ref={n => {
              this.element = n;
            }}
          />
          <label className={`form-field__label`} htmlFor={input.name}>
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
  }

  init(data, isCommaSeparated) {
    this.setState({ initialized: true });
    const list = data.filter(n => n);

    if (isCommaSeparated) {
      new Awesomplete(this.element, {
        list: list,
        filter: function(text, input) {
          return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
        },
        item: function(text, input) {
          return Awesomplete.ITEM(text, input.match(/[^,]*$/)[0]);
        },
        replace: function(text) {
          const before = this.input.value.match(/^.+,\s*|/)[0];
          this.input.value = before + text + ", ";
        },
        minChars: 0
      });
    } else {
      new Awesomplete(this.element, {
        list: list,
        replace: function(text) {
          this.input.value = text;
        },
        minChars: 0
      });
    }
  }
}

export default AutoCompleteTextBox;
