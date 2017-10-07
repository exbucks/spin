import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';

import { RoutedComponent, connect } from './../../routedComponent';
import { CONTENT_VIEW_STATIC } from './../../../modules/layout';

class ToastrContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>

            </Row>
        );
    }
}

export default connect()(ToastrContainer);
