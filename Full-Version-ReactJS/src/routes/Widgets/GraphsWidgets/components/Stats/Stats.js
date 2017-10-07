import React from 'react';
import uid from 'node-uuid';

import {
    Row,
    Col,
    Panel,
    Media,
    ListGroup,
    ListGroupItem,
    ProgressBar,
    Charts,
    CollapsablePanel
} from 'components';

import { Colors } from 'consts';

import classes from './Stats.scss';

const generateRandomData = function*(count) {
    for(let i = 0; i < count; i++) {
        yield Math.round((Math.random() * 10))
    }
};

const statChartsData = Array.from((function*() {
    for(let i = 0; i < 5; i++) {
        yield Array.from(generateRandomData(10));
    }
})());

const Stats = (panelProps) => (
    <CollapsablePanel
        title='Stats List'
        footer={(
            <p className='m-y-0 text-center'>
                <a href='javascript:;' className='text-muted'>
                    See More <i className='fa fa-angle-right fa-fw'></i>
                </a>
            </p>
        )}
        fill
        { ...panelProps }
    >
        <ListGroup className={ classes.list }>
            <ListGroupItem>
                <Row>
                    <Col sm={ 8 }>
                        <span className='text-white'>
                            345
                        </span>
                        { ' Visits' }
                    </Col>
                    <Col sm={ 4 } className='text-right'>
                        <Charts.SparklineLine
                            width={ 75 }
                            height={ 16 }
                            color='#fff'
                            chartStyle={{ fill: 'none' }}
                            data={ statChartsData[0] }
                            limit={ 10 }
                        />
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col sm={ 8 }>
                        <span className='text-white'>
                            98
                        </span>
                        { ' Unique Visitors' }
                    </Col>
                    <Col sm={ 4 } className='text-right'>
                        <Charts.SparklineLine
                            width={ 75 }
                            height={ 16 }
                            color='#fff'
                            chartStyle={{ fill: 'none' }}
                            data={ statChartsData[1] }
                            limit={ 10 }
                        />
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col sm={ 8 }>
                        <span className='text-white'>
                            567
                        </span>
                        { ' Page Views' }
                    </Col>
                    <Col sm={ 4 } className='text-right'>
                        <Charts.SparklineLine
                            width={ 75 }
                            height={ 16 }
                            color='#fff'
                            chartStyle={{ fill: 'none' }}
                            data={ statChartsData[2] }
                            limit={ 10 }
                        />
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col sm={ 8 }>
                        <span className='text-white'>
                            1.77
                        </span>
                        { ' Page / Visits' }
                    </Col>
                    <Col sm={ 4 } className='text-right'>
                        <Charts.SparklineLine
                            width={ 75 }
                            height={ 16 }
                            color='#fff'
                            chartStyle={{ fill: 'none' }}
                            data={ statChartsData[3] }
                            limit={ 10 }
                        />
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col sm={ 8 }>
                        <span className='text-white'>
                            00:01:21
                        </span>
                        { ' Avg Visit Duration' }
                    </Col>
                    <Col sm={ 4 } className='text-right'>
                        <Charts.SparklineLine
                            width={ 75 }
                            height={ 16 }
                            color='#fff'
                            chartStyle={{ fill: 'none' }}
                            data={ statChartsData[4] }
                            limit={ 10 }
                        />
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    </CollapsablePanel>
);

export default Stats;
