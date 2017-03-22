import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import ExtractTextPlugin from "extract-text-webpack-plugin";
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const env = process.env.NODE_ENV;
const __DEV__ = (env === 'development');
const __PROD__ = (env === 'production');

const PATHS = {
  app: path.join(__dirname, '../app'),
  dist: path.join(__dirname, '../dist'),
  publicPath: './',
}

const webpackConfig = {
  entry: [
    `${PATHS.app}/index`,
  ],
  module: {},
  resoleve: {
    alias: {
      components: `${PATHS.app}/components`,
      redux: `${PATHS.app}/redux`,
    }
  },
  // performance: {},
  plugins: [],
};
if (__DEV__) {
  webpackConfig.entry.push(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  );
  webpackConfig.devtool = 'inline-source-map';
}

webpackConfig.output = {
  path: PATHS.dist,
  filename: '[name]-[hash].js',
  publicPath: PATHS.publicPath,
};

webpackConfig.module.rules = [{
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: 'babel-loader',
}];

if (__DEV__) {
  webpackConfig.module.rules.push({
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
  });
}

if (__PROD__) {
  webpackConfig.module.rules.push({
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'less-loader'],
    })
  });
}

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    template: 'src/assets/template.html',
    inject: 'body',
  }),
];
if (__DEV__) {
  webpackConfig.plugins.push(
    new WriteFilePlugin(),
    new webpack.HotModuleReplacementPlugin()
  );
}
if (__PROD__) {
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('app-[hash].css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        screw_ie8: true
      },
      comments: false,
    }),
    new OptimizeCssAssetsPlugin()
  );
}

export default webpackConfig;
