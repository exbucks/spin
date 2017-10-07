import React, { PropTypes } from 'react';
import _ from 'underscore';
import classNames from 'classnames';

import { Colors } from './../../consts';

import Avatar from './Avatar';

import classes from './Avatar.scss';

class AvatarImage extends React.Component {
    static defaultProps = {
        src: null,
        placeholder: (<i className='fa fa-user'></i>),
        phColor: Colors.grayLight,
        phBackgroundColor: Colors.grayDark
    };

    static propTypes = {
        src: PropTypes.string,
        placeholder: PropTypes.node,
        phColor: PropTypes.string,
        phBackgroundColor: PropTypes.string
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            imageLoaded: false,
            imageLoadFailed: false
        }
    }

    render() {
        const otherProps = _.omit(this.props, [
            'src',
            'placeholder',
            'phColor',
            'phBackgroundColor'
        ]);

        const phStyle = {
            color: this.props.phColor,
            background: this.props.phBackgroundColor
        };

        const phClass = classNames(classes.avatarPlaceholder, classes.avatarContent);

        return (
            <Avatar { ...otherProps }>
                {
                    !this.state.imageLoadFailed ?
                        (<img
                            src={ this.props.src }
                            className={ classes.avatarContent }
                            onLoad={ () => this.setState({ imageLoaded: true }) }
                            onError={ () => this.setState({ imageLoadFailed: true }) }
                        />) : null
                }
                {
                    !this.state.imageLoaded ?
                        (<div
                            className={ phClass }
                            style={ phStyle }
                        >
                            { this.props.placeholder }
                        </div>) : null
                }
            </Avatar>
        );
    }
}

export default AvatarImage;
