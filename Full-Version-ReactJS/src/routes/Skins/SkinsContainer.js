import React from 'react';
import { Link } from 'react-router';
import _ from 'underscore';

import classes from './Skins.scss';

import { RoutedComponent, connect } from 'routes/routedComponent';
import {
    CONTENT_VIEW_STATIC,
    SKIN_DARK,
    SKIN_LIGHT,
    SKIN_COLOR
} from 'layouts/DefaultLayout/modules/layout';

import {
    Row,
    Col,
    Table,
    Clearfix,
    Thumbnail,
    GalleryThumbnail,
    Divider,
    Badge
} from 'components';

import skinConfigs from './skinConfigs';

const thumbnailsContext = require.context("static/skins-thumbs", true, /^\.\/.*\.png/);

class SkinsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);
    }

    getLayoutOptions() {
        const { navbarSkin, sidebarSkin, skinColor } = this.props.routeParams;

        return {
            navbarSkin,
            sidebarSkin,
            skinColor,
            contentView: CONTENT_VIEW_STATIC
        };
    }

    componentDidUpdate(prevProps) {
        const { navbarSkin, sidebarSkin, skinColor } = this.props.routeParams;
        const { setCurrentPageSettings } = this.props;

        const targetDef = {
            navbarSkin,
            sidebarSkin,
            skinColor,
            contentView: CONTENT_VIEW_STATIC
        };

        setCurrentPageSettings(targetDef);
    }

    getThumbnail({ sidebarSkin, navbarSkin, skinColor }) {
        let fileName = `./${sidebarSkin}-${navbarSkin}-${skinColor}.png`;

        return thumbnailsContext(fileName);
    }

    isThumbnailActive(item) {
        const { navbarSkin, sidebarSkin, skinColor } = this.props.routeParams;

        return navbarSkin === item.navbarSkin &&
                sidebarSkin === item.sidebarSkin &&
                skinColor === item.skinColor;
    }

    render() {
        return (
            <Row>
                <Col lg={ 12 }>
                    <p>
                        It features more than 40 variations of color versions. Below clickable gallery.
                    </p>
                    {
                        _.map(skinConfigs, (configGroup, groupIndex) => (
                            <div key={ groupIndex } className='m-b-2'>
                                <Divider textPosition='center'>
                                    { configGroup.title }
                                    <Badge className='m-l-1'>{ configGroup.items.length }</Badge>
                                </Divider>
                                <Row className='p-t-2'>
                                    {
                                        _.map(configGroup.items, (item, itemIndex) => (
                                            <Col lg={ 2 } md={ 3 } sm={ 6 } key={ itemIndex }>
                                                <Link
                                                    to={ `/skins/${item.sidebarSkin}/${item.navbarSkin}/${item.skinColor}` }
                                                    className={ classes.galleryLink }
                                                >
                                                    <GalleryThumbnail
                                                        src={ this.getThumbnail(item) }
                                                        active={ this.isThumbnailActive(item) }
                                                    >
                                                        <p className='m-y-0 text-center text-nowrap text-primary'>
                                                            { item.title }
                                                            <i className='fa fa-angle-right m-l-1'></i>
                                                        </p>
                                                    </GalleryThumbnail>
                                                </Link>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </div>
                        ))
                    }
                </Col>
            </Row>
        );
    }
}

export default connect()(SkinsContainer);
