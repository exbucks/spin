import React from 'react';

import {
    Row,
    Col,
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import renderSection from 'modules/sectionRender';

import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

import {
    AsyncExample,
    BasicBehaviorsExample,
    BasicExample,
    BodyContainerExample,
    CustomFilteringExample,
    CustomSelectionsExample,
    FilteringExample,
    FormSubmitExample,
    InputSizeExample,
    LabelKeyExample,
    MenuAlignExample,
    PaginationExample,
    PublicMethodsExample,
    RenderingExample,
    SelectionsExample
} from './examples';

// ------------------------------------
// Main Container
// ------------------------------------
class TypeaheadContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <div className='p-b-3 form'>
                <Row>
                    <Col lg={12}>
                        <h4>
                            Asynchronous Searching
                        </h4>
                        <p>
                            You can use the `AsyncTypeahead` component for asynchronous searches. It
                            debounces user input, sets the `isLoading` prop depending on whether the
                            request is pending, and includes a simple query cache to avoid making the
                            same request more than once.
                        </p>
                        <AsyncExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Basic Example
                        </h4>
                        <p>
                            The typeahead allows single-selection by default. Setting the `multiple`
                            prop turns the component into a tokenizer, allowing multiple selections.
                        </p>
                        <BasicExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Basic Behavior
                        </h4>
                        <p>
                            The most basic example.
                        </p>
                        <BasicBehaviorsExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Controlling Selections
                        </h4>
                        <p>
                            You can pre-populate the the typeahead by passing in an array of
                            selections. Setting the `clearButton` prop displays a button allowing
                            users to clear the input.
                        </p>
                        <SelectionsExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Input Size
                        </h4>
                        <p>
                            Besides the default input size, you can specify either a `small` or
                            `large` size using the `bsSize` prop.
                        </p>
                        <InputSizeExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Menu Alignment
                        </h4>
                        <p>
                            Specify alignment of the menu via the `align` prop. Valid values
                            are `justify`, `left`, or `right`.
                        </p>
                        <MenuAlignExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Use With Forms
                        </h4>
                        <p>
                            To prevent inadvertent form submission, the typeahead does not propagate
                            Return/Enter key events by default. However, you can override this
                            behavior with the `submitFormOnEnter` prop.
                        </p>
                        <FormSubmitExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Pagination
                        </h4>
                        <p>
                            To improve browser performance, the typeahead paginates large data sets
                            by default. You can set the number of results to be displayed using
                            `maxResults`, or override pagination completely using `paginate`. The
                            `onPaginate` hook allows you to respond to the pagination event.
                        </p>
                        <PaginationExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Body Container
                        </h4>
                        <p>
                            Setting the `bodyContainer` prop will attach the menu to `document.body`
                            instead of the typeahead. Compare the behaviors in the srolling container
                            below.
                        </p>
                        <BodyContainerExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Custom Selections
                        </h4>
                        <p>
                            Setting the `allowNew` prop provides the ability to create new options for
                            the data set. You can change the label displayed before the custom option
                            in the menu by using the `newSelectionPrefix` prop.
                        </p>
                        <CustomSelectionsExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Default Filtering
                        </h4>
                        <p>
                            By default, the typeahead is not case-sensitive and ignores diacritical
                            marks when filtering. You can change these behaviors using the
                            `caseSensitive` and `ignoreDiacritics` props.
                        </p>
                        <FilteringExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Custom Filtering
                        </h4>
                        <p>
                            Using the `filterBy` prop, you can either specify your own callback or an
                            array of fields on your data object by which to filter.
                        </p>
                        <CustomFilteringExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Public Methods
                        </h4>
                        <p>
                            The `clear`, `focus`, and `blur` methods are exposed for programmatic
                            control of the typeahead.
                        </p>
                        <PublicMethodsExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            Custom Rendering
                        </h4>
                        <p>
                            You can customize how the typeahead looks and behaves by using the
                            provided rendering hooks.
                        </p>
                        <RenderingExample />
                    </Col>

                    <Col lg={12}>
                        <h4>
                            LabelKey
                        </h4>
                        <p>
                            The `labelKey` prop accepts a callback allowing you to transform your data
                            and return a compound string rather than just a single data field.
                        </p>
                        <LabelKeyExample />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(TypeaheadContainer);
