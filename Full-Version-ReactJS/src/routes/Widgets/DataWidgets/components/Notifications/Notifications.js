import React from 'react';
import faker from 'faker';
import _ from 'underscore';
import uid from 'node-uuid';
import { Link } from 'react-router';

import {
    Media,
    CollapsablePanel
} from 'components';

const notificationsList = [
    {
        id: uid.v4(),
        text: faker.hacker.phrase(),
        icon: (
            <span className='fa-stack fa-lg text-danger'>
                <i className='fa fa-circle-thin fa-stack-2x' />
                <i className='fa fa-close fa-stack-1x' />
            </span>
        ),
        date: '10-Aug-2014, 09:39'
    },
    {
        id: uid.v4(),
        text: faker.hacker.phrase(),
        icon: (
            <span className='fa-stack fa-lg text-primary'>
                <i className='fa fa-circle-thin fa-stack-2x' />
                <i className='fa fa-info fa-stack-1x' />
            </span>
        ),
        date: '24-Nov-2015, 09:42'
    },
    {
        id: uid.v4(),
        text: faker.hacker.phrase(),
        icon: (
            <span className='fa-stack fa-lg text-success'>
                <i className='fa fa-circle-thin fa-stack-2x' />
                <i className='fa fa-check fa-stack-1x' />
            </span>
        ),
        date: '10-Dec-2011, 06:07'
    },
    {
        id: uid.v4(),
        text: faker.hacker.phrase(),
        icon: (
            <span className='fa-stack fa-lg text-warning'>
                <i className='fa fa-circle-thin fa-stack-2x' />
                <i className='fa fa-exclamation fa-stack-1x' />
            </span>
        ),
        date: '12-Jan-2014, 05:03'
    },
    {
        id: uid.v4(),
        text: faker.hacker.phrase(),
        icon: (
            <span className='fa-stack fa-lg text-gray-lighter'>
                <i className='fa fa-circle-thin fa-stack-2x' />
                <i className='fa fa-minus fa-stack-1x' />
            </span>
        ),
        date: '09-Feb-2012, 02:05'
    }
];

const Notifications = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Notifications'
        footer={
            <p className='text-center m-y-0'>
                <Link to='/pages/timeline'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        { ...panelProps }
    >
        {
            _.map(notificationsList, notification => (
                <Media key={ notification.id }>
                    <Media.Left>
                        { notification.icon }
                    </Media.Left>
                    <Media.Body>
                        <h6 className='m-t-0'>{ notification.text }</h6>
                        <p className='text-nowrap small m-b-0'>
                            { notification.date }
                        </p>
                    </Media.Body>
                </Media>
            ))
        }
    </CollapsablePanel>
);

export default Notifications;
