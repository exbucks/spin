import React from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import {
    Row,
    Col,
    Divider
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';
import iconsData from 'consts/data/icons.json';

import classes from './GlyphIcons.scss';
// ------------------------------------
// Main Container
// ------------------------------------
class GlyphIconsContainer extends RoutedComponent {
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
                        Includes over 250 glyphs in font format from the Glyphicon Halflings set. Glyphicons Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that you include a link back to Glyphicons whenever possible.
                    </p>

                    <div className={ classes.iconsContainer }>
                        {
                            _.map(iconsData.glyphIcons, (icon, index) => (
                                <div className={ classes.iconElement } key={ index }>
                                    <span className={ `${ classes.icon } ${icon}` }></span>
                                    <p className='m-t-2'>
                                        { icon }
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        )
    }
}

export default connect()(GlyphIconsContainer);
