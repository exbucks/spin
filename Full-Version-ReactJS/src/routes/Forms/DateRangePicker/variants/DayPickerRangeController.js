import React from 'react';
import moment from 'moment';
import { isInclusivelyAfterDay, isSameDay } from 'react-dates';

import {
    DayPickerRangeControllerWrapper
} from './../components';

const TestPrevIcon = () => (
    <span
        style={{
            border: '1px solid #dce0e0',
            backgroundColor: '#fff',
            color: '#484848',
            padding: '3px',
        }}
    >
        Prev
    </span>
);

const TestNextIcon = () => (
    <span
        style={{
            border: '1px solid #dce0e0',
            backgroundColor: '#fff',
            color: '#484848',
            padding: '3px',
        }}
    >
        Next
    </span>
);

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

const action = functionName => {
    console.log(`DayPickerRangeController: triggered action - ${ functionName }`);
}

const sdpDayPropsVariants = [
    {
        key: 'dprc-default',
        menuTitle: 'default',
        component: () => (
            <DayPickerRangeControllerWrapper
                onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
            />
        )
    },
    {
        key: 'dprc-w-custom-inputs',
        menuTitle: 'with-custom-input',
        component: () => (
            <DayPickerRangeControllerWrapper
                onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                showInputs
            />
        )
    },
    {
        key: 'dprc-non-english',
        menuTitle: 'non-english locale',
        component: () => {
            moment.locale('zh-cn');
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    monthFormat="YYYY[年]MMMM"
                />
            );
        }
    },
    {
        key: 'dprc-single-month',
        menuTitle: 'single month',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    numberOfMonths={1}
                />
            );
        }
    },
    /*
    {
        key: 'dprc-3-months',
        menuTitle: '3 months',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    numberOfMonths={3}
                />
            );
        }
    },
    */
    {
        key: 'dprc-vertical',
        menuTitle: 'vertical',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    orientation={VERTICAL_ORIENTATION}
                />
            );
        }
    },
    {
        key: 'dprc-w-custom-month-navigation',
        menuTitle: 'with custom month navigation',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    navPrev={<TestPrevIcon />}
                    navNext={<TestNextIcon />}
                />
            );
        }
    },
    {
        key: 'dprc-w-outside-days-enabled',
        menuTitle: 'with outside days enabled',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    numberOfMonths={1}
                    enableOutsideDays
                />
            );
        }
    },
    {
        key: 'dprc-month-specified-on-open',
        menuTitle: 'with month specified on open',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    initialVisibleMonth={() => moment('04 2017', 'MM YYYY')}
                />
            );
        }
    },
    {
        key: 'dprc-minimum-nigths-set',
        menuTitle: 'with minimum nights set',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    minimumNights={3}
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    initialStartDate={moment().add(3, 'days')}
                    autoFocusEndDate
                />
            );
        }
    },
    {
        key: 'dprc-allows-single-day-range',
        menuTitle: 'allows single day range',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    minimumNights={0}
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    initialStartDate={moment().add(3, 'days')}
                    autoFocusEndDate
                />
            );
        }
    },
    {
        key: 'dprc-allows-all-days-and-past-days',
        menuTitle: 'allows all days, including past days',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    isOutsideRange={() => false}
                />
            );
        }
    },
    {
        key: 'dprc-allows-next-two-weeks-only',
        menuTitle: 'allows next two weeks only',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    isOutsideRange={day =>
                        !isInclusivelyAfterDay(day, moment()) ||
                        isInclusivelyAfterDay(day, moment().add(2, 'weeks'))
                    }
                />
            );
        }
    },
    {
        key: 'dprc-w-some-blocked-dates',
        menuTitle: 'with some blocked dates',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
                />
            );
        }
    },
    {
        key: 'dprc-w-some-highlighted-dates',
        menuTitle: 'with some highlighted dates',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
                />
            );
        }
    },
    {
        key: 'dprc-blocks-fridays',
        menuTitle: 'blocks fridays',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    isDayBlocked={day => moment.weekdays(day.weekday()) === 'Friday'}
                />
            );
        }
    },
    {
        key: 'dprc-w-custom-daily-details',
        menuTitle: 'with custom daily details',
        component: () => {
            return (
                <DayPickerRangeControllerWrapper
                    onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
                    onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
                    onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
                    renderDay={day => day.format('ddd')}
                />
            );
        }
    },
];

export default sdpDayPropsVariants;
