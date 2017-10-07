import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import {
    Row,
    Col,
    Panel
} from 'components';

import { isCustomColor } from './../utils/bsStyleToColor';

import classes from './CollapsablePanel.scss';

class CollapasablePanel extends React.Component {
    static propTypes = {
        collapsed: PropTypes.bool,
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        footer: PropTypes.node,
        fill: PropTypes.bool,

        onCollapse: PropTypes.func,
        onClose: PropTypes.func
    };

    static defaultProps = {
        collapsed: false,
        footer: null,
        onCollapse: () => { },
        onClose: () => { }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            collapsed: false,
            targetHeight: props.maxHeight || null,
        };
    }

    collapseHandler() {
        this.setState({ collapsed: !this.state.collapsed });
        this.props.onCollapse(!this.state.collapsed);
    }

    closeHandler() {
        this.props.onClose();
    }

    panelRef(component) {
        if (component && this.state.targetHeight === null) {
            const element = ReactDOM.findDOMNode(component);

            setTimeout(() => {
                this.setState({
                    targetHeight: element.scrollHeight
                });
            }, 0);
        }
    }

    render() {
        const panelClass = classNames(classes.collapsablePanel, {
            collapsedPanel: this.state.collapsed
        }, this.props.className);

        const footerClass = classNames(classes.collapsablePanelFooter, {
            [`${classes.collapsedPanelFooter}`]: this.state.collapsed
        });

        const optionsColorClass = isCustomColor(this.props.background) ? 'text-white' : 'text-muted';

        return (
            <Panel
                maxHeight={ (this.state.collapsed && !!this.state.targetHeight) ? 0 : this.state.targetHeight }
                footer={
                    this.props.footer && (
                        <div className={ footerClass }>
                            { this.props.footer }
                        </div>
                    )
                }
                fullBody
                ref={ panel => { this.panelRef(panel) } }
                className={ panelClass }
                header={
                    <Row className={ classes.collapsablePanelHeader }>
                        <Col md={ 9 } sm={ 8 } className='panel-title-text'>
                            { this.props.title }
                        </Col>
                        <Col md={ 3 } sm={ 4 } className='text-right'>
                            <a href="javascript: void(0)" onClick={ () => this.collapseHandler() }>
                                {
                                    (!this.state.collapsed ? (
                                        <i className={ `fa fa-fw fa-chevron-up ${ optionsColorClass}` }></i>
                                    ) : (
                                        <i className={ `fa fa-fw fa-chevron-down ${ optionsColorClass }` }></i>
                                    ))
                                }
                            </a>
                            <a href="javascript: void(0)" onClick={ () => this.closeHandler() }>
                                <i className={ `fa fa-fw fa-close ${ optionsColorClass }`}></i>
                            </a>
                        </Col>
                    </Row>
                }
                background={ this.props.background }
            >
                <div className={ this.props.fill ? classes.collapsablePanelBodyNoMargin : classes.collapsablePanelBody }>
                    { this.props.children }
                </div>
            </Panel>
        );
    }
}

export default CollapasablePanel;
