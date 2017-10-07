import React from 'react';
import faker from 'faker';

import {
    Table,
    ButtonGroup,
    Button
} from 'components';

const CondensedExampleTable = () => (
    <Table condensed>
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
                <th>
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='text-white'>
                    <a href="javascript:;">
                        Invoice #
                        { faker.finance.mask() }
                    </a>
                </td>
                <td>
                    { `${faker.name.firstName()} ${faker.name.lastName()}` }
                </td>
                <td>
                    $ 145.00
                </td>
                <td>
                    { `${faker.date.month()} 15, ${faker.date.weekday()}, 2015` }
                </td>
            </tr>
            <tr>
                <td className='text-white'>
                    <a href="javascript:;">
                        Invoice #
                        { faker.finance.mask() }
                    </a>
                </td>
                <td>
                    { `${faker.name.firstName()} ${faker.name.lastName()}` }
                </td>
                <td>
                    $ 821.00
                </td>
                <td>
                    { `${faker.date.month()} 15, ${faker.date.weekday()}, 2015` }
                </td>
            </tr>
            <tr>
                <td className='text-white'>
                    <a href="javascript:;">
                        Invoice #
                        { faker.finance.mask() }
                    </a>
                </td>
                <td>
                    { `${faker.name.firstName()} ${faker.name.lastName()}` }
                </td>
                <td>
                    $ 900.00
                </td>
                <td>
                    { `${faker.date.month()} 15, ${faker.date.weekday()}, 2015` }
                </td>
            </tr>
            <tr>
                <td className='text-white'>
                    <a href="javascript:;">
                        Invoice #
                        { faker.finance.mask() }
                    </a>
                </td>
                <td>
                    { `${faker.name.firstName()} ${faker.name.lastName()}` }
                </td>
                <td>
                    $ 5.00
                </td>
                <td>
                    { `${faker.date.month()} 15, ${faker.date.weekday()}, 2015` }
                </td>
            </tr>
        </tbody>
    </Table>
);

export default CondensedExampleTable;
