import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'components/ReactTable';

import { products } from './../utils';

const SortTable = () => {
    const data = Array.from(products(['id', 'name', 'price'], 5));

    return (
        <BootstrapTable data={ data }>
            <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default SortTable;
