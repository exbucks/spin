import React, { PropTypes } from 'react';
import faker from 'faker';
import {
    Row,
    Col,
    Modal,
    Button,
    OverlayTrigger,
    Tooltip,
    AvatarImage,
    Image,
    Divider
} from 'components';

import { Colors } from 'consts';

const callerData = {
    Callee: {
        Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        Position: faker.name.jobTitle()
    },
    Caller: {
        Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        Position: faker.name.jobTitle()
    }
};

const VideoModal = props => (
    <Modal show={ props.visible } onHide={ props.onClose } bsSize='large'>
        <Modal.Header closeButton>
            <Modal.Title>Video Conference with { callerData.Callee.Name }</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
            <Row>
                <Col md={ 6 } className='text-center'>
                    <Image
                        phIcon={(<i className='fa fa-video-camera fa-4x'></i>)}
                        height={ 200 }
                        phForegroundColor={ Colors.grayDark }
                    />
                    <h4 className='m-y-2'>
                        { callerData.Caller.Name }
                    </h4>
                    <p>
                        { callerData.Caller.Position }
                    </p>
                </Col>
                <Col md={ 6 }>
                    <Image
                        phIcon={(<i className='fa fa-video-camera fa-4x'></i>)}
                        height={ 200 }
                        phForegroundColor={ Colors.grayDarker }
                    />
                    <h4 className='m-y-2'>
                        { callerData.Callee.Name }
                    </h4>
                    <p>
                        { callerData.Callee.Position }
                    </p>
                </Col>
                <Col md={ 12 }>
                    <Divider textPosition='center'>
                        Contact Options
                    </Divider>
                    <div className='text-center m-y-1'>
                        <a href='javascript:;' className='p-x-1'>
                            <OverlayTrigger
                                placement='top'
                                overlay={(
                                    <Tooltip id='call-button'>
                                        Call
                                    </Tooltip>
                                )}
                            >
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x text-success"></i>
                                    <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
                                </span>
                            </OverlayTrigger>
                        </a>
                        <a href='javascript:;' className='p-x-1'>
                            <OverlayTrigger
                                placement='top'
                                overlay={(
                                    <Tooltip id='dismiss-button'>
                                        Dismiss
                                    </Tooltip>
                                )}
                            >
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x text-danger"></i>
                                    <i className="fa fa-close fa-stack-1x fa-inverse"></i>
                                </span>
                            </OverlayTrigger>
                        </a>
                        <a href='javascript:;' className='p-x-1'>
                            <OverlayTrigger
                                placement='top'
                                overlay={(
                                    <Tooltip id='chat-button'>
                                        Chat
                                    </Tooltip>
                                )}
                            >
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-comment fa-stack-1x fa-inverse"></i>
                                </span>
                            </OverlayTrigger>
                        </a>
                        <a href='javascript:;' className='p-x-1'>
                            <OverlayTrigger
                                placement='top'
                                overlay={(
                                    <Tooltip id='voice-only-button'>
                                        Voice Only
                                    </Tooltip>
                                )}
                            >
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x text-warning"></i>
                                    <i className="fa fa-microphone fa-stack-1x fa-inverse"></i>
                                </span>
                            </OverlayTrigger>
                        </a>
                    </div>
                </Col>
            </Row>
        </Modal.Body>
    </Modal>
);

VideoModal.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func
};

VideoModal.defaultProps = {
    onClose: () => { }
};

export default VideoModal;
