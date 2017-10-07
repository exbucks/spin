import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const EmptyData = () => {
    const data = [];

    const options = {
      noDataText: 'This is custom text for empty data'
    };

    return (
      <BootstrapTable data={ data } options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    )
}

export default EmptyData;
