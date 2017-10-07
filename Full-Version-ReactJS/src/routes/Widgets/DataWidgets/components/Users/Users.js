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
    AvatarImage,
    SlimProgressBar,
    Label,
    InputGroup,
    FormControl,
    Button,
    OverlayTrigger,
    Tooltip
} from 'components';

import { Colors } from 'consts';

import classes from './Users.scss';

const users = _.map([
        { status: 'Online' },
        { status: 'Online' },
        { status: 'Online' },

        { status: 'Busy' },
        { status: 'Busy' },
        { status: 'Busy' },

        { status: 'Away' },
        { status: 'Away' },

        { status: 'Offline' },
        { status: 'Offline' },
        { status: 'Offline' },
    ], status => ({
        ...status,
        id: uid.v4(),
        avatar: faker.image.avatar(),
        name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
        address: `${ faker.address.city() }, ${ faker.address.stateAbbr() }`
    }));

const usersByStatus = _.groupBy(users, user => (user.status || '').toLowerCase());

const statusToColor = status => {
    switch(status.toLowerCase()) {
        case 'online':
            return Colors.brandSuccess;
        case 'busy':
            return Colors.brandDanger;
        case 'away':
            return Colors.brandWarning;
        default:
        case 'offline':
            return Colors.grayLighter;
    }
};

const renderUser = user => (
    <ListGroupItem key={ user.id }>
        <Media>
            <Media.Left align='middle'>
                <AvatarImage src={ user.avatar } size='small' />
            </Media.Left>
            <Media.Body>
                <p className='m-y-0 text-white'>
                    { user.name }
                </p>
                <small className='text-muted'>
                    { user.address }
                </small>
            </Media.Body>
            <Media.Right align='middle'>
                <OverlayTrigger
                    overlay={
                        <Tooltip>
                            { user.status }
                        </Tooltip>
                    }
                    placement='left'
                >
                    <i
                        className='fa fa-fw fa-circle'
                        style={ { color: statusToColor(user.status) } }
                    ></i>
                </OverlayTrigger>
            </Media.Right>
        </Media>
    </ListGroupItem>
);

const Users = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Users'
        footer={
            <p className='text-center m-y-0'>
                <Link to='/apps/users/list'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        { ...panelProps }
    >
        <ListGroup className={ classes.filledListGroup }>
            { /*    Search    */}
            <ListGroupItem>
                <InputGroup bsSize='sm'>
                    <FormControl placeholder="Search for"/>
                    <InputGroup.Button>
                        <Button>
                            <i className='fa fa-search'></i>
                        </Button>
                    </InputGroup.Button>
                </InputGroup>
            </ListGroupItem>

            { /*    Online     */}
            <ListGroupItem>
                <small className='text-uppercasse'>Online ({ (usersByStatus['online'] || []).length })</small>
            </ListGroupItem>
            {
                _.map(usersByStatus['online'], (user) => renderUser(user))
            }

            { /*    Busy     */}
            <ListGroupItem>
                <small className='text-uppercasse'>Busy ({ (usersByStatus['busy'] || []).length })</small>
            </ListGroupItem>
            {
                _.map(usersByStatus['busy'], (user) => renderUser(user))
            }

            { /*    Away     */}
            <ListGroupItem>
                <small className='text-uppercasse'>Away ({ (usersByStatus['away'] || []).length })</small>
            </ListGroupItem>
            {
                _.map(usersByStatus['away'], (user) => renderUser(user))
            }

            { /*    Offline     */}
            <ListGroupItem>
                <small className='text-uppercasse'>Offline ({ (usersByStatus['offline'] || []).length })</small>
            </ListGroupItem>
            {
                _.map(usersByStatus['offline'], (user) => renderUser(user))
            }
        </ListGroup>
    </CollapsablePanel>
);

export default Users;
