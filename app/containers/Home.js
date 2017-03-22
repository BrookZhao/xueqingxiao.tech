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
      <Layout>
        <Layout.Header>
          <Layout.Container>
            <Header navigations={navigations}/>
          </Layout.Container>
        </Layout.Header>
        <Layout.Content>
          <Layout.Container>
            
          </Layout.Container>
        </Layout.Content>
        <Layout.Container>
          Footer
        </Layout.Container>
      </Layout>
    );
  }

};

Home = Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL `
      fragment on Viewer {
        navigations(last: 10, orderBy: NAME_DESC) {
          edges {
            node {
              id
              name
              link
            }
          }
        }
      }    
    `
  }
})

export default Home;
