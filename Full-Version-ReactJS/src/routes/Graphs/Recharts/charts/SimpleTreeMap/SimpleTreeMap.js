import React from 'react';
import {
    Charts
} from 'components';

const {
    ResponsiveContainer,
    Treemap
} = Charts.Recharts;

import { dataTreeMap } from './../../data';

const SimpleTreeMap = props => (
    <ResponsiveContainer height={ 300 }>
        <Treemap
            isAnimationActive={ false }
            data={dataTreeMap}
            dataKey="size"
            ratio={4/3}
            fill="#50BEEA"
        />
    </ResponsiveContainer>
);

export default SimpleTreeMap;
