import React from 'react';
import faker from 'faker';

import {
    Row,
    Col,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Label,
    FormControl,
    Button,
    Form,
    FormGroup,
    InputGroup,
    AvatarImage
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import logo from 'static/spin-logo-inverted.png';

class NavbarsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    { /*        DEFAULT NAVBAR      */}
                    <h5>Default Navbar</h5>
                    <p>
                        Navbars are responsive meta components that serve as navigation headers for your application or site. They begin collapsed (and are toggleable) in mobile views and become horizontal as the available viewport width increases.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Navbar fluid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='javascript:void(0)'>
                                    <strong className='text-uppercase text-gray-darker'>
                                        SPIN
                                    </strong>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#" active>
                                    <i className="fa fa-fw fa-home"></i>
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    <i className="fa fa-fw fa-bars"></i>
                                </NavItem>
                                <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>

                            <Form className='navbar-form navbar-left' onSubmit={ (e) => { e.preventDefault() } }>
                                <FormGroup>
                                    <FormControl type='text' placeholder='Search...' />
                                </FormGroup>
                                { ' ' }
                                <Button bsStyle='primary'>Submit</Button>
                            </Form>

                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">
                                    <i className='fa fa-lg fa-bell'></i>
                                    <Label className='label-pill label-with-icon' bsStyle='primary'>10</Label>
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    <i className='fa fa-lg fa-envelope'></i>
                                    <Label className='label-pill label-with-icon' bsStyle='primary'>3</Label>
                                </NavItem>
                                <NavDropdown
                                    eventKey={3}
                                    title={(
                                        <AvatarImage
                                            src={ faker.image.avatar() }
                                            size='small'
                                        />
                                    )}
                                    id="basic-nav-usermenu"
                                >
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    { /*        INVERTED NAVBAR      */}
                    <h5 className="m-t-3">
                        Inverted Navbar
                    </h5>
                    <p>Modify the look of the navbar by adding <kbd>inverse</kbd> prop.</p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Navbar fluid inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='javascript:void(0)'>
                                    <strong className='text-uppercase text-white'>
                                        SPIN
                                    </strong>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#" active>
                                    <i className="fa fa-fw fa-home"></i>
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    <i className="fa fa-fw fa-bars"></i>
                                </NavItem>
                                <NavDropdown eventKey={3} title="Menu" id="inverse-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>

                            <Form className='navbar-form navbar-left' onSubmit={ (e) => { e.preventDefault() } }>
                                <FormGroup>
                                    <FormControl type='text' placeholder='Search...' />
                                </FormGroup>
                                { ' ' }
                                <Button bsStyle='primary'>Submit</Button>
                            </Form>

                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">
                                    <i className='fa fa-lg fa-bell'></i>
                                    <Label className='label-pill label-with-icon' bsStyle='primary'>10</Label>
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    <i className='fa fa-lg fa-envelope'></i>
                                    <Label className='label-pill label-with-icon' bsStyle='primary'>3</Label>
                                </NavItem>
                                <NavDropdown
                                    eventKey={3}
                                    title={(
                                        <AvatarImage
                                            src={ faker.image.avatar() }
                                            size='small'
                                        />
                                    )}
                                    id="inverse-nav-usermenu"
                                >
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    { /*        BRAND IMAGE NAVBAR      */}
                    <h5 className="m-t-3">
                        Brand Image
                    </h5>
                    <p>
                        Replace the navbar brand with your own image by swapping the text for an <kbd>&lt;img&gt;</kbd>. Since the <kbd>NavbarBrand</kbd> has its own padding and height, you may need to override some CSS depending on your image.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Navbar fluid inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='javascript:void(0)'>
                                    <img src={ logo } alt='Logo' />
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#" active>
                                    <i className="fa fa-fw fa-home"></i>
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    <i className="fa fa-fw fa-bars"></i>
                                </NavItem>
                                <NavDropdown eventKey={3} title="Menu" id="inverse-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>

                            <Form className='navbar-form navbar-left' onSubmit={ (e) => { e.preventDefault() } }>
                                <FormGroup>
                                    <FormControl type='text' placeholder='Search...' />
                                </FormGroup>
                                { ' ' }
                                <Button bsStyle='primary'>Submit</Button>
                            </Form>

                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">
                                    <i className='fa fa-lg fa-bell'></i>
                                    <Label className='label-pill label-with-icon' bsStyle='primary'>10</Label>
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    <i className='fa fa-lg fa-envelope'></i>
                                    <Label className='label-pill label-with-icon' bsStyle='primary'>3</Label>
                                </NavItem>
                                <NavDropdown
                                    eventKey={3}
                                    title={(
                                        <AvatarImage
                                            src={ faker.image.avatar() }
                                            size='small'
                                        />
                                    )}
                                    id="inverse-nav-usermenu"
                                >
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    { /*        FORMS IN NAVBAR      */}
                    <h5 className="m-t-3">
                        Forms
                    </h5>
                    <p>
                        Place form content within <kbd>.navbar-form</kbd> for proper vertical alignment and collapsed behavior in narrow viewports. Use the alignment options to decide where it resides within the navbar content. As a heads up, .navbar-form shares much of its code with <kbd>.form-inline</kbd> via mixin. Some form controls, like input groups, may require fixed widths to be show up properly within a navbar.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Navbar fluid inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='javascript:void(0)'>
                                    <strong className='text-uppercase text-white'>
                                        SPIN
                                    </strong>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Form className='navbar-form navbar-left' onSubmit={ (e) => { e.preventDefault() } }>
                                <FormGroup>
                                    <InputGroup>
                                        <FormControl type='text' placeholder='Search...' />
                                        <InputGroup.Button>
                                            <Button bsStyle='primary'>
                                                <i className="fa fa-fa fa-search"></i>
                                            </Button>
                                        </InputGroup.Button>
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    { /*        BUTTONS IN NAVBAR      */}
                    <h5 className="m-t-3">
                        Buttons
                    </h5>
                    <p>
                        Add the <kbd>.navbar-btn</kbd> class to <kbd>&lt;Button&gt;</kbd> components not residing in a <kbd>&lt;form&gt;</kbd> to vertically center them in the navbar.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Navbar fluid inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='javascript:void(0)'>
                                    <strong className='text-uppercase text-white'>
                                        SPIN
                                    </strong>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Button className='navbar-btn'>
                                Sign In
                            </Button>
                        </Navbar.Collapse>
                    </Navbar>

                    { /*        TEXT IN NAVBAR      */}
                    <h5 className="m-t-3">
                        Text
                    </h5>
                    <p>
                        Wrap strings of text in an element with <kbd>.navbar-text</kbd>, usually on a &lt;p&gt; tag for proper leading and color.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Navbar fluid inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='javascript:void(0)'>
                                    <strong className='text-uppercase text-white'>
                                        SPIN
                                    </strong>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <p className='navbar-text'>
                                Signed in as Mark Otto
                            </p>
                        </Navbar.Collapse>
                    </Navbar>

                    { /*        TEXT IN NAVBAR      */}
                    <h5 className="m-t-3">
                        Text
                    </h5>
                    <p>
                        Wrap strings of text in an element with <kbd>.navbar-text</kbd>, usually on a &lt;p&gt; tag for proper leading and color.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Navbar fluid inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='javascript:void(0)'>
                                    <strong className='text-uppercase text-white'>
                                        SPIN
                                    </strong>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <p className='navbar-text'>
                                Signed in as Mark Otto
                            </p>
                        </Navbar.Collapse>
                    </Navbar>

                    { /*        NON-NAV IN NAVBAR      */}
                    <h5 className="m-t-3">
                        Non-Nav Links
                    </h5>
                    <p>
                        For folks using standard links that are not within the regular navbar navigation component, use the <kbd>.navbar-link</kbd> class to add the proper colors for the default and inverse navbar options.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Navbar fluid inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href='javascript:void(0)'>
                                    <strong className='text-uppercase text-white'>
                                        SPIN
                                    </strong>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <p className='navbar-text navbar-right'>
                                Signed in as <a href='javascript:void(0)' className='navbar-link'>Mark Otto</a>
                            </p>
                        </Navbar.Collapse>
                    </Navbar>

                    { /*        Component Alignment IN NAVBAR      */}
                    <h5 className="m-t-3">Fixed to Top</h5>
                    <p>
                        Align nav links, forms, buttons, or text, using the <kbd>pullLeft</kbd> prop or <kbd>pullRight</kbd> prop. Both properties will add a CSS float in the specified direction. For example, to align nav links, put them in a separate <kbd>&lt;Nav&gt;</kbd> Componennt with the respective utility prop applied.
                    </p>
                    <Row>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">
                                Fixed to Top
                            </h5>
                            <p>
                                Add <kbd>fixedTop</kbd> property to center and pad navbar content.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Navbar fluid inverse>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <a href='javascript:void(0)'>
                                            <strong className='text-uppercase text-white'>
                                                SPIN
                                            </strong>
                                        </a>
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                </Navbar.Header>
                                <Navbar.Collapse>
                                    <Nav>
                                        <NavItem eventKey={1} href="#" active>
                                            <i className="fa fa-fw fa-home"></i>
                                        </NavItem>
                                        <NavItem eventKey={2} href="#">
                                            Link
                                        </NavItem>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">
                                Fixed to Bottom
                            </h5>
                            <p>
                                Add <kbd>fixedBottom</kbd> property to center and pad navbar content.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Navbar fluid inverse>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <a href='javascript:void(0)'>
                                            <strong className='text-uppercase text-white'>
                                                SPIN
                                            </strong>
                                        </a>
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                </Navbar.Header>
                                <Navbar.Collapse>
                                    <Nav>
                                        <NavItem eventKey={1} href="#" active>
                                            <i className="fa fa-fw fa-home"></i>
                                        </NavItem>
                                        <NavItem eventKey={2} href="#">
                                            Link
                                        </NavItem>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">
                                Static Top
                            </h5>
                            <p>
                                Create a full-width navbar that scrolls away with the page by adding <kbd>staticTop</kbd> property.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Navbar fluid inverse>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <a href='javascript:void(0)'>
                                            <strong className='text-uppercase text-white'>
                                                SPIN
                                            </strong>
                                        </a>
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                </Navbar.Header>
                                <Navbar.Collapse>
                                    <Nav>
                                        <NavItem eventKey={1} href="#" active>
                                            <i className="fa fa-fw fa-home"></i>
                                        </NavItem>
                                        <NavItem eventKey={2} href="#">
                                            Link
                                        </NavItem>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(NavbarsContainer);
