import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { SafeAnchor } from 'components';

const Thumbnail = (props) => {
    const { src, alt, image, className, children, ...otherProps } = props;

    const thumbnailClasses = classNames(className, 'thumbnail');

    const Component = props.href ? SafeAnchor : 'div';

    return (
        <Component
            className={ thumbnailClasses }
            {...otherProps}
        >
            {
                !!props.image ?
                    props.image :
                    <img src={ src } alt={ alt } />
            }
            { props.children && (
                <div className='caption'>
                    { props.children }
                </div>
            ) }
        </Component>
    );
}

Thumbnail.propTypes = {
    image: PropTypes.node,
    src: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string
};

Thumbnail.defaultProps = {
    image: null,
    src: '',
    alt: '',
    href: ''
}

export default Thumbnail;
