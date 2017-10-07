import React from 'react';
import moment from 'moment';
import { isInclusivelyAfterDay, isSameDay } from 'react-dates';

import {
    SingleDatePickerWrapper
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

const sdpDayPropsVariants = [
    {
        key: 'sdpdp-default',
        menuTitle: 'default',
        component: () => (
            <SingleDatePickerWrapper autoFocus />
        )
    },
    {
        key: 'sdpdp-allows-all-days-and-past-days',
        menuTitle: 'allows all days, including past days',
        component: () => (
            <SingleDatePickerWrapper
                isOutsideRange={() => false}
                autoFocus
            />
        )
    },
    {
        key: 'sdpdp-allows-next-two-weeks-only',
        menuTitle: 'allows next two weeks only',
        component: () => (
            <SingleDatePickerWrapper
                isOutsideRange={day =>
                    !isInclusivelyAfterDay(day, moment()) ||
                    isInclusivelyAfterDay(day, moment().add(2, 'weeks'))
                }
                autoFocus
            />
        )
    },
    {
        key: 'sdpdp-w-some-blocked-dates',
        menuTitle: 'with some blocked dates',
        component: () => (
            <SingleDatePickerWrapper
                isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
                autoFocus
            />
        )
    },
    {
        key: 'sdpdp-w-some-highlighted-dates',
        menuTitle: 'with some highlighted dates',
        component: () => (
            <SingleDatePickerWrapper
                isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
                autoFocus
            />
        )
    },
    {
        key: 'sdpdp-blocks-fridays',
        menuTitle: 'blocks fridays',
        component: () => (
            <SingleDatePickerWrapper
                isDayBlocked={day => moment.weekdays(day.weekday()) === 'Friday'}
                autoFocus
            />
        )
    },
    {
        key: 'sdpdp-w-custom-daily-details',
        menuTitle: 'with custom daily details',
        component: () => (
            <SingleDatePickerWrapper
                numberOfMonths={1}
                renderDay={day => day.format('ddd')}
                autoFocus
            />
        )
    }
];

export default sdpDayPropsVariants;
