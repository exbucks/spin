import React from 'react';
import PropTypes from 'prop-types'
import _ from 'underscore';
import moment from 'moment';
import DatePicker from 'react-date-picker';

import { HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from '../../constants';

const propTypes = {
    // example props for the demo
    autoFocus: PropTypes.bool,
    initialDate: PropTypes.date,
};

const defaultProps = {
    // example props for the demo
    autoFocus: false,
    initialDate: null,

    // input related props
    id: 'date',
    placeholder: 'Date',
    disabled: false,
    required: false,
    screenReaderInputMessage: '',
    showClearDate: false,

    // calendar presentation and interaction related props
    orientation: HORIZONTAL_ORIENTATION,
    anchorDirection: ANCHOR_LEFT,
    horizontalMargin: 0,
    withPortal: false,
    withFullScreenPortal: false,
    initialVisibleMonth: () => moment(),
    numberOfMonths: 2,
    keepOpenOnDateSelect: false,
    reopenPickerOnClearDate: false,

    // navigation related props
    navPrev: null,
    navNext: null,
    onPrevMonthClick() {},
    onNextMonthClick() {},

    // day presentation and interaction related props
    renderDay: null,
    enableOutsideDays: false,
    isDayBlocked: () => false,
    isDayHighlighted: () => {},

    // internationalization props
    displayFormat: () => moment.localeData().longDateFormat('L'),
    monthFormat: 'MMMM YYYY',
    phrases: {
        closeDatePicker: 'Close',
        clearDate: 'Clear Date',
    },
};

class SingleDatePickerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: props.autoFocus,
            date: props.initialDate,
        };

        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDateChange(date) {
        this.setState({ date });
    }

    onFocusChange({ focused }) {
        this.setState({ focused });
    }

    render() {
        const { focused, date } = this.state;

        return (
            <DatePicker
                {...this.props}
                onChange={this.onDateChange}
            />
        );
    }
}

SingleDatePickerWrapper.propTypes = propTypes;
SingleDatePickerWrapper.defaultProps = defaultProps;

export default SingleDatePickerWrapper;
