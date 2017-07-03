module.exports = {
  port: process.env.PORT || 6001,
  host: process.env.HOST || 'localhost',

  webpackHost: 'localhost',
  webpackPort: process.env.WEBPACK_PORT || 6002,
};
