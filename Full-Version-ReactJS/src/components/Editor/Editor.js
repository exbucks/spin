import React from 'react';
import _ from 'underscore';
import { Editor as ReactEditor } from 'react-draft-wysiwyg';
import deepExtend from 'deep-extend';

import bold from './icons/bold.svg';
import italic from './icons/italic.svg';
import underline from './icons/underline.svg';
import strikethrough from './icons/strikethrough.svg';
import monospace from './icons/monospace.svg';
import fontSize from './icons/font-size.svg';
import indent from './icons/indent.svg';
import outdent from './icons/outdent.svg';
import ordered from './icons/list-ordered.svg';
import unordered from './icons/list-unordered.svg';
import left from './icons/align-left.svg';
import center from './icons/align-center.svg';
import right from './icons/align-right.svg';
import justify from './icons/align-justify.svg';
import color from './icons/color.svg';
import eraser from './icons/eraser.svg';
import link from './icons/link.svg';
import unlink from './icons/unlink.svg';
import emoji from './icons/emoji.svg';
import embedded from './icons/embedded.svg';
import image from './icons/image.svg';
import undo from './icons/undo.svg';
import redo from './icons/redo.svg';
import subscript from './icons/subscript.svg';
import superscript from './icons/superscript.svg';

const Editor = props => {
    const toolBar = deepExtend({}, props.toolbar, {
        inline: {
            bold: { icon: bold },
            italic: { icon: italic },
            underline: { icon: underline },
            strikethrough: { icon: strikethrough },
            monospace: { icon: monospace },
            superscript: { icon: superscript },
            subscript: { icon: subscript },
        },
        fontSize: { icon: fontSize },
        list: {
            unordered: { icon: unordered },
            ordered: { icon: ordered },
            indent: { icon: indent },
            outdent: { icon: outdent },
        },
        textAlign: {
            left: { icon: left },
            center: { icon: center },
            right: { icon: right },
            justify: { icon: justify }
        },
        colorPicker: { icon: color },
        link: {
            link: { icon: link },
            unlink: { icon: unlink },
        },
        emoji: { icon: emoji },
        embedded: { icon: embedded },
        image: { icon: image },
        remove: { icon: eraser },
        history: {
            undo: { icon: undo },
            redo: { icon: redo },
        }
    });

    return (
        <ReactEditor
            {..._.omit(props, ['toolbar'])}
            toolbar={ toolBar }
        />
    )
};

Editor.defaultProps = ReactEditor.defaultProps;

export default Editor;
