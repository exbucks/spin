import React from 'react';

import {
    Row,
    Col,
    Jumbotron,
    Image,
    Button
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class ImagesAndThumbsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <h4>Images Shapes</h4>
                    <p>Use the <kbd>Image</kbd> component to easily render images with placeholders</p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Examples</strong>
                    </p>
                    <Image
                        height={ 140 }
                        width={ 140 }
                        shape='rounded'
                        className='m-r-1'
                    />
                    <Image
                        height={ 140 }
                        width={ 140 }
                        shape='circle'
                        className='m-r-1'
                    />
                    <Image
                        height={ 140 }
                        width={ 140 }
                    />

                    <h4 className='m-t-3'>Thumbnails</h4>
                    <p>
                        Extend Bootstrap's grid system with the thumbnail component to easily display grids of images, videos, text, and more. If you're looking for Pinterest-like presentation of thumbnails of varying heights and/or widths, you'll need to use a third-party plugin such as Masonry, Isotope, or Salvattore.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Examples</strong>
                    </p>
                    <Row>
                        <Col xs={ 6 } md={ 3 }>
                            <a href='javascript: void(0)' className='thumbnail no-bg'>
                                <Image height={ 180 } block/>
                            </a>
                        </Col>
                        <Col xs={ 6 } md={ 3 }>
                            <a href='javascript: void(0)' className='thumbnail no-bg'>
                                <Image height={ 180 } block/>
                            </a>
                        </Col>
                        <Col xs={ 6 } md={ 3 }>
                            <a href='javascript: void(0)' className='thumbnail no-bg'>
                                <Image height={ 180 } block/>
                            </a>
                        </Col>
                        <Col xs={ 6 } md={ 3 }>
                            <a href='javascript: void(0)' className='thumbnail no-bg'>
                                <Image height={ 180 } block/>
                            </a>
                        </Col>
                    </Row>

                    <h4 className="m-t-3">Custom Content</h4>
                    <p>
                        With a bit of extra markup, it's possible to add any kind of HTML content like headings, paragraphs, or buttons into thumbnails.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Examples</strong>
                    </p>
                    <Row>
                        <Col xs={ 6 } md={ 4 }>
                            <div className='thumbnail no-bg'>
                                <Image height={ 200 } block/>
                                <div className='caption'>
                                    <h4>Thumbnail Label</h4>
                                    <p className="text-gray-light">
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                    </p>
                                    <div>
                                        <Button outline bsStyle='primary'>
                                            Accept
                                        </Button>
                                        { ' ' }
                                        <Button bsStyle='link'>
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={ 6 } md={ 4 }>
                            <div className='thumbnail no-bg'>
                                <Image height={ 200 } block/>
                                <div className='caption'>
                                    <h4>Thumbnail Label</h4>
                                    <p className="text-gray-light">
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                    </p>
                                    <div>
                                        <Button outline bsStyle='primary'>
                                            Accept
                                        </Button>
                                        { ' ' }
                                        <Button bsStyle='link'>
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={ 6 } md={ 4 }>
                            <div className='thumbnail no-bg'>
                                <Image height={ 200 } block/>
                                <div className='caption'>
                                    <h4>Thumbnail Label</h4>
                                    <p className="text-gray-light">
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                    </p>
                                    <div>
                                        <Button outline bsStyle='primary'>
                                            Accept
                                        </Button>
                                        { ' ' }
                                        <Button bsStyle='link'>
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <h4 className="m-t-3">Jumbotron</h4>
                    <p>
                        A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p><Button bsStyle="primary" outline>Learn more</Button></p>
                    </Jumbotron>
                </Col>
            </Row>
        );
    }
}

export default connect()(ImagesAndThumbsContainer);
