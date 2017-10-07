import React, { PropTypes } from 'react';
import classNames from 'classnames';
import classes from './StarRating.scss';

import { Colors } from './../../consts';

const StarRating = (props) => {
    const {
        className,
        max: maxStars,
        at: currentStars,
        starColor,
        onSelect,
        ...otherProps
    } = props;

    const starRatingClass = classNames(classes.starRating, className);

    const isInterctive = !!onSelect;
    const StartElement = isInterctive ? 'a' : 'i';

    return (
        <div className={ starRatingClass } {...otherProps}>
            {
                (() => {
                    const stars = [];

                    for(let i = 1; i <= maxStars; i++) {
                        const starProps = {
                            key: i,
                            className: `fa fa-fw ${ i <= currentStars ? 'fa-star' : 'fa-star-o' }`,
                            style: i <= currentStars ? { color: starColor } : { },
                            href: isInterctive && 'javascript:;',
                            onClick: () => isInterctive && onSelect(i)
                        };

                        stars.push(<StartElement { ...starProps }></StartElement>);
                    }

                    return stars;
                })()
            }
        </div>
    );
};

StarRating.propTypes = {
    max: PropTypes.number,
    at: PropTypes.number,
    starColor: PropTypes.string,
    onSelect: PropTypes.func
};

StarRating.defaultProps = {
    max: 5,
    at: 0,
    starColor: Colors.brandWarning,
};

export default StarRating;
