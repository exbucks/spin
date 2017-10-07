import React from 'react';
import _ from 'underscore';
import uid from 'node-uuid';
import hash from 'object-hash';
import numeral from 'numeral';
import moment from 'moment';
import {
    Badge,
    Media,
    OverlayTrigger,
    Tooltip,
    Button,
    Divider
} from 'components';

import classes from './EmailAttachments.scss';

import { Colors } from 'consts';

const fileTypeToIcon = fileType => {
    const filesMap = {
        'Word': {
            icon: 'fa-file-word-o',
            color: Colors.brandPrimary
        },
        'PowerPoint': {
            icon: 'fa-file-powerpoint-o',
            color: Colors.brandDanger
        },
        'Excel': {
            icon: 'fa-file-excel-o',
            color: Colors.brandSuccess
        }
    };

    return (
        <span className='fa-stack fa-lg'>
            <i
                className='fa fa-square fa-stack-2x'
                style={ { color: filesMap[fileType].color } }
            ></i>
            <i className={`fa ${filesMap[fileType].icon} fa-stack-1x
                fa-inverse text-white"`}></i>
        </span>
    );
}

const EmailAttachments = (props) => {
    const { items } = props;
    const otherProps = _.omit(props, 'items', 'actionIcon', 'actionTooltipText');

    return (
        <div {...otherProps}>
            <Divider>
                Attachments
                <Badge className='m-l-1'>
                    { items.length }
                </Badge>
            </Divider>
            <div>
                {
                    _.map(items, attachment => (
                        <div className={ `flex-space-between ${classes.attachment}` } key={ attachment._id || hash(attachment) } >
                            <Media>
                                <Media.Left align='middle'>
                                    { fileTypeToIcon(attachment.Type) }
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading
                                        componentClass='span'
                                        className='text-white'
                                    >
                                        { attachment.FileName }
                                    </Media.Heading>
                                    <p className='m-b-0'>
                                        by { attachment.Owner }
                                        <span className='text-muted'> · </span>
                                        { numeral(attachment.FileSize).format('0,0.00') }
                                        <span> KB</span>
                                    </p>
                                </Media.Body>
                            </Media>

                            <Media className='m-t-0'>
                                <Media.Body className='text-right'>
                                    <span>
                                        { moment(attachment.DateAdded).format('DD-MMM-YYYY') }
                                    </span>
                                    <br/>
                                    <span>
                                        { moment(attachment.DateAdded).format('hh:mm A') }
                                    </span>
                                </Media.Body>
                                <Media.Right align='middle'>
                                    <OverlayTrigger
                                        placement='top'
                                        overlay={
                                            <Tooltip id='tooltip-download'>
                                                { props.actionTooltipText }
                                            </Tooltip>
                                        }
                                    >
                                        <Button>
                                            <i className={ props.actionIcon }></i>
                                        </Button>
                                    </OverlayTrigger>
                                </Media.Right>
                            </Media>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

EmailAttachments.propTypes = {
    items: React.PropTypes.array.isRequired,
    actionIcon: React.PropTypes.string.isRequired,
    actionTooltipText: React.PropTypes.string
}

EmailAttachments.defaultProps = {
    actionIcon: 'fa fa-download',
    actionTooltipText: 'Download'
}

export default EmailAttachments;
