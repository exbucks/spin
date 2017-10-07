import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {
    Col,
    Row,
    Button
} from 'components';

import { products } from './../utils';

const data = Array.from(products(['id', 'name', 'price'], 5));

import classes from './../ReactTables.scss';

const createCustomToolbar = (props) => {
    const {
        btnGroup
    } = props.components;

    return (
        <div>
            <Col md={6}>
                <h4 className='m-t-0'>Insert Row</h4>
            </Col>
            <Col md={6} className='text-right'>
                <div className={classes.actions}>
                    { btnGroup }
                </div>
            </Col>
        </div>
    );
}

const options = {
    toolBar: createCustomToolbar,
    insertBtn: (onClick) => (
        <Button onClick={() => {onClick()}}>
            New <i className='fa fa-fw fa-plus text-success'></i>
        </Button>
    )
};

const InsertRow = () => (
    <BootstrapTable data={ data } insertRow={ true } options={options}>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
    </BootstrapTable>
);

/*
const emptyEntry = {
    id: '',
    name: '',
    price: ''
};


class InsertRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            data: Array.from(products(['id', 'name', 'price'], 5)),
            newEntry: {...emptyEntry}
        };
    }

    toggleModal(visible) {
        var isVisible = typeof visible === undefined ? !this.state.modalVisible : visible;

        if(isVisible) {
            this.setState({
                newEntry: {...emptyEntry}
            });
        }

        this.setState({
            modalVisible: isVisible
        });
    }

    addEntry() {
        this.setState({
            data: [...this.state.data, {...this.state.newEntry}],
            modalVisible: false,
            newEntry: {...emptyEntry}
        })
    }

    updateEntryField(fieldName, value) {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                [fieldName]: value
            }
        });
    }

    render() {
        return (
            <div>
                <Button bsStyle='info' onClick={ () => toggleModal(true) }>
                    <i className='fa fa-plus fa-fw'></i>
                    Add Product
                </Button>
                <BootstrapTable data={ this.state.data } insertRow={ true }>
                    <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Product</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <FormGroup controlId='item-id'>
                                <ControlLabel>Product Id</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='Enter New Product Id'
                                    onChange={(e) => this.updateEntryField('id', e.target.value)}
                                />
                            </FormGroup>

                            <FormGroup controlId='item-name'>
                                <ControlLabel>Product Name</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='Enter New Product Name'
                                    onChange={(e) => this.updateEntryField('name', e.target.value)}
                                />
                            </FormGroup>

                            <FormGroup controlId='item-price'>
                                <ControlLabel>Product Price</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='Enter New Product Price'
                                    onChange={(e) => this.updateEntryField('price', e.target.value)}
                                />
                            </FormGroup>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle='primary' onClick={this.addEntry.bind(this)}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
*/
export default InsertRow;
