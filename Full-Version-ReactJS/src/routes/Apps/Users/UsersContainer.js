import React from 'react';
import uid from 'node-uuid';
import truncate from 'truncate';
import _ from 'underscore';
import moment from 'moment';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import {
    Row,
    Col,
    Checkbox,
    Panel,
    Button,
    Badge,
    ButtonGroup,
    ButtonToolbar,
    Dropdown,
    FormGroup,
    Label,
    MenuItem,
    Table,
    Media,
    Pagination,
    OverlayTrigger,
    Tooltip,
    SplitButton,
    Divider,
    AvatarImage,
    Image,
    FavoriteStar,
    Thumbnail,
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';
import usersData from 'consts/data/app-users.json';
// ------------------------------------
// Subcomponents
// ------------------------------------
import {
    LabelsList,
    SideNav,
    SearchBox
} from './../components';

import {
    CallModal,
    ProfileModal,
    ChatModal,
    VideoModal,
    DeleteModal,
    EditModal
} from './components';

// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const folders = [
    {
        title: 'Updates',
        count: 4
    },
    {
        title: 'Favorites',
        count: 2
    },
    {
        title: 'Private',
        count: 7
    }
];

const labels = [
    { title: 'Documents', color: Colors.brandPrimary },
    { title: 'Pictures', color: Colors.brandInfo },
    { title: 'Videos', color: Colors.brandSuccess },
    { title: 'Music', color: Colors.brandWarning },
    { title: 'Other', color: Colors.brandDanger }
];

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

const userSocialToIcons = (social) => {
    if(!social || social.length === 0) {
        return '-';
    }

    return (
        <div>
            {
                _.map(social, (s, index) => (
                    <a href='javascript:;' className='m-r-1' key={ index }>
                        <OverlayTrigger placement="top" overlay={
                            <Tooltip id={`tooltip-${s}`}>
                                {`${s} Profile`}
                            </Tooltip>
                        }>
                            {
                                (() => {
                                    switch(s) {
                                        case 'LinkedIn':
                                            return <i className='fa fa-linkedin-square text-muted fa-lg'></i>
                                        case 'Facebook':
                                            return <i className='fa fa-facebook-square text-muted fa-lg'></i>
                                        case 'Twitter':
                                            return <i className='fa fa-twitter-square text-muted fa-lg'></i>
                                    }
                                })()
                            }
                        </OverlayTrigger>
                    </a>
                ))
            }
        </div>
    );
};

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderActionsDropdown = (toggleModal) => (
    <Dropdown id={`dropdown-user-actions-${ uid.v4() }`} pullRight>
        <Dropdown.Toggle>
            <i className='fa fa-fw fa-bars m-r-1'></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <MenuItem
                eventKey="1"
                onClick={ () => { toggleModal('callModal', true) } }
            >
                <i className='fa fa-fw fa-phone text-gray-lighter m-r-1'></i>
                Call
            </MenuItem>
            <MenuItem
                eventKey="2"
                onClick={ () => { toggleModal('chatModal', true) } }
            >
                <i className='fa fa-fw fa-comment text-gray-lighter m-r-1'></i>
                Chat
            </MenuItem>
            <MenuItem
                eventKey="3"
                onClick={ () => { toggleModal('videoModal', true) } }
            >
                <i className='fa fa-fw fa-video-camera text-gray-lighter m-r-1'></i>
                Video
            </MenuItem>
            <MenuItem
                eventKey="4"
                onClick={ () => { toggleModal('profileModal', true) } }
            >
                <i className='fa fa-fw fa-user text-gray-lighter m-r-1'></i>
                Profile
            </MenuItem>
            <MenuItem
                eventKey="4"
                onClick={ () => { toggleModal('editModal', true) } }
            >
                <i className='fa fa-fw fa-pencil text-gray-lighter m-r-1'></i>
                Edit
            </MenuItem>

            <MenuItem divider />

            <MenuItem
                eventKey="6"
                onClick={ () => { toggleModal('deleteModal', true) } }
            >
                <i className='fa fa-fw fa-trash text-gray-lighter m-r-1'></i>
                Delete
            </MenuItem>
        </Dropdown.Menu>
    </Dropdown>
);

