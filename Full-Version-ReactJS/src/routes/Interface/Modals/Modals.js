import React from 'react';

import {
    Grid,
    Row,
    Col,
    Panel,
    Modal,
    Button,
    Tooltip,
    Popover,
    OverlayTrigger
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './Modals.scss';

class ModalsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            demoModal: false,
            largeModal: false,
            smallModal: false,
            gridModal: false
        }
    }
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={ 12 }>
                        <p>
                            Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults..
                        </p>

                        <h5 className="m-t-3">
                            Static Example
                        </h5>
                        <p>
                            A rendered modal with header, body, and set of actions in the footer.
                        </p>
                        <p className="small text-uppercase m-t-2">
                            <strong>Example</strong>
                        </p>
                        <Panel className={ classes.staticModalContainer }>
                            <div className='bs-example bs-example-modal'>
                                <Modal.Dialog>
                                    <Modal.Header>
                                        <Modal.Title>Modal Title</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nesciunt, cum, vitae nobis laudantium iure, veritatis quod dicta quos voluptas vel a obcaecati voluptatem id? Error fugiat ullam eum, quas in voluptates vitae eos qui, exercitationem reprehenderit commodi facilis veritatis necessitatibus accusantium, dolore perferendis natus. In nulla corporis soluta tenetur?
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button>Close</Button>
                                        <Button bsStyle="primary">Save changes</Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </div>
                        </Panel>
                        <Row className='m-t-3'>
                            <Col lg={ 4 }>
                                <h5>Live Demo</h5>
                                <p>
                                    Toggle a modal via <kbd>OverlayTrigger</kbd> assigned to the button below. It will slide down and fade in from the top of the page.
                                </p>
                                <Button
                                    bsStyle='primary'
                                    onClick={ () => this.setState({
                                        demoModal: true
                                    })}
                                >
                                    Launch Demo Modal
                                </Button>
                            </Col>
                            <Col lg={ 4 }>
                                <h5>Optional Sizes</h5>
                                <p>
                                    You can specify a bootstrap large or small modal by using the <kbd>bsSize</kbd> prop.
                                </p>
                                <Button
                                    bsStyle='primary'
                                    onClick={ () => this.setState({largeModal: true}) }
                                >
                                    Large modal
                                </Button>
                                { ' ' }
                                <Button
                                    bsStyle='primary'
                                    onClick={ () => this.setState({smallModal: true}) }
                                >
                                    Small modal
                                </Button>
                            </Col>
                            <Col lg={ 4 }>
                                <h5>Using the Grid System</h5>
                                <p>
                                    You can use the <kbd>Grid</kbd> component inside the modal with its <kbd>Row</kbd>s and <kbd>Col</kbd>s.
                                </p>
                                <Button
                                    bsStyle='primary'
                                    onClick={ () => this.setState({gridModal: true}) }
                                >
                                    Launch Demo Modal
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                { /*        Demo Modal      */ }
                <Modal
                    show={ this.state.demoModal }
                    onHide={ () => this.setState({demoModal: false}) }
                >
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                        <h4>Popover in a modal</h4>
                        <p>
                            { 'This ' }
                            <OverlayTrigger
                                trigger='click'
                                overlay={(
                                    <Popover id='modal-popover' title='A title'>
                                        And here's some amazing content. It's very engaging. right?
                                    </Popover>
                                )}
                            >
                                <Button bsSize='small'>button</Button>
                            </OverlayTrigger>
                            { ' should trigger a popover on click' }
                        </p>

                        <h4>Tooltips in a modal</h4>
                        <p>
                            <OverlayTrigger
                                placement='bottom'
                                overlay={(
                                    <Tooltip id='modal-tooltip-1'>Tooltip</Tooltip>
                                )}
                            >
                                <a href='javscript: void(0)'>This link</a>
                            </OverlayTrigger>
                            { ' and '}
                            <OverlayTrigger
                                placement='top'
                                overlay={(
                                    <Tooltip id='modal-tooltip-2'>Tooltip</Tooltip>
                                )}
                            >
                                <a href='javscript: void(0)'>that link</a>
                            </OverlayTrigger>
                            { ' should have tooltips on hover.' }
                        </p>

                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={ () => this.setState({demoModal: false}) }>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>

                { /*        Large Modal      */ }
                <Modal
                    bsSize='large'
                    show={ this.state.largeModal }
                    onHide={ () => this.setState({largeModal: false}) }
                >
                    <Modal.Header>
                        <Modal.Title>Modal Large</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eveniet porro quam magni quos ea officia voluptas voluptatum, praesentium quo temporibus, debitis ipsum dicta reprehenderit autem ab repudiandae excepturi? Tenetur sapiente sequi inventore placeat vel, fugit minus commodi possimus repellendus doloribus, cupiditate nam, ratione quae quia porro sunt veniam? Facilis temporibus officia dolore nihil excepturi, velit enim quam natus possimus esse libero eligendi, ullam quia ab tenetur qui! Autem saepe consequatur unde voluptatum earum nostrum. Dolores fugit nostrum perferendis non quasi pariatur tempore quidem numquam necessitatibus provident rem aut voluptate consequuntur, tenetur, quos saepe ipsum sit optio nulla totam. Non.
                        </p>
                    </Modal.Body>
                </Modal>

                { /*        Small Modal      */ }
                <Modal
                    bsSize='small'
                    show={ this.state.smallModal }
                    onHide={ () => this.setState({smallModal: false}) }
                >
                    <Modal.Header>
                        <Modal.Title>Modal Large</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eveniet porro quam magni quos ea officia voluptas voluptatum, praesentium quo temporibus, debitis ipsum dicta reprehenderit autem ab repudiandae excepturi? Tenetur sapiente sequi inventore placeat vel, fugit minus commodi possimus repellendus doloribus, cupiditate nam, ratione quae quia porro sunt veniam?
                        </p>
                    </Modal.Body>
                </Modal>

                { /*        Grid Modal      */ }
                <Modal
                    show={ this.state.gridModal }
                    onHide={ () => this.setState({gridModal: false}) }
                >
                    <Modal.Header>
                        <Modal.Title>Grid Example Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Grid fluid>
                            <Row>
                                <Col md={ 4 }>
                                    col-md-4
                                </Col>
                                <Col md={ 4 } mdOffset={ 4 }>
                                    col-md-4 col-md-offset-4
                                </Col>
                            </Row>
                            <Row>
                                <Col md={ 3 } mdOffset={ 3 }>
                                    col-md-3 col-md-offset-3
                                </Col>
                                <Col md={ 2 } mdOffset={ 4 }>
                                    col-md-2 col-md-offset-4
                                </Col>
                            </Row>
                            <Row>
                                <Col md={ 6 } mdOffset={ 3 }>
                                    col-md-6 col-md-offset-3
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={ 9 }>
                                    Level 1: col-sm-9
                                    <Row>
                                        <Col xs={ 8 } sm={ 6 }>
                                            Level 2: col-xs-8 col-sm-6
                                        </Col>
                                        <Col xs={ 4 } sm={ 6 }>
                                            Level 2: col-xs-4 col-sm-6
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default connect()(ModalsContainer);
