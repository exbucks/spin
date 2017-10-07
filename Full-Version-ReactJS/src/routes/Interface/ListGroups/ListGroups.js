import React from 'react';
import faker from 'faker';

import {
    AvatarImage,
    Label,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Badge,
    Media,
    Button
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './ListGroups.scss';

class ListGroupsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col md={ 12 }>
                    <p>
                        List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.
                    </p>
                    <Row>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Basic Example</h5>
                            <p>
                                The most basic list group is simply an unordered list with list items, and the proper classes. Build upon it with the options that follow, or your own CSS as needed.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ListGroup>
                                <ListGroupItem>
                                    Cras justo odio
                                </ListGroupItem>
                                <ListGroupItem>
                                    Dapibus ac facilisis in
                                </ListGroupItem>
                                <ListGroupItem>
                                    Morbi leo risus
                                </ListGroupItem>
                                <ListGroupItem>
                                    Porta ac consectetur ac
                                </ListGroupItem>
                                <ListGroupItem>
                                    Vestibulum at eros
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Badges</h5>
                            <p>
                                Add the badges component to any list group item and it will automatically be positioned on the right.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ListGroup>
                                <ListGroupItem>
                                    Cras justo odio
                                    <Badge bsStyle='primary'>
                                        14
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Dapibus ac facilisis in
                                </ListGroupItem>
                                <ListGroupItem>
                                    Morbi leo risus
                                    <Badge bsStyle='success'>
                                        2
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Porta ac consectetur ac
                                    <Badge bsStyle='danger'>
                                        9
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Vestibulum at eros
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Linked Items</h5>
                            <p>
                                Links can be used automatically inside the <kbd>ListGroup</kbd>, just add the <kbd>href</kbd> prop to the <kbd>ListGroupItem</kbd>s.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ListGroup>
                                <ListGroupItem href='javascript:;' active>
                                    Cras justo odio
                                    <Badge bsStyle='primary'>
                                        14
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem href='javascript:;'>
                                    Dapibus ac facilisis in
                                </ListGroupItem>
                                <ListGroupItem href='javascript:;'>
                                    Morbi leo risus
                                    <Badge bsStyle='success'>
                                        2
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem href='javascript:;'>
                                    Porta ac consectetur ac
                                    <Badge bsStyle='danger'>
                                        9
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem href='javascript:;'>
                                    Vestibulum at eros
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Custom Items</h5>
                            <p>
                                Any component/elment can ba an item as long as it has a <kbd>list-group-item</kbd> class on it.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ListGroup>
                                <Button className='list-group-item'>
                                    Cras justo odio
                                </Button>
                                <Button className='list-group-item'>
                                    Morbi leo risus
                                </Button>
                                <Button className='list-group-item'>
                                    Porta ac consectetur ac
                                </Button>
                                <Button className='list-group-item'>
                                    Vestibulum at eros
                                </Button>
                            </ListGroup>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Disabled Items</h5>
                            <p>
                                Add <kbd>disabled</kbd> prop to <kbd>ListGroupItem</kbd> to make it disabled.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ListGroup>
                                <ListGroupItem disabled href='javascript:;'>
                                    Cras justo odio
                                </ListGroupItem>
                                <ListGroupItem href='javascript:;'>
                                    Dapibus ac facilisis in
                                </ListGroupItem>
                                <ListGroupItem href='javascript:;'>
                                    Morbi leo risus
                                </ListGroupItem>
                                <ListGroupItem href='javascript:;'>
                                    Porta ac consectetur ac
                                </ListGroupItem>
                                <ListGroupItem href='javascript:;'>
                                    Vestibulum at eros
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Contextual Styles</h5>
                            <p>
                                Use <kbd>bsStyle</kbd> to change the appearence of <kbd>ListGroupItem</kbd>s.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ListGroup>
                                <ListGroupItem bsStyle='success'>
                                    Dapibus ac facilisis in
                                </ListGroupItem>
                                <ListGroupItem bsStyle='info'>
                                    Morbi leo risus
                                </ListGroupItem>
                                <ListGroupItem bsStyle='warning'>
                                    Porta ac consectetur ac
                                </ListGroupItem>
                                <ListGroupItem bsStyle='danger'>
                                    Vestibulum at eros
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Custom content / With header</h5>
                            <p>
                                Use <kbd>header</kbd> prop to add a header to a <kbd>ListGroupItem</kbd>. The children can be any other Components or HTML tags.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ListGroup>
                                <ListGroupItem
                                    header='List group item heading'
                                    href='javascript:;'
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </ListGroupItem>
                                <ListGroupItem
                                    header='List group item heading'
                                    href='javascript:;'
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </ListGroupItem>
                                <ListGroupItem
                                    header='List group item heading'
                                    href='javascript:;'
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Custom Content - Users Media</h5>
                            <p>
                                Just add a <kbd>Media</kbd> component inside.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ListGroup>
                                <ListGroupItem href='javscript:;'>
                                    <Media>
                                        <Media.Left align='middle'>
                                            <AvatarImage
                                                src={ faker.image.avatar() }
                                            />
                                        </Media.Left>
                                        <Media.Body>
                                            <h5 className='m-y-0'>
                                                { `${faker.name.firstName()} ${faker.name.lastName()}` }
                                            </h5>
                                            <p className='small text-gray-lighter m-b-0'>
                                                { faker.name.jobTitle() }
                                            </p>
                                        </Media.Body>
                                        <Media.Right align='middle'>
                                            <Label bsStyle='danger' outline>
                                                Busy
                                            </Label>
                                        </Media.Right>
                                    </Media>
                                </ListGroupItem>
                                <ListGroupItem href='javscript:;'>
                                    <Media>
                                        <Media.Left align='middle'>
                                            <AvatarImage
                                                src={ faker.image.avatar() }
                                            />
                                        </Media.Left>
                                        <Media.Body>
                                            <h5 className='m-y-0'>
                                                { `${faker.name.firstName()} ${faker.name.lastName()}` }
                                            </h5>
                                            <p className='small text-gray-lighter m-b-0'>
                                                { faker.name.jobTitle() }
                                            </p>
                                        </Media.Body>
                                        <Media.Right align='middle'>
                                            <Label bsStyle='success' outline>
                                                Online
                                            </Label>
                                        </Media.Right>
                                    </Media>
                                </ListGroupItem>
                                <ListGroupItem href='javscript:;'>
                                    <Media>
                                        <Media.Left align='middle'>
                                            <AvatarImage
                                                src={ faker.image.avatar() }
                                            />
                                        </Media.Left>
                                        <Media.Body>
                                            <h5 className='m-y-0'>
                                                { `${faker.name.firstName()} ${faker.name.lastName()}` }
                                            </h5>
                                            <p className='small text-gray-lighter m-b-0'>
                                                { faker.name.jobTitle() }
                                            </p>
                                        </Media.Body>
                                        <Media.Right align='middle'>
                                            <Label outline>
                                                Offline
                                            </Label>
                                        </Media.Right>
                                    </Media>
                                </ListGroupItem>
                                <ListGroupItem href='javscript:;'>
                                    <Media>
                                        <Media.Left align='middle'>
                                            <AvatarImage
                                                src={ faker.image.avatar() }
                                            />
                                        </Media.Left>
                                        <Media.Body>
                                            <h5 className='m-y-0'>
                                                { `${faker.name.firstName()} ${faker.name.lastName()}` }
                                            </h5>
                                            <p className='small text-gray-lighter m-b-0'>
                                                { faker.name.jobTitle() }
                                            </p>
                                        </Media.Body>
                                        <Media.Right align='middle'>
                                            <Label bsStyle='warning' outline>
                                                Away
                                            </Label>
                                        </Media.Right>
                                    </Media>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>

                        <Col lg={ 4 }>
                            <h5 className="m-t-3">Custom Content - Files Media</h5>
                            <p>
                                Another example with the <kbd>Media</kbd> component.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ListGroup className={ classes.customListGroup }>
                                <ListGroupItem href='javscript:;' className='no-bg'>
                                    <Media>
                                        <Media.Left align='middle'>
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-square fa-stack-2x text-primary"></i>
                                                <i className="fa fa-file-word-o fa-stack-1x fa-inverse text-white"></i>
                                            </span>
                                        </Media.Left>
                                        <Media.Body>
                                            <p className='text-white m-b-0'>
                                                borders_action_items_bandwidth.skd
                                            </p>
                                            <span className='small'>
                                                by { `${faker.name.firstName()} ${faker.name.lastName()}` }
                                                <span className="text-muted"> · </span>
                                                { `${faker.finance.amount()} Kb` }
                                            </span>
                                        </Media.Body>
                                    </Media>
                                </ListGroupItem>
                                <ListGroupItem href='javscript:;' className='no-bg'>
                                    <Media>
                                        <Media.Left align='middle'>
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-square fa-stack-2x text-success"></i>
                                                <i className="fa fa-file-excel-o fa-stack-1x fa-inverse text-white"></i>
                                            </span>
                                        </Media.Left>
                                        <Media.Body>
                                            <p className='text-white m-b-0'>
                                                books_frozen_australian_dollar.afp
                                            </p>
                                            <span className='small'>
                                                by { `${faker.name.firstName()} ${faker.name.lastName()}` }
                                                <span className="text-muted"> · </span>
                                                { `${faker.finance.amount()} Kb` }
                                            </span>
                                        </Media.Body>
                                    </Media>
                                </ListGroupItem>
                                <ListGroupItem href='javscript:;' className='no-bg'>
                                    <Media>
                                        <Media.Left align='middle'>
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-square fa-stack-2x text-danger"></i>
                                                <i className="fa fa-file-text-o fa-stack-1x fa-inverse text-white"></i>
                                            </span>
                                        </Media.Left>
                                        <Media.Body>
                                            <p className='text-white m-b-0'>
                                                tasty_soft_mouse.txt
                                            </p>
                                            <span className='small'>
                                                by { `${faker.name.firstName()} ${faker.name.lastName()}` }
                                                <span className="text-muted"> · </span>
                                                { `${faker.finance.amount()} Kb` }
                                            </span>
                                        </Media.Body>
                                    </Media>
                                </ListGroupItem>
                                <ListGroupItem href='javscript:;' className='no-bg'>
                                    <Media>
                                        <Media.Left align='middle'>
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-square fa-stack-2x text-warning"></i>
                                                <i className="fa fa-file-powerpoint-o fa-stack-1x fa-inverse text-white"></i>
                                            </span>
                                        </Media.Left>
                                        <Media.Body>
                                            <p className='text-white m-b-0'>
                                                belize_connect_soap.hps
                                            </p>
                                            <span className='small'>
                                                by { `${faker.name.firstName()} ${faker.name.lastName()}` }
                                                <span className="text-muted"> · </span>
                                                { `${faker.finance.amount()} Kb` }
                                            </span>
                                        </Media.Body>
                                    </Media>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(ListGroupsContainer);
