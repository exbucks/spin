import React from 'react';
import faker from 'faker';
import {
    Label,
    Button,
    AvatarImage,
    AvatarText,
    Timeline
} from 'components';

import { Colors } from 'consts';
// ------------------------------------
// Vertical Inner Date Timeline Example
// ------------------------------------
const VerticalInnerDateTimeline = () => (
    <Timeline
        itemAlignment='vertical-inner-date'
    >
        <Timeline.Date>Today</Timeline.Date>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='DD-MMM-YYYY, HH:mm'
            color={ Colors.brandDanger }
            icon={ <i className='fa fa-times-circle'></i> }
        >
            <Timeline.ItemHeader
                primaryText={
                    <p>
                        <Label
                            bsStyle='danger'
                            className='label-outline'
                        >Alert</Label>
                    </p>
                }
                secondaryText={
                    <p className='text-white'>
                        { faker.hacker.phrase() }
                    </p>
                }
            />
        </Timeline.Item>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='DD-MMM-YYYY, HH:mm'
            color={ Colors.brandWarning }
            icon={ <i className='fa fa-exclamation-circle'></i> }
        >
            <Timeline.ItemHeader
                primaryText={
                    <p>
                        <Label
                            bsStyle='warning'
                            className='label-outline'
                        >Warning</Label>
                    </p>
                }
                secondaryText={
                    <p className='text-white'>
                        { faker.hacker.phrase() }
                    </p>
                }
            />
        </Timeline.Item>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='DD-MMM-YYYY, HH:mm'
            color={ Colors.brandInfo }
            icon={ <i className='fa fa-info-circle'></i> }
        >
            <Timeline.ItemHeader
                primaryText={
                    <p>
                        <Label
                            bsStyle='info'
                            className='label-outline'
                        >Info</Label>
                    </p>
                }
                secondaryText={
                    <p className='text-white'>
                        15 Files Uploaded
                    </p>
                }
            />
            <Timeline.ItemBody>
                <i className="m-l-1 fa fa-file-text-o fa-fw"></i> read_me.txt
                <br />
                <i className="m-l-1 fa fa-file-zip-o fa-fw"></i> all-files.zip
                <br />
                <i className="m-l-1 fa fa-file-word-o fa-fw"></i> alice-feedback.doc
                <br />
                <span className="badge m-t-1 m-b-1">+12</span>
            </Timeline.ItemBody>
        </Timeline.Item>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='DD-MMM-YYYY, HH:mm'
            color={ Colors.brandPrimary }
            icon={ <i className='fa fa-plus-circle'></i> }
        >
            <Timeline.ItemHeader
                primaryText={
                    <p>
                        <Label
                            bsStyle='primary'
                            className='label-outline'
                        >Info</Label>
                    </p>
                }
                secondaryText={
                    <p className='text-white'>
                        6 users have been accepted by the Admin
                    </p>
                }
            />
            <Timeline.ItemBody>
                <AvatarImage size='small' src={ faker.image.avatar() }/>
                <AvatarImage size='small' src={ faker.image.avatar() }/>
                <AvatarImage size='small' src={ faker.image.avatar() }/>
                <AvatarImage size='small' src={ faker.image.avatar() }/>
                <AvatarImage size='small' src={ faker.image.avatar() }/>
                <AvatarImage size='small' src={ faker.image.avatar() }/>
            </Timeline.ItemBody>
        </Timeline.Item>

        <Timeline.Date>Yesterday</Timeline.Date>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='DD-MMM-YYYY, HH:mm'
            color={ Colors.brandSuccess }
            icon={ <i className='fa fa-check-circle'></i> }
        >
            <Timeline.ItemHeader
                primaryText={
                    <p>
                        <Label
                            bsStyle='success'
                            className='label-outline'
                        >Success</Label>
                    </p>
                }
                secondaryText={
                    <p className='text-white'>
                        { faker.hacker.phrase() }
                    </p>
                }
            />
            <Timeline.ItemBody>
                { faker.lorem.paragraph() }
            </Timeline.ItemBody>
        </Timeline.Item>

        <Timeline.Item
            date={ faker.date.recent() }
            dateFormat='DD-MMM-YYYY, HH:mm'
            color={ Colors.gray }
            icon={ <i className='fa fa-circle'></i> }
        >
            <Timeline.ItemHeader
                primaryText={
                    <p>
                        <Label
                            className='label-outline label-gray'
                        >Success</Label>
                    </p>
                }
                secondaryText={
                    <p className='text-white'>
                        <del>
                            { faker.hacker.phrase() }
                        </del>
                    </p>
                }
            />
        </Timeline.Item>
    </Timeline>
);

// Force Static Output
var staticResult = VerticalInnerDateTimeline();

export default () => staticResult;
