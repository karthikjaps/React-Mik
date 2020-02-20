import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";

class DateRangePickerWrapper extends React.PureComponent {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = "startDate";
    } else if (props.autoFocusEndDate) {
      focusedInput = "endDate";
    }

    this.state = {
      canUseDOM: false,
      focusedInput,
      startDate: props.startDate,
      endDate: props.endDate
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.startDate !== this.props.startDate) {
      this.setState({ startDate: this.props.startDate });
    }
    if (prevProps.endDate !== this.props.endDate) {
      this.setState({ endDate: this.props.endDate });
    }
  }

  componentDidMount() {
    // set the moment to user the browser's locale
    moment.locale(navigator.userLanguage || navigator.language);
  }

  render() {
    const {
      orientation,
      onHandleChange,
      customArrowIcon,
      hideKeyboardShortcutsPanel,
      label
    } = this.props;

    return (
      <DateRangePicker
        withPortal={true}
        hideKeyboardShortcutsPanel={hideKeyboardShortcutsPanel}
        customArrowIcon={customArrowIcon}
        orientation={orientation}
        monthFormat={"MMMM YYYY"}
        startDateId="startDate"
        endDateId="endDate"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={data => {
          this.onDatesChange(data);
          onHandleChange(data);
        }}
        onFocusChange={this.onFocusChange}
        focusedInput={this.state.focusedInput}
        isOutsideRange={() => false}
        displayFormat="DD/MM/YYYY"
      />
    );
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({
      startDate: startDate,
      endDate: endDate
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }
}

export default DateRangePickerWrapper;
