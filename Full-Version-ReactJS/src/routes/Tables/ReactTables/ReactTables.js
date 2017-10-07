import React from 'react';
import faker from 'faker';

import {
    Row,
    Col,
    Divider
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import * as Examples from './Examples';

class ReactTables extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div>
                <p>
                    React-bootstrap-table is a React component for Bootstrap table. It's a configurable, functional table component.It make you build a Bootstrap Table more efficiency and easy in your React application.
                </p>
                <Row>
                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.AdvancedTableA name='Advanced Table A'/>
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.AdvancedTableB name='Advanced Table B'/>
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <h4>Basic Table</h4>
                        <Examples.BasicTable />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                       <h4>Borderless Table</h4>
                       <Examples.BorderlessTable />
                   </Col>

                   <Col lg={ 12 } className='p-b-3'>
                        <h4>Large Table</h4>
                        <Examples.LargeTable />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <h4>Scroll Table</h4>
                        <Examples.ScrollTable />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <h4>Sort Table</h4>
                        <Examples.SortTable />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <h4>Column Format with React</h4>
                        <Examples.ColumnFormat />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <h4>All Filter & Clean Filter</h4>
                        <Examples.AllFilters />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.SelectAll />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.CustomPagination />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.InsertRow />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.DeleteRow />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.ClearSearch />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.CustomButtons />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <h4>Custom Cell Edit</h4>
                        <Examples.CustomCellEdit />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.ExpandRow />
                    </Col>

                    <Col lg={ 12 } className='p-b-3'>
                        <Examples.HeaderGroup />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(ReactTables);
