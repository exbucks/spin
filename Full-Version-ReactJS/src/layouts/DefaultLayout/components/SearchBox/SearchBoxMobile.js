import React from 'react';
import {
    Navbar,
    NavItem,
    FormGroup,
    InputGroup,
    Button,
    FormControl
} from 'react-bootstrap';

const SearchBoxMobile = (props) => (
    <NavItem className='visible-xs'>
        <Navbar.Form pullLeft>
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" placeholder="Search" />
                    <InputGroup.Button>
                        <Button type="button" bsStyle='primary'>Search</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        </Navbar.Form>
    </NavItem>
);

export default SearchBoxMobile;
