import React from 'react';
import { faker } from '@faker-js/faker';

import {
    Table,
    Badge
} from 'components';

const ResponsiveExampleTable = () => (
    <Table responsive>
        <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Name
                </th>
                <th>
                    Amount
                </th>
                <th>
                    Payment
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    #{ faker.finance.mask() }
                </td>
                <td className='text-white'>
                    {`${faker.person.firstName()} ${faker.person.lastName()}`}
                </td>
                <td>
                    $ 895.00
                </td>
                <td>
                    <Badge>
                        { faker.finance.transactionType() }
                    </Badge>
                </td>
            </tr>
            <tr>
                <td>
                    #{ faker.finance.accountNumber() }
                </td>
                <td className='text-white'>
                    {`${faker.person.firstName()} ${faker.person.lastName()}`}
                </td>
                <td>
                    $ 573.00
                </td>
                <td>
                    <Badge>
                        { faker.finance.transactionType() }
                    </Badge>
                </td>
            </tr>
            <tr>
                <td>
                    #{ faker.finance.mask() }
                </td>
                <td className='text-white'>
                    {`${faker.person.firstName()} ${faker.person.lastName()}`}
                </td>
                <td>
                    $ 271.00
                </td>
                <td>
                    <Badge>
                        { faker.finance.transactionType() }
                    </Badge>
                </td>
            </tr>
            <tr>
                <td>
                    #{ faker.finance.accountNumber() }
                </td>
                <td className='text-white'>
                    {`${faker.person.firstName()} ${faker.person.lastName()}`}
                </td>
                <td>
                    $ 357.00
                </td>
                <td>
                    <Badge>
                        { faker.finance.transactionType() }
                    </Badge>
                </td>
            </tr>
        </tbody>
    </Table>
);

export default ResponsiveExampleTable;
