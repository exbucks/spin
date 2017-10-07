import React, { PropTypes } from 'react';
import { Thumbnail } from 'react-bootstrap';
import _ from 'underscore';
import classNames from 'classnames';

import classes from './GalleryThumbnail.scss';

const GalleryThumbnail = (props) => {
    const { className, active, ...otherProps } = props;

    const thumbnailClasses = classNames({
        [`${classes.active}`]: active
    }, classes.galleryThumbnail, className);

    return (
        <Thumbnail { ...otherProps } className={ thumbnailClasses }/>
    );
};

GalleryThumbnail.propTypes = {
    active: PropTypes.bool
}

export default GalleryThumbnail;
