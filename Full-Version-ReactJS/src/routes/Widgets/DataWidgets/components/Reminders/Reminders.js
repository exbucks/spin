import React from 'react';
import faker from 'faker';
import _ from 'underscore';
import uid from 'node-uuid';
import { Link } from 'react-router';

import {
    Media,
    ListGroup,
    ListGroupItem,
    CollapsablePanel
} from 'components';

import { Colors } from 'consts';

import classes from './Reminders.scss';

const RemindersList = [
    {
        id: uid.v4(),
        icon: (
            <span className='fa-stack fa-lg'>
                <i className='fa fa-square fa-stack-2x text-primary'></i>
                <i className='fa fa-shopping-basket fa-stack-1x fa-inverse'></i>
            </span>
        ),
        count: 7,
        title: 'Pending Orders'
    },
    {
        id: uid.v4(),
        icon: (
            <span className='fa-stack fa-lg'>
                <i className='fa fa-square fa-stack-2x text-danger'></i>
                <i className='fa fa-support fa-stack-1x fa-inverse'></i>
            </span>
        ),
        count: 4,
        title: 'Support Tickets'
    },
    {
        id: uid.v4(),
        icon: (
            <span className='fa-stack fa-lg'>
                <i className='fa fa-square fa-stack-2x text-success'></i>
                <i className='fa fa-bell fa-stack-1x fa-inverse'></i>
            </span>
        ),
        count: 5,
        title: 'New Invoices'
    },
    {
        id: uid.v4(),
        icon: (
            <span className='fa-stack fa-lg'>
                <i className='fa fa-square fa-stack-2x text-info'></i>
                <i className='fa fa-comment fa-stack-1x fa-inverse'></i>
            </span>
        ),
        count: 12,
        title: 'Comments'
    },
    {
        id: uid.v4(),
        icon: (
            <span className='fa-stack fa-lg'>
                <i className='fa fa-square fa-stack-2x text-gray-lighter'></i>
                <i className='fa fa-gear fa-stack-1x fa-inverse'></i>
            </span>
        ),
        count: 9,
        title: 'Settings to Change'
    },
    {
        id: uid.v4(),
        icon: (
            <span className='fa-stack fa-lg'>
                <i className='fa fa-square fa-stack-2x text-warning'></i>
                <i className='fa fa-shopping-basket fa-stack-1x fa-inverse'></i>
            </span>
        ),
        count: 23,
        title: 'Warnings'
    }
];

const Reminders = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Reminders'
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
        <ListGroup className={ classes.filledListGroup }>
            {
                _.map(RemindersList, (reminder) => (
                    <ListGroupItem className={ classes.filledListGroupItem } key={ reminder.id }>
                        <Media>
                            <Media.Left>
                                { reminder.icon }
                            </Media.Left>
                            <Media.Body>
                                <span className={ classes.value }>
                                    { reminder.count }
                                </span>
                                <span className={ classes.title }>
                                    { reminder.title }
                                </span>
                            </Media.Body>
                            <Media.Right>
                                <a href='javascript: void(0)'>
                                    View
                                </a>
                            </Media.Right>
                        </Media>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    </CollapsablePanel>
);

export default Reminders;
