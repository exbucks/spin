import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import { products, currencies, regions } from './../utils';

const cellEditProp = {
    mode: 'click'
};

const data = Array.from(products(['id', 'name', 'priceDetailed', 'regions'], 5));

import {
    FormControl,
    Button
} from 'components';

import classes from './../ReactTables.scss';

class NameEditor extends React.Component {
    constructor(props) {
        super(props);

        this.updateData = this.updateData.bind(this);
        this.state = {
            name: props.defaultValue,
            open: true
        };
    }

    focus() {
        this.refs.inputRef.focus();
    }

    updateData() {
        this.props.onUpdate(this.state.name);
    }

    close = () => {
        this.setState({ open: false });
        this.props.onUpdate(this.props.defaultValue);
    }

    render() {
        const fadeIn = this.state.open ? 'in' : '';
        const display = this.state.open ? 'block' : 'none';
        return (
            <div className={ `modal fade ${fadeIn}` } id='myModal' role='dialog' style={ { display } }>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-body'>
                        <input
                            ref='inputRef'
                            className={ ( this.props.editorClass || '') + ' form-control editor edit-text' }
                            style={ { display: 'inline', width: '50%' } }
                            type='text'
                            value={ this.state.name }
                            onChange={ e => { this.setState({ name: e.currentTarget.value }); } }
                        />
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-primary' onClick={ this.updateData }>Save</button>
                            <button type='button' className='btn btn-default' onClick={ this.close }>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PriceEditor extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.state = { amount: props.defaultValue.amount, currency: props.defaultValue.currency };
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

function priceFormatter(cell, row) {
    return `<i class='glyphicon glyphicon-${cell.currency.toLowerCase()}'></i> ${cell.amount}`;
}

const regionsFormatter = (cell, row) => (<span>{ (cell || []).join(' ') }</span>);

/*
The getElement function take two arguments,
1. onUpdate: if you want to apply the modified data, call this function
2. props: contain customEditorParameters, whole row data, defaultValue and attrs
*/
const createNameEditor = (onUpdate, props) => (<NameEditor onUpdate={ onUpdate } {...props}/>);
const createPriceEditor = (onUpdate, props) => (<PriceEditor onUpdate={ onUpdate } {...props}/>);
const createRegionsEditor = (onUpdate, props) => (<RegionsEditor onUpdate={ onUpdate } {...props}/>);

class CustomCellEditTable extends React.Component {
    render() {
        return (
            <BootstrapTable data={ data } cellEdit={ cellEditProp }>
                <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                <TableHeaderColumn
                    dataField='name'
                    customEditor={ { getElement: createNameEditor } }
                >
                    Product Name
                </TableHeaderColumn>
                <TableHeaderColumn
                    dataField='priceDetailed'
                    dataFormat={ priceFormatter }
                    customEditor={ { getElement: createPriceEditor, customEditorParameters: { currencies: currencies } } }
                >
                    Product Price
                </TableHeaderColumn>
                <TableHeaderColumn
                    dataField='regions'
                    dataFormat={ regionsFormatter }
                    customEditor={ { getElement: createRegionsEditor } }
                >
                    Regions
                </TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default CustomCellEditTable;
