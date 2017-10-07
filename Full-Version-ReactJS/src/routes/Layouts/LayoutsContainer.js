import React from 'react';
import { Link } from 'react-router';

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
    CONTENT_VIEW_FLUID,
    CONTENT_VIEW_BOXED
} from 'layouts/DefaultLayout/modules/layout';

// Thumbnail Images
import thumbDefaultPage from 'static/docs/spin-layout-options-sidebar-default.png';
import thumbDefaultFixed from 'static/docs/spin-layout-options-sidebar-fixed.png';
import thumbWithoutNavbar from 'static/docs/spin-layout-options-without-navbar.png';
import thumbWithoutFooter from 'static/docs/spin-layout-options-without-footer.png';
import thumbFooterFixed from 'static/docs/spin-layout-options-with-footer-fixed.png';
import thumbOnlyNavbar from 'static/docs/spin-layout-options-navbar-only.png';
import thumbNavbarFixed from 'static/docs/spin-layout-options-navbar-only.png';
import thumbNavbarContainer from 'static/docs/spin-layout-options-navbar-container.png';
import thumbFullWidth from 'static/docs/spin-layout-options-fullwidth.png';
import thumbEmptyPage from 'static/docs/spin-layout-options-empty-page.png';
import thumbBoxedLayout from 'static/docs/spin-layout-options-boxed.png';

import classes from './Layouts.scss';

const layoutsDefs = {
    'default': {
        contentView: CONTENT_VIEW_STATIC
    },
    'fixed': {
        contentView: CONTENT_VIEW_STATIC,
        sidebarFixed: true,
    },
    'without-navbar': {
        contentView: CONTENT_VIEW_STATIC,
        navbarEnabled: false,
    },
    'without-footer': {
        contentView: CONTENT_VIEW_STATIC,
        footerEnabled: false,
    },
    'footer-fixed': {
        contentView: CONTENT_VIEW_STATIC,
        footerFixed: true,
    },
    'navbar': {
        contentView: CONTENT_VIEW_STATIC,
        sidebarEnabled: false,
        footerEnabled: false
    },
    'navbar-fixed': {
        contentView: CONTENT_VIEW_STATIC,
        navbarFixed: true,
    },
    'navbar-container': {
        contentView: CONTENT_VIEW_FLUID,
        sidebarEnabled: false,
    },
    'default-full-width': {
        contentView: CONTENT_VIEW_FLUID,
    },
    'boxed': {
        contentView: CONTENT_VIEW_BOXED,
    },
    'empty-page': {
        contentView: CONTENT_VIEW_FLUID,
        sidebarEnabled: false,
        footerEnabled: false,
        navbarEnabled: false,
        headerEnabled: false
    }
};

class LayoutsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);
    }

    getLayoutOptions() {
        const { layoutType } = this.props.routeParams;

        return layoutsDefs[layoutType] || {
            contentView: CONTENT_VIEW_STATIC
        };
    }

    componentDidUpdate(prevProps) {
        const { layoutType } = this.props.routeParams;
        const { setCurrentPageSettings } = this.props;

        const targetDef = layoutsDefs[layoutType] || {
            contentView: CONTENT_VIEW_STATIC
        };

        setCurrentPageSettings(targetDef);
    }

    render() {
        const { layoutType } = this.props.routeParams;

        if(layoutType === 'empty-page') {
            return (
                <Row>
                    <Col lg={ 12 } className='text-center'>
                        <h1 className='text-center m-b-2'>
                            Empty Page
                        </h1>
                        <p className='m-b-2'>
                            All layout elements disabled, with a Fluid Container only.
                        </p>
                        <a
                            href="javascript:;"
                            onClick={() => {
                                if(!this.props.history.goBack()) {
                                    this.props.history.push('/start/projects');
                                }
                            }}
                        >
                            <i className='fa fa-angle-left'></i> Go Back
                        </a>
                    </Col>
                </Row>
            );
        }

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
                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/default' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbDefaultPage }
                                    active={ layoutType === 'default' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Default
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>

                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/fixed' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbDefaultFixed }
                                    active={ layoutType === 'fixed' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Default Fixed
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>

                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/without-navbar' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbWithoutNavbar }
                                    active={ layoutType === 'without-navbar' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Without Navbar
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>

                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/without-footer' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbWithoutFooter }
                                    active={ layoutType === 'without-footer' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Without Footer
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>

                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/footer-fixed' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbFooterFixed }
                                    active={ layoutType === 'footer-fixed' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Footer Fixed
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>

                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/navbar' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbOnlyNavbar }
                                    active={ layoutType === 'navbar' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Only Navbar
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>

                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/navbar-fixed' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbNavbarFixed }
                                    active={ layoutType === 'navbar-fixed' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Navbar Fixed
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>

                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/navbar-container' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbNavbarContainer }
                                    active={ layoutType === 'navbar-container' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Navbar Container
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>

                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/default-full-width' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbFullWidth }
                                    active={ layoutType === 'default-full-width' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Default Full Width
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>

                        <Col lg={ 2 } md={ 3 } sm={ 6 }>
                            <Link to='/layouts/boxed' className={ classes.galleryLink }>
                                <GalleryThumbnail
                                    src={ thumbBoxedLayout }
                                    active={ layoutType === 'boxed' }
                                >
                                    <p className='m-y-0 text-center text-nowrap'>
                                        Boxed
                                        <i className='fa fa-angle-right m-l-1'></i>
                                    </p>
                                </GalleryThumbnail>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(LayoutsContainer);
