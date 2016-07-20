import React, { Component } from 'react';
import { Header } from 'modules/Header';

import './styles/index.less';

export class App extends Component {
  static propTypes = {
    prefixCls: React.PropTypes.string,
    children: React.PropTypes.any,
    location: React.PropTypes.any,
  };

  static contextTypes = {
    router: React.PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'app-container',
  };

  constructor(props, context) {
    super(props);
    context.router;
  }

  render() {
    const { prefixCls, children, ...props } = this.props;
    return (
      <div className={`${prefixCls}`}>
        <Header />
      </div>
    );
  }
}
