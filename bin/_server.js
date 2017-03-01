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
import { port, apiHost, apiPort } from '../config/env';

const targetUrl = `http://${apiHost}:${apiPort}`;
const pretty = new PrettyError();
const app = express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true,
});

// app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'static')));

app.use('/api', (req, res) => {
  proxy.web(req, res, { target: `${targetUrl}/api` });
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
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

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }
  // Used for HTTPS only requests. This header is added by AWS ELB
  if (req.header('X-Forwarded-Proto') && req.header('X-Forwarded-Proto') !== process.env.HTTP_PROTO) {
    console.info(`Redirecting by header X-Forwarded-Proto: ${req.header('X-Forwarded-Proto')} to ${process.env.HTTP_PROTO}://${process.env.VIRTUAL_HOST}${req.originalUrl}`);
    return res.redirect(301, `${process.env.HTTP_PROTO}://${process.env.VIRTUAL_HOST}${req.originalUrl}`);
  }

  const memoryHistory = createHistory(req.originalUrl);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send(`<!doctype html>${ReactDOM.renderToString(<Default assets={webpackIsomorphicTools.assets()} store={store} />)}`);
  }

  match({ history, routes: configRoutes(store), location: req.originalUrl },
  (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      const component = (
        <Provider store={store} key="provider">
          <RouterContext {...renderProps} />
        </Provider>
      );

      res.status(200);

      global.navigator = { userAgent: req.headers['user-agent'] };

      res.send(`<!doctype html>${ReactDOM.renderToStaticMarkup(<Default assets={webpackIsomorphicTools.assets()} component={component} store={store} />)}`);
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Server listening on port ${port}!`);
  }
});
