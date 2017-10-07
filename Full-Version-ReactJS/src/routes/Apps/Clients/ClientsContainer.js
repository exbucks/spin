import React from 'react';
import uid from 'node-uuid';
import deepAssign from 'assign-deep';
import _ from 'underscore';

import {
    Row,
    Col,
    Grid,
    Panel,
    Button,
    Nav,
    NavItem,
    Badge,
    ButtonGroup,
    ButtonToolbar,
    FormGroup,
    Label,
    Table,
    Media,
    FormControl,
    Checkbox,
    Pagination,
    OverlayTrigger,
    Tooltip,
    Tab,
    Tabs,
    ScrollBarContainer,
    AvatarImage,
    AvatarIcon,
    FavoriteStar,
    Divider
} from 'components';

import renderSection from 'modules/sectionRender';
import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';
import clientsData from 'consts/data/app-clients.json';

import classes from './Clients.scss';

import { UserDetails } from './../components';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const ENTRY_TYPE_USER = 'user';
const ENTRY_TYPE_COMPANY = 'company';

const getData = (inputData) => treeRandomizer(inputData);

const statusToColor = (status) => {
    switch(status) {
        case 'Online':
            return Colors.brandSuccess;
        case 'Busy':
            return Colors.brandDanger;
        case 'Away':
            return Colors.brandWarning;
        default:
        case 'Offline':
            return Colors.grayLighter;
    }
}

const labelToBsStyle = (label) => {
    const labelStyles = [
        'primary',
        'success',
        'warning',
        'danger'
    ];

    return labelStyles[Math.floor(Math.random() * labelStyles.length)];
}

const commerceToBsStyle = (commerce) => {
    const map = {
        'Computers': 'primary',
        'Shoes': 'success',
        'Toys': 'warning',
        'Music': 'danger',
        'Grocery': 'info',
        'Jewelery': 'default',
        'Clothing:': 'primary',
        'Movies': 'success',
        'Industrial': 'warning',
        'Automotive': 'danger'
    }

    return map[commerce] || 'primary';
};

const companyIcons = (copmanyName) => {
    const icons = {
        'Facebook': {
            icon: (<i className='fa fa-facebook'></i>),
            color: Colors.brandWhite,
            background: '#3A5C96'
        },
        'Apple': {
            icon: (<i className='fa fa-apple'></i>),
            color: Colors.grayDark,
            background: Colors.brandWhite
        },
        'Twitter': {
            icon: (<i className='fa fa-twitter'></i>),
            color: Colors.brandWhite,
            background: '#5FABDC'
        },
        'Amazon': {
            icon: (<i className='fa fa-amazon'></i>),
            color: Colors.brandWhite,
            background: '#ffa500'
        },
        'Foursquare': {
            icon: (<i className='fa fa-foursquare'></i>),
            color: '#F84978',
            background: Colors.brandWhite
        },
        'Last.fm': {
            icon: (<i className='fa fa-lastfm'></i>),
            color: Colors.brandWhite,
            background: '#E2132F'
        },
        'LinkedIn': {
            icon: (<i className='fa fa-linkedin'></i>),
            color: Colors.brandWhite,
            background: '#027AB4'
        },
        'Medium': {
            icon: (<i className='fa fa-medium'></i>),
            color: Colors.brandWhite,
            background: '#18AA6E'
        },
        'Microsoft': {
            icon: (<i className='fa fa-windows'></i>),
            color: '#10BFF2',
            background: Colors.brandWhite
        }
    }

    return icons[copmanyName] || null;
}

// ------------------------------------
// Partial sections
// ------------------------------------
const renderCompanyIcon = (companyName, size = 'default') => {
    const iconSettings = companyIcons(companyName);

    if(iconSettings) {
        return (
            <AvatarIcon
                backgroundColor={ iconSettings.background }
                color={ iconSettings.color }
                type='rounded'
                size={ size }
            >
                { iconSettings.icon }
            </AvatarIcon>
        )
    }

    return null;
}

