import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {
    Col,
    Row,
    DropdownButton,
    MenuItem
} from 'components';

import { products } from './../utils';

const data = Array.from(products(['id', 'name', 'price'], 100));

const PAGE_SIZES = [5, 10, 25, 50];

import classes from './../ReactTables.scss';

class CustomPagination extends React.Component {
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
                    <h4>Custom Pagination</h4>

                    <div className={classes.pageSizes}>
                        <DropdownButton
                            bsSize='sm'
                            title={this.state.pageSize}
                            id='dropdown-page-size'
                            onSelect={(eKey) => {
                                this.setState({
                                    pageSize: PAGE_SIZES[eKey]
                                })
                            }}
                            pullRight
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
                <Col md={3}>
                    { totalText }
                </Col>
                <Col md={9}>
                    {
                        React.cloneElement(pageList, {
                            className: `${pageList.props.className} m-y-0 pagination-sm pull-right`
                        })
                    }
                </Col>
            </div>
        )
    }

    render() {
        const options = {
            toolBar: this.createCustomToolbar.bind(this),
            paginationPanel: this.createPaginationPanel,
            page: 2,  // which page you want to show as default
            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: data.length
            } ], // you can change the dropdown list for size per page
            sizePerPage: this.state.pageSize,
            pageStartIndex: 0, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            prePageTitle: 'Go to previous', // Previous page button title
            nextPageTitle: 'Go to next', // Next page button title
            firstPageTitle: 'Go to first', // First page button title
            lastPageTitle: 'Go to Last', // Last page button title
            paginationShowsTotal: true
        };

        return (
            <BootstrapTable data={ data } pagination={ true } options={ options }>
                <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default CustomPagination;
