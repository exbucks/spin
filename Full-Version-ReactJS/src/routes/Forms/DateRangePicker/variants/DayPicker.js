import React from 'react';
import DatePicker from 'react-date-picker';

import { VERTICAL_ORIENTATION, VERTICAL_SCROLLABLE } from '../constants';

const TestPrevIcon = (props) => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px'
    }}
  >
    Prev
  </span>
);
const TestNextIcon = (props) => (
  <span
    style={{
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
    component: () => <DatePicker />
  },
  {
    key: 'dp-more-than-month',
    menuTitle: 'more than one month',
    component: () => <DatePicker />
  },
  {
    key: 'dp-vertical',
    menuTitle: 'vertical',
    component: () => <DatePicker />
  },
  {
    key: 'dp-vertical-scrollable',
    menuTitle: 'vertically scrollable with 12 months',
    component: () => (
      <div
        style={{
          height: '568px',
          maxWidth: '320px'
        }}
      >
        <DatePicker />
      </div>
    )
  },
  {
    key: 'dp-w-custom-arrows',
    menuTitle: 'with custom arrows',
    component: () => <DatePicker />
  },
  {
    key: 'dp-w-custom-details',
    menuTitle: 'with custom details',
    component: () => <DatePicker />
  },
  {
    key: 'dp-vertical-fixed-container',
    menuTitle: 'vertical with fixed-width container',
    component: () => (
      <div style={{ maxWidth: '400px' }}>
        <DatePicker />
      </div>
    )
  }
];

export default dpPropsVariants;
