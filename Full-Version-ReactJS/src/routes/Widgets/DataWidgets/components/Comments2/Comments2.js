import React from 'react';
import faker from 'faker';
import _ from 'underscore';
import uid from 'node-uuid';
import numeral from 'numeral';
import moment from 'moment';
import { Link } from 'react-router';
 
import { CollapsablePanel } from 'components';

import classes from './Comments2.scss';

const commentsList = [
    {
        id: uid.v4(),
        Sender: {
            Name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            Avatar:  faker.image.avatar(),
            CurrentStatus: 'Away'
        },
        DateAdded: moment(faker.date.recent()).toString(),
        Content: faker.lorem.paragraph(),
        Likes: Math.round(Math.random() * 100),
        Replies: [
            {
                id: uid.v4(),
                Sender: {
                    Name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
                    Avatar:  faker.image.avatar(),
                    CurrentStatus: 'Busy'
                },
                DateAdded: moment(faker.date.recent()).toString(),
                Content: faker.lorem.paragraph(),
                Likes: Math.round(Math.random() * 100),
                Replies: [
                    {
                        id: uid.v4(),
                        Sender: {
                            Name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
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
