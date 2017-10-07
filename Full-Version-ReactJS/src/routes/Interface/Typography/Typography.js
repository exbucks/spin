import React from 'react';

import {
    Row,
    Col,
    PageHeader,
    Divider
} from 'components';

import { RoutedComponent, connect } from 'routes/routedComponent';
import { CONTENT_VIEW_STATIC } from 'layouts/DefaultLayout/modules/layout';

class TypographyContainer extends RoutedComponent {
    getLayoutOptions() {
        return {
            contentView: CONTENT_VIEW_STATIC
        }
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <h5 className="m-b-1">
                        Lead Body Copy
                    </h5>
                    <p>
                        Make a paragraph stand out by adding <kbd>.lead</kbd>.
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <p className="lead">
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    </p>

                    <h5 className="m-t-3 m-b-1">
                        Body Copy
                    </h5>
                    <p>
                        Bootstrap's global default <kbd>font-size</kbd> is <strong>14px</strong>, with a line-height of <strong>1.428</strong>. This is applied to the <kbd>&lt;body&gt;</kbd> and all paragraphs. In addition, <kbd>&lt;p&gt;</kbd> (paragraphs) receive a bottom margin of half their computed line-height (10px by default).
                    </p>
                    <p className="small text-uppercase m-t-2">
                        <strong>Example</strong>
                    </p>
                    <p>
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    </p>

                    <h5 className="m-t-3 m-b-1">
                        Headings
                    </h5>
                    <p>
                        All HTML headings, <kbd>&lt;h1&gt;</kbd> through <kbd>&lt;h6&gt;</kbd>, are available. .h1 through <kbd>.h6</kbd> classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.
                    </p>
                    <Row>
                        <Col md={ 6 }>
                            <p className="small text-uppercase m-t-2">
                                <strong>Basic Body</strong>
                            </p>
                            <h1 className='m-t-1'>
                                h1. Bootstrap heading
                            </h1>
                            <h2>
                                h2. Bootstrap heading
                            </h2>
                            <h3>
                                h3. Bootstrap heading
                            </h3>
                            <h4>
                                h4. Bootstrap heading
                            </h4>
                            <h5>
                                h5. Bootstrap heading
                            </h5>
                            <h6>
                                h6. Bootstrap heading
                            </h6>
                        </Col>
                        <Col md={ 6 }>
                            <p className="small text-uppercase m-t-2">
                                <strong>Example with &lt;small&gt; element</strong>
                            </p>
                            <h1 className='m-t-1'>
                                h1. Bootstrap heading
                                <small>Secondary text</small>
                            </h1>
                            <h2>
                                h2. Bootstrap heading
                                <small>Secondary text</small>
                            </h2>
                            <h3>
                                h4. Bootstrap heading
                                <small>Secondary text</small>
                            </h3>
                            <h4>
                                h4. Bootstrap heading
                                <small>Secondary text</small>
                            </h4>
                            <h5>
                                h5. Bootstrap heading
                                <small>Secondary text</small>
                            </h5>
                            <h6>
                                h6. Bootstrap heading
                                <small>Secondary text</small>
                            </h6>
                        </Col>
                    </Row>

                    <h5 className="m-t-3 m-b-1">
                        Page Header
                    </h5>
                    <p>
                        A simple shell for an <kbd>.h1</kbd> to appropriately space out and segment sections of content on a page. It can utilize the <kbd>.h1</kbd>'s default <kbd>.small</kbd> element, as well as most other components (with additional styles).
                    </p>
                    <p className="small text-uppercase m-b-0 m-t-2">
                        <strong>Examples</strong>
                    </p>
                    <PageHeader
                        className='m-b-3 m-t-0'
                    >
                        Example page header <small>Subtext for header</small>
                    </PageHeader>

                    <h5 className="m-t-3 m-b-1">
                        HR Headers
                    </h5>
                    <p>
                        Very good to use especially for headers in tablet or mobile. 3 examples below.
                    </p>
                    <p className="small text-uppercase m-b-0 m-t-2">
                        <strong>Examples</strong>
                    </p>
                    <Row>
                        <Col lg={ 4 }>
                            <Divider textPosition='left'>
                                HR Text Left
                            </Divider>
                        </Col>
                        <Col lg={ 4 }>
                            <Divider textPosition='center'>
                                HR Text Center
                            </Divider>
                        </Col>
                        <Col lg={ 4 }>
                            <Divider textPosition='right'>
                                HR Text Right
                            </Divider>
                        </Col>
                    </Row>

                    <h5 className="m-t-3 m-b-1">
                        Display Headings
                    </h5>
                    <p>
                        Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading - a larger, slightly more opinionated heading style.
                    </p>
                    <p className="small text-uppercase m-b-0 m-t-2">
                        <strong>Examples</strong>
                    </p>
                    <Row>
                        <Col lg={ 6 }>
                            <h1 className='display-1'>
                                Display 1
                            </h1>
                            <h1 className='display-2'>
                                Display 2
                            </h1>
                        </Col>
                        <Col lg={ 6 }>
                            <h1 className='display-3'>
                                Display 3
                            </h1>
                            <h1 className='display-4'>
                                Display 4
                            </h1>
                        </Col>
                    </Row>

                    <h5 className="m-t-3 m-b-1">
                        Contextual colors
                    </h5>
                    <p>
                        Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.
                    </p>
                    <Row>
                        <Col lg={ 4 }>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples Defaults</strong>
                            </p>

                            <p className="text-muted">This is an example of Muted Text.</p>
                            <p>This is an example of Normal Text.</p>
                            <p className="text-white">This is an example of White Text.</p>
                            <p className="text-primary">This is an example of Primary Text.</p>
                            <p className="text-success">This is an example of Success Text.</p>
                            <p className="text-info">This is an example of Info Text.</p>
                            <p className="text-warning">This is an example of Warning Text.</p>
                            <p className="text-danger">This is an example of Danger Text.</p>
                        </Col>

                        <Col lg={ 4 }>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples Custom Colors</strong>
                            </p>

                            <p className="text-cerulean">This is an example of Cerulean Text.</p>
                            <p className="text-curious-blue">This is an example of Curious Blue Text.</p>
                            <p className="text-endaveour">This is an example of Endaveour Text.</p>
                            <p className="text-minsk">This is an example of Minsk Text.</p>
                            <p className="text-eminence">This is an example of Eminence Text.</p>
                            <p className="text-violet-eggplant">This is an example of Violet Eggplant Text.</p>
                            <p className="text-mint-green">This is an example of Mint Green Text.</p>
                            <p className="text-aquamarine">This is an example of Aquamarine Text.</p>
                            <p className="text-dodger-blue">This is an example of Dodger Blue Text.</p>
                            <p className="text-heliotrope">This is an example of Heliotrope Text.</p>
                            <p className="text-heliotrope">This is an example of Perfume Text.</p>
                        </Col>

                        <Col lg={ 4 }>
                            <p className="small text-uppercase m-t-2">
                                <strong>Examples Grays Colors</strong>
                            </p>

                            <p className="text-gray-darker">This is an example of Gray Darker Text.</p>
                            <p className="text-gray-dark">This is an example of Gray Dark Text.</p>
                            <p className="text-gray">This is an example of Gray Text.</p>
                            <p className="text-gray-light">This is an example of Gray Light Text.</p>
                            <p className="text-gray-lighter">This is an example of Gray Lighter Text.</p>
                        </Col>
                    </Row>

                    <h5 className="m-t-3 m-b-2">
                        Inline Body Text
                    </h5>
                    <Row>
                        <Col md={ 6 }>
                            <p>
                                <strong className="text-white">Marked Text:  </strong>
                                <span>You can use the mark tag to <mark>highlight</mark> text.</span>
                            </p>
                            <p>
                                <strong className="text-white">Deleted Text:  </strong>
                                <span><del>This line of text is meant to be treated as deleted text.</del></span>
                            </p>
                            <p>
                                <strong className="text-white">Strikethrough Text:  </strong>
                                <span><s>This line of text is meant to be treated as no longer accurate.</s></span>
                            </p>
                            <p>
                                <strong className="text-white">Inserted Text:  </strong>
                                <span><ins>This line of text is meant to be treated as an addition to the document.</ins></span>
                            </p>
                            <p>
                                <strong className="text-white">Underlined Text:  </strong>
                                <span><u>This line of text will render as underlined</u></span>
                            </p>
                            <p>
                                <strong className="text-white">Small Text:  </strong>
                                <span><small>This line of text is meant to be treated as fine print.</small></span>
                            </p>
                        </Col>
                        <Col md={ 6 }>
                            <p>
                                <strong className="text-white">Bold Text:  </strong>
                                <span>The following snippet of text is rendered as <strong>bold text.</strong></span>
                            </p>
                            <p>
                                <strong className="text-white">Italics Text:  </strong>
                                <span>The following snippet of text is <em>rendered as italicized text.</em></span>
                            </p>
                            <p>
                                <strong className="text-white">Basic Abbreviation:  </strong>
                                <span>An abbreviation of the word attribute is <abbr title="attribute">attr.</abbr></span>
                            </p>
                            <p>
                                <strong className="text-white">Initialism:  </strong>
                                <span><abbr title="HyperText Markup Language" className="initialism">HTML</abbr> is the best thing since sliced bread.</span>
                            </p>
                            <p>
                                <strong className="text-white">Transform Classes:  </strong>
                                <span className="text-lowercase">Lowercased text.</span> / <span className="text-uppercase">Uppercased text.</span> / <span className="text-capitalize">Capitalized text.</span>
                            </p>
                        </Col>
                    </Row>

                    <h5 className="m-t-3 m-b-2">
                        Descriptions
                    </h5>
                    <Row>
                        <Col lg={ 6 }>
                            <dl>
                                <dt className="text-white">Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt className="text-white">Euismod</dt>
                                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                <dt className="text-white">Malesuada porta</dt>
                                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                            </dl>
                        </Col>
                        <Col lg={ 6 }>
                            <dl className='dl-horizontal'>
                                <dt className="text-white">Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt className="text-white">Euismod</dt>
                                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                <dt className="text-white">Malesuada porta</dt>
                                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                                <dt className="text-white">Felis euismod semper eget lacinia</dt>
                                <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
                            </dl>
                        </Col>
                    </Row>

                    <h5 className="m-t-3 m-b-2">
                        Blockquotes
                    </h5>
                    <Row>
                        <Col lg={ 4 } md={ 12 }>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            </blockquote>
                        </Col>
                        <Col lg={ 4 } md={ 12 }>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Col>
                        <Col lg={ 4 } md={ 12 }>
                            <blockquote className="blockquote-reverse">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Col>
                    </Row>

                    <h5 className="m-t-3 m-b-2">
                        Code
                    </h5>
                    <Row>
                        <Col lg={ 4 } md={ 12 }>
                            <pre>
                                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;p&gt;
                            </pre>
                        </Col>
                        <Col lg={ 4 } md={ 12 }>
                            <p>
                                To switch directories, type <kbd>cd</kbd> followed by the name of the directory. To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
                            </p>
                            <p className="small text-muted text-uppercase">
                                <strong>Inline</strong>
                            </p>
                            For example, <code>&lt;section&gt;</code> should be wrapped as inline.
                        </Col>
                        <Col lg={ 4 } md={ 12 }>
                            <p>
                                <samp>This text is meant to be treated as sample output from a computer program.</samp>
                            </p>
                            <p className="small text-muted text-uppercase">
                                <strong>Variables</strong>
                            </p>
                            <var>y</var> = <var>m</var><var>x</var> + <var>b</var>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect()(TypographyContainer);
