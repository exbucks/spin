import React from 'react';

import {
    Row,
    Col,
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';

import { Colors } from 'consts';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import classes from './dualList.scss';

import {
    AlignTopExample,
    BasicExample,
    DisabledExample,
    FilterExample,
    OptGroupExample,
    PreserveSelectOrderExample,
    RestrictAvailableExample
} from './examples';

// ------------------------------------
// Main Container
// ------------------------------------
class DualListContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className='p-b-3'>
                <Row>
                    <Col lg={ 12 }>
                        <div className={classes.example}>
                            <h4>Basic Exmaple</h4>
                            <p>
                                Below is your most basic example. It supports moving by double-clicking, pressing enter, or clicking the buttons in the middle of the panel.
                            </p>
                            <BasicExample />
                        </div>

                        <div className={classes.example}>
                            <h4>Optgroup Example</h4>
                            <p>
                                React Dual Listbox also supports the use of <kbd>optgroup</kbd>:
                            </p>
                            <OptGroupExample />
                        </div>

                        <div className={classes.example}>
                            <h4>Filter Example</h4>
                            <p>
                                To enable filtering, just pass in the <kbd>canFilter</kbd> property:
                            </p>
                            <FilterExample />
                        </div>

                        <div className={classes.example}>
                            <h4>Align Actions to Top Example</h4>
                            <p>
                                In addition to having the movement action aligned to the middle of the component, you can arrange them to the using the <kbd>alignActions</kbd> property:
                            </p>
                            <AlignTopExample />
                        </div>

                        <div className={classes.example}>
                            <h4>Disabled Example</h4>
                            <p>
                                Simply pass in the <kbd>disabled</kbd> property to disable this control:
                            </p>
                            <DisabledExample />
                        </div>

                        <div className={classes.example}>
                            <h4>Preserve Select Order Example</h4>
                            <p>
                                In the example below, the order in which you move the items to the right matters. Compare this with the default behavior, where the <strong>Moon</strong> is followed by <strong>Io</strong>.
                            </p>
                            <PreserveSelectOrderExample />
                        </div>

                        <div className={classes.example}>
                            <h4>Restrict Available Example</h4>
                            <p>
                                In the following example, we are restricting which options are available for selection. This may be useful if you wish to categorize a large list of items.
                            </p>
                            <RestrictAvailableExample />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(DualListContainer);
