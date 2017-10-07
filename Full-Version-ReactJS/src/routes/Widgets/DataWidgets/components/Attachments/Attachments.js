import React from 'react';
import faker from 'faker';
import _ from 'underscore';
import uid from 'node-uuid';
import numeral from 'numeral';
import moment from 'moment';
import { Link } from 'react-router';

import {
    Media,
    ListGroup,
    ListGroupItem,
    CollapsablePanel,
    AvatarIcon,
    Button
} from 'components';

import { Colors } from 'consts';

import classes from './Attachments.scss';

const attachments = _.map([
    {
        title: 'books_frozen_australian_dollar.afp',
        actionIcon: (<i className='fa fa-times'></i>),
        icon: {
            color: Colors.brandPrimary,
            icon: (<i className='fa fa-file-excel-o'></i>)
        }
    },
    {
        title: 'file_from_amiga_os_1998_08_2009',
        actionIcon: (<i className='fa fa-search'></i>),
        icon: {
            color: Colors.brandDanger,
            icon: (<i className='fa fa-file-powerpoint-o'></i>)
        }
    },
    {
        title: 'borders_action_items_bandwidth',
        actionIcon: (<i className='fa fa-download'></i>),
        icon: {
            color: Colors.brandPrimary,
            icon: (<i className='fa fa-file-word-o'></i>)
        }
    },
    {
        title: 'books_frozen_australian_dollar',
        actionIcon: (<i className='fa fa-times'></i>),
        icon: {
            color: Colors.brandWarning,
            icon: (<i className='fa fa-file-excel-o'></i>)
        }
    },
    {
        title: 'borders_action_items_bandwidth',
        actionIcon: (<i className='fa fa-search'></i>),
        icon: {
            color: Colors.brandInfo,
            icon: (<i className='fa fa-file-powerpoint-o'></i>)
        }
    },
    {
        title: 'file_from_amiga_os_1998_08_2009',
        actionIcon: (<i className='fa fa-download'></i>),
        icon: {
            color: Colors.grayLight,
            icon: (<i className='fa fa-file-word-o'></i>)
        }
    }
], attachment => ({
    ...attachment,
    id: uid.v4(),
    author: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
    size: Math.random() * 1000,
    date: faker.date.recent()
}));

const Attachments = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Attachments'
        footer={
            <p className='text-center m-y-0'>
                <Link to='/apps/files-manager/files-list'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        { ...panelProps }
    >
        <ListGroup className={ classes.filledListGroup }>
            {
                _.map(attachments, attachment => (
                    <Media key={ attachment.id }>
                        <Media.Left align='middle'>
                            <AvatarIcon
                                type='rounded'
                                backgroundColor={ attachment.icon.color }
                            >
                                { attachment.icon.icon }
                            </AvatarIcon>
                        </Media.Left>
                        <Media.Body>
                            <div className='flex-space-between'>
                                <div>
                                    <p className='text-white m-y-0'>
                                        { attachment.title }
                                    </p>
                                    <p className='text-muted'>
                                        by { attachment.author } &middot; { numeral(attachment.size).format('0.00') } KB
                                    </p>
                                </div>
                                <div className='text-right'>
                                    { moment(attachment.date).format('DD-MMM-YYYY') }
                                    <br />
                                    { moment(attachment.date).format('hh:mm A') }
                                </div>
                            </div>
                        </Media.Body>
                        <Media.Right align='middle'>
                            <Button bsSize='sm'>
                                { attachment.actionIcon }
                            </Button>
                        </Media.Right>
                    </Media>
                ))
            }
        </ListGroup>
    </CollapsablePanel>
);

export default Attachments;
