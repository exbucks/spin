import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Panel as ReactBootstrapPanel } from 'react-bootstrap';
import _ from 'underscore';
import classNames from 'classnames';
import perfectScroll from 'perfect-scrollbar';
import isMobile from 'ismobilejs';

import bsStyleToColor, { isCustomColor } from './../utils/bsStyleToColor';

import { isMacintosh } from './../../modules/helpers';

import classes from './Panel.scss';

class Panel extends React.Component {
    static propTypes = {
        flexHeader: PropTypes.bool,
        maxHeight: PropTypes.number,
        fullBody: PropTypes.bool,
        children: PropTypes.node,
        bsStyle: PropTypes.string,
        borderStyle: PropTypes.string,
        background: PropTypes.string,
        type: PropTypes.string
    }

    static defaultProps = {
        flexHeader: false,
        fullBody: false,
        children: null,
        bsStyle: 'primary',
        borderStyle: 'normal',
        background: null,
        type: ''
    }

    getPanelFooterElement() {
        if(!this.parentElement) {
            return null;
        }

        if(!this.footerElement) {
            this.footerElement = _.find(this.parentElement.children,
                e => e.classList.contains('panel-footer'));
        }
        return this.footerElement || null;
    }

    getPanelHeaderElement() {
        if(!this.parentElement) {
            return null;
        }

        if(!this.headerElement) {
            this.headerElement = _.find(this.parentElement.children,
                e => e.classList.contains('panel-heading'));
        }
        return this.headerElement || null;
    }

    getPanelBodyElement() {
        if(!this.parentElement) {
            return null;
        }

        if(!this.bodyElement) {
            this.bodyElement = _.find(this.parentElement.children,
                e => !(e.classList.contains('panel-heading') || e.classList.contains('panel-footer')));
        }
        return this.bodyElement || null;
    }

    getTargetBorderWidth() {
        switch(this.props.borderStyle) {
            case 'thin':
                return 1;
            case 'thick':
                return 3;
            case 'normal':
            default:
                return 2;
        }
    }

    adjustPanelStructure(maxHeight = false, fullBody = false) {
        if(!this.parentElement) {
            return;
        }

        const { parentElement } = this;

        // Find Panel children parts
        const bodyElement = this.getPanelBodyElement(),
              footerElement = this.getPanelFooterElement(),
              headerElement = this.getPanelHeaderElement();

        // Add custom background color if needed
        parentElement.style.background =
            isCustomColor(this.props.background) && this.props.background;
        if(headerElement) {
            headerElement.style.borderBottomColor =
                isCustomColor(this.props.background) && this.props.background;
        }

        // Add full body class if the content/footer should omit Panel padding
        bodyElement && bodyElement.classList.toggle(classes.fullBody, fullBody);
        footerElement && footerElement.classList.toggle(classes.fullFooter, fullBody);

        // If maxHeight is provided, add overflow and perfectScroll
        if(bodyElement && Number.isInteger(maxHeight)) {
            bodyElement.style.position = 'relative';
            bodyElement.style.maxHeight = `${maxHeight}px`;
            bodyElement.style.overflowY = 'auto';
            bodyElement.style.paddingTop = (maxHeight === 0) ? 0 : null;
            bodyElement.style.paddingBottom = (maxHeight === 0) ? 0 : null;

            //Falback to native scrollbar on mobile devices and OSXes
            if(!bodyElement.classList.contains('ps-container') && !isMobile.any && !isMacintosh()) {
                perfectScroll.initialize(bodyElement, {
                    suppressScrollX: true
                });
            }
        } else {
            // Reset PanelBody style if no fix height is needed
            bodyElement.style.position = null;
            bodyElement.style.maxHeight = null;
            bodyElement.style.overflowY = null;
            bodyElement.style.paddingTop = null;
            bodyElement.style.paddingBottom = null;

            // Remove Perfect scroll if there is one
            bodyElement.classList.contains('ps-container') && perfectScroll.destroy(bodyElement);
        }
    }

