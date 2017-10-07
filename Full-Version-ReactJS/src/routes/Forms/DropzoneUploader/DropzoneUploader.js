import React from 'react';
import _ from 'underscore';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import numeral from 'numeral';
import moment from 'moment';

import {
    Grid,
    Row,
    Col,
    Divider,
    Button,
    Table,
    Panel,
    ListGroup,
    ListGroupItem,
    Media,
    OverlayTrigger,
    Tooltip,
    Badge
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';

import { Colors } from 'consts';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './DropzoneUploader.scss';

const typeToIcon = type => {
    const map = {
        ['application/msword']: 'fa-file-word-o',
        ['application/excel']: 'fa-file-excel-o',
        ['application/vnd.oasis.opendocument.spreadsheet']: 'fa-file-excel-o',
        ['application/vnd.oasis.opendocument.presentation']: 'fa-file-powerpoint-o',
        ['application/mspowerpoint']: 'fa-file-powerpoint-o',
        ['application/x-zip-compressed']: 'fa-file-archive-o',
        ['image/jpeg']: 'fa-file-image-o',
        ['image/png']: 'fa-file-image-o',
        ['audio/mp3']: 'fa-file-audio-o',
        ['text/plain']: 'fa-file-text-o'
    }
    return map[type] || null;
}

const extToIcon = filename => {
    const map = {
        ['doc']: 'fa-file-word-o',
        ['docx']: 'fa-file-word-o',
        ['xls']: 'fa-file-excel-o',
        ['xlsx']: 'fa-file-excel-o',
        ['ppt']: 'fa-file-powerpoint-o',
        ['pdf']: 'fa-file-pdf-o'
    }

    return map[filename.split('.').pop()] || null;
}

const getFileIcon = file => {
    return typeToIcon(file.type) || extToIcon(file.name) || 'fa-file-o';
}

// ------------------------------------
// Main Container
// ------------------------------------
class DropzoneUploader extends RoutedComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOver: false,
            files: [],
            listStyle: 'grid',
        }
    }

    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    fileDropped(files) {
        this.setState({
            files: [...this.state.files, ...files],
            isOver: false
        })
    }

    removeFile(file) {
        this.setState({
            files: _.reject(this.state.files, file)
        })
    }

    renderList() {
        return (
            <ListGroup>
                {
                    this.state.files.map((file, index) => (
                        <ListGroupItem className={classes['list-item']} key={index}>
                            <Media>
                                <Media.Left align="middle">
                                    <div className={classes['ph--small']}>
                                        <i className={`fa fa-fw fa-2x ${getFileIcon(file)}`}></i>
                                    </div>
                                </Media.Left>
                                <Media.Body>
                                    <p className='text-white m-y-0'>{ file.name }</p>
                                    <p className='m-y-0'>
                                        by You &middot; <span className='text-uppercase'>{`${numeral(file.size).format('0.00a')}B`}</span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Body className='text-right'>
                                    <p className='m-y-0'>
                                        { moment(file.modifiedDate).format('DD-MMM-YYYY') }
                                    </p>
                                    <p className='m-y-0'>
                                        { moment(file.modifiedDate).format('HH:mm') }
                                    </p>
                                </Media.Body>
                                <Media.Right align="middle">
                                    <OverlayTrigger
                                        overlay={<Tooltip id='tooltip-delete-file'>Delete File</Tooltip>}
                                        placement='left'
                                    >
                                        <Button bsStyle='link' bsSize='sm' onClick={() => this.removeFile(file)}>
                                            <i className='fa fa-times text-danger'></i>
                                        </Button>
                                    </OverlayTrigger>
                                </Media.Right>
                            </Media>
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        );
    }

    renderGrid() {
        return (
            <Row>
                {
                    this.state.files.map((file, index) => (
                        <Col lg={3} md={6} key={index}>
                            <Panel className={classes['grid-panel']} fullBody>
                                <div className={classes['ph--large']}>
                                    <i className={`fa fa-fw fa-3x ${getFileIcon(file)}`}></i>
                                </div>
                                <div className='p-l-1'>
                                    <p className={classes['title-delete']}>
                                        <span>{ file.name }</span>
                                        <OverlayTrigger
                                            overlay={<Tooltip id='tooltip-delete-file'>Delete File</Tooltip>}
                                            placement='left'
                                        >
                                            <Button bsStyle='link' bsSize='sm' onClick={() => this.removeFile(file)}>
                                                <i className='fa fa-times text-danger'></i>
                                            </Button>
                                        </OverlayTrigger>
                                    </p>
                                    <p className='m-b-0'>
                                        by You &middot; <span className='text-uppercase'>{`${numeral(file.size).format('0.00a')}B`}</span>
                                    </p>
                                    <p className='m-y-1'>
                                        { moment(file.modifiedDate).format('DD-MMM-YYYY, HH:mm') }
                                    </p>
                                </div>
                            </Panel>
                        </Col>
                    ))
                }
            </Row>
        );
    }

    renderFiles() {
        const { listStyle } = this.state;

        return (
            <div className='m-t-3'>
                <div className={classes['divider']}>
                    <Divider className={classes['divider--line']}>
                        Attachments
                        <Badge className='m-l-1'>
                            { this.state.files.length }
                        </Badge>
                    </Divider>
                    <div className={classes['divider--actions']}>
                        <OverlayTrigger
                            overlay={<Tooltip id='tooltip-view-list'>List View</Tooltip>}
                            placement='left'
                        >
                            <a
                                className={`${classes['action']} ${listStyle === 'list' && classes['action--active']}`}
                                onClick={() => {this.setState({listStyle: 'list'})}}
                                href='javascript:;'
                            >
                                <i className='fa fa-bars fa-fw'></i>
                            </a>
                        </OverlayTrigger>

                        <OverlayTrigger
                            overlay={<Tooltip id='tooltip-view-grid'>Grid View</Tooltip>}
                            placement='left'
                        >
                            <a
                                className={`${classes['action']} ${listStyle === 'grid' && classes['action--active']}`}
                                onClick={() => {this.setState({listStyle: 'grid'})}}
                                href='javascript:;'
                            >
                                <i className='fa fa-th-large fa-fw'></i>
                            </a>
                        </OverlayTrigger>
                    </div>
                </div>
                <div>
                    { listStyle === 'list' && this.renderList() }
                    { listStyle === 'grid' && this.renderGrid() }
                </div>
            </div>
        );
    }

    render() {
        const { isOver } = this.state;
        const dropzoneClass = classNames({
            [classes['dropzone--active']]: isOver
        }, classes['dropzone']);

        return (
            <div className={ classes.mainWrap }>
                <Row>
                    <Col lg={ 12 }>
                        <p className='m-b-3'>
                            Simple HTML5-compliant drag'n'drop zone for files built with React.js.
                        </p>
                        <p className='small text-uppercase text-muted'>
                            <strong>
                                Example demonstrating drag nad drop of native files
                            </strong>
                        </p>

                        <Dropzone
                            className={dropzoneClass}
                            multiple
                            onDragEnter={(ev) => { this.setState({isOver: true}) }}
                            onDragLeave={(ev) => { this.setState({isOver: false}) }}
                            onDrop={this.fileDropped.bind(this)}
                        >
                            <i className={`fa fa-cloud-upload fa-fw fa-3x ${classes['icon']}`}></i>
                            <h4 className='m-t-0'>
                                Upload Your files
                            </h4>
                            <p>
                                Drag a file here or <span className='text-primary'>browse</span> for a file to upload.
                            </p>
                            <p>
                                JPG, GIF, PNG, MOV, and AVI. Please choose files under 2GB for upload. File sizes are 400x300px.
                            </p>
                        </Dropzone>

                        { !_.isEmpty(this.state.files) && this.renderFiles() }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(DropzoneUploader);
