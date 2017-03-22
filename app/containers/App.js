import React from 'react';
import Layout from 'components/Layout';

export default props => (
  <Layout>
    <Layout.Header>
      <Layout.Container>
        Header
      </Layout.Container>
    </Layout.Header>
    <Layout.Content>
      <Layout.Container>
        {props.children}
      </Layout.Container>
    </Layout.Content>
    <Layout.Footer>
      <Layout.Container>
        Footer
      </Layout.Container>
    </Layout.Footer>
  </Layout>
);