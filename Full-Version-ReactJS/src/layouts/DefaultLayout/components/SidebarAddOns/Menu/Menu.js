import React from 'react';
import {
    Media
} from 'react-bootstrap';
import faker from 'faker';
import { Link } from 'react-router';

import {
    AvatarImage,
    Sidebar
} from 'components';

import avatarImage from 'static/avatars/avatar-28.jpg';
import { Colors } from 'consts';

const UserName = `${faker.name.firstName()} ${faker.name.lastName()}`;

const Menu = (props) => (
    <Sidebar.AddOn>
        {/*     Default Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='default'>
            <Media>
                <Media.Left>
                    <Link to='profile-details'>
                        <AvatarImage
                            src={ avatarImage }
                            showStatus
                            statusPlacement='bottom'
                            statusColor={ Colors.brandSuccess }
                            statusBorderColor={ props.colorSidebar ? '#fff' : Colors.grayDarker }
                        />
                    </Link>
                </Media.Left>
                <Media.Body>
                    <Media.Heading
                        componentClass='h5'
                        className='m-y-0'
                    >
                        { UserName }
                    </Media.Heading>
                    <small>Java Developer</small>
                </Media.Body>
                <Media.Right align='middle'>
                    <Link to='/apps/user-profile/edit/profile'>
                        <i className="fa fa-fw fa-gear text-gray-lighter"></i>
                    </Link>
                </Media.Right>
            </Media>
            <div className={ `flex-space-between m-t-2 p-x-1` }>
                <a href='javascript: void(0)' className='text-center'>
                    <p className='m-y-0 fa-stack fa-lg'>
                        <i className='fa fa-circle fa-stack-2x text-primary'></i>
                        <i className='fa fa-video-camera fa-stack-1x fa-inverse'></i>
                    </p>
                    <br />
                    <small className='text-white'>Video</small>
                </a>
                <a href='javascript: void(0)' className='text-center'>
                    <p className='m-y-0 fa-stack fa-lg'>
                        <i className='fa fa-circle fa-stack-2x text-info'></i>
                        <i className='fa fa-camera fa-stack-1x fa-inverse'></i>
                    </p>
                    <br />
                    <small className='text-white'>Photos</small>
                </a>
                <a href='javascript: void(0)' className='text-center'>
                    <p className='m-y-0 fa-stack fa-lg'>
                        <i className='fa fa-circle fa-stack-2x text-warning'></i>
                        <i className='fa fa-play fa-stack-1x fa-inverse'></i>
                    </p>
                    <br />
                    <small className='text-white'>Sounds</small>
                </a>
            </div>
        </Sidebar.AddOnContent>
        {/*     Slim Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='big-icons'>
            <Link to='/apps/profile-details'>
                <AvatarImage
                    src={ avatarImage }
                    showStatus
                    statusPlacement='bottom'
                    statusColor={ Colors.brandSuccess }
                    statusBorderColor={ props.colorSidebar ? '#fff' : Colors.grayDarker }
                    className='m-b-1'
                />
            </Link>
            <p className='text-white m-y-0'>
                { UserName }
            </p>
        </Sidebar.AddOnContent>
        {/*     BigIcons Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='slim'>
            <Link to='/apps/profile-details'>
                <AvatarImage
                    src={ avatarImage }
                    showStatus
                    statusPlacement='bottom'
                    statusColor={ Colors.brandSuccess }
                    statusBorderColor={ props.colorSidebar ? '#fff' : Colors.grayDarker }
                    size='small'
                />
            </Link>
        </Sidebar.AddOnContent>
    </Sidebar.AddOn>
);

Menu.propTypes = {
    colorSidebar: React.PropTypes.bool
};

export default Menu;
