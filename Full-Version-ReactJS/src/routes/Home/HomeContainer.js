import React from 'react';

class HomeContainer extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    componentDidMount() {
        this.context.router.push('/start/projects');
    }

    render() {
        return (<span></span>);
    }
}

export default HomeContainer;
