import React, { PropTypes } from 'react';
import _ from 'underscore';
import moment from 'moment';
import uid from 'node-uuid';
import hash from 'object-hash';

import {
    Media,
    Divider,
    AvatarImage
} from 'components';

import { Colors } from 'consts';

import classes from './Chat.scss';

const userStatusToColor = (status) => {
    switch(status) {
        default:
        case 'Online':
            return Colors.brandSuccess;
        case 'Away':
            return Colors.brandWarning;
        case 'Busy':
            return Colors.brandDanger;
        case 'Offline':
            return Colors.grayLighter;
    }
};

const getFormattedDate = (date) => {
    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days').startOf('day');

    return moment().isSame(today, 'd') || moment().isSame(yesterday, 'd') ?
        moment(date).format('h:mm:ss a') : moment(date).format('MMMM Do YYYY, h:mm:ss a');
};

const renderChatMessage = (message, leftAligned) => (
    <Media
        className={ `${classes.chatMessage} ${ leftAligned && classes.leftAligned } ${ (!!parseInt(message.Active)) && classes.active }` }
        key={ message._id || hash(message) }
    >
        {
            leftAligned && (
                <Media.Left>
                    <AvatarImage
                        src={ message.User.Avatar }
                        showStatus
                        statusPlacement='bottom'
                        statusColor={ userStatusToColor(message.User.Status) }
                    />
                </Media.Left>
            )
        }
        <Media.Body>
            <div className={ classes.chatMessageContent }>
                { message.Content }
            </div>
            {
                leftAligned ?
                    (
                        <div className={ classes.chatMessageFooter }>
                            <span className='text-white'>
                                { message.User.Name }
                            </span>
                            <small>
                                { ` at ${ getFormattedDate(message.Date) } ` }
                            </small>
                        </div>
                    ) :
                    (
                        <div className={ classes.chatMessageFooter }>
                            <small>
                                { `${ getFormattedDate(message.Date) } ` }
                            </small>
                            <span className='text-white'>
                                { message.User.Name }
                            </span>
                        </div>
                    )
            }
        </Media.Body>
        {
            !leftAligned && (
                <Media.Right>
                    <AvatarImage
                        src={ message.User.Avatar }
                        showStatus
                        statusPlacement='bottom'
                        statusColor={ userStatusToColor(message.User.Status) }
                    />
                </Media.Right>
            )
        }
    </Media>
);

const Chat = props => {
    const messagesGroupedByDate = _.groupBy(props.messages, (message) => {
        const dateNow = moment();
        const dateMessage = moment(message.Date);

        const nowDay = dateNow.day();
        const messageDay = dateMessage.day();

        const diff = nowDay - messageDay;

        switch(diff) {
            case 0:
                return 'Today';
            case 1:
                return 'Yesterday';
            default:
                return 'Other';
        };
    });

    const messagesGroupedByDateSorted = _.sortBy(_.pairs(messagesGroupedByDate), (keyval) => {
        switch(keyval[0]) {
            default:
            case 'Other':
                return 0;
            case 'Yesterday':
                return 1;
            case 'Today':
                return 2;
        }
    });

    return (
        <div>
            {
                _.map(messagesGroupedByDateSorted, keyval => {
                    const groupName = keyval[0];
                    const messages = keyval[1];

                    return (
                        <div key={ `chat-messages-${ groupName }` }>
                            {
                                groupName !== 'Other' && (
                                    <Divider textPosition='center'>
                                        { groupName }
                                    </Divider>
                                )
                            }
                            {
                                _.map(messages, (message, index) =>
                                    renderChatMessage(message, index % 2 === 0))
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};

Chat.propTypes = {
    messages: PropTypes.array.isRequired
};

export default Chat;
