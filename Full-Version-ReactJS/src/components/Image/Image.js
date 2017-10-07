import React, { PropTypes } from 'react';
import Holder from 'react-image-holder';
import classNames from 'classnames';
import _ from 'underscore';

import { Colors } from './../../consts';

import classes from './Image.scss';

const getDimension = (dimension) => {
    if(!dimension)
        return '100%';

    if(typeof dimension === 'string')
        return dimension;

    return `${parseInt(dimension)}px`;
};

class Image extends React.Component {
    static propTypes = {
        src: PropTypes.string,
        phIcon: PropTypes.node,
        phBackgroundColor: PropTypes.string,
        phForegroundColor: PropTypes.string,
        alt: PropTypes.string,
        shape: PropTypes.string,
        className: PropTypes.string,
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        block: PropTypes.bool
    };

    static defaultProps = {
        phIcon: null,
        phBackgroundColor: Colors.grayLight,
        phForegroundColor: '#ffffff',
        alt: '',
        shape: null,
        className: '',
        width: null,
        height: '100px',
        block: false
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            imageLoaded: false
        }
    }

    _renderPlaceholder() {
        if(this.props.phIcon) {
            const icon = React.cloneElement(this.props.phIcon, {
                style: {
                    color: this.props.phForegroundColor
                },
                className: classNames(this.props.phIcon.props.className, classes.icon)
            });

            return (
                <div
                    className={ classes.iconPlaceholder }
                    style={ {
                        background: this.props.phBackgroundColor,
                        width: getDimension(this.props.width),
                        height: '100%'
                    } }
                >
                    { icon }
                </div>
            );
        } else {
            return (
                <Holder
                    src='#'
                    width={ this.props.width || '100p' }
                    height={ this.props.height }
                    usePlaceholder={ true }
                    className={ classes.imagePlaceholder }
                    placeholder={{
                        updateOnResize: true,
                        fg: this.props.phForegroundColor.replace('#', ''),
                        bg: this.props.phBackgroundColor.replace('#', '')
                    }}
                />
            );
        }
    }

    render() {
        const wrapClass = classNames(classes.imageWrap, this.props.className, {
            'img-rounded': this.props.shape === 'rounded',
            'img-circle': this.props.shape === 'circle'
        });

        const otherProps = _.omit(this.props, _.keys(Image.propTypes));

        return (
            <div
                { ...otherProps }
                className={ wrapClass }
                style={ {
                    width: getDimension(this.props.width),
                    height: getDimension(this.props.height),
                    display: this.props.block ? 'block' : 'inline-block'
                } }
            >
                { (!this.state.imageLoaded ? (
                    this._renderPlaceholder()
                ) : null) }
                <img
                    src={ this.props.src }
                    style={ {
                        width: getDimension(this.props.width),
                        height: getDimension(this.props.height),
                        visibility: this.state.imageLoaded ? 'visible' : 'hidden'
                    } }
                    alt={ this.props.alt }
                    className={ classes.image }
                    onLoad={ () => { this.setState({ imageLoaded: true }) } }
                />
            </div>
        );
    }
}

export default Image;
