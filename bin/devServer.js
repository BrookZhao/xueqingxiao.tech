const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');

const devServer = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: '/dist',
  proxy: {
    '/api': 'http://localhost:3000',
  },
  stats: {
    colors: true
  },
  hot: true,
  historyApiFallback: true
});

devServer.listen(7070,
  () => console.log('Dev Server is running on http://localhost:7070')
);
