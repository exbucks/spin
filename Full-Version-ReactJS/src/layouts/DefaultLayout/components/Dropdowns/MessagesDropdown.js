import React from 'react';
import uid from 'node-uuid';
import faker from 'faker';
import _ from 'underscore';
import moment from 'moment';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import {
    NavDropdown,
    Label,
    ListGroup,
    ListGroupItem,
    Media,
    Button,
    Navbar,
    AvatarImage
} from 'components';

import { Colors } from 'consts';

const messages = Array.from((function*() {
    const statusColors = [
        Colors.brandDanger, Colors.brandWarning, Colors.brandSuccess,
        Colors.brandDanger, Colors.brandWarning, Colors.brandSuccess
    ];
    for(let i = 0; i < statusColors.length; i++) {
        yield {
            id: uid.v4(),
            userAvatar: faker.image.avatar(),
            userName: `${faker.name.firstName()} ${faker.name.lastName()}`,
            userStatusColor: statusColors[i],
            message: faker.lorem.sentence(),
            date: moment(faker.date.recent()).format('HH:mm')
        }
    }
})());

class MessagesDropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    render() {
        return (
            <NavDropdown
                id='navbar-messages'
                noCaret
                open={ this.state.open }
                onToggle={ () => this.setState({ open: !this.state.open }) }
                title={
                    <span>
                        <span className='hidden-xs'>
                            <i className='fa fa-lg fa-fw fa-envelope'></i>
                            <Label
                                bsStyle='info'
                                withIcon
                                pill
                            >
                                3
                            </Label>
                        </span>

                        <span className="hidden-sm hidden-md hidden-lg">
                            Messages
                            <Label
                                bsStyle='info'
                                className='m-l-1'
                                pill
                            >
                                3
                            </Label>
                        </span>
                    </span>

                }
            >
                <Navbar.DropdownList
                    header={
                        <div>
                            <strong className='small text-uppercase'>
                                Messages
                            </strong>
                            <Link to='/apps/new-email'>
                                <Button bsSize='xs' onClick={ () => { this.setState({ open: false }) } }>
                                    <i className='fa fa-pencil fa-fw'></i>
                                </Button>
                            </Link>
                        </div>
                    }
                    footer={
                        <div className='text-center' onClick={ () => this.setState({ open: false }) }>
                            See All Messages
                            { ' ' }
                            <i className='fa fa-angle-right fa-fw'></i>
                        </div>
                    }
                    footerUrl='/apps/inbox'
                >
                    <ListGroup>
                        {
                            _.map(messages, message => (
                                <ListGroupItem key={ message.id } href='javascript:;'>
                                    <LinkContainer to='/apps/chat' onClick={ () => this.setState({ open: false }) }>
                                        <Media>
                                            <Media.Left align='middle'>
                                                <AvatarImage
                                                    src={ message.userAvatar }
                                                    showStatus
                                                    statusPlacement='bottom'
                                                    statusColor={ message.userStatusColor }
                                                />
                                            </Media.Left>
                                            <Media.Body>
                                                <p className='m-b-1'>
                                                    <span className='text-white'>
                                                        { message.userName }
                                                    </span>
                                                    <small className='m-l-1'>
                                                        { message.date }
                                                    </small>
                                                </p>
                                                <p className='m-y-0'>
                                                    { message.message }
                                                </p>
                                            </Media.Body>
                                        </Media>
                                    </LinkContainer>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Navbar.DropdownList>
            </NavDropdown>
        );
    }
}

export default MessagesDropdown;
