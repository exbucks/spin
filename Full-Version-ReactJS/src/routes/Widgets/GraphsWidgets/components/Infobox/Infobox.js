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

import classes from './Infobox.scss';

const Infobox = (panelProps) => (
    <CollapsablePanel
        title='Infobox'
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
            <ListGroupItem className='text-uppercase small text-center'>
                <strong>Payments</strong>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col xs={ 6 } className='text-center'>
                        <p className='text-center m-y-0 small'>
                            <i className='fa fa-circle text-primary'></i>
                            { ' Today' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            $3,267.00
                        </p>
                    </Col>
                    <Col xs={ 6 } className='text-center'>
                        <p className='text-center m-y-0 small'>
                            <i className='fa fa-circle text-endaveour'></i>
                            { ' This Month' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            $0.00
                        </p>
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem className='text-uppercase small text-center'>
                <strong>Invoices</strong>
            </ListGroupItem>
            <ListGroupItem>
                <Row>
                    <Col xs={ 6 } className='text-center'>
                        <p className='text-center m-y-0 small'>
                            <i className='fa fa-circle text-success'></i>
                            { ' Due' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            $7,762.01
                        </p>
                    </Col>
                    <Col xs={ 6 } className='text-center'>
                        <p className='text-center m-y-0 small'>
                            <i className='fa fa-circle text-caper'></i>
                            { ' Overdue' }
                        </p>
                        <p className='text-white h3 m-y-0'>
                            $2,342.00
                        </p>
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    </CollapsablePanel>
);

export default Infobox;
