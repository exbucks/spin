import React from 'react';
import {
    Radio,
    Divider
} from 'components';

const SearchPeriod = () => (
    <div>
        <Divider className='m-b-1'>
            Date
        </Divider>
        <div>
            <Radio name='search-period' defaultChecked>
                All
            </Radio>
            <Radio name='search-period'>
                Last 24 Hours
            </Radio>
            <Radio name='search-period'>
                Last Week
            </Radio>
            <Radio name='search-period'>
                Last Month
            </Radio>
        </div>
    </div>
);

export default SearchPeriod;
