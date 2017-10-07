import React from 'react';
import faker from 'faker';

import {
    Table,
    ButtonGroup,
    Button,
    SlimProgressBar
} from 'components';

const BorderedExampleTable = () => (
    <Table bordered>
        <thead>
            <tr>
                <th>
                    Ticket
                </th>
                <th>
                    Completion
                </th>
                <th>
                    Create
                </th>
                <th>
                    Deadline
                </th>
                <th>
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='text-white'>
                    { faker.company.catchPhrase() }
                </td>
                <td>
                    <SlimProgressBar now={ 60 } />
                </td>
                <td>
                    { `${faker.date.month()} 15, ${faker.date.weekday()}, 2015` }
                </td>
                <td>
                    { `${faker.date.month()} 28, ${faker.date.weekday()}, 2016` }
                </td>
                <td>
                    <ButtonGroup>
                        <Button>
                            <i className='fa fa-clone'></i>
                        </Button>
                        <Button>
                            <i className='fa fa-close'></i>
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>

            <tr>
                <td className='text-white'>
                    { faker.company.catchPhrase() }
                </td>
                <td>
                    <SlimProgressBar now={ 15 } />
                </td>
                <td>
                    { `${faker.date.month()} 15, ${faker.date.weekday()}, 2015` }
                </td>
                <td>
                    { `${faker.date.month()} 28, ${faker.date.weekday()}, 2016` }
                </td>
                <td>
                    <ButtonGroup>
                        <Button>
                            <i className='fa fa-clone'></i>
                        </Button>
                        <Button>
                            <i className='fa fa-close'></i>
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>

            <tr>
                <td className='text-white'>
                    { faker.company.catchPhrase() }
                </td>
                <td>
                    <SlimProgressBar now={ 90 } />
                </td>
                <td>
                    { `${faker.date.month()} 15, ${faker.date.weekday()}, 2015` }
                </td>
                <td>
                    { `${faker.date.month()} 28, ${faker.date.weekday()}, 2016` }
                </td>
                <td>
                    <ButtonGroup>
                        <Button>
                            <i className='fa fa-clone'></i>
                        </Button>
                        <Button>
                            <i className='fa fa-close'></i>
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>

            <tr>
                <td className='text-white'>
                    { faker.company.catchPhrase() }
                </td>
                <td>
                    <SlimProgressBar now={ 0 } />
                </td>
                <td>
                    { `${faker.date.month()} 15, ${faker.date.weekday()}, 2015` }
                </td>
                <td>
                    { `${faker.date.month()} 28, ${faker.date.weekday()}, 2016` }
                </td>
                <td>
                    <ButtonGroup>
                        <Button>
                            <i className='fa fa-clone'></i>
                        </Button>
                        <Button>
                            <i className='fa fa-close'></i>
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        </tbody>
    </Table>
);

export default BorderedExampleTable;