const renderGridActionsDropdown = (toggleModal) => (
    <SplitButton
        title='Profile'
        id={`dropdown-user-actions-${ uid.v4() }`}
        onClick={ () => { toggleModal('profileModal', true) } }
    >
        <MenuItem
            eventKey="1"
            onClick={ () => { toggleModal('callModal', true) } }
        >
            <i className='fa fa-fw fa-phone text-gray-lighter m-r-1'></i>
            Call
        </MenuItem>
        <MenuItem
            eventKey="2"
            onClick={ () => { toggleModal('chatModal', true) } }
        >
            <i className='fa fa-fw fa-comment text-gray-lighter m-r-1'></i>
            Chat
        </MenuItem>
        <MenuItem
            eventKey="3"
            onClick={ () => { toggleModal('videoModal', true) } }
        >
            <i className='fa fa-fw fa-video-camera text-gray-lighter m-r-1'></i>
            Video
        </MenuItem>
        <MenuItem
            eventKey="4"
            onClick={ () => { toggleModal('editModal', true) } }
        >
            <i className='fa fa-fw fa-pencil text-gray-lighter m-r-1'></i>
            Edit
        </MenuItem>

        <MenuItem divider />

        <MenuItem
            eventKey="6"
            onClick={ () => { toggleModal('deleteModal', true) } }
        >
            <i className='fa fa-fw fa-trash text-gray-lighter m-r-1'></i>
            Delete
        </MenuItem>
    </SplitButton>
);

