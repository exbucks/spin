import React from 'react';
import PropTypes from 'prop-types'
import _ from 'underscore';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { LinkContainer } from 'react-router-bootstrap';

import treeRandomizer from 'modules/treeRandomizer';
import ROUTES, { findActiveNodes } from 'routes/routesStructure';
import getLogoBySkin from './getLogoBySkin.js';

// Components
import {
    Grid,
    Row,
    Col,
    Layout,
    Sidebar,
    OutsideClick,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    AvatarImage,
    RightSidebar,
    Tabs,
    Tab,
    Header,
    Footer,
} from 'components';

import classes from './DefaultLayout.scss';

// Redux Module imports
import {
    setSidebarStyle,
    toggleRightSidebar,
    toggleOverlaySidebarOpen,
    setCurrentScreenSize,
    toggleNavbarExpanded,
    changeSidebarAddOn,

    SIDEBAR_ADDON_DEFAULT,
    SIDEBAR_ADDON_PROGRESS,
    SIDEBAR_ADDON_MENU,
    SIDEBAR_ADDON_BARS,
    SIDEBAR_ADDON_AVATAR_AND_BARS,
    SIDEBAR_ADDON_AVATAR_AND_NUMBERS,
    SIDEBAR_ADDON_AVATAR_AND_STATS,

    SIDEBAR_STYLE_DEFAULT,
    SIDEBAR_STYLE_SLIM,

    SKIN_COLOR,

    CONTENT_VIEW_STATIC,

    SCREEN_SIZE_XS
} from './modules/layout.js';

// Sub Components
import {
    SidebarAddOns,
    LayoutOptions,
    SearchBox,
    SearchBoxMobile,
    MessagesDropdown,
    NotificationsDropdown,
    RightSidebarTabs
} from './components';

import rightSidebarDataRaw from 'consts/data/right-sidebar.json';

const titleBase = 'SPIN (React) - ';

const sidebarAddOns = {
    [SIDEBAR_ADDON_PROGRESS]: (props) => ( <SidebarAddOns.ProgressAddOn { ...props } /> ),
    [SIDEBAR_ADDON_MENU]: (props) => ( <SidebarAddOns.MenuAddOn { ...props } /> ),
    [SIDEBAR_ADDON_BARS]: (props) => ( <SidebarAddOns.BarsAddOn { ...props } /> ),
    [SIDEBAR_ADDON_AVATAR_AND_BARS]: (props) => ( <SidebarAddOns.AvatarAndBarsAddOn { ...props } /> ),
    [SIDEBAR_ADDON_AVATAR_AND_NUMBERS]: (props) => ( <SidebarAddOns.AvatarAndNumbersAddOn { ...props } /> ),
    [SIDEBAR_ADDON_AVATAR_AND_STATS]: (props) => ( <SidebarAddOns.AvatarAndStatsAddOn { ...props } /> )
}

const profileUser = {
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    avatar: faker.image.avatar()
};

const rightSidebarData = treeRandomizer(rightSidebarDataRaw);

let rightSidebarTriggerRef,
    sidebarTriggerRef,
    navbarTriggerRef;

class DefaultLayout extends React.Component {
    static propTypes = {
        sidebarAddon: PropTypes.string
    };

    constructor(props, context) {
        super(props, context);

        this.beforeSlimSidebarStyle = SIDEBAR_STYLE_DEFAULT;
    }

    toggleSidebarSlim() {
        const { sidebarStyle, setSidebarStyle } = this.props;

        if(sidebarStyle === SIDEBAR_STYLE_SLIM) {
            setSidebarStyle(this.beforeSlimSidebarStyle)
        } else {
            this.beforeSlimSidebarStyle = sidebarStyle;
            setSidebarStyle(SIDEBAR_STYLE_SLIM);
        }
    }

    componentDidMount() {
        this.bodyElement = document.querySelector('body');
    }

    componentDidUpdate(prevProps) {
        // Set Overflow: Hidden on body when overlay mode is enabled
        this.bodyElement.style.overflow = (this.props.currentScreenSize === SCREEN_SIZE_XS &&
            (
                this.props.navbarExpanded ||
                this.props.overlaySidebarOpen ||
                this.props.rightSidebarEnabled
            )) ? 'hidden' : 'auto';

        // Update page title
        const activeRoute = _.first(findActiveNodes(ROUTES, this.props.location.pathname));
        document.title = titleBase + activeRoute.title;
    }

