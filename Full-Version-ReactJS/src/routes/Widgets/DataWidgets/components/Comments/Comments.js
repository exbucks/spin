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
    Grid,
    Row,
    Col,
    AvatarImage
} from 'components';

import { Colors } from 'consts';

import classes from './Comments.scss';

const stats = {
    followers: 12872,
    following: 567,
    comments: 6
};

const commentsList = [
    {
        id: uid.v4(),
        user: {
            name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            avatar: faker.image.avatar()
        },
        date: faker.date.recent(),
        category: faker.commerce.department(),
        content: faker.lorem.paragraph()
    },
    {
        id: uid.v4(),
        user: {
            name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            avatar: faker.image.avatar()
        },
        date: faker.date.recent(),
        category: faker.commerce.department(),
        content: faker.lorem.paragraph()
    },
    {
        id: uid.v4(),
        user: {
            name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
            avatar: faker.image.avatar()
        },
        date: faker.date.recent(),
        category: faker.commerce.department(),
        content: faker.lorem.paragraph()
    }
];

const Comments = (panelProps) => (
    <CollapsablePanel
        maxHeight={ 300 }
        title='Comments'
        footer={
            <p className='text-center m-y-0'>
                <Link to='/apps/task-details'>
                    See More
                    <i className='fa fa-angle-right m-l-1'></i>
                </Link>
            </p>
        }
        { ...panelProps }
    >
        <Grid fluid>
            <Row>
                <Col xs={ 4 } className='text-center'>
                    <p className={ classes.value }>
                        { numeral(stats.followers).format('0,0') }
                    </p>
                    <span>
                        Followers
                    </span>
                </Col>
                <Col xs={ 4 } className='text-center'>
                    <p className={ classes.value }>
                        { numeral(stats.following).format('0,0') }
                    </p>
                    <span>
                        Following
                    </span>
                </Col>
                <Col xs={ 4 } className='text-center'>
                    <p className={ classes.value }>
                        { numeral(stats.comments).format('0,0') }
                    </p>
                    <span>
                        Comments
                    </span>
                </Col>
            </Row>
        </Grid>
        <ListGroup className={ classes.filledListGroup }>
            {
                _.map(commentsList, (comment) => (
                    <ListGroupItem className={ classes.filledListGroupItem } key={ comment.id }>
                        <Media>
                            <Media.Left>
                                <AvatarImage
                                    src={ comment.user.avatar }
                                />
                            </Media.Left>
                            <Media.Body>
                                <div>
                                    <p className='text-white m-y-0'>
                                        { comment.user.name }
                                    </p>
                                    <p className='text-muted small'>
                                        on { moment(comment.date).format('MMM DD, YYYY') }
                                        { ' on ' }
                                        <a href="javascript:;">
                                            { comment.category }
                                        </a>
                                    </p>
                                </div>
                                <div className="m-t-1">
                                    <em>
                                        { comment.content }
                                    </em>
                                </div>
                            </Media.Body>
                        </Media>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    </CollapsablePanel>
);

export default Comments;
