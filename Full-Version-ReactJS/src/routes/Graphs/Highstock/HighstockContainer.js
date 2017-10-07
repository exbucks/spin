import React from 'react';
import { Link } from 'react-router';

import {
    Row,
    Col,
    TreeNavigator,
    Divider,
    GalleryThumbnail
} from 'components';

import * as Charts from './charts';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

// Thumbnail Images
import thumbSingleLine from 'static/highstock-thumbs/highstock-single-line-series.png';
import thumbTwoPanesCandlestick from 'static/highstock-thumbs/highstock-two-panes-candlestick-and-volume.png';
import thumbCompareMultipleSeries from 'static/highstock-thumbs/highstock-compare-multiple-series.png';
import thumbPointsWithDataGrouping from 'static/highstock-thumbs/highstock-52000-points-with-data-grouping.png';
import thumbAsyncLoading from 'static/highstock-thumbs/highstock-17million-points-with-async-loading.png';
import thumbIntradayArea from 'static/highstock-thumbs/highstock-intraday-area.png';
import thumbIntradayWithBreaks from 'static/highstock-thumbs/highstock-Intraday-with-breaks.png';
import thumbIntradayCandlestick from 'static/highstock-thumbs/highstock-intraday-candlestick.png';
import thumbFlagsMarkingEvents from 'static/highstock-thumbs/highstock-flags-marking-events.png';
import thumbDynamicData from 'static/highstock-thumbs/highstock-Dynamically-updated-data.png';

import thumbSpline from 'static/highstock-thumbs/highstock-spline.png';
import thumbStepLine from 'static/highstock-thumbs/highstock-step-line.png';
import thumbArea from 'static/highstock-thumbs/highstock-area.png';
import thumbAreaSpline from 'static/highstock-thumbs/highstock-area-spline.png';
import thumbAreaRange from 'static/highstock-thumbs/highstock-area-range.png';
import thumbSplineRange from 'static/highstock-thumbs/highstock-area-spline-range.png';
import thumbCandlestick from 'static/highstock-thumbs/highstock-candlestick.png';
import thumbOhlc from 'static/highstock-thumbs/highstock-ohlc.png';
import thumbColumn from 'static/highstock-thumbs/highstock-column.png';
import thumbColumnRange from 'static/highstock-thumbs/highstock-column-range.png';
import thumbPointMarkersOnly from 'static/highstock-thumbs/highstock-point-markers-only.png';

const chartsMap = {
    'single-line-series': Charts.SingleLineSeries,
    'two-panes-candlestick-volume': Charts.TwoPanesCandlestickVolume,
    'compare-multiple-series': Charts.CompareMultiple,
    'points-with-data-grouping': Charts.PointsWithDataGrouping,
    'intraday-area': Charts.IntradayArea,
    'intraday-with-breaks': Charts.IntradayWithBreaks,
    'intraday-candlestick': Charts.IntradayCandlestick,
    'flags-marking-events': Charts.FlagsMarkingEvents,
    'dynamically-updated': Charts.DynamicallyUpdatedData,

    'spline': Charts.Spline,
    'step-line': Charts.StepLine,
    'area': Charts.Area,
    'area-spline': Charts.AreaSpline,
    'area-range': Charts.AreaRange,
    'area-spline-range': Charts.AreaSplineRange,
    'candlestick': Charts.Candlestick,
    'ohlc': Charts.Ohlc,
    'column': Charts.Column,
    'column-range': Charts.ColumnRange,
    'point-markers-only': Charts.PointMarkersOnly
}

const renderGalleryItem = (name, link, image) => (
    <Col md={ 6 }>
        <Link to={ link }>
            <GalleryThumbnail
                src={ image }
            >
                <p className='text-center text-primary'>
                    { name }
                    <i className='fa fa-angle-right m-l-1'></i>
                </p>
            </GalleryThumbnail>
        </Link>
    </Col>
);

