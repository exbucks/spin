import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'components/ReactTable';
import {
    ButtonGroup,
    Row,
    Col,
    Button
} from 'components';
import { products } from './../utils';

import classes from './../ReactTables.scss';

const selectRow = {
    mode: 'checkbox',
    bgColor: 'rgb(238, 193, 213)'
};

const cellEdit = {
    mode: 'click',
    blurToSave: true
};

const createCustomToolbar = (props) => {
    const {
        btnGroup
    } = props.components;

    return (
        <div>
            <Col md={6}>
                <h4 className='m-t-0'>Header Group</h4>
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

const options = {
    toolBar: createCustomToolbar,
    btnGroup: createCustomButtonGroup,
    insertBtn: (onClick) => (
        <Button onClick={() => {onClick()}}>
            Insert <i className='fa fa-fw fa-plus text-success'></i>
        </Button>
    ),
    deleteBtn: (onClick) => (
        <Button onClick={() => {onClick()}}>
            Delete
        </Button>
    ),
    exportCSVBtn: (onClick) => (
        <Button onClick={() => {onClick()}}>
            Export
        </Button>
    )
};

const HeaderGroup = () => {
    const data = Array.from(products(['id', 'name', 'price', 'coupon', 'status', 'customer', 'order'], 5));

    return (
        <BootstrapTable data={ data }
            selectRow={ selectRow }
            cellEdit={ cellEdit }
            insertRow deleteRow exportCSV
            options={options}
        >
            <TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey={ true } >ID</TableHeaderColumn>
            <TableHeaderColumn row='0' colSpan='3' dataSort csvHeader='Product' headerAlign='right'>Product</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='name' width='175' dataAlign='center'>name</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='price' dataSort>price</TableHeaderColumn>
            <TableHeaderColumn row='1' dataField='coupon' width='70'>Coupon</TableHeaderColumn>
            <TableHeaderColumn row='0' csvHeader='In stock' rowSpan='2' dataField='status'>In stock</TableHeaderColumn>
            <TableHeaderColumn row='0' colSpan='2' csvHeader='Customer' filter={ { type: 'TextFilter', delay: 1000 } }>Customer</TableHeaderColumn>
            <TableHeaderColumn row='1' csvHeader='name' dataField='customer'>name</TableHeaderColumn>
            <TableHeaderColumn row='1' csvHeader='order' dataField='order' dataSort>order</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default HeaderGroup;
