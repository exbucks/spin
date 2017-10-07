import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';
import classNames from 'classnames';
import velocity from 'velocity-animate';

import {
    SIDEBAR_STYLE_SLIM,
    SIDEBAR_STYLE_DEFAULT,
    SIDEBAR_STYLE_BIGICONS
} from 'layouts/DefaultLayout/modules/layout';
import SIDEBAR_CONFIG, { findActiveNodes } from 'routes/routesStructure';

import classes from './../../Sidebar.scss';

let animationInProgress = false;
let lastExpandedNodes = [];

const findSubmenu = (parentNodeElement) => _.find(parentNodeElement.children,
    (childElement) => childElement.tagName === 'UL');

// Animate open and close
const animateOpenNode = (nodeElement, cbComplete, cbStart, animationSettings) => {
    const subMenuElement = findSubmenu(nodeElement);
    animationInProgress = true;

    subMenuElement.style.display = 'block';

    Velocity(subMenuElement, {
        height: [subMenuElement.scrollHeight, 0]
    }, {
        ...animationSettings,
        complete: () => {
            subMenuElement.style.height = null;
            animationInProgress = false;
            cbComplete();
        }
    });

    cbStart({
        heightDiff: subMenuElement.scrollHeight
    });
}

const animateCloseNode = (nodeElement, cbComplete, cbStart, animationSettings) => {
    const subMenuElement = findSubmenu(nodeElement);

    if(!subMenuElement) {
        return;
    }

    animationInProgress = true;

    Velocity(subMenuElement, {
        height: [0, subMenuElement.scrollHeight]
    }, {
        ...animationSettings,
        complete: () => {
            subMenuElement.style.height = null;
            animationInProgress = false;
            cbComplete();
        }
    });

    cbStart({
        heightDiff: -subMenuElement.scrollHeight
    });
}


class Menu extends React.Component {
    static propTypes = {
        currentUrl: PropTypes.string,
        sidebarStyle: PropTypes.string,
        onHeightChange: PropTypes.func,

        animationDuration: PropTypes.node,
        animationEasing: PropTypes.string
    }

    static defaultProps = {
        sidebarStyle: SIDEBAR_STYLE_DEFAULT,
        onHeightChange: () => { },

        animationDuration: 300,
        animationEasing: 'ease-in-out'
    }

    constructor() {
        super();

        this.state = Object.assign({}, this.state, {
            expandedNodes: []
        });
    }

    expandNode(nodeDef, expand = true) {
        if (animationInProgress) {
            return;
        }

        const { state, setState } = this;

        const currentLevelExpandedNode = _.find(state.expandedNodes,
            (node) => node.subMenuLevel === nodeDef.subMenuLevel);

        const nextExpandedNodes = _.without(state.expandedNodes,
            currentLevelExpandedNode);

        const updateState = (expandedNodes) => {
            const newState = Object.assign({}, state, { expandedNodes });
            this.setState(newState);
        }
        // Animate close and update state if no other node will be expanded
        if(currentLevelExpandedNode){
            animateCloseNode(currentLevelExpandedNode.element,
                () => ((!expand) && updateState(nextExpandedNodes)),
                e => { this.props.onHeightChange(e.heightDiff); });
        }

        if(expand) {
            nextExpandedNodes.push(nodeDef);

            animateOpenNode(nodeDef.element, () => updateState(nextExpandedNodes),
                e => { this.props.onHeightChange(e.heightDiff); });
        }
    }

    isNodeExpanded(nodeDef) {
        const { state } = this;

        return _.some(state.expandedNodes, (node) =>
            node.subMenuLevel === nodeDef.subMenuLevel && node.key === nodeDef.key);
    }

    toggleNode(nodeDef) {
        const isExpanded = this.isNodeExpanded(nodeDef);
        this.expandNode(nodeDef, !isExpanded);
    }

    setSidebarNodesHighlights(url) {
        if(this.props.currentUrl) {
            const activeNodes = findActiveNodes(SIDEBAR_CONFIG, url);

            this.setState(Object.assign({}, this.state,
                { activeNodes, expandedNodes: activeNodes }));
        }
    }

