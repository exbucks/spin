import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {
    Col,
    Row,
    InputGroup
} from 'components';

import { products } from './../utils';

const data = Array.from(products(['id', 'name', 'price'], 5));

import classes from './../ReactTables.scss';

const createCustomSearchField = (props) => {
    return (
        <SearchField
            className='my-custom-class'
            defaultValue={ props.defaultSearch }
            placeholder={ props.searchPlaceholder }/>
    );
}

const createCustomToolbar = (props) => {
    const {
        searchField,
        clearBtn
    } = props.components;

    return (
        <div>
            <Col md={6}>
                <h4 className='m-t-0'>Clear Search</h4>
            </Col>
            <Col md={3} mdPush={3} className='text-right'>
                <div className={classes.search}>
                    <InputGroup bsSize='sm'>
                        { searchField }
                        <InputGroup.Button>
                            { clearBtn }
                        </InputGroup.Button>
                    </InputGroup>
                </div>
            </Col>
        </div>
    );
}

const options = {
    clearSearch: true,
    searchField: createCustomSearchField,
    toolBar: createCustomToolbar
};

const ClearSearch = () => (
    <BootstrapTable data={ data } options={ options } search>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
    </BootstrapTable>
);

export default ClearSearch;
