import React from 'react';
import PropTypes from 'prop-types';

class HomeContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.context.router.push('/start/projects');
  }

  render() {
    return <span></span>;
  }
}

export default HomeContainer;
