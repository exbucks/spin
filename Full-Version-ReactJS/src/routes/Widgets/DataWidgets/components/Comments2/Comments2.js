import React from 'react';
import { faker } from '@faker-js/faker';
import _ from 'underscore';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { Link } from 'react-router-dom';
 
import { CollapsablePanel } from 'components';

const commentsList = [
    {
        id: uuidv4(),
        Sender: {
            Name: `${ faker.person.firstName() } ${ faker.person.lastName() }`,
            Avatar:  faker.image.avatar(),
            CurrentStatus: 'Away'
        },
        DateAdded: moment(faker.date.recent()).toString(),
        Content: faker.lorem.paragraph(),
        Likes: Math.round(Math.random() * 100),
        Replies: [
            {
                id: uuidv4(),
                Sender: {
                    Name: `${ faker.person.firstName() } ${ faker.person.lastName() }`,
                    Avatar:  faker.image.avatar(),
                    CurrentStatus: 'Busy'
                },
                DateAdded: moment(faker.date.recent()).toString(),
                Content: faker.lorem.paragraph(),
                Likes: Math.round(Math.random() * 100),
                Replies: [
                    {
                        id: uuidv4(),
                        Sender: {
                            Name: `${ faker.person.firstName() } ${ faker.person.lastName() }`,
                            Avatar:  faker.image.avatar(),
                            CurrentStatus: 'Busy'
                        },
                        DateAdded: moment(faker.date.recent()).toString(),
                        Content: faker.lorem.paragraph(),
                        Likes: Math.round(Math.random() * 100)
                    }
                ]
            }
        ]
    }
];

// import comments container from other page view
import { Comments } from 'routes/Apps/components';

const Comments2 = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Comments #2'
        footer={
            <p className='text-center m-y-0'>
                <Link to='/apps/tasks-details'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        { ...panelProps }
    >
        <Comments data={ commentsList } />
    </CollapsablePanel>
);

export default Comments2;
