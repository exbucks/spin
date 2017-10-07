import React from 'react';
import faker from 'faker';

import { Divider } from 'components';

const Contact = {
    phone: faker.phone.phoneNumberFormat(),
    mobile: faker.phone.phoneNumberFormat(),
    fax: faker.phone.phoneNumberFormat(),
    email: faker.internet.email(),
    skype: faker.internet.userName(),

    linkedIn: `http://lnkd.in/${faker.internet.userName()}`,
    facebook: `http://fb.com/${faker.internet.userName()}`,
    twitter: `http://twitter.com/${faker.internet.userName()}`,

    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode()
};

const DetailContact = () => (
    <div>
        <Divider className='m-t-1'>
            Contact
        </Divider>
        <dl className='dl-horizontal'>
            <dt>Phone</dt>
            <dd className='text-white'>
                { Contact.phone }
            </dd>
            <dt>Mobile</dt>
            <dd className='text-white'>
                { Contact.mobile }
            </dd>
            <dt>Fax</dt>
            <dd className='text-white'>
                { Contact.fax }
            </dd>
            <dt>Email</dt>
            <dd>
                <a href='javascript:void(0)'>
                    { Contact.email }
                </a>
            </dd>
            <dt>Skype</dt>
            <dd>
                <a href='javascript:void(0)'>
                    { Contact.skype }
                </a>
            </dd>
        </dl>

        <Divider className='m-t-1'>
            Social
        </Divider>
        <dl className='dl-horizontal'>
            <dt>
                <i className='fa fa-linkedin-square fa-fw'></i>
                { ' ' }
                LinkedIn
            </dt>
            <dd className='text-white'>
                <a href='javascript:void(0)'>
                    { Contact.linkedIn }
                </a>
            </dd>
            <dt>
                <i className='fa fa-facebook-square fa-fw'></i>
                { ' ' }
                Facebook
            </dt>
            <dd className='text-white'>
                <a href='javascript:void(0)'>
                    { Contact.facebook }
                </a>
            </dd>
            <dt>
                <i className='fa fa-twitter-square fa-fw'></i>
                Twitter
            </dt>
            <dd className='text-white'>
                <a href='javascript:void(0)'>
                    { Contact.twitter }
                </a>
            </dd>
        </dl>

        <Divider className='m-t-1'>
            Address
        </Divider>
        <dl className='dl-horizontal'>
            <dt>Address</dt>
            <dd className='text-white'>
                { Contact.address }
            </dd>
            <dt>City</dt>
            <dd className='text-white'>
                { Contact.city }
            </dd>
            <dt>State</dt>
            <dd className='text-white'>
                { Contact.state  }
            </dd>
            <dt>Zip Code</dt>
            <dd className='text-white'>
                { Contact.zipCode  }
            </dd>
        </dl>
    </div>
);

export default DetailContact;
