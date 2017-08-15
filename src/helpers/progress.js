import nprogress from 'nprogress';

let calls = 0;

export function increment() {
  if (++calls === 1) {
    nprogress.start();
  }
}

export function decrement() {
  setTimeout(() => {
    if (--calls === 0) {
      nprogress.done();
    } else {
      nprogress.inc(0.1);
    }
  });
}
