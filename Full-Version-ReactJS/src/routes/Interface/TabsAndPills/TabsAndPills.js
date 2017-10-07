import React from 'react';

import {
    Row,
    Col,
    Tabs,
    Tab,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class TabsAndPillsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <p>
                        Navs can by used by adding the <kbd>Nav</kbd> component. You can change its style by setting different props.
                    </p>

                    <Row className='m-t-2'>
                        <Col lg={ 6 }>
                            <h5>Tabs</h5>
                            <p className='m-b-2'>
                                Tabs are created by adding <kbd>Tabs</kbd> component with nested <kbd>Tab</kbd> children inside.
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Example</strong>
                            </p>
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Home"></Tab>
                                <Tab eventKey={2} title="Profile"></Tab>
                                <Tab eventKey={3} title="Messages"></Tab>
                            </Tabs>
                        </Col>
                        <Col lg={ 6 }>
                            <h5>Tabs Justified</h5>
                            <p className='m-b-2'>
                                They can be justified to take the full width of their parent. Use the <kbd>justified</kbd> prop.
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Example</strong>
                            </p>
                            <Tabs defaultActiveKey={1} id="justified-tab-example" justified>
                                <Tab eventKey={1} title="Home"></Tab>
                                <Tab eventKey={2} title="Profile"></Tab>
                                <Tab eventKey={3} title="Messages"></Tab>
                            </Tabs>
                        </Col>
                    </Row>

                    <Row className='m-t-3'>
                        <Col lg={ 6 }>
                            <h5>Tabs with Dropdowns</h5>
                            <p className='m-b-2'>
                                Add dropdowns using the <kbd>NavDropdown</kbd> component.
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Example</strong>
                            </p>
                            <Nav bsStyle="tabs" activeKey="1">
                                <NavItem eventKey="1" title="Home">Home</NavItem>
                                <NavItem eventKey="2" title="Profile">Profile</NavItem>
                                <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-example">
                                    <MenuItem eventKey="3.1">Action</MenuItem>
                                    <MenuItem eventKey="3.2">Another action</MenuItem>
                                    <MenuItem eventKey="3.3">Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="3.4">Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Col>
                        <Col lg={ 6 }>
                            <h5>Highlight Tabs</h5>
                            <p className='m-b-2'>
                                Set <kbd>bsStyle</kbd> prop to <kbd>highlight</kbd> for this style.
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Example</strong>
                            </p>
                            <Tabs bsStyle='highlight' defaultActiveKey={1} id="alternative-tab-example">
                                <Tab eventKey={1} title="Home"></Tab>
                                <Tab eventKey={2} title="Profile"></Tab>
                                <Tab eventKey={3} title="Messages"></Tab>
                            </Tabs>
                        </Col>
                    </Row>

                    <Row className='m-t-3'>
                        <Col lg={ 4 }>
                            <h5>Pills</h5>
                            <p className='m-b-2'>
                                By setting the <kbd>bsStyle</kbd> to pills.
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Example</strong>
                            </p>
                            <Nav bsStyle="pills" activeKey={1}>
                                <NavItem eventKey={1}>Home</NavItem>
                                <NavItem eventKey={2}>Profile</NavItem>
                                <NavItem eventKey={3}>Messages</NavItem>
                            </Nav>
                        </Col>
                        <Col lg={ 5 }>
                            <h5>Pills Justified</h5>
                            <p className='m-b-2'>
                                You can easily make the pills justified by setting the <kbd>justified</kbd> prop.
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Example</strong>
                            </p>
                            <Nav bsStyle="pills" activeKey={1} justified>
                                <NavItem eventKey={1}>Home</NavItem>
                                <NavItem eventKey={2}>Profile</NavItem>
                                <NavItem eventKey={3}>Messages</NavItem>
                            </Nav>
                        </Col>
                        <Col lg={ 3 }>
                            <h5>Pills Stacked</h5>
                            <p className='m-b-2'>
                                Pills can abe vertically stacked, just add <kbd>stacked</kbd> prop to the <kbd>Nav</kbd> component.
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Example</strong>
                            </p>
                            <Nav bsStyle="pills" stacked activeKey={1}>
                                <NavItem eventKey={1}>Home</NavItem>
                                <NavItem eventKey={2}>Profile</NavItem>
                                <NavItem eventKey={3}>Messages</NavItem>
                            </Nav>
                        </Col>
                    </Row>
                    <Row className='m-t-3'>
                        <Col lg={ 4 }>
                            <h5>Disabled links</h5>
                            <p className='m-b-2'>
                                <kbd>disabled</kbd> prop makes the tab unclickable
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Example</strong>
                            </p>
                            <Nav bsStyle="pills" activeKey={2}>
                                <NavItem eventKey={1} disabled>Disabled</NavItem>
                                <NavItem eventKey={2}>Profile</NavItem>
                                <NavItem eventKey={3}>Messages</NavItem>
                            </Nav>
                        </Col>
                        <Col lg={ 5 }>
                            <h5>Pills With Dropdowns</h5>
                            <p className='m-b-2'>
                                Add <kbd>NavDropdown</kbd> component to attach a Dropdown Menu
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Example</strong>
                            </p>
                            <Nav bsStyle="pills" activeKey={2}>
                                <NavItem eventKey={1} disabled>Disabled</NavItem>
                                <NavItem eventKey={2}>Profile</NavItem>
                                <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">
                                    <MenuItem eventKey="3.1">Action</MenuItem>
                                    <MenuItem eventKey="3.2">Another action</MenuItem>
                                    <MenuItem eventKey="3.3">Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="3.4">Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(TabsAndPillsContainer);
