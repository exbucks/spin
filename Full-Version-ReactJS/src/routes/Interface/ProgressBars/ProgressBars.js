import React from 'react';

import {
    Row,
    Col,
    ProgressBar,
    SlimProgressBar
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './ProgressBars.scss';

class ProgressBarsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <p>
                        Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.
                    </p>
                    <Row>
                        <Col lg={ 4 }>
                            <h5>Basic Example</h5>
                            <p>
                                Default progress bar.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ProgressBar now={ 60 } />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>With Label</h5>
                            <p>
                                Add <kbd>label</kbd> prop to display a percentage indicator inside the Progress Bar
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ProgressBar now={ 60 } label='60%'/>
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Minimal Width</h5>
                            <p>
                                To ensure that the label text remains legible even for low percentages, consider adding a <kbd>min-width</kbd> to the progress bar.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ProgressBar now={ 10 } label='10%' style={ {minWidth: '30px' } }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={ 4 }>
                            <h5>Contextual Alternatives</h5>
                            <p>
                                Progress bars uses <kbd>bsStyle</kbd> prop for applying color.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ProgressBar now={ 40 } bsStyle='success' />
                            <ProgressBar now={ 25 } bsStyle='info' />
                            <ProgressBar now={ 60 } bsStyle='warning' />
                            <ProgressBar now={ 80 } bsStyle='danger' />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Striped</h5>
                            <p>
                                Uses a gradient to create a striped effect. Not available in IE9 and below.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <ProgressBar now={ 40 } striped bsStyle='success' />
                            <ProgressBar now={ 25 } striped bsStyle='info' />
                            <ProgressBar now={ 60 } striped bsStyle='warning' />
                            <ProgressBar now={ 80 } striped bsStyle='danger' />
                        </Col>
                        <Col lg={ 4 }>
                            <div>
                                <h5>Animated</h5>
                                <p>
                                    Add <kbd>active</kbd> prop to a striped Progress Bar to animate the stripes right to left. Not available in IE9 and below.
                                </p>
                                <p className="small text-uppercase m-t-2">
                                    <strong>Example</strong>
                                </p>
                                <ProgressBar now={ 45 } striped active />
                            </div>
                            <div>
                                <h5>Stacked</h5>
                                <p>
                                    Nest <kbd>Progress Bar</kbd>s to stack them.
                                </p>
                                <p className="small text-uppercase m-t-2">
                                    <strong>Example</strong>
                                </p>
                                <ProgressBar>
                                    <ProgressBar striped bsStyle="success" now={35} key={1} />
                                    <ProgressBar bsStyle="warning" now={20} key={2} />
                                    <ProgressBar striped active bsStyle="danger" now={10} key={3} />
                                </ProgressBar>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={ 4 }>
                            <h5>Slim 3px Version</h5>
                            <p>
                                Use <kbd>SlimProgressBar</kbd> component for a slim alternative.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <SlimProgressBar now={ 60 } />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Slim 6px Version</h5>
                            <p>
                                Set <kbd>size</kbd> prop to <kbd>medium</kbd> for a 6px version.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <SlimProgressBar now={ 60 } size='medium' />
                        </Col>
                        <Col lg={ 4 }>
                            <h5>Slim 9px Version</h5>
                            <p>
                                Set <kbd>size</kbd> prop to <kbd>large</kbd> for a 9px version.
                            </p>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example</strong>
                            </p>
                            <SlimProgressBar now={ 60 } size='large' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(ProgressBarsContainer);
