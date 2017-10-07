import React from 'react';
import uid from 'node-uuid';

import {
    Row,
    Col,
    Panel,
    Media,
    Table,
    Charts,
    CollapsablePanel,
    Label
} from 'components';

import { Colors } from 'consts';

import classes from './CpuBox.scss';

const CpuBox = () => (
    <Panel
        className={ classes.panel }
        header={
            <Media>
                <Media.Body>
                    <p className='text-uppercase' className='m-y-0'>
                        CPU
                    </p>
                    <p className='m-y-0'>
                        <span className={ classes.bigValue }>
                            71 <small>%</small>
                        </span>
                        <Label
                            outline
                            bsStyle='custom'
                            customColor={ Colors.brandWhite }
                            className='m-l-1'
                        >
                            <i className="fa fa-caret-up"></i>
                            { ' 87 %' }
                        </Label>
                    </p>
                </Media.Body>
                <Media.Right>
                    <Charts.SparklineDonut
                        radius={ 68 }
                        innerRadius={ 10 }
                        value={ 71 }
                        color={ Colors.brandWhite }
                    />
                </Media.Right>
            </Media>
        }
    >
        <div className={ classes.barChart }>
            <Charts.SparklineBar
                block
                width={ 158 }
                height={ 52 }
                color={ Colors.grayLight }
                data={ [60, 60, 75, 35, 60, 20, 70, 70, 60, 60, 75, 35, 60, 20, 70, 70] }
                fullWidth
            />
        </div>
    </Panel>
);

export default CpuBox;
