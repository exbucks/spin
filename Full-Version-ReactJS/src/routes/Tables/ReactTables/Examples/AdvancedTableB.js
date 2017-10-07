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
    Label,
    AvatarImage
} from 'components';
import { people, currencies, regions, statuses } from './../utils';
import classes from './../ReactTables.scss';

import { Colors } from 'consts';

const data = Array.from(people(['id', 'photo', 'firstName', 'lastName', 'role', 'status', 'region', 'earnings', 'details'], 500));

const avatarFormatter = (cell) => (
    <AvatarImage src={cell} />
);

function priceFormatter(cell, row) {
  return `<i class='glyphicon glyphicon-${cell.currency.toLowerCase()}'></i> ${cell.amount}`;
}

const statusFormatter = (cell, row) => {
    const statusToProps = {
        ['Active']: { bsStyle: 'success' },
        ['Suspended']: { bsStyle: 'danger' },
        ['Waiting']: { bsStyle: 'info' },
        ['Unknown']: { bsStyle: 'custom', customColor: Colors.grayLighter },
        ['Inactive']: { bsStyle: 'warning' },
    };

    return (
        <Label {...statusToProps[cell]}>
            { cell }
        </Label>
    );
}

const regionFormatter = (cell) => cell.join(' ');

class PriceEditor extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.state = { amount: props.defaultValue.amount, currency: props.defaultValue.currency };
    }
    focus() {
        this.refs.inputRef.focus();
    }
    updateData() {
        this.props.onUpdate({ amount: this.state.amount, currency: this.state.currency });
    }
    render() {
        return (
            <div className={classes.priceEditor}>
                <FormControl
                    bsSize='sm'
                    ref='inputRef'
                    className={ ( this.props.editorClass || '') }
                    style={ { display: 'inline', width: '50%' } }
                    type='text'
                    value={ this.state.amount }
                    onKeyDown={ this.props.onKeyDown }
                    onChange={ (ev) => { this.setState({ amount: parseInt(ev.currentTarget.value, 10) }); } }
                />
                <FormControl
                    bsSize='sm'
                    componentClass='select'
                    value={ this.state.currency }
                    onKeyDown={ this.props.onKeyDown }
                    onChange={ (ev) => { this.setState({ currency: ev.currentTarget.value }); } }
                >
                    { currencies.map(currency => (<option key={ currency } value={ currency }>{ currency }</option>)) }
                </FormControl>
                <Button
                    bsSize='sm'
                    bsStyle='info'
                    onClick={ this.updateData }
                >
                    Save
                </Button>
            </div>
        );
    }
}

class RegionsEditor extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.state = { regions: props.defaultValue };
        this.onToggleRegion = this.onToggleRegion.bind(this);
    }
    focus() {
    }
    onToggleRegion(event) {
        const region = event.currentTarget.name;
        if (this.state.regions.indexOf(region) < 0) {
            this.setState({ regions: this.state.regions.concat([ region ]) });
        } else {
            this.setState({ regions: this.state.regions.filter(r => r !== region) });
        }
    }
    updateData() {
        this.props.onUpdate(this.state.regions);
    }
    render() {
        const regionCheckBoxes = regions.map(region => (
            <span key={ `span-${region}` } className={classes.regionCheck}>
                <input
                    type='checkbox'
                    key={ region }
                    name={ region }
                    checked={ this.state.regions.indexOf(region) > -1 }
                    onKeyDown={ this.props.onKeyDown }
                    onChange={ this.onToggleRegion }
                />
                <label key={ `label-${region}` } htmlFor={ region }>{ region }</label>
            </span>
        ));
        return (
            <div ref='inputRef' className={classes.regionChecks}>
                { regionCheckBoxes }
                <button
                    className='btn btn-info btn-xs textarea-save-btn m-l-1'
                    onClick={ this.updateData }
                >
                    Save
                </button>
            </div>
        );
    }
}

class TextEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue
        }
    }

    render() {
        return (
            <FormControl
                bsSize='sm'
                value={this.state.value}
                onChange={(e) => this.setState({value: e.target.value})}
                onKeyPress={(e) => {
                    if(e.charCode === 13) {
                        this.props.onUpdate(this.state.value);
                    }
                }}
            />
        );
    }
}

