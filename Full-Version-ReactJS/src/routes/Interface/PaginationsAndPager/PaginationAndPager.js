import React from 'react';
import {
    Row,
    Col,
    Pagination,
    Pager
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class PaginationAndPagerContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <h4>
                        Pagination
                    </h4>
                    <p>
                        Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative.
                    </p>
                    <Row>
                        <Col lg={ 4 }>
                            <h5>Default Pagination</h5>
                            <p>
                                Simple pagination inspired by Rdio, great for apps and search results. The large block is hard to miss, easily scalable, and provides large click areas.
                            </p>
                            <p className="small text-uppercase m-b-0 m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Pagination
                                items={ 5 }
                                activePage={ null }
                                first
                                last
                            />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Disabled and Active States</h5>
                            <p>
                                Links are customizable for different circumstances. Use <kbd>.disabled</kbd> for unclickable links and <kbd>.active</kbd> to indicate the current page.
                            </p>
                            <p className="small text-uppercase m-b-0 m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Pagination
                                items={ 5 }
                                first
                                last
                                activePage={ 1 }
                            />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Sizing</h5>
                            <p>
                                Fancy larger or smaller pagination? Add <kbd>.pagination-lg</kbd> or <kbd>.pagination-sm</kbd> for additional sizes.
                            </p>
                            <p className="small text-uppercase m-b-0 m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Pagination
                                className='m-t-1 m-b-0'
                                items={ 5 }
                                activePage={ null }
                                first
                                last
                                bsSize='large'
                            />
                            <Pagination
                                className='m-t-1 m-b-0'
                                items={ 5 }
                                activePage={ null }
                                first
                                last
                                bsSize='medium'
                            />
                            <Pagination
                                className='m-t-1 m-b-0'
                                items={ 5 }
                                activePage={ null }
                                first
                                last
                                bsSize='small'
                            />
                        </Col>
                    </Row>

                    <h4>
                        Pager
                    </h4>
                    <p>
                        Quick previous and next links for simple pagination implementations with light markup and styles. It's great for simple sites like blogs or magazines.
                    </p>
                    <Row>
                        <Col lg={ 4 }>
                            <h5>
                                Default Pager
                            </h5>
                            <p>
                                By default, the pager centers links.
                            </p>
                            <p className="small text-uppercase m-b-0 m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Pager>
                                <Pager.Item href="#">Previous</Pager.Item>
                                {' '}
                                <Pager.Item href="#">Next</Pager.Item>
                            </Pager>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>
                                Aligned Links
                            </h5>
                            <p>
                                Alternatively, you can align each link to the sides.
                            </p>
                            <p className="small text-uppercase m-b-0 m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Pager>
                                <Pager.Item previous href="#">&larr; Older</Pager.Item>
                                {' '}
                                <Pager.Item next href="#">Newer &rarr;</Pager.Item>
                            </Pager>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>
                                Optional Disabled State
                            </h5>
                            <p>
                                Pager links also use the general <kbd>.disabled</kbd> utility class from the pagination.
                            </p>
                            <p className="small text-uppercase m-b-0 m-t-2">
                                <strong>Example</strong>
                            </p>
                            <Pager>
                                <Pager.Item previous disabled href="#">&larr; Older</Pager.Item>
                                {' '}
                                <Pager.Item next href="#">Newer &rarr;</Pager.Item>
                            </Pager>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(PaginationAndPagerContainer);
