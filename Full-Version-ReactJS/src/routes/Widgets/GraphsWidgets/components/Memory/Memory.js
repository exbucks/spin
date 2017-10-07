import React from 'react';
import uid from 'node-uuid';

import {
    Row,
    Col,
    Panel,
    Media,
    Charts,
    CollapsablePanel
} from 'components';

import { Colors } from 'consts';

import classes from './Memory.scss';

const Memory = (panelProps) => (
    <CollapsablePanel
        title='Memory'
        footer={(
            <p className='m-y-0 text-center'>
                <a href='javascript:;' className='text-muted'>
                    See More <i className='fa fa-angle-right fa-fw'></i>
                </a>
            </p>
        )}
        { ...panelProps }
    >
        <p className="m-b-2">
            GSkill 2 x 8 GB DDR3 <small>@1333 Mhz <i className="fa fa-fw fa-info-circle"></i></small>
        </p>

        <Media>
            <Media.Left>
                <div className={ classes.memoryChartWrap }>
                    <Charts.SparklineDonut
                        data={ [ 30, 24, 46 ] }
                        colors={ [
                            Colors.brandCerulean,
                            Colors.brandCuriousBlue,
                            Colors.brandEndaveour
                        ] }
                        radius={ 56 }
                        innerRadius='30%'
                    />
                </div>
            </Media.Left>
            <Media.Body>
                <p className={ classes.totalMemoryValue }>
                    16.0 <small className="text-white">GB</small>
                </p>
                Total Memory
            </Media.Body>
        </Media>

        <Row>
            <Col sm={ 4 } key={ uid.v4() }>
                <small>
                    <i
                        className="fa fa-fw fa-circle"
                        style={{ color: Colors.brandCerulean }}
                    ></i> Allocated</small>
                <p className={ classes.memoryValue }>5079 MB</p>
                <p>30%</p>
            </Col>
            <Col sm={ 4 } key={ uid.v4() }>
                <small>
                    <i
                        className="fa fa-fw fa-circle"
                        style={{ color: Colors.brandCuriousBlue }}
                    ></i> In Cache</small>
                <p className={ classes.memoryValue }>3789 MB</p>
                <p>24%</p>
            </Col>
            <Col sm={ 4 } key={ uid.v4() }>
                <small>
                    <i
                        className="fa fa-fw fa-circle"
                        style={{ color: Colors.brandEndaveour }}
                    ></i> Available</small>
                <p className={ classes.memoryValue }>3591 MB</p>
                <p>46%</p>
            </Col>
        </Row>
    </CollapsablePanel>
);

export default Memory;
