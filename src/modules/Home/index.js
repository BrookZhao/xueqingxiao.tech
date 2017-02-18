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
        <h1>Shawn Sit</h1>
        <ul className="nav">
          <li><a href="https://github.com/xueqingxiao">Github</a></li>
          <li><a href="http://weibo.com/u/2643616294">Weibo</a></li>
          <li><a href="https://twitter.com/xueqingxiao">Twitter</a></li>
        </ul>
      </div>
    );
  }
}
