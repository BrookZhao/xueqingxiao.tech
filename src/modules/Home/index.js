import React, { Component } from 'react';

import './styles/index.less';

export class Home extends Component {
  static propTypes = {
    prefixCls: React.PropTypes.string,
    children: React.PropTypes.any,
  };

  static contextTypes = {
    router: React.PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'content',
  };

  constructor(props, context) {
    super(props);
    context.router;
  }

  render() {
    const { prefixCls, children, ...props } = this.props;
    return (
      <div className={`${prefixCls}`}>
        <p>Shawn Sit</p>
      </div>
    );
  }
}
