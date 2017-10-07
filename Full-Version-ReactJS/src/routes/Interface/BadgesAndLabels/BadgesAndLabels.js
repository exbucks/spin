import React from 'react';
import faker from 'faker';

import {
    Row,
    Col,
    Button,
    Nav,
    NavItem,
    Badge,
    Label,
    AvatarImage
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class BadgesAndLabelsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <h4>Badges</h4>
                    <p>Easily highlight new or unread items by adding a <kbd>Badge</kbd> component to links, Bootstrap navs, and more.</p>
                    <Row>
                        <Col lg={ 4 }>
                            <h5>Default Examples</h5>
                            <p>
                                To a <kbd>Badge</kbd> add a <kbd>bsStyle</kbd> prop and set it to Bootstrap brand.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Badge>1</Badge>
                            { ' ' }
                            <Badge bsStyle='primary'>2</Badge>
                            { ' ' }
                            <Badge bsStyle='info'>3</Badge>
                            { ' ' }
                            <Badge bsStyle='success'>4</Badge>
                            { ' ' }
                            <Badge bsStyle='danger'>5</Badge>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Outlines Examples</h5>
                            <p>
                                To an existing <kbd>Badge</kbd> component add an <kbd>outline</kbd> prop.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Badge outline>1</Badge>
                            { ' ' }
                            <Badge outline bsStyle='primary'>2</Badge>
                            { ' ' }
                            <Badge outline bsStyle='info'>3</Badge>
                            { ' ' }
                            <Badge outline bsStyle='success'>4</Badge>
                            { ' ' }
                            <Badge outline bsStyle='danger'>5</Badge>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Badges Inside Button & Link</h5>
                            <p>
                                Easily highlight new or unread items by adding a <kbd>Badge</kbd> component to links, Bootstrap navs, and more.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Button bsStyle='link'>
                                <span>Inbox </span>
                                <Badge>42</Badge>
                            </Button>
                            { ' ' }
                            <Button bsStyle='primary'>
                                <span>Messages </span>
                                <Badge>4</Badge>
                            </Button>
                        </Col>
                    </Row>

                    <Row className='m-y-3'>
                        <Col lg={ 4 }>
                            <h5>Adapts to Active Nav States</h5>
                            <p>
                                Built-in styles are included for placing badges in active states in pill navigations.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Nav bsStyle="pills" activeKey={1} >
                                <NavItem eventKey={1}>
                                    <span>Home </span>
                                    <Badge>42</Badge>
                                </NavItem>
                                <NavItem eventKey={2}>
                                    <span>Profile</span>
                                </NavItem>
                                <NavItem eventKey={3}>
                                    <span>Messages </span>
                                    <Badge>3</Badge>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Badges with Icons</h5>
                            <p>
                                To already existing <kbd>Badge</kbd> add <kbd>withIcon</kbd> prop and place it next to an icon.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <span>
                                <i className="fa fa-lg fa-fw fa-bell"></i>
                                <Badge withIcon>1</Badge>
                            </span>
                            { ' ' }
                            <span>
                                <i className="fa fa-lg fa-fw fa-envelope"></i>
                                <Badge withIcon bsStyle='primary'>2</Badge>
                            </span>
                            { ' ' }
                            <span>
                                <i className="fa fa-lg fa-fw fa-user"></i>
                                <Badge withIcon bsStyle='info'>3</Badge>
                            </span>
                            { ' ' }
                            <span>
                                <i className="fa fa-lg fa-fw fa-comment"></i>
                                <Badge withIcon bsStyle='success'>4</Badge>
                            </span>
                            { ' ' }
                            <span>
                                <i className="fa fa-lg fa-fw fa-heart"></i>
                                <Badge withIcon bsStyle='danger'>5</Badge>
                            </span>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Badges Status with Avatar</h5>
                            <p>
                                You can add Badges and Labels in Avatars, just place them inside the <kbd>info</kbd> prop of the Avatar Component.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <span>
                                <AvatarImage
                                    src={ faker.image.avatar() }
                                    className='m-r-1'
                                    info={(
                                        <Badge>
                                            1
                                        </Badge>
                                    )}
                                />
                            </span>
                            { ' ' }
                            <span>
                                <AvatarImage
                                    src={ faker.image.avatar() }
                                    className='m-r-1'
                                    info={(
                                        <Badge bsStyle='primary'>
                                            2
                                        </Badge>
                                    )}
                                />
                            </span>
                            { ' ' }
                            <span>
                                <AvatarImage
                                    src={ faker.image.avatar() }
                                    className='m-r-1'
                                    info={(
                                        <Badge bsStyle='info'>
                                            3
                                        </Badge>
                                    )}
                                />
                            </span>
                            { ' ' }
                            <span>
                                <AvatarImage
                                    src={ faker.image.avatar() }
                                    className='m-r-1'
                                    info={(
                                        <Badge bsStyle='warning'>
                                            4
                                        </Badge>
                                    )}
                                />
                            </span>
                            { ' ' }
                            <span>
                                <AvatarImage
                                    src={ faker.image.avatar() }
                                    className='m-r-1'
                                    info={(
                                        <Badge bsStyle='danger'>
                                            5
                                        </Badge>
                                    )}
                                />
                            </span>
                        </Col>
                    </Row>

                    <h4>Labels</h4>
                    <Row className='m-b-3'>
                        <Col lg={ 4 }>
                            <h5>Available Colors Variations</h5>
                            <p>
                                To already existing <kbd>Label</kbd> add <kbd>bsStyle</kbd> and set it to Bootstrap brand.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Label>Default</Label>
                            { ' ' }
                            <Label bsStyle='primary'>Primary</Label>
                            { ' ' }
                            <Label bsStyle='primary'>Success</Label>
                            { ' ' }
                            <Label bsStyle='info'>Info</Label>
                            { ' ' }
                            <Label bsStyle='warning'>Warning</Label>
                            { ' ' }
                            <Label bsStyle='danger'>Danger</Label>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Outline Examples</h5>
                            <p>
                                To already existing <kbd>Label</kbd> add <kbd>outline</kbd> prop.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Label outline>Default</Label>
                            { ' ' }
                            <Label outline bsStyle='primary'>Primary</Label>
                            { ' ' }
                            <Label outline bsStyle='success'>Success</Label>
                            { ' ' }
                            <Label outline bsStyle='info'>Info</Label>
                            { ' ' }
                            <Label outline bsStyle='warning'>Warning</Label>
                            { ' ' }
                            <Label outline bsStyle='danger'>Danger</Label>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Pill Labels</h5>
                            <p>
                                To already existing <kbd>Label</kbd> add <kbd>pill</kbd> prop.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Label outline pill>Default</Label>
                            { ' ' }
                            <Label outline pill bsStyle='primary'>Primary</Label>
                            { ' ' }
                            <Label outline pill bsStyle='success'>Success</Label>
                            { ' ' }
                            <Label outline pill bsStyle='info'>Info</Label>
                            { ' ' }
                            <Label outline pill bsStyle='warning'>Warning</Label>
                            { ' ' }
                            <Label outline pill bsStyle='danger'>Danger</Label>
                        </Col>
                    </Row>

                    <h4 className="m-t-3">Headers with Label</h4>
                    <p>
                        When you place the label in a header, it will be adjusted to the size of the header.
                    </p>
                    <div>
                        <h1>
                            .h1 Example Heading{ ' ' }
                            <Label outline bsStyle='primary'>New</Label>
                        </h1>
                        <h2>
                            .h2 Example Heading{ ' ' }
                            <Label outline bsStyle='primary'>New</Label>
                        </h2>
                        <h3>
                            .h3 Example Heading{ ' ' }
                            <Label outline bsStyle='primary'>New</Label>
                        </h3>
                        <h4>
                            .h4 Example Heading{ ' ' }
                            <Label outline bsStyle='primary'>New</Label>
                        </h4>
                        <h5>
                            .h5 Example Heading{ ' ' }
                            <Label outline bsStyle='primary'>New</Label>
                        </h5>
                        <h6>
                            .h6 Example Heading{ ' ' }
                            <Label outline bsStyle='primary'>New</Label>
                        </h6>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default connect()(BadgesAndLabelsContainer);
