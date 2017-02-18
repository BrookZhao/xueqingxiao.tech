import React, { Component } from 'react';
import { Link } from 'react-router';

import './index.less';

export class Header extends Component {
  static propTypes = {
    prefixCls: React.PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'header-bar',
  };

  render() {
    const { prefixCls } = this.props;
    return (
      <header className={`${prefixCls} clearfix`}>
      </header>
    );
  }
}
