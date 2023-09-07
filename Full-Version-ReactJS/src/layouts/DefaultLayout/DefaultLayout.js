import React, { useEffect } from 'react'
import _ from 'underscore'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { faker } from '@faker-js/faker'
import { LinkContainer } from 'react-router-bootstrap'

import treeRandomizer from 'modules/treeRandomizer'
import getLogoBySkin from './getLogoBySkin.js'

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
  Footer
} from 'components'

import classes from './DefaultLayout.scss'

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
} from './modules/layout.js'

// Sub Components
import {
  SidebarAddOns,
  LayoutOptions,
  SearchBox,
  SearchBoxMobile,
  MessagesDropdown,
  NotificationsDropdown,
  RightSidebarTabs
} from './components'

import rightSidebarDataRaw from 'consts/data/right-sidebar.json'

const sidebarAddOns = {
  [SIDEBAR_ADDON_PROGRESS]: (props) => <SidebarAddOns.ProgressAddOn {...props} />,
  [SIDEBAR_ADDON_MENU]: (props) => <SidebarAddOns.MenuAddOn {...props} />,
  [SIDEBAR_ADDON_BARS]: (props) => <SidebarAddOns.BarsAddOn {...props} />,
  [SIDEBAR_ADDON_AVATAR_AND_BARS]: (props) => <SidebarAddOns.AvatarAndBarsAddOn {...props} />,
  [SIDEBAR_ADDON_AVATAR_AND_NUMBERS]: (props) => <SidebarAddOns.AvatarAndNumbersAddOn {...props} />,
  [SIDEBAR_ADDON_AVATAR_AND_STATS]: (props) => <SidebarAddOns.AvatarAndStatsAddOn {...props} />
}

const profileUser = {
  name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  avatar: faker.image.avatar()
}

const rightSidebarData = treeRandomizer(rightSidebarDataRaw)

let rightSidebarTriggerRef, sidebarTriggerRef, navbarTriggerRef

