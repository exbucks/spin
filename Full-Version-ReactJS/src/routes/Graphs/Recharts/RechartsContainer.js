import React from 'react';
import { Link } from 'react-router';

import {
    Row,
    Col,
    Divider,
    Panel
} from 'components';

import {
    SimpleLineChart,
    VerticalLineChart,
    LineChartWithBrush,
    SimpleBarChart,
    StackedBarChart,
    MixBarChart,
    PositiveNegativeBar,
    BarChartWithBrush,
    SimpleAreaChart,
    StackedAreaChart,
    PercentAreaChart,
    TwoLevelPieChart,
    StraightAnglePieChart,
    ActiveShapeChart,
    DonutChart,
    PaddingAngleFull,
    PaddingAngleHalf,
    SimpleRadarChart,
    SpecifiedDomainRadarChart,
    SimpleTreeMap,
    CustomContentTreeMap,
    CustomizedLabelLineChart
} from './charts';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class RechartsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div>
                <p>
                    Recharts is a Redefined chart library built with React and D3. The main purpose of this library is to help you to write charts in React applications without any pain. Simply deploy with React components Native SVG support, lightweight depending only on some D3 submodules Declarative components, components of charts are purely presentational
                </p>
                <Row className='m-t-2'>
                    <Col lg={ 6 }>
                        <Panel header='Simple Line Chart' footer='LineChart'>
                            <SimpleLineChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Vertical Line Chart' footer='LineChart'>
                            <VerticalLineChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 } >
                        <Panel header='Customized Label Line Chart' footer='LineChart'>
                            <CustomizedLabelLineChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Line Chart with Brush' footer='LineChart'>
                            <LineChartWithBrush />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Simple Bar Chart' footer='LineChart'>
                            <SimpleBarChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Stacked Bar Chart' footer='LineChart'>
                            <StackedBarChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Mixed Bar Chart' footer='BarChart'>
                            <MixBarChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Positive Negative Bar Chart' footer='BarChart'>
                            <PositiveNegativeBar />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Bar Chart with Brush' footer='BarChart'>
                            <BarChartWithBrush />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Simple Area Chart' footer='AreaChart'>
                            <SimpleAreaChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Stacked Area Chart' footer='AreaChart'>
                            <StackedAreaChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Percent Area Chart' footer='AreaChart'>
                            <PercentAreaChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Two Level Pie Chart' footer='PieChart'>
                            <TwoLevelPieChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Straight Angle Pie Chart' footer='PieChart'>
                            <StraightAnglePieChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Donut Chart' footer='PieChart'>
                            <DonutChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Active Pie Chart' footer='PieChart'>
                            <ActiveShapeChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Padding Angle Full' footer='PieChart'>
                            <PaddingAngleFull />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Padding Angle Half' footer='PieChart'>
                            <PaddingAngleHalf />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Simple Radar Chart' footer='RadarChart'>
                            <SimpleRadarChart />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Specific Domain Radar Chart' footer='RadarChart'>
                            <SpecifiedDomainRadarChart />
                        </Panel>
                    </Col>
                    {/*
                    <Col lg={ 6 }>
                        <Panel header='Simple Tree Map' footer='TreeMap'>
                            <SimpleTreeMap />
                        </Panel>
                    </Col>
                    <Col lg={ 6 }>
                        <Panel header='Custom Content Tree Map' footer='TreeMap'>
                            <CustomContentTreeMap />
                        </Panel>
                    </Col>
                    */}
                </Row>
            </div>
        );
    }
}

export default connect()(RechartsContainer);
