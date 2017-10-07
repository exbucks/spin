import React, {PropTypes} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'components/ReactTable';
import moment from 'moment';
import {
    Row,
    Grid,
    Col,
    ButtonGroup,
    ButtonToolbar,
    Button,
    InputGroup,
    FormControl,
    DropdownButton,
    MenuItem,
    StarRating,
    Label
} from 'components';
import { products } from './../utils';
import classes from './../ReactTables.scss';

import { Colors } from 'consts';

const data = Array.from(products(['id', 'name', 'price', 'quality_id', 'satisfaction', 'inStockDate'], 500));

const qualityNames = {
    0: 'Bad',
    1: 'Good',
    2: 'Unknown'
};

const satisfaction = [1, 2, 3, 4, 5, 6];

const enumFormatter = (cell, row, enumObject) => enumObject[cell];
const dateFormatter = (cell) => moment(cell).format('DD/MM/YYYY');
const satisfactionFormatter = (cell) => (
    <StarRating max={6} at={cell} />
);
const qualityFormatter = (cell, row, enumObject) => {
    const qualityToProps = {
        0: { bsStyle: 'danger' },
        1: { bsStyle: 'success' },
        2: { bsStyle: 'custom', customColor: Colors.grayLighter }

    };

    return (
        <Label {...qualityToProps[cell]}>
            { enumObject[cell] }
        </Label>
    );
}

class AdvancedTableA extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        pageSizes: PropTypes.array
    }

    static defaultProps = {
        name: '',
        pageSizes: [5, 10, 25, 50]
    }

    constructor(props) {
        super(props);

        this.state = {
            pageSize: 10
        }
    }

    createCustomToolbar(props) {
        const { name: tableName, pageSizes } = this.props;
        const {
            btnGroup,
            searchField,
            clearBtn
        } = props.components;

        return (
            <div>
                <Col md={6}>
                    {
                        tableName && (<h4 className='m-t-0'>{tableName}</h4>)
                    }
                </Col>
                <Col md={6} className='text-right'>
                    <div className={classes.customToolBar}>
                        <div className={classes.search}>
                            <InputGroup bsSize='sm'>
                                { searchField }
                                <InputGroup.Button>
                                    { clearBtn }
                                </InputGroup.Button>
                            </InputGroup>
                        </div>

                        <div className={classes.pageSizes}>
                            <DropdownButton
                                bsSize='sm'
                                title={this.state.pageSize}
                                id='dropdown-page-size'
                                onSelect={(eKey) => {
                                    this.setState({
                                        pageSize: pageSizes[eKey]
                                    })
                                }}
                            >
                                {
                                    pageSizes.map((pageSize, index) => (
                                        <MenuItem eventKey={index}>{pageSize}</MenuItem>
                                    ))
                                }
                            </DropdownButton>
                        </div>

                        <div className={classes.actions}>
                            { btnGroup }
                        </div>
                    </div>
                </Col>
            </div>
        );
    }

    createCustomButtonGroup(props) {
        return (
            <ButtonGroup bsSize='sm'>
                { props.exportCSVBtn }
                { props.deleteBtn }
                { props.insertBtn }
            </ButtonGroup>
        )
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

    handlerClickCleanFiltered() {
        this.refs.name.cleanFiltered();
        this.refs.quality.cleanFiltered();
        this.refs.price.cleanFiltered();
        this.refs.satisfaction.cleanFiltered();
        this.refs.inStockDate.cleanFiltered();
    }

    render() {
        const options = {
            toolBar: this.createCustomToolbar.bind(this),
            btnGroup: this.createCustomButtonGroup,
            paginationPanel: this.createPaginationPanel,
            insertBtn: (onClick) => (
                <Button onClick={() => {onClick()}}>
                    Add <i className='fa fa-fw fa-plus text-success'></i>
                </Button>
            ),
            deleteBtn: (onClick) => (
                <Button onClick={() => {onClick()}}>
                    Delete
                </Button>
            ),
            exportCSVBtn: (onClick) => (
                <Button onClick={() => {onClick()}}>
                    Export
                </Button>
            ),
            clearSearch: true,
            clearSearchBtn: (onClick) => (
                <Button onClick={() => {onClick()}}>
                    <i className='fa fa-search fa-fw'></i>
                </Button>
            ),
            sizePerPage: this.state.pageSize,
            paginationShowsTotal: true
        };

        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelectAll: this.onSelectAll
        };

        return (
            <BootstrapTable
                data={ data }
                options={options}
                insertRow
                deleteRow
                exportCSV
                search
                pagination
                selectRow={ selectRowProp }
                asPanel
                bsFiltersSize='sm'
            >
                <TableHeaderColumn
                    dataField='id'
                    isKey={ true }
                    dataFormat={cell => <strong>{cell}</strong>}
                >
                    Product ID
                    <br/>
                    <a
                        onClick={ this.handlerClickCleanFiltered.bind(this) }
                        style={ { cursor: 'pointer' } }
                    >
                        <i className='fa fa-fw fa-times text-danger'></i> Reset
                    </a>
                </TableHeaderColumn>
                <TableHeaderColumn ref='name' dataField='name' filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } } dataSort>Product Name</TableHeaderColumn>
                <TableHeaderColumn ref='quality' dataField='quality_id' filter={ { type: 'SelectFilter', options: qualityNames } } dataFormat={ qualityFormatter } formatExtraData={ qualityNames } dataSort>Product Quality</TableHeaderColumn>
                <TableHeaderColumn ref='price' dataField='price' filter={ { type: 'NumberFilter', delay: 1000 } } dataSort>Product Price</TableHeaderColumn>
                <TableHeaderColumn ref='satisfaction' dataField='satisfaction' filter={ { type: 'NumberFilter', options: satisfaction } } dataFormat={ satisfactionFormatter } dataSort>Buyer Satisfaction</TableHeaderColumn>
                <TableHeaderColumn ref='inStockDate' dataField='inStockDate' filter={ { type: 'DateFilter' } } dataFormat={ dateFormatter } dataSort>In Stock From</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default AdvancedTableA;