    render() {
        const staticFootNavContainer =
            !this.props.sidebarEnabled && this.props.contentView === CONTENT_VIEW_STATIC;

        const navbarLogo = getLogoBySkin.navbar(this.props.navbarSkin, this.props.skinColor),
              sidebarOverlayLogo = getLogoBySkin.sidebar(this.props.sidebarSkin, 'overlay', this.props.skinColor),
              sidebarBigLogo = getLogoBySkin.sidebar(this.props.sidebarSkin, 'big', this.props.skinColor),
              sidebarSlimLogo = getLogoBySkin.sidebar(this.props.sidebarSkin, 'slim', this.props.skinColor);

        return (
            <Layout
                { ...this.props }
                screenSizeChanged={
                    newScreenSize => this.props.setCurrentScreenSize(newScreenSize)
                }
            >
                <Layout.Navigation>
                    <Navbar
                        fluid={ !staticFootNavContainer }
                        inverse
                        componentClass='div'
                        expanded={ this.props.navbarExpanded }
                        onToggle={ () => { } }
                    >
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to='/'>
                                    <img src={ navbarLogo } height={ 20 } alt="Spin Dashboard" />
                                </Link>
                            </Navbar.Brand>

                            { /* Mobile Actions */ }
                            {
                                this.props.currentScreenSize === SCREEN_SIZE_XS && (
                                    <div className='pull-right'>
                                        <button
                                            className='btn btn-outline navbar-toggle'
                                            onClick={ () => this.props.toggleRightSidebar(!this.props.rightSidebarEnabled) }
                                            ref={ ref => { rightSidebarTriggerRef = ref } }
                                        >
                                            <i className='fa fa-fw fa-align-right text-white'></i>
                                        </button>
                                        <button
                                            className='btn btn-outline navbar-toggle'
                                            onClick={ () => this.props.toggleNavbarExpanded(!this.props.navbarExpanded) }
                                            ref={ ref => { navbarTriggerRef = ref } }
                                        >
                                            <i className='fa fa-fw fa-user text-white'></i>
                                        </button>
                                        <button
                                            className='btn btn-outline navbar-toggle'
                                            onClick={ () => this.props.toggleOverlaySidebarOpen(!this.props.overlaySidebarOpen) }
                                            ref={ ref => { sidebarTriggerRef = ref } }
                                        >
                                            <i className='fa fa-fw fa-bars text-white'></i>
                                        </button>
                                    </div>
                                )
                            }
                        </Navbar.Header>

                        <OutsideClick
                            onClickOutside={ () => {
                                this.props.toggleNavbarExpanded(false);
                            } }
                            excludedElements={ [navbarTriggerRef] }
                        >
                            <Navbar.Collapse>
                                { /* ============= Left Nav ============== */ }
                                {
                                    !this.props.sidebarEnabled && (
                                        <Navbar.Menu currentPath={ this.props.location.pathname }>
                                            <Row>
                                                <Col sm={ 2 } xs={ 6 }>
                                                    <Navbar.MenuSection slug='start' />
                                                    <Navbar.MenuSection slug='widgets' />
                                                    <Navbar.MenuSection slug='tables' />
                                                </Col>
                                                <Col sm={ 2 } xs={ 6 }>
                                                    <Navbar.MenuSection slug='layouts' />
                                                    <Navbar.MenuSection slug='graphs' />
                                                </Col>
                                                <Col sm={ 2 } xs={ 6 }>
                                                    <Navbar.MenuSection slug='interface' />
                                                    <Navbar.MenuSection slug='grids' />
                                                </Col>
                                                <Col sm={ 2 } xs={ 6 }>
                                                    <Navbar.MenuSection slug='pages' />
                                                    <Navbar.MenuSection slug='forms' />
                                                    <Navbar.MenuSection slug='tasks' />
                                                </Col>
                                                <Col sm={ 2 } xs={ 6 }>
                                                    <Navbar.MenuSection slug='projects' />
                                                    <Navbar.MenuSection slug='files-manager' />
                                                    <Navbar.MenuSection slug='search' />
                                                    <Navbar.MenuSection slug='mailbox' />
                                                </Col>
                                                <Col sm={ 2 } xs={ 6 }>
                                                    <Navbar.MenuSection slug='users' />
                                                    <Navbar.MenuSection slug='user-profile' />
                                                    <Navbar.MenuSection slug='apps' />
                                                    <Navbar.MenuSection slug='icons' />
                                                </Col>
                                            </Row>
                                        </Navbar.Menu>
                                    )
                                }
                                <Nav>
                                    {
                                        this.props.sidebarEnabled && this.props.currentScreenSize !== SCREEN_SIZE_XS && (
                                            <NavItem
                                                onClick={ () => this.toggleSidebarSlim() }
                                            >
                                                <i className="fa fa-lg fa-bars"></i>
                                            </NavItem>
                                        )
                                    }
                                    <SearchBox />
                                    <SearchBoxMobile />
                                </Nav>

                                { /* ============= Right Nav ============== */ }
                                <Navbar.Text className='visible-xs text-uppercase m-y-0'>
                                    Your Profile
                                </Navbar.Text>
                                <Nav pullRight>
                                    <NotificationsDropdown />
                                    <MessagesDropdown />

                                    <NavDropdown
                                        title={
                                            <div className={ classes.buttonUser }>
                                                <span className="m-r-1 v-a-m">
                                                    { profileUser.name }
                                                </span>
                                                <AvatarImage
                                                    size='small'
                                                    src={ profileUser.avatar }
                                                    style={{
                                                        width: '19px',
                                                        height: '19px'
                                                    }}
                                                />
                                            </div>
                                        }
                                        id="user-profile-dropdown"
                                        eventKey={ 3 }
                                        noCaret
                                    >
                                        <NavDropdown.Item
                                            header
                                            className='text-uppercase hidden-xs'
                                        >
                                            <strong className='text-gray-lighter'>
                                                Account
                                            </strong>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item divider className='hidden-xs'/>
                                        <LinkContainer to='/apps/profile-details'>
                                            <NavDropdown.Item eventKey={3.1}>Your Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/apps/user-profile/edit/settings'>
                                            <NavDropdown.Item eventKey={3.2}>Settings</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/apps/faq'>
                                            <NavDropdown.Item eventKey={3.3}>Faq</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item divider />
                                        <LinkContainer to='/pages/login'>
                                            <NavDropdown.Item eventKey={3.4}>Sign Out</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>

                                    <NavItem
                                        onClick={ () => this.props.toggleRightSidebar() }
                                        className='hidden-xs'
                                        ref='rightSidebarToggler'
                                    >
                                        <i className="fa fa-lg fa-align-right"></i>
                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </OutsideClick>
                    </Navbar>

                    <OutsideClick
                        active={ this.props.currentScreenSize === SCREEN_SIZE_XS }
                        onClickOutside={ () => { this.props.toggleOverlaySidebarOpen(false) } }
                        excludedElements={ [sidebarTriggerRef] }
                    >
                        <Sidebar
                            className='p-b-3'
                            affixOffset={ this.props.navbarEnabled ? 50 : 0 }
                            overlay={ this.props.currentScreenSize === SCREEN_SIZE_XS }
                            overlayVisible={ this.props.overlaySidebarOpen }
                            header={(
                                <div>
                                    <img src={ sidebarOverlayLogo } width={ 90 } alt="Logo" />
                                    <a
                                        href="javascript:void(0)"
                                        className="sidebar-switch"
                                        onClick={ () => this.props.toggleOverlaySidebarOpen(false) }
                                    >
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            )}
                        >
                            { /* Renders Appropriate SidebarAddOn */ }
                            {
                                (() => {
                                    if(this.props.sidebarAddon === SIDEBAR_ADDON_DEFAULT) {
                                        return (
                                            <div className="sidebar-logo">
                                                <img className="logo-default" width={ 53 } src={ sidebarBigLogo } />
                                                <img className="logo-slim" height={ 13 } src={ sidebarSlimLogo } />
                                            </div>
                                        );
                                    } else {
                                        return sidebarAddOns[this.props.sidebarAddon]({ colorSidebar: this.props.sidebarSkin === SKIN_COLOR });
                                    }
                                })()
                            }
                            <div className='sidebar-default-visible text-muted small text-uppercase sidebar-section p-y-2'>
                                <strong>Navigation</strong>
                            </div>
                            <Sidebar.Menu
                                currentUrl={ this.props.location.pathname }
                            />
                        </Sidebar>
                    </OutsideClick>
                </Layout.Navigation>

                {
                    // RawContent - displays the content directly without the header nor container
                    this.props.rawContent ? (
                        <Layout.Content>
                            { this.props.children }
                        </Layout.Content>
                    ) : (
                        <Layout.Content style={ { paddingTop: !this.props.headerEnabled ? '19px' : '0' } }>
                            <Header
                                style={ this.props.headerStyle }
                                fluid={ this.props.contentView !== CONTENT_VIEW_STATIC }
                                currentUrl={ this.props.location.pathname }
                            />
                            <Grid fluid={ this.props.contentView !== CONTENT_VIEW_STATIC }>
                                { this.props.children }
                            </Grid>
                        </Layout.Content>
                    )
                }

                <OutsideClick
                    excludedElements={ [rightSidebarTriggerRef] }
                    onClickOutside={
                        () => {
                            if(this.props.rightSidebarEnabled) {
                                this.props.toggleRightSidebar(false);
                            }
                        }
                    }
                >
                    <RightSidebar
                        affixOffset={ this.props.navbarEnabled ? 50 : 0 }
                        active={ this.props.rightSidebarEnabled }
                    >
                        <Tabs
                            defaultActiveKey={ 1 }
                            onSelect={this.handleSelect}
                            id="controlled-tab-example"
                            bsStyle='highlight'
                            className='m-r-1 m-t-2'
                        >
                            <Tab
                                eventKey={ 1 }
                                title={
                                    <span className="fa fa-calendar-o"></span>
                                }
                            >
                                <RightSidebarTabs.First data={ rightSidebarData } />
                            </Tab>

                            <Tab
                                eventKey={ 2 }
                                title={
                                    <span className="fa fa-area-chart"></span>
                                }
                            >
                                <RightSidebarTabs.Second data={ rightSidebarData } />
                            </Tab>

                            <Tab
                                eventKey={ 3 }
                                title={
                                    <span className="fa fa-users"></span>
                                }
                            >
                                <RightSidebarTabs.Third data={ rightSidebarData.Chat } />
                            </Tab>

                            <Tab
                                eventKey={ 4 }
                                title={
                                    <span className="fa fa-list"></span>
                                }
                            >
                                <RightSidebarTabs.Fourth />
                            </Tab>

                            <Tab
                                eventKey={ 5 }
                                title={
                                    <span className="fa fa-gear"></span>
                                }
                            >
                                <RightSidebarTabs.Fifth />
                            </Tab>
                        </Tabs>
                    </RightSidebar>
                </OutsideClick>

                <LayoutOptions />

                <Footer fluid={ !staticFootNavContainer }>
                    <p className="text-gray-dark">
                        <strong className="m-r-1">SPIN Dashboard </strong>
                        <span className="text-gray-dark">© 2009 - 2016. Made by
                        <i className="fa fa-fw fa-heart text-danger"></i> New York, US</span>
                    </p>
                </Footer>
            </Layout>
        )
    };
}

