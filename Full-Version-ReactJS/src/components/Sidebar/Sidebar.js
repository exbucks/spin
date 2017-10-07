import React, { PropTypes } from 'react';
import Velocity from 'velocity-animate';
import _ from 'underscore';
import classNames from 'classnames';
import {
    Menu as SidebarMenu
} from './components';

import classes from './Sidebar.scss';

import {
    AffixWrap,
    ScrollBarContainer
} from './../';

import {
    SIDEBAR_STYLE_SLIM,
    SIDEBAR_STYLE_DEFAULT,
    SIDEBAR_STYLE_BIGICONS
} from 'layouts/DefaultLayout/modules/layout';

// Aggregates SideMenu height changes into one diff for further processing
class HeightChangeAggregator {
    constructor(aggregateResultCallback) {
        this.aggrgateTimeout = 5;
        this.aggregateResultCallback = aggregateResultCallback;
        this.diffs = [];
        this.lastRequestId = null;
    }

    handler() {
        const sumOfDiffs = _.reduce(this.diffs, (mem, val) => mem + val, 0);
        this.aggregateResultCallback(sumOfDiffs);
        this.diffs = [];
    }

    registerHeightChanged(diffValue) {
        window.cancelAnimationFrame(this.lastRequestId);
        this.diffs.push(diffValue);
        this.lastRequestId = window.requestAnimationFrame(() => this.handler());
    }
};

class Sidebar extends React.Component {
    static propTypes = {
        style: PropTypes.string,
        fixed: PropTypes.bool,
        fullHeight: PropTypes.bool,
        affixOffset: PropTypes.number,
        header: PropTypes.node,
        overlay: PropTypes.bool,
        overlayVisible: PropTypes.bool,
        overlayAnimationDuration: PropTypes.number,
        overlayAnimationEasingOpen: PropTypes.string,
        overlayAnimationEasingClose: PropTypes.string,
        children: PropTypes.node.isRequired,

        onHeightChange: PropTypes.func,
        onOverlayClosed: PropTypes.func,
    }

    static defaultProps = {
        style: SIDEBAR_STYLE_DEFAULT,
        affixOffset: 0,
        header: null,
        overlay: false,
        overlayVisible: false,
        overlayAnimationDuration: 300,
        overlayAnimationEasingOpen: 'ease-out',
        overlayAnimationEasingClose: 'ease-in',

        onOverlayClosed: () => { },
        onHeightChange: () => { }
    }

    animateOverlayOpen(element) {
        element.style.display = 'block';

        Velocity(element, 'finish');
        Velocity(element, {
            left: [0, -element.offsetWidth]
        }, {
            duration: this.props.overlayAnimationDuration,
            easing: this.props.overlayAnimationEasingOpen
        });
    }

    animateOverlayClose(element, completeCallback) {
        Velocity(element, 'finish');
        Velocity(element, {
            left: [-element.offsetWidth, 0]
        }, {
            duration: this.props.overlayAnimationDuration,
            easing: this.props.overlayAnimationEasingOpen,
            complete: () => {
                element.style.left = 'auto';
                element.style.display = 'none'
            }
        });
    }

    constructor(props, context) {
        super(props, context);

        this.sidebarElement = null;
        this.heightChangeAggr = new HeightChangeAggregator(this.props.onHeightChange);
    }

    componentWillReceiveProps(nextProps) {
        // Start animation when visibility prop changes
        if(this.props.overlayVisible !== nextProps.overlayVisible && this.refs.sidebar && this.props.overlay) {
            nextProps.overlayVisible ? this.animateOverlayOpen(this.refs.sidebar)
                : this.animateOverlayClose(this.refs.sidebar, this.props.onOverlayClosed);
        }

        if(this.props.overlay !== nextProps.overlay) {
            this.refs.sidebar.style.display =
                !nextProps.overlay || (nextProps.overlay && nextProps.overlayVisible) ?
                    'block' : 'none';
        }
    }

    buildChildren(children) {
        return React.Children.map(children, child => {
            if(child.type === SidebarMenu) {
                return React.cloneElement(child, {
                    onHeightChange: val => this.heightChangeAggr.registerHeightChanged(val),
                    sidebarStyle: this.props.style
                });
            }

            return child;
        });
    }

    render() {
        const otherProps = _.omit(this.props, [..._.keys(Sidebar.propTypes), 'className']);
        const sidebarClass = classNames('sidebar', {
            [`${classes.sidebarFixed}`]: this.props.fixed,
            [`${classes.fullHeight}`]: this.props.fullHeight
        }, this.props.className);

        return (
            <AffixWrap
                offset={ this.props.affixOffset }
                affixAdditionalClass={ classes.affixed }
            >
                <aside
                    className={ sidebarClass }
                    ref='sidebar'
                    { ...otherProps }
                >
                    <ScrollBarContainer
                        noXScrollBar
                        dynamicChildren
                        className={ classes.sidebarScroll }
                        active={ (this.props.fixed && this.props.style === SIDEBAR_STYLE_DEFAULT) }
                    >
                        {
                            this.props.header && React.cloneElement(this.props.header, {
                                className: `${ this.props.header } sidebar-overlay-head`
                            })
                        }

                        <div className='sidebar-content'>
                            { this.buildChildren(this.props.children) }
                        </div>
                    </ScrollBarContainer>
                </aside>
            </AffixWrap>
        );
    }
}

export default Sidebar;
