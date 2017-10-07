import React from 'react';
import faker from 'faker';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import {
    Row,
    Col,
    Panel,
    InputGroup,
    FormControl,
    Button,
    ButtonGroup,
    Dropdown,
    DropdownButton,
    MenuItem,
    Table,
    Media,
    Badge,
    Tooltip,
    OverlayTrigger,
    AvatarImage
} from 'components';

import { Colors } from 'consts';

import classes from './../ProfileDetails.scss';

const messages = Array.from((function*(){
    for(let i = 0; i < 20; i++) {
        yield {
            id: uid.v4(),
            User: {
                Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                Avatar: faker.image.avatar(),
                State: faker.address.state(),
                StatusColor: [Colors.brandSuccess, Colors.brandWarning, Colors.brandDanger, Colors.gray][Math.floor(Math.random() * 4)],
            },
            Message: {
                Subject: faker.company.catchPhrase(),
                Content: faker.lorem.sentence()
            },
            Date: faker.date.recent(),
            Attachment: (!!Math.round(Math.random())),
            Active: i <= 1
        };
    }
})());

const Messages = () => (
    <Panel
        className='m-t-2'
        header={
            <Row>
                <Col lg={ 6 }>
                    { `Messages with ${faker.name.firstName()} ${faker.name.lastName()}` }
                </Col>
                <Col lg={ 6 } className='text-right'>
                    <ButtonGroup bsSize='small'>
                        <Button active>
                            Inbox
                        </Button>
                        <Button>
                            Active
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        }
        footer={
            <Row>
                <Col lg={ 6 }>
                    <ButtonGroup bsSize='small'>
                        <Button>
                            <i className='fa fa-angle-left'></i>
                        </Button>
                        <Button>
                            <i className='fa fa-angle-right'></i>
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col lg={ 6 }>
                    <p className='m-y-0 text-right text-muted'>
                        Showing 1 to 10 of 57 entries
                    </p>
                </Col>
            </Row>
        }
    >
        <Table className={ classes.messagesTable } fill>
            <thead>
                <tr>
                    <th></th>
                    <th>
                        From
                    </th>
                    <th>
                        Subject
                    </th>
                    <th></th>
                    <th>
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(messages, message => (
                        <tr key={ message.id }>
                            <td>
                                {
                                    message.Active && (
                                        <OverlayTrigger
                                            placement='top'
                                            overlay={
                                                <Tooltip id='new-message-tooltip'>
                                                    You Got New Message
                                                </Tooltip>
                                            }
                                        >
                                            <i className='fa fa-fw fa-circle text-primary'></i>
                                        </OverlayTrigger>
                                    )
                                }
                            </td>
                            <td>
                                <Media>
                                    <Media.Left align='middle'>
                                        <AvatarImage
                                            src={ message.User.Avatar }
                                            showStatus
                                            statusPlacement='bottom'
                                            statusColor={ message.User.StatusColor }
                                        />
                                    </Media.Left>
                                    <Media.Body>
                                        <p className='m-y-0 text-white'>
                                            { message.User.Name }
                                        </p>
                                        <p className='m-y-0'>
                                            { message.User.State }
                                        </p>
                                    </Media.Body>
                                </Media>
                            </td>
                            <td>
                                <p className='m-y-0'>
                                    <a href='javascript:;' className={`${message.Active ? 'text-white' : 'text-muted'}`}>
                                        { message.Message.Subject }
                                    </a>
                                </p>
                                <p className='m-y-0'>
                                    { message.Message.Content }
                                </p>
                            </td>
                            <td>
                                {
                                    message.Attachment && (
                                        <i className='fa fa-fw fa-lg fa-paperclip'></i>
                                    )
                                }
                            </td>
                            <td>
                                <p className={`m-y-0 ${message.Active && 'text-white'}`}>
                                    { moment(message.Date).format('DD-MMM-YYYY') }
                                </p>
                                <p className='m-y-0'>
                                    { moment(message.Date).format('h:mm A') }
                                </p>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </Panel>
);

export default Messages;
