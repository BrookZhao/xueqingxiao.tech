import React from 'react';
import {
  Layout,
  Header,
} from 'components';

export default props => (
  <Layout>
    <Layout.Header>
      <Layout.Container>
        <Header/>
      </Layout.Container>
    </Layout.Header>
    <Layout.Content>
      <Layout.Container>
        {props.children}
      </Layout.Container>
    </Layout.Content>
    <Layout.Container>
      Footer
    </Layout.Container>
  </Layout>
);