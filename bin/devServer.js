import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from '../config/webpack.config';

const devServer = new WebpackDevServer(webpack(webpackConfig));

devServer.listen(7070,
  () => console.log('Dev Server is running on http://localhost:707')
);
