import React from 'react';
import _ from 'underscore';
import num from 'numeral';
import uid from 'node-uuid';
import moment from 'moment';
import {
    Table,
    Nav,
    NavItem,
    Label,
    Media,
    Button,
    ButtonGroup,
    FormControl,
    InputGroup,
    Badge,
    Panel,
    Checkbox,
    Row,
    Col,
    Grid,
    AvatarImage,
    SlimProgressBar,
    RightSidebar
} from 'components';

import { statusToColor } from 'modules/helpers';

import { Colors } from 'consts';

import classes from './RightSidebar.scss';

const renderUsers = (userGroups, cbUserClicked) => (
    <div>
        {
            _.toArray(_.mapObject(userGroups, (userGroup, groupKey) => (
                <div key={ `user-group-${groupKey}` }>
                    <h6 className={`${classes.sectionTitle} m-t-2`}>
                        { `${groupKey} (${userGroup.length})` }
                    </h6>
                    <Nav bsStyle='pills' stacked>
                        {
                            _.map(userGroup, user => (
                                <NavItem
                                    key={ user._id }
                                    href='#'
                                    onClick={ () => cbUserClicked() }
                                >
                                    <Media>
                                        <Media.Left align='middle'>
                                            <AvatarImage
                                                size='small'
                                                showStatus
                                                statusPlacement='top'
                                                src={ user.Avatar }
                                                statusColor={ statusToColor(user.Status) }
                                            />
                                        </Media.Left>
                                        <Media.Body>
                                            <h5 className='m-y-0'>
                                                { user.Name }
                                            </h5>
                                            <p className='small text-muted m-b-0'>
                                                { user.Title }
                                            </p>
                                        </Media.Body>
                                        {
                                            (user.UnreadMessages) ? (
                                                <Media.Right align='middle'>
                                                    <Badge
                                                        bsStyle={ user.UnreadMessages.Recent ? 'danger' : 'default' }
                                                    >
                                                        { user.UnreadMessages.Count }
                                                    </Badge>
                                                </Media.Right>
                                            ) : null
                                        }
                                    </Media>
                                </NavItem>
                            ))
                        }
                    </Nav>
                </div>
            )))
        }
    </div>
);

class ThirdRightSidebarTab extends React.Component {
    constructor(props, context) {
    	super(props, context);

        this.state = {
            chatPanelOpen: false
        }
    }

    static propTypes = {
        data: React.PropTypes.object.isRequired
    }

    renderChat(chat) {
        return (
            <Panel
                header={
                    <div className={ classes.flexSpaceBetween }>
                        <span>
                            <a
                                href='javascript:void(0)'
                                className='small'
                                onClick={ () => this.toggleChat(false) }
                            >
                                <i className="fa fa-fw fa-chevron-left"></i>
                            </a>
                        </span>
                        { chat.Receiver }
                        <a href="javascript: void(0)">
                            <i
                                className="fa fa-fw fa-circle"
                                style={ {color: statusToColor(chat.Status)} }
                            ></i>
                        </a>
                    </div>
                }
                footer={
                    <InputGroup>
                        <InputGroup.Button>
                            <Button>
                                <i className="fa fa-fw fa-plus"></i>
                            </Button>
                        </InputGroup.Button>
                        <FormControl type='text' placeholder='Your message...' />
                        <InputGroup.Button>
                            <Button bsStyle='primary'>
                                Send!
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                }
            >
                {
                    _.map(chat.Messages, (message, index) => (
                            (
                                (index % 2 === 0) ?
                                    (
                                        <Media key={ message._id }>
                                            <Media.Left>
                                                <AvatarImage
                                                    size='small'
                                                    showStatus
                                                    statusPlacement='top'
                                                    src={ message.User.Avatar }
                                                    statusColor={ statusToColor(message.User.Status) }
                                                />
                                            </Media.Left>
                                            <Media.Body>
                                                <div
                                                    className={`${message.Recent ? 'bg-primary' : 'bg-gray-dark'} text-white b-r-a-3 p-x-2 p-y-2`}
                                                >
                                                    { message.Content }
                                                </div>
                                                <h6 className='m-y-1'>
                                                    { message.User.Name }
                                                    <small className='m-l-1'>
                                                        { moment(message.Time).format('HH:mm a') }
                                                    </small>
                                                </h6>
                                            </Media.Body>
                                        </Media>
                                    ) :
                                    (
                                        <Media key={ message._id }>
                                            <Media.Body>
                                                <div
                                                    className={`${message.Recent ? 'bg-primary' : 'bg-gray-dark'} text-white b-r-a-3 p-x-2 p-y-2`}
                                                >
                                                    { message.Content }
                                                </div>
                                                <h6 className='m-y-1'>
                                                    { message.User.Name }
                                                    <small className='m-l-1'>
                                                        { moment(message.Time).format('HH:mm a') }
                                                    </small>
                                                </h6>
                                            </Media.Body>
                                            <Media.Right>
                                                <AvatarImage
                                                    size='small'
                                                    showStatus
                                                    statusPlacement='top'
                                                    src={ message.User.Avatar }
                                                    statusColor={ statusToColor(message.User.Status) }
                                                />
                                            </Media.Right>
                                        </Media>
                                    )
                            )
                    ))
                }
            </Panel>
        );
    }

    toggleChat(state = true) {
        this.setState(Object.assign(
            {}, this.state, { chatPanelOpen: state }
        ))
    }

    render() {
        const users = _.groupBy(this.props.data.List, val => val.Status);

        return(
            <div>
                <h6 className={`${classes.sectionTitle} m-b-2`}>
                    Users in chat
                </h6>
                <div className={ classes.sectionContainer }>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Search for...'
                        />
                        <InputGroup.Button>
                            <Button bsStyle='primary'>
                                <i className="fa fa-fw fa-search"></i>
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </div>
                <RightSidebar.OverlayContentParent>
                    { renderUsers(users, () => this.toggleChat() ) }
                    <RightSidebar.OverlayContent active={this.state.chatPanelOpen}>
                        { this.renderChat(this.props.data.ActiveChat) }
                    </RightSidebar.OverlayContent>
                </RightSidebar.OverlayContentParent>
            </div>
        );
    }
}

export default ThirdRightSidebarTab;
