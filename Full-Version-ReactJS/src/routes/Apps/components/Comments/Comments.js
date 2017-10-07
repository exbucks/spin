import React, { PropTypes } from 'react';
import _ from 'underscore';

import { Media, AvatarImage, OverlayTrigger, Tooltip } from 'components';

import { Colors } from 'consts';

const statusToColor = (status) => {
    switch(status) {
        case 'Online':
            return Colors.brandSuccess;
        case 'Busy':
            return Colors.brandDanger;
        case 'Away':
            return Colors.brandWarning;
        default:
        case 'Offline':
            return Colors.grayLighter;
    }
}

const renderComment = (comment, index) => (
    <Media
        key={ comment._id || comment.id || index }
        className='m-t-2'
    >
        <Media.Left>
            <AvatarImage
                src={ comment.Sender.Avatar }
                showStatus
                statusPlacement='bottom'
                statusColor={ statusToColor(comment.Sender.CurrentStatus) }
            />
        </Media.Left>
        <Media.Body>
            <Media.Heading
                componentClass='h5'
            >
                { comment.Sender.Name }
                <small className='m-l-1'>
                    { comment.DateAdded }
                </small>
            </Media.Heading>
            <p>
                { comment.Content }
            </p>
            <div>
                <span className='text-white'>
                    { `${comment.Likes} ` }
                </span>

                <OverlayTrigger
                    placement='top'
                    overlay={
                        <Tooltip id='tooltip-vote-up'>
                            Vote Up
                        </Tooltip>
                    }
                >
                    <a href='javascript:void(0)'>
                        <i className='fa fa-angle-up fa-fw text-success'></i>
                    </a>
                </OverlayTrigger>

                <OverlayTrigger
                    placement='top'
                    overlay={
                        <Tooltip id='tooltip-vote-down'>
                            Vote Down
                        </Tooltip>
                    }
                >
                    <a href='javascript:void(0)'>
                        <i className="fa fa-fw fa-angle-down text-danger"></i>
                    </a>
                </OverlayTrigger>

                <a href="javascript: void(0)"
                    className='m-l-1'
                >Reply</a>
            </div>
            { /* Sub-Comments (replies) */ }
            <div>
                {
                    _.map(comment.Replies, (reply, index) => renderComment(reply, index))
                }
            </div>
        </Media.Body>
    </Media>
);

const Comments = props => {
    const { data } = props;

    return (
        <div>
            {
                _.map(data, (comment, index) => ( renderComment(comment, index) ))
            }
        </div>
    );
}

Comments.propTypes = {
    data: PropTypes.array
}

export default Comments;
