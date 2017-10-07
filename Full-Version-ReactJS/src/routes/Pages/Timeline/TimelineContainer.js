import React from 'react';
import { Row, Col, Panel, Label, Button, Media } from 'react-bootstrap';
import uid from 'node-uuid';

import { RoutedComponent, connect } from 'routes/routedComponent';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import {
    HorizontalTimeline,
    VerticalTimeline,
    VerticalInnerDateTimeline
} from './components';

import classes from './Timeline.scss';

class TimelineContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row className={ classes.mainWrap }>
                <Col lg={ 12 }>
                    <p>
                        It may seem super redundant, but given the widespread use of tables for other plugins like calendars and date pickers, we've opted to isolate our custom table styles.
                    </p>
                </Col>
                <Col lg={ 8 }>
                    <VerticalTimeline />
                </Col>
                <Col lg={ 4 }>
                    <Panel
                        className={ classes.boxPanel }
                        header={
                            <div className={ classes.boxPanelHeader }>
                                <div>Timeline</div>
                                <Button bsSize='small'>
                                    <i className="fa fa-pencil"></i>
                                </Button>
                            </div>
                        }
                    >
                        <VerticalInnerDateTimeline />
                    </Panel>
                </Col>
                <Col lg={ 12 }>
                    <div className="hr-text hr-text-center m-t-1 m-b-1">
                        <h6 className="text-white"><strong>Timeline #2</strong></h6>
                    </div>
                    <HorizontalTimeline />
                </Col>
            </Row>
        );
    }
}

export default connect()(TimelineContainer);
