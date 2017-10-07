import React from 'react';
import moment from 'moment';

import {
    DateRangePickerWrapper
} from './../components';

import { VERTICAL_ORIENTATION, ANCHOR_RIGHT } from '../constants';

console.log(VERTICAL_ORIENTATION);

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


const drpCalendarPropsVariants = [
    {
        key: 'drpcp-default',
        menuTitle: 'default',
        component: () => (
            <DateRangePickerWrapper autoFocus />
        )
    },
    {
        key: 'drpcp-single-month',
        menuTitle: 'single month',
        component: () => (
            <DateRangePickerWrapper numberOfMonths={1} autoFocus />
        )
    },
    {
        key: 'drpcp-3-months',
        menuTitle: '3 months',
        component: () => (
            <DateRangePickerWrapper numberOfMonths={3} autoFocus />
        )
    },
    {
        key: 'drpcp-achored-right',
        menuTitle: 'anchored right',
        component: () => (
            <DateRangePickerWrapper
                anchorDirection={ANCHOR_RIGHT}
                autoFocus
            />
        )
    },
    {
        key: 'drpcp-vertical',
        menuTitle: 'vertical',
        component: () => (
            <DateRangePickerWrapper
                orientation={VERTICAL_ORIENTATION}
                autoFocus
            />
        )
    },
    {
        key: 'drpcp-vertical-anchor-right',
        menuTitle: 'vertical anchored right',
        component: () => (
            <div style={{ float: 'right' }}>
                <DateRangePickerWrapper
                    orientation={VERTICAL_ORIENTATION}
                    anchorDirection={ANCHOR_RIGHT}
                    autoFocus
                />
            </div>
        )
    },
    {
        key: 'drpcp-horizontal-w-portal',
        menuTitle: 'horizontal with portal',
        component: () => (
            <DateRangePickerWrapper
                withPortal
                autoFocus
            />
        )
    },
    {
        key: 'drpcp-horizontal-w-fullscreen-portal',
        menuTitle: 'horizontal with fullscreen portal',
        component: () => (
            <DateRangePickerWrapper withFullScreenPortal autoFocus />
        )
    },
    {
        key: 'drpcp-vertical-w-fullscreen-portal',
        menuTitle: 'vertical with full screen portal',
        component: () => (
            <DateRangePickerWrapper
                orientation={VERTICAL_ORIENTATION}
                withFullScreenPortal
                autoFocus
            />
        )
    },
    {
        key: 'drpcp-no-autoclose-on-date-selection',
        menuTitle: 'does not autoclose the DayPicker on date selection',
        component: () => (
            <DateRangePickerWrapper
                keepOpenOnDateSelect
                autoFocus
            />
        )
    },
    {
        key: 'drpcp-custom-month-nav',
        menuTitle: 'with custom month navigation',
        component: () => (
            <DateRangePickerWrapper
                navPrev={<TestPrevIcon />}
                navNext={<TestNextIcon />}
                autoFocus
            />
        )
    },
    {
        key: 'drpcp-outside-days-enabled',
        menuTitle: 'with outside days enabled',
        component: () => (
            <DateRangePickerWrapper
                numberOfMonths={1}
                enableOutsideDays
                autoFocus
            />
        )
    },
    {
        key: 'drpcp-month-specified-on-open',
        menuTitle: 'with month specified on open',
        component: () => (
            <DateRangePickerWrapper
                initialVisibleMonth={() => moment('04 2017', 'MM YYYY')}
                autoFocus
            />
        )
    },
];

export default drpCalendarPropsVariants;
