import React from 'react';
import { Link } from 'react-router';
import _ from 'underscore';

import {
    Row,
    Col,
    Table,
    Clearfix,
    Thumbnail,
    GalleryThumbnail,
    Divider
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';

import {
    CONTENT_VIEW_STATIC,

    SIDEBAR_STYLE_DEFAULT,
    SIDEBAR_STYLE_SLIM,
    SIDEBAR_STYLE_BIGICONS,

    SIDEBAR_ADDON_DEFAULT,
    SIDEBAR_ADDON_PROGRESS,
    SIDEBAR_ADDON_MENU,
    SIDEBAR_ADDON_BARS,
    SIDEBAR_ADDON_AVATAR_AND_BARS,
    SIDEBAR_ADDON_AVATAR_AND_NUMBERS,
    SIDEBAR_ADDON_AVATAR_AND_STATS
} from 'layouts/DefaultLayout/modules/layout';

const thumbnailsContext = require.context("static/sidebars-thumbs", true, /^\.\/.*\.png/);

export const sidebars = [
    {
        key: 'sidebar-default',
        name: 'Default',
        def: {
            sidebarStyle: SIDEBAR_STYLE_DEFAULT,
            sidebarAddon: SIDEBAR_ADDON_DEFAULT
        },
        thumb: './sidebar-default-example.png'
    },
    {
        key: 'sidebar-progress',
        name: 'With Progress',
        def: {
            sidebarStyle: SIDEBAR_STYLE_DEFAULT,
            sidebarAddon: SIDEBAR_ADDON_PROGRESS,
            sidebarAside: true
        },
        thumb: './spin-sidebar-w-progress.png'
    },
    {
        key: 'sidebar-menu',
        name: 'With Menu',
        def: {
            sidebarStyle: SIDEBAR_STYLE_DEFAULT,
            sidebarAddon: SIDEBAR_ADDON_MENU,
            sidebarAside: true
        },
        thumb: './spin-sidebar-w-menu.png'
    },
    {
        key: 'sidebar-bars',
        name: 'With Bars',
        def: {
            sidebarStyle: SIDEBAR_STYLE_DEFAULT,
            sidebarAddon: SIDEBAR_ADDON_BARS,
            sidebarAside: true
        },
        thumb: './spin-sidebar-w-bars.png'
    },
    {
        key: 'sidebar-avatar-bars',
        name: 'Avatar & Bars',
        def: {
            sidebarStyle: SIDEBAR_STYLE_DEFAULT,
            sidebarAddon: SIDEBAR_ADDON_AVATAR_AND_BARS,
            sidebarAside: true
        },
        thumb: './spin-sidebar-avatar-&-bars.png'
    },
    {
        key: 'sidebar-aside',
        name: 'Aside',
        def: {
            sidebarStyle: SIDEBAR_STYLE_DEFAULT,
            sidebarAddon: SIDEBAR_ADDON_DEFAULT,
            sidebarAside: true
        },
        thumb: './spin-sidebar-aside.png'
    },
    {
        key: 'sidebar-avatar-numbers',
        name: 'Avatar & Numbers',
        def: {
            sidebarStyle: SIDEBAR_STYLE_DEFAULT,
            sidebarAddon: SIDEBAR_ADDON_AVATAR_AND_NUMBERS,
            sidebarAside: true
        },
        thumb: './spin-sidebar-w-avatar-&-numbers.png'
    },
    {
        key: 'sidebar-avatar-stats',
        name: 'Avatar & Stats',
        def: {
            sidebarStyle: SIDEBAR_STYLE_DEFAULT,
            sidebarAddon: SIDEBAR_ADDON_AVATAR_AND_STATS,
            sidebarAside: true
        },
        thumb: './spin-sidebar-w-avatar-&-stats.png'
    },
    {
        key: 'sidebar-bigicons',
        name: 'Big Icons',
        def: {
            sidebarStyle: SIDEBAR_STYLE_BIGICONS,
            sidebarAddon: SIDEBAR_ADDON_DEFAULT
        },
        thumb: './spin-sidebars-big-icons.png'
    },
    {
        key: 'sidebar-slim',
        name: 'Slim',
        def: {
            sidebarStyle: SIDEBAR_STYLE_SLIM,
            sidebarAddon: SIDEBAR_ADDON_DEFAULT
        },
        thumb: './spin-sidebar-slim.png'
    }
];

const getSidebarByKey = (key) => (
    _.findWhere(sidebars, { key: key }) || {}
);

class SidebarsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);
    }

    getLayoutOptions() {
        const { sidebarKey } = this.props.routeParams;

        const sidebarDef = getSidebarByKey(sidebarKey);

        return {
            ...sidebarDef.def,
            contentView: CONTENT_VIEW_STATIC
        };
    }

    componentDidUpdate(prevProps) {
        const { sidebarKey } = this.props.routeParams;
        const { setCurrentPageSettings } = this.props;

        const sidebarDef = getSidebarByKey(sidebarKey);

        const targetDef = {
            ...sidebarDef.def,
            contentView: CONTENT_VIEW_STATIC
        }

        setCurrentPageSettings(targetDef);
    }

    render() {
        const { sidebarKey } = this.props.routeParams;

        return (
            <Row>
                <Col lg={ 12 }>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis pariatur odio ab excepturi minus blanditiis recusandae incidunt? Earum magni ratione alias, itaque provident excepturi fugiat maxime enim blanditiis accusamus velit quae inventore, quia, totam quaerat eligendi rem nisi qui reprehenderit laboriosam.
                    </p>

                    <Divider>
                        Available options
                    </Divider>

                    <Row className='m-t-2'>
                        {
                            _.map(sidebars, (sidebar, index) => (
                                <Col lg={ 2 } md={ 3 } sm={ 6 } key={ index }>
                                    <Link to={`/sidebars/${ sidebar.key }`}>
                                        <GalleryThumbnail
                                            src={ thumbnailsContext(sidebar.thumb) }
                                            active={ sidebarKey === sidebar.key }
                                        >
                                            <p className='m-y-0 text-center text-nowrap text-primary'>
                                                { sidebar.name }
                                                <i className='fa fa-angle-right m-l-1'></i>
                                            </p>
                                        </GalleryThumbnail>
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(SidebarsContainer);
