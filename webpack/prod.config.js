/* eslint import/no-extraneous-dependencies: 0 */

const path = require('path');
const webpack = require('webpack');

const assetsPath = path.resolve(__dirname, '../static/dist/');

const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig);

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      'babel-polyfill',
      './client',
    ],
  },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
                  'style',
                  'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss'
                ),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!less'),
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /(\.json)$/,
        loader: 'json-loader',
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader?limit=10240',
      },
    ],
  },
  postcss() {
    return [autoprefixer];
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'node_modules',
      'shared',
    ],
    extensions: ['', '.json', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        API_URL: JSON.stringify(process.env.API_URL),
      },
      __CLIENT__: true,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    webpackIsomorphicToolsPlugin,
  ],
};
