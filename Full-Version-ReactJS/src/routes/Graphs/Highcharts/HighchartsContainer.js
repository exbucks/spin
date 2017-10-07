import React from 'react';

import {
    Row,
    Col,
    Panel,
    Button,
    Charts
} from 'components';

import classes from './Highcharts.scss';

import { Colors } from 'consts';
import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import {
    paymentReceived,
    basicColumn,
    pieWithLegend,
    basicColumnAlt,
    stackedColumn,
    polarChart,
    basicBar,
    stackedArea,
    spiderWeb,
    scatterPlot
} from './chartConfigs';

class HighchartsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div>
                <p className='m-t-1 m-b-3'>
                    <span className='text-white'>Create interactive charts easily for your web projects.</span> Used by tens of thousands of developers and 72 out of the world's 100 largest companies, Highcharts is the simplest yet most flexible charting API on the market.
                </p>
                <Row>
                    <Col lg={ 12 }>
                        <Panel
                            header='Payment Received'
                        >
                            <Row>
                                <Col lg={ 10 }>
                                    <Charts.HighchartBasicArea config={ paymentReceived } />
                                </Col>
                                <Col lg={ 2 }>
                                    <div className={ classes.totalIncome }>
                                        <h4 className={ classes.paymentHeader }>
                                            Total Income
                                        </h4>
                                        <p className={ classes.paymentValueLarge }>
                                            $5,878.00
                                        </p>
                                    </div>

                                    <div className={ classes.payment }>
                                        <p className={ classes.paymentValue }>
                                            $2,678.55
                                        </p>
                                        <Charts.SparklineBar
                                            data={ [5,3,9,6,5,9,7,3,5,2,9,5,3,9,6,5,9,7,3,5,2,9,5,3,9,6,5,9,7,3,5,2,9] }
                                            width={ 130 }
                                            height={ 16 }
                                            color={ Colors.gray }
                                        />
                                        <h4 className={ classes.paymentHeader }>
                                            Credit Card Payments
                                        </h4>
                                    </div>

                                    <div className={ classes.payment }>
                                        <p className={ classes.paymentValue }>
                                            $6,278.45
                                        </p>
                                        <Charts.SparklineBar
                                            data={ [8,4,5,6,7,8,9,5,4,3,7,3,5,2,9,5,3,9,6,5,9,7,3,5,7,3,5,2,9,5,3,9,6] }
                                            width={ 130 }
                                            height={ 16 }
                                            color={ Colors.gray }
                                        />
                                        <h4 className={ classes.paymentHeader }>
                                            PayPal Payments
                                        </h4>
                                    </div>
                                    <Button className='m-t-3'>
                                        View Reports
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </Button>
                                </Col>
                            </Row>
                        </Panel>

                        <Row>
                            <Col lg={ 4 }>
                                <Panel
                                    header='Basic Column'
                                >
                                    <Charts.HighchartBasicColumn config={ basicColumn } />
                                </Panel>
                            </Col>

                            <Col lg={ 4 }>
                                <Panel
                                    header='Pie with Legend'
                                >
                                    <Charts.HighchartBasicPie config={ pieWithLegend } />
                                </Panel>
                            </Col>

                            <Col lg={ 4 }>
                                <Panel
                                    header='Basic Column Alt.'
                                >
                                    <Charts.HighchartBasicColumn config={ basicColumnAlt } />
                                </Panel>
                            </Col>

                            <Col lg={ 4 }>
                                <Panel
                                    header='Stacked Column'
                                >
                                    <Charts.HighchartBasicColumn config={ stackedColumn } />
                                </Panel>
                            </Col>

                            <Col lg={ 4 }>
                                <Panel
                                    header='Polar Chart'
                                >
                                    <Charts.Highchart config={ polarChart } />
                                </Panel>
                            </Col>

                            <Col lg={ 4 }>
                                <Panel
                                    header='Basic Bar'
                                >
                                    <Charts.Highchart config={ basicBar } />
                                </Panel>
                            </Col>

                            <Col lg={ 4 }>
                                <Panel
                                    header='Stacked Area'
                                >
                                    <Charts.Highchart config={ stackedArea } />
                                </Panel>
                            </Col>

                            <Col lg={ 4 }>
                                <Panel
                                    header='Spiderweb'
                                >
                                    <Charts.HighchartBasicLine config={ spiderWeb } />
                                </Panel>
                            </Col>

                            <Col lg={ 4 }>
                                <Panel
                                    header='Scatter Plot'
                                >
                                    <Charts.Highchart config={ scatterPlot } />
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(HighchartsContainer);
