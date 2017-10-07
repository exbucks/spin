import React from 'react';
import faker from 'faker';
import { CollapsablePanel } from 'components';
import { Link } from 'react-router';

import { Chat } from 'routes/Apps/components';

const messages = [
    {
        User: {
            Name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            Avatar: faker.image.avatar(),
            Status: 'Away'
        },
        Date: faker.date.recent(),
        Content: faker.lorem.sentences(),
        Active: 0
    },
    {
        User: {
            Name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            Avatar: faker.image.avatar(),
            Status: 'Online'
        },
        Date: faker.date.recent(),
        Content: faker.lorem.sentences(),
        Active: 1
    },
    {
        User: {
            Name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            Avatar: faker.image.avatar(),
            Status: 'Online'
        },
        Date: faker.date.recent(),
        Content: faker.lorem.sentences(),
        Active: 1
    },
    {
        User: {
            Name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            Avatar: faker.image.avatar(),
            Status: 'Busy'
        },
        Date: faker.date.recent(),
        Content: faker.lorem.sentences(),
        Active: 0
    },
];

const ChatWidget = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Chat'
        footer={
            <p className='text-center m-y-0'>
                <Link to='/apps/chat'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        { ...panelProps }
    >
        <Chat messages={ messages } />
    </CollapsablePanel>
);

export default ChatWidget;
