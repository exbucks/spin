import React from 'react';
import faker from 'faker';

import {
    Table,
    Charts
} from 'components';

import { Colors } from 'consts';

const HoverExampleTable = () => (
    <Table hover>
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th>
                    Product Name
                </th>
                <th>
                    Stats
                </th>
                <th>
                    Last Month
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td className='text-white'>
                    { faker.commerce.productName() }
                </td>
                <td>
                    <Charts.SparklineLine
                        width={ 100 }
                        height={ 16 }
                        data={ [5,3,9,6,5,9,7,3,5,2] }
                        limit={ 10 }
                        color={ Colors.brandPrimary }
                    />
                </td>
                <td className='text-danger'>
                    <i className='fa fa-caret-down'></i>
                    <span> 27.87%</span>
                </td>
            </tr>

            <tr>
                <td>2</td>
                <td className='text-white'>
                    { faker.commerce.productName() }
                </td>
                <td>
                    <Charts.SparklineLine
                        width={ 100 }
                        height={ 16 }
                        data={ [5,3,2,-1,-3,-2,2,3,5,2] }
                        limit={ 10 }
                        color={ Colors.brandWarning }
                    />
                </td>
                <td className='text-success'>
                    <i className='fa fa-caret-up'></i>
                    <span> 54.09%</span>
                </td>
            </tr>

            <tr>
                <td>3</td>
                <td className='text-white'>
                    { faker.commerce.productName() }
                </td>
                <td>
                    <Charts.SparklineLine
                        width={ 100 }
                        height={ 16 }
                        data={ [0,-3,-6,-4,-5,-4,-7,-3,-5,-2] }
                        limit={ 10 }
                        color={ Colors.brandSuccess }
                    />
                </td>
                <td className='text-danger'>
                    <i className='fa fa-caret-down'></i>
                    <span> 0.17%</span>
                </td>
            </tr>

            <tr>
                <td>4</td>
                <td className='text-white'>
                    { faker.commerce.productName() }
                </td>
                <td>
                    <Charts.SparklineLine
                        width={ 100 }
                        height={ 16 }
                        data={ [5,3,2,-1,-3,-2,2,3,5,2] }
                        limit={ 10 }
                        color={ Colors.brandDanger }
                    />
                </td>
                <td className='text-success'>
                    <i className='fa fa-caret-up'></i>
                    <span> 100.98%</span>
                </td>
            </tr>
        </tbody>
    </Table>
);

export default HoverExampleTable;
