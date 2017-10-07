import React from 'react';
import faker from 'faker';
import _ from 'underscore';
import uid from 'node-uuid';
import { Link } from 'react-router';

import {
    Media,
    Button,
    ButtonGroup,
    AvatarImage,
    CollapsablePanel
} from 'components';

import { Colors } from './../../../../../consts';

const statusToColor = {
    'Online': Colors.brandSuccess,
    'Busy': Colors.brandDanger,
    'Away': Colors.brandWarning,
    'Offline': Colors.grayLighter
};

const emailsList = [
    {
        id: uid.v4(),
        user: {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            avatar: faker.image.avatar(),
            status: 'Busy'
        },
        messageTime: '06:41',
        shortMessage: faker.lorem.sentence(),

    },
    {
        id: uid.v4(),
        user: {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            avatar: faker.image.avatar(),
            status: 'Online'
        },
        messageTime: '12:02',
        shortMessage: faker.lorem.sentence(),

    },
    {
        id: uid.v4(),
        user: {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            avatar: faker.image.avatar(),
            status: 'Away'
        },
        messageTime: '11:12',
        shortMessage: faker.lorem.sentence(),

    },
    {
        id: uid.v4(),
        user: {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            avatar: faker.image.avatar(),
            status: 'Offline'
        },
        messageTime: '04:24',
        shortMessage: faker.lorem.sentence(),
    }
];

const Emails = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Emails'
        footer={
            <p className='text-center m-y-0'>
                <Link to='/apps/inbox'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        { ...panelProps }
    >
        {
            _.map(emailsList, email => (
                <Media key={ email.id }>
                    <Media.Left align='middle'>
                        <AvatarImage
                            src={ email.user.avatar }
                            showStatus
                            statusPlacement='bottom'
                            statusColor={ statusToColor[email.user.status] || Colors.grayLighter }
                        />
                    </Media.Left>
                    <Media.Body>
                        <h5 className='m-b-0'>
                            { email.user.name }
                            <small className='m-l-1'>
                                { email.messageTime }
                            </small>
                        </h5>
                        <p className='m-y-0'>
                            { email.shortMessage }
                        </p>
                        <ButtonGroup bsSize='xsmall'>
                            <Button bsStyle='link'>
                                <i className='fa fa-reply text-gray-light'></i>
                            </Button>
                            <Button bsStyle='link'>
                                <i className='fa fa-archive text-gray-light'></i>
                            </Button>
                            <Button bsStyle='link'>
                                <i className='fa fa-trash text-gray-light'></i>
                            </Button>
                        </ButtonGroup>
                    </Media.Body>
                </Media>
            ))
        }
    </CollapsablePanel>
);

export default Emails;
