import React from 'react';
import Relay from 'react-relay';
import {
  Layout,
  Header,
} from 'components';

let App = ({viewer, children}) => (
  <Layout>
    <Layout.Header>
      <Layout.Container>
        <Header navigations={viewer.navigations}/>
      </Layout.Container>
    </Layout.Header>
    <Layout.Content>
      {children}
    </Layout.Content>
    <Layout.Container>
      Footer
    </Layout.Container>
  </Layout>
);

App = Relay.createContainer(App, {
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

export default App;