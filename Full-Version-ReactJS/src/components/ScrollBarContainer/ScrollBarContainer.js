import React, { PropTypes } from 'react';
import Ps from 'perfect-scrollbar';
import _ from 'underscore';

import 'perfect-scrollbar/dist/css/perfect-scrollbar.css';

class ScrollBarContainer extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        componentClass: PropTypes.string,
        notRelative: PropTypes.bool,
        noXScrollBar: PropTypes.bool,
        noYScrollBar: PropTypes.bool,
        dynamicChildren: PropTypes.bool,
        active: PropTypes.bool
    };

    static defaultProps = {
        notRelative: false,
        componentClass: 'div',
        noXScrollBar: false,
        noYScrollBar: false,
        dynamicChildren: false,
        active: true
    };

    constructor(props, context) {
        super(props, context);

        this.initialized = false;
        this.timeout = null;
        this.mutationObserver = new MutationObserver(mutations => {
            this.updatePerfectScrollbar();
        });
    }

    componentWillUnmount() {
        this.destroyPerfectScroll();
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.updatePerfectScrollbar());
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.active !== nextProps.active) {
            nextProps.active ? this.initPerfectScroll() : this.destroyPerfectScroll();
        }
    }

    updatePerfectScrollbar() {
        if(this.scrollContainer && this.initialized) {
            // Make a 20ms debounce
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                Ps.update(this.scrollContainer);
            }, 20);
        }
    }

    initPerfectScroll() {
        if(this.scrollContainer && !this.initialized) {
            if(!this.props.notRelative) {
                this.scrollContainer.style.position = 'relative';
            }
            Ps.initialize(this.scrollContainer, {
                suppressScrollX: this.props.noXScrollBar,
                suppressScrollY: this.props.noYScrollBar
            });

            if(this.props.dynamicChildren) {
                this.mutationObserver.observe(this.scrollContainer, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['class']
                });
            }

            this.initialized = true;
        }
    }

    destroyPerfectScroll() {
        if(this.scrollContainer && this.initialized) {
            Ps.destroy(this.scrollContainer);
            this.mutationObserver.disconnect();
            this.initialized = false;
        }
    }

    render() {
        const otherProps = _.omit(this.props, _.keys(ScrollBarContainer.propTypes));

        this.updatePerfectScrollbar();

        return (
            <this.props.componentClass
                {...otherProps}
                ref={
                    (element) => {
                        if(!this.scrollContainer) {
                            this.scrollContainer = element;
                        }
                        this.props.active && this.initPerfectScroll(element);
                    }
                }
            >
                { this.props.children }
            </this.props.componentClass>
        );
    }
}


export default ScrollBarContainer;