    adjustPanelType(type, bsStyle) {
        if(!this.parentElement) {
            return;
        }

        const { parentElement } = this;
        const headerElement = this.getPanelHeaderElement();

        const targetColor = bsStyleToColor(this.props);
        const targetBorderWidth = this.getTargetBorderWidth();

        // Reset
        parentElement.style.borderColor = null;
        parentElement.style.borderWidth = null;

        headerElement && (headerElement.style.backgroundColor = null);

        switch(type) {
            case 'color-border-full':
                parentElement.style.borderColor = targetColor;
                parentElement.style.borderWidth = `${targetBorderWidth}px ${targetBorderWidth} ${targetBorderWidth} ${targetBorderWidth}`;
            break;

            case 'color-border-left':
                parentElement.style.borderLeftColor = targetColor;
                parentElement.style.borderWidth = `1px 1px 1px ${targetBorderWidth}px`;
                //parentElement.style.borderLeftWidth =
            break;

            case 'color-title':
                headerElement && (headerElement.style.backgroundColor = targetColor);
            break;

            case 'color-title-border':
                headerElement && (headerElement.style.backgroundColor = targetColor);
                headerElement && (parentElement.style.borderColor = targetColor);
            break;

            case 'color-border-top':
                parentElement.style.borderTopColor = targetColor;
                parentElement.style.borderWidth = `${targetBorderWidth}px 1px 1px 1px`;
            break;

            case 'color-border-heading':
                headerElement && (headerElement.style.borderBottomColor = targetColor);
                headerElement && (headerElement.style.borderBottomWidth = `${targetBorderWidth}px`);
            break;
        }
    }

    componentWillUnmount() {
        if(this.bodyElement && this.bodyElement.classList.contains('ps-container')) {
            perfectScroll.destroy(this.bodyElement);
        }
    }

    componentDidMount() {
        const {
            maxHeight,
            fullBody,

            type,
            bsStyle
        } = this.props;

        this.adjustPanelStructure(maxHeight, fullBody);
        this.adjustPanelType(type, bsStyle);
    }

    componentWillReceiveProps(nextProps) {
        const structurePropsKeys = ['maxHeight', 'fullBody'];
        const typePropsKeys = ['type', 'bsStyle', 'borderStyle'];

        if(!_.isEqual(_.pick(nextProps, structurePropsKeys), _.pick(this.props, structurePropsKeys))) {
            this.adjustPanelStructure(nextProps.maxHeight, nextProps.fullBody);
        }

        if(!_.isEqual(_.pick(nextProps, typePropsKeys), _.pick(this.props, typePropsKeys))) {
            this.adjustPanelType(nextProps.type, nextProps.bsStyle);
        }
    }

    render() {
        let {
            flexHeader,
            header,
            maxHeight,
            fullBody,
            children,
            className,
            style,
            type,
            bsStyle,
            borderStyle,
            background,
            ...otherProps
        } = this.props;

        // Add a flexHeader (space-between) if a header is present and flexHeader is set
        if(header && React.isValidElement(header)) {
            header = React.cloneElement(header, {
                className: classNames(header.props.className, classes.titleReset, {
                    [`${classes.flexHeader}`]: flexHeader
                })
            });
        }

        const panelClass = classNames({
            [`${classes.panelNoBg}`]: !background,
            [`${classes.panelBgLight}`]: background === 'light',
            [`${classes.panelBgGray}`]: background === 'gray'
        }, className);
        const panelStyle = typeof maxHeight !== 'undefined' ?
            { ...style, overflow: 'hidden' } : style;

        return (
            <ReactBootstrapPanel
                { ...otherProps }
                className={ panelClass }
                header={ header }
                style={ panelStyle }
                ref={ panel => {
                    if(panel && !this.parentElement) {
                        this.parentElement = ReactDOM.findDOMNode(panel);
                    }
                } }
            >
                { children }
            </ReactBootstrapPanel>
        );
    }
}

export default Panel;
