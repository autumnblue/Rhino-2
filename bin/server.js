/* eslint no-console: 0, react/jsx-filename-extension: 0 */

const express = require('express');
const favicon = require( 'serve-favicon');
const http = require( 'http');
const httpProxy = require( 'http-proxy');
const path = require( 'path');
const PrettyError = require( 'pretty-error');
const { port, apiHost, apiPort, webpackHost, webpackPort } = require( '../config/env');

const targetUrl = `http://${apiHost}:${apiPort}`;
const pretty = new PrettyError();
const app = express();
const server = new http.Server(app);
/*const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true,
});


app.use('/api', (req, res) => {
  proxy.web(req, res, { target: `${targetUrl}/api` });
});*/

if(process.env.NODE_ENV == 'production') {
  var staticFile = require('connect-static-file');
  app.use(express.static(path.join(__dirname, '../dist')));
  app.use('*', staticFile(path.join(__dirname, '../dist/index.html')));
} else {
  const targetUrl = `http://${webpackHost}:${webpackPort}`
  const proxy = httpProxy.createProxyServer({
    target: targetUrl,
    ws: true,
  });

  proxy.on('error', (error, req, res) => {
    if (error.code !== 'ECONNRESET') {
      console.error('proxy error', error);
    }

    if (!res.headersSent) {
      res.writeHead(500, { 'content-type': 'application/json' });
    }

    const json = { error: 'proxy_error', reason: error.message };

    res.end(JSON.stringify(json));
  });

  app.use('*', (req, res) => {
    proxy.web(req, res, { target: `${targetUrl}` });
  });


}


server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});




app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Server listening on port ${port}!`);
  }
});
