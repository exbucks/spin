import React from 'react';
import moment from 'moment';
import {BootstrapTable, TableHeaderColumn} from 'components/ReactTable';

import { products } from './../utils';

const data = Array.from(products(['id', 'name', 'quality_id', 'price', 'satisfaction', 'inStockDate'], 5));

const qualityNames = {
    0: 'good',
    1: 'bad',
    2: 'unknown'
};

const satisfaction = [1, 2, 3, 4, 5, 6];

const enumFormatter = (cell, row, enumObject) => enumObject[cell];
const dateFormatter = (cell) => moment(cell).format('DD/MM/YYYY');

class AllFilters extends React.Component {
    handlerClickCleanFiltered() {
        this.refs.name1.cleanFiltered();
        this.refs.name2.cleanFiltered();
        this.refs.quality.cleanFiltered();
        this.refs.price.cleanFiltered();
        this.refs.satisfaction.cleanFiltered();
        this.refs.inStockDate.cleanFiltered();
    }

    render() {
        return (
            <BootstrapTable ref='table' data={ data } bsFiltersSize='sm'>
                <TableHeaderColumn dataField='id' isKey={ true }>
                    Product ID
                    <br/><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>clear filters</a>
                </TableHeaderColumn>
                <TableHeaderColumn ref='name1' dataField='name' filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } }>Product Name</TableHeaderColumn>
                <TableHeaderColumn ref='name2' dataField='name' filter={ { type: 'RegexFilter', placeholder: 'Please enter a regex' } }>Product Name</TableHeaderColumn>
                <TableHeaderColumn ref='quality' dataField='quality_id' filter={ { type: 'SelectFilter', options: qualityNames } } dataFormat={ enumFormatter } formatExtraData={ qualityNames }>Product Quality</TableHeaderColumn>
                <TableHeaderColumn ref='price' dataField='price' filter={ { type: 'NumberFilter', delay: 1000 } }>Product Price</TableHeaderColumn>
                <TableHeaderColumn ref='satisfaction' dataField='satisfaction' filter={ { type: 'NumberFilter', options: satisfaction } }>Buyer Satisfaction</TableHeaderColumn>
                <TableHeaderColumn ref='inStockDate' dataField='inStockDate' filter={ { type: 'DateFilter' } } dataFormat={ dateFormatter }>In Stock From</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default AllFilters;
