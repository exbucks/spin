import React, { PropTypes } from 'react';
import classNames from 'classnames';

/*
    Watches the scroll position and applies affix classses to the child
*/
export default class AffixWrap extends React.Component {
    static propTypes = {
        offset: PropTypes.number,
        affixAdditionalClass: PropTypes.string,
        affixTopAdditionalClass: PropTypes.string,
        children: PropTypes.node.isRequired
    };

    static defaultProps = {
        offset: 0,
        affixAdditionalClass: '',
        affixTopAdditionalClass: ''
    };

    constructor() {
        super();

        this.state = {
            affix: false
        }
    }

    handleScroll() {
        const { offset } = this.props;
        const { affix } = this.state;

        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (!affix && scrollTop >= offset) {
            this.setState({
                affix: true
            });
        }

        if (affix && scrollTop < offset) {
            this.setState({
                affix: false
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    render() {
        const child = React.Children.only(this.props.children);

        const { className } = child.props;
        const { affixAdditionalClass, affixTopAdditionalClass } = this.props;

        const affixClass = this.state.affix ?
            classNames('affix', affixAdditionalClass) :
            classNames('affix-top', affixTopAdditionalClass);

        return React.cloneElement(child, {
            className: classNames(className, affixClass)
        });
    }
};
