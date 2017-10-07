import React from 'react';
import moment from 'moment';

import {
    SingleDatePickerWrapper
} from './../components';

import { VERTICAL_ORIENTATION, ANCHOR_RIGHT } from '../constants';

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

const sdpCalendarPropsVariants = [
    {
        key: 'sdpcp-default',
        menuTitle: 'default',
        component: () => (
            <SingleDatePickerWrapper autoFocus />
        )
    },
    {
        key: 'sdpcp-single-month',
        menuTitle: 'single month',
        component: () => (
            <SingleDatePickerWrapper
                numberOfMonths={1}
                autoFocus
            />
        )
    },
    {
        key: 'sdpcp-achored-right',
        menuTitle: 'anchored right',
        component: () => (
            <SingleDatePickerWrapper
                anchorDirection={ANCHOR_RIGHT}
                autoFocus
            />
        )
    },
    {
        key: 'sdpcp-vertical',
        menuTitle: 'vertical',
        component: () => (
            <SingleDatePickerWrapper
                orientation={VERTICAL_ORIENTATION}
                autoFocus
            />
        )
    },
    {
        key: 'sdpcp-horizontal-w-portal',
        menuTitle: 'horizontal with portal',
        component: () => (
            <SingleDatePickerWrapper
                withPortal
                autoFocus
            />
        )
    },
    {
        key: 'sdpcp-horizontal-w-fullscreen-portal',
        menuTitle: 'horizontal with fullscreen portal',
        component: () => (
            <SingleDatePickerWrapper withFullScreenPortal autoFocus />
        )
    },
    {
        key: 'sdpcp-vertical-w-fullscreen-portal',
        menuTitle: 'vertical with full screen portal',
        component: () => (
            <SingleDatePickerWrapper
                orientation={VERTICAL_ORIENTATION}
                withFullScreenPortal
                autoFocus
            />
        )
    },
    {
        key: 'sdpcp-no-autoclose-on-date-selection',
        menuTitle: 'does not autoclose the DayPicker on date selection',
        component: () => (
            <SingleDatePickerWrapper
                keepOpenOnDateSelect
                autoFocus
            />
        )
    },
    {
        key: 'sdpcp-month-specified-on-open',
        menuTitle: 'with month specified on open',
        component: () => (
            <SingleDatePickerWrapper
                initialVisibleMonth={() => moment('01 2017', 'MM YYYY')}
                autoFocus
            />
        )
    },
    {
        key: 'sdpcp-w-custom-arrows',
        menuTitle: 'with custom arrows',
        component: () => (
            <SingleDatePickerWrapper
                navPrev={<TestPrevIcon />}
                navNext={<TestNextIcon />}
                autoFocus
            />
        )
    },
    {
        key: 'sdpcp-w-outside-days-enabled',
        menuTitle: 'with outside days enabled',
        component: () => (
            <SingleDatePickerWrapper
                numberOfMonths={1}
                enableOutsideDays
                autoFocus
            />
        )
    }
];

export default sdpCalendarPropsVariants;
