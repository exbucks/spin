import React from 'react';
import {
    Media
} from 'react-bootstrap';
import faker from 'faker';
import { Link } from 'react-router';

import {
    AvatarImage,
    Charts,
    Sidebar
} from 'components';

import avatarImage from 'static/avatars/avatar-5.jpg';
import { Colors } from 'consts';

const chartData = [1,3,9,6,5,9,7,3,5,2,4,5,6,9,7,8,5,4,2,4,6,7,3,9,8,7,6,9,2,6,5,4];

const UserName = `${faker.name.firstName()} ${faker.name.lastName()}`;

const AvatarAndStats = (props) => (
    <Sidebar.AddOn>
        {/*     Default Sidebar     */}
        <Sidebar.AddOnContent supportedStyle='default'>
            <Media>
                <Media.Left align='middle'>
                    <i className="fa fa-fw fa-power-off"></i>
                </Media.Left>
                <Media.Body className='text-center'>
                    <Link to='/apps/profile-details'>
                        <AvatarImage
                            src={ avatarImage }
                            showStatus
                            size='large'
                            statusPlacement='bottom'
                            statusColor={ Colors.brandSuccess }
                            statusBorderColor={ props.colorSidebar ? '#fff' : Colors.grayDarker }
                        />
                    </Link>
                    <div className='m-t-2'>
                        <Media.Heading
                            componentClass='h5'
                            className='m-y-0'
                        >
                            { `${faker.name.firstName()} ${faker.name.lastName()}` }
                        </Media.Heading>
                        <small>Senior Front-end Developer</small>
                    </div>
                </Media.Body>
                <Media.Right align='middle'>
                    <Link to='/apps/user-profile/edit/profile'>
                        <i className="fa fa-fw fa-gear text-gray-lighter"></i>
                    </Link>
                </Media.Right>
            </Media>
            <div className='text-center m-t-2'>
                <div className='m-y-2'>
                    <Charts.SparklineBar
                        data={ chartData }
                        color={ Colors.brandPrimary }
                        width={ 130 }
                        hieght={ 16 }
                        className='m-y-2'
                    />
                </div>
                <p className='text-center small m-b-0'>
                    Total Earnings
                </p>
                <p className='text-white h3 m-y-0'>
                    $ 2,456.31
                </p>
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

AvatarAndStats.propTypes = {
    colorSidebar: React.PropTypes.bool
};

export default AvatarAndStats;
