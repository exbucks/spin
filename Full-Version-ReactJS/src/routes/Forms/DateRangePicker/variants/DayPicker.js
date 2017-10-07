import React from 'react';
import moment from 'moment';
import { DayPicker } from 'react-dates';

import {
    VERTICAL_ORIENTATION,
    VERTICAL_SCROLLABLE,
} from '../constants';

const TestPrevIcon = props => (
    <span style={{
        border: '1px solid #dce0e0',
        backgroundColor: '#fff',
        color: '#484848',
        padding: '3px'
        }}
    >
        Prev
    </span>
);
const TestNextIcon = props => (
    <span style={{
        border: '1px solid #dce0e0',
        backgroundColor: '#fff',
        color: '#484848',
        padding: '3px'
        }}
    >
        Next
    </span>
);

const dpPropsVariants = [
    {
        key: 'dp-default',
        menuTitle: 'default',
        component: () => (
            <DayPicker />
        )
    },
    {
        key: 'dp-more-than-month',
        menuTitle: 'more than one month',
        component: () => (
            <DayPicker numberOfMonths={2} />
        )
    },
    {
        key: 'dp-vertical',
        menuTitle: 'vertical',
        component: () => (
            <DayPicker
                numberOfMonths={2}
                orientation={VERTICAL_ORIENTATION}
            />
        )
    },
    {
        key: 'dp-vertical-scrollable',
        menuTitle: 'vertically scrollable with 12 months',
        component: () => (
            <div style={{
                height: '568px',
                maxWidth: '320px',
            }}>
                <DayPicker
                    numberOfMonths={12}
                    orientation={VERTICAL_SCROLLABLE}
                />
            </div>
        )
    },
    {
        key: 'dp-w-custom-arrows',
        menuTitle: 'with custom arrows',
        component: () => (
            <DayPicker
                navPrev={<TestPrevIcon />}
                navNext={<TestNextIcon />}
            />
        )
    },
    {
        key: 'dp-w-custom-details',
        menuTitle: 'with custom details',
        component: () => (
            <DayPicker
                renderDay={day => (day.day() % 6 === 5 ? '😻' : day.format('D'))}
            />
        )
    },
    {
        key: 'dp-vertical-fixed-container',
        menuTitle: 'vertical with fixed-width container',
        component: () => (
            <div style={{ maxWidth: '400px' }}>
                <DayPicker
                    numberOfMonths={2}
                    orientation={VERTICAL_ORIENTATION}
                />
            </div>
        )
    },
];

export default dpPropsVariants;
