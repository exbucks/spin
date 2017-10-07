import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import deepAssign from 'assign-deep';
import numeral from 'numeral';
import { Link } from 'react-router';

import {
    Row,
    Col,
    Panel,
    Button,
    Pagination,
    Badge,
    OverlayTrigger,
    Tooltip,
    AvatarImage,
    FavoriteStar,
    Divider,
    Thumbnail,
    Image
} from 'components';

// Sub Components
import {
    SearchResultTypes,
    SearchPeriod,
    SearchLanguage,
    SearchInput
} from './../components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';
import resultsData from 'consts/data/search-users.json';

import classes from './../Search.scss';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
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

const networkToIconClass = (network) => {
    switch(network) {
        case 'LinkedIn':
            return 'fa fa-linkedin-square';
        case 'Facebook':
            return 'fa fa-facebook-square';
        case 'Twitter':
            return 'fa fa-twitter-square';
        case 'Pinterest':
            return 'fa fa-pinterest-square';
        case 'GitHub':
            return 'fa fa-github-square';
        case 'Xing':
            return 'fa fa-xing-square';
    }

    return null;
}
// ------------------------------------
// Main Container
// ------------------------------------

const renderUserNetworks = (networks) => (
    <div className='text-center'>
        {
            _.map(networks, (network, index) => (
                <OverlayTrigger
                    overlay={(
                        <Tooltip id={ `tooltip-${network}` }>
                            { network }
                        </Tooltip>
                    )}
                    placement='top'
                    key={ index }
                >
                    <i className={`${networkToIconClass(network)} fa-lg m-r-1`}></i>
                </OverlayTrigger>
            ))
        }
    </div>
);

class SearchUserContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            data: getData(resultsData)
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 2 }>
                    <SearchResultTypes />
                    <SearchPeriod />
                    <SearchLanguage />
                </Col>
                <Col lg={ 10 }>
                    <SearchInput
                        resultCount={ this.state.data.ResultsCount }
                        resultTime={ this.state.data.Time }
                        query={ this.state.data.Query }
                    />
                    <Divider className='m-t-3 m-b-2'>
                        Image Results
                    </Divider>
                    <Row>
                        {
                            _.map(this.state.data.Results, (result) => (
                                <Col lg={ 4 } md={ 6 } key={ result._id }>
                                    <Panel>
                                        <div className='text-center'>
                                            <AvatarImage
                                                src={ result.Avatar }
                                                size='large'
                                                showStatus
                                                statusPlacement='bottom'
                                                statusColor={ statusToColor(result.Status) }
                                            />
                                        </div>
                                        <div className={ classes.searchResultUserHeader }>
                                            <h4 className='m-r-1'>
                                                { result.Name }
                                            </h4>
                                            <FavoriteStar
                                                favorited={ !!parseInt(result.Favorited) }
                                            />
                                        </div>
                                        <p className='text-center'>
                                            { result.Title }
                                        </p>
                                        { renderUserNetworks(result.Networks) }
                                    </Panel>
                                </Col>
                            ))
                        }
                    </Row>
                    <div className='text-center'>
                        <Pagination
                            bsSize="medium"
                            items={5}
                            activePage={1}
                            boundaryLinks
                            prev
                            next
                            first
                            last
                            ellipsis
                        />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default connect()(SearchUserContainer);
