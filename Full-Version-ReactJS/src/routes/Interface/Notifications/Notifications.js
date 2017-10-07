import React, { PropTypes } from 'react';
import Notifications from 'react-notification-system-redux';

import {
    Row,
    Col,
    Panel,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
    Button,
    HelpBlock,
    Checkbox
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_FLUID } from 'layouts/DefaultLayout/modules/layout';

class NotificationsContainer extends RoutedComponent {
    static contextTypes = {
        store: PropTypes.object
    }

    constructor(context, props) {
        super(context, props);

        this.state = {
            title: 'Default Title',
            message: 'Default Message',
            level: 'success',
            position: 'tr',
            autoDismiss: 5,
            dismissible: true
        }
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_FLUID
        }
    }

    formSubmit(ev) {
        ev.preventDefault();

        const notificationAction = Notifications.show(this.state, this.state.level);
        this.context.store.dispatch(notificationAction);
    }

    render() {
        return (
            <Row>
                <Col lgOffset={ 4 } lg={ 4 }>
                    <Panel header='Notification Test'>
                        <p className='m-b-3'>
                            <a href="https://github.com/igorprado/react-notification-system" target="_blank" rel="nofollow">React Notification System</a>
                            &nbsp;is a complete and totally customizable component for notifications in React.
                        </p>
                        <Form horizontal onSubmit={ e => this.formSubmit(e) }>
                            <FormGroup controlId="notificationsTestTitle">
                                <Col componentClass={ ControlLabel } sm={ 3 } className='text-left'>
                                    Title:
                                </Col>
                                <Col sm={ 9 }>
                                    <FormControl
                                        type="text"
                                        value={ this.state.title }
                                        onChange={ e => this.setState({ title: e.target.value }) }
                                    />
                                    <HelpBlock>Leave empty to hide</HelpBlock>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="notificationsTestMessage">
                                <Col componentClass={ ControlLabel } sm={ 3 } className='text-left'>
                                    Message:
                                </Col>
                                <Col sm={ 9 }>
                                    <FormControl
                                        type="text"
                                        value={ this.state.message }
                                        onChange={ e => this.setState({ message: e.target.value }) }
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="notificationsTestPosition">
                                <Col componentClass={ ControlLabel } sm={ 3 } className='text-left'>
                                    Level:
                                </Col>
                                <Col sm={ 9 }>
                                    <FormControl
                                        componentClass='select'
                                        value={ this.state.position }
                                        onChange={ e => this.setState({ position: e.target.value }) }
                                    >
                                        <option value='tr'>Top Right (tr)</option>
                                        <option value='tl'>Top Left (tl)</option>
                                        <option value='tc'>Top Center (tc)</option>

                                        <option value='br'>Bottom Right (br)</option>
                                        <option value='bl'>Bottom Left (bl)</option>
                                        <option value='bc'>Bottom Center (bc)</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="notificationsTestLevel">
                                <Col componentClass={ ControlLabel } sm={ 3 } className='text-left'>
                                    Position:
                                </Col>
                                <Col sm={ 9 }>
                                    <FormControl
                                        componentClass='select'
                                        value={ this.state.level }
                                        onChange={ e => this.setState({ level: e.target.value }) }
                                    >
                                        <option value='success'>Success (success)</option>
                                        <option value='error'>Error (error)</option>
                                        <option value='warning'>Warning (warning)</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="notificationsTestMessage">
                                <Col componentClass={ ControlLabel } sm={ 3 } className='text-left'>
                                    Auto Dismiss:
                                </Col>
                                <Col sm={ 9 }>
                                    <FormControl
                                        type="number"
                                        max={ 30 }
                                        min={ 0 }
                                        value={ this.state.autoDismiss }
                                        onChange={ e => this.setState({ autoDismiss: e.target.value }) }
                                    />
                                    <HelpBlock>secs (0 means infinite)</HelpBlock>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={ 9 } smOffset={ 3 }>
                                    <Checkbox
                                        checked={ this.state.dismissible }
                                        onChange={ e => this.setState({ dismissible: !this.state.dismissible }) }
                                    >
                                        Can User Dismiss
                                    </Checkbox>
                                </Col>
                            </FormGroup>

                            <Button block type="submit" bsStyle='primary' className='m-t-3'>
                                Notify
                            </Button>
                        </Form>
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default connect()(NotificationsContainer);
