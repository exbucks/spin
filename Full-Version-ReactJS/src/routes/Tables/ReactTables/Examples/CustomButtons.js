import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {
    ButtonGroup,
    Row,
    Col,
    Button
} from 'components';
import { products } from './../utils';

const data = Array.from(products(['id', 'name', 'price'], 5));

import classes from './../ReactTables.scss';

const createCustomToolbar = (props) => {
    const {
        btnGroup
    } = props.components;

    return (
        <div>
            <Col md={6}>
                <h4 className='m-t-0'>Custom Buttons</h4>
            </Col>
            <Col md={6} className='text-right'>
                <div className={classes.actions}>
                    { btnGroup }
                </div>
            </Col>
        </div>
    );
}

const createCustomButtonGroup = props => (
    <ButtonGroup bsSize='sm'>
        { props.showSelectedOnlyBtn }
        { props.exportCSVBtn }
        { props.deleteBtn }
        { props.insertBtn }
    </ButtonGroup>
);

const selectRow = {
    mode: 'checkbox'
};

const options = {
    toolBar: createCustomToolbar,
    btnGroup: createCustomButtonGroup,
    insertBtn: (onClick) => (
        <Button onClick={() => {onClick()}}>
            My Insert Row <i className='fa fa-fw fa-plus text-success'></i>
        </Button>
    ),
    deleteBtn: (onClick) => (
        <Button onClick={() => {onClick()}}>
            My Delete
        </Button>
    ),
    exportCSVBtn: (onClick) => (
        <Button onClick={() => {onClick()}}>
            My Export
        </Button>
    )
};

const CustomButtons = () => (
    <BootstrapTable data={ data } options={ options } selectRow={ selectRow } insertRow deleteRow exportCSV>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
    </BootstrapTable>
);

export default CustomButtons;
