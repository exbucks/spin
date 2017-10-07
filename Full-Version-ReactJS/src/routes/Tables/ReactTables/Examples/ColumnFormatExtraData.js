import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import { products } from './../utils';

const qualityNames = {
    0: 'good',
    1: 'bad',
    2: 'unknown'
};

const stockStatusNames = {
    0: 'no',
    1: 'yes'
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

const ColumnFormatExtraData = () => {
    const data = Array.from(products(['id', 'name', 'quality_id', 'stockStatus_id'], 5));

    return (
        <BootstrapTable data={ data }>
            <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='quality_id' dataFormat={ enumFormatter } formatExtraData={ qualityNames }>Product Quality</TableHeaderColumn>
            <TableHeaderColumn dataField='stockStatus_id' dataFormat={ enumFormatter } formatExtraData={ stockStatusNames }>Product Stock Status</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default ColumnFormatExtraData;
