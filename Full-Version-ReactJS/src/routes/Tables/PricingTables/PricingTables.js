import React, { PropTypes } from 'react';
import uid from 'node-uuid';
import hash from 'object-hash';
import _ from 'underscore';
import numeral from 'numeral';

import {
    Row,
    Col,
    Table,
    Panel,
    Button,
    Label,
    Divider
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';

import classes from './PricingTables.scss';

const tablesData = [
    {
        id: uid.v4(),
        type: 'Basic',
        bsStyle: 'info',
        description: 'Very good to start your business',
        price: 23.00,
        capabilities: [
            { key: 'Android / iOS', value: 'Yes' },
            { key: 'Admin Web Access', value: '85421' },
            { key: 'Appointments', value: 'Yes' },
            { key: 'Import / Export Data', value: 'Yes' },
            { key: 'Data Storage', value: '1GB' },
        ]
    },
    {
        id: uid.v4(),
        type: 'Premium',
        bsStyle: 'primary',
        description: 'Our most popular package',
        price: 48.90,
        capabilities: [
            { key: 'Android / iOS', value: 'Yes' },
            { key: 'Admin Web Access', value: '14931' },
            { key: 'Appointments', value: 'Yes' },
            { key: 'Import / Export Data', value: 'Yes' },
            { key: 'Data Storage', value: '2GB' },
        ],
        active: true
    },
    {
        id: uid.v4(),
        type: 'Pro',
        bsStyle: 'warning',
        description: 'When you have a lot of customers to take care of',
        price: 79.99,
        capabilities: [
            { key: 'Android / iOS', value: 'Yes' },
            { key: 'Admin Web Access', value: '35415' },
            { key: 'Appointments', value: 'Yes' },
            { key: 'Import / Export Data', value: 'Yes' },
            { key: 'Data Storage', value: '3GB' },
        ]
    },
    {
        id: uid.v4(),
        type: 'Advanced',
        bsStyle: 'danger',
        description: 'For the most advanced users and teams',
        price: 123.00,
        capabilities: [
            { key: 'Android / iOS', value: 'Yes' },
            { key: 'Admin Web Access', value: '51738' },
            { key: 'Appointments', value: 'Yes' },
            { key: 'Import / Export Data', value: 'Yes' },
            { key: 'Data Storage', value: '4GB' },
        ]
    }
];

const typeToColor = style => {
    switch(style) {
        case 'info':
            return Colors.brandInfo;
        case 'primary':
            return Colors.brandPrimary;
        case 'warning':
            return Colors.brandWarning;
        case 'danger':
            return Colors.brandDanger;
    }
}

const PricingTableClean = props => (
    <div className={ classes.tableClean }>
        <Label outline bsStyle={ props.bsStyle }>
            { props.type }
        </Label>
        <div>
            <p className={ classes.price }>
                ${ numeral(props.price).format('0.00') }
            </p>
            <p>
                / month
            </p>
        </div>
        <Divider textPosition='center'>
            Description
        </Divider>
        <p className={ classes.description }>
            { props.description }
        </p>
        <Divider textPosition='center'>
            Capabilities
        </Divider>
        <Table className={ classes.capabilitiesTable }>
            <tbody>
                {
                    _.map(props.capabilities, capability => (
                        <tr key={ hash(capability) }>
                            <td>
                                { capability.key }
                            </td>
                            <td>
                                { capability.value }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        {
            (props.active ? (
                <Button block disabled bsStyle='primary'>
                    <i className='fa fa-check m-r-1'></i>
                    Selected
                </Button>
            ) : (
                <Button block>
                    Upgrade
                </Button>
            ))
        }
    </div>
);

const PricingTable = props => (
    <Panel
        header={
            <div
                className={ classes.header }
                style={ { backgroundColor: typeToColor(props.bsStyle) } }
            >
                <Label outline bsStyle='custom' customColor={ Colors.brandWhite }>
                    { props.type }
                </Label>
                <div>
                    <p className={ classes.price }>
                        ${ numeral(props.price).format('0.00') }
                    </p>
                    <p>
                        / month
                    </p>
                </div>
            </div>
        }
    >
        <Divider>
            Description
        </Divider>
        <p className={ classes.description }>
            { props.description }
        </p>
        <Divider>
            Capabilities
        </Divider>
        <Table className={ classes.capabilitiesTable }>
            <tbody>
                {
                    _.map(props.capabilities, capability => (
                        <tr key={ hash(capability) }>
                            <td>
                                { capability.key }
                            </td>
                            <td>
                                { capability.value }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        <Button block>
            Upgrade
        </Button>
    </Panel>
);

PricingTable.propTypes = PricingTableClean.propTypes = {
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bsStyle: PropTypes.string.isRequired,
    capabilities: PropTypes.array.isRequired,
    active: PropTypes.bool
};

class PricingTables extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <Row>
                        {
                            _.map(tablesData, data => (
                                <Col md={ 3 } className='m-b-3' key={ data.id }>
                                    <PricingTableClean {...data} />
                                </Col>
                            ))
                        }
                    </Row>
                    <Row>
                        {
                            _.map(tablesData, data => (
                                <Col md={ 3 } key={ data.id }>
                                    <PricingTable {...data} />
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(PricingTables);
export {
    PricingTable,
    PricingTableClean
};
