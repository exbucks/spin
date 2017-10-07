import React from 'react';
import faker from 'faker';

import {
    Row,
    Col,
    Table,
    Dropdown
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import * as Examples from './Examples';

class Tables extends RoutedComponent {
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
                        It may seem super redundant, but given the widespread use of tables for other plugins like calendars and date pickers, we've opted to isolate our custom table styles.
                    </p>
                    <h4 className='m-t-3'>
                        Basic Example
                    </h4>
                    <p className='m-b-2'>
                        For styling—light padding and only horizontal dividers — use the <kbd>Table</kbd> component.
                    </p>
                    { Examples.BasicExampleTable() }
                </Col>

                <Col lg={ 12 }>
                    <h4 className='m-t-3'>
                        Striped Example
                    </h4>
                    <p className='m-b-2'>
                        Add <kbd>striped</kbd> property to the <kbd>Table</kbd> to add zebra-striping to the table rows.
                    </p>
                    { Examples.StripedExampleTable() }
                </Col>

                <Col lg={ 12 }>
                    <h4 className='m-t-3'>
                        Hover Example
                    </h4>
                    <p className='m-b-2'>
                        Add <kbd>hover</kbd> property to the <kbd>Table</kbd> element to enable a hover on the table body.
                    </p>
                    { Examples.HoverExampleTable() }
                </Col>

                <Col lg={ 12 }>
                    <h4 className='m-t-3'>
                        Bordered Example
                    </h4>
                    <p className='m-b-2'>
                        Add <kbd>bordered</kbd> property to the <kbd>Table</kbd> for adding borders on sides and cells.
                    </p>
                    { Examples.BorderedExampleTable() }
                </Col>

                <Col lg={ 12 }>
                    <h4 className='m-t-3'>
                        Condensed Example
                    </h4>
                    <p className='m-b-2'>
                        Add <kbd>condensed</kbd> property to the <kbd>Table</kbd> to make tables more compact by cutting cell padding in half.
                    </p>
                    { Examples.CondensedExampleTable() }
                </Col>

                <Col lg={ 12 }>
                    <h4 className='m-t-3'>
                        Responsive Example
                    </h4>
                    <p className='m-b-2'>
                        Add <kbd>responsive</kbd> property to the <kbd>Table</kbd> to make them scroll horizontally on small devices (under 768px)
                    </p>
                    { Examples.ResponsiveExampleTable() }
                </Col>

                <Col lg={ 12 }>
                    <h4 className='m-t-3'>
                        Contextual Example
                    </h4>
                    <p className='m-b-2'>
                        Use contextual classes to color table rows or individual cells.
                    </p>
                    { Examples.ContextualExampleTable() }
                </Col>
            </Row>
        );
    }
}

export default connect()(Tables);
