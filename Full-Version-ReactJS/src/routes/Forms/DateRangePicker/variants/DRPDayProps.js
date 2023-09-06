import React from 'react';
import moment from 'moment';

import {
    DateRangePickerWrapper
} from './../components';

const datesList = [
    moment(),
    moment().add(1, 'days'),
    moment().add(3, 'days'),
    moment().add(9, 'days'),
    moment().add(10, 'days'),
    moment().add(11, 'days'),
    moment().add(12, 'days'),
    moment().add(13, 'days'),
];

const drpDayPropsVariants = [
    {
        key: 'drpdp-default',
        menuTitle: 'default',
        component: () => (
            <DateRangePickerWrapper autoFocus />
        )
    },
    {
        key: 'drpdp-minimum-nigths-set',
        menuTitle: 'with minimum nights set',
        component: () => (
            <DateRangePickerWrapper
                minimumNights={3}
                initialStartDate={moment().add(3, 'days')}
                autoFocusEndDate
            />
        )
    },
    {
        key: 'drpdp-allows-single-day-range',
        menuTitle: 'allows single day range',
        component: () => (
            <DateRangePickerWrapper
                minimumNights={0}
                initialStartDate={moment().add(3, 'days')}
                autoFocusEndDate
            />
        )
    },
    {
        key: 'drpdp-allows-all-days-and-past-days',
        menuTitle: 'allows all days, including past days',
        component: () => (
            <DateRangePickerWrapper
                isOutsideRange={() => false}
                autoFocus
            />
        )
    },
    {
        key: 'drpdp-allows-next-two-weeks-only',
        menuTitle: 'allows next two weeks only',
        component: () => (
            <DateRangePickerWrapper autoFocus />
        )
    },
    {
        key: 'drpdp-w-some-blocked-dates',
        menuTitle: 'with some blocked dates',
        component: () => (
            <DateRangePickerWrapper autoFocus />
        )
    },
    {
        key: 'drpdp-w-some-highlighted-dates',
        menuTitle: 'with some highlighted dates',
        component: () => (
            <DateRangePickerWrapper autoFocus />
        )
    },
    {
        key: 'drpdp-blocks-fridays',
        menuTitle: 'blocks fridays',
        component: () => (
            <DateRangePickerWrapper autoFocus />
        )
    },
    {
        key: 'drpdp-w-custom-daily-details',
        menuTitle: 'with custom daily details',
        component: () => (
            <DateRangePickerWrapper
                renderDay={day => day.format('ddd')}
                autoFocus
            />
        )
    },
];

export default drpDayPropsVariants;
