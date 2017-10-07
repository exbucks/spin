import React, { PropTypes } from 'react';
import uid from 'node-uuid';
import {
    Panel,
    Tabs,
    Tab,
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
    Checkbox,
    Radio
} from 'components';

import classes from './LayoutOptions.scss';

import { connect } from 'react-redux'
import {
    toggleOptions,
    restoreSettings,

    toggleNavbar,
    toggleNavbarFixed,
    toggleSidebar,
    toggleSidebarFixed,
    toggleSidebarAside,
    toggleFooter,
    toggleFooterFixed,

    setSidebarStyle,
    setContentView,

    toggleHeader,
    setHeaderStyle,

    changeSidebarAddOn,

    setSidebarSkin,
    setNavbarSkin,
    setSkinColor,

    SIDEBAR_STYLE_DEFAULT,
    SIDEBAR_STYLE_SLIM,
    SIDEBAR_STYLE_BIGICONS,
    SIDEBAR_STYLE_BIGICONS_AVATAR,

    SKIN_DARK,
    SKIN_LIGHT,
    SKIN_COLOR,

    SKIN_COLOR_PRIMARY,
    SKIN_COLOR_INFO,
    SKIN_COLOR_SUCCESS,
    SKIN_COLOR_WARNING,
    SKIN_COLOR_DANGER,

    CONTENT_VIEW_STATIC,
    CONTENT_VIEW_FLUID,
    CONTENT_VIEW_BOXED,

    HEADER_STYLE_SIMPLE,
    HEADER_STYLE_BREADCRUMBS,

    SIDEBAR_ADDON_DEFAULT,
    SIDEBAR_ADDON_PROGRESS,
    SIDEBAR_ADDON_MENU,
    SIDEBAR_ADDON_BARS,
    SIDEBAR_ADDON_AVATAR_AND_BARS,
    SIDEBAR_ADDON_AVATAR_AND_NUMBERS,
    SIDEBAR_ADDON_AVATAR_AND_STATS,
} from 'layouts/DefaultLayout/modules/layout';

// ------------------------------------
// SelectBoxes data sets
// ------------------------------------
const sidebarStyleSelect = [
    { text: 'Default Sidebar', val: SIDEBAR_STYLE_DEFAULT },
    { text: 'Slim Sidebar', val: SIDEBAR_STYLE_SLIM },
    { text: 'Big Icons Sidebar', val: SIDEBAR_STYLE_BIGICONS }
];

const layoutTypeSelect = [
    { text: 'Container', val: CONTENT_VIEW_STATIC },
    { text: 'Container Fluid', val: CONTENT_VIEW_FLUID },
    { text: 'Boxed Layout', val: CONTENT_VIEW_BOXED }
];

const headerStyleSelect = [
    { text: 'Header 1', val: HEADER_STYLE_BREADCRUMBS },
    { text: 'Header 2', val: HEADER_STYLE_SIMPLE }
];

const sidebarAppearanceSelect = [
    { text: 'Default', val: SIDEBAR_ADDON_DEFAULT },
    { text: 'With Progress', val: SIDEBAR_ADDON_PROGRESS },
    { text: 'With Menu', val: SIDEBAR_ADDON_MENU },
    { text: 'With Bars', val: SIDEBAR_ADDON_BARS },
    { text: 'With Avatar & Bars', val: SIDEBAR_ADDON_AVATAR_AND_BARS },
    { text: 'With Avatar & Numbers', val: SIDEBAR_ADDON_AVATAR_AND_NUMBERS },
    { text: 'With Avatar & Stats', val: SIDEBAR_ADDON_AVATAR_AND_STATS }
];

