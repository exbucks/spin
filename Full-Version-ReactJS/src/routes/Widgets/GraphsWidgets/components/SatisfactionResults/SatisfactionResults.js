import React from 'react';
import ReactInterval from 'react-interval';
import _ from 'underscore';
import uid from 'node-uuid';

import {
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    ButtonGroup,
    Button,
    Table,
    CollapsablePanel,
    Charts
} from 'components';

import { Colors } from 'consts';

import classes from './SatisfactionResults.scss';

const CHART_TOTAL_POINTS = 22;

class SatisfactionResults extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            chartPoints: Array.from((function*() {
                for(let i = 0; i < CHART_TOTAL_POINTS; i++) {
                    yield Math.round(Math.random() * 100);
                }
            })())
        };
    }

    static propTypes = {
        onClose: React.PropTypes.func
    }

    addPointToChart() {
        this.setState({
            chartPoints: [...(_.last(this.state.chartPoints, CHART_TOTAL_POINTS - 1)), Math.round(Math.random() * 100)]
        });
    }

    render() {
        return (
            <CollapsablePanel
                title='Satisfaction Results'
                footer={(
                    <p className='m-y-0 text-center'>
                        <small>
                            <a href='javscript:;'>Last Year</a> statistics
                        </small>
                    </p>
                )}
                fill
                className={ classes.grayPanel }
                onClose={ this.props.onClose }
            >
                <div className='p-y-1'>
                    <p className={ classes.bigValue }>
                        45 %
                        { ' ' }
                        <small>
                            <i className='fa fa-fw fa-caret-down text-danger'></i>
                            { ' 16.7%' }
                        </small>
                    </p>
                    <p className='m-b-2 text-center small'>
                        62776 Customers
                    </p>
                    <div className='text-center'>
                        <Charts.SparklineLine
                            width={ 330 }
                            height={ 33 }
                            data={ this.state.chartPoints }
                            limit={ CHART_TOTAL_POINTS }
                            fullWidth
                        />
                    </div>
                    <ReactInterval
                        timeout={ 1000 }
                        enabled={ true }
                        callback={ () => {
                            this.addPointToChart()
                        }}
                    />
                </div>
            </CollapsablePanel>
        )
    }
}

export default SatisfactionResults;
