import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    Treemap
} = Charts.Recharts;

import { dataTreeMap } from './../../data';

const CustomizedContainer = props => {
    const colors = ['#4EBCEB', '#46BDA8', '#8AAF56', '#E56B44', '#CA3E4C', '#B78FFD'];
    const { root, depth, x, y, width, height, index, payload, rank, name } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: depth < 2 ? colors[Math.floor(index / root.children.length * 6)] : 'none',
                    stroke: '#212121',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {
                depth === 1 ?
                <text
                    x={x + width / 2}
                    y={y + height / 2 + 7}
                    textAnchor="middle"
                    fill="#fff"
                    stroke="none"
                    fontSize={14}
                >
                    {name}
                </text>
                : null
            }
            {
                depth === 1 ?
                <text
                    x={x + 4}
                    y={y + 18}
                    fill="#fff"
                    stroke="none"
                    fontSize={16}
                    fillOpacity={0.9}
                >
                    {index + 1}
                </text>
                : null
            }
        </g>
    );
};


const CustomContentTreeMap = props => (
    <ResponsiveContainer height={ 300 }>
        <Treemap
            isAnimationActive={ false }
            data={dataTreeMap}
            dataKey="size"
            ratio={4/3}
            fill="#8884d8"
            content={ CustomizedContainer }
        />
    </ResponsiveContainer>
);

export default CustomContentTreeMap;