const renderClients = (props) => {
    const { clients, changeItem, selectedItem } = props;

    return (
        <Table responsive hover className={ classes.peopleTable }>
            <thead>
                <tr>
                    <th></th>
                    <th>Star</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Label</th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(clients, (client) => (
                        <tr key={ client._id } className={ client === selectedItem ? 'active' : null }>
                            <td>
                                <Checkbox />
                            </td>
                            <td>
                                <FavoriteStar
                                    favorited={ !!parseInt(client.Favoritted) }
                                />
                            </td>
                            <td>
                                <Media>
                                    <Media.Left align='middle'>
                                        <AvatarImage
                                            src={ client.Avatar }
                                            showStatus
                                            statusPlacement='bottom'
                                            statusColor={ statusToColor(client.Status) }
                                        />
                                    </Media.Left>
                                    <Media.Body>
                                        <a href='javascript:void(0)' onClick={ () => changeItem(client, ENTRY_TYPE_USER) }>
                                            { client.Name }
                                        </a>
                                        <p className='m-y-0'>
                                            { client.Position }
                                        </p>
                                    </Media.Body>
                                </Media>
                            </td>
                            <td>
                                { client.Contact.Email }
                            </td>
                            <td>
                                { client.Contact.Phone }
                            </td>
                            <td>
                                <Label bsStyle={ commerceToBsStyle(_.first(client.Labels)) } outline>
                                    { _.first(client.Labels) }
                                </Label>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
};

const renderCompanies = (props) => {
    const { companies, selectedItem, changeItem } = props;

    return (
        <Table responsive hover className={ classes.companiesTable }>
            <thead>
                <tr>
                    <th></th>
                    <th>Star</th>
                    <th>Company Name</th>
                    <th>Employees</th>
                    <th>Contact</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(companies, company => (
                        <tr key={ company._id } className={ company === selectedItem ? 'active' : null }>
                            <td>
                                <Checkbox />
                            </td>
                            <td>
                                <FavoriteStar
                                    favorited={ !!parseInt(company.Favoritted) }
                                />
                            </td>
                            <td>
                                <Media>
                                    <Media.Left align='middle'>
                                        { renderCompanyIcon(company.Name) }
                                    </Media.Left>
                                    <Media.Body className={ classes.mediaFix }>
                                        <a href='javascript:void(0)' onClick={ () => changeItem(company, ENTRY_TYPE_COMPANY) }>
                                            { company.Name }
                                        </a>
                                        <p className='m-y-0'>
                                            { company.Location }
                                        </p>
                                    </Media.Body>
                                </Media>
                            </td>
                            <td>
                                {
                                    _.map(company.Employees, employee => (
                                        <AvatarImage
                                            size='small'
                                            src={ employee.Avatar }
                                            className='m-r-1'
                                            key={ employee._id }
                                        />
                                    ))
                                }
                            </td>
                            <td>
                                <span>{ company.Contact.Phone }</span>
                                <br />
                                <span>{ company.Contact.Email }</span>
                            </td>
                            <td>
                                <span>{ company.Address.Line1 }</span>
                                <br />
                                <span>{ company.Address.Line2 }</span>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
};

const renderUserDetails = user => {
    const props = {
        status: user.Status,
        avatar: user.Avatar,
        name: user.Name,
        favortted: user.Favoritted,
        position: user.Position,
        shortProfile: user.ShortProfile,
        labels: user.Labels,
        contact: user.Contact,
        social: user.Social,
        address: user.Address
    };

    return (
        <Panel className={ classes.companiesPanel }>
            <UserDetails {...props} />
        </Panel>
    );
};

const renderCompanyDetails = (company) => (
    <Panel className={ classes.companiesPanel }>
        <Media>
            <Media.Left>
                <div className="p-t-1">
                    { renderCompanyIcon(company.Name, 'large') }
                </div>
            </Media.Left>
            <Media.Body>
                <div className={ classes.companyPanelName }>
                    <h4>
                        { company.Name }
                    </h4>
                    <FavoriteStar
                        favorited={ !!parseInt(company.Favoritted) }
                        className='m-l-1'
                    />
                </div>
                <p>
                    { company.Location }
                </p>
                <div>
                    <Button bsStyle='primary'>
                        <i className='fa fa-envelope m-r-1'></i>
                        Contact
                    </Button>
                    { ' ' }
                    <Button>
                        <i className='fa fa-pencil'></i>
                    </Button>
                </div>
            </Media.Body>
        </Media>
        <Divider>
            Description
        </Divider>
        <p className='m-y-0'>
            { company.ShortDesc }
        </p>

        <Divider>
            Tags
        </Divider>
        <div>
            { _.map(company.Tags, (label, index) => (
                <Label
                    outline
                    bsStyle='default'
                    className='m-r-1'
                    key={ index }
                >
                    { label }
                </Label>
            ))}
        </div>

        <Tabs defaultActiveKey='tab-1' className='m-t-3' id='company-details-panel'>
            <Tab eventKey='tab-1' title='Contact Details' className={ classes.detailsTab }>
                <Divider className='m-t-1'>
                    Contact
                </Divider>
                <dl className='dl-horizontal'>
                    <dt>Phone</dt>
                    <dd className='text-white'>
                        { company.Contact.Phone }
                    </dd>
                    <dt>Email</dt>
                    <dd>
                        <a href='javascript:void(0)'>
                            { company.Contact.Email }
                        </a>
                    </dd>
                </dl>

                <Divider className='m-t-1'>
                    Address
                </Divider>
                <dl className='dl-horizontal'>
                    <dt>Address</dt>
                    <dd className='text-white'>
                        <a href='javascript:void(0)'>
                            { company.Address.Line1 }
                        </a>
                    </dd>
                    <dt></dt>
                    <dd className='text-white'>
                        <a href='javascript:void(0)'>
                            { company.Address.Line2 }
                        </a>
                    </dd>
                </dl>
            </Tab>

            <Tab eventKey='tab-2' title='Employees'>
                <Nav className='p-t-1'>
                    {
                        _.map(company.Employees, (employee, index) => (
                            <NavItem key={ employee._id }>
                                <Media>
                                    <Media.Left>
                                        <AvatarImage
                                            src={ employee.Avatar }
                                            size="small"
                                        />
                                    </Media.Left>
                                    <Media.Body>
                                        <h5 className='m-y-0'>
                                            { employee.Name }
                                        </h5>
                                        <p className='small text-gray-lighter m-b-0'>
                                            { employee.Location }
                                        </p>
                                    </Media.Body>
                                    <Media.Right align="middle">
                                        <OverlayTrigger
                                            overlay={(
                                                <Tooltip id={ `employee-status-${index}` }>
                                                    { employee.Status }
                                                </Tooltip>
                                            )}
                                            placement="left"
                                        >
                                            <i
                                                className='fa fa-fw fa-circle'
                                                style={ { color: statusToColor(employee.Status) } }
                                            ></i>
                                        </OverlayTrigger>
                                    </Media.Right>
                                </Media>
                            </NavItem>
                        ))
                    }
                </Nav>
            </Tab>
        </Tabs>
    </Panel>
);

// ------------------------------------
// Main Container
// ------------------------------------
class ClientsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        const data = getData(clientsData);

        this.state = deepAssign({}, this.state, {
            data: data,
            selected: _.first(data.People),
            selectedType: ENTRY_TYPE_USER
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    changeActiveItem(activeItem, type = ENTRY_TYPE_USER) {
        this.setState({
            selected: activeItem,
            selectedType: type
        });
    }

    render() {
        return (
            <Row>
                <Col lg={ 8 }>
                    <Tab.Container defaultActiveKey="people" id='main-container'>
                        <div>
                            <div className={ classes.tabsContainer }>
                                <Nav bsStyle='tabs'>
                                    <NavItem eventKey='people'>
                                        People
                                    </NavItem>
                                    <NavItem eventKey='companies'>
                                        Companies
                                    </NavItem>
                                </Nav>
                                <div className={ classes.tabSettings }>
                                    <OverlayTrigger
                                        overlay={(
                                            <Tooltip id='tooltip-edit-hint'>
                                                Edit
                                            </Tooltip>
                                        )}
                                        placement='top'
                                    >
                                        <Button>
                                            <i className='fa fa-gear fa-fw'></i>
                                        </Button>
                                    </OverlayTrigger>
                                    { ' ' }
                                    <Button bsStyle='primary'>
                                        Add Contact
                                        <i className='fa fa-plus m-l-1'></i>
                                    </Button>
                                </div>
                            </div>
                            <Tab.Content animation>
                                <Tab.Pane eventKey='people'>
                                    {
                                        renderSection(renderClients, {
                                            clients: this.state.data.People,
                                            changeItem: (newItem) => this.changeActiveItem(newItem, ENTRY_TYPE_USER),
                                            selectedItem: this.state.selected
                                        })
                                    }
                                </Tab.Pane>
                                <Tab.Pane eventKey='companies'>
                                    {
                                        renderSection(renderCompanies, {
                                            companies: this.state.data.Companies,
                                            changeItem: (newItem) => this.changeActiveItem(newItem, ENTRY_TYPE_COMPANY),
                                            selectedItem: this.state.selected
                                        })
                                    }
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </Col>
                <Col lg={ 4 }>
                    {
                        (this.state.selectedType === ENTRY_TYPE_USER ? (
                            renderSection(renderUserDetails, this.state.selected)
                        ) : (
                            renderSection(renderCompanyDetails, this.state.selected)
                        ))
                    }
                </Col>
            </Row>
        );
    }
}

export default connect()(ClientsContainer);
