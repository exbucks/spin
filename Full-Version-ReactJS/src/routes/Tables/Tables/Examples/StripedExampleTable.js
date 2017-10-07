import React from 'react';
import faker from 'faker';

import {
    Table,
    Label
} from 'components';

import { Colors } from 'consts';

const StripedExampleTable = () => (
    <Table>
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th>
                    First Name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    E-Mail
                </th>
                <th>
                    Nick
                </th>
                <th>
                    Role
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    { faker.name.firstName() }
                </td>
                <td>
                    { faker.name.lastName() }
                </td>
                <td>
                    { faker.internet.email() }
                </td>
                <td>
                    { faker.internet.userName() }
                </td>
                <td>
                    <Label
                        outline
                        bsStyle='primary'
                        className='text-uppercase'
                    >
                        { faker.name.jobType() }
                    </Label>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>
                    { faker.name.firstName() }
                </td>
                <td>
                    { faker.name.lastName() }
                </td>
                <td>
                    { faker.internet.email() }
                </td>
                <td>
                    { faker.internet.userName() }
                </td>
                <td>
                    <Label
                        outline
                        bsStyle='info'
                        className='text-uppercase'
                    >
                        { faker.name.jobType() }
                    </Label>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>
                    { faker.name.firstName() }
                </td>
                <td>
                    { faker.name.lastName() }
                </td>
                <td>
                    { faker.internet.email() }
                </td>
                <td>
                    { faker.internet.userName() }
                </td>
                <td>
                    <Label
                        outline
                        bsStyle='custom'
                        customColor={ Colors.brandPerfume }
                        className='text-uppercase'
                    >
                        { faker.name.jobType() }
                    </Label>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>
                    { faker.name.firstName() }
                </td>
                <td>
                    { faker.name.lastName() }
                </td>
                <td>
                    { faker.internet.email() }
                </td>
                <td>
                    { faker.internet.userName() }
                </td>
                <td>
                    <Label outline className='text-uppercase'>
                        { faker.name.jobType() }
                    </Label>
                </td>
            </tr>
        </tbody>
    </Table>
);

export default StripedExampleTable;
