import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

/*
    Calls an EventHandler when User clicks outside of the child element
*/
class OutsideClick extends React.Component {
    static propTypes = {
        onClickOutside: PropTypes.func,
        children: PropTypes.node,
        excludedElements: PropTypes.array,
        active: PropTypes.bool
    }

    static defaultProps = {
        onClickOutside: () => { },
        excludedElements: [],
        active: true
    }

    componentDidMount() {
        this.rootElement = document.querySelector('#root');

        this.rootElement.addEventListener('click', this.handleDocumentClick);
        this.rootElement.addEventListener('touchstart', this.handleDocumentClick);

        const child = React.Children.only(this.props.children);
        this.childElement = React.cloneElement(child, {
            ref: 'child-ref'
        });
    }

    componentWillUnmount() {
        if(this.rootElement) {
            this.rootElement.removeEventListener('click', this.handleDocumentClick);
            this.rootElement.removeEventListener('touchstart', this.handleDocumentClick);
        }
    }

    handleDocumentClick = (evt) => {
        if(this.props.active) {
            const domElement = ReactDOM.findDOMNode(this.refs['child-ref']);

            const isExcluded = _.some(this.props.excludedElements,
                (element) => element && ReactDOM.findDOMNode(element).contains(evt.target));

            if (!isExcluded && !domElement.contains(evt.target)) {
                this.props.onClickOutside(evt);
            }
        }
    }

    render() {
        const onlyChild = React.Children.only(this.props.children);

        const updatedChild = React.isValidElement(onlyChild) ?
            React.cloneElement(onlyChild, { ref: 'child-ref' }) : onlyChild;

        return updatedChild;
    }
}

export default OutsideClick;
