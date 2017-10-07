import { Navbar as ReactBootstrapNavbar } from 'react-bootstrap';

import Navbar from './Navbar';
import {
    Menu,
    DropdownList,
    MenuSection
} from './components';

Navbar.Menu = Menu;
Navbar.MenuSection = MenuSection;
Navbar.DropdownList = DropdownList;
Navbar.Collapse = ReactBootstrapNavbar.Collapse;
Navbar.Header = ReactBootstrapNavbar.Header;
Navbar.Brand = ReactBootstrapNavbar.Brand;
Navbar.Text = ReactBootstrapNavbar.Text;
Navbar.Toggle = ReactBootstrapNavbar.Toggle;

export default Navbar;
