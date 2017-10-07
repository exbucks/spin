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
import resultsData from 'consts/data/search-images.json';

import classes from './../Search.scss';
// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

// ------------------------------------
// Main Container
// ------------------------------------
class SearchImageContainer extends RoutedComponent {
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
                                <Col md={ 4 } sm={ 6 } key={ result._id }>
                                    <Thumbnail
                                        image={(
                                            <Image
                                                phIcon={(<i className='fa fa-picture-o fa-4x'></i>)}
                                                height={ 200 }
                                                phForegroundColor={ Colors.grayDarker }
                                            />
                                        )}
                                        className={ classes.searchResultImage }
                                    >
                                        <h4>{ result.Title }</h4>
                                        <Badge className='m-b-1'>{ result.Domain }</Badge>
                                        <p>
                                            { result.ShortDesc }
                                        </p>
                                    </Thumbnail>
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

export default connect()(SearchImageContainer);
