import React from 'react';

import {
    Row,
    Col,
    Tooltip,
    Popover,
    Panel,
    OverlayTrigger,
    Button
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class TooltipsAndPopoversContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <h4>Tooltips</h4>
                    <p>
                        Inspired by the excellent jQuery.tipsy plugin written by Jason Frame; Tooltips are an updated version, which don't rely on images, use CSS3 for animations, and data-attributes for local title storage. Tooltips with zero-length titles are never displayed.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Panel>
                        { 'Tight pants next level keffiyeh' }
                        <OverlayTrigger placement='top' overlay={ <Tooltip id='first-tooltip'>Tooltip on top</Tooltip> }>
                            <a href="javascript: void(0)">
                                you probably
                            </a>
                        </OverlayTrigger>
                        { `haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel ` }
                        <OverlayTrigger placement='top' overlay={ <Tooltip id='second-tooltip'>Tooltip on top</Tooltip> }>
                            <a href="javascript: void(0)">
                                have a
                            </a>
                        </OverlayTrigger>
                        { ` terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan ` }
                        <OverlayTrigger placement='top' overlay={ <Tooltip id='third-tooltip'>Tooltip on top</Tooltip> }>
                            <a href="javascript: void(0)">
                                whatever keytar
                            </a>
                        </OverlayTrigger>
                        { `, scenester farm-to-table banksy Austin ` }
                        <OverlayTrigger placement='top' overlay={ <Tooltip id='fourth-tooltip'>Tooltip on top</Tooltip> }>
                            <a href="javascript: void(0)">
                                twitter handle
                            </a>
                        </OverlayTrigger>
                        { ` freegan cred raw denim single-origin coffee viral.` }
                    </Panel>

                    <h5 className="m-t-3">Static Tooltip</h5>
                    <p>
                        Four options are available: top, right, bottom, and left aligned.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Panel>
                        <div className='bs-example-tooltip text-center'>
                            <Tooltip placement='left' className='in' id='tooltip-example-left'>
                                Tooltip on the left
                            </Tooltip>
                            <Tooltip placement='top' className='in' id='tooltip-example-top'>
                                Tooltip on the top
                            </Tooltip>
                            <Tooltip placement='bottom' className='in' id='tooltip-example-bottom'>
                                Tooltip on the bottom
                            </Tooltip>
                            <Tooltip placement='right' className='in' id='tooltip-example-right'>
                                Tooltip on the right
                            </Tooltip>
                        </div>
                    </Panel>

                    <h5 className="m-t-3">Color Versions</h5>
                    <p>
                        All 22 colors are available. Just to add to the <kbd>bsStyle</kbd> prop with an appropriate brand color.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Panel>
                        <div className='bs-example-tooltip text-center'>
                            <Tooltip placement='left' className='in' bsStyle='primary' id='tooltip-color-example-left'>
                                Tooltip Primary on the left
                            </Tooltip>
                            <Tooltip placement='top' className='in' bsStyle='info' id='tooltip-color-example-top'>
                                Tooltip Info on the top
                            </Tooltip>
                            <Tooltip placement='bottom' className='in' bsStyle='success' id='tooltip-color-example-bottom'>
                                Tooltip Success on the bottom
                            </Tooltip>
                            <Tooltip placement='right' className='in' bsStyle='warning' id='tooltip-color-example-right'>
                                Tooltip Warning on the right
                            </Tooltip>
                            <Tooltip placement='right' className='in' bsStyle='danger' id='tooltip-color-example-right'>
                                Tooltip Danger on the right
                            </Tooltip>
                        </div>
                    </Panel>

                    <h5 className="m-t-3">Four Directions</h5>
                    <p>
                        Set the <kbd>placement</kbd> property on the <kbd>Tooltip</kbd> or <kbd>OverlayTrigger</kbd> to change the relative position of the tooltip.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Panel>
                        <div className='bs-example-tooltip text-center'>
                            <OverlayTrigger
                                placement='left'
                                overlay={(
                                    <Tooltip id='tooltip-direction-left'>
                                        Tooltip on Left
                                    </Tooltip>
                                )}
                            >
                                <Button>
                                    Tooltip on Left
                                </Button>
                            </OverlayTrigger>
                            { ' ' }
                            <OverlayTrigger
                                placement='top'
                                overlay={(
                                    <Tooltip id='tooltip-direction-top'>
                                        Tooltip on Top
                                    </Tooltip>
                                )}
                            >
                                <Button>
                                    Tooltip on Top
                                </Button>
                            </OverlayTrigger>
                            { ' ' }
                            <OverlayTrigger
                                placement='bottom'
                                overlay={(
                                    <Tooltip id='tooltip-direction-bottom'>
                                        Tooltip on Bottom
                                    </Tooltip>
                                )}
                            >
                                <Button>
                                    Tooltip on Bottom
                                </Button>
                            </OverlayTrigger>
                            { ' ' }
                            <OverlayTrigger
                                placement='right'
                                overlay={(
                                    <Tooltip id='tooltip-direction-right'>
                                        Tooltip on Right
                                    </Tooltip>
                                )}
                            >
                                <Button>
                                    Tooltip on Right
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </Panel>

                    <h4>Popovers</h4>
                    <p>
                        Add small overlays of content, like those on the iPad, to any element for housing secondary information. Popovers whose both title and content are zero-length are never displayed.
                    </p>

                    <h5 className="m-t-3">Static Popover</h5>
                    <p>
                        Four options are available: top, right, bottom, and left aligned.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Examples</strong>
                    </p>
                    <Panel>
                        <div className='bs-example bs-example-popover'>
                            <Popover
                                id="popover-basic-top"
                                placement="top"
                                title="Popover Top"
                            >
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover>
                            <Popover
                                id="popover-basic-right"
                                placement="right"
                                title="Popover Right"
                            >
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover>
                            <Popover
                                id="popover-basic-bottom"
                                placement="bottom"
                                title="Popover Bottom"
                            >
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover>
                            <Popover
                                id="popover-basic-left"
                                placement="left"
                                title="Popover Left"
                            >
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover>
                        </div>
                    </Panel>

                    <h5 className="m-t-3">Color Versions</h5>
                    <p>
                        All 22 colors are available, just add <kbd>bsStyle</kbd> prop and set it to appropriate brand color.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Examples</strong>
                    </p>
                    <Panel>
                        <div className='bs-example bs-example-popover'>
                            <Popover
                                id="popover-primary-top"
                                placement="top"
                                title="Popover Primary Top"
                                bsStyle='primary'
                            >
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover>
                            <Popover
                                id="popover-info-right"
                                placement="right"
                                title="Popover Info Right"
                                bsStyle='info'
                            >
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover>
                            <Popover
                                id="popover-success-bottom"
                                placement="bottom"
                                title="Popover Success Bottom"
                                bsStyle="success"
                            >
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover>
                            <Popover
                                id="popover-warning-left"
                                placement="left"
                                title="Popover Warning Left"
                                bsStyle="warning"
                            >
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover>
                            <Popover
                                id="popover-danger-top"
                                placement="top"
                                title="Popover Danger Top"
                                bsStyle="danger"
                            >
                                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                            </Popover>
                        </div>
                    </Panel>

                    <h5 className="m-t-3">Four directions</h5>
                    <p>
                        Four options are available for positioning. Use the <kbd>placement</kbd> prop on the <kbd>OverlayTrigger</kbd> component for this.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Examples</strong>
                    </p>
                    <Panel>
                        <div className='bs-example-tooltip text-center'>
                            <OverlayTrigger
                                placement='left'
                                trigger='click'
                                overlay={(
                                    <Popover
                                        id="popover-placement-left"
                                    >
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                    </Popover>
                                )}
                            >
                                <Button>
                                    Popover on left
                                </Button>
                            </OverlayTrigger>
                            { ' ' }
                            <OverlayTrigger
                                placement='top'
                                trigger='click'
                                overlay={(
                                    <Popover
                                        id="popover-placement-top"
                                    >
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                    </Popover>
                                )}
                            >
                                <Button>
                                    Popover on top
                                </Button>
                            </OverlayTrigger>
                            { ' ' }
                            <OverlayTrigger
                                placement='bottom'
                                trigger='click'
                                overlay={(
                                    <Popover
                                        id="popover-placement-bottom"
                                    >
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                    </Popover>
                                )}
                            >
                                <Button>
                                    Popover on bottom
                                </Button>
                            </OverlayTrigger>
                            { ' ' }
                            <OverlayTrigger
                                placement='right'
                                trigger='click'
                                overlay={(
                                    <Popover
                                        id="popover-placement-right"
                                    >
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                    </Popover>
                                )}
                            >
                                <Button>
                                    Popover on right
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default connect()(TooltipsAndPopoversContainer);
