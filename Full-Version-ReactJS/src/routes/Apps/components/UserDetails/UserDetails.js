import React, { PropTypes } from 'react';
import _ from 'underscore';
import uid from 'node-uuid';

import {
    Panel,
    Media,
    Button,
    Tabs,
    Tab,
    Grid,
    AvatarImage,
    Divider,
    Label,
    ScrollBarContainer,
    FavoriteStar
} from 'components';

import TimelineExample from 'routes/Pages/Timeline/components/TimelineExample_VerticalInnerDate';

import { Colors } from 'consts';

import classes from './UserDetails.scss';

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

const UserDetails = props => (
    <div className={ classes.userDetails }>
        <Media>
            <Media.Left align='middle'>
                <AvatarImage
                    size='large'
                    showStatus
                    statusPlacement='bottom'
                    statusColor={ statusToColor(props.status) }
                    src={ props.avatar }
                />
            </Media.Left>
            <Media.Body>
                <div className={ classes.userPanelName }>
                    <h4>
                        { props.name }
                    </h4>
                    <FavoriteStar
                        favorited={ !!parseInt(props.favoritted) }
                        className='m-l-1'
                    />
                </div>
                <p>
                    { props.Position }
                </p>
                <div>
                    <Button bsStyle='primary'>
                        <i className='fa fa-envelope m-r-1'></i>
                        Send Email
                    </Button>
                    { ' ' }
                    <Button>
                        <i className='fa fa-pencil'></i>
                    </Button>
                </div>
            </Media.Body>
        </Media>
        <Divider>
            Profile
        </Divider>
        <p className='m-y-0'>
            { props.shortProfile }
        </p>

        <Divider>
            Labels
        </Divider>
        <div>
            { _.map(props.labels, (label, index) => (
                <Label
                    outline
                    bsStyle='default'
                    className='m-r-1'
                    key={ index }
                >
                    { label }
                </Label>
            ))}
        </div>

        <Tabs defaultActiveKey='tab-1' className='m-t-3' id='user-panel-info'>
            <Tab eventKey='tab-1' title='Contact Details' className={ classes.detailsTab }>
                <Divider className='m-t-1'>
                    Contact
                </Divider>
                <dl className='dl-horizontal'>
                    <dt>Phone</dt>
                    <dd className='text-white'>
                        { props.contact.Phone }
                    </dd>
                    <dt>Mobile</dt>
                    <dd className='text-white'>
                        { props.contact.Mobile }
                    </dd>
                    <dt>Fax</dt>
                    <dd className='text-white'>
                        { props.contact.Fax }
                    </dd>
                    <dt>Email</dt>
                    <dd>
                        <a href='javascript:void(0)'>
                            { props.contact.Email }
                        </a>
                    </dd>
                    <dt>Skype</dt>
                    <dd>
                        <a href='javascript:void(0)'>
                            { props.contact.Skype }
                        </a>
                    </dd>
                </dl>

                <Divider className='m-t-1'>
                    Social
                </Divider>
                <dl className='dl-horizontal'>
                    <dt>LinkedIn</dt>
                    <dd className='text-white'>
                        <a href='javascript:void(0)'>
                            { props.social.LinkedIn }
                        </a>
                    </dd>
                    <dt>Facebook</dt>
                    <dd className='text-white'>
                        <a href='javascript:void(0)'>
                            { props.social.Facebook }
                        </a>
                    </dd>
                    <dt>Fax</dt>
                    <dd className='text-white'>
                        <a href='javascript:void(0)'>
                            { props.social.Twitter }
                        </a>
                    </dd>
                </dl>

                <Divider className='m-t-1'>
                    Address
                </Divider>
                <dl className='dl-horizontal'>
                    <dt>Address</dt>
                    <dd className='text-white'>
                        <a href='javascript:void(0)'>
                            { props.address.Address }
                        </a>
                    </dd>
                    <dt>Facebook</dt>
                    <dd className='text-white'>
                        <a href='javascript:void(0)'>
                            { props.address.City }
                        </a>
                    </dd>
                    <dt>Fax</dt>
                    <dd className='text-white'>
                        <a href='javascript:void(0)'>
                            { props.address.ZipCode  }
                        </a>
                    </dd>
                </dl>
            </Tab>

            <Tab eventKey='tab-2' title='Activity'>
                <Grid fluid>
                    <ScrollBarContainer className={ classes.detailsTab }>
                        <TimelineExample />
                    </ScrollBarContainer>
                </Grid>
            </Tab>
        </Tabs>
    </div>
);

UserDetails.propTypes = {
    status: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    favoritted: PropTypes.bool,
    position: PropTypes.string,
    shortProfile: PropTypes.string,
    labels: PropTypes.array,
    contact: PropTypes.object,
    social: PropTypes.object,
    address: PropTypes.object
}

export default UserDetails;
