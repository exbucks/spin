import React from 'react';
import faker from 'faker';
import _ from 'underscore';
import uid from 'node-uuid';
import { Link } from 'react-router';

import {
    Media,
    Checkbox,
    CollapsablePanel
} from 'components';

import { Colors } from 'consts';

const TasksList = [
    {
        id: uid.v4(),
        complete: false,
        priority: 'Urgent',
        title: faker.hacker.phrase(),
        date: '27-Jan-2016 02:10'
    },
    {
        id: uid.v4(),
        complete: true,
        priority: 'Low',
        title: faker.hacker.phrase(),
        date: '19-Apr-2016 11:28'
    },
    {
        id: uid.v4(),
        complete: true,
        priority: 'High',
        title: faker.hacker.phrase(),
        date: '13-Jun-2016 04:43'
    },
    {
        id: uid.v4(),
        complete: false,
        priority: 'Medium',
        title: faker.hacker.phrase(),
        date: '15-Dec-2015 09:49'
    }
];

const priorityToColor = {
    'Urgent': Colors.brandDanger,
    'High': Colors.brandPrimary,
    'Medium': Colors.brandSuccess,
    'Low': Colors.grayLighter
};

const Tasks = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Tasks'
        footer={
            <p className='text-center m-y-0'>
                <Link to='/apps/projects/grid'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        { ...panelProps }
    >
        {
            _.map(TasksList, (task) => (
                <Media key={ task.id }>
                    <Media.Left>
                        <Checkbox className='m-y-0'/>
                    </Media.Left>
                    <Media.Body>
                        {
                            task.complete ? (
                                <del>
                                    <a href='javascript:void(0)' className='text-muted'>
                                        { task.title }
                                    </a>
                                </del>
                            ) : (
                                <a href='javascript:void(0)'>
                                    { task.title }
                                </a>
                            )
                        }
                        <p className='small m-t-1 m-b-0'>
                            { task.date }
                        </p>
                    </Media.Body>
                    <Media.Right align='middle'>
                        <i
                            className='fa fa-fw fa-circle'
                            style={ { color: priorityToColor[task.priority] || Colors.grayLighter } }
                        ></i>
                    </Media.Right>
                </Media>
            ))
        }
    </CollapsablePanel>
);

export default Tasks;
