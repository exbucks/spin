import React from 'react';
import _ from 'underscore';
import num from 'numeral';
import uid from 'node-uuid';
import moment from 'moment';
import {
    Table,
    ListGroup,
    ListGroupItem,
    Label,
    Media,
    Button,
    ButtonGroup,
    Checkbox,
    AvatarImage
} from 'components';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import renderSection from 'modules/sectionRender';
import { statusToColor } from 'modules/helpers';

import classes from './RightSidebar.scss';

const renderWeather = (weather) => (
    <div className={ classes.weather }>
        <h6 className={ classes.sectionTitle }>
            Weather
        </h6>
        <div className={ classes.sectionContainer }>
            <p className={ classes.dayLarge }>
                { moment().format('dddd') }
            </p>
            <span className='text-white lead'>
                { moment().format('DD MMMM') }
            </span>
            <p className='m-t-2'>
                { weather.Status }
            </p>
            <a href='javascript: void(0)'>
                More Details <i className='fa fa-angle-right'></i>
            </a>
        </div>
    </div>
);

const renderStock = (stock) => (
    <div>
        <h6 className={ classes.sectionTitle }>
            Stock
        </h6>
        <Table
            className={ classes.stockList }
            condensed
            hover
        >
            <thead>
            </thead>
            <tbody>
                {
                    _.map(stock, (stockItem) => (
                        <tr
                            key={ stockItem._id }
                        >
                            <td className='text-white'>
                                { stockItem.Name }
                            </td>
                            <td className={ classes.stockValue }>
                                { num(stockItem.Value).format('0,0.00') }
                            </td>
                            <td className='text-right'>
                                <Label
                                    bsStyle={ parseFloat(stockItem.Diff) < 0 ?
                                        'danger' : 'success' }
                                >
                                    { stockItem.Diff }%
                                </Label>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </div>
);

const renderEmails = (emails) => (
    <div>
        <h6 className={ classes.sectionTitle }>
            Today's Emails
        </h6>
        <ListGroup
            className={ classes.list }
        >
            {
                _.map(emails, email => (
                    <ListGroupItem className={ classes.listEntry } key={ email._id }>
                        <Media>
                            <Media.Left
                                align='middle'
                            >
                                <Link to='/apps/profile-details'>
                                    <AvatarImage
                                        src={ email.Avatar }
                                        showStatus
                                        statusPlacement='bottom'
                                        statusColor={ statusToColor(email.Status) }
                                    />
                                </Link>
                            </Media.Left>
                            <Media.Body>
                                <LinkContainer to='/apps/email-details'>
                                    <div className={ classes.clickableElement }>
                                        <h5 className='m-b-0'>
                                            { email.Name }
                                            <small className='m-l-1'>
                                                { moment(email.Time).format('HH:mm a') }
                                            </small>
                                        </h5>
                                        <p className='m-y-0'>
                                            { email.Content }
                                        </p>
                                    </div>
                                </LinkContainer>

                                <ButtonGroup bsSize='xsmall'>
                                    <LinkContainer to='/apps/new-email'>
                                        <Button bsStyle='link'>
                                            <i className="fa fa-reply text-gray-light"></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button bsStyle='link'>
                                        <i className="fa fa-archive text-gray-light"></i>
                                    </Button>
                                    <Button bsStyle='link'>
                                        <i className="fa fa-trash text-gray-light"></i>
                                    </Button>
                                </ButtonGroup>
                            </Media.Body>
                        </Media>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    </div>
);

const renderTasks = (tasks) => (
    <div>
        <h6 className={ classes.sectionTitle }>
            Tasks
        </h6>
        <ListGroup
            className={ classes.list }
        >
            {
                _.map(tasks, task => (
                    <ListGroupItem
                        className={ classes.listEntry }
                        key={ task._id }
                    >
                        <Checkbox defaultChecked={ task.Active }>
                            <Link to='/apps/task-details' className={ `${!task.Active ? classes.marked : ''}` }>
                                { `${task.Title} ` }
                            </Link>
                            <span className='small'>
                                <i className='fa fa-history small text-gray-light'></i>
                                {` ${ moment(task.Date).format('DD-MMM-YYYY HH:mm a')}`}
                            </span>
                        </Checkbox>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    </div>
);

const FirstRightSidebarTab = (props) => (
    <div>
        { renderWeather(props.data.Weather) }
        { renderStock(props.data.Stock) }
        { renderEmails(props.data.Emails) }
        { renderTasks(props.data.Tasks) }
    </div>
)

FirstRightSidebarTab.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default FirstRightSidebarTab;
