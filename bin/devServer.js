import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from '../config/webpack.config';

const devServer = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: '/dist',
  proxy: {
    '/graphql': 'http://localhost:3000',
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
