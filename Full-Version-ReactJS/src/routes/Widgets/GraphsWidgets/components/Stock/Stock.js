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
    SlimProgressBar,
    CollapsablePanel,
    Charts
} from 'components';

import { Colors } from 'consts';

import classes from './Stock.scss';

const CHART_TOTAL_POINTS = 15;

class Stock extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            chartPoints: Array.from((function*() {
                for(let i = 0; i < CHART_TOTAL_POINTS; i++) {
                    yield Math.round(Math.random() * 100);
                }
            })())
        }
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
                title='Stock'
                footer={(
                    <p className='m-y-0 text-center'>
                        <a href='javascript:;' className='text-muted'>
                            See More <i className='fa fa-angle-right fa-fw'></i>
                        </a>
                    </p>
                )}
                fill
                onClose={ this.props.onClose }
            >
                <ListGroup className={ classes.list }>
                    <ListGroupItem>
                        <ButtonGroup justified bsSize='small'>
                            <Button href='javascript:;'>
                                Daily
                            </Button>
                            <Button href='javascript:;'>
                                Weekly
                            </Button>
                            <Button href='javascript:;'>
                                Monthly
                            </Button>
                            <Button href='javascript:;'>
                                Yearly
                            </Button>
                            <Button href='javascript:;'>
                                All
                            </Button>
                        </ButtonGroup>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Charts.SparklineLine
                            data={ this.state.chartPoints }
                            height={ 66 }
                            width={ 323 }
                            color='#fff'
                            chartStyle={{ fill: 'none' }}
                            limit={ CHART_TOTAL_POINTS }
                            fullWidth
                        />
                        <ReactInterval
                            timeout={ 1000 }
                            enabled={ true }
                            callback={ () => {
                                this.addPointToChart()
                            }}
                        />
                    </ListGroupItem>
                </ListGroup>
                <Table condensed fill className={ classes.table }>
                    <thead>
                        <tr>
                            <th>
                                <span className='m-l-1'>
                                    Stock
                                </span>
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                DOW J
                            </td>
                            <td>
                                17 552,89
                            </td>
                            <td className='text-success'>
                                <i className='fa fa-caret-up fa-fw'></i>
                                6.8%
                            </td>
                        </tr>
                        <tr>
                            <td>
                                APPL
                            </td>
                            <td>
                            	1 987
                            </td>
                            <td className='text-danger'>
                                <i className='fa fa-caret-down fa-fw'></i>
                                6.8%
                            </td>
                        </tr>
                        <tr>
                            <td>
                                CAC
                            </td>
                            <td>
                            	17 552,89
                            </td>
                            <td className='text-danger'>
                                <i className='fa fa-caret-down fa-fw'></i>
                                4.0%
                            </td>
                        </tr>
                        <tr>
                            <td>
                                DAX
                            </td>
                            <td>
                            	1 987
                            </td>
                            <td className='text-success'>
                                <i className='fa fa-caret-up fa-fw'></i>
                                72.6%
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CollapsablePanel>
        )
    }
}

export default Stock;