const DefaultLayout = (props) => {
  const location = useLocation()
  let beforeSlimSidebarStyle

  const handleSelect = () => {}
  const handleToggleSidebar = () => {
    const { sidebarStyle, setSidebarStyle } = props

    if (sidebarStyle === SIDEBAR_STYLE_SLIM) {
      setSidebarStyle(beforeSlimSidebarStyle)
    } else {
      beforeSlimSidebarStyle = sidebarStyle
      setSidebarStyle(SIDEBAR_STYLE_SLIM)
    }
  }

  useEffect(() => {
    beforeSlimSidebarStyle = SIDEBAR_STYLE_DEFAULT
  }, [])

  const staticFootNavContainer = !props.sidebarEnabled && props.contentView === CONTENT_VIEW_STATIC

  const navbarLogo = getLogoBySkin.navbar(props.navbarSkin, props.skinColor),
    sidebarOverlayLogo = getLogoBySkin.sidebar(props.sidebarSkin, 'overlay', props.skinColor),
    sidebarBigLogo = getLogoBySkin.sidebar(props.sidebarSkin, 'big', props.skinColor),
    sidebarSlimLogo = getLogoBySkin.sidebar(props.sidebarSkin, 'slim', props.skinColor)

  return (
    <Layout
      {...props}
      screenSizeChanged={(newScreenSize) => props.setCurrentScreenSize(newScreenSize)}
    >
      <Layout.Navigation>
        <Navbar
          fluid={!staticFootNavContainer}
          inverse
          componentClass="div"
          expanded={props.navbarExpanded}
          onToggle={() => {}}
        >
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img src={navbarLogo} height={20} alt="Spin Dashboard" />
              </Link>
            </Navbar.Brand>

            {/* Mobile Actions */}
            {props.currentScreenSize === SCREEN_SIZE_XS && (
              <div className="pull-right">
                <button
                  className="btn btn-outline navbar-toggle"
                  onClick={() => props.toggleRightSidebar(!props.rightSidebarEnabled)}
                  ref={(ref) => {
                    rightSidebarTriggerRef = ref
                  }}
                >
                  <i className="fa fa-fw fa-align-right text-white"></i>
                </button>
                <button
                  className="btn btn-outline navbar-toggle"
                  onClick={() => props.toggleNavbarExpanded(!props.navbarExpanded)}
                  ref={(ref) => {
                    navbarTriggerRef = ref
                  }}
                >
                  <i className="fa fa-fw fa-user text-white"></i>
                </button>
                <button
                  className="btn btn-outline navbar-toggle"
                  ref={(ref) => {
                    sidebarTriggerRef = ref
                  }}
                  onClick={() => props.toggleOverlaySidebarOpen(!props.overlaySidebarOpen)}
                >
                  <i className="fa fa-fw fa-bars text-white"></i>
                </button>
              </div>
            )}
          </Navbar.Header>

          <OutsideClick
            excludedElements={[navbarTriggerRef]}
            onClickOutside={() => props.toggleNavbarExpanded(false)}
          >
            <Navbar.Collapse>
              {/* ============= Left Nav ============== */}
              {!props.sidebarEnabled && (
                <Navbar.Menu currentPath={location.pathname}>
                  <Row>
                    <Col sm={2} xs={6}>
                      <Navbar.MenuSection slug="start" />
                      <Navbar.MenuSection slug="widgets" />
                      <Navbar.MenuSection slug="tables" />
                    </Col>
                    <Col sm={2} xs={6}>
                      <Navbar.MenuSection slug="layouts" />
                      <Navbar.MenuSection slug="graphs" />
                    </Col>
                    <Col sm={2} xs={6}>
                      <Navbar.MenuSection slug="interface" />
                      <Navbar.MenuSection slug="grids" />
                    </Col>
                    <Col sm={2} xs={6}>
                      <Navbar.MenuSection slug="pages" />
                      <Navbar.MenuSection slug="forms" />
                      <Navbar.MenuSection slug="tasks" />
                    </Col>
                    <Col sm={2} xs={6}>
                      <Navbar.MenuSection slug="projects" />
                      <Navbar.MenuSection slug="files-manager" />
                      <Navbar.MenuSection slug="search" />
                      <Navbar.MenuSection slug="mailbox" />
                    </Col>
                    <Col sm={2} xs={6}>
                      <Navbar.MenuSection slug="users" />
                      <Navbar.MenuSection slug="user-profile" />
                      <Navbar.MenuSection slug="apps" />
                      <Navbar.MenuSection slug="icons" />
                    </Col>
                  </Row>
                </Navbar.Menu>
              )}
              <Nav>
                {props.sidebarEnabled && props.currentScreenSize !== SCREEN_SIZE_XS && (
                  <NavItem onClick={() => handleToggleSidebar()}>
                    <i className="fa fa-lg fa-bars"></i>
                  </NavItem>
                )}
                <SearchBox />
                <SearchBoxMobile />
              </Nav>

              {/* ============= Right Nav ============== */}
              <Navbar.Text className="visible-xs text-uppercase m-y-0">Your Profile</Navbar.Text>
              <Nav pullRight>
                <NotificationsDropdown />
                <MessagesDropdown />

                <NavDropdown
                  title={
                    <div className={classes.buttonUser}>
                      <span className="m-r-1 v-a-m">{profileUser.name}</span>
                      <AvatarImage
                        size="small"
                        src={profileUser.avatar}
                        style={{ width: '19px', height: '19px' }}
                      />
                    </div>
                  }
                  id="user-profile-dropdown"
                  eventKey={3}
                  noCaret
                >
                  <NavDropdown.Item header className="text-uppercase hidden-xs">
                    <strong className="text-gray-lighter">Account</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Item divider className="hidden-xs" />
                  <LinkContainer to="/apps/profile-details">
                    <NavDropdown.Item eventKey={3.1}>Your Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/apps/user-profile/edit/settings">
                    <NavDropdown.Item eventKey={3.2}>Settings</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/apps/faq">
                    <NavDropdown.Item eventKey={3.3}>Faq</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item divider />
                  <LinkContainer to="/pages/login">
                    <NavDropdown.Item eventKey={3.4}>Sign Out</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavItem
                  className="hidden-xs"
                  ref="rightSidebarToggler"
                  onClick={() => props.toggleRightSidebar()}
                >
                  <i className="fa fa-lg fa-align-right" />
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </OutsideClick>
        </Navbar>

        <OutsideClick
          active={props.currentScreenSize === SCREEN_SIZE_XS}
          excludedElements={[sidebarTriggerRef]}
          onClickOutside={() => props.toggleOverlaySidebarOpen(false)}
        >
          <Sidebar
            className="p-b-3"
            affixOffset={props.navbarEnabled ? 50 : 0}
            overlay={props.currentScreenSize === SCREEN_SIZE_XS}
            overlayVisible={props.overlaySidebarOpen}
            header={
              <div>
                <img src={sidebarOverlayLogo} width={90} alt="Logo" />
                <a
                  className="sidebar-switch"
                  href="javascript:void(0)"
                  onClick={() => props.toggleOverlaySidebarOpen(false)}
                >
                  <i className="fa fa-times"></i>
                </a>
              </div>
            }
          >
            {/* Renders Appropriate SidebarAddOn */}
            {(() => {
              if (props.sidebarAddon === SIDEBAR_ADDON_DEFAULT) {
                return (
                  <div className="sidebar-logo">
                    <img className="logo-default" width={53} src={sidebarBigLogo} />
                    <img className="logo-slim" height={13} src={sidebarSlimLogo} />
                  </div>
                )
              } else {
                return sidebarAddOns[props.sidebarAddon]({
                  colorSidebar: props.sidebarSkin === SKIN_COLOR
                })
              }
            })()}
            <div className="sidebar-default-visible text-muted small text-uppercase sidebar-section p-y-2">
              <strong>Navigation</strong>
            </div>
            <Sidebar.Menu currentUrl={props.location.pathname} />
          </Sidebar>
        </OutsideClick>
      </Layout.Navigation>

      {
        // RawContent - displays the content directly without the header nor container
        props.rawContent ? (
          <Layout.Content>{props.children}</Layout.Content>
        ) : (
          <Layout.Content style={{ paddingTop: !props.headerEnabled ? '19px' : '0' }}>
            <Header
              style={props.headerStyle}
              fluid={props.contentView !== CONTENT_VIEW_STATIC}
              currentUrl={props.location.pathname}
            />
            <Grid fluid={props.contentView !== CONTENT_VIEW_STATIC}>{props.children}</Grid>
          </Layout.Content>
        )
      }

      <OutsideClick
        excludedElements={[rightSidebarTriggerRef]}
        onClickOutside={() => {
          if (props.rightSidebarEnabled) props.toggleRightSidebar(false)
        }}
      >
        <RightSidebar affixOffset={props.navbarEnabled ? 50 : 0} active={props.rightSidebarEnabled}>
          <Tabs
            className="m-r-1 m-t-2"
            defaultActiveKey={1}
            id="controlled-tab-example"
            bsStyle="highlight"
            onSelect={() => handleSelect()}
          >
            <Tab eventKey={1} title={<span className="fa fa-calendar-o"></span>}>
              <RightSidebarTabs.First data={rightSidebarData} />
            </Tab>

            <Tab eventKey={2} title={<span className="fa fa-area-chart"></span>}>
              <RightSidebarTabs.Second data={rightSidebarData} />
            </Tab>

            <Tab eventKey={3} title={<span className="fa fa-users"></span>}>
              <RightSidebarTabs.Third data={rightSidebarData.Chat} />
            </Tab>

            <Tab eventKey={4} title={<span className="fa fa-list"></span>}>
              <RightSidebarTabs.Fourth />
            </Tab>

            <Tab eventKey={5} title={<span className="fa fa-gear"></span>}>
              <RightSidebarTabs.Fifth />
            </Tab>
          </Tabs>
        </RightSidebar>
      </OutsideClick>

      <LayoutOptions />

      <Footer fluid={!staticFootNavContainer}>
        <p className="text-gray-dark">
          <strong className="m-r-1">SPIN Dashboard </strong>
          <span className="text-gray-dark">
            © 2009 - 2016. Made by
            <i className="fa fa-fw fa-heart text-danger"></i> New York, US
          </span>
        </p>
      </Footer>
    </Layout>
  )
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
  rawContent: state.app.rawContent
})

const mapActionCreators = {
  setSidebarStyle,
  toggleRightSidebar,
  toggleOverlaySidebarOpen,
  toggleNavbarExpanded,
  setCurrentScreenSize,
  changeSidebarAddOn
}

export default connect(mapStateToProps, mapActionCreators)(DefaultLayout)
