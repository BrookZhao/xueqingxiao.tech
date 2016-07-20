import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
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
        <Row>
          <Col className xs={24} sm={7} md={6} lg={7} >
            <Icon className="nav-icon" type="menu" />
            <Link className="logo coming-soon" to="/" >Shawn Sit</Link>
          </Col>
        </Row>
      </header>
    );
  }
}
