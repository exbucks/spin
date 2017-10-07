import React, { PropTypes } from 'react';
import _ from 'underscore';

import classes from './wizard.scss';

class Wizard extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        onStepChanged: PropTypes.func,
        activeStep: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            activeStep: this.props.activeStep
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.activeStep !== this.props.activeStep) {
            this.setState({
                activeStep: nextProps.activeStep
            })
        }
    }

    stepClick(id) {
        this.setState({
            activeStep: id
        });

        this.props.onStepChanged(id);
    }

    render() {
        const { children } = this.props;
        const { activeStep } = this.state;

        return (
            <div className={classes['wizard']}>
                {
                    _.map(children, child => (
                        React.cloneElement(child, {
                            onClick: () => {this.stepClick(child.props.id || '')},
                            active: child.props.id === activeStep
                        })
                    ))
                }
            </div>
        );
    }
}

export default Wizard;
