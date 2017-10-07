import React from 'react';
import uid from 'node-uuid';

import {
    Grid,
    Row,
    Col,
    Panel,
    Media,
    Table,
    Charts,
    Label,
    CollapsablePanel
} from 'components';

import { Colors } from './../../../../../consts';

import classes from './Path.scss';

const Path = (panelProps) => (
    <CollapsablePanel
        title='Path'
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
        <div className='p-y-2'>
            <Grid fluid>
                <Row>
                    <Col sm={ 12 } className='text-center'>
                        <Label outline>
                            /mnt/volume1
                        </Label>
                        <p className={ classes.bigValue }>
                            2.72 TiB
                        </p>
                        <p>
                            Volume Size
                        </p>
                        <div className='m-y-1'>
                            <Charts.SparklineDonut
                                radius={ 138 }
                                innerRadius={ 20 }
                                value={ 30 }
                            />
                        </div>
                    </Col>
                    <Col sm={ 6 } className='text-right'>
                        <small>
                            Used Space <i className="fa fa-fw fa-circle text-primary"></i>
                        </small>
                        <p className="m-b-0 text-white">0.81 TiB</p>
                        <p>31%</p>
                    </Col>
                    <Col sm={ 6 }>
                        <small>
                            <i className="fa fa-fw fa-circle text-gray-dark"></i> Free Space
                        </small>
                        <p className="m-b-0 text-white">1.91 TiB</p>
                        <p>24%</p>
                    </Col>
                </Row>
            </Grid>
        </div>

    </CollapsablePanel>
);

export default Path;
