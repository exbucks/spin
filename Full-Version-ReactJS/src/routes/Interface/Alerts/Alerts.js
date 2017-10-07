import React from 'react';
import {
    Row,
    Col,
    Alert,
    Media,
    Button
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class AlertsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            disAlert1: true,
            disAlert2: true,
            disAlert3: true,
            disAlert4: true,

            disAlert5: true,
            disAlert6: true,
            disAlert7: true,
            disAlert8: true,

            disAlert9: true,
            disAlert10: true,
            disAlert11: true,
            disAlert12: true
        }
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <p className="m-b-2">
                        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
                    </p>
                    <Row>
                        <Col lg={ 6 }>
                            <h5>Examples</h5>
                            <p>
                                Wrap any text in an <kbd>Alert</kbd> component and set <kbd>bsStyle</kbd> to set a specific brand color.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Alert bsStyle='success' noBackground>
                                <strong className='text-white'>Well Done!</strong> You successfully read this important alert message.
                            </Alert>
                            <Alert bsStyle='info' noBackground>
                                <strong className='text-white'>Heads Up!</strong> This alert needs your attention, but it's not super important.
                            </Alert>
                            <Alert bsStyle='warning' noBackground>
                                <strong className='text-white'>Warning!</strong> Better check yourself, you're not looking too good.
                            </Alert>
                            <Alert bsStyle='danger' noBackground>
                                <strong className='text-white'>Oh Snap!</strong> Change a few things up and try submitting again.
                            </Alert>
                            <Alert bsStyle='success'>
                                <strong>Well Done!</strong> You successfully read this important alert message.
                            </Alert>
                            <Alert bsStyle='info'>
                                <strong>Heads Up!</strong> This alert needs your attention, but it's not super important.
                            </Alert>
                            <Alert bsStyle='warning'>
                                <strong>Warning!</strong> Better check yourself, you're not looking too good.
                            </Alert>
                            <Alert bsStyle='danger'>
                                <strong>Oh Snap!</strong> Change a few things up and try submitting again.
                            </Alert>
                        </Col>
                        <Col lg={ 6 }>
                            <h5>Dismissible Alerts</h5>
                            <p>
                                Attach state change to <kbd>onDismiss</kbd> event to create closable alerts.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            {
                                this.state.disAlert1 && (
                                    <Alert bsStyle='success' noBackground onDismiss={ () => this.setState({ disAlert1: false }) }>
                                        <strong className='text-white'>Well Done!</strong> You successfully read this important alert message.
                                    </Alert>
                                )
                            }
                            {
                                this.state.disAlert2 && (
                                    <Alert bsStyle='info' noBackground onDismiss={ () => this.setState({ disAlert2: false }) }>
                                        <strong className='text-white'>Heads Up!</strong> This alert needs your attention, but it's not super important.
                                    </Alert>
                                )
                            }
                            {
                                this.state.disAlert3 && (
                                    <Alert bsStyle='warning' noBackground onDismiss={ () => this.setState({ disAlert3: false }) }>
                                        <strong className='text-white'>Warning!</strong> Better check yourself, you're not looking too good.
                                    </Alert>
                                )
                            }
                            {
                                this.state.disAlert4 && (
                                    <Alert bsStyle='danger' noBackground onDismiss={ () => this.setState({ disAlert4: false }) }>
                                        <strong className='text-white'>Oh Snap!</strong> Change a few things up and try submitting again.
                                    </Alert>
                                )
                            }
                            {(
                                this.state.disAlert5 ? (
                                    <Alert bsStyle='success' onDismiss={ () => this.setState({ disAlert5: false }) }>
                                        <strong>Well Done!</strong> You successfully read this important alert message.
                                    </Alert>
                                ) : null
                            )}
                            {(
                                this.state.disAlert6 ? (
                                    <Alert bsStyle='info' onDismiss={ () => this.setState({ disAlert6: false }) }>
                                        <strong>Heads Up!</strong> This alert needs your attention, but it's not super important.
                                    </Alert>
                                ) : null
                            )}
                            {(
                                this.state.disAlert7 ? (
                                    <Alert bsStyle='warning' onDismiss={ () => this.setState({ disAlert7: false }) }>
                                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                    </Alert>
                                ) : null
                            )}
                            {(
                                this.state.disAlert8 ? (
                                    <Alert bsStyle='danger' onDismiss={ () => this.setState({ disAlert8: false }) }>
                                        <strong>Oh Snap!</strong> Change a few things up and try submitting again.
                                    </Alert>
                                ) : null
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={ 6 }>
                            <h5>With Simple Icon</h5>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Alert bsStyle='success'>
                                <i className="fa fa-fw fa-check text-success m-r-1"></i>
                                <strong>Well Done!</strong> You successfully read this important alert message.
                            </Alert>
                            <Alert bsStyle='info'>
                                <i className="fa fa-fw fa-info text-primary m-r-1"></i>
                                <strong>Heads Up!</strong> This alert needs your attention, but it's not super important.
                            </Alert>
                            <Alert bsStyle='warning'>
                                <i className="fa fa-fw fa-exclamation text-warning m-r-1"></i>
                                <strong>Warning!</strong> Better check yourself, you're not looking too good.
                            </Alert>
                            <Alert bsStyle='danger'>
                                <i className="fa fa-fw fa-close text-danger m-r-1"></i>
                                <strong>Oh Snap!</strong> Change a few things up and try submitting again.
                            </Alert>
                        </Col>

                        <Col lg={ 6 }>
                            <h5>With Alternative Icon</h5>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Alert bsStyle='success'>
                                <span className="fa-stack fa-lg m-r-1">
                                    <i className="fa fa-circle-thin fa-stack-2x text-success"></i>
                                    <i className="fa fa-check fa-stack-1x text-success"></i>
                                </span>
                                <strong>Well Done!</strong> You successfully read this important alert message.
                            </Alert>
                            <Alert bsStyle='info'>
                                <span className="fa-stack fa-lg m-r-1">
                                    <i className="fa fa-circle-thin fa-stack-2x text-primary"></i>
                                    <i className="fa fa-info fa-stack-1x text-primary"></i>
                                </span>
                                <strong>Heads Up!</strong> This alert needs your attention, but it's not super important.
                            </Alert>
                            <Alert bsStyle='warning'>
                                <span className="fa-stack fa-lg m-r-1">
                                    <i className="fa fa-circle-thin fa-stack-2x text-warning"></i>
                                    <i className="fa fa-exclamation fa-stack-1x text-warning"></i>
                                </span>
                                <strong>Warning!</strong> Better check yourself, you're not looking too good.
                            </Alert>
                            <Alert bsStyle='danger'>
                                <span className="fa-stack fa-lg m-r-1">
                                    <i className="fa fa-circle-thin fa-stack-2x text-danger"></i>
                                    <i className="fa fa-close fa-stack-1x text-danger"></i>
                                </span>
                                <strong>Oh Snap!</strong> Change a few things up and try submitting again.
                            </Alert>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={ 6 }>
                            <h5>With Alternative Icon</h5>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Alert bsStyle='success'>
                                <h4>Well done!</h4>
                                <p className='m-b-1'>
                                    You successfully read this important alert message.
                                </p>
                                <Button bsStyle="success">Take this action</Button>
                                { ' ' }
                                <Button bsStyle='success' outline>Cancel</Button>
                            </Alert>
                            <Alert bsStyle='info'>
                                <h4>Heads Up!</h4>
                                <p className='m-b-1'>
                                    This alert needs your attention, but it's not super important.
                                </p>
                                <Button bsStyle="primary">Take this action</Button>
                                { ' ' }
                                <Button bsStyle='primary' outline>Cancel</Button>
                            </Alert>
                            <Alert bsStyle='warning'>
                                <h4>Warning!</h4>
                                <p className='m-b-1'>
                                    Better check yourself, you're not looking too good.
                                </p>
                                <Button bsStyle="warning">Take this action</Button>
                                { ' ' }
                                <Button bsStyle='warning' outline>Cancel</Button>
                            </Alert>
                            <Alert bsStyle='danger'>
                                <h4>Oh Snap!</h4>
                                <p className='m-b-1'>
                                    Change a few things up and try submitting again.
                                </p>
                                <Button bsStyle="danger">Take this action</Button>
                                { ' ' }
                                <Button bsStyle='danger' outline>Cancel</Button>
                            </Alert>
                        </Col>
                        <Col lg={ 6 }>
                            <h5>Alerts with Icons, Header & Buttons</h5>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Alert bsStyle='success'>
                                <Media>
                                    <Media.Left>
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle-thin fa-stack-2x text-success"></i>
                                            <i className="fa fa-check fa-stack-1x text-success"></i>
                                        </span>
                                    </Media.Left>
                                    <Media.Body>
                                        <h4>Well done!</h4>
                                        <p className='m-b-1'>
                                            You successfully read this important alert message.
                                        </p>
                                        <Button bsStyle="success">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='success' outline>Cancel</Button>
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <Alert bsStyle='info'>
                                <Media>
                                    <Media.Left>
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle-thin fa-stack-2x text-primary"></i>
                                            <i className="fa fa-info fa-stack-1x text-primary"></i>
                                        </span>
                                    </Media.Left>
                                    <Media.Body>
                                        <h4>Heads Up!</h4>
                                        <p className='m-b-1'>
                                            This alert needs your attention, but it's not super important.
                                        </p>
                                        <Button bsStyle="primary">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='primary' outline>Cancel</Button>
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <Alert bsStyle='warning'>
                                <Media>
                                    <Media.Left>
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle-thin fa-stack-2x text-warning"></i>
                                            <i className="fa fa-exclamation fa-stack-1x text-warning"></i>
                                        </span>
                                    </Media.Left>
                                    <Media.Body>
                                        <h4>Warning!</h4>
                                        <p className='m-b-1'>
                                            Better check yourself, you're not looking too good.
                                        </p>
                                        <Button bsStyle="warning">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='warning' outline>Cancel</Button>
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <Alert bsStyle='danger'>
                                <Media>
                                    <Media.Left>
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle-thin fa-stack-2x text-danger"></i>
                                            <i className="fa fa-close fa-stack-1x text-danger"></i>
                                        </span>
                                    </Media.Left>
                                    <Media.Body>
                                        <h4>Oh Snap!</h4>
                                        <p className='m-b-1'>
                                            Change a few things up and try submitting again.
                                        </p>
                                        <Button bsStyle="danger">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='danger' outline>Cancel</Button>
                                    </Media.Body>
                                </Media>
                            </Alert>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={ 6 }>
                            <h5>Alerts with Header & Buttons v2</h5>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            {(
                                (this.state.disAlert9) ? (
                                    <Alert bsStyle='success' noBackground onDismiss={ () => this.setState({ disAlert9: false }) }>
                                        <h5 className='m-y-0'>Well done!</h5>
                                        <p className='m-b-1'>
                                            You successfully read this important alert message.
                                        </p>
                                        <Button bsStyle="success">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='success' outline>Cancel</Button>
                                    </Alert>
                                ) : null
                            )}
                            {(
                                (this.state.disAlert10) ? (
                                    <Alert bsStyle='info' noBackground onDismiss={ () => this.setState({ disAlert10: false }) }>
                                        <h5 className='m-y-0'>Heads Up!</h5>
                                        <p className='m-b-1'>
                                            This alert needs your attention, but it's not super important.
                                        </p>
                                        <Button bsStyle="primary">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='primary' outline>Cancel</Button>
                                    </Alert>
                                ) : null
                            )}
                            {(
                                (this.state.disAlert11) ? (
                                    <Alert bsStyle='warning' noBackground onDismiss={ () => this.setState({ disAlert11: false }) }>
                                        <h5 className='m-y-0'>Warning!</h5>
                                        <p className='m-b-1'>
                                            Better check yourself, you're not looking too good.
                                        </p>
                                        <Button bsStyle="warning">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='warning' outline>Cancel</Button>
                                    </Alert>
                                ) : null
                            )}
                            {(
                                (this.state.disAlert12) ? (
                                    <Alert bsStyle='danger' noBackground onDismiss={ () => this.setState({ disAlert12: false }) }>
                                        <h5 className='m-y-0'>Oh Snap!</h5>
                                        <p className='m-b-1'>
                                            Change a few things up and try submitting again.
                                        </p>
                                        <Button bsStyle="danger">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='danger' outline>Cancel</Button>
                                    </Alert>
                                ) : null
                            )}
                        </Col>
                        <Col lg={ 6 }>
                            <h5>Alerts with Icons, Header & Buttons v2</h5>
                            <p className="small text-uppercase m-t-2">
                                <strong>examples</strong>
                            </p>
                            <Alert bsStyle='success' noBackground>
                                <Media>
                                    <Media.Left>
                                        <i className="fa fa-check fa-fw fa-lg text-success"></i>
                                    </Media.Left>
                                    <Media.Body>
                                        <h5 className='m-y-0'>Well done!</h5>
                                        <p className='m-b-1'>
                                            You successfully read this important alert message.
                                        </p>
                                        <Button bsStyle="success">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='success' outline>Cancel</Button>
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <Alert bsStyle='info' noBackground>
                                <Media>
                                    <Media.Left>
                                        <i className="fa fa-info fa-fw fa-lg text-primary"></i>
                                    </Media.Left>
                                    <Media.Body>
                                        <h5 className='m-y-0'>Heads Up!</h5>
                                        <p className='m-b-1'>
                                            This alert needs your attention, but it's not super important.
                                        </p>
                                        <Button bsStyle="primary">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='primary' outline>Cancel</Button>
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <Alert bsStyle='warning' noBackground>
                                <Media>
                                    <Media.Left>
                                        <i className="fa fa-exclamation fa-fw fa-lg text-warning"></i>
                                    </Media.Left>
                                    <Media.Body>
                                        <h5 className='m-y-0'>Warning!</h5>
                                        <p className='m-b-1'>
                                            Better check yourself, you're not looking too good.
                                        </p>
                                        <Button bsStyle="warning">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='warning' outline>Cancel</Button>
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <Alert bsStyle='danger' noBackground>
                                <Media>
                                    <Media.Left>
                                        <i className="fa fa-close fa-fw fa-lg text-danger"></i>
                                    </Media.Left>
                                    <Media.Body>
                                        <h5 className='m-y-0'>Oh Snap!</h5>
                                        <p className='m-b-1'>
                                            Change a few things up and try submitting again.
                                        </p>
                                        <Button bsStyle="danger">Take this action</Button>
                                        { ' ' }
                                        <Button bsStyle='danger' outline>Cancel</Button>
                                    </Media.Body>
                                </Media>
                            </Alert>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(AlertsContainer);
