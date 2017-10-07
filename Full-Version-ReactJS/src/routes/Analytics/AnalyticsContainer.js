import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import deepAssign from 'assign-deep';
import numeral from 'numeral';
import moment from 'moment';

import {
    Row,
    Col,
    Panel,
    Button,
    DropdownButton,
    MenuItem,
    ButtonGroup,
    Table,
    Charts
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';

import { Colors } from 'consts';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import analyticsData from 'consts/data/analytics.json';
import analyticsChartData from 'consts/data/analytics-chart.json';

import classes from './Analytics.scss';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const getChartConfig = (chartData) => (
    {
        title: '',
        yAxis: {
            title: ''
        },
        xAxis: {
            type: 'datetime',
            gridLineWidth: 1
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        plotOptions: {
            line: {
                lineWidth: 1,
                marker: {
                    symbol: 'circle'
                }
            }
        },
        series: [
            {
                name: 'Visits',
                data: chartData.Visits,
                color: Colors.brandPrimary
            }, {
                name: 'Unique Visitors',
                data: chartData.UniqueVisitors,
                color: Colors.brandDanger
            }
        ]
    }
)

const secondsToTime = (secs) => moment.unix(secs).format('HH:mm:ss');
// ------------------------------------
// Sub Elements
// ------------------------------------
const renderViewsChart = (data) => {
    const colors = [
        Colors.brandPrimary,
        Colors.brandInfo,
        Colors.brandSuccess,
        Colors.brandWarning,
        Colors.brandDanger
    ];

    const renderChartLegend = (legend, colors) => _.map(legend, (l, index) => (
        <div key={ index }>
            <i className='fa fa-fw fa-circle' style={ {color: colors[index]} }></i>
            {`  ${l.Name}`}
        </div>
    ));

    return (
        <Panel
            className={`${classes.boxPanel} ${classes.chartPanel}` }
        >
            <Charts.SparklineDonut
                data={ _.map(data, value => value.Views) }
                colors={ colors }
                radius={ 56 }
                innerRadius='30%'
            />
            <div className={ classes.chartLegend }>
                { renderChartLegend(data, colors) }
            </div>
        </Panel>
    );
}

const renderViewsTable = (data, asLinks) => {
    const totalViews = _.reduce(data, (memo, val) => memo + parseInt(val.Views), 0);
    const uniqueViews = (dataRow) => {
        const n = parseInt(dataRow.UniqueViewsPercentage) / 100;
        return Math.round(parseInt(dataRow.Views) / n);
    };

    const renderRow = (rowData) => (
        <tr key={ rowData._id }>
            <td>
                <i className="fa fa-fw fa-angle-right"></i>
            </td>
            <td className='text-white'>
                {
                    (!asLinks) ?
                        rowData.Name :
                        (<a href='javascript:void(0)'>{ rowData.Name }</a>)
                }
            </td>
            <td>
                { (parseInt(rowData.Views) / totalViews * 100).toFixed(1) }%
            </td>
            <td>
                { numeral(rowData.Views).format('0,0') }
            </td>
            <td>
                { numeral(uniqueViews(rowData)).format('0,0') }
            </td>
            <td>
                { numeral(rowData.TotalMinutes).format('0,0') }
            </td>
            <td>
                { secondsToTime(rowData.Duration) }
            </td>
        </tr>
    );
    return (
        <Table
            responsive
            hover
            className={ classes.viewsTable }
        >
            <thead>
                <tr>
                    <th></th>
                    <th>Device</th>
                    <th>Views</th>
                    <th>Total Views</th>
                    <th>Unique Views</th>
                    <th>Total Minutes</th>
                    <th>Avg Duration</th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(data, rowData => renderRow(rowData))
                }
            </tbody>
        </Table>
    );
}

const renderDetailedViewsChart = (chartConfig) => (
    <div>
        <div className={ classes.chartSettings }>
            <ButtonGroup>
                <Button bsSize='small'>
                    Last 7 Days
                </Button>
                <Button bsSize='small'>
                    Live & Recorded
                </Button>
                <Button bsSize='small'>
                    All Events
                </Button>
                <Button bsSize='small'>
                    All media
                </Button>
                <Button bsSize='small'>
                    All Locations
                </Button>
            </ButtonGroup>

            <Button bsStyle='primary' bsSize='small'>Update Filters</Button>
        </div>
        <Charts.HighchartBasicLine
            config={ chartConfig }
        />
    </div>
);

const renderViewsSummary = (views) => {
    const viewEntry = (title, value, large = false) => (
        <div className={`${classes.viewsEntry} ${large ? classes.viewsEntryLarge : ''}`}>
            <h5 className={ classes.viewsEntryHeader}>
                { title }
            </h5>
            <p className={ classes.viewsEntryValue }>
                { value }
            </p>
        </div>
    );

    const durationTime = moment.duration()

    return (
        <Panel className={ classes.boxPanel }>
            { viewEntry('Total Views', numeral(views.TotalViews).format('0,0'),
                true) }
            { viewEntry('Unique Views', numeral(views.UniqueViews).format('0,0')) }
            { viewEntry('Max Concurrent Views', numeral(views.MaxConcurentViews).format('0,0')) }
            { viewEntry('Total Minutes Viewed', numeral(views.TotalMinutesViewed).format('0,0')) }
            { viewEntry('Average Duration', secondsToTime(views.AverageDuration)) }
        </Panel>
    );
};

const renderRowTitle = (title) => (
    <Row>
        <Col lg={ 12 } className={ classes.titleRow }>
            <h4 className={ classes.titleRowHeader }>
                { title }
            </h4>
            <Button bsStyle='link' bsSize='small'>
                Download .CSV <i className='fa fa-fw text-gray-lighter fa-download'></i>
            </Button>
        </Col>
    </Row>
);
// ------------------------------------
// Main Container
// ------------------------------------
class AnalyticsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, getData(analyticsData), {
            ViewChart: getChartConfig(analyticsChartData)
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div>
                { renderRowTitle('Viewers') }
                <Row className={ `${classes.leadRow} m-b-2` }>
                    <Col lg={ 3 }>
                        { renderSection(renderViewsSummary, this.state.ViewsStatistics) }
                    </Col>
                    <Col lg={ 9 }>
                        { renderSection(renderDetailedViewsChart, this.state.ViewChart) }
                    </Col>
                </Row>
                { renderRowTitle('Devices') }
                <Row className='m-b-2'>
                    <Col lg={ 10 }>
                        { renderViewsTable(this.state.Devices) }
                    </Col>
                    <Col lg={ 2 }>
                        { renderViewsChart(this.state.Devices) }
                    </Col>
                </Row>
                { renderRowTitle('Media Type') }
                <Row>
                    <Col lg={ 10 }>
                        { renderViewsTable(this.state.MediaType, true) }
                    </Col>
                    <Col lg={ 2 }>
                        { renderViewsChart(this.state.MediaType) }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(AnalyticsContainer);
