import React from 'react';
import moment from 'moment';

import {
    DateRangePickerWrapper
} from './../components';

const TestCustomInputIcon = () => (
    <span
        style={{
            border: '1px solid #dce0e0',
            backgroundColor: '#fff',
            color: '#484848',
            padding: '3px',
        }}
    >
        C
    </span>
);

const TestCustomArrowIcon = () => (
    <span
        style={{
            border: '1px solid #dce0e0',
            backgroundColor: '#fff',
            color: '#484848',
            padding: '3px',
        }}
    >
        {'--->'}
    </span>
);

const drpInputPropsVariants = [
    {
        key: 'drpip-default',
        menuTitle: 'default',
        component: () => (
            <DateRangePickerWrapper
                initialStartDate={moment().add(3, 'days')}
                initialEndDate={moment().add(10, 'days')}
            />
        )
    },
    {
        key: 'drpip-clear-button',
        menuTitle: 'with clear dates button',
        component: () => (
            <DateRangePickerWrapper
                initialStartDate={moment().add(3, 'days')}
                initialEndDate={moment().add(10, 'days')}
                showClearDates
            />
        )
    },
    {
        key: 'drpip-reopen-day-picker',
        menuTitle: 'reopens DayPicker on clear dates',
        component: () => (
            <DateRangePickerWrapper
                initialStartDate={moment().add(3, 'days')}
                initialEndDate={moment().add(10, 'days')}
                showClearDates
                reopenPickerOnClearDates
            />
        )
    },
    {
        key: 'drpip-custom-display-format',
        menuTitle: 'with custom display format',
        component: () => (
            <DateRangePickerWrapper
                initialStartDate={moment().add(3, 'days')}
                initialEndDate={moment().add(10, 'days')}
                displayFormat="MMM D"
            />
        )
    },
    {
        key: 'drpip-show-calendar-icon',
        menuTitle: 'with custom show calendar icon',
        component: () => (
            <DateRangePickerWrapper
                initialStartDate={moment().add(3, 'days')}
                initialEndDate={moment().add(10, 'days')}
                customInputIcon={<TestCustomInputIcon />}
            />
        )
    },
    {
        key: 'drpip-custom-arrow-icon',
        menuTitle: 'with custom arrow icon',
        component: () => (
            <DateRangePickerWrapper
                initialStartDate={moment().add(3, 'days')}
                initialEndDate={moment().add(10, 'days')}
                customArrowIcon={<TestCustomArrowIcon />}
            />
        )
    },
    {
        key: 'drpip-screen-reader-message',
        menuTitle: 'with screen reader message',
        component: () => (
            <DateRangePickerWrapper
                initialStartDate={moment().add(3, 'days')}
                initialEndDate={moment().add(10, 'days')}
                screenReaderInputMessage="Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc"
            />
        )
    },
];

export default drpInputPropsVariants;
