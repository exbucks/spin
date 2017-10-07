import React from 'react';

import {
    Row,
    Col,
    Breadcrumb
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class BreadcrumbsContainer extends RoutedComponent {
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
                        Indicate the current page's location within a navigational hierarchy.
                    </p>

                    <Row>
                        <Col lg={ 6 }>
                            <h5 className="m-t-3">Basic Elements</h5>
                            <p className="m-b-2 m-t-0">
                                Separators are automatically added in CSS through <kbd>:before</kbd> and <kbd>content</kbd>.
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Examples</strong>
                            </p>
                            <Breadcrumb className='m-b-1'>
                                <Breadcrumb.Item active>
                                    Home
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb className='m-b-1'>
                                <Breadcrumb.Item>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Library
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Data
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col lg={ 6 }>
                            <h5 className="m-t-3">With Icon(s)</h5>
                            <p className="m-b-2 m-t-0">
                                Instead of text, add icon with a set of Font Awesome: <kbd>&lt;i className="fa fa-home"&gt;</kbd>
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Examples</strong>
                            </p>
                            <Breadcrumb className='m-b-1'>
                                <Breadcrumb.Item active>
                                    <i className='fa fa-home fa-fw'></i>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb className='m-b-1'>
                                <Breadcrumb.Item>
                                    <i className='fa fa-home fa-fw'></i>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Library
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <i className='fa fa-home fa-fw'></i>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Data
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={ 6 }>
                            <h5 className="m-t-3">Without Background</h5>
                            <p className="m-b-2 m-t-0">
                                To an existing <kbd>Breadcrumb</kbd> component add <kbd>noBackground</kbd> prop.
                            </p>
                            <p className="text-muted text-uppercase small">
                                <strong>Examples</strong>
                            </p>
                            <Breadcrumb className='m-b-1' noBackground>
                                <Breadcrumb.Item active>
                                    Home
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb className='m-b-1' noBackground>
                                <Breadcrumb.Item>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Library
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb noBackground>
                                <Breadcrumb.Item>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Data
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(BreadcrumbsContainer);
