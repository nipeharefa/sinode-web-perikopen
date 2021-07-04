import * as React from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';


class DatePicker extends React.Component {
  render() {
    return (
      <SingleDatePicker
        date={null}
        onDateChange={this.props.handleDatePick}
        focused={this.props.focused}
        onFocusChange={this.props.onFocusChange}
        id="perikopen_date_picker"
        enableOutsideDays={false}
        numberOfMonths={1}
        withFullScreenPortal={true}
      />
    )
  }
}

DatePicker.propTypes = {
  handleDatePick: PropTypes.func,
  focused: PropTypes.bool,
  onFocusChange: PropTypes.func,
};

export default DatePicker