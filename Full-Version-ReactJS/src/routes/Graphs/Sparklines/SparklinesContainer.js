import React from 'react';
import _ from 'underscore';

import { RoutedComponent, connect } from 'routes/routedComponent';
import {
    Row,
    Col,
    Table,
    Charts
} from 'components';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';
import { Colors } from 'consts';

import classes from './Sparklines.scss';

const piesData = [15, 60, 35, 15, 70, 40];

class SparklinesContainer extends RoutedComponent {
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
                        <kbd>Sparklines</kbd> components allow to render small inline <kbd>SVG</kbd> charts. Allows to visualise less important data at a glance.
                    </p>

                    <Row className='m-t-2'>
                        <Col lg={ 4 }>
                            <h5>
                                Pie Charts
                            </h5>
                            <p>
                                Use <kbd>SparklinePie</kbd> component to redner a small Pie chart. <kbd>radius</kbd> property changes the size of the chart.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Examples
                            </p>

                            <Table className={ classes.chartExampleTable }>
                                <thead>
                                    <tr>
                                        <td>Color</td>
                                        <td>Layout</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Primary
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklinePie
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandPrimary }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Info
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklinePie
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandInfo }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Success
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklinePie
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandSuccess }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Warning
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklinePie
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandWarning }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Danger
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklinePie
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandDanger }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col lg={ 4 }>
                            <h5>
                                Donut Charts
                            </h5>
                            <p>
                                <kbd>SparklineDonut</kbd> component can be used to create donut charts. <kbd>innerRadius</kbd> prop allows to change the thickness of the donut.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Examples
                            </p>

                            <Table className={ classes.chartExampleTable }>
                                <thead>
                                    <tr>
                                        <td>Color</td>
                                        <td>Layout</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Primary
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklineDonut
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandPrimary }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Info
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklineDonut
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandInfo }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Success
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklineDonut
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandSuccess }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Warning
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklineDonut
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandWarning }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Danger
                                        </td>
                                        <td>
                                            {
                                                _.map(piesData, (value, index) => (
                                                    <span key={ index }>
                                                        <Charts.SparklineDonut
                                                            radius={ 16 }
                                                            value={ value }
                                                            color={ Colors.brandDanger }
                                                        />
                                                        { ' ' }
                                                    </span>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col lg={ 4 }>
                            <h5>
                                Line Charts
                            </h5>
                            <p>
                                Line charts can be rendered with the <kbd>SparklineLine</kbd>. You can specify the <kbd>width</kbd>, <kbd>height</kbd> and <kbd>limit</kbd> props.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Examples
                            </p>

                            <Table className={ classes.chartExampleTable }>
                                <thead>
                                    <tr>
                                        <td>Color</td>
                                        <td>Layout</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Primary
                                        </td>
                                        <td>
                                            <Charts.SparklineLine
                                                width={ 42 }
                                                height={ 16 }
                                                data={ [5, 3, 10, 8, 6, 10, 9, 4, 5, 3] }
                                                limit={ 10 }
                                                color={ Colors.brandPrimary }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Info
                                        </td>
                                        <td>
                                            <Charts.SparklineLine
                                                width={ 42 }
                                                height={ 16 }
                                                data={ [5, 4, 3, -2, -1, 1, 3, 4, 8, 4] }
                                                limit={ 10 }
                                                color={ Colors.brandInfo }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Success
                                        </td>
                                        <td>
                                            <Charts.SparklineLine
                                                width={ 42 }
                                                height={ 16 }
                                                data={ [10, 4, 5, 4, 5, 3, 7, 6, 8, 9] }
                                                limit={ 10 }
                                                color={ Colors.brandSuccess }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Warning
                                        </td>
                                        <td>
                                            <Charts.SparklineLine
                                                width={ 42 }
                                                height={ 16 }
                                                data={ [5, 3, 10, 8, 6, 10, 9, 4, 5, 3] }
                                                limit={ 10 }
                                                color={ Colors.brandWarning }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Danger
                                        </td>
                                        <td>
                                            <Charts.SparklineLine
                                                width={ 42 }
                                                height={ 16 }
                                                data={ [5, 3, 10, 8, 6, 10, 9, 4, 5, 3] }
                                                limit={ 10 }
                                                color={ Colors.brandDanger }
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    <Row className='m-t-2'>
                        <Col lg={ 4 }>
                            <h5>
                                Bar Charts
                            </h5>
                            <p>
                                <kbd>SparklineBar</kbd> creates a Bar Chart filliing the data bars across all the available <kbd>width</kbd>
                            </p>
                            <p className={ classes.exampleLabel }>
                                Examples
                            </p>

                            <Table className={ classes.chartExampleTable }>
                                <thead>
                                    <tr>
                                        <td>Color</td>
                                        <td>Layout</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Primary
                                        </td>
                                        <td>
                                            <Charts.SparklineBar
                                                width={ 32 }
                                                height={ 16 }
                                                data={ [5, 3, 10, 8, 6, 10, 9, 4, 5, 3] }
                                                limit={ 10 }
                                                color={ Colors.brandPrimary }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Info
                                        </td>
                                        <td>
                                            <Charts.SparklineBar
                                                width={ 32 }
                                                height={ 16 }
                                                data={ [5, 4, 3, -2, -1, 1, 3, 4, 8, 4] }
                                                limit={ 10 }
                                                color={ Colors.brandInfo }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Success
                                        </td>
                                        <td>
                                            <Charts.SparklineBar
                                                width={ 32 }
                                                height={ 16 }
                                                data={ [10, 4, 5, 4, 5, 3, 7, 6, 8, 9] }
                                                limit={ 10 }
                                                color={ Colors.brandSuccess }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Warning
                                        </td>
                                        <td>
                                            <Charts.SparklineBar
                                                width={ 32 }
                                                height={ 16 }
                                                data={ [5, 3, 10, 8, 6, 10, 9, 4, 5, 3] }
                                                color={ Colors.brandWarning }
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Danger
                                        </td>
                                        <td>
                                            <Charts.SparklineBar
                                                width={ 32 }
                                                height={ 16 }
                                                data={ [5, 3, 10, 8, 6, 10, 9, 4, 5, 3] }
                                                color={ Colors.brandDanger }
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col lg={ 8 }>
                            <h5>
                                Interchangeable attributes
                            </h5>
                            <p>
                                The attributes can be used freely to get a variant fully appropriate for your needs.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Examples
                            </p>

                            <div>
                                <Charts.SparklineDonut
                                    radius={ 80 }
                                    value={ 15 }
                                    color={ Colors.brandPrimary }
                                    innerRadius='70%'
                                /> {' '}
                                <Charts.SparklineDonut
                                    radius={ 72 }
                                    value={ 28 }
                                    color={ Colors.brandInfo }
                                    innerRadius='60%'
                                /> {' '}
                                <Charts.SparklineDonut
                                    radius={ 64 }
                                    value={ 45 }
                                    color={ Colors.brandSuccess }
                                    innerRadius='50%'
                                /> {' '}
                                <Charts.SparklineDonut
                                    radius={ 56 }
                                    value={ 66 }
                                    color={ Colors.brandWarning }
                                    innerRadius='35%'
                                /> {' '}
                                <Charts.SparklineDonut
                                    radius={ 48 }
                                    value={ 72 }
                                    color={ Colors.brandDanger }
                                    innerRadius='20%'
                                /> {' '}
                                <Charts.SparklineDonut
                                    radius={ 40 }
                                    value={ 90 }
                                    color={ Colors.brandWhite }
                                    innerRadius='15%'
                                /> {' '}
                                <Charts.SparklineDonut
                                    radius={ 32 }
                                    value={ 100 }
                                    color={ Colors.brandPerfume }
                                    innerRadius='5%'
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>
        );
    }
}

export default connect()(SparklinesContainer);
