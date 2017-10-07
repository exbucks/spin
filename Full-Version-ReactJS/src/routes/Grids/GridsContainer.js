import React from 'react';
import {
    Row,
    Col,
    Table,
    Clearfix
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class GridsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <p className='m-b-3'>
                        Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. It includes predefined classes for easy layout options, as well as powerful mixins for generating more semantic layouts.
                    </p>
                    <h5 className="m-t-3">Grid Options</h5>
                    <p>
                        See how aspects of the Bootstrap grid system work across multiple devices with a handy table.
                    </p>
                    <Table standard responsive striped bordered>
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                     { 'Extra small devices '}
                                     <small>Phones (&lt;768px)</small>
                                </th>
                                <th>
                                     { 'Small devices '}
                                     <small>Tablets (≥768px)</small>
                                </th>
                                <th>
                                     { 'Medium devices '}
                                     <small>Desktops (≥992px)</small>
                                </th>
                                <th>
                                     { 'Large devices '}
                                     <small>Desktops (≥1200px)</small>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="text-nowrap" scope="row">Grid behavior</th>
                                <td>Horizontal at all times</td>
                                <td colSpan="3">Collapsed to start, horizontal above breakpoints</td>
                            </tr>
                            <tr>
                                <th className="text-nowrap" scope="row">Container width</th>
                                <td>None (auto)</td>
                                <td>750px</td>
                                <td>970px</td>
                                <td>1170px</td>
                            </tr>
                            <tr>
                                <th className="text-nowrap" scope="row">Class prefix</th>
                                <td><code>.col-xs-</code></td>
                                <td><code>.col-sm-</code></td>
                                <td><code>.col-md-</code></td>
                                <td><code>.col-lg-</code></td>
                            </tr>
                            <tr>
                                <th className="text-nowrap" scope="row"># of columns</th>
                                <td colSpan="4">12</td>
                            </tr>
                            <tr>
                                <th className="text-nowrap" scope="row">Column width</th>
                                <td className="text-muted">Auto</td>
                                <td>~62px</td>
                                <td>~81px</td>
                                <td>~97px</td>
                            </tr>
                            <tr>
                                <th className="text-nowrap" scope="row">Gutter width</th>
                                <td colSpan="4">30px (15px on each side of a column)</td>
                            </tr>
                            <tr>
                                <th className="text-nowrap" scope="row">Nestable</th>
                                <td colSpan="4">Yes</td>
                            </tr>
                            <tr>
                                <th className="text-nowrap" scope="row">Offsets</th>
                                <td colSpan="4">Yes</td>
                            </tr>
                            <tr>
                                <th className="text-nowrap" scope="row">Column ordering</th>
                                <td colSpan="4">Yes</td>
                            </tr>
                        </tbody>
                    </Table>
                    { /* === Example: Stacked Horizontal */ }
                    <h5 className="m-t-3">Example: Stacked-to-horizontal</h5>
                    <p>
                        Using a single set of <kbd>Col</kbd> components, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any <kbd>Row</kbd> component.
                    </p>
                    <Row className='show-grid m-t-2'>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                        <Col md={ 1 }>col-md-1</Col>
                    </Row>
                    <Row className='show-grid m-t-2'>
                        <Col md={ 8 }>col-md-8</Col>
                        <Col md={ 4 }>col-md-4</Col>
                    </Row>
                    <Row className='show-grid m-t-2'>
                        <Col md={ 4 }>col-md-4</Col>
                        <Col md={ 4 }>col-md-4</Col>
                        <Col md={ 4 }>col-md-4</Col>
                    </Row>
                    <Row className='show-grid m-t-2'>
                        <Col md={ 6 }>col-md-6</Col>
                        <Col md={ 6 }>col-md-6</Col>
                    </Row>

                    { /* === Example: Mobile and desktop */ }
                    <h5 className="m-t-3">Example: Mobile and desktop</h5>
                    <p>
                        Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid props by adding <kbd>xs=</kbd> <kbd>md=</kbd> to your columns. See the example below for a better idea of how it all works..
                    </p>
                    <Row className='show-grid m-t-2'>
                        <Col md={ 8 } xs={ 12 }>col-xs-12 col-md-8</Col>
                        <Col md={ 4 } xs={ 6 }>col-md-4 col-xs-6</Col>
                    </Row>
                    <Row className='show-grid m-t-2'>
                        <Col md={ 4 } xs={ 6 }>col-xs-6 col-md-4</Col>
                        <Col md={ 4 } xs={ 6 }>col-xs-6 col-md-4</Col>
                        <Col md={ 4 } xs={ 6 }>col-xs-6 col-md-4</Col>
                    </Row>
                    <Row className='show-grid m-t-2'>
                        <Col xs={ 6 }>col-xs-6</Col>
                        <Col xs={ 6 }>col-xs-6</Col>
                    </Row>

                    { /* === Example: Mobile, tablet, desktop */ }
                    <h5 className="m-t-3">Example: Mobile, tablet, desktop</h5>
                    <p>
                        If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
                    </p>
                    <Row className='show-grid m-t-2'>
                        <Col xs={ 9 }>col-xs-9</Col>
                        <Col xs={ 4 }>
                            col-xs-4<br/>
                            Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
                        </Col>
                        <Col xs={ 6 }>
                            col-xs-6 <br/>
                            Subsequent columns continue along the new line.
                        </Col>
                    </Row>

                    { /* === Responsive colum resets */ }
                    <h5 className="m-t-3">Responsive column resets</h5>
                    <p>
                        With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use the <kbd>Clearfix</kbd> utility component.
                    </p>
                    <Row className="show-grid">
                        <Col sm={6} md={3}>col-xs-6 col-sm-3</Col>
                        <Col sm={6} md={3}>col-xs-6 col-sm-3</Col>
                        <Clearfix visibleSmBlock>Clearfix visible sm</Clearfix>
                        <Col sm={6} md={3}>col-xs-6 col-sm-3</Col>
                        <Col sm={6} md={3}>col-xs-6 col-sm-3</Col>
                    </Row>

                    { /* === Nesting columns */ }
                    <h5 className="m-t-3">Nesting Columns</h5>
                    <p>
                        To nest your content with the default grid, add a new <kbd>Row</kbd> component and set of <kbd>Col</kbd> columns within an existing <kbd>Col</kbd> column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).
                    </p>
                    <Row className="show-grid">
                        <Col sm={9}>
                            Level 1: col-sm-9
                            <Row>
                                <Col sm={6} xs={8}>Level 2: col-xs-8 col-sm-6</Col>
                                <Col sm={6} xs={4}>Level 2: col-xs-4 col-sm-6</Col>
                            </Row>
                        </Col>
                    </Row>

                    { /* === Column ordering */ }
                    <h5 className="m-t-3">Column Ordering</h5>
                    <p>
                        Easily change the order of our built-in grid columns with <kbd>mdPush=*</kbd> and <kbd>mdPull=*</kbd> modifier props.
                    </p>
                    <Row className="show-grid">
                        <Col md={9} mdPush={3}>col-md-9 col-md-push-3</Col>
                        <Col md={3} mdPull={9}>col-md-3 col-md-pull-9</Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(GridsContainer);
