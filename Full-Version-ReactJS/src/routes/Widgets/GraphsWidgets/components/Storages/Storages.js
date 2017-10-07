import React from 'react';
import uid from 'node-uuid';

import {
    Row,
    Col,
    Panel,
    Media,
    ListGroup,
    ListGroupItem,
    SlimProgressBar,
    CollapsablePanel
} from 'components';

import { Colors } from 'consts';

import classes from './Storages.scss';

const Storages = (panelProps) => (
    <CollapsablePanel
        title='Storages'
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
                <p className='m-y-0 small'>
                    <i className='fa fa-hdd-o m-r-1'></i>
                    <strong className='text-uppercase'>
                        Macintosh
                    </strong>
                </p>
                <SlimProgressBar now={ 60 } className='m-y-1'/>
                <p className='m-y-0 small text-uppercase'>
                    <span className='text-white'>
                        412.00 GB
                    </span>
                    { ' / 700.00 GB' }
                </p>
            </ListGroupItem>
            <ListGroupItem>
                <p className='m-y-0 small'>
                    <i className='fa fa-hdd-o m-r-1'></i>
                    <strong className='text-uppercase'>
                        Windows
                    </strong>
                </p>
                <SlimProgressBar now={ 80 } className='m-y-1' bsStyle='danger'/>
                <p className='m-y-0 small text-uppercase'>
                    <span className='text-white'>
                        756.00 GB
                    </span>
                    { ' / 900.00 GB' }
                </p>
            </ListGroupItem>
            <ListGroupItem>
                <p className='m-y-0 small'>
                    <i className='fa fa-hdd-o m-r-1'></i>
                    <strong className='text-uppercase'>
                        Linux
                    </strong>
                </p>
                <SlimProgressBar now={ 20 } className='m-y-1' bsStyle='info'/>
                <p className='m-y-0 small text-uppercase'>
                    <span className='text-white'>
                        127.00 GB
                    </span>
                    { ' / 786.00 GB' }
                </p>
            </ListGroupItem>
        </ListGroup>
    </CollapsablePanel>
);

export default Storages;
