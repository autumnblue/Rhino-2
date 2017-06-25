/* eslint react/prefer-stateless-function: 0, react/no-danger: 0, react/forbid-prop-types: 0 */
/* eslint no-underscore-dangle: 0, global-require: 0 */

import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';

const IndexHTML = () => (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Rhino Security - Djavan</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,300" />
          <link rel="stylesheet" href="https://cdn.materialdesignicons.com/1.6.50/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.7.0/css/flag-icon.min.css" />*/}


        </head>
        <body>
          <div id="react-view" />
        </body>
      </html>
    );

IndexHTML.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object,
};

export default () => {
    const html = ReactDOMServer.renderToStaticMarkup(<IndexHTML />);
    return `<!DOCTYPE html>${html}`;
};
