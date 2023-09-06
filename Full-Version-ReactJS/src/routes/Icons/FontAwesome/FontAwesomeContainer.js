import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import _ from 'underscore';
import { Row, Col } from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import iconsData from 'consts/data/icons.json';
// ------------------------------------
// Main Container
// ------------------------------------
class FontAwesomeContainer extends RoutedComponent {
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
                        Print this page to PDF for the complete set of vectors. Or to use on the desktop, install FontAwesome.otf, set it as the font in your application, and copy and paste the icons (not the unicode) directly from this page into your designs.
                    </p>

                    <div>
                        {
                            _.map(iconsData.fontAwesome, group => (
                                <section key={ uuidv4() }>
                                    <h5 className='page-header'>
                                        { group.name }
                                    </h5>
                                    <Row>
                                        {
                                            _.map(group.icons, icon => (
                                                <Col md={ 3 } sm={ 4 }>
                                                    <i className={ `fa fa-fw ${ icon.className }` }></i>
                                                    { ' ' }
                                                    { icon.className }
                                                    {
                                                        icon.alias && (
                                                            <span className='text-muted'>
                                                                { ' ' }
                                                                (alias)
                                                            </span>
                                                        )
                                                    }
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </section>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        )
    }
}

export default connect()(FontAwesomeContainer);
