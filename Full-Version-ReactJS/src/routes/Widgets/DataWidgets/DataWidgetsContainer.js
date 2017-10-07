import React from 'react';
import _ from 'underscore';
import uid from 'node-uuid';
import ReactGridLayout, {
    WidthProvider,
    Responsive
} from 'react-grid-layout';

import {
    Row,
    Col,
    Table,
    CollapsablePanel,
    Button,
    Grid,
    Header,
    FloatGrid
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC, SCREEN_SIZE_XS, SCREEN_SIZE_SM } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';

/*
    Timeliens from Timeline examples
*/
import TimelineExample1 from 'routes/Pages/Timeline/components/TimelineExample_VerticalInnerDate';
import TimelineExample2 from 'routes/Pages/Timeline/components/TimelineExample_Horizontal';
import TimelineExample3 from 'routes/Pages/Timeline/components/TimelineExample_Vertical';

/*
    Page specific components
*/
import {
    SummaryBox,
    Notifications,
    Emails,
    Timeline,
    Tasks,
    Reminders,
    Comments,
    Projects,
    Users,
    Attachments,
    Comments2,
    Chat
} from './components';

import gridDefinition from './gridDefinition';

const responsiveGridProps = {
    breakpoints: {
        lg: 1200, md: 992, sm: 768, xs: 576
    }
}

import classes from './DataWidgets.scss';

const deepClone = o => JSON.parse(JSON.stringify(o));

class DataWidgetsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            closedPanels: [],
            summariesColumns: {},
            thinWidgetsColumns: {},
            largeWidgetsColumns: {},
            layouts: deepClone(gridDefinition)
        };

        this.initialState = _.clone(this.state);

        this.ResponsiveGridLayout = WidthProvider(Responsive);
    }
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC,
            rawContent: true
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

    componentWillUpdate(nextProps) {
        if(nextProps.contentView !== this.props.contentView) {
            requestAnimationFrame(() => {
                this.ResponsiveGridLayout = WidthProvider(Responsive);
            })
        }
    }

    changeLayout(layout) {
        const modifiedLayout = _.map(this.state.layouts, column => {
            const elementToReplace = _.findWhere(layout, { key: column.key });
            return elementToReplace || column;
        });

        this.setState({
            layouts: modifiedLayout
        });
    }

    resetLayout() {
        this.setState(this.initialState);
    }

    gridEnabled() {
        return (this.props.currentScreenSize !== SCREEN_SIZE_XS &&
            this.props.currentScreenSize !== SCREEN_SIZE_SM);
    }

    getColumnDef(key) {
        return _.findWhere(this.state.layouts, { key });
    }

    render() {
        const { ResponsiveGridLayout } = this;

        return (
            <div style={ { paddingTop: !this.props.headerEnabled ? '19px' : '0' } }>
                <Header
                    style={ this.props.headerStyle }
                    fluid={ this.props.contentView !== CONTENT_VIEW_STATIC }
                    currentUrl={ this.props.location.pathname }
                >
                    <div className={ classes.headerContent }>
                        <Button
                            bsStyle='primary'
                            bsSize='sm'
                            outline
                            onClick={ () => this.resetLayout() }
                        >
                            Reset Layout
                        </Button>
                    </div>
                </Header>

                <Grid fluid={ this.props.contentView !== CONTENT_VIEW_STATIC }>
                    {
                        !this.props.headerEnabled && (
                            <div className='text-right'>
                                <Button
                                    bsStyle='primary'
                                    onClick={ () => this.resetLayout() }
                                >
                                    Reset Layout
                                </Button>
                            </div>
                        )
                    }
                    <div  style={ { margin: '0 -15px' } }>
                        <FloatGrid active={ this.gridEnabled() } >
                            <FloatGrid.Row
                                onLayoutChange={ layout => this.changeLayout(layout) }
                                onColumnsOptimized={ columns => this.setState({ summariesColumns: columns }) }
                                columnsSizes={ this.state.summariesColumns }
                                rowHeight={ 150 }
                            >
                                <FloatGrid.Col {...this.getColumnDef('summary-capacity')}>
                                    <SummaryBox
                                        title='Capacity'
                                        value='1,288'
                                        unit='$'
                                        color='primary'
                                        icon={ <i className='fa fa-database'></i> }
                                        footer={
                                            <div>
                                                <i className='fa fa-history m-r-1'></i>
                                                <span>Updated Now</span>
                                            </div>
                                        }
                                    />
                                </FloatGrid.Col>
                                <FloatGrid.Col {...this.getColumnDef('summary-revenue')}>
                                    <SummaryBox
                                        title='Revenue'
                                        value='1,234'
                                        unit='$'
                                        color='success'
                                        icon={ <i className='fa fa-dollar'></i> }
                                        footer={
                                            <div>
                                                <i className='fa fa-calendar-o m-r-1'></i>
                                                <span>Last Day</span>
                                            </div>
                                        }
                                    />
                                </FloatGrid.Col>
                                <FloatGrid.Col {...this.getColumnDef('summary-errors')}>
                                    <SummaryBox
                                        title='Errors'
                                        value='34'
                                        color='warning'
                                        icon={ <i className='fa fa-exclamation'></i> }
                                        footer={
                                            <div>
                                                <i className='fa fa-clock-o m-r-1'></i>
                                                <span>In the last Hour</span>
                                            </div>
                                        }
                                    />
                                </FloatGrid.Col>
                                <FloatGrid.Col {...this.getColumnDef('summary-alerts')}>
                                    <SummaryBox
                                        title='Alerts'
                                        value='98'
                                        color='danger'
                                        icon={ <i className='fa fa-flash'></i> }
                                        footer={
                                            <div>
                                                <i className='fa fa-desktop m-r-1'></i>
                                                <span>From Beginning</span>
                                            </div>
                                        }
                                    />
                                </FloatGrid.Col>
                            </FloatGrid.Row>

                            <FloatGrid.Row
                                onLayoutChange={ layout => this.changeLayout(layout) }
                                onColumnsOptimized={ columns => this.setState({ thinWidgetsColumns: columns }) }
                                columnsSizes={ this.state.thinWidgetsColumns }
                                rowHeight={ 400 }
                            >
                                {
                                    this.isPanelOpen('notifications') && (
                                        <FloatGrid.Col {...this.getColumnDef('notifiactions')}>
                                            <Notifications onClose={ () => this.closePanel('notifications') }/>
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('emails') && (
                                        <FloatGrid.Col {...this.getColumnDef('emails')}>
                                            <Emails onClose={ () => this.closePanel('emails') } />
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('timeline_1') && (
                                        <FloatGrid.Col {...this.getColumnDef('timeline-1')}>
                                            <Timeline
                                                title='Timeline #1'
                                                onClose={ () => this.closePanel('timeline_1') }
                                            >
                                                <TimelineExample1 />
                                            </Timeline>
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('tasks') && (
                                        <FloatGrid.Col {...this.getColumnDef('tasks')}>
                                            <Tasks onClose={ () => this.closePanel('tasks') } />
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('coments') && (
                                        <FloatGrid.Col {...this.getColumnDef('comments')}>
                                            <Comments onClose={ () => this.closePanel('coments') } />
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('reminders') && (
                                        <FloatGrid.Col {...this.getColumnDef('reminders')}>
                                            <Reminders onClose={ () => this.closePanel('reminders') } />
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('projects') && (
                                        <FloatGrid.Col {...this.getColumnDef('projects')}>
                                            <Projects onClose={ () => this.closePanel('projects') } />
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('users') && (
                                        <FloatGrid.Col {...this.getColumnDef('users')}>
                                            <Users onClose={ () => this.closePanel('users') } />
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('chat') && (
                                        <FloatGrid.Col {...this.getColumnDef('chat')}>
                                            <Chat onClose={ () => this.closePanel('chat') } />
                                        </FloatGrid.Col>

                                    )
                                }
                            </FloatGrid.Row>

                            <FloatGrid.Row
                                onLayoutChange={ layout => this.changeLayout(layout) }
                                onColumnsOptimized={ columns => this.setState({ largeWidgetsColumns: columns }) }
                                columnsSizes={ this.state.largeWidgetsColumns }
                                rowHeight={ 400 }
                            >
                                {
                                    this.isPanelOpen('comments2') && (
                                        <FloatGrid.Col {...this.getColumnDef('comments-2')}>
                                            <Comments2 onClose={ () => this.closePanel('comments2') } />
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('attachments') && (
                                        <FloatGrid.Col {...this.getColumnDef('attachments')}>
                                            <Attachments onClose={ () => this.closePanel('attachments') } />
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('timeline_2') && (
                                        <FloatGrid.Col {...this.getColumnDef('timeline-2')}>
                                            <Timeline
                                                title='Timeline #2'
                                                onClose={ () => this.closePanel('timeline_2') }
                                            >
                                                <TimelineExample2 />
                                            </Timeline>
                                        </FloatGrid.Col>
                                    )
                                }
                                {
                                    this.isPanelOpen('timeline_3') && (
                                        <FloatGrid.Col {...this.getColumnDef('timeline-3')}>
                                            <Timeline
                                                title='Timeline #3'
                                                onClose={ () => this.closePanel('timeline_3') }
                                            >
                                                <TimelineExample3 />
                                            </Timeline>
                                        </FloatGrid.Col>
                                    )
                                }
                            </FloatGrid.Row>
                        </FloatGrid>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default connect(state => ({
    contentView: state.layout.contentView,
    headerEnabled: state.layout.headerEnabled,
    headerStyle: state.layout.headerStyle,
    currentScreenSize: state.layout.currentScreenSize
}))(DataWidgetsContainer);