class LayoutOptions extends React.Component {
    static propTypes = {
        optionsVisible: React.PropTypes.bool.isRequired,

        // State props
        navbarEnabled: React.PropTypes.bool.isRequired,
        navbarFixed: React.PropTypes.bool.isRequired,
        sidebarEnabled: React.PropTypes.bool.isRequired,
        sidebarStyle: React.PropTypes.string.isRequired,
        sidebarFixed: React.PropTypes.bool.isRequired,
        sidebarAside: React.PropTypes.bool.isRequired,
        contentView: React.PropTypes.string.isRequired,
        footerEnabled: React.PropTypes.bool.isRequired,
        footerFixed: React.PropTypes.bool.isRequired,
        headerStyle: React.PropTypes.string.isRequired,
        skinColor: React.PropTypes.string.isRequired,
        // Actions
        toggleOptions: React.PropTypes.func.isRequired,
        restoreSettings: React.PropTypes.func.isRequired,

        toggleNavbar: React.PropTypes.func.isRequired,
        toggleNavbarFixed: React.PropTypes.func.isRequired,
        toggleSidebar: React.PropTypes.func.isRequired,
        toggleSidebarFixed: React.PropTypes.func.isRequired,
        toggleSidebarAside: React.PropTypes.func.isRequired,
        toggleFooter: React.PropTypes.func.isRequired,
        toggleFooterFixed: React.PropTypes.func.isRequired,
        setSidebarStyle: React.PropTypes.func.isRequired,
        setContentView: React.PropTypes.func.isRequired,

        toggleHeader: React.PropTypes.func.isRequired,
        setHeaderStyle: React.PropTypes.func.isRequired,

        setSidebarSkin: React.PropTypes.func.isRequired,
        setNavbarSkin: React.PropTypes.func.isRequired,
        setSkinColor: React.PropTypes.func.isRequired
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            navbarGroupActive: true,
            sidebarGroupActive: true,
            contentGroupActive: true,
            footerGroupActive: true
        };
    }

    render() {
        const { toggleOptions, optionsVisible } = this.props;
        const parentClasses = `layout-options ${ optionsVisible ? 'active' : ''} ${ classes.parent }`;

        return (
            <div className={ parentClasses }>
                <button
                    className="btn btn-primary action-toggle-layout-options"
                    onClick={() => toggleOptions(!optionsVisible) }
                >
                    <i className="fa fa-gear"></i>
                </button>
                <button className="btn btn-primary action-toggle-layout-options disabled">
                    <i className="fa fa-gear"></i>
                </button>

                <Panel
                    footer={
                        <Button block onClick={ () => this.props.restoreSettings() }>
                            Reset Options
                        </Button>
                    }
                >
                    <Tabs defaultActiveKey={1} id="layout-options-tabs" bsStyle='panel'>
                        <Tab eventKey={ 1 } title="Options" className="p-r-1">
                            { /*    NavBar    */ }
                            <FormGroup className='p-t-2'>
                                <p className='small text-uppercase'>
                                    <strong>Navbar Options</strong>
                                </p>
                                <Checkbox
                                    onChange={ ev => this.props.toggleNavbar(ev.target.checked) }
                                    checked={ this.props.navbarEnabled }
                                    inline
                                >
                                    Show / Hide
                                </Checkbox>
                                <Checkbox
                                    onChange={ ev => this.props.toggleNavbarFixed(ev.target.checked) }
                                    checked={ this.props.navbarEnabled }
                                    inline
                                    disabled={!this.props.navbarEnabled}
                                >
                                    Fixed
                                </Checkbox>
                            </FormGroup>

                            { /*    Header   */ }
                            <FormGroup>
                                <p className='small text-uppercase'>
                                    <strong>Header Layout</strong>
                                </p>
                                <Checkbox
                                    onChange={ ev => this.props.toggleHeader(ev.target.checked) }
                                    checked={ this.props.headerEnabled }
                                    inline
                                >
                                    Show / Hide
                                </Checkbox>
                            </FormGroup>
                            <FormControl
                                componentClass="select"
                                className='m-b-1'
                                value={ this.props.headerStyle }
                                onChange={ ev => this.props.setHeaderStyle(ev.target.value) }
                            >
                                {
                                    headerStyleSelect.map((item, index) => (
                                        <option key={ index } value={ item.val }>{ item.text }</option>
                                    ))
                                }
                            </FormControl>

                            { /*    Sidebar    */ }
                            <FormGroup className='p-t-2'>
                                <p className='small text-uppercase'>
                                    <strong>Sidebar Options</strong>
                                </p>
                                <Checkbox
                                    onChange={ ev => this.props.toggleSidebar(ev.target.checked) }
                                    checked={ this.props.sidebarEnabled }
                                >
                                    Show / Hide
                                </Checkbox>
                            </FormGroup>
                            <FormControl
                                componentClass="select"
                                className='m-b-1'
                                value={ this.props.sidebarStyle }
                                onChange={ ev => this.props.setSidebarStyle(ev.target.value) }
                                disabled={ !this.props.sidebarEnabled }
                            >
                                {
                                    sidebarStyleSelect.map((item, index) => (
                                        <option key={ index } value={ item.val }>{ item.text }</option>
                                    ))
                                }
                            </FormControl>
                            <FormGroup>
                                <Checkbox
                                    onChange={ ev => this.props.toggleSidebarFixed(ev.target.checked) }
                                    checked={ this.props.sidebarFixed }
                                    disabled={ !this.props.sidebarEnabled }
                                    inline
                                >
                                    Fixed
                                </Checkbox>
                                <Checkbox
                                    onChange={ ev => this.props.toggleSidebarAside(ev.target.checked) }
                                    checked={ this.props.sidebarAside }
                                    disabled={ !this.props.sidebarEnabled }
                                    inline
                                >
                                    Aside
                                </Checkbox>
                            </FormGroup>

                            { /*  Sidebar Appearance  */ }
                            <p className='small text-uppercase m-t-2'>
                                <strong>Sidebar Appearance</strong>
                            </p>
                            <FormControl
                                componentClass="select"
                                className='m-b-1'
                                value={ this.props.sidebarAddon }
                                onChange={ ev => this.props.changeSidebarAddOn(ev.target.value) }
                                disabled={!this.props.sidebarEnabled}
                            >
                                {
                                    sidebarAppearanceSelect.map((item, index) => (
                                        <option key={ index } value={ item.val }>{ item.text }</option>
                                    ))
                                }
                            </FormControl>

                            { /*  Content View   */ }
                            <p className='small text-uppercase m-t-2'>
                                <strong>Content View</strong>
                            </p>
                            <FormControl
                                componentClass="select"
                                className='m-b-1'
                                value={ this.props.contentView }
                                onChange={ ev => this.props.setContentView(ev.target.value) }
                            >
                                {
                                    layoutTypeSelect.map((item, index) => (
                                        <option key={ index } value={ item.val }>{ item.text }</option>
                                    ))
                                }
                            </FormControl>

                            { /*    Footer Options    */ }
                            <FormGroup className='p-t-2'>
                                <p className='small text-uppercase'>
                                    <strong>Footer Options</strong>
                                </p>
                                <Checkbox
                                    onChange={ ev => this.props.toggleFooter(ev.target.checked) }
                                    checked={ this.props.footerEnabled }
                                    inline
                                >
                                    Show / Hide
                                </Checkbox>
                                <Checkbox
                                    onChange={ ev => this.props.toggleFooterFixed(ev.target.checked) }
                                    checked={ this.props.footerFixed }
                                    disabled={ !this.props.footerEnabled }
                                    inline
                                >
                                    Fixed
                                </Checkbox>
                            </FormGroup>
                        </Tab>

                        <Tab eventKey={ 2 } title="Skins" className="p-r-1 p-t-2">
                            { /*    Main Color    */ }
                            <p className='small text-uppercase'>
                                <strong>Main Color</strong>
                            </p>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.skinColor === SKIN_COLOR_PRIMARY }
                                onChange={ ev => this.props.setSkinColor(SKIN_COLOR_PRIMARY) }
                            >
                                <div className='flex-space-between'>
                                    <span>Primary</span>
                                    <i className='fa fa-circle text-primary'></i>
                                </div>
                            </Radio>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.skinColor === SKIN_COLOR_INFO }
                                onChange={ ev => this.props.setSkinColor(SKIN_COLOR_INFO) }
                            >
                                <div className='flex-space-between'>
                                    <span>Info</span>
                                    <i className='fa fa-circle text-info'></i>
                                </div>
                            </Radio>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.skinColor === SKIN_COLOR_SUCCESS }
                                onChange={ ev => this.props.setSkinColor(SKIN_COLOR_SUCCESS) }
                            >
                                <div className='flex-space-between'>
                                    <span>Success</span>
                                    <i className='fa fa-circle text-success'></i>
                                </div>
                            </Radio>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.skinColor === SKIN_COLOR_WARNING }
                                onChange={ ev => this.props.setSkinColor(SKIN_COLOR_WARNING) }
                            >
                                <div className='flex-space-between'>
                                    <span>Warning</span>
                                    <i className='fa fa-circle text-warning'></i>
                                </div>
                            </Radio>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.skinColor === SKIN_COLOR_DANGER }
                                onChange={ ev => this.props.setSkinColor(SKIN_COLOR_DANGER) }
                            >
                                <div className='flex-space-between'>
                                    <span>Danger</span>
                                    <i className='fa fa-circle text-danger'></i>
                                </div>
                            </Radio>

                            <p className='small text-uppercase m-t-2'>
                                <strong>Navbar</strong>
                            </p>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.navbarSkin === SKIN_DARK }
                                onChange={ ev => this.props.setNavbarSkin(SKIN_DARK) }
                            >
                                Dark
                            </Radio>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.navbarSkin === SKIN_LIGHT }
                                onChange={ ev => this.props.setNavbarSkin(SKIN_LIGHT) }
                            >
                                Light
                            </Radio>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.navbarSkin === SKIN_COLOR }
                                onChange={ ev => this.props.setNavbarSkin(SKIN_COLOR) }
                            >
                                Like Main Color
                            </Radio>

                            <p className='small text-uppercase m-t-2'>
                                <strong>Sidebar</strong>
                            </p>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.sidebarSkin === SKIN_DARK }
                                onChange={ ev => this.props.setSidebarSkin(SKIN_DARK) }
                            >
                                Dark
                            </Radio>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.sidebarSkin === SKIN_LIGHT }
                                onChange={ ev => this.props.setSidebarSkin(SKIN_LIGHT) }
                            >
                                Light
                            </Radio>
                            <Radio
                                className={ classes.blockRadio }
                                checked={ this.props.sidebarSkin === SKIN_COLOR }
                                onChange={ ev => this.props.setSidebarSkin(SKIN_COLOR) }
                            >
                                Like Main Color
                            </Radio>
                        </Tab>
                    </Tabs>
                </Panel>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    navbarEnabled: state.layout.navbarEnabled,
    navbarFixed: state.layout.navbarFixed,
    navbarSkin: state.layout.navbarSkin,
    sidebarEnabled: state.layout.sidebarEnabled,
    sidebarStyle: state.layout.sidebarStyle,
    sidebarFixed: state.layout.sidebarFixed,
    sidebarAside: state.layout.sidebarAside,
    sidebarAddon: state.layout.sidebarAddon,
    sidebarSkin: state.layout.sidebarSkin,
    contentView: state.layout.contentView,
    footerEnabled: state.layout.footerEnabled,
    footerFixed: state.layout.footerFixed,
    optionsVisible: state.layout.optionsVisible,
    headerStyle: state.layout.headerStyle,
    headerEnabled: state.layout.headerEnabled,
    headerFluid: state.layout.headerFluid,
    skinColor: state.layout.skinColor
});

const mapActionCreators = {
    toggleOptions,
    restoreSettings,

    toggleNavbar,
    toggleNavbarFixed,
    toggleSidebar,
    toggleSidebarFixed,
    toggleSidebarAside,
    toggleFooter,
    toggleFooterFixed,

    setSidebarStyle,
    setContentView,

    toggleHeader,
    setHeaderStyle,

    changeSidebarAddOn,

    setSidebarSkin,
    setNavbarSkin,
    setSkinColor
};

export default connect(mapStateToProps, mapActionCreators)(LayoutOptions);
