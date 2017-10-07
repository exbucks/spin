import React from 'react';
import _ from 'underscore';
import uid from 'node-uuid';
import { LinkContainer } from 'react-router-bootstrap';

import {
    Nav,
    NavItem,
    Media,
    OverlayTrigger,
    Tooltip,
    AvatarImage
} from 'components';

import { Colors } from 'consts';

const statusToColor = (status) => {
    switch(status) {
        case 'Online':
            return Colors.brandSuccess;
        case 'Busy':
            return Colors.brandDanger;
        case 'Away':
            return Colors.brandWarning;
        default:
        case 'Offline':
            return Colors.grayLighter;
    }
}

const UsersList = (props) => {
    const { items } = props;
    const otherProps = _.omit(props, 'items');

    return (
        <Nav { ...otherProps }>
            {
                _.map(items, (person, index) => (
                    <LinkContainer to='/apps/users/grid'  key={ index }>
                        <NavItem className='no-bg'>
                            <Media>
                                <Media.Left>
                                    <AvatarImage
                                        src={ person.Avatar }
                                        size='small'
                                    />
                                </Media.Left>
                                <Media.Body>
                                    <h5 className='m-y-0'>
                                        { person.Name }
                                    </h5>
                                    <p className='small text-gray-lighter m-b-0'>
                                        { person.Address }
                                    </p>
                                </Media.Body>
                                <Media.Right>
                                    <OverlayTrigger
                                        placement='left'
                                        overlay={
                                            <Tooltip id='tooltip-status'>
                                                { person.Status }
                                            </Tooltip>
                                        }
                                    >
                                        <i
                                            className="fa fa-fw fa-circle"
                                            style={ {color: statusToColor(person.Status)} }
                                        >
                                        </i>
                                    </OverlayTrigger>
                                </Media.Right>
                            </Media>
                        </NavItem>
                    </LinkContainer>
                ))
            }
            <NavItem className='text-muted'>
                <span className='text-muted'>
                    <i className="fa fa-fw fa-plus m-r-1"></i>
                    Add New People
                </span>
            </NavItem>
        </Nav>
    );
}

UsersList.propTypes = {
    items: React.PropTypes.array.isRequired
}

export default UsersList;