const mapStateToProps = (state) => ({
    navbarEnabled: state.app.navbarEnabled,
    navbarFixed: state.app.navbarFixed,
    navbarExpanded: state.app.navbarExpanded,
    navbarSkin: state.app.navbarSkin,
    sidebarEnabled: state.app.sidebarEnabled,
    sidebarStyle: state.app.sidebarStyle,
    sidebarFixed: state.app.sidebarFixed,
    sidebarAside: state.app.sidebarAside,
    sidebarAddon: state.app.sidebarAddon,
    sidebarSkin: state.app.sidebarSkin,
    overlaySidebarOpen: state.app.overlaySidebarOpen,
    contentView: state.app.contentView,
    footerEnabled: state.app.footerEnabled,
    footerFixed: state.app.footerFixed,
    rightSidebarEnabled: state.app.rightSidebarEnabled,
    headerStyle: state.app.headerStyle,
    headerEnabled: state.app.headerEnabled,
    currentScreenSize: state.app.currentScreenSize,
    skinColor: state.app.skinColor,
    rawContent: state.app.rawContent,
});

const mapActionCreators = {
    setSidebarStyle,
    toggleRightSidebar,
    toggleOverlaySidebarOpen,
    toggleNavbarExpanded,
    setCurrentScreenSize,
    changeSidebarAddOn
};

export default connect(mapStateToProps, mapActionCreators)(DefaultLayout);
