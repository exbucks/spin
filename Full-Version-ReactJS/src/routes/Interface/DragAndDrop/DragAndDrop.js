import React from 'react';
import _ from 'underscore';
import uid from 'node-uuid';

import {
    Grid,
    Row,
    Col,
    FloatGrid,
    Panel,
    Button,
    Header
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './DragAndDrop.scss';

const deepClone = source => JSON.parse(JSON.stringify(source));

class DragAndDropContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            columns: [
                { key: uid.v4(), md: 4, xs: 12},
                { key: uid.v4(), md: 4, xs: 12 },
                { key: uid.v4(), md: 4, xs: 12 },

                { key: uid.v4(), lg: 6, sm: 6, xs: 12 },
                { key: uid.v4(), lg: 3, sm: 6, xs: 12 },
                { key: uid.v4(), lg: 3, sm: 6, xs: 12 },

                { key: uid.v4(), lg: 4, md: 6, sm: 12 },
                { key: uid.v4(), lg: 4, md: 6, sm: 12 },
                { key: uid.v4(), lg: 4 },

                { key: uid.v4(), lg: 2 },
                { key: uid.v4(), lg: 10 }
            ]
        }

        this.initialColumns = deepClone(this.state.columns);
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC,
            rawContent: true
        }
    }

    layoutChanged(layout) {
        this.setState({ columns: layout });
    }

    render() {
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
                            onClick={ () => this.setState({ columns: this.initialColumns }) }
                        >
                            Reset Layout
                        </Button>
                    </div>
                </Header>

                <Grid fluid={ this.props.contentView !== CONTENT_VIEW_STATIC }>
                    <div style={ { margin: '0 -15px' } }>
                        <FloatGrid >
                            <FloatGrid.Row
                                onLayoutChange={ (layout) => { this.layoutChanged(layout) } }
                                optimalColumns={ false }
                            >
                                {
                                    _.map(this.state.columns, (column, index) => {
                                        const colDefs = _.omit(column, 'key');
                                        const valuesToShow = _.pick(column, ['lg', 'md', 'sm', 'xs']);
                                        const labels = _.keys(valuesToShow).map((colKey, i) => (
                                            <span key={ i }>col-{colKey}-{colDefs[colKey]}</span>
                                        ));

                                        return (
                                            <FloatGrid.Col { ...colDefs } key={ column.key }>
                                                <Panel className={ classes.panel }>
                                                    <kbd className={ classes.labels }>
                                                        { labels }
                                                    </kbd>
                                                </Panel>
                                            </FloatGrid.Col>
                                        )
                                    })
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
}))(DragAndDropContainer);
