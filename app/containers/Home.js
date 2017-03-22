import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class Home extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props, context) {
    super(props);
    context.router;
  }

  render() {
    return (
      <div>
      
      </div>
    );
  }

};

// Home = Relay.createContainer(Home, {
//   fragments: {
//     viewer: () => Relay.QL `      
//     `
//   }
// })

export default Home;
