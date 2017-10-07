import React from 'react';

import {
    Row,
    Col,
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

//import classes from './dualList.scss';
import {
    SingleContainer,
    NestedContainer
} from './containers';

// ------------------------------------
// Main Container
// ------------------------------------
class NestableContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className='p-b-3'>
                <p className='m-b-3'>
                    Here are two simple examples of Nestable and Sortable created with a pure React Component. Both running demos are available below.
                </p>
                <Row>
                    <Col lg={ 6 }>
                        <p className='small text-uppercase text-muted'>
                            <strong>Sortable</strong>
                        </p>
                        <SingleContainer />
                    </Col>
                    <Col lg={ 6 }>
                        <p className='small text-uppercase text-muted'>
                            <strong>Nestable</strong>
                        </p>
                        <NestedContainer />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(NestableContainer);
