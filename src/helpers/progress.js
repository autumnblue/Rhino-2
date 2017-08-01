import nprogress from 'nprogress';

let calls = 0;

export function increment() {
  if (calls++ === 0) {
    nprogress.start();
  }
}

export function decrement() {
  if (--calls === 0) {
    nprogress.done();
  } else {
    nprogress.inc();
  }
}