const renderUsersList = (users, toggleModal) => (
    <div className='m-t-2'>
        <Table hover>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Star
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Social
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(users, user => (
                        <tr key={ user._id }>
                            <td>
                                <Checkbox />
                            </td>
                            <td>
                                <FavoriteStar favorited={ !!parseInt(user.Favorited) }/>
                            </td>
                            <td>
                                <Media>
                                    <Media.Left align='middle'>
                                        <AvatarImage
                                            src={ user.Avatar }
                                            showStatus
                                            statusPlacement='bottom'
                                            statusColor={ userStatusToColor(user.Status) }
                                        />
                                    </Media.Left>
                                    <Media.Body>
                                        <p className='text-white m-y-0'>
                                            { user.Name }
                                        </p>
                                        <p className='m-y-0'>
                                            { user.Position }
                                        </p>
                                    </Media.Body>
                                </Media>
                            </td>
                            <td>
                                { user.Email }
                            </td>
                            <td>
                                { user.Phone }
                            </td>
                            <td>
                                {
                                    userSocialToIcons(user.Social)
                                }
                            </td>
                            <td>
                                {
                                    renderActionsDropdown(toggleModal)
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>

        <div className='text-center'>
            <Pagination
                bsSize="medium"
                items={5}
                activePage={1}
                className='m-b-2'
                boundaryLinks
                prev
                next
                first
                last
                ellipsis
            />
        </div>
    </div>
);

const renderUsersGrid = (users, toggleModal) => (
    <div className='m-t-2'>
        <Row>
            {
                _.map(users, user => (
                    <Col lg={ 4 } md={ 6 } key={ user._id }>
                        <Panel className='text-center'>
                            <AvatarImage
                                src={ user.Avatar }
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ userStatusToColor(user.Status) }
                                size='large'
                            />
                            <div className='m-y-1'>
                                <span className='h4 text-white'>
                                    { `${user.Name} ` }
                                </span>
                                <FavoriteStar favorited={ !!parseInt(user.Favorited) }/>
                            </div>
                            <p>
                                { user.Position }
                            </p>
                            <div className='p-y-2'>
                                { renderGridActionsDropdown(toggleModal) }
                            </div>
                        </Panel>
                    </Col>
                ))
            }
        </Row>

        <div className='text-center'>
            <Pagination
                bsSize="medium"
                items={5}
                activePage={1}
                className='m-b-2'
                boundaryLinks
                prev
                next
                first
                last
                ellipsis
            />
        </div>
    </div>
);

// ------------------------------------
// Main Container
// ------------------------------------
class UsersContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            data: getData(usersData),

            callModalVisible: false,
            profileModalVisible: false,
            chatModalVisible: false,
            videoModalVisible: false,
            editModalVisible: false,
            deleteModalVisible: false
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    toggleModal(modalName, open = true) {
        this.setState({
            [`${modalName}Visible`]: open
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={ 2 }>
                        <Row>
                            <Col lg={ 12 } xs={ 6 }>
                                <SideNav
                                    items={ folders }
                                    folderSelected={ () => { this.props.history.push('/apps/inbox') } }
                                />
                            </Col>
                            <Col lg={ 12 } xs={ 6 }>
                                <Divider>Labels</Divider>
                                <LabelsList
                                    items={ labels }
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={ 10 }>
                        {/*   List Header  */}
                        <Row>
                            <Col lg={ 4 } md={ 6 } sm={ 5 } xs={ 12 }>
                                <SearchBox />
                                {/*     Mobile Actions  */}
                                <Row>
                                    <Col
                                        md={ 12 }
                                        lgHidden
                                        mdHidden
                                        smHidden
                                        className='m-b-2'
                                    >
                                        <ButtonGroup justified>
                                            <Button href="javascript:;">
                                                <i className='fa fa-folder'></i>
                                            </Button>
                                            <Button href="javascript:;">
                                                <i className='fa fa-link'></i>
                                            </Button>
                                            <LinkContainer to='/apps/users/list'>
                                                <Button href="javascript:;">
                                                    <i className='fa fa-list'></i>
                                                </Button>
                                            </LinkContainer>
                                            <LinkContainer to='/apps/users/grid'>
                                                <Button href="javascript:;">
                                                    <i className='fa fa-th-large'></i>
                                                </Button>
                                            </LinkContainer>
                                            <Button href="javascript:;">
                                                <i className='fa fa-plus'></i>
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xsHidden lg={ 8 }  md={ 6 } sm={ 7 }>
                                <ButtonToolbar className='pull-right'>
                                    <ButtonGroup>
                                        <Button href='javascript:;'>
                                            <i className='fa fa-folder'></i>
                                        </Button>
                                        <Button href='javascript:;'>
                                            <i className='fa fa-link'></i>
                                        </Button>
                                        <Button href='javascript:;'>
                                            <i className='fa fa-trash'></i>
                                        </Button>
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <LinkContainer to='/apps/users/list'>
                                            <Button href='javascript:;'>
                                                <i className='fa fa-list'></i>
                                            </Button>
                                        </LinkContainer>
                                        <LinkContainer to='/apps/users/grid'>
                                            <Button href='javascript:;'>
                                                <i className='fa fa-th-large'></i>
                                            </Button>
                                        </LinkContainer>
                                    </ButtonGroup>

                                    <ButtonGroup>
                                        <Button href='javascript:;' bsStyle='primary'>
                                            <i className='fa fa-fw fa-plus'></i>
                                        </Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Col>
                        </Row>
                        {/*   List Container   */}
                        <Row>
                            <Col lg={ 12 }>
                                { (this.props.routeParams.listStyle === 'list' && renderUsersList(this.state.data.Users, this.toggleModal.bind(this))) }
                                { (this.props.routeParams.listStyle === 'grid' && renderUsersGrid(_.first(this.state.data.Users, 15), this.toggleModal.bind(this))) }
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <EditModal visible={ this.state.editModalVisible } onClose={ () => { this.toggleModal('editModal', false) } } />
                <DeleteModal visible={ this.state.deleteModalVisible } onClose={ () => { this.toggleModal('deleteModal', false) } } />
                <VideoModal visible={ this.state.videoModalVisible } onClose={ () => { this.toggleModal('videoModal', false) } } />
                <CallModal visible={ this.state.callModalVisible } onClose={ () => { this.toggleModal('callModal', false) } } />
                <ProfileModal visible={ this.state.profileModalVisible } onClose={ () => { this.toggleModal('profileModal', false) } }/>
                <ChatModal visible={ this.state.chatModalVisible } onClose={ () => { this.toggleModal('chatModal', false) } } />
            </div>
        );
    }
}

export default connect()(UsersContainer);
