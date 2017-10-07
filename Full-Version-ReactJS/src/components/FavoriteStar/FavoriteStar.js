import React, { PropTypes } from 'react';
import {
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';

/*
    Renders a two-state Favorite Star, with Information Tooltip attached
*/
const FavoriteStar = (props) => {
    const {
        favorited,
        onFavorited,
        showTooltip,
        tooltipTextActive,
        tooltipTextInActive,
        tooltipPlacement,
        ...otherProps
    } = props;

    const tooltipText = !favorited ? tooltipTextInActive : tooltipTextActive;

    return (
        <OverlayTrigger
            placement={ tooltipPlacement }
            overlay={
                <Tooltip id='set-favorite-hint'>
                    { tooltipText }
                </Tooltip>
            }
        >
            <a href='javascript:void(0)' {...otherProps} onClick={ () => onFavorited(!favorited) }>
                {(
                    favorited ?
                        <i className='fa fa-fw fa-star fa-lg text-warning' style={{fontSize: '21px'}}></i> :
                        <i className='fa fa-fw fa-star-o fa-lg text-muted' style={{fontSize: '21px'}}></i>

                )}
            </a>
        </OverlayTrigger>
    );
};

FavoriteStar.propTypes = {
    favorited: PropTypes.bool,
    onFavorited: PropTypes.func,
    tooltipTextActive: PropTypes.string,
    tooltipTextInActive: PropTypes.string,
    tooltipPlacement: PropTypes.string
};

FavoriteStar.defaultProps = {
    favorited: false,
    onFavorited: () => { },
    tooltipTextActive: 'Remove from favorites',
    tooltipTextInActive: 'Add to favorites',
    tooltipPlacement: 'top'
};

export default FavoriteStar;
