import React from 'react';
import Select from 'react-select';
import _ from 'underscore';
import { RoutedComponent, connect } from 'routes/routedComponent';

import {
    Grid,
    Row,
    Col,
    ColorPicker
} from 'components';

/*
import { ChromePicker, CompactPicker, MaterialPicker, PhotoshopPicker,
         SketchPicker, SliderPicker, SwatchesPicker, BlockPicker,
         GithubPicker, TwitterPicker, HuePicker, AlphaPicker, CirclePicker } from 'react-color'
*/
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import style from './style';

import classes from './reactColor.scss';

class ReactColorContainer extends RoutedComponent {
    constructor() {
        super();

        this.state = {
            h: 150,
            s: 0.50,
            l: 0.20,
            a: 1,
        };

        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    handleChangeComplete(data) {
        if (data.hsl !== this.state) {
            this.setState(data.hsl)
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={ 12 }>
                        <p>
                            A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more. 13 Different Pickers - Sketch, Photoshop, Chrome and many more.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={ 3 }>
                        <h4 className={ classes.pickerTitle }>
                            Sketch
                        </h4>
                        <div className={ classes.pickerWrap }>
                            <ColorPicker.Sketch
                                color={ this.state }
                                onChangeComplete={ this.handleChangeComplete }
                            />
                        </div>
                    </Col>
                    <Col md={ 3 }>
                        <h4 className={ classes.pickerTitle }>
                            Chrome
                        </h4>
                        <div className={ classes.pickerWrap }>
                            <ColorPicker.Chrome
                                color={ this.state }
                                onChangeComplete={ this.handleChangeComplete }
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={ 4 }>
                        <h4 className={ classes.pickerTitle }>
                            Swatches
                        </h4>
                        <div className={ classes.pickerWrap }>
                            <ColorPicker.Swatches
                                color={ this.state }
                                onChangeComplete={ this.handleChangeComplete }
                            />
                        </div>
                    </Col>
                    <Col md={ 4 }>
                        <Row>
                            <Col lg={ 12 }>
                                <h4 className={ classes.pickerTitle }>
                                    Twitter
                                </h4>
                                <div className={ classes.pickerWrap }>
                                    <ColorPicker.Twitter
                                        color={ this.state }
                                        onChangeComplete={ this.handleChangeComplete }
                                        triangle="top-right"
                                    />
                                </div>
                            </Col>
                            <Col lg={ 12 }>
                                <h4 className={ classes.pickerTitle }>
                                    GitHub
                                </h4>
                                <div className={ classes.pickerWrap }>
                                    <ColorPicker.Github
                                        color={ this.state }
                                        onChangeComplete={ this.handleChangeComplete }
                                        triangle="top-right"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col md={ 2 }>
                        <h4 className={ classes.pickerTitle }>
                            Block
                        </h4>
                        <div className={ classes.pickerWrap }>
                            <ColorPicker.Block
                                color={ this.state }
                                onChangeComplete={ this.handleChangeComplete }
                            />
                        </div>
                    </Col>
                    <Col md={ 4 }>
                        <Row>
                            <Col md={ 12 }>
                                <h4 className={ classes.pickerTitle }>
                                    Compact
                                </h4>
                                <div className={ `${classes.pickerWrap} ${classes.compactWrap}` }>
                                    <ColorPicker.Compact
                                        color={ this.state }
                                        onChangeComplete={ this.handleChangeComplete }
                                    />
                                </div>
                            </Col>
                            <Col md={ 12 }>
                                <h4 className={ classes.pickerTitle }>
                                    Slider
                                </h4>
                                <div className={ classes.pickerWrap }>
                                    <ColorPicker.Slider
                                        style={{ width: '100%' }}
                                        color={ this.state }
                                        onChangeComplete={ this.handleChangeComplete }
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*
                <div style={{ display: 'flex' }}>
                    <SketchPicker
                        color={ this.state }
                        onChangeComplete={ this.handleChangeComplete }
                    />
                    <PhotoshopPicker
                        color={ this.state }
                        onChangeComplete={ this.handleChangeComplete }
                    />
                </div>
                <div style={{ display: 'flex' }}>
                    <BlockPicker
                        color={ this.state }
                        onChangeComplete={ this.handleChangeComplete }
                    />
                    <div>
                        <div style={{ display: 'flex' }}>
                            <GithubPicker
                                color={ this.state }
                                onChangeComplete={ this.handleChangeComplete }
                                triangle="top-right"
                            />
                            <div>
                                <HuePicker
                                    color={ this.state }
                                    onChangeComplete={ this.handleChangeComplete }
                                />
                                <AlphaPicker
                                    color={ this.state }
                                    onChangeComplete={ this.handleChangeComplete }
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <TwitterPicker
                                color={ this.state }
                                onChangeComplete={ this.handleChangeComplete }
                                triangle="top-right"
                            />
                            <CirclePicker
                                color={ this.state }
                                onChangeComplete={ this.handleChangeComplete }
                            />
                        </div>
                    </div>
                </div>
                */}
                { /*
                <Row>
                    <Col md={ 4 }>
                        <SketchPicker
                            color={ this.state }
                            onChangeComplete={ this.handleChangeComplete }
                        />
                        <p>Sketch</p>
                    </Col>
                    <Col md={ 8 }>
                        <PhotoshopPicker
                            color={ this.state }
                            onChangeComplete={ this.handleChangeComplete }
                        />
                        <p>Photoshop</p>
                    </Col>
                </Row>
                */ }
            </div>
        );
    }
}

export default connect()(ReactColorContainer);
