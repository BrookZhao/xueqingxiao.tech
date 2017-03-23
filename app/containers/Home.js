import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import {
  Layout,
  Header,
} from 'components';

class Home extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props, context) {
    super(props);
    context.router;
  }

  render() {
    const { navigations } = this.props.viewer;
    return (
      <Layout.Container>
        content
      </Layout.Container>
    );
  }

};

Home = Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL `
      fragment on Viewer {
        articles(last: 10, orderBy: UPDATED_ASC) {
          edges {
            node {
              id
              title
              author
              content
              likes
              uv          
            }
          }
        }
      }    
    `
  }
})

export default Home;
