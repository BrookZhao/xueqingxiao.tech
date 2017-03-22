import React from 'react';
import classNames from 'classnames';
import './styles.less';

const generator = cls => ({ className, style, children }) => (
  <div
    className={classNames({[cls]: true , [className]: !!className})}
    style={style}>
    {children}
  </div>
);

const Layout = generator('xt-layout');
Layout.Header = generator('xt-layout-header');
Layout.Content = generator('xt-layout-content');
Layout.Footer = generator('xt-layout-footer');
Layout.Container = generator('xt-layout-container');

export default Layout;
