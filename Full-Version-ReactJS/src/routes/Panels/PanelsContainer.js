import React from 'react';
import _ from 'underscore';

import {
    Row,
    Col,
    Panel,
    CollapsablePanel,
    Button,
    DropdownButton,
    MenuItem,
    Label,
    Badge,
    ButtonGroup,
    ButtonToolbar,
    InputGroup,
    FormControl,
    OverlayTrigger,
    Tooltip,
    Alert,
    Media,
    Pagination
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

const loremParagraph =
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quisquam ullam,
    atque eveniet enim mollitia fugit quo aut molestiae voluptas!`;

import { Colors } from 'consts';

const panelNotice = text => (
    <p className='small text-uppercase'>
        <strong>
            { text }
        </strong>
    </p>
);

class PanelsContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            closedPanels: []
        };
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    isPanelOpen(panelId) {
        return !_.contains(this.state.closedPanels, panelId);
    }

    closePanel(panelId) {
        this.setState({
            closedPanels: [...this.state.closedPanels, panelId]
        });
    }

    render() {
        return (
            <div>
                { /*    Panels Full Border Color    */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Border Primary') }
                        <Panel
                            type='color-border-full'
                            bsStyle='primary'
                            header='Panel with Border Primary'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Border Info') }
                        <Panel
                            type='color-border-full'
                            bsStyle='info'
                            header='Panel with Border Info'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Border Success') }
                        <Panel
                            type='color-border-full'
                            bsStyle='success'
                            header='Panel with Border success'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panels Left Border Color    */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Border Left Gray Lighter') }
                        <Panel
                            type='color-border-left'
                            bsStyle='custom'
                            customColor={ Colors.grayLighter }
                            header='Panel with Border Left Gray Lighter'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Border Left Warning') }
                        <Panel
                            type='color-border-left'
                            bsStyle='warning'
                            header='Panel with Border Left Warning'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Border Left Danger') }
                        <Panel
                            type='color-border-left'
                            bsStyle='danger'
                            header='Panel with Border Left Danger'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panels without background / heading; close/collapse     */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Without Background') }
                        <Panel
                            header='Panel heading without title'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Without Heading') }
                        <Panel>
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Collapse With Close') }
                        {
                            this.isPanelOpen('panel_with_close1') && (
                                <CollapsablePanel
                                    title='Panel Collapse With Close'
                                    onClose={ () => this.closePanel('panel_with_close1') }
                                >
                                    { loremParagraph }
                                </CollapsablePanel>
                            )
                        }
                    </Col>
                </Row>
                { /*    Panels Dark    */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Basic Example') }
                        <Panel
                            background='default'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Heading without Title') }
                        <Panel
                            background='default'
                            header='Panel Heading without Title'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Title') }
                        <Panel
                            background='default'
                            header={(
                                <span>Panel Title</span>
                            )}
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panels With Footer, Color Title    */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Footer') }
                        <Panel
                            background='default'
                            footer='Panel Footer'
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Primary Title') }
                        <Panel
                            background='default'
                            type='color-title'
                            bsStyle='primary'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Success Title') }
                        <Panel
                            background='default'
                            type='color-title'
                            bsStyle='success'
                            header={(
                                <span>Panel Title</span>
                            )}
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Color Title continuation    */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Info Title') }
                        <Panel
                            type='color-title'
                            bsStyle='info'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Warning Title') }
                        <Panel
                            type='color-title'
                            bsStyle='warning'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Danger Title') }
                        <Panel
                            type='color-title'
                            bsStyle='danger'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Color Border Title    */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Primary Title with Border') }
                        <Panel
                            type='color-title-border'
                            bsStyle='primary'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Success Title with Border') }
                        <Panel
                            type='color-title-border'
                            bsStyle='success'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Danger Title with Border') }
                        <Panel
                            type='color-title-border'
                            bsStyle='info'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Color Border Title continuation   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Warning Title with Border') }
                        <Panel
                            type='color-title-border'
                            bsStyle='warning'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Danger Title with Border') }
                        <Panel
                            type='color-title-border'
                            bsStyle='danger'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Primary Title Top Border') }
                        <Panel
                            type='color-border-top'
                            bsStyle='primary'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Color Top Border Title   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Success Title Top Border') }
                        <Panel
                            type='color-border-top'
                            bsStyle='success'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Info Title Top Border') }
                        <Panel
                            type='color-border-top'
                            bsStyle='info'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Warning Title Top Border') }
                        <Panel
                            type='color-border-top'
                            bsStyle='warning'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Color Top Border Title continuation, Color Heading Border Title   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Danger Title Top Border') }
                        <Panel
                            type='color-border-top'
                            bsStyle='danger'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Primary Title Heading Border') }
                        <Panel
                            type='color-border-heading'
                            bsStyle='primary'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Success Title Heading Border') }
                        <Panel
                            type='color-border-heading'
                            bsStyle='success'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Color Heading Border Title continuation   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Info Title Heading Border') }
                        <Panel
                            type='color-border-heading'
                            bsStyle='info'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Warning Title Heading Border') }
                        <Panel
                            type='color-border-heading'
                            bsStyle='warning'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Danger Title Heading Border') }
                        <Panel
                            type='color-border-heading'
                            bsStyle='danger'
                            background='default'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panel Borders   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel without Background') }
                        <Panel
                            borderStyle='thin'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel without Background 2px border') }
                        <Panel
                            borderStyle='normal'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel without Background 3px border') }
                        <Panel
                            borderStyle='thick'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panel Left Colors   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Left Border Primary') }
                        <Panel
                            borderStyle='thin'
                            bsStyle='primary'
                            type='color-border-left'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Left Border Success') }
                        <Panel
                            borderStyle='thin'
                            bsStyle='success'
                            type='color-border-left'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Left Border Info') }
                        <Panel
                            borderStyle='thin'
                            bsStyle='info'
                            type='color-border-left'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panel Left Colors continue   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel Left Border Warning') }
                        <Panel
                            borderStyle='thin'
                            bsStyle='warning'
                            type='color-border-left'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel Left Border Danger') }
                        <Panel
                            borderStyle='thin'
                            bsStyle='danger'
                            type='color-border-left'
                            header={
                                <span>Panel Title</span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Link') }
                        <Panel
                            background='default'
                            header={
                                <span>Panel Title <small>with Description</small></span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panel with Addons   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Label') }
                        <Panel
                            background='default'
                            header={
                                <span>
                                    <span className='m-r-1'>Panel Title</span>
                                    <Label outline bsStyle='primary' className='small'>
                                        Label
                                    </Label>
                                </span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Badge') }
                        <Panel
                            background='default'
                            header={
                                <span>
                                    <span className='m-r-1'>Panel Title</span>
                                    <Badge>
                                        9
                                    </Badge>
                                </span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Link') }
                        <Panel
                            background='default'
                            flexHeader
                            header={
                                <span className='flex-space-between'>
                                    <span>Panel Title</span>
                                    <Button bsStyle='link' bsSize='xs'>
                                        Link
                                    </Button>
                                </span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panel with Addons continue   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Button') }
                        <Panel
                            background='default'
                            header={
                                <div className='flex-space-between'>
                                    <span>Panel with Button</span>
                                    <Button bsSize='small'>
                                        Button
                                    </Button>
                                </div>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Button Group') }
                        <Panel
                            background='default'
                            header={
                                <div className='flex-space-between'>
                                    <span>Panel with Button Group</span>
                                    <ButtonGroup bsSize='small'>
                                        <Button>
                                            Save
                                        </Button>
                                        <Button>
                                            Cancel
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Input') }
                        <Panel
                            background='default'
                            header={
                                <Row className='flex-space-between'>
                                    <Col xs={ 6 }>
                                        <span>Panel with Input</span>
                                    </Col>
                                    <Col xs={ 6 }>
                                        <InputGroup bsSize='small'>
                                            <FormControl placeholder="Search..." />
                                            <InputGroup.Button>
                                                <Button bsStyle='primary'>
                                                    <i className='fa fa-search'></i>
                                                </Button>
                                            </InputGroup.Button>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panel with Addons continue   */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Dropdown') }
                        <Panel
                            background='default'
                            header={
                                <div className='flex-space-between'>
                                    <span>Panel with Dropdown</span>
                                    <DropdownButton title='Save' id={`panel-example-dropdown`} bsSize='small'>
                                        <MenuItem eventKey="1">
                                            <i className='fa fa-fw text-gray-lighter fa-file-pdf-o m-r-1'></i>
                                            Save as .pdf
                                        </MenuItem>
                                        <MenuItem eventKey="2">
                                            <i className='fa fa-fw text-gray-lighter fa-file-word-o m-r-1'></i>
                                            Save as .doc
                                        </MenuItem>
                                        <MenuItem eventKey="3">
                                            <i className='fa fa-fw text-gray-lighter fa-file-excel-o m-r-1'></i>
                                            Save as .xls
                                        </MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey="4">
                                            <i className='fa fa-fw text-gray-lighter fa-file-text-o m-r-1'></i>
                                            Save as .txt
                                        </MenuItem>
                                    </DropdownButton>
                                </div>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Button Group') }
                        {
                            this.isPanelOpen('panel_with_button_group1') && (
                                <Panel
                                    background='default'
                                    header={
                                        <div className='flex-space-between'>
                                            <span>Panel Options</span>
                                            <ButtonGroup bsSize='small'>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={ <Tooltip id='tooltip-options'>Options</Tooltip> }
                                                >
                                                    <Button>
                                                        <i className='fa fa-gear'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={ <Tooltip id='tooltip-fullscreen'>Fullscreen</Tooltip> }
                                                >
                                                    <Button>
                                                        <i className='fa fa-expand'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={ <Tooltip id='tooltip-refresh'>Refresh</Tooltip> }
                                                >
                                                    <Button>
                                                        <i className='fa fa-refresh'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={ <Tooltip id='tooltip-showhide'>Show/Hide</Tooltip> }
                                                >
                                                    <Button>
                                                        <i className='fa fa-chevron-up'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={ <Tooltip id='tooltip-close'>Close</Tooltip> }
                                                >
                                                    <Button onClick={ () => this.closePanel('panel_with_button_group1') }>
                                                        <i className='fa fa-close'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                            </ButtonGroup>
                                        </div>
                                    }
                                >
                                    { loremParagraph }
                                </Panel>
                            )
                        }
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Icon') }
                        <Panel
                            background='default'
                            header={
                                <span>
                                    <i className='fa fa-fw fa-ellipsis-v m-r-1 text-gray-lighter'></i>
                                    Panel with Alert Warning
                                </span>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                </Row>
                { /*    Panels with Alerts  */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Alert Success') }
                        <Panel
                            background='default'
                            fullBody
                            header={
                                <span>Panel with Alert Success</span>
                            }
                        >
                            <Alert
                                bsStyle='success'
                                className='m-y-0'
                                rounded={ false }
                            >
                                <Media>
                                    <Media.Left align='middle'>
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle-thin fa-stack-2x text-success"></i>
                                            <i className="fa fa-check fa-stack-1x text-success"></i>
                                        </span>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>
                                            <strong>Well Done!</strong>
                                        </Media.Heading>
                                        You successfully read this important alert message.
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <div className='panel-body'>
                                { loremParagraph }
                            </div>
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Alert Info') }
                        <Panel
                            background='default'
                            fullBody
                            header={
                                <span>Panel with Alert Info</span>
                            }
                        >
                            <Alert
                                bsStyle='info'
                                className='m-y-0'
                                rounded={ false }
                            >
                                <Media>
                                    <Media.Left align='middle'>
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle-thin fa-stack-2x text-primary"></i>
                                            <i className="fa fa-info fa-stack-1x text-primary"></i>
                                        </span>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>
                                            <strong>Heads Up!</strong>
                                        </Media.Heading>
                                        This alert needs your attention, but it's not super important.
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <div className='panel-body'>
                                { loremParagraph }
                            </div>
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Alert Warning') }
                        <Panel
                            background='default'
                            fullBody
                            header={
                                <span>Panel with Alert Warning</span>
                            }
                        >
                            <Alert
                                bsStyle='warning'
                                className='m-y-0'
                                rounded={ false }
                            >
                                <Media>
                                    <Media.Left align='middle'>
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle-thin fa-stack-2x text-warning"></i>
                                            <i className="fa fa-exclamation fa-stack-1x text-warning"></i>
                                        </span>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>
                                            <strong>Oh Snap!</strong>
                                        </Media.Heading>
                                        Change a few things up and try submitting again.
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <div className='panel-body'>
                                { loremParagraph }
                            </div>
                        </Panel>
                    </Col>
                </Row>
                { /*    Panels with Alerts  */ }
                <Row>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Alert Danger') }
                        <Panel
                            background='default'
                            fullBody
                            header={
                                <span>Panel with Alert Danger</span>
                            }
                        >
                            <Alert
                                bsStyle='danger'
                                className='m-y-0'
                                rounded={ false }
                            >
                                <Media>
                                    <Media.Left align='middle'>
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle-thin fa-stack-2x text-danger"></i>
                                            <i className="fa fa-close fa-stack-1x text-danger"></i>
                                        </span>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>
                                            <strong>Warning!</strong>
                                        </Media.Heading>
                                        Better check yourself, you're not looking too good.
                                    </Media.Body>
                                </Media>
                            </Alert>
                            <div className='panel-body'>
                                { loremParagraph }
                            </div>
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Pagination') }
                        <Panel
                            background='default'
                            header={
                                <div className='flex-space-between'>
                                    <span>Panel with Pagination</span>
                                    <Pagination
                                        bsSize='small'
                                        items={ 2 }
                                        activePage={ 1 }
                                        className='m-y-0'
                                        prev
                                        next
                                    />
                                </div>
                            }
                        >
                            { loremParagraph }
                        </Panel>
                    </Col>
                    <Col md={ 4 }>
                        { panelNotice('Panel with Options') }
                        {
                            this.isPanelOpen('gray_panel') && (
                                <Panel
                                    background='gray'
                                    header={
                                        <div className='flex-space-between'>
                                            <span>Panel with Options</span>
                                            <ButtonGroup
                                                bsSize='xs'
                                            >
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={(
                                                        <Tooltip id='option-fullscreen'>
                                                            Fullscreen
                                                        </Tooltip>
                                                    )}
                                                >
                                                    <Button bsStyle='link'>
                                                        <i className='fa fa-expand fa-fw fa-lg text-gray-lighter'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={(
                                                        <Tooltip id='option-collapse'>
                                                            Collapse
                                                        </Tooltip>
                                                    )}
                                                >
                                                    <Button bsStyle='link'>
                                                        <i className='fa fa-chevron-up fa-fw fa-lg text-gray-lighter'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={(
                                                        <Tooltip id='option-delete'>
                                                            Delete
                                                        </Tooltip>
                                                    )}
                                                >
                                                    <Button
                                                        bsStyle='link'
                                                        onClick={ () => this.closePanel('gray_panel') }
                                                    >
                                                        <i className='fa fa-close fa-fw fa-lg text-gray-lighter'></i>
                                                    </Button>
                                                </OverlayTrigger>
                                            </ButtonGroup>
                                        </div>
                                    }
                                >
                                    { loremParagraph }
                                </Panel>
                            )
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(PanelsContainer);
