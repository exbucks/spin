import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import { products } from './../utils';

const LargeTable = () => {
    const data = Array.from(products(['id', 'name', 'price'], 5));

    return (
        <BootstrapTable data={ data }>
            <TableHeaderColumn width='150' dataField='id' isKey={ true }>ProductID</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default LargeTable;
