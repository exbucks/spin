import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import moment from 'moment';
import truncate from 'truncate';
import faker from 'faker';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import {
    Row,
    Col,
    Media,
    Nav,
    NavItem,
    AvatarImage,
    Label
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';

import classes from './ProfileEdit.scss';

const userToEdit = {
    Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    Avatar: faker.image.avatar()
};

const urlSectionToName = section => {
    switch(section) {
        case 'profile':
            return 'Profile Edit';
        case 'account':
            return 'Account Edit';
        case 'billing':
            return 'Billing Edit';
        case 'settings':
            return 'Settings Edit';
        case 'sessions':
            return 'Sessions Edit';
    }
};
// ------------------------------------
// Sub Elements
// ------------------------------------
import {
    ProfileEdit,
    AccountEdit,
    BillingEdit,
    SettingsEdit,
    SessionsEdit
} from './components';

// ------------------------------------
// Main Container
// ------------------------------------
class ProfileEditContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        const { section: sectionName } = this.props.routeParams;
        return (
            <div>
                <Row>
                    <Col md={ 12 } className='m-b-3'>
                        <Media>
                            <Media.Left align='middle'>
                                <AvatarImage src={ userToEdit.Avatar } />
                            </Media.Left>
                            <Media.Body>
                                <p className='h3 m-y-0'>
                                    <Link to='/apps/profile-details'>
                                        { userToEdit.Name }
                                    </Link>
                                    <span className='text-muted m-x-1'>
                                        /
                                    </span>
                                    <span className='text-white'>
                                        { urlSectionToName(sectionName) }
                                    </span>
                                </p>
                                <p className='m-y-0'>
                                    <Label outline className='m-r-1 v-a-m' bsStyle='primary'>
                                        Premium
                                    </Label>
                                    <span className='v-a-m'>
                                        Edit Your Name, Avatar, etc.
                                    </span>
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 2 }>
                        <Nav bsStyle="pills" stacked>
                            <LinkContainer to='/apps/user-profile/edit/profile'>
                                <NavItem eventKey={1} href="javascript:;">Profile Edit</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/apps/user-profile/edit/account'>
                                <NavItem eventKey={2} href="javascript:;">Account Edit</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/apps/user-profile/edit/billing'>
                                <NavItem eventKey={3} href="javascript:;">Billing Edit</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/apps/user-profile/edit/settings'>
                                <NavItem eventKey={4} href="javascript:;">Settings Edit</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/apps/user-profile/edit/sessions'>
                                <NavItem eventKey={5} href="javascript:;">Sessions Edit</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Col>
                    <Col lg={ 10 }>
                        { sectionName === 'profile' && ( <ProfileEdit /> ) }
                        { sectionName === 'account' && ( <AccountEdit /> ) }
                        { sectionName === 'billing' && ( <BillingEdit /> ) }
                        { sectionName === 'settings' && ( <SettingsEdit /> ) }
                        { sectionName === 'sessions' && ( <SessionsEdit /> ) }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(ProfileEditContainer);
