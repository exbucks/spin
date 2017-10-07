import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {
    Col,
    Row,
    InputGroup
} from 'components';

import { products } from './../utils';

import classes from './../ReactTables.scss';

const data = Array.from(products(['id', 'name', 'price', 'expand'], 5));

const createCustomToolbar = (props) => {
    const {
        searchField,
        clearBtn
    } = props.components;

    return (
        <div>
            <Col md={6}>
                <h4 className='m-t-0'>Click Row to Expand</h4>
            </Col>
            <Col md={3} mdPush={3} className='text-right'>
                <div className={classes.search}>
                    {
                        React.cloneElement(searchField, {
                            className: `${searchField.props.className} input-sm`
                        })
                    }
                </div>
            </Col>
        </div>
    );
}

class BSTable extends React.Component {
    render() {
        if (this.props.data) {
            return (
                <BootstrapTable data={ this.props.data }>
                    <TableHeaderColumn dataField='fieldA' isKey={ true }>Field A</TableHeaderColumn>
                    <TableHeaderColumn dataField='fieldB'>Field B</TableHeaderColumn>
                    <TableHeaderColumn dataField='fieldC'>Field C</TableHeaderColumn>
                    <TableHeaderColumn dataField='fieldD'>Field D</TableHeaderColumn>
                </BootstrapTable>
            );
        } else {
            return (<p>?</p>);
        }
    }
}

class ExpandRow extends React.Component {
    constructor(props) {
        super(props);
    }

    isExpandableRow(row) {
        if (row.id < 2) return true;
            else return false;
    }

    expandComponent(row) {
        return (
            <BSTable data={ row.expand } />
        );
    }

    render() {
        const options = {
            expandRowBgColor: 'rgb(242, 255, 163)',
            toolBar: createCustomToolbar
        };
        return (
            <BootstrapTable data={ data }
                options={ options }
                striped
                expandableRow={ this.isExpandableRow }
                expandComponent={ this.expandComponent }
                search
            >
                <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default ExpandRow;
