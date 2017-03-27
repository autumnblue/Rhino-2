import React from 'react';
import _ from 'lodash';
// import cookie from 'react-cookie';
import StackTrace from 'stacktrace-js';
// import { isClient } from './index';


export function handleInternalErrors(data, type) {
  // switch (data.message) {
    // case 'UnknownError':
    //   return 'Internal Server Error... Please contact customer service.';
    //
    // case 'NotAuthenticated':
    //   return 'You are not logged in into the application. Please log in to access your account.';
    //
    // case 'NotAuthorized':
    //   return 'You are not authorized to view this page.';
    //
    // case 'InvalidRequest':
    //   return `${data.validationErrors.map((err) => err).join('\n')}. Please try again.`;

  //   default:
  //     return 'An unknown error occurred. Please try again later.';
  // }
  let errormessage = '';
  console.log(data.response.body);
  errormessage = _.reduce(data.response.body, (errormessage, key, msg) => { console.log(key + msg); return errormessage.concat(key + " " + msg + `<br />`)} )  ;
  console.log(errormessage);
  return errormessage;
}

const log = (stack) => {
  console.log(stack.map((frame) => frame.toString()).join('\n'));
  console.groupEnd();
};

export function logger(error, store) {
  if (console.group) {
    window.console && console.error && console.error(error);

    // if (process.env.NODE_ENV !== 'development') {
      // Raven.captureException(error, {
      //   extra: {
      //     state: store.getState(),
      //   },
      // });
    // } else {
      StackTrace.fromError(error).then(log);
    // }
  }
}