const renderGallery = () => (
    <div>
        <p>
            <span className='text-white'>Highstock</span> lets you create stock or general timeline charts in pure JavaScript.Including sophisticated navigation options like a small navigator series, preset date ranges, date picker, scrolling and panning.
        </p>

        <Divider>
            General
        </Divider>

        <Row className='m-t-2'>
            { renderGalleryItem('Single Line Series', '/graphs/highstock/single-line-series', thumbSingleLine) }
            { renderGalleryItem('Two panes, candlestick and volume', '/graphs/highstock/two-panes-candlestick-volume', thumbTwoPanesCandlestick) }
            { renderGalleryItem('Compare Multiple Series', '/graphs/highstock/compare-multiple-series', thumbCompareMultipleSeries) }
            { renderGalleryItem('52k points with data grouping', '/graphs/highstock/points-with-data-grouping', thumbPointsWithDataGrouping) }
            { renderGalleryItem('Intraday area', '/graphs/highstock/intraday-area', thumbIntradayArea) }
            { renderGalleryItem('Intraday with breaks', '/graphs/highstock/intraday-with-breaks', thumbIntradayWithBreaks) }
            { renderGalleryItem('Intraday candlestick', '/graphs/highstock/intraday-candlestick', thumbIntradayCandlestick) }
            { renderGalleryItem('Flags marking events', '/graphs/highstock/flags-marking-events', thumbFlagsMarkingEvents) }
        </Row>

        <Divider className='m-t-2'>
            Chart types
        </Divider>

        <Row className='m-t-2'>
            { renderGalleryItem('Spline', '/graphs/highstock/spline', thumbSpline) }
            { renderGalleryItem('Step Line', '/graphs/highstock/step-line', thumbStepLine) }
            { renderGalleryItem('Area', '/graphs/highstock/area', thumbArea) }
            { /*renderGalleryItem('Area Spline', '/graphs/highstock/area-spline', thumbAreaSpline)*/ }
            { renderGalleryItem('Candlestick', '/graphs/highstock/candlestick', thumbCandlestick) }
            { renderGalleryItem('OHLC', '/graphs/highstock/ohlc', thumbOhlc) }
            { renderGalleryItem('Column', '/graphs/highstock/column', thumbColumn) }
            { renderGalleryItem('Point Markers Only', '/graphs/highstock/point-markers-only', thumbPointMarkersOnly) }
        </Row>
    </div>
);

class HighstockContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        const Chart = chartsMap[this.props.routeParams.chartId] || null;

        return (
            <Row className='m-t-3'>
                <Col lg={ 8 }>
                    {
                        (Chart ? <Chart /> : renderGallery(this.props.routeParams.chartId))
                    }
                </Col>
                <Col lg={ 4 }>
                    <TreeNavigator currentPath={ this.props.location.pathname }>
                        <TreeNavigator.Branch title='General' eventKey='general'>
                            <Link to='/graphs/highstock/general'>
                                General
                            </Link>
                            <Link to='/graphs/highstock/single-line-series'>
                                Single line series
                            </Link>
                            <Link to='/graphs/highstock/two-panes-candlestick-volume'>
                                Two panes, candlestick and volume
                            </Link>
                            <Link to='/graphs/highstock/compare-multiple-series'>
                                Compare Multiple Series
                            </Link>
                            <Link to='/graphs/highstock/points-with-data-grouping'>
                                52k points with data grouping
                            </Link>
                            <Link to='/graphs/highstock/intraday-area'>
                                Intraday area
                            </Link>
                            <Link to='/graphs/highstock/intraday-with-breaks'>
                                Intraday with breaks
                            </Link>
                            <Link to='/graphs/highstock/intraday-candlestick'>
                                Intraday candlestick
                            </Link>
                            <Link to='/graphs/highstock/flags-marking-events'>
                                Flags marking events
                            </Link>
                            { /*
                            <Link to='/graphs/highstock/dynamically-updated'>
                                Dynamically updated data
                            </Link>
                            */ }
                        </TreeNavigator.Branch>

                        <TreeNavigator.Branch title='Chart Types' eventKey='chart-types'>
                            <Link to='/graphs/highstock/spline'>
                                Spline
                            </Link>
                            <Link to='/graphs/highstock/step-line'>
                                Step Line
                            </Link>
                            <Link to='/graphs/highstock/area'>
                                Area
                            </Link>
                            { /*
                            <Link to='/graphs/highstock/area-spline'>
                                Area Spline
                            </Link>
                            <Link to='/graphs/highstock/area-range'>
                                Area Range
                            </Link>
                            <Link to='/graphs/highstock/area-spline-range'>
                                Area Spline Range
                            </Link>
                            */}
                            <Link to='/graphs/highstock/candlestick'>
                                Candlestick
                            </Link>
                            <Link to='/graphs/highstock/ohlc'>
                                OHLC
                            </Link>
                            <Link to='/graphs/highstock/column'>
                                Column
                            </Link>
                            { /*
                            <Link to='/graphs/highstock/column-range'>
                                Column Range
                            </Link>
                            */}
                            <Link to='/graphs/highstock/point-markers-only'>
                                Point Markers Only
                            </Link>
                        </TreeNavigator.Branch>
                    </TreeNavigator>
                </Col>
            </Row>
        );
    }
}

export default connect()(HighstockContainer);
