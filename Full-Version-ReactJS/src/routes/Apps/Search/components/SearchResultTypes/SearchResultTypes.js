import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import {
    Nav,
    NavItem,
    Badge
} from 'components';

const SearchResultTypes = () => (
    <Nav bsStyle='pills' stacked activeKey={ 1 }>
        <LinkContainer to='/apps/search/search-results'>
            <NavItem eventKey={ 1 } href='#'>
                All Results

                <Badge className='pull-right'>
                    4
                </Badge>
            </NavItem>
        </LinkContainer>

        <LinkContainer to='/apps/search/image-results'>
            <NavItem eventKey={ 2 } href='#'>
                Images

                <Badge className='pull-right'>
                    34
                </Badge>
            </NavItem>
        </LinkContainer>

        <LinkContainer to='/apps/search/video-results'>
            <NavItem eventKey={ 3 } href='#'>
                Video

                <Badge className='pull-right'>
                    2
                </Badge>
            </NavItem>
        </LinkContainer>

        <LinkContainer to='/apps/search/user-results'>
            <NavItem eventKey={ 4 } href='#'>
                Users

                <Badge className='pull-right'>
                    7
                </Badge>
            </NavItem>
        </LinkContainer>
    </Nav>
);

export default SearchResultTypes;
