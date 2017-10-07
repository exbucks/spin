import React from 'react';
import faker from 'faker';
import _ from 'underscore';
import uid from 'node-uuid';
import numeral from 'numeral';
import moment from 'moment';
import { Link } from 'react-router';

import {
    Media,
    ListGroup,
    ListGroupItem,
    CollapsablePanel,
    Grid,
    Row,
    Col,
    AvatarImage,
    SlimProgressBar,
    Label
} from 'components';

import { Colors } from 'consts';

import classes from './Projects.scss';

const stats = {
    followers: 12872,
    following: 567,
    comments: 6
};

const projectsList = [
    {
        id: uid.v4(),
        name: 'UX for webkom.co',
        label: {
            name: 'Active',
            color: Colors.brandSuccess
        },
        complete: 67,
        myTasks: 3,
        daysDue: 58
    },
    {
        id: uid.v4(),
        name: 'New Company Website',
        label: {
            name: 'Timer',
            color: Colors.grayLighter
        },
        complete: 12,
        myTasks: 89,
        daysDue: 2
    },
    {
        id: uid.v4(),
        name: 'Charts to Newsletter',
        label: {
            name: 'Open',
            color: Colors.brandPrimary
        },
        complete: 99,
        myTasks: 123,
        daysDue: 5
    },
    {
        id: uid.v4(),
        name: 'Design Concepts',
        label: {
            name: 'Support',
            color: Colors.brandInfo
        },
        complete: 89,
        myTasks: 0,
        daysDue: 346
    }
];

const Projects = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Projects'
        footer={
            <p className='text-center m-y-0'>
                <Link to='/apps/projects/list'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        { ...panelProps }
    >
        <ListGroup className={ classes.filledListGroup }>
            {
                _.map(projectsList, (project) => (
                    <ListGroupItem className={ `${classes.filledListGroupItem} p-y-2` } key={ project.id }>
                        <div className='flex-space-between'>
                            <Link to="/apps/tasks">
                                { project.name }
                            </Link>
                            <Label
                                outline
                                bsStyle='custom'
                                customColor={ project.label.color }
                            >
                                { project.label.name }
                            </Label>
                        </div>
                        <SlimProgressBar now={ project.complete } className='m-y-1' />
                        <div className='flex-space-between'>
                            <div className='text-center'>
                                <p className='text-white h4 m-y-0'>
                                    { project.complete }%
                                </p>
                                <p className=' m-y-0'>
                                    Complete
                                </p>
                            </div>
                            <div className='text-center'>
                                <p className='text-white h4 m-y-0'>
                                    { project.myTasks }
                                </p>
                                <p className=' m-y-0'>
                                    My Tasks
                                </p>
                            </div>
                            <div className='text-center'>
                                <p className='text-white h4 m-y-0'>
                                    { project.daysDue }
                                </p>
                                <p className=' m-y-0'>
                                    Days Due
                                </p>
                            </div>
                        </div>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    </CollapsablePanel>
);

export default Projects;
