import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import { jobs } from './../utils';

const ActiveFormatter = (props) => (
    <input type="checkbox" defaultChecked={props.active} />
);

const ColumnFormat = () => {
    const data = Array.from(jobs(['id', 'name', 'active'], 5));

    return (
        <BootstrapTable data={ data }>
            <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Job Name</TableHeaderColumn>
            <TableHeaderColumn
                dataField='active'
                dataFormat={ (cell) => (<ActiveFormatter active={cell} />) }
            >
                Active
            </TableHeaderColumn>
        </BootstrapTable>
    )
}

export default ColumnFormat;