class SelectionEditor extends React.Component {
    render() {
        return (
            <FormControl
                bsSize='sm'
                componentClass='select'
                value={this.props.defaultValue}
                onChange={(e) => this.props.onUpdate(e.target.value)}
            >
                {
                    this.props.items.map((item, i) => (
                        <option value={item} key={i}>
                            {item}
                        </option>
                    ))
                }
            </FormControl>
        );
    }
}

//const createNameEditor = (onUpdate, props) => (<NameEditor onUpdate={ onUpdate } {...props}/>);
//const createPriceEditor = (onUpdate, props) => (<PriceEditor onUpdate={ onUpdate } {...props}/>);
const createRegionsEditor = (onUpdate, props) => (<RegionsEditor onUpdate={ onUpdate } {...props}/>);
const createPriceEditor = (onUpdate, props) => (<PriceEditor onUpdate={ onUpdate } {...props}/>);
const createSelectionEditor = (onUpdate, props, options) => (<SelectionEditor onUpdate={onUpdate} items={options} {...props}/>);
const createTextEditor = (onUpdate, props) => (<TextEditor onUpdate={ onUpdate } {...props}/>);

const ExpandedComponent = (props) => {
    const {
        lastLogin,
        ip,
        browser,
        os,
        selectedPlan,
        planEnd
    } = props.data;

    return (
        <Grid fluid className={classes.expandedRow}>
            <Row>
                <Col lg={6}>
                    <dl className={`dl-horizontal ${classes.detailsList}`}>
                        <dt>Last Login</dt>
                        <dd>{moment(lastLogin).format('DD-MMM-YYYY')}</dd>

                        <dt>IP Address</dt>
                        <dd>{ip}</dd>

                        <dt>Browser</dt>
                        <dd>{browser}</dd>
                    </dl>
                </Col>
                <Col lg={6}>
                    <dl className={`dl-horizontal ${classes.detailsList}`}>
                        <dt>Operating System</dt>
                        <dd>{os}</dd>

                        <dt>Selected Plan</dt>
                        <dd>{selectedPlan}</dd>

                        <dt>Plan Ended</dt>
                        <dd>{moment(planEnd).format('DD-MMM-YYYY')}</dd>
                    </dl>
                </Col>
            </Row>
        </Grid>
    );
};

class AdvancedTableB extends React.Component {
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
            paginationShowsTotal: true,
            expandParentClass: 'tr-expanded'
            //expandRowBgColor: '#2f2f2f'
        };

        const cellEditProp = {
            mode: 'click'
        };

        const expandOptions = {
            expandColumnVisible: true,
            expandColumnComponent: ({isExpandableRow, isExpanded}) =>
                isExpanded ? (
                    <i className='fa fa-angle-down fa-2x'></i>
                ) : (
                    <i className='fa fa-angle-right fa-2x'></i>
                )
        };

        return (
            <BootstrapTable
                className={classes.tableMiddle}
                data={ data }
                options={options}
                insertRow
                deleteRow
                exportCSV
                search
                pagination
                expandableRow={ () => true }
                expandComponent={ (row) => <ExpandedComponent data={row.details} /> }
                expandColumnOptions={ expandOptions }
                cellEdit={ cellEditProp }
                asPanel
            >
                <TableHeaderColumn dataField='id' isKey hidden>Id</TableHeaderColumn>
                <TableHeaderColumn dataField='photo' dataFormat={ avatarFormatter } dataAlign="center" width='70px'>Photo</TableHeaderColumn>
                <TableHeaderColumn dataField='firstName' dataSort width='15%' customEditor={ { getElement: createTextEditor } }>First Name</TableHeaderColumn>
                <TableHeaderColumn dataField='lastName' dataSort width='15%' customEditor={ { getElement: createTextEditor } }>Last Name</TableHeaderColumn>
                <TableHeaderColumn dataField='role' dataSort width='150px' customEditor={ { getElement: createTextEditor } }>Role</TableHeaderColumn>
                <TableHeaderColumn dataField='status' dataSort dataFormat={ statusFormatter } customEditor={ { getElement: createSelectionEditor, customEditorParameters: { items: statuses } } } width='120px'>Status</TableHeaderColumn>
                <TableHeaderColumn dataField='region' dataSort dataFormat={regionFormatter} customEditor={ { getElement: createRegionsEditor } }>Region</TableHeaderColumn>
                <TableHeaderColumn dataField='earnings' dataFormat={ priceFormatter } dataSort customEditor={ { getElement: createPriceEditor, customEditorParameters: { currencies: currencies } } }>Earnings</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default AdvancedTableB;