    generateLink(nodeDef) {
        const linkContent = [];

        const clickHandler = (nodeDef) => {
            if(this.props.sidebarStyle === SIDEBAR_STYLE_DEFAULT ||
                (this.props.sidebarStyle === SIDEBAR_STYLE_BIGICONS && nodeDef.subMenuLevel > 0)){
                    this.toggleNode(nodeDef);
                }
        };

        if(nodeDef.children) {
            return (
                <a
                    href='javascript:void(0)'
                    onClick={ ()=> clickHandler(nodeDef) }
                    className={ classes.containerLink }
                >
                    { nodeDef.icon ? <i className={ nodeDef.icon }></i> : null }
                    <span className="nav-label">{ nodeDef.title }</span>
                    {
                        nodeDef.sidebarElement ? (
                            nodeDef.sidebarElement
                        ) : (
                            nodeDef.children ? <i className="fa arrow"></i> : null
                        )
                    }
                </a>
            )
        } else {
            return nodeDef.external ? (
                <a href={ nodeDef.url } className={ classes.sidebarLink } target={ nodeDef.newTab ? '_blank' : '_self' }>
                    { nodeDef.icon ? <i className={ nodeDef.icon }></i> : null }
                    <div className={ classes.sidebarLinkText }>
                        <span className="nav-label">{ nodeDef.title }</span>
                        { nodeDef.sidebarElement }
                    </div>
                </a>
            ) : (
                <Link to={ nodeDef.url } className={ classes.sidebarLink }>
                    { nodeDef.icon ? <i className={ nodeDef.icon }></i> : null }
                    <div className={ classes.sidebarLinkText }>
                        <span className="nav-label">{ nodeDef.title }</span>
                        { nodeDef.sidebarElement }
                    </div>
                </Link>
            )
        }
    }

    generateSubNodes(nodeDefs, subMenuLevel = 1, title = false) {
        const nodes = _.map(nodeDefs, (nodeDef) => {
            const classes = classNames({
                'has-submenu': !!nodeDef.children,
                'expanded': this.props.sidebarStyle !== SIDEBAR_STYLE_SLIM && this.isNodeExpanded(nodeDef),
                'nested-active': nodeDef.children && _.contains(this.state.activeNodes, nodeDef),
                'active': nodeDef.url && _.contains(this.state.activeNodes, nodeDef)
            });
            return (
                <li key={nodeDef.key} className={classes} ref={ (element) => nodeDef.element = element }>
                    { this.generateLink(nodeDef) }
                    { nodeDef.children ? this.generateSubNodes(nodeDef.children, subMenuLevel + 1) : null }
                </li>
            );
        });

        return (
            <ul
                className={`submenu-level-${subMenuLevel}`}
                style={ { display: this.props.sidebarStyle === SIDEBAR_STYLE_DEFAULT ? 'block' : '' } }
                data-submenu-title={ title }
            >
                { nodes }
            </ul>
        )
    }

    generateRootNodes(nodeDefs) {
        const { state } = this;

        const nodes = _.map(nodeDefs, (nodeDef) => {
            const classes = classNames('primary-submenu', {
                'has-submenu': !!nodeDef.children,
                'expanded': this.props.sidebarStyle === SIDEBAR_STYLE_DEFAULT && this.isNodeExpanded(nodeDef),
                'nested-active': nodeDef.children && _.contains(this.state.activeNodes, nodeDef),
                'active': nodeDef.url && _.contains(this.state.activeNodes, nodeDef)
            });

            return (
                <li key={nodeDef.key} className={classes} ref={ (element) => nodeDef.element = element }>
                    { this.generateLink(nodeDef) }
                    { nodeDef.children ? this.generateSubNodes(nodeDef.children, 1, nodeDef.title) : null }
                </li>
            );
        });

        return nodes;
    }

    componentWillMount() {
        this.setSidebarNodesHighlights(this.props.currentUrl);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.currentUrl !== this.props.currentUrl) {
            this.setSidebarNodesHighlights(nextProps.currentUrl);
        }

        if(nextProps.sidebarStyle !== this.props.sidebarStyle) {
            if(nextProps.sidebarStyle !== SIDEBAR_STYLE_DEFAULT) {
                this.setState(Object.assign({}, this.state, { expandedNodes: []}));
            } else {
                this.setSidebarNodesHighlights(this.props.currentUrl)
            }
        }
    }

    render() {
        return (
            <ul className="side-menu">
                { this.generateRootNodes(SIDEBAR_CONFIG) }
            </ul>
        );
    }
}

export default Menu;
