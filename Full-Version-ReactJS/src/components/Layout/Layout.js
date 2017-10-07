import React, { PropTypes } from 'react';
import _ from 'underscore';
import classNames from 'classnames';

import { Sidebar, OutsideClick, Navbar } from 'components';

import updateChildElementOfType from './../utils/updateChildElementOfType';

import {
    CONTENT_VIEW_STATIC,
    CONTENT_VIEW_FLUID,
    CONTENT_VIEW_BOXED,

    SIDEBAR_STYLE_DEFAULT,
    SIDEBAR_STYLE_SLIM,
    SIDEBAR_STYLE_BIGICONS,

    SKIN_DARK,
    SKIN_LIGHT,
    SKIN_COLOR,

    SKIN_COLOR_PRIMARY,
    SKIN_COLOR_INFO,
    SKIN_COLOR_SUCCESS,
    SKIN_COLOR_WARNING,
    SKIN_COLOR_DANGER,

    HEADER_STYLE_SIMPLE,
    HEADER_STYLE_BREADCRUMBS,

    SCREEN_SIZE_LG,
    SCREEN_SIZE_MD,
    SCREEN_SIZE_SM,
    SCREEN_SIZE_XS
} from 'layouts/DefaultLayout/modules/layout';

class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,

        screenSizeChanged: PropTypes.func,

        navbarEnabled: PropTypes.bool,
        navbarFixed: PropTypes.bool,
        sidebarEnabled: PropTypes.bool,
        sidebarStyle: PropTypes.string,
        sidebarFixed: PropTypes.bool,
        sidebarAside: PropTypes.bool,
        contentView: PropTypes.string,
        footerEnabled: PropTypes.bool,
        footerFixed: PropTypes.bool,
        rightSidebarEnabled: PropTypes.bool,
        headerStyle: PropTypes.string,
        headerEnabled: PropTypes.bool,

        sidebarSkin: PropTypes.string,
        navbarSkin: PropTypes.string,
        skinColor: PropTypes.string
    };

    static defaultProps = {
        screenSizeChanged: () => { },

        navbarEnabled: true,
        navbarFixed: false,
        sidebarEnabled: true,
        sidebarStyle: SIDEBAR_STYLE_DEFAULT,
        sidebarFixed: true,
        sidebarAside: false,
        contentView: CONTENT_VIEW_STATIC,
        footerEnabled: true,
        footerFixed: false,
        rightSidebarEnabled: false,
        headerStyle: HEADER_STYLE_BREADCRUMBS,
        headerEnabled: true,

        sidebarSkin: SKIN_DARK,
        navbarSkin: SKIN_DARK,
        skinColor: SKIN_COLOR_PRIMARY
    };

    constructor(props, context) {
        super(props, context);

        this.currentScreenSize = SCREEN_SIZE_LG;
    }

    buildChildren(children) {
        return updateChildElementOfType(children, [Layout.Navigation, OutsideClick], [
            {
                targetType: Sidebar,
                props: {
                    onHeightChange: additionalHeight => this.updateContentHeight(additionalHeight),
                    fixed: this.props.sidebarFixed && this.props.sidebarStyle === SIDEBAR_STYLE_DEFAULT,
                    fullHeight: this.props.sidebarAside,
                    style: this.props.sidebarStyle
                }
            },
            {
                targetType: Navbar,
                props: (prevProps) => ({
                    // Force Inverse Disable and adjust the color with skin props
                    className: `${prevProps.className || ''} ${ this.getNavbarSkinClass(this.props.navbarSkin, this.props.skinColor) }`,
                    inverse: false
                })
            }
        ]);
    }

    updateContentHeight(additionalHeight = 20) {
        const {
            contentElement,
            footerElement,
            navbarElement,
            sidebarElement,
            windowElement
        } = this;

        const sidebarRect = sidebarElement.getBoundingClientRect();

        const windowHeight = windowElement.innerHeight,
              sidebarHeight = (sidebarElement.scrollHeight + sidebarRect.top + window.scrollY) + additionalHeight;

        // Determine to use window height ot sidebar height
        const targetHeight = (windowHeight > sidebarHeight || !this.props.sidebarEnabled || this.props.sidebarFixed)
            ? windowHeight : sidebarHeight;

        // Reset the previous content minHeight
        contentElement.style.minHeight = null;

        // Get footer height by visibility
        const footerHeight =
            footerElement && this.props.footerEnabled && (!this.props.footerFixed)
                ? footerElement.offsetHeight : 0;
        // Get navbar height based on visibility
        const navbarHeight =
            navbarElement && this.props.navbarEnabled
                ? navbarElement.offsetHeight : 0;

        // Calculate the height diff and apply it
        const minHeight = targetHeight - footerHeight - navbarHeight;

        contentElement.style.minHeight = minHeight + 'px';
    };

    findNodes(parent) {
        if(parent) {
            this.contentElement = parent.querySelector('.main-wrap > .content');
            this.sidebarElement = parent.querySelector('.main-wrap > .navigation > .sidebar');
            this.navbarElement = parent.querySelector('.main-wrap > .navigation .navbar');
            this.footerElement = parent.querySelector('.main-wrap > footer');

            this.windowElement = window;
        }
    }

    responsiveHandler() {
        let newScreenSize = '';

        if(window.matchMedia('(max-width: 767px)').matches) {
            newScreenSize = SCREEN_SIZE_XS;
        }else if(window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
            newScreenSize = SCREEN_SIZE_SM;
        }else if(window.matchMedia('(min-width: 992px) and (max-width: 1199px)').matches) {
            newScreenSize = SCREEN_SIZE_MD;
        }else if(window.matchMedia('(min-width: 1200px)').matches) {
            newScreenSize = SCREEN_SIZE_LG;
        }

        if(newScreenSize !== this.currentScreenSize) {
            this.currentScreenSize = newScreenSize;
            this.props.screenSizeChanged(newScreenSize);
        }
    };

    getSidebarSkinClass(sidebarSkin, skinColor) {
        switch(sidebarSkin) {
            case SKIN_DARK:
                return `sidebar-dark-${ skinColor }`;
            case SKIN_LIGHT:
                return `sidebar-light-${ skinColor }`;
            case SKIN_COLOR:
                return `sidebar-${ skinColor }`;
        }
    };

    getNavbarSkinClass(navbarSkin, skinColor) {
        switch(navbarSkin) {
            case SKIN_DARK:
                return 'navbar-inverse';
            case SKIN_LIGHT:
                return 'navbar-default';
            case SKIN_COLOR:
                return `navbar-${ skinColor }`;
        }
    };

    getConfigurationClasses() {
        const skinClasses = this.getSidebarSkinClass(this.props.sidebarSkin
            , this.props.skinColor);

        return classNames({
            'sidebar-disabled': !this.props.sidebarEnabled,
            'sidebar-fixed': this.props.sidebarFixed,
            'sidebar-full-height': this.props.sidebarAside,
            'navbar-disabled': !this.props.navbarEnabled,
            'navbar-fixed': this.props.navbarFixed,
            'footer-disabled': !this.props.footerEnabled,
            'footer-fixed': this.props.footerFixed,
            'sidebar-slim': this.props.sidebarEnabled && this.props.sidebarStyle === SIDEBAR_STYLE_SLIM,
            'sidebar-big-icons': this.props.sidebarEnabled && (this.props.sidebarStyle === SIDEBAR_STYLE_BIGICONS),
            'boxed-layout': this.props.contentView === CONTENT_VIEW_BOXED,
            'sub-navbar-disabled': !this.props.headerEnabled,
            'sub-navbar-header-only': this.props.headerStyle === HEADER_STYLE_SIMPLE,
            'sidebar-overlay': this.props.currentScreenSize === SCREEN_SIZE_XS,
            'sidebar-overlay__open': this.props.overlaySidebarOpen
        }, skinClasses);
    };

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.updateContentHeight();
            this.responsiveHandler();
        });

        setTimeout(() => {
            this.updateContentHeight();
        }, 5);

        this.responsiveHandler();
    }

    componentDidUpdate(prevProps) {
        const propsToCheck = [
            'navbarEnabled', 'navbarFixed', 'sidebarFixed', 'sidebarStyle',
            'footerEnabled', 'footerFixed'
        ]

        if(!_.isEqual(_.pick(prevProps, propsToCheck), _.pick(this.props, propsToCheck))) {
            this.updateContentHeight();
        }
    }

    render() {
        const { children, className, ...otherProps } = this.props;

        const adjustedChildren = this.buildChildren(children);

        const appClasses = classNames(this.getConfigurationClasses(), className);

        return (
            <div
                id="application"
                className={ appClasses }
                ref={ parent => this.findNodes(parent) }
            >
                <div className="main-wrap">
                    { adjustedChildren }
                </div>
            </div>
        )
    }
}

export default Layout;
