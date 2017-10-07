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
    CollapsablePanel,
    Charts
} from 'components';

import { Colors } from './../../../../../consts';

import classes from './Statistics2.scss';

const Statistics2 = (panelProps) => (
    <CollapsablePanel
        title='Statistics #2'
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
                <Media>
                    <Media.Left align='middle'>
                        <small>Likes</small>
                        <p className='m-y-0 h3 text-white'>
                            9082
                        </p>
                    </Media.Left>
                    <Media.Body className='text-center'>
                        <Charts.SparklineBar
                            width={ 100 }
                            height={ 45 }
                            data={ [5, 3, 9, 6, 5, 9, 7, 3, 5, 2] }
                        />
                        <p>
                            <small>
                                <i className='fa fa-fw fa-circle text-primary'/>
                                { ' Friends' }
                                <i className="m-l-1 fa fa-fw fa-circle text-gray-light"></i>
                                { ' Other' }
                            </small>
                        </p>
                    </Media.Body>
                    <Media.Right align='middle'>
                        <Charts.SparklineDonut
                            radius={ 44 }
                            innerRadius={ 10 }
                            value={ 60 }
                        />
                    </Media.Right>
                </Media>

                <Media>
                    <Media.Left align='middle'>
                        <small>Likes</small>
                        <p className='m-y-0 h3 text-white'>
                            5456
                        </p>
                    </Media.Left>
                    <Media.Body className='text-center'>
                        <Charts.SparklineBar
                            width={ 100 }
                            height={ 45 }
                            data={ [6, 5, 9, 7, 3, 5, 2, 5, 3, 9] }
                            color={ Colors.brandSuccess }
                        />
                        <p>
                            <small>
                                <i className='fa fa-fw fa-circle text-success'/>
                                { ' New' }
                                <i className="m-l-1 fa fa-fw fa-circle text-gray-light"></i>
                                { ' Other' }
                            </small>
                        </p>
                    </Media.Body>
                    <Media.Right align='middle'>
                        <Charts.SparklineDonut
                            radius={ 44 }
                            innerRadius={ 10 }
                            color={ Colors.brandSuccess }
                            value={ 40 }
                        />
                    </Media.Right>
                </Media>

                <Media>
                    <Media.Left align='middle'>
                        <small>Likes</small>
                        <p className='m-y-0 h3 text-white'>
                            9082
                        </p>
                    </Media.Left>
                    <Media.Body className='text-center'>
                        <Charts.SparklineBar
                            width={ 100 }
                            height={ 45 }
                            data={ [5, 3, 9, 6, 5, 9, 7, 3, 5, 2] }
                            color={ Colors.brandInfo }
                        />
                        <p>
                            <small>
                                <i className='fa fa-fw fa-circle text-info'/>
                                { ' Profile' }
                                <i className="m-l-1 fa fa-fw fa-circle text-gray-light"></i>
                                { ' Other' }
                            </small>
                        </p>
                    </Media.Body>
                    <Media.Right align='middle'>
                        <Charts.SparklineDonut
                            radius={ 44 }
                            innerRadius={ 10 }
                            value={ 75 }
                            color={ Colors.brandInfo }
                        />
                    </Media.Right>
                </Media>
            </ListGroupItem>
        </ListGroup>
    </CollapsablePanel>
);

export default Statistics2;
