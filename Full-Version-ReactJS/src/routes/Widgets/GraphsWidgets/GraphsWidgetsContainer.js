import React from 'react';
import _ from 'underscore';

import {
    Row,
    Col,
    Table,
    CollapsablePanel
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';

/*
    Page specific components
*/
import {
    TrafficByDays,
    Results,
    Results2,
    CustomerOverview,
    Memory,
    Storages,
    Infobox,
    Statistics,
    Stock,
    Monitor,
    Path,
    Statistics2,
    Statistics3,
    Network,
    SatisfactionResults,
    Stats,
    CpuBox,
    DonutWithLegend
} from './components';


class GraphsWidgetsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            closedPanels: []
        };
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    isPanelOpen(panelId) {
        return !_.contains(this.state.closedPanels, panelId);
    }

    closePanel(panelId) {
        this.setState({
            closedPanels: [...this.state.closedPanels, panelId]
        });
    }

    render() {
        return (
            <div>
                <p>
                    <span className='text-white'>Lorem ipsum dolor sit amet</span>, consectetur adipisicing elit. Officia ipsum dolor adipisci ad libero sunt nostrum harum nam odit doloremque eum expedita dolore dolores consectetur, maxime, obcaecati, repellat quibusdam. Sapiente, vitae. Aliquid velit voluptate perspiciatis omnis repudiandae obcaecati laborum nihil, culpa, voluptatibus. Excepturi, eaque perferendis.
                </p>
                <Row>
                    <Col lg={ 8 }>
                        {
                            this.isPanelOpen('traffic-by-days') && (
                                <TrafficByDays onClose={ () => this.closePanel('traffic-by-days') } />
                            )
                        }
                    </Col>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('results-1') && (
                                <Results onClose={ () => this.closePanel('results-1') } />
                            )
                        }
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('results-2') && (
                                <Results2 onClose={ () => this.closePanel('results-2') } />
                            )
                        }
                    </Col>
                    <Col lg={ 8 }>
                        {
                            this.isPanelOpen('customers-overview') && (
                                <CustomerOverview onClose={ () => this.closePanel('customers-overview') } />
                            )
                        }
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('monitor') && (
                                <Monitor onClose={ () => this.closePanel('monitor') } />
                            )
                        }
                        {
                            this.isPanelOpen('statistics') && (
                                <Statistics onClose={ () => this.closePanel('statistics') } />
                            )
                        }
                        {
                            this.isPanelOpen('path') && (
                                <Path onClose={ () => this.closePanel('path') } />
                            )
                        }
                    </Col>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('stock') && (
                                <Stock onClose={ () => this.closePanel('stock') } />
                            )
                        }
                        {
                            this.isPanelOpen('memory') && (
                                <Memory onClose={ () => this.closePanel('memory') } />
                            )
                        }
                        {
                            this.isPanelOpen('statistics2') && (
                                <Statistics2 onClose={ () => this.closePanel('statistics2') } />
                            )
                        }
                        {
                            this.isPanelOpen('statistics3') && (
                                <Statistics3 onClose={ () => this.closePanel('statistics3') } />
                            )
                        }
                        {
                            this.isPanelOpen('donut-with-legend') && (
                                <DonutWithLegend onClose={ () => this.closePanel('donut-with-legend') } />
                            )
                        }
                    </Col>
                    <Col lg={ 4 }>
                        {
                            this.isPanelOpen('storages') && (
                                <Storages onClose={ () => this.closePanel('storages') } />
                            )
                        }
                        {
                            this.isPanelOpen('network') && (
                                <Network onClose={ () => this.closePanel('network') } />
                            )
                        }
                        {
                            this.isPanelOpen('infobox') && (
                                <Infobox onClose={ () => this.closePanel('infobox') } />
                            )
                        }
                        {
                            this.isPanelOpen('satisfaction-results') && (
                                <SatisfactionResults onClose={ () => this.closePanel('satisfaction-results') } />
                            )
                        }
                        {
                            this.isPanelOpen('stats') && (
                                <Stats onClose={ () => this.closePanel('stats') } />
                            )
                        }
                        <CpuBox />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(GraphsWidgetsContainer);
