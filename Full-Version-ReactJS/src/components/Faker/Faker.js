import React, { PropTypes } from 'react';
import faker from 'faker';
import _ from 'underscore';
import uid from 'node-uuid';

const pad = (num, size) => {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

faker.date.day = () => {
    return pad(1 + Math.floor(Math.random() * 31), 2);
}

faker.date.monthDigit = () => {
    return pad(1 + Math.floor(Math.random() * 12), 2);
}

faker.date.time = () => {
    var hours = pad(1 + Math.floor(Math.random() * 12), 2),
        minutes = pad(1 + Math.floor(Math.random() * 60), 2)
    return (hours + ':' + minutes);
}

faker.date.year = () => {
    return (2011 + Math.floor(Math.random() * 6)).toString();
}

faker.date.monthShort = () => {
    return faker.date.month().substr(0, 3);
}

faker.date.weekdayShort = () => {
    return faker.date.weekday().substr(0, 3);
}

const executeFakerCommand = (command) => {
    const fakerCommand = command.replace(/\[/g, '{{')
                                .replace(/\]/g, '}}');
    const fakerData = faker.fake(fakerCommand);

    return fakerData;
}

class Faker extends React.Component {
    static propTypes = {
        children: PropTypes.string.isRequired
    }

    constructor() {
        super();

        this.prevValue = null;
    }

    fake(command) {
        if(!this.prevValue) {
            this.prevValue = executeFakerCommand(command);
        }
        return this.prevValue;
    }

    render() {
        const propsNoChild = _.omit(this.props, 'children');

        return (<span { ...propsNoChild }>{ this.fake(this.props.children) }</span>)
    }
}

class FakerImage extends React.Component {
    static propTypes = {
        imageType: PropTypes.string.isRequired,
    }

    constructor() {
        super();

        this.lastImageUrl = null;
    }

    fake(imageType) {
        if(!this.lastImageUrl) {
            this.lastImageUrl = faker.image[imageType]();
        }
        return this.lastImageUrl;
    }

    render() {
        const imageProps = _.omit(this.props, 'imageType');

        return (
            <img {...imageProps} src={ this.fake(this.props.imageType) } />
        );
    }
}

export { Faker, FakerImage }
