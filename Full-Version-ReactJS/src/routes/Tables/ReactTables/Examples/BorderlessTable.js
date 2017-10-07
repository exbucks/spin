import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import { products } from './../utils';

const BorderlessTable = () => {
    const data = Array.from(products(['id', 'name', 'price'], 5));

    return (
        <BootstrapTable data={ data } bordered={ false }>
            <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
    );
}

export default BorderlessTable;
