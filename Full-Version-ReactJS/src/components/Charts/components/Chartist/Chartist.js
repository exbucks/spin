import React from 'react';
import ChartistGraph from 'react-chartist';
import _ from 'underscore';

require('@owczar/spin-template/dist/styles/plugins.min.css');

const Chartist = (props) => (
    <ChartistGraph {...props}></ChartistGraph>
);

export default Chartist;
