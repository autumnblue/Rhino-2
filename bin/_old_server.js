/* eslint global-require: 0 */

const path = require('path');
const webpackIsomorphicToolsConfig = require('../webpack/webpack-isomorphic-tools');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

const rootDir = path.resolve(__dirname, '..');

global.__CLIENT__ = false; // eslint-disable-line
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production'; // eslint-disable-line

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .server(rootDir, () => {
    require('./_server');
  });
