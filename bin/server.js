/* eslint no-console: 0, react/jsx-filename-extension: 0 */

import express from 'express';
import favicon from 'serve-favicon';
import http from 'http';
import httpProxy from 'http-proxy';
import path from 'path';
import PrettyError from 'pretty-error';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import configureStore from '../shared/store';
import configRoutes from '../shared/routes';
import Default from '../shared/containers/Default';
import { port, apiHost, apiPort, webpackHost, webpackPort } from '../config/env';

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
