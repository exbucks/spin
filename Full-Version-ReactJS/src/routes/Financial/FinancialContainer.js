import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import treeRandomizer from './../../modules/treeRandomizer';
import renderSection from './../../modules/sectionRender';
import deepAssign from 'assign-deep';
import numeral from 'numeral';
import moment from 'moment';
import classNames from 'classnames';
import { Link } from 'react-router';

import {
    Panel,
    Button,
    Table,
    Grid,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent'
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './Financial.scss';

import { Colors } from 'consts';

import { MoneyMap, PerformanceChart } from './components';

import financialData from './../../consts/data/financial.json';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);
const generateMoneyMapChartData = (length = 14) => {
    const streams = [ {
        name: 'Main Fundings', data: []
    }, {
        name: 'Invoices', data: []
    }, {
        name: 'Accounts', data: []
    }, {
        name: 'Secure Holdings', data: []
    }];

    for(let i = 0; i < length; i++) {
        let value = 100;
        for(let j = 0; j < streams.length; j++) {
            const val = (j === streams.length - 1) ? value : Math.random() * value;
            value -= val;
            streams[j].data[length - 1 - i] = {
                x: moment().utc().subtract(i, 'days').valueOf(),
                y: val
            }
        }
    }

    return streams;
}

const dashboardSettings = [
    { name: 'My Cash', enabled: true },
    { name: 'My Cap', enabled: true },
    { name: 'Recent Fundings', enabled: true },
    { name: 'Client List', enabled: true },
    { name: 'Invoice Creator', enabled: true },
    { name: 'Invoice Generator', enabled: true },
    { name: 'Sales Lead', enabled: true },
    { name: 'Q & A', enabled: true },
    { name: 'Account Performance', enabled: true }
];

const moneyMapChartData = generateMoneyMapChartData();

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderCashSummary = (data) => {
    const getSummaryDiffStatusClass = (value) => {
        return classNames('fa', 'fa-fw', {
            [`${classes.cashSummaryDiffInc} fa-caret-up`]: value > 0,
            [`${classes.cashSummaryDiffDec} fa-caret-down`]: value < 0,
        });
    };

    return (
        <div className={ classes.cashSummary }>
            <div className={ classes.boxHeader }>
                <h4 className={ classes.boxHeaderTitle }>Your Cash</h4>
                <Button
                    className={ classes.buttonWithIcon }
                    bsSize="small"
                >
                    USD <i className="fa m-l-1 fa-caret-down"></i>
                </Button>
            </div>
            <Row>
                {
                    _.map(data, (item) => (
                        <Col lg={ 3 } sm={ 6 } key={ uid.v4() }>
                            <Panel
                                className={ classes.cashSummaryPanel }
                                header={ item.Name }
                            >
                                <p className={classes.cashSummaryValue}>
                                    $ {item.Value}
                                </p>
                                {
                                    (item.DiffChanged)
                                    ?
                                    <div>
                                        <i className={ getSummaryDiffStatusClass(item.Value) }></i>
                                        <span> $ {item.Value}</span>
                                    </div>
                                    :
                                    <div>
                                        <span>No Change</span>
                                    </div>
                                }
                            </Panel>
                        </Col>
                   ))
                }
            </Row>
        </div>
    );
};

const renderMoneyMapChart = (data) => (
    <div>
        <div className={ classes.boxHeader}>
            <h4 className={classes.boxHeaderTitle}>Money Map</h4>
        </div>
        <MoneyMap data={data} />
    </div>
);

const renderRecentFunding = (data) => (
    <div>
        <div className={ classes.boxHeader }>
            <h4 className={ classes.boxHeaderTitle }>Recent Funding</h4>
            <Link to='/apps/clients'>
                <Button
                    bsSize="small"
                    className={ classes.buttonWithIcon }
                >
                    View All <i className="fa m-l-1 fa-angle-right"></i>
                </Button>
            </Link>
        </div>
        <Panel>
            <Table fill striped>
                <thead>
                    <tr>
                        <th>
                            Company
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Date
                        </th>
                        <th className="text-right">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(data, (item) => (
                            <tr key={uid.v4()}>
                                <td className="text-white">
                                    {item.Company}
                                </td>
                                <td>
                                    $ {item.Amount}
                                </td>
                                <td>
                                    { moment(item.Date).format('DD-MM-YYYY') }
                                </td>
                                <td className="text-right">
                                    <a href="javascript:void(0)">
                                        View <i className="fa fa-angle-right"></i>
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Panel>
    </div>
);

const renderInvoices = (data) => (
    <div>
        <div className={ classes.boxHeader }>
            <h4 className={ classes.boxHeaderTitle }>Invoices</h4>
            <Button
                bsSize="small"
                className={ classes.buttonWithIcon }
            >
                Pending<i className="fa m-l-1 fa-caret-down"></i>
            </Button>
        </div>
        <Panel>
            <Table fill striped responsive>
                <thead>
                    <tr>
                        <th>
                            Company
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Contact
                        </th>
                        <th>
                            Email
                        </th>
                        <th className="text-right">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(data, (item) => (
                            <tr key={ uid.v4() }>
                                <td className="text-white">
                                    {item.Company}
                                </td>
                                <td>
                                    $ {item.Amount}
                                </td>
                                <td>
                                    { moment(item.Date).format('DD-MM-YYYY') }
                                </td>
                                <td>
                                    {item.Name}
                                </td>
                                <td>
                                    <a href="javascript:void(0)">
                                        {item.Email}
                                    </a>
                                </td>
                                <td className="text-right">
                                    <Link to='/pages/invoice'>
                                        View <i className="fa fa-angle-right"></i>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Panel>
    </div>
);

const renderPerformanceChart = (data) => {
    return (
        <div>
            <div className={ classes.boxHeader }>
                <h4 className={ classes.boxHeaderTitle }>Account Performance</h4>
            </div>
            <Panel>
                <PerformanceChart data={ data } />
            </Panel>
        </div>
    );
};

const renderDashboardSettings = (data) => (
    <div>
        <div className={ classes.boxHeader }>
            <h4 className={ classes.boxHeaderTitle }>Dashboard Setting</h4>
        </div>
        <Panel>
            <ListGroup fill>
                {
                     _.map(data, (setting) => (
                        <ListGroupItem
                            key={ uid.v4() }
                            className={ classes.settingsListItem }
                        >
                            <span>{ setting.name }</span>
                            <input type="checkbox" defaultChecked={ setting.enabled } />
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </Panel>
    </div>
);
// ------------------------------------
// Main Container
// ------------------------------------
class FinancialContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = Object.assign({}, this.state, getData(financialData), {
            dashboardSettings: dashboardSettings,
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className={ classes.mainWrap }>
                <Row>
                    <Col lg={ 12 }>
                        { renderSection(renderCashSummary, this.state.CashSummary) }
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 5 }>
                        { renderSection(renderMoneyMapChart, moneyMapChartData) }
                    </Col>
                    <Col lg={ 7 }>
                        { renderSection(renderRecentFunding, this.state.RecentFunding) }
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 12 }>
                        { renderSection(renderInvoices, this.state.Invoices) }
                    </Col>
                </Row>
                <Row>
                    <Col lg={ 9 }>
                        { renderSection(renderPerformanceChart, this.state.AccountPerformance) }
                    </Col>
                    <Col lg={ 3 }>
                        { renderSection(renderDashboardSettings, this.state.dashboardSettings) }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(FinancialContainer);
