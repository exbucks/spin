import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {
    Col,
    Row,
    Button
} from 'components';

import { products } from './../utils';

const data = Array.from(products(['id', 'name', 'price'], 5));

const selectRowProp = {
    mode: 'checkbox'
};

import classes from './../ReactTables.scss';

const createCustomToolbar = (props) => {
    const {
        btnGroup
    } = props.components;

    return (
        <div>
            <Col md={6}>
                <h4 className='m-t-0'>Delete Row</h4>
            </Col>
            <Col md={6} className='text-right'>
                <div className={classes.actions}>
                    { btnGroup }
                </div>
            </Col>
        </div>
    );
}

const options = {
    toolBar: createCustomToolbar,
    deleteBtn: (onClick) => (
        <Button onClick={() => {onClick()}}>
            Delete <i className='fa fa-fw fa-trash-o'></i>
        </Button>
    )
};

const DeleteRow = () => (
    <BootstrapTable data={ data } deleteRow={ true } selectRow={ selectRowProp } options={options}>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
    </BootstrapTable>
);

export default DeleteRow;
