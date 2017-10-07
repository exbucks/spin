import React from 'react';
import uid from 'node-uuid';
import faker from 'faker';
import moment from 'moment';
import _ from 'underscore';
import truncate from 'truncate';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import {
    Row,
    Col,
    Panel,
    Button,
    Media,
    Tabs,
    Tab,
    Nav,
    NavItem,
    Badge,
    AvatarImage,
    FavoriteStar,
    Divider,
    Label
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';

import { Colors } from 'consts';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './ProfileDetails.scss';

import {
    Chat,
    DetailContact,
    Messages,
    Overview
} from './components';

// ------------------------------------
// Subcomponents
// ------------------------------------
const User = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    position: faker.name.jobTitle(),
    shortProfile: faker.lorem.paragraph(),
    labels: [
        faker.commerce.department(),
        faker.commerce.department(),
        faker.commerce.department()
    ],
    favoritted: (!!Math.round(Math.random()))
}

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderUser = () => (
    <div className={ classes.userDetails }>
        <Media>
            <Media.Left align='middle'>
                <AvatarImage
                    size='large'
                    showStatus
                    statusPlacement='bottom'
                    statusColor={ Colors.brandSuccess }
                    src={ User.avatar }
                />
            </Media.Left>
            <Media.Body>
                <div className={ classes.userPanelName }>
                    <h4>
                        { User.name }
                    </h4>
                    <FavoriteStar
                        favorited={ !!parseInt(User.favoritted) }
                        className='m-l-1'
                    />
                </div>
                <p>
                    { User.position }
                </p>
                <div>
                    <Button bsStyle='primary'>
                        <i className='fa fa-envelope m-r-1'></i>
                        Send Email
                    </Button>
                    { ' ' }
                    <LinkContainer to='/apps/user-profile/edit/profile'>
                        <Button href='javascript:;'>
                            <i className='fa fa-pencil'></i>
                        </Button>
                    </LinkContainer>
                    { ' ' }
                    <Button>
                        <i className='fa fa-trash'></i>
                    </Button>
                </div>
            </Media.Body>
        </Media>
        <Divider>
            Profile
        </Divider>
        <p className='m-y-0'>
            { User.shortProfile }
        </p>

        <Divider>
            Labels
        </Divider>
        <div>
            {
                _.map(User.labels, (label, index) => (
                    <Label
                        outline
                        bsStyle='default'
                        className='m-r-1'
                        key={ index }
                    >
                        { label }
                    </Label>
                ))
            }
        </div>
    </div>
);

// ------------------------------------
// Main Container
// ------------------------------------
class ProfileDetailsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 4 }>
                    { renderSection(renderUser) }
                </Col>
                <Col lg={ 8 }>
                    <Tab.Container id="profile-tabs" defaultActiveKey="overview">
                        <div>
                            <Nav bsStyle='tabs'>
                                <NavItem eventKey='overview'>
                                    Overview
                                </NavItem>
                                <NavItem eventKey='contact-details'>
                                    Contact Details
                                </NavItem>
                                <NavItem eventKey='chat'>
                                    Chat
                                </NavItem>
                                <NavItem eventKey='messages'>
                                    Messages
                                    { ' ' }
                                    <Badge>4</Badge>
                                </NavItem>
                            </Nav>
                            <Tab.Content animation>
                                <Tab.Pane eventKey='overview'>
                                    <Overview />
                                </Tab.Pane>
                                <Tab.Pane eventKey='contact-details'>
                                    <DetailContact />
                                </Tab.Pane>
                                <Tab.Pane eventKey='chat'>
                                    <Chat />
                                </Tab.Pane>
                                <Tab.Pane eventKey='messages'>
                                    <Messages />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </Col>
            </Row>
        );
    }
}

export default connect()(ProfileDetailsContainer);
