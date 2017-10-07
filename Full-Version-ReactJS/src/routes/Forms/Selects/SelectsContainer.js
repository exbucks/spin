import React from 'react';
import Select from 'react-select';
import _ from 'underscore';
import { RoutedComponent, connect } from 'routes/routedComponent';

import {
    Grid,
    Row,
    Col,
    Button,
    Radio,
    Checkbox
} from 'components';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import {
    States,
    Multiselect,
    Contributors,
    GithubUsers,
    Numeric,
    Boolean,
    CustomRender,
    Creatable,
    CustomComponents
} from './components';

class SelectsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={ 12 }>
                        <p>
                            <strong>React Select</strong> is a flexible Select Input control for <strong>React</strong> with multiselect, autocomplete and async support.
                        </p>
                    </Col>
                    <Col lg={ 4 }>
                        <h4 className='m-b-2'>States</h4>
                        <States />
                    </Col>

                    <Col lg={ 4 }>
                        <h4 className='m-b-2'>Multiselect</h4>
                        <Multiselect />
                    </Col>

                    <Col lg={ 4 }>
                        <h4 className='m-b-2'>Contributors (Async)</h4>
                        <Contributors />
                    </Col>
                </Row>
                <Row className='m-t-3'>
                    <Col lg={ 4 }>
                        <h4 className='m-b-2'>Github users (Async with fetch)</h4>
                        <GithubUsers />
                    </Col>
                    <Col lg={ 4 }>
                        <h4 className='m-b-2'>Numeric Values</h4>
                        <Numeric />
                    </Col>
                    <Col lg={ 4 }>
                        <h4 className='m-b-2'>Boolean Values</h4>
                        <Boolean />
                    </Col>
                </Row>
                <Row className='m-t-3'>
                    <Col lg={ 4 }>
                        <h4 className='m-b-2'>Custom Render Methods</h4>
                        <CustomRender />
                    </Col>
                    <Col lg={ 4 }>
                        <h4 className='m-b-2'>Custom Components</h4>
                        <CustomComponents />
                    </Col>
                    <Col lg={ 4 }>
                        <h4 className='m-b-2'>Custom tag creation</h4>
                        <Creatable />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(SelectsContainer);
