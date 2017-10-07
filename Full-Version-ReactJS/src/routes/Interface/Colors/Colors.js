import React, { PropTypes } from 'react';

import {
    Row,
    Col,
    Panel
} from 'components';

import { Colors } from 'consts';
import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './Colors.scss';

const ColorSwatch = (props) => (
    <Panel
        className={ classes.swatchPanel }
        footer={(
            <div className={ classes.swatchFooter }>
                <p className="small text-muted text-uppercase">
                    <strong>{ props.name }</strong>
                </p>

                <small className={ classes.keyValColor }>
                    <span>HEX</span>
                    <span>{ props.hexColor }</span>
                </small>

                <small className={ classes.keyValColor }>
                    <span>RGB</span>
                    <span>{ props.rgbColor }</span>
                </small>

                <small className={ classes.keyValColor }>
                    <span>CMYK</span>
                    <span>{ props.cmykColor }</span>
                </small>

                <small className={ classes.keyValColor }>
                    <span>SCSS</span>
                    <span>{ props.scssVariable }</span>
                </small>
            </div>
        )}
    >
        <div
            className={ classes.swatchBody }
            style={ {backgroundColor: props.color} }
        ></div>
    </Panel>
);

ColorSwatch.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    hexColor: PropTypes.string.isRequired,
    rgbColor: PropTypes.string.isRequired,
    cmykColor: PropTypes.string.isRequired,
    scssVariable: PropTypes.string.isRequired
}

class ColorsContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div>
                {/* =============GrayScale Colors============*/}
                <Row>
                    <Col md={12}>
                        <p>
                            Bootstrap's CSS is built on Less, a preprocessor with additional functionality like variables, mixins, and functions for compiling CSS. Those looking to use the source Less files instead of our compiled CSS files can make use of the numerous variables and mixins we use throughout the framework.
                        </p>

                        <h5 className='m-t-3'>
                            Grayscale
                        </h5>
                        <p>
                            Grayscale colors provide quick access to commonly used shades of black while semantic include various colors assigned to meaningful contextual values.
                        </p>
                    </Col>
                </Row>
                <Row className='m-t-3'>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Gray-Darker'
                            color={ Colors.grayDarker }
                            hexColor='#262626'
                            rgbColor='38 38 38'
                            cmykColor='71% 65% 64% 69%'
                            scssVariable='$gray-darker'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Gray-Dark'
                            color={ Colors.grayDark }
                            hexColor='#2d2d2d'
                            rgbColor='45 45 45'
                            cmykColor='70% 64% 63% 64%'
                            scssVariable='$gray-dark'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Gray'
                            color={ Colors.gray }
                            hexColor='#383838'
                            rgbColor='56 56 56'
                            cmykColor='69% 62% 61% 54%'
                            scssVariable='$gray'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Gray-Light'
                            color={ Colors.grayLight }
                            hexColor='#444444'
                            rgbColor='68 68 68'
                            cmykColor='67% 60% 59% 33%'
                            scssVariable='$gray-light'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Gray-Lighter'
                            color={ Colors.grayLighter }
                            hexColor='#5c5c5c'
                            rgbColor='92 92 92'
                            cmykColor='61% 54% 53% 26%'
                            scssVariable='$gray-lighter'
                        />
                    </Col>
                </Row>
                {/* =============Default Colors============*/}
                <Row>
                    <Col md={12}>
                        <h5 className='m-t-3'>
                            Custom Colors
                        </h5>
                        <p>
                            Different colors used especially in charts, graphs and custom configurations for different buttons, panels, or sliders.
                        </p>
                    </Col>
                </Row>
                <Row className='m-t-3'>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Primary'
                            color={ Colors.brandPrimary }
                            hexColor='#2d99dc'
                            rgbColor='45 153 220'
                            cmykColor='72% 29% 0% 0%'
                            scssVariable='$brand-primary'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Info'
                            color={ Colors.brandInfo }
                            hexColor='#35bda8'
                            rgbColor='53 189 168'
                            cmykColor='70% 0% 44% 0%'
                            scssVariable='$brand-info'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Success'
                            color={ Colors.brandSuccess }
                            hexColor='#86b34d'
                            rgbColor='134 179 77'
                            cmykColor='54% 9% 96% 0%'
                            scssVariable='$brand-success'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Warning'
                            color={ Colors.brandWarning }
                            hexColor='#e66c40'
                            rgbColor='230 108 64'
                            cmykColor='5% 70% 86% 0%'
                            scssVariable='$brand-warning'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Danger'
                            color={ Colors.brandDanger }
                            hexColor='#cb3e4b'
                            rgbColor='203 62 75'
                            cmykColor='14% 90% 70% 3%'
                            scssVariable='$brand-danger'
                        />
                    </Col>
                </Row>
                {/* =============Custom Colors============*/}
                <Row>
                    <Col md={12}>
                        <h5 className='m-t-3'>
                            Custom Colors
                        </h5>
                        <p>
                            Different colors used especially in charts, graphs and custom configurations for different buttons, panels, or sliders.
                        </p>
                    </Col>
                </Row>
                <Row className='m-t-3'>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Cerulean'
                            color={ Colors.brandCerulean }
                            hexColor='#08a5e1'
                            rgbColor='8 165 225'
                            cmykColor='73% 20% 0% 0%'
                            scssVariable='$brand-cerulan'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Curious-Blue'
                            color={ Colors.brandCuriousBlue }
                            hexColor='#08a5e1'
                            rgbColor='42 136 197'
                            cmykColor='79% 39% 0% 0%'
                            scssVariable='$brand-curious-blue'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Endaveour'
                            color={ Colors.brandEndaveour }
                            hexColor='#0058a1'
                            rgbColor='0 88 161'
                            cmykColor='97% 74% 3% 0%'
                            scssVariable='$brand-endaveour'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Minsk'
                            color={ Colors.brandMinsk }
                            hexColor='#343286'
                            rgbColor='51 50 134'
                            cmykColor='98% 100% 9% 1%'
                            scssVariable='$brand-minsk'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Eminence'
                            color={ Colors.brandEminence }
                            hexColor='#732c86'
                            rgbColor='115 44 134'
                            cmykColor='67% 100% 7% 1%'
                            scssVariable='$brand-eminence'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Violet-Eggplant'
                            color={ Colors.brandVioletEggplant }
                            hexColor='#a82084'
                            rgbColor='168 32 132'
                            cmykColor='37% 100% 7% 0%'
                            scssVariable='$brand-violet-eggplant'
                        />
                    </Col>
                </Row>
                <Row className='m-t-3'>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Mint-Green'
                            color={ Colors.brandMintGreen }
                            hexColor='#78fd9a'
                            rgbColor='120 253 154'
                            cmykColor='46% 0% 63% 0%'
                            scssVariable='$brand-mint-green'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Aquamarine'
                            color={ Colors.brandAquamarine }
                            hexColor='#68fee0'
                            rgbColor='104 254 224'
                            cmykColor='46% 0% 26% 0%'
                            scssVariable='$brand-aquamarine'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Malibu'
                            color={ Colors.brandMalibu }
                            hexColor='#6bc1fd'
                            rgbColor='107 193 253'
                            cmykColor='49% 13% 0% 0%'
                            scssVariable='$brand-malibu'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Dodger-Blue'
                            color={ Colors.brandDodgerBlue }
                            hexColor='#5b73fc'
                            rgbColor='91 115 253'
                            cmykColor='73% 62% 0% 0%'
                            scssVariable='$brand-dodger-blue'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Heliotrope'
                            color={ Colors.brandHeliotrope }
                            hexColor='#a072fc'
                            rgbColor='160 114 252'
                            cmykColor='87% 65% 76% 87%'
                            scssVariable='$brand-heliotrope'
                        />
                    </Col>
                    <Col lg={2}>
                        <ColorSwatch
                            name='Brand-Perfume'
                            color={ Colors.brandPerfume }
                            hexColor='#f384fc'
                            rgbColor='243 132 252'
                            cmykColor='18% 53% 0% 0%'
                            scssVariable='$brand-perfume'
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(ColorsContainer);
