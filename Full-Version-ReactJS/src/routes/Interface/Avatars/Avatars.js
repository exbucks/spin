import React from 'react';
import faker from 'faker';

import {
    Row,
    Col,
    Label,
    Badge,
    AvatarImage,
    AvatarText,
    AvatarIcon
} from 'components';

import { Colors } from 'consts';
import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './Avatars.scss';

class AvatarsContainer extends RoutedComponent {
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
                        They are often used within the dashboard. Practically - on each sub-page is available. It should be familiar with the existing options.
                    </p>
                    <Row className='m-b-3'>
                        <Col lg={ 4 }>
                            <h5>Sizes</h5>
                            <p>
                                <kbd>Avatar</kbd> components can have 3 different sizes. You can set the <kbd>size</kbd> prop to <kbd>small</kbd>, <kbd>default</kbd> or <kbd>large</kbd>
                            </p>
                            <p className="small text-uppercase  m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='large'
                                className={ classes.exampleAvatar }
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='default'
                                className={ classes.exampleAvatar }
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='small'
                                className={ classes.exampleAvatar }
                            />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Status Top Icon</h5>
                            <p>
                                You can add status icons to the avatar by setting the <kbd>showStatus</kbd> prop and setting the color in <kbd>statusColor</kbd>
                            </p>
                            <p className="small text-uppercase  m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='large'
                                showStatus
                                statusColor={ Colors.brandDanger }
                                className={ classes.exampleAvatar }
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='default'
                                showStatus
                                statusColor={ Colors.brandSuccess }
                                className={ classes.exampleAvatar }
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='small'
                                showStatus
                                statusColor={ Colors.brandWarning }
                                className={ classes.exampleAvatar }
                            />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Status Bottom Icon</h5>
                            <p>
                                You can place the status icon on the bottom of the avatar by adding <kbd>statusPlacement='bottom'</kbd>.
                            </p>
                            <p className="small text-uppercase  m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='large'
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ Colors.brandDanger }
                                className={ classes.exampleAvatar }
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='default'
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ Colors.brandSuccess }
                                className={ classes.exampleAvatar }
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='small'
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ Colors.brandWarning }
                                className={ classes.exampleAvatar }
                            />
                        </Col>
                    </Row>

                    <Row className='m-b-3'>
                        <Col lg={ 4 }>
                            <h5>Status Icon with Label</h5>
                            <p>
                                You can add an informational label next to the <kbd>Avatar</kbd>. Just place the <kbd>Label</kbd> component in the <kbd>info</kbd> prop.
                            </p>
                            <p className="small text-uppercase  m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='large'
                                className={ classes.exampleAvatar }
                                info={(
                                    <Label bsStyle='danger'>
                                        1
                                    </Label>
                                )}
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='default'
                                className={ classes.exampleAvatar }
                                info={(
                                    <Label bsStyle='success'>
                                        2
                                    </Label>
                                )}
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='small'
                                className={ classes.exampleAvatar }
                                info={(
                                    <Label bsStyle='warning'>
                                        3
                                    </Label>
                                )}
                            />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Status Icon with Badge</h5>
                            <p>
                                Simillary, you can add a <kbd>Badge</kbd> to the <kbd>Avatar</kbd> by placing it in the <kbd>info</kbd> prop.
                            </p>
                            <p className="small text-uppercase  m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='large'
                                className={ classes.exampleAvatar }
                                info={(
                                    <Badge>
                                        1
                                    </Badge>
                                )}
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='default'
                                className={ classes.exampleAvatar }
                                info={(
                                    <Badge>
                                        2
                                    </Badge>
                                )}
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='small'
                                className={ classes.exampleAvatar }
                                info={(
                                    <Badge>
                                        3
                                    </Badge>
                                )}
                            />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Mixed Status with Badge</h5>
                            <p>
                                Just mix the previous props, and they will work without a problem.
                            </p>
                            <p className="small text-uppercase  m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='large'
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ Colors.brandDanger }
                                className={ classes.exampleAvatar }
                                info={(
                                    <Badge>
                                        1
                                    </Badge>
                                )}
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='default'
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ Colors.brandSuccess }
                                className={ classes.exampleAvatar }
                                info={(
                                    <Badge>
                                        2
                                    </Badge>
                                )}
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='small'
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ Colors.brandWarning }
                                className={ classes.exampleAvatar }
                                info={(
                                    <Badge>
                                        3
                                    </Badge>
                                )}
                            />
                        </Col>
                    </Row>

                    <Row className='m-b-3'>
                        <Col lg={ 4 }>
                            <h5>Mixed Status with Label</h5>
                            <p>
                                Mixing a <kbd>Label</kbd> and a StatusIcon works great aswell.
                            </p>
                            <p className="small text-uppercase  m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='large'
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ Colors.brandDanger }
                                className={ classes.exampleAvatar }
                                info={(
                                    <Label bsStyle='danger'>
                                        1
                                    </Label>
                                )}
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='default'
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ Colors.brandSuccess }
                                className={ classes.exampleAvatar }
                                info={(
                                    <Label bsStyle='success'>
                                        2
                                    </Label>
                                )}
                            />
                            <AvatarImage
                                src={ faker.image.avatar() }
                                size='small'
                                showStatus
                                statusPlacement='bottom'
                                statusColor={ Colors.brandWarning }
                                className={ classes.exampleAvatar }
                                info={(
                                    <Label bsStyle='warning'>
                                        3
                                    </Label>
                                )}
                            />
                        </Col>

                        <Col lg={ 4 }>
                            <h5>Icon Avatar</h5>
                            <p>
                                You can place font icons inside the Avatars. Just use <kbd>AvatarIcon</kbd> component and place an icon inside.
                            </p>
                            <p className="small text-uppercase  m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <AvatarIcon
                                className={ classes.exampleAvatar }
                                size='large'
                                backgroundColor={ Colors.grayLight }
                            >
                                <i className='fa fa-user'></i>
                            </AvatarIcon>
                            <AvatarIcon
                                className={ classes.exampleAvatar }
                                backgroundColor={ Colors.grayLight }
                            >
                                <i className='fa fa-user'></i>
                            </AvatarIcon>
                            <AvatarIcon
                                size='small'
                                className={ classes.exampleAvatar }
                                backgroundColor={ Colors.grayLight }
                            >
                                <i className='fa fa-user'></i>
                            </AvatarIcon>
                        </Col>

                        <Col lg={ 4 }>
                            <h5>Text Avatar</h5>
                            <p>
                                Use the <kbd>AvatarText</kbd> component to render an Avatar with letters inside.
                            </p>
                            <p className="small text-uppercase  m-t-2">
                                <strong>Examples</strong>
                            </p>
                            <AvatarText
                                className={ classes.exampleAvatar }
                                backgroundColor={ Colors.brandDanger }
                                size='large'
                            >
                                MK
                            </AvatarText>
                            <AvatarText
                                className={ classes.exampleAvatar }
                                backgroundColor={ Colors.brandSuccess }
                            >
                                TO
                            </AvatarText>
                            <AvatarText
                                size='small'
                                className={ classes.exampleAvatar }
                                backgroundColor={ Colors.brandWarning }
                            >
                                ZS
                            </AvatarText>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(AvatarsContainer);
