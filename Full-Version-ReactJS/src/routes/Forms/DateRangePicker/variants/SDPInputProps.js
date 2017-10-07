import React from 'react';
import moment from 'moment';

import {
    SingleDatePickerWrapper
} from './../components';

const sdpInputPropsVariants = [
    {
        key: 'sdpip-default',
        menuTitle: 'default',
        component: () => (
            <SingleDatePickerWrapper
                initialDate={moment().add(3, 'days')}
            />
        )
    },
    {
        key: 'sdip-clear-button',
        menuTitle: 'with clear dates button',
        component: () => (
            <SingleDatePickerWrapper
                initialDate={moment().add(3, 'days')}
                showClearDate
            />
        )
    },
    {
        key: 'sdip-reopen-day-picker',
        menuTitle: 'reopens DayPicker on clear dates',
        component: () => (
            <SingleDatePickerWrapper
                initialDate={moment().add(3, 'days')}
                showClearDate
                reopenPickerOnClearDate
            />
        )
    },
    {
        key: 'sdip-custom-display-format',
        menuTitle: 'with custom display format',
        component: () => (
            <SingleDatePickerWrapper
                initialDate={moment().add(3, 'days')}
                displayFormat="MMM D"
            />
        )
    },
    {
        key: 'sdip-screen-reader-message',
        menuTitle: 'with screen reader message',
        component: () => (
            <SingleDatePickerWrapper
                initialDate={moment().add(3, 'days')}
                screenReaderInputMessage="Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc"
            />
        )
    },
];

export default sdpInputPropsVariants;
