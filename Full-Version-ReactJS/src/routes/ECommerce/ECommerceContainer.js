import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import leftPad from 'left-pad';
import deepAssign from 'assign-deep';
import numeral from 'numeral';
import moment from 'moment';
import classNames from 'classnames';
import { Link } from 'react-router';

import {
    Row,
    Col,
    Media,
    Panel,
    ButtonGroup,
    Button,
    Table,
    Image,
    Charts,
    AvatarImage
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent'
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';

import classes from './ECommerce.scss';

import eCommerceData from 'consts/data/e-commerce.json';

const DataSet = {
    Revenue: 'Revenue',
    ItemsSold: 'ItemsSold'
};

const TransactionStatus = {
    Waiting: 0,
    Confirmed: 1,
    Expired: 2
};
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const getChartData = (data, name) => ({
    xAxis: {
        categories: _.map(data, (entry) => moment(entry.date).format('MMM'))
    },
    series: [{
        name: name,
        data: _.map(data, (entry) => parseFloat(entry.value))
    }]
});

// ------------------------------------
// Sub Elements
// ------------------------------------
const renderSummary = (summary) => {
    const renderSummaryBox = (title, data, currency = '') => {
        const beginDate = moment().subtract(7, 'days');
        const endDate = moment();

        return (
            <Panel
                key={ uid.v4() }
                className={ classes.summaryPanel }
                header= {
                    <div>
                        { title }
                        <small className={ classes.summaryPanelDate }>
                            { `${beginDate.format('DD')} -  ${endDate.format('DD MMMM YYYY')}` }
                        </small>
                    </div>
                }
            >
                <p className={classes.summaryValue}>
                    {`${currency} ${numeral(data.value).format('0,0')}`}
                </p>
                <span
                    className={`${classes.summaryDiff} ${data.diff > 0
                        ? classes.summaryDiffInc : classes.summaryDiffDec}`}
                >
                    { data.diff > 0 ?
                        <i className='fa fa-fw fa-caret-up'></i> :
                        <i className='fa fa-fw fa-caret-down'></i>
                    }
                    {data.diff}%
                    <small>from last week</small>
                </span>
            </Panel>
        );
    }

    return (
        <Row>
            <Col md={ 4 }>
                { renderSummaryBox('Total Revenue', summary.TotalRevenue, 'IDR') }
            </Col>
            <Col md={ 4 }>
                { renderSummaryBox('Total Items Sold', summary.TotalItemsSold) }
            </Col>
            <Col md={ 4 }>
                { renderSummaryBox('Total Visitors', summary.TotalVisitors) }
            </Col>
        </Row>
    );
}

const renderLatestTransactions = (transactions) => {
    const renderTransactionRow = (transaction) => {
        const statusIconClasses = classNames('fa fa-circle',
            classes.transactionStatus, {
                [`${classes.transactionStatusSuccess}`]:
                    transaction.status == TransactionStatus.Confirmed,
                [`${classes.transactionStatusDanger}`]:
                    transaction.status == TransactionStatus.Expired,
                [`${classes.transactionStatusWarning}`]:
                    transaction.status == TransactionStatus.Waiting
            });

        return (
            <tr key={uid.v4()}>
                <td>
                    <Media>
                        <Media.Left>
                            <Link to='/apps/profile-details'>
                                <AvatarImage
                                    src={ transaction.userAvatar }
                                />
                            </Link>
                        </Media.Left>
                        <Media.Body className={classes.mediaFix}>
                            <span className='text-white'>
                                { `${transaction.userFirstName} ${transaction.userLastName}` }
                            </span><br/>
                            <span>on {moment(transaction.date).format('MMM Do YYYY')}</span>
                        </Media.Body>
                    </Media>
                </td>
                <td>
                    IDR {numeral(transaction.price).format('0,0.00')}
                </td>
                <td>
                    <i className={statusIconClasses}></i>
                    { transaction.status == TransactionStatus.Confirmed ? 'Confirmed' : null }
                    { transaction.status == TransactionStatus.Expired ? 'Payment Expired' : null }
                    { transaction.status == TransactionStatus.Waiting ? 'Waiting for Payment' : null }
                </td>
            </tr>
        );
    };

    return (
        <div className={ classes.latestTransactions }>
            <div className={ classes.boxHeader }>
                <h5 className={ classes.boxHeaderTitle }>
                    Latest Transactions
                </h5>
                <Button
                    className={ classes.buttonWithIcon }
                    bsSize='small'
                >
                    See All Transactions
                    <i className="fa fa-angle-right"></i>
                </Button>
            </div>
            <Table className={ classes.transactionsTable }>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { _.map(transactions, (transaction) => renderTransactionRow(transaction)) }
                </tbody>
            </Table>
        </div>
    );
}

const renderLatestComments = (comments) => {
    const renderCommentPreview = (comment) => {
        return (
            <li key={ uid.v4() }>
                <Media>
                    <Media.Left>
                        <Link to='/apps/profile-details'>
                            <AvatarImage
                                src={ comment.userAvatar }
                            />
                        </Link>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading componentClass='div'>
                            <span className='text-white'>
                                {`${comment.userFirstName} ${comment.userLastName}`}
                            </span>
                            <br/>
                            <span>
                                { moment(comment.data).format('MMM Do YYYY') } on
                                <a href="javascript:void(0)"> {comment.category}</a>
                            </span>
                        </Media.Heading>
                        <p className={classes.commentContent}>
                            { comment.comment }
                        </p>
                    </Media.Body>
                </Media>
            </li>
        )
    };

    return (
        <div className={ classes.latestComments }>
            <div className={ classes.boxHeader }>
                <h5 className={ classes.boxHeaderTitle }>
                    Latest Comments
                </h5>
                <Button
                    className={ classes.buttonWithIcon }
                    bsSize='small'
                >
                    See All Comments
                    <i className="fa fa-angle-right"></i>
                </Button>
            </div>
            <ul className={classes.commentsList}>
                { _.map(comments, (comment) => renderCommentPreview(comment)) }
            </ul>
        </div>
    );
}

const renderMostViewedItems = (mostViewed) => {
    const getQuantityStatusClass = (quantity) => {
        return classNames('fa', 'fa-circle', classes.mostViewedItemStatus, {
            [`${classes.mostViewedItemStatusSuccess}`]: quantity > 100,
            [`${classes.mostViewedItemStatusWarning}`]: (quantity <= 100 && quantity > 10),
            [`${classes.mostViewedItemStatusDanger}`]: quantity <= 10,
        });
    };

    const renderMostViewedItem = (item) => (
        <tr key={uid.v4()}>
            <td>
                <Media>
                    <Media.Left>
                        <a href='javascript:void(0)'>
                            <span className="fa-stack fa-lg">
                              <i className="fa fa-square fa-stack-2x text-gray-light"></i>
                              <i className="fa fa-shopping-basket fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </Media.Left>
                    <Media.Body className={ classes.mediaFix }>
                        <Media.Heading componentClass='div'>
                            <span className='text-white'>
                                { item.name }
                            </span>
                            <br />
                            <span>
                                IDR { item.price }
                            </span>
                        </Media.Heading>
                    </Media.Body>
                </Media>
            </td>
            <td>
                <span className='text-white'>
                    { item.viewCount }
                    <br/>
                    Views
                </span>
            </td>
            <td>
                <i className={ getQuantityStatusClass(item.countLeft) }></i>
                <span className='text-white'>{ item.countLeft }</span> Items Left
            </td>
        </tr>
    );

    return (
        <div className={ classes.mostViewedItems }>
            <div className={ classes.boxHeader }>
                <h5 className={ classes.boxHeaderTitle }>
                    Most Viewed
                </h5>
                <Button
                    className={ classes.buttonWithIcon }
                    bsSize='small'
                >
                    See All Transactions
                    <i className="fa fa-angle-right"></i>
                </Button>
            </div>
            <Table className={ classes.mostViewedItemsTable }>
                <thead>
                    <tr>
                        <th>
                            <strong>Name</strong>
                        </th>
                        <th>
                            <strong>Price</strong>
                        </th>
                        <th>
                            <strong>Status</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { _.map(mostViewed, (item) => renderMostViewedItem(item)) }
                </tbody>
            </Table>
        </div>
    )
}
// ------------------------------------
// Main Container
// ------------------------------------
class ECommerceContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, {
            Report: {
                selected: 'Revenue'
            }
        }, getData(eCommerceData));
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    renderChart(data) {
        const dataset = data[data.selected];
        const datasetName = data.selected === DataSet.Revenue
            ? 'Revenue' : 'Items Sold';
        const chartData = getChartData(dataset, datasetName);

        const chartPeriodStart = moment(_.first(dataset).date).format('MMM YYYY');
        const chartPeriodEnd = moment(_.last(dataset).date).format('MMM YYYY');

        const changeDataSet = (datasetName) => {
            this.setState(deepAssign({}, this.state, {
                Report: {
                    selected: datasetName
                }
            }));
        }

        return (
            <div className={ classes.chart }>
                <div className={ classes.boxHeader }>
                    <div>
                        <h5 className={ classes.boxHeaderTitle }>
                            Report Statisticts
                        </h5>
                        <small>Period: {`${chartPeriodStart} - ${chartPeriodEnd}`}</small>
                    </div>
                    <ButtonGroup bsSize='small'>
                        <Button
                            onClick={ () => changeDataSet(DataSet.ItemsSold) }
                            active={ this.state.Report.selected === DataSet.ItemsSold }
                        >
                            Items Sold
                        </Button>
                        <Button
                            onClick={ () => changeDataSet(DataSet.Revenue) }
                            active={ this.state.Report.selected === DataSet.Revenue }
                        >
                            Revenue
                        </Button>
                    </ButtonGroup>
                </div>
                <Charts.HighchartBasicColumn className={classes.chartObject} config={ chartData } />
            </div>
        );
    }

    render() {
        return (
            <div className={classes.mainWrap}>
                <Row>
                    <Col md={ 12 }>
                        { renderSection(renderSummary, this.state.Summary) }
                    </Col>
                </Row>
                <Row className={ classes.sectionRow }>
                    <Col md={ 6 }>
                        { this.renderChart(this.state.Report) }
                    </Col>
                    <Col md={ 6 }>
                        { renderSection(renderLatestTransactions,
                            this.state.LatestTransactions) }
                    </Col>
                </Row>
                <Row className={ classes.sectionRow }>
                    <Col md={ 6 }>
                        { renderSection(renderLatestComments, this.state.LatestComments) }
                    </Col>
                    <Col md={ 6 }>
                        { renderSection(renderMostViewedItems, this.state.MostViewedItems) }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(ECommerceContainer);
