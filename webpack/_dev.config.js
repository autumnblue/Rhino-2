/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ silent: true });
}

const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const assetsPath = path.resolve(__dirname, '../static/dist');

const { webpackHost, webpackPort } = require('../config/env');


const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      'babel-polyfill',
      `webpack-hot-middleware/client?path=http://${webpackHost}:${webpackPort}/__webpack_hmr`,
      './client',
    ],
  },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `http://${webpackHost}:${webpackPort}/dist/`,
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
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss',
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
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
        test: /(\.jpeg|\.jpg|\.png|\.gif)$/,
        loader: 'url-loader?limit=10240',
      },
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader','awesome-typescript-loader'],
        exclude: [/node_modules/,nodeModulesPath]
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
    root: [path.resolve('./shared')],
    extensions: ['', '.json', '.js', '.jsx', '.ts', '.tsx'],
  },
  // externals: {
  //   'react': 'React',
  // },
  plugins: [
    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
      'process.env': {
        NODE_ENV: '"development"',
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
  ],
  node: {
    fs: 'empty',
    net: 'mock',
    tls: 'mock',
  },
};
