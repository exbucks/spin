import React from 'react';
import { Link } from 'react-router';

import {
    Row,
    Col,
    Divider
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import * as Charts from './charts';

import classes from './Chartist.scss';

class ChartistContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div>
                <p>
                    You may think that this is just yet an other charting library. But Chartist.js is the product of a community that was disappointed about the abilities provided by other charting libraries. Of course there are hundreds of other great charting libraries but after using them there were always tweaks you would have wished for that were not included.
                </p>
                <Row className='m-t-2'>
                    <Col lg={ 6 }>
                        <div>
                            <h5>Simple Line Chart</h5>
                            <p>
                                An example of a simple line chart with three series. You can edit this example in realtime.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.SimpleLine />
                        </div>

                        <div>
                            <h5>Line Chart with Area</h5>
                            <p>
                                This chart uses the showArea option to draw line, dots but also an area shape. Use the low option to specify a fixed lower bound that will make the area expand. You can also use the areaBase property to specify a data value that will be used to determine the area shape base position (this is 0 by default).
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.LineWithArea />
                        </div>

                        <div>
                            <h5>Bi Polar Bar Chart</h5>
                            <p>
                                A bi-polar bar chart with a range limit set with low and high. There is also an interpolation function used to skip every odd grid line / label.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.BiPolarBar />
                        </div>

                        <div>
                            <h5>Multi Line Labels</h5>
                            <p>
                                Chartist will figure out if your browser supports foreignObject and it will use them to create labels that are based on regular HTML text elements. Multi-line and regular CSS styles are just two of many benefits while using foreignObjects!
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.MultiLineLabels />
                        </div>

                        <div>
                            <h5>Horizontal Bar Chart</h5>
                            <p>
                                Guess what! Creating horizontal bar charts is as simple as it can get. There's no new chart type you need to learn, just passing an additional option is enough.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.HorizontalBarChart />
                        </div>

                        <div>
                            <h5>Simple Pie Chart</h5>
                            <p>
                                A very simple pie chart with label interpolation to show percentage instead of the actual data series value.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.SimplePieChart />
                        </div>

                        <div>
                            <h5>Gauge Chart</h5>
                            <p>
                                This pie chart uses donut, startAngle and total to draw a gauge chart.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.GaugeChart />
                        </div>

                    </Col>
                    <Col lg={ 6 }>
                        <div>
                            <h5>Line scatter diagram with responsive settings</h5>
                            <p>
                                This advanced example uses a line chart to draw a scatter diagram. The data object is created with a functional style random mechanism. There is a mobile first responsive configuration using the responsive options to show less labels on small screens.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.ScatterWithResponsive />
                        </div>

                        <div>
                            <h5>Bi Polar Line Chart with Area Only</h5>
                            <p>
                                You can also only draw the area shapes of the line chart. Area shapes will always be constructed around their areaBase (that can be configured in the options) which also allows you to draw nice bi-polar areas.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.BiPolarLineWithArea />
                        </div>

                        <div>
                            <h5>Overlapping bars on mobile</h5>
                            <p>
                                This example makes use of label interpolation and the seriesBarDistance property that allows you to make bars overlap over each other. This then can be used to use the available space on mobile better. Resize your browser to see the effect of the responsive configuration.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.OverlappingBars />
                        </div>

                        <div>
                            <h5>Stacked Bar Chart</h5>
                            <p>
                                You can also set your bar chart to stack the series bars on top of each other easily by using the <kbd>stackBars</kbd> property in your configuration.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.StackedBarChart />
                        </div>

                        <div>
                            <h5>Distributed Series</h5>
                            <p>
                                Sometime it's desired to have bar charts that show one bar per series distributed along the x-axis. If this option is enabled, you need to make sure that you pass a single series array to Chartist that contains the series values. In this example you can see T-shirt sales of a store categorized by size.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.DistributedSeries />
                        </div>

                        <div>
                            <h5>Pie Chart with Custom Labels</h5>
                            <p>
                                A very simple pie chart with label interpolation to show percentage instead of the actual data series value.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.PieChartCustomLabels />
                        </div>

                        <div>
                            <h5>Animating Donut</h5>
                            <p>
                                Although it'd be also possible to achieve this animation with CSS, with some minor suboptimal things, here's an example of how to animate donut charts using Chartist.Svg.animate and SMIL.
                            </p>
                            <p className={ classes.exampleLabel }>
                                Example
                            </p>
                            <Charts.AnimatingDonut />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(ChartistContainer);
