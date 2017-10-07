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
    StarRating,
    Divider
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
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';
import resultsData from 'consts/data/search-default.json';

import classes from './../Search.scss';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

// ------------------------------------
// Main Container
// ------------------------------------
class SearchDefaultContainer extends RoutedComponent {
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
                        All Results
                    </Divider>
                    <div>
                        {
                            _.map(this.state.data.Results, (result) => (
                                <div className={ classes.searchResultDefault } key={result._id}>
                                    <h4 className='m-b-0'>
                                        <a href='javascript:void(0)'>
                                            { result.Title }
                                        </a>
                                    </h4>
                                    <a href='javascript:void(0)' className='text-success m-r-2'>
                                        { result.Url }
                                    </a>
                                    <StarRating at={ parseInt(result.Rating) } className='m-r-2'/>
                                    <span>
                                        { numeral(result.Votes).format('0,0') } Votes
                                    </span>
                                    <p className='m-y-1'>
                                        { result.ShortDesc }
                                    </p>
                                </div>
                            ))
                        }
                    </div>
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

export default connect()(SearchDefaultContainer);
