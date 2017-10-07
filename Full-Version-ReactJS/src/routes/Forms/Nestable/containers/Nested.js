import React, { PropTypes } from 'react';
import Nestable from 'react-nestable';
import classes from './../nestable.scss';

import {
    OverlayTrigger,
    Tooltip,
    Form,
    FormGroup,
    Button,
    Checkbox
} from 'components';

import { people } from './';

import {
    Person
} from './../components';

class NestedContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultCollapse: false,
            people: [
                {
                    ..._.first(Array.from(people(1))),
                    children: Array.from(people(2))
                },
                {
                    ..._.first(Array.from(people(1))),
                    children: Array.from(people(1))
                }
            ]
        }
    }

    collapse(collapseCase) {
        if(this.refNestable) {
            switch (collapseCase) {
                case 0:
                    this.refNestable.collapse('NONE');
                    break;
                case 1:
                    this.refNestable.collapse('ALL');
                    break;
            }
        }
    }

    renderItem({ item, collapseIcon, handler }) {
        let icon = null;
        if(collapseIcon && collapseIcon.props.className.indexOf('-minus-') >= 0) {
            icon = (
                <OverlayTrigger overlay={<Tooltip>Collapse</Tooltip>}>
                    <a href="javascript:;" onClick={collapseIcon.props.onClick}>
                        <i className='fa fa-angle-down fa-fw text-gray-lighter'></i>
                    </a>
                </OverlayTrigger>
            )
        }
        if(collapseIcon && collapseIcon.props.className.indexOf('-plus-') >= 0) {
            icon = (
                <OverlayTrigger overlay={<Tooltip>Expand</Tooltip>}>
                    <a href="javascript:;" onClick={collapseIcon.props.onClick}>
                        <i className='fa fa-angle-right fa-fw text-gray-lighter'></i>
                    </a>
                </OverlayTrigger>
            )
        }

        return (
            <Person {...item} icon={icon} className={classes['person--nested']} />
        );
    }

    render() {
        return (
            <div>
                <Nestable
                    group="0"
                    items={this.state.people}
                    collapsed={this.state.defaultCollapse}
                    renderItem={this.renderItem}
                    ref={el => this.refNestable = el}
                />

                <hr className='m-t-3' />

                <Form inline>
                    <FormGroup className='m-r-1'>
                        <Button bsStyle='default' onClick={e => this.collapse(0)}>
                            Expand All
                        </Button>
                    </FormGroup>

                    <FormGroup className='m-r-1'>
                        <Button bsStyle='default' onClick={e => this.collapse(1)}>
                            Collapse All
                        </Button>
                    </FormGroup>

                    <FormGroup>
                        <Checkbox onChange={(ev) => {this.setState({defaultCollapse: ev.target.value === 'on'})}}>&nbsp;Collapsed By Default</Checkbox>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default NestedContainer;
