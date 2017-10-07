import React from 'react';
import faker from 'faker';
import moment from 'moment';

import {
    Label,
    Button,
    Media,
    Timeline,
    AvatarImage,
    AvatarText
} from 'components';

import { Colors } from 'consts';
// ------------------------------------
// Vertical Timeline Example
// ------------------------------------
const VerticalTimeline = () => (
    <Timeline
        itemAlignment='vertical'
    >
        <Timeline.Date>Today</Timeline.Date>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='HH:mm a'
            color={ Colors.brandDanger }
        >
            <Timeline.ItemHeader
                avatar={
                    <AvatarText
                        backgroundColor={ Colors.brandDanger }
                    >
                        <i className='fa fa-fw fa-exclamation'></i>
                    </AvatarText>
                }
                primaryText={ faker.company.catchPhrase() }
                secondaryText={ faker.company.companyName() }
            />
            <Timeline.ItemBody>
                { faker.lorem.paragraph() }
            </Timeline.ItemBody>
        </Timeline.Item>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='HH:mm a'
            color={ Colors.brandInfo }
        >
            <Timeline.ItemHeader
                avatar={
                    <AvatarText
                        backgroundColor={ Colors.brandInfo }
                    >
                        <i className='fa fa-fw fa-commenting'></i>
                    </AvatarText>
                }
                primaryText='Invitiation Sent!'
                secondaryText={ `From: ${faker.fake('{{name.firstName}} {{name.lastName}}')}` }
            />
            <Timeline.ItemBody>
                <p>
                    { faker.lorem.paragraph() }
                </p>
                <Button bsSize='small'>Accept</Button>
                {' '}
                <Button bsSize='small'>Reject</Button>
            </Timeline.ItemBody>
        </Timeline.Item>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='HH:mm a'
            color={ Colors.brandPrimary }
        >
            <Timeline.ItemHeader
                avatar={
                    <AvatarText
                        backgroundColor={ Colors.brandPrimary }
                    >
                        <i className='fa fa-fw fa-envelope'></i>
                    </AvatarText>
                }
                primaryText='Who are You?'
                secondaryText={ faker.internet.email() }
            />
            <Timeline.ItemBody>
                <p>
                    { faker.lorem.paragraph() }
                </p>
                <Media >
                    <Media.Left>
                        <AvatarImage
                            size='small'
                            src={ faker.image.avatar() }
                        />
                    </Media.Left>
                    <Media.Body>
                        <h6 className="m-t-0 m-b-0">
                            { faker.fake('{{name.firstName}} {{name.lastName}}') }
                        </h6>
                        <p className="m-t-0">{ `Replied: ${moment(faker.date.recent()).format('DD MMM YYYY')}` }</p>
                    </Media.Body>
                </Media>
            </Timeline.ItemBody>
        </Timeline.Item>

        <Timeline.Date>Yesterday</Timeline.Date>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='HH:mm a'
            color={ Colors.brandWarning }
        >
            <Timeline.ItemHeader
                avatar={
                    <AvatarText
                        backgroundColor={ Colors.brandWarning }
                    >
                        <i className='fa fa-fw fa-clock-o'></i>
                    </AvatarText>
                }
                primaryText={ faker.company.catchPhrase() }
                secondaryText={ faker.company.companyName() }
            />
            <Timeline.ItemBody>
                { faker.lorem.paragraph() }
            </Timeline.ItemBody>
        </Timeline.Item>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='HH:mm a'
            color={ Colors.brandSuccess }
        >
            <Timeline.ItemHeader
                avatar={
                    <AvatarText
                        backgroundColor={ Colors.brandSuccess }
                    >
                        <i className='fa fa-fw fa-envelope'></i>
                    </AvatarText>
                }
                primaryText='Invitiation Sent!'
                secondaryText={ `From: ${faker.fake('{{name.firstName}} {{name.lastName}}')}` }
            />
            <Timeline.ItemBody>
                <p>
                    { faker.lorem.paragraph() }
                </p>
                <Button bsSize='small'>Accept</Button>
                {' '}
                <Button bsSize='small'>Reject</Button>
            </Timeline.ItemBody>
        </Timeline.Item>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='HH:mm a'
            color={ Colors.gray }
        >
            <Timeline.ItemHeader
                avatar={
                    <AvatarText
                        backgroundColor={ Colors.gray }
                    >
                        <i className='fa fa-fw fa-close'></i>
                    </AvatarText>
                }
                primaryText='Who are You?'
                secondaryText={ faker.internet.email() }
            />
            <Timeline.ItemBody>
                <p>
                    { faker.lorem.paragraph() }
                </p>
                <Media >
                    <Media.Left>
                        <AvatarImage
                            size='small'
                            src={ faker.image.avatar() }
                        />
                    </Media.Left>
                    <Media.Body>
                        <h6 className="m-t-0 m-b-0">
                            { faker.fake('{{name.firstName}} {{name.lastName}}') }
                        </h6>
                        <p className="m-t-0">{ `Replied: ${moment(faker.date.recent()).format('DD MMM YYYY')}` }</p>
                    </Media.Body>
                </Media>
            </Timeline.ItemBody>
        </Timeline.Item>
    </Timeline>
);

// Force Static Output
var staticResult = VerticalTimeline();

export default () => staticResult;
