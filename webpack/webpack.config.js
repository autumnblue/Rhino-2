/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ silent: true });
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const outputPath = path.resolve(__dirname, '../dist');

const { webpackHost, webpackPort } = require('../config/env');


const entry = {
  main: [
    'babel-polyfill',
    './static/styles/app.less',
    './client',
  ],
}

if(process.env.NODE_ENV === 'development') {
  entry.main.unshift(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${webpackHost}:${webpackPort}`,
    'webpack/hot/only-dev-server'
  )
}

const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry,
  output: {
    path: outputPath,
    filename: 'assets/[name]-[hash].js',
    chunkFilename: 'assets/[name]-[chunkhash].js',
    publicPath: process.env.NODE_ENV === 'development' ? `http://${webpackHost}:${webpackPort}/` : '/',
  },
  module: {
    rules:  [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [{
              loader: 'style-loader',
          },
          {
              loader: 'css-loader',
              options: {
                  sourceMap: process.env.NODE_ENV === 'development',
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
              },
          },
          {
              loader: 'postcss-loader',
              options: {
                  plugins: () => [autoprefixer],
              },
          },
        ],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]',
      },
      {
        test: /(\.json)$/,
        use: 'json-loader',
      },
      {
        test: /(\.jpeg|\.jpg|\.png|\.gif)$/,
        use: 'url-loader?limit=10240',
      }
    ]
  },
  resolve: {
    alias: {
       client: path.resolve(__dirname, '../client/'),
   },
    modules: [path.resolve('./client'), 'node_modules'],
    extensions: ['.json', '.js', '.jsx'],
  },
  plugins: [
    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
      'process.env': {
        NODE_ENV: '"development"',
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
    new HtmlWebpackPlugin({
          template: 'client/IndexHTML.js',
        filename: './index.html'
      }),
      new CopyWebpackPlugin([
          { from: 'static', to: './assets' },
      ]),
      new webpack.ProvidePlugin({
      'React': 'react'
    })
  ],
  devServer: {
    hot: true,
    inline: true,
    stats: 'normal',
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: webpackPort,

    /*proxy: [{
        context: ['/**'],
        target: `http://localhost:${apiDevPort}`,
    }],*/
  }
};
