



export function load() {

}

function refreshToken() {
  httpGet('user/refresh_token')
  .use(plugins.parse('json'))
  .then((response) => {
    cookie.save('token', response.body.result, { path: '/' });
  })
  .catch((err) => {
    console.log(err);
  });
}
