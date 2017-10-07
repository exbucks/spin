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
    Media,
    Label,
    Image,
    Divider,
    StarRating
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

import { Colors } from 'consts';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import resultsData from 'consts/data/search-video.json';

import classes from './../Search.scss';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const serviceNameToBsStyle = (serviceName) => {
    switch (serviceName) {
        case 'Youtube':
            return 'danger';
        case 'Vimeo':
            return 'primary';
        case 'Dailymotion':
            return 'info';
        case 'Metacafe':
            return 'warning';
        default:
        case 'Other':
            return 'default';
    }
}
// ------------------------------------
// Main Container
// ------------------------------------
class SearchVideoContainer extends RoutedComponent {
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
            <div className={ classes.mainWrap }>
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
                                        <Media>
                                            <Media.Left>
                                                <Image
                                                    width={ 120 }
                                                    height={ 100 }
                                                    phIcon={(
                                                        <i className='fa fa-video-camera fa-fw fa-3x'></i>
                                                    )}
                                                    phForegroundColor={ Colors.grayDark }
                                                    shape='rounded'
                                                />
                                            </Media.Left>
                                            <Media.Body>
                                                <h4 className='m-t-0'>
                                                    <a href='javascript:void(0)'>
                                                        { result.Title }
                                                    </a>
                                                </h4>
                                                <Label
                                                    bsStyle={ serviceNameToBsStyle(result.SourceSite) }
                                                    className='m-r-1'
                                                    outline
                                                >
                                                    { result.SourceSite }
                                                </Label>
                                                <span className='m-r-1'>
                                                    <i className='fa fa-fw fa-clock-o'></i>
                                                    {` ${result.PlayTime}`}
                                                </span>
                                                <StarRating
                                                    at={ parseInt(result.Rating) }
                                                    className='m-r-1'
                                                />
                                                <span>
                                                    { numeral(result.Votes).format('0,0') } Votes
                                                </span>
                                                <p className='m-y-1'>
                                                    { result.ShortDesc }
                                                </p>
                                            </Media.Body>
                                        </Media>
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
            </div>
        );
    }
}

export default connect()(SearchVideoContainer);
