import React from 'react';
import faker from 'faker';

import {
    Table,
    Label
} from 'components';

const ContextualExampleTable = () => (
    <Table>
        <thead>
            <tr>
                <th>
                    Invoice
                </th>
                <th>
                    Name
                </th>
                <th>
                    Date
                </th>
                <th>
                    Price
                </th>
                <th className='text-right'>
                    Status
                </th>
                <th>
                    Country
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className='bg-gray-darker'>
                <td>
                    #{faker.finance.mask()}
                </td>
                <td className='text-white'>
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </td>
                <td>
                    {`${faker.date.month()} 15, ${faker.date.weekday()}, 2015`}
                </td>
                <td>
                    $ 589.00
                </td>
                <td className='text-right'>
                    <Label outline>
                        { faker.finance.accountName() }
                    </Label>
                </td>
                <td>
                    { faker.address.country() }
                </td>
            </tr>

            <tr>
                <td>
                    #{faker.finance.mask()}
                </td>
                <td className='text-white'>
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </td>
                <td>
                    {`${faker.date.month()} 15, ${faker.date.weekday()}, 2015`}
                </td>
                <td>
                    $ 762.00
                </td>
                <td className='text-right'>
                    <Label outline>
                        { faker.finance.accountName() }
                    </Label>
                </td>
                <td>
                    { faker.address.country() }
                </td>
            </tr>

            <tr className='success'>
                <td>
                    #{faker.finance.mask()}
                </td>
                <td>
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </td>
                <td>
                    {`${faker.date.month()} 15, ${faker.date.weekday()}, 2015`}
                </td>
                <td>
                    $ 510.00
                </td>
                <td className='text-right' className='text-right'>
                    <Label outline>
                        { faker.finance.accountName() }
                    </Label>
                </td>
                <td>
                    { faker.address.country() }
                </td>
            </tr>

            <tr>
                <td>
                    #{faker.finance.mask()}
                </td>
                <td className='text-white'>
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </td>
                <td>
                    {`${faker.date.month()} 15, ${faker.date.weekday()}, 2015`}
                </td>
                <td>
                    $ 20.00
                </td>
                <td className='text-right'>
                    <Label outline>
                        { faker.finance.accountName() }
                    </Label>
                </td>
                <td>
                    { faker.address.country() }
                </td>
            </tr>

            <tr className='info'>
                <td>
                    #{faker.finance.mask()}
                </td>
                <td>
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </td>
                <td>
                    {`${faker.date.month()} 15, ${faker.date.weekday()}, 2015`}
                </td>
                <td>
                    $ 509.00
                </td>
                <td className='text-right'>
                    <Label outline>
                        { faker.finance.accountName() }
                    </Label>
                </td>
                <td>
                    { faker.address.country() }
                </td>
            </tr>

            <tr>
                <td>
                    #{faker.finance.mask()}
                </td>
                <td className='text-white'>
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </td>
                <td>
                    {`${faker.date.month()} 15, ${faker.date.weekday()}, 2015`}
                </td>
                <td>
                    $ 762.00
                </td>
                <td className='text-right'>
                    <Label outline>
                        { faker.finance.accountName() }
                    </Label>
                </td>
                <td>
                    { faker.address.country() }
                </td>
            </tr>

            <tr className='warning'>
                <td>
                    #{faker.finance.mask()}
                </td>
                <td>
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </td>
                <td>
                    {`${faker.date.month()} 15, ${faker.date.weekday()}, 2015`}
                </td>
                <td>
                    $ 531.00
                </td>
                <td className='text-right'>
                    <Label outline>
                        { faker.finance.accountName() }
                    </Label>
                </td>
                <td>
                    { faker.address.country() }
                </td>
            </tr>

            <tr>
                <td>
                    #{faker.finance.mask()}
                </td>
                <td className='text-white'>
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </td>
                <td>
                    {`${faker.date.month()} 15, ${faker.date.weekday()}, 2015`}
                </td>
                <td>
                    $ 524.00
                </td>
                <td className='text-right'>
                    <Label outline>
                        { faker.finance.accountName() }
                    </Label>
                </td>
                <td>
                    { faker.address.country() }
                </td>
            </tr>

            <tr className='danger'>
                <td>
                    #{faker.finance.mask()}
                </td>
                <td>
                    {`${faker.name.firstName()} ${faker.name.lastName()}`}
                </td>
                <td>
                    {`${faker.date.month()} 15, ${faker.date.weekday()}, 2015`}
                </td>
                <td>
                    $ 531.00
                </td>
                <td className='text-right'>
                    <Label outline>
                        { faker.finance.accountName() }
                    </Label>
                </td>
                <td>
                    { faker.address.country() }
                </td>
            </tr>
        </tbody>
    </Table>
);

export default ContextualExampleTable;
