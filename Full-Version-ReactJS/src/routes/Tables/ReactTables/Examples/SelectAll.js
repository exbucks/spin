import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {
    Col,
    Row,
    DropdownButton,
    MenuItem
} from 'components';

import { products } from './../utils';

import classes from './../ReactTables.scss';

const PAGE_SIZES = [5, 10, 25, 50];

const data = Array.from(products(['id', 'name', 'price'], 50));

class SelectAll extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageSize: 10
        }
    }

    createCustomToolbar(props) {
        return (
            <Col lg={12}>
                <div className={classes.simpleHeader}>
                    <h4>Select All</h4>

                    <div className={classes.pageSizes}>
                        <DropdownButton
                            pullRight
                            bsSize='sm'
                            title={this.state.pageSize}
                            id='dropdown-page-size'
                            onSelect={(eKey) => {
                                this.setState({
                                    pageSize: PAGE_SIZES[eKey]
                                })
                            }}
                        >
                            {
                                PAGE_SIZES.map((pageSize, index) => (
                                    <MenuItem eventKey={index}>{pageSize}</MenuItem>
                                ))
                            }
                        </DropdownButton>
                    </div>
                </div>
            </Col>
        );
    }

    createPaginationPanel(props) {
        const {
            totalText,
            pageList
        } = props.components;

        return (
            <div>
                <Col md={12}>
                    {
                        React.cloneElement(pageList, {
                            className: `${pageList.props.className} m-y-0 pagination-sm pull-right`
                        })
                    }
                </Col>
            </div>
        )
    }

    onSelectAll = (isSelected) => (isSelected ? data.map(row => row.id) : [])

    render() {
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelectAll: this.onSelectAll
        };

        const options = {
            toolBar: this.createCustomToolbar.bind(this),
            paginationPanel: this.createPaginationPanel,
            sizePerPage: this.state.pageSize,
            paginationShowsTotal: true
        }

        return (
            <BootstrapTable ref='table' data={ data } selectRow={ selectRowProp } pagination options={options}>
                <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default SelectAll;
