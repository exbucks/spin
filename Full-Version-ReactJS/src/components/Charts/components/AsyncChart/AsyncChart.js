import React, { PropTypes } from 'react';

import classes from './AsyncChart.scss';

const getSize = value =>
    ((typeof value) === 'string') ? value : `${parseInt(value)}px`;


class AsyncChart extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        getConfig: PropTypes.func.isRequired,
        getJson: PropTypes.func.isRequired
    };

    static defaultProps = {
        width: '100%',
        height: '400px'
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            chartData: null
        }
    }

    componentDidMount() {
        this.props.getJson((data) => {
            this.setState({
                data
            });
        });
    }

    getLoader() {
        return (
            <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 40 40"
                enableBackground="new 0 0 40 40"
                className={ classes.asyncLoader }
            >
                <g>
                    <path
                        fill="#2d2d2d"
                        d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                    />
                    <path
                        fill="#2c97de"
                        d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z"
                    >
                    </path>
                </g>
            </svg>
        );
    }

    getConfigInjectedChild() {
        const onlyChild = React.Children.only(this.props.children);
        return React.cloneElement(onlyChild, {
            config: this.props.getConfig(this.state.data)
        });
    }

    render() {
        const wrapStyle = {
            width: getSize(this.props.width),
            height: getSize(this.props.height)
        };

        return (
            <div className={ classes.asyncWrap } style={ wrapStyle }>
                {
                    (this.state.data ? this.getConfigInjectedChild() : this.getLoader())
                }
            </div>
        );
    }
}

export default AsyncChart;
