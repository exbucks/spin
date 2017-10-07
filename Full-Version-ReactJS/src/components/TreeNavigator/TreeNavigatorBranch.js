import React, { PropTypes } from 'react';
import uid from 'node-uuid';
import _ from 'underscore';
import classNames from 'classnames';
import Velocity from 'velocity-animate';

import classes from './TreeNavigator.scss';

class TreeNavigatorBranch extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        eventKey: PropTypes.string,
        collapsed: PropTypes.bool,
        onActiveLinkFound: PropTypes.func,
        onBranchSelected: PropTypes.func,
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        collapsed: true,
        eventKey: uid.v4(),
        onActiveLinkFound: () => { },
        onBranchSelected: () => { }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            hasActiveLink: false
        };
    }

    findActiveLink(children, path) {
        const foundLinks = React.Children.map(children,
            child => (child.props.to === path) ? child : null);

        return _.first(foundLinks) || null;
    }

    makeBranchActiveIfFound(children, path) {
        if(!!this.findActiveLink(children, path)) {
            this.props.onActiveLinkFound(this.props.eventKey);
            this.setState({
                hasActiveLink: true
            });
        } else {
            this.setState({
                hasActiveLink: false
            });
        }
    }

    animateClose(element) {
        Velocity(element, {
            height: [0, element.scrollHeight]
        }, {
            duration: 200,
            easing: 'ease-in-out'
        });
    }

    animateOpen(element) {
        Velocity(element, {
            height: [element.scrollHeight, 0]
        }, {
            duration: 200,
            easing: 'ease-in-out',
            complete: () => {
                element.style.height = null;
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.currentPath !== this.props.currentPath) {
            this.makeBranchActiveIfFound(nextProps.children, nextProps.currentPath);
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.collapsed !== this.props.collapsed) {
            this.props.collapsed ? this.animateClose(this.refs.branchList) :
                this.animateOpen(this.refs.branchList);
        }
    }

    componentDidMount() {
        this.makeBranchActiveIfFound(this.props.children, this.props.currentPath);

        if(this.props.collapsed) {
            this.refs.branchList.style.height = 0;
        }
    }

    render() {
        const branchClass = classNames({
            [`${classes.expanded}`]: !this.props.collapsed,
            [`${classes.active}`]: this.state.hasActiveLink
        }, classes.treeNavigatorBranch);

        return (
            <li className={ branchClass }>
                <a
                    className={ classes.branchTitle }
                    href='javascript: void(0)'
                    onClick={ () => this.props.onBranchSelected(this.props.eventKey) }
                >
                    { this.props.title }
                </a>
                <ul className={ classes.treeNavigatorBranchList } ref='branchList'>
                    {
                        React.Children.map(this.props.children, (child, index) => {
                            const itemClass = classNames({
                                [`${classes.active}`]: child.props.to === this.props.currentPath
                            }, classes.branchItem);
                            return (
                                <li className={ itemClass } key={ index }>
                                    { child }
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        );
    }
}

export default TreeNavigatorBranch;
