import React from 'react';
import numeral from 'numeral';
import _ from 'underscore';

import {
    Row,
    Col,
    Table,
    Panel,
    Button,
    DropdownButton,
    MenuItem
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';
import treeRandomizer from 'modules/treeRandomizer';

import data from 'consts/data/invoice.json';

import classes from './../Pages.scss';

class InvoiceContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = treeRandomizer(data);
    }
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        const { Invoice } = this.state;
        const priceSum = _.reduce(Invoice.Items, (memo, item) =>
            memo + parseInt(item.Quantity) * parseFloat(item.Price), 0);

        return (
            <Row>
                <Col lg={ 12 }>
                    <p className="m-b-2">
                        Below you have the options to print and also to write to the format.
                    </p>
                    <Panel className={ classes.panelWhite }>
                        <Row>
                            <Col md={ 4 }>
                                <h4 className="text-gray-darker text-uppercase m-b-1">
                                    <strong>{ Invoice.Subject }</strong>
                                </h4>
                                <p className='m-b-0'>
                                    { Invoice.Sender.AddressLine1 }
                                </p>
                                <p className='m-b-0'>
                                    { Invoice.Sender.AddressLine2 }
                                </p>

                                <p className='m-b-0 m-t-2'>
                                    <abbr title="Phone">Phone: </abbr>
                                    <span>{ Invoice.Sender.Phone }</span>
                                </p>
                                <p className='m-b-0'>
                                    <abbr title="Fax">Fax: </abbr>
                                    <span>{ Invoice.Sender.Fax }</span>
                                </p>
                                <p className='m-b-0'>
                                    <abbr title="Email">Email: </abbr>
                                    <span>{ Invoice.Sender.Email }</span>
                                </p>
                            </Col>
                            <Col md={ 4 } mdOffset={ 4 } className='text-right'>
                                <h4 className="text-gray-darker m-b-1">
                                    <strong>Invoice Info</strong>
                                </h4>
                                <a href='javascript: void(0)'>
                                    #{ Invoice.Id }
                                </a>
                                <p className='m-b-0'>
                                    { 'to: ' }
                                    <strong className='text-gray-darker'>
                                        { Invoice.Receiver.Name }
                                    </strong>
                                </p>

                                <p className='m-b-0 m-t-2'>
                                    { Invoice.Receiver.AddressLine1 }
                                </p>
                                <p className='m-b-0'>
                                    { Invoice.Receiver.AddressLine2 }
                                </p>
                                <p className='m-b-0'>
                                     <abbr title="Phone">Phone:</abbr>
                                     <span> { Invoice.Receiver.Phone }</span>
                                </p>
                                <p className='m-b-0'>
                                     <abbr title="Fax">Fax:</abbr>
                                     <span> { Invoice.Receiver.Fax }</span>
                                </p>
                                <p className='m-b-0'>
                                     <abbr title="Email">Email:</abbr>
                                     <span> { Invoice.Receiver.Email }</span>
                                </p>

                                <p className='m-b-0 m-t-2'>
                                    <span>Date Invoice: </span>
                                    <span>{ Invoice.DateInvoice }</span>
                                </p>
                                <p className='m-b-0'>
                                    <span>Date Due: </span>
                                    <span>{ Invoice.DateDue }</span>
                                </p>
                            </Col>
                        </Row>
                        <Table className={ `${classes.invoiceTable} m-t-3` }>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th>Qty</th>
                                    <th>Cost</th>
                                    <th className='text-right'>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    _.map(Invoice.Items, (invoice, index) => (
                                        <tr key={ invoice._id }>
                                            <td>
                                                { index + 1 }
                                            </td>
                                            <td>
                                                { invoice.Description }
                                            </td>
                                            <td>
                                                { invoice.Quantity }
                                            </td>
                                            <td>
                                                { numeral(invoice.Price).format('$0,0.00') }
                                            </td>
                                            <td className='text-right'>
                                                { numeral(parseFloat(invoice.Price) * parseInt(invoice.Quantity)).format('$0,0.00') }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <Row>
                            <Col mdOffset={ 6 } md={ 6 }>
                                <dl className='dl-horizontal text-right'>
                                    <dt>Sub-Total</dt>
                                    <dd>
                                        { numeral(priceSum).format('$0,0.00') }
                                    </dd>
                                    <dt>VAT</dt>
                                    <dd>
                                        { numeral(priceSum * 0.23).format('$0,0.00') }
                                    </dd>
                                    <dt className='lead m-t-1 text-gray-darker'>Total</dt>
                                    <dd className='lead m-t-1 text-gray-darker'>
                                        { numeral(priceSum * 1.23).format('$0,0.00') }
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                    </Panel>
                    <div className='m-t-1'>
                        <Button bsStyle='primary'>Go to Paymaent</Button>
                        { ' ' }
                        <Button>Print</Button>
                        { ' ' }
                        <DropdownButton
                            id='dropdown-save-as'
                            title='Save as'
                        >
                            <MenuItem eventKey="1">
                                <i className="fa fa-fw text-gray-lighter fa-file-pdf-o m-r-1"></i> Save as .pdf
                            </MenuItem>
                            <MenuItem eventKey="2">
                                <i className="fa fa-fw text-gray-lighter fa-file-excel-o m-r-1"></i> Save as .xls (Excel)
                            </MenuItem>
                            <MenuItem eventKey="3">
                                <i className="fa fa-fw text-gray-lighter fa-file-text-o m-r-1"></i> Save as .txt (Text)
                            </MenuItem>
                            <MenuItem eventKey="4">
                                <i className="fa fa-fw text-gray-lighter fa-file-word-o m-r-1"></i> Save as .doc (Word)
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="5">
                                <i className="fa fa-fw text-gray-lighter fa-envelope-o m-r-1"></i> Send via Email
                            </MenuItem>
                        </DropdownButton>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default connect()(InvoiceContainer);
