import React from 'react';
import './styles.less';
import { Link } from 'react-router';

export default ({ navigations }) => (
  <div className="wt-header">
    <div className="wt-header-title">
      <a href='/'>Shawn Sit</a>
    </div>
    <div className="wt-header-navgation">
    {navigations.edges.map(edge => (
      <a
        key={edge.node.id}
        href={edge.node.link}>
        {edge.node.name}
      </a>
    ))}
    </div>
  </div>
);
