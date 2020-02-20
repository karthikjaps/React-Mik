import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";

class SingleDatePickerWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: props.initialDate,
      focused: false,
      isDateChanged: false
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({ date });
    this.props.change(this.props.input.name, date);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.initialDate !== this.props.initialDate) {
      if (!this.state.isDateChanged) {
        this.setState({ date: this.props.initialDate });
      }
    }
  }

  render() {
    const { input, label, className, messages } = this.props;

    return (
      <div
        className={`form-field ${className ? `form-field--${className}` : ""}
      ${messages && messages.length > 0 ? " form-field--invalid" : ""}
      ${"form-field--material"}`}
      >
        <div className="form-field__input-container">
          <SingleDatePicker
            withPortal={true}
            hideKeyboardShortcutsPanel={true}
            date={this.state.date}
            onDateChange={data => {
              this.setState({ isDateChanged: true });
              this.handleDateChange(data);
            }}
            displayFormat="DD/MM/YYYY"
            monthFormat={"MMMM YYYY"}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            showClearDate={false}
            numberOfMonths={1}
            readOnly={true}
          />
          <label
            htmlFor={input.name}
            className="form-field__label form-field__label--date-picker"
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
  }
}

export default SingleDatePickerWrapper;
