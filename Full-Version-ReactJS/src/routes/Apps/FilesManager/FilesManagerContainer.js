import React from 'react';
import uid from 'node-uuid';
import truncate from 'truncate';
import _ from 'underscore';
import moment from 'moment';
import deepAssign from 'assign-deep';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import {
    Row,
    Col,
    Panel,
    Button,
    Badge,
    ButtonGroup,
    ButtonToolbar,
    Dropdown,
    FormGroup,
    Label,
    MenuItem,
    Table,
    Media,
    Pagination,
    Divider,
    AvatarImage,
    Image,
    Thumbnail
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import treeRandomizer from 'modules/treeRandomizer';
import renderSection from 'modules/sectionRender';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import { Colors } from 'consts';
import filesData from 'consts/data/app-files.json';

import classes from './FilesManager.scss';
// ------------------------------------
// Subcomponents
// ------------------------------------
import {
    LabelsList,
    SideNav
} from './../components';

// ------------------------------------
// Config / Data Generator
// ------------------------------------
const getData = (inputData) => treeRandomizer(inputData);

const folders = [
    {
        icon: <i className="fa fa-fw fa-history"></i>,
        title: 'Updates'
    },
    {
        icon: <i className="fa fa-fw fa-files-o"></i>,
        title: 'Files'
    },
    {
        icon: <i className="fa fa-fw fa-users"></i>,
        title: 'Team'
    },
    {
        icon: <i className="fa fa-fw fa-image"></i>,
        title: 'Photos'
    },
    {
        icon: <i className="fa fa-fw fa-link"></i>,
        title: 'Links'
    },
    {
        icon: <i className="fa fa-fw fa-calendar-o"></i>,
        title: 'Events'
    },
    {
        icon: <i className="fa fa-fw fa-trash"></i>,
        title: 'Deleted'
    }
];

const labels = [
    { title: 'Documents', color: Colors.brandPrimary },
    { title: 'Pictures', color: Colors.brandInfo },
    { title: 'Videos', color: Colors.brandSuccess },
    { title: 'Music', color: Colors.brandWarning },
    { title: 'Other', color: Colors.brandDanger }
];
// ------------------------------------
// Sub Elements
// ------------------------------------
const renderDirectoriesList = directories => (
    <div className='m-t-2'>
        <Table>
            <thead>
                <tr>
                    <th>
                        Directory
                    </th>
                    <th>
                        Last Change
                    </th>
                    <th>
                        Share
                    </th>
                    <th>
                        Tags
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(directories, (directory, directoryIndex) => (
                        <tr key={ directory._id }>
                            <td>
                                <Media>
                                    <Media.Left align='middle'>
                                        <i className="fa fa-fw fa-folder-o fa-3x"></i>
                                    </Media.Left>
                                    <Media.Body>
                                        <p className="text-white m-b-0">
                                            { directory.name }
                                        </p>
                                        <span>
                                            { directory.size } MB
                                        </span>
                                    </Media.Body>
                                </Media>
                            </td>
                            <td>
                                { moment(directory.modifiedDate).format('DD MMMM, dddd, YYYY') }
                                <br />
                                { moment(directory.modifiedDate).format('hh:mm A') }
                            </td>
                            <td>
                                {
                                    _.map(directory.shareUsers, shareUser => (
                                        <AvatarImage
                                            key={ shareUser._id }
                                            src={ shareUser.avatar }
                                            className='m-r-1'
                                        />
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    _.map(directory.tags, (tag, index) => (
                                        <span key={ index }>
                                            <Label
                                                outline
                                            >
                                                { tag }
                                            </Label>
                                            { ' ' }
                                        </span>
                                    ))
                                }
                            </td>
                            <td>
                                <Dropdown id={`dropdown-dir-actions-${ directoryIndex }`} pullRight>
                                    <Dropdown.Toggle>
                                        <i className='fa fa-fw fa-gear'></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <MenuItem eventKey="1">
                                            <span>
                                                <i className='fa fa-fw fa-share text-gray-lighter m-r-1'></i>
                                                Share
                                            </span>
                                        </MenuItem>
                                        <MenuItem eventKey="2">
                                            <i className='fa fa-fw fa-cloud-download text-gray-lighter m-r-1'></i>
                                            Download
                                        </MenuItem>
                                        <MenuItem eventKey="3">
                                            <i className='fa fa-fw fa-trash text-gray-lighter m-r-1'></i>
                                            Delete
                                        </MenuItem>
                                        <MenuItem eventKey="4">
                                            <i className='fa fa-fw fa-pencil text-gray-lighter m-r-1'></i>
                                            Edit
                                        </MenuItem>

                                        <MenuItem divider />

                                        <MenuItem eventKey="6">
                                            <i className='fa fa-fw fa-copy text-gray-lighter m-r-1'></i>
                                            Copy
                                        </MenuItem>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>

        <div className='text-center'>
            <Pagination
                bsSize="medium"
                items={5}
                activePage={1}
                className='m-b-2'
                boundaryLinks
                prev
                next
                first
                last
                ellipsis
            />
        </div>
    </div>
);

const renderFilesGrid = files => (
    <div className='m-t-2'>
        <Row>
            {
                _.map(files, file => (
                    <Col md={ 4 } sm={ 6 } key={ file._id }>
                        <Thumbnail
                            className={ classes.fileContainer }
                            image={
                                <Image
                                    height={ 200 }
                                    block
                                    phForegroundColor={ Colors.grayLighter }
                                    phIcon={ <i className="fa fa-folder-o fa-4x"></i> }
                                />
                            }
                        >
                            <div>
                                <h5>
                                    { file.name }
                                    <small>
                                        { ` ${ file.size }` }
                                    </small>
                                </h5>
                                <p className="text-gray-light m-b-0">
                                    { truncate(file.fileName, 30) }
                                    <br />
                                    { file.ownerName }
                                    <br />
                                    { moment(file.modifiedDate).format('hh:mm A, dddd, DD MMMM YYYY') }
                                </p>
                                <div className='m-y-2'>
                                    {
                                        _.map(file.tags, (tag, index) => (
                                            <span key={ index }>
                                                <Label outline>
                                                    { tag }
                                                </Label>
                                                { ' ' }
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className="m-b-2">
                                    {
                                        _.map(file.shareUsers, shareUser => (
                                            <span key={ shareUser._id }>
                                                <AvatarImage
                                                    key={ shareUser._id }
                                                    src={ shareUser.avatar }
                                                    size='small'
                                                />
                                                { ' ' }
                                            </span>
                                        ))
                                    }
                                </div>

                                <Button block>
                                    Details
                                </Button>
                            </div>
                        </Thumbnail>
                    </Col>
                ))
            }
        </Row>

        <div className='text-center'>
            <Pagination
                bsSize="medium"
                items={5}
                activePage={1}
                className='m-b-2'
                boundaryLinks
                prev
                next
                first
                last
                ellipsis
            />
        </div>
    </div>
);

// ------------------------------------
// Main Container
// ------------------------------------
class FilesManagerContainer extends RoutedComponent {
    constructor(props, context) {
        super(props, context);

        this.state = deepAssign({}, this.state, {
            data: getData(filesData)
        });
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col lg={ 2 }>
                    <Row>
                        <Col lg={ 12 } xs={ 6 }>
                            <SideNav
                                items={ folders }
                            />
                        </Col>
                        <Col lg={ 12 } xs={ 6 }>
                            <Divider>Labels</Divider>
                            <LabelsList
                                items={ labels }
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={ 10 }>
                    {/*   List Header  */}
                    <Row>
                        <Col md={ 6 } sm={ 5 } xs={ 12 }>
                            <h3 className="m-y-0 f-w-300">
                                <a href="javascript:;">
                                    <i className="fa fa-fw fa-home"></i>
                                </a>
                                <span className='text-muted m-x-1'>
                                    <i className='fa fa-fw fa-angle-right'></i>
                                </span>
                                <span>
                                    Files Manager List
                                </span>
                                <Badge className='m-l-1'>
                                    94
                                </Badge>
                            </h3>
                            {/*     Mobile Actions  */}
                            <Row>
                                <Col
                                    md={ 12 }
                                    lgHidden
                                    mdHidden
                                    smHidden
                                    className='m-b-2'
                                >
                                    <ButtonGroup justified>
                                        <Button href="javascript:;">
                                            <i className='fa fa-search'></i>
                                        </Button>
                                        <Button href="javascript:;">
                                            <i className='fa fa-folder'></i>
                                        </Button>
                                        <Button href="javascript:;">
                                            <i className='fa fa-link'></i>
                                        </Button>
                                        <LinkContainer to='/apps/files-manager/files-list'>
                                            <Button href="javascript:;">
                                                <i className='fa fa-list'></i>
                                            </Button>
                                        </LinkContainer>
                                        <LinkContainer to='/apps/files-manager/files-grid'>
                                            <Button href="javascript:;">
                                                <i className='fa fa-th-large'></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button href="javascript:;">
                                            <i className='fa fa-plus'></i>
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col xsHidden md={ 6 } sm={ 7 }>
                            <ButtonToolbar className='pull-right'>
                                <ButtonGroup>
                                    <Button href='javascript:;'>
                                        <i className='fa fa-search'></i>
                                    </Button>
                                    <Button href='javascript:;'>
                                        <i className='fa fa-folder'></i>
                                    </Button>
                                    <Button href='javascript:;'>
                                        <i className='fa fa-link'></i>
                                    </Button>
                                    <Button href='javascript:;'>
                                        <i className='fa fa-trash'></i>
                                    </Button>
                                </ButtonGroup>

                                <ButtonGroup>
                                    <LinkContainer to='/apps/files-manager/files-list'>
                                        <Button href='javascript:;'>
                                            <i className='fa fa-list'></i>
                                        </Button>
                                    </LinkContainer>
                                    <LinkContainer to='/apps/files-manager/files-grid'>
                                        <Button href='javascript:;'>
                                            <i className='fa fa-th-large'></i>
                                        </Button>
                                    </LinkContainer>
                                </ButtonGroup>

                                <ButtonGroup>
                                    <Button href='javascript:;' bsStyle='primary'>
                                        <i className='fa fa-fw fa-plus'></i>
                                    </Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                    {/*   List Container   */}
                    <Row>
                        <Col lg={ 12 }>
                            { (this.props.routeParams.type === 'files-list' && renderSection(renderDirectoriesList, this.state.data.Directories)) }
                            { (this.props.routeParams.type === 'files-grid' && renderSection(renderFilesGrid, this.state.data.Files)) }
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(FilesManagerContainer);
