import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    Tooltip,
    Legend,
    YAxis,
    XAxis
} = Charts.Recharts;

import { dataPercentArea } from './../../data';

import classes from './percentAreaChart.scss';

const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
};

const renderTooltipContent = (o) => {
    const { payload, label } = o;
    const total = payload.reduce((result, entry) => (result + entry.value), 0);

    return (
        <div className={ classes.customizedTooltipContent }>
            <p className="total">{`${label} (Total: ${total})`}</p>
            <ul className="list">
                {
                    payload.map((entry, index) => (
                        <li key={`item-${index}`} style={{color: entry.color}}>
                        {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

const PercentAreaChart = props => (
    <ResponsiveContainer height={ 300 }>
        <AreaChart
            data={ dataPercentArea }
            stackOffset="expand"
            margin={{top: 20, right: 30, left: 20, bottom: 5}}
        >
            <XAxis dataKey="month" />
            <YAxis tickFormatter={toPercent} />
            <CartesianGrid />
            <Tooltip content={ renderTooltipContent } />
            <Legend  />
            <Area type='monotone' dataKey='a' stackId="1" stroke='#47B4F3' fill='RGBA(72, 182, 241, 0.3)' />
            <Area type='monotone' dataKey='b' stackId="1" stroke='#41BDA8' fill='RGBA(65, 189, 168, 0.3)' />
            <Area type='monotone' dataKey='c' stackId="1" stroke='#86B34D' fill='RGBA(134, 179, 77, 0.3)' />
        </AreaChart>
    </ResponsiveContainer>
);

export default PercentAreaChart;
